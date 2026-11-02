# 商棋 · AI 产品经理

商棋的个人网站，包含个人介绍、关注方向和可展开的思考手记。

**网站地址：<https://tophung48162-cell.github.io/>**

## 文件说明

- `index.html`：网站页面，包含响应式样式和交互脚本。
- `.nojekyll`：以静态文件方式发布，跳过 Jekyll 处理。

## 本地预览

在仓库目录运行：

```sh
python3 -m http.server 8000
```

访问 <http://localhost:8000>。

## 更新网站

修改 `index.html`，提交并推送到 `main` 分支。GitHub Pages 使用 `main` 分支根目录作为发布源，推送后会自动更新网站。

```sh
git add index.html
git commit -m "Update personal website"
git push origin main
```

网站无需安装依赖或执行构建。字体使用 Google Fonts，无法加载时会回退到系统字体。
