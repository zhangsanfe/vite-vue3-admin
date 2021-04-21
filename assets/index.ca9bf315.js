var e=Object.defineProperty,a=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(a,o,n)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[o]=n,l=(e,l)=>{for(var s in l||(l={}))a.call(l,s)&&r(e,s,l[s]);if(o)for(var s of o(l))n.call(l,s)&&r(e,s,l[s]);return e};import{d as s,ai as t,a9 as i,aj as d,S as u,N as m,K as p,J as c,t as f,W as g,x as b,y as v,Y as y,z as w,A as I,c as h,F as _,a3 as j}from"./index.1b1fadf4.js";import{_ as O}from"./logo.d49f8590.js";import"./vendor.183d7d35.js";var S=s({name:"login",components:{UserOutlined:t,LockOutlined:i,SvgIcon:d},setup(){const e=u({loading:!1,formInline:{username:"",password:""}}),a=m(),o=p(),n=c();return l(l({},f(e)),{handleSubmit:async()=>{var r;const{username:l,password:s}=e.formInline;if(""==l.trim()||""==s.trim())return g.warning("用户名或密码不能为空！");g.loading("登录中...",0),e.loading=!0;const t={username:l,password:s},{code:i,result:d,message:u}=await a.dispatch("user/login",t).finally((()=>{e.loading=!1,g.destroy()}));if(0==i){const e=decodeURIComponent((null==(r=n.query)?void 0:r.redirect)||"/");g.success("登录成功！"),o.replace(e).then((e=>{"login"==n.name&&o.replace("/")}))}else g.info(u||"登录失败")}})}});const x=_();b("data-v-3bf5332d");const z={class:"login-box"},U=h("div",{class:"login-logo"},[h("img",{src:O,alt:""}),h("h1",null,"Antd Admin")],-1),k=j(" 登录 ");v();const A=x(((e,a,o,n,r,l)=>{const s=y("user-outlined"),t=y("a-input"),i=y("a-form-item"),d=y("lock-outlined"),u=y("a-button"),m=y("a-form");return w(),I("div",z,[U,h(m,{layout:"horizontal",model:e.formInline,onSubmit:e.handleSubmit},{default:x((()=>[h(i,null,{default:x((()=>[h(t,{value:e.formInline.username,"onUpdate:value":a[1]||(a[1]=a=>e.formInline.username=a),size:"large",placeholder:"admin"},{prefix:x((()=>[h(s,{type:"user"})])),_:1},8,["value"])])),_:1}),h(i,null,{default:x((()=>[h(t,{value:e.formInline.password,"onUpdate:value":a[2]||(a[2]=a=>e.formInline.password=a),size:"large",type:"password",placeholder:"123456",autocomplete:"new-password"},{prefix:x((()=>[h(d,{type:"user"})])),_:1},8,["value"])])),_:1}),h(i,null,{default:x((()=>[h(u,{type:"primary","html-type":"submit",size:"large",loading:e.loading,block:""},{default:x((()=>[k])),_:1},8,["loading"])])),_:1})])),_:1},8,["model","onSubmit"])])}));S.render=A,S.__scopeId="data-v-3bf5332d";export default S;
