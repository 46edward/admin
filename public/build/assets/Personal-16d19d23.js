import{_ as a,f as n,o as c,c as l,b as t,t as s,d as r}from"./app-b6edc1a6.js";const i={name:"Personal",data(){return{me:null}},methods:{getData(){n.post("/api/auth/me",{}).then(o=>this.me=o.data)}},mounted(){this.getData()}},d={key:0,class:"card w-25 position-absolute top-50 start-50 translate-middle"},_={class:"card-body"},m={class:"card-title"},h={class:"card-subtitle mb-2 text-body-secondary"},p={class:"table"},u=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"#ID"),t("th",{scope:"col"},"Registration date")])],-1),b={scope:"row"};function f(o,y,g,D,e,x){return e.me?(c(),l("div",d,[t("div",_,[t("h5",m,s(e.me.firstname)+" "+s(e.me.lastname),1),t("h6",h,s(e.me.email),1),t("table",p,[u,t("tbody",null,[t("tr",null,[t("th",b,s(e.me.id),1),t("td",null,s(new Date(e.me.created_at).toLocaleString("en-GB",{hour12:!1})),1)])])])])])):r("",!0)}const k=a(i,[["render",f]]);export{k as default};
