import{j as e}from"./iframe-BX-ROWNI.js";import{I as l}from"./input-CF-TE7mz.js";import{B as s}from"./button-J79MQA9b.js";import{F as r}from"./form-field-CfA89pxu.js";import"./preload-helper-DEha_CyH.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./index-B8k91cqS.js";import"./tailwind-BykweIWy.js";import"./spinner-U037JlYe.js";const u={title:"Components/Input/Examples",component:l,parameters:{layout:"padded"}},o={render:()=>e.jsx("div",{className:"w-full max-w-sm",children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs(r,{children:[e.jsx(r.Label,{children:"Email"}),e.jsx(r.Control,{children:e.jsx(l,{type:"email",placeholder:"you@example.com"})})]}),e.jsxs(r,{children:[e.jsx(r.Label,{children:"Password"}),e.jsx(r.Control,{children:e.jsx(l,{type:"password",placeholder:"••••••••"})})]}),e.jsx(s,{type:"submit",className:"w-full",children:"Sign In"})]})})},a={render:()=>e.jsx("div",{className:"w-full max-w-sm",children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs(r,{children:[e.jsx(r.Label,{children:"Username"}),e.jsx(r.Control,{children:e.jsx(l,{placeholder:"Enter username"})}),e.jsx(r.Description,{children:"Must be at least 3 characters"})]}),e.jsxs(r,{children:[e.jsx(r.Label,{children:"Email"}),e.jsx(r.Control,{describedBy:"both",children:e.jsx(l,{type:"email",placeholder:"Enter email",error:!0})}),e.jsx(r.Error,{children:"Please enter a valid email address"})]})]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-sm">
      <form className="space-y-4">
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Control>
            <Input type="email" placeholder="you@example.com" />
          </FormField.Control>
        </FormField>
        <FormField>
          <FormField.Label>Password</FormField.Label>
          <FormField.Control>
            <Input type="password" placeholder="••••••••" />
          </FormField.Control>
        </FormField>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
    </div>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-sm">
      <form className="space-y-4">
        <FormField>
          <FormField.Label>Username</FormField.Label>
          <FormField.Control>
            <Input placeholder="Enter username" />
          </FormField.Control>
          <FormField.Description>Must be at least 3 characters</FormField.Description>
        </FormField>
        <FormField>
          <FormField.Label>Email</FormField.Label>
          <FormField.Control describedBy="both">
            <Input type="email" placeholder="Enter email" error />
          </FormField.Control>
          <FormField.Error>Please enter a valid email address</FormField.Error>
        </FormField>
      </form>
    </div>
}`,...a.parameters?.docs?.source}}};const j=["LoginForm","FormWithValidation"];export{a as FormWithValidation,o as LoginForm,j as __namedExportsOrder,u as default};
