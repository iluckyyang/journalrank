# JournalRank

Tampermonkey 用户脚本 —— 在中国知网（CNKI）搜索/详情页自动识别期刊并显示期刊分区、影响因子与收录信息。

> 当前版本仅支持 CNKI 中国知网。WoS / 万方 / 维普等站点由于域名滚动检测易引发重复显示等问题，暂不维护。

## 功能

- 在知网搜索结果页与文章详情页自动识别期刊名
- 查询本地内嵌数据库并在期刊名旁添加彩色徽章，直观展示：
  - JCR 分区 (Q1/Q2/Q3/Q4)
  - 中科院分区
  - 新锐分区
  - 影响因子 (IF)、5年 IF、CiteScore、SJR 等数值指标
  - 各类中文收录：EI、CSCD、CSSCI、北大核心、科技核心、RCCSE、CCF 推荐期刊等

### 配色方案

分区使用渐变色直观区分：
- Q1 → **红色**，Q2 → **橙色**，Q3 → **蓝色**，Q4 → **绿色**
- 每个中文收录源使用独立颜色，一眼区分：

| 分类 | 颜色 |
|------|------|
| EI | 紫 (#6c3483) |
| DOAJ | 浅紫 (#9b59b6) |
| CSCD | 深青绿 (#117a65) |
| 科技核心 / ISTIC | 青绿 (#16a085 / #0e6655) |
| CSSCI | 蓝 (#2471a3) |
| 北大核心 | 深蓝灰 (#34495e) |
| CCF | 暗红 (#c0392b) |
| NSFC | 橙红 (#d35400) |
| 中文核心 | 黄褐 (#b7950b) |

## 支持网站

| 网站 | 搜索结果页 | 文章详情页 | 备注 |
|------|:----------:|:----------:|------|
| CNKI 中国知网 (cnki.net) | ✅ | ✅ | 主要支持 |
| Google Scholar (scholar.google.*) | ✅ | ✅ | 含作者引用页 (/citations) |
| Web of Science (webofscience.com) | ✅ | ✅ | 搜索结果用定时兜底重扫适配虚拟滚动 |

## 安装

1. 安装 Tampermonkey 浏览器扩展
2. 打开 [journalrank.js](journalrank.js)，点击「Raw」，Tampermonkey 会提示安装
3. 安装时脚本会从 jsDelivr CDN 自动拉取期刊数据（`journals_flat.json.gz`），无需本地后端

## 数据格式

本脚本使用 `journals_flat.json.gz` 内嵌数据，每条期刊数据包含：

```json
{
  "name": "期刊名",
  "name_en": "英文刊名",
  "issn": "ISSN",
  "if": 影响因子,
  "jcr_quartile": "Q1",
  "cas_zone": "1区",
  "ei": true,
  "cscd": true,
  "cssci": true,
  "pku": true,
  ...
}
```

## 更新日志

- **v0.0.1**
  - 首次发布（GitHub 托管）
  - 数据源使用 jsDelivr CDN，去除本地后端依赖
  - 支持 CNKI 知网、Web of Science、Google Scholar
  - 修复知网翻页补跑与滚动重复显示、WoS 虚拟滚动重扫等问题

- **v2.1.x**
  - 改进知网新版页面兼容性
  - 增加更多选择器适配不同布局
- **v2.0.x**
  - 初始版本

## License

AGPL-3.0-or-later