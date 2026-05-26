import{r as v,j as r,ag as T,ah as S,ai as k,T as w,ad as C,p as c,aj as x,f as q,n,F as g}from"./iframe-_cKE9r89.js";import{g as R,a as j,b as I,c as P}from"./utils-qgCRrxX8.js";import{A as B}from"./AccessibleIcon-CYyZOlqW.js";const y=v.forwardRef(({children:e,description:a,label:o,defaultOpen:t,open:l,onOpenChange:s,delayDuration:d=500,disableHoverableContent:u,...m},p)=>!o&&!a?e:r.jsxs(T,{defaultOpen:t,open:l,onOpenChange:s,delayDuration:d,disableHoverableContent:u,children:[r.jsx(S,{asChild:!0,children:e}),r.jsx(k,{children:r.jsx(N,{ref:p,sideOffset:8,...m,children:r.jsx(w,{variant:"pi",fontWeight:"bold",children:o||a})})})]})),N=c(x)`
  background-color: ${e=>e.theme.colors.neutral900};
  color: ${e=>e.theme.colors.neutral0};
  padding-inline: ${e=>e.theme.spaces[2]};
  padding-block: ${e=>e.theme.spaces[2]};
  border-radius: ${e=>e.theme.borderRadius};
  z-index: ${e=>e.theme.zIndices.tooltip};
  will-change: opacity;
  transform-origin: var(--radix-tooltip-content-transform-origin);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${C.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`;y.__docgenInfo={description:"",methods:[],displayName:"TooltipImpl",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:""},delayDuration:{required:!1,tsType:{name:"number"},description:`The duration from when the pointer enters the trigger until the tooltip gets opened. This will
override the prop with the same name passed to Provider.
@default 500`,defaultValue:{value:"500",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"@deprecated Use `label` instead."},disableHoverableContent:{required:!1,tsType:{name:"boolean"},description:"When `true`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.\n@default false"},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},open:{required:!1,tsType:{name:"boolean"},description:""}}};const W=q(({label:e,background:a,children:o,disabled:t=!1,onClick:l,size:s="S",variant:d="tertiary",withTooltip:u=!0,type:m="button",...p},b)=>{const h=$=>{!t&&l&&l($)},f=r.jsx(i,{"aria-disabled":t,background:t?"neutral150":a,tag:"button",display:"inline-flex",justifyContent:"center",hasRadius:!0,cursor:"pointer",...p,ref:b,$size:s,onClick:h,$variant:d,type:m,children:r.jsx(B,{label:e,children:o})});return u?r.jsx(y,{label:e,children:f}):f}),i=c(g)`
  text-decoration: none;

  ${e=>{switch(e.$size){case"XS":return n`
          padding-block: 0.7rem;
          padding-inline: 0.7rem;

          ${({theme:a})=>a.breakpoints.medium} {
            padding-block: 0.2rem;
            padding-inline: 0.2rem;
          }
        `;case"S":return n`
          padding-block: 1.1rem;
          padding-inline: 1.1rem;

          ${({theme:a})=>a.breakpoints.medium} {
            padding-block: 0.7rem;
            padding-inline: 0.7rem;
          }
        `;case"M":return n`
          padding-block: 1.1rem;
          padding-inline: 1.1rem;

          ${({theme:a})=>a.breakpoints.medium} {
            padding-block: 0.9rem;
            padding-inline: 0.9rem;
          }
        `;case"L":return n`
          padding-block: 1.5rem;
          padding-inline: 1.5rem;

          ${({theme:a})=>a.breakpoints.medium} {
            padding-block: 1.1rem;
            padding-inline: 1.1rem;
          }
        `}}}
  ${R}
  ${e=>e.$variant==="tertiary"?n`
          color: ${e.theme.colors.neutral500};
        `:""}

  &:hover {
    ${j}
    ${e=>e.$variant==="tertiary"?n`
            color: ${e.theme.colors.neutral600};
          `:""}
  }

  &:active {
    ${I}
  }

  &[aria-disabled='true'] {
    ${P}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`,E=c(g)`
  & ${i}:first-child {
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & ${i}:last-child {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${i} {
    border-radius: 0;

    & + ${i} {
      border-left: none;
    }
  }
`;W.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:`| {
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
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}}]}},{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}]},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"This isn't visually rendered, but required for accessibility."},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},withTooltip:{required:!1,tsType:{name:"boolean"},description:"@default true",defaultValue:{value:"true",computed:!1}},size:{defaultValue:{value:"'S'",computed:!1},required:!1},variant:{defaultValue:{value:"'tertiary'",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};export{W as I,y as T,E as a};
