import{r as n,j as o}from"./iframe-AG0x1wfB.js";import{L as r}from"./listbox-Bf-J5Wcq.js";import"./preload-helper-DEha_CyH.js";import"./clsx-B-dksMZM.js";import"./input-shell-BvgGrInT.js";import"./index-B8k91cqS.js";import"./chevron-icon-R-95Fso2.js";import"./index-Cm_AQNJq.js";import"./index-BcX7eClP.js";import"./index-CfYQr_U5.js";const S={title:"Components/Listbox",component:r,parameters:{layout:"centered",docs:{description:{component:"A listbox component for selecting from a list of options. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}},tags:["autodocs"]},l=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],e={render:()=>{const[s,a]=n.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(r,{options:l,value:s,onChange:a})})}},t={render:s=>{const[a,i]=n.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(r,{...s,options:l,value:a,onChange:i})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const f=["Default","Playground"];export{e as Default,t as Playground,f as __namedExportsOrder,S as default};
