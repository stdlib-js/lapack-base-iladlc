"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var l=n(function(I,q){
var w=require('@stdlib/lapack-base-iladlr/dist').ndarray;function b(e,r,t,u,a,i){return w(r,e,t,a,u,i)}q.exports=b
});var m=n(function(J,c){
var h=require('@stdlib/blas-base-assert-is-layout/dist'),R=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),E=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),F=require('@stdlib/math-base-special-fast-max/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),V=l();function _(e,r,t,u,a){var i,v,s;if(!h(e))throw new TypeError(d('nullFx',e));if(R(e)?s=t:s=r,a<F(1,s))throw new RangeError(d("invalid argument. Fifth argument must be greater than or equal to max(1,%d). Value: `%d`.",s,a));return E(e)?(i=1,v=a):(i=a,v=1),V(r,t,u,i,v,0)}c.exports=_
});var p=n(function(K,f){
var C=l();function M(e,r,t,u,a,i){return C(e,r,t,u,a,i)}f.exports=M
});var g=n(function(P,y){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=m(),T=p();O(x,"ndarray",T);y.exports=x
});var k=require("path").join,z=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),G=g(),o,j=z(k(__dirname,"./native.js"));B(j)?o=G:o=j;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
