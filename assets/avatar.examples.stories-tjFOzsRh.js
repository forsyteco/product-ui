import{j as a}from"./iframe-kqJoyzOv.js";import{C as t,a as d,b as m,c as i}from"./card-fHay2K8j.js";import{A as s,b as o}from"./avatar-DRzVnHl8.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./index-1PFnJZ_D.js";import"./index-qPEbv8Ah.js";import"./index-twYk3wrB.js";import"./index-BxaubcHK.js";const h={title:"Components/Avatar/Examples",component:s,parameters:{layout:"padded"}},e={render:()=>a.jsx("div",{className:"max-w-md",children:a.jsxs(t,{children:[a.jsx(d,{children:a.jsx(m,{children:"Team"})}),a.jsx(i,{className:"space-y-3",children:["Ada Lovelace","Grace Hopper","Alan Turing"].map(r=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(s,{children:a.jsx(o,{variant:"boring",name:r})}),a.jsx("div",{className:"text-base",children:r})]},r))})]})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Team</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {['Ada Lovelace', 'Grace Hopper', 'Alan Turing'].map(name => <div key={name} className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback variant="boring" name={name} />
              </Avatar>
              <div className="text-base">{name}</div>
            </div>)}
        </CardContent>
      </Card>
    </div>
}`,...e.parameters?.docs?.source}}};const u=["MemberList"];export{e as MemberList,u as __namedExportsOrder,h as default};
