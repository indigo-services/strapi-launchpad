import{j as r,c as f,T as P,r as s,F as o,p as g,B as $}from"./iframe-_cKE9r89.js";import{G as D}from"./symbols-index-Cg3vSd_0.js";import{d as c}from"./index-BxBVU389.js";import{S as W,M as S}from"./SimpleMenu-Dnwze8Kc.js";const y=()=>r.jsx(f,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:r.jsx(P,{variant:"pi",textColor:"neutral500",children:"/"})});y.displayName="Divider";y.__docgenInfo={description:"",methods:[],displayName:"Divider"};const E=g(o)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  & > *:first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,i=s.forwardRef(({label:e,children:n,...a},b)=>{const C=s.Children.toArray(n);return r.jsx(f,{"aria-label":e,tag:"nav",...a,ref:b,children:r.jsx(E,{tag:"ol",children:s.Children.map(C,(N,F)=>{const _=C.length>1&&F+1<C.length;return r.jsxs(o,{inline:!0,tag:"li",children:[N,_&&r.jsx(y,{})]})})})})});i.displayName="Breadcrumbs";i.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:`| {
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
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}}]}},{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}]},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""}}};const t=s.forwardRef(({children:e,isCurrent:n=!1,...a},b)=>r.jsx(f,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,ref:b,children:r.jsx(P,{variant:"pi",textColor:"neutral800",fontWeight:n?"bold":"regular","aria-current":n,...a,children:e})}));t.displayName="Crumb";t.__docgenInfo={description:"",methods:[],displayName:"Crumb",props:{ellipsis:{required:!1,tsType:{name:"boolean"},description:""},textColor:{required:!1,tsType:{name:"unknown"},description:""},textDecoration:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['textDecoration']",raw:"CSSProperties['textDecoration']"}}]}},{name:"CSSProperties['textDecoration']",raw:"CSSProperties['textDecoration']"}]},description:""},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof TEXT_VARIANTS)[number]"},description:""},isCurrent:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const O=g($)`
  border-radius: ${({theme:e})=>e.borderRadius};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: ${({theme:e})=>e.fontSizes[1]};
  line-height: ${({theme:e})=>e.lineHeights[4]};
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
    color: ${({theme:e})=>e.colors.neutral700};
  }
`,p=s.forwardRef(({children:e,...n},a)=>r.jsx(O,{ref:a,...n,children:e}));p.displayName="CrumbLink";p.__docgenInfo={description:"",methods:[],displayName:"CrumbLink",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},isExternal:{required:!1,tsType:{name:"boolean"},description:""}}};const z=g(W)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  height: unset;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
  }
`,h=s.forwardRef(({children:e,...n},a)=>r.jsx(z,{ref:a,endIcon:null,size:"S",...n,children:e}));h.displayName="CrumbSimpleMenu";h.__docgenInfo={description:"",methods:[],displayName:"CrumbSimpleMenu",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onReachEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(entry: IntersectionObserverEntry) => void",signature:{arguments:[{type:{name:"IntersectionObserverEntry"},name:"entry"}],return:{name:"void"}}},description:"Callback function to be called when the popover reaches the end of the scrollable content"},"aria-label":{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const A={title:"Components/Breadcrumbs",component:i},l={render:()=>r.jsx(o,{direction:"column",alignItems:"stretch",gap:3,children:r.jsxs(i,{label:"Folder navigatation",children:[r.jsx(p,{href:"/",children:"Media Library"}),r.jsx(t,{isCurrent:!0,children:"Cats"})]})}),parameters:{docs:{source:{code:c`
        <Breadcrumbs label="Folder navigatation">
          <CrumbLink href="/">Media Library</CrumbLink>
          <Crumb isCurrent>Cats</Crumb>
        </Breadcrumbs>
        `}}},name:"base"},m={render:()=>r.jsx(o,{gap:3,children:r.jsxs(i,{label:"Folder navigatation",children:[r.jsx(p,{href:"/",children:"Media Library"}),r.jsxs(h,{"aria-label":"See more ascendants folders",label:"...",children:[r.jsx(S,{href:"/",children:"Home"}),r.jsx(S,{href:"/somewhere",children:"Somewhere internal"})]}),r.jsx(t,{isCurrent:!0,children:"Cats"})]})}),parameters:{docs:{source:{code:c`
        <Breadcrumbs label="Folder navigatation">
          <CrumbLink href="/">Media Library</CrumbLink>
          <CrumbSimpleMenu aria-label="See more ascendants folders" label="...">
            <MenuItem href="/">Home</MenuItem>
            <MenuItem href="/somewhere">Somewhere internal</MenuItem>
          </CrumbSimpleMenu>
          <Crumb isCurrent>Cats</Crumb>
        </Breadcrumbs>
        `}}},name:"with-menu"},u={render:()=>r.jsxs(o,{gap:3,children:[r.jsx(D,{}),r.jsxs(i,{label:"Category model, name field",children:[r.jsx(t,{children:"Category"}),r.jsx(t,{isCurrent:!0,children:"Name"})]})]}),parameters:{docs:{source:{code:c`
        <Breadcrumbs label="Category model, name field">
          <Crumb>Category</Crumb>
          <Crumb isCurrent>Name</Crumb>
        </Breadcrumbs>
        `}}},name:"without-nagivation"},d={render:()=>r.jsx(o,{gap:3,children:r.jsx(i,{label:"Category model",children:r.jsx(t,{children:"Category"})})}),parameters:{docs:{source:{code:c`
        <Breadcrumbs label="Category model">
          <Crumb>Category</Crumb>
        </Breadcrumbs>
        `}}},name:"single-link"};var x,v,w;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Flex direction="column" alignItems="stretch" gap={3}>\r
      <Breadcrumbs label="Folder navigatation">\r
        <CrumbLink href="/">Media Library</CrumbLink>\r
        <Crumb isCurrent>Cats</Crumb>\r
      </Breadcrumbs>\r
    </Flex>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Breadcrumbs label="Folder navigatation">
          <CrumbLink href="/">Media Library</CrumbLink>
          <Crumb isCurrent>Cats</Crumb>
        </Breadcrumbs>
        \`
      }
    }
  },
  name: 'base'
} satisfies Story`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var k,B,T;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Flex gap={3}>\r
      <Breadcrumbs label="Folder navigatation">\r
        <CrumbLink href="/">Media Library</CrumbLink>\r
        <CrumbSimpleMenu aria-label="See more ascendants folders" label="...">\r
          <MenuItem href="/">Home</MenuItem>\r
          <MenuItem href="/somewhere">Somewhere internal</MenuItem>\r
        </CrumbSimpleMenu>\r
        <Crumb isCurrent>Cats</Crumb>\r
      </Breadcrumbs>\r
    </Flex>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Breadcrumbs label="Folder navigatation">
          <CrumbLink href="/">Media Library</CrumbLink>
          <CrumbSimpleMenu aria-label="See more ascendants folders" label="...">
            <MenuItem href="/">Home</MenuItem>
            <MenuItem href="/somewhere">Somewhere internal</MenuItem>
          </CrumbSimpleMenu>
          <Crumb isCurrent>Cats</Crumb>
        </Breadcrumbs>
        \`
      }
    }
  },
  name: 'with-menu'
} satisfies Story`,...(T=(B=m.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var j,M,L;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Flex gap={3}>\r
      <CollectionType />\r
      <Breadcrumbs label="Category model, name field">\r
        <Crumb>Category</Crumb>\r
        <Crumb isCurrent>Name</Crumb>\r
      </Breadcrumbs>\r
    </Flex>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Breadcrumbs label="Category model, name field">
          <Crumb>Category</Crumb>
          <Crumb isCurrent>Name</Crumb>
        </Breadcrumbs>
        \`
      }
    }
  },
  name: 'without-nagivation'
} satisfies Story`,...(L=(M=u.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var I,R,q;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Flex gap={3}>\r
      <Breadcrumbs label="Category model">\r
        <Crumb>Category</Crumb>\r
      </Breadcrumbs>\r
    </Flex>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Breadcrumbs label="Category model">
          <Crumb>Category</Crumb>
        </Breadcrumbs>
        \`
      }
    }
  },
  name: 'single-link'
} satisfies Story`,...(q=(R=d.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const H=["Base","WithMenu","WithoutNagivation","SingleLink"],K=Object.freeze(Object.defineProperty({__proto__:null,Base:l,SingleLink:d,WithMenu:m,WithoutNagivation:u,__namedExportsOrder:H,default:A},Symbol.toStringTag,{value:"Module"}));export{K as B,d as S,m as W,l as a,u as b};
