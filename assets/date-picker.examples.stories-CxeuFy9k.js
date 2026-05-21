import{r as i,j as e}from"./iframe-DtxS-MGC.js";import{d}from"./dayjs.min-DYy02Cui.js";import{B as m}from"./button-CnO-AZi5.js";import{C as n,a as l,b as p,c,d as u}from"./card-wkUIcE9R.js";import{D as o}from"./date-picker-rM_miB2W.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-Bd4_yAFu.js";import"./index-B8k91cqS.js";import"./popover-D-nZgVVr.js";import"./use-resolve-button-type-CLhQcegA.js";import"./keyboard-DGdCXcdW.js";import"./use-sync-refs-CPbG3aZX.js";import"./floating-D27cv2f5.js";import"./index-MJ0bJMXz.js";import"./index-HQ1KwuKc.js";import"./use-event-listener-Z9OPufMe.js";import"./portal-DazVI_VC.js";import"./focus-management-DVvF2Sc9.js";import"./use-tab-direction-QkeD2SYv.js";import"./hidden-iOrYYUkf.js";import"./open-closed-CSKGfCwc.js";import"./bugs-D6x1SQ1q.js";import"./calendar-BV20TWd1.js";import"./chevron-left-C8-Z0QW8.js";import"./createLucideIcon-fTAutvjF.js";import"./chevron-right-ByFy0U5p.js";const q={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
