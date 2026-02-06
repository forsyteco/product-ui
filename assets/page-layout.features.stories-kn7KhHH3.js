import{j as e}from"./iframe-BZ1wujjQ.js";import{P as o,a as n,b as l,c as d,d as c}from"./page-layout-BWUfsRqw.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";const h={title:"Components/PageLayout/Features",component:o,parameters:{layout:"fullscreen"}};function t({title:i,children:a}){return e.jsxs("div",{className:"rounded-lg border bg-background p-4",children:[e.jsx("div",{className:"mb-2 text-sm font-medium",children:i}),e.jsx("div",{className:"text-sm text-muted-foreground",children:a})]})}const r={args:{children:null,containerWidth:"xlarge",padding:"normal",columnGap:"normal",rowGap:"normal"},render:()=>e.jsxs(o,{containerWidth:"xlarge",padding:"normal",columnGap:"normal",rowGap:"normal",children:[e.jsx(n,{divider:"line",className:"sticky top-0 z-10 bg-background/80 backdrop-blur",children:e.jsxs("div",{className:"flex h-14 items-center justify-between",children:[e.jsx("div",{className:"text-lg font-semibold",children:"Sticky header"}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Scroll"})]})}),e.jsxs(l,{children:[e.jsx(d,{className:"lg:col-span-8",children:e.jsx("div",{className:"grid gap-4",children:Array.from({length:12}).map((i,a)=>e.jsx(t,{title:`Content ${a+1}`,children:"Lots of content to enable scrolling."},a))})}),e.jsx(c,{className:"lg:col-span-4",position:"end",sticky:!0,offsetHeader:56,children:e.jsxs("div",{className:"grid gap-4",children:[e.jsx(t,{title:"Sticky pane",children:"This stays visible while you scroll."}),e.jsx(t,{title:"Filters",children:"Put filter controls here."})]})})]})]})},s={args:{children:null,containerWidth:"xlarge",padding:"normal",columnGap:"normal",rowGap:"normal"},render:()=>e.jsxs(o,{containerWidth:"xlarge",padding:"normal",columnGap:"normal",rowGap:"normal",children:[e.jsx(n,{divider:"none",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"text-lg font-semibold",children:"Resizable pane"}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Drag the gutter"})]})}),e.jsxs(l,{children:[e.jsx(d,{className:"lg:col-span-8",children:e.jsx("div",{className:"grid gap-4",children:Array.from({length:6}).map((i,a)=>e.jsx(t,{title:`Main ${a+1}`,children:"Resize the pane on the right (desktop widths)."},a))})}),e.jsx(c,{className:"lg:col-span-4",position:"end",resizable:!0,minWidth:260,widthStorageKey:"storybook:pageLayout:rightPaneWidth",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsx(t,{title:"Resizable pane",children:"Width persists via localStorage."}),e.jsx(t,{title:"Notes",children:"Great for details panels."})]})})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: null,
    containerWidth: 'xlarge',
    padding: 'normal',
    columnGap: 'normal',
    rowGap: 'normal'
  },
  render: () => <PageLayout containerWidth="xlarge" padding="normal" columnGap="normal" rowGap="normal">
            <PageLayoutHeader divider="line" className="sticky top-0 z-10 bg-background/80 backdrop-blur">
                <div className="flex h-14 items-center justify-between">
                    <div className="text-lg font-semibold">Sticky header</div>
                    <div className="text-sm text-muted-foreground">Scroll</div>
                </div>
            </PageLayoutHeader>

            <PageLayoutBody>
                <PageLayoutContent className="lg:col-span-8">
                    <div className="grid gap-4">
                        {Array.from({
            length: 12
          }).map((_, i) => <Card key={i} title={\`Content \${i + 1}\`}>
                                Lots of content to enable scrolling.
                            </Card>)}
                    </div>
                </PageLayoutContent>

                <PageLayoutPane className="lg:col-span-4" position="end" sticky offsetHeader={56} // matches h-14
      >
                    <div className="grid gap-4">
                        <Card title="Sticky pane">This stays visible while you scroll.</Card>
                        <Card title="Filters">Put filter controls here.</Card>
                    </div>
                </PageLayoutPane>
            </PageLayoutBody>
        </PageLayout>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
                    <div className="text-lg font-semibold">Resizable pane</div>
                    <div className="text-sm text-muted-foreground">Drag the gutter</div>
                </div>
            </PageLayoutHeader>

            <PageLayoutBody>
                <PageLayoutContent className="lg:col-span-8">
                    <div className="grid gap-4">
                        {Array.from({
            length: 6
          }).map((_, i) => <Card key={i} title={\`Main \${i + 1}\`}>
                                Resize the pane on the right (desktop widths).
                            </Card>)}
                    </div>
                </PageLayoutContent>

                <PageLayoutPane className="lg:col-span-4" position="end" resizable minWidth={260} widthStorageKey="storybook:pageLayout:rightPaneWidth">
                    <div className="grid gap-4">
                        <Card title="Resizable pane">Width persists via localStorage.</Card>
                        <Card title="Notes">Great for details panels.</Card>
                    </div>
                </PageLayoutPane>
            </PageLayoutBody>
        </PageLayout>
}`,...s.parameters?.docs?.source}}};const y=["StickyPane","ResizablePane"];export{s as ResizablePane,r as StickyPane,y as __namedExportsOrder,h as default};
