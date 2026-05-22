import{B as o}from"./button-CIKQtcpw.js";import"./iframe-FucRrgN0.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./index-B8k91cqS.js";import"./spinner-vgNm4kF8.js";const d={title:"Components/Button",component:o,parameters:{layout:"centered",docs:{description:{component:"A button component with text and icon-only modes. Pass `icon` and `aria-label` for icon-only buttons."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","ghost"],description:"Button variant style",table:{type:{summary:"'primary' | 'secondary' | 'outline' | 'ghost'"},defaultValue:{summary:"'primary'"}}},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"}}},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"},children:{control:{type:"text"},description:"Button content"}},tags:["autodocs"]},t={args:{children:"Button"}},e={args:{children:"Click me",variant:"primary",size:"md",disabled:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
