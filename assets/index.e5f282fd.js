import{j as c,a as l,F as f,l as d,y as p,S as m}from"./vendor.cba5df32.js";const k=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}};k();const h="https://calbert1209.github.io/json-api";var r;(function(t){t.kanai_ofuna="kanai_ofuna",t.ofuna_kanai="ofuna_kanai",t.kanai_totsuka="kanai_totsuka",t.totsuka_kanai="totsuka_kanai"})(r||(r={}));function g(t){return Object.keys(t).filter(n=>Number.isNaN(+n))}const y=g(r).map(t=>`${h}/${t}.json`),b={[r.kanai_ofuna]:"\u91D1\u4E95 \u2192 \u5927\u8239",[r.ofuna_kanai]:"\u5927\u8239 \u2192 \u91D1\u4E95",[r.kanai_totsuka]:"\u91D1\u4E95 \u2192 \u6238\u585A",[r.totsuka_kanai]:"\u6238\u585A \u2192 \u91D1\u4E95"},s=c,j=l,_=f,v=async()=>{const t=y.map(n=>window.fetch(n));for(const n of t)try{const u=await(await n).json();console.log(u)}catch(a){console.error(a)}};function L(){const[t,n]=d(!0);return p(()=>{v().then(()=>n(!1))},[]),t?s("h1",{children:"loading..."}):j(_,{children:[s("h1",{children:"Bus Warbler"}),s("div",{class:"buttonMenu",children:Object.values(b).map(a=>s("button",{class:"routeButton",children:a}))})]})}m(s(L,{}),document.getElementById("app"));
