import{r as a,j as e}from"./iframe-OIbwSsUo.js";import{A as t}from"./autocomplete-BFqnEi6h.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-Chyd6BXH.js";import"./useFocusRing-CHwNI2-q.js";import"./index-CL3mEXst.js";import"./index-Bl-Jaq4B.js";import"./use-resolve-button-type-osKJOTL_.js";import"./keyboard-CTolmV5o.js";import"./use-sync-refs-0qmI2Jj2.js";import"./use-by-comparator-DTIc1K3p.js";import"./form-fields-BSBAvoSg.js";import"./hidden-CZyt3MTM.js";import"./floating-DNM8ErJa.js";import"./element-movement-DJV5vrOp.js";import"./bugs-B5yy6nX2.js";import"./portal-CNpYkWm3.js";import"./focus-management-CYdr1o3c.js";import"./use-inert-others-iYuBuXXz.js";import"./use-event-listener-C_GM-C6i.js";import"./open-closed-DWvAJZV2.js";import"./use-tree-walker-C-uxXtON.js";import"./active-element-history-BqPBdwRI.js";import"./description-Bwip7YUp.js";import"./frozen-C-jlZTgd.js";import"./label-BicDlr5-.js";const U={title:"Components/Autocomplete/Examples",component:t.Root,parameters:{layout:"padded"}},n=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"},{id:"jp",label:"Japan",value:"jp"},{id:"br",label:"Brazil",value:"br"}],o={render:()=>{const[r,l]=a.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsxs(t.Root,{options:n,value:r,onChange:l,placeholder:"Type to search countries…",children:[e.jsx(t.Label,{children:"Country"}),e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]}),r&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
