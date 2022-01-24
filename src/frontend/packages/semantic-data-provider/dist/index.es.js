import e,{useState as r,useEffect as t,useContext as n}from"react";import{ImageField as a,ReferenceArrayField as o,ReferenceField as i,useQueryWithStore as u,DateTimeInput as s,useResourceContext as c,ReferenceArrayInput as l,ReferenceInput as f,ArrayInput as p,SimpleFormIterator as d,TextInput as h,DataProviderContext as y,fetchUtils as v}from"react-admin";import{makeStyles as m}from"@material-ui/core/styles";import g from"jsonld";import w from"speakingurl";import b from"crypto";function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){O(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,r,t,n,a,o,i){try{var u=e[o](i),s=u.value}catch(e){return void t(e)}u.done?r(s):Promise.resolve(s).then(n,a)}function T(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function i(e){j(o,n,a,i,u,"next",e)}function u(e){j(o,n,a,i,u,"throw",e)}i(void 0)}))}}function O(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function E(){return(E=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function C(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function R(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,a,o=[],i=!0,u=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);i=!0);}catch(e){u=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(u)throw a}}return o}(e,r)||P(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e){return function(e){if(Array.isArray(e))return q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||P(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,r){if(e){if("string"==typeof e)return q(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?q(e,r):void 0}}function q(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function I(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=P(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw o}}}}var _=["record","source"],N=function(r){var t=r.record,n=r.source,o=C(r,_);return"string"==typeof t&&(t=O({},n,t)),e.createElement(a,E({record:t,source:n},o))},U=["record","source"],B=function(r){var t=r.record,n=r.source,a=C(r,U);return null!=t&&t[n]&&(Array.isArray(t[n])||(t[n]=[t[n]]),t[n]=t[n].map((function(e){return e["@id"]||e.id||e}))),e.createElement(o,E({record:t,source:n},a))};B.defaultProps={addLabel:!0};var L=["record","source"],D=function(r){var t=r.record,n=r.source,a=C(r,L);return t[n]&&"object"===S(t[n])&&(t[n]=t[n]["@id"]||t[n].id),e.createElement(i,E({record:t,source:n},a))};D.defaultProps={addLabel:!0};var M=["children","record","filter","source"],F=function(n){var a=n.children,o=n.record,i=n.filter,u=n.source,s=C(n,M),c=R(r(),2),l=c[0],f=c[1];return t((function(){if(o&&u&&Array.isArray(null==o?void 0:o[u])){var e=null==o?void 0:o[u].filter((function(e){var r=!0;for(var t in i){var n=e[t];Array.isArray(n)?n.includes(i[t])||(r=!1):n!==i[t]&&(r=!1)}return r})),r=k({},o);r[u]=e.length>0?e:void 0,f(r)}}),[o,u,i]),e.createElement(e.Fragment,null,e.Children.map(a,(function(r,t){return e.cloneElement(r,k(k({},s),{},{record:l,addLabel:!0,source:u}))})))},H=["children","groupReference","groupLabel","groupHeader","filterProperty"],z=function(r){var t=r.children,n=r.groupReference,a=r.groupLabel,o=r.groupHeader,i=r.filterProperty,s=C(r,H),c=u({type:"getList",resource:n,payload:{}}).data;return e.createElement(e.Fragment,null,null==c?void 0:c.map((function(r,n){var u={};return u[i]=r.id,e.createElement(e.Fragment,null,o&&o(k(k({},s),{},{group:r})),e.createElement(F,E({},s,{filter:u,label:r[a]}),t))})))},G=function(r){return e.createElement(s,E({},r,{format:function(e){return e&&e.replace(" ","T").replace("Z","")}}))},$=function(r){var t=c({});return e.createElement(l,E({},r,{resource:t,format:function(e){return e?(Array.isArray(e)||(e=[e]),r.format&&(e=r.format(e)),e.map((function(e){return"object"===S(e)?e.id||e["@id"]:e}))):e}}))},J=function(r){var t=c({});return e.createElement(f,E({},r,{resource:t,format:function(e){return e?(r.format&&(e=r.format(e)),"object"===S(e)?e.id||e["@id"]:e):e}}))},W=["reificationClass","children"],V=m({form:{display:"flex"},input:{paddingRight:"20px"}}),Y=m({root:{display:"none"}}),Q=function(r){var t=r.reificationClass;r.children;var n=C(r,W),a=V(),o=Y();return e.createElement(p,n,e.createElement(d,{classes:{form:a.form}},e.Children.map(r.children,(function(r,t){return e.cloneElement(r,{className:a.input})})),e.createElement(h,{className:o.root,source:"type",initialValue:t})))},X=function(e){var a=n(y),o=R(r(),2),i=o[0],u=o[1];return t((function(){e&&a.getCreateContainer(e).then((function(e){return u(e)}))}),[e]),i},Z=function(e,r){return Object.keys(r).find((function(t){return r[t][e]}))},K=function(e,r){return Object.keys(r).find((function(t){return e.startsWith(r[t].baseUrl)}))},ee=function(){var e=T(regeneratorRuntime.mark((function e(r,t){var n,a,o,i,u,s,c,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=t.dataServers,i=t.httpClient,u=t.jsonContext,s=Z("authServer",o),(c=K(r,o))===s||null===(n=o[s])||void 0===n||!n.proxyUrl||!0===(null===(a=o[c])||void 0===a?void 0:a.noProxy)){e.next=9;break}return e.next=6,i(o[s].proxyUrl,{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:new URLSearchParams({id:r})});case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,i(r,{noToken:c!==s});case 11:e.t0=e.sent;case 12:if(l=e.t0,(f=l.json).id=f.id||f["@id"],f["@context"]===u){e.next=19;break}return e.next=18,g.compact(f,u);case 18:f=e.sent;case 19:return e.abrupt("return",f);case 20:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),re=function(e){return function(){var r=T(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,s,c,l,f,p,d,h,y,v,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.resources,u=i[t]){r.next=4;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 4:return r.next=6,ee(n.id,e);case 6:if(s=r.sent,null!==(a=u.list)&&void 0!==a&&a.forceArray){l=I(null===(c=u.list)||void 0===c?void 0:c.forceArray);try{for(l.s();!(f=l.n()).done;)p=f.value,s[p]&&!Array.isArray(s[p])&&(s[p]=[s[p]])}catch(e){l.e(e)}finally{l.f()}}if(null===(o=u.list)||void 0===o||!o.dereference){r.next=35;break}h=I(null===(d=u.list)||void 0===d?void 0:d.dereference),r.prev=10,h.s();case 12:if((y=h.n()).done){r.next=27;break}if(v=y.value,!s[v]||"string"!=typeof s[v]||!s[v].startsWith("http")){r.next=25;break}return r.prev=15,r.next=18,ee(s[v],e);case 18:delete(m=r.sent)["@context"],s[v]=m,r.next=25;break;case 23:r.prev=23,r.t0=r.catch(15);case 25:r.next=12;break;case 27:r.next=32;break;case 29:r.prev=29,r.t1=r.catch(10),h.e(r.t1);case 32:return r.prev=32,h.f(),r.finish(32);case 35:return r.abrupt("return",{data:s});case 36:case"end":return r.stop()}}),r,null,[[10,29,32,35],[15,23]])})));return function(e,t){return r.apply(this,arguments)}}()},te="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ne(e,r){return e(r={exports:{}},r.exports),r.exports}var ae=ne((function(e){var r,t;r=te,t=function(){function e(e){var r=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var t=e.shift();e[0]=t+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var a=e[n];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(n>0&&(a=a.replace(/^[\/]+/,"")),a=n<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),r.push(a))}var o=r.join("/"),i=(o=o.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return o=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=t():r.urljoin=t()})),oe=function(e){return e&&e.rawFile&&e.rawFile instanceof File},ie=function(e){var r=Object.keys(e.dataServers).find((function(r){return e.dataServers[r].uploadsContainer}));if(r)return ae(e.dataServers[r].baseUrl,e.dataServers[r].uploadsContainer)},ue=function(){var e=T(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=ie(t)){e.next=3;break}throw new Error("You must define an uploadsContainer in one of the server's configuration");case 3:return e.next=5,t.httpClient(n,{method:"POST",body:r,headers:new Headers({Slug:(o=r.name,i=void 0,u=void 0,i="",u=o.split("."),u.length>1&&(i=u.pop(),o=u.join(".")),w(o,{lang:"fr"})+"."+i),"Content-Type":r.type})});case 5:if(201!==(a=e.sent).status){e.next=8;break}return e.abrupt("return",a.headers.get("Location"));case 8:case"end":return e.stop()}var o,i,u}),e)})));return function(r,t){return e.apply(this,arguments)}}(),se=function(){var e=T(regeneratorRuntime.mark((function e(r,t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=regeneratorRuntime.keys(r);case 1:if((e.t1=e.t0()).done){e.next=22;break}if(n=e.t1.value,!r.hasOwnProperty(n)){e.next=20;break}if(!Array.isArray(r[n])){e.next=16;break}a=0;case 6:if(!(a<r[n].length)){e.next=14;break}if(!oe(r[n][a])){e.next=11;break}return e.next=10,ue(r[n][a].rawFile,t);case 10:r[n][a]=e.sent;case 11:a++,e.next=6;break;case 14:e.next=20;break;case 16:if(!oe(r[n])){e.next=20;break}return e.next=19,ue(r[n].rawFile,t);case 19:r[n]=e.sent;case 20:e.next=1;break;case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),ce=function(e,r,t){var n={},a=[];return Object.keys(t).forEach((function(o){Object.keys(t[o].containers).forEach((function(i){r&&!(Array.isArray(r)?r.includes(i):r===i)||Object.keys(t[o].containers[i]).forEach((function(r){e.includes(r)&&t[o].containers[i][r].map((function(e){var r=ae(t[i].baseUrl,e);a.includes(r)||(a.push(r),n[o]||(n[o]=[]),n[o].push(r))}))}))}))})),n},le=function(e){return function(){var r=T(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,s,c,l,f,p,d,h,y,v,m,g,w,b,x;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=e.dataServers,u=e.resources,s=e.httpClient,c=e.jsonContext,l=u[t],f=new Headers,null!==(a=l.fieldsMapping)&&void 0!==a&&a.title&&f.set("Slug",n.data[null===(p=l.fieldsMapping)||void 0===p?void 0:p.title]),null===(o=l.create)||void 0===o||!o.container){r.next=10;break}d=null===(y=l.create)||void 0===y?void 0:y.container,h=K(d,i),r.next=20;break;case 10:if(h=(null===(v=l.create)||void 0===v?void 0:v.server)||Object.keys(e.dataServers).find((function(r){return!0===e.dataServers[r].default}))){r.next=13;break}throw new Error("You must define a server for the creation, or a container, or a default server");case 13:if(m=ce(l.types,[h],i),(g=Object.keys(m))&&0!==g.length){r.next=17;break}throw new Error("No container with types ".concat(JSON.stringify(l.types)," found on server ").concat(h));case 17:if(!(g.length>1||m[g[0]].length>1)){r.next=19;break}throw new Error("More than one container detected with types ".concat(JSON.stringify(l.types)," on server ").concat(h));case 19:d=m[g[0]][0];case 20:return r.next=22,se(n.data,e);case 22:return n.data=r.sent,r.next=25,s(d,{method:"POST",headers:f,body:JSON.stringify(k({"@context":c,"@type":l.types},n.data)),noToken:!0!==i[h].authServer});case 25:return w=r.sent,b=w.headers,x=b.get("Location"),r.next=30,re(e)(t,{id:x});case 30:return r.abrupt("return",r.sent);case 31:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},fe=function(e){return function(){var r=T(regeneratorRuntime.mark((function r(t,n){var a,o,i;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=K(n.id,a),r.next=4,o(n.id,{method:"DELETE",noToken:!i||!0!==a[i].authServer});case 4:return r.abrupt("return",{data:{id:n.id}});case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},pe=function(e){return function(){var r=T(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,s;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.httpClient,o=[],i=I(n.ids),r.prev=3,i.s();case 5:if((u=i.n()).done){r.next=17;break}return s=u.value,r.prev=7,r.next=10,a(s,{method:"DELETE"});case 10:o.push(s),r.next=15;break;case 13:r.prev=13,r.t0=r.catch(7);case 15:r.next=5;break;case 17:r.next=22;break;case 19:r.prev=19,r.t1=r.catch(3),i.e(r.t1);case 22:return r.prev=22,i.f(),r.finish(22);case 25:return r.abrupt("return",{data:o});case 26:case"end":return r.stop()}}),r,null,[[3,19,22,25],[7,13]])})));return function(e,t){return r.apply(this,arguments)}}()},de=function(e,r,t){var n=[];if(Object.keys(t[r].containers[r]).forEach((function(a){e.includes(a)&&t[r].containers[r][a].map((function(e){var a=ae(t[r].baseUrl,e);n.includes(a)||n.push(a)}))})),0===n.length)throw new Error("No container found matching with types ".concat(JSON.stringify(e),". You can set explicitely the create.container property of the resource."));if(n.length>1)throw new Error("More than one container found matching with types ".concat(JSON.stringify(e),". You must set the create.server or create.container property for the resource."));return n[0]},he=function(e){return function(r){var t,n,a,o,i=e.dataServers,u=e.resources[r];if(!u)throw new Error("Resource ".concat(r," is not mapped in resources file"));if(null!==(t=u.create)&&void 0!==t&&t.container)return null===(a=u.create)||void 0===a?void 0:a.container;if(null!==(n=u.create)&&void 0!==n&&n.server)return de(u.types,null===(o=u.create)||void 0===o?void 0:o.server,i);var s=Z("default",i);return de(u.types,s,i)}},ye=function(){var e=T(regeneratorRuntime.mark((function e(r,t,n,a){var o,i,u,s,c,l,f,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=a.dataServers,i=a.httpClient,u=a.jsonContext,s=Object.keys(r).reduce((function(e,t){return k(k({},e),Object.fromEntries(r[t].map((function(e){return[e,t]}))))}),{}),c=Object.keys(s).map((function(e){return i(e,{noToken:!s[e]||!0!==o[s[e]].authServer}).then((function(e){var r=e.json;return r["@context"]!==u?g.compact(r,u):r})).then((function(r){if(t="ldp:Container",a=(n=r).type||n["@type"],Array.isArray(a)?a.includes(t):a===t)return r["ldp:contains"];throw new Error(e+" is not a LDP container");var t,n,a}))})),e.next=5,Promise.all(c);case 5:if(0!==(l=e.sent).length){e.next=10;break}return e.abrupt("return",{data:[],total:0});case 10:return l=(f=[].concat).apply.apply(f,A(l)),p=l.map((function(e){return e.id=e.id||e["@id"],e})),n.filter&&(n.filter.a&&(n.filter.type=n.filter.a,delete n.filter.a),n.filter.q&&delete n.filter.q,Object.keys(n.filter).length>0&&(p=p.filter((function(e){return Object.entries(n.filter).some((function(r){var t=R(r,2),n=t[0],a=t[1];return Array.isArray(e[n])?e[n].includes(a):e[n]===a}))})))),n.sort&&(p=p.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(p=p.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:p,total:l.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),ve=function(e){var r,t={};if(e){var n,a=I(e);try{for(a.s();!(n=a.n()).done;){var o=n.value;r=o.includes("/")?o.split("/").reverse():[o],t=k(k({},t),r.reduce((function(e,r){return O({},r,k({"@embed":"@last"},e))}),{}))}}catch(e){a.e(e)}finally{a.f()}return t}},me=ne((function(e,r){var t;e.exports=t=t||function(e,r){var t;if("undefined"!=typeof window&&window.crypto&&(t=window.crypto),"undefined"!=typeof self&&self.crypto&&(t=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(t=globalThis.crypto),!t&&"undefined"!=typeof window&&window.msCrypto&&(t=window.msCrypto),!t&&void 0!==te&&te.crypto&&(t=te.crypto),!t)try{t=b}catch(e){}var n=function(){if(t){if("function"==typeof t.getRandomValues)try{return t.getRandomValues(new Uint32Array(1))[0]}catch(e){}if("function"==typeof t.randomBytes)try{return t.randomBytes(4).readInt32LE()}catch(e){}}throw new Error("Native crypto module could not be used to get secure random number.")},a=Object.create||function(){function e(){}return function(r){var t;return e.prototype=r,t=new e,e.prototype=null,t}}(),o={},i=o.lib={},u=i.Base={extend:function(e){var r=a(this);return e&&r.mixIn(e),r.hasOwnProperty("init")&&this.init!==r.init||(r.init=function(){r.$super.init.apply(this,arguments)}),r.init.prototype=r,r.$super=this,r},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},s=i.WordArray=u.extend({init:function(e,r){e=this.words=e||[],this.sigBytes=null!=r?r:4*e.length},toString:function(e){return(e||l).stringify(this)},concat:function(e){var r=this.words,t=e.words,n=this.sigBytes,a=e.sigBytes;if(this.clamp(),n%4)for(var o=0;o<a;o++){var i=t[o>>>2]>>>24-o%4*8&255;r[n+o>>>2]|=i<<24-(n+o)%4*8}else for(var u=0;u<a;u+=4)r[n+u>>>2]=t[u>>>2];return this.sigBytes+=a,this},clamp:function(){var r=this.words,t=this.sigBytes;r[t>>>2]&=4294967295<<32-t%4*8,r.length=e.ceil(t/4)},clone:function(){var e=u.clone.call(this);return e.words=this.words.slice(0),e},random:function(e){for(var r=[],t=0;t<e;t+=4)r.push(n());return new s.init(r,e)}}),c=o.enc={},l=c.Hex={stringify:function(e){for(var r=e.words,t=e.sigBytes,n=[],a=0;a<t;a++){var o=r[a>>>2]>>>24-a%4*8&255;n.push((o>>>4).toString(16)),n.push((15&o).toString(16))}return n.join("")},parse:function(e){for(var r=e.length,t=[],n=0;n<r;n+=2)t[n>>>3]|=parseInt(e.substr(n,2),16)<<24-n%8*4;return new s.init(t,r/2)}},f=c.Latin1={stringify:function(e){for(var r=e.words,t=e.sigBytes,n=[],a=0;a<t;a++){var o=r[a>>>2]>>>24-a%4*8&255;n.push(String.fromCharCode(o))}return n.join("")},parse:function(e){for(var r=e.length,t=[],n=0;n<r;n++)t[n>>>2]|=(255&e.charCodeAt(n))<<24-n%4*8;return new s.init(t,r)}},p=c.Utf8={stringify:function(e){try{return decodeURIComponent(escape(f.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return f.parse(unescape(encodeURIComponent(e)))}},d=i.BufferedBlockAlgorithm=u.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=p.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(r){var t,n=this._data,a=n.words,o=n.sigBytes,i=this.blockSize,u=o/(4*i),c=(u=r?e.ceil(u):e.max((0|u)-this._minBufferSize,0))*i,l=e.min(4*c,o);if(c){for(var f=0;f<c;f+=i)this._doProcessBlock(a,f);t=a.splice(0,c),n.sigBytes-=l}return new s.init(t,l)},clone:function(){var e=u.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});i.Hasher=d.extend({cfg:u.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(r,t){return new e.init(t).finalize(r)}},_createHmacHelper:function(e){return function(r,t){return new h.HMAC.init(e,t).finalize(r)}}});var h=o.algo={};return o}(Math)})),ge=ne((function(e,r){var t;e.exports=(t=me,function(e){var r=t,n=r.lib,a=n.WordArray,o=n.Hasher,i=r.algo,u=[];!function(){for(var r=0;r<64;r++)u[r]=4294967296*e.abs(e.sin(r+1))|0}();var s=i.MD5=o.extend({_doReset:function(){this._hash=new a.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,r){for(var t=0;t<16;t++){var n=r+t,a=e[n];e[n]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}var o=this._hash.words,i=e[r+0],s=e[r+1],d=e[r+2],h=e[r+3],y=e[r+4],v=e[r+5],m=e[r+6],g=e[r+7],w=e[r+8],b=e[r+9],x=e[r+10],k=e[r+11],S=e[r+12],j=e[r+13],T=e[r+14],O=e[r+15],E=o[0],C=o[1],R=o[2],A=o[3];E=c(E,C,R,A,i,7,u[0]),A=c(A,E,C,R,s,12,u[1]),R=c(R,A,E,C,d,17,u[2]),C=c(C,R,A,E,h,22,u[3]),E=c(E,C,R,A,y,7,u[4]),A=c(A,E,C,R,v,12,u[5]),R=c(R,A,E,C,m,17,u[6]),C=c(C,R,A,E,g,22,u[7]),E=c(E,C,R,A,w,7,u[8]),A=c(A,E,C,R,b,12,u[9]),R=c(R,A,E,C,x,17,u[10]),C=c(C,R,A,E,k,22,u[11]),E=c(E,C,R,A,S,7,u[12]),A=c(A,E,C,R,j,12,u[13]),R=c(R,A,E,C,T,17,u[14]),E=l(E,C=c(C,R,A,E,O,22,u[15]),R,A,s,5,u[16]),A=l(A,E,C,R,m,9,u[17]),R=l(R,A,E,C,k,14,u[18]),C=l(C,R,A,E,i,20,u[19]),E=l(E,C,R,A,v,5,u[20]),A=l(A,E,C,R,x,9,u[21]),R=l(R,A,E,C,O,14,u[22]),C=l(C,R,A,E,y,20,u[23]),E=l(E,C,R,A,b,5,u[24]),A=l(A,E,C,R,T,9,u[25]),R=l(R,A,E,C,h,14,u[26]),C=l(C,R,A,E,w,20,u[27]),E=l(E,C,R,A,j,5,u[28]),A=l(A,E,C,R,d,9,u[29]),R=l(R,A,E,C,g,14,u[30]),E=f(E,C=l(C,R,A,E,S,20,u[31]),R,A,v,4,u[32]),A=f(A,E,C,R,w,11,u[33]),R=f(R,A,E,C,k,16,u[34]),C=f(C,R,A,E,T,23,u[35]),E=f(E,C,R,A,s,4,u[36]),A=f(A,E,C,R,y,11,u[37]),R=f(R,A,E,C,g,16,u[38]),C=f(C,R,A,E,x,23,u[39]),E=f(E,C,R,A,j,4,u[40]),A=f(A,E,C,R,i,11,u[41]),R=f(R,A,E,C,h,16,u[42]),C=f(C,R,A,E,m,23,u[43]),E=f(E,C,R,A,b,4,u[44]),A=f(A,E,C,R,S,11,u[45]),R=f(R,A,E,C,O,16,u[46]),E=p(E,C=f(C,R,A,E,d,23,u[47]),R,A,i,6,u[48]),A=p(A,E,C,R,g,10,u[49]),R=p(R,A,E,C,T,15,u[50]),C=p(C,R,A,E,v,21,u[51]),E=p(E,C,R,A,S,6,u[52]),A=p(A,E,C,R,h,10,u[53]),R=p(R,A,E,C,x,15,u[54]),C=p(C,R,A,E,s,21,u[55]),E=p(E,C,R,A,w,6,u[56]),A=p(A,E,C,R,O,10,u[57]),R=p(R,A,E,C,m,15,u[58]),C=p(C,R,A,E,j,21,u[59]),E=p(E,C,R,A,y,6,u[60]),A=p(A,E,C,R,k,10,u[61]),R=p(R,A,E,C,d,15,u[62]),C=p(C,R,A,E,b,21,u[63]),o[0]=o[0]+E|0,o[1]=o[1]+C|0,o[2]=o[2]+R|0,o[3]=o[3]+A|0},_doFinalize:function(){var r=this._data,t=r.words,n=8*this._nDataBytes,a=8*r.sigBytes;t[a>>>5]|=128<<24-a%32;var o=e.floor(n/4294967296),i=n;t[15+(a+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),t[14+(a+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),r.sigBytes=4*(t.length+1),this._process();for(var u=this._hash,s=u.words,c=0;c<4;c++){var l=s[c];s[c]=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8)}return u},clone:function(){var e=o.clone.call(this);return e._hash=this._hash.clone(),e}});function c(e,r,t,n,a,o,i){var u=e+(r&t|~r&n)+a+i;return(u<<o|u>>>32-o)+r}function l(e,r,t,n,a,o,i){var u=e+(r&n|t&~n)+a+i;return(u<<o|u>>>32-o)+r}function f(e,r,t,n,a,o,i){var u=e+(r^t^n)+a+i;return(u<<o|u>>>32-o)+r}function p(e,r,t,n,a,o,i){var u=e+(t^(r|~n))+a+i;return(u<<o|u>>>32-o)+r}r.MD5=o._createHelper(s),r.HmacMD5=o._createHmacHelper(s)}(Math),t.MD5)}));class we{constructor(e){this.value=e||"b"+ ++we.nextId}equals(e){return!!e&&e.termType===this.termType&&e.value===this.value}}we.prototype.termType="BlankNode",we.nextId=0;var be=we;class xe{equals(e){return!!e&&e.termType===this.termType}}xe.prototype.termType="DefaultGraph",xe.prototype.value="";var ke=xe;var Se=function(e){if(!e)return null;if("BlankNode"===e.termType)return this.blankNode(e.value);if("DefaultGraph"===e.termType)return this.defaultGraph();if("Literal"===e.termType)return this.literal(e.value,e.language||this.namedNode(e.datatype.value));if("NamedNode"===e.termType)return this.namedNode(e.value);if("Quad"===e.termType){const r=this.fromTerm(e.subject),t=this.fromTerm(e.predicate),n=this.fromTerm(e.object),a=this.fromTerm(e.graph);return this.quad(r,t,n,a)}if("Variable"===e.termType)return this.variable(e.value);throw new Error("unknown termType "+e.termType)};class je{constructor(e){this.value=e}equals(e){return!!e&&e.termType===this.termType&&e.value===this.value}}je.prototype.termType="NamedNode";var Te=je;class Oe{constructor(e,r,t){this.value=e,this.datatype=Oe.stringDatatype,this.language="",r?(this.language=r,this.datatype=Oe.langStringDatatype):t&&(this.datatype=t)}equals(e){return!!e&&e.termType===this.termType&&e.value===this.value&&e.language===this.language&&e.datatype.equals(this.datatype)}}Oe.prototype.termType="Literal",Oe.langStringDatatype=new Te("http://www.w3.org/1999/02/22-rdf-syntax-ns#langString"),Oe.stringDatatype=new Te("http://www.w3.org/2001/XMLSchema#string");var Ee=Oe;class Ce{constructor(e,r,t,n){this.subject=e,this.predicate=r,this.object=t,this.graph=n||new ke}equals(e){return!!e&&("Quad"===e.termType||!e.termType)&&e.subject.equals(this.subject)&&e.predicate.equals(this.predicate)&&e.object.equals(this.object)&&e.graph.equals(this.graph)}}Ce.prototype.termType="Quad",Ce.prototype.value="";var Re=Ce;class Ae{constructor(e){this.value=e}equals(e){return!!e&&e.termType===this.termType&&e.value===this.value}}Ae.prototype.termType="Variable";var Pe=Ae;const qe={namedNode:function(e){return new Te(e)},blankNode:function(e){return new be(e)},literal:function(e,r){return"string"==typeof r?-1===r.indexOf(":")?new Ee(e,r):new Ee(e,null,qe.namedNode(r)):new Ee(e,null,r)},variable:function(e){return new Pe(e)},defaultGraph:function(){return qe.defaultGraphInstance},triple:function(e,r,t){return qe.quad(e,r,t)},quad:function(e,r,t,n){return new Re(e,r,t,n||qe.defaultGraphInstance)},fromTerm:function(e){return Se.call(qe,e)},fromQuad:function(e){return Se.call(qe,e)},defaultGraphInstance:new ke};var Ie=qe,_e=Ie.namedNode,Ne=Ie.quad,Ue=Ie.variable,Be=function(e){return ge(e)},Le=function e(r){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r.filter((function(e){return e.parentNode===t})).map((function(t){return{type:"optional",patterns:[{type:"bgp",triples:t.query},e(r,t.node)]}}))},De=function(e,r){var t=[],n=function(e){var r=[];if(e){var t,n=I(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;if(a.includes("/"))for(var o=a.split("/"),i=1;i<=o.length;i++)r.push(o.slice(0,i).join("/"));else r.push(a)}}catch(e){n.e(e)}finally{n.f()}}return r}(e);if(n&&r&&r.length>0){var a,o=I(n);try{var i=function(){var e=a.value,n=function(e){return e.includes("/")&&e.split("/")[0]}(e),o=function(e){return e.includes("/")?e.split("/")[1]:e}(e),i=Be(e),u=n?Be(n):"1",s=o.split(":")[0],c=o.split(":")[1],l=r.find((function(e){return e.prefix===s})),f=[Ne(Ue("s"+u),_e(l.url+c),Ue("s"+i)),Ne(Ue("s"+i),Ue("p"+i),Ue("o"+i))];t.push({node:e,parentNode:n,query:f,filter:""})};for(o.s();!(a=o.n()).done;)i()}catch(e){o.e(e)}finally{o.f()}return{construct:t.length>0?t.map((function(e){return e.query})).reduce((function(e,r){return e.concat(r)})):null,where:Le(t)}}return{construct:"",where:""}},Me=Ie.literal,Fe=Ie.namedNode,He=Ie.quad,ze=Ie.variable,Ge=new(0,require("sparqljs").Generator)({}),$e=function(e){var r=e.containers,t=e.params.filter,n=e.dereference,a=e.ontologies,o={queryType:"CONSTRUCT",template:[He(ze("s1"),ze("p1"),ze("o1"))],where:[{type:"bgp",triples:[He(ze("s1"),ze("p1"),ze("o1"))]},{type:"filter",expression:{type:"operation",operator:"isiri",args:[ze("s1")]}},{type:"filter",expression:{type:"operation",operator:"in",args:[ze("containerUri"),[Fe(r[0])]]}},{type:"bgp",triples:[He(ze("containerUri"),Fe("http://www.w3.org/ns/ldp#contains"),ze("s1"))]}],type:"query",prefixes:{}};a.map((function(e){o.prefixes=k(k({},o.prefixes),{},O({},e.prefix,e.url))}));var i=De(n,a);if(i&&i.construct&&(o.where=o.where.concat(i.where),o.template=o.template.concat(i.construct)),t&&Object.keys(t).length>0){var u=t.sparqlWhere&&Object.keys(t.sparqlWhere).length>0,s=t.q&&t.q.length>0;u&&o.where.push(t.sparqlWhere),s&&o.where.push({type:"group",patterns:[{queryType:"SELECT",variables:[ze("s1")],where:[{type:"bgp",triples:[He(ze("s1"),ze("p1"),ze("o1"))]},{type:"filter",expression:{type:"operation",operator:"regex",args:[{type:"operation",operator:"lcase",args:[{type:"operation",operator:"str",args:[ze("o1")]}]},Me(t.q.toLowerCase(),"",Fe("http://www.w3.org/2001/XMLSchema#string"))]}},{type:"filter",expression:{type:"operation",operator:"notexists",args:[{type:"bgp",triples:[He(ze("s1"),Fe("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),ze("o1"))]}]}}],type:"query"}]}),Object.keys(t).forEach((function(e){if("sparqlWhere"!==e&&"q"!==e){var r="a"===e?t[e]:e,n=r.split(":")[0],i=r.split(":")[1],u=a.find((function(e){return e.prefix===n})),s="a"===e?"http://www.w3.org/1999/02/22-rdf-syntax-ns#type":u.url+i,c="a"===e?u.url+i:t[e];o.where.push({type:"bgp",triples:[He(ze("s1"),Fe(s),Fe(c))]})}}))}var c=Ge.stringify(o);return t.q&&delete t.q,c},Je=function(){var e=T(regeneratorRuntime.mark((function e(r,t,n,a){var o,i,u,s,c,l,f,p,d,h,y,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.dataServers,u=a.resources,s=a.httpClient,c=a.jsonContext,l=a.ontologies,f=u[t],p=k({"@context":c,"@type":f.types,"@embed":"@never"},ve(null===(o=f.list)||void 0===o?void 0:o.dereference)),d=Object.keys(r).map((function(e){return new Promise((function(t,a){var o,u,c=$e({containers:r[e],params:k(k({},n),{},{filter:k(k({},null===(o=f.list)||void 0===o?void 0:o.filter),n.filter)}),dereference:null===(u=f.list)||void 0===u?void 0:u.dereference,ontologies:l});s(i[e].sparqlEndpoint,{method:"POST",body:c,noToken:!0!==i[e].authServer}).then((function(e){var r=e.json;return g.frame(r,p,{omitGraph:!1})})).then((function(e){t(e["@graph"]||[])})).catch((function(e){return a(e)}))}))})),e.next=6,Promise.all(d);case 6:if(0!==(h=e.sent).length){e.next=11;break}return e.abrupt("return",{data:[],total:0});case 11:return h=(y=[].concat).apply.apply(y,A(h)),v=h.map((function(e){return e.id=e.id||e["@id"],e})),n.sort&&(v=v.sort((function(e,r){return!e[n.sort.field]||!r[n.sort.field]||("ASC"===n.sort.order?e[n.sort.field].localeCompare(r[n.sort.field]):r[n.sort.field].localeCompare(e[n.sort.field]))}))),n.pagination&&(v=v.slice((n.pagination.page-1)*n.pagination.perPage,n.pagination.page*n.pagination.perPage)),e.abrupt("return",{data:v,total:h.length});case 16:case"end":return e.stop()}}),e)})));return function(r,t,n,a){return e.apply(this,arguments)}}(),We=function(e){return function(){var r=T(regeneratorRuntime.mark((function r(t){var n,a,o,i,u,s,c,l,f,p,d=arguments;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=d.length>1&&void 0!==d[1]?d[1]:{},u=e.dataServers,s=e.resources,c=s[t]){r.next=5;break}throw new Error("Resource ".concat(t," is not mapped in resources file"));case 5:if(l=null!==(n=c.list)&&void 0!==n&&n.containers&&(null===(a=c.list)||void 0===a?void 0:a.containers.length)>0?null===(f=c.list)||void 0===f?void 0:f.containers:ce(c.types,null===(p=c.list)||void 0===p?void 0:p.servers,u),null===(o=c.list)||void 0===o||!o.fetchContainer){r.next=10;break}return r.abrupt("return",ye(l,t,i,e));case 10:return r.abrupt("return",Je(l,t,i,e));case 11:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},Ve=function(e){return function(){var r=T(regeneratorRuntime.mark((function r(t,n){var a,o,i,u,s,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a=e.returnFailedResources,o=[],i=I(n.ids),r.prev=3,i.s();case 5:if((u=i.n()).done){r.next=21;break}return s="object"===S(s=u.value)?s["@id"]:s,r.prev=8,r.next=11,re(e)(t,{id:s});case 11:c=r.sent,l=c.data,o.push(l),r.next=19;break;case 16:r.prev=16,r.t0=r.catch(8),a&&o.push({id:s});case 19:r.next=5;break;case 21:r.next=26;break;case 23:r.prev=23,r.t1=r.catch(3),i.e(r.t1);case 26:return r.prev=26,i.f(),r.finish(26);case 29:return r.abrupt("return",{data:o});case 30:case"end":return r.stop()}}),r,null,[[3,23,26,29],[8,16]])})));return function(e,t){return r.apply(this,arguments)}}()},Ye=function(e){return function(){var r=T(regeneratorRuntime.mark((function r(t,n){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.filter=k(k({},n.filter),{},O({},n.target,n.id)),delete n.target,r.next=4,We(e)(t,n);case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},Qe=function(e){return function(){var r=T(regeneratorRuntime.mark((function r(t,n){var a,o,i,u;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.dataServers,o=e.httpClient,i=e.jsonContext,u=K(n.id,a),r.next=4,se(n.data,e);case 4:return n.data=r.sent,r.next=7,o(n.id,{method:"PUT",body:JSON.stringify(k({"@context":i},n.data)),noToken:!u||!0!==a[u].authServer});case 7:return r.abrupt("return",{data:n.data});case 8:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()};function Xe(e){this.message=e}Xe.prototype=new Error,Xe.prototype.name="InvalidCharacterError";var Ze="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new Xe("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n,a=0,o=0,i="";n=r.charAt(o++);~n&&(t=a%4?64*t+n:n,a++%4)?i+=String.fromCharCode(255&t>>(-2*a&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);return i};function Ke(e){var r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(Ze(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(r)}catch(e){return Ze(r)}}function er(e){this.message=e}function rr(e,r){if("string"!=typeof e)throw new er("Invalid token specified");var t=!0===(r=r||{}).header?0:1;try{return JSON.parse(Ke(e.split(".")[t]))}catch(e){throw new er("Invalid token specified: "+e.message)}}er.prototype=new Error,er.prototype.name="InvalidTokenError";var tr=function(){var e=T(regeneratorRuntime.mark((function e(r){var t,n,a,o,i,u,s,c,l,f,p,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.dataServers,n=r.httpClient,a=localStorage.getItem("token"),o=Z("pod",t),i=Z("authServer",t),!a){e.next=24;break}return u=rr(a),s=u.webId,e.prev=6,e.next=9,n(s);case 9:l=e.sent,f=l.json,c=f,e.next=20;break;case 14:return e.prev=14,e.t0=e.catch(6),console.error(e.t0),localStorage.removeItem("token"),window.location.reload(),e.abrupt("return");case 20:o&&(r.dataServers[o].name="My Pod",r.dataServers[o].baseUrl=ae(s,"data"),r.dataServers[o].sparqlEndpoint=(null===(p=c.endpoints)||void 0===p?void 0:p["void:sparqlEndpoint"])||ae(s,"sparql")),i&&(r.dataServers[i].proxyUrl=null===(d=c.endpoints)||void 0===d?void 0:d.proxyUrl),e.next=25;break;case 24:o&&delete r.dataServers[o];case 25:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(r){return e.apply(this,arguments)}}(),nr=function(){var e=T(regeneratorRuntime.mark((function e(r){var t,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object.values(r.dataServers).filter((function(e){return!0!==e.pod})).map((function(e){return r.httpClient(new URL("/.well-known/void",e.baseUrl)).then((function(e){return{data:e.json}})).catch((function(e){if(404===e.status)return{error:e};throw e}))})),e.prev=1,e.next=4,Promise.all(t);case 4:n=e.sent,a=I(n);try{for(a.s();!(o=a.n()).done;)o.value.data}catch(e){a.e(e)}finally{a.f()}e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}(),ar=function(e){if(!Z("default",e.dataServers))throw new Error("You must define a default server in your dataServers config");e.jsonContext||(e.jsonContext=Object.fromEntries(e.ontologies.map((function(e){return[e.prefix,e.url]})))),e.returnFailedResources||(e.returnFailedResources=!1);var r=tr(e),t=nr(e),n=function(e){return T(regeneratorRuntime.mark((function n(){var a=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r;case 2:return n.next=4,t;case 4:return n.next=6,e.apply(void 0,a);case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))};return{getList:n(We(e)),getOne:n(re(e)),getMany:n(Ve(e)),getManyReference:n(Ye(e)),create:n(le(e)),update:n(Qe(e)),updateMany:function(){throw new Error("updateMany is not implemented yet")},delete:n(fe(e)),deleteMany:n(pe(e)),getCreateContainer:n(he(e))}},or=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(r.headers||(r.headers=new Headers),r.method){case"POST":case"PATCH":case"PUT":r.headers.has("Accept")||r.headers.set("Accept","application/ld+json"),r.headers.has("Content-Type")||r.headers.set("Content-Type","application/ld+json");break;case"DELETE":break;case"GET":default:r.headers.has("Accept")||r.headers.set("Accept","application/ld+json")}if(!r.noToken){var t=localStorage.getItem("token");t&&r.headers.set("Authorization","Bearer ".concat(t))}return v.fetchJson(e,r)};export{G as DateTimeInput,F as FilterHandler,z as GroupedReferenceHandler,N as ImageField,B as ReferenceArrayField,$ as ReferenceArrayInput,D as ReferenceField,J as ReferenceInput,Q as ReificationArrayInput,B as UriArrayField,$ as UriArrayInput,De as buildDereferenceQuery,$e as buildSparqlQuery,ar as dataProvider,or as httpClient,X as useCreateContainer};
//# sourceMappingURL=index.es.js.map
