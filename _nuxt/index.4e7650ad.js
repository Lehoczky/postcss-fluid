import{_ as $,o as m,c as f,a as i,b as r,d as v,n as C,q as w,u,s as z,v as F,x as I,t as G,r as b,g as k,m as H,y as N,z as W,A as O,B as S,C as P,D as V,w as l,p as q,e as j}from"./entry.37fe15bd.js";import{_ as Z}from"./nuxt-link.f0fbdb77.js";const E={},U={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",viewBox:"0 0 32 32"},K=i("path",{fill:"currentColor",d:"M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12Z"},null,-1),X=i("path",{fill:"currentColor",d:"M15 8h2v11h-2zm1 14a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 22z"},null,-1),Y=[K,X];function J(e,t){return m(),f("svg",U,Y)}const Q=$(E,[["render",J]]),ee={},te={class:"relative rounded-xl border border-rose-900 bg-rose-950 py-3 pl-3 pr-5"},oe={class:"absolute right-0 top-0 -translate-y-1/3 translate-x-1/3 rounded-full bg-rose-900 p-1"},ne=i("span",null,[v("This page is best viewed on devices that has a screen wider than "),i("span",{class:"underline underline-offset-2"},"780px"),v(". On smaller devices you might not be able to resize the examples.")],-1);function se(e,t){const o=Q;return m(),f("div",te,[i("div",oe,[r(o)]),ne])}const ce=$(ee,[["render",se]]),ie=["src"],re=C({__name:"DemoFrame",props:{src:{type:String,required:!0}},setup(e){const t=e,o=w(()=>`/postcss-fluid${t.src}`);return(n,c)=>(m(),f("iframe",{class:"max-w-full",src:u(o)},null,8,ie))}}),ae={},de={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor",class:"h-4 w-4"},le=i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"},null,-1),pe=[le];function ue(e,t){return m(),f("svg",de,pe)}const _e=$(ae,[["render",ue]]),he={},me={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-6 w-6"},xe=i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},null,-1),fe=[xe];function ve(e,t){return m(),f("svg",me,fe)}const we=$(he,[["render",ve]]),ge=i("div",{class:"flex gap-2"},[i("div",{class:"h-3.5 w-3.5 rounded-full bg-red-400"}),i("div",{class:"h-3.5 w-3.5 rounded-full bg-yellow-400"}),i("div",{class:"h-3.5 w-3.5 rounded-full bg-green-400"})],-1),be=i("span",{class:"overflow-hidden text-ellipsis whitespace-nowrap text-sm"},"awesome-site.com",-1),$e=C({__name:"ResizableWindowHeader",props:{sm:{type:Boolean,required:!0}},setup(e){return(t,o)=>{const n=_e,c=we;return m(),f("div",{class:z(["bg-base-400 flex items-center justify-between gap-4 px-6 py-4",{"sm:gap-8":e.sm}])},[ge,i("div",{class:z(["bg-base-500 text-base-300 flex max-w-md flex-1 items-center justify-center gap-1 overflow-hidden rounded-md px-2 py-1.5 text-opacity-75",{"sm:px-4":e.sm}])},[r(n,{class:"shrink-0"}),be],2),r(c,{class:z(["hidden",{"sm:block":e.sm}])},null,8,["class"])],2)}}});function Ce(e){return F()?(I(e),!0):!1}function B(e){return typeof e=="function"?e():u(e)}const ye=typeof window<"u"&&typeof document<"u",M=()=>{};function Se(e,t){function o(...n){return new Promise((c,s)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(c).catch(s)})}return o}function Be(e,t={}){let o,n,c=M;const s=a=>{clearTimeout(a),c(),c=M};return a=>{const d=B(e),_=B(t.maxWait);return o&&s(o),d<=0||_!==void 0&&_<=0?(n&&(s(n),n=null),Promise.resolve(a())):new Promise((h,x)=>{c=t.rejectOnCancel?x:h,_&&!n&&(n=setTimeout(()=>{o&&s(o),n=null,h(a())},_)),o=setTimeout(()=>{n&&s(n),n=null,h(a())},d)})}}function ke(e,t=200,o={}){return Se(Be(t,o),e)}function D(e){return w(()=>Math.round(B(e)))}const ze={class:"text-base-700 bg-white bg-opacity-60 p-1 text-xs leading-none"},We=C({__name:"ResizableWindowDimensions",props:{width:{type:Number,required:!0},height:{type:Number,required:!0}},setup(e){const t=e,o=D(()=>t.width),n=D(()=>t.height),c=w(()=>`${o.value}px × ${n.value}px`);return(s,p)=>(m(),f("div",ze,G(u(c)),1))}});function y(e){var t;const o=B(e);return(t=o==null?void 0:o.$el)!=null?t:o}const L=ye?window:void 0;function Me(){const e=b(!1);return H()&&N(()=>{e.value=!0}),e}function De(e){const t=Me();return w(()=>(t.value,!!e()))}function Re(e,t,o={}){const{window:n=L,...c}=o;let s;const p=De(()=>n&&"ResizeObserver"in n),a=()=>{s&&(s.disconnect(),s=void 0)},d=w(()=>Array.isArray(e)?e.map(x=>y(x)):[y(e)]),_=k(d,x=>{if(a(),p.value&&n){s=new ResizeObserver(t);for(const g of x)g&&s.observe(g,c)}},{immediate:!0,flush:"post",deep:!0}),h=()=>{a(),_()};return Ce(h),{isSupported:p,stop:h}}function Le(e,t={width:0,height:0},o={}){const{window:n=L,box:c="content-box"}=o,s=w(()=>{var d,_;return(_=(d=y(e))==null?void 0:d.namespaceURI)==null?void 0:_.includes("svg")}),p=b(t.width),a=b(t.height);return Re(e,([d])=>{const _=c==="border-box"?d.borderBoxSize:c==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(n&&s.value){const h=y(e);if(h){const x=n.getComputedStyle(h);p.value=Number.parseFloat(x.width),a.value=Number.parseFloat(x.height)}}else if(_){const h=Array.isArray(_)?_:[_];p.value=h.reduce((x,{inlineSize:g})=>x+g,0),a.value=h.reduce((x,{blockSize:g})=>x+g,0)}else p.value=d.contentRect.width,a.value=d.contentRect.height},o),k(()=>y(e),d=>{p.value=d?t.width:0,a.value=d?t.height:0}),{width:p,height:a}}function Te(e,t,o){const n=b(!0);return k(e,(s,p,a)=>{if(n.value){n.value=!1;return}t(s,p,a)},o)}const Ae={class:"relative grid place-items-stretch"},R=896,Fe=C({__name:"ResizableWindow",emits:["width-change"],setup(e,{emit:t}){const o=b(),{width:n,height:c}=Le(o,{width:R,height:0});k(n,h=>t("width-change",h));const s=w(()=>n.value>=600),p=w(()=>`${R}px`),a=b(!1);function d(){a.value=!0}const _=ke(()=>a.value=!1,1500);return Te(n,()=>{d(),_()}),(h,x)=>{const g=$e,A=We;return m(),f("div",{ref_key:"root",ref:o,class:"max-w-custom flex min-w-[10rem] resize-x flex-col overflow-x-auto rounded-xl sm:overflow-hidden",style:P({maxWidth:u(p)})},[r(g,{sm:u(s)},null,8,["sm"]),i("div",Ae,[u(a)?(m(),W(A,{key:0,width:u(n),height:u(c),class:"absolute right-0 top-px"},null,8,["width","height"])):O("",!0),S(h.$slots,"default")])],4)}}}),Ie=async(e,t={})=>{const o=b(()=>e.value);return w(()=>o.value())},Ge={class:"overflow-hidden rounded-xl"},He=i("div",{class:"bg-base-600 border-base-400 flex gap-2 border-b px-3 py-2"},[i("div",{class:"bg-base-400 h-3 w-3 rounded-full"}),i("div",{class:"bg-base-400 h-3 w-3 rounded-full"}),i("div",{class:"bg-base-400 h-3 w-3 rounded-full"})],-1),Ne=["innerHTML"],Oe=C({__name:"CodeBlock",props:{code:{type:String,required:!0}},async setup(e){let t,o;const n=e,c=w(()=>n.code.trim()),s=([t,o]=V(()=>Ie(c,{lang:"css"})),t=await t,o(),t);return(p,a)=>(m(),f("div",Ge,[He,i("div",{innerHTML:u(s)},null,8,Ne)]))}}),Pe={class:"bg-base-700 my-8 rounded-xl bg-opacity-40 p-4 sm:my-12 sm:p-6"},Ve={class:"relative mb-12"},qe=C({__name:"DemoSection",props:{code:{type:String,required:!0}},setup(e){const t=b(1/0);return(o,n)=>{const c=Fe,s=Oe;return m(),f("section",Pe,[i("h2",null,[S(o.$slots,"heading")]),i("div",Ve,[r(c,{onWidthChange:n[0]||(n[0]=p=>t.value=p)},{default:l(()=>[S(o.$slots,"default")]),_:3})]),r(s,{code:e.code},null,8,["code"])])}}}),je={};function Ze(e,t){const o=Z;return m(),W(o,{to:"https://github.com/Lehoczky/postcss-fluid","aria-label":"View source on GitHub"},{default:l(()=>[S(e.$slots,"default")]),_:3})}const T=$(je,[["render",Ze]]);const Ee={},Ue=e=>(q("data-v-4f0ac996"),e=e(),j(),e),Ke=Ue(()=>i("svg",{width:"80",height:"80",viewBox:"0 0 250 250",class:"fill-base-700 text-base-300 scale-65 absolute right-0 top-0 origin-top-right transform border-none xl:scale-90","aria-hidden":"true"},[i("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),i("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{"transform-origin":"130px 106px"},class:"octo-arm"}),i("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"})],-1));function Xe(e,t){const o=T;return m(),W(o,{class:"github-corner hidden md:block"},{default:l(()=>[Ke]),_:1})}const Ye=$(Ee,[["render",Xe],["__scopeId","data-v-4f0ac996"]]),Je={},Qe={xmlns:"http://www.w3.org/2000/svg",class:"h-8 w-8",viewBox:"0 0 24 24"},et=i("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"},null,-1),tt=[et];function ot(e,t){return m(),f("svg",Qe,tt)}const nt=$(Je,[["render",ot]]),st=`
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
*/`,ct=`
div {
  width: fluid(50px, 200px, 480px, 720px);
  height: fluid(50px, 200px, 480px, 720px);
}

/* Compiled output:
div {
  width: clamp(50px, -250px + 62.5vw, 200px);
  height: clamp(50px, -250px + 62.5vw, 200px);
}
*/`,it=`
div {
  padding: fluid(4px, 40px, 480px, 720px);
}

/* Compiled output:
div {
  padding: clamp(4px, -68px + 15vw, 40px);
}
*/`,rt=`
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
*/`,at=`
div {
  width: fluid(200px, 50px, 480px, 720px);
  height: fluid(200px, 50px, 480px, 720px);
}

/* Compiled output:
div {
  width: clamp(50px, 500px + -62.5vw, 200px);
  height: clamp(50px, 500px + -62.5vw, 200px);
}
*/`,dt=`
div {
  border-radius: fluid(0, 50px, 480px, 720px);
}

/* Compiled output:
div {
  border-radius: clamp(0px, -100px + 20.8333vw, 50px);
}
*/`,lt=`
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
*/`,pt=`
div {
  border: fluid(10px, 22px, 480px, 720px) solid black;
}

/* Compiled output:
div {
  border: clamp(10px, -14px + 5vw, 22px) solid black;
}
*/`,ut={class:"mx-auto max-w-5xl px-4 sm:px-10"},_t={class:"mb-[fluid(2rem,5rem,30rem,64rem)] mt-[fluid(3.5rem,7rem,30rem,64rem)]"},ht=i("h1",null,"PostCSS Fluid Demo",-1),mt=i("div",{class:"mt-4 max-w-3xl text-lg"}," You can find various examples in this page. By resizing the windows below, you will be able to see the fluid effect this library creates. ",-1),xt={class:"bg-base-700 flex justify-center p-3 md:hidden"},wt=C({__name:"index",setup(e){return(t,o)=>{const n=ce,c=re,s=qe,p=Ye,a=nt,d=T;return m(),f("div",null,[i("main",ut,[i("div",_t,[ht,mt,r(n,{class:"mt-3 md:hidden"})]),r(s,{code:u(st)},{heading:l(()=>[v("Fluid Typography")]),default:l(()=>[r(c,{class:"h-[23.125rem]",src:"/example/typography"})]),_:1},8,["code"]),r(s,{code:u(ct)},{heading:l(()=>[v("Width and Height")]),default:l(()=>[r(c,{class:"h-[18rem]",src:"/example/growing"})]),_:1},8,["code"]),r(s,{code:u(it)},{heading:l(()=>[v("Padding")]),default:l(()=>[r(c,{class:"h-[18rem]",src:"/example/padding"})]),_:1},8,["code"]),r(s,{code:u(rt)},{heading:l(()=>[v("Position")]),default:l(()=>[r(c,{class:"h-[14rem]",src:"/example/position"})]),_:1},8,["code"]),r(s,{code:u(at)},{heading:l(()=>[v("Larger Value on Mobile")]),default:l(()=>[r(c,{class:"h-[18rem]",src:"/example/shrinking"})]),_:1},8,["code"]),r(s,{code:u(dt)},{heading:l(()=>[v("Border Radius")]),default:l(()=>[r(c,{class:"h-[14rem]",src:"/example/border-radius"})]),_:1},8,["code"]),r(s,{code:u(lt)},{heading:l(()=>[v("Gap")]),default:l(()=>[r(c,{class:"h-[20rem]",src:"/example/grid-gap"})]),_:1},8,["code"]),r(s,{code:u(pt)},{heading:l(()=>[v("Border")]),default:l(()=>[r(c,{class:"h-[14rem]",src:"/example/border"})]),_:1},8,["code"]),r(p)]),i("div",xt,[r(d,null,{default:l(()=>[r(a)]),_:1})])])}}});export{wt as default};
