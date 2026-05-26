import{j as r,T as o}from"./iframe-_cKE9r89.js";import{d as s}from"./index-BxBVU389.js";import{R as e,I as a}from"./Grid-spcvu4bJ.js";const _={title:"Components/Grid",component:e},d={render:()=>r.jsxs(e,{gap:5,children:[r.jsx(a,{xs:1,background:"primary100",children:r.jsx(o,{children:"First"})}),r.jsx(a,{xs:1,background:"primary100",children:r.jsx(o,{children:"Second"})}),r.jsx(a,{xs:1,background:"primary100",children:r.jsx(o,{children:"Third"})}),r.jsx(a,{xs:1,background:"primary100",color:"primary700",children:r.jsx(o,{children:"Last"})})]}),parameters:{docs:{source:{code:s`
        <Grid.Root gap={5}>
          <Grid.Item xs={1} background="primary100">
            <Typography>First</Typography>
          </Grid.Item>
          <Grid.Item xs={1} background="primary100">
            <Typography>Second</Typography>
          </Grid.Item>
          <Grid.Item xs={1} background="primary100">
            <Typography>Third</Typography>
          </Grid.Item>
          <Grid.Item xs={1} background="primary100" color="primary700">
            <Typography>Last</Typography>
          </Grid.Item>
        </Grid.Root>
        `}}},name:"base"},i={render:()=>r.jsx(e,{gap:5,children:Array(12).fill(null).map((f,n)=>r.jsx(a,{background:"warning200",xs:1,children:r.jsx(o,{children:n+1})},n))}),parameters:{docs:{source:{code:s`
        <Grid.Root gap={5}>
          {Array(12)
            .fill(null)
            .map((_, i) => (
              <Grid.Item key={i} background="warning200" xs={1}>
                <Typography>{i + 1}</Typography>
              </Grid.Item>
            ))}
        </Grid.Root>
        `}}},name:"base grid"},p={render:()=>r.jsxs(e,{gap:5,children:[r.jsx(a,{background:"info200",col:4,order:{initial:3,medium:1,large:1},children:r.jsx(o,{children:"First"})}),r.jsx(a,{background:"info200",col:4,order:{initial:1,medium:2,large:3},children:r.jsx(o,{children:"Second"})}),r.jsx(a,{background:"info200",col:4,order:{initial:2,medium:3,large:2},children:r.jsx(o,{children:"Third"})})]}),name:"Reordered grid items"},t={render:()=>r.jsx(e,{gap:5,children:Array(12).fill(null).map((f,n)=>r.jsx(a,{background:"success200",col:6,children:r.jsxs(o,{children:["Column ",n+1]})},n))}),name:"Column size fallback to col"},m={render:()=>r.jsxs(e,{gap:{large:5,medium:2,initial:1},background:"primary200",children:[r.jsx(a,{background:"neutral100",padding:{initial:1,medium:4},col:6,s:12,children:r.jsx(o,{children:"Some box 1"})}),r.jsx(a,{background:"neutral100",padding:1,col:6,s:12,children:r.jsx(o,{children:"Some box 2"})}),r.jsx(a,{background:"neutral100",padding:1,col:3,s:6,xs:12,children:r.jsx(o,{children:"Some box 3"})}),r.jsx(a,{background:"neutral100",padding:1,col:3,s:6,xs:12,children:r.jsx(o,{children:"Some box 4"})}),r.jsx(a,{background:"neutral100",padding:1,col:3,s:6,xs:12,children:r.jsx(o,{children:"Some box 5"})}),r.jsx(a,{background:"neutral100",padding:1,col:3,s:6,xs:12,children:r.jsx(o,{children:"Some box 6"})}),r.jsx(a,{background:"neutral100",padding:1,col:8,xs:12,children:r.jsx(o,{children:"Some box 7"})}),r.jsx(a,{background:"neutral100",padding:1,col:2,xs:12,children:r.jsx(o,{children:"Some box 8"})}),r.jsx(a,{background:"neutral100",padding:5,col:2,xs:12,children:r.jsx(o,{children:"Some box 9"})})]}),parameters:{docs:{source:{code:s`
        <Grid.Root
          gap={{
            large: 5,
            medium: 2,
            initial: 1,
          }}
          background="primary200"
        >
          <Grid.Item background="neutral100" padding={{ initial: 1, medium: 4 }} col={6} s={12}>
            <Typography>Some box 1</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={1} col={6} s={12}>
            <Typography>Some box 2</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={1} col={3} s={6} xs={12}>
            <Typography>Some box 3</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={1} col={3} s={6} xs={12}>
            <Typography>Some box 4</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={1} col={3} s={6} xs={12}>
            <Typography>Some box 5</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={1} col={3} s={6} xs={12}>
            <Typography>Some box 6</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={1} col={8} xs={12}>
            <Typography>Some box 7</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={1} col={2} xs={12}>
            <Typography>Some box 8</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={5} col={2} xs={12}>
            <Typography>Some box 9</Typography>
          </Grid.Item>
        </Grid.Root>
        `}}},name:"complex grid"};var g,c,y;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Grid.Root gap={5}>\r
      <Grid.Item xs={1} background="primary100">\r
        <Typography>First</Typography>\r
      </Grid.Item>\r
      <Grid.Item xs={1} background="primary100">\r
        <Typography>Second</Typography>\r
      </Grid.Item>\r
      <Grid.Item xs={1} background="primary100">\r
        <Typography>Third</Typography>\r
      </Grid.Item>\r
      <Grid.Item xs={1} background="primary100" color="primary700">\r
        <Typography>Last</Typography>\r
      </Grid.Item>\r
    </Grid.Root>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Grid.Root gap={5}>
          <Grid.Item xs={1} background="primary100">
            <Typography>First</Typography>
          </Grid.Item>
          <Grid.Item xs={1} background="primary100">
            <Typography>Second</Typography>
          </Grid.Item>
          <Grid.Item xs={1} background="primary100">
            <Typography>Third</Typography>
          </Grid.Item>
          <Grid.Item xs={1} background="primary100" color="primary700">
            <Typography>Last</Typography>
          </Grid.Item>
        </Grid.Root>
        \`
      }
    }
  },
  name: 'base'
} satisfies Story`,...(y=(c=d.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};var l,u,h;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Grid.Root gap={5}>\r
      {Array(12).fill(null).map((_, i) => <Grid.Item key={i} background="warning200" xs={1}>\r
            <Typography>{i + 1}</Typography>\r
          </Grid.Item>)}\r
    </Grid.Root>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Grid.Root gap={5}>
          {Array(12)
            .fill(null)
            .map((_, i) => (
              <Grid.Item key={i} background="warning200" xs={1}>
                <Typography>{i + 1}</Typography>
              </Grid.Item>
            ))}
        </Grid.Root>
        \`
      }
    }
  },
  name: 'base grid'
} satisfies Story`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,G,b;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Grid.Root gap={5}>\r
      <Grid.Item background="info200" col={4} order={{
      initial: 3,
      medium: 1,
      large: 1
    }}>\r
        <Typography>First</Typography>\r
      </Grid.Item>\r
      <Grid.Item background="info200" col={4} order={{
      initial: 1,
      medium: 2,
      large: 3
    }}>\r
        <Typography>Second</Typography>\r
      </Grid.Item>\r
      <Grid.Item background="info200" col={4} order={{
      initial: 2,
      medium: 3,
      large: 2
    }}>\r
        <Typography>Third</Typography>\r
      </Grid.Item>\r
    </Grid.Root>,
  name: 'Reordered grid items'
} satisfies Story`,...(b=(G=p.parameters)==null?void 0:G.docs)==null?void 0:b.source}}};var T,I,k;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Grid.Root gap={5}>\r
      {Array(12).fill(null).map((_, i) => <Grid.Item key={i} background="success200" col={6}>\r
            <Typography>Column {i + 1}</Typography>\r
          </Grid.Item>)}\r
    </Grid.Root>,
  name: 'Column size fallback to col'
} satisfies Story`,...(k=(I=t.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var S,j,R;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Grid.Root gap={{
    large: 5,
    medium: 2,
    initial: 1
  }} background="primary200">\r
      <Grid.Item background="neutral100" padding={{
      initial: 1,
      medium: 4
    }} col={6} s={12}>\r
        <Typography>Some box 1</Typography>\r
      </Grid.Item>\r
      <Grid.Item background="neutral100" padding={1} col={6} s={12}>\r
        <Typography>Some box 2</Typography>\r
      </Grid.Item>\r
      <Grid.Item background="neutral100" padding={1} col={3} s={6} xs={12}>\r
        <Typography>Some box 3</Typography>\r
      </Grid.Item>\r
      <Grid.Item background="neutral100" padding={1} col={3} s={6} xs={12}>\r
        <Typography>Some box 4</Typography>\r
      </Grid.Item>\r
      <Grid.Item background="neutral100" padding={1} col={3} s={6} xs={12}>\r
        <Typography>Some box 5</Typography>\r
      </Grid.Item>\r
      <Grid.Item background="neutral100" padding={1} col={3} s={6} xs={12}>\r
        <Typography>Some box 6</Typography>\r
      </Grid.Item>\r
      <Grid.Item background="neutral100" padding={1} col={8} xs={12}>\r
        <Typography>Some box 7</Typography>\r
      </Grid.Item>\r
      <Grid.Item background="neutral100" padding={1} col={2} xs={12}>\r
        <Typography>Some box 8</Typography>\r
      </Grid.Item>\r
      <Grid.Item background="neutral100" padding={5} col={2} xs={12}>\r
        <Typography>Some box 9</Typography>\r
      </Grid.Item>\r
    </Grid.Root>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Grid.Root
          gap={{
            large: 5,
            medium: 2,
            initial: 1,
          }}
          background="primary200"
        >
          <Grid.Item background="neutral100" padding={{ initial: 1, medium: 4 }} col={6} s={12}>
            <Typography>Some box 1</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={1} col={6} s={12}>
            <Typography>Some box 2</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={1} col={3} s={6} xs={12}>
            <Typography>Some box 3</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={1} col={3} s={6} xs={12}>
            <Typography>Some box 4</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={1} col={3} s={6} xs={12}>
            <Typography>Some box 5</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={1} col={3} s={6} xs={12}>
            <Typography>Some box 6</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={1} col={8} xs={12}>
            <Typography>Some box 7</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={1} col={2} xs={12}>
            <Typography>Some box 8</Typography>
          </Grid.Item>
          <Grid.Item background="neutral100" padding={5} col={2} xs={12}>
            <Typography>Some box 9</Typography>
          </Grid.Item>
        </Grid.Root>
        \`
      }
    }
  },
  name: 'complex grid'
} satisfies Story`,...(R=(j=m.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};const C=["Base","BaseGrid","ReorderedGridItems","GridItemColSizeFallback","ComplexGrid"],B=Object.freeze(Object.defineProperty({__proto__:null,Base:d,BaseGrid:i,ComplexGrid:m,GridItemColSizeFallback:t,ReorderedGridItems:p,__namedExportsOrder:C,default:_},Symbol.toStringTag,{value:"Module"}));export{d as B,m as C,B as G,i as a};
