(window.webpackJsonp=window.webpackJsonp||[]).push([[11,12,13,14,15,16],{326:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},327:function(t,e,n){var o=n(16),i=Date.prototype,r=i.toString,s=i.getTime;"Invalid Date"!=String(new Date(NaN))&&o(i,"toString",(function(){var t=s.call(this);return t==t?r.call(this):"Invalid Date"}))},328:function(t,e,n){var o=n(26),i=n(20),r="["+n(326)+"]",s=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),c=function(t){return function(e){var n=i(o(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},329:function(t,e,n){var o=n(0),i=n(332);o({global:!0,forced:parseInt!=i},{parseInt:i})},331:function(t,e,n){"use strict";var o=n(178),i=n(6),r=n(15),s=n(20),a=n(26),c=n(49),l=n(179),u=n(180);o("match",(function(t,e,n){return[function(e){var n=a(this),o=null==e?void 0:c(e,t);return o?o.call(e,n):new RegExp(e)[t](s(n))},function(t){var o=i(this),a=s(t),c=n(e,o,a);if(c.done)return c.value;if(!o.global)return u(o,a);var h=o.unicode;o.lastIndex=0;for(var p,m=[],d=0;null!==(p=u(o,a));){var f=s(p[0]);m[d]=f,""===f&&(o.lastIndex=l(a,r(o.lastIndex),h)),d++}return 0===d?null:m}]}))},332:function(t,e,n){var o=n(1),i=n(2),r=n(20),s=n(328).trim,a=n(326),c=o.parseInt,l=o.Symbol,u=l&&l.iterator,h=/^[+-]?0[Xx]/,p=8!==c(a+"08")||22!==c(a+"0x16")||u&&!i((function(){c(Object(u))}));t.exports=p?function(t,e){var n=s(r(t));return c(n,e>>>0||(h.test(n)?16:10))}:c},333:function(t,e,n){var o=n(4),i=n(5),r=n(78);t.exports=function(t,e,n){var s,a;return r&&o(s=e.constructor)&&s!==n&&i(a=s.prototype)&&a!==n.prototype&&r(t,a),t}},334:function(t,e,n){"use strict";var o=n(178),i=n(175),r=n(6),s=n(26),a=n(104),c=n(179),l=n(15),u=n(20),h=n(49),p=n(180),m=n(79),d=n(177),f=n(2),b=d.UNSUPPORTED_Y,g=[].push,v=Math.min;o("split",(function(t,e,n){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var o=u(s(this)),r=void 0===n?4294967295:n>>>0;if(0===r)return[];if(void 0===t)return[o];if(!i(t))return e.call(o,t,r);for(var a,c,l,h=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,f=new RegExp(t.source,p+"g");(a=m.call(f,o))&&!((c=f.lastIndex)>d&&(h.push(o.slice(d,a.index)),a.length>1&&a.index<o.length&&g.apply(h,a.slice(1)),l=a[0].length,d=c,h.length>=r));)f.lastIndex===a.index&&f.lastIndex++;return d===o.length?!l&&f.test("")||h.push(""):h.push(o.slice(d)),h.length>r?h.slice(0,r):h}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=s(this),r=null==e?void 0:h(e,t);return r?r.call(e,i,n):o.call(u(i),e,n)},function(t,i){var s=r(this),h=u(t),m=n(o,s,h,i,o!==e);if(m.done)return m.value;var d=a(s,RegExp),f=s.unicode,g=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(b?"g":"y"),y=new d(b?"^(?:"+s.source+")":s,g),x=void 0===i?4294967295:i>>>0;if(0===x)return[];if(0===h.length)return null===p(y,h)?[h]:[];for(var E=0,w=0,j=[];w<h.length;){y.lastIndex=b?0:w;var O,T=p(y,b?h.slice(w):h);if(null===T||(O=v(l(y.lastIndex+(b?w:0)),h.length))===E)w=c(h,w,f);else{if(j.push(h.slice(E,w)),j.length===x)return j;for(var A=1;A<=T.length-1;A++)if(j.push(T[A]),j.length===x)return j;w=E=O}}return j.push(h.slice(E)),j}]}),!!f((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),b)},335:function(t,e,n){var o=n(7),i=n(1),r=n(103),s=n(333),a=n(21),c=n(9).f,l=n(51).f,u=n(175),h=n(20),p=n(176),m=n(177),d=n(16),f=n(2),b=n(8),g=n(27).enforce,v=n(182),y=n(3),x=n(183),E=n(184),w=y("match"),j=i.RegExp,O=j.prototype,T=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,A=/a/g,P=/a/g,L=new j(A)!==A,I=m.UNSUPPORTED_Y,S=o&&(!L||I||x||E||f((function(){return P[w]=!1,j(A)!=A||j(P)==P||"/a/i"!=j(A,"i")})));if(r("RegExp",S)){for(var N=function(t,e){var n,o,i,r,c,l,m=this instanceof N,d=u(t),f=void 0===e,v=[],y=t;if(!m&&d&&f&&t.constructor===N)return t;if((d||t instanceof N)&&(t=t.source,f&&(e="flags"in y?y.flags:p.call(y))),t=void 0===t?"":h(t),e=void 0===e?"":h(e),y=t,x&&"dotAll"in A&&(o=!!e&&e.indexOf("s")>-1)&&(e=e.replace(/s/g,"")),n=e,I&&"sticky"in A&&(i=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,"")),E&&(t=(r=function(t){for(var e,n=t.length,o=0,i="",r=[],s={},a=!1,c=!1,l=0,u="";o<=n;o++){if("\\"===(e=t.charAt(o)))e+=t.charAt(++o);else if("]"===e)a=!1;else if(!a)switch(!0){case"["===e:a=!0;break;case"("===e:T.test(t.slice(o+1))&&(o+=2,c=!0),i+=e,l++;continue;case">"===e&&c:if(""===u||b(s,u))throw new SyntaxError("Invalid capture group name");s[u]=!0,r.push([u,l]),c=!1,u="";continue}c?u+=e:i+=e}return[i,r]}(t))[0],v=r[1]),c=s(j(t,e),m?this:O,N),(o||i||v.length)&&(l=g(c),o&&(l.dotAll=!0,l.raw=N(function(t){for(var e,n=t.length,o=0,i="",r=!1;o<=n;o++)"\\"!==(e=t.charAt(o))?r||"."!==e?("["===e?r=!0:"]"===e&&(r=!1),i+=e):i+="[\\s\\S]":i+=e+t.charAt(++o);return i}(t),n)),i&&(l.sticky=!0),v.length&&(l.groups=v)),t!==y)try{a(c,"source",""===y?"(?:)":y)}catch(t){}return c},M=function(t){t in N||c(N,t,{configurable:!0,get:function(){return j[t]},set:function(e){j[t]=e}})},R=l(j),C=0;R.length>C;)M(R[C++]);O.constructor=N,N.prototype=O,d(i,"RegExp",N)}v("RegExp")},336:function(t,e,n){"use strict";var o=n(76).PROPER,i=n(16),r=n(6),s=n(20),a=n(2),c=n(176),l=RegExp.prototype,u=l.toString,h=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),p=o&&"toString"!=u.name;(h||p)&&i(RegExp.prototype,"toString",(function(){var t=r(this),e=s(t.source),n=t.flags;return"/"+e+"/"+s(void 0===n&&t instanceof RegExp&&!("flags"in l)?c.call(t):n)}),{unsafe:!0})},338:function(t,e){var n=1..valueOf;t.exports=function(t){return n.call(t)}},339:function(t,e,n){"use strict";var o=n(48),i=n(20),r=n(26);t.exports=function(t){var e=i(r(this)),n="",s=o(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(n+=e);return n}},340:function(t,e,n){var o=n(1),i=n(2),r=n(20),s=n(328).trim,a=n(326),c=o.parseFloat,l=o.Symbol,u=l&&l.iterator,h=1/c(a+"-0")!=-1/0||u&&!i((function(){c(Object(u))}));t.exports=h?function(t){var e=s(r(t)),n=c(e);return 0===n&&"-"==e.charAt(0)?-0:n}:c},341:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n(325);const i={type:"change"},r={type:"start"},s={type:"end"};class a extends o.u{constructor(t,e){super(),void 0===e&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new o.Tb,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o.S.ROTATE,MIDDLE:o.S.DOLLY,RIGHT:o.S.PAN},this.touches={ONE:o.Kb.ROTATE,TWO:o.Kb.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",G),this._domElementKeyEvents=t},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(i),n.update(),c=a.NONE},this.update=function(){const e=new o.Tb,r=(new o.sb).setFromUnitVectors(t.up,new o.Tb(0,1,0)),s=r.clone().invert(),f=new o.Tb,b=new o.sb,g=2*Math.PI;return function(){const t=n.object.position;e.copy(t).sub(n.target),e.applyQuaternion(r),u.setFromVector3(e),n.autoRotate&&c===a.NONE&&P(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(u.theta+=h.theta*n.dampingFactor,u.phi+=h.phi*n.dampingFactor):(u.theta+=h.theta,u.phi+=h.phi);let o=n.minAzimuthAngle,v=n.maxAzimuthAngle;return isFinite(o)&&isFinite(v)&&(o<-Math.PI?o+=g:o>Math.PI&&(o-=g),v<-Math.PI?v+=g:v>Math.PI&&(v-=g),u.theta=o<=v?Math.max(o,Math.min(v,u.theta)):u.theta>(o+v)/2?Math.max(o,u.theta):Math.min(v,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),u.radius*=p,u.radius=Math.max(n.minDistance,Math.min(n.maxDistance,u.radius)),!0===n.enableDamping?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),e.setFromSpherical(u),e.applyQuaternion(s),t.copy(n.target).add(e),n.object.lookAt(n.target),!0===n.enableDamping?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),m.set(0,0,0)),p=1,!!(d||f.distanceToSquared(n.object.position)>l||8*(1-b.dot(n.object.quaternion))>l)&&(n.dispatchEvent(i),f.copy(n.object.position),b.copy(n.object.quaternion),d=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",q),n.domElement.removeEventListener("pointerdown",_),n.domElement.removeEventListener("pointercancel",Z),n.domElement.removeEventListener("wheel",K),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",X),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",G)};const n=this,a={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=a.NONE;const l=1e-6,u=new o.Gb,h=new o.Gb;let p=1;const m=new o.Tb;let d=!1;const f=new o.Sb,b=new o.Sb,g=new o.Sb,v=new o.Sb,y=new o.Sb,x=new o.Sb,E=new o.Sb,w=new o.Sb,j=new o.Sb,O=[],T={};function A(){return Math.pow(.95,n.zoomSpeed)}function P(t){h.theta-=t}function L(t){h.phi-=t}const I=function(){const t=new o.Tb;return function(e,n){t.setFromMatrixColumn(n,0),t.multiplyScalar(-e),m.add(t)}}(),S=function(){const t=new o.Tb;return function(e,o){!0===n.screenSpacePanning?t.setFromMatrixColumn(o,1):(t.setFromMatrixColumn(o,0),t.crossVectors(n.object.up,t)),t.multiplyScalar(e),m.add(t)}}(),N=function(){const t=new o.Tb;return function(e,o){const i=n.domElement;if(n.object.isPerspectiveCamera){const r=n.object.position;t.copy(r).sub(n.target);let s=t.length();s*=Math.tan(n.object.fov/2*Math.PI/180),I(2*e*s/i.clientHeight,n.object.matrix),S(2*o*s/i.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(e*(n.object.right-n.object.left)/n.object.zoom/i.clientWidth,n.object.matrix),S(o*(n.object.top-n.object.bottom)/n.object.zoom/i.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function M(t){n.object.isPerspectiveCamera?p/=t:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*t)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(t){n.object.isPerspectiveCamera?p*=t:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/t)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function C(t){f.set(t.clientX,t.clientY)}function V(t){v.set(t.clientX,t.clientY)}function k(){if(1===O.length)f.set(O[0].pageX,O[0].pageY);else{const t=.5*(O[0].pageX+O[1].pageX),e=.5*(O[0].pageY+O[1].pageY);f.set(t,e)}}function D(){if(1===O.length)v.set(O[0].pageX,O[0].pageY);else{const t=.5*(O[0].pageX+O[1].pageX),e=.5*(O[0].pageY+O[1].pageY);v.set(t,e)}}function F(){const t=O[0].pageX-O[1].pageX,e=O[0].pageY-O[1].pageY,n=Math.sqrt(t*t+e*e);E.set(0,n)}function z(t){if(1==O.length)b.set(t.pageX,t.pageY);else{const e=J(t),n=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);b.set(n,o)}g.subVectors(b,f).multiplyScalar(n.rotateSpeed);const e=n.domElement;P(2*Math.PI*g.x/e.clientHeight),L(2*Math.PI*g.y/e.clientHeight),f.copy(b)}function Y(t){if(1===O.length)y.set(t.pageX,t.pageY);else{const e=J(t),n=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);y.set(n,o)}x.subVectors(y,v).multiplyScalar(n.panSpeed),N(x.x,x.y),v.copy(y)}function U(t){const e=J(t),o=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(o*o+i*i);w.set(0,r),j.set(0,Math.pow(w.y/E.y,n.zoomSpeed)),M(j.y),E.copy(w)}function _(t){!1!==n.enabled&&(0===O.length&&(n.domElement.setPointerCapture(t.pointerId),n.domElement.addEventListener("pointermove",H),n.domElement.addEventListener("pointerup",X)),function(t){O.push(t)}(t),"touch"===t.pointerType?function(t){switch(B(t),O.length){case 1:switch(n.touches.ONE){case o.Kb.ROTATE:if(!1===n.enableRotate)return;k(),c=a.TOUCH_ROTATE;break;case o.Kb.PAN:if(!1===n.enablePan)return;D(),c=a.TOUCH_PAN;break;default:c=a.NONE}break;case 2:switch(n.touches.TWO){case o.Kb.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&F(),n.enablePan&&D(),c=a.TOUCH_DOLLY_PAN;break;case o.Kb.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&F(),n.enableRotate&&k(),c=a.TOUCH_DOLLY_ROTATE;break;default:c=a.NONE}break;default:c=a.NONE}c!==a.NONE&&n.dispatchEvent(r)}(t):function(t){let e;switch(t.button){case 0:e=n.mouseButtons.LEFT;break;case 1:e=n.mouseButtons.MIDDLE;break;case 2:e=n.mouseButtons.RIGHT;break;default:e=-1}switch(e){case o.S.DOLLY:if(!1===n.enableZoom)return;!function(t){E.set(t.clientX,t.clientY)}(t),c=a.DOLLY;break;case o.S.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===n.enablePan)return;V(t),c=a.PAN}else{if(!1===n.enableRotate)return;C(t),c=a.ROTATE}break;case o.S.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===n.enableRotate)return;C(t),c=a.ROTATE}else{if(!1===n.enablePan)return;V(t),c=a.PAN}break;default:c=a.NONE}c!==a.NONE&&n.dispatchEvent(r)}(t))}function H(t){!1!==n.enabled&&("touch"===t.pointerType?function(t){switch(B(t),c){case a.TOUCH_ROTATE:if(!1===n.enableRotate)return;z(t),n.update();break;case a.TOUCH_PAN:if(!1===n.enablePan)return;Y(t),n.update();break;case a.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(t){n.enableZoom&&U(t),n.enablePan&&Y(t)}(t),n.update();break;case a.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(t){n.enableZoom&&U(t),n.enableRotate&&z(t)}(t),n.update();break;default:c=a.NONE}}(t):function(t){if(!1===n.enabled)return;switch(c){case a.ROTATE:if(!1===n.enableRotate)return;!function(t){b.set(t.clientX,t.clientY),g.subVectors(b,f).multiplyScalar(n.rotateSpeed);const e=n.domElement;P(2*Math.PI*g.x/e.clientHeight),L(2*Math.PI*g.y/e.clientHeight),f.copy(b),n.update()}(t);break;case a.DOLLY:if(!1===n.enableZoom)return;!function(t){w.set(t.clientX,t.clientY),j.subVectors(w,E),j.y>0?M(A()):j.y<0&&R(A()),E.copy(w),n.update()}(t);break;case a.PAN:if(!1===n.enablePan)return;!function(t){y.set(t.clientX,t.clientY),x.subVectors(y,v).multiplyScalar(n.panSpeed),N(x.x,x.y),v.copy(y),n.update()}(t)}}(t))}function X(t){!1!==n.enabled&&(t.pointerType,n.dispatchEvent(s),c=a.NONE,W(t),0===O.length&&(n.domElement.releasePointerCapture(t.pointerId),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",X)))}function Z(t){W(t)}function K(t){!1===n.enabled||!1===n.enableZoom||c!==a.NONE&&c!==a.ROTATE||(t.preventDefault(),n.dispatchEvent(r),function(t){t.deltaY<0?R(A()):t.deltaY>0&&M(A()),n.update()}(t),n.dispatchEvent(s))}function G(t){!1!==n.enabled&&!1!==n.enablePan&&function(t){let e=!1;switch(t.code){case n.keys.UP:N(0,n.keyPanSpeed),e=!0;break;case n.keys.BOTTOM:N(0,-n.keyPanSpeed),e=!0;break;case n.keys.LEFT:N(n.keyPanSpeed,0),e=!0;break;case n.keys.RIGHT:N(-n.keyPanSpeed,0),e=!0}e&&(t.preventDefault(),n.update())}(t)}function q(t){!1!==n.enabled&&t.preventDefault()}function W(t){delete T[t.pointerId];for(let e=0;e<O.length;e++)if(O[e].pointerId==t.pointerId)return void O.splice(e,1)}function B(t){let e=T[t.pointerId];void 0===e&&(e=new o.Sb,T[t.pointerId]=e),e.set(t.pageX,t.pageY)}function J(t){const e=t.pointerId===O[0].pointerId?O[1]:O[0];return T[e.pointerId]}n.domElement.addEventListener("contextmenu",q),n.domElement.addEventListener("pointerdown",_),n.domElement.addEventListener("pointercancel",Z),n.domElement.addEventListener("wheel",K,{passive:!1}),this.update()}}},342:function(t,e,n){"use strict";var o=n(0),i=n(48),r=n(338),s=n(339),a=n(2),c=1..toFixed,l=Math.floor,u=function(t,e,n){return 0===e?n:e%2==1?u(t,e-1,n*t):u(t*t,e/2,n)},h=function(t,e,n){for(var o=-1,i=n;++o<6;)i+=e*t[o],t[o]=i%1e7,i=l(i/1e7)},p=function(t,e){for(var n=6,o=0;--n>=0;)o+=t[n],t[n]=l(o/e),o=o%e*1e7},m=function(t){for(var e=6,n="";--e>=0;)if(""!==n||0===e||0!==t[e]){var o=String(t[e]);n=""===n?o:n+s.call("0",7-o.length)+o}return n};o({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){c.call({})}))},{toFixed:function(t){var e,n,o,a,c=r(this),l=i(t),d=[0,0,0,0,0,0],f="",b="0";if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(f="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*u(2,69,1))-69)<0?c*u(2,-e,1):c/u(2,e,1),n*=4503599627370496,(e=52-e)>0){for(h(d,0,n),o=l;o>=7;)h(d,1e7,0),o-=7;for(h(d,u(10,o,1),0),o=e-1;o>=23;)p(d,1<<23),o-=23;p(d,1<<o),h(d,1,1),p(d,2),b=m(d)}else h(d,0,n),h(d,1<<-e,0),b=m(d)+s.call("0",l);return b=l>0?f+((a=b.length)<=l?"0."+s.call("0",l-a)+b:b.slice(0,a-l)+"."+b.slice(a-l)):f+b}})},343:function(t,e,n){n(0)({target:"Function",proto:!0},{bind:n(188)})},344:function(t,e,n){var o=n(0),i=n(340);o({global:!0,forced:parseFloat!=i},{parseFloat:i})},345:function(t,e,n){var o=n(0),i=n(2),r=n(17),s=n(28).f,a=n(7),c=i((function(){s(1)}));o({target:"Object",stat:!0,forced:!a||c,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(r(t),e)}})},346:function(t,e,n){"use strict";var o=n(0),i=n(106),r=n(48),s=n(15),a=n(11),c=n(107),l=n(53),u=n(54)("splice"),h=Math.max,p=Math.min;o({target:"Array",proto:!0,forced:!u},{splice:function(t,e){var n,o,u,m,d,f,b=a(this),g=s(b.length),v=i(t,g),y=arguments.length;if(0===y?n=o=0:1===y?(n=0,o=g-v):(n=y-2,o=p(h(r(e),0),g-v)),g+n-o>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(u=c(b,o),m=0;m<o;m++)(d=v+m)in b&&l(u,m,b[d]);if(u.length=o,n<o){for(m=v;m<g-o;m++)f=m+n,(d=m+o)in b?b[f]=b[d]:delete b[f];for(m=g;m>g-o+n;m--)delete b[m-1]}else if(n>o)for(m=g-o;m>v;m--)f=m+n-1,(d=m+o-1)in b?b[f]=b[d]:delete b[f];for(m=0;m<n;m++)b[m+v]=arguments[m+2];return b.length=g-o+n,u}})},347:function(t,e,n){var o=n(0),i=n(7);o({target:"Object",stat:!0,forced:!i,sham:!i},{defineProperties:n(185)})},352:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n(325);const i=/^[og]\s*(.+)?/,r=/^mtllib /,s=/^usemtl /,a=/^usemap /,c=new o.Tb,l=new o.Tb,u=new o.Tb,h=new o.Tb,p=new o.Tb;function m(){const t={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=t,void(this.object.fromDeclaration=!1!==e);const n=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:!1!==e,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(t,e){const n=this._finalize(!1);n&&(n.inherited||n.groupCount<=0)&&this.materials.splice(n.index,1);const o={index:this.materials.length,name:t||"",mtllib:Array.isArray(e)&&e.length>0?e[e.length-1]:"",smooth:void 0!==n?n.smooth:this.smooth,groupStart:void 0!==n?n.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(t){const e={index:"number"==typeof t?t:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return e.clone=this.clone.bind(e),e}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(t){const e=this.currentMaterial();if(e&&-1===e.groupEnd&&(e.groupEnd=this.geometry.vertices.length/3,e.groupCount=e.groupEnd-e.groupStart,e.inherited=!1),t&&this.materials.length>1)for(let t=this.materials.length-1;t>=0;t--)this.materials[t].groupCount<=0&&this.materials.splice(t,1);return t&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),e}},n&&n.name&&"function"==typeof n.clone){const t=n.clone(0);t.inherited=!0,this.object.materials.push(t)}this.objects.push(this.object)},finalize:function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return 3*(n>=0?n-1:n+e/3)},parseNormalIndex:function(t,e){const n=parseInt(t,10);return 3*(n>=0?n-1:n+e/3)},parseUVIndex:function(t,e){const n=parseInt(t,10);return 2*(n>=0?n-1:n+e/2)},addVertex:function(t,e,n){const o=this.vertices,i=this.object.geometry.vertices;i.push(o[t+0],o[t+1],o[t+2]),i.push(o[e+0],o[e+1],o[e+2]),i.push(o[n+0],o[n+1],o[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const o=this.normals,i=this.object.geometry.normals;i.push(o[t+0],o[t+1],o[t+2]),i.push(o[e+0],o[e+1],o[e+2]),i.push(o[n+0],o[n+1],o[n+2])},addFaceNormal:function(t,e,n){const o=this.vertices,i=this.object.geometry.normals;c.fromArray(o,t),l.fromArray(o,e),u.fromArray(o,n),p.subVectors(u,l),h.subVectors(c,l),p.cross(h),p.normalize(),i.push(p.x,p.y,p.z),i.push(p.x,p.y,p.z),i.push(p.x,p.y,p.z)},addColor:function(t,e,n){const o=this.colors,i=this.object.geometry.colors;void 0!==o[t]&&i.push(o[t+0],o[t+1],o[t+2]),void 0!==o[e]&&i.push(o[e+0],o[e+1],o[e+2]),void 0!==o[n]&&i.push(o[n+0],o[n+1],o[n+2])},addUV:function(t,e,n){const o=this.uvs,i=this.object.geometry.uvs;i.push(o[t+0],o[t+1]),i.push(o[e+0],o[e+1]),i.push(o[n+0],o[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,o,i,r,s,a,c){const l=this.vertices.length;let u=this.parseVertexIndex(t,l),h=this.parseVertexIndex(e,l),p=this.parseVertexIndex(n,l);if(this.addVertex(u,h,p),this.addColor(u,h,p),void 0!==s&&""!==s){const t=this.normals.length;u=this.parseNormalIndex(s,t),h=this.parseNormalIndex(a,t),p=this.parseNormalIndex(c,t),this.addNormal(u,h,p)}else this.addFaceNormal(u,h,p);if(void 0!==o&&""!==o){const t=this.uvs.length;u=this.parseUVIndex(o,t),h=this.parseUVIndex(i,t),p=this.parseUVIndex(r,t),this.addUV(u,h,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,o=t.length;n<o;n++){const o=this.parseVertexIndex(t[n],e);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,o=this.uvs.length;for(let e=0,o=t.length;e<o;e++)this.addVertexLine(this.parseVertexIndex(t[e],n));for(let t=0,n=e.length;t<n;t++)this.addUVLine(this.parseUVIndex(e[t],o))}};return t.startObject("",!1),t}class d extends o.Q{constructor(t){super(t),this.materials=null}load(t,e,n,i){const r=this,s=new o.v(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(t,(function(n){try{e(r.parse(n))}catch(e){i?i(e):console.error(e),r.manager.itemError(t)}}),n,i)}setMaterials(t){return this.materials=t,this}parse(t){const e=new m;-1!==t.indexOf("\r\n")&&(t=t.replace(/\r\n/g,"\n")),-1!==t.indexOf("\\\n")&&(t=t.replace(/\\\n/g,""));const n=t.split("\n");let c="",l="",u=0,h=[];const p="function"==typeof"".trimLeft;for(let t=0,o=n.length;t<o;t++)if(c=n[t],c=p?c.trimLeft():c.trim(),u=c.length,0!==u&&(l=c.charAt(0),"#"!==l))if("v"===l){const t=c.split(/\s+/);switch(t[0]){case"v":e.vertices.push(parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])),t.length>=7?e.colors.push(parseFloat(t[4]),parseFloat(t[5]),parseFloat(t[6])):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]));break;case"vt":e.uvs.push(parseFloat(t[1]),parseFloat(t[2]))}}else if("f"===l){const t=c.substr(1).trim().split(/\s+/),n=[];for(let e=0,o=t.length;e<o;e++){const o=t[e];if(o.length>0){const t=o.split("/");n.push(t)}}const o=n[0];for(let t=1,i=n.length-1;t<i;t++){const i=n[t],r=n[t+1];e.addFace(o[0],i[0],r[0],o[1],i[1],r[1],o[2],i[2],r[2])}}else if("l"===l){const t=c.substring(1).trim().split(" ");let n=[];const o=[];if(-1===c.indexOf("/"))n=t;else for(let e=0,i=t.length;e<i;e++){const i=t[e].split("/");""!==i[0]&&n.push(i[0]),""!==i[1]&&o.push(i[1])}e.addLineGeometry(n,o)}else if("p"===l){const t=c.substr(1).trim().split(" ");e.addPointGeometry(t)}else if(null!==(h=i.exec(c))){const t=(" "+h[0].substr(1).trim()).substr(1);e.startObject(t)}else if(s.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(r.test(c))e.materialLibraries.push(c.substring(7).trim());else if(a.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if("s"===l){if(h=c.split(" "),h.length>1){const t=h[1].trim().toLowerCase();e.object.smooth="0"!==t&&"off"!==t}else e.object.smooth=!0;const t=e.object.currentMaterial();t&&(t.smooth=e.object.smooth)}else{if("\0"===c)continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}e.finalize();const d=new o.A;d.materialLibraries=[].concat(e.materialLibraries);if(!0===!(1===e.objects.length&&0===e.objects[0].geometry.vertices.length))for(let t=0,n=e.objects.length;t<n;t++){const n=e.objects[t],i=n.geometry,r=n.materials,s="Line"===i.type,a="Points"===i.type;let c=!1;if(0===i.vertices.length)continue;const l=new o.i;l.setAttribute("position",new o.w(i.vertices,3)),i.normals.length>0&&l.setAttribute("normal",new o.w(i.normals,3)),i.colors.length>0&&(c=!0,l.setAttribute("color",new o.w(i.colors,3))),!0===i.hasUVIndices&&l.setAttribute("uv",new o.w(i.uvs,2));const u=[];for(let t=0,n=r.length;t<n;t++){const n=r[t],i=n.name+"_"+n.smooth+"_"+c;let l=e.materials[i];if(null!==this.materials)if(l=this.materials.create(n.name),!s||!l||l instanceof o.J){if(a&&l&&!(l instanceof o.qb)){const t=new o.qb({size:10,sizeAttenuation:!1});o.T.prototype.copy.call(t,l),t.color.copy(l.color),t.map=l.map,l=t}}else{const t=new o.J;o.T.prototype.copy.call(t,l),t.color.copy(l.color),l=t}void 0===l&&(l=s?new o.J:a?new o.qb({size:1,sizeAttenuation:!1}):new o.Z,l.name=n.name,l.flatShading=!n.smooth,l.vertexColors=c,e.materials[i]=l),u.push(l)}let h;if(u.length>1){for(let t=0,e=r.length;t<e;t++){const e=r[t];l.addGroup(e.groupStart,e.groupCount,t)}h=s?new o.L(l,u):a?new o.pb(l,u):new o.W(l,u)}else h=s?new o.L(l,u[0]):a?new o.pb(l,u[0]):new o.W(l,u[0]);h.name=n.name,d.add(h)}else if(e.vertices.length>0){const t=new o.qb({size:1,sizeAttenuation:!1}),n=new o.i;n.setAttribute("position",new o.w(e.vertices,3)),e.colors.length>0&&void 0!==e.colors[0]&&(n.setAttribute("color",new o.w(e.colors,3)),t.vertexColors=!0);const i=new o.pb(n,t);d.add(i)}return d}}},457:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(325);class i{constructor(t,e=32){this.lut=[],this.map=[],this.n=0,this.minV=0,this.maxV=1,this.setColorMap(t,e)}set(t){return!0===t.isLut&&this.copy(t),this}setMin(t){return this.minV=t,this}setMax(t){return this.maxV=t,this}setColorMap(t,e=32){this.map=r[t]||r.rainbow,this.n=e;const n=1/this.n;this.lut.length=0;for(let t=0;t<=1;t+=n)for(let e=0;e<this.map.length-1;e++)if(t>=this.map[e][0]&&t<this.map[e+1][0]){const n=this.map[e][0],i=this.map[e+1][0],r=new o.p(this.map[e][1]),s=new o.p(this.map[e+1][1]),a=r.lerp(s,(t-n)/(i-n));this.lut.push(a)}return this}copy(t){return this.lut=t.lut,this.map=t.map,this.n=t.n,this.minV=t.minV,this.maxV=t.maxV,this}getColor(t){t<=this.minV?t=this.minV:t>=this.maxV&&(t=this.maxV),t=(t-this.minV)/(this.maxV-this.minV);let e=Math.round(t*this.n);return e==this.n&&(e-=1),this.lut[e]}addColorMap(t,e){return r[t]=e,this}createCanvas(){const t=document.createElement("canvas");return t.width=1,t.height=this.n,this.updateCanvas(t),t}updateCanvas(t){const e=t.getContext("2d",{alpha:!1}),n=e.getImageData(0,0,1,this.n),i=n.data;let r=0;const s=1/this.n;for(let t=1;t>=0;t-=s)for(let e=this.map.length-1;e>=0;e--)if(t<this.map[e][0]&&t>=this.map[e-1][0]){const n=this.map[e-1][0],s=this.map[e][0],a=new o.p(this.map[e-1][1]),c=new o.p(this.map[e][1]),l=a.lerp(c,(t-n)/(s-n));i[4*r]=Math.round(255*l.r),i[4*r+1]=Math.round(255*l.g),i[4*r+2]=Math.round(255*l.b),i[4*r+3]=255,r+=1}return e.putImageData(n,0,0),t}}i.prototype.isLut=!0;const r={rainbow:[[0,255],[.2,65535],[.5,65280],[.8,16776960],[1,16711680]],cooltowarm:[[0,3952322],[.2,10206463],[.5,14474460],[.8,16163717],[1,11797542]],blackbody:[[0,0],[.2,7864320],[.5,15086080],[.8,16776960],[1,16777215]],grayscale:[[0,0],[.2,4210752],[.5,8355712],[.8,12566463],[1,16777215]]}}}]);