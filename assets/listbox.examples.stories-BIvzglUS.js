import{r as o,j as e}from"./iframe-CxYaNlfa.js";import{L as s}from"./listbox-D6-VA2LC.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BD5DFmH8.js";import"./index-C20LchO5.js";import"./index-BjqpgS9N.js";import"./use-resolve-button-type-DZDd8gts.js";import"./keyboard-B83W2K4O.js";import"./use-sync-refs-CzTZ0nVq.js";import"./use-by-comparator-BGB3Ye8U.js";import"./form-fields-CRM6SxwB.js";import"./hidden-D0DTjsv9.js";import"./floating-CGSfTM2Z.js";import"./element-movement-DUP2O6Fs.js";import"./bugs-B1TOvFeJ.js";import"./portal-CbQ4upMP.js";import"./focus-management-ClluBnCx.js";import"./use-inert-others-B76WlhWb.js";import"./use-text-value-Bk4hOsZm.js";import"./open-closed-B5Dl-UPG.js";import"./description-C8AuhUpm.js";import"./frozen-Blk4b_lv.js";import"./label-DQ-YvZ8u.js";const _={title:"Components/Listbox/Examples",component:s,parameters:{layout:"padded"}},l=[{id:"active",label:"Active",value:"active"},{id:"inactive",label:"Inactive",value:"inactive"},{id:"pending",label:"Pending",value:"pending"},{id:"archived",label:"Archived",value:"archived",disabled:!0}],t={render:()=>{const[a,r]=o.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2",children:"Status"}),e.jsx(s,{options:l,value:a,onChange:r,placeholder:"Select status..."}),a&&e.jsxs("p",{className:"mt-4 text-base text-gray-600",children:["Selected: ",a.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
