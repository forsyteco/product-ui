import{j as e}from"./iframe-CNYYlD36.js";import{F as t}from"./fieldset-B1FRcXAP.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const i={title:"Components/Fieldset",component:t,parameters:{layout:"centered",docs:{description:{component:"A fieldset component for grouping form fields. Supports optional legend and all standard fieldset HTML attributes."}}},argTypes:{legend:{control:{type:"text"},description:"Legend text for the fieldset"},disabled:{control:{type:"boolean"},description:"Whether the fieldset is disabled"}},tags:["autodocs"]},r={render:()=>e.jsx(t,{legend:"Personal Information",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",placeholder:"First Name",className:"w-full px-3 py-2 border rounded"}),e.jsx("input",{type:"text",placeholder:"Last Name",className:"w-full px-3 py-2 border rounded"})]})})},s={render:a=>e.jsx(t,{...a,children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("input",{type:"text",placeholder:"Field 1",className:"w-full px-3 py-2 border rounded"}),e.jsx("input",{type:"text",placeholder:"Field 2",className:"w-full px-3 py-2 border rounded"})]})}),args:{legend:"Form Section",disabled:!1}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Fieldset legend="Personal Information">
      <div className="space-y-2">
        <input type="text" placeholder="First Name" className="w-full px-3 py-2 border rounded" />
        <input type="text" placeholder="Last Name" className="w-full px-3 py-2 border rounded" />
      </div>
    </Fieldset>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const c=["Default","Playground"];export{r as Default,s as Playground,c as __namedExportsOrder,i as default};
