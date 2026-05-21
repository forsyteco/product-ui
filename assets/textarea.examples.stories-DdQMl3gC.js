import{j as e}from"./iframe-BX-ROWNI.js";import{T as t}from"./textarea-CxJUkmIv.js";import{B as m}from"./button-J79MQA9b.js";import{I as r}from"./input-CF-TE7mz.js";import"./preload-helper-DEha_CyH.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./tailwind-BykweIWy.js";import"./spinner-U037JlYe.js";const h={title:"Components/Textarea/Examples",component:t,parameters:{layout:"padded"}},a={render:()=>e.jsx("div",{className:"p-6 max-w-md",children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Name"}),e.jsx(r,{type:"text",placeholder:"Your name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Email"}),e.jsx(r,{type:"email",placeholder:"you@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Message"}),e.jsx(t,{rows:6,placeholder:"Enter your message..."})]}),e.jsx(m,{type:"submit",className:"w-full",children:"Send Message"})]})})},s={render:()=>e.jsx("div",{className:"p-6 max-w-md",children:e.jsx("form",{className:"space-y-4",children:e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Description"}),e.jsx(t,{rows:4,placeholder:"Enter description...",error:!0}),e.jsx("p",{className:"mt-1 text-base text-red-600",children:"Description must be at least 10 characters"})]})})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">Name</label>
          <Input type="text" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">Email</label>
          <Input type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">Message</label>
          <Textarea rows={6} placeholder="Enter your message..." />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">Description</label>
          <Textarea rows={4} placeholder="Enter description..." error />
          <p className="mt-1 text-base text-red-600">
            Description must be at least 10 characters
          </p>
        </div>
      </form>
    </div>
}`,...s.parameters?.docs?.source}}};const y=["ContactForm","FormWithValidation"];export{a as ContactForm,s as FormWithValidation,y as __namedExportsOrder,h as default};
