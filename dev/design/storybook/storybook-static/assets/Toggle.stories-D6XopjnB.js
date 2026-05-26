import{r as I,j as r,T as F,p as f,F as j}from"./iframe-_cKE9r89.js";import{d as C}from"./index-BxBVU389.js";import{u as H}from"./useControllableState-CIwy89gb.js";import{u as M,i as P,R as V,L as $,E as z,H as K}from"./Field-Cwhta1v_.js";const d=I.forwardRef(({offLabel:o,onLabel:n,disabled:e,hasError:c,required:u,id:p,name:q,checked:W,onChange:g,...A},B)=>{const[t=!1,S]=H({prop:W}),l=t!==null&&!t,{error:b,...i}=M("Toggle"),T=!!b||c,h=i.id??p,v=i.name??q,D=i.required||u;let m;return b?m=`${h}-error`:i.hint&&(m=`${h}-hint`),r.jsxs(N,{position:"relative",hasRadius:!0,padding:1,background:e?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:T?"danger600":"neutral200",wrap:"wrap",cursor:e?"not-allowed":"pointer",$hasError:T,children:[r.jsx(L,{hasRadius:!0,flex:"1 1 50%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,justifyContent:"center",background:e&&l?"neutral200":l?"neutral0":"transparent",borderColor:e&&l?"neutral300":l?"neutral200":e?"neutral150":"neutral100",children:r.jsx(F,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:e?"neutral700":l?"danger700":"neutral600",children:o})}),r.jsx(L,{hasRadius:!0,flex:"1 1 50%",paddingLeft:3,paddingRight:3,justifyContent:"center",background:e&&t?"neutral200":t?"neutral0":"transparent",borderColor:e&&t?"neutral300":t?"neutral200":e?"neutral150":"neutral100",children:r.jsx(F,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:e?"neutral700":t?"primary600":"neutral600",children:n})}),r.jsx(U,{...A,id:h,name:v,ref:B,onChange:y=>{S(y.currentTarget.checked),g==null||g(y)},type:"checkbox","aria-required":D,disabled:e,"aria-disabled":e,checked:!!t,"aria-describedby":m})]})}),N=f(j)`
  ${P()}
`,L=f(j)`
  padding-block: 0.6rem;
`,U=f.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
`;d.__docgenInfo={description:`TODO: This should probably follow the switch button pattern
as seen – https://www.w3.org/WAI/ARIA/apg/patterns/switch/examples/switch-button/`,methods:[],displayName:"Toggle",props:{onLabel:{required:!0,tsType:{name:"string"},description:""},offLabel:{required:!0,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},description:""}},composes:["Omit","Pick"]};const{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,Y={title:"Inputs/Toggle",component:d,argTypes:{onLabel:{control:"text",description:'The label displayed when the toggle is in the "on" state.',table:{type:{summary:"string"}},required:!0},offLabel:{control:"text",description:'The label displayed when the toggle is in the "off" state.',table:{type:{summary:"string"}},required:!0},checked:{control:"boolean",description:"Controls the checked state of the toggle.",table:{type:{summary:"boolean | null"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"Disables the toggle when true.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},hasError:{control:"boolean",description:"Manually sets the toggle into an error state.",table:{type:{summary:"boolean"}}},required:{control:!1,description:"Marks the toggle as required for form validation.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onChange:{control:!1,description:"Callback function triggered when the toggle state changes.",table:{type:{summary:"function",detail:"(event: React.ChangeEvent<HTMLInputElement>) => void"}}}},parameters:{chromatic:{disableSnapshot:!1}}},G={render:({checked:o,...n})=>{const[,e]=O();return r.jsx(d,{...n,checked:o,onChange:()=>e({checked:!o})})}},a={...G,args:{checked:!0,offLabel:"False",onLabel:"True"},parameters:{docs:{source:{code:C`
        <Toggle
          onLabel="True"
          offLabel="False"
        />
        `}}},name:"Base"},s={render:({hint:o,error:n,label:e,...c})=>{const[,u]=O();return r.jsxs(V,{id:"with_field",error:n,hint:o,children:[r.jsx($,{children:e}),r.jsx(d,{onLabel:"True",offLabel:"False",onChange:p=>u({checked:p.currentTarget.checked}),...c}),r.jsx(z,{}),r.jsx(K,{})]})},args:{...a.args,error:"Error",hint:"Description line lorem ipsum"},parameters:{docs:{source:{code:C`
        <Field.Root
          id="with_field"
          error="Error"
          hint="Description line lorem ipsum"
        >
          <Field.Label>Toggle input</Field.Label>
          <Toggle id="with_field" label="Enabled" onLabel="True" offLabel="False" />
          <Field.Error />
          <Field.Hint />
        </Field.Root>
        `}}},name:"With Field"};var x,w,k;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...Template,
  args: {
    checked: true,
    offLabel: 'False',
    onLabel: 'True'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Toggle
          onLabel="True"
          offLabel="False"
        />
        \`
      }
    }
  },
  name: 'Base'
}`,...(k=(w=a.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var E,_,R;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: ({
    hint,
    error,
    label,
    ...props
  }) => {
    const [, updateArgs] = useArgs();
    return <Field.Root id="with_field" error={error} hint={hint}>\r
        <Field.Label>{label}</Field.Label>\r
        <Toggle onLabel="True" offLabel="False" onChange={e => updateArgs({
        checked: e.currentTarget.checked
      })} {...props} />\r
        <Field.Error />\r
        <Field.Hint />\r
      </Field.Root>;
  },
  args: {
    ...Base.args,
    error: 'Error',
    hint: 'Description line lorem ipsum'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Field.Root
          id="with_field"
          error="Error"
          hint="Description line lorem ipsum"
        >
          <Field.Label>Toggle input</Field.Label>
          <Toggle id="with_field" label="Enabled" onLabel="True" offLabel="False" />
          <Field.Error />
          <Field.Hint />
        </Field.Root>
        \`
      }
    }
  },
  name: 'With Field'
}`,...(R=(_=s.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};const J=["Base","WithField"],re=Object.freeze(Object.defineProperty({__proto__:null,Base:a,WithField:s,__namedExportsOrder:J,default:Y},Symbol.toStringTag,{value:"Module"}));export{a as B,re as T,s as W};
