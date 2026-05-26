import{r as o,_ as l,$ as Y,d as H,z as Q,aB as X,j as a,F as m,T as L,ad as S,p as h,aA as K}from"./iframe-_cKE9r89.js";import{d as J}from"./index-BxBVU389.js";import{g as q,$ as Z,a as ee,b as ae,c as te,d as z,h as oe,e as re,i as ne,f as ie,s as le}from"./setOpacity-B50hv1Ur.js";import{B as d}from"./Button-BvqyPouE.js";import{R as se,L as ce}from"./Field-Cwhta1v_.js";import{S as de,d as c}from"./SingleSelect-CFTa6hkl.js";import{G as pe,I as E}from"./Radio-BpM9oplW.js";const fe="AlertDialog",[ue,Ye]=Y(fe,[q]),s=q(),ge=e=>{const{__scopeAlertDialog:t,...r}=e,n=s(t);return o.createElement(Z,l({},n,r,{modal:!0}))},me=o.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...n}=e,i=s(r);return o.createElement(ee,l({},i,n,{ref:t}))}),$e=e=>{const{__scopeAlertDialog:t,...r}=e,n=s(t);return o.createElement(ae,l({},n,r))},he=o.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...n}=e,i=s(r);return o.createElement(re,l({},i,n,{ref:t}))}),U="AlertDialogContent",[xe,be]=ue(U),De=o.forwardRef((e,t)=>{const{__scopeAlertDialog:r,children:n,...i}=e,x=s(r),b=o.useRef(null),V=H(t,b),R=o.useRef(null);return o.createElement(ne,{contentName:U,titleName:Se,docsSlug:"alert-dialog"},o.createElement(xe,{scope:r,cancelRef:R},o.createElement(ie,l({role:"alertdialog"},x,i,{ref:V,onOpenAutoFocus:Q(i.onOpenAutoFocus,p=>{var D;p.preventDefault(),(D=R.current)===null||D===void 0||D.focus({preventScroll:!0})}),onPointerDownOutside:p=>p.preventDefault(),onInteractOutside:p=>p.preventDefault()}),o.createElement(X,null,n),!1)))}),Se="AlertDialogTitle",_e=o.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...n}=e,i=s(r);return o.createElement(te,l({},i,n,{ref:t}))}),ve=o.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...n}=e,i=s(r);return o.createElement(oe,l({},i,n,{ref:t}))}),ye=o.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...n}=e,i=s(r);return o.createElement(z,l({},i,n,{ref:t}))}),je="AlertDialogCancel",Ae=o.forwardRef((e,t)=>{const{__scopeAlertDialog:r,...n}=e,{cancelRef:i}=be(je,r),x=s(r),b=H(t,i);return o.createElement(z,l({},x,n,{ref:b}))}),we=ge,Ce=me,Oe=$e,Re=he,Ee=De,Fe=ye,Te=Ae,Be=_e,Ie=ve,G=we,_=o.forwardRef((e,t)=>a.jsx(Ce,{...e,asChild:!0,ref:t})),v=o.forwardRef((e,t)=>a.jsx(Oe,{children:a.jsx(ke,{children:a.jsx(Ne,{ref:t,...e})})})),ke=h(Re)`
  background: ${e=>le(e.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${S.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Ne=h(Ee)`
  max-width: 42rem;
  height: min-content;
  width: calc(100% - ${({theme:e})=>e.spaces[8]});
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.neutral0};
  box-shadow: ${e=>e.theme.shadows.popupShadow};
  z-index: ${e=>e.theme.zIndices.modal};

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${S.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${S.modalPopOut};
    }
  }
`,y=o.forwardRef(({children:e,...t},r)=>a.jsx(Be,{asChild:!0,children:a.jsx(Pe,{tag:"h2",variant:"beta",ref:r,padding:6,fontWeight:"bold",...t,children:e})})),Pe=h(L)`
  display: flex;
  justify-content: center;
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`,j=o.forwardRef(({children:e,icon:t,...r},n)=>a.jsx(m,{ref:n,gap:2,direction:"column",paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,...r,children:typeof e=="string"?a.jsxs(a.Fragment,{children:[t?o.cloneElement(t,{width:24,height:24}):null,a.jsx(A,{children:e})]}):e})),A=o.forwardRef((e,t)=>a.jsx(Ie,{asChild:!0,children:a.jsx(L,{ref:t,variant:"omega",...e,tag:"p"})})),w=o.forwardRef((e,t)=>a.jsx(We,{ref:t,gap:2,padding:4,justifyContent:"space-between",...e,tag:"footer"})),We=h(m)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`,C=o.forwardRef((e,t)=>a.jsx(Te,{...e,asChild:!0,ref:t})),O=o.forwardRef((e,t)=>a.jsx(Fe,{...e,asChild:!0,ref:t}));_.__docgenInfo={description:"",methods:[],displayName:"Trigger",composes:["Omit"]};v.__docgenInfo={description:"",methods:[],displayName:"Content"};y.__docgenInfo={description:"",methods:[],displayName:"Header",props:{ellipsis:{required:!1,tsType:{name:"boolean"},description:""},textColor:{required:!1,tsType:{name:"unknown"},description:""},textDecoration:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['textDecoration']",raw:"CSSProperties['textDecoration']"}}]}},{name:"CSSProperties['textDecoration']",raw:"CSSProperties['textDecoration']"}]},description:""},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof TEXT_VARIANTS)[number]"},description:""}}};j.__docgenInfo={description:"",methods:[],displayName:"Body",props:{icon:{required:!1,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:`@description optional icon to display, only rendered if
children is a string. If provided, it is given the height
& width of 24px.`}},composes:["Omit"]};A.__docgenInfo={description:"",methods:[],displayName:"Description",composes:["Omit"]};w.__docgenInfo={description:"",methods:[],displayName:"Footer",composes:["Omit"]};C.__docgenInfo={description:"",methods:[],displayName:"Cancel",composes:["Omit"]};O.__docgenInfo={description:"",methods:[],displayName:"Action",composes:["Omit"]};const{fn:$}=__STORYBOOK_MODULE_TEST__,Me={title:"Components/Dialog",decorators:[e=>a.jsx(m,{width:"100%",height:"100%",justifyContent:"center",children:a.jsx(e,{})})],args:{icon:a.jsx(K,{fill:"danger600"}),defaultOpen:!1,onOpenChange:$(),onOpenAutoFocus:$(),onCloseAutoFocus:$(),onEscapeKeyDown:$()},parameters:{chromatic:{disableSnapshot:!1},docs:{source:{code:J`
          <Dialog.Root>
            <Dialog.Trigger>
              <Button variant="danger">Choose a fruit</Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Header>Confirmation</Dialog.Header>
              <Dialog.Body>
                <Field.Root width="100%">
                  <Field.Label>What is your favourite fruit?</Field.Label>
                  <SingleSelect placeholder="Pick a fruit...">
                    <SingleSelectOption value="apple">Apple</SingleSelectOption>
                    <SingleSelectOption value="avocado">Avocado</SingleSelectOption>
                    <SingleSelectOption value="banana">Banana</SingleSelectOption>
                    <SingleSelectOption value="kiwi">Kiwi</SingleSelectOption>
                    <SingleSelectOption value="mango">Mango</SingleSelectOption>
                    <SingleSelectOption value="orange">Orange</SingleSelectOption>
                    <SingleSelectOption value="strawberry">Strawberry</SingleSelectOption>
                  </SingleSelect>
                </Field.Root>
              </Dialog.Body>
              <Dialog.Footer>
                <Dialog.Cancel>
                  <Button fullWidth variant="tertiary">
                    Cancel
                  </Button>
                </Dialog.Cancel>
                <Dialog.Action>
                  <Button fullWidth variant="success-light">
                    Confirm
                  </Button>
                </Dialog.Action>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Root>
        `}}},render:({icon:e,onOpenAutoFocus:t,onCloseAutoFocus:r,onEscapeKeyDown:n,...i})=>a.jsxs(G,{...i,children:[a.jsx(_,{children:a.jsx(d,{variant:"default",children:"Fruit manager"})}),a.jsxs(v,{onOpenAutoFocus:t,onCloseAutoFocus:r,onEscapeKeyDown:n,children:[a.jsx(y,{children:"Confirmation"}),a.jsx(j,{children:a.jsxs(se,{width:"100%",children:[a.jsx(ce,{children:"What is your favourite fruit?"}),a.jsxs(de,{placeholder:"Pick a fruit...",children:[a.jsx(c,{value:"apple",children:"Apple"}),a.jsx(c,{value:"avocado",children:"Avocado"}),a.jsx(c,{value:"banana",children:"Banana"}),a.jsx(c,{value:"kiwi",children:"Kiwi"}),a.jsx(c,{value:"mango",children:"Mango"}),a.jsx(c,{value:"orange",children:"Orange"}),a.jsx(c,{value:"strawberry",children:"Strawberry"})]})]})}),a.jsxs(w,{children:[a.jsx(C,{children:a.jsx(d,{fullWidth:!0,variant:"tertiary",children:"Cancel"})}),a.jsx(O,{children:a.jsx(d,{fullWidth:!0,variant:"success-light",children:"Confirm"})})]})]})]})},f={name:"base"},u={args:{defaultOpen:!0},name:"default open"},g={name:"children",render:({onOpenAutoFocus:e,onCloseAutoFocus:t,onEscapeKeyDown:r,...n})=>a.jsxs(G,{...n,children:[a.jsx(_,{children:a.jsx(d,{variant:"default",children:"Fruit manager"})}),a.jsxs(v,{onOpenAutoFocus:e,onCloseAutoFocus:t,onEscapeKeyDown:r,children:[a.jsx(y,{children:"Confirmation"}),a.jsx(j,{children:a.jsxs(m,{gap:6,direction:"column",alignItems:"stretch",children:[a.jsxs(m,{gap:2,direction:"column",children:[a.jsx(K,{fill:"danger600",width:"24",height:"24"}),a.jsx(A,{textAlign:"center",children:"Are you sure you want to unpublish this? How would you like to handle your current draft?"})]}),a.jsxs(pe,{defaultValue:"keep",children:[a.jsx(E,{value:"keep",children:"Unpublish and keep last draft"}),a.jsx(E,{value:"replace",children:"Unpublish and replace last draft"})]})]})}),a.jsxs(w,{children:[a.jsx(C,{children:a.jsx(d,{fullWidth:!0,variant:"tertiary",children:"Cancel"})}),a.jsx(O,{children:a.jsx(d,{fullWidth:!0,variant:"danger-light",children:"Yes, delete"})})]})]})]})};var F,T,B;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'base'
} satisfies Story`,...(B=(T=f.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var I,k,N;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  },
  name: 'default open'
} satisfies Story`,...(N=(k=u.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var P,W,M;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'children',
  render: ({
    onOpenAutoFocus,
    onCloseAutoFocus,
    onEscapeKeyDown,
    ...args
  }) => {
    return <Dialog.Root {...args}>\r
        <Dialog.Trigger>\r
          <Button variant="default">Fruit manager</Button>\r
        </Dialog.Trigger>\r
        <Dialog.Content onOpenAutoFocus={onOpenAutoFocus} onCloseAutoFocus={onCloseAutoFocus} onEscapeKeyDown={onEscapeKeyDown}>\r
          <Dialog.Header>Confirmation</Dialog.Header>\r
          <Dialog.Body>\r
            <Flex gap={6} direction="column" alignItems="stretch">\r
              <Flex gap={2} direction="column">\r
                <WarningCircle fill="danger600" width="24" height="24" />\r
                <Dialog.Description textAlign="center">\r
                  Are you sure you want to unpublish this? How would you like to handle your current draft?\r
                </Dialog.Description>\r
              </Flex>\r
              <Radio.Group defaultValue="keep">\r
                <Radio.Item value="keep">Unpublish and keep last draft</Radio.Item>\r
                <Radio.Item value="replace">Unpublish and replace last draft</Radio.Item>\r
              </Radio.Group>\r
            </Flex>\r
          </Dialog.Body>\r
          <Dialog.Footer>\r
            <Dialog.Cancel>\r
              <Button fullWidth variant="tertiary">\r
                Cancel\r
              </Button>\r
            </Dialog.Cancel>\r
            <Dialog.Action>\r
              <Button fullWidth variant="danger-light">\r
                Yes, delete\r
              </Button>\r
            </Dialog.Action>\r
          </Dialog.Footer>\r
        </Dialog.Content>\r
      </Dialog.Root>;
  }
} satisfies Story`,...(M=(W=g.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};const He=["Base","DefaultOpen","Children"],Qe=Object.freeze(Object.defineProperty({__proto__:null,Base:f,Children:g,DefaultOpen:u,__namedExportsOrder:He,default:Me},Symbol.toStringTag,{value:"Module"}));export{g as C,Qe as D};
