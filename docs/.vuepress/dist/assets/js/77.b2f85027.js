(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{423:function(s,t,a){"use strict";a.r(t);var n=a(14),p=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[s._v("#")]),s._v(" 需求")]),s._v(" "),t("p",[s._v("读取文件转换成RDD，并完成：")]),s._v(" "),t("ul",[t("li",[s._v("打印输出：热门搜索时间段(小时精度) Top3")]),s._v(" "),t("li",[s._v("打印输出：热门搜索词Top3")]),s._v(" "),t("li",[s._v("打印输出：统计黑马程序员关键字在哪个时段被搜索最多")]),s._v(" "),t("li",[s._v("将数据转换为JSON格式，写出为文件")])]),s._v(" "),t("h2",{attrs:{id:"代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码"}},[s._v("#")]),s._v(" 代码")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n演示PySpark综合案例\n"""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建执行环境入口对象")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pyspark "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" SparkConf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("SparkContext\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os\nos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("environ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PYSPARK_PYTHON'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:/python/python3.10.0/python.exe"')]),s._v("\nos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("environ"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HADOOP_HOME'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"D:/python/hadoop3.0.0"')]),s._v("\n\nconf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SparkConf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("setMaster"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local[*]"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("setAppName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"count_app"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"spark.default.parallelism"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SparkContext"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("conf"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读取文件转换成RDD")]),s._v("\nvalue_list_rdd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" sc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("textFile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:/Users/Administrator/Downloads/search_log.txt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lambda")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("split"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\t'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TODO1 需求1: 热门搜索时间段Top3(小时精度)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.1 取出全部的时间并转换为小时")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.2 转换为（小时， 1）的二元元组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.3 key分组聚合value")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.4 排序（降序）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.5 取前三")]),s._v("\nresult_1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value_list_rdd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lambda")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("split"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\\\n                            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lambda")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\\\n                            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("reduceByKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lambda")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\\\n                            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sortBy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lambda")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ascending"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" numPartitions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\\\n                            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("take"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"热门搜索时间段Top3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("result_1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TODO 需求2： 热门搜索词 Top3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.1 取出全部的搜索词")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.2 （词，1）二元数组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.3 分组聚合")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.4 排序")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.5 Top3")]),s._v("\nresult_2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value_list_rdd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lambda")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\\\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("reduceByKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lambda")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\\\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sortBy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lambda")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ascending"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" numPartitions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\\\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("take"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"热门搜索词Top3"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("result_2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TODO 需求3： 统计黑马程序员关键字在什么时间段被搜索的最多")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.1 过滤内容，只保留黑马程序员关键词")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.2 转换为（小时，1）的二元元组")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.3 key分组聚合value")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.4 排序（降序）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.5 取前1")]),s._v("\nresult_3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" value_list_rdd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("filter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lambda")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'黑马程序员'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\\\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lambda")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("split"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\\\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("reduceByKey"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lambda")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\\\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sortBy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lambda")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ascending"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" numPartitions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\\\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("take"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"统计黑马程序员关键字在什么时间段被搜索的最多"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" result_3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TODO 需求4: 将数据转换为JSON格式，写出到文件中")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4.1 转换为JSON格式的RDD")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4.2 写出为文件")]),s._v("\nvalue_list_rdd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lambda")]),s._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"time"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user_id"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key_word"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rank1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rank2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\\\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("saveAsTextFile"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./output_json"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nsc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br")])])])}),[],!1,null,null,null);t.default=p.exports}}]);