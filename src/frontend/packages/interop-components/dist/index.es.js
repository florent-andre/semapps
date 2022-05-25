import e,{useState as t,useMemo as r,useEffect as n,useCallback as a}from"react";import{Form as o}from"react-final-form";import{useLocale as i,useTranslate as s,useInput as l,FieldTitle as c,useCreateSuggestionContext as u,useCreate as f,useDataProvider as p,useRedirect as m,useNotify as b,FormInput as d,TextInput as h,RadioButtonGroupInput as g,SimpleForm as v}from"react-admin";import{makeStyles as y,TextField as x,Grid as E,Typography as w,Dialog as O,DialogContent as j,DialogActions as S,Button as P,Box as A,Toolbar as k,useMediaQuery as T,Tabs as C,Tab as R,Divider as I}from"@material-ui/core";import U from"@material-ui/lab/Autocomplete";import W from"@material-ui/icons/Language";import F from"final-form-calculate";import L from"@material-ui/icons/SaveAlt";import{useCreateContainer as N,useContainers as D,ReferenceInput as V}from"@semapps/semantic-data-provider";import{MultiServerAutocompleteInput as B}from"@semapps/input-components";import M from"@material-ui/icons/Save";function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){Y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r,n,a,o,i){try{var s=e[o](i),l=s.value}catch(e){return void r(e)}s.done?t(l):Promise.resolve(l).then(n,a)}function J(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){z(o,n,a,i,s,"next",e)}function s(e){z(o,n,a,i,s,"throw",e)}i(void 0)}))}}function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){s=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(s)throw a}}return o}(e,t)||K(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e){return function(e){if(Array.isArray(e))return Q(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||K(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){if(e){if("string"==typeof e)return Q(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(e,t):void 0}}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var X="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var ee=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){
// @license MIT
!function(t,r){e.exports?e.exports=r():this.Diacritics=r()}(0,(function(){for(var e={map:{}},t=[{base:" ",letters:" "},{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"Th",letters:"Þ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"ff",letters:"ﬀ"},{base:"fi",letters:"ﬁ"},{base:"fl",letters:"ﬂ"},{base:"ffi",letters:"ﬃ"},{base:"ffl",letters:"ﬄ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nñnⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"߀oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oe",letters:"Œœ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"ss",letters:"ß"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"th",letters:"þ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],r=0,n=t.length;r<n;r++)for(var a=t[r].letters.split(""),o=0,i=a.length;o<i;o++)e.map[a[o]]=t[r].base;return e.clean=function(t){if(!t||!t.length||t.length<1)return"";for(var r,n="",a=t.split(""),o=0,i=a.length;o<i;o++)n+=(r=a[o])in e.map?e.map[r]:r;return n},e}))})).clean,te=/[.*+?^${}()|[\]\\]/g,re=/[a-z0-9_]/i,ne=/\s+/;var ae=function(e,t,r){var n,a;return a={insideWords:!1,findAllOccurrences:!1,requireMatchAll:!1},n=(n=r)||{},Object.keys(n).forEach((function(e){a[e]=!!n[e]})),r=a,e=ee(e),(t=ee(t)).trim().split(ne).filter((function(e){return e.length>0})).reduce((function(t,n){var a,o,i=n.length,s=!r.insideWords&&re.test(n[0])?"\\b":"",l=new RegExp(s+n.replace(te,"\\$&"),"i");if(a=l.exec(e),r.requireMatchAll&&null===a)return e="",[];for(;a&&(o=a.index,t.push([o,o+i]),e=e.slice(0,o)+new Array(i+1).join(" ")+e.slice(o+i),r.findAllOccurrences);)a=l.exec(e);return t}),[]).sort((function(e,t){return e[0]-t[0]}))},oe=/^\s+|\s+$/g,ie=/^[-+]0x[0-9a-f]+$/i,se=/^0b[01]+$/i,le=/^0o[0-7]+$/i,ce=parseInt,ue="object"==typeof X&&X&&X.Object===Object&&X,fe="object"==typeof self&&self&&self.Object===Object&&self,pe=ue||fe||Function("return this")(),me=Object.prototype.toString,be=Math.max,de=Math.min,he=function(){return pe.Date.now()};function ge(e,t,r){var n,a,o,i,s,l,c=0,u=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var r=n,o=a;return n=a=void 0,c=t,i=e.apply(o,r)}function b(e){return c=e,s=setTimeout(h,t),u?m(e):i}function d(e){var r=e-l;return void 0===l||r>=t||r<0||f&&e-c>=o}function h(){var e=he();if(d(e))return g(e);s=setTimeout(h,function(e){var r=t-(e-l);return f?de(r,o-(e-c)):r}(e))}function g(e){return s=void 0,p&&n?m(e):(n=a=void 0,i)}function v(){var e=he(),r=d(e);if(n=arguments,a=this,l=e,r){if(void 0===s)return b(l);if(f)return s=setTimeout(h,t),m(l)}return void 0===s&&(s=setTimeout(h,t)),i}return t=ye(t)||0,ve(r)&&(u=!!r.leading,o=(f="maxWait"in r)?be(ye(r.maxWait)||0,t):o,p="trailing"in r?!!r.trailing:p),v.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=a=s=void 0},v.flush=function(){return void 0===s?i:g(he())},v}function ve(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ye(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==me.call(e)}(e))return NaN;if(ve(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ve(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(oe,"");var r=se.test(e);return r||le.test(e)?ce(e.slice(2),r?2:8):ie.test(e)?NaN:+e}var xe=function(e,t,r){var n=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return ve(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),ge(e,t,{leading:n,maxWait:t,trailing:a})},Ee=["fetchLexicon","resource","source","initialValue","label","parse","optionText","helperText"],we=y((function(e){return{icon:{color:e.palette.text.secondary,marginRight:e.spacing(2)}}})),Oe=function(e,t){return"string"==typeof e?e:e.label?e.label:"string"==typeof t?e[t]:"function"==typeof t?t(e):void 0},je=function(a){var o=a.fetchLexicon,u=a.resource,f=a.source,p=a.initialValue,m=a.label,b=a.parse,d=a.optionText;a.helperText;var h=G(a,Ee),g=we(),v=i(),y=s(),O=l(q({source:f,initialValue:p},h)),j=O.input,S=j.value,P=j.onChange,A=j.onBlur,k=j.onFocus,T=O.isRequired,C=O.meta,R=C.error,I=C.submitError,F=C.touched,L=_(t(p),2),N=L[0],D=L[1],V=_(t([]),2),B=V[0],M=V[1],$=r((function(){return xe((function(e,t){o({keyword:e,locale:v}).then((function(e){return t(e)}))}),200)}),[v,o]);return n((function(){N&&$(N,(function(e){return M(e)}))}),[S,N,d,$]),e.createElement(U,{autoComplete:!0,value:S||null,openOnFocus:!!p,options:S?[S].concat(H(B)):B,filterSelectedOptions:!0,filterOptions:function(e){return e},getOptionLabel:function(e){return Oe(e,d)},getOptionSelected:function(e,t){return Oe(e,d)===Oe(t,d)},onChange:function(e,t){t&&b&&(t=b(t)),P(t),M([])},onInputChange:function(e,t){return D(t)},noOptionsText:y("ra.navigation.no_results"),renderInput:function(t){return t.inputProps.autoComplete="new-password",e.createElement(x,Z({},t,{autoFocus:!0,inputProps:q(q({},t.inputProps),{},{onBlur:function(e){A(e),t.inputProps.onBlur&&t.inputProps.onBlur(e)},onFocus:function(e){k(e),t.inputProps.onFocus&&t.inputProps.onFocus(e)}}),label:""!==m&&!1!==m&&e.createElement(c,{label:m,source:f,resource:u,isRequired:T}),error:!(!F||!R&&!I)},h))},renderOption:function(t){var r=ae(t.label,N),n=function(e,t){var r=[];return 0===t.length?r.push({text:e,highlight:!1}):t[0][0]>0&&r.push({text:e.slice(0,t[0][0]),highlight:!1}),t.forEach((function(n,a){var o=n[0],i=n[1];r.push({text:e.slice(o,i),highlight:!0}),a===t.length-1?i<e.length&&r.push({text:e.slice(i,e.length),highlight:!1}):i<t[a+1][0]&&r.push({text:e.slice(i,t[a+1][0]),highlight:!1})})),r}(t.label,r);return e.createElement(E,{container:!0,alignItems:"center"},e.createElement(E,{item:!0},e.createElement(W,{className:g.icon})),e.createElement(E,{item:!0,xs:!0},"string"==typeof n?n:n.map((function(t,r){return e.createElement("span",{key:r,style:{fontWeight:t.highlight?700:400}},t.text)})),e.createElement(w,{variant:"body2",color:"textSecondary"},t.description)))}})};je.defaultProps={variant:"filled",margin:"dense"};var Se=function(r){var n=r.fetchLexicon,i=r.parse,s=u(),l=s.filter,c=s.onCancel,p=s.onCreate,m=_(t(l||""),2),b=m[0],d=m[1],h=_(f("Skill"),1)[0],g=a((function(e){var t=e.lexicon;h({payload:{data:i(t)}},{onSuccess:function(e){var t=e.data;d(""),p(t)}})}),[h,p,i]);return e.createElement(O,{open:!0,onClose:c,fullWidth:!0,maxWidth:"sm"},e.createElement(o,{onSubmit:g,render:function(t){var r=t.handleSubmit,a=t.dirtyFields;return e.createElement("form",{onSubmit:r},e.createElement(j,null,e.createElement(je,{label:"Titre",source:"lexicon",initialValue:b,fetchLexicon:n})),e.createElement(S,null,e.createElement(P,{onClick:c},"Annuler"),e.createElement(P,{variant:"contained",color:"primary",type:"submit",disabled:!a.lexicon},"Ajouter")))}}))},Pe=function(e){var t=p(),r=m(),n=b();return a(function(){var a=J(regeneratorRuntime.mark((function a(o){var i,s,l,c,u,f,p=arguments;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i=p.length>1&&void 0!==p[1]?p[1]:[],a.next=3,t.getOne(e,{id:o});case 3:return s=a.sent,l=s.data,(c=q({},l))["http://www.w3.org/ns/prov#wasDerivedFrom"]=c.id,delete c.id,delete c["@context"],i.forEach((function(e){delete c[e]})),a.next=12,t.create(e,{data:c});case 12:u=a.sent,f=u.data,r("/"+e+"/"+encodeURIComponent(f.id)+"/show"),n("La ressource a bien été copiée",{type:"success"});case 16:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),[e,t,r,n])},Ae=function(e){var t=b(),r=N(e);return a(function(){var e=J(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t("Cette méthode n'est pas disponible pour le moment",{type:"error"});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[t,r])},ke=y((function(e){return{toolbar:{backgroundColor:"light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900],marginTop:e.spacing(2)},field:{marginBottom:23,minWidth:e.spacing(20)}}})),Te=F({field:"remoteUri",updates:function(e){return e?{plainUri:e}:{}}},{field:"plainUri",updates:function(e,t,r){return e!==r.remoteUri?{remoteUri:null}:{}}}),Ce=function(t){var r=t.basePath,n=t.record,i=t.resource,s=t.stripProperties,l=ke(),c=D(i,"@remote"),u=Pe(i),f=Ae(i),p=a(function(){var e=J(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.plainUri,"fork"!==t.method){e.next=6;break}return e.next=4,u(r,s);case 4:e.next=8;break;case 6:return e.next=8,f(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[u,f,s]);return e.createElement(o,{onSubmit:p,decorators:[Te],initialValues:{method:"fork"},render:function(t){var a=t.handleSubmit,o=t.dirtyFields;return e.createElement("form",{onSubmit:a},e.createElement(A,{m:"1em"},c&&Object.keys(c).length>0&&e.createElement(d,{input:e.createElement(V,{source:"remoteUri",label:"Rechercher...",reference:i,filter:{_servers:"@remote"},fullWidth:!0},e.createElement(B,{optionText:"pair:label",shouldRenderSuggestions:function(e){return e.length>1},resettable:!0})),basePath:r,record:n,resource:i,variant:"filled",margin:"dense"}),e.createElement(d,{input:e.createElement(h,{source:"plainUri",label:"URL de la ressource distante",fullWidth:!0}),basePath:r,record:n,resource:i,variant:"filled",margin:"dense"}),e.createElement(d,{input:e.createElement(g,{source:"method",label:"Méthode d'importation",choices:[{id:"fork",name:"Créer une nouvelle version de la ressource (fork)"},{id:"sync",name:"Garder la ressource locale synchronisée avec la ressource distante"}]}),basePath:r,record:n,resource:i,variant:"filled",margin:"dense"})),e.createElement(k,{className:l.toolbar},e.createElement(P,{type:"submit",startIcon:e.createElement(L,null),variant:"contained",color:"primary",disabled:!o.remoteUri},"Importer")))}})},Re=["stripProperties"],Ie=y((function(e){return{tab:{maxWidth:"unset",padding:"6px 24px"}}})),Ue=function(r){var n=r.stripProperties,a=G(r,Re),o=_(t(0),2),i=o[0],s=o[1],l=T((function(e){return e.breakpoints.down("xs")}),{noSsr:!0}),c=Ie();return e.createElement(e.Fragment,null,e.createElement(A,{pb:2,fullWidth:!0},e.createElement(C,{value:i,onChange:function(e,t){return s(t)},indicatorColor:"primary"},e.createElement(R,{className:c.tab,label:"Créer"}),e.createElement(R,{className:c.tab,label:l?"Importer":"Importer une ressource distante"})),e.createElement(I,null)),0===i&&e.createElement(v,a),1===i&&e.createElement(Ce,Z({stripProperties:n||[]},a)))},We=y((function(e){return{toolbar:{backgroundColor:"light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900],marginTop:e.spacing(2)},field:{marginBottom:23,minWidth:e.spacing(20)}}})),Fe=function(t){t.basePath,t.record,t.resource;var r=t.fetchLexicon,n=We(),i=a(function(){var e=J(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.lexicon,console.log("lexicon",r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return e.createElement(o,{onSubmit:i,render:function(t){var a=t.handleSubmit,o=t.dirtyFields;return e.createElement("form",{onSubmit:a},e.createElement(A,{m:"1em"},e.createElement(je,{label:"Titre",source:"lexicon",fetchLexicon:r})),e.createElement(k,{className:n.toolbar},e.createElement(P,{type:"submit",startIcon:e.createElement(M,null),variant:"contained",color:"primary",disabled:!o.lexicon},"Créer")))}})},Le=function(e){return e&&e[0].toUpperCase()+e.slice(1)||""},Ne=function(){var e=J(regeneratorRuntime.mark((function e(t){var r,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.keyword,n=t.locale,e.next=3,fetch("https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&language=".concat(n,"&uselang=").concat(n,"&type=item&limit=10&origin=*&search=").concat(encodeURIComponent(r)));case 3:return a=e.sent,e.next=6,a.json();case 6:return o=e.sent,e.abrupt("return",o.search.map((function(e){return{uri:e.concepturi,label:Le(e.match.text),description:Le(e.description)}})));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();export{Ue as CreateOrImportForm,Ce as ImportForm,je as LexiconAutocompleteInput,Se as LexiconCreateDialog,Fe as LexiconImportForm,Ne as fetchWikidata,Pe as useFork,Ae as useSync};
//# sourceMappingURL=index.es.js.map
