import{r as q,j as y}from"./iframe-DB_8LERs.js";import{c as $}from"./clsx-B-dksMZM.js";import{r as J}from"./field-autofill-props-Dh75dEkE.js";import{y as K,O as Y,z as Q,b as S,w as X,o as Z,A as ee,a as ne,C as ae,p as re,d as te,J as ie,M as le,ab as se,v as oe,r as ue}from"./input-shell-lz5TZXvM.js";import{B as me}from"./button-vlU5xtrA.js";const R=2,H=e=>e.replace(/,/g,"");function x(e,n="en-GB",a=R,r=0){return e==null?"":new Intl.NumberFormat(n,{minimumFractionDigits:r,maximumFractionDigits:a}).format(e)}function ce(e,n="en-GB",a=R){const r=H(e);if(r==="")return"";const t=r.includes("."),[l,m=""]=r.split("."),i=l.replace(/\D/g,""),s=i?new Intl.NumberFormat(n,{maximumFractionDigits:0}).format(Number(i)):"";if(!t)return s;const k=m.replace(/\D/g,"").slice(0,a);return s===""&&k===""?".":`${s===""?"0":s}.${k}`}function E(e){if(e==null||e==="")return;const n=typeof e=="number"?e:Number(e);return Number.isNaN(n)?void 0:n}function pe(e,n){return e.includes(".")?Math.min(e.split(".")[1]?.length??0,n):0}function F(e,n){const a=H(e),r=pe(a,n);if(a===""||a===".")return{sanitized:a,parsed:void 0,decimals:0};const t=Number(a);return{sanitized:a,parsed:Number.isNaN(t)?void 0:t,decimals:r}}function A(e,n,a){const r=E(n),t=E(a),l=r===void 0?e:Math.max(e,r);return t===void 0?l:Math.min(l,t)}const de=R,ve=q.forwardRef(function(n,a){const{render:r,className:t,id:l,name:m,value:i,disabled:s=!1,onValueChange:k,defaultValue:h,autoFocus:d=!1,style:N,...P}=n,{state:V,name:g,disabled:o,setTouched:v,setDirty:f,validityData:c,setFocused:w,setFilled:p,validationMode:I,validation:b}=K(),T=o||s,M=g??m,L={...V,disabled:T},{labelId:_}=Y(),O=Q({id:l});S(()=>{const u=i!=null;b.inputRef.current?.value||u&&i!==""?p(!0):u&&i===""&&p(!1)},[b.inputRef,p,i]);const C=q.useRef(null);S(()=>{d&&C.current===X(Z(C.current))&&w(!0)},[d,w]);const[U]=ee({controlled:i,default:h,name:"FieldControl",state:"value"}),D=i!==void 0,j=D?U:void 0,G=ne(()=>b.inputRef.current?.value);return ae(b.inputRef,O,j,G),re("input",n,{ref:[a,C],state:L,props:[{id:O,disabled:T,name:M,ref:b.inputRef,"aria-labelledby":_,autoFocus:d,...D?{value:j}:{defaultValue:h},onChange(u){const B=u.currentTarget.value;k?.(B,te(ie,u.nativeEvent)),f(B!==c.initialValue),p(B!=="")},onFocus(){w(!0)},onBlur(u){v(!0),w(!1),I==="onBlur"&&b.commit(u.currentTarget.value)},onKeyDown(u){u.currentTarget.tagName==="INPUT"&&u.key==="Enter"&&(v(!0),b.commit(u.currentTarget.value))}},b.getInputValidationProps(),P],stateAttributesMapping:le})}),ye=q.forwardRef(function(n,a){return y.jsx(ve,{ref:a,...n})}),ge={variant:"ghost",size:"sm",shape:"square"};function z({ref:e,className:n,inputClassName:a,type:r,leadingVisual:t,trailingVisual:l,trailingAction:m,size:i="default",error:s,success:k,"aria-invalid":h,disabled:d,autoComplete:N,...P}){const V=s===!0,g=m?y.jsx(fe,{...m}):void 0,o=!!(g??l);return y.jsx(se,{className:n,size:i,error:V,success:k,leadingVisual:t,trailingVisual:m?void 0:l,trailingAction:g,children:y.jsx(ye,{...P,...J({autoComplete:N}),ref:e,type:r,disabled:d,"aria-invalid":V?!0:h,"data-slot":"input",className:oe({hasLeadingVisual:!!t,hasTrailingVisual:o,inputClassName:a})})})}function fe({className:e,...n}){return y.jsx(me,{...ge,...n,className:$(ue["slot-action-button"],e)})}z.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement | null>",elements:[{name:"union",raw:"HTMLInputElement | null",elements:[{name:"HTMLInputElement"},{name:"null"}]}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},leadingVisual:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Decorative or non-interactive leading content (e.g. icon, flag)."},trailingVisual:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Decorative or non-interactive trailing content (e.g. spinner)."},trailingAction:{required:!1,tsType:{name:"union",raw:"IconOnlyButtonAsButton | IconOnlyButtonAsAnchor",elements:[{name:"intersection",raw:`IconOnlyButtonBaseProps &
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
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'button'"}],raw:"ComponentPropsWithoutRef<'button'>"},{name:"union",raw:"keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'",elements:[{name:"intersection",raw:`SharedButtonProps & {
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
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"literal",value:"'as'"},{name:"literal",value:"'href'"},{name:"literal",value:"'children'"}]}],raw:"Omit<ComponentPropsWithoutRef<'button'>, keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'>"},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'a'"}],raw:"ComponentPropsWithoutRef<'a'>"},{name:"union",raw:"keyof IconOnlyButtonBaseProps | 'as' | 'children'",elements:[{name:"intersection",raw:`SharedButtonProps & {
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
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"literal",value:"'as'"},{name:"literal",value:"'children'"}]}],raw:"Omit<ComponentPropsWithoutRef<'a'>, keyof IconOnlyButtonBaseProps | 'as' | 'children'>"},{name:"signature",type:"object",raw:`{
  as: 'a';
  href: string;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'a'",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}]}]},description:"Interactive trailing button (e.g. show password, open picker)."},inputClassName:{required:!1,tsType:{name:"string"},description:""},format:{required:!1,tsType:{name:"never"},description:""},size:{defaultValue:{value:"'default'",computed:!1},required:!1}}};function W({value:e,onValueChange:n,decimalScale:a=de,locale:r="en-GB",min:t,max:l,currencySymbol:m="£",leadingVisual:i,onBlur:s,format:k,...h}){const[d,N]=q.useState(""),[P,V]=q.useState(!1),g=q.useRef(e),o=q.useRef(0);return q.useEffect(()=>{if(P||e==null)return;g.current!==e&&(o.current=0);const f=o.current>0?Math.min(o.current,a):0,c=x(e,r,a,f);c!==d&&N(c),g.current=e},[a,d,P,r,e]),y.jsx(z,{...h,type:"text",inputMode:"decimal",leadingVisual:i??(m?y.jsx("span",{children:m}):void 0),value:d,onBlur:v=>{V(!1);const f=v.currentTarget.value,{parsed:c,decimals:w}=F(f,a);if(c===void 0){N(""),o.current=0,n?.(void 0),s?.(v);return}const p=A(c,t,l),I=w;o.current=I,N(x(p,r,a,I)),n?.(p),s?.(v)},onChange:v=>{V(!0);const f=ce(v.target.value,r,a);N(f);const{parsed:c,decimals:w}=F(f,a);if(c===void 0){o.current=0,n?.(void 0);return}const p=A(c,t,l);o.current=w,g.current=p,n?.(p)}})}W.__docgenInfo={description:"",methods:[],displayName:"CurrencyFormatInput",props:{format:{required:!0,tsType:{name:"literal",value:"'currency'"},description:""},value:{required:!1,tsType:{name:"number"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},decimalScale:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},locale:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'en-GB'",computed:!1}},min:{required:!1,tsType:{name:"number"},description:""},max:{required:!1,tsType:{name:"number"},description:""},currencySymbol:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'£'",computed:!1}},trailingVisual:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingAction:{required:!1,tsType:{name:"union",raw:"IconOnlyButtonAsButton | IconOnlyButtonAsAnchor",elements:[{name:"intersection",raw:`IconOnlyButtonBaseProps &
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
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'button'"}],raw:"ComponentPropsWithoutRef<'button'>"},{name:"union",raw:"keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'",elements:[{name:"intersection",raw:`SharedButtonProps & {
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
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"literal",value:"'as'"},{name:"literal",value:"'href'"},{name:"literal",value:"'children'"}]}],raw:"Omit<ComponentPropsWithoutRef<'button'>, keyof IconOnlyButtonBaseProps | 'as' | 'href' | 'children'>"},{name:"signature",type:"object",raw:`{
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
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'a'"}],raw:"ComponentPropsWithoutRef<'a'>"},{name:"union",raw:"keyof IconOnlyButtonBaseProps | 'as' | 'children'",elements:[{name:"intersection",raw:`SharedButtonProps & {
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
}`,signature:{properties:[{key:"icon",value:{name:"ComponentType",elements:[{name:"signature",type:"object",raw:"{ className?: string }",signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}}],raw:"ComponentType<{ className?: string }>",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:"VariantProps<typeof buttonVariants>['variant'] | 'danger'",elements:[{name:"VariantProps['variant']",raw:"VariantProps<typeof buttonVariants>['variant']"},{name:"literal",value:"'danger'"}],required:!1}},{key:"size",value:{name:"union",raw:"keyof typeof iconButtonSizes",elements:[{name:"literal",value:"sm"},{name:"literal",value:"md"},{name:"literal",value:"lg"}],required:!1}},{key:"shape",value:{name:"union",raw:"'square' | 'circle'",elements:[{name:"literal",value:"'square'"},{name:"literal",value:"'circle'"}],required:!1}},{key:"aria-label",value:{name:"string",required:!0}}]}}]},{name:"literal",value:"'as'"},{name:"literal",value:"'children'"}]}],raw:"Omit<ComponentPropsWithoutRef<'a'>, keyof IconOnlyButtonBaseProps | 'as' | 'children'>"},{name:"signature",type:"object",raw:`{
  as: 'a';
  href: string;
}`,signature:{properties:[{key:"as",value:{name:"literal",value:"'a'",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}]}]},description:""}}};function we(e){return e.format==="currency"}function be(e){return we(e)?y.jsx(W,{...e}):y.jsx(z,{...e})}be.__docgenInfo={description:"",methods:[],displayName:"Input"};export{be as I};
