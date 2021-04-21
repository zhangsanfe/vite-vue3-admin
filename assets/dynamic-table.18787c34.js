var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,a=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n,i=(e,i)=>{for(var s in i||(i={}))t.call(i,s)&&a(e,s,i[s]);if(o)for(var s of o(i))n.call(i,s)&&a(e,s,i[s]);return e};import{bR as s,cv as l,cw as r,d as c,B as d,P as u,i as p,a as m,q as f,h as g,g as h,c as b,bW as y,cx as v,cy as O,u as k,cz as w,cA as C,a8 as x,r as P,ab as S,S as z,t as V,Y as j,z as T,A as F,n as $,a4 as R,cB as _,G as W,cn as D,x as L,y as B,bo as H,b1 as I,$ as N,F as E,bn as X,_ as A,a2 as K,a5 as U,a3 as q,a0 as G,C as J}from"./index.1b1fadf4.js";import{_ as M}from"./schema-form.a4e780e5.js";function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}var Y=l(),Z=r(),ee=s(c({name:"APopconfirm",mixins:[d],props:Q(Q({},Y),{prefixCls:u.string,transitionName:u.string.def("zoom-big"),content:u.any,title:u.any,trigger:Y.trigger.def("click"),okType:Z.type.def("primary"),disabled:u.looseBool.def(!1),okText:u.any,cancelText:u.any,icon:u.any,okButtonProps:u.object,cancelButtonProps:u.object,onConfirm:u.func,onCancel:u.func,onVisibleChange:u.func}),emits:["update:visible","confirm","cancel","visibleChange"],setup:function(){return{configProvider:p("configProvider",m)}},data:function(){var e=f(this),t={sVisible:!1};return"visible"in e&&(t.sVisible=e.visible),"defaultVisible"in e&&(t.sVisible=e.defaultVisible),t},watch:{visible:function(e){this.sVisible=e}},methods:{onConfirmHandle:function(e){this.setVisible(!1,e),this.$emit("confirm",e)},onCancelHandle:function(e){this.setVisible(!1,e),this.$emit("cancel",e)},onVisibleChangeHandle:function(e){this.$props.disabled||this.setVisible(e)},setVisible:function(e,t){g(this,"visible")||this.setState({sVisible:e}),this.$emit("update:visible",e),this.$emit("visibleChange",e,t)},getPopupDomNode:function(){return this.$refs.tooltip.getPopupDomNode()},renderOverlay:function(e,t){var o=this,n=this.okType,a=this.okButtonProps,i=this.cancelButtonProps,s=h(this,"icon")||b(y,null,null),l=v(Q({size:"small",onClick:this.onCancelHandle},i)),r=v(Q({type:n,size:"small",onClick:this.onConfirmHandle},a));return b("div",{class:"".concat(e,"-inner-content")},[b("div",{class:"".concat(e,"-message")},[s,b("div",{class:"".concat(e,"-message-title")},[h(this,"title")])]),b("div",{class:"".concat(e,"-buttons")},[b(O,l,{default:function(){return[h(o,"cancelText")||t.cancelText]}}),b(O,r,{default:function(){return[h(o,"okText")||t.okText]}})])])}},render:function(){var e,t=this,o=f(this),n=o.prefixCls,a=(0,this.configProvider.getPrefixCls)("popover",n),i=k(o,["title","content","cancelText","okText","onUpdate:visible"]),s=b(C,{componentName:"Popconfirm",defaultLocale:w.Popconfirm,children:function(e){return t.renderOverlay(a,e)}},null),l=Q(Q({},i),{title:s,prefixCls:a,visible:this.sVisible,ref:"tooltip",onVisibleChange:this.onVisibleChangeHandle});return b(x,l,{default:function(){return[null===(e=t.$slots)||void 0===e?void 0:e.default()]}})}}));var te=c({name:"operate-modal",components:{[S.name]:S,SchemaForm:M},props:{remove:{type:Function},formSchema:{type:Object,default:()=>({})},fields:{type:Object,default:()=>({})},hiddenFields:{type:Array,default:()=>[]},handleOk:{type:Function}},setup(e){const t=P(null),o=z({visible:!0,confirmLoading:!1,dynamicValidateForm:e.formSchema});e.hiddenFields.forEach((t=>o.dynamicValidateForm.formItem.find((e=>e.field==t)).hidden=!!e.fields));return i(i({},V(o)),{onOk:()=>{o.confirmLoading=!0,t.value.validate().then((async n=>{await(e.handleOk&&e.handleOk(t.value.modelRef,o)).finally((()=>o.confirmLoading=!1)),o.visible=!1})).catch((e=>{o.confirmLoading=!1}))},dynamicForm:t})}});te.render=function(e,t,o,n,a,i){const s=j("schema-form"),l=j("a-modal");return T(),F(l,$(e.$attrs,{visible:e.visible,"onUpdate:visible":t[1]||(t[1]=t=>e.visible=t),"confirm-loading":e.confirmLoading,afterClose:e.remove,onOk:e.onOk}),{default:R((()=>[b(s,{ref:"dynamicForm",fields:e.fields,"form-schema":e.dynamicValidateForm},null,8,["fields","form-schema"])])),_:1},16,["visible","confirm-loading","afterClose","onOk"])};const oe=e=>{let t,o,n,a;const i=()=>a.onmouseup=a.onmousedown=a.onmousemove=null;e.forEach((e=>e.customHeaderCell=e=>({onmouseenter:()=>{a=e.title[0].el.closest("th"),null!=n||(n=a.closest(".ant-table-wrapper")),null!=o||(o=n.clientWidth),a.onmousemove=function(e){e.offsetX>this.offsetWidth-10?this.style.cursor="col-resize":this.style.cursor="default",null==t&&(t=this),null!=t.mouseDown&&1==t.mouseDown&&(t.style.cursor="default",t.oldWidth+(e.x-t.oldX)>0&&(t.width=t.oldWidth+(e.x-t.oldX)),t.style.width=t.width,n.style.width=o+(e.x-t.oldX)+"px",t.style.cursor="col-resize")},a.onmousedown=function(e){t=this,e.offsetX>t.offsetWidth-10&&(t.mouseDown=!0,t.oldX=e.x,t.oldWidth=t.offsetWidth)},a.onmouseup=i,n.onmouseup=function(){i(),null==t&&(t=this),t.mouseDown=!1,t.style.cursor="default",o=n.clientWidth}},onmouseup:()=>i})))};var ne=c({name:"DynamicTable",props:{columns:{type:Object},getListFunc:{type:Function},rowSelection:{type:Object},rowKey:{type:[String,Function]},pageOption:{type:Object,default:()=>({})}},components:{[_.name]:_,[W.name]:W,[D.name]:D,[ee.name]:ee,Option:D.Option},setup(e,{attrs:t,emit:o,slots:n}){var a;const{pageOption:s}=function(e){const t=P(i({current:1,pageSize:10,total:0,pageSizeOptions:["10","20","30","40","50"],showQuickJumper:!0,showSizeChanger:!0,showTotal:e=>`共 ${e} 条`,onChange:(t,o)=>{var n;return null==(n=null==e?void 0:e.pageChange)?void 0:n.call(e,t,o)},onShowSizeChange:(t,o)=>{var n;return null==(n=null==e?void 0:e.pageChange)?void 0:n.call(e,t,o)}},e));return{pageOption:t,updatePageOption:(e={})=>{Object.assign(t.value,e)}}}();oe(e.columns);const l=z({expandItemRefs:{},customRow:()=>({}),data:[],pageOption:Object.assign(s,e.pageOption),actions:(null==(a=e.columns.find((e=>"action"==(e.dataIndex||e.key))))?void 0:a.actions)||[],loading:!1}),r=async(t={})=>{t=i(i({pageNumber:l.pageOption.current,pageSize:l.pageOption.pageSize},e.pageOption),t),l.loading=!0;const{data:o,pageNumber:n,pageSize:a,total:s}=await e.getListFunc(t).finally((()=>l.loading=!1));Object.assign(l.pageOption,{current:~~n,pageSize:~~a,total:~~s}),l.data=o,l.customRow=function(e){let t,o;return n=>({draggable:!0,ondrag(e){t=n},ondrop(e){o=n},ondragend(n){if(t!==o){const n=e.indexOf(t),a=e.indexOf(o);[e[n],e[a]]=[e[a],e[n]]}},ondragover:e=>!1})}(l.data)};r();return i(i({},V(l)),{buttonProps:{size:"small"},actionEvent:async(t,o,n)=>{await o({record:t,props:e},(()=>setTimeout((()=>r())))),"del"==n&&l.data.length<2&&(l.pageOption.current=Math.max(1,l.pageOption.current-1))},refreshTableData:r,paginationChange:(t,o,n)=>{const{field:a,order:s}=n;l.pageOption=i(i({},l.pageOption),t),r(i(i(i({pageSize:t.pageSize,pageNumber:t.current},e.pageOption),o),{field:a,order:s}))}})}});const ae=E();L("data-v-80366932");const ie=q(" 您确定要删除吗？ ");B();const se=ae(((e,t,o,n,a,s)=>{const l=j("router-link"),r=j("Option"),c=j("a-select"),d=j("a-button"),u=j("a-popconfirm"),p=j("a-table"),m=H("permission");return T(),F(p,$({columns:e.columns,loading:e.loading,rowSelection:e.rowSelection,rowKey:e.rowKey,size:"middle","data-source":e.data,pagination:e.pageOption,bordered:"",customRow:e.customRow},i(i({},e.$props),e.$attrs),{onChange:e.paginationChange}),I({_:2},[N(e.$slots,((t,o)=>({name:o,fn:ae((t=>[X(e.$slots,o,t,void 0,!0)]))}))),N(e.columns.filter((e=>e.slots)),(t=>({name:t.slots.customRender,fn:ae((o=>[e.$slots[t.slots.customRender]?X(e.$slots,t.slots.customRender,$({key:0},o),void 0,!0):(T(),F(A,{key:1},["action"!==t.slots.customRender?(T(),F(A,{key:0},["component"==t.slotsType?(T(),F(K(t.slotsFunc(o.record)),{key:0})):U("",!0),"format"==t.slotsType?(T(),F(A,{key:1},[q(G(t.slotsFunc(o.record[t.dataIndex||t.key],o.record)),1)],64)):U("",!0),"link"==t.slotsType?(T(),F(l,{key:2,to:t.linkPath+o.record[t.linkId]},{default:ae((()=>[q(G(o.text),1)])),_:2},1032,["to"])):U("",!0)],64)):U("",!0),"action"==t.slots.customRender?(T(),F("div",{key:t.slots.customRender,class:"actions"},[(T(!0),F(A,null,N(e.actions,((t,n)=>(T(),F(A,null,["select"==t.type?(T(),F(c,{key:n,value:o.record[t.key],"onUpdate:value":e=>o.record[t.key]=e,size:"small"},{default:ae((()=>[(T(!0),F(A,null,N(t.options,(e=>(T(),F(r,{key:e.value,value:e.value},{default:ae((()=>[q(G(e.label),1)])),_:2},1032,["value"])))),128))])),_:2},1032,["value","onUpdate:value"])):U("",!0),"button"==t.type?J((T(),F(d,$({key:1},i(i({},e.buttonProps),t.props),{key:n,onClick:n=>e.actionEvent(o.record,t.func)}),{default:ae((()=>[q(G(t.text),1)])),_:2},1040,["onClick"])),[[m,t.permission]]):U("",!0),"popconfirm"==t.type?(T(),F(u,{key:n,placement:"leftTop",onConfirm:n=>e.actionEvent(o.record,t.func,"del")},{title:ae((()=>[ie])),default:ae((()=>[b(d,i(i({},e.buttonProps),t.props),{default:ae((()=>[q(G(t.text),1)])),_:2},1040)])),_:2},1032,["onConfirm"])):U("",!0)],64)))),256))])):U("",!0)],64))]))})))]),1040,["columns","loading","rowSelection","rowKey","data-source","pagination","customRow","onChange"])}));ne.render=se,ne.__scopeId="data-v-80366932";export{ne as _,te as a};
