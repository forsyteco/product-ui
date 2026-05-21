import{r,j as e}from"./iframe-CGF0_A5u.js";import{D as i,a as l,b as c,c as m}from"./dialog-CnMyMzZt.js";import{B as t}from"./button-BQZjnb19.js";import{I as p}from"./input-CAgUMvUl.js";import{T as d}from"./textarea-CRMkj1go.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./keyboard-D86mmLzy.js";import"./use-sync-refs-BQJai7yY.js";import"./use-event-listener-CXGnWSGZ.js";import"./portal-CIPjWJEZ.js";import"./focus-management-DtCYyGj7.js";import"./index-BF50FvRs.js";import"./index-D85rYT82.js";import"./use-inert-others-Bs_h4dt8.js";import"./use-tab-direction-CztDD27H.js";import"./hidden--9eMrDrq.js";import"./transition-DSDAgwnG.js";import"./use-is-mounted-B3msSAla.js";import"./open-closed-VIqDAeBc.js";import"./description-Cg8HyQS4.js";import"./active-element-history-BYvFK8IE.js";import"./spinner-MP4NfyXZ.js";import"./index-B8k91cqS.js";import"./field-autofill-props-Dh75dEkE.js";const q={title:"Components/Dialog/Features",component:i,parameters:{layout:"centered"},argTypes:{open:{control:{type:"boolean"},description:"Whether the dialog is open"}}},s={render:()=>{const[a,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsx(i,{open:a,onClose:()=>n(!1),children:e.jsxs(l,{children:[e.jsx(c,{children:"Confirm Action"}),e.jsx(m,{children:"Are you sure you want to proceed? This action cannot be undone."}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(t,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>n(!1),children:"Confirm"})]})]})})]})}},o={render:()=>{const[a,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Form Dialog"}),e.jsx(i,{open:a,onClose:()=>n(!1),children:e.jsxs(l,{children:[e.jsx(c,{children:"Create New Item"}),e.jsx(m,{children:"Fill in the details below to create a new item."}),e.jsxs("form",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Name"}),e.jsx(p,{type:"text",className:"mt-1",placeholder:"Item name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Description"}),e.jsx(d,{className:"mt-1",rows:3,placeholder:"Describe the item"})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(t,{type:"button",variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{type:"submit",onClick:()=>n(!1),children:"Create"})]})]})]})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
                <Input type="text" className="mt-1" placeholder="Item name" />
              </div>
              <div>
                <label className="block text-base font-medium text-gray-700">Description</label>
                <Textarea className="mt-1" rows={3} placeholder="Describe the item" />
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
}`,...o.parameters?.docs?.source}}};const z=["Basic","WithForm"];export{s as Basic,o as WithForm,z as __namedExportsOrder,q as default};
