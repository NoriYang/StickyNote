import{_ as u,h as n,l as _,o as g,c as b,f as s,w as c,v as d,y as v,q as m,s as h}from"./index-63b15216.js";const e=o=>(m("data-v-a963d152"),o=o(),h(),o),f={class:"login-main"},w={class:"login-wrapper"},y=e(()=>s("div",{class:"login-logo"},[s("i",{class:"bi bi-person"})],-1)),x=e(()=>s("h2",{class:"login-title"},"使用者登入",-1)),k={class:"input-group mb-3"},B=e(()=>s("span",{class:"input-group-text",id:"user-email"},[s("i",{class:"bi bi-person-fill"})],-1)),I={class:"input-group mb-3"},L=e(()=>s("span",{class:"input-group-text",id:"password"},[s("i",{class:"bi bi-lock-fill"})],-1)),P={__name:"LoginPage",setup(o){const t=n(""),i=n(""),p=_();async function r(){await v(t.value,i.value),p.push("/")}return(S,a)=>(g(),b("div",f,[s("div",w,[y,x,s("div",k,[B,c(s("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=l=>t.value=l),class:"form-control",placeholder:"E-mail","aria-label":"email","aria-describedby":"user-email"},null,512),[[d,t.value]])]),s("div",I,[L,c(s("input",{type:"password","onUpdate:modelValue":a[1]||(a[1]=l=>i.value=l),class:"form-control",placeholder:"password","aria-label":"password","aria-describedby":"password"},null,512),[[d,i.value]])]),s("div",{class:"d-grid login-button"},[s("button",{class:"btn btn-primary",type:"button",onClick:r},"登入")])])]))}},E=u(P,[["__scopeId","data-v-a963d152"]]);export{E as default};
