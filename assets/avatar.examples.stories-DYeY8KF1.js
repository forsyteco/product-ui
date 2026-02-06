import{j as a}from"./iframe-BZ1wujjQ.js";import{C as t,a as d,b as m,c as i}from"./card-qE5ZaRgi.js";import{A as s,a as n}from"./avatar-B9rFYNOs.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./index-W2FIh6FJ.js";import"./index-imFVSO3i.js";import"./index-c8h9FKTR.js";const A={title:"Components/Avatar/Examples",component:s,parameters:{layout:"padded"}},e={render:()=>a.jsx("div",{className:"max-w-md",children:a.jsxs(t,{children:[a.jsx(d,{children:a.jsx(m,{children:"Team"})}),a.jsx(i,{className:"space-y-3",children:["Ada Lovelace","Grace Hopper","Alan Turing"].map(r=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(s,{children:a.jsx(n,{variant:"boring",name:r})}),a.jsx("div",{className:"text-base",children:r})]},r))})]})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const b=["MemberList"];export{e as MemberList,b as __namedExportsOrder,A as default};
