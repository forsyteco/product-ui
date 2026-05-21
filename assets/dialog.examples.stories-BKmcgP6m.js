import{r as i,j as e}from"./iframe-CGF0_A5u.js";import{D as s,a as m,b as p,c}from"./dialog-CnMyMzZt.js";import{B as o}from"./button-BQZjnb19.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./keyboard-D86mmLzy.js";import"./use-sync-refs-BQJai7yY.js";import"./use-event-listener-CXGnWSGZ.js";import"./portal-CIPjWJEZ.js";import"./focus-management-DtCYyGj7.js";import"./index-BF50FvRs.js";import"./index-D85rYT82.js";import"./use-inert-others-Bs_h4dt8.js";import"./use-tab-direction-CztDD27H.js";import"./hidden--9eMrDrq.js";import"./transition-DSDAgwnG.js";import"./use-is-mounted-B3msSAla.js";import"./open-closed-VIqDAeBc.js";import"./description-Cg8HyQS4.js";import"./active-element-history-BYvFK8IE.js";import"./spinner-MP4NfyXZ.js";import"./index-B8k91cqS.js";const _={title:"Components/Dialog/Examples",component:s,parameters:{layout:"padded"}},n={render:()=>{const[r,t]=i.useState(!1),[a,l]=i.useState(!1);return e.jsxs("div",{className:"p-6",children:[e.jsx(o,{variant:"destructive",onClick:()=>t(!0),children:"Delete Item"}),a&&e.jsx("p",{className:"mt-4 text-green-600",children:"Item deleted!"}),e.jsx(s,{open:r,onClose:()=>t(!1),children:e.jsxs(m,{children:[e.jsx(p,{children:"Delete Item"}),e.jsx(c,{children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[e.jsx(o,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(o,{variant:"destructive",onClick:()=>{l(!0),t(!1)},children:"Delete"})]})]})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    return <div className="p-6">
        <Button variant="destructive" onClick={() => setIsOpen(true)}>
          Delete Item
        </Button>
        {confirmed && <p className="mt-4 text-green-600">Item deleted!</p>}
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogPanel>
            <DialogTitle>Delete Item</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this item? This action cannot be undone.
            </DialogDescription>
            <div className="mt-6 flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={() => {
              setConfirmed(true);
              setIsOpen(false);
            }}>
                Delete
              </Button>
            </div>
          </DialogPanel>
        </Dialog>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};const R=["ConfirmationDialog"];export{n as ConfirmationDialog,R as __namedExportsOrder,_ as default};
