(this["webpackJsonpnumber-facts"]=this["webpackJsonpnumber-facts"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),i=(a(12),a(3)),s=a(4),l=a(6),m=a(5),u=(a(13),a(14),a(15),function(e){var t=e.onSearch;return r.a.createElement("form",{onSubmit:t},r.a.createElement("input",{placeholder:"enter the number",id:"number",name:"number",type:"text"}),r.a.createElement("button",null,"Search!"))}),d=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).onSearch=function(t){t.preventDefault();var a=new FormData(t.target).get("number");fetch("http://numbersapi.com/".concat(a)).then((function(e){return e.text()})).then((function(t){return e.setState({fact:t})})),console.log("data set"),console.log(e.state.fact)},e.state={fact:"enter a number to get a cool fact!"},e}return Object(s.a)(a,[{key:"render",value:function(){return console.log(4),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{id:"stars2"}),r.a.createElement("div",{id:"stars3"}),r.a.createElement("div",{id:"title"},r.a.createElement("div",{className:"tc"},r.a.createElement("h2",{className:"garamond"}," Enter a number you wanna know a random trivia about: "),r.a.createElement(u,{onSearch:this.onSearch}),r.a.createElement("h2",{className:"garamond"}," Here's your trivia "),r.a.createElement("p",{className:"garamond"}," ",this.state.fact))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.1f8455a3.chunk.js.map