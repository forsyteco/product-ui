import{j as e}from"./iframe-ii299Cu5.js";import{D as t,a as n,b as s}from"./dropdown-menu-DJeXuUTI.js";import{B as i}from"./button-BrNYjvaN.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DYa9A5i-.js";import"./index-BqGO5dbw.js";import"./index-C_Qt56wl.js";import"./use-resolve-button-type-CBZ1aI4k.js";import"./keyboard-D7njr0Xf.js";import"./use-sync-refs-BBkBdVyb.js";import"./floating-BdPeDLnn.js";import"./element-movement-CrZTURMR.js";import"./bugs-C2OHvTm5.js";import"./portal-usdoFaVe.js";import"./focus-management-BKYhelLL.js";import"./use-inert-others-D-YXQylI.js";import"./use-text-value-JANiSFNc.js";import"./open-closed-DdTmSrOB.js";import"./use-tree-walker-DNZzt0uN.js";import"./description-D6O3PFf8.js";import"./label-CYmxWPmQ.js";import"./transition-BEdpU7EC.js";import"./use-is-mounted-BlmK50SG.js";import"./index-cXaQtA9H.js";const L={title:"Components/DropdownMenu/Examples",component:t,parameters:{layout:"padded"}},r={render:()=>e.jsx("div",{className:"flex justify-end p-4",children:e.jsxs(t,{trigger:e.jsxs(i,{variant:"outline",className:"flex items-center gap-2 rounded-lg",children:[e.jsx("span",{children:"John Doe"}),e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),children:[e.jsx(n,{children:"Profile"}),e.jsx(n,{children:"Settings"}),e.jsx(n,{children:"Billing"}),e.jsx(n,{disabled:!0,children:"Upgrade Plan"}),e.jsx(n,{children:"Sign out"})]})})},o={render:()=>e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"font-semibold",children:"Document"}),e.jsxs(t,{trigger:e.jsx(s,{children:"Actions"}),children:[e.jsx(n,{children:"Edit"}),e.jsx(n,{children:"Share"}),e.jsx(n,{children:"Duplicate"}),e.jsx(n,{children:"Archive"}),e.jsx(n,{className:"text-red-600",children:"Delete"})]})]}),e.jsx("p",{className:"text-base text-gray-600",children:"This is a sample document with an action menu."})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
