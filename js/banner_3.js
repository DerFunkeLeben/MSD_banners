!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),"string"==typeof t?(console.warn("Animator expects HTML DOM Nodes",this),console.log("animator from bundle"),this._element=document.querySelector(t)):this._element=t,this.statePreffix=n&&" ".concat(n)||" state_",this.originClass=this._element.className}var t,r,o;return t=e,(r=[{key:"set",value:function(e){this._element.className=this.originClass+this.statePreffix+e,this.stateIndex=e}},{key:"get",value:function(){return this.stateIndex}}])&&n(t.prototype,r),o&&n(t,o),e}();e.exports=r},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);!function(){var e=document.querySelector(".container"),t=new o.a(e);t.set(0);setTimeout((function(){t.set(1);var e=setInterval((function(){var n=t.stateIndex;n<4?t.set(n+1):clearInterval(e)}),5e3)}),3e3)}()}]);