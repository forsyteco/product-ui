import{j as e,r as h}from"./iframe-BUQwbYxk.js";import{B as r}from"./button-NdF9TB-q.js";import{I as B}from"./inbox-Cy6rCpTE.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./spinner-DBXYQwoI.js";import"./index-B8k91cqS.js";import"./createLucideIcon-B8Aa1qJ1.js";const T={title:"Components/Button/Features",component:r,parameters:{layout:"centered"}},a={render:()=>e.jsx(r,{variant:"primary",children:"Primary"})},s={render:()=>e.jsx(r,{variant:"secondary",children:"Secondary"})},o={render:()=>e.jsx(r,{variant:"outline",children:"Outline"})},i={render:()=>e.jsx(r,{variant:"ghost",children:"Ghost"})},c={render:()=>e.jsx(r,{variant:"destructive",children:"Destructive"})},d={render:()=>e.jsx(r,{size:"sm",children:"Small"})},l={render:()=>e.jsx(r,{size:"md",children:"Medium"})},u={render:()=>e.jsx(r,{size:"lg",children:"Large"})},m={render:()=>e.jsx(r,{icon:B,"aria-label":"Notifications",description:"View notifications"})},p={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(r,{disabled:!0,children:"Disabled Primary"}),e.jsx(r,{variant:"secondary",disabled:!0,children:"Disabled Secondary"})]})},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{inactive:!0,children:"Inactive"}),e.jsx(r,{title:"External tooltip",children:"External tooltip"}),e.jsx(r,{description:"Described tooltip",children:"Described tooltip"})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{"aria-haspopup":"menu","aria-expanded":"false",children:"Menu anchor"}),e.jsx(r,{loading:!0,children:"Loading"}),e.jsx(f,{})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{description:"Open inbox",keybindingHint:"G+I",children:"Keybinding hint"}),e.jsx(S,{})]})]})},f=()=>{const[g,n]=h.useState(!1);return e.jsx(r,{loading:g,onClick:()=>n(t=>!t),description:"Click to toggle loading",children:"Toggle loading"})},S=()=>{const[g,n]=h.useState(!1),t=h.useRef(null),v=()=>{t.current!==null&&(clearTimeout(t.current),t.current=null)};return e.jsxs("div",{onMouseEnter:()=>{v(),t.current=window.setTimeout(()=>n(!0),800)},onMouseLeave:()=>{v(),n(!1)},className:"relative",children:[e.jsx(r,{description:"Tooltip after delay",children:"Long delayed tooltip"}),g?e.jsx("span",{className:"absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white",children:"Tooltip after delay"}):null]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="primary">Primary</Button>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="secondary">Secondary</Button>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="outline">Outline</Button>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="ghost">Ghost</Button>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="destructive">Destructive</Button>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Button size="sm">Small</Button>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Button size="md">Medium</Button>
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Button size="lg">Large</Button>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Button icon={Inbox} aria-label="Notifications" description="View notifications" />
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Button disabled>Disabled Primary</Button>
      <Button variant="secondary" disabled>
        Disabled Secondary
      </Button>
    </div>
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Button inactive>Inactive</Button>
          <Button title="External tooltip">External tooltip</Button>
          <Button description="Described tooltip">Described tooltip</Button>
        </div>
        <div className="flex items-center gap-3">
          <Button aria-haspopup="menu" aria-expanded="false">
            Menu anchor
          </Button>
          <Button loading>Loading</Button>
          <LoadingTriggerDemo />
        </div>
        <div className="flex items-center gap-3">
          <Button description="Open inbox" keybindingHint="G+I">
            Keybinding hint
          </Button>
          <LongDelayTooltipDemo />
        </div>
      </div>;
  }
}`,...x.parameters?.docs?.source}}};const E=["Primary","Secondary","Outline","Ghost","Destructive","SizeSmall","SizeMedium","SizeLarge","IconOnly","Disabled","StatesAndBehaviors"];export{c as Destructive,p as Disabled,i as Ghost,m as IconOnly,o as Outline,a as Primary,s as Secondary,u as SizeLarge,l as SizeMedium,d as SizeSmall,x as StatesAndBehaviors,E as __namedExportsOrder,T as default};
