import{j as e}from"./iframe-Bsx-Ou2Z.js";import{D as r,a as t,b as n}from"./disclosure-BLr4aRGZ.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-6ZyLCJ3R.js";import"./use-resolve-button-type-BN6DbRrF.js";import"./keyboard-DVExfB0A.js";import"./use-sync-refs-CZbgCkNu.js";import"./open-closed-Cv3yQh5L.js";import"./close-provider-zTRs8dzX.js";import"./bugs-6tgLNrUu.js";const x={title:"Components/Disclosure",component:r,parameters:{layout:"centered",docs:{description:{component:"A disclosure component for showing and hiding content. Built with Headless UI for accessibility."}}},argTypes:{defaultOpen:{control:{type:"boolean"},description:"Whether the disclosure is open by default",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},tags:["autodocs"]},s={render:()=>e.jsxs(r,{children:[e.jsx(t,{children:"What is your refund policy?"}),e.jsx(n,{children:"If you're not satisfied with your purchase, we'll refund you within 30 days."})]})},o={render:a=>e.jsxs(r,{...a,children:[e.jsx(t,{children:"Toggle Content"}),e.jsx(n,{children:"This is the disclosure panel content. It can contain any React elements."})]}),args:{defaultOpen:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["Default","Playground"];export{s as Default,o as Playground,j as __namedExportsOrder,x as default};
