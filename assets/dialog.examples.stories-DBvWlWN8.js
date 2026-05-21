import{r as i,j as e}from"./iframe-OIbwSsUo.js";import{D as s,a as m,b as p,c}from"./dialog-DqX1KdQC.js";import{B as o}from"./button-DTpuuVZa.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./keyboard-CTolmV5o.js";import"./use-sync-refs-0qmI2Jj2.js";import"./use-event-listener-C_GM-C6i.js";import"./portal-CNpYkWm3.js";import"./focus-management-CYdr1o3c.js";import"./index-CL3mEXst.js";import"./index-Bl-Jaq4B.js";import"./use-inert-others-iYuBuXXz.js";import"./use-tab-direction-B66KE3AB.js";import"./hidden-CZyt3MTM.js";import"./transition-u0iN46ux.js";import"./use-is-mounted-C2XTo937.js";import"./open-closed-DWvAJZV2.js";import"./close-provider-CjYnopdM.js";import"./description-Bwip7YUp.js";import"./active-element-history-BqPBdwRI.js";import"./index-cXaQtA9H.js";const A={title:"Components/Dialog/Examples",component:s,parameters:{layout:"padded"}},n={render:()=>{const[r,t]=i.useState(!1),[a,l]=i.useState(!1);return e.jsxs("div",{className:"p-6",children:[e.jsx(o,{variant:"destructive",onClick:()=>t(!0),children:"Delete Item"}),a&&e.jsx("p",{className:"mt-4 text-green-600",children:"Item deleted!"}),e.jsx(s,{open:r,onClose:()=>t(!1),children:e.jsxs(m,{children:[e.jsx(p,{children:"Delete Item"}),e.jsx(c,{children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[e.jsx(o,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(o,{variant:"destructive",onClick:()=>{l(!0),t(!1)},children:"Delete"})]})]})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
