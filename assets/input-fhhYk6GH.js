import{b as Re,r as o,j as g}from"./iframe-2gSw_mv2.js";import{c as B}from"./clsx-B-dksMZM.js";import{B as Pe}from"./button-CJEJXt86.js";import{r as Ve}from"./field-autofill-props-Dh75dEkE.js";import{c as Ce}from"./index-B8k91cqS.js";const x=2,re=e=>e.replace(/,/g,"");function Y(e,n="en-GB",a=x,t=0){return e==null?"":new Intl.NumberFormat(n,{minimumFractionDigits:t,maximumFractionDigits:a}).format(e)}function Ee(e,n="en-GB",a=x){const t=re(e);if(t==="")return"";const r=t.includes("."),[i,l=""]=t.split("."),s=i.replace(/\D/g,""),u=s?new Intl.NumberFormat(n,{maximumFractionDigits:0}).format(Number(s)):"";if(!r)return u;const c=l.replace(/\D/g,"").slice(0,a);return u===""&&c===""?".":`${u===""?"0":u}.${c}`}function Z(e){if(e==null||e==="")return;const n=typeof e=="number"?e:Number(e);return Number.isNaN(n)?void 0:n}function Te(e,n){return e.includes(".")?Math.min(e.split(".")[1]?.length??0,n):0}function J(e,n){const a=re(e),t=Te(a,n);if(a===""||a===".")return{sanitized:a,parsed:void 0,decimals:0};const r=Number(a);return{sanitized:a,parsed:Number.isNaN(r)?void 0:r,decimals:t}}function K(e,n,a){const t=Z(n),r=Z(a),i=t===void 0?e:Math.max(e,t);return r===void 0?i:Math.min(i,r)}const Be=x,F={...Re},X={};function S(e,n){const a=o.useRef(X);return a.current===X&&(a.current=e(n)),a}const j=F.useInsertionEffect,_e=j&&j!==F.useLayoutEffect?j:e=>e();function ie(e){const n=S(ze).current;return n.next=e,_e(n.effect),n.trampoline}function ze(){const e={next:void 0,callback:Se,trampoline:(...n)=>e.callback?.(...n),effect:()=>{e.callback=e.next}};return e}function Se(){}function Oe(e,n){return function(t,...r){const i=new URL(e);return i.searchParams.set("code",t.toString()),r.forEach(l=>i.searchParams.append("args[]",l)),`${n} error #${t}; visit ${i} for the full message.`}}const De=Oe("https://base-ui.com/production-error","Base UI");function y(){}const C=Object.freeze({});let Q=(function(e){return e.disabled="data-disabled",e.valid="data-valid",e.invalid="data-invalid",e.touched="data-touched",e.dirty="data-dirty",e.filled="data-filled",e.focused="data-focused",e})({});const je={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:null,valueMissing:!1},E={valid:null,touched:!1,dirty:!1,filled:!1,focused:!1},Ae={disabled:!1,...E},xe={valid(e){return e===null?null:e?{[Q.valid]:""}:{[Q.invalid]:""}}},Fe={invalid:void 0,name:void 0,validityData:{state:je,errors:[],error:"",value:"",initialValue:null},setValidityData:y,disabled:void 0,touched:E.touched,setTouched:y,dirty:E.dirty,setDirty:y,filled:E.filled,setFilled:y,focused:E.focused,setFocused:y,validate:()=>null,validationMode:"onSubmit",validationDebounceTime:0,shouldValidateOnChange:()=>!1,state:Ae,markedDirtyRef:{current:!1},registerFieldControl:y,validation:{getValidationProps:(e=C)=>e,getInputValidationProps:(e=C)=>e,inputRef:{current:null},commit:async()=>{}}},Le=o.createContext(Fe);function le(e=!0){const n=o.useContext(Le);if(n.setValidityData===y&&!e)throw new Error(De(28));return n}function A(e,n){if(e&&!n)return e;if(!e&&n)return n;if(e||n)return{...e,...n}}const L={};function se(e,n,a,t,r){if(!e)return _(n);let i=_(e);return n&&(i=oe(i,n)),i}function Me(e){if(e.length===0)return L;if(e.length===1)return _(e[0]);let n=_(e[0]);for(let a=1;a<e.length;a+=1)n=oe(n,e[a]);return n}function _(e){return M(e)?{...ce(e,L)}:Ue(e)}function oe(e,n){return M(n)?ce(n,e):We(e,n)}function Ue(e){const n={...e};for(const a in n){const t=n[a];ue(a,t)&&(n[a]=me(t))}return n}function We(e,n){if(!n)return e;for(const a in n){const t=n[a];switch(a){case"style":{e[a]=A(e.style,t);break}case"className":{e[a]=fe(e.className,t);break}default:ue(a,t)?e[a]=He(e[a],t):e[a]=t}}return e}function ue(e,n){const a=e.charCodeAt(0),t=e.charCodeAt(1),r=e.charCodeAt(2);return a===111&&t===110&&r>=65&&r<=90&&(typeof n=="function"||typeof n>"u")}function M(e){return typeof e=="function"}function ce(e,n){return M(e)?e(n):e??L}function He(e,n){return n?e?(...a)=>{const t=a[0];if(pe(t)){const i=t;de(i);const l=n(...a);return i.baseUIHandlerPrevented||e?.(...a),l}const r=n(...a);return e?.(...a),r}:me(n):e}function me(e){return e&&((...n)=>{const a=n[0];return pe(a)&&de(a),e(...n)})}function de(e){return e.preventBaseUIHandler=()=>{e.baseUIHandlerPrevented=!0},e}function fe(e,n){return n?e?n+" "+e:n:e}function pe(e){return e!=null&&typeof e=="object"&&"nativeEvent"in e}let ee=0;function $e(e,n="mui"){const[a,t]=o.useState(e),r=e||a;return o.useEffect(()=>{a==null&&(ee+=1,t(`${n}-${ee}`))},[a,n]),r}const ne=F.useId;function Ge(e,n){if(ne!==void 0){const a=ne();return e??(n?`${n}-${a}`:a)}return $e(e,n)}function Ye(e){return Ge(e,"base-ui")}const Ze=o.createContext({controlId:void 0,registerControlId:y,labelId:void 0,setLabelId:y,messageIds:[],setMessageIds:y,getDescriptionProps:e=>e});function ve(){return o.useContext(Ze)}const Je=()=>{},z=typeof document<"u"?o.useLayoutEffect:Je;function Ke(){return typeof window<"u"}function Xe(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Qe(e){return Ke()?e instanceof Element||e instanceof Xe(e).Element:!1}function en(e={}){const{id:n,implicit:a=!1,controlRef:t}=e,{controlId:r,registerControlId:i}=ve(),l=Ye(n),s=a?r:void 0,u=S(()=>Symbol("labelable-control")),c=o.useRef(!1),v=o.useRef(n!=null),m=ie(()=>{!c.current||i===y||(c.current=!1,i(u.current,void 0))});return z(()=>{if(i===y)return;let f;if(a){const b=t?.current;Qe(b)&&b.closest("label")!=null?f=n??null:f=s??l}else if(n!=null)v.current=!0,f=n;else if(v.current)f=l;else{m();return}if(f===void 0){m();return}c.current=!0,i(u.current,f)},[n,t,s,i,a,l,u,m]),o.useEffect(()=>m,[m]),r??l}function nn(e){return e?.ownerDocument||document}function an(e){let n=e.activeElement;for(;n?.shadowRoot?.activeElement!=null;)n=n.shadowRoot.activeElement;return n}function ae(e,n,a,t){const r=S(ye).current;return rn(r,e,n,a,t)&&ge(r,[e,n,a,t]),r.callback}function tn(e){const n=S(ye).current;return ln(n,e)&&ge(n,e),n.callback}function ye(){return{callback:null,cleanup:null,refs:[]}}function rn(e,n,a,t,r){return e.refs[0]!==n||e.refs[1]!==a||e.refs[2]!==t||e.refs[3]!==r}function ln(e,n){return e.refs.length!==n.length||e.refs.some((a,t)=>a!==n[t])}function ge(e,n){if(e.refs=n,n.every(a=>a==null)){e.callback=null;return}e.callback=a=>{if(e.cleanup&&(e.cleanup(),e.cleanup=null),a!=null){const t=Array(n.length).fill(null);for(let r=0;r<n.length;r+=1){const i=n[r];if(i!=null)switch(typeof i){case"function":{const l=i(a);typeof l=="function"&&(t[r]=l);break}case"object":{i.current=a;break}}}e.cleanup=()=>{for(let r=0;r<n.length;r+=1){const i=n[r];if(i!=null)switch(typeof i){case"function":{const l=t[r];typeof l=="function"?l():i(null);break}case"object":{i.current=null;break}}}}}}}const sn=parseInt(o.version,10);function on(e){return sn>=e}function te(e){if(!o.isValidElement(e))return null;const n=e,a=n.props;return(on(19)?a?.ref:n.ref)??null}function un(e,n){const a={};for(const t in e){const r=e[t];if(n?.hasOwnProperty(t)){const i=n[t](r);i!=null&&Object.assign(a,i);continue}r===!0?a[`data-${t.toLowerCase()}`]="":r&&(a[`data-${t.toLowerCase()}`]=r.toString())}return a}function cn(e,n){return typeof e=="function"?e(n):e}function mn(e,n){return typeof e=="function"?e(n):e}function dn(e,n,a={}){const t=n.render,r=fn(n,a);if(a.enabled===!1)return null;const i=a.state??C;return yn(e,t,r,i)}function fn(e,n={}){const{className:a,style:t,render:r}=e,{state:i=C,ref:l,props:s,stateAttributesMapping:u,enabled:c=!0}=n,v=c?cn(a,i):void 0,m=c?mn(t,i):void 0,f=c?un(i,u):C,b=c&&s?pn(s):void 0,d=c?A(f,b)??{}:C;return typeof document<"u"&&(c?Array.isArray(l)?d.ref=tn([d.ref,te(r),...l]):d.ref=ae(d.ref,te(r),l):ae(null,null)),c?(v!==void 0&&(d.className=fe(d.className,v)),m!==void 0&&(d.style=A(d.style,m)),d):C}function pn(e){return Array.isArray(e)?Me(e):se(void 0,e)}const vn=Symbol.for("react.lazy");function yn(e,n,a,t){if(n){if(typeof n=="function")return n(a,t);const r=se(a,n.props);r.ref=a.ref;let i=n;return i?.$$typeof===vn&&(i=o.Children.toArray(n)[0]),o.cloneElement(i,r)}return gn(e,a)}function gn(e,n){return o.createElement(e,n)}function bn({controlled:e,default:n,name:a,state:t="value"}){const{current:r}=o.useRef(e!==void 0),[i,l]=o.useState(n),s=r?e:i,u=o.useCallback(c=>{r||l(c)},[]);return[s,u]}function wn(e,n,a,t,r=!0){const{registerFieldControl:i}=le(),l=o.useRef(null);l.current||(l.current=Symbol()),z(()=>{const s=l.current;return!s||!r?void 0:(i(s,{controlRef:e,getValue:t,id:n,value:a}),()=>{i(s,void 0)})},[e,r,t,n,i,a])}const hn="none";function qn(e,n,a,t){let r=!1,i=!1;const l=C;return{reason:e,event:n??new Event("base-ui"),cancel(){r=!0},allowPropagation(){i=!0},get isCanceled(){return r},get isPropagationAllowed(){return i},trigger:a,...l}}const kn=o.forwardRef(function(n,a){const{render:t,className:r,id:i,name:l,value:s,disabled:u=!1,onValueChange:c,defaultValue:v,autoFocus:m=!1,style:f,...b}=n,{state:d,name:N,disabled:w,setTouched:I,setDirty:R,validityData:q,setFocused:P,setFilled:k,validationMode:T,validation:V}=le(),W=w||u,he=N??l,qe={...d,disabled:W},{labelId:ke}=ve(),H=en({id:i});z(()=>{const h=s!=null;V.inputRef.current?.value||h&&s!==""?k(!0):h&&s===""&&k(!1)},[V.inputRef,k,s]);const O=o.useRef(null);z(()=>{m&&O.current===an(nn(O.current))&&P(!0)},[m,P]);const[Ie]=bn({controlled:s,default:v,name:"FieldControl",state:"value"}),$=s!==void 0,G=$?Ie:void 0,Ne=ie(()=>V.inputRef.current?.value);return wn(V.inputRef,H,G,Ne),dn("input",n,{ref:[a,O],state:qe,props:[{id:H,disabled:W,name:he,ref:V.inputRef,"aria-labelledby":ke,autoFocus:m,...$?{value:G}:{defaultValue:v},onChange(h){const D=h.currentTarget.value;c?.(D,qn(hn,h.nativeEvent)),R(D!==q.initialValue),k(D!=="")},onFocus(){P(!0)},onBlur(h){I(!0),P(!1),T==="onBlur"&&V.commit(h.currentTarget.value)},onKeyDown(h){h.currentTarget.tagName==="INPUT"&&h.key==="Enter"&&(I(!0),V.commit(h.currentTarget.value))}},V.getInputValidationProps(),b],stateAttributesMapping:xe})}),In=o.forwardRef(function(n,a){return g.jsx(kn,{ref:a,...n})}),Nn="_root_nho5e_1",Rn="_slot_nho5e_94",Pn="_input_nho5e_148",p={root:Nn,"root--error":"_root--error_nho5e_35","root--success":"_root--success_nho5e_36","size-default":"_size-default_nho5e_71","size-sm":"_size-sm_nho5e_78","size-lg":"_size-lg_nho5e_85",slot:Rn,"slot-action":"_slot-action_nho5e_104","slot-action-button":"_slot-action-button_nho5e_127",input:Pn,"input-pad":"_input-pad_nho5e_159","input-pad-none-left":"_input-pad-none-left_nho5e_163","input-pad-none-right":"_input-pad-none-right_nho5e_167"},Vn=Ce(p.root,{variants:{size:{default:p["size-default"],sm:p["size-sm"],lg:p["size-lg"]},error:{true:p["root--error"],false:""},success:{true:p["root--success"],false:""}},defaultVariants:{size:"default",error:!1,success:!1}});function Cn({hasStartElement:e,hasEndElement:n,inputClassName:a}){return B(p.input,p["input-pad"],e&&p["input-pad-none-left"],n&&p["input-pad-none-right"],a)}function be({className:e,startElement:n,endElement:a,endSlotAction:t=!1,size:r="default",error:i,success:l,children:s}){const u=i===!0,c=l===!0&&!u;return g.jsxs("div",{className:B(Vn({size:r,error:u,success:c}),e),children:[n?g.jsx("div",{className:p.slot,children:n}):null,s,a?g.jsx("div",{className:B(p.slot,t&&p["slot-action"]),children:a}):null]})}be.__docgenInfo={description:"",methods:[],displayName:"InputShell",props:{className:{required:!1,tsType:{name:"string"},description:""},startElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endSlotAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{defaultValue:{value:"'default'",computed:!1},required:!1}}};const En={variant:"ghost",size:"small",shape:"square"};function U({ref:e,className:n,inputClassName:a,type:t,startElement:r,endElement:i,trailingAction:l,size:s="default",error:u,success:c,"aria-invalid":v,disabled:m,autoComplete:f,...b}){const d=u===!0,N=l?g.jsx(Tn,{...l}):i,w=!!N;return g.jsx(be,{className:n,size:s,error:d,success:c,startElement:r,endElement:N,endSlotAction:!!l,children:g.jsx(In,{...b,...Ve({autoComplete:f}),ref:e,type:t,disabled:m,"aria-invalid":d?!0:v,"data-slot":"input",className:Cn({hasStartElement:!!r,hasEndElement:w,inputClassName:a})})})}function Tn({className:e,...n}){return g.jsx(Pe,{...En,...n,className:B(p["slot-action-button"],e)})}U.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement | null>",elements:[{name:"union",raw:"HTMLInputElement | null",elements:[{name:"HTMLInputElement"},{name:"null"}]}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},startElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Decorative or non-interactive trailing content (e.g. spinner). Use `trailingAction` for buttons."},trailingAction:{required:!1,tsType:{name:"union",raw:"IconOnlyButtonAsButton | IconOnlyButtonAsAnchor",elements:[{name:"intersection",raw:`IconOnlyButtonBaseProps &
Omit<ComponentPropsWithoutRef<'button'>, keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'> & {
  as?: 'button';
  href?: never;
}`,elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconSizes",elements:[{name:"literal",value:"small"},{name:"literal",value:"medium"},{name:"literal",value:"large"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'button'"}],raw:"ComponentPropsWithoutRef<'button'>"},{name:"union",raw:"keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'",elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconSizes",elements:[{name:"literal",value:"small"},{name:"literal",value:"medium"},{name:"literal",value:"large"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"literal",value:"'as'"},{name:"literal",value:"'href'"},{name:"literal",value:"'children'"}]}],raw:"Omit<ComponentPropsWithoutRef<'button'>, keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'>"},{name:"signature",type:"object",raw:`{
  as?: 'button';
  href?: never;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'button'",required:!1}},{key:"href",value:{name:"never",required:!1}}]}}]},{name:"intersection",raw:`IconOnlyButtonBaseProps &
Omit<ComponentPropsWithoutRef<'a'>, keyof IconOnlyButtonBaseProps | 'as' | 'children'> & {
  as: 'a';
  href: string;
}`,elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconSizes",elements:[{name:"literal",value:"small"},{name:"literal",value:"medium"},{name:"literal",value:"large"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'a'"}],raw:"ComponentPropsWithoutRef<'a'>"},{name:"union",raw:"keyof IconOnlyButtonBaseProps | 'as' | 'children'",elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconSizes",elements:[{name:"literal",value:"small"},{name:"literal",value:"medium"},{name:"literal",value:"large"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"literal",value:"'as'"},{name:"literal",value:"'children'"}]}],raw:"Omit<ComponentPropsWithoutRef<'a'>, keyof IconOnlyButtonBaseProps | 'as' | 'children'>"},{name:"signature",type:"object",raw:`{
  as: 'a';
  href: string;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'a'",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}]}]},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""},format:{required:!1,tsType:{name:"never"},description:""},size:{defaultValue:{value:"'default'",computed:!1},required:!1}}};function we({value:e,onValueChange:n,decimalScale:a=Be,locale:t="en-GB",min:r,max:i,currencySymbol:l="£",startElement:s,onBlur:u,format:c,...v}){const[m,f]=o.useState(""),[b,d]=o.useState(!1),N=o.useRef(e),w=o.useRef(0);return o.useEffect(()=>{if(b||e==null)return;N.current!==e&&(w.current=0);const R=w.current>0?Math.min(w.current,a):0,q=Y(e,t,a,R);q!==m&&f(q),N.current=e},[a,m,b,t,e]),g.jsx(U,{...v,type:"text",inputMode:"decimal",startElement:s??(l?g.jsx("span",{children:l}):void 0),value:m,onBlur:I=>{d(!1);const R=I.currentTarget.value,{parsed:q,decimals:P}=J(R,a);if(q===void 0){f(""),w.current=0,n?.(void 0),u?.(I);return}const k=K(q,r,i),T=P;w.current=T,f(Y(k,t,a,T)),n?.(k),u?.(I)},onChange:I=>{d(!0);const R=Ee(I.target.value,t,a);f(R);const{parsed:q,decimals:P}=J(R,a);if(q===void 0){w.current=0,n?.(void 0);return}const k=K(q,r,i);w.current=P,N.current=k,n?.(k)}})}we.__docgenInfo={description:"",methods:[],displayName:"CurrencyFormatInput",props:{format:{required:!0,tsType:{name:"literal",value:"'currency'"},description:""},value:{required:!1,tsType:{name:"number"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},decimalScale:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'en-GB'",computed:!1}},min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},currencySymbol:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'£'",computed:!1}},endElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingAction:{required:!1,tsType:{name:"union",raw:"IconOnlyButtonAsButton | IconOnlyButtonAsAnchor",elements:[{name:"intersection",raw:`IconOnlyButtonBaseProps &
Omit<ComponentPropsWithoutRef<'button'>, keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'> & {
  as?: 'button';
  href?: never;
}`,elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconSizes",elements:[{name:"literal",value:"small"},{name:"literal",value:"medium"},{name:"literal",value:"large"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'button'"}],raw:"ComponentPropsWithoutRef<'button'>"},{name:"union",raw:"keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'",elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconSizes",elements:[{name:"literal",value:"small"},{name:"literal",value:"medium"},{name:"literal",value:"large"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"literal",value:"'as'"},{name:"literal",value:"'href'"},{name:"literal",value:"'children'"}]}],raw:"Omit<ComponentPropsWithoutRef<'button'>, keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'>"},{name:"signature",type:"object",raw:`{
  as?: 'button';
  href?: never;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'button'",required:!1}},{key:"href",value:{name:"never",required:!1}}]}}]},{name:"intersection",raw:`IconOnlyButtonBaseProps &
Omit<ComponentPropsWithoutRef<'a'>, keyof IconOnlyButtonBaseProps | 'as' | 'children'> & {
  as: 'a';
  href: string;
}`,elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconSizes",elements:[{name:"literal",value:"small"},{name:"literal",value:"medium"},{name:"literal",value:"large"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'a'"}],raw:"ComponentPropsWithoutRef<'a'>"},{name:"union",raw:"keyof IconOnlyButtonBaseProps | 'as' | 'children'",elements:[{name:"intersection",raw:`SharedButtonProps & {
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,elements:[{name:"signature",type:"object",raw:`{
  inactive?: boolean;
  loading?: boolean;
  description?: string;
  keybindingHint?: string;
  tooltipDirection?: 'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw';
  className?: string;
}`,signature:{properties:[{key:"inactive",value:{name:"boolean",required:!1}},{key:"loading",value:{name:"boolean",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"keybindingHint",value:{name:"string",required:!1}},{key:"tooltipDirection",value:{name:"union",raw:"'n' | 'ne' | 'e' | 'se' | 's' | 'sw' | 'w' | 'nw'",elements:[{name:"literal",value:"'n'"},{name:"literal",value:"'ne'"},{name:"literal",value:"'e'"},{name:"literal",value:"'se'"},{name:"literal",value:"'s'"},{name:"literal",value:"'sw'"},{name:"literal",value:"'w'"},{name:"literal",value:"'nw'"}],required:!1}},{key:"className",value:{name:"string",required:!1}}]}},{name:"signature",type:"object",raw:`{
  icon: IconComponent;
  children?: ReactNode;
  description?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'] | 'danger';
  size?: IconOnlyButtonSize;
  shape?: 'square' | 'circle';
  'aria-label': string;
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconSizes",elements:[{name:"literal",value:"small"},{name:"literal",value:"medium"},{name:"literal",value:"large"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"literal",value:"'as'"},{name:"literal",value:"'children'"}]}],raw:"Omit<ComponentPropsWithoutRef<'a'>, keyof IconOnlyButtonBaseProps | 'as' | 'children'>"},{name:"signature",type:"object",raw:`{
  as: 'a';
  href: string;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'a'",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}]}]},description:""}}};function Bn(e){return e.format==="currency"}function _n(e){return Bn(e)?g.jsx(we,{...e}):g.jsx(U,{...e})}_n.__docgenInfo={description:"",methods:[],displayName:"Input"};export{_n as I};
