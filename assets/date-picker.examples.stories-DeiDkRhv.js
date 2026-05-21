import{r as i,j as e}from"./iframe-Bsx-Ou2Z.js";import{d}from"./dayjs.min-B39dXrO8.js";import{B as m}from"./button-MA4SzPI9.js";import{C as n,a as l,b as p,c,d as u}from"./card-ZQhU151I.js";import{D as o}from"./date-picker-BW5lExMf.js";import"./preload-helper-DEha_CyH.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";import"./popover-LmpHjpYN.js";import"./useFocusRing-6ZyLCJ3R.js";import"./use-resolve-button-type-BN6DbRrF.js";import"./keyboard-DVExfB0A.js";import"./use-sync-refs-CZbgCkNu.js";import"./floating-By3-1b-P.js";import"./index-BWTGCpOW.js";import"./index-BC68ImjR.js";import"./use-event-listener-_N2DjVWE.js";import"./portal-BUwHpf9K.js";import"./focus-management-B9_YCb-9.js";import"./use-tab-direction-BRC8l5B5.js";import"./hidden-B46LW6GM.js";import"./open-closed-Cv3yQh5L.js";import"./close-provider-zTRs8dzX.js";import"./bugs-6tgLNrUu.js";import"./calendar-CBzQlg1e.js";import"./chevron-left-gpEeWP0i.js";import"./createLucideIcon-BU3uc6Fv.js";import"./chevron-right-EKLcrpjh.js";const A={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
