import{j as r}from"./iframe-DB_8LERs.js";import{D as i,a as s}from"./dropdown-menu-KVSa8lIB.js";import{B as t,a as c,b as e,c as o,d as m,e as u,f as d}from"./breadcrumb-TtSt_95I.js";import{B as p}from"./button-vlU5xtrA.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-BN55sZyI.js";import"./keyboard-Cg7wVIGU.js";import"./use-sync-refs-Bj63Ftjs.js";import"./index-Ttl_GQoe.js";import"./index-bUy05opc.js";import"./floating-BNmG-KQQ.js";import"./bugs-BEdUOfH9.js";import"./use-inert-others-B4vXUOtL.js";import"./portal-B6vRqhM6.js";import"./focus-management-J3wIshax.js";import"./open-closed-B_WZ0Ptj.js";import"./description-BJEpHxQD.js";import"./label-Cm1qdzgx.js";import"./transition-X2I_VvM6.js";import"./use-is-mounted-DcWOo35A.js";import"./icons-CzXpEKn9.js";import"./index-CkTiO7R5.js";import"./index-B8k91cqS.js";import"./spinner-DLtEokUl.js";const _={title:"Components/Breadcrumb/Features",component:t,parameters:{layout:"centered"}},a={render:()=>r.jsx(t,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(m,{children:"/"}),r.jsx(e,{children:r.jsx(o,{href:"/docs",children:"Docs"})}),r.jsx(m,{children:"/"}),r.jsx(e,{children:r.jsx(d,{children:"Breadcrumb"})})]})})},n={render:()=>r.jsx(t,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(m,{}),r.jsx(e,{children:r.jsxs(i,{align:"left",trigger:r.jsxs(p,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(u,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(s,{children:"Documentation"}),r.jsx(s,{children:"Themes"}),r.jsx(s,{children:"GitHub"})]})}),r.jsx(m,{}),r.jsx(e,{children:r.jsx(o,{href:"/docs/components",children:"Components"})}),r.jsx(m,{}),r.jsx(e,{children:r.jsx(d,{children:"Breadcrumb"})})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
