(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{240:function(e,t,n){"use strict";var a=function(){var e=0,t=document.createElement("div");function n(e){return t.appendChild(e.dom),e}function o(n){for(var a=0;a<t.children.length;a++)t.children[a].style.display=a===n?"block":"none";e=n}t.style.cssText="position:absolute;top:0;left:0;cursor:pointer;opacity:0.9;z-index:19",t.addEventListener("click",(function(n){n.preventDefault(),o(++e%t.children.length)}),!1);var i=(performance||Date).now(),r=i,s=0,c=n(new a.Panel("FPS","#0ff","#002")),l=n(new a.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var p=n(new a.Panel("MB","#f08","#201"));return o(0),{REVISION:16,dom:t,addPanel:n,showPanel:o,begin:function(){i=(performance||Date).now()},end:function(){s++;var e=(performance||Date).now();if(l.update(e-i,200),e>=r+1e3&&(c.update(1e3*s/(e-r),100),r=e,s=0,p)){var t=performance.memory;p.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){i=this.end()},domElement:t,setMode:o}};a.Panel=function(e,t,n){var a=1/0,o=0,i=Math.round,r=i(window.devicePixelRatio||1),s=80*r,c=48*r,l=3*r,p=2*r,d=3*r,u=15*r,m=74*r,h=30*r,b=document.createElement("canvas");b.width=s,b.height=c,b.style.cssText="width:80px;height:48px";var v=b.getContext("2d");return v.font="bold "+9*r+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=n,v.fillRect(0,0,s,c),v.fillStyle=t,v.fillText(e,l,p),v.fillRect(d,u,m,h),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(d,u,m,h),{dom:b,update:function(c,f){a=Math.min(a,c),o=Math.max(o,c),v.fillStyle=n,v.globalAlpha=1,v.fillRect(0,0,s,u),v.fillStyle=t,v.fillText(i(c)+" "+e+" ("+i(a)+"-"+i(o)+")",l,p),v.drawImage(b,d+r,u,m-r,h,d,u,m-r,h),v.fillRect(d+m-r,u,r,h),v.fillStyle=n,v.globalAlpha=.9,v.fillRect(d+m-r,u,r,i((1-c/f)*h))}}},t.a=a},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(239);const o={type:"change"},i={type:"start"},r={type:"end"};class s extends a.u{constructor(e,t){super(),void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new a.Tb,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:a.S.ROTATE,MIDDLE:a.S.DOLLY,RIGHT:a.S.PAN},this.touches={ONE:a.Kb.ROTATE,TWO:a.Kb.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return p.phi},this.getAzimuthalAngle=function(){return p.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",V),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(o),n.update(),c=s.NONE},this.update=function(){const t=new a.Tb,i=(new a.sb).setFromUnitVectors(e.up,new a.Tb(0,1,0)),r=i.clone().invert(),b=new a.Tb,v=new a.sb,f=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(i),p.setFromVector3(t),n.autoRotate&&c===s.NONE&&S(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(p.theta+=d.theta*n.dampingFactor,p.phi+=d.phi*n.dampingFactor):(p.theta+=d.theta,p.phi+=d.phi);let a=n.minAzimuthAngle,g=n.maxAzimuthAngle;return isFinite(a)&&isFinite(g)&&(a<-Math.PI?a+=f:a>Math.PI&&(a-=f),g<-Math.PI?g+=f:g>Math.PI&&(g-=f),p.theta=a<=g?Math.max(a,Math.min(g,p.theta)):p.theta>(a+g)/2?Math.max(a,p.theta):Math.min(g,p.theta)),p.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,p.phi)),p.makeSafe(),p.radius*=u,p.radius=Math.max(n.minDistance,Math.min(n.maxDistance,p.radius)),!0===n.enableDamping?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),t.setFromSpherical(p),t.applyQuaternion(r),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(d.theta*=1-n.dampingFactor,d.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(d.set(0,0,0),m.set(0,0,0)),u=1,!!(h||b.distanceToSquared(n.object.position)>l||8*(1-v.dot(n.object.quaternion))>l)&&(n.dispatchEvent(o),b.copy(n.object.position),v.copy(n.object.quaternion),h=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",B),n.domElement.removeEventListener("pointerdown",Z),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",W),n.domElement.removeEventListener("pointermove",X),n.domElement.removeEventListener("pointerup",K),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",V)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=s.NONE;const l=1e-6,p=new a.Gb,d=new a.Gb;let u=1;const m=new a.Tb;let h=!1;const b=new a.Sb,v=new a.Sb,f=new a.Sb,g=new a.Sb,w=new a.Sb,_=new a.Sb,E=new a.Sb,y=new a.Sb,k=new a.Sb,T=[],O={};function P(){return Math.pow(.95,n.zoomSpeed)}function S(e){d.theta-=e}function A(e){d.phi-=e}const x=function(){const e=new a.Tb;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),m.add(e)}}(),j=function(){const e=new a.Tb;return function(t,a){!0===n.screenSpacePanning?e.setFromMatrixColumn(a,1):(e.setFromMatrixColumn(a,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),m.add(e)}}(),M=function(){const e=new a.Tb;return function(t,a){const o=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let r=e.length();r*=Math.tan(n.object.fov/2*Math.PI/180),x(2*t*r/o.clientHeight,n.object.matrix),j(2*a*r/o.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(x(t*(n.object.right-n.object.left)/n.object.zoom/o.clientWidth,n.object.matrix),j(a*(n.object.top-n.object.bottom)/n.object.zoom/o.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(e){n.object.isPerspectiveCamera?u/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function L(e){n.object.isPerspectiveCamera?u*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(e){b.set(e.clientX,e.clientY)}function C(e){g.set(e.clientX,e.clientY)}function D(){if(1===T.length)b.set(T[0].pageX,T[0].pageY);else{const e=.5*(T[0].pageX+T[1].pageX),t=.5*(T[0].pageY+T[1].pageY);b.set(e,t)}}function I(){if(1===T.length)g.set(T[0].pageX,T[0].pageY);else{const e=.5*(T[0].pageX+T[1].pageX),t=.5*(T[0].pageY+T[1].pageY);g.set(e,t)}}function Y(){const e=T[0].pageX-T[1].pageX,t=T[0].pageY-T[1].pageY,n=Math.sqrt(e*e+t*t);E.set(0,n)}function H(e){if(1==T.length)v.set(e.pageX,e.pageY);else{const t=J(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);v.set(n,a)}f.subVectors(v,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;S(2*Math.PI*f.x/t.clientHeight),A(2*Math.PI*f.y/t.clientHeight),b.copy(v)}function z(e){if(1===T.length)w.set(e.pageX,e.pageY);else{const t=J(e),n=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);w.set(n,a)}_.subVectors(w,g).multiplyScalar(n.panSpeed),M(_.x,_.y),g.copy(w)}function F(e){const t=J(e),a=e.pageX-t.x,o=e.pageY-t.y,i=Math.sqrt(a*a+o*o);y.set(0,i),k.set(0,Math.pow(y.y/E.y,n.zoomSpeed)),N(k.y),E.copy(y)}function Z(e){!1!==n.enabled&&(0===T.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",X),n.domElement.addEventListener("pointerup",K)),function(e){T.push(e)}(e),"touch"===e.pointerType?function(e){switch(q(e),T.length){case 1:switch(n.touches.ONE){case a.Kb.ROTATE:if(!1===n.enableRotate)return;D(),c=s.TOUCH_ROTATE;break;case a.Kb.PAN:if(!1===n.enablePan)return;I(),c=s.TOUCH_PAN;break;default:c=s.NONE}break;case 2:switch(n.touches.TWO){case a.Kb.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&Y(),n.enablePan&&I(),c=s.TOUCH_DOLLY_PAN;break;case a.Kb.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&Y(),n.enableRotate&&D(),c=s.TOUCH_DOLLY_ROTATE;break;default:c=s.NONE}break;default:c=s.NONE}c!==s.NONE&&n.dispatchEvent(i)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case a.S.DOLLY:if(!1===n.enableZoom)return;!function(e){E.set(e.clientX,e.clientY)}(e),c=s.DOLLY;break;case a.S.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;C(e),c=s.PAN}else{if(!1===n.enableRotate)return;R(e),c=s.ROTATE}break;case a.S.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;R(e),c=s.ROTATE}else{if(!1===n.enablePan)return;C(e),c=s.PAN}break;default:c=s.NONE}c!==s.NONE&&n.dispatchEvent(i)}(e))}function X(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(q(e),c){case s.TOUCH_ROTATE:if(!1===n.enableRotate)return;H(e),n.update();break;case s.TOUCH_PAN:if(!1===n.enablePan)return;z(e),n.update();break;case s.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&F(e),n.enablePan&&z(e)}(e),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&F(e),n.enableRotate&&H(e)}(e),n.update();break;default:c=s.NONE}}(e):function(e){if(!1===n.enabled)return;switch(c){case s.ROTATE:if(!1===n.enableRotate)return;!function(e){v.set(e.clientX,e.clientY),f.subVectors(v,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;S(2*Math.PI*f.x/t.clientHeight),A(2*Math.PI*f.y/t.clientHeight),b.copy(v),n.update()}(e);break;case s.DOLLY:if(!1===n.enableZoom)return;!function(e){y.set(e.clientX,e.clientY),k.subVectors(y,E),k.y>0?N(P()):k.y<0&&L(P()),E.copy(y),n.update()}(e);break;case s.PAN:if(!1===n.enablePan)return;!function(e){w.set(e.clientX,e.clientY),_.subVectors(w,g).multiplyScalar(n.panSpeed),M(_.x,_.y),g.copy(w),n.update()}(e)}}(e))}function K(e){!1!==n.enabled&&(e.pointerType,n.dispatchEvent(r),c=s.NONE,G(e),0===T.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",X),n.domElement.removeEventListener("pointerup",K)))}function U(e){G(e)}function W(e){!1===n.enabled||!1===n.enableZoom||c!==s.NONE&&c!==s.ROTATE||(e.preventDefault(),n.dispatchEvent(i),function(e){e.deltaY<0?L(P()):e.deltaY>0&&N(P()),n.update()}(e),n.dispatchEvent(r))}function V(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:M(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:M(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:M(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:M(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function B(e){!1!==n.enabled&&e.preventDefault()}function G(e){delete O[e.pointerId];for(let t=0;t<T.length;t++)if(T[t].pointerId==e.pointerId)return void T.splice(t,1)}function q(e){let t=O[e.pointerId];void 0===t&&(t=new a.Sb,O[e.pointerId]=t),t.set(e.pageX,e.pageY)}function J(e){const t=e.pointerId===T[0].pointerId?T[1]:T[0];return O[t.pointerId]}n.domElement.addEventListener("contextmenu",B),n.domElement.addEventListener("pointerdown",Z),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",W,{passive:!1}),this.update()}}},242:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return d})),n.d(t,"h",(function(){return u})),n.d(t,"a",(function(){return m}));var a=n(240),o=n(239),i=n(243);function r(e,t){var n=void 0!==e&&e&&!isNaN(e)?parseInt(e):0,o=new a.a;return o.showPanel(n),t.appendChild(o.dom),o}function s(e,t){var n=void 0!==t&&t?t:{},a=new o.Wb(n);return a.shadowMap.enabled=!0,a.shadowMapSoft=!0,a.shadowMap.type=o.jb,a.setClearColor(new o.p(0)),a.setSize(e.clientWidth,e.clientHeight),a.shadowMap.enabled=!0,e.appendChild(a.domElement),a}function c(e,t){var n=void 0!==t?t:new o.Tb(-30,40,30),a=new o.kb(45,e.clientWidth/e.clientHeight,.1,1e3);return a.position.set(n.x,n.y,n.z),a.lookAt(new o.Tb(0,0,0)),a}function l(e,t){var n=new i.a(e,t.domElement);return n.rotateSpeed=1,n.zoomSpeed=1.2,n.panSpeed=.8,n.noZoom=!1,n.noPan=!1,n.staticMoving=!0,n.dynamicDampingFactor=.3,n.keys=[65,83,68],n}function p(e,t){var n=void 0!==t?t:new o.Tb(-10,30,40),a=new o.Hb(16777215);a.position.copy(n),a.shadow.mapSize.width=2048,a.shadow.mapSize.height=2048,a.shadow.camera.fov=15,a.castShadow=!0,a.decay=2,a.penumbra=.05,a.name="spotLight",e.add(a);var i=new o.b(3421236);i.name="ambientLight",e.add(i)}function d(e){var t=new o.mb(60,20,120,120),n=new o.Z({color:16777215}),a=new o.W(t,n);return a.receiveShadow=!0,a.rotation.x=-.5*Math.PI,a.position.x=15,a.position.y=0,a.position.z=0,e.add(a),a}function u(e,t){var n=e.children;n&&n.length>0?n.forEach((function(e){u(e,t)})):e instanceof o.W&&(e.material instanceof Array?e.material.forEach((function(e){e.color=new o.p(t(Math.random()).hex()),0===e.name.indexOf("building")&&(e.emissive=new o.p(4473924),e.transparent=!0,e.opacity=.8)})):(e.material.color=new o.p(t(Math.random()).hex()),0==e.material.name.indexOf("building")&&(e.material.emissive=new o.p(4473924),e.material.transparent=!0,e.material.opacity=.8)))}function m(e){var t=new o.Nb,n=new o.Z({map:t.load("/daodao-knowledge/textures/earth/Earth.png"),normalMap:t.load("/daodao-knowledge/textures/earth/EarthNormal.png"),specularMap:t.load("/daodao-knowledge/textures/earth/EarthSpec.png"),specular:new o.p(4474026),normalScale:new o.Sb(6,6),shininess:.5}),a=new o.W(new o.Fb(15,40,40),n);e.add(a);var i=new o.hb;return p(i),e.add(i),{earth:a,pivot:i}}},282:function(e,t,n){},334:function(e,t,n){"use strict";n(282)},370:function(e,t,n){"use strict";n.r(t);var a=n(239),o=n(241),i=(n(244),n(246),n(247),n(242)),r={data:()=>({}),mounted(){this.init()},beforeDestroy(){},methods:{init(){var e=document.getElementById("three1"),t=Object(i.f)(0,e),n=Object(i.e)(e),r=Object(i.c)(e),s=new a.yb,c=new a.o;s.add(new a.b(2236962));var l=new a.s(16777215);l.position.set(50,10,0),s.add(l);var p=new o.a(r,e);p.autoRotate=!0;var d=(new a.Nb).load("/daodao-knowledge/textures/mars/mars_1k_color.jpg"),u=(new a.Nb).load("/daodao-knowledge/textures/mars/mars_1k_normal.jpg"),m=new a.Y({map:d,normalMap:u});s.add(new a.W(new a.Fb(20,40,40),m)),function e(){t.update(),p.update(c.getDelta()),requestAnimationFrame(e),n.render(s,r)}()}}},s=(n(334),n(14)),c=Object(s.a)(r,(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[t("code",[e._v("OrbitControl")]),e._v("（轨道控件）是在场景中绕某个对象旋转、平移的好方法。")]),e._v(" "),t("p",[e._v("该控件使用起来跟其他控件一样简单。将控件绑定到相机。然后使用"),t("code",[e._v("THREE.Clock")]),e._v("对象来更新控件：")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//...")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" orbitControls "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("THREE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("OrbitControls")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("camera"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\norbitControls"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("autoRotate "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" clock "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("THREE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Clock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//...")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" delta "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" clock"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getDelta")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\norbitControls"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("update")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("delte"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("操控轨道控件主要使用鼠标")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("操控")]),e._v(" "),t("th",[e._v("动作")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("按住左键，并移动")]),e._v(" "),t("td",[e._v("绕场景中心旋转相机")])]),e._v(" "),t("tr",[t("td",[e._v("转动滚轮或按住中键，并移动")]),e._v(" "),t("td",[e._v("放大缩小")])]),e._v(" "),t("tr",[t("td",[e._v("按住右键，并移动")]),e._v(" "),t("td",[e._v("在场景中移动")])]),e._v(" "),t("tr",[t("td",[e._v("上下左右方向键")]),e._v(" "),t("td",[e._v("在场景中移动")])])])]),e._v(" "),[t("div",{attrs:{id:"three1"}})]],2)}),[],!1,null,"cdc87b82",null);t.default=c.exports}}]);