import{r as c,j as n}from"./iframe-CeVB8obd.js";import{S as s}from"./switch-CDCV4_sn.js";import"./preload-helper-DEha_CyH.js";import"./description-Dytnpz6p.js";import"./use-sync-refs-BoOcFdrF.js";import"./keyboard-CPYOBzPz.js";import"./form-fields-DTMhg-rK.js";import"./index-hJDHe0xh.js";import"./index-DxGXflx1.js";import"./hidden-FQEwfQ5P.js";import"./label-C2lNcmET.js";import"./useFocusRing-DGNQ89Xm.js";import"./use-resolve-button-type-B16RnGb9.js";import"./bugs-C2vScuI6.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const E={title:"Components/Switch",component:s,parameters:{layout:"centered",docs:{description:{component:"A switch component for toggling boolean values. Built with Headless UI for accessibility."}}},argTypes:{checked:{control:{type:"boolean"},description:"Whether the switch is checked"},label:{control:{type:"text"},description:"Label text"},description:{control:{type:"text"},description:"Description text"},disabled:{control:{type:"boolean"},description:"Whether the switch is disabled"}},tags:["autodocs"]},t={render:()=>{const[e,o]=c.useState(!1);return n.jsx(s,{label:"Enable notifications",checked:e,onChange:o})}},r={render:e=>{const[o,a]=c.useState(e.checked??!1);return n.jsx(s,{...e,checked:o,onChange:a})},args:{label:"Enable feature",description:"Turn this feature on or off",checked:!1,disabled:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
