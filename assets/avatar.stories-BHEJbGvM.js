import{j as a}from"./iframe-BZ1wujjQ.js";import{A as r,b as s,a as n}from"./avatar-B9rFYNOs.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./index-W2FIh6FJ.js";import"./index-imFVSO3i.js";import"./index-c8h9FKTR.js";const p={title:"Components/Avatar",component:r,parameters:{layout:"centered",docs:{description:{component:"Avatar primitive with image and fallbacks (initials or boring avatar)."}}},tags:["autodocs"]},e={render:()=>a.jsxs(r,{children:[a.jsx(s,{alt:"Avatar"}),a.jsx(n,{variant:"initials",name:"Ada Lovelace"})]})},t={render:()=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(r,{children:a.jsx(n,{variant:"initials",name:"Ada Lovelace"})}),a.jsx(r,{children:a.jsx(n,{variant:"boring",name:"Grace Hopper"})}),a.jsx(r,{className:"size-12",children:a.jsx(n,{variant:"boring",name:"Alan Turing"})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage alt="Avatar" />
      <AvatarFallback variant="initials" name="Ada Lovelace" />
    </Avatar>
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Avatar>
        <AvatarFallback variant="initials" name="Ada Lovelace" />
      </Avatar>
      <Avatar>
        <AvatarFallback variant="boring" name="Grace Hopper" />
      </Avatar>
      <Avatar className="size-12">
        <AvatarFallback variant="boring" name="Alan Turing" />
      </Avatar>
    </div>
}`,...t.parameters?.docs?.source}}};const A=["Default","Playground"];export{e as Default,t as Playground,A as __namedExportsOrder,p as default};
