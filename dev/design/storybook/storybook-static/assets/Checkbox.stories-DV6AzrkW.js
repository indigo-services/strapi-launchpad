import{j as t,F as v}from"./iframe-_cKE9r89.js";import{d as j}from"./index-BxBVU389.js";import{C as c}from"./Checkbox-0fdbGYKe.js";import{B}from"./Button-BvqyPouE.js";const{fn:w}=__STORYBOOK_MODULE_TEST__,D={title:"Inputs/Checkbox",component:c,decorators:[e=>t.jsx(v,{justifyContent:"center",children:t.jsx(e,{})})],args:{children:"Remember me",onCheckedChange:w()},argTypes:{checked:{control:"radio",options:[!0,!1,"indeterminate"],description:"The controlled checked state of the checkbox",table:{type:{summary:"enum",detail:"true | false | indeterminate"},defaultValue:{summary:"false"}}},defaultChecked:{control:!1,description:"The default checked state when initially rendered",type:{name:"boolean"},table:{defaultValue:{summary:"false"}}},onCheckedChange:{control:!1,action:"checked changed",description:"Event handler called when the checked state changes"},disabled:{control:"boolean",description:"When true, prevents the user from interacting with the checkbox",type:{name:"boolean"},table:{defaultValue:{summary:"false"}}},required:{control:!1,description:"When true, indicates that the user must check the checkbox before the owning form can be submitted",type:{name:"boolean"},table:{defaultValue:{summary:"false"}}},name:{control:!1,description:"The name of the checkbox. Submitted with its owning form as part of a name/value pair",type:{name:"string"}},value:{control:!1,description:"The value given as data when submitted with a name",type:{name:"string"}},children:{control:"text",description:"The label of the checkbox",type:{name:"string"}}},parameters:{chromatic:{disableSnapshot:!1}},render:e=>t.jsx(c,{...e})},a={parameters:{docs:{source:{code:j`
        <Checkbox>
          Remember me
        </Checkbox>`}}},name:"Basic checkbox"},r={argTypes:{checked:{control:"select",options:[!0,!1,"indeterminate"]}},args:{checked:"indeterminate"},name:"Indeterminate"},n={args:{disabled:!0,checked:!0},name:"Disabled",parameters:{docs:{source:{code:"<Checkbox disabled checked>Remember me</Checkbox>"}}}},s={args:{children:null,"aria-label":"Select row 1"},name:"Without label"},o={args:{name:"rememberMe",value:"yes",onSubmit:w()},render:({onSubmit:e,...W})=>t.jsxs(v,{tag:"form",direction:"column",gap:4,alignItems:"flex-start",onSubmit:m=>{if(m.preventDefault(),e){const _=new FormData(m.target);e(_.get("rememberMe"))}},children:[t.jsx(c,{...W}),t.jsx(B,{type:"submit",children:"Submit"})]}),name:"With name and Value"};var i,d,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Checkbox>
          Remember me
        </Checkbox>\`
      }
    }
  },
  name: 'Basic checkbox'
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,h,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  argTypes: {
    checked: {
      control: 'select',
      options: [true, false, 'indeterminate']
    }
  },
  args: {
    checked: 'indeterminate'
  },
  name: 'Indeterminate'
} satisfies Story`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var p,f,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: true
  },
  name: 'Disabled',
  parameters: {
    docs: {
      source: {
        code: '<Checkbox disabled checked>Remember me</Checkbox>'
      }
    }
  }
} satisfies Story`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var k,x,y;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: null,
    ['aria-label']: 'Select row 1'
  },
  name: 'Without label'
} satisfies Story`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,C,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'rememberMe',
    value: 'yes',
    onSubmit: fn()
  },
  render: ({
    onSubmit,
    ...args
  }) => {
    return <Flex tag="form" direction="column" gap={4} alignItems="flex-start" onSubmit={e => {
      e.preventDefault();
      if (onSubmit) {
        const data = new FormData(e.target as HTMLFormElement);
        // @ts-expect-error – We're demonstrating \`value\` and \`name\` here.
        onSubmit(data.get('rememberMe'));
      }
    }}>\r
        <Checkbox {...args} />\r
        <Button type="submit">Submit</Button>\r
      </Flex>;
  },
  name: 'With name and Value'
} satisfies Story`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const I=["Base","Indeterminate","Disabled","WithoutLabel","WithNameAndValue"],R=Object.freeze(Object.defineProperty({__proto__:null,Base:a,Disabled:n,Indeterminate:r,WithNameAndValue:o,WithoutLabel:s,__namedExportsOrder:I,default:D},Symbol.toStringTag,{value:"Module"}));export{a as B,R as C,n as D,r as I,s as W,o as a};
