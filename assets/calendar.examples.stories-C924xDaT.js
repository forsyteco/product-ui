import{r as m,j as e}from"./iframe-FucRrgN0.js";import{d as n}from"./dayjs.min-CYgN3NFI.js";import{C as s}from"./calendar-Bc1N7XhW.js";import{s as r}from"./calendar.stories.module-vsa9eKi9.js";import{C as l,a as i,b as c,c as C,d as p}from"./card-cYZJZDlH.js";import{B as f}from"./button-CIKQtcpw.js";import"./preload-helper-DEha_CyH.js";import"./clsx-B-dksMZM.js";import"./icons-CSKHJvYM.js";import"./tailwind-BykweIWy.js";import"./index-B8k91cqS.js";import"./spinner-vgNm4kF8.js";const R={title:"Components/Calendar/Examples",component:s,parameters:{layout:"padded"}},t={render:()=>{const[a,o]=m.useState(),d=a?.from&&a?.to?`${n(a.from).format("DD MMM YYYY")} – ${n(a.to).format("DD MMM YYYY")}`:a?.from?`${n(a.from).format("DD MMM YYYY")} – …`:"Select a date range";return e.jsxs(l,{className:r.exampleCard,children:[e.jsx(i,{children:e.jsx(c,{children:"Booking dates"})}),e.jsx(C,{className:r.exampleCardContent,children:e.jsx(s,{mode:"range",selected:a,onSelect:o,numberOfMonths:2})}),e.jsxs(p,{className:r.exampleCardFooter,children:[e.jsx("div",{className:r.exampleLabel,children:d}),e.jsx(f,{variant:"outline",size:"sm",onClick:()=>o(void 0),children:"Clear"})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>();
    const label = range?.from && range?.to ? \`\${dayjs(range.from).format('DD MMM YYYY')} – \${dayjs(range.to).format('DD MMM YYYY')}\` : range?.from ? \`\${dayjs(range.from).format('DD MMM YYYY')} – …\` : 'Select a date range';
    return <Card className={storyStyles.exampleCard}>
        <CardHeader>
          <CardTitle>Booking dates</CardTitle>
        </CardHeader>
        <CardContent className={storyStyles.exampleCardContent}>
          <Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={2} />
        </CardContent>
        <CardFooter className={storyStyles.exampleCardFooter}>
          <div className={storyStyles.exampleLabel}>{label}</div>
          <Button variant="outline" size="sm" onClick={() => setRange(undefined)}>
            Clear
          </Button>
        </CardFooter>
      </Card>;
  }
}`,...t.parameters?.docs?.source}}};const k=["RangePickerInCard"];export{t as RangePickerInCard,k as __namedExportsOrder,R as default};
