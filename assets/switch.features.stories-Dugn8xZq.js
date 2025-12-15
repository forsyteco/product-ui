import{j as e,r as a}from"./iframe-CFsUuUqa.js";import{S as t}from"./switch-BOhc9PtV.js";import"./preload-helper-DEha_CyH.js";import"./description-DJ3YnSma.js";import"./use-sync-refs-DycZJTrw.js";import"./keyboard-BjzAsI1V.js";import"./form-fields-DLFlDeZA.js";import"./index-D26-LCOM.js";import"./index-BsJ9ywC8.js";import"./hidden-CAbe9GgB.js";import"./label-Da47qnUN.js";import"./useFocusRing-BH9yhaj4.js";import"./use-resolve-button-type-DY7jbxIq.js";import"./bugs-QgyXksVi.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const v={title:"Components/Switch/Features",component:t,parameters:{layout:"centered"},argTypes:{checked:{control:{type:"boolean"},description:"Whether the switch is checked"},disabled:{control:{type:"boolean"},description:"Whether the switch is disabled"},label:{control:{type:"text"},description:"Label text"},description:{control:{type:"text"},description:"Description text"}}},r={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{label:"Unchecked"}),e.jsx(t,{label:"Checked",checked:!0}),e.jsx(t,{label:"Disabled",disabled:!0}),e.jsx(t,{label:"Disabled Checked",disabled:!0,checked:!0})]})},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{label:"Email notifications",description:"Receive email updates about your account"}),e.jsx(t,{label:"Push notifications",description:"Get notified on your device",checked:!0})]})},s={render:()=>{const[o,i]=a.useState(!1);return e.jsx(t,{label:"Controlled switch",checked:o,onChange:i})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Switch label="Unchecked" />
      <Switch label="Checked" checked />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled Checked" disabled checked />
    </div>
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Switch label="Email notifications" description="Receive email updates about your account" />
      <Switch label="Push notifications" description="Get notified on your device" checked />
    </div>
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch label="Controlled switch" checked={checked} onChange={setChecked} />;
  }
}`,...s.parameters?.docs?.source}}};const D=["States","WithDescription","Controlled"];export{s as Controlled,r as States,c as WithDescription,D as __namedExportsOrder,v as default};
