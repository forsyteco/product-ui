import{r as l,j as e}from"./iframe-CeVB8obd.js";import{L as i}from"./listbox-CINtoYkR.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DGNQ89Xm.js";import"./index-hJDHe0xh.js";import"./index-DxGXflx1.js";import"./use-resolve-button-type-B16RnGb9.js";import"./keyboard-CPYOBzPz.js";import"./use-sync-refs-BoOcFdrF.js";import"./use-by-comparator-ChEKavq1.js";import"./form-fields-DTMhg-rK.js";import"./hidden-FQEwfQ5P.js";import"./floating-y6vRCQA6.js";import"./element-movement-DhCVsZtz.js";import"./bugs-C2vScuI6.js";import"./portal-1sZo8vyw.js";import"./focus-management-D4oSQtTM.js";import"./use-inert-others-C-7PjipA.js";import"./use-text-value-51uRn63g.js";import"./open-closed-Bv7w2Ee9.js";import"./description-Dytnpz6p.js";import"./frozen-B7IsPTJh.js";import"./label-C2lNcmET.js";const V={title:"Components/Listbox/Features",component:i,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}}},r=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"},{id:"4",label:"Disabled Option",value:"disabled",disabled:!0}],t={render:()=>{const[a,n]=l.useState(null);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},o={render:()=>{const[a,n]=l.useState(r[1]);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},s={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,disabled:!0})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
