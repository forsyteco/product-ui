import{r as a,j as e}from"./iframe-BX-ROWNI.js";import{A as t}from"./autocomplete-DvyNsh3L.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-FfpMdCVM.js";import"./use-resolve-button-type-38vbuAiE.js";import"./keyboard-CCfXnbEr.js";import"./use-sync-refs-DTg_pgWq.js";import"./index-6YZsdqky.js";import"./index-Cu-QQxcH.js";import"./frozen-BLav77oe.js";import"./form-fields-Dg0BeDk3.js";import"./hidden-D5uAFvgf.js";import"./floating-BT1BL60C.js";import"./element-movement-B5L5FeYV.js";import"./bugs-BGC4SnX6.js";import"./portal-CJIo8SlY.js";import"./focus-management-plLOIbVD.js";import"./use-inert-others-D22FfipB.js";import"./use-event-listener-B-V2qlHO.js";import"./open-closed-C_k6EVRc.js";import"./use-tree-walker-BAUXv4rD.js";import"./active-element-history-iFJj_uj1.js";import"./description-CdOWzJj9.js";import"./label-0iOr3fT0.js";const T={title:"Components/Autocomplete/Examples",component:t.Root,parameters:{layout:"padded"}},n=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"},{id:"jp",label:"Japan",value:"jp"},{id:"br",label:"Brazil",value:"br"}],o={render:()=>{const[r,l]=a.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsxs(t.Root,{options:n,value:r,onChange:l,placeholder:"Type to search countries…",children:[e.jsx(t.Label,{children:"Country"}),e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]}),r&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
