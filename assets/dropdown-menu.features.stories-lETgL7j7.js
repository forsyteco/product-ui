import{j as e}from"./iframe-CNYYlD36.js";import{D as t,a as n,b as d}from"./dropdown-menu-pb9FF72M.js";import{B as i}from"./button-Bn0tC0DV.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-C4fSfmyf.js";import"./index-DYwh5NA3.js";import"./index-D4rEHvpE.js";import"./use-resolve-button-type-C9PyahDA.js";import"./keyboard-DtISN8rn.js";import"./use-sync-refs-DZgQMG1Q.js";import"./floating-DCZWDNJE.js";import"./element-movement-BlCQH2Fn.js";import"./bugs-SeIKBOFb.js";import"./portal-_z1lZ7UR.js";import"./focus-management-DeCdYFst.js";import"./use-inert-others-Dq6Q-G8N.js";import"./use-text-value-AWhdhCcv.js";import"./open-closed-By9Rj1dh.js";import"./use-tree-walker-DvucGxYg.js";import"./description-D1PW4E0C.js";import"./label-DgKDHCQR.js";import"./transition-BXx9RqTX.js";import"./use-is-mounted-DeNyIpkm.js";import"./index-cXaQtA9H.js";const S={title:"Components/DropdownMenu/Features",component:t,parameters:{layout:"centered"},argTypes:{align:{control:{type:"select"},options:["left","right"],description:"Alignment of the dropdown menu",table:{type:{summary:"'left' | 'right'"},defaultValue:{summary:"'right'"}}}}},r={render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs(t,{trigger:e.jsx(i,{children:"Left Aligned"}),align:"left",children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]}),e.jsx("span",{className:"text-xs text-gray-600",children:"Left"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsxs(t,{trigger:e.jsx(i,{children:"Right Aligned"}),align:"right",children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]}),e.jsx("span",{className:"text-xs text-gray-600",children:"Right"})]})]})},o={render:()=>e.jsxs(t,{trigger:e.jsx(d,{children:"Options"}),children:[e.jsx(n,{children:"Edit"}),e.jsx(n,{children:"Duplicate"}),e.jsx(n,{children:"Delete"})]})},s={render:()=>e.jsxs(t,{trigger:e.jsx(i,{children:"Menu"}),children:[e.jsx(n,{children:"Enabled Item"}),e.jsx(n,{disabled:!0,children:"Disabled Item"}),e.jsx(n,{children:"Another Enabled Item"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
