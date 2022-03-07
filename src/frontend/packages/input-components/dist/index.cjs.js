"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("react-admin"),r=require("@semapps/semantic-data-provider");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(e);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=function(e){var t=e.record,r=e.optionText,n=e.dataServers,o=Object.values(n).find((function(e){return t.id.startsWith(e.baseUrl)}));return a.default.createElement("span",null,t[r],o&&a.default.createElement("em",{className:"serverName",style:{color:"grey"}}," (",o.name,")"))},i=["optionText"],c=["optionText"];exports.MultiServerAutocompleteArrayInput=function(n){var c=n.optionText,s=u(n,i),p=r.useDataServers(),f=e.useCallback((function(e,t){return t[c].toLowerCase().match(e.toLowerCase())}),[c]);return a.default.createElement(t.AutocompleteArrayInput,o({matchSuggestion:f,optionText:a.default.createElement(l,{optionText:c,dataServers:p})},s))},exports.MultiServerAutocompleteInput=function(n){var l=n.optionText,i=u(n,c),s=r.useDataServers(),p=e.useCallback((function(e){if(e){var t=Object.values(s).find((function(t){return e.id.startsWith(t.baseUrl)}));return e[l]+(t?" (".concat(t.name,")"):"")}}),[l,s]);return a.default.createElement(t.AutocompleteInput,o({optionText:p},i))};
//# sourceMappingURL=index.cjs.js.map
