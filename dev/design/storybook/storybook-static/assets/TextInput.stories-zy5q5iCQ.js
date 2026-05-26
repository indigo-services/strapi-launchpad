import{j as e}from"./iframe-_cKE9r89.js";import{d as j}from"./index-BxBVU389.js";import{T as n}from"./TextInput-Dd_GvljO.js";import{R as z,L as D,E as _,H as L}from"./Field-Cwhta1v_.js";const M={title:"Inputs/TextInput",component:n,parameters:{chromatic:{disableSnapshot:!1}},argTypes:{disabled:{control:"boolean",description:"Disables the input field when true.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},endAction:{control:!1,description:"A node (e.g., icon or button) displayed at the end of the input field.",table:{type:{summary:"React.ReactNode"}}},hasError:{control:"boolean",description:"Manually sets the input into an error state.",table:{type:{summary:"boolean"}}},size:{control:"radio",options:["S","M"],description:'Sets the size of the input field. Small ("S") or Medium ("M").',table:{type:{summary:"'S' | 'M'"},defaultValue:{summary:"M"}}},startAction:{control:!1,description:"A node (e.g., icon or button) displayed at the start of the input field.",table:{type:{summary:"React.ReactNode"}}},type:{control:"select",options:["text","password","email","number","tel","url","search","date","datetime-local","month","week","time","color","checkbox","radio","file","range","hidden"],description:'Standard HTML input attribute, specifies the type of input, such as "text", "password", "email", etc.',table:{type:{summary:"string"},defaultValue:{summary:"text"}}}},args:{disabled:!1,placeholder:"This is a content placeholder",size:"M",type:"text"},render:i=>e.jsx(n,{...i})},r={name:"Base"},t={args:{defaultValue:"admin1234",type:"password"},name:"Password"},a={args:{disabled:!0},name:"Disabled"},s={args:{size:"S"},name:"Small Size"},o={args:{label:"Text",error:"Error",hint:"Description line lorem ipsum"},render:({error:i,hint:w,label:E,...R})=>e.jsxs(z,{id:"with_field",error:i,hint:w,children:[e.jsx(D,{children:E}),e.jsx(n,{name:"content",...R}),e.jsx(_,{}),e.jsx(L,{})]}),parameters:{docs:{source:{code:j`
        <Field
          id="with_field"
          error="Error"
          hint="Description line lorem ipsum"
        >
          <Field.Label>Text</Field.Label>
          <TextInput placeholder="This is a content placeholder" name="content" />
          <Field.Error />
          <Field.Hint />
        </Field.Root>
        `}}},name:"With Field"};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Base'
} satisfies Story`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    defaultValue: 'admin1234',
    type: 'password'
  },
  name: 'Password'
} satisfies Story`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,b,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  name: 'Disabled'
} satisfies Story`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,S,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'S'
  },
  name: 'Small Size'
} satisfies Story`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var F,g,T;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Text',
    error: 'Error',
    hint: 'Description line lorem ipsum'
  },
  render: ({
    error,
    hint,
    label,
    ...props
  }) => {
    return <Field.Root id="with_field" error={error} hint={hint}>\r
        <Field.Label>{label}</Field.Label>\r
        <TextInput name="content" {...props} />\r
        <Field.Error />\r
        <Field.Hint />\r
      </Field.Root>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Field
          id="with_field"
          error="Error"
          hint="Description line lorem ipsum"
        >
          <Field.Label>Text</Field.Label>
          <TextInput placeholder="This is a content placeholder" name="content" />
          <Field.Error />
          <Field.Hint />
        </Field.Root>
        \`
      }
    }
  },
  name: 'With Field'
}`,...(T=(g=o.parameters)==null?void 0:g.docs)==null?void 0:T.source}}};const I=["Base","Password","Disabled","Size","WithField"],W=Object.freeze(Object.defineProperty({__proto__:null,Base:r,Disabled:a,Password:t,Size:s,WithField:o,__namedExportsOrder:I,default:M},Symbol.toStringTag,{value:"Module"}));export{r as B,a as D,t as P,s as S,W as T,o as W};
