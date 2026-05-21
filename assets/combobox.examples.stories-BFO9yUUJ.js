import{r as n,j as e}from"./iframe-DyfPGUPW.js";import{C as o}from"./combobox-3qvDp3YR.js";import"./preload-helper-DEha_CyH.js";import"./clsx-B-dksMZM.js";import"./input-shell-DfhBUsuF.js";import"./index-B8k91cqS.js";import"./chevron-icon-BzfA5zSV.js";import"./index-BjR8MHm2.js";import"./index-BHqbrTVf.js";import"./index-BsuGfQU-.js";import"./field-autofill-props-Dh75dEkE.js";const h={title:"Components/Combobox/Examples",component:o.Root,parameters:{layout:"padded"}},l=[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"},{id:"de",label:"Germany",value:"de"},{id:"fr",label:"France",value:"fr"}],t={render:()=>{const[r,a]=n.useState(null);return e.jsxs("div",{className:"max-w-xs",children:[e.jsxs(o.Root,{options:l,value:r,onChange:a,placeholder:"Search for a country...",children:[e.jsx(o.Label,{children:"Country"}),e.jsxs(o.Control,{children:[e.jsx(o.Input,{}),e.jsx(o.ClearButton,{}),e.jsx(o.ToggleButton,{})]}),e.jsx(o.Options,{})]}),r&&e.jsxs("p",{className:"mt-4 text-base text-muted-foreground",children:["Selected: ",r.label]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(null);
    return <div className="max-w-xs">
        <Combobox.Root options={countries} value={selected} onChange={setSelected} placeholder="Search for a country...">
          <Combobox.Label>Country</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input />
            <Combobox.ClearButton />
            <Combobox.ToggleButton />
          </Combobox.Control>
          <Combobox.Options />
        </Combobox.Root>
        {selected && <p className="mt-4 text-base text-muted-foreground">Selected: {selected.label}</p>}
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const j=["CountrySelector"];export{t as CountrySelector,j as __namedExportsOrder,h as default};
