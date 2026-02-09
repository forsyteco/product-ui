import{j as e}from"./iframe-ii299Cu5.js";import{P as r,a as s,b as n}from"./popover-17XlkfZ7.js";import{B as a}from"./button-BrNYjvaN.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./popover-CvQVOc0V.js";import"./useFocusRing-DYa9A5i-.js";import"./use-resolve-button-type-CBZ1aI4k.js";import"./keyboard-D7njr0Xf.js";import"./use-sync-refs-BBkBdVyb.js";import"./floating-BdPeDLnn.js";import"./index-BqGO5dbw.js";import"./index-C_Qt56wl.js";import"./use-event-listener-DepPRdL3.js";import"./portal-usdoFaVe.js";import"./focus-management-BKYhelLL.js";import"./use-tab-direction-B8ITvRVO.js";import"./hidden-Cn_SrqBj.js";import"./open-closed-DdTmSrOB.js";import"./close-provider-Dgt0-60Y.js";import"./bugs-C2OHvTm5.js";import"./index-cXaQtA9H.js";const S={title:"Components/Popover/Features",component:r,parameters:{layout:"centered"}},o={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Open Popover"}),e.jsxs(n,{children:[e.jsx("h3",{className:"text-base font-medium text-gray-900 mb-2",children:"Popover Title"}),e.jsx("p",{className:"text-base text-gray-600",children:"This is the popover content."})]})]})},t={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Filter"}),e.jsx(n,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Status"}),e.jsxs("select",{className:"mt-1 block w-full rounded-md border-gray-300",children:[e.jsx("option",{children:"All"}),e.jsx("option",{children:"Active"}),e.jsx("option",{children:"Inactive"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Date Range"}),e.jsx("input",{type:"date",className:"mt-1 block w-full rounded-md border-gray-300"})]}),e.jsx(a,{type:"submit",className:"w-full",children:"Apply"})]})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverButton>Open Popover</PopoverButton>
      <PopoverPanel>
        <h3 className="text-base font-medium text-gray-900 mb-2">Popover Title</h3>
        <p className="text-base text-gray-600">This is the popover content.</p>
      </PopoverPanel>
    </Popover>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverButton>Filter</PopoverButton>
      <PopoverPanel>
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
      </PopoverPanel>
    </Popover>
}`,...t.parameters?.docs?.source}}};const T=["Basic","WithForm"];export{o as Basic,t as WithForm,T as __namedExportsOrder,S as default};
