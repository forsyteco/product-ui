import{j as r}from"./iframe-DCut3pB0.js";import{B as i}from"./button-UjEabEsX.js";import{D as u,a as t}from"./dropdown-menu-CDKn_LIc.js";import{B as s,a as c,b as e,c as o,d as m,e as d,f as p}from"./breadcrumb-O1U-kXA7.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DTcOx15S.js";import"./index-Cw_6tGoc.js";import"./index-DK0opmzF.js";import"./use-resolve-button-type-DEn31ueC.js";import"./keyboard-BxH3F2n_.js";import"./use-sync-refs-GHuczuXX.js";import"./floating-CAOHwN0g.js";import"./element-movement-BTrBB4aI.js";import"./bugs-re273FY1.js";import"./portal-CU9rp48T.js";import"./focus-management-B-XE9RWC.js";import"./use-inert-others-Ct0UT_kG.js";import"./use-text-value-B3aeoHUd.js";import"./open-closed-DhS47DzH.js";import"./use-tree-walker-5TpjLfCZ.js";import"./description-Rd-Cv9GD.js";import"./label-IgrQDxQ7.js";import"./transition-C7s_CYoK.js";import"./use-is-mounted-89YuhHe8.js";import"./chevron-right-DIdlI3AV.js";import"./createLucideIcon-D86dAf78.js";import"./index-Cqw2uO8X.js";const R={title:"Components/Breadcrumb/Features",component:s,parameters:{layout:"centered"}},a={render:()=>r.jsx(s,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(m,{children:"/"}),r.jsx(e,{children:r.jsx(o,{href:"/docs",children:"Docs"})}),r.jsx(m,{children:"/"}),r.jsx(e,{children:r.jsx(d,{children:"Breadcrumb"})})]})})},n={render:()=>r.jsx(s,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(m,{}),r.jsx(e,{children:r.jsxs(u,{align:"left",trigger:r.jsxs(i,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(p,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(t,{children:"Documentation"}),r.jsx(t,{children:"Themes"}),r.jsx(t,{children:"GitHub"})]})}),r.jsx(m,{}),r.jsx(e,{children:r.jsx(o,{href:"/docs/components",children:"Components"})}),r.jsx(m,{}),r.jsx(e,{children:r.jsx(d,{children:"Breadcrumb"})})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const q=["WithCustomSeparator","CollapsedWithDropdown"];export{n as CollapsedWithDropdown,a as WithCustomSeparator,q as __namedExportsOrder,R as default};
