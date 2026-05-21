import{j as r}from"./iframe-CxYaNlfa.js";import{S as t}from"./select-BvF1Pksh.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";import"./field-autofill-props-Dh75dEkE.js";const m={title:"Components/Select",component:t,parameters:{layout:"centered",docs:{description:{component:"A select component with error state support. Supports all standard select HTML attributes."}}},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},error:{control:{type:"boolean"},description:"Whether the select has an error"},disabled:{control:{type:"boolean"},description:"Whether the select is disabled"}},tags:["autodocs"]},a=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],e={render:()=>r.jsx("div",{className:"w-64",children:r.jsx(t,{options:a,placeholder:"Select an option..."})})},o={render:s=>r.jsx("div",{className:"w-64",children:r.jsx(t,{...s,options:a})}),args:{placeholder:"Select an option...",error:!1,disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <Select options={options} placeholder="Select an option..." />
    </div>
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-64">
      <Select {...args} options={options} />
    </div>,
  args: {
    placeholder: 'Select an option...',
    error: false,
    disabled: false
  }
}`,...o.parameters?.docs?.source}}};const u=["Default","Playground"];export{e as Default,o as Playground,u as __namedExportsOrder,m as default};
