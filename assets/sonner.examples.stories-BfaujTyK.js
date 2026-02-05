import{j as e}from"./iframe-CNYYlD36.js";import{S as r,t as a}from"./sonner-BFYVTiwa.js";import{B as s}from"./button-Bn0tC0DV.js";import{C as o,a as n,b as i,c as d,d as m}from"./card-CR_P1fY6.js";import"./preload-helper-DEha_CyH.js";import"./index-DYwh5NA3.js";import"./index-D4rEHvpE.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const g={title:"Components/Sonner/Examples",component:r,parameters:{layout:"padded"}},t={render:()=>e.jsxs("div",{className:"max-w-md",children:[e.jsx(r,{}),e.jsxs(o,{children:[e.jsx(n,{children:e.jsx(i,{children:"Notifications"})}),e.jsx(d,{children:e.jsx("p",{className:"text-base text-muted-foreground",children:"Trigger toasts from anywhere; the toaster stays at the app root."})}),e.jsxs(m,{className:"justify-end gap-2",children:[e.jsx(s,{variant:"outline",onClick:()=>a.message("Heads up",{description:"This is a neutral toast."}),children:"Preview"}),e.jsx(s,{onClick:()=>a.success("All set!"),children:"Notify"})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const N=["InlineCTA"];export{t as InlineCTA,N as __namedExportsOrder,g as default};
