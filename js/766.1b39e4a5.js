"use strict";(self["webpackChunkvue_event"]=self["webpackChunkvue_event"]||[]).push([[766],{766:function(e,r,s){s.r(r),s.d(r,{default:function(){return m}});s(7658);var t=function(){var e=this,r=e._self._c;return r("div",{staticClass:"login-container"},[r("div",{staticClass:"login-box"},[r("div",{staticClass:"title-box"}),r("el-form",{ref:"Loginform",attrs:{model:e.Loginform,rules:e.loginRules}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.Loginform.username,callback:function(r){e.$set(e.Loginform,"username",r)},expression:"Loginform.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.Loginform.password,callback:function(r){e.$set(e.Loginform,"password",r)},expression:"Loginform.password"}})],1),r("el-form-item",[r("el-button",{staticClass:"btn-login",attrs:{type:"primary"},on:{click:e.loginFn}},[e._v("登录")]),r("el-link",{attrs:{type:"info"},on:{click:function(r){return e.$router.push("/reg")}}},[e._v("去注册")])],1)],1)],1)])},o=[],n=s(7877),a={data(){return{Loginform:{username:"",password:""},loginRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{pattern:/^[a-zA-Z0-9]{1,10}$/,message:"用户名必须是1-10的大小写字母数字",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"请输入正确的密码",trigger:"blur"}]}}},methods:{loginFn(){this.$refs.Loginform.validate((async e=>{if(!e)return!1;{const{data:e}=await(0,n.UO)(this.Loginform);0===e.code?(this.$message.success(e.message),this.$store.commit("updataToken",e.token),this.$router.push("/")):this.$message.error(e.message)}}))}}},i=a,l=s(1001),u=(0,l.Z)(i,t,o,!1,null,"37c72446",null),m=u.exports}}]);
//# sourceMappingURL=766.1b39e4a5.js.map