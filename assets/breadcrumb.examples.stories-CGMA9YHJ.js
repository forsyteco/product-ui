import{j as r}from"./iframe-CGF0_A5u.js";import{B as c}from"./button-BQZjnb19.js";import{D as u,a as t}from"./dropdown-menu-DV7ShohW.js";import{B as o,a as d,b as e,c as a,d as n,e as p,f as i}from"./breadcrumb-Dvq6Zwtg.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-MP4NfyXZ.js";import"./index-B8k91cqS.js";import"./use-resolve-button-type-CoMikh-_.js";import"./keyboard-D86mmLzy.js";import"./use-sync-refs-BQJai7yY.js";import"./index-BF50FvRs.js";import"./index-D85rYT82.js";import"./floating-BBRF2GKr.js";import"./element-movement-BHB6z7Gj.js";import"./bugs-CmMcbd0d.js";import"./portal-CIPjWJEZ.js";import"./focus-management-DtCYyGj7.js";import"./use-inert-others-Bs_h4dt8.js";import"./use-text-value-BgIO7al6.js";import"./open-closed-VIqDAeBc.js";import"./use-tree-walker-CJwZbYoL.js";import"./description-Cg8HyQS4.js";import"./label-CK0kZ04v.js";import"./transition-DSDAgwnG.js";import"./use-is-mounted-B3msSAla.js";import"./chevron-right-sdF2BGiv.js";import"./createLucideIcon-Xi2hHOC2.js";import"./index-MrnTz2TE.js";const q={title:"Components/Breadcrumb/Examples",component:o,parameters:{layout:"padded"}},m={render:()=>r.jsxs("div",{className:"flex items-center justify-between gap-6",children:[r.jsx(o,{children:r.jsxs(d,{children:[r.jsx(e,{children:r.jsx(a,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(a,{href:"/projects",children:"Projects"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(i,{children:"Forsyteco UI"})})]})}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(c,{variant:"outline",children:"Share"}),r.jsx(c,{children:"New"})]})]})},s={render:()=>r.jsx(o,{children:r.jsxs(d,{children:[r.jsx(e,{children:r.jsx(a,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(a,{href:"/docs",children:"Docs"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsxs(u,{align:"left",trigger:r.jsxs(c,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(p,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Open breadcrumb menu"})]}),children:[r.jsx(t,{children:"Guides"}),r.jsx(t,{children:"API"}),r.jsx(t,{children:"Changelog"})]})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(a,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(i,{children:"Breadcrumb"})})]})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const J=["PageHeader","DeepHierarchy"];export{s as DeepHierarchy,m as PageHeader,J as __namedExportsOrder,q as default};
