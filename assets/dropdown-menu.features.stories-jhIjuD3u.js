import{j as e}from"./iframe-Bbi4Wu2n.js";import{D as t,a as n,b as m}from"./dropdown-menu-Csot05dx.js";import{B as i}from"./button-BNkMhcgE.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-Cr6_nyWp.js";import"./index-CxVl0uTJ.js";import"./index-CyhagWGm.js";import"./use-resolve-button-type-ngWtVHmY.js";import"./keyboard-CNKbYmCx.js";import"./use-sync-refs-vr87eQ-t.js";import"./floating-B37oCl7H.js";import"./element-movement-DfgC75Da.js";import"./bugs-C4Onqh7Z.js";import"./portal-5kpVsE14.js";import"./focus-management-CbAavFFR.js";import"./use-inert-others-BtWbgvz8.js";import"./use-text-value-QFw6-oBq.js";import"./open-closed-BTRjoMdZ.js";import"./use-tree-walker-Cll4U2WQ.js";import"./description-CyMAbnov.js";import"./label-Dw6w6Mri.js";import"./transition-uwG0W11Z.js";import"./use-is-mounted-Doms6kij.js";import"./spinner-CHmihI9Z.js";import"./visually-hidden-I3NbyvUx.js";import"./index-cXaQtA9H.js";const _={title:"Components/DropdownMenu/Features",component:t,parameters:{layout:"centered"},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}}},r={render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs(t,{trigger:e.jsx(i,{children:"Left Aligned"}),align:"left",children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]}),e.jsx("span",{className:"text-xs text-gray-600",children:"Left"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs(t,{trigger:e.jsx(i,{children:"Right Aligned"}),align:"right",children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]}),e.jsx("span",{className:"text-xs text-gray-600",children:"Right"})]})]})},o={render:()=>e.jsxs(t,{trigger:e.jsx(m,{children:"Options"}),children:[e.jsx(n,{children:"Edit"}),e.jsx(n,{children:"Duplicate"}),e.jsx(n,{children:"Delete"})]})},s={render:()=>e.jsxs(t,{trigger:e.jsx(i,{children:"Menu"}),children:[e.jsx(n,{children:"Enabled Item"}),e.jsx(n,{disabled:!0,children:"Disabled Item"}),e.jsx(n,{children:"Another Enabled Item"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8">
      <div className="flex flex-col items-center gap-2">
        <DropdownMenu trigger={<Button>Left Aligned</Button>} align="left">
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenu>
        <span className="text-xs text-gray-600">Left</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <DropdownMenu trigger={<Button>Right Aligned</Button>} align="right">
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenu>
        <span className="text-xs text-gray-600">Right</span>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu trigger={<DropdownMenuButton>Options</DropdownMenuButton>}>
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Duplicate</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenu>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu trigger={<Button>Menu</Button>}>
      <DropdownMenuItem>Enabled Item</DropdownMenuItem>
      <DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
      <DropdownMenuItem>Another Enabled Item</DropdownMenuItem>
    </DropdownMenu>
}`,...s.parameters?.docs?.source}}};const C=["Alignments","WithMenuButton","DisabledItems"];export{r as Alignments,s as DisabledItems,o as WithMenuButton,C as __namedExportsOrder,_ as default};
