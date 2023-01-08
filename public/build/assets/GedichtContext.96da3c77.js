import{_ as p}from"./InputLabel.c6f2ae0b.js";import{q as w,o as c,g as _,a as l,w as o,e as a,d as e,s as g,b as m,t as f,F as h,z as x,c as y,A as $}from"./app.185df2b5.js";import{_ as k}from"./Dropdown.e3f68e29.js";import{_ as b}from"./PrimaryButton.fa295825.js";import{_ as C}from"./SecondaryButton.50ff261f.js";const j={class:"grid gap-y-3"},B={class:"w-full"},G={class:"inline-flex w-full rounded-md"},S={type:"button",class:"transition ease-in-out duration-150 text-white flex justify-between items-center form-control w-full p-3"},A={class:"text-white"},L=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),V={class:"grid p-4 gap-5 w-full grid-cols-3"},z={class:"text-white"},N={__name:"AddGenre",props:{genres:Array},emits:["genre_select"],setup(r,{emit:u}){const n=r,t=w(n.genres[0]);function s(d){Object.assign(t,d),u("genre_select",d)}return(d,J)=>{const v=$("Link");return c(),_("div",j,[l(p,null,{default:o(()=>[a("Voeg een genre toe aan je gedicht.")]),_:1}),e("div",B,[l(k,{align:"right",width:"96"},{trigger:o(()=>[e("span",G,[e("button",S,[e("div",{class:"rounded-full justify-center items-center px-4 py-1 flex gap-3 color-white",style:g({backgroundColor:m(t).color})},[e("h2",A,f(m(t).name),1)],4),L])])]),content:o(()=>[e("div",V,[(c(!0),_(h,null,x(n.genres,i=>(c(),y(v,{key:i.uuid,onClick:M=>s(i),class:"rounded-full justify-center items-center px-4 py-1 flex gap-3 color-white",style:g({backgroundColor:i.color})},{default:o(()=>[e("h2",z,f(i.name),1)]),_:2},1032,["onClick","style"]))),128))])]),_:1})])])}}},D={class:"grid gap-y-5"},F={class:"grid gap-y-3"},I=["value"],O={class:"grid gap-y-3"},q=["value"],E={class:"stepped-form-buttons"},R={__name:"GedichtContext",props:{genres:Array,auteur:String,context:String,genre:Object},emits:["update:auteur","update:context","update:genre","prevStep"],setup(r){const u=r;return(n,t)=>(c(),_(h,null,[e("div",D,[e("div",F,[l(p,null,{default:o(()=>[a("Door wie is je gedicht geschreven?*")]),_:1}),e("input",{value:r.auteur,onInput:t[0]||(t[0]=s=>n.$emit("update:auteur",s.target.value)),class:"form-control w-full",type:"text",spellcheck:"false",placeholder:"John doe..."},null,40,I)]),e("div",O,[l(p,null,{default:o(()=>[a("Context bij jou gedicht")]),_:1}),e("textarea",{value:r.context,onInput:t[1]||(t[1]=s=>n.$emit("update:context",s.target.value)),class:"form-control"},null,40,q)]),l(N,{onGenre_select:t[2]||(t[2]=s=>n.$emit("update:genre",s.id)),genres:u.genres},null,8,["genres"])]),e("div",E,[l(C,{onClick:t[3]||(t[3]=s=>n.$emit("prevStep"))},{default:o(()=>[a("Back")]),_:1}),l(b,{onClick:t[4]||(t[4]=s=>n.$emit("submit"))},{default:o(()=>[a("Gedicht opslaan")]),_:1})])],64))}};export{R as default};
