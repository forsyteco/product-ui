import{r as i,j as o}from"./iframe-BX-ROWNI.js";import{C as e}from"./combobox-Dcl0FbGy.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-FfpMdCVM.js";import"./use-resolve-button-type-38vbuAiE.js";import"./keyboard-CCfXnbEr.js";import"./use-sync-refs-DTg_pgWq.js";import"./index-6YZsdqky.js";import"./index-Cu-QQxcH.js";import"./frozen-BLav77oe.js";import"./form-fields-Dg0BeDk3.js";import"./hidden-D5uAFvgf.js";import"./floating-BT1BL60C.js";import"./element-movement-B5L5FeYV.js";import"./bugs-BGC4SnX6.js";import"./portal-CJIo8SlY.js";import"./focus-management-plLOIbVD.js";import"./use-inert-others-D22FfipB.js";import"./use-event-listener-B-V2qlHO.js";import"./open-closed-C_k6EVRc.js";import"./use-tree-walker-BAUXv4rD.js";import"./active-element-history-iFJj_uj1.js";import"./description-CdOWzJj9.js";import"./label-0iOr3fT0.js";const A={title:"Components/Combobox/Features",component:e.Root,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}}},s=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],t={render:()=>{const[l,a]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,value:l,onChange:a,placeholder:"Select a fruit...",children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}},r={render:()=>{const[l,a]=i.useState(s[1]);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,value:l,onChange:a,children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}},n={render:()=>o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,disabled:!0,placeholder:"Disabled combobox",children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(null);
    return <div className="w-64">
        <Combobox.Root options={options} value={selected} onChange={setSelected} placeholder="Select a fruit...">
          <Combobox.Control>
            <Combobox.Input />
            <Combobox.ClearButton />
            <Combobox.ToggleButton />
          </Combobox.Control>
          <Combobox.Options />
        </Combobox.Root>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(options[1]);
    return <div className="w-64">
        <Combobox.Root options={options} value={selected} onChange={setSelected}>
          <Combobox.Control>
            <Combobox.Input />
            <Combobox.ClearButton />
            <Combobox.ToggleButton />
          </Combobox.Control>
          <Combobox.Options />
        </Combobox.Root>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <Combobox.Root options={options} disabled placeholder="Disabled combobox">
        <Combobox.Control>
          <Combobox.Input />
          <Combobox.ClearButton />
          <Combobox.ToggleButton />
        </Combobox.Control>
        <Combobox.Options />
      </Combobox.Root>
    </div>
}`,...n.parameters?.docs?.source}}};const F=["Basic","WithInitialValue","Disabled"];export{t as Basic,n as Disabled,r as WithInitialValue,F as __namedExportsOrder,A as default};
