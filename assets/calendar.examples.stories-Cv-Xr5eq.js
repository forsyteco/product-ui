import{r as m,j as e}from"./iframe-CeYd32X8.js";import{d as t}from"./dayjs.min-Dm6V-LUy.js";import{B as i}from"./button-CxpgOoq8.js";import{C as l,a as c,b as f,c as p,d as C}from"./card-CHfrFRjV.js";import{C as o}from"./calendar-DuBnmd5m.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";import"./chevron-right-4Jt43FCb.js";const b={title:"Components/Calendar/Examples",component:o,parameters:{layout:"padded"}},r={render:()=>{const[a,s]=m.useState(),n=a?.from&&a?.to?`${t(a.from).format("DD MMM YYYY")} – ${t(a.to).format("DD MMM YYYY")}`:a?.from?`${t(a.from).format("DD MMM YYYY")} – …`:"Select a date range";return e.jsxs(l,{className:"w-fit",children:[e.jsx(c,{children:e.jsx(f,{children:"Booking dates"})}),e.jsx(p,{className:"p-0",children:e.jsx(o,{mode:"range",selected:a,onSelect:d=>s(d),numberOfMonths:2})}),e.jsxs(C,{className:"justify-between gap-2",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:n}),e.jsx(i,{variant:"outline",size:"sm",children:"Clear"})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<{
      from?: Date;
      to?: Date;
    } | undefined>();
    const label = range?.from && range?.to ? \`\${dayjs(range.from).format('DD MMM YYYY')} – \${dayjs(range.to).format('DD MMM YYYY')}\` : range?.from ? \`\${dayjs(range.from).format('DD MMM YYYY')} – …\` : 'Select a date range';
    return <Card className="w-fit">
        <CardHeader>
          <CardTitle>Booking dates</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Calendar mode="range" selected={range}
        // React Day Picker's range type is generic; keep the story simple.
        onSelect={next => setRange(next as unknown as {
          from?: Date;
          to?: Date;
        } | undefined)} numberOfMonths={2} />
        </CardContent>
        <CardFooter className="justify-between gap-2">
          <div className="text-sm text-muted-foreground">{label}</div>
          <Button variant="outline" size="sm">
            Clear
          </Button>
        </CardFooter>
      </Card>;
  }
}`,...r.parameters?.docs?.source}}};const N=["RangePickerInCard"];export{r as RangePickerInCard,N as __namedExportsOrder,b as default};
