import{j as e,L as H,J as _,K as W}from"./iframe-_cKE9r89.js";import{d as r}from"./index-BxBVU389.js";import{R as O,L as Y,I as B,E as $,H as v}from"./Field-Cwhta1v_.js";const z={title:"Components/Field",render:({label:E,placeholder:T,type:N,startAction:j,endAction:A,action:q,...C})=>e.jsxs(O,{...C,children:[e.jsx(Y,{action:q,children:E}),e.jsx(B,{type:N,placeholder:T,startAction:j,endAction:A}),e.jsx($,{}),e.jsx(v,{})]}),args:{error:!1,hint:null,label:"First Name",name:"firstname",placeholder:"Ted Lasso",required:!1,type:"text"},parameters:{chromatic:{disableSnapshot:!1}}},a={name:"base",parameters:{docs:{source:{code:r`
      <Field.Root>
        <Field.Label>First Name</Field.Label>
        <Field.Input type="text" placeholder="Ted Lasso" />
      </Field.Root>
    `}}}},t={name:"input",args:{type:"password",label:"New password",placeholder:"Enter a new password",required:!0},parameters:{docs:{source:{code:r`
      <Field.Root>
        <Field.Label>New password</Field.Label>
        <Field.Input type="password" placeholder="Enter a new password" />
      </Field.Root>
    `}}}},s={name:"error",args:{error:"This field is required",action:e.jsx("button",{"aria-label":"i18n",type:"button",children:e.jsx(H,{"aria-hidden":!0})})},parameters:{docs:{source:{code:r`
      <Field.Root error="This field is required">
        <Field.Label>First Name</Field.Label>
        <Field.Input type="text" placeholder="Ted Lasso" />
        <Field.Error />
      </Field.Root>
    `}}}},o={name:"hint",args:{hint:"Your full legal name with any middle names"},parameters:{docs:{source:{code:r`
      <Field.Root hint="Your full legal name with any middle names">
        <Field.Label>First Name</Field.Label>
        <Field.Input type="text" placeholder="Ted Lasso" />
        <Field.Hint />
      </Field.Root>
    `}}}},i={name:"with start action",args:{startAction:e.jsx(_,{})},parameters:{docs:{source:{code:r`
      import { Search } from '@strapi/icons';

      <Field.Root>
        <Field.Label>First Name</Field.Label>
        <Field.Input type="text" placeholder="Ted Lasso" startAction={<Search />}/>
      </Field.Root>
    `}}}},d={name:"with end action",args:{endAction:e.jsx(W,{})},parameters:{docs:{source:{code:r`
      import { Cross } from '@strapi/icons';

      <Field.Root>
        <Field.Label>First Name</Field.Label>
        <Field.Input type="text" placeholder="Ted Lasso" endAction={<Cross />}/>
      </Field.Root>
    `}}}};var l,n,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'base',
  parameters: {
    docs: {
      source: {
        code: outdent\`
      <Field.Root>
        <Field.Label>First Name</Field.Label>
        <Field.Input type="text" placeholder="Ted Lasso" />
      </Field.Root>
    \`
      }
    }
  }
} satisfies Story`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'input',
  args: {
    type: 'password',
    label: 'New password',
    placeholder: 'Enter a new password',
    required: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
      <Field.Root>
        <Field.Label>New password</Field.Label>
        <Field.Input type="password" placeholder="Enter a new password" />
      </Field.Root>
    \`
      }
    }
  }
} satisfies Story`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var F,h,b;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'error',
  args: {
    error: 'This field is required',
    action: <button aria-label="i18n" type="button">\r
        <Earth aria-hidden />\r
      </button>
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
      <Field.Root error="This field is required">
        <Field.Label>First Name</Field.Label>
        <Field.Input type="text" placeholder="Ted Lasso" />
        <Field.Error />
      </Field.Root>
    \`
      }
    }
  }
} satisfies Story`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var L,f,y;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'hint',
  args: {
    hint: 'Your full legal name with any middle names'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
      <Field.Root hint="Your full legal name with any middle names">
        <Field.Label>First Name</Field.Label>
        <Field.Input type="text" placeholder="Ted Lasso" />
        <Field.Hint />
      </Field.Root>
    \`
      }
    }
  }
} satisfies Story`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var w,R,x;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'with start action',
  args: {
    startAction: <Search />
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
      import { Search } from '@strapi/icons';

      <Field.Root>
        <Field.Label>First Name</Field.Label>
        <Field.Input type="text" placeholder="Ted Lasso" startAction={<Search />}/>
      </Field.Root>
    \`
      }
    }
  }
} satisfies Story`,...(x=(R=i.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var g,S,I;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'with end action',
  args: {
    endAction: <Cross />
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
      import { Cross } from '@strapi/icons';

      <Field.Root>
        <Field.Label>First Name</Field.Label>
        <Field.Input type="text" placeholder="Ted Lasso" endAction={<Cross />}/>
      </Field.Root>
    \`
      }
    }
  }
} satisfies Story`,...(I=(S=d.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const J=["Base","Input","Error","Hint","WithStartAction","WithEndAction"],k=Object.freeze(Object.defineProperty({__proto__:null,Base:a,Error:s,Hint:o,Input:t,WithEndAction:d,WithStartAction:i,__namedExportsOrder:J,default:z},Symbol.toStringTag,{value:"Module"}));export{a as B,s as E,k as F,o as H,t as I,i as W,d as a};
