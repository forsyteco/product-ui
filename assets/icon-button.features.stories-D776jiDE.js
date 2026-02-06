import{j as a,r as m}from"./iframe-BZ1wujjQ.js";import{I as e}from"./icon-button-B65-RB3u.js";import{H as n,B as u}from"./heart-CHjBCtct.js";import{I as r}from"./inbox-COM9iz5b.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";import"./spinner-C5wNouJy.js";import"./visually-hidden-Dxa1VHcC.js";import"./createLucideIcon-Bk6cezq3.js";const H={title:"Components/IconButton/Features",component:e,parameters:{layout:"centered"}},o={render:()=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(e,{icon:n,variant:"primary","aria-label":"Primary"}),a.jsx(e,{icon:n,variant:"secondary","aria-label":"Secondary"}),a.jsx(e,{icon:n,variant:"outline","aria-label":"Outline"}),a.jsx(e,{icon:n,variant:"ghost","aria-label":"Ghost"}),a.jsx(e,{icon:n,variant:"danger","aria-label":"Danger"}),a.jsx(e,{icon:n,variant:"primary",as:"a",href:"#","aria-label":"Anchor (primary)"})]})},l={render:()=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(e,{icon:r,size:"small","aria-label":"Small"}),a.jsx(e,{icon:r,size:"medium","aria-label":"Medium"}),a.jsx(e,{icon:r,size:"large","aria-label":"Large"})]})},s={render:()=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(e,{icon:n,"aria-label":"Square",shape:"square"}),a.jsx(e,{icon:n,"aria-label":"Circle",shape:"circle"})]})},c={render:()=>a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(e,{icon:n,"aria-label":"Primary",variant:"primary"}),a.jsx(e,{icon:n,"aria-label":"Secondary",variant:"secondary"}),a.jsx(e,{icon:n,"aria-label":"Outline",variant:"outline"}),a.jsx(e,{icon:n,"aria-label":"Ghost",variant:"ghost"}),a.jsx(e,{icon:n,"aria-label":"Danger",variant:"danger"})]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(e,{icon:r,"aria-label":"Disabled",disabled:!0}),a.jsx(e,{icon:r,"aria-label":"Inactive",inactive:!0}),a.jsx(e,{icon:r,"aria-label":"External tooltip",title:"External tooltip"})]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(e,{icon:u,"aria-label":"Menu anchor","aria-haspopup":"menu","aria-expanded":"false"}),a.jsx(e,{icon:u,"aria-label":"Loading",loading:!0}),a.jsx(x,{})]}),a.jsx("div",{className:"flex items-center gap-3",children:a.jsx(g,{})})]})},x=()=>{const[d,t]=m.useState(!1);return a.jsx(e,{icon:r,"aria-label":"Toggle loading",loading:d,onClick:()=>t(i=>!i),description:"Click to toggle loading"})},g=()=>{const[d,t]=m.useState(!1),i=m.useRef(null),p=()=>{i.current!==null&&(clearTimeout(i.current),i.current=null)};return a.jsxs("div",{onMouseEnter:()=>{p(),i.current=window.setTimeout(()=>t(!0),800)},onMouseLeave:()=>{p(),t(!1)},className:"relative",children:[a.jsx(e,{icon:u,"aria-label":"Long delayed tooltip"}),d?a.jsx("span",{className:"absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white",children:"Tooltip after delay"}):null]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <IconButton icon={Heart} variant="primary" aria-label="Primary" />
      <IconButton icon={Heart} variant="secondary" aria-label="Secondary" />
      <IconButton icon={Heart} variant="outline" aria-label="Outline" />
      <IconButton icon={Heart} variant="ghost" aria-label="Ghost" />
      <IconButton icon={Heart} variant="danger" aria-label="Danger" />
      <IconButton icon={Heart} variant="primary" as="a" href="#" aria-label="Anchor (primary)" />
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <IconButton icon={Inbox} size="small" aria-label="Small" />
      <IconButton icon={Inbox} size="medium" aria-label="Medium" />
      <IconButton icon={Inbox} size="large" aria-label="Large" />
    </div>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <IconButton icon={Heart} aria-label="Square" shape="square" />
      <IconButton icon={Heart} aria-label="Circle" shape="circle" />
    </div>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <IconButton icon={Heart} aria-label="Primary" variant="primary" />
          <IconButton icon={Heart} aria-label="Secondary" variant="secondary" />
          <IconButton icon={Heart} aria-label="Outline" variant="outline" />
          <IconButton icon={Heart} aria-label="Ghost" variant="ghost" />
          <IconButton icon={Heart} aria-label="Danger" variant="danger" />
        </div>
        <div className="flex items-center gap-3">
          <IconButton icon={Inbox} aria-label="Disabled" disabled />
          <IconButton icon={Inbox} aria-label="Inactive" inactive />
          <IconButton icon={Inbox} aria-label="External tooltip" title="External tooltip" />
        </div>
        <div className="flex items-center gap-3">
          <IconButton icon={Bell} aria-label="Menu anchor" aria-haspopup="menu" aria-expanded="false" />
          <IconButton icon={Bell} aria-label="Loading" loading />
          <LoadingTriggerDemo />
        </div>
        <div className="flex items-center gap-3">
          <LongDelayTooltipDemo />
        </div>
      </div>;
  }
}`,...c.parameters?.docs?.source}}};const D=["Variants","Sizes","Shapes","StatesAndBehaviors"];export{s as Shapes,l as Sizes,c as StatesAndBehaviors,o as Variants,D as __namedExportsOrder,H as default};
