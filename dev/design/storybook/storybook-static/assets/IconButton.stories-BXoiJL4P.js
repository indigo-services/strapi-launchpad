import{j as o,I as p,F as L,N as A,O as P,P as C}from"./iframe-_cKE9r89.js";import{d as r}from"./index-BxBVU389.js";import{I as e,a as N}from"./IconButton-Uvk00hK3.js";const{fn:F}=__STORYBOOK_MODULE_TEST__,E=["default","secondary","tertiary","success","success-light","danger","danger-light","ghost"],R={title:"Components/IconButton",component:e,args:{children:"More",disabled:!1,label:"More actions",onClick:F(),variant:"tertiary"},argTypes:{children:{control:"select",options:Object.keys(p)},size:{control:"select",options:["XS","S","M","L"]},variant:{control:"select",options:E}},parameters:{chromatic:{disableSnapshot:!1},docs:{source:{code:r`
          import { More } from '@strapi/icons';
          
          <IconButton label="More actions">
            <More />
          </IconButton>
        `}}},render:({children:l,...u})=>{const d=p[l];return o.jsx(e,{...u,children:o.jsx(d,{})})}},t={name:"base"},s={args:{disabled:!0},parameters:{docs:{source:{code:r`
          import { More } from '@strapi/icons';
          
          <IconButton disabled label="More actions">
            <More />
          </IconButton>
        `}}},name:"disabled"},n={args:{size:"M"},parameters:{docs:{source:{code:r`
          import { More } from '@strapi/icons';
          
          <IconButton size="M" label="More actions">
            <More />
          </IconButton>
        `}}},name:"size medium"},a={args:{size:"L"},parameters:{docs:{source:{code:r`
          import { More } from '@strapi/icons';
          
          <IconButton size="L" label="More actions">
            <More />
          </IconButton>
        `}}},name:"size large"},c={render:({children:l,...u})=>{const d=p[l];return o.jsx(L,{gap:2,children:E.map(m=>o.jsx(e,{...u,variant:m,children:o.jsx(d,{})},m))})},parameters:{docs:{source:{code:r`
          import { More } from '@strapi/icons';
          
          <IconButton variant="success" label="More actions">
            <More />
          </IconButton>`}}},name:"all variants"},i={render:()=>o.jsxs(N,{children:[o.jsx(e,{label:"Edit",children:o.jsx(A,{})}),o.jsx(e,{label:"Clone",children:o.jsx(P,{})}),o.jsx(e,{label:"Delete",variant:"danger",children:o.jsx(C,{})})]}),parameters:{docs:{source:{code:r`
          import { Pencil, Duplicate, Trash } from '@strapi/icons';
          import { IconButton, IconButtonGroup } from '@strapi/design-system';
          
          <IconButtonGroup>
            <IconButton label="Edit">
              <Pencil />
            </IconButton>
            <IconButton label="Clone">
              <Duplicate />
            </IconButton>
            <IconButton label="Delete" variant="danger">
              <Trash />
            </IconButton>
          <IconButtonGroup>`}}},name:"group"};var I,B,b;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'base'
} satisfies Story`,...(b=(B=t.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var M,g,f;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          import { More } from '@strapi/icons';
          
          <IconButton disabled label="More actions">
            <More />
          </IconButton>
        \`
      }
    }
  },
  name: 'disabled'
} satisfies Story`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var S,h,x;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'M'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          import { More } from '@strapi/icons';
          
          <IconButton size="M" label="More actions">
            <More />
          </IconButton>
        \`
      }
    }
  },
  name: 'size medium'
} satisfies Story`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var z,j,T;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'L'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          import { More } from '@strapi/icons';
          
          <IconButton size="L" label="More actions">
            <More />
          </IconButton>
        \`
      }
    }
  },
  name: 'size large'
} satisfies Story`,...(T=(j=a.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var y,_,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ({
    children,
    ...args
  }) => {
    // eslint-disable-next-line import/namespace
    const Icon = Icons[children];
    return <Flex gap={2}>\r
        {BUTTON_VARIANTS.map(variant => <IconButton key={variant} {...args} variant={variant}>\r
            <Icon />\r
          </IconButton>)}\r
      </Flex>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          import { More } from '@strapi/icons';
          
          <IconButton variant="success" label="More actions">
            <More />
          </IconButton>\`
      }
    }
  },
  name: 'all variants'
} satisfies Story`,...(v=(_=c.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var D,G,O;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <IconButtonGroup>\r
      <IconButton label="Edit">\r
        <Icons.Pencil />\r
      </IconButton>\r
      <IconButton label="Clone">\r
        <Icons.Duplicate />\r
      </IconButton>\r
      <IconButton label="Delete" variant="danger">\r
        <Icons.Trash />\r
      </IconButton>\r
    </IconButtonGroup>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
          import { Pencil, Duplicate, Trash } from '@strapi/icons';
          import { IconButton, IconButtonGroup } from '@strapi/design-system';
          
          <IconButtonGroup>
            <IconButton label="Edit">
              <Pencil />
            </IconButton>
            <IconButton label="Clone">
              <Duplicate />
            </IconButton>
            <IconButton label="Delete" variant="danger">
              <Trash />
            </IconButton>
          <IconButtonGroup>\`
      }
    }
  },
  name: 'group'
}`,...(O=(G=i.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};const V=["Base","Disabled","SizeMedium","SizeLarge","AllVariants","Group"],X=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:c,Base:t,Disabled:s,Group:i,SizeLarge:a,SizeMedium:n,__namedExportsOrder:V,default:R},Symbol.toStringTag,{value:"Module"}));export{c as A,t as B,s as D,i as G,X as I,n as S,a};
