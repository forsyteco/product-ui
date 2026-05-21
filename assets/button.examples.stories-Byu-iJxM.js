import{j as e}from"./iframe-B_2llF5Y.js";import{B as n}from"./button-YhwC3Rez.js";import{I as l}from"./input-VcLgkGRq.js";import{c as o}from"./createLucideIcon-BqKM6V-l.js";import{I as s}from"./inbox-jI76jiTM.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./index-B8k91cqS.js";import"./spinner-DhLtk9jQ.js";import"./field-autofill-props-Dh75dEkE.js";import"./input-shell-YTGH2IZD.js";const d=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],c=o("bell",d);const m=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],p=o("heart",m);const u=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],x=o("message-square",u),w={title:"Components/Button/Examples",component:n,parameters:{layout:"padded"}},a={render:()=>e.jsx("div",{className:"p-6 max-w-md",children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Email"}),e.jsx(l,{type:"email",placeholder:"you@example.com"})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(n,{variant:"outline",type:"button",children:"Cancel"}),e.jsx(n,{variant:"primary",type:"submit",children:"Submit"})]})]})})},r={render:()=>e.jsxs("div",{className:"p-6 flex gap-4",children:[e.jsxs(n,{children:[e.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),"Add Item"]}),e.jsxs(n,{variant:"outline",children:[e.jsxs("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),"View"]})]})},t={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(n,{icon:p,"aria-label":"Favorite"}),e.jsx(n,{icon:s,"aria-label":"Notifications",description:"View notifications"}),e.jsx(n,{icon:c,"aria-label":"Alerts",variant:"primary"}),e.jsx(n,{icon:x,"aria-label":"Messages",variant:"danger"})]})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(n,{icon:s,"aria-label":"Notifications",description:"Open inbox",keybindingHint:"G+I"}),e.jsx(n,{icon:c,"aria-label":"Alerts",description:"Open alerts",keybindingHint:"G+A"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">Email</label>
          <Input type="email" placeholder="you@example.com" />
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 flex gap-4">
      <Button>
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Item
      </Button>
      <Button variant="outline">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        View
      </Button>
    </div>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button icon={Heart} aria-label="Favorite" />
      <Button icon={Inbox} aria-label="Notifications" description="View notifications" />
      <Button icon={Bell} aria-label="Alerts" variant="primary" />
      <Button icon={MessageSquare} aria-label="Messages" variant="danger" />
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button icon={Inbox} aria-label="Notifications" description="Open inbox" keybindingHint="G+I" />
      <Button icon={Bell} aria-label="Alerts" description="Open alerts" keybindingHint="G+A" />
    </div>
}`,...i.parameters?.docs?.source}}};const A=["FormActions","WithLeadingIcon","IconToolbar","WithKeybindingHints"];export{a as FormActions,t as IconToolbar,i as WithKeybindingHints,r as WithLeadingIcon,A as __namedExportsOrder,w as default};
