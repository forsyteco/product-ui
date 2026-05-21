import{r as a,j as e}from"./iframe-BVZI3cAm.js";import{A as t}from"./autocomplete-j_GqEbSZ.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./use-resolve-button-type-ZlI0dW-N.js";import"./keyboard-DdQSsEm8.js";import"./use-sync-refs-DEHDpCuG.js";import"./index--g8NHrJE.js";import"./index-D50RP4Fs.js";import"./form-fields-DcaVg01R.js";import"./hidden-wFq_KQ1j.js";import"./floating-ZKNxbURW.js";import"./element-movement-BLM8jbgB.js";import"./bugs-CkbgC0Uj.js";import"./portal-D35vnQ-C.js";import"./focus-management-DhGd5aK-.js";import"./use-inert-others-DwFB9qxu.js";import"./use-event-listener-AG7C7s7R.js";import"./open-closed-DgU0jp-k.js";import"./active-element-history-D1zciuDk.js";import"./description-DqZz0v7U.js";import"./label-BF8fOm5Q.js";const B={title:"Components/Autocomplete/Examples",component:t.Root,parameters:{layout:"padded"}},n=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"},{id:"jp",label:"Japan",value:"jp"},{id:"br",label:"Brazil",value:"br"}],o={render:()=>{const[r,l]=a.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsxs(t.Root,{options:n,value:r,onChange:l,placeholder:"Type to search countries…",children:[e.jsx(t.Label,{children:"Country"}),e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]}),r&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
