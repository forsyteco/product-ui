import{r,j as e}from"./iframe-CxYaNlfa.js";import{D as i,a as l,b as c,c as m}from"./dialog-auJWrJyY.js";import{B as t}from"./button-hQaN4FMQ.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./keyboard-B83W2K4O.js";import"./use-sync-refs-CzTZ0nVq.js";import"./use-event-listener-C9ri-zWy.js";import"./portal-CbQ4upMP.js";import"./focus-management-ClluBnCx.js";import"./index-C20LchO5.js";import"./index-BjqpgS9N.js";import"./use-inert-others-B76WlhWb.js";import"./use-tab-direction-BDjmyAdn.js";import"./hidden-D0DTjsv9.js";import"./transition-DZKFvljt.js";import"./use-is-mounted-DZa0474T.js";import"./open-closed-B5Dl-UPG.js";import"./description-C8AuhUpm.js";import"./active-element-history-D2ClwfRM.js";import"./spinner-3-TdU7zT.js";import"./visually-hidden-0Sws8sXy.js";import"./index-cXaQtA9H.js";const A={title:"Components/Dialog/Features",component:i,parameters:{layout:"centered"},argTypes:{open:{control:{type:"boolean"},description:"Whether the dialog is open"}}},o={render:()=>{const[a,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsx(i,{open:a,onClose:()=>n(!1),children:e.jsxs(l,{children:[e.jsx(c,{children:"Confirm Action"}),e.jsx(m,{children:"Are you sure you want to proceed? This action cannot be undone."}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(t,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>n(!1),children:"Confirm"})]})]})})]})}},s={render:()=>{const[a,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Form Dialog"}),e.jsx(i,{open:a,onClose:()=>n(!1),children:e.jsxs(l,{children:[e.jsx(c,{children:"Create New Item"}),e.jsx(m,{children:"Fill in the details below to create a new item."}),e.jsxs("form",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Name"}),e.jsx("input",{type:"text",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Description"}),e.jsx("textarea",{className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm",rows:3})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(t,{type:"button",variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{type:"submit",onClick:()=>n(!1),children:"Create"})]})]})]})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>
          Open Dialog
        </Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogPanel>
            <DialogTitle>Confirm Action</DialogTitle>
            <DialogDescription>
              Are you sure you want to proceed? This action cannot be undone.
            </DialogDescription>
            <div className="mt-4 flex justify-end gap-2">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </div>
          </DialogPanel>
        </Dialog>
      </>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>
          Open Form Dialog
        </Button>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogPanel>
            <DialogTitle>Create New Item</DialogTitle>
            <DialogDescription>
              Fill in the details below to create a new item.
            </DialogDescription>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-base font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">Description</label>
                <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" rows={3} />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" onClick={() => setIsOpen(false)}>
                  Create
                </Button>
              </div>
            </form>
          </DialogPanel>
        </Dialog>
      </>;
  }
}`,...s.parameters?.docs?.source}}};const E=["Basic","WithForm"];export{o as Basic,s as WithForm,E as __namedExportsOrder,A as default};
