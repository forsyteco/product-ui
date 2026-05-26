import{j as e}from"./iframe-DB_8LERs.js";import{D as n,a as r}from"./dropdown-menu-KVSa8lIB.js";import{B as p}from"./button-vlU5xtrA.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-BN55sZyI.js";import"./keyboard-Cg7wVIGU.js";import"./use-sync-refs-Bj63Ftjs.js";import"./index-Ttl_GQoe.js";import"./index-bUy05opc.js";import"./floating-BNmG-KQQ.js";import"./bugs-BEdUOfH9.js";import"./use-inert-others-B4vXUOtL.js";import"./portal-B6vRqhM6.js";import"./focus-management-J3wIshax.js";import"./open-closed-B_WZ0Ptj.js";import"./description-BJEpHxQD.js";import"./label-Cm1qdzgx.js";import"./transition-X2I_VvM6.js";import"./use-is-mounted-DcWOo35A.js";import"./index-B8k91cqS.js";import"./spinner-DLtEokUl.js";const P={title:"Components/DropdownMenu",component:n,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},t={render:()=>e.jsxs(n,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},o={render:m=>e.jsxs(n,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
