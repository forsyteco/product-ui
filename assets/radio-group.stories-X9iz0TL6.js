import{r as n,j as t}from"./iframe-Bsx-Ou2Z.js";import{R as s}from"./radio-group-1zNOdmzG.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-6ZyLCJ3R.js";import"./use-by-comparator-AnScbHQ4.js";import"./form-fields-wHP2Je6Z.js";import"./index-BWTGCpOW.js";import"./index-BC68ImjR.js";import"./use-sync-refs-CZbgCkNu.js";import"./hidden-B46LW6GM.js";import"./keyboard-DVExfB0A.js";import"./description-BPvs3qQm.js";import"./label-Bta4yG3N.js";import"./bugs-6tgLNrUu.js";import"./focus-management-B9_YCb-9.js";const C={title:"Components/RadioGroup",component:s,parameters:{layout:"centered",docs:{description:{component:"A radio group component for selecting a single option from a list. Built with Headless UI for accessibility."}}},argTypes:{disabled:{control:{type:"boolean"},description:"Whether the radio group is disabled"}},tags:["autodocs"]},i=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],e={render:()=>{const[r,a]=n.useState(void 0);return t.jsx("div",{className:"w-64",children:t.jsx(s,{options:i,value:r,onChange:a})})}},o={render:r=>{const[a,d]=n.useState(void 0);return t.jsx("div",{className:"w-64",children:t.jsx(s,{...r,options:i,value:a,onChange:d})})},args:{disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const G=["Default","Playground"];export{e as Default,o as Playground,G as __namedExportsOrder,C as default};
