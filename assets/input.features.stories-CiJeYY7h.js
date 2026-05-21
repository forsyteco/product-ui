import{j as e,r as V}from"./iframe-Bbi4Wu2n.js";import{a as A}from"./tailwind-CDN07tui.js";import{C as w}from"./counter-label-BemP9pVK.js";import{F as r,f as N}from"./form-field-kRlIZnUO.js";import{S as T}from"./spinner-CHmihI9Z.js";import{V as D}from"./visually-hidden-I3NbyvUx.js";import{I as a}from"./input-C4pIuugF.js";import{P as $,a as k,b as z}from"./popover-DWU7t0MH.js";import{c as R}from"./createLucideIcon-DdVe-9hA.js";import{S as E}from"./search-BcNuBRJj.js";import"./preload-helper-DEha_CyH.js";import"./index-cXaQtA9H.js";import"./button-BNkMhcgE.js";import"./field-autofill-props-Dh75dEkE.js";import"./popover-h80yWU1a.js";import"./useFocusRing-Cr6_nyWp.js";import"./use-resolve-button-type-ngWtVHmY.js";import"./keyboard-CNKbYmCx.js";import"./use-sync-refs-vr87eQ-t.js";import"./floating-B37oCl7H.js";import"./index-CxVl0uTJ.js";import"./index-CyhagWGm.js";import"./use-event-listener-CBksSNTV.js";import"./portal-5kpVsE14.js";import"./focus-management-CbAavFFR.js";import"./use-tab-direction-BpalNZPG.js";import"./hidden-B_xdvaUE.js";import"./open-closed-BTRjoMdZ.js";import"./close-provider-zN25DST3.js";import"./bugs-C4Onqh7Z.js";const q=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],B=R("circle-question-mark",q);const P=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],_=R("eye",P);function n({children:t,className:l}){return e.jsx("div",{className:A("w-64",l),children:t})}function W({side:t}){return e.jsxs($,{children:[e.jsx(k,{variant:"ghost",size:"sm","aria-label":`Help (${t})`,children:e.jsx(B,{className:"size-4","aria-hidden":!0})}),e.jsxs(z,{children:["Tooltip on ",t]})]})}n.__docgenInfo={description:"",methods:[],displayName:"InputFeatureLayout",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};W.__docgenInfo={description:"",methods:[],displayName:"InputLabelHelpPopover",props:{side:{required:!0,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:""}}};const je={title:"Components/Input/Features",component:a,parameters:{layout:"padded"}},s={render:()=>e.jsx(n,{className:"w-full max-w-md",children:e.jsxs(r,{children:[e.jsx(r.Label,{children:"Full width"}),e.jsx(r.Control,{children:e.jsx(a,{placeholder:"Spans the container"})})]})})},d={render:()=>e.jsx(n,{children:e.jsx(a,{disabled:!0,placeholder:"Disabled input","aria-label":"Disabled input"})})},c={render:()=>e.jsx(n,{children:e.jsx(a,{error:!0,defaultValue:"Invalid value","aria-label":"Error input"})})},u={render:()=>e.jsx(n,{children:e.jsx(a,{size:"lg",placeholder:"Large input","aria-label":"Large input"})})},p={render:()=>e.jsx(n,{children:e.jsxs(r,{children:[e.jsx(r.Label,{required:!0,children:"Username"}),e.jsx(r.Control,{children:e.jsx(a,{required:!0,placeholder:"Required field"})})]})})},m={render:()=>e.jsx(n,{children:e.jsx(a,{size:"sm",placeholder:"Small input","aria-label":"Small input"})})},h={render:()=>e.jsx(n,{children:e.jsx(a,{success:!0,defaultValue:"Valid value","aria-label":"Success input"})})},F={render:()=>e.jsx(n,{children:e.jsxs(r,{children:[e.jsx(r.Label,{children:e.jsx(D,{children:"Search"})}),e.jsx(r.Control,{children:e.jsx(a,{placeholder:"Label is visually hidden"})})]})})},L={render:()=>e.jsx(n,{children:e.jsxs(r,{children:[e.jsx(r.Label,{children:"Email"}),e.jsx(r.Control,{children:e.jsx(a,{type:"email",autoComplete:"email",placeholder:"you@example.com"})})]})})},x={render:()=>e.jsx(n,{children:e.jsxs(r,{children:[e.jsx(r.Label,{children:"Display name"}),e.jsx(r.Description,{children:"Visible on your public profile."}),e.jsx(r.Control,{describedBy:"description",children:e.jsx(a,{placeholder:"Jane Doe"})})]})})},b={render:function(){const[l,i]=V.useState(""),o=50;return e.jsx(n,{children:e.jsxs(r,{children:[e.jsxs(r.LabelRow,{children:[e.jsx(r.Label,{children:"Bio"}),e.jsx(r.LabelActions,{children:e.jsx(w,{children:`${l.length}/${o}`})})]}),e.jsx(r.Control,{children:e.jsx(a,{value:l,onChange:v=>i(v.target.value),maxLength:o,placeholder:"Tell us about yourself"})})]})})}},y={render:function(){const[l,i]=V.useState(""),o=50;return e.jsx(n,{children:e.jsxs(r,{children:[e.jsxs(r.LabelRow,{children:[e.jsx(r.Label,{children:"Bio"}),e.jsx(r.LabelActions,{children:e.jsx(w,{children:`${l.length}/${o}`})})]}),e.jsx(r.Description,{children:"Keep it short and friendly."}),e.jsx(r.Control,{describedBy:"description",children:e.jsx(a,{value:l,onChange:v=>i(v.target.value),maxLength:o,placeholder:"Tell us about yourself"})})]})})}},g={render:function(){const i="This text exceeds the limit",o=i.length>10;return e.jsx(n,{children:e.jsxs(r,{children:[e.jsxs(r.LabelRow,{children:[e.jsx(r.Label,{children:"Short label"}),e.jsx(r.LabelActions,{children:e.jsx(w,{children:e.jsx("span",{className:A(o&&N.error),children:`${i.length}/10`})})})]}),e.jsx(r.Control,{describedBy:o?"both":"none",children:e.jsx(a,{defaultValue:i,maxLength:10,error:o})}),o?e.jsx(r.Error,{children:"Character limit exceeded"}):null]})})}},j={render:()=>e.jsx(n,{children:e.jsx(a,{placeholder:"Search","aria-label":"Search",startElement:e.jsx(E,{className:"size-4","aria-hidden":!0})})})},I={render:()=>e.jsx(n,{children:e.jsx(a,{placeholder:"Loading…","aria-label":"Loading input",endElement:e.jsx(T,{size:20}),readOnly:!0})})},C={render:()=>e.jsx("div",{className:"space-y-4",style:{maxWidth:"36rem"},children:["top","right","bottom","left"].map(t=>e.jsxs(r,{children:[e.jsxs(r.LabelRow,{children:[e.jsx(r.Label,{children:t}),e.jsx(r.LabelActions,{children:e.jsx(W,{side:t})})]}),e.jsx(r.Control,{children:e.jsx(a,{placeholder:`Tooltip ${t}`})})]},t))})},H="https://cdn.jsdelivr.net/npm/twemoji@latest/2/svg/1f1ec-1f1e7.svg";function U({className:t}){return e.jsx("img",{src:H,alt:"","aria-hidden":!0,className:t})}const S={render:()=>e.jsxs(n,{className:"space-y-4",children:[e.jsx(a,{type:"password",placeholder:"Password","aria-label":"Password",trailingAction:{icon:_,"aria-label":"Show password",type:"button"}}),e.jsx(a,{placeholder:"Country","aria-label":"Country",defaultValue:"United Kingdom",readOnly:!0,trailingAction:{icon:U,"aria-label":"Select country",type:"button"}})]})},f={render:()=>e.jsx(n,{children:e.jsx(a,{placeholder:"Search","aria-label":"Search with trailing visual",endElement:e.jsx(E,{className:"size-4","aria-hidden":!0})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout className="w-full max-w-md">
      <FormField>
        <FormField.Label>Full width</FormField.Label>
        <FormField.Control>
          <Input placeholder="Spans the container" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input disabled placeholder="Disabled input" aria-label="Disabled input" />
    </InputFeatureLayout>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input error defaultValue="Invalid value" aria-label="Error input" />
    </InputFeatureLayout>
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input size="lg" placeholder="Large input" aria-label="Large input" />
    </InputFeatureLayout>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <FormField>
        <FormField.Label required>Username</FormField.Label>
        <FormField.Control>
          <Input required placeholder="Required field" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input size="sm" placeholder="Small input" aria-label="Small input" />
    </InputFeatureLayout>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input success defaultValue="Valid value" aria-label="Success input" />
    </InputFeatureLayout>
}`,...h.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <FormField>
        <FormField.Label>Email</FormField.Label>
        <FormField.Control>
          <Input type="email" autoComplete="email" placeholder="you@example.com" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
}`,...L.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <FormField>
        <FormField.Label>Display name</FormField.Label>
        <FormField.Description>Visible on your public profile.</FormField.Description>
        <FormField.Control describedBy="description">
          <Input placeholder="Jane Doe" />
        </FormField.Control>
      </FormField>
    </InputFeatureLayout>
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const maxLength = 50;
    return <InputFeatureLayout>
        <FormField>
          <FormField.LabelRow>
            <FormField.Label>Bio</FormField.Label>
            <FormField.LabelActions>
              <CounterLabel>{\`\${value.length}/\${maxLength}\`}</CounterLabel>
            </FormField.LabelActions>
          </FormField.LabelRow>
          <FormField.Control>
            <Input value={value} onChange={event => setValue(event.target.value)} maxLength={maxLength} placeholder="Tell us about yourself" />
          </FormField.Control>
        </FormField>
      </InputFeatureLayout>;
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    const maxLength = 50;
    return <InputFeatureLayout>
        <FormField>
          <FormField.LabelRow>
            <FormField.Label>Bio</FormField.Label>
            <FormField.LabelActions>
              <CounterLabel>{\`\${value.length}/\${maxLength}\`}</CounterLabel>
            </FormField.LabelActions>
          </FormField.LabelRow>
          <FormField.Description>Keep it short and friendly.</FormField.Description>
          <FormField.Control describedBy="description">
            <Input value={value} onChange={event => setValue(event.target.value)} maxLength={maxLength} placeholder="Tell us about yourself" />
          </FormField.Control>
        </FormField>
      </InputFeatureLayout>;
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const maxLength = 10;
    const value = 'This text exceeds the limit';
    const exceeded = value.length > maxLength;
    return <InputFeatureLayout>
        <FormField>
          <FormField.LabelRow>
            <FormField.Label>Short label</FormField.Label>
            <FormField.LabelActions>
              <CounterLabel>
                <span className={clsx(exceeded && formFieldStyles.error)}>
                  {\`\${value.length}/\${maxLength}\`}
                </span>
              </CounterLabel>
            </FormField.LabelActions>
          </FormField.LabelRow>
          <FormField.Control describedBy={exceeded ? 'both' : 'none'}>
            <Input defaultValue={value} maxLength={maxLength} error={exceeded} />
          </FormField.Control>
          {exceeded ? <FormField.Error>Character limit exceeded</FormField.Error> : null}
        </FormField>
      </InputFeatureLayout>;
  }
}`,...g.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input placeholder="Search" aria-label="Search" startElement={<Search className="size-4" aria-hidden />} />
    </InputFeatureLayout>
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input placeholder="Loading…" aria-label="Loading input" endElement={<Spinner size={20} />} readOnly />
    </InputFeatureLayout>
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <InputFeatureLayout>
      <Input placeholder="Search" aria-label="Search with trailing visual" endElement={<Search className="size-4" aria-hidden />} />
    </InputFeatureLayout>
}`,...f.parameters?.docs?.source}}};const Ie=["Block","Disabled","Error","Large","Required","Small","Success","VisuallyHiddenLabel","WithAutocompleteAttribute","WithCaption","WithCharacterLimit","WithCharacterLimitAndCaption","WithCharacterLimitExceeded","WithLeadingVisual","WithLoadingIndicator","WithTooltipDirection","WithTrailingAction","WithTrailingVisual"];export{s as Block,d as Disabled,c as Error,u as Large,p as Required,m as Small,h as Success,F as VisuallyHiddenLabel,L as WithAutocompleteAttribute,x as WithCaption,b as WithCharacterLimit,y as WithCharacterLimitAndCaption,g as WithCharacterLimitExceeded,j as WithLeadingVisual,I as WithLoadingIndicator,C as WithTooltipDirection,S as WithTrailingAction,f as WithTrailingVisual,Ie as __namedExportsOrder,je as default};
