import{r as a,j as e}from"./iframe-DyfPGUPW.js";import{A as t}from"./autocomplete-CjYR1mJX.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./use-resolve-button-type-BFWyFq7H.js";import"./keyboard-CS4rV68b.js";import"./use-sync-refs-C0by42-4.js";import"./index-BjR8MHm2.js";import"./index-BHqbrTVf.js";import"./form-fields-Cw9L7quo.js";import"./hidden-D2YtJf3O.js";import"./floating-DIS-pzVt.js";import"./element-movement-Dzu4t2lf.js";import"./bugs-BLKOcJKD.js";import"./portal-8ZybjcM8.js";import"./focus-management-D3qlVZwF.js";import"./use-inert-others-BMyir_ge.js";import"./use-event-listener-B7AJx6zs.js";import"./open-closed-Tr4JgkLT.js";import"./active-element-history-DdCDvlwS.js";import"./description-D4ZDbxU2.js";import"./label-TvYVrHSo.js";const B={title:"Components/Autocomplete/Examples",component:t.Root,parameters:{layout:"padded"}},n=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"},{id:"jp",label:"Japan",value:"jp"},{id:"br",label:"Brazil",value:"br"}],o={render:()=>{const[r,l]=a.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsxs(t.Root,{options:n,value:r,onChange:l,placeholder:"Type to search countries…",children:[e.jsx(t.Label,{children:"Country"}),e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]}),r&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
