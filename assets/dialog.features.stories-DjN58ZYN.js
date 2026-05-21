import{r,j as e}from"./iframe-B_2llF5Y.js";import{D as i,a as l,b as c,c as m}from"./dialog-BWqtAvNi.js";import{B as t}from"./button-YhwC3Rez.js";import{I as p}from"./input-VcLgkGRq.js";import{T as d}from"./textarea-yc5MlhTN.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./keyboard-QYgd7fbf.js";import"./use-sync-refs-CSzU11Xt.js";import"./use-tab-direction-ziYd1suT.js";import"./hidden-CK96wpYy.js";import"./portal-I3ELlmnV.js";import"./focus-management-BFsEMdS0.js";import"./index-DWBCX9CX.js";import"./index-DMaG-6Cr.js";import"./use-inert-others-BzaBSUa_.js";import"./transition-BQaecAQy.js";import"./use-is-mounted-D64NyRxR.js";import"./open-closed-x_SKEq2Y.js";import"./description-BI7dEA1n.js";import"./index-B8k91cqS.js";import"./spinner-DhLtk9jQ.js";import"./field-autofill-props-Dh75dEkE.js";import"./input-shell-YTGH2IZD.js";const R={title:"Components/Dialog/Features",component:i,parameters:{layout:"centered"},argTypes:{open:{control:{type:"boolean"},description:"Whether the dialog is open"}}},s={render:()=>{const[a,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsx(i,{open:a,onClose:()=>n(!1),children:e.jsxs(l,{children:[e.jsx(c,{children:"Confirm Action"}),e.jsx(m,{children:"Are you sure you want to proceed? This action cannot be undone."}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(t,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>n(!1),children:"Confirm"})]})]})})]})}},o={render:()=>{const[a,n]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Form Dialog"}),e.jsx(i,{open:a,onClose:()=>n(!1),children:e.jsxs(l,{children:[e.jsx(c,{children:"Create New Item"}),e.jsx(m,{children:"Fill in the details below to create a new item."}),e.jsxs("form",{className:"mt-4 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Name"}),e.jsx(p,{type:"text",className:"mt-1",placeholder:"Item name"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Description"}),e.jsx(d,{className:"mt-1",rows:3,placeholder:"Describe the item"})]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(t,{type:"button",variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{type:"submit",onClick:()=>n(!1),children:"Create"})]})]})]})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Basic","WithForm"];export{s as Basic,o as WithForm,q as __namedExportsOrder,R as default};
