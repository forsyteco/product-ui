import{r as i,j as o}from"./iframe-CeVB8obd.js";import{L as a}from"./listbox-CINtoYkR.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DGNQ89Xm.js";import"./index-hJDHe0xh.js";import"./index-DxGXflx1.js";import"./use-resolve-button-type-B16RnGb9.js";import"./keyboard-CPYOBzPz.js";import"./use-sync-refs-BoOcFdrF.js";import"./use-by-comparator-ChEKavq1.js";import"./form-fields-DTMhg-rK.js";import"./hidden-FQEwfQ5P.js";import"./floating-y6vRCQA6.js";import"./element-movement-DhCVsZtz.js";import"./bugs-C2vScuI6.js";import"./portal-1sZo8vyw.js";import"./focus-management-D4oSQtTM.js";import"./use-inert-others-C-7PjipA.js";import"./use-text-value-51uRn63g.js";import"./open-closed-Bv7w2Ee9.js";import"./description-Dytnpz6p.js";import"./frozen-B7IsPTJh.js";import"./label-C2lNcmET.js";const A={title:"Components/Listbox",component:a,parameters:{layout:"centered",docs:{description:{component:"A listbox component for selecting from a list of options. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}},tags:["autodocs"]},n=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],e={render:()=>{const[s,r]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{options:n,value:s,onChange:r})})}},t={render:s=>{const[r,l]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{...s,options:n,value:r,onChange:l})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
