import{r as i,j as o}from"./iframe-BUQwbYxk.js";import{L as a}from"./listbox-Bi1fAw1a.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-BZyZTp_T.js";import"./keyboard-C9-C9yHL.js";import"./use-sync-refs-C8F9OHzU.js";import"./index-D4Fas5oe.js";import"./index-Dxld968B.js";import"./frozen-BeKVmTSu.js";import"./form-fields-2teX4UcT.js";import"./hidden-ne6iZOEs.js";import"./floating-BD-rLd_t.js";import"./element-movement-yqsWRTLw.js";import"./bugs-nRgSPrqW.js";import"./portal-Dh6NMUDP.js";import"./focus-management-D9qINPwd.js";import"./use-inert-others-DSpD9bag.js";import"./use-text-value-uMIJIdul.js";import"./open-closed-DNjMWLTC.js";import"./description-CNynomeu.js";import"./label-DuXkkxRj.js";const k={title:"Components/Listbox",component:a,parameters:{layout:"centered",docs:{description:{component:"A listbox component for selecting from a list of options. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}},tags:["autodocs"]},n=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],e={render:()=>{const[s,r]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{options:n,value:s,onChange:r})})}},t={render:s=>{const[r,l]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{...s,options:n,value:r,onChange:l})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
