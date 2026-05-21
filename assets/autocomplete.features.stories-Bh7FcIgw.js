import{r as p,j as e}from"./iframe-OIbwSsUo.js";import{A as t}from"./autocomplete-BFqnEi6h.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-Chyd6BXH.js";import"./useFocusRing-CHwNI2-q.js";import"./index-CL3mEXst.js";import"./index-Bl-Jaq4B.js";import"./use-resolve-button-type-osKJOTL_.js";import"./keyboard-CTolmV5o.js";import"./use-sync-refs-0qmI2Jj2.js";import"./use-by-comparator-DTIc1K3p.js";import"./form-fields-BSBAvoSg.js";import"./hidden-CZyt3MTM.js";import"./floating-DNM8ErJa.js";import"./element-movement-DJV5vrOp.js";import"./bugs-B5yy6nX2.js";import"./portal-CNpYkWm3.js";import"./focus-management-CYdr1o3c.js";import"./use-inert-others-iYuBuXXz.js";import"./use-event-listener-C_GM-C6i.js";import"./open-closed-DWvAJZV2.js";import"./use-tree-walker-C-uxXtON.js";import"./active-element-history-BqPBdwRI.js";import"./description-Bwip7YUp.js";import"./frozen-C-jlZTgd.js";import"./label-BicDlr5-.js";const M={title:"Components/Autocomplete/Features",component:t.Root,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the autocomplete is disabled"},minQueryLength:{control:{type:"number",min:0,max:5},description:"Minimum characters before showing options"}}},r=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],l={render:()=>{const[o,n]=p.useState(null);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:r,value:o,onChange:n,placeholder:"Search fruits…",children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})}},s={render:()=>{const[o,n]=p.useState(r[1]);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:r,value:o,onChange:n,placeholder:"Search fruits…",children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})}},a={render:()=>e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:r,disabled:!0,placeholder:"Disabled autocomplete",children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})},c={render:()=>{const[o,n]=p.useState(null);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:r,value:o,onChange:n,placeholder:"Search…",loading:!0,children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const P=["Basic","WithInitialValue","Disabled","WithLoading"];export{l as Basic,a as Disabled,s as WithInitialValue,c as WithLoading,P as __namedExportsOrder,M as default};
