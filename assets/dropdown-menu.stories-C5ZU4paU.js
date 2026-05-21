import{j as e}from"./iframe-Bbi4Wu2n.js";import{D as n,a as r}from"./dropdown-menu-Csot05dx.js";import{B as p}from"./button-BNkMhcgE.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-Cr6_nyWp.js";import"./index-CxVl0uTJ.js";import"./index-CyhagWGm.js";import"./use-resolve-button-type-ngWtVHmY.js";import"./keyboard-CNKbYmCx.js";import"./use-sync-refs-vr87eQ-t.js";import"./floating-B37oCl7H.js";import"./element-movement-DfgC75Da.js";import"./bugs-C4Onqh7Z.js";import"./portal-5kpVsE14.js";import"./focus-management-CbAavFFR.js";import"./use-inert-others-BtWbgvz8.js";import"./use-text-value-QFw6-oBq.js";import"./open-closed-BTRjoMdZ.js";import"./use-tree-walker-Cll4U2WQ.js";import"./description-CyMAbnov.js";import"./label-Dw6w6Mri.js";import"./transition-uwG0W11Z.js";import"./use-is-mounted-Doms6kij.js";import"./spinner-CHmihI9Z.js";import"./visually-hidden-I3NbyvUx.js";import"./index-cXaQtA9H.js";const R={title:"Components/DropdownMenu",component:n,parameters:{layout:"centered",docs:{description:{component:"A dropdown menu component built with Headless UI. Supports custom triggers, menu items, and alignment options."}}},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}},tags:["autodocs"]},t={render:()=>e.jsxs(n,{trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Item 1"}),e.jsx(r,{children:"Item 2"}),e.jsx(r,{children:"Item 3"})]})},o={render:m=>e.jsxs(n,{...m,trigger:e.jsx(p,{children:"Open Menu"}),children:[e.jsx(r,{children:"Edit"}),e.jsx(r,{children:"Duplicate"}),e.jsx(r,{disabled:!0,children:"Delete"})]}),args:{align:"right"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const T=["Default","Playground"];export{t as Default,o as Playground,T as __namedExportsOrder,R as default};
