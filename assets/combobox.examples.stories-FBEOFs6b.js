import{r as n,j as o}from"./iframe-D3jKVOAj.js";import{C as e}from"./combobox-sd76iupj.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-B-gBeCsA.js";import"./use-resolve-button-type-CHu-IHbp.js";import"./keyboard-DAnX0onh.js";import"./use-sync-refs-BsLWer34.js";import"./index-DblNVS2F.js";import"./index-DkyIaSV8.js";import"./frozen-CFqWZkSJ.js";import"./form-fields-DU1__Oqn.js";import"./hidden-VRiS1Y6s.js";import"./floating-CzaD3CZv.js";import"./element-movement-BFKRJJPB.js";import"./bugs-BRsUgAr4.js";import"./portal-CZXLTeWu.js";import"./focus-management-DHNzSoTK.js";import"./use-inert-others-DEuSaTbp.js";import"./use-event-listener-D8A8Yli8.js";import"./open-closed-xuvlXUtj.js";import"./use-tree-walker-BlTKSlh5.js";import"./active-element-history-HtFnuMcb.js";import"./description-BI_r7w1n.js";import"./label-h5Z1rYct.js";const U={title:"Components/Combobox/Examples",component:e.Root,parameters:{layout:"padded"}},l=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"}],t={render:()=>{const[r,a]=n.useState(null);return o.jsxs("div",{className:"p-6 max-w-md",children:[o.jsxs(e.Root,{options:l,value:r,onChange:a,placeholder:"Search for a country...",children:[o.jsx(e.Label,{children:"Country"}),o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]}),r&&o.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
