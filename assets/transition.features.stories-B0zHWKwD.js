import{r as i,j as e}from"./iframe-BX-ROWNI.js";import{T as s}from"./transition-BiTmo1Uu.js";import{B as c}from"./button-J79MQA9b.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./transition-DiqDp7Tq.js";import"./use-sync-refs-DTg_pgWq.js";import"./use-is-mounted-BJZelx3H.js";import"./open-closed-C_k6EVRc.js";import"./spinner-U037JlYe.js";import"./index-B8k91cqS.js";const T={title:"Components/Transition/Features",component:s,parameters:{layout:"centered"},argTypes:{show:{control:{type:"boolean"},description:"Whether the transition is shown"}}},r={render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"outline",onClick:()=>n(!t),className:"mb-4",children:"Toggle"}),e.jsx(s,{show:t,children:e.jsx("div",{className:"p-4 bg-gray-100 rounded",children:"Fading content"})})]})}},a={render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"outline",onClick:()=>n(!t),className:"mb-4",children:"Toggle"}),e.jsx(s,{show:t,enter:"transition ease-out duration-300",enterFrom:"transform -translate-y-4 opacity-0",enterTo:"transform translate-y-0 opacity-100",leave:"transition ease-in duration-200",leaveFrom:"transform translate-y-0 opacity-100",leaveTo:"transform -translate-y-4 opacity-0",children:e.jsx("div",{className:"p-4 bg-gray-100 rounded",children:"Sliding content"})})]})}},o={render:()=>{const[t,n]=i.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"outline",onClick:()=>n(!t),className:"mb-4",children:"Toggle"}),e.jsx(s,{show:t,enter:"transition ease-out duration-200",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition ease-in duration-150",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:e.jsx("div",{className:"p-4 bg-gray-100 rounded",children:"Scaling content"})})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    return <>
        <Button variant="outline" onClick={() => setShow(!show)} className="mb-4">
          Toggle
        </Button>
        <Transition show={show}>
          <div className="p-4 bg-gray-100 rounded">Fading content</div>
        </Transition>
      </>;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    return <>
        <Button variant="outline" onClick={() => setShow(!show)} className="mb-4">
          Toggle
        </Button>
        <Transition show={show} enter="transition ease-out duration-300" enterFrom="transform -translate-y-4 opacity-0" enterTo="transform translate-y-0 opacity-100" leave="transition ease-in duration-200" leaveFrom="transform translate-y-0 opacity-100" leaveTo="transform -translate-y-4 opacity-0">
          <div className="p-4 bg-gray-100 rounded">Sliding content</div>
        </Transition>
      </>;
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    return <>
        <Button variant="outline" onClick={() => setShow(!show)} className="mb-4">
          Toggle
        </Button>
        <Transition show={show} enter="transition ease-out duration-200" enterFrom="transform scale-95 opacity-0" enterTo="transform scale-100 opacity-100" leave="transition ease-in duration-150" leaveFrom="transform scale-100 opacity-100" leaveTo="transform scale-95 opacity-0">
          <div className="p-4 bg-gray-100 rounded">Scaling content</div>
        </Transition>
      </>;
  }
}`,...o.parameters?.docs?.source}}};const x=["Fade","Slide","Scale"];export{r as Fade,o as Scale,a as Slide,x as __namedExportsOrder,T as default};
