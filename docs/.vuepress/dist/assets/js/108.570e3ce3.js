(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{534:function(_,v,t){"use strict";t.r(v);var e=t(42),s=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("之前的拖拽缩放开发完了，但是只能单个单个操作，很多时候布局的时候是想多个元素作为一组一起移动的，所以还需要多选功能。先放效果图："),t("br"),_._v(" "),t("img",{attrs:{src:"https://gitee.com/knif/img/raw/master/img/2021020810.gif",alt:""}})]),_._v(" "),t("p",[_._v("完成这个功能有几个问题需要考虑：")]),_._v(" "),t("ol",[t("li",[_._v("虚线选框怎么写")]),_._v(" "),t("li",[_._v("怎么判断哪些元素被虚线选框选中了")]),_._v(" "),t("li",[_._v("被多选的元素怎么一起移动")])]),_._v(" "),t("h2",{attrs:{id:"问题解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题解决"}},[_._v("#")]),_._v(" 问题解决")]),_._v(" "),t("h3",{attrs:{id:"_1-虚线选框怎么写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-虚线选框怎么写"}},[_._v("#")]),_._v(" 1.虚线选框怎么写？")]),_._v(" "),t("p",[_._v("虚线选框我直接使用的div元素配合css样式来实现。"),t("br"),_._v("\n在window上绑定"),t("code",[_._v("mousedown")]),_._v("、"),t("code",[_._v("mousemove")]),_._v("和"),t("code",[_._v("mouseup")]),_._v("事件。\n"),t("code",[_._v("mousedown")]),_._v("事件记录鼠标点下的位置,并将虚线选框的定位定到这个位置。"),t("br"),_._v(" "),t("code",[_._v("mousemove")]),_._v("事件实时更新虚线选框的宽度和高度\n"),t("code",[_._v("mouseup")]),_._v("事件将选框隐藏")]),_._v(" "),t("h3",{attrs:{id:"_2-怎么判断哪些元素被选中了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-怎么判断哪些元素被选中了"}},[_._v("#")]),_._v(" 2.怎么判断哪些元素被选中了？")]),_._v(" "),t("p",[_._v("在"),t("code",[_._v("mousemove")]),_._v("事件中判断。判断选没选中就是判断两个元素有没有相交。相交的方式多种多样，不是很好写，那我们证明相交可以换一种思路，可以证明两个元素不相交，两个长方形在什么情况下不相交呢？看下图：\n"),t("img",{attrs:{src:"https://gitee.com/knif/img/raw/master/img/20210220210810152739.png",alt:""}}),_._v("\n这是两个不相交的长方形，这两个长方形不相交需要满足以下两个条件的其中一条即可：")]),_._v(" "),t("ol",[t("li",[_._v("区间 [a1,a2] 和区间[x1,x2]没有重叠部分")]),_._v(" "),t("li",[_._v("区间 [b1,b2] 和区间[y1,y2]没有重叠部分")])]),_._v(" "),t("p",[_._v("使用"),t("code",[_._v("getBoundingClientRect()")]),_._v("方法得到两个"),t("code",[_._v("div")]),_._v("的"),t("code",[_._v("left")]),_._v(","),t("code",[_._v("top")]),_._v(","),t("code",[_._v("width")]),_._v(","),t("code",[_._v("heigh")]),_._v("。然后判断这两个元素如果没有不相交，即是相交。")]),_._v(" "),t("h3",{attrs:{id:"_3-被选中的元素怎么一起移动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-被选中的元素怎么一起移动"}},[_._v("#")]),_._v(" 3.被选中的元素怎么一起移动？")]),_._v(" "),t("p",[_._v("拖拽并移动的时候，先判断一下当前被选中的有几个元素，如果只有一个元素被选中，那被拖动的就是当前的这个元素。如果有不止一个元素被选中，那就让所有被选中的元素都按照鼠标拖动的规律一起动。")])])}),[],!1,null,null,null);v.default=s.exports}}]);