import{r as c,d as N,D as X,$ as K,y as U,_ as x,z as Y,a9 as G,j as h,F as J,p as v,T as Q}from"./iframe-_cKE9r89.js";import{_ as A}from"./index-JVGtNO81.js";import{d as k}from"./index-BxBVU389.js";import{$ as Z}from"./index-CHWVjPu-.js";import{u as ee}from"./useControllableState-CIwy89gb.js";const V="Switch",[te,we]=K(V),[ce,se]=te(V),re=c.forwardRef((e,a)=>{const{__scopeSwitch:t,name:s,checked:r,defaultChecked:b,required:o,disabled:n,value:i="on",onCheckedChange:l,...g}=e,[d,u]=c.useState(null),z=N(a,C=>u(C)),w=c.useRef(!1),y=d?!!d.closest("form"):!0,[S=!1,F]=X({prop:r,defaultProp:b,onChange:l});return c.createElement(ce,{scope:t,checked:S,disabled:n},c.createElement(U.button,x({type:"button",role:"switch","aria-checked":S,"aria-required":o,"data-state":W(S),"data-disabled":n?"":void 0,disabled:n,value:i},g,{ref:z,onClick:Y(e.onClick,C=>{F(H=>!H),y&&(w.current=C.isPropagationStopped(),w.current||C.stopPropagation())})})),y&&c.createElement(ne,{control:d,bubbles:!w.current,name:s,value:i,checked:S,required:o,disabled:n,style:{transform:"translateX(-100%)"}}))}),ae="SwitchThumb",oe=c.forwardRef((e,a)=>{const{__scopeSwitch:t,...s}=e,r=se(ae,t);return c.createElement(U.span,x({"data-state":W(r.checked),"data-disabled":r.disabled?"":void 0},s,{ref:a}))}),ne=e=>{const{control:a,checked:t,bubbles:s=!0,...r}=e,b=c.useRef(null),o=Z(t),n=G(a);return c.useEffect(()=>{const i=b.current,l=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(l,"checked").set;if(o!==t&&d){const u=new Event("click",{bubbles:s});d.call(i,t),i.dispatchEvent(u)}},[o,t,s]),c.createElement("input",x({type:"checkbox","aria-hidden":!0,defaultChecked:t},r,{tabIndex:-1,ref:b,style:{...e.style,...n,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function W(e){return e?"checked":"unchecked"}const de=re,ie=oe,_=c.forwardRef(({visibleLabels:e,onLabel:a="On",offLabel:t="Off",onCheckedChange:s,checked:r,defaultChecked:b,disabled:o,...n},i)=>{const[l,g]=ee({prop:r,defaultProp:b}),d=u=>{g(u)};return h.jsxs(J,{gap:3,children:[h.jsx(le,{ref:i,onCheckedChange:A(s,d),checked:l,disabled:o,...n,children:h.jsx(be,{})}),e?h.jsx(ue,{"aria-hidden":!0,"data-disabled":o,"data-state":l?"checked":"unchecked",children:l?a:t}):null]})}),le=v(de)`
  width: 4rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  background-color: ${({theme:e})=>e.colors.danger500};

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.success500};
  }

  &[data-disabled] {
    background-color: ${({theme:e})=>e.colors.neutral300};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`,be=v(ie)`
  display: block;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.neutral0};
  transform: translateX(4px);

  &[data-state='checked'] {
    transform: translateX(20px);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,ue=v(Q)`
  color: ${e=>e.theme.colors.danger600};

  &[data-state='checked'] {
    color: ${e=>e.theme.colors.success600};
  }

  &[data-disabled='true'] {
    color: ${({theme:e})=>e.colors.neutral500};
  }
`;_.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{onLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'On'",computed:!1}},offLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Off'",computed:!1}},visibleLabels:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const{useArgs:he}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:pe}=__STORYBOOK_MODULE_TEST__,fe={title:"Components/Switch",component:_,parameters:{chromatic:{disableSnapshot:!1},docs:{source:{code:k`
          <Switch />
        `}}},args:{checked:!0,disabled:!1,required:!1,onCheckedChange:pe()},render:({onCheckedChange:e,...a})=>{const[,t]=he(),s=r=>{t({checked:r})};return h.jsx(_,{onCheckedChange:A(e,s),...a})}},p={name:"checked",parameters:{docs:{source:{code:k`
          <Switch checked />
        `}}}},f={args:{checked:!1},name:"unchecked",parameters:{docs:{source:{code:k`
          <Switch checked={false} />
        `}}}},m={args:{disabled:!0},parameters:{docs:{source:{code:k`
          <Switch disabled />
        `}}},name:"disabled"},$={args:{visibleLabels:!0},parameters:{docs:{source:{code:k`
          <Switch visibleLabels />
        `}}},name:"with visible labels"};var E,O,T;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'checked',
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Switch checked />
        \`
      }
    }
  }
} satisfies Story`,...(T=(O=p.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var P,L,R;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    checked: false
  },
  name: 'unchecked',
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Switch checked={false} />
        \`
      }
    }
  }
} satisfies Story`,...(R=(L=f.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var j,q,I;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Switch disabled />
        \`
      }
    }
  },
  name: 'disabled'
} satisfies Story`,...(I=(q=m.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var M,D,B;$.parameters={...$.parameters,docs:{...(M=$.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    visibleLabels: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Switch visibleLabels />
        \`
      }
    }
  },
  name: 'with visible labels'
} satisfies Story`,...(B=(D=$.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const me=["Checked","Unchecked","Disabled","WithVisibleLabels"],_e=Object.freeze(Object.defineProperty({__proto__:null,Checked:p,Disabled:m,Unchecked:f,WithVisibleLabels:$,__namedExportsOrder:me,default:fe},Symbol.toStringTag,{value:"Module"}));export{p as C,m as D,_e as S,f as U,$ as W,_ as a};
