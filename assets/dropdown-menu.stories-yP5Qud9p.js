import{j as e}from"./iframe-BX-ROWNI.js";import{D as n,a as r}from"./dropdown-menu-BhUpmxOz.js";import{B as p}from"./button-J79MQA9b.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-38vbuAiE.js";import"./keyboard-CCfXnbEr.js";import"./use-sync-refs-DTg_pgWq.js";import"./index-6YZsdqky.js";import"./index-Cu-QQxcH.js";import"./floating-BT1BL60C.js";import"./element-movement-B5L5FeYV.js";import"./bugs-BGC4SnX6.js";import"./portal-CJIo8SlY.js";import"./focus-management-plLOIbVD.js";import"./use-inert-others-D22FfipB.js";import"./use-text-value-BKp46TB5.js";import"./open-closed-C_k6EVRc.js";import"./use-tree-walker-BAUXv4rD.js";import"./description-CdOWzJj9.js";import"./label-0iOr3fT0.js";import"./transition-DiqDp7Tq.js";import"./use-is-mounted-BJZelx3H.js";import"./spinner-U037JlYe.js";import"./index-B8k91cqS.js";const H={title:"Components/DropdownMenu",component:n,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},t={render:()=>e.jsxs(n,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},o={render:m=>e.jsxs(n,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const R=["Default","Playground"];export{t as Default,o as Playground,R as __namedExportsOrder,H as default};
