import{j as e,r as l}from"./iframe-CFsUuUqa.js";import{L as i}from"./listbox-DFrkyK3H.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BH9yhaj4.js";import"./index-D26-LCOM.js";import"./index-BsJ9ywC8.js";import"./use-resolve-button-type-DY7jbxIq.js";import"./keyboard-BjzAsI1V.js";import"./use-sync-refs-DycZJTrw.js";import"./use-by-comparator-CQNCvV4u.js";import"./form-fields-DLFlDeZA.js";import"./hidden-CAbe9GgB.js";import"./floating-D0H9PoA7.js";import"./element-movement-CPeALCLL.js";import"./bugs-QgyXksVi.js";import"./portal-nsyrrPkk.js";import"./focus-management-kaFNE5_8.js";import"./use-inert-others-BjMmLUa1.js";import"./use-text-value-D_tGRDUD.js";import"./open-closed-C5hIdceC.js";import"./description-DJ3YnSma.js";import"./frozen-CLZu8IH4.js";import"./label-Da47qnUN.js";const V={title:"Components/Listbox/Features",component:i,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}}},r=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"},{id:"4",label:"Disabled Option",value:"disabled",disabled:!0}],t={render:()=>{const[a,n]=l.useState(null);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},o={render:()=>{const[a,n]=l.useState(r[1]);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},s={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,disabled:!0})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const _=["Basic","WithInitialValue","Disabled"];export{t as Basic,s as Disabled,o as WithInitialValue,_ as __namedExportsOrder,V as default};
