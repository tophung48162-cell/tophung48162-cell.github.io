# 设计记录

## 2026-11-03：按参考布局校正

用户指出第一版自行增加的开场大标题、侧栏白卡及不同字体尺寸偏离参考。本次以参考的具体尺寸校正：1040px 容器含左右 24px 内边距、左内容与 280px 右栏之间留 48px、60px 导航、首屏三张统计卡、无卡框侧栏，以及 #d26911 强调色和暖色流光背景。手机在 860px 以下改为单栏，统计卡也逐张排列。

右栏恢复搜索、个人简介、近期文章、分类及联系入口；左侧依次为重点项目、文章、全部项目、技能。未提供账号的内容平台模块省略，不另加 hero 填补。五篇文章补充原创中性 SVG 题图以匹配图文横排，题图没有冒充原文截图，文章标题与链接保持不变。


## 历史版本：第一次内容型双栏改版

依据用户新提供的 https://macistone71-jpg.github.io/dujiaoshou1/ 调整版式：紧凑导航、三张速览卡、左侧项目与文章、右侧个人资料，使用浅米白、暖橙链接、细边框和轻微环境动效。保留原 GitHub Pages 地址。

- 只使用商棋已确认的四个项目、五篇文章与环境设计学士学历；删除未确认标题的旧文章入口、泛化手记及原来的大幅概念图。
- 未提供独立主页的内容平台、工作年限、客户评价、阅读量和文章日期不展示。
- 文章无确认封面，统一采用完整宽度的文字列表；搜索放在文章区，手机上无需滚至侧栏才能使用。
- 项目两列、窄屏一列。移动导航可展开、点击后关闭，并支持 Escape；页面始终保留直接可用的 HTML 链接。
- 动画只用于轻微背景移动及悬停，遵循减少动态效果偏好。
- 本地头像来源：https://avatars.githubusercontent.com/u/340945648?v=4 。

## 历史版本：白色画廊

本次设计依据用户提供的 Apple 风格参考：白色画廊画布、居中大标题、浅灰章节带、28px 无阴影卡片和紧凑蓝色控件。网站身份及内容始终为“商棋 · AI 产品经理”。

## 主视觉

- 工具：内置 ImageGen。
- 文件：`assets/hero-studio.png`。
- 尺寸：1774 × 887。
- 用途：产品构想工作台的概念视觉；并非真实客户项目截图。

最终提示词：

```text
Use case: product-mockup
Asset type: wide hero photograph for Shang Qi's AI product manager portfolio website.
Primary request: A premium, photorealistic AI product design workspace in an infinite pure white studio, composed like an elegant technology product launch photograph.
Scene/backdrop: seamless pure #ffffff background and white tabletop with no visible horizon. A restrained, high-end gallery atmosphere.
Subject: one unbranded ultra-thin silver aluminum laptop, center-left, open at a natural working angle and photographed from a front three-quarter viewpoint. The screen displays a tasteful light gray and white product concept canvas: three large, spacious groups of rounded cards, connected by very fine lines, with small muted blue and pale lavender blocks. The only optional screen words are "Discover", "Design", "Validate". No dense dashboard or metrics. On the right, a small open off-white sketch notebook with mostly blank pages and one slender black pen.
Composition/framing: landscape 2:1 aspect ratio, subject arrangement occupies approximately 78% of the total width; small top and bottom margins, complete laptop silhouette visible, notebook placed closer to camera but secondary in scale. Visual weight centered, clean negative white space at both edges. No text outside the laptop display.
Lighting/mood: bright, diffuse, luxurious studio photography, accurate subtle metal edge highlights, beautiful realistic material details, very soft natural contact shadows only.
Materials/textures: precision-milled silver aluminum, matte black keyboard, crisp glass screen, fine paper grain.
Constraints: photographic realism, restrained and editorial, no people, no brand logos, no watermark, no colorful background, no gradient background, no dark background, no floating UI, no extra desk props, no fake performance data, no huge headline in the image. The image must blend into a pure white webpage.
```
