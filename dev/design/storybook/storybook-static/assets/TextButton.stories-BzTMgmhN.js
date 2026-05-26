import{f as _,j as a,R as D,T as E,ao as L,p as k,i as O,F as W,ap as A,aq as $}from"./iframe-_cKE9r89.js";import{d as i}from"./index-BxBVU389.js";const j=_(({children:e,startIcon:I,endIcon:R,disabled:P=!1,loading:l=!1,type:h="button",...q},N)=>{const u=P||l;return a.jsxs(M,{ref:N,disabled:u,"aria-disabled":u,tag:"button",type:h,gap:2,...q,children:[l?a.jsx(F,{"aria-hidden":!0,children:a.jsx(D,{})}):I,a.jsx(E,{variant:"pi",children:e}),R]})}),V=O`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,F=k.span`
  display: flex;
  animation: ${V} 2s infinite linear;
  will-change: transform;
`,M=k(W)`
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.primary600};
  cursor: pointer;

  &[aria-disabled='true'] {
    pointer-events: none;
    color: ${e=>e.theme.colors.neutral600};
  }

  ${L}
`;j.__docgenInfo={description:"",methods:[],displayName:"TextButton",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['alignItems']",raw:"CSSProperties['alignItems']"}}]}},{name:"CSSProperties['alignItems']",raw:"CSSProperties['alignItems']"}]},description:""},justifyContent:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['justifyContent']",raw:"CSSProperties['justifyContent']"}}]}},{name:"CSSProperties['justifyContent']",raw:"CSSProperties['justifyContent']"}]},description:""},wrap:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexWrap']",raw:"CSSProperties['flexWrap']"}}]}},{name:"CSSProperties['flexWrap']",raw:"CSSProperties['flexWrap']"}]},description:""},direction:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}}]}},{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}]},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}}}};const{fn:U}=__STORYBOOK_MODULE_TEST__,z={title:"Components/TextButton",args:{children:"Next page",disabled:!1,loading:!1,onClick:U()},render:e=>a.jsx(j,{...e}),parameters:{docs:{source:{code:i`
          <TextButton>Next page</TextButton>
        `}}}},t={name:"base"},n={name:"disabled",args:{disabled:!0},parameters:{docs:{source:{code:i`
          <TextButton disabled>Next page</TextButton>
        `}}}},r={name:"loading",args:{loading:!0},parameters:{docs:{source:{code:i`
          <TextButton loading>Next page</TextButton>
        `}}}},s={args:{startIcon:a.jsx(A,{})},parameters:{docs:{source:{code:i`
          <TextButton startIcon={<ArrowLeft />}>Next page</TextButton>
        `}}},name:"with start icon"},o={args:{endIcon:a.jsx($,{})},parameters:{docs:{source:{code:i`
          <TextButton endIcon={<ArrowRight />}>Next page</TextButton>
        `}}},name:"with end icon"};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'base'
} satisfies Story`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,f,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'disabled',
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <TextButton disabled>Next page</TextButton>
        \`
      }
    }
  }
} satisfies Story`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,T,S;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'loading',
  args: {
    loading: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <TextButton loading>Next page</TextButton>
        \`
      }
    }
  }
} satisfies Story`,...(S=(T=r.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var y,w,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    startIcon: <ArrowLeft />
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <TextButton startIcon={<ArrowLeft />}>Next page</TextButton>
        \`
      }
    }
  },
  name: 'with start icon'
} satisfies Story`,...(b=(w=s.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var B,v,C;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    endIcon: <ArrowRight />
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <TextButton endIcon={<ArrowRight />}>Next page</TextButton>
        \`
      }
    }
  },
  name: 'with end icon'
} satisfies Story`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const K=["Base","Disabled","Loading","StartIcon","EndIcon"],H=Object.freeze(Object.defineProperty({__proto__:null,Base:t,Disabled:n,EndIcon:o,Loading:r,StartIcon:s,__namedExportsOrder:K,default:z},Symbol.toStringTag,{value:"Module"}));export{t as B,n as D,o as E,r as L,s as S,H as T,j as a};
