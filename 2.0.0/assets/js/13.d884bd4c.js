(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{459:function(t,a,e){"use strict";e.r(a);var s=e(19),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("p",[t._v("The following table lists all available options:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("duration")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[e("code",[t._v("10000")])]),t._v(" "),e("td",[t._v("Duration of the chart in milliseconds (how much time of data it will show).")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("ttl")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Duration of the data to be kept in milliseconds. If not set, old data will be automatically deleted as it disappears off the chart.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("delay")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[e("code",[t._v("0")])]),t._v(" "),e("td",[t._v("Delay added to the chart in milliseconds so that upcoming values are known before lines are plotted. This makes the chart look like a continual stream rather than very jumpy on the right hand side. Specify the maximum expected delay.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("refresh")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[e("code",[t._v("1000")])]),t._v(" "),e("td",[t._v("Refresh interval of data in milliseconds. "),e("code",[t._v("onRefresh")]),t._v(" callback function will be called at this interval.")])]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"#onrefresh"}},[e("code",[t._v("onRefresh")])])]),t._v(" "),e("td",[e("code",[t._v("function")])]),t._v(" "),e("td",[e("code",[t._v("null")])]),t._v(" "),e("td",[t._v("Callback function that will be called at a regular interval. "),e("a",{attrs:{href:"#onrefresh"}},[t._v("more...")])])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("frameRate")])]),t._v(" "),e("td",[e("code",[t._v("number")])]),t._v(" "),e("td",[e("code",[t._v("30")])]),t._v(" "),e("td",[t._v("Frequency at which the chart is drawn on a display (frames per second). Decrease this value to save CPU power. "),e("RouterLink",{attrs:{to:"/guide/performance.html#lowering-cpu-usage"}},[t._v("more...")])],1)]),t._v(" "),e("tr",[e("td",[e("code",[t._v("pause")])]),t._v(" "),e("td",[e("code",[t._v("boolean")])]),t._v(" "),e("td",[e("code",[t._v("false")])]),t._v(" "),e("td",[t._v("If set to "),e("code",[t._v("true")]),t._v(", scrolling stops. Note that "),e("code",[t._v("onRefresh")]),t._v(" callback is called even when this is set to "),e("code",[t._v("true")]),t._v(".")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("Refer to the "),e("RouterLink",{attrs:{to:"/guide/getting-started.html#configuration"}},[t._v("Configuration")]),t._v(" section if you don't know how to configure these options.")],1)]),t._v(" "),e("p",[t._v("Note that the following axis options are ignored for the "),e("code",[t._v("'realtime'")]),t._v(" scale.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("bounds")])]),t._v(" "),e("li",[e("code",[t._v("max")])]),t._v(" "),e("li",[e("code",[t._v("min")])]),t._v(" "),e("li",[e("code",[t._v("offset")]),t._v(" (always "),e("code",[t._v("false")]),t._v(")")]),t._v(" "),e("li",[e("code",[t._v("ticks.autoSkip")]),t._v(" (always "),e("code",[t._v("false")]),t._v(")")]),t._v(" "),e("li",[e("code",[t._v("ticks.major.enabled")]),t._v(" (always "),e("code",[t._v("true")]),t._v(")")])]),t._v(" "),e("h2",{attrs:{id:"onrefresh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#onrefresh"}},[t._v("#")]),t._v(" onRefresh")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("onRefresh")]),t._v(" callback function takes one argument, a reference to the chart object. The "),e("code",[t._v("this")]),t._v(" keyword for the callback function is set to the scale object.")]),t._v(" "),e("p",[t._v("You can update your datasets here. The chart will be automatically updated after returning, so you don't need to call "),e("code",[t._v("chart.update()")]),t._v(". The following example shows how to append data at every refresh interval.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myChart "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  options"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    scales"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'realtime'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        realtime"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onRefresh")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasets"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dataset")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              dataset"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                y"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Math"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);