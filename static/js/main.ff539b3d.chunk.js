(this.webpackJsonpcakeserver=this.webpackJsonpcakeserver||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(10),o=n.n(i),a=(n(16),n(3)),s=n(8),u=(n(17),n(0)),m="320px";function l(e){return Object(u.jsx)("nav",{className:"w3-sidebar w3-bar-block w3-collapse w3-white w3-animate-left w3-card",style:{zIndex:3,width:m},children:e.children})}function j(e){return Object(u.jsx)("div",{className:"w3-main",style:{marginLeft:m},children:Object(u.jsxs)("div",{className:"w3-container",children:[Object(u.jsx)("br",{}),e.children]})})}var f=function(){return Object(u.jsxs)("a",{href:"https://github.com/chinhung/cakeserver",target:"_blank",rel:"noreferrer",className:"w3-bar-item w3-button",children:[Object(u.jsx)("i",{className:"fa fa-github w3-margin-right"}),"GitHub"]})};var b=function(e){var t=e.onClick;return Object(u.jsxs)("div",{className:"w3-bar-item w3-button w3-dark-grey w3-button w3-hover-black w3-left-align",onClick:t,children:["New Commit",Object(u.jsx)("i",{className:"w3-padding fa fa-pencil"})]})};var d=function(){return Object(u.jsxs)("div",{className:"w3-bar-item w3-button w3-border-bottom w3-large",children:[Object(u.jsx)("h3",{children:"Cake Server"}),Object(u.jsx)("h5",{style:{color:"grey"},children:"Splits your task into peices of cake!"})]})};var g=function(e){var t=e.commits,n=e.onSelect;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"w3-bar-item w3-button",children:[Object(u.jsx)("i",{className:"fa fa-inbox w3-margin-right"}),"Commits",Object(u.jsx)("i",{className:"fa fa-caret-down w3-margin-left"})]}),Object(u.jsx)("div",{className:"w3-animate-left",children:t.map((function(e){return Object(u.jsx)("div",{className:"w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey",onClick:function(){return n(Object(a.a)({},e))},children:Object(u.jsxs)("div",{className:"w3-container",children:[Object(u.jsx)("span",{className:"w3-opacity w3-large",children:e.message}),Object(u.jsx)("p",{children:e.note})]})},e.id)}))})]})};var h=function(e){var t=e.message,n=e.onChange;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h4",{children:"Commit Message"}),Object(u.jsx)("input",{id:"commitMessageText",type:"text",value:t,onChange:function(e){return n(e.target.value)}})]})};var O=function(e){var t=e.note,n=e.onChange;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h4",{children:"Note"}),Object(u.jsx)("textarea",{id:"w3review",name:"w3review",rows:"4",cols:"50",value:t,onChange:function(e){return n(e.target.value)}})]})},w=n(11),v=n.n(w),x="Copy Commit Message";function p(e){var t=e.operations;return Object(r.useEffect)((function(){var e=new v.a("#copyCommitMessageBtn");e.on("success",(function(e){console.info("Action:",e.action),console.info("Text:",e.text),console.info("Trigger:",e.trigger),e.clearSelection()})),e.on("error",(function(e){console.error("Action:",e.action),console.error("Trigger:",e.trigger)}))}),[]),t.map((function(e,t){return e.name===x?Object(u.jsx)("button",{id:"copyCommitMessageBtn","data-clipboard-target":"#commitMessageText",className:"w3-button w3-light-grey",onClick:e.operate,children:e.name},t):Object(u.jsx)("button",{className:"w3-button w3-light-grey",onClick:e.operate,children:e.name},t)}))}var C=function(e){return function(t){var n=t.saveCommit,r=t.copyCommitMessage,c=t.deleteCommit,i=t.redoCommit;return function(t){return e(t)?[{name:"Save",operate:function(){return n(t)}}]:[{name:"Save",operate:function(){return n(t)}},{name:"Redo",operate:function(){return i(t)}},{name:x,operate:function(){return r(t.message)}},{name:"Delete",operate:function(){return c(t)}}]}}},k=function(e){return function(){return e.loadCommits()}},y=n(21).a,N=function(){return{id:y(),message:"",note:""}},S=function(e){return function(t){return 0===e.filter((function(e){return e.id===t.id})).length}},M=n(2),T=n(6),F=n(7),I=function(){return JSON.parse(localStorage.getItem("cakeserver.commits")||"[]")},J=function(e){localStorage.setItem("cakeserver.commits",JSON.stringify(e))},B=function(){function e(){Object(T.a)(this,e)}return Object(F.a)(e,[{key:"loadCommits",value:function(){var e=I();return new Promise((function(t,n){t(e)}))}},{key:"saveCommit",value:function(e){var t=I(),n=t.filter((function(t){return t.id===e.id}));return t=0===n.length?[].concat(Object(M.a)(t),[e]):Object(M.a)(t.map((function(t){return t.id===e.id?{id:t.id,message:e.message,note:e.note}:t}))),J(t),new Promise((function(e,t){e()}))}},{key:"deleteCommit",value:function(e){var t=I();return t=Object(M.a)(t.filter((function(t){return t.id!==e.id}))),J(t),new Promise((function(e,t){e()}))}}]),e}();var E=function(){var e=Object(r.useState)(new B),t=Object(s.a)(e,1)[0],n=Object(r.useState)([]),c=Object(s.a)(n,2),i=c[0],o=c[1],m=Object(r.useState)(N()),w=Object(s.a)(m,2),v=w[0],x=w[1],y=function(){k(t)().then((function(e){return o(e)}))};Object(r.useEffect)((function(){k(t)().then((function(e){return o(e)}))}),[]);var M={saveCommit:function(e){(function(e){return function(t){return e.saveCommit(t)}})(t)(e).then((function(){y()}))},redoCommit:function(e){x(Object(a.a)({},i.filter((function(t){return t.id===e.id}))[0]))},copyCommitMessage:function(e){console.log("copy: "+e)},deleteCommit:function(e){(function(e){return function(t){return e.deleteCommit(t)}})(t)(e).then((function(){y(),x(N())}))}};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(l,{children:[Object(u.jsx)(d,{}),Object(u.jsx)(b,{onClick:function(){x(N())}}),Object(u.jsx)(g,{commits:i,onSelect:function(e){x(e)}}),Object(u.jsx)(f,{})]}),Object(u.jsxs)(j,{children:[Object(u.jsx)(h,{message:v.message,onChange:function(e){x(Object(a.a)(Object(a.a)({},v),{},{message:e}))}}),Object(u.jsx)(O,{note:v.note,onChange:function(e){x(Object(a.a)(Object(a.a)({},v),{},{note:e}))}}),Object(u.jsx)("hr",{}),Object(u.jsx)(p,{operations:C(S(i))(M)(v)})]})]})};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(E,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ff539b3d.chunk.js.map