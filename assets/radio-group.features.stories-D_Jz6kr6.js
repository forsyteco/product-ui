import{r as n,j as e}from"./iframe-OIbwSsUo.js";import{R as i}from"./radio-group-BhzeWWq1.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-CHwNI2-q.js";import"./use-by-comparator-DTIc1K3p.js";import"./form-fields-BSBAvoSg.js";import"./index-CL3mEXst.js";import"./index-Bl-Jaq4B.js";import"./use-sync-refs-0qmI2Jj2.js";import"./hidden-CZyt3MTM.js";import"./keyboard-CTolmV5o.js";import"./description-Bwip7YUp.js";import"./label-BicDlr5-.js";import"./bugs-B5yy6nX2.js";import"./focus-management-CYdr1o3c.js";const C={title:"Components/RadioGroup/Features",component:i,parameters:{layout:"centered"},argTypes:{disabled:{control:{type:"boolean"},description:"Whether the radio group is disabled"}}},p=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],a={render:()=>{const[o,t]=n.useState(void 0);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:p,value:o,onChange:t})})}},r={render:()=>{const[o,t]=n.useState(void 0),l=[{id:"1",label:"Basic Plan",value:"basic",description:"$9/month"},{id:"2",label:"Pro Plan",value:"pro",description:"$29/month"},{id:"3",label:"Enterprise Plan",value:"enterprise",description:"$99/month"}];return e.jsx("div",{className:"w-96",children:e.jsx(i,{options:l,value:o,onChange:t})})}},s={render:()=>{const[o,t]=n.useState("option2");return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:p,value:o,onChange:t})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <div className="w-64">
        <RadioGroup options={options} value={value} onChange={setValue} />
      </div>;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | undefined>(undefined);
    const optionsWithDesc: RadioGroupOption[] = [{
      id: '1',
      label: 'Basic Plan',
      value: 'basic',
      description: '$9/month'
    }, {
      id: '2',
      label: 'Pro Plan',
      value: 'pro',
      description: '$29/month'
    }, {
      id: '3',
      label: 'Enterprise Plan',
      value: 'enterprise',
      description: '$99/month'
    }];
    return <div className="w-96">
        <RadioGroup options={optionsWithDesc} value={value} onChange={setValue} />
      </div>;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string>('option2');
    return <div className="w-64">
        <RadioGroup options={options} value={value} onChange={setValue} />
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const w=["Basic","WithDescriptions","WithInitialValue"];export{a as Basic,r as WithDescriptions,s as WithInitialValue,w as __namedExportsOrder,C as default};
