(this["webpackJsonp@antv/x6-sites-demos-api.ui.dropdown.basic"]=this["webpackJsonp@antv/x6-sites-demos-api.ui.dropdown.basic"]||[]).push([[0],{121:function(f,p,o){"use strict";o.r(p);var D=o(0),e=o.n(D),X=o(14),T=o.n(X),E=o(9),g=o(10),y=o(12),x=o(11),k=o(27),U=o(2),N=o.n(U),w=e.a.createContext({}),C=function(a){Object(y.a)(r,a);var i=Object(x.a)(r);function r(){var n;return Object(E.a)(this,r),n=i.apply(this,arguments),n.onHotkey=function(){n.triggerHandler()},n.onClick=function(t){n.triggerHandler(t)},n}return Object(g.a)(r,[{key:"componentDidMount",value:function(){var t=this.props.hotkey;t&&this.props.context.registerHotkey(t,this.onHotkey)}},{key:"componentWillUnmount",value:function(){var t=this.props.hotkey;t&&this.props.context.unregisterHotkey(t,this.onHotkey)}},{key:"triggerHandler",value:function(t){!this.props.disabled&&!this.props.hidden&&(this.props.name&&this.props.context.onClick(this.props.name,t),this.props.onClick&&this.props.onClick())}},{key:"render",value:function(){return e.a.createElement("div",Object.assign({},r.getProps(this.props)),r.getContent(this.props,this.onClick))}}]),r}(e.a.PureComponent);(function(a){function i(n,t){var s,l=n.className,c=n.disabled,d=n.active,u=n.hidden,h=n.context.prefixCls,m="".concat(h,"-item");return{className:N()(m,t,(s={},Object(k.a)(s,"".concat(m,"-active"),d),Object(k.a)(s,"".concat(m,"-hidden"),u),Object(k.a)(s,"".concat(m,"-disabled"),c),s),l)}}a.getProps=i;function r(n,t,s,l){var c=n.icon,d=n.text,u=n.hotkey,h=n.children,m=n.context.prefixCls,v="".concat(m,"-item");return e.a.createElement(e.a.Fragment,null,e.a.createElement("button",{className:"".concat(v,"-button"),onClick:t},c&&e.a.isValidElement(c)&&e.a.createElement("span",{className:"".concat(v,"-icon")},c),e.a.createElement("span",{className:"".concat(v,"-text")},d||h),u&&e.a.createElement("span",{className:"".concat(v,"-hotkey")},u),s),l)}a.getContent=r})(C||(C={}));var A=function(i){return e.a.createElement(w.Consumer,null,function(r){return e.a.createElement(C,Object.assign({context:r},i))})},P=function(){return e.a.createElement(w.Consumer,null,function(i){var r=i.prefixCls;return e.a.createElement("div",{className:"".concat(r,"-item ").concat(r,"-item-divider")})})},S=function(a,i){var r={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&i.indexOf(n)<0&&(r[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(a);t<n.length;t++)i.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(a,n[t])&&(r[n[t]]=a[n[t]]);return r},I=function(i){var r=i.hotkey,n=i.children,t=S(i,["hotkey","children"]);return e.a.createElement(w.Consumer,null,function(s){var l=s.prefixCls,c=C.getProps(Object.assign({context:s},i),"".concat(l,"-submenu"));return e.a.createElement("div",Object.assign({},c),C.getContent(Object.assign({context:s},t),null,e.a.createElement("span",{className:"".concat(l,"-submenu-arrow")}),e.a.createElement("div",{className:"".concat(l,"-submenu-menu")},n)))})},b=function(a){Object(y.a)(r,a);var i=Object(x.a)(r);function r(){var n;return Object(E.a)(this,r),n=i.apply(this,arguments),n.onClick=function(t,s){n.props.stopPropagation&&s!=null&&s.stopPropagation(),n.props.onClick&&n.props.onClick(t)},n.registerHotkey=function(t,s){n.props.registerHotkey&&n.props.registerHotkey(t,s)},n.unregisterHotkey=function(t,s){n.props.unregisterHotkey&&n.props.unregisterHotkey(t,s)},n}return Object(g.a)(r,[{key:"render",value:function(){var t=this.props,s=t.prefixCls,l=t.className,c=t.children,d=t.hasIcon,u="".concat(s,"-menu"),h=w.Provider,m={prefixCls:u,onClick:this.onClick,registerHotkey:this.registerHotkey,unregisterHotkey:this.unregisterHotkey};return e.a.createElement("div",{className:N()(u,Object(k.a)({},"".concat(u,"-has-icon"),d),l)},e.a.createElement(h,{value:m},c))}}]),r}(e.a.PureComponent);(function(a){a.Item=A,a.Divider=P,a.SubMenu=I,a.defaultProps={prefixCls:"x6",stopPropagation:!1}})(b||(b={}));var H=o(69),M=function(a){Object(y.a)(r,a);var i=Object(x.a)(r);function r(){return Object(E.a)(this,r),i.apply(this,arguments)}return Object(g.a)(r,[{key:"getTransitionName",value:function(){var t=this.props,s=t.placement,l=s===void 0?"":s,c=t.transitionName;return c!==void 0?c:l.indexOf("top")>=0?"slide-down":"slide-up"}},{key:"render",value:function(){var t=this.props,s=t.children,l=t.trigger,c=t.disabled,d="".concat(this.props.prefixCls,"-dropdown"),u=e.a.Children.only(s),h=e.a.cloneElement(u,{className:N()(s.props.className,"".concat(d,"-trigger")),disabled:c}),m=c?[]:Array.isArray(l)?l:[l],v=!1;m&&m.indexOf("contextMenu")!==-1&&(v=!0);var Q=e.a.Children.only(this.props.overlay),q=e.a.createElement("div",{className:"".concat(d,"-overlay")},Q);return e.a.createElement(H.a,Object.assign({},this.props,{prefixCls:d,overlay:q,alignPoint:v,trigger:m,transitionName:this.getTransitionName()}),h)}}]),r}(e.a.Component);(function(a){a.defaultProps={trigger:"hover",prefixCls:"x6",mouseEnterDelay:.15,mouseLeaveDelay:.1,placement:"bottomLeft"}})(M||(M={}));var ee=o(76),ne=o(77),R=e.a.createElement(b,null,e.a.createElement(b.Item,{key:"1"},"1st menu item"),e.a.createElement(b.Item,{key:"2"},"2nd menu item"),e.a.createElement(b.Item,{key:"3"},"3rd menu item")),z=function(a){Object(y.a)(r,a);var i=Object(x.a)(r);function r(){return Object(E.a)(this,r),i.apply(this,arguments)}return Object(g.a)(r,[{key:"render",value:function(){return e.a.createElement("div",{style:{padding:"24px 0 120px 24px"}},e.a.createElement("div",null,e.a.createElement(M,{overlay:R},e.a.createElement("a",{href:"#anchor"},"Hover me"))),e.a.createElement("div",{style:{marginTop:24}},e.a.createElement(M,{overlay:R,trigger:["contextMenu"]},e.a.createElement("span",{style:{userSelect:"none"}},"Right Click on Me"))))}}]),r}(e.a.Component),B=o(128),F=o(124),_=o(129),J=o(130),V=o(131),O=o(126),te=o(81),W=o(57),Y=o(58),re=o(85),j=o(84),$=function(){return e.a.createElement("svg",{width:"15",height:"12",viewBox:"0 0 15 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.4545 0H10.5C10.1988 0 10 0.198754 10 0.5C10 0.801246 10.1988 1 10.5 1H13L9.5 4.5L10.5 5.5L14 2V4.5C14 4.80125 14.1988 5 14.5 5C14.8012 5 15 4.80125 15 4.5V0.545455C15 0.244208 14.7558 0 14.4545 0ZM1.73333 1H8.00001V1.86667H1.73333C1.25469 1.86667 0.866667 2.25469 0.866667 2.73333V9.32003C0.866667 9.79868 1.25469 10.1867 1.73333 10.1867H12.1333C12.612 10.1867 13 9.79868 13 9.32004V7.00003H13.8667V9.32004C13.8667 10.2773 13.0906 11.0534 12.1333 11.0534H1.73333C0.776041 11.0534 0 10.2773 0 9.32003V2.73333C0 1.77604 0.77604 1 1.73333 1Z",fill:"currentcolor"}))},G=function(a){Object(y.a)(r,a);var i=Object(x.a)(r);function r(){return Object(E.a)(this,r),i.apply(this,arguments)}return Object(g.a)(r,[{key:"render",value:function(){return e.a.createElement("div",{className:"demo-toolbar"},e.a.createElement(O.a,{placement:"bottomLeft",arrowPointAtCenter:!0,title:"\u91CD\u65B0\u52A0\u8F7D",mouseEnterDelay:.5},e.a.createElement(B.a,{onClick:function(){window.location.reload()}})),window.frameElement&&e.a.createElement(O.a,{placement:"bottomLeft",arrowPointAtCenter:!0,title:"\u5728\u65B0\u7A97\u53E3\u6253\u5F00",mouseEnterDelay:.5},e.a.createElement("a",{href:"".concat(window.location.href),rel:"noopener noreferrer",target:"_blank"},e.a.createElement(F.a,{component:$}))),e.a.createElement(O.a,{placement:"bottomLeft",arrowPointAtCenter:!0,title:"\u5728 Github \u4E2D\u67E5\u770B",mouseEnterDelay:.5},e.a.createElement("a",{href:"".concat(j.host),rel:"noopener noreferrer",target:"_blank"},e.a.createElement(_.a,null))),e.a.createElement(O.a,{arrowPointAtCenter:!0,placement:"bottomLeft",title:"\u5728 CodeSandbox \u4E2D\u6253\u5F00",mouseEnterDelay:.5},e.a.createElement("form",{action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank"},e.a.createElement("input",{type:"hidden",name:"parameters",value:Object(Y.getParameters)(j.getCodeSandboxParams())}),e.a.createElement("button",{type:"submit"},e.a.createElement(J.a,null)))),e.a.createElement(O.a,{placement:"bottomLeft",arrowPointAtCenter:!0,title:"\u5728 StackBlitz \u4E2D\u6253\u5F00",mouseEnterDelay:.5},e.a.createElement(V.a,{onClick:function(){W.a.openProject(j.getStackblitzPrefillConfig(),{openFile:"src/app.tsx"})}})))}}]),r}(e.a.Component),Z=o(127),oe=o(98),L=function(a){Object(y.a)(r,a);var i=Object(x.a)(r);function r(n){var t;return Object(E.a)(this,r),t=i.call(this,n),t.refContainer=function(s){t.container=s},r.restoreIframeSize(),t}return Object(g.a)(r,[{key:"componentDidMount",value:function(){var t=this;if(this.updateIframeSize(),window.ResizeObserver){var s=new window.ResizeObserver(function(){t.updateIframeSize()});s.observe(this.container)}else window.addEventListener("resize",function(){return t.updateIframeSize()});setTimeout(function(){var l=document.getElementById("loading");l&&l.parentNode&&l.parentNode.removeChild(l)},1e3)}},{key:"updateIframeSize",value:function(){var t=window.frameElement;if(t){var s=this.container.scrollHeight||this.container.clientHeight;t.style.width="100%",t.style.height="".concat(s+16,"px"),t.style.border="0",t.style.overflow="hidden",r.saveIframeSize()}}},{key:"render",value:function(){return e.a.createElement("div",{className:"demo-wrap",ref:this.refContainer},e.a.createElement(G,null),this.props.children)}}]),r}(e.a.Component);(function(a){var i=window.location.pathname,r="x6-iframe-size";function n(){var l=localStorage.getItem(r),c;if(l)try{c=JSON.parse(l)}catch(d){}else c={};return c}function t(){var l=window.frameElement;if(l){var c=l.style,d={width:c.width,height:c.height},u=n();u[i]=d,localStorage.setItem(r,JSON.stringify(u))}}a.saveIframeSize=t;function s(){var l=window.frameElement;if(l){var c=n(),d=c[i];d&&(l.style.width=d.width||"100%",l.style.height=d.height||"auto")}}a.restoreIframeSize=s})(L||(L={}));var ae=o(99),K=function(i){var r=i.children;return e.a.createElement(Z.a.ErrorBoundary,null,e.a.createElement(L,null,r))};T.a.render(e.a.createElement(K,null,e.a.createElement(z,null)),document.getElementById("root"))},71:function(f,p,o){f.exports=o(121)},76:function(f,p,o){},77:function(f,p,o){},84:function(f,p,o){"use strict";o.r(p),o.d(p,"host",function(){return D}),o.d(p,"getCodeSandboxParams",function(){return e}),o.d(p,"getStackblitzPrefillConfig",function(){return X});const D="https://github.com/antvis/X6/tree/master//home/runner/work/X6/X6/sites/x6-sites-demos/packages/api/ui/dropdown/basic";function e(){return{files:{"package.json":{isBinary:!1,content:'{"dependencies":{"@antv/x6-react-components":"latest","antd":"^4.4.2","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"^3.4.1"},"devDependencies":{"@types/react":"^16.9.19","@types/react-dom":"^16.9.5","typescript":"^4.1.2"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}'},".gitignore":{content:`# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
react-app-env.d.ts
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
`,isBinary:!1},"public/index.html":{content:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title></title>
  </head>
  <body>
    <noscript> You need to enable JavaScript to run this app. </noscript>
    <div id="root"></div>
  </body>
</html>
`,isBinary:!1},"src/app.tsx":{content:`import React from 'react'
import { Menu, Dropdown } from '@antv/x6-react-components'
import '@antv/x6-react-components/es/menu/style/index.css'
import '@antv/x6-react-components/es/dropdown/style/index.css'

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
)

export default class Example extends React.Component {
  render() {
    return (
      <div style={{ padding: '24px 0 120px 24px' }}>
        <div>
          <Dropdown overlay={menu}>
            <a href="#anchor">Hover me</a>
          </Dropdown>
        </div>
        <div style={{ marginTop: 24 }}>
          <Dropdown overlay={menu} trigger={['contextMenu']}>
            <span style={{ userSelect: 'none' }}>Right Click on Me</span>
          </Dropdown>
        </div>
      </div>
    )
  }
}
`,isBinary:!1},"src/index.css":{content:`body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`,isBinary:!1},"src/index.tsx":{content:`import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App />, document.getElementById('root'))`,isBinary:!1},"tsconfig.json":{content:`{
  "compilerOptions": {
    "allowJs": true,
    "strict": true,
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "node",
    "sourceMap": true,
    "declaration": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "noImplicitAny": true,
    "noEmitOnError": true,
    "noUnusedLocals": true,
    "strictNullChecks": true,
    "resolveJsonModule": true,
    "experimentalDecorators": true,
    "jsx": "react",
    "target": "es5",
    "lib": [
      "dom",
      "es2015"
    ]
  },
  "include": [
    "src"
  ]
}
`,isBinary:!1}}}}function X(){return{title:"api/ui/dropdown/basic",description:"",template:"create-react-app",dependencies:{"@antv/x6-react-components":"latest",antd:"^4.4.2",react:"^16.13.1","react-dom":"^16.13.1","react-scripts":"^3.4.1"},files:{"package.json":'{"dependencies":{"@antv/x6-react-components":"latest","antd":"^4.4.2","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"^3.4.1"},"devDependencies":{"@types/react":"^16.9.19","@types/react-dom":"^16.9.5","typescript":"^4.1.2"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}',".gitignore":`# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
react-app-env.d.ts
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
`,"public/index.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title></title>
  </head>
  <body>
    <noscript> You need to enable JavaScript to run this app. </noscript>
    <div id="root"></div>
  </body>
</html>
`,"src/app.tsx":`import React from 'react'
import { Menu, Dropdown } from '@antv/x6-react-components'
import '@antv/x6-react-components/es/menu/style/index.css'
import '@antv/x6-react-components/es/dropdown/style/index.css'

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
)

export default class Example extends React.Component {
  render() {
    return (
      <div style={{ padding: '24px 0 120px 24px' }}>
        <div>
          <Dropdown overlay={menu}>
            <a href="#anchor">Hover me</a>
          </Dropdown>
        </div>
        <div style={{ marginTop: 24 }}>
          <Dropdown overlay={menu} trigger={['contextMenu']}>
            <span style={{ userSelect: 'none' }}>Right Click on Me</span>
          </Dropdown>
        </div>
      </div>
    )
  }
}
`,"src/index.css":`body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`,"src/index.tsx":`import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App />, document.getElementById('root'))`,"tsconfig.json":`{
  "compilerOptions": {
    "allowJs": true,
    "strict": true,
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "node",
    "sourceMap": true,
    "declaration": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "noImplicitAny": true,
    "noEmitOnError": true,
    "noUnusedLocals": true,
    "strictNullChecks": true,
    "resolveJsonModule": true,
    "experimentalDecorators": true,
    "jsx": "react",
    "target": "es5",
    "lib": [
      "dom",
      "es2015"
    ]
  },
  "include": [
    "src"
  ]
}
`}}}},85:function(f,p,o){},98:function(f,p,o){}},[[71,1,2]]]);
