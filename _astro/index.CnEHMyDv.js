import{O as N,a8 as L,a9 as M,aa as W,ab as j,ac as q,ad as B,ae as I,af as P,N as U,ag as g,ah as O,ai as S,aj as G}from"./template.CTV4kuuz.js";import{a as K}from"./render.BRaNzVEk.js";const D=()=>performance.now(),v={tick:a=>requestAnimationFrame(a),now:()=>D(),tasks:new Set};function z(){const a=v.now();v.tasks.forEach(t=>{t.c(a)||(v.tasks.delete(t),t.f())}),v.tasks.size!==0&&v.tick(z)}function H(a){let t;return v.tasks.size===0&&v.tick(z),{promise:new Promise(n=>{v.tasks.add(t={c:a,f:n})}),abort(){v.tasks.delete(t)}}}function b(a,t){I(()=>{a.dispatchEvent(new CustomEvent(t))})}function J(a){if(a==="float")return"cssFloat";if(a==="offset")return"cssOffset";if(a.startsWith("--"))return a;const t=a.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function R(a){const t={},n=a.split(";");for(const s of n){const[c,f]=s.split(":");if(!c||f===void 0)break;const u=J(c.trim());t[u]=f.trim()}return t}const Q=a=>a;function Z(a,t,n,s){var c=(a&B)!==0,f="both",u,_=t.inert,$=t.style.overflow,i,e;function l(){var p=G,o=N;O(null),S(null);try{return u??=n()(t,s?.()??{},{direction:f})}finally{O(p),S(o)}}var h={is_global:c,in(){t.inert=_,b(t,"introstart"),i=k(t,l(),e,1,()=>{b(t,"introend"),i?.abort(),i=u=void 0,t.style.overflow=$})},out(p){t.inert=!0,b(t,"outrostart"),e=k(t,l(),i,0,()=>{b(t,"outroend"),p?.()})},stop:()=>{i?.abort(),e?.abort()}},m=N;if((m.transitions??=[]).push(h),K){var d=c;if(!d){for(var r=m.parent;r&&(r.f&L)!==0;)for(;(r=r.parent)&&(r.f&M)===0;);d=!r||(r.f&W)!==0}d&&j(()=>{q(()=>h.in())})}}function k(a,t,n,s,c){var f=s===1;if(P(t)){var u,_=!1;return U(()=>{if(!_){var p=t({direction:f?"in":"out"});u=k(a,p,n,s,c)}}),{abort:()=>{_=!0,u?.abort()},deactivate:()=>u.deactivate(),reset:()=>u.reset(),t:()=>u.t()}}if(n?.deactivate(),!t?.duration)return c(),{abort:g,deactivate:g,reset:g,t:()=>s};const{delay:$=0,css:i,tick:e,easing:l=Q}=t;var h=[];if(f&&n===void 0&&(e&&e(0,1),i)){var m=R(i(0,1));h.push(m,m)}var d=()=>1-s,r=a.animate(h,{duration:$});return r.onfinish=()=>{var p=n?.t()??1-s;n?.abort();var o=s-p,y=t.duration*Math.abs(o),E=[];if(y>0){var x=!1;if(i)for(var C=Math.ceil(y/16.666666666666668),F=0;F<=C;F+=1){var T=p+o*l(F/C),A=R(i(T,1-T));E.push(A),x||=A.overflow==="hidden"}x&&(a.style.overflow="hidden"),d=()=>{var w=r.currentTime;return p+o*l(w/y)},e&&H(()=>{if(r.playState!=="running")return!1;var w=d();return e(w,1-w),!0})}r=a.animate(E,{duration:y,fill:"forwards"}),r.onfinish=()=>{d=()=>s,e?.(s,1-s),c()}},{abort:()=>{r&&(r.cancel(),r.effect=null,r.onfinish=g)},deactivate:()=>{c=g},reset:()=>{s===0&&e?.(1,0)},t:()=>d()}}function V(a){const t=a-1;return t*t*t+1}function tt(a,{delay:t=0,duration:n=400,easing:s=V,axis:c="y"}={}){const f=getComputedStyle(a),u=+f.opacity,_=c==="y"?"height":"width",$=parseFloat(f[_]),i=c==="y"?["top","bottom"]:["left","right"],e=i.map(o=>`${o[0].toUpperCase()}${o.slice(1)}`),l=parseFloat(f[`padding${e[0]}`]),h=parseFloat(f[`padding${e[1]}`]),m=parseFloat(f[`margin${e[0]}`]),d=parseFloat(f[`margin${e[1]}`]),r=parseFloat(f[`border${e[0]}Width`]),p=parseFloat(f[`border${e[1]}Width`]);return{delay:t,duration:n,easing:s,css:o=>`overflow: hidden;opacity: ${Math.min(o*20,1)*u};${_}: ${o*$}px;padding-${i[0]}: ${o*l}px;padding-${i[1]}: ${o*h}px;margin-${i[0]}: ${o*m}px;margin-${i[1]}: ${o*d}px;border-${i[0]}-width: ${o*r}px;border-${i[1]}-width: ${o*p}px;min-${_}: 0`}}export{tt as s,Z as t};
