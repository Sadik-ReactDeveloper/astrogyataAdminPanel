(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[202],{2097:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return A}));var n=t(51),r=t(13),l=t(14),s=t(16),c=t(15),i=t(0),o=t.n(i),m=t(1093),u=t(1094),d=t(1091),p=t(1092),E=t(1095),h=t(173),f=t(1098),g=t(808),b=t(807),v=t(797),S=t(117),w=(t(27),t(806)),C=t.n(w),y=t(56),N=(t(798),t(826)),D=(t(815),t(827)),k=(t(803),t(804)),q=t.n(k),A=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).uploadImageCallBack=function(e){return new Promise((function(a,t){var n=new XMLHttpRequest;n.open("POST","https://api.imgur.com/3/image"),n.setRequestHeader("Authorization","Client-ID 7e1c3e366d22aa3");var r=new FormData;r.append("image",e),n.send(r),n.addEventListener("load",(function(){var e=JSON.parse(n.responseText);a(e)})),n.addEventListener("error",(function(){var e=JSON.parse(n.responseText);t(e)}))}))},l.onEditorStateChange=function(e){l.setState({editorState:e,desc:q()(Object(D.convertToRaw)(e.getCurrentContent()))})},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),S.a.post("admin/addFAQ",l.state).then((function(e){console.log(e.data),C()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/pagesetup/faq/faqList")})).catch((function(e){console.log(e)}))},l.state={title:"",desc:"",editorState:D.EditorState.createEmpty()},l}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(u.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(d.a,{listTag:"div"},o.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),o.a.createElement(p.a,{href:"/app/pagesetup/faq/faqList",tag:"a"},"FAQ List"),o.a.createElement(p.a,{active:!0},"Add FAQ"))))),o.a.createElement(E.a,null,o.a.createElement(m.a,{className:"m-2"},o.a.createElement(u.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add FAQ")),o.a.createElement(u.a,null,o.a.createElement(y.b,{render:function(e){var a=e.history;return o.a.createElement(h.a,{className:" btn btn-success float-right",onClick:function(){return a.push("/app/pagesetup/faq/faqList")}},"Back")}}))),o.a.createElement(f.a,null,o.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(m.a,null,o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(b.a,null,"Title"),o.a.createElement(v.a,{required:!0,type:"text",name:"title",placeholder:"",value:this.state.title,onChange:this.changeHandler})),o.a.createElement(m.a,null),o.a.createElement(u.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},o.a.createElement(b.a,null," Description"),o.a.createElement("br",null),o.a.createElement(N.Editor,{wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:this.onEditorStateChange,toolbar:{inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0},image:{uploadCallback:this.uploadImageCallBack,previewImage:!0,alt:{present:!0,mandatory:!0}}}}))),o.a.createElement(m.a,null,o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(i.Component)},803:function(e,a,t){}}]);
//# sourceMappingURL=202.19e4147e.chunk.js.map