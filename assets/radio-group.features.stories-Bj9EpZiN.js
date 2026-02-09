import{r as n,j as e}from"./iframe-nrIlHJha.js";import{R as i}from"./radio-group-BKRW647O.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-B2oasDWN.js";import"./use-by-comparator-C0jUCcXB.js";import"./form-fields-DDioQK3X.js";import"./index-BZvjOxCX.js";import"./index-BSik-Sht.js";import"./use-sync-refs-DjpU_bj-.js";import"./hidden-BsOz6iOs.js";import"./keyboard-CqkS3r67.js";import"./description-Cvd2bQ6u.js";import"./label-D9FaXLv5.js";import"./bugs-BCdwESHN.js";import"./focus-management-DCUZsTmC.js";const C={title:"Components/RadioGroup/Features",component:i,parameters:{layout:"centered"},argTypes:{disabled:{control:{type:"boolean"},description:"Whether the radio group is disabled"}}},p=[{id:"1",label:"Option 1",value:"option1"},{id:"2",label:"Option 2",value:"option2"},{id:"3",label:"Option 3",value:"option3"}],a={render:()=>{const[o,t]=n.useState(void 0);return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:p,value:o,onChange:t})})}},r={render:()=>{const[o,t]=n.useState(void 0),l=[{id:"1",label:"Basic Plan",value:"basic",description:"$9/month"},{id:"2",label:"Pro Plan",value:"pro",description:"$29/month"},{id:"3",label:"Enterprise Plan",value:"enterprise",description:"$99/month"}];return e.jsx("div",{className:"w-96",children:e.jsx(i,{options:l,value:o,onChange:t})})}},s={render:()=>{const[o,t]=n.useState("option2");return e.jsx("div",{className:"w-64",children:e.jsx(i,{options:p,value:o,onChange:t})})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
