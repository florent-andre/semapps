import e from"react";import{ImageField as t,ReferenceArrayField as r,DateTimeInput as n,useResourceContext as a,ReferenceArrayInput as o,fetchUtils as i}from"react-admin";import c from"jsonld";function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){s(o,n,a,i,c,"next",e)}function c(e){s(o,n,a,i,c,"throw",e)}i(void 0)}))}}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}(e,t)||b(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=b(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw a}}}}var w=function(r){var n=r.record,a=r.source,o=m(r,["record","source"]);return"string"==typeof n&&(n=f({},a,n)),e.createElement(t,l({record:n,source:a},o))},x=function(t){var n=t.record,a=t.source,o=m(t,["record","source"]);return n[a]&&(Array.isArray(n[a])?n[a]=n[a].map((function(e){return e["@id"]||e})):n[a]=[n[a]]),e.createElement(r,l({record:n,source:a},o))};x.defaultProps={addLabel:!0};var O=function(t){return e.createElement(n,l({},t,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},j=function(t){var r=a({});return e.createElement(o,l({},t,{resource:r,format:function(e){return e?(Array.isArray(e)||(e=[e]),t.format&&(e=t.format(e)),e.map((function(e){return"object"===u(e)?e.id||e["@id"]:e}))):e}}))},k=function(e){var t=e.types,r=e.params,n=r.query,a=r.pagination,o=(r.sort,r.filter),i=e.ontologies,c="";return o.q&&o.q.length>0&&(c+='\n      {\n        SELECT ?s1\n        WHERE {\n          ?s1 ?p1 ?o1 .\n          FILTER regex(lcase(str(?o1)), "'.concat(o.q.toLowerCase(),'")\n          FILTER NOT EXISTS {?s1 a ?o1}\n        }\n      }\n      ')),n&&Object.keys(n).forEach((function(e){var t=n[e].startsWith("http")?"<".concat(n[e],">"):n[e];c+="?s1 ".concat(e," ").concat(t," .")})),"\n    ".concat(function(e){return e.map((function(e){return"PREFIX ".concat(e.prefix,": <").concat(e.url,">")})).join("\n")}(i),"\n    CONSTRUCT {\n      ?s1 ?p2 ?o2\n    }\n    WHERE {\n      ").concat(c,"\n      ?s1 a ?type .\n      FILTER( ?type IN (").concat(t.join(", "),") ) .\n      FILTER( (isIRI(?s1)) ) .\n      ?s1 ?p2 ?o2 .\n    }\n    # TODO try to make pagination work in SPARQL as this doesn't work.\n    # LIMIT ").concat(a.perPage,"\n    # OFFSET ").concat((a.page-1)*a.perPage,"\n  ")},E=require("speakingurl"),S=function(e){var t={};return e.forEach((function(e){return t[e.prefix]=e.url})),t},P=function(e){return e&&e.rawFile&&e.rawFile instanceof File},R=function(e){var t,r,n,a,o,i,s=e.sparqlEndpoint,f=e.httpClient,l=e.resources,d=e.ontologies,m=e.jsonContext,b=e.uploadsContainerUri,g=function(){var e=p(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=2;break}throw new Error("No uploadsContainerUri defined for the data provider");case 2:return e.next=4,f(b,{method:"POST",body:t,headers:new Headers({Slug:(n=t.name,a=void 0,o=void 0,a="",o=n.split("."),o.length>1&&(a=o.pop(),n=o.join(".")),E(n,{lang:"fr"})+"."+a),"Content-Type":t.type})});case 4:if(201!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",r.headers.get("Location"));case 7:case"end":return e.stop()}var n,a,o}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=p(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(t);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(r=e.t1.value,!t.hasOwnProperty(r)){e.next=20;break}if(!Array.isArray(t[r])){e.next=16;break}n=0;case 6:if(!(n<t[r].length)){e.next=14;break}if(!P(t[r][n])){e.next=11;break}return e.next=10,g(t[r][n].rawFile);case 10:t[r][n]=e.sent;case 11:n++,e.next=6;break;case 14:e.next=20;break;case 16:if(!P(t[r])){e.next=20;break}return e.next=19,g(t[r].rawFile);case 19:t[r]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",t);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{getList:(i=p(regeneratorRuntime.mark((function e(t,r){var n,a,o,i,u,p,b,g,v,w,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l[t],n={},!r.id&&!r["@id"]&&l[t].types){e.next=17;break}return a=r.id||r["@id"]||l[t].containerUri,e.next=6,f(a);case 6:if(o=e.sent,i=o.json,u=["ldp:contains","as:orderedItems","orderedItems","as:items","items"].find((function(e){return i[e]}))){e.next=12;break}throw new Error("Unknown list type");case 12:p=i[u].map((function(e){return e.id=e.id||e["@id"],e})),r.pagination&&(p=p.slice((r.pagination.page-1)*r.pagination.perPage,r.pagination.page*r.pagination.perPage)),n={data:p,total:i[u].length},e.next=26;break;case 17:return b=k({types:l[t].types,params:y(y({},r),{},{query:l[t].query}),ontologies:d}),e.next=20,f(s,{method:"POST",body:b});case 20:return g=e.sent,v=g.json,e.next=24,c.compact(v,m||S(d));case 24:w=e.sent,1===Object.keys(w).length?n={data:[],total:0}:w["@graph"]?(x=w["@graph"].map((function(e){return e.id=e.id||e["@id"],e})).sort((function(e,t){return!(r.sort&&e[r.sort.field]&&t[r.sort.field])||("DESC"===r.sort.order?e[r.sort.field].localeCompare(t[r.sort.field]):t[r.sort.field].localeCompare(e[r.sort.field]))})).slice((r.pagination.page-1)*r.pagination.perPage,r.pagination.page*r.pagination.perPage),n={data:x,total:w["@graph"].length}):(w.id=w.id||w["@id"],n={data:[w],total:1});case 26:if(r.filter.q&&delete r.filter.q,!(Object.keys(r.filter).length>0)){e.next=31;break}return e.abrupt("return",{data:n.data.filter((function(e){return Object.entries(r.filter).some((function(t){var r=h(t,2),n=r[0],a=r[1];return Array.isArray(e[n])?e[n].includes(a):e[n]===a}))})),total:n.total});case 31:return e.abrupt("return",n);case 32:case"end":return e.stop()}}),e)}))),function(e,t){return i.apply(this,arguments)}),getOne:(o=p(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(r.id);case 2:return n=e.sent,(a=n.json).id=a.id||a["@id"],e.next=7,c.compact(a,m||S(d));case 7:return o=e.sent,e.abrupt("return",{data:o});case 9:case"end":return e.stop()}}),e)}))),function(e,t){return o.apply(this,arguments)}),getMany:(a=p(regeneratorRuntime.mark((function e(t,r){var n,a,o,i,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],a=v(r.ids),e.prev=2,a.s();case 4:if((o=a.n()).done){e.next=20;break}return i="object"===u(i=o.value)?i["@id"]:i,e.prev=7,e.next=10,f(i);case 10:c=e.sent,(s=c.json).id=s.id||s["@id"],n.push(s),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(7);case 18:e.next=4;break;case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(2),a.e(e.t1);case 25:return e.prev=25,a.f(),e.finish(25);case 28:return e.abrupt("return",{data:n});case 29:case"end":return e.stop()}}),e,null,[[2,22,25,28],[7,16]])}))),function(e,t){return a.apply(this,arguments)}),getManyReference:function(e,t){throw new Error("getManyReference is not implemented yet")},create:(n=p(regeneratorRuntime.mark((function e(t,r){var n,a,o,i,c,u,s,p,h,b;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l[t],n=l[t],a=n.slugField,o=n.containerUri,i=n.types,c=new Headers,a&&c.set("Slug",Array.isArray(a)?a.map((function(e){return r.data[e]})).join(" "):r.data[a]),e.next=6,w(r.data);case 6:return r.data=e.sent,e.next=9,f(o,{method:"POST",headers:c,body:JSON.stringify(y({"@context":m||S(d),"@type":i},r.data))});case 9:return u=e.sent,s=u.headers,p=s.get("Location"),e.next=14,f(p);case 14:return h=e.sent,(b=h.json).id=b.id||b["@id"],e.abrupt("return",{data:b});case 18:case"end":return e.stop()}}),e)}))),function(e,t){return n.apply(this,arguments)}),update:(r=p(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(r.data);case 2:return r.data=e.sent,e.next=5,f(r.id,{method:"PUT",body:JSON.stringify(y({"@context":m||S(d)},r.data))});case 5:return e.abrupt("return",{data:r.data});case 6:case"end":return e.stop()}}),e)}))),function(e,t){return r.apply(this,arguments)}),updateMany:function(e,t){throw new Error("updateMany is not implemented yet")},delete:(t=p(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(r.id,{method:"DELETE"});case 2:return e.abrupt("return",{data:{id:r.id}});case 3:case"end":return e.stop()}}),e)}))),function(e,r){return t.apply(this,arguments)}),deleteMany:function(e,t){throw new Error("deleteMany is not implemented yet")}}},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.headers||(t.headers=new Headers),t.method){case"POST":case"PATCH":t.headers.has("Accept")||t.headers.set("Accept","application/ld+json"),t.headers.has("Content-Type")||t.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:t.headers.has("Accept")||t.headers.set("Accept","application/ld+json")}var r=localStorage.getItem("token");return r&&t.headers.set("Authorization","Bearer ".concat(r)),i.fetchJson(e,t)};export{O as DateTimeInput,w as ImageField,x as UriArrayField,j as UriArrayInput,R as dataProvider,T as httpClient};
