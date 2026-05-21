import{r as l,j as o}from"./iframe-2gSw_mv2.js";import{C as e}from"./combobox-cQKL6JIg.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-CWXX-0PN.js";import"./use-resolve-button-type-BJkWDc_4.js";import"./keyboard-BaAOKfHq.js";import"./use-sync-refs-DmqRrsUT.js";import"./index-CfTXRGMP.js";import"./index-DkkTbRiJ.js";import"./frozen-VyUt3tJ3.js";import"./form-fields-BGfwIb9P.js";import"./hidden-CNfTMTAC.js";import"./floating-C3szj9N5.js";import"./element-movement-C7gX0vvO.js";import"./bugs-CQkR_j0_.js";import"./portal-Bro9fcSW.js";import"./focus-management-COn_JIX_.js";import"./use-inert-others-CkKm98KO.js";import"./use-event-listener-DGw3SnZo.js";import"./open-closed-BO3DqZNu.js";import"./use-tree-walker-C36I32p-.js";import"./active-element-history-DgWg7P9d.js";import"./description-BdFui_Rt.js";import"./label-DHV5xTYx.js";const _={title:"Components/Combobox",component:e.Root,parameters:{layout:"centered",docs:{description:{component:"A combobox component with searchable dropdown. Built with Headless UI for accessibility and keyboard navigation. Use compound parts: Root, Control, Input, ClearButton, ToggleButton, Options."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}},tags:["autodocs"]},a=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],t={render:()=>{const[n,s]=l.useState(null);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:a,value:n,onChange:s,placeholder:"Select a fruit...",children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}},r={render:n=>{const[s,i]=l.useState(null);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{...n,options:a,value:s,onChange:i,children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})},args:{placeholder:"Select an option...",disabled:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
