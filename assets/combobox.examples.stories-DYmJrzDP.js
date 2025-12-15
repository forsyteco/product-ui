import{r as l,j as e}from"./iframe-CFsUuUqa.js";import{C as r}from"./combobox-Bc-1ByHh.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BH9yhaj4.js";import"./index-D26-LCOM.js";import"./index-BsJ9ywC8.js";import"./use-resolve-button-type-DY7jbxIq.js";import"./keyboard-BjzAsI1V.js";import"./use-sync-refs-DycZJTrw.js";import"./use-by-comparator-CQNCvV4u.js";import"./form-fields-DLFlDeZA.js";import"./hidden-CAbe9GgB.js";import"./floating-D0H9PoA7.js";import"./element-movement-CPeALCLL.js";import"./bugs-QgyXksVi.js";import"./portal-nsyrrPkk.js";import"./focus-management-kaFNE5_8.js";import"./use-inert-others-BjMmLUa1.js";import"./use-event-listener-DgKuL0kz.js";import"./open-closed-C5hIdceC.js";import"./use-tree-walker-CZPzHwmU.js";import"./active-element-history-CK5DaKIf.js";import"./description-DJ3YnSma.js";import"./frozen-CLZu8IH4.js";import"./label-Da47qnUN.js";const G={title:"Components/Combobox/Examples",component:r,parameters:{layout:"padded"}},s=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"}],t={render:()=>{const[o,a]=l.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2",children:"Country"}),e.jsx(r,{options:s,value:o,onChange:a,placeholder:"Search for a country..."}),o&&e.jsxs("p",{className:"mt-4 text-base text-gray-600",children:["Selected: ",o.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
