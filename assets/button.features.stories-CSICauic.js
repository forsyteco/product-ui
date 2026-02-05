import{j as e}from"./iframe-CNYYlD36.js";import{B as t}from"./button-Bn0tC0DV.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const l={title:"Components/Button/Features",component:t,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","outline","ghost"],description:"Button variant style"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size"},disabled:{control:{type:"boolean"},description:"Whether the button is disabled"}}},r={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"outline",children:"Outline"}),e.jsx(t,{variant:"ghost",children:"Ghost"})]})},a={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"md",children:"Medium"}),e.jsx(t,{size:"lg",children:"Large"})]})},s={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{disabled:!0,children:"Disabled Primary"}),e.jsx(t,{variant:"secondary",disabled:!0,children:"Disabled Secondary"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Button disabled>Disabled Primary</Button>
      <Button variant="secondary" disabled>
        Disabled Secondary
      </Button>
    </div>
}`,...s.parameters?.docs?.source}}};const m=["Variants","Sizes","Disabled"];export{s as Disabled,a as Sizes,r as Variants,m as __namedExportsOrder,l as default};
