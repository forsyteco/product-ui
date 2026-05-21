import{r as i,j as o}from"./iframe-rkvXkcPn.js";import{C as e}from"./combobox-DNxZFaSh.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-B6t3AbO-.js";import"./use-resolve-button-type-Bxr6Vt74.js";import"./keyboard-ByedxuE2.js";import"./use-sync-refs-B6ZSIoRc.js";import"./index-Cq7Zl3Z-.js";import"./index-CETgZHFe.js";import"./frozen-B3w0rFic.js";import"./form-fields-CZ6_35PY.js";import"./hidden-DJhC1tAv.js";import"./floating-Bs9MZ1gB.js";import"./element-movement-C3E_z2a9.js";import"./bugs-BblNTk-s.js";import"./portal-QJFU0dWI.js";import"./focus-management-Bx46CJ0W.js";import"./use-inert-others-mK41CiV3.js";import"./use-event-listener-CtF8xKVk.js";import"./open-closed-BS-lTtUD.js";import"./use-tree-walker-DTcVGXP8.js";import"./active-element-history-Du3UC4QG.js";import"./description-CvLuHXpX.js";import"./label-Da6zJ70M.js";const _={title:"Components/Combobox/Features",component:e.Root,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}}},s=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],t={render:()=>{const[l,a]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,value:l,onChange:a,placeholder:"Select a fruit...",children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}},r={render:()=>{const[l,a]=i.useState(s[1]);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,value:l,onChange:a,children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}},n={render:()=>o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,disabled:!0,placeholder:"Disabled combobox",children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const A=["Basic","WithInitialValue","Disabled"];export{t as Basic,n as Disabled,r as WithInitialValue,A as __namedExportsOrder,_ as default};
