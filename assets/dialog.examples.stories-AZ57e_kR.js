import{r as i,j as e}from"./iframe-DtxS-MGC.js";import{D as s,a as m,b as p,c}from"./dialog-C2JPpjQn.js";import{B as o}from"./button-CnO-AZi5.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./keyboard-DGdCXcdW.js";import"./use-sync-refs-CPbG3aZX.js";import"./use-event-listener-Z9OPufMe.js";import"./portal-DazVI_VC.js";import"./focus-management-DVvF2Sc9.js";import"./index-MJ0bJMXz.js";import"./index-HQ1KwuKc.js";import"./use-inert-others-DZyxT0dB.js";import"./use-tab-direction-QkeD2SYv.js";import"./hidden-iOrYYUkf.js";import"./transition-BkZb5NDJ.js";import"./use-is-mounted-BQ-ntUt9.js";import"./open-closed-CSKGfCwc.js";import"./description-CHeu0Qp6.js";import"./active-element-history-Ll-DDKn9.js";import"./spinner-Bd4_yAFu.js";import"./index-B8k91cqS.js";const _={title:"Components/Dialog/Examples",component:s,parameters:{layout:"padded"}},n={render:()=>{const[r,t]=i.useState(!1),[a,l]=i.useState(!1);return e.jsxs("div",{className:"p-6",children:[e.jsx(o,{variant:"destructive",onClick:()=>t(!0),children:"Delete Item"}),a&&e.jsx("p",{className:"mt-4 text-green-600",children:"Item deleted!"}),e.jsx(s,{open:r,onClose:()=>t(!1),children:e.jsxs(m,{children:[e.jsx(p,{children:"Delete Item"}),e.jsx(c,{children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[e.jsx(o,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(o,{variant:"destructive",onClick:()=>{l(!0),t(!1)},children:"Delete"})]})]})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
