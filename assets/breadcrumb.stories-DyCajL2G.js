import{j as r}from"./iframe-D3jKVOAj.js";import{B as t,a as c,b as e,c as s,d as n,e as d,f as i}from"./breadcrumb-Dj5xLsce.js";import{B as u}from"./button-B1vOep6r.js";import{D as p,a}from"./dropdown-menu-D5m6NvKT.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./chevron-right-Bv8-NISR.js";import"./createLucideIcon-Dznipqy2.js";import"./index-Da1CAtoD.js";import"./spinner-BCVrcFZ9.js";import"./index-B8k91cqS.js";import"./use-resolve-button-type-CHu-IHbp.js";import"./keyboard-DAnX0onh.js";import"./use-sync-refs-BsLWer34.js";import"./index-DblNVS2F.js";import"./index-DkyIaSV8.js";import"./floating-CzaD3CZv.js";import"./element-movement-BFKRJJPB.js";import"./bugs-BRsUgAr4.js";import"./portal-CZXLTeWu.js";import"./focus-management-DHNzSoTK.js";import"./use-inert-others-DEuSaTbp.js";import"./use-text-value-tZf3phNg.js";import"./open-closed-xuvlXUtj.js";import"./use-tree-walker-BlTKSlh5.js";import"./description-BI_r7w1n.js";import"./label-h5Z1rYct.js";import"./transition-efCur0R6.js";import"./use-is-mounted-C3l38Mge.js";const K={title:"Components/Breadcrumb"};function m(){return r.jsx(t,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(s,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsxs(p,{align:"left",trigger:r.jsxs(u,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(d,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(a,{children:"Documentation"}),r.jsx(a,{children:"Themes"}),r.jsx(a,{children:"GitHub"})]})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(s,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(i,{children:"Breadcrumb"})})]})})}const o={args:{collapsed:!0},render:l=>{const b=l.collapsed??!0;return r.jsx(t,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(s,{href:"/",children:"Home"})}),r.jsx(n,{}),b?r.jsx(e,{children:r.jsxs(p,{align:"left",trigger:r.jsxs(u,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(d,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(a,{children:"Documentation"}),r.jsx(a,{children:"Themes"}),r.jsx(a,{children:"GitHub"})]})}):r.jsx(e,{children:r.jsx(s,{href:"/docs",children:"Docs"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(s,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(i,{children:"Breadcrumb"})})]})})}};m.__docgenInfo={description:"",methods:[],displayName:"Default"};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`function Default() {
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
}`,...o.parameters?.docs?.source}}};const Q=["Default","Playground"];export{m as Default,o as Playground,Q as __namedExportsOrder,K as default};
