import{j as e}from"./iframe-CFsUuUqa.js";import{T as s}from"./textarea-Dt8Po3GE.js";import{B as t}from"./button-DgkIOwa6.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const i={title:"Components/Textarea/Examples",component:s,parameters:{layout:"padded"}},a={render:()=>e.jsx("div",{className:"p-6 max-w-md",children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Name"}),e.jsx("input",{type:"text",className:"w-full px-3 py-2 border border-gray-300 rounded-md",placeholder:"Your name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md",placeholder:"you@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Message"}),e.jsx(s,{rows:6,placeholder:"Enter your message..."})]}),e.jsx(t,{type:"submit",className:"w-full",children:"Send Message"})]})})},r={render:()=>e.jsx("div",{className:"p-6 max-w-md",children:e.jsx("form",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Description"}),e.jsx(s,{rows:4,placeholder:"Enter description...",error:!0}),e.jsx("p",{className:"mt-1 text-base text-red-600",children:"Description must be at least 10 characters"})]})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Name
          </label>
          <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Email
          </label>
          <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Message
          </label>
          <Textarea rows={6} placeholder="Enter your message..." />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Description
          </label>
          <Textarea rows={4} placeholder="Enter description..." error />
          <p className="mt-1 text-base text-red-600">
            Description must be at least 10 characters
          </p>
        </div>
      </form>
    </div>
}`,...r.parameters?.docs?.source}}};const p=["ContactForm","FormWithValidation"];export{a as ContactForm,r as FormWithValidation,p as __namedExportsOrder,i as default};
