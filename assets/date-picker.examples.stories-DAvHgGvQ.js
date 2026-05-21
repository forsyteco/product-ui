import{r as i,j as e}from"./iframe-BVZI3cAm.js";import{d}from"./dayjs.min-CnZcEwHr.js";import{B as m}from"./button-CFMYvpAs.js";import{C as n,a as l,b as p,c,d as u}from"./card-BGxqojLA.js";import{D as o}from"./date-picker-BHEmnQpL.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-CPcSxYrz.js";import"./index-B8k91cqS.js";import"./popover-CaRNwWnI.js";import"./use-resolve-button-type-ZlI0dW-N.js";import"./keyboard-DdQSsEm8.js";import"./use-sync-refs-DEHDpCuG.js";import"./floating-ZKNxbURW.js";import"./index--g8NHrJE.js";import"./index-D50RP4Fs.js";import"./use-event-listener-AG7C7s7R.js";import"./portal-D35vnQ-C.js";import"./focus-management-DhGd5aK-.js";import"./use-tab-direction-DNFpNodQ.js";import"./hidden-wFq_KQ1j.js";import"./open-closed-DgU0jp-k.js";import"./bugs-CkbgC0Uj.js";import"./calendar-BbzO9zso.js";import"./chevron-left-DWs0Wb38.js";import"./createLucideIcon-DpRcIdcj.js";import"./chevron-right-BjkWObBw.js";const q={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
