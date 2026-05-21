import{r as l,j as e}from"./iframe-DtxS-MGC.js";import{L as i}from"./listbox-Blq9rA6G.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-CLhQcegA.js";import"./keyboard-DGdCXcdW.js";import"./use-sync-refs-CPbG3aZX.js";import"./index-MJ0bJMXz.js";import"./index-HQ1KwuKc.js";import"./frozen-o0CKUs3I.js";import"./form-fields-BcAusS8B.js";import"./hidden-iOrYYUkf.js";import"./floating-D27cv2f5.js";import"./element-movement-ys-UjLPu.js";import"./bugs-D6x1SQ1q.js";import"./portal-DazVI_VC.js";import"./focus-management-DVvF2Sc9.js";import"./use-inert-others-DZyxT0dB.js";import"./use-text-value-6D2gsjTG.js";import"./open-closed-CSKGfCwc.js";import"./description-CHeu0Qp6.js";import"./label-DM0RO_rr.js";const I={title:"Components/Listbox/Features",component:i,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}}},r=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"},{id:"4",label:"Disabled Option",value:"disabled",disabled:!0}],t={render:()=>{const[a,n]=l.useState(null);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},o={render:()=>{const[a,n]=l.useState(r[1]);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},s={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,disabled:!0})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
