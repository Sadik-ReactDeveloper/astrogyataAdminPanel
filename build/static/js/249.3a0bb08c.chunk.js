(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[249],{2041:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t(51),l=t(13),r=t(14),s=t(16),c=t(15),i=t(0),o=t.n(i),u=t(1093),m=t(1094),d=t(1091),p=t(1092),f=t(1095),h=t(173),b=t(1098),g=t(808),v=t(807),E=t(797),y=t(117),O=t(27),j=t(806),x=t.n(j),N=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),y.a.post("/admin/add_plan",r.state).then((function(e){console.log(e),x()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/packagemanager/allPlan")})).catch((function(e){console.log(e)}))},r.state={title:"",amount:""},r}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(m.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(d.a,{listTag:"div"},o.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),o.a.createElement(p.a,{href:"/app/packagemanager/allPlan",tag:"a"},"plan List"),o.a.createElement(p.a,{active:!0},"Add Plan"))))),o.a.createElement(f.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(m.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Plan")),o.a.createElement(m.a,null,o.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return O.a.push("/app/packagemanager/allPlan")}},"Back"))),o.a.createElement(b.a,null,o.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,null,o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"title"),o.a.createElement(E.a,{required:!0,type:"text",name:"title",placeholder:"",value:this.state.title,onChange:this.changeHandler})),o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Amount"),o.a.createElement(E.a,{required:!0,type:"amount",name:"amount",placeholder:"Enter Amount",value:this.state.amount,onChange:this.changeHandler}))),o.a.createElement(u.a,null,o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(i.Component)},797:function(e,a,t){"use strict";var n=t(5),l=t(9),r=t(11),s=t(12),c=t(0),i=t.n(c),o=t(1),u=t.n(o),m=t(4),d=t.n(m),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,s=e.bsSize,c=e.valid,o=e.invalid,u=e.tag,m=e.addon,h=e.plaintext,b=e.innerRef,g=Object(l.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,E=new RegExp("\\D","g"),y=u||("select"===r||"textarea"===r?r:"input"),O="form-control";h?(O+="-plaintext",y=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":v&&(O=m?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=g.size,delete g.size);var j=Object(p.mapToCssModules)(d()(a,o&&"is-invalid",c&&"is-valid",!!s&&"form-control-"+s,O),t);return("input"===y||u&&"function"===typeof u)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(y,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":o}))},a}(i.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b}}]);
//# sourceMappingURL=249.3a0bb08c.chunk.js.map