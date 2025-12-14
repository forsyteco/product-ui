import{r as o,j as e}from"./iframe-CeYd32X8.js";import{L as a}from"./listbox-VZIaZg26.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DXUggmaQ.js";import"./index-DYyT_JbS.js";import"./index-Fzrzh3PM.js";import"./use-resolve-button-type-FwMgqBLi.js";import"./keyboard-BoF71p42.js";import"./use-sync-refs-ry5utqyI.js";import"./use-by-comparator-D3NsKXwl.js";import"./form-fields-Ll7hC3CT.js";import"./hidden-DipbFeWg.js";import"./floating-Bn-YBmfF.js";import"./element-movement-DB0a6a5I.js";import"./bugs-Red6znm7.js";import"./portal-0gor4Twm.js";import"./focus-management-DoY0kjxM.js";import"./use-inert-others-BnO2WJMG.js";import"./use-text-value-BL9_cAMK.js";import"./open-closed-DQGie1tM.js";import"./description-9wIlOIiQ.js";import"./frozen-C5_hd5RQ.js";import"./label-CAGnDoa2.js";const _={title:"Components/Listbox/Examples",component:a,parameters:{layout:"padded"}},l=[{id:"active",label:"Active",value:"active"},{id:"inactive",label:"Inactive",value:"inactive"},{id:"pending",label:"Pending",value:"pending"},{id:"archived",label:"Archived",value:"archived",disabled:!0}],t={render:()=>{const[s,r]=o.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Status"}),e.jsx(a,{options:l,value:s,onChange:r,placeholder:"Select status..."}),s&&e.jsxs("p",{className:"mt-4 text-sm text-gray-600",children:["Selected: ",s.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ListboxOption | null>(null);
    return <div className="p-6 max-w-md">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Status
        </label>
        <Listbox options={statusOptions} value={selected} onChange={setSelected} placeholder="Select status..." />
        {selected && <p className="mt-4 text-sm text-gray-600">
            Selected: {selected.label}
          </p>}
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const I=["StatusSelector"];export{t as StatusSelector,I as __namedExportsOrder,_ as default};
