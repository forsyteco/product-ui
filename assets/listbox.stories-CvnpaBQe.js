import{r as i,j as o}from"./iframe-C3NiGLkr.js";import{L as a}from"./listbox-Bqe4KVHu.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-dM9pZBoI.js";import"./index-DNRP92Qz.js";import"./index-CEhDcc2E.js";import"./use-resolve-button-type-D9YGvU7b.js";import"./keyboard-Dz8OvpXF.js";import"./use-sync-refs-Dd4FYj0e.js";import"./use-by-comparator-T_dcLOSS.js";import"./form-fields-Cc50cINb.js";import"./hidden-R1nlN2hH.js";import"./floating-CGoPYLGl.js";import"./element-movement-NZmXZBjR.js";import"./bugs-DeaIigXP.js";import"./portal-C_xsT7ww.js";import"./focus-management-CiKbyxWz.js";import"./use-inert-others-B2o3pG-V.js";import"./use-text-value-fzlANQM8.js";import"./open-closed-Cju07csO.js";import"./description-te5qwLx3.js";import"./frozen-D1XP1SqU.js";import"./label-DIe7zJQA.js";const A={title:"Components/Listbox",component:a,parameters:{layout:"centered",docs:{description:{component:"A listbox component for selecting from a list of options. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}},tags:["autodocs"]},n=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],e={render:()=>{const[s,r]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{options:n,value:s,onChange:r})})}},t={render:s=>{const[r,l]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{...s,options:n,value:r,onChange:l})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
