import{r,j as e}from"./iframe-B_2llF5Y.js";import{A as t}from"./autocomplete-DEZsLitm.js";import"./preload-helper-DEha_CyH.js";import"./clsx-B-dksMZM.js";import"./icons-DgnY1Mue.js";import"./input-shell-YTGH2IZD.js";import"./index-B8k91cqS.js";import"./field-control-shell.module-DNRc52zd.js";import"./useAnchoredPopupScrollLock-DZ6uyEFc.js";import"./index-DWBCX9CX.js";import"./index-DMaG-6Cr.js";import"./index-CORXN6_2.js";import"./clear-icon-sgW-4FTL.js";import"./combobox.module-IUDLw-WH.js";import"./field-autofill-props-Dh75dEkE.js";const g={title:"Components/Autocomplete/Examples",component:t.Root,parameters:{layout:"padded"}},n=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"},{id:"jp",label:"Japan",value:"jp"},{id:"br",label:"Brazil",value:"br"}],o={render:()=>{const[l,a]=r.useState(null);return e.jsxs("div",{className:"p-6 max-w-md",children:[e.jsxs(t.Root,{options:n,value:l,onChange:a,placeholder:"Type to search countries…",children:[e.jsx(t.Label,{children:"Country"}),e.jsxs(t.Control,{children:[e.jsx(t.LeadingIcon,{}),e.jsx(t.Input,{}),e.jsx(t.ClearButton,{})]}),e.jsx(t.Options,{})]}),l&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",l.label]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const y=["CountrySearch"];export{o as CountrySearch,y as __namedExportsOrder,g as default};
