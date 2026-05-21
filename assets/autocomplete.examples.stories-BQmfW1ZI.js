import{r as a,j as e}from"./iframe-CxYaNlfa.js";import{A as t}from"./autocomplete-FLYUA-FB.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./field-autofill-props-Dh75dEkE.js";import"./combobox-BqzisJkx.js";import"./useFocusRing-BD5DFmH8.js";import"./index-C20LchO5.js";import"./index-BjqpgS9N.js";import"./use-resolve-button-type-DZDd8gts.js";import"./keyboard-B83W2K4O.js";import"./use-sync-refs-CzTZ0nVq.js";import"./use-by-comparator-BGB3Ye8U.js";import"./form-fields-CRM6SxwB.js";import"./hidden-D0DTjsv9.js";import"./floating-CGSfTM2Z.js";import"./element-movement-DUP2O6Fs.js";import"./bugs-B1TOvFeJ.js";import"./portal-CbQ4upMP.js";import"./focus-management-ClluBnCx.js";import"./use-inert-others-B76WlhWb.js";import"./use-event-listener-C9ri-zWy.js";import"./open-closed-B5Dl-UPG.js";import"./use-tree-walker-DQkVVWnR.js";import"./active-element-history-D2ClwfRM.js";import"./description-C8AuhUpm.js";import"./frozen-Blk4b_lv.js";import"./label-DQ-YvZ8u.js";const U={title:"Components/Autocomplete/Examples",component:t.Root,parameters:{layout:"padded"}},n=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"},{id:"jp",label:"Japan",value:"jp"},{id:"br",label:"Brazil",value:"br"}],o={render:()=>{const[r,l]=a.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsxs(t.Root,{options:n,value:r,onChange:l,placeholder:"Type to search countries…",children:[e.jsx(t.Label,{children:"Country"}),e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]}),r&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const _=["CountrySearch"];export{o as CountrySearch,_ as __namedExportsOrder,U as default};
