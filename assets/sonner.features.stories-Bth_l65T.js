import{j as e}from"./iframe-C3NiGLkr.js";import{S as r,t as s}from"./sonner-sMjuwrFu.js";import{B as a}from"./button-FF05ASSK.js";import"./preload-helper-DEha_CyH.js";import"./index-DNRP92Qz.js";import"./index-CEhDcc2E.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const h={title:"Components/Sonner/Features",component:r,parameters:{layout:"centered"}},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{}),e.jsx(a,{onClick:()=>s("Project created",{description:"You can undo this action for a short time.",action:{label:"Undo",onClick:()=>s.message("Undone")}}),children:"Show toast with action"})]})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{}),e.jsx(a,{onClick:()=>s.promise(new Promise(i=>setTimeout(i,900)),{loading:"Saving…",success:"Saved",error:"Failed to save"}),children:"Show promise toast"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Sonner />
      <Button onClick={() => toast('Project created', {
      description: 'You can undo this action for a short time.',
      action: {
        label: 'Undo',
        onClick: () => toast.message('Undone')
      }
    })}>
        Show toast with action
      </Button>
    </div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <Sonner />
      <Button onClick={() => toast.promise(new Promise(resolve => setTimeout(resolve, 900)), {
      loading: 'Saving…',
      success: 'Saved',
      error: 'Failed to save'
    })}>
        Show promise toast
      </Button>
    </div>
}`,...t.parameters?.docs?.source}}};const S=["WithAction","PromiseToast"];export{t as PromiseToast,o as WithAction,S as __namedExportsOrder,h as default};
