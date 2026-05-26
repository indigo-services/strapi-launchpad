import{r as y,v as le,u as w,j as t,F as de}from"./iframe-_cKE9r89.js";import{d as k}from"./index-BxBVU389.js";import{$ as j,D as ce,a as me,b as ue}from"./DatePicker-DeFJ8sXv.js";import{u as pe}from"./useComposeRefs-BPjCxrPe.js";import{u as fe}from"./useControllableState-CIwy89gb.js";import{u as De}from"./useDateFormatter-CB3rShP6.js";import{u as he,R as C,L as be,E as Te,H as ge}from"./Field-Cwhta1v_.js";import{T as ye}from"./TimePicker-DZj-LHYv.js";const P=y.forwardRef(({clearLabel:i="clear",dateLabel:s="Choose date",timeLabel:d="Choose time",disabled:o=!1,hasError:A,onChange:S,onClear:T,required:E=!1,step:N,value:r,initialDate:F,size:L,...K},Y)=>{const G=y.useRef(null),[c,u]=y.useState(!1),J=r?f(r,!1):void 0,[a,m]=fe({defaultProp:F?f(F,!1):void 0,prop:c?void 0:J,onChange(e){S&&S(e==null?void 0:e.toDate(j()))}}),Q=le("DateTimePicker"),X=De(Q.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),p=a?X.format(a.toDate(j())):"",_=y.useRef(r);w(()=>{c&&a&&m(void 0)},[c,a,m]),w(()=>{const e=_.current;r==null&&e!=null&&a&&m(void 0),c&&r!==e&&u(!1),_.current=r},[r,a,c,m,u]),w(()=>{c&&a===void 0&&r==null&&u(!1)},[c,a,r,u]);const ee=e=>{let n=e?f(e):void 0;if(p&&n){const[g,v]=p.split(":");n=n.set({hour:parseInt(g,10),minute:parseInt(v,10)})}m(n)},ae=e=>{if(!e)return;const[n,g]=e.split(":"),v=a?a.set({hour:parseInt(n,10),minute:parseInt(g,10)}):f(new Date).set({hour:parseInt(n,10),minute:parseInt(g,10)});m(v)},te=e=>{e.preventDefault(),u(!0),T&&T(e)},re=()=>{const e=a?a.set({hour:0,minute:0}):f(new Date);m(e)},ie=pe(G,Y),{error:se,id:oe,labelNode:ne}=he("DateTimePicker"),R=!!se||A;return t.jsxs(de,{"aria-labelledby":ne?`${oe}-label`:void 0,role:"group",flex:"1",gap:1,wrap:"wrap",children:[t.jsx(C,{flex:"1",children:t.jsx(ce,{...K,hasError:R,size:L,value:a==null?void 0:a.toDate("UTC"),onChange:ee,required:E,onClear:T?te:void 0,clearLabel:`${i} date`,disabled:o,ref:ie,"aria-label":s})}),t.jsx(C,{flex:"1",children:t.jsx(ye,{size:L,hasError:R,value:p,onChange:ae,onClear:T&&p!==void 0&&p!=="00:00"?re:void 0,clearLabel:`${i} time`,required:E,disabled:o,step:N,"aria-label":d})})]})}),f=(i,s=!0)=>{const d=i.toISOString();let o=me(d);return s&&(o=o.set({hour:0,minute:0})),ue(o)};P.__docgenInfo={description:"",methods:[],displayName:"DateTimePicker",props:{dateLabel:{required:!1,tsType:{name:"string"},description:`Label for the DatePicker field
@default "Date"`,defaultValue:{value:"'Choose date'",computed:!1}},timeLabel:{required:!1,tsType:{name:"string"},description:`Label for the TimePicker field
@default "Time"`,defaultValue:{value:"'Choose time'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"Date | undefined",elements:[{name:"Date"},{name:"undefined"}]},name:"date"}],return:{name:"void"}}},description:""},value:{required:!1,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:"Value. The Date passed as value"},clearLabel:{defaultValue:{value:"'clear'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit","Pick"]};const{useArgs:ke}=__STORYBOOK_MODULE_PREVIEW_API__,Pe={title:"Inputs/DateTimePicker",component:P,parameters:{chromatic:{disableSnapshot:!1}},argTypes:{disabled:{control:"boolean",description:"If true, both the DatePicker and TimePicker fields are disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{control:!1,description:"If true, the DatePicker and TimePicker fields are required.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},value:{control:!1,description:"The controlled value of the DateTimePicker. The value is a Date object or null.",table:{type:{summary:"Date",detail:"Date | null"}}},initialDate:{control:!1,description:"The initial date to be displayed when the DateTimePicker is first rendered.",table:{type:{summary:"Date"}}},step:{control:!1,description:"The time step in minutes for the TimePicker field.",table:{type:{summary:"number"},defaultValue:{summary:"5"}}},onChange:{action:"changed",description:"Callback fired when the selected date and/or time changes. The `date` parameter is the new Date object or `undefined`.",table:{type:{summary:"function",detail:"(date: Date | undefined) => void"}}},onClear:{action:"cleared",description:"Callback fired when the clear button is clicked.",table:{type:{summary:"function",detail:"(e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => void"}}},clearLabel:{control:!1,description:"Label for the clear button. Used for both date and time fields.",table:{type:{summary:"string"},defaultValue:{summary:"clear"}}},dateLabel:{control:!1,description:"Label for the DatePicker field.",table:{type:{summary:"string"},defaultValue:{summary:"Choose date"}}},timeLabel:{control:!1,description:"Label for the TimePicker field.",table:{type:{summary:"string"},defaultValue:{summary:"Choose time"}}},size:{control:"radio",options:["S","M"],description:"The size of the input fields for both DatePicker and TimePicker.",table:{type:{summary:"'S' | 'M'"}}}}},x={render:({...i})=>{const[,s]=ke();return t.jsx(P,{...i,onChange:d=>s({value:d}),onClear:()=>s(()=>{})})}},l={...x,args:{initialDate:new Date("1994-12-18T15:00:00.000Z")},parameters:{docs:{source:{code:k`
        <DateTimePicker initialDate={new Date('1994-12-18T15:00:00.000Z')} />
        `}}},name:"Base"},D={...x,args:{...l.args,disabled:!0},parameters:{docs:{source:{code:k`
        <DateTimePicker
          initialDate={new Date('1994-12-18T15:00:00.000Z')}
          disabled
        />
        `}}},name:"Disabled"},h={...x,args:{...l.args,size:"S"},parameters:{docs:{source:{code:k`
        <DateTimePicker
          initialDate={new Date('1994-12-18T15:00:00.000Z')}
          size="S"
        />
        `}}},name:"Small size"},b={render:({error:i,hint:s,label:d,...o})=>t.jsxs(C,{id:"with_field",error:i,hint:s,children:[t.jsx(be,{children:d}),t.jsx(P,{...o}),t.jsx(Te,{}),t.jsx(ge,{})]}),args:{...l.args,label:"Date Time picker",error:"Error",hint:"Description line lorem ipsum"},parameters:{docs:{source:{code:k`
        <Field.Root
          id="with_field"
          error="Error"
          hint="Description line lorem ipsum"
        >
          <Field.Label>Date time picker</Field.Label>
          <DateTimePicker id="with_field" />
          <Field.Error />
          <Field.Hint />
        </Field.Root>
      `}}},name:"With field"};var V,I,$;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...Template,
  args: {
    initialDate: new Date('1994-12-18T15:00:00.000Z')
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <DateTimePicker initialDate={new Date('1994-12-18T15:00:00.000Z')} />
        \`
      }
    }
  },
  name: 'Base'
}`,...($=(I=l.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var z,B,O;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Base.args,
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <DateTimePicker
          initialDate={new Date('1994-12-18T15:00:00.000Z')}
          disabled
        />
        \`
      }
    }
  },
  name: 'Disabled'
}`,...(O=(B=D.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var q,M,Z;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...Template,
  args: {
    ...Base.args,
    size: 'S'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <DateTimePicker
          initialDate={new Date('1994-12-18T15:00:00.000Z')}
          size="S"
        />
        \`
      }
    }
  },
  name: 'Small size'
}`,...(Z=(M=h.parameters)==null?void 0:M.docs)==null?void 0:Z.source}}};var H,W,U;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: ({
    error,
    hint,
    label,
    ...props
  }) => {
    return <Field.Root id="with_field" error={error} hint={hint}>\r
        <Field.Label>{label}</Field.Label>\r
        <DateTimePicker {...props} />\r
        <Field.Error />\r
        <Field.Hint />\r
      </Field.Root>;
  },
  args: {
    ...Base.args,
    label: 'Date Time picker',
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
          <Field.Label>Date time picker</Field.Label>
          <DateTimePicker id="with_field" />
          <Field.Error />
          <Field.Hint />
        </Field.Root>
      \`
      }
    }
  },
  name: 'With field'
}`,...(U=(W=b.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};const ve=["Base","Disabled","Size","WithField"],Re=Object.freeze(Object.defineProperty({__proto__:null,Base:l,Disabled:D,Size:h,WithField:b,__namedExportsOrder:ve,default:Pe},Symbol.toStringTag,{value:"Module"}));export{l as B,Re as D,h as S,b as W,D as a};
