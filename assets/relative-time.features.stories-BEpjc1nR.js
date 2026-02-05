import{j as s}from"./iframe-CNYYlD36.js";import{R as a}from"./relative-time-DqnrEs3b.js";import"./preload-helper-DEha_CyH.js";const u={title:"Components/RelativeTime/Features",component:a,parameters:{layout:"fullscreen",controls:{exclude:/^(getFormatted.*|datetime|as|theme|forwardedAs|.*Callback|update)$/g}},args:{date:new Date("2020-01-01T00:00:00Z"),second:"",minute:"",hour:"",weekday:"",day:"numeric",month:"short",year:"",timeZoneName:""},argTypes:{hour:{type:{name:"enum",value:["","numeric","2-digit"]},control:{type:"select",labels:{"":"(None)"}}},minute:{type:{name:"enum",value:["","numeric","2-digit"]},control:{type:"select",labels:{"":"(None)"}}},second:{type:{name:"enum",value:["","numeric","2-digit"]},control:{type:"select",labels:{"":"(None)"}}},weekday:{type:{name:"enum",value:["","short","long","narrow"]},control:{type:"select",labels:{"":"(None)"}}},day:{type:{name:"enum",value:["","numeric","2-digit"]},control:{type:"select",labels:{"":"(None)"}}},month:{type:{name:"enum",value:["","numeric","2-digit","long","short","narrow"]},control:{type:"select",labels:{"":"(None)"}}},year:{type:{name:"enum",value:["","numeric","2-digit"]},control:{type:"select",labels:{"":"(None)"}}},timeZoneName:{type:{name:"enum",value:["","long","short","longOffset","shortOffset","longGeneric","shortGeneric"]},control:{type:"select",labels:{"":"(None)"}}},date:{control:"date"},format:{control:"text"}}},e=o=>{const{date:n,...m}=o;return s.jsx(a,{noTitle:!0,...m,date:new Date(n),format:"micro"})};e.args={tense:"past"};e.argTypes={format:{control:!1}};const r=o=>{const{...n}=o;return s.jsx(a,{noTitle:!0,...n,date:new Date})};r.argTypes={date:{control:!1}};const t=o=>{const{...n}=o;return s.jsx(a,{noTitle:!0,...n})};t.args={date:new Date("2038-01-19T03:14:08Z"),format:"elapsed",day:"",month:""};t.argTypes={date:{control:!1},format:{control:!1}};e.__docgenInfo={description:"",methods:[],displayName:"MicroFormat"};r.__docgenInfo={description:"",methods:[],displayName:"RecentTime"};t.__docgenInfo={description:"",methods:[],displayName:"CountDownTimer"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
  const {
    date,
    ...rest
  } = args;
  return <RelativeTime noTitle={true} {...rest} date={new Date(date)} format="micro" />;
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
  const {
    ...rest
  } = args;
  return <RelativeTime noTitle={true} {...rest} date={new Date()} />;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const {
    ...rest
  } = args;
  return <RelativeTime noTitle={true} {...rest} />;
}`,...t.parameters?.docs?.source}}};const d=["MicroFormat","RecentTime","CountDownTimer"];export{t as CountDownTimer,e as MicroFormat,r as RecentTime,d as __namedExportsOrder,u as default};
