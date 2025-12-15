import{j as r}from"./iframe-CFsUuUqa.js";import{B as t,a as c,b as e,c as m,d as n,f as d,e as u}from"./breadcrumb--o8PHWoa.js";import{B as i}from"./button-DgkIOwa6.js";import{D as p,a}from"./dropdown-menu-C_KddZNs.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./chevron-right-DMzyu4Yu.js";import"./createLucideIcon-BeaWou7R.js";import"./index-GYqIrVES.js";import"./index-cXaQtA9H.js";import"./useFocusRing-BH9yhaj4.js";import"./index-D26-LCOM.js";import"./index-BsJ9ywC8.js";import"./use-resolve-button-type-DY7jbxIq.js";import"./keyboard-BjzAsI1V.js";import"./use-sync-refs-DycZJTrw.js";import"./floating-D0H9PoA7.js";import"./element-movement-CPeALCLL.js";import"./bugs-QgyXksVi.js";import"./portal-nsyrrPkk.js";import"./focus-management-kaFNE5_8.js";import"./use-inert-others-BjMmLUa1.js";import"./use-text-value-D_tGRDUD.js";import"./open-closed-C5hIdceC.js";import"./use-tree-walker-CZPzHwmU.js";import"./description-DJ3YnSma.js";import"./label-Da47qnUN.js";import"./transition-BRkwPxXr.js";import"./use-is-mounted-ByG5zrcv.js";const J={title:"Components/Breadcrumb"};function s(){return r.jsx(t,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(m,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsxs(p,{align:"left",trigger:r.jsxs(i,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(d,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(a,{children:"Documentation"}),r.jsx(a,{children:"Themes"}),r.jsx(a,{children:"GitHub"})]})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(m,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(u,{children:"Breadcrumb"})})]})})}const o={args:{collapsed:!0},render:l=>{const b=l.collapsed??!0;return r.jsx(t,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(m,{href:"/",children:"Home"})}),r.jsx(n,{}),b?r.jsx(e,{children:r.jsxs(p,{align:"left",trigger:r.jsxs(i,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(d,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(a,{children:"Documentation"}),r.jsx(a,{children:"Themes"}),r.jsx(a,{children:"GitHub"})]})}):r.jsx(e,{children:r.jsx(m,{href:"/docs",children:"Docs"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(m,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(u,{children:"Breadcrumb"})})]})})}};s.__docgenInfo={description:"",methods:[],displayName:"Default"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`function Default() {
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const K=["Default","Playground"];export{s as Default,o as Playground,K as __namedExportsOrder,J as default};
