import{r as i,j as n,F as f,K as Q,ac as Y,p as d,n as C,ad as V,T as N,c as Z}from"./iframe-_cKE9r89.js";import{s as ee,u as ne}from"./useIntersection-BvDycFkB.js";import{u as te}from"./useId-BMWvqHJO.js";import{A as s}from"./index-JVGtNO81.js";import{u as re}from"./useComposeRefs-BPjCxrPe.js";import{c as ae}from"./input-BS9krbKO.js";import{u as O,i as se}from"./Field-Cwhta1v_.js";import{I as ie}from"./IconButton-Uvk00hK3.js";import{L as oe}from"./Loader-B5HLgo8O.js";import{S as le}from"./ScrollArea-E5LdgMvt.js";const L=i.forwardRef(({onClear:e,clearLabel:t="Clear",startIcon:a,disabled:r,hasError:l,loading:b,children:y,id:x,size:u="M",withTags:p,...w},g)=>{const h=i.useRef(null),T=c=>{e&&!r&&(e(c),h.current.focus())},{labelNode:$}=O("SelectTrigger"),S=re(h,g);return n.jsx(s.Trigger,{asChild:!0,children:n.jsxs(de,{"aria-disabled":r,$hasError:l,ref:S,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:r?"neutral150":"neutral0",gap:4,cursor:"default","aria-labelledby":$?`${x}-label`:void 0,$size:u,$withTags:p,$hasClear:!!e,...w,children:[n.jsxs(f,{flex:"1",tag:"span",gap:3,overflow:"hidden",children:[a&&n.jsx(f,{tag:"span","aria-hidden":!0,children:a}),y]}),n.jsxs(f,{tag:"span",gap:3,children:[e?n.jsx(ie,{size:"XS",variant:"ghost",onClick:T,"aria-disabled":r,"aria-label":t,label:t,children:n.jsx(Q,{})}):null,b?n.jsx(oe,{small:!0,children:"Loading"}):n.jsx(ce,{children:n.jsx(Y,{})})]})]})})}),de=d(f)`
  border: 1px solid ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  padding-inline-start: ${({theme:e})=>e.spaces[4]};
  padding-inline-end: ${({theme:e})=>e.spaces[3]};

  ${({$size:e,$hasClear:t,$withTags:a,theme:r})=>a?C`
        padding-inline-start: calc(${r.spaces[2]} - 1px);
        padding-block: calc(${r.spaces[2]} - 1px);

        ${r.breakpoints.medium} {
          padding-inline-start: 0.3rem;
          padding-block: 0.3rem;
        }
      `:ae({$size:e||"M",$hasValue:t,$hasClear:t,theme:r})}
  cursor: pointer;

  &[aria-disabled='true'] {
    color: ${e=>e.theme.colors.neutral500};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:t})=>se()({theme:e,$hasError:t})};
`,ce=d(s.Icon)`
  display: flex;
  & > svg {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,_=i.forwardRef(({children:e,placeholder:t,withTags:a,...r},l)=>n.jsx(ue,{ref:l,ellipsis:!0,...r,children:n.jsx(pe,{placeholder:t,$withTags:a,children:e})})),ue=d(N)`
  flex: 1;
  min-height: 2.4rem;

  ${({theme:e})=>e.breakpoints.medium} {
    min-height: 2.2rem;
  }
`,pe=d(s.Value)`
  ${({$withTags:e})=>e?C`
          display: flex;
          flex-wrap: wrap;
          gap: ${({theme:t})=>t.spaces[1]};
        `:null};
`,B=i.forwardRef((e,t)=>n.jsx(me,{ref:t,...e,children:n.jsx(le,{children:e.children})})),me=d(s.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  min-width: var(--radix-select-trigger-width);
  max-height: 15.6rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${V.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${V.slideDownIn};
      }
    }
  }
`,fe=d(s.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,H=i.forwardRef((e,t)=>n.jsx(he,{ref:t,...e})),ge=C`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  border-radius: ${e=>e.theme.borderRadius};
  padding: ${e=>`${e.theme.spaces[2]} ${e.theme.spaces[4]}`};
  padding-left: ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  white-space: nowrap;
  user-select: none;
  color: ${({theme:e})=>e.colors.neutral800};

  &:focus-visible {
    outline: none;
    background-color: ${({theme:e})=>e.colors.primary100};
    cursor: pointer;
  }
`,he=d(s.Item)`
  ${ge}

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
    cursor: pointer;
  }
`,be=s.Root,ye=L,xe=_,we=s.Portal,Te=B,$e=fe,Se=H,He=s.ItemIndicator,ve=s.ItemText,De=s.Group;L.__docgenInfo={description:"",methods:[],displayName:"SelectTrigger",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},clearLabel:{required:!1,tsType:{name:"string"},description:'@default "Clear"',defaultValue:{value:"'Clear'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:`Shows a loading spinner in place of the dropdown caret icon
@default false`},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement | HTMLDivElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLDivElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLDivElement"}]}]},name:"e"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'S' | 'M'",elements:[{name:"literal",value:"'S'"},{name:"literal",value:"'M'"}]},description:'@default "M"',defaultValue:{value:"'M'",computed:!1}},startIcon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},withTags:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Pick"]};_.__docgenInfo={description:"",methods:[],displayName:"SelectValue",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""},withTags:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit","Pick"]};B.__docgenInfo={description:"",methods:[],displayName:"SelectContent"};H.__docgenInfo={description:"",methods:[],displayName:"SelectItem"};const Ie=i.forwardRef(({children:e,clearLabel:t="Clear",customizeContent:a,disabled:r,hasError:l,id:b,loading:y,name:x,onChange:u,onClear:p,onCloseAutoFocus:w,onReachEnd:g,placeholder:h,required:T,size:$,startIcon:S,value:c,...v},D)=>{const[F,q]=i.useState(),[P,z]=i.useState(!1),A=o=>{z(o)},W=o=>{p&&p(o),u||q("")},G=o=>{u?u(typeof c=="number"?Number(o):o):q(o)},E=i.useRef(null),J=te(),M=`intersection-${ee(J)}`;ne(E,o=>{g&&g(o)},{selectorToWatch:`#${M}`,skipWhen:!P});const{error:k,required:K,...I}=O("SingleSelect"),U=!!k||l,R=I.id??b,X=I.name??x;let j;k?j=`${R}-error`:I.hint&&(j=`${R}-hint`);const m=(typeof c<"u"&&c!==null?c.toString():F)??"";return n.jsxs(be,{onOpenChange:A,disabled:r,required:K??T,onValueChange:G,value:m,...v,children:[n.jsx(ye,{ref:D,id:R,name:X,startIcon:S,hasError:U,disabled:r,clearLabel:t,loading:y,onClear:m&&p?W:void 0,"aria-label":v["aria-label"],"aria-describedby":j??v["aria-describedby"],size:$,children:n.jsx(xe,{placeholder:h,textColor:m?"neutral800":"neutral600",children:m&&a?a(m):void 0})}),n.jsx(we,{children:n.jsx(Te,{position:"popper",sideOffset:4,onCloseAutoFocus:w,children:n.jsxs($e,{ref:E,children:[e,n.jsx(Z,{id:M,width:"100%",height:"1px"})]})})})]})}),Re=i.forwardRef(({value:e,startIcon:t,children:a,...r},l)=>n.jsxs(Se,{ref:l,value:e.toString(),...r,children:[t&&n.jsx(f,{tag:"span","aria-hidden":!0,children:t}),n.jsx(N,{lineHeight:"20px",width:"100%",children:n.jsx(ve,{children:a})})]}));Ie.__docgenInfo={description:"",methods:[],displayName:"SingleSelect",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},onReachEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(entry: IntersectionObserverEntry) => void",signature:{arguments:[{type:{name:"IntersectionObserverEntry"},name:"entry"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number | null",elements:[{name:"string"},{name:"number"},{name:"null"}]},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""},clearLabel:{defaultValue:{value:"'Clear'",computed:!1},required:!1}}};Re.__docgenInfo={description:"",methods:[],displayName:"SingleSelectOption",props:{startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}},composes:["Omit"]};export{Te as C,De as G,Se as I,we as P,be as R,Ie as S,ye as T,xe as V,$e as a,He as b,ve as c,Re as d};
