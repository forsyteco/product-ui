import{r as l,j as e}from"./iframe-CItR6fGu.js";import{L as i}from"./listbox-DAkQezaO.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-BFmILeb_.js";import"./keyboard-8VRtqMCG.js";import"./use-sync-refs-CaS58R8u.js";import"./index-CNOo9puS.js";import"./index-B9rWXd0V.js";import"./frozen-CtY5cNTH.js";import"./form-fields-BlMdOaBK.js";import"./hidden-DNm3g6Z0.js";import"./floating-BsWb7cLr.js";import"./element-movement-CMyflZBM.js";import"./bugs-DpLPc2L_.js";import"./portal-DLX_yNr9.js";import"./focus-management-1bpFx2A3.js";import"./use-inert-others-b7zpTwIW.js";import"./use-text-value-BSjts503.js";import"./open-closed-McBZdwWe.js";import"./description-HwKmEHXT.js";import"./label-BrqWDG43.js";const I={title:"Components/Listbox/Features",component:i,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}}},r=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"},{id:"4",label:"Disabled Option",value:"disabled",disabled:!0}],t={render:()=>{const[a,n]=l.useState(null);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},o={render:()=>{const[a,n]=l.useState(r[1]);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},s={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,disabled:!0})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ListboxOption | null>(null);
    return <div className="w-64">
        <Listbox options={options} value={selected} onChange={setSelected} />
      </div>;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ListboxOption | null>(options[1]);
    return <div className="w-64">
        <Listbox options={options} value={selected} onChange={setSelected} />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <Listbox options={options} disabled />
    </div>
}`,...s.parameters?.docs?.source}}};const V=["Basic","WithInitialValue","Disabled"];export{t as Basic,s as Disabled,o as WithInitialValue,V as __namedExportsOrder,I as default};
