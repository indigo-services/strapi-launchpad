import{f as w,j as r,F as m,T as b,p as f,i as h,R as C}from"./iframe-_cKE9r89.js";import{D as k,B as R,g as q,a as j,b as B,c as x}from"./utils-qgCRrxX8.js";const P=w(({variant:e=k,startIcon:s,endIcon:a,disabled:n=!1,children:i,onClick:t,size:l=R[1],loading:o=!1,fullWidth:c=!1,type:y="button",...p},g)=>{const u=n||o,v=T=>{!u&&t&&t(T)},d=p.tag??"button",S=d==="button"||d==="input"?y:void 0;return r.jsxs(I,{ref:g,"aria-disabled":u,disabled:u,$size:l,$variant:e,tag:"button",onClick:v,hasRadius:!0,gap:2,inline:!0,alignItems:"center",justifyContent:"center",width:c?"100%":void 0,paddingLeft:4,paddingRight:4,cursor:"pointer",type:S,...p,children:[(s||o)&&r.jsx(m,{tag:"span","aria-hidden":!0,children:o?r.jsx(E,{}):s}),r.jsx(b,{variant:l==="S"?"pi":void 0,fontWeight:"bold",children:i}),a&&r.jsx(m,{tag:"span","aria-hidden":!0,children:a})]})}),$=h`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,E=f(C)`
  animation: ${$} 2s infinite linear;
  will-change: transform;
`,I=f(m)`
  ${({theme:e,$size:s})=>{const a=e.sizes.button[s];if(typeof a=="string")return`height: ${a};`;const n=[];return Object.entries(a).forEach(([i,t])=>{if(t){if(i==="initial")n.push(`height: ${t};`);else if(i in e.breakpoints){const l=e.breakpoints[i];n.push(`${l} { height: ${t}; }`)}}}),n.join(`
`)}}
  text-decoration: none;
  ${q}

  &:hover {
    ${j}
  }

  &:active {
    ${B}
  }

  &[aria-disabled='true'] {
    ${x}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;P.__docgenInfo={description:"",methods:[],displayName:"Button",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:`| {
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
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}}]}},{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}]},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof BUTTON_SIZES)[number]"},description:"",defaultValue:{value:"BUTTON_SIZES[1]",computed:!0}},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof VARIANTS)[number]"},description:"",defaultValue:{value:"'default'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}}}};export{P as B};
