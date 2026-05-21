import{r as s,j as e}from"./iframe-AG0x1wfB.js";import{A as t}from"./autocomplete-D0V23uYy.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./use-resolve-button-type-D8j7BuG8.js";import"./keyboard-D-t6G-JT.js";import"./use-sync-refs-nAJ1J7Wk.js";import"./index-Cm_AQNJq.js";import"./index-BcX7eClP.js";import"./form-fields-dEAtcqP0.js";import"./hidden-CBZsKL6R.js";import"./floating-B8SBCkyl.js";import"./element-movement-C3Z93GdS.js";import"./bugs-DFcXVQhQ.js";import"./portal-BGdceubv.js";import"./focus-management-BZBMqyM0.js";import"./use-inert-others-nqQ4FKz-.js";import"./use-event-listener-YWdgBPdn.js";import"./open-closed-BJ2TncLm.js";import"./active-element-history-CQ1kL77q.js";import"./description-BJ1KNmao.js";import"./label-vqHRH5MG.js";const N={title:"Components/Autocomplete",component:t.Root,parameters:{layout:"centered",docs:{description:{component:"Search-first autocomplete: options open after typing a minimum number of characters. Supports loading state and custom empty messages. Use compound parts: Root, Control, LeadingIcon, Input, ClearButton, Options."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the autocomplete is disabled"},minQueryLength:{control:{type:"number",min:0,max:5},description:"Minimum characters before showing options"}},tags:["autodocs"]},a=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],o={args:{placeholder:"Apple",disabled:!0,minQueryLength:5},render:()=>{const[r,l]=s.useState(null);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:a,value:r,onChange:l,placeholder:"Search fruits…",children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})}},n={render:r=>{const[l,p]=s.useState(null);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{...r,options:a,value:l,onChange:p,children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})},args:{placeholder:"Apple",disabled:!0,minQueryLength:1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const D=["Default","Playground"];export{o as Default,n as Playground,D as __namedExportsOrder,N as default};
