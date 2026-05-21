import{r,j as e}from"./iframe-OIbwSsUo.js";import{C as s}from"./currency-input-jyEi5haU.js";import{B as l}from"./button-DTpuuVZa.js";import"./preload-helper-DEha_CyH.js";import"./input-CrrTd4yn.js";import"./tailwind-CDN07tui.js";import"./icon-button-YJ-VqUNZ.js";import"./index-cXaQtA9H.js";import"./spinner-Bi5eUUJM.js";import"./visually-hidden-D_6emP5w.js";import"./field-autofill-props-Dh75dEkE.js";const g={title:"Components/CurrencyInput/Examples",component:s,parameters:{layout:"padded"}},a={render:()=>{const[n,m]=r.useState();return e.jsxs("div",{className:"p-6 max-w-md space-y-4",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Send payment"}),e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Amount"}),e.jsx(s,{placeholder:"0.00",value:n,onValueChange:m,min:0,decimalScale:2,currencySymbol:"£"}),e.jsx("p",{className:"mt-1 text-sm text-muted-foreground",children:"Supports commas, partial decimals, and clamps to zero."})]}),e.jsx(l,{type:"submit",className:"w-full",children:"Pay now"})]})]})}},t={render:()=>{const[n,m]=r.useState(2500),o=5e3;return e.jsxs("div",{className:"p-6 max-w-md space-y-4",children:[e.jsx("h2",{className:"text-lg font-semibold",children:"Top up balance"}),e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-base font-medium text-gray-700 mb-1",children:["Amount (max ",o.toLocaleString(),")"]}),e.jsx(s,{value:n,onValueChange:m,min:0,max:o,decimalScale:2,currencySymbol:"$"}),e.jsx("p",{className:"mt-1 text-sm text-muted-foreground",children:"Value is clamped to the maximum allowed balance."})]}),e.jsx(l,{type:"submit",className:"w-full",children:"Top up"})]})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [amount, setAmount] = useState<number | undefined>();
    return <div className="p-6 max-w-md space-y-4">
        <h2 className="text-lg font-semibold">Send payment</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-base font-medium text-gray-700 mb-1">
              Amount
            </label>
            <CurrencyInput placeholder="0.00" value={amount} onValueChange={setAmount} min={0} decimalScale={2} currencySymbol="£" />
            <p className="mt-1 text-sm text-muted-foreground">
              Supports commas, partial decimals, and clamps to zero.
            </p>
          </div>
          <Button type="submit" className="w-full">
            Pay now
          </Button>
        </form>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [amount, setAmount] = useState<number | undefined>(2500);
    const max = 5000;
    return <div className="p-6 max-w-md space-y-4">
        <h2 className="text-lg font-semibold">Top up balance</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-base font-medium text-gray-700 mb-1">
              Amount (max {max.toLocaleString()})
            </label>
            <CurrencyInput value={amount} onValueChange={setAmount} min={0} max={max} decimalScale={2} currencySymbol="$" />
            <p className="mt-1 text-sm text-muted-foreground">
              Value is clamped to the maximum allowed balance.
            </p>
          </div>
          <Button type="submit" className="w-full">
            Top up
          </Button>
        </form>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const S=["PaymentForm","WithPresetAndMax"];export{a as PaymentForm,t as WithPresetAndMax,S as __namedExportsOrder,g as default};
