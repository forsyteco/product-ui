import{r as i,j as e}from"./iframe-BUQwbYxk.js";import{d}from"./dayjs.min-DXc6rdJQ.js";import{B as m}from"./button-NdF9TB-q.js";import{C as n,a as l,b as p,c,d as u}from"./card-BIs2wrtL.js";import{D as o}from"./date-picker-B2MpDyzi.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-DBXYQwoI.js";import"./index-B8k91cqS.js";import"./popover-Dp6w3X4j.js";import"./use-resolve-button-type-BZyZTp_T.js";import"./keyboard-C9-C9yHL.js";import"./use-sync-refs-C8F9OHzU.js";import"./floating-BD-rLd_t.js";import"./index-D4Fas5oe.js";import"./index-Dxld968B.js";import"./use-event-listener-zUnwCVzm.js";import"./portal-Dh6NMUDP.js";import"./focus-management-D9qINPwd.js";import"./use-tab-direction-BdfWSzpS.js";import"./hidden-ne6iZOEs.js";import"./open-closed-DNjMWLTC.js";import"./bugs-nRgSPrqW.js";import"./calendar-Bx-sxPZx.js";import"./chevron-left-Bhtu-6y_.js";import"./createLucideIcon-B8Aa1qJ1.js";import"./chevron-right-DvuyCx55.js";const q={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
