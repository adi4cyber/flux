(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2dcd0dfb"],{"0ad5":function(t,e,r){"use strict";var a=r("b4c0");e["a"]={start:function(t){return Object(a["a"])().get("/benchmark/start",{headers:{zelidauth:t}})},restart:function(t){return Object(a["a"])().get("/benchmark/restart",{headers:{zelidauth:t}})},getStatus:function(){return Object(a["a"])().get("/benchmark/getstatus")},restartNodeBenchmarks:function(t){return Object(a["a"])().get("/benchmark/restartnodebenchmarks",{headers:{zelidauth:t}})},signFluxTransaction:function(t,e){return Object(a["a"])().get("/benchmark/signzelnodetransaction/".concat(e),{headers:{zelidauth:t}})},helpSpecific:function(t){return Object(a["a"])().get("/benchmark/help/".concat(t))},help:function(){return Object(a["a"])().get("/benchmark/help")},stop:function(t){return Object(a["a"])().get("/benchmark/stop",{headers:{zelidauth:t}})},getBenchmarks:function(){return Object(a["a"])().get("/benchmark/getbenchmarks")},getInfo:function(){return Object(a["a"])().get("/benchmark/getinfo")},tailBenchmarkDebug:function(t){return Object(a["a"])().get("/flux/tailbenchmarkdebug",{headers:{zelidauth:t}})},justAPI:function(){return Object(a["a"])()},cancelToken:function(){return a["b"]}}},"205f":function(t,e,r){"use strict";r.d(e,"a",(function(){return D}));var a=r("2b0e"),n=r("b42e"),c=r("c637"),o=r("a723"),s=r("9b76"),i=r("8690"),l=r("365c"),b=r("d82f"),u=r("cf75"),d=r("d580"),f=r("6197"),p=r("b885");function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=Object(u["d"])(Object(b["m"])(j(j({},Object(u["a"])(d["a"],u["f"].bind(null,"footer"))),{},{footer:Object(u["c"])(o["t"]),footerClass:Object(u["c"])(o["e"]),footerHtml:Object(u["c"])(o["t"])})),c["l"]),m=a["default"].extend({name:c["l"],functional:!0,props:h,render:function(t,e){var r,a=e.props,c=e.data,o=e.children,s=a.footerBgVariant,l=a.footerBorderVariant,b=a.footerTextVariant;return t(a.footerTag,Object(n["a"])(c,{staticClass:"card-footer",class:[a.footerClass,(r={},g(r,"bg-".concat(s),s),g(r,"border-".concat(l),l),g(r,"text-".concat(b),b),r)],domProps:o?{}:Object(i["a"])(a.footerHtml,a.footer)}),o)}}),y=r("4918");function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){P(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function P(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var k=Object(u["d"])(Object(b["m"])(w(w({},Object(b["k"])(y["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(u["c"])(o["g"],!1),end:Object(u["c"])(o["g"],!1),start:Object(u["c"])(o["g"],!1),top:Object(u["c"])(o["g"],!1)})),c["n"]),x=a["default"].extend({name:c["n"],functional:!0,props:k,render:function(t,e){var r=e.props,a=e.data,c=r.src,o=r.alt,s=r.width,i=r.height,l="card-img";return r.top?l+="-top":r.right||r.end?l+="-right":r.bottom?l+="-bottom":(r.left||r.start)&&(l+="-left"),t("img",Object(n["a"])(a,{class:l,attrs:{src:c,alt:o,width:s,height:i}}))}});function R(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?R(Object(r),!0).forEach((function(e){S(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function S(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var B=Object(u["a"])(k,u["f"].bind(null,"img"));B.imgSrc.required=!1;var C=Object(u["d"])(Object(b["m"])(_(_(_(_(_(_({},f["b"]),p["b"]),h),B),d["a"]),{},{align:Object(u["c"])(o["t"]),noBody:Object(u["c"])(o["g"],!1)})),c["j"]),D=a["default"].extend({name:c["j"],functional:!0,props:C,render:function(t,e){var r,a=e.props,c=e.data,o=e.slots,b=e.scopedSlots,d=a.imgSrc,O=a.imgLeft,j=a.imgRight,g=a.imgStart,y=a.imgEnd,v=a.imgBottom,w=a.header,P=a.headerHtml,k=a.footer,R=a.footerHtml,_=a.align,C=a.textVariant,D=a.bgVariant,T=a.borderVariant,V=b||{},E=o(),A={},q=t(),z=t();if(d){var G=t(x,{props:Object(u["e"])(B,a,u["h"].bind(null,"img"))});v?z=G:q=G}var L=t(),U=Object(l["a"])(s["p"],V,E);(U||w||P)&&(L=t(p["a"],{props:Object(u["e"])(p["b"],a),domProps:U?{}:Object(i["a"])(P,w)},Object(l["b"])(s["p"],A,V,E)));var H=Object(l["b"])(s["h"],A,V,E);a.noBody||(H=t(f["a"],{props:Object(u["e"])(f["b"],a)},H),a.overlay&&d&&(H=t("div",{staticClass:"position-relative"},[q,H,z]),q=t(),z=t()));var I=t(),M=Object(l["a"])(s["o"],V,E);return(M||k||R)&&(I=t(m,{props:Object(u["e"])(h,a),domProps:U?{}:Object(i["a"])(R,k)},Object(l["b"])(s["o"],A,V,E))),t(a.tag,Object(n["a"])(c,{staticClass:"card",class:(r={"flex-row":O||g,"flex-row-reverse":(j||y)&&!(O||g)},S(r,"text-".concat(_),_),S(r,"bg-".concat(D),D),S(r,"border-".concat(T),T),S(r,"text-".concat(C),C),r)}),[q,L,H,I,z])}})},3838:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return""!==t.callResponse.data?r("b-card",{attrs:{title:"Get Benchmarks"}},[t.callResponse.data.status?r("list-entry",{attrs:{title:"Status",data:t.callResponse.data.status}}):t._e(),t.callResponse.data.architecture?r("list-entry",{attrs:{title:"Architecture",data:t.callResponse.data.architecture}}):t._e(),t.callResponse.data.time?r("list-entry",{attrs:{title:"Time",data:new Date(1e3*t.callResponse.data.time).toLocaleString("en-GB",t.timeoptions.short)}}):t._e(),t.callResponse.data.ipaddress?r("list-entry",{attrs:{title:"IP Address",data:t.callResponse.data.ipaddress}}):t._e(),t.callResponse.data.cores?r("list-entry",{attrs:{title:"CPU Cores",number:t.callResponse.data.cores}}):t._e(),t.callResponse.data.ram?r("list-entry",{attrs:{title:"RAM",data:t.callResponse.data.ram+" GB"}}):t._e(),t.callResponse.data.ssd?r("list-entry",{attrs:{title:"SSD",data:t.callResponse.data.ssd+" GB"}}):t._e(),t.callResponse.data.hdd?r("list-entry",{attrs:{title:"HDD",data:t.callResponse.data.hdd+" GB"}}):t._e(),t.callResponse.data.ddwrite?r("list-entry",{attrs:{title:"Best Write Speed",data:t.callResponse.data.ddwrite.toFixed(2)+" MB/s"}}):t._e(),t.callResponse.data.eps?r("list-entry",{attrs:{title:"CPU Speed",data:t.callResponse.data.eps.toFixed(2)+" eps"}}):t._e(),t.callResponse.data.error?r("list-entry",{attrs:{title:"Error",data:t.callResponse.data.error,variant:"danger"}}):t._e()],1):t._e()},n=[],c=r("1da1"),o=(r("96cf"),r("205f")),s=r("b307"),i=r("9e7b"),l=r("0ad5"),b=r("c9ae"),u={components:{ListEntry:i["a"],BCard:o["a"],ToastificationContent:s["a"]},data:function(){return{timeoptions:b,callResponse:{status:"",data:""}}},mounted:function(){this.benchmarkGetBenchmarks()},methods:{benchmarkGetBenchmarks:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l["a"].getBenchmarks();case 2:r=e.sent,"error"===r.data.status?t.$toast({component:s["a"],props:{title:r.data.data.message||r.data.data,icon:"InfoIcon",variant:"danger"}}):(t.callResponse.status=r.data.status,t.callResponse.data=r.data.data);case 4:case"end":return e.stop()}}),e)})))()}}},d=u,f=r("2877"),p=Object(f["a"])(d,a,n,!1,null,null,null);e["default"]=p.exports},4918:function(t,e,r){"use strict";r.d(e,"b",(function(){return j})),r.d(e,"a",(function(){return g}));var a=r("2b0e"),n=r("b42e"),c=r("c637"),o=r("a723"),s=r("2326"),i=r("6c06"),l=r("7b1e"),b=r("3a58"),u=r("cf75"),d=r("fa73");function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',O=function(t,e,r){var a=encodeURIComponent(p.replace("%{w}",Object(d["g"])(t)).replace("%{h}",Object(d["g"])(e)).replace("%{f}",r));return"data:image/svg+xml;charset=UTF-8,".concat(a)},j=Object(u["d"])({alt:Object(u["c"])(o["t"]),blank:Object(u["c"])(o["g"],!1),blankColor:Object(u["c"])(o["t"],"transparent"),block:Object(u["c"])(o["g"],!1),center:Object(u["c"])(o["g"],!1),fluid:Object(u["c"])(o["g"],!1),fluidGrow:Object(u["c"])(o["g"],!1),height:Object(u["c"])(o["o"]),left:Object(u["c"])(o["g"],!1),right:Object(u["c"])(o["g"],!1),rounded:Object(u["c"])(o["j"],!1),sizes:Object(u["c"])(o["f"]),src:Object(u["c"])(o["t"]),srcset:Object(u["c"])(o["f"]),thumbnail:Object(u["c"])(o["g"],!1),width:Object(u["c"])(o["o"])},c["O"]),g=a["default"].extend({name:c["O"],functional:!0,props:j,render:function(t,e){var r,a=e.props,c=e.data,o=a.alt,u=a.src,p=a.block,j=a.fluidGrow,g=a.rounded,h=Object(b["c"])(a.width)||null,m=Object(b["c"])(a.height)||null,y=null,v=Object(s["b"])(a.srcset).filter(i["a"]).join(","),w=Object(s["b"])(a.sizes).filter(i["a"]).join(",");return a.blank&&(!m&&h?m=h:!h&&m&&(h=m),h||m||(h=1,m=1),u=O(h,m,a.blankColor||"transparent"),v=null,w=null),a.left?y="float-left":a.right?y="float-right":a.center&&(y="mx-auto",p=!0),t("img",Object(n["a"])(c,{attrs:{src:u,alt:o,width:h?Object(d["g"])(h):null,height:m?Object(d["g"])(m):null,srcset:v||null,sizes:w||null},class:(r={"img-thumbnail":a.thumbnail,"img-fluid":a.fluid||j,"w-100":j,rounded:""===g||!0===g},f(r,"rounded-".concat(g),Object(l["m"])(g)&&""!==g),f(r,y,y),f(r,"d-block",p),r)}))}})},4968:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return b}));var a=r("2b0e"),n=r("b42e"),c=r("c637"),o=r("a723"),s=r("cf75"),i=r("fa73"),l=Object(s["d"])({title:Object(s["c"])(o["t"]),titleTag:Object(s["c"])(o["t"],"h4")},c["q"]),b=a["default"].extend({name:c["q"],functional:!0,props:l,render:function(t,e){var r=e.props,a=e.data,c=e.children;return t(r.titleTag,Object(n["a"])(a,{staticClass:"card-title"}),c||Object(i["g"])(r.title))}})},6197:function(t,e,r){"use strict";r.d(e,"b",(function(){return O})),r.d(e,"a",(function(){return j}));var a=r("2b0e"),n=r("b42e"),c=r("c637"),o=r("a723"),s=r("d82f"),i=r("cf75"),l=r("d580"),b=r("4968"),u=r("ba06");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=Object(i["d"])(Object(s["m"])(f(f(f(f({},b["b"]),u["b"]),Object(i["a"])(l["a"],i["f"].bind(null,"body"))),{},{bodyClass:Object(i["c"])(o["e"]),overlay:Object(i["c"])(o["g"],!1)})),c["k"]),j=a["default"].extend({name:c["k"],functional:!0,props:O,render:function(t,e){var r,a=e.props,c=e.data,o=e.children,s=a.bodyBgVariant,l=a.bodyBorderVariant,d=a.bodyTextVariant,f=t();a.title&&(f=t(b["a"],{props:Object(i["e"])(b["b"],a)}));var O=t();return a.subTitle&&(O=t(u["a"],{props:Object(i["e"])(u["b"],a),class:["mb-2"]})),t(a.bodyTag,Object(n["a"])(c,{staticClass:"card-body",class:[(r={"card-img-overlay":a.overlay},p(r,"bg-".concat(s),s),p(r,"border-".concat(l),l),p(r,"text-".concat(d),d),r),a.bodyClass]}),[f,O,o])}})},"9e7b":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("dl",{staticClass:"row",class:t.classes},[r("dt",{staticClass:"col-sm-3"},[t._v(" "+t._s(t.title)+" ")]),t.href.length>0?r("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t.href.length>0?r("b-link",{attrs:{href:t.href,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")]):t._e()],1):t.click?r("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant,on:{click:function(e){return t.$emit("click")}}},[r("b-link",[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])],1):r("dd",{staticClass:"col-sm-9 mb-0",class:"text-"+t.variant},[t._v(" "+t._s(t.data.length>0?t.data:t.number!==Number.MAX_VALUE?t.number:"")+" ")])])},n=[],c=(r("a9e3"),r("aa59")),o={components:{BLink:c["a"]},props:{title:{type:String,required:!0},classes:{type:String,required:!1,default:"mb-1"},data:{type:String,required:!1,default:""},number:{type:Number,required:!1,default:Number.MAX_VALUE},variant:{type:String,required:!1,default:"secondary"},href:{type:String,required:!1,default:""},click:{type:Boolean,required:!1,default:!1}}},s=o,i=r("2877"),l=Object(i["a"])(s,a,n,!1,null,null,null);e["a"]=l.exports},b885:function(t,e,r){"use strict";r.d(e,"b",(function(){return p})),r.d(e,"a",(function(){return O}));var a=r("2b0e"),n=r("b42e"),c=r("c637"),o=r("a723"),s=r("8690"),i=r("d82f"),l=r("cf75"),b=r("d580");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=Object(l["d"])(Object(i["m"])(d(d({},Object(l["a"])(b["a"],l["f"].bind(null,"header"))),{},{header:Object(l["c"])(o["t"]),headerClass:Object(l["c"])(o["e"]),headerHtml:Object(l["c"])(o["t"])})),c["m"]),O=a["default"].extend({name:c["m"],functional:!0,props:p,render:function(t,e){var r,a=e.props,c=e.data,o=e.children,i=a.headerBgVariant,l=a.headerBorderVariant,b=a.headerTextVariant;return t(a.headerTag,Object(n["a"])(c,{staticClass:"card-header",class:[a.headerClass,(r={},f(r,"bg-".concat(i),i),f(r,"border-".concat(l),l),f(r,"text-".concat(b),b),r)],domProps:o?{}:Object(s["a"])(a.headerHtml,a.header)}),o)}})},ba06:function(t,e,r){"use strict";r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return b}));var a=r("2b0e"),n=r("b42e"),c=r("c637"),o=r("a723"),s=r("cf75"),i=r("fa73"),l=Object(s["d"])({subTitle:Object(s["c"])(o["t"]),subTitleTag:Object(s["c"])(o["t"],"h6"),subTitleTextVariant:Object(s["c"])(o["t"],"muted")},c["o"]),b=a["default"].extend({name:c["o"],functional:!0,props:l,render:function(t,e){var r=e.props,a=e.data,c=e.children;return t(r.subTitleTag,Object(n["a"])(a,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),c||Object(i["g"])(r.subTitle))}})},c9ae:function(t,e,r){"use strict";r.r(e);var a={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"};e["default"]={shortDate:a}},d580:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var a=r("2b0e"),n=r("c637"),c=r("a723"),o=r("cf75"),s=Object(o["d"])({bgVariant:Object(o["c"])(c["t"]),borderVariant:Object(o["c"])(c["t"]),tag:Object(o["c"])(c["t"],"div"),textVariant:Object(o["c"])(c["t"])},n["j"]);a["default"].extend({props:s})}}]);
//# sourceMappingURL=chunk-2dcd0dfb.8a049349.js.map