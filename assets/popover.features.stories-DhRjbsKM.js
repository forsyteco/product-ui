import{j as e}from"./iframe-DB_8LERs.js";import{P as r,a as s,b as n}from"./popover-otC0f4-N.js";import{I as a}from"./input-rX7Rx8G6.js";import{B as i}from"./button-vlU5xtrA.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./popover-BszV3V2i.js";import"./use-resolve-button-type-BN55sZyI.js";import"./keyboard-Cg7wVIGU.js";import"./use-sync-refs-Bj63Ftjs.js";import"./floating-BNmG-KQQ.js";import"./index-Ttl_GQoe.js";import"./index-bUy05opc.js";import"./use-tab-direction-BsWChW3V.js";import"./hidden-h5uJ3vK0.js";import"./portal-B6vRqhM6.js";import"./focus-management-J3wIshax.js";import"./open-closed-B_WZ0Ptj.js";import"./bugs-BEdUOfH9.js";import"./field-autofill-props-Dh75dEkE.js";import"./input-shell-lz5TZXvM.js";import"./index-B8k91cqS.js";import"./spinner-DLtEokUl.js";const S={title:"Components/Popover/Features",component:r,parameters:{layout:"centered"}},t={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Open Popover"}),e.jsxs(n,{children:[e.jsx("h3",{className:"text-base font-medium text-gray-900 mb-2",children:"Popover Title"}),e.jsx("p",{className:"text-base text-gray-600",children:"This is the popover content."})]})]})},o={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Filter"}),e.jsx(n,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Status"}),e.jsxs("select",{className:"mt-1 block w-full rounded-md border-gray-300",children:[e.jsx("option",{children:"All"}),e.jsx("option",{children:"Active"}),e.jsx("option",{children:"Inactive"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Date Range"}),e.jsx(a,{type:"date",className:"mt-1"})]}),e.jsx(i,{type:"submit",className:"w-full",children:"Apply"})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const O=["Basic","WithForm"];export{t as Basic,o as WithForm,O as __namedExportsOrder,S as default};
