"use strict";(self.webpackChunkimage_effect=self.webpackChunkimage_effect||[]).push([[235],{235:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.r(t),n.d(t,{grayscale:()=>a.s});var a=n(838),c=e([a]);a=(c.then?(await c)():c)[0],r()}catch(e){r(e)}}))},838:(e,t,n)=>{n.a(e,(async(r,a)=>{try{n.d(t,{s:()=>h});var c=n(530);e=n.hmd(e);var o=r([c]);c=(o.then?(await o)():o)[0];let i=0,d=new Uint8Array;function f(){return 0===d.byteLength&&(d=new Uint8Array(c.memory.buffer)),d}let u=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const l="function"==typeof u.encodeInto?function(e,t){return u.encodeInto(e,t)}:function(e,t){const n=u.encode(e);return t.set(n),{read:e.length,written:n.length}};function s(e,t,n){if(void 0===n){const n=u.encode(e),r=t(n.length);return f().subarray(r,r+n.length).set(n),i=n.length,r}let r=e.length,a=t(r);const c=f();let o=0;for(;o<r;o++){const t=e.charCodeAt(o);if(t>127)break;c[a+o]=t}if(o!==r){0!==o&&(e=e.slice(o)),a=n(a,r,r=o+3*e.length);const t=f().subarray(a+o,a+r);o+=l(e,t).written}return i=o,a}let _=new Int32Array;function y(){return 0===_.byteLength&&(_=new Int32Array(c.memory.buffer)),_}let g=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function h(e){try{const o=c.__wbindgen_add_to_stack_pointer(-16),d=s(e,c.__wbindgen_malloc,c.__wbindgen_realloc),u=i;c.grayscale(o,d,u);var t=y()[o/4+0],n=y()[o/4+1];return r=t,a=n,g.decode(f().subarray(r,r+a))}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_free(t,n)}var r,a}g.decode(),a()}catch(b){a(b)}}))},530:(e,t,n)=>{e.exports=n.v(t,e.id,"59452e507627491be06b")}}]);