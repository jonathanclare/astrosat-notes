(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){},23:function(e,t,n){e.exports=n(37)},28:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(13),c=n.n(r),i=(n(28),n(14)),l=n(15),u=n(21),s=n(16),m=n(22),p=n(20),d=n(39),E=n(42),f=n(41),h=n(40),O=n(11),v=n(6),b=function(e,t,n){var a;return function(){var o=this,r=arguments,c=n&&!a;clearTimeout(a),a=setTimeout(function(){a=null,n||e.apply(o,r)},t||250),c&&e.apply(o,r)}},g=Object(v.b)({notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTES":return Object(O.a)(t.notes);case"CLEAR_NOTES":return[];case"ADD_NOTE":return Object(O.a)(e).concat([t.note]);case"UPDATE_NOTE":return e.map(function(e){return e.id===t.note.id?t.note:e});case"REMOVE_NOTE":return e.filter(function(e){return e.id!==t.id});default:return e}}}),w=function(e){try{var t=localStorage.getItem(e);if(null===t)return;return JSON.parse(t)}catch(n){return}}("astrosat-notes-app");console.log("PERSISTED STATE FROM LOCAL STORAGE:"),console.log(w);var S=Object(v.c)(g,w);S.subscribe(b(function(){!function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.log(n)}}("astrosat-notes-app",{notes:S.getState().notes})}));var T=S,N=n(19),y=n.n(N),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,{store:T},o.a.createElement(d.a,{basename:"/astrosat-notes"},o.a.createElement("div",{className:y.a.app},o.a.createElement(E.a,null,o.a.createElement(f.a,{exact:!0,path:"/",component:A}),o.a.createElement(f.a,{exact:!0,path:"/add",component:A}),o.a.createElement(f.a,{exact:!0,path:"/edit/:id",component:k}),o.a.createElement(f.a,{exact:!0,path:"/:id",component:x}),o.a.createElement(h.a,{to:"/"})))))}}]),t}(a.Component),A=function(e){return o.a.createElement("div",null,"Add Note")},k=function(e){return o.a.createElement("div",null,"Edit Note")},x=function(e){return o.a.createElement("div",null,"Show Note")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.5f5b9323.chunk.js.map