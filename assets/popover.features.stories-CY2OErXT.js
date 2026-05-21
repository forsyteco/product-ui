import{j as e}from"./iframe-C_TxvPYL.js";import{P as r,a as s,b as n}from"./popover-B-EKu1cc.js";import{B as a}from"./button-Bqw4M8X3.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./popover-BsscvJnk.js";import"./useFocusRing-BLeHenNf.js";import"./use-resolve-button-type-7cGRNqUr.js";import"./keyboard-D-d5xU5t.js";import"./use-sync-refs-CD9OZkD4.js";import"./floating-JWLa5HRk.js";import"./index-Ca65woEg.js";import"./index-ByS2HjQk.js";import"./use-event-listener-B_Hmb7EM.js";import"./portal-DgNF7_mA.js";import"./focus-management-D31FE4zT.js";import"./use-tab-direction-DZVqnoIT.js";import"./hidden-C9RbYL4s.js";import"./open-closed-BQ-jk4i9.js";import"./bugs-CviBSKgF.js";import"./spinner-BMUkWA1_.js";import"./visually-hidden-CS5TVNRS.js";import"./index-cXaQtA9H.js";const F={title:"Components/Popover/Features",component:r,parameters:{layout:"centered"}},o={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Open Popover"}),e.jsxs(n,{children:[e.jsx("h3",{className:"text-base font-medium text-gray-900 mb-2",children:"Popover Title"}),e.jsx("p",{className:"text-base text-gray-600",children:"This is the popover content."})]})]})},t={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Filter"}),e.jsx(n,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Status"}),e.jsxs("select",{className:"mt-1 block w-full rounded-md border-gray-300",children:[e.jsx("option",{children:"All"}),e.jsx("option",{children:"Active"}),e.jsx("option",{children:"Inactive"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Date Range"}),e.jsx("input",{type:"date",className:"mt-1 block w-full rounded-md border-gray-300"})]}),e.jsx(a,{type:"submit",className:"w-full",children:"Apply"})]})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const S=["Basic","WithForm"];export{o as Basic,t as WithForm,S as __namedExportsOrder,F as default};
