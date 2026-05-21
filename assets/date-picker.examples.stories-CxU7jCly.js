import{r as i,j as e}from"./iframe-CItR6fGu.js";import{d}from"./dayjs.min-B8TR1URk.js";import{B as m}from"./button-T-BPDXWE.js";import{C as n,a as l,b as p,c,d as u}from"./card-DTLOb1ba.js";import{D as o}from"./date-picker-B0ePXHu7.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-DphlRdEr.js";import"./index-B8k91cqS.js";import"./popover-C0ulBbKb.js";import"./use-resolve-button-type-BFmILeb_.js";import"./keyboard-8VRtqMCG.js";import"./use-sync-refs-CaS58R8u.js";import"./floating-BsWb7cLr.js";import"./index-CNOo9puS.js";import"./index-B9rWXd0V.js";import"./use-event-listener-Cbxsya7i.js";import"./portal-DLX_yNr9.js";import"./focus-management-1bpFx2A3.js";import"./use-tab-direction-Bd6vmpaG.js";import"./hidden-DNm3g6Z0.js";import"./open-closed-McBZdwWe.js";import"./bugs-DpLPc2L_.js";import"./calendar-DbaqhCg1.js";import"./chevron-left-BRDRLE2e.js";import"./createLucideIcon-EyooAwAp.js";import"./chevron-right-BLXpcJ8Q.js";const q={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
