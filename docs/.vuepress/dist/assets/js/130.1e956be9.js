(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{475:function(t,s,a){"use strict";a.r(s);var o=a(14),n=Object(o.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("又又又是百度地图，这次呢是产品经理说要让百度地图的点hover之后打开浮动窗口，这很简单，不过呢这个窗口不可以被其他的元素遮挡，我写完了，具体效果如下：\n"),s("img",{attrs:{src:"https://daodaoblogpicgo.oss-cn-shanghai.aliyuncs.com/img/2023091403.gif",alt:""}})]),t._v(" "),s("p",[t._v("是不是很好奇怎么做到的，首先地图层级是在最底下的，地图上打开的窗口却要比覆盖在地图上的元素高，这不是既要...又要...吗")]),t._v(" "),s("h2",{attrs:{id:"解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[t._v("#")]),t._v(" 解决办法")]),t._v(" "),s("p",[t._v("其实很简单，打开的浮动窗口是我自己用div写的，那么怎么才能让这个窗口跟随地图动起来呢。")]),t._v(" "),s("p",[t._v("这里有个很实用的api：\n"),s("img",{attrs:{src:"https://daodaoblogpicgo.oss-cn-shanghai.aliyuncs.com/img/20230914141238.png",alt:""}}),t._v("\n这个方法可以将经纬度坐标转换为像素坐标")]),t._v(" "),s("p",[t._v("因此只需要在地图的moving和zoomend事件中根据点坐标转换出当前的像素坐标，然后更新信息窗口绝对定位就可以了，哈哈哈哈哈我可真是太聪明了")])])}),[],!1,null,null,null);s.default=n.exports}}]);