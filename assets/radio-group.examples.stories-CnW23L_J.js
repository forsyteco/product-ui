import{r as o,j as e}from"./iframe-CFsUuUqa.js";import{R as t}from"./radio-group-BATBnmPv.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BH9yhaj4.js";import"./use-by-comparator-CQNCvV4u.js";import"./form-fields-DLFlDeZA.js";import"./index-D26-LCOM.js";import"./index-BsJ9ywC8.js";import"./use-sync-refs-DycZJTrw.js";import"./hidden-CAbe9GgB.js";import"./keyboard-BjzAsI1V.js";import"./description-DJ3YnSma.js";import"./label-Da47qnUN.js";import"./bugs-QgyXksVi.js";import"./focus-management-kaFNE5_8.js";const j={title:"Components/RadioGroup/Examples",component:t,parameters:{layout:"padded"}},l=[{id:"basic",label:"Basic Plan",value:"basic",description:"Perfect for individuals and small teams"},{id:"pro",label:"Pro Plan",value:"pro",description:"Best for growing businesses"},{id:"enterprise",label:"Enterprise Plan",value:"enterprise",description:"For large organizations"}],a={render:()=>{const[s,r]=o.useState("basic");return e.jsxs("div",{className:"p-6 max-w-2xl",children:[e.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Choose Your Plan"}),e.jsx(t,{options:l,value:s,onChange:r}),e.jsx("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:e.jsxs("p",{className:"text-base text-gray-600",children:["Selected plan: ",e.jsx("span",{className:"font-medium",children:s})]})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
