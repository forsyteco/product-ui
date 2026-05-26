import{r as u,j as a}from"./iframe-DB_8LERs.js";import{C as s}from"./country-combobox-u63mdEPu.js";import"./preload-helper-DEha_CyH.js";import"./country-codes-C2_VExOi.js";import"./clsx-B-dksMZM.js";import"./combobox-D9hmymqH.js";import"./input-shell-lz5TZXvM.js";import"./index-B8k91cqS.js";import"./field-control-shell.module-gQfBzJ2w.js";import"./useAnchoredPopupScrollLock-0isBMINU.js";import"./index-Ttl_GQoe.js";import"./index-bUy05opc.js";import"./index-DgJZX215.js";import"./clear-icon-CuXEkaVU.js";import"./combobox.module-BYvaX5Lz.js";import"./chevron-icon-S--tLhD5.js";import"./field-autofill-props-Dh75dEkE.js";import"./button-vlU5xtrA.js";import"./tailwind-BykweIWy.js";import"./spinner-DLtEokUl.js";const d="_layout_1czbf_1",b="_selectionHint_1czbf_5",t={layout:d,selectionHint:b},q={title:"Components/Combobox/Examples",component:s,parameters:{layout:"padded"}},i=[{id:"af",label:"Afghanistan",value:"af"},{id:"al",label:"Albania",value:"al"},{id:"dz",label:"Algeria",value:"dz"},{id:"as",label:"American Samoa",value:"as"},{id:"ad",label:"Andorra",value:"ad"},{id:"ao",label:"Angola",value:"ao"},{id:"ai",label:"Anguilla",value:"ai"},{id:"aq",label:"Antarctica",value:"aq"},{id:"ag",label:"Antigua and Barbuda",value:"ag"},{id:"ar",label:"Argentina",value:"ar"},{id:"am",label:"Armenia",value:"am"},{id:"aw",label:"Aruba",value:"aw"},{id:"au",label:"Australia",value:"au"},{id:"at",label:"Austria",value:"at"},{id:"az",label:"Azerbaijan",value:"az"},{id:"bs",label:"Bahamas",value:"bs"},{id:"bh",label:"Bahrain",value:"bh"},{id:"bd",label:"Bangladesh",value:"bd"},{id:"bb",label:"Barbados",value:"bb"},{id:"by",label:"Belarus",value:"by"},{id:"be",label:"Belgium",value:"be"},{id:"bz",label:"Belize",value:"bz"},{id:"bj",label:"Benin",value:"bj"},{id:"bm",label:"Bermuda",value:"bm"},{id:"gb",label:"United Kingdom",value:"gb"},{id:"us",label:"United States",value:"us"},{id:"fr",label:"France",value:"fr"},{id:"de",label:"Germany",value:"de"},{id:"jp",label:"Japan",value:"jp"},{id:"no",label:"Norway",value:"no"}],c=i.find(e=>e.value==="gb")??{id:"gb",label:"United Kingdom",value:"gb"},o={render:()=>{const[e,l]=u.useState(null);return a.jsxs("div",{className:t.layout,children:[a.jsx(s,{options:i,value:e,onChange:l,label:"Country",placeholder:"Search for a country..."}),e?a.jsxs("p",{className:t.selectionHint,children:["Selected: ",e.label]}):null]})}},r={render:()=>{const[e,l]=u.useState(c);return a.jsx("div",{className:t.layout,children:a.jsx(s,{options:i,value:e,onChange:l,label:"Country of residence",placeholder:"Search for a country..."})})}},n={render:()=>{const[e,l]=u.useState(null);return a.jsxs("div",{className:t.layout,children:[a.jsx(s,{options:i,value:e,onChange:l,quickSelect:c,label:"Country",placeholder:"Search for a country..."}),e?a.jsxs("p",{className:t.selectionHint,children:["Selected: ",e.label]}):null]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<CountryComboboxOption | null>(null);
    return <div className={storyStyles.layout}>
        <CountryCombobox options={countries} value={selected} onChange={setSelected} label="Country" placeholder="Search for a country..." />
        {selected ? <p className={storyStyles.selectionHint}>Selected: {selected.label}</p> : null}
      </div>;
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<CountryComboboxOption | null>(unitedKingdom);
    return <div className={storyStyles.layout}>
        <CountryCombobox options={countries} value={selected} onChange={setSelected} label="Country of residence" placeholder="Search for a country..." />
      </div>;
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<CountryComboboxOption | null>(null);
    return <div className={storyStyles.layout}>
        <CountryCombobox options={countries} value={selected} onChange={setSelected} quickSelect={unitedKingdom} label="Country" placeholder="Search for a country..." />
        {selected ? <p className={storyStyles.selectionHint}>Selected: {selected.label}</p> : null}
      </div>;
  }
}`,...n.parameters?.docs?.source}}};const E=["CountrySelectorWithFlags","CountrySelectorWithInitialValue","CountrySelectorWithQuickSelect"];export{o as CountrySelectorWithFlags,r as CountrySelectorWithInitialValue,n as CountrySelectorWithQuickSelect,E as __namedExportsOrder,q as default};
