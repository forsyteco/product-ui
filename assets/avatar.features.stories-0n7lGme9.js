import{j as a}from"./iframe-C3NiGLkr.js";import{A as e,a as s,b as n}from"./avatar-D878Pp-5.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./index-DNRP92Qz.js";import"./index-CEhDcc2E.js";import"./index-y1aZOt2s.js";const p={title:"Components/Avatar/Features",component:e,parameters:{layout:"centered"}},r={render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx(e,{className:"size-6",children:a.jsx(s,{variant:"initials",name:"Ada Lovelace"})}),a.jsx(e,{className:"size-8",children:a.jsx(s,{variant:"initials",name:"Ada Lovelace"})}),a.jsx(e,{className:"size-10",children:a.jsx(s,{variant:"initials",name:"Ada Lovelace"})}),a.jsx(e,{className:"size-12",children:a.jsx(s,{variant:"initials",name:"Ada Lovelace"})})]})},t={render:()=>a.jsxs(e,{className:"size-10",children:[a.jsx(n,{src:"https://this-domain-does-not-exist.example/avatar.png",alt:"Avatar"}),a.jsx(s,{variant:"boring",name:"Grace Hopper"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Avatar className="size-6">
        <AvatarFallback variant="initials" name="Ada Lovelace" />
      </Avatar>
      <Avatar className="size-8">
        <AvatarFallback variant="initials" name="Ada Lovelace" />
      </Avatar>
      <Avatar className="size-10">
        <AvatarFallback variant="initials" name="Ada Lovelace" />
      </Avatar>
      <Avatar className="size-12">
        <AvatarFallback variant="initials" name="Ada Lovelace" />
      </Avatar>
    </div>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Avatar className="size-10">
      <AvatarImage src="https://this-domain-does-not-exist.example/avatar.png" alt="Avatar" />
      <AvatarFallback variant="boring" name="Grace Hopper" />
    </Avatar>
}`,...t.parameters?.docs?.source}}};const A=["Sizes","ImageThenFallback"];export{t as ImageThenFallback,r as Sizes,A as __namedExportsOrder,p as default};
