(this["webpackJsonpab-test-real"]=this["webpackJsonpab-test-real"]||[]).push([[0],{68:function(e,n,t){},69:function(e,n,t){"use strict";t.r(n);var r,a=t(0),c=t.n(a),i=t(17),s=t.n(i),o=t(21),u=t(11),l=t(5);!function(e){e.USER_ID="USER_ID",e.DATE_REGISTRATION="DATE_REGISTRATION",e.DATE_LAST_ACTIVITY="DATE_LAST_ACTIVITY"}(r||(r={}));var d,b=function(e){var n=new Date(e),t=n.getDate().toString(),r=(n.getMonth()+1).toString(),a=n.getFullYear();return 1===t.length&&(t="0"+t),1===r.length&&(r="0"+r),"".concat(t,".").concat(r,".").concat(a)},E=t(6),f=t.n(E),j=t(8);!function(e){e.USERS_REQUEST_DATA="USERS_REQUEST_DATA",e.USERS_REQUEST_END="USERS_REQUEST_END",e.USERS_RECEIVE_DATA="USERS_RECEIVE_DATA",e.USERS_REJECT_DATA="USERS_REJECT_DATA",e.METRICS_REQUEST_DATA="METRICS_REQUEST_DATA",e.METRICS_REQUEST_END="METRICS_REQUEST_END",e.METRICS_RECEIVE_DATA="METRICS_RECEIVE_DATA",e.METRICS_REJECT_DATA="METRICS_REJECT_DATA"}(d||(d={}));var m,p,O=t(19),T=t(20),h=t(10),R=t.n(h),g="https://ab-test-real-backend.herokuapp.com/api",x=function(){function e(){Object(O.a)(this,e)}return Object(T.a)(e,null,[{key:"getUsers",value:function(){var e=Object(j.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(g,"/users"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"saveUsers",value:function(){var e=Object(j.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.post("".concat(g,"/users/save_users"),n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}]),e}(),v=function(){return{type:d.USERS_REQUEST_DATA}},A=function(e){return{type:d.USERS_RECEIVE_DATA,payload:e}},S=function(){return{type:d.USERS_REJECT_DATA}},_=function(){return{type:d.USERS_REQUEST_END}},y={getUsers:function(){return function(){var e=Object(j.a)(f.a.mark((function e(n){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(v()),e.next=4,x.getUsers();case 4:t=e.sent,r=t.data,n(A({users:r})),n(_()),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),n(S());case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}()},saveUsers:function(e){return function(){var n=Object(j.a)(f.a.mark((function n(t){var r,a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(v()),n.next=4,x.saveUsers(e);case 4:r=n.sent,a=r.data,t(A({users:a})),t(_()),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0),t(S());case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()}},I=t(2),D=t(3);!function(e){e.FONT="rgb(93, 109, 151)",e.WHITE="#FFF",e.BOX_SHADOW="rgba(93, 109, 151, 0.1)",e.MAIN_BG="#F9F9F9",e.BUTTON="#4A9DFF",e.BUTTON_HOVER="rgb(87, 170, 255)",e.BUTTON_DISABLED="rgba(74, 157, 255, 0.27)",e.CELL_HOVER="rgb(235, 235, 240)",e.LIGHT_TEXT="rgba(93, 109, 151, 0.5)",e.RED="red",e.LIGHT_RED="rgb(251, 172, 168)"}(m||(m={}));var U,C,w=D.b.button(p||(p=Object(I.a)(["\n  cursor: pointer;\n  transition: 0.2s;\n  width: 189px;\n  height: 38px;\n  background: ",";\n  color: ",";\n  font-size: 14px;\n  font-weight: 400;\n  border-radius: 10px;\n\n  &:hover {\n    background: ",";\n  }\n\n  &:disabled {\n    background: ",";\n  }\n\n  ","\n"])),m.BUTTON,m.WHITE,m.BUTTON_HOVER,m.BUTTON_DISABLED,(function(e){return e.styles})),L=t(1),N=function(e){var n=e.value,t=e.onClick,r=e.disabled,a=e.styles;return Object(L.jsx)(w,{onClick:t,disabled:r,styles:a,children:n})},k=D.b.div(U||(U=Object(I.a)(["\n  color: ",";\n  font-size: 20px;\n  width: 1.05em;\n  height: 1.05em;\n  border-radius: 50%;\n  animation: load 1.7s infinite ease, round 1.7s infinite ease;\n\n  @keyframes load {\n    0% {\n      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,\n        0 -0.83em 0 -0.477em;\n    }\n    5%,\n    95% {\n      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,\n        0 -0.83em 0 -0.477em;\n    }\n    10%,\n    59% {\n      box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em,\n        -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;\n    }\n    20% {\n      box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em,\n        -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;\n    }\n    38% {\n      box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em,\n        -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;\n    }\n    100% {\n      box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em,\n        0 -0.83em 0 -0.477em;\n    }\n  }\n\n  @keyframes round {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"])),m.BUTTON),M=function(){return Object(L.jsx)(k,{})};!function(e){e.READ="READ",e.WRITE="WRITE"}(C||(C={}));var B,V,H,J,F,Q,Y,G,W,z,P,X,K,q,Z,$=function(e){if(10!==e.length)throw new Error("Invalid Date Indicators");var n=e.split(".");return{day:n[0],month:n[1],year:n[2]}},ee=function(e){var n=$(e),t=n.day,r=n.month,a=n.year;return"".concat(a,"-").concat(r,"-").concat(t)},ne=function(e){var n=new Date;return n.setHours(0),n.setMinutes(0),n.setSeconds(0),n.setMilliseconds(0),n.setDate(Number(e.day)),n.setMonth(Number(e.month)-1),n.setFullYear(Number(e.year)),n},te=function(e){return!(0===Number(e.day)||Number(e.day)>31)&&(!(0===Number(e.month)||Number(e.month)>12)&&!(0===Number(e.year)||Number(e.year)<2e3))},re=function(e,n){if(e&&te(e))ne(e);else if(n&&te(n))ne(n);else if(e&&!te(e)||n&&!te(n))return!1;if(e&&n){var t=ne(e),r=ne(n);if(t>r)return!1;if(t>new Date)return!1;if(r>new Date)return!1}return!0},ae=function(e){var n=Object(a.useRef)();return Object(a.useEffect)((function(){n.current=e}),[e]),n.current},ce=function(e){return e.usersReducer.users},ie=function(e){return e.usersReducer.isLoading},se=function(e){return e.usersReducer.hasError},oe=D.b.div(B||(B=Object(I.a)(["\n  transition: 0.2s;\n  justify-self: center;\n  align-self: center;\n  color: ",";\n  font-size: 14px;\n  font-weight: ",";\n\n  ","\n"])),m.FONT,(function(e){return e.header?400:300}),(function(e){return!e.header&&Object(D.a)(V||(V=Object(I.a)(["\n      cursor: pointer;\n      &:hover {\n        background: ",";\n      }\n    "])),m.CELL_HOVER)})),ue=D.b.p(H||(H=Object(I.a)(["\n  padding: 17px 40px;\n\n  ","\n"])),(function(e){return e.lightText&&Object(D.a)(J||(J=Object(I.a)(["\n      color: ",";\n    "])),m.LIGHT_TEXT)})),le=D.b.input(F||(F=Object(I.a)(["\n  font-size: 14px;\n  font-weight: 400;\n  width: 90px;\n  margin: 8px 30px;\n  padding: 8px 0;\n  padding-left: 9px;\n  border-radius: 10px;\n  border: 1px solid ",";\n\n  ","\n"])),m.CELL_HOVER,(function(e){return e.small&&Object(D.a)(Q||(Q=Object(I.a)(["\n      width: 35px;\n      margin: 8px 27px;\n      padding-left: 5px;\n    "])))})),de=function(e){var n=e.setSelectedUser,t=e.value,c=e.header,i=e.small,s=e.type,o=e.id,d=Object(a.useState)(C.READ),E=Object(u.a)(d,2),f=E[0],j=E[1],m=Object(a.useState)(t),p=Object(u.a)(m,2),O=p[0],T=p[1],h=ae(O),R=Object(l.b)(),g=Object(l.c)(ce),x=function(){try{if(s===r.DATE_REGISTRATION){var e,n=O,t=null===(e=g.find((function(e){return e.userId===o})))||void 0===e?void 0:e.dateLastActivity,a=$(n);if(t){var c=$(b(t));return re(a,c)}return re(a)}if(s===r.DATE_LAST_ACTIVITY){var i,u=O,l=null===(i=g.find((function(e){return e.userId===o})))||void 0===i?void 0:i.dateRegistration,d=$(u);if(l){var E=$(b(l));return re(E,d)}return re(d)}var f=Number(O);return!g.some((function(e){return e.userId===f}))}catch(j){console.log(j)}},v=function(){o&&n&&n(o)};return Object(L.jsx)(oe,{onClick:function(){c||(v(),j(C.WRITE))},header:c,children:f===C.READ?Object(L.jsx)(ue,{lightText:!O,children:O||"Empty"}):Object(L.jsx)(le,{value:O,onChange:function(e){!i&&h.length<O.length?T(function(e){return e.length?(2!==e.length&&5!==e.length||(e+="."),e):""}(e.target.value)):T(e.target.value)},onBlur:function(){if(n&&n(-1),j(C.READ),O!==t){if(!x())return T(t);var e=g.map((function(e){return e.userId===o&&(s===r.USER_ID&&(e.userId=Number(O)),s===r.DATE_REGISTRATION&&(e.dateRegistration=ee(O)),s===r.DATE_LAST_ACTIVITY&&(e.dateLastActivity=ee(O))),e}));return R(A({users:e}))}},onKeyPress:function(e){return Number(e.key)>=0||Number(e.key)<=9||e.preventDefault()},maxLength:i?4:10,small:i,autoFocus:!0})})},be=D.b.div(Y||(Y=Object(I.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n"]))),Ee=D.b.div(G||(G=Object(I.a)(["\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 1fr;\n  background: ",";\n  border-radius: 10px;\n  box-shadow: 4px 0px 10px ",";\n  margin-bottom: 20px;\n"])),m.WHITE,m.BOX_SHADOW),fe=D.b.div(W||(W=Object(I.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1.75fr 1.75fr;\n  width: 100%;\n  padding: 0 40px;\n  border-bottom: 0.5px solid rgba(93, 110, 151, 0.4);\n"]))),je=D.b.div(z||(z=Object(I.a)(["\n  overflow: scroll;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(7, 51px);\n  min-height: 354px;\n  max-height: 354px;\n  background: ",";\n\n  -ms-overflow-style: none;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])),m.WHITE),me=D.b.div(P||(P=Object(I.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]))),pe=D.b.p(X||(X=Object(I.a)(["\n  position: absolute;\n  color: red;\n  top: -35px;\n"]))),Oe=function(e){var n=e.users,t=e.isLoading,a=e.hasError,c=e.setSelectedUser,i=Object(l.b)();return Object(L.jsxs)(be,{children:[a&&Object(L.jsx)(pe,{children:"Error: There is no connection to the server!"}),Object(L.jsxs)(Ee,{children:[Object(L.jsxs)(fe,{children:[Object(L.jsx)(de,{value:"UserID",header:!0,small:!0}),Object(L.jsx)(de,{value:"Date Registration",header:!0}),Object(L.jsx)(de,{value:"Date Last Activity",header:!0})]}),Object(L.jsx)(je,{children:!t&&n?n.sort((function(e,n){return e.userId-n.userId})).map((function(e){return Object(L.jsxs)(fe,{children:[Object(L.jsx)(de,{setSelectedUser:c,type:r.USER_ID,id:e.userId,value:e.userId.toString(),small:!0}),Object(L.jsx)(de,{setSelectedUser:c,type:r.DATE_REGISTRATION,id:e.userId,value:e.dateRegistration?b(e.dateRegistration):e.dateRegistration}),Object(L.jsx)(de,{setSelectedUser:c,type:r.DATE_LAST_ACTIVITY,id:e.userId,value:e.dateLastActivity?b(e.dateLastActivity):e.dateLastActivity})]},"".concat(e.userId,"_").concat(e.dateRegistration,"_").concat(e.dateLastActivity))})):Object(L.jsx)(me,{children:Object(L.jsx)(M,{})})})]}),Object(L.jsx)(N,{value:"Add new user",onClick:function(){var e={userId:(n.length?n[n.length-1].userId:0)+1,dateRegistration:"",dateLastActivity:""},t=Object(o.a)(n);t.push(e),i(A({users:t}))},disabled:t})]})},Te=t(12),he=t(4),Re=function(){function e(){Object(O.a)(this,e)}return Object(T.a)(e,null,[{key:"getUsersLifeTime",value:function(){var e=Object(j.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(g,"/metrics/lifetime"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getRollingRetention",value:function(){var e=Object(j.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.get("".concat(g,"/metrics/calculate"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),ge=function(){return{type:d.METRICS_REQUEST_DATA}},xe=function(e){return{type:d.METRICS_RECEIVE_DATA,payload:e}},ve=function(){return{type:d.METRICS_REJECT_DATA}},Ae=function(){return{type:d.METRICS_REQUEST_END}},Se={calculateMetrics:function(){return function(){var e=Object(j.a)(f.a.mark((function e(n){var t,r,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(ge()),e.next=4,Re.getUsersLifeTime();case 4:return t=e.sent,r=t.data,e.next=8,Re.getRollingRetention();case 8:a=e.sent,c=a.data,n(xe({lifeTime:r,rollingRetention:c})),n(Ae()),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0),n(ve());case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(n){return e.apply(this,arguments)}}()}},_e=Object(he.a)(Object(he.a)({},y),Se),ye=t(37),Ie=function(e){return e.metricsReducer.rollingRetention},De=function(e){return e.metricsReducer.lifeTime},Ue=function(e){return e.metricsReducer.isLoading},Ce=D.b.div(K||(K=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"]))),we=D.b.p(q||(q=Object(I.a)(["\n  font-size: 16px;\n  color: ",";\n  margin-bottom: 15px;\n"])),m.FONT);!function(e){e.JANUARY="January",e.FEBRUARY="February",e.MARCH="March",e.APRIL="April",e.MAY="May",e.JUNE="June",e.JULY="July",e.AUGUST="August",e.SEPTEMBER="September",e.OCTOBER="October",e.NOVEMBER="November",e.DECEMBER="December"}(Z||(Z={}));var Le,Ne,ke,Me,Be,Ve=[Z.JANUARY,Z.FEBRUARY,Z.MARCH,Z.APRIL,Z.MAY,Z.JUNE,Z.JULY,Z.AUGUST,Z.SEPTEMBER,Z.OCTOBER,Z.NOVEMBER,Z.DECEMBER],He=D.b.div(Le||(Le=Object(I.a)(["\n  cursor: pointer;\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n"]))),Je=D.b.div(Ne||(Ne=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 25px;\n  border-radius: 15px;\n  background: ",";\n"])),m.WHITE),Fe=function(e){var n=e.children,t=e.onClose;return Object(L.jsx)(He,{onClick:t,children:Object(L.jsx)(Je,{children:n})})},Qe=function(e){var n=e.onClose,t=Object(l.c)(Ie),r=Object(l.c)(De),c=Object(l.c)(Ue),i=Object(a.useMemo)((function(){var e=[["Months","LifeTime"]];return r&&r.forEach((function(n,t){return e.push([Ve[t],n])})),e}),[r]);return Object(L.jsx)(Fe,{onClose:n,children:c?Object(L.jsx)(M,{}):Object(L.jsxs)(Ce,{children:[Object(L.jsxs)(we,{children:["Rolling Retention 7 Day: ",t,"%"]}),Object(L.jsx)(ye.a,{width:"1000px",height:"500px",chartType:"Bar",loader:Object(L.jsx)(M,{}),data:i,options:{chart:{title:"Users Lifetime, 2021"}}})]})})},Ye=D.b.div(ke||(ke=Object(I.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  width: 100%;\n  background: ",";\n"])),m.MAIN_BG),Ge=D.b.div(Me||(Me=Object(I.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),We=D.b.div(Be||(Be=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 20px;\n  width: 100%:\n"]))),ze=function(){var e=function(){var e=Object(l.b)();return Object(Te.b)(_e,e)}(),n=e.getUsers,t=e.saveUsers,r=e.calculateMetrics,c=Object(l.b)(),i=Object(l.c)(ce),s=Object(l.c)(ie),d=Object(l.c)(se),b=Object(a.useState)(-1),E=Object(u.a)(b,2),f=E[0],j=E[1],p=Object(a.useState)(!1),O=Object(u.a)(p,2),T=O[0],h=O[1],R=ae(f);Object(a.useEffect)((function(){n()}),[]);return Object(L.jsx)(Ye,{children:Object(L.jsxs)(Ge,{children:[Object(L.jsx)(Oe,{users:i,isLoading:s,hasError:d,setSelectedUser:j}),Object(L.jsxs)(We,{children:[Object(L.jsx)(N,{value:"Save",onClick:function(){s||t(i)},disabled:d}),Object(L.jsx)(N,{value:"Calculate",onClick:function(){s||(r(),h(!0))},styles:{marginTop:"15px"},disabled:i&&!i.length}),Object(L.jsx)(N,{value:"Delete user",onClick:function(){if(R>-1){var e=Object(o.a)(i).filter((function(e){return e.userId!==R}));c(A({users:e}))}j(-1)},styles:{marginTop:"15px",background:m.RED,":hover":{background:m.RED},":disabled":{background:m.LIGHT_RED}},disabled:f<0&&R<0})]}),T&&Object(L.jsx)(Qe,{onClose:function(){return h(!1)}})]})})},Pe=t(39),Xe={users:[],isLoading:!1,hasError:!1},Ke={rollingRetention:0,lifeTime:[],isLoading:!1,hasError:!1},qe=Object(Te.c)({usersReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case d.USERS_REQUEST_DATA:return Object(he.a)(Object(he.a)({},e),{},{isLoading:!0});case d.USERS_RECEIVE_DATA:return Object(he.a)(Object(he.a)({},e),{},{users:n.payload.users});case d.USERS_REJECT_DATA:return Object(he.a)(Object(he.a)({},e),{},{isLoading:!1,hasError:!0});case d.USERS_REQUEST_END:return Object(he.a)(Object(he.a)({},e),{},{isLoading:!1,hasError:!1});default:return e}},metricsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case d.METRICS_REQUEST_DATA:return Object(he.a)(Object(he.a)({},e),{},{isLoading:!0});case d.METRICS_RECEIVE_DATA:return Object(he.a)(Object(he.a)({},e),{},{rollingRetention:n.payload.rollingRetention,lifeTime:n.payload.lifeTime});case d.METRICS_REJECT_DATA:return Object(he.a)(Object(he.a)({},e),{},{isLoading:!1,hasError:!0});case d.METRICS_REQUEST_END:return Object(he.a)(Object(he.a)({},e),{},{isLoading:!1,hasError:!1});default:return e}}}),Ze=Object(Te.d)(qe,Object(Te.a)(Pe.a));var $e=function(){return Object(L.jsx)(l.a,{store:Ze,children:Object(L.jsx)(ze,{})})};t(68);s.a.render(Object(L.jsx)(c.a.StrictMode,{children:Object(L.jsx)($e,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.a522aa69.chunk.js.map