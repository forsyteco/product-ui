import{r as o,j as e}from"./iframe-C3NiGLkr.js";import{L as s}from"./listbox-Bqe4KVHu.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-dM9pZBoI.js";import"./index-DNRP92Qz.js";import"./index-CEhDcc2E.js";import"./use-resolve-button-type-D9YGvU7b.js";import"./keyboard-Dz8OvpXF.js";import"./use-sync-refs-Dd4FYj0e.js";import"./use-by-comparator-T_dcLOSS.js";import"./form-fields-Cc50cINb.js";import"./hidden-R1nlN2hH.js";import"./floating-CGoPYLGl.js";import"./element-movement-NZmXZBjR.js";import"./bugs-DeaIigXP.js";import"./portal-C_xsT7ww.js";import"./focus-management-CiKbyxWz.js";import"./use-inert-others-B2o3pG-V.js";import"./use-text-value-fzlANQM8.js";import"./open-closed-Cju07csO.js";import"./description-te5qwLx3.js";import"./frozen-D1XP1SqU.js";import"./label-DIe7zJQA.js";const _={title:"Components/Listbox/Examples",component:s,parameters:{layout:"padded"}},l=[{id:"active",label:"Active",value:"active"},{id:"inactive",label:"Inactive",value:"inactive"},{id:"pending",label:"Pending",value:"pending"},{id:"archived",label:"Archived",value:"archived",disabled:!0}],t={render:()=>{const[a,r]=o.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2",children:"Status"}),e.jsx(s,{options:l,value:a,onChange:r,placeholder:"Select status..."}),a&&e.jsxs("p",{className:"mt-4 text-base text-gray-600",children:["Selected: ",a.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
