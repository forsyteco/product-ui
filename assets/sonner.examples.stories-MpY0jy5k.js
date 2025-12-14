import{j as t}from"./iframe-CeYd32X8.js";import{S as r,t as s}from"./sonner-C2M4RXr5.js";import{B as a}from"./button-CxpgOoq8.js";import{C as o,a as n,b as i,c as d,d as m}from"./card-CHfrFRjV.js";import"./preload-helper-DEha_CyH.js";import"./index-DYyT_JbS.js";import"./index-Fzrzh3PM.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const g={title:"Components/Sonner/Examples",component:r,parameters:{layout:"padded"}},e={render:()=>t.jsxs("div",{className:"max-w-md",children:[t.jsx(r,{}),t.jsxs(o,{children:[t.jsx(n,{children:t.jsx(i,{children:"Notifications"})}),t.jsx(d,{children:t.jsx("p",{className:"text-sm text-muted-foreground",children:"Trigger toasts from anywhere; the toaster stays at the app root."})}),t.jsxs(m,{className:"justify-end gap-2",children:[t.jsx(a,{variant:"outline",onClick:()=>s.message("Heads up",{description:"This is a neutral toast."}),children:"Preview"}),t.jsx(a,{onClick:()=>s.success("All set!"),children:"Notify"})]})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <Sonner />
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
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
}`,...e.parameters?.docs?.source}}};const N=["InlineCTA"];export{e as InlineCTA,N as __namedExportsOrder,g as default};
