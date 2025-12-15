import{j as r}from"./iframe-CFsUuUqa.js";import{B as c}from"./button-DgkIOwa6.js";import{D as u,a as t}from"./dropdown-menu-C_KddZNs.js";import{B as d,a as o,b as e,c as a,d as n,e as i,f as p}from"./breadcrumb--o8PHWoa.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BH9yhaj4.js";import"./index-D26-LCOM.js";import"./index-BsJ9ywC8.js";import"./use-resolve-button-type-DY7jbxIq.js";import"./keyboard-BjzAsI1V.js";import"./use-sync-refs-DycZJTrw.js";import"./floating-D0H9PoA7.js";import"./element-movement-CPeALCLL.js";import"./bugs-QgyXksVi.js";import"./portal-nsyrrPkk.js";import"./focus-management-kaFNE5_8.js";import"./use-inert-others-BjMmLUa1.js";import"./use-text-value-D_tGRDUD.js";import"./open-closed-C5hIdceC.js";import"./use-tree-walker-CZPzHwmU.js";import"./description-DJ3YnSma.js";import"./label-Da47qnUN.js";import"./transition-BRkwPxXr.js";import"./use-is-mounted-ByG5zrcv.js";import"./chevron-right-DMzyu4Yu.js";import"./createLucideIcon-BeaWou7R.js";import"./index-GYqIrVES.js";const R={title:"Components/Breadcrumb/Examples",component:d,parameters:{layout:"padded"}},m={render:()=>r.jsxs("div",{className:"flex items-center justify-between gap-6",children:[r.jsx(d,{children:r.jsxs(o,{children:[r.jsx(e,{children:r.jsx(a,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(a,{href:"/projects",children:"Projects"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(i,{children:"Forsyteco UI"})})]})}),r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(c,{variant:"outline",children:"Share"}),r.jsx(c,{children:"New"})]})]})},s={render:()=>r.jsx(d,{children:r.jsxs(o,{children:[r.jsx(e,{children:r.jsx(a,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(a,{href:"/docs",children:"Docs"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsxs(u,{align:"left",trigger:r.jsxs(c,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(p,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Open breadcrumb menu"})]}),children:[r.jsx(t,{children:"Guides"}),r.jsx(t,{children:"API"}),r.jsx(t,{children:"Changelog"})]})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(a,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(i,{children:"Breadcrumb"})})]})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const q=["PageHeader","DeepHierarchy"];export{s as DeepHierarchy,m as PageHeader,q as __namedExportsOrder,R as default};
