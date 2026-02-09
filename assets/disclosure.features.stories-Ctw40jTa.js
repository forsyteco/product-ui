import{j as e}from"./iframe-nrIlHJha.js";import{D as s,a as r,b as o}from"./disclosure-ByWNoLCN.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-B2oasDWN.js";import"./use-resolve-button-type-CQQ8L2GD.js";import"./keyboard-CqkS3r67.js";import"./use-sync-refs-DjpU_bj-.js";import"./open-closed-PTDmPnRa.js";import"./close-provider-18Mg9M_f.js";import"./bugs-BCdwESHN.js";const w={title:"Components/Disclosure/Features",component:s,parameters:{layout:"centered"},argTypes:{defaultOpen:{control:{type:"boolean"},description:"Whether the disclosure is open by default",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},i={render:()=>e.jsxs(s,{children:[e.jsx(r,{children:"What is your refund policy?"}),e.jsx(o,{children:"If you're not satisfied with your purchase, we'll refund you within 30 days."})]})},n={render:()=>e.jsxs(s,{defaultOpen:!0,children:[e.jsx(r,{children:"What is your refund policy?"}),e.jsx(o,{children:"If you're not satisfied with your purchase, we'll refund you within 30 days."})]})},t={render:()=>e.jsxs("div",{className:"w-full max-w-md space-y-2",children:[e.jsxs(s,{children:[e.jsx(r,{children:"What is your refund policy?"}),e.jsx(o,{children:"If you're not satisfied with your purchase, we'll refund you within 30 days."})]}),e.jsxs(s,{children:[e.jsx(r,{children:"Do you offer international shipping?"}),e.jsx(o,{children:"Yes, we ship to over 50 countries worldwide."})]}),e.jsxs(s,{children:[e.jsx(r,{children:"How long does shipping take?"}),e.jsx(o,{children:"Standard shipping takes 5-7 business days. Express shipping is available for 2-3 business days."})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
