(this["webpackJsonpme-social-network"]=this["webpackJsonpme-social-network"]||[]).push([[6],{295:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return n}));var o=function(t){if(!t)return"Field is required"},n=function(t){return function(e){if(e.length>t)return"Max lenght is ".concat(t," symbols")}}},304:function(t,e,r){"use strict";var o=r(2),n=r.n(o),i=r(0),c=r.n(i),a=r(16),s=r.n(a),u=r(10),p=r.n(u),h=r(38),f=r(64),l=r.n(f),b={},m=0,d=function(t){var e=t,r=b[e]||(b[e]={});if(r[t])return r[t];var o=l.a.compile(t);return m<1e4&&(r[t]=o,m++),o},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("/"===t)return t;var r=d(t);return r(e,{pretty:!0})},y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t};function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}var x=function(t){function e(){return O(this,e),v(this,t.apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},e.prototype.componentWillMount=function(){p()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},e.prototype.componentDidMount=function(){this.isStatic()||this.perform()},e.prototype.componentDidUpdate=function(t){var e=Object(h.createLocation)(t.to),r=Object(h.createLocation)(this.props.to);Object(h.locationsAreEqual)(e,r)?s()(!1,"You tried to redirect to the same route you're currently on: \""+r.pathname+r.search+'"'):this.perform()},e.prototype.computeTo=function(t){var e=t.computedMatch,r=t.to;return e?"string"===typeof r?j(r,e.params):y({},r,{pathname:j(r.pathname,e.params)}):r},e.prototype.perform=function(){var t=this.context.router.history,e=this.props.push,r=this.computeTo(this.props);e?t.push(r):t.replace(r)},e.prototype.render=function(){return null},e}(n.a.Component);x.propTypes={computedMatch:c.a.object,push:c.a.bool,from:c.a.string,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired},x.defaultProps={push:!1},x.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired}).isRequired,staticContext:c.a.object}).isRequired};var g=x;e.a=g},305:function(t,e,r){"use strict";r.r(e);r(2);var o=r(122),n=r(123),i=r(295),c=r(65),a=r(18),s=r(29),u=r(304),p=r(80),h=r.n(p),f=r(1),l=Object(n.a)({form:"Login"})((function(t){return Object(f.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(f.jsx)("div",{children:Object(f.jsx)(o.a,{placeholder:"Email",name:"email",validate:[i.b],component:c.a})}),Object(f.jsx)("div",{children:Object(f.jsx)(o.a,{placeholder:"Password",name:"password",validate:[i.b],component:c.a})}),Object(f.jsxs)("div",{children:[Object(f.jsx)(o.a,{component:c.a,name:"rememberMe",type:"checkbox"})," remember my"]}),t.error&&Object(f.jsx)("div",{className:h.a.formSummaryError,children:t.error}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Login"})})]})}));e.default=Object(a.b)((function(t){return{isAuth:t.auth.isAuth}}),{login:s.c})((function(t){return t.isAuth?Object(f.jsx)(u.a,{to:"/profile"}):Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsx)(l,{onSubmit:function(e){t.login(e.email,e.password,e.rememberMe)}})]})}))}}]);
//# sourceMappingURL=6.2767e698.chunk.js.map