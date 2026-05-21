import{j as e}from"./iframe-OIbwSsUo.js";import{D as t,a as n,b as s}from"./dropdown-menu-BwXiFHvE.js";import{B as i}from"./button-DTpuuVZa.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-CHwNI2-q.js";import"./index-CL3mEXst.js";import"./index-Bl-Jaq4B.js";import"./use-resolve-button-type-osKJOTL_.js";import"./keyboard-CTolmV5o.js";import"./use-sync-refs-0qmI2Jj2.js";import"./floating-DNM8ErJa.js";import"./element-movement-DJV5vrOp.js";import"./bugs-B5yy6nX2.js";import"./portal-CNpYkWm3.js";import"./focus-management-CYdr1o3c.js";import"./use-inert-others-iYuBuXXz.js";import"./use-text-value-DCPW-Brj.js";import"./open-closed-DWvAJZV2.js";import"./use-tree-walker-C-uxXtON.js";import"./description-Bwip7YUp.js";import"./label-BicDlr5-.js";import"./transition-u0iN46ux.js";import"./use-is-mounted-C2XTo937.js";import"./index-cXaQtA9H.js";const L={title:"Components/DropdownMenu/Examples",component:t,parameters:{layout:"padded"}},r={render:()=>e.jsx("div",{className:"flex justify-end p-4",children:e.jsxs(t,{trigger:e.jsxs(i,{variant:"outline",className:"flex items-center gap-2 rounded-lg",children:[e.jsx("span",{children:"John Doe"}),e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),children:[e.jsx(n,{children:"Profile"}),e.jsx(n,{children:"Settings"}),e.jsx(n,{children:"Billing"}),e.jsx(n,{disabled:!0,children:"Upgrade Plan"}),e.jsx(n,{children:"Sign out"})]})})},o={render:()=>e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"font-semibold",children:"Document"}),e.jsxs(t,{trigger:e.jsx(s,{children:"Actions"}),children:[e.jsx(n,{children:"Edit"}),e.jsx(n,{children:"Share"}),e.jsx(n,{children:"Duplicate"}),e.jsx(n,{children:"Archive"}),e.jsx(n,{className:"text-red-600",children:"Delete"})]})]}),e.jsx("p",{className:"text-base text-gray-600",children:"This is a sample document with an action menu."})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex justify-end p-4">
      <DropdownMenu trigger={<Button variant="outline" className="flex items-center gap-2 rounded-lg">
            <span>John Doe</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>}>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem disabled>Upgrade Plan</DropdownMenuItem>
        <DropdownMenuItem>Sign out</DropdownMenuItem>
      </DropdownMenu>
    </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4">
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Document</h3>
          <DropdownMenu trigger={<DropdownMenuButton>Actions</DropdownMenuButton>}>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Share</DropdownMenuItem>
            <DropdownMenuItem>Duplicate</DropdownMenuItem>
            <DropdownMenuItem>Archive</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
          </DropdownMenu>
        </div>
        <p className="text-base text-gray-600">This is a sample document with an action menu.</p>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};const P=["UserMenu","ActionMenu"];export{o as ActionMenu,r as UserMenu,P as __namedExportsOrder,L as default};
