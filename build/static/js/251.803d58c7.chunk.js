(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[251],{2042:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t(51),l=t(13),s=t(14),c=t(16),i=t(15),r=t(0),o=t.n(r),m=t(1093),u=t(1094),p=t(1091),d=t(1092),f=t(1095),h=t(173),g=t(1098),b=t(808),v=t(807),E=t(797),y=t(117),O=t(27),x=t(806),j=t.n(x),N=function(e){Object(c.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=s.props.match.params.id;y.a.post("/admin/editplan/".concat(a),s.state).then((function(e){console.log(e),j()("Success!","Submitted SuccessFull!","success"),s.props.history.push("/app/packagemanager/allPlan")})).catch((function(e){console.log(e)}))},s.state={title:"",amount:"",status:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;y.a.get("/admin/getoneplan/".concat(a)).then((function(a){console.log(a),e.setState({title:a.data.data.title,amount:a.data.data.amount,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(u.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(p.a,{listTag:"div"},o.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),o.a.createElement(d.a,{href:"/app/packagemanager/allPlan",tag:"a"},"Plan List"),o.a.createElement(d.a,{active:!0},"Edit Plan"))))),o.a.createElement(f.a,null,o.a.createElement(m.a,{className:"m-2"},o.a.createElement(u.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Plan")),o.a.createElement(u.a,null,o.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return O.a.push("/app/packagemanager/allPlan")}},"Back"))),o.a.createElement(g.a,null,o.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(m.a,null,o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"title"),o.a.createElement(E.a,{type:"text",name:"title",placeholder:"",value:this.state.title,onChange:this.changeHandler})),o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,null,"Amount"),o.a.createElement(E.a,{type:"amount",name:"amount",placeholder:"Enter Amount",value:this.state.amount,onChange:this.changeHandler})),o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(v.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),o.a.createElement(m.a,null,o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(r.Component)},797:function(e,a,t){"use strict";var n=t(5),l=t(9),s=t(11),c=t(12),i=t(0),r=t.n(i),o=t(1),m=t.n(o),u=t(4),p=t.n(u),d=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:d.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,c=e.bsSize,i=e.valid,o=e.invalid,m=e.tag,u=e.addon,h=e.plaintext,g=e.innerRef,b=Object(l.a)(e,f),v=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),y=m||("select"===s||"textarea"===s?s:"input"),O="form-control";h?(O+="-plaintext",y=m||"input"):"file"===s?O+="-file":"range"===s?O+="-range":v&&(O=u?null:"form-check-input"),b.size&&E.test(b.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=b.size,delete b.size);var x=Object(d.mapToCssModules)(p()(a,o&&"is-invalid",i&&"is-valid",!!c&&"form-control-"+c,O),t);return("input"===y||m&&"function"===typeof m)&&(b.type=s),b.children&&!h&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(d.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),r.a.createElement(y,Object(n.a)({},b,{ref:g,className:x,"aria-invalid":o}))},a}(r.a.Component);g.propTypes=h,g.defaultProps={type:"text"},a.a=g}}]);
//# sourceMappingURL=251.803d58c7.chunk.js.map