import{j as e,r as n}from"./iframe-DCut3pB0.js";import{C as s}from"./combobox-BtamAtI7.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DTcOx15S.js";import"./index-Cw_6tGoc.js";import"./index-DK0opmzF.js";import"./use-resolve-button-type-DEn31ueC.js";import"./keyboard-BxH3F2n_.js";import"./use-sync-refs-GHuczuXX.js";import"./use-by-comparator-DKD567_4.js";import"./form-fields-nwNBguIm.js";import"./hidden-CVuXf1xy.js";import"./floating-CAOHwN0g.js";import"./element-movement-BTrBB4aI.js";import"./bugs-re273FY1.js";import"./portal-CU9rp48T.js";import"./focus-management-B-XE9RWC.js";import"./use-inert-others-Ct0UT_kG.js";import"./use-event-listener-CqjDTdRz.js";import"./open-closed-DhS47DzH.js";import"./use-tree-walker-5TpjLfCZ.js";import"./active-element-history-De1WnHxW.js";import"./description-Rd-Cv9GD.js";import"./frozen-WLPXiPe0.js";import"./label-IgrQDxQ7.js";const F={title:"Components/Combobox/Features",component:s,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}}},a=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],o={render:()=>{const[l,i]=n.useState(null);return e.jsx("div",{className:"w-64",children:e.jsx(s,{options:a,value:l,onChange:i,placeholder:"Select a fruit..."})})}},t={render:()=>{const[l,i]=n.useState(a[1]);return e.jsx("div",{className:"w-64",children:e.jsx(s,{options:a,value:l,onChange:i})})}},r={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(s,{options:a,disabled:!0,placeholder:"Disabled combobox"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
