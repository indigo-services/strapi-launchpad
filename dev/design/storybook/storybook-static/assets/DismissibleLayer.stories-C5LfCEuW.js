import{r as l,j as e,F as c,T as p}from"./iframe-_cKE9r89.js";import{D as t}from"./index-C8px2K5Y.js";import{d}from"./index-BxBVU389.js";import{B as b}from"./Button-BvqyPouE.js";const y={title:"Utilities/DismissibleLayer",component:t},s={render:()=>{const[a,i]=l.useState(!1);return e.jsxs(c,{direction:"column",gap:4,children:[e.jsx(b,{onClick:()=>i(!0),children:"Show DismissibleLayer"}),a&&e.jsx(t,{onEscapeKeyDown:()=>i(!1),onPointerDownOutside:()=>i(!1),children:e.jsx(p,{style:{backgroundColor:"#ccc",padding:"20px",display:"block"},children:"press escape or click outside to dismiss"})})]})},parameters:{docs:{source:{code:d`
          const [isVisible, setIsVisible] = React.useState(true);
          
          return isVisible ? (
            <DismissibleLayer
              onEscapeKeyDown={() => setIsVisible(false)}
              onPointerDownOutside={() => setIsVisible(false)}
            >
              <Typography
                style={{
                  backgroundColor: '#ccc',
                  padding: '20px',
                  display: 'block',
                }}
              >
                press escape or click outside to dismiss
              </Typography>
            </DismissibleLayer>
          ) : ( <></> );
        `}}},name:"base"};var n,o,r;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => {
    const [isVisible, setIsVisible] = React.useState(false);
    return <Flex direction="column" gap={4}>\r
        <Button onClick={() => setIsVisible(true)}>Show DismissibleLayer</Button>\r
        {isVisible && <DismissibleLayer onEscapeKeyDown={() => setIsVisible(false)} onPointerDownOutside={() => setIsVisible(false)}>\r
            <Typography style={{
          backgroundColor: '#ccc',
          padding: '20px',
          display: 'block'
        }}>\r
              press escape or click outside to dismiss\r
            </Typography>\r
          </DismissibleLayer>}\r
      </Flex>;
    return isVisible ? <DismissibleLayer onEscapeKeyDown={() => setIsVisible(false)} onPointerDownOutside={() => setIsVisible(false)}>\r
        <Typography style={{
        backgroundColor: '#ccc',
        padding: '20px',
        display: 'block'
      }}>\r
          press escape or click outside to dismiss\r
        </Typography>\r
      </DismissibleLayer> : <></>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          const [isVisible, setIsVisible] = React.useState(true);
          
          return isVisible ? (
            <DismissibleLayer
              onEscapeKeyDown={() => setIsVisible(false)}
              onPointerDownOutside={() => setIsVisible(false)}
            >
              <Typography
                style={{
                  backgroundColor: '#ccc',
                  padding: '20px',
                  display: 'block',
                }}
              >
                press escape or click outside to dismiss
              </Typography>
            </DismissibleLayer>
          ) : ( <></> );
        \`
      }
    }
  },
  name: 'base'
} satisfies Story`,...(r=(o=s.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const u=["Base"],V=Object.freeze(Object.defineProperty({__proto__:null,Base:s,__namedExportsOrder:u,default:y},Symbol.toStringTag,{value:"Module"}));export{s as B,V as D};
