import{j as e}from"./iframe-CGF0_A5u.js";import{D as n,a as r}from"./dropdown-menu-DV7ShohW.js";import{B as p}from"./button-BQZjnb19.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-CoMikh-_.js";import"./keyboard-D86mmLzy.js";import"./use-sync-refs-BQJai7yY.js";import"./index-BF50FvRs.js";import"./index-D85rYT82.js";import"./floating-BBRF2GKr.js";import"./element-movement-BHB6z7Gj.js";import"./bugs-CmMcbd0d.js";import"./portal-CIPjWJEZ.js";import"./focus-management-DtCYyGj7.js";import"./use-inert-others-Bs_h4dt8.js";import"./use-text-value-BgIO7al6.js";import"./open-closed-VIqDAeBc.js";import"./use-tree-walker-CJwZbYoL.js";import"./description-Cg8HyQS4.js";import"./label-CK0kZ04v.js";import"./transition-DSDAgwnG.js";import"./use-is-mounted-B3msSAla.js";import"./spinner-MP4NfyXZ.js";import"./index-B8k91cqS.js";const H={title:"Components/DropdownMenu",component:n,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},t={render:()=>e.jsxs(n,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},o={render:m=>e.jsxs(n,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
