(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{fxDg:function(e,s,t){"use strict";t.r(s),t.d(s,"_frontmatter",(function(){return p})),t.d(s,"default",(function(){return d}));var n=t("Fcif"),c=t("+I+c"),o=(t("mXGw"),t("/FXl")),i=t("TjRS"),r=t("LOlc"),a=t("ZFoC"),p=(t("aD51"),{});void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docz/start.mdx"}});var m={_frontmatter:p},l=i.a;function d(e){var s=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)(l,Object(n.a)({},m,t,{components:s,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("div",{style:{marginTop:30}}),Object(o.b)("h3",{id:"npm"},"Npm"),Object(o.b)("h4",{id:"1-install-nes-design"},"1. Install NES-design"),Object(o.b)(a.Explain,{code:"npm install nes-design",isCopyable:!0,mdxType:"Explain"}),Object(o.b)("h4",{id:"2-install-peerdependencies"},"2. Install peerDependencies"),Object(o.b)(a.Explain,{auto:!0,code:"npm install nes.css >= 2.3.0\nnpm install react >= 16.8",isCopyable:!0,mdxType:"Explain"}),Object(o.b)("h3",{id:"cdn"},"CDN"),Object(o.b)("h3",{id:"1-import-js"},"1. Import js"),Object(o.b)(a.Explain,{auto:!0,code:"// Import React ReactDOM\n<script crossorigin src='https://unpkg.com/react@17/umd/react.development.js'><\/script>\n<script crossorigin src='https://unpkg.com/react-dom@17/umd/react-dom.development.js'><\/script>\n-\n// Import components\n<script src='xxx/nes-design.min.js'><\/script>\n",isCopyable:!0,mdxType:"Explain"}),Object(o.b)("h3",{id:"2-link-css"},"2. Link css"),Object(o.b)(a.Explain,{auto:!0,code:"// Link nes.css\n<link href='https://unpkg.com/nes.css@2.3.0/css/nes.min.css' rel='stylesheet' />\n-\n// Link nes-design\n<link rel='stylesheet' href=''xxx/index.css' />\n",isCopyable:!0,mdxType:"Explain"}),Object(o.b)("h2",{id:"use"},"Use"),Object(o.b)("h3",{id:"npm-project"},"Npm Project"),Object(o.b)(a.Explain,{auto:!0,code:"// Import css\n// _.(css|scss|less)\n@import 'nes.css/css/nes.css';\n@import 'nes-design/es/index.css';\n// _.(jsx|tsx)\nimport 'nes.css/css/nes.css';\nimport 'nes-design/es/index.css';\n-\n// Import Component\nimport { Component } from 'nes-design';\nimport Component from 'nes-design/Component';\n-\n// Use\nconst Custom = () => <Component />\nReactDOM.render(Custom,  document.getElementById('root'))",mdxType:"Explain"}),Object(o.b)("h3",{id:"cdn-html-project"},"CDN .Html Project"),Object(o.b)(a.Explain,{auto:!0,code:"/**@jsx React.DOM*/\nconst Custom = () => <Component />\n<script type='text/jsx'>\n   ReactDOM.render(Custom,  document.getElementById('root'))\n<\/script>",mdxType:"Explain"}),Object(o.b)("div",{style:{marginTop:30}}),Object(o.b)("h2",{id:"custom-theme"},"custom theme"),Object(o.b)("div",{style:{marginTop:30}}),Object(o.b)("h3",{id:"1-create-scss-file-and-import-scss"},"1. Create scss file And Import scss"),Object(o.b)(a.Explain,{auto:!0,code:"@import 'node_modules/nes.css/scss/nes.scss';\n@import 'nes-design/es/index.css'",isCopyable:!0,mdxType:"Explain"}),Object(o.b)("h3",{id:"2-cover-scss-theme-variable"},"2. Cover scss theme variable"),Object(o.b)(r.a,{mdxType:"Text"},Object(o.b)(r.a,{tag:"a",href:"https://github.com/nostalgic-css/NES.css/blob/develop/scss/base/variables.scss",mdxType:"Text"},"Theme variable")),Object(o.b)("h3",{id:"3-use"},"3. Use"),Object(o.b)(a.Explain,{auto:!0,code:"\n  // For Example\n  // _.scss\n  $primary-colors: (\n    normal: red,\n    hover: red,\n    shadow: red,\n  ) !default;\n  @import 'node_modules/nes.css/scss/nes.scss';\n  @import 'nes-design/es/index.css';\n  ",isCopyable:!0,mdxType:"Explain"}),Object(o.b)(r.a,{status:"error",style:{fontWeight:"bold"},mdxType:"Text"},"Will be an expected error, I'm",Object(o.b)(r.a,{tag:"a",style:{margin:"0 10px"},href:"https://github.com/nostalgic-css/NES.css/issues/459",mdxType:"Text"},"following up"),"on that."),Object(o.b)(r.a,{status:"error",style:{fontWeight:"bold"},mdxType:"Text"},"Temporary solutions",Object(o.b)(r.a,{status:"error",mdxType:"Text"},"Change 'node_modules/nes.css/scss/base/variables.scss'",Object(o.b)(a.Explain,{auto:!0,code:"$cursor-url: url('') !default; \n$cursor-click-url: url('') !default;'",mdxType:"Explain"}))))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docz/start.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docz-start-mdx-3d5112ba1551f7521776.js.map