import{r as i,j as e}from"./iframe-kqJoyzOv.js";import{d}from"./dayjs.min-CIpcoCZn.js";import{B as m}from"./button-CTXerEIp.js";import{C as n,a as l,b as p,c,d as u}from"./card-fHay2K8j.js";import{D as o}from"./date-picker-DVipOZg9.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-BlDNYi5B.js";import"./index-B8k91cqS.js";import"./popover-DavxHCwv.js";import"./use-resolve-button-type-DDwf73KN.js";import"./keyboard-D5qsp4HU.js";import"./use-sync-refs-CAiCvLHi.js";import"./floating-9i8NPJbh.js";import"./index-1PFnJZ_D.js";import"./index-qPEbv8Ah.js";import"./use-event-listener-568oECd-.js";import"./portal-CoKyd3p-.js";import"./focus-management-3mjStGxn.js";import"./use-tab-direction-CSBoS-fC.js";import"./hidden-Dp8AkmW2.js";import"./open-closed-DPhFzWxs.js";import"./bugs-CgGO5Bru.js";import"./calendar-C_2zHyKm.js";import"./chevron-left-leqqd83j.js";import"./createLucideIcon-DPj3S9G7.js";import"./chevron-right-CmXfF2rD.js";const q={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
