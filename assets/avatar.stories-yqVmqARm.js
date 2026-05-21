import{j as a}from"./iframe-B_2llF5Y.js";import{A as r,a as s,b as n}from"./avatar-CETDWVED.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./index-DWBCX9CX.js";import"./index-DMaG-6Cr.js";import"./index-DLxW_4PJ.js";import"./index-CORXN6_2.js";const g={title:"Components/Avatar",component:r,parameters:{layout:"centered",docs:{description:{component:"Avatar primitive with image and fallbacks (initials or boring avatar)."}}},tags:["autodocs"]},e={render:()=>a.jsxs(r,{children:[a.jsx(s,{alt:"Avatar"}),a.jsx(n,{variant:"initials",name:"Ada Lovelace"})]})},t={render:()=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(r,{children:a.jsx(n,{variant:"initials",name:"Ada Lovelace"})}),a.jsx(r,{children:a.jsx(n,{variant:"boring",name:"Grace Hopper"})}),a.jsx(r,{className:"size-12",children:a.jsx(n,{variant:"boring",name:"Alan Turing"})})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const u=["Default","Playground"];export{e as Default,t as Playground,u as __namedExportsOrder,g as default};
