import{j as e}from"./iframe-BZ1wujjQ.js";import{D as r,a as n,b as t}from"./disclosure-BKWXFBvr.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BfnhhEST.js";import"./use-resolve-button-type-BdBbSlJ2.js";import"./keyboard-Ce2CPQ3X.js";import"./use-sync-refs-DKphwUq6.js";import"./open-closed-DMtSAjel.js";import"./close-provider-CDBggudH.js";import"./bugs-CWise-ep.js";const g={title:"Components/Disclosure",component:r,parameters:{layout:"centered",docs:{description:{component:"A disclosure component for showing and hiding content. Built with Headless UI for accessibility."}}},argTypes:{defaultOpen:{control:{type:"boolean"},description:"Whether the disclosure is open by default",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},s={render:()=>e.jsxs(r,{children:[e.jsx(n,{children:"What is your refund policy?"}),e.jsx(t,{children:"If you're not satisfied with your purchase, we'll refund you within 30 days."})]})},o={render:a=>e.jsxs(r,{...a,children:[e.jsx(n,{children:"Toggle Content"}),e.jsx(t,{children:"This is the disclosure panel content. It can contain any React elements."})]}),args:{defaultOpen:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Disclosure>
      <DisclosureButton>What is your refund policy?</DisclosureButton>
      <DisclosurePanel>
        If you're not satisfied with your purchase, we'll refund you within 30 days.
      </DisclosurePanel>
    </Disclosure>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <Disclosure {...args}>
      <DisclosureButton>Toggle Content</DisclosureButton>
      <DisclosurePanel>
        This is the disclosure panel content. It can contain any React elements.
      </DisclosurePanel>
    </Disclosure>,
  args: {
    defaultOpen: false
  }
}`,...o.parameters?.docs?.source}}};const x=["Default","Playground"];export{s as Default,o as Playground,x as __namedExportsOrder,g as default};
