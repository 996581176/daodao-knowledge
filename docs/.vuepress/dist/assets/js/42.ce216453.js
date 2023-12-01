(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{341:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(325);const a={type:"change"},i={type:"start"},s={type:"end"};class r extends o.u{constructor(e,t){super(),void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new o.Tb,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o.S.ROTATE,MIDDLE:o.S.DOLLY,RIGHT:o.S.PAN},this.touches={ONE:o.Kb.ROTATE,TWO:o.Kb.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",G),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(a),n.update(),c=r.NONE},this.update=function(){const t=new o.Tb,i=(new o.sb).setFromUnitVectors(e.up,new o.Tb(0,1,0)),s=i.clone().invert(),b=new o.Tb,f=new o.sb,E=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(i),d.setFromVector3(t),n.autoRotate&&c===r.NONE&&S(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(d.theta+=p.theta*n.dampingFactor,d.phi+=p.phi*n.dampingFactor):(d.theta+=p.theta,d.phi+=p.phi);let o=n.minAzimuthAngle,g=n.maxAzimuthAngle;return isFinite(o)&&isFinite(g)&&(o<-Math.PI?o+=E:o>Math.PI&&(o-=E),g<-Math.PI?g+=E:g>Math.PI&&(g-=E),d.theta=o<=g?Math.max(o,Math.min(g,d.theta)):d.theta>(o+g)/2?Math.max(o,d.theta):Math.min(g,d.theta)),d.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,d.phi)),d.makeSafe(),d.radius*=u,d.radius=Math.max(n.minDistance,Math.min(n.maxDistance,d.radius)),!0===n.enableDamping?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),t.setFromSpherical(d),t.applyQuaternion(s),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(p.theta*=1-n.dampingFactor,p.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(p.set(0,0,0),m.set(0,0,0)),u=1,!!(h||b.distanceToSquared(n.object.position)>l||8*(1-f.dot(n.object.quaternion))>l)&&(n.dispatchEvent(a),b.copy(n.object.position),f.copy(n.object.quaternion),h=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",X),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",W),n.domElement.removeEventListener("pointermove",Z),n.domElement.removeEventListener("pointerup",K),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",G)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=r.NONE;const l=1e-6,d=new o.Gb,p=new o.Gb;let u=1;const m=new o.Tb;let h=!1;const b=new o.Sb,f=new o.Sb,E=new o.Sb,g=new o.Sb,w=new o.Sb,y=new o.Sb,T=new o.Sb,v=new o.Sb,O=new o.Sb,P=[],A={};function L(){return Math.pow(.95,n.zoomSpeed)}function S(e){p.theta-=e}function j(e){p.phi-=e}const N=function(){const e=new o.Tb;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),m.add(e)}}(),k=function(){const e=new o.Tb;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),m.add(e)}}(),x=function(){const e=new o.Tb;return function(t,o){const a=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let s=e.length();s*=Math.tan(n.object.fov/2*Math.PI/180),N(2*t*s/a.clientHeight,n.object.matrix),k(2*o*s/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),k(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(e){n.object.isPerspectiveCamera?u/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function M(e){n.object.isPerspectiveCamera?u*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(e){b.set(e.clientX,e.clientY)}function D(e){g.set(e.clientX,e.clientY)}function I(){if(1===P.length)b.set(P[0].pageX,P[0].pageY);else{const e=.5*(P[0].pageX+P[1].pageX),t=.5*(P[0].pageY+P[1].pageY);b.set(e,t)}}function C(){if(1===P.length)g.set(P[0].pageX,P[0].pageY);else{const e=.5*(P[0].pageX+P[1].pageX),t=.5*(P[0].pageY+P[1].pageY);g.set(e,t)}}function H(){const e=P[0].pageX-P[1].pageX,t=P[0].pageY-P[1].pageY,n=Math.sqrt(e*e+t*t);T.set(0,n)}function _(e){if(1==P.length)f.set(e.pageX,e.pageY);else{const t=J(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);f.set(n,o)}E.subVectors(f,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;S(2*Math.PI*E.x/t.clientHeight),j(2*Math.PI*E.y/t.clientHeight),b.copy(f)}function z(e){if(1===P.length)w.set(e.pageX,e.pageY);else{const t=J(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);w.set(n,o)}y.subVectors(w,g).multiplyScalar(n.panSpeed),x(y.x,y.y),g.copy(w)}function F(e){const t=J(e),o=e.pageX-t.x,a=e.pageY-t.y,i=Math.sqrt(o*o+a*a);v.set(0,i),O.set(0,Math.pow(v.y/T.y,n.zoomSpeed)),R(O.y),T.copy(v)}function X(e){!1!==n.enabled&&(0===P.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",Z),n.domElement.addEventListener("pointerup",K)),function(e){P.push(e)}(e),"touch"===e.pointerType?function(e){switch(q(e),P.length){case 1:switch(n.touches.ONE){case o.Kb.ROTATE:if(!1===n.enableRotate)return;I(),c=r.TOUCH_ROTATE;break;case o.Kb.PAN:if(!1===n.enablePan)return;C(),c=r.TOUCH_PAN;break;default:c=r.NONE}break;case 2:switch(n.touches.TWO){case o.Kb.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&H(),n.enablePan&&C(),c=r.TOUCH_DOLLY_PAN;break;case o.Kb.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&H(),n.enableRotate&&I(),c=r.TOUCH_DOLLY_ROTATE;break;default:c=r.NONE}break;default:c=r.NONE}c!==r.NONE&&n.dispatchEvent(i)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case o.S.DOLLY:if(!1===n.enableZoom)return;!function(e){T.set(e.clientX,e.clientY)}(e),c=r.DOLLY;break;case o.S.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;D(e),c=r.PAN}else{if(!1===n.enableRotate)return;Y(e),c=r.ROTATE}break;case o.S.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;Y(e),c=r.ROTATE}else{if(!1===n.enablePan)return;D(e),c=r.PAN}break;default:c=r.NONE}c!==r.NONE&&n.dispatchEvent(i)}(e))}function Z(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(q(e),c){case r.TOUCH_ROTATE:if(!1===n.enableRotate)return;_(e),n.update();break;case r.TOUCH_PAN:if(!1===n.enablePan)return;z(e),n.update();break;case r.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&F(e),n.enablePan&&z(e)}(e),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&F(e),n.enableRotate&&_(e)}(e),n.update();break;default:c=r.NONE}}(e):function(e){if(!1===n.enabled)return;switch(c){case r.ROTATE:if(!1===n.enableRotate)return;!function(e){f.set(e.clientX,e.clientY),E.subVectors(f,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;S(2*Math.PI*E.x/t.clientHeight),j(2*Math.PI*E.y/t.clientHeight),b.copy(f),n.update()}(e);break;case r.DOLLY:if(!1===n.enableZoom)return;!function(e){v.set(e.clientX,e.clientY),O.subVectors(v,T),O.y>0?R(L()):O.y<0&&M(L()),T.copy(v),n.update()}(e);break;case r.PAN:if(!1===n.enablePan)return;!function(e){w.set(e.clientX,e.clientY),y.subVectors(w,g).multiplyScalar(n.panSpeed),x(y.x,y.y),g.copy(w),n.update()}(e)}}(e))}function K(e){!1!==n.enabled&&(e.pointerType,n.dispatchEvent(s),c=r.NONE,B(e),0===P.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",Z),n.domElement.removeEventListener("pointerup",K)))}function U(e){B(e)}function W(e){!1===n.enabled||!1===n.enableZoom||c!==r.NONE&&c!==r.ROTATE||(e.preventDefault(),n.dispatchEvent(i),function(e){e.deltaY<0?M(L()):e.deltaY>0&&R(L()),n.update()}(e),n.dispatchEvent(s))}function G(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:x(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:x(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:x(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:x(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function V(e){!1!==n.enabled&&e.preventDefault()}function B(e){delete A[e.pointerId];for(let t=0;t<P.length;t++)if(P[t].pointerId==e.pointerId)return void P.splice(t,1)}function q(e){let t=A[e.pointerId];void 0===t&&(t=new o.Sb,A[e.pointerId]=t),t.set(e.pageX,e.pageY)}function J(e){const t=e.pointerId===P[0].pointerId?P[1]:P[0];return A[t.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",X),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",W,{passive:!1}),this.update()}}},485:function(e,t,n){"use strict";n.r(t);var o=n(325),a=n(341),i={data:function(){return{gui:null}},mounted:function(){this.initScene()},beforeDestroy:function(){console.log("要销毁啦")},methods:{initScene:function(){var e,t,n,i=!0,s=[new o.lb(new o.Tb(1,0,0),0),new o.lb(new o.Tb(0,-1,0),0),new o.lb(new o.Tb(0,0,-1),0)];function r(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),c()}function c(){n.render(t,e)}!function(){var l=document.getElementById("myThree");(n=new o.Wb({antialias:!0})).setPixelRatio(window.devicePixelRatio),n.setSize(l.clientWidth,l.clientHeight),n.localClippingEnabled=!0,l.appendChild(n.domElement),t=new o.yb,(e=new o.kb(40,l.clientWidth/l.clientHeight,1,200)).position.set(-1.5,2.5,3);var d=new a.a(e,n.domElement);d.addEventListener("change",c),d.minDistance=1,d.maxDistance=10,d.enablePan=!1;var p=new o.B(16777215,526344,1.5);p.position.set(-1.25,1,1.25),t.add(p);for(var u=new o.A,m=1;m<=30;m+=2){var h=new o.Fb(m/30,48,24),b=new o.Y({color:(new o.p).setHSL(Math.random(),.5,.5),side:o.t,clippingPlanes:s,clipIntersection:i});u.add(new o.W(h,b))}t.add(u);var f=new o.A;f.add(new o.nb(s[0],2,16711680)),f.add(new o.nb(s[1],2,65280)),f.add(new o.nb(s[2],2,255)),f.visible=!1,t.add(f),window.addEventListener("resize",r)}(),c()}}},s=n(47),r=Object(s.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("最近我在学threejs，希望能够集成threejs，首先我尝试在vuepress中使用vue组件，然后在vue组件中使用three，结果如下，大成功！和普通的使用vue一样。很简单，感觉没什么好写的，来看下效果：\n")]),t("style",{attrs:{lang:"stylus",scoped:""}},[this._v("\n#myThree{\nwidth:800px;\nheight:600px;\n}\n")]),this._v(" "),[t("div",{attrs:{id:"myThree"}})],t("p")],2)}),[],!1,null,null,null);t.default=r.exports}}]);