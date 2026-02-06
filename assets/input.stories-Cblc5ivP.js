import{I as r}from"./input-rz79fwGt.js";import"./iframe-BZ1wujjQ.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const l={title:"Components/Input",component:r,parameters:{layout:"centered",docs:{description:{component:"An input component with error state support. Supports all standard input HTML attributes and types."}}},argTypes:{type:{control:{type:"select"},options:["text","email","password","number","tel","url"],description:"Input type"},placeholder:{control:{type:"text"},description:"Placeholder text"},error:{control:{type:"boolean"},description:"Whether the input has an error"},disabled:{control:{type:"boolean"},description:"Whether the input is disabled"}},tags:["autodocs"]},e={args:{placeholder:"Enter text..."}},t={args:{type:"text",placeholder:"Enter your text",error:!1,disabled:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Enter your text',
    error: false,
    disabled: false
  }
}`,...t.parameters?.docs?.source}}};const c=["Default","Playground"];export{e as Default,t as Playground,c as __namedExportsOrder,l as default};
