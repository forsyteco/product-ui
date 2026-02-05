import{r as l,j as t}from"./iframe-CNYYlD36.js";import{C as s}from"./combobox-HIBTXuR6.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-C4fSfmyf.js";import"./index-DYwh5NA3.js";import"./index-D4rEHvpE.js";import"./use-resolve-button-type-C9PyahDA.js";import"./keyboard-DtISN8rn.js";import"./use-sync-refs-DZgQMG1Q.js";import"./use-by-comparator-BwVMv540.js";import"./form-fields-BE6Jb6rq.js";import"./hidden-K7cnV1wF.js";import"./floating-DCZWDNJE.js";import"./element-movement-BlCQH2Fn.js";import"./bugs-SeIKBOFb.js";import"./portal-_z1lZ7UR.js";import"./focus-management-DeCdYFst.js";import"./use-inert-others-Dq6Q-G8N.js";import"./use-event-listener-CT9Lk629.js";import"./open-closed-By9Rj1dh.js";import"./use-tree-walker-DvucGxYg.js";import"./active-element-history-D2j9DJpv.js";import"./description-D1PW4E0C.js";import"./frozen-6-U9ystM.js";import"./label-DgKDHCQR.js";const I={title:"Components/Combobox",component:s,parameters:{layout:"centered",docs:{description:{component:"A combobox component with searchable dropdown. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}},tags:["autodocs"]},n=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],e={render:()=>{const[r,a]=l.useState(null);return t.jsx("div",{className:"w-64",children:t.jsx(s,{options:n,value:r,onChange:a,placeholder:"Select a fruit..."})})}},o={render:r=>{const[a,i]=l.useState(null);return t.jsx("div",{className:"w-64",children:t.jsx(s,{...r,options:n,value:a,onChange:i})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
