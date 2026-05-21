import{r as p,j as e}from"./iframe-B_2llF5Y.js";import{A as t}from"./autocomplete-DEZsLitm.js";import"./preload-helper-DEha_CyH.js";import"./clsx-B-dksMZM.js";import"./icons-DgnY1Mue.js";import"./input-shell-YTGH2IZD.js";import"./index-B8k91cqS.js";import"./field-control-shell.module-DNRc52zd.js";import"./useAnchoredPopupScrollLock-DZ6uyEFc.js";import"./index-DWBCX9CX.js";import"./index-DMaG-6Cr.js";import"./index-CORXN6_2.js";import"./clear-icon-sgW-4FTL.js";import"./combobox.module-IUDLw-WH.js";import"./field-autofill-props-Dh75dEkE.js";const O={title:"Components/Autocomplete/Features",component:t.Root,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the autocomplete is disabled"},minQueryLength:{control:{type:"number",min:0,max:5},description:"Minimum characters before showing options"}}},l=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],r={render:()=>{const[o,n]=p.useState(null);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:l,value:o,onChange:n,placeholder:"Search fruits…",children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})}},s={render:()=>{const[o,n]=p.useState(l[1]);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:l,value:o,onChange:n,placeholder:"Search fruits…",children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})}},a={render:()=>e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:l,disabled:!0,placeholder:"Disabled autocomplete",children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})},c={render:()=>{const[o,n]=p.useState(null);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:l,value:o,onChange:n,placeholder:"Search…",loading:!0,children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<AutocompleteOption | null>(options[1]);
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
      <Autocomplete.Root options={options} disabled placeholder="Disabled autocomplete">
        <Autocomplete.Control>
          <Autocomplete.LeadingIcon />
          <Autocomplete.Input />
          <Autocomplete.ClearButton />
        </Autocomplete.Control>
        <Autocomplete.Options />
      </Autocomplete.Root>
    </div>
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<AutocompleteOption | null>(null);
    return <div className="w-72">
        <Autocomplete.Root options={options} value={selected} onChange={setSelected} placeholder="Search…" loading>
          <Autocomplete.Control>
            <Autocomplete.LeadingIcon />
            <Autocomplete.Input />
            <Autocomplete.ClearButton />
          </Autocomplete.Control>
          <Autocomplete.Options />
        </Autocomplete.Root>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const B=["Basic","WithInitialValue","Disabled","WithLoading"];export{r as Basic,a as Disabled,s as WithInitialValue,c as WithLoading,B as __namedExportsOrder,O as default};
