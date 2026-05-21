import{r as i,j as o}from"./iframe-DtxS-MGC.js";import{L as a}from"./listbox-Blq9rA6G.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-CLhQcegA.js";import"./keyboard-DGdCXcdW.js";import"./use-sync-refs-CPbG3aZX.js";import"./index-MJ0bJMXz.js";import"./index-HQ1KwuKc.js";import"./frozen-o0CKUs3I.js";import"./form-fields-BcAusS8B.js";import"./hidden-iOrYYUkf.js";import"./floating-D27cv2f5.js";import"./element-movement-ys-UjLPu.js";import"./bugs-D6x1SQ1q.js";import"./portal-DazVI_VC.js";import"./focus-management-DVvF2Sc9.js";import"./use-inert-others-DZyxT0dB.js";import"./use-text-value-6D2gsjTG.js";import"./open-closed-CSKGfCwc.js";import"./description-CHeu0Qp6.js";import"./label-DM0RO_rr.js";const k={title:"Components/Listbox",component:a,parameters:{layout:"centered",docs:{description:{component:"A listbox component for selecting from a list of options. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}},tags:["autodocs"]},n=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],e={render:()=>{const[s,r]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{options:n,value:s,onChange:r})})}},t={render:s=>{const[r,l]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{...s,options:n,value:r,onChange:l})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const A=["Default","Playground"];export{e as Default,t as Playground,A as __namedExportsOrder,k as default};
