import{c as T,j as t,D as P,r as q}from"./index-WxVCoI3R.js";import{C as I}from"./Cardruntime-CkAYSVvf.js";import{C as H}from"./CodeFinder-DJkUQBOk.js";import{I as M}from"./activecode-B_nYYbD8.js";import{A as E}from"./index-Duxin1EB.js";import"./index-DMQVh9lL.js";import"./atom-one-light-CeVHWIu6.js";function U(){const e=T.c(4);let s;e[0]===Symbol.for("react.memo_cache_sentinel")?(s=function(n){const m=n.get("fname"),i=n.get("lname");alert(`输入内容：FirstName: ${m}, LastName: ${i}`)},e[0]=s):s=e[0];const l=s;let a;e[1]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"First name: "}),t.jsx("input",{type:"text",defaultValue:"Jake",name:"fname"})]}),e[1]=a):a=e[1];let c;e[2]===Symbol.for("react.memo_cache_sentinel")?(c=t.jsxs("div",{className:"flex items-center",children:[t.jsx("label",{className:"w-[100px]",children:"Last name: "}),t.jsx("input",{type:"text",defaultValue:"Ma",name:"lname"})]}),e[2]=c):c=e[2];let r;return e[3]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsxs("form",{action:l,className:"space-y-3",children:[a,c,t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{type:"submit",children:"提交"})})]}),e[3]=r):r=e[3],r}function L(){for(var e=[],s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",l=0;l<16;l++)e[l]=s.substr(Math.floor(Math.random()*16),1);return e[8]="-",e.join("")}function V(e){const s=T.c(13),{ref:l,onChange:a}=e;let c;s[0]!==l.current||s[1]!==a?(c=function(x){const b={id:L(),name:x.get("name"),desc:x.get("desc"),hours:x.get("hours"),rate:x.get("rate"),price:x.get("price")};l.current.close(),a&&a(b)},s[0]=l.current,s[1]=a,s[2]=c):c=s[2];const r=c;let h;s[3]===Symbol.for("react.memo_cache_sentinel")?(h=t.jsx(M,{label:"Name",name:"name",placeholder:"Plase input your project name.",required:!0}),s[3]=h):h=s[3];let n;s[4]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsx(M,{label:"Desc",name:"desc",placeholder:"please input your project description.",required:!0}),s[4]=n):n=s[4];let m;s[5]===Symbol.for("react.memo_cache_sentinel")?(m=t.jsx(M,{label:"Hours",name:"hours",type:"number",placeholder:"please input hours.",required:!0}),s[5]=m):m=s[5];let i;s[6]===Symbol.for("react.memo_cache_sentinel")?(i=t.jsx(M,{label:"Rate",name:"rate",type:"number",placeholder:"please input rate.",required:!0}),s[6]=i):i=s[6];let u;s[7]===Symbol.for("react.memo_cache_sentinel")?(u=t.jsx("div",{className:"flex justify-end",children:t.jsx("button",{type:"submit",children:"Submit"})}),s[7]=u):u=s[7];let d;s[8]!==r?(d=t.jsxs("form",{action:r,children:[h,n,m,i,u]}),s[8]=r,s[9]=d):d=s[9];let p;return s[10]!==l||s[11]!==d?(p=t.jsx(P,{ref:l,footer:!0,children:d}),s[10]=l,s[11]=d,s[12]=p):p=s[12],p}function J(){const e=T.c(37),s=q.useRef(null);let l;e[0]===Symbol.for("react.memo_cache_sentinel")?(l=[{id:L(),name:"Logo redesign",desc:"New logo and digital asset playbook.",hours:"20.0",rate:"100.00"}],e[0]=l):l=e[0];const[a,c]=q.useState(l);let r;e[1]!==a?(r=function(o){c([...a,o])},e[1]=a,e[2]=r):r=e[2];const h=r;let n;e[3]===Symbol.for("react.memo_cache_sentinel")?(n=(g,o)=>g+o.hours*o.rate,e[3]=n):n=e[3];const m=a.reduce(n,0);let i;e[4]===Symbol.for("react.memo_cache_sentinel")?(i=t.jsx("h1",{className:"text-base font-semibold leading-6 text-gray-900",children:"Invoice"}),e[4]=i):i=e[4];let u;e[5]===Symbol.for("react.memo_cache_sentinel")?(u=t.jsx("time",{dateTime:"2022-08-01",children:"August 1, 2022"}),e[5]=u):u=e[5];let d;e[6]===Symbol.for("react.memo_cache_sentinel")?(d=t.jsxs("div",{className:"sm:flex-auto",children:[i,t.jsxs("p",{className:"mt-2 text-sm text-gray-700",children:["For work completed from ",u," to"," ",t.jsx("time",{dateTime:"2022-08-31",children:"August 31, 2022"}),"."]})]}),e[6]=d):d=e[6];let p;e[7]===Symbol.for("react.memo_cache_sentinel")?(p=t.jsxs("div",{className:"sm:flex sm:items-center",children:[d,t.jsx("div",{className:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:t.jsx("button",{className:"primary",onClick:()=>s.current.show(),children:"Add"})})]}),e[7]=p):p=e[7];let f;e[8]!==s||e[9]!==h?(f=t.jsx(V,{ref:s,onChange:h}),e[8]=s,e[9]=h,e[10]=f):f=e[10];let x;e[11]===Symbol.for("react.memo_cache_sentinel")?(x=t.jsxs("colgroup",{children:[t.jsx("col",{className:"w-full sm:w-1/2"}),t.jsx("col",{className:"sm:w-1/6"}),t.jsx("col",{className:"sm:w-1/6"}),t.jsx("col",{className:"sm:w-1/6"})]}),e[11]=x):x=e[11];let b;e[12]===Symbol.for("react.memo_cache_sentinel")?(b=t.jsx("thead",{className:"border-b border-gray-300 text-gray-900",children:t.jsxs("tr",{children:[t.jsx("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0",children:"Project"}),t.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Hours"}),t.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Rate"}),t.jsx("th",{scope:"col",className:"py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:"Price"})]})}),e[12]=b):b=e[12];let j;if(e[13]!==a){let g;e[15]===Symbol.for("react.memo_cache_sentinel")?(g=o=>t.jsxs("tr",{className:"border-b border-gray-200",children:[t.jsxs("td",{className:"max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0",children:[t.jsx("div",{className:"font-medium text-gray-900",children:o.name}),t.jsx("div",{className:"mt-1 truncate text-gray-500",children:o.desc})]}),t.jsx("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:o.hours}),t.jsxs("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:["$",o.rate]}),t.jsxs("td",{className:"py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0",children:["$",o.hours*o.rate]})]},o.id),e[15]=g):g=e[15],j=a.map(g),e[13]=a,e[14]=j}else j=e[14];let y;e[16]!==j?(y=t.jsx("tbody",{children:j}),e[16]=j,e[17]=y):y=e[17];let w,A;e[18]===Symbol.for("react.memo_cache_sentinel")?(w=t.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Subtotal"}),A=t.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Subtotal"}),e[18]=w,e[19]=A):(w=e[18],A=e[19]);let N;e[20]!==m?(N=t.jsxs("tr",{children:[w,A,t.jsxs("td",{className:"pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0",children:["$",m]})]}),e[20]=m,e[21]=N):N=e[21];let D,C,$;e[22]===Symbol.for("react.memo_cache_sentinel")?(D=t.jsxs("tr",{children:[t.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Tax"}),t.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Tax"}),t.jsx("td",{className:"pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0",children:"$1760.00"})]}),C=t.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0",children:"Total"}),$=t.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden",children:"Total"}),e[22]=D,e[23]=C,e[24]=$):(D=e[22],C=e[23],$=e[24]);const k=m-1760;let _;e[25]!==k?(_=t.jsxs("tr",{children:[C,$,t.jsxs("td",{className:"pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:["$",k]})]}),e[25]=k,e[26]=_):_=e[26];let v;e[27]!==N||e[28]!==_?(v=t.jsxs("tfoot",{children:[N,D,_]}),e[27]=N,e[28]=_,e[29]=v):v=e[29];let S;e[30]!==y||e[31]!==v?(S=t.jsx("div",{className:"-mx-4 mt-8 flow-root sm:mx-0",children:t.jsxs("table",{className:"min-w-full",children:[x,b,y,v]})}),e[30]=y,e[31]=v,e[32]=S):S=e[32];let R;return e[33]!==p||e[34]!==f||e[35]!==S?(R=t.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[p,f,S]}),e[33]=p,e[34]=f,e[35]=S,e[36]=R):R=e[36],R}const X=`import Dialog from 'components/Dialog'
import Input from "components/Input";
import getUuid from "@/utils/uuid";

export default function Modal(props) {
  const {ref, onChange} = props

  function action(f) {
    const item = {
      id: getUuid(),
      name: f.get('name'),
      desc: f.get('desc'),
      hours: f.get('hours'),
      rate: f.get('rate'),
      price: f.get('price'),
    }
    ref.current.close()
    onChange && onChange(item)
  }

  return (
    <Dialog ref={ref} footer>
      <form action={action}>
        <Input label='Name' name='name' placeholder='Plase input your project name.' required />
        <Input label='Desc' name='desc' placeholder='please input your project description.' required/>
        <Input label='Hours' name='hours' type='number' placeholder='please input hours.' required/>
        <Input label='Rate' name='rate' type='number' placeholder='please input rate.' required/>

        <div className='flex justify-end'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </Dialog>
  )
}`,B=`import { useState, useRef } from 'react'
import Modal from './Modal'
import getUuid from "@/utils/uuid.js";


export default function Table() {
  const modal = useRef(null)

  const [revenues, setRevenues] = useState([{
    id: getUuid(),
    name: 'Logo redesign',
    desc: 'New logo and digital asset playbook.',
    hours: '20.0',
    rate: '100.00',
  }])

  function __onChange(data) {
    setRevenues([...revenues, data])
  }

  const subtotal = revenues.reduce((pre, cur) => {
    return pre + cur.hours * cur.rate
  }, 0)

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Invoice</h1>
          <p className="mt-2 text-sm text-gray-700">
            For work completed from <time dateTime="2022-08-01">August 1, 2022</time> to{' '}
            <time dateTime="2022-08-31">August 31, 2022</time>.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button className='primary' onClick={() => modal.current.show()}>Add</button>
        </div>
      </div>
      <Modal ref={modal} onChange={__onChange} />

      <div className="-mx-4 mt-8 flow-root sm:mx-0">
        <table className="min-w-full">
          <colgroup>
            <col className="w-full sm:w-1/2" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
          </colgroup>
          <thead className="border-b border-gray-300 text-gray-900">
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Project
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Hours
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Rate
            </th>
            <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
              Price
            </th>
          </tr>
          </thead>
          <tbody>
          {revenues.map((project) => (
            <tr key={project.id} className="border-b border-gray-200">
              <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                <div className="font-medium text-gray-900">{project.name}</div>
                <div className="mt-1 truncate text-gray-500">{project.desc}</div>
              </td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{project.hours}</td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">\${project.rate}</td>
              <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">\${project.hours * project.rate}</td>
            </tr>
          ))}
          </tbody>
          <tfoot>
          <tr>
            <th
              scope="row"
              colSpan={3}
              className="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
            >
              Subtotal
            </th>
            <th scope="row" className="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">
              Subtotal
            </th>
            <td className="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0">\${subtotal}</td>
          </tr>
          <tr>
            <th
              scope="row"
              colSpan={3}
              className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
            >
              Tax
            </th>
            <th scope="row" className="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden">
              Tax
            </th>
            <td className="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0">$1760.00</td>
          </tr>
          <tr>
            <th
              scope="row"
              colSpan={3}
              className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
            >
              Total
            </th>
            <th scope="row" className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">
              Total
            </th>
            <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">\${subtotal - 1760}</td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}`;function F(e){const s={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(s.p,{children:"React 19 在表单上提供了更多充满想象空间的 API，它们用好了非常爽，不过一个麻烦的事情是如果你通过自学，想要透彻理解并找到最佳实践可能会非常困难。"}),`
`,t.jsx(s.p,{children:"这里最核心的原因是因为开发思维发生了比较彻底的变化，主要体现在 React19 在尝试弱化受控组件的概念，尝试引导开发者尽可能少的使用 useEffect，并且尽可能少的使用 useState 存储数据。"}),`
`,t.jsx(s.p,{children:"抛开学习成本不谈，我个人认为这是一个非常好的变化，新的开发方式上在开发体验和性能表现上都有非常大的提升。它充分利用了 HTML 中表单元素本身已经支持的能力，例如表单验证，自定义异常样式，自定义错误信息等。"}),`
`,t.jsx(s.p,{children:"不过没关系，我会尽量拆分去学习。确保大家都能读有所得。这一章节就先简单给大家介绍一下 React 在表单上的基础表现。"}),`
`,t.jsx(s.hr,{}),`
`,t.jsx(s.h3,{children:"action 基础"}),`
`,t.jsxs(s.p,{children:["在 HTML 的表单元素中，我们可以通过监听 form 对象的 onsubmit 来回调函数的执行。也可以通过 ",t.jsx(s.code,{children:"action"})," 属性来直接向服务端发送请求。"]}),`
`,t.jsx(s.p,{children:"在 React 19 中，form 元素支持的 action 在这个基础之上发生了一些变化。它支持给 action 传递一个回调函数以供我们使用。该回调函数会将 FormData 作为参数传入。我们可以通过这种方式拿到表单里的所有数据。"}),`
`,t.jsxs(s.blockquote,{children:[`
`,t.jsx(s.p,{children:"这个变化主要是 React 中并不提倡直接获取元素对象，以及直接往后端发送请求的方式并不常用"}),`
`]}),`
`,t.jsx(s.pre,{children:t.jsx(s.code,{className:"language-js",children:`export default function Demo01() {
  function __formAction(formData) {
    const fname = formData.get('fname')
    const lname = formData.get('lname')
    alert(\`输入内容：FirstName: \${fname}, LastName: \${lname}\`)
  }
  return (
    <form action={__formAction} className='space-y-3'>
      <div className='flex items-center'>
        <label className='w-[100px]'>First name: </label>
        <input type="text" defaultValue="Jake" name="fname" />
      </div>
      <div className='flex items-center'>
        <label className='w-[100px]'>Last name: </label>
        <input type="text" defaultValue="Ma" name="lname" />
      </div>
      <div className='flex justify-end'>
        <button type='submit'>提交</button>
      </div>
    </form>
  )
}
`})}),`
`,t.jsx(I,{children:t.jsx(U,{})}),`
`,t.jsxs(s.p,{children:["当我们点击提交按钮时，action 方法就会触发执行。当然，我们也可以给 ",t.jsx(s.code,{children:"submit"})," 一个 ",t.jsx(s.code,{children:"formAction"})," 属性来达到同样的效果"]}),`
`,t.jsx(s.pre,{children:t.jsx(s.code,{className:"language-javascript",children:`<form>
  ...
  <button formAction={__formAction} type='submit'>提交</button>
</form>
`})}),`
`,t.jsxs(s.blockquote,{children:[`
`,t.jsxs(s.p,{children:["默认情况下，当我们点击提交之后，form 会自动清空内部的所有数据，或者重置回  ",t.jsx(s.code,{children:"defaultValue"})]}),`
`,t.jsxs(s.p,{children:["如果你在设置了 action 的同时，又设置了 onSubmit 回调，那么 onSubmit 会优先执行，我们可以通过在 onSbumit 中执行 ",t.jsx(s.code,{children:"e.preventDefault()"})," 来阻止 action 回调的执行"]}),`
`]}),`
`,t.jsx(s.pre,{children:t.jsx(s.code,{className:"language-javascript",children:`function __onSubmit(e) {
  e.preventDefault()
  ...
}
`})}),`
`,t.jsx(s.hr,{}),`
`,t.jsx(s.h3,{children:"案例"}),`
`,t.jsx(s.p,{children:"学习了这些基础知识之后，我们来完成一个比较简单的案例。我们在表单中输入信息，并把信息记录展示在一个列表中。案例演示效果如下"}),`
`,t.jsx(I,{children:t.jsx(J,{})}),`
`,t.jsxs(s.p,{children:["在这个案例中，我们提供了一个 ",t.jsx(s.code,{children:"Add"})," 按钮，点击该按钮之后，会出现一个弹窗。在弹窗中，我们可以输入每一条信息。输入完成之后，点击提交，输入的信息就会展示在列表中。"]}),`
`,t.jsx(s.p,{children:"完整代码如下"}),`
`,t.jsx(H,{files:{"index.jsx":B,"Modal.jsx":X},activeFile:"index.jsx"})]})}function G(e={}){const{wrapper:s}=e.components||{};return s?t.jsx(s,{...e,children:t.jsx(F,{...e})}):F(e)}function ee(){const e=T.c(1);let s;return e[0]===Symbol.for("react.memo_cache_sentinel")?(s=t.jsx(E,{renderArticle:l=>t.jsx(G,{components:{code:l}})}),e[0]=s):s=e[0],s}export{ee as default};