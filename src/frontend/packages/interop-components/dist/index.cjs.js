"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-final-form"),r=require("react-admin"),n=require("@material-ui/core"),a=require("@material-ui/lab/Autocomplete"),o=require("@material-ui/icons/Language"),i=require("@material-ui/icons/Add"),l=require("final-form-calculate"),u=require("@material-ui/icons/SaveAlt"),s=require("@semapps/semantic-data-provider"),c=require("@semapps/input-components"),f=require("@material-ui/icons/Save"),p=require("@material-ui/icons/StarBorder");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=d(e),b=d(a),h=d(o),g=d(i),y=d(l),v=d(u),x=d(f),E=d(p);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r,n,a,o,i){try{var l=e[o](i),u=l.value}catch(e){return void r(e)}l.done?t(u):Promise.resolve(u).then(n,a)}function j(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){S(o,n,a,i,l,"next",e)}function l(e){S(o,n,a,i,l,"throw",e)}i(void 0)}))}}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||A(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){if(e){if("string"==typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(e,t):void 0}}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var D=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){
// @license MIT
!function(t,r){e.exports?e.exports=r():this.Diacritics=r()}(0,(function(){for(var e={map:{}},t=[{base:" ",letters:" "},{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",letters:"Þ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"ff",letters:"ﬀ"},{base:"fi",letters:"ﬁ"},{base:"fl",letters:"ﬂ"},{base:"ffi",letters:"ﬃ"},{base:"ffl",letters:"ﬄ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nñnⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"߀oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oe",letters:"Œœ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"ss",letters:"ß"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",letters:"þ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],r=0,n=t.length;r<n;r++)for(var a=t[r].letters.split(""),o=0,i=a.length;o<i;o++)e.map[a[o]]=t[r].base;return e.clean=function(t){if(!t||!t.length||t.length<1)return"";for(var r,n="",a=t.split(""),o=0,i=a.length;o<i;o++)n+=(r=a[o])in e.map?e.map[r]:r;return n},e}))})).clean,U=/[.*+?^${}()|[\]\\]/g,L=/[a-z0-9_]/i,q=/\s+/;var B=function(e,t,r){var n,a;return a={insideWords:!1,findAllOccurrences:!1,requireMatchAll:!1},n=(n=r)||{},Object.keys(n).forEach((function(e){a[e]=!!n[e]})),r=a,e=D(e),(t=D(t)).trim().split(q).filter((function(e){return e.length>0})).reduce((function(t,n){var a,o,i=n.length,l=!r.insideWords&&L.test(n[0])?"\\b":"",u=new RegExp(l+n.replace(U,"\\$&"),"i");if(a=u.exec(e),r.requireMatchAll&&null===a)return e="",[];for(;a&&(o=a.index,t.push([o,o+i]),e=e.slice(0,o)+new Array(i+1).join(" ")+e.slice(o+i),r.findAllOccurrences);)a=u.exec(e);return t}),[]).sort((function(e,t){return e[0]-t[0]}))},W=/^\s+|\s+$/g,N=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,M=/^0o[0-7]+$/i,G=parseInt,$="object"==typeof F&&F&&F.Object===Object&&F,z="object"==typeof self&&self&&self.Object===Object&&self,_=$||z||Function("return this")(),J=Object.prototype.toString,Y=Math.max,Z=Math.min,H=function(){return _.Date.now()};function K(e,t,r){var n,a,o,i,l,u,s=0,c=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var r=n,o=a;return n=a=void 0,s=t,i=e.apply(o,r)}function m(e){return s=e,l=setTimeout(h,t),c?d(e):i}function b(e){var r=e-u;return void 0===u||r>=t||r<0||f&&e-s>=o}function h(){var e=H();if(b(e))return g(e);l=setTimeout(h,function(e){var r=t-(e-u);return f?Z(r,o-(e-s)):r}(e))}function g(e){return l=void 0,p&&n?d(e):(n=a=void 0,i)}function y(){var e=H(),r=b(e);if(n=arguments,a=this,u=e,r){if(void 0===l)return m(u);if(f)return l=setTimeout(h,t),d(u)}return void 0===l&&(l=setTimeout(h,t)),i}return t=X(t)||0,Q(r)&&(c=!!r.leading,o=(f="maxWait"in r)?Y(X(r.maxWait)||0,t):o,p="trailing"in r?!!r.trailing:p),y.cancel=function(){void 0!==l&&clearTimeout(l),s=0,n=u=a=l=void 0},y.flush=function(){return void 0===l?i:g(H())},y}function Q(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function X(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==J.call(e)}(e))return NaN;if(Q(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Q(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(W,"");var r=V.test(e);return r||M.test(e)?G(e.slice(2),r?2:8):N.test(e)?NaN:+e}var ee=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return Q(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),K(e,t,{leading:n,maxWait:t,trailing:a})},te=["fetchLexicon","resource","source","initialValue","label","parse","optionText","helperText"],re=n.makeStyles((function(e){return{icon:{color:e.palette.text.secondary,marginRight:e.spacing(2)}}})),ne=function(e,t){return"string"==typeof e?e:e.label?e.label:"string"==typeof t?e[t]:"function"==typeof t?t(e):void 0},ae=function(t){var a=t.fetchLexicon,o=t.resource,i=t.source,l=t.initialValue,u=t.label,s=t.parse,c=t.optionText;t.helperText;var f=I(t,te),p=re(),d=r.useLocale(),y=r.useTranslate(),v=r.useInput(O({source:i,initialValue:l},f)),x=v.input,E=x.value,w=x.onChange,S=x.onBlur,j=x.onFocus,C=v.isRequired,A=v.meta,R=A.error,F=A.submitError,D=A.touched,U=P(e.useState(l),2),L=U[0],q=U[1],W=P(e.useState([]),2),N=W[0],V=W[1],M=e.useMemo((function(){return ee((function(e,t){a({keyword:e,locale:d}).then((function(e){return t(e)}))}),200)}),[d,a]);return e.useEffect((function(){L&&M(L,(function(e){return V(e)}))}),[E,L,c,M]),m.default.createElement(b.default,{freeSolo:!0,autoComplete:!0,value:E||null,openOnFocus:!!l,options:E?[E].concat(T(N)):N,filterSelectedOptions:!0,filterOptions:function(e,t){return""!==t.inputValue&&e.push({label:t.inputValue,summary:'Ajouter "'.concat(t.inputValue,'" au dictionnaire'),icon:g.default}),e},clearOnBlur:!0,selectOnFocus:!0,handleHomeEndKeys:!0,getOptionLabel:function(e){return ne(e,c)},getOptionSelected:function(e,t){return ne(e,c)===ne(t,c)},onChange:function(e,t){t&&s&&(t=s(t)),w(t),V([])},onInputChange:function(e,t){return q(t)},noOptionsText:y("ra.navigation.no_results"),renderInput:function(e){return e.inputProps.autoComplete="new-password",m.default.createElement(n.TextField,k({},e,{autoFocus:!0,inputProps:O(O({},e.inputProps),{},{onBlur:function(t){S(t),e.inputProps.onBlur&&e.inputProps.onBlur(t)},onFocus:function(t){j(t),e.inputProps.onFocus&&e.inputProps.onFocus(t)}}),label:""!==u&&!1!==u&&m.default.createElement(r.FieldTitle,{label:u,source:i,resource:o,isRequired:C}),error:!(!D||!R&&!F)},f))},renderOption:function(e){var t=B(e.label,L),r=function(e,t){var r=[];return 0===t.length?r.push({text:e,highlight:!1}):t[0][0]>0&&r.push({text:e.slice(0,t[0][0]),highlight:!1}),t.forEach((function(n,a){var o=n[0],i=n[1];r.push({text:e.slice(o,i),highlight:!0}),a===t.length-1?i<e.length&&r.push({text:e.slice(i,e.length),highlight:!1}):i<t[a+1][0]&&r.push({text:e.slice(i,t[a+1][0]),highlight:!1})})),r}(e.label,t);return m.default.createElement(n.Grid,{container:!0,alignItems:"center"},m.default.createElement(n.Grid,{item:!0},m.default.createElement(e.icon||h.default,{className:p.icon})),m.default.createElement(n.Grid,{item:!0,xs:!0},"string"==typeof r?r:r.map((function(e,t){return m.default.createElement("span",{key:t,style:{fontWeight:e.highlight?700:400}},e.text)})),m.default.createElement(n.Typography,{variant:"body2",color:"textSecondary"},e.summary)))}})};ae.defaultProps={variant:"filled",margin:"dense"};var oe=function(t){var n=r.useDataProvider(),a=r.useRedirect(),o=r.useNotify();return e.useCallback(function(){var e=j(regeneratorRuntime.mark((function e(r){var i,l,u,s,c,f,p=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=p.length>1&&void 0!==p[1]?p[1]:[],e.next=3,n.getOne(t,{id:r});case 3:return l=e.sent,u=l.data,(s=O({},u))["http://www.w3.org/ns/prov#wasDerivedFrom"]=s.id,delete s.id,delete s["@context"],i.forEach((function(e){delete s[e]})),e.next=12,n.create(t,{data:s});case 12:c=e.sent,f=c.data,a("/"+t+"/"+encodeURIComponent(f.id)+"/show"),o("La ressource a bien été copiée",{type:"success"});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,n,a,o])},ie=function(t){var n=r.useDataProvider(),a=r.useNotify(),o=r.useRedirect();return e.useCallback(function(){var e=j(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.create(t,{id:r});case 2:o("/"+t+"/"+encodeURIComponent(r)+"/show"),a("La ressource a bien été importée",{type:"success"});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[n,o,a])},le=n.makeStyles((function(e){return{toolbar:{backgroundColor:"light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900],marginTop:e.spacing(2)},field:{marginBottom:23,minWidth:e.spacing(20)}}})),ue=y.default({field:"remoteUri",updates:function(e){return e?{plainUri:e}:{}}},{field:"plainUri",updates:function(e,t,r){return e!==r.remoteUri?{remoteUri:null}:{}}}),se=function(a){var o=a.basePath,i=a.record,l=a.resource,u=a.stripProperties,f=le(),p=s.useContainers(l,"@remote"),d=oe(l),b=ie(l),h=e.useCallback(function(){var e=j(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.plainUri,"fork"!==t.method){e.next=6;break}return e.next=4,d(r,u);case 4:e.next=8;break;case 6:return e.next=8,b(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[d,b,u]);return m.default.createElement(t.Form,{onSubmit:h,decorators:[ue],initialValues:{method:"sync"},render:function(e){var t=e.handleSubmit,a=e.dirtyFields;return m.default.createElement("form",{onSubmit:t},m.default.createElement(n.Box,{m:"1em"},p&&Object.keys(p).length>0&&m.default.createElement(r.FormInput,{input:m.default.createElement(s.ReferenceInput,{source:"remoteUri",label:"Rechercher...",reference:l,filter:{_servers:"@remote"},fullWidth:!0},m.default.createElement(c.MultiServerAutocompleteInput,{optionText:"pair:label",shouldRenderSuggestions:function(e){return e.length>1},resettable:!0})),basePath:o,record:i,resource:l,variant:"filled",margin:"dense"}),m.default.createElement(r.FormInput,{input:m.default.createElement(r.TextInput,{source:"plainUri",label:"URL de la ressource distante",fullWidth:!0}),basePath:o,record:i,resource:l,variant:"filled",margin:"dense"}),m.default.createElement(r.FormInput,{input:m.default.createElement(r.RadioButtonGroupInput,{source:"method",label:"Méthode d'importation",choices:[{id:"sync",name:"Garder la ressource locale synchronisée avec la ressource distante"},{id:"fork",name:"Créer une nouvelle version de la ressource (fork)"}]}),basePath:o,record:i,resource:l,variant:"filled",margin:"dense"})),m.default.createElement(n.Toolbar,{className:f.toolbar},m.default.createElement(n.Button,{type:"submit",startIcon:m.default.createElement(v.default,null),variant:"contained",color:"primary",disabled:!a.plainUri},"Importer")))}})},ce=["stripProperties"],fe=n.makeStyles((function(e){return{tab:{maxWidth:"unset",padding:"6px 24px"}}})),pe=["resource","fetchLexicon","selectData","redirect","save","saving"],de=n.makeStyles((function(e){return{toolbar:{backgroundColor:"light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900],marginTop:e.spacing(2)},field:{marginBottom:23,minWidth:e.spacing(20)}}})),me=function(e){return e&&e[0].toUpperCase()+e.slice(1)||""},be=function(){var e=j(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.keyword,n=t.locale,e.next=3,fetch("https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&language=".concat(n,"&uselang=").concat(n,"&type=item&limit=10&origin=*&search=").concat(encodeURIComponent(r)));case 3:return a=e.sent,e.next=6,a.json();case 6:return o=e.sent,e.abrupt("return",o.search.map((function(e){return{uri:e.concepturi,label:me(e.match.text),summary:me(e.description),icon:h.default}})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),he=function(){var e=j(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.keyword,n=t.locale,e.next=3,fetch("https://ec.europa.eu/esco/api/suggest2?text=".concat(encodeURIComponent(r),"&language=").concat(n,"&type=skill&isInScheme=&facet=&offset=&limit=&full=&selectedVersion=&viewObsolete="));case 3:return a=e.sent,e.next=6,a.json();case 6:return o=e.sent,e.abrupt("return",o._embedded.results.map((function(e){return{uri:e.uri,label:(t=e.title,t&&t[0].toUpperCase()+t.slice(1)||""),icon:E.default};var t})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();exports.CreateOrImportForm=function(t){var a=t.stripProperties,o=I(t,ce),i=P(e.useState(0),2),l=i[0],u=i[1],s=n.useMediaQuery((function(e){return e.breakpoints.down("xs")}),{noSsr:!0}),c=fe();return m.default.createElement(m.default.Fragment,null,m.default.createElement(n.Box,{pb:2,fullWidth:!0},m.default.createElement(n.Tabs,{value:l,onChange:function(e,t){return u(t)},indicatorColor:"primary"},m.default.createElement(n.Tab,{className:c.tab,label:"Créer"}),m.default.createElement(n.Tab,{className:c.tab,label:s?"Importer":"Importer une ressource distante"})),m.default.createElement(n.Divider,null)),0===l&&m.default.createElement(r.SimpleForm,o),1===l&&m.default.createElement(se,k({stripProperties:a||[]},o)))},exports.ImportForm=se,exports.LexiconAutocompleteInput=ae,exports.LexiconCreateDialog=function(a){var o=a.fetchLexicon,i=a.selectData,l=r.useCreateSuggestionContext(),u=l.filter,s=l.onCancel,c=l.onCreate,f=r.useResourceContext(),p=P(e.useState(u||""),2),d=p[0],b=p[1],h=P(r.useCreate(f),1)[0],g=e.useCallback((function(e){var t=e.lexicon;t.uri||delete t.summary,h({payload:{data:i(t)}},{onSuccess:function(e){var t=e.data;b(""),c(t)}})}),[h,c,i]);return m.default.createElement(n.Dialog,{open:!0,onClose:s,fullWidth:!0,maxWidth:"sm"},m.default.createElement(t.Form,{onSubmit:g,render:function(e){var t=e.handleSubmit,r=e.dirtyFields;return m.default.createElement("form",{onSubmit:t},m.default.createElement(n.DialogContent,null,m.default.createElement(ae,{label:"Titre",source:"lexicon",initialValue:d,fetchLexicon:o})),m.default.createElement(n.DialogActions,null,m.default.createElement(n.Button,{onClick:s},"Annuler"),m.default.createElement(n.Button,{variant:"contained",color:"primary",type:"submit",disabled:!r.lexicon},"Ajouter")))}}))},exports.LexiconImportForm=function(r){r.resource;var a=r.fetchLexicon,o=r.selectData,i=r.redirect,l=r.save;r.saving,I(r,pe);var u=de(),s=e.useCallback(function(){var e=j(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=t.lexicon).uri||delete r.summary,e.next=4,l(o(r),i);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[o,l,i]);return m.default.createElement(t.Form,{onSubmit:s,render:function(e){var t=e.handleSubmit,r=e.dirtyFields;return m.default.createElement("form",{onSubmit:t},m.default.createElement(n.Box,{m:"1em"},m.default.createElement(ae,{label:"Titre",source:"lexicon",fetchLexicon:a})),m.default.createElement(n.Toolbar,{className:u.toolbar},m.default.createElement(n.Button,{type:"submit",startIcon:m.default.createElement(x.default,null),variant:"contained",color:"primary",disabled:!r.lexicon},"Créer")))}})},exports.fetchESCO=he,exports.fetchWikidata=be,exports.useFork=oe,exports.useSync=ie;
//# sourceMappingURL=index.cjs.js.map
