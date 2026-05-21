import{j as e}from"./iframe-kqJoyzOv.js";import{D as n,a as r}from"./dropdown-menu-D_WxQbfj.js";import{B as p}from"./button-CTXerEIp.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-DDwf73KN.js";import"./keyboard-D5qsp4HU.js";import"./use-sync-refs-CAiCvLHi.js";import"./index-1PFnJZ_D.js";import"./index-qPEbv8Ah.js";import"./floating-9i8NPJbh.js";import"./element-movement-DOAiwh-0.js";import"./bugs-CgGO5Bru.js";import"./portal-CoKyd3p-.js";import"./focus-management-3mjStGxn.js";import"./use-inert-others-DHQFyV5j.js";import"./open-closed-DPhFzWxs.js";import"./description-C83HIk9Z.js";import"./label-CtVY1zvf.js";import"./transition-CVV-sxI-.js";import"./use-is-mounted-DIMsKP61.js";import"./spinner-BlDNYi5B.js";import"./index-B8k91cqS.js";const _={title:"Components/DropdownMenu",component:n,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},t={render:()=>e.jsxs(n,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},o={render:m=>e.jsxs(n,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const C=["Default","Playground"];export{t as Default,o as Playground,C as __namedExportsOrder,_ as default};
