import{j as e}from"./iframe-DRYa70Hz.js";import{D as n,a as r}from"./dropdown-menu-DhbddfSH.js";import{B as p}from"./button-BdH9eN90.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-D9O_Y1yf.js";import"./index-DF1iG1BD.js";import"./index-UFAhJiPj.js";import"./use-resolve-button-type-FOVmfAG8.js";import"./keyboard-CK_xSf2J.js";import"./use-sync-refs-CU_mPfCD.js";import"./floating-DGjeqBmI.js";import"./element-movement-CZVZE-Ww.js";import"./bugs-tWoe4E7Y.js";import"./portal-9ydOya9I.js";import"./focus-management-BD6w-EhD.js";import"./use-inert-others-07dP5vk5.js";import"./use-text-value-BIBMmePj.js";import"./open-closed-CoLgiC6P.js";import"./use-tree-walker-Bb9-U4dc.js";import"./description-BSk9Vxpg.js";import"./label-Bh0BqUdc.js";import"./transition-QnkItDsM.js";import"./use-is-mounted-BQi4v4ri.js";import"./spinner-Cu9-SVLO.js";import"./visually-hidden-CK4IDd46.js";import"./index-cXaQtA9H.js";const R={title:"Components/DropdownMenu",component:n,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},t={render:()=>e.jsxs(n,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},o={render:m=>e.jsxs(n,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const T=["Default","Playground"];export{t as Default,o as Playground,T as __namedExportsOrder,R as default};
