import{r as i,j as e}from"./iframe-CGF0_A5u.js";import{d}from"./dayjs.min-l07MPtim.js";import{B as m}from"./button-BQZjnb19.js";import{C as n,a as l,b as p,c,d as u}from"./card-As6ih0Ff.js";import{D as o}from"./date-picker-7Vah14rY.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-MP4NfyXZ.js";import"./index-B8k91cqS.js";import"./popover-C1AhdckD.js";import"./use-resolve-button-type-CoMikh-_.js";import"./keyboard-D86mmLzy.js";import"./use-sync-refs-BQJai7yY.js";import"./floating-BBRF2GKr.js";import"./index-BF50FvRs.js";import"./index-D85rYT82.js";import"./use-event-listener-CXGnWSGZ.js";import"./portal-CIPjWJEZ.js";import"./focus-management-DtCYyGj7.js";import"./use-tab-direction-CztDD27H.js";import"./hidden--9eMrDrq.js";import"./open-closed-VIqDAeBc.js";import"./bugs-CmMcbd0d.js";import"./calendar-Cfl-411F.js";import"./chevron-left-DC47ZpEr.js";import"./createLucideIcon-Xi2hHOC2.js";import"./chevron-right-sdF2BGiv.js";const q={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
