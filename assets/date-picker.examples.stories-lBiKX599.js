import{r as i,j as e}from"./iframe-Bbi4Wu2n.js";import{d}from"./dayjs.min-BVFQtb9g.js";import{B as m}from"./button-BNkMhcgE.js";import{C as n,a as l,b as p,c,d as u}from"./card-Bkm2hEus.js";import{D as o}from"./date-picker-BaVZI3oh.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./spinner-CHmihI9Z.js";import"./visually-hidden-I3NbyvUx.js";import"./index-cXaQtA9H.js";import"./popover-h80yWU1a.js";import"./useFocusRing-Cr6_nyWp.js";import"./use-resolve-button-type-ngWtVHmY.js";import"./keyboard-CNKbYmCx.js";import"./use-sync-refs-vr87eQ-t.js";import"./floating-B37oCl7H.js";import"./index-CxVl0uTJ.js";import"./index-CyhagWGm.js";import"./use-event-listener-CBksSNTV.js";import"./portal-5kpVsE14.js";import"./focus-management-CbAavFFR.js";import"./use-tab-direction-BpalNZPG.js";import"./hidden-B_xdvaUE.js";import"./open-closed-BTRjoMdZ.js";import"./close-provider-zN25DST3.js";import"./bugs-C4Onqh7Z.js";import"./calendar-aPULgfmO.js";import"./chevron-left-BeLYPwQI.js";import"./createLucideIcon-DdVe-9hA.js";import"./chevron-right-CBEdJtPr.js";const G={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const J=["DatePickerInCard"];export{t as DatePickerInCard,J as __namedExportsOrder,G as default};
