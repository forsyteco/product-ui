import{r as u,j as e}from"./iframe-DRYa70Hz.js";import{C as s}from"./currency-input-D3JPTD10.js";import"./preload-helper-DEha_CyH.js";import"./input-DiO2kw93.js";import"./tailwind-CDN07tui.js";import"./button-BdH9eN90.js";import"./spinner-Cu9-SVLO.js";import"./visually-hidden-CK4IDd46.js";import"./index-cXaQtA9H.js";import"./field-autofill-props-Dh75dEkE.js";const h={title:"Components/CurrencyInput",component:s,parameters:{layout:"centered"}},t={render:()=>{const[r,n]=u.useState();return e.jsxs("div",{className:"space-y-2 w-64",children:[e.jsx(s,{placeholder:"Enter amount",value:r,onValueChange:n}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:["Current value: ",r??"undefined"]})]})}},a={render:()=>{const[r,n]=u.useState(5);return e.jsxs("div",{className:"space-y-2 w-64",children:[e.jsx(s,{value:r,onValueChange:n,min:0,max:10,decimalScale:2}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Clamped between 0 and 10"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>();
    return <div className="space-y-2 w-64">
        <CurrencyInput placeholder="Enter amount" value={value} onValueChange={setValue} />
        <div className="text-sm text-muted-foreground">
          Current value: {value ?? 'undefined'}
        </div>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(5);
    return <div className="space-y-2 w-64">
        <CurrencyInput value={value} onValueChange={setValue} min={0} max={10} decimalScale={2} />
        <div className="text-sm text-muted-foreground">
          Clamped between 0 and 10
        </div>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const f=["Controlled","WithBounds"];export{t as Controlled,a as WithBounds,f as __namedExportsOrder,h as default};
