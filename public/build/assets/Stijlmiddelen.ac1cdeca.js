import{_ as i}from"./AuthenticatedLayout.25bdcf4c.js";import{o as a,c as l,w as s,d as e,a as n,e as d,g as c,A as m,b as _,L as u,s as p,t as f,F as h}from"./app.0007a6e5.js";import{_ as g}from"./SecondaryButton.45423d5f.js";import"./ApplicationLogo.f77b4c69.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Dropdown.a53e1b92.js";import"./Container.d3840509.js";const x={class:"flex justify-between items-center"},y=e("h1",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Stijlmiddelen ",-1),k={class:"flex place-items-center gap-5"},w=e("input",{placeholder:"Zoek een stijlmiddel",type:"text",class:"form-control"},null,-1),b={class:"md:max-w-6xl mx-auto py-12"},j={class:"grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-0"},v={class:"text-white"},Z={__name:"Stijlmiddelen",props:{stijlmiddelen:Array},setup(o){return(r,B)=>(a(),l(i,null,{header:s(()=>[e("div",x,[y,e("div",k,[w,n(g,null,{default:s(()=>[d("Zoeken")]),_:1})])])]),default:s(()=>[e("div",b,[e("div",j,[(a(!0),c(h,null,m(o.stijlmiddelen,t=>(a(),l(_(u),{key:t.uuid,href:r.route("stijlmiddel.detail",t.uuid),class:"card flex gap-3"},{default:s(()=>[e("span",{class:"p-2 rounded-full h-full w-2",style:p({backgroundColor:t.color})},null,4),e("h2",v,f(t.name),1)]),_:2},1032,["href"]))),128))])])]),_:1}))}};export{Z as default};