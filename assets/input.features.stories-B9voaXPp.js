import{j as e,r as d}from"./iframe-D3jKVOAj.js";import{c as D}from"./clsx-B-dksMZM.js";import{L as R}from"./label-DAGYo8Mp.js";import{F as r,f as T}from"./form-field-rdE8dV01.js";import{S as $}from"./spinner-BCVrcFZ9.js";import{V as k}from"./button-B1vOep6r.js";import{I as a}from"./input-UIYPuN1D.js";import{P as z,a as q,b as B}from"./popover-Cz1UJoMl.js";import{c as A}from"./createLucideIcon-Dznipqy2.js";import{S as E}from"./search-BayCwLOn.js";import"./preload-helper-DEha_CyH.js";import"./index-B8k91cqS.js";import"./tailwind-BykweIWy.js";import"./field-autofill-props-Dh75dEkE.js";import"./popover-CqnhWfEm.js";import"./use-resolve-button-type-CHu-IHbp.js";import"./keyboard-DAnX0onh.js";import"./use-sync-refs-BsLWer34.js";import"./floating-CzaD3CZv.js";import"./index-DblNVS2F.js";import"./index-DkyIaSV8.js";import"./use-event-listener-D8A8Yli8.js";import"./portal-CZXLTeWu.js";import"./focus-management-DHNzSoTK.js";import"./use-tab-direction-WwYhWDY4.js";import"./hidden-VRiS1Y6s.js";import"./open-closed-xuvlXUtj.js";import"./bugs-BRsUgAr4.js";const P=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],_=A("circle-question-mark",P);const H=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],U=A("eye",H);function n({children:l,className:o}){return e.jsx("div",{className:D("w-64",o),children:l})}function N({side:l}){return e.jsxs(z,{children:[e.jsx(q,{variant:"ghost",size:"sm","aria-label":`Help (${l})`,children:e.jsx(_,{className:"size-4","aria-hidden":!0})}),e.jsxs(B,{children:["Tooltip on ",l]})]})}n.__docgenInfo={description:"",methods:[],displayName:"InputFeatureLayout",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};N.__docgenInfo={description:"",methods:[],displayName:"InputLabelHelpPopover",props:{side:{required:!0,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:""}}};const ge={title:"Components/Input/Features",component:a,parameters:{layout:"padded"}},c={render:()=>e.jsx(n,{className:"w-full max-w-md",children:e.jsxs(r,{children:[e.jsx(r.Label,{children:"Full width"}),e.jsx(r.Control,{children:e.jsx(a,{placeholder:"Spans the container"})})]})})},u={render:()=>e.jsx(n,{children:e.jsx(a,{disabled:!0,placeholder:"Disabled input","aria-label":"Disabled input"})})},m={render:()=>e.jsx(n,{children:e.jsx(a,{error:!0,defaultValue:"Invalid value","aria-label":"Error input"})})},p={render:()=>e.jsx(n,{children:e.jsx(a,{size:"lg",placeholder:"Large input","aria-label":"Large input"})})},F={render:()=>e.jsx(n,{children:e.jsxs(r,{children:[e.jsx(r.Label,{required:!0,children:"Username"}),e.jsx(r.Control,{children:e.jsx(a,{required:!0,placeholder:"Required field"})})]})})},h={render:()=>e.jsx(n,{children:e.jsx(a,{size:"sm",placeholder:"Small input","aria-label":"Small input"})})},L={render:()=>e.jsx(n,{children:e.jsx(a,{success:!0,defaultValue:"Valid value","aria-label":"Success input"})})},x={render:()=>e.jsx(n,{children:e.jsxs(r,{children:[e.jsx(r.Label,{children:e.jsx(k,{children:"Search"})}),e.jsx(r.Control,{children:e.jsx(a,{placeholder:"Label is visually hidden"})})]})})},b={render:()=>e.jsx(n,{children:e.jsxs(r,{children:[e.jsx(r.Label,{children:"Email"}),e.jsx(r.Control,{children:e.jsx(a,{type:"email",autoComplete:"email",placeholder:"you@example.com"})})]})})},y={render:()=>e.jsx(n,{children:e.jsxs(r,{children:[e.jsx(r.Label,{children:"Display name"}),e.jsx(r.Description,{children:"Visible on your public profile."}),e.jsx(r.Control,{describedBy:"description",children:e.jsx(a,{placeholder:"Jane Doe"})})]})})},j={render:function(){const[o,i]=d.useState(""),t=50;return e.jsx(n,{children:e.jsxs(r,{children:[e.jsxs(r.LabelRow,{children:[e.jsx(r.Label,{children:"Bio"}),e.jsx(r.LabelActions,{children:e.jsx(R,{children:`${o.length}/${t}`})})]}),e.jsx(r.Control,{children:e.jsx(a,{value:o,onChange:s=>i(s.target.value),maxLength:t,placeholder:"Tell us about yourself"})})]})})}},g={render:function(){const[o,i]=d.useState(""),t=50;return e.jsx(n,{children:e.jsxs(r,{children:[e.jsxs(r.LabelRow,{children:[e.jsx(r.Label,{children:"Bio"}),e.jsx(r.LabelActions,{children:e.jsx(R,{children:`${o.length}/${t}`})})]}),e.jsx(r.Description,{children:"Keep it short and friendly."}),e.jsx(r.Control,{describedBy:"description",children:e.jsx(a,{value:o,onChange:s=>i(s.target.value),maxLength:t,placeholder:"Tell us about yourself"})})]})})}},C={render:function(){const i="This text exceeds the limit",t=i.length>10;return e.jsx(n,{children:e.jsxs(r,{children:[e.jsxs(r.LabelRow,{children:[e.jsx(r.Label,{children:"Short label"}),e.jsx(r.LabelActions,{children:e.jsx(R,{className:D(t&&T.error),children:`${i.length}/10`})})]}),e.jsx(r.Control,{describedBy:t?"both":"none",children:e.jsx(a,{defaultValue:i,maxLength:10,error:t})}),t?e.jsx(r.Error,{children:"Character limit exceeded"}):null]})})}},S={render:()=>e.jsx(n,{children:e.jsx(a,{placeholder:"Search","aria-label":"Search",startElement:e.jsx(E,{className:"size-4","aria-hidden":!0})})})},f={render:()=>e.jsx(n,{children:e.jsx(a,{placeholder:"Loading…","aria-label":"Loading input",endElement:e.jsx($,{size:20}),readOnly:!0})})},I={render:()=>e.jsx("div",{className:"space-y-4",style:{maxWidth:"36rem"},children:["top","right","bottom","left"].map(l=>e.jsxs(r,{children:[e.jsxs(r.LabelRow,{children:[e.jsx(r.Label,{children:l}),e.jsx(r.LabelActions,{children:e.jsx(N,{side:l})})]}),e.jsx(r.Control,{children:e.jsx(a,{placeholder:`Tooltip ${l}`})})]},l))})},O="https://cdn.jsdelivr.net/npm/twemoji@latest/2/svg/1f1ec-1f1e7.svg";function K({className:l}){return e.jsx("img",{src:O,alt:"","aria-hidden":!0,className:l})}const v={render:()=>e.jsxs(n,{className:"space-y-4",children:[e.jsx(a,{type:"password",placeholder:"Password","aria-label":"Password",trailingAction:{icon:U,"aria-label":"Show password",type:"button"}}),e.jsx(a,{placeholder:"Country","aria-label":"Country",defaultValue:"United Kingdom",readOnly:!0,trailingAction:{icon:K,"aria-label":"Select country",type:"button"}})]})},V={render:()=>e.jsx(n,{children:e.jsx(a,{placeholder:"Search","aria-label":"Search with trailing visual",endElement:e.jsx(E,{className:"size-4","aria-hidden":!0})})})},w={render:()=>{const[l,o]=d.useState(),[i,t]=d.useState(5),[s,W]=d.useState(1234.56);return e.jsxs(n,{className:"w-full max-w-md space-y-4",children:[e.jsxs(r,{children:[e.jsx(r.Label,{children:"Default (2 decimals)"}),e.jsx(r.Control,{children:e.jsx(a,{format:"currency",placeholder:"Enter amount",value:l,onValueChange:o,currencySymbol:"£"})})]}),e.jsxs(r,{children:[e.jsx(r.Label,{children:"Clamped between 0 and 10"}),e.jsx(r.Control,{children:e.jsx(a,{format:"currency",value:i,onValueChange:t,min:0,max:10,decimalScale:2,currencySymbol:"$"})})]}),e.jsxs(r,{children:[e.jsx(r.Label,{children:"Locale fr-FR"}),e.jsx(r.Control,{children:e.jsx(a,{format:"currency",value:s,onValueChange:W,locale:"fr-FR",decimalScale:2,currencySymbol:"€"})})]})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout className="w-full max-w-md">
      <FormField>
        <FormField.Label>Full width</FormField.Label>
        <FormField.Control>
          <Input placeholder="Spans the container" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input disabled placeholder="Disabled input" aria-label="Disabled input" />
    </InputFeatureLayout>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input error defaultValue="Invalid value" aria-label="Error input" />
    </InputFeatureLayout>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input size="lg" placeholder="Large input" aria-label="Large input" />
    </InputFeatureLayout>
}`,...p.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <FormField>
        <FormField.Label required>Username</FormField.Label>
        <FormField.Control>
          <Input required placeholder="Required field" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
}`,...F.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input size="sm" placeholder="Small input" aria-label="Small input" />
    </InputFeatureLayout>
}`,...h.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input success defaultValue="Valid value" aria-label="Success input" />
    </InputFeatureLayout>
}`,...L.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <FormField>
        <FormField.Label>
          <VisuallyHidden>Search</VisuallyHidden>
        </FormField.Label>
        <FormField.Control>
          <Input placeholder="Label is visually hidden" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <FormField>
        <FormField.Label>Email</FormField.Label>
        <FormField.Control>
          <Input type="email" autoComplete="email" placeholder="you@example.com" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <FormField>
        <FormField.Label>Display name</FormField.Label>
        <FormField.Description>Visible on your public profile.</FormField.Description>
        <FormField.Control describedBy="description">
          <Input placeholder="Jane Doe" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const maxLength = 50;
    return <InputFeatureLayout>
        <FormField>
          <FormField.LabelRow>
            <FormField.Label>Bio</FormField.Label>
            <FormField.LabelActions>
              <Label>{\`\${value.length}/\${maxLength}\`}</Label>
            </FormField.LabelActions>
          </FormField.LabelRow>
          <FormField.Control>
            <Input value={value} onChange={event => setValue(event.target.value)} maxLength={maxLength} placeholder="Tell us about yourself" />
          </FormField.Control>
        </FormField>
      </InputFeatureLayout>;
  }
}`,...j.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const maxLength = 50;
    return <InputFeatureLayout>
        <FormField>
          <FormField.LabelRow>
            <FormField.Label>Bio</FormField.Label>
            <FormField.LabelActions>
              <Label>{\`\${value.length}/\${maxLength}\`}</Label>
            </FormField.LabelActions>
          </FormField.LabelRow>
          <FormField.Description>Keep it short and friendly.</FormField.Description>
          <FormField.Control describedBy="description">
            <Input value={value} onChange={event => setValue(event.target.value)} maxLength={maxLength} placeholder="Tell us about yourself" />
          </FormField.Control>
        </FormField>
      </InputFeatureLayout>;
  }
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const maxLength = 10;
    const value = 'This text exceeds the limit';
    const exceeded = value.length > maxLength;
    return <InputFeatureLayout>
        <FormField>
          <FormField.LabelRow>
            <FormField.Label>Short label</FormField.Label>
            <FormField.LabelActions>
              <Label className={clsx(exceeded && formFieldStyles.error)}>
                {\`\${value.length}/\${maxLength}\`}
              </Label>
            </FormField.LabelActions>
          </FormField.LabelRow>
          <FormField.Control describedBy={exceeded ? 'both' : 'none'}>
            <Input defaultValue={value} maxLength={maxLength} error={exceeded} />
          </FormField.Control>
          {exceeded ? <FormField.Error>Character limit exceeded</FormField.Error> : null}
        </FormField>
      </InputFeatureLayout>;
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input placeholder="Search" aria-label="Search" startElement={<Search className="size-4" aria-hidden />} />
    </InputFeatureLayout>
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input placeholder="Loading…" aria-label="Loading input" endElement={<Spinner size={20} />} readOnly />
    </InputFeatureLayout>
}`,...f.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4" style={{
    maxWidth: '36rem'
  }}>
      {(['top', 'right', 'bottom', 'left'] as const).map(side => <FormField key={side}>
          <FormField.LabelRow>
            <FormField.Label>{side}</FormField.Label>
            <FormField.LabelActions>
              <InputLabelHelpPopover side={side} />
            </FormField.LabelActions>
          </FormField.LabelRow>
          <FormField.Control>
            <Input placeholder={\`Tooltip \${side}\`} />
          </FormField.Control>
        </FormField>)}
    </div>
}`,...I.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout className="space-y-4">
      <Input type="password" placeholder="Password" aria-label="Password" trailingAction={{
      icon: Eye,
      'aria-label': 'Show password',
      type: 'button'
    }} />
      <Input placeholder="Country" aria-label="Country" defaultValue="United Kingdom" readOnly trailingAction={{
      icon: UkFlagIcon,
      'aria-label': 'Select country',
      type: 'button'
    }} />
    </InputFeatureLayout>
}`,...v.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input placeholder="Search" aria-label="Search with trailing visual" endElement={<Search className="size-4" aria-hidden />} />
    </InputFeatureLayout>
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [valueDefault, setValueDefault] = useState<number | undefined>();
    const [valueClamped, setValueClamped] = useState<number | undefined>(5);
    const [valueLocale, setValueLocale] = useState<number | undefined>(1234.56);
    return <InputFeatureLayout className="w-full max-w-md space-y-4">
        <FormField>
          <FormField.Label>Default (2 decimals)</FormField.Label>
          <FormField.Control>
            <Input format="currency" placeholder="Enter amount" value={valueDefault} onValueChange={setValueDefault} currencySymbol="£" />
          </FormField.Control>
        </FormField>

        <FormField>
          <FormField.Label>Clamped between 0 and 10</FormField.Label>
          <FormField.Control>
            <Input format="currency" value={valueClamped} onValueChange={setValueClamped} min={0} max={10} decimalScale={2} currencySymbol="$" />
          </FormField.Control>
        </FormField>

        <FormField>
          <FormField.Label>Locale fr-FR</FormField.Label>
          <FormField.Control>
            <Input format="currency" value={valueLocale} onValueChange={setValueLocale} locale="fr-FR" decimalScale={2} currencySymbol="€" />
          </FormField.Control>
        </FormField>
      </InputFeatureLayout>;
  }
}`,...w.parameters?.docs?.source}}};const Ce=["Block","Disabled","Error","Large","Required","Small","Success","VisuallyHiddenLabel","WithAutocompleteAttribute","WithCaption","WithCharacterLimit","WithCharacterLimitAndCaption","WithCharacterLimitExceeded","WithLeadingVisual","WithLoadingIndicator","WithTooltipDirection","WithTrailingAction","WithTrailingVisual","Currency"];export{c as Block,w as Currency,u as Disabled,m as Error,p as Large,F as Required,h as Small,L as Success,x as VisuallyHiddenLabel,b as WithAutocompleteAttribute,y as WithCaption,j as WithCharacterLimit,g as WithCharacterLimitAndCaption,C as WithCharacterLimitExceeded,S as WithLeadingVisual,f as WithLoadingIndicator,I as WithTooltipDirection,v as WithTrailingAction,V as WithTrailingVisual,Ce as __namedExportsOrder,ge as default};
