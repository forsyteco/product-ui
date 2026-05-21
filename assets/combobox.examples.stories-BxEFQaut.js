import{r as n,j as o}from"./iframe-CGF0_A5u.js";import{C as e}from"./combobox-CbY3VYk0.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-amMfZsIx.js";import"./use-resolve-button-type-CoMikh-_.js";import"./keyboard-D86mmLzy.js";import"./use-sync-refs-BQJai7yY.js";import"./index-BF50FvRs.js";import"./index-D85rYT82.js";import"./frozen-WvZGd1jK.js";import"./form-fields-DW6HVtwJ.js";import"./hidden--9eMrDrq.js";import"./floating-BBRF2GKr.js";import"./element-movement-BHB6z7Gj.js";import"./bugs-CmMcbd0d.js";import"./portal-CIPjWJEZ.js";import"./focus-management-DtCYyGj7.js";import"./use-inert-others-Bs_h4dt8.js";import"./use-event-listener-CXGnWSGZ.js";import"./open-closed-VIqDAeBc.js";import"./use-tree-walker-CJwZbYoL.js";import"./active-element-history-BYvFK8IE.js";import"./description-Cg8HyQS4.js";import"./label-CK0kZ04v.js";const U={title:"Components/Combobox/Examples",component:e.Root,parameters:{layout:"padded"}},l=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"}],t={render:()=>{const[r,a]=n.useState(null);return o.jsxs("div",{className:"p-6 max-w-md",children:[o.jsxs(e.Root,{options:l,value:r,onChange:a,placeholder:"Search for a country...",children:[o.jsx(e.Label,{children:"Country"}),o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]}),r&&o.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const _=["CountrySelector"];export{t as CountrySelector,_ as __namedExportsOrder,U as default};
