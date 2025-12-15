import{r as a,j as n}from"./iframe-CFsUuUqa.js";import{T as r}from"./transition-Glgt52Lo.js";import{B as i}from"./button-DgkIOwa6.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./transition-BRkwPxXr.js";import"./use-sync-refs-DycZJTrw.js";import"./use-is-mounted-ByG5zrcv.js";import"./open-closed-C5hIdceC.js";import"./index-cXaQtA9H.js";const x={title:"Components/Transition",component:r,parameters:{layout:"centered",docs:{description:{component:"A transition component for animating elements in and out. Built with Headless UI with customizable enter/leave animations."}}},argTypes:{show:{control:{type:"boolean"},description:"Whether the transition is shown"}},tags:["autodocs"]},t={render:()=>{const[e,s]=a.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(i,{variant:"outline",onClick:()=>s(!e),className:"mb-4",children:"Toggle"}),n.jsx(r,{show:e,children:n.jsx("div",{className:"p-4 bg-gray-100 rounded",children:"Transitioning content"})})]})}},o={render:e=>{const[s,c]=a.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(i,{variant:"outline",onClick:()=>c(!s),className:"mb-4",children:"Toggle"}),n.jsx(r,{...e,show:s,children:n.jsx("div",{className:"p-4 bg-gray-100 rounded",children:"Custom transition"})})]})},args:{show:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const S=["Default","Playground"];export{t as Default,o as Playground,S as __namedExportsOrder,x as default};
