webpackJsonp([5],{14:function(t,e,n){"use strict";e.a={data:function(){return{}},mounted:function(){},beforeDestroy:function(){},methods:{}}},15:function(t,e){t.exports=function(t,e,n,o,r,a){var i,u=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(i=t,u=t.default);var s="function"==typeof u?u.options:u;e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0),n&&(s.functional=!0),r&&(s._scopeId=r);var d;if(a?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=d):o&&(d=o),d){var f=s.functional,p=f?s.render:s.beforeCreate;f?(s._injectStyles=d,s.render=function(t,e){return d.call(e),p(t,e)}):s.beforeCreate=p?[].concat(p,d):[d]}return{esModule:i,exports:u,options:s}}},16:function(t,e,n){"use strict";e.a="production"},17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(5),a=n.n(r),i=n(7),u=n(20),c=n(13),s=n(38),d=n(39),f=n(41);n.n(f);o.default.use(i.a),o.default.use(c.a),o.default.use(a.a);var p={mode:"history",routes:u.a},l=new i.a(p);l.beforeEach(function(t,e,n){a.a.LoadingBar.start(),s.a.title(t.meta.title),n()}),l.afterEach(function(){a.a.LoadingBar.finish(),window.scrollTo(0,0)});var h=new c.a.Store({state:{},getters:{},mutations:{},actions:{}});new o.default({el:"#app",router:l,store:h,render:function(t){return t(d.a)}})},20:function(t,e,n){"use strict";var o=[{path:"/",redirect:"/root/index"},{path:"/login",component:function(t){return n.e(3).then(function(){var e=[n(43)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/root/",component:function(t){return n.e(0).then(function(){var e=[n(44)];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"index",component:function(t){return n.e(4).then(function(){var e=[n(45)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"post/:pid",component:function(t){return n.e(1).then(function(){var e=[n(46)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"myPost",component:function(t){return n.e(2).then(function(){var e=[n(47)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}];e.a=o},38:function(t,e,n){"use strict";var o=n(4),r=n.n(o),a=n(16),i={};i.title=function(t){t=t?t+" - Home":"等",window.document.title=t};var u="development"===a.a?"http://127.0.0.1:3000":"production"===a.a?"https://www.url.com":"https://debug.url.com";i.ajax=r.a.create({baseURL:u,timeout:3e4}),e.a=i},39:function(t,e,n){"use strict";var o=n(14),r=n(40),a=n(15),i=a(o.a,r.a,!1,null,null,null);i.options.__file="src\\app.vue",e.a=i.exports},40:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},r=[];o._withStripped=!0;var a={render:o,staticRenderFns:r};e.a=a},41:function(t,e){}},[17]);