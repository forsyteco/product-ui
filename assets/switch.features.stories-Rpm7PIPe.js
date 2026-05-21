import{r as a,j as e}from"./iframe-CGF0_A5u.js";import{S as t}from"./switch-U5J1Hv-q.js";import"./preload-helper-DEha_CyH.js";import"./description-Cg8HyQS4.js";import"./use-sync-refs-BQJai7yY.js";import"./keyboard-D86mmLzy.js";import"./form-fields-DW6HVtwJ.js";import"./index-BF50FvRs.js";import"./index-D85rYT82.js";import"./hidden--9eMrDrq.js";import"./label-CK0kZ04v.js";import"./use-resolve-button-type-CoMikh-_.js";import"./bugs-CmMcbd0d.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";const v={title:"Components/Switch/Features",component:t,parameters:{layout:"centered"},argTypes:{checked:{control:{type:"boolean"},description:"Whether the switch is checked"},disabled:{control:{type:"boolean"},description:"Whether the switch is disabled"},label:{control:{type:"text"},description:"Label text"},description:{control:{type:"text"},description:"Description text"}}},r={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{label:"Unchecked"}),e.jsx(t,{label:"Checked",checked:!0}),e.jsx(t,{label:"Disabled",disabled:!0}),e.jsx(t,{label:"Disabled Checked",disabled:!0,checked:!0})]})},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{label:"Email notifications",description:"Receive email updates about your account"}),e.jsx(t,{label:"Push notifications",description:"Get notified on your device",checked:!0})]})},s={render:()=>{const[o,i]=a.useState(!1);return e.jsx(t,{label:"Controlled switch",checked:o,onChange:i})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
