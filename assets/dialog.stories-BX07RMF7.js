import{r as l,j as e}from"./iframe-kqJoyzOv.js";import{D as r,a as c,b as p,c as d}from"./dialog-D7dLFFC_.js";import{B as o}from"./button-CTXerEIp.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./keyboard-D5qsp4HU.js";import"./use-sync-refs-CAiCvLHi.js";import"./use-event-listener-568oECd-.js";import"./portal-CoKyd3p-.js";import"./focus-management-3mjStGxn.js";import"./index-1PFnJZ_D.js";import"./index-qPEbv8Ah.js";import"./use-inert-others-DHQFyV5j.js";import"./use-tab-direction-CSBoS-fC.js";import"./hidden-Dp8AkmW2.js";import"./transition-CVV-sxI-.js";import"./use-is-mounted-DIMsKP61.js";import"./open-closed-DPhFzWxs.js";import"./description-C83HIk9Z.js";import"./active-element-history-Dfnnu6yR.js";import"./spinner-BlDNYi5B.js";import"./index-B8k91cqS.js";const z={title:"Components/Dialog",component:r,parameters:{layout:"centered",docs:{description:{component:"A modal dialog component built with Headless UI. Provides accessible modal dialogs with backdrop and focus management."}}},argTypes:{open:{control:{type:"boolean"},description:"Whether the dialog is open"}},tags:["autodocs"]},s={render:()=>{const[a,n]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsx(r,{open:a,onClose:()=>n(!1),children:e.jsxs(c,{children:[e.jsx(p,{children:"Confirm Action"}),e.jsx(d,{children:"Are you sure you want to proceed? This action cannot be undone."}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(o,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(o,{onClick:()=>n(!1),children:"Confirm"})]})]})})]})}},i={render:a=>{const[n,t]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!0),children:"Open Dialog"}),e.jsx(r,{...a,open:n,onClose:()=>t(!1),children:e.jsxs(c,{children:[e.jsx(p,{children:"Dialog Title"}),e.jsx(d,{children:"This is a dialog description. You can customize the content here."}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(o,{variant:"outline",onClick:()=>t(!1),children:"Cancel"}),e.jsx(o,{onClick:()=>t(!1),children:"Confirm"})]})]})})]})},args:{open:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const F=["Default","Playground"];export{s as Default,i as Playground,F as __namedExportsOrder,z as default};
