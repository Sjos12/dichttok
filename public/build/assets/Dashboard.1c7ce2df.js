import{_ as G}from"./AuthenticatedLayout.7cd57917.js";import{i as _,o,g as a,a as d,w as l,d as e,f as j,h as T,p as B,D,b as r,k as p,e as h,F as y,z as v,c as w,L as k,s as b,t as $,H as V,x as L}from"./app.185df2b5.js";import{_ as M}from"./PrimaryButton.fa295825.js";import N from"./Gedicht.f9694976.js";import{_ as S}from"./Dropdown.e3f68e29.js";import{_ as z}from"./InputLabel.c6f2ae0b.js";import"./ApplicationLogo.48a7ae75.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Container.18a5d235.js";import"./ViewGedichtAnalyse.eb6130e4.js";import"./GedichtFragment.200b6172.js";const A={class:"w-full"},F=e("span",{class:"inline-flex rounded-md"},[e("button",{type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"},[h(" Genres "),e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])])],-1),U={class:"min-h-full w-full p-4"},q={key:0,class:"m-auto w-full flex"},E=e("i",{class:"fa fa-circle-notch fa-xl m-auto text-white animate-spin"},null,-1),H=[E],I={key:1},O={key:2,class:"grid gap-5 w-full grid-cols-3"},P={class:"text-white"},R={__name:"GedichtFilters",props:{genres:Array},setup(g){const n=g,i=_(""),f=250,u=_(n.genres),c=_(!1);async function x(){c.value=!0,console.log("performed search");let m=route("search_genres",{query:i.value});const s=await(await fetch(m,{method:"GET"})).json();i.value==""?u.value=n.genres:u.value=s.genres,c.value=!1}function C(m){console.log("debounce");let t;console.log(t),t&&clearTimeout(t);const s=this;t=setTimeout(()=>{console.log("call fn"),m.apply(s)},f)}return(m,t)=>(o(),a("div",A,[d(S,{align:"right",width:"96"},{trigger:l(()=>[F]),content:l(()=>[e("div",{onClick:t[2]||(t[2]=j(()=>{},["stop"])),class:"w-full flex py-2 place-items-center gap-5 duration-300 ease-in"},[T(e("input",{onInput:t[0]||(t[0]=s=>C(()=>x())),"onUpdate:modelValue":t[1]||(t[1]=s=>B(i)?i.value=s:null),placeholder:"Zoek een genre",type:"text",class:"form-control px-5 py-1 mx-auto rounded-full"},null,544),[[D,r(i)]])]),e("div",U,[r(c)?(o(),a("div",q,H)):p("",!0),r(u).length==0&&!r(c)?(o(),a("div",I,[d(z,{class:"w-full text-center"},{default:l(()=>[h("Geen genres gevonden")]),_:1})])):p("",!0),r(u).length>0?(o(),a("div",O,[(o(!0),a(y,null,v(r(u),s=>(o(),w(r(k),{key:s.uuid,href:m.route("dashboard.filter",s.uuid),class:"rounded-full justify-center items-center px-4 py-1 flex gap-3 color-white",style:b({backgroundColor:s.color})},{default:l(()=>[e("h2",P,$(s.name),1)]),_:2},1032,["href","style"]))),128))])):p("",!0)])]),_:1})]))}},Z={class:""},J={class:"flex top-0 snap-center justify-between items-center"},K=e("div",{class:"flex flex-col w-full gap-y-2"},[e("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Gedichten ")],-1),Q={class:"flex items-center"},W={key:0,class:"my-auto font-medium text-sm text-gray-700 dark:text-gray-300 flex gap-5"},X=e("i",{class:"fa fa-xmark"},null,-1),Y={class:"container mx-auto relative bg-gray-900"},ee={key:1,class:"text-white flex self-center m-auto"},te=e("h1",{class:"m-auto"}," Geen gedichten gevonden met de geselecteerde filters. ",-1),se=[te],pe={__name:"Dashboard",props:{gedichten:Array,genres:Array,genre:Object,nextUrl:String},setup(g){const n=g;function i(){let f=route("gedicht.create.index");L.Inertia.visit(f)}return(f,u)=>(o(),a("div",Z,[d(r(V),{title:"Dashboard"}),d(G,null,{header:l(()=>[e("div",J,[K,e("div",Q,[n.genre?(o(),a("label",W,[e("div",{class:"rounded-full justify-center items-center px-4 py-1 flex gap-3 color-white",style:b({backgroundColor:n.genre.color})},[d(r(k),{href:f.route("dashboard")},{default:l(()=>[X]),_:1},8,["href"]),h(" "+$(n.genre.name),1)],4)])):p("",!0),d(R,{genres:n.genres},null,8,["genres"]),d(M,{type:"button",onClick:i,class:"whitespace-nowrap"},{default:l(()=>[h("Gedicht Uploaden")]),_:1})])])]),default:l(()=>[e("div",Y,[n.gedichten.length>0?(o(!0),a(y,{key:0},v(n.gedichten,(c,x)=>(o(),w(N,{class:"snap-start",key:c.id,gedicht:c},null,8,["gedicht"]))),128)):(o(),a("div",ee,se))])]),_:1})]))}};export{pe as default};
