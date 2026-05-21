import{r as i,j as e}from"./iframe-OIbwSsUo.js";import{d}from"./dayjs.min-DBPva39s.js";import{B as m}from"./button-DTpuuVZa.js";import{C as n,a as l,b as p,c,d as u}from"./card-DunBpX07.js";import{D as o}from"./date-picker-BDcEM533.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";import"./popover-ZalzAifc.js";import"./useFocusRing-CHwNI2-q.js";import"./use-resolve-button-type-osKJOTL_.js";import"./keyboard-CTolmV5o.js";import"./use-sync-refs-0qmI2Jj2.js";import"./floating-DNM8ErJa.js";import"./index-CL3mEXst.js";import"./index-Bl-Jaq4B.js";import"./use-event-listener-C_GM-C6i.js";import"./portal-CNpYkWm3.js";import"./focus-management-CYdr1o3c.js";import"./use-tab-direction-B66KE3AB.js";import"./hidden-CZyt3MTM.js";import"./open-closed-DWvAJZV2.js";import"./close-provider-CjYnopdM.js";import"./bugs-B5yy6nX2.js";import"./calendar-DX3uHVVO.js";import"./chevron-left-WHfVO_zo.js";import"./createLucideIcon-CRnG3vX4.js";import"./chevron-right-2_oCvJ6G.js";const q={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | undefined>();
    const label = value ? dayjs(value).format('DD MMM YYYY') : 'No date selected';
    return <Card className="w-fit">
        <CardHeader>
          <CardTitle>Schedule review</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <DatePicker value={value} onValueChange={setValue} />
        </CardContent>
        <CardFooter className="justify-between gap-2">
          <div className="text-base text-muted-foreground">{label}</div>
          <Button variant="outline" size="sm" onClick={() => setValue(undefined)}>
            Clear
          </Button>
        </CardFooter>
      </Card>;
  }
}`,...t.parameters?.docs?.source}}};const A=["DatePickerInCard"];export{t as DatePickerInCard,A as __namedExportsOrder,q as default};
