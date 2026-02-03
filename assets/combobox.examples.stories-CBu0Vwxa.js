import{r as l,j as e}from"./iframe-C3NiGLkr.js";import{C as r}from"./combobox-CU-Q9zQz.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-dM9pZBoI.js";import"./index-DNRP92Qz.js";import"./index-CEhDcc2E.js";import"./use-resolve-button-type-D9YGvU7b.js";import"./keyboard-Dz8OvpXF.js";import"./use-sync-refs-Dd4FYj0e.js";import"./use-by-comparator-T_dcLOSS.js";import"./form-fields-Cc50cINb.js";import"./hidden-R1nlN2hH.js";import"./floating-CGoPYLGl.js";import"./element-movement-NZmXZBjR.js";import"./bugs-DeaIigXP.js";import"./portal-C_xsT7ww.js";import"./focus-management-CiKbyxWz.js";import"./use-inert-others-B2o3pG-V.js";import"./use-event-listener-ChoyDxVw.js";import"./open-closed-Cju07csO.js";import"./use-tree-walker-CLmeBEDV.js";import"./active-element-history-Bd907BBR.js";import"./description-te5qwLx3.js";import"./frozen-D1XP1SqU.js";import"./label-DIe7zJQA.js";const G={title:"Components/Combobox/Examples",component:r,parameters:{layout:"padded"}},s=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"}],t={render:()=>{const[o,a]=l.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2",children:"Country"}),e.jsx(r,{options:s,value:o,onChange:a,placeholder:"Search for a country..."}),o&&e.jsxs("p",{className:"mt-4 text-base text-gray-600",children:["Selected: ",o.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
