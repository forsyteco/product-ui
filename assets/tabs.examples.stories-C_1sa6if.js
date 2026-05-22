import{r as c,j as e}from"./iframe-FucRrgN0.js";import{T as i,a as m,b as a,c as o,d as s}from"./tabs-C4nlTL9z.js";import{I as t}from"./input-DkhC2eoO.js";import{B as l}from"./button-CIKQtcpw.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-BykweIWy.js";import"./clsx-B-dksMZM.js";import"./use-resolve-button-type-Xj4VFEXf.js";import"./keyboard-Y4nRcYzq.js";import"./use-sync-refs-D2lrUS40.js";import"./use-is-mounted-CggrnpIl.js";import"./hidden-BjYGE2J0.js";import"./focus-management-CfKz0vUK.js";import"./field-autofill-props-Dh75dEkE.js";import"./input-shell-ytnWYMk1.js";import"./index-B8k91cqS.js";import"./spinner-vgNm4kF8.js";const C={title:"Components/Tabs/Examples",component:i,parameters:{layout:"padded"}},n={render:()=>{const[d,r]=c.useState(0);return e.jsxs("div",{className:"max-w-2xl mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Settings"}),e.jsxs(i,{selectedIndex:d,onChange:r,children:[e.jsxs(m,{children:[e.jsx(a,{children:"General"}),e.jsx(a,{children:"Security"}),e.jsx(a,{children:"Privacy"}),e.jsx(a,{children:"Billing"})]}),e.jsxs(o,{children:[e.jsx(s,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Display Name"}),e.jsx(t,{type:"text",className:"mt-1",defaultValue:"John Doe"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Email"}),e.jsx(t,{type:"email",className:"mt-1",defaultValue:"john@example.com"})]})]})}),e.jsx(s,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"Current Password"}),e.jsx(t,{type:"password",className:"mt-1"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-base font-medium text-gray-700",children:"New Password"}),e.jsx(t,{type:"password",className:"mt-1"})]}),e.jsx(l,{children:"Update Password"})]})}),e.jsx(s,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium",children:"Public Profile"}),e.jsx("p",{className:"text-base text-gray-600",children:"Make your profile visible to everyone"})]}),e.jsx("input",{type:"checkbox",className:"rounded"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-medium",children:"Email Notifications"}),e.jsx("p",{className:"text-base text-gray-600",children:"Receive email updates"})]}),e.jsx("input",{type:"checkbox",className:"rounded",defaultChecked:!0})]})]})}),e.jsx(s,{children:e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"border border-gray-200 rounded-lg p-4",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Current Plan"}),e.jsx("p",{className:"text-base text-gray-600 mb-4",children:"Pro Plan - $29/month"}),e.jsx(l,{children:"Change Plan"})]})})})]})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
                  <Input type="text" className="mt-1" defaultValue="John Doe" />
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700">Email</label>
                  <Input type="email" className="mt-1" defaultValue="john@example.com" />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="space-y-4">
                <div>
                  <label className="block text-base font-medium text-gray-700">Current Password</label>
                  <Input type="password" className="mt-1" />
                </div>
                <div>
                  <label className="block text-base font-medium text-gray-700">New Password</label>
                  <Input type="password" className="mt-1" />
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
}`,...n.parameters?.docs?.source}}};const B=["SettingsPage"];export{n as SettingsPage,B as __namedExportsOrder,C as default};
