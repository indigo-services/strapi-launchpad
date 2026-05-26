import{j as e,E as $,G as F,T as g,r as U}from"./iframe-_cKE9r89.js";import{d as r}from"./index-BxBVU389.js";import{B as h}from"./Button-BvqyPouE.js";import{R as W,I as p}from"./Grid-spcvu4bJ.js";const{fn:H}=__STORYBOOK_MODULE_TEST__,D=["default","secondary","tertiary","success","success-light","danger","danger-light","ghost"],K={title:"Components/Button",component:h,args:{children:"submit",disabled:!1,fullWidth:!1,loading:!1,onClick:H(),size:"M",variant:"default"},argTypes:{size:{control:"select",options:["S","M","L"]},variant:{control:"select",options:D}},render:s=>e.jsx(h,{...s}),parameters:{chromatic:{disableSnapshot:!1},docs:{source:{code:r`
          <Button>submit</Button>
        `}}}},n={name:"base"},a={args:{disabled:!0},parameters:{docs:{source:{code:r`
          <Button disabled>submit</Button>
        `}}},name:"disabled"},o={args:{children:"submitting...",loading:!0},parameters:{docs:{source:{code:r`
          <Button loading>submitting...</Button>
        `}}},name:"loading"},i={args:{startIcon:e.jsx($,{})},parameters:{docs:{source:{code:r`
          <Button startIcon={<CheckCircle />}>submit</Button>
        `}}},name:"with start icon"},c={args:{endIcon:e.jsx(F,{})},parameters:{docs:{source:{code:r`
          <Button endIcon={<CheckCircle />}>submit</Button>
        `}}},name:"with end icon"},d={args:{size:"S"},parameters:{docs:{source:{code:r`
          <Button size="S">submit</Button>
        `}}},name:"size small"},u={args:{size:"L"},parameters:{docs:{source:{code:r`
          <Button size="L">submit</Button>
        `}}},name:"size large"},S=["default","disabled","loading","size S","size M","size L","startIcon","endIcon"],m={render:()=>e.jsxs(W,{gridCols:S.length+1,gap:6,children:[e.jsx(p,{xs:1,children:e.jsx(g,{variant:"sigma",children:"Variant"})}),S.map(s=>e.jsx(p,{xs:1,children:e.jsx(g,{variant:"sigma",children:s})},s)),D.map(s=>e.jsxs(U.Fragment,{children:[e.jsx(p,{xs:1,children:e.jsx(g,{children:s})}),S.map(t=>{const l={variant:s,size:"M"};return["disabled","loading"].includes(t)&&(l[t]=!0),t.startsWith("size")&&(l.size=t.split(" ")[1]),["startIcon","endIcon"].includes(t)&&(l[t]=e.jsx($,{})),e.jsx(p,{xs:1,alignItems:"center",justifyContent:"center",children:e.jsx(h,{...l,children:"submit"})},`${s}-${t}`)})]},s))]}),name:"all variants"};var B,I,b;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'base'
} satisfies Story`,...(b=(I=n.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var f,y,z;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Button disabled>submit</Button>
        \`
      }
    }
  },
  name: 'disabled'
} satisfies Story`,...(z=(y=a.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var x,T,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'submitting...',
    loading: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Button loading>submitting...</Button>
        \`
      }
    }
  },
  name: 'loading'
} satisfies Story`,...(j=(T=o.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var C,O,_;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    startIcon: <CheckCircle />
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Button startIcon={<CheckCircle />}>submit</Button>
        \`
      }
    }
  },
  name: 'with start icon'
} satisfies Story`,...(_=(O=i.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var L,v,G;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    endIcon: <CrossCircle />
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Button endIcon={<CheckCircle />}>submit</Button>
        \`
      }
    }
  },
  name: 'with end icon'
} satisfies Story`,...(G=(v=c.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var k,R,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'S'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Button size="S">submit</Button>
        \`
      }
    }
  },
  name: 'size small'
} satisfies Story`,...(E=(R=d.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var M,N,A;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'L'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Button size="L">submit</Button>
        \`
      }
    }
  },
  name: 'size large'
} satisfies Story`,...(A=(N=u.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var P,V,w;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    return <Grid.Root gridCols={OPTIONS.length + 1} gap={6}>\r
        <Grid.Item xs={1}>\r
          <Typography variant="sigma">Variant</Typography>\r
        </Grid.Item>\r
        {OPTIONS.map(opt => <Grid.Item xs={1} key={opt}>\r
            <Typography variant="sigma">{opt}</Typography>\r
          </Grid.Item>)}\r
        {BUTTON_VARIANTS.map(variant => {
        return <React.Fragment key={variant}>\r
              <Grid.Item xs={1}>\r
                <Typography>{variant}</Typography>\r
              </Grid.Item>\r
              {OPTIONS.map(opt => {
            const props: ButtonProps = {
              variant,
              size: 'M'
            };
            if (['disabled', 'loading'].includes(opt)) {
              props[opt] = true;
            }
            if (opt.startsWith('size')) {
              props.size = opt.split(' ')[1] as 'S' | 'M' | 'L';
            }
            if (['startIcon', 'endIcon'].includes(opt)) {
              props[opt] = <CheckCircle />;
            }
            return <Grid.Item xs={1} alignItems="center" justifyContent="center" key={\`\${variant}-\${opt}\`}>\r
                    <Button {...props}>submit</Button>\r
                  </Grid.Item>;
          })}\r
            </React.Fragment>;
      })}\r
      </Grid.Root>;
  },
  name: 'all variants'
}`,...(w=(V=m.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const Y=["Base","Disabled","Loading","StartIcon","EndIcon","SizeSmall","SizeLarge","AllVariants"],Z=Object.freeze(Object.defineProperty({__proto__:null,AllVariants:m,Base:n,Disabled:a,EndIcon:c,Loading:o,SizeLarge:u,SizeSmall:d,StartIcon:i,__namedExportsOrder:Y,default:K},Symbol.toStringTag,{value:"Module"}));export{m as A,Z as B};
