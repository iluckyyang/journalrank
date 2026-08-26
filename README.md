# JournalRank

Tampermonkey 用户脚本 —— 在各大中英文学术数据库显示期刊分区/影响因子/收录信息。

## 功能

- 在知网、万方、维普、Web of Science、Google Scholar 等学术网站搜索结果页和文章详情页自动识别期刊名
- 查询数据库并在期刊名旁添加彩色徽章，直观展示：
  - JCR 分区 (Q1/Q2/Q3/Q4)
  - 中科院分区
  - 新锐分区
  - 影响因子 (IF)、5年 IF、CiteScore、SJR 等数值指标
  - 各类中文收录：EI、CSCD、CSSCI、北大核心、科技核心、RCCSE、CCF 推荐期刊等

### 配色方案

分区使用渐变色直观区分：
- Q1 → **红色**，Q2 → **橙色**，Q3 → **蓝色**，Q4 → **绿色**
- 每个中文收录源使用独立颜色，一眼区分（解决原版本同色难以分辨的问题）：

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

| 网站 | 搜索结果页 | 文章详情页 |
|------|:----------:|:----------:|
| CNKI 中国知网 (cnki.net) | ✅ | ✅ |
| 万方数据 (wanfangdata.com.cn) | ✅ | ✅ |
| 维普 (cqvip.com) | ✅ | ✅ |
| Web of Science (webofscience.com, webofscience.clarivate.cn) | ✅ | ✅ |
| Google Scholar | ✅ | - |
| 分区表 (fenqubiao.com) | ✅ | - |

## 安装

1. 安装 Tampermonkey 浏览器扩展
2. 打开 [journalrank.js](journalrank.js)，点击「Raw」，Tampermonkey 会提示安装
3. 确保你本地运行后端服务（`127.0.0.1:8787`）提供期刊数据访问

## 数据格式

本脚本使用 `journals_flat.json.gz` 内嵌数据方案（或从本地后端加载），每条期刊数据包含：

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

- **v2.2.0**
  - 修复 Web of Science：左侧顶端误显示 Arts 分类徽章（跳过隐藏元素）
  - 修复 Web of Science：虚拟滚动后下拉结果不显示徽章（DOM 复用检测并重新渲染）
  - 新增 Web of Science 详情页支持：JCR 侧边栏读取期刊名并显示徽章
  - 重构中文索引配色：每个分类使用独立颜色，提升辨识度
- **v2.1.x**
  - 改进知网新版页面兼容性
  - 增加更多选择器适配不同布局
- **v2.0.x**
  - 初始版本

## License

AGPL-3.0-or-later
