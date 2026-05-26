import{r as i,j as t}from"./iframe-DB_8LERs.js";import{d as c}from"./dayjs.min-CP-jUABi.js";import{C as r}from"./calendar-7kFI-yHX.js";import{s as p}from"./calendar.stories.module-vsa9eKi9.js";import"./preload-helper-DEha_CyH.js";import"./clsx-B-dksMZM.js";import"./icons-CzXpEKn9.js";import"./button-vlU5xtrA.js";import"./tailwind-BykweIWy.js";import"./index-B8k91cqS.js";import"./spinner-DLtEokUl.js";const b={title:"Components/Calendar/Features",component:r,parameters:{layout:"centered"}},a={render:()=>{const[e,m]=i.useState(void 0);return t.jsx(r,{mode:"single",selected:e,onSelect:l=>{l&&m(l)},footer:t.jsx("div",{className:p.footer,children:e?`Selected: ${c(e).format("DD/MM/YYYY")}`:"Pick a day"})})}},s={render:()=>t.jsx(r,{captionLayout:"dropdown"})},o={render:()=>t.jsx(r,{numberOfMonths:2})},d={render:()=>{const e=c().set("date",8).toDate();return t.jsx(r,{mode:"single",selected:e,disabled:e})}},n={render:()=>t.jsx(r,{startMonth:c().startOf("year").subtract(2,"months").toDate(),endMonth:c().endOf("year").add(2,"months").toDate()})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<Date | undefined>(undefined);
    return <Calendar mode="single" selected={selected} onSelect={date => {
      if (date) setSelected(date);
    }} footer={<div className={storyStyles.footer}>
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
