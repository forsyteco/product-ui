import{j as e}from"./iframe-Bsx-Ou2Z.js";import{D as n,a as r}from"./dropdown-menu-DrL7ulHM.js";import{B as p}from"./button-MA4SzPI9.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-6ZyLCJ3R.js";import"./index-BWTGCpOW.js";import"./index-BC68ImjR.js";import"./use-resolve-button-type-BN6DbRrF.js";import"./keyboard-DVExfB0A.js";import"./use-sync-refs-CZbgCkNu.js";import"./floating-By3-1b-P.js";import"./element-movement-DfqFf51M.js";import"./bugs-6tgLNrUu.js";import"./portal-BUwHpf9K.js";import"./focus-management-B9_YCb-9.js";import"./use-inert-others-BDij1H8p.js";import"./use-text-value-BSnV_wyx.js";import"./open-closed-Cv3yQh5L.js";import"./use-tree-walker-CXiEEilb.js";import"./description-BPvs3qQm.js";import"./label-Bta4yG3N.js";import"./transition-gizjJRJu.js";import"./use-is-mounted-YZ2I2u-0.js";import"./index-B8k91cqS.js";const H={title:"Components/DropdownMenu",component:n,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},t={render:()=>e.jsxs(n,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},o={render:m=>e.jsxs(n,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
