import{j as e}from"./iframe-Bsx-Ou2Z.js";import{D as t,a as n,b as s}from"./dropdown-menu-DrL7ulHM.js";import{B as i}from"./button-MA4SzPI9.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-6ZyLCJ3R.js";import"./index-BWTGCpOW.js";import"./index-BC68ImjR.js";import"./use-resolve-button-type-BN6DbRrF.js";import"./keyboard-DVExfB0A.js";import"./use-sync-refs-CZbgCkNu.js";import"./floating-By3-1b-P.js";import"./element-movement-DfqFf51M.js";import"./bugs-6tgLNrUu.js";import"./portal-BUwHpf9K.js";import"./focus-management-B9_YCb-9.js";import"./use-inert-others-BDij1H8p.js";import"./use-text-value-BSnV_wyx.js";import"./open-closed-Cv3yQh5L.js";import"./use-tree-walker-CXiEEilb.js";import"./description-BPvs3qQm.js";import"./label-Bta4yG3N.js";import"./transition-gizjJRJu.js";import"./use-is-mounted-YZ2I2u-0.js";import"./index-B8k91cqS.js";const P={title:"Components/DropdownMenu/Examples",component:t,parameters:{layout:"padded"}},r={render:()=>e.jsx("div",{className:"flex justify-end p-4",children:e.jsxs(t,{trigger:e.jsxs(i,{variant:"outline",className:"flex items-center gap-2 rounded-lg",children:[e.jsx("span",{children:"John Doe"}),e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),children:[e.jsx(n,{children:"Profile"}),e.jsx(n,{children:"Settings"}),e.jsx(n,{children:"Billing"}),e.jsx(n,{disabled:!0,children:"Upgrade Plan"}),e.jsx(n,{children:"Sign out"})]})})},o={render:()=>e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"font-semibold",children:"Document"}),e.jsxs(t,{trigger:e.jsx(s,{children:"Actions"}),children:[e.jsx(n,{children:"Edit"}),e.jsx(n,{children:"Share"}),e.jsx(n,{children:"Duplicate"}),e.jsx(n,{children:"Archive"}),e.jsx(n,{className:"text-red-600",children:"Delete"})]})]}),e.jsx("p",{className:"text-base text-gray-600",children:"This is a sample document with an action menu."})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const U=["UserMenu","ActionMenu"];export{o as ActionMenu,r as UserMenu,U as __namedExportsOrder,P as default};
