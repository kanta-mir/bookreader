!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}([function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n(26))},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var r=n(1);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(e,t,n){var r=n(11),o=n(12);e.exports=function(e){return r(o(e))}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){var r=n(3),o=n(15),i=n(10);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var r=n(0),o=n(9).f,i=n(6),u=n(30),c=n(8),f=n(37),l=n(47);e.exports=function(e,t){var n,s,a,p,d,v=e.target,h=e.global,y=e.stat;if(n=h?r:y?r[v]||c(v,{}):(r[v]||{}).prototype)for(s in t){if(p=t[s],a=e.noTargetGet?(d=o(n,s))&&d.value:n[s],!l(h?s:v+(y?".":"#")+s,e.forced)&&void 0!==a){if(typeof p==typeof a)continue;f(p,a)}(e.sham||a&&a.sham)&&i(p,"sham",!0),u(n,s,p,e)}}},function(e,t,n){var r=n(0),o=n(6);e.exports=function(e,t){try{o(r,e,t)}catch(n){r[e]=t}return t}},function(e,t,n){var r=n(3),o=n(27),i=n(10),u=n(4),c=n(13),f=n(2),l=n(14),s=Object.getOwnPropertyDescriptor;t.f=r?s:function(e,t){if(e=u(e),t=c(t,!0),l)try{return s(e,t)}catch(e){}if(f(e,t))return i(!o.f.call(e,t),e[t])}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){var r=n(1),o=n(28),i="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}},function(e,t,n){var r=n(5);e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,t,n){var r=n(3),o=n(1),i=n(29);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(e,t,n){var r=n(3),o=n(14),i=n(16),u=n(13),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(i(e),t=u(t,!0),i(n),o)try{return c(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var r=n(5);e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},function(e,t,n){var r=n(18),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return o.call(e)}),e.exports=r.inspectSource},function(e,t,n){var r=n(0),o=n(8),i=r["__core-js_shared__"]||o("__core-js_shared__",{});e.exports=i},function(e,t){e.exports={}},function(e,t,n){var r=n(4),o=n(43),i=n(44),u=function(e){return function(t,n,u){var c,f=r(t),l=o(f.length),s=i(u,l);if(e&&n!=n){for(;l>s;)if((c=f[s++])!=c)return!0}else for(;l>s;s++)if((e||s in f)&&f[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:u(!0),indexOf:u(!1)}},function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},function(e,t,n){"use strict";n.r(t),n.d(t,"getFullscreenElement",(function(){return o})),n.d(t,"isFullscreenActive",(function(){return i})),n.d(t,"exitFullscreen",(function(){return u})),n.d(t,"requestFullscreen",(function(){return c})),n.d(t,"fullscreenAllowed",(function(){return f})),n.d(t,"bindFullscreenChangeListener",(function(){return l})),n.d(t,"isMobile",(function(){return s}));var r;n(25),n(49),n(50);if(!s()){jQuery.extend(BookReader.defaultOptions,{enableVendorFullscreenPlugin:!0}),BookReader.prototype.setup=(r=BookReader.prototype.setup,function(e){r.call(this,e),this.isVendorFullscreenActive=!1}),BookReader.prototype.getInitialMode=function(e){return function(t){var n=e.call(this,t);return this.isVendorFullscreenActive&&(n=this.constMode1up),n}}(BookReader.prototype.getInitialMode),BookReader.prototype.init=function(e){return function(){e.call(this),f()&&l(this,(function(e){e.data.resize(),e.data.updateBrClasses();var t=$("#cboxOverlay"),n=$("#colorbox");i()?$(o()).append(t).append(n):$(document.body).append(t).append(n)}))}}(BookReader.prototype.init),BookReader.prototype.enterFullWindow=function(){var e=this;this.refs.$brContainer.css("opacity",0),$(window).width()<=this.onePageMinBreakpoint&&this.switchMode(this.constMode1up),this.isVendorFullscreenActive=!0,this.updateBrClasses(),this.resize(),this.jumpToIndex(this.currentIndex()),this.refs.$brContainer.animate({opacity:1},400,"linear"),$(document).on("keyup.".concat(".bookreader_vendor-fullscreen"),(function(t){27===t.keyCode&&e.exitFullScreen()}))},BookReader.prototype.exitFullWindow=function(){this.refs.$brContainer.css("opacity",0),$(document).off("keyup.bookreader_vendor-fullscreen"),this.isFullscreenActive=!1,this.updateBrClasses(),this.resize(),this.refs.$brContainer.animate({opacity:1},400,"linear")},BookReader.prototype.isFullscreen=function(){return i()||this.isVendorFullscreenActive},BookReader.prototype.toggleFullscreen=function(){this.isFullscreen()?f()?u():this.exitFullWindow():f()?c(this.refs.$br[0]):this.enterFullWindow()},BookReader.util.isMobile=s,BookReader.util.getFullscreenElement=o,BookReader.util.bindFullscreenChangeListener=l,BookReader.util.fullscreenAllowed=f,BookReader.util.requestFullscreen=c,BookReader.util.exitFullscreen=u,BookReader.util.isFullscreenActive=i}function o(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}function i(){var e=o();return null!=e}function u(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function c(e){e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function f(){return document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullScreenEnabled}function l(e,t){var n="fullscreenchange ",r=$.trim(n+["webkit","moz","ms"].join(n)+n);$(document).bind(r,e,t)}function s(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}},function(e,t,n){"use strict";var r=n(7),o=n(20).indexOf,i=n(22),u=n(48),c=[].indexOf,f=!!c&&1/[1].indexOf(1,-0)<0,l=i("indexOf"),s=u("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:f||!l||!s},{indexOf:function(e){return f?c.apply(this,arguments)||0:o(this,e,arguments.length>1?arguments[1]:void 0)}})},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var r=n(0),o=n(5),i=r.document,u=o(i)&&o(i.createElement);e.exports=function(e){return u?i.createElement(e):{}}},function(e,t,n){var r=n(0),o=n(6),i=n(2),u=n(8),c=n(17),f=n(31),l=f.get,s=f.enforce,a=String(String).split("String");(e.exports=function(e,t,n,c){var f=!!c&&!!c.unsafe,l=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof t||i(n,"name")||o(n,"name",t),s(n).source=a.join("string"==typeof t?t:"")),e!==r?(f?!p&&e[t]&&(l=!0):delete e[t],l?e[t]=n:o(e,t,n)):l?e[t]=n:u(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||c(this)}))},function(e,t,n){var r,o,i,u=n(32),c=n(0),f=n(5),l=n(6),s=n(2),a=n(33),p=n(19),d=c.WeakMap;if(u){var v=new d,h=v.get,y=v.has,m=v.set;r=function(e,t){return m.call(v,e,t),t},o=function(e){return h.call(v,e)||{}},i=function(e){return y.call(v,e)}}else{var b=a("state");p[b]=!0,r=function(e,t){return l(e,b,t),t},o=function(e){return s(e,b)?e[b]:{}},i=function(e){return s(e,b)}}e.exports={set:r,get:o,has:i,enforce:function(e){return i(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!f(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}}},function(e,t,n){var r=n(0),o=n(17),i=r.WeakMap;e.exports="function"==typeof i&&/native code/.test(o(i))},function(e,t,n){var r=n(34),o=n(36),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},function(e,t,n){var r=n(35),o=n(18);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(e,t){e.exports=!1},function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},function(e,t,n){var r=n(2),o=n(38),i=n(9),u=n(15);e.exports=function(e,t){for(var n=o(t),c=u.f,f=i.f,l=0;l<n.length;l++){var s=n[l];r(e,s)||c(e,s,f(t,s))}}},function(e,t,n){var r=n(39),o=n(41),i=n(46),u=n(16);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(u(e)),n=i.f;return n?t.concat(n(e)):t}},function(e,t,n){var r=n(40),o=n(0),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e])||i(o[e]):r[e]&&r[e][t]||o[e]&&o[e][t]}},function(e,t,n){var r=n(0);e.exports=r},function(e,t,n){var r=n(42),o=n(45).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},function(e,t,n){var r=n(2),o=n(4),i=n(20).indexOf,u=n(19);e.exports=function(e,t){var n,c=o(e),f=0,l=[];for(n in c)!r(u,n)&&r(c,n)&&l.push(n);for(;t.length>f;)r(c,n=t[f++])&&(~i(l,n)||l.push(n));return l}},function(e,t,n){var r=n(21),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,t,n){var r=n(21),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){var r=n(1),o=/#|\.prototype\./,i=function(e,t){var n=c[u(e)];return n==l||n!=f&&("function"==typeof t?r(t):!!t)},u=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",l=i.POLYFILL="P";e.exports=i},function(e,t,n){var r=n(3),o=n(1),i=n(2),u=Object.defineProperty,c={},f=function(e){throw e};e.exports=function(e,t){if(i(c,e))return c[e];t||(t={});var n=[][e],l=!!i(t,"ACCESSORS")&&t.ACCESSORS,s=i(t,0)?t[0]:f,a=i(t,1)?t[1]:void 0;return c[e]=!!n&&!o((function(){if(l&&!r)return!0;var e={length:-1};l?u(e,1,{enumerable:!0,get:f}):e[1]=1,n.call(e,s,a)}))}},function(e,t,n){"use strict";var r=n(7),o=n(11),i=n(4),u=n(22),c=[].join,f=o!=Object,l=u("join",",");r({target:"Array",proto:!0,forced:f||!l},{join:function(e){return c.call(i(this),void 0===e?",":e)}})},function(e,t,n){"use strict";var r=n(7),o=n(51).trim;r({target:"String",proto:!0,forced:n(52)("trim")},{trim:function(){return o(this)}})},function(e,t,n){var r=n(12),o="["+n(23)+"]",i=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),c=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(u,"")),n}};e.exports={start:c(1),end:c(2),trim:c(3)}},function(e,t,n){var r=n(1),o=n(23);e.exports=function(e){return r((function(){return!!o[e]()||"​᠎"!="​᠎"[e]()||o[e].name!==e}))}}]);
//# sourceMappingURL=plugin.vendor-fullscreen.js.map