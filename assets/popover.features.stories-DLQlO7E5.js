import{j as e}from"./iframe-Ccv72OAP.js";import{P as r,a as s,b as n}from"./popover-j_SYR6CW.js";import{B as a}from"./button-CwzOfVEx.js";import{I as i}from"./input-CZL3yf2S.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./popover-CbWRWG3Z.js";import"./use-resolve-button-type-CVFXSLBs.js";import"./keyboard-Bj8Si4my.js";import"./use-sync-refs-YRg-9jEj.js";import"./floating-K3v631rL.js";import"./index-3FYpRak_.js";import"./index-CX2OxCDR.js";import"./use-event-listener-D6-LGSM8.js";import"./portal-T5jVZpWw.js";import"./focus-management-18jBgMrJ.js";import"./use-tab-direction-C4ZYVEX1.js";import"./hidden-DU9ztPDp.js";import"./open-closed-CqLh23QT.js";import"./bugs-BEd2wVVK.js";import"./spinner-BrVw5Cwa.js";import"./index-B8k91cqS.js";import"./field-autofill-props-Dh75dEkE.js";import"./input-shell-BEaxTnXJ.js";const O={title:"Components/Popover/Features",component:r,parameters:{layout:"centered"}},t={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Open Popover"}),e.jsxs(n,{children:[e.jsx("h3",{className:"text-base font-medium text-gray-900 mb-2",children:"Popover Title"}),e.jsx("p",{className:"text-base text-gray-600",children:"This is the popover content."})]})]})},o={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Filter"}),e.jsx(n,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Status"}),e.jsxs("select",{className:"mt-1 block w-full rounded-md border-gray-300",children:[e.jsx("option",{children:"All"}),e.jsx("option",{children:"Active"}),e.jsx("option",{children:"Inactive"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Date Range"}),e.jsx(i,{type:"date",className:"mt-1"})]}),e.jsx(a,{type:"submit",className:"w-full",children:"Apply"})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger>Open Popover</PopoverTrigger>
      <PopoverContent>
        <h3 className="text-base font-medium text-gray-900 mb-2">Popover Title</h3>
        <p className="text-base text-gray-600">This is the popover content.</p>
      </PopoverContent>
    </Popover>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
            <Input type="date" className="mt-1" />
          </div>
          <Button type="submit" className="w-full">
            Apply
          </Button>
        </form>
      </PopoverContent>
    </Popover>
}`,...o.parameters?.docs?.source}}};const R=["Basic","WithForm"];export{t as Basic,o as WithForm,R as __namedExportsOrder,O as default};
