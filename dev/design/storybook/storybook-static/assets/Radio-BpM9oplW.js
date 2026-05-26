import{r as o,D as S,$ as k,_ as h,y as R,d as _,z as x,a8 as D,a9 as j,j as v,F as q,T as F,p as g,ad as M}from"./iframe-_cKE9r89.js";import{$ as w,a as N,b as O}from"./index-CmgM1aMT.js";import{$ as V}from"./index-D_aoadGl.js";import{$ as L}from"./index-CHWVjPu-.js";import{u as T}from"./useId-BMWvqHJO.js";const E="Radio",[z,y]=k(E),[K,U]=z(E),B=o.forwardRef((e,c)=>{const{__scopeRadio:r,name:d,checked:t=!1,required:a,disabled:s,value:f="on",onCheck:i,...l}=e,[$,u]=o.useState(null),p=_(c,m=>u(m)),n=o.useRef(!1),b=$?!!$.closest("form"):!0;return o.createElement(K,{scope:r,checked:t,disabled:s},o.createElement(R.button,h({type:"button",role:"radio","aria-checked":t,"data-state":C(t),"data-disabled":s?"":void 0,disabled:s,value:f},l,{ref:p,onClick:x(e.onClick,m=>{t||i==null||i(),b&&(n.current=m.isPropagationStopped(),n.current||m.stopPropagation())})})),b&&o.createElement(Q,{control:$,bubbles:!n.current,name:d,value:f,checked:t,required:a,disabled:s,style:{transform:"translateX(-100%)"}}))}),W="RadioIndicator",H=o.forwardRef((e,c)=>{const{__scopeRadio:r,forceMount:d,...t}=e,a=U(W,r);return o.createElement(D,{present:d||a.checked},o.createElement(R.span,h({"data-state":C(a.checked),"data-disabled":a.disabled?"":void 0},t,{ref:c})))}),Q=e=>{const{control:c,checked:r,bubbles:d=!0,...t}=e,a=o.useRef(null),s=L(r),f=j(c);return o.useEffect(()=>{const i=a.current,l=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(l,"checked").set;if(s!==r&&u){const p=new Event("click",{bubbles:d});u.call(i,r),i.dispatchEvent(p)}},[s,r,d]),o.createElement("input",h({type:"radio","aria-hidden":!0,defaultChecked:r},t,{tabIndex:-1,ref:a,style:{...e.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function C(e){return e?"checked":"unchecked"}const X=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],G="RadioGroup",[Y,he]=k(G,[w,y]),I=w(),A=y(),[J,Z]=Y(G),ee=o.forwardRef((e,c)=>{const{__scopeRadioGroup:r,name:d,defaultValue:t,value:a,required:s=!1,disabled:f=!1,orientation:i,dir:l,loop:$=!0,onValueChange:u,...p}=e,n=I(r),b=V(l),[m,P]=S({prop:a,defaultProp:t,onChange:u});return o.createElement(J,{scope:r,name:d,required:s,disabled:f,value:m,onValueChange:P},o.createElement(N,h({asChild:!0},n,{orientation:i,dir:b,loop:$}),o.createElement(R.div,h({role:"radiogroup","aria-required":s,"aria-orientation":i,"data-disabled":f?"":void 0,dir:b},p,{ref:c}))))}),oe="RadioGroupItem",te=o.forwardRef((e,c)=>{const{__scopeRadioGroup:r,disabled:d,...t}=e,a=Z(oe,r),s=a.disabled||d,f=I(r),i=A(r),l=o.useRef(null),$=_(c,l),u=a.value===t.value,p=o.useRef(!1);return o.useEffect(()=>{const n=m=>{X.includes(m.key)&&(p.current=!0)},b=()=>p.current=!1;return document.addEventListener("keydown",n),document.addEventListener("keyup",b),()=>{document.removeEventListener("keydown",n),document.removeEventListener("keyup",b)}},[]),o.createElement(O,h({asChild:!0},f,{focusable:!s,active:u}),o.createElement(B,h({disabled:s,required:a.required,checked:u},i,t,{name:a.name,ref:$,onCheck:()=>a.onValueChange(t.value),onKeyDown:x(n=>{n.key==="Enter"&&n.preventDefault()}),onFocus:x(t.onFocus,()=>{var n;p.current&&((n=l.current)===null||n===void 0||n.click())})})))}),re=o.forwardRef((e,c)=>{const{__scopeRadioGroup:r,...d}=e,t=A(r);return o.createElement(H,h({},t,d,{ref:c}))}),ae=ee,ce=te,ne=re,de=o.forwardRef((e,c)=>v.jsx(se,{ref:c,...e})),se=g(ae)`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spaces[3]};
`,ie=o.forwardRef(({children:e,id:c,...r},d)=>{const t=T(c);return v.jsxs(q,{gap:2,children:[v.jsx(fe,{id:t,ref:d,...r,children:v.jsx(ue,{})}),v.jsx(F,{tag:"label",htmlFor:t,children:e})]})}),fe=g(ce)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  border-radius: 50%;
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  cursor: pointer;
  z-index: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition: border-color ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }

  &[data-state='checked'] {
    border: 1px solid ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    cursor: not-allowed;
    background-color: ${e=>e.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,ue=g(ne)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &[data-state='checked'] {
    @media (prefers-reduced-motion: no-preference) {
      animation: ${M.popIn} ${e=>e.theme.motion.timings[200]};
    }
  }

  &::after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${e=>e.theme.colors.primary600};
  }
`;de.__docgenInfo={description:"",methods:[],displayName:"Group"};ie.__docgenInfo={description:"",methods:[],displayName:"Item"};export{de as G,ie as I};
