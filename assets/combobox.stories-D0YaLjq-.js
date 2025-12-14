import{r as l,j as t}from"./iframe-CeYd32X8.js";import{C as s}from"./combobox-DbnSMd5V.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DXUggmaQ.js";import"./index-DYyT_JbS.js";import"./index-Fzrzh3PM.js";import"./use-resolve-button-type-FwMgqBLi.js";import"./keyboard-BoF71p42.js";import"./use-sync-refs-ry5utqyI.js";import"./use-by-comparator-D3NsKXwl.js";import"./form-fields-Ll7hC3CT.js";import"./hidden-DipbFeWg.js";import"./floating-Bn-YBmfF.js";import"./element-movement-DB0a6a5I.js";import"./bugs-Red6znm7.js";import"./portal-0gor4Twm.js";import"./focus-management-DoY0kjxM.js";import"./use-inert-others-BnO2WJMG.js";import"./use-event-listener-YoiA5kE_.js";import"./open-closed-DQGie1tM.js";import"./use-tree-walker-Da_nU_r_.js";import"./active-element-history-Dvi1_BFb.js";import"./description-9wIlOIiQ.js";import"./frozen-C5_hd5RQ.js";import"./label-CAGnDoa2.js";const I={title:"Components/Combobox",component:s,parameters:{layout:"centered",docs:{description:{component:"A combobox component with searchable dropdown. Built with Headless UI for accessibility and keyboard navigation."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}},tags:["autodocs"]},n=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],e={render:()=>{const[r,a]=l.useState(null);return t.jsx("div",{className:"w-64",children:t.jsx(s,{options:n,value:r,onChange:a,placeholder:"Select a fruit..."})})}},o={render:r=>{const[a,i]=l.useState(null);return t.jsx("div",{className:"w-64",children:t.jsx(s,{...r,options:n,value:a,onChange:i})})},args:{placeholder:"Select an option...",disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
