import{r as l,j as e}from"./iframe-DCut3pB0.js";import{C as r}from"./combobox-BtamAtI7.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DTcOx15S.js";import"./index-Cw_6tGoc.js";import"./index-DK0opmzF.js";import"./use-resolve-button-type-DEn31ueC.js";import"./keyboard-BxH3F2n_.js";import"./use-sync-refs-GHuczuXX.js";import"./use-by-comparator-DKD567_4.js";import"./form-fields-nwNBguIm.js";import"./hidden-CVuXf1xy.js";import"./floating-CAOHwN0g.js";import"./element-movement-BTrBB4aI.js";import"./bugs-re273FY1.js";import"./portal-CU9rp48T.js";import"./focus-management-B-XE9RWC.js";import"./use-inert-others-Ct0UT_kG.js";import"./use-event-listener-CqjDTdRz.js";import"./open-closed-DhS47DzH.js";import"./use-tree-walker-5TpjLfCZ.js";import"./active-element-history-De1WnHxW.js";import"./description-Rd-Cv9GD.js";import"./frozen-WLPXiPe0.js";import"./label-IgrQDxQ7.js";const G={title:"Components/Combobox/Examples",component:r,parameters:{layout:"padded"}},s=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"}],t={render:()=>{const[o,a]=l.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2",children:"Country"}),e.jsx(r,{options:s,value:o,onChange:a,placeholder:"Search for a country..."}),o&&e.jsxs("p",{className:"mt-4 text-base text-gray-600",children:["Selected: ",o.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
