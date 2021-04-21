var e=Object.defineProperty,a=Object.prototype.hasOwnProperty,l=Object.getOwnPropertySymbols,t=Object.prototype.propertyIsEnumerable,o=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,s=(e,s)=>{for(var n in s||(s={}))a.call(s,n)&&o(e,n,s[n]);if(l)for(var n of l(s))t.call(s,n)&&o(e,n,s[n]);return e};import{c as n,n as d,bG as r,c9 as i,s as c,ct as u,cu as m,d as p,ab as f,cp as b,cl as v,cn as y,r as R,S as g,at as w,t as h,aN as I,Y as x,z as k,A,a4 as _,a5 as N,_ as O,$ as j,a3 as E,a0 as S,W as C,U as T,bo as L,C as q}from"./index.1b1fadf4.js";import{_ as U}from"./dynamic-table.18787c34.js";import{I as M}from"./schema-form.a4e780e5.js";import{f as D}from"./common.28eaaa19.js";import{I as F}from"./icon-font.a954c421.js";import{Q as K}from"./QuestionCircleOutlined.729dbded.js";import"./vendor.183d7d35.js";const P=(e,a,l)=>{let t=null;const o=document.createElement("div"),i=()=>{r(null,o),t=null,o.remove()};return t=n(e),t.props=d(t.props,s({remove:i},a)),r(t,o),t.component.ctx.remove=i,t.component.ctx.$updateProps=function(e){e&&Object.keys(e).forEach((a=>{t.component.props[a]=e[a]}))},t.component.ctx};var G,$;function Q(e){return u.request({url:G.adminAccess,method:m.GET,params:e})}function z(e){return u.request({url:[G.adminAccess,e].join("/"),method:m.DELETE},{isShowErrorMessage:!0,successMessageText:"删除成功"})}($=G||(G={})).adminAccess="/admin/access",$.adminAccessModule="/admin/access/module";var H=p({name:"add-modal",components:{[f.name]:f,[b.name]:b,[b.Item.name]:b.Item,[M.name]:M,[v.name]:v,[y.name]:y,ASelectOption:y.Option},props:{remove:{type:Function},fields:{type:Object,default:()=>({})},callback:{type:Function}},setup(e){const a=R(null),l=g({visible:!0,confirmLoading:!1,moduleList:[]}),t=g({moduleName:"",moduleId:void 0,actionName:"",type:void 0,url:"",icon:"",sort:1,keepAlive:1});e.fields.moduleId&&(Object.keys(t).forEach((a=>t[a]=e.fields[a])),t.type=-1==e.fields.moduleId?1:2);w((async()=>{var e;l.moduleList=await u.request({url:G.adminAccessModule,method:m.GET,params:e})}));return s(s({},h(l)),{formRef:a,rules:{moduleName:[{required:!0,message:"模块名称不能为空"}],moduleId:[{required:!0,message:"模块名称不能为空"}],actionName:[{required:!0,message:"请输入菜单名称"}],type:[{required:!0,message:"请选择类型"}],url:[{required:!0,message:"请输入url地址"}]},prefix:"/vite-vue3-admin/",labelCol:{span:6},wrapperCol:{span:18},modelRef:t,handleOk:o=>{o.preventDefault(),l.confirmLoading=!0,a.value.validate().then((async()=>{const a=e.fields.id,o=I(t);a&&delete o.type,await(a?function(e,a){return u.request({url:[G.adminAccess,e].join("/"),method:m.PATCH,params:a},{isShowErrorMessage:!0,successMessageText:"修改成功"})}(a,o):function(e){return u.request({url:G.adminAccess,method:m.POST,params:e},{isShowErrorMessage:!0,successMessageText:"创建成功"})}(o)).finally((()=>l.confirmLoading=!1)),l.visible=!1,e.callback&&e.callback()})).catch((e=>{l.confirmLoading=!1}))}})}});const W=E(" 模块 "),Y=E(" 菜单 "),B=E(" 否 "),J=E(" 是 ");H.render=function(e,a,l,t,o,s){const d=x("a-select-option"),r=x("a-select"),i=x("a-form-item"),c=x("a-input"),u=x("a-input-number"),m=x("a-form"),p=x("a-modal");return k(),A(p,{title:Number.isInteger(e.fields.id)?"编辑资源":"新增资源",visible:e.visible,"onUpdate:visible":a[9]||(a[9]=a=>e.visible=a),"confirm-loading":e.confirmLoading,afterClose:e.remove,onOk:e.handleOk},{default:_((()=>[n(m,{ref:"formRef",model:e.modelRef,"label-col":e.labelCol,"wrapper-col":e.wrapperCol},{default:_((()=>[n(i,{label:"类别",rules:e.rules.type,name:"type"},{default:_((()=>[n(r,{value:e.modelRef.type,"onUpdate:value":a[1]||(a[1]=a=>e.modelRef.type=a),disabled:Number.isInteger(e.fields.id),placeholder:"请选择类型"},{default:_((()=>[n(d,{value:1},{default:_((()=>[W])),_:1}),n(d,{value:2},{default:_((()=>[Y])),_:1})])),_:1},8,["value","disabled"])])),_:1},8,["rules"]),1==e.modelRef.type?(k(),A(i,{key:0,label:"模块名称",rules:e.rules.moduleName,name:"moduleName"},{default:_((()=>[n(c,{value:e.modelRef.moduleName,"onUpdate:value":a[2]||(a[2]=a=>e.modelRef.moduleName=a),disabled:Number.isInteger(e.fields.id),placeholder:"请输入模块名称"},null,8,["value","disabled"])])),_:1},8,["rules"])):N("",!0),2==e.modelRef.type?(k(),A(i,{key:1,label:"模块名称",rules:e.rules.moduleId,name:"moduleId"},{default:_((()=>[n(r,{value:e.modelRef.moduleId,"onUpdate:value":a[3]||(a[3]=a=>e.modelRef.moduleId=a),disabled:Number.isInteger(e.fields.id),placeholder:"请选择模块"},{default:_((()=>[(k(!0),A(O,null,j(e.moduleList,(e=>(k(),A(d,{key:e.id,value:e.id},{default:_((()=>[E(S(e.moduleName),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value","disabled"])])),_:1},8,["rules"])):N("",!0),2==e.modelRef.type?(k(),A(i,{key:2,label:"菜单名称",rules:e.rules.actionName,name:"actionName"},{default:_((()=>[n(c,{value:e.modelRef.actionName,"onUpdate:value":a[4]||(a[4]=a=>e.modelRef.actionName=a),placeholder:"请输入菜单名称"},null,8,["value"])])),_:1},8,["rules"])):N("",!0),n(i,{label:"路径",rules:e.rules.url,name:"url"},{default:_((()=>[n(c,{value:e.modelRef.url,"onUpdate:value":a[5]||(a[5]=a=>e.modelRef.url=a),placeholder:"请输入路径"},null,8,["value"])])),_:1},8,["rules"]),n(i,{label:"小图标"},{default:_((()=>[n(c,{value:e.modelRef.icon,"onUpdate:value":a[6]||(a[6]=a=>e.modelRef.icon=a),placeholder:"小图标"},null,8,["value"]),n("a",{href:`${e.prefix}#/icons`,target:"_blank"},"可选图标",8,["href"])])),_:1}),n(i,{label:"排序"},{default:_((()=>[n(u,{value:e.modelRef.sort,"onUpdate:value":a[7]||(a[7]=a=>e.modelRef.sort=a),min:1,placeholder:"排序"},null,8,["value"])])),_:1}),n(i,{label:"keepAlive",name:"keepAlive"},{default:_((()=>[n(r,{value:e.modelRef.keepAlive,"onUpdate:value":a[8]||(a[8]=a=>e.modelRef.keepAlive=a),placeholder:"是否缓存页面"},{default:_((()=>[n(d,{value:0},{default:_((()=>[B])),_:1}),n(d,{value:1},{default:_((()=>[J])),_:1})])),_:1},8,["value"])])),_:1})])),_:1},8,["model","label-col","wrapper-col"])])),_:1},8,["title","visible","confirm-loading","afterClose","onOk"])};const V=[{title:"名称",dataIndex:"moduleName",slots:{customRender:"moduleName"}},{title:"url地址",dataIndex:"url"},{title:"icon图标",dataIndex:"icon",slots:{customRender:"icon"},slotsType:"component",slotsFunc:e=>n(F,{type:e.icon})},{title:"排序",dataIndex:"sort"},{title:"创建时间",dataIndex:"createdAt",slots:{customRender:"createdAt"},slotsType:"format",slotsFunc:e=>D(e)},{title:"最后更新时间",dataIndex:"updatedAt",slots:{customRender:"updatedAt"},slotsType:"format",slotsFunc:e=>D(e)},{title:"操作",dataIndex:"action",width:200,slots:{customRender:"action"},actions:[{type:"popconfirm",text:"删除",permission:{action:"delete",effect:"disabled"},props:{type:"danger"},func:async({record:e},a)=>e.id<6?C.warn("系统预置菜单，不能删除！"):await z(e.id).then((()=>a()))},{type:"button",text:"编辑",permission:{action:"update",effect:"disabled"},props:{type:"warning"},func:({record:e},a)=>P(H,{fields:e,callback:a})}]}];var X=p({name:"SystemAccess",components:{DynamicTable:U},setup(){const e=R(null),a=g({itemRefs:{},expandedRowKeys:[],tableLoading:!1,rowSelection:{onChange:(e,l)=>{a.rowSelection.selectedRowKeys=e},selectedRowKeys:[]}}),l=T((()=>0==a.rowSelection.selectedRowKeys.length));return s(s({},h(a)),{columns:V,tableRef:e,expand:async(e,l)=>{const t=a.itemRefs[l.id],o=await(async({expanded:e,record:a,expandItemEl:l,asyncFunc:t,params:o})=>{if(e&&a.children&&!Array.isArray(a.children)){const e=l.closest("td").querySelector(".ant-table-row-expand-icon");return r(n(i),e),await c(),e.classList.add("loading-icon"),t(o).finally((async()=>{r(null,e),await c(),e.classList.remove("loading-icon")}))}})({expanded:e,record:l,expandItemEl:t,asyncFunc:Q,params:{id:l.id,limit:100}});(null==o?void 0:o.data)&&(l.children=o.data)},getAdminAccess:Q,isDisabled:l,addItem:()=>{P(H,{callback:()=>{e.value.refreshTableData()}})},deleteItems:()=>{f.confirm({title:"提示",icon:n(K),content:"您确定要删除所有选中吗？",onOk:async()=>{await z(a.rowSelection.selectedRowKeys.toString()),await e.value.refreshTableData(),a.rowSelection.selectedRowKeys=[]}})}})}});const Z=E(" 添加 "),ee=E(" 删除 ");X.render=function(e,a,l,t,o,s){const d=x("a-button"),r=x("dynamic-table"),i=L("permission");return k(),A(r,{ref:"tableRef",columns:e.columns,"get-list-func":e.getAdminAccess,rowKey:"id","row-selection":e.rowSelection,onExpand:e.expand},{title:_((()=>[q(n(d,{type:"primary",onClick:e.addItem},{default:_((()=>[Z])),_:1},8,["onClick"]),[[i,{action:"create",effect:"disabled"}]]),q(n(d,{disabled:e.isDisabled,type:"primary",onClick:e.deleteItems},{default:_((()=>[ee])),_:1},8,["disabled","onClick"]),[[i,{action:"delete"}]])])),moduleName:_((({record:a})=>[n("span",{ref:l=>e.itemRefs[a.id]=l},S(a.moduleName||a.actionName),513)])),_:1},8,["columns","get-list-func","row-selection","onExpand"])};export default X;
