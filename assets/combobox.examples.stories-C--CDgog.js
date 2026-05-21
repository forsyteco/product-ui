import{r as n,j as o}from"./iframe-rkvXkcPn.js";import{C as e}from"./combobox-DNxZFaSh.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-B6t3AbO-.js";import"./use-resolve-button-type-Bxr6Vt74.js";import"./keyboard-ByedxuE2.js";import"./use-sync-refs-B6ZSIoRc.js";import"./index-Cq7Zl3Z-.js";import"./index-CETgZHFe.js";import"./frozen-B3w0rFic.js";import"./form-fields-CZ6_35PY.js";import"./hidden-DJhC1tAv.js";import"./floating-Bs9MZ1gB.js";import"./element-movement-C3E_z2a9.js";import"./bugs-BblNTk-s.js";import"./portal-QJFU0dWI.js";import"./focus-management-Bx46CJ0W.js";import"./use-inert-others-mK41CiV3.js";import"./use-event-listener-CtF8xKVk.js";import"./open-closed-BS-lTtUD.js";import"./use-tree-walker-DTcVGXP8.js";import"./active-element-history-Du3UC4QG.js";import"./description-CvLuHXpX.js";import"./label-Da6zJ70M.js";const T={title:"Components/Combobox/Examples",component:e.Root,parameters:{layout:"padded"}},l=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"}],t={render:()=>{const[r,a]=n.useState(null);return o.jsxs("div",{className:"p-6 max-w-md",children:[o.jsxs(e.Root,{options:l,value:r,onChange:a,placeholder:"Search for a country...",children:[o.jsx(e.Label,{children:"Country"}),o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]}),r&&o.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const U=["CountrySelector"];export{t as CountrySelector,U as __namedExportsOrder,T as default};
