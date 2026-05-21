import{r as n,j as o}from"./iframe-DtxS-MGC.js";import{C as e}from"./combobox-nTBKql9e.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-D1maQdnK.js";import"./use-resolve-button-type-CLhQcegA.js";import"./keyboard-DGdCXcdW.js";import"./use-sync-refs-CPbG3aZX.js";import"./index-MJ0bJMXz.js";import"./index-HQ1KwuKc.js";import"./frozen-o0CKUs3I.js";import"./form-fields-BcAusS8B.js";import"./hidden-iOrYYUkf.js";import"./floating-D27cv2f5.js";import"./element-movement-ys-UjLPu.js";import"./bugs-D6x1SQ1q.js";import"./portal-DazVI_VC.js";import"./focus-management-DVvF2Sc9.js";import"./use-inert-others-DZyxT0dB.js";import"./use-event-listener-Z9OPufMe.js";import"./open-closed-CSKGfCwc.js";import"./use-tree-walker-CHmnOeK_.js";import"./active-element-history-Ll-DDKn9.js";import"./description-CHeu0Qp6.js";import"./label-DM0RO_rr.js";const U={title:"Components/Combobox/Examples",component:e.Root,parameters:{layout:"padded"}},l=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"}],t={render:()=>{const[r,a]=n.useState(null);return o.jsxs("div",{className:"p-6 max-w-md",children:[o.jsxs(e.Root,{options:l,value:r,onChange:a,placeholder:"Search for a country...",children:[o.jsx(e.Label,{children:"Country"}),o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]}),r&&o.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
