import{r as l,j as t}from"./iframe-ii299Cu5.js";import{C as s}from"./combobox-BMTHHa7f.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DYa9A5i-.js";import"./index-BqGO5dbw.js";import"./index-C_Qt56wl.js";import"./use-resolve-button-type-CBZ1aI4k.js";import"./keyboard-D7njr0Xf.js";import"./use-sync-refs-BBkBdVyb.js";import"./use-by-comparator-C94LHyO_.js";import"./form-fields-DEELotj1.js";import"./hidden-Cn_SrqBj.js";import"./floating-BdPeDLnn.js";import"./element-movement-CrZTURMR.js";import"./bugs-C2OHvTm5.js";import"./portal-usdoFaVe.js";import"./focus-management-BKYhelLL.js";import"./use-inert-others-D-YXQylI.js";import"./use-event-listener-DepPRdL3.js";import"./open-closed-DdTmSrOB.js";import"./use-tree-walker-DNZzt0uN.js";import"./active-element-history-CnbiHFr4.js";import"./description-D6O3PFf8.js";import"./frozen-BKdb1xkw.js";import"./label-CYmxWPmQ.js";const I={title:"Components/Combobox",component:s,parameters:{layout:"centered",docs:{description:{component:"A combobox component with searchable dropdown. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}},tags:["autodocs"]},n=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],e={render:()=>{const[r,a]=l.useState(null);return t.jsx("div",{className:"w-64",children:t.jsx(s,{options:n,value:r,onChange:a,placeholder:"Select a fruit..."})})}},o={render:r=>{const[a,i]=l.useState(null);return t.jsx("div",{className:"w-64",children:t.jsx(s,{...r,options:n,value:a,onChange:i})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
