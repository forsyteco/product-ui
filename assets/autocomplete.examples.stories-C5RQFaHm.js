import{r as a,j as e}from"./iframe-AG0x1wfB.js";import{A as t}from"./autocomplete-D0V23uYy.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./use-resolve-button-type-D8j7BuG8.js";import"./keyboard-D-t6G-JT.js";import"./use-sync-refs-nAJ1J7Wk.js";import"./index-Cm_AQNJq.js";import"./index-BcX7eClP.js";import"./form-fields-dEAtcqP0.js";import"./hidden-CBZsKL6R.js";import"./floating-B8SBCkyl.js";import"./element-movement-C3Z93GdS.js";import"./bugs-DFcXVQhQ.js";import"./portal-BGdceubv.js";import"./focus-management-BZBMqyM0.js";import"./use-inert-others-nqQ4FKz-.js";import"./use-event-listener-YWdgBPdn.js";import"./open-closed-BJ2TncLm.js";import"./active-element-history-CQ1kL77q.js";import"./description-BJ1KNmao.js";import"./label-vqHRH5MG.js";const B={title:"Components/Autocomplete/Examples",component:t.Root,parameters:{layout:"padded"}},n=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"},{id:"jp",label:"Japan",value:"jp"},{id:"br",label:"Brazil",value:"br"}],o={render:()=>{const[r,l]=a.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsxs(t.Root,{options:n,value:r,onChange:l,placeholder:"Type to search countries…",children:[e.jsx(t.Label,{children:"Country"}),e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]}),r&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
