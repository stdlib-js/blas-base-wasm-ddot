"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=v(function(K,h){
var g=require("path").resolve,j=require('@stdlib/fs-read-wasm/dist').sync,z=j(g(__dirname,"..","src","main.wasm"));h.exports=z
});var y=v(function(L,x){
var B=require('@stdlib/assert-is-wasm-memory/dist'),w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=require('@stdlib/utils-inherit/dist'),M=require('@stdlib/wasm-module-wrapper/dist'),T=require('@stdlib/error-tools-fmtprodmsg/dist'),V=m();function s(e){if(!(this instanceof s))return new s(e);if(!B(e))throw new TypeError(T('26bH0',e));return M.call(this,V,e,{env:{memory:e}}),this}E(s,M);w(s.prototype,"main",function(r,a,t,n,i){return this._instance.exports.c_ddot(r,a,t,n,i)});w(s.prototype,"ndarray",function(r,a,t,n,i,c,p){return this._instance.exports.c_ddot_ndarray(r,a,t,n,i,c,p)});x.exports=s
});var A=v(function(P,W){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=require('@stdlib/utils-inherit/dist'),_=require('@stdlib/strided-base-stride2offset/dist'),C=require('@stdlib/wasm-memory/dist'),D=require('@stdlib/wasm-base-arrays2ptrs/dist'),b=require('@stdlib/wasm-base-strided2object/dist'),q=y();function o(){return this instanceof o?(q.call(this,new C({initial:0})),this):new o}k(o,q);R(o.prototype,"main",function(r,a,t,n,i){return this.ndarray(r,a,t,_(r,t),n,i,_(r,i))});R(o.prototype,"ndarray",function(r,a,t,n,i,c,p){var l,u,d;return l=D(this,[b(r,a,t,n),b(r,i,c,p)]),u=l[0],d=l[1],q.prototype.ndarray.call(this,r,u.ptr,u.stride,u.offset,d.ptr,d.stride,d.offset)});W.exports=o
});var S=v(function(Q,O){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=A(),H=y(),f=new G;f.initializeSync();F(f,"Module",H.bind(null));O.exports=f
});var I=S();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
