import{r as i,j as e}from"./iframe-CxYaNlfa.js";import{D as s,a as m,b as p,c}from"./dialog-auJWrJyY.js";import{B as o}from"./button-hQaN4FMQ.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./keyboard-B83W2K4O.js";import"./use-sync-refs-CzTZ0nVq.js";import"./use-event-listener-C9ri-zWy.js";import"./portal-CbQ4upMP.js";import"./focus-management-ClluBnCx.js";import"./index-C20LchO5.js";import"./index-BjqpgS9N.js";import"./use-inert-others-B76WlhWb.js";import"./use-tab-direction-BDjmyAdn.js";import"./hidden-D0DTjsv9.js";import"./transition-DZKFvljt.js";import"./use-is-mounted-DZa0474T.js";import"./open-closed-B5Dl-UPG.js";import"./description-C8AuhUpm.js";import"./active-element-history-D2ClwfRM.js";import"./spinner-3-TdU7zT.js";import"./visually-hidden-0Sws8sXy.js";import"./index-cXaQtA9H.js";const _={title:"Components/Dialog/Examples",component:s,parameters:{layout:"padded"}},n={render:()=>{const[r,t]=i.useState(!1),[a,l]=i.useState(!1);return e.jsxs("div",{className:"p-6",children:[e.jsx(o,{variant:"destructive",onClick:()=>t(!0),children:"Delete Item"}),a&&e.jsx("p",{className:"mt-4 text-green-600",children:"Item deleted!"}),e.jsx(s,{open:r,onClose:()=>t(!1),children:e.jsxs(m,{children:[e.jsx(p,{children:"Delete Item"}),e.jsx(c,{children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[e.jsx(o,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(o,{variant:"destructive",onClick:()=>{l(!0),t(!1)},children:"Delete"})]})]})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
