(self["webpackChunkhublix"]=self["webpackChunkhublix"]||[]).push([[926],{9852:function(e){e.exports=function(e){return~-encodeURI(e).split(/%..|./).length}},6926:function(e,l,a){"use strict";a.r(l),a.d(l,{default:function(){return N}});var o=a(3396),t=a(7139),n=a(5101),r=a(8302),u=a(9242),s=a(3289),i=a(7302),d=a(8717),c=a(4870),m=a(1107),v=a(131),p=a(9888);const f=Symbol.for("vuetify:selection-control-group");(0,m.a)({name:"VSelectionControlGroup",props:{disabled:Boolean,id:String,inline:Boolean,name:String,falseIcon:String,trueIcon:String,multiple:{type:Boolean,default:null},readonly:Boolean,type:String,modelValue:null},emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:a}=l;const t=(0,d.z)(e,"modelValue"),n=(0,v.sq)(),r=(0,o.Fl)((()=>e.id||`v-selection-control-group-${n}`)),u=(0,o.Fl)((()=>e.name||r.value));return(0,o.JJ)(f,{disabled:(0,c.Vh)(e,"disabled"),inline:(0,c.Vh)(e,"inline"),modelValue:t,multiple:(0,o.Fl)((()=>!!e.multiple||null==e.multiple&&Array.isArray(t.value))),name:u,falseIcon:(0,c.Vh)(e,"falseIcon"),trueIcon:(0,c.Vh)(e,"trueIcon"),readonly:(0,c.Vh)(e,"readonly"),type:(0,c.Vh)(e,"type")}),(0,p.L)((()=>{var l;return(0,o.Wm)("div",{class:"v-selection-control-group","aria-labelled-by":"radio"===e.type?r.value:void 0,role:"radio"===e.type?"radiogroup":void 0},[null==a||null==(l=a.default)?void 0:l.call(a)])})),{}}});var y=a(9694),h=a(7041),b=a(2370),V=a(3824),w=a(3766),g=a(2385);const k=(0,w.U)({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,label:String,falseIcon:String,trueIcon:String,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,trueValue:null,falseValue:null,modelValue:null,type:String,value:null,valueComparator:{type:Function,default:v.vZ},...(0,h.x$)(),...(0,y.f)()});function C(e){const l=(0,o.f3)(f,void 0),{densityClasses:a}=(0,y.t)(e),t=(0,d.z)(e,"modelValue"),n=(0,o.Fl)((()=>void 0!==e.trueValue?e.trueValue:void 0===e.value||e.value)),r=(0,o.Fl)((()=>void 0!==e.falseValue&&e.falseValue)),u=(0,o.Fl)((()=>(null==l?void 0:l.multiple.value)||!!e.multiple||null==e.multiple&&Array.isArray(t.value))),s=(0,o.Fl)({get(){const a=l?l.modelValue.value:t.value;return u.value?a.some((l=>e.valueComparator(l,n.value))):e.valueComparator(a,n.value)},set(a){if(e.readonly)return;const o=a?n.value:r.value;let s=o;u.value&&(s=a?[...(0,v.FT)(t.value),o]:(0,v.FT)(t.value).filter((l=>!e.valueComparator(l,n.value)))),l?l.modelValue.value=s:t.value=s}}),{textColorClasses:i,textColorStyles:c}=(0,b.rY)((0,o.Fl)((()=>!s.value||e.error||e.disabled?void 0:e.color))),m=(0,o.Fl)((()=>{var a,o;return s.value?null!=(a=null==l?void 0:l.trueIcon.value)?a:e.trueIcon:null!=(o=null==l?void 0:l.falseIcon.value)?o:e.falseIcon}));return{group:l,densityClasses:a,trueValue:n,falseValue:r,model:s,textColorClasses:i,textColorStyles:c,icon:m}}const W=(0,m.e)()({name:"VSelectionControl",directives:{Ripple:V.H},inheritAttrs:!1,props:k(),emits:{"update:modelValue":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{densityClasses:n,group:r,icon:d,model:m,textColorClasses:f,textColorStyles:y,trueValue:h}=C(e),b=(0,v.sq)(),V=(0,o.Fl)((()=>e.id||`input-${b}`)),w=(0,c.iH)(!1),k=(0,c.iH)(!1),W=(0,c.iH)();function x(e){w.value=!0,(!g.Z1||g.Z1&&e.target.matches(":focus-visible"))&&(k.value=!0)}function I(){w.value=!1,k.value=!1}return(0,p.L)((()=>{var l,c,v,p;const b=t.label?t.label({label:e.label,props:{for:V.value}}):e.label,g=null!=(l=null==r?void 0:r.type.value)?l:e.type;return(0,o.Wm)("div",{class:["v-selection-control",{"v-selection-control--dirty":m.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":w.value,"v-selection-control--focus-visible":k.value,"v-selection-control--inline":(null==r?void 0:r.inline.value)||e.inline},n.value]},[(0,o.Wm)("div",{class:["v-selection-control__wrapper",f.value]},[null==(c=t.default)?void 0:c.call(t),(0,o.wy)((0,o.Wm)("div",{class:["v-selection-control__input"],style:y.value},[d.value&&(0,o.Wm)(s.t,{icon:d.value},null),(0,o.wy)((0,o.Wm)("input",(0,o.dG)({"onUpdate:modelValue":e=>m.value=e,ref:W,disabled:e.disabled,id:V.value,onBlur:I,onFocus:x,"aria-readonly":e.readonly,type:g,value:h.value,name:null!=(v=null==r?void 0:r.name.value)?v:e.name,"aria-checked":"checkbox"===g?m.value:void 0},a),null),[[u.YZ,m.value]]),null==(p=t.input)?void 0:p.call(t,{model:m,textColorClasses:f,props:{onFocus:x,onBlur:I,id:V.value}})]),[[(0,o.Q2)("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),(0,o.Wm)(i.J,{for:V.value},{default:()=>[b]})])})),{isFocused:w,input:W}}});function x(e){return(0,v.ei)(e,Object.keys(W.props))}const I=(0,m.a)({name:"VCheckbox",inheritAttrs:!1,props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},...(0,r.co)(),...k(),falseIcon:{type:String,default:"$checkboxOff"},trueIcon:{type:String,default:"$checkboxOn"}},emits:{"update:indeterminate":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const n=(0,d.z)(e,"indeterminate"),u=(0,o.Fl)((()=>n.value?e.indeterminateIcon:e.falseIcon)),s=(0,o.Fl)((()=>n.value?e.indeterminateIcon:e.trueIcon));function i(){n.value&&(n.value=!1)}return(0,p.L)((()=>{const[l,d]=(0,v.An)(a),[c,m]=(0,r.PE)(e),[p,f]=x(e);return(0,o.Wm)(r.q8,(0,o.dG)({class:"v-checkbox"},l,c),{...t,default:e=>{let{isDisabled:l,isReadonly:a}=e;return(0,o.Wm)(W,(0,o.dG)(p,{type:"checkbox","onUpdate:modelValue":i,falseIcon:u.value,trueIcon:s.value,"aria-checked":n.value?"mixed":void 0,disabled:l.value,readonly:a.value},d),t)}})})),{}}});var S=a(4357),F=a(6199);const U=(0,m.a)({name:"VForm",props:{...(0,S.vC)()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,l){let{slots:a,emit:t}=l;const n=(0,S.Np)(e),r=(0,c.iH)();function u(e){e.preventDefault(),n.reset()}function s(e){const l=e,a=n.validate();l.then=a.then.bind(a),l.catch=a.catch.bind(a),l.finally=a.finally.bind(a),t("submit",l),l.defaultPrevented||a.then((e=>{let{valid:l}=e;var a;l&&(null==(a=r.value)||a.submit())})),l.preventDefault()}return(0,p.L)((()=>{var e;return(0,o.Wm)("form",{ref:r,class:"v-form",novalidate:!0,onReset:u,onSubmit:s},[null==(e=a.default)?void 0:e.call(a,n)])})),(0,F.Z)(n,r)}});var _=a(3369),R=a(6824),$=a(8521),B=a(9671),Z=a(2902);const z=(0,o.Uk)(" 注册 "),A=(0,o.Uk)(" 重置 "),q=(0,o.Uk)(" 注册成功 ");function D(e,l,a,r,u,s){const i=(0,o.up)("email-verify");return(0,o.wg)(),(0,o.j4)(_.K,{fluid:""},{default:(0,o.w5)((()=>[(0,o.Wm)(U,{ref:"form",modelValue:u.valid,"onUpdate:modelValue":l[5]||(l[5]=e=>u.valid=e),"lazy-validation":""},{default:(0,o.w5)((()=>[(0,o.Wm)(Z.h,{modelValue:u.payload.username,"onUpdate:modelValue":l[0]||(l[0]=e=>u.payload.username=e),counter:10,rules:u.nameRules,label:"用户名",required:""},null,8,["modelValue","rules"]),(0,o.Wm)(Z.h,{modelValue:u.payload.password,"onUpdate:modelValue":l[1]||(l[1]=e=>u.payload.password=e),counter:15,rules:u.passwordRules,label:"密码","append-icon":u.showPassword?"mdi-eye":"mdi-eye-off",type:u.showPassword?"text":"password",required:""},null,8,["modelValue","rules","append-icon","type"]),(0,o.Wm)(Z.h,{modelValue:u.password,"onUpdate:modelValue":l[2]||(l[2]=e=>u.password=e),counter:15,rules:u.confirmRules,label:"再次输入密码","append-icon":u.showPassword?"mdi-eye":"mdi-eye-off",type:u.showPassword?"text":"password",required:""},null,8,["modelValue","rules","append-icon","type"]),(0,o.Wm)(Z.h,{modelValue:u.payload.nickname,"onUpdate:modelValue":l[3]||(l[3]=e=>u.payload.nickname=e),rules:u.nickNameRules,label:"昵称",required:""},null,8,["modelValue","rules"]),(0,o.Wm)(i,{ref:"email"},null,512),(0,o.Wm)(I,{modelValue:u.checkbox,"onUpdate:modelValue":l[4]||(l[4]=e=>u.checkbox=e),rules:[e=>!!e||"必须同意以继续!"],label:"我已阅读并同意相关服务条款和隐私政策",required:""},null,8,["modelValue","rules"]),(0,o.Wm)(R.o,{class:"justify-space-between"},{default:(0,o.w5)((()=>[(0,o.Wm)($.D,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(n.T,{size:"x-large",disabled:!u.valid,color:"success",onClick:s.validate},{default:(0,o.w5)((()=>[z])),_:1},8,["disabled","onClick"])])),_:1}),(0,o.Wm)($.D,{align:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(n.T,{size:"x-large",color:"error",onClick:s.reset},{default:(0,o.w5)((()=>[A])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(B.v,{modelValue:u.success,"onUpdate:modelValue":l[6]||(l[6]=e=>u.success=e),color:"success"},{default:(0,o.w5)((()=>[q])),_:1},8,["modelValue"]),(0,o.Wm)(B.v,{modelValue:u.error,"onUpdate:modelValue":l[7]||(l[7]=e=>u.error=e),color:"error"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(u.msg),1)])),_:1},8,["modelValue"])])),_:1})}function P(e,l,a,r,u,s){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(Z.h,{width:"300",modelValue:u.email,"onUpdate:modelValue":l[0]||(l[0]=e=>u.email=e),rules:u.emailRules,label:"电子邮箱",required:""},null,8,["modelValue","rules"]),(0,o.Wm)(R.o,{class:"justify-space-between"},{default:(0,o.w5)((()=>[(0,o.Wm)($.D,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Z.h,{modelValue:u.code,"onUpdate:modelValue":l[1]||(l[1]=e=>u.code=e),label:"邮件验证码"},null,8,["modelValue"])])),_:1}),(0,o.Wm)($.D,null,{default:(0,o.w5)((()=>[(0,o.Wm)(n.T,{height:"56%",color:"primary",block:"",elevation:"2",onClick:l[2]||(l[2]=e=>s.sendEmailCode()),disabled:u.send.timer>0,type:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(s.sendText),1)])),_:1},8,["disabled"])])),_:1})])),_:1})],64)}var T=a(1844),H={data(){return{send:{timer:0},email:"",code:"",emailRules:[e=>!!e||"电子邮箱不可以为空",e=>/.+@.+\..+/.test(e)||"必须是有效的电子邮箱地址"]}},computed:{sendText(){return this.send.timer<=0?"发送邮箱验证码":`${this.send.timer}s后发送邮箱验证码`}},methods:{async sendEmailCode(){T.Z.sendCode(this.email),this.send.timer=10,this.timer=setInterval((()=>{this.send.timer-=1,0===this.send.timer&&clearInterval(this.timer)}),1e3)}}},j=a(89);const E=(0,j.Z)(H,[["render",P]]);var G=E,L=a(2900),O={data(){return{send:{timer:0},password:"",showPassword:!1,success:!1,error:!1,msg:"",bytes:a(9852),valid:!0,nameRules:[e=>!!e||"用户名不可以为空",e=>/^[a-zA-Z0-9_-]*$/.test(e)||"用户名只能包含字母、数字、下划线和减号",e=>e&&e.length<=10||"用户名不可以超过10个字符"],passwordRules:[e=>!!e||"密码不可以为空",e=>e&&e.length>=8||"密码至少8个字符",e=>/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]*$/.test(e)||"密码只能包含字母和数字，至少一个字母和一个数字",e=>e&&e.length<=15||"密码不可以超过15个字符"],confirmRules:[e=>e==this.payload.password||"两次密码不一致"],nickNameRules:[e=>!!e||"昵称不可以为空",e=>this.bytes(e)<=15||"昵称太长"],checkbox:!1,payload:{username:"",password:"",nickname:""}}},components:{EmailVerify:G},methods:{validate(){this.$refs.form.validate(),T.Z.verifyCode(this.$refs.email.email,this.$refs.email.code).then((e=>{e?L.Z.register(Object.assign(this.payload,{email:this.$refs.email.email})).then((e=>{e.updateSuccess?this.success=!0:(this.msg=e.err,this.error=!0)})):(this.msg="邮箱验证码不正确",this.error=!0)}))},reset(){this.$refs.form.reset()}}};const J=(0,j.Z)(O,[["render",D]]);var N=J}}]);
//# sourceMappingURL=926.93dadfed.js.map