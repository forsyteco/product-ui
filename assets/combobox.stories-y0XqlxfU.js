import{r as l,j as o}from"./iframe-CItR6fGu.js";import{C as e}from"./combobox-Kd2csIHP.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-CU8mt6_D.js";import"./use-resolve-button-type-BFmILeb_.js";import"./keyboard-8VRtqMCG.js";import"./use-sync-refs-CaS58R8u.js";import"./index-CNOo9puS.js";import"./index-B9rWXd0V.js";import"./frozen-CtY5cNTH.js";import"./form-fields-BlMdOaBK.js";import"./hidden-DNm3g6Z0.js";import"./floating-BsWb7cLr.js";import"./element-movement-CMyflZBM.js";import"./bugs-DpLPc2L_.js";import"./portal-DLX_yNr9.js";import"./focus-management-1bpFx2A3.js";import"./use-inert-others-b7zpTwIW.js";import"./use-event-listener-Cbxsya7i.js";import"./open-closed-McBZdwWe.js";import"./use-tree-walker-CU1YxDDt.js";import"./active-element-history-BNDqEPaq.js";import"./description-HwKmEHXT.js";import"./label-BrqWDG43.js";const _={title:"Components/Combobox",component:e.Root,parameters:{layout:"centered",docs:{description:{component:"A combobox component with searchable dropdown. Built with Headless UI for accessibility and keyboard navigation. Use compound parts: Root, Control, Input, ClearButton, ToggleButton, Options."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}},tags:["autodocs"]},a=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],t={render:()=>{const[n,s]=l.useState(null);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:a,value:n,onChange:s,placeholder:"Select a fruit...",children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}},r={render:n=>{const[s,i]=l.useState(null);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{...n,options:a,value:s,onChange:i,children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})},args:{placeholder:"Select an option...",disabled:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
  render: args => {
    const [selected, setSelected] = useState<ComboboxOption | null>(null);
    return <div className="w-64">
        <Combobox.Root {...args} options={options} value={selected} onChange={setSelected}>
          <Combobox.Control>
            <Combobox.Input />
            <Combobox.ClearButton />
            <Combobox.ToggleButton />
          </Combobox.Control>
          <Combobox.Options />
        </Combobox.Root>
      </div>;
  },
  args: {
    placeholder: 'Select an option...',
    disabled: false
  }
}`,...r.parameters?.docs?.source}}};const k=["Default","Playground"];export{t as Default,r as Playground,k as __namedExportsOrder,_ as default};
