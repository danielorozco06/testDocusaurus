/*! For license information please see b3978be5.6f302899.js.LICENSE.txt */
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[1334],{6477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var c=n(4848),a=n(8453),o=n(3852);const r={id:"architecture",title:"Architecture"},i=void 0,s={id:"architecture",title:"Architecture",description:"If you are interested in learning more about how Jest works, understand its architecture, and how Jest is split up into individual reusable packages, check out this video:",source:"@site/../docs/Architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/docs/next/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/jestjs/jest/edit/main/website/../docs/Architecture.md",tags:[],version:"current",lastUpdatedBy:"daorozc",lastUpdatedAt:1709673938,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/next/troubleshooting"},next:{title:"Testing React Apps",permalink:"/docs/next/tutorial-react"}},l={},u=[];function d(e){const t={a:"a",p:"p",...(0,a.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:"If you are interested in learning more about how Jest works, understand its architecture, and how Jest is split up into individual reusable packages, check out this video:"}),"\n",(0,c.jsx)(o.A,{id:"3YDiloj8_d0"}),"\n",(0,c.jsx)(t.p,{children:"If you'd like to learn how to build a testing framework like Jest from scratch, check out this video:"}),"\n",(0,c.jsx)(o.A,{id:"B8FbUK0WpVU"}),"\n",(0,c.jsxs)(t.p,{children:["There is also a ",(0,c.jsx)(t.a,{href:"https://cpojer.net/posts/building-a-javascript-testing-framework",children:"written guide you can follow"}),". It teaches the fundamental concepts of Jest and explains how various parts of Jest can be used to compose a custom testing framework."]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},3852:(e,t,n)=>{n.d(t,{A:()=>o});var c=n(6540),a=function(){return a=Object.assign||function(e){for(var t,n=1,c=arguments.length;n<c;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)};var o=c.forwardRef((function(e,t){var n=c.useState(!1),o=n[0],r=n[1],i=c.useState(!1),s=i[0],l=i[1],u=encodeURIComponent(e.id),d="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,p=e.title,m=e.poster||"hqdefault",h="&".concat(e.params)||0,f=e.muted?"&mute=1":"",w=e.announce||"Watch",g=e.webp?"webp":"jpg",b=e.webp?"vi_webp":"vi",k=e.thumbnail||(e.playlist?"https://i.ytimg.com/".concat(b,"/").concat(d,"/").concat(m,".").concat(g):"https://i.ytimg.com/".concat(b,"/").concat(u,"/").concat(m,".").concat(g)),y=e.noCookie;y=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var v=e.playlist?"".concat(y,"/embed/videoseries?autoplay=1").concat(f,"&list=").concat(u).concat(h):"".concat(y,"/embed/").concat(u,"?autoplay=1&state=1").concat(f).concat(h),j=e.activatedClass||"lyt-activated",x=e.adNetwork||!1,C=e.aspectHeight||9,E=e.aspectWidth||16,A=e.iframeClass||"",I=e.playerClass||"lty-playbtn",U=e.wrapperClass||"yt-lite",F=e.onIframeAdded||function(){},J=e.rel?"prefetch":"preload",R=e.containerElement||"article";return c.useEffect((function(){s&&F()}),[s]),c.createElement(c.Fragment,null,c.createElement("link",{rel:J,href:k,as:"image"}),c.createElement(c.Fragment,null,o&&c.createElement(c.Fragment,null,c.createElement("link",{rel:"preconnect",href:y}),c.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),x&&c.createElement(c.Fragment,null,c.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),c.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),c.createElement(R,{onPointerOver:function(){o||r(!0)},onClick:function(){s||l(!0)},className:"".concat(U," ").concat(s?j:""),"data-title":p,style:a({backgroundImage:"url(".concat(k,")")},{"--aspect-ratio":"".concat(C/E*100,"%")})},c.createElement("button",{type:"button",className:I,"aria-label":"".concat(w," ").concat(p)}),s&&c.createElement("iframe",{ref:t,className:A,title:p,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:v})))}))},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var c=n(6540);const a={},o=c.createContext(a);function r(e){const t=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),c.createElement(o.Provider,{value:t},e.children)}}}]);