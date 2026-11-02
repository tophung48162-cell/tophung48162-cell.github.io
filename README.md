# 商棋 · AI 产品经理

商棋的个人网站，包含 4 个项目、5 篇已发布文章、技能与个人介绍。

**网站地址：<https://tophung48162-cell.github.io/>**

## 文件说明

- `index.html`：网站内容及语义化页面结构。
- `styles.css`：按参考对齐的暖色双栏布局、三列重点项目、图文文章列表及手机端样式。
- `script.js`：侧栏文章搜索与分类筛选、手机导航及年份更新。
- `assets/avatar.jpg`：商棋公开的 GitHub 头像，本地保存以避免外部加载依赖。
- `assets/favicon.svg`：网站图标。
- `assets/covers/`：五篇文章的原创 SVG 题图，用于排版展示，不是文章原始封面或产品截图。
- `.nojekyll`：以静态文件方式发布，跳过 Jekyll 处理。

## 本地预览

在仓库目录运行：

```sh
python3 -m http.server 8000
```

访问 <http://localhost:8000>。

## 更新网站

修改相应的 HTML、CSS、JS 或图片，提交并推送到 `main` 分支。GitHub Pages 使用 `main` 分支根目录作为发布源，推送后会自动更新网站。

```sh
git add index.html styles.css script.js assets README.md
git commit -m "Update personal website"
git push origin main
```

网站无需安装依赖或执行构建。字体使用系统字体，无第三方字体、统计或脚本请求。JavaScript 不可用时，项目、文章、导航和邮箱链接仍可直接访问；搜索、分类与折叠菜单仅在脚本运行后出现。

新增文章时，在 `index.html` 的 `.article-list` 添加标题、公开链接、分类与检索关键词，并同步顶部数量、分类计数及侧栏近期文章。不补造日期、阅读量、文章摘要或截图。项目状态应保持准确；诉状后台仅展示公开仓库，不提供业务系统入口。

版式参考用户提供的 [个人网站](https://macistone71-jpg.github.io/dujiaoshou1/)，用原创 HTML/CSS 实现双栏内容结构。设计取舍见 [设计记录](DESIGN-NOTES.md)。旧版 `assets/hero-studio.png` 为历史概念图，当前页面不再加载。
