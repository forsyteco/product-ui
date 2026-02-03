import{r as o,j as t}from"./iframe-C3NiGLkr.js";import{S as n}from"./switch-Bunfc1Lp.js";import"./preload-helper-DEha_CyH.js";import"./description-te5qwLx3.js";import"./use-sync-refs-Dd4FYj0e.js";import"./keyboard-Dz8OvpXF.js";import"./form-fields-Cc50cINb.js";import"./index-DNRP92Qz.js";import"./index-CEhDcc2E.js";import"./hidden-R1nlN2hH.js";import"./label-DIe7zJQA.js";import"./useFocusRing-dM9pZBoI.js";import"./use-resolve-button-type-D9YGvU7b.js";import"./bugs-DeaIigXP.js";import"./index-cXaQtA9H.js";import"./tailwind-CDN07tui.js";const j={title:"Components/Switch/Examples",component:n,parameters:{layout:"padded"}},i={render:()=>{const[e,a]=o.useState({email:!0,push:!1,sms:!1});return t.jsxs("div",{className:"p-6 max-w-md",children:[t.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Notification Preferences"}),t.jsxs("div",{className:"space-y-4",children:[t.jsx(n,{label:"Email notifications",description:"Receive updates via email",checked:e.email,onChange:s=>a({...e,email:s})}),t.jsx(n,{label:"Push notifications",description:"Get notified on your device",checked:e.push,onChange:s=>a({...e,push:s})}),t.jsx(n,{label:"SMS notifications",description:"Receive text message updates",checked:e.sms,onChange:s=>a({...e,sms:s})})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
