"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var m=v(function(K,h){
var g=require("path").resolve,j=require('@stdlib/fs-read-wasm/dist').sync,z=j(g(__dirname,"..","src","main.wasm"));h.exports=z
});var y=v(function(L,x){
var B=require('@stdlib/assert-is-wasm-memory/dist'),w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=require('@stdlib/utils-inherit/dist'),M=require('@stdlib/wasm-module-wrapper/dist'),T=require('@stdlib/error-tools-fmtprodmsg/dist'),V=m();function s(e){if(!(this instanceof s))return new s(e);if(!B(e))throw new TypeError(T('26bH0',e));return M.call(this,V,e,{env:{memory:e}}),this}E(s,M);w(s.prototype,"main",function(r,t,i,n,a){return this._instance.exports.c_ddot(r,t,i,n,a)});w(s.prototype,"ndarray",function(r,t,i,n,a,c,p){return this._instance.exports.c_ddot_ndarray(r,t,i,n,a,c,p)});x.exports=s
});var A=v(function(P,W){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=require('@stdlib/utils-inherit/dist'),_=require('@stdlib/strided-base-stride2offset/dist'),C=require('@stdlib/wasm-memory/dist'),D=require('@stdlib/wasm-base-arrays2ptrs/dist'),b=require('@stdlib/wasm-base-strided2object/dist'),q=y();function o(){return this instanceof o?(q.call(this,new C({initial:0})),this):new o}k(o,q);R(o.prototype,"main",function(r,t,i,n,a){return this.ndarray(r,t,i,_(r,i),n,a,_(r,a))});R(o.prototype,"ndarray",function(r,t,i,n,a,c,p){var l,u,d;return l=D(this,[b(r,t,i,n),b(r,a,c,p)]),u=l[0],d=l[1],q.prototype.ndarray.call(this,r,u.ptr,u.stride,u.offset,d.ptr,d.stride,d.offset)});W.exports=o
});var S=v(function(Q,O){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=A(),H=y(),f=new G;f.initializeSync();F(f,"Module",H.bind(null));O.exports=f
});var I=S();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
