import{r as d,j as o}from"./iframe-DB_8LERs.js";import{C as e}from"./combobox-D9hmymqH.js";import{S as b}from"./search-BmM94D1X.js";import"./preload-helper-DEha_CyH.js";import"./clsx-B-dksMZM.js";import"./input-shell-lz5TZXvM.js";import"./index-B8k91cqS.js";import"./field-control-shell.module-gQfBzJ2w.js";import"./useAnchoredPopupScrollLock-0isBMINU.js";import"./index-Ttl_GQoe.js";import"./index-bUy05opc.js";import"./index-DgJZX215.js";import"./clear-icon-CuXEkaVU.js";import"./combobox.module-BYvaX5Lz.js";import"./chevron-icon-S--tLhD5.js";import"./field-autofill-props-Dh75dEkE.js";import"./createLucideIcon-EJZh-lZr.js";const V={title:"Components/Combobox/Features",component:e.Root,parameters:{layout:"centered"},argTypes:{placeholder:{control:{type:"text"},description:"Placeholder text"},disabled:{control:{type:"boolean"},description:"Whether the combobox is disabled"}}},s=[{id:"1",label:"Apple",value:"apple"},{id:"2",label:"Banana",value:"banana"},{id:"3",label:"Cherry",value:"cherry"},{id:"4",label:"Date",value:"date"},{id:"5",label:"Elderberry",value:"elderberry"}],r={render:()=>{const[t,n]=d.useState(null);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,value:t,onChange:n,placeholder:"Select a fruit...",children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}},l={render:()=>{const[t,n]=d.useState(s[1]);return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,value:t,onChange:n,children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}},a={render:()=>o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,disabled:!0,placeholder:"Disabled combobox",children:[o.jsxs(e.Control,{children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})},i={render:()=>{const[t,n]=d.useState(s[0]),c=t&&t.label==="Apple";return o.jsx("div",{className:"w-64",children:o.jsxs(e.Root,{options:s,value:t,onChange:n,placeholder:"Select a fruit...",children:[o.jsxs(e.Control,{leadingVisual:c?o.jsx(b,{className:"size-4","aria-hidden":!0}):null,children:[o.jsx(e.Input,{}),o.jsx(e.ClearButton,{}),o.jsx(e.ToggleButton,{})]}),o.jsx(e.Options,{})]})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(null);
    return <div className="w-64">
        <Combobox.Root options={options} value={selected} onChange={setSelected} placeholder="Select a fruit...">
          <Combobox.Control>
            <Combobox.Input />
            <Combobox.ClearButton />
            <Combobox.ToggleButton />
          </Combobox.Control>
          <Combobox.Options />
        </Combobox.Root>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(options[1]);
    return <div className="w-64">
        <Combobox.Root options={options} value={selected} onChange={setSelected}>
          <Combobox.Control>
            <Combobox.Input />
            <Combobox.ClearButton />
            <Combobox.ToggleButton />
          </Combobox.Control>
          <Combobox.Options />
        </Combobox.Root>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64">
      <Combobox.Root options={options} disabled placeholder="Disabled combobox">
        <Combobox.Control>
          <Combobox.Input />
          <Combobox.ClearButton />
          <Combobox.ToggleButton />
        </Combobox.Control>
        <Combobox.Options />
      </Combobox.Root>
    </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<ComboboxOption | null>(options[0]);
    const showLeadingVisual = selected && selected.label === 'Apple';
    return <div className="w-64">
        <Combobox.Root options={options} value={selected} onChange={setSelected} placeholder="Select a fruit...">
          <Combobox.Control leadingVisual={showLeadingVisual ? <Search className="size-4" aria-hidden /> : null}>
            <Combobox.Input />
            <Combobox.ClearButton />
            <Combobox.ToggleButton />
          </Combobox.Control>
          <Combobox.Options />
        </Combobox.Root>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const f=["Basic","WithInitialValue","Disabled","WithLeadingVisual"];export{r as Basic,a as Disabled,l as WithInitialValue,i as WithLeadingVisual,f as __namedExportsOrder,V as default};
