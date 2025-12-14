import{r as i,j as o}from"./iframe-CeYd32X8.js";import{L as a}from"./listbox-VZIaZg26.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DXUggmaQ.js";import"./index-DYyT_JbS.js";import"./index-Fzrzh3PM.js";import"./use-resolve-button-type-FwMgqBLi.js";import"./keyboard-BoF71p42.js";import"./use-sync-refs-ry5utqyI.js";import"./use-by-comparator-D3NsKXwl.js";import"./form-fields-Ll7hC3CT.js";import"./hidden-DipbFeWg.js";import"./floating-Bn-YBmfF.js";import"./element-movement-DB0a6a5I.js";import"./bugs-Red6znm7.js";import"./portal-0gor4Twm.js";import"./focus-management-DoY0kjxM.js";import"./use-inert-others-BnO2WJMG.js";import"./use-text-value-BL9_cAMK.js";import"./open-closed-DQGie1tM.js";import"./description-9wIlOIiQ.js";import"./frozen-C5_hd5RQ.js";import"./label-CAGnDoa2.js";const A={title:"Components/Listbox",component:a,parameters:{layout:"centered",docs:{description:{component:"A listbox component for selecting from a list of options. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}},tags:["autodocs"]},n=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],e={render:()=>{const[s,r]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{options:n,value:s,onChange:r})})}},t={render:s=>{const[r,l]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsx(a,{...s,options:n,value:r,onChange:l})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
