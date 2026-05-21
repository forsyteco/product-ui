import{r as l,j as t}from"./iframe-Ccv72OAP.js";import{d as c}from"./dayjs.min-DN7j1fy0.js";import{C as r}from"./calendar-BeX0_z4m.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./button-CwzOfVEx.js";import"./spinner-BrVw5Cwa.js";import"./index-B8k91cqS.js";import"./chevron-left-C1UuNvkf.js";import"./createLucideIcon-XHPuGMba.js";import"./chevron-right-CT68s_VS.js";const b={title:"Components/Calendar/Features",component:r,parameters:{layout:"centered"}},a={render:()=>{const[e,i]=l.useState(void 0);return t.jsx(r,{mode:"single",selected:e,onSelect:m=>{m&&i(m)},footer:t.jsx("div",{className:"mt-4 text-base",children:e?`Selected: ${c(e).format("DD/MM/YYYY")}`:"Pick a day"})})}},s={render:()=>t.jsx(r,{captionLayout:"dropdown"})},o={render:()=>t.jsx(r,{numberOfMonths:2})},d={render:()=>{const e=c().set("date",8).toDate();return t.jsx(r,{mode:"single",selected:e,disabled:e})}},n={render:()=>t.jsx(r,{startMonth:c().startOf("year").subtract(2,"months").toDate(),endMonth:c().endOf("year").add(2,"months").toDate()})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(undefined);
    return <Calendar mode="single" selected={selected} onSelect={date => {
      if (date) setSelected(date);
    }} footer={<div className="mt-4 text-base">
            {selected ? \`Selected: \${dayjs(selected).format('DD/MM/YYYY')}\` : 'Pick a day'}
          </div>} />;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Calendar captionLayout="dropdown" />
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Calendar numberOfMonths={2} />
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const date = dayjs().set('date', 8).toDate();
    return <Calendar mode="single" selected={date} disabled={date} />;
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Calendar startMonth={dayjs().startOf('year').subtract(2, 'months').toDate()} endMonth={dayjs().endOf('year').add(2, 'months').toDate()} />
}`,...n.parameters?.docs?.source}}};const Y=["ControlledSingle","DropdownCaption","MultipleMonths","DisabledSelected","WithStartAndEndMonths"];export{a as ControlledSingle,d as DisabledSelected,s as DropdownCaption,o as MultipleMonths,n as WithStartAndEndMonths,Y as __namedExportsOrder,b as default};
