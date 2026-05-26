import{j as a}from"./iframe-_cKE9r89.js";import{d as c}from"./index-BxBVU389.js";import{I as e,G as L}from"./Avatar-CJl94LmM.js";const j={title:"Components/Avatar",component:e,parameters:{chromatic:{disableSnapshot:!1}}},r={render:()=>a.jsx(e,{src:"/stories/avatar/ted-lasso.jpeg",alt:"Ted Lasso",fallback:"TL"}),parameters:{docs:{source:{code:c`<Avatar.Item src="/stories/avatar/ted-lasso.jpeg" alt="Ted Lasso" fallback="TL" />`}}},name:"base"},s={render:()=>a.jsx(e,{src:"/stories/avatar/ted-lasso.jpeg",alt:"Ted Lasso",fallback:"TL",preview:!0}),parameters:{docs:{source:{code:c`<Avatar.Item src="/stories/avatar/ted-lasso.jpeg" alt="Ted Lasso" fallback="TL" preview />`}}},name:"with preview"},t={render:()=>a.jsx(e,{fallback:"TL",delayMs:0}),parameters:{docs:{source:{code:c`<Avatar.Item fallback="TL" delayMs={0} />`}}},name:"fallback"},o={render:()=>a.jsxs(L,{children:[a.jsx(e,{src:"/stories/avatar/ted-lasso.jpeg",alt:"Ted Lasso",fallback:"TL",preview:!0}),a.jsx(e,{src:"/stories/avatar/roy-kent.jpeg",alt:"Roy Kent",fallback:"RK",preview:!0}),a.jsx(e,{fallback:"CB",preview:!0})]}),parameters:{docs:{source:{code:c`
        <Avatar.Group>
          <Avatar.Item src="/stories/avatar/ted-lasso.jpeg" alt="Ted Lasso" fallback="TL" preview />
          <Avatar.Item src="/stories/avatar/roy-kent.jpeg" alt="Roy Kent" fallback="RK" preview />
          <Avatar.Item fallback="CB" preview />
        </Avatar.Group>
        `}}},name:"group"};var l,n,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Avatar.Item src="/stories/avatar/ted-lasso.jpeg" alt="Ted Lasso" fallback="TL" />,
  parameters: {
    docs: {
      source: {
        code: outdent\`<Avatar.Item src="/stories/avatar/ted-lasso.jpeg" alt="Ted Lasso" fallback="TL" />\`
      }
    }
  },
  name: 'base'
} satisfies Story`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var d,i,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Avatar.Item src="/stories/avatar/ted-lasso.jpeg" alt="Ted Lasso" fallback="TL" preview />,
  parameters: {
    docs: {
      source: {
        code: outdent\`<Avatar.Item src="/stories/avatar/ted-lasso.jpeg" alt="Ted Lasso" fallback="TL" preview />\`
      }
    }
  },
  name: 'with preview'
} satisfies Story`,...(m=(i=s.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var v,u,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Avatar.Item fallback="TL" delayMs={0} />,
  parameters: {
    docs: {
      source: {
        code: outdent\`<Avatar.Item fallback="TL" delayMs={0} />\`
      }
    }
  },
  name: 'fallback'
} satisfies Story`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var b,k,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Avatar.Group>\r
      <Avatar.Item src="/stories/avatar/ted-lasso.jpeg" alt="Ted Lasso" fallback="TL" preview />\r
      <Avatar.Item src="/stories/avatar/roy-kent.jpeg" alt="Roy Kent" fallback="RK" preview />\r
      <Avatar.Item fallback="CB" preview />\r
    </Avatar.Group>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Avatar.Group>
          <Avatar.Item src="/stories/avatar/ted-lasso.jpeg" alt="Ted Lasso" fallback="TL" preview />
          <Avatar.Item src="/stories/avatar/roy-kent.jpeg" alt="Roy Kent" fallback="RK" preview />
          <Avatar.Item fallback="CB" preview />
        </Avatar.Group>
        \`
      }
    }
  },
  name: 'group'
} satisfies Story`,...(T=(k=o.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};const A=["Base","WithPreview","Fallback","Group"],y=Object.freeze(Object.defineProperty({__proto__:null,Base:r,Fallback:t,Group:o,WithPreview:s,__namedExportsOrder:A,default:j},Symbol.toStringTag,{value:"Module"}));export{y as A,r as B,t as F,o as G,s as W};
