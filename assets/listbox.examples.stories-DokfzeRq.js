import{r as o,j as e}from"./iframe-OIbwSsUo.js";import{L as s}from"./listbox-DoK8jTtW.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-CHwNI2-q.js";import"./index-CL3mEXst.js";import"./index-Bl-Jaq4B.js";import"./use-resolve-button-type-osKJOTL_.js";import"./keyboard-CTolmV5o.js";import"./use-sync-refs-0qmI2Jj2.js";import"./use-by-comparator-DTIc1K3p.js";import"./form-fields-BSBAvoSg.js";import"./hidden-CZyt3MTM.js";import"./floating-DNM8ErJa.js";import"./element-movement-DJV5vrOp.js";import"./bugs-B5yy6nX2.js";import"./portal-CNpYkWm3.js";import"./focus-management-CYdr1o3c.js";import"./use-inert-others-iYuBuXXz.js";import"./use-text-value-DCPW-Brj.js";import"./open-closed-DWvAJZV2.js";import"./description-Bwip7YUp.js";import"./frozen-C-jlZTgd.js";import"./label-BicDlr5-.js";const _={title:"Components/Listbox/Examples",component:s,parameters:{layout:"padded"}},l=[{id:"active",label:"Active",value:"active"},{id:"inactive",label:"Inactive",value:"inactive"},{id:"pending",label:"Pending",value:"pending"},{id:"archived",label:"Archived",value:"archived",disabled:!0}],t={render:()=>{const[a,r]=o.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2",children:"Status"}),e.jsx(s,{options:l,value:a,onChange:r,placeholder:"Select status..."}),a&&e.jsxs("p",{className:"mt-4 text-base text-gray-600",children:["Selected: ",a.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ListboxOption | null>(null);
    return <div className="p-6 max-w-md">
        <label className="block text-base font-medium text-gray-700 mb-2">
          Status
        </label>
        <Listbox options={statusOptions} value={selected} onChange={setSelected} placeholder="Select status..." />
        {selected && <p className="mt-4 text-base text-gray-600">
            Selected: {selected.label}
          </p>}
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const I=["StatusSelector"];export{t as StatusSelector,I as __namedExportsOrder,_ as default};
