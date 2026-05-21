import{r as a,j as e}from"./iframe-Ccv72OAP.js";import{A as t}from"./autocomplete-LI5Pwosw.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./use-resolve-button-type-CVFXSLBs.js";import"./keyboard-Bj8Si4my.js";import"./use-sync-refs-YRg-9jEj.js";import"./index-3FYpRak_.js";import"./index-CX2OxCDR.js";import"./form-fields-B0riyiiq.js";import"./hidden-DU9ztPDp.js";import"./floating-K3v631rL.js";import"./element-movement-BftKrcTR.js";import"./bugs-BEd2wVVK.js";import"./portal-T5jVZpWw.js";import"./focus-management-18jBgMrJ.js";import"./use-inert-others-M_QUwCoT.js";import"./use-event-listener-D6-LGSM8.js";import"./open-closed-CqLh23QT.js";import"./active-element-history-bK8b5uaA.js";import"./description-VWDZaHMZ.js";import"./label-BpT0Y1b-.js";const B={title:"Components/Autocomplete/Examples",component:t.Root,parameters:{layout:"padded"}},n=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"},{id:"jp",label:"Japan",value:"jp"},{id:"br",label:"Brazil",value:"br"}],o={render:()=>{const[r,l]=a.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsxs(t.Root,{options:n,value:r,onChange:l,placeholder:"Type to search countries…",children:[e.jsx(t.Label,{children:"Country"}),e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]}),r&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<AutocompleteOption | null>(null);
    return <div className="p-6 max-w-md">
        <Autocomplete.Root options={countries} value={selected} onChange={setSelected} placeholder="Type to search countries…">
          <Autocomplete.Label>Country</Autocomplete.Label>
          <Autocomplete.Control>
            <Autocomplete.LeadingIcon />
            <Autocomplete.Input />
            <Autocomplete.ClearButton />
          </Autocomplete.Control>
          <Autocomplete.Options />
        </Autocomplete.Root>
        {selected && <p className="mt-4 text-base text-muted-foreground">Selected: {selected.label}</p>}
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const k=["CountrySearch"];export{o as CountrySearch,k as __namedExportsOrder,B as default};
