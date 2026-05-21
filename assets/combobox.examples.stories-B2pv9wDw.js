import{r as n,j as o}from"./iframe-CxYaNlfa.js";import{C as e}from"./combobox-Aat6K9eT.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-BqzisJkx.js";import"./useFocusRing-BD5DFmH8.js";import"./index-C20LchO5.js";import"./index-BjqpgS9N.js";import"./use-resolve-button-type-DZDd8gts.js";import"./keyboard-B83W2K4O.js";import"./use-sync-refs-CzTZ0nVq.js";import"./use-by-comparator-BGB3Ye8U.js";import"./form-fields-CRM6SxwB.js";import"./hidden-D0DTjsv9.js";import"./floating-CGSfTM2Z.js";import"./element-movement-DUP2O6Fs.js";import"./bugs-B1TOvFeJ.js";import"./portal-CbQ4upMP.js";import"./focus-management-ClluBnCx.js";import"./use-inert-others-B76WlhWb.js";import"./use-event-listener-C9ri-zWy.js";import"./open-closed-B5Dl-UPG.js";import"./use-tree-walker-DQkVVWnR.js";import"./active-element-history-D2ClwfRM.js";import"./description-C8AuhUpm.js";import"./frozen-Blk4b_lv.js";import"./label-DQ-YvZ8u.js";const _={title:"Components/Combobox/Examples",component:e.Root,parameters:{layout:"padded"}},l=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"}],t={render:()=>{const[r,a]=n.useState(null);return o.jsxs("div",{className:"p-6 max-w-md",children:[o.jsxs(e.Root,{options:l,value:r,onChange:a,placeholder:"Search for a country...",children:[o.jsx(e.Label,{children:"Country"}),o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]}),r&&o.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
