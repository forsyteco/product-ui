import{j as r}from"./iframe-DB_8LERs.js";import{B as t,a as c,b as e,c as m,d as n,e as d,f as u}from"./breadcrumb-TtSt_95I.js";import{D as i,a}from"./dropdown-menu-KVSa8lIB.js";import{B as l}from"./button-vlU5xtrA.js";import"./preload-helper-DEha_CyH.js";import"./icons-CzXpEKn9.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./index-CkTiO7R5.js";import"./use-resolve-button-type-BN55sZyI.js";import"./keyboard-Cg7wVIGU.js";import"./use-sync-refs-Bj63Ftjs.js";import"./index-Ttl_GQoe.js";import"./index-bUy05opc.js";import"./floating-BNmG-KQQ.js";import"./bugs-BEdUOfH9.js";import"./use-inert-others-B4vXUOtL.js";import"./portal-B6vRqhM6.js";import"./focus-management-J3wIshax.js";import"./open-closed-B_WZ0Ptj.js";import"./description-BJEpHxQD.js";import"./label-Cm1qdzgx.js";import"./transition-X2I_VvM6.js";import"./use-is-mounted-DcWOo35A.js";import"./index-B8k91cqS.js";import"./spinner-DLtEokUl.js";const q={title:"Components/Breadcrumb"};function s(){return r.jsx(t,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(m,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsxs(i,{align:"left",trigger:r.jsxs(l,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(d,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(a,{children:"Documentation"}),r.jsx(a,{children:"Themes"}),r.jsx(a,{children:"GitHub"})]})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(m,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(u,{children:"Breadcrumb"})})]})})}const o={args:{collapsed:!0},render:p=>{const b=p.collapsed??!0;return r.jsx(t,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(m,{href:"/",children:"Home"})}),r.jsx(n,{}),b?r.jsx(e,{children:r.jsxs(i,{align:"left",trigger:r.jsxs(l,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(d,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(a,{children:"Documentation"}),r.jsx(a,{children:"Themes"}),r.jsx(a,{children:"GitHub"})]})}):r.jsx(e,{children:r.jsx(m,{href:"/docs",children:"Docs"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(m,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(u,{children:"Breadcrumb"})})]})})}};s.__docgenInfo={description:"",methods:[],displayName:"Default"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`function Default() {
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
}`,...o.parameters?.docs?.source}}};const A=["Default","Playground"];export{s as Default,o as Playground,A as __namedExportsOrder,q as default};
