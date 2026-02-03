import{j as e}from"./iframe-C3NiGLkr.js";import{D as n,a as r}from"./dropdown-menu-CvXc4PlS.js";import{B as p}from"./button-FF05ASSK.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-dM9pZBoI.js";import"./index-DNRP92Qz.js";import"./index-CEhDcc2E.js";import"./use-resolve-button-type-D9YGvU7b.js";import"./keyboard-Dz8OvpXF.js";import"./use-sync-refs-Dd4FYj0e.js";import"./floating-CGoPYLGl.js";import"./element-movement-NZmXZBjR.js";import"./bugs-DeaIigXP.js";import"./portal-C_xsT7ww.js";import"./focus-management-CiKbyxWz.js";import"./use-inert-others-B2o3pG-V.js";import"./use-text-value-fzlANQM8.js";import"./open-closed-Cju07csO.js";import"./use-tree-walker-CLmeBEDV.js";import"./description-te5qwLx3.js";import"./label-DIe7zJQA.js";import"./transition-BxkPTr7F.js";import"./use-is-mounted-DuOVv7Xe.js";import"./index-cXaQtA9H.js";const C={title:"Components/DropdownMenu",component:n,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},t={render:()=>e.jsxs(n,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},o={render:m=>e.jsxs(n,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
