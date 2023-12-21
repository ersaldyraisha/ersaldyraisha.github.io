import{u as N,c as w,r as d,o as n,a as $,w as y,b as u,T,d as O,e as P,f as _,p as g,g as v,h as t,t as l,n as j,i as S,F as C,j as I,k as V,l as q,m as F,q as E,s as A,v as M,x as U,y as z}from"./vendor.5e3fefae.js";const K=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=a(r);fetch(r.href,c)}};K();const X={setup(e){const o=N(),a=w(()=>o.name==="home"?"unreveal":"reveal");return(s,r)=>{const c=d("router-view");return n(),$(c,null,{default:y(({Component:i})=>[u(T,{name:O(a)},{default:y(()=>[(n(),$(P(i)))]),_:2},1032,["name"])]),_:1})}}};var G="/assets/gmail.f00fadcd.svg",J="/assets/linkedin.d6333671.svg",Q="/assets/dribbble.3109c92d.svg";var m=(e,o)=>{for(const[a,s]of o)e[a]=s;return e};const Y={},Z=e=>(g("data-v-5b9adc98"),e=e(),v(),e),ee={class:"headline"},te=Z(()=>t("div",{class:"container"},[t("div",{class:"headline__content"},[t("p",{class:"headline__name"},"Andi Ersaldy Raisha"),t("h1",{class:"headline__title"},"Frontend Engineer"),t("h1",{class:"headline__title"},"UI/UX Designer")]),t("div",{class:"social"},[t("a",{target:"_blank",href:"mailto:andi.ersaldy@gmail.com",class:"social__button social__button--gmail"},[t("img",{class:"social__icon",src:G,alt:"gmail"})]),t("a",{target:"_blank",href:"https://www.linkedin.com/in/ersaldyraisha",class:"social__button social__button--linkedin"},[t("img",{class:"social__icon",src:J,alt:"linkedin"})]),t("a",{target:"_blank",href:"https://dribbble.com/ersaldyraisha",class:"social__button social__button--dribbble"},[t("img",{class:"social__icon",src:Q,alt:"dribbble"})])])],-1)),oe=[te];function se(e,o){return n(),_("section",ee,oe)}var ae=m(Y,[["render",se],["__scopeId","data-v-5b9adc98"]]),b="/assets/arrow.dcc84c51.png";const re={props:{data:{type:Object,required:!0}}},ce=e=>(g("data-v-e92f4088"),e=e(),v(),e),ne=["src"],ie={class:"card__title"},_e={class:"card__description"},le={class:"card__detail"},de=ce(()=>t("button",{class:"button"},[t("span",{class:"button__text"},"See more"),t("img",{class:"button__icon",src:b,alt:"arrow"})],-1));function ue(e,o,a,s,r,c){const i=d("router-link");return n(),_("li",null,[u(i,{to:{name:"project",query:{id:a.data.id}},class:"card__item",style:j({backgroundColor:a.data.backgroundColor}),onClick:o[0]||(o[0]=p=>e.$emit("card-click",a.data))},{default:y(()=>[t("img",{src:a.data.img[0],alt:"project",class:"card__image"},null,8,ne),t("div",{class:"card__text",style:j({backgroundColor:a.data.backgroundColor})},[t("h4",ie,l(a.data.name),1),t("p",_e,l(a.data.type),1),t("p",le,l(a.data.desc),1),de],4)]),_:1},8,["to","style"])])}var pe=m(re,[["render",ue],["__scopeId","data-v-e92f4088"]]);const me={components:{"ui-card":pe},setup(){const e=S();return{works:w(()=>e.state.works),onCardClick:s=>{e.commit("setSelectedWorkId",s.id),e.commit("setLastScroll",document.querySelector(".homepage").scrollTop)}}}},D=e=>(g("data-v-7099316c"),e=e(),v(),e),he={class:"works"},fe={class:"container"},ge=D(()=>t("h2",{class:"works__title"},"Works",-1)),ve={class:"works__grid"},ke=D(()=>t("div",{class:"works__ornament works__ornament--top"},null,-1)),ye=D(()=>t("div",{class:"works__ornament works__ornament--bottom"},null,-1));function be(e,o,a,s,r,c){const i=d("ui-card");return n(),_("div",he,[t("div",fe,[ge,t("ul",ve,[(n(!0),_(C,null,I(s.works,p=>(n(),$(i,{data:p,onCardClick:s.onCardClick},null,8,["data","onCardClick"]))),256))])]),ke,ye])}var we=m(me,[["render",be],["__scopeId","data-v-7099316c"]]);const $e={},je=e=>(g("data-v-093cd516"),e=e(),v(),e),Se={class:"footer"},Ce=je(()=>t("div",{class:"container"},[t("p",{class:"footer__text"},"Let's work together"),t("a",{target:"_blank",href:"mailto:andi.ersaldy@gmail.com",class:"footer__button"},[t("span",null," Send an email "),t("img",{class:"footer__image",src:b,alt:"arrow"})])],-1)),Ie=[Ce];function De(e,o){return n(),_("div",Se,Ie)}var R=m($e,[["render",De],["__scopeId","data-v-093cd516"]]);const xe={components:{"ui-headline":ae,"ui-works":we,"ui-footer":R},setup(){const e=V(void 0),o=S();return q(async()=>{o.state.works.length===0&&await o.dispatch("fetchWorks"),setTimeout(()=>{e.value.scrollTo({top:o.state.lastScroll})},100)}),{homepageRef:e}}},We={ref:"homepageRef",class:"homepage"};function Le(e,o,a,s,r,c){const i=d("ui-headline"),p=d("ui-works"),k=d("ui-footer");return n(),_("div",We,[u(i),u(p),u(k)],512)}var Be=m(xe,[["render",Le],["__scopeId","data-v-5dd1ea54"]]);const He={components:{"ui-footer":R},setup(){const e=N(),o=S(),a=w(()=>o.getters.selectedWork);return q(async()=>{o.getters.selectedWork||(o.commit("setSelectedWorkId",e.query.id),await o.dispatch("fetchWorks"))}),{projectDetail:a}}},h=e=>(g("data-v-1978e8df"),e=e(),v(),e),Ne={key:0,class:"project__wrapper"},qe={class:"container"},Fe=h(()=>t("img",{src:b,alt:"Back To Homepage",class:"back-button__icon"},null,-1)),Re={class:"project__title"},Te={class:"project__type"},Oe={class:"chips"},Pe={class:"grid"},Ve=["href"],Ee=h(()=>t("div",{class:"grid__head"},[t("h3",{class:"grid__title"},"Visit Site"),t("img",{src:b,alt:"Visit Site",class:"grid__icon"})],-1)),Ae={class:"grid__content"},Me={class:"grid__item"},Ue=h(()=>t("h3",{class:"grid__title"},"Summary",-1)),ze={class:"grid__content"},Ke={class:"grid__item"},Xe=h(()=>t("h3",{class:"grid__title"},"Project Role",-1)),Ge={class:"grid__content"},Je=["href"],Qe=["src","alt"],Ye=h(()=>t("div",{class:"project__ornament project__ornament--top"},null,-1)),Ze=h(()=>t("div",{class:"project__ornament project__ornament--bottom"},null,-1));function et(e,o,a,s,r,c){var k,W,L,B;const i=d("router-link"),p=d("ui-footer");return n(),_("div",{class:"project",style:j({"--color-bg":(W=(k=s.projectDetail)==null?void 0:k.backgroundColor)!=null?W:"#000"})},[s.projectDetail?(n(),_("div",Ne,[t("div",qe,[u(i,{to:"/",class:"back-button"},{default:y(()=>[Fe]),_:1}),t("h1",Re,l(s.projectDetail.name),1),t("h2",Te,l(s.projectDetail.type),1),t("ul",Oe,[(n(!0),_(C,null,I(s.projectDetail.tech,f=>(n(),_("li",{key:`tech-${s.projectDetail.id}-${f}`,class:"chips__item"},l(f),1))),128))]),t("div",Pe,[s.projectDetail.url?(n(),_("a",{key:0,href:s.projectDetail.url,target:"_blank",class:"grid__item grid__item--url"},[Ee,t("p",Ae,l(s.projectDetail.url),1)],8,Ve)):F("",!0),t("div",Me,[Ue,t("p",ze,l(s.projectDetail.desc),1)]),t("div",Ke,[Xe,t("p",Ge,l(s.projectDetail.role),1)]),(n(!0),_(C,null,I((B=(L=s.projectDetail)==null?void 0:L.img)!=null?B:[],(f,H)=>(n(),_("a",{key:`image-${s.projectDetail.id}-${H}`,class:"grid__item grid__item--thumbnail",href:f,target:"_blank"},[t("img",{class:"grid__image",src:f,alt:`project-image-${H}`},null,8,Qe)],8,Je))),128))])]),Ye,Ze])):F("",!0),u(p)],4)}var tt=m(He,[["render",et],["__scopeId","data-v-1978e8df"]]),ot=E({history:A(),routes:[{name:"home",path:"/",component:Be},{name:"project",path:"/project",component:tt}],scrollBehavior(){return{top:0}}}),st={fireDB:"https://ersaldyraisha-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/"},at=M({state(){return{works:[],selectedWorkId:null,lastScroll:0}},mutations:{setWorks(e,o){e.works=o},setSelectedWorkId(e,o){e.selectedWorkId=o},setLastScroll(e,o){e.lastScroll=o}},getters:{selectedWork({selectedWorkId:e,works:o}){return o.find(a=>a.id===e)}},actions:{async fetchWorks({commit:e}){const o=await U.get(`${st.fireDB}/works.json`);e("setWorks",o.data)}}});const x=z(X);x.use(ot);x.use(at);x.mount("#app");
