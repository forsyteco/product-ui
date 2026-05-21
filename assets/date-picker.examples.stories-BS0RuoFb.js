import{r as i,j as e}from"./iframe-BX-ROWNI.js";import{d}from"./dayjs.min-B8xv1plK.js";import{B as m}from"./button-J79MQA9b.js";import{C as n,a as l,b as p,c,d as u}from"./card-BuKCt6Qi.js";import{D as o}from"./date-picker-BwiTA1e1.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-U037JlYe.js";import"./index-B8k91cqS.js";import"./popover-DEcIGqZ8.js";import"./use-resolve-button-type-38vbuAiE.js";import"./keyboard-CCfXnbEr.js";import"./use-sync-refs-DTg_pgWq.js";import"./floating-BT1BL60C.js";import"./index-6YZsdqky.js";import"./index-Cu-QQxcH.js";import"./use-event-listener-B-V2qlHO.js";import"./portal-CJIo8SlY.js";import"./focus-management-plLOIbVD.js";import"./use-tab-direction-CV4Wy-UD.js";import"./hidden-D5uAFvgf.js";import"./open-closed-C_k6EVRc.js";import"./bugs-BGC4SnX6.js";import"./calendar-BYhELzp7.js";import"./chevron-left--dWgM-U7.js";import"./createLucideIcon-DghFctTs.js";import"./chevron-right-C8Diiibg.js";const q={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
