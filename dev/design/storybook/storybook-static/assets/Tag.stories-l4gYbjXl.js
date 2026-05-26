import{j as e,U as f,K as T}from"./iframe-_cKE9r89.js";import{d as s}from"./index-BxBVU389.js";import{T as n}from"./Tag-CF1ZNRdL.js";const b={title:"Components/Tag",component:n},r={render:()=>e.jsx(n,{icon:e.jsx(f,{"aria-hidden":!0}),children:"Hello world"}),name:"base",parameters:{docs:{source:{code:s`
        <Tag icon={<Information aria-hidden />}>Hello world</Tag>
        `}}}},o={render:()=>e.jsx(n,{icon:e.jsx(f,{"aria-hidden":!0}),disabled:!0,children:"Hello world"}),parameters:{docs:{source:{code:s`
        <Tag icon={<Information aria-hidden />} disabled>
          Hello world
        </Tag>
        `}}},name:"disabled"},a={render:()=>e.jsx(n,{label:"remove filter",icon:e.jsx(T,{"aria-hidden":!0}),onClick:()=>console.log("filter removed"),children:"date is null"}),parameters:{docs:{source:{code:s`
        <Tag label="remove filter" icon={<Cross aria-hidden />} onClick={() => console.log('filter removed')}>
          date is null
        </Tag>
        `}}},name:"filter"};var d,i,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Tag icon={<Information aria-hidden />}>Hello world</Tag>,
  name: 'base',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Tag icon={<Information aria-hidden />}>Hello world</Tag>
        \`
      }
    }
  }
} satisfies Story`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var t,c,m;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Tag icon={<Information aria-hidden />} disabled>\r
      Hello world\r
    </Tag>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Tag icon={<Information aria-hidden />} disabled>
          Hello world
        </Tag>
        \`
      }
    }
  },
  name: 'disabled'
} satisfies Story`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,g,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Tag label="remove filter" icon={<Cross aria-hidden />} onClick={() => console.log('filter removed')}>\r
      date is null\r
    </Tag>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Tag label="remove filter" icon={<Cross aria-hidden />} onClick={() => console.log('filter removed')}>
          date is null
        </Tag>
        \`
      }
    }
  },
  name: 'filter'
} satisfies Story`,...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const h=["Base","Disabled","Filter"],C=Object.freeze(Object.defineProperty({__proto__:null,Base:r,Disabled:o,Filter:a,__namedExportsOrder:h,default:b},Symbol.toStringTag,{value:"Module"}));export{r as B,o as D,a as F,C as T};
