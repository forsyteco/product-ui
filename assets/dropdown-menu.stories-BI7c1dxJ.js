import{j as e}from"./iframe-Ccv72OAP.js";import{D as n,a as r}from"./dropdown-menu-BQACJACz.js";import{B as p}from"./button-CwzOfVEx.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-CVFXSLBs.js";import"./keyboard-Bj8Si4my.js";import"./use-sync-refs-YRg-9jEj.js";import"./index-3FYpRak_.js";import"./index-CX2OxCDR.js";import"./floating-K3v631rL.js";import"./element-movement-BftKrcTR.js";import"./bugs-BEd2wVVK.js";import"./portal-T5jVZpWw.js";import"./focus-management-18jBgMrJ.js";import"./use-inert-others-M_QUwCoT.js";import"./open-closed-CqLh23QT.js";import"./description-VWDZaHMZ.js";import"./label-BpT0Y1b-.js";import"./transition-Dy4iBLZm.js";import"./use-is-mounted-BnWKqbrg.js";import"./spinner-BrVw5Cwa.js";import"./index-B8k91cqS.js";const _={title:"Components/DropdownMenu",component:n,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},t={render:()=>e.jsxs(n,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},o={render:m=>e.jsxs(n,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
