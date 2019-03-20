(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/logo.9d56970a.svg"},29:function(e,t,a){e.exports=a(58)},35:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),o=a.n(s),l=(a(35),a(60)),c=a(6),u=a(7),i=a(9),h=a(8),m=a(10),g=a(59),p=a(17),d=a(61),f=a(27),E=a(12),b=a.n(E);b.a.defaults.withCredentials=!0,console.log("https://diggitydoo.herokuapp.com/api");var v=b.a.create({baseURL:"/api",withCredentials:!0}),C=function(e){if(console.error(e),e.response&&e.response.data)throw console.error("API response",e.response.data),e.response.data.message;throw e},O={service:v,isLoggedIn:function(){return null!=localStorage.getItem("user")},getLocalStorageUser:function(){return JSON.parse(localStorage.getItem("user"))},signup:function(e){return v.post("/signup",e).then(function(e){return localStorage.setItem("user",JSON.stringify(e.data)),e.data}).catch(C)},login:function(e,t){return v.post("/login",{username:e,password:t}).then(function(e){return localStorage.setItem("user",JSON.stringify(e.data)),e.data}).catch(C)},logout:function(){return localStorage.removeItem("user"),v.get("/logout")}},j=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log(O.isLoggedIn()),console.log(O.getLocalStorageUser()),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_SERVER:"https://diggitydoo.herokuapp.com/api",REACT_APP_TEST:"sup"})),b.a.get("https://diggitydoo.herokuapp.com/whatever").then(function(e){console.log(e,"res")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Home"},r.a.createElement("h2",null,"Home"),r.a.createElement("p",null,"This is a sample project with the MERN stack"))}}]),t}(n.Component),S=a(13),w=a(11),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={username:"",password:"",message:null},a.handleInputChange=a.handleInputChange.bind(Object(w.a)(Object(w.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleInputChange",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"handleClick",value:function(e){var t=this;e.preventDefault(),O.login(this.state.username,this.state.password).then(function(e){t.props.setUser(),t.props.history.push("/")}).catch(function(e){return t.setState({message:e.toString()})})}},{key:"render",value:function(){var e=this;return console.log(),r.a.createElement("div",{className:"Login"},r.a.createElement("h2",null,"Login"),r.a.createElement("form",null,"Username: ",r.a.createElement("input",{type:"text",value:this.state.username,name:"username",onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Password: ",r.a.createElement("input",{type:"password",value:this.state.password,name:"password",onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.handleClick(t)}},"Login")),this.state.message&&r.a.createElement("div",{className:"info info-danger"},this.state.message))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={username:"",name:"",password:"",message:null},a.handleInputChange=a.handleInputChange.bind(Object(w.a)(Object(w.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleInputChange",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"handleClick",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,name:this.state.name,password:this.state.password};O.signup(a).then(function(e){console.log("SUCCESS!"),t.props.setUser(),t.props.history.push("/")}).catch(function(e){return t.setState({message:e.toString()})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Signup"},r.a.createElement("h2",null,"Signup"),r.a.createElement("form",null,"Username: ",r.a.createElement("input",{type:"text",value:this.state.username,name:"username",onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Name: ",r.a.createElement("input",{type:"text",value:this.state.name,name:"name",onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Password: ",r.a.createElement("input",{type:"password",value:this.state.password,name:"password",onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(t){return e.handleClick(t)}},"Signup")),this.state.message&&r.a.createElement("div",{className:"info info-danger"},this.state.message))}}]),t}(n.Component),I=a(25),U=a.n(I),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={countries:[],user:{}},a.setUser=function(){O.isLoggedIn()?a.setState({user:O.getLocalStorageUser()}):a.setState({user:{}})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setUser()}},{key:"handleLogoutClick",value:function(e){O.logout(),this.setUser()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:U.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-title"},"MERN Boilerplate"),"user: ",this.state.user.username,r.a.createElement(g.a,{to:"/",exact:!0},"Home"),!O.isLoggedIn()&&r.a.createElement(g.a,{to:"/signup"},"Signup"),!O.isLoggedIn()&&r.a.createElement(g.a,{to:"/login"},"Login"),O.isLoggedIn()&&r.a.createElement(p.a,{to:"/",onClick:function(t){return e.handleLogoutClick(t)}},"Logout"),r.a.createElement(g.a,{to:"/secret"},"Secret")),r.a.createElement(d.a,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(j,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(f.a,{path:"/signup",render:function(t){return r.a.createElement(k,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(f.a,{path:"/login",render:function(t){return r.a.createElement(y,Object.assign({},t,{setUser:e.setUser}))}}),r.a.createElement(f.a,{render:function(){return r.a.createElement("h2",null,"404")}})))}}]),t}(n.Component);o.a.render(r.a.createElement(l.a,null,r.a.createElement(L,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.39852c95.chunk.js.map