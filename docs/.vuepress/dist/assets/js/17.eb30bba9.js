(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{314:function(t,n,a){"use strict";a.d(n,"f",(function(){return o})),a.d(n,"e",(function(){return p})),a.d(n,"c",(function(){return c})),a.d(n,"g",(function(){return i})),a.d(n,"d",(function(){return v})),a.d(n,"b",(function(){return u})),a.d(n,"h",(function(){return l})),a.d(n,"a",(function(){return _}));a(94),a(167),a(67),a(9),a(311),a(95),a(28);var s=a(315),e=a(310),r=a(322);function o(t,n){var a=void 0!==t&&t&&!isNaN(t)?parseInt(t):0,e=new s.a;return e.showPanel(a),n.appendChild(e.dom),e}function p(t,n){var a=void 0!==n&&n?n:{},s=new e.Sb(a);return s.shadowMap.enabled=!0,s.shadowMapSoft=!0,s.shadowMap.type=e.gb,s.setClearColor(new e.o(0)),s.setSize(t.clientWidth,t.clientHeight),s.shadowMap.enabled=!0,t.appendChild(s.domElement),s}function c(t,n){var a=void 0!==n?n:new e.Pb(-30,40,30),s=new e.hb(45,t.clientWidth/t.clientHeight,.1,1e3);return s.position.set(a.x,a.y,a.z),s.lookAt(new e.Pb(0,0,0)),s}function i(t,n){var a=new r.a(t,n.domElement);return a.rotateSpeed=1,a.zoomSpeed=1.2,a.panSpeed=.8,a.noZoom=!1,a.noPan=!1,a.staticMoving=!0,a.dynamicDampingFactor=.3,a.keys=[65,83,68],a}function v(t,n){var a=void 0!==n?n:new e.Pb(-10,30,40),s=new e.Db(16777215);s.position.copy(a),s.shadow.mapSize.width=2048,s.shadow.mapSize.height=2048,s.shadow.camera.fov=15,s.castShadow=!0,s.decay=2,s.penumbra=.05,s.name="spotLight",t.add(s);var r=new e.b(3421236);r.name="ambientLight",t.add(r)}function u(t){var n=new e.jb(60,20,120,120),a=new e.W({color:16777215}),s=new e.T(n,a);return s.receiveShadow=!0,s.rotation.x=-.5*Math.PI,s.position.x=15,s.position.y=0,s.position.z=0,t.add(s),s}function l(t,n){var a=t.children;a&&a.length>0?a.forEach((function(t){l(t,n)})):t instanceof e.T&&(t.material instanceof Array?t.material.forEach((function(t){t.color=new e.o(n(Math.random()).hex()),0===t.name.indexOf("building")&&(t.emissive=new e.o(4473924),t.transparent=!0,t.opacity=.8)})):(t.material.color=new e.o(n(Math.random()).hex()),0==t.material.name.indexOf("building")&&(t.material.emissive=new e.o(4473924),t.material.transparent=!0,t.material.opacity=.8)))}function _(t){var n=new e.Jb,a=new e.W({map:n.load("/daodao-knowledge/textures/earth/Earth.png"),normalMap:n.load("/daodao-knowledge/textures/earth/EarthNormal.png"),specularMap:n.load("/daodao-knowledge/textures/earth/EarthSpec.png"),specular:new e.o(4474026),normalScale:new e.Ob(6,6),shininess:.5}),s=new e.T(new e.Bb(15,40,40),a);t.add(s);var r=new e.eb;return v(r),t.add(r),{earth:s,pivot:r}}},360:function(t,n,a){},403:function(t,n,a){"use strict";a(360)},434:function(t,n,a){"use strict";a.r(n);var s=a(310),e=a(313),r=a(314),o={data:function(){return{gui:null}},mounted:function(){this.init()},beforeDestroy:function(){this.gui&&this.gui.destroy()},methods:{init:function(){var t=document.getElementById("three1"),n=Object(r.f)(0,t),a=Object(r.e)(t),o=Object(r.c)(t),p=new s.vb,c=Object(r.g)(o,a),i=new s.n;Object(r.d)(p),Object(r.b)(p).position.y=0;var v=new s.g(4,4,4),u=new s.Y({color:16711680}),l=new s.T(v,u);l.castShadow=!0,l.position.x=-10,l.position.y=4,l.position.z=0,p.add(l);var _=new s.Bb(4,20,20),d=new s.Y({color:7829503}),k=new s.T(_,d);k.position.x=20,k.position.y=0,k.position.z=2,k.castShadow=!0,p.add(k);var b=new s.q(2,2,20),m=new s.Y({color:7864183}),h=new s.T(b,m);h.castShadow=!0,h.position.set(0,0,1),p.add(h),o.position.x=-30,o.position.y=40,o.position.z=30,o.lookAt(p.position);var f=new s.b(3487029);p.add(f);var w=0,g=new function(){this.rotationSpeed=.02,this.bouncingSpeed=.03,this.scalingSpeed=.03},C=new e.a({},t);C.add(g,"rotationSpeed",0,.5),C.add(g,"bouncingSpeed",0,.5),C.add(g,"scalingSpeed",0,.5),this.gui=C,function t(){n.update(),c.update(i.getDelta()),l.rotation.x+=g.rotationSpeed,l.rotation.y+=g.rotationSpeed,l.rotation.z+=g.rotationSpeed,w+=g.bouncingSpeed,k.position.x=20+10*Math.cos(w),k.position.y=2+10*Math.abs(Math.sin(w)),S+=g.scalingSpeed;var s=Math.abs(Math.sin(S/4)),e=Math.abs(Math.cos(S/5)),r=Math.abs(Math.sin(S/7));h.scale.set(s,e,r),requestAnimationFrame(t),a.render(p,o)}();w=0;var S=0}}},p=(a(403),a(42)),c=Object(p.a)(o,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ul",[a("li",[a("strong",[t._v("基础动画")]),t._v("：\n"),a("code",[t._v("Threejs")]),t._v("里所有动画的基础，修改对象的三个属性：位置、旋转和缩放。")]),t._v(" "),a("li",[a("strong",[t._v("移动相机")]),t._v("：\n动画中一个很重要的部分是在场景中移动相机的能力。")]),t._v(" "),a("li",[a("strong",[t._v("变形和蒙皮")]),t._v("：\n制作复杂模型的动画主要有两种方式。使用变形技术，定义几何体之间的过渡；以及使用骨骼和蒙皮技术处理这种过渡。")]),t._v(" "),a("li",[a("strong",[t._v("加载外部动画")])])]),t._v(" "),a("h2",{attrs:{id:"基础动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础动画"}},[t._v("#")]),t._v(" 基础动画")]),t._v(" "),a("p",[t._v("在看例子之前，我们先快速回顾一下"),a("code",[t._v("render")]),t._v("（渲染）循环。为了支持动画，我们需要告诉"),a("code",[t._v("Three.js")]),t._v("多久渲染一次场景。为此，我们要使用由"),a("code",[t._v("HTML5")]),t._v("提供的标准的"),a("code",[t._v("requestAnimationFrame")]),t._v("函数：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//render the scene")]),t._v("\n  render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//schedule the next rendering using requestAnimationFrame")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("render"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("这段代码里，我们只需要在初始化场景时调用一次"),a("code",[t._v("render()")]),t._v("函数。在"),a("code",[t._v("render()")]),t._v("函数中，我们用"),a("code",[t._v("requestAnimationFrame")]),t._v("来安排下一次渲染。这样，浏览器就可以保证以正确的时间间隔（通常是60次每秒）调用"),a("code",[t._v("render()")]),t._v("函数。通过"),a("code",[t._v("requestAnimationFrame")]),t._v("，我们不必告诉浏览器什么时候需要刷新屏幕，而是请求浏览器在最适合的时候执行我们提供的函数。通常情况下其结果是60fps（帧频）。使用"),a("code",[t._v("requestAnimationFrame")]),t._v("会让你的动画运行得更加平缓，而且对CPU和GPU更加友好，你再也不必再担心渲染时机的问题。")]),t._v(" "),a("h3",{attrs:{id:"简单动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单动画"}},[t._v("#")]),t._v(" 简单动画")]),t._v(" "),a("p",[t._v("我们通过改变对象的旋转、缩放、位置、材质、顶点、面，以及其他你想得到的东西，可以很容易地制作出动画。在下一次的"),a("code",[t._v("render")]),t._v("循环中，Threejs就可以渲染这些修改后的属性。")]),t._v(" "),[a("div",{attrs:{id:"three1"}})],t._v(" "),a("p",[t._v("该示例的"),a("code",[t._v("render")]),t._v("循环非常简单。你只要修改网格的属性即可，Threejs会处理剩下的事情：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  trackballControls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDelta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  cube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" controls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotationSpeed\n  cube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" controls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotationSpeed\n  cube"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("z "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" controls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotationSpeed\n\n  step "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" controls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bouncingSpeed\n  sphere"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  sphere"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  scalingStep "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" controls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scalingSpeed\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scaleX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scalingStep "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scaleY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cos")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scalingStep "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" scaleZ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scalingStep "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  cylinder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("scale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scaleX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("scaleY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("scaleZ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("renderScene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  renderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scene"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" camera"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("本博客的dat.gui.js 和 stats.js都是改造过的"),a("br"),t._v("\nstats.js 加上了domEl参数，让stats可以添加到某个确定的dom中去"),a("br"),t._v("\ndat.gui.js改动稍微多一点，"),a("br"),t._v("\n首先第2338行的 GUI 方法，加上了domEl参数，同上"),a("br"),t._v("\n然后第2611行的appendChild使用了domEl,将gui面板添加到domEl中去"),a("br"),t._v("\n然后在gui被销毁掉之后将 autoPlaceVirgin 这个全局变量置为 true,修复下一次点进页面不能添加gui的问题")])])],2)}),[],!1,null,"e1d2f8f2",null);n.default=c.exports}}]);