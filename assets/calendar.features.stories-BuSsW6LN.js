import{r as i,j as t}from"./iframe-Bsx-Ou2Z.js";import{d as c}from"./dayjs.min-B39dXrO8.js";import{C as r}from"./calendar-CBzQlg1e.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./button-MA4SzPI9.js";import"./index-B8k91cqS.js";import"./chevron-left-gpEeWP0i.js";import"./createLucideIcon-BU3uc6Fv.js";import"./chevron-right-EKLcrpjh.js";const g={title:"Components/Calendar/Features",component:r,parameters:{layout:"centered"}},a={render:()=>{const[e,l]=i.useState(void 0);return t.jsx(r,{mode:"single",selected:e,onSelect:m=>{m&&l(m)},footer:t.jsx("div",{className:"mt-4 text-base",children:e?`Selected: ${c(e).format("DD/MM/YYYY")}`:"Pick a day"})})}},s={render:()=>t.jsx(r,{captionLayout:"dropdown"})},o={render:()=>t.jsx(r,{numberOfMonths:2})},d={render:()=>{const e=c().set("date",8).toDate();return t.jsx(r,{mode:"single",selected:e,disabled:e})}},n={render:()=>t.jsx(r,{startMonth:c().startOf("year").subtract(2,"months").toDate(),endMonth:c().endOf("year").add(2,"months").toDate()})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const b=["ControlledSingle","DropdownCaption","MultipleMonths","DisabledSelected","WithStartAndEndMonths"];export{a as ControlledSingle,d as DisabledSelected,s as DropdownCaption,o as MultipleMonths,n as WithStartAndEndMonths,b as __namedExportsOrder,g as default};
