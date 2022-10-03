import*as e from"react";import t,{useState as r,useMemo as n,useEffect as a,useLayoutEffect as o,Children as i,isValidElement as l,cloneElement as c}from"react";import{getResources as s,AppBar as u,Link as m,MenuItemLink as p,Layout as d,TopToolbar as f,useGetIdentity as h,Notification as b,useResourceDefinition as g,ListButton as v,Create as E,ShowButton as y,Edit as w,useListContext as x,Button as P,CreateButton as k,ExportButton as L,List as N,Pagination as C,useGetList as O,FilterList as S,FilterListItem as I,useResourceContext as T,useTranslate as R,getFieldLabelTranslationArgs as B,getTabFullPath as W,escapePath as j,linkToRecord as A,useShowContext as F,useListController as M,ListContextProvider as V,EditButton as U,Show as _,useCreate as D,useNotify as z,ReferenceInput as H,FormWithRedirect as q,TextInput as G,required as Y,SaveButton as $}from"react-admin";import{Grid as J,Button as K,TextField as Q,Select as X,MenuItem as Z,makeStyles as ee,Zoom as te,Hidden as re,ListItemIcon as ne,Typography as ae,Tooltip as oe,Collapse as ie,List as le,useMediaQuery as ce,Box as se,Container as ue,ThemeProvider as me,createTheme as pe,Accordion as de,AccordionSummary as fe,AccordionDetails as he,Tabs as be,Tab as ge,Divider as ve,CircularProgress as Ee,Avatar as ye,Dialog as we,DialogTitle as xe,DialogContent as Pe,DialogActions as ke}from"@material-ui/core";import{Form as Le,Field as Ne,useForm as Ce}from"react-final-form";import{useHistory as Oe,useLocation as Se,Link as Ie,useRouteMatch as Te,Route as Re}from"react-router-dom";import{useStore as Be,useSelector as We,shallowEqual as je}from"react-redux";import Ae from"@material-ui/core/Typography";import{useLocation as Fe,useHistory as Me,Redirect as Ve}from"react-router";import Ue from"@material-ui/icons/ViewList";import _e from"@material-ui/icons/ExpandMore";import De from"@material-ui/core/Tabs";import ze from"@material-ui/core/Tab";import He from"react-markdown";import qe from"@material-ui/icons/Add";import Ge from"@material-ui/icons/Cancel";function Ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ye(Object(r),!0).forEach((function(t){Ke(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ye(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Je(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,a)}function Ke(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Qe(){return(Qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Xe(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function Ze(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}(e,t)||tt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function et(e){return function(e){if(Array.isArray(e))return rt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||tt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function tt(e,t){if(e){if("string"==typeof e)return rt(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?rt(e,t):void 0}}function rt(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var nt=["input"],at=["input"],ot=function(e){var r=e.input,n=Xe(e,nt);return t.createElement(Q,Qe({},r,n))},it=function(e){var r=e.input,n=Xe(e,at),a=We(s,je);return t.createElement(X,Qe({},r,n),a.filter((function(e){return e.hasList||e.name===r.value})).map((function(e){return t.createElement(Z,{value:e.name,key:e.name},e.options.label)})))},lt=function(){var e,r,n,a,o,i=Oe(),l=Se(),c=l.pathname.match(/^\/([^/]+)/),s=c?c[1]:"Organization",u=Be().getState(),m=null==u||null===(e=u.admin)||void 0===e||null===(r=e.resources[l.pathname.split("/")[1]])||void 0===r||null===(n=r.list)||void 0===n||null===(a=n.params)||void 0===a||null===(o=a.filter)||void 0===o?void 0:o.q;return t.createElement(Le,{onSubmit:function(e){var t=e.filter,r=e.type;t?i.push("/".concat(r,"?filter=").concat(encodeURIComponent('{"q": "'.concat(t,'"}')))):i.push("/".concat(r,"?filter=").concat(encodeURIComponent("{}")))},initialValues:{type:s,filter:m||""},render:function(e){var r=e.handleSubmit;return t.createElement("form",{onSubmit:r},t.createElement(J,{container:!0,spacing:2},t.createElement(J,{item:!0,xs:5},t.createElement(Ne,{name:"filter",component:ot,placeholder:"Rechercher...",fullWidth:!0})),t.createElement(J,{item:!0,xs:5},t.createElement(Ne,{name:"type",component:it,fullWidth:!0})),t.createElement(J,{item:!0,xs:2},t.createElement(K,{variant:"outlined",type:"submit",fullWidth:!0},"Hop"))))}})},ct=ee((function(e){var t;return{menuButton:Ke({},e.breakpoints.up("sm"),{display:"none"}),toolbar:Ke({height:56},e.breakpoints.up("sm"),{paddingLeft:"24px"}),spacer:{flex:1},searchFormContainer:Ke({minWidth:240,flex:2,margin:"0 5%"},e.breakpoints.up("md"),{minWidth:360}),searchFormWrapper:{maxWidth:880,margin:"auto"},presContainer:Ke({flex:1,overflow:"hidden"},e.breakpoints.up("sm"),{flex:"unset",display:"flex",justifyContent:"flex-start",alignItems:"center"}),logoContainer:Ke({display:"none"},e.breakpoints.up("sm"),{height:48,marginLeft:"0.2em",marginRight:"0.2em",display:"block"}),logo:{height:"100%"},title:(t={display:"block",color:e.palette.common.white},Ke(t,e.breakpoints.up("sm"),{display:"none"}),Ke(t,e.breakpoints.up("md"),{display:"block"}),t)}})),st=function(e){var r=ct();return t.createElement(u,Qe({},e,{classes:$e({toolbar:r.toolbar,menuButton:r.menuButton},e.classes),color:"primary"}),t.createElement(m,{to:"/"},t.createElement("div",{className:r.presContainer},t.createElement("div",{className:r.logoContainer},t.createElement(te,{in:!0,timeout:2e3},t.createElement("img",{className:r.logo,src:process.env.PUBLIC_URL+"/logo192.png",alt:"logo"}))),t.createElement(Ae,{className:r.title,variant:"h6",noWrap:!0},e.title))),t.createElement(re,{only:"xs"},t.createElement("div",{className:r.searchFormContainer},t.createElement("div",{className:r.searchFormWrapper},t.createElement(lt,null)))))},ut=ee((function(e){return{icon:{minWidth:e.spacing(5)},sidebarIsOpen:{"& a":{paddingLeft:e.spacing(4),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}},sidebarIsClosed:{"& a":{paddingLeft:e.spacing(2),transition:"padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"}}}})),mt=function(e){var r=e.handleToggle,n=e.sidebarIsOpen,a=e.isOpen,o=e.name,i=e.icon,l=e.children,c=e.dense,s=ut(),u=t.createElement(Z,{dense:c,button:!0,onClick:r},t.createElement(ne,{className:s.icon},a?t.createElement(_e,null):i),t.createElement(ae,{variant:"inherit",color:"textSecondary"},o));return t.createElement(t.Fragment,null,n||a?u:t.createElement(oe,{title:o,placement:"right"},u),t.createElement(ie,{in:a,timeout:"auto",unmountOnExit:!0},t.createElement(le,{dense:c,component:"div",disablePadding:!0,className:n?s.sidebarIsOpen:s.sidebarIsClosed},l)))},pt=function(e){var r=e.resource,n=e.onClick,a=e.open;return t.createElement(p,{to:"/".concat(r.name),primaryText:r.options&&r.options.label||r.name,leftIcon:r.icon?t.createElement(r.icon,null):t.createElement(Ue,null),onClick:n,sidebarIsOpen:a})},dt=ee((function(e){return{treeMenuOneRowLabel:{"& .MuiMenuItem-root":{display:"block",whiteSpace:"nowrap",textOverflow:"ellipsis",maxWidth:240,"& > .MuiListItemIcon-root":{verticalAlign:"middle"}}},treeMenu:function(e){return{"& .MuiMenuItem-root":{whiteSpace:"normal",maxWidth:240,maxHeight:10+24*e.labelNbLines,paddingLeft:56,textOverflow:"ellipsis",overflow:"hidden",display:"-webkit-box","-webkit-line-clamp":e.labelNbLines,"-webkit-box-orient":"vertical","& > .MuiListItemIcon-root":{position:"absolute",left:16}},"& .MuiCollapse-root":{"& .MuiMenuItem-root":{paddingLeft:72,"& > .MuiListItemIcon-root":{left:32}}}}}}})),ft=function(e){var o=e.onMenuClick,i=e.logout,l=e.dense,c=void 0!==l&&l,u=e.openAll,m=void 0!==u&&u,p=e.labelNbLines,d=void 0===p?1:p,f=ce((function(e){return e.breakpoints.down("xs")})),h=ce((function(e){return e.breakpoints.only("sm")})),b=dt({labelNbLines:d=h?1:d}),g=We(s),v=Fe().pathname.match(/^\/([^/]+)/),E=v?v[1]:null,y=Ze(r({}),2),w=y[0],x=y[1],P=n((function(){return g.filter((function(e){return!e.options.parent}))}),[g]),k=n((function(){var e=g.reduce((function(e,t){return t.options&&t.options.parent&&e.push(t.options.parent),e}),[]);return g.filter((function(t){return e.includes(t.name)}))}),[g]);return a((function(){var e=g.find((function(e){return e.name===E})),t=e&&k.find((function(t){return t.name===e.options.parent})),r=k.reduce((function(e,r){return e[r.name]=m||t&&r.name===t.name,e}),{});x((function(e){return $e($e({},r),e)}))}),[k,g,E,m]),t.createElement(se,{mt:2,className:1===d?b.treeMenuOneRowLabel:b.treeMenu},P.map((function(e){return t.createElement(se,{key:e.name},k.includes(e)?t.createElement(mt,{key:e.name,handleToggle:function(){return t=e.name,void x((function(e){return $e($e({},e),{},Ke({},t,!e[t]))}));var t},isOpen:w[e.name],sidebarIsOpen:!0,name:e.options&&e.options.label||e.name,icon:e.icon?t.createElement(e.icon,null):t.createElement(Ue,null),dense:c},g.filter((function(t){return t.hasList&&t.options.parent===e.name})).map((function(e){return t.createElement(pt,{key:e.name,resource:e,onClick:o,open:!0})}))):t.createElement(t.Fragment,null,e.hasList&&t.createElement(pt,{key:e.name,resource:e,onClick:o,open:!0})))})),f&&i)},ht=["appBar","menu","userMenu","children","labelNbLines"],bt=ee((function(e){return{appFrame:Ke({marginTop:56},e.breakpoints.up("sm"),{"& #main-content":{paddingTop:8,paddingLeft:5}})}})),gt=function(e){var r=e.appBar,a=e.menu;e.userMenu;var o=e.children,i=e.labelNbLines,l=Xe(e,ht),c=bt(),s=n((function(){return function(e){return t.createElement(ft,Qe({},e,{labelNbLines:i}))}}),[i]);return t.createElement(d,Qe({},l,{classes:{appFrame:c.appFrame},appBar:r,menu:a||s}),o)};gt.defaultProps={appBar:st};var vt=ee((function(e){return{topToolBar:Ke({boxSizing:"border-box",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"},e.breakpoints.down("xs"),{marginTop:8,marginBottom:8}),titleContainer:function(t){return Ke({maxWidth:t.sidebarOpen?"calc(100vw - 300px)":"calc(100vw - 100px)",position:"relative",top:-8,marginRight:8},e.breakpoints.down("xs"),{top:0,marginRight:0,maxWidth:"90vw"})},title:Ke({overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.breakpoints.down("xs"),{fontSize:"1.8rem"}),actionsContainer:function(t){return Ke({whiteSpace:"nowrap",marginLeft:"auto",overflow:"hidden"},e.breakpoints.down("xs"),{height:"list"===t.currentView?0:"auto"})}}})),Et=function(e){var r=e.children,n=e.currentView,a=We((function(e){return e.admin.ui.sidebarOpen})),o=vt({currentView:n,sidebarOpen:a});return t.createElement(f,{className:o.topToolBar},t.createElement("div",{className:o.titleContainer},t.createElement(ae,{className:o.title,variant:"h4",color:"primary",id:"react-admin-title",component:"h1"})),t.createElement("div",{className:o.actionsContainer},r))},yt=ee((function(e){return{header:{position:"relative",height:65},logo:Ke({position:"absolute",top:-15,height:110,width:110},e.breakpoints.down("xs"),{position:"relative",top:0,width:65,height:65})}})),wt=function(e){var r=e.userMenu,n=e.logout,a=yt(),o=h().identity;return t.createElement(se,{bgcolor:"primary.main"},t.createElement(ue,{maxWidth:"lg",className:a.header},t.createElement(J,{container:!0},t.createElement(J,{item:!0,xs:12,sm:r?3:6},t.createElement(Ie,{to:"/"},t.createElement("img",{src:process.env.PUBLIC_URL+"/logo192.png",alt:"SemApps",className:a.logo}))),t.createElement(re,{xsDown:!0},t.createElement(J,{item:!0,sm:6},t.createElement(se,{pt:2},t.createElement(lt,null)))),r&&t.createElement(J,{item:!0,sm:3,align:"right"},t.createElement(se,{pt:o&&""!==o.id?2:1},t.cloneElement(r,{logout:n}))))))},xt=function(){var e=Se().pathname;return a((function(){window.scrollTo(0,0)}),[e]),null},Pt=function(e){var r=e.appBar,n=e.title,a=e.open,o=e.logout,i=e.theme,l=e.children,c=ce(i.breakpoints.down("xs"));return t.createElement(me,{theme:i},t.createElement(xt,null),t.createElement(r,{title:n,open:a,logout:o}),t.createElement(ue,{maxWidth:"lg",disableGutters:c},t.createElement(se,{mb:{xs:0,sm:5}},l)),t.createElement(b,null))};Pt.defaultProps={appBar:wt};var kt=pe(),Lt=pe({palette:{primary:{main:"#28ccfb",contrastText:"#fff"},secondary:{main:"#bcef5b"},grey:{main:"#e0e0e0"}},typography:{details:{fontSize:8}},overrides:{RaChipField:{chip:{marginLeft:0,marginTop:0,marginRight:8,marginBottom:8}},RaShow:{card:Ke({padding:25},kt.breakpoints.down("xs"),{padding:15})},RaList:{content:Ke({padding:25},kt.breakpoints.down("xs"),{padding:15,paddingTop:0,marginTop:-8})},RaListToolbar:{toolbar:{paddingLeft:"0 !important"}},RaSingleFieldList:{root:{marginTop:0,marginBottom:0}},RaAutocompleteArrayInput:{chipContainerFilled:{"& .serverName":{display:"none"}}},MuiTab:{labelIcon:{paddingTop:0}},MuiCard:{root:{"@media print":{boxShadow:"none !important"}}}}}),Nt=["basePath","className","data","title"],Ct=function(e){var r=e.basePath,n=e.className,a=e.data;e.title;var o=Xe(e,Nt),i=g({}).hasList;return t.createElement(Et,Qe({className:n},o),i&&t.createElement(v,{basePath:r,record:a}))},Ot=["actions"],St=function(e){var n=e.actions,a=Xe(e,Ot),i=Ze(r(!1),2);i[0];var l=i[1];return o((function(){l(!0)}),[l]),t.createElement(E,Qe({actions:t.cloneElement(n,a),redirect:"show"},a))};St.defaultProps={actions:t.createElement(Ct,null)};var It=["basePath","className","data","hasList","hasShow"],Tt=function(e){var r=e.basePath,n=e.className,a=e.data,o=e.hasList,i=e.hasShow,l=Xe(e,It);return t.createElement(Et,Qe({className:n},l),o&&t.createElement(v,{basePath:r,record:a}),i&&t.createElement(y,{basePath:r,record:a}))},Rt=["actions"],Bt=function(e){var r=e.actions,n=Xe(e,Rt);return t.createElement(w,Qe({actions:t.cloneElement(r,n)},n))};Bt.defaultProps={actions:t.createElement(Tt,null)};var Wt=ee((function(e){return{root:{width:"100%"},accordion:{backgroundColor:e.palette.grey[200]},accordionSummary:{minHeight:"0 !important","& div":{margin:"0 !important"}},accordionDetails:{backgroundColor:e.palette.common.white,display:"block","& p":{margin:0}},date:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary,flexBasis:"15%",flexShrink:0},title:{fontSize:e.typography.pxToRem(15)}}})),jt=function(e){var r=e.date,n=e.title,a=e.content,o=Wt(),i=x(),l=i.ids,c=i.data,s=i.resource,u=i.basePath;return t.createElement("div",{className:o.root},l.map((function(e,i){if(!c[e])return null;var l=r&&new Date(r(c[e])),m=n&&n(c[e]);return t.createElement(de,{className:o.accordion,key:i},t.createElement(fe,{expandIcon:t.createElement(_e,null),"aria-controls":"panel".concat(i,"-content"),id:"panel".concat(i,"-header"),className:o.accordionSummary},l&&t.createElement(ae,{className:o.date},l.toLocaleDateString()),t.createElement(ae,{className:o.title},m)),t.createElement(he,{className:o.accordionDetails},t.createElement(a,{record:c[e],resource:s,basePath:u})))})))},At=["bulkActions","basePath","currentSort","displayedFilters","exporter","filters","filterValues","onUnselectItems","resource","selectedIds","showFilter","total","views","currentView","setView"],Ft=function(e){var r=e.bulkActions,n=e.basePath,a=e.currentSort,o=e.displayedFilters,i=e.exporter,l=e.filters,c=e.filterValues,s=e.onUnselectItems,u=e.resource,p=e.selectedIds,d=e.showFilter,f=e.total,h=e.views,b=e.currentView,v=e.setView,E=Xe(e,At),y=ce((function(e){return e.breakpoints.down("xs")})),w=g(E),x=new URLSearchParams(Fe().search);return t.createElement(Et,{currentView:b},h&&Object.entries(h).filter((function(e){return Ze(e,1)[0]!==b})).map((function(e){var r=Ze(e,2),n=r[0],a=r[1];return x.set("view",n),x.set("page",1),x.set("perPage",a.perPage),a.sort&&(x.set("sort",a.sort.field),x.set("order",a.sort.order)),t.createElement(m,{key:n,to:"?"+x.toString()},t.createElement(P,{onClick:function(){return v(n)},label:a.label},t.createElement(a.icon)))})),l&&t.cloneElement(l,{resource:u,showFilter:d,displayedFilters:o,filterValues:c,context:"button"}),w.hasCreate&&t.createElement(k,{basePath:n}),!y&&!1!==i&&t.createElement(L,{disabled:0===f,resource:u,sort:a,filter:c,exporter:i}),r&&t.cloneElement(r,{basePath:n,filterValues:c,resource:u,selectedIds:p,onUnselectItems:s}))},Mt=["actions"],Vt=function(e){return t.createElement(C,Qe({rowsPerPageOptions:[25,50,100]},e))},Ut=function(e){var r=e.actions,n=Xe(e,Mt);return t.createElement(N,Qe({actions:t.cloneElement(r,n),sort:{field:"pair:label",order:"ASC"},pagination:t.createElement(Vt,null),perPage:50},n))};Ut.defaultProps={actions:t.createElement(Ft,null)};var _t=ee((function(e){return{tab:{minWidth:55}}})),Dt=function(){var e=Me(),r=_t(),n=Fe().pathname.match(/^\/([^/]+)/),a=n?n[1]:null,o=We(s,je),i=ce((function(e){return e.breakpoints.down("xs")}));return t.createElement(be,{value:a,onChange:function(t,r){return e.push("/"+r)},indicatorColor:"primary",textColor:"primary",scrollButtons:"auto"},o.filter((function(e){return e.hasList})).map((function(e){return t.createElement(ge,{key:e.name,icon:t.createElement(e.icon),label:i?void 0:e.options.label,value:e.name,className:r.tab})})))},zt=function(e){var r=e.source,n=e.id,a=T(),o=O(a).data;return t.createElement(t.Fragment,null," ",t.createElement("span",{className:"filter-count"},"("+Object.values(o).filter((function(e){return e[r]===n})).length+")"))},Ht=function(e){var r=e.reference,n=e.source,a=e.inverseSource,o=e.limit,i=e.sort,l=e.filter,c=e.label,u=e.icon,m=e.showCounters,p=O(r,{page:1,perPage:o},i,l),d=p.data,f=p.ids,h=We(s,je).filter((function(e){return(null==e?void 0:e.name)===r}))[0];return t.createElement(S,{label:c||h.options.label,icon:u||t.createElement(h.icon)},f.filter((function(e){return!a||d[e][a]})).map((function(e){return t.createElement(I,{key:e,label:t.createElement("span",{className:"filter-label"},d[e]["pair:label"],m&&t.createElement(zt,{source:n,id:e})),value:Ke({},n,e)})})))};Ht.defaultProps={limit:25,showCounters:!0};var qt=ee((function(){return{rightLabel:{color:"grey",textAlign:"right",borderBottom:"1px dashed #c0c0c0",paddingBottom:10,marginBottom:10}}})),Gt=function(e){var r=e.label,n=e.children,a=e.record,o=e.resource,i=e.source,l=e.basePath,c=e.mb,s=qt(),u=R();return null!=a&&a[i]?t.createElement(se,{mb:c},t.createElement(se,{className:s.rightLabel},u.apply(void 0,et(B({label:r,resource:o,source:i})))),n&&t.createElement(se,{m:0},t.cloneElement(n,{record:a,resource:o,basePath:l}))):null};Gt.defaultProps={mb:4};var Yt=["basePath","children","record","resource","showLabel"],$t=function(e){var r=e.basePath,n=e.children,a=e.record,o=e.resource,i=e.showLabel,l=Xe(e,Yt);return t.createElement(J,Qe({item:!0},l),t.Children.map(n,(function(e){return e&&t.isValidElement(e)?t.createElement("div",{key:e.props.source},e.props.addLabel&&i?t.createElement(Gt,{record:a,resource:o,basePath:r,label:e.props.label,source:e.props.source,disabled:!1},e):"string"==typeof e.type?e:t.cloneElement(e,{record:a,resource:o,basePath:r})):null})))},Jt=ee((function(){return{line:{borderBottom:"1px solid #e0e0e0",marginTop:-6,marginBottom:7}}})),Kt=function(e){var r=e.basePath,n=e.children,a=e.record,o=e.resource,i=Jt(),l=R();return t.createElement(se,null,t.Children.map(n,(function(e){return e&&a[e.props.source]&&t.isValidElement(e)?t.createElement("div",{key:e.props.source},e.props.addLabel?t.createElement(J,{container:!0,spacing:3,className:i.line},t.createElement(J,{item:!0,xs:3},t.createElement(ae,{color:"textSecondary",align:"right",variant:"body2"},l.apply(void 0,et(B({label:e.props.label,resource:o,source:e.props.source}))))),t.createElement(J,{item:!0,xs:9},t.createElement(ae,{variant:"body2"},t.cloneElement(e,{record:a,resource:o,basePath:r})))):"string"==typeof e.type?e:t.cloneElement(e,{record:a,resource:o,basePath:r})):null})))};function Qt(e,t){return e(t={exports:{}},t.exports),t.exports}function Xt(){}function Zt(){}Zt.resetWarningCache=Xt;var er=function(){function e(e,t,r,n,a,o){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Zt,resetWarningCache:Xt};return r.PropTypes=r,r},tr=Qt((function(e){e.exports=er()})),rr=["children","syncWithLocation","value","record","showResourcesIcons"],nr=function(t){var r=t.children,n=t.syncWithLocation,a=t.value,o=t.record,s=t.showResourcesIcons,u=Xe(t,rr),m=Se(),p=Te(),d=m.pathname;return e.createElement(De,Qe({indicatorColor:"primary",value:n?d:a},u),i.map(r,(function(e,t){if(!e||!l(e))return null;var r=W(e,t,p.url);return c(e,{context:"header",value:n?r:t,syncWithLocation:n,record:o,showResourcesIcons:s})})))};nr.propTypes={children:tr.node};var ar=ee((function(e){return{content:{padding:e.spacing(2)}}})),or=function(e){var n=e.children,a=e.syncWithLocation,o=void 0===a||a,s=e.tabs,u=e.record,m=e.showResourcesIcons,p=void 0!==m&&m,d=Te(),f=ar(),h=i.toArray(n).filter((function(e){return null!==e})),b=Ze(r(0),2),g=b[0],v=b[1];return t.createElement("div",null,c(s,{syncWithLocation:o,onChange:function(e,t){o||v(t)},value:g,record:u,showResourcesIcons:p},h),t.createElement(ve,null),t.createElement("div",{className:f.content},i.map(h,(function(e,r){return e&&l(e)?o?t.createElement(Re,{exact:!0,path:j(W(e,r,d.url)),render:function(){return c(e,{context:"content",record:u})}}):g===r?c(e,{context:"content",record:u}):null:null}))))};or.defaultProps={tabs:t.createElement(nr,null)};var ir=["record","source","defaultImage"],lr=ee((function(e){var t;return{loader:{width:"100%",backgroundColor:"#e0e0e0",paddingTop:100,paddingBottom:100},image:(t={width:"100%",maxHeight:"none",margin:"0.5rem"},Ke(t,e.breakpoints.down("sm"),{margin:0}),Ke(t,"@media print",{maxWidth:250,height:"auto"}),t)}})),cr=function(e){var r=e.record,n=e.source,a=e.defaultImage,o=Xe(e,ir),i=lr();r[n]||(r[n]=a);var l=Array.isArray(r[n])?r[n][0]:r[n];return l.rawFile instanceof File?t.createElement(se,{align:"center",className:i.loader},t.createElement(Ee,null)):t.createElement("img",Qe({src:l,className:i.image,alt:r["pair:label"]},o))},sr=ee((function(){return{root:{flexGrow:1}}})),ur=function(e){var r=e.basePath,n=e.children,a=e.record,o=e.resource,i=sr();return t.createElement("div",{className:i.root},t.createElement(J,{container:!0,spacing:5},t.Children.map(n,(function(e){return e&&t.isValidElement(e)?t.cloneElement(e,{resource:o,record:a,basePath:r}):null}))))},mr=function(e){return e.stopPropagation()},pr=function(){},dr=function(t){var r=t.children,n=t.linkType,a=t.spacing,o=t.xs,i=t.sm,l=t.md,c=t.lg,s=t.xl,u=x(),p=u.ids,d=u.data,f=u.basePath;return e.createElement(J,{container:!0,spacing:a},p.map((function(t){return d[t]?e.createElement(J,{item:!0,key:t,xs:o,sm:i,md:l,lg:c,xl:s},n?e.createElement(m,{to:A(f,t,n),onClick:mr},e.cloneElement(e.Children.only(r),{record:d[t],basePath:f,onClick:pr})):e.cloneElement(e.Children.only(r),{record:d[t],basePath:f})):null})))};dr.defaultProps={xs:6,spacing:3,linkType:"edit"};var fr=ee((function(e){return{root:{flexGrow:1,margin:e.spacing(-1)}}})),hr=function(e){var r=e.children,n=e.image,a=e.defaultImage,o=fr(),i=F(),l=i.basePath,c=i.loaded,s=i.record,u=i.resource;return c?t.createElement("div",{className:o.root},t.createElement(ae,{variant:"h3",color:"primary",component:"h1",id:"react-admin-title"}),t.createElement(J,{container:!0,spacing:5},t.createElement(J,{item:!0,xs:12,sm:4},t.createElement(cr,{record:s,source:n,defaultImage:a})),t.createElement(J,{item:!0,xs:12,sm:8},t.createElement(Kt,{record:s,resource:u,basePath:l},r)))):null};hr.defaultProps={defaultImage:process.env.PUBLIC_URL+"/logo512.png"};var br=ee((function(e){return{subTitle:{marginTop:e.spacing(5),marginBottom:e.spacing(2)},subTitleSpan:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,paddingTop:e.spacing(.75),paddingBottom:e.spacing(.75),paddingLeft:e.spacing(2),paddingRight:e.spacing(4)}}})),gr=function(e){var r=e.children,n=br();return t.createElement(ae,{variant:"h5",className:n.subTitle},t.createElement("span",{className:n.subTitleSpan},r))},vr=Qt((function(e){
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var i=r.apply(null,a);i&&e.push(i)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var l in a)t.call(a,l)&&a[l]&&e.push(l);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r}()})),Er=["basePath","children","context","className","icon","label","record","resource","syncWithLocation","value","inversePredicate","filter","showResourcesIcons"],yr=function(e){var r,a,o=e.basePath,i=e.children,l=e.context,c=e.className,u=e.icon,m=e.label,p=e.record,d=e.resource,f=e.syncWithLocation,h=void 0===f||f,b=e.value,g=e.inversePredicate,v=e.filter,E=void 0===v?{}:v,y=e.showResourcesIcons,w=void 0!==y&&y,x=Xe(e,Er),P=Se(),k={component:Ie,to:$e($e({},P),{},{pathname:b})},L=We(s),N=n((function(){return L.find((function(e){return(null==e?void 0:e.name)===d}))}),[L,d]),C=M({resource:d,basePath:o,filter:$e(Ke({},g,null==p?void 0:p.id),E),perPage:500});return"header"===l?t.createElement(ze,Qe({key:m,label:C.ids?"".concat(m||(null===(r=N.options)||void 0===r?void 0:r.label)," (").concat(C.ids.length,")"):m||(null===(a=N.options)||void 0===a?void 0:a.label),value:b,icon:u||w&&t.createElement(N.icon),className:vr("show-tab",c)},h?k:{},x)):t.createElement(V,{value:C},i)},wr=ee((function(e){return{divider:{paddingTop:5,paddingBottom:20,borderBottom:"1px lightgrey solid","&:last-child":{borderBottom:"none"}}}})),xr=function(e){var r=e.children,n=e.divider,a=e.Label,o=R(),i=wr(),l=F(),c=l.basePath,s=l.loaded,u=l.record,m=l.resource;return s?t.createElement(se,null,t.Children.map(r,(function(e){return e&&u[e.props.source]&&t.isValidElement(e)?t.createElement("div",{key:e.props.source,className:n?i.divider:null},e.props.addLabel?t.createElement(t.Fragment,null,t.createElement(a,null,o.apply(void 0,et(B({label:e.props.label,resource:m,source:e.props.source})))),t.cloneElement(e,{record:u,resource:m,basePath:c})):"string"==typeof e.type?e:t.cloneElement(e,{record:u,resource:m,basePath:c})):null}))):null};xr.defaultProps={Label:gr};var Pr=function(e){var r=e.record,n=e.typesMap;if(r){Array.isArray(r.type)||(r.type=[r.type]);var a=Object.keys(n).find((function(e){return r.type.includes(n[e])}));if(a)return t.createElement(Ve,{to:"/".concat(a,"/").concat(encodeURIComponent(r.id),"/show")})}return null},kr=function(e){var r=e.children,n=F(),a=n.basePath,o=n.loaded,i=n.record,l=n.resource;return o?t.Children.map(r,(function(e){return e&&t.isValidElement(e)?t.createElement("div",{key:e.props.source},e.props.addLabel?t.createElement(Gt,{record:i,resource:l,basePath:a,label:e.props.label,source:e.props.source,disabled:!1},e):"string"==typeof e.type?e:t.cloneElement(e,{record:i,resource:l,basePath:a})):null})):null},Lr=["basePath","className","data","hasList","hasEdit"],Nr=function(e){var r=e.basePath,n=e.className,a=e.data,o=e.hasList,i=e.hasEdit,l=Xe(e,Lr);return t.createElement(Et,Qe({className:n},l),o&&t.createElement(v,{basePath:r,record:a}),i&&t.createElement(U,{basePath:r,record:a}))},Cr=["actions"],Or=function(e){var r=e.actions,n=Xe(e,Cr);return t.createElement(_,Qe({actions:t.cloneElement(r,n)},n))};Or.defaultProps={actions:t.createElement(Nr,null)};var Sr=["record","styles"],Ir=ee((function(e){return{parent:function(e){return $e({position:"relative"},e.parent)},image:function(e){return $e({width:"100%",borderRadius:"50%"},e.image)},child:{position:"absolute",bottom:0,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6},caption:{color:"black",fontSize:13}}})),Tr=function(e){var r=e.record,n=e.styles;Xe(e,Sr),console.log();var a=Ir(n),o=r?r["pair:firstName"]+" "+r["pair:lastName"]:"";return t.createElement(se,{className:a.parent},t.createElement("img",{src:r&&r.image||process.env.PUBLIC_URL+"/unknown-user.png",className:a.image,alt:o}),t.createElement(se,{bgcolor:"secondary.main",className:a.child,borderRadius:7},t.createElement(ae,{align:"center",className:a.caption,noWrap:!0},o)))},Rr=function(e){var r=e.source,n=e.record;return n&&n[r]?t.createElement(He,{source:n[r]}):null};Rr.defaultProps={addLabel:!0};var Br=ee((function(e){return{parent:function(e){return $e({position:"relative"},e.parent)},square:{width:"100%",paddingBottom:"100%",position:"relative"},avatar:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",borderRadius:"50%","& svg":{width:"55%",height:"55%"}},child:{position:"absolute",bottom:-10,left:0,right:0,paddingTop:2,paddingBottom:2,paddingLeft:6,paddingRight:6,marginBottom:10},caption:{color:"black",fontSize:13}}})),Wr=function(e){var r=e.record,n=e.label,a=e.defaultLabel,o=e.image,i=e.fallback,l=e.variant,c=e.labelColor,s=e.classes,u=e.children;if(s=Br(s),!r)return null;var m=("function"==typeof n?n(r):r[n])||a,p="function"==typeof o?o(r):r[o],d="function"==typeof i?i(r):i;return t.createElement(se,{className:s.parent},t.createElement("div",{className:s.square},t.createElement(ye,{src:p||d,alt:m,fallback:d,className:s.avatar,variant:l},u)),t.createElement(se,{bgcolor:c,className:s.child,borderRadius:5},t.createElement(ae,{align:"center",className:s.caption,noWrap:!0},m)))};Wr.defaultProps={labelColor:"secondary.main"};var jr=ee({root:{display:"flex",alignItems:"center"}}),Ar=function(e){var n=e.label,a=e.reference,o=e.source,i=e.children,l=jr(),c=Ze(r(!1),2),s=c[0],u=c[1],m=Ze(D(a),2),p=m[0],d=m[1].loading,f=R(),h=z(),b=Ce(),g=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p({payload:{data:t}},{onSuccess:function(e){var t=e.data;u(!1),b.change(o,t["@id"])},onFailure:function(e){var t=e.error;h(t.message,"error")}});case 1:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){Je(o,n,a,i,l,"next",e)}function l(e){Je(o,n,a,i,l,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return t.createElement("div",{className:l.root},t.createElement(H,{label:n,reference:a,source:o},i),t.createElement(P,{onClick:function(){return u(!0)},label:"ra.action.create"},t.createElement(qe,null)),t.createElement(we,{fullWidth:!0,open:s,onClose:function(){return u(!1)}},t.createElement(xe,null,f("ra.action.create")),t.createElement(q,{resource:a,save:g,render:function(e){var r=e.handleSubmitWithRedirect,n=e.pristine,a=e.saving;return t.createElement(t.Fragment,null,t.createElement(Pe,null,t.createElement(G,{label:"Titre",source:"pair:label",validate:Y(),fullWidth:!0})),t.createElement(ke,null,t.createElement(P,{label:"ra.action.cancel",onClick:function(){return u(!1)},disabled:d},t.createElement(Ge,null)),t.createElement($,{handleSubmitWithRedirect:r,pristine:n,saving:a,disabled:d})))}})))};export{jt as AccordionList,st as AppBar,Wr as AvatarField,$t as Column,ur as ColumnShowLayout,St as Create,Ct as CreateActions,Kt as DetailsList,Bt as Edit,Tt as EditActions,dr as GridList,hr as Hero,or as InverseReferenceShowLayout,gr as LargeLabel,gt as Layout,Ut as List,Ft as ListActions,yr as ListTab,cr as MainImage,xr as MainList,Rr as MarkdownField,Pr as RedirectByType,Ht as ReferenceFilter,Ar as ReferenceQuickCreateInput,Gt as RightLabel,Or as Show,Nr as ShowActions,kr as SideList,wt as SimpleAppBar,Pt as SimpleLayout,Dt as TabsMenu,Et as TopToolbar,Tr as UserIcon,Lt as theme};
//# sourceMappingURL=index.es.js.map
