import{i as y,y as d,o as a,g as u,b as n,d as f,t as B,x as M,k as F,F as v,s as S,c as x}from"./app.3bc86724.js";import{S as I,_ as O}from"./GedichtFragment.06f5f4dc.js";import"./_plugin-vue_export-helper.cdc0426e.js";const V={class:"relative"},$={key:0,class:"absolute"},C={class:"text-gray-100 mt-5 text-lg font-light leading-loose whitespace-pre-wrap"},P={__name:"ViewGedichtAnalyse",props:{gedicht:Object,analysis:Object},setup(_){const p=_;console.log(p.analysis);const h=y(!1),g=d({}),r=d({x:null,y:null}),s=d([]),m=y(p.gedicht.gedicht),l=d(p.analysis.highlight_fragments);j(),w(),console.log(s);function j(){s.splice(0),l.forEach(t=>{t.type="highlight",s.push(t)}),s.splice(0,0,{start:0,end:l[0].start,type:"unedited"});for(let t=0;t<l.length;t++){let e=l[t],i=l[t+1];!e||!i||s.splice(t,0,{start:e.end,end:i.start})}let o=l[l.length-1];s.splice(s.length-1,0,{start:o.end,end:m.value.length,type:"unedited"})}function w(){s.sort((o,t)=>o.start-t.start)}function k(o,t){var e=o.clientX,i=o.clientY;r.x=e,r.y=i,h.value=!0,Object.assign(g,t)}function b(){h.value=!1}return(o,t)=>(a(),u("div",V,[n(h)?(a(),u("div",$,[f("button",{class:"text-white shadow-md rounded-md p-2 duration-100",style:M({backgroundColor:n(g).stijlmiddel.color,top:n(r).y-20+"px",left:n(r).x+"px"})},B(n(g).stijlmiddel.name)+" ",5)])):F("",!0),f("p",C,[(a(!0),u(v,null,S(n(s),(e,i)=>(a(),u(v,null,[e.type=="highlight"?(a(),x(I,{onMouseleave:b,onMouseover:c=>k(c,e),onMouseup:c=>o.getSelectedText(e),content:n(m).slice(e.start,e.end),ref_for:!0,ref:c=>{e.element=c},stijlmiddel:e.stijlmiddel,key:i,class:"whitespace-pre-wrap"},null,8,["onMouseover","onMouseup","content","stijlmiddel"])):(a(),x(O,{onMouseup:c=>o.getSelectedText(e),content:n(m).slice(e.start,e.end),key:i+1,class:"whitespace-pre-wrap"},null,8,["onMouseup","content"]))],64))),256))])]))}};export{P as default};