import{r,j as e}from"./iframe-DCut3pB0.js";import{T as o}from"./transition-BGf_aGoz.js";import{B as i}from"./button-UjEabEsX.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./transition-C7s_CYoK.js";import"./use-sync-refs-GHuczuXX.js";import"./use-is-mounted-89YuhHe8.js";import"./open-closed-DhS47DzH.js";import"./index-cXaQtA9H.js";const w={title:"Components/Transition/Examples",component:o,parameters:{layout:"padded"}},t={render:()=>{const[n,s]=r.useState(!1);return e.jsxs("div",{className:"p-6",children:[e.jsx(i,{onClick:()=>{s(!0),setTimeout(()=>s(!1),3e3)},children:"Show Notification"}),e.jsx("div",{className:"fixed top-4 right-4",children:e.jsx(o,{show:n,children:e.jsx("div",{className:"bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg",children:"Success! Your changes have been saved."})})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const g=["Notification"];export{t as Notification,g as __namedExportsOrder,w as default};
