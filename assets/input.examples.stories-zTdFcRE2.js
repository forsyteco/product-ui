import{j as e}from"./iframe-CeVB8obd.js";import{I as a}from"./input-OJTsGN7_.js";import{B as r}from"./button-GPmkhAQI.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const i={title:"Components/Input/Examples",component:a,parameters:{layout:"padded"}},s={render:()=>e.jsx("div",{className:"p-6 max-w-md",children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Email"}),e.jsx(a,{type:"email",placeholder:"you@example.com"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Password"}),e.jsx(a,{type:"password",placeholder:"••••••••"})]}),e.jsx(r,{type:"submit",className:"w-full",children:"Sign In"})]})})},t={render:()=>e.jsx("div",{className:"p-6 max-w-md",children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Username"}),e.jsx(a,{placeholder:"Enter username"}),e.jsx("p",{className:"mt-1 text-base text-gray-500",children:"Must be at least 3 characters"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Email"}),e.jsx(a,{type:"email",placeholder:"Enter email",error:!0}),e.jsx("p",{className:"mt-1 text-base text-red-600",children:"Please enter a valid email address"})]})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input type="email" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Password
          </label>
          <Input type="password" placeholder="••••••••" />
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Username
          </label>
          <Input placeholder="Enter username" />
          <p className="mt-1 text-base text-gray-500">Must be at least 3 characters</p>
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input type="email" placeholder="Enter email" error />
          <p className="mt-1 text-base text-red-600">Please enter a valid email address</p>
        </div>
      </form>
    </div>
}`,...t.parameters?.docs?.source}}};const p=["LoginForm","FormWithValidation"];export{t as FormWithValidation,s as LoginForm,p as __namedExportsOrder,i as default};
