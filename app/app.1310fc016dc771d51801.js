webpackJsonp([1],{100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomNumber=t.normalizeMeta=t.normalizeUrl=t.processReducer=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(45),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,o=arguments[1],r=e[o.type];return r?r(n,o):n}},i=function(e){return!!e.match(/^(?:(ht|f)tp(s?):\/\/)?/)[0]},l=function(e){return i(e)?e:"https://"+e},u=function(e){var t=e.general,n=void 0===t?{}:t,a=e.schemaOrg,i=void 0===a?{}:a;return o({},n,{image:[]},(0,r.get)(i,"items[0].properties",{}))},c=function(e){var t=e.general,n=void 0===t?{}:t,r=e.openGraph;return o({},n,{image:[]},void 0===r?{}:r)},f=function(e,t){var n=e.schemaOrg?u(e):c(e);return n.image=(0,r.isArray)(n.image)?n.image.map(function(e){return(0,r.isString)(e)?{url:i(e)?e:t+e}:e}):[(0,r.isString)(n.image)?{url:i(n.image)?n.image:t+n.image}:n.image],n},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9;return(0,r.flow)(function(){return Math.random()*n},function(e){return Math.floor(e)},function(e){return e+t},function(t){return t*e})()}};t.processReducer=a,t.normalizeUrl=l,t.normalizeMeta=f,t.getRandomNumber=s,t.default={processReducer:a,normalizeUrl:l,normalizeMeta:f,getRandomNumber:s}},101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeApp=t.selectApp=t.updateApp=t.addApp=t.types=void 0;var o=n(537),r=function(e){return e&&e.__esModule?e:{default:e}}(o),a=n(80),i=function(e){var t=e.url,n=e.name,o=e.type;return{type:"ADD_APP",payload:{id:(0,r.default)(t,r.default.URL),url:t,name:n,type:o,selected:!0,color:(0,a.getRandomColor)()}}},l=function(e,t){return{type:"UPDATE_APP",payload:t,meta:{id:e}}},u=function(e){return{type:"REMOVE_APP",meta:{id:e}}},c=function(e){return{type:"SELECT_APP",meta:{id:e}}},f={ADD_APP:"ADD_APP",UPDATE_APP:"UPDATE_APP",SELECT_APP:"SELECT_APP",REMOVE_APP:"REMOVE_APP"};t.types=f,t.addApp=i,t.updateApp=l,t.selectApp=c,t.removeApp=u,t.default={types:f,addApp:i,updateApp:l,selectApp:c,removeApp:u}},164:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.webviewDependencies=t.getPath=t.tools=t.htmlMetadata=t.extensions=void 0;var o=n(287),r=n(682),a=o.remote.require("html-metadata"),i=o.remote.require(r.SCRIPTS.extensionsManager),l=o.remote.require(r.SCRIPTS.tools),u=function(e){return o.remote.app.getAppPath()+"/"+e},c=function(){return u(r.SCRIPTS.dependencies)};t.extensions=i,t.htmlMetadata=a,t.tools=l,t.getPath=u,t.webviewDependencies=c,t.default={extensions:i,htmlMetadata:a,tools:l,getPath:u,webviewDependencies:c}},286:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return{type:"TOGGLE_EXTENSION",meta:{id:e}}},r={TOGGLE_EXTENSION:"TOGGLE_EXTENSION"};t.types=r,t.toggleExtension=o,t.default={types:r,toggleExtension:o}},287:function(e,t){e.exports=require("electron")},327:function(e,t,n){e.exports=n.p+"fonts/flat-icons.eot"},329:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n(330);var r=n(0),a=o(r),i=n(27),l=n(71),u=n(443),c=n(449),f=o(c),s=n(130),p=n(231),d=n(534),b=o(d),m=n(535),y=o(m),g=n(683),h=o(g),v=(0,s.compose)((0,u.autoRehydrate)(),(0,s.applyMiddleware)(b.default,f.default))(s.createStore)(y.default);(0,u.persistStore)(v),(0,i.render)(a.default.createElement(l.Provider,{store:v},a.default.createElement(p.MuiThemeProvider,null,a.default.createElement(h.default,null))),document.getElementById("app"))},535:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(130),a=n(536),i=o(a),l=n(681),u=o(l);t.default=(0,r.combineReducers)({apps:i.default,extensions:u.default})},536:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var a,i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(45),u=n(100),c=n(101),f=c.types.ADD_APP,s=c.types.UPDATE_APP,p=c.types.SELECT_APP,d=c.types.REMOVE_APP,b=(a={},o(a,f,function(e,t){var n=t.payload;return[].concat(r(e.map(function(e){return i({},e,{selected:!1})})),[n])}),o(a,p,function(e,t){var n=t.meta;return e.map(function(e){return i({},e,{selected:e.id===n.id})})}),o(a,d,function(e,t){var n=t.meta;return(0,l.reject)(e,function(e){return e.id===n.id})}),o(a,s,function(e,t){var n=t.payload,o=t.meta;return e.map(function(e){return e.id===o.id?i({},e,n):e})}),a);t.default=(0,u.processReducer)(b,[])},681:function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(45),i=n(100),l=n(286),u=n(164),c=l.types.TOGGLE_EXTENSION,f=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},c,function(e,t){var n=t.meta;return r({},e,{enabled:(0,a.includes)(e.enabled,n.id)?(0,a.remove)(e.enabled,n.id):[].concat(o(e.enabled),[n.id])})});t.default=(0,i.processReducer)(f,{list:u.extensions.list(),enabled:[]})},682:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={setup:"./src/webapp/setup.js",tools:"./src/webapp/tools.js",scrappers:"./src/webapp/scrappers.js",messenger:"./src/webapp/messenger.js",extensionsManager:"./src/webapp/extensions-manager.js",dependencies:"./src/webapp/dependencies.js"};t.SCRIPTS=o,t.EXTENSIONS_FOLDER="./extensions"},683:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(0),i=o(a),l=n(684),u=n(287),c=n(50),f=o(c),s=n(730),p=o(s);n(897),n(903),u.webFrame.setZoomLevelLimits(1,1);var d=f.default.div({width:"100%",height:"100%",position:"relative"}),b=[{path:"/",component:p.default}],m=function(){return i.default.createElement(l.HashRouter,null,i.default.createElement(d,null,b.map(function(e){return i.default.createElement(l.Route,r({key:e.path,exact:!0},e))})))};t.default=m},730:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),u=o(l),c=n(71),f=n(50),s=o(f),p=n(103),d=o(p),b=n(731),m=o(b),y=n(80),g=n(101),h=n(732),v=o(h),E=n(793),w=o(E),_=n(796),P=o(_),O=n(894),x=o(O),A=n(895),C=o(A),j=s.default.div({width:"100%",height:"100%",display:"flex"}),S=s.default.div({position:"absolute",bottom:"1rem",display:"flex",flexDirection:"column",alignItems:"center"}),k=s.default.div({height:"100%",padding:"1rem .5rem",backgroundColor:(0,y.blueGrey)(900),display:"flex",flexDirection:"column",alignItems:"center",maxWidth:"75px",minWidth:"75px",boxShadow:"inset -10px 0px 25px 0px rgba(0,0,0,.3)",zIndex:10}),M=s.default.div({height:"100%",backgroundColor:(0,y.blue)(300),flex:1,position:"relative",zIndex:0}),T=function(e){function t(){var e,n,o,i;r(this,t);for(var l=arguments.length,c=Array(l),f=0;f<l;f++)c[f]=arguments[f];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.state={},o.render=function(){return u.default.createElement(j,null,u.default.createElement(k,null,u.default.createElement(w.default,{apps:o.props.apps,onClick:function(e){return o.props.selectApp(e.id)},onRightClick:function(e){return o.setState({editApp:e})}}),u.default.createElement(S,null,u.default.createElement(d.default,{color:"contrast",onClick:function(){return o.setState({showSettings:!o.state.showSettings})}},u.default.createElement(m.default,null)),u.default.createElement(v.default,{onAdd:o.props.addApp}))),u.default.createElement(M,null,u.default.createElement(P.default,null),o.state.showSettings&&u.default.createElement(x.default,null),o.state.editApp&&u.default.createElement(C.default,{app:o.state.editApp,onClose:function(){return o.setState({editApp:void 0})}})))},i=n,a(o,i)}return i(t,e),t}(l.Component);t.default=(0,c.connect)(function(e){return{apps:e.apps}},function(e){return{selectApp:function(t){return e((0,g.selectApp)(t))},addApp:function(t){return e((0,g.addApp)(t))}}})(T)},732:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),c=o(u),f=n(50),s=o(f),p=n(733),d=n(154),b=o(d),m=n(782),y=o(m),g=n(783),h=o(g),v=n(784),E=o(v),w=n(303),_=n(155),P=o(_),O=n(163),x=o(O),A=n(103),C=o(A),j=n(49),S=o(j),k=n(100),M=n(792),T=o(M),R=[{name:"slack",type:"slack",url:"[channel].slack.com"},{name:"trello",url:"https://trello.com"},{name:"dropbox",url:"https://www.dropbox.com"},{name:"github",type:"github",url:"https://www.github.com"},{name:"medium",url:"https://www.medium.com"},{name:"drive",type:"google",url:"https://drive.google.com/drive/my-drive"},{name:"inbox",type:"google",url:"https://inbox.google.com",component:function(e){return c.default.createElement(C.default,{onClick:e},c.default.createElement(h.default,null))}},{name:"calendar",type:"google",url:"https://www.google.com/calendar",component:function(e){return c.default.createElement(C.default,{onClick:e},c.default.createElement(E.default,null))}}],N=s.default.div({fontSize:"1.5rem",display:"flex",justifyContent:"flex-end"}),I=(0,s.default)(x.default)({flex:1}),D=function(e){return c.default.createElement(C.default,e,c.default.createElement(T.default,{name:e.name}))},L=function(e){function t(){var e,n,o,i;r(this,t);for(var l=arguments.length,u=Array(l),f=0;f<l;f++)u[f]=arguments[f];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={type:"default",url:"",showCard:!1,error:!1},o.onAdd=function(){(0,p.isURL)(o.state.url)?(o.toggleCard(),o.props.onAdd&&o.props.onAdd({url:(0,k.normalizeUrl)(o.state.url),name:o.state.name,type:o.state.type}),o.setState({url:"",name:"",type:"default"})):(o.setState({error:!0}),o.input.focus())},o.onPressEnter=function(e){o.state.error&&o.setState({error:!1}),13===e.which&&o.onAdd()},o.onShorcutClick=function(e){var t=e.url,n=e.name,r=e.type;return function(){return/\[.*\]/.test(t)?o.setState({url:t,name:n,type:r}):o.props.onAdd({url:t,name:n,type:r})}},o.getMotion=function(){return{width:(0,w.spring)(o.state.showCard?500:0),height:(0,w.spring)(o.state.showCard?148:0),opacity:(0,w.spring)(o.state.showCard?1:0)}},o.setRef=function(e){console.log(e),o.input=e},o.applyMotion=function(e){var t=e.width,n=e.height;return{position:"absolute",bottom:"65px",left:"50px",opacity:e.opacity,height:n+"px",width:t+"px"}},o.toggleCard=function(){return o.setState({showCard:!o.state.showCard})},o.checkFocus=function(){return o.state.showCard&&o.input.focus()},o.render=function(){return c.default.createElement("div",null,c.default.createElement(b.default,{fab:!0,color:"primary",onClick:o.toggleCard},c.default.createElement(y.default,null)),c.default.createElement(w.Motion,{style:o.getMotion(),onRest:o.checkFocus},function(e){var t=e.width,n=e.height,r=e.opacity;return c.default.createElement(P.default,{style:o.applyMotion({width:t,height:n,opacity:r})},c.default.createElement(_.CardContent,null,c.default.createElement(N,null,R.map(function(e){var t=e.url,n=e.name,r=e.type,a=e.component;return c.default.createElement("span",{key:"shortcut_"+n},a?a(o.onShorcutClick({url:t,name:n,type:r})):c.default.createElement(D,{name:n,onClick:o.onShorcutClick({url:t,name:n,type:r})}))}))),c.default.createElement(_.CardActions,{style:{padding:"0 16px"}},c.default.createElement(S.default,{type:"subheading",style:{alignSelf:"flex-end",margin:"0 .5rem 3px 0"}},"https://"),c.default.createElement(I,{inputRef:o.setRef,label:"Add web app",value:o.state.url,onChange:function(e){return o.setState({url:e.target.value})},error:o.state.error,onKeyUp:o.onPressEnter,inputProps:{placeholder:"www.github.com"}}),c.default.createElement(C.default,{"aria-label":"Add",color:"accent",onClick:function(){return o.onAdd()}},c.default.createElement(y.default,null))))}))},i=n,a(o,i)}return i(t,e),l(t,[{key:"componentDidMount",value:function(){window.addEventListener("click",this.onClickOutside.bind(this),!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.onClickOutside.bind(this),!0)}},{key:"onClickOutside",value:function(){console.log("click outside"),this.state.showCard&&this.toggleCard()}}]),t}(u.Component);t.default=L},792:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),i=function(e){return a.default.createElement("i",o({className:"fl-icon-"+e.name},e))};t.default=i},793:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=o(r),i=n(50),l=o(i),u=n(794),c=o(u),f=n(795),s=o(f),p=n(80),d=l.default.div({display:"flex",alignItems:"center",justifyContent:"center",width:"50px",height:"50px",marginBottom:".5rem",borderRadius:"50%",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",border:"3px solid white",overflow:"hidden"},function(e){var t=e.app;return{borderColor:t.selected?(0,p.blue)(500):"white",backgroundColor:t.color}}),b=l.default.div({position:"absolute",transform:"translateX(25%) translateY(-25%)",top:0,right:"-5px"}),m=l.default.img({maxWidth:"100%",maxHeight:"100%"}),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.unread&&a.default.createElement(b,null,a.default.createElement(s.default,{style:{color:"#333",position:"absolute",top:"1px",left:"1px",zIndex:-1}}),e.important?a.default.createElement(c.default,{style:{color:"#D2374E"}}):a.default.createElement(s.default,{style:{color:"#AACBBE"}}))},g=function(e){var t=e.apps,n=e.onClick,o=e.onRightClick;return a.default.createElement("div",null,t.map(function(e){return a.default.createElement("div",{key:"avatar_"+e.id,style:{position:"relative"}},y(e.status),a.default.createElement(d,{app:e,onClick:function(){return n(e)},onContextMenu:function(){return o(e)}},e.avatar&&a.default.createElement(m,{src:e.avatar,alt:"Avatar"})))}))};t.default=g},796:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),u=o(l),c=n(45),f=n(71),s=n(50),p=o(s),d=n(101),b=n(797),m=o(b),y="thram",g=p.default.div({width:"100%",height:"100%",position:"relative"}),h=function(e){function t(){var e,n,o,i;r(this,t);for(var l=arguments.length,f=Array(l),s=0;s<l;s++)f[s]=arguments[s];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(f))),o.state={showDashboard:!0},o.setRef=function(e){return function(t){o.apps[e]=t}},o.apps={},o.render=function(){var e=o.props,t=e.apps,n=e.extensions,r=e.setAvatar,a=e.setNotifications,i=e.setStatus;return u.default.createElement(g,null,t.map(function(e){var t=e.id,l=e.name,f=e.type,s=void 0===f?"default":f,p=e.url,d=e.selected;return u.default.createElement(m.default,{extensions:n.enabled.map(function(e){return(0,c.find)(n.list,{id:e})}),onStatus:function(e){var t=e.payload,n=e.meta;return i(n.id,t)},onNotification:function(e){var t=e.payload,n=e.meta;return a(n.id,t)},onIcon:function(e){var t=e.payload,n=e.meta;return r(n.id,t.url)},key:"webview_"+t,id:t,name:l,type:s,persist:s+":"+y,innerRef:o.setRef(t),src:p,active:d})}))},i=n,a(o,i)}return i(t,e),t}(l.Component);t.default=(0,f.connect)(function(e){return{apps:e.apps,extensions:e.extensions}},function(e){return{setAvatar:function(t,n){return e((0,d.updateApp)(t,{avatar:n}))},setNotifications:function(t,n){return e((0,d.updateApp)(t,{notifications:n}))},setStatus:function(t,n){return e((0,d.updateApp)(t,{status:n}))}}})(h)},797:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=n(0),c=o(u),f=n(798),s=o(f),p=n(892),d=o(p),b=n(303),m=n(164),y=n(893),g=o(y),h=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setupExtentions=function(){n.props.extensions.forEach(function(e){var t=m.extensions.getSetup(e),o=t.styles,r=t.scripts,a=t.matches,i=!1;a.forEach(function(e){i=!!(0,d.default)(e,n.webView.getURL())||i}),i&&(n.webView.insertCSS(o),n.webView.executeJavaScript('window.EXTENSIONS = window.EXTENSIONS ? [].concat(window.EXTENSIONS,"'+e.id+'"): ["'+e.id+'"]; \n        '+r,!1,function(){return console.log("Extension "+e.id+" Loaded")}))})},n.setupEnvironment=function(e){var t=n.props,o=t.innerRef,r=t.onDomReady;n.webView=e.currentTarget,n.webView.openDevTools(),n.webView.executeJavaScript('window.WORKSPACE_APP_ID = "'+n.props.id+'"; \n       window.WORKSPACE_APP_NAME = "'+(n.props.name||"custom")+'"; \n       window.WORKSPACE_APP_TYPE = "'+(n.props.type||"default")+'"; \n       '+m.tools.setupScript(),!1,function(){return console.log("Fixes Loaded")}),n.setupExtentions(),o&&o(n.webView),r&&r(e)},n.processIpcMessage=function(e){var t=n.actions[e.type];t&&t(e),console.log(e)},n.render=function(){var e=n.props,t=e.active,o=e.style,r=e.persist;return c.default.createElement(b.Motion,{style:{opacity:(0,b.spring)(t?1:0)}},function(e){var a=e.opacity;return c.default.createElement(g.default,l({onNewWindow:function(e){var t=e.url;return m.tools.openExternal(t)},onIpcMessage:function(e){var t=e.channel;return n.processIpcMessage(t)},onDomReady:n.setupEnvironment,partition:"persist:"+r,style:l({height:"100%",width:"100%",backgroundColor:"white",display:"inline-flex",position:"absolute",top:0,left:0,opacity:a,zIndex:t?10:0},o)},(0,s.default)(n.props,["style","active","innerRef","extensions","presist"])))})},n.actions={STATUS:n.props.onStatus,NOTIFICATION:n.props.onNotification,FAVICON:n.props.onIcon},n}return i(t,e),t}(u.Component);t.default=h},80:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getColor=t.getRandomColor=t.getRandomNumber=t.blueGrey=t.grey=t.brown=t.deepOrange=t.orange=t.amber=t.yellow=t.lime=t.lightGreen=t.green=t.teal=t.cyan=t.lightBlue=t.blue=t.indigo=t.deepPurple=t.purple=t.pink=t.red=void 0;var o=n(45),r=n(540),a=n(100),i=(0,a.getRandomNumber)(100),l=function(e){return function(t){return r.colors[e][t]}},u=l("red"),c=l("pink"),f=l("purple"),s=l("deepPurple"),p=l("indigo"),d=l("blue"),b=l("lightBlue"),m=l("cyan"),y=l("teal"),g=l("green"),h=l("lightGreen"),v=l("lime"),E=l("yellow"),w=l("amber"),_=l("orange"),P=l("deepOrange"),O=l("brown"),x=l("grey"),A=l("blueGrey"),C=function(){return(0,o.flow)(function(){return Object.keys(r.colors)},function(e){return(0,o.sample)(e)},function(e){return r.colors[e][i()]})()};t.red=u,t.pink=c,t.purple=f,t.deepPurple=s,t.indigo=p,t.blue=d,t.lightBlue=b,t.cyan=m,t.teal=y,t.green=g,t.lightGreen=h,t.lime=v,t.yellow=E,t.amber=w,t.orange=_,t.deepOrange=P,t.brown=O,t.grey=x,t.blueGrey=A,t.getRandomNumber=a.getRandomNumber,t.getRandomColor=C,t.getColor=l,t.default={red:u,pink:c,purple:f,deepPurple:s,indigo:p,blue:d,lightBlue:b,cyan:m,teal:y,green:g,lightGreen:h,lime:v,yellow:E,amber:w,orange:_,deepOrange:P,brown:O,grey:x,blueGrey:A,getRandomNumber:a.getRandomNumber,getRandomColor:C,getColor:l}},893:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(0),f=function(e){return e&&e.__esModule?e:{default:e}}(c),s=n(27),p=n(45),d=n(164),b=["load-commit","did-finish-load","did-fail-load","did-frame-finish-load","did-start-loading","did-stop-loading","did-get-response-details","did-get-redirect-request","dom-ready","page-title-set","page-favicon-updated","enter-html-full-screen","leave-html-full-screen","console-message","new-window","close","ipc-message","crashed","gpu-crashed","plugin-crashed","destroyed"],m=b.map(function(e){return(0,p.camelCase)("on-"+e)}),y=(0,p.zipObject)(m,b),g={autosize:f.default.PropTypes.bool,disablewebsecurity:f.default.PropTypes.bool,httpreferrer:f.default.PropTypes.string,nodeintegration:f.default.PropTypes.bool,plugins:f.default.PropTypes.bool,preload:f.default.PropTypes.string,src:f.default.PropTypes.string,useragent:f.default.PropTypes.string,partition:f.default.PropTypes.string,allowpopups:f.default.PropTypes.bool,webpreferences:f.default.PropTypes.string,blinkfeatures:f.default.PropTypes.string,disableblinkfeatures:f.default.PropTypes.string,guestinstance:f.default.PropTypes.string},h=m.reduce(function(e,t){return u({},e,i({},t,f.default.PropTypes.func))},{}),v=function(e){function t(){var e,n,a,l;o(this,t);for(var c=arguments.length,s=Array(c),b=0;b<c;b++)s[b]=arguments[b];return n=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.bindEvents=function(){return(0,p.forEach)(y,function(e,t){return a.webview.addEventListener(e,a.props[t])})},a.assignMethods=function(){return a.webview.addEventListener("dom-ready",function(){return Object.getOwnPropertyNames(a.webview).filter(function(e){return"function"==typeof e}).forEach(function(e){return a[e]=a.webview[e]})})},a.tagProps=function(){return Object.keys(a.props).filter(function(e){return!(e in h)}).reduce(function(e,t){return u({},e,i({},t,a.props[t]))},{})},a.render=function(){return f.default.createElement("webview",u({ref:function(e){return a.view=e},is:!0},a.tagProps(),{preload:"file:///"+(0,d.webviewDependencies)()}))},l=n,r(a,l)}return a(t,e),l(t,[{key:"componentDidMount",value:function(){this.webview=(0,s.findDOMNode)(this),this.bindEvents(),this.assignMethods()}}]),t}(f.default.Component);v.propTypes=u({},g,h),t.default=v},894:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=o(r),i=n(45),l=n(71),u=n(50),c=o(u),f=n(162),s=o(f),p=n(284),d=o(p),b=n(80),m=n(286),y=c.default.div({position:"absolute",top:0,padding:"1rem",zIndex:"100",width:"100%",height:"100%",background:(0,b.blueGrey)(100)}),g=function(e){var t=e.extensions,n=e.toggle;return a.default.createElement(y,null,a.default.createElement("h1",null,"Settings"),a.default.createElement(s.default,{style:{backgroundColor:"white"}},t.list.map(function(e){return a.default.createElement(f.ListItem,{key:"list_"+e.id},a.default.createElement(f.ListItemText,{primary:e.name}),a.default.createElement(f.ListItemSecondaryAction,null,a.default.createElement(d.default,{onChange:function(){return n(e.id)},checked:(0,i.includes)(t.enabled,e.id)})))})))};t.default=(0,l.connect)(function(e){return{extensions:e.extensions}},function(e){return{toggle:function(t){return e((0,m.toggleExtension)(t))}}})(g)},895:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u=n(0),c=o(u),f=n(71),s=n(50),p=o(s),d=n(163),b=o(d),m=n(896),y=o(m),g=n(155),h=o(g),v=n(154),E=o(v),w=n(49),_=o(w),P=n(101),O=n(80),x=p.default.div({position:"absolute",top:0,padding:"1rem",zIndex:"100",width:"100%",height:"100%",background:(0,O.blueGrey)(100)}),A=function(e){function t(){var e,n,o,i;r(this,t);for(var u=arguments.length,f=Array(u),s=0;s<u;s++)f[s]=arguments[s];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(f))),o.state={},o.render=function(){var e=o.props,t=e.app,n=e.update,r=e.remove,a=e.onClose,i=l({},t,o.state);return c.default.createElement(x,null,c.default.createElement(h.default,null,c.default.createElement(g.CardContent,null,c.default.createElement("div",{style:{display:"flex"}},c.default.createElement(_.default,{type:"headline",component:"h1",style:{flex:1}},"Edit"),c.default.createElement(E.default,{fab:!0,color:"accent",onClick:function(){r(t.id),a(t)}},c.default.createElement(y.default,null))),c.default.createElement(b.default,{label:"Color",fullWidth:!0,value:i.color,onChange:function(e){return o.setState({color:e.target.value})},marginForm:!0}),c.default.createElement(b.default,{label:"Url",fullWidth:!0,value:i.url,onChange:function(e){return o.setState({url:e.target.value})},marginForm:!0}),c.default.createElement(b.default,{label:"Avatar",fullWidth:!0,value:i.avatar||"",onChange:function(e){return o.setState({avatar:[e.target.value]})},marginForm:!0})),c.default.createElement(g.CardActions,null,c.default.createElement(E.default,{raised:!0,onClick:a},"Cancel"),c.default.createElement(E.default,{raised:!0,color:"primary",onClick:function(){n(l({},t,o.state)),a()}},"Save"))))},i=n,a(o,i)}return i(t,e),t}(u.Component);t.default=(0,f.connect)(void 0,function(e){return{remove:function(t){return e((0,P.removeApp)(t))},update:function(t){return e((0,P.updateApp)(t.id,t))}}})(A)},897:function(e,t,n){var o=n(898);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(328)(o,r);o.locals&&(e.exports=o.locals)},898:function(e,t,n){t=e.exports=n(326)(void 0),t.push([e.i,"@font-face{font-family:flat-icons;src:url("+n(327)+");src:url("+n(327)+'#iefix) format("embedded-opentype"),url('+n(899)+') format("truetype"),url('+n(900)+') format("woff"),url('+n(901)+'#icomoon) format("svg");font-weight:400;font-style:normal}[class*=" fl-icon-"],[class^=fl-icon-]{font-family:flat-icons!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fl-icon-500px:before{content:"\\E900"}.fl-icon-airbnb:before{content:"\\E901"}.fl-icon-amazon:before{content:"\\E902"}.fl-icon-android:before{content:"\\E903"}.fl-icon-apple:before{content:"\\E904"}.fl-icon-bankin:before{content:"\\E905"}.fl-icon-behance:before{content:"\\E906"}.fl-icon-bitly:before{content:"\\E907"}.fl-icon-blackberry:before{content:"\\E908"}.fl-icon-blogger:before{content:"\\E909"}.fl-icon-buffer:before{content:"\\E90A"}.fl-icon-chrome:before{content:"\\E90B"}.fl-icon-codepen:before{content:"\\E90C"}.fl-icon-dailymotion:before{content:"\\E90D"}.fl-icon-dribbble:before{content:"\\E90E"}.fl-icon-drive:before{content:"\\E90F"}.fl-icon-dropbox:before{content:"\\E910"}.fl-icon-envato:before{content:"\\E911"}.fl-icon-evernote:before{content:"\\E912"}.fl-icon-facebook:before{content:"\\E913"}.fl-icon-fancy:before{content:"\\E914"}.fl-icon-feedly:before{content:"\\E915"}.fl-icon-firefox:before{content:"\\E916"}.fl-icon-flickr:before{content:"\\E917"}.fl-icon-foursquare:before{content:"\\E918"}.fl-icon-github:before{content:"\\E919"}.fl-icon-google:before{content:"\\E91A"}.fl-icon-googleplus:before{content:"\\E91B"}.fl-icon-hanghout:before{content:"\\E91C"}.fl-icon-instagram:before{content:"\\E91D"}.fl-icon-internetexplorer:before{content:"\\E91E"}.fl-icon-invision:before{content:"\\E91F"}.fl-icon-linkedin:before{content:"\\E920"}.fl-icon-magento:before{content:"\\E921"}.fl-icon-medium:before{content:"\\E922"}.fl-icon-messenger:before{content:"\\E923"}.fl-icon-opera:before{content:"\\E924"}.fl-icon-paypal:before{content:"\\E925"}.fl-icon-periscope:before{content:"\\E926"}.fl-icon-photoshop:before{content:"\\E927"}.fl-icon-pinterest:before{content:"\\E928"}.fl-icon-pocket:before{content:"\\E929"}.fl-icon-principle:before{content:"\\E92A"}.fl-icon-producthunt:before{content:"\\E92B"}.fl-icon-rdio:before{content:"\\E92C"}.fl-icon-reddit:before{content:"\\E92D"}.fl-icon-rss:before{content:"\\E92E"}.fl-icon-safari .path1:before{content:"\\E92F";color:#000}.fl-icon-safari .path2:before{content:"\\E930";margin-left:-1em;color:#fff}.fl-icon-scoopit:before{content:"\\E931"}.fl-icon-shopify:before{content:"\\E932"}.fl-icon-sketch:before{content:"\\E933"}.fl-icon-skype:before{content:"\\E934"}.fl-icon-slack:before{content:"\\E935"}.fl-icon-snapchat:before{content:"\\E936"}.fl-icon-soundcloud:before{content:"\\E937"}.fl-icon-spotify:before{content:"\\E938"}.fl-icon-stackoverflow:before{content:"\\E939"}.fl-icon-tinder:before{content:"\\E93A"}.fl-icon-trello:before{content:"\\E93B"}.fl-icon-tumblr:before{content:"\\E93C"}.fl-icon-twitter:before{content:"\\E93D"}.fl-icon-viadeo:before{content:"\\E93E"}.fl-icon-viber:before{content:"\\E93F"}.fl-icon-vimeo:before{content:"\\E940"}.fl-icon-vine:before{content:"\\E941"}.fl-icon-whatsapp:before{content:"\\E942"}.fl-icon-windowsphone:before{content:"\\E943"}.fl-icon-wordpress:before{content:"\\E944"}.fl-icon-yelp:before{content:"\\E945"}.fl-icon-youtube:before{content:"\\E946"}',""])},899:function(e,t,n){e.exports=n.p+"fonts/flat-icons.ttf"},900:function(e,t,n){e.exports=n.p+"fonts/flat-icons.woff"},901:function(e,t,n){e.exports=n.p+"images/flat-icons.svg"},903:function(e,t,n){var o=n(904);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(328)(o,r);o.locals&&(e.exports=o.locals)},904:function(e,t,n){t=e.exports=n(326)(void 0),t.push([e.i,"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);",""]),t.push([e.i,"::selection{background:rgba(255,255,125,.99);color:#032764}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}#app,body,html{width:100%;height:100%;padding:0;margin:0;overflow:hidden}",""])}},[329]);
//# sourceMappingURL=app.1310fc016dc771d51801.js.map