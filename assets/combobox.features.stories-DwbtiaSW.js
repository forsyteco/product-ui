import{r as i,j as o}from"./iframe-BUQwbYxk.js";import{C as e}from"./combobox-B8OvY-hM.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-CcTGOK4g.js";import"./use-resolve-button-type-BZyZTp_T.js";import"./keyboard-C9-C9yHL.js";import"./use-sync-refs-C8F9OHzU.js";import"./index-D4Fas5oe.js";import"./index-Dxld968B.js";import"./frozen-BeKVmTSu.js";import"./form-fields-2teX4UcT.js";import"./hidden-ne6iZOEs.js";import"./floating-BD-rLd_t.js";import"./element-movement-yqsWRTLw.js";import"./bugs-nRgSPrqW.js";import"./portal-Dh6NMUDP.js";import"./focus-management-D9qINPwd.js";import"./use-inert-others-DSpD9bag.js";import"./use-event-listener-zUnwCVzm.js";import"./open-closed-DNjMWLTC.js";import"./use-tree-walker-Cu8w4iXQ.js";import"./active-element-history-CpQsf6gA.js";import"./description-CNynomeu.js";import"./label-DuXkkxRj.js";const A={title:"Components/Combobox/Features",component:e.Root,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}}},s=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],t={render:()=>{const[l,a]=i.useState(null);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,value:l,onChange:a,placeholder:"Select a fruit...",children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}},r={render:()=>{const[l,a]=i.useState(s[1]);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,value:l,onChange:a,children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}},n={render:()=>o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,disabled:!0,placeholder:"Disabled combobox",children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
