import{r as c,j as n}from"./iframe-Bsx-Ou2Z.js";import{S as s}from"./switch-DxOgkFCD.js";import"./preload-helper-DEha_CyH.js";import"./description-BPvs3qQm.js";import"./use-sync-refs-CZbgCkNu.js";import"./keyboard-DVExfB0A.js";import"./form-fields-wHP2Je6Z.js";import"./index-BWTGCpOW.js";import"./index-BC68ImjR.js";import"./hidden-B46LW6GM.js";import"./label-Bta4yG3N.js";import"./useFocusRing-6ZyLCJ3R.js";import"./use-resolve-button-type-BN6DbRrF.js";import"./bugs-6tgLNrUu.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";const j={title:"Components/Switch",component:s,parameters:{layout:"centered",docs:{description:{component:"A switch component for toggling boolean values. Built with Headless UI for accessibility."}}},argTypes:{checked:{control:{type:"boolean"},description:"Whether the switch is checked"},label:{control:{type:"text"},description:"Label text"},description:{control:{type:"text"},description:"Description text"},disabled:{control:{type:"boolean"},description:"Whether the switch is disabled"}},tags:["autodocs"]},t={render:()=>{const[e,o]=c.useState(!1);return n.jsx(s,{label:"Enable notifications",checked:e,onChange:o})}},r={render:e=>{const[o,a]=c.useState(e.checked??!1);return n.jsx(s,{...e,checked:o,onChange:a})},args:{label:"Enable feature",description:"Turn this feature on or off",checked:!1,disabled:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const D=["Default","Playground"];export{t as Default,r as Playground,D as __namedExportsOrder,j as default};
