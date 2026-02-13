import{r as o,j as e}from"./iframe-CeVB8obd.js";import{R as t}from"./radio-group-C5nYefO2.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DGNQ89Xm.js";import"./use-by-comparator-ChEKavq1.js";import"./form-fields-DTMhg-rK.js";import"./index-hJDHe0xh.js";import"./index-DxGXflx1.js";import"./use-sync-refs-BoOcFdrF.js";import"./hidden-FQEwfQ5P.js";import"./keyboard-CPYOBzPz.js";import"./description-Dytnpz6p.js";import"./label-C2lNcmET.js";import"./bugs-C2vScuI6.js";import"./focus-management-D4oSQtTM.js";const j={title:"Components/RadioGroup/Examples",component:t,parameters:{layout:"padded"}},l=[{id:"basic",label:"Basic Plan",value:"basic",description:"Perfect for individuals and small teams"},{id:"pro",label:"Pro Plan",value:"pro",description:"Best for growing businesses"},{id:"enterprise",label:"Enterprise Plan",value:"enterprise",description:"For large organizations"}],a={render:()=>{const[s,r]=o.useState("basic");return e.jsxs("div",{className:"p-6 max-w-2xl",children:[e.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Choose Your Plan"}),e.jsx(t,{options:l,value:s,onChange:r}),e.jsx("div",{className:"mt-6 p-4 bg-gray-50 rounded-lg",children:e.jsxs("p",{className:"text-base text-gray-600",children:["Selected plan: ",e.jsx("span",{className:"font-medium",children:s})]})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
