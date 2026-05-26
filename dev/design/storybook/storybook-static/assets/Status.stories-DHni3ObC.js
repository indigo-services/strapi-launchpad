import{j as e,c as C,F as i,T as r}from"./iframe-_cKE9r89.js";import{d as l}from"./index-BxBVU389.js";const X=a=>a==="XS"?{paddingX:"0.6rem",paddingY:"0.2rem"}:a==="S"?{paddingX:2,paddingY:1}:{paddingX:5,paddingY:4},t=({variant:a="primary",size:v="M",children:T,...b})=>{const j=`${a}100`,z=`${a}200`,W=`${a}600`,{paddingX:d,paddingY:c}=X(v);return e.jsx(C,{borderColor:z,color:W,background:j,hasRadius:!0,paddingTop:c,paddingBottom:c,paddingLeft:d,paddingRight:d,...b,children:T})};t.__docgenInfo={description:"",methods:[],displayName:"Status",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'alternative' | 'danger' | 'neutral' | 'primary' | 'secondary' | 'success' | 'warning'",elements:[{name:"literal",value:"'alternative'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'XS' | 'S' | 'M'",elements:[{name:"literal",value:"'XS'"},{name:"literal",value:"'S'"},{name:"literal",value:"'M'"}]},description:"",defaultValue:{value:"'M'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const w={title:"Components/Status",component:t},n={render:()=>e.jsxs(i,{direction:"column",alignItems:"stretch",gap:3,children:[e.jsx(t,{variant:"success",children:e.jsxs(r,{children:["Hello world",e.jsx(r,{fontWeight:"bold",children:"thing happens"})]})}),e.jsx(t,{variant:"secondary",children:e.jsxs(r,{children:["Hello world",e.jsx(r,{fontWeight:"bold",children:"thing happens"})]})})]}),parameters:{docs:{source:{code:l`
            <Status variant="success">
              <Typography>
                Hello world<Typography fontWeight="bold">thing happens</Typography>
              </Typography>
            </Status>
        `}}},name:"base"},s={render:()=>e.jsxs(i,{direction:"column",alignItems:"stretch",gap:3,children:[e.jsx(t,{variant:"success",size:"S",children:e.jsx(r,{fontWeight:"bold",textColor:"success700",children:"Published"})}),e.jsx(t,{variant:"secondary",size:"S",children:e.jsx(r,{fontWeight:"bold",textColor:"secondary700",children:"Draft"})}),e.jsx(t,{variant:"alternative",size:"S",children:e.jsx(r,{fontWeight:"bold",textColor:"alternative700",children:"Updated"})})]}),parameters:{docs:{source:{code:l`
        <Status variant="success" size="S">
          <Typography fontWeight="bold" textColor="success700">
            Published
          </Typography>
        </Status>
        `}}},name:"size S"},o={render:()=>e.jsxs(i,{direction:"column",alignItems:"stretch",gap:3,children:[e.jsx(t,{variant:"success",size:"XS",children:e.jsx(r,{fontWeight:"bold",textColor:"success700",children:"Published"})}),e.jsx(t,{variant:"secondary",size:"XS",children:e.jsx(r,{fontWeight:"bold",textColor:"secondary700",children:"Draft"})}),e.jsx(t,{variant:"alternative",size:"XS",children:e.jsx(r,{fontWeight:"bold",textColor:"alternative700",children:"Updated"})})]}),parameters:{docs:{source:{code:l`
        <Status variant="success" size="XS">
          <Typography fontWeight="bold" textColor="success700">
            Published
          </Typography>
        </Status>
        `}}},name:"size XS"};var p,u,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex direction="column" alignItems="stretch" gap={3}>\r
      <Status variant="success">\r
        <Typography>\r
          Hello world<Typography fontWeight="bold">thing happens</Typography>\r
        </Typography>\r
      </Status>\r
      <Status variant="secondary">\r
        <Typography>\r
          Hello world<Typography fontWeight="bold">thing happens</Typography>\r
        </Typography>\r
      </Status>\r
    </Flex>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
            <Status variant="success">
              <Typography>
                Hello world<Typography fontWeight="bold">thing happens</Typography>
              </Typography>
            </Status>
        \`
      }
    }
  },
  name: 'base'
} satisfies Story`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,y,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Flex direction="column" alignItems="stretch" gap={3}>\r
      <Status variant="success" size="S">\r
        <Typography fontWeight="bold" textColor="success700">\r
          Published\r
        </Typography>\r
      </Status>\r
      <Status variant="secondary" size="S">\r
        <Typography fontWeight="bold" textColor="secondary700">\r
          Draft\r
        </Typography>\r
      </Status>\r
      <Status variant="alternative" size="S">\r
        <Typography fontWeight="bold" textColor="alternative700">\r
          Updated\r
        </Typography>\r
      </Status>\r
    </Flex>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Status variant="success" size="S">
          <Typography fontWeight="bold" textColor="success700">
            Published
          </Typography>
        </Status>
        \`
      }
    }
  },
  name: 'size S'
} satisfies Story`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var m,f,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Flex direction="column" alignItems="stretch" gap={3}>\r
      <Status variant="success" size="XS">\r
        <Typography fontWeight="bold" textColor="success700">\r
          Published\r
        </Typography>\r
      </Status>\r
      <Status variant="secondary" size="XS">\r
        <Typography fontWeight="bold" textColor="secondary700">\r
          Draft\r
        </Typography>\r
      </Status>\r
      <Status variant="alternative" size="XS">\r
        <Typography fontWeight="bold" textColor="alternative700">\r
          Updated\r
        </Typography>\r
      </Status>\r
    </Flex>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Status variant="success" size="XS">
          <Typography fontWeight="bold" textColor="success700">
            Published
          </Typography>
        </Status>
        \`
      }
    }
  },
  name: 'size XS'
} satisfies Story`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const P=["Base","SizeS","SizeXS"],_=Object.freeze(Object.defineProperty({__proto__:null,Base:n,SizeS:s,SizeXS:o,__namedExportsOrder:P,default:w},Symbol.toStringTag,{value:"Module"}));export{n as B,_ as S,s as a,o as b,t as c};
