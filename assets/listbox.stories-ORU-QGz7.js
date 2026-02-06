import{r as i,j as o}from"./iframe-BZ1wujjQ.js";import{L as a}from"./listbox-kU0EwJLD.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BfnhhEST.js";import"./index-W2FIh6FJ.js";import"./index-imFVSO3i.js";import"./use-resolve-button-type-BdBbSlJ2.js";import"./keyboard-Ce2CPQ3X.js";import"./use-sync-refs-DKphwUq6.js";import"./use-by-comparator-TOhtDbp6.js";import"./form-fields-zS5QveKI.js";import"./hidden-BNsWunAW.js";import"./floating-DJeorzdf.js";import"./element-movement-BFShz-nT.js";import"./bugs-CWise-ep.js";import"./portal-EQenjn8w.js";import"./focus-management-DzM3vxoc.js";import"./use-inert-others-D7PEgJFU.js";import"./use-text-value-2uJ_D3Gg.js";import"./open-closed-DMtSAjel.js";import"./description-CTKD1BlB.js";import"./frozen-P3XLoKA6.js";import"./label-DjUSKMEb.js";const A={title:"Components/Listbox",component:a,parameters:{layout:"centered",docs:{description:{component:"A listbox component for selecting from a list of options. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}},tags:["autodocs"]},n=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],e={render:()=>{const[s,r]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{options:n,value:s,onChange:r})})}},t={render:s=>{const[r,l]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{...s,options:n,value:r,onChange:l})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
