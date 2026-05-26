import{r as o,aL as $e,D as Ie,aM as _e,$ as je,x as Fe,d as Pe,y as Ke,_ as x,z as W,aN as Le,a8 as Ce,aI as Ne,g as We,aJ as Ge,aO as Je,j as p,c as Z,ad as _,p as q,T as ye}from"./iframe-_cKE9r89.js";import{d as U}from"./index-BxBVU389.js";import{c as ze,a as He,b as Ve,d as E,z as Ye,f as Xe,s as Ze,e as qe,g as Ue,h as Qe,$ as et,i as tt}from"./index-JVGtNO81.js";import{u as rt,s as oe}from"./useIntersection-BvDycFkB.js";import{u as ot}from"./useComposeRefs-BPjCxrPe.js";import{u as nt}from"./useId-BMWvqHJO.js";import{S as at}from"./ScrollArea-E5LdgMvt.js";import{B as V}from"./Button-BvqyPouE.js";import{R as ne,L as ae,I as ce}from"./Field-Cwhta1v_.js";var ct=function(e){if(typeof document>"u")return null;var r=Array.isArray(e)?e[0]:e;return r.ownerDocument.body},O=new WeakMap,j=new WeakMap,F={},z=0,Re=function(e){return e&&(e.host||Re(e.parentNode))},st=function(e,r){return r.map(function(t){if(e.contains(t))return t;var n=Re(t);return n&&e.contains(n)?n:(console.error("aria-hidden",t,"in not contained inside",e,". Doing nothing"),null)}).filter(function(t){return!!t})},it=function(e,r,t,n){var s=st(r,Array.isArray(e)?e:[e]);F[t]||(F[t]=new WeakMap);var c=F[t],i=[],a=new Set,v=new Set(s),m=function(u){!u||a.has(u)||(a.add(u),m(u.parentNode))};s.forEach(m);var g=function(u){!u||v.has(u)||Array.prototype.forEach.call(u.children,function(d){if(a.has(d))g(d);else try{var h=d.getAttribute(n),C=h!==null&&h!=="false",l=(O.get(d)||0)+1,f=(c.get(d)||0)+1;O.set(d,l),c.set(d,f),i.push(d),l===1&&C&&j.set(d,!0),f===1&&d.setAttribute(t,"true"),C||d.setAttribute(n,"true")}catch($){console.error("aria-hidden: cannot operate on ",d,$)}})};return g(r),a.clear(),z++,function(){i.forEach(function(u){var d=O.get(u)-1,h=c.get(u)-1;O.set(u,d),c.set(u,h),d||(j.has(u)||u.removeAttribute(n),j.delete(u)),h||u.removeAttribute(t)}),z--,z||(O=new WeakMap,O=new WeakMap,j=new WeakMap,F={})}},lt=function(e,r,t){t===void 0&&(t="data-aria-hidden");var n=Array.from(Array.isArray(e)?e:[e]),s=ct(e);return s?(n.push.apply(n,Array.from(s.querySelectorAll("[aria-live], script"))),it(n,s,t,"aria-hidden")):function(){return null}},xe=ze(),H=function(){},G=o.forwardRef(function(e,r){var t=o.useRef(null),n=o.useState({onScrollCapture:H,onWheelCapture:H,onTouchMoveCapture:H}),s=n[0],c=n[1],i=e.forwardProps,a=e.children,v=e.className,m=e.removeScrollBar,g=e.enabled,u=e.shards,d=e.sideCar,h=e.noIsolation,C=e.inert,l=e.allowPinchZoom,f=e.as,$=f===void 0?"div":f,y=He(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),P=d,R=Ve([t,r]),b=E(E({},y),s);return o.createElement(o.Fragment,null,g&&o.createElement(P,{sideCar:xe,removeScrollBar:m,shards:u,noIsolation:h,inert:C,setCallbacks:c,allowPinchZoom:!!l,lockRef:t}),i?o.cloneElement(o.Children.only(a),E(E({},b),{ref:R})):o.createElement($,E({},b,{className:v,ref:R}),a))});G.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};G.classNames={fullWidth:Xe,zeroRight:Ye};var Y=!1;if(typeof window<"u")try{var K=Object.defineProperty({},"passive",{get:function(){return Y=!0,!0}});window.addEventListener("test",K,K),window.removeEventListener("test",K,K)}catch{Y=!1}var S=Y?{passive:!1}:!1,ut=function(e){return e.tagName==="TEXTAREA"},Oe=function(e,r){var t=window.getComputedStyle(e);return t[r]!=="hidden"&&!(t.overflowY===t.overflowX&&!ut(e)&&t[r]==="visible")},dt=function(e){return Oe(e,"overflowY")},ft=function(e){return Oe(e,"overflowX")},se=function(e,r){var t=r;do{typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&(t=t.host);var n=Se(e,t);if(n){var s=we(e,t),c=s[1],i=s[2];if(c>i)return!0}t=t.parentNode}while(t&&t!==document.body);return!1},pt=function(e){var r=e.scrollTop,t=e.scrollHeight,n=e.clientHeight;return[r,t,n]},vt=function(e){var r=e.scrollLeft,t=e.scrollWidth,n=e.clientWidth;return[r,t,n]},Se=function(e,r){return e==="v"?dt(r):ft(r)},we=function(e,r){return e==="v"?pt(r):vt(r)},mt=function(e,r){return e==="h"&&r==="rtl"?-1:1},ht=function(e,r,t,n,s){var c=mt(e,window.getComputedStyle(r).direction),i=c*n,a=t.target,v=r.contains(a),m=!1,g=i>0,u=0,d=0;do{var h=we(e,a),C=h[0],l=h[1],f=h[2],$=l-f-c*C;(C||$)&&Se(e,a)&&(u+=$,d+=C),a=a.parentNode}while(!v&&a!==document.body||v&&(r.contains(a)||r===a));return(g&&u===0||!g&&d===0)&&(m=!0),m},L=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ie=function(e){return[e.deltaX,e.deltaY]},le=function(e){return e&&"current"in e?e.current:e},gt=function(e,r){return e[0]===r[0]&&e[1]===r[1]},bt=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},$t=0,w=[];function Pt(e){var r=o.useRef([]),t=o.useRef([0,0]),n=o.useRef(),s=o.useState($t++)[0],c=o.useState(function(){return Ze()})[0],i=o.useRef(e);o.useEffect(function(){i.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(s));var l=qe([e.lockRef.current],(e.shards||[]).map(le),!0).filter(Boolean);return l.forEach(function(f){return f.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),l.forEach(function(f){return f.classList.remove("allow-interactivity-".concat(s))})}}},[e.inert,e.lockRef.current,e.shards]);var a=o.useCallback(function(l,f){if("touches"in l&&l.touches.length===2)return!i.current.allowPinchZoom;var $=L(l),y=t.current,P="deltaX"in l?l.deltaX:y[0]-$[0],R="deltaY"in l?l.deltaY:y[1]-$[1],b,J=l.target,A=Math.abs(P)>Math.abs(R)?"h":"v";if("touches"in l&&A==="h"&&J.type==="range")return!1;var I=se(A,J);if(!I)return!0;if(I?b=A:(b=A==="v"?"h":"v",I=se(A,J)),!I)return!1;if(!n.current&&"changedTouches"in l&&(P||R)&&(n.current=b),!b)return!0;var re=n.current||b;return ht(re,f,l,re==="h"?P:R)},[]),v=o.useCallback(function(l){var f=l;if(!(!w.length||w[w.length-1]!==c)){var $="deltaY"in f?ie(f):L(f),y=r.current.filter(function(b){return b.name===f.type&&b.target===f.target&&gt(b.delta,$)})[0];if(y&&y.should){f.cancelable&&f.preventDefault();return}if(!y){var P=(i.current.shards||[]).map(le).filter(Boolean).filter(function(b){return b.contains(f.target)}),R=P.length>0?a(f,P[0]):!i.current.noIsolation;R&&f.cancelable&&f.preventDefault()}}},[]),m=o.useCallback(function(l,f,$,y){var P={name:l,delta:f,target:$,should:y};r.current.push(P),setTimeout(function(){r.current=r.current.filter(function(R){return R!==P})},1)},[]),g=o.useCallback(function(l){t.current=L(l),n.current=void 0},[]),u=o.useCallback(function(l){m(l.type,ie(l),l.target,a(l,e.lockRef.current))},[]),d=o.useCallback(function(l){m(l.type,L(l),l.target,a(l,e.lockRef.current))},[]);o.useEffect(function(){return w.push(c),e.setCallbacks({onScrollCapture:u,onWheelCapture:u,onTouchMoveCapture:d}),document.addEventListener("wheel",v,S),document.addEventListener("touchmove",v,S),document.addEventListener("touchstart",g,S),function(){w=w.filter(function(l){return l!==c}),document.removeEventListener("wheel",v,S),document.removeEventListener("touchmove",v,S),document.removeEventListener("touchstart",g,S)}},[]);var h=e.removeScrollBar,C=e.inert;return o.createElement(o.Fragment,null,C?o.createElement(c,{styles:bt(s)}):null,h?o.createElement(Ue,{gapMode:"margin"}):null)}const Ct=Qe(xe,Pt);var Ee=o.forwardRef(function(e,r){return o.createElement(G,E({},e,{ref:r,sideCar:Ct}))});Ee.classNames=G.classNames;const Te="Popover",[Ae,Zt]=je(Te,[$e]),Q=$e(),[yt,T]=Ae(Te),Rt=e=>{const{__scopePopover:r,children:t,open:n,defaultOpen:s,onOpenChange:c,modal:i=!1}=e,a=Q(r),v=o.useRef(null),[m,g]=o.useState(!1),[u=!1,d]=Ie({prop:n,defaultProp:s,onChange:c});return o.createElement(_e,a,o.createElement(yt,{scope:r,contentId:Fe(),triggerRef:v,open:u,onOpenChange:d,onOpenToggle:o.useCallback(()=>d(h=>!h),[d]),hasCustomAnchor:m,onCustomAnchorAdd:o.useCallback(()=>g(!0),[]),onCustomAnchorRemove:o.useCallback(()=>g(!1),[]),modal:i},t))},xt="PopoverTrigger",Ot=o.forwardRef((e,r)=>{const{__scopePopover:t,...n}=e,s=T(xt,t),c=Q(t),i=Pe(r,s.triggerRef),a=o.createElement(Ke.button,x({type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":ke(s.open)},n,{ref:i,onClick:W(e.onClick,s.onOpenToggle)}));return s.hasCustomAnchor?a:o.createElement(Le,x({asChild:!0},c),a)}),Me="PopoverPortal",[St,wt]=Ae(Me,{forceMount:void 0}),Et=e=>{const{__scopePopover:r,forceMount:t,children:n,container:s}=e,c=T(Me,r);return o.createElement(St,{scope:r,forceMount:t},o.createElement(Ce,{present:t||c.open},o.createElement(Ne,{asChild:!0,container:s},n)))},D="PopoverContent",Tt=o.forwardRef((e,r)=>{const t=wt(D,e.__scopePopover),{forceMount:n=t.forceMount,...s}=e,c=T(D,e.__scopePopover);return o.createElement(Ce,{present:n||c.open},c.modal?o.createElement(At,x({},s,{ref:r})):o.createElement(Mt,x({},s,{ref:r})))}),At=o.forwardRef((e,r)=>{const t=T(D,e.__scopePopover),n=o.useRef(null),s=Pe(r,n),c=o.useRef(!1);return o.useEffect(()=>{const i=n.current;if(i)return lt(i)},[]),o.createElement(Ee,{as:We,allowPinchZoom:!0},o.createElement(Be,x({},e,{ref:s,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:W(e.onCloseAutoFocus,i=>{var a;i.preventDefault(),c.current||(a=t.triggerRef.current)===null||a===void 0||a.focus()}),onPointerDownOutside:W(e.onPointerDownOutside,i=>{const a=i.detail.originalEvent,v=a.button===0&&a.ctrlKey===!0,m=a.button===2||v;c.current=m},{checkForDefaultPrevented:!1}),onFocusOutside:W(e.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1})})))}),Mt=o.forwardRef((e,r)=>{const t=T(D,e.__scopePopover),n=o.useRef(!1),s=o.useRef(!1);return o.createElement(Be,x({},e,{ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:c=>{var i;if((i=e.onCloseAutoFocus)===null||i===void 0||i.call(e,c),!c.defaultPrevented){var a;n.current||(a=t.triggerRef.current)===null||a===void 0||a.focus(),c.preventDefault()}n.current=!1,s.current=!1},onInteractOutside:c=>{var i,a;(i=e.onInteractOutside)===null||i===void 0||i.call(e,c),c.defaultPrevented||(n.current=!0,c.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const v=c.target;((a=t.triggerRef.current)===null||a===void 0?void 0:a.contains(v))&&c.preventDefault(),c.detail.originalEvent.type==="focusin"&&s.current&&c.preventDefault()}}))}),Be=o.forwardRef((e,r)=>{const{__scopePopover:t,trapFocus:n,onOpenAutoFocus:s,onCloseAutoFocus:c,disableOutsidePointerEvents:i,onEscapeKeyDown:a,onPointerDownOutside:v,onFocusOutside:m,onInteractOutside:g,...u}=e,d=T(D,t),h=Q(t);return et(),o.createElement(tt,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:s,onUnmountAutoFocus:c},o.createElement(Ge,{asChild:!0,disableOutsidePointerEvents:i,onInteractOutside:g,onEscapeKeyDown:a,onPointerDownOutside:v,onFocusOutside:m,onDismiss:()=>d.onOpenChange(!1)},o.createElement(Je,x({"data-state":ke(d.open),role:"dialog",id:d.contentId},h,u,{ref:r,style:{...u.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))});function ke(e){return e?"open":"closed"}const Bt=Rt,kt=Ot,Dt=Et,It=Tt,X=Bt,ee=o.forwardRef((e,r)=>p.jsx(kt,{...e,asChild:!0,ref:r})),te=o.forwardRef((e,r)=>p.jsx(Dt,{children:p.jsx(_t,{sideOffset:4,side:"bottom",align:"start",...e,ref:r})})),_t=q(It)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  background-color: ${e=>e.theme.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${_.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${_.slideDownIn};
      }
    }

    &[data-state='closed'] {
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};

      &[data-side='top'] {
        animation-name: ${_.slideUpOut};
      }

      &[data-side='bottom'] {
        animation-name: ${_.slideDownOut};
      }
    }
  }
`,De=o.forwardRef(({children:e,intersectionId:r,onReachEnd:t,...n},s)=>{const c=o.useRef(null),i=ot(c,s),a=nt();return rt(c,t??(()=>{}),{selectorToWatch:`#${oe(a)}`,skipWhen:!r||!t}),p.jsxs(jt,{ref:i,...n,children:[e,r&&t&&p.jsx(Z,{id:oe(a),width:"100%",height:"1px"})]})}),jt=q(at)`
  height: 20rem;
`;ee.__docgenInfo={description:"",methods:[],displayName:"Trigger",composes:["Omit"]};te.__docgenInfo={description:"",methods:[],displayName:"Content"};De.__docgenInfo={description:"",methods:[],displayName:"ScrollAreaImpl",props:{viewportRef:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ScrollAreaViewportElement>",elements:[{name:"HTMLDivElement"}]},description:`@description This ref is attatched specifically to the viewport,
not the container of the viewport & scrollbars.`},intersectionId:{required:!1,tsType:{name:"string"},description:""},onReachEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(entry: IntersectionObserverEntry) => void",signature:{arguments:[{type:{name:"IntersectionObserverEntry"},name:"entry"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const{fn:N}=__STORYBOOK_MODULE_TEST__,Ft={title:"Components/Popover",component:X,argTypes:{align:{control:"select",options:["start","center","end"]},side:{control:"select",options:["left","right","top","bottom"]}},args:{onOpenChange:N(),side:"bottom",align:"start",sideOffset:4,alignOffset:0,onEscapeKeyDown:N(),onInteractOutside:N(),onPointerDownOutside:N()},parameters:{chromatic:{disableSnapshot:!1},docs:{source:{code:U`
          <Popover.Root>
            <Popover.Trigger>
              <Button>click me!</Button>
            </Popover.Trigger>
            <Popover.Content>
              Popover content
            </Popover.Content>
          </Popover.Root>
        `}}},render:({side:e,align:r,sideOffset:t,alignOffset:n,onEscapeKeyDown:s,onInteractOutside:c,onPointerDownOutside:i,...a})=>p.jsxs(X,{...a,children:[p.jsx(ee,{children:p.jsx(V,{children:"Enter"})}),p.jsx(te,{side:e,align:r,sideOffset:t,alignOffset:n,onEscapeKeyDown:s,onInteractOutside:c,onPointerDownOutside:i,children:p.jsxs(Z,{padding:4,children:[p.jsx(ye,{fontWeight:"bold",marginBottom:2,tag:"legend",children:"Fill in your details and win a prize!"}),p.jsxs(Kt,{action:"#",onSubmit:v=>v.preventDefault(),children:[p.jsxs(ne,{children:[p.jsx(ae,{children:"Name"}),p.jsx(ce,{})]}),p.jsxs(ne,{children:[p.jsx(ae,{children:"Email"}),p.jsx(ce,{type:"email"})]}),p.jsx(V,{justifyContent:"center",type:"submit",variant:"secondary",children:"Submit"})]})]})})]})},Kt=q.form`
  border: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`,M={name:"base"},B={name:"controlled",args:{open:!0},parameters:{docs:{source:{code:U`
          const [isOpen, setIsOpen] = React.useState(true);

          return (
            <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
              <Popover.Trigger>
                <Button>click me!</Button>
              </Popover.Trigger>
              <Popover.Content>
                Popover content
              </Popover.Content>
            </Popover.Root>
          );
        `}}}},k={name:"constrained size",parameters:{docs:{source:{code:U`
          <Popover.Root>
            <Popover.Trigger>
              <Button>click me!</Button>
            </Popover.Trigger>
            <Popover.Content>
              <Popover.ScrollArea>
                <Box tag="ul" padding={1}>
                  {[
                    "1 Tom O'Brien (GK)",
                    '2 Arlo Dixon',
                    '4 Tommy Winchester',
                    '5 Isaac McAdoo (Captain)',
                    '7 Kukoč',
                    '8 Richard Montlaur',
                    '9 Jamie Tartt',
                    '12 Colin Hughes',
                    '13 Jan Maas',
                    '14 Dani Rojas',
                    '16 Robbie Roberts',
                    '17 Jeff Goodman',
                    '18 Babatunde',
                    '19 Declan Cockburn',
                    '20 Paul Reynolds',
                    '21 Moe Bumbercatch',
                    '22 Martin De Maat (GK)',
                    '24 Sam Obisanya (Vice Captain)',
                    '28 Kyle McCracken',
                    '28 Bhargava',
                    '33 Anders Rosenfeldt',
                  ].map((player) => (
                    <Typography
                      key={player}
                      variant="omega"
                      tag="li"
                      paddingLeft={4}
                      paddingRight={4}
                      paddingTop={2}
                      paddingBottom={2}
                    >
                      {player}
                    </Typography>
                  ))}
                </Box>
              </Popover.ScrollArea>
            </Popover.Content>
          </Popover.Root>
        `}}},render:({side:e,align:r,sideOffset:t,alignOffset:n,onEscapeKeyDown:s,onInteractOutside:c,onPointerDownOutside:i,...a})=>p.jsxs(X,{...a,children:[p.jsx(ee,{children:p.jsx(V,{children:"Players"})}),p.jsx(te,{side:e,align:r,sideOffset:t,alignOffset:n,onEscapeKeyDown:s,onInteractOutside:c,onPointerDownOutside:i,children:p.jsx(De,{children:p.jsx(Z,{tag:"ul",padding:1,children:["1 Tom O'Brien (GK)","2 Arlo Dixon","4 Tommy Winchester","5 Isaac McAdoo (Captain)","7 Kukoč","8 Richard Montlaur","9 Jamie Tartt","12 Colin Hughes","13 Jan Maas","14 Dani Rojas","16 Robbie Roberts","17 Jeff Goodman","18 Babatunde","19 Declan Cockburn","20 Paul Reynolds","21 Moe Bumbercatch","22 Martin De Maat (GK)","24 Sam Obisanya (Vice Captain)","28 Kyle McCracken","28 Bhargava","33 Anders Rosenfeldt"].map(v=>p.jsx(ye,{variant:"omega",tag:"li",paddingLeft:4,paddingRight:4,paddingTop:2,paddingBottom:2,children:v},v))})})})]})};var ue,de,fe;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'base'
} satisfies Story`,...(fe=(de=M.parameters)==null?void 0:de.docs)==null?void 0:fe.source}}};var pe,ve,me;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'controlled',
  args: {
    open: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          const [isOpen, setIsOpen] = React.useState(true);

          return (
            <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
              <Popover.Trigger>
                <Button>click me!</Button>
              </Popover.Trigger>
              <Popover.Content>
                Popover content
              </Popover.Content>
            </Popover.Root>
          );
        \`
      }
    }
  }
} satisfies Story`,...(me=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};var he,ge,be;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
  name: 'constrained size',
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Popover.Root>
            <Popover.Trigger>
              <Button>click me!</Button>
            </Popover.Trigger>
            <Popover.Content>
              <Popover.ScrollArea>
                <Box tag="ul" padding={1}>
                  {[
                    "1 Tom O'Brien (GK)",
                    '2 Arlo Dixon',
                    '4 Tommy Winchester',
                    '5 Isaac McAdoo (Captain)',
                    '7 Kukoč',
                    '8 Richard Montlaur',
                    '9 Jamie Tartt',
                    '12 Colin Hughes',
                    '13 Jan Maas',
                    '14 Dani Rojas',
                    '16 Robbie Roberts',
                    '17 Jeff Goodman',
                    '18 Babatunde',
                    '19 Declan Cockburn',
                    '20 Paul Reynolds',
                    '21 Moe Bumbercatch',
                    '22 Martin De Maat (GK)',
                    '24 Sam Obisanya (Vice Captain)',
                    '28 Kyle McCracken',
                    '28 Bhargava',
                    '33 Anders Rosenfeldt',
                  ].map((player) => (
                    <Typography
                      key={player}
                      variant="omega"
                      tag="li"
                      paddingLeft={4}
                      paddingRight={4}
                      paddingTop={2}
                      paddingBottom={2}
                    >
                      {player}
                    </Typography>
                  ))}
                </Box>
              </Popover.ScrollArea>
            </Popover.Content>
          </Popover.Root>
        \`
      }
    }
  },
  render: ({
    side,
    align,
    sideOffset,
    alignOffset,
    onEscapeKeyDown,
    onInteractOutside,
    onPointerDownOutside,
    ...args
  }) => {
    return <Popover.Root {...args}>\r
        <Popover.Trigger>\r
          <Button>Players</Button>\r
        </Popover.Trigger>\r
        <Popover.Content side={side} align={align} sideOffset={sideOffset} alignOffset={alignOffset} onEscapeKeyDown={onEscapeKeyDown} onInteractOutside={onInteractOutside} onPointerDownOutside={onPointerDownOutside}>\r
          <Popover.ScrollArea>\r
            <Box tag="ul" padding={1}>\r
              {["1 Tom O'Brien (GK)", '2 Arlo Dixon', '4 Tommy Winchester', '5 Isaac McAdoo (Captain)', '7 Kukoč', '8 Richard Montlaur', '9 Jamie Tartt', '12 Colin Hughes', '13 Jan Maas', '14 Dani Rojas', '16 Robbie Roberts', '17 Jeff Goodman', '18 Babatunde', '19 Declan Cockburn', '20 Paul Reynolds', '21 Moe Bumbercatch', '22 Martin De Maat (GK)', '24 Sam Obisanya (Vice Captain)', '28 Kyle McCracken', '28 Bhargava', '33 Anders Rosenfeldt'].map(player => <Typography key={player} variant="omega" tag="li" paddingLeft={4} paddingRight={4} paddingTop={2} paddingBottom={2}>\r
                  {player}\r
                </Typography>)}\r
            </Box>\r
          </Popover.ScrollArea>\r
        </Popover.Content>\r
      </Popover.Root>;
  }
} satisfies Story`,...(be=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};const Lt=["Base","Controlled","ConstrainedSize"],qt=Object.freeze(Object.defineProperty({__proto__:null,Base:M,ConstrainedSize:k,Controlled:B,__namedExportsOrder:Lt,default:Ft},Symbol.toStringTag,{value:"Module"}));export{M as B,k as C,qt as P,B as a};
