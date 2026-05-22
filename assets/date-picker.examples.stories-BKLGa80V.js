import{r as d,j as e}from"./iframe-FucRrgN0.js";import{d as m}from"./dayjs.min-CYgN3NFI.js";import{D as o}from"./date-picker-SEEPtnRH.js";import{s as a}from"./date-picker.stories.module-Dkkc3D8n.js";import{C as i,a as n,b as p,c,d as C}from"./card-cYZJZDlH.js";import{B as u}from"./button-CIKQtcpw.js";import"./preload-helper-DEha_CyH.js";import"./clsx-B-dksMZM.js";import"./icons-CSKHJvYM.js";import"./clear-icon-C57yPvkZ.js";import"./calendar-Bc1N7XhW.js";import"./input-DkhC2eoO.js";import"./field-autofill-props-Dh75dEkE.js";import"./input-shell-ytnWYMk1.js";import"./index-B8k91cqS.js";import"./useAnchoredPopupScrollLock-CR17mGvW.js";import"./index-BcyfDNeB.js";import"./index-OS4KfO0X.js";import"./index-bsscEPVZ.js";import"./ToolbarRootContext-g0qu0_2p.js";import"./tailwind-BykweIWy.js";import"./spinner-vgNm4kF8.js";const z={title:"Components/DatePicker/Examples",component:o,parameters:{layout:"padded"}},r={render:()=>{const[t,s]=d.useState(),l=t?m(t).format("DD MMM YYYY"):"No date selected";return e.jsxs(i,{className:a.exampleCard,children:[e.jsx(n,{children:e.jsx(p,{children:"Schedule review"})}),e.jsx(c,{className:a.exampleCardContent,children:e.jsx(o,{value:t,onValueChange:s})}),e.jsxs(C,{className:a.exampleCardFooter,children:[e.jsx("div",{className:a.exampleLabel,children:l}),e.jsx(u,{variant:"outline",size:"sm",onClick:()=>s(void 0),children:"Clear"})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | undefined>();
    const label = value ? dayjs(value).format('DD MMM YYYY') : 'No date selected';
    return <Card className={storyStyles.exampleCard}>
        <CardHeader>
          <CardTitle>Schedule review</CardTitle>
        </CardHeader>
        <CardContent className={storyStyles.exampleCardContent}>
          <DatePicker value={value} onValueChange={setValue} />
        </CardContent>
        <CardFooter className={storyStyles.exampleCardFooter}>
          <div className={storyStyles.exampleLabel}>{label}</div>
          <Button variant="outline" size="sm" onClick={() => setValue(undefined)}>
            Clear
          </Button>
        </CardFooter>
      </Card>;
  }
}`,...r.parameters?.docs?.source}}};const I=["DatePickerInCard"];export{r as DatePickerInCard,I as __namedExportsOrder,z as default};
