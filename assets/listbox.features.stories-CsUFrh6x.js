import{j as e,r as l}from"./iframe-DCut3pB0.js";import{L as i}from"./listbox-D54-BxXl.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DTcOx15S.js";import"./index-Cw_6tGoc.js";import"./index-DK0opmzF.js";import"./use-resolve-button-type-DEn31ueC.js";import"./keyboard-BxH3F2n_.js";import"./use-sync-refs-GHuczuXX.js";import"./use-by-comparator-DKD567_4.js";import"./form-fields-nwNBguIm.js";import"./hidden-CVuXf1xy.js";import"./floating-CAOHwN0g.js";import"./element-movement-BTrBB4aI.js";import"./bugs-re273FY1.js";import"./portal-CU9rp48T.js";import"./focus-management-B-XE9RWC.js";import"./use-inert-others-Ct0UT_kG.js";import"./use-text-value-B3aeoHUd.js";import"./open-closed-DhS47DzH.js";import"./description-Rd-Cv9GD.js";import"./frozen-WLPXiPe0.js";import"./label-IgrQDxQ7.js";const V={title:"Components/Listbox/Features",component:i,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the listbox is disabled"}}},r=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"},{id:"4",label:"Disabled Option",value:"disabled",disabled:!0}],t={render:()=>{const[a,n]=l.useState(null);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},o={render:()=>{const[a,n]=l.useState(r[1]);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,value:a,onChange:n})})}},s={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(i,{options:r,disabled:!0})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
