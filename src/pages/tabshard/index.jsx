import AppText from './case/index.jsx?raw'
import apiText from './case/api.js?raw'
import SkeletonText from './case/Skeleton.jsx?raw'
import htmlText from './case/index.html?raw'
import ListText from './case/List.jsx?raw'
import InputText from './case/Input.jsx?raw'
import AccountText from './case/Account.jsx?raw'
import SearchText from './case/Search.jsx?raw'
import Tabs from './case/Tabs.jsx?raw'

import Article from './article.mdx'

import Playground from "components/Playground/index";

const files = {
  'App.js': AppText,
  'Account.jsx': AccountText,
  'Search.jsx': SearchText,
  'api.js': apiText,
  'Tabs.jsx': Tabs,
  'List.jsx': ListText,
  'Input.jsx': InputText,
  'Skeleton.jsx': SkeletonText,
  '/public/index.html': {code: htmlText, hidden: true}
}

function App() {
  return (
    <Playground files={files} renderArticle={(code) => <Article components={{code}} />} />
  )
}

export default App;
