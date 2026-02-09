import{r as i,j as e}from"./iframe-nrIlHJha.js";import{d}from"./dayjs.min-DV3qaEaW.js";import{B as m}from"./button-Aycko4OB.js";import{C as n,a as l,b as p,c,d as u}from"./card-Be5zgYKC.js";import{D as o}from"./date-picker-CmqF5f54.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";import"./popover-B9LQme3b.js";import"./useFocusRing-B2oasDWN.js";import"./use-resolve-button-type-CQQ8L2GD.js";import"./keyboard-CqkS3r67.js";import"./use-sync-refs-DjpU_bj-.js";import"./floating-B3Nejsq3.js";import"./index-BZvjOxCX.js";import"./index-BSik-Sht.js";import"./use-event-listener-ClNGbY2w.js";import"./portal-CY2dJ7Gk.js";import"./focus-management-DCUZsTmC.js";import"./use-tab-direction-CaxOQTlx.js";import"./hidden-BsOz6iOs.js";import"./open-closed-PTDmPnRa.js";import"./close-provider-18Mg9M_f.js";import"./bugs-BCdwESHN.js";import"./calendar-BSOZ4JQI.js";import"./chevron-left-C9mCQWAe.js";import"./createLucideIcon-C3KZ-J2u.js";import"./chevron-right-DBGgN0nD.js";const q={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
