import{r as i,j as o}from"./iframe-CeVB8obd.js";import{C as e}from"./combobox-Cxzl0y87.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./combobox-Dd7MZ-dg.js";import"./useFocusRing-DGNQ89Xm.js";import"./index-hJDHe0xh.js";import"./index-DxGXflx1.js";import"./use-resolve-button-type-B16RnGb9.js";import"./keyboard-CPYOBzPz.js";import"./use-sync-refs-BoOcFdrF.js";import"./use-by-comparator-ChEKavq1.js";import"./form-fields-DTMhg-rK.js";import"./hidden-FQEwfQ5P.js";import"./floating-y6vRCQA6.js";import"./element-movement-DhCVsZtz.js";import"./bugs-C2vScuI6.js";import"./portal-1sZo8vyw.js";import"./focus-management-D4oSQtTM.js";import"./use-inert-others-C-7PjipA.js";import"./use-event-listener-COO1fxLF.js";import"./open-closed-Bv7w2Ee9.js";import"./use-tree-walker-BoarXsQV.js";import"./active-element-history-CQ4rnwuf.js";import"./description-Dytnpz6p.js";import"./frozen-B7IsPTJh.js";import"./label-C2lNcmET.js";const A={title:"Components/Combobox/Features",component:e.Root,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}}},s=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],t={render:()=>{const[l,a]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,value:l,onChange:a,placeholder:"Select a fruit...",children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}},r={render:()=>{const[l,a]=i.useState(s[1]);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,value:l,onChange:a,children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}},n={render:()=>o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,disabled:!0,placeholder:"Disabled combobox",children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(options[1]);
    return <div className="w-64">
        <Combobox.Root options={options} value={selected} onChange={setSelected}>
          <Combobox.Control>
            <Combobox.Input />
            <Combobox.ClearButton />
            <Combobox.ToggleButton />
          </Combobox.Control>
          <Combobox.Options />
        </Combobox.Root>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <Combobox.Root options={options} disabled placeholder="Disabled combobox">
        <Combobox.Control>
          <Combobox.Input />
          <Combobox.ClearButton />
          <Combobox.ToggleButton />
        </Combobox.Control>
        <Combobox.Options />
      </Combobox.Root>
    </div>
}`,...n.parameters?.docs?.source}}};const F=["Basic","WithInitialValue","Disabled"];export{t as Basic,n as Disabled,r as WithInitialValue,F as __namedExportsOrder,A as default};
