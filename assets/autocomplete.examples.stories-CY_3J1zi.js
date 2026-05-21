import{r as a,j as e}from"./iframe-C_TxvPYL.js";import{A as t}from"./autocomplete-LkaNzJRb.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-CG8nxdz1.js";import"./useFocusRing-BLeHenNf.js";import"./index-Ca65woEg.js";import"./index-ByS2HjQk.js";import"./use-resolve-button-type-7cGRNqUr.js";import"./keyboard-D-d5xU5t.js";import"./use-sync-refs-CD9OZkD4.js";import"./use-by-comparator-DlzHEsn7.js";import"./form-fields-6SUPefm4.js";import"./hidden-C9RbYL4s.js";import"./floating-JWLa5HRk.js";import"./element-movement-B--a4ltW.js";import"./bugs-CviBSKgF.js";import"./portal-DgNF7_mA.js";import"./focus-management-D31FE4zT.js";import"./use-inert-others-C8kNr3bX.js";import"./use-event-listener-B_Hmb7EM.js";import"./open-closed-BQ-jk4i9.js";import"./use-tree-walker-Dbr0QQG8.js";import"./active-element-history-9xytIxO_.js";import"./description-DA6fyObB.js";import"./frozen-o5-Gxscs.js";import"./label-CYkb24oH.js";const U={title:"Components/Autocomplete/Examples",component:t.Root,parameters:{layout:"padded"}},n=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"},{id:"jp",label:"Japan",value:"jp"},{id:"br",label:"Brazil",value:"br"}],o={render:()=>{const[r,l]=a.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsxs(t.Root,{options:n,value:r,onChange:l,placeholder:"Type to search countries…",children:[e.jsx(t.Label,{children:"Country"}),e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]}),r&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const _=["CountrySearch"];export{o as CountrySearch,_ as __namedExportsOrder,U as default};
