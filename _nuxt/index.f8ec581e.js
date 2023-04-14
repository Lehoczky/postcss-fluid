import{e as I,o as g,b as C,h as i,u,i as K,j as X,k as Z,l as J,m as Y,q as y,r as m,w as E,a as P,s as O,t as x,v as ee,x as te,y as k,z as ne,A as oe,B as f,c as F,p as se,f as ie,C as b}from"./entry.c45a520f.js";import{_ as re}from"./nuxt-link.49e69e57.js";const ce={},ae={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor",class:"h-4 w-4"},de=i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"},null,-1),le=[de];function ue(e,n){return g(),C("svg",ae,le)}const pe=I(ce,[["render",ue]]),_e={},he={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-6 w-6"},fe=i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},null,-1),xe=[fe];function me(e,n){return g(),C("svg",he,xe)}const we=I(_e,[["render",me]]);var D;const V=typeof window<"u",R=()=>{};V&&((D=window==null?void 0:window.navigator)!=null&&D.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function T(e){return typeof e=="function"?e():u(e)}function ge(e,n){function t(...o){return new Promise((_,h)=>{Promise.resolve(e(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(_).catch(h)})}return t}function ve(e,n={}){let t,o,_=R;const h=r=>{clearTimeout(r),_(),_=R};return r=>{const l=T(e),d=T(n.maxWait);return t&&h(t),l<=0||d!==void 0&&d<=0?(o&&(h(o),o=null),Promise.resolve(r())):new Promise((a,c)=>{_=n.rejectOnCancel?c:a,d&&!o&&(o=setTimeout(()=>{t&&h(t),o=null,a(r())},d)),t=setTimeout(()=>{o&&h(o),o=null,a(r())},l)})}}function be(e){return e}function ye(e){return K()?(X(e),!0):!1}function Ce(e,n=200,t={}){return ge(ve(n,t),e)}function Oe(e,n=!0){Z()?J(e):n?e():Y(e)}function z(e){return y(()=>Math.round(T(e)))}function B(e){var n;const t=T(e);return(n=t==null?void 0:t.$el)!=null?n:t}const q=V?window:void 0;function Ie(e,n=!1){const t=m(),o=()=>t.value=!!e();return o(),Oe(o,n),t}const G=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L="__vueuse_ssr_handlers__";G[L]=G[L]||{};var M=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,Be=(e,n)=>{var t={};for(var o in e)Se.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&M)for(var o of M(e))n.indexOf(o)<0&&$e.call(e,o)&&(t[o]=e[o]);return t};function ke(e,n,t={}){const o=t,{window:_=q}=o,h=Be(o,["window"]);let p;const r=Ie(()=>_&&"ResizeObserver"in _),l=()=>{p&&(p.disconnect(),p=void 0)},d=E(()=>B(e),c=>{l(),r.value&&_&&c&&(p=new ResizeObserver(n),p.observe(c,h))},{immediate:!0,flush:"post"}),a=()=>{l(),d()};return ye(a),{isSupported:r,stop:a}}function Te(e,n={width:0,height:0},t={}){const{window:o=q,box:_="content-box"}=t,h=y(()=>{var l,d;return(d=(l=B(e))==null?void 0:l.namespaceURI)==null?void 0:d.includes("svg")}),p=m(n.width),r=m(n.height);return ke(e,([l])=>{const d=_==="border-box"?l.borderBoxSize:_==="content-box"?l.contentBoxSize:l.devicePixelContentBoxSize;if(o&&h.value){const a=B(e);if(a){const c=o.getComputedStyle(a);p.value=parseFloat(c.width),r.value=parseFloat(c.height)}}else if(d){const a=Array.isArray(d)?d:[d];p.value=a.reduce((c,{inlineSize:s})=>c+s,0),r.value=a.reduce((c,{blockSize:s})=>c+s,0)}else p.value=l.contentRect.width,r.value=l.contentRect.height},t),E(()=>B(e),l=>{p.value=l?n.width:0,r.value=l?n.height:0}),{width:p,height:r}}var A;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(A||(A={}));var Pe=Object.defineProperty,j=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,H=(e,n,t)=>n in e?Pe(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Ne=(e,n)=>{for(var t in n||(n={}))We.call(n,t)&&H(e,t,n[t]);if(j)for(var t of j(n))Ee.call(n,t)&&H(e,t,n[t]);return e};const De={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};Ne({linear:be},De);function Re(e,n,t){const o=m(!0);return E(e,(h,p,r)=>{if(o.value){o.value=!1;return}n(h,p,r)},t)}const ze=i("span",{class:"text-sm"},"awesome-site.com",-1),Ge={class:"relative grid place-items-stretch"},Le={key:0,class:"text-base-700 absolute right-0 top-px bg-white bg-opacity-60 p-1 text-xs leading-none"},Me=P({__name:"ResizableWindow",props:{width:{type:Number,required:!0},maxWidth:{type:Number,required:!0},height:{type:Number,required:!0}},setup(e){const n=e,t=y(()=>n.width>=600),o=y(()=>`${n.maxWidth}px`),_=z(()=>n.width),h=z(()=>n.height),p=y(()=>`${_.value}px × ${h.value}px`),r=m(!1);function l(){r.value=!0}const d=Ce(()=>r.value=!1,1500);return Re(p,()=>{l(),d()}),(a,c)=>{const s=pe,S=we;return g(),C("div",{ref:"root",class:"max-w-custom flex min-w-[18.75rem] resize-x flex-col overflow-hidden rounded-xl",style:ne({maxWidth:u(o)})},[i("div",{class:O(["bg-base-400 flex items-center justify-between gap-4 px-6 py-4",{"sm:gap-8":u(t)}])},[i("div",{class:O(["flex gap-1.5",{"sm:gap-2":u(t)}])},[i("div",{class:O(["h-3 w-3 rounded-full bg-red-400",{"sm:h-3.5 sm:w-3.5":u(t)}])},null,2),i("div",{class:O(["h-3 w-3 rounded-full bg-yellow-400",{"sm:h-3.5 sm:w-3.5":u(t)}])},null,2),i("div",{class:O(["h-3 w-3 rounded-full bg-green-400",{"sm:h-3.5 sm:w-3.5":u(t)}])},null,2)],2),i("div",{class:O(["bg-base-500 text-base-300 flex max-w-md flex-1 items-center justify-center gap-1 rounded-md px-2 py-1.5 text-opacity-75",{"sm:px-4":u(t)}])},[x(s),ze],2),x(S,{class:O(["hidden",{"sm:block":u(t)}])},null,8,["class"])],2),i("div",Ge,[u(r)?(g(),C("div",Le,ee(u(p)),1)):te("",!0),k(a.$slots,"default")])],4)}}}),Ae=async(e,n={})=>{const t=m(()=>e.value);return y(()=>t.value())},je={class:"overflow-hidden rounded-xl"},He=i("div",{class:"bg-base-600 border-base-400 flex gap-2 border-b px-3 py-2"},[i("div",{class:"bg-base-400 h-3 w-3 rounded-full"}),i("div",{class:"bg-base-400 h-3 w-3 rounded-full"}),i("div",{class:"bg-base-400 h-3 w-3 rounded-full"})],-1),Fe=["innerHTML"],Ve=P({__name:"CodeBlock",props:{code:{type:String,required:!0},codeWindowWidth:{type:Number,required:!0}},async setup(e){let n,t;const o=e,_=y(()=>o.code.trim()),h=([n,t]=oe(()=>Ae(_,{lang:"css"})),n=await n,t(),n),p=y(()=>{const d="clamp(",a='<span class="active">',c="</span>";let s=h.value;const W=l(s,d).map(w=>w+d.length).map((w,v)=>w+v*(a.length+c.length));if(o.codeWindowWidth<=480)for(const w of W){s=r(s,w,a);const v=s.indexOf(",",w);s=r(s,v,c)}else if(o.codeWindowWidth<720)for(const w of W){const v=s.indexOf(",",w),$=s.indexOf(",",v+1)+a.length;s=r(s,v+2,a),s=r(s,$,c)}else for(const w of W){const v=s.indexOf(",",w),$=s.indexOf(",",v+1),U=s.indexOf(")",$+1)+a.length;s=r(s,$+2,a),s=r(s,U,c)}return s});function r(d,a,c){return d.slice(0,a)+c+d.slice(a)}function l(d,a){const c=[];let s=-1;for(;(s=d.indexOf(a,s+1))!=-1;)c.push(s);return c}return(d,a)=>(g(),C("div",je,[He,i("div",{innerHTML:u(p)},null,8,Fe)]))}}),qe={class:"bg-base-700 my-8 rounded-xl bg-opacity-40 p-6 sm:my-12"},Qe=P({__name:"DemoSection",props:{code:{type:String,required:!0}},setup(e){const t=m(),{width:o,height:_}=Te(t,{width:896,height:0});return(h,p)=>{const r=Me,l=Ve;return g(),C("section",qe,[i("h2",null,[k(h.$slots,"heading")]),x(r,{ref_key:"resizableWindow",ref:t,class:"mb-8",width:u(o),"max-width":896,height:u(_)},{default:f(()=>[k(h.$slots,"default")]),_:3},8,["width","height"]),i("div",null,[x(l,{code:e.code,"code-window-width":u(o)},null,8,["code","code-window-width"])])])}}}),Ue={};function Ke(e,n){const t=re;return g(),F(t,{to:"https://github.com/Lehoczky/postcss-fluid","aria-label":"View source on GitHub"},{default:f(()=>[k(e.$slots,"default")]),_:3})}const Q=I(Ue,[["render",Ke]]);const Xe={},Ze=e=>(se("data-v-6b56c93d"),e=e(),ie(),e),Je=Ze(()=>i("svg",{width:"80",height:"80",viewBox:"0 0 250 250",class:"fill-base-700 text-base-300 scale-65 absolute right-0 top-0 origin-top-right transform border-none xl:scale-90","aria-hidden":"true"},[i("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),i("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{"transform-origin":"130px 106px"},class:"octo-arm"}),i("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"})],-1));function Ye(e,n){const t=Q;return g(),F(t,{class:"github-corner hidden md:block"},{default:f(()=>[Je]),_:1})}const et=I(Xe,[["render",Ye],["__scopeId","data-v-6b56c93d"]]),tt={},nt={xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",viewBox:"0 0 24 24"},ot=i("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"},null,-1),st=[ot];function it(e,n){return g(),C("svg",nt,st)}const rt=I(tt,[["render",it]]),ct={class:"mx-auto max-w-5xl px-4 sm:px-10"},at=i("iframe",{class:"h-[23.125rem]",src:"/postcss-fluid/example/typography"},null,-1),dt=i("iframe",{class:"h-[18rem]",src:"/postcss-fluid/example/growing"},null,-1),lt=i("iframe",{class:"h-[18rem]",src:"/postcss-fluid/example/padding"},null,-1),ut=i("iframe",{class:"h-[14rem]",src:"/postcss-fluid/example/position"},null,-1),pt=i("iframe",{class:"h-[18rem]",src:"/postcss-fluid/example/shrinking"},null,-1),_t=i("iframe",{class:"h-[14rem]",src:"/postcss-fluid/example/border-radius"},null,-1),ht=i("iframe",{class:"h-[20rem]",src:"/postcss-fluid/example/grid-gap"},null,-1),ft=i("iframe",{class:"h-[14rem]",src:"/postcss-fluid/example/border"},null,-1),xt={class:"bg-base-700 flex justify-center p-3 md:hidden"},gt=P({__name:"index",setup(e){const n=m(`
div {
  font-size: fluid(18px, 26px, 480px, 720px);
  line-height: fluid(26px, 38px, 480px, 720px);
  letter-spacing: fluid(0, 0.5px, 480px, 720px);
}

/* Generated:

div {
  font-size: clamp(18px, 2px + 3.3333vw, 26px);
  line-height: clamp(26px, 2px + 5vw, 38px);
  letter-spacing: clamp(0px, -1px + 0.2083vw, 0.5px);
}
*/`),t=m(`
div {
  width: fluid(40px, 200px, 480px, 720px);
  height: fluid(40px, 200px, 480px, 720px);
}

/* Generated:

div {
  width: clamp(40px, -280px + 66.6667vw, 200px);
  height: clamp(40px, -280px + 66.6667vw, 200px);
}
*/`),o=m(`
div {
  padding: fluid(4px, 40px, 480px, 720px);
}`),_=m(`
div {
  position: absolute;
  top: fluid(0px, 80px, 480px, 720px);
  left: fluid(0px, 80px, 480px, 720px);
}

/* Generated:

div {
  position: absolute;
  top: clamp(0px, -160px + 33.3333vw, 80px);
  left: clamp(0px, -160px + 33.3333vw, 80px);
}
*/`),h=m(`
div {
  width: fluid(200px, 40px, 480px, 720px);
  height: fluid(200px, 40px, 480px, 720px);
}

/* Generated:

div {
  width: clamp(40px, 520px + -66.6667vw, 200px);
  height: clamp(40px, 520px + -66.6667vw, 200px);
}
*/`),p=m(`
div {
  border-radius: fluid(0, 50px, 480px, 720px);
}

/* Generated:

div {
  border-radius: clamp(0px, -100px + 20.8333vw, 50px);
}
*/`),r=m(`
div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: fluid(0, 30px, 480px, 720px);
}

/* Generated:

div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(0px, -60px + 12.5vw, 30px);
}
*/`),l=m(`
div {
  border: fluid(10px, 20px, 480px, 720px) solid black;
}

/* Generated:

div {
  border: clamp(10px, -10px + 4.1667vw, 20px) solid black;
}
*/`);return(d,a)=>{const c=Qe,s=et,S=rt,N=Q;return g(),C("div",null,[i("main",ct,[x(c,{code:u(n)},{heading:f(()=>[b("Fluid Typography")]),default:f(()=>[at]),_:1},8,["code"]),x(c,{code:u(t)},{heading:f(()=>[b("Width and Height")]),default:f(()=>[dt]),_:1},8,["code"]),x(c,{code:u(o)},{heading:f(()=>[b("Padding")]),default:f(()=>[lt]),_:1},8,["code"]),x(c,{code:u(_)},{heading:f(()=>[b("Position")]),default:f(()=>[ut]),_:1},8,["code"]),x(c,{code:u(h)},{heading:f(()=>[b("Larger Value on Mobile")]),default:f(()=>[pt]),_:1},8,["code"]),x(c,{code:u(p)},{heading:f(()=>[b("Border Radius")]),default:f(()=>[_t]),_:1},8,["code"]),x(c,{code:u(r)},{heading:f(()=>[b("Gap")]),default:f(()=>[ht]),_:1},8,["code"]),x(c,{code:u(l)},{heading:f(()=>[b("Border")]),default:f(()=>[ft]),_:1},8,["code"]),x(s)]),i("div",xt,[x(N,null,{default:f(()=>[x(S)]),_:1})])])}}});export{gt as default};
