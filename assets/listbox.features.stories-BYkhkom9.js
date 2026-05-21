import{r as l,j as e}from"./iframe-C_TxvPYL.js";import{L as i}from"./listbox-Cp_vEmqx.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BLeHenNf.js";import"./index-Ca65woEg.js";import"./index-ByS2HjQk.js";import"./use-resolve-button-type-7cGRNqUr.js";import"./keyboard-D-d5xU5t.js";import"./use-sync-refs-CD9OZkD4.js";import"./use-by-comparator-DlzHEsn7.js";import"./form-fields-6SUPefm4.js";import"./hidden-C9RbYL4s.js";import"./floating-JWLa5HRk.js";import"./element-movement-B--a4ltW.js";import"./bugs-CviBSKgF.js";import"./portal-DgNF7_mA.js";import"./focus-management-D31FE4zT.js";import"./use-inert-others-C8kNr3bX.js";import"./use-text-value-BKF01LoG.js";import"./open-closed-BQ-jk4i9.js";import"./description-DA6fyObB.js";import"./frozen-o5-Gxscs.js";import"./label-CYkb24oH.js";const V={title:"Components/Listbox/Features",component:i,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}}},r=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"},{id:"4",label:"Disabled Option",value:"disabled",disabled:!0}],t={render:()=>{const[a,n]=l.useState(null);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},o={render:()=>{const[a,n]=l.useState(r[1]);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},s={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,disabled:!0})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ListboxOption | null>(null);
    return <div className="w-64">
        <Listbox options={options} value={selected} onChange={setSelected} />
      </div>;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ListboxOption | null>(options[1]);
    return <div className="w-64">
        <Listbox options={options} value={selected} onChange={setSelected} />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <Listbox options={options} disabled />
    </div>
}`,...s.parameters?.docs?.source}}};const _=["Basic","WithInitialValue","Disabled"];export{t as Basic,s as Disabled,o as WithInitialValue,_ as __namedExportsOrder,V as default};
