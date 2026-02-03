import{j as t}from"./iframe-DCut3pB0.js";import{S as a,t as s}from"./sonner-BSvTywq6.js";import{B as o}from"./button-UjEabEsX.js";import"./preload-helper-DEha_CyH.js";import"./index-Cw_6tGoc.js";import"./index-DK0opmzF.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const x={title:"Components/Sonner",component:a,parameters:{docs:{description:{component:"Find everything about sonner in [Sonner docs](https://sonner.emilkowal.ski/toast)"}}},tags:["autodocs"]},e={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(a,{}),t.jsx(o,{onClick:()=>s.success("Hey there!"),children:"Show toast"})]})},r={args:{},render:()=>t.jsxs("div",{className:"flex flex-col gap-3",children:[t.jsx(a,{}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(o,{variant:"outline",onClick:()=>s("Default toast"),children:"Default"}),t.jsx(o,{onClick:()=>s.success("Success toast"),children:"Success"}),t.jsx(o,{variant:"destructive",onClick:()=>s.error("Error toast"),children:"Error"})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const f=["Default","Playground"];export{e as Default,r as Playground,f as __namedExportsOrder,x as default};
