import{c as h,r as m,j as o}from"./index-oQiJtYgt.js";const u=()=>{let e=new AbortController,t=e.signal;const d=new Promise(async r=>{const l=await fetch("https://jsonplaceholder.typicode.com/posts",{signal:t});r(l.json())});return d.cancel=()=>e.abort(),d};function g(){const e=h.c(12),[t,d]=m.useState(u),r=m.useDeferredValue(t);let l;e[0]!==t?(l=function(j){t.cancel(),d(u())},e[0]=t,e[1]=l):l=e[1];const p=l;let n;e[2]===Symbol.for("react.memo_cache_sentinel")?(n=o.jsx("div",{id:"tips",children:"初始化时获取列表"}),e[2]=n):n=e[2];let s;e[3]!==p?(s=o.jsx("input",{id:"_04_input",type:"text",autoComplete:"off",placeholder:"input key word",onChange:p}),e[3]=p,e[4]=s):s=e[4];let c;e[5]===Symbol.for("react.memo_cache_sentinel")?(c=o.jsx("div",{children:"loading..."}),e[5]=c):c=e[5];const a=t!==r;let i;e[6]!==r||e[7]!==a?(i=o.jsx(m.Suspense,{fallback:c,children:o.jsx(_,{api:r,isPending:a})}),e[6]=r,e[7]=a,e[8]=i):i=e[8];let f;return e[9]!==s||e[10]!==i?(f=o.jsxs("div",{className:"_04_wrapper",children:[n,s,i]}),e[9]=s,e[10]=i,e[11]=f):f=e[11],f}const _=e=>{const t=h.c(8),{api:d,isPending:r}=e,l=m.use(d),p=r?.5:1;let n;t[0]!==p?(n={opacity:p},t[0]=p,t[1]=n):n=t[1];let s;if(t[2]!==l){let a;t[4]===Symbol.for("react.memo_cache_sentinel")?(a=i=>o.jsxs("div",{className:"_04_item",children:[o.jsx("h2",{children:i.title}),o.jsx("p",{children:i.body})]},i.id),t[4]=a):a=t[4],s=l.map(a),t[2]=l,t[3]=s}else s=t[3];let c;return t[5]!==n||t[6]!==s?(c=o.jsx("ul",{className:"_04_list",style:n,children:s}),t[5]=n,t[6]=s,t[7]=c):c=t[7],c};export{g as default};