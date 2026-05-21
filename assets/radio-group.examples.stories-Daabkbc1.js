import{r as o,j as e}from"./iframe-Bsx-Ou2Z.js";import{R as t}from"./radio-group-1zNOdmzG.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-6ZyLCJ3R.js";import"./use-by-comparator-AnScbHQ4.js";import"./form-fields-wHP2Je6Z.js";import"./index-BWTGCpOW.js";import"./index-BC68ImjR.js";import"./use-sync-refs-CZbgCkNu.js";import"./hidden-B46LW6GM.js";import"./keyboard-DVExfB0A.js";import"./description-BPvs3qQm.js";import"./label-Bta4yG3N.js";import"./bugs-6tgLNrUu.js";import"./focus-management-B9_YCb-9.js";const y={title:"Components/RadioGroup/Examples",component:t,parameters:{layout:"padded"}},l=[{id:"basic",label:"Basic Plan",value:"basic",description:"Perfect for individuals and small teams"},{id:"pro",label:"Pro Plan",value:"pro",description:"Best for growing businesses"},{id:"enterprise",label:"Enterprise Plan",value:"enterprise",description:"For large organizations"}],a={render:()=>{const[s,r]=o.useState("basic");return e.jsxs("div",{className:"p-6 max-w-2xl",children:[e.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Choose Your Plan"}),e.jsx(t,{options:l,value:s,onChange:r}),e.jsx("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:e.jsxs("p",{className:"text-base text-gray-600",children:["Selected plan: ",e.jsx("span",{className:"font-medium",children:s})]})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const C=["PlanSelector"];export{a as PlanSelector,C as __namedExportsOrder,y as default};
