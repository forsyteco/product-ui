import{j as e}from"./iframe-CNYYlD36.js";import{B as n}from"./button-Bn0tC0DV.js";import{C as t,a as d,b as l,e as i,c as o,d as c}from"./card-CR_P1fY6.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const h={title:"Components/Card/Examples",component:t,parameters:{layout:"padded"}},a={render:()=>e.jsx("div",{className:"max-w-md",children:e.jsxs(t,{children:[e.jsxs(d,{children:[e.jsx(l,{children:"Forsyteco Starter"}),e.jsx(i,{children:"Everything you need to get started quickly."})]}),e.jsx(o,{children:e.jsxs("ul",{className:"space-y-2 text-base",children:[e.jsxs("li",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"Projects"}),e.jsx("span",{children:"Unlimited"})]}),e.jsxs("li",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"Support"}),e.jsx("span",{children:"Standard"})]}),e.jsxs("li",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-muted-foreground",children:"Users"}),e.jsx("span",{children:"10"})]})]})}),e.jsxs(c,{className:"justify-end gap-2",children:[e.jsx(n,{variant:"outline",children:"Learn more"}),e.jsx(n,{children:"Choose plan"})]})]})})},s={render:()=>e.jsx("div",{className:"grid gap-4 md:grid-cols-3",children:[{label:"Revenue",value:"$42,300"},{label:"Active users",value:"1,284"},{label:"Uptime",value:"99.98%"}].map(r=>e.jsxs(t,{children:[e.jsxs(d,{children:[e.jsx(i,{children:r.label}),e.jsx(l,{children:r.value})]}),e.jsx(o,{children:e.jsx("div",{className:"h-10 rounded-md bg-muted"})})]},r.label))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <Card>
        <CardHeader>
          <CardTitle>Forsyteco Starter</CardTitle>
          <CardDescription>Everything you need to get started quickly.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-base">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Projects</span>
              <span>Unlimited</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Support</span>
              <span>Standard</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">Users</span>
              <span>10</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="justify-end gap-2">
          <Button variant="outline">Learn more</Button>
          <Button>Choose plan</Button>
        </CardFooter>
      </Card>
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4 md:grid-cols-3">
      {[{
      label: 'Revenue',
      value: '$42,300'
    }, {
      label: 'Active users',
      value: '1,284'
    }, {
      label: 'Uptime',
      value: '99.98%'
    }].map(stat => <Card key={stat.label}>
          <CardHeader>
            <CardDescription>{stat.label}</CardDescription>
            <CardTitle>{stat.value}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-10 rounded-md bg-muted" />
          </CardContent>
        </Card>)}
    </div>
}`,...s.parameters?.docs?.source}}};const f=["ProductCard","StatGrid"];export{a as ProductCard,s as StatGrid,f as __namedExportsOrder,h as default};
