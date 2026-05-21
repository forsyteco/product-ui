import{r as n,j as t}from"./iframe-CxYaNlfa.js";import{R as s}from"./radio-group-v_2xrRPQ.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BD5DFmH8.js";import"./use-by-comparator-BGB3Ye8U.js";import"./form-fields-CRM6SxwB.js";import"./index-C20LchO5.js";import"./index-BjqpgS9N.js";import"./use-sync-refs-CzTZ0nVq.js";import"./hidden-D0DTjsv9.js";import"./keyboard-B83W2K4O.js";import"./description-C8AuhUpm.js";import"./label-DQ-YvZ8u.js";import"./bugs-B1TOvFeJ.js";import"./focus-management-ClluBnCx.js";const w={title:"Components/RadioGroup",component:s,parameters:{layout:"centered",docs:{description:{component:"A radio group component for selecting a single option from a list. Built with Headless UI for accessibility."}}},argTypes:{disabled:{control:{type:"boolean"},description:"Whether the radio group is disabled"}},tags:["autodocs"]},i=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],e={render:()=>{const[r,a]=n.useState(void 0);return t.jsx("div",{className:"w-64",children:t.jsx(s,{options:i,value:r,onChange:a})})}},o={render:r=>{const[a,d]=n.useState(void 0);return t.jsx("div",{className:"w-64",children:t.jsx(s,{...r,options:i,value:a,onChange:d})})},args:{disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <div className="w-64">
        <RadioGroup options={options} value={value} onChange={setValue} />
      </div>;
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <div className="w-64">
        <RadioGroup {...args} options={options} value={value} onChange={setValue} />
      </div>;
  },
  args: {
    disabled: false
  }
}`,...o.parameters?.docs?.source}}};const C=["Default","Playground"];export{e as Default,o as Playground,C as __namedExportsOrder,w as default};
