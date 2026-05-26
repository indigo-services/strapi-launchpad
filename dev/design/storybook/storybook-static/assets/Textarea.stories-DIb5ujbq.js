import{r as q,j as r,p as z,c as R}from"./iframe-_cKE9r89.js";import{d as m}from"./index-BxBVU389.js";import{u as L,i as O,R as W,L as k,E as H,H as V}from"./Field-Cwhta1v_.js";const d=q.forwardRef(({disabled:e,hasError:t,id:o,name:s,required:v,resizable:D=!0,...S},j)=>{const{error:h,...l}=L("Textarea"),c=!!h||t,p=l.id??o,w=l.name??s,B=l.required||v;let u;return h?u=`${p}-error`:l.hint&&(u=`${p}-hint`),r.jsx(I,{borderColor:c?"danger600":"neutral200",$hasError:c,hasRadius:!0,children:r.jsx(M,{"aria-invalid":c,"aria-required":B,tag:"textarea",background:e?"neutral150":"neutral0",color:e?"neutral600":"neutral800",disabled:e,hasRadius:!0,ref:j,lineHeight:4,padding:4,width:"100%",height:"100%",id:p,name:w,"aria-describedby":u,$resizable:D,...S})})}),I=z(R)`
  ${O()}
`,M=z(R)`
  display: block;
  border: none;
  resize: ${({$resizable:e})=>e?"vertical":"none"};
  min-height: ${({minHeight:e})=>e||"10.5rem"};
  font-size: ${({theme:e})=>e.fontSizes[3]};

  ${({theme:e})=>e.breakpoints.small} {
    font-size: ${({theme:e})=>e.fontSizes[2]};
  }

  &::placeholder {
    color: ${({theme:e})=>e.colors.neutral600};
    font-size: ${({theme:e})=>e.fontSizes[3]};
    opacity: 1;

    ${({theme:e})=>e.breakpoints.small} {
      font-size: ${({theme:e})=>e.fontSizes[2]};
    }
  }

  &:focus-within {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;d.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{value:{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""},resizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["Omit","Pick"]};const{useArgs:P}=__STORYBOOK_MODULE_PREVIEW_API__,A={title:"Inputs/Textarea",component:d,argTypes:{value:{control:!1,description:"The value of the textarea, used for controlled components.",table:{type:{summary:"string"}}},"aria-describedby":{control:!1,description:"The ID of an element that provides additional description for the textarea (used for accessibility).",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Disables the textarea when true.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},hasError:{control:"boolean",description:"Manually sets the textarea into an error state.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{control:!1,description:"Marks the textarea as required for form validation.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"The placeholder text displayed inside the textarea.",table:{type:{summary:"string"}}},resizable:{control:"boolean",description:"Whether the textarea is resizable.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}},parameters:{chromatic:{disableSnapshot:!1}}},$={render:({value:e,...t})=>{const[,o]=P();return r.jsx(d,{...t,name:"content",onChange:s=>o({value:s.target.value}),value:e})}},a={...$,args:{value:"",placeholder:"This is a content placeholder"},name:"Base",parameters:{docs:{source:{code:m`
        <Textarea
          placeholder="This is a content placeholder"
          name="content"
        />`}}}},i={...$,args:{...a.args,disabled:!0},parameters:{docs:{source:{code:m`
        <Textarea
          placeholder="This is a content placeholder"
          name="content"
          disabled
        />`}}},name:"Disabled"},n={render:({error:e,hint:t,label:o,...s})=>r.jsxs(W,{id:"with_field",name:"textarea",error:e,hint:t,children:[r.jsx(k,{children:o}),r.jsx(d,{...s}),r.jsx(H,{}),r.jsx(V,{})]}),args:{...a.args,label:"Textarea",error:"Error",hint:"Description line lorem ipsum"},parameters:{docs:{source:{code:m`
        <Field.Root id="with_field" error="Error" hint="Description line lorem ipsum">
          <Field.Label>Textarea</Field.Label>
          <Textarea id="with_field" name="textarea">
          <Field.Error />
          <Field.Hint />
        </Field.Root>
        `}}},name:"With Field"};var b,f,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Template,
  args: {
    value: '',
    placeholder: 'This is a content placeholder'
  },
  name: 'Base',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Textarea
          placeholder="This is a content placeholder"
          name="content"
        />\`
      }
    }
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var T,y,g;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Base.args,
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Textarea
          placeholder="This is a content placeholder"
          name="content"
          disabled
        />\`
      }
    }
  },
  name: 'Disabled'
}`,...(g=(y=i.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var F,_,E;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: ({
    error,
    hint,
    label,
    ...props
  }) => {
    return <Field.Root id="with_field" name="textarea" error={error} hint={hint}>\r
        <Field.Label>{label}</Field.Label>\r
        <Textarea {...props} />\r
        <Field.Error />\r
        <Field.Hint />\r
      </Field.Root>;
  },
  args: {
    ...Base.args,
    label: 'Textarea',
    error: 'Error',
    hint: 'Description line lorem ipsum'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Field.Root id="with_field" error="Error" hint="Description line lorem ipsum">
          <Field.Label>Textarea</Field.Label>
          <Textarea id="with_field" name="textarea">
          <Field.Error />
          <Field.Hint />
        </Field.Root>
        \`
      }
    }
  },
  name: 'With Field'
}`,...(E=(_=n.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const C=["Base","Disabled","WithField"],Y=Object.freeze(Object.defineProperty({__proto__:null,Base:a,Disabled:i,WithField:n,__namedExportsOrder:C,default:A},Symbol.toStringTag,{value:"Module"}));export{a as B,i as D,Y as T,n as W};
