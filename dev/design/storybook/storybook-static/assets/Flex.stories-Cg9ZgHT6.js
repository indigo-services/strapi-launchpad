import{F as l,j as e,c as a,T as o}from"./iframe-_cKE9r89.js";import{d as n}from"./index-BxBVU389.js";const d={title:"Components/Flex",component:l},r={render:()=>e.jsxs(l,{gap:{initial:1,medium:4,large:8},direction:{initial:"column",medium:"row"},alignItems:{initial:"center",medium:"flex-start"},children:[e.jsx(a,{background:"primary600",padding:1,hasRadius:!0,children:e.jsx(o,{textColor:"neutral0",children:"Hello"})}),e.jsx(a,{background:"success600",padding:1,hasRadius:!0,children:e.jsx(o,{textColor:"neutral0",children:"World"})})]}),parameters:{docs:{source:{code:n`
        <Flex
          gap={{ initial: 1, medium: 4, large: 8 }}
          direction={{ initial: 'column', medium: 'row' }}
          alignItems={{ initial: 'center', medium: 'flex-start' }}
        >
          <Box background="primary600" padding={1} hasRadius>
            <Typography textColor="neutral0">Hello</Typography>
          </Box>
          <Box background="success600" padding={1} hasRadius>
            <Typography textColor="neutral0">World</Typography>
          </Box>
        </Flex>
        `}}},name:"base"};var i,t,s;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Flex gap={{
    initial: 1,
    medium: 4,
    large: 8
  }} direction={{
    initial: 'column',
    medium: 'row'
  }} alignItems={{
    initial: 'center',
    medium: 'flex-start'
  }}>\r
      <Box background="primary600" padding={1} hasRadius>\r
        <Typography textColor="neutral0">Hello</Typography>\r
      </Box>\r
      <Box background="success600" padding={1} hasRadius>\r
        <Typography textColor="neutral0">World</Typography>\r
      </Box>\r
    </Flex>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Flex
          gap={{ initial: 1, medium: 4, large: 8 }}
          direction={{ initial: 'column', medium: 'row' }}
          alignItems={{ initial: 'center', medium: 'flex-start' }}
        >
          <Box background="primary600" padding={1} hasRadius>
            <Typography textColor="neutral0">Hello</Typography>
          </Box>
          <Box background="success600" padding={1} hasRadius>
            <Typography textColor="neutral0">World</Typography>
          </Box>
        </Flex>
        \`
      }
    }
  },
  name: 'base'
} satisfies Story`,...(s=(t=r.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const u=["Base"],c=Object.freeze(Object.defineProperty({__proto__:null,Base:r,__namedExportsOrder:u,default:d},Symbol.toStringTag,{value:"Module"}));export{r as B,c as F};
