import{r as l,j as e}from"./iframe-2gSw_mv2.js";import{L as i}from"./listbox-WaDitbx-.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-BJkWDc_4.js";import"./keyboard-BaAOKfHq.js";import"./use-sync-refs-DmqRrsUT.js";import"./index-CfTXRGMP.js";import"./index-DkkTbRiJ.js";import"./frozen-VyUt3tJ3.js";import"./form-fields-BGfwIb9P.js";import"./hidden-CNfTMTAC.js";import"./floating-C3szj9N5.js";import"./element-movement-C7gX0vvO.js";import"./bugs-CQkR_j0_.js";import"./portal-Bro9fcSW.js";import"./focus-management-COn_JIX_.js";import"./use-inert-others-CkKm98KO.js";import"./use-text-value-IbULVnbX.js";import"./open-closed-BO3DqZNu.js";import"./description-BdFui_Rt.js";import"./label-DHV5xTYx.js";const I={title:"Components/Listbox/Features",component:i,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}}},r=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"},{id:"4",label:"Disabled Option",value:"disabled",disabled:!0}],t={render:()=>{const[a,n]=l.useState(null);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},o={render:()=>{const[a,n]=l.useState(r[1]);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},s={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,disabled:!0})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
