import{j as e}from"./iframe-Bsx-Ou2Z.js";import{F as s}from"./fieldset-CrnPlLCx.js";import"./preload-helper-DEha_CyH.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";const c={title:"Components/Fieldset",component:s,parameters:{layout:"centered",docs:{description:{component:"A fieldset component for grouping form fields. Supports optional legend and all standard fieldset HTML attributes."}}},argTypes:{legend:{control:{type:"text"},description:"Legend text for the fieldset"},disabled:{control:{type:"boolean"},description:"Whether the fieldset is disabled"}},tags:["autodocs"]},r={render:()=>e.jsx(s,{legend:"Personal Information",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",placeholder:"First Name",className:"w-full px-3 py-2 border rounded"}),e.jsx("input",{type:"text",placeholder:"Last Name",className:"w-full px-3 py-2 border rounded"})]})})},t={render:a=>e.jsx(s,{...a,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",placeholder:"Field 1",className:"w-full px-3 py-2 border rounded"}),e.jsx("input",{type:"text",placeholder:"Field 2",className:"w-full px-3 py-2 border rounded"})]})}),args:{legend:"Form Section",disabled:!1}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Fieldset legend="Personal Information">
      <div className="space-y-2">
        <input type="text" placeholder="First Name" className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="Last Name" className="w-full px-3 py-2 border rounded" />
      </div>
    </Fieldset>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <Fieldset {...args}>
      <div className="space-y-2">
        <input type="text" placeholder="Field 1" className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="Field 2" className="w-full px-3 py-2 border rounded" />
      </div>
    </Fieldset>,
  args: {
    legend: 'Form Section',
    disabled: false
  }
}`,...t.parameters?.docs?.source}}};const m=["Default","Playground"];export{r as Default,t as Playground,m as __namedExportsOrder,c as default};
