import{r as q,j as y}from"./iframe-DyfPGUPW.js";import{c as $}from"./clsx-B-dksMZM.js";import{B as K}from"./button-8BxoxmXf.js";import{r as Y}from"./field-autofill-props-Dh75dEkE.js";import{u as J,y as Q,a as X,h as S,O as Z,I as ee,b as ne,e as ae,g as re,A as te,l as ie,q as le,w as se,P as oe,M as ue,K as me}from"./input-shell-DfhBUsuF.js";const B=2,H=e=>e.replace(/,/g,"");function E(e,n="en-GB",a=B,r=0){return e==null?"":new Intl.NumberFormat(n,{minimumFractionDigits:r,maximumFractionDigits:a}).format(e)}function ce(e,n="en-GB",a=B){const r=H(e);if(r==="")return"";const t=r.includes("."),[l,m=""]=r.split("."),i=l.replace(/\D/g,""),s=i?new Intl.NumberFormat(n,{maximumFractionDigits:0}).format(Number(i)):"";if(!t)return s;const k=m.replace(/\D/g,"").slice(0,a);return s===""&&k===""?".":`${s===""?"0":s}.${k}`}function x(e){if(e==null||e==="")return;const n=typeof e=="number"?e:Number(e);return Number.isNaN(n)?void 0:n}function pe(e,n){return e.includes(".")?Math.min(e.split(".")[1]?.length??0,n):0}function F(e,n){const a=H(e),r=pe(a,n);if(a===""||a===".")return{sanitized:a,parsed:void 0,decimals:0};const t=Number(a);return{sanitized:a,parsed:Number.isNaN(t)?void 0:t,decimals:r}}function A(e,n,a){const r=x(n),t=x(a),l=r===void 0?e:Math.max(e,r);return t===void 0?l:Math.min(l,t)}const de=B,ve=q.forwardRef(function(n,a){const{render:r,className:t,id:l,name:m,value:i,disabled:s=!1,onValueChange:k,defaultValue:h,autoFocus:d=!1,style:N,...V}=n,{state:P,name:f,disabled:o,setTouched:v,setDirty:g,validityData:c,setFocused:w,setFilled:p,validationMode:I,validation:b}=J(),O=o||s,M=f??m,L={...P,disabled:O},{labelId:_}=Q(),T=X({id:l});S(()=>{const u=i!=null;b.inputRef.current?.value||u&&i!==""?p(!0):u&&i===""&&p(!1)},[b.inputRef,p,i]);const C=q.useRef(null);S(()=>{d&&C.current===Z(ee(C.current))&&w(!0)},[d,w]);const[U]=ne({controlled:i,default:h,name:"FieldControl",state:"value"}),D=i!==void 0,j=D?U:void 0,G=ae(()=>b.inputRef.current?.value);return re(b.inputRef,T,j,G),te("input",n,{ref:[a,C],state:L,props:[{id:T,disabled:O,name:M,ref:b.inputRef,"aria-labelledby":_,autoFocus:d,...D?{value:j}:{defaultValue:h},onChange(u){const R=u.currentTarget.value;k?.(R,ie(le,u.nativeEvent)),g(R!==c.initialValue),p(R!=="")},onFocus(){w(!0)},onBlur(u){v(!0),w(!1),I==="onBlur"&&b.commit(u.currentTarget.value)},onKeyDown(u){u.currentTarget.tagName==="INPUT"&&u.key==="Enter"&&(v(!0),b.commit(u.currentTarget.value))}},b.getInputValidationProps(),V],stateAttributesMapping:se})}),ye=q.forwardRef(function(n,a){return y.jsx(ve,{ref:a,...n})}),fe={variant:"ghost",size:"small",shape:"square"};function z({ref:e,className:n,inputClassName:a,type:r,startElement:t,endElement:l,trailingAction:m,size:i="default",error:s,success:k,"aria-invalid":h,disabled:d,autoComplete:N,...V}){const P=s===!0,f=m?y.jsx(ge,{...m}):l,o=!!f;return y.jsx(oe,{className:n,size:i,error:P,success:k,startElement:t,endElement:f,endSlotAction:!!m,children:y.jsx(ye,{...V,...Y({autoComplete:N}),ref:e,type:r,disabled:d,"aria-invalid":P?!0:h,"data-slot":"input",className:ue({hasStartElement:!!t,hasEndElement:o,inputClassName:a})})})}function ge({className:e,...n}){return y.jsx(K,{...fe,...n,className:$(me["slot-action-button"],e)})}z.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement | null>",elements:[{name:"union",raw:"HTMLInputElement | null",elements:[{name:"HTMLInputElement"},{name:"null"}]}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},startElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Decorative or non-interactive trailing content (e.g. spinner). Use `trailingAction` for buttons."},trailingAction:{required:!1,tsType:{name:"union",raw:"IconOnlyButtonAsButton | IconOnlyButtonAsAnchor",elements:[{name:"intersection",raw:`IconOnlyButtonBaseProps &
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
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'a'",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}]}]},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""},format:{required:!1,tsType:{name:"never"},description:""},size:{defaultValue:{value:"'default'",computed:!1},required:!1}}};function W({value:e,onValueChange:n,decimalScale:a=de,locale:r="en-GB",min:t,max:l,currencySymbol:m="£",startElement:i,onBlur:s,format:k,...h}){const[d,N]=q.useState(""),[V,P]=q.useState(!1),f=q.useRef(e),o=q.useRef(0);return q.useEffect(()=>{if(V||e==null)return;f.current!==e&&(o.current=0);const g=o.current>0?Math.min(o.current,a):0,c=E(e,r,a,g);c!==d&&N(c),f.current=e},[a,d,V,r,e]),y.jsx(z,{...h,type:"text",inputMode:"decimal",startElement:i??(m?y.jsx("span",{children:m}):void 0),value:d,onBlur:v=>{P(!1);const g=v.currentTarget.value,{parsed:c,decimals:w}=F(g,a);if(c===void 0){N(""),o.current=0,n?.(void 0),s?.(v);return}const p=A(c,t,l),I=w;o.current=I,N(E(p,r,a,I)),n?.(p),s?.(v)},onChange:v=>{P(!0);const g=ce(v.target.value,r,a);N(g);const{parsed:c,decimals:w}=F(g,a);if(c===void 0){o.current=0,n?.(void 0);return}const p=A(c,t,l);o.current=w,f.current=p,n?.(p)}})}W.__docgenInfo={description:"",methods:[],displayName:"CurrencyFormatInput",props:{format:{required:!0,tsType:{name:"literal",value:"'currency'"},description:""},value:{required:!1,tsType:{name:"number"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},decimalScale:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'en-GB'",computed:!1}},min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},currencySymbol:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'£'",computed:!1}},endElement:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingAction:{required:!1,tsType:{name:"union",raw:"IconOnlyButtonAsButton | IconOnlyButtonAsAnchor",elements:[{name:"intersection",raw:`IconOnlyButtonBaseProps &
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
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'a'",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}]}]},description:""}}};function we(e){return e.format==="currency"}function be(e){return we(e)?y.jsx(W,{...e}):y.jsx(z,{...e})}be.__docgenInfo={description:"",methods:[],displayName:"Input"};export{be as I};
