import{r as l,j as e}from"./iframe-AG0x1wfB.js";import{L as a}from"./listbox-Bf-J5Wcq.js";import"./preload-helper-DEha_CyH.js";import"./clsx-B-dksMZM.js";import"./input-shell-BvgGrInT.js";import"./index-B8k91cqS.js";import"./chevron-icon-R-95Fso2.js";import"./index-Cm_AQNJq.js";import"./index-BcX7eClP.js";import"./index-CfYQr_U5.js";const g={title:"Components/Listbox/Features",component:a,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}}},r=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"},{id:"4",label:"Disabled Option",value:"disabled",disabled:!0}],t={render:()=>{const[n,i]=l.useState(null);return e.jsx("div",{className:"w-64",children:e.jsx(a,{options:r,value:n,onChange:i})})}},s={render:()=>{const[n,i]=l.useState(r[1]);return e.jsx("div",{className:"w-64",children:e.jsx(a,{options:r,value:n,onChange:i})})}},o={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(a,{options:r,disabled:!0})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ListboxOption | null>(null);
    return <div className="w-64">
        <Listbox options={options} value={selected} onChange={setSelected} />
      </div>;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ListboxOption | null>(options[1]);
    return <div className="w-64">
        <Listbox options={options} value={selected} onChange={setSelected} />
      </div>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <Listbox options={options} disabled />
    </div>
}`,...o.parameters?.docs?.source}}};const j=["Basic","WithInitialValue","Disabled"];export{t as Basic,o as Disabled,s as WithInitialValue,j as __namedExportsOrder,g as default};
