import{r as o,j as e}from"./iframe-C3NiGLkr.js";import{R as t}from"./radio-group-y3qXNrG_.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-dM9pZBoI.js";import"./use-by-comparator-T_dcLOSS.js";import"./form-fields-Cc50cINb.js";import"./index-DNRP92Qz.js";import"./index-CEhDcc2E.js";import"./use-sync-refs-Dd4FYj0e.js";import"./hidden-R1nlN2hH.js";import"./keyboard-Dz8OvpXF.js";import"./description-te5qwLx3.js";import"./label-DIe7zJQA.js";import"./bugs-DeaIigXP.js";import"./focus-management-CiKbyxWz.js";const j={title:"Components/RadioGroup/Examples",component:t,parameters:{layout:"padded"}},l=[{id:"basic",label:"Basic Plan",value:"basic",description:"Perfect for individuals and small teams"},{id:"pro",label:"Pro Plan",value:"pro",description:"Best for growing businesses"},{id:"enterprise",label:"Enterprise Plan",value:"enterprise",description:"For large organizations"}],a={render:()=>{const[s,r]=o.useState("basic");return e.jsxs("div",{className:"p-6 max-w-2xl",children:[e.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Choose Your Plan"}),e.jsx(t,{options:l,value:s,onChange:r}),e.jsx("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:e.jsxs("p",{className:"text-base text-gray-600",children:["Selected plan: ",e.jsx("span",{className:"font-medium",children:s})]})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedPlan, setSelectedPlan] = useState<string>('basic');
    return <div className="p-6 max-w-2xl">
        <h2 className="text-lg font-semibold mb-4">Choose Your Plan</h2>
        <RadioGroup options={planOptions} value={selectedPlan} onChange={setSelectedPlan} />
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-base text-gray-600">
            Selected plan: <span className="font-medium">{selectedPlan}</span>
          </p>
        </div>
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const y=["PlanSelector"];export{a as PlanSelector,y as __namedExportsOrder,j as default};
