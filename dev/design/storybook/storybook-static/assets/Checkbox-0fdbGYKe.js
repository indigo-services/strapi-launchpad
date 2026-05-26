import{r as o,d as L,D as M,$ as S,y as E,_ as k,z as w,a8 as z,a9 as B,j as d,F as D,T as q,aa as A,p as R,ab as F,c as N}from"./iframe-_cKE9r89.js";import{$ as O}from"./index-CHWVjPu-.js";import{u as T}from"./useComposeRefs-BPjCxrPe.js";import{u as K}from"./useControllableState-CIwy89gb.js";import{u as H}from"./useId-BMWvqHJO.js";const j="Checkbox",[W,ie]=S(j),[X,G]=W(j),U=o.forwardRef((e,r)=>{const{__scopeCheckbox:t,name:n,checked:f,defaultChecked:a,required:i,disabled:l,value:u="on",onCheckedChange:$,...g}=e,[s,x]=o.useState(null),I=L(r,c=>x(c)),m=o.useRef(!1),v=s?!!s.closest("form"):!0,[p=!1,C]=M({prop:f,defaultProp:a,onChange:$}),P=o.useRef(p);return o.useEffect(()=>{const c=s==null?void 0:s.form;if(c){const h=()=>C(P.current);return c.addEventListener("reset",h),()=>c.removeEventListener("reset",h)}},[s,C]),o.createElement(X,{scope:t,state:p,disabled:l},o.createElement(E.button,k({type:"button",role:"checkbox","aria-checked":b(p)?"mixed":p,"aria-required":i,"data-state":_(p),"data-disabled":l?"":void 0,disabled:l,value:u},g,{ref:I,onKeyDown:w(e.onKeyDown,c=>{c.key==="Enter"&&c.preventDefault()}),onClick:w(e.onClick,c=>{C(h=>b(h)?!0:!h),v&&(m.current=c.isPropagationStopped(),m.current||c.stopPropagation())})})),v&&o.createElement(Q,{control:s,bubbles:!m.current,name:n,value:u,checked:p,required:i,disabled:l,style:{transform:"translateX(-100%)"}}))}),Z="CheckboxIndicator",J=o.forwardRef((e,r)=>{const{__scopeCheckbox:t,forceMount:n,...f}=e,a=G(Z,t);return o.createElement(z,{present:n||b(a.state)||a.state===!0},o.createElement(E.span,k({"data-state":_(a.state),"data-disabled":a.disabled?"":void 0},f,{ref:r,style:{pointerEvents:"none",...e.style}})))}),Q=e=>{const{control:r,checked:t,bubbles:n=!0,...f}=e,a=o.useRef(null),i=O(t),l=B(r);return o.useEffect(()=>{const u=a.current,$=window.HTMLInputElement.prototype,s=Object.getOwnPropertyDescriptor($,"checked").set;if(i!==t&&s){const x=new Event("click",{bubbles:n});u.indeterminate=b(t),s.call(u,b(t)?!1:t),u.dispatchEvent(x)}},[i,t,n]),o.createElement("input",k({type:"checkbox","aria-hidden":!0,defaultChecked:b(t)?!1:t},f,{tabIndex:-1,ref:a,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function b(e){return e==="indeterminate"}function _(e){return b(e)?"indeterminate":e?"checked":"unchecked"}const V=U,Y=J,ee=({fill:e,...r})=>{const{colors:t}=F();return d.jsx(N,{tag:"svg",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:e?t[e]:void 0,...r,children:d.jsx("path",{d:"M29.0613 10.0613L13.0613 26.0613C12.9219 26.2011 12.7563 26.3121 12.574 26.3878C12.3917 26.4635 12.1962 26.5024 11.9988 26.5024C11.8013 26.5024 11.6059 26.4635 11.4235 26.3878C11.2412 26.3121 11.0756 26.2011 10.9363 26.0613L3.93626 19.0613C3.79673 18.9217 3.68605 18.7561 3.61053 18.5738C3.53502 18.3915 3.49615 18.1961 3.49615 17.9988C3.49615 17.8014 3.53502 17.606 3.61053 17.4237C3.68605 17.2414 3.79673 17.0758 3.93626 16.9363C4.07579 16.7967 4.24143 16.686 4.42374 16.6105C4.60604 16.535 4.80143 16.4962 4.99876 16.4962C5.19608 16.4962 5.39147 16.535 5.57378 16.6105C5.75608 16.686 5.92173 16.7967 6.06126 16.9363L12 22.875L26.9388 7.93876C27.2205 7.65697 27.6027 7.49866 28.0013 7.49866C28.3998 7.49866 28.782 7.65697 29.0638 7.93876C29.3455 8.22055 29.5039 8.60274 29.5039 9.00126C29.5039 9.39977 29.3455 9.78197 29.0638 10.0638L29.0613 10.0613Z"})})},y=o.forwardRef(({defaultChecked:e,checked:r,onCheckedChange:t,...n},f)=>{const a=o.useRef(null),[i,l]=K({defaultProp:e,prop:r,onChange:t}),u=T(a,f);return d.jsx(te,{ref:u,checked:i,onCheckedChange:l,...n,children:d.jsxs(oe,{forceMount:!0,children:[i===!0?d.jsx(ee,{width:"1.6rem",fill:"neutral0"}):null,i==="indeterminate"?d.jsx(A,{fill:"neutral0"}):null]})})}),te=R(V)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  border-radius: ${e=>e.theme.borderRadius};
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // this ensures the checkbox is always a square even in flex-containers.
  flex: 0 0 2rem;

  &[data-state='checked']:not([data-disabled]),
  &[data-state='indeterminate']:not([data-disabled]) {
    border: 1px solid ${e=>e.theme.colors.primary600};
    background-color: ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
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
    z-index: -1;
    min-width: 44px;
    min-height: 44px;
  }
`,oe=R(Y)`
  display: inline-flex;
  pointer-events: auto !important;
  width: 100%;
  height: 100%;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &[data-disabled] {
    cursor: not-allowed;
  }
`,re=o.forwardRef(({children:e,...r},t)=>{const n=H(r.id);return e?d.jsxs(D,{gap:2,children:[d.jsx(y,{id:n,...r}),d.jsx(q,{tag:"label",textColor:"neutral800",htmlFor:n,children:e})]}):d.jsx(y,{ref:t,...r})});re.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};export{re as C};
