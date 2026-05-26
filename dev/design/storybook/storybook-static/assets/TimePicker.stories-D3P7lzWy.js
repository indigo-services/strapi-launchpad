import{j as e}from"./iframe-_cKE9r89.js";import{d as j}from"./index-BxBVU389.js";import{T as n}from"./TimePicker-DZj-LHYv.js";import{R as x,L as H,E as w,H as z}from"./Field-Cwhta1v_.js";const D={title:"Inputs/TimePicker",component:n,argTypes:{step:{control:!1,description:"The time interval between options in minutes.",table:{type:{summary:"number"},defaultValue:{summary:"15"}}},value:{control:!1,description:'The selected time value in "HH:mm" format.',table:{type:{summary:"string"}}},defaultValue:{control:!1,description:'The default time value in "HH:mm" format.',table:{type:{summary:"string"}}},onChange:{control:!1,description:"Callback function triggered when the time value changes.",table:{type:{summary:"function",detail:"(value: string) => void"}}},onBlur:{control:!1,description:"Callback function triggered when the input field loses focus.",table:{type:{summary:"function",detail:"(event: React.FocusEvent<HTMLInputElement>) => void"}}},isPrintableCharacter:{control:!1,description:"A custom function to check if a character is not alphabetical, used to filter input.",table:{type:{summary:"function",detail:"(str: string) => boolean"}}},size:{control:"radio",options:["S","M"]}},parameters:{chromatic:{disableSnapshot:!1}},args:{disabled:!1,size:"M"},render:o=>e.jsx(n,{...o})},i={name:"Base"},s={args:{disabled:!0},name:"Disabled"},t={args:{size:"S"},name:"Small size"},r={args:{step:60},name:"Steps"},a={render:({error:o,hint:E,label:_,...v})=>e.jsxs(x,{id:"with_field",error:o,hint:E,children:[e.jsx(H,{children:_}),e.jsx(n,{...v}),e.jsx(w,{}),e.jsx(z,{})]}),args:{...r.args,label:"Time picker",error:"Error",hint:"Description line lorem ipsum"},parameters:{docs:{source:{code:j`
        <Field
          id="with_field"
          error="Error"
          hint="Description line lorem ipsum"
        >
          <Field.Label>Time picker</Field.Label>
          <TimePicker id="with_field" />
          <Field.Error />
          <Field.Hint />
        </Field.Root>
      `}}},name:"With Field"};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Base'
} satisfies Story`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  name: 'Disabled'
} satisfies Story`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,b,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'S'
  },
  name: 'Small size'
} satisfies Story`,...(h=(b=t.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,S,F;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    step: 60
  },
  name: 'Steps'
} satisfies Story`,...(F=(S=r.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var y,T,k;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ({
    error,
    hint,
    label,
    ...props
  }) => {
    return <Field.Root id="with_field" error={error} hint={hint}>\r
        <Field.Label>{label}</Field.Label>\r
        <TimePicker {...props} />\r
        <Field.Error />\r
        <Field.Hint />\r
      </Field.Root>;
  },
  args: {
    ...Steps.args,
    label: 'Time picker',
    error: 'Error',
    hint: 'Description line lorem ipsum'
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
          <Field.Label>Time picker</Field.Label>
          <TimePicker id="with_field" />
          <Field.Error />
          <Field.Hint />
        </Field.Root>
      \`
      }
    }
  },
  name: 'With Field'
}`,...(k=(T=a.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const L=["Base","Disabled","Size","Steps","WithField"],C=Object.freeze(Object.defineProperty({__proto__:null,Base:i,Disabled:s,Size:t,Steps:r,WithField:a,__namedExportsOrder:L,default:D},Symbol.toStringTag,{value:"Module"}));export{i as B,s as D,t as S,C as T,a as W,r as a};
