import{c as x,r as j,j as e}from"./index-CKuzEZT2.js";import{B as u}from"./index-BmRxIqvy.js";import{C as p}from"./Cardruntime-tClLpz24.js";import{A as h}from"./index--XoUEj4u.js";import"./index-C7Jph34V.js";import"./atom-one-light-B1cH31dZ.js";import"./Preview-B-0qojbv.js";const m=`import {useState} from 'react'
import Button from './Button'
import {_c} from './useCache.js'

export default function Counter() {
  const $ = _c(10);

  if ($[0] !== "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac") {
    for (let $i = 0; $i < 10; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac";
  }

  const [count, setCount] = useState(0);
  let t0;

  if ($[0] !== count) {
    t0 = function __clickHanler() {
      setCount(count + 1);
    };

    $[0] = count;
    $[1] = t0;
  } else {
    t0 = $[1];
  }

  const __clickHanler = t0;
  let t1;

  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div>A Base Case</div>;
    $[2] = t1;
  } else {
    t1 = $[2];
  }

  let t2;

  if ($[3] !== count) {
    t2 = <div>currnt count is: {count}</div>;
    $[3] = count;
    $[4] = t2;
  } else {
    t2 = $[4];
  }

  let t3;

  if ($[5] !== __clickHanler) {
    t3 = <Button onClick={__clickHanler}>Increment</Button>;
    $[5] = __clickHanler;
    $[6] = t3;
  } else {
    t3 = $[6];
  }

  let t4;

  if ($[7] !== t2 || $[8] !== t3) {
    t4 = (
      <div>
        {t1}
        <div className="flex items-center justify-between">
          {t2}
          {t3}
        </div>
      </div>
    );
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }

  return t4;
}
`,f=`import {useState} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  function __clickHanler() {
    setCount(count + 1)
  }

  return (
    <div>
      <div>A Base Case</div>
      <div className="flex items-center justify-between">
        <div>currnt count is: {count}</div>
        <button onClick={__clickHanler}>Increment</button>
      </div>
    </div>
  )
}
`,$=`import {useState} from 'react'
export function _c(size) {
  return useState(() => Array.from(size))[0]
}
`;function _(){const c=x.c(10),[n,o]=j.useState(0);let s;c[0]!==n?(s=function(){o(n+1)},c[0]=n,c[1]=s):s=c[1];const d=s;let l;c[2]===Symbol.for("react.memo_cache_sentinel")?(l=e.jsx("div",{children:"A Base Case"}),c[2]=l):l=c[2];let t;c[3]!==n?(t=e.jsxs("div",{children:["currnt count is: ",n]}),c[3]=n,c[4]=t):t=c[4];let r;c[5]!==d?(r=e.jsx("button",{onClick:d,children:"Increment"}),c[5]=d,c[6]=r):r=c[6];let i;return c[7]!==t||c[8]!==r?(i=e.jsxs("div",{children:[l,e.jsxs("div",{className:"flex items-center justify-between",children:[t,r]})]}),c[7]=t,c[8]=r,c[9]=i):i=c[9],i}function a(c){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{children:e.jsx(n.em,{children:"1"})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"如何查看编译之后的代码"})}),`
`,e.jsxs(n.p,{children:["通常情况下，你只需要在合适的位置打印一个 log。然后我们就可以通过下图所示的位置，在 ",e.jsx(n.code,{children:"console"})," 面板中，点击跳转到编译之后的代码。"]}),`
`,e.jsx(n.p,{children:"当然，我们可以直接在 Sources 面板中查看。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`Chrome 开发者工具 -> Sources -> Page -> src
`})}),`
`,e.jsxs(n.p,{children:["除此之外，你也可以把代码拷贝到 ",e.jsx("a",{href:"https://playground.react.dev/",target:"_blank",children:e.jsx(n.strong,{children:"React Compiler Playground"})})," 。这是一个在线的代码编译转换工具。我们可以利用这个工具方便的将代码转换成 Compiler 编译之后的代码，学习非常方便。"]}),`
`,e.jsx(n.p,{children:"如果你存在任何疑问，完整的链接可以包含你的具体案例，在沟通和交流上非常方便。你可以在 react 的 issue 里看到大量 Compiler 不支持的骚操作。"}),`
`,e.jsx(n.p,{children:"知道了怎么查看编译之后的代码之后，那我们就需要看得懂才行。因此接下来"}),`
`,e.jsx(n.h2,{children:"2"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Symbol.for"})}),`
`,e.jsx(n.p,{children:"我本来最初的想法是看懂编译之后的代码不是很有必要。但是偶尔会出现一些情况，程序运行的结果跟我预想的不一样。"}),`
`,e.jsx(n.p,{children:"出现这种迷惑行为的时候就感觉贼困惑，为啥会这样呢？布吉岛 ～，如何调整我自己的写法呢？也不知道。我很不喜欢这种一脸懵逼的感觉。"}),`
`,e.jsx(n.p,{children:"看是得看懂才行。虽然这个代码很不像是正常人应该去阅读的代码。先来感受一下编译之后的代码长什么样，下面是一个案例的运行结果与其对应的代码。"}),`
`,e.jsx(p,{children:e.jsx(_,{})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`function Counter() {
  const $ = _c(10);

  if ($[0] !== "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac") {
    for (let $i = 0; $i < 10; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac";
  }

  const [count, setCount] = useState(0);
  let t0;

  if ($[0] !== count) {
    t0 = function __clickHanler() {
      setCount(count + 1);
    };

    $[0] = count;
    $[1] = t0;
  } else {
    t0 = $[1];
  }

  const __clickHanler = t0;
  let t1;

  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div>A Base Case</div>;
    $[2] = t1;
  } else {
    t1 = $[2];
  }

  let t2;

  if ($[3] !== count) {
    t2 = <div>currnt count is: {count}</div>;
    $[3] = count;
    $[4] = t2;
  } else {
    t2 = $[4];
  }

  let t3;

  if ($[5] !== __clickHanler) {
    t3 = <button onClick={__clickHanler}>Increment</button>;
    $[5] = __clickHanler;
    $[6] = t3;
  } else {
    t3 = $[6];
  }

  let t4;

  if ($[7] !== t2 || $[8] !== t3) {
    t4 = (
      <div>
        {t1}
        <div className="flex items-center justify-between">
          {t2}
          {t3}
        </div>
      </div>
    );
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }

  return t4;
}
`})}),`
`,e.jsxs(n.p,{children:["在 Compiler 编译后的代码中，有一个比较少见的语法会频繁出现：",e.jsx(n.code,{children:"Symbol.for"}),"，我先把这个知识点科普一下。"]}),`
`,e.jsx(n.p,{children:"Symbol 在 JavaScript 中，是一种基础数据类型。我们常常用 Symbol 来创建全局唯一值。例如，下面两个变量，虽然写法是一样的，但是他们的比较结果并不相等"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`var a = Symbol('hello')
var b = Symbol('hello')

a === b // false
`})}),`
`,e.jsx(n.p,{children:"Symbol.for 则不同，Symbol.for 传入相同字符串时，它不会重复创建不同的值。而是在后续的调用中，读取之前已经创建好的值。因此下面的代码对比结果为 true"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`var a = Symbol.for('for')
var b = Symbol.for('for')

a === b // true
`})}),`
`,e.jsxs(n.p,{children:["或者我们用另外一种说法来表达这种",e.jsx(n.strong,{children:"创建 -> 读取"}),"的过程。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`// 创建一个 symbol 并放入 symbol 注册表中，键为 "foo"
Symbol.for("foo");

// 从 symbol 注册表中读取键为"foo"的 symbol
Symbol.for("foo"); 
`})}),`
`,e.jsxs(n.p,{children:["在 Compiler 编译后的代码中，组件依赖 ",e.jsx(n.code,{children:"useMemoCache"})," 来缓存所有运算表达式，包括组件、函数等。在下面的例子中，",e.jsx(n.code,{children:"useMemoCache"})," 传入参数为 12，说明在该组件中，有 12 个单位需要被缓存。"]}),`
`,e.jsx(n.p,{children:"在初始化时，会默认给所有的缓存变量初始一个值。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`$ = useMemoCache(12)

for (let $i = 0; $i < 12; $i += 1) {
  $[$i] = Symbol.for("react.memo_cache_sentinel");
}
`})}),`
`,e.jsxs(n.p,{children:["那么，组件就可以根据缓存值是否等于 ",e.jsx(n.code,{children:"Symbol.for"})," 的初始值，来判断某一段内容是否被初始化过。",e.jsx(n.strong,{children:"如果相等，则没有被初始化。"})]}),`
`,e.jsx(n.p,{children:"如下："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`let t1;

if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
  t1 = <div id="tips">Tab 切换</div>;
  $[1] = t1;
} else {
  t1 = $[1];
}
`})}),`
`,e.jsx(n.h2,{children:"3"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"缓存原理详细分析"})}),`
`,e.jsx(n.p,{children:"我们需要重新详细解读一下上面那段代码。这是整个编译原理的核心理论。对于每一段可缓存内容，这里以一个元素为例，"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`<div>A Base Case</div>
`})}),`
`,e.jsx(n.p,{children:"我们会先声明一个中间变量，用于接收元素对象。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`let t1
`})}),`
`,e.jsxs(n.p,{children:["但是在接收之前，我们需要判断一下是否已经初始化过。如果没有初始化，那么则执行如下逻辑，创建该元素对象。创建完成之后，赋值给 t1，并缓存在 ",e.jsx(n.code,{children:"$[1]"})," 中。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
  t1 = <div>A Base Case</div>;
  $[2] = t1;
}
`})}),`
`,e.jsxs(n.p,{children:["如果已经初始化过，那么就直接读取之前缓存在 ",e.jsx(n.code,{children:"$[1]"})," 中的值即可。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`...
} else {
  t1 = $[2];
}
`})}),`
`,e.jsx(n.p,{children:"这样，当函数组件多次执行时，该元素组件就永远只会创建一次，而不会多次创建。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["这里需要注意的是，",e.jsx(n.strong,{children:"判断成本非常低"}),"，但是创建元素的成本会偏高，因此这种置换是非常划算的，我们后续会明确用数据告诉大家判断的成本"]}),`
`]}),`
`,e.jsx(n.p,{children:"对于一个函数组件中声明的函数而言，缓存的逻辑会根据情况不同有所变化。这里主要分为两种情况，一种情况是函数内部不依赖外部状态，例如"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`function __clickHanler(index) {
  tabRef.current[index].appeared = true
  setCurrent(index)
}
`})}),`
`,e.jsx(n.p,{children:"那么编译缓存逻辑与上面的元素是完全一致的，代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`let t0;

if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
  t0 = function __clickHanler(index) {
    tabRef.current[index].appeared = true;
    setCurrent(index);
  };

  $[0] = t0;
} else {
  t0 = $[0];
}
`})}),`
`,e.jsx(n.p,{children:"另外一种情况是有依赖外部状态，例如"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const [count, setCount] = useState(0)

// 此时依赖 counter，注意区分他们的细微差别
function __clickHanler() {
  setCount(count + 1)
}
`})}),`
`,e.jsx(n.p,{children:"那么编译结果，则只需要把是否重新初始化的判断条件调整一下即可"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`let t0;

if ($[0] !== count) {
  t0 = function __clickHanler() {
    setCount(count + 1);
  };

  $[0] = count;
  $[1] = t0;
} else {
  t0 = $[1];
}
`})}),`
`,e.jsx(n.p,{children:"这样，当 count 发生变化，t0 就会重新赋值，而不会采用缓存值，从而完美的绕开了闭包问题。"}),`
`,e.jsxs(n.p,{children:["除此在外，无论是函数、还是组件元素的缓存判断条件，都会优先考虑外部条件，使用 ",e.jsx(n.code,{children:"Symbol.for"})," 来判断时，则表示没有其他任何值的变化会影响到该缓存结果。"]}),`
`,e.jsx(n.p,{children:"例如，一个组件元素如下所示"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`<button onClick={__clickHanler}>counter++</button>
`})}),`
`,e.jsxs(n.p,{children:["此时它的渲染结果受到 ",e.jsx(n.code,{children:"__clickHanler"})," 的影响，因此，判断条件则不会使用 ",e.jsx(n.code,{children:"Symbol.for"}),"，编译结果如下"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`let t3;

if ($[5] !== __clickHanler) {
  t3 = <button onClick={__clickHanler}>Increment</button>;
  $[5] = __clickHanler;
  $[6] = t3;
} else {
  t3 = $[6];
}
`})}),`
`,e.jsxs(n.p,{children:["又例如下面这个元素组件，他的渲染结果受到 ",e.jsx(n.code,{children:"counter"})," 的影响。"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<div>currnt count is: {count}</div>
`})}),`
`,e.jsx(n.p,{children:"因此，它的编译结果为："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`let t2;

if ($[3] !== count) {
  t2 = <div>currnt count is: {count}</div>;
  $[3] = count;
  $[4] = t2;
} else {
  t2 = $[4];
}
`})}),`
`,e.jsx(n.p,{children:"对与这样的编译细节的理解至关重要。在以后的开发中，我们就可以完全不用担心闭包问题而导致程序出现你意想不到的结果了。"}),`
`,e.jsx(n.p,{children:"所有的可缓存对象，全部都是这个类似的逻辑。他的粒度细到每一个函数，每一个元素。这一点意义非凡，他具体代表着什么，我们在后续聊性能优化的时候再来明确。"}),`
`,e.jsx(n.p,{children:"不过需要注意的是，对于 map 的循环语法，在编译结果中，缓存的是整个结果，而不是渲染出来的每一个元素。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`{tabs.map((item, index) => {
  return (
    <item.component
      appearder={item.appeared}
      key={item.title}
      selected={current === index}
    />
  )
})}
`})}),`
`,e.jsx(n.p,{children:"编译结果表现如下："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`let t4;

if ($[7] !== current) {
  t4 = tabs.map((item_0, index_1) => (
    <item_0.component
      appearder={item_0.appeared}
      key={item_0.title}
      selected={current === index_1}
    />
  ));
  $[7] = current;
  $[8] = t4;
} else {
  t4 = $[8];
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"对这种情况的了解非常重要，因为有的时候我们需要做更极限的性能优化时，map 循环可能无法满足我们的需求。因为此时循环依然在执行，后面的案例中我们会更具体的分析 Map 的表现"}),`
`]}),`
`,e.jsx(n.p,{children:"目前这个阶段，我们最主要的是关心程序执行逻辑与预想的要保持一致，因此接下来，我们利用三个案例，来分析编译之后的执行过程。"}),`
`,e.jsx(n.h2,{children:"4"}),`
`,e.jsx(n.p,{children:"实践案例一：counter 递增"}),`
`,e.jsxs(n.p,{children:["通过上面对 Compiler 渲染结果的理解，我们应该已经大概知道下面这段代码最终会渲染成什么样。我们目前要思考的问题就是，这个例子，编译之后，",e.jsx(n.strong,{children:"收益表现在哪里？"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`function Index() {
  const [counter, setCounter] = useState(0)

  function __clickHanler() {
    console.log(counter)
    setCounter(counter + 1)
  }

  return (
    <div>
      <div id='tips'>基础案例，state 递增</div>
      <button onClick={__clickHanler}>counter++</button>
      <div className="counter">counter: {counter}</div>
    </div>
  )
}
`})}),`
`,e.jsxs(n.p,{children:["一起来分析一下，当我们点击按钮时，此时 ",e.jsx(n.code,{children:"counter"})," 增加，因此 ",e.jsx(n.code,{children:"__clickHanler"})," 无法缓存，需要重新创建，那么 button 按钮和 counter 标签都无法缓存。"]}),`
`,e.jsxs(n.p,{children:["此时，只有 ",e.jsx(n.code,{children:"tips"})," 元素可以被缓存。但是 ",e.jsx(n.code,{children:"tips"})," 元素本身是一个基础元素，在原本的逻辑中，经历一个简单的判断就能知道不需要重新创建节点因此本案例的编译之后收益非常效果。"]}),`
`,e.jsx(n.p,{children:"编译代码结果如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`function Index() {
  const $ = _c(10);

  const [counter, setCounter] = useState(0);
  let t0;

  if ($[0] !== counter) {
    t0 = function __clickHanler() {
      console.log(counter);
      setCounter(counter + 1);
    };

    $[0] = counter;
    $[1] = t0;
  } else {
    t0 = $[1];
  }

  const __clickHanler = t0;
  let t1;

  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div id="tips">基础案例，state 递增</div>;
    $[2] = t1;
  } else {
    t1 = $[2];
  }

  let t2;

  if ($[3] !== __clickHanler) {
    t2 = <button onClick={__clickHanler}>counter++</button>;
    $[3] = __clickHanler;
    $[4] = t2;
  } else {
    t2 = $[4];
  }

  let t3;

  if ($[5] !== counter) {
    t3 = <div className="counter">counter: {counter}</div>;
    $[5] = counter;
    $[6] = t3;
  } else {
    t3 = $[6];
  }

  let t4;

  if ($[7] !== t2 || $[8] !== t3) {
    t4 = (
      <div>
        {t1}
        {t2}
        {t3}
      </div>
    );
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }

  return t4;
}
`})}),`
`,e.jsx(n.h2,{children:"5"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"实践案例二：昂贵的子组件"})}),`
`,e.jsx(n.p,{children:"在上面一个例子的基础之上，我们新增一个子组件。该子组件的渲染非常耗时。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`function Expensive() {
  var cur = performance.now()
  while (performance.now() - cur < 1000) {
    // block 1000ms
  }
  console.log('hellow')
  return (
    <div>我是一个耗时组件</div>
  )
}
`})}),`
`,e.jsx(n.p,{children:"父组件中引入该子组件，其他逻辑完全一致。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`function Index() {
  const [counter, setCounter] = useState(0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <div id='tips'>基础案例，state 递增</div>
      <button onClick={__clickHanler}>counter++</button>
      <div className="counter">counter: {counter}</div>
+      <Expensive />
    </div>
  )
}
`})}),`
`,e.jsxs(n.p,{children:["我们在之前「React 知命境」的学习中，对于性能优化已经有非常深厚的积累。因此我们知道，在这种情况之下，由于父组件的状态发生了变化，导致子组件 ",e.jsx(n.code,{children:"Expensive"})," 会在 counter 递增时重复执行。从而导致页面渲染时非常卡顿。"]}),`
`,e.jsx(n.p,{children:"编译之后，针对这一段逻辑的优化代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`let t4;

if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
  t4 = <Expensive />;
  $[7] = t4;
} else {
  t4 = $[7];
}
`})}),`
`,e.jsx(n.p,{children:"正如代码所表达的一样，由于这一个组件，并没有依赖任何外部状态，因此只需要在初始化时赋值一次即可。后续直接使用缓存值。"}),`
`,e.jsxs(n.p,{children:["因此，在这个案例中，Compiler 编译之后的",e.jsx(n.strong,{children:"优化效果非常明显，收益巨大"}),"。"]}),`
`,e.jsx(n.h2,{children:"6"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"实践案例三：Tab 切换"})}),`
`,e.jsx(n.p,{children:"这个案例会非常的复杂，经验稍微欠缺一点的前端开发可能都实现不了。我们先来看一下我想要实现的演示效果。"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://files.mdnice.com/user/3925/551a8f32-866d-4155-881a-5e3bce0d38ff.gif",alt:""})}),`
`,e.jsx(n.p,{children:"从演示效果上来看，这是一个普通的 tab 切换。但是先别急，我还有要求。我希望能实现极限的性能优化。"}),`
`,e.jsx(n.p,{children:"1、我希望首次渲染时，页面渲染更少的内容，因此此时，只能先渲染默认的 Panel。其他 Panel 需要在点击对应的按钮时，才渲染出来。"}),`
`,e.jsx(n.p,{children:"2、在切换过程中，我希望能够缓存已经渲染好的 Panel，只需要在样式上做隐藏，而不需要在后续的交互中重复渲染内容"}),`
`,e.jsx(n.p,{children:"3、当四个页面都渲染出来之后，再做切换时，此时只会有两个页面会发生变化，上一个选中的页面与下一个选中的页面。另外的页面不参与交互，则不应该 re-render。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"这个案例和要求不算特别难，但是对综合能力的要求还是蛮高的，大家有空可以自己尝试实现一下，看看能不能完全达到要求"}),`
`]}),`
`,e.jsx(n.p,{children:"具体的完整实现我们会在后续的直播中跟大家分享。大家可以加我好友然后进 React19 讨论群，React19 相关的直播消息会第一时间在群内公布。"}),`
`,e.jsx(n.p,{children:"这里，我主要想跟大家分享的就是 map 方法的小细节。有如下代码"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`{tabs.map((item, index) => {
  return (
    <item.component
      appearder={item.appeared}
      key={item.title}
      selected={current === index}
    />
  )
})}
`})}),`
`,e.jsx(n.p,{children:"它的编译结果表现如下："}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`let t4;

if ($[7] !== current) {
  t4 = tabs.map((item_0, index_1) => (
    <item_0.component
      appearder={item_0.appeared}
      key={item_0.title}
      selected={current === index_1}
    />
  ));
  $[7] = current;
  $[8] = t4;
} else {
  t4 = $[8];
}
`})}),`
`,e.jsxs(n.p,{children:["我们会发现，此时编译缓存的是整个 map 表达式，但是由于 map 表达式又依赖于 ",e.jsx(n.code,{children:"current"}),"，因此，在我们点击切换的交互过程中，每一次的 current 都会发生变化，那么这里针对 map 表达式的缓存就没有了任何意义。"]}),`
`,e.jsxs(n.p,{children:["但是实际上，我们可以观察到，我们有 4 个 Panel，点击切换的交互发生时，实际上只有两个 Pannel 发生了变化。因此，最极限的优化是，只有这两个组件对应的函数需要重新 ",e.jsx(n.code,{children:"re-render"}),"，那么我们的代码应该怎么写呢？"]}),`
`,e.jsx(n.p,{children:"其实非常简单，那就是不用 map，将数组拆开直接手写，代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`let c1 = tabRef.current[0]
let c2 = tabRef.current[1]
let c3 = tabRef.current[2]
let c4 = tabRef.current[3]
`})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<c1.component appearder={c1.appeared} selected={current === 0}/>
<c2.component appearder={c2.appeared} selected={current === 1}/>
<c3.component appearder={c3.appeared} selected={current === 2}/>
<c4.component appearder={c4.appeared} selected={current === 3}/>
`})}),`
`,e.jsx(n.p,{children:"然后，我们就会发现，在编译结果中，不再缓存 map 表达式的结果，而是缓存每一个组件"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`let t5;

if ($[7] !== c1.component || $[8] !== c1.appeared || $[9] !== t4) {
  t5 = <c1.component appearder={c1.appeared} selected={t4} />;
  $[7] = c1.component;
  $[8] = c1.appeared;
  $[9] = t4;
  $[10] = t5;
} else {
  t5 = $[10];
}
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"这样做的收益在特定场景下的收益将会非常高。"}),`
`]}),`
`,e.jsx(n.h2,{children:"7"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"强悍的性能：细粒度记忆化更新"})}),`
`,e.jsx(n.p,{children:"经过上面的学习，想必各位道友对 React Compiler 的工作机制已经有了非常深刻的理解。此时，我们就需要分析一下，这样的记忆化更新机制，到底有多强。"}),`
`,e.jsx(n.p,{children:"首先明确一点，和 Vue 等其他框架的依赖收集不同，React Compiler 依然不做依赖收集。"}),`
`,e.jsx(n.p,{children:"React 依然通过从根节点自上而下的 diff 来找出需要更新的节点。在这个过程中，我们会通过大量的判断来决定使用缓存值。可以明确的是，Compiler 编译之后的代码，缓存命中的概率非常高，几乎所有应该缓存的元素和函数都会被缓存起来。"}),`
`,e.jsx(n.p,{children:"**因此，React Compiler 也能够在不做依赖收集的情况下，做到元素级别的超级细粒度更细。**但是，这样做的代价就是，React 需要经历大量的判断来决定是否需要更新。"}),`
`,e.jsx(n.p,{children:"所以这个时候，我们就需要明确，我所谓的大量判断的时间成本，到底有多少？它会不会导致新的性能问题？"}),`
`,e.jsx(n.p,{children:"可以看到，几乎所有的比较都是使用了全等比较，因此，我们可以写一个例子来感知一下，超大量的全等比较到底需要花费多少时间。"}),`
`,e.jsx(n.p,{children:"测试代码如下"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`var cur = performance.now()

for(let i = 0; i < 1000000; i++) {
  'xxx' == 'xx'
}
var now = performance.now()
console.log(now - cur)
`})}),`
`,e.jsxs(n.p,{children:["执行结果，比较 100 万次，只需要花费不到 ",e.jsx(n.strong,{children:"1.3 毫秒"}),"。卧槽(¬д¬。)，这太强了啊。我们很难有项目能够达到 1000,000 次的比较级别，甚至许多达到 10000 都难。那也就意味着，这里大量的比较成本，几乎可以忽略不计。"]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://files.mdnice.com/user/3925/c7215fd7-c92d-4aaa-8433-8b93be700fa7.png",alt:""})}),`
`,e.jsx(n.p,{children:"为了对比具体的效果，我们可以判断一下依赖收集的时间成本。"}),`
`,e.jsx(n.p,{children:"首先是使用数组来收集依赖。依然是 100 万次，具体执行结果如下。耗时 8 毫秒。"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://files.mdnice.com/user/3925/8c8d4d13-dc2f-4855-a709-36811a895ba4.png",alt:""})}),`
`,e.jsx(n.p,{children:"使用 Map 来收集依赖。100 万次依赖收集耗时 54 ms。"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://files.mdnice.com/user/3925/7d78bae3-15cd-48cb-aeda-46250e404ddf.png",alt:""})}),`
`,e.jsx(n.p,{children:"使用 WeakMap 来收集依赖，那就更慢了。100万次依赖收集耗时 200 毫秒。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"WeakMap 的 key 不能是一个 number 类型"}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"https://files.mdnice.com/user/3925/f140d968-30ef-42c9-961a-f8fcb8e1cbf0.png",alt:""})}),`
`,e.jsx(n.p,{children:"数据展示给大家了，具体强不强，大家自行判断。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["这里我要明确的是，这样的性能表现，在之前版本的项目中，合理运用 ",e.jsx(n.code,{children:"useCallback/memo"})," 也能做到。只是由于对 React 底层默认命中规则不理解，导致大多数人不知道如何优化到这种程度。React Compiler 简化了这个过程"]}),`
`]}),`
`,e.jsx(n.h2,{children:"8"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"React Compiler 最佳实践"})}),`
`,e.jsx(n.p,{children:"有许多骚操作，React Compiler 并不支持，例如下面这种写法。"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`{[1, 2, 3, 4, 5].map((counter) => {
  const [number, setNumber] = useState(0)
  return (
    <div key={\`hello\${counter}\`} onClick={() => setNumber(number + 1)}>
      number: {number}
    </div>
  )
})}
`})}),`
`,e.jsx(n.p,{children:"这个操作骚归骚，但是真的有大佬想要这样写。React 之前的版本依然不支持这种写法。不过好消息是，React 19 支持了..."}),`
`,e.jsx(n.p,{children:"但是 React Compiler 并不支持。对于这些不支持的语法，React Compiler 的做法就是直接跳过不编译，而直接沿用原组件写法。"}),`
`,e.jsx(n.p,{children:"因此，React Compiler 的最佳实践我总结了几条"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"1、不再使用 useCallback、useMemo、Memo 等缓存函数"}),`
`,e.jsx(n.li,{children:"2、丢掉闭包的心智负担，放心使用即可"}),`
`,e.jsx(n.li,{children:"3、引入严格模式"}),`
`,e.jsx(n.li,{children:"4、在你不熟悉的时候引入 eslint-plugin-react-compiler"}),`
`,e.jsx(n.li,{children:"5、当你熟练之后，弃用它，因为有的时候我们就是不想让它编译我们的组件"}),`
`,e.jsx(n.li,{children:"6、更多的使用 use 与 Action 来处理异步逻辑"}),`
`,e.jsx(n.li,{children:"7、尽可能少的使用 useEffect"}),`
`]}),`
`,e.jsxs(n.p,{children:["因此，一个小小的彩蛋就是，当你不希望你的组件被 Compiler 编译时，你只需要使用 ",e.jsx(n.code,{children:"var"})," 来声明状态即可。因为这不符合它的语法规范"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`var [counter, setCounter] = useState(0)
`})}),`
`,e.jsxs(n.p,{children:["而你改成 ",e.jsx(n.code,{children:"const/let"}),"，它就会又重新编译该组件。可控性与自由度非常高。"]}),`
`,e.jsx(n.h2,{children:"9"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"总结"})}),`
`,e.jsx(n.p,{children:"React Compiler 在保持了函数式编程的开发范式的同时，弥补了之前可能存在性能问题的缺陷，这无疑是进一步确认了 React 在前端框架方向都领先地位。"}),`
`,e.jsx(n.p,{children:"并且 React Compiler 上手成本低，理解起来也不难，未来肯定会快速被开发者所接受。作为开发者我们只需要耐心等待整个生态的跟进，目前从 npm 下载数据上来看，整个生态适配 React19 的积极性非常高。因此距离能成熟使用的时间肯定是不会太长。"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"顶尖前端都在关注我，就差你啦，右下角"}),`
`,e.jsx(n.p,{children:"成为 React 高手，推荐阅读 React 哲学"}),`
`]})]})}function g(c={}){const{wrapper:n}=c.components||{};return n?e.jsx(n,{...c,children:e.jsx(a,{...c})}):a(c)}const b={"App.js":m,原代码:f,"useCache.js":{code:$,hidden:!0},"Button.jsx":{code:u,hidden:!0}};function w(){const c=x.c(1);let n;return c[0]===Symbol.for("react.memo_cache_sentinel")?(n=e.jsx(h,{files:b,renderArticle:o=>e.jsx(g,{components:{code:o}})}),c[0]=n):n=c[0],n}export{w as default};
