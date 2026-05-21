import{j as r}from"./iframe-CxYaNlfa.js";import{B as i}from"./button-hQaN4FMQ.js";import{D as u,a as t}from"./dropdown-menu-CYzoAf-U.js";import{B as s,a as c,b as e,c as o,d as m,e as p,f as d}from"./breadcrumb-dwkS_Pth.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./spinner-3-TdU7zT.js";import"./visually-hidden-0Sws8sXy.js";import"./index-cXaQtA9H.js";import"./useFocusRing-BD5DFmH8.js";import"./index-C20LchO5.js";import"./index-BjqpgS9N.js";import"./use-resolve-button-type-DZDd8gts.js";import"./keyboard-B83W2K4O.js";import"./use-sync-refs-CzTZ0nVq.js";import"./floating-CGSfTM2Z.js";import"./element-movement-DUP2O6Fs.js";import"./bugs-B1TOvFeJ.js";import"./portal-CbQ4upMP.js";import"./focus-management-ClluBnCx.js";import"./use-inert-others-B76WlhWb.js";import"./use-text-value-Bk4hOsZm.js";import"./open-closed-B5Dl-UPG.js";import"./use-tree-walker-DQkVVWnR.js";import"./description-C8AuhUpm.js";import"./label-DQ-YvZ8u.js";import"./transition-DZKFvljt.js";import"./use-is-mounted-DZa0474T.js";import"./chevron-right-DMCXcDNg.js";import"./createLucideIcon-DrDZjbcm.js";import"./index-DRbLVKWy.js";const A={title:"Components/Breadcrumb/Features",component:s,parameters:{layout:"centered"}},a={render:()=>r.jsx(s,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(m,{children:"/"}),r.jsx(e,{children:r.jsx(o,{href:"/docs",children:"Docs"})}),r.jsx(m,{children:"/"}),r.jsx(e,{children:r.jsx(d,{children:"Breadcrumb"})})]})})},n={render:()=>r.jsx(s,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(m,{}),r.jsx(e,{children:r.jsxs(u,{align:"left",trigger:r.jsxs(i,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(p,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(t,{children:"Documentation"}),r.jsx(t,{children:"Themes"}),r.jsx(t,{children:"GitHub"})]})}),r.jsx(m,{}),r.jsx(e,{children:r.jsx(o,{href:"/docs/components",children:"Components"})}),r.jsx(m,{}),r.jsx(e,{children:r.jsx(d,{children:"Breadcrumb"})})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const J=["WithCustomSeparator","CollapsedWithDropdown"];export{n as CollapsedWithDropdown,a as WithCustomSeparator,J as __namedExportsOrder,A as default};
