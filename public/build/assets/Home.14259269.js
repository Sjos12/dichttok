import{q as O,i as f,z as R,o as x,g as v,d as e,a as t,w as i,e as r,F as I,A as C,s as N,b as h,t as k,h as B,D as G,x as H,E as U,G as $}from"./app.0007a6e5.js";import{A as F}from"./ApplicationLogo.f77b4c69.js";import{_ as S}from"./PrimaryButton.cd5a0ab1.js";import{_ as q}from"./SecondaryButton.45423d5f.js";import{C as c}from"./Container.d3840509.js";import _ from"./MockGedicht.459e4fd4.js";import{_ as J}from"./_plugin-vue_export-helper.cdc0426e.js";import"./datetime.5f24481b.js";import"./ViewGedichtAnalyse.d5c86023.js";import"./GedichtFragment.e2d526e2.js";const s=d=>(U("data-v-da874a4d"),d=d(),$(),d),P={class:"bg-gray-900 h-screen"},K={class:"z-50 relative shadow-lg w-full bg-gray-800 py-3"},Q={class:"flex gap-5"},W={class:"col-span-6 my-auto gap-y-5 grid items-center pb-12"},X=s(()=>e("small",null,"DichtNet is de",-1)),Y=s(()=>e("h1",{class:"text-white font-semibold text-6xl leading-tight"},"De grootste gratis online dichtbundel.",-1)),Z=s(()=>e("p",null," Het platform om nieuwe gedichten te vinden, je eigen gedichten te uploaden en ze te delen met je vrienden. ",-1)),ee={class:"flex gap-5 items-center"},te=s(()=>e("span",{class:"text-gray-300 text-sm font-light"},"of",-1)),se={class:"col-span-1 h-screen grid"},ie={class:"mx-auto"},le=["src"],oe=["src"],ae={class:"col-span-4 h-screen relative"},ne={class:"relative h-screen mx-auto snap-start -top-3/4 z-0"},de={class:"col-span-1 h-screen grid"},ce={class:"mx-auto"},re=["src"],ue=["src"],ge={class:"col-span-6 my-auto gap-y-5 grid items-center"},he=s(()=>e("small",null,"DichtNet is een",-1)),_e=s(()=>e("h2",{class:"text-white font-medium text-5xl leading-tight"},"Een verzameling van honderden gratis gedichten.",-1)),me=s(()=>e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore eligendi ipsum, laborum magnam sed sint! At autem cupiditate doloremque facere fugiat reiciendis! Ab dolore laboriosam maiores saepe suscipit voluptatibus? ",-1)),pe={class:"flex gap-10"},fe={class:"grid"},xe=s(()=>e("small",null,"Gedichten",-1)),ve={class:"text-white text-4xl font-semibold"},ye={class:"grid"},we=s(()=>e("small",null,"Gebruikers",-1)),be={class:"text-white text-4xl font-semibold"},ke=s(()=>e("div",{class:"col-span-6 my-auto gap-y-5 grid items-center"},[e("small",null,"Met DichtNet"),e("h2",{class:"text-white font-medium text-5xl leading-tight"},"Analyseer je gedichten.."),e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolore eligendi ipsum, laborum magnam sed sint! At autem cupiditate doloremque facere fugiat reiciendis! Ab dolore laboriosam maiores saepe suscipit voluptatibus? ")],-1)),je={class:"col-span-7 my-auto gap-y-5 grid items-center"},Ae=s(()=>e("small",null,"Met DichtNet",-1)),Te=s(()=>e("h2",{class:"text-white font-medium text-5xl leading-tight"},"Deel je eigen gedichten met de wereld.",-1)),De={class:"flex"},Ie={class:"card shadow-xl text-gray-200"},Ce={class:"grid gap-y-5"},Ne={class:"grid gap-y-3"},Se={class:"grid gap-y-3"},ze={class:"ml-auto text-gray-300 font-thin text-sm"},Ve=s(()=>e("div",{class:"flex grow justify-center items-center"},[e("img",{class:"animate-bounce duration-75 ease-in-out h-20 w-20 mx-auto text-indigo-500",src:"/assets/undraw_arrow.svg",alt:"Arrow to the right"})],-1)),Le={class:"col-span-6 my-auto gap-y-5 grid items-center"},Me=s(()=>e("small",null,"DichtNet heeft",-1)),Be=s(()=>e("h2",{class:"text-white font-medium text-5xl leading-tight"},"Alle genre\u2019s op een plek.",-1)),Ge=s(()=>e("p",null," Iedereen heeft zijn eigen voorkeuren. Daarom kan je gedichten filtreren op basis van een genre. Hierdoor vind je makkelijker gedichten die je zelf interessant vindt. ",-1)),He={class:"flex gap-4 flex-wrap w-full justify-start"},qe={class:"col-start-2 col-end-11 my-auto py-20 bg-gray-800 shadow-xl rounded-md hover:drop-shadow-xl gap-y-5 grid items-center justify-center gap-5"},Ee=s(()=>e("h2",{class:"text-white font-medium text-4xl leading-tight text-center"}," Overtuigd? Sluit je gratis aan!",-1)),Oe=s(()=>e("p",null," Dichtnet is en blijft altijd een gratis, community gedreven platform. ",-1)),Re={class:"relative bottom-0 w-full bg-gray-800 py-4 snap-start"},Ue=s(()=>e("small",{class:"mx-auto text-center font-thin text-sm text-gray-300"},"Copyright Denzel Stellingwerf 2023.",-1)),$e={__name:"Home",props:{genres:Object,gedichten:Array,analysis_gedicht:Object,user_total:Number,gedichten_total:Number},setup(d){const u=d,l=O(u.gedichten[3]),E=l.gedicht;l.gedicht="";const m=E.split(" ");console.log(m);const p=f(0),j=f(200);f(200);const A=f(!1);let g=0;const T=f(!1);let y=0;function D(){let a=route("register");H.Inertia.get(a)}function z(){let a=route("login");H.Inertia.get(a)}V();function V(){A.value||(m[p.value].length<=g&&(l.gedicht+=" ",p.value+=1,g=0),l.gedicht+=m[p.value].charAt(g),g+=1,p.value>=m.length&&(T.value=!1,setTimeout(L,j.value)),setTimeout(V,j.value))}function L(){A.value||(T||(T.value=!0),console.log("erase text"),l.gedicht=m[p.value].substring(0,g-1),g-=1,setTimeout(L,j.value))}function M(){let a=20,o=40;return Math.floor(Math.random()*(o-a+1)+a)}function w(){let a="/assets/",o=["undraw_sticky-note.svg","undraw_chat.svg","undraw_star.svg","undraw_flower.svg","undraw_heart-fun.svg","undraw_exclamation-point.svg","undraw_clock.svg"];y>=o.length&&(y=0);let b=o[y];return y++,a+b}return(a,o)=>{const b=R("InputLabelVue");return x(),v("div",P,[e("nav",K,[t(c,{class:"flex justify-between"},{default:i(()=>[t(F,{class:"text-white fill-white h-10"}),e("div",Q,[t(S,{onClick:D},{default:i(()=>[r("Registreer ")]),_:1}),t(q,{onClick:z},{default:i(()=>[r("Log in ")]),_:1})])]),_:1})]),t(c,{class:"h-screen grid grid-cols-12"},{default:i(()=>[e("div",W,[X,Y,Z,e("div",ee,[t(S,{onClick:D,class:"btn btn-primary rounded-full px-6 py-2"},{default:i(()=>[r(" Registreer nu! ")]),_:1}),te,t(q,{onClick:z,class:"rounded-full bg-transparent px-6 py-2"},{default:i(()=>[r(" Log in. ")]),_:1})])]),e("div",se,[e("div",ie,[e("img",{style:{marginTop:14+"rem"},class:"doodle",src:w(),alt:"Arrow to the right"},null,8,le),(x(),v(I,null,C(4,n=>e("img",{style:N({marginTop:M()+"rem"}),class:"doodle",src:w(),alt:"Arrow to the right"},null,12,oe)),64))])]),e("div",ae,[e("div",ne,[t(_,{class:"snap-none",gedicht:u.gedichten[0]},null,8,["gedicht"]),t(_,{gedicht:u.gedichten[1]},null,8,["gedicht"]),t(_,{gedicht:u.gedichten[2]},null,8,["gedicht"]),t(_,{"is-highlighted":!0,gedicht:d.analysis_gedicht},null,8,["gedicht"]),t(_,{gedicht:h(l)},null,8,["gedicht"]),t(_,{"show-tags":!0,gedicht:u.gedichten[4]},null,8,["gedicht"])])]),e("div",de,[e("div",ce,[e("img",{style:{marginTop:8+"rem"},class:"doodle",src:w(),alt:"Arrow to the right"},null,8,re),(x(),v(I,null,C(7,n=>e("img",{src:w(),style:N({marginTop:M()+"rem"}),class:"doodle",alt:"Arrow to the right"},null,12,ue)),64))])])]),_:1}),t(c,{class:"h-full grid grid-cols-12"},{default:i(()=>[e("div",ge,[he,_e,me,e("div",pe,[e("div",fe,[xe,e("h3",ve,k(d.gedichten_total)+"+ ",1)]),e("div",ye,[we,e("h3",be,k(d.user_total)+"+ ",1)])])])]),_:1}),t(c,{class:"gedicht-height grid grid-cols-12"},{default:i(()=>[ke]),_:1}),t(c,{class:"gedicht-height grid grid-cols-12"},{default:i(()=>[e("div",je,[Ae,Te,e("div",De,[e("div",Ie,[e("div",Ce,[e("div",Ne,[t(b,null,{default:i(()=>[r("Titel van je gedicht*")]),_:1}),B(e("input",{"onUpdate:modelValue":o[0]||(o[0]=n=>h(l).titel=n),spellcheck:"false",class:"form-control text-gray-200 text-xl font-medium",type:"text"},null,512),[[G,h(l).titel]])]),e("div",Se,[t(b,null,{default:i(()=>[r("Jouw gedicht*")]),_:1}),B(e("textarea",{onInput:o[1]||(o[1]=()=>A.value=!0),"onUpdate:modelValue":o[2]||(o[2]=n=>h(l).gedicht=n),spellcheck:"false",class:"form-control h-64"},null,544),[[G,h(l).gedicht]]),e("span",ze,k(h(l).gedicht.length+" / 1000")+" characters ",1)])])]),Ve])])]),_:1}),t(c,{class:"gedicht-height grid grid-cols-12"},{default:i(()=>[e("div",Le,[Me,Be,Ge,e("div",He,[(x(!0),v(I,null,C(u.genres,n=>(x(),v("div",{key:n.id,style:N({backgroundColor:n.color}),class:"rounded-full justify-center items-center px-4 py-1 flex gap-3 bg-indigo-700 mt-auto text-xs text-white"},k(n.name),5))),128))])])]),_:1}),t(c,{class:"gedicht-height snap-start grid grid-cols-12"},{default:i(()=>[e("div",qe,[Ee,Oe,t(S,{onClick:D,class:"mx-auto rounded-full px-6 py-2"},{default:i(()=>[r("Maak je account")]),_:1})])]),_:1}),e("div",Re,[t(c,{class:"mx-auto w-full"},{default:i(()=>[Ue]),_:1})])])}}},tt=J($e,[["__scopeId","data-v-da874a4d"]]);export{tt as default};
