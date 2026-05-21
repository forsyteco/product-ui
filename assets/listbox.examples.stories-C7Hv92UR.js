import{r as l,j as e}from"./iframe-B_2llF5Y.js";import{L as a}from"./listbox-xJPF1xEp.js";import"./preload-helper-DEha_CyH.js";import"./clsx-B-dksMZM.js";import"./input-shell-YTGH2IZD.js";import"./index-B8k91cqS.js";import"./field-control-shell.module-DNRc52zd.js";import"./useAnchoredPopupScrollLock-DZ6uyEFc.js";import"./index-DWBCX9CX.js";import"./index-DMaG-6Cr.js";import"./index-CORXN6_2.js";import"./chevron-icon-BkiPKrJS.js";import"./ToolbarRootContext-hye0e9XY.js";const f={title:"Components/Listbox/Examples",component:a,parameters:{layout:"padded"}},r=[{id:"active",label:"Active",value:"active"},{id:"inactive",label:"Inactive",value:"inactive"},{id:"pending",label:"Pending",value:"pending"},{id:"archived",label:"Archived",value:"archived",disabled:!0}],t={render:()=>{const[s,o]=l.useState(null);return e.jsxs("div",{className:"max-w-xs",children:[e.jsx("label",{className:"block text-base font-medium mb-2 text-foreground",children:"Status"}),e.jsx(a,{options:r,value:s,onChange:o,placeholder:"Select status..."}),s&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",s.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const j=["StatusSelector"];export{t as StatusSelector,j as __namedExportsOrder,f as default};
