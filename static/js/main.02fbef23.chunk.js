(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(5),r=n.n(s),l=(n(12),n(6)),o=n(7),a=(n(13),n(0)),d=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"TODO LIST"})})},u=function(e){var t=e.newTask,n=e.id,i=Object(c.useRef)();return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={task:i.current.value,id:n.length,complete:!1};t(c),i.current.value=" "},children:[Object(a.jsx)("label",{id:"titleform",htmlFor:"newTask",children:"Task:"}),Object(a.jsx)("input",{type:"text",id:"task",placeholder:"Enter a new task",ref:i,required:!0}),Object(a.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Submit"})]})},j=n.p+"static/media/delete2.1a70538b.png",b=void 0,h=function(e){var t={textDecoration:e.list.complete?"line-through":"none",backgroundColor:e.list.complete?"transparent":"rgb(255, 255, 87)"};return Object(a.jsxs)("li",{style:t,children:[e.list.task,Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"btn btn-success",onClick:e.checktask.bind(b,e.list.id),children:" Complete"}),Object(a.jsx)("img",{className:"delete",src:j,alt:"delete",onClick:e.del.bind(b,e.list.id)})]})]})},m=function(e){return Object(a.jsxs)("ul",{children:[Object(a.jsx)("h4",{children:"Task List"}),e.list.map((function(t){return Object(a.jsx)(h,{list:t,del:e.delete,checktask:e.check},t.id)}))]})};var p=function(){var e=Object(c.useState)([{task:"Do the laundry",id:0,complete:!0},{task:"Go to the supermarkert",id:1,complete:!1},{task:"Buy cat food",id:2,complete:!0}]),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"container-lg",children:[Object(a.jsx)(d,{}),Object(a.jsxs)("div",{className:"inner_ctn",children:[Object(a.jsx)(u,{newTask:function(e){var t=[].concat(Object(l.a)(n),[e]);console.log(t),i(t)},id:n}),Object(a.jsx)(m,{list:n,delete:function(e){var t=n.filter((function(t){return t.id!==e}));i(t)},check:function(e){if(window.confirm("Are your sure you want to delete it?")){var t=n.map((function(t){return t.id===e&&(t.complete=!t.complete),t}));i(t)}}})]})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.02fbef23.chunk.js.map