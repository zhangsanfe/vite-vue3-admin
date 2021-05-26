var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,i,l)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[i]=l,s=(e,t)=>{for(var i in t||(t={}))o.call(t,i)&&a(e,i,t[i]);if(l)for(var i of l(t))n.call(t,i)&&a(e,i,t[i]);return e},r=(e,l)=>t(e,i(l));import{d as c,b8 as d,b9 as m,ba as u,bb as g,bc as p,bd as v,b4 as h,r as b,l as y,m as f,k as w,A as S,c as k,e as O,Z as C,f as I,B as x,Y as U,aS as j,t as L,aT as P,p as _,b as E,h as z,i as R}from"./vendor.c1c0e565.js";/* empty css              */import{I as V}from"./icon-font.b5e4edb5.js";import"./index.73ccbe68.js";function M(e){const t=e.lastIndexOf("/")+1;let i=e.substring(t);return i=decodeURI(i.split("?")[0]),i}var N=c({name:"PreviewModal",components:{ZoomInOutlined:d,ZoomOutOutlined:m,RedoOutlined:u,DownloadOutlined:g,CloseCircleOutlined:p,OneToOneOutlined:v,[h.name]:h},emits:["update:visible"],props:{visible:{type:Boolean,default:!1},type:{type:String,default:"image"},url:{type:String,default:""}},setup(e,{emit:t}){const i=b(null);let l;const o=y({timer:null,loading:!1,rotateDeg:0,imgScale:1,scaleCV:.07,initWidth:0,initHeight:0,contentStyle:{width:"60vw",height:"60vh"},imgStyle:{width:"",height:"",transform:"rotate(0)"}}),n=f({get:()=>e.visible,set:e=>t("update:visible",e)}),a=(e="scale")=>{o.imgStyle.width=o.initWidth*o.imgScale+"px",o.imgStyle.height=o.initHeight*o.imgScale+"px","init"===e?(o.imgStyle.maxWidth="",o.imgStyle.maxHeight=""):(o.imgStyle.maxWidth="none!important",o.imgStyle.maxHeight="none!important"),clearTimeout(l),l=setTimeout((()=>i.value.classList.remove("active")),1400),i.value.classList.add("active"),o.contentStyle={}};return r(s({},w(o)),{imgScaleMask:i,isVisible:n,rotateImg:()=>{o.rotateDeg-=90,o.imgStyle.transform=`rotate(${o.rotateDeg}deg)`},saveImg:e=>{!function({url:e,target:t="_blank",fileName:i}){const l=new URL(e).host==location.host;new Promise(((o,n)=>{if(l){const l=document.createElement("a");if(l.href=e,l.target=t,void 0!==l.download&&(l.download=i||M(e)),document.createEvent){const e=document.createEvent("MouseEvents");return e.initEvent("click",!0,!0),l.dispatchEvent(e),o(!0)}return-1===e.indexOf("?")&&(e+="?download"),window.open(e,t),o(!0)}{const t=document.createElement("canvas"),i=document.createElement("img");i.setAttribute("crossOrigin","Anonymous"),i.src=e,i.onload=l=>{t.width=i.width,t.height=i.height,t.getContext("2d").drawImage(i,0,0,i.width,i.height),t.toBlob((t=>{const i=document.createElement("a");i.href=window.URL.createObjectURL(t),i.download=M(e),i.click(),URL.revokeObjectURL(i.href),o(!0)}),"image/jpeg")},i.onerror=e=>n(e)}}))}({url:e})},zoomInImg:()=>{o.imgScale+=o.scaleCV,a()},zoomOutImg:()=>{o.imgScale-=o.scaleCV,a()},handZoom:a,imgLoaded:e=>{var t;if(null==(t=e.currentTarget)?void 0:t.complete){const{width:t,height:i}=getComputedStyle(e.currentTarget);o.imgStyle.width=t,o.imgStyle.height=i,o.initWidth=parseFloat(t),o.initHeight=parseFloat(i)}},resetImg:()=>{o.imgScale=1,a()}})}});const T={key:0,class:"toolbar"};N.render=function(e,t,i,l,o,n){const a=S("close-circle-outlined"),s=S("a-spin"),r=S("zoom-in-outlined"),c=S("zoom-out-outlined"),d=S("one-to-one-outlined"),m=S("redo-outlined"),u=S("download-outlined");return k(),O(j,{to:"body"},[e.isVisible?(k(),O("div",{key:0,class:"preview-modal",onClick:t[6]||(t[6]=C((t=>e.isVisible=!1),["self"]))},[I(a,{class:"close-icon",onClick:t[1]||(t[1]=t=>e.isVisible=!1)}),I("div",{class:"preview-content",style:e.contentStyle},[I(s,{spinning:e.loading},{default:x((()=>["image"===e.type?(k(),O("img",{key:0,ref:"img",style:e.imgStyle,src:e.url,alt:"",onLoad:t[2]||(t[2]=C(((...t)=>e.imgLoaded&&e.imgLoaded(...t)),["stop"]))},null,44,["src"])):U("",!0),"video"===e.type?(k(),O("video",{key:1,ref:"video",src:e.url,controls:"",autoplay:"",onCanplay:t[3]||(t[3]=t=>e.loading=!1),onLoadstart:t[4]||(t[4]=t=>e.loading=!0)},null,40,["src"])):U("",!0),I("div",{ref:"imgScaleMask",class:"img-scale-mask"},L(~~(100*e.imgScale)+"%"),513)])),_:1},8,["spinning"])],4),"image"===e.type?(k(),O("div",T,[I(r,{title:"放大",onClick:e.zoomInImg},null,8,["onClick"]),I(c,{title:"缩放",onClick:e.zoomOutImg},null,8,["onClick"]),I(d,{title:"原始比例",onClick:e.resetImg},null,8,["onClick"]),I(m,{title:"旋转",onClick:e.rotateImg},null,8,["onClick"]),I(u,{title:"下载",onClick:t[5]||(t[5]=t=>e.saveImg(e.url))})])):U("",!0)])):U("",!0)])};var W=c({name:"CustomModal",components:{[P.name]:P,IconFont:V,PreviewModal:N},setup(){const e=y({scriptUrl:"",iconName:"",visible:!1,imageUrl:""});return r(s({},w(e)),{showPreview:t=>{e.imageUrl=t.target.currentSrc,e.visible=!0}})}});const D=z();_("data-v-4f5cc384");const H=R(" 示意图："),A=R(" (例如：//at.alicdn.com/t/font_1166867_7zdsgx6x88l.js) "),Z=R(" （例如：icon-huanfu1、icon-zhutipifu、icon-xinwendongtai1） "),B={key:1};E();const F=D(((e,t,i,l,o,n)=>{const a=S("a-alert"),s=S("preview-modal"),r=S("a-input"),c=S("a-form-item"),d=S("icon-font"),m=S("a-form"),u=S("a-card");return k(),O("div",null,[I(a,{message:"自定义图标",description:"使用阿里图标库，可以有效减小项目的体积，支持离线本地图标和在线图标",type:"info","show-icon":"",style:{"margin-bottom":"12px"}}),I(u,null,{default:D((()=>[H,I("img",{class:"image-demo",src:"http://ww1.sinaimg.cn/large/005IOlAWgy1gl8bm4ot9dj314r0opabq.jpg",onClick:t[1]||(t[1]=(...t)=>e.showPreview&&e.showPreview(...t))}),e.visible?(k(),O(s,{key:0,visible:e.visible,"onUpdate:visible":t[2]||(t[2]=t=>e.visible=t),type:"image",url:e.imageUrl},null,8,["visible","url"])):U("",!0),I(m,null,{default:D((()=>[I(c,{label:"阿里图标路径"},{default:D((()=>[I(r,{value:e.scriptUrl,"onUpdate:value":t[3]||(t[3]=t=>e.scriptUrl=t),style:{width:"400px"},placeholder:"请输入你的阿里巴巴矢量图标库项目图标的路径"},null,8,["value"]),A])),_:1}),I(c,{label:"图标名字"},{default:D((()=>[I(r,{value:e.iconName,"onUpdate:value":t[4]||(t[4]=t=>e.iconName=t),placeholder:"请输入图标的名字",style:{width:"200px"}},null,8,["value"]),Z])),_:1}),I(c,{label:"效果"},{default:D((()=>[e.scriptUrl&&e.iconName?(k(),O(d,{key:0,"script-url":e.scriptUrl,type:e.iconName,size:"30"},null,8,["script-url","type"])):(k(),O("span",B,"可以复制示例的地址和图标查看效果"))])),_:1})])),_:1})])),_:1})])}));W.render=F,W.__scopeId="data-v-4f5cc384";export default W;
