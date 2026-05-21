import{r as i,j as e}from"./iframe-Ccv72OAP.js";import{d}from"./dayjs.min-DN7j1fy0.js";import{B as m}from"./button-CwzOfVEx.js";import{C as n,a as l,b as p,c,d as u}from"./card-BRluhLc9.js";import{D as o}from"./date-picker-hkgYyTy7.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-BrVw5Cwa.js";import"./index-B8k91cqS.js";import"./popover-CbWRWG3Z.js";import"./use-resolve-button-type-CVFXSLBs.js";import"./keyboard-Bj8Si4my.js";import"./use-sync-refs-YRg-9jEj.js";import"./floating-K3v631rL.js";import"./index-3FYpRak_.js";import"./index-CX2OxCDR.js";import"./use-event-listener-D6-LGSM8.js";import"./portal-T5jVZpWw.js";import"./focus-management-18jBgMrJ.js";import"./use-tab-direction-C4ZYVEX1.js";import"./hidden-DU9ztPDp.js";import"./open-closed-CqLh23QT.js";import"./bugs-BEd2wVVK.js";import"./calendar-BeX0_z4m.js";import"./chevron-left-C1UuNvkf.js";import"./createLucideIcon-XHPuGMba.js";import"./chevron-right-CT68s_VS.js";const q={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
