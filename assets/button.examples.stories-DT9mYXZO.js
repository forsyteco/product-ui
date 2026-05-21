import{j as e}from"./iframe-CxYaNlfa.js";import{B as n}from"./button-hQaN4FMQ.js";import{H as l,I as o,B as s}from"./inbox-CZ3X2any.js";import{c}from"./createLucideIcon-DrDZjbcm.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./spinner-3-TdU7zT.js";import"./visually-hidden-0Sws8sXy.js";import"./index-cXaQtA9H.js";const d=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],m=c("message-square",d),y={title:"Components/Button/Examples",component:n,parameters:{layout:"padded"}},a={render:()=>e.jsx("div",{className:"p-6 max-w-md",children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md",placeholder:"you@example.com"})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(n,{variant:"outline",type:"button",children:"Cancel"}),e.jsx(n,{variant:"primary",type:"submit",children:"Submit"})]})]})})},r={render:()=>e.jsxs("div",{className:"p-6 flex gap-4",children:[e.jsxs(n,{children:[e.jsx("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 4v16m8-8H4"})}),"Add Item"]}),e.jsxs(n,{variant:"outline",children:[e.jsxs("svg",{className:"w-4 h-4 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),"View"]})]})},i={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(n,{icon:l,"aria-label":"Favorite"}),e.jsx(n,{icon:o,"aria-label":"Notifications",description:"View notifications"}),e.jsx(n,{icon:s,"aria-label":"Alerts",variant:"primary"}),e.jsx(n,{icon:m,"aria-label":"Messages",variant:"danger"})]})},t={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(n,{icon:o,"aria-label":"Notifications",description:"Open inbox",keybindingHint:"G+I"}),e.jsx(n,{icon:s,"aria-label":"Alerts",description:"Open alerts",keybindingHint:"G+A"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">Email</label>
          <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="you@example.com" />
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button icon={Heart} aria-label="Favorite" />
      <Button icon={Inbox} aria-label="Notifications" description="View notifications" />
      <Button icon={Bell} aria-label="Alerts" variant="primary" />
      <Button icon={MessageSquare} aria-label="Messages" variant="danger" />
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button icon={Inbox} aria-label="Notifications" description="Open inbox" keybindingHint="G+I" />
      <Button icon={Bell} aria-label="Alerts" description="Open alerts" keybindingHint="G+A" />
    </div>
}`,...t.parameters?.docs?.source}}};const k=["FormActions","WithLeadingIcon","IconToolbar","WithKeybindingHints"];export{a as FormActions,i as IconToolbar,t as WithKeybindingHints,r as WithLeadingIcon,k as __namedExportsOrder,y as default};
