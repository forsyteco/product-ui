import{j as r}from"./iframe-BhlZj2rS.js";import{D as i,a as s}from"./dropdown-menu-sySg_R68.js";import{B as t,a as c,b as e,c as o,d as m,e as u,f as d}from"./breadcrumb-C_S6Ynwq.js";import{B as p}from"./button-BM_dnC24.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-DjO1Pm5h.js";import"./keyboard-Dpdv_eif.js";import"./use-sync-refs-UgM7LPID.js";import"./index-C03jWAjy.js";import"./index-BJjS-fqn.js";import"./floating-CxCsyGBc.js";import"./bugs--ObFGqBE.js";import"./use-inert-others-BxoNIx0z.js";import"./portal-CxMlnORm.js";import"./focus-management-BfeyzjOS.js";import"./open-closed-Cv3xDOeT.js";import"./description-C355DR4L.js";import"./label-ZRjmH7ix.js";import"./transition-C20YNXKL.js";import"./use-is-mounted-Bo8jgdGA.js";import"./icons-CIWVbh4B.js";import"./index-Cpua7QX2.js";import"./index-B8k91cqS.js";import"./spinner-D97pmidu.js";const _={title:"Components/Breadcrumb/Features",component:t,parameters:{layout:"centered"}},a={render:()=>r.jsx(t,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(m,{children:"/"}),r.jsx(e,{children:r.jsx(o,{href:"/docs",children:"Docs"})}),r.jsx(m,{children:"/"}),r.jsx(e,{children:r.jsx(d,{children:"Breadcrumb"})})]})})},n={render:()=>r.jsx(t,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(m,{}),r.jsx(e,{children:r.jsxs(i,{align:"left",trigger:r.jsxs(p,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(u,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(s,{children:"Documentation"}),r.jsx(s,{children:"Themes"}),r.jsx(s,{children:"GitHub"})]})}),r.jsx(m,{}),r.jsx(e,{children:r.jsx(o,{href:"/docs/components",children:"Components"})}),r.jsx(m,{}),r.jsx(e,{children:r.jsx(d,{children:"Breadcrumb"})})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const F=["WithCustomSeparator","CollapsedWithDropdown"];export{n as CollapsedWithDropdown,a as WithCustomSeparator,F as __namedExportsOrder,_ as default};
