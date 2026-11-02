# 商棋 · AI 产品经理

商棋的个人网站，包含个人介绍、关注方向和可展开的思考手记。

**网站地址：<https://tophung48162-cell.github.io/>**

## 文件说明

- `index.html`：网站内容及语义化页面结构。
- `styles.css`：响应式视觉样式，采用白色画廊、浅灰章节和克制的蓝色控件。
- `script.js`：关注方向横向浏览控件及年份更新。
- `assets/`：工作台主视觉及网站图标。
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

网站无需安装依赖或执行构建。字体使用系统字体，无第三方字体请求。思考手记使用原生 `details` 控件，在 JavaScript 不可用时仍能展开。

主视觉通过内置 ImageGen 生成，用于表达产品构想场景，不代表已交付的项目。生成提示词见 [设计记录](DESIGN-NOTES.md)。
