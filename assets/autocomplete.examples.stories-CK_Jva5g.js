import{r as a,j as e}from"./iframe-CeVB8obd.js";import{A as t}from"./autocomplete-CqREs68y.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./combobox-Dd7MZ-dg.js";import"./useFocusRing-DGNQ89Xm.js";import"./index-hJDHe0xh.js";import"./index-DxGXflx1.js";import"./use-resolve-button-type-B16RnGb9.js";import"./keyboard-CPYOBzPz.js";import"./use-sync-refs-BoOcFdrF.js";import"./use-by-comparator-ChEKavq1.js";import"./form-fields-DTMhg-rK.js";import"./hidden-FQEwfQ5P.js";import"./floating-y6vRCQA6.js";import"./element-movement-DhCVsZtz.js";import"./bugs-C2vScuI6.js";import"./portal-1sZo8vyw.js";import"./focus-management-D4oSQtTM.js";import"./use-inert-others-C-7PjipA.js";import"./use-event-listener-COO1fxLF.js";import"./open-closed-Bv7w2Ee9.js";import"./use-tree-walker-BoarXsQV.js";import"./active-element-history-CQ4rnwuf.js";import"./description-Dytnpz6p.js";import"./frozen-B7IsPTJh.js";import"./label-C2lNcmET.js";const T={title:"Components/Autocomplete/Examples",component:t.Root,parameters:{layout:"padded"}},n=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"},{id:"jp",label:"Japan",value:"jp"},{id:"br",label:"Brazil",value:"br"}],o={render:()=>{const[r,l]=a.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsxs(t.Root,{options:n,value:r,onChange:l,placeholder:"Type to search countries…",children:[e.jsx(t.Label,{children:"Country"}),e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]}),r&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
