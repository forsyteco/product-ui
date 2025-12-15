import{j as e}from"./iframe-CFsUuUqa.js";import{D as n,a as r}from"./dropdown-menu-C_KddZNs.js";import{B as p}from"./button-DgkIOwa6.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BH9yhaj4.js";import"./index-D26-LCOM.js";import"./index-BsJ9ywC8.js";import"./use-resolve-button-type-DY7jbxIq.js";import"./keyboard-BjzAsI1V.js";import"./use-sync-refs-DycZJTrw.js";import"./floating-D0H9PoA7.js";import"./element-movement-CPeALCLL.js";import"./bugs-QgyXksVi.js";import"./portal-nsyrrPkk.js";import"./focus-management-kaFNE5_8.js";import"./use-inert-others-BjMmLUa1.js";import"./use-text-value-D_tGRDUD.js";import"./open-closed-C5hIdceC.js";import"./use-tree-walker-CZPzHwmU.js";import"./description-DJ3YnSma.js";import"./label-Da47qnUN.js";import"./transition-BRkwPxXr.js";import"./use-is-mounted-ByG5zrcv.js";import"./index-cXaQtA9H.js";const C={title:"Components/DropdownMenu",component:n,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},t={render:()=>e.jsxs(n,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},o={render:m=>e.jsxs(n,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const H=["Default","Playground"];export{t as Default,o as Playground,H as __namedExportsOrder,C as default};
