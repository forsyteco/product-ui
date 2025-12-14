import{j as e,r as n}from"./iframe-CeYd32X8.js";import{C as s}from"./combobox-DbnSMd5V.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DXUggmaQ.js";import"./index-DYyT_JbS.js";import"./index-Fzrzh3PM.js";import"./use-resolve-button-type-FwMgqBLi.js";import"./keyboard-BoF71p42.js";import"./use-sync-refs-ry5utqyI.js";import"./use-by-comparator-D3NsKXwl.js";import"./form-fields-Ll7hC3CT.js";import"./hidden-DipbFeWg.js";import"./floating-Bn-YBmfF.js";import"./element-movement-DB0a6a5I.js";import"./bugs-Red6znm7.js";import"./portal-0gor4Twm.js";import"./focus-management-DoY0kjxM.js";import"./use-inert-others-BnO2WJMG.js";import"./use-event-listener-YoiA5kE_.js";import"./open-closed-DQGie1tM.js";import"./use-tree-walker-Da_nU_r_.js";import"./active-element-history-Dvi1_BFb.js";import"./description-9wIlOIiQ.js";import"./frozen-C5_hd5RQ.js";import"./label-CAGnDoa2.js";const F={title:"Components/Combobox/Features",component:s,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}}},a=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],o={render:()=>{const[l,i]=n.useState(null);return e.jsx("div",{className:"w-64",children:e.jsx(s,{options:a,value:l,onChange:i,placeholder:"Select a fruit..."})})}},t={render:()=>{const[l,i]=n.useState(a[1]);return e.jsx("div",{className:"w-64",children:e.jsx(s,{options:a,value:l,onChange:i})})}},r={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(s,{options:a,disabled:!0,placeholder:"Disabled combobox"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
