"use strict";(self.webpackChunkmobx_cookbook=self.webpackChunkmobx_cookbook||[]).push([[217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,p(p({ref:t},s),{},{components:r})):n.createElement(f,p({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},p="\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",l={unversionedId:"installation",id:"installation",title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430",description:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/installation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"\u041a\u043b\u0430\u0441\u0441\u044b \u0438 this",permalink:"/classes"}},i={},c=[{value:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",id:"\u043d\u0430\u0447\u0430\u043b\u043e-\u0440\u0430\u0431\u043e\u0442\u044b",level:3},{value:"MobX",id:"mobx",level:3},{value:"React",id:"react",level:3},{value:"TypeScript",id:"typescript",level:3},{value:"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430 \u043b\u0438 \u044d\u0442\u0430 \u043e\u043f\u0446\u0438\u044f? \ud83d\ude80",id:"\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430-\u043b\u0438-\u044d\u0442\u0430-\u043e\u043f\u0446\u0438\u044f-",level:4}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"),(0,a.kt)("h3",{id:"\u043d\u0430\u0447\u0430\u043b\u043e-\u0440\u0430\u0431\u043e\u0442\u044b"},"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/ru/download/"},"Node.js \u0438 npm"),". \u041c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u0432\u0435\u0440\u0441\u0438\u044e LTS. \u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0435 \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u043a\u043e\u0434\u0430 \u043d\u0430 TypeScript \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044e \u0441 React, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u0430 \u0441\u0440\u0435\u0434\u0430 \u0434\u043b\u044f \u0442\u0440\u0430\u043d\u0441\u043f\u0438\u043b\u044f\u0446\u0438\u0438 \u0438 \u0441\u0431\u043e\u0440\u043a\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u0414\u043b\u044f \u044d\u0442\u0438\u0445 \u0446\u0435\u043b\u0435\u0439 \u043e\u0442\u043b\u0438\u0447\u043d\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 ",(0,a.kt)("a",{parentName:"p",href:"https://create-react-app.dev"},"Create React App"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx create-react-app my-app --template typescript\n")),(0,a.kt)("h3",{id:"mobx"},"MobX"),(0,a.kt)("p",null,"MobX \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e npm \u0442\u0430\u043a \u0436\u0435, \u043a\u0430\u043a \u0438 \u043b\u044e\u0431\u043e\u0439 \u0434\u0440\u0443\u0433\u043e\u0439 \u043f\u0430\u043a\u0435\u0442:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install mobx\n")),(0,a.kt)("h3",{id:"react"},"React"),(0,a.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u0432\u0430 \u043f\u0430\u043a\u0435\u0442\u0430 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 MobX c React: ",(0,a.kt)("inlineCode",{parentName:"p"},"mobx-react-lite")," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b, \u0442\u043e\u0433\u0434\u0430 \u043a\u0430\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"mobx-react")," \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0438 \u043a\u043b\u0430\u0441\u0441\u043e\u0432\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b."),(0,a.kt)("p",null,"\u0412 \u0441\u0432\u044f\u0437\u0438 \u0441 \u043f\u043e\u0432\u0441\u0435\u043c\u0435\u0441\u0442\u043d\u044b\u043c \u0432\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435\u043c React-\u0445\u0443\u043a\u043e\u0432, \u0438\u043c\u0435\u0435\u0442 \u0441\u043c\u044b\u0441\u043b \u0444\u043e\u0440\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432. \u041f\u043e\u044d\u0442\u043e\u043c\u0443 \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"mobx-react-lite"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install mobx-react-lite\n")),(0,a.kt)("h3",{id:"typescript"},"TypeScript"),(0,a.kt)("p",null,"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 MobX \u0441 TypeScript \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0442\u0440\u0430\u043d\u0441\u043f\u0438\u043b\u044f\u0446\u0438\u0438 \u0434\u043b\u044f \u043f\u043e\u043b\u0435\u0439 \u043a\u043b\u0430\u0441\u0441\u043e\u0432. \u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0444\u0430\u0439\u043b ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u0438 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"compilerOptions"),". \u0415\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," \u0443\u043a\u0430\u0437\u0430\u043d\u043e ",(0,a.kt)("em",{parentName:"p"},"ESNext")," \u0438\u043b\u0438 ",(0,a.kt)("em",{parentName:"p"},"ES2022")," (\u0438 \u0432\u044b\u0448\u0435), \u0442\u043e \u043d\u0438\u0447\u0435\u0433\u043e \u043c\u0435\u043d\u044f\u0442\u044c \u043d\u0435 \u043d\u0443\u0436\u043d\u043e. \u0418\u043d\u0430\u0447\u0435 \u043d\u0443\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0432 \u0441\u0435\u043a\u0446\u0438\u044e ",(0,a.kt)("inlineCode",{parentName:"p"},"compilerOptions"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"useDefineForClassFields": true\n')),(0,a.kt)("h4",{id:"\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430-\u043b\u0438-\u044d\u0442\u0430-\u043e\u043f\u0446\u0438\u044f-"},"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0430 \u043b\u0438 \u044d\u0442\u0430 \u043e\u043f\u0446\u0438\u044f? \ud83d\ude80"),(0,a.kt)("p",null,"\u041a\u043b\u0430\u0441\u0441\u043e\u0432\u044b\u0435 \u043f\u043e\u043b\u044f \u043f\u043e\u044f\u0432\u0438\u043b\u0438\u0441\u044c \u0432 TS \u0434\u043e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0432 ES. \u041e\u043f\u0446\u0438\u044f \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0435\u043a\u043e\u043d\u0441\u0438\u0441\u0442\u0435\u043d\u0442\u043d\u043e\u0441\u0442\u044c \u0441\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u044b TS. \u0415\u0441\u043b\u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u044c Typescript Playground \u0438 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0447\u0442\u043e \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f useDefineForClassFields, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0442\u044c, \u0447\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 Object.defineProperty. \u042d\u0442\u043e API \u0432 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043e\u0432 ",(0,a.kt)("a",{parentName:"p",href:"https://caniuse.com/?search=DefineProperty"},"\u043f\u043e\u044f\u0432\u0438\u043b\u043e\u0441\u044c \u0432 2010-\u043c \u0433\u043e\u0434\u0443"),", \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u043c."))}u.isMDXComponent=!0}}]);