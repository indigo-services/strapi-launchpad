import{r as n,j as e,K as Z,T as ee,ad as k,p as b,F,Y as te}from"./iframe-_cKE9r89.js";import{d as I}from"./index-BxBVU389.js";import{$ as oe,a as ne,b as ae,c as re,d as se,s as ie,e as de,f as le}from"./setOpacity-B50hv1Ur.js";import{I as ce}from"./IconButton-Uvk00hK3.js";import{S as ue}from"./ScrollArea-E5LdgMvt.js";import{B as s}from"./Button-BvqyPouE.js";import{R as U,I as r}from"./Grid-spcvu4bJ.js";import{R as u,L as h,I as W}from"./Field-Cwhta1v_.js";import{C as V}from"./Checkbox-0fdbGYKe.js";import{D as Y}from"./DatePicker-DeFJ8sXv.js";import{T as Q}from"./TimePicker-DZj-LHYv.js";const M=oe,C=n.forwardRef((t,o)=>e.jsx(ne,{...t,asChild:!0,ref:o})),j=n.forwardRef((t,o)=>e.jsx(ae,{children:e.jsx(he,{children:e.jsx(me,{ref:o,...t})})})),he=b(de)`
  background: ${t=>ie(t.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${t=>t.theme.zIndices.overlay};
  will-change: opacity;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${k.overlayFadeIn} ${t=>t.theme.motion.timings[200]}
      ${t=>t.theme.motion.easings.authenticMotion};
  }
`,me=b(le)`
  max-width: 83rem;
  max-height: 90vh;
  height: auto;
  width: calc(100% - ${({theme:t})=>t.spaces[8]});
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${t=>t.theme.borderRadius};
  background-color: ${t=>t.theme.colors.neutral0};
  box-shadow: ${t=>t.theme.shadows.popupShadow};
  z-index: ${t=>t.theme.zIndices.modal};

  ${({theme:t})=>t.breakpoints.medium} {
    width: calc(100% - ${({theme:t})=>t.spaces[9]});
  }
  > form {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${t=>t.theme.motion.timings[200]};
      animation-timing-function: ${t=>t.theme.motion.easings.authenticMotion};
      animation-name: ${k.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${t=>t.theme.motion.timings[120]};
      animation-timing-function: ${t=>t.theme.motion.easings.easeOutQuad};
      animation-name: ${k.modalPopOut};
    }
  }
`,y=n.forwardRef((t,o)=>e.jsx(se,{...t,asChild:!0,ref:o})),T=n.forwardRef(({children:t,closeLabel:o="Close modal",...a},i)=>e.jsxs(pe,{ref:i,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...a,tag:"header",children:[t,e.jsx(y,{children:e.jsx(ce,{withTooltip:!1,label:o,children:e.jsx(Z,{})})})]})),pe=b(F)`
  border-bottom: solid 1px ${t=>t.theme.colors.neutral150};
`,v=n.forwardRef((t,o)=>e.jsx(re,{asChild:!0,children:e.jsx(ee,{tag:"h2",variant:"omega",fontWeight:"bold",ref:o,...t})})),R=n.forwardRef(({children:t,...o},a)=>e.jsx(fe,{ref:a,...o,children:t})),fe=b(ue)`
  padding-inline: ${t=>t.theme.spaces[7]};

  & > div {
    padding-block: ${t=>t.theme.spaces[8]};
    /* Add negative margin and padding to avoid cropping the box shadow when the inputs are focused */
    margin: 0 -2px 0 -2px;
    padding-left: 2px;
    padding-right: 2px;

    & > div {
      // the scroll area component applies a display: table to the child, which we don't want.
      display: block !important;
    }
  }
`,S=n.forwardRef((t,o)=>e.jsx(ge,{ref:o,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...t,tag:"footer"})),ge=b(F)`
  border-top: solid 1px ${t=>t.theme.colors.neutral150};
  flex: 1;
`;C.__docgenInfo={description:"",methods:[],displayName:"Trigger",composes:["Omit"]};y.__docgenInfo={description:"",methods:[],displayName:"Close",composes:["Omit"]};j.__docgenInfo={description:"",methods:[],displayName:"Content"};T.__docgenInfo={description:"",methods:[],displayName:"Header",props:{closeLabel:{required:!1,tsType:{name:"string"},description:`@default 'Close modal'
@description The label for the close button,
useful if you want the button to be translated
to other languages.`,defaultValue:{value:"'Close modal'",computed:!1}}},composes:["Omit"]};v.__docgenInfo={description:"",methods:[],displayName:"Title",props:{ellipsis:{required:!1,tsType:{name:"boolean"},description:""},textColor:{required:!1,tsType:{name:"unknown"},description:""},textDecoration:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['textDecoration']",raw:"CSSProperties['textDecoration']"}}]}},{name:"CSSProperties['textDecoration']",raw:"CSSProperties['textDecoration']"}]},description:""},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof TEXT_VARIANTS)[number]"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"Body",props:{viewportRef:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<ScrollAreaViewportElement>",elements:[{name:"HTMLDivElement"}]},description:`@description This ref is attatched specifically to the viewport,
not the container of the viewport & scrollbars.`}},composes:["Omit"]};S.__docgenInfo={description:"",methods:[],displayName:"Footer",composes:["Omit"]};const{fn:c}=__STORYBOOK_MODULE_TEST__,we={title:"Components/Modal",component:M,decorators:[t=>e.jsx(F,{width:"100%",height:"100%",justifyContent:"center",children:e.jsx(t,{})})],parameters:{docs:{source:{code:I`
          <Modal.Root>
            <Modal.Trigger>
              <Button>Edit Release</Button>
            </Modal.Trigger>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>Add to release</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Field.Root name="name" required>
                  <Field.Label>Name</Field.Label>
                  <Field.Input />
                </Field.Root>
              </Modal.Body>
              <Modal.Footer>
                <Modal.Close>
                  <Button variant="tertiary">Cancel</Button>
                </Modal.Close>
                <Button>Confirm</Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Root>
        `}},chromatic:{disableSnapshot:!1}},args:{defaultOpen:!1,onOpenChange:c(),onOpenAutoFocus:c(),onCloseAutoFocus:c(),onEscapeKeyDown:c(),onPointerDownOutside:c(),onInteractOutside:c()},render:({onOpenAutoFocus:t,onCloseAutoFocus:o,onEscapeKeyDown:a,onPointerDownOutside:i,onInteractOutside:m,...p})=>{const[d,l]=n.useState(!0);return e.jsxs(M,{...p,children:[e.jsx(C,{children:e.jsx(s,{children:"Edit Release"})}),e.jsxs(j,{onOpenAutoFocus:t,onCloseAutoFocus:o,onEscapeKeyDown:a,onPointerDownOutside:i,onInteractOutside:m,children:[e.jsx(T,{children:e.jsx(v,{children:"Add to release"})}),e.jsxs("form",{action:"#",onSubmit:O=>O.preventDefault(),children:[e.jsx(R,{children:e.jsxs(U,{gridCols:2,gap:6,children:[e.jsx(r,{xs:2,children:e.jsxs(u,{name:"name",required:!0,children:[e.jsx(h,{children:"Name"}),e.jsx(W,{})]})}),e.jsx(r,{xs:2,children:e.jsx(V,{checked:d,onCheckedChange:l,name:"schedule",value:"true",children:"Schedule release"})}),d?e.jsxs(e.Fragment,{children:[e.jsx(r,{xs:1,children:e.jsxs(u,{name:"date",required:!0,children:[e.jsx(h,{children:"Date"}),e.jsx(Y,{})]})}),e.jsx(r,{xs:1,children:e.jsxs(u,{name:"time",required:!0,children:[e.jsx(h,{children:"time"}),e.jsx(Q,{})]})})]}):null]})}),e.jsxs(S,{children:[e.jsx(y,{children:e.jsx(s,{variant:"tertiary",children:"Cancel"})}),e.jsx(s,{type:"submit",children:"Confirm"})]})]})]})]})}},f={name:"base"},g={args:{defaultOpen:!0},name:"default open"},xe=()=>new Promise(t=>setTimeout(t,1e3)),w={parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:I`
          const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

          export default () => {
            const [open, setOpen] = React.useState(false);

            return (
              <Modal.Root open={open} onOpenChange={setOpen}>
                <Modal.Trigger>
                  <Button>Edit Release</Button>
                </Modal.Trigger>
                <Modal.Content>
                  <Modal.Header>
                    <Modal.Title>Add to release</Modal.Title>
                  </Modal.Header>
                  <form
                    onSubmit={(event) => {
                      wait().then(() => {
                        setOpen(false);
                      });
                      event.preventDefault();
                    }}
                  >
                    <Modal.Body>{/* inputs */}</Modal.Body>
                    <Modal.Footer>
                      <Button type="submit">Confirm</Button>
                    </Modal.Footer>
                  </form>
                </Modal.Content>
              </Modal.Root>
            );
          };
        `}}},render:({onOpenAutoFocus:t,onCloseAutoFocus:o,onEscapeKeyDown:a,onPointerDownOutside:i,onInteractOutside:m,...p})=>{const[d,l]=n.useState(!1),[O,B]=n.useState(!1),[A,X]=n.useState(!0);return e.jsxs(M,{...p,open:d,onOpenChange:l,children:[e.jsx(C,{children:e.jsx(s,{children:"Edit Release"})}),e.jsxs(j,{onOpenAutoFocus:t,onCloseAutoFocus:o,onEscapeKeyDown:a,onPointerDownOutside:i,onInteractOutside:m,children:[e.jsx(T,{children:e.jsx(v,{children:"Add to release"})}),e.jsxs("form",{onSubmit:J=>{B(!0),xe().then(()=>{l(!1),B(!1)}),J.preventDefault()},children:[e.jsx(R,{children:e.jsxs(U,{gridCols:2,gap:6,children:[e.jsx(r,{xs:2,children:e.jsxs(u,{name:"name",required:!0,children:[e.jsx(h,{children:"Name"}),e.jsx(W,{})]})}),e.jsx(r,{xs:2,children:e.jsx(V,{checked:A,onCheckedChange:X,name:"schedule",value:"true",children:"Schedule release"})}),A?e.jsxs(e.Fragment,{children:[e.jsx(r,{xs:1,children:e.jsxs(u,{name:"date",required:!0,children:[e.jsx(h,{children:"Date"}),e.jsx(Y,{})]})}),e.jsx(r,{xs:1,children:e.jsxs(u,{name:"time",required:!0,children:[e.jsx(h,{children:"time"}),e.jsx(Q,{})]})})]}):null]})}),e.jsxs(S,{children:[e.jsx(y,{children:e.jsx(s,{variant:"tertiary",children:"Cancel"})}),e.jsx(s,{loading:O,type:"submit",children:"Confirm"})]})]})]})]})},name:"close on success"},be=["In the winter of 2020, on a sunny and crisp morning I bumped into an old acquaintance of mine at the tree lined banks of the river Thames. Smiling at the world comfortably with hands in pockets, the man seeming without a care in the world.","On noticing me he exclaimed, and led his friend placing an arm over the man's shoulder over to me, already singing my praises and opening his greetings with a well meaning and personally insightful question.","The man, of course, was Ted Lasso. A Kansas-born American football coach turned UK football coaching phenomenon.","Few of my interviewees would have such a reaction seeing the outside of their working lives, knowing that I could ask questions that would make them uncomfortable or that they wouldn't know how to answer. As well as knowing that what they chose to share with me was in confidence but could be shared with all of those that read my articles. However for Ted that personally(?) never made an impact. For Ted, everyone that comes into his life is a personal friend, no matter the circumstances of meeting. This attitude, it becomes clear, and I truly hope you will understand the power of its effect by the time you finish reading this book, contributed not only to Ted's personal life but the sporting capabilities of the AFC's Richmond team.","When I first met Ted the situation(?) was different. Humiliation would best describe Ted's first...shockwaves through the community as they knew that they would be modifying as a result when they unabashedly...for the effect of that football...No one could have guessed what that new impact would eventually be."],x={parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:I`
          <Modal.Root>
            <Modal.Trigger>
              <Button>More info</Button>
            </Modal.Trigger>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>An excerpt</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <P>In the winter of 2020, on a sunny and crisp morning I bumped into an old acquaintance of mine at the tree lined banks of the river Thames. Smiling at the world comfortably with hands in pockets, the man seeming without a care in the world.</P>
                <P>On noticing me he exclaimed, and led his friend placing an arm over the man's shoulder over to me, already singing my praises and opening his greetings with a well meaning and personally insightful question.</P>
                <P>The man, of course, was Ted Lasso. A Kansas-born American football coach turned UK football coaching phenomenon.</P>
                <P>Few of my interviewees would have such a reaction seeing the outside of their working lives, knowing that I could ask questions that would make them uncomfortable or that they wouldn't know how to answer. As well as knowing that what they chose to share with me was in confidence but could be shared with all of those that read my articles. However for Ted that personally(?) never made an impact. For Ted, everyone that comes into his life is a personal friend, no matter the circumstances of meeting. This attitude, it becomes clear, and I truly hope you will understand the power of its effect by the time you finish reading this book, contributed not only to Ted's personal life but the sporting capabilities of the AFC's Richmond team.</P>
                <P>When I first met Ted the situation(?) was different. Humiliation would best describe Ted's first...shockwaves through the community as they knew that they would be modifying as a result when they unabashedly...for the effect of that football...No one could have guessed what that new impact would eventually be.</P>
              </Modal.Body>
              <Modal.Footer justifyContent="flex-end">
                <Modal.Close>
                  <Button>Confirm</Button>
                </Modal.Close>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Root>
        `}}},render:({onOpenAutoFocus:t,onCloseAutoFocus:o,onEscapeKeyDown:a,onPointerDownOutside:i,onInteractOutside:m,...p})=>e.jsxs(M,{...p,children:[e.jsx(C,{children:e.jsx(s,{children:"More info"})}),e.jsxs(j,{onOpenAutoFocus:t,onCloseAutoFocus:o,onEscapeKeyDown:a,onPointerDownOutside:i,onInteractOutside:m,children:[e.jsx(T,{children:e.jsx(v,{children:"An excerpt"})}),e.jsx(R,{children:be.map((d,l)=>e.jsx(te,{children:d},l))}),e.jsx(S,{justifyContent:"flex-end",children:e.jsx(y,{children:e.jsx(s,{children:"Confirm"})})})]})]}),name:"scrolling"};var $,P,D;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'base'
} satisfies Story`,...(D=(P=f.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var _,q,H;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  },
  name: 'default open'
} satisfies Story`,...(H=(q=g.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var E,L,N;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    docs: {
      source: {
        code: outdent\`
          const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

          export default () => {
            const [open, setOpen] = React.useState(false);

            return (
              <Modal.Root open={open} onOpenChange={setOpen}>
                <Modal.Trigger>
                  <Button>Edit Release</Button>
                </Modal.Trigger>
                <Modal.Content>
                  <Modal.Header>
                    <Modal.Title>Add to release</Modal.Title>
                  </Modal.Header>
                  <form
                    onSubmit={(event) => {
                      wait().then(() => {
                        setOpen(false);
                      });
                      event.preventDefault();
                    }}
                  >
                    <Modal.Body>{/* inputs */}</Modal.Body>
                    <Modal.Footer>
                      <Button type="submit">Confirm</Button>
                    </Modal.Footer>
                  </form>
                </Modal.Content>
              </Modal.Root>
            );
          };
        \`
      }
    }
  },
  render: ({
    onOpenAutoFocus,
    onCloseAutoFocus,
    onEscapeKeyDown,
    onPointerDownOutside,
    onInteractOutside,
    ...args
  }) => {
    const [open, setOpen] = React.useState(false);
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [scheduleRelease, setScheduleRelease] = React.useState<CheckboxProps['checked']>(true);
    return <Modal.Root {...args} open={open} onOpenChange={setOpen}>\r
        <Modal.Trigger>\r
          <Button>Edit Release</Button>\r
        </Modal.Trigger>\r
        <Modal.Content onOpenAutoFocus={onOpenAutoFocus} onCloseAutoFocus={onCloseAutoFocus} onEscapeKeyDown={onEscapeKeyDown} onPointerDownOutside={onPointerDownOutside} onInteractOutside={onInteractOutside}>\r
          <Modal.Header>\r
            <Modal.Title>Add to release</Modal.Title>\r
          </Modal.Header>\r
          <form onSubmit={event => {
          setIsSubmitting(true);
          wait().then(() => {
            setOpen(false);
            setIsSubmitting(false);
          });
          event.preventDefault();
        }}>\r
            <Modal.Body>\r
              <Grid.Root gridCols={2} gap={6}>\r
                <Grid.Item xs={2}>\r
                  <Field.Root name="name" required>\r
                    <Field.Label>Name</Field.Label>\r
                    <Field.Input />\r
                  </Field.Root>\r
                </Grid.Item>\r
                <Grid.Item xs={2}>\r
                  <Checkbox checked={scheduleRelease} onCheckedChange={setScheduleRelease} name="schedule" value="true">\r
                    Schedule release\r
                  </Checkbox>\r
                </Grid.Item>\r
                {scheduleRelease ? <>\r
                    <Grid.Item xs={1}>\r
                      <Field.Root name="date" required>\r
                        <Field.Label>Date</Field.Label>\r
                        <DatePicker />\r
                      </Field.Root>\r
                    </Grid.Item>\r
                    <Grid.Item xs={1}>\r
                      <Field.Root name="time" required>\r
                        <Field.Label>time</Field.Label>\r
                        <TimePicker />\r
                      </Field.Root>\r
                    </Grid.Item>\r
                  </> : null}\r
              </Grid.Root>\r
            </Modal.Body>\r
            <Modal.Footer>\r
              <Modal.Close>\r
                <Button variant="tertiary">Cancel</Button>\r
              </Modal.Close>\r
              <Button loading={isSubmitting} type="submit">\r
                Confirm\r
              </Button>\r
            </Modal.Footer>\r
          </form>\r
        </Modal.Content>\r
      </Modal.Root>;
  },
  name: 'close on success'
} satisfies Story`,...(N=(L=w.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var K,G,z;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    docs: {
      source: {
        code: outdent\`
          <Modal.Root>
            <Modal.Trigger>
              <Button>More info</Button>
            </Modal.Trigger>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>An excerpt</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <P>In the winter of 2020, on a sunny and crisp morning I bumped into an old acquaintance of mine at the tree lined banks of the river Thames. Smiling at the world comfortably with hands in pockets, the man seeming without a care in the world.</P>
                <P>On noticing me he exclaimed, and led his friend placing an arm over the man's shoulder over to me, already singing my praises and opening his greetings with a well meaning and personally insightful question.</P>
                <P>The man, of course, was Ted Lasso. A Kansas-born American football coach turned UK football coaching phenomenon.</P>
                <P>Few of my interviewees would have such a reaction seeing the outside of their working lives, knowing that I could ask questions that would make them uncomfortable or that they wouldn't know how to answer. As well as knowing that what they chose to share with me was in confidence but could be shared with all of those that read my articles. However for Ted that personally(?) never made an impact. For Ted, everyone that comes into his life is a personal friend, no matter the circumstances of meeting. This attitude, it becomes clear, and I truly hope you will understand the power of its effect by the time you finish reading this book, contributed not only to Ted's personal life but the sporting capabilities of the AFC's Richmond team.</P>
                <P>When I first met Ted the situation(?) was different. Humiliation would best describe Ted's first...shockwaves through the community as they knew that they would be modifying as a result when they unabashedly...for the effect of that football...No one could have guessed what that new impact would eventually be.</P>
              </Modal.Body>
              <Modal.Footer justifyContent="flex-end">
                <Modal.Close>
                  <Button>Confirm</Button>
                </Modal.Close>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Root>
        \`
      }
    }
  },
  render: ({
    onOpenAutoFocus,
    onCloseAutoFocus,
    onEscapeKeyDown,
    onPointerDownOutside,
    onInteractOutside,
    ...args
  }) => {
    return <Modal.Root {...args}>\r
        <Modal.Trigger>\r
          <Button>More info</Button>\r
        </Modal.Trigger>\r
        <Modal.Content onOpenAutoFocus={onOpenAutoFocus} onCloseAutoFocus={onCloseAutoFocus} onEscapeKeyDown={onEscapeKeyDown} onPointerDownOutside={onPointerDownOutside} onInteractOutside={onInteractOutside}>\r
          <Modal.Header>\r
            <Modal.Title>An excerpt</Modal.Title>\r
          </Modal.Header>\r
          <Modal.Body>\r
            {DATA.map((datum, index) => <P key={index}>{datum}</P>)}\r
          </Modal.Body>\r
          <Modal.Footer justifyContent="flex-end">\r
            <Modal.Close>\r
              <Button>Confirm</Button>\r
            </Modal.Close>\r
          </Modal.Footer>\r
        </Modal.Content>\r
      </Modal.Root>;
  },
  name: 'scrolling'
} satisfies Story`,...(z=(G=x.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};const ye=["Base","DefaultOpen","CloseOnSuccess","Scrolling"],Be=Object.freeze(Object.defineProperty({__proto__:null,Base:f,CloseOnSuccess:w,DefaultOpen:g,Scrolling:x,__namedExportsOrder:ye,default:we},Symbol.toStringTag,{value:"Module"}));export{f as B,w as C,T as H,Be as M,x as S};
