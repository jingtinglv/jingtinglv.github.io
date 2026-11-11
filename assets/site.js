/* Plain HTML remains readable and all image links work without JavaScript. */
const menu = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");
if (menu && navigation) {
  document.documentElement.classList.add("menu-ready");
  const closeMenu = () => menu.setAttribute("aria-expanded", "false");
  menu.addEventListener("click", () => {
    menu.setAttribute("aria-expanded", String(menu.getAttribute("aria-expanded") !== "true"));
  });
  navigation.addEventListener("click", closeMenu);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menu.focus();
    }
  });
}

// Track the section beneath the sticky header on both overview and research pages.
const sectionLinks = document.querySelector(".contents") || navigation;
if (sectionLinks) {
  const targets = Array.from(sectionLinks.querySelectorAll('a[href^="#"]'), link => ({
    link,
    section: document.getElementById(link.hash.slice(1))
  })).filter(item => item.section);
  const header = document.querySelector(".masthead");
  let scheduled = false;
  function updateCurrent() {
    scheduled = false;
    if (!targets.length) return;
    const offset = header.offsetHeight + 36;
    const atEnd = Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 1;
    let selected = targets[0];
    for (const item of targets) {
      if (item.section.getBoundingClientRect().top <= offset || atEnd) selected = item;
    }
    for (const item of targets) {
      if (item === selected) item.link.setAttribute("aria-current", "location");
      else item.link.removeAttribute("aria-current");
    }
  }
  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateCurrent);
  }
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("load", scheduleUpdate);
  updateCurrent();
}

function enhanceGallery(group) {
  const figures = Array.from(group.querySelectorAll("figure"));
  if (figures.length < 2) return;
  const controls = document.createElement("div");
  controls.className = "carousel-controls";
  const count = document.createElement("span");
  count.className = "slide-count";
  count.setAttribute("role", "status");
  let current = 0;
  function show(index) {
    current = (index + figures.length) % figures.length;
    figures.forEach((figure, i) => { figure.hidden = i !== current; });
    count.textContent = "Figure " + (current + 1) + " of " + figures.length;
  }
  function makeButton(label, mark, delta) {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", label);
    button.textContent = mark;
    button.addEventListener("click", () => show(current + delta));
    return button;
  }
  controls.append(makeButton("Previous figure", "←", -1), count, makeButton("Next figure", "→", 1));
  controls.addEventListener("keydown", event => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    show(current + (event.key === "ArrowRight" ? 1 : -1));
  });
  group.classList.add("enhanced");
  group.setAttribute("role", "group");
  group.append(controls);
  show(0);
}
document.querySelectorAll(".figure-set").forEach(enhanceGallery);

// Each figure is also a real link to its full image.
if (typeof HTMLDialogElement !== "undefined" && "showModal" in HTMLDialogElement.prototype) {
  const dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.setAttribute("aria-labelledby", "image-caption");
  dialog.innerHTML = '<img alt=""><div class="lightbox-bar"><p id="image-caption"></p><button type="button" aria-label="Close enlarged image">×</button></div>';
  document.body.append(dialog);
  const image = dialog.querySelector("img");
  const caption = dialog.querySelector("p");
  const close = dialog.querySelector("button");
  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  document.addEventListener("click", event => {
    const link = event.target.closest("a[data-enlarge]");
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    image.src = link.href;
    image.alt = link.querySelector("img").alt;
    caption.textContent = link.closest("figure").querySelector("figcaption").textContent;
    dialog.showModal();
    close.focus();
  });
}
