(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{BCrp:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return x}));var n=t("Fcif"),o=t("+I+c"),l=t("mXGw"),r=t("/FXl"),u=t("TjRS"),s=t("ZFoC"),i=t("d/45"),c=t("LOlc"),p=t("8GNc"),d=t("sv7W"),b=(t("aD51"),{});void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/Rate/docs/index.mdx"}});var f,v=(f="TagVersion",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),m={_frontmatter:b},y=u.a;function x(e){var a,t,f,x,_,g=e.components,h=Object(o.a)(e,["components"]);return Object(r.b)(y,Object(n.a)({},m,h,{components:g,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"rate"},"Rate"),Object(r.b)(v,{component:"Rate",mdxType:"TagVersion"}),Object(r.b)("h2",{id:"use-and-import"},"Use and Import"),Object(r.b)(s.Explain,{component:"Rate",isCopyable:!0,mdxType:"Explain"}),Object(r.b)("h2",{id:"case"},"Case"),Object(r.b)(s.d,{__position:2,__code:"() => {\n  const [value, setValue] = useState(1)\n  return (\n    <Rate\n      value={value}\n      allowHalf={false}\n      onChange={value => setValue(value)}\n    />\n  )\n}",__scope:(a={props:h,DefaultLayout:u.a,Playground:s.d,Explain:s.Explain,Rate:i.a,Text:c.a,Table:p.a,Props:d.a},a.DefaultLayout=u.a,a._frontmatter=b,a),wrapper:"Rate",mdxType:"Playground"},(function(){var e=useState(1),a=e[0],t=e[1];return Object(r.b)(i.a,{value:a,allowHalf:!1,onChange:function(e){return t(e)},mdxType:"Rate"})})),Object(r.b)(s.d,{__position:3,__code:"() => {\n  const [value, setValue] = useState(2)\n  return (\n    <>\n      <Text status=\"error\" style={{ fontWeight: 'bold' }}>\n        {' '}\n        AllowClear Attribute / if value change disabled will change true{' '}\n      </Text>\n      <Rate\n        allowClear={false}\n        icon=\"heart\"\n        value={value}\n        onChange={value => setValue(value)}\n      />\n    </>\n  )\n}",__scope:(t={props:h,DefaultLayout:u.a,Playground:s.d,Explain:s.Explain,Rate:i.a,Text:c.a,Table:p.a,Props:d.a},t.DefaultLayout=u.a,t._frontmatter=b,t),wrapper:"AllowClear / False",mdxType:"Playground"},(function(){var e=useState(2),a=e[0],t=e[1];return Object(r.b)(l.Fragment,null,Object(r.b)(c.a,{status:"error",style:{fontWeight:"bold"},mdxType:"Text"}," AllowClear Attribute / if value change disabled will change true "),Object(r.b)(i.a,{allowClear:!1,icon:"heart",value:a,onChange:function(e){return t(e)},mdxType:"Rate"}))})),Object(r.b)(s.d,{__position:4,__code:"() => {\n  const [value, setValue] = useState(3)\n  return (\n    <Rate\n      disabled\n      value={value}\n      allowHalf={false}\n      onChange={value => setValue(value)}\n    />\n  )\n}",__scope:(f={props:h,DefaultLayout:u.a,Playground:s.d,Explain:s.Explain,Rate:i.a,Text:c.a,Table:p.a,Props:d.a},f.DefaultLayout=u.a,f._frontmatter=b,f),wrapper:"disabled",mdxType:"Playground"},(function(){var e=useState(3),a=e[0],t=e[1];return Object(r.b)(i.a,{disabled:!0,value:a,allowHalf:!1,onChange:function(e){return t(e)},mdxType:"Rate"})})),Object(r.b)(s.d,{__position:5,__code:"() => {\n  const [value, setValue] = useState(3.5)\n  return (\n    <>\n      <Text status=\"error\" style={{ fontWeight: 'bold' }}>\n        only icon('heart' | 'start') support half{' '}\n      </Text>\n      <Rate value={value} onChange={value => setValue(value)} />\n      <Rate value={value} icon=\"heart\" onChange={value => setValue(value)} />\n    </>\n  )\n}",__scope:(x={props:h,DefaultLayout:u.a,Playground:s.d,Explain:s.Explain,Rate:i.a,Text:c.a,Table:p.a,Props:d.a},x.DefaultLayout=u.a,x._frontmatter=b,x),wrapper:"Icon Half",mdxType:"Playground"},(function(){var e=useState(3.5),a=e[0],t=e[1];return Object(r.b)(l.Fragment,null,Object(r.b)(c.a,{status:"error",style:{fontWeight:"bold"},mdxType:"Text"},"only icon('heart' | 'start') support half "),Object(r.b)(i.a,{value:a,onChange:function(e){return t(e)},mdxType:"Rate"}),Object(r.b)(i.a,{value:a,icon:"heart",onChange:function(e){return t(e)},mdxType:"Rate"}))})),Object(r.b)(s.d,{__position:6,__code:'() => {\n  const [value, setValue] = useState(4)\n  return (\n    <Rate\n      icon="like"\n      count={10}\n      value={value}\n      onHoverChange={value => setValue(value)}\n    />\n  )\n}',__scope:(_={props:h,DefaultLayout:u.a,Playground:s.d,Explain:s.Explain,Rate:i.a,Text:c.a,Table:p.a,Props:d.a},_.DefaultLayout=u.a,_._frontmatter=b,_),wrapper:"Hover Change",mdxType:"Playground"},(function(){var e=useState(4),a=e[0],t=e[1];return Object(r.b)(i.a,{icon:"like",count:10,value:a,onHoverChange:function(e){return t(e)},mdxType:"Rate"})})),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)(l.Fragment,null,[d.a.public].map((function(e){var a=e.columns,t=e.data,n=e.footer;return Object(r.b)("div",{style:{marginTop:20}},Object(r.b)(p.a,{theme:"dark",columns:a,data:t,footer:function(){return Object(r.b)("div",{style:{height:60,borderTop:"4px solid white",display:"flex",alignItems:"center",justifyContent:"center"}},n)},mdxType:"Table"}))}))))}void 0!==x&&x&&x===Object(x)&&Object.isExtensible(x)&&!x.hasOwnProperty("__filemeta")&&Object.defineProperty(x,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/Rate/docs/index.mdx"}}),x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-rate-docs-index-mdx-0a34685d78c77b7d3216.js.map