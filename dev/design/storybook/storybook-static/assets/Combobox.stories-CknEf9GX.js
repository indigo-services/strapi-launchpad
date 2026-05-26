import{j as e,r as p,F,H as ue,T as pe,s as ce}from"./iframe-_cKE9r89.js";import{d as i}from"./index-BxBVU389.js";import{C as s,O as c}from"./Combobox-CvQql6sE.js";import{R as de,L as be,E as me,H as he}from"./Field-Cwhta1v_.js";const d=[{name:"Apple",value:"apple"},{name:"Avocado",value:"avocado"},{name:"Banana",value:"banana"},{name:"Kiwi",value:"kiwi"},{name:"Mango",value:"mango"},{name:"Orange",value:"orange"},{name:"Strawberry",value:"strawberry"}],ye={title:"Inputs/Combobox",component:s,args:{disabled:!1,placeholder:"My favourite fruit is...",size:"M"},argTypes:{disabled:{control:"boolean",description:"If true, disables the combobox",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{control:!1,description:"If true, the combobox is a required field",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultTextValue:{control:!1,description:"Default value of what the user sees and types in the input field",table:{type:{summary:"string"}}},defaultOpen:{control:!1,description:"If true, the combobox dropdown is open by default",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultFilterValue:{control:"text",description:"The default value used to filter the list of options displayed in the dropdown.",table:{type:{summary:"string"}}},filterValue:{control:"text",description:"The current value used to filter the list of options displayed in the dropdown.",table:{type:{summary:"string"}}},open:{control:"boolean",description:"Controls whether the combobox dropdown is open",table:{type:{summary:"boolean"}}},loading:{control:"boolean",description:"Indicates if the combobox is in a loading state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},value:{control:"text",description:"The controlled selected value of the combobox",table:{type:{summary:"string"}}},textValue:{control:"text",description:"What the user sees and types in the input field",table:{type:{summary:"string"}}},onOpenChange:{action:"open changed",description:"Callback fired when the open state changes",table:{type:{summary:"function",detail:"(open: boolean) => void"}}},onFilterValueChange:{action:"filter value changed",description:"Callback fired when the filter value changes",table:{type:{summary:"function",detail:"(value: string) => void"}}},onTextValueChange:{action:"text value changed",description:"Callback fired when the text value changes",table:{type:{summary:"function",detail:"(value: string) => void"}}},onChange:{action:"value changed",description:"Callback fired when the selected value changes",table:{type:{summary:"function",detail:"((value: string) => void)"}}},onClear:{action:"cleared",description:"Callback fired when the clear button is clicked",table:{type:{summary:"function",detail:"React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>"}}},onCreateOption:{action:"option created",description:"Callback fired when a new option is created",table:{type:{summary:"function",detail:"(value: string) => void"}}},onLoadMore:{action:"load more",description:"Callback fired to load more items",table:{type:{summary:"function",detail:"(entry: IntersectionObserverEntry) => void"}}},onInputChange:{action:"input changed",description:"Callback fired when the input value changes",table:{type:{summary:"function",detail:"React.ChangeEventHandler<HTMLInputElement>"}}},isPrintableCharacter:{description:"A custom function to check if a character is not alphabetical, used to filter input.",table:{type:{summary:"function",detail:"(str: string) => boolean"}}},allowCustomValue:{control:"boolean",description:"Allows the user to enter custom values not in the predefined options",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},autocomplete:{control:"radio",options:["none","list","both"],description:"Controls the autocomplete behavior of the combobox",table:{type:{summary:"enum",detail:"list | none | both | { type: 'list' ; filter: 'startsWith' | 'contains'}"},defaultValue:{summary:"both"}}},creatable:{control:"radio",options:[!1,!0,"visible"],description:'If true, allows creating new options. If "visible", always shows the create option.',table:{type:{summary:'boolean | "visible"'},defaultValue:{summary:"false"}}},creatableDisabled:{control:"boolean",description:"If true, disables the creatable option",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},createMessage:{control:!1,description:"Controls the text shown to the user when creating a new option",table:{type:{summary:"function",detail:"(value: string) => string"},defaultValue:{summary:'(value) => `Create "${value}"`'}}},hasMoreItems:{control:"boolean",description:"Indicates if there are more items to load",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loadingMessage:{control:"text",description:"Message to display while loading",table:{type:{summary:"string"},defaultValue:{summary:'"Loading content..."'}}},noOptionsMessage:{control:!1,description:"Function to generate the no options message",table:{type:{summary:"function",detail:"(value: string) => string"}}},size:{control:"radio",options:["S","M"],description:"Size of the combobox",table:{type:{summary:"enum",detail:"'S' | 'M'"},defaultValue:{summary:'"M"'}}},startIcon:{control:!1,description:"Icon to display at the start of the input",table:{type:{summary:"ReactNode"}}},placeholder:{control:"text",description:"Placeholder text to display when no value is selected",table:{type:{summary:"string"}}},clearLabel:{description:"Label for the clear button",table:{type:{summary:"string"},defaultValue:{summary:'"clear"'}}}},parameters:{chromatic:{disableSnapshot:!1}}},m={render:o=>e.jsx(s,{...o,children:d.map(({name:a,value:t})=>e.jsx(c,{value:t,children:a},t))}),parameters:{docs:{source:{code:i`
      <Combobox>
        <ComboboxOption value="apple">Apple</ComboboxOption>
        <ComboboxOption value="avocado">Avocado</ComboboxOption>
        <ComboboxOption value="banana">Banana</ComboboxOption>
        <ComboboxOption value="kiwi">Kiwi</ComboboxOption>
        <ComboboxOption value="mango">Mango</ComboboxOption>
        <ComboboxOption value="orange">Orange</ComboboxOption>
        <ComboboxOption value="strawberry">Strawberry</ComboboxOption>
      </Combobox>
        `}}}},h={args:{disabled:!0},parameters:{docs:{source:{code:i`
    <Combobox disabled>
      <ComboboxOption value="apple">Apple</ComboboxOption>
      <ComboboxOption value="avocado">Avocado</ComboboxOption>
    </Combobox>
        `}}}},y={args:{size:"S"},render:o=>e.jsx(s,{...o,children:d.map(({name:a,value:t})=>e.jsx(c,{value:t,children:a},t))}),parameters:{docs:{source:{code:i`
    <Combobox size="S">
      <ComboboxOption value="apple">Apple</ComboboxOption>
      <ComboboxOption value="avocado">Avocado</ComboboxOption>
    </Combobox>
        `}}}},f={args:{loading:!0,placeholder:"Loading options..."},render:({loading:o,placeholder:a})=>e.jsx(s,{placeholder:a,loading:o,children:d.map(({name:t,value:n})=>e.jsx(c,{value:n,children:t},n))}),parameters:{docs:{source:{code:i`
    <Combobox placeholder="Loading options..." loading>
      <ComboboxOption value="apple">Apple</ComboboxOption>
      <ComboboxOption value="avocado">Avocado</ComboboxOption>
    </Combobox>
        `}}}},C={render:()=>{const[o,a]=p.useState(""),[t,n]=p.useState(d),l=r=>{n([...t,{name:r,value:r}]),a(r)};return e.jsx(s,{placeholder:"My favourite fruit is...",value:o,onChange:a,onCreateOption:l,creatable:!0,children:t.map(({name:r,value:b})=>e.jsx(c,{value:b,children:r},b))})},name:"Creatable",parameters:{docs:{source:{code:i`
    <Combobox
      placeholder="My favourite fruit is..."
      value="apple"
      onChange={() => {}}
      onCreateOption={() => {}}
      creatable
    >
      <ComboboxOption value="apple">Apple</ComboboxOption>
      <ComboboxOption value="avocado">Avocado</ComboboxOption>
    </Combobox>
        `}}}},v={render:()=>{const[o,a]=p.useState(""),t=()=>{console.log("Created option")};return e.jsx(s,{placeholder:"My favourite fruit is...",value:o,onChange:a,onCreateOption:t,creatable:"visible",creatableStartIcon:e.jsx(ce,{fill:"neutral500"}),createMessage:()=>"Create a fruit",children:d.map(({name:n,value:l})=>e.jsx(c,{value:l,children:e.jsx(F,{gap:2,justifyContent:"space-between",children:e.jsxs(F,{gap:2,children:[e.jsx(ue,{fill:"neutral500"}),e.jsx(pe,{ellipsis:!0,children:n})]})})},l))})},name:"Creatable Visible",parameters:{docs:{source:{code:i`
    <Combobox
      placeholder="My favourite fruit is..."
      value="apple"
      onChange={() => {}}
      onCreateOption={() => {}}
      creatable="visible"
      creatableStartIcon={<Plus fill="neutral500" />}
      createMessage={() => 'Create a relation'}
    >
      <ComboboxOption value="apple">Apple</ComboboxOption>
      <ComboboxOption value="avocado">Avocado</ComboboxOption>
    </Combobox>
        `}}}},x={render:()=>{const[o,a]=p.useState(""),t=()=>{console.log("Created option")};return e.jsx(s,{placeholder:"My favourite fruit is...",value:o,onChange:a,onCreateOption:t,creatable:"visible",creatableDisabled:!0,creatableStartIcon:e.jsx(ce,{fill:"neutral500"}),createMessage:()=>"Create a fruit",children:d.map(({name:n,value:l})=>e.jsx(c,{value:l,children:e.jsx(F,{gap:2,justifyContent:"space-between",children:e.jsxs(F,{gap:2,children:[e.jsx(ue,{fill:"neutral500"}),e.jsx(pe,{ellipsis:!0,children:n})]})})},l))})},name:"Creatable Disabled",parameters:{docs:{source:{code:i`
      <Combobox
        placeholder="My favourite fruit is..."
        value="apple"
        onChange={() => {}}
        onCreateOption={() => {}}
        creatable="visible"
        creatableDisabled
        createMessage={() => "Create a relation"}
      >
        <ComboboxOption value="apple">Apple</ComboboxOption>
        <ComboboxOption value="avocado">Avocado</ComboboxOption>
      </Combobox>
        `}}}},g={args:{autocompleteMode:"both"},argTypes:{autocompleteMode:{type:"select",options:["none","list","both","list-contains"]}},render:({autocompleteMode:o,...a})=>{const[t,n]=p.useState(""),[l,r]=p.useState(o);return p.useEffect(()=>{r(o==="list-contains"?{type:"list",filter:"contains"}:o)},[o]),e.jsx(s,{value:t,onChange:n,autocomplete:l,onClear:()=>n(""),...a,children:d.map(({name:b,value:u})=>e.jsx(c,{value:u,children:b},u))})},name:"Autocomplete",parameters:{docs:{source:{code:i`
      <Combobox
        value="apple"
        onChange={() => {}}
        autocomplete="list"
        onClear={() => {}}
      >
        <ComboboxOption value="apple">Apple</ComboboxOption>
        <ComboboxOption value="avocado">Avocado</ComboboxOption>
      </Combobox>
        `}}}},O={args:{label:"Fruits",error:"Error",hint:"Description line lorem ipsum"},render:({error:o,hint:a,label:t,...n})=>{const[l,r]=p.useState("");return e.jsxs(de,{id:"with_field",error:o,hint:a,children:[e.jsx(be,{children:t}),e.jsx(s,{value:l,onChange:r,onClear:()=>r(""),...n,children:d.map(({name:b,value:u})=>e.jsx(c,{value:u,children:b},u))}),e.jsx(me,{}),e.jsx(he,{})]})},parameters:{docs:{source:{code:i`
    <Field.Root id="with_field" hint="Description line lorem ipsum" error="Error">
      <Field.Label>Fruits</Field.Label>
      <Combobox>
        <ComboboxOption value="apple">Apple</ComboboxOption>
        <ComboboxOption value="avocado">Avocado</ComboboxOption>
      </Combobox>
      <Field.Error />
      <Field.Hint />
    </Field.Root>
        `}}},name:"With Field"},w={args:{label:"Fruits",error:"Error",hint:"Description line lorem ipsum"},render:({error:o,hint:a,label:t,...n})=>{const[l,r]=p.useState("");return e.jsxs(de,{id:"with_field",error:o,hint:a,children:[e.jsx(be,{children:t}),e.jsx(s,{value:l,onChange:r,onClear:()=>r(""),...n,children:[...Array(1e3)].map((b,u)=>e.jsxs(c,{value:`option-${u}`,children:["Option ",u]},u))}),e.jsx(me,{}),e.jsx(he,{})]})},parameters:{docs:{source:{code:i`
          <Field.Root id="with_field" error={error} hint={hint}>
            <Field.Label>{label}</Field.Label>
            <Combobox {...props}>
              {options.map(({ name, value }) => (
                <ComboboxOption key={value} value={value}>{name}</ComboboxOption>
              ))}
            </Combobox>
            <Field.Error />
            <Field.Hint />
          </Field.Root>
        `}}},name:"Virtualization"},V={tags:["!dev"],argTypes:{disabled:{control:"boolean",description:"If true, disables the combobox",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{control:!1,description:"If true, the combobox is a required field",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultTextValue:{control:!1,description:"Default value of what the user sees and types in the input field",table:{type:{summary:"string"}}},defaultOpen:{control:!1,description:"If true, the combobox dropdown is open by default",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultFilterValue:{control:"text",description:"The default value used to filter the list of options displayed in the dropdown.",table:{type:{summary:"string"}}},filterValue:{control:"text",description:"The current value used to filter the list of options displayed in the dropdown.",table:{type:{summary:"string"}}},open:{control:"boolean",description:"Controls whether the combobox dropdown is open",table:{type:{summary:"boolean"}}},loading:{control:"boolean",description:"Indicates if the combobox is in a loading state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},value:{control:"text",description:"The controlled selected value of the combobox",table:{type:{summary:"string"}}},textValue:{control:"text",description:"What the user sees and types in the input field",table:{type:{summary:"string"}}},onOpenChange:{action:"open changed",description:"Callback fired when the open state changes",table:{type:{summary:"function",detail:"(open: boolean) => void"}}},onFilterValueChange:{action:"filter value changed",description:"Callback fired when the filter value changes",table:{type:{summary:"function",detail:"(value: string) => void"}}},onTextValueChange:{action:"text value changed",description:"Callback fired when the text value changes",table:{type:{summary:"function",detail:"(value: string) => void"}}},onChange:{action:"value changed",description:"Callback fired when the selected value changes",table:{type:{summary:"function",detail:"((value: string) => void)"}}},onClear:{action:"cleared",description:"Callback fired when the clear button is clicked",table:{type:{summary:"function",detail:"React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>"}}},onCreateOption:{action:"option created",description:"Callback fired when a new option is created",table:{type:{summary:"function",detail:"(value: string) => void"}}},onLoadMore:{action:"load more",description:"Callback fired to load more items",table:{type:{summary:"function",detail:"(entry: IntersectionObserverEntry) => void"}}},onInputChange:{action:"input changed",description:"Callback fired when the input value changes",table:{type:{summary:"function",detail:"React.ChangeEventHandler<HTMLInputElement>"}}},isPrintableCharacter:{description:"A custom function to check if a character is not alphabetical, used to filter input.",table:{type:{summary:"function",detail:"(str: string) => boolean"}}},allowCustomValue:{control:"boolean",description:"Allows the user to enter custom values not in the predefined options",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},autocomplete:{control:"radio",options:["none","list","both"],description:"Controls the autocomplete behavior of the combobox",table:{type:{summary:"enum",detail:"list | none | both | { type: 'list' ; filter: 'startsWith' | 'contains'}"},defaultValue:{summary:"both"}}},creatable:{control:"radio",options:[!1,!0,"visible"],description:'If true, allows creating new options. If "visible", always shows the create option.',table:{type:{summary:'boolean | "visible"'},defaultValue:{summary:"false"}}},createMessage:{control:!1,description:"Controls the text shown to the user when creating a new option",table:{type:{summary:"function",detail:"(value: string) => string"},defaultValue:{summary:'(value) => `Create "${value}"`'}}},hasMoreItems:{control:"boolean",description:"Indicates if there are more items to load",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loadingMessage:{control:"text",description:"Message to display while loading",table:{type:{summary:"string"},defaultValue:{summary:'"Loading content..."'}}},noOptionsMessage:{control:!1,description:"Function to generate the no options message",table:{type:{summary:"function",detail:"(value: string) => string"}}},size:{control:"radio",options:["S","M"],description:"Size of the combobox",table:{type:{summary:"enum",detail:"'S' | 'M'"},defaultValue:{summary:'"M"'}}},startIcon:{control:!1,description:"Icon to display at the start of the input",table:{type:{summary:"ReactNode"}}},placeholder:{control:"text",description:"Placeholder text to display when no value is selected",table:{type:{summary:"string"}}},clearLabel:{description:"Label for the clear button",table:{type:{summary:"string"},defaultValue:{summary:'"clear"'}}}}},M={tags:["!dev"],argTypes:{value:{control:!1,description:"The value of the option, used to match the selected item.",type:{required:!0},table:{type:{summary:"string | number"}}},textValue:{control:!1,description:"Alternative text value used for filtering and search. Defaults to the value.",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Disables the option if set to true.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{control:!1,description:"The content to display inside the option, typically text.",type:{required:!0},table:{type:{summary:"React.ReactNode"}}}}};var A,S,I;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <Combobox {...props}>\r
      {options.map(({
      name,
      value
    }) => <ComboboxOption key={value} value={value}>\r
          {name}\r
        </ComboboxOption>)}\r
    </Combobox>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
      <Combobox>
        <ComboboxOption value="apple">Apple</ComboboxOption>
        <ComboboxOption value="avocado">Avocado</ComboboxOption>
        <ComboboxOption value="banana">Banana</ComboboxOption>
        <ComboboxOption value="kiwi">Kiwi</ComboboxOption>
        <ComboboxOption value="mango">Mango</ComboboxOption>
        <ComboboxOption value="orange">Orange</ComboboxOption>
        <ComboboxOption value="strawberry">Strawberry</ComboboxOption>
      </Combobox>
        \`
      }
    }
  }
}`,...(I=(S=m.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var k,j,L;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
    <Combobox disabled>
      <ComboboxOption value="apple">Apple</ComboboxOption>
      <ComboboxOption value="avocado">Avocado</ComboboxOption>
    </Combobox>
        \`
      }
    }
  }
}`,...(L=(j=h.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var T,E,R;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'S'
  },
  render: props => <Combobox {...props}>\r
      {options.map(({
      name,
      value
    }) => <ComboboxOption key={value} value={value}>\r
          {name}\r
        </ComboboxOption>)}\r
    </Combobox>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
    <Combobox size="S">
      <ComboboxOption value="apple">Apple</ComboboxOption>
      <ComboboxOption value="avocado">Avocado</ComboboxOption>
    </Combobox>
        \`
      }
    }
  }
}`,...(R=(E=y.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var D,H,P;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    loading: true,
    placeholder: 'Loading options...'
  },
  render: ({
    loading,
    placeholder
  }) => {
    return <Combobox placeholder={placeholder} loading={loading}>\r
        {options.map(({
        name,
        value
      }) => <ComboboxOption key={value} value={value}>\r
            {name}\r
          </ComboboxOption>)}\r
      </Combobox>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
    <Combobox placeholder="Loading options..." loading>
      <ComboboxOption value="apple">Apple</ComboboxOption>
      <ComboboxOption value="avocado">Avocado</ComboboxOption>
    </Combobox>
        \`
      }
    }
  }
}`,...(P=(H=f.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var z,_,W;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string | undefined>('');
    const [dynamicOptions, setDynamicOptions] = React.useState(options);
    const onCreateOption = (newOption?: string) => {
      setDynamicOptions([...dynamicOptions, {
        name: newOption!,
        value: newOption!
      }]);
      setValue(newOption);
    };
    return <Combobox placeholder="My favourite fruit is..." value={value} onChange={setValue} onCreateOption={onCreateOption} creatable>\r
        {dynamicOptions.map(({
        name,
        value
      }) => <ComboboxOption key={value} value={value}>\r
            {name}\r
          </ComboboxOption>)}\r
      </Combobox>;
  },
  name: 'Creatable',
  parameters: {
    docs: {
      source: {
        code: outdent\`
    <Combobox
      placeholder="My favourite fruit is..."
      value="apple"
      onChange={() => {}}
      onCreateOption={() => {}}
      creatable
    >
      <ComboboxOption value="apple">Apple</ComboboxOption>
      <ComboboxOption value="avocado">Avocado</ComboboxOption>
    </Combobox>
        \`
      }
    }
  }
}`,...(W=(_=C.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var q,B,N;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string | undefined>('');
    const onCreateOption = () => {
      console.log('Created option');
    };
    return <Combobox placeholder="My favourite fruit is..." value={value} onChange={setValue} onCreateOption={onCreateOption} creatable="visible" creatableStartIcon={<Plus fill="neutral500" />} createMessage={() => 'Create a fruit'}>\r
        {options.map(({
        name,
        value
      }) => <ComboboxOption key={value} value={value}>\r
            <Flex gap={2} justifyContent="space-between">\r
              <Flex gap={2}>\r
                <LinkIcon fill="neutral500" />\r
                <Typography ellipsis>{name}</Typography>\r
              </Flex>\r
            </Flex>\r
          </ComboboxOption>)}\r
      </Combobox>;
  },
  name: 'Creatable Visible',
  parameters: {
    docs: {
      source: {
        code: outdent\`
    <Combobox
      placeholder="My favourite fruit is..."
      value="apple"
      onChange={() => {}}
      onCreateOption={() => {}}
      creatable="visible"
      creatableStartIcon={<Plus fill="neutral500" />}
      createMessage={() => 'Create a relation'}
    >
      <ComboboxOption value="apple">Apple</ComboboxOption>
      <ComboboxOption value="avocado">Avocado</ComboboxOption>
    </Combobox>
        \`
      }
    }
  }
}`,...(N=(B=v.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var $,K,G;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string | undefined>('');
    const onCreateOption = () => {
      console.log('Created option');
    };
    return <Combobox placeholder="My favourite fruit is..." value={value} onChange={setValue} onCreateOption={onCreateOption} creatable="visible" creatableDisabled creatableStartIcon={<Plus fill="neutral500" />} createMessage={() => 'Create a fruit'}>\r
        {options.map(({
        name,
        value
      }) => <ComboboxOption key={value} value={value}>\r
            <Flex gap={2} justifyContent="space-between">\r
              <Flex gap={2}>\r
                <LinkIcon fill="neutral500" />\r
                <Typography ellipsis>{name}</Typography>\r
              </Flex>\r
            </Flex>\r
          </ComboboxOption>)}\r
      </Combobox>;
  },
  name: 'Creatable Disabled',
  parameters: {
    docs: {
      source: {
        code: outdent\`
      <Combobox
        placeholder="My favourite fruit is..."
        value="apple"
        onChange={() => {}}
        onCreateOption={() => {}}
        creatable="visible"
        creatableDisabled
        createMessage={() => "Create a relation"}
      >
        <ComboboxOption value="apple">Apple</ComboboxOption>
        <ComboboxOption value="avocado">Avocado</ComboboxOption>
      </Combobox>
        \`
      }
    }
  }
}`,...(G=(K=x.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var J,Q,U;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    autocompleteMode: 'both' as Autocomplete
  },
  argTypes: {
    autocompleteMode: {
      type: 'select',
      options: ['none', 'list', 'both', 'list-contains']
    }
  },
  render: ({
    autocompleteMode: mode,
    ...props
  }) => {
    const [value, setValue] = React.useState<string | undefined>('');
    const [autocompleteMode, setAutocompleteMode] = React.useState<Autocomplete>(mode);
    React.useEffect(() => {
      if (mode === 'list-contains') {
        setAutocompleteMode({
          type: 'list',
          filter: 'contains'
        });
      } else {
        setAutocompleteMode(mode);
      }
    }, [mode]);
    return <Combobox value={value} onChange={setValue} autocomplete={autocompleteMode} onClear={() => setValue('')} {...props}>\r
        {options.map(({
        name,
        value
      }) => <ComboboxOption key={value} value={value}>\r
            {name}\r
          </ComboboxOption>)}\r
      </Combobox>;
  },
  name: 'Autocomplete',
  parameters: {
    docs: {
      source: {
        code: outdent\`
      <Combobox
        value="apple"
        onChange={() => {}}
        autocomplete="list"
        onClear={() => {}}
      >
        <ComboboxOption value="apple">Apple</ComboboxOption>
        <ComboboxOption value="avocado">Avocado</ComboboxOption>
      </Combobox>
        \`
      }
    }
  }
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;O.parameters={...O.parameters,docs:{...(X=O.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Fruits',
    error: 'Error',
    hint: 'Description line lorem ipsum'
  },
  render: ({
    error,
    hint,
    label,
    ...comboboxProps
  }) => {
    const [value, setValue] = React.useState<string | undefined>('');
    return <Field.Root id="with_field" error={error} hint={hint}>\r
        <Field.Label>{label}</Field.Label>\r
        <Combobox value={value} onChange={setValue} onClear={() => setValue('')} {...comboboxProps}>\r
          {options.map(({
          name,
          value
        }) => <ComboboxOption key={value} value={value}>\r
              {name}\r
            </ComboboxOption>)}\r
        </Combobox>\r
        <Field.Error />\r
        <Field.Hint />\r
      </Field.Root>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
    <Field.Root id="with_field" hint="Description line lorem ipsum" error="Error">
      <Field.Label>Fruits</Field.Label>
      <Combobox>
        <ComboboxOption value="apple">Apple</ComboboxOption>
        <ComboboxOption value="avocado">Avocado</ComboboxOption>
      </Combobox>
      <Field.Error />
      <Field.Hint />
    </Field.Root>
        \`
      }
    }
  },
  name: 'With Field'
}`,...(Z=(Y=O.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,oe,te;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Fruits',
    error: 'Error',
    hint: 'Description line lorem ipsum'
  },
  render: ({
    error,
    hint,
    label,
    ...comboboxProps
  }) => {
    const [value, setValue] = React.useState<string | undefined>('');
    return <Field.Root id="with_field" error={error} hint={hint}>\r
        <Field.Label>{label}</Field.Label>\r
        <Combobox value={value} onChange={setValue} onClear={() => setValue('')} {...comboboxProps}>\r
          {[...Array(1000)].map((_, i) => <ComboboxOption key={i} value={\`option-\${i}\`}>\r
              Option {i}\r
            </ComboboxOption>)}\r
        </Combobox>\r
        <Field.Error />\r
        <Field.Hint />\r
      </Field.Root>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Field.Root id="with_field" error={error} hint={hint}>
            <Field.Label>{label}</Field.Label>
            <Combobox {...props}>
              {options.map(({ name, value }) => (
                <ComboboxOption key={value} value={value}>{name}</ComboboxOption>
              ))}
            </Combobox>
            <Field.Error />
            <Field.Hint />
          </Field.Root>
        \`
      }
    }
  },
  name: 'Virtualization'
}`,...(te=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ae,ne,re;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  /**\r
   * add !dev tag so this story does not appear in the sidebar\r
   * as it exists solely for documenting the props.\r
   */
  tags: ['!dev'],
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'If true, disables the combobox',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    required: {
      control: false,
      description: 'If true, the combobox is a required field',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    defaultTextValue: {
      control: false,
      description: 'Default value of what the user sees and types in the input field',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    defaultOpen: {
      control: false,
      description: 'If true, the combobox dropdown is open by default',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    defaultFilterValue: {
      control: 'text',
      description: 'The default value used to filter the list of options displayed in the dropdown.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    filterValue: {
      control: 'text',
      description: 'The current value used to filter the list of options displayed in the dropdown.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    open: {
      control: 'boolean',
      description: 'Controls whether the combobox dropdown is open',
      table: {
        type: {
          summary: 'boolean'
        }
      }
    },
    loading: {
      control: 'boolean',
      description: 'Indicates if the combobox is in a loading state',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    value: {
      control: 'text',
      description: 'The controlled selected value of the combobox',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    textValue: {
      control: 'text',
      description: 'What the user sees and types in the input field',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    onOpenChange: {
      action: 'open changed',
      description: 'Callback fired when the open state changes',
      table: {
        type: {
          summary: 'function',
          detail: '(open: boolean) => void'
        }
      }
    },
    onFilterValueChange: {
      action: 'filter value changed',
      description: 'Callback fired when the filter value changes',
      table: {
        type: {
          summary: 'function',
          detail: '(value: string) => void'
        }
      }
    },
    onTextValueChange: {
      action: 'text value changed',
      description: 'Callback fired when the text value changes',
      table: {
        type: {
          summary: 'function',
          detail: '(value: string) => void'
        }
      }
    },
    onChange: {
      action: 'value changed',
      description: 'Callback fired when the selected value changes',
      table: {
        type: {
          summary: 'function',
          detail: '((value: string) => void)'
        }
      }
    },
    onClear: {
      action: 'cleared',
      description: 'Callback fired when the clear button is clicked',
      table: {
        type: {
          summary: 'function',
          detail: 'React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>'
        }
      }
    },
    onCreateOption: {
      action: 'option created',
      description: 'Callback fired when a new option is created',
      table: {
        type: {
          summary: 'function',
          detail: '(value: string) => void'
        }
      }
    },
    onLoadMore: {
      action: 'load more',
      description: 'Callback fired to load more items',
      table: {
        type: {
          summary: 'function',
          detail: '(entry: IntersectionObserverEntry) => void'
        }
      }
    },
    onInputChange: {
      action: 'input changed',
      description: 'Callback fired when the input value changes',
      table: {
        type: {
          summary: 'function',
          detail: 'React.ChangeEventHandler<HTMLInputElement>'
        }
      }
    },
    isPrintableCharacter: {
      description: 'A custom function to check if a character is not alphabetical, used to filter input.',
      table: {
        type: {
          summary: 'function',
          detail: '(str: string) => boolean'
        }
      }
    },
    allowCustomValue: {
      control: 'boolean',
      description: 'Allows the user to enter custom values not in the predefined options',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    autocomplete: {
      control: 'radio',
      options: ['none', 'list', 'both'],
      description: 'Controls the autocomplete behavior of the combobox',
      table: {
        type: {
          summary: 'enum',
          detail: "list | none | both | { type: 'list' ; filter: 'startsWith' | 'contains'}"
        },
        defaultValue: {
          summary: 'both'
        }
      }
    },
    creatable: {
      control: 'radio',
      options: [false, true, 'visible'],
      description: 'If true, allows creating new options. If "visible", always shows the create option.',
      table: {
        type: {
          summary: 'boolean | "visible"'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    createMessage: {
      control: false,
      description: 'Controls the text shown to the user when creating a new option',
      table: {
        type: {
          summary: 'function',
          detail: '(value: string) => string'
        },
        defaultValue: {
          summary: '(value) => \`Create "\${value}"\`'
        }
      }
    },
    hasMoreItems: {
      control: 'boolean',
      description: 'Indicates if there are more items to load',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    loadingMessage: {
      control: 'text',
      description: 'Message to display while loading',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: '"Loading content..."'
        }
      }
    },
    noOptionsMessage: {
      control: false,
      description: 'Function to generate the no options message',
      table: {
        type: {
          summary: 'function',
          detail: '(value: string) => string'
        }
      }
    },
    size: {
      control: 'radio',
      options: ['S', 'M'],
      description: 'Size of the combobox',
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
      description: 'Icon to display at the start of the input',
      table: {
        type: {
          summary: 'ReactNode'
        }
      }
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text to display when no value is selected',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    clearLabel: {
      description: 'Label for the clear button',
      table: {
        type: {
          summary: 'string'
        },
        defaultValue: {
          summary: '"clear"'
        }
      }
    }
  }
}`,...(re=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var le,ie,se;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  /**\r
   * add !dev tag so this story does not appear in the sidebar\r
   * as it exists solely for documenting the props.\r
   */
  tags: ['!dev'],
  argTypes: {
    value: {
      control: false,
      description: 'The value of the option, used to match the selected item.',
      type: {
        required: true
      },
      table: {
        type: {
          summary: 'string | number'
        }
      }
    },
    textValue: {
      control: false,
      description: 'Alternative text value used for filtering and search. Defaults to the value.',
      table: {
        type: {
          summary: 'string'
        }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the option if set to true.',
      table: {
        type: {
          summary: 'boolean'
        },
        defaultValue: {
          summary: 'false'
        }
      }
    },
    children: {
      control: false,
      description: 'The content to display inside the option, typically text.',
      type: {
        required: true
      },
      table: {
        type: {
          summary: 'React.ReactNode'
        }
      }
    }
  }
}`,...(se=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const fe=["Base","Disabled","Size","Loading","Creatable","CreatableVisible","CreatableDisabled","Autocomplete","WithField","Virtualization","ComboboxProps","ComboboxOptionProps"],Oe=Object.freeze(Object.defineProperty({__proto__:null,Autocomplete:g,Base:m,ComboboxOptionProps:M,ComboboxProps:V,Creatable:C,CreatableDisabled:x,CreatableVisible:v,Disabled:h,Loading:f,Size:y,Virtualization:w,WithField:O,__namedExportsOrder:fe,default:ye},Symbol.toStringTag,{value:"Module"}));export{g as A,m as B,Oe as C,h as D,f as L,y as S,O as W,C as a,v as b,V as c,M as d};
