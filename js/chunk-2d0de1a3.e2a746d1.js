(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de1a3"],{"83e7":function(e,n,o){"use strict";o.r(n);var t=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("zmjd-login",{attrs:{"current-page":e.currentPage,"back-type":e.backType,"show-login-popup":e.showLoginPopup,"phone-login-type":e.phoenLoginType},on:{openPhoneLogin:e.openPhoneLogin,onNavigation:e.onNavigation,openPWDLogin:e.openPWDLogin,openPhoneCode:e.openPhoneCode,openRegister:e.openRegister,openForgetPWD:e.openForgetPWD,sendSmsCode:e.sendSmsCode}})],1)},i=[],s=(o("fb6a"),{name:"Login",data:function(){return{currentPage:"mainLogin",crumbs:[],showLoginPopup:!0,codePageType:{type:String,default:"login"},phoenLoginType:"login"}},computed:{backType:function(){return this.crumbs.length>1?"back":"close"}},mounted:function(){this.crumbs.push(this.currentPage)},methods:{openWXLogin:function(){},openPhoneLogin:function(){this.currentPage="phoneLogin",this.crumbs=["phoneLogin"]},openPhoneCode:function(e){this.phone=e.phoneNum,this.codeType=e.codeType,this.currentPage="phoneCode",this.crumbs.push("phoneCode")},openRegister:function(){this.currentPage="registerPhone",this.crumbs.push("registerPhone"),this.phoenLoginType="register"},openPWDLogin:function(){this.currentPage="pwdLogin",this.crumbs=["pwdLogin"]},openForgetPWD:function(){this.currentPage="registerPhone",this.crumbs.push("registerPhone"),this.phoenLoginType="forgetpwd"},savePWD:function(){this.currentPage="pwdLogin",this.crumbs=["pwdLogin"]},sendSmsCode:function(e){},onNavigation:function(){this.crumbs.length>1?(this.crumbs=this.crumbs.slice(0,this.crumbs.length-1),this.currentPage=this.crumbs[this.crumbs.length-1],this.showLoginPopup=!0):this.showLoginPopup=!1}}}),r=s,p=o("2877"),h=Object(p["a"])(r,t,i,!1,null,"8be8e4ba",null);n["default"]=h.exports}}]);