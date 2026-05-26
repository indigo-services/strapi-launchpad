import{j as e,r as D,T as V}from"./iframe-_cKE9r89.js";import{d as l}from"./index-BxBVU389.js";import{G as u,I as a}from"./Radio-BpM9oplW.js";const{fn:x}=__STORYBOOK_MODULE_TEST__,L={title:"Inputs/Radio",component:u,argTypes:{defaultValue:{control:"select",description:"The default value of the radio group",options:["system","light","dark"],table:{category:"Radio.Group",type:{summary:"string"}}},onValueChange:{control:!1,description:"Callback function triggered when the value changes.",table:{category:"Radio.Group",type:{summary:"function",detail:"(value: string) => void"}},defaultValue:{summary:"(value: string) => void;"}},disabled:{control:"boolean",description:"Disables the input when set to true.",table:{category:"Radio.Group",type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{control:!1,description:"Whether the radio group is required in a form context.",table:{category:"Radio.Group",type:{summary:"boolean"},defaultValue:{summary:"false"}}},loop:{control:!1,description:"Whether keyboard navigation should loop from last to first and vice versa",table:{category:"Radio.Group",type:{summary:"boolean"},defaultValue:{summary:"true"}}},name:{control:!1,description:"The name of the radio group, used when submitting an HTML form.",table:{category:"Radio.Group",type:{summary:"string"}}},value:{control:!1,description:"The value of the radio item.",table:{category:"Radio.Item",type:{summary:"string"}}}},args:{defaultValue:"",disabled:!1,loop:!0,name:"theme",required:!1,onValueChange:x()},render:d=>e.jsxs(u,{...d,"aria-label":"Theme",children:[e.jsx(a,{value:"system",children:"System"}),e.jsx(a,{value:"light",children:"Light"}),e.jsx(a,{value:"dark",children:"Dark"})]})},t={name:"Base",parameters:{docs:{source:{code:l`
      <Radio.Group aria-label="Theme">
        <Radio.Item value="system">System</Radio.Item>
        <Radio.Item value="light">Light</Radio.Item>
        <Radio.Item value="dark">Dark</Radio.Item>
      </Radio.Group>`}}}},o={args:{defaultValue:"system"},name:"Default Value",parameters:{docs:{source:{code:l`
      <Radio.Group defaultValue="system" aria-label="Theme">
        <Radio.Item value="system">System</Radio.Item>
        <Radio.Item value="light">Light</Radio.Item>
        <Radio.Item value="dark">Dark</Radio.Item>
      </Radio.Group>`}}}},r={args:{value:"dark"},name:"Controlled",parameters:{docs:{source:{code:l`
      const [value, setValue] = React.useState('dark');

      return (
        <Radio.Group value={value} onValueChange={(val) => setValue(val)} onChange aria-label="Theme">
          <Radio.Item value="system">System</Radio.Item>
          <Radio.Item value="light">Light</Radio.Item>
          <Radio.Item value="dark">Dark</Radio.Item>
        </Radio.Group>
      );`}}}},s={args:{disabled:!0},name:"Disabled",parameters:{docs:{source:{code:l`
        <Radio.Group disabled aria-label="Theme">
          <Radio.Item value="system">System</Radio.Item>
          <Radio.Item value="light">Light</Radio.Item>
          <Radio.Item value="dark">Dark</Radio.Item>
        </Radio.Group>`}}}},i={render:d=>{const m=D.useId();return e.jsxs(u,{"aria-labelledby":m,...d,children:[e.jsx(V,{tag:"label",id:m,variant:"pi",textColor:"neutral800",fontWeight:"bold",children:"Select Theme"}),e.jsx(a,{value:"system",children:"System"}),e.jsx(a,{value:"light",children:"Light"}),e.jsx(a,{value:"dark",children:"Dark"})]})},name:"With label",parameters:{docs:{source:{code:l`
        <Radio.Group aria-label="Theme">
          <Typography tag="label" variant="pi" textColor="neutral800" fontWeight="bold">
            Select Theme
          </Typography>
          <Radio.Item value="system">System</Radio.Item>
          <Radio.Item value="light">Light</Radio.Item>
          <Radio.Item value="dark">Dark</Radio.Item>
        </Radio.Group>`}}}};var n,c,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Base',
  parameters: {
    docs: {
      source: {
        code: outdent\`
      <Radio.Group aria-label="Theme">
        <Radio.Item value="system">System</Radio.Item>
        <Radio.Item value="light">Light</Radio.Item>
        <Radio.Item value="dark">Dark</Radio.Item>
      </Radio.Group>\`
      }
    }
  }
} satisfies Story`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var R,h,g;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    defaultValue: 'system'
  },
  name: 'Default Value',
  parameters: {
    docs: {
      source: {
        code: outdent\`
      <Radio.Group defaultValue="system" aria-label="Theme">
        <Radio.Item value="system">System</Radio.Item>
        <Radio.Item value="light">Light</Radio.Item>
        <Radio.Item value="dark">Dark</Radio.Item>
      </Radio.Group>\`
      }
    }
  }
} satisfies Story`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,I,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: 'dark'
  },
  name: 'Controlled',
  parameters: {
    docs: {
      source: {
        code: outdent\`
      const [value, setValue] = React.useState('dark');

      return (
        <Radio.Group value={value} onValueChange={(val) => setValue(val)} onChange aria-label="Theme">
          <Radio.Item value="system">System</Radio.Item>
          <Radio.Item value="light">Light</Radio.Item>
          <Radio.Item value="dark">Dark</Radio.Item>
        </Radio.Group>
      );\`
      }
    }
  }
} satisfies Story`,...(v=(I=r.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var b,f,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  name: 'Disabled',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Radio.Group disabled aria-label="Theme">
          <Radio.Item value="system">System</Radio.Item>
          <Radio.Item value="light">Light</Radio.Item>
          <Radio.Item value="dark">Dark</Radio.Item>
        </Radio.Group>\`
      }
    }
  }
} satisfies Story`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var k,T,G;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const id = useId();
    return <Radio.Group aria-labelledby={id} {...args}>\r
        <Typography tag="label" id={id} variant="pi" textColor="neutral800" fontWeight="bold">\r
          Select Theme\r
        </Typography>\r
        <Radio.Item value="system">System</Radio.Item>\r
        <Radio.Item value="light">Light</Radio.Item>\r
        <Radio.Item value="dark">Dark</Radio.Item>\r
      </Radio.Group>;
  },
  name: 'With label',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Radio.Group aria-label="Theme">
          <Typography tag="label" variant="pi" textColor="neutral800" fontWeight="bold">
            Select Theme
          </Typography>
          <Radio.Item value="system">System</Radio.Item>
          <Radio.Item value="light">Light</Radio.Item>
          <Radio.Item value="dark">Dark</Radio.Item>
        </Radio.Group>\`
      }
    }
  }
} satisfies Story`,...(G=(T=i.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};const C=["Base","DefaultValue","Controlled","Disabled","WithLabel"],O=Object.freeze(Object.defineProperty({__proto__:null,Base:t,Controlled:r,DefaultValue:o,Disabled:s,WithLabel:i,__namedExportsOrder:C,default:L},Symbol.toStringTag,{value:"Module"}));export{t as B,r as C,o as D,O as R,i as W,s as a};
