import{j as o,t}from"./iframe-_cKE9r89.js";import{R as e}from"./index-JVGtNO81.js";import{d as I}from"./index-BxBVU389.js";const V={title:"Primitives/Combobox",component:e.Root},b={render:()=>o.jsxs(e.Root,{children:[o.jsxs(e.Trigger,{children:[o.jsx(e.TextInput,{placeholder:"Pick me"}),o.jsx(e.Icon,{})]}),o.jsx(e.Portal,{children:o.jsx(e.Content,{children:o.jsxs(e.Viewport,{children:[o.jsxs(e.Item,{value:"1",children:[o.jsx(e.ItemText,{children:"Option 1"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"2",children:[o.jsx(e.ItemText,{children:"Option 2"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"3",children:[o.jsx(e.ItemText,{children:"Option 3"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"4",children:[o.jsx(e.ItemText,{children:"Option 4"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsx(e.NoValueFound,{children:"No value"})]})})})]}),parameters:{docs:{source:{type:"code",code:I`
    <Combobox.Root>
      <Combobox.Trigger>
        <Combobox.TextInput placeholder="Pick me" />
        <Combobox.Icon />
      </Combobox.Trigger>
      <Combobox.Portal>
        <Combobox.Content>
          <Combobox.Viewport>
            <Combobox.Item value="1">
              <Combobox.ItemText>Option 1</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="2">
              <Combobox.ItemText>Option 2</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="3">
              <Combobox.ItemText>Option 3</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="4">
              <Combobox.ItemText>Option 4</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.NoValueFound>No value</Combobox.NoValueFound>
          </Combobox.Viewport>
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox.Root>`}}},name:"Basic Usage"},m={render:()=>o.jsxs(e.Root,{autocomplete:"list",children:[o.jsxs(e.Trigger,{children:[o.jsx(e.TextInput,{placeholder:"Pick me"}),o.jsx(e.Icon,{})]}),o.jsx(e.Portal,{children:o.jsx(e.Content,{children:o.jsxs(e.Viewport,{children:[o.jsxs(e.Item,{value:"mango",children:[o.jsx(e.ItemText,{children:"Mango"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"apple",children:[o.jsx(e.ItemText,{children:"Apple"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"Banana",children:[o.jsx(e.ItemText,{children:"Banana"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"papaya",children:[o.jsx(e.ItemText,{children:"Papaya"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"avocado",children:[o.jsx(e.ItemText,{children:"Avocado"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsx(e.NoValueFound,{children:"No value"})]})})})]}),parameters:{docs:{source:{type:"code",code:I`
    <Combobox.Root autocomplete="list">
      <Combobox.Trigger>
        <Combobox.TextInput placeholder="Pick me" />
        <Combobox.Icon />
      </Combobox.Trigger>
      <Combobox.Portal>
        <Combobox.Content>
          <Combobox.Viewport>
            <Combobox.Item value="mango">
              <Combobox.ItemText>Mango</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="apple">
              <Combobox.ItemText>Apple</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="Banana">
              <Combobox.ItemText>Banana</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="papaya">
              <Combobox.ItemText>Papaya</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="avocado">
              <Combobox.ItemText>Avocado</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.NoValueFound>No value</Combobox.NoValueFound>
          </Combobox.Viewport>
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox.Root>`}}},name:"List Autocomplete"},x={render:()=>o.jsxs(e.Root,{autocomplete:"both",children:[o.jsxs(e.Trigger,{children:[o.jsx(e.TextInput,{placeholder:"Pick me"}),o.jsx(e.Icon,{})]}),o.jsx(e.Portal,{children:o.jsx(e.Content,{children:o.jsxs(e.Viewport,{children:[o.jsxs(e.Item,{value:"1",children:[o.jsx(e.ItemText,{children:"Banana"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"4",children:[o.jsx(e.ItemText,{children:"Apples"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"2",children:[o.jsx(e.ItemText,{children:"Oranges"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"3",children:[o.jsx(e.ItemText,{children:"Kiwis"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"5",children:[o.jsx(e.ItemText,{children:"Avocado"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsx(e.NoValueFound,{children:"No value"})]})})})]}),parameters:{docs:{source:{type:"code",code:I`
    <Combobox.Root autocomplete="both">
      <Combobox.Trigger>
        <Combobox.TextInput placeholder="Pick me" />
        <Combobox.Icon />
      </Combobox.Trigger>
      <Combobox.Portal>
        <Combobox.Content>
          <Combobox.Viewport>
            <Combobox.Item value="1">
              <Combobox.ItemText>Banana</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="4">
              <Combobox.ItemText>Apples</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="2">
              <Combobox.ItemText>Oranges</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="3">
              <Combobox.ItemText>Kiwis</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="5">
              <Combobox.ItemText>Avocado</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.NoValueFound>No value</Combobox.NoValueFound>
          </Combobox.Viewport>
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox.Root>`}}},name:"Both Autocomplete"},r={render:()=>o.jsxs(e.Root,{autocomplete:{type:"list",filter:"contains"},children:[o.jsxs(e.Trigger,{children:[o.jsx(e.TextInput,{placeholder:"Pick me"}),o.jsx(e.Icon,{})]}),o.jsx(e.Portal,{children:o.jsx(e.Content,{children:o.jsxs(e.Viewport,{children:[o.jsxs(e.Item,{value:"1",children:[o.jsx(e.ItemText,{children:"Banana"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"4",children:[o.jsx(e.ItemText,{children:"Apples"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"2",children:[o.jsx(e.ItemText,{children:"Oranges"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"3",children:[o.jsx(e.ItemText,{children:"Kiwis"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"5",children:[o.jsx(e.ItemText,{children:"Avocado"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsx(e.NoValueFound,{children:"No value"})]})})})]}),parameters:{docs:{source:{type:"code",code:I`
    <Combobox.Root autocomplete={{ type: 'list', filter: 'contains' }}>
      <Combobox.Trigger>
        <Combobox.TextInput placeholder="Pick me" />
        <Combobox.Icon />
      </Combobox.Trigger>
      <Combobox.Portal>
        <Combobox.Content>
          <Combobox.Viewport>
            <Combobox.Item value="1">
              <Combobox.ItemText>Banana</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="4">
              <Combobox.ItemText>Apples</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="2">
              <Combobox.ItemText>Oranges</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="3">
              <Combobox.ItemText>Kiwis</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="5">
              <Combobox.ItemText>Avocado</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.NoValueFound>No value</Combobox.NoValueFound>
          </Combobox.Viewport>
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox.Root>`}}},name:"List Contains Autocomplete"},C={render:()=>o.jsxs(e.Root,{allowCustomValue:!0,children:[o.jsxs(e.Trigger,{children:[o.jsx(e.TextInput,{placeholder:"Pick me"}),o.jsx(e.Icon,{})]}),o.jsx(e.Portal,{children:o.jsx(e.Content,{children:o.jsxs(e.Viewport,{children:[o.jsxs(e.Item,{value:"1",children:[o.jsx(e.ItemText,{children:"Option 1"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"2",children:[o.jsx(e.ItemText,{children:"Option 2"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"3",children:[o.jsx(e.ItemText,{children:"Option 3"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsxs(e.Item,{value:"4",children:[o.jsx(e.ItemText,{children:"Option 4"}),o.jsx(e.ItemIndicator,{children:o.jsx(t,{})})]}),o.jsx(e.CreateItem,{children:"Create this item"})]})})})]}),name:"Create Custom Values"};var a,n,c;b.parameters={...b.parameters,docs:{...(a=b.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Combobox.Root>\r
      <Combobox.Trigger>\r
        <Combobox.TextInput placeholder="Pick me" />\r
        <Combobox.Icon />\r
      </Combobox.Trigger>\r
      <Combobox.Portal>\r
        <Combobox.Content>\r
          <Combobox.Viewport>\r
            <Combobox.Item value="1">\r
              <Combobox.ItemText>Option 1</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="2">\r
              <Combobox.ItemText>Option 2</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="3">\r
              <Combobox.ItemText>Option 3</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="4">\r
              <Combobox.ItemText>Option 4</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.NoValueFound>No value</Combobox.NoValueFound>\r
          </Combobox.Viewport>\r
        </Combobox.Content>\r
      </Combobox.Portal>\r
    </Combobox.Root>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: outdent\`
    <Combobox.Root>
      <Combobox.Trigger>
        <Combobox.TextInput placeholder="Pick me" />
        <Combobox.Icon />
      </Combobox.Trigger>
      <Combobox.Portal>
        <Combobox.Content>
          <Combobox.Viewport>
            <Combobox.Item value="1">
              <Combobox.ItemText>Option 1</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="2">
              <Combobox.ItemText>Option 2</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="3">
              <Combobox.ItemText>Option 3</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="4">
              <Combobox.ItemText>Option 4</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.NoValueFound>No value</Combobox.NoValueFound>
          </Combobox.Viewport>
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox.Root>\`
      }
    }
  },
  name: 'Basic Usage'
} satisfies Story`,...(c=(n=b.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,l,d;m.parameters={...m.parameters,docs:{...(i=m.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Combobox.Root autocomplete="list">\r
      <Combobox.Trigger>\r
        <Combobox.TextInput placeholder="Pick me" />\r
        <Combobox.Icon />\r
      </Combobox.Trigger>\r
      <Combobox.Portal>\r
        <Combobox.Content>\r
          <Combobox.Viewport>\r
            <Combobox.Item value="mango">\r
              <Combobox.ItemText>Mango</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="apple">\r
              <Combobox.ItemText>Apple</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="Banana">\r
              <Combobox.ItemText>Banana</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="papaya">\r
              <Combobox.ItemText>Papaya</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="avocado">\r
              <Combobox.ItemText>Avocado</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.NoValueFound>No value</Combobox.NoValueFound>\r
          </Combobox.Viewport>\r
        </Combobox.Content>\r
      </Combobox.Portal>\r
    </Combobox.Root>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: outdent\`
    <Combobox.Root autocomplete="list">
      <Combobox.Trigger>
        <Combobox.TextInput placeholder="Pick me" />
        <Combobox.Icon />
      </Combobox.Trigger>
      <Combobox.Portal>
        <Combobox.Content>
          <Combobox.Viewport>
            <Combobox.Item value="mango">
              <Combobox.ItemText>Mango</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="apple">
              <Combobox.ItemText>Apple</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="Banana">
              <Combobox.ItemText>Banana</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="papaya">
              <Combobox.ItemText>Papaya</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="avocado">
              <Combobox.ItemText>Avocado</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.NoValueFound>No value</Combobox.NoValueFound>
          </Combobox.Viewport>
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox.Root>\`
      }
    }
  },
  name: 'List Autocomplete'
} satisfies Story`,...(d=(l=m.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var s,u,p;x.parameters={...x.parameters,docs:{...(s=x.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Combobox.Root autocomplete="both">\r
      <Combobox.Trigger>\r
        <Combobox.TextInput placeholder="Pick me" />\r
        <Combobox.Icon />\r
      </Combobox.Trigger>\r
      <Combobox.Portal>\r
        <Combobox.Content>\r
          <Combobox.Viewport>\r
            <Combobox.Item value="1">\r
              <Combobox.ItemText>Banana</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="4">\r
              <Combobox.ItemText>Apples</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="2">\r
              <Combobox.ItemText>Oranges</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="3">\r
              <Combobox.ItemText>Kiwis</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="5">\r
              <Combobox.ItemText>Avocado</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.NoValueFound>No value</Combobox.NoValueFound>\r
          </Combobox.Viewport>\r
        </Combobox.Content>\r
      </Combobox.Portal>\r
    </Combobox.Root>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: outdent\`
    <Combobox.Root autocomplete="both">
      <Combobox.Trigger>
        <Combobox.TextInput placeholder="Pick me" />
        <Combobox.Icon />
      </Combobox.Trigger>
      <Combobox.Portal>
        <Combobox.Content>
          <Combobox.Viewport>
            <Combobox.Item value="1">
              <Combobox.ItemText>Banana</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="4">
              <Combobox.ItemText>Apples</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="2">
              <Combobox.ItemText>Oranges</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="3">
              <Combobox.ItemText>Kiwis</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="5">
              <Combobox.ItemText>Avocado</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.NoValueFound>No value</Combobox.NoValueFound>
          </Combobox.Viewport>
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox.Root>\`
      }
    }
  },
  name: 'Both Autocomplete'
} satisfies Story`,...(p=(u=x.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var T,h,j;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Combobox.Root autocomplete={{
    type: 'list',
    filter: 'contains'
  }}>\r
      <Combobox.Trigger>\r
        <Combobox.TextInput placeholder="Pick me" />\r
        <Combobox.Icon />\r
      </Combobox.Trigger>\r
      <Combobox.Portal>\r
        <Combobox.Content>\r
          <Combobox.Viewport>\r
            <Combobox.Item value="1">\r
              <Combobox.ItemText>Banana</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="4">\r
              <Combobox.ItemText>Apples</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="2">\r
              <Combobox.ItemText>Oranges</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="3">\r
              <Combobox.ItemText>Kiwis</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="5">\r
              <Combobox.ItemText>Avocado</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.NoValueFound>No value</Combobox.NoValueFound>\r
          </Combobox.Viewport>\r
        </Combobox.Content>\r
      </Combobox.Portal>\r
    </Combobox.Root>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: outdent\`
    <Combobox.Root autocomplete={{ type: 'list', filter: 'contains' }}>
      <Combobox.Trigger>
        <Combobox.TextInput placeholder="Pick me" />
        <Combobox.Icon />
      </Combobox.Trigger>
      <Combobox.Portal>
        <Combobox.Content>
          <Combobox.Viewport>
            <Combobox.Item value="1">
              <Combobox.ItemText>Banana</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="4">
              <Combobox.ItemText>Apples</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="2">
              <Combobox.ItemText>Oranges</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="3">
              <Combobox.ItemText>Kiwis</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.Item value="5">
              <Combobox.ItemText>Avocado</Combobox.ItemText>
              <Combobox.ItemIndicator>
                <Check />
              </Combobox.ItemIndicator>
            </Combobox.Item>
            <Combobox.NoValueFound>No value</Combobox.NoValueFound>
          </Combobox.Viewport>
        </Combobox.Content>
      </Combobox.Portal>
    </Combobox.Root>\`
      }
    }
  },
  name: 'List Contains Autocomplete'
} satisfies Story`,...(j=(h=r.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var v,g,k;C.parameters={...C.parameters,docs:{...(v=C.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Combobox.Root allowCustomValue>\r
      <Combobox.Trigger>\r
        <Combobox.TextInput placeholder="Pick me" />\r
        <Combobox.Icon />\r
      </Combobox.Trigger>\r
      <Combobox.Portal>\r
        <Combobox.Content>\r
          <Combobox.Viewport>\r
            <Combobox.Item value="1">\r
              <Combobox.ItemText>Option 1</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="2">\r
              <Combobox.ItemText>Option 2</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="3">\r
              <Combobox.ItemText>Option 3</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.Item value="4">\r
              <Combobox.ItemText>Option 4</Combobox.ItemText>\r
              <Combobox.ItemIndicator>\r
                <Check />\r
              </Combobox.ItemIndicator>\r
            </Combobox.Item>\r
            <Combobox.CreateItem>Create this item</Combobox.CreateItem>\r
          </Combobox.Viewport>\r
        </Combobox.Content>\r
      </Combobox.Portal>\r
    </Combobox.Root>,
  name: 'Create Custom Values'
} satisfies Story`,...(k=(g=C.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const P=["BasicUsage","ListAutocomplete","BothAutocomplete","ListContainsAutocomplete","CreateCustomValues"],O=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:b,BothAutocomplete:x,CreateCustomValues:C,ListAutocomplete:m,ListContainsAutocomplete:r,__namedExportsOrder:P,default:V},Symbol.toStringTag,{value:"Module"}));export{b as B,O as C,m as L,r as a,x as b,C as c};
