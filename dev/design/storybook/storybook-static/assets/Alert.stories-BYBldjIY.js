import{j as e,F as c,T as p,K as B,p as h,E as S,aA as I,U as q,ao as F,c as o,Q as W}from"./iframe-_cKE9r89.js";import{d as m}from"./index-BxBVU389.js";import{A as _}from"./AccessibleIcon-CYyZOlqW.js";const L=t=>{switch(t){case"danger":return"danger100";case"success":return"success100";case"warning":return"warning100";default:return"primary100"}},N=t=>L(t).replace("100","200"),u=({theme:t,$variant:r})=>r==="danger"?t.colors.danger700:r==="success"?t.colors.success700:r==="warning"?t.colors.warning700:t.colors.primary700,E=h(o)`
  ${F};
`,V=h(c)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${u};
    }
  }
`,O=({variant:t,...r})=>t==="success"?e.jsx(S,{...r}):t==="danger"||t==="warning"?e.jsx(I,{...r}):e.jsx(q,{...r}),$=h(o)`
  & a > span {
    color: ${u};
  }

  svg path {
    fill: ${u};
  }
`,s=({title:t,children:r,variant:n="default",onClose:y,closeLabel:j,titleAs:R="p",action:d,...k})=>e.jsxs(c,{alignItems:"flex-start",background:L(n),borderColor:N(n),shadow:"filterShadow",gap:3,hasRadius:!0,padding:5,paddingRight:6,...k,children:[e.jsx(V,{height:"2rem",shrink:0,$variant:n,width:"2rem",children:e.jsx(O,{"aria-hidden":!0,variant:n})}),e.jsxs(c,{alignItems:"start",gap:d?2:1,wrap:"wrap",role:n==="danger"?"alert":"status",width:"100%",children:[t&&e.jsx(p,{fontWeight:"bold",textColor:"neutral800",tag:R,children:t}),e.jsx(p,{tag:"p",textColor:"neutral800",children:r}),d&&e.jsx($,{$variant:n,children:d})]}),e.jsx(E,{tag:"button",background:"transparent",borderColor:void 0,height:"1.6rem",width:"1.6rem",marginTop:1,onClick:y,color:"neutral700",children:e.jsx(_,{label:j,children:e.jsx(B,{})})})]});s.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Render a React element below the body of an `Alert` (Mainly used to render a Link)."},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The body of the `Alert` (Will be rendered under the `Alert` title)."},closeLabel:{required:!0,tsType:{name:"string"},description:"Accessible label for the close icon button."},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"The callback invoked when click on the close icon button."},title:{required:!1,tsType:{name:"string"},description:"The title of the `Alert`."},titleAs:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Changes the element, as which a component will render (similar to styled-components).",defaultValue:{value:"'p'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'success' | 'danger' | 'default' | 'warning'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'default'"},{name:"literal",value:"'warning'"}]},description:"`Alert` color variant.",defaultValue:{value:"'default'",computed:!1}}}};const P={title:"Components/Alert",component:s},a={render:()=>e.jsx(o,{style:{width:700},children:e.jsx(s,{closeLabel:"Close alert",title:"Title",children:"This is the default alert."})}),parameters:{docs:{source:{code:m`
        <Alert closeLabel="Close alert" title="Title">
          This is the default alert.
        </Alert>
        `}}},name:"base"},i={render:()=>e.jsx(o,{style:{width:700},children:e.jsxs(c,{direction:"column",alignItems:"center",gap:1,children:[e.jsx(s,{closeLabel:"Close",title:"Title",children:"This is the default variant."}),e.jsx(s,{closeLabel:"Close",title:"Title",variant:"success",children:"This is the success variant."}),e.jsx(s,{closeLabel:"Close",title:"Title",variant:"danger",children:"This is the danger variant."}),e.jsx(s,{closeLabel:"Close",title:"Title",variant:"warning",children:"This is the warning variant."})]})}),parameters:{docs:{source:{code:m`
        <Flex direction="column" alignItems="center" gap={1}>
          <Alert closeLabel="Close" title="Title">
            This is the default variant.
          </Alert>
          <Alert closeLabel="Close" title="Title" variant="success">
            This is the success variant.
          </Alert>
          <Alert closeLabel="Close" title="Title" variant="danger">
            This is the danger variant.
          </Alert>
          <Alert closeLabel="Close" title="Title" variant="warning">
            This is the warning variant.
          </Alert>
        </Flex>
        `}}},name:"variants"},l={render:()=>e.jsx(o,{style:{width:700},children:e.jsx(s,{closeLabel:"Close",title:"This is the title of the alert",action:e.jsx(W,{href:"/somewhere",children:"See more"}),children:"Alert with title and longer description, lorem ipsum dolor sit amet constrectum adipisicng lorem ipsum dolor sit amet consrectumis adipisingus."})}),parameters:{docs:{source:{code:m`
        <Alert closeLabel="Close" title="This is the title of the alert" action={<Link href="/somewhere">See more</Link>}>
          Alert with title and longer description, lorem ipsum dolor sit amet constrectum adipisicng lorem ipsum dolor sit
          amet consrectumis adipisingus.
        </Alert>
        `}}},name:"with action"};var g,f,T;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Box style={{
    width: 700
  }}>\r
      <Alert closeLabel="Close alert" title="Title">\r
        This is the default alert.\r
      </Alert>\r
    </Box>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Alert closeLabel="Close alert" title="Title">
          This is the default alert.
        </Alert>
        \`
      }
    }
  },
  name: 'base'
} satisfies Story`,...(T=(f=a.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var A,w,b;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Box style={{
    width: 700
  }}>\r
      <Flex direction="column" alignItems="center" gap={1}>\r
        <Alert closeLabel="Close" title="Title">\r
          This is the default variant.\r
        </Alert>\r
        <Alert closeLabel="Close" title="Title" variant="success">\r
          This is the success variant.\r
        </Alert>\r
        <Alert closeLabel="Close" title="Title" variant="danger">\r
          This is the danger variant.\r
        </Alert>\r
        <Alert closeLabel="Close" title="Title" variant="warning">\r
          This is the warning variant.\r
        </Alert>\r
      </Flex>\r
    </Box>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Flex direction="column" alignItems="center" gap={1}>
          <Alert closeLabel="Close" title="Title">
            This is the default variant.
          </Alert>
          <Alert closeLabel="Close" title="Title" variant="success">
            This is the success variant.
          </Alert>
          <Alert closeLabel="Close" title="Title" variant="danger">
            This is the danger variant.
          </Alert>
          <Alert closeLabel="Close" title="Title" variant="warning">
            This is the warning variant.
          </Alert>
        </Flex>
        \`
      }
    }
  },
  name: 'variants'
} satisfies Story`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var x,C,v;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Box style={{
    width: 700
  }}>\r
      <Alert closeLabel="Close" title="This is the title of the alert" action={<Link href="/somewhere">See more</Link>}>\r
        Alert with title and longer description, lorem ipsum dolor sit amet constrectum adipisicng lorem ipsum dolor sit\r
        amet consrectumis adipisingus.\r
      </Alert>\r
    </Box>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Alert closeLabel="Close" title="This is the title of the alert" action={<Link href="/somewhere">See more</Link>}>
          Alert with title and longer description, lorem ipsum dolor sit amet constrectum adipisicng lorem ipsum dolor sit
          amet consrectumis adipisingus.
        </Alert>
        \`
      }
    }
  },
  name: 'with action'
} satisfies Story`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const M=["Base","Variants","WithAction"],U=Object.freeze(Object.defineProperty({__proto__:null,Base:a,Variants:i,WithAction:l,__namedExportsOrder:M,default:P},Symbol.toStringTag,{value:"Module"}));export{U as A,a as B,i as V,l as W,s as a};
