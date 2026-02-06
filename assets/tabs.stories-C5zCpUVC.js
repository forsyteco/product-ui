import{j as a}from"./iframe-BZ1wujjQ.js";import{T as r,a as o,b as e,c as i,d as s}from"./tabs-CrV2W7X6.js";import"./preload-helper-DEha_CyH.js";import"./tailwind-CDN07tui.js";import"./useFocusRing-BfnhhEST.js";import"./use-resolve-button-type-BdBbSlJ2.js";import"./keyboard-Ce2CPQ3X.js";import"./use-sync-refs-DKphwUq6.js";import"./use-is-mounted-xpTVFGMB.js";import"./hidden-BNsWunAW.js";import"./focus-management-DzM3vxoc.js";const j={title:"Components/Tabs",component:r,parameters:{layout:"centered",docs:{description:{component:"A tabs component for organizing content into multiple panels. Built with Headless UI for keyboard navigation and accessibility."}}},argTypes:{defaultIndex:{control:{type:"number",min:0},description:"Default selected tab index"}},tags:["autodocs"]},n={render:()=>a.jsx("div",{className:"w-full max-w-md",children:a.jsxs(r,{children:[a.jsxs(o,{children:[a.jsx(e,{children:"Account"}),a.jsx(e,{children:"Password"}),a.jsx(e,{children:"Notifications"})]}),a.jsxs(i,{children:[a.jsxs(s,{children:[a.jsx("h3",{className:"font-semibold mb-2",children:"Account Settings"}),a.jsx("p",{className:"text-base text-gray-600",children:"Manage your account preferences here."})]}),a.jsxs(s,{children:[a.jsx("h3",{className:"font-semibold mb-2",children:"Password Settings"}),a.jsx("p",{className:"text-base text-gray-600",children:"Update your password and security settings."})]}),a.jsxs(s,{children:[a.jsx("h3",{className:"font-semibold mb-2",children:"Notification Settings"}),a.jsx("p",{className:"text-base text-gray-600",children:"Configure how you receive notifications."})]})]})]})})},t={render:c=>a.jsx("div",{className:"w-full max-w-md",children:a.jsxs(r,{...c,children:[a.jsxs(o,{children:[a.jsx(e,{children:"Tab 1"}),a.jsx(e,{children:"Tab 2"}),a.jsx(e,{children:"Tab 3"})]}),a.jsxs(i,{children:[a.jsx(s,{children:"Content for Tab 1"}),a.jsx(s,{children:"Content for Tab 2"}),a.jsx(s,{children:"Content for Tab 3"})]})]})}),args:{defaultIndex:0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  render: args => <div className="w-full max-w-md">
      <Tabs {...args}>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Content for Tab 1</TabPanel>
          <TabPanel>Content for Tab 2</TabPanel>
          <TabPanel>Content for Tab 3</TabPanel>
        </TabPanels>
      </Tabs>
    </div>,
  args: {
    defaultIndex: 0
  }
}`,...t.parameters?.docs?.source}}};const P=["Default","Playground"];export{n as Default,t as Playground,P as __namedExportsOrder,j as default};
