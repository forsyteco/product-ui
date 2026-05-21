import{j as e}from"./iframe-DtxS-MGC.js";import{D as t,a as n,b as s}from"./dropdown-menu-DW3yQxt-.js";import{B as i}from"./button-CnO-AZi5.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-CLhQcegA.js";import"./keyboard-DGdCXcdW.js";import"./use-sync-refs-CPbG3aZX.js";import"./index-MJ0bJMXz.js";import"./index-HQ1KwuKc.js";import"./floating-D27cv2f5.js";import"./element-movement-ys-UjLPu.js";import"./bugs-D6x1SQ1q.js";import"./portal-DazVI_VC.js";import"./focus-management-DVvF2Sc9.js";import"./use-inert-others-DZyxT0dB.js";import"./use-text-value-6D2gsjTG.js";import"./open-closed-CSKGfCwc.js";import"./use-tree-walker-CHmnOeK_.js";import"./description-CHeu0Qp6.js";import"./label-DM0RO_rr.js";import"./transition-BkZb5NDJ.js";import"./use-is-mounted-BQ-ntUt9.js";import"./spinner-Bd4_yAFu.js";import"./index-B8k91cqS.js";const P={title:"Components/DropdownMenu/Examples",component:t,parameters:{layout:"padded"}},r={render:()=>e.jsx("div",{className:"flex justify-end p-4",children:e.jsxs(t,{trigger:e.jsxs(i,{variant:"outline",className:"flex items-center gap-2 rounded-lg",children:[e.jsx("span",{children:"John Doe"}),e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),children:[e.jsx(n,{children:"Profile"}),e.jsx(n,{children:"Settings"}),e.jsx(n,{children:"Billing"}),e.jsx(n,{disabled:!0,children:"Upgrade Plan"}),e.jsx(n,{children:"Sign out"})]})})},o={render:()=>e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"font-semibold",children:"Document"}),e.jsxs(t,{trigger:e.jsx(s,{children:"Actions"}),children:[e.jsx(n,{children:"Edit"}),e.jsx(n,{children:"Share"}),e.jsx(n,{children:"Duplicate"}),e.jsx(n,{children:"Archive"}),e.jsx(n,{className:"text-red-600",children:"Delete"})]})]}),e.jsx("p",{className:"text-base text-gray-600",children:"This is a sample document with an action menu."})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
