import{i as m,o as s,g as l,d as e,h as U,D as F,b as n,p as G,a as x,w as v,e as k,F as T,A as D,t as c,n as w,k as y,x as j,L as P,q as O,l as C,j as q,c as A,s as H,f as N}from"./app.0007a6e5.js";import{_ as S}from"./InputLabel.8dfe1ccd.js";import{D as J}from"./datetime.5f24481b.js";import{_ as K}from"./PrimaryButton.cd5a0ab1.js";import Q from"./ViewGedichtAnalyse.d5c86023.js";import"./GedichtFragment.e2d526e2.js";import"./_plugin-vue_export-helper.cdc0426e.js";const W={class:"grid gap-y-5"},X=e("div",{class:"flex justify-between"},[e("h1",{class:"text-gray-200 text-xl font-medium"},"Comments")],-1),Y={class:"flex flex-col gap-y-3"},Z={class:"grid"},ee={class:"grid grow shrink-0"},te={class:"flex justify-between items-center"},se=["onClick"],oe={class:"m-0 text-xs"},le={key:0,class:"m-auto"},ae={__name:"Comments",props:["comments","gedicht"],emits:["toggleModal"],setup(h,{emit:t}){const o=h,a=m("");function b(){console.log(o.comments,o.gedicht);let i=route("comment.create",o.gedicht.uuid);j.Inertia.post(i,{comment:a.value},{preserveState:!0,preserveScroll:!0}),a.value=""}function r(i){console.log(i);let u=route("comment.like");j.Inertia.post(u,{comment_id:i.id},{preserveState:!0,preserveScroll:!0})}return(i,u)=>(s(),l("div",W,[X,e("div",Y,[U(e("textarea",{"onUpdate:modelValue":u[0]||(u[0]=d=>G(a)?a.value=d:null),class:"form-control"},null,512),[[F,n(a)]]),x(K,{onClick:b,class:"ml-auto"},{default:v(()=>[k("Reageren")]),_:1})]),e("div",Z,[o.comments.length>0?(s(!0),l(T,{key:0},D(o.comments,d=>(s(),l("div",{key:d.id,class:"card flex gap-y-2 w-full bg-gray-700"},[e("div",ee,[e("div",te,[x(S,{class:"text-xs"},{default:v(()=>[k(c(d.user.name),1)]),_:2},1024)]),e("span",null,c(d.comment),1)]),e("button",{class:"my-auto grid justify-center gap-y-2 grow-0 shrink",onClick:I=>r(d)},[e("i",{class:w(["","fa fa-heart fa-lg"])}),e("span",oe,c(d.likes.length),1)],8,se)]))),128)):y("",!0)]),o.comments.length==0?(s(),l("span",le," No comments yet ")):y("",!0)]))}},ne={class:"grid"},ie={class:"flex justify-between"},ce=e("h1",{class:"text-gray-200 text-xl font-medium"},"Analyses",-1),re=["onClick"],de={key:1,class:"m-auto"},ue={__name:"Analyses",props:{gedicht:Object},emits:["toggleModal","chooseAnalyse"],setup(h,{emit:t}){const o=h;return(a,b)=>(s(),l("div",ne,[e("div",ie,[ce,x(n(P),{href:a.$route("gedicht.analyze.index",o.gedicht.uuid)},{default:v(()=>[k(" Analyse maken ")]),_:1},8,["href"])]),o.gedicht.analyses.length>0?(s(!0),l(T,{key:0},D(o.gedicht.analyses,r=>(s(),l("button",{key:r.id,onClick:i=>a.$emit("chooseAnalyse",r),class:"card flex justify-between w-full bg-gray-700"},c(r.user.name),9,re))),128)):(s(),l("span",de," No analyses yet "))]))}},fe={class:"card bg-transparent md:bg-gray-800 mx-auto h-full gap-y-4 flex w-full flex-col"},ge={class:"flex w-full justify-between items-center"},me={class:"flex h-full gap-3 max-h-full"},he={class:"flex flex-col gap-y- w-full overflow-y-auto"},_e={class:"text-gray-200 text-xl font-medium"},pe={key:0,class:"overflow-y-auto whitespace-pre-wrap text-gray-100 mt-5 text-lg font-light leading-loose"},ye={class:"flex justify-between"},xe={class:"mt-5 text-gray-300"},ve={class:"max-h-full text-white flex flex-col gap-y-5 mt-auto grow-0 shrink"},ke=e("i",{class:"fa fa-comments fa-xl"},null,-1),be=[ke],we=e("i",{class:"fa fa-magnifying-glass-chart fa-xl"},null,-1),$e=[we],Ce={class:"flex w-full"},Ae={key:0},je={key:1},Se=e("i",{class:"fa-solid fa-xl fa-volume-xmark text-white"},null,-1),Ie=[Se],Me=["onClick"],Oe=e("div",{class:"bg-gray-700 rounded-full h-2 w-12 mx-auto"},null,-1),Ne=[Oe],Re={__name:"Gedicht",props:{gedicht:Object,nextUrl:String},setup(h){const t=h,o=O({}),a=m(!1);let b=C(()=>J.fromISO(t.gedicht.created_at).toRelative());C(()=>t.gedicht.tags[0]);const r=m(null);let i=m(!1),u=m("comments");const d=C(()=>t.gedicht.is_liked),I=m(t.gedicht.gedicht),$=m(!1);let _=O(new Audio(t.gedicht.voiceover));_.loop=!0,q(()=>{if(t.nextUrl&&setupIntersectionObserver(),!r||!t.gedicht.voiceover)return!1;new IntersectionObserver(([f])=>{f.isIntersecting?V():B()},{threshold:.7}).observe(r.value)});function L(){let p=route("gedicht.like",t.gedicht.uuid);j.Inertia.post(p,{},{preserveState:!0,preserveScroll:!0})}function V(){$.value=!0,console.log("play audio",t.gedicht.titel),_.play()}function B(){!_||($.value=!1,console.log("stop audio",t.gedicht.titel),_.pause(),_.currentTime=0)}function g(){console.log(i),i.value=!i.value}function z(){u.value="comments",g()}function E(){u.value="analyses",g()}function R(p){a.value=!0,Object.assign(o,p),g()}return(p,f)=>(s(),l("div",{ref_key:"gedichtElement",ref:r,class:"mx-auto h-[calc(100vh-6rem)] max-w-xl"},[e("div",fe,[e("div",ge,[x(S,{class:"font-normal"},{default:v(()=>[k(c(t.gedicht.user.name),1)]),_:1}),x(S,{class:"font-light"},{default:v(()=>[k(c(n(b)),1)]),_:1})]),e("div",me,[e("div",he,[e("h1",_e,c(t.gedicht.titel),1),n(a)?y("",!0):(s(),l("p",pe,c(n(I)),1)),n(a)&&n(o)?(s(),A(Q,{key:1,class:"overflow-y-auto",gedicht:t.gedicht,analysis:n(o)},null,8,["gedicht","analysis"])):y("",!0),e("div",ye,[e("span",xe,c("- "+t.gedicht.auteur),1),t.gedicht.tags[0]?(s(),l("div",{key:0,class:"rounded-full justify-center items-center px-4 py-1 flex gap-3 mt-auto ml-auto text-xs text-white",style:H({backgroundColor:t.gedicht.tags[0].color})},c(t.gedicht.tags[0].name),5)):y("",!0)])]),e("div",ve,[e("button",{class:"flex flex-col mt-5 gap-y-5",onClick:L},[e("i",{class:w([n(d)?"text-red-500":"","fa fa-heart fa-2xl"])},null,2),e("span",null,c(t.gedicht.likes.length),1)]),e("button",{class:"flex py-5 flex-col gap-y-5",onClick:z},be),e("button",{class:"flex py-5 flex-col gap-y-5",onClick:E},$e)])]),e("div",Ce,[t.gedicht.voiceover?(s(),l("button",Ae,[e("i",{class:w(["fa fa-xl text-white",n($)?"fa-pause":"fa-play"])},null,2)])):(s(),l("button",je,Ie))]),e("div",{onClick:N(g,["self"]),class:w(["card text-white absolute bg-gray-800 md:bg-gray-900 rounded-t-lg left-0 right-0 w-full duration-150 ease-in-out",n(i)?"bottom-0 top-36":" -bottom-36 top-full"])},[e("div",{onClick:f[0]||(f[0]=N(M=>g(),["self"])),class:"bg-transparent w-full pb-10 pt-2"},Ne),n(u)=="analyses"?(s(),A(ue,{key:0,onToggleModal:f[1]||(f[1]=M=>g()),onChooseAnalyse:R,gedicht:t.gedicht},null,8,["gedicht"])):(s(),A(ae,{key:1,gedicht:t.gedicht,comments:t.gedicht.comments,onToggleModal:f[2]||(f[2]=M=>g())},null,8,["gedicht","comments"]))],10,Me)])],512))}};export{Re as default};