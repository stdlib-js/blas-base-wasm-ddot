"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var h=v(function(K,f){
var j=require("path").resolve,z=require('@stdlib/fs-read-wasm/dist').sync,B=z(j(__dirname,"..","src","main.wasm"));f.exports=B
});var y=v(function(L,M){
var E=require('@stdlib/assert-is-wasm-memory/dist'),m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),T=require('@stdlib/utils-inherit/dist'),w=require('@stdlib/wasm-module-wrapper/dist'),V=require('@stdlib/error-tools-fmtprodmsg/dist'),k=h();function n(e){if(!(this instanceof n))return new n(e);if(!E(e))throw new TypeError(V('nullH0',e));return w.call(this,k,e,{env:{memory:e}}),this}T(n,w);m(n.prototype,"main",function(r,a,t,s,i){return this._instance.exports.c_ddot(r,a,t,s,i)});m(n.prototype,"ndarray",function(r,a,t,s,i,c,p){return this._instance.exports.c_ddot_ndarray(r,a,t,s,i,c,p)});M.exports=n
});var W=v(function(P,R){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=require('@stdlib/utils-inherit/dist'),x=require('@stdlib/strided-base-stride2offset/dist'),D=require('@stdlib/wasm-memory/dist'),F=require('@stdlib/wasm-base-arrays2ptrs/dist'),_=require('@stdlib/wasm-base-strided2object/dist'),q=y();function o(){return this instanceof o?(q.call(this,new D({initial:0})),this):new o}C(o,q);b(o.prototype,"main",function(r,a,t,s,i){return this.ndarray(r,a,t,x(r,t),s,i,x(r,i))});b(o.prototype,"ndarray",function(r,a,t,s,i,c,p){var l,u,d;return l=F(this,[_(r,a,t,s),_(r,i,c,p)]),u=l[0],d=l[1],q.prototype.ndarray.call(this,r,u.ptr,u.stride,u.offset,d.ptr,d.stride,d.offset)});R.exports=o
});var S=v(function(Q,O){
var G=W(),A=new G;A.initializeSync();O.exports=A
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=S(),I=y();H(g,"Module",I);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
