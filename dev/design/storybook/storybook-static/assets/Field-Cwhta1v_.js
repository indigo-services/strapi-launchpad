import{n as m,r as i,ae as N,j as n,F as l,T as f,p as d}from"./iframe-_cKE9r89.js";import{u as C}from"./useComposeRefs-BPjCxrPe.js";import{u as E}from"./useId-BMWvqHJO.js";import{A as L}from"./AccessibleIcon-CYyZOlqW.js";const A=(e="&")=>({theme:a,$hasError:r=!1})=>m`
    outline: none;
    box-shadow: none;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${r?a.colors.danger600:a.colors.primary600};
      box-shadow: ${r?a.colors.danger600:a.colors.primary600} 0px 0px 0px 2px;
    }
  `,[B,g]=N("Field",{}),W=i.forwardRef(({children:e,name:a,error:r=!1,hint:t,id:o,required:u=!1,...c},s)=>{const h=E(o),[y,p]=i.useState();return n.jsx(B,{name:a,id:h,error:r,hint:t,required:u,labelNode:y,setLabelNode:p,children:n.jsx(l,{direction:"column",alignItems:"stretch",gap:1,ref:s,...c,children:e})})}),_=i.forwardRef(({children:e,action:a,...r},t)=>{const{id:o,required:u,setLabelNode:c}=g("Label"),s=C(t,c);return e?n.jsxs(l,{alignItems:"center",children:[n.jsxs(F,{ref:s,variant:"pi",textColor:"neutral800",fontWeight:"bold",...r,id:`${o}-label`,htmlFor:o,tag:"label",ellipsis:!0,children:[e,u&&n.jsx(f,{"aria-hidden":!0,lineHeight:"1em",textColor:"danger600",children:"*"})]}),a&&n.jsx(H,{marginLeft:1,children:a})]}):null}),F=d(f)`
  display: block;
`,H=d(l)`
  line-height: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,z=i.forwardRef(({endAction:e,startAction:a,disabled:r=!1,onChange:t,hasError:o,required:u,className:c,size:s="M",...h},y)=>{const{id:p,error:x,hint:k,name:T,required:q}=g("Input");let b;x?b=`${p}-error`:k&&(b=`${p}-hint`);const S=!!x,$=i.useRef(null),R=i.useRef(null),j=C(R,y),I=w=>{!r&&t&&t(w)};return i.useLayoutEffect(()=>{if($.current&&R.current){const w=$.current.offsetWidth,v=R.current;if(v){const P=w+8+16;v.style.paddingRight=`${P}px`}}},[e]),n.jsxs(O,{gap:2,justifyContent:"space-between",$hasError:S||o,$disabled:r,$size:s,$hasLeftAction:!!a,$hasRightAction:!!e,className:c,children:[a,n.jsx(M,{id:p,name:T,ref:j,$size:s,"aria-describedby":b,"aria-invalid":S||o,"aria-disabled":r,disabled:r,"data-disabled":r?"":void 0,onChange:I,"aria-required":q||u,$hasLeftAction:!!a,$hasRightAction:!!e,...h}),e&&n.jsx(D,{ref:$,children:e})]})}),M=d.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[3]};
  line-height: 2.4rem;
  display: block;
  width: 100%;
  background: inherit;

  ${({theme:e})=>e.breakpoints.medium} {
    font-size: ${({theme:e})=>e.fontSizes[2]};
    line-height: 2.2rem;
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${e=>{switch(e.$size){case"S":return m`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[2]};

          ${({theme:a})=>a.breakpoints.medium} {
            padding-block: ${e.theme.spaces[1]};
          }
        `;default:return m`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[3]};

          ${({theme:a})=>a.breakpoints.medium} {
            padding-block: ${e.theme.spaces[2]};
          }
        `}}}
`,D=d(l)`
  position: absolute;
  right: ${({theme:e})=>e.spaces[4]};
  top: 50%;
  transform: translateY(-50%);
`,O=d(l)`
  border: 1px solid ${({theme:e,$hasError:a})=>a?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  padding-inline-start: ${({$hasLeftAction:e,theme:a})=>e?a.spaces[4]:0};
  position: relative;

  ${A()}
  ${({theme:e,$disabled:a})=>a?m`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0};
`,V=()=>{const{id:e,hint:a,error:r}=g("Hint");return!a||r?null:n.jsx(f,{variant:"pi",tag:"p",id:`${e}-hint`,textColor:"neutral600",children:a})},Y=()=>{const{id:e,error:a}=g("Error");return!a||typeof a!="string"?null:n.jsx(f,{variant:"pi",tag:"p",id:`${e}-error`,textColor:"danger600","data-strapi-field-error":!0,children:a})},G=i.forwardRef(({label:e,children:a,...r},t)=>n.jsx(J,{justifyContent:"unset",background:"transparent",borderStyle:"none",...r,type:"button",tag:"button",ref:t,children:n.jsx(L,{label:e,children:a})})),J=d(l)`
  font-size: 1.6rem;
  padding: 0;
`;W.__docgenInfo={description:"",methods:[],displayName:"Root",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:`| {
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
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}}]}},{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}]},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{defaultValue:{value:"false",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};_.__docgenInfo={description:"",methods:[],displayName:"Label",props:{action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};z.__docgenInfo={description:"",methods:[],displayName:"Input",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},endAction:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:`If you're not using this in the FieldProvider
you can provide the error state manually`},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'S' | 'M'",elements:[{name:"literal",value:"'S'"},{name:"literal",value:"'M'"}]},description:'@default "M"',defaultValue:{value:"'M'",computed:!1}},startAction:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};V.__docgenInfo={description:"",methods:[],displayName:"Hint"};Y.__docgenInfo={description:"",methods:[],displayName:"Error"};G.__docgenInfo={description:"",methods:[],displayName:"Action",props:{label:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["Omit"]};export{Y as E,V as H,z as I,_ as L,W as R,A as i,g as u};
