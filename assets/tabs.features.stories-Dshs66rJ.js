import{j as e}from"./iframe-nrIlHJha.js";import{T as r,a as i,b as a,c,d as s}from"./tabs-Dmv4KWHC.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-B2oasDWN.js";import"./use-resolve-button-type-CQQ8L2GD.js";import"./keyboard-CqkS3r67.js";import"./use-sync-refs-DjpU_bj-.js";import"./use-is-mounted-BSRAsM6-.js";import"./hidden-BsOz6iOs.js";import"./focus-management-DCUZsTmC.js";const j={title:"Components/Tabs/Features",component:r,parameters:{layout:"centered"},argTypes:{defaultIndex:{control:{type:"number",min:0},description:"Default selected tab index"}}},n={render:()=>e.jsx("div",{className:"w-full max-w-md",children:e.jsxs(r,{children:[e.jsxs(i,{children:[e.jsx(a,{children:"Account"}),e.jsx(a,{children:"Password"}),e.jsx(a,{children:"Notifications"})]}),e.jsxs(c,{children:[e.jsxs(s,{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Account Settings"}),e.jsx("p",{className:"text-base text-gray-600",children:"Manage your account preferences here."})]}),e.jsxs(s,{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Password Settings"}),e.jsx("p",{className:"text-base text-gray-600",children:"Update your password and security settings."})]}),e.jsxs(s,{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Notification Settings"}),e.jsx("p",{className:"text-base text-gray-600",children:"Configure how you receive notifications."})]})]})]})})},t={render:()=>e.jsx("div",{className:"w-full max-w-md",children:e.jsxs(r,{defaultIndex:1,children:[e.jsxs(i,{children:[e.jsx(a,{children:"First"}),e.jsx(a,{children:"Second"}),e.jsx(a,{children:"Third"})]}),e.jsxs(c,{children:[e.jsx(s,{children:"First panel content"}),e.jsx(s,{children:"Second panel content (default)"}),e.jsx(s,{children:"Third panel content"})]})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
