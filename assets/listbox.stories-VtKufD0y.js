import{r as i,j as o}from"./iframe-ii299Cu5.js";import{L as a}from"./listbox-JU1U2G0X.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DYa9A5i-.js";import"./index-BqGO5dbw.js";import"./index-C_Qt56wl.js";import"./use-resolve-button-type-CBZ1aI4k.js";import"./keyboard-D7njr0Xf.js";import"./use-sync-refs-BBkBdVyb.js";import"./use-by-comparator-C94LHyO_.js";import"./form-fields-DEELotj1.js";import"./hidden-Cn_SrqBj.js";import"./floating-BdPeDLnn.js";import"./element-movement-CrZTURMR.js";import"./bugs-C2OHvTm5.js";import"./portal-usdoFaVe.js";import"./focus-management-BKYhelLL.js";import"./use-inert-others-D-YXQylI.js";import"./use-text-value-JANiSFNc.js";import"./open-closed-DdTmSrOB.js";import"./description-D6O3PFf8.js";import"./frozen-BKdb1xkw.js";import"./label-CYmxWPmQ.js";const A={title:"Components/Listbox",component:a,parameters:{layout:"centered",docs:{description:{component:"A listbox component for selecting from a list of options. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}},tags:["autodocs"]},n=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],e={render:()=>{const[s,r]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{options:n,value:s,onChange:r})})}},t={render:s=>{const[r,l]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{...s,options:n,value:r,onChange:l})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
