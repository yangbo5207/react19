import{c as x,j as t,G as h}from"./index-WxVCoI3R.js";import{I as f,d as u}from"./activecode-B_nYYbD8.js";import{h as p,a as g}from"./atom-one-light-CeVHWIu6.js";function j(){const s=x.c(5);let e;s[0]===Symbol.for("react.memo_cache_sentinel")?(e=function(l){localStorage.setItem("active_code",l.get("code")),location.reload()},s[0]=e):e=s[0];const o=e;let r;s[1]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx("div",{className:"flex-shrink-0",children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 text-yellow-700",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}),s[1]=r):r=s[1];let n;s[2]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsx("h3",{className:"text-sm font-medium text-yellow-800",children:"Attention needed"}),s[2]=n):n=s[2];let c;s[3]===Symbol.for("react.memo_cache_sentinel")?(c=t.jsx("div",{className:"rounded-md bg-yellow-50 p-4 border border-yellow-400",children:t.jsxs("div",{className:"flex",children:[r,t.jsxs("div",{className:"ml-3",children:[n,t.jsx("div",{className:"mt-2 text-sm text-yellow-700",children:t.jsx("p",{children:"你还未输入激活码，或者激活码已过期，请重新输入即可访问"})})]})]})}),s[3]=c):c=s[3];let i;return s[4]===Symbol.for("react.memo_cache_sentinel")?(i=t.jsxs("div",{className:"pt-4",children:[c,t.jsxs("form",{action:o,className:"flex items-center justify-between",children:[t.jsx(f,{name:"code",placeholder:"Please input your active code",className:"flex-1 mr-4",pattern:u}),t.jsx("button",{type:"submit",children:"确认"})]})]}),s[4]=i):i=s[4],i}function b({className:s,...e}){const o=/language-(\w+)/.exec(s||"");return o?t.jsx(p,{language:o[1],PreTag:"div",...e,style:g}):t.jsx("code",{className:s,...e})}function w(s){const e=x.c(8),{renderArticle:o,isAuth:r,isGiscus:n}=s,c=n===void 0?!0:n,i=localStorage.getItem("active_code"),m=r?i===u:!0;let l;e[0]!==m||e[1]!==o?(l=m?o(b):t.jsx(j,{}),e[0]=m,e[1]=o,e[2]=l):l=e[2];let a;e[3]!==c?(a=c&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"border-b mt-20 mb-8 text-lg font-bold pb-3"}),t.jsx(h,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"\\u6B22\\u8FCE\\u9053\\u53CB",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0})]}),e[3]=c,e[4]=a):a=e[4];let d;return e[5]!==l||e[6]!==a?(d=t.jsxs("div",{className:"pr-4 keep max-w-[700px] mx-auto",children:[l,a]}),e[5]=l,e[6]=a,e[7]=d):d=e[7],d}export{w as A};
