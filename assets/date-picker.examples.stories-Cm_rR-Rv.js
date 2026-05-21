import{r as i,j as e}from"./iframe-AG0x1wfB.js";import{d}from"./dayjs.min-B680eljq.js";import{B as m}from"./button-6K6P1vdS.js";import{C as n,a as l,b as p,c,d as u}from"./card-JpSH4wIV.js";import{D as o}from"./date-picker-CK6C0E5_.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-D6GyDD6x.js";import"./index-B8k91cqS.js";import"./popover-Cf-fR7nW.js";import"./use-resolve-button-type-D8j7BuG8.js";import"./keyboard-D-t6G-JT.js";import"./use-sync-refs-nAJ1J7Wk.js";import"./floating-B8SBCkyl.js";import"./index-Cm_AQNJq.js";import"./index-BcX7eClP.js";import"./use-event-listener-YWdgBPdn.js";import"./portal-BGdceubv.js";import"./focus-management-BZBMqyM0.js";import"./use-tab-direction-CcNai805.js";import"./hidden-CBZsKL6R.js";import"./open-closed-BJ2TncLm.js";import"./bugs-DFcXVQhQ.js";import"./calendar-DxAaJl5e.js";import"./chevron-left-DWTTAgxF.js";import"./createLucideIcon-CCX5DxSE.js";import"./chevron-right-C_55WE6O.js";const q={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
