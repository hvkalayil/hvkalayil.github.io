import{ar as m,aL as R,aM as D,M as d,aN as M,g as b,U as s,i as v,ak as N,J as L,aO as T,a0 as j,N as A}from"./template.CYXDabh6.js";function y(a,h=null,E){if(typeof a!="object"||a===null||m in a)return a;const x=j(a);if(x!==R&&x!==D)return a;var f=new Map,c=A(a),_=d(0);c&&f.set("length",d(a.length));var l;return new Proxy(a,{defineProperty(n,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&T();var r=f.get(e);return r===void 0?(r=d(t.value),f.set(e,r)):v(r,y(t.value,l)),!0},deleteProperty(n,e){var t=f.get(e);if(t===void 0)e in n&&f.set(e,d(s));else{if(c&&typeof e=="string"){var r=f.get("length"),i=Number(e);Number.isInteger(i)&&i<r.v&&v(r,i)}v(t,s),O(_)}return!0},get(n,e,t){if(e===m)return a;var r=f.get(e),i=e in n;if(r===void 0&&(!i||N(n,e)?.writable)&&(r=d(y(i?n[e]:s,l)),f.set(e,r)),r!==void 0){var u=b(r);return u===s?void 0:u}return Reflect.get(n,e,t)},getOwnPropertyDescriptor(n,e){var t=Reflect.getOwnPropertyDescriptor(n,e);if(t&&"value"in t){var r=f.get(e);r&&(t.value=b(r))}else if(t===void 0){var i=f.get(e),u=i?.v;if(i!==void 0&&u!==s)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return t},has(n,e){if(e===m)return!0;var t=f.get(e),r=t!==void 0&&t.v!==s||Reflect.has(n,e);if(t!==void 0||L!==null&&(!r||N(n,e)?.writable)){t===void 0&&(t=d(r?y(n[e],l):s),f.set(e,t));var i=b(t);if(i===s)return!1}return r},set(n,e,t,r){var i=f.get(e),u=e in n;if(c&&e==="length")for(var g=t;g<i.v;g+=1){var o=f.get(g+"");o!==void 0?v(o,s):g in n&&(o=d(s),f.set(g+"",o))}i===void 0?(!u||N(n,e)?.writable)&&(i=d(void 0),v(i,y(t,l)),f.set(e,i)):(u=i.v!==s,v(i,y(t,l)));var P=Reflect.getOwnPropertyDescriptor(n,e);if(P?.set&&P.set.call(r,t),!u){if(c&&typeof e=="string"){var I=f.get("length"),w=Number(e);Number.isInteger(w)&&w>=I.v&&v(I,w+1)}O(_)}return!0},ownKeys(n){b(_);var e=Reflect.ownKeys(n).filter(i=>{var u=f.get(i);return u===void 0||u.v!==s});for(var[t,r]of f)r.v!==s&&!(t in n)&&e.push(t);return e},setPrototypeOf(){M()}})}function O(a,h=1){v(a,a.v+h)}export{y as p};
