import{j as t}from"./iframe-D3jKVOAj.js";import{S as a,t as o}from"./sonner-BuALXrZN.js";import{B as s}from"./button-B1vOep6r.js";import"./preload-helper-DEha_CyH.js";import"./index-DblNVS2F.js";import"./index-DkyIaSV8.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-BCVrcFZ9.js";import"./index-B8k91cqS.js";const S={title:"Components/Sonner",component:a,parameters:{docs:{description:{component:"Find everything about sonner in [Sonner docs](https://sonner.emilkowal.ski/toast)"}}},tags:["autodocs"]},e={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(a,{}),t.jsx(s,{onClick:()=>o.success("Hey there!"),children:"Show toast"})]})},r={args:{},render:()=>t.jsxs("div",{className:"flex flex-col gap-3",children:[t.jsx(a,{}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(s,{variant:"outline",onClick:()=>o("Default toast"),children:"Default"}),t.jsx(s,{onClick:()=>o.success("Success toast"),children:"Success"}),t.jsx(s,{variant:"destructive",onClick:()=>o.error("Error toast"),children:"Error"})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <>
      <Sonner />
      <Button onClick={() => toast.success('Hey there!')}>Show toast</Button>
    </>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <div className="flex flex-col gap-3">
      <Sonner />
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => toast('Default toast')}>
          Default
        </Button>
        <Button onClick={() => toast.success('Success toast')}>Success</Button>
        <Button variant="destructive" onClick={() => toast.error('Error toast')}>
          Error
        </Button>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};const g=["Default","Playground"];export{e as Default,r as Playground,g as __namedExportsOrder,S as default};
