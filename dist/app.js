!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n(2),e.exports=n(17)},function(e,t,n){n(3),n(4)},function(e,t){var n=document.querySelector(".alert");document.querySelector(".alert .alert-close a").addEventListener("click",function(e){e.preventDefault(),n.classList.remove("active")})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),o=n.n(r),i=!1,c=!1,a=!1,u=document.querySelector(".alert"),l=document.querySelector(".add-board-card");function d(){var e=[],t=void 0;document.querySelectorAll(".board-card-body").forEach(function(n){e.push(n),(t=o()(e)).on("drag",function(e,t){s(t.closest(".board-card"),"add-card")}),t.on("drop",function(e,t,n){s(t.closest(".board-card"),"save-card")})})}function s(e,t){e.classList.remove("add-card","save-card","save-column"),e.classList.add(t)}function f(e){e.addEventListener("click",function(){var t=e.closest(".board-card").querySelector(".board-card-body"),n=document.createElement("div");n.className="board-card-body-item",n.innerHTML='<textarea class="board-card__text board-card__value" placeholder="Введите название карточки"></textarea>',s(e.closest(".board-card"),"save-card"),t.append(n),document.querySelectorAll(".board-card__text").forEach(function(e){e.classList.remove("is-selected"),e.addEventListener("focus",function(){a?e.readOnly=!0:(e.readOnly=!1,e.classList.add("is-selected"),s(e.closest(".board-card"),"save-card"),i=!0)}),e.addEventListener("blur",function(){a||(c=!0)}),e.addEventListener("input",function(){e.style.height="45px",e.style.height=e.scrollHeight+"px"})});var r=t.querySelectorAll(".board-card__text");r[r.length-1].focus(),d()})}l.addEventListener("click",function(){if(!i){var e=document.createElement("div");e.className="board-column col-12 col-md-6 col-lg-4 col-xl-3",e.innerHTML='<div class="board-card save-column"><div class="board-card-header"><input type="text" class="board-card__name board-card__value" placeholder="Введите название колонки"></div><div class="board-card-body"><div class="board-card-body-item"></div></div><div class="board-card-footer"><div class="board-card-footer-item board-card-footer-item-add-card"><div class="board-icon board-icon--add"><div class="line line--left"></div><div class="line line--right"></div></div><div class="board-card-footer__text">Добавить еще одну карточку</div></div><div class="board-card-footer-item board-card-footer-item-save-card board-card-footer-item--save"><a href="#" class="btn btn-primary">Сохранить карточку</a><div class="board-icon board-icon--remove"><div class="line line--left"></div><div class="line line--right"></div></div></div><div class="board-card-footer-item board-card-footer-item-save-column board-card-footer-item--save"><a href="#" class="btn btn-primary">Сохранить колонку</a><div class="board-icon board-icon--remove"><div class="line line--left"></div><div class="line line--right"></div></div></div></div></div>',l.closest(".board-column").before(e),e.querySelector(".board-card__name").focus(),i=!0,document.querySelectorAll(".board-card-footer-item-save-column a").forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var n=e.closest(".board-card").querySelector(".board-card__name");""!==n.value?(n.classList.remove("board-card__value"),s(e.closest(".board-card"),"add-card"),i=!1,a=!1):(u.classList.add("active"),u.querySelector(".alert-text").innerText="Название колонки обязательное",setTimeout(function(){u.classList.remove("active")},8e3))})}),document.querySelectorAll(".board-card-footer-item-save-column .board-icon").forEach(function(e){e.addEventListener("click",function(){e.closest(".board-column").remove(),i=!1,a=!1})}),f(e.querySelector(".board-card-footer-item-add-card")),document.querySelectorAll(".board-card-footer-item-save-card .board-icon").forEach(function(e){e.addEventListener("click",function(){e.closest(".board-card").querySelector(".board-card__text.is-selected").closest(".board-card-body-item").remove(),s(e.closest(".board-card"),"add-card"),c=!1,i=!1})}),document.querySelectorAll(".board-card-footer-item-save-card a").forEach(function(e){e.addEventListener("click",function(t){t.preventDefault();var n=e.closest(".board-card").querySelectorAll(".board-card__text");Array.from(n).find(function(e){return""===e.value})?(u.classList.add("active"),u.querySelector(".alert-text").innerText="Название карточки обязательное",setTimeout(function(){u.classList.remove("active")},8e3)):(c=!1,i=!1,s(e.closest(".board-card"),"add-card"))})}),document.querySelectorAll(".board-card__name").forEach(function(e){e.addEventListener("focus",function(){c?e.readOnly=!0:(e.readOnly=!1,e.classList.add("board-card__value"),s(e.closest(".board-card"),"save-column"),i=!0)}),e.addEventListener("blur",function(){c||(a=!0)})}),d()}})},function(e,t,n){"use strict";(function(t){var r=n(6),o=n(13),i=n(16),c=document,a=c.documentElement;function u(e,n,r,i){t.navigator.pointerEnabled?o[n](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[r],i):t.navigator.msPointerEnabled?o[n](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[r],i):(o[n](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[r],i),o[n](e,r,i))}function l(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var t=e.button;return void 0!==t?1&t?1:2&t?3:4&t?2:0:void 0}function d(e,n){return void 0!==t[n]?t[n]:a.clientHeight?a[e]:c.body[e]}function s(e,t,n){var r,o=e||{},i=o.className;return o.className+=" gu-hide",r=c.elementFromPoint(t,n),o.className=i,r}function f(){return!1}function v(){return!0}function m(e){return e.width||e.right-e.left}function p(e){return e.height||e.bottom-e.top}function h(e){return e.parentNode===c?null:e.parentNode}function g(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||function e(t){if(!t)return!1;if("false"===t.contentEditable)return!1;if("true"===t.contentEditable)return!0;return e(h(t))}(e)}function b(e){return e.nextElementSibling||function(){var t=e;do{t=t.nextSibling}while(t&&1!==t.nodeType);return t}()}function y(e,t){var n=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(t),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in n)&&r[e]in n&&(e=r[e]),n[e]}e.exports=function(e,t){var n,E,T,S,w,x,_,L,O,C,I;1===arguments.length&&!1===Array.isArray(e)&&(t=e,e=[]);var q,A=null,k=t||{};void 0===k.moves&&(k.moves=v),void 0===k.accepts&&(k.accepts=v),void 0===k.invalid&&(k.invalid=function(){return!1}),void 0===k.containers&&(k.containers=e||[]),void 0===k.isContainer&&(k.isContainer=f),void 0===k.copy&&(k.copy=!1),void 0===k.copySortSource&&(k.copySortSource=!1),void 0===k.revertOnSpill&&(k.revertOnSpill=!1),void 0===k.removeOnSpill&&(k.removeOnSpill=!1),void 0===k.direction&&(k.direction="vertical"),void 0===k.ignoreInputTextSelection&&(k.ignoreInputTextSelection=!0),void 0===k.mirrorContainer&&(k.mirrorContainer=c.body);var N=r({containers:k.containers,start:function(e){var t=F(e);t&&R(t)},end:H,cancel:V,remove:z,destroy:function(){P(!0),K({})},canMove:function(e){return!!F(e)},dragging:!1});return!0===k.removeOnSpill&&N.on("over",function(e){i.rm(e,"gu-hide")}).on("out",function(e){N.dragging&&i.add(e,"gu-hide")}),P(),N;function M(e){return-1!==N.containers.indexOf(e)||k.isContainer(e)}function P(e){var t=e?"remove":"add";u(a,t,"mousedown",B),u(a,t,"mouseup",K)}function X(e){u(a,e?"remove":"add","mousemove",D)}function j(e){var t=e?"remove":"add";o[t](a,"selectstart",Y),o[t](a,"click",Y)}function Y(e){q&&e.preventDefault()}function B(e){if(x=e.clientX,_=e.clientY,1===l(e)&&!e.metaKey&&!e.ctrlKey){var t=e.target,n=F(t);n&&(q=n,X(),"mousedown"===e.type&&(g(t)?t.focus():e.preventDefault()))}}function D(e){if(q)if(0!==l(e)){if(void 0===e.clientX||e.clientX!==x||void 0===e.clientY||e.clientY!==_){if(k.ignoreInputTextSelection){var t=y("clientX",e),r=y("clientY",e);if(g(c.elementFromPoint(t,r)))return}var o=q;X(!0),j(),H(),R(o);var s,f={left:(s=T.getBoundingClientRect()).left+d("scrollLeft","pageXOffset"),top:s.top+d("scrollTop","pageYOffset")};S=y("pageX",e)-f.left,w=y("pageY",e)-f.top,i.add(C||T,"gu-transit"),function(){if(!n){var e=T.getBoundingClientRect();(n=T.cloneNode(!0)).style.width=m(e)+"px",n.style.height=p(e)+"px",i.rm(n,"gu-transit"),i.add(n,"gu-mirror"),k.mirrorContainer.appendChild(n),u(a,"add","mousemove",W),i.add(k.mirrorContainer,"gu-unselectable"),N.emit("cloned",n,T,"mirror")}}(),W(e)}}else K({})}function F(e){if(!(N.dragging&&n||M(e))){for(var t=e;h(e)&&!1===M(h(e));){if(k.invalid(e,t))return;if(!(e=h(e)))return}var r=h(e);if(r&&!k.invalid(e,t)&&k.moves(e,r,t,b(e)))return{item:e,source:r}}}function R(e){var t,n;t=e.item,n=e.source,("boolean"==typeof k.copy?k.copy:k.copy(t,n))&&(C=e.item.cloneNode(!0),N.emit("cloned",C,e.item,"copy")),E=e.source,T=e.item,L=O=b(e.item),N.dragging=!0,N.emit("drag",T,E)}function H(){if(N.dragging){var e=C||T;U(e,h(e))}}function $(){q=!1,X(!0),j(!0)}function K(e){if($(),N.dragging){var t=C||T,r=y("clientX",e),o=y("clientY",e),i=Q(s(n,r,o),r,o);i&&(C&&k.copySortSource||!C||i!==E)?U(t,i):k.removeOnSpill?z():V()}}function U(e,t){var n=h(e);C&&k.copySortSource&&t===E&&n.removeChild(T),J(t)?N.emit("cancel",e,E,E):N.emit("drop",e,t,E,O),G()}function z(){if(N.dragging){var e=C||T,t=h(e);t&&t.removeChild(e),N.emit(C?"cancel":"remove",e,t,E),G()}}function V(e){if(N.dragging){var t=arguments.length>0?e:k.revertOnSpill,n=C||T,r=h(n),o=J(r);!1===o&&t&&(C?r&&r.removeChild(C):E.insertBefore(n,L)),o||t?N.emit("cancel",n,E,E):N.emit("drop",n,r,E,O),G()}}function G(){var e=C||T;$(),n&&(i.rm(k.mirrorContainer,"gu-unselectable"),u(a,"remove","mousemove",W),h(n).removeChild(n),n=null),e&&i.rm(e,"gu-transit"),I&&clearTimeout(I),N.dragging=!1,A&&N.emit("out",e,A,E),N.emit("dragend",e),E=T=C=L=O=I=A=null}function J(e,t){var r;return r=void 0!==t?t:n?O:b(C||T),e===E&&r===L}function Q(e,t,n){for(var r=e;r&&!o();)r=h(r);return r;function o(){if(!1===M(r))return!1;var o=Z(r,e),i=ee(r,o,t,n);return!!J(r,i)||k.accepts(T,r,E,i)}}function W(e){if(n){e.preventDefault();var t=y("clientX",e),r=y("clientY",e),o=t-S,i=r-w;n.style.left=o+"px",n.style.top=i+"px";var c=C||T,a=s(n,t,r),u=Q(a,t,r),l=null!==u&&u!==A;(l||null===u)&&(A&&m("out"),A=u,l&&m("over"));var d=h(c);if(u!==E||!C||k.copySortSource){var f,v=Z(u,a);if(null!==v)f=ee(u,v,t,r);else{if(!0!==k.revertOnSpill||C)return void(C&&d&&d.removeChild(c));f=L,u=E}(null===f&&l||f!==c&&f!==b(c))&&(O=f,u.insertBefore(c,f),N.emit("shadow",c,u,E))}else d&&d.removeChild(c)}function m(e){N.emit(e,c,A,E)}}function Z(e,t){for(var n=t;n!==e&&h(n)!==e;)n=h(n);return n===a?null:n}function ee(e,t,n,r){var o,i="horizontal"===k.direction;return t!==e?(o=t.getBoundingClientRect(),c(i?n>o.left+m(o)/2:r>o.top+p(o)/2)):function(){var t,o,c,a=e.children.length;for(t=0;t<a;t++){if(o=e.children[t],c=o.getBoundingClientRect(),i&&c.left+c.width/2>n)return o;if(!i&&c.top+c.height/2>r)return o}return null}();function c(e){return e?b(t):t}}}}).call(t,n(0))},function(e,t,n){"use strict";var r=n(7),o=n(8);e.exports=function(e,t){var n=t||{},i={};return void 0===e&&(e={}),e.on=function(t,n){return i[t]?i[t].push(n):i[t]=[n],e},e.once=function(t,n){return n._once=!0,e.on(t,n),e},e.off=function(t,n){var r=arguments.length;if(1===r)delete i[t];else if(0===r)i={};else{var o=i[t];if(!o)return e;o.splice(o.indexOf(n),1)}return e},e.emit=function(){var t=r(arguments);return e.emitterSnapshot(t.shift()).apply(this,t)},e.emitterSnapshot=function(t){var c=(i[t]||[]).slice(0);return function(){var i=r(arguments),a=this||e;if("error"===t&&!1!==n.throws&&!c.length)throw 1===i.length?i[0]:i;return c.forEach(function(r){n.async?o(r,i,a):r.apply(a,i),r._once&&e.off(t,r)}),e}},e}},function(e,t){e.exports=function(e,t){return Array.prototype.slice.call(e,t)}},function(e,t,n){"use strict";var r=n(9);e.exports=function(e,t,n){e&&r(function(){e.apply(n||null,t||[])})}},function(e,t,n){(function(t){var n;n="function"==typeof t?function(e){t(e)}:function(e){setTimeout(e,0)},e.exports=n}).call(t,n(10).setImmediate)},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(11),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(t,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,c,a,u=1,l={},d=!1,s=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){m(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){m(e.data)},r=function(e){i.port2.postMessage(e)}):s&&"onreadystatechange"in s.createElement("script")?(o=s.documentElement,r=function(e){var t=s.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(m,0,e)}:(c="setImmediate$"+Math.random()+"$",a=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(c)&&m(+t.data.slice(c.length))},e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),r=function(t){e.postMessage(c+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return l[u]=o,r(u),u++},f.clearImmediate=v}function v(e){delete l[e]}function m(e){if(d)setTimeout(m,0,e);else{var t=l[e];if(t){d=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{v(e),d=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(0),n(12))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var u,l=[],d=!1,s=-1;function f(){d&&u&&(d=!1,u.length?l=u.concat(l):s=-1,l.length&&v())}function v(){if(!d){var e=a(f);d=!0;for(var t=l.length;t;){for(u=l,l=[];++s<t;)u&&u[s].run();s=-1,t=l.length}u=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||d||a(v)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=p,o.addListener=p,o.once=p,o.off=p,o.removeListener=p,o.removeAllListeners=p,o.emit=p,o.prependListener=p,o.prependOnceListener=p,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";(function(t){var r=n(14),o=n(15),i=t.document,c=function(e,t,n,r){return e.addEventListener(t,n,r)},a=function(e,t,n,r){return e.removeEventListener(t,n,r)},u=[];function l(e,t,n){var r=function(e,t,n){var r,o;for(r=0;r<u.length;r++)if((o=u[r]).element===e&&o.type===t&&o.fn===n)return r}(e,t,n);if(r){var o=u[r].wrapper;return u.splice(r,1),o}}t.addEventListener||(c=function(e,n,r){return e.attachEvent("on"+n,function(e,n,r){var o=l(e,n,r)||function(e,n,r){return function(n){var o=n||t.event;o.target=o.target||o.srcElement,o.preventDefault=o.preventDefault||function(){o.returnValue=!1},o.stopPropagation=o.stopPropagation||function(){o.cancelBubble=!0},o.which=o.which||o.keyCode,r.call(e,o)}}(e,0,r);return u.push({wrapper:o,element:e,type:n,fn:r}),o}(e,n,r))},a=function(e,t,n){var r=l(e,t,n);if(r)return e.detachEvent("on"+t,r)}),e.exports={add:c,remove:a,fabricate:function(e,t,n){var c=-1===o.indexOf(t)?new r(t,{detail:n}):function(){var e;i.createEvent?(e=i.createEvent("Event")).initEvent(t,!0,!0):i.createEventObject&&(e=i.createEventObject());return e}();e.dispatchEvent?e.dispatchEvent(c):e.fireEvent("on"+t,c)}}}).call(t,n(0))},function(e,t,n){(function(t){var n=t.CustomEvent;e.exports=function(){try{var e=new n("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(e){}return!1}()?n:"function"==typeof document.createEvent?function(e,t){var n=document.createEvent("CustomEvent");return t?n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail):n.initCustomEvent(e,!1,!1,void 0),n}:function(e,t){var n=document.createEventObject();return n.type=e,t?(n.bubbles=Boolean(t.bubbles),n.cancelable=Boolean(t.cancelable),n.detail=t.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n}}).call(t,n(0))},function(e,t,n){"use strict";(function(t){var n=[],r="",o=/^on/;for(r in t)o.test(r)&&n.push(r.slice(2));e.exports=n}).call(t,n(0))},function(e,t,n){"use strict";var r={},o="(?:^|\\s)",i="(?:\\s|$)";function c(e){var t=r[e];return t?t.lastIndex=0:r[e]=t=new RegExp(o+e+i,"g"),t}e.exports={add:function(e,t){var n=e.className;n.length?c(t).test(n)||(e.className+=" "+t):e.className=t},rm:function(e,t){e.className=e.className.replace(c(t)," ").trim()}}},function(e,t){}]);