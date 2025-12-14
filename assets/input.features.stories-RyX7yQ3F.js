import{j as e}from"./iframe-CeYd32X8.js";import{I as r}from"./input-xxUIJvUO.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const d={title:"Components/Input/Features",component:r,parameters:{layout:"centered"},argTypes:{type:{control:{type:"select"},options:["text","email","password","number","tel","url"],description:"Input type"},error:{control:{type:"boolean"},description:"Whether the input has an error"},disabled:{control:{type:"boolean"},description:"Whether the input is disabled"},placeholder:{control:{type:"text"},description:"Placeholder text"}}},t={render:()=>e.jsxs("div",{className:"space-y-4 w-64",children:[e.jsx(r,{type:"text",placeholder:"Text input"}),e.jsx(r,{type:"email",placeholder:"Email input"}),e.jsx(r,{type:"password",placeholder:"Password input"}),e.jsx(r,{type:"number",placeholder:"Number input"})]})},p={render:()=>e.jsxs("div",{className:"space-y-4 w-64",children:[e.jsx(r,{placeholder:"Normal input"}),e.jsx(r,{placeholder:"Disabled input",disabled:!0}),e.jsx(r,{placeholder:"Error input",error:!0}),e.jsx(r,{placeholder:"Readonly input",readOnly:!0,value:"Readonly value"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-64">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
    </div>
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-64">
      <Input placeholder="Normal input" />
      <Input placeholder="Disabled input" disabled />
      <Input placeholder="Error input" error />
      <Input placeholder="Readonly input" readOnly value="Readonly value" />
    </div>
}`,...p.parameters?.docs?.source}}};const i=["Types","States"];export{p as States,t as Types,i as __namedExportsOrder,d as default};
