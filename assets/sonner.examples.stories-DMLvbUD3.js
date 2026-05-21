import{j as t}from"./iframe-rkvXkcPn.js";import{S as s,t as a}from"./sonner-BXIslc7V.js";import{B as r}from"./button-CxtlPf_U.js";import{C as o,a as i,b as n,c as d,d as m}from"./card-HDdcJfwU.js";import"./preload-helper-DEha_CyH.js";import"./index-Cq7Zl3Z-.js";import"./index-CETgZHFe.js";import"./tailwind-CDN07tui.js";import"./spinner-BENKnx41.js";import"./visually-hidden-CzgnCfci.js";import"./index-cXaQtA9H.js";const y={title:"Components/Sonner/Examples",component:s,parameters:{layout:"padded"}},e={render:()=>t.jsxs("div",{className:"max-w-md",children:[t.jsx(s,{}),t.jsxs(o,{children:[t.jsx(i,{children:t.jsx(n,{children:"Notifications"})}),t.jsx(d,{children:t.jsx("p",{className:"text-base text-muted-foreground",children:"Trigger toasts from anywhere; the toaster stays at the app root."})}),t.jsxs(m,{className:"justify-end gap-2",children:[t.jsx(r,{variant:"outline",onClick:()=>a.message("Heads up",{description:"This is a neutral toast."}),children:"Preview"}),t.jsx(r,{onClick:()=>a.success("All set!"),children:"Notify"})]})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const T=["InlineCTA"];export{e as InlineCTA,T as __namedExportsOrder,y as default};
