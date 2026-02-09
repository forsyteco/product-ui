import{r as l,j as e}from"./iframe-ii299Cu5.js";import{D as r,a as c,b as p,c as d}from"./dialog-Cminik1t.js";import{B as o}from"./button-BrNYjvaN.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./keyboard-D7njr0Xf.js";import"./use-sync-refs-BBkBdVyb.js";import"./use-event-listener-DepPRdL3.js";import"./portal-usdoFaVe.js";import"./focus-management-BKYhelLL.js";import"./index-BqGO5dbw.js";import"./index-C_Qt56wl.js";import"./use-inert-others-D-YXQylI.js";import"./use-tab-direction-B8ITvRVO.js";import"./hidden-Cn_SrqBj.js";import"./transition-BEdpU7EC.js";import"./use-is-mounted-BlmK50SG.js";import"./open-closed-DdTmSrOB.js";import"./close-provider-Dgt0-60Y.js";import"./description-D6O3PFf8.js";import"./active-element-history-CnbiHFr4.js";import"./index-cXaQtA9H.js";const E={title:"Components/Dialog",component:r,parameters:{layout:"centered",docs:{description:{component:"A modal dialog component built with Headless UI. Provides accessible modal dialogs with backdrop and focus management."}}},argTypes:{open:{control:{type:"boolean"},description:"Whether the dialog is open"}},tags:["autodocs"]},s={render:()=>{const[a,n]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsx(r,{open:a,onClose:()=>n(!1),children:e.jsxs(c,{children:[e.jsx(p,{children:"Confirm Action"}),e.jsx(d,{children:"Are you sure you want to proceed? This action cannot be undone."}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(o,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(o,{onClick:()=>n(!1),children:"Confirm"})]})]})})]})}},i={render:a=>{const[n,t]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!0),children:"Open Dialog"}),e.jsx(r,{...a,open:n,onClose:()=>t(!1),children:e.jsxs(c,{children:[e.jsx(p,{children:"Dialog Title"}),e.jsx(d,{children:"This is a dialog description. You can customize the content here."}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(o,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(o,{onClick:()=>t(!1),children:"Confirm"})]})]})})]})},args:{open:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button onClick={() => setIsOpen(true)}>
          Open Dialog
        </Button>
        <Dialog {...args} open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogPanel>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a dialog description. You can customize the content here.
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
  },
  args: {
    open: false
  }
}`,...i.parameters?.docs?.source}}};const z=["Default","Playground"];export{s as Default,i as Playground,z as __namedExportsOrder,E as default};
