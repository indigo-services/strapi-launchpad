import{j as e,t as c}from"./iframe-_cKE9r89.js";import{A as t}from"./index-JVGtNO81.js";import{d as S}from"./index-BxBVU389.js";const u={title:"Primitives/Select",component:t.Root},l={render:()=>e.jsxs(t.Root,{children:[e.jsxs(t.Trigger,{children:[e.jsx(t.Value,{placeholder:"Select an option..."}),e.jsx(t.Icon,{})]}),e.jsx(t.Portal,{children:e.jsx(t.Content,{position:"popper",sideOffset:4,children:e.jsxs(t.Viewport,{children:[e.jsxs(t.Item,{value:"1",children:[e.jsx(t.ItemText,{children:"Option 1"}),e.jsx(t.ItemIndicator,{children:e.jsx(c,{})})]}),e.jsxs(t.Item,{value:"2",children:[e.jsx(t.ItemText,{children:"Option 2"}),e.jsx(t.ItemIndicator,{children:e.jsx(c,{})})]}),e.jsxs(t.Item,{value:"3",children:[e.jsx(t.ItemText,{children:"Option 3"}),e.jsx(t.ItemIndicator,{children:e.jsx(c,{})})]}),e.jsxs(t.Item,{value:"4",children:[e.jsx(t.ItemText,{children:"Option 4"}),e.jsx(t.ItemIndicator,{children:e.jsx(c,{})})]})]})})})]}),parameters:{docs:{source:{type:"code",code:S`
    <Select.Root>
      <Select.Trigger>
        <Select.Value placeholder="Select an option..." />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position="popper" sideOffset={4}>
          <Select.Viewport>
            <Select.Item value="1">
              <Select.ItemText>Option 1</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="2">
              <Select.ItemText>Option 2</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="3">
              <Select.ItemText>Option 3</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="4">
              <Select.ItemText>Option 4</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
        `}}},name:"Single Item"},r={render:()=>e.jsxs(t.Root,{multi:!0,children:[e.jsxs(t.Trigger,{children:[e.jsx(t.Value,{placeholder:"Select an option..."}),e.jsx(t.Icon,{})]}),e.jsx(t.Portal,{children:e.jsx(t.Content,{position:"popper",sideOffset:4,children:e.jsxs(t.Viewport,{children:[e.jsxs(t.Item,{value:"1",children:[e.jsx(t.ItemText,{children:"Option 1"}),e.jsx(t.ItemIndicator,{children:e.jsx(c,{})})]}),e.jsxs(t.Item,{value:"2",children:[e.jsx(t.ItemText,{children:"Option 2"}),e.jsx(t.ItemIndicator,{children:e.jsx(c,{})})]}),e.jsxs(t.Item,{value:"3",children:[e.jsx(t.ItemText,{children:"Option 3"}),e.jsx(t.ItemIndicator,{children:e.jsx(c,{})})]}),e.jsxs(t.Item,{value:"4",children:[e.jsx(t.ItemText,{children:"Option 4"}),e.jsx(t.ItemIndicator,{children:e.jsx(c,{})})]})]})})})]}),parameters:{docs:{source:{type:"code",code:S`
    <Select.Root multi>
      <Select.Trigger>
        <Select.Value placeholder="Select an option..." />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position="popper" sideOffset={4}>
          <Select.Viewport>
            <Select.Item value="1">
              <Select.ItemText>Option 1</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="2">
              <Select.ItemText>Option 2</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="3">
              <Select.ItemText>Option 3</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="4">
              <Select.ItemText>Option 4</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
        `}}},name:"Multiple Items"},o={render:()=>e.jsxs(t.Root,{multi:!0,children:[e.jsxs(t.Trigger,{children:[e.jsx(t.Value,{placeholder:"Select an option..."}),e.jsx(t.Icon,{})]}),e.jsx(t.Portal,{children:e.jsx(t.Content,{position:"popper",sideOffset:4,children:e.jsxs(t.Viewport,{children:[e.jsxs(t.Item,{value:"1",children:[e.jsx(t.ItemText,{children:"Option 1"}),e.jsx(t.ItemIndicator,{children:e.jsx(c,{})})]}),e.jsxs(t.Item,{value:"2",children:[e.jsx(t.ItemText,{children:"Option 2"}),e.jsx(t.ItemIndicator,{children:e.jsx(c,{})})]}),e.jsxs(t.Group,{children:[e.jsx(t.Label,{children:"Options 3 & 4"}),e.jsxs(t.Item,{value:"3",children:[e.jsx(t.ItemText,{children:"Option 3"}),e.jsx(t.ItemIndicator,{children:e.jsx(c,{})})]}),e.jsxs(t.Item,{value:"4",children:[e.jsx(t.ItemText,{children:"Option 3"}),e.jsx(t.ItemIndicator,{children:e.jsx(c,{})})]})]})]})})})]}),parameters:{docs:{source:{type:"code",code:S`
    <Select.Root multi>
      <Select.Trigger>
        <Select.Value placeholder="Select an option..." />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position="popper" sideOffset={4}>
          <Select.Viewport>
            <Select.Item value="1">
              <Select.ItemText>Option 1</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="2">
              <Select.ItemText>Option 2</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Group>
              <Select.Label>Options 3 & 4</Select.Label>
              <Select.Item value="3">
                <Select.ItemText>Option 3</Select.ItemText>
                <Select.ItemIndicator>
                  <Check />
                </Select.ItemIndicator>
              </Select.Item>
              <Select.Item value="4">
                <Select.ItemText>Option 3</Select.ItemText>
                <Select.ItemIndicator>
                  <Check />
                </Select.ItemIndicator>
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
        `}}},name:"Nested Items"};var I,i,n;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Select.Root>\r
      <Select.Trigger>\r
        <Select.Value placeholder="Select an option..." />\r
        <Select.Icon />\r
      </Select.Trigger>\r
      <Select.Portal>\r
        <Select.Content position="popper" sideOffset={4}>\r
          <Select.Viewport>\r
            <Select.Item value="1">\r
              <Select.ItemText>Option 1</Select.ItemText>\r
              <Select.ItemIndicator>\r
                <Check />\r
              </Select.ItemIndicator>\r
            </Select.Item>\r
            <Select.Item value="2">\r
              <Select.ItemText>Option 2</Select.ItemText>\r
              <Select.ItemIndicator>\r
                <Check />\r
              </Select.ItemIndicator>\r
            </Select.Item>\r
            <Select.Item value="3">\r
              <Select.ItemText>Option 3</Select.ItemText>\r
              <Select.ItemIndicator>\r
                <Check />\r
              </Select.ItemIndicator>\r
            </Select.Item>\r
            <Select.Item value="4">\r
              <Select.ItemText>Option 4</Select.ItemText>\r
              <Select.ItemIndicator>\r
                <Check />\r
              </Select.ItemIndicator>\r
            </Select.Item>\r
          </Select.Viewport>\r
        </Select.Content>\r
      </Select.Portal>\r
    </Select.Root>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: outdent\`
    <Select.Root>
      <Select.Trigger>
        <Select.Value placeholder="Select an option..." />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position="popper" sideOffset={4}>
          <Select.Viewport>
            <Select.Item value="1">
              <Select.ItemText>Option 1</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="2">
              <Select.ItemText>Option 2</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="3">
              <Select.ItemText>Option 3</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="4">
              <Select.ItemText>Option 4</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
        \`
      }
    }
  },
  name: 'Single Item'
} satisfies Story`,...(n=(i=l.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var m,a,s;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Select.Root multi>\r
      <Select.Trigger>\r
        <Select.Value placeholder="Select an option..." />\r
        <Select.Icon />\r
      </Select.Trigger>\r
      <Select.Portal>\r
        <Select.Content position="popper" sideOffset={4}>\r
          <Select.Viewport>\r
            <Select.Item value="1">\r
              <Select.ItemText>Option 1</Select.ItemText>\r
              <Select.ItemIndicator>\r
                <Check />\r
              </Select.ItemIndicator>\r
            </Select.Item>\r
            <Select.Item value="2">\r
              <Select.ItemText>Option 2</Select.ItemText>\r
              <Select.ItemIndicator>\r
                <Check />\r
              </Select.ItemIndicator>\r
            </Select.Item>\r
            <Select.Item value="3">\r
              <Select.ItemText>Option 3</Select.ItemText>\r
              <Select.ItemIndicator>\r
                <Check />\r
              </Select.ItemIndicator>\r
            </Select.Item>\r
            <Select.Item value="4">\r
              <Select.ItemText>Option 4</Select.ItemText>\r
              <Select.ItemIndicator>\r
                <Check />\r
              </Select.ItemIndicator>\r
            </Select.Item>\r
          </Select.Viewport>\r
        </Select.Content>\r
      </Select.Portal>\r
    </Select.Root>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: outdent\`
    <Select.Root multi>
      <Select.Trigger>
        <Select.Value placeholder="Select an option..." />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position="popper" sideOffset={4}>
          <Select.Viewport>
            <Select.Item value="1">
              <Select.ItemText>Option 1</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="2">
              <Select.ItemText>Option 2</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="3">
              <Select.ItemText>Option 3</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="4">
              <Select.ItemText>Option 4</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
        \`
      }
    }
  },
  name: 'Multiple Items'
} satisfies Story`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var d,p,x;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Select.Root multi>\r
      <Select.Trigger>\r
        <Select.Value placeholder="Select an option..." />\r
        <Select.Icon />\r
      </Select.Trigger>\r
      <Select.Portal>\r
        <Select.Content position="popper" sideOffset={4}>\r
          <Select.Viewport>\r
            <Select.Item value="1">\r
              <Select.ItemText>Option 1</Select.ItemText>\r
              <Select.ItemIndicator>\r
                <Check />\r
              </Select.ItemIndicator>\r
            </Select.Item>\r
            <Select.Item value="2">\r
              <Select.ItemText>Option 2</Select.ItemText>\r
              <Select.ItemIndicator>\r
                <Check />\r
              </Select.ItemIndicator>\r
            </Select.Item>\r
            <Select.Group>\r
              <Select.Label>Options 3 & 4</Select.Label>\r
              <Select.Item value="3">\r
                <Select.ItemText>Option 3</Select.ItemText>\r
                <Select.ItemIndicator>\r
                  <Check />\r
                </Select.ItemIndicator>\r
              </Select.Item>\r
              <Select.Item value="4">\r
                <Select.ItemText>Option 3</Select.ItemText>\r
                <Select.ItemIndicator>\r
                  <Check />\r
                </Select.ItemIndicator>\r
              </Select.Item>\r
            </Select.Group>\r
          </Select.Viewport>\r
        </Select.Content>\r
      </Select.Portal>\r
    </Select.Root>,
  parameters: {
    docs: {
      source: {
        type: 'code',
        code: outdent\`
    <Select.Root multi>
      <Select.Trigger>
        <Select.Value placeholder="Select an option..." />
        <Select.Icon />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content position="popper" sideOffset={4}>
          <Select.Viewport>
            <Select.Item value="1">
              <Select.ItemText>Option 1</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Item value="2">
              <Select.ItemText>Option 2</Select.ItemText>
              <Select.ItemIndicator>
                <Check />
              </Select.ItemIndicator>
            </Select.Item>
            <Select.Group>
              <Select.Label>Options 3 & 4</Select.Label>
              <Select.Item value="3">
                <Select.ItemText>Option 3</Select.ItemText>
                <Select.ItemIndicator>
                  <Check />
                </Select.ItemIndicator>
              </Select.Item>
              <Select.Item value="4">
                <Select.ItemText>Option 3</Select.ItemText>
                <Select.ItemIndicator>
                  <Check />
                </Select.ItemIndicator>
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
        \`
      }
    }
  },
  name: 'Nested Items'
} satisfies Story`,...(x=(p=o.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const T=["SingleItem","MultipleItems","NestedItems"],C=Object.freeze(Object.defineProperty({__proto__:null,MultipleItems:r,NestedItems:o,SingleItem:l,__namedExportsOrder:T,default:u},Symbol.toStringTag,{value:"Module"}));export{r as M,o as N,C as S,l as a};
