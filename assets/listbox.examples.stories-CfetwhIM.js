import{r as o,j as e}from"./iframe-CGF0_A5u.js";import{L as s}from"./listbox-BEeKL_Ku.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-CoMikh-_.js";import"./keyboard-D86mmLzy.js";import"./use-sync-refs-BQJai7yY.js";import"./index-BF50FvRs.js";import"./index-D85rYT82.js";import"./frozen-WvZGd1jK.js";import"./form-fields-DW6HVtwJ.js";import"./hidden--9eMrDrq.js";import"./floating-BBRF2GKr.js";import"./element-movement-BHB6z7Gj.js";import"./bugs-CmMcbd0d.js";import"./portal-CIPjWJEZ.js";import"./focus-management-DtCYyGj7.js";import"./use-inert-others-Bs_h4dt8.js";import"./use-text-value-BgIO7al6.js";import"./open-closed-VIqDAeBc.js";import"./description-Cg8HyQS4.js";import"./label-CK0kZ04v.js";const A={title:"Components/Listbox/Examples",component:s,parameters:{layout:"padded"}},l=[{id:"active",label:"Active",value:"active"},{id:"inactive",label:"Inactive",value:"inactive"},{id:"pending",label:"Pending",value:"pending"},{id:"archived",label:"Archived",value:"archived",disabled:!0}],t={render:()=>{const[a,r]=o.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2",children:"Status"}),e.jsx(s,{options:l,value:a,onChange:r,placeholder:"Select status..."}),a&&e.jsxs("p",{className:"mt-4 text-base text-gray-600",children:["Selected: ",a.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const _=["StatusSelector"];export{t as StatusSelector,_ as __namedExportsOrder,A as default};
