# Jingting Lv 的学术个人网站

这是一个可直接放在 GitHub Pages 上的英文申请网站。双击 `index.html` 就可以在浏览器预览。字体和图片都保存在项目里，修改和预览均无需安装软件包。

## 日常修改

| 想改什么 | 打开哪里 | 如何修改 |
| --- | --- | --- |
| 申请状态、学校、研究兴趣、联系方式、Currently | `index.html` | 搜索页面上现有的英文句子，替换文字。改 Currently 时同步更新月份和 `datetime`。 |
| 首页项目卡片、论文、奖项、新闻和相册 | `index.html` | 搜索栏目名。新增奖项时复制一条 `<li>`；新增论文时复制一段 `<article class="publication">`。 |
| 项目全文和图注 | `research.html` | 找到相应标题，编辑正文和 `<figcaption>`。每个项目有独立链接，例如 `research.html#bumblebee-brain`。 |
| 增加研究图 | `research.html`、`assets/images/` | 把图片放入图片目录，在对应 `figure-set` 中复制一个 `<figure>`，更新链接、图片地址、`alt` 和图注。轮播页数会自动更新。 |
| 增加新项目 | 两个 HTML 文件 | 在详情页复制一个 `research-article`，设定新的英文 `id`，把它加进该页的项目目录，再从首页项目区链接到这个 `id`。 |
| 替换简历 | `assets/files/Jingting-Lv-CV.pdf` | 用正式 PDF 覆盖这个文件，保留文件名。下载按钮会自动指向新版本。 |
| 更换头像 | `assets/images/portrait.webp` | 用同名 WebP 替换；若用 JPG，可在首页同时更改图片路径及描述。 |
| 修改配色和布局 | `assets/site.css` | 文件开头的 `:root` 集中定义主色、纸张色、字体和页边距。 |
| 调整菜单、轮播和图片放大 | `assets/site.js` | 页面正文均在 HTML 中。关闭 JavaScript 时，研究图会按顺序展开。 |

导航和页脚出现在两张页面上，修改栏目名或底部邮箱时需一起更新。首页的研究是摘要，项目全文在详情页；稿件状态发生变化时，搜索两页的 `under revision` 一并修改。

## 站点地址与更新

- [当前主页](https://jingtinglv.github.io/) 的入口是根目录的 `index.html`。研究详情页是 `research.html`。
- [旧版主页](https://jingtinglv.github.io/old/) 在 `old/`。该目录保存原网页、脚本、样式和照片。Google 站点验证文件继续放在仓库根目录。
- 本目录对应 [jingtinglv/jingtinglv.github.io](https://github.com/jingtinglv/jingtinglv.github.io) 的 `main` 分支。修改后可先双击 `index.html` 预览，再提交和推送。GitHub Pages 会自动更新站点。

## 本版内容和待确认项

- 主资料是 `个人网站-3.docx` 及 `work1–work3` 的研究图。头像采用同套资料中的 `profile.jpg`，Gallery 使用工作照和转座子概念草图。网站使用压缩副本。
- 奖项和第三组建模项目来自上一级目录的早期 `个人网站.docx`。奖项只录入草稿已有的信息，发布前可对照证书补全赛区、组别及年份。
- 下载区现为注明 placeholder 的单页 PDF。正式用于申请前请覆盖为最新 CV，并核对年级、招生意向和 Currently 月份。
- 已发表综述在 2026 年 9 月 14 日上线，出版商 PDF 的卷年为 2027。网站分别列出这两个日期。链接指向[论文 DOI](https://doi.org/10.1016/j.cois.2026.101619)。
- iBumblebee 的网站已开放，稿件状态按最新文稿写作返修。硕士课题的调控及行为效应列为仍在检验的假说。公开前可自行选定希望保留的未发表研究图。
- 首页的信息层级参考 [Trevor Bedford 的介绍页](https://bedford.io/team/trevor-bedford/)和 [Claus Wilke 的个人网站](https://clauswilke.com/)。本站的设计及页面实现独立编写。字体 DM Sans 和 Instrument Serif 的授权随字体保存在 `assets/fonts/`。
