(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{633:function(s,t,a){"use strict";a.r(t);var n=a(47),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"矢量叉积"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#矢量叉积"}},[s._v("#")]),s._v(" 矢量叉积")]),s._v(" "),a("p",[s._v("首先需要先学一样东西，叫做矢量叉积")]),s._v(" "),a("p",[s._v("现有 矢量a = (x1, y1),矢量b = (x2, y2), a × b = (x1y2 - x2y1),方向垂直于原始的两个矢量。")]),s._v(" "),a("p",[s._v("我们已经说过 a × b 垂直于 a 和 b,但又两个垂直于 a 和 b 的方向，具体垂直指向哪边呢？这个符合右手定则："),a("br"),s._v(" "),a("img",{attrs:{src:"https://daodaoblogpicgo.oss-cn-shanghai.aliyuncs.com/img/202404151502743.png",alt:""}}),a("br"),s._v("\n把食指指向矢量a的方向，把中指指向矢量b的方向，拇指指着的方向就是叉积的方向。")]),s._v(" "),a("h2",{attrs:{id:"算法设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算法设计"}},[s._v("#")]),s._v(" 算法设计")]),s._v(" "),a("p",[s._v("我们可以在路径上找出三个点来构成两个矢量，再使用叉积公式判断叉积是正还是负：")]),s._v(" "),a("ul",[a("li",[s._v("如果叉积小于0， 则为顺时针")]),s._v(" "),a("li",[s._v("如果叉积大于0，则为逆时针")]),s._v(" "),a("li",[s._v("如果叉积等于0， 则平行"),a("br"),s._v("\n当多边形是凸多边形时，各个点均满足这个规律，但如果是凹多边形，再凹边处就会存在特殊情况。")])]),s._v(" "),a("p",[s._v("因此，我们需要找到一个绝对为凸边的点，我们找到路径中x最大的点，这个点一定会是凸边，通过这个点与相邻的两个点构成的矢量就可以通过叉积知道路径的走向了。")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 判断路径是否为顺时针方向，顺时针范围true, 逆时针为false")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("isClockwise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("points")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 找到x最大的点的index")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" maxXIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" maxX "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("maxXIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("c3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" x1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("y1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("x2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("y2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("x3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("y3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("maxX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            maxX "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            maxXIndex "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("maxXIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果是第1个点x最大，那另外两个点为路径最后一个点和第二个点")]),s._v("\n        c1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        c2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("maxXIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        c3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("maxXIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("maxXIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果是最后一个点x最大，另外两个点为倒数第二个点和第一个点")]),s._v("\n        c1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("maxXIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        c2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("maxXIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        c3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果不是第1和最后一个点x最大，那另外两个点就是正常的前一个和后一个点")]),s._v("\n        c1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("maxXIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        c2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("maxXIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        c3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" points"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("maxXIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    x1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    y1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    x2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    y2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    x3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    y3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// - 如果叉积小于0， 则为顺时针  ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// - 如果叉积大于0，则为逆时针  ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// - 如果叉积等于0， 则平行 ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("x3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("y1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);