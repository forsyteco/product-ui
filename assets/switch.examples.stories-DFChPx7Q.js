import{r as o,j as t}from"./iframe-DtxS-MGC.js";import{S as n}from"./switch-BWWKK3da.js";import"./preload-helper-DEha_CyH.js";import"./description-CHeu0Qp6.js";import"./use-sync-refs-CPbG3aZX.js";import"./keyboard-DGdCXcdW.js";import"./form-fields-BcAusS8B.js";import"./index-MJ0bJMXz.js";import"./index-HQ1KwuKc.js";import"./hidden-iOrYYUkf.js";import"./label-DM0RO_rr.js";import"./use-resolve-button-type-CLhQcegA.js";import"./bugs-D6x1SQ1q.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";const j={title:"Components/Switch/Examples",component:n,parameters:{layout:"padded"}},i={render:()=>{const[e,a]=o.useState({email:!0,push:!1,sms:!1});return t.jsxs("div",{className:"p-6 max-w-md",children:[t.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Notification Preferences"}),t.jsxs("div",{className:"space-y-4",children:[t.jsx(n,{label:"Email notifications",description:"Receive updates via email",checked:e.email,onChange:s=>a({...e,email:s})}),t.jsx(n,{label:"Push notifications",description:"Get notified on your device",checked:e.push,onChange:s=>a({...e,push:s})}),t.jsx(n,{label:"SMS notifications",description:"Receive text message updates",checked:e.sms,onChange:s=>a({...e,sms:s})})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      email: true,
      push: false,
      sms: false
    });
    return <div className="p-6 max-w-md">
        <h2 className="text-lg font-semibold mb-4">Notification Preferences</h2>
        <div className="space-y-4">
          <Switch label="Email notifications" description="Receive updates via email" checked={settings.email} onChange={checked => setSettings({
          ...settings,
          email: checked
        })} />
          <Switch label="Push notifications" description="Get notified on your device" checked={settings.push} onChange={checked => setSettings({
          ...settings,
          push: checked
        })} />
          <Switch label="SMS notifications" description="Receive text message updates" checked={settings.sms} onChange={checked => setSettings({
          ...settings,
          sms: checked
        })} />
        </div>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const w=["NotificationSettings"];export{i as NotificationSettings,w as __namedExportsOrder,j as default};
