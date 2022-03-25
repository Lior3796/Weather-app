(this["webpackJsonpWeather-app"]=this["webpackJsonpWeather-app"]||[]).push([[0],{108:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(28),r=n.n(c),i=(n(108),n.p,n(26),n(8)),s=n(15),o=n(37),l=n(1),u=function(e){var t=e.favoriteCity,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=(c[0],c[1]);return Object(a.useEffect)((function(){return function(){var e=JSON.parse(localStorage.getItem("favoriteCities"));e&&0!==(e=e.filter((function(e){return e.Key===t.Key}))).length&&r("Favorite city")}()}),[t]),Object(l.jsx)("div",{className:"text-container",children:Object(l.jsx)("h1",{className:"header",children:t.LocalizedName||"Favorite cities"})})},j=n(153),b=n(164),d=n(84),h=n.n(d),f="CHANGE_THEME",p="CHANGE_UNIT",O="CHANGE_CITY",v="UPDATE_FORCASTS",x="DEFAULT_FORCASTS",m="ADD_FAVORITE",y="DELETE_FAVORITE",g=function(){var e=Object(s.c)((function(e){return e.cityReducer})),t=Object(s.b)();return Object(l.jsx)("div",{children:Object(l.jsx)(b.a,{onClick:function(){t({type:m,payload:e})},color:"primary","aria-label":"add to shopping cart",children:Object(l.jsx)(h.a,{fontSize:"large"})})})},w=n(85),N=n.n(w),k=function(){var e=Object(s.c)((function(e){return e.cityReducer})),t=Object(s.b)();return Object(l.jsx)(b.a,{onClick:function(){t({type:y,payload:e.Key})},color:"primary","aria-label":"add to shopping cart",children:Object(l.jsx)(N.a,{fontSize:"large"})})},T=function(){return Object(l.jsx)("div",{className:"button-container",children:Object(l.jsxs)(j.a,{direction:"row",spacing:1,children:[Object(l.jsx)(g,{}),Object(l.jsx)(k,{})]})})},C=n(160),A=function(){var e=Object(s.b)(),t=Object(a.useState)(!0),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(l.jsx)(C.a,{sx:{fontSize:20},onClick:function(){r(!c),e({type:f,payload:c})},children:c?"Dark":"Light"})},E=function(){var e=Object(s.c)((function(e){return e.cityReducer}));return Object(l.jsxs)("nav",{className:"navbar-container",children:[Object(l.jsx)(u,{favoriteCity:e}),Object(l.jsx)(A,{}),Object(l.jsxs)("ul",{className:"navbar-ul",children:[Object(l.jsx)("li",{className:"navbar-li",children:Object(l.jsx)(o.b,{className:"navbar-link",to:"/Weather-app",children:" Weather "})}),Object(l.jsx)("li",{className:"navbar-li",children:Object(l.jsx)(o.b,{className:"navbar-link",to:"/Weather-app/favorites",children:" Favorites "})})]}),Object(l.jsx)(T,{})]})},F=n(13),D=n(23),R=n.n(D),S=n(34),K=function(e){var t=e.Key;return fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(t,"?apikey=").concat("e25meNIzYKNA9UEN69bmaa76W1KGNqed","&language=en-us&details=true")).then((function(e){return e.json()}))},I=function(e){return fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat("e25meNIzYKNA9UEN69bmaa76W1KGNqed")).then((function(e){return e.json()}))},W=(n(55),n(24)),z=function(e){return e<550},M=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(s.b)(),o=function(){var e=Object(S.a)(R.a.mark((function e(){var t,a,c,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s=n,fetch("https://dataservice.accuweather.com//locations/v1/cities/autocomplete?apikey=".concat("e25meNIzYKNA9UEN69bmaa76W1KGNqed","&q=").concat(s,"&language=en-us HTTP/1.1")).then((function(e){return e.json()}));case 3:t=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Object(W.b)("Cant get ".concat(n," forecasts, pick another city"));case 9:return e.prev=9,e.next=12,u(t);case 12:return a=e.sent,e.next=15,I(a.Key);case 15:c=e.sent,i=c.DailyForecasts,r({type:v,payload:i}),e.next=23;break;case 20:e.prev=20,e.t1=e.catch(9),Object(W.b)("Can't get ".concat(n," forecasts"));case 23:case"end":return e.stop()}var s}),e,null,[[0,6],[9,20]])})));return function(){return e.apply(this,arguments)}}(),u=function(e){return r({type:O,payload:e[0]}),e[0]},j=function(e){var t=function(e){return e.target.value.replace(RegExp(/[^A-Z a-z]/gi),"")}(e);c(t)};return Object(l.jsxs)("div",{className:"search-container",children:[Object(l.jsxs)("div",{className:"search-bar",children:[Object(l.jsx)("input",{className:"search-input",value:n,onChange:function(e){return j(e)},type:"text"}),Object(l.jsx)("input",{className:"search-button",type:"submit",onClick:function(){return o()},value:"search"})]}),Object(l.jsx)(W.a,{})]})},L=n(165),V=n(167),B=n(168),H=n(154),_=n(86),G=n.n(_),U=n(87),P=n.n(U),q=function(e){var t=e.forecast,n=Object(s.c)((function(e){return e.toggleReducer.toggleTemp})),a=t.Temperature,c=a.Maximum,r=a.Minimum,i=t.Day.IconPhrase,o=t.currentDay,u=(new Date).toLocaleString().replace(",","");o=new Date(o).toLocaleString("en-us",{weekday:"long"}),u=u.slice(u.length-2);var j={transition:{duration:7,delay:1.5},visible:{opacity:1,y:"0px"},hidden:{opacity:0,y:"40vh"}},b=function(e){return Math.floor(5*(e-32)/9)};return Object(l.jsx)(H.a.div,{className:"ForecastsCard-container",children:Object(l.jsxs)(L.a,{component:H.a.div,whileHover:{scale:1.2,transition:{duration:.3}},whileTap:{scale:.9},className:"ForecastsCard",children:[Object(l.jsxs)(V.a,{className:"card-content",children:[Object(l.jsxs)(B.a,{gutterBottom:!0,variant:"h3",component:"div",children:[o,"AM"===u?Object(l.jsx)(G.a,{variants:j,initial:"hidden",animate:"visible",component:H.a.svg,style:{color:"yellow",fontSize:"3rem"},className:"weather-icon-".concat(u)}):Object(l.jsx)(P.a,{variants:j,initial:"hidden",animate:"visible",component:H.a.svg,style:{color:"black",fontSize:"3rem"},className:"weather-icon-".concat(u)})]}),Object(l.jsx)(B.a,{gutterBottom:!0,variant:"h4",component:"div",children:i}),Object(l.jsxs)(B.a,{variant:"h5",color:"text.secondary",children:["Min:","Imperial"===n?b(r.Value):r.Value]}),Object(l.jsxs)(B.a,{variant:"h5",color:"text.secondary",children:["Max:","Imperial"===n?b(c.Value):c.Value]})]}),Object(l.jsx)("div",{class:"custom-shape-divider-bottom-1637765530",children:Object(l.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:Object(l.jsx)("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",style:{fill:"AM"===u?"#9af2ff":"#2f2b3c"}})})})]})})},Y=function(){var e=Object(s.c)((function(e){return e.cityReducer})).Key,t=Object(s.c)((function(e){return e})).forecastsReducer,n=Object(s.b)(),c=function(){var t=Object(S.a)(R.a.mark((function t(){var a;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I(e);case 3:a=t.sent,n({type:x,payload:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),Object(W.b)("cant update forecasts");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),r={transition:{duration:5,delay:1.5},visible:{x:"0vw"},hidden:{x:"-100vw"}};return Object(a.useEffect)((function(){c()}),[e]),Object(l.jsxs)("div",{className:"weather-container",children:[Object(l.jsx)(M,{}),Object(l.jsxs)("div",{className:"forecasts-map-container-weather",children:[function(e){return console.log(e),null===e||void 0===e?void 0:e.map((function(e,t){return Object(l.jsx)(q,{component:H.a.div,initial:"hidden",animate:"visible",variants:r,forecast:e},t)}))}(t),Object(l.jsx)(W.a,{})]})]})},J=n(19),Z=n(169),Q=function(e){var t,n,c=e.city,r=Object(F.f)(),o=Object(s.b)(),u=Object(a.useState)(),j=Object(i.a)(u,2),b=j[0],d=j[1],h=Object(s.c)((function(e){return e.toggleReducer.toggleTemp})),f=function(){var e=Object(S.a)(R.a.mark((function e(){var t,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I(c.Key);case 3:t=e.sent,n=t.DailyForecasts,o({type:v,payload:n}),o({type:O,payload:c}),r({pathname:"/weather-app"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),Object(W.b)("city not found");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(S.a)(R.a.mark((function e(){var t,n,a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K(c);case 3:t=e.sent,n=t[0].ApparentTemperature,a=n.Imperial,r=n.Metric,d({Imperial:a,Metric:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Object(W.b)("can't get weather for this city");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){p()}),[]),Object(l.jsxs)(L.a,{className:"favoriteCard",children:[Object(l.jsxs)(V.a,{children:[Object(l.jsx)(B.a,{color:"text.primary",children:Object(l.jsx)(B.a,{style:{fontFamily:"Assistant",textAlign:"center"},gutterBottom:!0,variant:"h3",component:"div",children:c.LocalizedName})}),Object(l.jsxs)(B.a,{style:{fontFamily:"Assistant",textAlign:"center"},gutterBottom:!0,variant:"div",component:"h3",children:[Object(l.jsx)(B.a,{style:{fontFamily:"Assistant",textAlign:"center"},gutterBottom:!0,variant:"h3",component:"div",children:h}),Object(l.jsx)(B.a,{style:{fontFamily:"Assistant",textAlign:"center"},gutterBottom:!0,variant:"h3",component:"small",children:"Imperial"===h?null===b||void 0===b||null===(t=b.Imperial)||void 0===t?void 0:t.Value:null===b||void 0===b||null===(n=b.Metric)||void 0===n?void 0:n.Value})]})]}),Object(l.jsx)(Z.a,{children:Object(l.jsx)(C.a,{onClick:function(){return f()},size:"large",children:"Click here "})}),Object(l.jsx)(W.a,{})]})},X=function(){var e=Object(s.c)((function(e){return e.favoriteReducer})),t=Object(a.useState)([{}]),n=Object(i.a)(t,2),c=n[0],r=n[1];Object(a.useEffect)((function(){o()}),[]);var o=function(){try{if(!e.length)return;Object(a.useMemo)((function(){u(e)}),[e.length])}catch(t){console.log("error")}},u=function(e){return e.forEach(function(){var e=Object(S.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K(t);case 3:n=e.sent,r([].concat(Object(J.a)(c),[n])),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Object(W.b)("Cant get favorite cities");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())};return Object(l.jsxs)("div",{className:"favorite-container",children:[Object(l.jsx)("h1",{className:"header",children:"Here is your favorite weather:"}),Object(l.jsx)("div",{className:"forecasts-map-container-favorite",children:null===e||void 0===e?void 0:e.map((function(e,t){return Object(l.jsx)(Q,{currentWeather:c,city:e},t)}))}),Object(l.jsx)(W.a,{})]})},$=n(7),ee=n(161),te=n(155),ne=n(162),ae=n(163),ce=n(88),re=n.n(ce),ie=(n(170),n(159),n(157)),se=function(e){var t=e.pathname,n=e.text,a=Object(F.f)();return Object(l.jsx)(ie.a,{onClick:function(){return a({pathname:t})},children:Object(l.jsx)("h1",{children:n})})};function oe(){var e,t=Object(s.c)((function(e){return e.cityReducer})),n=Object(a.useState)({left:!1}),c=Object(i.a)(n,2),r=c[0],o=c[1],j=function(e,t){return function(n){o(Object($.a)({},e,t))}},b=[{pathname:"/Weather-app/favorites",text:"favorite"},{pathname:"/Weather-app",text:"weather"}];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(C.a,{style:{zIndex:10},onClick:j("left",!0),children:Object(l.jsx)(re.a,{})}),Object(l.jsx)(te.a,{anchor:"left",open:r.left,onClose:j("left",!1),onOpen:j("left",!0),children:(e="left",Object(l.jsxs)(ee.a,{sx:{width:"top"===e||"bottom"===e?"auto":200},role:"presentation",onClick:j(e,!1),onKeyDown:j(e,!1),children:[Object(l.jsx)(ne.a,{children:b.map((function(e,t){return Object(l.jsx)(se,{pathname:e.pathname,text:e.text},t)}))}),Object(l.jsx)(u,{favoriteCity:t}),Object(l.jsx)(ae.a,{})]}))})]})}var le=function(){return Object(l.jsx)("div",{className:"Footer-container",children:Object(l.jsx)("div",{className:"social-links",children:Object(l.jsx)("div",{className:"social-info",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/lior-solomon-246254206/",children:Object(l.jsx)("i",{class:"fab fa-linkedin"})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/Lior3796",children:Object(l.jsx)("i",{class:"fab fa-github"})})})]})})})})},ue=function(){var e=Object(a.useState)(window.innerWidth),t=Object(i.a)(e,2),n=t[0],c=t[1];Object(s.c)((function(e){return e.cityReducer}));return Object(a.useEffect)((function(){window.addEventListener("resize",(function(){return c(window.innerWidth)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:z(n)&&"layout-container",children:z(n)?Object(l.jsx)(oe,{}):Object(l.jsx)(E,{})}),Object(l.jsxs)(F.c,{children:[Object(l.jsx)(F.a,{path:"/",exact:!0,element:Object(l.jsx)(Y,{})}),Object(l.jsx)(F.a,{path:"/Weather-app",exact:!0,element:Object(l.jsx)(Y,{})}),Object(l.jsx)(F.a,{path:"/Weather-app/favorites",exact:!0,element:Object(l.jsx)(X,{})})]}),Object(l.jsx)(le,{})]})},je=function(){var e=Object(s.c)((function(e){return e.toggleReducer.toggleTheme}));return Object(l.jsx)("div",{className:e,children:Object(l.jsx)(ue,{})})};var be=function(){return Object(l.jsx)(je,{})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,171)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},he=n(47),fe=n(89),pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return e.length&&e.find((function(e){return e.Key===t.payload.Key}))?e:[].concat(Object(J.a)(e),[t.payload]);case y:var n=e.filter((function(e){return e.Key!==t.payload}));return n;default:return e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{LocalizedName:"Tel Aviv",Key:"215854",WeatherText:"Mostly cloudy"},t=arguments.length>1?arguments[1]:void 0;if(t.type===O){var n=t.payload,a=n.LocalizedName,c=n.Key,r=n.WeatherText;return{LocalizedName:a,Key:c,WeatherText:r}}return e},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:var n=t.payload.map((function(e){return{Temperature:e.Temperature,currentDay:e.Date,Day:e.Day}}));return n;case x:var a=t.payload.DailyForecasts.map((function(e){return{Temperature:e.Temperature,currentDay:e.Date,Day:e.Day}}));return a;default:return e}},xe=n(36),me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{toggleTheme:"light",toggleTemp:"Metric"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.payload?Object(xe.a)(Object(xe.a)({},e),{},{toggleTheme:"dark"}):Object(xe.a)(Object(xe.a)({},e),{},{toggleTheme:"light"});case p:return t.payload?Object(xe.a)(Object(xe.a)({},e),{},{toggleTemp:"Imperial"}):Object(xe.a)(Object(xe.a)({},e),{},{toggleTemp:"Metric"});default:return e}},ye=Object(he.b)({toggleReducer:me,favoriteReducer:pe,cityReducer:Oe,forecastsReducer:ve}),ge=Object(he.d)(ye,Object(he.c)(Object(he.a)(fe.a)));r.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(s.a,{store:ge,children:Object(l.jsx)(be,{})})}),document.getElementById("root")),de()},26:function(e,t,n){}},[[118,1,2]]]);
//# sourceMappingURL=main.4f32eaa8.chunk.js.map