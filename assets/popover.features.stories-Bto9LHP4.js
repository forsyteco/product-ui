import{j as e}from"./iframe-CeYd32X8.js";import{P as r,a as s,b as n}from"./popover-BE5PRtBR.js";import{B as a}from"./button-CxpgOoq8.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DXUggmaQ.js";import"./use-resolve-button-type-FwMgqBLi.js";import"./keyboard-BoF71p42.js";import"./use-sync-refs-ry5utqyI.js";import"./floating-Bn-YBmfF.js";import"./index-DYyT_JbS.js";import"./index-Fzrzh3PM.js";import"./use-event-listener-YoiA5kE_.js";import"./portal-0gor4Twm.js";import"./focus-management-DoY0kjxM.js";import"./use-tab-direction-CpZ9KP3-.js";import"./hidden-DipbFeWg.js";import"./open-closed-DQGie1tM.js";import"./close-provider-DQYUtmEZ.js";import"./bugs-Red6znm7.js";import"./index-cXaQtA9H.js";const F={title:"Components/Popover/Features",component:r,parameters:{layout:"centered"}},o={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Open Popover"}),e.jsxs(n,{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900 mb-2",children:"Popover Title"}),e.jsx("p",{className:"text-sm text-gray-600",children:"This is the popover content."})]})]})},t={render:()=>e.jsxs(r,{children:[e.jsx(s,{children:"Filter"}),e.jsx(n,{children:e.jsxs("form",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Status"}),e.jsxs("select",{className:"mt-1 block w-full rounded-md border-gray-300",children:[e.jsx("option",{children:"All"}),e.jsx("option",{children:"Active"}),e.jsx("option",{children:"Inactive"})]})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Date Range"}),e.jsx("input",{type:"date",className:"mt-1 block w-full rounded-md border-gray-300"})]}),e.jsx(a,{type:"submit",className:"w-full",children:"Apply"})]})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverButton>Open Popover</PopoverButton>
      <PopoverPanel>
        <h3 className="text-sm font-medium text-gray-900 mb-2">Popover Title</h3>
        <p className="text-sm text-gray-600">This is the popover content.</p>
      </PopoverPanel>
    </Popover>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverButton>Filter</PopoverButton>
      <PopoverPanel>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <select className="mt-1 block w-full rounded-md border-gray-300">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date Range</label>
            <input type="date" className="mt-1 block w-full rounded-md border-gray-300" />
          </div>
          <Button type="submit" className="w-full">
            Apply
          </Button>
        </form>
      </PopoverPanel>
    </Popover>
}`,...t.parameters?.docs?.source}}};const S=["Basic","WithForm"];export{o as Basic,t as WithForm,S as __namedExportsOrder,F as default};
