import{j as e}from"./iframe-ii299Cu5.js";import{T as r,a as i,b as a,c,d as s}from"./tabs-BjZGC0l1.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-DYa9A5i-.js";import"./use-resolve-button-type-CBZ1aI4k.js";import"./keyboard-D7njr0Xf.js";import"./use-sync-refs-BBkBdVyb.js";import"./use-is-mounted-BlmK50SG.js";import"./hidden-Cn_SrqBj.js";import"./focus-management-BKYhelLL.js";const j={title:"Components/Tabs/Features",component:r,parameters:{layout:"centered"},argTypes:{defaultIndex:{control:{type:"number",min:0},description:"Default selected tab index"}}},n={render:()=>e.jsx("div",{className:"w-full max-w-md",children:e.jsxs(r,{children:[e.jsxs(i,{children:[e.jsx(a,{children:"Account"}),e.jsx(a,{children:"Password"}),e.jsx(a,{children:"Notifications"})]}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Account Settings"}),e.jsx("p",{className:"text-base text-gray-600",children:"Manage your account preferences here."})]}),e.jsxs(s,{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Password Settings"}),e.jsx("p",{className:"text-base text-gray-600",children:"Update your password and security settings."})]}),e.jsxs(s,{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Notification Settings"}),e.jsx("p",{className:"text-base text-gray-600",children:"Configure how you receive notifications."})]})]})]})})},t={render:()=>e.jsx("div",{className:"w-full max-w-md",children:e.jsxs(r,{defaultIndex:1,children:[e.jsxs(i,{children:[e.jsx(a,{children:"First"}),e.jsx(a,{children:"Second"}),e.jsx(a,{children:"Third"})]}),e.jsxs(c,{children:[e.jsx(s,{children:"First panel content"}),e.jsx(s,{children:"Second panel content (default)"}),e.jsx(s,{children:"Third panel content"})]})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md">
      <Tabs>
        <TabList>
          <Tab>Account</Tab>
          <Tab>Password</Tab>
          <Tab>Notifications</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <h3 className="font-semibold mb-2">Account Settings</h3>
            <p className="text-base text-gray-600">Manage your account preferences here.</p>
          </TabPanel>
          <TabPanel>
            <h3 className="font-semibold mb-2">Password Settings</h3>
            <p className="text-base text-gray-600">Update your password and security settings.</p>
          </TabPanel>
          <TabPanel>
            <h3 className="font-semibold mb-2">Notification Settings</h3>
            <p className="text-base text-gray-600">Configure how you receive notifications.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md">
      <Tabs defaultIndex={1}>
        <TabList>
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>First panel content</TabPanel>
          <TabPanel>Second panel content (default)</TabPanel>
          <TabPanel>Third panel content</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
}`,...t.parameters?.docs?.source}}};const P=["Basic","DefaultIndex"];export{n as Basic,t as DefaultIndex,P as __namedExportsOrder,j as default};
