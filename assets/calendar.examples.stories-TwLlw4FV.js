import{r as d,j as e}from"./iframe-Ccv72OAP.js";import{d as t}from"./dayjs.min-DN7j1fy0.js";import{B as m}from"./button-CwzOfVEx.js";import{C as i,a as l,b as c,c as p,d as f}from"./card-BRluhLc9.js";import{C as o}from"./calendar-BeX0_z4m.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-BrVw5Cwa.js";import"./index-B8k91cqS.js";import"./chevron-left-C1UuNvkf.js";import"./createLucideIcon-XHPuGMba.js";import"./chevron-right-CT68s_VS.js";const S={title:"Components/Calendar/Examples",component:o,parameters:{layout:"padded"}},r={render:()=>{const[a,s]=d.useState(),n=a?.from&&a?.to?`${t(a.from).format("DD MMM YYYY")} – ${t(a.to).format("DD MMM YYYY")}`:a?.from?`${t(a.from).format("DD MMM YYYY")} – …`:"Select a date range";return e.jsxs(i,{className:"w-fit",children:[e.jsx(l,{children:e.jsx(c,{children:"Booking dates"})}),e.jsx(p,{className:"p-0",children:e.jsx(o,{mode:"range",selected:a,onSelect:s,numberOfMonths:2})}),e.jsxs(f,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-base text-muted-foreground",children:n}),e.jsx(m,{variant:"outline",size:"sm",children:"Clear"})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>();
    const label = range?.from && range?.to ? \`\${dayjs(range.from).format('DD MMM YYYY')} – \${dayjs(range.to).format('DD MMM YYYY')}\` : range?.from ? \`\${dayjs(range.from).format('DD MMM YYYY')} – …\` : 'Select a date range';
    return <Card className="w-fit">
        <CardHeader>
          <CardTitle>Booking dates</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={2} />
        </CardContent>
        <CardFooter className="justify-between gap-2">
          <div className="text-base text-muted-foreground">{label}</div>
          <Button variant="outline" size="sm">
            Clear
          </Button>
        </CardFooter>
      </Card>;
  }
}`,...r.parameters?.docs?.source}}};const B=["RangePickerInCard"];export{r as RangePickerInCard,B as __namedExportsOrder,S as default};
