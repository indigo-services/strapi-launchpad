import{r as d,j as e,T as l}from"./iframe-_cKE9r89.js";import{d as p}from"./index-BxBVU389.js";import{P as o}from"./Portal-DW4SEpes.js";const u={title:"Utilities/Portal",component:o},r={render:()=>{const[s,i]=d.useState(null);return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:c=>i(c)}),e.jsx(o,{container:s,children:e.jsx("aside",{children:e.jsx(l,{children:"This is rendered outside the root react app"})})})]})},parameters:{docs:{source:{code:p`
          const [container, setContainer] = React.useState<HTMLDivElement | null>(null);
          
          <div ref={(ref) => setContainer(ref!)} />
          <Portal container={container}>
            <aside>
              <Typography>This is rendered outside the root react app</Typography>
            </aside>
          </Portal>
        `}}},name:"base"};var t,n,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const [container, setContainer] = React.useState<HTMLDivElement | null>(null);
    return <>\r
        <div ref={ref => setContainer(ref!)} />\r
        <Portal container={container}>\r
          <aside>\r
            <Typography>This is rendered outside the root react app</Typography>\r
          </aside>\r
        </Portal>\r
      </>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          const [container, setContainer] = React.useState<HTMLDivElement | null>(null);
          
          <div ref={(ref) => setContainer(ref!)} />
          <Portal container={container}>
            <aside>
              <Typography>This is rendered outside the root react app</Typography>
            </aside>
          </Portal>
        \`
      }
    }
  },
  name: 'base'
} satisfies Story`,...(a=(n=r.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const m=["Base"],T=Object.freeze(Object.defineProperty({__proto__:null,Base:r,__namedExportsOrder:m,default:u},Symbol.toStringTag,{value:"Module"}));export{r as B,T as P};
