import{r as o,j as e}from"./iframe-BVZI3cAm.js";import{L as a}from"./listbox-di5Am-X7.js";import"./preload-helper-DEha_CyH.js";import"./clsx-B-dksMZM.js";import"./input-shell-4o9ugfKq.js";import"./index-B8k91cqS.js";import"./chevron-icon-BNLbTG_I.js";import"./index--g8NHrJE.js";import"./index-D50RP4Fs.js";import"./index-CSbhzJ9m.js";const S={title:"Components/Listbox/Examples",component:a,parameters:{layout:"padded"}},r=[{id:"active",label:"Active",value:"active"},{id:"inactive",label:"Inactive",value:"inactive"},{id:"pending",label:"Pending",value:"pending"},{id:"archived",label:"Archived",value:"archived",disabled:!0}],t={render:()=>{const[s,l]=o.useState(null);return e.jsxs("div",{className:"max-w-xs",children:[e.jsx("label",{className:"block text-base font-medium mb-2 text-foreground",children:"Status"}),e.jsx(a,{options:r,value:s,onChange:l,placeholder:"Select status..."}),s&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",s.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ListboxOption | null>(null);
    return <div className="max-w-xs">
        <label className="block text-base font-medium mb-2 text-foreground">
          Status
        </label>
        <Listbox options={statusOptions} value={selected} onChange={setSelected} placeholder="Select status..." />
        {selected && <p className="mt-4 text-base text-muted-foreground">
            Selected: {selected.label}
          </p>}
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const g=["StatusSelector"];export{t as StatusSelector,g as __namedExportsOrder,S as default};
