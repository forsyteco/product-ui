import{j as e}from"./iframe-FucRrgN0.js";import{D as n,a as r}from"./dropdown-menu-BSVs29sD.js";import{B as p}from"./button-CIKQtcpw.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-Xj4VFEXf.js";import"./keyboard-Y4nRcYzq.js";import"./use-sync-refs-D2lrUS40.js";import"./index-BcyfDNeB.js";import"./index-OS4KfO0X.js";import"./floating-cADQ2Wot.js";import"./bugs-WlrmLyOi.js";import"./use-inert-others-CW9rMuAv.js";import"./portal-DQFslJMw.js";import"./focus-management-CfKz0vUK.js";import"./open-closed-Bs6DzGTE.js";import"./description-DMKvSMs0.js";import"./label-DZhFJIIu.js";import"./transition-CzoYTx9J.js";import"./use-is-mounted-CggrnpIl.js";import"./index-B8k91cqS.js";import"./spinner-vgNm4kF8.js";const P={title:"Components/DropdownMenu",component:n,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},t={render:()=>e.jsxs(n,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},o={render:m=>e.jsxs(n,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu trigger={<Button>Open Menu</Button>}>
      <DropdownMenuItem>Item 1</DropdownMenuItem>
      <DropdownMenuItem>Item 2</DropdownMenuItem>
      <DropdownMenuItem>Item 3</DropdownMenuItem>
    </DropdownMenu>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <DropdownMenu {...args} trigger={<Button>Open Menu</Button>}>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Duplicate</DropdownMenuItem>
      <DropdownMenuItem disabled>Delete</DropdownMenuItem>
    </DropdownMenu>,
  args: {
    align: 'right'
  }
}`,...o.parameters?.docs?.source}}};const _=["Default","Playground"];export{t as Default,o as Playground,_ as __namedExportsOrder,P as default};
