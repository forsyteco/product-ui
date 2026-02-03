import{r as l,j as t}from"./iframe-C3NiGLkr.js";import{C as s}from"./combobox-CU-Q9zQz.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-dM9pZBoI.js";import"./index-DNRP92Qz.js";import"./index-CEhDcc2E.js";import"./use-resolve-button-type-D9YGvU7b.js";import"./keyboard-Dz8OvpXF.js";import"./use-sync-refs-Dd4FYj0e.js";import"./use-by-comparator-T_dcLOSS.js";import"./form-fields-Cc50cINb.js";import"./hidden-R1nlN2hH.js";import"./floating-CGoPYLGl.js";import"./element-movement-NZmXZBjR.js";import"./bugs-DeaIigXP.js";import"./portal-C_xsT7ww.js";import"./focus-management-CiKbyxWz.js";import"./use-inert-others-B2o3pG-V.js";import"./use-event-listener-ChoyDxVw.js";import"./open-closed-Cju07csO.js";import"./use-tree-walker-CLmeBEDV.js";import"./active-element-history-Bd907BBR.js";import"./description-te5qwLx3.js";import"./frozen-D1XP1SqU.js";import"./label-DIe7zJQA.js";const I={title:"Components/Combobox",component:s,parameters:{layout:"centered",docs:{description:{component:"A combobox component with searchable dropdown. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}},tags:["autodocs"]},n=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],e={render:()=>{const[r,a]=l.useState(null);return t.jsx("div",{className:"w-64",children:t.jsx(s,{options:n,value:r,onChange:a,placeholder:"Select a fruit..."})})}},o={render:r=>{const[a,i]=l.useState(null);return t.jsx("div",{className:"w-64",children:t.jsx(s,{...r,options:n,value:a,onChange:i})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(null);
    return <div className="w-64">
        <Combobox options={options} value={selected} onChange={setSelected} placeholder="Select a fruit..." />
      </div>;
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<ComboboxOption | null>(null);
    return <div className="w-64">
        <Combobox {...args} options={options} value={selected} onChange={setSelected} />
      </div>;
  },
  args: {
    placeholder: 'Select an option...',
    disabled: false
  }
}`,...o.parameters?.docs?.source}}};const R=["Default","Playground"];export{e as Default,o as Playground,R as __namedExportsOrder,I as default};
