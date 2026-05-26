import{r as p,j as e,c as K,T as Je,K as vt,p as ft,s as N}from"./iframe-_cKE9r89.js";import{d}from"./index-BxBVU389.js";import{R as yt,T as bt,V as Ot,P as Mt,C as wt,a as xt,I as Qe,b as Ue,c as At,G as jt,S as k,d as n}from"./SingleSelect-CFTa6hkl.js";import{s as Rt,u as Ct}from"./useIntersection-BvDycFkB.js";import{u as Tt}from"./useId-BMWvqHJO.js";import{u as Vt,R as H,L as G,E as _,H as $}from"./Field-Cwhta1v_.js";import{T as kt}from"./Tag-CF1ZNRdL.js";import{C as Xe}from"./Checkbox-0fdbGYKe.js";const F=p.forwardRef(({children:l,clearLabel:r="Clear",customizeContent:t,disabled:o,hasError:s,id:c,loading:m,name:L,onChange:I,onClear:et,onCloseAutoFocus:tt,onReachEnd:W,placeholder:nt,required:lt,size:at,startIcon:ot,value:S,withTags:q,...z},rt)=>{const J=p.useRef(null),[Q,U]=p.useState(),[it,st]=p.useState(!1),ct=i=>{I?I(i):U(i)},ut=i=>()=>{const Z=Array.isArray(S)?S.filter(P=>P!==i):(Q??[]).filter(P=>P!==i);I?I(Z):U(Z)},pt=i=>{st(i)},dt=Tt(),X=`intersection-${Rt(dt)}`;Ct(J,i=>{W&&W(i)},{selectorToWatch:`#${X}`,skipWhen:!it});const u=typeof S<"u"&&S!==null?S:Q,mt=i=>i&&typeof i=="object"&&i.value?e.jsx(kt,{tabIndex:-1,disabled:o,icon:e.jsx(vt,{width:`${14/16}rem`,height:`${14/16}rem`}),onClick:ut(i.value),children:i.textValue},i.value):null,{error:Y,...E}=Vt("MultiSelect"),St=!!Y||s,B=E.id??c,gt=E.name??L,ht=E.required??lt;let D;return Y?D=`${B}-error`:E.hint&&(D=`${B}-hint`),e.jsxs(yt,{onOpenChange:pt,disabled:o,required:ht,onValueChange:ct,value:u,...z,multi:!0,children:[e.jsx(bt,{ref:rt,id:B,name:gt,"aria-label":z["aria-label"],"aria-describedby":D??z["aria-describedby"],startIcon:ot,hasError:St,disabled:o,clearLabel:r,loading:m,onClear:u!=null&&u.length?et:void 0,withTags:!!(q&&((u==null?void 0:u.length)??!1)),size:at,children:e.jsx(Ot,{placeholder:nt,textColor:u!=null&&u.length?"neutral800":"neutral600",withTags:q,children:u!=null&&u.length?q?mt:t?t(u):void 0:void 0})}),e.jsx(Mt,{children:e.jsx(wt,{position:"popper",sideOffset:4,onCloseAutoFocus:tt,children:e.jsxs(xt,{ref:J,children:[l,e.jsx(K,{id:X,width:"100%",height:"1px"})]})})})]})}),a=p.forwardRef(({value:l,children:r,startIcon:t,...o},s)=>e.jsxs(Qe,{ref:s,value:l.toString(),...o,children:[t&&e.jsx(K,{tag:"span","aria-hidden":!0,children:t}),e.jsx(Ue,{children:({isSelected:c,isIntermediate:m})=>e.jsx(Xe,{checked:m?"indeterminate":c})}),e.jsx(Je,{children:e.jsx(At,{children:r})})]})),Ye=p.forwardRef(({children:l,label:r,startIcon:t,values:o=[],...s},c)=>e.jsxs(jt,{ref:c,children:[e.jsxs(Qe,{value:o,...s,children:[t&&e.jsx(K,{tag:"span","aria-hidden":!0,children:t}),e.jsx(Ue,{children:({isSelected:m,isIntermediate:L})=>e.jsx(Xe,{checked:L?"indeterminate":m})}),e.jsx(Je,{children:r})]}),l]}));F.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},onReachEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(entry: IntersectionObserverEntry) => void",signature:{arguments:[{type:{name:"IntersectionObserverEntry"},name:"entry"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:""},withTags:{required:!1,tsType:{name:"boolean"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""},clearLabel:{defaultValue:{value:"'Clear'",computed:!1},required:!1}}};a.__docgenInfo={description:"",methods:[],displayName:"MultiSelectOption",props:{startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""}},composes:["Omit"]};Ye.__docgenInfo={description:"",methods:[],displayName:"MultiSelectGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!0,tsType:{name:"string"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}}},composes:["Pick"]};const Ze=({options:l,...r})=>e.jsx(F,{...r,children:l.map(t=>"children"in t?e.jsx(Ye,{label:t.label,values:t.children.map(o=>o.value.toString()),children:t.children.map(o=>e.jsx(Ft,{value:o.value,children:o.label},o.value))},t.label):e.jsx(a,{value:t.value,children:t.label},t.value))}),Ft=ft(a)`
  padding-left: ${({theme:l})=>l.spaces[7]};
`;Ze.__docgenInfo={description:"",methods:[],displayName:"MultiSelectNested",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},onReachEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(entry: IntersectionObserverEntry) => void",signature:{arguments:[{type:{name:"IntersectionObserverEntry"},name:"entry"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"union",raw:"string[] | null",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"null"}]},description:""},withTags:{required:!1,tsType:{name:"boolean"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"MulitSelectNestedOption | MulitSelectNestedGroup",elements:[{name:"MulitSelectNestedOption"},{name:"MulitSelectNestedGroup"}]}],raw:"Array<MulitSelectNestedOption | MulitSelectNestedGroup>"},description:""}}};const It={title:"Inputs/Select",parameters:{chromatic:{disableSnapshot:!1},docs:{source:{code:d`
        <SingleSelect>
          <SingleSelectOption value="apple">Apple</SingleSelectOption>
          <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
        </SingleSelect>
        `}}},render:({...l})=>e.jsxs(k,{...l,children:[e.jsx(n,{value:"apple",children:"Apple"}),e.jsx(n,{value:"avocado",children:"Avocado"}),e.jsx(n,{value:"banana",children:"Banana"}),e.jsx(n,{value:"kiwi",children:"Kiwi"}),e.jsx(n,{value:"mango",children:"Mango"}),e.jsx(n,{value:"orange",children:"Orange"}),e.jsx(n,{value:"strawberry",children:"Strawberry"})]})},g={name:"Base - Single Select",args:{disabled:!1,placeholder:"My favourite fruit is...",size:"M"},render:({...l})=>e.jsxs(k,{...l,children:[e.jsx(n,{value:"apple",children:"Apple"}),e.jsx(n,{value:"avocado",children:"Avocado"}),e.jsx(n,{value:"banana",children:"Banana"}),e.jsx(n,{value:"kiwi",children:"Kiwi"}),e.jsx(n,{value:"mango",children:"Mango"}),e.jsx(n,{value:"orange",children:"Orange"}),e.jsx(n,{value:"strawberry",children:"Strawberry"})]}),parameters:{docs:{source:{code:d`
        <SingleSelect>
          <SingleSelectOption value="apple">Apple</SingleSelectOption>
          <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
        </SingleSelect>`}}}},h={args:{disabled:!0},parameters:{docs:{source:{code:d`
        <SingleSelect disabled>
          <SingleSelectOption value="apple">Apple</SingleSelectOption>
          <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
        </SingleSelect>
        `}}},name:"Disabled"},v={args:{loading:!0,placeholder:"Loading options..."},parameters:{docs:{source:{code:d`
        <SingleSelect loading placeholder="Loading options...">
          <SingleSelectOption value="apple">Apple</SingleSelectOption>
          <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
        </SingleSelect>
        `}}},name:"Loading"},f={argTypes:{},parameters:{docs:{source:{code:d`
    const [value, setValue] = React.useState<string | number>();

    return (
      <SingleSelect
        onClear={() => {
          setValue(undefined);
        }}
        value={value}
        onChange={setValue}
      >
        <SingleSelectOption value="apple">Apple</SingleSelectOption>
        <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
      </SingleSelect>
    );`}}},render:({...l})=>{const[r,t]=p.useState();return e.jsxs(k,{...l,onClear:()=>{t(void 0)},value:r,onChange:t,children:[e.jsx(n,{value:"apple",children:"Apple"}),e.jsx(n,{value:"avocado",children:"Avocado"}),e.jsx(n,{value:"banana",children:"Banana"}),e.jsx(n,{value:"kiwi",children:"Kiwi"}),e.jsx(n,{value:"mango",children:"Mango"}),e.jsx(n,{value:"orange",children:"Orange"}),e.jsx(n,{value:"strawberry",children:"Strawberry"})]})},name:"Controlled"},y={args:{size:"S"},parameters:{docs:{source:{code:d`
        <SingleSelect size="S">
          <SingleSelectOption value="apple">Apple</SingleSelectOption>
          <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
          <SingleSelectOption value="banana">Banana</SingleSelectOption>
          <SingleSelectOption value="kiwi">Kiwi</SingleSelectOption>
          <SingleSelectOption value="mango">Mango</SingleSelectOption>
          <SingleSelectOption value="orange">Orange</SingleSelectOption>
          <SingleSelectOption value="strawberry">Strawberry</SingleSelectOption>
        </SingleSelect>
        `}}},name:"Small Size"},b={args:{startIcon:e.jsx(N,{}),error:"Error"},parameters:{docs:{code:d`
      <SingleSelect>
        <SingleSelectOption value="apple" startIcon={<Plus />}>
          Apple
        </SingleSelectOption>
        <SingleSelectOption value="avocado" startIcon={<Plus />}>
          Avocado
        </SingleSelectOption>
      </SingleSelect>`}},render:({label:l,error:r,hint:t,...o})=>{const s=p.useRef(null);return e.jsxs(H,{error:r,hint:t,children:[e.jsx(G,{onClick:()=>{var c;return(c=s.current)==null?void 0:c.focus()},children:l}),e.jsxs(k,{ref:s,...o,children:[e.jsx(n,{value:"apple",startIcon:e.jsx(N,{}),children:"Apple"}),e.jsx(n,{value:"avocado",startIcon:e.jsx(N,{}),children:"Avocado"}),e.jsx(n,{value:"banana",startIcon:e.jsx(N,{}),children:"Banana"})]}),e.jsx(_,{}),e.jsx($,{})]})},name:"Start Icon"},O={render:({...l})=>{const[r,t]=p.useState([]);return e.jsxs(F,{...l,onClear:()=>{t([])},value:r,onChange:t,children:[e.jsx(a,{value:"apple",children:"Apple"}),e.jsx(a,{value:"avocado",children:"Avocado"}),e.jsx(a,{value:"banana",children:"Banana"}),e.jsx(a,{value:"kiwi",children:"Kiwi"}),e.jsx(a,{value:"mango",children:"Mango"}),e.jsx(a,{value:"orange",children:"Orange"}),e.jsx(a,{value:"strawberry",children:"Strawberry"})]})},parameters:{docs:{source:{code:d`
        <MultiSelect>
          <MultiSelectOption value="apple">Apple</MultiSelectOption>
          <MultiSelectOption value="avocado">Avocado</MultiSelectOption>
        </MultiSelect>`}}},name:"Multiple"},M={args:{withTags:!0},render:({...l})=>{const[r,t]=p.useState([]);return e.jsxs(F,{...l,onClear:()=>{t([])},value:r,onChange:t,children:[e.jsx(a,{value:"apple",children:"Apple"}),e.jsx(a,{value:"avocado",children:"Avocado"}),e.jsx(a,{value:"banana",children:"Banana"}),e.jsx(a,{value:"kiwi",children:"Kiwi"}),e.jsx(a,{value:"mango",children:"Mango"}),e.jsx(a,{value:"orange",children:"Orange"}),e.jsx(a,{value:"strawberry",children:"Strawberry"})]})},parameters:{docs:{source:{code:d`
        <MultiSelect withTags>
          <MultiSelectOption value="apple">Apple</MultiSelectOption>
          <MultiSelectOption value="avocado">Avocado</MultiSelectOption>
        </MultiSelect>`}}},name:"Multiple With Tags"},w={render:({...l})=>{const r=[{label:"Banana",value:"banana"},{label:"Green fruits",children:[{label:"Apple",value:"apple"},{label:"Avocado",value:"avocado"},{label:"Kiwi",value:"kiwi"}]},{label:"Orange fruits",children:[{label:"Mango",value:"mango"},{label:"Orange",value:"orange"}]},{label:"Strawberry",value:"strawberry"}],[t,o]=p.useState([]);return e.jsx(Ze,{...l,onClear:()=>{o([])},value:t,onChange:o,options:r,"aria-label":"fruit Label"})},parameters:{docs:{source:{code:d`
        const options = [
            { label: 'Banana', value: 'banana' },
            { 
              label: 'Green fruits', 
              children: [ 
                { label: 'Apple', value: 'apple' }, 
                { label: 'Avocado', value: 'avocado' },
              ]
            },
        ];

        <MultiSelectNested options={options} />`}}},name:"Multiple Nested Select"},x={args:{label:"Fruits",error:"Error",hint:"Description line lorem ipsum"},render:({label:l,error:r,hint:t,...o})=>{const s=p.useRef(null);return e.jsxs(H,{error:r,hint:t,children:[e.jsx(G,{onClick:()=>{var c;return(c=s.current)==null?void 0:c.focus()},children:l}),e.jsxs(k,{ref:s,...o,children:[e.jsx(n,{value:"apple",children:"Apple"}),e.jsx(n,{value:"avocado",children:"Avocado"}),e.jsx(n,{value:"banana",children:"Banana"}),e.jsx(n,{value:"kiwi",children:"Kiwi"}),e.jsx(n,{value:"mango",children:"Mango"}),e.jsx(n,{value:"orange",children:"Orange"}),e.jsx(n,{value:"strawberry",children:"Strawberry"})]}),e.jsx(_,{}),e.jsx($,{})]})},parameters:{docs:{source:{code:d`
          <Field.Root error="Error" hint="Description line lorem ipsum">
            <Field.Label>Fruits</Field.Label>
            <SingleSelect placeholder="My favourite fruit is...">
              <SingleSelectOption value="apple">Apple</SingleSelectOption>
              <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
            </SingleSelect>
            <Field.Error />
            <Field.Hint />
          </Field.Root>
        `}}},name:"Single Select Field"},A={args:{label:"Fruits",error:"Error",hint:"Description line lorem ipsum"},render:({label:l,error:r,hint:t,...o})=>{const s=p.useRef(null);return e.jsxs(H,{error:r,hint:t,children:[e.jsx(G,{onClick:()=>{var c;return(c=s.current)==null?void 0:c.focus()},children:l}),e.jsxs(F,{...o,withTags:!0,ref:s,children:[e.jsx(a,{value:"apple",children:"Apple"}),e.jsx(a,{value:"avocado",children:"Avocado"}),e.jsx(a,{value:"banana",children:"Banana"}),e.jsx(a,{value:"kiwi",children:"Kiwi"}),e.jsx(a,{value:"mango",children:"Mango"}),e.jsx(a,{value:"orange",children:"Orange"}),e.jsx(a,{value:"strawberry",children:"Strawberry"})]}),e.jsx(_,{}),e.jsx($,{})]})},parameters:{docs:{source:{code:d`
          <Field.Root error="Error" hint="Description line lorem ipsum">
            <Field.Label>Fruits</Field.Label>
            <MultiSelect placeholder="My favourite fruit is...">
              <MultiSelectOption value="apple">Apple</MultiSelectOption>
              <MultiSelectOption value="avocado">Avocado</MultiSelectOption>
            </MultiSelect>
            <Field.Error />
            <Field.Hint />
          </Field.Root>`}}},name:"Multiple Select Field"},j={tags:["!dev"],argTypes:{onChange:{control:!1,action:"value changed",description:"Callback function invoked when the selected value changes. Receives the new value as an argument.",type:{name:"function"},table:{type:{summary:"function",detail:"(value: string | number) => void"}}},value:{control:"text",description:"The currently selected value. If `null`, no option is selected.",type:{name:"function"},table:{type:{summary:"string | number | null"}}},clearLabel:{control:"text",description:"Label for the clear action button.",type:{name:"string"},table:{defaultValue:{summary:"'Clear'"}},defaultValue:"Clear"},onClear:{control:!1,action:"clear triggered",description:"Callback function invoked when the clear action is triggered, allowing for custom clear behavior.",table:{type:{summary:"function",detail:"(event: React.MouseEvent<HTMLButtonElement>) => void"}}},"aria-label":{control:!1,description:"Accessibility label for the select component.",type:{name:"string"},table:{}},"aria-describedby":{control:!1,description:"Accessibility description, typically referencing additional descriptive elements like hints or error messages.",type:{name:"string"},table:{}},customizeContent:{control:!1,description:"Function to customize the displayed content based on the selected value. If customizeContent is not provided, the component will use the default behavior, which is to convert the value to a string and display it.",type:{name:"function"},table:{type:{summary:"function",detail:"(value?: string | number) => string"}}},disabled:{control:"boolean",description:"Disables the select component when set to `true`, preventing user interaction.",type:{name:"boolean"},table:{defaultValue:{summary:"false"}},defaultValue:!1},hasError:{control:"boolean",description:"Indicates whether the select component is in an error state, often changing its visual styling to reflect the error.",type:{name:"boolean"},table:{defaultValue:{summary:"false"}},defaultValue:!1},loading:{control:"boolean",description:"Shows a loading spinner in place of the dropdown caret icon, indicating that data is being loaded.",type:{name:"boolean"},table:{defaultValue:{summary:"false"}},defaultValue:!1},id:{control:!1,description:"The `id` attribute for the select component.",type:{name:"string"},table:{}},name:{control:!1,description:"The `name` attribute for the select component.",type:{name:"string"},table:{}},onCloseAutoFocus:{control:!1,description:"Callback function invoked to handle focus when the select dropdown is closed, useful for managing focus behavior in modals or dialogs.",table:{type:{summary:"function",detail:"(event: React.FocusEvent<HTMLDivElement>) => void"}}},onReachEnd:{control:!1,description:"Callback function invoked when the end of the select options is reached, useful for implementing infinite scrolling or lazy loading of options.",table:{type:{summary:"function",detail:"(entry: IntersectionObserverEntry) => void"}}},placeholder:{control:"text",description:"Placeholder text displayed when no value is selected",type:{name:"string"},table:{}},required:{control:!1,description:"Marks the select component as required.",type:{name:"boolean"},table:{defaultValue:{summary:"false"}},defaultValue:!1},size:{control:"radio",options:["S","M"],description:"Size of the input",table:{type:{summary:"enum",detail:"'S' | 'M'"},defaultValue:{summary:'"M"'}}},startIcon:{control:!1,description:"An optional icon displayed at the start of the select component, enhancing visual context or branding.",table:{type:{summary:"ReactNode"}}},children:{control:!1,description:"The selectable options rendered within the select dropdown, typically composed of `SingleSelectOption` components.",table:{type:{summary:"ReactNode"}}}}},R={tags:["!dev"],argTypes:{startIcon:{control:!1,description:"An optional icon to display at the start of the MultiSelectOption.",table:{type:{summary:"React.ReactNode"}}},value:{control:!1,description:"The value of the option.",type:{required:!0},table:{type:{summary:"string | number"}}}}},C={tags:["!dev"],argTypes:{children:{control:!1,description:"The children components, typically the options for the MultiSelect.",table:{type:{summary:"React.ReactNode"}}},clearLabel:{control:"text",description:"Label for the clear button.",table:{type:{summary:"string"},defaultValue:{summary:"Clear"}}},customizeContent:{control:!1,description:"Custom function to render the selected values as a string.",table:{type:{summary:"function",detail:"(value?: string[]) => string"},defaultValue:{summary:'(value) => value.join(",")'}}},disabled:{control:"boolean",description:"Disables the MultiSelect component when true.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},hasError:{control:"boolean",description:"Displays error styles when true.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"Shows a loading spinner in place of the dropdown caret icon, indicating that data is being loaded.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},id:{control:"text",description:"The id of the component.",table:{type:{summary:"string"}}},name:{control:"text",description:"The name of the MultiSelect component for form submissions.",table:{type:{summary:"string"}}},onChange:{control:!1,description:"Callback function triggered when the value changes.",table:{type:{summary:"function",detail:"(value: string[]) => void"}}},onClear:{control:!1,description:"Callback function triggered when the clear button is clicked.",table:{type:{summary:"function",detail:"() => void"}}},onCloseAutoFocus:{control:!1,description:"Callback function triggered when the select closes and refocuses.",table:{type:{summary:"function",detail:"() => void"}}},onReachEnd:{control:!1,description:"Callback function triggered when the user scrolls to the end of the options.",table:{type:{summary:"function",detail:"(entry: IntersectionObserverEntry) => void"}}},placeholder:{control:"text",description:"Placeholder text to display when no values are selected.",table:{type:{summary:"string"}}},required:{control:"boolean",description:"Indicates if the field is required.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:"select",options:["small","medium","large"],description:"Size of the MultiSelect component.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},startIcon:{control:!1,description:"An optional icon to display at the start of the input field.",table:{type:{summary:"React.ReactNode"}}},value:{control:!1,description:"The selected values of the MultiSelect component.",table:{type:{summary:"string[] | null"},defaultValue:{summary:"null"}}},withTags:{control:"boolean",description:"Display the selected values as tags when true.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},T={tags:["!dev"],argTypes:{startIcon:{control:!1,description:"An optional icon to display at the start of the MultiSelectOption.",table:{type:{summary:"React.ReactNode"}}},value:{control:"text",description:"The value of the selected option.",table:{type:{summary:"string | number"}}}}},V={tags:["!dev"],argTypes:{options:{control:!1,description:"An array of options which can either be standalone options or groups of options.",table:{type:{required:!0,summary:"Array<MulitSelectNestedOption | MulitSelectNestedGroup>",detail:`
          MulitSelectNestedOption {
            value: string | number;
            label: string;
            startIcon?: React.ReactNode;
          }

          MulitSelectNestedGroup {
            label: string;
            children: Array<MulitSelectNestedOption>;
          }
        `},defaultValue:{summary:"[]"}}},value:{control:!1,description:"The selected values for the MultiSelect component.",table:{type:{summary:"string[] | null"},defaultValue:{summary:"null"}}},onChange:{control:!1,description:"Callback function triggered when the selection changes.",table:{type:{summary:"function",detail:"(value: string[]) => void"}}},placeholder:{control:"text",description:"Placeholder text displayed when no values are selected.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Disables the MultiSelect component when set to true.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},withTags:{control:"boolean",description:"Displays the selected values as tags when true.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{control:"radio",options:["small","medium","large"],description:"Size of the MultiSelect component.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},clearLabel:{control:!1,description:"Label for the clear button.",table:{type:{summary:"string"},defaultValue:{summary:"Clear"}}},startIcon:{control:!1,description:"Optional icon to display at the start of the MultiSelect.",table:{type:{summary:"React.ReactNode"}}},onClear:{control:!1,description:"Callback function triggered when the clear button is clicked.",table:{type:{summary:"function",detail:"() => void"}}},onReachEnd:{control:!1,description:"Callback function triggered when the user scrolls to the end of the options.",table:{type:{summary:"function",detail:"(entry: IntersectionObserverEntry) => void"}}}}};var ee,te,ne;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Base - Single Select',
  args: {
    disabled: false,
    placeholder: 'My favourite fruit is...',
    size: 'M'
  },
  render: ({
    ...props
  }) => {
    return <SingleSelect {...props}>\r
        <SingleSelectOption value="apple">Apple</SingleSelectOption>\r
        <SingleSelectOption value="avocado">Avocado</SingleSelectOption>\r
        <SingleSelectOption value="banana">Banana</SingleSelectOption>\r
        <SingleSelectOption value="kiwi">Kiwi</SingleSelectOption>\r
        <SingleSelectOption value="mango">Mango</SingleSelectOption>\r
        <SingleSelectOption value="orange">Orange</SingleSelectOption>\r
        <SingleSelectOption value="strawberry">Strawberry</SingleSelectOption>\r
      </SingleSelect>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <SingleSelect>
          <SingleSelectOption value="apple">Apple</SingleSelectOption>
          <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
        </SingleSelect>\`
      }
    }
  }
} satisfies SingleSelectStory`,...(ne=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var le,ae,oe;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <SingleSelect disabled>
          <SingleSelectOption value="apple">Apple</SingleSelectOption>
          <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
        </SingleSelect>
        \`
      }
    }
  },
  name: 'Disabled'
} satisfies SingleSelectStory`,...(oe=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,ie,se;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    loading: true,
    placeholder: 'Loading options...'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <SingleSelect loading placeholder="Loading options...">
          <SingleSelectOption value="apple">Apple</SingleSelectOption>
          <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
        </SingleSelect>
        \`
      }
    }
  },
  name: 'Loading'
} satisfies SingleSelectStory`,...(se=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ce,ue,pe;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  argTypes: {},
  parameters: {
    docs: {
      source: {
        code: outdent\`
    const [value, setValue] = React.useState<string | number>();

    return (
      <SingleSelect
        onClear={() => {
          setValue(undefined);
        }}
        value={value}
        onChange={setValue}
      >
        <SingleSelectOption value="apple">Apple</SingleSelectOption>
        <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
      </SingleSelect>
    );\`
      }
    }
  },
  render: ({
    ...props
  }) => {
    const [value, setValue] = React.useState<string | number>();
    return <SingleSelect {...props} onClear={() => {
      setValue(undefined);
    }} value={value} onChange={setValue}>\r
        <SingleSelectOption value="apple">Apple</SingleSelectOption>\r
        <SingleSelectOption value="avocado">Avocado</SingleSelectOption>\r
        <SingleSelectOption value="banana">Banana</SingleSelectOption>\r
        <SingleSelectOption value="kiwi">Kiwi</SingleSelectOption>\r
        <SingleSelectOption value="mango">Mango</SingleSelectOption>\r
        <SingleSelectOption value="orange">Orange</SingleSelectOption>\r
        <SingleSelectOption value="strawberry">Strawberry</SingleSelectOption>\r
      </SingleSelect>;
  },
  name: 'Controlled'
} satisfies SingleSelectStory`,...(pe=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var de,me,Se;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    size: 'S'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <SingleSelect size="S">
          <SingleSelectOption value="apple">Apple</SingleSelectOption>
          <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
          <SingleSelectOption value="banana">Banana</SingleSelectOption>
          <SingleSelectOption value="kiwi">Kiwi</SingleSelectOption>
          <SingleSelectOption value="mango">Mango</SingleSelectOption>
          <SingleSelectOption value="orange">Orange</SingleSelectOption>
          <SingleSelectOption value="strawberry">Strawberry</SingleSelectOption>
        </SingleSelect>
        \`
      }
    }
  },
  name: 'Small Size'
} satisfies SingleSelectStory`,...(Se=(me=y.parameters)==null?void 0:me.docs)==null?void 0:Se.source}}};var ge,he,ve;b.parameters={...b.parameters,docs:{...(ge=b.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    startIcon: <Plus />,
    error: 'Error'
  },
  parameters: {
    docs: {
      code: outdent\`
      <SingleSelect>
        <SingleSelectOption value="apple" startIcon={<Plus />}>
          Apple
        </SingleSelectOption>
        <SingleSelectOption value="avocado" startIcon={<Plus />}>
          Avocado
        </SingleSelectOption>
      </SingleSelect>\`
    }
  },
  render: ({
    label,
    error,
    hint,
    ...props
  }) => {
    const selectRef = React.useRef<HTMLDivElement | null>(null);
    return <Field.Root error={error} hint={hint}>\r
        <Field.Label onClick={() => selectRef.current?.focus()}>{label}</Field.Label>\r
        <SingleSelect ref={selectRef} {...props}>\r
          <SingleSelectOption value="apple" startIcon={<Plus />}>\r
            Apple\r
          </SingleSelectOption>\r
          <SingleSelectOption value="avocado" startIcon={<Plus />}>\r
            Avocado\r
          </SingleSelectOption>\r
          <SingleSelectOption value="banana" startIcon={<Plus />}>\r
            Banana\r
          </SingleSelectOption>\r
        </SingleSelect>\r
        <Field.Error />\r
        <Field.Hint />\r
      </Field.Root>;
  },
  name: 'Start Icon'
}`,...(ve=(he=b.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var fe,ye,be;O.parameters={...O.parameters,docs:{...(fe=O.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: ({
    ...props
  }) => {
    const [values, setValues] = React.useState<string[]>([]);
    return <MultiSelect {...props} onClear={() => {
      setValues([]);
    }} value={values} onChange={setValues}>\r
        <MultiSelectOption value="apple">Apple</MultiSelectOption>\r
        <MultiSelectOption value="avocado">Avocado</MultiSelectOption>\r
        <MultiSelectOption value="banana">Banana</MultiSelectOption>\r
        <MultiSelectOption value="kiwi">Kiwi</MultiSelectOption>\r
        <MultiSelectOption value="mango">Mango</MultiSelectOption>\r
        <MultiSelectOption value="orange">Orange</MultiSelectOption>\r
        <MultiSelectOption value="strawberry">Strawberry</MultiSelectOption>\r
      </MultiSelect>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <MultiSelect>
          <MultiSelectOption value="apple">Apple</MultiSelectOption>
          <MultiSelectOption value="avocado">Avocado</MultiSelectOption>
        </MultiSelect>\`
      }
    }
  },
  name: 'Multiple'
} satisfies MultipleSelectStory`,...(be=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var Oe,Me,we;M.parameters={...M.parameters,docs:{...(Oe=M.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    withTags: true
  },
  render: ({
    ...props
  }) => {
    const [values, setValues] = React.useState<string[]>([]);
    return <MultiSelect {...props} onClear={() => {
      setValues([]);
    }} value={values} onChange={setValues}>\r
        <MultiSelectOption value="apple">Apple</MultiSelectOption>\r
        <MultiSelectOption value="avocado">Avocado</MultiSelectOption>\r
        <MultiSelectOption value="banana">Banana</MultiSelectOption>\r
        <MultiSelectOption value="kiwi">Kiwi</MultiSelectOption>\r
        <MultiSelectOption value="mango">Mango</MultiSelectOption>\r
        <MultiSelectOption value="orange">Orange</MultiSelectOption>\r
        <MultiSelectOption value="strawberry">Strawberry</MultiSelectOption>\r
      </MultiSelect>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <MultiSelect withTags>
          <MultiSelectOption value="apple">Apple</MultiSelectOption>
          <MultiSelectOption value="avocado">Avocado</MultiSelectOption>
        </MultiSelect>\`
      }
    }
  },
  name: 'Multiple With Tags'
} satisfies MultipleSelectStory`,...(we=(Me=M.parameters)==null?void 0:Me.docs)==null?void 0:we.source}}};var xe,Ae,je;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: ({
    ...props
  }) => {
    const options = [{
      label: 'Banana',
      value: 'banana'
    }, {
      label: 'Green fruits',
      children: [{
        label: 'Apple',
        value: 'apple'
      }, {
        label: 'Avocado',
        value: 'avocado'
      }, {
        label: 'Kiwi',
        value: 'kiwi'
      }]
    }, {
      label: 'Orange fruits',
      children: [{
        label: 'Mango',
        value: 'mango'
      }, {
        label: 'Orange',
        value: 'orange'
      }]
    }, {
      label: 'Strawberry',
      value: 'strawberry'
    }];
    const [values, setValues] = React.useState<Array<string>>([]);
    return <MultiSelectNested {...props} onClear={() => {
      setValues([]);
    }} value={values} onChange={setValues} options={options} aria-label="fruit Label" />;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        const options = [
            { label: 'Banana', value: 'banana' },
            { 
              label: 'Green fruits', 
              children: [ 
                { label: 'Apple', value: 'apple' }, 
                { label: 'Avocado', value: 'avocado' },
              ]
            },
        ];

        <MultiSelectNested options={options} />\`
      }
    }
  },
  name: 'Multiple Nested Select'
} satisfies MultipleSelectNestedStory`,...(je=(Ae=w.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var Re,Ce,Te;x.parameters={...x.parameters,docs:{...(Re=x.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    label: 'Fruits',
    error: 'Error',
    hint: 'Description line lorem ipsum'
  },
  render: ({
    label,
    error,
    hint,
    ...props
  }) => {
    const selectRef = React.useRef<HTMLDivElement | null>(null);
    return <Field.Root error={error} hint={hint}>\r
        <Field.Label onClick={() => selectRef.current?.focus()}>{label}</Field.Label>\r
        <SingleSelect ref={selectRef} {...props}>\r
          <SingleSelectOption value="apple">Apple</SingleSelectOption>\r
          <SingleSelectOption value="avocado">Avocado</SingleSelectOption>\r
          <SingleSelectOption value="banana">Banana</SingleSelectOption>\r
          <SingleSelectOption value="kiwi">Kiwi</SingleSelectOption>\r
          <SingleSelectOption value="mango">Mango</SingleSelectOption>\r
          <SingleSelectOption value="orange">Orange</SingleSelectOption>\r
          <SingleSelectOption value="strawberry">Strawberry</SingleSelectOption>\r
        </SingleSelect>\r
        <Field.Error />\r
        <Field.Hint />\r
      </Field.Root>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Field.Root error="Error" hint="Description line lorem ipsum">
            <Field.Label>Fruits</Field.Label>
            <SingleSelect placeholder="My favourite fruit is...">
              <SingleSelectOption value="apple">Apple</SingleSelectOption>
              <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
            </SingleSelect>
            <Field.Error />
            <Field.Hint />
          </Field.Root>
        \`
      }
    }
  },
  name: 'Single Select Field'
}`,...(Te=(Ce=x.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source}}};var Ve,ke,Fe;A.parameters={...A.parameters,docs:{...(Ve=A.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    label: 'Fruits',
    error: 'Error',
    hint: 'Description line lorem ipsum'
  },
  render: ({
    label,
    error,
    hint,
    ...props
  }) => {
    const multiSelectRef = React.useRef<HTMLDivElement | null>(null);
    return <Field.Root error={error} hint={hint}>\r
        <Field.Label onClick={() => multiSelectRef.current?.focus()}>{label}</Field.Label>\r
        <MultiSelect {...props} withTags ref={multiSelectRef}>\r
          <MultiSelectOption value="apple">Apple</MultiSelectOption>\r
          <MultiSelectOption value="avocado">Avocado</MultiSelectOption>\r
          <MultiSelectOption value="banana">Banana</MultiSelectOption>\r
          <MultiSelectOption value="kiwi">Kiwi</MultiSelectOption>\r
          <MultiSelectOption value="mango">Mango</MultiSelectOption>\r
          <MultiSelectOption value="orange">Orange</MultiSelectOption>\r
          <MultiSelectOption value="strawberry">Strawberry</MultiSelectOption>\r
        </MultiSelect>\r
        <Field.Error />\r
        <Field.Hint />\r
      </Field.Root>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Field.Root error="Error" hint="Description line lorem ipsum">
            <Field.Label>Fruits</Field.Label>
            <MultiSelect placeholder="My favourite fruit is...">
              <MultiSelectOption value="apple">Apple</MultiSelectOption>
              <MultiSelectOption value="avocado">Avocado</MultiSelectOption>
            </MultiSelect>
            <Field.Error />
            <Field.Hint />
          </Field.Root>\`
      }
    }
  },
  name: 'Multiple Select Field'
}`,...(Fe=(ke=A.parameters)==null?void 0:ke.docs)==null?void 0:Fe.source}}};var Ie,Ee,Ne;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  tags: ['!dev'],
  argTypes: {
    onChange: {
      control: false,
      action: 'value changed',
      description: 'Callback function invoked when the selected value changes. Receives the new value as an argument.',
      type: {
        name: 'function'
      },
      table: {
        type: {
          summary: 'function',
          detail: '(value: string | number) => void'
        }
      }
    },
    value: {
      control: 'text',
      description: 'The currently selected value. If \`null\`, no option is selected.',
      type: {
        name: 'function'
      },
      table: {
        type: {
          summary: 'string | number | null'
        }
      }
    },
    clearLabel: {
      control: 'text',
      description: 'Label for the clear action button.',
      type: {
        name: 'string'
      },
      table: {
        defaultValue: {
          summary: \`'Clear'\`
        }
      },
      defaultValue: 'Clear'
    },
    onClear: {
      control: false,
      action: 'clear triggered',
      description: 'Callback function invoked when the clear action is triggered, allowing for custom clear behavior.',
      table: {
        type: {
          summary: 'function',
          detail: '(event: React.MouseEvent<HTMLButtonElement>) => void'
        }
      }
    },
    'aria-label': {
      control: false,
      description: 'Accessibility label for the select component.',
      type: {
        name: 'string'
      },
      table: {}
    },
    'aria-describedby': {
      control: false,
      description: 'Accessibility description, typically referencing additional descriptive elements like hints or error messages.',
      type: {
        name: 'string'
      },
      table: {}
    },
    customizeContent: {
      control: false,
      description: 'Function to customize the displayed content based on the selected value. If customizeContent is not provided, the component will use the default behavior, which is to convert the value to a string and display it.',
      type: {
        name: 'function'
      },
      table: {
        type: {
          summary: 'function',
          detail: \`(value?: string | number) => string\`
        }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the select component when set to \`true\`, preventing user interaction.',
      type: {
        name: 'boolean'
      },
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      defaultValue: false
    },
    hasError: {
      control: 'boolean',
      description: 'Indicates whether the select component is in an error state, often changing its visual styling to reflect the error.',
      type: {
        name: 'boolean'
      },
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      defaultValue: false
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading spinner in place of the dropdown caret icon, indicating that data is being loaded.',
      type: {
        name: 'boolean'
      },
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      defaultValue: false
    },
    id: {
      control: false,
      description: 'The \`id\` attribute for the select component.',
      type: {
        name: 'string'
      },
      table: {}
    },
    name: {
      control: false,
      description: 'The \`name\` attribute for the select component.',
      type: {
        name: 'string'
      },
      table: {}
    },
    onCloseAutoFocus: {
      control: false,
      description: 'Callback function invoked to handle focus when the select dropdown is closed, useful for managing focus behavior in modals or dialogs.',
      table: {
        type: {
          summary: 'function',
          detail: '(event: React.FocusEvent<HTMLDivElement>) => void'
        }
      }
    },
    onReachEnd: {
      control: false,
      description: 'Callback function invoked when the end of the select options is reached, useful for implementing infinite scrolling or lazy loading of options.',
      table: {
        type: {
          summary: 'function',
          detail: '(entry: IntersectionObserverEntry) => void'
        }
      }
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when no value is selected',
      type: {
        name: 'string'
      },
      table: {}
    },
    required: {
      control: false,
      description: 'Marks the select component as required.',
      type: {
        name: 'boolean'
      },
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      defaultValue: false
    },
    size: {
      control: 'radio',
      options: ['S', 'M'],
      description: 'Size of the input',
      table: {
        type: {
          summary: 'enum',
          detail: "'S' | 'M'"
        },
        defaultValue: {
          summary: '"M"'
        }
      }
    },
    startIcon: {
      control: false,
      description: 'An optional icon displayed at the start of the select component, enhancing visual context or branding.',
      table: {
        type: {
          summary: 'ReactNode'
        }
      }
    },
    children: {
      control: false,
      description: 'The selectable options rendered within the select dropdown, typically composed of \`SingleSelectOption\` components.',
      table: {
        type: {
          summary: 'ReactNode'
        }
      }
    }
  }
}`,...(Ne=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.source}}};var Le,qe,ze;R.parameters={...R.parameters,docs:{...(Le=R.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  /**\r
   * add !dev tag so this story does not appear in the sidebar\r
   * as it exists solely for documenting the props.\r
   */
  tags: ['!dev'],
  argTypes: {
    startIcon: {
      control: false,
      description: 'An optional icon to display at the start of the MultiSelectOption.',
      table: {
        type: {
          summary: 'React.ReactNode'
        }
      }
    },
    value: {
      control: false,
      description: 'The value of the option.',
      type: {
        required: true
      },
      table: {
        type: {
          summary: 'string | number'
        }
      }
    }
  }
}`,...(ze=(qe=R.parameters)==null?void 0:qe.docs)==null?void 0:ze.source}}};var Be,De,Pe;C.parameters={...C.parameters,docs:{...(Be=C.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  tags: ['!dev'],
  argTypes: {
    children: {
      control: false,
      description: 'The children components, typically the options for the MultiSelect.',
      table: {
        type: {
          summary: 'React.ReactNode'
        }
      }
    },
    clearLabel: {
      control: 'text',
      description: 'Label for the clear button.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'Clear'
        }
      }
    },
    customizeContent: {
      control: false,
      description: 'Custom function to render the selected values as a string.',
      table: {
        type: {
          summary: 'function',
          detail: '(value?: string[]) => string'
        },
        defaultValue: {
          summary: '(value) => value.join(",")'
        }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the MultiSelect component when true.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    hasError: {
      control: 'boolean',
      description: 'Displays error styles when true.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading spinner in place of the dropdown caret icon, indicating that data is being loaded.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    id: {
      control: 'text',
      description: 'The id of the component.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    name: {
      control: 'text',
      description: 'The name of the MultiSelect component for form submissions.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    onChange: {
      control: false,
      description: 'Callback function triggered when the value changes.',
      table: {
        type: {
          summary: 'function',
          detail: '(value: string[]) => void'
        }
      }
    },
    onClear: {
      control: false,
      description: 'Callback function triggered when the clear button is clicked.',
      table: {
        type: {
          summary: 'function',
          detail: '() => void'
        }
      }
    },
    onCloseAutoFocus: {
      control: false,
      description: 'Callback function triggered when the select closes and refocuses.',
      table: {
        type: {
          summary: 'function',
          detail: '() => void'
        }
      }
    },
    onReachEnd: {
      control: false,
      description: 'Callback function triggered when the user scrolls to the end of the options.',
      table: {
        type: {
          summary: 'function',
          detail: '(entry: IntersectionObserverEntry) => void'
        }
      }
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text to display when no values are selected.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    required: {
      control: 'boolean',
      description: 'Indicates if the field is required.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the MultiSelect component.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'medium'
        }
      }
    },
    startIcon: {
      control: false,
      description: 'An optional icon to display at the start of the input field.',
      table: {
        type: {
          summary: 'React.ReactNode'
        }
      }
    },
    value: {
      control: false,
      description: 'The selected values of the MultiSelect component.',
      table: {
        type: {
          summary: 'string[] | null'
        },
        defaultValue: {
          summary: 'null'
        }
      }
    },
    withTags: {
      control: 'boolean',
      description: 'Display the selected values as tags when true.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    }
  }
}`,...(Pe=(De=C.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var Ke,He,Ge;T.parameters={...T.parameters,docs:{...(Ke=T.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  /**\r
   * add !dev tag so this story does not appear in the sidebar\r
   * as it exists solely for documenting the props.\r
   */
  tags: ['!dev'],
  argTypes: {
    startIcon: {
      control: false,
      description: 'An optional icon to display at the start of the MultiSelectOption.',
      table: {
        type: {
          summary: 'React.ReactNode'
        }
      }
    },
    value: {
      control: 'text',
      description: 'The value of the selected option.',
      table: {
        type: {
          summary: 'string | number'
        }
      }
    }
  }
}`,...(Ge=(He=T.parameters)==null?void 0:He.docs)==null?void 0:Ge.source}}};var _e,$e,We;V.parameters={...V.parameters,docs:{...(_e=V.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  /**\r
   * add !dev tag so this story does not appear in the sidebar\r
   * as it exists solely for documenting the props.\r
   */
  tags: ['!dev'],
  argTypes: {
    options: {
      control: false,
      description: 'An array of options which can either be standalone options or groups of options.',
      table: {
        type: {
          required: true,
          summary: 'Array<MulitSelectNestedOption | MulitSelectNestedGroup>',
          detail: \`
          MulitSelectNestedOption {
            value: string | number;
            label: string;
            startIcon?: React.ReactNode;
          }

          MulitSelectNestedGroup {
            label: string;
            children: Array<MulitSelectNestedOption>;
          }
        \`
        },
        defaultValue: {
          summary: '[]'
        }
      }
    },
    value: {
      control: false,
      description: 'The selected values for the MultiSelect component.',
      table: {
        type: {
          summary: 'string[] | null'
        },
        defaultValue: {
          summary: 'null'
        }
      }
    },
    onChange: {
      control: false,
      description: 'Callback function triggered when the selection changes.',
      table: {
        type: {
          summary: 'function',
          detail: '(value: string[]) => void'
        }
      }
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text displayed when no values are selected.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the MultiSelect component when set to true.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    withTags: {
      control: 'boolean',
      description: 'Displays the selected values as tags when true.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Size of the MultiSelect component.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'medium'
        }
      }
    },
    clearLabel: {
      control: false,
      description: 'Label for the clear button.',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: 'Clear'
        }
      }
    },
    startIcon: {
      control: false,
      description: 'Optional icon to display at the start of the MultiSelect.',
      table: {
        type: {
          summary: 'React.ReactNode'
        }
      }
    },
    onClear: {
      control: false,
      description: 'Callback function triggered when the clear button is clicked.',
      table: {
        type: {
          summary: 'function',
          detail: '() => void'
        }
      }
    },
    onReachEnd: {
      control: false,
      description: 'Callback function triggered when the user scrolls to the end of the options.',
      table: {
        type: {
          summary: 'function',
          detail: '(entry: IntersectionObserverEntry) => void'
        }
      }
    }
  }
}`,...(We=($e=V.parameters)==null?void 0:$e.docs)==null?void 0:We.source}}};const Et=["Base","Disabled","Loading","Controlled","Size","StartIcon","Multiple","MultipleWithTags","MultipleNestedSelect","SingleSelectField","MultiSelectField","SingleSelectProps","SingleSelectOptionsProps","MultipleSelectProps","MultipleSelectOptions","MultipleSelectNestedProps"],Gt=Object.freeze(Object.defineProperty({__proto__:null,Base:g,Controlled:f,Disabled:h,Loading:v,MultiSelectField:A,Multiple:O,MultipleNestedSelect:w,MultipleSelectNestedProps:V,MultipleSelectOptions:T,MultipleSelectProps:C,MultipleWithTags:M,SingleSelectField:x,SingleSelectOptionsProps:R,SingleSelectProps:j,Size:y,StartIcon:b,__namedExportsOrder:Et,default:It},Symbol.toStringTag,{value:"Module"}));export{g as B,f as C,h as D,O as M,Gt as S,y as a,b,M as c,w as d,x as e,A as f,j as g,R as h,C as i,T as j,V as k};
