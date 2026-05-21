import{j as r}from"./iframe-CItR6fGu.js";import{B as i}from"./button-T-BPDXWE.js";import{D as u,a as t}from"./dropdown-menu-D7KtDMMV.js";import{B as s,a as c,b as e,c as o,d as m,e as p,f as d}from"./breadcrumb-DZCo3tbM.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-DphlRdEr.js";import"./index-B8k91cqS.js";import"./use-resolve-button-type-BFmILeb_.js";import"./keyboard-8VRtqMCG.js";import"./use-sync-refs-CaS58R8u.js";import"./index-CNOo9puS.js";import"./index-B9rWXd0V.js";import"./floating-BsWb7cLr.js";import"./element-movement-CMyflZBM.js";import"./bugs-DpLPc2L_.js";import"./portal-DLX_yNr9.js";import"./focus-management-1bpFx2A3.js";import"./use-inert-others-b7zpTwIW.js";import"./use-text-value-BSjts503.js";import"./open-closed-McBZdwWe.js";import"./use-tree-walker-CU1YxDDt.js";import"./description-HwKmEHXT.js";import"./label-BrqWDG43.js";import"./transition-C4fNLC7i.js";import"./use-is-mounted-QDWdXCXc.js";import"./chevron-right-BLXpcJ8Q.js";import"./createLucideIcon-EyooAwAp.js";import"./index-DGnEXAPX.js";const q={title:"Components/Breadcrumb/Features",component:s,parameters:{layout:"centered"}},a={render:()=>r.jsx(s,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(m,{children:"/"}),r.jsx(e,{children:r.jsx(o,{href:"/docs",children:"Docs"})}),r.jsx(m,{children:"/"}),r.jsx(e,{children:r.jsx(d,{children:"Breadcrumb"})})]})})},n={render:()=>r.jsx(s,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(m,{}),r.jsx(e,{children:r.jsxs(u,{align:"left",trigger:r.jsxs(i,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(p,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(t,{children:"Documentation"}),r.jsx(t,{children:"Themes"}),r.jsx(t,{children:"GitHub"})]})}),r.jsx(m,{}),r.jsx(e,{children:r.jsx(o,{href:"/docs/components",children:"Components"})}),r.jsx(m,{}),r.jsx(e,{children:r.jsx(d,{children:"Breadcrumb"})})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <DropdownMenu align="left" trigger={<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <BreadcrumbEllipsis className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>}>
            <DropdownMenuItem>Documentation</DropdownMenuItem>
            <DropdownMenuItem>Themes</DropdownMenuItem>
            <DropdownMenuItem>GitHub</DropdownMenuItem>
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
}`,...n.parameters?.docs?.source}}};const A=["WithCustomSeparator","CollapsedWithDropdown"];export{n as CollapsedWithDropdown,a as WithCustomSeparator,A as __namedExportsOrder,q as default};
