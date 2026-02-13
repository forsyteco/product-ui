import{r as i,j as e}from"./iframe-CeVB8obd.js";import{d}from"./dayjs.min-xDR8cnaN.js";import{B as m}from"./button-GPmkhAQI.js";import{C as n,a as l,b as p,c,d as u}from"./card-C4-kqW9S.js";import{D as o}from"./date-picker-B28Wr1RF.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";import"./popover-D9koPpvg.js";import"./useFocusRing-DGNQ89Xm.js";import"./use-resolve-button-type-B16RnGb9.js";import"./keyboard-CPYOBzPz.js";import"./use-sync-refs-BoOcFdrF.js";import"./floating-y6vRCQA6.js";import"./index-hJDHe0xh.js";import"./index-DxGXflx1.js";import"./use-event-listener-COO1fxLF.js";import"./portal-1sZo8vyw.js";import"./focus-management-D4oSQtTM.js";import"./use-tab-direction-DbUjWBke.js";import"./hidden-FQEwfQ5P.js";import"./open-closed-Bv7w2Ee9.js";import"./close-provider-DK55ombI.js";import"./bugs-C2vScuI6.js";import"./calendar-ChSLXRb2.js";import"./chevron-left-B4nSeWsa.js";import"./createLucideIcon-BwIkv3qW.js";import"./chevron-right-DdBM03iq.js";const q={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
