import{r as i,j as o}from"./iframe-C_TxvPYL.js";import{L as a}from"./listbox-Cp_vEmqx.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BLeHenNf.js";import"./index-Ca65woEg.js";import"./index-ByS2HjQk.js";import"./use-resolve-button-type-7cGRNqUr.js";import"./keyboard-D-d5xU5t.js";import"./use-sync-refs-CD9OZkD4.js";import"./use-by-comparator-DlzHEsn7.js";import"./form-fields-6SUPefm4.js";import"./hidden-C9RbYL4s.js";import"./floating-JWLa5HRk.js";import"./element-movement-B--a4ltW.js";import"./bugs-CviBSKgF.js";import"./portal-DgNF7_mA.js";import"./focus-management-D31FE4zT.js";import"./use-inert-others-C8kNr3bX.js";import"./use-text-value-BKF01LoG.js";import"./open-closed-BQ-jk4i9.js";import"./description-DA6fyObB.js";import"./frozen-o5-Gxscs.js";import"./label-CYkb24oH.js";const A={title:"Components/Listbox",component:a,parameters:{layout:"centered",docs:{description:{component:"A listbox component for selecting from a list of options. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}},tags:["autodocs"]},n=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],e={render:()=>{const[s,r]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{options:n,value:s,onChange:r})})}},t={render:s=>{const[r,l]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{...s,options:n,value:r,onChange:l})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ListboxOption | null>(null);
    return <div className="w-64">
        <Listbox options={options} value={selected} onChange={setSelected} />
      </div>;
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<ListboxOption | null>(null);
    return <div className="w-64">
        <Listbox {...args} options={options} value={selected} onChange={setSelected} />
      </div>;
  },
  args: {
    placeholder: 'Select an option...',
    disabled: false
  }
}`,...t.parameters?.docs?.source}}};const B=["Default","Playground"];export{e as Default,t as Playground,B as __namedExportsOrder,A as default};
