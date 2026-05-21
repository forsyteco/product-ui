import{j as t}from"./iframe-Bsx-Ou2Z.js";import{S as a,t as s}from"./sonner-CNJZ1FxV.js";import{B as o}from"./button-MA4SzPI9.js";import"./preload-helper-DEha_CyH.js";import"./index-BWTGCpOW.js";import"./index-BC68ImjR.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";const f={title:"Components/Sonner",component:a,parameters:{docs:{description:{component:"Find everything about sonner in [Sonner docs](https://sonner.emilkowal.ski/toast)"}}},tags:["autodocs"]},e={render:()=>t.jsxs(t.Fragment,{children:[t.jsx(a,{}),t.jsx(o,{onClick:()=>s.success("Hey there!"),children:"Show toast"})]})},r={args:{},render:()=>t.jsxs("div",{className:"flex flex-col gap-3",children:[t.jsx(a,{}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsx(o,{variant:"outline",onClick:()=>s("Default toast"),children:"Default"}),t.jsx(o,{onClick:()=>s.success("Success toast"),children:"Success"}),t.jsx(o,{variant:"destructive",onClick:()=>s.error("Error toast"),children:"Error"})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const S=["Default","Playground"];export{e as Default,r as Playground,S as __namedExportsOrder,f as default};
