import{r as s,j as e}from"./iframe-OIbwSsUo.js";import{A as t}from"./autocomplete-BFqnEi6h.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-Chyd6BXH.js";import"./useFocusRing-CHwNI2-q.js";import"./index-CL3mEXst.js";import"./index-Bl-Jaq4B.js";import"./use-resolve-button-type-osKJOTL_.js";import"./keyboard-CTolmV5o.js";import"./use-sync-refs-0qmI2Jj2.js";import"./use-by-comparator-DTIc1K3p.js";import"./form-fields-BSBAvoSg.js";import"./hidden-CZyt3MTM.js";import"./floating-DNM8ErJa.js";import"./element-movement-DJV5vrOp.js";import"./bugs-B5yy6nX2.js";import"./portal-CNpYkWm3.js";import"./focus-management-CYdr1o3c.js";import"./use-inert-others-iYuBuXXz.js";import"./use-event-listener-C_GM-C6i.js";import"./open-closed-DWvAJZV2.js";import"./use-tree-walker-C-uxXtON.js";import"./active-element-history-BqPBdwRI.js";import"./description-Bwip7YUp.js";import"./frozen-C-jlZTgd.js";import"./label-BicDlr5-.js";const M={title:"Components/Autocomplete",component:t.Root,parameters:{layout:"centered",docs:{description:{component:"Search-first autocomplete: options open after typing a minimum number of characters. Supports loading state and custom empty messages. Use compound parts: Root, Control, LeadingIcon, Input, ClearButton, Options."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the autocomplete is disabled"},minQueryLength:{control:{type:"number",min:0,max:5},description:"Minimum characters before showing options"}},tags:["autodocs"]},a=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],o={args:{placeholder:"Apple",disabled:!0,minQueryLength:5},render:()=>{const[r,l]=s.useState(null);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:a,value:r,onChange:l,placeholder:"Search fruits…",children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})}},n={render:r=>{const[l,p]=s.useState(null);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{...r,options:a,value:l,onChange:p,children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})},args:{placeholder:"Apple",disabled:!0,minQueryLength:1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const T=["Default","Playground"];export{o as Default,n as Playground,T as __namedExportsOrder,M as default};
