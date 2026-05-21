import{r as o,j as t}from"./iframe-CGF0_A5u.js";import{S as n}from"./switch-U5J1Hv-q.js";import"./preload-helper-DEha_CyH.js";import"./description-Cg8HyQS4.js";import"./use-sync-refs-BQJai7yY.js";import"./keyboard-D86mmLzy.js";import"./form-fields-DW6HVtwJ.js";import"./index-BF50FvRs.js";import"./index-D85rYT82.js";import"./hidden--9eMrDrq.js";import"./label-CK0kZ04v.js";import"./use-resolve-button-type-CoMikh-_.js";import"./bugs-CmMcbd0d.js";import"./index-B8k91cqS.js";import"./clsx-B-dksMZM.js";import"./tailwind-BykweIWy.js";const j={title:"Components/Switch/Examples",component:n,parameters:{layout:"padded"}},i={render:()=>{const[e,a]=o.useState({email:!0,push:!1,sms:!1});return t.jsxs("div",{className:"p-6 max-w-md",children:[t.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Notification Preferences"}),t.jsxs("div",{className:"space-y-4",children:[t.jsx(n,{label:"Email notifications",description:"Receive updates via email",checked:e.email,onChange:s=>a({...e,email:s})}),t.jsx(n,{label:"Push notifications",description:"Get notified on your device",checked:e.push,onChange:s=>a({...e,push:s})}),t.jsx(n,{label:"SMS notifications",description:"Receive text message updates",checked:e.sms,onChange:s=>a({...e,sms:s})})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
