import{r as l,j as e}from"./iframe-nrIlHJha.js";import{C as r}from"./combobox-3elrAI2d.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-B2oasDWN.js";import"./index-BZvjOxCX.js";import"./index-BSik-Sht.js";import"./use-resolve-button-type-CQQ8L2GD.js";import"./keyboard-CqkS3r67.js";import"./use-sync-refs-DjpU_bj-.js";import"./use-by-comparator-C0jUCcXB.js";import"./form-fields-DDioQK3X.js";import"./hidden-BsOz6iOs.js";import"./floating-B3Nejsq3.js";import"./element-movement-Zq1YzLVT.js";import"./bugs-BCdwESHN.js";import"./portal-CY2dJ7Gk.js";import"./focus-management-DCUZsTmC.js";import"./use-inert-others-BUcKpJIU.js";import"./use-event-listener-ClNGbY2w.js";import"./open-closed-PTDmPnRa.js";import"./use-tree-walker-D5hXAbYb.js";import"./active-element-history-B9o9mMiu.js";import"./description-Cvd2bQ6u.js";import"./frozen-DiBEr1ZD.js";import"./label-D9FaXLv5.js";const G={title:"Components/Combobox/Examples",component:r,parameters:{layout:"padded"}},s=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"}],t={render:()=>{const[o,a]=l.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2",children:"Country"}),e.jsx(r,{options:s,value:o,onChange:a,placeholder:"Search for a country..."}),o&&e.jsxs("p",{className:"mt-4 text-base text-gray-600",children:["Selected: ",o.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(null);
    return <div className="p-6 max-w-md">
        <label className="block text-base font-medium text-gray-700 mb-2">
          Country
        </label>
        <Combobox options={countries} value={selected} onChange={setSelected} placeholder="Search for a country..." />
        {selected && <p className="mt-4 text-base text-gray-600">
            Selected: {selected.label}
          </p>}
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const K=["CountrySelector"];export{t as CountrySelector,K as __namedExportsOrder,G as default};
