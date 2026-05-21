import{j as e}from"./iframe-CItR6fGu.js";import{D as t,a as n,b as m}from"./dropdown-menu-D7KtDMMV.js";import{B as i}from"./button-T-BPDXWE.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-BFmILeb_.js";import"./keyboard-8VRtqMCG.js";import"./use-sync-refs-CaS58R8u.js";import"./index-CNOo9puS.js";import"./index-B9rWXd0V.js";import"./floating-BsWb7cLr.js";import"./element-movement-CMyflZBM.js";import"./bugs-DpLPc2L_.js";import"./portal-DLX_yNr9.js";import"./focus-management-1bpFx2A3.js";import"./use-inert-others-b7zpTwIW.js";import"./use-text-value-BSjts503.js";import"./open-closed-McBZdwWe.js";import"./use-tree-walker-CU1YxDDt.js";import"./description-HwKmEHXT.js";import"./label-BrqWDG43.js";import"./transition-C4fNLC7i.js";import"./use-is-mounted-QDWdXCXc.js";import"./spinner-DphlRdEr.js";import"./index-B8k91cqS.js";const W={title:"Components/DropdownMenu/Features",component:t,parameters:{layout:"centered"},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}}},r={render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs(t,{trigger:e.jsx(i,{children:"Left Aligned"}),align:"left",children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]}),e.jsx("span",{className:"text-xs text-gray-600",children:"Left"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs(t,{trigger:e.jsx(i,{children:"Right Aligned"}),align:"right",children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]}),e.jsx("span",{className:"text-xs text-gray-600",children:"Right"})]})]})},o={render:()=>e.jsxs(t,{trigger:e.jsx(m,{children:"Options"}),children:[e.jsx(n,{children:"Edit"}),e.jsx(n,{children:"Duplicate"}),e.jsx(n,{children:"Delete"})]})},s={render:()=>e.jsxs(t,{trigger:e.jsx(i,{children:"Menu"}),children:[e.jsx(n,{children:"Enabled Item"}),e.jsx(n,{disabled:!0,children:"Disabled Item"}),e.jsx(n,{children:"Another Enabled Item"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const _=["Alignments","WithMenuButton","DisabledItems"];export{r as Alignments,s as DisabledItems,o as WithMenuButton,_ as __namedExportsOrder,W as default};
