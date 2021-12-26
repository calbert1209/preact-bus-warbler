var C=Object.defineProperty,$=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var N=(e,t,n)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))E.call(t,n)&&N(e,n,t[n]);if(b)for(var n of b(t))H.call(t,n)&&N(e,n,t[n]);return e},v=(e,t)=>$(e,B(t));import{j as M,a as A,F as O,u as w,d as g,l as h,s as L,y as T,D as F,b as I,A as R,R as q,c as D,S as P}from"./vendor.4a3ef53a.js";const U=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}};U();var p;(function(e){e.kanai_ofuna="kanai_ofuna",e.ofuna_kanai="ofuna_kanai",e.kanai_totsuka="kanai_totsuka",e.totsuka_kanai="totsuka_kanai"})(p||(p={}));var l;(function(e){e.weekday="weekday",e.saturday="saturday",e.holiday="holiday"})(l||(l={}));const z="https://calbert1209.github.io/json-api";function W(e){return Object.keys(e).filter(t=>Number.isNaN(+t))}p.kanai_ofuna+"",p.ofuna_kanai+"",p.kanai_totsuka+"",p.totsuka_kanai+"";const K=W(p).map(e=>`${z}/${e}.json`),V=async e=>{const t=e.map(o=>window.fetch(o)),n=[];for(const o of t)try{const c=await(await o).json();n.push(c)}catch(s){console.error(s)}return n.reduce((o,s)=>{const c=s.name;return o[c]=s,o},{})},r=M,u=A,k=O,S=e=>{const t=e.busStop.substring(0,2),n=e.dest.substring(0,2);return`${t} \u2192 ${n}`},G=({data:e})=>{const[t,n]=w(),o=Object.keys(e).join("-"),s=g(()=>Object.entries(e).map(([c,i])=>{const a=c.split("_").join("/"),d=S(i.header);return{key:c,label:d,path:`/${a}`}}),[o]);return u(k,{children:[r("h1",{children:"Bus Warbler"}),r("div",{class:"buttonMenu",children:s.map(({key:c,label:i,path:a})=>r("button",{class:"routeButton",onClick:()=>n(a),children:i},c))})]})},x=(e,t)=>`${e}_${t}`,J=(e=new Date)=>{let t=e.getHours();const n=e.getMinutes();return t*60+n},f=e=>`${e<10?"0":""}${e}`,Q=()=>{const e=new Date,[t,n]=h(e.getHours()),[o,s]=h(e.getMinutes()),[c,i]=h(e.getSeconds()),a=L(-1);return T(()=>{a.current=window.setInterval(()=>{const d=new Date;n(d.getHours()),s(d.getMinutes()),i(d.getSeconds())},500)},[]),r("div",{className:"currentTimeContainer",children:u("div",{className:"timeDisplay",children:[r("div",{className:"pre-colon",children:f(t)}),r("div",{className:"colon",children:":"}),u("div",{className:"post-colon",children:[r("div",{className:"minute",children:f(o)}),r("div",{className:"note",children:f(c)})]})]})})},X=()=>u("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",children:[r("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"})]}),Y=(e=new Date)=>{const t=e.getDay();return t===0?l.holiday:t===6?l.saturday:l.weekday},Z={scheduleType:l.weekday,setScheduleType:e=>{}},_=F(Z),ee=({children:e})=>{const[t,n]=h(()=>({scheduleType:Y()})),o=s=>n(c=>v(y({},c),{scheduleType:s}));return r(_.Provider,{value:v(y({},t),{setScheduleType:o}),children:e})},j=()=>I(_),te=(e,t)=>e.index-t.index,ne=({stopName:e,dest:t,data:n,scheduleType:o})=>{if(!n)return null;const s=x(e,t),c=n[s];if(!c)return null;const i=J();return c.times.filter(m=>m.index>=i&&m.type===o).sort(te).slice(0,3)},se=({stopName:e,dest:t,data:n})=>{const{scheduleType:o}=j(),s=g(()=>ne({stopName:e,dest:t,scheduleType:o,data:n}),[e,t,n,o]),c=g(()=>{const i=x(e,t),a=n==null?void 0:n[i];return a?S(a.header):null},[e,t,n]);return{nextTimes:s,routeName:c}},re=({hour:e,minute:t,note:n})=>u("div",{className:"timeDisplay",children:[r("div",{className:"pre-colon",children:f(e)}),r("div",{className:"colon",children:":"}),u("div",{className:"post-colon",children:[r("div",{className:"minute",children:f(t)}),n&&r("div",{className:"note",children:n})]})]}),oe=({routeName:e,onBack:t})=>u("div",{className:"statusReportHeader",children:[r("div",{className:"backButton",onClick:t,role:"button",children:r(X,{})}),r("div",{className:"statusReportTitle",children:e})]}),ce=({stopName:e,dest:t,data:n})=>{const{nextTimes:o,routeName:s}=se({stopName:e,dest:t,data:n}),[c,i]=w(),a=R(()=>i("/"),[]),d=s!=null?s:"\u30EB\u30FC\u30C8\u540D\u4E0D\u660E";return u(k,{children:[r(oe,{routeName:d,onBack:a}),r(Q,{}),(o==null?void 0:o.length)?r("div",{className:"nextTimesContainer",children:r("div",{className:"nextTimesBlock",children:o.map(m=>r(re,y({},m),m.index))})}):r("div",{children:"no data found"})]})},ie=new Map([[l.weekday,"\u5E73"],[l.saturday,"\u571F"],[l.holiday,"\u795D"]]),ae=({key:e,label:t,type:n,isSelected:o,onClick:s})=>r("li",{"data-checked":o,onClick:()=>{o||s(n)},children:t},e),ue=({children:e})=>{const{scheduleType:t,setScheduleType:n}=j();return u(k,{children:[e,r("ul",{className:"scheduleTypeMenu",children:[...ie.entries()].map(([o,s])=>r(ae,{type:o,label:s,key:o,isSelected:o===t,onClick:n}))})]})};function le(){const[e,t]=h(!0),[n,o]=h(null),[s,c]=h(null);return T(()=>{V(K).then(i=>{console.log(i),c(i),t(!1)}).catch(o)},[]),e?r("h1",{children:"loading..."}):n?u(k,{children:[r("h1",{children:"Error occurred"}),r("div",{children:`${n}`})]}):s?r(ee,{children:u(q,{base:"/preact-bus-warbler",children:[r(D,{path:"/",children:r(G,{data:s})}),r(D,{path:"/:stopName/:dest",children:({stopName:i,dest:a})=>r(ue,{children:r(ce,{stopName:i,dest:a,data:s})})})]})}):r("h1",{children:"Could not fetch data"})}P(r(le,{}),document.getElementById("app"));
