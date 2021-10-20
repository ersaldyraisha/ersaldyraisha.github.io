function Is(t,e){const n=Object.create(null),i=t.split(",");for(let s=0;s<i.length;s++)n[i[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const tf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nf=Is(tf);function Fo(t){return!!t||t===""}function Ts(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Se(i)?of(i):Ts(i);if(s)for(const r in s)e[r]=s[r]}return e}else{if(Se(t))return t;if(ve(t))return t}}const sf=/;(?![^(]*\))/g,rf=/:(.+)/;function of(t){const e={};return t.split(sf).forEach(n=>{if(n){const i=n.split(rf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ss(t){let e="";if(Se(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const i=Ss(t[n]);i&&(e+=i+" ")}else if(ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jy=t=>t==null?"":$(t)||ve(t)&&(t.toString===$o||!j(t.toString))?JSON.stringify(t,Wo,2):String(t),Wo=(t,e)=>e&&e.__v_isRef?Wo(t,e.value):nn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s])=>(n[`${i} =>`]=s,n),{})}:Ho(e)?{[`Set(${e.size})`]:[...e.values()]}:ve(e)&&!$(e)&&!jo(e)?String(e):e,ce={},tn=[],Ge=()=>{},lf=()=>!1,af=/^on[^a-z]/,vi=t=>af.test(t),Rs=t=>t.startsWith("onUpdate:"),xe=Object.assign,Bo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cf=Object.prototype.hasOwnProperty,Q=(t,e)=>cf.call(t,e),$=Array.isArray,nn=t=>Ei(t)==="[object Map]",Ho=t=>Ei(t)==="[object Set]",j=t=>typeof t=="function",Se=t=>typeof t=="string",Ns=t=>typeof t=="symbol",ve=t=>t!==null&&typeof t=="object",Uo=t=>ve(t)&&j(t.then)&&j(t.catch),$o=Object.prototype.toString,Ei=t=>$o.call(t),uf=t=>Ei(t).slice(8,-1),jo=t=>Ei(t)==="[object Object]",xs=t=>Se(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ci=Is(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ff=/-(\w)/g,tt=bi(t=>t.replace(ff,(e,n)=>n?n.toUpperCase():"")),hf=/\B([A-Z])/g,sn=bi(t=>t.replace(hf,"-$1").toLowerCase()),wi=bi(t=>t.charAt(0).toUpperCase()+t.slice(1)),As=bi(t=>t?`on${wi(t)}`:""),kn=(t,e)=>!Object.is(t,e),Ps=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ii=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},df=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zo;const pf=()=>zo||(zo=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let At;const Ti=[];class _f{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&At&&(this.parent=At,this.index=(At.scopes||(At.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(Ti.push(this),At=this)}off(){this.active&&(Ti.pop(),At=Ti[Ti.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function gf(t,e){e=e||At,e&&e.active&&e.effects.push(t)}const Os=t=>{const e=new Set(t);return e.w=0,e.n=0,e},qo=t=>(t.w&_t)>0,Vo=t=>(t.n&_t)>0,mf=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=_t},yf=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const s=e[i];qo(s)&&!Vo(s)?s.delete(t):e[n++]=s,s.w&=~_t,s.n&=~_t}e.length=n}},Ms=new WeakMap;let Dn=0,_t=1;const ks=30,Ln=[];let Pt;const Ot=Symbol(""),Ds=Symbol("");class Ls{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],gf(this,i)}run(){if(!this.active)return this.fn();if(!Ln.includes(this))try{return Ln.push(Pt=this),vf(),_t=1<<++Dn,Dn<=ks?mf(this):Ko(this),this.fn()}finally{Dn<=ks&&yf(this),_t=1<<--Dn,Mt(),Ln.pop();const e=Ln.length;Pt=e>0?Ln[e-1]:void 0}}stop(){this.active&&(Ko(this),this.onStop&&this.onStop(),this.active=!1)}}function Ko(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let rn=!0;const Fs=[];function on(){Fs.push(rn),rn=!1}function vf(){Fs.push(rn),rn=!0}function Mt(){const t=Fs.pop();rn=t===void 0?!0:t}function Fe(t,e,n){if(!Go())return;let i=Ms.get(t);i||Ms.set(t,i=new Map);let s=i.get(n);s||i.set(n,s=Os()),Yo(s)}function Go(){return rn&&Pt!==void 0}function Yo(t,e){let n=!1;Dn<=ks?Vo(t)||(t.n|=_t,n=!qo(t)):n=!t.has(Pt),n&&(t.add(Pt),Pt.deps.push(t))}function at(t,e,n,i,s,r){const o=Ms.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&$(t))o.forEach((a,c)=>{(c==="length"||c>=i)&&l.push(a)});else switch(n!==void 0&&l.push(o.get(n)),e){case"add":$(t)?xs(n)&&l.push(o.get("length")):(l.push(o.get(Ot)),nn(t)&&l.push(o.get(Ds)));break;case"delete":$(t)||(l.push(o.get(Ot)),nn(t)&&l.push(o.get(Ds)));break;case"set":nn(t)&&l.push(o.get(Ot));break}if(l.length===1)l[0]&&Ws(l[0]);else{const a=[];for(const c of l)c&&a.push(...c);Ws(Os(a))}}function Ws(t,e){for(const n of $(t)?t:[...t])(n!==Pt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Ef=Is("__proto__,__v_isRef,__isVue"),Qo=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Ns)),Cf=Bs(),bf=Bs(!1,!0),wf=Bs(!0),Xo=If();function If(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=X(this);for(let r=0,o=this.length;r<o;r++)Fe(i,"get",r+"");const s=i[e](...n);return s===-1||s===!1?i[e](...n.map(X)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){on();const i=X(this)[e].apply(this,n);return Mt(),i}}),t}function Bs(t=!1,e=!1){return function(i,s,r){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_raw"&&r===(t?e?Hf:ol:e?rl:sl).get(i))return i;const o=$(i);if(!t&&o&&Q(Xo,s))return Reflect.get(Xo,s,r);const l=Reflect.get(i,s,r);return(Ns(s)?Qo.has(s):Ef(s))||(t||Fe(i,"get",s),e)?l:ke(l)?!o||!xs(s)?l.value:l:ve(l)?t?ll(l):Fn(l):l}}const Tf=Jo(),Sf=Jo(!0);function Jo(t=!1){return function(n,i,s,r){let o=n[i];if(!t&&(s=X(s),o=X(o),!$(n)&&ke(o)&&!ke(s)))return o.value=s,!0;const l=$(n)&&xs(i)?Number(i)<n.length:Q(n,i),a=Reflect.set(n,i,s,r);return n===X(r)&&(l?kn(s,o)&&at(n,"set",i,s):at(n,"add",i,s)),a}}function Rf(t,e){const n=Q(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&at(t,"delete",e,void 0),i}function Nf(t,e){const n=Reflect.has(t,e);return(!Ns(e)||!Qo.has(e))&&Fe(t,"has",e),n}function xf(t){return Fe(t,"iterate",$(t)?"length":Ot),Reflect.ownKeys(t)}const Zo={get:Cf,set:Tf,deleteProperty:Rf,has:Nf,ownKeys:xf},Af={get:wf,set(t,e){return!0},deleteProperty(t,e){return!0}},Pf=xe({},Zo,{get:bf,set:Sf}),Hs=t=>t,Si=t=>Reflect.getPrototypeOf(t);function Ri(t,e,n=!1,i=!1){t=t.__v_raw;const s=X(t),r=X(e);e!==r&&!n&&Fe(s,"get",e),!n&&Fe(s,"get",r);const{has:o}=Si(s),l=i?Hs:n?js:Wn;if(o.call(s,e))return l(t.get(e));if(o.call(s,r))return l(t.get(r));t!==s&&t.get(e)}function Ni(t,e=!1){const n=this.__v_raw,i=X(n),s=X(t);return t!==s&&!e&&Fe(i,"has",t),!e&&Fe(i,"has",s),t===s?n.has(t):n.has(t)||n.has(s)}function xi(t,e=!1){return t=t.__v_raw,!e&&Fe(X(t),"iterate",Ot),Reflect.get(t,"size",t)}function el(t){t=X(t);const e=X(this);return Si(e).has.call(e,t)||(e.add(t),at(e,"add",t,t)),this}function tl(t,e){e=X(e);const n=X(this),{has:i,get:s}=Si(n);let r=i.call(n,t);r||(t=X(t),r=i.call(n,t));const o=s.call(n,t);return n.set(t,e),r?kn(e,o)&&at(n,"set",t,e):at(n,"add",t,e),this}function nl(t){const e=X(this),{has:n,get:i}=Si(e);let s=n.call(e,t);s||(t=X(t),s=n.call(e,t)),i&&i.call(e,t);const r=e.delete(t);return s&&at(e,"delete",t,void 0),r}function il(){const t=X(this),e=t.size!==0,n=t.clear();return e&&at(t,"clear",void 0,void 0),n}function Ai(t,e){return function(i,s){const r=this,o=r.__v_raw,l=X(o),a=e?Hs:t?js:Wn;return!t&&Fe(l,"iterate",Ot),o.forEach((c,u)=>i.call(s,a(c),a(u),r))}}function Pi(t,e,n){return function(...i){const s=this.__v_raw,r=X(s),o=nn(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=s[t](...i),u=n?Hs:e?js:Wn;return!e&&Fe(r,"iterate",a?Ds:Ot),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:l?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function gt(t){return function(...e){return t==="delete"?!1:this}}function Of(){const t={get(r){return Ri(this,r)},get size(){return xi(this)},has:Ni,add:el,set:tl,delete:nl,clear:il,forEach:Ai(!1,!1)},e={get(r){return Ri(this,r,!1,!0)},get size(){return xi(this)},has:Ni,add:el,set:tl,delete:nl,clear:il,forEach:Ai(!1,!0)},n={get(r){return Ri(this,r,!0)},get size(){return xi(this,!0)},has(r){return Ni.call(this,r,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:Ai(!0,!1)},i={get(r){return Ri(this,r,!0,!0)},get size(){return xi(this,!0)},has(r){return Ni.call(this,r,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:Ai(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Pi(r,!1,!1),n[r]=Pi(r,!0,!1),e[r]=Pi(r,!1,!0),i[r]=Pi(r,!0,!0)}),[t,n,e,i]}const[Mf,kf,Df,Lf]=Of();function Us(t,e){const n=e?t?Lf:Df:t?kf:Mf;return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(Q(n,s)&&s in i?n:i,s,r)}const Ff={get:Us(!1,!1)},Wf={get:Us(!1,!0)},Bf={get:Us(!0,!1)},sl=new WeakMap,rl=new WeakMap,ol=new WeakMap,Hf=new WeakMap;function Uf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $f(t){return t.__v_skip||!Object.isExtensible(t)?0:Uf(uf(t))}function Fn(t){return t&&t.__v_isReadonly?t:$s(t,!1,Zo,Ff,sl)}function jf(t){return $s(t,!1,Pf,Wf,rl)}function ll(t){return $s(t,!0,Af,Bf,ol)}function $s(t,e,n,i,s){if(!ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=s.get(t);if(r)return r;const o=$f(t);if(o===0)return t;const l=new Proxy(t,o===2?i:n);return s.set(t,l),l}function ln(t){return al(t)?ln(t.__v_raw):!!(t&&t.__v_isReactive)}function al(t){return!!(t&&t.__v_isReadonly)}function cl(t){return ln(t)||al(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function ul(t){return Ii(t,"__v_skip",!0),t}const Wn=t=>ve(t)?Fn(t):t,js=t=>ve(t)?ll(t):t;function fl(t){Go()&&(t=X(t),t.dep||(t.dep=Os()),Yo(t.dep))}function hl(t,e){t=X(t),t.dep&&Ws(t.dep)}function ke(t){return Boolean(t&&t.__v_isRef===!0)}function zf(t){return dl(t,!1)}function qf(t){return dl(t,!0)}function dl(t,e){return ke(t)?t:new Vf(t,e)}class Vf{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:Wn(e)}get value(){return fl(this),this._value}set value(e){e=this._shallow?e:X(e),kn(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Wn(e),hl(this))}}function Bn(t){return ke(t)?t.value:t}const Kf={get:(t,e,n)=>Bn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return ke(s)&&!ke(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function pl(t){return ln(t)?t:new Proxy(t,Kf)}class Gf{constructor(e,n,i){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Ls(e,()=>{this._dirty||(this._dirty=!0,hl(this))}),this.__v_isReadonly=i}get value(){const e=X(this);return fl(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function nt(t,e){let n,i;const s=j(t);return s?(n=t,i=Ge):(n=t.get,i=t.set),new Gf(n,i,s||!i)}Promise.resolve();function Yf(t,e,...n){const i=t.vnode.props||ce;let s=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||ce;h?s=n.map(_=>_.trim()):f&&(s=n.map(df))}let l,a=i[l=As(e)]||i[l=As(tt(e))];!a&&r&&(a=i[l=As(sn(e))]),a&&qe(a,t,6,s);const c=i[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,qe(c,t,6,s)}}function _l(t,e,n=!1){const i=e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},l=!1;if(!j(t)){const a=c=>{const u=_l(c,e,!0);u&&(l=!0,xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(i.set(t,null),null):($(r)?r.forEach(a=>o[a]=null):xe(o,r),i.set(t,o),o)}function zs(t,e){return!t||!vi(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,sn(e))||Q(t,e))}let Ye=null,Oi=null;function Mi(t){const e=Ye;return Ye=t,Oi=t&&t.type.__scopeId||null,e}function Zy(t){Oi=t}function ev(){Oi=null}function Qf(t,e=Ye,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&$l(-1);const r=Mi(e),o=t(...s);return Mi(r),i._d&&$l(1),o};return i._n=!0,i._c=!0,i._d=!0,i}function qs(t){const{type:e,vnode:n,proxy:i,withProxy:s,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:f,data:h,setupState:_,ctx:m,inheritAttrs:N}=t;let b,P;const A=Mi(t);try{if(n.shapeFlag&4){const U=s||i;b=rt(u.call(U,U,f,r,_,h,m)),P=a}else{const U=e;b=rt(U.length>1?U(r,{attrs:a,slots:l,emit:c}):U(r,null)),P=e.props?a:Xf(a)}}catch(U){Hn.length=0,ji(U,t,1),b=ze(yt)}let H=b;if(P&&N!==!1){const U=Object.keys(P),{shapeFlag:oe}=H;U.length&&oe&(1|6)&&(o&&U.some(Rs)&&(P=Jf(P,o)),H=an(H,P))}return n.dirs&&(H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),b=H,Mi(A),b}const Xf=t=>{let e;for(const n in t)(n==="class"||n==="style"||vi(n))&&((e||(e={}))[n]=t[n]);return e},Jf=(t,e)=>{const n={};for(const i in t)(!Rs(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Zf(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?gl(i,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!zs(c,h))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:i===o?!1:i?o?gl(i,o,c):!0:!!o;return!1}function gl(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==t[r]&&!zs(n,r))return!0}return!1}function eh({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const th=t=>t.__isSuspense;function nh(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):ed(t)}function ki(t,e){if(Ce){let n=Ce.provides;const i=Ce.parent&&Ce.parent.provides;i===n&&(n=Ce.provides=Object.create(i)),n[t]=e}}function mt(t,e,n=!1){const i=Ce||Ye;if(i){const s=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(i.proxy):e}}function ih(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bl(()=>{t.isMounted=!0}),wl(()=>{t.isUnmounting=!0}),t}const je=[Function,Array],sh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:je,onEnter:je,onAfterEnter:je,onEnterCancelled:je,onBeforeLeave:je,onLeave:je,onAfterLeave:je,onLeaveCancelled:je,onBeforeAppear:je,onAppear:je,onAfterAppear:je,onAppearCancelled:je},setup(t,{slots:e}){const n=jh(),i=ih();let s;return()=>{const r=e.default&&vl(e.default(),!0);if(!r||!r.length)return;const o=X(t),{mode:l}=o,a=r[0];if(i.isLeaving)return Ks(a);const c=yl(a);if(!c)return Ks(a);const u=Vs(c,o,i,n);Gs(c,u);const f=n.subTree,h=f&&yl(f);let _=!1;const{getTransitionKey:m}=c.type;if(m){const N=m();s===void 0?s=N:N!==s&&(s=N,_=!0)}if(h&&h.type!==yt&&(!Ft(c,h)||_)){const N=Vs(h,o,i,n);if(Gs(h,N),l==="out-in")return i.isLeaving=!0,N.afterLeave=()=>{i.isLeaving=!1,n.update()},Ks(a);l==="in-out"&&c.type!==yt&&(N.delayLeave=(b,P,A)=>{const H=ml(i,h);H[String(h.key)]=h,b._leaveCb=()=>{P(),b._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=A})}return a}}},rh=sh;function ml(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Vs(t,e,n,i){const{appear:s,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:_,onLeaveCancelled:m,onBeforeAppear:N,onAppear:b,onAfterAppear:P,onAppearCancelled:A}=e,H=String(t.key),U=ml(n,t),oe=(V,J)=>{V&&qe(V,i,9,J)},me={mode:r,persisted:o,beforeEnter(V){let J=l;if(!n.isMounted)if(s)J=N||l;else return;V._leaveCb&&V._leaveCb(!0);const ee=U[H];ee&&Ft(t,ee)&&ee.el._leaveCb&&ee.el._leaveCb(),oe(J,[V])},enter(V){let J=a,ee=c,Te=u;if(!n.isMounted)if(s)J=b||a,ee=P||c,Te=A||u;else return;let Ne=!1;const Pe=V._enterCb=pt=>{Ne||(Ne=!0,pt?oe(Te,[V]):oe(ee,[V]),me.delayedLeave&&me.delayedLeave(),V._enterCb=void 0)};J?(J(V,Pe),J.length<=1&&Pe()):Pe()},leave(V,J){const ee=String(t.key);if(V._enterCb&&V._enterCb(!0),n.isUnmounting)return J();oe(f,[V]);let Te=!1;const Ne=V._leaveCb=Pe=>{Te||(Te=!0,J(),Pe?oe(m,[V]):oe(_,[V]),V._leaveCb=void 0,U[ee]===t&&delete U[ee])};U[ee]=t,h?(h(V,Ne),h.length<=1&&Ne()):Ne()},clone(V){return Vs(V,e,n,i)}};return me}function Ks(t){if(Di(t))return t=an(t),t.children=null,t}function yl(t){return Di(t)?t.children?t.children[0]:void 0:t}function Gs(t,e){t.shapeFlag&6&&t.component?Gs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function vl(t,e=!1){let n=[],i=0;for(let s=0;s<t.length;s++){const r=t[s];r.type===st?(r.patchFlag&128&&i++,n=n.concat(vl(r.children,e))):(e||r.type!==yt)&&n.push(r)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function El(t){return j(t)?{setup:t,name:t.name}:t}const Ys=t=>!!t.type.__asyncLoader,Di=t=>t.type.__isKeepAlive;function oh(t,e){Cl(t,"a",e)}function lh(t,e){Cl(t,"da",e)}function Cl(t,e,n=Ce){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}t()});if(Li(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Di(s.parent.vnode)&&ah(i,e,n,s),s=s.parent}}function ah(t,e,n,i){const s=Li(e,t,i,!0);Il(()=>{Bo(i[e],s)},n)}function Li(t,e,n=Ce,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;on(),cn(n);const l=qe(e,n,t,o);return Wt(),Mt(),l});return i?s.unshift(r):s.push(r),r}}const ct=t=>(e,n=Ce)=>(!$i||t==="sp")&&Li(t,e,n),ch=ct("bm"),bl=ct("m"),uh=ct("bu"),fh=ct("u"),wl=ct("bum"),Il=ct("um"),hh=ct("sp"),dh=ct("rtg"),ph=ct("rtc");function _h(t,e=Ce){Li("ec",t,e)}let Qs=!0;function gh(t){const e=Rl(t),n=t.proxy,i=t.ctx;Qs=!1,e.beforeCreate&&Tl(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:_,updated:m,activated:N,deactivated:b,beforeDestroy:P,beforeUnmount:A,destroyed:H,unmounted:U,render:oe,renderTracked:me,renderTriggered:V,errorCaptured:J,serverPrefetch:ee,expose:Te,inheritAttrs:Ne,components:Pe,directives:pt,filters:Xt}=e;if(c&&mh(c,i,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const te=o[le];j(te)&&(i[le]=te.bind(n))}if(s){const le=s.call(n,n);ve(le)&&(t.data=Fn(le))}if(Qs=!0,r)for(const le in r){const te=r[le],Ue=j(te)?te.bind(n,n):j(te.get)?te.get.bind(n,n):Ge,Zt=!j(te)&&j(te.set)?te.set.bind(n):Ge,lt=nt({get:Ue,set:Zt});Object.defineProperty(i,le,{enumerable:!0,configurable:!0,get:()=>lt.value,set:Ze=>lt.value=Ze})}if(l)for(const le in l)Sl(l[le],i,n,le);if(a){const le=j(a)?a.call(n):a;Reflect.ownKeys(le).forEach(te=>{ki(te,le[te])})}u&&Tl(u,t,"c");function ye(le,te){$(te)?te.forEach(Ue=>le(Ue.bind(n))):te&&le(te.bind(n))}if(ye(ch,f),ye(bl,h),ye(uh,_),ye(fh,m),ye(oh,N),ye(lh,b),ye(_h,J),ye(ph,me),ye(dh,V),ye(wl,A),ye(Il,U),ye(hh,ee),$(Te))if(Te.length){const le=t.exposed||(t.exposed={});Te.forEach(te=>{Object.defineProperty(le,te,{get:()=>n[te],set:Ue=>n[te]=Ue})})}else t.exposed||(t.exposed={});oe&&t.render===Ge&&(t.render=oe),Ne!=null&&(t.inheritAttrs=Ne),Pe&&(t.components=Pe),pt&&(t.directives=pt)}function mh(t,e,n=Ge,i=!1){$(t)&&(t=Xs(t));for(const s in t){const r=t[s];let o;ve(r)?"default"in r?o=mt(r.from||s,r.default,!0):o=mt(r.from||s):o=mt(r),ke(o)&&i?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[s]=o}}function Tl(t,e,n){qe($(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sl(t,e,n,i){const s=i.includes(".")?ra(n,i):()=>n[i];if(Se(t)){const r=e[t];j(r)&&qi(s,r)}else if(j(t))qi(s,t.bind(n));else if(ve(t))if($(t))t.forEach(r=>Sl(r,e,n,i));else{const r=j(t.handler)?t.handler.bind(n):e[t.handler];j(r)&&qi(s,r,t)}}function Rl(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!s.length&&!n&&!i?a=e:(a={},s.length&&s.forEach(c=>Fi(a,c,o,!0)),Fi(a,e,o)),r.set(e,a),a}function Fi(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Fi(t,r,n,!0),s&&s.forEach(o=>Fi(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const l=yh[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const yh={data:Nl,props:kt,emits:kt,methods:kt,computed:kt,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:kt,directives:kt,watch:Eh,provide:Nl,inject:vh};function Nl(t,e){return e?t?function(){return xe(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function vh(t,e){return kt(Xs(t),Xs(e))}function Xs(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Oe(t,e){return t?[...new Set([].concat(t,e))]:e}function kt(t,e){return t?xe(xe(Object.create(null),t),e):e}function Eh(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const i in e)n[i]=Oe(t[i],e[i]);return n}function Ch(t,e,n,i=!1){const s={},r={};Ii(r,Bi,1),t.propsDefaults=Object.create(null),xl(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:jf(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function bh(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,l=X(s),[a]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];const _=e[h];if(a)if(Q(r,h))_!==r[h]&&(r[h]=_,c=!0);else{const m=tt(h);s[m]=Js(a,l,m,_,t,!1)}else _!==r[h]&&(r[h]=_,c=!0)}}}else{xl(t,e,s,r)&&(c=!0);let u;for(const f in l)(!e||!Q(e,f)&&((u=sn(f))===f||!Q(e,u)))&&(a?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Js(a,l,f,void 0,t,!0)):delete s[f]);if(r!==l)for(const f in r)(!e||!Q(e,f))&&(delete r[f],c=!0)}c&&at(t,"set","$attrs")}function xl(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if(Ci(a))continue;const c=e[a];let u;s&&Q(s,u=tt(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:zs(t.emitsOptions,a)||c!==i[a]&&(i[a]=c,o=!0)}if(r){const a=X(n),c=l||ce;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Js(s,a,f,c[f],t,!Q(c,f))}}return o}function Js(t,e,n,i,s,r){const o=t[n];if(o!=null){const l=Q(o,"default");if(l&&i===void 0){const a=o.default;if(o.type!==Function&&j(a)){const{propsDefaults:c}=s;n in c?i=c[n]:(cn(s),i=c[n]=a.call(null,e),Wt())}else i=a}o[0]&&(r&&!l?i=!1:o[1]&&(i===""||i===sn(n))&&(i=!0))}return i}function Al(t,e,n=!1){const i=e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},l=[];let a=!1;if(!j(t)){const u=f=>{a=!0;const[h,_]=Al(f,e,!0);xe(o,h),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return i.set(t,tn),tn;if($(r))for(let u=0;u<r.length;u++){const f=tt(r[u]);Pl(f)&&(o[f]=ce)}else if(r)for(const u in r){const f=tt(u);if(Pl(f)){const h=r[u],_=o[f]=$(h)||j(h)?{type:h}:h;if(_){const m=kl(Boolean,_.type),N=kl(String,_.type);_[0]=m>-1,_[1]=N<0||m<N,(m>-1||Q(_,"default"))&&l.push(f)}}}const c=[o,l];return i.set(t,c),c}function Pl(t){return t[0]!=="$"}function Ol(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ml(t,e){return Ol(t)===Ol(e)}function kl(t,e){return $(e)?e.findIndex(n=>Ml(n,t)):j(e)&&Ml(e,t)?0:-1}const Dl=t=>t[0]==="_"||t==="$stable",Zs=t=>$(t)?t.map(rt):[rt(t)],wh=(t,e,n)=>{const i=Qf((...s)=>Zs(e(...s)),n);return i._c=!1,i},Ll=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Dl(s))continue;const r=t[s];if(j(r))e[s]=wh(s,r,i);else if(r!=null){const o=Zs(r);e[s]=()=>o}}},Fl=(t,e)=>{const n=Zs(e);t.slots.default=()=>n},Ih=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),Ii(e,"_",n)):Ll(e,t.slots={})}else t.slots={},e&&Fl(t,e);Ii(t.slots,Bi,1)},Th=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=ce;if(i.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(xe(s,e),!n&&l===1&&delete s._):(r=!e.$stable,Ll(e,s)),o=e}else e&&(Fl(t,e),o={default:1});if(r)for(const l in s)!Dl(l)&&!(l in o)&&delete s[l]};function Dt(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];r&&(l.oldValue=r[o].value);let a=l.dir[i];a&&(on(),qe(a,n,8,[t.el,l,t,e]),Mt())}}function Wl(){return{app:null,config:{isNativeTag:lf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sh=0;function Rh(t,e){return function(i,s=null){s!=null&&!ve(s)&&(s=null);const r=Wl(),o=new Set;let l=!1;const a=r.app={_uid:Sh++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:nd,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(a,...u)):j(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,f){if(!l){const h=ze(i,s);return h.appContext=r,u&&e?e(h,c):t(h,c,f),l=!0,a._container=c,c.__vue_app__=a,or(h.component)||h.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a}};return a}}const Me=nh;function Nh(t){return xh(t)}function xh(t,e){const n=pf();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:_=Ge,cloneNode:m,insertStaticContent:N}=t,b=(d,p,g,E=null,v=null,T=null,x=!1,w=null,I=!!p.dynamicChildren)=>{if(d===p)return;d&&!Ft(d,p)&&(E=k(d),$e(d,v,T,!0),d=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:C,ref:D,shapeFlag:O}=p;switch(C){case tr:P(d,p,g,E);break;case yt:A(d,p,g,E);break;case nr:d==null&&H(p,g,E,x);break;case st:pt(d,p,g,E,v,T,x,w,I);break;default:O&1?me(d,p,g,E,v,T,x,w,I):O&6?Xt(d,p,g,E,v,T,x,w,I):(O&64||O&128)&&C.process(d,p,g,E,v,T,x,w,I,ae)}D!=null&&v&&er(D,d&&d.ref,T,p||d,!p)},P=(d,p,g,E)=>{if(d==null)i(p.el=l(p.children),g,E);else{const v=p.el=d.el;p.children!==d.children&&c(v,p.children)}},A=(d,p,g,E)=>{d==null?i(p.el=a(p.children||""),g,E):p.el=d.el},H=(d,p,g,E)=>{[d.el,d.anchor]=N(d.children,p,g,E)},U=({el:d,anchor:p},g,E)=>{let v;for(;d&&d!==p;)v=h(d),i(d,g,E),d=v;i(p,g,E)},oe=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),s(d),d=g;s(p)},me=(d,p,g,E,v,T,x,w,I)=>{x=x||p.type==="svg",d==null?V(p,g,E,v,T,x,w,I):Te(d,p,v,T,x,w,I)},V=(d,p,g,E,v,T,x,w)=>{let I,C;const{type:D,props:O,shapeFlag:L,transition:W,patchFlag:Y,dirs:_e}=d;if(d.el&&m!==void 0&&Y===-1)I=d.el=m(d.el);else{if(I=d.el=o(d.type,T,O&&O.is,O),L&8?u(I,d.children):L&16&&ee(d.children,I,null,E,v,T&&D!=="foreignObject",x,w),_e&&Dt(d,null,E,"created"),O){for(const fe in O)fe!=="value"&&!Ci(fe)&&r(I,fe,null,O[fe],T,d.children,E,v,R);"value"in O&&r(I,"value",null,O.value),(C=O.onVnodeBeforeMount)&&it(C,E,d)}J(I,d,d.scopeId,x,E)}_e&&Dt(d,null,E,"beforeMount");const ie=(!v||v&&!v.pendingBranch)&&W&&!W.persisted;ie&&W.beforeEnter(I),i(I,p,g),((C=O&&O.onVnodeMounted)||ie||_e)&&Me(()=>{C&&it(C,E,d),ie&&W.enter(I),_e&&Dt(d,null,E,"mounted")},v)},J=(d,p,g,E,v)=>{if(g&&_(d,g),E)for(let T=0;T<E.length;T++)_(d,E[T]);if(v){let T=v.subTree;if(p===T){const x=v.vnode;J(d,x,x.scopeId,x.slotScopeIds,v.parent)}}},ee=(d,p,g,E,v,T,x,w,I=0)=>{for(let C=I;C<d.length;C++){const D=d[C]=w?vt(d[C]):rt(d[C]);b(null,D,p,g,E,v,T,x,w)}},Te=(d,p,g,E,v,T,x)=>{const w=p.el=d.el;let{patchFlag:I,dynamicChildren:C,dirs:D}=p;I|=d.patchFlag&16;const O=d.props||ce,L=p.props||ce;let W;(W=L.onVnodeBeforeUpdate)&&it(W,g,p,d),D&&Dt(p,d,g,"beforeUpdate");const Y=v&&p.type!=="foreignObject";if(C?Ne(d.dynamicChildren,C,w,g,E,Y,T):x||Ue(d,p,w,null,g,E,Y,T,!1),I>0){if(I&16)Pe(w,p,O,L,g,E,v);else if(I&2&&O.class!==L.class&&r(w,"class",null,L.class,v),I&4&&r(w,"style",O.style,L.style,v),I&8){const _e=p.dynamicProps;for(let ie=0;ie<_e.length;ie++){const fe=_e[ie],Ke=O[fe],en=L[fe];(en!==Ke||fe==="value")&&r(w,fe,Ke,en,v,d.children,g,E,R)}}I&1&&d.children!==p.children&&u(w,p.children)}else!x&&C==null&&Pe(w,p,O,L,g,E,v);((W=L.onVnodeUpdated)||D)&&Me(()=>{W&&it(W,g,p,d),D&&Dt(p,d,g,"updated")},E)},Ne=(d,p,g,E,v,T,x)=>{for(let w=0;w<p.length;w++){const I=d[w],C=p[w],D=I.el&&(I.type===st||!Ft(I,C)||I.shapeFlag&(6|64))?f(I.el):g;b(I,C,D,null,E,v,T,x,!0)}},Pe=(d,p,g,E,v,T,x)=>{if(g!==E){for(const w in E){if(Ci(w))continue;const I=E[w],C=g[w];I!==C&&w!=="value"&&r(d,w,C,I,x,p.children,v,T,R)}if(g!==ce)for(const w in g)!Ci(w)&&!(w in E)&&r(d,w,g[w],null,x,p.children,v,T,R);"value"in E&&r(d,"value",g.value,E.value)}},pt=(d,p,g,E,v,T,x,w,I)=>{const C=p.el=d?d.el:l(""),D=p.anchor=d?d.anchor:l("");let{patchFlag:O,dynamicChildren:L,slotScopeIds:W}=p;W&&(w=w?w.concat(W):W),d==null?(i(C,g,E),i(D,g,E),ee(p.children,g,D,v,T,x,w,I)):O>0&&O&64&&L&&d.dynamicChildren?(Ne(d.dynamicChildren,L,g,v,T,x,w),(p.key!=null||v&&p===v.subTree)&&Bl(d,p,!0)):Ue(d,p,g,D,v,T,x,w,I)},Xt=(d,p,g,E,v,T,x,w,I)=>{p.slotScopeIds=w,d==null?p.shapeFlag&512?v.ctx.activate(p,g,E,x,I):Jt(p,g,E,v,T,x,I):ye(d,p,I)},Jt=(d,p,g,E,v,T,x)=>{const w=d.component=$h(d,E,v);if(Di(d)&&(w.ctx.renderer=ae),zh(w),w.asyncDep){if(v&&v.registerDep(w,le),!d.el){const I=w.subTree=ze(yt);A(null,I,p,g)}return}le(w,d,p,g,v,T,x)},ye=(d,p,g)=>{const E=p.component=d.component;if(Zf(d,p,g))if(E.asyncDep&&!E.asyncResolved){te(E,p,g);return}else E.next=p,Jh(E.update),E.update();else p.component=d.component,p.el=d.el,E.vnode=p},le=(d,p,g,E,v,T,x)=>{const w=()=>{if(d.isMounted){let{next:D,bu:O,u:L,parent:W,vnode:Y}=d,_e=D,ie;I.allowRecurse=!1,D?(D.el=Y.el,te(d,D,x)):D=Y,O&&Ps(O),(ie=D.props&&D.props.onVnodeBeforeUpdate)&&it(ie,W,D,Y),I.allowRecurse=!0;const fe=qs(d),Ke=d.subTree;d.subTree=fe,b(Ke,fe,f(Ke.el),k(Ke),d,v,T),D.el=fe.el,_e===null&&eh(d,fe.el),L&&Me(L,v),(ie=D.props&&D.props.onVnodeUpdated)&&Me(()=>it(ie,W,D,Y),v)}else{let D;const{el:O,props:L}=p,{bm:W,m:Y,parent:_e}=d,ie=Ys(p);if(I.allowRecurse=!1,W&&Ps(W),!ie&&(D=L&&L.onVnodeBeforeMount)&&it(D,_e,p),I.allowRecurse=!0,O&&B){const fe=()=>{d.subTree=qs(d),B(O,d.subTree,d,v,null)};ie?p.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=qs(d);b(null,fe,g,E,d,v,T),p.el=fe.el}if(Y&&Me(Y,v),!ie&&(D=L&&L.onVnodeMounted)){const fe=p;Me(()=>it(D,_e,fe),v)}p.shapeFlag&256&&d.a&&Me(d.a,v),d.isMounted=!0,p=g=E=null}},I=new Ls(w,()=>Jl(d.update),d.scope),C=d.update=I.run.bind(I);C.id=d.uid,I.allowRecurse=C.allowRecurse=!0,C()},te=(d,p,g)=>{p.component=d;const E=d.vnode.props;d.vnode=p,d.next=null,bh(d,p.props,E,g),Th(d,p.children,g),on(),ur(void 0,d.update),Mt()},Ue=(d,p,g,E,v,T,x,w,I=!1)=>{const C=d&&d.children,D=d?d.shapeFlag:0,O=p.children,{patchFlag:L,shapeFlag:W}=p;if(L>0){if(L&128){lt(C,O,g,E,v,T,x,w,I);return}else if(L&256){Zt(C,O,g,E,v,T,x,w,I);return}}W&8?(D&16&&R(C,v,T),O!==C&&u(g,O)):D&16?W&16?lt(C,O,g,E,v,T,x,w,I):R(C,v,T,!0):(D&8&&u(g,""),W&16&&ee(O,g,E,v,T,x,w,I))},Zt=(d,p,g,E,v,T,x,w,I)=>{d=d||tn,p=p||tn;const C=d.length,D=p.length,O=Math.min(C,D);let L;for(L=0;L<O;L++){const W=p[L]=I?vt(p[L]):rt(p[L]);b(d[L],W,g,null,v,T,x,w,I)}C>D?R(d,v,T,!0,!1,O):ee(p,g,E,v,T,x,w,I,O)},lt=(d,p,g,E,v,T,x,w,I)=>{let C=0;const D=p.length;let O=d.length-1,L=D-1;for(;C<=O&&C<=L;){const W=d[C],Y=p[C]=I?vt(p[C]):rt(p[C]);if(Ft(W,Y))b(W,Y,g,null,v,T,x,w,I);else break;C++}for(;C<=O&&C<=L;){const W=d[O],Y=p[L]=I?vt(p[L]):rt(p[L]);if(Ft(W,Y))b(W,Y,g,null,v,T,x,w,I);else break;O--,L--}if(C>O){if(C<=L){const W=L+1,Y=W<D?p[W].el:E;for(;C<=L;)b(null,p[C]=I?vt(p[C]):rt(p[C]),g,Y,v,T,x,w,I),C++}}else if(C>L)for(;C<=O;)$e(d[C],v,T,!0),C++;else{const W=C,Y=C,_e=new Map;for(C=Y;C<=L;C++){const Le=p[C]=I?vt(p[C]):rt(p[C]);Le.key!=null&&_e.set(Le.key,C)}let ie,fe=0;const Ke=L-Y+1;let en=!1,ko=0;const Mn=new Array(Ke);for(C=0;C<Ke;C++)Mn[C]=0;for(C=W;C<=O;C++){const Le=d[C];if(fe>=Ke){$e(Le,v,T,!0);continue}let et;if(Le.key!=null)et=_e.get(Le.key);else for(ie=Y;ie<=L;ie++)if(Mn[ie-Y]===0&&Ft(Le,p[ie])){et=ie;break}et===void 0?$e(Le,v,T,!0):(Mn[et-Y]=C+1,et>=ko?ko=et:en=!0,b(Le,p[et],g,null,v,T,x,w,I),fe++)}const Do=en?Ah(Mn):tn;for(ie=Do.length-1,C=Ke-1;C>=0;C--){const Le=Y+C,et=p[Le],Lo=Le+1<D?p[Le+1].el:E;Mn[C]===0?b(null,et,g,Lo,v,T,x,w,I):en&&(ie<0||C!==Do[ie]?Ze(et,g,Lo,2):ie--)}}},Ze=(d,p,g,E,v=null)=>{const{el:T,type:x,transition:w,children:I,shapeFlag:C}=d;if(C&6){Ze(d.component.subTree,p,g,E);return}if(C&128){d.suspense.move(p,g,E);return}if(C&64){x.move(d,p,g,ae);return}if(x===st){i(T,p,g);for(let O=0;O<I.length;O++)Ze(I[O],p,g,E);i(d.anchor,p,g);return}if(x===nr){U(d,p,g);return}if(E!==2&&C&1&&w)if(E===0)w.beforeEnter(T),i(T,p,g),Me(()=>w.enter(T),v);else{const{leave:O,delayLeave:L,afterLeave:W}=w,Y=()=>i(T,p,g),_e=()=>{O(T,()=>{Y(),W&&W()})};L?L(T,Y,_e):_e()}else i(T,p,g)},$e=(d,p,g,E=!1,v=!1)=>{const{type:T,props:x,ref:w,children:I,dynamicChildren:C,shapeFlag:D,patchFlag:O,dirs:L}=d;if(w!=null&&er(w,null,g,d,!0),D&256){p.ctx.deactivate(d);return}const W=D&1&&L,Y=!Ys(d);let _e;if(Y&&(_e=x&&x.onVnodeBeforeUnmount)&&it(_e,p,d),D&6)M(d.component,g,E);else{if(D&128){d.suspense.unmount(g,E);return}W&&Dt(d,null,p,"beforeUnmount"),D&64?d.type.remove(d,p,g,v,ae,E):C&&(T!==st||O>0&&O&64)?R(C,p,g,!1,!0):(T===st&&O&(128|256)||!v&&D&16)&&R(I,p,g),E&&ws(d)}(Y&&(_e=x&&x.onVnodeUnmounted)||W)&&Me(()=>{_e&&it(_e,p,d),W&&Dt(d,null,p,"unmounted")},g)},ws=d=>{const{type:p,el:g,anchor:E,transition:v}=d;if(p===st){y(g,E);return}if(p===nr){oe(d);return}const T=()=>{s(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(d.shapeFlag&1&&v&&!v.persisted){const{leave:x,delayLeave:w}=v,I=()=>x(g,T);w?w(d.el,T,I):I()}else T()},y=(d,p)=>{let g;for(;d!==p;)g=h(d),s(d),d=g;s(p)},M=(d,p,g)=>{const{bum:E,scope:v,update:T,subTree:x,um:w}=d;E&&Ps(E),v.stop(),T&&(T.active=!1,$e(x,d,p,g)),w&&Me(w,p),Me(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},R=(d,p,g,E=!1,v=!1,T=0)=>{for(let x=T;x<d.length;x++)$e(d[x],p,g,E,v)},k=d=>d.shapeFlag&6?k(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),ne=(d,p,g)=>{d==null?p._vnode&&$e(p._vnode,null,null,!0):b(p._vnode||null,d,p,null,null,null,g),ta(),p._vnode=d},ae={p:b,um:$e,m:Ze,r:ws,mt:Jt,mc:ee,pc:Ue,pbc:Ne,n:k,o:t};let q,B;return e&&([q,B]=e(ae)),{render:ne,hydrate:q,createApp:Rh(ne,q)}}function er(t,e,n,i,s=!1){if($(t)){t.forEach((h,_)=>er(h,e&&($(e)?e[_]:e),n,i,s));return}if(Ys(i)&&!s)return;const r=i.shapeFlag&4?or(i.component)||i.component.proxy:i.el,o=s?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===ce?l.refs={}:l.refs,f=l.setupState;if(c!=null&&c!==a&&(Se(c)?(u[c]=null,Q(f,c)&&(f[c]=null)):ke(c)&&(c.value=null)),Se(a)){const h=()=>{u[a]=o,Q(f,a)&&(f[a]=o)};o?(h.id=-1,Me(h,n)):h()}else if(ke(a)){const h=()=>{a.value=o};o?(h.id=-1,Me(h,n)):h()}else j(a)&&Et(a,l,12,[o,u])}function it(t,e,n,i=null){qe(t,e,7,[n,i])}function Bl(t,e,n=!1){const i=t.children,s=e.children;if($(i)&&$(s))for(let r=0;r<i.length;r++){const o=i[r];let l=s[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[r]=vt(s[r]),l.el=o.el),n||Bl(o,l))}}function Ah(t){const e=t.slice(),n=[0];let i,s,r,o,l;const a=t.length;for(i=0;i<a;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Ph=t=>t.__isTeleport,Hl="components";function tv(t,e){return Mh(Hl,t,!0,e)||t}const Oh=Symbol();function Mh(t,e,n=!0,i=!1){const s=Ye||Ce;if(s){const r=s.type;if(t===Hl){const l=Gh(r);if(l&&(l===e||l===tt(e)||l===wi(tt(e))))return r}const o=Ul(s[t]||r[t],e)||Ul(s.appContext[t],e);return!o&&i?r:o}}function Ul(t,e){return t&&(t[e]||t[tt(e)]||t[wi(tt(e))])}const st=Symbol(void 0),tr=Symbol(void 0),yt=Symbol(void 0),nr=Symbol(void 0),Hn=[];let Lt=null;function nv(t=!1){Hn.push(Lt=t?null:[])}function kh(){Hn.pop(),Lt=Hn[Hn.length-1]||null}let Wi=1;function $l(t){Wi+=t}function jl(t){return t.dynamicChildren=Wi>0?Lt||tn:null,kh(),Wi>0&&Lt&&Lt.push(t),t}function iv(t,e,n,i,s,r){return jl(ql(t,e,n,i,s,r,!0))}function sv(t,e,n,i,s){return jl(ze(t,e,n,i,s,!0))}function ir(t){return t?t.__v_isVNode===!0:!1}function Ft(t,e){return t.type===e.type&&t.key===e.key}const Bi="__vInternal",zl=({key:t})=>t!=null?t:null,Hi=({ref:t})=>t!=null?Se(t)||ke(t)||j(t)?{i:Ye,r:t}:t:null;function ql(t,e=null,n=null,i=0,s=null,r=t===st?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zl(e),ref:e&&Hi(e),scopeId:Oi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(sr(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=Se(n)?8:16),Wi>0&&!o&&Lt&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Lt.push(a),a}const ze=Dh;function Dh(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Oh)&&(t=yt),ir(t)){const l=an(t,e,!0);return n&&sr(l,n),l}if(Yh(t)&&(t=t.__vccOpts),e){e=Lh(e);let{class:l,style:a}=e;l&&!Se(l)&&(e.class=Ss(l)),ve(a)&&(cl(a)&&!$(a)&&(a=xe({},a)),e.style=Ts(a))}const o=Se(t)?1:th(t)?128:Ph(t)?64:ve(t)?4:j(t)?2:0;return ql(t,e,n,i,s,o,r,!0)}function Lh(t){return t?cl(t)||Bi in t?xe({},t):t:null}function an(t,e,n=!1){const{props:i,ref:s,patchFlag:r,children:o}=t,l=e?Wh(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&zl(l),ref:e&&e.ref?n&&s?$(s)?s.concat(Hi(e)):[s,Hi(e)]:Hi(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==st?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&an(t.ssContent),ssFallback:t.ssFallback&&an(t.ssFallback),el:t.el,anchor:t.anchor}}function Fh(t=" ",e=0){return ze(tr,null,t,e)}function rt(t){return t==null||typeof t=="boolean"?ze(yt):$(t)?ze(st,null,t.slice()):typeof t=="object"?vt(t):ze(tr,null,String(t))}function vt(t){return t.el===null||t.memo?t:an(t)}function sr(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(i&(1|64)){const s=e.default;s&&(s._c&&(s._d=!1),sr(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Bi in e)?e._ctx=Ye:s===3&&Ye&&(Ye.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Ye},n=32):(e=String(e),i&64?(n=16,e=[Fh(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wh(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ss([e.class,i.class]));else if(s==="style")e.style=Ts([e.style,i.style]);else if(vi(s)){const r=e[s],o=i[s];r!==o&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function rv(t,e,n,i){let s;const r=n&&n[i];if($(t)||Se(t)){s=new Array(t.length);for(let o=0,l=t.length;o<l;o++)s[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,r&&r[o])}else if(ve(t))if(t[Symbol.iterator])s=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);s=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];s[l]=e(t[c],c,l,r&&r[l])}}else s=[];return n&&(n[i]=s),s}const rr=t=>t?Vl(t)?or(t)||t.proxy:rr(t.parent):null,Ui=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>rr(t.parent),$root:t=>rr(t.root),$emit:t=>t.emit,$options:t=>Rl(t),$forceUpdate:t=>()=>Jl(t.update),$nextTick:t=>Xl.bind(t.proxy),$watch:t=>td.bind(t)}),Bh={get({_:t},e){const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 0:return i[e];case 1:return s[e];case 3:return n[e];case 2:return r[e]}else{if(i!==ce&&Q(i,e))return o[e]=0,i[e];if(s!==ce&&Q(s,e))return o[e]=1,s[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=2,r[e];if(n!==ce&&Q(n,e))return o[e]=3,n[e];Qs&&(o[e]=4)}}const u=Ui[e];let f,h;if(u)return e==="$attrs"&&Fe(t,"get",e),u(t);if((f=l.__cssModules)&&(f=f[e]))return f;if(n!==ce&&Q(n,e))return o[e]=3,n[e];if(h=a.config.globalProperties,Q(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;if(s!==ce&&Q(s,e))s[e]=n;else if(i!==ce&&Q(i,e))i[e]=n;else if(Q(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,propsOptions:r}},o){let l;return n[o]!==void 0||t!==ce&&Q(t,o)||e!==ce&&Q(e,o)||(l=r[0])&&Q(l,o)||Q(i,o)||Q(Ui,o)||Q(s.config.globalProperties,o)}},Hh=Wl();let Uh=0;function $h(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Hh,r={uid:Uh++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,update:null,scope:new _f(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Al(i,s),emitsOptions:_l(i,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:i.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Yf.bind(null,r),t.ce&&t.ce(r),r}let Ce=null;const jh=()=>Ce||Ye,cn=t=>{Ce=t,t.scope.on()},Wt=()=>{Ce&&Ce.scope.off(),Ce=null};function Vl(t){return t.vnode.shapeFlag&4}let $i=!1;function zh(t,e=!1){$i=e;const{props:n,children:i}=t.vnode,s=Vl(t);Ch(t,n,s,e),Ih(t,i);const r=s?qh(t,e):void 0;return $i=!1,r}function qh(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ul(new Proxy(t.ctx,Bh));const{setup:i}=n;if(i){const s=t.setupContext=i.length>1?Kh(t):null;cn(t),on();const r=Et(i,t,0,[t.props,s]);if(Mt(),Wt(),Uo(r)){if(r.then(Wt,Wt),e)return r.then(o=>{Kl(t,o,e)}).catch(o=>{ji(o,t,0)});t.asyncDep=r}else Kl(t,r,e)}else Yl(t,e)}function Kl(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ve(e)&&(t.setupState=pl(e)),Yl(t,n)}let Gl;function Yl(t,e,n){const i=t.type;if(!t.render){if(!e&&Gl&&!i.render){const s=i.template;if(s){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=i,c=xe(xe({isCustomElement:r,delimiters:l},o),a);i.render=Gl(s,c)}}t.render=i.render||Ge}cn(t),on(),gh(t),Mt(),Wt()}function Vh(t){return new Proxy(t.attrs,{get(e,n){return Fe(t,"get","$attrs"),e[n]}})}function Kh(t){const e=i=>{t.exposed=i||{}};let n;return{get attrs(){return n||(n=Vh(t))},slots:t.slots,emit:t.emit,expose:e}}function or(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(pl(ul(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ui)return Ui[n](t)}}))}function Gh(t){return j(t)&&t.displayName||t.name}function Yh(t){return j(t)&&"__vccOpts"in t}function Et(t,e,n,i){let s;try{s=i?t(...i):t()}catch(r){ji(r,e,n)}return s}function qe(t,e,n,i){if(j(t)){const r=Et(t,e,n,i);return r&&Uo(r)&&r.catch(o=>{ji(o,e,n)}),r}const s=[];for(let r=0;r<t.length;r++)s.push(qe(t[r],e,n,i));return s}function ji(t,e,n,i=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Et(a,null,10,[t,o,l]);return}}Qh(t,n,s,i)}function Qh(t,e,n,i=!0){console.error(t)}let zi=!1,lr=!1;const We=[];let ut=0;const Un=[];let $n=null,un=0;const jn=[];let Ct=null,fn=0;const Ql=Promise.resolve();let ar=null,cr=null;function Xl(t){const e=ar||Ql;return t?e.then(this?t.bind(this):t):e}function Xh(t){let e=ut+1,n=We.length;for(;e<n;){const i=e+n>>>1;zn(We[i])<t?e=i+1:n=i}return e}function Jl(t){(!We.length||!We.includes(t,zi&&t.allowRecurse?ut+1:ut))&&t!==cr&&(t.id==null?We.push(t):We.splice(Xh(t.id),0,t),Zl())}function Zl(){!zi&&!lr&&(lr=!0,ar=Ql.then(na))}function Jh(t){const e=We.indexOf(t);e>ut&&We.splice(e,1)}function ea(t,e,n,i){$(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?i+1:i))&&n.push(t),Zl()}function Zh(t){ea(t,$n,Un,un)}function ed(t){ea(t,Ct,jn,fn)}function ur(t,e=null){if(Un.length){for(cr=e,$n=[...new Set(Un)],Un.length=0,un=0;un<$n.length;un++)$n[un]();$n=null,un=0,cr=null,ur(t,e)}}function ta(t){if(jn.length){const e=[...new Set(jn)];if(jn.length=0,Ct){Ct.push(...e);return}for(Ct=e,Ct.sort((n,i)=>zn(n)-zn(i)),fn=0;fn<Ct.length;fn++)Ct[fn]();Ct=null,fn=0}}const zn=t=>t.id==null?1/0:t.id;function na(t){lr=!1,zi=!0,ur(t),We.sort((n,i)=>zn(n)-zn(i));const e=Ge;try{for(ut=0;ut<We.length;ut++){const n=We[ut];n&&n.active!==!1&&Et(n,null,14)}}finally{ut=0,We.length=0,ta(),zi=!1,ar=null,(We.length||Un.length||jn.length)&&na(t)}}const ia={};function qi(t,e,n){return sa(t,e,n)}function sa(t,e,{immediate:n,deep:i,flush:s,onTrack:r,onTrigger:o}=ce){const l=Ce;let a,c=!1,u=!1;if(ke(t)?(a=()=>t.value,c=!!t._shallow):ln(t)?(a=()=>t,i=!0):$(t)?(u=!0,c=t.some(ln),a=()=>t.map(P=>{if(ke(P))return P.value;if(ln(P))return hn(P);if(j(P))return Et(P,l,2)})):j(t)?e?a=()=>Et(t,l,2):a=()=>{if(!(l&&l.isUnmounted))return f&&f(),qe(t,l,3,[h])}:a=Ge,e&&i){const P=a;a=()=>hn(P())}let f,h=P=>{f=b.onStop=()=>{Et(P,l,4)}};if($i)return h=Ge,e?n&&qe(e,l,3,[a(),u?[]:void 0,h]):a(),Ge;let _=u?[]:ia;const m=()=>{if(!!b.active)if(e){const P=b.run();(i||c||(u?P.some((A,H)=>kn(A,_[H])):kn(P,_)))&&(f&&f(),qe(e,l,3,[P,_===ia?void 0:_,h]),_=P)}else b.run()};m.allowRecurse=!!e;let N;s==="sync"?N=m:s==="post"?N=()=>Me(m,l&&l.suspense):N=()=>{!l||l.isMounted?Zh(m):m()};const b=new Ls(a,N);return e?n?m():_=b.run():s==="post"?Me(b.run.bind(b),l&&l.suspense):b.run(),()=>{b.stop(),l&&l.scope&&Bo(l.scope.effects,b)}}function td(t,e,n){const i=this.proxy,s=Se(t)?t.includes(".")?ra(i,t):()=>i[t]:t.bind(i,i);let r;j(e)?r=e:(r=e.handler,n=e);const o=Ce;cn(this);const l=sa(s,r.bind(i),n);return o?cn(o):Wt(),l}function ra(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}function hn(t,e){if(!ve(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ke(t))hn(t.value,e);else if($(t))for(let n=0;n<t.length;n++)hn(t[n],e);else if(Ho(t)||nn(t))t.forEach(n=>{hn(n,e)});else if(jo(t))for(const n in t)hn(t[n],e);return t}function oa(t,e,n){const i=arguments.length;return i===2?ve(e)&&!$(e)?ir(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ir(n)&&(n=[n]),ze(t,e,n))}const nd="3.2.20",id="http://www.w3.org/2000/svg",dn=typeof document!="undefined"?document:null,la=new Map,sd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e?dn.createElementNS(id,t):dn.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>dn.createTextNode(t),createComment:t=>dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i){const s=n?n.previousSibling:e.lastChild;let r=la.get(t);if(!r){const o=dn.createElement("template");if(o.innerHTML=i?`<svg>${t}</svg>`:t,r=o.content,i){const l=r.firstChild;for(;l.firstChild;)r.appendChild(l.firstChild);r.removeChild(l)}la.set(t,r)}return e.insertBefore(r.cloneNode(!0),n),[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function rd(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function od(t,e,n){const i=t.style,s=i.display;if(!n)t.removeAttribute("style");else if(Se(n))e!==n&&(i.cssText=n);else{for(const r in n)fr(i,r,n[r]);if(e&&!Se(e))for(const r in e)n[r]==null&&fr(i,r,"")}"_vod"in t&&(i.display=s)}const aa=/\s*!important$/;function fr(t,e,n){if($(n))n.forEach(i=>fr(t,e,i));else if(e.startsWith("--"))t.setProperty(e,n);else{const i=ld(t,e);aa.test(n)?t.setProperty(sn(i),n.replace(aa,""),"important"):t[i]=n}}const ca=["Webkit","Moz","ms"],hr={};function ld(t,e){const n=hr[e];if(n)return n;let i=tt(e);if(i!=="filter"&&i in t)return hr[e]=i;i=wi(i);for(let s=0;s<ca.length;s++){const r=ca[s]+i;if(r in t)return hr[e]=r}return e}const ua="http://www.w3.org/1999/xlink";function ad(t,e,n,i,s){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ua,e.slice(6,e.length)):t.setAttributeNS(ua,e,n);else{const r=nf(e);n==null||r&&!Fo(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function cd(t,e,n,i,s,r,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,s,r),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const l=n==null?"":n;t.value!==l&&(t.value=l),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const l=typeof t[e];if(l==="boolean"){t[e]=Fo(n);return}else if(n==null&&l==="string"){t[e]="",t.removeAttribute(e);return}else if(l==="number"){try{t[e]=0}catch{}t.removeAttribute(e);return}}try{t[e]=n}catch{}}let Vi=Date.now,fa=!1;if(typeof window!="undefined"){Vi()>document.createEvent("Event").timeStamp&&(Vi=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);fa=!!(t&&Number(t[1])<=53)}let dr=0;const ud=Promise.resolve(),fd=()=>{dr=0},hd=()=>dr||(ud.then(fd),dr=Vi());function dd(t,e,n,i){t.addEventListener(e,n,i)}function pd(t,e,n,i){t.removeEventListener(e,n,i)}function _d(t,e,n,i,s=null){const r=t._vei||(t._vei={}),o=r[e];if(i&&o)o.value=i;else{const[l,a]=gd(e);if(i){const c=r[e]=md(i,s);dd(t,l,c,a)}else o&&(pd(t,l,o,a),r[e]=void 0)}}const ha=/(?:Once|Passive|Capture)$/;function gd(t){let e;if(ha.test(t)){e={};let n;for(;n=t.match(ha);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[sn(t.slice(2)),e]}function md(t,e){const n=i=>{const s=i.timeStamp||Vi();(fa||s>=n.attached-1)&&qe(yd(i,n.value),e,5,[i])};return n.value=t,n.attached=hd(),n}function yd(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i(s))}else return e}const da=/^on[a-z]/,vd=(t,e,n,i,s=!1,r,o,l,a)=>{e==="class"?rd(t,i,s):e==="style"?od(t,n,i):vi(e)?Rs(e)||_d(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ed(t,e,i,s))?cd(t,e,i,r,o,l,a):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ad(t,e,i,s))};function Ed(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&da.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||da.test(e)&&Se(n)?!1:e in t}const Cd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};rh.props;const bd=xe({patchProp:vd},sd);let pa;function wd(){return pa||(pa=Nh(bd))}const ov=(...t)=>{const e=wd().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Id(i);if(!s)return;const r=e._component;!j(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Id(t){return Se(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const _a=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",pn=t=>_a?Symbol(t):"_vr_"+t,Td=pn("rvlm"),ga=pn("rvd"),pr=pn("r"),ma=pn("rl"),_r=pn("rvl"),_n=typeof window!="undefined";function Sd(t){return t.__esModule||_a&&t[Symbol.toStringTag]==="Module"}const se=Object.assign;function gr(t,e){const n={};for(const i in e){const s=e[i];n[i]=Array.isArray(s)?s.map(t):t(s)}return n}const qn=()=>{},Rd=/\/$/,Nd=t=>t.replace(Rd,"");function mr(t,e,n="/"){let i,s={},r="",o="";const l=e.indexOf("?"),a=e.indexOf("#",l>-1?l:0);return l>-1&&(i=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),s=t(r)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=Od(i!=null?i:e,n),{fullPath:i+(r&&"?")+r+o,path:i,query:s,hash:o}}function xd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ya(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ad(t,e,n){const i=e.matched.length-1,s=n.matched.length-1;return i>-1&&i===s&&gn(e.matched[i],n.matched[s])&&va(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function va(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Pd(t[n],e[n]))return!1;return!0}function Pd(t,e){return Array.isArray(t)?Ea(t,e):Array.isArray(e)?Ea(e,t):t===e}function Ea(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Od(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let s=n.length-1,r,o;for(r=0;r<i.length;r++)if(o=i[r],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}var Vn;(function(t){t.pop="pop",t.push="push"})(Vn||(Vn={}));var Kn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Kn||(Kn={}));function Md(t){if(!t)if(_n){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Nd(t)}const kd=/^[^#]+#/;function Dd(t,e){return t.replace(kd,"#")+e}function Ld(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Ki=()=>({left:window.pageXOffset,top:window.pageYOffset});function Fd(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ld(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ca(t,e){return(history.state?history.state.position-e:-1)+t}const yr=new Map;function Wd(t,e){yr.set(t,e)}function Bd(t){const e=yr.get(t);return yr.delete(t),e}let Hd=()=>location.protocol+"//"+location.host;function ba(t,e){const{pathname:n,search:i,hash:s}=e,r=t.indexOf("#");if(r>-1){let l=s.includes(t.slice(r))?t.slice(r).length:1,a=s.slice(l);return a[0]!=="/"&&(a="/"+a),ya(a,"")}return ya(n,t)+i+s}function Ud(t,e,n,i){let s=[],r=[],o=null;const l=({state:h})=>{const _=ba(t,location),m=n.value,N=e.value;let b=0;if(h){if(n.value=_,e.value=h,o&&o===m){o=null;return}b=N?h.position-N.position:0}else i(_);s.forEach(P=>{P(n.value,m,{delta:b,type:Vn.pop,direction:b?b>0?Kn.forward:Kn.back:Kn.unknown})})};function a(){o=n.value}function c(h){s.push(h);const _=()=>{const m=s.indexOf(h);m>-1&&s.splice(m,1)};return r.push(_),_}function u(){const{history:h}=window;!h.state||h.replaceState(se({},h.state,{scroll:Ki()}),"")}function f(){for(const h of r)h();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:a,listen:c,destroy:f}}function wa(t,e,n,i=!1,s=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:s?Ki():null}}function $d(t){const{history:e,location:n}=window,i={value:ba(t,n)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+a:Hd()+t+a;try{e[u?"replaceState":"pushState"](c,"",h),s.value=c}catch(_){console.error(_),n[u?"replace":"assign"](h)}}function o(a,c){const u=se({},e.state,wa(s.value.back,a,s.value.forward,!0),c,{position:s.value.position});r(a,u,!0),i.value=a}function l(a,c){const u=se({},s.value,e.state,{forward:a,scroll:Ki()});r(u.current,u,!0);const f=se({},wa(i.value,a,null),{position:u.position+1},c);r(a,f,!1),i.value=a}return{location:i,state:s,push:l,replace:o}}function lv(t){t=Md(t);const e=$d(t),n=Ud(t,e.state,e.location,e.replace);function i(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=se({location:"",base:t,go:i,createHref:Dd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function jd(t){return typeof t=="string"||t&&typeof t=="object"}function Ia(t){return typeof t=="string"||typeof t=="symbol"}const bt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ta=pn("nf");var Sa;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sa||(Sa={}));function mn(t,e){return se(new Error,{type:t,[Ta]:!0},e)}function Bt(t,e){return t instanceof Error&&Ta in t&&(e==null||!!(t.type&e))}const Ra="[^/]+?",zd={sensitive:!1,strict:!1,start:!0,end:!0},qd=/[.+*?^${}()[\]/\\]/g;function Vd(t,e){const n=se({},zd,e),i=[];let s=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const h=c[f];let _=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(qd,"\\$&"),_+=40;else if(h.type===1){const{value:m,repeatable:N,optional:b,regexp:P}=h;r.push({name:m,repeatable:N,optional:b});const A=P||Ra;if(A!==Ra){_+=10;try{new RegExp(`(${A})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${m}" (${A}): `+U.message)}}let H=N?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(H=b&&c.length<2?`(?:/${H})`:"/"+H),b&&(H+="?"),s+=H,_+=20,b&&(_+=-8),N&&(_+=-20),A===".*"&&(_+=-50)}u.push(_)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const _=u[h]||"",m=r[h-1];f[m.name]=_&&m.repeatable?_.split("/"):_}return f}function a(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const _ of h)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:N,optional:b}=_,P=m in c?c[m]:"";if(Array.isArray(P)&&!N)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const A=Array.isArray(P)?P.join("/"):P;if(!A)if(b)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);u+=A}}return u}return{re:o,score:i,keys:r,parse:l,stringify:a}}function Kd(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Gd(t,e){let n=0;const i=t.score,s=e.score;for(;n<i.length&&n<s.length;){const r=Kd(i[n],s[n]);if(r)return r;n++}return s.length-i.length}const Yd={type:0,value:""},Qd=/[a-zA-Z0-9_]/;function Xd(t){if(!t)return[[]];if(t==="/")return[[Yd]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,i=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let l=0,a,c="",u="";function f(){!c||(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:a==="/"?(c&&f(),o()):a===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:a==="("?n=2:Qd.test(a)?h():(f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}function Jd(t,e,n){const i=Vd(Xd(t.path),n),s=se(i,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Zd(t,e){const n=[],i=new Map;e=xa({strict:!1,end:!0,sensitive:!1},e);function s(u){return i.get(u)}function r(u,f,h){const _=!h,m=tp(u);m.aliasOf=h&&h.record;const N=xa(e,u),b=[m];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of H)b.push(se({},m,{components:h?h.record.components:m.components,path:U,aliasOf:h?h.record:m}))}let P,A;for(const H of b){const{path:U}=H;if(f&&U[0]!=="/"){const oe=f.record.path,me=oe[oe.length-1]==="/"?"":"/";H.path=f.record.path+(U&&me+U)}if(P=Jd(H,f,N),h?h.alias.push(P):(A=A||P,A!==P&&A.alias.push(P),_&&u.name&&!Na(P)&&o(u.name)),"children"in m){const oe=m.children;for(let me=0;me<oe.length;me++)r(oe[me],P,h&&h.children[me])}h=h||P,a(P)}return A?()=>{o(A)}:qn}function o(u){if(Ia(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let f=0;for(;f<n.length&&Gd(u,n[f])>=0;)f++;n.splice(f,0,u),u.record.name&&!Na(u)&&i.set(u.record.name,u)}function c(u,f){let h,_={},m,N;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw mn(1,{location:u});N=h.record.name,_=se(ep(f.params,h.keys.filter(A=>!A.optional).map(A=>A.name)),u.params),m=h.stringify(_)}else if("path"in u)m=u.path,h=n.find(A=>A.re.test(m)),h&&(_=h.parse(m),N=h.record.name);else{if(h=f.name?i.get(f.name):n.find(A=>A.re.test(f.path)),!h)throw mn(1,{location:u,currentLocation:f});N=h.record.name,_=se({},f.params,u.params),m=h.stringify(_)}const b=[];let P=h;for(;P;)b.unshift(P.record),P=P.parent;return{name:N,path:m,params:_,matched:b,meta:ip(b)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:s}}function ep(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function tp(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:np(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function np(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="boolean"?n:n[i];return e}function Na(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ip(t){return t.reduce((e,n)=>se(e,n.meta),{})}function xa(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const Aa=/#/g,sp=/&/g,rp=/\//g,op=/=/g,lp=/\?/g,Pa=/\+/g,ap=/%5B/g,cp=/%5D/g,Oa=/%5E/g,up=/%60/g,Ma=/%7B/g,fp=/%7C/g,ka=/%7D/g,hp=/%20/g;function vr(t){return encodeURI(""+t).replace(fp,"|").replace(ap,"[").replace(cp,"]")}function dp(t){return vr(t).replace(Ma,"{").replace(ka,"}").replace(Oa,"^")}function Er(t){return vr(t).replace(Pa,"%2B").replace(hp,"+").replace(Aa,"%23").replace(sp,"%26").replace(up,"`").replace(Ma,"{").replace(ka,"}").replace(Oa,"^")}function pp(t){return Er(t).replace(op,"%3D")}function _p(t){return vr(t).replace(Aa,"%23").replace(lp,"%3F")}function gp(t){return t==null?"":_p(t).replace(rp,"%2F")}function Gi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function mp(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Pa," "),o=r.indexOf("="),l=Gi(o<0?r:r.slice(0,o)),a=o<0?null:Gi(r.slice(o+1));if(l in e){let c=e[l];Array.isArray(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function Da(t){let e="";for(let n in t){const i=t[n];if(n=pp(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(i)?i.map(r=>r&&Er(r)):[i&&Er(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function yp(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Array.isArray(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}function Gn(){let t=[];function e(i){return t.push(i),()=>{const s=t.indexOf(i);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function wt(t,e,n,i,s){const r=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const a=f=>{f===!1?l(mn(4,{from:n,to:e})):f instanceof Error?l(f):jd(f)?l(mn(2,{from:e,to:f})):(r&&i.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),o())},c=t.call(i&&i.instances[s],e,n,a);let u=Promise.resolve(c);t.length<3&&(u=u.then(a)),u.catch(f=>l(f))})}function Cr(t,e,n,i){const s=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(vp(l)){const c=(l.__vccOpts||l)[e];c&&s.push(wt(c,n,i,r,o))}else{let a=l();s.push(()=>a.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Sd(c)?c.default:c;r.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&wt(h,n,i,r,o)()}))}}return s}function vp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function La(t){const e=mt(pr),n=mt(ma),i=nt(()=>e.resolve(Bn(t.to))),s=nt(()=>{const{matched:a}=i.value,{length:c}=a,u=a[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(gn.bind(null,u));if(h>-1)return h;const _=Fa(a[c-2]);return c>1&&Fa(u)===_&&f[f.length-1].path!==_?f.findIndex(gn.bind(null,a[c-2])):h}),r=nt(()=>s.value>-1&&wp(n.params,i.value.params)),o=nt(()=>s.value>-1&&s.value===n.matched.length-1&&va(n.params,i.value.params));function l(a={}){return bp(a)?e[Bn(t.replace)?"replace":"push"](Bn(t.to)).catch(qn):Promise.resolve()}return{route:i,href:nt(()=>i.value.href),isActive:r,isExactActive:o,navigate:l}}const Ep=El({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:La,setup(t,{slots:e}){const n=Fn(La(t)),{options:i}=mt(pr),s=nt(()=>({[Wa(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Wa(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:oa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),Cp=Ep;function bp(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function wp(t,e){for(const n in e){const i=e[n],s=t[n];if(typeof i=="string"){if(i!==s)return!1}else if(!Array.isArray(s)||s.length!==i.length||i.some((r,o)=>r!==s[o]))return!1}return!0}function Fa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wa=(t,e,n)=>t!=null?t:e!=null?e:n,Ip=El({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const i=mt(_r),s=nt(()=>t.route||i.value),r=mt(ga,0),o=nt(()=>s.value.matched[r]);ki(ga,r+1),ki(Td,o),ki(_r,s);const l=zf();return qi(()=>[l.value,o.value,t.name],([a,c,u],[f,h,_])=>{c&&(c.instances[u]=a,h&&h!==c&&a&&a===f&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),a&&c&&(!h||!gn(c,h)||!f)&&(c.enterCallbacks[u]||[]).forEach(m=>m(a))},{flush:"post"}),()=>{const a=s.value,c=o.value,u=c&&c.components[t.name],f=t.name;if(!u)return Ba(n.default,{Component:u,route:a});const h=c.props[t.name],_=h?h===!0?a.params:typeof h=="function"?h(a):h:null,N=oa(u,se({},_,e,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(c.instances[f]=null)},ref:l}));return Ba(n.default,{Component:N,route:a})||N}}});function Ba(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Tp=Ip;function av(t){const e=Zd(t.routes,t),n=t.parseQuery||mp,i=t.stringifyQuery||Da,s=t.history,r=Gn(),o=Gn(),l=Gn(),a=qf(bt);let c=bt;_n&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gr.bind(null,y=>""+y),f=gr.bind(null,gp),h=gr.bind(null,Gi);function _(y,M){let R,k;return Ia(y)?(R=e.getRecordMatcher(y),k=M):k=y,e.addRoute(k,R)}function m(y){const M=e.getRecordMatcher(y);M&&e.removeRoute(M)}function N(){return e.getRoutes().map(y=>y.record)}function b(y){return!!e.getRecordMatcher(y)}function P(y,M){if(M=se({},M||a.value),typeof y=="string"){const B=mr(n,y,M.path),d=e.resolve({path:B.path},M),p=s.createHref(B.fullPath);return se(B,d,{params:h(d.params),hash:Gi(B.hash),redirectedFrom:void 0,href:p})}let R;if("path"in y)R=se({},y,{path:mr(n,y.path,M.path).path});else{const B=se({},y.params);for(const d in B)B[d]==null&&delete B[d];R=se({},y,{params:f(y.params)}),M.params=f(M.params)}const k=e.resolve(R,M),ne=y.hash||"";k.params=u(h(k.params));const ae=xd(i,se({},y,{hash:dp(ne),path:k.path})),q=s.createHref(ae);return se({fullPath:ae,hash:ne,query:i===Da?yp(y.query):y.query||{}},k,{redirectedFrom:void 0,href:q})}function A(y){return typeof y=="string"?mr(n,y,a.value.path):se({},y)}function H(y,M){if(c!==y)return mn(8,{from:M,to:y})}function U(y){return V(y)}function oe(y){return U(se(A(y),{replace:!0}))}function me(y){const M=y.matched[y.matched.length-1];if(M&&M.redirect){const{redirect:R}=M;let k=typeof R=="function"?R(y):R;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=A(k):{path:k},k.params={}),se({query:y.query,hash:y.hash,params:y.params},k)}}function V(y,M){const R=c=P(y),k=a.value,ne=y.state,ae=y.force,q=y.replace===!0,B=me(R);if(B)return V(se(A(B),{state:ne,force:ae,replace:q}),M||R);const d=R;d.redirectedFrom=M;let p;return!ae&&Ad(i,k,R)&&(p=mn(16,{to:d,from:k}),Zt(k,k,!0,!1)),(p?Promise.resolve(p):ee(d,k)).catch(g=>Bt(g)?g:le(g,d,k)).then(g=>{if(g){if(Bt(g,2))return V(se(A(g.to),{state:ne,force:ae,replace:q}),M||d)}else g=Ne(d,k,!0,q,ne);return Te(d,k,g),g})}function J(y,M){const R=H(y,M);return R?Promise.reject(R):Promise.resolve()}function ee(y,M){let R;const[k,ne,ae]=Sp(y,M);R=Cr(k.reverse(),"beforeRouteLeave",y,M);for(const B of k)B.leaveGuards.forEach(d=>{R.push(wt(d,y,M))});const q=J.bind(null,y,M);return R.push(q),yn(R).then(()=>{R=[];for(const B of r.list())R.push(wt(B,y,M));return R.push(q),yn(R)}).then(()=>{R=Cr(ne,"beforeRouteUpdate",y,M);for(const B of ne)B.updateGuards.forEach(d=>{R.push(wt(d,y,M))});return R.push(q),yn(R)}).then(()=>{R=[];for(const B of y.matched)if(B.beforeEnter&&!M.matched.includes(B))if(Array.isArray(B.beforeEnter))for(const d of B.beforeEnter)R.push(wt(d,y,M));else R.push(wt(B.beforeEnter,y,M));return R.push(q),yn(R)}).then(()=>(y.matched.forEach(B=>B.enterCallbacks={}),R=Cr(ae,"beforeRouteEnter",y,M),R.push(q),yn(R))).then(()=>{R=[];for(const B of o.list())R.push(wt(B,y,M));return R.push(q),yn(R)}).catch(B=>Bt(B,8)?B:Promise.reject(B))}function Te(y,M,R){for(const k of l.list())k(y,M,R)}function Ne(y,M,R,k,ne){const ae=H(y,M);if(ae)return ae;const q=M===bt,B=_n?history.state:{};R&&(k||q?s.replace(y.fullPath,se({scroll:q&&B&&B.scroll},ne)):s.push(y.fullPath,ne)),a.value=y,Zt(y,M,R,q),Ue()}let Pe;function pt(){Pe=s.listen((y,M,R)=>{const k=P(y),ne=me(k);if(ne){V(se(ne,{replace:!0}),k).catch(qn);return}c=k;const ae=a.value;_n&&Wd(Ca(ae.fullPath,R.delta),Ki()),ee(k,ae).catch(q=>Bt(q,4|8)?q:Bt(q,2)?(V(q.to,k).then(B=>{Bt(B,4|16)&&!R.delta&&R.type===Vn.pop&&s.go(-1,!1)}).catch(qn),Promise.reject()):(R.delta&&s.go(-R.delta,!1),le(q,k,ae))).then(q=>{q=q||Ne(k,ae,!1),q&&(R.delta?s.go(-R.delta,!1):R.type===Vn.pop&&Bt(q,4|16)&&s.go(-1,!1)),Te(k,ae,q)}).catch(qn)})}let Xt=Gn(),Jt=Gn(),ye;function le(y,M,R){Ue(y);const k=Jt.list();return k.length?k.forEach(ne=>ne(y,M,R)):console.error(y),Promise.reject(y)}function te(){return ye&&a.value!==bt?Promise.resolve():new Promise((y,M)=>{Xt.add([y,M])})}function Ue(y){ye||(ye=!0,pt(),Xt.list().forEach(([M,R])=>y?R(y):M()),Xt.reset())}function Zt(y,M,R,k){const{scrollBehavior:ne}=t;if(!_n||!ne)return Promise.resolve();const ae=!R&&Bd(Ca(y.fullPath,0))||(k||!R)&&history.state&&history.state.scroll||null;return Xl().then(()=>ne(y,M,ae)).then(q=>q&&Fd(q)).catch(q=>le(q,y,M))}const lt=y=>s.go(y);let Ze;const $e=new Set;return{currentRoute:a,addRoute:_,removeRoute:m,hasRoute:b,getRoutes:N,resolve:P,options:t,push:U,replace:oe,go:lt,back:()=>lt(-1),forward:()=>lt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Jt.add,isReady:te,install(y){const M=this;y.component("RouterLink",Cp),y.component("RouterView",Tp),y.config.globalProperties.$router=M,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Bn(a)}),_n&&!Ze&&a.value===bt&&(Ze=!0,U(s.location).catch(ne=>{}));const R={};for(const ne in bt)R[ne]=nt(()=>a.value[ne]);y.provide(pr,M),y.provide(ma,Fn(R)),y.provide(_r,a);const k=y.unmount;$e.add(y),y.unmount=function(){$e.delete(y),$e.size<1&&(c=bt,Pe&&Pe(),a.value=bt,Ze=!1,ye=!1),k()}}}}function yn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Sp(t,e){const n=[],i=[],s=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>gn(c,l))?i.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>gn(c,a))||s.push(a))}return[n,i,s]}/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function br(t){return typeof window.Node=="object"?t instanceof window.Node:t!==null&&typeof t=="object"&&typeof t.nodeType=="number"&&typeof t.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function Rp(t){var e=Object.prototype.toString.call(t),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?t instanceof window.NodeList:t!==null&&typeof t=="object"&&typeof t.length=="number"&&n.test(e)&&(t.length===0||br(t[0]))}/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function Yn(t,e){if(e===void 0&&(e=document),t instanceof Array)return t.filter(br);if(br(t))return[t];if(Rp(t))return Array.prototype.slice.call(t);if(typeof t=="string")try{var n=e.querySelectorAll(t);return Array.prototype.slice.call(n)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function wr(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(t.length===16)return t;if(t.length===6){var e=It();return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}throw new RangeError("Expected array with either 6 or 16 values.")}function It(){for(var t=[],e=0;e<16;e++)e%5==0?t.push(1):t.push(0);return t}function Np(t,e){for(var n=wr(t),i=wr(e),s=[],r=0;r<4;r++)for(var o=[n[r],n[r+4],n[r+8],n[r+12]],l=0;l<4;l++){var a=l*4,c=[i[a],i[a+1],i[a+2],i[a+3]],u=o[0]*c[0]+o[1]*c[1]+o[2]*c[2]+o[3]*c[3];s[r+a]=u}return s}function xp(t){if(typeof t=="string"){var e=t.match(/matrix(3d)?\(([^)]+)\)/);if(e){var n=e[2].split(", ").map(parseFloat);return wr(n)}}return It()}function Ap(t){var e=Math.PI/180*t,n=It();return n[5]=n[10]=Math.cos(e),n[6]=n[9]=Math.sin(e),n[9]*=-1,n}function Pp(t){var e=Math.PI/180*t,n=It();return n[0]=n[10]=Math.cos(e),n[2]=n[8]=Math.sin(e),n[2]*=-1,n}function Op(t){var e=Math.PI/180*t,n=It();return n[0]=n[5]=Math.cos(e),n[1]=n[4]=Math.sin(e),n[4]*=-1,n}function Ha(t,e){var n=It();return n[0]=t,n[5]=typeof e=="number"?e:t,n}function Mp(t){var e=It();return e[12]=t,e}function kp(t){var e=It();return e[13]=t,e}/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var Ua=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout(function(){return Ua(e)},0)}}(),Dp=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Ua;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var $a={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function Lp(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function Fp(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var Qn={success:Fp,failure:Lp};function Yi(t){return t!==null&&t instanceof Object&&(t.constructor===Object||Object.prototype.toString.call(t)==="[object Object]")}function he(t,e){if(Yi(t)){var n=Object.keys(t);return n.forEach(function(i){return e(t[i],i,t)})}if(t instanceof Array)return t.forEach(function(i,s){return e(i,s,t)});throw new TypeError("Expected either an array or object literal.")}function Ht(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+t;e.forEach(function(s){return i+=`
 \u2014 `+s}),console.log(i,"color: #ea654b;")}}function ja(){var t=this,e=function(){return{active:[],stale:[]}},n=e(),i=e(),s=e();try{he(Yn("[data-sr-id]"),function(r){var o=parseInt(r.getAttribute("data-sr-id"));n.active.push(o)})}catch(r){throw r}he(this.store.elements,function(r){n.active.indexOf(r.id)===-1&&n.stale.push(r.id)}),he(n.stale,function(r){return delete t.store.elements[r]}),he(this.store.elements,function(r){s.active.indexOf(r.containerId)===-1&&s.active.push(r.containerId),r.hasOwnProperty("sequence")&&i.active.indexOf(r.sequence.id)===-1&&i.active.push(r.sequence.id)}),he(this.store.containers,function(r){s.active.indexOf(r.id)===-1&&s.stale.push(r.id)}),he(s.stale,function(r){var o=t.store.containers[r].node;o.removeEventListener("scroll",t.delegate),o.removeEventListener("resize",t.delegate),delete t.store.containers[r]}),he(this.store.sequences,function(r){i.active.indexOf(r.id)===-1&&i.stale.push(r.id)}),he(i.stale,function(r){return delete t.store.sequences[r]})}var za=function(){var t={},e=document.documentElement.style;function n(i,s){if(s===void 0&&(s=e),i&&typeof i=="string"){if(t[i])return t[i];if(typeof s[i]=="string")return t[i]=i;if(typeof s["-webkit-"+i]=="string")return t[i]="-webkit-"+i;throw new RangeError('Unable to find "'+i+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return t={}},n}();function Wp(t){var e=window.getComputedStyle(t.node),n=e.position,i=t.config,s={},r=t.node.getAttribute("style")||"",o=r.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];s.computed=o?o.map(function(J){return J.trim()}).join("; ")+";":"",s.generated=o.some(function(J){return J.match(/visibility\s?:\s?visible/i)})?s.computed:o.concat(["visibility: visible"]).map(function(J){return J.trim()}).join("; ")+";";var l=parseFloat(e.opacity),a=isNaN(parseFloat(i.opacity))?parseFloat(e.opacity):parseFloat(i.opacity),c={computed:l!==a?"opacity: "+l+";":"",generated:l!==a?"opacity: "+a+";":""},u=[];if(parseFloat(i.distance)){var f=i.origin==="top"||i.origin==="bottom"?"Y":"X",h=i.distance;(i.origin==="top"||i.origin==="left")&&(h=/^-/.test(h)?h.substr(1):"-"+h);var _=h.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),m=_[0],N=_[1];switch(N){case"em":h=parseInt(e.fontSize)*m;break;case"px":h=m;break;case"%":h=f==="Y"?t.node.getBoundingClientRect().height*m/100:t.node.getBoundingClientRect().width*m/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}f==="Y"?u.push(kp(h)):u.push(Mp(h))}i.rotate.x&&u.push(Ap(i.rotate.x)),i.rotate.y&&u.push(Pp(i.rotate.y)),i.rotate.z&&u.push(Op(i.rotate.z)),i.scale!==1&&(i.scale===0?u.push(Ha(2e-4)):u.push(Ha(i.scale)));var b={};if(u.length){b.property=za("transform"),b.computed={raw:e[b.property],matrix:xp(e[b.property])},u.unshift(b.computed.matrix);var P=u.reduce(Np);b.generated={initial:b.property+": matrix3d("+P.join(", ")+");",final:b.property+": matrix3d("+b.computed.matrix.join(", ")+");"}}else b.generated={initial:"",final:""};var A={};if(c.generated||b.generated.initial){A.property=za("transition"),A.computed=e[A.property],A.fragments=[];var H=i.delay,U=i.duration,oe=i.easing;c.generated&&A.fragments.push({delayed:"opacity "+U/1e3+"s "+oe+" "+H/1e3+"s",instant:"opacity "+U/1e3+"s "+oe+" 0s"}),b.generated.initial&&A.fragments.push({delayed:b.property+" "+U/1e3+"s "+oe+" "+H/1e3+"s",instant:b.property+" "+U/1e3+"s "+oe+" 0s"});var me=A.computed&&!A.computed.match(/all 0s|none 0s/);me&&A.fragments.unshift({delayed:A.computed,instant:A.computed});var V=A.fragments.reduce(function(J,ee,Te){return J.delayed+=Te===0?ee.delayed:", "+ee.delayed,J.instant+=Te===0?ee.instant:", "+ee.instant,J},{delayed:"",instant:""});A.generated={delayed:A.property+": "+V.delayed+";",instant:A.property+": "+V.instant+";"}}else A.generated={delayed:"",instant:""};return{inline:s,opacity:c,position:n,transform:b,transition:A}}function vn(t,e){e.split(";").forEach(function(n){var i=n.split(":"),s=i[0],r=i.slice(1);s&&r&&(t.style[s.trim()]=r.join(":"))})}function Ir(t){var e=this,n;try{he(Yn(t),function(i){var s=i.getAttribute("data-sr-id");if(s!==null){n=!0;var r=e.store.elements[s];r.callbackTimer&&window.clearTimeout(r.callbackTimer.clock),vn(r.node,r.styles.inline.generated),i.removeAttribute("data-sr-id"),delete e.store.elements[s]}})}catch(i){return Ht.call(this,"Clean failed.",i.message)}if(n)try{ja.call(this)}catch(i){return Ht.call(this,"Clean failed.",i.message)}}function Bp(){var t=this;he(this.store.elements,function(e){vn(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),he(this.store.containers,function(e){var n=e.node===document.documentElement?window:e.node;n.removeEventListener("scroll",t.delegate),n.removeEventListener("resize",t.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function Xn(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];if(Yi(t))return he(e,function(i){he(i,function(s,r){Yi(s)?((!t[r]||!Yi(t[r]))&&(t[r]={}),Xn(t[r],s)):t[r]=s})}),t;throw new TypeError("Target must be an object literal.")}function Qi(t){return t===void 0&&(t=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(t)}var Tr=function(){var t=0;return function(){return t++}}();function qa(){var t=this;ja.call(this),he(this.store.elements,function(e){var n=[e.styles.inline.generated];e.visible?(n.push(e.styles.opacity.computed),n.push(e.styles.transform.generated.final),e.revealed=!0):(n.push(e.styles.opacity.generated),n.push(e.styles.transform.generated.initial),e.revealed=!1),vn(e.node,n.filter(function(i){return i!==""}).join(" "))}),he(this.store.containers,function(e){var n=e.node===document.documentElement?window:e.node;n.addEventListener("scroll",t.delegate),n.addEventListener("resize",t.delegate)}),this.delegate(),this.initTimeout=null}function Jn(t,e){e===void 0&&(e={});var n=e.pristine||this.pristine,i=t.config.useDelay==="always"||t.config.useDelay==="onload"&&n||t.config.useDelay==="once"&&!t.seen,s=t.visible&&!t.revealed,r=!t.visible&&t.revealed&&t.config.reset;if(e.reveal||s)return Hp.call(this,t,i);if(e.reset||r)return Up.call(this,t)}function Hp(t,e){var n=[t.styles.inline.generated,t.styles.opacity.computed,t.styles.transform.generated.final];e?n.push(t.styles.transition.generated.delayed):n.push(t.styles.transition.generated.instant),t.revealed=t.seen=!0,vn(t.node,n.filter(function(i){return i!==""}).join(" ")),Va.call(this,t,e)}function Up(t){var e=[t.styles.inline.generated,t.styles.opacity.generated,t.styles.transform.generated.initial,t.styles.transition.generated.instant];t.revealed=!1,vn(t.node,e.filter(function(n){return n!==""}).join(" ")),Va.call(this,t)}function Va(t,e){var n=this,i=e?t.config.duration+t.config.delay:t.config.duration,s=t.revealed?t.config.beforeReveal:t.config.beforeReset,r=t.revealed?t.config.afterReveal:t.config.afterReset,o=0;t.callbackTimer&&(o=Date.now()-t.callbackTimer.start,window.clearTimeout(t.callbackTimer.clock)),s(t.node),t.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){r(t.node),t.callbackTimer=null,t.revealed&&!t.config.reset&&t.config.cleanup&&Ir.call(n,t.node)},i-o)}}function Ka(t,e){if(e===void 0&&(e=this.pristine),!t.visible&&t.revealed&&t.config.reset)return Jn.call(this,t,{reset:!0});var n=this.store.sequences[t.sequence.id],i=t.sequence.index;if(n){var s=new Ga(n,"visible",this.store),r=new Ga(n,"revealed",this.store);if(n.models={visible:s,revealed:r},!r.body.length){var o=n.members[s.body[0]],l=this.store.elements[o];if(l)return Xi.call(this,n,s.body[0],-1,e),Xi.call(this,n,s.body[0],1,e),Jn.call(this,l,{reveal:!0,pristine:e})}if(!n.blocked.head&&i===[].concat(r.head).pop()&&i>=[].concat(s.body).shift())return Xi.call(this,n,i,-1,e),Jn.call(this,t,{reveal:!0,pristine:e});if(!n.blocked.foot&&i===[].concat(r.foot).shift()&&i<=[].concat(s.body).pop())return Xi.call(this,n,i,1,e),Jn.call(this,t,{reveal:!0,pristine:e})}}function $p(t){var e=Math.abs(t);if(!isNaN(e))this.id=Tr(),this.interval=Math.max(e,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function Ga(t,e,n){var i=this;this.head=[],this.body=[],this.foot=[],he(t.members,function(s,r){var o=n.elements[s];o&&o[e]&&i.body.push(r)}),this.body.length&&he(t.members,function(s,r){var o=n.elements[s];o&&!o[e]&&(r<i.body[0]?i.head.push(r):i.foot.push(r))})}function Xi(t,e,n,i){var s=this,r=["head",null,"foot"][1+n],o=t.members[e+n],l=this.store.elements[o];t.blocked[r]=!0,setTimeout(function(){t.blocked[r]=!1,l&&Ka.call(s,l,i)},t.interval)}function Ya(t,e,n){var i=this;e===void 0&&(e={}),n===void 0&&(n=!1);var s=[],r,o=e.interval||$a.interval;try{o&&(r=new $p(o));var l=Yn(t);if(!l.length)throw new Error("Invalid reveal target.");var a=l.reduce(function(c,u){var f={},h=u.getAttribute("data-sr-id");h?(Xn(f,i.store.elements[h]),vn(f.node,f.styles.inline.computed)):(f.id=Tr(),f.node=u,f.seen=!1,f.revealed=!1,f.visible=!1);var _=Xn({},f.config||i.defaults,e);if(!_.mobile&&Qi()||!_.desktop&&!Qi())return h&&Ir.call(i,f),c;var m=Yn(_.container)[0];if(!m)throw new Error("Invalid container.");if(!m.contains(u))return c;var N;return N=jp(m,s,i.store.containers),N===null&&(N=Tr(),s.push({id:N,node:m})),f.config=_,f.containerId=N,f.styles=Wp(f),r&&(f.sequence={id:r.id,index:r.members.length},r.members.push(f.id)),c.push(f),c},[]);he(a,function(c){i.store.elements[c.id]=c,c.node.setAttribute("data-sr-id",c.id)})}catch(c){return Ht.call(this,"Reveal failed.",c.message)}he(s,function(c){i.store.containers[c.id]={id:c.id,node:c.node}}),r&&(this.store.sequences[r.id]=r),n!==!0&&(this.store.history.push({target:t,options:e}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(qa.bind(this),0))}function jp(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];var i=null;return he(e,function(s){he(s,function(r){i===null&&r.node===t&&(i=r.id)})}),i}function zp(){var t=this;he(this.store.history,function(e){Ya.call(t,e.target,e.options,!0)}),qa.call(this)}var qp=function(t){return(t>0)-(t<0)||+t},Qa=Math.sign||qp;function Xa(t,e){var n=e?t.node.clientHeight:t.node.offsetHeight,i=e?t.node.clientWidth:t.node.offsetWidth,s=0,r=0,o=t.node;do isNaN(o.offsetTop)||(s+=o.offsetTop),isNaN(o.offsetLeft)||(r+=o.offsetLeft),o=o.offsetParent;while(o);return{bounds:{top:s,right:r+i,bottom:s+n,left:r},height:n,width:i}}function Vp(t){var e,n;return t.node===document.documentElement?(e=window.pageYOffset,n=window.pageXOffset):(e=t.node.scrollTop,n=t.node.scrollLeft),{top:e,left:n}}function Kp(t){t===void 0&&(t={});var e=this.store.containers[t.containerId];if(!!e){var n=Math.max(0,Math.min(1,t.config.viewFactor)),i=t.config.viewOffset,s={top:t.geometry.bounds.top+t.geometry.height*n,right:t.geometry.bounds.right-t.geometry.width*n,bottom:t.geometry.bounds.bottom-t.geometry.height*n,left:t.geometry.bounds.left+t.geometry.width*n},r={top:e.geometry.bounds.top+e.scroll.top+i.top,right:e.geometry.bounds.right+e.scroll.left-i.right,bottom:e.geometry.bounds.bottom+e.scroll.top-i.bottom,left:e.geometry.bounds.left+e.scroll.left+i.left};return s.top<r.bottom&&s.right>r.left&&s.bottom>r.top&&s.left<r.right||t.styles.position==="fixed"}}function Gp(t,e){var n=this;t===void 0&&(t={type:"init"}),e===void 0&&(e=this.store.elements),Dp(function(){var i=t.type==="init"||t.type==="resize";he(n.store.containers,function(s){i&&(s.geometry=Xa.call(n,s,!0));var r=Vp.call(n,s);s.scroll&&(s.direction={x:Qa(r.left-s.scroll.left),y:Qa(r.top-s.scroll.top)}),s.scroll=r}),he(e,function(s){(i||s.geometry===void 0)&&(s.geometry=Xa.call(n,s)),s.visible=Kp.call(n,s)}),he(e,function(s){s.sequence?Ka.call(n,s):Jn.call(n,s)}),n.pristine=!1})}function Yp(){var t=document.documentElement.style;return"transform"in t||"WebkitTransform"in t}function Qp(){var t=document.documentElement.style;return"transition"in t||"WebkitTransition"in t}var Xp="4.0.9",Sr,Rr,Nr,xr,Ar,Tt,Pr,Or;function En(t){t===void 0&&(t={});var e=typeof this=="undefined"||Object.getPrototypeOf(this)!==En.prototype;if(e)return new En(t);if(!En.isSupported())return Ht.call(this,"Instantiation failed.","This browser is not supported."),Qn.failure();var n;try{n=Tt?Xn({},Tt,t):Xn({},$a,t)}catch(s){return Ht.call(this,"Invalid configuration.",s.message),Qn.failure()}try{var i=Yn(n.container)[0];if(!i)throw new Error("Invalid container.")}catch(s){return Ht.call(this,s.message),Qn.failure()}return Tt=n,!Tt.mobile&&Qi()||!Tt.desktop&&!Qi()?(Ht.call(this,"This device is disabled.","desktop: "+Tt.desktop,"mobile: "+Tt.mobile),Qn.failure()):(Qn.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,Sr=Sr||Gp.bind(this),Rr=Rr||Bp.bind(this),Nr=Nr||Ya.bind(this),xr=xr||Ir.bind(this),Ar=Ar||zp.bind(this),Object.defineProperty(this,"delegate",{get:function(){return Sr}}),Object.defineProperty(this,"destroy",{get:function(){return Rr}}),Object.defineProperty(this,"reveal",{get:function(){return Nr}}),Object.defineProperty(this,"clean",{get:function(){return xr}}),Object.defineProperty(this,"sync",{get:function(){return Ar}}),Object.defineProperty(this,"defaults",{get:function(){return Tt}}),Object.defineProperty(this,"version",{get:function(){return Xp}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),Or||(Or=this))}En.isSupported=function(){return Yp()&&Qp()};Object.defineProperty(En,"debug",{get:function(){return Pr||!1},set:function(t){return Pr=typeof t=="boolean"?t:Pr}});En();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Jp(t,e,n,i){function s(r){return r instanceof n?r:new n(function(o){o(r)})}return new(n||(n=Promise))(function(r,o){function l(u){try{c(i.next(u))}catch(f){o(f)}}function a(u){try{c(i.throw(u))}catch(f){o(f)}}function c(u){u.done?r(u.value):s(u.value).then(l,a)}c((i=i.apply(t,e||[])).next())})}function Zp(t,e){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,s,r,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(c){return function(u){return a([c,u])}}function a(c){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,s&&(r=c[0]&2?s.return:c[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,c[1])).done)return r;switch(s=0,r&&(c=[c[0]&2,r.value]),c[0]){case 0:case 1:r=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,s=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(r=n.trys,!(r=r.length>0&&r[r.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){n.label=c[1];break}if(c[0]===6&&n.label<r[1]){n.label=r[1],r=c;break}if(r&&n.label<r[2]){n.label=r[2],n.ops.push(c);break}r[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],s=0}finally{i=r=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Mr(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ji(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var i=n.call(t),s,r=[],o;try{for(;(e===void 0||e-- >0)&&!(s=i.next()).done;)r.push(s.value)}catch(l){o={error:l}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return r}function Ja(t,e,n){if(n||arguments.length===2)for(var i=0,s=e.length,r;i<s;i++)(r||!(i in e))&&(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw Cn(e)},Cn=function(t){return new Error("Firebase Database ("+Za.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)==55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)==56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},e_=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],a=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(a>>10)),e[i++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},kr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,u=r>>2,f=(r&3)<<4|l>>4;let h=(l&15)<<2|c>>6,_=c&63;a||(_=64,o||(h=64)),i.push(n[u],n[f],n[h],n[_])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ec(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):e_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||c==null||f==null)throw Error();const h=r<<2|l>>4;if(i.push(h),c!==64){const _=l<<4&240|c>>2;if(i.push(_),f!==64){const m=c<<6&192|f;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},t_=function(t){const e=ec(t);return kr.encodeByteArray(e,!0)},tc=function(t){try{return kr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(t){return nc(void 0,t)}function nc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!i_(n)||(t[n]=nc(t[n],e[n]));return t}function i_(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ic(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(s_())}function r_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sc(){return Za.NODE_ADMIN===!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="FirebaseError";class Lr extends Error{constructor(e,n,i){super(n);this.code=e,this.customData=i,this.name=o_,Object.setPrototypeOf(this,Lr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rc.prototype.create)}}class rc{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?l_(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Lr(s,l,i)}}function l_(t,e){return t.replace(a_,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const a_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t){return JSON.parse(t)}function be(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=Zn(tc(r[0])||""),n=Zn(tc(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},c_=function(t){const e=oc(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},u_=function(t){const e=oc(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function bn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function lc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zi(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Fr(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(ac(r)&&ac(o)){if(!Fr(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function ac(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)i[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const h=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):f<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const h=(s<<5|s>>>27)+c+a+u+i[f]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function cc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,S(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},es=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t){return t&&t._delegate?t._delegate:t}var ns=function(){function t(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p_=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var i=new Dr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{var s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,i;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(g_(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}try{for(var s=Mr(this.instancesDeferred.entries()),r=s.next();!r.done;r=s.next()){var o=Ji(r.value,2),l=o[0],a=o[1],c=this.normalizeInstanceIdentifier(l);try{var u=this.getOrInitializeService({instanceIdentifier:c});a.resolve(u)}catch{}}}catch(f){n={error:f}}finally{try{r&&!r.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=Ut),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return Jp(this,void 0,void 0,function(){var e;return Zp(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Ja(Ja([],Ji(e.filter(function(i){return"INTERNAL"in i}).map(function(i){return i.INTERNAL.delete()}))),Ji(e.filter(function(i){return"_delete"in i}).map(function(i){return i._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=Ut),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=Ut),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,i;e===void 0&&(e={});var s=e.options,r=s===void 0?{}:s,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var l=this.getOrInitializeService({instanceIdentifier:o,options:r});try{for(var a=Mr(this.instancesDeferred.entries()),c=a.next();!c.done;c=a.next()){var u=Ji(c.value,2),f=u[0],h=u[1],_=this.normalizeInstanceIdentifier(f);o===_&&h.resolve(l)}}catch(m){n={error:m}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}return l},t.prototype.onInit=function(e,n){var i,s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);var o=this.instances.get(s);return o&&e(o,s),function(){r.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var i,s,r=this.onInitCallbacks.get(n);if(!!r)try{for(var o=Mr(r),l=o.next();!l.done;l=o.next()){var a=l.value;try{a(e,n)}catch{}}}catch(c){i={error:c}}finally{try{l&&!l.done&&(s=o.return)&&s.call(o)}finally{if(i)throw i.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,i=e.options,s=i===void 0?{}:i,r=this.instances.get(n);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:__(n),options:s}),this.instances.set(n,r),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(r,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,r)}catch{}return r||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=Ut),this.component?this.component.multipleInstances?e:Ut:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function __(t){return t===Ut?void 0:t}function g_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var m_=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new p_(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const y_={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},v_=ue.INFO,E_={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},C_=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=E_[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class uc{constructor(e){this.name=e,this._logLevel=v_,this._logHandler=C_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?y_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(w_(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function w_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wr="@firebase/app",fc="0.7.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new uc("@firebase/app"),I_="@firebase/app-compat",T_="@firebase/analytics-compat",S_="@firebase/analytics",R_="@firebase/app-check-compat",N_="@firebase/app-check",x_="@firebase/auth",A_="@firebase/auth-compat",P_="@firebase/database",O_="@firebase/database-compat",M_="@firebase/functions",k_="@firebase/functions-compat",D_="@firebase/installations",L_="@firebase/installations-compat",F_="@firebase/messaging",W_="@firebase/messaging-compat",B_="@firebase/performance",H_="@firebase/performance-compat",U_="@firebase/remote-config",$_="@firebase/remote-config-compat",j_="@firebase/storage",z_="@firebase/storage-compat",q_="@firebase/firestore",V_="@firebase/firestore-compat",K_="firebase",G_="9.1.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="[DEFAULT]",Y_={[Wr]:"fire-core",[I_]:"fire-core-compat",[S_]:"fire-analytics",[T_]:"fire-analytics-compat",[N_]:"fire-app-check",[R_]:"fire-app-check-compat",[x_]:"fire-auth",[A_]:"fire-auth-compat",[P_]:"fire-rtdb",[O_]:"fire-rtdb-compat",[M_]:"fire-fn",[k_]:"fire-fn-compat",[D_]:"fire-iid",[L_]:"fire-iid-compat",[F_]:"fire-fcm",[W_]:"fire-fcm-compat",[B_]:"fire-perf",[H_]:"fire-perf-compat",[U_]:"fire-rc",[$_]:"fire-rc-compat",[j_]:"fire-gcs",[z_]:"fire-gcs-compat",[q_]:"fire-fst",[V_]:"fire-fst-compat","fire-js":"fire-js",[K_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new Map,Hr=new Map;function Q_(t,e){try{t.container.addComponent(e)}catch(n){Br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ur(t){const e=t.name;if(Hr.has(e))return Br.debug(`There were multiple attempts to register component ${e}.`),!1;Hr.set(e,t);for(const n of is.values())Q_(n,t);return!0}function X_(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},ss=new rc("app","Firebase",J_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ss.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=G_;function cv(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:hc,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw ss.create("bad-app-name",{appName:String(i)});const s=is.get(i);if(s){if(Fr(t,s.options)&&Fr(n,s.config))return s;throw ss.create("duplicate-app",{appName:i})}const r=new m_(i);for(const l of Hr.values())r.addComponent(l);const o=new Z_(t,n,r);return is.set(i,o),o}function tg(t=hc){const e=is.get(t);if(!e)throw ss.create("no-app",{appName:t});return e}function wn(t,e,n){var i;let s=(i=Y_[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Br.warn(l.join(" "));return}Ur(new ns(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t){Ur(new ns("platform-logger",e=>new b_(e),"PRIVATE")),wn(Wr,fc,t),wn(Wr,fc,"esm2017"),wn("fire-js","")}ng("");const dc="@firebase/database",pc="0.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _c="";function ig(t){_c=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),be(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new sg(e)}}catch{}return new rg},$t=gc("localStorage"),$r=gc("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new uc("@firebase/database"),og=function(){let t=1;return function(){return t++}}(),mc=function(t){const e=d_(t),n=new h_;n.update(e);const i=n.digest();return kr.encodeByteArray(i)},ei=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ei.apply(null,i):typeof i=="object"?e+=be(i):e+=i,e+=" "}return e};let jt=null,yc=!0;const lg=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(In.logLevel=ue.VERBOSE,jt=In.log.bind(In),e&&$r.set("logging_enabled",!0)):typeof t=="function"?jt=t:(jt=null,$r.remove("logging_enabled"))},Ae=function(...t){if(yc===!0&&(yc=!1,jt===null&&$r.get("logging_enabled")===!0&&lg(!0)),jt){const e=ei.apply(null,t);jt(e)}},ti=function(t){return function(...e){Ae(t,...e)}},jr=function(...t){const e="FIREBASE INTERNAL ERROR: "+ei(...t);In.error(e)},zt=function(...t){const e=`FIREBASE FATAL ERROR: ${ei(...t)}`;throw In.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+ei(...t);In.warn(e)},ag=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},vc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},cg=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Tn="[MIN_NAME]",qt="[MAX_NAME]",Sn=function(t,e){if(t===e)return 0;if(t===Tn||e===qt)return-1;if(e===Tn||t===qt)return 1;{const n=bc(t),i=bc(e);return n!==null?i!==null?n-i==0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},ug=function(t,e){return t===e?0:t<e?-1:1},ni=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+be(e))},zr=function(t){if(typeof t!="object"||t===null)return be(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=be(e[i]),n+=":",n+=zr(t[e[i]]);return n+="}",n},Ec=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Ve(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Cc=function(t){S(!vc(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,l,a;t===0?(r=0,o=0,s=1/t==-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=l+i,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let f="";for(a=0;a<64;a+=8){let h=parseInt(u.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},fg=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},hg=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},dg=new RegExp("^-?(0*)\\d{1,10}$"),pg=-2147483648,_g=2147483647,bc=function(t){if(dg.test(t)){const e=Number(t);if(e>=pg&&e<=_g)return e}return null},ii=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},gg=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},si=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class qr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="5",wc="v",Ic="s",Tc="r",Sc="f",Rc=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nc="ls",vg="p",Kr="ac",xc="websocket",Ac="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n,i,s,r=!1,o="",l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$t.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$t.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Cg(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Pc(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let i;if(e===xc)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ac)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Cg(t)&&(n.ns=t.namespace);const s=[];return Ve(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.counters_={}}incrementCounter(e,n=1){ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return n_(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr={},Yr={};function Qr(t){const e=t.toString();return Gr[e]||(Gr[e]=new bg),Gr[e]}function wg(t,e){const n=t.toString();return Yr[n]||(Yr[n]=e()),Yr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ii(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="start",Tg="close",Sg="pLPCommand",Rg="pRTLPCB",Mc="id",kc="pw",Dc="ser",Ng="cb",xg="seg",Ag="ts",Pg="d",Og="dframe",Lc=1870,Fc=30,Mg=Lc-Fc,kg=25e3,Dg=3e4;class Rn{constructor(e,n,i,s,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ti(e),this.stats_=Qr(n),this.urlFn=a=>(this.appCheckToken&&(a[Kr]=this.appCheckToken),Pc(n,Ac,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ig(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Dg)),cg(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xr((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Oc)this.id=l,this.password=a;else if(o===Tg)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[Oc]="t",i[Dc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Ng]=this.scriptTagHolder.uniqueCallbackIdentifier),i[wc]=Vr,this.transportSessionId&&(i[Ic]=this.transportSessionId),this.lastSessionId&&(i[Nc]=this.lastSessionId),this.applicationId&&(i[vg]=this.applicationId),this.appCheckToken&&(i[Kr]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&Rc.test(location.hostname)&&(i[Tc]=Sc);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rn.forceAllow_=!0}static forceDisallow(){Rn.forceDisallow_=!0}static isAvailable(){return Rn.forceAllow_?!0:!Rn.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!fg()&&!hg()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=t_(n),s=Ec(i,Mg);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Og]="t",i[Mc]=e,i[kc]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=be(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xr{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=og(),window[Sg+this.uniqueCallbackIdentifier]=e,window[Rg+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xr.createIFrame_();let r="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const l=document.domain;r='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ae("frame writing exception"),l.stack&&Ae(l.stack),Ae(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ae("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Mc]=this.myID,e[kc]=this.myPW,e[Dc]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Fc+i.length<=Lc;){const o=this.pendingSegs.shift();i=i+"&"+xg+s+"="+o.seg+"&"+Ag+s+"="+o.ts+"&"+Pg+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(kg)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=16384,Fg=45e3;let rs=null;typeof MozWebSocket!="undefined"?rs=MozWebSocket:typeof WebSocket!="undefined"&&(rs=WebSocket);class Qe{constructor(e,n,i,s,r,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ti(this.connId),this.stats_=Qr(n),this.connURL=Qe.connectionURL_(n,o,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s){const r={};return r[wc]=Vr,typeof location!="undefined"&&location.hostname&&Rc.test(location.hostname)&&(r[Tc]=Sc),n&&(r[Ic]=n),i&&(r[Nc]=i),s&&(r[Kr]=s),Pc(e,xc,r)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$t.set("previous_websocket_failure",!0);try{if(!sc()){const i={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new rs(this.connURL,[],i)}}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&rs!==null&&!Qe.forceDisallow_}static previouslyFailed(){return $t.isInMemoryStorage||$t.get("previous_websocket_failure")===!0}markConnectionHealthy(){$t.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Zn(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=be(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Ec(n,Lg);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Fg))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qe.responsesRequiredToBeHealthy=2;Qe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Rn,Qe]}initTransports_(e){const n=Qe&&Qe.isAvailable();let i=n&&!Qe.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Qe];else{const s=this.transports_=[];for(const r of Jr.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=6e4,Bg=5e3,Hg=10*1024,Ug=100*1024,Zr="t",Wc="d",$g="s",Bc="r",jg="e",Hc="o",Uc="a",$c="n",jc="p",zg="h";class qg{constructor(e,n,i,s,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ti("c:"+this.id+":"),this.transportManager_=new Jr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=si(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ug?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Hg?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zr in e){const n=e[Zr];n===Uc?this.upgradeIfSecondaryHealthy_():n===Bc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Hc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ni("t",e),i=ni("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:jc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$c,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ni("t",e),i=ni("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ni(Zr,e);if(Wc in e){const i=e[Wc];if(n===zg)this.onHandshake_(i);else if(n===$c){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===$g?this.onConnectionShutdown_(i):n===Bc?this.onReset_(i):n===jg?jr("Server Error: "+i):n===Hc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):jr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vr!==i&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),si(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Wg))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):si(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Bg))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:jc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($t.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends qc{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!ic()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new os}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=32,Kc=768;class re{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new re("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function St(t){return t.pieces_.length-t.pieceNum_}function de(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new re(t.pieces_,e)}function Gc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Vg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Yc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Qc(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new re(e,0)}function Ee(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof re)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new re(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function He(t,e){const n=K(t),i=K(e);if(n===null)return e;if(n===i)return He(de(t),de(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function eo(t,e){if(St(t)!==St(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Xe(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(St(t)>St(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Kg{constructor(e,n){this.errorPrefix_=n,this.parts_=Yc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=es(this.parts_[i]);Xc(this)}}function Gg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=es(e),Xc(t)}function Yg(t){const e=t.parts_.pop();t.byteLength_-=es(e),t.parts_.length>0&&(t.byteLength_-=1)}function Xc(t){if(t.byteLength_>Kc)throw new Error(t.errorPrefix_+"has a key path longer than "+Kc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Vc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vc+") or object contains a cycle "+Vt(t))}function Vt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends qc{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new to}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=1e3,Qg=60*5*1e3,Xg=3*1e3,Jc=30*1e3,Jg=1.3,Zg=3e4,em="server_kill",Zc=3;class ht extends zc{constructor(e,n,i,s,r,o,l,a){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=ht.nextPersistentConnectionId_++,this.log_=ti("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ri,this.maxReconnectDelay_=Qg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!sc())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");to.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&os.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(be(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new Dr,i={p:e._path.toString(),q:e._queryObject},s={action:"g",request:i,onComplete:o=>{const l=o.d;o.s==="ok"?(this.onDataUpdate_(i.p,l,!1,null),n.resolve(l)):n.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[r];o===void 0||s!==o||(delete this.outstandingGets_[r],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),n.reject(new Error("Client is offline.")))},Xg),this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;ht.warnOnListenWarnings_(a,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ft(e,"w")){const i=bn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||u_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=c_(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+be(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):jr("Unrecognized action received from server: "+be(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Zg&&(this.reconnectDelay_=ri),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Jg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ht.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,i())},c=function(f){S(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(f)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ae("getToken() completed but was canceled"):(Ae("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,l=new qg(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,_=>{Be(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(em)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Be(f),a())}}}interrupt(e){Ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],lc(this.interruptReasons_)&&(this.reconnectDelay_=ri,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>zr(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new re(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){Ae("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zc&&(this.reconnectDelay_=Jc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ae("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+_c.replace(/\./g,"-")]=1,ic()?e["framework.cordova"]=1:r_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=os.getInstance().currentlyOnline();return lc(this.interruptReasons_)&&e}}ht.nextPersistentConnectionId_=0;ht.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new z(Tn,e),s=new z(Tn,n);return this.compare(i,s)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as;class eu extends ls{static get __EMPTY_NODE(){return as}static set __EMPTY_NODE(e){as=e}compare(e,n){return Sn(e.name,n.name)}isDefinedOn(e){throw Cn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(qt,as)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,as)}toString(){return".key"}}const Nn=new eu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class we{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i!=null?i:we.RED,this.left=s!=null?s:De.EMPTY_NODE,this.right=r!=null?r:De.EMPTY_NODE}copy(e,n,i,s,r){return new we(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return De.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return De.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}we.RED=!0;we.BLACK=!1;class tm{copy(e,n,i,s,r){return this}insert(e,n,i){return new we(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class De{constructor(e,n=De.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new De(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,we.BLACK,null,null))}remove(e){return new De(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,we.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new cs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new cs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new cs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new cs(this.root_,null,this.comparator_,!0,e)}}De.EMPTY_NODE=new tm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(t,e){return Sn(t.name,e.name)}function no(t,e){return Sn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io;function im(t){io=t}const tu=function(t){return typeof t=="number"?"number:"+Cc(t):"string:"+t},nu=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ft(e,".sv"),"Priority must be a string or number.")}else S(t===io||t.isEmpty(),"priority of unexpected type.");S(t===io||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu;class Ie{constructor(e,n=Ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nu(this.priorityNode_)}static set __childrenNodeConstructor(e){iu=e}static get __childrenNodeConstructor(){return iu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ie(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:K(e)===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=K(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(S(i!==".priority"||St(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(de(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tu(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Cc(this.value_):e+=this.value_,this.lazyHash_=mc(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ie.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ie.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=Ie.VALUE_TYPE_ORDER.indexOf(n),r=Ie.VALUE_TYPE_ORDER.indexOf(i);return S(s>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su,ru;function sm(t){su=t}function rm(t){ru=t}class om extends ls{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Sn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(qt,new Ie("[PRIORITY-POST]",ru))}makePost(e,n){const i=su(e);return new z(n,new Ie("[PRIORITY-POST]",i))}toString(){return".priority"}}const ge=new om;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=Math.log(2);class am{constructor(e){const n=r=>parseInt(Math.log(r)/lm,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const us=function(t,e,n,i){t.sort(e);const s=function(a,c){const u=c-a;let f,h;if(u===0)return null;if(u===1)return f=t[a],h=n?n(f):f,new we(h,f.node,we.BLACK,null,null);{const _=parseInt(u/2,10)+a,m=s(a,_),N=s(_+1,c);return f=t[_],h=n?n(f):f,new we(h,f.node,we.BLACK,m,N)}},r=function(a){let c=null,u=null,f=t.length;const h=function(m,N){const b=f-m,P=f;f-=m;const A=s(b+1,P),H=t[b],U=n?n(H):H;_(new we(U,H.node,N,null,A))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<a.count;++m){const N=a.nextBitIsOne(),b=Math.pow(2,a.count-(m+1));N?h(b,we.BLACK):(h(b,we.BLACK),h(b,we.RED))}return u},o=new am(t.length),l=r(o);return new De(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so;const xn={};class dt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(xn&&ge,"ChildrenNode.ts has not been loaded"),so=so||new dt({".priority":xn},{".priority":ge}),so}get(e){const n=bn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof De?n:null}hasIndex(e){return ft(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Nn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(z.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let l;s?l=us(i,e.getCompare()):l=xn;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new dt(u,c)}addToIndexes(e,n){const i=Zi(this.indexes_,(s,r)=>{const o=bn(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),s===xn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(z.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),us(l,o.getCompare())}else return xn;else{const l=n.get(e.name);let a=s;return l&&(a=a.remove(new z(e.name,l))),a.insert(e,e.node)}});return new dt(i,this.indexSet_)}removeFromIndexes(e,n){const i=Zi(this.indexes_,s=>{if(s===xn)return s;{const r=n.get(e.name);return r?s.remove(new z(e.name,r)):s}});return new dt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi;class F{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&nu(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return oi||(oi=new F(new De(no),null,dt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||oi}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?oi:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(de(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new z(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?oi:this.priorityNode_;return new F(s,o,r)}}updateChild(e,n){const i=K(e);if(i===null)return n;{S(K(e)!==".priority"||St(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(de(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(ge,(o,l)=>{n[o]=l.val(e),i++,r&&F.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tu(this.getPriority().val())+":"),this.forEachChild(ge,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":mc(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new z(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,z.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===li?-1:0}withIndex(e){if(e===Nn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Nn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(ge),s=n.getIterator(ge);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nn?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class cm extends F{constructor(){super(new De(no),F.EMPTY_NODE,dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const li=new cm;Object.defineProperties(z,{MIN:{value:new z(Tn,F.EMPTY_NODE)},MAX:{value:new z(qt,li)}});eu.__EMPTY_NODE=F.EMPTY_NODE;Ie.__childrenNodeConstructor=F;im(li);rm(li);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=!0;function Re(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ie(n,Re(e))}if(!(t instanceof Array)&&um){const n=[];let i=!1;if(Ve(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Re(l);a.isEmpty()||(i=i||!a.getPriority().isEmpty(),n.push(new z(o,a)))}}),n.length===0)return F.EMPTY_NODE;const r=us(n,nm,o=>o.name,no);if(i){const o=us(n,ge.getCompare());return new F(r,Re(e),new dt({".priority":o},{".priority":ge}))}else return new F(r,Re(e),dt.Default)}else{let n=F.EMPTY_NODE;return Ve(t,(i,s)=>{if(ft(t,i)&&i.substring(0,1)!=="."){const r=Re(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(Re(e))}}sm(Re);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm extends ls{constructor(e){super();this.indexPath_=e,S(!G(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Sn(e.name,n.name):r}makePost(e,n){const i=Re(e),s=F.EMPTY_NODE.updateChild(this.indexPath_,i);return new z(n,s)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,li);return new z(qt,e)}toString(){return Yc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm extends ls{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Sn(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const i=Re(e);return new z(n,i)}toString(){return".value"}}const dm=new hm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t){return{type:"value",snapshotNode:t}}function ai(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ci(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ui(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _m(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(s).equals(i.getChild(s))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(ci(n,l)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ai(n,i)):o.trackChildChange(ui(n,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(ge,(s,r)=>{n.hasChild(s)||i.trackChildChange(ci(s,r))}),n.isLeafNode()||n.forEachChild(ge,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(ui(s,r,o))}else i.trackChildChange(ai(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.indexedFilter_=new ro(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fi.getStartPost_(e),this.endPost_=fi.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,i,s,r,o){return this.matches(new z(n,i))||(i=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=F.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(F.EMPTY_NODE);const r=this;return n.forEachChild(ge,(o,l)=>{r.matches(new z(o,l))||(s=s.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e){this.rangedFilter_=new fi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new z(n,i))||(i=F.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=F.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)s=s.updateImmediateChild(l.name,l.node),o++;else break}}else{s=n.withIndex(this.index_),s=s.updatePriority(F.EMPTY_NODE);let r,o,l,a;if(this.reverse_){a=s.getReverseIterator(this.index_),r=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const f=this.index_.getCompare();l=(h,_)=>f(_,h)}else a=s.getIterator(this.index_),r=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let c=0,u=!1;for(;a.hasNext();){const f=a.getNext();!u&&l(r,f)<=0&&(u=!0),u&&c<this.limit_&&l(f,o)<=0?c++:s=s.updateImmediateChild(f.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(h,_)=>f(_,h)}else o=this.index_.getCompare();const l=e;S(l.numChildren()===this.limit_,"");const a=new z(n,i),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const f=l.getImmediateChild(n);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const _=h==null?1:o(h,a);if(u&&!i.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(ui(n,i,f)),l.updateImmediateChild(n,i);{r!=null&&r.trackChildChange(ci(n,f));const N=l.updateImmediateChild(n,F.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(ai(h.name,h.node)),N.updateImmediateChild(h.name,h.node)):N}}else return i.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(ci(c.name,c.node)),r.trackChildChange(ai(n,i))),l.updateImmediateChild(n,i).updateImmediateChild(c.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ge}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Tn}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ge}copy(){const e=new oo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function mm(t){return t.loadsAllData()?new ro(t.getIndex()):t.hasLimit()?new gm(t):new fi(t)}function ou(t){const e={};if(t.isDefault())return e;let n;return t.index_===ge?n="$priority":t.index_===dm?n="$value":t.index_===Nn?n="$key":(S(t.index_ instanceof fm,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=be(n),t.startSet_&&(e.startAt=be(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+be(t.indexStartName_))),t.endSet_&&(e.endAt=be(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+be(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function lu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ge&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends zc{constructor(e,n,i,s){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=ti("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=fs.getListenId_(e,i),l={};this.listens_[o]=l;const a=ou(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,i),bn(this.listens_,o)===l){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,n){const i=fs.getListenId_(e,n);delete this.listens_[i]}get(e){const n=ou(e._queryParams),i=e._path.toString(),s=new Dr;return this.restRequest_(i+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+f_(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Zn(l.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,a)}else l.status!==401&&l.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(){return{value:null,children:new Map}}function au(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=K(e);t.children.has(i)||t.children.set(i,hs());const s=t.children.get(i);e=de(e),au(s,e,n)}}function lo(t,e,n){t.value!==null?n(e,t.value):vm(t,(i,s)=>{const r=new re(e.toString()+"/"+i);lo(s,r,n)})}function vm(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ve(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=10*1e3,Cm=30*1e3,bm=5*60*1e3;class wm{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Em(e);const i=cu+(Cm-cu)*Math.random();si(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Ve(e,(s,r)=>{r>0&&ft(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),si(this.reportStats_.bind(this),Math.floor(Math.random()*2*bm))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function uu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function hu(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ot.ACK_USER_WRITE,this.source=uu()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new re(e));return new ds(Z(),n,this.revert)}}else return S(K(this.path)===e,"operationForChild called for unrelated child."),new ds(de(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ot.OVERWRITE}operationForChild(e){return G(this.path)?new Kt(this.source,Z(),this.snap.getImmediateChild(e)):new Kt(this.source,de(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ot.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new re(e));return n.isEmpty()?null:n.value?new Kt(this.source,Z(),n.value):new hi(this.source,Z(),n)}else return S(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new hi(this.source,de(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Tm(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(_m(o.childName,o.snapshotNode))}),di(t,s,"child_removed",e,i,n),di(t,s,"child_added",e,i,n),di(t,s,"child_moved",r,i,n),di(t,s,"child_changed",e,i,n),di(t,s,"value",e,i,n),s}function di(t,e,n,i,s,r){const o=i.filter(l=>l.type===n);o.sort((l,a)=>Rm(t,l,a)),o.forEach(l=>{const a=Sm(t,l,r);s.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function Sm(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Rm(t,e,n){if(e.childName==null||n.childName==null)throw Cn("Should only compare child_ events.");const i=new z(e.childName,e.snapshotNode),s=new z(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t,e){return{eventCache:t,serverCache:e}}function pi(t,e,n,i){return ps(new Rt(e,n,i),t.serverCache)}function du(t,e,n,i){return ps(t.eventCache,new Rt(e,n,i))}function _s(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao;const Nm=()=>(ao||(ao=new De(ug)),ao);class pe{constructor(e,n=Nm()){this.value=e,this.children=n}static fromObject(e){let n=new pe(null);return Ve(e,(i,s)=>{n=n.set(new re(i),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(G(e))return null;{const i=K(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(de(e),n);return r!=null?{path:Ee(new re(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=K(e),i=this.children.get(n);return i!==null?i.subtree(de(e)):new pe(null)}}set(e,n){if(G(e))return new pe(n,this.children);{const i=K(e),r=(this.children.get(i)||new pe(null)).set(de(e),n),o=this.children.insert(i,r);return new pe(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new pe(null):new pe(null,this.children);{const n=K(e),i=this.children.get(n);if(i){const s=i.remove(de(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new pe(null):new pe(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const n=K(e),i=this.children.get(n);return i?i.get(de(e)):null}}setTree(e,n){if(G(e))return n;{const i=K(e),r=(this.children.get(i)||new pe(null)).setTree(de(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new pe(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Ee(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(G(e))return null;{const r=K(e),o=this.children.get(r);return o?o.findOnPath_(de(e),Ee(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,i){if(G(e))return this;{this.value&&i(n,this.value);const s=K(e),r=this.children.get(s);return r?r.foreachOnPath_(de(e),Ee(n,s),i):new pe(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(Ee(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.writeTree_=e}static empty(){return new Je(new pe(null))}}function _i(t,e,n){if(G(e))return new Je(new pe(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=He(s,e);return r=r.updateChild(o,n),new Je(t.writeTree_.set(s,r))}else{const s=new pe(n),r=t.writeTree_.setTree(e,s);return new Je(r)}}}function pu(t,e,n){let i=t;return Ve(n,(s,r)=>{i=_i(i,Ee(e,s),r)}),i}function _u(t,e){if(G(e))return Je.empty();{const n=t.writeTree_.setTree(e,new pe(null));return new Je(n)}}function co(t,e){return Yt(t,e)!=null}function Yt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(He(n.path,e)):null}function gu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ge,(i,s)=>{e.push(new z(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new z(i,s.value))}),e}function Nt(t,e){if(G(e))return t;{const n=Yt(t,e);return n!=null?new Je(new pe(n)):new Je(t.writeTree_.subtree(e))}}function uo(t){return t.writeTree_.isEmpty()}function An(t,e){return mu(Z(),t.writeTree_,e)}function mu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=mu(Ee(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Ee(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(t,e){return bu(e,t)}function xm(t,e,n,i,s){S(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=_i(t.visibleWrites,e,n)),t.lastWriteId=i}function Am(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Pm(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Om(l,i.path)?s=!1:Xe(i.path,l.path)&&(r=!0)),o--}if(s){if(r)return Mm(t),!0;if(i.snap)t.visibleWrites=_u(t.visibleWrites,i.path);else{const l=i.children;Ve(l,a=>{t.visibleWrites=_u(t.visibleWrites,Ee(i.path,a))})}return!0}else return!1}function Om(t,e){if(t.snap)return Xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xe(Ee(t.path,n),e))return!0;return!1}function Mm(t){t.visibleWrites=yu(t.allWrites,km,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function km(t){return t.visible}function yu(t,e,n){let i=Je.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let l;if(r.snap)Xe(n,o)?(l=He(n,o),i=_i(i,l,r.snap)):Xe(o,n)&&(l=He(o,n),i=_i(i,Z(),r.snap.getChild(l)));else if(r.children){if(Xe(n,o))l=He(n,o),i=pu(i,l,r.children);else if(Xe(o,n))if(l=He(o,n),G(l))i=pu(i,Z(),r.children);else{const a=bn(r.children,K(l));if(a){const c=a.getChild(de(l));i=_i(i,Z(),c)}}}else throw Cn("WriteRecord should have .snap or .children")}}return i}function vu(t,e,n,i,s){if(!i&&!s){const r=Yt(t.visibleWrites,e);if(r!=null)return r;{const o=Nt(t.visibleWrites,e);if(uo(o))return n;if(n==null&&!co(o,Z()))return null;{const l=n||F.EMPTY_NODE;return An(o,l)}}}else{const r=Nt(t.visibleWrites,e);if(!s&&uo(r))return n;if(!s&&n==null&&!co(r,Z()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Xe(c.path,e)||Xe(e,c.path))},l=yu(t.allWrites,o,e),a=n||F.EMPTY_NODE;return An(l,a)}}}function Dm(t,e,n){let i=F.EMPTY_NODE;const s=Yt(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ge,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Nt(t.visibleWrites,e);return n.forEachChild(ge,(o,l)=>{const a=An(Nt(r,new re(o)),l);i=i.updateImmediateChild(o,a)}),gu(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Nt(t.visibleWrites,e);return gu(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Lm(t,e,n,i,s){S(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ee(e,n);if(co(t.visibleWrites,r))return null;{const o=Nt(t.visibleWrites,r);return uo(o)?s.getChild(n):An(o,s.getChild(n))}}function Fm(t,e,n,i){const s=Ee(e,n),r=Yt(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Nt(t.visibleWrites,s);return An(o,i.getNode().getImmediateChild(n))}else return null}function Wm(t,e){return Yt(t.visibleWrites,e)}function Bm(t,e,n,i,s,r,o){let l;const a=Nt(t.visibleWrites,e),c=Yt(a,Z());if(c!=null)l=c;else if(n!=null)l=An(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],f=o.getCompare(),h=r?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let _=h.getNext();for(;_&&u.length<s;)f(_,i)!==0&&u.push(_),_=h.getNext();return u}else return[]}function Hm(){return{visibleWrites:Je.empty(),allWrites:[],lastWriteId:-1}}function gs(t,e,n,i){return vu(t.writeTree,t.treePath,e,n,i)}function ho(t,e){return Dm(t.writeTree,t.treePath,e)}function Eu(t,e,n,i){return Lm(t.writeTree,t.treePath,e,n,i)}function ms(t,e){return Wm(t.writeTree,Ee(t.treePath,e))}function Um(t,e,n,i,s,r){return Bm(t.writeTree,t.treePath,e,n,i,s,r)}function po(t,e,n){return Fm(t.writeTree,t.treePath,e,n)}function Cu(t,e){return bu(Ee(t.treePath,e),t.writeTree)}function bu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,ui(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,ci(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,ai(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,ui(i,e.snapshotNode,s.oldSnap));else throw Cn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const wu=new jm;class _o{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Rt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return po(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gt(this.viewCache_),r=Um(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(t){return{filter:t}}function qm(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Vm(t,e,n,i,s){const r=new $m;let o,l;if(n.type===ot.OVERWRITE){const c=n;c.source.fromUser?o=go(t,e,c.path,c.snap,i,s,r):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!G(c.path),o=ys(t,e,c.path,c.snap,i,s,l,r))}else if(n.type===ot.MERGE){const c=n;c.source.fromUser?o=Gm(t,e,c.path,c.children,i,s,r):(S(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=mo(t,e,c.path,c.children,i,s,l,r))}else if(n.type===ot.ACK_USER_WRITE){const c=n;c.revert?o=Xm(t,e,c.path,i,s,r):o=Ym(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===ot.LISTEN_COMPLETE)o=Qm(t,e,n.path,i,r);else throw Cn("Unknown operation type: "+n.type);const a=r.getChanges();return Km(e,o,a),{viewCache:o,changes:a}}function Km(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=_s(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(pm(_s(e)))}}function Iu(t,e,n,i,s,r){const o=e.eventCache;if(ms(i,n)!=null)return e;{let l,a;if(G(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Gt(e),u=c instanceof F?c:F.EMPTY_NODE,f=ho(i,u);l=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=gs(i,Gt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=K(n);if(c===".priority"){S(St(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const f=Eu(i,n,u,a);f!=null?l=t.filter.updatePriority(u,f):l=o.getNode()}else{const u=de(n);let f;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const h=Eu(i,n,o.getNode(),a);h!=null?f=o.getNode().getImmediateChild(c).updateChild(u,h):f=o.getNode().getImmediateChild(c)}else f=po(i,c,e.serverCache);f!=null?l=t.filter.updateChild(o.getNode(),c,f,u,s,r):l=o.getNode()}}return pi(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function ys(t,e,n,i,s,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(G(n))c=u.updateFullNode(a.getNode(),i,null);else if(u.filtersNodes()&&!a.isFiltered()){const _=a.getNode().updateChild(n,i);c=u.updateFullNode(a.getNode(),_,null)}else{const _=K(n);if(!a.isCompleteForPath(n)&&St(n)>1)return e;const m=de(n),b=a.getNode().getImmediateChild(_).updateChild(m,i);_===".priority"?c=u.updatePriority(a.getNode(),b):c=u.updateChild(a.getNode(),_,b,m,wu,null)}const f=du(e,c,a.isFullyInitialized()||G(n),u.filtersNodes()),h=new _o(s,f,r);return Iu(t,f,n,s,h,l)}function go(t,e,n,i,s,r,o){const l=e.eventCache;let a,c;const u=new _o(s,e,r);if(G(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),a=pi(e,c,!0,t.filter.filtersNodes());else{const f=K(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),a=pi(e,c,l.isFullyInitialized(),l.isFiltered());else{const h=de(n),_=l.getNode().getImmediateChild(f);let m;if(G(h))m=i;else{const N=u.getCompleteChild(f);N!=null?Gc(h)===".priority"&&N.getChild(Qc(h)).isEmpty()?m=N:m=N.updateChild(h,i):m=F.EMPTY_NODE}if(_.equals(m))a=e;else{const N=t.filter.updateChild(l.getNode(),f,m,h,u,o);a=pi(e,N,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Tu(t,e){return t.eventCache.isCompleteForChild(e)}function Gm(t,e,n,i,s,r,o){let l=e;return i.foreach((a,c)=>{const u=Ee(n,a);Tu(e,K(u))&&(l=go(t,l,u,c,s,r,o))}),i.foreach((a,c)=>{const u=Ee(n,a);Tu(e,K(u))||(l=go(t,l,u,c,s,r,o))}),l}function Su(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function mo(t,e,n,i,s,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;G(n)?c=i:c=new pe(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,h)=>{if(u.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),m=Su(t,_,h);a=ys(t,a,new re(f),m,s,r,o,l)}}),c.children.inorderTraversal((f,h)=>{const _=!e.serverCache.isCompleteForChild(f)&&h.value===void 0;if(!u.hasChild(f)&&!_){const m=e.serverCache.getNode().getImmediateChild(f),N=Su(t,m,h);a=ys(t,a,new re(f),N,s,r,o,l)}}),a}function Ym(t,e,n,i,s,r,o){if(ms(s,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(i.value!=null){if(G(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ys(t,e,n,a.getNode().getChild(n),s,r,l,o);if(G(n)){let c=new pe(null);return a.getNode().forEachChild(Nn,(u,f)=>{c=c.set(new re(u),f)}),mo(t,e,n,c,s,r,l,o)}else return e}else{let c=new pe(null);return i.foreach((u,f)=>{const h=Ee(n,u);a.isCompleteForPath(h)&&(c=c.set(u,a.getNode().getChild(h)))}),mo(t,e,n,c,s,r,l,o)}}function Qm(t,e,n,i,s){const r=e.serverCache,o=du(e,r.getNode(),r.isFullyInitialized()||G(n),r.isFiltered());return Iu(t,o,n,i,wu,s)}function Xm(t,e,n,i,s,r){let o;if(ms(i,n)!=null)return e;{const l=new _o(i,e,s),a=e.eventCache.getNode();let c;if(G(n)||K(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=gs(i,Gt(e));else{const f=e.serverCache.getNode();S(f instanceof F,"serverChildren would be complete if leaf node"),u=ho(i,f)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=K(n);let f=po(i,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=a.getImmediateChild(u)),f!=null?c=t.filter.updateChild(a,u,f,de(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,F.EMPTY_NODE,de(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gs(i,Gt(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ms(i,Z())!=null,pi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new ro(i.getIndex()),r=mm(i);this.processor_=zm(r);const o=n.serverCache,l=n.eventCache,a=s.updateFullNode(F.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(F.EMPTY_NODE,l.getNode(),null),u=new Rt(a,o.isFullyInitialized(),s.filtersNodes()),f=new Rt(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ps(f,u),this.eventGenerator_=new Im(this.query_)}get query(){return this.query_}}function Zm(t){return _s(t.viewCache_)}function ey(t,e){const n=Gt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function Ru(t,e,n,i){e.type===ot.MERGE&&e.source.queryId!==null&&(S(Gt(t.viewCache_),"We should always have a full cache before handling merges"),S(_s(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=Vm(t.processor_,s,e,n,i);return qm(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ty(t,r.changes,r.viewCache.eventCache.getNode(),null)}function ty(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Tm(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu;class ny{constructor(){this.views=new Map}}function iy(t){S(!Nu,"__referenceConstructor has already been defined"),Nu=t}function yo(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return S(r!=null,"SyncTree gave us an op for an invalid query."),Ru(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Ru(o,e,n,i));return r}}function sy(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=gs(n,s?i:null),a=!1;l?a=!0:i instanceof F?(l=ho(n,i),a=!1):(l=F.EMPTY_NODE,a=!1);const c=ps(new Rt(l,a,!1),new Rt(i,s,!1));return new Jm(e,c)}return o}function gi(t,e){let n=null;for(const i of t.views.values())n=n||ey(i,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu;function ry(t){S(!xu,"__referenceConstructor has already been defined"),xu=t}class Au{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pe(null),this.pendingWriteTree_=Hm(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oy(t,e,n,i,s){return xm(t.pendingWriteTree_,e,n,i,s),s?vs(t,new Kt(uu(),e,n)):[]}function Pn(t,e,n=!1){const i=Am(t.pendingWriteTree_,e);if(Pm(t.pendingWriteTree_,e)){let r=new pe(null);return i.snap!=null?r=r.set(Z(),!0):Ve(i.children,o=>{r=r.set(new re(o),!0)}),vs(t,new ds(i.path,r,n))}else return[]}function mi(t,e,n){return vs(t,new Kt(fu(),e,n))}function ly(t,e,n){const i=pe.fromObject(n);return vs(t,new hi(fu(),e,i))}function ay(t,e,n,i){const s=ku(t,i);if(s!=null){const r=Du(s),o=r.path,l=r.queryId,a=He(o,e),c=new Kt(hu(l),a,n);return Lu(t,o,c)}else return[]}function cy(t,e,n,i){const s=ku(t,i);if(s){const r=Du(s),o=r.path,l=r.queryId,a=He(o,e),c=pe.fromObject(n),u=new hi(hu(l),a,c);return Lu(t,o,u)}else return[]}function Pu(t,e,n){const i=!0,s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=He(o,e),c=gi(l,a);if(c)return c});return vu(s,e,r,n,i)}function uy(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=He(c,n);i=i||gi(u,f)});let s=t.syncPointTree_.get(n);s?i=i||gi(s,Z()):(s=new ny,t.syncPointTree_=t.syncPointTree_.set(n,s));const r=i!=null,o=r?new Rt(i,!0,!1):null,l=fo(t.pendingWriteTree_,e._path),a=sy(s,e,l,r?o.getNode():F.EMPTY_NODE,r);return Zm(a)}function vs(t,e){return Ou(e,t.syncPointTree_,null,fo(t.pendingWriteTree_,Z()))}function Ou(t,e,n,i){if(G(t.path))return Mu(t,e,n,i);{const s=e.get(Z());n==null&&s!=null&&(n=gi(s,Z()));let r=[];const o=K(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Cu(i,o);r=r.concat(Ou(l,a,c,u))}return s&&(r=r.concat(yo(s,t,i,n))),r}}function Mu(t,e,n,i){const s=e.get(Z());n==null&&s!=null&&(n=gi(s,Z()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Cu(i,o),u=t.operationForChild(o);u&&(r=r.concat(Mu(u,l,a,c)))}),s&&(r=r.concat(yo(s,t,i,n))),r}function ku(t,e){return t.tagToQueryMap.get(e)}function Du(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new re(t.substr(0,e))}}function Lu(t,e,n){const i=t.syncPointTree_.get(e);S(i,"Missing sync point for query tag that we're tracking");const s=fo(t.pendingWriteTree_,e);return yo(i,n,s,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vo(n)}node(){return this.node_}}class Eo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ee(this.path_,e);return new Eo(this.syncTree_,n)}node(){return Pu(this.syncTree_,this.path_)}}const fy=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Fu=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return hy(t[".sv"],e,n);if(typeof t[".sv"]=="object")return dy(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},hy=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},dy=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&S(!1,"Unexpected increment value: "+i);const s=e.node();if(S(s!==null&&typeof s!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},py=function(t,e,n,i){return Co(e,new Eo(n,t),i)},_y=function(t,e,n){return Co(t,new vo(e),n)};function Co(t,e,n){const i=t.getPriority().val(),s=Fu(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=Fu(o.getValue(),e,n);return l!==o.getValue()||s!==o.getPriority().val()?new Ie(l,Re(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Ie(s))),o.forEachChild(ge,(l,a)=>{const c=Co(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function wo(t,e){let n=e instanceof re?e:new re(e),i=t,s=K(n);for(;s!==null;){const r=bn(i.node.children,s)||{children:{},childCount:0};i=new bo(s,i,r),n=de(n),s=K(n)}return i}function On(t){return t.node.value}function Wu(t,e){t.node.value=e,Io(t)}function Bu(t){return t.node.childCount>0}function gy(t){return On(t)===void 0&&!Bu(t)}function Es(t,e){Ve(t.node.children,(n,i)=>{e(new bo(n,t,i))})}function Hu(t,e,n,i){n&&!i&&e(t),Es(t,s=>{Hu(s,e,!0,i)}),n&&i&&e(t)}function my(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function yi(t){return new re(t.parent===null?t.name:yi(t.parent)+"/"+t.name)}function Io(t){t.parent!==null&&yy(t.parent,t.name,t)}function yy(t,e,n){const i=gy(n),s=ft(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,Io(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Io(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=/[\[\].#$\/\u0000-\u001F\u007F]/,Ey=/[\[\].#$\u0000-\u001F\u007F]/,To=10*1024*1024,Uu=function(t){return typeof t=="string"&&t.length!==0&&!vy.test(t)},$u=function(t){return typeof t=="string"&&t.length!==0&&!Ey.test(t)},Cy=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$u(t)},ju=function(t,e,n){const i=n instanceof re?new Kg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vt(i));if(typeof e=="function")throw new Error(t+"contains a function "+Vt(i)+" with contents = "+e.toString());if(vc(e))throw new Error(t+"contains "+e.toString()+" "+Vt(i));if(typeof e=="string"&&e.length>To/3&&es(e)>To)throw new Error(t+"contains a string greater than "+To+" utf8 bytes "+Vt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ve(e,(o,l)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Uu(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Gg(i,o),ju(t,l,i),Yg(i)}),s&&r)throw new Error(t+' contains ".value" child '+Vt(i)+" in addition to actual children.")}},zu=function(t,e,n,i){if(!(i&&n===void 0)&&!$u(n))throw new Error(cc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},by=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zu(t,e,n,i)},wy=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Uu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Cy(n))throw new Error(cc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qu(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!eo(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Ty(t,e,n){qu(t,n),Vu(t,i=>eo(i,e))}function Qt(t,e,n){qu(t,n),Vu(t,i=>Xe(i,e)||Xe(e,i))}function Vu(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Sy(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Sy(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();jt&&Ae("event: "+n.toString()),ii(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="repo_interrupt",Ny=25;class xy{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Iy,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hs(),this.transactionQueueTree_=new bo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ay(t,e,n){if(t.stats_=Qr(t.repoInfo_),t.forceRestClient_||gg())t.server_=new fs(t.repoInfo_,(i,s,r,o)=>{Gu(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Yu(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{be(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new ht(t.repoInfo_,e,(i,s,r,o)=>{Gu(t,i,s,r,o)},i=>{Yu(t,i)},i=>{Oy(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=wg(t.repoInfo_,()=>new wm(t.stats_,t.server_)),t.infoData_=new ym,t.infoSyncTree_=new Au({startListening:(i,s,r,o)=>{let l=[];const a=t.infoData_.getNode(i._path);return a.isEmpty()||(l=mi(t.infoSyncTree_,i._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),So(t,"connected",!1),t.serverSyncTree_=new Au({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(l,a)=>{const c=o(l,a);Qt(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Py(t){const n=t.infoData_.getNode(new re(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ku(t){return fy({timestamp:Py(t)})}function Gu(t,e,n,i,s){t.dataUpdateCount++;const r=new re(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const a=Zi(n,c=>Re(c));o=cy(t.serverSyncTree_,r,a,s)}else{const a=Re(n);o=ay(t.serverSyncTree_,r,a,s)}else if(i){const a=Zi(n,c=>Re(c));o=ly(t.serverSyncTree_,r,a)}else{const a=Re(n);o=mi(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=xo(t,r)),Qt(t.eventQueue_,l,o)}function Yu(t,e){So(t,"connected",e),e===!1&&Dy(t)}function Oy(t,e){Ve(e,(n,i)=>{So(t,n,i)})}function So(t,e,n){const i=new re("/.info/"+e),s=Re(n);t.infoData_.updateSnapshot(i,s);const r=mi(t.infoSyncTree_,i,s);Qt(t.eventQueue_,i,r)}function My(t){return t.nextWriteId_++}function ky(t,e){const n=uy(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(i=>{const s=Re(i).withIndex(e._queryParams.getIndex()),r=mi(t.serverSyncTree_,e._path,s);return Ty(t.eventQueue_,e._path,r),Promise.resolve(s)},i=>(Ro(t,"get for query "+be(e)+" failed: "+i),Promise.reject(new Error(i))))}function Dy(t){Ro(t,"onDisconnectEvents");const e=Ku(t),n=hs();lo(t.onDisconnect_,Z(),(s,r)=>{const o=py(s,r,t.serverSyncTree_,e);au(n,s,o)});let i=[];lo(n,Z(),(s,r)=>{i=i.concat(mi(t.serverSyncTree_,s,r));const o=By(t,s);xo(t,o)}),t.onDisconnect_=hs(),Qt(t.eventQueue_,Z(),i)}function Ly(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Ry)}function Ro(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ae(n,...e)}function Qu(t,e,n){return Pu(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function No(t,e=t.transactionQueueTree_){if(e||Cs(t,e),On(e)){const n=Ju(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&Fy(t,yi(e),n)}else Bu(e)&&Es(e,n=>{No(t,n)})}function Fy(t,e,n){const i=n.map(c=>c.currentWriteId),s=Qu(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=He(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Ro(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Pn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Cs(t,wo(t.transactionQueueTree_,e)),No(t,t.transactionQueueTree_),Qt(t.eventQueue_,e,u);for(let h=0;h<f.length;h++)ii(f[h])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Be("transaction at "+a.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}xo(t,e)}},o)}function xo(t,e){const n=Xu(t,e),i=yi(n),s=Ju(t,n);return Wy(t,s,i),i}function Wy(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=He(n,a.path);let u=!1,f;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,f=a.abortReason,s=s.concat(Pn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Ny)u=!0,f="maxretry",s=s.concat(Pn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Qu(t,a.path,o);a.currentInputSnapshot=h;const _=e[l].update(h.val());if(_!==void 0){ju("transaction failed: Data returned ",_,a.path);let m=Re(_);typeof _=="object"&&_!=null&&ft(_,".priority")||(m=m.updatePriority(h.getPriority()));const b=a.currentWriteId,P=Ku(t),A=_y(m,h,P);a.currentOutputSnapshotRaw=m,a.currentOutputSnapshotResolved=A,a.currentWriteId=My(t),o.splice(o.indexOf(b),1),s=s.concat(oy(t.serverSyncTree_,a.path,A,a.currentWriteId,a.applyLocally)),s=s.concat(Pn(t.serverSyncTree_,b,!0))}else u=!0,f="nodata",s=s.concat(Pn(t.serverSyncTree_,a.currentWriteId,!0))}Qt(t.eventQueue_,n,s),s=[],u&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(f==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(f),!1,null))))}Cs(t,t.transactionQueueTree_);for(let l=0;l<i.length;l++)ii(i[l]);No(t,t.transactionQueueTree_)}function Xu(t,e){let n,i=t.transactionQueueTree_;for(n=K(e);n!==null&&On(i)===void 0;)i=wo(i,n),e=de(e),n=K(e);return i}function Ju(t,e){const n=[];return Zu(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Zu(t,e,n){const i=On(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);Es(e,s=>{Zu(t,s,n)})}function Cs(t,e){const n=On(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Wu(e,n.length>0?n:void 0)}Es(e,i=>{Cs(t,i)})}function By(t,e){const n=yi(Xu(t,e)),i=wo(t.transactionQueueTree_,e);return my(i,s=>{Ao(t,s)}),Ao(t,i),Hu(i,s=>{Ao(t,s)}),n}function Ao(t,e){const n=On(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Pn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Wu(e,void 0):n.length=r+1,Qt(t.eventQueue_,yi(e),s);for(let o=0;o<i.length;o++)ii(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Uy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const ef=function(t,e){const n=$y(t),i=n.namespace;n.domain==="firebase.com"&&zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ag();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Eg(n.host,n.secure,i,e,s,"",i!==n.subdomain),path:new re(n.pathString)}},$y=function(t){let e="",n="",i="",s="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(s=Hy(t.substring(u,f)));const h=Uy(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:a,domain:n,subdomain:i,secure:o,scheme:l,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return G(this._path)?null:Gc(this._path)}get ref(){return new xt(this._repo,this._path)}get _queryIdentifier(){const e=lu(this._queryParams),n=zr(e);return n==="{}"?"default":n}get _queryObject(){return lu(this._queryParams)}isEqual(e){if(e=ts(e),!(e instanceof Po))return!1;const n=this._repo===e._repo,i=eo(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Vg(this._path)}}class xt extends Po{constructor(e,n){super(e,n,new oo,!1)}get parent(){const e=Qc(this._path);return e===null?null:new xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bs{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new re(e),i=Oo(this.ref,e);return new bs(this._node.getChild(n),i,ge)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new bs(s,Oo(this.ref,i),ge)))}hasChild(e){const n=new re(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function uv(t,e){return t=ts(t),t._checkNotDeleted("ref"),e!==void 0?Oo(t._root,e):t._root}function Oo(t,e){return t=ts(t),K(t._path)===null?by("child","path",e,!1):zu("child","path",e,!1),new xt(t._repo,Ee(t._path,e))}function fv(t){return t=ts(t),ky(t._repo,t).then(e=>new bs(e,new xt(t._repo,t._path),t._queryParams.getIndex()))}iy(xt);ry(xt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jy="FIREBASE_DATABASE_EMULATOR_HOST",Mo={};let zy=!1;function qy(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ae("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ef(r,s),l=o.repoInfo,a,c;typeof process!="undefined"&&(c=process.env[jy]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=ef(r,s),l=o.repoInfo):a=!o.repoInfo.secure;const u=s&&a?new qr(qr.OWNER):new yg(t.name,t.options,e);wy("Invalid Firebase Database URL",o),G(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=Ky(l,t,u,new mg(t.name,n));return new Gy(f,t)}function Vy(t,e){const n=Mo[e];(!n||n[t.key]!==t)&&zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ly(t),delete n[t.key]}function Ky(t,e,n,i){let s=Mo[e.name];s||(s={},Mo[e.name]=s);let r=s[t.toURLString()];return r&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new xy(t,zy,n,i),s[t.toURLString()]=r,r}class Gy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ay(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xt(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Vy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function hv(t=tg(),e){return X_(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(t){ig(eg),Ur(new ns("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return qy(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),wn(dc,pc,t),wn(dc,pc,"esm2017")}ht.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ht.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Yy();var Qy="firebase",Xy="9.1.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(Qy,Xy,"app");export{st as F,En as S,bl as a,iv as b,sv as c,ev as d,ql as e,zf as f,rv as g,fv as h,Oo as i,uv as j,hv as k,ze as l,av as m,Ts as n,nv as o,Zy as p,lv as q,tv as r,cv as s,Jy as t,ov as u,Qf as w};
