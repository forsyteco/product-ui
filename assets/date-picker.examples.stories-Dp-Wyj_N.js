import{r as i,j as e}from"./iframe-CxYaNlfa.js";import{d}from"./dayjs.min-DSNgBxgs.js";import{B as m}from"./button-hQaN4FMQ.js";import{C as n,a as l,b as p,c,d as u}from"./card-2gl23COw.js";import{D as o}from"./date-picker-CflLxPCB.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./spinner-3-TdU7zT.js";import"./visually-hidden-0Sws8sXy.js";import"./index-cXaQtA9H.js";import"./popover-DokUI6KO.js";import"./useFocusRing-BD5DFmH8.js";import"./use-resolve-button-type-DZDd8gts.js";import"./keyboard-B83W2K4O.js";import"./use-sync-refs-CzTZ0nVq.js";import"./floating-CGSfTM2Z.js";import"./index-C20LchO5.js";import"./index-BjqpgS9N.js";import"./use-event-listener-C9ri-zWy.js";import"./portal-CbQ4upMP.js";import"./focus-management-ClluBnCx.js";import"./use-tab-direction-BDjmyAdn.js";import"./hidden-D0DTjsv9.js";import"./open-closed-B5Dl-UPG.js";import"./bugs-B1TOvFeJ.js";import"./calendar-KciKQS7l.js";import"./chevron-left-Cm6bVODC.js";import"./createLucideIcon-DrDZjbcm.js";import"./chevron-right-DMCXcDNg.js";const A={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const G=["DatePickerInCard"];export{t as DatePickerInCard,G as __namedExportsOrder,A as default};
