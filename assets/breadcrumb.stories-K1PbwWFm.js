import{j as r}from"./iframe-Bbi4Wu2n.js";import{B as t,a as c,b as e,c as s,d as n,e as d,f as i}from"./breadcrumb-A-ps8rNc.js";import{B as u}from"./button-BNkMhcgE.js";import{D as p,a}from"./dropdown-menu-Csot05dx.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./chevron-right-CBEdJtPr.js";import"./createLucideIcon-DdVe-9hA.js";import"./index-Bidb2Gkj.js";import"./spinner-CHmihI9Z.js";import"./visually-hidden-I3NbyvUx.js";import"./index-cXaQtA9H.js";import"./useFocusRing-Cr6_nyWp.js";import"./index-CxVl0uTJ.js";import"./index-CyhagWGm.js";import"./use-resolve-button-type-ngWtVHmY.js";import"./keyboard-CNKbYmCx.js";import"./use-sync-refs-vr87eQ-t.js";import"./floating-B37oCl7H.js";import"./element-movement-DfgC75Da.js";import"./bugs-C4Onqh7Z.js";import"./portal-5kpVsE14.js";import"./focus-management-CbAavFFR.js";import"./use-inert-others-BtWbgvz8.js";import"./use-text-value-QFw6-oBq.js";import"./open-closed-BTRjoMdZ.js";import"./use-tree-walker-Cll4U2WQ.js";import"./description-CyMAbnov.js";import"./label-Dw6w6Mri.js";import"./transition-uwG0W11Z.js";import"./use-is-mounted-Doms6kij.js";const Q={title:"Components/Breadcrumb"};function m(){return r.jsx(t,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(s,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsxs(p,{align:"left",trigger:r.jsxs(u,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(d,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(a,{children:"Documentation"}),r.jsx(a,{children:"Themes"}),r.jsx(a,{children:"GitHub"})]})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(s,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(i,{children:"Breadcrumb"})})]})})}const o={args:{collapsed:!0},render:l=>{const b=l.collapsed??!0;return r.jsx(t,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(s,{href:"/",children:"Home"})}),r.jsx(n,{}),b?r.jsx(e,{children:r.jsxs(p,{align:"left",trigger:r.jsxs(u,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(d,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(a,{children:"Documentation"}),r.jsx(a,{children:"Themes"}),r.jsx(a,{children:"GitHub"})]})}):r.jsx(e,{children:r.jsx(s,{href:"/docs",children:"Docs"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(s,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(i,{children:"Breadcrumb"})})]})})}};m.__docgenInfo={description:"",methods:[],displayName:"Default"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`function Default() {
  return <Breadcrumb>
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
    </Breadcrumb>;
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    collapsed: true
  } as {
    collapsed: boolean;
  },
  render: args => {
    const collapsed = (args as {
      collapsed?: boolean;
    }).collapsed ?? true;
    return <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {collapsed ? <BreadcrumbItem>
              <DropdownMenu align="left" trigger={<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>}>
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </DropdownMenu>
            </BreadcrumbItem> : <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>}

          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>;
  }
}`,...o.parameters?.docs?.source}}};const U=["Default","Playground"];export{m as Default,o as Playground,U as __namedExportsOrder,Q as default};
