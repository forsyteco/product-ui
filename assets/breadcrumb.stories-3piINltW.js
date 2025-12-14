import{j as r}from"./iframe-CeYd32X8.js";import{B as t,a as c,b as e,c as m,d as n,f as d,e as u}from"./breadcrumb-CSpTSebs.js";import{B as i}from"./button-CxpgOoq8.js";import{D as l,a}from"./dropdown-menu-BbbivKPQ.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./chevron-right-4Jt43FCb.js";import"./index-MExojUzn.js";import"./index-cXaQtA9H.js";import"./useFocusRing-DXUggmaQ.js";import"./index-DYyT_JbS.js";import"./index-Fzrzh3PM.js";import"./use-resolve-button-type-FwMgqBLi.js";import"./keyboard-BoF71p42.js";import"./use-sync-refs-ry5utqyI.js";import"./floating-Bn-YBmfF.js";import"./element-movement-DB0a6a5I.js";import"./bugs-Red6znm7.js";import"./portal-0gor4Twm.js";import"./focus-management-DoY0kjxM.js";import"./use-inert-others-BnO2WJMG.js";import"./use-text-value-BL9_cAMK.js";import"./open-closed-DQGie1tM.js";import"./use-tree-walker-Da_nU_r_.js";import"./description-9wIlOIiQ.js";import"./label-CAGnDoa2.js";import"./transition-ChhotIx-.js";import"./use-is-mounted-De8ms31j.js";const F={title:"Components/Breadcrumb"};function s(){return r.jsx(t,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(m,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsxs(l,{align:"left",trigger:r.jsxs(i,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(d,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(a,{children:"Documentation"}),r.jsx(a,{children:"Themes"}),r.jsx(a,{children:"GitHub"})]})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(m,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(u,{children:"Breadcrumb"})})]})})}const o={args:{collapsed:!0},render:p=>{const b=p.collapsed??!0;return r.jsx(t,{children:r.jsxs(c,{children:[r.jsx(e,{children:r.jsx(m,{href:"/",children:"Home"})}),r.jsx(n,{}),b?r.jsx(e,{children:r.jsxs(l,{align:"left",trigger:r.jsxs(i,{variant:"ghost",size:"sm",className:"h-8 w-8 p-0",children:[r.jsx(d,{className:"h-4 w-4"}),r.jsx("span",{className:"sr-only",children:"Toggle menu"})]}),children:[r.jsx(a,{children:"Documentation"}),r.jsx(a,{children:"Themes"}),r.jsx(a,{children:"GitHub"})]})}):r.jsx(e,{children:r.jsx(m,{href:"/docs",children:"Docs"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(m,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(e,{children:r.jsx(u,{children:"Breadcrumb"})})]})})}};s.__docgenInfo={description:"",methods:[],displayName:"Default"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`function Default() {
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
}`,...o.parameters?.docs?.source}}};const J=["Default","Playground"];export{s as Default,o as Playground,J as __namedExportsOrder,F as default};
