import {SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview} from '@codesandbox/sandpack-react'
import Gisucs from '@giscus/react'
import EnterCode from './code'
import githubLight from 'utils/githubLight'
import Preview from "components/Preview.jsx";

import {Light as SyntaxHighlighter} from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import atomOneLight from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light'

import html from './index.html?raw'
import maincss from './styles.css?raw'
import entry from './entry.js?raw'

import {democode} from "components/Playground/activecode.js";

import './index.css'

SyntaxHighlighter.registerLanguage('javascript', js)

function code({className, ...properties}) {
  const match = /language-(\w+)/.exec(className || '')
  return match
    ? <SyntaxHighlighter language={match[1]} PreTag="div" {...properties} style={atomOneLight} />
    : <code className={className} {...properties} />
}

function App(props) {
  const {renderArticle, files, hidePreview} = props

  const z = localStorage.getItem('active_code')
  const auth = z === democode

  return (
    <div>
      <div className='mt-5 md:flex'>
        <div className='md:w-[40%] md:pr-4 keep'>
          {z ? renderArticle(code) : <EnterCode />}

          <div className='border-b mt-20 mb-8 text-lg font-bold pb-3'></div>

          <Gisucs
            repo='yangbo5207/react19feature'
            repoId='R_kgDOMGiHOw'
            category='General'
            categoryId='DIC_kwDOMGiHO84Cf8dR'
            maping='pathname'
            term='欢迎道友'
            strict='0'
            reactionsEnabled='1'
            emitMetadata="1"
            inputPosition="top"
            lang="zh-CN"
            crossorigin="anonymous"
            async
          />
        </div>
        <div className='md:w-[60%] sticky top-[8rem] h-[calc(100vh_-_8rem-35px)] overflow-y-auto'>
          <SandpackProvider
            template="react"
            theme={githubLight}
            options={{
              externalResources: [
                "https://cdn.tailwindcss.com"
              ],
              editorHeight: 'auto'
            }}
            customSetup={{
              // entry: '/index.js',
              dependencies: {
                "react": "19.0.0-rc-dfd30974ab-20240613",
                "react-dom": "19.0.0-rc-dfd30974ab-20240613",
                'tailwind-merge': 'latest',
                'clsx': 'latest',
              },
            }}
            files={{
              ...files,
              '/public/index.html': {code: html, hidden: true},
              'index.js': {code: entry, hidden: true},
              'styles.css': {code: maincss, hidden: true}
            }}
          >
            <SandpackLayout>
              <SandpackCodeEditor/>
              {!hidePreview && (
                <Preview>
                  <SandpackPreview/>
                </Preview>
              )}
            </SandpackLayout>
          </SandpackProvider>
        </div>

      </div>
    </div>
  )
}

export default App;
