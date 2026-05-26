import{r as p,j as n,c as x,F as R,f as l,V as c,aE as T,T as k,aF as _,p as u,ao as q,B as N}from"./iframe-_cKE9r89.js";import{d as w}from"./index-BxBVU389.js";const b=p.createContext({activePage:1,pageCount:1}),g=()=>p.useContext(b),h=({children:e,label:r="Pagination",activePage:a,pageCount:o})=>{const t=p.useMemo(()=>({activePage:a,pageCount:o}),[a,o]);return n.jsx(b.Provider,{value:t,children:n.jsx(x,{"aria-label":r,tag:"nav",children:n.jsx(R,{tag:"ol",gap:1,children:p.Children.map(e,(i,G)=>n.jsx("li",{children:i},G))})})})};h.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{activePage:{required:!0,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Pagination'",computed:!1}},pageCount:{required:!0,tsType:{name:"number"},description:""}}};const L=l(({children:e,...r},a)=>{const{activePage:o}=g(),t=o===1;return n.jsxs(y,{ref:a,"aria-disabled":t,tabIndex:t?-1:void 0,...r,children:[n.jsx(c,{children:e}),n.jsx(T,{"aria-hidden":!0})]})}),v=l(({children:e,...r},a)=>{const{activePage:o,pageCount:t}=g(),i=o===t;return n.jsxs(y,{ref:a,"aria-disabled":i,tabIndex:i?-1:void 0,...r,children:[n.jsx(c,{children:e}),n.jsx(_,{"aria-hidden":!0})]})}),j=u(N)`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({$active:e,theme:r})=>e?r.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${q}
`,y=u(j)`
  font-size: 1.1rem;

  svg path {
    fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral700};
    }
  }

  ${e=>e["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`,s=l(({number:e,children:r,...a},o)=>{const{activePage:t}=g(),i=t===e;return n.jsxs(W,{ref:o,...a,"aria-current":i,$active:i,children:[n.jsx(c,{children:r}),n.jsx(k,{"aria-hidden":!0,fontWeight:i?"bold":void 0,lineHeight:"revert",variant:"pi",children:e})]})}),W=u(j)`
  color: ${({theme:e,$active:r})=>r?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,$active:r})=>r?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`,C=({children:e,...r})=>n.jsxs(x,{...r,children:[n.jsx(c,{children:e}),n.jsx(k,{"aria-hidden":!0,lineHeight:"revert",textColor:"neutral800",variant:"pi",children:"…"})]});C.__docgenInfo={description:"",methods:[],displayName:"Dots",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"NextLink",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},isExternal:{required:!1,tsType:{name:"boolean"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"PageLink",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},isExternal:{required:!1,tsType:{name:"boolean"},description:""},number:{required:!0,tsType:{name:"number"},description:""}}};L.__docgenInfo={description:"",methods:[],displayName:"PreviousLink",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},isExternal:{required:!1,tsType:{name:"boolean"},description:""}}};const $={title:"Components/Pagination",component:h},d={render:()=>n.jsxs(h,{activePage:1,pageCount:26,children:[n.jsx(L,{href:"/1",children:"Go to previous page"}),n.jsx(s,{number:1,href:"/1",children:"Go to page 1"}),n.jsx(s,{number:2,href:"/2",children:"Go to page 2"}),n.jsx(C,{children:"And 23 other links"}),n.jsx(s,{number:25,href:"/25",children:"Go to page 3"}),n.jsx(s,{number:26,href:"/26",children:"Go to page 26"}),n.jsx(v,{href:"/3",children:"Go to next page"})]}),parameters:{docs:{source:{code:w`
          <Pagination activePage={1} pageCount={26}>
            <PreviousLink href="/1">Go to previous page</PreviousLink>
            <PageLink number={1} href="/1">
              Go to page 1
            </PageLink>
            <PageLink number={2} href="/2">
              Go to page 2
            </PageLink>
            <Dots>And 23 other links</Dots>
            <PageLink number={25} href="/25">
              Go to page 3
            </PageLink>
            <PageLink number={26} href="/26">
              Go to page 26
            </PageLink>
            <NextLink href="/3">Go to next page</NextLink>
          </Pagination>
        `}}},name:"base"};var f,m,P;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Pagination activePage={1} pageCount={26}>\r
      <PreviousLink href="/1">Go to previous page</PreviousLink>\r
      <PageLink number={1} href="/1">\r
        Go to page 1\r
      </PageLink>\r
      <PageLink number={2} href="/2">\r
        Go to page 2\r
      </PageLink>\r
      <Dots>And 23 other links</Dots>\r
      <PageLink number={25} href="/25">\r
        Go to page 3\r
      </PageLink>\r
      <PageLink number={26} href="/26">\r
        Go to page 26\r
      </PageLink>\r
      <NextLink href="/3">Go to next page</NextLink>\r
    </Pagination>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Pagination activePage={1} pageCount={26}>
            <PreviousLink href="/1">Go to previous page</PreviousLink>
            <PageLink number={1} href="/1">
              Go to page 1
            </PageLink>
            <PageLink number={2} href="/2">
              Go to page 2
            </PageLink>
            <Dots>And 23 other links</Dots>
            <PageLink number={25} href="/25">
              Go to page 3
            </PageLink>
            <PageLink number={26} href="/26">
              Go to page 26
            </PageLink>
            <NextLink href="/3">Go to next page</NextLink>
          </Pagination>
        \`
      }
    }
  },
  name: 'base'
} satisfies Story`,...(P=(m=d.parameters)==null?void 0:m.docs)==null?void 0:P.source}}};const D=["Base"],S=Object.freeze(Object.defineProperty({__proto__:null,Base:d,__namedExportsOrder:D,default:$},Symbol.toStringTag,{value:"Module"}));export{d as B,S as P,h as a};
