import{r as i,j as e}from"./iframe-D3jKVOAj.js";import{d}from"./dayjs.min-CHvhgPAz.js";import{B as m}from"./button-B1vOep6r.js";import{C as n,a as l,b as p,c,d as u}from"./card-C5V_ydOn.js";import{D as o}from"./date-picker-DeuXS0Vj.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-BCVrcFZ9.js";import"./index-B8k91cqS.js";import"./popover-CqnhWfEm.js";import"./use-resolve-button-type-CHu-IHbp.js";import"./keyboard-DAnX0onh.js";import"./use-sync-refs-BsLWer34.js";import"./floating-CzaD3CZv.js";import"./index-DblNVS2F.js";import"./index-DkyIaSV8.js";import"./use-event-listener-D8A8Yli8.js";import"./portal-CZXLTeWu.js";import"./focus-management-DHNzSoTK.js";import"./use-tab-direction-WwYhWDY4.js";import"./hidden-VRiS1Y6s.js";import"./open-closed-xuvlXUtj.js";import"./bugs-BRsUgAr4.js";import"./calendar-CYTRD30M.js";import"./chevron-left-lijfwYjY.js";import"./createLucideIcon-Dznipqy2.js";import"./chevron-right-Bv8-NISR.js";const q={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
