import"./store.BeEhEPCu.js";import{w as h,ak as u,al as w,am as y,ac as M,p as E,m as x,t as A,a as N,k as T,b as f,d as j,c as I,g as l,s as S,r as B,f as L,an as v}from"./template.CTV4kuuz.js";import{i as d}from"./if.CdQSkyaB.js";import{i as q}from"./lifecycle.D859jrIT.js";import{p as z}from"./props.DS6nyddM.js";import"./proxy.D3RqoE39.js";function C(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function g(t){var r,s,e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t)){var o=t.length;for(r=0;r<o;r++)t[r]&&(s=g(t[r]))&&(e&&(e+=" "),e+=s)}else for(s in t)t[s]&&(e&&(e+=" "),e+=s);return e}function H(){for(var t,r,s=0,e="",o=arguments.length;s<o;s++)(t=arguments[s])&&(r=g(t))&&(e&&(e+=" "),e+=r);return e}function P(t){return typeof t=="object"?H(t):t??""}function K(t,r,s){var e=t==null?"":""+t;return e===""?null:e}function Y(t,r,s,e,o,i){var c=t.__className;if(h||c!==s){var a=K(s);(!h||a!==t.getAttribute("class"))&&(a==null?t.removeAttribute("class"):t.className=a),t.__className=s}return i}function D(t){u===null&&C(),w&&u.l!==null?F(u).m.push(t):y(()=>{const r=M(t);if(typeof r=="function")return r})}function F(t){var r=t.l;return r.u??={a:[],b:[],m:[]}}var G=v('<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="lightIcon"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>'),J=v('<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="darkIcon"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg>'),O=A('<button aria-label="Toggle theme"><!> <!></button>');function Z(t,r){E(r,!1);let s=z(r,"className",8,"");const e="theme";let o=x(localStorage.getItem(e)||"light");const i=()=>{l(o)==="dark"?(document.querySelector(":root").style.setProperty("--hvk-scrollbar","#222527"),document.documentElement.classList.remove("dark"),document.documentElement.classList.add("dark")):(document.querySelector(":root").style.setProperty("--hvk-scrollbar","#f7fdff"),document.documentElement.classList.remove("dark")),localStorage.setItem(e,l(o))},c=()=>{L(o,l(o)==="light"?"dark":"light"),i()};D(()=>{i()}),q();var a=O(),p=I(a);{var k=n=>{var m=G();f(n,m)};d(p,n=>{l(o)==="light"&&n(k)})}var _=S(p,2);{var b=n=>{var m=J();f(n,m)};d(_,n=>{l(o)==="dark"&&n(b)})}B(a),N(()=>Y(a,1,P(s()))),T("click",a,c),f(t,a),j()}export{Z as default};
