import{r as i,j as e}from"./iframe-2gSw_mv2.js";import{d}from"./dayjs.min-Cu22OzAV.js";import{B as m}from"./button-CJEJXt86.js";import{C as n,a as l,b as p,c,d as u}from"./card-CHbb2xeL.js";import{D as o}from"./date-picker-Buc0lbRf.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-mOKOfvx7.js";import"./index-B8k91cqS.js";import"./popover-3PGTm5Iq.js";import"./use-resolve-button-type-BJkWDc_4.js";import"./keyboard-BaAOKfHq.js";import"./use-sync-refs-DmqRrsUT.js";import"./floating-C3szj9N5.js";import"./index-CfTXRGMP.js";import"./index-DkkTbRiJ.js";import"./use-event-listener-DGw3SnZo.js";import"./portal-Bro9fcSW.js";import"./focus-management-COn_JIX_.js";import"./use-tab-direction-FLyxlZ_n.js";import"./hidden-CNfTMTAC.js";import"./open-closed-BO3DqZNu.js";import"./bugs-CQkR_j0_.js";import"./calendar-BtGj8AdV.js";import"./chevron-left-NHq9S6pJ.js";import"./createLucideIcon-DBgTOM77.js";import"./chevron-right-BVoF0DKj.js";const q={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
