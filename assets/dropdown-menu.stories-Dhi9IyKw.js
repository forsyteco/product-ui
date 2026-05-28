import{j as e}from"./iframe-BhlZj2rS.js";import{D as n,a as r}from"./dropdown-menu-sySg_R68.js";import{B as p}from"./button-BM_dnC24.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-DjO1Pm5h.js";import"./keyboard-Dpdv_eif.js";import"./use-sync-refs-UgM7LPID.js";import"./index-C03jWAjy.js";import"./index-BJjS-fqn.js";import"./floating-CxCsyGBc.js";import"./bugs--ObFGqBE.js";import"./use-inert-others-BxoNIx0z.js";import"./portal-CxMlnORm.js";import"./focus-management-BfeyzjOS.js";import"./open-closed-Cv3xDOeT.js";import"./description-C355DR4L.js";import"./label-ZRjmH7ix.js";import"./transition-C20YNXKL.js";import"./use-is-mounted-Bo8jgdGA.js";import"./index-B8k91cqS.js";import"./spinner-D97pmidu.js";const P={title:"Components/DropdownMenu",component:n,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},t={render:()=>e.jsxs(n,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},o={render:m=>e.jsxs(n,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
