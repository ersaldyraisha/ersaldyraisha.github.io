import{u as N,c as S,r as u,o as c,a as C,w as b,b as p,T as R,d as O,e as T,f as i,p as g,g as v,h as t,t as l,n as y,F as w,i as j,j as I,k as V,l as q,m as F,q as E,s as A,v as M,x as U,y as z}from"./vendor.1719d719.js";const K=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const _ of n.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&s(_)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}};K();const X={setup(e){const o=N(),a=S(()=>o.name==="home"?"unreveal":"reveal");return(s,r)=>{const n=u("router-view");return c(),C(n,null,{default:b(({Component:_})=>[p(R,{name:O(a)},{default:b(()=>[(c(),C(T(_)))]),_:2},1032,["name"])]),_:1})}}};var G="/assets/gmail.f00fadcd.svg",J="/assets/linkedin.d6333671.svg",Q="/assets/dribbble.3109c92d.svg";var m=(e,o)=>{for(const[a,s]of o)e[a]=s;return e};const Y={},Z=e=>(g("data-v-4637b222"),e=e(),v(),e),ee={class:"headline"},te=Z(()=>t("div",{class:"container"},[t("div",{class:"headline__content"},[t("h1",{class:"headline__name"},"Andi Ersaldy Raisha Pakki"),t("h2",{class:"headline__title"},"Frontend Engineer"),t("h2",{class:"headline__title"},"UI/UX Designer")]),t("div",{class:"social"},[t("a",{target:"_blank",href:"mailto:andi.ersaldy@gmail.com",class:"social__button social__button--gmail"},[t("img",{class:"social__icon",src:G,alt:"gmail"})]),t("a",{target:"_blank",href:"https://www.linkedin.com/in/ersaldyraisha",class:"social__button social__button--linkedin"},[t("img",{class:"social__icon",src:J,alt:"linkedin"})]),t("a",{target:"_blank",href:"https://dribbble.com/ersaldyraisha",class:"social__button social__button--dribbble"},[t("img",{class:"social__icon",src:Q,alt:"dribbble"})])])],-1)),oe=[te];function se(e,o){return c(),i("section",ee,oe)}var ae=m(Y,[["render",se],["__scopeId","data-v-4637b222"]]),$="/assets/arrow.dcc84c51.png";const re={props:{data:{type:Object,required:!0}}},ce=e=>(g("data-v-74de764e"),e=e(),v(),e),ne=["src"],ie={class:"card__title"},_e={class:"card__description"},le={class:"chips__item"},de=ce(()=>t("button",{class:"button"},[t("span",{class:"button__text"},"See more"),t("img",{class:"button__icon",src:$,alt:"arrow"})],-1));function ue(e,o,a,s,r,n){const _=u("router-link");return c(),i("li",null,[p(_,{to:{name:"project",query:{id:a.data.id}},class:"card__item",style:y({backgroundColor:a.data.backgroundColor}),onClick:o[0]||(o[0]=d=>e.$emit("card-click",a.data))},{default:b(()=>[t("img",{src:a.data.img[0],alt:"project",class:"card__image"},null,8,ne),t("div",{class:"card__text",style:y({backgroundColor:a.data.backgroundColor})},[t("h4",ie,l(a.data.name),1),t("p",_e,l(a.data.type),1),t("ul",{class:"chips",style:y({color:a.data.backgroundColor})},[(c(!0),i(w,null,j(a.data.tech,d=>(c(),i("li",le,l(d),1))),256))],4),de],4)]),_:1},8,["to","style"])])}var pe=m(re,[["render",ue],["__scopeId","data-v-74de764e"]]);const me={components:{"ui-card":pe},setup(){const e=I();return{works:S(()=>e.state.works),onCardClick:s=>{e.commit("setSelectedWorkId",s.id),e.commit("setLastScroll",document.querySelector(".homepage").scrollTop)}}}},D=e=>(g("data-v-37d2d94c"),e=e(),v(),e),he={class:"works"},fe={class:"container"},ge=D(()=>t("h3",{class:"works__title"},"Works",-1)),ve={class:"works__grid"},ke=D(()=>t("div",{class:"works__ornament works__ornament--top"},null,-1)),be=D(()=>t("div",{class:"works__ornament works__ornament--bottom"},null,-1));function ye(e,o,a,s,r,n){const _=u("ui-card");return c(),i("div",he,[t("div",fe,[ge,t("ul",ve,[(c(!0),i(w,null,j(s.works,d=>(c(),C(_,{data:d,onCardClick:s.onCardClick},null,8,["data","onCardClick"]))),256))])]),ke,be])}var we=m(me,[["render",ye],["__scopeId","data-v-37d2d94c"]]);const je={},$e=e=>(g("data-v-ac1a1b18"),e=e(),v(),e),Se={class:"footer"},Ce=$e(()=>t("div",{class:"container"},[t("h3",{class:"footer__text"},"Let's work together"),t("a",{target:"_blank",href:"mailto:andi.ersaldy@gmail.com",class:"footer__button"},[t("span",null," Send an email "),t("img",{class:"footer__image",src:$,alt:"arrow"})])],-1)),Ie=[Ce];function De(e,o){return c(),i("div",Se,Ie)}var P=m(je,[["render",De],["__scopeId","data-v-ac1a1b18"]]);const xe={components:{"ui-headline":ae,"ui-works":we,"ui-footer":P},setup(){const e=V(void 0),o=I();return q(async()=>{o.state.works.length===0&&await o.dispatch("fetchWorks"),e.value.scrollTo({top:o.state.lastScroll})}),{homepageRef:e}}},We={ref:"homepageRef",class:"homepage"};function Le(e,o,a,s,r,n){const _=u("ui-headline"),d=u("ui-works"),k=u("ui-footer");return c(),i("div",We,[p(_),p(d),p(k)],512)}var Be=m(xe,[["render",Le],["__scopeId","data-v-3a0fa18d"]]);const He={components:{"ui-footer":P},setup(){const e=N(),o=I(),a=S(()=>o.getters.selectedWork);return q(async()=>{o.getters.selectedWork||(o.commit("setSelectedWorkId",e.query.id),await o.dispatch("fetchWorks"))}),{projectDetail:a}}},h=e=>(g("data-v-4d4963dd"),e=e(),v(),e),Ne={key:0,class:"project__wrapper"},qe={class:"container"},Fe=h(()=>t("img",{src:$,alt:"Back To Homepage",class:"back-button__icon"},null,-1)),Pe={class:"project__title"},Re={class:"project__type"},Oe={class:"chips"},Te={class:"grid"},Ve=["href"],Ee=h(()=>t("div",{class:"grid__head"},[t("h2",{class:"grid__title"},"Visit Site"),t("img",{src:$,alt:"Visit Site",class:"grid__icon"})],-1)),Ae={class:"grid__content"},Me={class:"grid__item"},Ue=h(()=>t("h2",{class:"grid__title"},"Summary",-1)),ze={class:"grid__content"},Ke={class:"grid__item"},Xe=h(()=>t("h2",{class:"grid__title"},"Project Role",-1)),Ge={class:"grid__content"},Je=["href"],Qe=["src","alt"],Ye=h(()=>t("div",{class:"project__ornament project__ornament--top"},null,-1)),Ze=h(()=>t("div",{class:"project__ornament project__ornament--bottom"},null,-1));function et(e,o,a,s,r,n){var k,W,L,B;const _=u("router-link"),d=u("ui-footer");return c(),i("div",{class:"project",style:y({"--color-bg":(W=(k=s.projectDetail)==null?void 0:k.backgroundColor)!=null?W:"#000"})},[s.projectDetail?(c(),i("div",Ne,[t("div",qe,[p(_,{to:"/",class:"back-button"},{default:b(()=>[Fe]),_:1}),t("h1",Pe,l(s.projectDetail.name),1),t("p",Re,l(s.projectDetail.type),1),t("ul",Oe,[(c(!0),i(w,null,j(s.projectDetail.tech,f=>(c(),i("li",{key:`tech-${s.projectDetail.id}-${f}`,class:"chips__item"},[t("p",null,l(f),1)]))),128))]),t("div",Te,[s.projectDetail.url?(c(),i("a",{key:0,href:s.projectDetail.url,target:"_blank",class:"grid__item grid__item--url"},[Ee,t("p",Ae,l(s.projectDetail.url),1)],8,Ve)):F("",!0),t("div",Me,[Ue,t("p",ze,l(s.projectDetail.desc),1)]),t("div",Ke,[Xe,t("p",Ge,l(s.projectDetail.role),1)]),(c(!0),i(w,null,j((B=(L=s.projectDetail)==null?void 0:L.img)!=null?B:[],(f,H)=>(c(),i("a",{key:`image-${s.projectDetail.id}-${H}`,class:"grid__item grid__item--thumbnail",href:f,target:"_blank"},[t("img",{class:"grid__image",src:f,alt:`project-image-${H}`},null,8,Qe)],8,Je))),128))])]),Ye,Ze])):F("",!0),p(d)],4)}var tt=m(He,[["render",et],["__scopeId","data-v-4d4963dd"]]),ot=E({history:A(),routes:[{name:"home",path:"/",component:Be},{name:"project",path:"/project",component:tt}],scrollBehavior(){return{top:0}}}),st={fireDB:"https://ersaldyraisha-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app/"},at=M({state(){return{works:[],selectedWorkId:null,lastScroll:0}},mutations:{setWorks(e,o){e.works=o},setSelectedWorkId(e,o){e.selectedWorkId=o},setLastScroll(e,o){e.lastScroll=o}},getters:{selectedWork({selectedWorkId:e,works:o}){return o.find(a=>a.id===e)}},actions:{async fetchWorks({commit:e}){const o=await U.get(`${st.fireDB}/works.json`);e("setWorks",o.data)}}});const x=z(X);x.use(ot);x.use(at);x.mount("#app");