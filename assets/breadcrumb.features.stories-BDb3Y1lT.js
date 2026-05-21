import{j as r}from"./iframe-2gSw_mv2.js";import{B as i}from"./button-CJEJXt86.js";import{D as u,a as t}from"./dropdown-menu-A41mCkuQ.js";import{B as s,a as c,b as e,c as o,d as m,e as p,f as d}from"./breadcrumb-RRi_MJmC.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-mOKOfvx7.js";import"./index-B8k91cqS.js";import"./use-resolve-button-type-BJkWDc_4.js";import"./keyboard-BaAOKfHq.js";import"./use-sync-refs-DmqRrsUT.js";import"./index-CfTXRGMP.js";import"./index-DkkTbRiJ.js";import"./floating-C3szj9N5.js";import"./element-movement-C7gX0vvO.js";import"./bugs-CQkR_j0_.js";import"./portal-Bro9fcSW.js";import"./focus-management-COn_JIX_.js";import"./use-inert-others-CkKm98KO.js";import"./use-text-value-IbULVnbX.js";import"./open-closed-BO3DqZNu.js";import"./use-tree-walker-C36I32p-.js";import"./description-BdFui_Rt.js";import"./label-DHV5xTYx.js";import"./transition-Z9UdXWaL.js";import"./use-is-mounted-DGx9NqFv.js";import"./chevron-right-BVoF0DKj.js";import"./createLucideIcon-DBgTOM77.js";import"./index-BlGhXP66.js";const q={title:"Components/Breadcrumb/Features",component:s,parameters:{layout:"centered"}},a={render:()=>r.jsx(s,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(m,{children:"/"}),r.jsx(e,{children:r.jsx(o,{href:"/docs",children:"Docs"})}),r.jsx(m,{children:"/"}),r.jsx(e,{children:r.jsx(d,{children:"Breadcrumb"})})]})})},n={render:()=>r.jsx(s,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(m,{}),r.jsx(e,{children:r.jsxs(u,{align:"left",trigger:r.jsxs(i,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(p,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(t,{children:"Documentation"}),r.jsx(t,{children:"Themes"}),r.jsx(t,{children:"GitHub"})]})}),r.jsx(m,{}),r.jsx(e,{children:r.jsx(o,{href:"/docs/components",children:"Components"})}),r.jsx(m,{}),r.jsx(e,{children:r.jsx(d,{children:"Breadcrumb"})})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
