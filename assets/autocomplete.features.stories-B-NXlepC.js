import{r as p,j as e}from"./iframe-DRYa70Hz.js";import{A as t}from"./autocomplete-Cend6bui.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-D1hZbWsv.js";import"./useFocusRing-D9O_Y1yf.js";import"./index-DF1iG1BD.js";import"./index-UFAhJiPj.js";import"./use-resolve-button-type-FOVmfAG8.js";import"./keyboard-CK_xSf2J.js";import"./use-sync-refs-CU_mPfCD.js";import"./use-by-comparator-BBUVKAcE.js";import"./form-fields-RnnO1LBY.js";import"./hidden-poPa3not.js";import"./floating-DGjeqBmI.js";import"./element-movement-CZVZE-Ww.js";import"./bugs-tWoe4E7Y.js";import"./portal-9ydOya9I.js";import"./focus-management-BD6w-EhD.js";import"./use-inert-others-07dP5vk5.js";import"./use-event-listener-B0FvXrtf.js";import"./open-closed-CoLgiC6P.js";import"./use-tree-walker-Bb9-U4dc.js";import"./active-element-history-EqQSy9CE.js";import"./description-BSk9Vxpg.js";import"./frozen-CkB4CpuY.js";import"./label-Bh0BqUdc.js";const M={title:"Components/Autocomplete/Features",component:t.Root,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the autocomplete is disabled"},minQueryLength:{control:{type:"number",min:0,max:5},description:"Minimum characters before showing options"}}},r=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],l={render:()=>{const[o,n]=p.useState(null);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:r,value:o,onChange:n,placeholder:"Search fruits…",children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})}},s={render:()=>{const[o,n]=p.useState(r[1]);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:r,value:o,onChange:n,placeholder:"Search fruits…",children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})}},a={render:()=>e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:r,disabled:!0,placeholder:"Disabled autocomplete",children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})},c={render:()=>{const[o,n]=p.useState(null);return e.jsx("div",{className:"w-72",children:e.jsxs(t.Root,{options:r,value:o,onChange:n,placeholder:"Search…",loading:!0,children:[e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
