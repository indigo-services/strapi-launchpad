import{Q as s,j as e,F as i}from"./iframe-_cKE9r89.js";import{p as o}from"./symbols-index-Cg3vSd_0.js";import{d as a}from"./index-BxBVU389.js";const f={title:"Components/Link",component:s},r={render:()=>e.jsx(i,{direction:"column",alignItems:"stretch",gap:5,children:e.jsx(s,{isExternal:!0,href:"https://strapi.io/",children:"External link"})}),parameters:{docs:{source:{code:a`
          <Link isExternal href="https://strapi.io/">
            External link
          </Link>
        `}}},name:"base"},n={render:()=>e.jsx(i,{direction:"column",alignItems:"stretch",gap:5,children:e.jsx(s,{isExternal:!0,href:"https://strapi.io/",disabled:!0,children:"Disabled link"})}),parameters:{docs:{source:{code:a`
          <Link isExternal href="https://strapi.io/" disabled>
            Disabled link
          </Link>
        `}}},name:"disabled"},t={render:()=>e.jsxs(i,{direction:"column",alignItems:"stretch",gap:5,children:[e.jsx("div",{children:e.jsx(s,{isExternal:!0,href:"https://strapi.io/",startIcon:e.jsx(o,{}),children:"Strapi"})}),e.jsx("div",{children:e.jsx(s,{isExternal:!0,href:"https://strapi.io/",endIcon:e.jsx(o,{}),children:"Strapi"})})]}),parameters:{docs:{source:{code:a`
          <Link isExternal href="https://strapi.io/" startIcon={<Strapi />}>
            Strapi
          </Link>
        `}}},name:"icons"};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Flex direction="column" alignItems="stretch" gap={5}>\r
      <Link isExternal href="https://strapi.io/">\r
        External link\r
      </Link>\r
    </Flex>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Link isExternal href="https://strapi.io/">
            External link
          </Link>
        \`
      }
    }
  },
  name: 'base'
} satisfies Story`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex direction="column" alignItems="stretch" gap={5}>\r
      <Link isExternal href="https://strapi.io/" disabled>\r
        Disabled link\r
      </Link>\r
    </Flex>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Link isExternal href="https://strapi.io/" disabled>
            Disabled link
          </Link>
        \`
      }
    }
  },
  name: 'disabled'
} satisfies Story`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var x,u,k;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Flex direction="column" alignItems="stretch" gap={5}>\r
      <div>\r
        <Link isExternal href="https://strapi.io/" startIcon={<Strapi />}>\r
          Strapi\r
        </Link>\r
      </div>\r
      <div>\r
        <Link isExternal href="https://strapi.io/" endIcon={<Strapi />}>\r
          Strapi\r
        </Link>\r
      </div>\r
    </Flex>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Link isExternal href="https://strapi.io/" startIcon={<Strapi />}>
            Strapi
          </Link>
        \`
      }
    }
  },
  name: 'icons'
} satisfies Story`,...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};const L=["Base","Disabled","Icons"],g=Object.freeze(Object.defineProperty({__proto__:null,Base:r,Disabled:n,Icons:t,__namedExportsOrder:L,default:f},Symbol.toStringTag,{value:"Module"}));export{r as B,n as D,t as I,g as L};
