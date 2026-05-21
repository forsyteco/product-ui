import{r as l,j as o}from"./iframe-B_2llF5Y.js";import{C as e}from"./combobox-CjYZT5UX.js";import"./preload-helper-DEha_CyH.js";import"./clsx-B-dksMZM.js";import"./input-shell-YTGH2IZD.js";import"./index-B8k91cqS.js";import"./field-control-shell.module-DNRc52zd.js";import"./useAnchoredPopupScrollLock-DZ6uyEFc.js";import"./index-DWBCX9CX.js";import"./index-DMaG-6Cr.js";import"./index-CORXN6_2.js";import"./clear-icon-sgW-4FTL.js";import"./combobox.module-IUDLw-WH.js";import"./chevron-icon-BkiPKrJS.js";import"./field-autofill-props-Dh75dEkE.js";const f={title:"Components/Combobox",component:e.Root,parameters:{layout:"centered",docs:{description:{component:"A combobox component with searchable dropdown. Built with Headless UI for accessibility and keyboard navigation. Use compound parts: Root, Control, Input, ClearButton, ToggleButton, Options."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}},tags:["autodocs"]},a=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],t={render:()=>{const[n,s]=l.useState(null);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:a,value:n,onChange:s,placeholder:"Select a fruit...",children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}},r={render:n=>{const[s,d]=l.useState(null);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{...n,options:a,value:s,onChange:d,children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})},args:{placeholder:"Select an option...",disabled:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const R=["Default","Playground"];export{t as Default,r as Playground,R as __namedExportsOrder,f as default};
