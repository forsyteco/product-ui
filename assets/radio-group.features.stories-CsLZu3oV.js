import{r as n,j as e}from"./iframe-DRYa70Hz.js";import{R as i}from"./radio-group-C9v35p8J.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-D9O_Y1yf.js";import"./use-by-comparator-BBUVKAcE.js";import"./form-fields-RnnO1LBY.js";import"./index-DF1iG1BD.js";import"./index-UFAhJiPj.js";import"./use-sync-refs-CU_mPfCD.js";import"./hidden-poPa3not.js";import"./keyboard-CK_xSf2J.js";import"./description-BSk9Vxpg.js";import"./label-Bh0BqUdc.js";import"./bugs-tWoe4E7Y.js";import"./focus-management-BD6w-EhD.js";const C={title:"Components/RadioGroup/Features",component:i,parameters:{layout:"centered"},argTypes:{disabled:{control:{type:"boolean"},description:"Whether the radio group is disabled"}}},p=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],a={render:()=>{const[o,t]=n.useState(void 0);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:p,value:o,onChange:t})})}},r={render:()=>{const[o,t]=n.useState(void 0),l=[{id:"1",label:"Basic Plan",value:"basic",description:"$9/month"},{id:"2",label:"Pro Plan",value:"pro",description:"$29/month"},{id:"3",label:"Enterprise Plan",value:"enterprise",description:"$99/month"}];return e.jsx("div",{className:"w-96",children:e.jsx(i,{options:l,value:o,onChange:t})})}},s={render:()=>{const[o,t]=n.useState("option2");return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:p,value:o,onChange:t})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
