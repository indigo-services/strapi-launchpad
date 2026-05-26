import{j as r,F as o}from"./iframe-_cKE9r89.js";import{d as n}from"./index-BxBVU389.js";import{B as t}from"./Badge-D-JmP-9P.js";const f={title:"Components/Badge",component:t,args:{textColor:"neutral600",backgroundColor:"neutral150"},render:S=>r.jsx(o,{direction:"column",alignItems:"center",gap:2,children:r.jsx(o,{gap:1,children:r.jsx(t,{...S,children:"Badge"})})})},e={name:"base",parameters:{docs:{source:{code:n`
        <Badge>Badge</Badge>
        `}}}},a={args:{active:!0},parameters:{docs:{source:{code:n`
        <Badge active>Badge</Badge>
        `}}},name:"active"},s={args:{size:"S"},parameters:{docs:{source:{code:n`
        <Badge size="S">Badge</Badge>
        `}}},name:"small size"};var c,d,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'base',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Badge>Badge</Badge>
        \`
      }
    }
  }
} satisfies Story`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,g,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    active: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Badge active>Badge</Badge>
        \`
      }
    }
  },
  name: 'active'
} satisfies Story`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var p,l,B;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'S'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Badge size="S">Badge</Badge>
        \`
      }
    }
  },
  name: 'small size'
} satisfies Story`,...(B=(l=s.parameters)==null?void 0:l.docs)==null?void 0:B.source}}};const v=["Base","Active","SizeSmall"],b=Object.freeze(Object.defineProperty({__proto__:null,Active:a,Base:e,SizeSmall:s,__namedExportsOrder:v,default:f},Symbol.toStringTag,{value:"Module"}));export{a as A,b as B,s as S,e as a};
