import{j as r}from"./iframe-CNYYlD36.js";import{B as i}from"./button-Bn0tC0DV.js";import{D as u,a as t}from"./dropdown-menu-pb9FF72M.js";import{B as s,a as c,b as e,c as o,d as m,e as d,f as p}from"./breadcrumb-Bi2jVgYf.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-C4fSfmyf.js";import"./index-DYwh5NA3.js";import"./index-D4rEHvpE.js";import"./use-resolve-button-type-C9PyahDA.js";import"./keyboard-DtISN8rn.js";import"./use-sync-refs-DZgQMG1Q.js";import"./floating-DCZWDNJE.js";import"./element-movement-BlCQH2Fn.js";import"./bugs-SeIKBOFb.js";import"./portal-_z1lZ7UR.js";import"./focus-management-DeCdYFst.js";import"./use-inert-others-Dq6Q-G8N.js";import"./use-text-value-AWhdhCcv.js";import"./open-closed-By9Rj1dh.js";import"./use-tree-walker-DvucGxYg.js";import"./description-D1PW4E0C.js";import"./label-DgKDHCQR.js";import"./transition-BXx9RqTX.js";import"./use-is-mounted-DeNyIpkm.js";import"./chevron-right-BDkENKGb.js";import"./createLucideIcon-DZo8MJhi.js";import"./index-CTu1W4Ip.js";const R={title:"Components/Breadcrumb/Features",component:s,parameters:{layout:"centered"}},a={render:()=>r.jsx(s,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(m,{children:"/"}),r.jsx(e,{children:r.jsx(o,{href:"/docs",children:"Docs"})}),r.jsx(m,{children:"/"}),r.jsx(e,{children:r.jsx(d,{children:"Breadcrumb"})})]})})},n={render:()=>r.jsx(s,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(o,{href:"/",children:"Home"})}),r.jsx(m,{}),r.jsx(e,{children:r.jsxs(u,{align:"left",trigger:r.jsxs(i,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(p,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(t,{children:"Documentation"}),r.jsx(t,{children:"Themes"}),r.jsx(t,{children:"GitHub"})]})}),r.jsx(m,{}),r.jsx(e,{children:r.jsx(o,{href:"/docs/components",children:"Components"})}),r.jsx(m,{}),r.jsx(e,{children:r.jsx(d,{children:"Breadcrumb"})})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
