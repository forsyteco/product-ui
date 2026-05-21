import{r as i,j as o}from"./iframe-rkvXkcPn.js";import{L as a}from"./listbox-m_0GEu-K.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./use-resolve-button-type-Bxr6Vt74.js";import"./keyboard-ByedxuE2.js";import"./use-sync-refs-B6ZSIoRc.js";import"./index-Cq7Zl3Z-.js";import"./index-CETgZHFe.js";import"./frozen-B3w0rFic.js";import"./form-fields-CZ6_35PY.js";import"./hidden-DJhC1tAv.js";import"./floating-Bs9MZ1gB.js";import"./element-movement-C3E_z2a9.js";import"./bugs-BblNTk-s.js";import"./portal-QJFU0dWI.js";import"./focus-management-Bx46CJ0W.js";import"./use-inert-others-mK41CiV3.js";import"./use-text-value-DH15n30z.js";import"./open-closed-BS-lTtUD.js";import"./description-CvLuHXpX.js";import"./label-Da6zJ70M.js";const _={title:"Components/Listbox",component:a,parameters:{layout:"centered",docs:{description:{component:"A listbox component for selecting from a list of options. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}},tags:["autodocs"]},n=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],e={render:()=>{const[s,r]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{options:n,value:s,onChange:r})})}},t={render:s=>{const[r,l]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{...s,options:n,value:r,onChange:l})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const k=["Default","Playground"];export{e as Default,t as Playground,k as __namedExportsOrder,_ as default};
