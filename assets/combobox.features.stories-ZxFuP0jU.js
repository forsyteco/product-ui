import{r as i,j as o}from"./iframe-CGF0_A5u.js";import{C as e}from"./combobox-CbY3VYk0.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-amMfZsIx.js";import"./use-resolve-button-type-CoMikh-_.js";import"./keyboard-D86mmLzy.js";import"./use-sync-refs-BQJai7yY.js";import"./index-BF50FvRs.js";import"./index-D85rYT82.js";import"./frozen-WvZGd1jK.js";import"./form-fields-DW6HVtwJ.js";import"./hidden--9eMrDrq.js";import"./floating-BBRF2GKr.js";import"./element-movement-BHB6z7Gj.js";import"./bugs-CmMcbd0d.js";import"./portal-CIPjWJEZ.js";import"./focus-management-DtCYyGj7.js";import"./use-inert-others-Bs_h4dt8.js";import"./use-event-listener-CXGnWSGZ.js";import"./open-closed-VIqDAeBc.js";import"./use-tree-walker-CJwZbYoL.js";import"./active-element-history-BYvFK8IE.js";import"./description-Cg8HyQS4.js";import"./label-CK0kZ04v.js";const A={title:"Components/Combobox/Features",component:e.Root,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}}},s=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],t={render:()=>{const[l,a]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,value:l,onChange:a,placeholder:"Select a fruit...",children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}},r={render:()=>{const[l,a]=i.useState(s[1]);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,value:l,onChange:a,children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}},n={render:()=>o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,disabled:!0,placeholder:"Disabled combobox",children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
