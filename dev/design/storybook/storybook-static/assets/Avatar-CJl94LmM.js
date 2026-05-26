import{r as a,$ as C,y as g,_ as b,k as E,af as v,j as s,ag as R,ah as M,T,ai as P,p as f,ad as k,n as x,c as O,aj as N,F}from"./iframe-_cKE9r89.js";import{u as G}from"./useControllableState-CIwy89gb.js";const A="Avatar",[V,se]=C(A),[q,w]=V(A),z=a.forwardRef((e,n)=>{const{__scopeAvatar:o,...t}=e,[r,c]=a.useState("idle");return a.createElement(q,{scope:o,imageLoadingStatus:r,onImageLoadingStatusChange:c},a.createElement(g.span,b({},t,{ref:n})))}),B="AvatarImage",U=a.forwardRef((e,n)=>{const{__scopeAvatar:o,src:t,onLoadingStatusChange:r=()=>{},...c}=e,d=w(B,o),i=K(t),l=E(p=>{r(p),d.onImageLoadingStatusChange(p)});return v(()=>{i!=="idle"&&l(i)},[i,l]),i==="loaded"?a.createElement(g.img,b({},c,{ref:n,src:t})):null}),W="AvatarFallback",D=a.forwardRef((e,n)=>{const{__scopeAvatar:o,delayMs:t,...r}=e,c=w(W,o),[d,i]=a.useState(t===void 0);return a.useEffect(()=>{if(t!==void 0){const l=window.setTimeout(()=>i(!0),t);return()=>window.clearTimeout(l)}},[t]),d&&c.imageLoadingStatus!=="loaded"?a.createElement(g.span,b({},r,{ref:n})):null});function K(e){const[n,o]=a.useState("idle");return v(()=>{if(!e){o("error");return}let t=!0;const r=new window.Image,c=d=>()=>{t&&o(d)};return o("loading"),r.onload=c("loaded"),r.onerror=c("error"),r.src=e,()=>{t=!1}},[e]),n}const Z=z,H=U,J=D,u=32,h=2,Q=a.forwardRef(({onLoadingStatusChange:e,delayMs:n=600,src:o,alt:t,fallback:r,preview:c=!1,...d},i)=>{const[l,p]=G({onChange:e}),[_,I]=a.useState(!1),$=c&&l==="loaded",L=j=>{$&&I(j)};return s.jsxs(R,{onOpenChange:L,children:[s.jsx(M,{asChild:!0,children:s.jsxs(m,{ref:i,...d,children:[$?s.jsx(X,{width:"100%",height:"100%",position:"absolute",background:"neutral0",zIndex:"overlay",style:{opacity:_?.4:0}}):null,s.jsx(Y,{src:o,alt:t,onLoadingStatusChange:p}),s.jsx(J,{delayMs:n,children:s.jsx(T,{fontWeight:"bold",textTransform:"uppercase",children:r})})]})}),$?s.jsx(P,{children:s.jsx(ee,{side:"top",sideOffset:4,children:s.jsx(te,{src:o,alt:t})})}):null]})}),S=x`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  overflow: hidden;
  border-radius: 50%;
`,y=x`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`,m=f(Z)`
  position: relative;
  z-index: 0;
  ${S}
  width: ${u/10}rem;
  height: ${u/10}rem;
  /* TODO: we should get the user email & hash it to turn it into a hex-value so different emails can consistently get a different background */
  background-color: ${e=>e.theme.colors.primary600};
  color: ${e=>e.theme.colors.neutral0};
`,X=f(O)`
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Y=f(H)`
  ${y}
`,ee=f(N)`
  ${S}
  width: ${u*h/10}rem;
  height: ${u*h/10}rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${k.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,te=f.img`
  ${y}
`,ae=a.forwardRef((e,n)=>s.jsx(oe,{...e,ref:n,tag:"div"})),oe=f(F)`
  & > ${m} + ${m} {
    margin-left: -${u/10/2}rem;
  }
`;Q.__docgenInfo={description:"",methods:[],displayName:"Item",props:{delayMs:{required:!1,tsType:{name:"Avatar.AvatarFallbackProps['delayMs']",raw:"Avatar.AvatarFallbackProps['delayMs']"},description:`@default 600
@description Useful for delaying rendering so it only
appears for those with slower connections.`,defaultValue:{value:"600",computed:!1}},fallback:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},preview:{required:!1,tsType:{name:"boolean"},description:`@default false
@description Useful for showing a preview of the image
on hover in a tooltip.`,defaultValue:{value:"false",computed:!1}}},composes:["Pick"]};ae.__docgenInfo={description:"",methods:[],displayName:"Group",composes:["Omit"]};export{ae as G,Q as I};
