import{r as i,j as d}from"./iframe-BX-ROWNI.js";import{d as r}from"./dayjs.min-B8xv1plK.js";import{D as t}from"./date-picker-BwiTA1e1.js";import"./preload-helper-DEha_CyH.js";import"./popover-DEcIGqZ8.js";import"./use-resolve-button-type-38vbuAiE.js";import"./keyboard-CCfXnbEr.js";import"./use-sync-refs-DTg_pgWq.js";import"./floating-BT1BL60C.js";import"./index-6YZsdqky.js";import"./index-Cu-QQxcH.js";import"./use-event-listener-B-V2qlHO.js";import"./portal-CJIo8SlY.js";import"./focus-management-plLOIbVD.js";import"./use-tab-direction-CV4Wy-UD.js";import"./hidden-D5uAFvgf.js";import"./open-closed-C_k6EVRc.js";import"./bugs-BGC4SnX6.js";import"./calendar-BYhELzp7.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./button-J79MQA9b.js";import"./spinner-U037JlYe.js";import"./index-B8k91cqS.js";import"./chevron-left--dWgM-U7.js";import"./createLucideIcon-DghFctTs.js";import"./chevron-right-C8Diiibg.js";const q={title:"Components/DatePicker/Features",component:t,parameters:{layout:"centered"}},a={render:()=>{const[e,m]=i.useState(new Date(2024,0,15));return d.jsx(t,{value:e,onValueChange:m})}},o={render:()=>d.jsx(t,{defaultValue:new Date(2024,2,5),formatDate:e=>r(e).format("ddd, D MMM")})},s={render:()=>d.jsx(t,{calendarProps:{disabled:e=>r(e).isBefore(r().startOf("day"))}})},n={render:()=>d.jsx(t,{calendarProps:{startMonth:r().startOf("year").toDate(),endMonth:r().endOf("year").toDate()}})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<Date | undefined>(new Date(2024, 0, 15));
    return <DatePicker value={value} onValueChange={setValue} />;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <DatePicker defaultValue={new Date(2024, 2, 5)} formatDate={date => dayjs(date).format('ddd, D MMM')} />
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <DatePicker calendarProps={{
    disabled: date => dayjs(date).isBefore(dayjs().startOf('day'))
  }} />
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <DatePicker calendarProps={{
    startMonth: dayjs().startOf('year').toDate(),
    endMonth: dayjs().endOf('year').toDate()
  }} />
}`,...n.parameters?.docs?.source}}};const z=["Controlled","CustomFormat","DisabledDates","LimitedRange"];export{a as Controlled,o as CustomFormat,s as DisabledDates,n as LimitedRange,z as __namedExportsOrder,q as default};
