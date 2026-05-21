import{r as n,j as o}from"./iframe-B_2llF5Y.js";import{L as a}from"./listbox-xJPF1xEp.js";import"./preload-helper-DEha_CyH.js";import"./clsx-B-dksMZM.js";import"./input-shell-YTGH2IZD.js";import"./index-B8k91cqS.js";import"./field-control-shell.module-DNRc52zd.js";import"./useAnchoredPopupScrollLock-DZ6uyEFc.js";import"./index-DWBCX9CX.js";import"./index-DMaG-6Cr.js";import"./index-CORXN6_2.js";import"./chevron-icon-BkiPKrJS.js";import"./ToolbarRootContext-hye0e9XY.js";const L={title:"Components/Listbox",component:a,parameters:{layout:"centered",docs:{description:{component:"A listbox component for selecting from a list of options. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}},tags:["autodocs"]},l=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],e={render:()=>{const[s,r]=n.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{options:l,value:s,onChange:r})})}},t={render:s=>{const[r,i]=n.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{...s,options:l,value:r,onChange:i})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const j=["Default","Playground"];export{e as Default,t as Playground,j as __namedExportsOrder,L as default};
