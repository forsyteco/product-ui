import{j as e}from"./iframe-BZ1wujjQ.js";import{D as n,a as r}from"./dropdown-menu-QZ_qey3T.js";import{B as p}from"./button-LJhTR5u8.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BfnhhEST.js";import"./index-W2FIh6FJ.js";import"./index-imFVSO3i.js";import"./use-resolve-button-type-BdBbSlJ2.js";import"./keyboard-Ce2CPQ3X.js";import"./use-sync-refs-DKphwUq6.js";import"./floating-DJeorzdf.js";import"./element-movement-BFShz-nT.js";import"./bugs-CWise-ep.js";import"./portal-EQenjn8w.js";import"./focus-management-DzM3vxoc.js";import"./use-inert-others-D7PEgJFU.js";import"./use-text-value-2uJ_D3Gg.js";import"./open-closed-DMtSAjel.js";import"./use-tree-walker-BngRelFW.js";import"./description-CTKD1BlB.js";import"./label-DjUSKMEb.js";import"./transition-0J3O6CrR.js";import"./use-is-mounted-xpTVFGMB.js";import"./index-cXaQtA9H.js";const C={title:"Components/DropdownMenu",component:n,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},t={render:()=>e.jsxs(n,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},o={render:m=>e.jsxs(n,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
