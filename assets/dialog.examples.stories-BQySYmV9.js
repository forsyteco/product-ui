import{r as i,j as e}from"./iframe-DyfPGUPW.js";import{D as s,a as m,b as p,c}from"./dialog-BjMVfN_7.js";import{B as o}from"./button-8BxoxmXf.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./keyboard-CS4rV68b.js";import"./use-sync-refs-C0by42-4.js";import"./use-event-listener-B7AJx6zs.js";import"./portal-8ZybjcM8.js";import"./focus-management-D3qlVZwF.js";import"./index-BjR8MHm2.js";import"./index-BHqbrTVf.js";import"./use-inert-others-BMyir_ge.js";import"./use-tab-direction-nb_mnpGJ.js";import"./hidden-D2YtJf3O.js";import"./transition-SrAIiWjY.js";import"./use-is-mounted-ChLcuZT4.js";import"./open-closed-Tr4JgkLT.js";import"./description-D4ZDbxU2.js";import"./active-element-history-DdCDvlwS.js";import"./spinner-DqxeGq6l.js";import"./index-B8k91cqS.js";const _={title:"Components/Dialog/Examples",component:s,parameters:{layout:"padded"}},n={render:()=>{const[r,t]=i.useState(!1),[a,l]=i.useState(!1);return e.jsxs("div",{className:"p-6",children:[e.jsx(o,{variant:"destructive",onClick:()=>t(!0),children:"Delete Item"}),a&&e.jsx("p",{className:"mt-4 text-green-600",children:"Item deleted!"}),e.jsx(s,{open:r,onClose:()=>t(!1),children:e.jsxs(m,{children:[e.jsx(p,{children:"Delete Item"}),e.jsx(c,{children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[e.jsx(o,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(o,{variant:"destructive",onClick:()=>{l(!0),t(!1)},children:"Delete"})]})]})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
