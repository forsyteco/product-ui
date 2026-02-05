import{r as i,j as o}from"./iframe-CNYYlD36.js";import{L as a}from"./listbox-B8Al65vD.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-C4fSfmyf.js";import"./index-DYwh5NA3.js";import"./index-D4rEHvpE.js";import"./use-resolve-button-type-C9PyahDA.js";import"./keyboard-DtISN8rn.js";import"./use-sync-refs-DZgQMG1Q.js";import"./use-by-comparator-BwVMv540.js";import"./form-fields-BE6Jb6rq.js";import"./hidden-K7cnV1wF.js";import"./floating-DCZWDNJE.js";import"./element-movement-BlCQH2Fn.js";import"./bugs-SeIKBOFb.js";import"./portal-_z1lZ7UR.js";import"./focus-management-DeCdYFst.js";import"./use-inert-others-Dq6Q-G8N.js";import"./use-text-value-AWhdhCcv.js";import"./open-closed-By9Rj1dh.js";import"./description-D1PW4E0C.js";import"./frozen-6-U9ystM.js";import"./label-DgKDHCQR.js";const A={title:"Components/Listbox",component:a,parameters:{layout:"centered",docs:{description:{component:"A listbox component for selecting from a list of options. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}},tags:["autodocs"]},n=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],e={render:()=>{const[s,r]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{options:n,value:s,onChange:r})})}},t={render:s=>{const[r,l]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{...s,options:n,value:r,onChange:l})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
