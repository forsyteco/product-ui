import{r as a,j as e}from"./iframe-CGF0_A5u.js";import{A as t}from"./autocomplete-CooXbeOn.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-amMfZsIx.js";import"./use-resolve-button-type-CoMikh-_.js";import"./keyboard-D86mmLzy.js";import"./use-sync-refs-BQJai7yY.js";import"./index-BF50FvRs.js";import"./index-D85rYT82.js";import"./frozen-WvZGd1jK.js";import"./form-fields-DW6HVtwJ.js";import"./hidden--9eMrDrq.js";import"./floating-BBRF2GKr.js";import"./element-movement-BHB6z7Gj.js";import"./bugs-CmMcbd0d.js";import"./portal-CIPjWJEZ.js";import"./focus-management-DtCYyGj7.js";import"./use-inert-others-Bs_h4dt8.js";import"./use-event-listener-CXGnWSGZ.js";import"./open-closed-VIqDAeBc.js";import"./use-tree-walker-CJwZbYoL.js";import"./active-element-history-BYvFK8IE.js";import"./description-Cg8HyQS4.js";import"./label-CK0kZ04v.js";const T={title:"Components/Autocomplete/Examples",component:t.Root,parameters:{layout:"padded"}},n=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"},{id:"jp",label:"Japan",value:"jp"},{id:"br",label:"Brazil",value:"br"}],o={render:()=>{const[r,l]=a.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsxs(t.Root,{options:n,value:r,onChange:l,placeholder:"Type to search countries…",children:[e.jsx(t.Label,{children:"Country"}),e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]}),r&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
