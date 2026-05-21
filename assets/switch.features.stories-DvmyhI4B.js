import{r as a,j as e}from"./iframe-BVZI3cAm.js";import{S as t}from"./switch-DOwV-1x4.js";import"./preload-helper-DEha_CyH.js";import"./description-DqZz0v7U.js";import"./use-sync-refs-DEHDpCuG.js";import"./keyboard-DdQSsEm8.js";import"./form-fields-DcaVg01R.js";import"./index--g8NHrJE.js";import"./index-D50RP4Fs.js";import"./hidden-wFq_KQ1j.js";import"./label-BF8fOm5Q.js";import"./use-resolve-button-type-ZlI0dW-N.js";import"./bugs-CkbgC0Uj.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";const v={title:"Components/Switch/Features",component:t,parameters:{layout:"centered"},argTypes:{checked:{control:{type:"boolean"},description:"Whether the switch is checked"},disabled:{control:{type:"boolean"},description:"Whether the switch is disabled"},label:{control:{type:"text"},description:"Label text"},description:{control:{type:"text"},description:"Description text"}}},r={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{label:"Unchecked"}),e.jsx(t,{label:"Checked",checked:!0}),e.jsx(t,{label:"Disabled",disabled:!0}),e.jsx(t,{label:"Disabled Checked",disabled:!0,checked:!0})]})},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{label:"Email notifications",description:"Receive email updates about your account"}),e.jsx(t,{label:"Push notifications",description:"Get notified on your device",checked:!0})]})},s={render:()=>{const[o,i]=a.useState(!1);return e.jsx(t,{label:"Controlled switch",checked:o,onChange:i})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
