import{j as e}from"./iframe-BZ1wujjQ.js";import{D as t,a as n,b as d}from"./dropdown-menu-QZ_qey3T.js";import{B as i}from"./button-LJhTR5u8.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BfnhhEST.js";import"./index-W2FIh6FJ.js";import"./index-imFVSO3i.js";import"./use-resolve-button-type-BdBbSlJ2.js";import"./keyboard-Ce2CPQ3X.js";import"./use-sync-refs-DKphwUq6.js";import"./floating-DJeorzdf.js";import"./element-movement-BFShz-nT.js";import"./bugs-CWise-ep.js";import"./portal-EQenjn8w.js";import"./focus-management-DzM3vxoc.js";import"./use-inert-others-D7PEgJFU.js";import"./use-text-value-2uJ_D3Gg.js";import"./open-closed-DMtSAjel.js";import"./use-tree-walker-BngRelFW.js";import"./description-CTKD1BlB.js";import"./label-DjUSKMEb.js";import"./transition-0J3O6CrR.js";import"./use-is-mounted-xpTVFGMB.js";import"./index-cXaQtA9H.js";const S={title:"Components/DropdownMenu/Features",component:t,parameters:{layout:"centered"},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}}},r={render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs(t,{trigger:e.jsx(i,{children:"Left Aligned"}),align:"left",children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]}),e.jsx("span",{className:"text-xs text-gray-600",children:"Left"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs(t,{trigger:e.jsx(i,{children:"Right Aligned"}),align:"right",children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]}),e.jsx("span",{className:"text-xs text-gray-600",children:"Right"})]})]})},o={render:()=>e.jsxs(t,{trigger:e.jsx(d,{children:"Options"}),children:[e.jsx(n,{children:"Edit"}),e.jsx(n,{children:"Duplicate"}),e.jsx(n,{children:"Delete"})]})},s={render:()=>e.jsxs(t,{trigger:e.jsx(i,{children:"Menu"}),children:[e.jsx(n,{children:"Enabled Item"}),e.jsx(n,{disabled:!0,children:"Disabled Item"}),e.jsx(n,{children:"Another Enabled Item"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const W=["Alignments","WithMenuButton","DisabledItems"];export{r as Alignments,s as DisabledItems,o as WithMenuButton,W as __namedExportsOrder,S as default};
