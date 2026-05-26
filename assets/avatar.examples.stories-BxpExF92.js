import{j as a}from"./iframe-DB_8LERs.js";import{A as s,b as t}from"./avatar-DIDD8whM.js";import{C as d,a as m,b as i,c as o}from"./card-CM4Ya8dU.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./index-Ttl_GQoe.js";import"./index-bUy05opc.js";import"./index-CkTiO7R5.js";import"./index-DgJZX215.js";const h={title:"Components/Avatar/Examples",component:s,parameters:{layout:"padded"}},e={render:()=>a.jsx("div",{className:"max-w-md",children:a.jsxs(d,{children:[a.jsx(m,{children:a.jsx(i,{children:"Team"})}),a.jsx(o,{className:"space-y-3",children:["Ada Lovelace","Grace Hopper","Alan Turing"].map(r=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(s,{children:a.jsx(t,{variant:"boring",name:r})}),a.jsx("div",{className:"text-base",children:r})]},r))})]})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
