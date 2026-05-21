import{r as i,j as e}from"./iframe-DRYa70Hz.js";import{d}from"./dayjs.min-BllWBFcw.js";import{B as m}from"./button-BdH9eN90.js";import{C as n,a as l,b as p,c,d as u}from"./card-BkKwFomo.js";import{D as o}from"./date-picker-lloex080.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./spinner-Cu9-SVLO.js";import"./visually-hidden-CK4IDd46.js";import"./index-cXaQtA9H.js";import"./popover-D2tm1cyL.js";import"./useFocusRing-D9O_Y1yf.js";import"./use-resolve-button-type-FOVmfAG8.js";import"./keyboard-CK_xSf2J.js";import"./use-sync-refs-CU_mPfCD.js";import"./floating-DGjeqBmI.js";import"./index-DF1iG1BD.js";import"./index-UFAhJiPj.js";import"./use-event-listener-B0FvXrtf.js";import"./portal-9ydOya9I.js";import"./focus-management-BD6w-EhD.js";import"./use-tab-direction-DXDFjt3i.js";import"./hidden-poPa3not.js";import"./open-closed-CoLgiC6P.js";import"./bugs-tWoe4E7Y.js";import"./calendar-C9KLPDAP.js";import"./chevron-left-BFALzahX.js";import"./createLucideIcon-CqMExeY6.js";import"./chevron-right-B8uMM-oA.js";const A={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const G=["DatePickerInCard"];export{t as DatePickerInCard,G as __namedExportsOrder,A as default};
