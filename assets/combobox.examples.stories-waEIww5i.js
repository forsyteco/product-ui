import{r as l,j as e}from"./iframe-BZ1wujjQ.js";import{C as r}from"./combobox-D6JBnlP6.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BfnhhEST.js";import"./index-W2FIh6FJ.js";import"./index-imFVSO3i.js";import"./use-resolve-button-type-BdBbSlJ2.js";import"./keyboard-Ce2CPQ3X.js";import"./use-sync-refs-DKphwUq6.js";import"./use-by-comparator-TOhtDbp6.js";import"./form-fields-zS5QveKI.js";import"./hidden-BNsWunAW.js";import"./floating-DJeorzdf.js";import"./element-movement-BFShz-nT.js";import"./bugs-CWise-ep.js";import"./portal-EQenjn8w.js";import"./focus-management-DzM3vxoc.js";import"./use-inert-others-D7PEgJFU.js";import"./use-event-listener-DtvH9auP.js";import"./open-closed-DMtSAjel.js";import"./use-tree-walker-BngRelFW.js";import"./active-element-history-DHHFNsIM.js";import"./description-CTKD1BlB.js";import"./frozen-P3XLoKA6.js";import"./label-DjUSKMEb.js";const G={title:"Components/Combobox/Examples",component:r,parameters:{layout:"padded"}},s=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"}],t={render:()=>{const[o,a]=l.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2",children:"Country"}),e.jsx(r,{options:s,value:o,onChange:a,placeholder:"Search for a country..."}),o&&e.jsxs("p",{className:"mt-4 text-base text-gray-600",children:["Selected: ",o.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
