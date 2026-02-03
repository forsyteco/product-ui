import{j as e}from"./iframe-C3NiGLkr.js";import{P as i,a as l,b as o,c as d,d as c,e as m}from"./page-layout-BISbM-Ww.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";const v={title:"Components/PageLayout/Examples",component:i,parameters:{layout:"fullscreen"}};function a({title:t,children:g}){return e.jsxs("div",{className:"rounded-lg border bg-background p-4",children:[e.jsx("div",{className:"mb-2 text-sm font-medium",children:t}),e.jsx("div",{className:"text-sm text-muted-foreground",children:g})]})}const n={args:{children:null,containerWidth:"xlarge",padding:"normal",columnGap:"normal",rowGap:"normal"},render:()=>e.jsxs(i,{containerWidth:"xlarge",padding:"normal",columnGap:"normal",rowGap:"normal",children:[e.jsx(l,{divider:"none",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-lg font-semibold",children:"Dashboard"}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Overview"})]}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Last updated: just now"})]})}),e.jsxs(o,{children:[e.jsx(d,{className:"lg:col-span-9",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsx(a,{title:"KPIs",children:"Cards / charts go here"}),e.jsxs("div",{className:"grid gap-4 lg:grid-cols-2",children:[e.jsx(a,{title:"Work queue",children:"List"}),e.jsx(a,{title:"Alerts",children:"List"})]}),e.jsx(a,{title:"Recent activity",children:"Timeline"})]})}),e.jsx(c,{className:"lg:col-span-3",position:"end",sticky:!0,offsetHeader:0,children:e.jsxs("div",{className:"grid gap-4",children:[e.jsx(a,{title:"Quick actions",children:"Buttons"}),e.jsx(a,{title:"Context",children:"Selected matter/client details"})]})})]}),e.jsx(m,{divider:"line",children:e.jsx("div",{className:"text-sm text-muted-foreground",children:"© Forsyte"})})]})},s={args:{children:null,containerWidth:"large",padding:"normal",columnGap:"normal",rowGap:"normal"},render:()=>e.jsxs(i,{containerWidth:"large",padding:"normal",columnGap:"normal",rowGap:"normal",children:[e.jsx(l,{divider:"line",children:e.jsx("div",{className:"text-lg font-semibold",children:"Content-only page"})}),e.jsx(o,{children:e.jsx(d,{className:"lg:col-span-12",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsx(a,{title:"Form section",children:"Inputs"}),e.jsx(a,{title:"Form section",children:"Inputs"}),e.jsx(a,{title:"Form section",children:"Inputs"})]})})})]})},r={args:{children:null,containerWidth:"xlarge",padding:"normal",columnGap:"normal",rowGap:"normal"},render:()=>e.jsxs(i,{containerWidth:"xlarge",padding:"normal",columnGap:"normal",rowGap:"normal",children:[e.jsx(l,{divider:"none",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-lg font-semibold",children:"Settings"}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Account"})]})}),e.jsxs(o,{children:[e.jsx(c,{className:"lg:col-span-3",position:"start",sticky:!0,offsetHeader:0,children:e.jsx("div",{className:"grid gap-2",children:["Profile","Security","Billing","Integrations","Audit log"].map(t=>e.jsx("div",{className:"rounded-md border px-3 py-2 text-sm",children:t},t))})}),e.jsx(d,{className:"lg:col-span-9",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsx(a,{title:"Profile",children:"Main settings content"}),e.jsx(a,{title:"Preferences",children:"More settings"}),e.jsx(a,{title:"Danger zone",children:"Actions"})]})})]}),e.jsx(m,{divider:"line",children:e.jsx("div",{className:"text-sm text-muted-foreground",children:"v1alpha"})})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: null,
    containerWidth: 'xlarge',
    padding: 'normal',
    columnGap: 'normal',
    rowGap: 'normal'
  },
  render: () => <PageLayout containerWidth="xlarge" padding="normal" columnGap="normal" rowGap="normal">
      <PageLayoutHeader divider="none">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">Dashboard</div>
            <div className="text-sm text-muted-foreground">Overview</div>
          </div>
          <div className="text-sm text-muted-foreground">Last updated: just now</div>
        </div>
      </PageLayoutHeader>

      <PageLayoutBody>
        <PageLayoutContent className="lg:col-span-9">
          <div className="grid gap-4">
            <Panel title="KPIs">Cards / charts go here</Panel>
            <div className="grid gap-4 lg:grid-cols-2">
              <Panel title="Work queue">List</Panel>
              <Panel title="Alerts">List</Panel>
            </div>
            <Panel title="Recent activity">Timeline</Panel>
          </div>
        </PageLayoutContent>

        <PageLayoutPane className="lg:col-span-3" position="end" sticky offsetHeader={0}>
          <div className="grid gap-4">
            <Panel title="Quick actions">Buttons</Panel>
            <Panel title="Context">Selected matter/client details</Panel>
          </div>
        </PageLayoutPane>
      </PageLayoutBody>

      <PageLayoutFooter divider="line">
        <div className="text-sm text-muted-foreground">© Forsyte</div>
      </PageLayoutFooter>
    </PageLayout>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: null,
    containerWidth: 'large',
    padding: 'normal',
    columnGap: 'normal',
    rowGap: 'normal'
  },
  render: () => <PageLayout containerWidth="large" padding="normal" columnGap="normal" rowGap="normal">
      <PageLayoutHeader divider="line">
        <div className="text-lg font-semibold">Content-only page</div>
      </PageLayoutHeader>

      <PageLayoutBody>
        <PageLayoutContent className="lg:col-span-12">
          <div className="grid gap-4">
            <Panel title="Form section">Inputs</Panel>
            <Panel title="Form section">Inputs</Panel>
            <Panel title="Form section">Inputs</Panel>
          </div>
        </PageLayoutContent>
      </PageLayoutBody>
    </PageLayout>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: null,
    containerWidth: 'xlarge',
    padding: 'normal',
    columnGap: 'normal',
    rowGap: 'normal'
  },
  render: () => <PageLayout containerWidth="xlarge" padding="normal" columnGap="normal" rowGap="normal">
      <PageLayoutHeader divider="none">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Settings</div>
          <div className="text-sm text-muted-foreground">Account</div>
        </div>
      </PageLayoutHeader>

      <PageLayoutBody>
        <PageLayoutPane className="lg:col-span-3" position="start" sticky offsetHeader={0}>
          <div className="grid gap-2">
            {['Profile', 'Security', 'Billing', 'Integrations', 'Audit log'].map(item => <div key={item} className="rounded-md border px-3 py-2 text-sm">
                {item}
              </div>)}
          </div>
        </PageLayoutPane>

        <PageLayoutContent className="lg:col-span-9">
          <div className="grid gap-4">
            <Panel title="Profile">Main settings content</Panel>
            <Panel title="Preferences">More settings</Panel>
            <Panel title="Danger zone">Actions</Panel>
          </div>
        </PageLayoutContent>
      </PageLayoutBody>

      <PageLayoutFooter divider="line">
        <div className="text-sm text-muted-foreground">v1alpha</div>
      </PageLayoutFooter>
    </PageLayout>
}`,...r.parameters?.docs?.source}}};const h=["DashboardTwoColumn","ContentOnly","LeftPaneNavigation"];export{s as ContentOnly,n as DashboardTwoColumn,r as LeftPaneNavigation,h as __namedExportsOrder,v as default};
