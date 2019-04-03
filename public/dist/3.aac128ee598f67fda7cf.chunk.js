webpackJsonp([3],{43:function(t,n,e){"use strict";function r(t){s||e(56)}Object.defineProperty(n,"__esModule",{value:!0});var o=e(51),i=e(57),s=!1,a=e(15),u=r,c=a(o.a,i.a,!1,u,"data-v-0d169be5",null);c.options.__file="src\\views\\login.vue",n.default=c.exports},48:function(t,n,e){"use strict";var r=e(16),o={env:r.a,BASE_URL:"http://47.99.82.242:3000"};n.a=o},49:function(t,n,e){"use strict";e.d(n,"f",function(){return o}),e.d(n,"h",function(){return i}),e.d(n,"g",function(){return s}),e.d(n,"e",function(){return a}),e.d(n,"d",function(){return c}),e.d(n,"c",function(){return f}),e.d(n,"i",function(){return p}),e.d(n,"a",function(){return u}),e.d(n,"b",function(){return l});var r=e(50),o=function(t){return r.a.post("/login",t)},i=function(t){return r.a.post("/register",t)},s=function(){return r.a.get("/loginout")},a=function(t){return r.a.post("/posts",t)},u=function(t){return r.a.post("/posts/del",t)},c=function(t){return r.a.get("/posts/filter/search?page="+t)},l=function(t){return r.a.get("/posts/filter/search?page="+t+"&uid=0")},f=function(t){return r.a.get("/posts/"+t)},p=function(t){return r.a.put("/posts",t)}},50:function(t,n,e){"use strict";var r=e(4),o=e.n(r),i=e(48),s=i.a.BASE_URL,a=o.a.create({baseURL:s,timeout:5e3,withCredentials:!0});a.interceptors.response.use(function(t){return 10099===t.data.code?window.location.href="/login":0!==t.data.code&&alert(t.data.msg),t.data},function(t){return alert(t),response.data}),n.a=a},51:function(t,n,e){"use strict";var r=e(49);n.a={data:function(){return{formInline:{nickname:"",password:""},ruleInline:{nickname:[{required:!0,message:"Please fill in the nickname name",trigger:"blur"}],password:[{required:!0,message:"Please fill in the password.",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"}]}}},methods:{loginSubmit:function(t){var n=this,e=this;this.$refs[t].validate(function(t){t?Object(r.f)(n.formInline).then(function(t){0===t.code&&e.$router.push({path:"/root/index"})}).catch(function(t){console.log(t)}):n.$Message.error("Fail!")})},registerSubmit:function(t){var n=this;this.$refs[t].validate(function(t){t?Object(r.h)(n.formInline).then(function(t){alert("注册成功")}).catch(function(t){console.log(t)}):n.$Message.error("Fail!")})}}}},56:function(t,n){},57:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Row",{staticClass:"login",attrs:{type:"flex",justify:"center",align:"middle"}},[e("Form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleInline,inline:""}},[e("FormItem",{attrs:{prop:"nickname"}},[e("Input",{attrs:{type:"text",placeholder:"nickname"},model:{value:t.formInline.nickname,callback:function(n){t.$set(t.formInline,"nickname",n)},expression:"formInline.nickname"}},[e("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),t._v(" "),e("FormItem",{attrs:{prop:"password"}},[e("Input",{attrs:{type:"password",placeholder:"Password"},model:{value:t.formInline.password,callback:function(n){t.$set(t.formInline,"password",n)},expression:"formInline.password"}},[e("Icon",{attrs:{slot:"prepend",type:"ios-locked-outline"},slot:"prepend"})],1)],1),t._v(" "),e("FormItem",[e("Button",{attrs:{type:"primary"},on:{click:function(n){t.loginSubmit("formInline")}}},[t._v("登录")]),t._v(" "),e("Button",{attrs:{type:"primary"},on:{click:function(n){t.registerSubmit("formInline")}}},[t._v("注册")])],1)],1)],1)},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};n.a=i}});