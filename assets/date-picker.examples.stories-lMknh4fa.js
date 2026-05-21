import{r as i,j as e}from"./iframe-DyfPGUPW.js";import{d}from"./dayjs.min-BwarBZ3V.js";import{B as m}from"./button-8BxoxmXf.js";import{C as n,a as l,b as p,c,d as u}from"./card-BlzJ4M5t.js";import{D as o}from"./date-picker-CTVa1k4e.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-DqxeGq6l.js";import"./index-B8k91cqS.js";import"./popover-Dbva-WNN.js";import"./use-resolve-button-type-BFWyFq7H.js";import"./keyboard-CS4rV68b.js";import"./use-sync-refs-C0by42-4.js";import"./floating-DIS-pzVt.js";import"./index-BjR8MHm2.js";import"./index-BHqbrTVf.js";import"./use-event-listener-B7AJx6zs.js";import"./portal-8ZybjcM8.js";import"./focus-management-D3qlVZwF.js";import"./use-tab-direction-nb_mnpGJ.js";import"./hidden-D2YtJf3O.js";import"./open-closed-Tr4JgkLT.js";import"./bugs-BLKOcJKD.js";import"./calendar-_YjYlM8-.js";import"./chevron-left-DEO_fXaB.js";import"./createLucideIcon-DvDOevuv.js";import"./chevron-right-lPt3__uL.js";const q={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[r,a]=i.useState(),s=r?d(r).format("DD MMM YYYY"):"No date selected";return e.jsxs(n,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:"p-0",children:e.jsx(o,{value:r,onValueChange:a})}),e.jsxs(u,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:s}),e.jsx(m,{variant:"outline",size:"sm",onClick:()=>a(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
