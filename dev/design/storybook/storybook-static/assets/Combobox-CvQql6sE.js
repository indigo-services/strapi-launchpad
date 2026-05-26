import{r as a,j as t,c as m,F as b,K as Ve,ac as je,T as S,p as f,ad as J}from"./iframe-_cKE9r89.js";import{u as qe,R as s}from"./index-JVGtNO81.js";import{s as Ee,u as Me}from"./useIntersection-BvDycFkB.js";import{u as ke}from"./useComposeRefs-BPjCxrPe.js";import{u as k}from"./useControllableState-CIwy89gb.js";import{u as Se}from"./useId-BMWvqHJO.js";import{c as Le,i as ze}from"./input-BS9krbKO.js";import{u as Oe,i as He}from"./Field-Cwhta1v_.js";import{L as K}from"./Loader-B5HLgo8O.js";import{S as Ne}from"./ScrollArea-E5LdgMvt.js";import{I as Ae}from"./IconButton-Uvk00hK3.js";const X=({children:e,estimatedItemSize:r=40,overscan:l=10,itemCount:d,renderItem:u})=>{const n=a.useRef(null),[x,v]=a.useState(!1),p=a.useRef(!0);a.useEffect(()=>(p.current=!0,typeof a.startTransition=="function"&&a.startTransition(()=>{p.current&&v(!0)}),()=>{p.current=!1}),[]);const y=a.useMemo(()=>u&&d!==void 0?[]:a.Children.toArray(e),[e,u,d]),T=d??y.length,h=qe({count:T,getScrollElement:()=>n.current??null,estimateSize:a.useCallback(()=>r,[r]),overscan:l,scrollMargin:0,measureElement:void 0,lanes:1}),V=x&&p.current?h.getVirtualItems():[];return x?t.jsx(m,{ref:n,height:`${h.getTotalSize()>0?h.getTotalSize():0}px`,width:"100%",position:"relative","data-testid":"virtualized-list",style:{willChange:"transform"},children:V.map(c=>{const g=u?u(c.index):y[c.index];return t.jsx(m,{"data-index":c.index,style:{position:"absolute",top:0,left:0,width:"100%",transform:`translate3d(0, ${c.start}px, 0)`},children:g},c.key)})}):t.jsx(m,{ref:n,height:"40px",width:"100%",position:"relative"})};X.__docgenInfo={description:`VirtualizedList - Wraps Combobox children in a virtualizer for performance
This component should be used inside ScrollArea to virtualize the list

Two modes:
1. Children mode (default): Pass children directly
2. Lazy mode: Pass itemCount + renderItem for maximum performance`,methods:[],displayName:"VirtualizedList",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},estimatedItemSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},overscan:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},itemCount:{required:!1,tsType:{name:"number"},description:""},renderItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => ReactNode",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"ReactNode"}}},description:""}}};const Be=a.forwardRef(({allowCustomValue:e,autocomplete:r,children:l,className:d,clearLabel:u="Clear",creatable:n=!1,creatableDisabled:x=!1,creatableStartIcon:v,createMessage:p=w=>`Create "${w}"`,defaultFilterValue:y,defaultTextValue:T,defaultOpen:h=!1,open:V,onOpenChange:c,disabled:g=!1,hasError:G,id:Q,filterValue:Y,hasMoreItems:ee=!1,isPrintableCharacter:te,loading:$=!1,loadingMessage:ae="Loading content...",name:re,noOptionsMessage:ne=()=>"No results found",onChange:z,onClear:C,onCreateOption:R,onFilterValueChange:oe,onInputChange:O,onTextValueChange:se,onLoadMore:H,placeholder:ie="Select or enter a value",required:le=!1,size:de="M",startIcon:N,textValue:ue,value:A,...ce},pe)=>{const[w,B]=k({prop:V,defaultProp:h,onChange:c}),[i,F]=k({prop:ue,defaultProp:e&&!T?A:T,onChange:se}),[j,P]=k({prop:Y,defaultProp:y,onChange:oe}),_=a.useRef(null),D=a.useRef(null),me=ke(_,pe),fe=a.useRef(null),he=o=>{C&&!g&&(F(""),P(""),C(o),_.current.focus())},ge=o=>{B(o)},be=o=>{F(o)},xe=o=>{P(o)},ve=o=>{O&&O(o)},ye=o=>{z&&z(o)},Te=o=>{H&&ee&&!$&&H(o)},U=()=>{R&&i&&n!=="visible"?R(i):R&&n==="visible"&&(R(),B(!1))},$e=Se(),W=`intersection-${Ee($e)}`;Me(D,Te,{selectorToWatch:`#${W}`,skipWhen:!w});const{error:q,...I}=Oe("Combobox"),Ce=!!q||G,E=I.id??Q,Re=I.name??re,we=I.required||le,Z=a.Children.toArray(l).filter(Boolean).length,Ie=!!!(i&&i!==""||j&&j!=="")&&Z>100;let M;return q?M=`${E}-error`:I.hint&&(M=`${E}-hint`),t.jsxs(s.Root,{autocomplete:r||(n===!0?"list":"both"),onOpenChange:ge,open:w,onTextValueChange:be,textValue:i,allowCustomValue:!!n||e,disabled:g,required:we,value:A,onValueChange:ye,filterValue:j,onFilterValueChange:xe,isPrintableCharacter:te,visible:n==="visible",children:[t.jsxs(Fe,{$hasError:Ce,$size:de,$hasTextValue:!!i,$hasClear:!!(i&&C),className:d,children:[t.jsxs(b,{flex:"1",tag:"span",gap:3,children:[N?t.jsx(b,{flex:"0 0 1.6rem",tag:"span","aria-hidden":!0,children:N}):null,t.jsx(Pe,{placeholder:ie,id:E,"aria-invalid":!!q,onChange:ve,ref:me,name:Re,"aria-describedby":M,...ce})]}),t.jsxs(b,{tag:"span",gap:3,children:[i&&C?t.jsx(Ae,{size:"XS",variant:"ghost",onClick:he,"aria-disabled":g,"aria-label":u,label:u,ref:fe,children:t.jsx(Ve,{})}):null,$?t.jsx(K,{small:!0,children:"Loading"}):t.jsx(_e,{children:t.jsx(je,{fill:"neutral500"})})]})]}),t.jsx(s.Portal,{children:t.jsxs(De,{sideOffset:4,children:[t.jsx(Ne,{viewportRef:D,children:t.jsx(s.Viewport,{children:t.jsxs(m,{padding:1,children:[Ie?t.jsx(X,{itemCount:Z,children:l}):l,n!==!0&&!$?t.jsx(s.NoValueFound,{asChild:!0,children:t.jsx(L,{$hasHover:!1,children:t.jsx(S,{children:ne(i??"")})})}):null,$?t.jsx(b,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:t.jsx(K,{small:!0,children:ae})}):null,t.jsx(m,{id:W,width:"100%",height:"1px"})]})})}),n?t.jsx(Ue,{onPointerUp:U,onClick:U,disabled:x,asChild:!0,children:t.jsx(L,{children:t.jsxs(b,{gap:2,children:[v&&t.jsx(m,{tag:"span","aria-hidden":!0,display:"inline-flex",children:v}),t.jsx(S,{children:p(i??"")})]})})}):null]})})]})}),Fe=f(s.Trigger)`
  position: relative;
  border: 1px solid ${({theme:e,$hasError:r})=>r?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spaces[4]};
  padding-inline-start: ${({theme:e})=>e.spaces[4]};
  padding-inline-end: ${({theme:e})=>e.spaces[3]};
  ${({$size:e,$hasTextValue:r,$hasClear:l,theme:d})=>Le({$size:e||"M",$hasValue:r||!1,$hasClear:l||!1,theme:d})}

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:r})=>He()({theme:e,$hasError:r})};
`,Pe=f(s.TextInput)`
  width: 100%;
  ${ze}
  color: ${({theme:e})=>e.colors.neutral800};
  padding: 0;
  border: none;
  background-color: transparent;
  text-overflow: ellipsis;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,_e=f(s.Icon)`
  border: none;
  background: transparent;
  padding: 0;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,De=f(s.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  &:focus-visible {
    outline: ${({theme:e})=>`2px solid ${e.colors.primary600}`};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${J.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${J.slideDownIn};
      }
    }
  }
`,Ue=f(s.CreateItem)`
  && {
    border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: ${({theme:e})=>e.colors.neutral0};
    cursor: pointer;
    padding: ${({theme:e})=>e.spaces[1]};
    position: sticky;
    bottom: 0;
    left: 0;
  }
  &&:hover,
  &&[data-highlighted] {
    background: ${({theme:e})=>e.colors.neutral0};
  }
  &&[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    cursor: not-allowed;
  }
  &&[data-disabled] svg {
    fill: ${({theme:e})=>e.colors.neutral300};
  }
  && > div {
    padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  }
  && > div:hover,
  &&[data-highlighted] > div {
    background-color: ${({theme:e})=>e.colors.primary100};
    border-radius: ${({theme:e})=>e.borderRadius};
  }
  &&[data-disabled] > div {
    background-color: inherit;
  }
`,We=a.forwardRef(({children:e,value:r,disabled:l,textValue:d,...u},n)=>t.jsx(s.ComboboxItem,{asChild:!0,value:r,disabled:l,textValue:d,children:t.jsx(L,{ref:n,...u,children:t.jsx(s.ItemText,{asChild:!0,children:t.jsx(S,{children:e})})})})),L=f.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  user-select: none;

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.primary100};
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:e,$hasHover:r=!0})=>r?e.colors.primary100:e.colors.neutral0};
  }

  &[data-highlighted] {
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }
`;Be.__docgenInfo={description:"",methods:[],displayName:"Combobox",props:{clearLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Clear'",computed:!1}},creatable:{required:!1,tsType:{name:"union",raw:"boolean | 'visible'",elements:[{name:"boolean"},{name:"literal",value:"'visible'"}]},description:"",defaultValue:{value:"false",computed:!1}},creatableDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},createMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:"",defaultValue:{value:'(value) => `Create "${value}"`',computed:!1}},creatableStartIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hasMoreItems:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loadingMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Loading content...'",computed:!1}},noOptionsMessage:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => string",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"string"}}},description:"",defaultValue:{value:"() => 'No results found'",computed:!1}},onChange:{required:!1,tsType:{name:"ComboboxPrimitive.RootProps['onValueChange']",raw:"ComboboxPrimitive.RootProps['onValueChange']"},description:""},onClear:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLDivElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLDivElement"}]}]},description:""},onCreateOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onLoadMore:{required:!1,tsType:{name:"signature",type:"function",raw:"(entry: IntersectionObserverEntry) => void",signature:{arguments:[{type:{name:"IntersectionObserverEntry"},name:"entry"}],return:{name:"void"}}},description:""},onInputChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'S' | 'M'",elements:[{name:"literal",value:"'S'"},{name:"literal",value:"'M'"}]},description:'@default "M"',defaultValue:{value:"'M'",computed:!1}},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultOpen:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},placeholder:{defaultValue:{value:"'Select or enter a value'",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Pick","Omit"]};We.__docgenInfo={description:"",methods:[],displayName:"Option",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{Be as C,We as O};
