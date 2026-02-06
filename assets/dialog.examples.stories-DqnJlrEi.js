import{r as i,j as e}from"./iframe-BZ1wujjQ.js";import{D as s,a as m,b as p,c}from"./dialog-Cl_NSURW.js";import{B as o}from"./button-LJhTR5u8.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./keyboard-Ce2CPQ3X.js";import"./use-sync-refs-DKphwUq6.js";import"./use-event-listener-DtvH9auP.js";import"./portal-EQenjn8w.js";import"./focus-management-DzM3vxoc.js";import"./index-W2FIh6FJ.js";import"./index-imFVSO3i.js";import"./use-inert-others-D7PEgJFU.js";import"./use-tab-direction-BueDl4SL.js";import"./hidden-BNsWunAW.js";import"./transition-0J3O6CrR.js";import"./use-is-mounted-xpTVFGMB.js";import"./open-closed-DMtSAjel.js";import"./close-provider-CDBggudH.js";import"./description-CTKD1BlB.js";import"./active-element-history-DHHFNsIM.js";import"./index-cXaQtA9H.js";const A={title:"Components/Dialog/Examples",component:s,parameters:{layout:"padded"}},n={render:()=>{const[r,t]=i.useState(!1),[a,l]=i.useState(!1);return e.jsxs("div",{className:"p-6",children:[e.jsx(o,{variant:"destructive",onClick:()=>t(!0),children:"Delete Item"}),a&&e.jsx("p",{className:"mt-4 text-green-600",children:"Item deleted!"}),e.jsx(s,{open:r,onClose:()=>t(!1),children:e.jsxs(m,{children:[e.jsx(p,{children:"Delete Item"}),e.jsx(c,{children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[e.jsx(o,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(o,{variant:"destructive",onClick:()=>{l(!0),t(!1)},children:"Delete"})]})]})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const _=["ConfirmationDialog"];export{n as ConfirmationDialog,_ as __namedExportsOrder,A as default};
