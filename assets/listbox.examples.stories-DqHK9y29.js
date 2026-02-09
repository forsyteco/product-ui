import{r as o,j as e}from"./iframe-nrIlHJha.js";import{L as s}from"./listbox-BigfBm4B.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-B2oasDWN.js";import"./index-BZvjOxCX.js";import"./index-BSik-Sht.js";import"./use-resolve-button-type-CQQ8L2GD.js";import"./keyboard-CqkS3r67.js";import"./use-sync-refs-DjpU_bj-.js";import"./use-by-comparator-C0jUCcXB.js";import"./form-fields-DDioQK3X.js";import"./hidden-BsOz6iOs.js";import"./floating-B3Nejsq3.js";import"./element-movement-Zq1YzLVT.js";import"./bugs-BCdwESHN.js";import"./portal-CY2dJ7Gk.js";import"./focus-management-DCUZsTmC.js";import"./use-inert-others-BUcKpJIU.js";import"./use-text-value-DWFP9keE.js";import"./open-closed-PTDmPnRa.js";import"./description-Cvd2bQ6u.js";import"./frozen-DiBEr1ZD.js";import"./label-D9FaXLv5.js";const _={title:"Components/Listbox/Examples",component:s,parameters:{layout:"padded"}},l=[{id:"active",label:"Active",value:"active"},{id:"inactive",label:"Inactive",value:"inactive"},{id:"pending",label:"Pending",value:"pending"},{id:"archived",label:"Archived",value:"archived",disabled:!0}],t={render:()=>{const[a,r]=o.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2",children:"Status"}),e.jsx(s,{options:l,value:a,onChange:r,placeholder:"Select status..."}),a&&e.jsxs("p",{className:"mt-4 text-base text-gray-600",children:["Selected: ",a.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
