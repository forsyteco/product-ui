import{j as e,r as n}from"./iframe-CNYYlD36.js";import{C as c}from"./checkbox-BtWd2eKC.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const p={title:"Components/Checkbox/Features",component:c,parameters:{layout:"centered"},argTypes:{label:{control:{type:"text"},description:"Label text for the checkbox"},checked:{control:{type:"boolean"},description:"Whether the checkbox is checked"},disabled:{control:{type:"boolean"},description:"Whether the checkbox is disabled"}}},s={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{label:"I agree to the terms and conditions"}),e.jsx(c,{label:"Subscribe to newsletter"}),e.jsx(c,{label:"Enable notifications"})]})},t={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{label:"Unchecked"}),e.jsx(c,{label:"Checked",checked:!0}),e.jsx(c,{label:"Disabled",disabled:!0}),e.jsx(c,{label:"Disabled Checked",disabled:!0,checked:!0})]})},a={render:()=>{const[r,o]=n.useState(!1);return e.jsx(c,{label:"Controlled checkbox",checked:r,onChange:l=>o(l.target.checked)})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox label="I agree to the terms and conditions" />
      <Checkbox label="Subscribe to newsletter" />
      <Checkbox label="Enable notifications" />
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" checked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled Checked" disabled checked />
    </div>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Checkbox label="Controlled checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />;
  }
}`,...a.parameters?.docs?.source}}};const x=["WithLabel","States","Controlled"];export{a as Controlled,t as States,s as WithLabel,x as __namedExportsOrder,p as default};
