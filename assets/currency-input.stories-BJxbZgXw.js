import{r as u,j as e}from"./iframe-nrIlHJha.js";import{C as s}from"./currency-input-D5-Ifq0S.js";import"./preload-helper-DEha_CyH.js";import"./input-D6TI2qGU.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const p={title:"Components/CurrencyInput",component:s,parameters:{layout:"centered"}},r={render:()=>{const[a,n]=u.useState();return e.jsxs("div",{className:"space-y-2 w-64",children:[e.jsx(s,{placeholder:"Enter amount",value:a,onValueChange:n}),e.jsxs("div",{className:"text-sm text-muted-foreground",children:["Current value: ",a??"undefined"]})]})}},t={render:()=>{const[a,n]=u.useState(5);return e.jsxs("div",{className:"space-y-2 w-64",children:[e.jsx(s,{value:a,onValueChange:n,min:0,max:10,decimalScale:2}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Clamped between 0 and 10"})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>();
    return <div className="space-y-2 w-64">
        <CurrencyInput placeholder="Enter amount" value={value} onValueChange={setValue} />
        <div className="text-sm text-muted-foreground">
          Current value: {value ?? 'undefined'}
        </div>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | undefined>(5);
    return <div className="space-y-2 w-64">
        <CurrencyInput value={value} onValueChange={setValue} min={0} max={10} decimalScale={2} />
        <div className="text-sm text-muted-foreground">
          Clamped between 0 and 10
        </div>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const v=["Controlled","WithBounds"];export{r as Controlled,t as WithBounds,v as __namedExportsOrder,p as default};
