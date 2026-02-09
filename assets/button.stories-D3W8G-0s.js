import{B as r}from"./button-Aycko4OB.js";import"./iframe-nrIlHJha.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const d={title:"Components/Button",component:r,parameters:{layout:"centered",docs:{description:{component:"A button component with multiple variants and sizes. Supports all standard button HTML attributes."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","ghost"],description:"Button variant style",table:{type:{summary:"'primary' | 'secondary' | 'outline' | 'ghost'"},defaultValue:{summary:"'primary'"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"}}},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},children:{control:{type:"text"},description:"Button content"}},tags:["autodocs"]},t={args:{children:"Button"}},e={args:{children:"Click me",variant:"primary",size:"md",disabled:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false
  }
}`,...e.parameters?.docs?.source}}};const l=["Default","Playground"];export{t as Default,e as Playground,l as __namedExportsOrder,d as default};
