import{r as i,j as e}from"./iframe-CNYYlD36.js";import{T as l,a as c,b as a,c as m,d as s}from"./tabs-Dt3BUBWs.js";import{B as n}from"./button-Bn0tC0DV.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-C4fSfmyf.js";import"./use-resolve-button-type-C9PyahDA.js";import"./keyboard-DtISN8rn.js";import"./use-sync-refs-DZgQMG1Q.js";import"./use-is-mounted-DeNyIpkm.js";import"./hidden-K7cnV1wF.js";import"./focus-management-DeCdYFst.js";import"./index-cXaQtA9H.js";const P={title:"Components/Tabs/Examples",component:l,parameters:{layout:"padded"}},t={render:()=>{const[d,r]=i.useState(0);return e.jsxs("div",{className:"max-w-2xl mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Settings"}),e.jsxs(l,{selectedIndex:d,onChange:r,children:[e.jsxs(c,{children:[e.jsx(a,{children:"General"}),e.jsx(a,{children:"Security"}),e.jsx(a,{children:"Privacy"}),e.jsx(a,{children:"Billing"})]}),e.jsxs(m,{children:[e.jsx(s,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Display Name"}),e.jsx("input",{type:"text",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm",defaultValue:"John Doe"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Email"}),e.jsx("input",{type:"email",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm",defaultValue:"john@example.com"})]})]})}),e.jsx(s,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Current Password"}),e.jsx("input",{type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"New Password"}),e.jsx("input",{type:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm"})]}),e.jsx(n,{children:"Update Password"})]})}),e.jsx(s,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium",children:"Public Profile"}),e.jsx("p",{className:"text-base text-gray-600",children:"Make your profile visible to everyone"})]}),e.jsx("input",{type:"checkbox",className:"rounded"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium",children:"Email Notifications"}),e.jsx("p",{className:"text-base text-gray-600",children:"Receive email updates"})]}),e.jsx("input",{type:"checkbox",className:"rounded",defaultChecked:!0})]})]})}),e.jsx(s,{children:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Current Plan"}),e.jsx("p",{className:"text-base text-gray-600 mb-4",children:"Pro Plan - $29/month"}),e.jsx(n,{children:"Change Plan"})]})})})]})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        <Tabs selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <TabList>
            <Tab>General</Tab>
            <Tab>Security</Tab>
            <Tab>Privacy</Tab>
            <Tab>Billing</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="space-y-4">
                <div>
                  <label className="block text-base font-medium text-gray-700">Display Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" defaultValue="John Doe" />
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" defaultValue="john@example.com" />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4">
                <div>
                  <label className="block text-base font-medium text-gray-700">Current Password</label>
                  <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700">New Password</label>
                  <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
                </div>
                <Button>Update Password</Button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Public Profile</h3>
                    <p className="text-base text-gray-600">Make your profile visible to everyone</p>
                  </div>
                  <input type="checkbox" className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium">Email Notifications</h3>
                    <p className="text-base text-gray-600">Receive email updates</p>
                  </div>
                  <input type="checkbox" className="rounded" defaultChecked />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Current Plan</h3>
                  <p className="text-base text-gray-600 mb-4">Pro Plan - $29/month</p>
                  <Button>Change Plan</Button>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>;
  }
}`,...t.parameters?.docs?.source}}};const T=["SettingsPage"];export{t as SettingsPage,T as __namedExportsOrder,P as default};
