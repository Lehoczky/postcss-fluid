import{_ as y,o as _,c as m,a as i,b as a,d as v,n as S,q as w,u,s as D,v as F,x as O,y as N,z as P,m as G,t as V,r as C,g as z,A as R,B as q,C as B,D as j,E,w as p,p as Z,e as U}from"./entry.910d48ea.js";import{_ as K}from"./nuxt-link.1eaf9fd8.js";const X={},Y={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",viewBox:"0 0 32 32"},J=i("path",{fill:"currentColor",d:"M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"},null,-1),Q=i("path",{fill:"currentColor",d:"M15 8h2v11h-2zm1 14a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22z"},null,-1),ee=[J,Q];function te(e,t){return _(),m("svg",Y,ee)}const oe=y(X,[["render",te]]),ne={},se={class:"relative rounded-xl border border-rose-900 bg-rose-950 py-3 pl-3 pr-5"},ce={class:"absolute right-0 top-0 -translate-y-1/3 translate-x-1/3 rounded-full bg-rose-900 p-1"},ie=i("span",null,[v("This page is best viewed on devices that has a screen wider than "),i("span",{class:"underline underline-offset-2"},"780px"),v(". On smaller devices you might not be able to resize the examples.")],-1);function re(e,t){const o=oe;return _(),m("div",se,[i("div",ce,[a(o)]),ie])}const ae=y(ne,[["render",re]]),de=["src"],le=S({__name:"DemoFrame",props:{src:{type:String,required:!0}},setup(e){const t=e,o=w(()=>`/postcss-fluid${t.src}`);return(n,s)=>(_(),m("iframe",{class:"max-w-full",src:u(o)},null,8,de))}}),pe={},ue={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor",class:"h-4 w-4"},_e=i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"},null,-1),he=[_e];function me(e,t){return _(),m("svg",ue,he)}const xe=y(pe,[["render",me]]),fe={},ge={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-6 w-6"},ve=i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},null,-1),we=[ve];function be(e,t){return _(),m("svg",ge,we)}const Ce=y(fe,[["render",be]]),$e=i("div",{class:"flex gap-2"},[i("div",{class:"h-3.5 w-3.5 rounded-full bg-red-400"}),i("div",{class:"h-3.5 w-3.5 rounded-full bg-yellow-400"}),i("div",{class:"h-3.5 w-3.5 rounded-full bg-green-400"})],-1),ye=i("span",{class:"overflow-hidden text-ellipsis whitespace-nowrap text-sm"},"awesome-site.com",-1),Se=S({__name:"ResizableWindowHeader",props:{sm:{type:Boolean,required:!0}},setup(e){return(t,o)=>{const n=xe,s=Ce;return _(),m("div",{class:D(["bg-base-400 flex items-center justify-between gap-4 px-6 py-4",{"sm:gap-8":e.sm}])},[$e,i("div",{class:D(["bg-base-500 text-base-300 flex max-w-md flex-1 items-center justify-center gap-1 overflow-hidden rounded-md px-2 py-1.5 text-opacity-75",{"sm:px-4":e.sm}])},[a(n,{class:"shrink-0"}),ye],2),a(s,{class:D(["hidden",{"sm:block":e.sm}])},null,8,["class"])],2)}}});function ke(e){return N()?(P(e),!0):!1}function W(e){return typeof e=="function"?e():u(e)}const Be=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const T=()=>{};function We(e,t){function o(...n){return new Promise((s,c)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(s).catch(c)})}return o}function ze(e,t={}){let o,n,s=T;const c=d=>{clearTimeout(d),s(),s=T};return d=>{const h=W(e),f=W(t.maxWait);return o&&c(o),h<=0||f!==void 0&&f<=0?(n&&(c(n),n=null),Promise.resolve(d())):new Promise((g,r)=>{s=t.rejectOnCancel?r:g,f&&!n&&(n=setTimeout(()=>{o&&c(o),n=null,g(d())},f)),o=setTimeout(()=>{n&&c(n),n=null,g(d())},h)})}}function Me(e){return e||G()}function De(e,t=200,o={}){return We(ze(t,o),e)}function Re(e,t=!0,o){const n=Me(o);n?F(e,n):t?e():O(e)}function L(e){return w(()=>Math.round(W(e)))}const Te={class:"text-base-700 bg-white bg-opacity-60 p-1 text-xs leading-none"},Le=S({__name:"ResizableWindowDimensions",props:{width:{type:Number,required:!0},height:{type:Number,required:!0}},setup(e){const t=e,o=L(()=>t.width),n=L(()=>t.height),s=w(()=>`${o.value}px × ${n.value}px`);return(c,l)=>(_(),m("div",Te,V(u(s)),1))}});function k(e){var t;const o=W(e);return(t=o==null?void 0:o.$el)!=null?t:o}const H=Be?window:void 0;function Ae(){const e=C(!1);return G()&&F(()=>{e.value=!0}),e}function Fe(e){const t=Ae();return w(()=>(t.value,!!e()))}function Ge(e,t,o={}){const{window:n=H,...s}=o;let c;const l=Fe(()=>n&&"ResizeObserver"in n),d=()=>{c&&(c.disconnect(),c=void 0)},h=w(()=>Array.isArray(e)?e.map(r=>k(r)):[k(e)]),f=z(h,r=>{if(d(),l.value&&n){c=new ResizeObserver(t);for(const x of r)x&&c.observe(x,s)}},{immediate:!0,flush:"post",deep:!0}),g=()=>{d(),f()};return ke(g),{isSupported:l,stop:g}}function He(e,t={width:0,height:0},o={}){const{window:n=H,box:s="content-box"}=o,c=w(()=>{var r,x;return(x=(r=k(e))==null?void 0:r.namespaceURI)==null?void 0:x.includes("svg")}),l=C(t.width),d=C(t.height),{stop:h}=Ge(e,([r])=>{const x=s==="border-box"?r.borderBoxSize:s==="content-box"?r.contentBoxSize:r.devicePixelContentBoxSize;if(n&&c.value){const $=k(e);if($){const b=n.getComputedStyle($);l.value=Number.parseFloat(b.width),d.value=Number.parseFloat(b.height)}}else if(x){const $=Array.isArray(x)?x:[x];l.value=$.reduce((b,{inlineSize:M})=>b+M,0),d.value=$.reduce((b,{blockSize:M})=>b+M,0)}else l.value=r.contentRect.width,d.value=r.contentRect.height},o);Re(()=>{const r=k(e);r&&(l.value="offsetWidth"in r?r.offsetWidth:t.width,d.value="offsetHeight"in r?r.offsetHeight:t.height)});const f=z(()=>k(e),r=>{l.value=r?t.width:0,d.value=r?t.height:0});function g(){h(),f()}return{width:l,height:d,stop:g}}function Ie(e,t,o){const n=C(!0);return z(e,(c,l,d)=>{if(n.value){n.value=!1;return}t(c,l,d)},o)}const Oe={class:"relative grid place-items-stretch"},A=896,Ne=S({__name:"ResizableWindow",emits:["width-change"],setup(e,{emit:t}){const o=t,n=C(),{width:s,height:c}=He(n,{width:A,height:0});z(s,r=>o("width-change",r));const l=w(()=>s.value>=600),d=w(()=>`${A}px`),h=C(!1);function f(){h.value=!0}const g=De(()=>h.value=!1,1500);return Ie(s,()=>{f(),g()}),(r,x)=>{const $=Se,b=Le;return _(),m("div",{ref_key:"root",ref:n,class:"max-w-custom flex min-w-[10rem] resize-x flex-col overflow-x-auto rounded-xl sm:overflow-hidden",style:j({maxWidth:u(d)})},[a($,{sm:u(l)},null,8,["sm"]),i("div",Oe,[u(h)?(_(),R(b,{key:0,width:u(s),height:u(c),class:"absolute right-0 top-px"},null,8,["width","height"])):q("",!0),B(r.$slots,"default")])],4)}}}),Pe=async(e,t={})=>{const o=C(()=>e.value);return w(()=>o.value())},Ve={class:"overflow-hidden rounded-xl"},qe=i("div",{class:"bg-base-600 border-base-400 flex gap-2 border-b px-3 py-2"},[i("div",{class:"bg-base-400 h-3 w-3 rounded-full"}),i("div",{class:"bg-base-400 h-3 w-3 rounded-full"}),i("div",{class:"bg-base-400 h-3 w-3 rounded-full"})],-1),je=["innerHTML"],Ee=S({__name:"CodeBlock",props:{code:{type:String,required:!0}},async setup(e){let t,o;const n=e,s=w(()=>n.code.trim()),c=([t,o]=E(()=>Pe(s,{lang:"css"})),t=await t,o(),t);return(l,d)=>(_(),m("div",Ve,[qe,i("div",{innerHTML:u(c)},null,8,je)]))}}),Ze={class:"bg-base-700 my-8 rounded-xl bg-opacity-40 p-4 sm:my-12 sm:p-6"},Ue={class:"relative mb-12"},Ke=S({__name:"DemoSection",props:{code:{type:String,required:!0}},setup(e){const t=C(1/0);return(o,n)=>{const s=Ne,c=Ee;return _(),m("section",Ze,[i("h2",null,[B(o.$slots,"heading")]),i("div",Ue,[a(s,{onWidthChange:n[0]||(n[0]=l=>t.value=l)},{default:p(()=>[B(o.$slots,"default")]),_:3})]),a(c,{code:e.code},null,8,["code"])])}}}),Xe={};function Ye(e,t){const o=K;return _(),R(o,{to:"https://github.com/Lehoczky/postcss-fluid","aria-label":"View source on GitHub"},{default:p(()=>[B(e.$slots,"default")]),_:3})}const I=y(Xe,[["render",Ye]]);const Je={},Qe=e=>(Z("data-v-4f0ac996"),e=e(),U(),e),et=Qe(()=>i("svg",{width:"80",height:"80",viewBox:"0 0 250 250",class:"fill-base-700 text-base-300 scale-65 absolute right-0 top-0 origin-top-right transform border-none xl:scale-90","aria-hidden":"true"},[i("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),i("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{"transform-origin":"130px 106px"},class:"octo-arm"}),i("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"})],-1));function tt(e,t){const o=I;return _(),R(o,{class:"github-corner hidden md:block"},{default:p(()=>[et]),_:1})}const ot=y(Je,[["render",tt],["__scopeId","data-v-4f0ac996"]]),nt={},st={xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",viewBox:"0 0 24 24"},ct=i("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"},null,-1),it=[ct];function rt(e,t){return _(),m("svg",st,it)}const at=y(nt,[["render",rt]]),dt=`
div {
  font-size: fluid(16px, 28px, 480px, 720px);
  line-height: fluid(26px, 38px, 480px, 720px);
  letter-spacing: fluid(0, 0.6px, 480px, 720px);
}

/* Compiled output:
div {
  font-size: clamp(16px, -8px + 5vw, 28px);
  line-height: clamp(26px, 2px + 5vw, 38px);
  letter-spacing: clamp(0px, -1.2px + 0.25vw, 0.6px);
}
*/`,lt=`
div {
  width: fluid(50px, 200px, 480px, 720px);
  height: fluid(50px, 200px, 480px, 720px);
}

/* Compiled output:
div {
  width: clamp(50px, -250px + 62.5vw, 200px);
  height: clamp(50px, -250px + 62.5vw, 200px);
}
*/`,pt=`
div {
  padding: fluid(4px, 40px, 480px, 720px);
}

/* Compiled output:
div {
  padding: clamp(4px, -68px + 15vw, 40px);
}
*/`,ut=`
div {
  position: absolute;
  top: fluid(0px, 60px, 480px, 720px);
  left: fluid(0px, 60px, 480px, 720px);
}

/* Compiled output:
div {
  position: absolute;
  top: clamp(0px, -120px + 25vw, 60px);
  left: clamp(0px, -120px + 25vw, 60px);
}
*/`,_t=`
div {
  width: fluid(200px, 50px, 480px, 720px);
  height: fluid(200px, 50px, 480px, 720px);
}

/* Compiled output:
div {
  width: clamp(50px, 500px + -62.5vw, 200px);
  height: clamp(50px, 500px + -62.5vw, 200px);
}
*/`,ht=`
div {
  border-radius: fluid(0, 50px, 480px, 720px);
}

/* Compiled output:
div {
  border-radius: clamp(0px, -100px + 20.8333vw, 50px);
}
*/`,mt=`
div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: fluid(0, 30px, 480px, 720px);
}

/* Compiled output:
div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(0px, -60px + 12.5vw, 30px);
}
*/`,xt=`
div {
  border: fluid(10px, 22px, 480px, 720px) solid black;
}

/* Compiled output:
div {
  border: clamp(10px, -14px + 5vw, 22px) solid black;
}
*/`,ft={class:"mx-auto max-w-5xl px-4 sm:px-10"},gt={class:"mb-[fluid(2rem,5rem,30rem,64rem)] mt-[fluid(3.5rem,7rem,30rem,64rem)]"},vt=i("h1",null,"PostCSS Fluid Demo",-1),wt=i("div",{class:"mt-4 max-w-3xl text-lg"}," You can find various examples in this page. By resizing the windows below, you will be able to see the fluid effect this library creates. ",-1),bt={class:"bg-base-700 flex justify-center p-3 md:hidden"},yt=S({__name:"index",setup(e){return(t,o)=>{const n=ae,s=le,c=Ke,l=ot,d=at,h=I;return _(),m("div",null,[i("main",ft,[i("div",gt,[vt,wt,a(n,{class:"mt-3 md:hidden"})]),a(c,{code:u(dt)},{heading:p(()=>[v("Fluid Typography")]),default:p(()=>[a(s,{class:"h-[23.125rem]",src:"/example/typography"})]),_:1},8,["code"]),a(c,{code:u(lt)},{heading:p(()=>[v("Width and Height")]),default:p(()=>[a(s,{class:"h-[18rem]",src:"/example/growing"})]),_:1},8,["code"]),a(c,{code:u(pt)},{heading:p(()=>[v("Padding")]),default:p(()=>[a(s,{class:"h-[18rem]",src:"/example/padding"})]),_:1},8,["code"]),a(c,{code:u(ut)},{heading:p(()=>[v("Position")]),default:p(()=>[a(s,{class:"h-[14rem]",src:"/example/position"})]),_:1},8,["code"]),a(c,{code:u(_t)},{heading:p(()=>[v("Larger Value on Mobile")]),default:p(()=>[a(s,{class:"h-[18rem]",src:"/example/shrinking"})]),_:1},8,["code"]),a(c,{code:u(ht)},{heading:p(()=>[v("Border Radius")]),default:p(()=>[a(s,{class:"h-[14rem]",src:"/example/border-radius"})]),_:1},8,["code"]),a(c,{code:u(mt)},{heading:p(()=>[v("Gap")]),default:p(()=>[a(s,{class:"h-[20rem]",src:"/example/grid-gap"})]),_:1},8,["code"]),a(c,{code:u(xt)},{heading:p(()=>[v("Border")]),default:p(()=>[a(s,{class:"h-[14rem]",src:"/example/border"})]),_:1},8,["code"]),a(l)]),i("div",bt,[a(h,null,{default:p(()=>[a(d)]),_:1})])])}}});export{yt as default};
