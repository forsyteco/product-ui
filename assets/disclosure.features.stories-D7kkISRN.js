import{j as e}from"./iframe-Bbi4Wu2n.js";import{D as s,a as r,b as o}from"./disclosure-D7o3SfPl.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-Cr6_nyWp.js";import"./use-resolve-button-type-ngWtVHmY.js";import"./keyboard-CNKbYmCx.js";import"./use-sync-refs-vr87eQ-t.js";import"./open-closed-BTRjoMdZ.js";import"./close-provider-zN25DST3.js";import"./bugs-C4Onqh7Z.js";const w={title:"Components/Disclosure/Features",component:s,parameters:{layout:"centered"},argTypes:{defaultOpen:{control:{type:"boolean"},description:"Whether the disclosure is open by default",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},i={render:()=>e.jsxs(s,{children:[e.jsx(r,{children:"What is your refund policy?"}),e.jsx(o,{children:"If you're not satisfied with your purchase, we'll refund you within 30 days."})]})},n={render:()=>e.jsxs(s,{defaultOpen:!0,children:[e.jsx(r,{children:"What is your refund policy?"}),e.jsx(o,{children:"If you're not satisfied with your purchase, we'll refund you within 30 days."})]})},t={render:()=>e.jsxs("div",{className:"w-full max-w-md space-y-2",children:[e.jsxs(s,{children:[e.jsx(r,{children:"What is your refund policy?"}),e.jsx(o,{children:"If you're not satisfied with your purchase, we'll refund you within 30 days."})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Do you offer international shipping?"}),e.jsx(o,{children:"Yes, we ship to over 50 countries worldwide."})]}),e.jsxs(s,{children:[e.jsx(r,{children:"How long does shipping take?"}),e.jsx(o,{children:"Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days."})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Disclosure>
      <DisclosureButton>What is your refund policy?</DisclosureButton>
      <DisclosurePanel>
        If you're not satisfied with your purchase, we'll refund you within 30 days.
      </DisclosurePanel>
    </Disclosure>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Disclosure defaultOpen>
      <DisclosureButton>What is your refund policy?</DisclosureButton>
      <DisclosurePanel>
        If you're not satisfied with your purchase, we'll refund you within 30 days.
      </DisclosurePanel>
    </Disclosure>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md space-y-2">
      <Disclosure>
        <DisclosureButton>What is your refund policy?</DisclosureButton>
        <DisclosurePanel>
          If you're not satisfied with your purchase, we'll refund you within 30 days.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton>Do you offer international shipping?</DisclosureButton>
        <DisclosurePanel>
          Yes, we ship to over 50 countries worldwide.
        </DisclosurePanel>
      </Disclosure>
      <Disclosure>
        <DisclosureButton>How long does shipping take?</DisclosureButton>
        <DisclosurePanel>
          Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days.
        </DisclosurePanel>
      </Disclosure>
    </div>
}`,...t.parameters?.docs?.source}}};const x=["DefaultClosed","DefaultOpen","MultipleItems"];export{i as DefaultClosed,n as DefaultOpen,t as MultipleItems,x as __namedExportsOrder,w as default};
