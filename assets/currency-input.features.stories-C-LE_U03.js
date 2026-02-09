import{r as n,j as e}from"./iframe-nrIlHJha.js";import{C as t}from"./currency-input-D5-Ifq0S.js";import"./preload-helper-DEha_CyH.js";import"./input-D6TI2qGU.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const v={title:"Components/CurrencyInput/Features",component:t,parameters:{layout:"centered"}},a={render:()=>{const[l,s]=n.useState(),[r,u]=n.useState(5),[c,m]=n.useState(1234.56);return e.jsxs("div",{className:"space-y-4 w-72",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Default (2 decimals)"}),e.jsx(t,{placeholder:"Enter amount",value:l,onValueChange:s,currencySymbol:"£"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Clamped between 0 and 10"}),e.jsx(t,{value:r,onValueChange:u,min:0,max:10,decimalScale:2,currencySymbol:"$"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Different locale (fr-FR)"}),e.jsx(t,{value:c,onValueChange:m,locale:"fr-FR",decimalScale:2,currencySymbol:"€"})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [valueDefault, setValueDefault] = useState<number | undefined>();
    const [valueClamped, setValueClamped] = useState<number | undefined>(5);
    const [valueLocale, setValueLocale] = useState<number | undefined>(1234.56);
    return <div className="space-y-4 w-72">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Default (2 decimals)</p>
          <CurrencyInput placeholder="Enter amount" value={valueDefault} onValueChange={setValueDefault} currencySymbol="£" />
        </div>

        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Clamped between 0 and 10</p>
          <CurrencyInput value={valueClamped} onValueChange={setValueClamped} min={0} max={10} decimalScale={2} currencySymbol="$" />
        </div>

        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Different locale (fr-FR)</p>
          <CurrencyInput value={valueLocale} onValueChange={setValueLocale} locale="fr-FR" decimalScale={2} currencySymbol="€" />
        </div>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const y=["Variants"];export{a as Variants,y as __namedExportsOrder,v as default};
