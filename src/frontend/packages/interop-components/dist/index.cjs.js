"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("react-admin"),t=require("@material-ui/core"),n=require("react-final-form"),a=require("final-form-calculate"),o=require("@material-ui/icons/SaveAlt"),u=require("@semapps/semantic-data-provider"),i=require("@semapps/input-components");function l(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=l(e),s=l(a),f=l(o);function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){y(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r,t,n,a,o,u){try{var i=e[o](u),l=i.value}catch(e){return void t(e)}i.done?r(l):Promise.resolve(l).then(n,a)}function b(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function u(e){m(o,n,a,u,i,"next",e)}function i(e){m(o,n,a,u,i,"throw",e)}u(void 0)}))}}function y(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function v(){return(v=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function h(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function g(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var n,a,o=[],u=!0,i=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);u=!0);}catch(e){i=!0,a=e}finally{try{u||null==t.return||t.return()}finally{if(i)throw a}}return o}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return O(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var w=function(t){var n=r.useDataProvider(),a=r.useRedirect(),o=r.useNotify();return e.useCallback(function(){var e=b(regeneratorRuntime.mark((function e(r){var u,i,l,c,s,f,p=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=p.length>1&&void 0!==p[1]?p[1]:[],e.next=3,n.getOne(t,{id:r});case 3:return i=e.sent,l=i.data,(c=d({},l))["http://www.w3.org/ns/prov#wasDerivedFrom"]=c.id,delete c.id,delete c["@context"],u.forEach((function(e){delete c[e]})),e.next=12,n.create(t,{data:c});case 12:s=e.sent,f=s.data,a("/"+t+"/"+encodeURIComponent(f.id)+"/show"),o("La ressource a bien été copiée",{type:"success"});case 16:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[t,n,a,o])},x=function(t){var n=r.useNotify(),a=u.useCreateContainer(t);return e.useCallback(function(){var e=b(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n("Cette méthode n'est pas disponible pour le moment",{type:"error"});case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[n,a])},E=t.makeStyles((function(e){return{toolbar:{backgroundColor:"light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900],marginTop:e.spacing(2)},field:{marginBottom:23,minWidth:e.spacing(20)}}})),j=s.default({field:"remoteUri",updates:function(e){return e?{plainUri:e}:{}}},{field:"plainUri",updates:function(e,r,t){return e!==t.remoteUri?{remoteUri:null}:{}}}),P=function(a){var o=a.basePath,l=a.record,s=a.resource,p=a.stripProperties,d=E(),m=u.useContainers(s,"@remote"),y=w(s),v=x(s),h=e.useCallback(function(){var e=b(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.plainUri,"fork"!==r.method){e.next=6;break}return e.next=4,y(t,p);case 4:e.next=8;break;case 6:return e.next=8,v(t);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[y,v,p]);return c.default.createElement(n.Form,{onSubmit:h,decorators:[j],initialValues:{method:"fork"},render:function(e){var n=e.handleSubmit,a=e.dirtyFields;return c.default.createElement("form",{onSubmit:n},c.default.createElement(t.Box,{m:"1em"},m&&Object.keys(m).length>0&&c.default.createElement(r.FormInput,{input:c.default.createElement(u.ReferenceInput,{source:"remoteUri",label:"Rechercher...",reference:s,filter:{_servers:"@remote"},fullWidth:!0},c.default.createElement(i.MultiServerAutocompleteInput,{optionText:"pair:label",shouldRenderSuggestions:function(e){return e.length>1},resettable:!0})),basePath:o,record:l,resource:s,variant:"filled",margin:"dense"}),c.default.createElement(r.FormInput,{input:c.default.createElement(r.TextInput,{source:"plainUri",label:"URL de la ressource distante",fullWidth:!0}),basePath:o,record:l,resource:s,variant:"filled",margin:"dense"}),c.default.createElement(r.FormInput,{input:c.default.createElement(r.RadioButtonGroupInput,{source:"method",label:"Méthode d'importation",choices:[{id:"fork",name:"Créer une nouvelle version de la ressource (fork)"},{id:"sync",name:"Garder la ressource locale synchronisée avec la ressource distante"}]}),basePath:o,record:l,resource:s,variant:"filled",margin:"dense"})),c.default.createElement(t.Toolbar,{className:d.toolbar},c.default.createElement(t.Button,{type:"submit",startIcon:c.default.createElement(f.default,null),variant:"contained",color:"primary",disabled:!a.remoteUri},"Importer")))}})},S=["stripProperties"],k=t.makeStyles((function(e){return{tab:{maxWidth:"unset",padding:"6px 24px"}}}));exports.CreateOrImportForm=function(n){var a=n.stripProperties,o=h(n,S),u=g(e.useState(0),2),i=u[0],l=u[1],s=t.useMediaQuery((function(e){return e.breakpoints.down("xs")}),{noSsr:!0}),f=k();return c.default.createElement(c.default.Fragment,null,c.default.createElement(t.Box,{pb:2,fullWidth:!0},c.default.createElement(t.Tabs,{value:i,onChange:function(e,r){return l(r)},indicatorColor:"primary"},c.default.createElement(t.Tab,{className:f.tab,label:"Créer"}),c.default.createElement(t.Tab,{className:f.tab,label:s?"Importer":"Importer une ressource distante"})),c.default.createElement(t.Divider,null)),0===i&&c.default.createElement(r.SimpleForm,o),1===i&&c.default.createElement(P,v({stripProperties:a||[]},o)))},exports.ImportForm=P,exports.useFork=w,exports.useSync=x;
//# sourceMappingURL=index.cjs.js.map
