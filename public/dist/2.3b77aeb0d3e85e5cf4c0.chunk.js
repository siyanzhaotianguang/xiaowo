webpackJsonp([2],{43:function(t,n,e){"use strict";function r(t){s||e(53)}Object.defineProperty(n,"__esModule",{value:!0});var o=e(49),i=e(54),s=!1,a=e(15),u=r,c=a(o.a,i.a,!1,u,"data-v-0d169be5",null);c.options.__file="src\\views\\login.vue",n.default=c.exports},47:function(t,n,e){"use strict";e.d(n,"d",function(){return o}),e.d(n,"f",function(){return i}),e.d(n,"e",function(){return s}),e.d(n,"c",function(){return a}),e.d(n,"b",function(){return u}),e.d(n,"a",function(){return c}),e.d(n,"g",function(){return l});var r=e(48),o=function(t){return r.a.post("/login",t)},i=function(t){return r.a.post("/register",t)},s=function(){return r.a.get("/loginout")},a=function(t){return r.a.post("/posts",t)},u=function(t){return r.a.get("/posts/filter/search?page="+t)},c=function(t){return r.a.get("/posts/"+t)},l=function(t){return r.a.put("/posts",t)}},48:function(t,n,e){"use strict";var r=e(4),o=e.n(r),i=o.a.create({baseURL:"http://localhost:3000",timeout:5e3,withCredentials:!0});i.interceptors.response.use(function(t){return 0!==t.data.code&&alert(t.data.msg),t.data},function(t){return alert(t),response.data}),n.a=i},49:function(t,n,e){"use strict";var r=e(47);n.a={data:function(){return{formInline:{nickname:"",password:""},ruleInline:{nickname:[{required:!0,message:"Please fill in the nickname name",trigger:"blur"}],password:[{required:!0,message:"Please fill in the password.",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"}]}}},mounted:function(){var t=this;Object(r.d)().then(function(n){0===n.code&&t.$router.push({path:"/root/index"})}).catch(function(t){console.log(t)})},methods:{loginSubmit:function(t){var n=this,e=this;this.$refs[t].validate(function(t){t?Object(r.d)(n.formInline).then(function(t){e.$router.push({path:"/root/index"})}).catch(function(t){console.log(t)}):n.$Message.error("Fail!")})},registerSubmit:function(t){var n=this;this.$refs[t].validate(function(t){t?Object(r.f)(n.formInline).then(function(t){alert("注册成功")}).catch(function(t){console.log(t)}):n.$Message.error("Fail!")})}}}},53:function(t,n){},54:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("Row",{staticClass:"login",attrs:{type:"flex",justify:"center",align:"middle"}},[e("Form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleInline,inline:""}},[e("FormItem",{attrs:{prop:"nickname"}},[e("Input",{attrs:{type:"text",placeholder:"nickname"},model:{value:t.formInline.nickname,callback:function(n){t.$set(t.formInline,"nickname",n)},expression:"formInline.nickname"}},[e("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),t._v(" "),e("FormItem",{attrs:{prop:"password"}},[e("Input",{attrs:{type:"password",placeholder:"Password"},model:{value:t.formInline.password,callback:function(n){t.$set(t.formInline,"password",n)},expression:"formInline.password"}},[e("Icon",{attrs:{slot:"prepend",type:"ios-locked-outline"},slot:"prepend"})],1)],1),t._v(" "),e("FormItem",[e("Button",{attrs:{type:"primary"},on:{click:function(n){t.loginSubmit("formInline")}}},[t._v("登录")]),t._v(" "),e("Button",{attrs:{type:"primary"},on:{click:function(n){t.registerSubmit("formInline")}}},[t._v("注册")])],1)],1)],1)},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};n.a=i}});