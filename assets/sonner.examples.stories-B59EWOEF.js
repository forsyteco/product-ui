import{j as t}from"./iframe-Bsx-Ou2Z.js";import{S as s,t as a}from"./sonner-CNJZ1FxV.js";import{B as r}from"./button-MA4SzPI9.js";import{C as o,a as n,b as i,c as d,d as m}from"./card-ZQhU151I.js";import"./preload-helper-DEha_CyH.js";import"./index-BWTGCpOW.js";import"./index-BC68ImjR.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";const N={title:"Components/Sonner/Examples",component:s,parameters:{layout:"padded"}},e={render:()=>t.jsxs("div",{className:"max-w-md",children:[t.jsx(s,{}),t.jsxs(o,{children:[t.jsx(n,{children:t.jsx(i,{children:"Notifications"})}),t.jsx(d,{children:t.jsx("p",{className:"text-base text-muted-foreground",children:"Trigger toasts from anywhere; the toaster stays at the app root."})}),t.jsxs(m,{className:"justify-end gap-2",children:[t.jsx(r,{variant:"outline",onClick:()=>a.message("Heads up",{description:"This is a neutral toast."}),children:"Preview"}),t.jsx(r,{onClick:()=>a.success("All set!"),children:"Notify"})]})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <Sonner />
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base text-muted-foreground">
            Trigger toasts from anywhere; the toaster stays at the app root.
          </p>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline" onClick={() => toast.message('Heads up', {
          description: 'This is a neutral toast.'
        })}>
            Preview
          </Button>
          <Button onClick={() => toast.success('All set!')}>Notify</Button>
        </CardFooter>
      </Card>
    </div>
}`,...e.parameters?.docs?.source}}};const y=["InlineCTA"];export{e as InlineCTA,y as __namedExportsOrder,N as default};
