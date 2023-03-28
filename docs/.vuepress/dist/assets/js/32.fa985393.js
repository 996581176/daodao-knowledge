(window.webpackJsonp=window.webpackJsonp||[]).push([[32,36],{242:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(239);const s={type:"change"},i={type:"start"},a={type:"end"};class r extends o.u{constructor(e,t){super(),void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new o.Sb,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o.R.ROTATE,MIDDLE:o.R.DOLLY,RIGHT:o.R.PAN},this.touches={ONE:o.Jb.ROTATE,TWO:o.Jb.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",G),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(s),n.update(),c=r.NONE},this.update=function(){const t=new o.Sb,i=(new o.rb).setFromUnitVectors(e.up,new o.Sb(0,1,0)),a=i.clone().invert(),b=new o.Sb,f=new o.rb,g=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(i),h.setFromVector3(t),n.autoRotate&&c===r.NONE&&A(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(h.theta+=u.theta*n.dampingFactor,h.phi+=u.phi*n.dampingFactor):(h.theta+=u.theta,h.phi+=u.phi);let o=n.minAzimuthAngle,y=n.maxAzimuthAngle;return isFinite(o)&&isFinite(y)&&(o<-Math.PI?o+=g:o>Math.PI&&(o-=g),y<-Math.PI?y+=g:y>Math.PI&&(y-=g),h.theta=o<=y?Math.max(o,Math.min(y,h.theta)):h.theta>(o+y)/2?Math.max(o,h.theta):Math.min(y,h.theta)),h.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,h.phi)),h.makeSafe(),h.radius*=p,h.radius=Math.max(n.minDistance,Math.min(n.maxDistance,h.radius)),!0===n.enableDamping?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),t.setFromSpherical(h),t.applyQuaternion(a),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),m.set(0,0,0)),p=1,!!(d||b.distanceToSquared(n.object.position)>l||8*(1-f.dot(n.object.quaternion))>l)&&(n.dispatchEvent(s),b.copy(n.object.position),f.copy(n.object.quaternion),d=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",J),n.domElement.removeEventListener("pointerdown",U),n.domElement.removeEventListener("pointercancel",Z),n.domElement.removeEventListener("wheel",K),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",X),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",G)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=r.NONE;const l=1e-6,h=new o.Fb,u=new o.Fb;let p=1;const m=new o.Sb;let d=!1;const b=new o.Rb,f=new o.Rb,g=new o.Rb,y=new o.Rb,v=new o.Rb,E=new o.Rb,w=new o.Rb,j=new o.Rb,x=new o.Rb,O=[],L={};function T(){return Math.pow(.95,n.zoomSpeed)}function A(e){u.theta-=e}function P(e){u.phi-=e}const R=function(){const e=new o.Sb;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),m.add(e)}}(),I=function(){const e=new o.Sb;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),m.add(e)}}(),M=function(){const e=new o.Sb;return function(t,o){const s=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let a=e.length();a*=Math.tan(n.object.fov/2*Math.PI/180),R(2*t*a/s.clientHeight,n.object.matrix),I(2*o*a/s.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(R(t*(n.object.right-n.object.left)/n.object.zoom/s.clientWidth,n.object.matrix),I(o*(n.object.top-n.object.bottom)/n.object.zoom/s.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(e){n.object.isPerspectiveCamera?p/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(e){n.object.isPerspectiveCamera?p*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function C(e){b.set(e.clientX,e.clientY)}function S(e){y.set(e.clientX,e.clientY)}function k(){if(1===O.length)b.set(O[0].pageX,O[0].pageY);else{const e=.5*(O[0].pageX+O[1].pageX),t=.5*(O[0].pageY+O[1].pageY);b.set(e,t)}}function z(){if(1===O.length)y.set(O[0].pageX,O[0].pageY);else{const e=.5*(O[0].pageX+O[1].pageX),t=.5*(O[0].pageY+O[1].pageY);y.set(e,t)}}function D(){const e=O[0].pageX-O[1].pageX,t=O[0].pageY-O[1].pageY,n=Math.sqrt(e*e+t*t);w.set(0,n)}function Y(e){if(1==O.length)f.set(e.pageX,e.pageY);else{const t=W(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);f.set(n,o)}g.subVectors(f,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;A(2*Math.PI*g.x/t.clientHeight),P(2*Math.PI*g.y/t.clientHeight),b.copy(f)}function F(e){if(1===O.length)v.set(e.pageX,e.pageY);else{const t=W(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);v.set(n,o)}E.subVectors(v,y).multiplyScalar(n.panSpeed),M(E.x,E.y),y.copy(v)}function _(e){const t=W(e),o=e.pageX-t.x,s=e.pageY-t.y,i=Math.sqrt(o*o+s*s);j.set(0,i),x.set(0,Math.pow(j.y/w.y,n.zoomSpeed)),N(x.y),w.copy(j)}function U(e){!1!==n.enabled&&(0===O.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",H),n.domElement.addEventListener("pointerup",X)),function(e){O.push(e)}(e),"touch"===e.pointerType?function(e){switch(q(e),O.length){case 1:switch(n.touches.ONE){case o.Jb.ROTATE:if(!1===n.enableRotate)return;k(),c=r.TOUCH_ROTATE;break;case o.Jb.PAN:if(!1===n.enablePan)return;z(),c=r.TOUCH_PAN;break;default:c=r.NONE}break;case 2:switch(n.touches.TWO){case o.Jb.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&D(),n.enablePan&&z(),c=r.TOUCH_DOLLY_PAN;break;case o.Jb.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&D(),n.enableRotate&&k(),c=r.TOUCH_DOLLY_ROTATE;break;default:c=r.NONE}break;default:c=r.NONE}c!==r.NONE&&n.dispatchEvent(i)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case o.R.DOLLY:if(!1===n.enableZoom)return;!function(e){w.set(e.clientX,e.clientY)}(e),c=r.DOLLY;break;case o.R.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;S(e),c=r.PAN}else{if(!1===n.enableRotate)return;C(e),c=r.ROTATE}break;case o.R.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;C(e),c=r.ROTATE}else{if(!1===n.enablePan)return;S(e),c=r.PAN}break;default:c=r.NONE}c!==r.NONE&&n.dispatchEvent(i)}(e))}function H(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(q(e),c){case r.TOUCH_ROTATE:if(!1===n.enableRotate)return;Y(e),n.update();break;case r.TOUCH_PAN:if(!1===n.enablePan)return;F(e),n.update();break;case r.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&_(e),n.enablePan&&F(e)}(e),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&_(e),n.enableRotate&&Y(e)}(e),n.update();break;default:c=r.NONE}}(e):function(e){if(!1===n.enabled)return;switch(c){case r.ROTATE:if(!1===n.enableRotate)return;!function(e){f.set(e.clientX,e.clientY),g.subVectors(f,b).multiplyScalar(n.rotateSpeed);const t=n.domElement;A(2*Math.PI*g.x/t.clientHeight),P(2*Math.PI*g.y/t.clientHeight),b.copy(f),n.update()}(e);break;case r.DOLLY:if(!1===n.enableZoom)return;!function(e){j.set(e.clientX,e.clientY),x.subVectors(j,w),x.y>0?N(T()):x.y<0&&V(T()),w.copy(j),n.update()}(e);break;case r.PAN:if(!1===n.enablePan)return;!function(e){v.set(e.clientX,e.clientY),E.subVectors(v,y).multiplyScalar(n.panSpeed),M(E.x,E.y),y.copy(v),n.update()}(e)}}(e))}function X(e){!1!==n.enabled&&(e.pointerType,n.dispatchEvent(a),c=r.NONE,B(e),0===O.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",H),n.domElement.removeEventListener("pointerup",X)))}function Z(e){B(e)}function K(e){!1===n.enabled||!1===n.enableZoom||c!==r.NONE&&c!==r.ROTATE||(e.preventDefault(),n.dispatchEvent(i),function(e){e.deltaY<0?V(T()):e.deltaY>0&&N(T()),n.update()}(e),n.dispatchEvent(a))}function G(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:M(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:M(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:M(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:M(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function J(e){!1!==n.enabled&&e.preventDefault()}function B(e){delete L[e.pointerId];for(let t=0;t<O.length;t++)if(O[t].pointerId==e.pointerId)return void O.splice(t,1)}function q(e){let t=L[e.pointerId];void 0===t&&(t=new o.Rb,L[e.pointerId]=t),t.set(e.pageX,e.pageY)}function W(e){const t=e.pointerId===O[0].pointerId?O[1]:O[0];return L[t.pointerId]}n.domElement.addEventListener("contextmenu",J),n.domElement.addEventListener("pointerdown",U),n.domElement.addEventListener("pointercancel",Z),n.domElement.addEventListener("wheel",K,{passive:!1}),this.update()}}},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(239);const s=/^[og]\s*(.+)?/,i=/^mtllib /,a=/^usemtl /,r=/^usemap /,c=new o.Sb,l=new o.Sb,h=new o.Sb,u=new o.Sb,p=new o.Sb;function m(){const e={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=e,void(this.object.fromDeclaration=!1!==t);const n=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:!1!==t,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(e,t){const n=this._finalize(!1);n&&(n.inherited||n.groupCount<=0)&&this.materials.splice(n.index,1);const o={index:this.materials.length,name:e||"",mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:"",smooth:void 0!==n?n.smooth:this.smooth,groupStart:void 0!==n?n.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(e){const t={index:"number"==typeof e?e:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return t.clone=this.clone.bind(t),t}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){const t=this.currentMaterial();if(t&&-1===t.groupEnd&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),e&&this.materials.length>1)for(let e=this.materials.length-1;e>=0;e--)this.materials[e].groupCount<=0&&this.materials.splice(e,1);return e&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),t}},n&&n.name&&"function"==typeof n.clone){const e=n.clone(0);e.inherited=!0,this.object.materials.push(e)}this.objects.push(this.object)},finalize:function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return 3*(n>=0?n-1:n+t/3)},parseNormalIndex:function(e,t){const n=parseInt(e,10);return 3*(n>=0?n-1:n+t/3)},parseUVIndex:function(e,t){const n=parseInt(e,10);return 2*(n>=0?n-1:n+t/2)},addVertex:function(e,t,n){const o=this.vertices,s=this.object.geometry.vertices;s.push(o[e+0],o[e+1],o[e+2]),s.push(o[t+0],o[t+1],o[t+2]),s.push(o[n+0],o[n+1],o[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const o=this.normals,s=this.object.geometry.normals;s.push(o[e+0],o[e+1],o[e+2]),s.push(o[t+0],o[t+1],o[t+2]),s.push(o[n+0],o[n+1],o[n+2])},addFaceNormal:function(e,t,n){const o=this.vertices,s=this.object.geometry.normals;c.fromArray(o,e),l.fromArray(o,t),h.fromArray(o,n),p.subVectors(h,l),u.subVectors(c,l),p.cross(u),p.normalize(),s.push(p.x,p.y,p.z),s.push(p.x,p.y,p.z),s.push(p.x,p.y,p.z)},addColor:function(e,t,n){const o=this.colors,s=this.object.geometry.colors;void 0!==o[e]&&s.push(o[e+0],o[e+1],o[e+2]),void 0!==o[t]&&s.push(o[t+0],o[t+1],o[t+2]),void 0!==o[n]&&s.push(o[n+0],o[n+1],o[n+2])},addUV:function(e,t,n){const o=this.uvs,s=this.object.geometry.uvs;s.push(o[e+0],o[e+1]),s.push(o[t+0],o[t+1]),s.push(o[n+0],o[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,o,s,i,a,r,c){const l=this.vertices.length;let h=this.parseVertexIndex(e,l),u=this.parseVertexIndex(t,l),p=this.parseVertexIndex(n,l);if(this.addVertex(h,u,p),this.addColor(h,u,p),void 0!==a&&""!==a){const e=this.normals.length;h=this.parseNormalIndex(a,e),u=this.parseNormalIndex(r,e),p=this.parseNormalIndex(c,e),this.addNormal(h,u,p)}else this.addFaceNormal(h,u,p);if(void 0!==o&&""!==o){const e=this.uvs.length;h=this.parseUVIndex(o,e),u=this.parseUVIndex(s,e),p=this.parseUVIndex(i,e),this.addUV(h,u,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,o=e.length;n<o;n++){const o=this.parseVertexIndex(e[n],t);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,o=this.uvs.length;for(let t=0,o=e.length;t<o;t++)this.addVertexLine(this.parseVertexIndex(e[t],n));for(let e=0,n=t.length;e<n;e++)this.addUVLine(this.parseUVIndex(t[e],o))}};return e.startObject("",!1),e}class d extends o.P{constructor(e){super(e),this.materials=null}load(e,t,n,s){const i=this,a=new o.v(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,(function(n){try{t(i.parse(n))}catch(t){s?s(t):console.error(t),i.manager.itemError(e)}}),n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new m;-1!==e.indexOf("\r\n")&&(e=e.replace(/\r\n/g,"\n")),-1!==e.indexOf("\\\n")&&(e=e.replace(/\\\n/g,""));const n=e.split("\n");let c="",l="",h=0,u=[];const p="function"==typeof"".trimLeft;for(let e=0,o=n.length;e<o;e++)if(c=n[e],c=p?c.trimLeft():c.trim(),h=c.length,0!==h&&(l=c.charAt(0),"#"!==l))if("v"===l){const e=c.split(/\s+/);switch(e[0]){case"v":t.vertices.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3])),e.length>=7?t.colors.push(parseFloat(e[4]),parseFloat(e[5]),parseFloat(e[6])):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(e[1]),parseFloat(e[2]),parseFloat(e[3]));break;case"vt":t.uvs.push(parseFloat(e[1]),parseFloat(e[2]))}}else if("f"===l){const e=c.substr(1).trim().split(/\s+/),n=[];for(let t=0,o=e.length;t<o;t++){const o=e[t];if(o.length>0){const e=o.split("/");n.push(e)}}const o=n[0];for(let e=1,s=n.length-1;e<s;e++){const s=n[e],i=n[e+1];t.addFace(o[0],s[0],i[0],o[1],s[1],i[1],o[2],s[2],i[2])}}else if("l"===l){const e=c.substring(1).trim().split(" ");let n=[];const o=[];if(-1===c.indexOf("/"))n=e;else for(let t=0,s=e.length;t<s;t++){const s=e[t].split("/");""!==s[0]&&n.push(s[0]),""!==s[1]&&o.push(s[1])}t.addLineGeometry(n,o)}else if("p"===l){const e=c.substr(1).trim().split(" ");t.addPointGeometry(e)}else if(null!==(u=s.exec(c))){const e=(" "+u[0].substr(1).trim()).substr(1);t.startObject(e)}else if(a.test(c))t.object.startMaterial(c.substring(7).trim(),t.materialLibraries);else if(i.test(c))t.materialLibraries.push(c.substring(7).trim());else if(r.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if("s"===l){if(u=c.split(" "),u.length>1){const e=u[1].trim().toLowerCase();t.object.smooth="0"!==e&&"off"!==e}else t.object.smooth=!0;const e=t.object.currentMaterial();e&&(e.smooth=t.object.smooth)}else{if("\0"===c)continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}t.finalize();const d=new o.z;d.materialLibraries=[].concat(t.materialLibraries);if(!0===!(1===t.objects.length&&0===t.objects[0].geometry.vertices.length))for(let e=0,n=t.objects.length;e<n;e++){const n=t.objects[e],s=n.geometry,i=n.materials,a="Line"===s.type,r="Points"===s.type;let c=!1;if(0===s.vertices.length)continue;const l=new o.i;l.setAttribute("position",new o.w(s.vertices,3)),s.normals.length>0&&l.setAttribute("normal",new o.w(s.normals,3)),s.colors.length>0&&(c=!0,l.setAttribute("color",new o.w(s.colors,3))),!0===s.hasUVIndices&&l.setAttribute("uv",new o.w(s.uvs,2));const h=[];for(let e=0,n=i.length;e<n;e++){const n=i[e],s=n.name+"_"+n.smooth+"_"+c;let l=t.materials[s];if(null!==this.materials)if(l=this.materials.create(n.name),!a||!l||l instanceof o.I){if(r&&l&&!(l instanceof o.pb)){const e=new o.pb({size:10,sizeAttenuation:!1});o.S.prototype.copy.call(e,l),e.color.copy(l.color),e.map=l.map,l=e}}else{const e=new o.I;o.S.prototype.copy.call(e,l),e.color.copy(l.color),l=e}void 0===l&&(l=a?new o.I:r?new o.pb({size:1,sizeAttenuation:!1}):new o.Y,l.name=n.name,l.flatShading=!n.smooth,l.vertexColors=c,t.materials[s]=l),h.push(l)}let u;if(h.length>1){for(let e=0,t=i.length;e<t;e++){const t=i[e];l.addGroup(t.groupStart,t.groupCount,e)}u=a?new o.K(l,h):r?new o.ob(l,h):new o.V(l,h)}else u=a?new o.K(l,h[0]):r?new o.ob(l,h[0]):new o.V(l,h[0]);u.name=n.name,d.add(u)}else if(t.vertices.length>0){const e=new o.pb({size:1,sizeAttenuation:!1}),n=new o.i;n.setAttribute("position",new o.w(t.vertices,3)),t.colors.length>0&&void 0!==t.colors[0]&&(n.setAttribute("color",new o.w(t.colors,3)),e.vertexColors=!0);const s=new o.ob(n,e);d.add(s)}return d}}},339:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(239);class s{constructor(e,t=32){this.lut=[],this.map=[],this.n=0,this.minV=0,this.maxV=1,this.setColorMap(e,t)}set(e){return!0===e.isLut&&this.copy(e),this}setMin(e){return this.minV=e,this}setMax(e){return this.maxV=e,this}setColorMap(e,t=32){this.map=i[e]||i.rainbow,this.n=t;const n=1/this.n;this.lut.length=0;for(let e=0;e<=1;e+=n)for(let t=0;t<this.map.length-1;t++)if(e>=this.map[t][0]&&e<this.map[t+1][0]){const n=this.map[t][0],s=this.map[t+1][0],i=new o.p(this.map[t][1]),a=new o.p(this.map[t+1][1]),r=i.lerp(a,(e-n)/(s-n));this.lut.push(r)}return this}copy(e){return this.lut=e.lut,this.map=e.map,this.n=e.n,this.minV=e.minV,this.maxV=e.maxV,this}getColor(e){e<=this.minV?e=this.minV:e>=this.maxV&&(e=this.maxV),e=(e-this.minV)/(this.maxV-this.minV);let t=Math.round(e*this.n);return t==this.n&&(t-=1),this.lut[t]}addColorMap(e,t){return i[e]=t,this}createCanvas(){const e=document.createElement("canvas");return e.width=1,e.height=this.n,this.updateCanvas(e),e}updateCanvas(e){const t=e.getContext("2d",{alpha:!1}),n=t.getImageData(0,0,1,this.n),s=n.data;let i=0;const a=1/this.n;for(let e=1;e>=0;e-=a)for(let t=this.map.length-1;t>=0;t--)if(e<this.map[t][0]&&e>=this.map[t-1][0]){const n=this.map[t-1][0],a=this.map[t][0],r=new o.p(this.map[t-1][1]),c=new o.p(this.map[t][1]),l=r.lerp(c,(e-n)/(a-n));s[4*i]=Math.round(255*l.r),s[4*i+1]=Math.round(255*l.g),s[4*i+2]=Math.round(255*l.b),s[4*i+3]=255,i+=1}return t.putImageData(n,0,0),e}}s.prototype.isLut=!0;const i={rainbow:[[0,255],[.2,65535],[.5,65280],[.8,16776960],[1,16711680]],cooltowarm:[[0,3952322],[.2,10206463],[.5,14474460],[.8,16163717],[1,11797542]],blackbody:[[0,0],[.2,7864320],[.5,15086080],[.8,16776960],[1,16777215]],grayscale:[[0,0],[.2,4210752],[.5,8355712],[.8,12566463],[1,16777215]]}}}]);