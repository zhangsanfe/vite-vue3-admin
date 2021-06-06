var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,d=(e,a)=>{for(var l in a||(a={}))o.call(a,l)&&n(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&n(e,l,a[l]);return e},r=(e,t)=>a(e,l(t));import{bf as i,f as c,J as u,aQ as m,d as f,M as p,a2 as b,b1 as v,a3 as y,b2 as g,r as R,l as w,o as h,k as x,bg as I,A,c as k,e as _,B as N,V as O,F as j,g as E,i as S,t as T,a0 as C,u as L,m as q,aC as M,bh as U,w as D}from"./vendor.f076b15a.js";import{_ as F}from"./form-modal.6ec28ff9.js";import{A as P,R as K}from"./index.11148bba.js";import"./schema-form.953f1512.js";import{f as G}from"./common.bf91f2f4.js";import{I as $}from"./icon-font.d3dcde86.js";var B,H;function J(e){return P.request({url:B.adminAccess,method:K.GET,params:e})}function Q(e){return P.request({url:[B.adminAccess,e].join("/"),method:K.DELETE},{isShowErrorMessage:!0,successMessageText:"删除成功"})}(H=B||(B={})).adminAccess="/admin/access",H.adminAccessModule="/admin/access/module";var V=f({name:"AddModal",components:{[p.name]:p,[b.name]:b,[b.Item.name]:b.Item,[v.name]:v,[y.name]:y,[g.name]:g,ASelectOption:g.Option},props:{remove:{type:Function},fields:{type:Object,default:()=>({})},callback:{type:Function}},setup(e){const a=R(null),l=w({visible:!0,confirmLoading:!1,moduleList:[]}),t=w({moduleName:"",moduleId:void 0,actionName:"",type:void 0,url:"",icon:"",sort:1,keepAlive:1});e.fields.moduleId&&(Object.keys(t).forEach((a=>t[a]=e.fields[a])),t.type=-1==e.fields.moduleId?1:2);h((async()=>{var e;l.moduleList=await P.request({url:B.adminAccessModule,method:K.GET,params:e})}));return r(d({},x(l)),{formRef:a,rules:{moduleName:[{required:!0,message:"模块名称不能为空"}],moduleId:[{required:!0,message:"模块名称不能为空"}],actionName:[{required:!0,message:"请输入菜单名称"}],type:[{required:!0,message:"请选择类型"}],url:[{required:!0,message:"请输入url地址"}]},prefix:"/vite-vue3-admin/",labelCol:{span:6},wrapperCol:{span:18},modelRef:t,handleOk:o=>{o.preventDefault(),l.confirmLoading=!0,a.value.validate().then((async()=>{const a=e.fields.id,o=I(t);a&&delete o.type,await(a?function(e,a){return P.request({url:[B.adminAccess,e].join("/"),method:K.PATCH,params:a},{isShowErrorMessage:!0,successMessageText:"修改成功"})}(a,o):function(e){return P.request({url:B.adminAccess,method:K.POST,params:e},{isShowErrorMessage:!0,successMessageText:"创建成功"})}(o)).finally((()=>l.confirmLoading=!1)),l.visible=!1,e.callback&&e.callback()})).catch((e=>{l.confirmLoading=!1}))}})}});const z=S(" 模块 "),W=S(" 菜单 "),X=S(" 否 "),Y=S(" 是 ");V.render=function(e,a,l,t,o,s){const n=A("a-select-option"),d=A("a-select"),r=A("a-form-item"),i=A("a-input"),u=A("a-input-number"),m=A("a-form"),f=A("a-modal");return k(),_(f,{visible:e.visible,"onUpdate:visible":a[9]||(a[9]=a=>e.visible=a),title:Number.isInteger(e.fields.id)?"编辑资源":"新增资源","confirm-loading":e.confirmLoading,afterClose:e.remove,onOk:e.handleOk},{default:N((()=>[c(m,{ref:"formRef",model:e.modelRef,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:N((()=>[c(r,{label:"类别",rules:e.rules.type,name:"type"},{default:N((()=>[c(d,{value:e.modelRef.type,"onUpdate:value":a[1]||(a[1]=a=>e.modelRef.type=a),disabled:Number.isInteger(e.fields.id),placeholder:"请选择类型"},{default:N((()=>[c(n,{value:1},{default:N((()=>[z])),_:1}),c(n,{value:2},{default:N((()=>[W])),_:1})])),_:1},8,["value","disabled"])])),_:1},8,["rules"]),1==e.modelRef.type?(k(),_(r,{key:0,label:"模块名称",rules:e.rules.moduleName,name:"moduleName"},{default:N((()=>[c(i,{value:e.modelRef.moduleName,"onUpdate:value":a[2]||(a[2]=a=>e.modelRef.moduleName=a),disabled:Number.isInteger(e.fields.id),placeholder:"请输入模块名称"},null,8,["value","disabled"])])),_:1},8,["rules"])):O("",!0),2==e.modelRef.type?(k(),_(r,{key:1,label:"模块名称",rules:e.rules.moduleId,name:"moduleId"},{default:N((()=>[c(d,{value:e.modelRef.moduleId,"onUpdate:value":a[3]||(a[3]=a=>e.modelRef.moduleId=a),disabled:Number.isInteger(e.fields.id),placeholder:"请选择模块"},{default:N((()=>[(k(!0),_(j,null,E(e.moduleList,(e=>(k(),_(n,{key:e.id,value:e.id},{default:N((()=>[S(T(e.moduleName),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value","disabled"])])),_:1},8,["rules"])):O("",!0),2==e.modelRef.type?(k(),_(r,{key:2,label:"菜单名称",rules:e.rules.actionName,name:"actionName"},{default:N((()=>[c(i,{value:e.modelRef.actionName,"onUpdate:value":a[4]||(a[4]=a=>e.modelRef.actionName=a),placeholder:"请输入菜单名称"},null,8,["value"])])),_:1},8,["rules"])):O("",!0),c(r,{label:"路径",rules:e.rules.url,name:"url"},{default:N((()=>[c(i,{value:e.modelRef.url,"onUpdate:value":a[5]||(a[5]=a=>e.modelRef.url=a),placeholder:"请输入路径"},null,8,["value"])])),_:1},8,["rules"]),c(r,{label:"小图标"},{default:N((()=>[c(i,{value:e.modelRef.icon,"onUpdate:value":a[6]||(a[6]=a=>e.modelRef.icon=a),placeholder:"小图标"},null,8,["value"]),c("a",{href:`${e.prefix}#/icons`,target:"_blank"},"可选图标",8,["href"])])),_:1}),c(r,{label:"排序"},{default:N((()=>[c(u,{value:e.modelRef.sort,"onUpdate:value":a[7]||(a[7]=a=>e.modelRef.sort=a),min:1,placeholder:"排序"},null,8,["value"])])),_:1}),c(r,{label:"keepAlive",name:"keepAlive"},{default:N((()=>[c(d,{value:e.modelRef.keepAlive,"onUpdate:value":a[8]||(a[8]=a=>e.modelRef.keepAlive=a),placeholder:"是否缓存页面"},{default:N((()=>[c(n,{value:0},{default:N((()=>[X])),_:1}),c(n,{value:1},{default:N((()=>[Y])),_:1})])),_:1},8,["value"])])),_:1})])),_:1},8,["model","label-col","wrapper-col"])])),_:1},8,["visible","title","confirm-loading","afterClose","onOk"])};const Z=(e,a,l)=>{let t=null;const o=document.createElement("div"),s=()=>{i(null,o),t=null,o.remove()};return t=c(e),t.props=C(t.props,d({remove:s},a)),i(t,o),t.component.ctx.remove=s,t.component.ctx.$updateProps=function(e){e&&Object.keys(e).forEach((a=>{t.component.props[a]=e[a]}))},t.component.ctx},ee=[{title:"名称",dataIndex:"moduleName",slots:{customRender:"moduleName"}},{title:"url地址",dataIndex:"url"},{title:"icon图标",dataIndex:"icon",slots:{customRender:"icon"},slotsType:"component",slotsFunc:e=>c($,{type:e.icon})},{title:"排序",dataIndex:"sort"},{title:"创建时间",dataIndex:"createdAt",slots:{customRender:"createdAt"},slotsType:"format",slotsFunc:e=>G(e)},{title:"最后更新时间",dataIndex:"updatedAt",slots:{customRender:"updatedAt"},slotsType:"format",slotsFunc:e=>G(e)},{title:"操作",dataIndex:"action",width:200,slots:{customRender:"action"},actions:[{type:"popconfirm",text:"删除",permission:{action:"delete",effect:"disabled"},props:{type:"danger"},func:async({record:e},a)=>e.id<6?L.warn("系统预置菜单，不能删除！"):await Q(e.id).then((()=>a()))},{type:"button",text:"编辑",permission:{action:"update",effect:"disabled"},props:{type:"warning"},func:({record:e},a)=>Z(V,{fields:e,callback:a})}]}];var ae=f({name:"SystemAccess",components:{DynamicTable:F},setup(){const e=R(null),a=w({itemRefs:{},expandedRowKeys:[],tableLoading:!1,rowSelection:{onChange:(e,l)=>{a.rowSelection.selectedRowKeys=e},selectedRowKeys:[]}}),l=q((()=>0==a.rowSelection.selectedRowKeys.length));return r(d({},x(a)),{columns:ee,tableRef:e,expand:async(e,l)=>{const t=a.itemRefs[l.id],o=await(async({expanded:e,record:a,expandItemEl:l,asyncFunc:t,params:o})=>{if(e&&a.children&&!Array.isArray(a.children)){if(l){const e=l.closest("td").querySelector(".ant-table-row-expand-icon");return i(c(u),e),await m(),e.classList.add("loading-icon"),t(o).finally((async()=>{i(null,e),await m(),e.classList.remove("loading-icon")}))}return t(o)}})({expanded:e,record:l,expandItemEl:t,asyncFunc:J,params:{id:l.id,limit:100}});(null==o?void 0:o.data)&&(l.children=o.data)},getAdminAccess:J,isDisabled:l,addItem:()=>{Z(V,{callback:()=>{e.value.refreshTableData()}})},deleteItems:()=>{p.confirm({title:"提示",icon:c(M),content:"您确定要删除所有选中吗？",onOk:async()=>{await Q(a.rowSelection.selectedRowKeys.toString()),await e.value.refreshTableData(),a.rowSelection.selectedRowKeys=[]}})}})}});const le=S(" 添加 "),te=S(" 删除 ");ae.render=function(e,a,l,t,o,s){const n=A("a-button"),d=A("dynamic-table"),r=U("permission");return k(),_(d,{ref:"tableRef",columns:e.columns,"get-list-func":e.getAdminAccess,rowKey:"id","row-selection":e.rowSelection,onExpand:e.expand},{title:N((()=>[D(c(n,{type:"primary",onClick:e.addItem},{default:N((()=>[le])),_:1},8,["onClick"]),[[r,{action:"create",effect:"disabled"}]]),D(c(n,{disabled:e.isDisabled,type:"primary",onClick:e.deleteItems},{default:N((()=>[te])),_:1},8,["disabled","onClick"]),[[r,{action:"delete"}]])])),moduleName:N((({record:a})=>[c("span",{ref:l=>e.itemRefs[a.id]=l},T(a.moduleName||a.actionName),513)])),_:1},8,["columns","get-list-func","row-selection","onExpand"])};export default ae;
