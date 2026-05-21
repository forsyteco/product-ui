import{r as n,j as o}from"./iframe-C_TxvPYL.js";import{C as e}from"./combobox-B9Lm59Wt.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-CG8nxdz1.js";import"./useFocusRing-BLeHenNf.js";import"./index-Ca65woEg.js";import"./index-ByS2HjQk.js";import"./use-resolve-button-type-7cGRNqUr.js";import"./keyboard-D-d5xU5t.js";import"./use-sync-refs-CD9OZkD4.js";import"./use-by-comparator-DlzHEsn7.js";import"./form-fields-6SUPefm4.js";import"./hidden-C9RbYL4s.js";import"./floating-JWLa5HRk.js";import"./element-movement-B--a4ltW.js";import"./bugs-CviBSKgF.js";import"./portal-DgNF7_mA.js";import"./focus-management-D31FE4zT.js";import"./use-inert-others-C8kNr3bX.js";import"./use-event-listener-B_Hmb7EM.js";import"./open-closed-BQ-jk4i9.js";import"./use-tree-walker-Dbr0QQG8.js";import"./active-element-history-9xytIxO_.js";import"./description-DA6fyObB.js";import"./frozen-o5-Gxscs.js";import"./label-CYkb24oH.js";const _={title:"Components/Combobox/Examples",component:e.Root,parameters:{layout:"padded"}},l=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"}],t={render:()=>{const[r,a]=n.useState(null);return o.jsxs("div",{className:"p-6 max-w-md",children:[o.jsxs(e.Root,{options:l,value:r,onChange:a,placeholder:"Search for a country...",children:[o.jsx(e.Label,{children:"Country"}),o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]}),r&&o.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(null);
    return <div className="p-6 max-w-md">
        <Combobox.Root options={countries} value={selected} onChange={setSelected} placeholder="Search for a country...">
          <Combobox.Label>Country</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input />
            <Combobox.ClearButton />
            <Combobox.ToggleButton />
          </Combobox.Control>
          <Combobox.Options />
        </Combobox.Root>
        {selected && <p className="mt-4 text-base text-muted-foreground">Selected: {selected.label}</p>}
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const A=["CountrySelector"];export{t as CountrySelector,A as __namedExportsOrder,_ as default};
