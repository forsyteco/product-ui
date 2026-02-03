import{j as e}from"./iframe-C3NiGLkr.js";import{S as l}from"./select-D3Zk69sy.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const m={title:"Components/Select/Examples",component:l,parameters:{layout:"padded"}},a={render:()=>e.jsx("div",{className:"p-6 max-w-md",children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"Country"}),e.jsx(l,{options:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"}],placeholder:"Select a country..."})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700 mb-1",children:"State/Province"}),e.jsx(l,{options:[{value:"ny",label:"New York"},{value:"ca",label:"California"},{value:"tx",label:"Texas"}],placeholder:"Select a state..."})]})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-md">
      <form className="space-y-4">
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            Country
          </label>
          <Select options={[{
          value: 'us',
          label: 'United States'
        }, {
          value: 'uk',
          label: 'United Kingdom'
        }, {
          value: 'ca',
          label: 'Canada'
        }, {
          value: 'au',
          label: 'Australia'
        }]} placeholder="Select a country..." />
        </div>
        <div>
          <label className="block text-base font-medium text-gray-700 mb-1">
            State/Province
          </label>
          <Select options={[{
          value: 'ny',
          label: 'New York'
        }, {
          value: 'ca',
          label: 'California'
        }, {
          value: 'tx',
          label: 'Texas'
        }]} placeholder="Select a state..." />
        </div>
      </form>
    </div>
}`,...a.parameters?.docs?.source}}};const i=["CountrySelect"];export{a as CountrySelect,i as __namedExportsOrder,m as default};
