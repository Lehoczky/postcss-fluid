import{_ as $,o as w,c as b,a as n,g as F,h as G,i as _,j as g,r as f,k as L,l as V,m as A,f as B,n as M,b as h,t as H,q as N,s as S,v as E,x as q,w as a,y as T,p as U,e as Z,d as v}from"./entry.767f606a.js";import{_ as K}from"./nuxt-link.019cac24.js";const X={},J={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor",class:"h-4 w-4"},Q=n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"},null,-1),Y=[Q];function ee(e,t){return w(),b("svg",J,Y)}const te=$(X,[["render",ee]]),oe={},se={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-6 w-6"},ne=n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},null,-1),ce=[ne];function ie(e,t){return w(),b("svg",se,ce)}const re=$(oe,[["render",ie]]);function le(e){return F()?(G(e),!0):!1}function k(e){return typeof e=="function"?e():_(e)}const ae=typeof window<"u",z=()=>{};function de(e,t){function o(...s){return new Promise((c,p)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(c).catch(p)})}return o}function ue(e,t={}){let o,s,c=z;const p=l=>{clearTimeout(l),c(),c=z};return l=>{const i=k(e),u=k(t.maxWait);return o&&p(o),i<=0||u!==void 0&&u<=0?(s&&(p(s),s=null),Promise.resolve(l())):new Promise((m,r)=>{c=t.rejectOnCancel?r:m,u&&!s&&(s=setTimeout(()=>{o&&p(o),s=null,m(l())},u)),o=setTimeout(()=>{s&&p(s),s=null,m(l())},i)})}}function pe(e,t=200,o={}){return de(ue(t,o),e)}function C(e){var t;const o=k(e);return(t=o==null?void 0:o.$el)!=null?t:o}const j=ae?window:void 0;function _e(){const e=f(!1);return V()&&A(()=>{e.value=!0}),e}function he(e){const t=_e();return g(()=>(t.value,!!e()))}var R=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,xe=(e,t)=>{var o={};for(var s in e)fe.call(e,s)&&t.indexOf(s)<0&&(o[s]=e[s]);if(e!=null&&R)for(var s of R(e))t.indexOf(s)<0&&me.call(e,s)&&(o[s]=e[s]);return o};function we(e,t,o={}){const s=o,{window:c=j}=s,p=xe(s,["window"]);let d;const l=he(()=>c&&"ResizeObserver"in c),i=()=>{d&&(d.disconnect(),d=void 0)},u=g(()=>Array.isArray(e)?e.map(x=>C(x)):[C(e)]),m=L(u,x=>{if(i(),l.value&&c){d=new ResizeObserver(t);for(const y of x)y&&d.observe(y,p)}},{immediate:!0,flush:"post",deep:!0}),r=()=>{i(),m()};return le(r),{isSupported:l,stop:r}}function ge(e,t={width:0,height:0},o={}){const{window:s=j,box:c="content-box"}=o,p=g(()=>{var i,u;return(u=(i=C(e))==null?void 0:i.namespaceURI)==null?void 0:u.includes("svg")}),d=f(t.width),l=f(t.height);return we(e,([i])=>{const u=c==="border-box"?i.borderBoxSize:c==="content-box"?i.contentBoxSize:i.devicePixelContentBoxSize;if(s&&p.value){const m=C(e);if(m){const r=s.getComputedStyle(m);d.value=Number.parseFloat(r.width),l.value=Number.parseFloat(r.height)}}else if(u){const m=Array.isArray(u)?u:[u];d.value=m.reduce((r,{inlineSize:x})=>r+x,0),l.value=m.reduce((r,{blockSize:x})=>r+x,0)}else d.value=i.contentRect.width,l.value=i.contentRect.height},o),L(()=>C(e),i=>{d.value=i?t.width:0,l.value=i?t.height:0}),{width:d,height:l}}function D(e){return g(()=>Math.round(k(e)))}function ve(e,t,o){const s=f(!0);return L(e,(p,d,l)=>{if(s.value){s.value=!1;return}t(p,d,l)},o)}const be=n("div",{class:"flex gap-2"},[n("div",{class:"h-3.5 w-3.5 rounded-full bg-red-400"}),n("div",{class:"h-3.5 w-3.5 rounded-full bg-yellow-400"}),n("div",{class:"h-3.5 w-3.5 rounded-full bg-green-400"})],-1),ye=n("span",{class:"overflow-hidden text-ellipsis whitespace-nowrap text-sm"},"awesome-site.com",-1),Ce={class:"relative grid place-items-stretch"},$e={key:0,class:"text-base-700 absolute right-0 top-px bg-white bg-opacity-60 p-1 text-xs leading-none"},P=896,Se=B({__name:"ResizableWindow",setup(e){const t=f(),{width:o,height:s}=ge(t,{width:P,height:0}),c=g(()=>o.value>=600),p=g(()=>`${P}px`),d=D(o),l=D(s),i=g(()=>`${d.value}px × ${l.value}px`),u=f(!1);function m(){u.value=!0}const r=pe(()=>u.value=!1,1500);return ve(i,()=>{m(),r()}),(x,y)=>{const O=te,W=re;return w(),b("div",{ref_key:"root",ref:t,class:"max-w-custom flex resize-x flex-col overflow-x-auto rounded-xl sm:overflow-hidden",style:E({maxWidth:_(p)})},[n("div",{class:M(["bg-base-400 flex items-center justify-between gap-4 px-6 py-4",{"sm:gap-8":_(c)}])},[be,n("div",{class:M(["bg-base-500 text-base-300 flex max-w-md flex-1 items-center justify-center gap-1 overflow-hidden rounded-md px-2 py-1.5 text-opacity-75",{"sm:px-4":_(c)}])},[h(O),ye],2),h(W,{class:M(["hidden",{"sm:block":_(c)}])},null,8,["class"])],2),n("div",Ce,[_(u)?(w(),b("div",$e,H(_(i)),1)):N("",!0),S(x.$slots,"default")])],4)}}}),ke=async(e,t={})=>{const o=f(()=>e.value);return g(()=>o.value())},Be={class:"overflow-hidden rounded-xl"},Oe=n("div",{class:"bg-base-600 border-base-400 flex gap-2 border-b px-3 py-2"},[n("div",{class:"bg-base-400 h-3 w-3 rounded-full"}),n("div",{class:"bg-base-400 h-3 w-3 rounded-full"}),n("div",{class:"bg-base-400 h-3 w-3 rounded-full"})],-1),Me=["innerHTML"],Le=B({__name:"CodeBlock",props:{code:{type:String,required:!0}},async setup(e){let t,o;const s=e,c=g(()=>s.code.trim()),p=([t,o]=q(()=>ke(c,{lang:"css"})),t=await t,o(),t);return(d,l)=>(w(),b("div",Be,[Oe,n("div",{innerHTML:_(p)},null,8,Me)]))}}),ze={class:"bg-base-700 my-8 rounded-xl bg-opacity-40 p-4 sm:my-12 sm:p-6"},Re=B({__name:"DemoSection",props:{code:{type:String,required:!0}},setup(e){return(t,o)=>{const s=Se,c=Le;return w(),b("section",ze,[n("h2",null,[S(t.$slots,"heading")]),h(s,{class:"mb-8"},{default:a(()=>[S(t.$slots,"default")]),_:3}),n("div",null,[h(c,{code:e.code},null,8,["code"])])])}}}),De={};function Pe(e,t){const o=K;return w(),T(o,{to:"https://github.com/Lehoczky/postcss-fluid","aria-label":"View source on GitHub"},{default:a(()=>[S(e.$slots,"default")]),_:3})}const I=$(De,[["render",Pe]]);const Te={},je=e=>(U("data-v-4f0ac996"),e=e(),Z(),e),Ie=je(()=>n("svg",{width:"80",height:"80",viewBox:"0 0 250 250",class:"fill-base-700 text-base-300 scale-65 absolute right-0 top-0 origin-top-right transform border-none xl:scale-90","aria-hidden":"true"},[n("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),n("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{"transform-origin":"130px 106px"},class:"octo-arm"}),n("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"})],-1));function We(e,t){const o=I;return w(),T(o,{class:"github-corner hidden md:block"},{default:a(()=>[Ie]),_:1})}const Fe=$(Te,[["render",We],["__scopeId","data-v-4f0ac996"]]),Ge={},Ve={xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",viewBox:"0 0 24 24"},Ae=n("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"},null,-1),He=[Ae];function Ne(e,t){return w(),b("svg",Ve,He)}const Ee=$(Ge,[["render",Ne]]),qe={class:"mx-auto max-w-5xl px-4 sm:px-10"},Ue=n("div",{class:"my-[fluid(3.5rem,7rem,30rem,64rem)]"},[n("h1",null,"PostCSS Fluid Demo")],-1),Ze=n("iframe",{class:"h-[23.125rem] max-w-full",src:"/postcss-fluid/example/typography"},null,-1),Ke=n("iframe",{class:"h-[18rem] max-w-full",src:"/postcss-fluid/example/growing"},null,-1),Xe=n("iframe",{class:"h-[18rem] max-w-full",src:"/postcss-fluid/example/padding"},null,-1),Je=n("iframe",{class:"h-[14rem] max-w-full",src:"/postcss-fluid/example/position"},null,-1),Qe=n("iframe",{class:"h-[18rem] max-w-full",src:"/postcss-fluid/example/shrinking"},null,-1),Ye=n("iframe",{class:"h-[14rem] max-w-full",src:"/postcss-fluid/example/border-radius"},null,-1),et=n("iframe",{class:"h-[20rem] max-w-full",src:"/postcss-fluid/example/grid-gap"},null,-1),tt=n("iframe",{class:"h-[14rem] max-w-full",src:"/postcss-fluid/example/border"},null,-1),ot={class:"bg-base-700 flex justify-center p-3 md:hidden"},ct=B({__name:"index",setup(e){const t=f(`
div {
  font-size: fluid(18px, 26px, 480px, 720px);
  line-height: fluid(26px, 38px, 480px, 720px);
  letter-spacing: fluid(0, 0.5px, 480px, 720px);
}`),o=f(`
div {
  width: fluid(40px, 200px, 480px, 720px);
  height: fluid(40px, 200px, 480px, 720px);
}`),s=f(`
div {
  padding: fluid(4px, 40px, 480px, 720px);
}`),c=f(`
div {
  position: absolute;
  top: fluid(0px, 80px, 480px, 720px);
  left: fluid(0px, 80px, 480px, 720px);
}`),p=f(`
div {
  width: fluid(200px, 40px, 480px, 720px);
  height: fluid(200px, 40px, 480px, 720px);
}`),d=f(`
div {
  border-radius: fluid(0, 50px, 480px, 720px);
}`),l=f(`
div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: fluid(0, 30px, 480px, 720px);
}`),i=f(`
div {
  border: fluid(10px, 20px, 480px, 720px) solid black;
}`);return(u,m)=>{const r=Re,x=Fe,y=Ee,O=I;return w(),b("div",null,[n("main",qe,[Ue,h(r,{code:_(t)},{heading:a(()=>[v("Fluid Typography")]),default:a(()=>[Ze]),_:1},8,["code"]),h(r,{code:_(o)},{heading:a(()=>[v("Width and Height")]),default:a(()=>[Ke]),_:1},8,["code"]),h(r,{code:_(s)},{heading:a(()=>[v("Padding")]),default:a(()=>[Xe]),_:1},8,["code"]),h(r,{code:_(c)},{heading:a(()=>[v("Position")]),default:a(()=>[Je]),_:1},8,["code"]),h(r,{code:_(p)},{heading:a(()=>[v("Larger Value on Mobile")]),default:a(()=>[Qe]),_:1},8,["code"]),h(r,{code:_(d)},{heading:a(()=>[v("Border Radius")]),default:a(()=>[Ye]),_:1},8,["code"]),h(r,{code:_(l)},{heading:a(()=>[v("Gap")]),default:a(()=>[et]),_:1},8,["code"]),h(r,{code:_(i)},{heading:a(()=>[v("Border")]),default:a(()=>[tt]),_:1},8,["code"]),h(x)]),n("div",ot,[h(O,null,{default:a(()=>[h(y)]),_:1})])])}}});export{ct as default};
