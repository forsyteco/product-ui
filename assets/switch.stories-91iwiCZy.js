import{r as c,j as n}from"./iframe-DCut3pB0.js";import{S as s}from"./switch-CS5VDgQb.js";import"./preload-helper-DEha_CyH.js";import"./description-Rd-Cv9GD.js";import"./use-sync-refs-GHuczuXX.js";import"./keyboard-BxH3F2n_.js";import"./form-fields-nwNBguIm.js";import"./index-Cw_6tGoc.js";import"./index-DK0opmzF.js";import"./hidden-CVuXf1xy.js";import"./label-IgrQDxQ7.js";import"./useFocusRing-DTcOx15S.js";import"./use-resolve-button-type-DEn31ueC.js";import"./bugs-re273FY1.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const E={title:"Components/Switch",component:s,parameters:{layout:"centered",docs:{description:{component:"A switch component for toggling boolean values. Built with Headless UI for accessibility."}}},argTypes:{checked:{control:{type:"boolean"},description:"Whether the switch is checked"},label:{control:{type:"text"},description:"Label text"},description:{control:{type:"text"},description:"Description text"},disabled:{control:{type:"boolean"},description:"Whether the switch is disabled"}},tags:["autodocs"]},t={render:()=>{const[e,o]=c.useState(!1);return n.jsx(s,{label:"Enable notifications",checked:e,onChange:o})}},r={render:e=>{const[o,a]=c.useState(e.checked??!1);return n.jsx(s,{...e,checked:o,onChange:a})},args:{label:"Enable feature",description:"Turn this feature on or off",checked:!1,disabled:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
