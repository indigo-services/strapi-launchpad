import{$ as ze,r as l,D as re,x as Ne,y as z,_ as f,z as Ge,a8 as co,d as Ye,af as so,e as c,j as o,ae as lo,ac as se,F as N,T as y,n as le,p as R,i as Fe,c as mo,aC as po,aD as uo,O as go,P as fo}from"./iframe-_cKE9r89.js";import{d as v}from"./index-BxBVU389.js";import{$ as Ao}from"./index-DQIug_r8.js";import{$ as bo}from"./index-D_aoadGl.js";import{I as me}from"./IconButton-Uvk00hK3.js";import{R as ho,L as yo}from"./Field-Cwhta1v_.js";const We="Collapsible",[$o,Je]=ze(We),[To,ne]=$o(We),xo=l.forwardRef((e,n)=>{const{__scopeCollapsible:r,open:i,defaultOpen:a,disabled:t,onOpenChange:s,...d}=e,[p=!1,u]=re({prop:i,defaultProp:a,onChange:s});return l.createElement(To,{scope:r,disabled:t,contentId:Ne(),open:p,onOpenToggle:l.useCallback(()=>u(b=>!b),[u])},l.createElement(z.div,f({"data-state":ie(p),"data-disabled":t?"":void 0},d,{ref:n})))}),Co="CollapsibleTrigger",vo=l.forwardRef((e,n)=>{const{__scopeCollapsible:r,...i}=e,a=ne(Co,r);return l.createElement(z.button,f({type:"button","aria-controls":a.contentId,"aria-expanded":a.open||!1,"data-state":ie(a.open),"data-disabled":a.disabled?"":void 0,disabled:a.disabled},i,{ref:n,onClick:Ge(e.onClick,a.onOpenToggle)}))}),Ke="CollapsibleContent",Io=l.forwardRef((e,n)=>{const{forceMount:r,...i}=e,a=ne(Ke,e.__scopeCollapsible);return l.createElement(co,{present:r||a.open},({present:t})=>l.createElement(Ro,f({},i,{ref:n,present:t})))}),Ro=l.forwardRef((e,n)=>{const{__scopeCollapsible:r,present:i,children:a,...t}=e,s=ne(Ke,r),[d,p]=l.useState(i),u=l.useRef(null),b=Ye(n,u),h=l.useRef(0),q=h.current,k=l.useRef(0),w=k.current,P=s.open||d,j=l.useRef(P),I=l.useRef();return l.useEffect(()=>{const g=requestAnimationFrame(()=>j.current=!1);return()=>cancelAnimationFrame(g)},[]),so(()=>{const g=u.current;if(g){I.current=I.current||{transitionDuration:g.style.transitionDuration,animationName:g.style.animationName},g.style.transitionDuration="0s",g.style.animationName="none";const A=g.getBoundingClientRect();h.current=A.height,k.current=A.width,j.current||(g.style.transitionDuration=I.current.transitionDuration,g.style.animationName=I.current.animationName),p(i)}},[s.open,i]),l.createElement(z.div,f({"data-state":ie(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!P},t,{ref:b,style:{"--radix-collapsible-content-height":q?`${q}px`:void 0,"--radix-collapsible-content-width":w?`${w}px`:void 0,...e.style}}),P&&a)});function ie(e){return e?"open":"closed"}const So=xo,ko=vo,qo=Io,S="Accordion",wo=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[te,jo,_o]=Ao(S),[Y,mr]=ze(S,[_o,Je]),ae=Je(),Qe=c.forwardRef((e,n)=>{const{type:r,...i}=e,a=i,t=i;return c.createElement(te.Provider,{scope:e.__scopeAccordion},r==="multiple"?c.createElement(Bo,f({},t,{ref:n})):c.createElement(Eo,f({},a,{ref:n})))});Qe.propTypes={type(e){const n=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof n=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(n)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[Xe,Po]=Y(S),[Ze,Ho]=Y(S,{collapsible:!1}),Eo=c.forwardRef((e,n)=>{const{value:r,defaultValue:i,onValueChange:a=()=>{},collapsible:t=!1,...s}=e,[d,p]=re({prop:r,defaultProp:i,onChange:a});return c.createElement(Xe,{scope:e.__scopeAccordion,value:d?[d]:[],onItemOpen:p,onItemClose:c.useCallback(()=>t&&p(""),[t,p])},c.createElement(Ze,{scope:e.__scopeAccordion,collapsible:t},c.createElement(eo,f({},s,{ref:n}))))}),Bo=c.forwardRef((e,n)=>{const{value:r,defaultValue:i,onValueChange:a=()=>{},...t}=e,[s=[],d]=re({prop:r,defaultProp:i,onChange:a}),p=c.useCallback(b=>d((h=[])=>[...h,b]),[d]),u=c.useCallback(b=>d((h=[])=>h.filter(q=>q!==b)),[d]);return c.createElement(Xe,{scope:e.__scopeAccordion,value:s,onItemOpen:p,onItemClose:u},c.createElement(Ze,{scope:e.__scopeAccordion,collapsible:!0},c.createElement(eo,f({},t,{ref:n}))))}),[Lo,F]=Y(S),eo=c.forwardRef((e,n)=>{const{__scopeAccordion:r,disabled:i,dir:a,orientation:t="vertical",...s}=e,d=c.useRef(null),p=Ye(d,n),u=jo(r),h=bo(a)==="ltr",q=Ge(e.onKeyDown,k=>{var w;if(!wo.includes(k.key))return;const P=k.target,j=u().filter(X=>{var Z;return!((Z=X.ref.current)!==null&&Z!==void 0&&Z.disabled)}),I=j.findIndex(X=>X.ref.current===P),g=j.length;if(I===-1)return;k.preventDefault();let A=I;const W=0,J=g-1,K=()=>{A=I+1,A>J&&(A=W)},Q=()=>{A=I-1,A<W&&(A=J)};switch(k.key){case"Home":A=W;break;case"End":A=J;break;case"ArrowRight":t==="horizontal"&&(h?K():Q());break;case"ArrowDown":t==="vertical"&&K();break;case"ArrowLeft":t==="horizontal"&&(h?Q():K());break;case"ArrowUp":t==="vertical"&&Q();break}const ao=A%g;(w=j[ao].ref.current)===null||w===void 0||w.focus()});return c.createElement(Lo,{scope:r,disabled:i,direction:a,orientation:t},c.createElement(te.Slot,{scope:r},c.createElement(z.div,f({},s,{"data-orientation":t,ref:p,onKeyDown:i?void 0:q}))))}),ee="AccordionItem",[Mo,ce]=Y(ee),Do=c.forwardRef((e,n)=>{const{__scopeAccordion:r,value:i,...a}=e,t=F(ee,r),s=Po(ee,r),d=ae(r),p=Ne(),u=i&&s.value.includes(i)||!1,b=t.disabled||e.disabled;return c.createElement(Mo,{scope:r,open:u,disabled:b,triggerId:p},c.createElement(So,f({"data-orientation":t.orientation,"data-state":oo(u)},d,a,{ref:n,disabled:b,open:u,onOpenChange:h=>{h?s.onItemOpen(i):s.onItemClose(i)}})))}),Uo="AccordionHeader",Oo=c.forwardRef((e,n)=>{const{__scopeAccordion:r,...i}=e,a=F(S,r),t=ce(Uo,r);return c.createElement(z.h3,f({"data-orientation":a.orientation,"data-state":oo(t.open),"data-disabled":t.disabled?"":void 0},i,{ref:n}))}),pe="AccordionTrigger",Vo=c.forwardRef((e,n)=>{const{__scopeAccordion:r,...i}=e,a=F(S,r),t=ce(pe,r),s=Ho(pe,r),d=ae(r);return c.createElement(te.ItemSlot,{scope:r},c.createElement(ko,f({"aria-disabled":t.open&&!s.collapsible||void 0,"data-orientation":a.orientation,id:t.triggerId},d,i,{ref:n})))}),zo="AccordionContent",No=c.forwardRef((e,n)=>{const{__scopeAccordion:r,...i}=e,a=F(S,r),t=ce(zo,r),s=ae(r);return c.createElement(qo,f({role:"region","aria-labelledby":t.triggerId,"data-orientation":a.orientation},s,i,{ref:n,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}}))});function oo(e){return e?"open":"closed"}const Go=Qe,Yo=Do,Fo=Oo,Wo=Vo,Jo=No,[Ko,de]=lo("Accordion"),_=l.forwardRef(({children:e,size:n="S",...r},i)=>o.jsx(Qo,{ref:i,$size:n,collapsible:!0,...r,type:"single",children:o.jsx(Ko,{size:n,children:e})})),Qo=R(Go)`
  background-color: ${e=>e.theme.colors.neutral0};

  ${e=>e.$size==="S"?le`
        border-radius: ${n=>n.theme.borderRadius};
        border: solid 1px ${n=>n.theme.colors.neutral200};
      `:le`
        
      `}
`,$=l.forwardRef((e,n)=>{const{size:r}=de("Item");return o.jsx(Xo,{$size:r,"data-size":r,ref:n,...e})}),Xo=R(Yo)`
  overflow: hidden;
  margin: 1px 0;

  &:first-child {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    margin-top: 0;
  }

  &:last-child {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    margin-bottom: 0;
  }

  &[data-size='S'] {
    & + & {
      border-top: solid 1px ${e=>e.theme.colors.neutral200};
    }
  }

  &[data-state='open'] {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  &:not([data-disabled]):hover {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  /* This applies our desired focus effect correctly. */
  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }
`,T=l.forwardRef(({caretPosition:e="left",description:n,icon:r,iconProps:i,children:a,...t},s)=>{const{size:d}=de("Trigger");return o.jsxs(no,{$caretPosition:e,$size:d,ref:s,...t,children:[e==="left"?o.jsx(G,{$size:d,children:o.jsx(se,{width:d==="S"?"1.2rem":"1.6rem",height:d==="S"?"1.2rem":"1.6rem"})}):null,o.jsxs(N,{tag:"span",gap:2,overflow:"hidden",children:[r&&d==="S"?o.jsx(ro,{children:o.jsx(r,{...i})}):null,o.jsxs(N,{alignItems:"flex-start",direction:"column",tag:"span",ref:s,overflow:"hidden",children:[o.jsx(y,{fontWeight:d==="S"?"bold":void 0,ellipsis:!0,variant:d==="M"?"delta":void 0,textAlign:"left",width:"100%",children:a}),n&&d==="M"?o.jsx(y,{textAlign:"left",children:n}):null]})]}),e==="right"?o.jsx(G,{$size:d,children:o.jsx(se,{width:d==="S"?"1.2rem":"1.6rem",height:d==="S"?"1.2rem":"1.6rem"})}):null]})}),ro=R(mo)`
  color: ${e=>e.theme.colors.neutral500};
  display: flex;

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`,G=R(N).attrs(e=>({...e,tag:"span"}))`
  background-color: ${e=>e.theme.colors.neutral200};
  width: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  height: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  flex: ${e=>e.$size==="S"?"0 0 2.4rem":"0 0 3.2rem"};
  border-radius: 50%;
  justify-content: center;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      transform ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.authenticMotion},
      ${e=>e.theme.transitions.backgroundColor};
  }
`,no=R(Wo)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$caretPosition==="left"?"flex-start":"space-between"};
  width: 100%;
  gap: ${e=>e.theme.spaces[4]};
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[4]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[3]:e.theme.spaces[6]};
  cursor: pointer;
  color: ${e=>e.theme.colors.neutral800};
  overflow: hidden;

  &[data-disabled] {
    cursor: default;
    color: ${e=>e.theme.colors.neutral600};
  }

  &[data-state='open'] > ${G} {
    transform: rotate(180deg);
  }

  /* we remove the default focus because the entire item should have the focus style and the default would be hidden. */
  &:focus-visible {
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`,io=l.forwardRef((e,n)=>{const{size:r}=de("Trigger");return o.jsx(to,{$size:r,...e,ref:n})}),to=R(N).attrs(e=>({...e,tag:"span"}))`
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};

  // Remove default IconButton styles so there are no backgrounds or borders.
  & > button {
    border: none;
    background: none;
    color: ${e=>e.theme.colors.neutral600};

    @media (prefers-reduced-motion: no-preference) {
      transition: ${e=>e.theme.transitions.color};
    }
  }
`,x=l.forwardRef(({variant:e="primary",...n},r)=>o.jsx(Zo,{$variant:e,ref:r,...n})),Zo=R(Fo)`
  display: flex;
  align-items: center;
  background-color: ${e=>e.$variant==="primary"?e.theme.colors.neutral0:e.theme.colors.neutral100};

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral150};
  }

  &:not([data-disabled]) {
    &:hover,
    &[data-state='open'] {
      background-color: ${e=>e.theme.colors.primary100};

      & > ${no} {
        color: ${e=>e.theme.colors.primary600};

        & ${ro} {
          color: ${e=>e.theme.colors.primary600};
        }

        & ${G} {
          background-color: ${e=>e.theme.colors.primary200};
        }
      }

      & > ${to} > button {
        color: ${e=>e.theme.colors.primary600};
      }
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`,C=l.forwardRef((e,n)=>o.jsx(rr,{ref:n,...e})),er=Fe`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`,or=Fe`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`,rr=R(Jo)`
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${er} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }

    &[data-state='closed'] {
      animation: ${or} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }
  }
`;_.__docgenInfo={description:"",methods:[],displayName:"Root",props:{size:{defaultValue:{value:"'S'",computed:!1},required:!1}}};$.__docgenInfo={description:"",methods:[],displayName:"Item"};x.__docgenInfo={description:"",methods:[],displayName:"Header",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:'@default "primary"',defaultValue:{value:"'primary'",computed:!1}}},composes:["Omit"]};T.__docgenInfo={description:"",methods:[],displayName:"Trigger",props:{caretPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:'@default "left"',defaultValue:{value:"'left'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType<React.SVGProps<SVGSVGElement>>",elements:[{name:"ReactSVGProps",raw:"React.SVGProps<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]}]},description:""},iconProps:{required:!1,tsType:{name:"ReactSVGProps",raw:"React.SVGProps<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]},description:""}},composes:["Omit"]};io.__docgenInfo={description:"",methods:[],displayName:"Actions",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:`| {
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
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}}]}},{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}]},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"Content"};const{fn:oe}=__STORYBOOK_MODULE_TEST__,nr={title:"Components/Accordion",render:({caretPosition:e,description:n,title:r,...i})=>o.jsx(_,{...i,children:o.jsxs($,{value:"acc-01",children:[o.jsx(x,{children:o.jsx(T,{icon:po,description:n,caretPosition:e,children:r})}),o.jsx(C,{children:o.jsx(y,{display:"block",padding:4,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})}),parameters:{docs:{source:{code:v`
        <Accordion.Root>
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger description="Your personal information">
                User information
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>`}},chromatic:{disableSnapshot:!1}}},m={argTypes:{caretPosition:{control:"radio",options:["left","right"]},size:{control:"radio",options:["S","M"]},variant:{control:"radio",options:["primary","secondary"]}},args:{caretPosition:"left",description:"Your personal information",disabled:!1,onValueChange:oe(),size:"S",title:"User information",variant:"primary"},name:"base"},H={...m,args:{...m.args,variant:"secondary"},name:"secondary variant",parameters:{docs:{source:{code:v`
        <Accordion.Root variant="secondary">
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger description="Your personal information">
                User information
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>`}}}},E={...m,args:{...m.args,disabled:!0},name:"disabled",parameters:{docs:{source:{code:v`
        <Accordion.Root disabled>
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger description="Your personal information">
                User information
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>`}}}},B={...m,args:{...m.args,defaultValue:"acc-01"},name:"expanded",parameters:{docs:{source:{code:v`
        <Accordion.Root defaultValue="acc-01">
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger description="Your personal information">
                User information
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>`}}}},L={...m,args:{...m.args,size:"M"},name:"medium size",parameters:{docs:{source:{code:v`
        <Accordion.Root size="M">
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger description="Your personal information">
                User information
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>`}}}},M={...m,args:{...m.args,caretPosition:"right"},name:"caret right aligned",parameters:{docs:{source:{code:v`
        <Accordion.Root>
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger description="Your personal information" caretPosition="right">
                User information
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>`}}}},D={...m,render:({caretPosition:e,description:n,title:r,...i})=>o.jsx(_,{...i,children:o.jsxs($,{value:"acc-01",children:[o.jsx(x,{children:o.jsx(T,{icon:uo,description:n,caretPosition:e,children:r})}),o.jsx(C,{children:o.jsx(y,{display:"block",padding:4,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})}),name:"with icon",parameters:{docs:{source:{code:v`
        import { User } from '@strapi/icons';

        <Accordion.Root>
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger icon={User} description="Your personal information" caretPosition="right">
                User information
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>`}}}},U={...m,args:{...m.args,duplicateOnClick:oe(),deleteOnClick:oe()},render:({caretPosition:e,description:n,title:r,duplicateOnClick:i,deleteOnClick:a,...t})=>o.jsx(_,{...t,children:o.jsxs($,{value:"acc-01",children:[o.jsxs(x,{children:[o.jsx(T,{description:n,caretPosition:e,children:r}),o.jsxs(io,{children:[o.jsx(me,{withTooltip:!1,label:"Duplicate record",onClick:i,children:o.jsx(go,{})}),o.jsx(me,{withTooltip:!1,label:"Delete record",onClick:a,children:o.jsx(fo,{})})]})]}),o.jsx(C,{children:o.jsx(y,{display:"block",padding:4,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})}),name:"with actions",parameters:{docs:{source:{code:v`
        import { Duplicate, Trash } from '@strapi/icons';
        import { IconButton } from '@strapi/design-system';
        
        <Accordion.Root>
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger description="Your personal information">
                User information
              </Accordion.Trigger>
              <Accordion.Actions>
                <IconButton aria-label="Duplicate record" onClick={() => {}}>
                  <Duplicate />
                </IconButton>
                <IconButton aria-label="Delete record" onClick={() => {}}>
                  <Trash />
                </IconButton>
              </Accordion.Actions>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>`}}}},O={...m,render:({...e})=>o.jsxs(_,{...e,children:[o.jsxs($,{value:"acc-01",children:[o.jsx(x,{children:o.jsx(T,{children:"Ted Lasso"})}),o.jsx(C,{children:o.jsx(y,{display:"block",padding:4,children:"My name is Ted Lasso"})})]}),o.jsxs($,{value:"acc-02",children:[o.jsx(x,{children:o.jsx(T,{children:"Coach Beard"})}),o.jsx(C,{children:o.jsx(y,{display:"block",padding:4,children:"My name is Coach."})})]}),o.jsxs($,{value:"acc-03",children:[o.jsx(x,{children:o.jsx(T,{children:"Jamie Tart"})}),o.jsx(C,{children:o.jsx(y,{display:"block",padding:4,children:"My name is Jamie Tartt (Doo-Doo-Doo-Doo-Doo)"})})]}),o.jsxs($,{value:"acc-04",children:[o.jsx(x,{children:o.jsx(T,{children:"Nate"})}),o.jsx(C,{children:o.jsx(y,{display:"block",padding:4,children:"My name is Nate"})})]})]}),name:"group",parameters:{docs:{source:{code:v`
        <Accordion.Root>
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger>Ted Lasso</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                My name is Ted Lasso
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="acc-02">
            <Accordion.Header>
              <Accordion.Trigger>Coach Beard</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                My name is Coach.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="acc-03">
            <Accordion.Header>
              <Accordion.Trigger>Jamie Tart</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                My name is Jamie Tart
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="acc-04">
            <Accordion.Header>
              <Accordion.Trigger>Nate</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                My name is Nate
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>`}}}},V={...m,render:({...e})=>o.jsxs(ho,{children:[o.jsx(yo,{children:"Coaches"}),o.jsxs(_,{...e,children:[o.jsxs($,{value:"acc-01",children:[o.jsx(x,{children:o.jsx(T,{children:"Ted Lasso"})}),o.jsx(C,{children:o.jsx(y,{display:"block",padding:4,children:"My name is Ted Lasso"})})]}),o.jsxs($,{value:"acc-02",children:[o.jsx(x,{children:o.jsx(T,{children:"Coach Beard"})}),o.jsx(C,{children:o.jsx(y,{display:"block",padding:4,children:"My name is Coach."})})]})]})]}),name:"with label",parameters:{docs:{source:{code:v`
          <Field.Root>
            <Field.Label>Coaches</Field.Label>
            <Accordion.Root>
              <Accordion.Item value="acc-01">
                <Accordion.Header>
                  <Accordion.Trigger>Ted Lasso</Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <Typography display="block" padding={4}>
                    My name is Ted Lasso
                  </Typography>
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="acc-02">
                <Accordion.Header>
                  <Accordion.Trigger>Coach Beard</Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <Typography display="block" padding={4}>
                    My name is Coach.
                  </Typography>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </Field.Root>
        `}}}};var ue,ge,fe;m.parameters={...m.parameters,docs:{...(ue=m.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  argTypes: {
    caretPosition: {
      control: 'radio',
      options: ['left', 'right']
    },
    size: {
      control: 'radio',
      options: ['S', 'M']
    },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary']
    }
  },
  args: {
    caretPosition: 'left',
    description: 'Your personal information',
    disabled: false,
    onValueChange: fn(),
    size: 'S',
    title: 'User information',
    variant: 'primary'
  },
  name: 'base'
} satisfies Story`,...(fe=(ge=m.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var Ae,be,he;H.parameters={...H.parameters,docs:{...(Ae=H.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  ...Base,
  args: {
    ...Base.args,
    variant: 'secondary'
  },
  name: 'secondary variant',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Accordion.Root variant="secondary">
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger description="Your personal information">
                User information
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>\`
      }
    }
  }
} satisfies Story`,...(he=(be=H.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ye,$e,Te;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  ...Base,
  args: {
    ...Base.args,
    disabled: true
  },
  name: 'disabled',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Accordion.Root disabled>
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger description="Your personal information">
                User information
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>\`
      }
    }
  }
} satisfies Story`,...(Te=($e=E.parameters)==null?void 0:$e.docs)==null?void 0:Te.source}}};var xe,Ce,ve;B.parameters={...B.parameters,docs:{...(xe=B.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  ...Base,
  args: {
    ...Base.args,
    defaultValue: 'acc-01'
  },
  name: 'expanded',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Accordion.Root defaultValue="acc-01">
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger description="Your personal information">
                User information
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>\`
      }
    }
  }
} satisfies Story`,...(ve=(Ce=B.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var Ie,Re,Se;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  ...Base,
  args: {
    ...Base.args,
    size: 'M'
  },
  name: 'medium size',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Accordion.Root size="M">
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger description="Your personal information">
                User information
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>\`
      }
    }
  }
} satisfies Story`,...(Se=(Re=L.parameters)==null?void 0:Re.docs)==null?void 0:Se.source}}};var ke,qe,we;M.parameters={...M.parameters,docs:{...(ke=M.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  ...Base,
  args: {
    ...Base.args,
    caretPosition: 'right'
  },
  name: 'caret right aligned',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Accordion.Root>
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger description="Your personal information" caretPosition="right">
                User information
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>\`
      }
    }
  }
} satisfies Story`,...(we=(qe=M.parameters)==null?void 0:qe.docs)==null?void 0:we.source}}};var je,_e,Pe;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`{
  ...Base,
  render: ({
    caretPosition,
    description,
    title,
    ...args
  }) => {
    return <Accordion.Root {...args}>\r
        <Accordion.Item value="acc-01">\r
          <Accordion.Header>\r
            <Accordion.Trigger icon={User} description={description} caretPosition={caretPosition}>\r
              {title}\r
            </Accordion.Trigger>\r
          </Accordion.Header>\r
          <Accordion.Content>\r
            <Typography display="block" padding={4}>\r
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\r
              ea commodo consequat.\r
            </Typography>\r
          </Accordion.Content>\r
        </Accordion.Item>\r
      </Accordion.Root>;
  },
  name: 'with icon',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        import { User } from '@strapi/icons';

        <Accordion.Root>
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger icon={User} description="Your personal information" caretPosition="right">
                User information
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>\`
      }
    }
  }
} satisfies Story`,...(Pe=(_e=D.parameters)==null?void 0:_e.docs)==null?void 0:Pe.source}}};var He,Ee,Be;U.parameters={...U.parameters,docs:{...(He=U.parameters)==null?void 0:He.docs,source:{originalSource:`{
  ...Base,
  args: {
    ...Base.args,
    duplicateOnClick: fn(),
    deleteOnClick: fn()
  },
  render: ({
    caretPosition,
    description,
    title,
    duplicateOnClick,
    deleteOnClick,
    ...args
  }) => {
    return <Accordion.Root {...args}>\r
        <Accordion.Item value="acc-01">\r
          <Accordion.Header>\r
            <Accordion.Trigger description={description} caretPosition={caretPosition}>\r
              {title}\r
            </Accordion.Trigger>\r
            <Accordion.Actions>\r
              <IconButton withTooltip={false} label="Duplicate record" onClick={duplicateOnClick}>\r
                <Duplicate />\r
              </IconButton>\r
              <IconButton withTooltip={false} label="Delete record" onClick={deleteOnClick}>\r
                <Trash />\r
              </IconButton>\r
            </Accordion.Actions>\r
          </Accordion.Header>\r
          <Accordion.Content>\r
            <Typography display="block" padding={4}>\r
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\r
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\r
              ea commodo consequat.\r
            </Typography>\r
          </Accordion.Content>\r
        </Accordion.Item>\r
      </Accordion.Root>;
  },
  name: 'with actions',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        import { Duplicate, Trash } from '@strapi/icons';
        import { IconButton } from '@strapi/design-system';
        
        <Accordion.Root>
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger description="Your personal information">
                User information
              </Accordion.Trigger>
              <Accordion.Actions>
                <IconButton aria-label="Duplicate record" onClick={() => {}}>
                  <Duplicate />
                </IconButton>
                <IconButton aria-label="Delete record" onClick={() => {}}>
                  <Trash />
                </IconButton>
              </Accordion.Actions>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                ea commodo consequat.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>\`
      }
    }
  }
} satisfies StoryObj<Accordion.Props & Pick<Accordion.TriggerProps, 'caretPosition' | 'description' | 'title'> & {
  duplicateOnClick: () => void;
  deleteOnClick: () => void;
}>`,...(Be=(Ee=U.parameters)==null?void 0:Ee.docs)==null?void 0:Be.source}}};var Le,Me,De;O.parameters={...O.parameters,docs:{...(Le=O.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  ...Base,
  render: ({
    ...args
  }) => {
    return <Accordion.Root {...args}>\r
        <Accordion.Item value="acc-01">\r
          <Accordion.Header>\r
            <Accordion.Trigger>Ted Lasso</Accordion.Trigger>\r
          </Accordion.Header>\r
          <Accordion.Content>\r
            <Typography display="block" padding={4}>\r
              My name is Ted Lasso\r
            </Typography>\r
          </Accordion.Content>\r
        </Accordion.Item>\r
        <Accordion.Item value="acc-02">\r
          <Accordion.Header>\r
            <Accordion.Trigger>Coach Beard</Accordion.Trigger>\r
          </Accordion.Header>\r
          <Accordion.Content>\r
            <Typography display="block" padding={4}>\r
              My name is Coach.\r
            </Typography>\r
          </Accordion.Content>\r
        </Accordion.Item>\r
        <Accordion.Item value="acc-03">\r
          <Accordion.Header>\r
            <Accordion.Trigger>Jamie Tart</Accordion.Trigger>\r
          </Accordion.Header>\r
          <Accordion.Content>\r
            <Typography display="block" padding={4}>\r
              My name is Jamie Tartt (Doo-Doo-Doo-Doo-Doo)\r
            </Typography>\r
          </Accordion.Content>\r
        </Accordion.Item>\r
        <Accordion.Item value="acc-04">\r
          <Accordion.Header>\r
            <Accordion.Trigger>Nate</Accordion.Trigger>\r
          </Accordion.Header>\r
          <Accordion.Content>\r
            <Typography display="block" padding={4}>\r
              My name is Nate\r
            </Typography>\r
          </Accordion.Content>\r
        </Accordion.Item>\r
      </Accordion.Root>;
  },
  name: 'group',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Accordion.Root>
          <Accordion.Item value="acc-01">
            <Accordion.Header>
              <Accordion.Trigger>Ted Lasso</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                My name is Ted Lasso
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="acc-02">
            <Accordion.Header>
              <Accordion.Trigger>Coach Beard</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                My name is Coach.
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="acc-03">
            <Accordion.Header>
              <Accordion.Trigger>Jamie Tart</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                My name is Jamie Tart
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="acc-04">
            <Accordion.Header>
              <Accordion.Trigger>Nate</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              <Typography display="block" padding={4}>
                My name is Nate
              </Typography>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>\`
      }
    }
  }
} satisfies StoryObj`,...(De=(Me=O.parameters)==null?void 0:Me.docs)==null?void 0:De.source}}};var Ue,Oe,Ve;V.parameters={...V.parameters,docs:{...(Ue=V.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  ...Base,
  render: ({
    ...args
  }) => {
    return <Field.Root>\r
        <Field.Label>Coaches</Field.Label>\r
        <Accordion.Root {...args}>\r
          <Accordion.Item value="acc-01">\r
            <Accordion.Header>\r
              <Accordion.Trigger>Ted Lasso</Accordion.Trigger>\r
            </Accordion.Header>\r
            <Accordion.Content>\r
              <Typography display="block" padding={4}>\r
                My name is Ted Lasso\r
              </Typography>\r
            </Accordion.Content>\r
          </Accordion.Item>\r
          <Accordion.Item value="acc-02">\r
            <Accordion.Header>\r
              <Accordion.Trigger>Coach Beard</Accordion.Trigger>\r
            </Accordion.Header>\r
            <Accordion.Content>\r
              <Typography display="block" padding={4}>\r
                My name is Coach.\r
              </Typography>\r
            </Accordion.Content>\r
          </Accordion.Item>\r
        </Accordion.Root>\r
      </Field.Root>;
  },
  name: 'with label',
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Field.Root>
            <Field.Label>Coaches</Field.Label>
            <Accordion.Root>
              <Accordion.Item value="acc-01">
                <Accordion.Header>
                  <Accordion.Trigger>Ted Lasso</Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <Typography display="block" padding={4}>
                    My name is Ted Lasso
                  </Typography>
                </Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value="acc-02">
                <Accordion.Header>
                  <Accordion.Trigger>Coach Beard</Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <Typography display="block" padding={4}>
                    My name is Coach.
                  </Typography>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </Field.Root>
        \`
      }
    }
  }
} satisfies StoryObj`,...(Ve=(Oe=V.parameters)==null?void 0:Oe.docs)==null?void 0:Ve.source}}};const ir=["Base","Secondary","Disabled","Expanded","SizeMedium","RightAlignedCaret","WithIcon","WithActions","Group","WithLabel"],pr=Object.freeze(Object.defineProperty({__proto__:null,Base:m,Disabled:E,Expanded:B,Group:O,RightAlignedCaret:M,Secondary:H,SizeMedium:L,WithActions:U,WithIcon:D,WithLabel:V,__namedExportsOrder:ir,default:nr},Symbol.toStringTag,{value:"Module"}));export{pr as A,m as B,E as D,B as E,O as G,x as H,M as R,H as S,T,D as W,L as a,U as b,V as c,_ as d};
