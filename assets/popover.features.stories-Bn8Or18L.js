import{j as e}from"./iframe-rkvXkcPn.js";import{P as r,a as s,b as n}from"./popover-BVar2Nty.js";import{B as a}from"./button-CxtlPf_U.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./popover-DOqZCAVg.js";import"./use-resolve-button-type-Bxr6Vt74.js";import"./keyboard-ByedxuE2.js";import"./use-sync-refs-B6ZSIoRc.js";import"./floating-Bs9MZ1gB.js";import"./index-Cq7Zl3Z-.js";import"./index-CETgZHFe.js";import"./use-event-listener-CtF8xKVk.js";import"./portal-QJFU0dWI.js";import"./focus-management-Bx46CJ0W.js";import"./use-tab-direction-CtV1WH2g.js";import"./hidden-DJhC1tAv.js";import"./open-closed-BS-lTtUD.js";import"./bugs-BblNTk-s.js";import"./spinner-BENKnx41.js";import"./visually-hidden-CzgnCfci.js";import"./index-cXaQtA9H.js";const C={title:"Components/Popover/Features",component:r,parameters:{layout:"centered"}},o={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Open Popover"}),e.jsxs(n,{children:[e.jsx("h3",{className:"text-base font-medium text-gray-900 mb-2",children:"Popover Title"}),e.jsx("p",{className:"text-base text-gray-600",children:"This is the popover content."})]})]})},t={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Filter"}),e.jsx(n,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Status"}),e.jsxs("select",{className:"mt-1 block w-full rounded-md border-gray-300",children:[e.jsx("option",{children:"All"}),e.jsx("option",{children:"Active"}),e.jsx("option",{children:"Inactive"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Date Range"}),e.jsx("input",{type:"date",className:"mt-1 block w-full rounded-md border-gray-300"})]}),e.jsx(a,{type:"submit",className:"w-full",children:"Apply"})]})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
