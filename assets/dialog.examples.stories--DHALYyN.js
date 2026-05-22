import{r as i,j as e}from"./iframe-FucRrgN0.js";import{D as s,a as m,b as p,c}from"./dialog-DrPL9cjG.js";import{B as o}from"./button-CIKQtcpw.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./keyboard-Y4nRcYzq.js";import"./use-sync-refs-D2lrUS40.js";import"./use-tab-direction-CIts8qyr.js";import"./hidden-BjYGE2J0.js";import"./portal-DQFslJMw.js";import"./focus-management-CfKz0vUK.js";import"./index-BcyfDNeB.js";import"./index-OS4KfO0X.js";import"./use-inert-others-CW9rMuAv.js";import"./transition-CzoYTx9J.js";import"./use-is-mounted-CggrnpIl.js";import"./open-closed-Bs6DzGTE.js";import"./description-DMKvSMs0.js";import"./index-B8k91cqS.js";import"./spinner-vgNm4kF8.js";const w={title:"Components/Dialog/Examples",component:s,parameters:{layout:"padded"}},n={render:()=>{const[a,t]=i.useState(!1),[r,l]=i.useState(!1);return e.jsxs("div",{className:"p-6",children:[e.jsx(o,{variant:"destructive",onClick:()=>t(!0),children:"Delete Item"}),r&&e.jsx("p",{className:"mt-4 text-green-600",children:"Item deleted!"}),e.jsx(s,{open:a,onClose:()=>t(!1),children:e.jsxs(m,{children:[e.jsx(p,{children:"Delete Item"}),e.jsx(c,{children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[e.jsx(o,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(o,{variant:"destructive",onClick:()=>{l(!0),t(!1)},children:"Delete"})]})]})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const A=["ConfirmationDialog"];export{n as ConfirmationDialog,A as __namedExportsOrder,w as default};
