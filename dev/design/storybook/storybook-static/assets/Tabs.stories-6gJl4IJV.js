import{r as o,D as te,$ as re,x as oe,y as B,_ as T,z as _,a8 as se,j as s,ae as ne,p,n as C,T as R,c as A}from"./iframe-_cKE9r89.js";import{d as x}from"./index-BxBVU389.js";import{$ as Y,a as de,b as ie}from"./index-CmgM1aMT.js";import{$ as be}from"./index-D_aoadGl.js";const H="Tabs",[ce,Ie]=re(H,[Y]),J=Y(),[le,M]=ce(H),ue=o.forwardRef((a,e)=>{const{__scopeTabs:t,value:r,onValueChange:n,defaultValue:i,orientation:d="horizontal",dir:l,activationMode:u="automatic",...f}=a,c=be(l),[b,g]=te({prop:r,onChange:n,defaultProp:i});return o.createElement(le,{scope:t,baseId:oe(),value:b,onValueChange:g,orientation:d,dir:c,activationMode:u},o.createElement(B.div,T({dir:c,"data-orientation":d},f,{ref:e})))}),ge="TabsList",Te=o.forwardRef((a,e)=>{const{__scopeTabs:t,loop:r=!0,...n}=a,i=M(ge,t),d=J(t);return o.createElement(de,T({asChild:!0},d,{orientation:i.orientation,dir:i.dir,loop:r}),o.createElement(B.div,T({role:"tablist","aria-orientation":i.orientation},n,{ref:e})))}),pe="TabsTrigger",fe=o.forwardRef((a,e)=>{const{__scopeTabs:t,value:r,disabled:n=!1,...i}=a,d=M(pe,t),l=J(t),u=Q(d.baseId,r),f=X(d.baseId,r),c=r===d.value;return o.createElement(ie,T({asChild:!0},l,{focusable:!n,active:c}),o.createElement(B.button,T({type:"button",role:"tab","aria-selected":c,"aria-controls":f,"data-state":c?"active":"inactive","data-disabled":n?"":void 0,disabled:n,id:u},i,{ref:e,onMouseDown:_(a.onMouseDown,b=>{!n&&b.button===0&&b.ctrlKey===!1?d.onValueChange(r):b.preventDefault()}),onKeyDown:_(a.onKeyDown,b=>{[" ","Enter"].includes(b.key)&&d.onValueChange(r)}),onFocus:_(a.onFocus,()=>{const b=d.activationMode!=="manual";!c&&!n&&b&&d.onValueChange(r)})})))}),ve="TabsContent",ye=o.forwardRef((a,e)=>{const{__scopeTabs:t,value:r,forceMount:n,children:i,...d}=a,l=M(ve,t),u=Q(l.baseId,r),f=X(l.baseId,r),c=r===l.value,b=o.useRef(c);return o.useEffect(()=>{const g=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(g)},[]),o.createElement(se,{present:n||c},({present:g})=>o.createElement(B.div,T({"data-state":c?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":u,hidden:!g,id:f,tabIndex:0},d,{ref:e,style:{...a.style,animationDuration:b.current?"0s":void 0}}),g&&i))});function Q(a,e){return`${a}-trigger-${e}`}function X(a,e){return`${a}-content-${e}`}const he=ue,me=Te,$e=fe,xe=ye,[Ce,V]=ne("Tabs"),E=o.forwardRef(({disabled:a=!1,variant:e="regular",hasError:t,...r},n)=>s.jsx(Ce,{disabled:a,hasError:t,variant:e,children:s.jsx(Be,{ref:n,...r})})),Be=p(he)`
  width: 100%;
  position: relative;
`,Z=o.forwardRef((a,e)=>{const{variant:t}=V("List");return s.jsx(_e,{ref:e,...a,$variant:t})}),_e=p(me)`
  display: flex;
  align-items: ${a=>a.$variant==="regular"?"flex-end":"unset"};
  position: relative;
  z-index: 0;
`,S=o.forwardRef(({children:a,disabled:e,...t},r)=>{const{disabled:n,variant:i,hasError:d}=V("Trigger"),l=n===!0||n===t.value||e,u=d===t.value;return s.jsxs(Re,{ref:r,...t,$hasError:u,$variant:i,disabled:l,children:[s.jsx(ae,{fontWeight:"bold",variant:i==="simple"?"sigma":void 0,children:a}),i==="simple"?s.jsx(ee,{}):null]})}),ee=p.span`
  display: block;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  height: 0.2rem;
`,ae=p(R)``,Re=p($e)`
  position: relative;
  color: ${a=>a.$hasError?a.theme.colors.danger600:a.theme.colors.neutral600};
  cursor: pointer;
  z-index: 0;

  ${a=>a.$variant==="simple"?C`
        padding-block: ${e=>e.theme.spaces[4]};
        padding-inline: ${e=>e.theme.spaces[4]};

        & > ${ae} {
          line-height: 1.2rem;
        }

        &[data-state='active'] {
          color: ${a.$hasError?a.theme.colors.danger600:a.theme.colors.primary700};

          & > ${ee} {
            opacity: 1;
          }
        }
      `:C`
        padding-block: ${e=>e.theme.spaces[3]};
        padding-inline: ${e=>e.theme.spaces[3]};
        flex: 1;
        background-color: ${e=>e.theme.colors.neutral100};
        border-bottom: solid 1px ${e=>e.theme.colors.neutral150};

        &:not([data-state='active']) + &:not([data-state='active']) {
          border-left: solid 1px ${e=>e.theme.colors.neutral150};
        }

        &[data-state='active'] {
          padding-block: ${e=>e.theme.spaces[4]};
          padding-inline: ${e=>e.theme.spaces[4]};
          color: ${a.$hasError?a.theme.colors.danger600:a.theme.colors.primary700};
          border-top-right-radius: ${e=>e.theme.borderRadius};
          border-top-left-radius: ${e=>e.theme.borderRadius};
          background-color: ${e=>e.theme.colors.neutral0};
          border-bottom: solid 1px ${e=>e.theme.colors.neutral0};
          box-shadow: ${a.theme.shadows.tableShadow};
          z-index: 1;
        }
      `}

  &[data-disabled] {
    cursor: not-allowed;
    color: ${a=>a.theme.colors.neutral400};
  }
`,L=o.forwardRef((a,e)=>{const{variant:t}=V("Content");return s.jsx(Ee,{$variant:t,ref:e,...a})}),Ee=p(xe)`
  ${a=>a.$variant==="simple"?C`
        
      `:C`
        position: relative;
        z-index: 1;
        background-color: ${e=>e.theme.colors.neutral0};
      `}
`;E.__docgenInfo={description:"",methods:[],displayName:"Root",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:"'regular'",computed:!1},required:!1}},composes:["Partial"]};Z.__docgenInfo={description:"",methods:[],displayName:"List"};S.__docgenInfo={description:"",methods:[],displayName:"Trigger"};L.__docgenInfo={description:"",methods:[],displayName:"Content"};const{fn:Se}=__STORYBOOK_MODULE_TEST__,Le={title:"Components/Tabs",component:E,argTypes:{variant:{control:"radio",options:["regular","simple"]}},args:{onValueChange:Se(),variant:"regular"},parameters:{docs:{source:{code:x`
        <Tabs.Root defaultValue="base">
          <Tabs.List aria-label="Manage your attribute">
            <Tabs.Trigger value="base">Base</Tabs.Trigger>
            <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="base">
            <Box padding={4}>
              <Typography tag="p">
                The default settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="advanced">
            <Box padding={4}>
              <Typography tag="p">
                The advanced settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
        `}},chromatic:{disableSnapshot:!1}},render:a=>s.jsxs(E,{...a,defaultValue:"base",children:[s.jsxs(Z,{"aria-label":"Manage your attribute",children:[s.jsx(S,{value:"base",children:"Base"}),s.jsx(S,{value:"advanced",children:"Advanced"})]}),s.jsx(L,{value:"base",children:s.jsx(A,{padding:4,children:s.jsx(R,{tag:"p",children:"The default settings for your attribute"})})}),s.jsx(L,{value:"advanced",children:s.jsx(A,{padding:4,children:s.jsx(R,{tag:"p",children:"The advanced settings for your attribute"})})})]})},v={name:"base"},y={args:{disabled:!0},parameters:{docs:{source:{code:x`
        <Tabs.Root disabled defaultValue="base">
          <Tabs.List aria-label="Manage your attribute">
            <Tabs.Trigger value="base">Base</Tabs.Trigger>
            <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="base">
            <Box padding={4}>
              <Typography tag="p">
                The default settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="advanced">
            <Box padding={4}>
              <Typography tag="p">
                The advanced settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
        `}}},name:"disabled"},h={argTypes:{value:{control:"radio",options:["base","advanced"]}},args:{value:"advanced"},name:"controlled",parameters:{docs:{source:{code:x`
        <Tabs.Root value="advanced" defaultValue="base">
          <Tabs.List aria-label="Manage your attribute">
            <Tabs.Trigger value="base">Base</Tabs.Trigger>
            <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="base">
            <Box padding={4}>
              <Typography tag="p">
                The default settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="advanced">
            <Box padding={4}>
              <Typography tag="p">
                The advanced settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
        `}}}},m={args:{variant:"simple"},parameters:{docs:{source:{code:x`
        <Tabs.Root variant="simple" defaultValue="base">
          <Tabs.List aria-label="Manage your attribute">
            <Tabs.Trigger value="base">Base</Tabs.Trigger>
            <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="base">
            <Box padding={4}>
              <Typography tag="p">
                The default settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="advanced">
            <Box padding={4}>
              <Typography tag="p">
                The advanced settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
        `}}},name:"simple variant"},$={args:{hasError:"advanced"},parameters:{docs:{source:{code:x`
        <Tabs.Root hasError="advanced" defaultValue="base">
          <Tabs.List aria-label="Manage your attribute">
            <Tabs.Trigger value="base">Base</Tabs.Trigger>
            <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="base">
            <Box padding={4}>
              <Typography tag="p">
                The default settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="advanced">
            <Box padding={4}>
              <Typography tag="p">
                The advanced settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
        `}}},name:"has error"};var j,w,I;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'base'
} satisfies Story`,...(I=(w=v.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var D,k,P;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Tabs.Root disabled defaultValue="base">
          <Tabs.List aria-label="Manage your attribute">
            <Tabs.Trigger value="base">Base</Tabs.Trigger>
            <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="base">
            <Box padding={4}>
              <Typography tag="p">
                The default settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="advanced">
            <Box padding={4}>
              <Typography tag="p">
                The advanced settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
        \`
      }
    }
  },
  name: 'disabled'
} satisfies Story`,...(P=(k=y.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var N,O,F;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  argTypes: {
    value: {
      control: 'radio',
      options: ['base', 'advanced']
    }
  },
  args: {
    value: 'advanced'
  },
  name: 'controlled',
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Tabs.Root value="advanced" defaultValue="base">
          <Tabs.List aria-label="Manage your attribute">
            <Tabs.Trigger value="base">Base</Tabs.Trigger>
            <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="base">
            <Box padding={4}>
              <Typography tag="p">
                The default settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="advanced">
            <Box padding={4}>
              <Typography tag="p">
                The advanced settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
        \`
      }
    }
  }
} satisfies Story`,...(F=(O=h.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var z,G,K;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'simple'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Tabs.Root variant="simple" defaultValue="base">
          <Tabs.List aria-label="Manage your attribute">
            <Tabs.Trigger value="base">Base</Tabs.Trigger>
            <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="base">
            <Box padding={4}>
              <Typography tag="p">
                The default settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="advanced">
            <Box padding={4}>
              <Typography tag="p">
                The advanced settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
        \`
      }
    }
  },
  name: 'simple variant'
} satisfies Story`,...(K=(G=m.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var q,U,W;$.parameters={...$.parameters,docs:{...(q=$.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    hasError: 'advanced'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Tabs.Root hasError="advanced" defaultValue="base">
          <Tabs.List aria-label="Manage your attribute">
            <Tabs.Trigger value="base">Base</Tabs.Trigger>
            <Tabs.Trigger value="advanced">Advanced</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="base">
            <Box padding={4}>
              <Typography tag="p">
                The default settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
          <Tabs.Content value="advanced">
            <Box padding={4}>
              <Typography tag="p">
                The advanced settings for your attribute
              </Typography>
            </Box>
          </Tabs.Content>
        </Tabs.Root>
        \`
      }
    }
  },
  name: 'has error'
} satisfies Story`,...(W=(U=$.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const Me=["Base","Disabled","Controlled","SimpleVariant","Error"],De=Object.freeze(Object.defineProperty({__proto__:null,Base:v,Controlled:h,Disabled:y,Error:$,SimpleVariant:m,__namedExportsOrder:Me,default:Le},Symbol.toStringTag,{value:"Module"}));export{v as B,h as C,y as D,$ as E,E as R,m as S,De as T};
