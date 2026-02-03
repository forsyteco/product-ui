import{r as n,j as t}from"./iframe-DCut3pB0.js";import{R as s}from"./radio-group-DiILBp0J.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DTcOx15S.js";import"./use-by-comparator-DKD567_4.js";import"./form-fields-nwNBguIm.js";import"./index-Cw_6tGoc.js";import"./index-DK0opmzF.js";import"./use-sync-refs-GHuczuXX.js";import"./hidden-CVuXf1xy.js";import"./keyboard-BxH3F2n_.js";import"./description-Rd-Cv9GD.js";import"./label-IgrQDxQ7.js";import"./bugs-re273FY1.js";import"./focus-management-B-XE9RWC.js";const w={title:"Components/RadioGroup",component:s,parameters:{layout:"centered",docs:{description:{component:"A radio group component for selecting a single option from a list. Built with Headless UI for accessibility."}}},argTypes:{disabled:{control:{type:"boolean"},description:"Whether the radio group is disabled"}},tags:["autodocs"]},i=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],e={render:()=>{const[r,a]=n.useState(void 0);return t.jsx("div",{className:"w-64",children:t.jsx(s,{options:i,value:r,onChange:a})})}},o={render:r=>{const[a,d]=n.useState(void 0);return t.jsx("div",{className:"w-64",children:t.jsx(s,{...r,options:i,value:a,onChange:d})})},args:{disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
