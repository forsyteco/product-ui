import{r as o,j as e}from"./iframe-CeYd32X8.js";import{R as t}from"./radio-group-cdYznLGa.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DXUggmaQ.js";import"./use-by-comparator-D3NsKXwl.js";import"./form-fields-Ll7hC3CT.js";import"./index-DYyT_JbS.js";import"./index-Fzrzh3PM.js";import"./use-sync-refs-ry5utqyI.js";import"./hidden-DipbFeWg.js";import"./keyboard-BoF71p42.js";import"./description-9wIlOIiQ.js";import"./label-CAGnDoa2.js";import"./bugs-Red6znm7.js";import"./focus-management-DoY0kjxM.js";const j={title:"Components/RadioGroup/Examples",component:t,parameters:{layout:"padded"}},l=[{id:"basic",label:"Basic Plan",value:"basic",description:"Perfect for individuals and small teams"},{id:"pro",label:"Pro Plan",value:"pro",description:"Best for growing businesses"},{id:"enterprise",label:"Enterprise Plan",value:"enterprise",description:"For large organizations"}],s={render:()=>{const[a,r]=o.useState("basic");return e.jsxs("div",{className:"p-6 max-w-2xl",children:[e.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Choose Your Plan"}),e.jsx(t,{options:l,value:a,onChange:r}),e.jsx("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:e.jsxs("p",{className:"text-sm text-gray-600",children:["Selected plan: ",e.jsx("span",{className:"font-medium",children:a})]})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedPlan, setSelectedPlan] = useState<string>('basic');
    return <div className="p-6 max-w-2xl">
        <h2 className="text-lg font-semibold mb-4">Choose Your Plan</h2>
        <RadioGroup options={planOptions} value={selectedPlan} onChange={setSelectedPlan} />
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            Selected plan: <span className="font-medium">{selectedPlan}</span>
          </p>
        </div>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const y=["PlanSelector"];export{s as PlanSelector,y as __namedExportsOrder,j as default};
