import{r as i,j as e}from"./iframe-C_TxvPYL.js";import{d}from"./dayjs.min-B29x0yD_.js";import{B as m}from"./button-Bqw4M8X3.js";import{C as n,a as l,b as p,c,d as u}from"./card-BO7eiVWN.js";import{D as o}from"./date-picker-Dk9lkIVW.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./spinner-BMUkWA1_.js";import"./visually-hidden-CS5TVNRS.js";import"./index-cXaQtA9H.js";import"./popover-BsscvJnk.js";import"./useFocusRing-BLeHenNf.js";import"./use-resolve-button-type-7cGRNqUr.js";import"./keyboard-D-d5xU5t.js";import"./use-sync-refs-CD9OZkD4.js";import"./floating-JWLa5HRk.js";import"./index-Ca65woEg.js";import"./index-ByS2HjQk.js";import"./use-event-listener-B_Hmb7EM.js";import"./portal-DgNF7_mA.js";import"./focus-management-D31FE4zT.js";import"./use-tab-direction-DZVqnoIT.js";import"./hidden-C9RbYL4s.js";import"./open-closed-BQ-jk4i9.js";import"./bugs-CviBSKgF.js";import"./calendar-Db9W2z-T.js";import"./chevron-left-GuteM6aV.js";import"./createLucideIcon-ClzTwOk-.js";import"./chevron-right-5MHD521w.js";const A={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
