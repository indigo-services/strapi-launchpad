import{j as c,B as s}from"./iframe-_cKE9r89.js";const p={title:"Primitives/BaseLink",component:s,parameters:{chromatic:{disableSnapshot:!1}},args:{children:"Strapi.io",disabled:!1,href:"https://strapi.io",isExternal:!0},argTypes:{children:{control:!1,description:"the content to be rendered inside the link",table:{type:{summary:"React.ReactNode"}}},href:{description:"The URL the link points to",type:{name:"string",required:!0}},disabled:{control:"boolean",description:"When true, the link is disabled",type:{name:"boolean"},table:{type:{summary:"boolean"}}},isExternal:{control:"boolean",description:"When true, the link opens in a new tab/window",type:{name:"boolean"},table:{type:{summary:"boolean"}}}},render:d=>c.jsx(s,{...d})},e={name:"Base"},a={args:{disabled:!0},name:"Disabled"};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Base'
} satisfies Story`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var n,i,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  name: 'Disabled'
} satisfies Story`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const m=["Base","Disabled"],u=Object.freeze(Object.defineProperty({__proto__:null,Base:e,Disabled:a,__namedExportsOrder:m,default:p},Symbol.toStringTag,{value:"Module"}));export{u as B,e as a};
