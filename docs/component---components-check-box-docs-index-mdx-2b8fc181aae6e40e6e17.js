(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{wU88:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return d})),n.d(a,"default",(function(){return k}));var o=n("Fcif"),t=n("+I+c"),l=n("mXGw"),u=n("/FXl"),r=n("TjRS"),c=n("lePQ"),p=n("+zg/"),s=n("8GNc"),b=n("ZFoC"),i=n("90oO"),d=(n("aD51"),{});void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"components/CheckBox/docs/index.mdx"}});var h={_frontmatter:d},x=r.a;function k(e){var a,n,k,C,f,g=e.components,v=Object(t.a)(e,["components"]);return Object(u.b)(x,Object(o.a)({},h,v,{components:g,mdxType:"MDXLayout"}),Object(u.b)("h2",{id:"checkbox"},"Checkbox"),Object(u.b)(b.TagVersion,{component:"Checkbox",mdxType:"TagVersion"}),Object(u.b)("h2",{id:"use-and-import"},"Use and Import"),Object(u.b)(b.Explain,{component:"Checkbox",isCopyable:!0,mdxType:"Explain"}),Object(u.b)("h2",{id:"case"},"Case"),Object(u.b)(b.d,{__position:2,__code:"() => {\n  const [checked, setChecked] = useState(false)\n  return (\n    <CheckBox checked={checked} onChange={e => setChecked(e.target.checked)}>\n      {' '}\n      Yes{' '}\n    </CheckBox>\n  )\n}",__scope:(a={props:v,DefaultLayout:r.a,CheckBox:c.a,CheckboxGroup:p.a,Table:s.a,Playground:b.d,TagVersion:b.TagVersion,Explain:b.Explain,Props:i.a},a.DefaultLayout=r.a,a._frontmatter=d,a),wrapper:"CheckBox",mdxType:"Playground"},(function(){var e=useState(!1),a=e[0],n=e[1];return Object(u.b)(c.a,{checked:a,onChange:function(e){return n(e.target.checked)},mdxType:"CheckBox"}," Yes ")})),Object(u.b)(b.d,{__position:3,__code:"() => {\n  const [value, setValue] = useState([])\n  return (\n    <>\n      <CheckboxGroup\n        value={value}\n        options={[\n          { label: 'Yes', value: 'yes', defaultChecked: true },\n          { label: 'No', value: 'no' },\n        ]}\n        onChange={values => setValue(values)}\n      />\n      <CheckboxGroup\n        theme=\"dark\"\n        style={{\n          display: 'flex',\n          background: 'black',\n          height: 50,\n          alignItems: 'center',\n        }}\n        value={value}\n        options={[\n          { label: 'Yes', value: 'yes', defaultChecked: true },\n          { label: 'No', value: 'no' },\n        ]}\n        onChange={values => setValue(values)}\n      />\n    </>\n  )\n}",__scope:(n={props:v,DefaultLayout:r.a,CheckBox:c.a,CheckboxGroup:p.a,Table:s.a,Playground:b.d,TagVersion:b.TagVersion,Explain:b.Explain,Props:i.a},n.DefaultLayout=r.a,n._frontmatter=d,n),wrapper:"CheckboxGroup / Option is Object",mdxType:"Playground"},(function(){var e=useState([]),a=e[0],n=e[1];return Object(u.b)(l.Fragment,null,Object(u.b)(p.a,{value:a,options:[{label:"Yes",value:"yes",defaultChecked:!0},{label:"No",value:"no"}],onChange:function(e){return n(e)},mdxType:"CheckboxGroup"}),Object(u.b)(p.a,{theme:"dark",style:{display:"flex",background:"black",height:50,alignItems:"center"},value:a,options:[{label:"Yes",value:"yes",defaultChecked:!0},{label:"No",value:"no"}],onChange:function(e){return n(e)},mdxType:"CheckboxGroup"}))})),Object(u.b)(b.d,{__position:4,__code:"() => {\n  const [value, setValue] = useState([])\n  return (\n    <CheckboxGroup\n      value={value}\n      options={['Yes', 'No']}\n      onChange={values => setValue(values)}\n    />\n  )\n}",__scope:(k={props:v,DefaultLayout:r.a,CheckBox:c.a,CheckboxGroup:p.a,Table:s.a,Playground:b.d,TagVersion:b.TagVersion,Explain:b.Explain,Props:i.a},k.DefaultLayout=r.a,k._frontmatter=d,k),wrapper:"CheckboxGroup / Option is string",mdxType:"Playground"},(function(){var e=useState([]),a=e[0],n=e[1];return Object(u.b)(p.a,{value:a,options:["Yes","No"],onChange:function(e){return n(e)},mdxType:"CheckboxGroup"})})),Object(u.b)(b.d,{__position:5,__code:"() => {\n  const [value, setValue] = useState(['orange'])\n  return (\n    <CheckboxGroup\n      value={value}\n      options={[\n        { label: 'Apple', value: 'apple', defaultChecked: true },\n        { label: 'Banana', value: 'banana' },\n      ]}\n      onChange={values => setValue(values)}\n    >\n      <CheckBox\n        labelProps={{ style: { display: 'block' } }}\n        value=\"orange\"\n        children=\"Orange\"\n      />\n    </CheckboxGroup>\n  )\n}",__scope:(C={props:v,DefaultLayout:r.a,CheckBox:c.a,CheckboxGroup:p.a,Table:s.a,Playground:b.d,TagVersion:b.TagVersion,Explain:b.Explain,Props:i.a},C.DefaultLayout=r.a,C._frontmatter=d,C),wrapper:"CheckboxGroup + CheckBox",mdxType:"Playground"},(function(){var e=useState(["orange"]),a=e[0],n=e[1];return Object(u.b)(p.a,{value:a,options:[{label:"Apple",value:"apple",defaultChecked:!0},{label:"Banana",value:"banana"}],onChange:function(e){return n(e)},mdxType:"CheckboxGroup"},Object(u.b)(c.a,{labelProps:{style:{display:"block"}},value:"orange",children:"Orange",mdxType:"CheckBox"}))})),Object(u.b)(b.d,{__position:6,__code:"() => {\n  const [value, setValue] = useState(['orange'])\n  return (\n    <>\n      <CheckboxGroup\n        disabled\n        value={value}\n        options={[{ label: 'Apple', value: 'apple', defaultChecked: true }]}\n        onChange={values => setValue(values)}\n      />\n      <CheckBox disabled defaultChecked>\n        {' '}\n        Banana{' '}\n      </CheckBox>\n    </>\n  )\n}",__scope:(f={props:v,DefaultLayout:r.a,CheckBox:c.a,CheckboxGroup:p.a,Table:s.a,Playground:b.d,TagVersion:b.TagVersion,Explain:b.Explain,Props:i.a},f.DefaultLayout=r.a,f._frontmatter=d,f),wrapper:"disabled",mdxType:"Playground"},(function(){var e=useState(["orange"]),a=e[0],n=e[1];return Object(u.b)(l.Fragment,null,Object(u.b)(p.a,{disabled:!0,value:a,options:[{label:"Apple",value:"apple",defaultChecked:!0}],onChange:function(e){return n(e)},mdxType:"CheckboxGroup"}),Object(u.b)(c.a,{disabled:!0,defaultChecked:!0,mdxType:"CheckBox"}," Banana "))})),Object(u.b)("h2",{id:"props"},"Props"),Object(u.b)(l.Fragment,null,[i.a.public,i.a.checkboxGroup,i.a.checkbox,i.a.option].map((function(e){var a=e.columns,n=e.data,o=e.footer;return Object(u.b)("div",{style:{marginTop:20}},Object(u.b)(s.a,{theme:"dark",columns:a,data:n,footer:function(){return Object(u.b)("div",{style:{height:60,borderTop:"4px solid white",display:"flex",alignItems:"center",justifyContent:"center"}},o)},mdxType:"Table"}))}))))}void 0!==k&&k&&k===Object(k)&&Object.isExtensible(k)&&!k.hasOwnProperty("__filemeta")&&Object.defineProperty(k,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"components/CheckBox/docs/index.mdx"}}),k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---components-check-box-docs-index-mdx-2b8fc181aae6e40e6e17.js.map