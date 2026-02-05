import{r as l,j as e}from"./iframe-CNYYlD36.js";import{C as r}from"./combobox-HIBTXuR6.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-C4fSfmyf.js";import"./index-DYwh5NA3.js";import"./index-D4rEHvpE.js";import"./use-resolve-button-type-C9PyahDA.js";import"./keyboard-DtISN8rn.js";import"./use-sync-refs-DZgQMG1Q.js";import"./use-by-comparator-BwVMv540.js";import"./form-fields-BE6Jb6rq.js";import"./hidden-K7cnV1wF.js";import"./floating-DCZWDNJE.js";import"./element-movement-BlCQH2Fn.js";import"./bugs-SeIKBOFb.js";import"./portal-_z1lZ7UR.js";import"./focus-management-DeCdYFst.js";import"./use-inert-others-Dq6Q-G8N.js";import"./use-event-listener-CT9Lk629.js";import"./open-closed-By9Rj1dh.js";import"./use-tree-walker-DvucGxYg.js";import"./active-element-history-D2j9DJpv.js";import"./description-D1PW4E0C.js";import"./frozen-6-U9ystM.js";import"./label-DgKDHCQR.js";const G={title:"Components/Combobox/Examples",component:r,parameters:{layout:"padded"}},s=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"}],t={render:()=>{const[o,a]=l.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2",children:"Country"}),e.jsx(r,{options:s,value:o,onChange:a,placeholder:"Search for a country..."}),o&&e.jsxs("p",{className:"mt-4 text-base text-gray-600",children:["Selected: ",o.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
