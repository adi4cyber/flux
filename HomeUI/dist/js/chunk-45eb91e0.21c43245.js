(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45eb91e0"],{5312:function(t,a,s){"use strict";var e={cumulus:"#36c9a5",nimbus:"#ff9f43",stratus:"#ea5455"};a["a"]=e},b9de:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("b-row",[s("b-col",{attrs:{md:"6",sm:"12",lg:"3"}},[s("b-overlay",{attrs:{show:t.fluxListLoading,variant:"transparent",blur:"5px"}},[s("b-card",{attrs:{"no-body":""}},[s("b-card-body",{staticClass:"mr-2"},[s("b-avatar",{attrs:{size:"48",variant:"light-success"}},[s("feather-icon",{attrs:{size:"24",icon:"CpuIcon"}})],1),s("h2",{staticClass:"mt-1"},[t._v(" Total Cores: "+t._s(t.beautifyValue(t.totalCores,0))+" ")]),s("vue-apex-charts",{attrs:{type:"bar",height:"400",options:t.cpuData.chartOptions,series:t.cpuData.series}})],1)],1)],1)],1),s("b-col",{attrs:{md:"6",sm:"12",lg:"3"}},[s("b-overlay",{attrs:{show:t.fluxListLoading,variant:"transparent",blur:"5px"}},[s("b-card",{attrs:{"no-body":""}},[s("b-card-body",{staticClass:"mr-2"},[s("b-avatar",{attrs:{size:"48",variant:"light-success"}},[s("feather-icon",{attrs:{size:"24",icon:"DatabaseIcon"}})],1),s("h2",{staticClass:"mt-1"},[t._v(" Total RAM: "+t._s(t.beautifyValue(t.totalRAM/1024,2))+" TB ")]),s("vue-apex-charts",{attrs:{type:"bar",height:"400",options:t.ramData.chartOptions,series:t.ramData.series}})],1)],1)],1)],1),s("b-col",{attrs:{md:"6",sm:"12",lg:"3"}},[s("b-overlay",{attrs:{show:t.fluxListLoading,variant:"transparent",blur:"5px"}},[s("b-card",{attrs:{"no-body":""}},[s("b-card-body",{staticClass:"mr-2"},[s("b-avatar",{attrs:{size:"48",variant:"light-success"}},[s("feather-icon",{attrs:{size:"24",icon:"HardDriveIcon"}})],1),s("h2",{staticClass:"mt-1"},[t._v(" Total SSD: "+t._s(t.beautifyValue(t.totalSSD/1e3,2))+" TB ")]),s("vue-apex-charts",{attrs:{type:"bar",height:"400",options:t.ssdData.chartOptions,series:t.ssdData.series}})],1)],1)],1)],1),s("b-col",{attrs:{md:"6",sm:"12",lg:"3"}},[s("b-overlay",{attrs:{show:t.fluxListLoading,variant:"transparent",blur:"5px"}},[s("b-card",{attrs:{"no-body":""}},[s("b-card-body",{staticClass:"mr-2"},[s("b-avatar",{attrs:{size:"48",variant:"light-success"}},[s("feather-icon",{attrs:{size:"24",icon:"HardDriveIcon"}})],1),s("h2",{staticClass:"mt-1"},[t._v(" Total HDD: "+t._s(t.beautifyValue(t.totalHDD/1e3,2))+" TB ")]),s("vue-apex-charts",{attrs:{type:"bar",height:"400",options:t.hddData.chartOptions,series:t.hddData.series}})],1)],1)],1)],1)],1),s("b-row",[s("b-col",{attrs:{md:"12",sm:"12",lg:"4"}},[s("b-overlay",{attrs:{show:t.historyStatsLoading,variant:"transparent",blur:"5px"}},[s("b-card",{attrs:{"no-body":""}},[s("b-card-body",{staticClass:"mr-2"},[s("b-avatar",{attrs:{size:"48",variant:"light-success"}},[s("feather-icon",{attrs:{size:"24",icon:"CpuIcon"}})],1),s("h2",{staticClass:"mt-1"},[t._v(" CPU History ")])],1),s("vue-apex-charts",{attrs:{type:"area",height:"200",width:"100%",options:t.cpuHistoryData.chartOptions,series:t.cpuHistoryData.series}})],1)],1)],1),s("b-col",{attrs:{md:"6",sm:"12",lg:"4"}},[s("b-overlay",{attrs:{show:t.historyStatsLoading,variant:"transparent",blur:"5px"}},[s("b-card",{attrs:{"no-body":""}},[s("b-card-body",{staticClass:"mr-2"},[s("b-avatar",{attrs:{size:"48",variant:"light-success"}},[s("feather-icon",{attrs:{size:"24",icon:"DatabaseIcon"}})],1),s("h2",{staticClass:"mt-1"},[t._v(" RAM History ")])],1),s("vue-apex-charts",{attrs:{type:"area",height:"200",width:"100%",options:t.ramHistoryData.chartOptions,series:t.ramHistoryData.series}})],1)],1)],1),s("b-col",{attrs:{md:"6",sm:"12",lg:"4"}},[s("b-overlay",{attrs:{show:t.historyStatsLoading,variant:"transparent",blur:"5px"}},[s("b-card",{attrs:{"no-body":""}},[s("b-card-body",{staticClass:"mr-2"},[s("b-avatar",{attrs:{size:"48",variant:"light-success"}},[s("feather-icon",{attrs:{size:"24",icon:"HardDriveIcon"}})],1),s("h2",{staticClass:"mt-1"},[t._v(" Storage History ")])],1),s("vue-apex-charts",{attrs:{type:"area",height:"200",width:"100%",options:t.ssdHistoryData.chartOptions,series:t.ssdHistoryData.series}})],1)],1)],1)],1)],1)},r=[],o=s("1da1"),u=(s("96cf"),s("159b"),s("b64b"),s("a9e3"),s("b680"),s("ac1f"),s("5319"),s("205f")),i=s("6197"),n=s("a15b"),l=s("b28b"),c=s("9b03"),b=s("e8a3"),m=s("1321"),h=s.n(m),d=s("b307"),p=s("5312"),y=s("bc3a"),f={components:{BCard:u["a"],BCardBody:i["a"],BRow:n["a"],BCol:l["a"],BOverlay:c["a"],BAvatar:b["a"],VueApexCharts:h.a,ToastificationContent:d["a"]},data:function(){var t=this;return{timeoptions:{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"},fluxListLoading:!0,fluxList:[],totalCores:0,totalRAM:0,totalSSD:0,totalHDD:0,cumulusCpuValue:0,nimbusCpuValue:0,stratusCpuValue:0,cumulusRamValue:0,nimbusRamValue:0,stratusRamValue:0,cumulusSSDStorageValue:0,cumulusHDDStorageValue:0,nimbusSSDStorageValue:0,nimbusHDDStorageValue:0,stratusSSDStorageValue:0,stratusHDDStorageValue:0,cpuData:{series:[],chartOptions:{colors:[p["a"].cumulus,p["a"].nimbus,p["a"].stratus],plotOptions:{bar:{columnWidth:"85%",distributed:!0}},dataLabels:{enabled:!1},legend:{show:!1},xaxis:{labels:{categories:["Cumulus","Nimbus","Stratus"],style:{colors:[p["a"].cumulus,p["a"].nimbus,p["a"].stratus],fontSize:"14px",fontFamily:"Montserrat"}}},yaxis:{labels:{style:{colors:"#888",fontSize:"14px",fontFamily:"Montserrat"},formatter:function(a){return t.beautifyValue(a,0)}}},stroke:{lineCap:"round"},labels:["Cumulus","Nimbus","Stratus"]}},cpuHistoryData:{series:[],chartOptions:{colors:[p["a"].cumulus,p["a"].nimbus,p["a"].stratus],grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.5,opacityTo:0,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{formatter:function(a){return new Date(a).toLocaleString("en-GB",t.timeoptions)}},y:{formatter:function(a){return t.beautifyValue(a,0)}}}}},ramData:{series:[],chartOptions:{colors:[p["a"].cumulus,p["a"].nimbus,p["a"].stratus],plotOptions:{bar:{columnWidth:"85%",distributed:!0}},dataLabels:{enabled:!1},legend:{show:!1},xaxis:{labels:{categories:["Cumulus","Nimbus","Stratus"],style:{colors:[p["a"].cumulus,p["a"].nimbus,p["a"].stratus],fontSize:"14px",fontFamily:"Montserrat"}}},yaxis:{labels:{style:{colors:"#888",fontSize:"14px",fontFamily:"Montserrat"},formatter:function(a){return"".concat(t.beautifyValue(a/1024,0))}}},tooltip:{y:{formatter:function(a){return"".concat(t.beautifyValue(a/1024,2)," TB")}}},stroke:{lineCap:"round"},labels:["Cumulus","Nimbus","Stratus"]}},ramHistoryData:{series:[],chartOptions:{colors:[p["a"].cumulus,p["a"].nimbus,p["a"].stratus],grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.5,opacityTo:0,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{formatter:function(a){return new Date(a).toLocaleString("en-GB",t.timeoptions)}},y:{formatter:function(a){return"".concat(t.beautifyValue(a/1024,2)," TB")}}}}},ssdData:{series:[],chartOptions:{colors:[p["a"].cumulus,p["a"].nimbus,p["a"].stratus],plotOptions:{bar:{columnWidth:"85%",distributed:!0}},dataLabels:{enabled:!1},legend:{show:!1},xaxis:{labels:{categories:["Cumulus","Nimbus","Stratus"],style:{colors:[p["a"].cumulus,p["a"].nimbus,p["a"].stratus],fontSize:"14px",fontFamily:"Montserrat"}}},yaxis:{labels:{style:{colors:"#888",fontSize:"14px",fontFamily:"Montserrat"},formatter:function(a){return"".concat(t.beautifyValue(a/1e3,0))}}},tooltip:{y:{formatter:function(a){return"".concat(t.beautifyValue(a/1e3,2)," TB")}}},stroke:{lineCap:"round"},labels:["Cumulus","Nimbus","Stratus"]}},ssdHistoryData:{series:[],chartOptions:{colors:[p["a"].cumulus,p["a"].nimbus,p["a"].stratus],grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.5,opacityTo:0,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{formatter:function(a){return new Date(a).toLocaleString("en-GB",t.timeoptions)}},y:{formatter:function(a){return"".concat(t.beautifyValue(a/1e3,2)," TB")}}}}},hddData:{series:[],chartOptions:{colors:[p["a"].cumulus,p["a"].nimbus,p["a"].stratus],plotOptions:{bar:{columnWidth:"85%",distributed:!0}},dataLabels:{enabled:!1},legend:{show:!1},xaxis:{labels:{categories:["Cumulus","Nimbus","Stratus"],style:{colors:[p["a"].cumulus,p["a"].nimbus,p["a"].stratus],fontSize:"14px",fontFamily:"Montserrat"}}},yaxis:{labels:{style:{colors:"#888",fontSize:"14px",fontFamily:"Montserrat"},formatter:function(a){return"".concat(t.beautifyValue(a/1e3,0))}}},tooltip:{y:{formatter:function(a){return"".concat(t.beautifyValue(a/1e3,2)," TB")}}},stroke:{lineCap:"round"},labels:["Cumulus","Nimbus","Stratus"]}},historyStatsLoading:!0,fluxHistoryStats:[]}},mounted:function(){this.generateResources(),this.getHistoryStats()},methods:{generateResources:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s,e;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,y.get("https://stats.runonflux.io/fluxinfo?projection=tier,benchmark");case 2:s=a.sent,e=s.data.data,e.forEach((function(a){"CUMULUS"===a.tier&&a.benchmark&&a.benchmark.bench?(t.cumulusCpuValue+=0===a.benchmark.bench.cores?2:a.benchmark.bench.cores,t.cumulusRamValue+=a.benchmark.bench.ram<4?4:Math.round(a.benchmark.bench.ram),t.cumulusSSDStorageValue+=a.benchmark.bench.ssd,t.cumulusHDDStorageValue+=a.benchmark.bench.hdd):"CUMULUS"===a.tier?(t.cumulusCpuValue+=2,t.cumulusRamValue+=4,t.cumulusHDDStorageValue+=50):"NIMBUS"===a.tier&&a.benchmark&&a.benchmark.bench?(t.nimbusCpuValue+=0===a.benchmark.bench.cores?4:a.benchmark.bench.cores,t.nimbusRamValue+=a.benchmark.bench.ram<8?8:Math.round(a.benchmark.bench.ram),t.nimbusSSDStorageValue+=a.benchmark.bench.ssd,t.nimbusHDDStorageValue+=a.benchmark.bench.hdd):"NIMBUS"===a.tier?(t.nimbusCpuValue+=4,t.nimbusRamValue+=8,t.nimbusSSDStorageValue+=150):"STRATUS"===a.tier&&a.benchmark&&a.benchmark.bench?(t.stratusCpuValue+=0===a.benchmark.bench.cores?8:a.benchmark.bench.cores,t.stratusRamValue+=a.benchmark.bench.ram<32?32:Math.round(a.benchmark.bench.ram),t.stratusSSDStorageValue+=a.benchmark.bench.ssd,t.stratusHDDStorageValue+=a.benchmark.bench.hdd):"STRATUS"===a.tier&&(t.stratusCpuValue+=8,t.stratusRamValue+=32,t.stratusSSDStorageValue+=600)})),t.totalCores=t.cumulusCpuValue+t.nimbusCpuValue+t.stratusCpuValue,t.cpuData.series=[{name:"CPU Cores",data:[t.cumulusCpuValue,t.nimbusCpuValue,t.stratusCpuValue]}],t.totalRAM=t.cumulusRamValue+t.nimbusRamValue+t.stratusRamValue,t.ramData.series=[{name:"RAM",data:[t.cumulusRamValue,t.nimbusRamValue,t.stratusRamValue]}],t.totalSSD=t.cumulusSSDStorageValue+t.nimbusSSDStorageValue+t.stratusSSDStorageValue,t.ssdData.series=[{name:"SSD",data:[t.cumulusSSDStorageValue,t.nimbusSSDStorageValue,t.stratusSSDStorageValue]}],t.totalHDD=t.cumulusHDDStorageValue+t.nimbusHDDStorageValue+t.stratusHDDStorageValue,t.hddData.series=[{name:"HDD",data:[t.cumulusHDDStorageValue,t.nimbusHDDStorageValue,t.stratusHDDStorageValue]}],t.fluxListLoading=!1;case 14:case"end":return a.stop()}}),a)})))()},getHistoryStats:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.historyStatsLoading=!0,a.next=4,y.get("https://stats.runonflux.io/fluxhistorystats");case 4:s=a.sent,s.data.data?(t.fluxHistoryStats=s.data.data,t.generateCPUHistory(),t.generateRAMHistory(),t.generateSSDHistory(),t.historyStatsLoading=!1):t.$toast({component:d["a"],props:{title:"Unable to fetch history stats",icon:"InfoIcon",variant:"danger"}}),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},generateCPUHistory:function(){this.cpuHistoryData.series=this.generateHistory(2,4,8)},generateRAMHistory:function(){this.ramHistoryData.series=this.generateHistory(4,8,32)},generateSSDHistory:function(){this.ssdHistoryData.series=this.generateHistory(40,150,600)},generateHistory:function(t,a,s){var e=this,r=[],o=[],u=[],i=Object.keys(this.fluxHistoryStats);return i.forEach((function(i){r.push([Number(i),e.fluxHistoryStats[i].cumulus*t]),o.push([Number(i),e.fluxHistoryStats[i].nimbus*a]),u.push([Number(i),e.fluxHistoryStats[i].stratus*s])})),[{name:"Cumulus",data:r},{name:"Nimbus",data:o},{name:"Stratus",data:u}]},beautifyValue:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,s=t.toFixed(a);return s.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}}},g=f,S=s("2877"),D=Object(S["a"])(g,e,r,!1,null,null,null);a["default"]=D.exports}}]);
//# sourceMappingURL=chunk-45eb91e0.21c43245.js.map