import{j as e,r as d}from"./iframe-CFsUuUqa.js";import{S as s}from"./spinner-BrE3uVyb.js";import{B as l}from"./button-DgkIOwa6.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./index-cXaQtA9H.js";const h={title:"Components/Spinner/Examples",component:s,parameters:{layout:"padded"},argTypes:{size:{control:{type:"number",min:10,max:200,step:5},description:"Size of the spinner in pixels",table:{type:{summary:"number"},defaultValue:{summary:"50"}}},strokeWidth:{control:{type:"number",min:1,max:20,step:1},description:"Width of the spinner stroke",table:{type:{summary:"number"},defaultValue:{summary:"5"}}},colors:{control:{type:"object"},description:"Array of colors to cycle through",table:{type:{summary:"string[]"},defaultValue:{summary:"['#ffde13', '#b0b0b0', '#000000']"}}},className:{control:{type:"text"},description:"Additional CSS classes",table:{type:{summary:"string"}}}}},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-8 w-full max-w-md",children:[e.jsxs("div",{className:"border border-gray-200 rounded-lg p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Loading Content"}),e.jsx("div",{className:"flex items-center justify-center py-12",children:e.jsx(s,{size:48})})]}),e.jsx("div",{className:"border border-gray-200 rounded-lg p-4",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{size:20,strokeWidth:3}),e.jsx("span",{className:"text-base text-gray-600",children:"Processing..."})]})}),e.jsxs(l,{type:"button",disabled:!0,className:"gap-2",children:[e.jsx(s,{size:16,strokeWidth:3,colors:["currentColor"]}),e.jsx("span",{children:"Submitting"})]})]}),parameters:{docs:{description:{story:"Spinner used in various UI contexts: cards, inline text, and buttons."}}}};async function p(i){return new Promise(a=>setTimeout(a,i))}const o={render:()=>{const[i,a]=d.useState(!1),[r,c]=d.useState("");let t="initial";i?t="loading":r&&(t="done");const m=async()=>{t!=="done"&&(a(!0),await p(2e3),c("Some content that had to be loaded."),a(!1))};return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"button",onClick:m,disabled:t==="done",className:"mb-4",children:"Load content"}),t==="loading"&&e.jsx(s,{}),r&&e.jsx("p",{className:"mt-4",children:r}),e.jsx("div",{role:"status","aria-live":"polite","aria-atomic":"true",className:"sr-only",children:t==="done"&&"Content finished loading"})]})},parameters:{docs:{description:{story:"Full lifecycle example showing initial, loading, and done states. Includes accessibility announcements when loading completes."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 w-full max-w-md">
      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Loading Content</h3>
        <div className="flex items-center justify-center py-12">
          <Spinner size={48} />
        </div>
      </div>
      <div className="border border-gray-200 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <Spinner size={20} strokeWidth={3} />
          <span className="text-base text-gray-600">Processing...</span>
        </div>
      </div>
      <Button type="button" disabled className="gap-2">
        <Spinner size={16} strokeWidth={3} colors={['currentColor']} />
        <span>Submitting</span>
      </Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Spinner used in various UI contexts: cards, inline text, and buttons.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    const [loadedContent, setLoadedContent] = useState('');
    let state: LoadingState = 'initial';
    if (isLoading) {
      state = 'loading';
    } else if (loadedContent) {
      state = 'done';
    }
    const initiateLoading = async () => {
      if (state === 'done') {
        return;
      }
      setIsLoading(true);
      await wait(2000);
      setLoadedContent('Some content that had to be loaded.');
      setIsLoading(false);
    };
    return <>
        <Button type="button" onClick={initiateLoading} disabled={state === 'done'} className="mb-4">
          Load content
        </Button>
        {state === 'loading' && <Spinner />}
        {loadedContent && <p className="mt-4">{loadedContent}</p>}
        <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
          {state === 'done' && 'Content finished loading'}
        </div>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Full lifecycle example showing initial, loading, and done states. Includes accessibility announcements when loading completes.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const N=["InContext","FullLifecycle"];export{o as FullLifecycle,n as InContext,N as __namedExportsOrder,h as default};
