(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports={list:"NotesList_list__3-vpX",tag:"NotesList_tag__nGKBJ",tagSelected:"NotesList_tagSelected__1xmFJ",title:"NotesList_title__mX88b",date:"NotesList_date__1xsEZ"}},2:function(e,t,n){e.exports={main:"Note_main__2giOS",notesList:"Note_notesList__2sPct",notesListModal:"Note_notesListModal__ZFTUz",noteEditor:"Note_noteEditor__2ywwK",btnNotesContainer:"Note_btnNotesContainer__2Lu3y",btnNotes:"Note_btnNotes__2FJrn",headerMenu:"Note_headerMenu__3J-w-",footerMenu:"Note_footerMenu__3O6S8",date:"Note_date__1uhkv",noteTitleContainer:"Note_noteTitleContainer__1Gm-p",noteContentContainer:"Note_noteContentContainer__1VcSO",noteContentContainerEditMode:"Note_noteContentContainerEditMode__1Hp9Z",title:"Note_title__NSW3N",content:"Note_content__1ynvP",btn:"Note_btn__1SZWs",btnNew:"Note_btnNew__S5C4E",btnAlert:"Note_btnAlert__apCUb"}},27:function(e,t,n){e.exports={box:"TextBox_box__2l3mD"}},28:function(e,t,n){e.exports={box:"TextArea_box__3BeXH"}},31:function(e,t,n){},33:function(e,t,n){e.exports=n(54)},38:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(24),s=n.n(i),r=(n(38),n(7)),c=n(8),l=n(10),d=n(9),u=n(11),m=n(13),h=n(58),p=n(60),v=n(56),f=n(57),N=n(19),b=n(32),E=n(15),_=function(e,t,n){var a;return function(){var o=this,i=arguments,s=n&&!a;clearTimeout(a),a=setTimeout(function(){a=null,n||e.apply(o,i)},t||250),s&&e.apply(o,i)}},g=function(e,t){return new Date(t.date)-new Date(e.date)},O=function(e){var t=Object(b.a)({},e);return""===t.title&&(t.title="Add A Title"),t.date=(new Date).toISOString(),t},C=Object(E.b)({notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTES":return Object(N.a)(t.notes).sort(g);case"CLEAR_NOTES":return[];case"ADD_NOTE":return Object(N.a)(e).concat([O(t.note)]).sort(g);case"UPDATE_NOTE":return e.filter(function(e){return e.id===t.note.id}).length>0?e.map(function(e){return e.id===t.note.id?O(t.note):e}).sort(g):Object(N.a)(e).concat([O(t.note)]).sort(g);case"REMOVE_NOTE":return e.filter(function(e){return e.id!==t.id}).sort(g);default:return e}}}),y=function(e){try{var t=localStorage.getItem(e);if(null===t)return;return JSON.parse(t)}catch(n){return}}("astrosat-notes-app");console.log("PERSISTED STATE FROM LOCAL STORAGE:"),console.log(y);var S=Object(E.c)(C,y);S.subscribe(_(function(){console.log("SAVE STATE"),console.log(S.getState().notes),function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}("astrosat-notes-app",{notes:S.getState().notes})}));var j=S,w=n(4),T=n(27),k=n.n(T),M=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={value:void 0!==n.props.value?n.props.value:""},n.handleChange=n.handleChange.bind(Object(w.a)(Object(w.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.value!==this.props.value&&this.setState({value:this.props.value})}},{key:"handleChange",value:function(e){var t=this;this.setState({value:e.target.value},function(){return t.props.onChange(t.state.value)})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{className:k.a.box,type:"text",charSet:"utf-8",value:this.state.value,onChange:this.handleChange}))}}]),t}(a.Component),x=n(28),A=n.n(x),L=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={value:void 0!==n.props.value?n.props.value:""},n.handleChange=n.handleChange.bind(Object(w.a)(Object(w.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.value!==this.props.value&&this.setState({value:this.props.value})}},{key:"handleChange",value:function(e){var t=this;this.setState({value:e.target.value},function(){return t.props.onChange(t.state.value)})}},{key:"render",value:function(){return o.a.createElement("textarea",{className:A.a.box,charSet:"utf-8",value:this.state.value,onChange:this.handleChange})}}]),t}(a.Component),D=n(55),I=n(29),B=n.n(I),P=function(e){return B()(new Date(e).toISOString())},R=n(14),J=n.n(R),U=Object(m.b)(function(e){return{notes:e.notes}})(function(e){var t=e.notes.map(function(t){var n=t.id===e.selectedId?"".concat(J.a.tag," ").concat(J.a.tagSelected):"".concat(J.a.tag);return o.a.createElement(D.a,{key:t.id,className:n,to:"/".concat(t.id),title:"Click to view ".concat(t.title)},o.a.createElement("div",{className:J.a.title},t.title),o.a.createElement("div",{className:J.a.date},"Last Updated: ",P(t.date).fromNow()))});return t.length>0?o.a.createElement("div",{className:J.a.list},t):null}),F=n(59),W=function(e,t){return e.className+=" "+t},H=function(e,t){return e.className=e.className.replace(new RegExp("(?:^|\\s)"+t+"(?:\\s|$)")," ")},V=function(e,t){return(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(" "+t+" ")>-1},Z=function(e,t,n){var a=t.split(" "),o=!0,i=!1,s=void 0;try{for(var r,c=a[Symbol.iterator]();!(o=(r=c.next()).done);o=!0){var l=r.value;e.addEventListener(l.trim(),n)}}catch(d){i=!0,s=d}finally{try{o||null==c.return||c.return()}finally{if(i)throw s}}},G=function(e,t,n){var a=t.split(" "),o=!0,i=!1,s=void 0;try{for(var r,c=a[Symbol.iterator]();!(o=(r=c.next()).done);o=!0){var l=r.value;e.removeEventListener(l.trim(),n)}}catch(d){i=!0,s=d}finally{try{o||null==c.return||c.return()}finally{if(i)throw s}}},X=function(){var e=document.createElement("fakeelement"),t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in t)if(void 0!==e.style[n])return t[n]},z=(n(49),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).transitionEvent=X(),n.modal=o.a.createRef(),n.onClose=n.onClose.bind(Object(w.a)(Object(w.a)(n))),n.onOpen=n.onOpen.bind(Object(w.a)(Object(w.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onClose",value:function(e){if(V(e.target,"modal")){var t=this.modal.current;G(t,this.transitionEvent,this.onClose),W(e.target,"modal-hidden"),H(document.body,"hide-scrollbars"),void 0!==this.props.onClose&&this.props.onClose()}}},{key:"onOpen",value:function(e){if(V(e.target,"modal")){var t=this.modal.current;G(t,this.transitionEvent,this.onOpen),void 0!==this.props.onOpen&&this.props.onOpen()}}},{key:"close",value:function(e){if(V(e.target,"modal")||V(e.target,"modal-close")){void 0!==this.props.onClosing&&this.props.onClosing();var t=this.modal.current;Z(t,this.transitionEvent,this.onClose),H(t,"modal-active"),H(t.getElementsByClassName("modal-content")[0],"modal-content-active")}}},{key:"open",value:function(){void 0!==this.props.onOpening&&this.props.onOpening();var e=this.modal.current;Z(e,this.transitionEvent,this.onOpen),W(document.body,"hide-scrollbars"),H(e,"modal-hidden"),W(e,"modal-active"),W(e.getElementsByClassName("modal-content")[0],"modal-content-active")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{ref:this.modal,className:"modal modal-hidden",onClick:function(t){return e.close(t)}},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},void 0!==this.props.title?o.a.createElement("span",{className:"modal-title"},this.props.title):null,o.a.createElement("span",{className:"modal-close"},"\xd7")),o.a.createElement("div",{className:"modal-body"},this.props.children)))}}]),t}(a.Component)),K=n(2),$=n.n(K),q=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={changesMade:!1,mode:e.mode?e.mode:"view",id:e.id,date:(new Date).toISOString(),title:"Add A Title",content:"Add Some Content"},n._modal=o.a.createRef(),n.onTitleChange=n.onTitleChange.bind(Object(w.a)(Object(w.a)(n))),n.onContentChange=n.onContentChange.bind(Object(w.a)(Object(w.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.onNoteIdChange()}},{key:"componentDidUpdate",value:function(e,t){e.id!==this.props.id&&this.onNoteIdChange()}},{key:"onNoteIdChange",value:function(){var e=this,t={id:Math.floor(65536*(1+Math.random())).toString(16).substring(1),title:"Add A Title",content:"Add Some Content",date:(new Date).toISOString()},n=this.props.notes.filter(function(t){return t.id===e.props.id});n.length>0&&(t=n[0]),this.setState({id:t.id,title:t.title,content:t.content,date:t.date})}},{key:"onTitleChange",value:function(e){this.setState({changesMade:!0,title:e})}},{key:"onContentChange",value:function(e){this.setState({changesMade:!0,content:e})}},{key:"onSaveBtnPressed",value:function(){var e=this,t={id:this.state.id,title:this.state.title,content:this.state.content};this.setState({changesMade:!1},function(){return e.props.updateNote(t)})}},{key:"onDeleteBtnPressed",value:function(){!0===window.confirm("Are you sure you want to delete this note?")&&(this.props.removeNote(this.state.id),this.props.history.push("/"))}},{key:"openNotesListModal",value:function(){this._modal.current.open()}},{key:"render",value:function(){var e=this,t=!0===this.state.changesMade?"".concat($.a.btn," ").concat($.a.btnAlert):"".concat($.a.btn),n="edit"===this.props.mode?"".concat($.a.noteContentContainer," ").concat($.a.noteContentContainerEditMode):"".concat($.a.noteContentContainer);return o.a.createElement("div",{className:$.a.main},o.a.createElement("div",{className:$.a.notesList},o.a.createElement(U,{notes:this.props.notes,selectedId:this.state.id})),o.a.createElement("div",{className:$.a.noteEditor},o.a.createElement("div",{className:$.a.headerMenu},o.a.createElement(D.a,{className:"".concat($.a.btn," ").concat($.a.btnNew),to:"/new",title:"Add A New Note"},o.a.createElement("i",{className:"fas fa-plus"}),"\xa0\xa0New Note"),o.a.createElement("div",{className:$.a.btnNotesContainer},o.a.createElement("div",{className:"".concat($.a.btn," ").concat($.a.btnNotes),onClick:function(){return e.openNotesListModal()},title:"Open Notes List"},o.a.createElement("i",{className:"fas fa-bars"})))),o.a.createElement("div",{className:$.a.date},P(this.state.date).format("llll")),o.a.createElement("div",{className:$.a.noteTitleContainer},"edit"===this.props.mode?o.a.createElement(M,{onChange:this.onTitleChange,value:this.state.title}):o.a.createElement("div",{className:$.a.title,dangerouslySetInnerHTML:{__html:this.state.title}})),o.a.createElement("div",{className:n},"edit"===this.props.mode?o.a.createElement(L,{onChange:this.onContentChange,value:this.state.content}):o.a.createElement("div",{className:$.a.content,dangerouslySetInnerHTML:{__html:this.state.content}})),o.a.createElement("div",{className:$.a.footerMenu},"view"===this.props.mode?o.a.createElement(D.a,{className:$.a.btn,to:"/".concat(this.state.id,"/edit"),title:"Edit Note"},o.a.createElement("i",{className:"fas fa-edit"}),"\xa0\xa0Edit"):null,"view"===this.props.mode?o.a.createElement("div",{className:$.a.btn,onClick:function(){return e.onDeleteBtnPressed()},title:"Delete Note"},o.a.createElement("i",{className:"fas fa-trash"}),"\xa0\xa0Delete"):null,"edit"===this.props.mode?o.a.createElement("div",{className:t,onClick:function(){return e.onSaveBtnPressed()},title:"Save Note"},o.a.createElement("i",{className:"fas fa-save"}),"\xa0\xa0Save"):null)),o.a.createElement(z,{ref:this._modal},o.a.createElement("div",{className:$.a.notesListModal},o.a.createElement(U,{notes:this.props.notes,selectedId:this.state.id}))))}}]),t}(a.Component),Q=Object(m.b)(function(e){return{notes:e.notes}},function(e){return{addNote:function(t){return e(function(e){return{type:"ADD_NOTE",note:e}}(t))},updateNote:function(t){return e(function(e){return{type:"UPDATE_NOTE",note:e}}(t))},removeNote:function(t){return e(function(e){return{type:"REMOVE_NOTE",id:e}}(t))}}})(Object(F.a)(q)),Y=n(31),ee=n.n(Y),te=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,{store:j},o.a.createElement(h.a,{basename:"/astrosat-notes"},o.a.createElement("div",{className:ee.a.app},o.a.createElement(p.a,null,o.a.createElement(v.a,{exact:!0,path:"/",component:ne}),o.a.createElement(v.a,{exact:!0,path:"/new",component:ae}),o.a.createElement(v.a,{exact:!0,path:"/:id",component:oe}),o.a.createElement(v.a,{exact:!0,path:"/:id/edit",component:ie}),o.a.createElement(f.a,{to:"/"})))))}}]),t}(a.Component),ne=Object(m.b)(function(e){return{notes:e.notes}})(function(e){return 0===e.notes.length?ae():o.a.createElement(Q,{mode:"view",id:e.notes[0].id})}),ae=function(){var e=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return o.a.createElement(Q,{mode:"edit",id:e})},oe=function(e){return o.a.createElement(Q,{mode:"view",id:e.match.params.id})},ie=function(e){return o.a.createElement(Q,{mode:"edit",id:e.match.params.id})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.52c320bb.chunk.js.map