(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(8),r=n.n(o),d=n(3),i=n(2),l=n(6),s=(n(14),n(0)),u=function(e){var t=e.handleAdd,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(a.useState)(e),n=Object(d.a)(t,2),c=n[0],o=n[1];return[c,function(e){var t=e.target;o(Object(i.a)(Object(i.a)({},c),{},Object(l.a)({},t.name,t.value)))},function(){o(e)}]}({task:""}),c=Object(d.a)(n,3),o=c[0].task,r=c[1],u=c[2];return Object(s.jsx)("div",{className:"write-task",children:Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault();var n={id:(new Date).getTime(),task:o,done:!1};t(n),u()},children:Object(s.jsx)("input",{type:"text",className:"write-task__input",placeholder:"Write a new task...",name:"task",onChange:r,value:o,autoComplete:"off"})})})},j=(n(16),n(17),function(e){var t=e.id,n=e.task,a=e.done,c=e.handleDelete,o=e.handleToggle;return Object(s.jsxs)("div",{className:"list-item",children:[Object(s.jsx)("p",{className:"list-item__text ".concat(a?"complete":""),onClick:function(){return o(t)},children:n}),Object(s.jsx)("button",{className:"btn",onClick:function(){return c(t)},children:"Eliminar"})]})}),f=function(e){var t=e.handleAdd,n=e.todos,a=e.handleDelete,c=e.handleToggle;return Object(s.jsxs)(s.Fragment,{children:[n.map((function(e){return Object(s.jsx)(j,Object(i.a)(Object(i.a)({},e),{},{handleDelete:a,handleToggle:c}),e.id)})),Object(s.jsx)(u,{handleAdd:t})]})},b=n(9),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(b.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":return e.map((function(e){return e.id===t.payload?Object(i.a)(Object(i.a)({},e),{},{done:!e.done}):e}));default:return e}},O=function(){var e=JSON.parse(localStorage.getItem("todos"));return e||[{id:123,task:"WriteApp",done:!1}]},h=function(){var e=Object(a.useReducer)(p,[],O),t=Object(d.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)(f,{handleAdd:function(e){c({type:"add",payload:e})},todos:n,handleDelete:function(e){c({type:"delete",payload:e})},handleToggle:function(e){c({type:"toggle",payload:e})}})})},g=function(){return Object(s.jsx)(h,{})};n(18);r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.8857aa66.chunk.js.map