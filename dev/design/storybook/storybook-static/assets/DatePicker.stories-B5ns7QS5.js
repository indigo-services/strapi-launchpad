import{j as e}from"./iframe-_cKE9r89.js";import{d as r}from"./index-BxBVU389.js";import{D as d}from"./DatePicker-DeFJ8sXv.js";import{R as W,L as v,E as B,H}from"./Field-Cwhta1v_.js";const V={title:"Inputs/DatePicker",component:d,args:{disabled:!1,locale:"en-GB",size:"M"},argTypes:{initialDate:{control:!1,description:"The initial date to be selected when the date picker opens. Defaults to the current date.",table:{type:{summary:"Date"},defaultValue:{summary:"Now"}}},value:{control:!1,description:"The controlled selected date.",table:{type:{summary:"Date"}}},minDate:{control:!1,description:"The minimum selectable date.",table:{type:{summary:"Date"}}},maxDate:{control:!1,description:"The maximum selectable date.",table:{type:{summary:"Date"}}},disabled:{control:"boolean",description:"If true, the date picker will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{control:!1,description:"If true, the date picker is a required field.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onChange:{action:"Date changed",description:"Callback function that fires when a new date is selected.",table:{type:{summary:"function",detail:"(date: Date | undefined) => void"}}},onClear:{action:"Date cleared",description:"Callback function to handle clearing the date selection.",table:{type:{summary:"function",detail:"(e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>) => void"}}},size:{control:"radio",options:["S","M"],description:"Size of the input field for the date picker.",table:{type:{summary:"'S' | 'M'"},defaultValue:{summary:'"M"'}}},calendarLabel:{control:!1,description:"Label for the calendar component within the date picker.",table:{type:{summary:"string"}}},clearLabel:{control:!1,description:"Label for the clear button.",table:{type:{summary:"string"},defaultValue:{summary:'"Clear"'}}},monthSelectLabel:{control:!1,description:"Label for the month dropdown in the calendar.",table:{type:{summary:"string"},defaultValue:{summary:'"Month"'}}},yearSelectLabel:{control:!1,description:"Label for the year dropdown in the calendar.",table:{type:{summary:"string"},defaultValue:{summary:'"Year"'}}},locale:{control:!1,description:'The locale to be used for date formatting (e.g., "en-US", "fr-FR").',table:{type:{summary:"string"}}}},render:({...c})=>e.jsx(d,{...c}),parameters:{chromatic:{disableSnapshot:!1}}},a={args:{initialDate:new Date},name:"Base"},t={name:"Disabled",args:{disabled:!0},parameters:{docs:{source:{code:r`
        <DatePicker disabled />
        `}}}},n={name:"Small size",args:{size:"S"},parameters:{docs:{source:{code:r`
        <DatePicker size="S" />
        `}}}},o={args:{minDate:new Date("2022-01-01"),maxDate:new Date("2022-12-31")},name:"Min/Max date",parameters:{docs:{source:{code:r`
        <DatePicker
          minDate={new Date('2022-01-01')}
          maxDate={new Date('2022-12-31')}
        />
        `}}}},s={args:{locale:"de-DE"},name:"Locale",parameters:{docs:{source:{code:r`
        <DatePicker
          locale="de-DE"
        />
        `}}}},i={render:({error:c,hint:_,label:j,...T})=>e.jsxs(W,{id:"with_field",error:c,hint:_,children:[e.jsx(v,{children:j}),e.jsx(d,{...T}),e.jsx(B,{}),e.jsx(H,{})]}),args:{...a.args,label:"Date",error:"Error",hint:"Description line lorem ipsum"},parameters:{docs:{source:{code:r`
        <Field.Root
          id="with_field"
          error="Error"
          hint="Description line lorem ipsum"
        >
          <Field.Label>Date</Field.Label>
          <DatePicker onClear={() => {}} id="with_field" />
          <Field.Error />
          <Field.Hint />
        </Field.Root>
      `}}},name:"With field"},l={name:"Without clear icon",args:{onClear:void 0,initialDate:new Date},parameters:{docs:{source:{code:r`
        <DatePicker onClear={undefined} initialDate={new Date()} />
        `}}}};var m,u,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    initialDate: new Date()
  },
  name: 'Base'
} satisfies Story`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var D,f,b;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Disabled',
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <DatePicker disabled />
        \`
      }
    }
  }
} satisfies Story`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,y,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Small size',
  args: {
    size: 'S'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <DatePicker size="S" />
        \`
      }
    }
  }
} satisfies Story`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var S,w,k;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    minDate: new Date('2022-01-01'),
    maxDate: new Date('2022-12-31')
  },
  name: 'Min/Max date',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <DatePicker
          minDate={new Date('2022-01-01')}
          maxDate={new Date('2022-12-31')}
        />
        \`
      }
    }
  }
} satisfies Story`,...(k=(w=o.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var L,F,x;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    locale: 'de-DE'
  },
  name: 'Locale',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <DatePicker
          locale="de-DE"
        />
        \`
      }
    }
  }
} satisfies Story`,...(x=(F=s.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var E,M,P;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: ({
    error,
    hint,
    label,
    ...props
  }) => {
    return <Field.Root id="with_field" error={error} hint={hint}>\r
        <Field.Label>{label}</Field.Label>\r
        <DatePicker {...props} />\r
        <Field.Error />\r
        <Field.Hint />\r
      </Field.Root>;
  },
  args: {
    ...Base.args,
    label: 'Date',
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
          <Field.Label>Date</Field.Label>
          <DatePicker onClear={() => {}} id="with_field" />
          <Field.Error />
          <Field.Hint />
        </Field.Root>
      \`
      }
    }
  },
  name: 'With field'
}`,...(P=(M=i.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var C,z,R;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Without clear icon',
  args: {
    onClear: undefined,
    initialDate: new Date()
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <DatePicker onClear={undefined} initialDate={new Date()} />
        \`
      }
    }
  }
} satisfies Story`,...(R=(z=l.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const I=["Base","Disabled","Size","MinMaxDate","Locale","WithField","WithoutClearIcon"],U=Object.freeze(Object.defineProperty({__proto__:null,Base:a,Disabled:t,Locale:s,MinMaxDate:o,Size:n,WithField:i,WithoutClearIcon:l,__namedExportsOrder:I,default:V},Symbol.toStringTag,{value:"Module"}));export{a as B,U as D,s as L,o as M,n as S,i as W,t as a};
