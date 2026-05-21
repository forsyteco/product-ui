import{r as c,j as n}from"./iframe-CGF0_A5u.js";import{S as s}from"./switch-U5J1Hv-q.js";import"./preload-helper-DEha_CyH.js";import"./description-Cg8HyQS4.js";import"./use-sync-refs-BQJai7yY.js";import"./keyboard-D86mmLzy.js";import"./form-fields-DW6HVtwJ.js";import"./index-BF50FvRs.js";import"./index-D85rYT82.js";import"./hidden--9eMrDrq.js";import"./label-CK0kZ04v.js";import"./use-resolve-button-type-CoMikh-_.js";import"./bugs-CmMcbd0d.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";const E={title:"Components/Switch",component:s,parameters:{layout:"centered",docs:{description:{component:"A switch component for toggling boolean values. Built with Headless UI for accessibility."}}},argTypes:{checked:{control:{type:"boolean"},description:"Whether the switch is checked"},label:{control:{type:"text"},description:"Label text"},description:{control:{type:"text"},description:"Description text"},disabled:{control:{type:"boolean"},description:"Whether the switch is disabled"}},tags:["autodocs"]},t={render:()=>{const[e,o]=c.useState(!1);return n.jsx(s,{label:"Enable notifications",checked:e,onChange:o})}},r={render:e=>{const[o,a]=c.useState(e.checked??!1);return n.jsx(s,{...e,checked:o,onChange:a})},args:{label:"Enable feature",description:"Turn this feature on or off",checked:!1,disabled:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch label="Enable notifications" checked={checked} onChange={setChecked} />;
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(args.checked ?? false);
    return <Switch {...args} checked={checked} onChange={setChecked} />;
  },
  args: {
    label: 'Enable feature',
    description: 'Turn this feature on or off',
    checked: false,
    disabled: false
  }
}`,...r.parameters?.docs?.source}}};const j=["Default","Playground"];export{t as Default,r as Playground,j as __namedExportsOrder,E as default};
