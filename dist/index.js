"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var l=n(function(I,q){
var w=require('@stdlib/lapack-base-iladlr/dist').ndarray;function b(e,r,a,u,i,t){return w(r,e,a,i,u,t)}q.exports=b
});var m=n(function(J,c){
var h=require('@stdlib/blas-base-assert-is-layout/dist'),R=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),E=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),F=require('@stdlib/math-base-special-fast-max/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),V=l();function _(e,r,a,u,i){var t,v,s;if(!h(e))throw new TypeError(d('2IFFx',e));if(R(e)?s=a:s=r,i<F(1,s))throw new RangeError(d('2IFIR',s,i));return E(e)?(t=1,v=i):(t=i,v=1),V(r,a,u,t,v,0)}c.exports=_
});var p=n(function(K,f){
var C=l();function M(e,r,a,u,i,t){return C(e,r,a,u,i,t)}f.exports=M
});var g=n(function(P,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=m(),T=p();O(x,"ndarray",T);y.exports=x
});var k=require("path").join,z=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),G=g(),o,j=z(k(__dirname,"./native.js"));B(j)?o=G:o=j;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
