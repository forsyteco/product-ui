import{r as p,j as e}from"./iframe-D3jKVOAj.js";import{A as t}from"./autocomplete-C8sm0m-_.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-B-gBeCsA.js";import"./use-resolve-button-type-CHu-IHbp.js";import"./keyboard-DAnX0onh.js";import"./use-sync-refs-BsLWer34.js";import"./index-DblNVS2F.js";import"./index-DkyIaSV8.js";import"./frozen-CFqWZkSJ.js";import"./form-fields-DU1__Oqn.js";import"./hidden-VRiS1Y6s.js";import"./floating-CzaD3CZv.js";import"./element-movement-BFKRJJPB.js";import"./bugs-BRsUgAr4.js";import"./portal-CZXLTeWu.js";import"./focus-management-DHNzSoTK.js";import"./use-inert-others-DEuSaTbp.js";import"./use-event-listener-D8A8Yli8.js";import"./open-closed-xuvlXUtj.js";import"./use-tree-walker-BlTKSlh5.js";import"./active-element-history-HtFnuMcb.js";import"./description-BI_r7w1n.js";import"./label-h5Z1rYct.js";const F={title:"Components/Autocomplete/Features",component:t.Root,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the autocomplete is disabled"},minQueryLength:{control:{type:"number",min:0,max:5},description:"Minimum characters before showing options"}}},r=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],l={render:()=>{const[o,n]=p.useState(null);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:r,value:o,onChange:n,placeholder:"Search fruits…",children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})}},s={render:()=>{const[o,n]=p.useState(r[1]);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:r,value:o,onChange:n,placeholder:"Search fruits…",children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})}},a={render:()=>e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:r,disabled:!0,placeholder:"Disabled autocomplete",children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})},c={render:()=>{const[o,n]=p.useState(null);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:r,value:o,onChange:n,placeholder:"Search…",loading:!0,children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const M=["Basic","WithInitialValue","Disabled","WithLoading"];export{l as Basic,a as Disabled,s as WithInitialValue,c as WithLoading,M as __namedExportsOrder,F as default};
