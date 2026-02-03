import{j as e}from"./iframe-DCut3pB0.js";import{S as o}from"./select-CNi-m0gJ.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const d={title:"Components/Select/Features",component:o,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},error:{control:{type:"boolean"},description:"Whether the select has an error"},disabled:{control:{type:"boolean"},description:"Whether the select is disabled"}}},s=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],r={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(o,{options:s,placeholder:"Select an option..."})})},a={render:()=>e.jsxs("div",{className:"space-y-4 w-64",children:[e.jsx(o,{options:s,placeholder:"Normal"}),e.jsx(o,{options:s,placeholder:"Disabled",disabled:!0}),e.jsx(o,{options:s,placeholder:"Error",error:!0})]})},t={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(o,{options:[{value:"1",label:"Option 1"},{value:"2",label:"Option 2",disabled:!0},{value:"3",label:"Option 3"}],placeholder:"Select..."})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <Select options={options} placeholder="Select an option..." />
    </div>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-64">
      <Select options={options} placeholder="Normal" />
      <Select options={options} placeholder="Disabled" disabled />
      <Select options={options} placeholder="Error" error />
    </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <Select options={[{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2',
      disabled: true
    }, {
      value: '3',
      label: 'Option 3'
    }]} placeholder="Select..." />
    </div>
}`,...t.parameters?.docs?.source}}};const m=["Basic","States","WithDisabledOptions"];export{r as Basic,a as States,t as WithDisabledOptions,m as __namedExportsOrder,d as default};
