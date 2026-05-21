import{r as a,j as e}from"./iframe-CItR6fGu.js";import{A as t}from"./autocomplete-mATAibwW.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-CU8mt6_D.js";import"./use-resolve-button-type-BFmILeb_.js";import"./keyboard-8VRtqMCG.js";import"./use-sync-refs-CaS58R8u.js";import"./index-CNOo9puS.js";import"./index-B9rWXd0V.js";import"./frozen-CtY5cNTH.js";import"./form-fields-BlMdOaBK.js";import"./hidden-DNm3g6Z0.js";import"./floating-BsWb7cLr.js";import"./element-movement-CMyflZBM.js";import"./bugs-DpLPc2L_.js";import"./portal-DLX_yNr9.js";import"./focus-management-1bpFx2A3.js";import"./use-inert-others-b7zpTwIW.js";import"./use-event-listener-Cbxsya7i.js";import"./open-closed-McBZdwWe.js";import"./use-tree-walker-CU1YxDDt.js";import"./active-element-history-BNDqEPaq.js";import"./description-HwKmEHXT.js";import"./label-BrqWDG43.js";const T={title:"Components/Autocomplete/Examples",component:t.Root,parameters:{layout:"padded"}},n=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"},{id:"jp",label:"Japan",value:"jp"},{id:"br",label:"Brazil",value:"br"}],o={render:()=>{const[r,l]=a.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsxs(t.Root,{options:n,value:r,onChange:l,placeholder:"Type to search countries…",children:[e.jsx(t.Label,{children:"Country"}),e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]}),r&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<AutocompleteOption | null>(null);
    return <div className="p-6 max-w-md">
        <Autocomplete.Root options={countries} value={selected} onChange={setSelected} placeholder="Type to search countries…">
          <Autocomplete.Label>Country</Autocomplete.Label>
          <Autocomplete.Control>
            <Autocomplete.LeadingIcon />
            <Autocomplete.Input />
            <Autocomplete.ClearButton />
          </Autocomplete.Control>
          <Autocomplete.Options />
        </Autocomplete.Root>
        {selected && <p className="mt-4 text-base text-muted-foreground">Selected: {selected.label}</p>}
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const U=["CountrySearch"];export{o as CountrySearch,U as __namedExportsOrder,T as default};
