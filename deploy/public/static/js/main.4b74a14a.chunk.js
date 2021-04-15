/*! For license information please see main.4b74a14a.chunk.js.LICENSE.txt */
(this["webpackJsonpalto-tech-test"]=this["webpackJsonpalto-tech-test"]||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"createActionSet",(function(){return n}));var n=function(e){return{PENDING:"".concat(e,"_PENDING"),SUCCESS:"".concat(e,"_SUCCESS"),FAILED:"".concat(e,"_FAILED")}}},526:function(e,t,a){},527:function(e,t,a){},528:function(e,t,a){},530:function(e,t,a){"use strict";a.r(t);var n=a(12),c=a(2),r=a.n(c),s=a(37),i=a.n(s),o=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,532)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},l=a(29),d=a(126),j=a(49),b=a(56),u=a(301),h=(a(495),a(302)),O=a(260),p=a(308),m=a(22),f=a.n(m),x=a(35),g=a(36),v=a(121).createActionSet("ENERGY"),y={isFetching:!0,error:null,energy:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case v.PENDING:return Object(n.a)(Object(n.a)({},e),{},{isFetching:!0});case v.FAILED:return Object(n.a)(Object(n.a)({},e),{},{isFetching:!1,error:c.error});case v.SUCCESS:return Object(n.a)(Object(n.a)({},e),{},{isFetching:!1,error:null},c);default:return e}},N=a(121).createActionSet("SCHEDULE"),w={isFetching:!0,error:null},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case N.PENDING:return Object(n.a)(Object(n.a)({},e),{},{isFetching:!0});case N.FAILED:return Object(n.a)(Object(n.a)({},e),{},{isFetching:!1,error:c.error});case N.SUCCESS:return Object(n.a)(Object(n.a)({},e),{},{isFetching:!1,error:null});default:return e}},C=a(121).createActionSet("TRIGGER"),E={isFetching:!0,error:null,modal:!1},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case C.PENDING:return Object(n.a)(Object(n.a)({},e),{},{isFetching:!0});case C.FAILED:return Object(n.a)(Object(n.a)({},e),{},{isFetching:!1,error:c.error});case C.SUCCESS:return Object(n.a)(Object(n.a)({},e),{},{isFetching:!1,error:null,modal:c.modal});default:return e}},k=a(44),Y=a(21),I=a.n(Y),L=(a(122),a(121).createActionSet("DASHBOARD")),M=function(e){return function(){var t=Object(x.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:L.PENDING}),g.a.ref("/").update(Object(n.a)({},e)).then((function(){console.log("update success"),a({type:L.SUCCESS,payload:Object(n.a)({},e)})})).catch((function(e){console.log("err",e.message),a({type:L.FAILED,payload:{error:e.message}})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R={isFetching:!0,error:null,dashboard:[],panelLeft:[],panelRight:[]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case L.PENDING:return Object(n.a)(Object(n.a)({},e),{},{isFetching:!0});case L.FAILED:return Object(n.a)(Object(n.a)({},e),{},{isFetching:!1,error:c.error});case L.SUCCESS:return Object(n.a)(Object(n.a)({},e),{},{isFetching:!1,error:null},c);default:return e}},T=Object(b.c)({energyReducer:D,scheduleReducer:S,triggerReducer:F,dashboardReducer:A,firebase:j.firebaseReducer,firestore:d.firestoreReducer}),P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,U=Object(h.a)(),G=Object(O.a)(U),H=a(96);a(498),a(499),a(500);H.a.initializeApp({apiKey:"AIzaSyBPgpCza1PIxkX-siRknEc5onyFUqVbCq4",authDomain:"alto-tech-test.firebaseapp.com",databaseURL:"https://alto-tech-test-default-rtdb.firebaseio.com",projectId:"alto-tech-test",storageBucket:"alto-tech-test.appspot.com",messagingSenderId:"912864205980",appId:"1:912864205980:web:55fd6c82b229725e2ce159",measurementId:"G-6F4WE6K9F4"}),H.a.firestore(),H.a.database();var _=H.a,B=a(14),W=a(54),z=a(51),X=a(52),q=a(55),J=a(53),K=a(130),V=a(65),Q=a(264),Z=a(261),$=a(265),ee=a(266),te=a(125),ae=a(295),ne=a(294),ce=a(296),re=a(124),se=a(267),ie=a(268),oe=a(48),le=a(298),de=a(270),je=a(269),be=a(93),ue=a(25),he=a(304),Oe=a.n(he),pe=a(262),me=a(263),fe=a(284),xe=a(286),ge=a(287),ve=a(285),ye=a(292),De=a(293),Ne=a(76),we=a(5);function Se(e){var t=e.date,a=e.time,n=e.countDown;return Object(we.jsx)(me.a,{xs:"12",children:Object(we.jsxs)(fe.a,{className:"card-stats",children:[Object(we.jsxs)(xe.a,{children:[Object(we.jsx)(ge.a,{tag:"h5",children:"\u0e40\u0e27\u0e25\u0e32\u0e17\u0e35\u0e48\u0e15\u0e31\u0e49\u0e07\u0e44\u0e27\u0e49\u0e04\u0e37\u0e2d "}),Object(we.jsx)("p",{className:"card-category",children:"".concat(I()(new Date(t)).format("\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48 DD \u0e40\u0e14\u0e37\u0e2d\u0e19 MMMM \u0e1b\u0e35 YYYY")," \u0e40\u0e27\u0e25\u0e32 ").concat(a," \u0e19\u0e32\u0e2c\u0e34\u0e01\u0e32")}),Object(we.jsx)("p",{className:"card-category",children:"\u0e40\u0e27\u0e25\u0e32\u0e19\u0e31\u0e1a\u0e16\u0e2d\u0e22\u0e2b\u0e25\u0e31\u0e07 ".concat(n," \u0e27\u0e34\u0e19\u0e32\u0e17\u0e35")})]}),Object(we.jsx)(ve.a,{})]})})}var Ce=a(288);function Ee(e){var t=e.label,a=e.id,n=e.date,c=e.handleChangeDate;return Object(we.jsxs)(me.a,{children:[Object(we.jsx)("label",{htmlFor:a,children:t}),Object(we.jsx)(ne.a,{type:"date",name:a,id:a,placeholder:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48",min:Date.now(),value:I()(new Date(n)).format("YYYY-MM-DD"),max:I()(new Date).format("YYYY-MM-DD"),onChange:c})]})}function Fe(e){var t=e.title,a=e.data,n=e.subfix,c=a.reduce((function(e,t){return e+t}),0)/a.length;return Object(we.jsx)(fe.a,{className:"card-stats",children:Object(we.jsx)(ve.a,{children:Object(we.jsxs)("p",{className:"card-category",children:[t,Object(we.jsx)("span",{className:"right",children:"".concat(c.toFixed(2)," ").concat(n)})]})})})}function ke(e){var t=e.startDate,a=e.endDate,n=e.handleChangeStartDate,c=e.handleChangeEndDate;return Object(we.jsx)(me.a,{sm:"12",children:Object(we.jsx)(fe.a,{className:"card-stats2",children:Object(we.jsxs)(ve.a,{children:[Object(we.jsx)("p",{className:"card-category",children:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e14\u0e39\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25"}),Object(we.jsxs)(pe.a,{children:[Object(we.jsx)(Ee,{label:"\u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48",id:"startDate",date:t,handleChangeDate:n}),Object(we.jsx)(Ee,{label:"\u0e16\u0e36\u0e07",id:"endDate",date:a,handleChangeDate:c})]})]})})})}var Ye=a(78),Ie=a.n(Ye);function Le(e){var t=e.title,a=e.name,n=e.data,c=e.xaxis,r=[{name:a,data:Object(k.a)(n)}],s={chart:{id:"basic-bar"},xaxis:{categories:Object(k.a)(c)},title:{text:t,align:"left"}};return Object(we.jsx)(Ie.a,{options:s,series:r,type:"bar"})}function Me(e){var t=e.title,a=e.name,n=e.data,c=e.xaxis,r=[{name:a,data:Object(k.a)(n)}],s={chart:{height:350,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:t,align:"left"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:Object(k.a)(c)}};return Object(we.jsx)(Ie.a,{options:s,series:r,type:"line"})}function Re(e){var t=e.title,a=e.detail,n=e.chartType,c=e.chartTitle,r=e.chartName,s=e.data,i=e.xaxis;return Object(we.jsxs)(fe.a,{className:"card-stats",children:[Object(we.jsxs)(xe.a,{children:[Object(we.jsx)(ge.a,{tag:"h5",children:t}),Object(we.jsx)("p",{className:"card-category",children:a})]}),Object(we.jsxs)(ve.a,{children:["linechart"===n&&Object(we.jsx)(Me,{title:c,name:r,data:s,xaxis:i}),"barchart"===n&&Object(we.jsx)(Le,{title:c,name:r,data:s,xaxis:i})]})]})}var Ae=a(184);function Te(e){var t=e.panel,a=e.panelLocation,n=e.handleDrop,c=e.data,r=e.xaxis;return Object(we.jsx)(me.a,{xs:"12",md:"6",children:Object(we.jsx)("div",{className:"dragHover",children:Object(we.jsx)(Ae.Container,{groupName:"1",getChildPayload:function(e){return t[e]},onDrop:function(e){return n(e,a)},children:t.map((function(e,t){return Object(we.jsx)(Ae.Draggable,{children:"mean"===e.type?Object(we.jsx)(Fe,{title:e.title,data:c,subfix:e.subfix}):Object(we.jsx)(Re,{title:e.title,detail:e.detail,chartType:e.chartType,chartTitle:e.chartTitle,chartName:e.chartName,data:c,xaxis:r})},t)}))})})})}var Pe=function(e,t){var a=t.removedIndex,n=t.addedIndex,c=t.payload;if(null===a&&null===n)return e;var r=Object(k.a)(e),s=c;return null!==a&&(s=r.splice(a,1)[0]),null!==n&&r.splice(n,0,s),r};var Ue=a(307),Ge=a.n(Ue);function He(){var e=Object(c.useState)(0),t=Object(ue.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(0),s=Object(ue.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)("^"),d=Object(ue.a)(l,2),j=d[0],b=d[1],u=Object(c.useState)(">"),h=Object(ue.a)(u,2),O=h[0],p=h[1],m=function(e){o(e.width/3),n(0)};return Object(we.jsx)(Ge.a,{setup:function(e,t){e.createCanvas(800,400).parent(t),m(e)},draw:function(e){e.background(0),e.fill(255,1.3*a,0),e.ellipse(i,a,50),a>e.height&&b(""),a<e.height/2?(a<0&&b("^"),n("^"===j?a+2:a-2)):i<e.width?(i<0&&p(">"),o(">"===O?i+2:i-2)):m(e)}})}function _e(e){var t=e.item;return Object(we.jsxs)(we.Fragment,{children:[Object(we.jsx)(me.a,{sm:"6",children:Object(we.jsx)("h6",{children:t.name})}),Object(we.jsx)(me.a,{sm:"3",children:Object(we.jsx)("h6",{children:t.value})}),Object(we.jsx)(me.a,{sm:"3",children:Object(we.jsx)("h6",{className:"Total load"===t.name?t.value>80?"red":"green":"",children:t.subfix})})]})}var Be=a(299),We=a(289),ze=a(290),Xe=a(291);function qe(e){var t=e.modal,a=e.toggle;return Object(we.jsxs)(Be.a,{isOpen:t,toggle:a,children:[Object(we.jsx)(We.a,{toggle:a,children:"trigger modal \u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e2d\u0e31\u0e1e\u0e40\u0e14\u0e17 Firebase node"}),Object(we.jsx)(ze.a,{children:"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07 trigger modal \u0e08\u0e32\u0e01\u0e01\u0e32\u0e23\u0e2d\u0e31\u0e1e\u0e40\u0e14\u0e17 Firebase node \u0e40\u0e1b\u0e47\u0e19 true"}),Object(we.jsx)(Xe.a,{children:Object(we.jsx)(Ne.a,{color:"secondary",onClick:a,children:"\u0e1b\u0e34\u0e14"})})]})}var Je,Ke,Ve=[{path:"/dashboard",name:"Dashboard",icon:"nc-icon nc-bank",component:function(){var e=Object(l.d)(),t=Object(c.useState)(new Date(Date.now())),a=Object(ue.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(new Date(Date.now())),i=Object(ue.a)(s,2),o=i[0],d=i[1],j=Object(l.e)((function(e){return e.dashboardReducer})),b=j.dashboard,u=j.panelLeft,h=j.panelRight,O=j.isFetching;Object(c.useEffect)((function(){var t;e((t={startDate:n,endDate:o},function(){var e=Object(x.a)(f.a.mark((function e(a){var n,c,r,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:L.PENDING}),n=t.startDate,c=t.endDate,r=new Date(new Date(n).setHours(0,0,0)),s=new Date(new Date(c).setHours(23,59,59)),g.a.database().ref("/dashboard").orderByChild("date").startAt(I()(r).format("YYYY-DD-MM HH:MM:SS")).endAt(I()(s).format("YYYY-DD-MM HH:MM:SS")).on("value",(function(e){var t=e.val(),n=t?t.filter((function(e){return e.name})):[];a({type:L.SUCCESS,payload:{dashboard:Object(k.a)(n)}})}),(function(e){a({type:L.FAILED,payload:{error:e.message}})}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e(function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:L.PENDING}),g.a.database().ref("/").on("value",(function(e){var a=e.val();t({type:L.SUCCESS,payload:{panelLeft:a.panelLeft?a.panelLeft:[],panelRight:a.panelRight?a.panelRight:[]}})}),(function(e){t({type:L.FAILED,payload:{error:e.message}})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[n,o]);var p=b.map((function(e){return e.price})),m=b.map((function(e){return e.name})),v=function(t,a){if("left"===a){var n=Pe(u,t);e(M({panelLeft:n}))}else{var c=Pe(h,t);e(M({panelRight:c}))}};return Object(we.jsx)(we.Fragment,{children:Object(we.jsx)("div",{className:"content",children:Object(we.jsxs)(pe.a,{children:[Object(we.jsx)(ke,{startDate:n,endDate:o,handleChangeStartDate:function(e){var t=new Date(e.target.value);t.getTime()>o.getTime()&&d(t),r(t)},handleChangeEndDate:function(e){var t=new Date(e.target.value);t.getTime()<n.getTime()&&r(t),d(t)}}),O&&Object(we.jsx)(me.a,{xs:"12",children:Object(we.jsx)(Ce.a,{animated:!0,value:"100"})}),!O&&Object(we.jsx)(Te,{panel:u,panelLocation:"left",handleDrop:v,data:p,xaxis:m}),!O&&Object(we.jsx)(Te,{panel:h,panelLocation:"right",handleDrop:v,data:p,xaxis:m})]})})})},layout:"/admin"},{path:"/energy",name:"Dashboard Energy",icon:"nc-icon nc-bulb-63",component:function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.energyReducer})),a=t.energy,n=t.isFetching;return Object(c.useEffect)((function(){e(function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:v.PENDING}),g.a.ref("/").on("value",(function(e){var a=e.val();t({type:v.SUCCESS,payload:{energy:a.energy?a.energy:[]}})}),(function(e){t({type:v.FAILED,payload:{error:e.message}})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(we.jsx)(we.Fragment,{children:Object(we.jsxs)("div",{className:"content",children:[Object(we.jsx)(He,{}),Object(we.jsxs)(pe.a,{children:[Object(we.jsx)(me.a,{sm:"12",children:Object(we.jsx)("h5",{children:"SUMMARY"})}),n&&Object(we.jsx)(me.a,{xs:"12",children:Object(we.jsx)(Ce.a,{animated:!0,value:"100"})}),a.map((function(e,t){return Object(we.jsx)(_e,{item:e},t)})),null]})]})})},layout:"/admin"},{path:"/schedule",name:"Schedule",icon:"nc-icon nc-time-alarm",component:function(){var e,t=Object(c.useRef)(null),a=Object(c.useState)(new Date(Date.now())),n=Object(ue.a)(a,2),r=n[0],s=n[1],i=Object(c.useState)(I()(new Date(Date.now())).format("HH:mm")),o=Object(ue.a)(i,2),l=o[0],d=o[1],j=Object(c.useState)(-1),b=Object(ue.a)(j,2),u=b[0],h=b[1],O=Object(c.useState)(!1),p=Object(ue.a)(O,2),m=p[0],f=p[1];Object(c.useEffect)((function(){var e=setInterval((function(){console.log("countDown",u),u>0?x():(m&&0===u&&y(),clearInterval(e),f(!1))}),1e3);return function(){clearInterval(e)}}),[m,u]);var x=function(){var e=r.getDate(),t=r.getMonth(),a=r.getFullYear(),n=l.split(":"),c=Number(n[0]),s=Number(n[1]),i=new Date(a,t,e,c,s).getTime();g(i),f(!0)},g=function(e){var t=I.a.duration(I()(I()(e).diff(I()(Date.now())))).asSeconds().toFixed();h(Number(t))},v=function(){if(I()(new Date).format("DD-MM-YYYY")===I()(new Date(r)).format("DD-MM-YYYY")){var e=I()(new Date).format("HH:mm"),t=l.split(":"),a=e.split(":");return Number(a[0])>Number(t[0])||Number(a[0])===Number(t[0])&&Number(a[1])>=Number(t[1])}return!1},y=function(){var e={place:"tr",message:Object(we.jsx)("div",{children:Object(we.jsxs)("div",{children:["Welcome to ",Object(we.jsx)("b",{children:"Paper Dashboard React"})," - a beautiful freebie for every web developer."]})}),type:"primary",icon:"nc-icon nc-bell-55",autoDismiss:7};t&&t.current&&t.current.notificationAlert(e)};return Object(we.jsx)(we.Fragment,{children:Object(we.jsxs)("div",{className:"content",children:[Object(we.jsx)(Oe.a,{ref:t}),Object(we.jsxs)(pe.a,{children:[Object(we.jsx)(me.a,{xs:"12",children:Object(we.jsxs)(fe.a,{className:"card-user",children:[Object(we.jsx)(xe.a,{children:Object(we.jsx)(ge.a,{tag:"h5",children:"\u0e15\u0e31\u0e49\u0e07\u0e40\u0e27\u0e25\u0e32\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19"})}),Object(we.jsx)(ve.a,{children:Object(we.jsx)(ye.a,{onSubmit:function(e){e.preventDefault(),x()},children:Object(we.jsxs)(pe.a,{children:[Object(we.jsx)(me.a,{sm:"6",children:Object(we.jsxs)(De.a,{children:[Object(we.jsx)("label",{htmlFor:"exampleDate",children:"\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"}),Object(we.jsx)(ne.a,(e={type:"date",name:"date",id:"exampleDate",placeholder:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48",min:Date.now(),value:I()(new Date(r)).format("YYYY-MM-DD")},Object(be.a)(e,"min",I()(new Date).format("YYYY-MM-DD")),Object(be.a)(e,"onChange",(function(e){s(new Date(e.target.value))})),e))]})}),Object(we.jsx)(me.a,{sm:"6",children:Object(we.jsxs)(De.a,{children:[Object(we.jsx)("label",{htmlFor:"exampleTime",children:"\u0e40\u0e27\u0e25\u0e32"}),Object(we.jsx)(ne.a,{type:"time",name:"time",id:"exampleTime",placeholder:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e40\u0e27\u0e25\u0e32",value:l,onChange:function(e){console.log("value : ",e.target.value),d(e.target.value)}})]})}),Object(we.jsxs)(me.a,{sm:"12",children:[Object(we.jsxs)("p",{className:"card-category",children:["\u0e04\u0e38\u0e13\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e27\u0e31\u0e19\u0e17\u0e35\u0e48"," ",I()(r).format("DD-MM-YYYY")," ","\u0e40\u0e27\u0e25\u0e32 ",l," \u0e19\u0e32\u0e2c\u0e34\u0e01\u0e32"]}),v()?Object(we.jsx)("p",{className:"text-danger",children:"\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e15\u0e31\u0e49\u0e07\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e40\u0e27\u0e25\u0e32\u0e17\u0e35\u0e48\u0e1c\u0e48\u0e32\u0e19\u0e21\u0e32\u0e41\u0e25\u0e49\u0e27"}):null]}),Object(we.jsx)(me.a,{sm:"12",children:Object(we.jsx)(Ne.a,{className:"btn-round right",color:"primary",type:"submit",disabled:v(),children:"\u0e15\u0e31\u0e49\u0e07\u0e40\u0e27\u0e25\u0e32"})})]})})})]})}),u>0?Object(we.jsx)(Se,{date:r,time:l,countDown:u}):null]})]})})},layout:"/admin"},{path:"/custommodal",name:"Modal redux-custom",icon:"nc-icon nc-alert-circle-i",component:function(){var e=Object(l.d)(),t=Object(l.e)((function(e){return e.triggerReducer.modal})),a=function(){var a;e((a={modal:!t},function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:C.PENDING}),g.a.ref("/").update(Object(n.a)({},a)).then((function(){console.log("update success"),t({type:C.SUCCESS,payload:a})})).catch((function(e){console.log("err",e.message),t({type:C.FAILED,payload:{error:e.message}})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))};return Object(c.useEffect)((function(){e(function(){var e=Object(x.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:C.PENDING}),g.a.ref("/").on("value",(function(e){var a=e.val();t({type:C.SUCCESS,payload:{modal:a.modal}})}),(function(e){t({type:C.FAILED,payload:{error:e.message}})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(we.jsx)(we.Fragment,{children:Object(we.jsx)("div",{className:"content",children:Object(we.jsx)(pe.a,{children:Object(we.jsxs)(me.a,{xs:"12",children:[Object(we.jsxs)("p",{className:"card-category",children:["modal \u0e21\u0e35\u0e04\u0e48\u0e32 = ","".concat(t)]}),Object(we.jsx)(Ne.a,{color:"danger",onClick:a,children:"\u0e40\u0e1b\u0e34\u0e14"}),Object(we.jsx)(qe,{modal:t,toggle:a})]})})})})},layout:"/admin"},{path:"/modal",name:"Modal react-redux-firebase",icon:"nc-icon nc-alert-circle-i",component:function(){var e=Object(j.useFirebase)(),t=Object(c.useState)(!1),a=Object(ue.a)(t,2),n=a[0],r=a[1],s=function(){e.ref("/").update({modal:!n})};Object(j.useFirebaseConnect)(["modal"]);var i=Object(l.e)((function(e){return e.firebase.data.modal}));return Object(c.useEffect)((function(){r(i)}),[i]),Object(we.jsx)(we.Fragment,{children:Object(we.jsx)("div",{className:"content",children:Object(we.jsx)(pe.a,{children:Object(we.jsxs)(me.a,{xs:"12",children:[Object(we.jsxs)("p",{className:"card-category",children:["modal \u0e21\u0e35\u0e04\u0e48\u0e32 = ","".concat(n)]}),Object(we.jsx)(Ne.a,{color:"danger",onClick:s,children:"\u0e40\u0e1b\u0e34\u0e14"}),Object(we.jsx)(qe,{modal:n,toggle:s})]})})})})},layout:"/admin"}],Qe=function(e){Object(q.a)(a,e);var t=Object(J.a)(a);function a(e){var n;return Object(z.a)(this,a),(n=t.call(this,e)).state={isOpen:!1,dropdownOpen:!1,color:"transparent"},n.toggle=n.toggle.bind(Object(V.a)(n)),n.dropdownToggle=n.dropdownToggle.bind(Object(V.a)(n)),n.sidebarToggle=r.a.createRef(),n}return Object(X.a)(a,[{key:"toggle",value:function(){this.state.isOpen?this.setState({color:"transparent"}):this.setState({color:"dark"}),this.setState({isOpen:!this.state.isOpen})}},{key:"dropdownToggle",value:function(e){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"getBrand",value:function(){var e="Default Brand";return Ve.map((function(t,a){return-1!==window.location.href.indexOf(t.layout+t.path)&&(e=t.name),null})),e}},{key:"openSidebar",value:function(){document.documentElement.classList.toggle("nav-open"),this.sidebarToggle.current.classList.toggle("toggled")}},{key:"updateColor",value:function(){window.innerWidth<993&&this.state.isOpen?this.setState({color:"dark"}):this.setState({color:"transparent"})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateColor.bind(this))}},{key:"componentDidUpdate",value:function(e){window.innerWidth<993&&e.history.location.pathname!==e.location.pathname&&-1!==document.documentElement.className.indexOf("nav-open")&&(document.documentElement.classList.toggle("nav-open"),this.sidebarToggle.current.classList.toggle("toggled"))}},{key:"render",value:function(){var e=this;return Object(we.jsx)(Q.a,{color:-1!==this.props.location.pathname.indexOf("full-screen-maps")?"dark":this.state.color,expand:"lg",className:-1!==this.props.location.pathname.indexOf("full-screen-maps")?"navbar-absolute fixed-top":"navbar-absolute fixed-top "+("transparent"===this.state.color?"navbar-transparent ":""),children:Object(we.jsxs)(Z.a,{fluid:!0,children:[Object(we.jsxs)("div",{className:"navbar-wrapper",children:[Object(we.jsx)("div",{className:"navbar-toggle",children:Object(we.jsxs)("button",{type:"button",ref:this.sidebarToggle,className:"navbar-toggler",onClick:function(){return e.openSidebar()},children:[Object(we.jsx)("span",{className:"navbar-toggler-bar bar1"}),Object(we.jsx)("span",{className:"navbar-toggler-bar bar2"}),Object(we.jsx)("span",{className:"navbar-toggler-bar bar3"})]})}),Object(we.jsx)($.a,{href:"/",children:this.getBrand()})]}),Object(we.jsxs)(ee.a,{onClick:this.toggle,children:[Object(we.jsx)("span",{className:"navbar-toggler-bar navbar-kebab"}),Object(we.jsx)("span",{className:"navbar-toggler-bar navbar-kebab"}),Object(we.jsx)("span",{className:"navbar-toggler-bar navbar-kebab"})]}),Object(we.jsxs)(te.a,{isOpen:this.state.isOpen,navbar:!0,className:"justify-content-end",children:[Object(we.jsx)("form",{children:Object(we.jsxs)(ae.a,{className:"no-border",children:[Object(we.jsx)(ne.a,{placeholder:"Search..."}),Object(we.jsx)(ce.a,{addonType:"append",children:Object(we.jsx)(re.a,{children:Object(we.jsx)("i",{className:"nc-icon nc-zoom-split"})})})]})}),Object(we.jsxs)(se.a,{navbar:!0,children:[Object(we.jsx)(ie.a,{children:Object(we.jsxs)(W.b,{to:"#pablo",className:"nav-link btn-magnify",children:[Object(we.jsx)("i",{className:"nc-icon nc-layout-11"}),Object(we.jsx)("p",{children:Object(we.jsx)("span",{className:"d-lg-none d-md-block",children:"Stats"})})]})}),Object(we.jsxs)(oe.a,{nav:!0,isOpen:this.state.dropdownOpen,toggle:function(t){return e.dropdownToggle(t)},children:[Object(we.jsxs)(le.a,{caret:!0,nav:!0,children:[Object(we.jsx)("i",{className:"nc-icon nc-bell-55"}),Object(we.jsx)("p",{children:Object(we.jsx)("span",{className:"d-lg-none d-md-block",children:"Some Actions"})})]}),Object(we.jsxs)(de.a,{right:!0,children:[Object(we.jsx)(je.a,{tag:"a",children:"Action"}),Object(we.jsx)(je.a,{tag:"a",children:"Another Action"}),Object(we.jsx)(je.a,{tag:"a",children:"Something else here"})]})]}),Object(we.jsx)(ie.a,{children:Object(we.jsxs)(W.b,{to:"#pablo",className:"nav-link btn-rotate",children:[Object(we.jsx)("i",{className:"nc-icon nc-settings-gear-65"}),Object(we.jsx)("p",{children:Object(we.jsx)("span",{className:"d-lg-none d-md-block",children:"Account"})})]})})]})]})]})})}}]),a}(r.a.Component),Ze=function(e){Object(q.a)(a,e);var t=Object(J.a)(a);function a(){return Object(z.a)(this,a),t.apply(this,arguments)}return Object(X.a)(a,[{key:"render",value:function(){return Object(we.jsx)("footer",{className:"footer"+(this.props.default?" footer-default":""),children:Object(we.jsx)(Z.a,{fluid:!!this.props.fluid,children:Object(we.jsxs)(pe.a,{children:[Object(we.jsx)("nav",{className:"footer-nav",children:Object(we.jsxs)("ul",{children:[Object(we.jsx)("li",{children:Object(we.jsx)("a",{href:"https://www.creative-tim.com",target:"_blank",children:"Creative Tim"})}),Object(we.jsx)("li",{children:Object(we.jsx)("a",{href:"https://blog.creative-tim.com",target:"_blank",children:"Blog"})}),Object(we.jsx)("li",{children:Object(we.jsx)("a",{href:"https://www.creative-tim.com/license",target:"_blank",children:"Licenses"})})]})}),Object(we.jsx)("div",{className:"credits ml-auto",children:Object(we.jsxs)("div",{className:"copyright",children:["\xa9 ",1900+(new Date).getYear(),", made with"," ",Object(we.jsx)("i",{className:"fa fa-heart heart"})," by Creative Tim"]})})]})})})}}]),a}(r.a.Component),$e=a.p+"static/media/logo.103b5fa1.svg",et=function(e){Object(q.a)(a,e);var t=Object(J.a)(a);function a(e){var n;return Object(z.a)(this,a),(n=t.call(this,e)).activeRoute.bind(Object(V.a)(n)),n.sidebar=r.a.createRef(),n}return Object(X.a)(a,[{key:"activeRoute",value:function(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}},{key:"componentDidMount",value:function(){navigator.platform.indexOf("Win")>-1&&(Je=new K.a(this.sidebar.current,{suppressScrollX:!0,suppressScrollY:!1}))}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&Je.destroy()}},{key:"render",value:function(){var e=this;return Object(we.jsxs)("div",{className:"sidebar","data-color":this.props.bgColor,"data-active-color":this.props.activeColor,children:[Object(we.jsxs)("div",{className:"logo",children:[Object(we.jsx)("a",{href:"https://www.creative-tim.com",className:"simple-text logo-mini",children:Object(we.jsx)("div",{className:"logo-img",children:Object(we.jsx)("img",{src:$e,alt:"react-logo"})})}),Object(we.jsx)("a",{href:"https://www.creative-tim.com",className:"simple-text logo-normal",children:"Creative Tim"})]}),Object(we.jsx)("div",{className:"sidebar-wrapper",ref:this.sidebar,children:Object(we.jsx)(se.a,{children:this.props.routes.map((function(t,a){return Object(we.jsx)("li",{className:e.activeRoute(t.path)+(t.pro?" active-pro":""),children:Object(we.jsxs)(W.c,{to:t.layout+t.path,className:"nav-link",activeClassName:"active",children:[Object(we.jsx)("i",{className:t.icon}),Object(we.jsx)("p",{children:t.name})]})},a)}))})})]})}}]),a}(r.a.Component),tt=function(e){Object(q.a)(a,e);var t=Object(J.a)(a);function a(e){var n;return Object(z.a)(this,a),(n=t.call(this,e)).handleActiveClick=function(e){n.setState({activeColor:e})},n.handleBgClick=function(e){n.setState({backgroundColor:e})},n.state={backgroundColor:"black",activeColor:"info"},n.mainPanel=r.a.createRef(),n}return Object(X.a)(a,[{key:"componentDidMount",value:function(){navigator.platform.indexOf("Win")>-1&&(Ke=new K.a(this.mainPanel.current),document.body.classList.toggle("perfect-scrollbar-on"))}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&(Ke.destroy(),document.body.classList.toggle("perfect-scrollbar-on"))}},{key:"componentDidUpdate",value:function(e){"PUSH"===e.history.action&&(this.mainPanel.current.scrollTop=0,document.scrollingElement.scrollTop=0)}},{key:"render",value:function(){return Object(we.jsxs)("div",{className:"wrapper",children:[Object(we.jsx)(et,Object(n.a)(Object(n.a)({},this.props),{},{routes:Ve,bgColor:this.state.backgroundColor,activeColor:this.state.activeColor})),Object(we.jsxs)("div",{className:"main-panel",ref:this.mainPanel,children:[Object(we.jsx)(Qe,Object(n.a)({},this.props)),Object(we.jsxs)(B.d,{children:[Ve.map((function(e,t){return Object(we.jsx)(B.b,{exact:!0,path:e.layout+e.path,component:e.component},t)})),Object(we.jsx)(B.b,{path:"*",render:function(){return Object(we.jsx)(B.a,{to:"/admin/energy"})}})]}),Object(we.jsx)(Ze,{fluid:!0})]})]})}}]),a}(r.a.Component),at=(a(525),a(526),a(527),a(528),a(529),Object(b.e)(Object(p.a)(U)(T),P(Object(b.a)(u.a.withExtraArgument(j.getFirebase),G)))),nt={firebase:_,config:{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0},dispatch:at.dispatch,createFirestoreInstance:d.createFirestoreInstance};i.a.render(Object(we.jsx)(l.a,{store:at,children:Object(we.jsx)(j.ReactReduxFirebaseProvider,Object(n.a)(Object(n.a)({},nt),{},{children:Object(we.jsx)(W.a,{children:Object(we.jsxs)(B.d,{children:[Object(we.jsx)(B.b,{path:"/admin",render:function(e){return Object(we.jsx)(tt,Object(n.a)({},e))}}),Object(we.jsx)(B.a,{to:"/admin/energy"})]})})}))}),document.getElementById("root")),o()}},[[530,1,2]]]);