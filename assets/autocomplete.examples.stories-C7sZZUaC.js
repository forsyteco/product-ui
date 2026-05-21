import{r as a,j as e}from"./iframe-kqJoyzOv.js";import{A as t}from"./autocomplete-CcBRZbHk.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./use-resolve-button-type-DDwf73KN.js";import"./keyboard-D5qsp4HU.js";import"./use-sync-refs-CAiCvLHi.js";import"./index-1PFnJZ_D.js";import"./index-qPEbv8Ah.js";import"./form-fields-DK9olJnH.js";import"./hidden-Dp8AkmW2.js";import"./floating-9i8NPJbh.js";import"./element-movement-DOAiwh-0.js";import"./bugs-CgGO5Bru.js";import"./portal-CoKyd3p-.js";import"./focus-management-3mjStGxn.js";import"./use-inert-others-DHQFyV5j.js";import"./use-event-listener-568oECd-.js";import"./open-closed-DPhFzWxs.js";import"./active-element-history-Dfnnu6yR.js";import"./description-C83HIk9Z.js";import"./label-CtVY1zvf.js";const B={title:"Components/Autocomplete/Examples",component:t.Root,parameters:{layout:"padded"}},n=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"},{id:"jp",label:"Japan",value:"jp"},{id:"br",label:"Brazil",value:"br"}],o={render:()=>{const[r,l]=a.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsxs(t.Root,{options:n,value:r,onChange:l,placeholder:"Type to search countries…",children:[e.jsx(t.Label,{children:"Country"}),e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]}),r&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
