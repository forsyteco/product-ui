import{j as e,r as n}from"./iframe-CNYYlD36.js";import{C as s}from"./combobox-HIBTXuR6.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-C4fSfmyf.js";import"./index-DYwh5NA3.js";import"./index-D4rEHvpE.js";import"./use-resolve-button-type-C9PyahDA.js";import"./keyboard-DtISN8rn.js";import"./use-sync-refs-DZgQMG1Q.js";import"./use-by-comparator-BwVMv540.js";import"./form-fields-BE6Jb6rq.js";import"./hidden-K7cnV1wF.js";import"./floating-DCZWDNJE.js";import"./element-movement-BlCQH2Fn.js";import"./bugs-SeIKBOFb.js";import"./portal-_z1lZ7UR.js";import"./focus-management-DeCdYFst.js";import"./use-inert-others-Dq6Q-G8N.js";import"./use-event-listener-CT9Lk629.js";import"./open-closed-By9Rj1dh.js";import"./use-tree-walker-DvucGxYg.js";import"./active-element-history-D2j9DJpv.js";import"./description-D1PW4E0C.js";import"./frozen-6-U9ystM.js";import"./label-DgKDHCQR.js";const F={title:"Components/Combobox/Features",component:s,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}}},a=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],o={render:()=>{const[l,i]=n.useState(null);return e.jsx("div",{className:"w-64",children:e.jsx(s,{options:a,value:l,onChange:i,placeholder:"Select a fruit..."})})}},t={render:()=>{const[l,i]=n.useState(a[1]);return e.jsx("div",{className:"w-64",children:e.jsx(s,{options:a,value:l,onChange:i})})}},r={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(s,{options:a,disabled:!0,placeholder:"Disabled combobox"})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
