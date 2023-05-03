import{s as et,u as Z,i as I,_ as $e,n as tt,H as He,z as W,ad as Be,y as ae,b as nt,d as rt}from"./@vue.0b7daf70.js";/*!
  * vue-router v4.0.16
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const je=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",G=e=>je?Symbol(e):"_vr_"+e,st=G("rvlm"),Pe=G("rvd"),pe=G("r"),ze=G("rl"),fe=G("rvl"),j=typeof window!="undefined";function ot(e){return e.__esModule||je&&e[Symbol.toStringTag]==="Module"}const A=Object.assign;function ce(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}const Q=()=>{},it=/\/$/,at=e=>e.replace(it,"");function le(e,t,n="/"){let r,s={},l="",d="";const g=t.indexOf("?"),a=t.indexOf("#",g>-1?g:0);return g>-1&&(r=t.slice(0,g),l=t.slice(g+1,a>-1?a:t.length),s=e(l)),a>-1&&(r=r||t.slice(0,a),d=t.slice(a,t.length)),r=ft(r!=null?r:t,n),{fullPath:r+(l&&"?")+l+d,path:r,query:s,hash:d}}function ct(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function we(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function lt(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&z(t.matched[r],n.matched[s])&&qe(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function qe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ut(e[n],t[n]))return!1;return!0}function ut(e,t){return Array.isArray(e)?Ae(e,t):Array.isArray(t)?Ae(t,e):e===t}function Ae(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ft(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,l,d;for(l=0;l<r.length;l++)if(d=r[l],!(s===1||d==="."))if(d==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(l-(l===r.length?1:0)).join("/")}var Y;(function(e){e.pop="pop",e.push="push"})(Y||(Y={}));var F;(function(e){e.back="back",e.forward="forward",e.unknown=""})(F||(F={}));function ht(e){if(!e)if(j){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),at(e)}const dt=/^[^#]+#/;function pt(e,t){return e.replace(dt,"#")+t}function mt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ee=()=>({left:window.pageXOffset,top:window.pageYOffset});function gt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=mt(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Se(e,t){return(history.state?history.state.position-t:-1)+e}const he=new Map;function yt(e,t){he.set(e,t)}function vt(e){const t=he.get(e);return he.delete(e),t}let Rt=()=>location.protocol+"//"+location.host;function Ge(e,t){const{pathname:n,search:r,hash:s}=t,l=e.indexOf("#");if(l>-1){let g=s.includes(e.slice(l))?e.slice(l).length:1,a=s.slice(g);return a[0]!=="/"&&(a="/"+a),we(a,"")}return we(n,e)+r+s}function Et(e,t,n,r){let s=[],l=[],d=null;const g=({state:c})=>{const y=Ge(e,location),v=n.value,b=t.value;let C=0;if(c){if(n.value=y,t.value=c,d&&d===v){d=null;return}C=b?c.position-b.position:0}else r(y);s.forEach(w=>{w(n.value,v,{delta:C,type:Y.pop,direction:C?C>0?F.forward:F.back:F.unknown})})};function a(){d=n.value}function u(c){s.push(c);const y=()=>{const v=s.indexOf(c);v>-1&&s.splice(v,1)};return l.push(y),y}function i(){const{history:c}=window;!c.state||c.replaceState(A({},c.state,{scroll:ee()}),"")}function f(){for(const c of l)c();l=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",i)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",i),{pauseListeners:a,listen:u,destroy:f}}function Ce(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ee():null}}function Pt(e){const{history:t,location:n}=window,r={value:Ge(e,n)},s={value:t.state};s.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(a,u,i){const f=e.indexOf("#"),c=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+a:Rt()+e+a;try{t[i?"replaceState":"pushState"](u,"",c),s.value=u}catch(y){console.error(y),n[i?"replace":"assign"](c)}}function d(a,u){const i=A({},t.state,Ce(s.value.back,a,s.value.forward,!0),u,{position:s.value.position});l(a,i,!0),r.value=a}function g(a,u){const i=A({},s.value,t.state,{forward:a,scroll:ee()});l(i.current,i,!0);const f=A({},Ce(r.value,a,null),{position:i.position+1},u);l(a,f,!1),r.value=a}return{location:r,state:s,push:g,replace:d}}function ln(e){e=ht(e);const t=Pt(e),n=Et(e,t.state,t.location,t.replace);function r(l,d=!0){d||n.pauseListeners(),history.go(l)}const s=A({location:"",base:e,go:r,createHref:pt.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function wt(e){return typeof e=="string"||e&&typeof e=="object"}function Ke(e){return typeof e=="string"||typeof e=="symbol"}const L={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ve=G("nf");var be;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(be||(be={}));function q(e,t){return A(new Error,{type:e,[Ve]:!0},t)}function T(e,t){return e instanceof Error&&Ve in e&&(t==null||!!(e.type&t))}const ke="[^/]+?",At={sensitive:!1,strict:!1,start:!0,end:!0},St=/[.+*?^${}()[\]/\\]/g;function Ct(e,t){const n=A({},At,t),r=[];let s=n.start?"^":"";const l=[];for(const u of e){const i=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const c=u[f];let y=40+(n.sensitive?.25:0);if(c.type===0)f||(s+="/"),s+=c.value.replace(St,"\\$&"),y+=40;else if(c.type===1){const{value:v,repeatable:b,optional:C,regexp:w}=c;l.push({name:v,repeatable:b,optional:C});const P=w||ke;if(P!==ke){y+=10;try{new RegExp(`(${P})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${v}" (${P}): `+M.message)}}let O=b?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;f||(O=C&&u.length<2?`(?:/${O})`:"/"+O),C&&(O+="?"),s+=O,y+=20,C&&(y+=-8),b&&(y+=-20),P===".*"&&(y+=-50)}i.push(y)}r.push(i)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const d=new RegExp(s,n.sensitive?"":"i");function g(u){const i=u.match(d),f={};if(!i)return null;for(let c=1;c<i.length;c++){const y=i[c]||"",v=l[c-1];f[v.name]=y&&v.repeatable?y.split("/"):y}return f}function a(u){let i="",f=!1;for(const c of e){(!f||!i.endsWith("/"))&&(i+="/"),f=!1;for(const y of c)if(y.type===0)i+=y.value;else if(y.type===1){const{value:v,repeatable:b,optional:C}=y,w=v in u?u[v]:"";if(Array.isArray(w)&&!b)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const P=Array.isArray(w)?w.join("/"):w;if(!P)if(C)c.length<2&&e.length>1&&(i.endsWith("/")?i=i.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);i+=P}}return i}return{re:d,score:r,keys:l,parse:g,stringify:a}}function bt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function kt(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const l=bt(r[n],s[n]);if(l)return l;n++}if(Math.abs(s.length-r.length)===1){if(_e(r))return 1;if(_e(s))return-1}return s.length-r.length}function _e(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const _t={type:0,value:""},Ot=/[a-zA-Z0-9_]/;function xt(e){if(!e)return[[]];if(e==="/")return[[_t]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(y){throw new Error(`ERR (${n})/"${u}": ${y}`)}let n=0,r=n;const s=[];let l;function d(){l&&s.push(l),l=[]}let g=0,a,u="",i="";function f(){!u||(n===0?l.push({type:0,value:u}):n===1||n===2||n===3?(l.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:i,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),u="")}function c(){u+=a}for(;g<e.length;){if(a=e[g++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(u&&f(),d()):a===":"?(f(),n=1):c();break;case 4:c(),n=r;break;case 1:a==="("?n=2:Ot.test(a)?c():(f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&g--);break;case 2:a===")"?i[i.length-1]=="\\"?i=i.slice(0,-1)+a:n=3:i+=a;break;case 3:f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&g--,i="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),d(),s}function Mt(e,t,n){const r=Ct(xt(e.path),n),s=A(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Nt(e,t){const n=[],r=new Map;t=xe({strict:!1,end:!0,sensitive:!1},t);function s(i){return r.get(i)}function l(i,f,c){const y=!c,v=Lt(i);v.aliasOf=c&&c.record;const b=xe(t,i),C=[v];if("alias"in i){const O=typeof i.alias=="string"?[i.alias]:i.alias;for(const M of O)C.push(A({},v,{components:c?c.record.components:v.components,path:M,aliasOf:c?c.record:v}))}let w,P;for(const O of C){const{path:M}=O;if(f&&M[0]!=="/"){const H=f.record.path,N=H[H.length-1]==="/"?"":"/";O.path=f.record.path+(M&&N+M)}if(w=Mt(O,f,b),c?c.alias.push(w):(P=P||w,P!==w&&P.alias.push(w),y&&i.name&&!Oe(w)&&d(i.name)),"children"in v){const H=v.children;for(let N=0;N<H.length;N++)l(H[N],w,c&&c.children[N])}c=c||w,a(w)}return P?()=>{d(P)}:Q}function d(i){if(Ke(i)){const f=r.get(i);f&&(r.delete(i),n.splice(n.indexOf(f),1),f.children.forEach(d),f.alias.forEach(d))}else{const f=n.indexOf(i);f>-1&&(n.splice(f,1),i.record.name&&r.delete(i.record.name),i.children.forEach(d),i.alias.forEach(d))}}function g(){return n}function a(i){let f=0;for(;f<n.length&&kt(i,n[f])>=0&&(i.record.path!==n[f].record.path||!Ue(i,n[f]));)f++;n.splice(f,0,i),i.record.name&&!Oe(i)&&r.set(i.record.name,i)}function u(i,f){let c,y={},v,b;if("name"in i&&i.name){if(c=r.get(i.name),!c)throw q(1,{location:i});b=c.record.name,y=A(It(f.params,c.keys.filter(P=>!P.optional).map(P=>P.name)),i.params),v=c.stringify(y)}else if("path"in i)v=i.path,c=n.find(P=>P.re.test(v)),c&&(y=c.parse(v),b=c.record.name);else{if(c=f.name?r.get(f.name):n.find(P=>P.re.test(f.path)),!c)throw q(1,{location:i,currentLocation:f});b=c.record.name,y=A({},f.params,i.params),v=c.stringify(y)}const C=[];let w=c;for(;w;)C.unshift(w.record),w=w.parent;return{name:b,path:v,params:y,matched:C,meta:$t(C)}}return e.forEach(i=>l(i)),{addRoute:l,resolve:u,removeRoute:d,getRoutes:g,getRecordMatcher:s}}function It(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Lt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Tt(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Tt(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Oe(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $t(e){return e.reduce((t,n)=>A(t,n.meta),{})}function xe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ue(e,t){return t.children.some(n=>n===e||Ue(e,n))}const De=/#/g,Ht=/&/g,Bt=/\//g,jt=/=/g,zt=/\?/g,Qe=/\+/g,qt=/%5B/g,Gt=/%5D/g,Fe=/%5E/g,Kt=/%60/g,We=/%7B/g,Vt=/%7C/g,Ye=/%7D/g,Ut=/%20/g;function me(e){return encodeURI(""+e).replace(Vt,"|").replace(qt,"[").replace(Gt,"]")}function Dt(e){return me(e).replace(We,"{").replace(Ye,"}").replace(Fe,"^")}function de(e){return me(e).replace(Qe,"%2B").replace(Ut,"+").replace(De,"%23").replace(Ht,"%26").replace(Kt,"`").replace(We,"{").replace(Ye,"}").replace(Fe,"^")}function Qt(e){return de(e).replace(jt,"%3D")}function Ft(e){return me(e).replace(De,"%23").replace(zt,"%3F")}function Wt(e){return e==null?"":Ft(e).replace(Bt,"%2F")}function J(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Yt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const l=r[s].replace(Qe," "),d=l.indexOf("="),g=J(d<0?l:l.slice(0,d)),a=d<0?null:J(l.slice(d+1));if(g in t){let u=t[g];Array.isArray(u)||(u=t[g]=[u]),u.push(a)}else t[g]=a}return t}function Me(e){let t="";for(let n in e){const r=e[n];if(n=Qt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(l=>l&&de(l)):[r&&de(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Xt(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}function D(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $(e,t,n,r,s){const l=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((d,g)=>{const a=f=>{f===!1?g(q(4,{from:n,to:t})):f instanceof Error?g(f):wt(f)?g(q(2,{from:t,to:f})):(l&&r.enterCallbacks[s]===l&&typeof f=="function"&&l.push(f),d())},u=e.call(r&&r.instances[s],t,n,a);let i=Promise.resolve(u);e.length<3&&(i=i.then(a)),i.catch(f=>g(f))})}function ue(e,t,n,r){const s=[];for(const l of e)for(const d in l.components){let g=l.components[d];if(!(t!=="beforeRouteEnter"&&!l.instances[d]))if(Zt(g)){const u=(g.__vccOpts||g)[t];u&&s.push($(u,n,r,l,d))}else{let a=g();s.push(()=>a.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${l.path}"`));const i=ot(u)?u.default:u;l.components[d]=i;const c=(i.__vccOpts||i)[t];return c&&$(c,n,r,l,d)()}))}}return s}function Zt(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ne(e){const t=W(pe),n=W(ze),r=I(()=>t.resolve(Z(e.to))),s=I(()=>{const{matched:a}=r.value,{length:u}=a,i=a[u-1],f=n.matched;if(!i||!f.length)return-1;const c=f.findIndex(z.bind(null,i));if(c>-1)return c;const y=Ie(a[u-2]);return u>1&&Ie(i)===y&&f[f.length-1].path!==y?f.findIndex(z.bind(null,a[u-2])):c}),l=I(()=>s.value>-1&&nn(n.params,r.value.params)),d=I(()=>s.value>-1&&s.value===n.matched.length-1&&qe(n.params,r.value.params));function g(a={}){return tn(a)?t[Z(e.replace)?"replace":"push"](Z(e.to)).catch(Q):Promise.resolve()}return{route:r,href:I(()=>r.value.href),isActive:l,isExactActive:d,navigate:g}}const Jt=He({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ne,setup(e,{slots:t}){const n=$e(Ne(e)),{options:r}=W(pe),s=I(()=>({[Le(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Le(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:Be("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),en=Jt;function tn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function nn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((l,d)=>l!==s[d]))return!1}return!0}function Ie(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Le=(e,t,n)=>e!=null?e:t!=null?t:n,rn=He({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=W(fe),s=I(()=>e.route||r.value),l=W(Pe,0),d=I(()=>s.value.matched[l]);ae(Pe,l+1),ae(st,d),ae(fe,s);const g=nt();return rt(()=>[g.value,d.value,e.name],([a,u,i],[f,c,y])=>{u&&(u.instances[i]=a,c&&c!==u&&a&&a===f&&(u.leaveGuards.size||(u.leaveGuards=c.leaveGuards),u.updateGuards.size||(u.updateGuards=c.updateGuards))),a&&u&&(!c||!z(u,c)||!f)&&(u.enterCallbacks[i]||[]).forEach(v=>v(a))},{flush:"post"}),()=>{const a=s.value,u=d.value,i=u&&u.components[e.name],f=e.name;if(!i)return Te(n.default,{Component:i,route:a});const c=u.props[e.name],y=c?c===!0?a.params:typeof c=="function"?c(a):c:null,b=Be(i,A({},y,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(u.instances[f]=null)},ref:g}));return Te(n.default,{Component:b,route:a})||b}}});function Te(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const sn=rn;function un(e){const t=Nt(e.routes,e),n=e.parseQuery||Yt,r=e.stringifyQuery||Me,s=e.history,l=D(),d=D(),g=D(),a=et(L);let u=L;j&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const i=ce.bind(null,o=>""+o),f=ce.bind(null,Wt),c=ce.bind(null,J);function y(o,p){let h,m;return Ke(o)?(h=t.getRecordMatcher(o),m=p):m=o,t.addRoute(m,h)}function v(o){const p=t.getRecordMatcher(o);p&&t.removeRoute(p)}function b(){return t.getRoutes().map(o=>o.record)}function C(o){return!!t.getRecordMatcher(o)}function w(o,p){if(p=A({},p||a.value),typeof o=="string"){const R=le(n,o,p.path),_=t.resolve({path:R.path},p),U=s.createHref(R.fullPath);return A(R,_,{params:c(_.params),hash:J(R.hash),redirectedFrom:void 0,href:U})}let h;if("path"in o)h=A({},o,{path:le(n,o.path,p.path).path});else{const R=A({},o.params);for(const _ in R)R[_]==null&&delete R[_];h=A({},o,{params:f(o.params)}),p.params=f(p.params)}const m=t.resolve(h,p),S=o.hash||"";m.params=i(c(m.params));const k=ct(r,A({},o,{hash:Dt(S),path:m.path})),E=s.createHref(k);return A({fullPath:k,hash:S,query:r===Me?Xt(o.query):o.query||{}},m,{redirectedFrom:void 0,href:E})}function P(o){return typeof o=="string"?le(n,o,a.value.path):A({},o)}function O(o,p){if(u!==o)return q(8,{from:p,to:o})}function M(o){return K(o)}function H(o){return M(A(P(o),{replace:!0}))}function N(o){const p=o.matched[o.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let m=typeof h=="function"?h(o):h;return typeof m=="string"&&(m=m.includes("?")||m.includes("#")?m=P(m):{path:m},m.params={}),A({query:o.query,hash:o.hash,params:o.params},m)}}function K(o,p){const h=u=w(o),m=a.value,S=o.state,k=o.force,E=o.replace===!0,R=N(h);if(R)return K(A(P(R),{state:S,force:k,replace:E}),p||h);const _=h;_.redirectedFrom=p;let U;return!k&&lt(r,m,h)&&(U=q(16,{to:_,from:m}),Ee(m,m,!0,!1)),(U?Promise.resolve(U):ge(_,m)).catch(x=>T(x)?T(x,2)?x:re(x):ne(x,_,m)).then(x=>{if(x){if(T(x,2))return K(A(P(x.to),{state:S,force:k,replace:E}),p||_)}else x=ve(_,m,!0,E,S);return ye(_,m,x),x})}function Xe(o,p){const h=O(o,p);return h?Promise.reject(h):Promise.resolve()}function ge(o,p){let h;const[m,S,k]=on(o,p);h=ue(m.reverse(),"beforeRouteLeave",o,p);for(const R of m)R.leaveGuards.forEach(_=>{h.push($(_,o,p))});const E=Xe.bind(null,o,p);return h.push(E),B(h).then(()=>{h=[];for(const R of l.list())h.push($(R,o,p));return h.push(E),B(h)}).then(()=>{h=ue(S,"beforeRouteUpdate",o,p);for(const R of S)R.updateGuards.forEach(_=>{h.push($(_,o,p))});return h.push(E),B(h)}).then(()=>{h=[];for(const R of o.matched)if(R.beforeEnter&&!p.matched.includes(R))if(Array.isArray(R.beforeEnter))for(const _ of R.beforeEnter)h.push($(_,o,p));else h.push($(R.beforeEnter,o,p));return h.push(E),B(h)}).then(()=>(o.matched.forEach(R=>R.enterCallbacks={}),h=ue(k,"beforeRouteEnter",o,p),h.push(E),B(h))).then(()=>{h=[];for(const R of d.list())h.push($(R,o,p));return h.push(E),B(h)}).catch(R=>T(R,8)?R:Promise.reject(R))}function ye(o,p,h){for(const m of g.list())m(o,p,h)}function ve(o,p,h,m,S){const k=O(o,p);if(k)return k;const E=p===L,R=j?history.state:{};h&&(m||E?s.replace(o.fullPath,A({scroll:E&&R&&R.scroll},S)):s.push(o.fullPath,S)),a.value=o,Ee(o,p,h,E),re()}let V;function Ze(){V||(V=s.listen((o,p,h)=>{const m=w(o),S=N(m);if(S){K(A(S,{replace:!0}),m).catch(Q);return}u=m;const k=a.value;j&&yt(Se(k.fullPath,h.delta),ee()),ge(m,k).catch(E=>T(E,12)?E:T(E,2)?(K(E.to,m).then(R=>{T(R,20)&&!h.delta&&h.type===Y.pop&&s.go(-1,!1)}).catch(Q),Promise.reject()):(h.delta&&s.go(-h.delta,!1),ne(E,m,k))).then(E=>{E=E||ve(m,k,!1),E&&(h.delta?s.go(-h.delta,!1):h.type===Y.pop&&T(E,20)&&s.go(-1,!1)),ye(m,k,E)}).catch(Q)}))}let te=D(),Re=D(),X;function ne(o,p,h){re(o);const m=Re.list();return m.length?m.forEach(S=>S(o,p,h)):console.error(o),Promise.reject(o)}function Je(){return X&&a.value!==L?Promise.resolve():new Promise((o,p)=>{te.add([o,p])})}function re(o){return X||(X=!o,Ze(),te.list().forEach(([p,h])=>o?h(o):p()),te.reset()),o}function Ee(o,p,h,m){const{scrollBehavior:S}=e;if(!j||!S)return Promise.resolve();const k=!h&&vt(Se(o.fullPath,0))||(m||!h)&&history.state&&history.state.scroll||null;return tt().then(()=>S(o,p,k)).then(E=>E&&gt(E)).catch(E=>ne(E,o,p))}const se=o=>s.go(o);let oe;const ie=new Set;return{currentRoute:a,addRoute:y,removeRoute:v,hasRoute:C,getRoutes:b,resolve:w,options:e,push:M,replace:H,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:l.add,beforeResolve:d.add,afterEach:g.add,onError:Re.add,isReady:Je,install(o){const p=this;o.component("RouterLink",en),o.component("RouterView",sn),o.config.globalProperties.$router=p,Object.defineProperty(o.config.globalProperties,"$route",{enumerable:!0,get:()=>Z(a)}),j&&!oe&&a.value===L&&(oe=!0,M(s.location).catch(S=>{}));const h={};for(const S in L)h[S]=I(()=>a.value[S]);o.provide(pe,p),o.provide(ze,$e(h)),o.provide(fe,a);const m=o.unmount;ie.add(o),o.unmount=function(){ie.delete(o),ie.size<1&&(u=L,V&&V(),V=null,a.value=L,oe=!1,X=!1),m()}}}}function B(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function on(e,t){const n=[],r=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let d=0;d<l;d++){const g=t.matched[d];g&&(e.matched.find(u=>z(u,g))?r.push(g):n.push(g));const a=e.matched[d];a&&(t.matched.find(u=>z(u,a))||s.push(a))}return[n,r,s]}export{ln as a,un as c};
