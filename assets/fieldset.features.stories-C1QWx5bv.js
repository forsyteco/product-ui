import{j as e}from"./iframe-CFsUuUqa.js";import{F as t}from"./fieldset-omubfQMG.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const i={title:"Components/Fieldset/Features",component:t,parameters:{layout:"centered"},argTypes:{legend:{control:{type:"text"},description:"Legend text for the fieldset"},disabled:{control:{type:"boolean"},description:"Whether the fieldset is disabled"}}},d={render:()=>e.jsx(t,{legend:"Personal Information",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",placeholder:"First Name",className:"w-full px-3 py-2 border rounded"}),e.jsx("input",{type:"text",placeholder:"Last Name",className:"w-full px-3 py-2 border rounded"})]})})},r={render:()=>e.jsx(t,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",placeholder:"Field 1",className:"w-full px-3 py-2 border rounded"}),e.jsx("input",{type:"text",placeholder:"Field 2",className:"w-full px-3 py-2 border rounded"})]})})},s={render:()=>e.jsx(t,{legend:"Disabled Fieldset",disabled:!0,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",placeholder:"Field 1",className:"w-full px-3 py-2 border rounded",disabled:!0}),e.jsx("input",{type:"text",placeholder:"Field 2",className:"w-full px-3 py-2 border rounded",disabled:!0})]})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Fieldset legend="Personal Information">
      <div className="space-y-2">
        <input type="text" placeholder="First Name" className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="Last Name" className="w-full px-3 py-2 border rounded" />
      </div>
    </Fieldset>
}`,...d.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Fieldset>
      <div className="space-y-2">
        <input type="text" placeholder="Field 1" className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="Field 2" className="w-full px-3 py-2 border rounded" />
      </div>
    </Fieldset>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Fieldset legend="Disabled Fieldset" disabled>
      <div className="space-y-2">
        <input type="text" placeholder="Field 1" className="w-full px-3 py-2 border rounded" disabled />
        <input type="text" placeholder="Field 2" className="w-full px-3 py-2 border rounded" disabled />
      </div>
    </Fieldset>
}`,...s.parameters?.docs?.source}}};const c=["WithLegend","WithoutLegend","Disabled"];export{s as Disabled,d as WithLegend,r as WithoutLegend,c as __namedExportsOrder,i as default};
