import{j as e,r as n}from"./iframe-BZ1wujjQ.js";import{C as s}from"./combobox-D6JBnlP6.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BfnhhEST.js";import"./index-W2FIh6FJ.js";import"./index-imFVSO3i.js";import"./use-resolve-button-type-BdBbSlJ2.js";import"./keyboard-Ce2CPQ3X.js";import"./use-sync-refs-DKphwUq6.js";import"./use-by-comparator-TOhtDbp6.js";import"./form-fields-zS5QveKI.js";import"./hidden-BNsWunAW.js";import"./floating-DJeorzdf.js";import"./element-movement-BFShz-nT.js";import"./bugs-CWise-ep.js";import"./portal-EQenjn8w.js";import"./focus-management-DzM3vxoc.js";import"./use-inert-others-D7PEgJFU.js";import"./use-event-listener-DtvH9auP.js";import"./open-closed-DMtSAjel.js";import"./use-tree-walker-BngRelFW.js";import"./active-element-history-DHHFNsIM.js";import"./description-CTKD1BlB.js";import"./frozen-P3XLoKA6.js";import"./label-DjUSKMEb.js";const F={title:"Components/Combobox/Features",component:s,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}}},a=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],o={render:()=>{const[l,i]=n.useState(null);return e.jsx("div",{className:"w-64",children:e.jsx(s,{options:a,value:l,onChange:i,placeholder:"Select a fruit..."})})}},t={render:()=>{const[l,i]=n.useState(a[1]);return e.jsx("div",{className:"w-64",children:e.jsx(s,{options:a,value:l,onChange:i})})}},r={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(s,{options:a,disabled:!0,placeholder:"Disabled combobox"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(null);
    return <div className="w-64">
        <Combobox options={options} value={selected} onChange={setSelected} placeholder="Select a fruit..." />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(options[1]);
    return <div className="w-64">
        <Combobox options={options} value={selected} onChange={setSelected} />
      </div>;
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <Combobox options={options} disabled placeholder="Disabled combobox" />
    </div>
}`,...r.parameters?.docs?.source}}};const P=["Basic","WithInitialValue","Disabled"];export{o as Basic,r as Disabled,t as WithInitialValue,P as __namedExportsOrder,F as default};
