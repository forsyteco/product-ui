import{j as e}from"./iframe-CFsUuUqa.js";import{T as r}from"./textarea-Dt8Po3GE.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const n={title:"Components/Textarea/Features",component:r,parameters:{layout:"centered"},argTypes:{error:{control:{type:"boolean"},description:"Whether the textarea has an error"},disabled:{control:{type:"boolean"},description:"Whether the textarea is disabled"},placeholder:{control:{type:"text"},description:"Placeholder text"},rows:{control:{type:"number",min:1,max:20},description:"Number of rows"}}},a={render:()=>e.jsxs("div",{className:"space-y-4 w-64",children:[e.jsx(r,{placeholder:"Small (2 rows)",rows:2}),e.jsx(r,{placeholder:"Medium (4 rows)",rows:4}),e.jsx(r,{placeholder:"Large (6 rows)",rows:6})]})},o={render:()=>e.jsxs("div",{className:"space-y-4 w-64",children:[e.jsx(r,{placeholder:"Normal textarea"}),e.jsx(r,{placeholder:"Disabled textarea",disabled:!0}),e.jsx(r,{placeholder:"Error textarea",error:!0}),e.jsx(r,{placeholder:"Readonly textarea",readOnly:!0,value:"Readonly value"})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-64">
      <Textarea placeholder="Small (2 rows)" rows={2} />
      <Textarea placeholder="Medium (4 rows)" rows={4} />
      <Textarea placeholder="Large (6 rows)" rows={6} />
    </div>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-64">
      <Textarea placeholder="Normal textarea" />
      <Textarea placeholder="Disabled textarea" disabled />
      <Textarea placeholder="Error textarea" error />
      <Textarea placeholder="Readonly textarea" readOnly value="Readonly value" />
    </div>
}`,...o.parameters?.docs?.source}}};const p=["Sizes","States"];export{a as Sizes,o as States,p as __namedExportsOrder,n as default};
