import{u as n,o as d,c as l,w as t,a,b as o,H as c,d as e,e as p,n as f,f as u}from"./app.3bc86724.js";import{_}from"./GuestLayout.79340810.js";import{_ as w,a as b}from"./TextInput.5b1b9dbc.js";import{_ as x}from"./InputLabel.a69439fd.js";import{_ as g}from"./PrimaryButton.331c1263.js";import"./ApplicationLogo.fdf79451.js";import"./_plugin-vue_export-helper.cdc0426e.js";const h=e("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y=["onSubmit"],V={class:"flex justify-end mt-4"},S={__name:"ConfirmPassword",setup(v){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(C,r)=>(d(),l(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),h,e("form",{onSubmit:u(i,["prevent"])},[e("div",null,[a(x,{for:"password",value:"Password"}),a(w,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(b,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",V,[a(g,{class:f(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],40,y)]),_:1}))}};export{S as default};