import{r as a,j as n}from"./iframe-rkvXkcPn.js";import{T as r}from"./transition-NxuMUN4u.js";import{B as i}from"./button-CxtlPf_U.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./transition-fb-qW7lR.js";import"./use-sync-refs-B6ZSIoRc.js";import"./use-is-mounted-DGtPpLNH.js";import"./open-closed-BS-lTtUD.js";import"./spinner-BENKnx41.js";import"./visually-hidden-CzgnCfci.js";import"./index-cXaQtA9H.js";const v={title:"Components/Transition",component:r,parameters:{layout:"centered",docs:{description:{component:"A transition component for animating elements in and out. Built with Headless UI with customizable enter/leave animations."}}},argTypes:{show:{control:{type:"boolean"},description:"Whether the transition is shown"}},tags:["autodocs"]},s={render:()=>{const[t,e]=a.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(i,{variant:"outline",onClick:()=>e(!t),className:"mb-4",children:"Toggle"}),n.jsx(r,{show:t,children:n.jsx("div",{className:"p-4 bg-gray-100 rounded",children:"Transitioning content"})})]})}},o={render:t=>{const[e,c]=a.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(i,{variant:"outline",onClick:()=>c(!e),className:"mb-4",children:"Toggle"}),n.jsx(r,{...t,show:e,children:n.jsx("div",{className:"p-4 bg-gray-100 rounded",children:"Custom transition"})})]})},args:{show:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [show, setShow] = useState(false);
    return <>
        <Button variant="outline" onClick={() => setShow(!show)} className="mb-4">
          Toggle
        </Button>
        <Transition show={show}>
          <div className="p-4 bg-gray-100 rounded">Transitioning content</div>
        </Transition>
      </>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [show, setShow] = useState(false);
    return <>
        <Button variant="outline" onClick={() => setShow(!show)} className="mb-4">
          Toggle
        </Button>
        <Transition {...args} show={show}>
          <div className="p-4 bg-gray-100 rounded">Custom transition</div>
        </Transition>
      </>;
  },
  args: {
    show: false
  }
}`,...o.parameters?.docs?.source}}};const b=["Default","Playground"];export{s as Default,o as Playground,b as __namedExportsOrder,v as default};
