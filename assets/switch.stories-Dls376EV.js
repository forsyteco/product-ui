import{r as c,j as n}from"./iframe-CNYYlD36.js";import{S as s}from"./switch-BI6TILM8.js";import"./preload-helper-DEha_CyH.js";import"./description-D1PW4E0C.js";import"./use-sync-refs-DZgQMG1Q.js";import"./keyboard-DtISN8rn.js";import"./form-fields-BE6Jb6rq.js";import"./index-DYwh5NA3.js";import"./index-D4rEHvpE.js";import"./hidden-K7cnV1wF.js";import"./label-DgKDHCQR.js";import"./useFocusRing-C4fSfmyf.js";import"./use-resolve-button-type-C9PyahDA.js";import"./bugs-SeIKBOFb.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const E={title:"Components/Switch",component:s,parameters:{layout:"centered",docs:{description:{component:"A switch component for toggling boolean values. Built with Headless UI for accessibility."}}},argTypes:{checked:{control:{type:"boolean"},description:"Whether the switch is checked"},label:{control:{type:"text"},description:"Label text"},description:{control:{type:"text"},description:"Description text"},disabled:{control:{type:"boolean"},description:"Whether the switch is disabled"}},tags:["autodocs"]},t={render:()=>{const[e,o]=c.useState(!1);return n.jsx(s,{label:"Enable notifications",checked:e,onChange:o})}},r={render:e=>{const[o,a]=c.useState(e.checked??!1);return n.jsx(s,{...e,checked:o,onChange:a})},args:{label:"Enable feature",description:"Turn this feature on or off",checked:!1,disabled:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
