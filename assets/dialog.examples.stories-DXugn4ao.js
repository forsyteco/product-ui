import{r as i,j as e}from"./iframe-CeYd32X8.js";import{D as s,a as m,b as p,c}from"./dialog-CBuQ6zea.js";import{B as o}from"./button-CxpgOoq8.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./keyboard-BoF71p42.js";import"./use-sync-refs-ry5utqyI.js";import"./use-event-listener-YoiA5kE_.js";import"./portal-0gor4Twm.js";import"./focus-management-DoY0kjxM.js";import"./index-DYyT_JbS.js";import"./index-Fzrzh3PM.js";import"./use-inert-others-BnO2WJMG.js";import"./use-tab-direction-CpZ9KP3-.js";import"./hidden-DipbFeWg.js";import"./transition-ChhotIx-.js";import"./use-is-mounted-De8ms31j.js";import"./open-closed-DQGie1tM.js";import"./close-provider-DQYUtmEZ.js";import"./description-9wIlOIiQ.js";import"./active-element-history-Dvi1_BFb.js";import"./index-cXaQtA9H.js";const A={title:"Components/Dialog/Examples",component:s,parameters:{layout:"padded"}},n={render:()=>{const[r,t]=i.useState(!1),[a,l]=i.useState(!1);return e.jsxs("div",{className:"p-6",children:[e.jsx(o,{variant:"destructive",onClick:()=>t(!0),children:"Delete Item"}),a&&e.jsx("p",{className:"mt-4 text-green-600",children:"Item deleted!"}),e.jsx(s,{open:r,onClose:()=>t(!1),children:e.jsxs(m,{children:[e.jsx(p,{children:"Delete Item"}),e.jsx(c,{children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsxs("div",{className:"mt-6 flex justify-end gap-3",children:[e.jsx(o,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(o,{variant:"destructive",onClick:()=>{l(!0),t(!1)},children:"Delete"})]})]})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
