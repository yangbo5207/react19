import{c as w,r as I,j as l}from"./index-CKuzEZT2.js";function R(t){const e=w.c(26);let n,f,r,a,i,c;if(e[0]!==t){const{type:M,className:$,required:q,label:C,help:P,pattern:T,...k}=t;n=M,r=q,c=C,f=P,a=T,i=k,e[0]=t,e[1]=n,e[2]=f,e[3]=r,e[4]=a,e[5]=i,e[6]=c}else n=e[1],f=e[2],r=e[3],a=e[4],i=e[5],c=e[6];const o=n===void 0?"text":n,m=f===void 0?"此项规则不匹配":f,[u,d]=I.useState(!1),[p,x]=I.useState(!1),[s,y]=I.useState(!1);let h;e[7]!==s?(h=function($){s||y(!0);const q=$.target;d(q.validity.patternMismatch),x(q.validity.valueMissing)},e[7]=s,e[8]=h):h=e[8];const g=h;let v="";u&&(v=m),p&&(v="此项为必选项");let N;e[9]!==s||e[10]!==o||e[11]!==r||e[12]!==a||e[13]!==i||e[14]!==g?(N=s?l.jsx("input",{type:o,required:r,pattern:a,...i,onInput:g}):l.jsx("input",{type:o,...i,onInput:g}),e[9]=s,e[10]=o,e[11]=r,e[12]=a,e[13]=i,e[14]=g,e[15]=N):N=e[15];const E=N;let _;e[16]!==c?(_=c&&l.jsxs("label",{className:"w-20 text-right font-bold",children:[c,"："]}),e[16]=c,e[17]=_):_=e[17];let j;e[18]!==v?(j=l.jsx("div",{className:"msg_required absolute text-sm text-red-500 mt-1 indent-4",children:v}),e[18]=v,e[19]=j):j=e[19];let b;e[20]!==E||e[21]!==j?(b=l.jsxs("div",{className:"input flex-1",children:[E,j]}),e[20]=E,e[21]=j,e[22]=b):b=e[22];let S;return e[23]!==_||e[24]!==b?(S=l.jsxs("div",{className:"flex items-center my-10",children:[_,b]}),e[23]=_,e[24]=b,e[25]=S):S=e[25],S}function A(){const t=w.c(16);let e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],t[0]=e):e=t[0];const[n,f]=I.useState(e);let r;t[1]!==n?(r=function(s){const y=s.get("title"),h=s.get("content");f([...n,{title:y,content:h}])},t[1]=n,t[2]=r):r=t[2];const a=r;let i;t[3]===Symbol.for("react.memo_cache_sentinel")?(i=l.jsx(R,{label:"Name",name:"title",placeholder:"Enter Title",required:!0,pattern:"[0-9]{6}"}),t[3]=i):i=t[3];let c;t[4]===Symbol.for("react.memo_cache_sentinel")?(c=l.jsx(R,{label:"Content",name:"content",placeholder:"please input your content",required:!0}),t[4]=c):c=t[4];let o;t[5]===Symbol.for("react.memo_cache_sentinel")?(o=l.jsx("div",{className:"flex justify-end",children:l.jsx("button",{type:"submit",children:"Submit"})}),t[5]=o):o=t[5];let m;t[6]!==a?(m=l.jsxs("form",{action:a,children:[i,c,o]}),t[6]=a,t[7]=m):m=t[7];let u;if(t[8]!==n){let x;t[10]===Symbol.for("react.memo_cache_sentinel")?(x=(s,y)=>l.jsxs("div",{className:"_07_item",children:[l.jsx("h2",{children:s.title}),l.jsx("p",{children:s.content})]},`${s.title}-${y}`),t[10]=x):x=t[10],u=n.map(x),t[8]=n,t[9]=u}else u=t[9];let d;t[11]!==u?(d=l.jsx("ul",{className:"_07_list",children:u}),t[11]=u,t[12]=d):d=t[12];let p;return t[13]!==m||t[14]!==d?(p=l.jsxs("div",{className:"border p-4 rounded-xl",children:[m,d]}),t[13]=m,t[14]=d,t[15]=p):p=t[15],p}export{A as default};
