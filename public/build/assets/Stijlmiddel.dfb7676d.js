import{_ as c}from"./AuthenticatedLayout.25bdcf4c.js";import{_ as r}from"./InputLabel.8dfe1ccd.js";import{o as a,c as n,w as l,d as e,t as i,g as d,k as m,A as g,a as h,e as _,F as x}from"./app.0007a6e5.js";import"./ApplicationLogo.f77b4c69.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Dropdown.a53e1b92.js";import"./Container.d3840509.js";const p={class:"flex flex-col gap-y-5"},f={class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},u={key:0,class:"text-white font-sans tracking-wide text-md font-light"},y={class:"md:max-w-6xl mx-auto py-12"},k={class:"grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-0"},j={class:"text-white"},S={__name:"Stijlmiddel",props:{stijlmiddel:Object,fragments:Array},setup(s){const o=s;return console.log(o.fragments),(w,v)=>(a(),n(c,null,{header:l(()=>[e("div",p,[e("h1",f,i(s.stijlmiddel.name),1),s.stijlmiddel.description?(a(),d("p",u,i(s.stijlmiddel.description),1)):m("",!0)])]),default:l(()=>[e("div",y,[e("div",k,[(a(!0),d(x,null,g(o.fragments,t=>(a(),d("div",{key:t.id,class:"card flex flex-col gap-y-3"},[h(r,null,{default:l(()=>[_("Uit het gedicht "+i(t.analyse.gedicht.titel),1)]),_:2},1024),e("h2",j,i(t.analyse.gedicht.gedicht.slice(t.start,t.end)),1)]))),128))])])]),_:1}))}};export{S as default};