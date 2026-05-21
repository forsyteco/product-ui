import{r as a,j as e}from"./iframe-2gSw_mv2.js";import{A as t}from"./autocomplete-Bk-sP90r.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-CWXX-0PN.js";import"./use-resolve-button-type-BJkWDc_4.js";import"./keyboard-BaAOKfHq.js";import"./use-sync-refs-DmqRrsUT.js";import"./index-CfTXRGMP.js";import"./index-DkkTbRiJ.js";import"./frozen-VyUt3tJ3.js";import"./form-fields-BGfwIb9P.js";import"./hidden-CNfTMTAC.js";import"./floating-C3szj9N5.js";import"./element-movement-C7gX0vvO.js";import"./bugs-CQkR_j0_.js";import"./portal-Bro9fcSW.js";import"./focus-management-COn_JIX_.js";import"./use-inert-others-CkKm98KO.js";import"./use-event-listener-DGw3SnZo.js";import"./open-closed-BO3DqZNu.js";import"./use-tree-walker-C36I32p-.js";import"./active-element-history-DgWg7P9d.js";import"./description-BdFui_Rt.js";import"./label-DHV5xTYx.js";const T={title:"Components/Autocomplete/Examples",component:t.Root,parameters:{layout:"padded"}},n=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"},{id:"jp",label:"Japan",value:"jp"},{id:"br",label:"Brazil",value:"br"}],o={render:()=>{const[r,l]=a.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsxs(t.Root,{options:n,value:r,onChange:l,placeholder:"Type to search countries…",children:[e.jsx(t.Label,{children:"Country"}),e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]}),r&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const U=["CountrySearch"];export{o as CountrySearch,U as __namedExportsOrder,T as default};
