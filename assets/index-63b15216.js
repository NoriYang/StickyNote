(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function oh(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Qe={},Oi=[],mn=()=>{},Xb=()=>!1,Jb=/^on[^a-z]/,ac=t=>Jb.test(t),ah=t=>t.startsWith("onUpdate:"),_t=Object.assign,ch=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zb=Object.prototype.hasOwnProperty,ke=(t,e)=>Zb.call(t,e),ie=Array.isArray,Di=t=>cc(t)==="[object Map]",Sm=t=>cc(t)==="[object Set]",ye=t=>typeof t=="function",ht=t=>typeof t=="string",lh=t=>typeof t=="symbol",tt=t=>t!==null&&typeof t=="object",km=t=>tt(t)&&ye(t.then)&&ye(t.catch),Rm=Object.prototype.toString,cc=t=>Rm.call(t),eE=t=>cc(t).slice(8,-1),Om=t=>cc(t)==="[object Object]",uh=t=>ht(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wa=oh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},tE=/-(\w)/g,$n=lc(t=>t.replace(tE,(e,n)=>n?n.toUpperCase():"")),nE=/\B([A-Z])/g,nr=lc(t=>t.replace(nE,"-$1").toLowerCase()),uc=lc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Dl=lc(t=>t?`on${uc(t)}`:""),zr=(t,e)=>!Object.is(t,e),ba=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},xa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},au=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let hp;const cu=()=>hp||(hp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hh(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ht(s)?oE(s):hh(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(ht(t))return t;if(tt(t))return t}}const sE=/;(?![^(]*\))/g,iE=/:([^]+)/,rE=/\/\*[^]*?\*\//g;function oE(t){const e={};return t.replace(rE,"").split(sE).forEach(n=>{if(n){const s=n.split(iE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function fh(t){let e="";if(ht(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const s=fh(t[n]);s&&(e+=s+" ")}else if(tt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const aE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cE=oh(aE);function Dm(t){return!!t||t===""}const ZD=t=>ht(t)?t:t==null?"":ie(t)||tt(t)&&(t.toString===Rm||!ye(t.toString))?JSON.stringify(t,Nm,2):String(t),Nm=(t,e)=>e&&e.__v_isRef?Nm(t,e.value):Di(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Sm(e)?{[`Set(${e.size})`]:[...e.values()]}:tt(e)&&!ie(e)&&!Om(e)?String(e):e;let Jt;class xm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Jt,!e&&Jt&&(this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Jt;try{return Jt=this,e()}finally{Jt=n}}}on(){Jt=this}off(){Jt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Pm(t){return new xm(t)}function lE(t,e=Jt){e&&e.active&&e.effects.push(t)}function Lm(){return Jt}function uE(t){Jt&&Jt.cleanups.push(t)}const dh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Mm=t=>(t.w&Ss)>0,Fm=t=>(t.n&Ss)>0,hE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ss},fE=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Mm(i)&&!Fm(i)?i.delete(t):e[n++]=i,i.w&=~Ss,i.n&=~Ss}e.length=n}},Pa=new WeakMap;let Cr=0,Ss=1;const lu=30;let pn;const Js=Symbol(""),uu=Symbol("");class ph{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,lE(this,s)}run(){if(!this.active)return this.fn();let e=pn,n=vs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=pn,pn=this,vs=!0,Ss=1<<++Cr,Cr<=lu?hE(this):fp(this),this.fn()}finally{Cr<=lu&&fE(this),Ss=1<<--Cr,pn=this.parent,vs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pn===this?this.deferStop=!0:this.active&&(fp(this),this.onStop&&this.onStop(),this.active=!1)}}function fp(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let vs=!0;const Um=[];function sr(){Um.push(vs),vs=!1}function ir(){const t=Um.pop();vs=t===void 0?!0:t}function Qt(t,e,n){if(vs&&pn){let s=Pa.get(t);s||Pa.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=dh()),$m(i)}}function $m(t,e){let n=!1;Cr<=lu?Fm(t)||(t.n|=Ss,n=!Mm(t)):n=!t.has(pn),n&&(t.add(pn),pn.deps.push(t))}function Yn(t,e,n,s,i,r){const o=Pa.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&ie(t)){const l=Number(s);o.forEach((u,f)=>{(f==="length"||f>=l)&&c.push(u)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":ie(t)?uh(n)&&c.push(o.get("length")):(c.push(o.get(Js)),Di(t)&&c.push(o.get(uu)));break;case"delete":ie(t)||(c.push(o.get(Js)),Di(t)&&c.push(o.get(uu)));break;case"set":Di(t)&&c.push(o.get(Js));break}if(c.length===1)c[0]&&hu(c[0]);else{const l=[];for(const u of c)u&&l.push(...u);hu(dh(l))}}function hu(t,e){const n=ie(t)?t:[...t];for(const s of n)s.computed&&dp(s);for(const s of n)s.computed||dp(s)}function dp(t,e){(t!==pn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function dE(t,e){var n;return(n=Pa.get(t))==null?void 0:n.get(e)}const pE=oh("__proto__,__v_isRef,__isVue"),Vm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(lh)),gE=gh(),mE=gh(!1,!0),yE=gh(!0),pp=vE();function vE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Re(this);for(let r=0,o=this.length;r<o;r++)Qt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Re)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){sr();const s=Re(this)[e].apply(this,n);return ir(),s}}),t}function _E(t){const e=Re(this);return Qt(e,"has",t),e.hasOwnProperty(t)}function gh(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?LE:zm:e?qm:Hm).get(s))return s;const o=ie(s);if(!t){if(o&&ke(pp,i))return Reflect.get(pp,i,r);if(i==="hasOwnProperty")return _E}const c=Reflect.get(s,i,r);return(lh(i)?Vm.has(i):pE(i))||(t||Qt(s,"get",i),e)?c:ot(c)?o&&uh(i)?c:c.value:tt(c)?t?Km(c):rr(c):c}}const wE=jm(),bE=jm(!0);function jm(t=!1){return function(n,s,i,r){let o=n[s];if($i(o)&&ot(o)&&!ot(i))return!1;if(!t&&(!La(i)&&!$i(i)&&(o=Re(o),i=Re(i)),!ie(n)&&ot(o)&&!ot(i)))return o.value=i,!0;const c=ie(n)&&uh(s)?Number(s)<n.length:ke(n,s),l=Reflect.set(n,s,i,r);return n===Re(r)&&(c?zr(i,o)&&Yn(n,"set",s,i):Yn(n,"add",s,i)),l}}function EE(t,e){const n=ke(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Yn(t,"delete",e,void 0),s}function TE(t,e){const n=Reflect.has(t,e);return(!lh(e)||!Vm.has(e))&&Qt(t,"has",e),n}function IE(t){return Qt(t,"iterate",ie(t)?"length":Js),Reflect.ownKeys(t)}const Bm={get:gE,set:wE,deleteProperty:EE,has:TE,ownKeys:IE},CE={get:yE,set(t,e){return!0},deleteProperty(t,e){return!0}},AE=_t({},Bm,{get:mE,set:bE}),mh=t=>t,hc=t=>Reflect.getPrototypeOf(t);function sa(t,e,n=!1,s=!1){t=t.__v_raw;const i=Re(t),r=Re(e);n||(e!==r&&Qt(i,"get",e),Qt(i,"get",r));const{has:o}=hc(i),c=s?mh:n?_h:Kr;if(o.call(i,e))return c(t.get(e));if(o.call(i,r))return c(t.get(r));t!==i&&t.get(e)}function ia(t,e=!1){const n=this.__v_raw,s=Re(n),i=Re(t);return e||(t!==i&&Qt(s,"has",t),Qt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ra(t,e=!1){return t=t.__v_raw,!e&&Qt(Re(t),"iterate",Js),Reflect.get(t,"size",t)}function gp(t){t=Re(t);const e=Re(this);return hc(e).has.call(e,t)||(e.add(t),Yn(e,"add",t,t)),this}function mp(t,e){e=Re(e);const n=Re(this),{has:s,get:i}=hc(n);let r=s.call(n,t);r||(t=Re(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?zr(e,o)&&Yn(n,"set",t,e):Yn(n,"add",t,e),this}function yp(t){const e=Re(this),{has:n,get:s}=hc(e);let i=n.call(e,t);i||(t=Re(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Yn(e,"delete",t,void 0),r}function vp(){const t=Re(this),e=t.size!==0,n=t.clear();return e&&Yn(t,"clear",void 0,void 0),n}function oa(t,e){return function(s,i){const r=this,o=r.__v_raw,c=Re(o),l=e?mh:t?_h:Kr;return!t&&Qt(c,"iterate",Js),o.forEach((u,f)=>s.call(i,l(u),l(f),r))}}function aa(t,e,n){return function(...s){const i=this.__v_raw,r=Re(i),o=Di(r),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=i[t](...s),f=n?mh:e?_h:Kr;return!e&&Qt(r,"iterate",l?uu:Js),{next(){const{value:g,done:m}=u.next();return m?{value:g,done:m}:{value:c?[f(g[0]),f(g[1])]:f(g),done:m}},[Symbol.iterator](){return this}}}}function as(t){return function(...e){return t==="delete"?!1:this}}function SE(){const t={get(r){return sa(this,r)},get size(){return ra(this)},has:ia,add:gp,set:mp,delete:yp,clear:vp,forEach:oa(!1,!1)},e={get(r){return sa(this,r,!1,!0)},get size(){return ra(this)},has:ia,add:gp,set:mp,delete:yp,clear:vp,forEach:oa(!1,!0)},n={get(r){return sa(this,r,!0)},get size(){return ra(this,!0)},has(r){return ia.call(this,r,!0)},add:as("add"),set:as("set"),delete:as("delete"),clear:as("clear"),forEach:oa(!0,!1)},s={get(r){return sa(this,r,!0,!0)},get size(){return ra(this,!0)},has(r){return ia.call(this,r,!0)},add:as("add"),set:as("set"),delete:as("delete"),clear:as("clear"),forEach:oa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=aa(r,!1,!1),n[r]=aa(r,!0,!1),e[r]=aa(r,!1,!0),s[r]=aa(r,!0,!0)}),[t,n,e,s]}const[kE,RE,OE,DE]=SE();function yh(t,e){const n=e?t?DE:OE:t?RE:kE;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ke(n,i)&&i in s?n:s,i,r)}const NE={get:yh(!1,!1)},xE={get:yh(!1,!0)},PE={get:yh(!0,!1)},Hm=new WeakMap,qm=new WeakMap,zm=new WeakMap,LE=new WeakMap;function ME(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function FE(t){return t.__v_skip||!Object.isExtensible(t)?0:ME(eE(t))}function rr(t){return $i(t)?t:vh(t,!1,Bm,NE,Hm)}function UE(t){return vh(t,!1,AE,xE,qm)}function Km(t){return vh(t,!0,CE,PE,zm)}function vh(t,e,n,s,i){if(!tt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=FE(t);if(o===0)return t;const c=new Proxy(t,o===2?s:n);return i.set(t,c),c}function _s(t){return $i(t)?_s(t.__v_raw):!!(t&&t.__v_isReactive)}function $i(t){return!!(t&&t.__v_isReadonly)}function La(t){return!!(t&&t.__v_isShallow)}function Wm(t){return _s(t)||$i(t)}function Re(t){const e=t&&t.__v_raw;return e?Re(e):t}function fc(t){return xa(t,"__v_skip",!0),t}const Kr=t=>tt(t)?rr(t):t,_h=t=>tt(t)?Km(t):t;function Gm(t){vs&&pn&&(t=Re(t),$m(t.dep||(t.dep=dh())))}function Qm(t,e){t=Re(t);const n=t.dep;n&&hu(n)}function ot(t){return!!(t&&t.__v_isRef===!0)}function wh(t){return Ym(t,!1)}function $E(t){return Ym(t,!0)}function Ym(t,e){return ot(t)?t:new VE(t,e)}class VE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Re(e),this._value=n?e:Kr(e)}get value(){return Gm(this),this._value}set value(e){const n=this.__v_isShallow||La(e)||$i(e);e=n?e:Re(e),zr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Kr(e),Qm(this))}}function ws(t){return ot(t)?t.value:t}const jE={get:(t,e,n)=>ws(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return ot(i)&&!ot(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Xm(t){return _s(t)?t:new Proxy(t,jE)}function BE(t){const e=ie(t)?new Array(t.length):{};for(const n in t)e[n]=qE(t,n);return e}class HE{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return dE(Re(this._object),this._key)}}function qE(t,e,n){const s=t[e];return ot(s)?s:new HE(t,e,n)}class zE{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ph(e,()=>{this._dirty||(this._dirty=!0,Qm(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Re(this);return Gm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function KE(t,e,n=!1){let s,i;const r=ye(t);return r?(s=t,i=mn):(s=t.get,i=t.set),new zE(s,i,r||!i,n)}function bs(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){dc(r,e,n)}return i}function yn(t,e,n,s){if(ye(t)){const r=bs(t,e,n,s);return r&&km(r)&&r.catch(o=>{dc(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(yn(t[r],e,n,s));return i}function dc(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,c=n;for(;r;){const u=r.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,o,c)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){bs(l,null,10,[t,o,c]);return}}WE(t,n,i,s)}function WE(t,e,n,s=!0){console.error(t)}let Wr=!1,fu=!1;const Nt=[];let Dn=0;const Ni=[];let zn=null,zs=0;const Jm=Promise.resolve();let bh=null;function Eh(t){const e=bh||Jm;return t?e.then(this?t.bind(this):t):e}function GE(t){let e=Dn+1,n=Nt.length;for(;e<n;){const s=e+n>>>1;Gr(Nt[s])<t?e=s+1:n=s}return e}function Th(t){(!Nt.length||!Nt.includes(t,Wr&&t.allowRecurse?Dn+1:Dn))&&(t.id==null?Nt.push(t):Nt.splice(GE(t.id),0,t),Zm())}function Zm(){!Wr&&!fu&&(fu=!0,bh=Jm.then(ty))}function QE(t){const e=Nt.indexOf(t);e>Dn&&Nt.splice(e,1)}function YE(t){ie(t)?Ni.push(...t):(!zn||!zn.includes(t,t.allowRecurse?zs+1:zs))&&Ni.push(t),Zm()}function _p(t,e=Wr?Dn+1:0){for(;e<Nt.length;e++){const n=Nt[e];n&&n.pre&&(Nt.splice(e,1),e--,n())}}function ey(t){if(Ni.length){const e=[...new Set(Ni)];if(Ni.length=0,zn){zn.push(...e);return}for(zn=e,zn.sort((n,s)=>Gr(n)-Gr(s)),zs=0;zs<zn.length;zs++)zn[zs]();zn=null,zs=0}}const Gr=t=>t.id==null?1/0:t.id,XE=(t,e)=>{const n=Gr(t)-Gr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ty(t){fu=!1,Wr=!0,Nt.sort(XE);const e=mn;try{for(Dn=0;Dn<Nt.length;Dn++){const n=Nt[Dn];n&&n.active!==!1&&bs(n,null,14)}}finally{Dn=0,Nt.length=0,ey(),Wr=!1,bh=null,(Nt.length||Ni.length)&&ty()}}function JE(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Qe;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:g,trim:m}=s[f]||Qe;m&&(i=n.map(_=>ht(_)?_.trim():_)),g&&(i=n.map(au))}let c,l=s[c=Dl(e)]||s[c=Dl($n(e))];!l&&r&&(l=s[c=Dl(nr(e))]),l&&yn(l,t,6,i);const u=s[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,yn(u,t,6,i)}}function ny(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},c=!1;if(!ye(t)){const l=u=>{const f=ny(u,e,!0);f&&(c=!0,_t(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!c?(tt(t)&&s.set(t,null),null):(ie(r)?r.forEach(l=>o[l]=null):_t(o,r),tt(t)&&s.set(t,o),o)}function pc(t,e){return!t||!ac(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,nr(e))||ke(t,e))}let en=null,gc=null;function Ma(t){const e=en;return en=t,gc=t&&t.type.__scopeId||null,e}function eN(t){gc=t}function tN(){gc=null}function du(t,e=en,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Op(-1);const r=Ma(e);let o;try{o=t(...i)}finally{Ma(r),s._d&&Op(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Nl(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:c,attrs:l,emit:u,render:f,renderCache:g,data:m,setupState:_,ctx:C,inheritAttrs:D}=t;let N,U;const $=Ma(t);try{if(n.shapeFlag&4){const K=i||s;N=On(f.call(K,K,g,r,_,m,C)),U=l}else{const K=e;N=On(K.length>1?K(r,{attrs:l,slots:c,emit:u}):K(r,null)),U=e.props?l:ZE(l)}}catch(K){Lr.length=0,dc(K,t,1),N=Ct(ni)}let Z=N;if(U&&D!==!1){const K=Object.keys(U),{shapeFlag:be}=Z;K.length&&be&7&&(o&&K.some(ah)&&(U=e0(U,o)),Z=Vi(Z,U))}return n.dirs&&(Z=Vi(Z),Z.dirs=Z.dirs?Z.dirs.concat(n.dirs):n.dirs),n.transition&&(Z.transition=n.transition),N=Z,Ma($),N}const ZE=t=>{let e;for(const n in t)(n==="class"||n==="style"||ac(n))&&((e||(e={}))[n]=t[n]);return e},e0=(t,e)=>{const n={};for(const s in t)(!ah(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function t0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:c,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?wp(s,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const m=f[g];if(o[m]!==s[m]&&!pc(u,m))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:s===o?!1:s?o?wp(s,o,u):!0:!!o;return!1}function wp(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!pc(n,r))return!0}return!1}function n0({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const s0=t=>t.__isSuspense;function i0(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):YE(t)}const ca={};function xr(t,e,n){return sy(t,e,n)}function sy(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Qe){var c;const l=Lm()===((c=vt)==null?void 0:c.scope)?vt:null;let u,f=!1,g=!1;if(ot(t)?(u=()=>t.value,f=La(t)):_s(t)?(u=()=>t,s=!0):ie(t)?(g=!0,f=t.some(K=>_s(K)||La(K)),u=()=>t.map(K=>{if(ot(K))return K.value;if(_s(K))return Gs(K);if(ye(K))return bs(K,l,2)})):ye(t)?e?u=()=>bs(t,l,2):u=()=>{if(!(l&&l.isUnmounted))return m&&m(),yn(t,l,3,[_])}:u=mn,e&&s){const K=u;u=()=>Gs(K())}let m,_=K=>{m=$.onStop=()=>{bs(K,l,4)}},C;if(Xr)if(_=mn,e?n&&yn(e,l,3,[u(),g?[]:void 0,_]):u(),i==="sync"){const K=J0();C=K.__watcherHandles||(K.__watcherHandles=[])}else return mn;let D=g?new Array(t.length).fill(ca):ca;const N=()=>{if($.active)if(e){const K=$.run();(s||f||(g?K.some((be,He)=>zr(be,D[He])):zr(K,D)))&&(m&&m(),yn(e,l,3,[K,D===ca?void 0:g&&D[0]===ca?[]:D,_]),D=K)}else $.run()};N.allowRecurse=!!e;let U;i==="sync"?U=N:i==="post"?U=()=>Wt(N,l&&l.suspense):(N.pre=!0,l&&(N.id=l.uid),U=()=>Th(N));const $=new ph(u,U);e?n?N():D=$.run():i==="post"?Wt($.run.bind($),l&&l.suspense):$.run();const Z=()=>{$.stop(),l&&l.scope&&ch(l.scope.effects,$)};return C&&C.push(Z),Z}function r0(t,e,n){const s=this.proxy,i=ht(t)?t.includes(".")?iy(s,t):()=>s[t]:t.bind(s,s);let r;ye(e)?r=e:(r=e.handler,n=e);const o=vt;ji(this);const c=sy(i,r.bind(s),n);return o?ji(o):Zs(),c}function iy(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Gs(t,e){if(!tt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ot(t))Gs(t.value,e);else if(ie(t))for(let n=0;n<t.length;n++)Gs(t[n],e);else if(Sm(t)||Di(t))t.forEach(n=>{Gs(n,e)});else if(Om(t))for(const n in t)Gs(t[n],e);return t}function nN(t,e){const n=en;if(n===null)return t;const s=wc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,c,l,u=Qe]=e[r];o&&(ye(o)&&(o={mounted:o,updated:o}),o.deep&&Gs(c),i.push({dir:o,instance:s,value:c,oldValue:void 0,arg:l,modifiers:u}))}return t}function Bs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const c=i[o];r&&(c.oldValue=r[o].value);let l=c.dir[s];l&&(sr(),yn(l,n,8,[t.el,c,t,e]),ir())}}function ry(t,e){return ye(t)?(()=>_t({name:t.name},e,{setup:t}))():t}const Ea=t=>!!t.type.__asyncLoader,oy=t=>t.type.__isKeepAlive;function o0(t,e){ay(t,"a",e)}function a0(t,e){ay(t,"da",e)}function ay(t,e,n=vt){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(mc(e,s,n),n){let i=n.parent;for(;i&&i.parent;)oy(i.parent.vnode)&&c0(s,e,n,i),i=i.parent}}function c0(t,e,n,s){const i=mc(e,t,s,!0);cy(()=>{ch(s[e],i)},n)}function mc(t,e,n=vt,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;sr(),ji(n);const c=yn(e,n,t,o);return Zs(),ir(),c});return s?i.unshift(r):i.push(r),r}}const ns=t=>(e,n=vt)=>(!Xr||t==="sp")&&mc(t,(...s)=>e(...s),n),l0=ns("bm"),u0=ns("m"),h0=ns("bu"),f0=ns("u"),d0=ns("bum"),cy=ns("um"),p0=ns("sp"),g0=ns("rtg"),m0=ns("rtc");function y0(t,e=vt){mc("ec",t,e)}const ly="components";function uy(t,e){return _0(ly,t,!0,e)||t}const v0=Symbol.for("v-ndc");function _0(t,e,n=!0,s=!1){const i=en||vt;if(i){const r=i.type;if(t===ly){const c=Q0(r,!1);if(c&&(c===e||c===$n(e)||c===uc($n(e))))return r}const o=bp(i[t]||r[t],e)||bp(i.appContext[t],e);return!o&&s?r:o}}function bp(t,e){return t&&(t[e]||t[$n(e)]||t[uc($n(e))])}function sN(t,e,n,s){let i;const r=n&&n[s];if(ie(t)||ht(t)){i=new Array(t.length);for(let o=0,c=t.length;o<c;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(tt(t))if(t[Symbol.iterator])i=Array.from(t,(o,c)=>e(o,c,void 0,r&&r[c]));else{const o=Object.keys(t);i=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const u=o[c];i[c]=e(t[u],u,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const pu=t=>t?Ty(t)?wc(t)||t.proxy:pu(t.parent):null,Pr=_t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pu(t.parent),$root:t=>pu(t.root),$emit:t=>t.emit,$options:t=>Ih(t),$forceUpdate:t=>t.f||(t.f=()=>Th(t.update)),$nextTick:t=>t.n||(t.n=Eh.bind(t.proxy)),$watch:t=>r0.bind(t)}),xl=(t,e)=>t!==Qe&&!t.__isScriptSetup&&ke(t,e),w0={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(xl(s,e))return o[e]=1,s[e];if(i!==Qe&&ke(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,r[e];if(n!==Qe&&ke(n,e))return o[e]=4,n[e];gu&&(o[e]=0)}}const f=Pr[e];let g,m;if(f)return e==="$attrs"&&Qt(t,"get",e),f(t);if((g=c.__cssModules)&&(g=g[e]))return g;if(n!==Qe&&ke(n,e))return o[e]=4,n[e];if(m=l.config.globalProperties,ke(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return xl(i,e)?(i[e]=n,!0):s!==Qe&&ke(s,e)?(s[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let c;return!!n[o]||t!==Qe&&ke(t,o)||xl(e,o)||(c=r[0])&&ke(c,o)||ke(s,o)||ke(Pr,o)||ke(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ep(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let gu=!0;function b0(t){const e=Ih(t),n=t.proxy,s=t.ctx;gu=!1,e.beforeCreate&&Tp(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:g,mounted:m,beforeUpdate:_,updated:C,activated:D,deactivated:N,beforeDestroy:U,beforeUnmount:$,destroyed:Z,unmounted:K,render:be,renderTracked:He,renderTriggered:Je,errorCaptured:ve,serverPrefetch:de,expose:Ke,inheritAttrs:dt,components:St,directives:$t,filters:En}=e;if(u&&E0(u,s,null),o)for(const Ne in o){const Oe=o[Ne];ye(Oe)&&(s[Ne]=Oe.bind(n))}if(i){const Ne=i.call(n,n);tt(Ne)&&(t.data=rr(Ne))}if(gu=!0,r)for(const Ne in r){const Oe=r[Ne],sn=ye(Oe)?Oe.bind(n,n):ye(Oe.get)?Oe.get.bind(n,n):mn,R=!ye(Oe)&&ye(Oe.set)?Oe.set.bind(n):mn,Kt=Zt({get:sn,set:R});Object.defineProperty(s,Ne,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:Et=>Kt.value=Et})}if(c)for(const Ne in c)hy(c[Ne],s,n,Ne);if(l){const Ne=ye(l)?l.call(n):l;Reflect.ownKeys(Ne).forEach(Oe=>{Ta(Oe,Ne[Oe])})}f&&Tp(f,t,"c");function Ie(Ne,Oe){ie(Oe)?Oe.forEach(sn=>Ne(sn.bind(n))):Oe&&Ne(Oe.bind(n))}if(Ie(l0,g),Ie(u0,m),Ie(h0,_),Ie(f0,C),Ie(o0,D),Ie(a0,N),Ie(y0,ve),Ie(m0,He),Ie(g0,Je),Ie(d0,$),Ie(cy,K),Ie(p0,de),ie(Ke))if(Ke.length){const Ne=t.exposed||(t.exposed={});Ke.forEach(Oe=>{Object.defineProperty(Ne,Oe,{get:()=>n[Oe],set:sn=>n[Oe]=sn})})}else t.exposed||(t.exposed={});be&&t.render===mn&&(t.render=be),dt!=null&&(t.inheritAttrs=dt),St&&(t.components=St),$t&&(t.directives=$t)}function E0(t,e,n=mn){ie(t)&&(t=mu(t));for(const s in t){const i=t[s];let r;tt(i)?"default"in i?r=vn(i.from||s,i.default,!0):r=vn(i.from||s):r=vn(i),ot(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Tp(t,e,n){yn(ie(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function hy(t,e,n,s){const i=s.includes(".")?iy(n,s):()=>n[s];if(ht(t)){const r=e[t];ye(r)&&xr(i,r)}else if(ye(t))xr(i,t.bind(n));else if(tt(t))if(ie(t))t.forEach(r=>hy(r,e,n,s));else{const r=ye(t.handler)?t.handler.bind(n):e[t.handler];ye(r)&&xr(i,r,t)}}function Ih(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,c=r.get(e);let l;return c?l=c:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(u=>Fa(l,u,o,!0)),Fa(l,e,o)),tt(e)&&r.set(e,l),l}function Fa(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Fa(t,r,n,!0),i&&i.forEach(o=>Fa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const c=T0[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const T0={data:Ip,props:Cp,emits:Cp,methods:Ar,computed:Ar,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:Ar,directives:Ar,watch:C0,provide:Ip,inject:I0};function Ip(t,e){return e?t?function(){return _t(ye(t)?t.call(this,this):t,ye(e)?e.call(this,this):e)}:e:t}function I0(t,e){return Ar(mu(t),mu(e))}function mu(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function qt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ar(t,e){return t?_t(Object.create(null),t,e):e}function Cp(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:_t(Object.create(null),Ep(t),Ep(e??{})):e}function C0(t,e){if(!t)return e;if(!e)return t;const n=_t(Object.create(null),t);for(const s in e)n[s]=qt(t[s],e[s]);return n}function fy(){return{app:null,config:{isNativeTag:Xb,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let A0=0;function S0(t,e){return function(s,i=null){ye(s)||(s=_t({},s)),i!=null&&!tt(i)&&(i=null);const r=fy(),o=new Set;let c=!1;const l=r.app={_uid:A0++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Z0,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&ye(u.install)?(o.add(u),u.install(l,...f)):ye(u)&&(o.add(u),u(l,...f))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,f){return f?(r.components[u]=f,l):r.components[u]},directive(u,f){return f?(r.directives[u]=f,l):r.directives[u]},mount(u,f,g){if(!c){const m=Ct(s,i);return m.appContext=r,f&&e?e(m,u):t(m,u,g),c=!0,l._container=u,u.__vue_app__=l,wc(m.component)||m.component.proxy}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return r.provides[u]=f,l},runWithContext(u){Qr=l;try{return u()}finally{Qr=null}}};return l}}let Qr=null;function Ta(t,e){if(vt){let n=vt.provides;const s=vt.parent&&vt.parent.provides;s===n&&(n=vt.provides=Object.create(s)),n[t]=e}}function vn(t,e,n=!1){const s=vt||en;if(s||Qr){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Qr._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ye(e)?e.call(s&&s.proxy):e}}function k0(){return!!(vt||en||Qr)}function R0(t,e,n,s=!1){const i={},r={};xa(r,_c,1),t.propsDefaults=Object.create(null),dy(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:UE(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function O0(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,c=Re(i),[l]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let g=0;g<f.length;g++){let m=f[g];if(pc(t.emitsOptions,m))continue;const _=e[m];if(l)if(ke(r,m))_!==r[m]&&(r[m]=_,u=!0);else{const C=$n(m);i[C]=yu(l,c,C,_,t,!1)}else _!==r[m]&&(r[m]=_,u=!0)}}}else{dy(t,e,i,r)&&(u=!0);let f;for(const g in c)(!e||!ke(e,g)&&((f=nr(g))===g||!ke(e,f)))&&(l?n&&(n[g]!==void 0||n[f]!==void 0)&&(i[g]=yu(l,c,g,void 0,t,!0)):delete i[g]);if(r!==c)for(const g in r)(!e||!ke(e,g))&&(delete r[g],u=!0)}u&&Yn(t,"set","$attrs")}function dy(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(wa(l))continue;const u=e[l];let f;i&&ke(i,f=$n(l))?!r||!r.includes(f)?n[f]=u:(c||(c={}))[f]=u:pc(t.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(r){const l=Re(n),u=c||Qe;for(let f=0;f<r.length;f++){const g=r[f];n[g]=yu(i,l,g,u[g],t,!ke(u,g))}}return o}function yu(t,e,n,s,i,r){const o=t[n];if(o!=null){const c=ke(o,"default");if(c&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ye(l)){const{propsDefaults:u}=i;n in u?s=u[n]:(ji(i),s=u[n]=l.call(null,e),Zs())}else s=l}o[0]&&(r&&!c?s=!1:o[1]&&(s===""||s===nr(n))&&(s=!0))}return s}function py(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},c=[];let l=!1;if(!ye(t)){const f=g=>{l=!0;const[m,_]=py(g,e,!0);_t(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!l)return tt(t)&&s.set(t,Oi),Oi;if(ie(r))for(let f=0;f<r.length;f++){const g=$n(r[f]);Ap(g)&&(o[g]=Qe)}else if(r)for(const f in r){const g=$n(f);if(Ap(g)){const m=r[f],_=o[g]=ie(m)||ye(m)?{type:m}:_t({},m);if(_){const C=Rp(Boolean,_.type),D=Rp(String,_.type);_[0]=C>-1,_[1]=D<0||C<D,(C>-1||ke(_,"default"))&&c.push(g)}}}const u=[o,c];return tt(t)&&s.set(t,u),u}function Ap(t){return t[0]!=="$"}function Sp(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function kp(t,e){return Sp(t)===Sp(e)}function Rp(t,e){return ie(e)?e.findIndex(n=>kp(n,t)):ye(e)&&kp(e,t)?0:-1}const gy=t=>t[0]==="_"||t==="$stable",Ch=t=>ie(t)?t.map(On):[On(t)],D0=(t,e,n)=>{if(e._n)return e;const s=du((...i)=>Ch(e(...i)),n);return s._c=!1,s},my=(t,e,n)=>{const s=t._ctx;for(const i in t){if(gy(i))continue;const r=t[i];if(ye(r))e[i]=D0(i,r,s);else if(r!=null){const o=Ch(r);e[i]=()=>o}}},yy=(t,e)=>{const n=Ch(e);t.slots.default=()=>n},N0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Re(e),xa(e,"_",n)):my(e,t.slots={})}else t.slots={},e&&yy(t,e);xa(t.slots,_c,1)},x0=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Qe;if(s.shapeFlag&32){const c=e._;c?n&&c===1?r=!1:(_t(i,e),!n&&c===1&&delete i._):(r=!e.$stable,my(e,i)),o=e}else e&&(yy(t,e),o={default:1});if(r)for(const c in i)!gy(c)&&!(c in o)&&delete i[c]};function vu(t,e,n,s,i=!1){if(ie(t)){t.forEach((m,_)=>vu(m,e&&(ie(e)?e[_]:e),n,s,i));return}if(Ea(s)&&!i)return;const r=s.shapeFlag&4?wc(s.component)||s.component.proxy:s.el,o=i?null:r,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Qe?c.refs={}:c.refs,g=c.setupState;if(u!=null&&u!==l&&(ht(u)?(f[u]=null,ke(g,u)&&(g[u]=null)):ot(u)&&(u.value=null)),ye(l))bs(l,c,12,[o,f]);else{const m=ht(l),_=ot(l);if(m||_){const C=()=>{if(t.f){const D=m?ke(g,l)?g[l]:f[l]:l.value;i?ie(D)&&ch(D,r):ie(D)?D.includes(r)||D.push(r):m?(f[l]=[r],ke(g,l)&&(g[l]=f[l])):(l.value=[r],t.k&&(f[t.k]=l.value))}else m?(f[l]=o,ke(g,l)&&(g[l]=o)):_&&(l.value=o,t.k&&(f[t.k]=o))};o?(C.id=-1,Wt(C,n)):C()}}}const Wt=i0;function P0(t){return L0(t)}function L0(t,e){const n=cu();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:g,nextSibling:m,setScopeId:_=mn,insertStaticContent:C}=t,D=(y,v,E,I=null,k=null,x=null,H=!1,F=null,B=!!v.dynamicChildren)=>{if(y===v)return;y&&!br(y,v)&&(I=S(y),Et(y,k,x,!0),y=null),v.patchFlag===-2&&(B=!1,v.dynamicChildren=null);const{type:P,ref:J,shapeFlag:Q}=v;switch(P){case yc:N(y,v,E,I);break;case ni:U(y,v,E,I);break;case Pl:y==null&&$(v,E,I,H);break;case Kn:St(y,v,E,I,k,x,H,F,B);break;default:Q&1?be(y,v,E,I,k,x,H,F,B):Q&6?$t(y,v,E,I,k,x,H,F,B):(Q&64||Q&128)&&P.process(y,v,E,I,k,x,H,F,B,j)}J!=null&&k&&vu(J,y&&y.ref,x,v||y,!v)},N=(y,v,E,I)=>{if(y==null)s(v.el=c(v.children),E,I);else{const k=v.el=y.el;v.children!==y.children&&u(k,v.children)}},U=(y,v,E,I)=>{y==null?s(v.el=l(v.children||""),E,I):v.el=y.el},$=(y,v,E,I)=>{[y.el,y.anchor]=C(y.children,v,E,I,y.el,y.anchor)},Z=({el:y,anchor:v},E,I)=>{let k;for(;y&&y!==v;)k=m(y),s(y,E,I),y=k;s(v,E,I)},K=({el:y,anchor:v})=>{let E;for(;y&&y!==v;)E=m(y),i(y),y=E;i(v)},be=(y,v,E,I,k,x,H,F,B)=>{H=H||v.type==="svg",y==null?He(v,E,I,k,x,H,F,B):de(y,v,k,x,H,F,B)},He=(y,v,E,I,k,x,H,F)=>{let B,P;const{type:J,props:Q,shapeFlag:ee,transition:re,dirs:pe}=y;if(B=y.el=o(y.type,x,Q&&Q.is,Q),ee&8?f(B,y.children):ee&16&&ve(y.children,B,null,I,k,x&&J!=="foreignObject",H,F),pe&&Bs(y,null,I,"created"),Je(B,y,y.scopeId,H,I),Q){for(const Se in Q)Se!=="value"&&!wa(Se)&&r(B,Se,null,Q[Se],x,y.children,I,k,Ve);"value"in Q&&r(B,"value",null,Q.value),(P=Q.onVnodeBeforeMount)&&Rn(P,I,y)}pe&&Bs(y,null,I,"beforeMount");const Le=(!k||k&&!k.pendingBranch)&&re&&!re.persisted;Le&&re.beforeEnter(B),s(B,v,E),((P=Q&&Q.onVnodeMounted)||Le||pe)&&Wt(()=>{P&&Rn(P,I,y),Le&&re.enter(B),pe&&Bs(y,null,I,"mounted")},k)},Je=(y,v,E,I,k)=>{if(E&&_(y,E),I)for(let x=0;x<I.length;x++)_(y,I[x]);if(k){let x=k.subTree;if(v===x){const H=k.vnode;Je(y,H,H.scopeId,H.slotScopeIds,k.parent)}}},ve=(y,v,E,I,k,x,H,F,B=0)=>{for(let P=B;P<y.length;P++){const J=y[P]=F?hs(y[P]):On(y[P]);D(null,J,v,E,I,k,x,H,F)}},de=(y,v,E,I,k,x,H)=>{const F=v.el=y.el;let{patchFlag:B,dynamicChildren:P,dirs:J}=v;B|=y.patchFlag&16;const Q=y.props||Qe,ee=v.props||Qe;let re;E&&Hs(E,!1),(re=ee.onVnodeBeforeUpdate)&&Rn(re,E,v,y),J&&Bs(v,y,E,"beforeUpdate"),E&&Hs(E,!0);const pe=k&&v.type!=="foreignObject";if(P?Ke(y.dynamicChildren,P,F,E,I,pe,x):H||Oe(y,v,F,null,E,I,pe,x,!1),B>0){if(B&16)dt(F,v,Q,ee,E,I,k);else if(B&2&&Q.class!==ee.class&&r(F,"class",null,ee.class,k),B&4&&r(F,"style",Q.style,ee.style,k),B&8){const Le=v.dynamicProps;for(let Se=0;Se<Le.length;Se++){const Ge=Le[Se],jt=Q[Ge],is=ee[Ge];(is!==jt||Ge==="value")&&r(F,Ge,jt,is,k,y.children,E,I,Ve)}}B&1&&y.children!==v.children&&f(F,v.children)}else!H&&P==null&&dt(F,v,Q,ee,E,I,k);((re=ee.onVnodeUpdated)||J)&&Wt(()=>{re&&Rn(re,E,v,y),J&&Bs(v,y,E,"updated")},I)},Ke=(y,v,E,I,k,x,H)=>{for(let F=0;F<v.length;F++){const B=y[F],P=v[F],J=B.el&&(B.type===Kn||!br(B,P)||B.shapeFlag&70)?g(B.el):E;D(B,P,J,null,I,k,x,H,!0)}},dt=(y,v,E,I,k,x,H)=>{if(E!==I){if(E!==Qe)for(const F in E)!wa(F)&&!(F in I)&&r(y,F,E[F],null,H,v.children,k,x,Ve);for(const F in I){if(wa(F))continue;const B=I[F],P=E[F];B!==P&&F!=="value"&&r(y,F,P,B,H,v.children,k,x,Ve)}"value"in I&&r(y,"value",E.value,I.value)}},St=(y,v,E,I,k,x,H,F,B)=>{const P=v.el=y?y.el:c(""),J=v.anchor=y?y.anchor:c("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:re}=v;re&&(F=F?F.concat(re):re),y==null?(s(P,E,I),s(J,E,I),ve(v.children,E,J,k,x,H,F,B)):Q>0&&Q&64&&ee&&y.dynamicChildren?(Ke(y.dynamicChildren,ee,E,k,x,H,F),(v.key!=null||k&&v===k.subTree)&&vy(y,v,!0)):Oe(y,v,E,J,k,x,H,F,B)},$t=(y,v,E,I,k,x,H,F,B)=>{v.slotScopeIds=F,y==null?v.shapeFlag&512?k.ctx.activate(v,E,I,H,B):En(v,E,I,k,x,H,B):Vt(y,v,B)},En=(y,v,E,I,k,x,H)=>{const F=y.component=q0(y,I,k);if(oy(y)&&(F.ctx.renderer=j),z0(F),F.asyncDep){if(k&&k.registerDep(F,Ie),!y.el){const B=F.subTree=Ct(ni);U(null,B,v,E)}return}Ie(F,y,v,E,k,x,H)},Vt=(y,v,E)=>{const I=v.component=y.component;if(t0(y,v,E))if(I.asyncDep&&!I.asyncResolved){Ne(I,v,E);return}else I.next=v,QE(I.update),I.update();else v.el=y.el,I.vnode=v},Ie=(y,v,E,I,k,x,H)=>{const F=()=>{if(y.isMounted){let{next:J,bu:Q,u:ee,parent:re,vnode:pe}=y,Le=J,Se;Hs(y,!1),J?(J.el=pe.el,Ne(y,J,H)):J=pe,Q&&ba(Q),(Se=J.props&&J.props.onVnodeBeforeUpdate)&&Rn(Se,re,J,pe),Hs(y,!0);const Ge=Nl(y),jt=y.subTree;y.subTree=Ge,D(jt,Ge,g(jt.el),S(jt),y,k,x),J.el=Ge.el,Le===null&&n0(y,Ge.el),ee&&Wt(ee,k),(Se=J.props&&J.props.onVnodeUpdated)&&Wt(()=>Rn(Se,re,J,pe),k)}else{let J;const{el:Q,props:ee}=v,{bm:re,m:pe,parent:Le}=y,Se=Ea(v);if(Hs(y,!1),re&&ba(re),!Se&&(J=ee&&ee.onVnodeBeforeMount)&&Rn(J,Le,v),Hs(y,!0),Q&&Ae){const Ge=()=>{y.subTree=Nl(y),Ae(Q,y.subTree,y,k,null)};Se?v.type.__asyncLoader().then(()=>!y.isUnmounted&&Ge()):Ge()}else{const Ge=y.subTree=Nl(y);D(null,Ge,E,I,y,k,x),v.el=Ge.el}if(pe&&Wt(pe,k),!Se&&(J=ee&&ee.onVnodeMounted)){const Ge=v;Wt(()=>Rn(J,Le,Ge),k)}(v.shapeFlag&256||Le&&Ea(Le.vnode)&&Le.vnode.shapeFlag&256)&&y.a&&Wt(y.a,k),y.isMounted=!0,v=E=I=null}},B=y.effect=new ph(F,()=>Th(P),y.scope),P=y.update=()=>B.run();P.id=y.uid,Hs(y,!0),P()},Ne=(y,v,E)=>{v.component=y;const I=y.vnode.props;y.vnode=v,y.next=null,O0(y,v.props,I,E),x0(y,v.children,E),sr(),_p(),ir()},Oe=(y,v,E,I,k,x,H,F,B=!1)=>{const P=y&&y.children,J=y?y.shapeFlag:0,Q=v.children,{patchFlag:ee,shapeFlag:re}=v;if(ee>0){if(ee&128){R(P,Q,E,I,k,x,H,F,B);return}else if(ee&256){sn(P,Q,E,I,k,x,H,F,B);return}}re&8?(J&16&&Ve(P,k,x),Q!==P&&f(E,Q)):J&16?re&16?R(P,Q,E,I,k,x,H,F,B):Ve(P,k,x,!0):(J&8&&f(E,""),re&16&&ve(Q,E,I,k,x,H,F,B))},sn=(y,v,E,I,k,x,H,F,B)=>{y=y||Oi,v=v||Oi;const P=y.length,J=v.length,Q=Math.min(P,J);let ee;for(ee=0;ee<Q;ee++){const re=v[ee]=B?hs(v[ee]):On(v[ee]);D(y[ee],re,E,null,k,x,H,F,B)}P>J?Ve(y,k,x,!0,!1,Q):ve(v,E,I,k,x,H,F,B,Q)},R=(y,v,E,I,k,x,H,F,B)=>{let P=0;const J=v.length;let Q=y.length-1,ee=J-1;for(;P<=Q&&P<=ee;){const re=y[P],pe=v[P]=B?hs(v[P]):On(v[P]);if(br(re,pe))D(re,pe,E,null,k,x,H,F,B);else break;P++}for(;P<=Q&&P<=ee;){const re=y[Q],pe=v[ee]=B?hs(v[ee]):On(v[ee]);if(br(re,pe))D(re,pe,E,null,k,x,H,F,B);else break;Q--,ee--}if(P>Q){if(P<=ee){const re=ee+1,pe=re<J?v[re].el:I;for(;P<=ee;)D(null,v[P]=B?hs(v[P]):On(v[P]),E,pe,k,x,H,F,B),P++}}else if(P>ee)for(;P<=Q;)Et(y[P],k,x,!0),P++;else{const re=P,pe=P,Le=new Map;for(P=pe;P<=ee;P++){const qe=v[P]=B?hs(v[P]):On(v[P]);qe.key!=null&&Le.set(qe.key,P)}let Se,Ge=0;const jt=ee-pe+1;let is=!1,$o=0;const rn=new Array(jt);for(P=0;P<jt;P++)rn[P]=0;for(P=re;P<=Q;P++){const qe=y[P];if(Ge>=jt){Et(qe,k,x,!0);continue}let Ze;if(qe.key!=null)Ze=Le.get(qe.key);else for(Se=pe;Se<=ee;Se++)if(rn[Se-pe]===0&&br(qe,v[Se])){Ze=Se;break}Ze===void 0?Et(qe,k,x,!0):(rn[Ze-pe]=P+1,Ze>=$o?$o=Ze:is=!0,D(qe,v[Ze],E,null,k,x,H,F,B),Ge++)}const pt=is?M0(rn):Oi;for(Se=pt.length-1,P=jt-1;P>=0;P--){const qe=pe+P,Ze=v[qe],gt=qe+1<J?v[qe+1].el:I;rn[P]===0?D(null,Ze,E,gt,k,x,H,F,B):is&&(Se<0||P!==pt[Se]?Kt(Ze,E,gt,2):Se--)}}},Kt=(y,v,E,I,k=null)=>{const{el:x,type:H,transition:F,children:B,shapeFlag:P}=y;if(P&6){Kt(y.component.subTree,v,E,I);return}if(P&128){y.suspense.move(v,E,I);return}if(P&64){H.move(y,v,E,j);return}if(H===Kn){s(x,v,E);for(let Q=0;Q<B.length;Q++)Kt(B[Q],v,E,I);s(y.anchor,v,E);return}if(H===Pl){Z(y,v,E);return}if(I!==2&&P&1&&F)if(I===0)F.beforeEnter(x),s(x,v,E),Wt(()=>F.enter(x),k);else{const{leave:Q,delayLeave:ee,afterLeave:re}=F,pe=()=>s(x,v,E),Le=()=>{Q(x,()=>{pe(),re&&re()})};ee?ee(x,pe,Le):Le()}else s(x,v,E)},Et=(y,v,E,I=!1,k=!1)=>{const{type:x,props:H,ref:F,children:B,dynamicChildren:P,shapeFlag:J,patchFlag:Q,dirs:ee}=y;if(F!=null&&vu(F,null,E,y,!0),J&256){v.ctx.deactivate(y);return}const re=J&1&&ee,pe=!Ea(y);let Le;if(pe&&(Le=H&&H.onVnodeBeforeUnmount)&&Rn(Le,v,y),J&6)In(y.component,E,I);else{if(J&128){y.suspense.unmount(E,I);return}re&&Bs(y,null,v,"beforeUnmount"),J&64?y.type.remove(y,v,E,k,j,I):P&&(x!==Kn||Q>0&&Q&64)?Ve(P,v,E,!1,!0):(x===Kn&&Q&384||!k&&J&16)&&Ve(B,v,E),I&&Tn(y)}(pe&&(Le=H&&H.onVnodeUnmounted)||re)&&Wt(()=>{Le&&Rn(Le,v,y),re&&Bs(y,null,v,"unmounted")},E)},Tn=y=>{const{type:v,el:E,anchor:I,transition:k}=y;if(v===Kn){kt(E,I);return}if(v===Pl){K(y);return}const x=()=>{i(E),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(y.shapeFlag&1&&k&&!k.persisted){const{leave:H,delayLeave:F}=k,B=()=>H(E,x);F?F(y.el,x,B):B()}else x()},kt=(y,v)=>{let E;for(;y!==v;)E=m(y),i(y),y=E;i(v)},In=(y,v,E)=>{const{bum:I,scope:k,update:x,subTree:H,um:F}=y;I&&ba(I),k.stop(),x&&(x.active=!1,Et(H,y,v,E)),F&&Wt(F,v),Wt(()=>{y.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Ve=(y,v,E,I=!1,k=!1,x=0)=>{for(let H=x;H<y.length;H++)Et(y[H],v,E,I,k)},S=y=>y.shapeFlag&6?S(y.component.subTree):y.shapeFlag&128?y.suspense.next():m(y.anchor||y.el),A=(y,v,E)=>{y==null?v._vnode&&Et(v._vnode,null,null,!0):D(v._vnode||null,y,v,null,null,null,E),_p(),ey(),v._vnode=y},j={p:D,um:Et,m:Kt,r:Tn,mt:En,mc:ve,pc:Oe,pbc:Ke,n:S,o:t};let Y,Ae;return e&&([Y,Ae]=e(j)),{render:A,hydrate:Y,createApp:S0(A,Y)}}function Hs({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function vy(t,e,n=!1){const s=t.children,i=e.children;if(ie(s)&&ie(i))for(let r=0;r<s.length;r++){const o=s[r];let c=i[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[r]=hs(i[r]),c.el=o.el),n||vy(o,c)),c.type===yc&&(c.el=o.el)}}function M0(t){const e=t.slice(),n=[0];let s,i,r,o,c;const l=t.length;for(s=0;s<l;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)c=r+o>>1,t[n[c]]<u?r=c+1:o=c;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const F0=t=>t.__isTeleport,Kn=Symbol.for("v-fgt"),yc=Symbol.for("v-txt"),ni=Symbol.for("v-cmt"),Pl=Symbol.for("v-stc"),Lr=[];let gn=null;function vc(t=!1){Lr.push(gn=t?null:[])}function U0(){Lr.pop(),gn=Lr[Lr.length-1]||null}let Yr=1;function Op(t){Yr+=t}function _y(t){return t.dynamicChildren=Yr>0?gn||Oi:null,U0(),Yr>0&&gn&&gn.push(t),t}function wy(t,e,n,s,i,r){return _y(Ks(t,e,n,s,i,r,!0))}function by(t,e,n,s,i){return _y(Ct(t,e,n,s,i,!0))}function _u(t){return t?t.__v_isVNode===!0:!1}function br(t,e){return t.type===e.type&&t.key===e.key}const _c="__vInternal",Ey=({key:t})=>t??null,Ia=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ht(t)||ot(t)||ye(t)?{i:en,r:t,k:e,f:!!n}:t:null);function Ks(t,e=null,n=null,s=0,i=null,r=t===Kn?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ey(e),ref:e&&Ia(e),scopeId:gc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:en};return c?(Ah(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ht(n)?8:16),Yr>0&&!o&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const Ct=$0;function $0(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===v0)&&(t=ni),_u(t)){const c=Vi(t,e,!0);return n&&Ah(c,n),Yr>0&&!r&&gn&&(c.shapeFlag&6?gn[gn.indexOf(t)]=c:gn.push(c)),c.patchFlag|=-2,c}if(Y0(t)&&(t=t.__vccOpts),e){e=V0(e);let{class:c,style:l}=e;c&&!ht(c)&&(e.class=fh(c)),tt(l)&&(Wm(l)&&!ie(l)&&(l=_t({},l)),e.style=hh(l))}const o=ht(t)?1:s0(t)?128:F0(t)?64:tt(t)?4:ye(t)?2:0;return Ks(t,e,n,s,i,o,r,!0)}function V0(t){return t?Wm(t)||_c in t?_t({},t):t:null}function Vi(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,c=e?j0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ey(c),ref:e&&e.ref?n&&i?ie(i)?i.concat(Ia(e)):[i,Ia(e)]:Ia(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Kn?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vi(t.ssContent),ssFallback:t.ssFallback&&Vi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function wu(t=" ",e=0){return Ct(yc,null,t,e)}function iN(t="",e=!1){return e?(vc(),by(ni,null,t)):Ct(ni,null,t)}function On(t){return t==null||typeof t=="boolean"?Ct(ni):ie(t)?Ct(Kn,null,t.slice()):typeof t=="object"?hs(t):Ct(yc,null,String(t))}function hs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vi(t)}function Ah(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ah(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(_c in e)?e._ctx=en:i===3&&en&&(en.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ye(e)?(e={default:e,_ctx:en},n=32):(e=String(e),s&64?(n=16,e=[wu(e)]):n=8);t.children=e,t.shapeFlag|=n}function j0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=fh([e.class,s.class]));else if(i==="style")e.style=hh([e.style,s.style]);else if(ac(i)){const r=e[i],o=s[i];o&&r!==o&&!(ie(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Rn(t,e,n,s=null){yn(t,e,7,[n,s])}const B0=fy();let H0=0;function q0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||B0,r={uid:H0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new xm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:py(s,i),emitsOptions:ny(s,i),emit:null,emitted:null,propsDefaults:Qe,inheritAttrs:s.inheritAttrs,ctx:Qe,data:Qe,props:Qe,attrs:Qe,slots:Qe,refs:Qe,setupState:Qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=JE.bind(null,r),t.ce&&t.ce(r),r}let vt=null,Sh,bi,Dp="__VUE_INSTANCE_SETTERS__";(bi=cu()[Dp])||(bi=cu()[Dp]=[]),bi.push(t=>vt=t),Sh=t=>{bi.length>1?bi.forEach(e=>e(t)):bi[0](t)};const ji=t=>{Sh(t),t.scope.on()},Zs=()=>{vt&&vt.scope.off(),Sh(null)};function Ty(t){return t.vnode.shapeFlag&4}let Xr=!1;function z0(t,e=!1){Xr=e;const{props:n,children:s}=t.vnode,i=Ty(t);R0(t,n,i,e),N0(t,s);const r=i?K0(t,e):void 0;return Xr=!1,r}function K0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=fc(new Proxy(t.ctx,w0));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?G0(t):null;ji(t),sr();const r=bs(s,t,0,[t.props,i]);if(ir(),Zs(),km(r)){if(r.then(Zs,Zs),e)return r.then(o=>{Np(t,o,e)}).catch(o=>{dc(o,t,0)});t.asyncDep=r}else Np(t,r,e)}else Iy(t,e)}function Np(t,e,n){ye(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:tt(e)&&(t.setupState=Xm(e)),Iy(t,n)}let xp;function Iy(t,e,n){const s=t.type;if(!t.render){if(!e&&xp&&!s.render){const i=s.template||Ih(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=s,u=_t(_t({isCustomElement:r,delimiters:c},o),l);s.render=xp(i,u)}}t.render=s.render||mn}ji(t),sr(),b0(t),ir(),Zs()}function W0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Qt(t,"get","$attrs"),e[n]}}))}function G0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return W0(t)},slots:t.slots,emit:t.emit,expose:e}}function wc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Xm(fc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Pr)return Pr[n](t)},has(e,n){return n in e||n in Pr}}))}function Q0(t,e=!0){return ye(t)?t.displayName||t.name:t.name||e&&t.__name}function Y0(t){return ye(t)&&"__vccOpts"in t}const Zt=(t,e)=>KE(t,e,Xr);function Cy(t,e,n){const s=arguments.length;return s===2?tt(e)&&!ie(e)?_u(e)?Ct(t,null,[e]):Ct(t,e):Ct(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&_u(n)&&(n=[n]),Ct(t,e,n))}const X0=Symbol.for("v-scx"),J0=()=>vn(X0),Z0="3.3.4",eT="http://www.w3.org/2000/svg",Ws=typeof document<"u"?document:null,Pp=Ws&&Ws.createElement("template"),tT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ws.createElementNS(eT,t):Ws.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ws.createTextNode(t),createComment:t=>Ws.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ws.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Pp.innerHTML=s?`<svg>${t}</svg>`:t;const c=Pp.content;if(s){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function nT(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function sT(t,e,n){const s=t.style,i=ht(n);if(n&&!i){if(e&&!ht(e))for(const r in e)n[r]==null&&bu(s,r,"");for(const r in n)bu(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const Lp=/\s*!important$/;function bu(t,e,n){if(ie(n))n.forEach(s=>bu(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=iT(t,e);Lp.test(n)?t.setProperty(nr(s),n.replace(Lp,""),"important"):t[s]=n}}const Mp=["Webkit","Moz","ms"],Ll={};function iT(t,e){const n=Ll[e];if(n)return n;let s=$n(e);if(s!=="filter"&&s in t)return Ll[e]=s;s=uc(s);for(let i=0;i<Mp.length;i++){const r=Mp[i]+s;if(r in t)return Ll[e]=r}return e}const Fp="http://www.w3.org/1999/xlink";function rT(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Fp,e.slice(6,e.length)):t.setAttributeNS(Fp,e,n);else{const r=cE(e);n==null||r&&!Dm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function oT(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const u=c==="OPTION"?t.getAttribute("value"):t.value,f=n??"";u!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Dm(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Ii(t,e,n,s){t.addEventListener(e,n,s)}function aT(t,e,n,s){t.removeEventListener(e,n,s)}function cT(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[c,l]=lT(e);if(s){const u=r[e]=fT(s,i);Ii(t,c,u,l)}else o&&(aT(t,c,o,l),r[e]=void 0)}}const Up=/(?:Once|Passive|Capture)$/;function lT(t){let e;if(Up.test(t)){e={};let s;for(;s=t.match(Up);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nr(t.slice(2)),e]}let Ml=0;const uT=Promise.resolve(),hT=()=>Ml||(uT.then(()=>Ml=0),Ml=Date.now());function fT(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;yn(dT(s,n.value),e,5,[s])};return n.value=t,n.attached=hT(),n}function dT(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const $p=/^on[a-z]/,pT=(t,e,n,s,i=!1,r,o,c,l)=>{e==="class"?nT(t,s,i):e==="style"?sT(t,n,s):ac(e)?ah(e)||cT(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gT(t,e,s,i))?oT(t,e,s,r,o,c,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),rT(t,e,s,i))};function gT(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&$p.test(e)&&ye(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||$p.test(e)&&ht(n)?!1:e in t}const Vp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>ba(e,n):e};function mT(t){t.target.composing=!0}function jp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rN={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Vp(i);const r=s||i.props&&i.props.type==="number";Ii(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),r&&(c=au(c)),t._assign(c)}),n&&Ii(t,"change",()=>{t.value=t.value.trim()}),e||(Ii(t,"compositionstart",mT),Ii(t,"compositionend",jp),Ii(t,"change",jp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Vp(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&au(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},yT=["ctrl","shift","alt","meta"],vT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>yT.some(n=>t[`${n}Key`]&&!e.includes(n))},_T=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=vT[e[i]];if(r&&r(n,e))return}return t(n,...s)},wT=_t({patchProp:pT},tT);let Bp;function bT(){return Bp||(Bp=P0(wT))}const ET=(...t)=>{const e=bT().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=TT(s);if(!i)return;const r=e._component;!ye(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function TT(t){return ht(t)?document.querySelector(t):t}var IT=!1;/*!
  * pinia v2.1.3
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Ay;const bc=t=>Ay=t,Sy=Symbol();function Eu(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Mr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Mr||(Mr={}));function CT(){const t=Pm(!0),e=t.run(()=>wh({}));let n=[],s=[];const i=fc({install(r){bc(i),i._a=r,r.provide(Sy,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!IT?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const ky=()=>{};function Hp(t,e,n,s=ky){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Lm()&&uE(i),i}function Ei(t,...e){t.slice().forEach(n=>{n(...e)})}const AT=t=>t();function Tu(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Eu(i)&&Eu(s)&&t.hasOwnProperty(n)&&!ot(s)&&!_s(s)?t[n]=Tu(i,s):t[n]=s}return t}const ST=Symbol();function kT(t){return!Eu(t)||!t.hasOwnProperty(ST)}const{assign:us}=Object;function RT(t){return!!(ot(t)&&t.effect)}function OT(t,e,n,s){const{state:i,actions:r,getters:o}=e,c=n.state.value[t];let l;function u(){c||(n.state.value[t]=i?i():{});const f=BE(n.state.value[t]);return us(f,r,Object.keys(o||{}).reduce((g,m)=>(g[m]=fc(Zt(()=>{bc(n);const _=n._s.get(t);return o[m].call(_,_)})),g),{}))}return l=Ry(t,u,e,n,s,!0),l}function Ry(t,e,n={},s,i,r){let o;const c=us({actions:{}},n),l={deep:!0};let u,f,g=[],m=[],_;const C=s.state.value[t];!r&&!C&&(s.state.value[t]={}),wh({});let D;function N(ve){let de;u=f=!1,typeof ve=="function"?(ve(s.state.value[t]),de={type:Mr.patchFunction,storeId:t,events:_}):(Tu(s.state.value[t],ve),de={type:Mr.patchObject,payload:ve,storeId:t,events:_});const Ke=D=Symbol();Eh().then(()=>{D===Ke&&(u=!0)}),f=!0,Ei(g,de,s.state.value[t])}const U=r?function(){const{state:de}=n,Ke=de?de():{};this.$patch(dt=>{us(dt,Ke)})}:ky;function $(){o.stop(),g=[],m=[],s._s.delete(t)}function Z(ve,de){return function(){bc(s);const Ke=Array.from(arguments),dt=[],St=[];function $t(Ie){dt.push(Ie)}function En(Ie){St.push(Ie)}Ei(m,{args:Ke,name:ve,store:be,after:$t,onError:En});let Vt;try{Vt=de.apply(this&&this.$id===t?this:be,Ke)}catch(Ie){throw Ei(St,Ie),Ie}return Vt instanceof Promise?Vt.then(Ie=>(Ei(dt,Ie),Ie)).catch(Ie=>(Ei(St,Ie),Promise.reject(Ie))):(Ei(dt,Vt),Vt)}}const K={_p:s,$id:t,$onAction:Hp.bind(null,m),$patch:N,$reset:U,$subscribe(ve,de={}){const Ke=Hp(g,ve,de.detached,()=>dt()),dt=o.run(()=>xr(()=>s.state.value[t],St=>{(de.flush==="sync"?f:u)&&ve({storeId:t,type:Mr.direct,events:_},St)},us({},l,de)));return Ke},$dispose:$},be=rr(K);s._s.set(t,be);const He=s._a&&s._a.runWithContext||AT,Je=s._e.run(()=>(o=Pm(),He(()=>o.run(e))));for(const ve in Je){const de=Je[ve];if(ot(de)&&!RT(de)||_s(de))r||(C&&kT(de)&&(ot(de)?de.value=C[ve]:Tu(de,C[ve])),s.state.value[t][ve]=de);else if(typeof de=="function"){const Ke=Z(ve,de);Je[ve]=Ke,c.actions[ve]=de}}return us(be,Je),us(Re(be),Je),Object.defineProperty(be,"$state",{get:()=>s.state.value[t],set:ve=>{N(de=>{us(de,ve)})}}),s._p.forEach(ve=>{us(be,o.run(()=>ve({store:be,app:s._a,pinia:s,options:c})))}),C&&r&&n.hydrate&&n.hydrate(be.$state,C),u=!0,f=!0,be}function DT(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(c,l){const u=k0();return c=c||(u?vn(Sy,null):null),c&&bc(c),c=Ay,c._s.has(s)||(r?Ry(s,e,i,c):OT(s,i,c)),c._s.get(s)}return o.$id=s,o}/**
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
 *//**
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
 */const Oy=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NT=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],c=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Dy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,c=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,f=r>>2,g=(r&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),s.push(n[f],n[g],n[m],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Oy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||c==null||u==null||g==null)throw new xT;const m=r<<2|c>>4;if(s.push(m),u!==64){const _=c<<4&240|u>>2;if(s.push(_),g!==64){const C=u<<6&192|g;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const PT=function(t){const e=Oy(t);return Dy.encodeByteArray(e,!0)},Ua=function(t){return PT(t).replace(/\./g,"")},Ny=function(t){try{return Dy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function LT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const MT=()=>LT().__FIREBASE_DEFAULTS__,FT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ny(t[1]);return e&&JSON.parse(e)},kh=()=>{try{return MT()||FT()||UT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xy=t=>{var e,n;return(n=(e=kh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$T=t=>{const e=xy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Py=()=>{var t;return(t=kh())===null||t===void 0?void 0:t.config},Ly=t=>{var e;return(e=kh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class VT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function jT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[Ua(JSON.stringify(n)),Ua(JSON.stringify(o)),c].join(".")}/**
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
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function HT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zT(){const t=Ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KT(){try{return typeof indexedDB=="object"}catch{return!1}}function WT(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const GT="FirebaseError";class ss extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=GT,Object.setPrototypeOf(this,ss.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yo.prototype.create)}}class yo{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?QT(r,s):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new ss(i,c,s)}}function QT(t,e){return t.replace(YT,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const YT=/\{\$([^}]+)}/g;function XT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $a(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(qp(r)&&qp(o)){if(!$a(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function qp(t){return t!==null&&typeof t=="object"}/**
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
 */function vo(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Sr(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function kr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JT(t,e){const n=new ZT(t,e);return n.subscribe.bind(n)}class ZT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");eI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Fl),i.error===void 0&&(i.error=Fl),i.complete===void 0&&(i.complete=Fl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fl(){}/**
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
 */function ft(t){return t&&t._delegate?t._delegate:t}class si{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qs="[DEFAULT]";/**
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
 */class tI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new VT;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sI(e))try{this.getOrInitializeService({instanceIdentifier:qs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=qs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qs){return this.instances.has(e)}getOptions(e=qs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);s===c&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:nI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=qs){return this.component?this.component.multipleInstances?e:qs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nI(t){return t===qs?void 0:t}function sI(t){return t.instantiationMode==="EAGER"}/**
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
 */class iI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var De;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(De||(De={}));const rI={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},oI=De.INFO,aI={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},cI=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=aI[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rh{constructor(e){this.name=e,this._logLevel=oI,this._logHandler=cI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const lI=(t,e)=>e.some(n=>t instanceof n);let zp,Kp;function uI(){return zp||(zp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hI(){return Kp||(Kp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const My=new WeakMap,Iu=new WeakMap,Fy=new WeakMap,Ul=new WeakMap,Oh=new WeakMap;function fI(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Es(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&My.set(n,t)}).catch(()=>{}),Oh.set(e,t),e}function dI(t){if(Iu.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Iu.set(t,e)}let Cu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Iu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Es(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pI(t){Cu=t(Cu)}function gI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call($l(this),e,...n);return Fy.set(s,e.sort?e.sort():[e]),Es(s)}:hI().includes(t)?function(...e){return t.apply($l(this),e),Es(My.get(this))}:function(...e){return Es(t.apply($l(this),e))}}function mI(t){return typeof t=="function"?gI(t):(t instanceof IDBTransaction&&dI(t),lI(t,uI())?new Proxy(t,Cu):t)}function Es(t){if(t instanceof IDBRequest)return fI(t);if(Ul.has(t))return Ul.get(t);const e=mI(t);return e!==t&&(Ul.set(t,e),Oh.set(e,t)),e}const $l=t=>Oh.get(t);function yI(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),c=Es(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Es(o.result),l.oldVersion,l.newVersion,Es(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const vI=["get","getKey","getAll","getAllKeys","count"],_I=["put","add","delete","clear"],Vl=new Map;function Wp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vl.get(e))return Vl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=_I.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||vI.includes(n)))return;const r=async function(o,...c){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),i&&l.done]))[0]};return Vl.set(e,r),r}pI(t=>({...t,get:(e,n,s)=>Wp(e,n)||t.get(e,n,s),has:(e,n)=>!!Wp(e,n)||t.has(e,n)}));/**
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
 */class wI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function bI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Au="@firebase/app",Gp="0.9.11";/**
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
 */const ii=new Rh("@firebase/app"),EI="@firebase/app-compat",TI="@firebase/analytics-compat",II="@firebase/analytics",CI="@firebase/app-check-compat",AI="@firebase/app-check",SI="@firebase/auth",kI="@firebase/auth-compat",RI="@firebase/database",OI="@firebase/database-compat",DI="@firebase/functions",NI="@firebase/functions-compat",xI="@firebase/installations",PI="@firebase/installations-compat",LI="@firebase/messaging",MI="@firebase/messaging-compat",FI="@firebase/performance",UI="@firebase/performance-compat",$I="@firebase/remote-config",VI="@firebase/remote-config-compat",jI="@firebase/storage",BI="@firebase/storage-compat",HI="@firebase/firestore",qI="@firebase/firestore-compat",zI="firebase",KI="9.22.1";/**
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
 */const Su="[DEFAULT]",WI={[Au]:"fire-core",[EI]:"fire-core-compat",[II]:"fire-analytics",[TI]:"fire-analytics-compat",[AI]:"fire-app-check",[CI]:"fire-app-check-compat",[SI]:"fire-auth",[kI]:"fire-auth-compat",[RI]:"fire-rtdb",[OI]:"fire-rtdb-compat",[DI]:"fire-fn",[NI]:"fire-fn-compat",[xI]:"fire-iid",[PI]:"fire-iid-compat",[LI]:"fire-fcm",[MI]:"fire-fcm-compat",[FI]:"fire-perf",[UI]:"fire-perf-compat",[$I]:"fire-rc",[VI]:"fire-rc-compat",[jI]:"fire-gcs",[BI]:"fire-gcs-compat",[HI]:"fire-fst",[qI]:"fire-fst-compat","fire-js":"fire-js",[zI]:"fire-js-all"};/**
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
 */const Va=new Map,ku=new Map;function GI(t,e){try{t.container.addComponent(e)}catch(n){ii.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bi(t){const e=t.name;if(ku.has(e))return ii.debug(`There were multiple attempts to register component ${e}.`),!1;ku.set(e,t);for(const n of Va.values())GI(n,t);return!0}function Dh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const QI={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ts=new yo("app","Firebase",QI);/**
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
 */class YI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ts.create("app-deleted",{appName:this._name})}}/**
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
 */const or=KI;function Uy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Su,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ts.create("bad-app-name",{appName:String(i)});if(n||(n=Py()),!n)throw Ts.create("no-options");const r=Va.get(i);if(r){if($a(n,r.options)&&$a(s,r.config))return r;throw Ts.create("duplicate-app",{appName:i})}const o=new iI(i);for(const l of ku.values())o.addComponent(l);const c=new YI(n,s,o);return Va.set(i,c),c}function $y(t=Su){const e=Va.get(t);if(!e&&t===Su&&Py())return Uy();if(!e)throw Ts.create("no-app",{appName:t});return e}function Is(t,e,n){var s;let i=(s=WI[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const c=[`Unable to register library "${i}" with version "${e}":`];r&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ii.warn(c.join(" "));return}Bi(new si(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const XI="firebase-heartbeat-database",JI=1,Jr="firebase-heartbeat-store";let jl=null;function Vy(){return jl||(jl=yI(XI,JI,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jr)}}}).catch(t=>{throw Ts.create("idb-open",{originalErrorMessage:t.message})})),jl}async function ZI(t){try{return await(await Vy()).transaction(Jr).objectStore(Jr).get(jy(t))}catch(e){if(e instanceof ss)ii.warn(e.message);else{const n=Ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ii.warn(n.message)}}}async function Qp(t,e){try{const s=(await Vy()).transaction(Jr,"readwrite");await s.objectStore(Jr).put(e,jy(t)),await s.done}catch(n){if(n instanceof ss)ii.warn(n.message);else{const s=Ts.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ii.warn(s.message)}}}function jy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const eC=1024,tC=30*24*60*60*1e3;class nC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iC(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Yp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=tC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Yp(),{heartbeatsToSend:n,unsentEntries:s}=sC(this._heartbeatsCache.heartbeats),i=Ua(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Yp(){return new Date().toISOString().substring(0,10)}function sC(t,e=eC){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Xp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class iC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KT()?WT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ZI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xp(t){return Ua(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rC(t){Bi(new si("platform-logger",e=>new wI(e),"PRIVATE")),Bi(new si("heartbeat",e=>new nC(e),"PRIVATE")),Is(Au,Gp,t),Is(Au,Gp,"esm2017"),Is("fire-js","")}rC("");var oC="firebase",aC="9.22.1";/**
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
 */Is(oC,aC,"app");var cC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q,Nh=Nh||{},le=cC||self;function Ec(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function _o(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function lC(t){return Object.prototype.hasOwnProperty.call(t,Bl)&&t[Bl]||(t[Bl]=++uC)}var Bl="closure_uid_"+(1e9*Math.random()>>>0),uC=0;function hC(t,e,n){return t.call.apply(t.bind,arguments)}function fC(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pt=hC:Pt=fC,Pt.apply(null,arguments)}function la(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function bt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),c=2;c<arguments.length;c++)o[c-2]=arguments[c];return e.prototype[i].apply(s,o)}}function Ds(){this.s=this.s,this.o=this.o}var dC=0;Ds.prototype.s=!1;Ds.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),dC!=0)&&lC(this)};Ds.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const By=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function xh(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Jp(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ec(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Lt.prototype.h=function(){this.defaultPrevented=!0};var pC=function(){if(!le.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{le.addEventListener("test",()=>{},e),le.removeEventListener("test",()=>{},e)}catch{}return t}();function Zr(t){return/^[\s\xa0]*$/.test(t)}function Tc(){var t=le.navigator;return t&&(t=t.userAgent)?t:""}function Nn(t){return Tc().indexOf(t)!=-1}function Ph(t){return Ph[" "](t),t}Ph[" "]=function(){};function gC(t,e){var n=aA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var mC=Nn("Opera"),Hi=Nn("Trident")||Nn("MSIE"),Hy=Nn("Edge"),Ru=Hy||Hi,qy=Nn("Gecko")&&!(Tc().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge"))&&!(Nn("Trident")||Nn("MSIE"))&&!Nn("Edge"),yC=Tc().toLowerCase().indexOf("webkit")!=-1&&!Nn("Edge");function zy(){var t=le.document;return t?t.documentMode:void 0}var Ou;e:{var Hl="",ql=function(){var t=Tc();if(qy)return/rv:([^\);]+)(\)|;)/.exec(t);if(Hy)return/Edge\/([\d\.]+)/.exec(t);if(Hi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yC)return/WebKit\/(\S+)/.exec(t);if(mC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ql&&(Hl=ql?ql[1]:""),Hi){var zl=zy();if(zl!=null&&zl>parseFloat(Hl)){Ou=String(zl);break e}}Ou=Hl}var Du;if(le.document&&Hi){var Zp=zy();Du=Zp||parseInt(Ou,10)||void 0}else Du=void 0;var vC=Du;function eo(t,e){if(Lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qy){e:{try{Ph(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_C[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&eo.$.h.call(this)}}bt(eo,Lt);var _C={2:"touch",3:"pen",4:"mouse"};eo.prototype.h=function(){eo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wo="closure_listenable_"+(1e6*Math.random()|0),wC=0;function bC(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++wC,this.fa=this.ia=!1}function Ic(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Lh(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function EC(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Ky(t){const e={};for(const n in t)e[n]=t[n];return e}const eg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Wy(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<eg.length;r++)n=eg[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Cc(t){this.src=t,this.g={},this.h=0}Cc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=xu(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new bC(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function Nu(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=By(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ic(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function xu(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var Mh="closure_lm_"+(1e6*Math.random()|0),Kl={};function Gy(t,e,n,s,i){if(s&&s.once)return Yy(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Gy(t,e[r],n,s,i);return null}return n=$h(n),t&&t[wo]?t.O(e,n,_o(s)?!!s.capture:!!s,i):Qy(t,e,n,!1,s,i)}function Qy(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=_o(i)?!!i.capture:!!i,c=Uh(t);if(c||(t[Mh]=c=new Cc(t)),n=c.add(e,n,s,o,r),n.proxy)return n;if(s=TC(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)pC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Jy(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function TC(){function t(n){return e.call(t.src,t.listener,n)}const e=IC;return t}function Yy(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Yy(t,e[r],n,s,i);return null}return n=$h(n),t&&t[wo]?t.P(e,n,_o(s)?!!s.capture:!!s,i):Qy(t,e,n,!0,s,i)}function Xy(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Xy(t,e[r],n,s,i);else s=_o(s)?!!s.capture:!!s,n=$h(n),t&&t[wo]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=xu(r,n,s,i),-1<n&&(Ic(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Uh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xu(e,n,s,i)),(n=-1<t?e[t]:null)&&Fh(n))}function Fh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[wo])Nu(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Jy(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Uh(e))?(Nu(n,t),n.h==0&&(n.src=null,e[Mh]=null)):Ic(t)}}}function Jy(t){return t in Kl?Kl[t]:Kl[t]="on"+t}function IC(t,e){if(t.fa)t=!0;else{e=new eo(e,this);var n=t.listener,s=t.la||t.src;t.ia&&Fh(t),t=n.call(s,e)}return t}function Uh(t){return t=t[Mh],t instanceof Cc?t:null}var Wl="__closure_events_fn_"+(1e9*Math.random()>>>0);function $h(t){return typeof t=="function"?t:(t[Wl]||(t[Wl]=function(e){return t.handleEvent(e)}),t[Wl])}function wt(){Ds.call(this),this.i=new Cc(this),this.S=this,this.J=null}bt(wt,Ds);wt.prototype[wo]=!0;wt.prototype.removeEventListener=function(t,e,n,s){Xy(this,t,e,n,s)};function At(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Lt(e,t);else if(e instanceof Lt)e.target=e.target||t;else{var i=e;e=new Lt(s,t),Wy(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=ua(o,s,!0,e)&&i}if(o=e.g=t,i=ua(o,s,!0,e)&&i,i=ua(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=ua(o,s,!1,e)&&i}wt.prototype.N=function(){if(wt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ic(n[s]);delete t.g[e],t.h--}}this.J=null};wt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};wt.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ua(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var c=o.listener,l=o.la||o.src;o.ia&&Nu(t.i,o),i=c.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var Vh=le.JSON.stringify;class CC{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function AC(){var t=jh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class SC{constructor(){this.h=this.g=null}add(e,n){const s=Zy.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Zy=new CC(()=>new kC,t=>t.reset());class kC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function RC(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function OC(t){le.setTimeout(()=>{throw t},0)}let to,no=!1,jh=new SC,ev=()=>{const t=le.Promise.resolve(void 0);to=()=>{t.then(DC)}};var DC=()=>{for(var t;t=AC();){try{t.h.call(t.g)}catch(n){OC(n)}var e=Zy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}no=!1};function Ac(t,e){wt.call(this),this.h=t||1,this.g=e||le,this.j=Pt(this.qb,this),this.l=Date.now()}bt(Ac,wt);q=Ac.prototype;q.ga=!1;q.T=null;q.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),At(this,"tick"),this.ga&&(Bh(this),this.start()))}};q.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Bh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}q.N=function(){Ac.$.N.call(this),Bh(this),delete this.g};function Hh(t,e,n){if(typeof t=="function")n&&(t=Pt(t,n));else if(t&&typeof t.handleEvent=="function")t=Pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:le.setTimeout(t,e||0)}function tv(t){t.g=Hh(()=>{t.g=null,t.i&&(t.i=!1,tv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class NC extends Ds{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:tv(this)}N(){super.N(),this.g&&(le.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function so(t){Ds.call(this),this.h=t,this.g={}}bt(so,Ds);var tg=[];function nv(t,e,n,s){Array.isArray(n)||(n&&(tg[0]=n.toString()),n=tg);for(var i=0;i<n.length;i++){var r=Gy(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function sv(t){Lh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Fh(e)},t),t.g={}}so.prototype.N=function(){so.$.N.call(this),sv(this)};so.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sc(){this.g=!0}Sc.prototype.Ea=function(){this.g=!1};function xC(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",c=r.split("&"),l=0;l<c.length;l++){var u=c[l].split("=");if(1<u.length){var f=u[0];u=u[1];var g=f.split("_");o=2<=g.length&&g[1]=="type"?o+(f+"="+u+"&"):o+(f+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function PC(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function ki(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+MC(t,n)+(s?" "+s:"")})}function LC(t,e){t.info(function(){return"TIMEOUT: "+e})}Sc.prototype.info=function(){};function MC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Vh(n)}catch{return e}}var li={},ng=null;function kc(){return ng=ng||new wt}li.Ta="serverreachability";function iv(t){Lt.call(this,li.Ta,t)}bt(iv,Lt);function io(t){const e=kc();At(e,new iv(e))}li.STAT_EVENT="statevent";function rv(t,e){Lt.call(this,li.STAT_EVENT,t),this.stat=e}bt(rv,Lt);function zt(t){const e=kc();At(e,new rv(e,t))}li.Ua="timingevent";function ov(t,e){Lt.call(this,li.Ua,t),this.size=e}bt(ov,Lt);function bo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return le.setTimeout(function(){t()},e)}var Rc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},av={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function qh(){}qh.prototype.h=null;function sg(t){return t.h||(t.h=t.i())}function cv(){}var Eo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function zh(){Lt.call(this,"d")}bt(zh,Lt);function Kh(){Lt.call(this,"c")}bt(Kh,Lt);var Pu;function Oc(){}bt(Oc,qh);Oc.prototype.g=function(){return new XMLHttpRequest};Oc.prototype.i=function(){return{}};Pu=new Oc;function To(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new so(this),this.P=FC,t=Ru?125:void 0,this.V=new Ac(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new lv}function lv(){this.i=null,this.g="",this.h=!1}var FC=45e3,Lu={},ja={};q=To.prototype;q.setTimeout=function(t){this.P=t};function Mu(t,e,n){t.L=1,t.v=Nc(Xn(e)),t.s=n,t.S=!0,uv(t,null)}function uv(t,e){t.G=Date.now(),Io(t),t.A=Xn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),vv(n.i,"t",s),t.C=0,n=t.l.J,t.h=new lv,t.g=$v(t.l,n?e:null,!t.s),0<t.O&&(t.M=new NC(Pt(t.Pa,t,t.g),t.O)),nv(t.U,t.g,"readystatechange",t.nb),e=t.I?Ky(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),io(),xC(t.j,t.u,t.A,t.m,t.W,t.s)}q.nb=function(t){t=t.target;const e=this.M;e&&xn(t)==3?e.l():this.Pa(t)};q.Pa=function(t){try{if(t==this.g)e:{const f=xn(this.g);var e=this.g.Ia();const g=this.g.da();if(!(3>f)&&(f!=3||Ru||this.g&&(this.h.h||this.g.ja()||ag(this.g)))){this.J||f!=4||e==7||(e==8||0>=g?io(3):io(2)),Dc(this);var n=this.g.da();this.ca=n;t:if(hv(this)){var s=ag(this.g);t="";var i=s.length,r=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qs(this),Fr(this);var o="";break t}this.h.i=new le.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,PC(this.j,this.u,this.A,this.m,this.W,f,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zr(c)){var u=c;break t}}u=null}if(n=u)ki(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fu(this,n);else{this.i=!1,this.o=3,zt(12),Qs(this),Fr(this);break e}}this.S?(fv(this,f,o),Ru&&this.i&&f==3&&(nv(this.U,this.V,"tick",this.mb),this.V.start())):(ki(this.j,this.m,o,null),Fu(this,o)),f==4&&Qs(this),this.i&&!this.J&&(f==4?Lv(this.l,this):(this.i=!1,Io(this)))}else iA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,zt(12)):(this.o=0,zt(13)),Qs(this),Fr(this)}}}catch{}finally{}};function hv(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function fv(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=UC(t,n),i==ja){e==4&&(t.o=4,zt(14),s=!1),ki(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Lu){t.o=4,zt(15),ki(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ki(t.j,t.m,i,null),Fu(t,i);hv(t)&&i!=ja&&i!=Lu&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,zt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jh(e),e.M=!0,zt(11))):(ki(t.j,t.m,n,"[Invalid Chunked Response]"),Qs(t),Fr(t))}q.mb=function(){if(this.g){var t=xn(this.g),e=this.g.ja();this.C<e.length&&(Dc(this),fv(this,t,e),this.i&&t!=4&&Io(this))}};function UC(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ja:(n=Number(e.substring(n,s)),isNaN(n)?Lu:(s+=1,s+n>e.length?ja:(e=e.slice(s,s+n),t.C=s+n,e)))}q.cancel=function(){this.J=!0,Qs(this)};function Io(t){t.Y=Date.now()+t.P,dv(t,t.P)}function dv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=bo(Pt(t.lb,t),e)}function Dc(t){t.B&&(le.clearTimeout(t.B),t.B=null)}q.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(LC(this.j,this.A),this.L!=2&&(io(),zt(17)),Qs(this),this.o=2,Fr(this)):dv(this,this.Y-t)};function Fr(t){t.l.H==0||t.J||Lv(t.l,t)}function Qs(t){Dc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Bh(t.V),sv(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Fu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Uu(n.i,t))){if(!t.K&&Uu(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)qa(n),Lc(n);else break e;Xh(n),zt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=bo(Pt(n.ib,n),6e3));if(1>=bv(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ys(n,11)}else if((t.K||n.g==t)&&qa(n),!Zr(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const f=u[3];f!=null&&(n.ra=f,n.l.info("VER="+n.ra));const g=u[4];g!=null&&(n.Ga=g,n.l.info("SVER="+n.Ga));const m=u[5];m!=null&&typeof m=="number"&&0<m&&(s=1.5*m,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const _=t.g;if(_){const C=_.g?_.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var r=s.i;r.g||C.indexOf("spdy")==-1&&C.indexOf("quic")==-1&&C.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Wh(r,r.h),r.h=null))}if(s.F){const D=_.g?_.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(s.Da=D,Ye(s.I,s.F,D))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Uv(s,s.J?s.pa:null,s.Y),o.K){Ev(s.i,o);var c=o,l=s.L;l&&c.setTimeout(l),c.B&&(Dc(c),Io(c)),s.g=o}else xv(s);0<n.j.length&&Mc(n)}else u[0]!="stop"&&u[0]!="close"||Ys(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ys(n,7):Yh(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}io(4)}catch{}}function $C(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ec(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function VC(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ec(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function pv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ec(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=VC(t),s=$C(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var gv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ei(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ei){this.h=t.h,Ba(this,t.j),this.s=t.s,this.g=t.g,Ha(this,t.m),this.l=t.l;var e=t.i,n=new ro;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ig(this,n),this.o=t.o}else t&&(e=String(t).match(gv))?(this.h=!1,Ba(this,e[1]||"",!0),this.s=Rr(e[2]||""),this.g=Rr(e[3]||"",!0),Ha(this,e[4]),this.l=Rr(e[5]||"",!0),ig(this,e[6]||"",!0),this.o=Rr(e[7]||"")):(this.h=!1,this.i=new ro(null,this.h))}ei.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Or(e,rg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Or(e,rg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Or(n,n.charAt(0)=="/"?qC:HC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Or(n,KC)),t.join("")};function Xn(t){return new ei(t)}function Ba(t,e,n){t.j=n?Rr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ha(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ig(t,e,n){e instanceof ro?(t.i=e,WC(t.i,t.h)):(n||(e=Or(e,zC)),t.i=new ro(e,t.h))}function Ye(t,e,n){t.i.set(e,n)}function Nc(t){return Ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Rr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Or(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,BC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function BC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rg=/[#\/\?@]/g,HC=/[#\?:]/g,qC=/[#\?]/g,zC=/[#\?@]/g,KC=/#/g;function ro(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ns(t){t.g||(t.g=new Map,t.h=0,t.i&&jC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}q=ro.prototype;q.add=function(t,e){Ns(this),this.i=null,t=ar(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function mv(t,e){Ns(t),e=ar(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function yv(t,e){return Ns(t),e=ar(t,e),t.g.has(e)}q.forEach=function(t,e){Ns(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};q.ta=function(){Ns(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};q.Z=function(t){Ns(this);let e=[];if(typeof t=="string")yv(this,t)&&(e=e.concat(this.g.get(ar(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};q.set=function(t,e){return Ns(this),this.i=null,t=ar(this,t),yv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};q.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function vv(t,e,n){mv(t,e),0<n.length&&(t.i=null,t.g.set(ar(t,e),xh(n)),t.h+=n.length)}q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function ar(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function WC(t,e){e&&!t.j&&(Ns(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(mv(this,s),vv(this,i,n))},t)),t.j=e}var GC=class{constructor(t,e){this.g=t,this.map=e}};function _v(t){this.l=t||QC,le.PerformanceNavigationTiming?(t=le.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(le.g&&le.g.Ka&&le.g.Ka()&&le.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QC=10;function wv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function bv(t){return t.h?1:t.g?t.g.size:0}function Uu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wh(t,e){t.g?t.g.add(e):t.h=e}function Ev(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}_v.prototype.cancel=function(){if(this.i=Tv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Tv(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return xh(t.i)}var YC=class{stringify(t){return le.JSON.stringify(t,void 0)}parse(t){return le.JSON.parse(t,void 0)}};function XC(){this.g=new YC}function JC(t,e,n){const s=n||"";try{pv(t,function(i,r){let o=i;_o(i)&&(o=Vh(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function ZC(t,e){const n=new Sc;if(le.Image){const s=new Image;s.onload=la(ha,n,s,"TestLoadImage: loaded",!0,e),s.onerror=la(ha,n,s,"TestLoadImage: error",!1,e),s.onabort=la(ha,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=la(ha,n,s,"TestLoadImage: timeout",!1,e),le.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ha(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Co(t){this.l=t.fc||null,this.j=t.ob||!1}bt(Co,qh);Co.prototype.g=function(){return new xc(this.l,this.j)};Co.prototype.i=function(t){return function(){return t}}({});function xc(t,e){wt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Gh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}bt(xc,wt);var Gh=0;q=xc.prototype;q.open=function(t,e){if(this.readyState!=Gh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,oo(this)};q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||le).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ao(this)),this.readyState=Gh};q.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,oo(this)),this.g&&(this.readyState=3,oo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof le.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Iv(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Iv(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}q.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ao(this):oo(this),this.readyState==3&&Iv(this)}};q.Za=function(t){this.g&&(this.response=this.responseText=t,Ao(this))};q.Ya=function(t){this.g&&(this.response=t,Ao(this))};q.ka=function(){this.g&&Ao(this)};function Ao(t){t.readyState=4,t.l=null,t.j=null,t.A=null,oo(t)}q.setRequestHeader=function(t,e){this.v.append(t,e)};q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function oo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(xc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eA=le.JSON.parse;function it(t){wt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Cv,this.L=this.M=!1}bt(it,wt);var Cv="",tA=/^https?$/i,nA=["POST","PUT"];q=it.prototype;q.Oa=function(t){this.M=t};q.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Pu.g(),this.C=this.u?sg(this.u):sg(Pu),this.g.onreadystatechange=Pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){og(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=le.FormData&&t instanceof le.FormData,!(0<=By(nA,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{kv(this),0<this.B&&((this.L=sA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pt(this.ua,this)):this.A=Hh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){og(this,r)}};function sA(t){return Hi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}q.ua=function(){typeof Nh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))};function og(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Av(t),Pc(t)}function Av(t){t.F||(t.F=!0,At(t,"complete"),At(t,"error"))}q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),Pc(this))};q.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pc(this,!0)),it.$.N.call(this)};q.La=function(){this.s||(this.G||this.v||this.l?Sv(this):this.kb())};q.kb=function(){Sv(this)};function Sv(t){if(t.h&&typeof Nh<"u"&&(!t.C[1]||xn(t)!=4||t.da()!=2)){if(t.v&&xn(t)==4)Hh(t.La,0,t);else if(At(t,"readystatechange"),xn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(gv)[1]||null;!i&&le.self&&le.self.location&&(i=le.self.location.protocol.slice(0,-1)),s=!tA.test(i?i.toLowerCase():"")}n=s}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var r=2<xn(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",Av(t)}}finally{Pc(t)}}}}function Pc(t,e){if(t.g){kv(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||At(t,"ready");try{n.onreadystatechange=s}catch{}}}function kv(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(le.clearTimeout(t.A),t.A=null)}q.isActive=function(){return!!this.g};function xn(t){return t.g?t.g.readyState:0}q.da=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}};q.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};q.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eA(e)}};function ag(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Cv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function iA(t){const e={};t=(t.g&&2<=xn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Zr(t[s]))continue;var n=RC(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}EC(e,function(s){return s.join(", ")})}q.Ia=function(){return this.m};q.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Rv(t){let e="";return Lh(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Qh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Rv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ye(t,e,n))}function Er(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ov(t){this.Ga=0,this.j=[],this.l=new Sc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Er("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Er("baseRetryDelayMs",5e3,t),this.hb=Er("retryDelaySeedMs",1e4,t),this.eb=Er("forwardChannelMaxRetries",2,t),this.xa=Er("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new _v(t&&t.concurrentRequestLimit),this.Ja=new XC,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}q=Ov.prototype;q.ra=8;q.H=1;function Yh(t){if(Dv(t),t.H==3){var e=t.W++,n=Xn(t.I);if(Ye(n,"SID",t.K),Ye(n,"RID",e),Ye(n,"TYPE","terminate"),So(t,n),e=new To(t,t.l,e),e.L=2,e.v=Nc(Xn(n)),n=!1,le.navigator&&le.navigator.sendBeacon)try{n=le.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&le.Image&&(new Image().src=e.v,n=!0),n||(e.g=$v(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Io(e)}Fv(t)}function Lc(t){t.g&&(Jh(t),t.g.cancel(),t.g=null)}function Dv(t){Lc(t),t.u&&(le.clearTimeout(t.u),t.u=null),qa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&le.clearTimeout(t.m),t.m=null)}function Mc(t){if(!wv(t.i)&&!t.m){t.m=!0;var e=t.Na;to||ev(),no||(to(),no=!0),jh.add(e,t),t.C=0}}function rA(t,e){return bv(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=bo(Pt(t.Na,t,e),Mv(t,t.C)),t.C++,!0)}q.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new To(this,this.l,t);let r=this.s;if(this.U&&(r?(r=Ky(r),Wy(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Nv(this,i,e),n=Xn(this.I),Ye(n,"RID",t),Ye(n,"CVER",22),this.F&&Ye(n,"X-HTTP-Session-Id",this.F),So(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Rv(r)))+"&"+e:this.o&&Qh(n,this.o,r)),Wh(this.i,i),this.bb&&Ye(n,"TYPE","init"),this.P?(Ye(n,"$req",e),Ye(n,"SID","null"),i.aa=!0,Mu(i,n,null)):Mu(i,n,e),this.H=2}}else this.H==3&&(t?cg(this,t):this.j.length==0||wv(this.i)||cg(this))};function cg(t,e){var n;e?n=e.m:n=t.W++;const s=Xn(t.I);Ye(s,"SID",t.K),Ye(s,"RID",n),Ye(s,"AID",t.V),So(t,s),t.o&&t.s&&Qh(s,t.o,t.s),n=new To(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Nv(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Wh(t.i,n),Mu(n,s,e)}function So(t,e){t.na&&Lh(t.na,function(n,s){Ye(e,s,n)}),t.h&&pv({},function(n,s){Ye(e,s,n)})}function Nv(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Pt(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let c=!0;for(let l=0;l<n;l++){let u=i[l].g;const f=i[l].map;if(u-=r,0>u)r=Math.max(0,i[l].g-100),c=!1;else try{JC(f,o,"req"+u+"_")}catch{s&&s(f)}}if(c){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function xv(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;to||ev(),no||(to(),no=!0),jh.add(e,t),t.A=0}}function Xh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=bo(Pt(t.Ma,t),Mv(t,t.A)),t.A++,!0)}q.Ma=function(){if(this.u=null,Pv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=bo(Pt(this.jb,this),t)}};q.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,zt(10),Lc(this),Pv(this))};function Jh(t){t.B!=null&&(le.clearTimeout(t.B),t.B=null)}function Pv(t){t.g=new To(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Xn(t.wa);Ye(e,"RID","rpc"),Ye(e,"SID",t.K),Ye(e,"AID",t.V),Ye(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ye(e,"TO",t.qa),Ye(e,"TYPE","xmlhttp"),So(t,e),t.o&&t.s&&Qh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Nc(Xn(e)),n.s=null,n.S=!0,uv(n,t)}q.ib=function(){this.v!=null&&(this.v=null,Lc(this),Xh(this),zt(19))};function qa(t){t.v!=null&&(le.clearTimeout(t.v),t.v=null)}function Lv(t,e){var n=null;if(t.g==e){qa(t),Jh(t),t.g=null;var s=2}else if(Uu(t.i,e))n=e.F,Ev(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=kc(),At(s,new ov(s,n)),Mc(t)}else xv(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&rA(t,e)||s==2&&Xh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ys(t,5);break;case 4:Ys(t,10);break;case 3:Ys(t,6);break;default:Ys(t,2)}}}function Mv(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ys(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Pt(t.pb,t);n||(n=new ei("//www.google.com/images/cleardot.gif"),le.location&&le.location.protocol=="http"||Ba(n,"https"),Nc(n)),ZC(n.toString(),s)}else zt(2);t.H=0,t.h&&t.h.za(e),Fv(t),Dv(t)}q.pb=function(t){t?(this.l.info("Successfully pinged google.com"),zt(2)):(this.l.info("Failed to ping google.com"),zt(1))};function Fv(t){if(t.H=0,t.ma=[],t.h){const e=Tv(t.i);(e.length!=0||t.j.length!=0)&&(Jp(t.ma,e),Jp(t.ma,t.j),t.i.i.length=0,xh(t.j),t.j.length=0),t.h.ya()}}function Uv(t,e,n){var s=n instanceof ei?Xn(n):new ei(n);if(s.g!="")e&&(s.g=e+"."+s.g),Ha(s,s.m);else{var i=le.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new ei(null);s&&Ba(r,s),e&&(r.g=e),i&&Ha(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&Ye(s,n,e),Ye(s,"VER",t.ra),So(t,s),s}function $v(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new it(new Co({ob:!0})):new it(t.va),e.Oa(t.J),e}q.isActive=function(){return!!this.h&&this.h.isActive(this)};function Vv(){}q=Vv.prototype;q.Ba=function(){};q.Aa=function(){};q.za=function(){};q.ya=function(){};q.isActive=function(){return!0};q.Va=function(){};function za(){if(Hi&&!(10<=Number(vC)))throw Error("Environmental error: no available transport.")}za.prototype.g=function(t,e){return new nn(t,e)};function nn(t,e){wt.call(this),this.g=new Ov(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Zr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new cr(this)}bt(nn,wt);nn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;zt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Uv(t,null,t.Y),Mc(t)};nn.prototype.close=function(){Yh(this.g)};nn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Vh(t),t=n);e.j.push(new GC(e.fb++,t)),e.H==3&&Mc(e)};nn.prototype.N=function(){this.g.h=null,delete this.j,Yh(this.g),delete this.g,nn.$.N.call(this)};function jv(t){zh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}bt(jv,zh);function Bv(){Kh.call(this),this.status=1}bt(Bv,Kh);function cr(t){this.g=t}bt(cr,Vv);cr.prototype.Ba=function(){At(this.g,"a")};cr.prototype.Aa=function(t){At(this.g,new jv(t))};cr.prototype.za=function(t){At(this.g,new Bv)};cr.prototype.ya=function(){At(this.g,"b")};function oA(){this.blockSize=-1}function _n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}bt(_n,oA);_n.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Gl(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}_n.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)Gl(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){Gl(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){Gl(this,s),i=0;break}}this.h=i,this.i+=e};_n.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function $e(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var aA={};function Zh(t){return-128<=t&&128>t?gC(t,function(e){return new $e([e|0],0>e?-1:0)}):new $e([t|0],0>t?-1:0)}function Pn(t){if(isNaN(t)||!isFinite(t))return xi;if(0>t)return It(Pn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=$u;return new $e(e,0)}function Hv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return It(Hv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Pn(Math.pow(e,8)),s=xi,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=Pn(Math.pow(e,r)),s=s.R(r).add(Pn(o))):(s=s.R(n),s=s.add(Pn(o)))}return s}var $u=4294967296,xi=Zh(0),Vu=Zh(1),lg=Zh(16777216);q=$e.prototype;q.ea=function(){if(un(this))return-It(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:$u+s)*e,e*=$u}return t};q.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Wn(this))return"0";if(un(this))return"-"+It(this).toString(t);for(var e=Pn(Math.pow(t,6)),n=this,s="";;){var i=Wa(n,e).g;n=Ka(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Wn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};q.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Wn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function un(t){return t.h==-1}q.X=function(t){return t=Ka(this,t),un(t)?-1:Wn(t)?0:1};function It(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new $e(n,~t.h).add(Vu)}q.abs=function(){return un(this)?It(this):this};q.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new $e(n,n[n.length-1]&-2147483648?-1:0)};function Ka(t,e){return t.add(It(e))}q.R=function(t){if(Wn(this)||Wn(t))return xi;if(un(this))return un(t)?It(this).R(It(t)):It(It(this).R(t));if(un(t))return It(this.R(It(t)));if(0>this.X(lg)&&0>t.X(lg))return Pn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,c=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,fa(n,2*s+2*i),n[2*s+2*i+1]+=r*l,fa(n,2*s+2*i+1),n[2*s+2*i+1]+=o*c,fa(n,2*s+2*i+1),n[2*s+2*i+2]+=r*c,fa(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new $e(n,0)};function fa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Tr(t,e){this.g=t,this.h=e}function Wa(t,e){if(Wn(e))throw Error("division by zero");if(Wn(t))return new Tr(xi,xi);if(un(t))return e=Wa(It(t),e),new Tr(It(e.g),It(e.h));if(un(e))return e=Wa(t,It(e)),new Tr(It(e.g),e.h);if(30<t.g.length){if(un(t)||un(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Vu,s=e;0>=s.X(t);)n=ug(n),s=ug(s);var i=Ti(n,1),r=Ti(s,1);for(s=Ti(s,2),n=Ti(n,2);!Wn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Ti(s,1),n=Ti(n,1)}return e=Ka(t,i.R(e)),new Tr(i,e)}for(i=xi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Pn(n),o=r.R(e);un(o)||0<o.X(t);)n-=s,r=Pn(n),o=r.R(e);Wn(r)&&(r=Vu),i=i.add(r),t=Ka(t,o)}return new Tr(i,t)}q.gb=function(t){return Wa(this,t).h};q.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new $e(n,this.h&t.h)};q.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new $e(n,this.h|t.h)};q.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new $e(n,this.h^t.h)};function ug(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new $e(n,t.h)}function Ti(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new $e(i,t.h)}za.prototype.createWebChannel=za.prototype.g;nn.prototype.send=nn.prototype.u;nn.prototype.open=nn.prototype.m;nn.prototype.close=nn.prototype.close;Rc.NO_ERROR=0;Rc.TIMEOUT=8;Rc.HTTP_ERROR=6;av.COMPLETE="complete";cv.EventType=Eo;Eo.OPEN="a";Eo.CLOSE="b";Eo.ERROR="c";Eo.MESSAGE="d";wt.prototype.listen=wt.prototype.O;it.prototype.listenOnce=it.prototype.P;it.prototype.getLastError=it.prototype.Sa;it.prototype.getLastErrorCode=it.prototype.Ia;it.prototype.getStatus=it.prototype.da;it.prototype.getResponseJson=it.prototype.Wa;it.prototype.getResponseText=it.prototype.ja;it.prototype.send=it.prototype.ha;it.prototype.setWithCredentials=it.prototype.Oa;_n.prototype.digest=_n.prototype.l;_n.prototype.reset=_n.prototype.reset;_n.prototype.update=_n.prototype.j;$e.prototype.add=$e.prototype.add;$e.prototype.multiply=$e.prototype.R;$e.prototype.modulo=$e.prototype.gb;$e.prototype.compare=$e.prototype.X;$e.prototype.toNumber=$e.prototype.ea;$e.prototype.toString=$e.prototype.toString;$e.prototype.getBits=$e.prototype.D;$e.fromNumber=Pn;$e.fromString=Hv;var cA=function(){return new za},lA=function(){return kc()},Ql=Rc,uA=av,hA=li,hg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},fA=Co,da=cv,dA=it,pA=_n,Pi=$e;const fg="@firebase/firestore";/**
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
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
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
 */let lr="9.22.1";/**
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
 */const ri=new Rh("@firebase/firestore");function dg(){return ri.logLevel}function X(t,...e){if(ri.logLevel<=De.DEBUG){const n=e.map(ef);ri.debug(`Firestore (${lr}): ${t}`,...n)}}function Jn(t,...e){if(ri.logLevel<=De.ERROR){const n=e.map(ef);ri.error(`Firestore (${lr}): ${t}`,...n)}}function qi(t,...e){if(ri.logLevel<=De.WARN){const n=e.map(ef);ri.warn(`Firestore (${lr}): ${t}`,...n)}}function ef(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function ce(t="Unexpected state"){const e=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: `+t;throw Jn(e),new Error(e)}function Xe(t,e){t||ce()}function ge(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends ss{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Cs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class qv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class mA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yA{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Cs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Cs,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Cs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Xe(typeof s.accessToken=="string"),new qv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string"),new Ot(e)}}class vA{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class _A{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new vA(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bA{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Xe(typeof n.token=="string"),this.T=n.token,new wA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function EA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class zv{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=EA(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Pe(t,e){return t<e?-1:t>e?1:0}function zi(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class ut{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ut(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new ut(0,0))}static max(){return new fe(new ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ao{constructor(e,n,s){n===void 0?n=0:n>e.length&&ce(),s===void 0?s=e.length-n:s>e.length-n&&ce(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ao.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ao?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class et extends ao{construct(e,n,s){return new et(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new te(L.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new et(n)}static emptyPath(){return new et([])}}const TA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends ao{construct(e,n,s){return new xt(e,n,s)}static isValidIdentifier(e){return TA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new te(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new te(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new te(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(s+=c,i++):(r(),i++)}if(r(),o)throw new te(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(et.fromString(e))}static fromName(e){return new ne(et.fromString(e).popFirst(5))}static empty(){return new ne(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return et.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new et(e.slice()))}}function IA(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=fe.fromTimestamp(s===1e9?new ut(n+1,0):new ut(n,s));return new ks(i,ne.empty(),e)}function CA(t){return new ks(t.readTime,t.key,-1)}class ks{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new ks(fe.min(),ne.empty(),-1)}static max(){return new ks(fe.max(),ne.empty(),-1)}}function AA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const SA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ko(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==SA)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,s)=>{n(e)})}static reject(e){return new M((n,s)=>{s(e)})}static waitFor(e){return new M((n,s)=>{let i=0,r=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=M.resolve(!1);for(const s of e)n=n.next(i=>i?M.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new M((s,i)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===r&&s(o)},f=>i(f))}})}static doWhile(e,n){return new M((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Ro(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class tf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}tf.ct=-1;function Fc(t){return t==null}function Ga(t){return t===0&&1/t==-1/0}function RA(t){return typeof t=="number"&&Number.isInteger(t)&&!Ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function pg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class nt{constructor(e,n){this.comparator=e,this.root=n||Tt.EMPTY}insert(e,n){return new nt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Tt.BLACK,null,null))}remove(e){return new nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pa(this.root,e,this.comparator,!0)}}class pa{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tt{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Tt.RED,this.left=i??Tt.EMPTY,this.right=r??Tt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Tt(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Tt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Tt.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}Tt.EMPTY=null,Tt.RED=!0,Tt.BLACK=!1;Tt.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Tt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Mt{constructor(e){this.comparator=e,this.data=new nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gg(this.data.getIterator())}getIteratorFrom(e){return new gg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Mt(this.comparator);return n.data=e,n}}class gg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class tn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new tn([])}unionWith(e){let n=new Mt(xt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new tn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zi(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Wv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Wv("Invalid base64 string: "+i):i}}(e);return new Ut(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ut.EMPTY_BYTE_STRING=new Ut("");const OA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rs(t){if(Xe(!!t),typeof t=="string"){let e=0;const n=OA.exec(t);if(Xe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ct(t.seconds),nanos:ct(t.nanos)}}function ct(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function oi(t){return typeof t=="string"?Ut.fromBase64String(t):Ut.fromUint8Array(t)}/**
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
 */function nf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sf(t){const e=t.mapValue.fields.__previous_value__;return nf(e)?sf(e):e}function co(t){const e=Rs(t.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
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
 */class DA{constructor(e,n,s,i,r,o,c,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ga={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nf(t)?4:NA(t)?9007199254740991:10:ce()}function Vn(t,e){if(t===e)return!0;const n=ai(t);if(n!==ai(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return co(t).isEqual(co(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Rs(s.timestampValue),o=Rs(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return oi(s.bytesValue).isEqual(oi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ct(s.geoPointValue.latitude)===ct(i.geoPointValue.latitude)&&ct(s.geoPointValue.longitude)===ct(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ct(s.integerValue)===ct(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ct(s.doubleValue),o=ct(i.doubleValue);return r===o?Ga(r)===Ga(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return zi(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(pg(r)!==pg(o))return!1;for(const c in r)if(r.hasOwnProperty(c)&&(o[c]===void 0||!Vn(r[c],o[c])))return!1;return!0}(t,e);default:return ce()}}function uo(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function Ki(t,e){if(t===e)return 0;const n=ai(t),s=ai(e);if(n!==s)return Pe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ct(i.integerValue||i.doubleValue),c=ct(r.integerValue||r.doubleValue);return o<c?-1:o>c?1:o===c?0:isNaN(o)?isNaN(c)?0:-1:1}(t,e);case 3:return mg(t.timestampValue,e.timestampValue);case 4:return mg(co(t),co(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(i,r){const o=oi(i),c=oi(r);return o.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),c=r.split("/");for(let l=0;l<o.length&&l<c.length;l++){const u=Pe(o[l],c[l]);if(u!==0)return u}return Pe(o.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=Pe(ct(i.latitude),ct(r.latitude));return o!==0?o:Pe(ct(i.longitude),ct(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],c=r.values||[];for(let l=0;l<o.length&&l<c.length;++l){const u=Ki(o[l],c[l]);if(u)return u}return Pe(o.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===ga.mapValue&&r===ga.mapValue)return 0;if(i===ga.mapValue)return 1;if(r===ga.mapValue)return-1;const o=i.fields||{},c=Object.keys(o),l=r.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let f=0;f<c.length&&f<u.length;++f){const g=Pe(c[f],u[f]);if(g!==0)return g;const m=Ki(o[c[f]],l[u[f]]);if(m!==0)return m}return Pe(c.length,u.length)}(t.mapValue,e.mapValue);default:throw ce()}}function mg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=Rs(t),s=Rs(e),i=Pe(n.seconds,s.seconds);return i!==0?i:Pe(n.nanos,s.nanos)}function Wi(t){return ju(t)}function ju(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Rs(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?oi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ne.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=ju(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const c of i)o?o=!1:r+=",",r+=`${c}:${ju(s.fields[c])}`;return r+"}"}(t.mapValue):ce();var e,n}function Bu(t){return!!t&&"integerValue"in t}function rf(t){return!!t&&"arrayValue"in t}function yg(t){return!!t&&"nullValue"in t}function vg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ca(t){return!!t&&"mapValue"in t}function Ur(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ui(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Ur(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ur(t.arrayValue.values[n]);return e}return Object.assign({},t)}function NA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ca(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ur(n)}setAll(e){let n=xt.emptyPath(),s={},i=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=c.popLast()}o?s[c.lastSegment()]=Ur(o):i.push(c.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Ca(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Ca(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){ui(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Gt(Ur(this.value))}}function Gv(t){const e=[];return ui(t.fields,(n,s)=>{const i=new xt([n]);if(Ca(s)){const r=Gv(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new tn(e)}/**
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
 */class Dt{constructor(e,n,s,i,r,o,c){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Dt(e,0,fe.min(),fe.min(),fe.min(),Gt.empty(),0)}static newFoundDocument(e,n,s,i){return new Dt(e,1,n,fe.min(),s,i,0)}static newNoDocument(e,n){return new Dt(e,2,n,fe.min(),fe.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,fe.min(),fe.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Qa{constructor(e,n){this.position=e,this.inclusive=n}}function _g(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=ne.comparator(ne.fromName(o.referenceValue),n.key):s=Ki(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function wg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class $r{constructor(e,n="asc"){this.field=e,this.dir=n}}function xA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Qv{}class lt extends Qv{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new LA(e,n,s):n==="array-contains"?new UA(e,s):n==="in"?new $A(e,s):n==="not-in"?new VA(e,s):n==="array-contains-any"?new jA(e,s):new lt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new MA(e,s):new FA(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ki(n,this.value)):n!==null&&ai(this.value)===ai(n)&&this.matchesComparison(Ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class jn extends Qv{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new jn(e,n)}matches(e){return Yv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Yv(t){return t.op==="and"}function Xv(t){return PA(t)&&Yv(t)}function PA(t){for(const e of t.filters)if(e instanceof jn)return!1;return!0}function Hu(t){if(t instanceof lt)return t.field.canonicalString()+t.op.toString()+Wi(t.value);if(Xv(t))return t.filters.map(e=>Hu(e)).join(",");{const e=t.filters.map(n=>Hu(n)).join(",");return`${t.op}(${e})`}}function Jv(t,e){return t instanceof lt?function(n,s){return s instanceof lt&&n.op===s.op&&n.field.isEqual(s.field)&&Vn(n.value,s.value)}(t,e):t instanceof jn?function(n,s){return s instanceof jn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Jv(r,s.filters[o]),!0):!1}(t,e):void ce()}function Zv(t){return t instanceof lt?function(e){return`${e.field.canonicalString()} ${e.op} ${Wi(e.value)}`}(t):t instanceof jn?function(e){return e.op.toString()+" {"+e.getFilters().map(Zv).join(" ,")+"}"}(t):"Filter"}class LA extends lt{constructor(e,n,s){super(e,n,s),this.key=ne.fromName(s.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class MA extends lt{constructor(e,n){super(e,"in",n),this.keys=e_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FA extends lt{constructor(e,n){super(e,"not-in",n),this.keys=e_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function e_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ne.fromName(s.referenceValue))}class UA extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rf(n)&&uo(n.arrayValue,this.value)}}class $A extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&uo(this.value.arrayValue,n)}}class VA extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!uo(this.value.arrayValue,n)}}class jA extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>uo(this.value.arrayValue,s))}}/**
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
 */class BA{constructor(e,n=null,s=[],i=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=c,this.dt=null}}function bg(t,e=null,n=[],s=[],i=null,r=null,o=null){return new BA(t,e,n,s,i,r,o)}function of(t){const e=ge(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Hu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Fc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Wi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Wi(s)).join(",")),e.dt=n}return e.dt}function af(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Jv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wg(t.startAt,e.startAt)&&wg(t.endAt,e.endAt)}function qu(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Uc{constructor(e,n=null,s=[],i=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function HA(t,e,n,s,i,r,o,c){return new Uc(t,e,n,s,i,r,o,c)}function t_(t){return new Uc(t)}function Eg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qA(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zA(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function KA(t){return t.collectionGroup!==null}function Li(t){const e=ge(t);if(e.wt===null){e.wt=[];const n=zA(e),s=qA(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new $r(n)),e.wt.push(new $r(xt.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new $r(xt.keyField(),r))}}}return e.wt}function Zn(t){const e=ge(t);if(!e._t)if(e.limitType==="F")e._t=bg(e.path,e.collectionGroup,Li(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Li(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new $r(r.field,o))}const s=e.endAt?new Qa(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Qa(e.startAt.position,e.startAt.inclusive):null;e._t=bg(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e._t}function zu(t,e,n){return new Uc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $c(t,e){return af(Zn(t),Zn(e))&&t.limitType===e.limitType}function n_(t){return`${of(Zn(t))}|lt:${t.limitType}`}function Ku(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Zv(s)).join(", ")}]`),Fc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Wi(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Wi(s)).join(",")),`Target(${n})`}(Zn(t))}; limitType=${t.limitType})`}function Vc(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):ne.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Li(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const c=_g(i,r,o);return i.inclusive?c<=0:c<0}(n.startAt,Li(n),s)||n.endAt&&!function(i,r,o){const c=_g(i,r,o);return i.inclusive?c>=0:c>0}(n.endAt,Li(n),s))}(t,e)}function WA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function s_(t){return(e,n)=>{let s=!1;for(const i of Li(t)){const r=GA(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function GA(t,e,n){const s=t.field.isKeyField()?ne.comparator(e.key,n.key):function(i,r,o){const c=r.data.field(i),l=o.data.field(i);return c!==null&&l!==null?Ki(c,l):ce()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ce()}}/**
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
 */class ur{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ui(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Kv(this.inner)}size(){return this.innerSize}}/**
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
 */const QA=new nt(ne.comparator);function es(){return QA}const i_=new nt(ne.comparator);function Dr(...t){let e=i_;for(const n of t)e=e.insert(n.key,n);return e}function r_(t){let e=i_;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Xs(){return Vr()}function o_(){return Vr()}function Vr(){return new ur(t=>t.toString(),(t,e)=>t.isEqual(e))}const YA=new nt(ne.comparator),XA=new Mt(ne.comparator);function Ee(...t){let e=XA;for(const n of t)e=e.add(n);return e}const JA=new Mt(Pe);function ZA(){return JA}/**
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
 */function a_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ga(e)?"-0":e}}function c_(t){return{integerValue:""+t}}function eS(t,e){return RA(e)?c_(e):a_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class jc{constructor(){this._=void 0}}function tS(t,e,n){return t instanceof Ya?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&nf(i)&&(i=sf(i)),i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof ho?u_(t,e):t instanceof fo?h_(t,e):function(s,i){const r=l_(s,i),o=Tg(r)+Tg(s.gt);return Bu(r)&&Bu(s.gt)?c_(o):a_(s.serializer,o)}(t,e)}function nS(t,e,n){return t instanceof ho?u_(t,e):t instanceof fo?h_(t,e):n}function l_(t,e){return t instanceof Xa?Bu(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ya extends jc{}class ho extends jc{constructor(e){super(),this.elements=e}}function u_(t,e){const n=f_(e);for(const s of t.elements)n.some(i=>Vn(i,s))||n.push(s);return{arrayValue:{values:n}}}class fo extends jc{constructor(e){super(),this.elements=e}}function h_(t,e){let n=f_(e);for(const s of t.elements)n=n.filter(i=>!Vn(i,s));return{arrayValue:{values:n}}}class Xa extends jc{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Tg(t){return ct(t.integerValue||t.doubleValue)}function f_(t){return rf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sS(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ho&&s instanceof ho||n instanceof fo&&s instanceof fo?zi(n.elements,s.elements,Vn):n instanceof Xa&&s instanceof Xa?Vn(n.gt,s.gt):n instanceof Ya&&s instanceof Ya}(t.transform,e.transform)}class iS{constructor(e,n){this.version=e,this.transformResults=n}}class Ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ln}static exists(e){return new Ln(void 0,e)}static updateTime(e){return new Ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Aa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Bc{}function d_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new g_(t.key,Ln.none()):new Oo(t.key,t.data,Ln.none());{const n=t.data,s=Gt.empty();let i=new Mt(xt.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new xs(t.key,s,new tn(i.toArray()),Ln.none())}}function rS(t,e,n){t instanceof Oo?function(s,i,r){const o=s.value.clone(),c=Cg(s.fieldTransforms,i,r.transformResults);o.setAll(c),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof xs?function(s,i,r){if(!Aa(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Cg(s.fieldTransforms,i,r.transformResults),c=i.data;c.setAll(p_(s)),c.setAll(o),i.convertToFoundDocument(r.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function jr(t,e,n,s){return t instanceof Oo?function(i,r,o,c){if(!Aa(i.precondition,r))return o;const l=i.value.clone(),u=Ag(i.fieldTransforms,c,r);return l.setAll(u),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),null}(t,e,n,s):t instanceof xs?function(i,r,o,c){if(!Aa(i.precondition,r))return o;const l=Ag(i.fieldTransforms,c,r),u=r.data;return u.setAll(p_(i)),u.setAll(l),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,s):function(i,r,o){return Aa(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function oS(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=l_(s.transform,i||null);r!=null&&(n===null&&(n=Gt.empty()),n.set(s.field,r))}return n||null}function Ig(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&zi(n,s,(i,r)=>sS(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oo extends Bc{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xs extends Bc{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function p_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Cg(t,e,n){const s=new Map;Xe(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,c=e.data.field(r.field);s.set(r.field,nS(o,c,n[i]))}return s}function Ag(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,tS(r,o,e))}return s}class g_ extends Bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aS extends Bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class cS{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&rS(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=jr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=jr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=o_();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=n.has(i.key)?null:c;const l=d_(o,c);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(fe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&zi(this.mutations,e.mutations,(n,s)=>Ig(n,s))&&zi(this.baseMutations,e.baseMutations,(n,s)=>Ig(n,s))}}class cf{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){Xe(e.mutations.length===s.length);let i=YA;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new cf(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class lS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class uS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var at,Ce;function hS(t){switch(t){default:return ce();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function m_(t){if(t===void 0)return Jn("GRPC error has no .code"),L.UNKNOWN;switch(t){case at.OK:return L.OK;case at.CANCELLED:return L.CANCELLED;case at.UNKNOWN:return L.UNKNOWN;case at.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case at.INTERNAL:return L.INTERNAL;case at.UNAVAILABLE:return L.UNAVAILABLE;case at.UNAUTHENTICATED:return L.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case at.NOT_FOUND:return L.NOT_FOUND;case at.ALREADY_EXISTS:return L.ALREADY_EXISTS;case at.PERMISSION_DENIED:return L.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case at.ABORTED:return L.ABORTED;case at.OUT_OF_RANGE:return L.OUT_OF_RANGE;case at.UNIMPLEMENTED:return L.UNIMPLEMENTED;case at.DATA_LOSS:return L.DATA_LOSS;default:return ce()}}(Ce=at||(at={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */class lf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return ma}static getOrCreateInstance(){return ma===null&&(ma=new lf),ma}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let ma=null;/**
 * @license
 * Copyright 2023 Google LLC
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
 */function fS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const dS=new Pi([4294967295,4294967295],0);function Sg(t){const e=fS().encode(t),n=new pA;return n.update(e),new Uint8Array(n.digest())}function kg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Pi([n,s],0),new Pi([i,r],0)]}class uf{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Nr(`Invalid padding: ${n}`);if(s<0)throw new Nr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Nr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Nr(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Pi.fromNumber(this.It)}Et(e,n,s){let i=e.add(n.multiply(Pi.fromNumber(s)));return i.compare(dS)===1&&(i=new Pi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Sg(e),[s,i]=kg(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);if(!this.At(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new uf(r,i,n);return s.forEach(c=>o.insert(c)),o}insert(e){if(this.It===0)return;const n=Sg(e),[s,i]=kg(n);for(let r=0;r<this.hashCount;r++){const o=this.Et(s,i,r);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Nr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hc{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Do.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Hc(fe.min(),i,new nt(Pe),es(),Ee())}}class Do{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Do(s,n,Ee(),Ee(),Ee())}}/**
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
 */class Sa{constructor(e,n,s,i){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=i}}class y_{constructor(e,n){this.targetId=e,this.Vt=n}}class v_{constructor(e,n,s=Ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Rg{constructor(){this.St=0,this.Dt=Dg(),this.Ct=Ut.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Ee(),n=Ee(),s=Ee();return this.Dt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:ce()}}),new Do(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=Dg()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class pS{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=es(),this.zt=Og(),this.Wt=new nt(Pe)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:ce()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,i)=>{this.te(i)&&n(i)})}ne(e){var n;const s=e.targetId,i=e.Vt.count,r=this.se(s);if(r){const o=r.target;if(qu(o))if(i===0){const c=new ne(o.path);this.Yt(s,c,Dt.newNoDocument(c,fe.min()))}else Xe(i===1);else{const c=this.ie(s);if(c!==i){const l=this.re(e,c);if(l!==0){this.ee(s);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,u)}(n=lf.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,f,g){var m,_,C,D,N,U;const $={localCacheCount:f,existenceFilterCount:g.count},Z=g.unchangedNames;return Z&&($.bloomFilter={applied:u===0,hashCount:(m=Z==null?void 0:Z.hashCount)!==null&&m!==void 0?m:0,bitmapLength:(D=(C=(_=Z==null?void 0:Z.bits)===null||_===void 0?void 0:_.bitmap)===null||C===void 0?void 0:C.length)!==null&&D!==void 0?D:0,padding:(U=(N=Z==null?void 0:Z.bits)===null||N===void 0?void 0:N.padding)!==null&&U!==void 0?U:0}),$}(l,c,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:i}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:r="",padding:o=0},hashCount:c=0}=s;let l,u;try{l=oi(r).toUint8Array()}catch(f){if(f instanceof Wv)return qi("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw f}try{u=new uf(l,o,c)}catch(f){return qi(f instanceof Nr?"BloomFilter error: ":"Applying bloom filter failed: ",f),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let i=0;return s.forEach(r=>{const o=this.Gt.ue(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;n.vt(c)||(this.Yt(e,r,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((r,o)=>{const c=this.se(o);if(c){if(r.current&&qu(c.target)){const l=new ne(c.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Dt.newNoDocument(l,e))}r.Mt&&(n.set(o,r.Ot()),r.Ft())}});let s=Ee();this.zt.forEach((r,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(r))}),this.jt.forEach((r,o)=>o.setReadTime(e));const i=new Hc(e,n,this.Wt,this.jt,s);return this.jt=es(),this.zt=Og(),this.Wt=new nt(Pe),i}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Rg,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Mt(Pe),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Rg),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Og(){return new nt(ne.comparator)}function Dg(){return new nt(ne.comparator)}const gS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),mS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),yS=(()=>({and:"AND",or:"OR"}))();class vS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wu(t,e){return t.useProto3Json||Fc(e)?e:{value:e}}function Ja(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function __(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _S(t,e){return Ja(t,e.toTimestamp())}function Mn(t){return Xe(!!t),fe.fromTimestamp(function(e){const n=Rs(e);return new ut(n.seconds,n.nanos)}(t))}function hf(t,e){return function(n){return new et(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function w_(t){const e=et.fromString(t);return Xe(I_(e)),e}function Gu(t,e){return hf(t.databaseId,e.path)}function Yl(t,e){const n=w_(e);if(n.get(1)!==t.databaseId.projectId)throw new te(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(b_(n))}function Qu(t,e){return hf(t.databaseId,e)}function wS(t){const e=w_(t);return e.length===4?et.emptyPath():b_(e)}function Yu(t){return new et(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function b_(t){return Xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ng(t,e,n){return{name:Gu(t,e),fields:n.value.mapValue.fields}}function bS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(l,u){return l.useProto3Json?(Xe(u===void 0||typeof u=="string"),Ut.fromBase64String(u||"")):(Xe(u===void 0||u instanceof Uint8Array),Ut.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(l){const u=l.code===void 0?L.UNKNOWN:m_(l.code);return new te(u,l.message||"")}(o);n=new v_(s,i,r,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Yl(t,s.document.name),r=Mn(s.document.updateTime),o=s.document.createTime?Mn(s.document.createTime):fe.min(),c=new Gt({mapValue:{fields:s.document.fields}}),l=Dt.newFoundDocument(i,r,o,c),u=s.targetIds||[],f=s.removedTargetIds||[];n=new Sa(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Yl(t,s.document),r=s.readTime?Mn(s.readTime):fe.min(),o=Dt.newNoDocument(i,r),c=s.removedTargetIds||[];n=new Sa([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Yl(t,s.document),r=s.removedTargetIds||[];n=new Sa([],r,i,null)}else{if(!("filter"in e))return ce();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new uS(i,r),c=s.targetId;n=new y_(c,o)}}return n}function ES(t,e){let n;if(e instanceof Oo)n={update:Ng(t,e.key,e.value)};else if(e instanceof g_)n={delete:Gu(t,e.key)};else if(e instanceof xs)n={update:Ng(t,e.key,e.data),updateMask:DS(e.fieldMask)};else{if(!(e instanceof aS))return ce();n={verify:Gu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof Ya)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ho)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof fo)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Xa)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw ce()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_S(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce()}(t,e.precondition)),n}function TS(t,e){return t&&t.length>0?(Xe(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Mn(s.updateTime):Mn(i);return r.isEqual(fe.min())&&(r=Mn(i)),new iS(r,s.transformResults||[])}(n,e))):[]}function IS(t,e){return{documents:[Qu(t,e.path)]}}function CS(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Qu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return T_(jn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Ci(f.field),direction:kS(f.dir)}}(u))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Wu(t,e.limit);var c;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function AS(t){let e=wS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Xe(s===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let r=[];n.where&&(r=function(f){const g=E_(f);return g instanceof jn&&Xv(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(f=>function(g){return new $r(Ai(g.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(f)));let c=null;n.limit&&(c=function(f){let g;return g=typeof f=="object"?f.value:f,Fc(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(f){const g=!!f.before,m=f.values||[];return new Qa(m,g)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const g=!f.before,m=f.values||[];return new Qa(m,g)}(n.endAt)),HA(e,i,o,r,c,"F",l,u)}function SS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function E_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ai(e.unaryFilter.field);return lt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ai(e.unaryFilter.field);return lt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ai(e.unaryFilter.field);return lt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ai(e.unaryFilter.field);return lt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(t):t.fieldFilter!==void 0?function(e){return lt.create(Ai(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return jn.create(e.compositeFilter.filters.map(n=>E_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return ce()}}(e.compositeFilter.op))}(t):ce()}function kS(t){return gS[t]}function RS(t){return mS[t]}function OS(t){return yS[t]}function Ci(t){return{fieldPath:t.canonicalString()}}function Ai(t){return xt.fromServerFormat(t.fieldPath)}function T_(t){return t instanceof lt?function(e){if(e.op==="=="){if(vg(e.value))return{unaryFilter:{field:Ci(e.field),op:"IS_NAN"}};if(yg(e.value))return{unaryFilter:{field:Ci(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(vg(e.value))return{unaryFilter:{field:Ci(e.field),op:"IS_NOT_NAN"}};if(yg(e.value))return{unaryFilter:{field:Ci(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ci(e.field),op:RS(e.op),value:e.value}}}(t):t instanceof jn?function(e){const n=e.getFilters().map(s=>T_(s));return n.length===1?n[0]:{compositeFilter:{op:OS(e.op),filters:n}}}(t):ce()}function DS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function I_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ys{constructor(e,n,s,i,r=fe.min(),o=fe.min(),c=Ut.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ys(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class NS{constructor(e){this.fe=e}}function xS(t){const e=AS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zu(e,e.limit,"L"):e}/**
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
 */class PS{constructor(){this.rn=new LS}addToCollectionParentIndex(e,n){return this.rn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(ks.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(ks.min())}updateCollectionGroup(e,n,s){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class LS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Mt(et.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Mt(et.comparator)).toArray()}}/**
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
 */class Gi{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Gi(0)}static Mn(){return new Gi(-1)}}/**
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
 */class MS{constructor(){this.changes=new ur(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?M.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class FS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class US{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&jr(s.mutation,i,tn.empty(),ut.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Ee()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Ee()){const i=Xs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=Dr();return r.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Xs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Ee()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,s,i){let r=es();const o=Vr(),c=Vr();return n.forEach((l,u)=>{const f=s.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof xs)?r=r.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),jr(f.mutation,u,f.mutation.getFieldMask(),ut.now())):o.set(u.key,tn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var g;return c.set(u,new FS(f,(g=o.get(u))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,n){const s=Vr();let i=new nt((o,c)=>o-c),r=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=s.get(l)||tn.empty();f=c.applyToLocalView(u,f),s.set(l,f);const g=(i.get(c.batchId)||Ee()).add(l);i=i.insert(c.batchId,g)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,g=o_();f.forEach(m=>{if(!r.has(m)){const _=d_(n.get(m),s.get(m));_!==null&&g.set(m,_),r=r.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,g))}return M.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return ne.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):KA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):M.resolve(Xs());let c=-1,l=r;return o.next(u=>M.forEach(u,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),r.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,u,r)).next(()=>this.computeViews(e,l,u,Ee())).next(f=>({batchId:c,changes:r_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(s=>{let i=Dr();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=Dr();return this.indexManager.getCollectionParents(e,i).next(o=>M.forEach(o,c=>{const l=function(u,f){return new Uc(f,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,s).next(u=>{u.forEach((f,g)=>{r=r.insert(f,g)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((c,l)=>{const u=l.getKey();r.get(u)===null&&(r=r.insert(u,Dt.newInvalidDocument(u)))});let o=Dr();return r.forEach((c,l)=>{const u=i.get(c);u!==void 0&&jr(u.mutation,l,tn.empty(),ut.now()),Vc(n,l)&&(o=o.insert(c,l))}),o})}}/**
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
 */class $S{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return M.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Mn(s.createTime)}),M.resolve()}getNamedQuery(e,n){return M.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:xS(s.bundledQuery),readTime:Mn(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class VS{constructor(){this.overlays=new nt(ne.comparator),this.ls=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Xs();return M.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.we(e,n,r)}),M.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ls.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(s)),M.resolve()}getOverlaysForCollection(e,n,s){const i=Xs(),r=n.length+1,o=new ne(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new nt((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let f=r.get(u.largestBatchId);f===null&&(f=Xs(),r=r.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Xs(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=i)););return M.resolve(c)}we(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(s.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new lS(n,s));let r=this.ls.get(n);r===void 0&&(r=Ee(),this.ls.set(n,r)),this.ls.set(n,r.add(s.key))}}/**
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
 */class ff{constructor(){this.fs=new Mt(yt.ds),this.ws=new Mt(yt._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new yt(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new yt(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new ne(new et([])),s=new yt(n,e),i=new yt(n,e+1),r=[];return this.ws.forEachInRange([s,i],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new ne(new et([])),s=new yt(n,e),i=new yt(n,e+1);let r=Ee();return this.ws.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new yt(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class yt{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return ne.comparator(e.key,n.key)||Pe(e.As,n.As)}static _s(e,n){return Pe(e.As,n.As)||ne.comparator(e.key,n.key)}}/**
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
 */class jS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Mt(yt.ds)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cS(r,n,s,i);this.mutationQueue.push(o);for(const c of i)this.Rs=this.Rs.add(new yt(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.bs(s),r=i<0?0:i;return M.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new yt(n,0),i=new yt(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([s,i],o=>{const c=this.Ps(o.As);r.push(c)}),M.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Mt(Pe);return n.forEach(i=>{const r=new yt(i,0),o=new yt(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],c=>{s=s.add(c.As)})}),M.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;ne.isDocumentKey(r)||(r=r.child(""));const o=new yt(new ne(r),0);let c=new Mt(Pe);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===i&&(c=c.add(l.As)),!0)},o),M.resolve(this.Vs(c))}Vs(e){const n=[];return e.forEach(s=>{const i=this.Ps(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Xe(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return M.forEach(n.mutations,i=>{const r=new yt(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new yt(n,0),i=this.Rs.firstAfterOrEqual(s);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class BS{constructor(e){this.Ds=e,this.docs=new nt(ne.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return M.resolve(s?s.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let s=es();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Dt.newInvalidDocument(i))}),M.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=es();const o=n.path,c=new ne(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||AA(CA(f),s)<=0||(i.has(f.key)||Vc(n,f))&&(r=r.insert(f.key,f.mutableCopy()))}return M.resolve(r)}getAllFromCollectionGroup(e,n,s,i){ce()}Cs(e,n){return M.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new HS(this)}getSize(e){return M.resolve(this.size)}}class HS extends MS{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(s)}),M.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class qS{constructor(e){this.persistence=e,this.xs=new ur(n=>of(n),af),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ff,this.targetCount=0,this.Ms=Gi.kn()}forEachTarget(e,n){return this.xs.forEach((s,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),M.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Gi(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Fn(n),M.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.xs.forEach((o,c)=>{c.sequenceNumber<=n&&s.get(c.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),M.waitFor(r).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return M.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),M.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),M.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return M.resolve(s)}containsKey(e,n){return M.resolve(this.ks.containsKey(n))}}/**
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
 */class zS{constructor(e,n){this.$s={},this.overlays={},this.Os=new tf(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new qS(this),this.indexManager=new PS,this.remoteDocumentCache=function(s){return new BS(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new NS(n),this.qs=new $S(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new VS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new jS(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){X("MemoryPersistence","Starting transaction:",e);const i=new KS(this.Os.next());return this.referenceDelegate.Us(),s(i).next(r=>this.referenceDelegate.Ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Gs(e,n){return M.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class KS extends kA{constructor(e){super(),this.currentSequenceNumber=e}}class df{constructor(e){this.persistence=e,this.Qs=new ff,this.js=null}static zs(e){return new df(e)}get Ws(){if(this.js)return this.js;throw ce()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),M.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),M.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ws.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Ws,s=>{const i=ne.fromPath(s);return this.Hs(e,i).next(r=>{r||n.removeEntry(i,fe.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return M.or([()=>M.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class pf{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=i}static Li(e,n){let s=Ee(),i=Ee();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new pf(e,n.fromCache,s,i)}}/**
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
 */class WS{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ki(e,n).next(r=>r||this.Gi(e,n,i,s)).next(r=>r||this.Qi(e,n))}Ki(e,n){if(Eg(n))return M.resolve(null);let s=Zn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=zu(n,null,"F"),s=Zn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=Ee(...r);return this.Ui.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,s).next(l=>{const u=this.ji(n,c);return this.zi(n,u,o,l.readTime)?this.Ki(e,zu(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,s,i){return Eg(n)||i.isEqual(fe.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(r=>{const o=this.ji(n,r);return this.zi(n,o,s,i)?this.Qi(e,n):(dg()<=De.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ku(n)),this.Wi(e,o,n,IA(i,-1)))})}ji(e,n){let s=new Mt(s_(e));return n.forEach((i,r)=>{Vc(e,r)&&(s=s.add(r))}),s}zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Qi(e,n){return dg()<=De.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Ku(n)),this.Ui.getDocumentsMatchingQuery(e,n,ks.min())}Wi(e,n,s,i){return this.Ui.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class GS{constructor(e,n,s,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new nt(Pe),this.Yi=new ur(r=>of(r),af),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new US(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function QS(t,e,n,s){return new GS(t,e,n,s)}async function C_(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],c=[];let l=Ee();for(const u of i){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of r){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(s,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:c}))})})}function YS(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,c,l,u){const f=l.batch,g=f.keys();let m=M.resolve();return g.forEach(_=>{m=m.next(()=>u.getEntry(c,_)).next(C=>{const D=l.docVersions.get(_);Xe(D!==null),C.version.compareTo(D)<0&&(f.applyToRemoteDocument(C,l),C.isValidDocument()&&(C.setReadTime(l.commitVersion),u.addEntry(C)))})}),m.next(()=>o.mutationQueue.removeMutationBatch(c,f))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let c=Ee();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(c=c.add(o.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function A_(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function XS(t,e){const n=ge(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const c=[];e.targetChanges.forEach((f,g)=>{const m=i.get(g);if(!m)return;c.push(n.Bs.removeMatchingKeys(r,f.removedDocuments,g).next(()=>n.Bs.addMatchingKeys(r,f.addedDocuments,g)));let _=m.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(g)!==null?_=_.withResumeToken(Ut.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,s)),i=i.insert(g,_),function(C,D,N){return C.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(m,_,f)&&c.push(n.Bs.updateTargetData(r,_))});let l=es(),u=Ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(r,f))}),c.push(JS(r,o,e.documentUpdates).next(f=>{l=f.nr,u=f.sr})),!s.isEqual(fe.min())){const f=n.Bs.getLastRemoteSnapshotVersion(r).next(g=>n.Bs.setTargetsMetadata(r,r.currentSequenceNumber,s));c.push(f)}return M.waitFor(c).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,u)).next(()=>l)}).then(r=>(n.Ji=i,r))}function JS(t,e,n){let s=Ee(),i=Ee();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=es();return n.forEach((c,l)=>{const u=r.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(fe.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function ZS(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ek(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Bs.getTargetData(s,e).next(r=>r?(i=r,M.resolve(i)):n.Bs.allocateTargetId(s).next(o=>(i=new ys(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ji.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Xu(t,e,n){const s=ge(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ro(o))throw o;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function xg(t,e,n){const s=ge(t);let i=fe.min(),r=Ee();return s.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const f=ge(c),g=f.Yi.get(u);return g!==void 0?M.resolve(f.Ji.get(g)):f.Bs.getTargetData(l,u)}(s,o,Zn(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,c.targetId).next(l=>{r=l})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?i:fe.min(),n?r:Ee())).next(c=>(tk(s,WA(e),c),{documents:c,ir:r})))}function tk(t,e,n){let s=t.Xi.get(e)||fe.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Xi.set(e,s)}class Pg{constructor(){this.activeTargetIds=ZA()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nk{constructor(){this.Hr=new Pg,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Pg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sk{Yr(e){}shutdown(){}}/**
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
 */class Lg{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let ya=null;function Xl(){return ya===null?ya=268435456+Math.round(2147483648*Math.random()):ya++,"0x"+ya.toString(16)}/**
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
 */const ik={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class rk{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Rt="WebChannelConnection";class ok extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,i,r){const o=Xl(),c=this.To(e,n);X("RestConnection",`Sending RPC '${e}' ${o}:`,c,s);const l={};return this.Eo(l,i,r),this.Ao(e,c,l,s).then(u=>(X("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw qi("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",c,"request:",s),u})}vo(e,n,s,i,r,o){return this.Io(e,n,s,i,r)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+lr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}To(e,n){const s=ik[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,i){const r=Xl();return new Promise((o,c)=>{const l=new dA;l.setWithCredentials(!0),l.listenOnce(uA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ql.NO_ERROR:const f=l.getResponseJson();X(Rt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),o(f);break;case Ql.TIMEOUT:X(Rt,`RPC '${e}' ${r} timed out`),c(new te(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ql.HTTP_ERROR:const g=l.getStatus();if(X(Rt,`RPC '${e}' ${r} failed with status:`,g,"response text:",l.getResponseText()),g>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const C=function(D){const N=D.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(N)>=0?N:L.UNKNOWN}(_.status);c(new te(C,_.message))}else c(new te(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new te(L.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{X(Rt,`RPC '${e}' ${r} completed.`)}});const u=JSON.stringify(i);X(Rt,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",u,s,15)})}Ro(e,n,s){const i=Xl(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cA(),c=lA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new fA({})),this.Eo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const f=r.join("");X(Rt,`Creating RPC '${e}' stream ${i}: ${f}`,l);const g=o.createWebChannel(f,l);let m=!1,_=!1;const C=new rk({ro:N=>{_?X(Rt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(X(Rt,`Opening RPC '${e}' stream ${i} transport.`),g.open(),m=!0),X(Rt,`RPC '${e}' stream ${i} sending:`,N),g.send(N))},oo:()=>g.close()}),D=(N,U,$)=>{N.listen(U,Z=>{try{$(Z)}catch(K){setTimeout(()=>{throw K},0)}})};return D(g,da.EventType.OPEN,()=>{_||X(Rt,`RPC '${e}' stream ${i} transport opened.`)}),D(g,da.EventType.CLOSE,()=>{_||(_=!0,X(Rt,`RPC '${e}' stream ${i} transport closed`),C.wo())}),D(g,da.EventType.ERROR,N=>{_||(_=!0,qi(Rt,`RPC '${e}' stream ${i} transport errored:`,N),C.wo(new te(L.UNAVAILABLE,"The operation could not be completed")))}),D(g,da.EventType.MESSAGE,N=>{var U;if(!_){const $=N.data[0];Xe(!!$);const Z=$,K=Z.error||((U=Z[0])===null||U===void 0?void 0:U.error);if(K){X(Rt,`RPC '${e}' stream ${i} received error:`,K);const be=K.status;let He=function(ve){const de=at[ve];if(de!==void 0)return m_(de)}(be),Je=K.message;He===void 0&&(He=L.INTERNAL,Je="Unknown error status: "+be+" with message "+K.message),_=!0,C.wo(new te(He,Je)),g.close()}else X(Rt,`RPC '${e}' stream ${i} received:`,$),C._o($)}}),D(c,hA.STAT_EVENT,N=>{N.stat===hg.PROXY?X(Rt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===hg.NOPROXY&&X(Rt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function Jl(){return typeof document<"u"?document:null}/**
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
 */function qc(t){return new vS(t,!0)}/**
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
 */class S_{constructor(e,n,s=1e3,i=1.5,r=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=i,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-s);i>0&&X("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class k_{constructor(e,n,s,i,r,o,c,l){this.ii=e,this.$o=s,this.Oo=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new S_(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Jn(n.toString()),Jn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Fo===n&&this.Zo(s,i)},s=>{e(()=>{const i=new te(L.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(i)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{s(()=>this.tu(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ak extends k_{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=bS(this.serializer,e),s=function(i){if(!("targetChange"in i))return fe.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?fe.min():r.readTime?Mn(r.readTime):fe.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=Yu(this.serializer),n.addTarget=function(i,r){let o;const c=r.target;if(o=qu(c)?{documents:IS(i,c)}:{query:CS(i,c)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){o.resumeToken=__(i,r.resumeToken);const l=Wu(i,r.expectedCount);l!==null&&(o.expectedCount=l)}else if(r.snapshotVersion.compareTo(fe.min())>0){o.readTime=Ja(i,r.snapshotVersion.toTimestamp());const l=Wu(i,r.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const s=SS(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=Yu(this.serializer),n.removeTarget=e,this.Wo(n)}}class ck extends k_{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=TS(e.writeResults,e.commitTime),s=Mn(e.commitTime);return this.listener.cu(s,n)}return Xe(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Yu(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>ES(this.serializer,s))};this.Wo(n)}}/**
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
 */class lk extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new te(L.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.Io(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(L.UNKNOWN,i.toString())})}vo(e,n,s,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new te(L.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class uk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Jn(n),this.mu=!1):X("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class hk{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{hi(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=ge(c);l.vu.add(4),await No(l),l.bu.set("Unknown"),l.vu.delete(4),await zc(l)}(this))})}),this.bu=new uk(s,i)}}async function zc(t){if(hi(t))for(const e of t.Ru)await e(!0)}async function No(t){for(const e of t.Ru)await e(!1)}function R_(t,e){const n=ge(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),yf(n)?mf(n):hr(n).Ko()&&gf(n,e))}function O_(t,e){const n=ge(t),s=hr(n);n.Au.delete(e),s.Ko()&&D_(n,e),n.Au.size===0&&(s.Ko()?s.jo():hi(n)&&n.bu.set("Unknown"))}function gf(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hr(t).su(e)}function D_(t,e){t.Vu.qt(e),hr(t).iu(e)}function mf(t){t.Vu=new pS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),hr(t).start(),t.bu.gu()}function yf(t){return hi(t)&&!hr(t).Uo()&&t.Au.size>0}function hi(t){return ge(t).vu.size===0}function N_(t){t.Vu=void 0}async function fk(t){t.Au.forEach((e,n)=>{gf(t,e)})}async function dk(t,e){N_(t),yf(t)?(t.bu.Iu(e),mf(t)):t.bu.set("Unknown")}async function pk(t,e,n){if(t.bu.set("Online"),e instanceof v_&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Za(t,s)}else if(e instanceof Sa?t.Vu.Ht(e):e instanceof y_?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(fe.min()))try{const s=await A_(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.Vu.ce(r);return o.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(c.resumeToken,r))}}),o.targetMismatches.forEach((c,l)=>{const u=i.Au.get(c);if(!u)return;i.Au.set(c,u.withResumeToken(Ut.EMPTY_BYTE_STRING,u.snapshotVersion)),D_(i,c);const f=new ys(u.target,c,l,u.sequenceNumber);gf(i,f)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){X("RemoteStore","Failed to raise snapshot:",s),await Za(t,s)}}async function Za(t,e,n){if(!Ro(e))throw e;t.vu.add(1),await No(t),t.bu.set("Offline"),n||(n=()=>A_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await zc(t)})}function x_(t,e){return e().catch(n=>Za(t,n,e))}async function Kc(t){const e=ge(t),n=Os(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;gk(e);)try{const i=await ZS(e.localStore,s);if(i===null){e.Eu.length===0&&n.jo();break}s=i.batchId,mk(e,i)}catch(i){await Za(e,i)}P_(e)&&L_(e)}function gk(t){return hi(t)&&t.Eu.length<10}function mk(t,e){t.Eu.push(e);const n=Os(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function P_(t){return hi(t)&&!Os(t).Uo()&&t.Eu.length>0}function L_(t){Os(t).start()}async function yk(t){Os(t).hu()}async function vk(t){const e=Os(t);for(const n of t.Eu)e.uu(n.mutations)}async function _k(t,e,n){const s=t.Eu.shift(),i=cf.from(s,e,n);await x_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kc(t)}async function wk(t,e){e&&Os(t).ou&&await async function(n,s){if(i=s.code,hS(i)&&i!==L.ABORTED){const r=n.Eu.shift();Os(n).Qo(),await x_(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Kc(n)}var i}(t,e),P_(t)&&L_(t)}async function Mg(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const s=hi(n);n.vu.add(3),await No(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await zc(n)}async function bk(t,e){const n=ge(t);e?(n.vu.delete(2),await zc(n)):e||(n.vu.add(2),await No(n),n.bu.set("Unknown"))}function hr(t){return t.Su||(t.Su=function(e,n,s){const i=ge(e);return i.fu(),new ak(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:fk.bind(null,t),ao:dk.bind(null,t),nu:pk.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),yf(t)?mf(t):t.bu.set("Unknown")):(await t.Su.stop(),N_(t))})),t.Su}function Os(t){return t.Du||(t.Du=function(e,n,s){const i=ge(e);return i.fu(),new ck(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{uo:yk.bind(null,t),ao:wk.bind(null,t),au:vk.bind(null,t),cu:_k.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Kc(t)):(await t.Du.stop(),t.Eu.length>0&&(X("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class vf{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Cs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,c=new vf(e,n,o,i,r);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _f(t,e){if(Jn("AsyncQueue",`${e}: ${t}`),Ro(t))return new te(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Mi{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ne.comparator(n.key,s.key):(n,s)=>ne.comparator(n.key,s.key),this.keyedMap=Dr(),this.sortedSet=new nt(this.comparator)}static emptySet(e){return new Mi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Mi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Fg{constructor(){this.Cu=new nt(ne.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):ce():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Qi{constructor(e,n,s,i,r,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Qi(e,n,Mi.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class Ek{constructor(){this.Nu=void 0,this.listeners=[]}}class Tk{constructor(){this.queries=new ur(e=>n_(e),$c),this.onlineState="Unknown",this.ku=new Set}}async function Ik(t,e){const n=ge(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Ek),i)try{r.Nu=await n.onListen(s)}catch(o){const c=_f(o,`Initialization of query '${Ku(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,r),r.listeners.push(e),e.Mu(n.onlineState),r.Nu&&e.$u(r.Nu)&&wf(n)}async function Ck(t,e){const n=ge(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Ak(t,e){const n=ge(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const c of o.listeners)c.$u(i)&&(s=!0);o.Nu=i}}s&&wf(n)}function Sk(t,e,n){const s=ge(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function wf(t){t.ku.forEach(e=>{e.next()})}class kk{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Qi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=Qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class M_{constructor(e){this.key=e}}class F_{constructor(e){this.key=e}}class Rk{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Ee(),this.mutatedKeys=Ee(),this.tc=s_(e),this.ec=new Mi(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new Fg,i=n?n.ec:this.ec;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const m=i.get(f),_=Vc(this.query,g)?g:null,C=!!m&&this.mutatedKeys.has(m.key),D=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let N=!1;m&&_?m.data.isEqual(_.data)?C!==D&&(s.track({type:3,doc:_}),N=!0):this.rc(m,_)||(s.track({type:2,doc:_}),N=!0,(l&&this.tc(_,l)>0||u&&this.tc(_,u)<0)&&(c=!0)):!m&&_?(s.track({type:0,doc:_}),N=!0):m&&!_&&(s.track({type:1,doc:m}),N=!0,(l||u)&&(c=!0)),N&&(_?(o=o.add(_),r=D?r.add(f):r.delete(f)):(o=o.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),r=r.delete(f.key),s.track({type:1,doc:f})}return{ec:o,ic:s,zi:c,mutatedKeys:r}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort((u,f)=>function(g,m){const _=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return _(g)-_(m)}(u.type,f.type)||this.tc(u.doc,f.doc)),this.oc(s);const o=n?this.uc():[],c=this.Zu.size===0&&this.current?1:0,l=c!==this.Xu;return this.Xu=c,r.length!==0||l?{snapshot:new Qi(this.query,e.ec,i,r,e.mutatedKeys,c===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Fg,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Ee(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new F_(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new M_(s))}),n}hc(e){this.Yu=e.ir,this.Zu=Ee();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return Qi.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class Ok{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Dk{constructor(e){this.key=e,this.fc=!1}}class Nk{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new ur(c=>n_(c),$c),this._c=new Map,this.mc=new Set,this.gc=new nt(ne.comparator),this.yc=new Map,this.Ic=new ff,this.Tc={},this.Ec=new Map,this.Ac=Gi.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function xk(t,e){const n=Hk(t);let s,i;const r=n.wc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const o=await ek(n.localStore,Zn(e)),c=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await Pk(n,e,s,c==="current",o.resumeToken),n.isPrimaryClient&&R_(n.remoteStore,o)}return i}async function Pk(t,e,n,s,i){t.Rc=(g,m,_)=>async function(C,D,N,U){let $=D.view.sc(N);$.zi&&($=await xg(C.localStore,D.query,!1).then(({documents:be})=>D.view.sc(be,$)));const Z=U&&U.targetChanges.get(D.targetId),K=D.view.applyChanges($,C.isPrimaryClient,Z);return $g(C,D.targetId,K.cc),K.snapshot}(t,g,m,_);const r=await xg(t.localStore,e,!0),o=new Rk(e,r.ir),c=o.sc(r.documents),l=Do.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),u=o.applyChanges(c,t.isPrimaryClient,l);$g(t,n,u.cc);const f=new Ok(e,n,o);return t.wc.set(e,f),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function Lk(t,e){const n=ge(t),s=n.wc.get(e),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter(r=>!$c(r,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Xu(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),O_(n.remoteStore,s.targetId),Ju(n,s.targetId)}).catch(ko)):(Ju(n,s.targetId),await Xu(n.localStore,s.targetId,!0))}async function Mk(t,e,n){const s=qk(t);try{const i=await function(r,o){const c=ge(r),l=ut.now(),u=o.reduce((m,_)=>m.add(_.key),Ee());let f,g;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=es(),C=Ee();return c.Zi.getEntries(m,u).next(D=>{_=D,_.forEach((N,U)=>{U.isValidDocument()||(C=C.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,_)).next(D=>{f=D;const N=[];for(const U of o){const $=oS(U,f.get(U.key).overlayedDocument);$!=null&&N.push(new xs(U.key,$,Gv($.value.mapValue),Ln.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,N,o)}).next(D=>{g=D;const N=D.applyToLocalDocumentSet(f,C);return c.documentOverlayCache.saveOverlays(m,D.batchId,N)})}).then(()=>({batchId:g.batchId,changes:r_(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,c){let l=r.Tc[r.currentUser.toKey()];l||(l=new nt(Pe)),l=l.insert(o,c),r.Tc[r.currentUser.toKey()]=l}(s,i.batchId,n),await xo(s,i.changes),await Kc(s.remoteStore)}catch(i){const r=_f(i,"Failed to persist write");n.reject(r)}}async function U_(t,e){const n=ge(t);try{const s=await XS(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.yc.get(r);o&&(Xe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?Xe(o.fc):i.removedDocuments.size>0&&(Xe(o.fc),o.fc=!1))}),await xo(n,s,e)}catch(s){await ko(s)}}function Ug(t,e,n){const s=ge(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.wc.forEach((r,o)=>{const c=o.view.Mu(e);c.snapshot&&i.push(c.snapshot)}),function(r,o){const c=ge(r);c.onlineState=o;let l=!1;c.queries.forEach((u,f)=>{for(const g of f.listeners)g.Mu(o)&&(l=!0)}),l&&wf(c)}(s.eventManager,e),i.length&&s.dc.nu(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Fk(t,e,n){const s=ge(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.yc.get(e),r=i&&i.key;if(r){let o=new nt(ne.comparator);o=o.insert(r,Dt.newNoDocument(r,fe.min()));const c=Ee().add(r),l=new Hc(fe.min(),new Map,new nt(Pe),o,c);await U_(s,l),s.gc=s.gc.remove(r),s.yc.delete(e),bf(s)}else await Xu(s.localStore,e,!1).then(()=>Ju(s,e,n)).catch(ko)}async function Uk(t,e){const n=ge(t),s=e.batch.batchId;try{const i=await YS(n.localStore,e);V_(n,s,null),$_(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await xo(n,i)}catch(i){await ko(i)}}async function $k(t,e,n){const s=ge(t);try{const i=await function(r,o){const c=ge(r);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,o).next(f=>(Xe(f!==null),u=f.keys(),c.mutationQueue.removeMutationBatch(l,f))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(s.localStore,e);V_(s,e,n),$_(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await xo(s,i)}catch(i){await ko(i)}}function $_(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function V_(t,e,n){const s=ge(t);let i=s.Tc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Tc[s.currentUser.toKey()]=i}}function Ju(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||j_(t,s)})}function j_(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(O_(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),bf(t))}function $g(t,e,n){for(const s of n)s instanceof M_?(t.Ic.addReference(s.key,e),Vk(t,s)):s instanceof F_?(X("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||j_(t,s.key)):ce()}function Vk(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(X("SyncEngine","New document in limbo: "+n),t.mc.add(s),bf(t))}function bf(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new ne(et.fromString(e)),s=t.Ac.next();t.yc.set(s,new Dk(n)),t.gc=t.gc.insert(n,s),R_(t.remoteStore,new ys(Zn(t_(n.path)),s,"TargetPurposeLimboResolution",tf.ct))}}async function xo(t,e,n){const s=ge(t),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach((c,l)=>{o.push(s.Rc(l,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const f=pf.Li(l.targetId,u);r.push(f)}}))}),await Promise.all(o),s.dc.nu(i),await async function(c,l){const u=ge(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>M.forEach(l,g=>M.forEach(g.Fi,m=>u.persistence.referenceDelegate.addReference(f,g.targetId,m)).next(()=>M.forEach(g.Bi,m=>u.persistence.referenceDelegate.removeReference(f,g.targetId,m)))))}catch(f){if(!Ro(f))throw f;X("LocalStore","Failed to update sequence numbers: "+f)}for(const f of l){const g=f.targetId;if(!f.fromCache){const m=u.Ji.get(g),_=m.snapshotVersion,C=m.withLastLimboFreeSnapshotVersion(_);u.Ji=u.Ji.insert(g,C)}}}(s.localStore,r))}async function jk(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const s=await C_(n.localStore,e);n.currentUser=e,function(i,r){i.Ec.forEach(o=>{o.forEach(c=>{c.reject(new te(L.CANCELLED,r))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await xo(n,s.er)}}function Bk(t,e){const n=ge(t),s=n.yc.get(e);if(s&&s.fc)return Ee().add(s.key);{let i=Ee();const r=n._c.get(e);if(!r)return i;for(const o of r){const c=n.wc.get(o);i=i.unionWith(c.view.nc)}return i}}function Hk(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=U_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fk.bind(null,e),e.dc.nu=Ak.bind(null,e.eventManager),e.dc.Pc=Sk.bind(null,e.eventManager),e}function qk(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Uk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$k.bind(null,e),e}class Vg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=qc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return QS(this.persistence,new WS,e.initialUser,this.serializer)}createPersistence(e){return new zS(df.zs,this.serializer)}createSharedClientState(e){return new nk}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ug(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=jk.bind(null,this.syncEngine),await bk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Tk}createDatastore(e){const n=qc(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new ok(i));var i;return function(r,o,c,l){return new lk(r,o,c,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=c=>Ug(this.syncEngine,c,0),o=Lg.D()?new Lg:new sk,new hk(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,c,l,u){const f=new Nk(s,i,r,o,c,l);return u&&(f.vc=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ge(e);X("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await No(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class Kk{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Jn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Wk{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ot.UNAUTHENTICATED,this.clientId=zv.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{X("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(X("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new te(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Cs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=_f(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Zl(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await C_(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Qk(t);X("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Mg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Mg(e.remoteStore,r)),t._onlineComponents=e}function Gk(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Qk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Gk(n))throw n;qi("Error using user provided cache. Falling back to memory cache: "+n),await Zl(t,new Vg)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Zl(t,new Vg);return t._offlineComponents}async function B_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await jg(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await jg(t,new zk))),t._onlineComponents}function Yk(t){return B_(t).then(e=>e.syncEngine)}async function Xk(t){const e=await B_(t),n=e.eventManager;return n.onListen=xk.bind(null,e.syncEngine),n.onUnlisten=Lk.bind(null,e.syncEngine),n}function Jk(t,e,n={}){const s=new Cs;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,o,c,l){const u=new Kk({next:g=>{r.enqueueAndForget(()=>Ck(i,f)),g.fromCache&&c.source==="server"?l.reject(new te(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(g)},error:g=>l.reject(g)}),f=new kk(o,u,{includeMetadataChanges:!0,Ku:!0});return Ik(i,f)}(await Xk(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function H_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Bg=new Map;/**
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
 */function q_(t,e,n){if(!n)throw new te(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Zk(t,e,n,s){if(e===!0&&s===!0)throw new te(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hg(t){if(!ne.isDocumentKey(t))throw new te(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qg(t){if(ne.isDocumentKey(t))throw new te(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ef(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce()}function Yi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ef(t);throw new te(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class zg{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new te(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Zk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=H_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class Wc{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new te(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new te(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new gA;switch(n.type){case"firstParty":return new _A(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new te(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Bg.get(e);n&&(X("ComponentProvider","Removing Datastore"),Bg.delete(e),n.terminate())}(this),Promise.resolve()}}function e1(t,e,n,s={}){var i;const r=(t=Yi(t,Wc))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&qi("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,c;if(typeof s.mockUserToken=="string")o=s.mockUserToken,c=Ot.MOCK_USER;else{o=jT(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new te(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ot(l)}t._authCredentials=new mA(new qv(o,c))}}/**
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
 */class hn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new As(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new hn(this.firestore,e,this._key)}}class Gc{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Gc(this.firestore,e,this._query)}}class As extends Gc{constructor(e,n,s){super(e,n,t_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new hn(this.firestore,null,new ne(e))}withConverter(e){return new As(this.firestore,e,this._path)}}function z_(t,e,...n){if(t=ft(t),q_("collection","path",e),t instanceof Wc){const s=et.fromString(e,...n);return qg(s),new As(t,null,s)}{if(!(t instanceof hn||t instanceof As))throw new te(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(et.fromString(e,...n));return qg(s),new As(t.firestore,null,s)}}function Tf(t,e,...n){if(t=ft(t),arguments.length===1&&(e=zv.A()),q_("doc","path",e),t instanceof Wc){const s=et.fromString(e,...n);return Hg(s),new hn(t,null,new ne(s))}{if(!(t instanceof hn||t instanceof As))throw new te(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(et.fromString(e,...n));return Hg(s),new hn(t.firestore,t instanceof As?t.converter:null,new ne(s))}}/**
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
 */class t1{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new S_(this,"async_queue_retry"),this.Xc=()=>{const n=Jl();n&&X("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Jl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Jl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Cs;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Ro(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Jn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=vf.createAndSchedule(this,e,n,s,r=>this.na(r));return this.zc.push(i),i}Zc(){this.Wc&&ce()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Qc extends Wc{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new t1,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||W_(this),this._firestoreClient.terminate()}}function n1(t,e){const n=typeof t=="object"?t:$y(),s=typeof t=="string"?t:e||"(default)",i=Dh(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=$T("firestore");r&&e1(i,...r)}return i}function K_(t){return t._firestoreClient||W_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function W_(t){var e,n,s;const i=t._freezeSettings(),r=function(o,c,l,u){return new DA(o,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,H_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Wk(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Xi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xi(Ut.fromBase64String(e))}catch(n){throw new te(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xi(Ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Yc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class If{constructor(e){this._methodName=e}}/**
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
 */class Cf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
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
 */const s1=/^__.*__$/;class i1{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new xs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oo(e,this.data,n,this.fieldTransforms)}}class G_{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new xs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Q_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class Af{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Af(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:s,la:!1});return i.fa(e),i}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:s,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return ec(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Q_(this.ca)&&s1.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class r1{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||qc(e)}ya(e,n,s,i=!1){return new Af({ca:e,methodName:n,ga:s,path:xt.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Y_(t){const e=t._freezeSettings(),n=qc(t._databaseId);return new r1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function o1(t,e,n,s,i,r={}){const o=t.ya(r.merge||r.mergeFields?2:0,e,n,i);Sf("Data must be an object, but it was:",o,s);const c=X_(s,o);let l,u;if(r.merge)l=new tn(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const g of r.mergeFields){const m=Zu(e,g,n);if(!o.contains(m))throw new te(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Z_(f,m)||f.push(m)}l=new tn(f),u=o.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,u=o.fieldTransforms;return new i1(new Gt(c),l,u)}class Xc extends If{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xc}}function a1(t,e,n,s){const i=t.ya(1,e,n);Sf("Data must be an object, but it was:",i,s);const r=[],o=Gt.empty();ui(s,(l,u)=>{const f=kf(e,l,n);u=ft(u);const g=i.da(f);if(u instanceof Xc)r.push(f);else{const m=Jc(u,g);m!=null&&(r.push(f),o.set(f,m))}});const c=new tn(r);return new G_(o,c,i.fieldTransforms)}function c1(t,e,n,s,i,r){const o=t.ya(1,e,n),c=[Zu(e,s,n)],l=[i];if(r.length%2!=0)throw new te(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)c.push(Zu(e,r[m])),l.push(r[m+1]);const u=[],f=Gt.empty();for(let m=c.length-1;m>=0;--m)if(!Z_(u,c[m])){const _=c[m];let C=l[m];C=ft(C);const D=o.da(_);if(C instanceof Xc)u.push(_);else{const N=Jc(C,D);N!=null&&(u.push(_),f.set(_,N))}}const g=new tn(u);return new G_(f,g,o.fieldTransforms)}function Jc(t,e){if(J_(t=ft(t)))return Sf("Unsupported field value:",e,t),X_(t,e);if(t instanceof If)return function(n,s){if(!Q_(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let c=Jc(o,s.wa(r));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=ft(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return eS(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ut.fromDate(n);return{timestampValue:Ja(s.serializer,i)}}if(n instanceof ut){const i=new ut(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ja(s.serializer,i)}}if(n instanceof Cf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Xi)return{bytesValue:__(s.serializer,n._byteString)};if(n instanceof hn){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:hf(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${Ef(n)}`)}(t,e)}function X_(t,e){const n={};return Kv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ui(t,(s,i)=>{const r=Jc(i,e.ha(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function J_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof Cf||t instanceof Xi||t instanceof hn||t instanceof If)}function Sf(t,e,n){if(!J_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Ef(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function Zu(t,e,n){if((e=ft(e))instanceof Yc)return e._internalPath;if(typeof e=="string")return kf(t,e);throw ec("Field path arguments must be of type string or ",t,!1,void 0,n)}const l1=new RegExp("[~\\*/\\[\\]]");function kf(t,e,n){if(e.search(l1)>=0)throw ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yc(...e.split("."))._internalPath}catch{throw ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ec(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new te(L.INVALID_ARGUMENT,c+t+l)}function Z_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ew{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new hn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new u1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(tw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class u1 extends ew{data(){return super.data()}}function tw(t,e){return typeof e=="string"?kf(t,e):e instanceof Yc?e._internalPath:e._delegate._internalPath}/**
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
 */function h1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class f1{convertValue(e,n="none"){switch(ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ce()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ui(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new Cf(ct(e.latitude),ct(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=sf(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(co(e));default:return null}}convertTimestamp(e){const n=Rs(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=et.fromString(e);Xe(I_(s));const i=new lo(s.get(1),s.get(3)),r=new ne(s.popFirst(5));return i.isEqual(n)||Jn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function d1(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class va{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class p1 extends ew{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ka(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(tw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class ka extends p1{data(e={}){return super.data(e)}}class g1{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new va(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new ka(this._firestore,this._userDataWriter,s.key,s,new va(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const c=new ka(s._firestore,s._userDataWriter,o.doc.key,o.doc,new va(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:c,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const c=new ka(s._firestore,s._userDataWriter,o.doc.key,o.doc,new va(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),u=r.indexOf(o.doc.key)),{type:m1(o.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function m1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}class y1 extends f1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new hn(this.firestore,null,n)}}function v1(t){t=Yi(t,Gc);const e=Yi(t.firestore,Qc),n=K_(e),s=new y1(e);return h1(t._query),Jk(n,t._query).then(i=>new g1(e,s,t,i))}function nw(t,e,n,...s){t=Yi(t,hn);const i=Yi(t.firestore,Qc),r=Y_(i);let o;return o=typeof(e=ft(e))=="string"||e instanceof Yc?c1(r,"updateDoc",t._key,e,n,s):a1(r,"updateDoc",t._key,e),sw(i,[o.toMutation(t._key,Ln.exists(!0))])}function _1(t,e){const n=Yi(t.firestore,Qc),s=Tf(t),i=d1(t.converter,e);return sw(n,[o1(Y_(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Ln.exists(!1))]).then(()=>s)}function sw(t,e){return function(n,s){const i=new Cs;return n.asyncQueue.enqueueAndForget(async()=>Mk(await Yk(n),s,i)),i.promise}(K_(t),e)}(function(t,e=!0){(function(n){lr=n})(or),Bi(new si("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new Qc(new yA(n.getProvider("auth-internal")),new bA(n.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new te(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lo(c.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Is(fg,"3.12.1",t),Is(fg,"3.12.1","esm2017")})();function Rf(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function iw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const w1=iw,rw=new yo("auth","Firebase",iw());/**
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
 */const tc=new Rh("@firebase/auth");function b1(t,...e){tc.logLevel<=De.WARN&&tc.warn(`Auth (${or}): ${t}`,...e)}function Ra(t,...e){tc.logLevel<=De.ERROR&&tc.error(`Auth (${or}): ${t}`,...e)}/**
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
 */function wn(t,...e){throw Of(t,...e)}function Fn(t,...e){return Of(t,...e)}function E1(t,e,n){const s=Object.assign(Object.assign({},w1()),{[e]:n});return new yo("auth","Firebase",s).create(e,{appName:t.name})}function Of(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return rw.create(t,...e)}function ae(t,e,...n){if(!t)throw Of(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ra(e),new Error(e)}function ts(t,e){t||Gn(e)}/**
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
 */function eh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function T1(){return Kg()==="http:"||Kg()==="https:"}function Kg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function I1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(T1()||HT()||"connection"in navigator)?navigator.onLine:!0}function C1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Po{constructor(e,n){this.shortDelay=e,this.longDelay=n,ts(n>e,"Short delay should be less than long delay!"),this.isMobile=BT()||qT()}get(){return I1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Df(t,e){ts(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ow{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const A1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const S1=new Po(3e4,6e4);function Lo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fi(t,e,n,s,i={}){return aw(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const c=vo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),ow.fetch()(cw(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function aw(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},A1),e);try{const i=new k1(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw _a(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _a(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _a(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw _a(t,"user-disabled",o);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw E1(t,f,u);wn(t,f)}}catch(i){if(i instanceof ss)throw i;wn(t,"network-request-failed",{message:String(i)})}}async function Zc(t,e,n,s,i={}){const r=await fi(t,e,n,s,i);return"mfaPendingCredential"in r&&wn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function cw(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Df(t.config,i):`${t.config.apiScheme}://${i}`}class k1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Fn(this.auth,"network-request-failed")),S1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _a(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Fn(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function R1(t,e){return fi(t,"POST","/v1/accounts:delete",e)}async function O1(t,e){return fi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Br(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function D1(t,e=!1){const n=ft(t),s=await n.getIdToken(e),i=Nf(s);ae(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Br(eu(i.auth_time)),issuedAtTime:Br(eu(i.iat)),expirationTime:Br(eu(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function eu(t){return Number(t)*1e3}function Nf(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ra("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ny(n);return i?JSON.parse(i):(Ra("Failed to decode base64 JWT payload"),null)}catch(i){return Ra("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function N1(t){const e=Nf(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ji(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ss&&x1(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function x1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class P1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Br(this.lastLoginAt),this.creationTime=Br(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nc(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ji(t,O1(n,{idToken:s}));ae(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?F1(r.providerUserInfo):[],c=M1(t.providerData,o),l=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(c!=null&&c.length),f=l?u:!1,g={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:c,metadata:new lw(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function L1(t){const e=ft(t);await nc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function M1(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function F1(t){return t.map(e=>{var{providerId:n}=e,s=Rf(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function U1(t,e){const n=await aw(t,{},async()=>{const s=vo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=cw(t,i,"/v1/token",`key=${r}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ow.fetch()(o,{method:"POST",headers:c,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):N1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ae(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await U1(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new po;return s&&(ae(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ae(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ae(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new po,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
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
 */function cs(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ti{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Rf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new P1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new lw(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ji(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return D1(this,e)}reload(){return L1(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ti(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await nc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ji(this,R1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,c,l,u,f;const g=(s=n.displayName)!==null&&s!==void 0?s:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(c=n.tenantId)!==null&&c!==void 0?c:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,U=(u=n.createdAt)!==null&&u!==void 0?u:void 0,$=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:Z,emailVerified:K,isAnonymous:be,providerData:He,stsTokenManager:Je}=n;ae(Z&&Je,e,"internal-error");const ve=po.fromJSON(this.name,Je);ae(typeof Z=="string",e,"internal-error"),cs(g,e.name),cs(m,e.name),ae(typeof K=="boolean",e,"internal-error"),ae(typeof be=="boolean",e,"internal-error"),cs(_,e.name),cs(C,e.name),cs(D,e.name),cs(N,e.name),cs(U,e.name),cs($,e.name);const de=new ti({uid:Z,auth:e,email:m,emailVerified:K,displayName:g,isAnonymous:be,photoURL:C,phoneNumber:_,tenantId:D,stsTokenManager:ve,createdAt:U,lastLoginAt:$});return He&&Array.isArray(He)&&(de.providerData=He.map(Ke=>Object.assign({},Ke))),N&&(de._redirectEventId=N),de}static async _fromIdTokenResponse(e,n,s=!1){const i=new po;i.updateFromServerResponse(n);const r=new ti({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await nc(r),r}}/**
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
 */const Wg=new Map;function Qn(t){ts(t instanceof Function,"Expected a class definition");let e=Wg.get(t);return e?(ts(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wg.set(t,e),e)}/**
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
 */class uw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}uw.type="NONE";const Gg=uw;/**
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
 */function Oa(t,e,n){return`firebase:${t}:${e}:${n}`}class Fi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Oa(this.userKey,i.apiKey,r),this.fullPersistenceKey=Oa("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ti._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Fi(Qn(Gg),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||Qn(Gg);const o=Oa(s,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){const g=ti._fromJSON(e,f);u!==r&&(c=g),r=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Fi(r,e,s):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Fi(r,e,s))}}/**
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
 */function Qg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gw(e))return"Blackberry";if(mw(e))return"Webos";if(xf(e))return"Safari";if((e.includes("chrome/")||fw(e))&&!e.includes("edge/"))return"Chrome";if(pw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function hw(t=Ft()){return/firefox\//i.test(t)}function xf(t=Ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fw(t=Ft()){return/crios\//i.test(t)}function dw(t=Ft()){return/iemobile/i.test(t)}function pw(t=Ft()){return/android/i.test(t)}function gw(t=Ft()){return/blackberry/i.test(t)}function mw(t=Ft()){return/webos/i.test(t)}function el(t=Ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $1(t=Ft()){var e;return el(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function V1(){return zT()&&document.documentMode===10}function yw(t=Ft()){return el(t)||pw(t)||mw(t)||gw(t)||/windows phone/i.test(t)||dw(t)}function j1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function vw(t,e=[]){let n;switch(t){case"Browser":n=Qg(Ft());break;case"Worker":n=`${Qg(Ft())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${or}/${s}`}async function _w(t,e){return fi(t,"GET","/v2/recaptchaConfig",Lo(t,e))}function Yg(t){return t!==void 0&&t.enterprise!==void 0}class ww{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function B1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function bw(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Fn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",B1().appendChild(s)})}function H1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const q1="https://www.google.com/recaptcha/enterprise.js?render=",z1="recaptcha-enterprise",K1="NO_RECAPTCHA";class Ew{constructor(e){this.type=z1,this.auth=Mo(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{_w(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new ww(l);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function i(r,o,c){const l=window.grecaptcha;Yg(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(K1)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(c=>{if(!n&&Yg(window.grecaptcha))i(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}bw(q1+c).then(()=>{i(c,r,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function Xg(t,e,n,s=!1){const i=new Ew(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class W1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class G1{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jg(this),this.idTokenSubscription=new Jg(this),this.beforeStateQueue=new W1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Fi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=C1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ft(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qn(e))})}async initializeRecaptchaConfig(){const e=await _w(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ww(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Ew(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yo("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await Fi.create(this,[Qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ae(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&b1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mo(t){return ft(t)}class Jg{constructor(e){this.auth=e,this.observer=null,this.addObserver=JT(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Q1(t,e){const n=Dh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if($a(r,e??{}))return i;wn(i,"already-initialized")}return n.initialize({options:e})}function Y1(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function X1(t,e,n){const s=Mo(t);ae(s._canInitEmulator,s,"emulator-config-failed"),ae(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Tw(e),{host:o,port:c}=J1(e),l=c===null?"":`:${c}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Z1()}function Tw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function J1(t){const e=Tw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Zg(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Zg(o)}}}function Zg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Z1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Pf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}async function eR(t,e){return fi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function tu(t,e){return Zc(t,"POST","/v1/accounts:signInWithPassword",Lo(t,e))}/**
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
 */async function tR(t,e){return Zc(t,"POST","/v1/accounts:signInWithEmailLink",Lo(t,e))}async function nR(t,e){return Zc(t,"POST","/v1/accounts:signInWithEmailLink",Lo(t,e))}/**
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
 */class go extends Pf{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new go(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new go(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const s={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Xg(e,s,"signInWithPassword");return tu(e,i)}else return tu(e,s).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Xg(e,s,"signInWithPassword");return tu(e,r)}else return Promise.reject(i)});case"emailLink":return tR(e,{email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return eR(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nR(e,{idToken:n,email:this._email,oobCode:this._password});default:wn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ui(t,e){return Zc(t,"POST","/v1/accounts:signInWithIdp",Lo(t,e))}/**
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
 */const sR="http://localhost";class ci extends Pf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Rf(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ci(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ui(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ui(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ui(e,n)}buildRequest(){const e={requestUri:sR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vo(n)}return e}}/**
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
 */function iR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rR(t){const e=Sr(kr(t)).link,n=e?Sr(kr(e)).deep_link_id:null,s=Sr(kr(t)).deep_link_id;return(s?Sr(kr(s)).link:null)||s||n||e||t}class Lf{constructor(e){var n,s,i,r,o,c;const l=Sr(kr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(s=l.oobCode)!==null&&s!==void 0?s:null,g=iR((i=l.mode)!==null&&i!==void 0?i:null);ae(u&&f&&g,"argument-error"),this.apiKey=u,this.operation=g,this.code=f,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=rR(e);try{return new Lf(n)}catch{return null}}}/**
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
 */class fr{constructor(){this.providerId=fr.PROVIDER_ID}static credential(e,n){return go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Lf.parseLink(n);return ae(s,"argument-error"),go._fromEmailAndCode(e,s.code,s.tenantId)}}fr.PROVIDER_ID="password";fr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Iw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fo extends Iw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ds extends Fo{constructor(){super("facebook.com")}static credential(e){return ci._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ds.credential(e.oauthAccessToken)}catch{return null}}}ds.FACEBOOK_SIGN_IN_METHOD="facebook.com";ds.PROVIDER_ID="facebook.com";/**
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
 */class ps extends Fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ci._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ps.credential(n,s)}catch{return null}}}ps.GOOGLE_SIGN_IN_METHOD="google.com";ps.PROVIDER_ID="google.com";/**
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
 */class gs extends Fo{constructor(){super("github.com")}static credential(e){return ci._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gs.credential(e.oauthAccessToken)}catch{return null}}}gs.GITHUB_SIGN_IN_METHOD="github.com";gs.PROVIDER_ID="github.com";/**
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
 */class ms extends Fo{constructor(){super("twitter.com")}static credential(e,n){return ci._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ms.credential(n,s)}catch{return null}}}ms.TWITTER_SIGN_IN_METHOD="twitter.com";ms.PROVIDER_ID="twitter.com";/**
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
 */class Zi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ti._fromIdTokenResponse(e,s,i),o=em(s);return new Zi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=em(s);return new Zi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function em(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class sc extends ss{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,sc.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new sc(e,n,s,i)}}function Cw(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?sc._fromErrorAndOperation(t,r,e,s):r})}async function oR(t,e,n=!1){const s=await Ji(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zi._forOperation(t,"link",s)}/**
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
 */async function aR(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Ji(t,Cw(s,i,e,t),n);ae(r.idToken,s,"internal-error");const o=Nf(r.idToken);ae(o,s,"internal-error");const{sub:c}=o;return ae(t.uid===c,s,"user-mismatch"),Zi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&wn(s,"user-mismatch"),r}}/**
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
 */async function Aw(t,e,n=!1){const s="signIn",i=await Cw(t,s,e),r=await Zi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function cR(t,e){return Aw(Mo(t),e)}function lR(t,e,n){return cR(ft(t),fr.credential(e,n))}/**
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
 */async function uR(t,e){return fi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function hR(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=ft(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ji(s,uR(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const c=s.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=s.displayName,c.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}/**
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
 */function fR(t,e){return ft(t).setPersistence(e)}function dR(t,e,n,s){return ft(t).onIdTokenChanged(e,n,s)}function pR(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function Sw(t,e,n,s){return ft(t).onAuthStateChanged(e,n,s)}function gR(t){return ft(t).signOut()}const ic="__sak";/**
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
 */class kw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ic,"1"),this.storage.removeItem(ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function mR(){const t=Ft();return xf(t)||el(t)}const yR=1e3,vR=10;class Rw extends kw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mR()&&j1(),this.fallbackToPolling=yw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);V1()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vR):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},yR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rw.type="LOCAL";const _R=Rw;/**
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
 */class Ow extends kw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ow.type="SESSION";const Mf=Ow;/**
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
 */function wR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new tl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(o).map(async u=>u(n.origin,r)),l=await wR(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tl.receivers=[];/**
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
 */function Ff(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const u=Ff("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(g){const m=g;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(m.data.response);break;default:clearTimeout(f),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Un(){return window}function ER(t){Un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Dw(){return typeof Un().WorkerGlobalScope<"u"&&typeof Un().importScripts=="function"}async function TR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CR(){return Dw()?self:null}/**
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
 */const Nw="firebaseLocalStorageDb",AR=1,rc="firebaseLocalStorage",xw="fbase_key";class Uo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nl(t,e){return t.transaction([rc],e?"readwrite":"readonly").objectStore(rc)}function SR(){const t=indexedDB.deleteDatabase(Nw);return new Uo(t).toPromise()}function th(){const t=indexedDB.open(Nw,AR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(rc,{keyPath:xw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(rc)?e(s):(s.close(),await SR(),e(await th()))})})}async function tm(t,e,n){const s=nl(t,!0).put({[xw]:e,value:n});return new Uo(s).toPromise()}async function kR(t,e){const n=nl(t,!1).get(e),s=await new Uo(n).toPromise();return s===void 0?null:s.value}function nm(t,e){const n=nl(t,!0).delete(e);return new Uo(n).toPromise()}const RR=800,OR=3;class Pw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await th(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>OR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tl._getInstance(CR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TR(),!this.activeServiceWorker)return;this.sender=new bR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await th();return await tm(e,ic,"1"),await nm(e,ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>tm(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>kR(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=nl(i,!1).getAll();return new Uo(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pw.type="LOCAL";const DR=Pw;new Po(3e4,6e4);/**
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
 */function NR(t,e){return e?Qn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uf extends Pf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xR(t){return Aw(t.auth,new Uf(t),t.bypassAuthState)}function PR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),aR(n,new Uf(t),t.bypassAuthState)}async function LR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),oR(n,new Uf(t),t.bypassAuthState)}/**
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
 */class Lw{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xR;case"linkViaPopup":case"linkViaRedirect":return LR;case"reauthViaPopup":case"reauthViaRedirect":return PR;default:wn(this.auth,"internal-error")}}resolve(e){ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const MR=new Po(2e3,1e4);class Ri extends Lw{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){ts(this.filter.length===1,"Popup operations only handle one event");const e=Ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MR.get())};e()}}Ri.currentPopupAction=null;/**
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
 */const FR="pendingRedirect",Da=new Map;class UR extends Lw{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Da.get(this.auth._key());if(!e){try{const s=await $R(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Da.set(this.auth._key(),e)}return this.bypassAuthState||Da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $R(t,e){const n=BR(e),s=jR(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function VR(t,e){Da.set(t._key(),e)}function jR(t){return Qn(t._redirectPersistence)}function BR(t){return Oa(FR,t.config.apiKey,t.name)}async function HR(t,e,n=!1){const s=Mo(t),i=NR(s,e),o=await new UR(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const qR=10*60*1e3;class zR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Mw(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qR&&this.cachedEventUids.clear(),this.cachedEventUids.has(sm(e))}saveEventToCache(e){this.cachedEventUids.add(sm(e)),this.lastProcessedEventTime=Date.now()}}function sm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mw(t);default:return!1}}/**
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
 */async function WR(t,e={}){return fi(t,"GET","/v1/projects",e)}/**
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
 */const GR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QR=/^https?/;async function YR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WR(t);for(const n of e)try{if(XR(n))return}catch{}wn(t,"unauthorized-domain")}function XR(t){const e=eh(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!QR.test(n))return!1;if(GR.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const JR=new Po(3e4,6e4);function im(){const t=Un().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZR(t){return new Promise((e,n)=>{var s,i,r;function o(){im(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{im(),n(Fn(t,"network-request-failed"))},timeout:JR.get()})}if(!((i=(s=Un().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Un().gapi)===null||r===void 0)&&r.load)o();else{const c=H1("iframefcb");return Un()[c]=()=>{gapi.load?o():n(Fn(t,"network-request-failed"))},bw(`https://apis.google.com/js/api.js?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Na=null,e})}let Na=null;function eO(t){return Na=Na||ZR(t),Na}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const tO=new Po(5e3,15e3),nO="__/auth/iframe",sO="emulator/auth/iframe",iO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oO(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Df(e,sO):`https://${t.config.authDomain}/${nO}`,s={apiKey:e.apiKey,appName:t.name,v:or},i=rO.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${vo(s).slice(1)}`}async function aO(t){const e=await eO(t),n=Un().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:oO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iO,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Fn(t,"network-request-failed"),c=Un().setTimeout(()=>{r(o)},tO.get());function l(){Un().clearTimeout(c),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const cO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lO=500,uO=600,hO="_blank",fO="http://localhost";class rm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dO(t,e,n,s=lO,i=uO){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l=Object.assign(Object.assign({},cO),{width:s.toString(),height:i.toString(),top:r,left:o}),u=Ft().toLowerCase();n&&(c=fw(u)?hO:n),hw(u)&&(e=e||fO,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,C])=>`${m}${_}=${C},`,"");if($1(u)&&c!=="_self")return pO(e||"",c),new rm(null);const g=window.open(e||"",c,f);ae(g,t,"popup-blocked");try{g.focus()}catch{}return new rm(g)}function pO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const gO="__/auth/handler",mO="emulator/auth/handler",yO=encodeURIComponent("fac");async function om(t,e,n,s,i,r){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:or,eventId:i};if(e instanceof Iw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries(r||{}))o[f]=g}if(e instanceof Fo){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${yO}=${encodeURIComponent(l)}`:"";return`${vO(t)}?${vo(c).slice(1)}${u}`}function vO({config:t}){return t.emulator?Df(t,mO):`https://${t.authDomain}/${gO}`}/**
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
 */const nu="webStorageSupport";class _O{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mf,this._completeRedirectFn=HR,this._overrideRedirectResult=VR}async _openPopup(e,n,s,i){var r;ts((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await om(e,n,s,eh(),i);return dO(e,o,Ff())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await om(e,n,s,eh(),i);return ER(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(ts(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await aO(e),s=new zR(e);return n.register("authEvent",i=>(ae(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nu,{type:nu},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[nu];o!==void 0&&n(!!o),wn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yw()||xf()||el()}}const wO=_O;var am="@firebase/auth",cm="0.23.2";/**
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
 */class bO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function EO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function TO(t){Bi(new si("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vw(t)},u=new G1(s,i,r,l);return Y1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Bi(new si("auth-internal",e=>{const n=Mo(e.getProvider("auth").getImmediate());return(s=>new bO(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Is(am,cm,EO(t)),Is(am,cm,"esm2017")}/**
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
 */const IO=5*60,CO=Ly("authIdTokenMaxAge")||IO;let lm=null;const AO=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>CO)return;const i=n==null?void 0:n.token;lm!==i&&(lm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function SO(t=$y()){const e=Dh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Q1(t,{popupRedirectResolver:wO,persistence:[DR,_R,Mf]}),s=Ly("authTokenSyncURL");if(s){const r=AO(s);pR(n,r,()=>r(n.currentUser)),dR(n,o=>r(o))}const i=xy("auth");return i&&X1(n,`http://${i}`),n}TO("Browser");const kO={apiKey:"AIzaSyDA6GtnbFJQVnhsEMoEW2ee-Hk2WunqW7E",authDomain:"vue-order-project.firebaseapp.com",projectId:"vue-order-project",storageBucket:"vue-order-project.appspot.com",messagingSenderId:"461733399141",appId:"1:461733399141:web:6d35fe299412293181d48c"},Fw=Uy(kO),sl=n1(Fw),dr=SO(Fw);/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Si=typeof window<"u";function RO(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ue=Object.assign;function su(t,e){const n={};for(const s in e){const i=e[s];n[s]=bn(i)?i.map(t):t(i)}return n}const Hr=()=>{},bn=Array.isArray,OO=/\/$/,DO=t=>t.replace(OO,"");function iu(t,e,n="/"){let s,i={},r="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,c>-1?c:e.length),i=t(r)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=LO(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function NO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function um(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xO(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&er(e.matched[s],n.matched[i])&&Uw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function er(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Uw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!PO(t[n],e[n]))return!1;return!0}function PO(t,e){return bn(t)?hm(t,e):bn(e)?hm(e,t):t===e}function hm(t,e){return bn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function LO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,c;for(o=0;o<s.length;o++)if(c=s[o],c!==".")if(c==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var mo;(function(t){t.pop="pop",t.push="push"})(mo||(mo={}));var qr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qr||(qr={}));function MO(t){if(!t)if(Si){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),DO(t)}const FO=/^[^#]+#/;function UO(t,e){return t.replace(FO,"#")+e}function $O(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const il=()=>({left:window.pageXOffset,top:window.pageYOffset});function VO(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=$O(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function fm(t,e){return(history.state?history.state.position-e:-1)+t}const nh=new Map;function jO(t,e){nh.set(t,e)}function BO(t){const e=nh.get(t);return nh.delete(t),e}let HO=()=>location.protocol+"//"+location.host;function $w(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let c=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(c);return l[0]!=="/"&&(l="/"+l),um(l,"")}return um(n,t)+s+i}function qO(t,e,n,s){let i=[],r=[],o=null;const c=({state:m})=>{const _=$w(t,location),C=n.value,D=e.value;let N=0;if(m){if(n.value=_,e.value=m,o&&o===C){o=null;return}N=D?m.position-D.position:0}else s(_);i.forEach(U=>{U(n.value,C,{delta:N,type:mo.pop,direction:N?N>0?qr.forward:qr.back:qr.unknown})})};function l(){o=n.value}function u(m){i.push(m);const _=()=>{const C=i.indexOf(m);C>-1&&i.splice(C,1)};return r.push(_),_}function f(){const{history:m}=window;m.state&&m.replaceState(Ue({},m.state,{scroll:il()}),"")}function g(){for(const m of r)m();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:g}}function dm(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?il():null}}function zO(t){const{history:e,location:n}=window,s={value:$w(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,u,f){const g=t.indexOf("#"),m=g>-1?(n.host&&document.querySelector("base")?t:t.slice(g))+l:HO()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),i.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){const f=Ue({},e.state,dm(i.value.back,l,i.value.forward,!0),u,{position:i.value.position});r(l,f,!0),s.value=l}function c(l,u){const f=Ue({},i.value,e.state,{forward:l,scroll:il()});r(f.current,f,!0);const g=Ue({},dm(s.value,l,null),{position:f.position+1},u);r(l,g,!1),s.value=l}return{location:s,state:i,push:c,replace:o}}function KO(t){t=MO(t);const e=zO(t),n=qO(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Ue({location:"",base:t,go:s,createHref:UO.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function WO(t){return typeof t=="string"||t&&typeof t=="object"}function Vw(t){return typeof t=="string"||typeof t=="symbol"}const ls={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jw=Symbol("");var pm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(pm||(pm={}));function tr(t,e){return Ue(new Error,{type:t,[jw]:!0},e)}function qn(t,e){return t instanceof Error&&jw in t&&(e==null||!!(t.type&e))}const gm="[^/]+?",GO={sensitive:!1,strict:!1,start:!0,end:!0},QO=/[.+*?^${}()[\]/\\]/g;function YO(t,e){const n=Ue({},GO,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let g=0;g<u.length;g++){const m=u[g];let _=40+(n.sensitive?.25:0);if(m.type===0)g||(i+="/"),i+=m.value.replace(QO,"\\$&"),_+=40;else if(m.type===1){const{value:C,repeatable:D,optional:N,regexp:U}=m;r.push({name:C,repeatable:D,optional:N});const $=U||gm;if($!==gm){_+=10;try{new RegExp(`(${$})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${C}" (${$}): `+K.message)}}let Z=D?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;g||(Z=N&&u.length<2?`(?:/${Z})`:"/"+Z),N&&(Z+="?"),i+=Z,_+=20,N&&(_+=-8),D&&(_+=-20),$===".*"&&(_+=-50)}f.push(_)}s.push(f)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(u){const f=u.match(o),g={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",C=r[m-1];g[C.name]=_&&C.repeatable?_.split("/"):_}return g}function l(u){let f="",g=!1;for(const m of t){(!g||!f.endsWith("/"))&&(f+="/"),g=!1;for(const _ of m)if(_.type===0)f+=_.value;else if(_.type===1){const{value:C,repeatable:D,optional:N}=_,U=C in u?u[C]:"";if(bn(U)&&!D)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const $=bn(U)?U.join("/"):U;if(!$)if(N)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):g=!0);else throw new Error(`Missing required param "${C}"`);f+=$}}return f||"/"}return{re:o,score:s,keys:r,parse:c,stringify:l}}function XO(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function JO(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=XO(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(mm(s))return 1;if(mm(i))return-1}return i.length-s.length}function mm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ZO={type:0,value:""},eD=/[a-zA-Z0-9_]/;function tD(t){if(!t)return[[]];if(t==="/")return[[ZO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let c=0,l,u="",f="";function g(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(u&&g(),o()):l===":"?(g(),n=1):m();break;case 4:m(),n=s;break;case 1:l==="("?n=2:eD.test(l)?m():(g(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:g(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),g(),o(),i}function nD(t,e,n){const s=YO(tD(t.path),n),i=Ue(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function sD(t,e){const n=[],s=new Map;e=_m({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,g,m){const _=!m,C=iD(f);C.aliasOf=m&&m.record;const D=_m(e,f),N=[C];if("alias"in f){const Z=typeof f.alias=="string"?[f.alias]:f.alias;for(const K of Z)N.push(Ue({},C,{components:m?m.record.components:C.components,path:K,aliasOf:m?m.record:C}))}let U,$;for(const Z of N){const{path:K}=Z;if(g&&K[0]!=="/"){const be=g.record.path,He=be[be.length-1]==="/"?"":"/";Z.path=g.record.path+(K&&He+K)}if(U=nD(Z,g,D),m?m.alias.push(U):($=$||U,$!==U&&$.alias.push(U),_&&f.name&&!vm(U)&&o(f.name)),C.children){const be=C.children;for(let He=0;He<be.length;He++)r(be[He],U,m&&m.children[He])}m=m||U,(U.record.components&&Object.keys(U.record.components).length||U.record.name||U.record.redirect)&&l(U)}return $?()=>{o($)}:Hr}function o(f){if(Vw(f)){const g=s.get(f);g&&(s.delete(f),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(f);g>-1&&(n.splice(g,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function l(f){let g=0;for(;g<n.length&&JO(f,n[g])>=0&&(f.record.path!==n[g].record.path||!Bw(f,n[g]));)g++;n.splice(g,0,f),f.record.name&&!vm(f)&&s.set(f.record.name,f)}function u(f,g){let m,_={},C,D;if("name"in f&&f.name){if(m=s.get(f.name),!m)throw tr(1,{location:f});D=m.record.name,_=Ue(ym(g.params,m.keys.filter($=>!$.optional).map($=>$.name)),f.params&&ym(f.params,m.keys.map($=>$.name))),C=m.stringify(_)}else if("path"in f)C=f.path,m=n.find($=>$.re.test(C)),m&&(_=m.parse(C),D=m.record.name);else{if(m=g.name?s.get(g.name):n.find($=>$.re.test(g.path)),!m)throw tr(1,{location:f,currentLocation:g});D=m.record.name,_=Ue({},g.params,f.params),C=m.stringify(_)}const N=[];let U=m;for(;U;)N.unshift(U.record),U=U.parent;return{name:D,path:C,params:_,matched:N,meta:oD(N)}}return t.forEach(f=>r(f)),{addRoute:r,resolve:u,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function ym(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function iD(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:rD(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function rD(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function vm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function oD(t){return t.reduce((e,n)=>Ue(e,n.meta),{})}function _m(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Bw(t,e){return e.children.some(n=>n===t||Bw(t,n))}const Hw=/#/g,aD=/&/g,cD=/\//g,lD=/=/g,uD=/\?/g,qw=/\+/g,hD=/%5B/g,fD=/%5D/g,zw=/%5E/g,dD=/%60/g,Kw=/%7B/g,pD=/%7C/g,Ww=/%7D/g,gD=/%20/g;function $f(t){return encodeURI(""+t).replace(pD,"|").replace(hD,"[").replace(fD,"]")}function mD(t){return $f(t).replace(Kw,"{").replace(Ww,"}").replace(zw,"^")}function sh(t){return $f(t).replace(qw,"%2B").replace(gD,"+").replace(Hw,"%23").replace(aD,"%26").replace(dD,"`").replace(Kw,"{").replace(Ww,"}").replace(zw,"^")}function yD(t){return sh(t).replace(lD,"%3D")}function vD(t){return $f(t).replace(Hw,"%23").replace(uD,"%3F")}function _D(t){return t==null?"":vD(t).replace(cD,"%2F")}function oc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function wD(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(qw," "),o=r.indexOf("="),c=oc(o<0?r:r.slice(0,o)),l=o<0?null:oc(r.slice(o+1));if(c in e){let u=e[c];bn(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function wm(t){let e="";for(let n in t){const s=t[n];if(n=yD(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(bn(s)?s.map(r=>r&&sh(r)):[s&&sh(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function bD(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=bn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const ED=Symbol(""),bm=Symbol(""),rl=Symbol(""),Gw=Symbol(""),ih=Symbol("");function Ir(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function fs(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,c)=>{const l=g=>{g===!1?c(tr(4,{from:n,to:e})):g instanceof Error?c(g):WO(g)?c(tr(2,{from:e,to:g})):(r&&s.enterCallbacks[i]===r&&typeof g=="function"&&r.push(g),o())},u=t.call(s&&s.instances[i],e,n,l);let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(g=>c(g))})}function ru(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let c=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(TD(c)){const u=(c.__vccOpts||c)[e];u&&i.push(fs(u,n,s,r,o))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const f=RO(u)?u.default:u;r.components[o]=f;const m=(f.__vccOpts||f)[e];return m&&fs(m,n,s,r,o)()}))}}return i}function TD(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Em(t){const e=vn(rl),n=vn(Gw),s=Zt(()=>e.resolve(ws(t.to))),i=Zt(()=>{const{matched:l}=s.value,{length:u}=l,f=l[u-1],g=n.matched;if(!f||!g.length)return-1;const m=g.findIndex(er.bind(null,f));if(m>-1)return m;const _=Tm(l[u-2]);return u>1&&Tm(f)===_&&g[g.length-1].path!==_?g.findIndex(er.bind(null,l[u-2])):m}),r=Zt(()=>i.value>-1&&AD(n.params,s.value.params)),o=Zt(()=>i.value>-1&&i.value===n.matched.length-1&&Uw(n.params,s.value.params));function c(l={}){return CD(l)?e[ws(t.replace)?"replace":"push"](ws(t.to)).catch(Hr):Promise.resolve()}return{route:s,href:Zt(()=>s.value.href),isActive:r,isExactActive:o,navigate:c}}const ID=ry({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Em,setup(t,{slots:e}){const n=rr(Em(t)),{options:s}=vn(rl),i=Zt(()=>({[Im(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Im(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Cy("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),rh=ID;function CD(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function AD(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!bn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Tm(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Im=(t,e,n)=>t??e??n,SD=ry({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=vn(ih),i=Zt(()=>t.route||s.value),r=vn(bm,0),o=Zt(()=>{let u=ws(r);const{matched:f}=i.value;let g;for(;(g=f[u])&&!g.components;)u++;return u}),c=Zt(()=>i.value.matched[o.value]);Ta(bm,Zt(()=>o.value+1)),Ta(ED,c),Ta(ih,i);const l=wh();return xr(()=>[l.value,c.value,t.name],([u,f,g],[m,_,C])=>{f&&(f.instances[g]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!er(f,_)||!m)&&(f.enterCallbacks[g]||[]).forEach(D=>D(u))},{flush:"post"}),()=>{const u=i.value,f=t.name,g=c.value,m=g&&g.components[f];if(!m)return Cm(n.default,{Component:m,route:u});const _=g.props[f],C=_?_===!0?u.params:typeof _=="function"?_(u):_:null,N=Cy(m,Ue({},C,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(g.instances[f]=null)},ref:l}));return Cm(n.default,{Component:N,route:u})||N}}});function Cm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const kD=SD;function RD(t){const e=sD(t.routes,t),n=t.parseQuery||wD,s=t.stringifyQuery||wm,i=t.history,r=Ir(),o=Ir(),c=Ir(),l=$E(ls);let u=ls;Si&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=su.bind(null,S=>""+S),g=su.bind(null,_D),m=su.bind(null,oc);function _(S,A){let j,Y;return Vw(S)?(j=e.getRecordMatcher(S),Y=A):Y=S,e.addRoute(Y,j)}function C(S){const A=e.getRecordMatcher(S);A&&e.removeRoute(A)}function D(){return e.getRoutes().map(S=>S.record)}function N(S){return!!e.getRecordMatcher(S)}function U(S,A){if(A=Ue({},A||l.value),typeof S=="string"){const E=iu(n,S,A.path),I=e.resolve({path:E.path},A),k=i.createHref(E.fullPath);return Ue(E,I,{params:m(I.params),hash:oc(E.hash),redirectedFrom:void 0,href:k})}let j;if("path"in S)j=Ue({},S,{path:iu(n,S.path,A.path).path});else{const E=Ue({},S.params);for(const I in E)E[I]==null&&delete E[I];j=Ue({},S,{params:g(E)}),A.params=g(A.params)}const Y=e.resolve(j,A),Ae=S.hash||"";Y.params=f(m(Y.params));const y=NO(s,Ue({},S,{hash:mD(Ae),path:Y.path})),v=i.createHref(y);return Ue({fullPath:y,hash:Ae,query:s===wm?bD(S.query):S.query||{}},Y,{redirectedFrom:void 0,href:v})}function $(S){return typeof S=="string"?iu(n,S,l.value.path):Ue({},S)}function Z(S,A){if(u!==S)return tr(8,{from:A,to:S})}function K(S){return Je(S)}function be(S){return K(Ue($(S),{replace:!0}))}function He(S){const A=S.matched[S.matched.length-1];if(A&&A.redirect){const{redirect:j}=A;let Y=typeof j=="function"?j(S):j;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=$(Y):{path:Y},Y.params={}),Ue({query:S.query,hash:S.hash,params:"path"in Y?{}:S.params},Y)}}function Je(S,A){const j=u=U(S),Y=l.value,Ae=S.state,y=S.force,v=S.replace===!0,E=He(j);if(E)return Je(Ue($(E),{state:typeof E=="object"?Ue({},Ae,E.state):Ae,force:y,replace:v}),A||j);const I=j;I.redirectedFrom=A;let k;return!y&&xO(s,Y,j)&&(k=tr(16,{to:I,from:Y}),Kt(Y,Y,!0,!1)),(k?Promise.resolve(k):Ke(I,Y)).catch(x=>qn(x)?qn(x,2)?x:R(x):Oe(x,I,Y)).then(x=>{if(x){if(qn(x,2))return Je(Ue({replace:v},$(x.to),{state:typeof x.to=="object"?Ue({},Ae,x.to.state):Ae,force:y}),A||I)}else x=St(I,Y,!0,v,Ae);return dt(I,Y,x),x})}function ve(S,A){const j=Z(S,A);return j?Promise.reject(j):Promise.resolve()}function de(S){const A=kt.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(S):S()}function Ke(S,A){let j;const[Y,Ae,y]=OD(S,A);j=ru(Y.reverse(),"beforeRouteLeave",S,A);for(const E of Y)E.leaveGuards.forEach(I=>{j.push(fs(I,S,A))});const v=ve.bind(null,S,A);return j.push(v),Ve(j).then(()=>{j=[];for(const E of r.list())j.push(fs(E,S,A));return j.push(v),Ve(j)}).then(()=>{j=ru(Ae,"beforeRouteUpdate",S,A);for(const E of Ae)E.updateGuards.forEach(I=>{j.push(fs(I,S,A))});return j.push(v),Ve(j)}).then(()=>{j=[];for(const E of S.matched)if(E.beforeEnter&&!A.matched.includes(E))if(bn(E.beforeEnter))for(const I of E.beforeEnter)j.push(fs(I,S,A));else j.push(fs(E.beforeEnter,S,A));return j.push(v),Ve(j)}).then(()=>(S.matched.forEach(E=>E.enterCallbacks={}),j=ru(y,"beforeRouteEnter",S,A),j.push(v),Ve(j))).then(()=>{j=[];for(const E of o.list())j.push(fs(E,S,A));return j.push(v),Ve(j)}).catch(E=>qn(E,8)?E:Promise.reject(E))}function dt(S,A,j){for(const Y of c.list())de(()=>Y(S,A,j))}function St(S,A,j,Y,Ae){const y=Z(S,A);if(y)return y;const v=A===ls,E=Si?history.state:{};j&&(Y||v?i.replace(S.fullPath,Ue({scroll:v&&E&&E.scroll},Ae)):i.push(S.fullPath,Ae)),l.value=S,Kt(S,A,j,v),R()}let $t;function En(){$t||($t=i.listen((S,A,j)=>{if(!In.listening)return;const Y=U(S),Ae=He(Y);if(Ae){Je(Ue(Ae,{replace:!0}),Y).catch(Hr);return}u=Y;const y=l.value;Si&&jO(fm(y.fullPath,j.delta),il()),Ke(Y,y).catch(v=>qn(v,12)?v:qn(v,2)?(Je(v.to,Y).then(E=>{qn(E,20)&&!j.delta&&j.type===mo.pop&&i.go(-1,!1)}).catch(Hr),Promise.reject()):(j.delta&&i.go(-j.delta,!1),Oe(v,Y,y))).then(v=>{v=v||St(Y,y,!1),v&&(j.delta&&!qn(v,8)?i.go(-j.delta,!1):j.type===mo.pop&&qn(v,20)&&i.go(-1,!1)),dt(Y,y,v)}).catch(Hr)}))}let Vt=Ir(),Ie=Ir(),Ne;function Oe(S,A,j){R(S);const Y=Ie.list();return Y.length?Y.forEach(Ae=>Ae(S,A,j)):console.error(S),Promise.reject(S)}function sn(){return Ne&&l.value!==ls?Promise.resolve():new Promise((S,A)=>{Vt.add([S,A])})}function R(S){return Ne||(Ne=!S,En(),Vt.list().forEach(([A,j])=>S?j(S):A()),Vt.reset()),S}function Kt(S,A,j,Y){const{scrollBehavior:Ae}=t;if(!Si||!Ae)return Promise.resolve();const y=!j&&BO(fm(S.fullPath,0))||(Y||!j)&&history.state&&history.state.scroll||null;return Eh().then(()=>Ae(S,A,y)).then(v=>v&&VO(v)).catch(v=>Oe(v,S,A))}const Et=S=>i.go(S);let Tn;const kt=new Set,In={currentRoute:l,listening:!0,addRoute:_,removeRoute:C,hasRoute:N,getRoutes:D,resolve:U,options:t,push:K,replace:be,go:Et,back:()=>Et(-1),forward:()=>Et(1),beforeEach:r.add,beforeResolve:o.add,afterEach:c.add,onError:Ie.add,isReady:sn,install(S){const A=this;S.component("RouterLink",rh),S.component("RouterView",kD),S.config.globalProperties.$router=A,Object.defineProperty(S.config.globalProperties,"$route",{enumerable:!0,get:()=>ws(l)}),Si&&!Tn&&l.value===ls&&(Tn=!0,K(i.location).catch(Ae=>{}));const j={};for(const Ae in ls)j[Ae]=Zt(()=>l.value[Ae]);S.provide(rl,A),S.provide(Gw,rr(j)),S.provide(ih,l);const Y=S.unmount;kt.add(S),S.unmount=function(){kt.delete(S),kt.size<1&&(u=ls,$t&&$t(),$t=null,l.value=ls,Tn=!1,Ne=!1),Y()}}};function Ve(S){return S.reduce((A,j)=>A.then(()=>de(j)),Promise.resolve())}return In}function OD(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const c=e.matched[o];c&&(t.matched.find(u=>er(u,c))?s.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>er(u,l))||i.push(l))}return[n,s,i]}function DD(){return vn(rl)}async function ND(t,e){await lR(dr,t,e).then(n=>{const s=n.user;console.log(n,s)}).catch(n=>{const s=n.code,i=n.message;console.log(s,i)})}const oN=(t,e)=>{fR(dr,Mf).then(async()=>{await ND(t,e)})},xD=async()=>{gR(dr)},aN=async t=>{await hR(dr.currentUser,{displayName:t})},PD=async()=>{const t=await v1(z_(sl,"notes"));let e=[];return t.forEach(n=>{let s={firebaseID:n.id,...n.data()};e.push(s)}),e},cN=async t=>(await _1(z_(sl,"notes"),t)).id,lN=async(t,e)=>{const n=Tf(sl,"notes",t);await nw(n,{status:e})},uN=async(t,e)=>{const n=Tf(sl,"notes",t);nw(n,e)},LD=DT("note store",{state:()=>({cardLists:[],listType:"doing"}),getters:{getCardLists:t=>t.cardLists.filter(e=>t.listType==="all"?e:e.data.status===t.listType)},actions:{async getNotesHandler(){(await PD()).forEach(e=>{this.cardLists.push({firebaseID:e.firebaseID,data:{id:e.id,title:e.title,message:e.message,status:e.status,createDate:e.createDate}})}),this.sortList()},sortList(){this.cardLists.sort((t,e)=>e.data.id-t.data.id)},addNote(t){this.cardLists.push(t),this.sortList()},getNote(t){return this.cardLists.find(e=>e.firebaseID===t)},changeListType(t){this.listType=t},findNoteIndex(t){return this.cardLists.findIndex(e=>e.firebaseID===t)},updateNote(t,e){this.cardLists[t]=e},updateStatus(t,e){this.cardLists[t].data.status=e}}}),MD={__name:"App",setup(t){const e=LD(),n=DD();return Sw(dr,s=>{s?e.getNotesHandler():n.replace("/login")}),(s,i)=>{const r=uy("RouterView");return vc(),by(r)}}},FD="modulepreload",UD=function(t,e){return new URL(t,e).href},Am={},ou=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=UD(r,s),r in Am)return;Am[r]=!0;const o=r.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!s)for(let f=i.length-1;f>=0;f--){const g=i[f];if(g.href===r&&(!o||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${c}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":FD,o||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),o)return new Promise((f,g)=>{u.addEventListener("load",f),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};const Qw=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},$D={class:"sticky-top navbar navbar-dark bg-dark header"},VD={class:"container-fluid"},jD={class:"navbar-ul ms-auto mb-2 mb-lg-0"},BD={class:"nav-item"},HD={class:"nav-item"},qD=["onClick"],zD={__name:"HeaderComponent",setup(t){function e(){xD()}return(n,s)=>(vc(),wy("nav",$D,[Ks("div",VD,[Ct(ws(rh),{class:"navbar-brand",to:"/"},{default:du(()=>[wu("StickyNote")]),_:1}),Ks("ul",jD,[Ks("li",BD,[Ct(ws(rh),{class:"nav-link",to:"/userInfo"},{default:du(()=>[wu("使用者")]),_:1})]),Ks("li",HD,[Ks("a",{class:"nav-link",href:"#",onClick:_T(e,["prevent"])},"登出",8,qD)])])])]))}},KD=Qw(zD,[["__scopeId","data-v-8749a8c2"]]);const WD={id:"HomeView"},GD={__name:"HomeView",setup(t){return(e,n)=>{const s=uy("RouterView");return vc(),wy("div",WD,[Ct(KD),Ct(s)])}}},QD=Qw(GD,[["__scopeId","data-v-dc289642"]]),Yw=RD({history:KO("./"),routes:[{path:"/",name:"home",component:QD,children:[{path:"",name:"Index",component:()=>ou(()=>import("./IndexPage-763414bf.js"),["./IndexPage-763414bf.js","./IndexPage-d89febb3.css"],import.meta.url)},{path:"userinfo",name:"UserInfo",component:()=>ou(()=>import("./UserInfo-1b73ec0f.js"),["./UserInfo-1b73ec0f.js","./UserInfo-1b2787b7.css"],import.meta.url)}]},{path:"/login",name:"Login",component:()=>ou(()=>import("./LoginPage-1f748aa7.js"),["./LoginPage-1f748aa7.js","./LoginPage-4177b03b.css"],import.meta.url),beforeEnter:()=>{Sw(dr,t=>{t&&Yw.replace("/")})}},{path:"/:pathMatch(.*)*",redirect:"/"}]});var YD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},XD={exports:{}};/*!
  * Bootstrap v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,e){(function(n,s){t.exports=s()})(YD,function(){const n=new Map,s={set(d,a,h){n.has(d)||n.set(d,new Map);const p=n.get(d);p.has(a)||p.size===0?p.set(a,h):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(p.keys())[0]}.`)},get:(d,a)=>n.has(d)&&n.get(d).get(a)||null,remove(d,a){if(!n.has(d))return;const h=n.get(d);h.delete(a),h.size===0&&n.delete(d)}},i="transitionend",r=d=>(d&&window.CSS&&window.CSS.escape&&(d=d.replace(/#([^\s"#']+)/g,(a,h)=>`#${CSS.escape(h)}`)),d),o=d=>{d.dispatchEvent(new Event(i))},c=d=>!(!d||typeof d!="object")&&(d.jquery!==void 0&&(d=d[0]),d.nodeType!==void 0),l=d=>c(d)?d.jquery?d[0]:d:typeof d=="string"&&d.length>0?document.querySelector(r(d)):null,u=d=>{if(!c(d)||d.getClientRects().length===0)return!1;const a=getComputedStyle(d).getPropertyValue("visibility")==="visible",h=d.closest("details:not([open])");if(!h)return a;if(h!==d){const p=d.closest("summary");if(p&&p.parentNode!==h||p===null)return!1}return a},f=d=>!d||d.nodeType!==Node.ELEMENT_NODE||!!d.classList.contains("disabled")||(d.disabled!==void 0?d.disabled:d.hasAttribute("disabled")&&d.getAttribute("disabled")!=="false"),g=d=>{if(!document.documentElement.attachShadow)return null;if(typeof d.getRootNode=="function"){const a=d.getRootNode();return a instanceof ShadowRoot?a:null}return d instanceof ShadowRoot?d:d.parentNode?g(d.parentNode):null},m=()=>{},_=d=>{d.offsetHeight},C=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,D=[],N=()=>document.documentElement.dir==="rtl",U=d=>{var a;a=()=>{const h=C();if(h){const p=d.NAME,w=h.fn[p];h.fn[p]=d.jQueryInterface,h.fn[p].Constructor=d,h.fn[p].noConflict=()=>(h.fn[p]=w,d.jQueryInterface)}},document.readyState==="loading"?(D.length||document.addEventListener("DOMContentLoaded",()=>{for(const h of D)h()}),D.push(a)):a()},$=(d,a=[],h=d)=>typeof d=="function"?d(...a):h,Z=(d,a,h=!0)=>{if(!h)return void $(d);const p=(T=>{if(!T)return 0;let{transitionDuration:O,transitionDelay:V}=window.getComputedStyle(T);const W=Number.parseFloat(O),G=Number.parseFloat(V);return W||G?(O=O.split(",")[0],V=V.split(",")[0],1e3*(Number.parseFloat(O)+Number.parseFloat(V))):0})(a)+5;let w=!1;const b=({target:T})=>{T===a&&(w=!0,a.removeEventListener(i,b),$(d))};a.addEventListener(i,b),setTimeout(()=>{w||o(a)},p)},K=(d,a,h,p)=>{const w=d.length;let b=d.indexOf(a);return b===-1?!h&&p?d[w-1]:d[0]:(b+=h?1:-1,p&&(b=(b+w)%w),d[Math.max(0,Math.min(b,w-1))])},be=/[^.]*(?=\..*)\.|.*/,He=/\..*/,Je=/::\d+$/,ve={};let de=1;const Ke={mouseenter:"mouseover",mouseleave:"mouseout"},dt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function St(d,a){return a&&`${a}::${de++}`||d.uidEvent||de++}function $t(d){const a=St(d);return d.uidEvent=a,ve[a]=ve[a]||{},ve[a]}function En(d,a,h=null){return Object.values(d).find(p=>p.callable===a&&p.delegationSelector===h)}function Vt(d,a,h){const p=typeof a=="string",w=p?h:a||h;let b=sn(d);return dt.has(b)||(b=d),[p,w,b]}function Ie(d,a,h,p,w){if(typeof a!="string"||!d)return;let[b,T,O]=Vt(a,h,p);a in Ke&&(T=(ue=>function(oe){if(!oe.relatedTarget||oe.relatedTarget!==oe.delegateTarget&&!oe.delegateTarget.contains(oe.relatedTarget))return ue.call(this,oe)})(T));const V=$t(d),W=V[O]||(V[O]={}),G=En(W,T,b?h:null);if(G)return void(G.oneOff=G.oneOff&&w);const z=St(T,a.replace(be,"")),me=b?function(se,ue,oe){return function he(je){const We=se.querySelectorAll(ue);for(let{target:we}=je;we&&we!==this;we=we.parentNode)for(const xe of We)if(xe===we)return Kt(je,{delegateTarget:we}),he.oneOff&&R.off(se,je.type,ue,oe),oe.apply(we,[je])}}(d,h,T):function(se,ue){return function oe(he){return Kt(he,{delegateTarget:se}),oe.oneOff&&R.off(se,he.type,ue),ue.apply(se,[he])}}(d,T);me.delegationSelector=b?h:null,me.callable=T,me.oneOff=w,me.uidEvent=z,W[z]=me,d.addEventListener(O,me,b)}function Ne(d,a,h,p,w){const b=En(a[h],p,w);b&&(d.removeEventListener(h,b,!!w),delete a[h][b.uidEvent])}function Oe(d,a,h,p){const w=a[h]||{};for(const[b,T]of Object.entries(w))b.includes(p)&&Ne(d,a,h,T.callable,T.delegationSelector)}function sn(d){return d=d.replace(He,""),Ke[d]||d}const R={on(d,a,h,p){Ie(d,a,h,p,!1)},one(d,a,h,p){Ie(d,a,h,p,!0)},off(d,a,h,p){if(typeof a!="string"||!d)return;const[w,b,T]=Vt(a,h,p),O=T!==a,V=$t(d),W=V[T]||{},G=a.startsWith(".");if(b===void 0){if(G)for(const z of Object.keys(V))Oe(d,V,z,a.slice(1));for(const[z,me]of Object.entries(W)){const se=z.replace(Je,"");O&&!a.includes(se)||Ne(d,V,T,me.callable,me.delegationSelector)}}else{if(!Object.keys(W).length)return;Ne(d,V,T,b,w?h:null)}},trigger(d,a,h){if(typeof a!="string"||!d)return null;const p=C();let w=null,b=!0,T=!0,O=!1;a!==sn(a)&&p&&(w=p.Event(a,h),p(d).trigger(w),b=!w.isPropagationStopped(),T=!w.isImmediatePropagationStopped(),O=w.isDefaultPrevented());const V=Kt(new Event(a,{bubbles:b,cancelable:!0}),h);return O&&V.preventDefault(),T&&d.dispatchEvent(V),V.defaultPrevented&&w&&w.preventDefault(),V}};function Kt(d,a={}){for(const[h,p]of Object.entries(a))try{d[h]=p}catch{Object.defineProperty(d,h,{configurable:!0,get:()=>p})}return d}function Et(d){if(d==="true")return!0;if(d==="false")return!1;if(d===Number(d).toString())return Number(d);if(d===""||d==="null")return null;if(typeof d!="string")return d;try{return JSON.parse(decodeURIComponent(d))}catch{return d}}function Tn(d){return d.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`)}const kt={setDataAttribute(d,a,h){d.setAttribute(`data-bs-${Tn(a)}`,h)},removeDataAttribute(d,a){d.removeAttribute(`data-bs-${Tn(a)}`)},getDataAttributes(d){if(!d)return{};const a={},h=Object.keys(d.dataset).filter(p=>p.startsWith("bs")&&!p.startsWith("bsConfig"));for(const p of h){let w=p.replace(/^bs/,"");w=w.charAt(0).toLowerCase()+w.slice(1,w.length),a[w]=Et(d.dataset[p])}return a},getDataAttribute:(d,a)=>Et(d.getAttribute(`data-bs-${Tn(a)}`))};class In{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(a){return a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a}_mergeConfigObj(a,h){const p=c(h)?kt.getDataAttribute(h,"config"):{};return{...this.constructor.Default,...typeof p=="object"?p:{},...c(h)?kt.getDataAttributes(h):{},...typeof a=="object"?a:{}}}_typeCheckConfig(a,h=this.constructor.DefaultType){for(const[w,b]of Object.entries(h)){const T=a[w],O=c(T)?"element":(p=T)==null?`${p}`:Object.prototype.toString.call(p).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(b).test(O))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${w}" provided type "${O}" but expected type "${b}".`)}var p}}class Ve extends In{constructor(a,h){super(),(a=l(a))&&(this._element=a,this._config=this._getConfig(h),s.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.remove(this._element,this.constructor.DATA_KEY),R.off(this._element,this.constructor.EVENT_KEY);for(const a of Object.getOwnPropertyNames(this))this[a]=null}_queueCallback(a,h,p=!0){Z(a,h,p)}_getConfig(a){return a=this._mergeConfigObj(a,this._element),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}static getInstance(a){return s.get(l(a),this.DATA_KEY)}static getOrCreateInstance(a,h={}){return this.getInstance(a)||new this(a,typeof h=="object"?h:null)}static get VERSION(){return"5.3.0"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(a){return`${a}${this.EVENT_KEY}`}}const S=d=>{let a=d.getAttribute("data-bs-target");if(!a||a==="#"){let h=d.getAttribute("href");if(!h||!h.includes("#")&&!h.startsWith("."))return null;h.includes("#")&&!h.startsWith("#")&&(h=`#${h.split("#")[1]}`),a=h&&h!=="#"?h.trim():null}return r(a)},A={find:(d,a=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(a,d)),findOne:(d,a=document.documentElement)=>Element.prototype.querySelector.call(a,d),children:(d,a)=>[].concat(...d.children).filter(h=>h.matches(a)),parents(d,a){const h=[];let p=d.parentNode.closest(a);for(;p;)h.push(p),p=p.parentNode.closest(a);return h},prev(d,a){let h=d.previousElementSibling;for(;h;){if(h.matches(a))return[h];h=h.previousElementSibling}return[]},next(d,a){let h=d.nextElementSibling;for(;h;){if(h.matches(a))return[h];h=h.nextElementSibling}return[]},focusableChildren(d){const a=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(h=>`${h}:not([tabindex^="-"])`).join(",");return this.find(a,d).filter(h=>!f(h)&&u(h))},getSelectorFromElement(d){const a=S(d);return a&&A.findOne(a)?a:null},getElementFromSelector(d){const a=S(d);return a?A.findOne(a):null},getMultipleElementsFromSelector(d){const a=S(d);return a?A.find(a):[]}},j=(d,a="hide")=>{const h=`click.dismiss${d.EVENT_KEY}`,p=d.NAME;R.on(document,h,`[data-bs-dismiss="${p}"]`,function(w){if(["A","AREA"].includes(this.tagName)&&w.preventDefault(),f(this))return;const b=A.getElementFromSelector(this)||this.closest(`.${p}`);d.getOrCreateInstance(b)[a]()})};class Y extends Ve{static get NAME(){return"alert"}close(){if(R.trigger(this._element,"close.bs.alert").defaultPrevented)return;this._element.classList.remove("show");const a=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,a)}_destroyElement(){this._element.remove(),R.trigger(this._element,"closed.bs.alert"),this.dispose()}static jQueryInterface(a){return this.each(function(){const h=Y.getOrCreateInstance(this);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a](this)}})}}j(Y,"close"),U(Y);const Ae='[data-bs-toggle="button"]';class y extends Ve{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(a){return this.each(function(){const h=y.getOrCreateInstance(this);a==="toggle"&&h[a]()})}}R.on(document,"click.bs.button.data-api",Ae,d=>{d.preventDefault();const a=d.target.closest(Ae);y.getOrCreateInstance(a).toggle()}),U(y);const v={endCallback:null,leftCallback:null,rightCallback:null},E={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class I extends In{constructor(a,h){super(),this._element=a,a&&I.isSupported()&&(this._config=this._getConfig(h),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return v}static get DefaultType(){return E}static get NAME(){return"swipe"}dispose(){R.off(this._element,".bs.swipe")}_start(a){this._supportPointerEvents?this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX):this._deltaX=a.touches[0].clientX}_end(a){this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX-this._deltaX),this._handleSwipe(),$(this._config.endCallback)}_move(a){this._deltaX=a.touches&&a.touches.length>1?0:a.touches[0].clientX-this._deltaX}_handleSwipe(){const a=Math.abs(this._deltaX);if(a<=40)return;const h=a/this._deltaX;this._deltaX=0,h&&$(h>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(R.on(this._element,"pointerdown.bs.swipe",a=>this._start(a)),R.on(this._element,"pointerup.bs.swipe",a=>this._end(a)),this._element.classList.add("pointer-event")):(R.on(this._element,"touchstart.bs.swipe",a=>this._start(a)),R.on(this._element,"touchmove.bs.swipe",a=>this._move(a)),R.on(this._element,"touchend.bs.swipe",a=>this._end(a)))}_eventIsPointerPenTouch(a){return this._supportPointerEvents&&(a.pointerType==="pen"||a.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const k="next",x="prev",H="left",F="right",B="slid.bs.carousel",P="carousel",J="active",Q={ArrowLeft:F,ArrowRight:H},ee={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},re={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class pe extends Ve{constructor(a,h){super(a,h),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=A.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===P&&this.cycle()}static get Default(){return ee}static get DefaultType(){return re}static get NAME(){return"carousel"}next(){this._slide(k)}nextWhenVisible(){!document.hidden&&u(this._element)&&this.next()}prev(){this._slide(x)}pause(){this._isSliding&&o(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?R.one(this._element,B,()=>this.cycle()):this.cycle())}to(a){const h=this._getItems();if(a>h.length-1||a<0)return;if(this._isSliding)return void R.one(this._element,B,()=>this.to(a));const p=this._getItemIndex(this._getActive());if(p===a)return;const w=a>p?k:x;this._slide(w,h[a])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(a){return a.defaultInterval=a.interval,a}_addEventListeners(){this._config.keyboard&&R.on(this._element,"keydown.bs.carousel",a=>this._keydown(a)),this._config.pause==="hover"&&(R.on(this._element,"mouseenter.bs.carousel",()=>this.pause()),R.on(this._element,"mouseleave.bs.carousel",()=>this._maybeEnableCycle())),this._config.touch&&I.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const h of A.find(".carousel-item img",this._element))R.on(h,"dragstart.bs.carousel",p=>p.preventDefault());const a={leftCallback:()=>this._slide(this._directionToOrder(H)),rightCallback:()=>this._slide(this._directionToOrder(F)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new I(this._element,a)}_keydown(a){if(/input|textarea/i.test(a.target.tagName))return;const h=Q[a.key];h&&(a.preventDefault(),this._slide(this._directionToOrder(h)))}_getItemIndex(a){return this._getItems().indexOf(a)}_setActiveIndicatorElement(a){if(!this._indicatorsElement)return;const h=A.findOne(".active",this._indicatorsElement);h.classList.remove(J),h.removeAttribute("aria-current");const p=A.findOne(`[data-bs-slide-to="${a}"]`,this._indicatorsElement);p&&(p.classList.add(J),p.setAttribute("aria-current","true"))}_updateInterval(){const a=this._activeElement||this._getActive();if(!a)return;const h=Number.parseInt(a.getAttribute("data-bs-interval"),10);this._config.interval=h||this._config.defaultInterval}_slide(a,h=null){if(this._isSliding)return;const p=this._getActive(),w=a===k,b=h||K(this._getItems(),p,w,this._config.wrap);if(b===p)return;const T=this._getItemIndex(b),O=z=>R.trigger(this._element,z,{relatedTarget:b,direction:this._orderToDirection(a),from:this._getItemIndex(p),to:T});if(O("slide.bs.carousel").defaultPrevented||!p||!b)return;const V=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(T),this._activeElement=b;const W=w?"carousel-item-start":"carousel-item-end",G=w?"carousel-item-next":"carousel-item-prev";b.classList.add(G),_(b),p.classList.add(W),b.classList.add(W),this._queueCallback(()=>{b.classList.remove(W,G),b.classList.add(J),p.classList.remove(J,G,W),this._isSliding=!1,O(B)},p,this._isAnimated()),V&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return A.findOne(".active.carousel-item",this._element)}_getItems(){return A.find(".carousel-item",this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(a){return N()?a===H?x:k:a===H?k:x}_orderToDirection(a){return N()?a===x?H:F:a===x?F:H}static jQueryInterface(a){return this.each(function(){const h=pe.getOrCreateInstance(this,a);if(typeof a!="number"){if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a]()}}else h.to(a)})}}R.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",function(d){const a=A.getElementFromSelector(this);if(!a||!a.classList.contains(P))return;d.preventDefault();const h=pe.getOrCreateInstance(a),p=this.getAttribute("data-bs-slide-to");return p?(h.to(p),void h._maybeEnableCycle()):kt.getDataAttribute(this,"slide")==="next"?(h.next(),void h._maybeEnableCycle()):(h.prev(),void h._maybeEnableCycle())}),R.on(window,"load.bs.carousel.data-api",()=>{const d=A.find('[data-bs-ride="carousel"]');for(const a of d)pe.getOrCreateInstance(a)}),U(pe);const Le="show",Se="collapse",Ge="collapsing",jt='[data-bs-toggle="collapse"]',is={parent:null,toggle:!0},$o={parent:"(null|element)",toggle:"boolean"};class rn extends Ve{constructor(a,h){super(a,h),this._isTransitioning=!1,this._triggerArray=[];const p=A.find(jt);for(const w of p){const b=A.getSelectorFromElement(w),T=A.find(b).filter(O=>O===this._element);b!==null&&T.length&&this._triggerArray.push(w)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return is}static get DefaultType(){return $o}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let a=[];if(this._config.parent&&(a=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(w=>w!==this._element).map(w=>rn.getOrCreateInstance(w,{toggle:!1}))),a.length&&a[0]._isTransitioning||R.trigger(this._element,"show.bs.collapse").defaultPrevented)return;for(const w of a)w.hide();const h=this._getDimension();this._element.classList.remove(Se),this._element.classList.add(Ge),this._element.style[h]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const p=`scroll${h[0].toUpperCase()+h.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Ge),this._element.classList.add(Se,Le),this._element.style[h]="",R.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[h]=`${this._element[p]}px`}hide(){if(this._isTransitioning||!this._isShown()||R.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const a=this._getDimension();this._element.style[a]=`${this._element.getBoundingClientRect()[a]}px`,_(this._element),this._element.classList.add(Ge),this._element.classList.remove(Se,Le);for(const h of this._triggerArray){const p=A.getElementFromSelector(h);p&&!this._isShown(p)&&this._addAriaAndCollapsedClass([h],!1)}this._isTransitioning=!0,this._element.style[a]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(Ge),this._element.classList.add(Se),R.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}_isShown(a=this._element){return a.classList.contains(Le)}_configAfterMerge(a){return a.toggle=!!a.toggle,a.parent=l(a.parent),a}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const a=this._getFirstLevelChildren(jt);for(const h of a){const p=A.getElementFromSelector(h);p&&this._addAriaAndCollapsedClass([h],this._isShown(p))}}_getFirstLevelChildren(a){const h=A.find(":scope .collapse .collapse",this._config.parent);return A.find(a,this._config.parent).filter(p=>!h.includes(p))}_addAriaAndCollapsedClass(a,h){if(a.length)for(const p of a)p.classList.toggle("collapsed",!h),p.setAttribute("aria-expanded",h)}static jQueryInterface(a){const h={};return typeof a=="string"&&/show|hide/.test(a)&&(h.toggle=!1),this.each(function(){const p=rn.getOrCreateInstance(this,h);if(typeof a=="string"){if(p[a]===void 0)throw new TypeError(`No method named "${a}"`);p[a]()}})}}R.on(document,"click.bs.collapse.data-api",jt,function(d){(d.target.tagName==="A"||d.delegateTarget&&d.delegateTarget.tagName==="A")&&d.preventDefault();for(const a of A.getMultipleElementsFromSelector(this))rn.getOrCreateInstance(a,{toggle:!1}).toggle()}),U(rn);var pt="top",qe="bottom",Ze="right",gt="left",Vo="auto",di=[pt,qe,Ze,gt],Ps="start",pi="end",Vf="clippingParents",al="viewport",gi="popper",jf="reference",cl=di.reduce(function(d,a){return d.concat([a+"-"+Ps,a+"-"+pi])},[]),ll=[].concat(di,[Vo]).reduce(function(d,a){return d.concat([a,a+"-"+Ps,a+"-"+pi])},[]),Bf="beforeRead",Hf="read",qf="afterRead",zf="beforeMain",Kf="main",Wf="afterMain",Gf="beforeWrite",Qf="write",Yf="afterWrite",Xf=[Bf,Hf,qf,zf,Kf,Wf,Gf,Qf,Yf];function Cn(d){return d?(d.nodeName||"").toLowerCase():null}function Yt(d){if(d==null)return window;if(d.toString()!=="[object Window]"){var a=d.ownerDocument;return a&&a.defaultView||window}return d}function Ls(d){return d instanceof Yt(d).Element||d instanceof Element}function on(d){return d instanceof Yt(d).HTMLElement||d instanceof HTMLElement}function ul(d){return typeof ShadowRoot<"u"&&(d instanceof Yt(d).ShadowRoot||d instanceof ShadowRoot)}const hl={name:"applyStyles",enabled:!0,phase:"write",fn:function(d){var a=d.state;Object.keys(a.elements).forEach(function(h){var p=a.styles[h]||{},w=a.attributes[h]||{},b=a.elements[h];on(b)&&Cn(b)&&(Object.assign(b.style,p),Object.keys(w).forEach(function(T){var O=w[T];O===!1?b.removeAttribute(T):b.setAttribute(T,O===!0?"":O)}))})},effect:function(d){var a=d.state,h={popper:{position:a.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(a.elements.popper.style,h.popper),a.styles=h,a.elements.arrow&&Object.assign(a.elements.arrow.style,h.arrow),function(){Object.keys(a.elements).forEach(function(p){var w=a.elements[p],b=a.attributes[p]||{},T=Object.keys(a.styles.hasOwnProperty(p)?a.styles[p]:h[p]).reduce(function(O,V){return O[V]="",O},{});on(w)&&Cn(w)&&(Object.assign(w.style,T),Object.keys(b).forEach(function(O){w.removeAttribute(O)}))})}},requires:["computeStyles"]};function An(d){return d.split("-")[0]}var Ms=Math.max,jo=Math.min,mi=Math.round;function fl(){var d=navigator.userAgentData;return d!=null&&d.brands&&Array.isArray(d.brands)?d.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function Jf(){return!/^((?!chrome|android).)*safari/i.test(fl())}function yi(d,a,h){a===void 0&&(a=!1),h===void 0&&(h=!1);var p=d.getBoundingClientRect(),w=1,b=1;a&&on(d)&&(w=d.offsetWidth>0&&mi(p.width)/d.offsetWidth||1,b=d.offsetHeight>0&&mi(p.height)/d.offsetHeight||1);var T=(Ls(d)?Yt(d):window).visualViewport,O=!Jf()&&h,V=(p.left+(O&&T?T.offsetLeft:0))/w,W=(p.top+(O&&T?T.offsetTop:0))/b,G=p.width/w,z=p.height/b;return{width:G,height:z,top:W,right:V+G,bottom:W+z,left:V,x:V,y:W}}function dl(d){var a=yi(d),h=d.offsetWidth,p=d.offsetHeight;return Math.abs(a.width-h)<=1&&(h=a.width),Math.abs(a.height-p)<=1&&(p=a.height),{x:d.offsetLeft,y:d.offsetTop,width:h,height:p}}function Zf(d,a){var h=a.getRootNode&&a.getRootNode();if(d.contains(a))return!0;if(h&&ul(h)){var p=a;do{if(p&&d.isSameNode(p))return!0;p=p.parentNode||p.host}while(p)}return!1}function Bn(d){return Yt(d).getComputedStyle(d)}function Xw(d){return["table","td","th"].indexOf(Cn(d))>=0}function rs(d){return((Ls(d)?d.ownerDocument:d.document)||window.document).documentElement}function Bo(d){return Cn(d)==="html"?d:d.assignedSlot||d.parentNode||(ul(d)?d.host:null)||rs(d)}function ed(d){return on(d)&&Bn(d).position!=="fixed"?d.offsetParent:null}function pr(d){for(var a=Yt(d),h=ed(d);h&&Xw(h)&&Bn(h).position==="static";)h=ed(h);return h&&(Cn(h)==="html"||Cn(h)==="body"&&Bn(h).position==="static")?a:h||function(p){var w=/firefox/i.test(fl());if(/Trident/i.test(fl())&&on(p)&&Bn(p).position==="fixed")return null;var b=Bo(p);for(ul(b)&&(b=b.host);on(b)&&["html","body"].indexOf(Cn(b))<0;){var T=Bn(b);if(T.transform!=="none"||T.perspective!=="none"||T.contain==="paint"||["transform","perspective"].indexOf(T.willChange)!==-1||w&&T.willChange==="filter"||w&&T.filter&&T.filter!=="none")return b;b=b.parentNode}return null}(d)||a}function pl(d){return["top","bottom"].indexOf(d)>=0?"x":"y"}function gr(d,a,h){return Ms(d,jo(a,h))}function td(d){return Object.assign({},{top:0,right:0,bottom:0,left:0},d)}function nd(d,a){return a.reduce(function(h,p){return h[p]=d,h},{})}const sd={name:"arrow",enabled:!0,phase:"main",fn:function(d){var a,h=d.state,p=d.name,w=d.options,b=h.elements.arrow,T=h.modifiersData.popperOffsets,O=An(h.placement),V=pl(O),W=[gt,Ze].indexOf(O)>=0?"height":"width";if(b&&T){var G=function(Be,Fe){return td(typeof(Be=typeof Be=="function"?Be(Object.assign({},Fe.rects,{placement:Fe.placement})):Be)!="number"?Be:nd(Be,di))}(w.padding,h),z=dl(b),me=V==="y"?pt:gt,se=V==="y"?qe:Ze,ue=h.rects.reference[W]+h.rects.reference[V]-T[V]-h.rects.popper[W],oe=T[V]-h.rects.reference[V],he=pr(b),je=he?V==="y"?he.clientHeight||0:he.clientWidth||0:0,We=ue/2-oe/2,we=G[me],xe=je-z[W]-G[se],_e=je/2-z[W]/2+We,Te=gr(we,_e,xe),Me=V;h.modifiersData[p]=((a={})[Me]=Te,a.centerOffset=Te-_e,a)}},effect:function(d){var a=d.state,h=d.options.element,p=h===void 0?"[data-popper-arrow]":h;p!=null&&(typeof p!="string"||(p=a.elements.popper.querySelector(p)))&&Zf(a.elements.popper,p)&&(a.elements.arrow=p)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function vi(d){return d.split("-")[1]}var Jw={top:"auto",right:"auto",bottom:"auto",left:"auto"};function id(d){var a,h=d.popper,p=d.popperRect,w=d.placement,b=d.variation,T=d.offsets,O=d.position,V=d.gpuAcceleration,W=d.adaptive,G=d.roundOffsets,z=d.isFixed,me=T.x,se=me===void 0?0:me,ue=T.y,oe=ue===void 0?0:ue,he=typeof G=="function"?G({x:se,y:oe}):{x:se,y:oe};se=he.x,oe=he.y;var je=T.hasOwnProperty("x"),We=T.hasOwnProperty("y"),we=gt,xe=pt,_e=window;if(W){var Te=pr(h),Me="clientHeight",Be="clientWidth";Te===Yt(h)&&Bn(Te=rs(h)).position!=="static"&&O==="absolute"&&(Me="scrollHeight",Be="scrollWidth"),(w===pt||(w===gt||w===Ze)&&b===pi)&&(xe=qe,oe-=(z&&Te===_e&&_e.visualViewport?_e.visualViewport.height:Te[Me])-p.height,oe*=V?1:-1),w!==gt&&(w!==pt&&w!==qe||b!==pi)||(we=Ze,se-=(z&&Te===_e&&_e.visualViewport?_e.visualViewport.width:Te[Be])-p.width,se*=V?1:-1)}var Fe,rt=Object.assign({position:O},W&&Jw),Xt=G===!0?function(dn,Bt){var an=dn.x,cn=dn.y,st=Bt.devicePixelRatio||1;return{x:mi(an*st)/st||0,y:mi(cn*st)/st||0}}({x:se,y:oe},Yt(h)):{x:se,y:oe};return se=Xt.x,oe=Xt.y,V?Object.assign({},rt,((Fe={})[xe]=We?"0":"",Fe[we]=je?"0":"",Fe.transform=(_e.devicePixelRatio||1)<=1?"translate("+se+"px, "+oe+"px)":"translate3d("+se+"px, "+oe+"px, 0)",Fe)):Object.assign({},rt,((a={})[xe]=We?oe+"px":"",a[we]=je?se+"px":"",a.transform="",a))}const gl={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(d){var a=d.state,h=d.options,p=h.gpuAcceleration,w=p===void 0||p,b=h.adaptive,T=b===void 0||b,O=h.roundOffsets,V=O===void 0||O,W={placement:An(a.placement),variation:vi(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:w,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,id(Object.assign({},W,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:T,roundOffsets:V})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,id(Object.assign({},W,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:V})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})},data:{}};var Ho={passive:!0};const ml={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(d){var a=d.state,h=d.instance,p=d.options,w=p.scroll,b=w===void 0||w,T=p.resize,O=T===void 0||T,V=Yt(a.elements.popper),W=[].concat(a.scrollParents.reference,a.scrollParents.popper);return b&&W.forEach(function(G){G.addEventListener("scroll",h.update,Ho)}),O&&V.addEventListener("resize",h.update,Ho),function(){b&&W.forEach(function(G){G.removeEventListener("scroll",h.update,Ho)}),O&&V.removeEventListener("resize",h.update,Ho)}},data:{}};var Zw={left:"right",right:"left",bottom:"top",top:"bottom"};function qo(d){return d.replace(/left|right|bottom|top/g,function(a){return Zw[a]})}var eb={start:"end",end:"start"};function rd(d){return d.replace(/start|end/g,function(a){return eb[a]})}function yl(d){var a=Yt(d);return{scrollLeft:a.pageXOffset,scrollTop:a.pageYOffset}}function vl(d){return yi(rs(d)).left+yl(d).scrollLeft}function _l(d){var a=Bn(d),h=a.overflow,p=a.overflowX,w=a.overflowY;return/auto|scroll|overlay|hidden/.test(h+w+p)}function od(d){return["html","body","#document"].indexOf(Cn(d))>=0?d.ownerDocument.body:on(d)&&_l(d)?d:od(Bo(d))}function mr(d,a){var h;a===void 0&&(a=[]);var p=od(d),w=p===((h=d.ownerDocument)==null?void 0:h.body),b=Yt(p),T=w?[b].concat(b.visualViewport||[],_l(p)?p:[]):p,O=a.concat(T);return w?O:O.concat(mr(Bo(T)))}function wl(d){return Object.assign({},d,{left:d.x,top:d.y,right:d.x+d.width,bottom:d.y+d.height})}function ad(d,a,h){return a===al?wl(function(p,w){var b=Yt(p),T=rs(p),O=b.visualViewport,V=T.clientWidth,W=T.clientHeight,G=0,z=0;if(O){V=O.width,W=O.height;var me=Jf();(me||!me&&w==="fixed")&&(G=O.offsetLeft,z=O.offsetTop)}return{width:V,height:W,x:G+vl(p),y:z}}(d,h)):Ls(a)?function(p,w){var b=yi(p,!1,w==="fixed");return b.top=b.top+p.clientTop,b.left=b.left+p.clientLeft,b.bottom=b.top+p.clientHeight,b.right=b.left+p.clientWidth,b.width=p.clientWidth,b.height=p.clientHeight,b.x=b.left,b.y=b.top,b}(a,h):wl(function(p){var w,b=rs(p),T=yl(p),O=(w=p.ownerDocument)==null?void 0:w.body,V=Ms(b.scrollWidth,b.clientWidth,O?O.scrollWidth:0,O?O.clientWidth:0),W=Ms(b.scrollHeight,b.clientHeight,O?O.scrollHeight:0,O?O.clientHeight:0),G=-T.scrollLeft+vl(p),z=-T.scrollTop;return Bn(O||b).direction==="rtl"&&(G+=Ms(b.clientWidth,O?O.clientWidth:0)-V),{width:V,height:W,x:G,y:z}}(rs(d)))}function cd(d){var a,h=d.reference,p=d.element,w=d.placement,b=w?An(w):null,T=w?vi(w):null,O=h.x+h.width/2-p.width/2,V=h.y+h.height/2-p.height/2;switch(b){case pt:a={x:O,y:h.y-p.height};break;case qe:a={x:O,y:h.y+h.height};break;case Ze:a={x:h.x+h.width,y:V};break;case gt:a={x:h.x-p.width,y:V};break;default:a={x:h.x,y:h.y}}var W=b?pl(b):null;if(W!=null){var G=W==="y"?"height":"width";switch(T){case Ps:a[W]=a[W]-(h[G]/2-p[G]/2);break;case pi:a[W]=a[W]+(h[G]/2-p[G]/2)}}return a}function _i(d,a){a===void 0&&(a={});var h=a,p=h.placement,w=p===void 0?d.placement:p,b=h.strategy,T=b===void 0?d.strategy:b,O=h.boundary,V=O===void 0?Vf:O,W=h.rootBoundary,G=W===void 0?al:W,z=h.elementContext,me=z===void 0?gi:z,se=h.altBoundary,ue=se!==void 0&&se,oe=h.padding,he=oe===void 0?0:oe,je=td(typeof he!="number"?he:nd(he,di)),We=me===gi?jf:gi,we=d.rects.popper,xe=d.elements[ue?We:me],_e=function(Bt,an,cn,st){var Sn=an==="clippingParents"?function(ze){var Ht=mr(Bo(ze)),ln=["absolute","fixed"].indexOf(Bn(ze).position)>=0&&on(ze)?pr(ze):ze;return Ls(ln)?Ht.filter(function(os){return Ls(os)&&Zf(os,ln)&&Cn(os)!=="body"}):[]}(Bt):[].concat(an),kn=[].concat(Sn,[cn]),wi=kn[0],mt=kn.reduce(function(ze,Ht){var ln=ad(Bt,Ht,st);return ze.top=Ms(ln.top,ze.top),ze.right=jo(ln.right,ze.right),ze.bottom=jo(ln.bottom,ze.bottom),ze.left=Ms(ln.left,ze.left),ze},ad(Bt,wi,st));return mt.width=mt.right-mt.left,mt.height=mt.bottom-mt.top,mt.x=mt.left,mt.y=mt.top,mt}(Ls(xe)?xe:xe.contextElement||rs(d.elements.popper),V,G,T),Te=yi(d.elements.reference),Me=cd({reference:Te,element:we,strategy:"absolute",placement:w}),Be=wl(Object.assign({},we,Me)),Fe=me===gi?Be:Te,rt={top:_e.top-Fe.top+je.top,bottom:Fe.bottom-_e.bottom+je.bottom,left:_e.left-Fe.left+je.left,right:Fe.right-_e.right+je.right},Xt=d.modifiersData.offset;if(me===gi&&Xt){var dn=Xt[w];Object.keys(rt).forEach(function(Bt){var an=[Ze,qe].indexOf(Bt)>=0?1:-1,cn=[pt,qe].indexOf(Bt)>=0?"y":"x";rt[Bt]+=dn[cn]*an})}return rt}function tb(d,a){a===void 0&&(a={});var h=a,p=h.placement,w=h.boundary,b=h.rootBoundary,T=h.padding,O=h.flipVariations,V=h.allowedAutoPlacements,W=V===void 0?ll:V,G=vi(p),z=G?O?cl:cl.filter(function(ue){return vi(ue)===G}):di,me=z.filter(function(ue){return W.indexOf(ue)>=0});me.length===0&&(me=z);var se=me.reduce(function(ue,oe){return ue[oe]=_i(d,{placement:oe,boundary:w,rootBoundary:b,padding:T})[An(oe)],ue},{});return Object.keys(se).sort(function(ue,oe){return se[ue]-se[oe]})}const ld={name:"flip",enabled:!0,phase:"main",fn:function(d){var a=d.state,h=d.options,p=d.name;if(!a.modifiersData[p]._skip){for(var w=h.mainAxis,b=w===void 0||w,T=h.altAxis,O=T===void 0||T,V=h.fallbackPlacements,W=h.padding,G=h.boundary,z=h.rootBoundary,me=h.altBoundary,se=h.flipVariations,ue=se===void 0||se,oe=h.allowedAutoPlacements,he=a.options.placement,je=An(he),We=V||(je!==he&&ue?function(ze){if(An(ze)===Vo)return[];var Ht=qo(ze);return[rd(ze),Ht,rd(Ht)]}(he):[qo(he)]),we=[he].concat(We).reduce(function(ze,Ht){return ze.concat(An(Ht)===Vo?tb(a,{placement:Ht,boundary:G,rootBoundary:z,padding:W,flipVariations:ue,allowedAutoPlacements:oe}):Ht)},[]),xe=a.rects.reference,_e=a.rects.popper,Te=new Map,Me=!0,Be=we[0],Fe=0;Fe<we.length;Fe++){var rt=we[Fe],Xt=An(rt),dn=vi(rt)===Ps,Bt=[pt,qe].indexOf(Xt)>=0,an=Bt?"width":"height",cn=_i(a,{placement:rt,boundary:G,rootBoundary:z,altBoundary:me,padding:W}),st=Bt?dn?Ze:gt:dn?qe:pt;xe[an]>_e[an]&&(st=qo(st));var Sn=qo(st),kn=[];if(b&&kn.push(cn[Xt]<=0),O&&kn.push(cn[st]<=0,cn[Sn]<=0),kn.every(function(ze){return ze})){Be=rt,Me=!1;break}Te.set(rt,kn)}if(Me)for(var wi=function(ze){var Ht=we.find(function(ln){var os=Te.get(ln);if(os)return os.slice(0,ze).every(function(ea){return ea})});if(Ht)return Be=Ht,"break"},mt=ue?3:1;mt>0&&wi(mt)!=="break";mt--);a.placement!==Be&&(a.modifiersData[p]._skip=!0,a.placement=Be,a.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ud(d,a,h){return h===void 0&&(h={x:0,y:0}),{top:d.top-a.height-h.y,right:d.right-a.width+h.x,bottom:d.bottom-a.height+h.y,left:d.left-a.width-h.x}}function hd(d){return[pt,Ze,qe,gt].some(function(a){return d[a]>=0})}const fd={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(d){var a=d.state,h=d.name,p=a.rects.reference,w=a.rects.popper,b=a.modifiersData.preventOverflow,T=_i(a,{elementContext:"reference"}),O=_i(a,{altBoundary:!0}),V=ud(T,p),W=ud(O,w,b),G=hd(V),z=hd(W);a.modifiersData[h]={referenceClippingOffsets:V,popperEscapeOffsets:W,isReferenceHidden:G,hasPopperEscaped:z},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":G,"data-popper-escaped":z})}},dd={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(d){var a=d.state,h=d.options,p=d.name,w=h.offset,b=w===void 0?[0,0]:w,T=ll.reduce(function(G,z){return G[z]=function(me,se,ue){var oe=An(me),he=[gt,pt].indexOf(oe)>=0?-1:1,je=typeof ue=="function"?ue(Object.assign({},se,{placement:me})):ue,We=je[0],we=je[1];return We=We||0,we=(we||0)*he,[gt,Ze].indexOf(oe)>=0?{x:we,y:We}:{x:We,y:we}}(z,a.rects,b),G},{}),O=T[a.placement],V=O.x,W=O.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=V,a.modifiersData.popperOffsets.y+=W),a.modifiersData[p]=T}},bl={name:"popperOffsets",enabled:!0,phase:"read",fn:function(d){var a=d.state,h=d.name;a.modifiersData[h]=cd({reference:a.rects.reference,element:a.rects.popper,strategy:"absolute",placement:a.placement})},data:{}},pd={name:"preventOverflow",enabled:!0,phase:"main",fn:function(d){var a=d.state,h=d.options,p=d.name,w=h.mainAxis,b=w===void 0||w,T=h.altAxis,O=T!==void 0&&T,V=h.boundary,W=h.rootBoundary,G=h.altBoundary,z=h.padding,me=h.tether,se=me===void 0||me,ue=h.tetherOffset,oe=ue===void 0?0:ue,he=_i(a,{boundary:V,rootBoundary:W,padding:z,altBoundary:G}),je=An(a.placement),We=vi(a.placement),we=!We,xe=pl(je),_e=xe==="x"?"y":"x",Te=a.modifiersData.popperOffsets,Me=a.rects.reference,Be=a.rects.popper,Fe=typeof oe=="function"?oe(Object.assign({},a.rects,{placement:a.placement})):oe,rt=typeof Fe=="number"?{mainAxis:Fe,altAxis:Fe}:Object.assign({mainAxis:0,altAxis:0},Fe),Xt=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,dn={x:0,y:0};if(Te){if(b){var Bt,an=xe==="y"?pt:gt,cn=xe==="y"?qe:Ze,st=xe==="y"?"height":"width",Sn=Te[xe],kn=Sn+he[an],wi=Sn-he[cn],mt=se?-Be[st]/2:0,ze=We===Ps?Me[st]:Be[st],Ht=We===Ps?-Be[st]:-Me[st],ln=a.elements.arrow,os=se&&ln?dl(ln):{width:0,height:0},ea=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Zd=ea[an],ep=ea[cn],ta=gr(0,Me[st],os[st]),Hb=we?Me[st]/2-mt-ta-Zd-rt.mainAxis:ze-ta-Zd-rt.mainAxis,qb=we?-Me[st]/2+mt+ta+ep+rt.mainAxis:Ht+ta+ep+rt.mainAxis,kl=a.elements.arrow&&pr(a.elements.arrow),zb=kl?xe==="y"?kl.clientTop||0:kl.clientLeft||0:0,tp=(Bt=Xt==null?void 0:Xt[xe])!=null?Bt:0,Kb=Sn+qb-tp,np=gr(se?jo(kn,Sn+Hb-tp-zb):kn,Sn,se?Ms(wi,Kb):wi);Te[xe]=np,dn[xe]=np-Sn}if(O){var sp,Wb=xe==="x"?pt:gt,Gb=xe==="x"?qe:Ze,js=Te[_e],na=_e==="y"?"height":"width",ip=js+he[Wb],rp=js-he[Gb],Rl=[pt,gt].indexOf(je)!==-1,op=(sp=Xt==null?void 0:Xt[_e])!=null?sp:0,ap=Rl?ip:js-Me[na]-Be[na]-op+rt.altAxis,cp=Rl?js+Me[na]+Be[na]-op-rt.altAxis:rp,lp=se&&Rl?function(Qb,Yb,Ol){var up=gr(Qb,Yb,Ol);return up>Ol?Ol:up}(ap,js,cp):gr(se?ap:ip,js,se?cp:rp);Te[_e]=lp,dn[_e]=lp-js}a.modifiersData[p]=dn}},requiresIfExists:["offset"]};function nb(d,a,h){h===void 0&&(h=!1);var p,w,b=on(a),T=on(a)&&function(z){var me=z.getBoundingClientRect(),se=mi(me.width)/z.offsetWidth||1,ue=mi(me.height)/z.offsetHeight||1;return se!==1||ue!==1}(a),O=rs(a),V=yi(d,T,h),W={scrollLeft:0,scrollTop:0},G={x:0,y:0};return(b||!b&&!h)&&((Cn(a)!=="body"||_l(O))&&(W=(p=a)!==Yt(p)&&on(p)?{scrollLeft:(w=p).scrollLeft,scrollTop:w.scrollTop}:yl(p)),on(a)?((G=yi(a,!0)).x+=a.clientLeft,G.y+=a.clientTop):O&&(G.x=vl(O))),{x:V.left+W.scrollLeft-G.x,y:V.top+W.scrollTop-G.y,width:V.width,height:V.height}}function sb(d){var a=new Map,h=new Set,p=[];function w(b){h.add(b.name),[].concat(b.requires||[],b.requiresIfExists||[]).forEach(function(T){if(!h.has(T)){var O=a.get(T);O&&w(O)}}),p.push(b)}return d.forEach(function(b){a.set(b.name,b)}),d.forEach(function(b){h.has(b.name)||w(b)}),p}var gd={placement:"bottom",modifiers:[],strategy:"absolute"};function md(){for(var d=arguments.length,a=new Array(d),h=0;h<d;h++)a[h]=arguments[h];return!a.some(function(p){return!(p&&typeof p.getBoundingClientRect=="function")})}function zo(d){d===void 0&&(d={});var a=d,h=a.defaultModifiers,p=h===void 0?[]:h,w=a.defaultOptions,b=w===void 0?gd:w;return function(T,O,V){V===void 0&&(V=b);var W,G,z={placement:"bottom",orderedModifiers:[],options:Object.assign({},gd,b),modifiersData:{},elements:{reference:T,popper:O},attributes:{},styles:{}},me=[],se=!1,ue={state:z,setOptions:function(he){var je=typeof he=="function"?he(z.options):he;oe(),z.options=Object.assign({},b,z.options,je),z.scrollParents={reference:Ls(T)?mr(T):T.contextElement?mr(T.contextElement):[],popper:mr(O)};var We,we,xe=function(_e){var Te=sb(_e);return Xf.reduce(function(Me,Be){return Me.concat(Te.filter(function(Fe){return Fe.phase===Be}))},[])}((We=[].concat(p,z.options.modifiers),we=We.reduce(function(_e,Te){var Me=_e[Te.name];return _e[Te.name]=Me?Object.assign({},Me,Te,{options:Object.assign({},Me.options,Te.options),data:Object.assign({},Me.data,Te.data)}):Te,_e},{}),Object.keys(we).map(function(_e){return we[_e]})));return z.orderedModifiers=xe.filter(function(_e){return _e.enabled}),z.orderedModifiers.forEach(function(_e){var Te=_e.name,Me=_e.options,Be=Me===void 0?{}:Me,Fe=_e.effect;if(typeof Fe=="function"){var rt=Fe({state:z,name:Te,instance:ue,options:Be});me.push(rt||function(){})}}),ue.update()},forceUpdate:function(){if(!se){var he=z.elements,je=he.reference,We=he.popper;if(md(je,We)){z.rects={reference:nb(je,pr(We),z.options.strategy==="fixed"),popper:dl(We)},z.reset=!1,z.placement=z.options.placement,z.orderedModifiers.forEach(function(Fe){return z.modifiersData[Fe.name]=Object.assign({},Fe.data)});for(var we=0;we<z.orderedModifiers.length;we++)if(z.reset!==!0){var xe=z.orderedModifiers[we],_e=xe.fn,Te=xe.options,Me=Te===void 0?{}:Te,Be=xe.name;typeof _e=="function"&&(z=_e({state:z,options:Me,name:Be,instance:ue})||z)}else z.reset=!1,we=-1}}},update:(W=function(){return new Promise(function(he){ue.forceUpdate(),he(z)})},function(){return G||(G=new Promise(function(he){Promise.resolve().then(function(){G=void 0,he(W())})})),G}),destroy:function(){oe(),se=!0}};if(!md(T,O))return ue;function oe(){me.forEach(function(he){return he()}),me=[]}return ue.setOptions(V).then(function(he){!se&&V.onFirstUpdate&&V.onFirstUpdate(he)}),ue}}var ib=zo(),rb=zo({defaultModifiers:[ml,bl,gl,hl]}),El=zo({defaultModifiers:[ml,bl,gl,hl,dd,ld,pd,sd,fd]});const yd=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Wf,afterRead:qf,afterWrite:Yf,applyStyles:hl,arrow:sd,auto:Vo,basePlacements:di,beforeMain:zf,beforeRead:Bf,beforeWrite:Gf,bottom:qe,clippingParents:Vf,computeStyles:gl,createPopper:El,createPopperBase:ib,createPopperLite:rb,detectOverflow:_i,end:pi,eventListeners:ml,flip:ld,hide:fd,left:gt,main:Kf,modifierPhases:Xf,offset:dd,placements:ll,popper:gi,popperGenerator:zo,popperOffsets:bl,preventOverflow:pd,read:Hf,reference:jf,right:Ze,start:Ps,top:pt,variationPlacements:cl,viewport:al,write:Qf},Symbol.toStringTag,{value:"Module"})),vd="dropdown",ob="ArrowUp",_d="ArrowDown",wd="click.bs.dropdown.data-api",bd="keydown.bs.dropdown.data-api",yr="show",Fs='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ab=`${Fs}.show`,Ko=".dropdown-menu",cb=N()?"top-end":"top-start",lb=N()?"top-start":"top-end",ub=N()?"bottom-end":"bottom-start",hb=N()?"bottom-start":"bottom-end",fb=N()?"left-start":"right-start",db=N()?"right-start":"left-start",pb={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},gb={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class fn extends Ve{constructor(a,h){super(a,h),this._popper=null,this._parent=this._element.parentNode,this._menu=A.next(this._element,Ko)[0]||A.prev(this._element,Ko)[0]||A.findOne(Ko,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return pb}static get DefaultType(){return gb}static get NAME(){return vd}toggle(){return this._isShown()?this.hide():this.show()}show(){if(f(this._element)||this._isShown())return;const a={relatedTarget:this._element};if(!R.trigger(this._element,"show.bs.dropdown",a).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const h of[].concat(...document.body.children))R.on(h,"mouseover",m);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(yr),this._element.classList.add(yr),R.trigger(this._element,"shown.bs.dropdown",a)}}hide(){if(f(this._element)||!this._isShown())return;const a={relatedTarget:this._element};this._completeHide(a)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(a){if(!R.trigger(this._element,"hide.bs.dropdown",a).defaultPrevented){if("ontouchstart"in document.documentElement)for(const h of[].concat(...document.body.children))R.off(h,"mouseover",m);this._popper&&this._popper.destroy(),this._menu.classList.remove(yr),this._element.classList.remove(yr),this._element.setAttribute("aria-expanded","false"),kt.removeDataAttribute(this._menu,"popper"),R.trigger(this._element,"hidden.bs.dropdown",a)}}_getConfig(a){if(typeof(a=super._getConfig(a)).reference=="object"&&!c(a.reference)&&typeof a.reference.getBoundingClientRect!="function")throw new TypeError(`${vd.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return a}_createPopper(){if(yd===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let a=this._element;this._config.reference==="parent"?a=this._parent:c(this._config.reference)?a=l(this._config.reference):typeof this._config.reference=="object"&&(a=this._config.reference);const h=this._getPopperConfig();this._popper=El(a,this._menu,h)}_isShown(){return this._menu.classList.contains(yr)}_getPlacement(){const a=this._parent;if(a.classList.contains("dropend"))return fb;if(a.classList.contains("dropstart"))return db;if(a.classList.contains("dropup-center"))return"top";if(a.classList.contains("dropdown-center"))return"bottom";const h=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return a.classList.contains("dropup")?h?lb:cb:h?hb:ub}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(h=>Number.parseInt(h,10)):typeof a=="function"?h=>a(h,this._element):a}_getPopperConfig(){const a={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(kt.setDataAttribute(this._menu,"popper","static"),a.modifiers=[{name:"applyStyles",enabled:!1}]),{...a,...$(this._config.popperConfig,[a])}}_selectMenuItem({key:a,target:h}){const p=A.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(w=>u(w));p.length&&K(p,h,a===_d,!p.includes(h)).focus()}static jQueryInterface(a){return this.each(function(){const h=fn.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a]()}})}static clearMenus(a){if(a.button===2||a.type==="keyup"&&a.key!=="Tab")return;const h=A.find(ab);for(const p of h){const w=fn.getInstance(p);if(!w||w._config.autoClose===!1)continue;const b=a.composedPath(),T=b.includes(w._menu);if(b.includes(w._element)||w._config.autoClose==="inside"&&!T||w._config.autoClose==="outside"&&T||w._menu.contains(a.target)&&(a.type==="keyup"&&a.key==="Tab"||/input|select|option|textarea|form/i.test(a.target.tagName)))continue;const O={relatedTarget:w._element};a.type==="click"&&(O.clickEvent=a),w._completeHide(O)}}static dataApiKeydownHandler(a){const h=/input|textarea/i.test(a.target.tagName),p=a.key==="Escape",w=[ob,_d].includes(a.key);if(!w&&!p||h&&!p)return;a.preventDefault();const b=this.matches(Fs)?this:A.prev(this,Fs)[0]||A.next(this,Fs)[0]||A.findOne(Fs,a.delegateTarget.parentNode),T=fn.getOrCreateInstance(b);if(w)return a.stopPropagation(),T.show(),void T._selectMenuItem(a);T._isShown()&&(a.stopPropagation(),T.hide(),b.focus())}}R.on(document,bd,Fs,fn.dataApiKeydownHandler),R.on(document,bd,Ko,fn.dataApiKeydownHandler),R.on(document,wd,fn.clearMenus),R.on(document,"keyup.bs.dropdown.data-api",fn.clearMenus),R.on(document,wd,Fs,function(d){d.preventDefault(),fn.getOrCreateInstance(this).toggle()}),U(fn);const Ed="show",Td="mousedown.bs.backdrop",mb={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},yb={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Id extends In{constructor(a){super(),this._config=this._getConfig(a),this._isAppended=!1,this._element=null}static get Default(){return mb}static get DefaultType(){return yb}static get NAME(){return"backdrop"}show(a){if(!this._config.isVisible)return void $(a);this._append();const h=this._getElement();this._config.isAnimated&&_(h),h.classList.add(Ed),this._emulateAnimation(()=>{$(a)})}hide(a){this._config.isVisible?(this._getElement().classList.remove(Ed),this._emulateAnimation(()=>{this.dispose(),$(a)})):$(a)}dispose(){this._isAppended&&(R.off(this._element,Td),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const a=document.createElement("div");a.className=this._config.className,this._config.isAnimated&&a.classList.add("fade"),this._element=a}return this._element}_configAfterMerge(a){return a.rootElement=l(a.rootElement),a}_append(){if(this._isAppended)return;const a=this._getElement();this._config.rootElement.append(a),R.on(a,Td,()=>{$(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(a){Z(a,this._getElement(),this._config.isAnimated)}}const Cd=".bs.focustrap",Ad="backward",vb={autofocus:!0,trapElement:null},_b={autofocus:"boolean",trapElement:"element"};class Sd extends In{constructor(a){super(),this._config=this._getConfig(a),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return vb}static get DefaultType(){return _b}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),R.off(document,Cd),R.on(document,"focusin.bs.focustrap",a=>this._handleFocusin(a)),R.on(document,"keydown.tab.bs.focustrap",a=>this._handleKeydown(a)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,R.off(document,Cd))}_handleFocusin(a){const{trapElement:h}=this._config;if(a.target===document||a.target===h||h.contains(a.target))return;const p=A.focusableChildren(h);p.length===0?h.focus():this._lastTabNavDirection===Ad?p[p.length-1].focus():p[0].focus()}_handleKeydown(a){a.key==="Tab"&&(this._lastTabNavDirection=a.shiftKey?Ad:"forward")}}const kd=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Rd=".sticky-top",Wo="padding-right",Od="margin-right";class Tl{constructor(){this._element=document.body}getWidth(){const a=document.documentElement.clientWidth;return Math.abs(window.innerWidth-a)}hide(){const a=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Wo,h=>h+a),this._setElementAttributes(kd,Wo,h=>h+a),this._setElementAttributes(Rd,Od,h=>h-a)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Wo),this._resetElementAttributes(kd,Wo),this._resetElementAttributes(Rd,Od)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(a,h,p){const w=this.getWidth();this._applyManipulationCallback(a,b=>{if(b!==this._element&&window.innerWidth>b.clientWidth+w)return;this._saveInitialAttribute(b,h);const T=window.getComputedStyle(b).getPropertyValue(h);b.style.setProperty(h,`${p(Number.parseFloat(T))}px`)})}_saveInitialAttribute(a,h){const p=a.style.getPropertyValue(h);p&&kt.setDataAttribute(a,h,p)}_resetElementAttributes(a,h){this._applyManipulationCallback(a,p=>{const w=kt.getDataAttribute(p,h);w!==null?(kt.removeDataAttribute(p,h),p.style.setProperty(h,w)):p.style.removeProperty(h)})}_applyManipulationCallback(a,h){if(c(a))h(a);else for(const p of A.find(a,this._element))h(p)}}const Dd=".bs.modal",Nd="hidden.bs.modal",xd="show.bs.modal",Pd="modal-open",Ld="show",Il="modal-static",wb={backdrop:!0,focus:!0,keyboard:!0},bb={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Us extends Ve{constructor(a,h){super(a,h),this._dialog=A.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Tl,this._addEventListeners()}static get Default(){return wb}static get DefaultType(){return bb}static get NAME(){return"modal"}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||this._isTransitioning||R.trigger(this._element,xd,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Pd),this._adjustDialog(),this._backdrop.show(()=>this._showElement(a)))}hide(){this._isShown&&!this._isTransitioning&&(R.trigger(this._element,"hide.bs.modal").defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Ld),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){R.off(window,Dd),R.off(this._dialog,Dd),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Id({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Sd({trapElement:this._element})}_showElement(a){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const h=A.findOne(".modal-body",this._dialog);h&&(h.scrollTop=0),_(this._element),this._element.classList.add(Ld),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,R.trigger(this._element,"shown.bs.modal",{relatedTarget:a})},this._dialog,this._isAnimated())}_addEventListeners(){R.on(this._element,"keydown.dismiss.bs.modal",a=>{a.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),R.on(window,"resize.bs.modal",()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),R.on(this._element,"mousedown.dismiss.bs.modal",a=>{R.one(this._element,"click.dismiss.bs.modal",h=>{this._element===a.target&&this._element===h.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Pd),this._resetAdjustments(),this._scrollBar.reset(),R.trigger(this._element,Nd)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(R.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const a=this._element.scrollHeight>document.documentElement.clientHeight,h=this._element.style.overflowY;h==="hidden"||this._element.classList.contains(Il)||(a||(this._element.style.overflowY="hidden"),this._element.classList.add(Il),this._queueCallback(()=>{this._element.classList.remove(Il),this._queueCallback(()=>{this._element.style.overflowY=h},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const a=this._element.scrollHeight>document.documentElement.clientHeight,h=this._scrollBar.getWidth(),p=h>0;if(p&&!a){const w=N()?"paddingLeft":"paddingRight";this._element.style[w]=`${h}px`}if(!p&&a){const w=N()?"paddingRight":"paddingLeft";this._element.style[w]=`${h}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(a,h){return this.each(function(){const p=Us.getOrCreateInstance(this,a);if(typeof a=="string"){if(p[a]===void 0)throw new TypeError(`No method named "${a}"`);p[a](h)}})}}R.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',function(d){const a=A.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&d.preventDefault(),R.one(a,xd,p=>{p.defaultPrevented||R.one(a,Nd,()=>{u(this)&&this.focus()})});const h=A.findOne(".modal.show");h&&Us.getInstance(h).hide(),Us.getOrCreateInstance(a).toggle(this)}),j(Us),U(Us);const Md="show",Fd="showing",Ud="hiding",$d=".offcanvas.show",Vd="hidePrevented.bs.offcanvas",jd="hidden.bs.offcanvas",Eb={backdrop:!0,keyboard:!0,scroll:!1},Tb={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Hn extends Ve{constructor(a,h){super(a,h),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Eb}static get DefaultType(){return Tb}static get NAME(){return"offcanvas"}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||R.trigger(this._element,"show.bs.offcanvas",{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Tl().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Fd),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(Md),this._element.classList.remove(Fd),R.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:a})},this._element,!0))}hide(){this._isShown&&(R.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Ud),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(Md,Ud),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Tl().reset(),R.trigger(this._element,jd)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const a=!!this._config.backdrop;return new Id({className:"offcanvas-backdrop",isVisible:a,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:a?()=>{this._config.backdrop!=="static"?this.hide():R.trigger(this._element,Vd)}:null})}_initializeFocusTrap(){return new Sd({trapElement:this._element})}_addEventListeners(){R.on(this._element,"keydown.dismiss.bs.offcanvas",a=>{a.key==="Escape"&&(this._config.keyboard?this.hide():R.trigger(this._element,Vd))})}static jQueryInterface(a){return this.each(function(){const h=Hn.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a](this)}})}}R.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',function(d){const a=A.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&d.preventDefault(),f(this))return;R.one(a,jd,()=>{u(this)&&this.focus()});const h=A.findOne($d);h&&h!==a&&Hn.getInstance(h).hide(),Hn.getOrCreateInstance(a).toggle(this)}),R.on(window,"load.bs.offcanvas.data-api",()=>{for(const d of A.find($d))Hn.getOrCreateInstance(d).show()}),R.on(window,"resize.bs.offcanvas",()=>{for(const d of A.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(d).position!=="fixed"&&Hn.getOrCreateInstance(d).hide()}),j(Hn),U(Hn);const Bd={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ib=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Cb=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Ab=(d,a)=>{const h=d.nodeName.toLowerCase();return a.includes(h)?!Ib.has(h)||!!Cb.test(d.nodeValue):a.filter(p=>p instanceof RegExp).some(p=>p.test(h))},Sb={allowList:Bd,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},kb={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Rb={entry:"(string|element|function|null)",selector:"(string|element)"};class Ob extends In{constructor(a){super(),this._config=this._getConfig(a)}static get Default(){return Sb}static get DefaultType(){return kb}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(a=>this._resolvePossibleFunction(a)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(a){return this._checkContent(a),this._config.content={...this._config.content,...a},this}toHtml(){const a=document.createElement("div");a.innerHTML=this._maybeSanitize(this._config.template);for(const[w,b]of Object.entries(this._config.content))this._setContent(a,b,w);const h=a.children[0],p=this._resolvePossibleFunction(this._config.extraClass);return p&&h.classList.add(...p.split(" ")),h}_typeCheckConfig(a){super._typeCheckConfig(a),this._checkContent(a.content)}_checkContent(a){for(const[h,p]of Object.entries(a))super._typeCheckConfig({selector:h,entry:p},Rb)}_setContent(a,h,p){const w=A.findOne(p,a);w&&((h=this._resolvePossibleFunction(h))?c(h)?this._putElementInTemplate(l(h),w):this._config.html?w.innerHTML=this._maybeSanitize(h):w.textContent=h:w.remove())}_maybeSanitize(a){return this._config.sanitize?function(h,p,w){if(!h.length)return h;if(w&&typeof w=="function")return w(h);const b=new window.DOMParser().parseFromString(h,"text/html"),T=[].concat(...b.body.querySelectorAll("*"));for(const O of T){const V=O.nodeName.toLowerCase();if(!Object.keys(p).includes(V)){O.remove();continue}const W=[].concat(...O.attributes),G=[].concat(p["*"]||[],p[V]||[]);for(const z of W)Ab(z,G)||O.removeAttribute(z.nodeName)}return b.body.innerHTML}(a,this._config.allowList,this._config.sanitizeFn):a}_resolvePossibleFunction(a){return $(a,[this])}_putElementInTemplate(a,h){if(this._config.html)return h.innerHTML="",void h.append(a);h.textContent=a.textContent}}const Db=new Set(["sanitize","allowList","sanitizeFn"]),Cl="fade",Go="show",Hd=".modal",qd="hide.bs.modal",Qo="hover",zd="focus",Nb={AUTO:"auto",TOP:"top",RIGHT:N()?"left":"right",BOTTOM:"bottom",LEFT:N()?"right":"left"},xb={allowList:Bd,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Pb={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class $s extends Ve{constructor(a,h){if(yd===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(a,h),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return xb}static get DefaultType(){return Pb}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),R.off(this._element.closest(Hd),qd,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const a=R.trigger(this._element,this.constructor.eventName("show")),h=(g(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(a.defaultPrevented||!h)return;this._disposePopper();const p=this._getTipElement();this._element.setAttribute("aria-describedby",p.getAttribute("id"));const{container:w}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(w.append(p),R.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(p),p.classList.add(Go),"ontouchstart"in document.documentElement)for(const b of[].concat(...document.body.children))R.on(b,"mouseover",m);this._queueCallback(()=>{R.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!R.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Go),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))R.off(a,"mouseover",m);this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),R.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(a){const h=this._getTemplateFactory(a).toHtml();if(!h)return null;h.classList.remove(Cl,Go),h.classList.add(`bs-${this.constructor.NAME}-auto`);const p=(w=>{do w+=Math.floor(1e6*Math.random());while(document.getElementById(w));return w})(this.constructor.NAME).toString();return h.setAttribute("id",p),this._isAnimated()&&h.classList.add(Cl),h}setContent(a){this._newContent=a,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(a){return this._templateFactory?this._templateFactory.changeContent(a):this._templateFactory=new Ob({...this._config,content:a,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(a){return this.constructor.getOrCreateInstance(a.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Cl)}_isShown(){return this.tip&&this.tip.classList.contains(Go)}_createPopper(a){const h=$(this._config.placement,[this,a,this._element]),p=Nb[h.toUpperCase()];return El(this._element,a,this._getPopperConfig(p))}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(h=>Number.parseInt(h,10)):typeof a=="function"?h=>a(h,this._element):a}_resolvePossibleFunction(a){return $(a,[this._element])}_getPopperConfig(a){const h={placement:a,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:p=>{this._getTipElement().setAttribute("data-popper-placement",p.state.placement)}}]};return{...h,...$(this._config.popperConfig,[h])}}_setListeners(){const a=this._config.trigger.split(" ");for(const h of a)if(h==="click")R.on(this._element,this.constructor.eventName("click"),this._config.selector,p=>{this._initializeOnDelegatedTarget(p).toggle()});else if(h!=="manual"){const p=h===Qo?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),w=h===Qo?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");R.on(this._element,p,this._config.selector,b=>{const T=this._initializeOnDelegatedTarget(b);T._activeTrigger[b.type==="focusin"?zd:Qo]=!0,T._enter()}),R.on(this._element,w,this._config.selector,b=>{const T=this._initializeOnDelegatedTarget(b);T._activeTrigger[b.type==="focusout"?zd:Qo]=T._element.contains(b.relatedTarget),T._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},R.on(this._element.closest(Hd),qd,this._hideModalHandler)}_fixTitle(){const a=this._element.getAttribute("title");a&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",a),this._element.setAttribute("data-bs-original-title",a),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(a,h){clearTimeout(this._timeout),this._timeout=setTimeout(a,h)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(a){const h=kt.getDataAttributes(this._element);for(const p of Object.keys(h))Db.has(p)&&delete h[p];return a={...h,...typeof a=="object"&&a?a:{}},a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a.container=a.container===!1?document.body:l(a.container),typeof a.delay=="number"&&(a.delay={show:a.delay,hide:a.delay}),typeof a.title=="number"&&(a.title=a.title.toString()),typeof a.content=="number"&&(a.content=a.content.toString()),a}_getDelegateConfig(){const a={};for(const[h,p]of Object.entries(this._config))this.constructor.Default[h]!==p&&(a[h]=p);return a.selector=!1,a.trigger="manual",a}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(a){return this.each(function(){const h=$s.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a]()}})}}U($s);const Lb={...$s.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Mb={...$s.DefaultType,content:"(null|string|element|function)"};class Yo extends $s{static get Default(){return Lb}static get DefaultType(){return Mb}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(a){return this.each(function(){const h=Yo.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a]()}})}}U(Yo);const Kd="click.bs.scrollspy",vr="active",Wd="[href]",Fb={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Ub={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class _r extends Ve{constructor(a,h){super(a,h),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Fb}static get DefaultType(){return Ub}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const a of this._observableSections.values())this._observer.observe(a)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(a){return a.target=l(a.target)||document.body,a.rootMargin=a.offset?`${a.offset}px 0px -30%`:a.rootMargin,typeof a.threshold=="string"&&(a.threshold=a.threshold.split(",").map(h=>Number.parseFloat(h))),a}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(R.off(this._config.target,Kd),R.on(this._config.target,Kd,Wd,a=>{const h=this._observableSections.get(a.target.hash);if(h){a.preventDefault();const p=this._rootElement||window,w=h.offsetTop-this._element.offsetTop;if(p.scrollTo)return void p.scrollTo({top:w,behavior:"smooth"});p.scrollTop=w}}))}_getNewObserver(){const a={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(h=>this._observerCallback(h),a)}_observerCallback(a){const h=T=>this._targetLinks.get(`#${T.target.id}`),p=T=>{this._previousScrollData.visibleEntryTop=T.target.offsetTop,this._process(h(T))},w=(this._rootElement||document.documentElement).scrollTop,b=w>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=w;for(const T of a){if(!T.isIntersecting){this._activeTarget=null,this._clearActiveClass(h(T));continue}const O=T.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(b&&O){if(p(T),!w)return}else b||O||p(T)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const a=A.find(Wd,this._config.target);for(const h of a){if(!h.hash||f(h))continue;const p=A.findOne(decodeURI(h.hash),this._element);u(p)&&(this._targetLinks.set(decodeURI(h.hash),h),this._observableSections.set(h.hash,p))}}_process(a){this._activeTarget!==a&&(this._clearActiveClass(this._config.target),this._activeTarget=a,a.classList.add(vr),this._activateParents(a),R.trigger(this._element,"activate.bs.scrollspy",{relatedTarget:a}))}_activateParents(a){if(a.classList.contains("dropdown-item"))A.findOne(".dropdown-toggle",a.closest(".dropdown")).classList.add(vr);else for(const h of A.parents(a,".nav, .list-group"))for(const p of A.prev(h,".nav-link, .nav-item > .nav-link, .list-group-item"))p.classList.add(vr)}_clearActiveClass(a){a.classList.remove(vr);const h=A.find("[href].active",a);for(const p of h)p.classList.remove(vr)}static jQueryInterface(a){return this.each(function(){const h=_r.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a]()}})}}R.on(window,"load.bs.scrollspy.data-api",()=>{for(const d of A.find('[data-bs-spy="scroll"]'))_r.getOrCreateInstance(d)}),U(_r);const $b="ArrowLeft",Gd="ArrowRight",Vb="ArrowUp",Qd="ArrowDown",Xo="active",Yd="fade",Al="show",Xd='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Sl=`.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Xd}`;class Vs extends Ve{constructor(a){super(a),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),R.on(this._element,"keydown.bs.tab",h=>this._keydown(h)))}static get NAME(){return"tab"}show(){const a=this._element;if(this._elemIsActive(a))return;const h=this._getActiveElem(),p=h?R.trigger(h,"hide.bs.tab",{relatedTarget:a}):null;R.trigger(a,"show.bs.tab",{relatedTarget:h}).defaultPrevented||p&&p.defaultPrevented||(this._deactivate(h,a),this._activate(a,h))}_activate(a,h){a&&(a.classList.add(Xo),this._activate(A.getElementFromSelector(a)),this._queueCallback(()=>{a.getAttribute("role")==="tab"?(a.removeAttribute("tabindex"),a.setAttribute("aria-selected",!0),this._toggleDropDown(a,!0),R.trigger(a,"shown.bs.tab",{relatedTarget:h})):a.classList.add(Al)},a,a.classList.contains(Yd)))}_deactivate(a,h){a&&(a.classList.remove(Xo),a.blur(),this._deactivate(A.getElementFromSelector(a)),this._queueCallback(()=>{a.getAttribute("role")==="tab"?(a.setAttribute("aria-selected",!1),a.setAttribute("tabindex","-1"),this._toggleDropDown(a,!1),R.trigger(a,"hidden.bs.tab",{relatedTarget:h})):a.classList.remove(Al)},a,a.classList.contains(Yd)))}_keydown(a){if(![$b,Gd,Vb,Qd].includes(a.key))return;a.stopPropagation(),a.preventDefault();const h=[Gd,Qd].includes(a.key),p=K(this._getChildren().filter(w=>!f(w)),a.target,h,!0);p&&(p.focus({preventScroll:!0}),Vs.getOrCreateInstance(p).show())}_getChildren(){return A.find(Sl,this._parent)}_getActiveElem(){return this._getChildren().find(a=>this._elemIsActive(a))||null}_setInitialAttributes(a,h){this._setAttributeIfNotExists(a,"role","tablist");for(const p of h)this._setInitialAttributesOnChild(p)}_setInitialAttributesOnChild(a){a=this._getInnerElement(a);const h=this._elemIsActive(a),p=this._getOuterElement(a);a.setAttribute("aria-selected",h),p!==a&&this._setAttributeIfNotExists(p,"role","presentation"),h||a.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(a,"role","tab"),this._setInitialAttributesOnTargetPanel(a)}_setInitialAttributesOnTargetPanel(a){const h=A.getElementFromSelector(a);h&&(this._setAttributeIfNotExists(h,"role","tabpanel"),a.id&&this._setAttributeIfNotExists(h,"aria-labelledby",`${a.id}`))}_toggleDropDown(a,h){const p=this._getOuterElement(a);if(!p.classList.contains("dropdown"))return;const w=(b,T)=>{const O=A.findOne(b,p);O&&O.classList.toggle(T,h)};w(".dropdown-toggle",Xo),w(".dropdown-menu",Al),p.setAttribute("aria-expanded",h)}_setAttributeIfNotExists(a,h,p){a.hasAttribute(h)||a.setAttribute(h,p)}_elemIsActive(a){return a.classList.contains(Xo)}_getInnerElement(a){return a.matches(Sl)?a:A.findOne(Sl,a)}_getOuterElement(a){return a.closest(".nav-item, .list-group-item")||a}static jQueryInterface(a){return this.each(function(){const h=Vs.getOrCreateInstance(this);if(typeof a=="string"){if(h[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);h[a]()}})}}R.on(document,"click.bs.tab",Xd,function(d){["A","AREA"].includes(this.tagName)&&d.preventDefault(),f(this)||Vs.getOrCreateInstance(this).show()}),R.on(window,"load.bs.tab",()=>{for(const d of A.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))Vs.getOrCreateInstance(d)}),U(Vs);const Jd="hide",Jo="show",Zo="showing",jb={animation:"boolean",autohide:"boolean",delay:"number"},Bb={animation:!0,autohide:!0,delay:5e3};class wr extends Ve{constructor(a,h){super(a,h),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Bb}static get DefaultType(){return jb}static get NAME(){return"toast"}show(){R.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(Jd),_(this._element),this._element.classList.add(Jo,Zo),this._queueCallback(()=>{this._element.classList.remove(Zo),R.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(R.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.add(Zo),this._queueCallback(()=>{this._element.classList.add(Jd),this._element.classList.remove(Zo,Jo),R.trigger(this._element,"hidden.bs.toast")},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Jo),super.dispose()}isShown(){return this._element.classList.contains(Jo)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(a,h){switch(a.type){case"mouseover":case"mouseout":this._hasMouseInteraction=h;break;case"focusin":case"focusout":this._hasKeyboardInteraction=h}if(h)return void this._clearTimeout();const p=a.relatedTarget;this._element===p||this._element.contains(p)||this._maybeScheduleHide()}_setListeners(){R.on(this._element,"mouseover.bs.toast",a=>this._onInteraction(a,!0)),R.on(this._element,"mouseout.bs.toast",a=>this._onInteraction(a,!1)),R.on(this._element,"focusin.bs.toast",a=>this._onInteraction(a,!0)),R.on(this._element,"focusout.bs.toast",a=>this._onInteraction(a,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(a){return this.each(function(){const h=wr.getOrCreateInstance(this,a);if(typeof a=="string"){if(h[a]===void 0)throw new TypeError(`No method named "${a}"`);h[a](this)}})}}return j(wr),U(wr),{Alert:Y,Button:y,Carousel:pe,Collapse:rn,Dropdown:fn,Modal:Us,Offcanvas:Hn,Popover:Yo,ScrollSpy:_r,Tab:Vs,Toast:wr,Tooltip:$s}})})(XD);function JD(t){return new Date(t).toLocaleDateString()}const ol=ET(MD);ol.config.globalProperties.$filters={date:JD};ol.use(CT());ol.use(Yw);ol.mount("#app");export{Kn as F,Qw as _,cN as a,lN as b,wy as c,DT as d,ws as e,Ks as f,iN as g,wh as h,u0 as i,fh as j,Ct as k,DD as l,Sw as m,LD as n,vc as o,dr as p,eN as q,sN as r,tN as s,ZD as t,uN as u,rN as v,nN as w,aN as x,oN as y};
