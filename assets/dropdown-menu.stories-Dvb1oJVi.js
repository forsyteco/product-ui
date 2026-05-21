import{j as e}from"./iframe-BVZI3cAm.js";import{D as n,a as r}from"./dropdown-menu-7jWwDsCJ.js";import{B as p}from"./button-CFMYvpAs.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-ZlI0dW-N.js";import"./keyboard-DdQSsEm8.js";import"./use-sync-refs-DEHDpCuG.js";import"./index--g8NHrJE.js";import"./index-D50RP4Fs.js";import"./floating-ZKNxbURW.js";import"./element-movement-BLM8jbgB.js";import"./bugs-CkbgC0Uj.js";import"./portal-D35vnQ-C.js";import"./focus-management-DhGd5aK-.js";import"./use-inert-others-DwFB9qxu.js";import"./open-closed-DgU0jp-k.js";import"./description-DqZz0v7U.js";import"./label-BF8fOm5Q.js";import"./transition-CJr7_BWA.js";import"./use-is-mounted-B3o81Jj9.js";import"./spinner-CPcSxYrz.js";import"./index-B8k91cqS.js";const _={title:"Components/DropdownMenu",component:n,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},t={render:()=>e.jsxs(n,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},o={render:m=>e.jsxs(n,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
