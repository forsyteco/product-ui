import{r,j as e}from"./iframe-BX-ROWNI.js";import{T as o}from"./transition-BiTmo1Uu.js";import{B as i}from"./button-J79MQA9b.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./transition-DiqDp7Tq.js";import"./use-sync-refs-DTg_pgWq.js";import"./use-is-mounted-BJZelx3H.js";import"./open-closed-C_k6EVRc.js";import"./spinner-U037JlYe.js";import"./index-B8k91cqS.js";const v={title:"Components/Transition/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[n,s]=r.useState(!1);return e.jsxs("div",{className:"p-6",children:[e.jsx(i,{onClick:()=>{s(!0),setTimeout(()=>s(!1),3e3)},children:"Show Notification"}),e.jsx("div",{className:"fixed top-4 right-4",children:e.jsx(o,{show:n,children:e.jsx("div",{className:"bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg",children:"Success! Your changes have been saved."})})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    return <div className="p-6">
        <Button onClick={() => {
        setShow(true);
        setTimeout(() => setShow(false), 3000);
      }}>
          Show Notification
        </Button>
        <div className="fixed top-4 right-4">
          <Transition show={show}>
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
              Success! Your changes have been saved.
            </div>
          </Transition>
        </div>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const S=["Notification"];export{t as Notification,S as __namedExportsOrder,v as default};
