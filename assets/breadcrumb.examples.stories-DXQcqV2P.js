import{j as r}from"./iframe-B_2llF5Y.js";import{D as u,a as c}from"./dropdown-menu-CLGJ8UIr.js";import{B as d,a as o,b as e,c as a,d as n,e as p,f as i}from"./breadcrumb-B9FBkpQc.js";import{B as t}from"./button-YhwC3Rez.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-DW8riF5w.js";import"./keyboard-QYgd7fbf.js";import"./use-sync-refs-CSzU11Xt.js";import"./index-DWBCX9CX.js";import"./index-DMaG-6Cr.js";import"./floating-But5v2Nt.js";import"./bugs-B3SymCFE.js";import"./use-inert-others-BzaBSUa_.js";import"./portal-I3ELlmnV.js";import"./focus-management-BFsEMdS0.js";import"./open-closed-x_SKEq2Y.js";import"./description-BI7dEA1n.js";import"./label-kLr608NI.js";import"./transition-BQaecAQy.js";import"./use-is-mounted-D64NyRxR.js";import"./icons-DgnY1Mue.js";import"./index-DLxW_4PJ.js";import"./index-B8k91cqS.js";import"./spinner-DhLtk9jQ.js";const G={title:"Components/Breadcrumb/Examples",component:d,parameters:{layout:"padded"}},m={render:()=>r.jsxs("div",{className:"flex items-center justify-between gap-6",children:[r.jsx(d,{children:r.jsxs(o,{children:[r.jsx(e,{children:r.jsx(a,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(a,{href:"/projects",children:"Projects"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(i,{children:"Forsyteco UI"})})]})}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(t,{variant:"outline",children:"Share"}),r.jsx(t,{children:"New"})]})]})},s={render:()=>r.jsx(d,{children:r.jsxs(o,{children:[r.jsx(e,{children:r.jsx(a,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(a,{href:"/docs",children:"Docs"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsxs(u,{align:"left",trigger:r.jsxs(t,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(p,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Open breadcrumb menu"})]}),children:[r.jsx(c,{children:"Guides"}),r.jsx(c,{children:"API"}),r.jsx(c,{children:"Changelog"})]})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(a,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(i,{children:"Breadcrumb"})})]})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center justify-between gap-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Forsyteco UI</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center gap-2">
        <Button variant="outline">Share</Button>
        <Button>New</Button>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu align="left" trigger={<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Open breadcrumb menu</span>
              </Button>}>
            <DropdownMenuItem>Guides</DropdownMenuItem>
            <DropdownMenuItem>API</DropdownMenuItem>
            <DropdownMenuItem>Changelog</DropdownMenuItem>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...s.parameters?.docs?.source}}};const U=["PageHeader","DeepHierarchy"];export{s as DeepHierarchy,m as PageHeader,U as __namedExportsOrder,G as default};
