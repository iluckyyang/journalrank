// ==UserScript==
// @name         JournalRank
// @namespace    https://github.com/iluckyyang/journalrank
// @version      0.0.3
// @author       Yang
// @license      AGPL-3.0-or-later
// @description  在学术网站上显示期刊分区/影响因子/收录情况。本地后端版本，支持 JCR 分区、中科院分区、新锐分区、EI、CSCD、CSSCI、科技核心等。访问文献网页时，自动检测期刊名称/ISSN，调用本地后端查询并显示彩色徽章。
// @icon         data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="%233498db"/><text x="12" y="17" font-size="14" font-weight="bold" fill="white" text-anchor="middle" font-family="sans-serif">OS</text></svg>
// @resource    journals_flat https://gcore.jsdelivr.net/gh/iluckyyang/journalrank@main/data/journals_flat.json.gz
// @match        *://cnki.net/*
// @match        *://*.cnki.net/*
// @match        *://*.wanfangdata.com.cn/*
// @match        *://*.cqvip.com/*
// @match        *://scholar.google.com/*
// @match        *://scholar.google.com.hk/*
// @match        *://scholar.google.com.tw/*
// @match        *://scholar.google.co.uk/*
// @match        *://scholar.google.com.au/*
// @match        *://scholar.google.ca/*
// @match        *://*.googleusercontent.com/*
// @match        *://xueshu.lanfanshu.cn/*
// @match        *://*.webofscience.com/*
// @match        *://*.clarivate.cn/*
// @match        *://*.webofscience.clarivate.cn/*
// @match        *://*.clarivate.com/*
// @match        *://*.fenqubiao.com/*
// @match        *://*.sciencedirect.com/*
// @match        *://*.springer.com/*
// @match        *://*.nature.com/*
// @match        *://xueshu.baidu.com/*
// @match        *://pubmed.ncbi.nlm.nih.gov/*
// @match        *://*.tandfonline.com/*

// @connect      *
// @connect      cnki.net
// @connect      deepl.com
// @connect      deepl-pro.com
// @connect      baidu.com
// @connect      iciba.com
// @connect      naver.com
// @connect      xfyun.cn
// @connect      xf-yun.com
// @connect      openl.club
// @connect      yandex.net
// @connect      yandex.com
// @connect      youdao.com
// @connect      taobao.com
// @connect      alibaba.com
// @connect      reverso.net
// @connect      niutrans.com
// @connect      caiyunai.com
// @connect      volcengine.com
// @connect      volcengineapi.com
// @connect      myhuaweicloud.com
// @connect      tencentcloudapi.com
// @connect      microsofttranslator.com
// @connect      libretranslate.com
// @connect      papago-chrome.com
// @connect      githubusercontent.com
// @connect      ctcontents.com
// @connect      ctfile.com
// @connect      jihulab.com
// @connect      gitlab.com
// @connect      gitlab.cn
// @connect      gitea.com
// @connect      gitee.com
// @connect      github.com
// @connect      gitcode.com
// @connect      scigreat.com
// @connect      sssam.com
// @connect      ooopn.com
// @connect      llhlf.com
// @connect      libgen.bz
// @connect      libgen.la
// @connect      libgen.li
// @connect      libgen.bz
// @connect      libgen.vg
// @connect      libgen.ee
// @connect      libgen.gs
// @connect      libgen.gl
// @connect      booksdl.org
// @connect      crossref.org
// @connect      crosscite.org
// @connect      fenqubiao.com
// @connect      arxiv.org
// @connect      doi.org
// @connect      oa.works
// @connect      ieee.org
// @connect      oadoi.org
// @connect      core.ac.uk
// @connect      scopus.com
// @connect      pubpeer.com
// @connect      openalex.org
// @connect      elsevier.com
// @connect      unpaywall.org
// @connect      researchgate.net
// @connect      sciencedirect.com
// @connect      connectedpapers.com
// @connect      semanticscholar.org
// @connect      openaccessbutton.org
// @connect      ncbi.nlm.nih.gov
// @connect      zidianzhan.net
// @connect      usualwant.com
// @connect      scrongyao.com
// @connect      bothonce.com
// @connect      3800808.com
// @connect      et-fine.com
// @connect      wellesu.com
// @connect      hkvisa.net
// @connect      tesble.com
// @connect      pismin.com
// @connect      sci-hub.ren
// @connect      sci-hub.cat
// @connect      sci-hub.box
// @connect      sci-hub.red
// @connect      sci-hub.ee
// @connect      sci-hub.se
// @connect      sci-hub.st
// @connect      sci-hub.ru
// @connect      sci-hub.wf
// @connect      sci-hub.yt
// @connect      sci-hub.in
// @connect      sci-hub.lu
// @connect      sci-hub.vg
// @connect      sci-hub.al
// @connect      vkif.top
// @connect      bban.top
// @connect      mksa.top
// @connect      google.ae
// @connect      google.at
// @connect      google.be
// @connect      google.bg
// @connect      google.ca
// @connect      google.cat
// @connect      google.ch
// @connect      google.cl
// @connect      google.co.cr
// @connect      google.co.id
// @connect      google.co.il
// @connect      google.co.in
// @connect      google.co.jp
// @connect      google.co.kr
// @connect      google.co.nz
// @connect      google.co.th
// @connect      google.co.uk
// @connect      google.co.ve
// @connect      google.co.za
// @connect      google.com.ar
// @connect      google.com.au
// @connect      google.com.bo
// @connect      google.com.br
// @connect      google.com.co
// @connect      google.com.cu
// @connect      google.com.do
// @connect      google.com.ec
// @connect      google.com.eg
// @connect      google.com.gt
// @connect      google.com.hk
// @connect      google.com.ly
// @connect      google.com.mx
// @connect      google.com.my
// @connect      google.com.ni
// @connect      google.com.pa
// @connect      google.com.pe
// @connect      google.com.ph
// @connect      google.com.pk
// @connect      google.com.pr
// @connect      google.com.py
// @connect      google.com.sg
// @connect      google.com.sv
// @connect      google.com.tr
// @connect      google.com.tw
// @connect      google.com.ua
// @connect      google.com.uy
// @connect      google.com.vn
// @connect      google.com
// @connect      google.cz
// @connect      google.de
// @connect      google.dk
// @connect      google.es
// @connect      google.fi
// @connect      google.fr
// @connect      google.gr
// @connect      google.hk
// @connect      google.hn
// @connect      google.hr
// @connect      google.hu
// @connect      google.is
// @connect      google.it
// @connect      google.jp
// @connect      google.li
// @connect      google.lt
// @connect      google.lu
// @connect      google.lv
// @connect      google.nl
// @connect      google.no
// @connect      google.pk
// @connect      google.pl
// @connect      google.pt
// @connect      google.ro
// @connect      google.ru
// @connect      google.se
// @connect      google.si
// @connect      google.sk
// @connect      typicalgame.com
// @connect      defineabc.com
// @connect      dotaindex.com
// @connect      panda985.com
// @connect      lanfanshu.cn
// @connect      cljtscd.com
// @connect      aigrogu.com
// @connect      linfen3.top
// @connect      gupiaoq.com
// @connect      fropet.com
// @connect      beds.ac.uk
// @connect      kcpon.com
// @connect      nq69.top
// @connect      vygc.top
// @connect      add.pub
// @connect      iit.xyz
// @connect      nbguge.com
// @connect      essclick.com
// @connect      duavekuran.com
// @connect      sci-hub.org.cn
// @connect      plausibility.cloud
// @connect      thedaviddelta.com
// @connect      sphererapids.com
// @connect      dialectapp.org
// @connect      paperguard.cc
// @connect      pot-app.com
// @connect      vercel.app
// @connect      lingva.ml
// @connect      gpt.ge
// @connect      bltcy.ai
// @connect      gptbest.vip
// @connect      aaai.vip
// @connect      vveai.com
// @connect      api.v3.cm
// @connect      api.v36.cm
// @connect      sealos.run
// @connect      api2d.net
// @connect      api2d.site
// @connect      api2d.online
// @connect      tryfastgpt.ai
// @connect      apiproxy.top
// @connect      oaibest.com
// @connect      g4f.icu
// @connect      fastgpt.cn
// @connect      aiproxy.io
// @connect      dmxapi.com
// @connect      deerapi.com
// @connect      gptsapi.net
// @connect      chatfire.cn
// @connect      chatfire.cc
// @connect      apiproxy.top
// @connect      aihubmix.com
// @connect      zhidouai.com
// @connect      openkey.cloud
// @connect      openai-sb.com
// @connect      fast-tunnel.one
// @connect      blueshirtmap.com
// @connect      openai-proxy.live
// @connect      closeai-proxy.xyz
// @connect      openai-proxy.org
// @connect      chatanywhere.org
// @connect      chatanywhere.tech
// @connect      api-forwards.com
// @connect      openai.com
// @connect      x.ai
// @connect      360.cn
// @connect      jina.ai
// @connect      groq.com
// @connect      mistral.ai
// @connect      cohere.ai
// @connect      cohere.com
// @connect      moonshot.cn
// @connect      deepseek.com
// @connect      minimaxi.com
// @connect      sensenova.cn
// @connect      fireworks.ai
// @connect      together.xyz
// @connect      anthropic.com
// @connect      modelscope.cn
// @connect      openrouter.ai
// @connect      perplexity.ai
// @connect      googleapis.com
// @connect      siliconflow.cn
// @connect      siliconflow.com
// @connect      hyperbolic.xyz
// @connect      api.nvidia.com
// @connect      cloudflare.com
// @connect      lingyiwanwu.com
// @connect      baichuan-ai.com
// @connect      llama-api.com
// @connect      llmapi.com
// @connect      infini-ai.com
// @connect      aliyuncs.com
// @connect      baidubce.com
// @connect      tencent.com
// @connect      ppinfra.com
// @connect      bigmodel.cn
// @connect      stepfun.com
// @connect      volces.com
// @connect      wair.ac.cn
// @connect      localhost
// @connect      127.0.0.1
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_addStyle
// @grant        GM_getResourceURL
// @grant        unsafeWindow
// @run-at       document-idle
// @noframes
// ==/UserScript==

(function () {
  'use strict';

  // ===========================================================================
  // 0. Tampermonkey API normalization
  // ===========================================================================
  const GM_xmlhttp = (typeof GM_xmlhttpRequest !== 'undefined')
    ? GM_xmlhttpRequest
    : (typeof GM !== 'undefined' && GM.xmlHttpRequest) ? GM.xmlHttpRequest : null;
  const GM_set = (typeof GM_setValue !== 'undefined')
    ? GM_setValue
    : (typeof GM !== 'undefined' && GM.setValue) ? GM.setValue : null;
  const GM_get = (typeof GM_getValue !== 'undefined')
    ? GM_getValue
    : (typeof GM !== 'undefined' && GM.getValue) ? GM.getValue : null;
  const GM_menu = (typeof GM_registerMenuCommand !== 'undefined')
    ? GM_registerMenuCommand
    : (typeof GM !== 'undefined' && GM.registerMenuCommand) ? GM.registerMenuCommand : null;
  const GM_style = (typeof GM_addStyle !== 'undefined')
    ? GM_addStyle
    : (typeof GM !== 'undefined' && GM.addStyle) ? GM.addStyle : null;

  if (!GM_xmlhttp || !GM_get || !GM_set) {
    console.warn('[JournalRank] Tampermonkey APIs not available. Script disabled.');
    return;
  }

  // ===========================================================================
  // 1. Configuration
  // ===========================================================================
  const SCRIPT_NAME = 'JournalRank';
  const SCRIPT_VERSION = '0.0.3';
  const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
  const BATCH_SIZE = 50;                          // journals per /api/checkrank request
  const SCAN_DEBOUNCE_MS = 600;
  const MAX_BADGES_PER_PAGE = 200;

  // Default settings (overridable via menu)
  // For the Cloudflare Workers deployment, set apiBase to your Worker URL,
  // e.g. https://JournalRank-api.<your-subdomain>.workers.dev
  const DEFAULTS = {
    apiBase: 'http://127.0.0.1:8787',
    apikey: '',            // required when the backend enforces global auth
    enabled: true,
    showTooltip: true,
    showFloatingPanel: false,
    displayOrder: ['imf', 'jcr', 'cas', 'xr', 'ei', 'cscd', 'cssci', 'xr_warning'],
    // Local JSON mode: set localJsonUrl to a flat JSON URL for instant lookups
    // Generate via: python scripts/export_flat_json.py --minify --gzip
    localJsonUrl: 'https://gcore.jsdelivr.net/gh/iluckyyang/journalrank@main/data/journals_flat.json.gz',      // e.g. 'https://gcore.jsdelivr.net/gh/iluckyyang/journalrank@main/data/journals_flat.json.gz'
    useLocal: true,        // 默认开启本地优先：加载成功则离线秒查，失败自动回退服务器模式
  };

  // Load settings
  function loadSettings() {
    const s = { ...DEFAULTS };
    try {
      const saved = JSON.parse(GM_get('os_settings', '{}'));
      Object.assign(s, saved);
    } catch (e) { /* ignore */ }
    return s;
  }
  const SETTINGS = loadSettings();

  function saveSettings() {
    GM_set('os_settings', JSON.stringify(SETTINGS));
  }

  // ===========================================================================
  // 1.5  Local JSON lookup engine — instant client-side journal resolution.
  //      When useLocal=true and localJsonUrl is set, the userscript downloads a
  //      flat JSON (generated by scripts/export_flat_json.py) and resolves
  //      journal titles directly from memory, skipping the server entirely.
  // ===========================================================================
  const localDB = {
    _byTitle: null,       // norm(title) -> record
    _byISSN: null,        // ISSN -> record
    _ready: false,
    _loading: false,
    _promise: null,       // 指向进行中的 init Promise，便于并发调用 join 等待
    _lastUrl: '',
    _resourceName: 'journals_flat',                  // matches @resource directive in metadata
    _cacheKey:    'os_localdb_raw_v1',                // GM_set key for cached raw JSON text
    _cacheTTL:    7 * 24 * 60 * 60 * 1000,           // 7 days

    /** Normalise a title for lookup key (same algorithm as export_flat_json.py). */
    _norm(s) {
      if (!s) return '';
      return String(s).toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]+/g, '');
    },

    /** Build in-memory title/ISSN indexes from a raw JSON string. */
    _buildFromRaw(raw) {
      const records = JSON.parse(raw);
      const byTitle = new Map();
      const byISSN = new Map();
      for (const r of records) {
        const nt = this._norm(r.ti);
        if (nt && !byTitle.has(nt)) byTitle.set(nt, r);
        if (r.zh) {
          const nz = this._norm(r.zh);
          if (nz && !byTitle.has(nz)) byTitle.set(nz, r);
        }
        if (r.in) {
          const clean = r.in.replace(/[^0-9Xx]/g, '').toUpperCase();
          if (clean && !byISSN.has(clean)) byISSN.set(clean, r);
        }
        if (r.es) {
          const clean = r.es.replace(/[^0-9Xx]/g, '').toUpperCase();
          if (clean && !byISSN.has(clean)) byISSN.set(clean, r);
        }
      }
      this._byTitle = byTitle;
      this._byISSN = byISSN;
      this._ready = true;
      console.log(`[JournalRank] Local JSON indexed: ${records.length} journals, ${byTitle.size} title keys, ${byISSN.size} ISSN keys`);
      return true;
    },

    /** Read cached raw JSON text from GM storage. Returns string or null. */
    _readCache() {
      try {
        const raw = GM_get(this._cacheKey, null);
        if (!raw) return null;
        const obj = JSON.parse(raw);
        if (!obj || !obj.ts || !obj.data) return null;
        if (Date.now() - obj.ts > this._cacheTTL) return null;
        return obj.data;
      } catch (e) { return null; }
    },

    /** Persist raw JSON text to GM storage with TTL. */
    _writeCache(rawText) {
      try {
        GM_set(this._cacheKey, JSON.stringify({ ts: Date.now(), data: rawText }));
      } catch (e) { /* GM storage quota — ignore */ }
    },

    /**
     * Load raw JSON text from a Tampermonkey @resource (bundled at install time).
     * Supports .gz (auto-decompress) and plain .json. Returns string or null
     * when the @resource is not registered or fetch failed.
     */
    async _loadFromResource() {
      if (!this._resourceName) return null;
      const getURL = (typeof GM_getResourceURL !== 'undefined')
        ? GM_getResourceURL
        : (typeof GM !== 'undefined' && GM.getResourceURL) ? GM.getResourceURL : null;
      if (!getURL) return null;
      try {
        // GM_getResourceURL may be sync (older TM) or async (Promise)
        const url = await Promise.resolve(getURL(this._resourceName));
        if (!url) return null;
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const buf = await resp.arrayBuffer();
        let rawText;
        // Try gzip first; if it fails (not gzipped / no API), decode as plain text
        try {
          if (typeof DecompressionStream === 'undefined') throw new Error('no DecompressionStream');
          const ds = new DecompressionStream('gzip');
          const writer = ds.writable.getWriter();
          writer.write(buf);
          writer.close();
          const out = await new Response(ds.readable).arrayBuffer();
          rawText = new TextDecoder('utf-8').decode(out);
        } catch (e) {
          rawText = new TextDecoder('utf-8').decode(buf);
        }
        console.log(`[JournalRank] @resource ${this._resourceName} loaded (${(rawText.length / 1024).toFixed(0)} KB)`);
        return rawText;
      } catch (e) {
        console.warn(`[JournalRank] @resource ${this._resourceName} unavailable:`, e.message);
        return null;
      }
    },

    /** Fetch raw JSON text from a remote URL (.gz or .json). Returns string or null. */
    async _loadFromUrl(url) {
      try {
        let raw;
        if (url.endsWith('.gz')) {
          if (typeof DecompressionStream === 'undefined') {
            throw new Error('当前浏览器不支持 DecompressionStream，请改用 .json 地址或现代 Chrome/Edge');
          }
          const resp = await new Promise((resolve, reject) => {
            GM_xmlhttp({
              url, method: 'GET', responseType: 'blob', timeout: 30000,
              onload(r) { resolve(r); },
              onerror(e) { reject(e); },
              ontimeout() { reject(new Error('timeout')); },
            });
          });
          if (resp.status !== 200) throw new Error(`HTTP ${resp.status}`);
          const ds = new DecompressionStream('gzip');
          const writer = ds.writable.getWriter();
          writer.write(resp.response);
          writer.close();
          const result = await new Response(ds.readable).arrayBuffer();
          raw = new TextDecoder('utf-8').decode(result);
        } else {
          const resp = await new Promise((resolve, reject) => {
            GM_xmlhttp({
              url, method: 'GET', timeout: 30000,
              onload(r)  { resolve(r); },
              onerror(e) { reject(e); },
              ontimeout() { reject(new Error('timeout')); },
            });
          });
          if (resp.status !== 200) throw new Error(`HTTP ${resp.status}`);
          raw = resp.responseText;
        }
        return raw;
      } catch (e) {
        console.warn('[JournalRank] Remote URL load failed:', e.message);
        return null;
      }
    },

    /**
     * Initialise the local DB.
     * Load order: GM_setValue cache → @resource → remote URL.
     * Successful raw text is cached for 7 days to skip network on subsequent loads.
     * Pass { skipCache: true } to force re-fetch (used by reload()).
     * Returns true when the DB is ready.
     */
    async init(url, opts = {}) {
      const skipCache = !!opts.skipCache;
      if (this._ready) return true;
      // 已有加载在进行：加入同一加载 Promise（而非立即返回未就绪状态），
      // 这样 scan/bootstrap 可在首次渲染时等待本地库就绪，避免走慢速服务器。
      // 注意：不能过早 return —— 必须 join 到真正完成的 Promise。
      if (this._loading && this._promise) return this._promise;
      if (this._loading) return this._ready;
      this._loading = true;
      this._lastUrl = url || '';
      this._promise = (async () => {
        try {
          let raw = null;
          const sources = [];
          // 1. GM_setValue cache — instant, no network
          if (!skipCache) {
            raw = this._readCache();
            if (raw) sources.push('cache');
          }
          // 2. @resource — bundled at script install, no per-page network
          if (!raw) {
            raw = await this._loadFromResource();
            if (raw) { this._writeCache(raw); sources.push('@resource'); }
          }
          // 3. Remote URL fallback
          if (!raw && url) {
            raw = await this._loadFromUrl(url);
            if (raw) { this._writeCache(raw); sources.push('url'); }
          }
          if (!raw) {
            console.warn('[JournalRank] Local JSON: all sources failed (cache/@resource/url)');
            this._ready = false;
            return false;
          }
          console.log(`[JournalRank] Local JSON source: ${sources.join('→')}`);
          return this._buildFromRaw(raw);
        } catch (e) {
          console.warn('[JournalRank] Local JSON init failed:', e.message);
          this._ready = false;
          return false;
        } finally {
          this._loading = false;
          this._promise = null;
        }
      })();
      return this._promise;
    },

    /** Force re-fetch (invalidates cache, bypasses cache read). Used by "reload" menu. */
    async reload(url) {
      this._ready = false;
      this._byTitle = null;
      this._byISSN = null;
      try { GM_set(this._cacheKey, ''); } catch (e) { /* ignore */ }
      return this.init(url, { skipCache: true });
    },

    /** Look up a journal by title and/or ISSN. Returns { title, title_zh, issn, eissn, metrics } or null. */
    lookup(title, issn) {
      if (!this._ready) return null;

      // 1. Try ISSN first (most precise)
      if (issn) {
        const clean = issn.replace(/[^0-9Xx]/g, '').toUpperCase();
        if (clean && this._byISSN.has(clean)) {
          return this._toResult(this._byISSN.get(clean));
        }
      }

      // 2. Try normalized title
      const nt = this._norm(title);
      if (nt && this._byTitle.has(nt)) {
        return this._toResult(this._byTitle.get(nt));
      }

      // 3. Fuzzy: 查询串包含或起始于某个候选键（取最具体的候选）
      //    原实现 key.includes(nt) 方向反了，导致 "The Lancet" 匹配不到 "LANCET"；
      //    且无排序，短查询可能误配到子刊。现改为 nt.startsWith(key)||nt.includes(key)，
      //    并选取长度最长的候选（最接近完整期刊名）。
      if (nt && nt.length >= 4) {
        let best = null;
        let bestLen = -1;
        for (const [key, rec] of this._byTitle) {
          if (key.length >= 4 && key.length <= nt.length &&
              (nt.startsWith(key) || nt.includes(key))) {
            if (key.length > bestLen) { best = rec; bestLen = key.length; }
          }
        }
        if (best) return this._toResult(best);
      }

      return null;
    },

    /** Convert a flat record to the { resolved, metrics } format expected by renderBadges. */
    _toResult(rec) {
      // Build resolved object
      const resolved = {
        id: 0,
        title: rec.ti || '',
        title_zh: rec.zh || '',
        issn: rec.in || '',
        eissn: rec.es || '',
      };

      // Build metrics object: short field names → long source names
      const REV_SOURCE = {
        IF: 'imf', IF5:'if5', JCI:'jci', jifRank:'jif_rank',
        jcr:'jcr', jcrSmall:'jcr_small',
        cas:'cas', xr:'xr', xrSmall:'xr_small',
        xrWarn:'xr_warning', ei:'ei',
        cscd:'cscd', cssci:'cssci', pku:'pku', kjhx:'kjhx',
        ccf:'ccf', doaj:'doaj',
        cs:'citescore', sjr:'sjr', gs:'gsh5',
        jscr:'jscr', onhold:'onhold',
        istic:'istic', isticWarn:'istic_warning',
        zyqk:'zyqk', nsfc:'nsfc', nij:'nij', clsci:'clsci',
        rccse:'rccse', scd:'scd', cacj:'cacj',
      };

      const metrics = {};
      for (const [short, long] of Object.entries(REV_SOURCE)) {
        if (rec[short] !== undefined) {
          let items = rec[short];
          if (!Array.isArray(items)) items = [items];
          metrics[long] = items.map(it => ({
            value: it.v || '',
            year: it.y || null,
            category: it.c || '',
            is_top: !!it.tp || !!it.t,
            warning: it.w || '',
            rcode: '',
          }));
        }
      }

      return { resolved, metrics: Object.keys(metrics).length > 0 ? metrics : null };
    },
  };

  // NOTE: local DB auto-load moved to bootstrap() with an isLikelyAcademicPage()
  // guard, so non-academic pages no longer fetch the 7.7MB JSON.
  // ===========================================================================
  // 2. Color palette — semantic, modern
  //    Each entry: { bg, fg, border }
  //    Quartile colors are the most important signal.
  // ===========================================================================
  const COLORS = {
    q1:      { bg: '#e74c3c', fg: '#fff', label: 'Q1 / 1区' },   // red — top tier
    q2:      { bg: '#f39c12', fg: '#fff', label: 'Q2 / 2区' },   // orange
    q3:      { bg: '#3498db', fg: '#fff', label: 'Q3 / 3区' },   // blue
    q4:      { bg: '#27ae60', fg: '#fff', label: 'Q4 / 4区' },   // green
    numeric: { bg: '#2c3e50', fg: '#fff', label: '指标数值' },   // dark — IF, CiteScore, etc.
    index:   { bg: '#8e44ad', fg: '#fff', label: '收录' },       // purple — fallback for unknown index sources
    warn:    { bg: '#c0392b', fg: '#fff', label: '预警' },       // dark red — on hold / warning
    neutral: { bg: '#7f8c8d', fg: '#fff', label: '其他' },       // gray — default
  };

  // Per-index-source colors — each收录 source gets a distinct hue so users
  // can tell CSCD / CSSCI / 北大核心 / EI / DOAJ / CCF ... apart at a glance.
  // Grouped by domain: international (purple), Chinese science (teal),
  // Chinese humanities (blue), excellence/CS (red-orange).
  const INDEX_COLORS = {
    ei:      { bg: '#6c3483', fg: '#fff' },  // EI — 国际工程
    doaj:    { bg: '#9b59b6', fg: '#fff' },  // DOAJ — 国际开放获取
    cscd:    { bg: '#117a65', fg: '#fff' },  // CSCD — 中文科学引文
    kjhx:    { bg: '#16a085', fg: '#fff' },  // 科技核心
    istic:   { bg: '#0e6655', fg: '#fff' },  // ISTIC — 中国科技核心
    cssci:   { bg: '#2471a3', fg: '#fff' },  // CSSCI — 人文社科
    pku:     { bg: '#34495e', fg: '#fff' },  // 北大核心
    ccf:     { bg: '#c0392b', fg: '#fff' },  // CCF — 计算机
    nsfc:    { bg: '#d35400', fg: '#fff' },  // NSFC — 自然科学基金
    rccse:   { bg: '#7d3c98', fg: '#fff' },  // RCCSE — 武大中国学术
    scd:     { bg: '#2874a6', fg: '#fff' },  // SCD — 科学引文数据库
    cacj:    { bg: '#138d75', fg: '#fff' },  // CACJ — 武大核心
    clsci:   { bg: '#2e86c1', fg: '#fff' },  // CLSCI — 中国人文科学
    nij:     { bg: '#922b21', fg: '#fff' },  // NJU — 南京大学核心
    zyqk:    { bg: '#b7950b', fg: '#fff' },  // 中文核心
  };

  // Map a (source, value) pair to a color bucket
  function colorFor(source, value, isTop) {
    const v = String(value || '').trim();
    // Quartile detection — works for Q1-Q4, 1区-4区, A-D
    if (/^(Q1|1区|A)$/i.test(v)) return COLORS.q1;
    if (/^(Q2|2区|B)$/i.test(v)) return COLORS.q2;
    if (/^(Q3|3区|C)$/i.test(v)) return COLORS.q3;
    if (/^(Q4|4区|D)$/i.test(v)) return COLORS.q4;
    // Warning / On Hold
    if (source === 'xr_warning' || source === 'onhold' || source === 'istic_warning') return COLORS.warn;
    if (/^(under review|on hold|预警)$/i.test(v)) return COLORS.warn;
    // Numeric metrics (IF, 5-year IF, CiteScore, SJR, JCI, etc.)
    if (source === 'imf' || source === 'if5' || source === 'jci' ||
        source === 'citescore' || source === 'sjr' || source === 'gsh5' ||
        source === 'jscr' || source === 'jif_rank') return COLORS.numeric;
    // Index收录 — per-source distinct color (Issue 4: 之前所有中文索引都是同一种紫色)
    if (INDEX_COLORS[source]) return INDEX_COLORS[source];
    if (['ei', 'cscd', 'cssci', 'pku', 'kjhx', 'ccf', 'doaj',
         'rccse', 'scd', 'cacj', 'clsci', 'nij', 'nsfc', 'zyqk'].includes(source)) return COLORS.index;
    return COLORS.neutral;
  }

  // ===========================================================================
  // 3. Source labels and display config
  //    Mirrors rank_config.json but with client-side display labels.
  // ===========================================================================
  const SOURCE_LABELS = {
    imf:          { short: 'IF',      full: '影响因子 (IF)' },
    if5:          { short: 'IF5',     full: '5 年影响因子' },
    jci:          { short: 'JCI',     full: 'Journal Citation Indicator' },
    jcr:          { short: 'JCR',     full: 'JCR 分区' },
    jcr_small:    { short: 'JCR小类', full: 'JCR 小类分区' },
    cas:          { short: '中科院',  full: '中科院分区' },
    xr:           { short: '新锐',    full: '新锐分区 (大类)' },
    xr_small:     { short: '新锐小类',full: '新锐分区 (小类)' },
    xr_top:       { short: '新锐Top', full: '新锐 Top 期刊' },
    xr_warning:   { short: '预警',    full: '新锐预警' },
    ei:           { short: 'EI',      full: '工程索引 (EI)' },
    cscd:         { short: 'CSCD',    full: '中国科学引文数据库' },
    cssci:        { short: 'CSSCI',   full: 'CSSCI (南大核心)' },
    pku:          { short: '北大核心',full: '北大核心期刊' },
    kjhx:         { short: '科技核心',full: '科技核心期刊' },
    ccf:          { short: 'CCF',     full: 'CCF 推荐期刊' },
    citescore:    { short: 'CS',      full: 'CiteScore' },
    sjr:          { short: 'SJR',     full: 'SCImago Journal Rank' },
    gsh5:         { short: 'GS',      full: 'Google Scholar h5' },
    doaj:         { short: 'DOAJ',    full: 'DOAJ 收录' },
    onhold:       { short: 'OnHold',  full: 'On Hold' },
    istic:        { short: '中信所',  full: '中信所分区' },
    istic_warning:{ short: '中信所预警', full: '中信所预警' },
  };

  function sourceLabel(src) {
    return SOURCE_LABELS[src] || { short: src.toUpperCase(), full: src };
  }

  // ===========================================================================
  // 4. Utilities
  // ===========================================================================
  const RE_ISSN = /\b\d{4}-\d{3}[\dXx]\b/;
  const RE_ISSN_LOOSE = /\b\d{4}[-\s]?\d{3}[\dXx]\b/;
  const RE_DOI = /\b10\.\d{4,9}\/[^\s"<>]+\b/;

  /** Normalize an ISSN string to 8 chars (no dash), uppercase X. Returns '' if invalid. */
  function cleanISSN(s) {
    if (!s) return '';
    const m = String(s).match(/(\d{4})[-\s]?(\d{3}[\dXx])/i);
    if (!m) return '';
    return (m[1] + m[2]).toUpperCase().replace(/X$/, 'X');
  }

  /** Normalize a journal title for deduplication: lowercase, strip non-alphanumerics. */
  function normName(s) {
    if (!s) return '';
    return String(s).toLowerCase()
      .replace(/&amp;/g, '&')
      .replace(/&[a-z]+;/g, ' ')
      .replace(/[^a-z0-9\u4e00-\u9fff]+/g, ' ')
      .trim();
  }

  /** Strip common noise from a journal title extracted from a page. */
  function cleanTitle(s) {
    if (!s) return '';
    return String(s)
      // Collapse whitespace
      .replace(/\s+/g, ' ')
      // Remove Chinese book-title marks 《》 (Wanfang/CQVIP wrap journal names)
      .replace(/^《\s*/g, '')
      .replace(/\s*》$/g, '')
      // Remove common CNKI/Wanfang suffixes in parentheses
      .replace(/[（(]\s*(中英文|英文版|中文版|网络版|中英文网络版)\s*[)）]\s*$/g, '')
      // Remove leading/trailing punctuation
      .replace(/^[\s,.;:|·—-]+|[\s,.;:|·—-]+$/g, '')
      .trim();
  }

  /**
   * Extract journal venue from Google Scholar .gs_a text.
   * Format: "Authors - Journal Name, Year - Publisher"
   * Extracts the journal name portion between the first and second " - " separator.
   */
  function extractVenueFromGsA(text) {
    if (!text) return '';
    // Remove HTML tags if any remain
    text = text.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
    if (!text) return '';

    // Split on " - " separator (Google Scholar format)
    const parts = text.split(/[–\-—]\s+/);  // en-dash, hyphen, em-dash followed by space
    if (parts.length < 2) {
      // Try splitting on bare dash
      const parts2 = text.split(/[–\-—]/);
      if (parts2.length < 2) return '';
      // The journal part is typically the second segment
      for (let i = 1; i < parts2.length; i++) {
        const candidate = parts2[i].trim();
        // Skip publisher names and year-only segments
        if (/^\d{4}$/.test(candidate)) continue;
        if (candidate.length < 3 || candidate.length > 80) continue;
        // This looks like a journal name
        return cleanTitle(candidate.replace(/,\s*\d{4}.*$/, '').replace(/,\s*\d{4}$/, ''));
      }
      return '';
    }

    // Normal case: at least 2 parts separated by " - "
    // parts: [authors, journal+year, publisher (optional)]
    if (parts.length >= 2) {
      const journalPart = parts[1].trim();
      // Remove trailing year: "Journal Name, 2015" -> "Journal Name"
      const cleaned = journalPart.replace(/,\s*\d{4}\s*$/, '').replace(/\s+\d{4}\s*$/, '');
      return cleanTitle(cleaned);
    }

    return '';
  }

  /** Escape HTML special chars for safe insertion via innerHTML. */
  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /** Read a <meta> tag's content by name or property attribute. */
  function getMeta(name) {
    const el = document.querySelector(
      `meta[name="${name}"], meta[name="${name.toLowerCase()}"], meta[property="${name}"], meta[property="${name.toLowerCase()}"]`
    );
    return el ? (el.getAttribute('content') || '').trim() : '';
  }

  /** Read all citation_* / prism.* meta tags into a dict. */
  function getCitationMeta() {
    const out = {};
    const names = [
      'citation_journal_title', 'citation_journal_abbrev',
      'citation_issn', 'citation_doi', 'citation_pmid',
      'citation_pdf_url', 'citation_arxiv_id',
      'prism.issn', 'prism.publicationname', 'prism.publicationName',
      'prism.doi', 'prism.volume', 'prism.number',
    ];
    for (const n of names) {
      const v = getMeta(n);
      if (v) out[n] = v;
    }
    // Also scan all meta tags for citation_/prism. prefixes (case-insensitive)
    document.querySelectorAll('meta[name]').forEach(m => {
      const k = (m.getAttribute('name') || '').toLowerCase();
      const v = (m.getAttribute('content') || '').trim();
      if (k && v && (k.startsWith('citation_') || k.startsWith('prism.')) && !out[k]) out[k] = v;
    });
    return out;
  }

  /**
   * Parse JSON-LD <script type="application/ld+json"> blocks for journal info.
   * Many modern publisher sites (Springer, Wiley, Elsevier, etc.) embed
   * schema.org Periodical / PublicationIssue metadata here.
   * Returns { title, issn, eissn } or null.
   */
  function parseJsonLd() {
    const blocks = document.querySelectorAll('script[type="application/ld+json"]');
    for (const block of blocks) {
      try {
        const data = JSON.parse(block.textContent);
        const candidates = Array.isArray(data) ? data : [data];
        for (const obj of candidates) {
          if (!obj || typeof obj !== 'object') continue;
          // schema.org Periodical / PublicationVolume / ScholarlyArticle
          // Walk: obj.isPartOf.name, obj.publisher.name, obj.name (when @type=Periodical)
          const isPartOf = obj.isPartOf;
          if (isPartOf) {
            const arr = Array.isArray(isPartOf) ? isPartOf : [isPartOf];
            for (const p of arr) {
              if (p && (p['@type'] === 'Periodical' || p.name)) {
                const title = (p.name || '').trim();
                const issn  = (p.issn || '').trim();
                const eissn = (p.eissn || '').trim();
                if (title) return { title, issn: cleanISSN(issn), eissn: cleanISSN(eissn) };
              }
            }
          }
          // Direct Periodical
          if (obj['@type'] === 'Periodical' && obj.name) {
            return {
              title: String(obj.name).trim(),
              issn:  cleanISSN(obj.issn || ''),
              eissn: cleanISSN(obj.eissn || ''),
            };
          }
        }
      } catch (e) { /* malformed JSON-LD — skip */ }
    }
    return null;
  }

  /**
   * Heuristic: extract a journal name from the page <title> tag.
   * Many academic pages use formats like:
   *   "Article Title - Journal Name"
   *   "Article Title | Journal Name"
   *   "Journal Name - Article Title"
   * Returns a candidate title string or ''.
   */
  function extractFromPageTitle() {
    const t = (document.title || '').trim();
    if (!t || t.length < 5) return '';
    // Split on common separators and check each part
    let parts = t.split(/\s[-–|·]\s/);
    // CNKI 等中文站点用 "文章标题_期刊名"（下划线无空格分隔）→ 按最后一个 _ 切分。
    // 仅对含中文字符的标题启用，避免误切英文标题中的单词下划线。
    if (parts.length < 2 && /[\u4e00-\u9fff]/.test(t) && t.includes('_')) {
      const idx = t.lastIndexOf('_');
      if (idx > 0 && idx < t.length - 1) {
        parts = [t.slice(0, idx), t.slice(idx + 1)];
      }
    }
    if (parts.length < 2) return '';
    // The journal name is usually the shorter part (article titles are longer)
    // and doesn't contain digits-heavy strings (years, volume numbers)
    let best = '';
    for (const p of parts) {
      const c = cleanTitle(p);
      if (!c || c.length < 3 || c.length > 80) continue;
      // Skip parts that look like dates, DOIs, or site names
      if (/^\d{4}$/.test(c)) continue;
      if (/^10\.\d/.test(c)) continue;
      if (/^(home|search|results|page|site)$/i.test(c)) continue;
      if (!best || c.length < best.length) best = c;
    }
    return best;
  }

  /** Get the current page's hostname without leading www. */
  function hostName() {
    return (location.hostname || '').replace(/^www\./, '').toLowerCase();
  }

  /**
   * Quick academic-page guard — runs BEFORE the full scan to skip
   * obviously non-academic pages (second line of defence after @exclude).
   * Returns true when the page looks academic OR is unknown (scan handles it).
   */
  function isLikelyAcademicPage() {
    const h = hostName();
    if (!h) return false;

    // 1. Known academic sites — always scan (whitelist hints, fast path)
    const ACADEMIC_SUFFIX = [
      'scholar.google.com', 'scholar.googleusercontent.com',
      'xueshu.baidu.com', 'xueshu.lanfanshu.cn', 'lanfanshu.cn',
      'cnki.net', 'wanfangdata.com.cn', 'cqvip.com',
      'sciencedirect.com', 'springer.com', 'nature.com', 'wiley.com',
      'ieeexplore.ieee.org', 'pubmed.ncbi.nlm.nih.gov', 'pmc.ncbi.nlm.nih.gov',
      'scopus.com', 'researchgate.net', 'semanticscholar.org',
      'mdpi.com', 'frontiersin.org', 'arxiv.org', 'plos.org',
      'pubs.acs.org', 'pubs.rsc.org', 'annualreviews.org',
      'tandfonline.com', 'cambridge.org', 'academic.oup.com',
      'jstage.jst.go.jp', 'doaj.org', 'biomedcentral.com',
      'journals.sagepub.com', 'hindawi.com', 'science.org',
      'thelancet.com', 'cell.com', 'nejm.org',
      'readpaper.com', 'connectedpapers.com', 'openalex.org',
      'europepmc.org', 'fenqubiao.com', 'letpub.com', 'iikx.com',
      'webofscience.com', 'clarivate.com',
    ];
    if (ACADEMIC_SUFFIX.some(s => h === s || h.endsWith('.' + s))) return true;

    // 2. Known non-academic sites — skip immediately (must not shadow academic subdomains)
    const NON_ACADEMIC = [
      // 搜索引擎 / 门户
      'baidu.com', 'bing.com', 'sogou.com', 'so.com', 'sm.cn', 'quark.cn',
      'yahoo.com', 'duckduckgo.com',
      // 社交
      'weibo.com', 'weixin.qq.com', 'zhihu.com', 'douban.com', 'bilibili.com',
      'douyin.com', 'xiaohongshu.com', 'facebook.com', 'twitter.com', 'x.com',
      'instagram.com', 'youtube.com', 'reddit.com',
      // 购物
      'taobao.com', 'tmall.com', 'jd.com', 'pinduoduo.com', '1688.com',
      'amazon.com', 'amazon.cn', 'ebay.com',
      // 视频 / 娱乐
      'youku.com', 'iqiyi.com', 'qq.com', 'tudou.com', 'acfun.cn', 'netflix.com',
      // 新闻门户
      'sina.com.cn', 'sohu.com', '163.com', 'ifeng.com', 'people.com.cn',
      'xinhuanet.com', 'thepaper.cn',
      // 邮箱
      'outlook.com', 'gmail.com', 'mail.ru',
      // 办公 / 协作
      'feishu.cn', 'dingtalk.com', 'zoom.us', 'notion.so', 'office.com', 'wps.cn',
      // 地图 / 生活
      'amap.com', 'gaode.com', 'dianping.com', 'meituan.com',
      // 其他
      'csdn.net', 'github.com', 'stackoverflow.com', 'juejin.cn',
      '51job.com', 'zhipin.com',
    ];
    // NOTE: 'google.com' deliberately NOT in NON_ACADEMIC — scholar.google.com
    // is matched by the ACADEMIC whitelist above, but google.com search results
    // pages can still surface academic content worth checking.
    if (NON_ACADEMIC.some(s => h === s || h.endsWith('.' + s))) return false;

    // 3. Unknown site — let the full scan decide (it no-ops without journal signals)
    return true;
  }

  /** Debounce a function — call fn at most once per `wait` ms. */
  function debounce(fn, wait) {
    let t = null;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  /** Promise-based GM_xmlhttpRequest. */
  function gmFetch(url, opts = {}) {
    return new Promise((resolve, reject) => {
      if (!GM_xmlhttp) { reject(new Error('GM_xmlhttpRequest unavailable')); return; }
      GM_xmlhttp({
        url,
        method: opts.method || 'GET',
        headers: opts.headers || {},
        data: opts.body || null,
        timeout: opts.timeout || 15000,
        onload(r) {
          try {
            const data = r.responseText ? JSON.parse(r.responseText) : null;
            resolve({ status: r.status, data, raw: r.responseText });
          } catch (e) {
            resolve({ status: r.status, data: null, raw: r.responseText });
          }
        },
        onerror(e)   { reject(new Error('Network error: ' + (e.error || 'unknown'))); },
        ontimeout()  { reject(new Error('Request timeout')); },
      });
    });
  }

  // ===========================================================================
  // 5. Site selector table
  //    Each entry: { host: string|regex, selectors: [{css, attr?, attrMatch?}] }
  //    `css` selects a title element; the journal name is elem.textContent
  //    unless `attr` is specified (then elem.getAttribute(attr)).
  //    A site may also provide `issnSelectors` to extract ISSN directly.
  //    Curated from the deobfuscated JournalRank CRX selector table.
  // ===========================================================================
  const SITE_TABLE = [
    // --- ScienceDirect / Elsevier — 搜索结果页 + 期刊详情页 ---
    { host: 'sciencedirect.com', selectors: [
      // 搜索结果页：每条结果项的期刊名链接（subtype-srctitle-link）
      { css: 'a.subtype-srctitle-link' },
      { css: '.ResultItem a[href*="/science/journal/"]' },
      // 推荐出版物区域的期刊名 span
      { css: '.publication-title span' },
      // 期刊详情页
      { css: 'h1.publication-detail__title' },
      { css: '.publication-name .publication-title' },
      { css: 'span.publication-title' },
    ], issnSelectors: [
      { css: 'meta[name="citation_issn"]', attr: 'content' },
    ]},

    // --- Springer ---
    { host: 'springer.com', selectors: [
      { css: 'h1.publication-view__title' },
      { css: '.journal__info .journal__info-top > h1' },
      { css: 'h1.publication-title' },
    ]},

    // --- Nature ---
    { host: 'nature.com', selectors: [
      { css: '.c-bibliographic-information__citation' },
      { css: 'h1.c-article-info-title' },
      { css: 'p.c-bibliographic-information__citation' },
    ]},

    // --- Wiley — 搜索结果页 + 期刊详情页 ---
    { host: 'wiley.com', selectors: [
      // 搜索结果页：期刊名链接
      { css: 'a.meta__serial.publication_meta_serial' },
      { css: 'a.publication_meta_serial' },
      // 期刊详情页
      { css: '.journal-info-content > h1.container-title' },
      { css: 'h1.citation-header__publication-title' },
    ]},

    // --- IEEE Xplore ---
    { host: 'ieeexplore.ieee.org', selectors: [
      { css: 'h1#journal-title' },
      { css: '.text > h1#journal-title' },
      { css: '.xpl-results-item .result-item h3' },
    ]},

    // --- PubMed (search results + article pages; selectors updated for current DOM) ---
    { host: 'pubmed.ncbi.nlm.nih.gov', selectors: [
      { css: 'meta[name="citation_journal_title"]', attr: 'content' },
      { css: '.full-docsum .docsum-journal' },
      { css: '.docsum-content .docsum-journal' },
      { css: '.article-source .journal' },
      { css: '.citation .journal' },
      { css: '.affiliation span.journal' },
    ]},

    // --- PMC ---
    { host: 'pmc.ncbi.nlm.nih.gov', selectors: [
      { css: 'meta[name="citation_journal_title"]', attr: 'content' },
      { css: '.journal-title' },
      { css: '.article-page .journal-title' },
    ]},

    // --- Scopus ---
    { host: 'scopus.com', selectors: [
      { css: '.stats-document-abstract-publishedIn > a' },
      { css: '.sourceTitle' },
    ]},

    // --- CNKI (知网) — 搜索结果页 + 期刊详情页 + 文章详情页 ---
    // 选择器依据 cnki-Scholar 插件（真机验证过新版/旧版/国际版 DOM）扩充：
    //   来源单元格: td.source / td.publishing / td[data-key="source"]
    //   详情页来源: .top-tip span a（不限 navi href）/ .wx-tit（新版头部宿主）
    { host: /cnki\.net$|cnki\.net\/|chkd\.cnki\.net$/, selectors: [
      // 搜索结果页 — 旧版：来源列期刊名链接（navi 期刊导航）
      { css: '.result-table-list tbody tr td.source a' },
      { css: 'td.source a[href*="navi.cnki.net"]' },
      // 搜索结果页 — 来源单元格链接（不限 href，兼容新版/国际版）
      { css: 'td.source a' },
      { css: 'td.publishing a' },
      { css: 'td[data-key="source"] a' },
      // 搜索结果页 — 来源单元格无链接时取 span（插件: a,span 提取）
      { css: 'td.source span, td.publishing span, td[data-key="source"] span' },
      { css: '.s-main td.source a, .s-main td.source span' },
      // 搜索结果页 — 新版2024+（列表容器变化）
      { css: '.result-table-list .source a' },
      { css: '.result-item .source-info a' },
      { css: '.search-detail .source a' },
      // 文章详情页 — 来源栏期刊名（cnki-Scholar 选择器，放宽 navi href 限制）
      // 注: .wx-tit 是文章标题容器（插件仅用作标签插入宿主），不能作为期刊名来源
      { css: '.top-tip span a' },
      { css: '.top-tip a[href*="navi.cnki"]' },
      // 文章详情页 — 其他来源样式
      { css: '.top-tool .btn.read a' },
      { css: '.sourinfo .source a' },
      { css: 'a.journal' },
      // 期刊导航页 (navi.cnki.net) — 期刊名标题
      { css: 'h1.journaltitle' },
      { css: '#kcms-institution-info > h1#showname' },
      { css: '.cnki-compont > h1.journaltitle' },
      { css: '.journal-title h2' },
      { css: '.qkinfo h1' },
    ]},

    // --- Wanfang (万方) — 搜索结果页 + 期刊详情页 ---
    { host: /wanfangdata\.com\.cn$|s\.wanfangdata\.com\.cn$|wanfangdata\.com\.cn\/|d\.wanfangdata\.com\.cn$/, selectors: [
      // 搜索结果页 — 每条结果的期刊名
      { css: 'span.periodical-title' },
      { css: '.normal-list .title a' },
      { css: '.periodical-list .title a' },
      // 搜索结果页 — 新版
      { css: '.result-item .source-info a' },
      { css: '.record-item-list .source-item a' },
      { css: '.source-name a' },
      // 期刊详情页
      { css: '.qk-item-right > a.h2 > span:first-child' },
      { css: '.periodicals_main > h4.cn > a' },
      { css: '.detail-top .journal-title' },
    ]},

    // --- CQVIP (维普) — 搜索结果页 + 期刊详情页 ---
    { host: /cqvip\.com$/, selectors: [
      // 搜索结果页 — 出处列的期刊链接
      { css: 'td a[href*="Journal/Summary"]' },
      { css: 'td a[href*="journal/summary"]' },
      // 新版搜索结果页
      { css: '.search-list .source a' },
      { css: '.result-item-container .journal-source a' },
      { css: '.searchList .name a' },
      { css: '.pager_title a' },
      // 期刊详情页
      { css: '.qkdhRight > .qklistCon .qklbyHead' },
      { css: '.top-detail-left > .detail-left-title' },
      { css: '.journal-detail h1' },
    ]},

    // --- Google Scholar (搜索页面 + 镜像站) ---
    { host: /scholar\.google\.|scholar\.googleusercontent\.com|xueshu\.lanfanshu\.cn|ac\.scholar\.google\.com/, selectors: [
      // 搜索结果页：期刊名在 gs_a 中 (格式: Authors - Journal, Year - Publisher)
      { css: '.gs_a', extractVenue: true },
      // 期刊详情页
      { css: '.gs_ora_pubvenue' },
      { css: '.gs_ct1' },
      { css: '.gs_scl > .gsc_oci_value' },
      // 作者引用页 (/citations)：每行论文最下方的文献出处 div（形如 "Venue, Year"）
      { css: 'td.gsc_a_t div.gs_gray:last-of-type', mapVenue: true },
    ]},

    // --- ResearchGate ---
    { host: 'researchgate.net', selectors: [
      { css: '.research-detail-header-section__title' },
      { css: '.publication-meta a.searchResultJournal' },
    ]},

    // --- Semantic Scholar ---
    { host: 'semanticscholar.org', selectors: [
      { css: 'h1[data-test-id="paper-detail-title"]' },
      { css: '.paper-meta-journal' },
    ]},

    // --- MDPI ---
    { host: 'mdpi.com', selectors: [
      { css: '.journal-content > a > p.hoverDom' },
      { css: '.article-content > p[title]' },
    ]},

    // --- Frontiers ---
    { host: 'frontiersin.org', selectors: [
      { css: '.article-details-header h1' },
      { css: '.articleHeader > h1.articleHeader__title' },
    ]},

    // --- arXiv ---
    { host: 'arxiv.org', selectors: [
      { css: 'meta[name="citation_journal_title"]', attr: 'content' },
    ]},

    // --- PLoS ---
    { host: 'plos.org', selectors: [
      { css: '.article-title > h1' },
      { css: 'h1#articleTitle.article_title' },
    ]},

    // --- ACS Publications ---
    { host: 'pubs.acs.org', selectors: [
      { css: '.publication-title a img', attr: 'alt' },
      { css: 'h1.chapter-title' },
    ]},

    // --- RSC ---
    { host: 'pubs.rsc.org', selectors: [
      { css: '.logo-container > a.logo > img', attr: 'alt' },
    ]},

    // --- Annual Reviews ---
    { host: 'annualreviews.org', selectors: [
      { css: '.logo-container > a.logo > img', attr: 'alt' },
      { css: 'h1.journal-title' },
    ]},

    // --- Taylor & Francis ---
    { host: 'tandfonline.com', selectors: [
      { css: '.publication-meta > span > a' },
      { css: '.search-result a.card-journal' },
    ]},

    // --- Cambridge UP ---
    { host: 'cambridge.org', selectors: [
      { css: '.publication-citation > p > em' },
      { css: '.cited-by__entry__series-title' },
    ]},

    // --- Oxford UP ---
    { host: 'academic.oup.com', selectors: [
      { css: '.publication-info' },
      { css: 'h1.journal-title' },
    ]},

    // --- J-STAGE ---
    { host: 'jstage.jst.go.jp', selectors: [
      { css: '.journal-name' },
      { css: 'h1.journal-title' },
    ]},

    // --- DOAJ ---
    { host: 'doaj.org', selectors: [
      { css: 'h1.journal-title' },
    ]},

    // --- BMC ---
    { host: 'biomedcentral.com', selectors: [
      { css: '.journal-title' },
      { css: 'h1.publication-title' },
    ]},

    // --- SAGE ---
    { host: 'journals.sagepub.com', selectors: [
      { css: '.publicationTitle' },
      { css: 'h1.journal-title' },
    ]},

    // --- Hindawi ---
    { host: 'hindawi.com', selectors: [
      { css: '.journal-name' },
    ]},

    // --- Science ---
    { host: 'science.org', selectors: [
      { css: '.journal-name' },
      { css: 'meta[name="citation_journal_title"]', attr: 'content' },
    ]},

    // --- Lancet / Cell / Elsevier journal sites ---
    { host: 'thelancet.com', selectors: [
      { css: '.journal-title' },
      { css: 'h1.publication-title' },
    ]},
    { host: 'cell.com', selectors: [
      { css: '.journal-title' },
      { css: 'h1.publication-title' },
    ]},

    // --- NEJM ---
    { host: 'nejm.org', selectors: [
      { css: 'header a > img[src*="/nejm-logo"]', attr: 'alt' },
      { css: 'h1.journal-title' },
    ]},

    // --- Baidu Scholar (百度学术) — 搜索结果页 ---
    { host: 'xueshu.baidu.com', selectors: [
      // 新版搜索结果页：期刊名在 .paper-info 的第3个 span（带《》书名号）
      { css: '.paper-info span:nth-of-type(3)' },
      // 旧版选择器（兼容）
      { css: '.sc_default_title' },
      { css: '.journal_title' },
    ]},

    // --- Web of Science — 搜索结果页 + 详情页 ---
    { host: /webofscience\.com$|webofscience\.clarivate\.cn$|clarivate\.com$/, selectors: [
      // 搜索结果页：期刊名链接。参照 CCFRank 用元素级选择器（取 textContent），
      // 兼容按钮/链接两种 WoS 渲染；两个 class 命中同一个 <a>，由 seenElems 去重，
      // 不产生重复徽章（避免此前"重复显示"回归）。
      { css: '.summary-source-title-link' },
      { css: '.source-title-link' },
      // 详情页：JCR 侧边栏 + Journal information 区块的期刊名锚点。href 含
      // rowText (SO 字段查询)。不能单用 .full-record-detail-section-links[href*=rowText]
      // —— 那会误命中大量学科分类下钻链接 (GIS / Environmental Sciences 等)。
      { css: 'a.jcrSideNav-color[href*="rowText"] span' },
    ]},
    { host: 'xueshu.lanfanshu.cn', selectors: [
      { css: '.gs_a', extractVenue: true },
      { css: '.gs_ora_pubvenue' },
      { css: '.gs_ct1' },
    ]},
    { host: 'readpaper.com', selectors: [
      { css: '.paper-journal-name' },
    ]},
    { host: 'connectedpapers.com', selectors: [
      { css: '.paper-meta-journal' },
    ]},
    { host: 'openalex.org', selectors: [
      { css: '.work-host-venue' },
    ]},
    { host: 'europepmc.org', selectors: [
      { css: '.journal-title' },
      { css: 'meta[name="citation_journal_title"]', attr: 'content' },
    ]},

    // --- Chinese journal directory sites ---
    { host: /fenqubiao\.com$/, selectors: [
      { css: '.dstopr h1.sfb-qkname' },
      { css: '.zzzj_qk_content h1.zzzj-qkname' },
    ]},
    { host: 'letpub.com', selectors: [
      { css: '.banner_box_right_details > #JName' },
      { css: '#journal_banner_title > h1' },
    ]},
    { host: 'iikx.com', selectors: [
      { css: '.dstopr h1.sfb-qkname' },
    ]},
  ];

  /** Find the site config matching the current hostname. Returns null if no match. */
  function matchSite() {
    const h = hostName();
    for (const site of SITE_TABLE) {
      if (typeof site.host === 'string') {
        if (h === site.host || h.endsWith('.' + site.host) || h.includes(site.host)) return site;
      } else if (site.host instanceof RegExp) {
        if (site.host.test(h)) return site;
      }
    }
    return null;
  }

  // ===========================================================================
  // 6. Journal detection
  //    Detects journals on the page via three passes:
  //      1. Per-site CSS selectors (highest signal)
  //      2. Meta-tag fallback (citation_journal_title, prism.publicationname, etc.)
  //      3. Generic ISSN regex scan (for pages listing ISSNs)
  //    Returns a list of detections: { elem, title, issn, eissn, source }
  // ===========================================================================

  /**
   * Whether an element is visible to users (Issue 1).
   * Filters out Angular/CDK accessibility-hidden elements (e.g. the
   * visually-hidden <h1>WOS Top Header</h1> on Web of Science) so we don't
   * attach badges next to them and have the badge pop up at the top-left.
   */
  function isVisible(elem) {
    if (!elem || !elem.closest) return true;
    // Common a11y-hidden class names + explicit aria-hidden.
    // Note: we intentionally do NOT check computed style (display:none) here
    // because that requires layout and is slow on large pages; the class-based
    // check covers the cases that actually cause stray badges.
    const hidden = elem.closest(
      '.cdk-visually-hidden, .sr-only, .visually-hidden, .mat-visually-hidden, ' +
      '[aria-hidden="true"]'
    );
    return !hidden;
  }

  /** Extract journal info from a single element using a selector spec. */
  function extractFromElem(elem, spec) {
    if (!elem) return null;
    // Issue 1: skip Angular/CDK accessibility-hidden elements (e.g. the
    // visually-hidden <h1>WOS Top Header</h1> on WoS that caused a stray
    // "Arts" badge pinned to the top-left corner).
    if (!isVisible(elem)) return null;
    let val = '';
    if (spec.attr) {
      val = (elem.getAttribute(spec.attr) || '').trim();
    } else {
      val = (elem.textContent || '').trim();
    }
    // Special handling for Google Scholar .gs_a venue format
    if (spec.extractVenue) {
      val = extractVenueFromGsA(val);
    } else if (spec.mapVenue) {
      // Google Scholar /citations 引用页：出处 div 文本形如 "Venue, 2020"，
      // 仅剥离末尾年份，保留期刊/会议名。
      const m = val.match(/^\s*(.+?)\s*[，,]?\s*\d{4}\s*$/);
      val = cleanTitle(m ? m[1] : val);
    } else {
      val = cleanTitle(val);
    }
    if (!val || val.length < 2 || val.length > 200) return null;
    // Filter out obviously non-title text
    if (/^(search|home|login|about|next|previous|menu)$/i.test(val)) return null;
    return val;
  }

  /** Extract ISSN from an element or meta tag. */
  function extractISSN(elem, spec) {
    if (!elem) return '';
    let val = spec.attr ? (elem.getAttribute(spec.attr) || '') : (elem.textContent || '');
    const m = String(val).match(RE_ISSN_LOOSE);
    return m ? cleanISSN(m[0]) : '';
  }

  /** Detect journals on the page. Returns array of { elem, title, issn, eissn, source }. */
  function detectJournals() {
    const detections = [];
    const seenElems = new WeakSet();
    // 检查 elem 自身或其任意祖先是否已被本次扫描处理过。
    // 用于跨层级去重：同一单元格内 <a> 与 <span> 会被不同选择器分别命中，
    // 若仅按节点去重会重复渲染徽章；此处向上遍历祖先链，处理完 <a> 后其
    // 子孙 <span> 即被跳过（等价 cnki-Scholar 每格只处理一次）。
    const isSelfOrAncestorSeen = (el) => {
      let p = el;
      while (p) {
        if (seenElems.has(p)) return true;
        p = p.parentElement;
      }
      return false;
    };

    // --- Pass 1: per-site selectors ---
    const site = matchSite();
    if (site) {
      // Title selectors
      for (const spec of site.selectors) {
        // Use querySelectorAll for full scan, but cap at MAX_BADGES_PER_PAGE
        let elems;
        try { elems = document.querySelectorAll(spec.css); } catch (e) { continue; }
        let count = 0;
        for (const elem of elems) {
          if (count >= MAX_BADGES_PER_PAGE) break;
          // 跳过脚本自身注入的 UI（徽章容器 os-rank-badges 及其中的 os-badge / os-tooltip）。
          // 徽章以 afterend 插在 td.source 内，是 `td.source span` 又能命中的 span，
          // 若不清除这里会把它当"期刊名"，导致滚动 re-scan 时徽章之上叠徽章 → 重复。
          if (elem.closest && elem.closest('.os-rank-badges, .os-tooltip')) continue;
          // 节点相等或祖先链已见 → 跳过（避免同格 a/span 重复渲染）
          if (seenElems.has(elem) || isSelfOrAncestorSeen(elem)) continue;
          const title = extractFromElem(elem, spec);
          if (!title) continue;
          seenElems.add(elem);
          detections.push({ elem, title, issn: '', eissn: '', source: 'site:' + site.host });
          count++;
        }
      }
      // ISSN selectors — attach ISSN to the page-level detection
      if (site.issnSelectors) {
        for (const spec of site.issnSelectors) {
          let elems;
          try { elems = document.querySelectorAll(spec.css); } catch (e) { continue; }
          for (const elem of elems) {
            const issn = extractISSN(elem, spec);
            if (issn) {
              // Attach to the first detection that lacks an ISSN, or set as page-level
              const target = detections.find(d => !d.issn) || detections[0];
              if (target && !target.issn) target.issn = issn;
              break;
            }
          }
        }
      }
    }

    // --- Pass 2: meta-tag fallback (works on most publisher sites) ---
    const meta = getCitationMeta();
    const metaTitle =
      meta['citation_journal_title'] ||
      meta['prism.publicationname'] ||
      meta['citation_journal_abbrev'] || '';
    const metaIssn =
      cleanISSN(meta['citation_issn'] || '') ||
      cleanISSN(meta['prism.issn'] || '') || '';
    if (metaTitle && !detections.some(d => normName(d.title) === normName(metaTitle))) {
      // Find a reasonable element to attach to, or use document.title container
      let attach = document.querySelector('h1:not(.cdk-visually-hidden):not(.sr-only):not(.visually-hidden):not(.mat-visually-hidden):not([aria-hidden="true"])') || document.body;
      if (!seenElems.has(attach)) {
        seenElems.add(attach);
        detections.push({
          elem: attach, title: metaTitle, issn: metaIssn, eissn: '',
          source: 'meta:citation_journal_title',
        });
      } else if (detections.length === 0) {
        // Fallback: attach to body even if "seen"
        detections.push({
          elem: document.body, title: metaTitle, issn: metaIssn, eissn: '',
          source: 'meta:citation_journal_title',
        });
      }
    } else if (metaIssn && detections.length > 0) {
      // Augment existing detection with the meta ISSN
      const target = detections.find(d => !d.issn);
      if (target) target.issn = metaIssn;
    }

    // --- Pass 2b: JSON-LD structured data (schema.org Periodical) ---
    if (detections.length === 0) {
      const ld = parseJsonLd();
      if (ld && ld.title) {
        const attach = document.querySelector('h1:not(.cdk-visually-hidden):not(.sr-only):not(.visually-hidden):not(.mat-visually-hidden):not([aria-hidden="true"])') || document.body;
        seenElems.add(attach);
        detections.push({
          elem: attach, title: ld.title, issn: ld.issn, eissn: ld.eissn,
          source: 'json-ld:Periodical',
        });
      }
    }

    // --- Pass 2c: page-title heuristic (last resort for publisher article pages) ---
    if (detections.length === 0) {
      const ptTitle = extractFromPageTitle();
      if (ptTitle && ptTitle.length >= 3) {
        const attach = document.querySelector('h1:not(.cdk-visually-hidden):not(.sr-only):not(.visually-hidden):not(.mat-visually-hidden):not([aria-hidden="true"])') || document.body;
        seenElems.add(attach);
        detections.push({
          elem: attach, title: ptTitle, issn: '', eissn: '',
          source: 'heuristic:page-title',
        });
      }
    }

    // --- Pass 3: Generic ISSN scan — find ISSN patterns anywhere on the page.
    //     More aggressive than the old version: finds ALL ISSNS, associates them
    //     with adjacent text that might be journal titles. Useful for journal
    //     listing pages, publisher catalogues, and sites without a custom selector.
    if (detections.length === 0) {
      const bodyText = document.body ? document.body.innerText : '';
      const issnMatches = bodyText.match(new RegExp(RE_ISSN.source, 'gi'));
      if (issnMatches && issnMatches.length > 0) {
        // Find each unique ISSN and try to find nearby text as title
        const seenIssns = new Set();
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;
        const issnTitlePairs = [];
        while ((node = walker.nextNode())) {
          if (!node.nodeValue) continue;
          const m = node.nodeValue.match(RE_ISSN_LOOSE);
          if (!m) continue;
          const issn = cleanISSN(m[0]);
          if (!issn || seenIssns.has(issn)) continue;
          seenIssns.add(issn);

          // Look for a nearby link or heading that might be the journal title
          let parent = node.parentElement;
          let titleGuess = '';
          // Search up to 3 levels for a title-like element
          for (let i = 0; i < 3 && parent; i++) {
            // Check sibling text or headers
            const nearby = parent.textContent || '';
            const lines = nearby.split(/[\n\r]+/).map(l => l.trim()).filter(Boolean);
            for (const line of lines) {
              const cleaned = cleanTitle(line);
              if (cleaned && cleaned.length >= 3 && cleaned.length <= 120 &&
                  !/^\d{4}$/.test(cleaned) && !/^(issn|e?issn)/i.test(cleaned)) {
                titleGuess = cleaned;
                break;
              }
            }
            if (titleGuess) break;
            parent = parent.parentElement;
          }

          if (titleGuess || issnMatches.length <= 5) {
            const elem = node.parentElement;
            if (elem && !seenElems.has(elem)) {
              seenElems.add(elem);
              issnTitlePairs.push({
                elem,
                title: titleGuess || '',
                issn,
                eissn: '',
              });
            }
          }
          if (issnTitlePairs.length >= MAX_BADGES_PER_PAGE) break;
        }

        // Add all ISSN-title pairs as detections (limited to MAX_BADGES_PER_PAGE)
        let issnCount = 0;
        for (const pair of issnTitlePairs) {
          if (issnCount >= MAX_BADGES_PER_PAGE) break;
          detections.push({
            ...pair,
            source: 'regex:issn-generic',
          });
          issnCount++;
        }
      }
    }

    return detections;
  }

  // ===========================================================================
  // 7. API client
  //    Sends detected journals to the local backend /api/checkrank.
  //    Caches results by journal key (ISSN or normalized title) with a TTL.
  // ===========================================================================

  /** Build a cache key for a detection. */
  function cacheKey(d) {
    return d.issn ? 'issn:' + d.issn : 'name:' + normName(d.title);
  }

  /** Read a cached result. Returns null if missing or expired. */
  function getCached(key) {
    try {
      const raw = GM_get('os_cache:' + key, null);
      if (!raw) return null;
      const obj = JSON.parse(raw);
      if (Date.now() - obj.ts > CACHE_TTL_MS) return null;
      return obj.data;
    } catch (e) { return null; }
  }

  /** Write a result to the cache. */
  function setCached(key, data) {
    try {
      GM_set('os_cache:' + key, JSON.stringify({ ts: Date.now(), data }));
    } catch (e) { /* ignore quota errors */ }
  }

  /** POST a batch of journals to /api/checkrank. Returns the parsed response. */
  async function callCheckrank(journals) {
    const url = SETTINGS.apiBase.replace(/\/+$/, '') + '/api/checkrank';
    const body = JSON.stringify({ journals });
    const headers = { 'Content-Type': 'application/json' };
    if (SETTINGS.apikey) headers['Authorization'] = 'Bearer ' + SETTINGS.apikey;
    const r = await gmFetch(url, {
      method: 'POST',
      headers,
      body,
      timeout: 20000,
    });
    if (r.status >= 200 && r.status < 300 && r.data) return r.data;
    throw new Error(`HTTP ${r.status}: ${(r.raw || '').slice(0, 200)}`);
  }

  /** Ping the backend. Returns true if alive. */
  async function pingBackend() {
    try {
      const headers = {};
      if (SETTINGS.apikey) headers['Authorization'] = 'Bearer ' + SETTINGS.apikey;
      const r = await gmFetch(SETTINGS.apiBase.replace(/\/+$/, '') + '/api/ping', { headers, timeout: 5000 });
      return r.status === 200 && r.data && r.data.ok;
    } catch (e) { return false; }
  }

  /**
   * Resolve and rank a list of journal queries.
   * Each query is { title, issn, eissn } — no DOM element needed.
   * Returns an array of { resolved, metrics } parallel to the input.
   * Uses cache first; batches uncached queries to the backend.
   */
  async function resolveAndRank(queries) {
    const out = new Array(queries.length).fill(null);
    const toFetch = [];        // indices that need a backend query
    const fetchPayload = [];   // parallel journals array for the backend

    // Pass 1: check cache
    for (let i = 0; i < queries.length; i++) {
      const q = queries[i];
      const key = q.issn ? 'issn:' + q.issn : 'name:' + normName(q.title || '');
      const cached = getCached(key);
      if (cached) {
        out[i] = { resolved: cached.resolved, metrics: cached.metrics };
      } else {
        toFetch.push(i);
        fetchPayload.push({
          title: q.title || '',
          issn: q.issn || '',
          eissn: q.eissn || '',
        });
      }
    }

    if (toFetch.length === 0) return out;

    // Pass 2: batch-fetch uncached entries.
    // 并发处理多个批次（本地库未命中、需回退服务器时明显提速），
    // 单个批次失败不影响其他批次。
    const MAX_CONCURRENT = 3;
    const chunkTasks = [];
    for (let start = 0; start < fetchPayload.length; start += BATCH_SIZE) {
      chunkTasks.push({
        chunk: fetchPayload.slice(start, start + BATCH_SIZE),
        idxs: toFetch.slice(start, start + BATCH_SIZE),
      });
    }
    let nextChunk = 0;
    const worker = async () => {
      while (nextChunk < chunkTasks.length) {
        const { chunk, idxs } = chunkTasks[nextChunk++];
        try {
          const resp = await callCheckrank(chunk);
          const respResults = resp.results || {};
          const resolved = resp.resolved || [];
          for (let j = 0; j < idxs.length; j++) {
            const detIdx = idxs[j];
            const q = queries[detIdx];
            const r = resolved[j];  // null if not found
            const key = q.issn ? 'issn:' + q.issn : 'name:' + normName(q.title || '');
            if (!r) {
              setCached(key, { resolved: null, metrics: null });
              out[detIdx] = { resolved: null, metrics: null };
              continue;
            }
            const metrics = respResults[r.key] || null;
            out[detIdx] = { resolved: r, metrics };
            setCached(key, { resolved: r, metrics });
          }
        } catch (e) {
          console.warn('[JournalRank] /api/checkrank batch failed:', e.message);
          for (const detIdx of idxs) {
            if (out[detIdx] === null) out[detIdx] = { resolved: null, metrics: null, error: e.message };
          }
        }
      }
    };
    await Promise.all(
      Array.from({ length: Math.min(MAX_CONCURRENT, chunkTasks.length) }, worker)
    );

    return out;
  }

  // ===========================================================================
  // 8. Badge renderer
  //    Renders colored badges next to each detected journal title element,
  //    plus an optional hover tooltip with full details.
  // ===========================================================================

  /** Format a single metric item into a short badge string. */
  function formatBadge(source, item) {
    const lbl = sourceLabel(source);
    let text = lbl.short;
    const val = String(item.value || '').trim();
    if (source === 'imf' || source === 'if5' || source === 'jci' ||
        source === 'citescore' || source === 'sjr') {
      // Numeric — show value with 1 decimal if it's a float
      const num = parseFloat(val);
      text += ' ' + (isNaN(num) ? val : (num % 1 === 0 ? String(num) : num.toFixed(1)));
    } else if (source === 'cas' || source === 'xr' || source === 'jcr' ||
               source === 'xr_small' || source === 'jcr_small') {
      text += ' ' + val;
      if (item.is_top) text += ' Top';
    } else if (source === 'ei') {
      text = 'EI';
    } else if (source === 'cscd' || source === 'cssci' || source === 'pku' ||
               source === 'kjhx' || source === 'ccf' || source === 'doaj') {
      text = lbl.short;
    } else if (source === 'xr_warning' || source === 'onhold' ||
               source === 'istic_warning') {
      text = '⚠ ' + (val || lbl.short);
    } else if (val) {
      text += ' ' + val;
    }
    return text;
  }

  /** Build a tooltip HTML showing all metrics for a journal. */
  function buildTooltipHTML(resolved, metrics) {
    if (!metrics) return '<div class="os-tip-empty">无分区数据</div>';
    const title = resolved ? (resolved.title_zh || resolved.title || '') : '';
    const issn  = resolved ? (resolved.issn || '') : '';
    let html = '<div class="os-tip">';
    if (title) html += `<div class="os-tip-title">${escapeHtml(title)}</div>`;
    if (issn)  html += `<div class="os-tip-issn">ISSN: ${escapeHtml(issn)}</div>`;
    html += '<div class="os-tip-body">';
    const sources = Object.keys(metrics).sort(
      (a, b) => (SETTINGS.displayOrder.indexOf(a) + 1 || 99) - (SETTINGS.displayOrder.indexOf(b) + 1 || 99)
    );
    for (const src of sources) {
      const items = metrics[src] || [];
      const lbl = sourceLabel(src);
      html += `<div class="os-tip-row"><span class="os-tip-label">${escapeHtml(lbl.full)}</span>`;
      for (const it of items) {
        const val = escapeHtml(it.value || '');
        const cat = it.category ? ` <em>[${escapeHtml(it.category)}]</em>` : '';
        const top = it.is_top ? ' <strong>Top</strong>' : '';
        const warn = it.warning ? ` <span class="os-warn">[${escapeHtml(it.warning)}]</span>` : '';
        const yr = it.year ? ` <span class="os-year">${escapeHtml(it.year)}</span>` : '';
        html += `<span class="os-tip-val">${val}${cat}${top}${warn}${yr}</span>`;
      }
      html += '</div>';
    }
    html += '</div></div>';
    return html;
  }

  /** Render badges for one resolved journal onto its detected element. */
  function renderBadges(det, resolved, metrics) {
    const elem = det.elem;
    if (!elem) return;
    const curTitle = String(det.title || '');

    // Issue 2: virtual-scroll node recycling (e.g. Web of Science search list).
    // Angular CDK may reuse the same DOM <span> with a different journal title
    // when the user scrolls. The persisted data-os-ranked marker would make us
    // skip the recycled node, so the new journal got no badge (and the old
    // badge stayed attached showing wrong info). Track the rendered title and
    // tear down the previous render when it changes.
    if (elem.dataset.osRanked === '1') {
      if (elem.dataset.osTitle === curTitle) return;  // identical — already done
      // Title changed: clear previous markers and remove the old badge sibling.
      delete elem.dataset.osRanked;
      delete elem.dataset.osStatus;
      // The badge container was inserted via insertAdjacentElement('afterend'),
      // so it sits as the immediate next sibling of elem inside the parent.
      const old = elem.nextElementSibling;
      if (old && old.classList && old.classList.contains('os-rank-badges')) {
        old.remove();
      }
      // fall through to re-render with the new title
    }

    if (!metrics) {
      // Mark as processed (negative result) so we don't retry
      elem.dataset.osRanked = '1';
      elem.dataset.osStatus = 'no-data';
      elem.dataset.osTitle = curTitle;
      return;
    }

    // Build the badge container
    const container = document.createElement('span');
    container.className = 'os-rank-badges';
    container.dataset.osRanked = '1';
    container.dataset.osStatus = 'done';
    container.title = '';  // we use custom tooltip instead

    const sources = Object.keys(metrics).sort(
      (a, b) => (SETTINGS.displayOrder.indexOf(a) + 1 || 99) - (SETTINGS.displayOrder.indexOf(b) + 1 || 99)
    );

    let badgeCount = 0;
    for (const src of sources) {
      if (badgeCount >= 8) break;  // limit inline badges
      const items = metrics[src] || [];
      // For partition sources, show only the main category (empty category) first;
      // for xr_small with multiple categories, show the first.
      let item = items.find(it => !it.category) || items[0];
      if (!item) continue;

      const text = formatBadge(src, item);
      if (!text) continue;
      const color = colorFor(src, item.value, item.is_top);
      const badge = document.createElement('span');
      badge.className = 'os-badge';
      badge.style.backgroundColor = color.bg;
      badge.style.color = color.fg;
      badge.textContent = text;
      container.appendChild(badge);
      badgeCount++;
    }

    if (container.children.length === 0) {
      elem.dataset.osRanked = '1';
      elem.dataset.osStatus = 'no-data';
      elem.dataset.osTitle = curTitle;
      return;
    }

    // Tooltip (hover card)
    if (SETTINGS.showTooltip) {
      const tip = document.createElement('div');
      tip.className = 'os-tooltip';
      tip.innerHTML = buildTooltipHTML(resolved, metrics);
      container.appendChild(tip);
    }

    // Insert next to the detected element.
    // Try insertAdjacentElement('afterend') first; fall back to appendChild.
    try {
      elem.insertAdjacentElement('afterend', container);
    } catch (e) {
      try { elem.appendChild(container); } catch (e2) { /* give up */ }
    }

    // Mark the title element itself so we don't re-process it
    elem.dataset.osRanked = '1';
    elem.dataset.osStatus = 'done';
    elem.dataset.osTitle = curTitle;
  }

  // ===========================================================================
  // 9. Styles
  // ===========================================================================
  const CSS = `
.os-rank-badges {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 3px;
  margin: 0 4px;
  vertical-align: middle;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 12px;
  line-height: 1.4;
}
.os-badge {
  display: inline-block;
  padding: 1px 6px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
  cursor: default;
  user-select: none;
  letter-spacing: 0.2px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
}
.os-badge:hover { opacity: 0.88; }
.os-tooltip {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999999;
  min-width: 280px;
  max-width: 420px;
  background: #fff;
  color: #222;
  border: 1px solid #d0d7de;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  padding: 10px 12px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-top: 4px;
  white-space: normal;
}
.os-rank-badges:hover .os-tooltip { display: block; }
.os-tip-title {
  font-weight: 700;
  font-size: 13px;
  color: #1f2328;
  margin-bottom: 2px;
  word-break: break-word;
}
.os-tip-issn {
  color: #656d76;
  font-size: 11px;
  margin-bottom: 6px;
}
.os-tip-body { display: flex; flex-direction: column; gap: 3px; }
.os-tip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  align-items: baseline;
}
.os-tip-label {
  font-weight: 600;
  color: #57606a;
  min-width: 90px;
  font-size: 11px;
}
.os-tip-val {
  color: #1f2328;
}
.os-tip-val em { color: #0969da; font-style: normal; }
.os-tip-val strong { color: #cf222e; }
.os-tip-val .os-warn { color: #cf222e; font-weight: 600; }
.os-tip-val .os-year { color: #8c959f; font-size: 10px; }
.os-tip-empty { color: #8c959f; font-style: italic; }

/* Floating panel (optional, toggled via menu) */
.os-float-panel {
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 999999;
  width: 320px;
  max-height: 60vh;
  overflow-y: auto;
  background: #fff;
  border: 1px solid #d0d7de;
  border-radius: 10px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 12px;
}
.os-float-panel-header {
  padding: 8px 12px;
  background: #f6f8fa;
  border-bottom: 1px solid #d0d7de;
  border-radius: 10px 10px 0 0;
  font-weight: 700;
  font-size: 13px;
  color: #1f2328;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.os-float-panel-body { padding: 8px 12px; }
.os-float-journal {
  padding: 6px 0;
  border-bottom: 1px solid #eaeef2;
}
.os-float-journal:last-child { border-bottom: none; }
.os-float-journal-title {
  font-weight: 600;
  color: #1f2328;
  margin-bottom: 3px;
  word-break: break-word;
}
.os-float-journal-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
}

/* Status indicator (shown briefly during scan) */
.os-status-toast {
  position: fixed;
  bottom: 16px;
  left: 16px;
  z-index: 999999;
  background: #1f2328;
  color: #fff;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-family: -apple-system, sans-serif;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}
.os-status-toast.os-visible { opacity: 0.95; }
`;

  // ===========================================================================
  // 10. Scanner
  //     Scans the page for journals, resolves them, and renders badges.
  //     Uses a MutationObserver to re-scan on SPA navigations.
  // ===========================================================================

  let scanInProgress = false;
  // 若扫描正在进行时又有新请求(如知网翻页替换了表格行、MutationObserver 触发)，
  // 记录脏标记，待当前扫描结束后补跑一次，避免"新页已加载却不再显示"。
  let scanDirty = false;
  let lastScanUrl = '';
  const statusToast = (() => {
    let el = null;
    let hideTimer = null;
    return {
      show(text) {
        if (!el) {
          el = document.createElement('div');
          el.className = 'os-status-toast';
          document.body.appendChild(el);
        }
        el.textContent = text;
        el.classList.add('os-visible');
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => el.classList.remove('os-visible'), 2500);
      },
    };
  })();

  /** Run a full scan: detect → resolve → render. */
  async function scan() {
    if (!SETTINGS.enabled) return;
    if (document.readyState !== 'complete' && document.readyState !== 'interactive') return;
    // Skip obviously non-academic pages (secondary guard after @exclude)
    if (!isLikelyAcademicPage()) return;
    // 上一轮扫描仍在进行：标记脏，结束后补跑一次，避免翻页/动态加载被吞。
    if (scanInProgress) {
      scanDirty = true;
      return;
    }
    scanInProgress = true;

    // Lazy-load local DB on first academic scan. 从 bootstrap 开始预载；这里
    // await join 同一加载 Promise，确保首次渲染即走本地秒查而非慢速服务器。
    if (SETTINGS.useLocal && !localDB._ready && SETTINGS.localJsonUrl) {
      await localDB.init(SETTINGS.localJsonUrl);
    }

    try {
      const detections = detectJournals();
      if (detections.length === 0) return;

      // Group detections by unique journal key, keeping ALL elements
      // (each element = one article row on a search results page)
      const groups = new Map();  // key -> { detections: [], representative: detection }
      for (const d of detections) {
        const key = d.issn ? 'issn:' + d.issn : 'name:' + normName(d.title);
        let g = groups.get(key);
        if (!g) {
          g = { detections: [], key };
          groups.set(key, g);
        }
        g.detections.push(d);
      }
      if (groups.size === 0) return;

      statusToast.show(`[JournalRank] 正在查询 ${groups.size} 本期刊 (${detections.length} 篇文章)...`);

      // --- Resolve journals: local JSON first, then server fallback ---
      const groupList = Array.from(groups.values());
      // Build the server payload ONCE (fixes ReferenceError on queryPayload)
      const payload = groupList.map(g => {
        const rep = g.detections[0];
        return { title: rep.title || '', issn: rep.issn || '', eissn: rep.eissn || '' };
      });
      let results;
      let useMode = 'server';

      if (SETTINGS.useLocal && localDB._ready) {
        // Instant local lookup — no network round-trip
        useMode = 'local';
        results = groupList.map(g => {
          const rep = g.detections[0];
          const r = localDB.lookup(rep.title, rep.issn);
          return r || null;  // null when not found
        });
        // For any not found locally, fall back to server
        const notFound = [];
        const notFoundIdx = [];
        for (let i = 0; i < results.length; i++) {
          if (!results[i]) {
            notFoundIdx.push(i);
            notFound.push(payload[i]);
          }
        }
        if (notFound.length > 0) {
          try {
            const serverResults = await resolveAndRank(notFound);
            for (let j = 0; j < notFound.length; j++) {
              results[notFoundIdx[j]] = serverResults[j];
            }
            useMode = 'local+server';
          } catch (e) { /* keep nulls for not-found */ }
        }
      } else {
        // Server-only mode
        results = await resolveAndRank(payload);
      }

      let rendered = 0;

      for (let i = 0; i < groupList.length; i++) {
        const g = groupList[i];
        const r = results[i];
        if (!r || !r.metrics) {
          // Mark all elements in this group as processed (no data)
          for (const d of g.detections) {
            if (d.elem) {
              d.elem.dataset.osRanked = '1';
              d.elem.dataset.osStatus = r && r.error ? 'error' : 'no-data';
              d.elem.dataset.osTitle = String(d.title || '');
            }
          }
          continue;
        }
        // Render badges on ALL elements that share this journal
        for (const d of g.detections) {
          if (d.elem) {
            renderBadges(d, r.resolved, r.metrics);
            rendered++;
          }
        }
      }
      if (rendered > 0) {
        statusToast.show(`[JournalRank] 已为 ${rendered} 篇文章显示分区`);
      }
    } catch (e) {
      console.warn('[JournalRank] scan error:', e);
    } finally {
      scanInProgress = false;
      // 扫描期间有被跳过的请求：补跑一次（防止翻页/动态加载期间被吞的扫描）。
      if (scanDirty) {
        scanDirty = false;
        setTimeout(() => scan(), 100);
      }
    }
  }

  const debouncedScan = debounce(scan, SCAN_DEBOUNCE_MS);

  /** Set up a MutationObserver to re-scan on SPA navigations / dynamic content. */
  function observeMutations() {
    let lastUrl = location.href;
    // URL-change watcher (for SPAs that don't trigger MutationObserver)
    setInterval(() => {
      if (location.href !== lastUrl) {
        lastUrl = location.href;
        debouncedScan();
      }
    }, 1000);

    const observer = new MutationObserver((mutations) => {
      // Only trigger if meaningful nodes were added
      let hasAdded = false;
      for (const m of mutations) {
        if (m.addedNodes && m.addedNodes.length > 0) {
          for (const n of m.addedNodes) {
            if (n.nodeType === Node.ELEMENT_NODE &&
                !n.classList?.contains('os-rank-badges') &&
                !n.classList?.contains('os-tooltip') &&
                !n.classList?.contains('os-status-toast')) {
              hasAdded = true;
              break;
            }
          }
        }
        if (hasAdded) break;
      }
      if (hasAdded) debouncedScan();
    });
    observer.observe(document.documentElement || document.body, {
      childList: true,
      subtree: true,
    });

    // WoS 用 Angular CDK 虚拟滚动：新结果在滚动时才渲染，且常发生在 CDK
    // 内部滚动容器内，MutationObserver 不可靠。参照 CCFRank 的做法，仅对
    // Web of Science 单独加定时兜底重扫 + popstate 监听，从而不影响知网等
    // 其他站点（避免重复显示回归）。已渲染条目由 renderBadges 的
    // osTitle 比较防重，重复扫描仅补齐滚动后新增的行。
    if (/webofscience\./.test(location.hostname)) {
      setInterval(() => { debouncedScan(); }, 700);
      window.addEventListener('popstate', () => { debouncedScan(); });
    }
  }

  // ===========================================================================
  // 11. Settings menu
  // ===========================================================================
  function registerMenu() {
    if (!GM_menu) return;

    GM_menu('JournalRank: 切换开关', () => {
      SETTINGS.enabled = !SETTINGS.enabled;
      saveSettings();
      statusToast.show(`[JournalRank] 已${SETTINGS.enabled ? '启用' : '禁用'}`);
      if (SETTINGS.enabled) debouncedScan();
    });

    GM_menu('JournalRank: 设置后端地址', () => {
      const cur = SETTINGS.apiBase;
      const v = prompt('请输入本地后端地址：', cur);
      if (v && v.trim()) {
        SETTINGS.apiBase = v.trim().replace(/\/+$/, '');
        saveSettings();
        statusToast.show(`[JournalRank] 后端地址已更新为 ${SETTINGS.apiBase}`);
        pingBackend().then(ok => {
          statusToast.show(ok ? '[JournalRank] 后端连接正常' : '[JournalRank] 后端连接失败');
        });
      }
    });

    GM_menu('JournalRank: 设置 API Key', () => {
      const cur = SETTINGS.apikey || '';
      const v = prompt('请输入后端 API Key（留空表示后端无需鉴权）：', cur);
      if (v === null) return;
      SETTINGS.apikey = v.trim();
      saveSettings();
      statusToast.show('[JournalRank] API Key 已更新');
      pingBackend().then(ok => {
        statusToast.show(ok ? '[JournalRank] ✅ 后端连接正常' : '[JournalRank] ❌ 后端连接失败（可能 Key 错误或后端未启动）');
      });
    });

    GM_menu('JournalRank: 测试后端连接', () => {
      statusToast.show('[JournalRank] 正在测试后端连接...');
      pingBackend().then(ok => {
        if (ok) {
          statusToast.show('[JournalRank] ✅ 后端连接正常');
        } else {
          statusToast.show('[JournalRank] ❌ 后端连接失败，请确认 server.py 已启动');
        }
      });
    });

    GM_menu('JournalRank: 切换悬浮提示', () => {
      SETTINGS.showTooltip = !SETTINGS.showTooltip;
      saveSettings();
      statusToast.show(`[JournalRank] 悬浮提示已${SETTINGS.showTooltip ? '开启' : '关闭'}`);
      // Re-render: clear all badges and re-scan
      document.querySelectorAll('.os-rank-badges').forEach(el => el.remove());
      document.querySelectorAll('[data-os-ranked="1"]').forEach(el => {
        delete el.dataset.osRanked;
        delete el.dataset.osStatus;
        delete el.dataset.osTitle;
      });
      if (SETTINGS.enabled) debouncedScan();
    });

    GM_menu('JournalRank: 立即重新扫描', () => {
      document.querySelectorAll('.os-rank-badges').forEach(el => el.remove());
      document.querySelectorAll('[data-os-ranked="1"]').forEach(el => {
        delete el.dataset.osRanked;
        delete el.dataset.osStatus;
        delete el.dataset.osTitle;
      });
      debouncedScan();
    });

    GM_menu('JournalRank: 清除缓存', () => {
      if (!confirm('确认清除所有期刊查询缓存？下次访问时会重新查询后端。')) return;
      try {
        GM_set('os_cache:__cleared__', String(Date.now()));
      } catch (e) { /* ignore */ }
      statusToast.show('[JournalRank] 缓存已清除（请在 Tampermonkey 管理面板的存储中清空以彻底清除）');
      document.querySelectorAll('.os-rank-badges').forEach(el => el.remove());
      document.querySelectorAll('[data-os-ranked="1"]').forEach(el => {
        delete el.dataset.osRanked;
        delete el.dataset.osStatus;
        delete el.dataset.osTitle;
      });
      debouncedScan();
    });

    GM_menu('JournalRank: 设置本地JSON地址', () => {
      const cur = SETTINGS.localJsonUrl || '';
      const v = prompt(
        '请输入扁平JSON地址（支持 .json 或 .json.gz）：\n' +
        '生成方式: python scripts/export_flat_json.py --minify --gzip\n' +
        '示例: https://gcore.jsdelivr.net/gh/iluckyyang/journalrank@main/data/journals_flat.json.gz\n' +
        '留空则使用服务器模式',
        cur
      );
      if (v === null) return;
      SETTINGS.localJsonUrl = v.trim();
      SETTINGS.useLocal = false;
      saveSettings();
      if (SETTINGS.localJsonUrl) {
        statusToast.show('[JournalRank] 正在加载本地JSON数据...');
        localDB.reload(SETTINGS.localJsonUrl).then(ok => {
          if (ok) {
            SETTINGS.useLocal = true;
            saveSettings();
            statusToast.show(`[JournalRank] ✅ 本地JSON加载完成 (${localDB._byTitle.size} 个索引)`);
            // Re-scan with local data
            document.querySelectorAll('.os-rank-badges').forEach(el => el.remove());
            document.querySelectorAll('[data-os-ranked="1"]').forEach(el => {
              delete el.dataset.osRanked;
              delete el.dataset.osStatus;
        delete el.dataset.osTitle;
            });
            debouncedScan();
          } else {
            statusToast.show('[JournalRank] ❌ 本地JSON加载失败，回退到服务器模式');
          }
        });
      } else {
        statusToast.show('[JournalRank] 已切换到服务器模式');
      }
    });

    GM_menu('JournalRank: 切换本地优先模式', () => {
      if (!SETTINGS.localJsonUrl) {
        statusToast.show('[JournalRank] 请先设置本地JSON地址');
        return;
      }
      SETTINGS.useLocal = !SETTINGS.useLocal;
      saveSettings();
      if (SETTINGS.useLocal && !localDB._ready) {
        statusToast.show('[JournalRank] 正在加载本地JSON...');
        localDB.init(SETTINGS.localJsonUrl).then(ok => {
          if (ok) {
            saveSettings();
            statusToast.show('[JournalRank] ✅ 本地模式已启用（秒级查询）');
            document.querySelectorAll('.os-rank-badges').forEach(el => el.remove());
            document.querySelectorAll('[data-os-ranked="1"]').forEach(el => {
              delete el.dataset.osRanked;
              delete el.dataset.osStatus;
        delete el.dataset.osTitle;
            });
            debouncedScan();
          } else {
            SETTINGS.useLocal = false;
            saveSettings();
            statusToast.show('[JournalRank] ❌ 加载失败');
          }
        });
      } else if (SETTINGS.useLocal && localDB._ready) {
        statusToast.show('[JournalRank] ✅ 本地模式（即时查询，无需服务器）');
        document.querySelectorAll('.os-rank-badges').forEach(el => el.remove());
        document.querySelectorAll('[data-os-ranked="1"]').forEach(el => {
          delete el.dataset.osRanked;
          delete el.dataset.osStatus;
        delete el.dataset.osTitle;
        });
        debouncedScan();
      } else {
        statusToast.show('[JournalRank] 已切换到服务器模式');
      }
    });

    GM_menu(`JournalRank v${SCRIPT_VERSION}`, () => {
      const modeStr = SETTINGS.useLocal && localDB._ready
        ? `本地模式 (${localDB._byTitle?.size || 0} 期刊已索引)`
        : '服务器模式';
      alert(
        `${SCRIPT_NAME} v${SCRIPT_VERSION}\n\n` +
        `后端: ${SETTINGS.apiBase}\n` +
        `模式: ${modeStr}\n` +
        `状态: ${SETTINGS.enabled ? '已启用' : '已禁用'}\n\n` +
        `数据源: JCR / 中科院 / 新锐 / EI / CSCD / CSSCI 等\n` +
        `后端: Cloudflare Workers (src/index.ts) 或本地 python server.py\n` +
        `CLI 查询: python client.py search "Nature"\n` +
        `鉴权: 后端默认全局开启，需通过菜单设置 API Key\n\n` +
        `本地JSON加速: scripts/export_flat_json.py --minify --gzip\n` +
        `输出文件 ~7MB (压缩后 ~1MB)，加载后查询速度提升 100x+`
      );
    });
  }

  // ===========================================================================
  // 12. Bootstrap
  // ===========================================================================
  function bootstrap() {
    if (GM_style) GM_style(CSS);
    else {
      const style = document.createElement('style');
      style.textContent = CSS;
      (document.head || document.documentElement).appendChild(style);
    }

    registerMenu();

    // Eagerly start local DB load (if enabled & page looks academic) so it's
    // ready by the time the initial scan runs. Non-academic pages skip the
    // 7.7MB fetch entirely (suggestion 2: isLikelyAcademicPage guard).
    // SPA navigations later caught by lazy-load in scan().
    if (SETTINGS.enabled && SETTINGS.useLocal && isLikelyAcademicPage()) {
      localDB.init(SETTINGS.localJsonUrl).then(ok => {
        if (!ok && SETTINGS.useLocal) {
          // Preserve existing behaviour: disable local mode on failure
          SETTINGS.useLocal = false;
          saveSettings();
        }
      });
    }

    // Initial scan
    if (SETTINGS.enabled) {
      // Wait a moment for dynamic content to settle
      setTimeout(() => {
        debouncedScan();
        observeMutations();
      }, 500);
    }

    // Periodic backend health check (every 5 min, non-blocking)
    setInterval(() => {
      if (SETTINGS.enabled) pingBackend().then(() => {});
    }, 5 * 60 * 1000);

    console.log(`[JournalRank] v${SCRIPT_VERSION} loaded. Backend: ${SETTINGS.apiBase}`);
  }

  // Kick off
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
})();
