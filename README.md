# JournalRank

Tampermonkey 用户脚本 —— 在中国知网（CNKI）搜索/详情页自动识别期刊并显示期刊分区、影响因子与收录信息。

> 当前版本暂支持 CNKI 、WOS、 Google scholar。

## 功能

- 在搜索结果页与文章详情页自动识别期刊名
- 查询本地内嵌数据库并在期刊名旁添加彩色徽章，直观展示：
  - JCR 分区 (Q1/Q2/Q3/Q4)
  - 中科院分区
  - 新锐分区

- 各类中文收录：EI、CSCD、CSSCI、北大核心等



## 支持网站

| 网站                                | 搜索结果页 | 文章详情页 | 备注  |
| --------------------------------- |:-----:|:-----:| --- |
| CNKI 中国知网 (cnki.net)              | ✅     | ✅     |     |
| Google Scholar (scholar.google.*) | ✅     | ✅     |     |
| Web of Science (webofscience.com) | ✅     | ✅     |     |

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
  - 

- 

## License

AGPL-3.0-or-later