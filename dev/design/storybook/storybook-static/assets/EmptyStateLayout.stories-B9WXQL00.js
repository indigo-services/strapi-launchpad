import{r as j,j as t,F as L,c as n,T as C,p as I,s as f,K as h}from"./iframe-_cKE9r89.js";import{d as i}from"./index-BxBVU389.js";import{B as v}from"./Button-BvqyPouE.js";const R=I(n)`
  svg {
    height: 8.8rem;
  }
`,r=j.forwardRef(({icon:s,content:b,action:B,hasRadius:q=!0,shadow:S="tableShadow"},E)=>t.jsxs(L,{ref:E,alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:q,shadow:S,children:[s?t.jsx(R,{paddingBottom:6,"aria-hidden":!0,children:s}):null,t.jsx(n,{paddingBottom:4,children:t.jsx(C,{variant:"delta",tag:"p",textAlign:"center",textColor:"neutral600",children:b})}),B]}));r.__docgenInfo={description:"",methods:[],displayName:"EmptyStateLayout",props:{action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},content:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hasRadius:{defaultValue:{value:"true",computed:!1},required:!1},shadow:{defaultValue:{value:"'tableShadow'",computed:!1},required:!1}},composes:["Pick"]};const w={title:"Components/EmptyStateLayout",component:r},e={render:()=>t.jsx(n,{padding:8,background:"neutral100",children:t.jsx(r,{icon:t.jsx(h,{}),content:"You don't have any content yet...",action:t.jsx(v,{variant:"secondary",startIcon:t.jsx(f,{}),children:"Create your first content-type"})})}),parameters:{docs:{source:{code:i`
          <EmptyStateLayout
            icon={<Cross />}
            content="You don't have any content yet..."
            action={
              <Button variant="secondary" startIcon={<Plus />}>
                Create your first content-type
              </Button>
            }
          />
        `}}},name:"base"},o={render:()=>t.jsx(n,{padding:8,background:"neutral100",children:t.jsx(r,{content:"You don't have any content yet..."})}),parameters:{docs:{source:{code:i`
          <EmptyStateLayout content="You don't have any content yet..." />
        `}}},name:"without action"},a={render:()=>t.jsx(n,{padding:8,background:"neutral100",children:t.jsx(r,{icon:t.jsx(h,{}),content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",action:t.jsx(v,{variant:"secondary",startIcon:t.jsx(f,{}),children:"Create your first content-type"})})}),parameters:{docs:{source:{code:i`
          <EmptyStateLayout
            icon={<Cross />}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            action={
              <Button variant="secondary" startIcon={<Plus />}>
                Create your first content-type
              </Button>
            }
          />
        `}}},name:"with large text"};var u,c,d;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Box padding={8} background="neutral100">\r
      <EmptyStateLayout icon={<Cross />} content="You don't have any content yet..." action={<Button variant="secondary" startIcon={<Plus />}>\r
            Create your first content-type\r
          </Button>} />\r
    </Box>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <EmptyStateLayout
            icon={<Cross />}
            content="You don't have any content yet..."
            action={
              <Button variant="secondary" startIcon={<Plus />}>
                Create your first content-type
              </Button>
            }
          />
        \`
      }
    }
  },
  name: 'base'
} satisfies Story`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Box padding={8} background="neutral100">\r
      <EmptyStateLayout content="You don't have any content yet..." />\r
    </Box>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <EmptyStateLayout content="You don't have any content yet..." />
        \`
      }
    }
  },
  name: 'without action'
} satisfies Story`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var y,x,g;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Box padding={8} background="neutral100">\r
      <EmptyStateLayout icon={<Cross />} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." action={<Button variant="secondary" startIcon={<Plus />}>\r
            Create your first content-type\r
          </Button>} />\r
    </Box>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <EmptyStateLayout
            icon={<Cross />}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            action={
              <Button variant="secondary" startIcon={<Plus />}>
                Create your first content-type
              </Button>
            }
          />
        \`
      }
    }
  },
  name: 'with large text'
} satisfies Story`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const k=["Base","WithoutAction","WithLargeText"],_=Object.freeze(Object.defineProperty({__proto__:null,Base:e,WithLargeText:a,WithoutAction:o,__namedExportsOrder:k,default:w},Symbol.toStringTag,{value:"Module"}));export{e as B,_ as E,o as W,a,r as b};
