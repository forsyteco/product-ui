import{j as o}from"./iframe-Bsx-Ou2Z.js";import{S as r,t as s}from"./sonner-CNJZ1FxV.js";import{B as a}from"./button-MA4SzPI9.js";import"./preload-helper-DEha_CyH.js";import"./index-BWTGCpOW.js";import"./index-BC68ImjR.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";const S={title:"Components/Sonner/Features",component:r,parameters:{layout:"centered"}},e={render:()=>o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(r,{}),o.jsx(a,{onClick:()=>s("Project created",{description:"You can undo this action for a short time.",action:{label:"Undo",onClick:()=>s.message("Undone")}}),children:"Show toast with action"})]})},t={render:()=>o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(r,{}),o.jsx(a,{onClick:()=>s.promise(new Promise(i=>setTimeout(i,900)),{loading:"Saving…",success:"Saved",error:"Failed to save"}),children:"Show promise toast"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const f=["WithAction","PromiseToast"];export{t as PromiseToast,e as WithAction,f as __namedExportsOrder,S as default};
