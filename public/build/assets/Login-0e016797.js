import{_ as m,a as p,o as a,c as l,b as e,w as n,v as i,t as c,d as u,e as f}from"./app-b6edc1a6.js";const _={name:"Login",data(){return{form:{email:"",password:""},error:null}},methods:{login(){p.post("/api/auth/login",this.form).then(t=>localStorage.setItem("access_token",t.data.access_token)).then(()=>this.$router.push({name:"user.personal"})).catch(t=>this.error=t.response.data.error)}}},b={class:"border rounded-3 p-3 w-25 position-absolute top-50 start-50 translate-middle"},h={class:"mb-3"},w=e("label",{for:"exampleInputEmail1",class:"form-label"},"Email address",-1),v=e("div",{id:"emailHelp",class:"form-text"},"We'll never share your email with anyone else.",-1),x={class:"mb-3"},y=e("label",{for:"exampleInputPassword1",class:"form-label"},"Password",-1),g={key:0,class:"alert alert-danger",role:"alert"};function k(t,s,I,E,o,d){return a(),l("div",b,[e("div",h,[w,n(e("input",{"onUpdate:modelValue":s[0]||(s[0]=r=>o.form.email=r),type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"},null,512),[[i,o.form.email]]),v]),e("div",x,[y,n(e("input",{"onUpdate:modelValue":s[1]||(s[1]=r=>o.form.password=r),type:"password",class:"form-control",id:"exampleInputPassword1"},null,512),[[i,o.form.password]])]),o.error?(a(),l("div",g,c(this.error),1)):u("",!0),e("button",{onClick:s[2]||(s[2]=f(r=>d.login(),["prevent"])),type:"button",class:"btn btn-primary"},"Submit")])}const B=m(_,[["render",k]]);export{B as default};