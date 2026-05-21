import{j as e}from"./iframe-C_TxvPYL.js";import{D as t,a as n,b as s}from"./dropdown-menu-DUs4o3Pv.js";import{B as i}from"./button-Bqw4M8X3.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BLeHenNf.js";import"./index-Ca65woEg.js";import"./index-ByS2HjQk.js";import"./use-resolve-button-type-7cGRNqUr.js";import"./keyboard-D-d5xU5t.js";import"./use-sync-refs-CD9OZkD4.js";import"./floating-JWLa5HRk.js";import"./element-movement-B--a4ltW.js";import"./bugs-CviBSKgF.js";import"./portal-DgNF7_mA.js";import"./focus-management-D31FE4zT.js";import"./use-inert-others-C8kNr3bX.js";import"./use-text-value-BKF01LoG.js";import"./open-closed-BQ-jk4i9.js";import"./use-tree-walker-Dbr0QQG8.js";import"./description-DA6fyObB.js";import"./label-CYkb24oH.js";import"./transition-BuSRb8Ai.js";import"./use-is-mounted-C4eaQcYX.js";import"./spinner-BMUkWA1_.js";import"./visually-hidden-CS5TVNRS.js";import"./index-cXaQtA9H.js";const U={title:"Components/DropdownMenu/Examples",component:t,parameters:{layout:"padded"}},r={render:()=>e.jsx("div",{className:"flex justify-end p-4",children:e.jsxs(t,{trigger:e.jsxs(i,{variant:"outline",className:"flex items-center gap-2 rounded-lg",children:[e.jsx("span",{children:"John Doe"}),e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),children:[e.jsx(n,{children:"Profile"}),e.jsx(n,{children:"Settings"}),e.jsx(n,{children:"Billing"}),e.jsx(n,{disabled:!0,children:"Upgrade Plan"}),e.jsx(n,{children:"Sign out"})]})})},o={render:()=>e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"font-semibold",children:"Document"}),e.jsxs(t,{trigger:e.jsx(s,{children:"Actions"}),children:[e.jsx(n,{children:"Edit"}),e.jsx(n,{children:"Share"}),e.jsx(n,{children:"Duplicate"}),e.jsx(n,{children:"Archive"}),e.jsx(n,{className:"text-red-600",children:"Delete"})]})]}),e.jsx("p",{className:"text-base text-gray-600",children:"This is a sample document with an action menu."})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const C=["UserMenu","ActionMenu"];export{o as ActionMenu,r as UserMenu,C as __namedExportsOrder,U as default};
