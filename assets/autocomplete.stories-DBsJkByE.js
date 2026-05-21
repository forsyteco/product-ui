import{r as s,j as e}from"./iframe-rkvXkcPn.js";import{A as t}from"./autocomplete-BrpXvYTH.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-B6t3AbO-.js";import"./use-resolve-button-type-Bxr6Vt74.js";import"./keyboard-ByedxuE2.js";import"./use-sync-refs-B6ZSIoRc.js";import"./index-Cq7Zl3Z-.js";import"./index-CETgZHFe.js";import"./frozen-B3w0rFic.js";import"./form-fields-CZ6_35PY.js";import"./hidden-DJhC1tAv.js";import"./floating-Bs9MZ1gB.js";import"./element-movement-C3E_z2a9.js";import"./bugs-BblNTk-s.js";import"./portal-QJFU0dWI.js";import"./focus-management-Bx46CJ0W.js";import"./use-inert-others-mK41CiV3.js";import"./use-event-listener-CtF8xKVk.js";import"./open-closed-BS-lTtUD.js";import"./use-tree-walker-DTcVGXP8.js";import"./active-element-history-Du3UC4QG.js";import"./description-CvLuHXpX.js";import"./label-Da6zJ70M.js";const P={title:"Components/Autocomplete",component:t.Root,parameters:{layout:"centered",docs:{description:{component:"Search-first autocomplete: options open after typing a minimum number of characters. Supports loading state and custom empty messages. Use compound parts: Root, Control, LeadingIcon, Input, ClearButton, Options."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the autocomplete is disabled"},minQueryLength:{control:{type:"number",min:0,max:5},description:"Minimum characters before showing options"}},tags:["autodocs"]},a=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],o={args:{placeholder:"Apple",disabled:!0,minQueryLength:5},render:()=>{const[r,l]=s.useState(null);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:a,value:r,onChange:l,placeholder:"Search fruits…",children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})}},n={render:r=>{const[l,p]=s.useState(null);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{...r,options:a,value:l,onChange:p,children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})},args:{placeholder:"Apple",disabled:!0,minQueryLength:1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Apple",
    disabled: true,
    minQueryLength: 5
  },
  render: () => {
    const [selected, setSelected] = useState<AutocompleteOption | null>(null);
    return <div className="w-72">
        <Autocomplete.Root options={options} value={selected} onChange={setSelected} placeholder="Search fruits…">
          <Autocomplete.Control>
            <Autocomplete.LeadingIcon />
            <Autocomplete.Input />
            <Autocomplete.ClearButton />
          </Autocomplete.Control>
          <Autocomplete.Options />
        </Autocomplete.Root>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState<AutocompleteOption | null>(null);
    return <div className="w-72">
        <Autocomplete.Root {...args} options={options} value={selected} onChange={setSelected}>
          <Autocomplete.Control>
            <Autocomplete.LeadingIcon />
            <Autocomplete.Input />
            <Autocomplete.ClearButton />
          </Autocomplete.Control>
          <Autocomplete.Options />
        </Autocomplete.Root>
      </div>;
  },
  args: {
    placeholder: "Apple",
    disabled: true,
    minQueryLength: 1
  }
}`,...n.parameters?.docs?.source}}};const _=["Default","Playground"];export{o as Default,n as Playground,_ as __namedExportsOrder,P as default};
