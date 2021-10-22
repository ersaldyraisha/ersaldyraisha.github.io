var z=Object.defineProperty;var R=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var q=(e,t,s)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,p=(e,t)=>{for(var s in t||(t={}))E.call(t,s)&&q(e,s,t[s]);if(R)for(var s of R(t))H.call(t,s)&&q(e,s,t[s]);return e};import{u as F,c as $,r as l,o as i,a as j,w as g,b as d,T as M,d as U,e as V,f as _,p as k,g as b,h as o,t as u,n as S,i as I,j as K,k as O,S as N,F as T,l as A,m as X,q as G,s as J,v as Q,x as Y,y as Z,z as ee,M as te}from"./vendor.6b33be37.js";const oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(r){if(r.ep)return;r.ep=!0;const c=s(r);fetch(r.href,c)}};oe();const se={setup(e){const t=F(),s=$(()=>t.name==="home"?"unreveal":"reveal");return(a,r)=>{const c=l("router-view");return i(),j(c,null,{default:g(({Component:n})=>[d(M,{name:U(s)},{default:g(()=>[(i(),j(V(n)))]),_:2},1032,["name"])]),_:1})}}};var ae="/assets/gmail.f00fadcd.svg",re="/assets/linkedin.d6333671.svg",ce="/assets/dribbble.3109c92d.svg";var f=(e,t)=>{for(const[s,a]of t)e[s]=a;return e};const ne={},ie=e=>(k("data-v-fc2bd64a"),e=e(),b(),e),_e={class:"headline"},le=ie(()=>o("div",{class:"container"},[o("div",{class:"headline__content"},[o("p",{class:"headline__name"},"Andi Ersaldy Raisha"),o("h1",{class:"headline__title"},"Frontend Engineer"),o("h1",{class:"headline__title"},"UI/UX Designer")]),o("div",{class:"social"},[o("a",{target:"_blank",href:"mailto:andi.ersaldy@gmail.com",class:"social__button social__button--gmail"},[o("img",{class:"social__icon",src:ae,alt:"gmail"})]),o("a",{target:"_blank",href:"https://www.linkedin.com/in/ersaldyraisha",class:"social__button social__button--linkedin"},[o("img",{class:"social__icon",src:re,alt:"linkedin"})]),o("a",{target:"_blank",href:"https://dribbble.com/ersaldyraisha",class:"social__button social__button--dribbble"},[o("img",{class:"social__icon",src:ce,alt:"dribbble"})])])],-1)),de=[le];function ue(e,t){return i(),_("section",_e,de)}var pe=f(ne,[["render",ue],["__scopeId","data-v-fc2bd64a"]]),C="/assets/arrow.dcc84c51.png";const me={props:{data:{type:Object,required:!0}}},he=e=>(k("data-v-140898f2"),e=e(),b(),e),fe=["src"],ve={class:"card__title"},ge={class:"card__description"},ke={class:"card__detail"},be=he(()=>o("button",{class:"button"},[o("span",{class:"button__text"},"See more"),o("img",{class:"button__icon",src:C,alt:"arrow"})],-1));function ye(e,t,s,a,r,c){const n=l("router-link");return i(),j(n,{tag:"li",to:{name:"project",query:{id:s.data.id}},class:"card__item",style:S({backgroundColor:s.data.backgroundColor}),onClick:t[0]||(t[0]=m=>e.$emit("card-click",s.data))},{default:g(()=>[o("img",{src:s.data.img[0],alt:"project",class:"card__image"},null,8,fe),o("div",{class:"card__text",style:S({backgroundColor:s.data.backgroundColor})},[o("h4",ve,u(s.data.name),1),o("p",ge,u(s.data.type),1),o("p",ke,u(s.data.desc),1),be],4)]),_:1},8,["to","style"])}var we=f(me,[["render",ye],["__scopeId","data-v-140898f2"]]);const $e={components:{"ui-card":we},setup(){const e=I();return{works:$(()=>e.state.works),onCardClick:a=>{e.commit("setSelectedWorkId",a.id),e.commit("setLastScroll",document.querySelector(".homepage").scrollTop)}}}},x=e=>(k("data-v-70335a67"),e=e(),b(),e),je={class:"works"},Se={class:"container"},Ie=x(()=>o("h2",{class:"works__title"},"Works",-1)),Ce=x(()=>o("div",{class:"works__ornament works__ornament--top"},null,-1)),xe=x(()=>o("div",{class:"works__ornament works__ornament--bottom"},null,-1));function We(e,t,s,a,r,c){const n=l("ui-card"),m=l("masonry-wall");return i(),_("div",je,[o("div",Se,[Ie,d(m,{class:"cards",items:a.works,gap:30,"column-width":300},{default:g(({item:h})=>[d(n,{data:h,onCardClick:a.onCardClick},null,8,["data","onCardClick"])]),_:1},8,["items"])]),Ce,xe])}var De=f($e,[["render",We],["__scopeId","data-v-70335a67"]]);const Be={},Le=e=>(k("data-v-093cd516"),e=e(),b(),e),Re={class:"footer"},qe=Le(()=>o("div",{class:"container"},[o("p",{class:"footer__text"},"Let's work together"),o("a",{target:"_blank",href:"mailto:andi.ersaldy@gmail.com",class:"footer__button"},[o("span",null," Send an email "),o("img",{class:"footer__image",src:C,alt:"arrow"})])],-1)),Fe=[qe];function Oe(e,t){return i(),_("div",Re,Fe)}var P=f(Be,[["render",Oe],["__scopeId","data-v-093cd516"]]);const Ne={components:{"ui-headline":pe,"ui-works":De,"ui-footer":P},setup(){const e=K(void 0),t=I(),s=async()=>{const a=N(),r=c=>({delay:c,distance:"30px",container:document.querySelector(".homepage")});await a.reveal(".works__title",p({},r(100))),await a.reveal(".cards",p({},r(200))),await a.reveal(".footer__text",p({},r(100))),await a.reveal(".footer__button",p({},r(200)))};return O(async()=>{s(),t.state.works.length===0&&await t.dispatch("fetchWorks"),setTimeout(()=>{e.value.scrollTo({top:t.state.lastScroll})},100)}),{homepageRef:e}}},Te={ref:"homepageRef",class:"homepage"};function Ae(e,t,s,a,r,c){const n=l("ui-headline"),m=l("ui-works"),h=l("ui-footer");return i(),_("div",Te,[d(n),d(m),d(h)],512)}var Pe=f(Ne,[["render",Ae],["__scopeId","data-v-d46a7b62"]]);const ze={components:{"ui-footer":P},setup(){const e=F(),t=I(),s=$(()=>t.getters.selectedWork),a=async()=>{const r=n=>({delay:n,distance:"30px"}),c=N();await c.reveal(".footer__text",p({},r(100))),await c.reveal(".footer__button",p({},r(200)))};return O(async()=>{t.getters.selectedWork||(t.commit("setSelectedWorkId",e.query.id),await t.dispatch("fetchWorks")),setTimeout(()=>{a()},500)}),{projectDetail:s}}},y=e=>(k("data-v-ee176630"),e=e(),b(),e),Ee={key:0,class:"project__wrapper"},He={class:"container"},Me=y(()=>o("img",{src:C,alt:"back",class:"back-button__icon"},null,-1)),Ue={class:"project__title"},Ve={class:"project__type"},Ke={class:"chips"},Xe={class:"grid"},Ge={class:"grid__item"},Je=y(()=>o("h4",{class:"grid__title"},"Summary",-1)),Qe={class:"grid__content"},Ye={class:"grid__item"},Ze=y(()=>o("h4",{class:"grid__title"},"Project Role",-1)),et={class:"grid__content"},tt=["href"],ot=["src","alt"],st=y(()=>o("div",{class:"project__ornament project__ornament--top"},null,-1)),at=y(()=>o("div",{class:"project__ornament project__ornament--bottom"},null,-1));function rt(e,t,s,a,r,c){var h,W,D,B;const n=l("router-link"),m=l("ui-footer");return i(),_("div",{class:"project",style:S({"--color-bg":(W=(h=a.projectDetail)==null?void 0:h.backgroundColor)!=null?W:"#000"})},[a.projectDetail?(i(),_("div",Ee,[o("div",He,[d(n,{to:"/",class:"back-button"},{default:g(()=>[Me]),_:1}),o("h1",Ue,u(a.projectDetail.name),1),o("p",Ve,u(a.projectDetail.type),1),o("ul",Ke,[(i(!0),_(T,null,A(a.projectDetail.tech,v=>(i(),_("li",{key:`tech-${a.projectDetail.id}-${v}`,class:"chips__item"},u(v),1))),128))]),o("div",Xe,[o("div",Ge,[Je,o("p",Qe,u(a.projectDetail.desc),1)]),o("div",Ye,[Ze,o("p",et,u(a.projectDetail.role),1)]),(i(!0),_(T,null,A((B=(D=a.projectDetail)==null?void 0:D.img)!=null?B:[],(v,L)=>(i(),_("a",{key:`image-${a.projectDetail.id}-${L}`,class:"grid__item grid__item--thumbnail",href:v,target:"_blank"},[o("img",{class:"grid__image",src:v,alt:`project-image-${L}`},null,8,ot)],8,tt))),128))])]),st,at])):X("",!0),d(m)],4)}var ct=f(ze,[["render",rt],["__scopeId","data-v-ee176630"]]),nt=G({history:J(),routes:[{name:"home",path:"/",component:Pe},{name:"project",path:"/project",component:ct}],scrollBehavior(){return{top:0}}}),it={fireDB:"https://ersaldyraisha-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/"},_t=Q({state(){return{works:[],selectedWorkId:null,lastScroll:0}},mutations:{setWorks(e,t){e.works=t},setSelectedWorkId(e,t){e.selectedWorkId=t},setLastScroll(e,t){e.lastScroll=t}},getters:{selectedWork({selectedWorkId:e,works:t}){return t.find(s=>s.id===e)}},actions:{async fetchWorks({commit:e}){const t=await Y.get(`${it.fireDB}/works.json`);e("setWorks",t.data)}}});const lt={apiKey:"AIzaSyBt6FIAoWztpBmB2o0qDKXFJ20tV_IO4UE",authDomain:"ersaldyraisha-portfolio.firebaseapp.com",databaseURL:"https://ersaldyraisha-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"ersaldyraisha-portfolio",storageBucket:"ersaldyraisha-portfolio.appspot.com",messagingSenderId:"253542296677",appId:"1:253542296677:web:94d9530000a6cce0b4aa8c",measurementId:"G-3BW352BP5T"};Z(lt);const w=ee(se);w.use(nt);w.use(_t);w.use(te);w.mount("#app");
