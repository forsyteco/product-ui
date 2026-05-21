import{j as e,r as x}from"./iframe-Bbi4Wu2n.js";import{B as a}from"./button-BNkMhcgE.js";import{H as r,I as n,B as g}from"./inbox-B50ht3ja.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./spinner-CHmihI9Z.js";import"./visually-hidden-I3NbyvUx.js";import"./index-cXaQtA9H.js";import"./createLucideIcon-DdVe-9hA.js";const L={title:"Components/Button/Features",component:a,parameters:{layout:"centered"}},t={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"outline",children:"Outline"}),e.jsx(a,{variant:"ghost",children:"Ghost"})]})},o={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})},l={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(a,{disabled:!0,children:"Disabled Primary"}),e.jsx(a,{variant:"secondary",disabled:!0,children:"Disabled Secondary"})]})},c={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{icon:r,variant:"primary","aria-label":"Primary"}),e.jsx(a,{icon:r,variant:"secondary","aria-label":"Secondary"}),e.jsx(a,{icon:r,variant:"outline","aria-label":"Outline"}),e.jsx(a,{icon:r,variant:"ghost","aria-label":"Ghost"}),e.jsx(a,{icon:r,variant:"danger","aria-label":"Danger"}),e.jsx(a,{icon:r,variant:"primary",as:"a",href:"#","aria-label":"Anchor (primary)"})]})},d={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{icon:n,size:"small","aria-label":"Small"}),e.jsx(a,{icon:n,size:"medium","aria-label":"Medium"}),e.jsx(a,{icon:n,size:"large","aria-label":"Large"})]})},m={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{icon:r,"aria-label":"Square",shape:"square"}),e.jsx(a,{icon:r,"aria-label":"Circle",shape:"circle"})]})},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{icon:n,"aria-label":"Disabled",disabled:!0}),e.jsx(a,{icon:n,"aria-label":"Inactive",inactive:!0}),e.jsx(a,{icon:n,"aria-label":"External tooltip",title:"External tooltip"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{icon:g,"aria-label":"Menu anchor","aria-haspopup":"menu","aria-expanded":"false"}),e.jsx(a,{icon:g,"aria-label":"Loading",loading:!0}),e.jsx(b,{})]}),e.jsx("div",{className:"flex items-center gap-3",children:e.jsx(h,{})})]})},b=()=>{const[p,s]=x.useState(!1);return e.jsx(a,{icon:n,"aria-label":"Toggle loading",loading:p,onClick:()=>s(i=>!i),description:"Click to toggle loading"})},h=()=>{const[p,s]=x.useState(!1),i=x.useRef(null),v=()=>{i.current!==null&&(clearTimeout(i.current),i.current=null)};return e.jsxs("div",{onMouseEnter:()=>{v(),i.current=window.setTimeout(()=>s(!0),800)},onMouseLeave:()=>{v(),s(!1)},className:"relative",children:[e.jsx(a,{icon:g,"aria-label":"Long delayed tooltip"}),p?e.jsx("span",{className:"absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white",children:"Tooltip after delay"}):null]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Button disabled>Disabled Primary</Button>
      <Button variant="secondary" disabled>
        Disabled Secondary
      </Button>
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button icon={Heart} variant="primary" aria-label="Primary" />
      <Button icon={Heart} variant="secondary" aria-label="Secondary" />
      <Button icon={Heart} variant="outline" aria-label="Outline" />
      <Button icon={Heart} variant="ghost" aria-label="Ghost" />
      <Button icon={Heart} variant="danger" aria-label="Danger" />
      <Button icon={Heart} variant="primary" as="a" href="#" aria-label="Anchor (primary)" />
    </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button icon={Inbox} size="small" aria-label="Small" />
      <Button icon={Inbox} size="medium" aria-label="Medium" />
      <Button icon={Inbox} size="large" aria-label="Large" />
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button icon={Heart} aria-label="Square" shape="square" />
      <Button icon={Heart} aria-label="Circle" shape="circle" />
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Button icon={Inbox} aria-label="Disabled" disabled />
          <Button icon={Inbox} aria-label="Inactive" inactive />
          <Button icon={Inbox} aria-label="External tooltip" title="External tooltip" />
        </div>
        <div className="flex items-center gap-3">
          <Button icon={Bell} aria-label="Menu anchor" aria-haspopup="menu" aria-expanded="false" />
          <Button icon={Bell} aria-label="Loading" loading />
          <LoadingTriggerDemo />
        </div>
        <div className="flex items-center gap-3">
          <LongDelayTooltipDemo />
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};const O=["Variants","Sizes","Disabled","IconOnlyVariants","IconOnlySizes","IconOnlyShapes","IconOnlyStatesAndBehaviors"];export{l as Disabled,m as IconOnlyShapes,d as IconOnlySizes,u as IconOnlyStatesAndBehaviors,c as IconOnlyVariants,o as Sizes,t as Variants,O as __namedExportsOrder,L as default};
