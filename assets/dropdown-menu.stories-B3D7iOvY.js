import{j as e}from"./iframe-CNYYlD36.js";import{D as n,a as r}from"./dropdown-menu-pb9FF72M.js";import{B as p}from"./button-Bn0tC0DV.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-C4fSfmyf.js";import"./index-DYwh5NA3.js";import"./index-D4rEHvpE.js";import"./use-resolve-button-type-C9PyahDA.js";import"./keyboard-DtISN8rn.js";import"./use-sync-refs-DZgQMG1Q.js";import"./floating-DCZWDNJE.js";import"./element-movement-BlCQH2Fn.js";import"./bugs-SeIKBOFb.js";import"./portal-_z1lZ7UR.js";import"./focus-management-DeCdYFst.js";import"./use-inert-others-Dq6Q-G8N.js";import"./use-text-value-AWhdhCcv.js";import"./open-closed-By9Rj1dh.js";import"./use-tree-walker-DvucGxYg.js";import"./description-D1PW4E0C.js";import"./label-DgKDHCQR.js";import"./transition-BXx9RqTX.js";import"./use-is-mounted-DeNyIpkm.js";import"./index-cXaQtA9H.js";const C={title:"Components/DropdownMenu",component:n,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},t={render:()=>e.jsxs(n,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},o={render:m=>e.jsxs(n,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
