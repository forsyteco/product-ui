import{j as e}from"./iframe-2gSw_mv2.js";import{P as r,a as s,b as n}from"./popover-D3yWew2E.js";import{B as a}from"./button-CJEJXt86.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./popover-3PGTm5Iq.js";import"./use-resolve-button-type-BJkWDc_4.js";import"./keyboard-BaAOKfHq.js";import"./use-sync-refs-DmqRrsUT.js";import"./floating-C3szj9N5.js";import"./index-CfTXRGMP.js";import"./index-DkkTbRiJ.js";import"./use-event-listener-DGw3SnZo.js";import"./portal-Bro9fcSW.js";import"./focus-management-COn_JIX_.js";import"./use-tab-direction-FLyxlZ_n.js";import"./hidden-CNfTMTAC.js";import"./open-closed-BO3DqZNu.js";import"./bugs-CQkR_j0_.js";import"./spinner-mOKOfvx7.js";import"./index-B8k91cqS.js";const C={title:"Components/Popover/Features",component:r,parameters:{layout:"centered"}},o={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Open Popover"}),e.jsxs(n,{children:[e.jsx("h3",{className:"text-base font-medium text-gray-900 mb-2",children:"Popover Title"}),e.jsx("p",{className:"text-base text-gray-600",children:"This is the popover content."})]})]})},t={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Filter"}),e.jsx(n,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Status"}),e.jsxs("select",{className:"mt-1 block w-full rounded-md border-gray-300",children:[e.jsx("option",{children:"All"}),e.jsx("option",{children:"Active"}),e.jsx("option",{children:"Inactive"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Date Range"}),e.jsx("input",{type:"date",className:"mt-1 block w-full rounded-md border-gray-300"})]}),e.jsx(a,{type:"submit",className:"w-full",children:"Apply"})]})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger>Open Popover</PopoverTrigger>
      <PopoverContent>
        <h3 className="text-base font-medium text-gray-900 mb-2">Popover Title</h3>
        <p className="text-base text-gray-600">This is the popover content.</p>
      </PopoverContent>
    </Popover>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger>Filter</PopoverTrigger>
      <PopoverContent>
        <form className="space-y-4">
          <div>
            <label className="block text-base font-medium text-gray-700">Status</label>
            <select className="mt-1 block w-full rounded-md border-gray-300">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div>
            <label className="block text-base font-medium text-gray-700">Date Range</label>
            <input type="date" className="mt-1 block w-full rounded-md border-gray-300" />
          </div>
          <Button type="submit" className="w-full">
            Apply
          </Button>
        </form>
      </PopoverContent>
    </Popover>
}`,...t.parameters?.docs?.source}}};const F=["Basic","WithForm"];export{o as Basic,t as WithForm,F as __namedExportsOrder,C as default};
