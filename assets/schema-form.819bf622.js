var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,u=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&l(e,a,t[a]);if(r)for(var a of r(t))n.call(t,a)&&l(e,a,t[a]);return e};import{aT as i,q as s,l as m,aQ as c,aU as d,aV as f,aj as p,aW as v,aX as g,aY as b,aZ as h,a_ as y,d as O,a7 as j,a$ as _,b0 as I,m as S,z as w,c as V,e as k,f as F,A as x,F as A,g as P,i as E,t as T,a0 as U,aD as M,b1 as R,a3 as q,a8 as z,b2 as C,b3 as L,b4 as D,a2 as $,r as G,b5 as B,b6 as N,b7 as Q,B as W,a1 as X,V as Y,h as Z}from"./vendor.922b9a96.js";import{e as H,f as J,i as K}from"./index.2bd215b2.js";function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(t){te(e,t,a[t])}))}return e}function te(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function re(e){var t=!1;return e&&e.length&&e.every((function(e){return!e.required||(t=!0,!1)})),t}function oe(e){return null==e?[]:Array.isArray(e)?e:[e]}function ne(e,t,a){for(var r=e,o=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),n=0,l=o.length;n<l-1&&(r||a);++n){var u=o[n];if(!(u in r)){if(a)throw new Error("please transfer a valid name path to validate!");break}r=r[u]}return{o:r,k:o[n],v:r?r[o[n]]:null,isValid:r&&o[n]in r}}function le(e,t,a){var r=s(e),o={};Object.keys(t).forEach((function(e){o[e]={autoLink:!1,required:re(t[e])}})),o=m(o);var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.length?e.filter((function(e){var a=oe(e.trigger||"change");return y(a,t).length})):e},l=null,u=function(e,t,a,r){var n=d([e],t,a,ee({validateMessages:f},r),!!r.validateFirst);return o[e].validateStatus="validating",n.catch((function(e){return e})).then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];"validating"===o[e].validateStatus&&(o[e].validateStatus=t.length?"error":"success",o[e].help=t[0])})),n},i=function(a,r){var o=[],i=!0;a?o=Array.isArray(a)?a:[a]:(i=!1,o=Object.keys(t));var s=function(a){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,i=[],s={},m=function(l){var m=a[l],c=ne(e,m,o);if(!c.isValid)return"continue";s[m]=c.v;var d=n(t[m],oe(r&&r.trigger));d.length&&i.push(u(m,c.v,d,r||{}).then((function(){return{name:m,errors:[]}})).catch((function(e){return Promise.reject({name:m,errors:e})})))},c=0;c<a.length;c++)m(c);var d=b(i);l=d;var f=d.then((function(){return l===d?Promise.resolve(s):Promise.reject([])})).catch((function(e){var t=e.filter((function(e){return e&&e.errors.length}));return Promise.reject({values:s,errorFields:t,outOfDate:l!==d})}));return f.catch((function(e){return e})),f}(o,r||{},i);return s.catch((function(e){return e})),s},O=r,j=function(e){var a=[];Object.keys(t).forEach((function(t){var r=ne(e,t,!1),o=ne(O,t,!1);h(r.v,o.v)||a.push(t)})),i(a,{trigger:"change"}),O=s(e)},_=null==a?void 0:a.debounce;return p(e,_&&_.wait?v(j,_.wait,g(_,["wait"])):j,{immediate:a&&!!a.immediate,deep:!0}),p(t,(function(){a&&a.validateOnRuleChange&&i()}),{deep:!0}),{modelRef:e,rulesRef:t,initialModel:r,validateInfos:o,resetFields:function(a){ae(e,ee({},s(r),a)),c((function(){Object.keys(o).forEach((function(e){o[e]={autoLink:!1,required:re(t[e])}}))}))},validate:i,validateField:u,mergeValidateInfo:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={autoLink:!1},a=[],r=Array.isArray(e)?e:[e],o=0;o<r.length;o++){var n=r[o];"error"===(null==n?void 0:n.validateStatus)&&(t.validateStatus="error",n.help&&a.push(n.help)),t.required=t.required||(null==n?void 0:n.required)}return t.help=a.join("\n"),t},clearValidate:function(e){(e?Array.isArray(e)?e:[e]:Object.keys(t)).forEach((function(e){o[e]&&ae(o[e],{validateStatus:"",help:""})}))}}}i("","success","warning","error","validating");var ue=O({name:"SchemaFormCheckbox",components:{[j.name]:j,[_.name]:_,[I.name]:I,[j.Group.name]:j.Group},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:a})=>({modelValue:S({get:()=>e.value,set:e=>a("update:value",e)})})});ue.render=function(e,t,a,r,o,n){const l=w("a-checkbox"),u=w("a-col"),i=w("a-row"),s=w("a-checkbox-group");return V(),k("div",null,[F(s,U({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t),style:{width:"100%"}},M(e.formItem.eventObject)),{default:x((()=>[F(i,null,{default:x((()=>[(V(!0),k(A,null,P(e.formItem.options,(e=>(V(),k(u,{key:e.value,span:8},{default:x((()=>[F(l,{value:e.value},{default:x((()=>[E(T(e.label),1)])),_:2},1032,["value"])])),_:2},1024)))),128))])),_:1})])),_:1},16,["value"])])};var ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ue}),se=O({name:"SchemaFormInputNumber",components:{[R.name]:R},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:a})=>({modelValue:S({get:()=>e.value,set:e=>a("update:value",e)})})});se.render=function(e,t,a,r,o,n){const l=w("a-input-number");return V(),k(l,U({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t)},e.formItem.props,M(e.formItem.eventObject)),null,16,["value"])};var me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:se}),ce=O({name:"SchemaFormInput",components:{[q.name]:q},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:a})=>({modelValue:S({get:()=>e.value,set:e=>a("update:value",e)})})});ce.render=function(e,t,a,r,o,n){const l=w("a-input");return V(),k(l,U({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t)},e.formItem.props,{autocomplete:"new-password"},M(e.formItem.eventObject)),null,16,["value"])};var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ce}),fe=O({name:"SchemaFormRadio",components:{[z.name]:z,[z.Group.name]:z.Group},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:a})=>({modelValue:S({get:()=>e.value,set:e=>a("update:value",e)})})});fe.render=function(e,t,a,r,o,n){const l=w("a-radio"),u=w("a-radio-group");return V(),k(u,U({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t)},M(e.formItem.eventObject)),{default:x((()=>[(V(!0),k(A,null,P(e.formItem.options,(e=>(V(),k(l,{key:e.value,value:e.value},{default:x((()=>[E(T(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},16,["value"])};var pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fe}),ve=O({name:"SchemaFormSelect",components:{[C.name]:C,[C.Option.name]:C.Option},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:a})=>({modelValue:S({get:()=>e.value,set:e=>a("update:value",e)})})});ve.render=function(e,t,a,r,o,n){const l=w("Option"),u=w("a-select");return V(),k(u,U({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t)},e.formItem.props,M(e.formItem.eventObject)),{default:x((()=>[(V(!0),k(A,null,P(e.formItem.options,(e=>(V(),k(l,{key:e.value,value:e.value},{default:x((()=>[E(T(e.label),1)])),_:2},1032,["value"])))),128))])),_:1},16,["value"])};var ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ve}),be=O({name:"SchemaFormTextarea",components:{[L.name]:L},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:a})=>({modelValue:S({get:()=>e.value,set:e=>a("update:value",e)})})});be.render=function(e,t,a,r,o,n){const l=w("a-switch");return V(),k(l,U({checked:e.modelValue,"onUpdate:checked":t[1]||(t[1]=t=>e.modelValue=t)},e.formItem.props,M(e.formItem.eventObject)),null,16,["checked"])};var he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:be}),ye=O({name:"SchemaFormTextarea",components:{[q.TextArea.name]:q.TextArea},emits:["update:value"],props:{formItem:{type:Object,default:()=>({})},value:void 0},setup:(e,{attrs:t,emit:a})=>({modelValue:S({get:()=>e.value,set:e=>a("update:value",e)})})});ye.render=function(e,t,a,r,o,n){const l=w("a-textarea");return V(),k(l,U({value:e.modelValue,"onUpdate:value":t[1]||(t[1]=t=>e.modelValue=t)},e.formItem.props,M(e.formItem.eventObject)),null,16,["value"])};const Oe={"./schema-form-checkbox.vue":ie,"./schema-form-input-number.vue":me,"./schema-form-input.vue":de,"./schema-form-radio.vue":pe,"./schema-form-select.vue":ge,"./schema-form-switch.vue":he,"./schema-form-textarea.vue":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye})},je={};Object.keys(Oe).forEach((e=>{const t=e.replace(/(.*\/)*([^.]+).*/gi,"$2");je[t]=Oe[e].default}));var _e,Ie,Se=O({name:"DynamicForm",components:(_e=u({},je),Ie={[D.name]:D,[$.name]:$,[$.Item.name]:$.Item},t(_e,a(Ie))),props:{formSchema:{required:!0,type:Object},fields:{type:Object,default:()=>({})}},setup(e,t){const a=G(null),r=B(),o=u({labelCol:{span:4},wrapperCol:{span:20}},e.formSchema.formItemLayout),n=m(e.formSchema.formItem.reduce(((e,t)=>(null!=t.eventObject||(t.eventObject={}),e[t.field]=t.value,e)),{}));e.fields&&Object.assign(n,e.fields),e.formSchema.formItem.forEach((async e=>{(null==e?void 0:e.hasOwnProperty("loading"))&&(e.loading=!0),H(e.asyncOptions)||J(e.asyncOptions)?e.options=await e.asyncOptions(e,r).finally((()=>e.loading=!1)):(H(e.asyncValue)||J(e.asyncValue))&&(n[e.field]=await e.asyncValue(e,r).finally((()=>e.loading=!1)))}));const l=m(e.formSchema.formItem.filter((e=>!e.hidden)).reduce(((e,t)=>(t.rules&&(e[t.field]=t.rules),e)),{})),{resetFields:i,validate:s,validateInfos:c,validateField:d}=le(n,l),f=["input","textarea","select","radio","checkbox","input-number","input-range","switch"],p=({field:e,trigger:t})=>()=>s(e,{trigger:t}).catch((()=>({})));return{formItemLayout:o,validate:s,resetFields:i,validateField:d,validateInfos:c,modelRef:n,schemaFormRef:a,getTriggerEvent:e=>{var t,a;const r={},o=e.field;if(Array.isArray(e.rules))e.rules.forEach((e=>{Array.isArray(e.trigger)?e.trigger.forEach((e=>r[e]=p({field:o,trigger:e}))):K(e.trigger)&&(r[e.trigger]=p({field:o,trigger:e.trigger}))}));else if(null==(t=e.rules)?void 0:t.trigger){const t=null==(a=e.rules)?void 0:a.trigger;r[t]=p({field:o,trigger:t}),Array.isArray(t)?t.forEach((e=>r[e]=p({field:o,trigger:e}))):K(t)&&(r[t]=p({field:o,trigger:t}))}return r},getComponent:e=>f.includes(e)?"schema-form-"+e:N(e)||Q(e)?F(e):e}}});const we=Z(),Ve=we(((e,t,a,r,o,n)=>{const l=w("a-form-item"),i=w("a-spin"),s=w("a-form");return V(),k(s,U({ref:"schemaFormRef"},e.formItemLayout),{default:we((()=>[(V(!0),k(A,null,P(e.formSchema.formItem.filter((e=>!e.hidden)),((t,a)=>(V(),k(i,{key:t.field,spinning:t.loading||!1},{default:we((()=>[F(l,U({help:t.help,extra:t.extra,label:t.label},u(u({},t.props),e.validateInfos[t.field])),{default:we((()=>[(V(),k(W(e.getComponent(t.type)),U({value:e.modelRef[t.field],"onUpdate:value":a=>e.modelRef[t.field]=a,"form-item":t},M(u({},e.getTriggerEvent(t)))),null,16,["value","onUpdate:value","form-item"]))])),_:2},1040,["help","extra","label"])])),_:2},1032,["spinning"])))),128)),e.$slots["operate-button"]?(V(),k(l,{key:0,"wrapper-col":{span:e.formItemLayout.wrapperCol.span,offset:e.formItemLayout.labelCol.span}},{default:we((()=>[X(e.$slots,"operate-button",{},void 0,!0)])),_:3},8,["wrapper-col"])):Y("",!0)])),_:1},16)}));Se.render=Ve,Se.__scopeId="data-v-10c082b4";export{Se as _};
