import{j as e,r as n}from"./iframe-ii299Cu5.js";import{C as s}from"./combobox-BMTHHa7f.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DYa9A5i-.js";import"./index-BqGO5dbw.js";import"./index-C_Qt56wl.js";import"./use-resolve-button-type-CBZ1aI4k.js";import"./keyboard-D7njr0Xf.js";import"./use-sync-refs-BBkBdVyb.js";import"./use-by-comparator-C94LHyO_.js";import"./form-fields-DEELotj1.js";import"./hidden-Cn_SrqBj.js";import"./floating-BdPeDLnn.js";import"./element-movement-CrZTURMR.js";import"./bugs-C2OHvTm5.js";import"./portal-usdoFaVe.js";import"./focus-management-BKYhelLL.js";import"./use-inert-others-D-YXQylI.js";import"./use-event-listener-DepPRdL3.js";import"./open-closed-DdTmSrOB.js";import"./use-tree-walker-DNZzt0uN.js";import"./active-element-history-CnbiHFr4.js";import"./description-D6O3PFf8.js";import"./frozen-BKdb1xkw.js";import"./label-CYmxWPmQ.js";const F={title:"Components/Combobox/Features",component:s,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}}},a=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],o={render:()=>{const[l,i]=n.useState(null);return e.jsx("div",{className:"w-64",children:e.jsx(s,{options:a,value:l,onChange:i,placeholder:"Select a fruit..."})})}},t={render:()=>{const[l,i]=n.useState(a[1]);return e.jsx("div",{className:"w-64",children:e.jsx(s,{options:a,value:l,onChange:i})})}},r={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(s,{options:a,disabled:!0,placeholder:"Disabled combobox"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
