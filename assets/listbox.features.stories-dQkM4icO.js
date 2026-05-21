import{r as l,j as e}from"./iframe-BX-ROWNI.js";import{L as i}from"./listbox-DIiiLutl.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-38vbuAiE.js";import"./keyboard-CCfXnbEr.js";import"./use-sync-refs-DTg_pgWq.js";import"./index-6YZsdqky.js";import"./index-Cu-QQxcH.js";import"./frozen-BLav77oe.js";import"./form-fields-Dg0BeDk3.js";import"./hidden-D5uAFvgf.js";import"./floating-BT1BL60C.js";import"./element-movement-B5L5FeYV.js";import"./bugs-BGC4SnX6.js";import"./portal-CJIo8SlY.js";import"./focus-management-plLOIbVD.js";import"./use-inert-others-D22FfipB.js";import"./use-text-value-BKp46TB5.js";import"./open-closed-C_k6EVRc.js";import"./description-CdOWzJj9.js";import"./label-0iOr3fT0.js";const I={title:"Components/Listbox/Features",component:i,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}}},r=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"},{id:"4",label:"Disabled Option",value:"disabled",disabled:!0}],t={render:()=>{const[a,n]=l.useState(null);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},o={render:()=>{const[a,n]=l.useState(r[1]);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},s={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,disabled:!0})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
