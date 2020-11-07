(this["webpackJsonpreact-server-side-table_crud"]=this["webpackJsonpreact-server-side-table_crud"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),s=a(40),l=a.n(s),i=(a(55),a(56),a(10)),o=a(2),u=a(6),d=a.n(u),b=a(11),m=a(41),p=a(42),j=a(49),h=a(47),x=a(43),f=a.n(x).a.create({baseURL:"https://mock-up-data.herokuapp.com/api/admins",headers:{"Content-type":"application/json"}}),O=function(e){return f.get("/".concat(e))},v=function(e){return f.post("",e)},k=function(e,t){return f.put("/".concat(e),t)},g=function(e){return f.delete("",{data:{admin_seq_array:e}})},w=a(44),y=a.n(w),C=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).handleChangeName=function(e){n.name=e},n.handleSearch=function(){var e={name:n.name};n.setState({addQueryParameters:e,reRenderApiRequest:{enabled:!0}},(function(){n.setState({reRenderApiRequest:{enabled:!1}})}))},n.handleDeleteAdmin=Object(b.a)(d.a.mark((function e(){var t,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(t=n.state.checkboxCheckedValues).length){e.next=6;break}return window.alert("\uc0ad\uc81c\ud560 \uad00\ub9ac\uc790 \uc815\ubcf4\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694."),e.abrupt("return",!1);case 6:if(!window.confirm("\uc120\ud0dd\ud55c \uad00\ub9ac\uc790 \uc815\ubcf4\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=20;break}return e.prev=7,e.next=10,g(t);case 10:a=e.sent,r=a.data.message,window.alert(r),n.setState({reRenderApiRequest:{enabled:!0}},(function(){n.setState({reRenderApiRequest:{enabled:!1}})})),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(7),console.error("error",e.t0);case 19:case 20:case 21:case 22:case"end":return e.stop()}}),e,null,[[7,16]])}))),n.handleCheckboxCheckedCallback=function(e){n.setState({checkboxCheckedValues:e})},n.name="",n.state={reRenderApiRequest:{enabled:!1},checkboxCheckedValues:[]},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.reRenderApiRequest,a=e.checkboxCheckedValues,r=[[{title:"",checkboxAll:!0,column:"admin_seq",rowSpan:2},{title:"No.",rowSpan:2},{title:"\uad00\ub9ac\uc790 \uc815\ubcf4",colSpan:4},{title:Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"fa fa-calendar",style:{fontSize:"14px"}})," \ub4f1\ub85d\uc77c"]}),column:"reg_date",sortable:!0,rowSpan:2}],[{title:Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"fa fa-id-card",style:{fontSize:"15px"}})," \uc544\uc774\ub514"]}),column:"id",sortable:!0},{title:Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"fa fa-user",style:{fontSize:"15px"}})," \uc774\ub984"]}),column:"name",sortable:!0},{title:Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"fa fa-phone",style:{fontSize:"14px"}})," \uc5f0\ub77d\ucc98"]}),column:"tel",sortable:!0},{title:Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"fa fa-envelope",style:{fontSize:"14px"}})," \uc774\uba54\uc77c"]}),column:"email",sortable:!0}]],c=[{name:"admin_seq",checkbox:!0},{name:"admin_seq",formatter:function(e){var t=e.dataIndex;return e.total-(e.from-1)-t}},{name:"id",formatter:function(e){var t=e.rowData;return Object(n.jsx)(i.b,{to:"/admin/".concat(t.admin_seq),children:t.id})}},{name:"name"},{name:"tel"},{name:"email"},{name:"reg_date"}];return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(y.a,{url:"https://mock-up-data.herokuapp.com/api/admins",headers:r,columns:c,settings:{colGroup:["7%","7%","15%","15%","15%","24%","17%"],queryParameterNames:{search:"id"},language:{search:"Search By ID"}},reRenderApiRequest:t,checkboxCheckedCallback:this.handleCheckboxCheckedCallback,children:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{className:"btn btn-danger",onClick:this.handleDeleteAdmin,disabled:0===a.length,children:"\uc0ad\uc81c"}),Object(n.jsx)(i.b,{to:"/admin/new",className:"btn btn-success ml-2",children:"\ub4f1\ub85d"})]})})})}}]),a}(r.Component),N=a(46),R=a(15),S=a(13),_=a(48),q=function(e){var t=e.match.params.id,a={id:"",name:"",tel:"",email:""},c={id:Object(r.createRef)(),name:Object(r.createRef)(),tel:Object(r.createRef)(),email:Object(r.createRef)()},s=Object(r.useState)(a),l=Object(_.a)(s,2),o=l[0],u=l[1],m=Object(r.useRef)(c),p=[{name:"id",label:"\uad00\ub9ac\uc790 ID",type:"text",maxLength:null,pattern:null,errorMessage:{empty:"\uad00\ub9ac\uc790 ID\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."}},{name:"name",label:"\uad00\ub9ac\uc790\uba85",type:"text",maxLength:null,pattern:null,errorMessage:{empty:"\uad00\ub9ac\uc790\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}},{name:"tel",label:"\uc5f0\ub77d\ucc98",type:"text",maxLength:13,pattern:/^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,errorMessage:{empty:"\uc5f0\ub77d\ucc98\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",pattern:"\uc5f0\ub77d\ucc98 \ud615\uc2dd\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}},{name:"email",label:"\uc774\uba54\uc77c",type:"text",maxLength:null,pattern:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,errorMessage:{empty:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",pattern:"\uc774\uba54\uc77c \ud615\uc2dd\uc774 \uc798\ubabb\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}}],j=Object(r.useCallback)(Object(b.a)(d.a.mark((function a(){var n,r,c,s;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O(t);case 3:n=a.sent,r=n.data,c=r.data,404===(s=r.status)||500===s?e.history.replace("/error"):u((function(e){return Object(S.a)(Object(S.a)({},e),c)})),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.error("error",a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])}))),[e,t]);Object(r.useEffect)((function(){void 0!==t&&j()}),[t,j]);var h=function(e){var t=e.target,a=t.name,n=t.value;if(-1!==n.search(/\s/))return!1;var r="tel"===a?n.replace(/[^0-9]/g,"").replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3"):n;u((function(e){return Object(S.a)(Object(S.a)({},e),{},Object(R.a)({},a,r))}))},x=function(e,t){m.current[e].current.focus(),window.alert(t)},f=function(){var e,t=Object(N.a)(p);try{for(t.s();!(e=t.n()).done;){var a=e.value,n=a.name,r=a.pattern,c=a.errorMessage,s=o[n];if(""===s||null===s||void 0===s)return x(n,c.empty),!0;if(null!==r&&!r.test(s))return x(n,c.pattern),!0}}catch(l){t.e(l)}finally{t.f()}return!1},w=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f()){e.next=2;break}return e.abrupt("return",!1);case 2:return e.prev=3,e.next=6,v(Object(S.a)({},o));case 6:t=e.sent,n=t.data.message,window.alert(n),u(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.error("error",e.t0);case 15:case 16:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(d.a.mark((function e(){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f()){e.next=2;break}return e.abrupt("return",!1);case 2:return e.prev=3,e.next=6,k(t,Object(S.a)({},o));case 6:a=e.sent,n=a.data.message,window.alert(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error("error",e.t0);case 14:case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var a=Object(b.a)(d.a.mark((function a(){var n,r,c,s;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!window.confirm("\uad00\ub9ac\uc790 \uc815\ubcf4\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){a.next=15;break}return a.prev=1,a.next=4,g(t);case 4:n=a.sent,r=n.data,c=r.status,s=r.message,window.alert(s),200===c&&e.history.push("/admin"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),console.error("error",a.t0);case 14:case 15:case 16:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(){return a.apply(this,arguments)}}();return Object(n.jsx)(n.Fragment,{children:(void 0===t||Number(t)===o.admin_seq)&&Object(n.jsxs)("div",{className:"submit-form",children:[p.map((function(e){var t=e.name,a=e.label,r=e.type,c=e.maxLength;return Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:t,children:a}),Object(n.jsx)("input",{ref:m.current[t],type:r,className:"form-control",id:t,value:o[t],onChange:h,autoComplete:"off",name:t,maxLength:c})]},t)})),void 0!==t&&Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"\ub4f1\ub85d\uc77c"}),Object(n.jsx)("div",{children:Object(n.jsx)("span",{children:o.reg_date})})]}),Object(n.jsx)(i.b,{to:"/admin",className:"btn btn-primary",children:"\ubaa9\ub85d\uc73c\ub85c"}),void 0!==t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{onClick:C,className:"btn btn-danger ml-1",children:"\uc0ad\uc81c"}),Object(n.jsx)("button",{onClick:y,className:"btn btn-success ml-1",children:"\uc218\uc815"})]}):Object(n.jsx)("button",{onClick:w,className:"btn btn-success ml-1",children:"\ub4f1\ub85d"})]})})};var A=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Error Page"})})};var z=function(){return Object(n.jsxs)(i.a,{basename:"/react-server-side-table_crud",children:[Object(n.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",style:{minWidth:"1140px"},children:Object(n.jsx)("a",{href:"".concat("/react-server-side-table_crud","/"),className:"navbar-brand",children:"REACT CRUD"})}),Object(n.jsx)("div",{className:"container mt-3",style:{width:"1140px",maxWidth:"none"},children:Object(n.jsxs)(o.d,{children:[Object(n.jsx)(o.b,{exact:!0,path:["/","/admin"],component:C}),Object(n.jsx)(o.b,{exact:!0,path:"/admin",component:C}),Object(n.jsx)(o.b,{exact:!0,path:"/admin/new",component:q}),Object(n.jsx)(o.b,{exact:!0,path:"/admin/:id",component:q}),Object(n.jsx)(o.b,{exact:!0,path:"/error",component:A}),Object(n.jsx)(o.a,{to:"/error"})]})})]})};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root"))},56:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.f0778d99.chunk.js.map