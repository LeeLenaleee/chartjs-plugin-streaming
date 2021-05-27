(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{435:function(n,t,e){"use strict";e.r(t);var a=e(64),r=Object(a.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"interactions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interactions"}},[this._v("#")]),this._v(" Interactions")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:setup:1>\nconst data = {\n  datasets: [\n    {\n      label: 'Dataset 1 (Linear Interpolation)',\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n      borderColor: Utils.CHART_COLORS.red,\n      borderDash: [8, 4],\n      data: []\n    },\n    {\n      label: 'Dataset 2 (Cubic Interpolation)',\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n      borderColor: Utils.CHART_COLORS.blue,\n      cubicInterpolationMode: 'monotone',\n      data: []\n    }\n  ]\n};\n\nconst onRefresh = chart => {\n  const now = Date.now();\n  chart.data.datasets.forEach(dataset => {\n    dataset.data.push({\n      x: now,\n      y: Utils.rand(-100, 100)\n    });\n  });\n};\n// </block:setup>\n\n// <block:actions:2>\nconst actions = [\n  {\n    name: 'duration +1000',\n    handler(chart) {\n      const realtimeOpts = chart.options.scales.x.realtime;\n      if (realtimeOpts.duration < 60000) {\n        realtimeOpts.duration += 1000;\n        chart.update('none');\n      }\n    }\n  },\n  {\n    name: 'duration -1000',\n    handler(chart) {\n      const realtimeOpts = chart.options.scales.x.realtime;\n      if (realtimeOpts.duration > 1000) {\n        realtimeOpts.duration -= 1000;\n        chart.update('none');\n      }\n    }\n  },\n  {\n    name: 'ttl +1000',\n    handler(chart) {\n      const realtimeOpts = chart.options.scales.x.realtime;\n      if (realtimeOpts.ttl < 60000) {\n        realtimeOpts.ttl += 1000;\n        chart.update('none');\n      }\n    }\n  },\n  {\n    name: 'ttl -1000',\n    handler(chart) {\n      const realtimeOpts = chart.options.scales.x.realtime;\n      if (realtimeOpts.ttl > 1000) {\n        realtimeOpts.ttl -= 1000;\n        chart.update('none');\n      }\n    }\n  },\n  {\n    name: 'refresh +200',\n    handler(chart) {\n      const realtimeOpts = chart.options.scales.x.realtime;\n      if (realtimeOpts.refresh < 5000) {\n        realtimeOpts.refresh += 200;\n        chart.update('none');\n      }\n    }\n  },\n  {\n    name: 'refresh -200',\n    handler(chart) {\n      const realtimeOpts = chart.options.scales.x.realtime;\n      if (realtimeOpts.refresh > 200) {\n        realtimeOpts.refresh -= 200;\n        chart.update('none');\n      }\n    }\n  },\n  {\n    name: 'delay +200',\n    handler(chart) {\n      const realtimeOpts = chart.options.scales.x.realtime;\n      if (realtimeOpts.delay < 5000) {\n        realtimeOpts.delay += 200;\n        chart.update('none');\n      }\n    }\n  },\n  {\n    name: 'delay -200',\n    handler(chart) {\n      const realtimeOpts = chart.options.scales.x.realtime;\n      if (realtimeOpts.delay > 0) {\n        realtimeOpts.delay -= 200;\n        chart.update('none');\n      }\n    }\n  },\n  {\n    name: 'frameRate: 1',\n    handler(chart) {\n      chart.options.scales.x.realtime.frameRate = 1;\n      chart.update('none');\n    }\n  },\n  {\n    name: 'frameRate: 5',\n    handler(chart) {\n      chart.options.scales.x.realtime.frameRate = 5;\n      chart.update('none');\n    }\n  },\n  {\n    name: 'frameRate: 30',\n    handler(chart) {\n      chart.options.scales.x.realtime.frameRate = 30;\n      chart.update('none');\n    }\n  },\n  {\n    name: 'frameRate: 60',\n    handler(chart) {\n      chart.options.scales.x.realtime.frameRate = 60;\n      chart.update('none');\n    }\n  },\n  {\n    name: 'pause on/off',\n    handler(chart) {\n      const realtimeOpts = chart.options.scales.x.realtime;\n      realtimeOpts.pause = !realtimeOpts.pause;\n      chart.update('none');\n    }\n  }\n];\n// </block:actions>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    scales: {\n      x: {\n        type: 'realtime',\n        realtime: {\n          duration: 20000,\n          ttl: 60000,\n          refresh: 1000,\n          delay: 2000,\n          onRefresh: onRefresh,\n          frameRate: 30,\n          pause: false\n        }\n      },\n      y: {\n        title: {\n          display: true,\n          text: 'Value'\n        }\n      }\n    },\n    interaction: {\n      intersect: false\n    }\n  }\n};\n// </block:config>\n\nconfig.plugins = [\n  {\n    afterDraw(chart) {\n      const realtimeOpts = chart.options.scales.x.realtime;\n      const ctx = chart.ctx;\n      ctx.save();\n      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';\n      ctx.beginPath();\n      ctx.moveTo(200, 176);\n      ctx.arcTo(70, 176, 70, 40, 10);\n      ctx.arcTo(70, 40, 200, 40, 10);\n      ctx.arcTo(200, 40, 200, 176, 10);\n      ctx.arcTo(200, 176, 70, 176, 10);\n      ctx.closePath();\n      ctx.fill();\n      ctx.font = '12px monospace';\n      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';\n      ctx.textBaseline = 'top';\n      ctx.fillText('duration: ' + realtimeOpts.duration, 80, 50);\n      ctx.fillText('ttl: ' + realtimeOpts.ttl, 80, 70);\n      ctx.fillText('refresh: ' + realtimeOpts.refresh, 80, 90);\n      ctx.fillText('delay: ' + realtimeOpts.delay, 80, 110);\n      ctx.fillText('frameRate: ' + realtimeOpts.frameRate, 80, 130);\n      ctx.fillText('pause: ' + realtimeOpts.pause, 80, 150);\n      ctx.restore();\n    }\n  }\n];\n\nconfig.options.plugins = {\n  annotation: false,\n  datalabels: false,\n  zoom: false\n};\n\nmodule.exports = {\n  actions: actions,\n  config: config\n};\n"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);