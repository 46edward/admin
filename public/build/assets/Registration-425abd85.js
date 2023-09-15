import{_ as d,a as p,o as i,c as m,b as e,w as r,v as a,t as f,d as c,e as u}from"./app-b6edc1a6.js";const _={name:"Registration",data(){return{form:{firstname:"",lastname:"",email:"",password:"",password_confirmation:""},error:null}},methods:{storeUser(){p.post("/api/users",this.$data.form).then(l=>localStorage.setItem("access_token",l.data.access_token)).then(()=>this.$router.push({name:"user.personal"})).catch(l=>this.error=l.response.data.message)}}},b={class:"border rounded-3 p-3 w-25 position-absolute top-50 start-50 translate-middle"},w={class:"mb-3"},x=e("label",{for:"exampleInputFName",class:"form-label"},"First Name",-1),h={class:"mb-3"},v=e("label",{for:"exampleInputLName",class:"form-label"},"Last Name",-1),y={class:"mb-3"},I=e("label",{for:"exampleInputEmail1",class:"form-label"},"Email address",-1),N=e("div",{id:"emailHelp",class:"form-text"},"We'll never share your email with anyone else.",-1),U={class:"mb-3"},g=e("label",{for:"exampleInputPassword1",class:"form-label"},"Password",-1),V={class:"mb-3"},k=e("label",{for:"exampleInputPassword2",class:"form-label"},"Confirm password",-1),P={key:0,class:"alert alert-danger",role:"alert"};function E(l,s,B,C,o,n){return i(),m("div",b,[e("div",w,[x,r(e("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>o.form.firstname=t),type:"text",class:"form-control",id:"exampleInputFName"},null,512),[[a,o.form.firstname]])]),e("div",h,[v,r(e("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>o.form.lastname=t),type:"text",class:"form-control",id:"exampleInputLName"},null,512),[[a,o.form.lastname]])]),e("div",y,[I,r(e("input",{"onUpdate:modelValue":s[2]||(s[2]=t=>o.form.email=t),type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"},null,512),[[a,o.form.email]]),N]),e("div",U,[g,r(e("input",{"onUpdate:modelValue":s[3]||(s[3]=t=>o.form.password=t),type:"password",class:"form-control",id:"exampleInputPassword1"},null,512),[[a,o.form.password]])]),e("div",V,[k,r(e("input",{"onUpdate:modelValue":s[4]||(s[4]=t=>o.form.password_confirmation=t),type:"password",class:"form-control",id:"exampleInputPassword2"},null,512),[[a,o.form.password_confirmation]])]),o.error?(i(),m("div",P,f(this.error),1)):c("",!0),e("button",{onClick:s[5]||(s[5]=u((...t)=>n.storeUser&&n.storeUser(...t),["prevent"])),type:"button",class:"btn btn-primary"},"Registration")])}const L=d(_,[["render",E]]);export{L as default};