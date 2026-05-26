import{r as i,j as e,c as d,aE as U,aF as X,F as x,T as Y,p as I,aG as Z,N as q,s as R,P as D,aH as L}from"./iframe-_cKE9r89.js";import{d as N}from"./index-BxBVU389.js";import{u as ee}from"./useId-BMWvqHJO.js";import{K as A}from"./keyboardKeys-DO3xpnD3.js";import{A as E}from"./AccessibleIcon-CYyZOlqW.js";import{T as J,I as s}from"./IconButton-Uvk00hK3.js";import{R as le,L as te,H as re,E as se}from"./Field-Cwhta1v_.js";const ne=I(d)`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,oe=I(x)`
  grid-area: slides;
`,W=I(d)`
  grid-area: ${({$area:l})=>l};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:l})=>l.colors.neutral900};
  }
`,Q=i.forwardRef(({actions:l,children:r,label:n,nextLabel:o,onNext:t,onPrevious:C,previousLabel:k,secondaryLabel:g,selectedSlide:B,...v},w)=>{const a=i.useRef(null),u=i.useRef(null),f=i.Children.map(r,(c,P)=>i.cloneElement(c,{selected:P===B})),T=c=>{switch(c.key){case A.RIGHT:{c.preventDefault(),u!=null&&u.current&&u.current.focus(),t&&t();break}case A.LEFT:{c.preventDefault(),a!=null&&a.current&&a.current.focus(),C&&C();break}}};return e.jsx(d,{ref:w,...v,onKeyDown:T,children:e.jsxs(d,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100",children:[e.jsxs(ne,{tag:"section","aria-roledescription":"carousel","aria-label":n,display:"grid",position:"relative",children:[f&&f.length>1&&e.jsxs(e.Fragment,{children:[e.jsx(W,{tag:"button",onClick:C,$area:"startAction",ref:a,type:"button",children:e.jsx(E,{label:k,children:e.jsx(U,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})}),e.jsx(W,{tag:"button",onClick:t,$area:"endAction",ref:u,type:"button",children:e.jsx(E,{label:o,children:e.jsx(X,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})})]}),e.jsx(oe,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%",overflow:"hidden",children:f}),l]}),g&&e.jsx(d,{paddingTop:2,paddingLeft:4,paddingRight:4,children:e.jsx(J,{label:g,children:e.jsx(x,{justifyContent:"center",children:e.jsx(Y,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:g})})})})]})})});Q.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!0,tsType:{name:"string"},description:""},nextLabel:{required:!0,tsType:{name:"string"},description:""},onNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrevious:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},previousLabel:{required:!0,tsType:{name:"string"},description:""},secondaryLabel:{required:!1,tsType:{name:"string"},description:""},selectedSlide:{required:!0,tsType:{name:"number"},description:""}}};const S=i.forwardRef(({actions:l,children:r,error:n,hint:o,label:t,labelAction:C,nextLabel:k,onNext:g,onPrevious:B,previousLabel:v,required:w,secondaryLabel:a,selectedSlide:u,id:f,...T},c)=>{const P=ee(f);return e.jsx(le,{hint:o,error:n,id:P,required:w,children:e.jsxs(x,{direction:"column",alignItems:"stretch",gap:1,children:[t&&e.jsx(te,{action:C,children:t}),e.jsx(Q,{ref:c,actions:l,label:t,nextLabel:k,onNext:g,onPrevious:B,previousLabel:v,secondaryLabel:a,selectedSlide:u,id:P,...T,children:r}),e.jsx(re,{}),e.jsx(se,{})]})})});S.__docgenInfo={description:"",methods:[],displayName:"CarouselInput",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!0,tsType:{name:"string"},description:""},nextLabel:{required:!0,tsType:{name:"string"},description:""},onNext:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPrevious:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},previousLabel:{required:!0,tsType:{name:"string"},description:""},secondaryLabel:{required:!1,tsType:{name:"string"},description:""},selectedSlide:{required:!0,tsType:{name:"number"},description:""},labelAction:{required:!1,tsType:{name:"Field.LabelProps['action']",raw:"Field.LabelProps['action']"},description:""}},composes:["Pick"]};const j=({horizontal:l=!0,...r})=>e.jsx(x,{justifyContent:"center",direction:l?"row":"column",alignItems:l?"center":"stretch",position:"absolute",width:"100%",bottom:1,gap:1,...r});j.__docgenInfo={description:"",methods:[],displayName:"CarouselActions",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['alignItems']",raw:"CSSProperties['alignItems']"}}]}},{name:"CSSProperties['alignItems']",raw:"CSSProperties['alignItems']"}]},description:""},justifyContent:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['justifyContent']",raw:"CSSProperties['justifyContent']"}}]}},{name:"CSSProperties['justifyContent']",raw:"CSSProperties['justifyContent']"}]},description:""},wrap:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexWrap']",raw:"CSSProperties['flexWrap']"}}]}},{name:"CSSProperties['flexWrap']",raw:"CSSProperties['flexWrap']"}]},description:""},direction:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}}]}},{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}]},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},horizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const _=I(d)`
  ${Z}
`,p=l=>{const[r,n]=i.useState(!1),o=()=>{n(!0)};return r?e.jsx(J,{label:l.alt??"",children:e.jsx(_,{tag:"img",height:"100%",maxWidth:"100%",...l})}):e.jsx(_,{tag:"img",height:"100%",maxWidth:"100%",...l,onError:o})};p.__docgenInfo={description:"",methods:[],displayName:"CarouselImage",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alt:{required:!0,tsType:{name:"string"},description:""},src:{required:!0,tsType:{name:"string"},description:""}}};const ie=I(x)`
  display: ${({$selected:l})=>l?"flex":"none"};
`,m=({label:l,children:r,selected:n=!1,...o})=>e.jsx(ie,{$selected:n,alignItems:"center",role:"group","aria-roledescription":"slide","aria-label":l,justifyContent:"center",height:"124px",width:"100%",...o,children:r});m.__docgenInfo={description:"",methods:[],displayName:"CarouselSlide",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['alignItems']",raw:"CSSProperties['alignItems']"}}]}},{name:"CSSProperties['alignItems']",raw:"CSSProperties['alignItems']"}]},description:""},justifyContent:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['justifyContent']",raw:"CSSProperties['justifyContent']"}}]}},{name:"CSSProperties['justifyContent']",raw:"CSSProperties['justifyContent']"}]},description:""},wrap:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexWrap']",raw:"CSSProperties['flexWrap']"}}]}},{name:"CSSProperties['flexWrap']",raw:"CSSProperties['flexWrap']"}]},description:""},direction:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}}]}},{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}]},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!0,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ae={title:"Components/CarouselInput",component:S},b={render:()=>{const[l,r]=i.useState(0),n=()=>{r(t=>t<2?t+1:0)},o=()=>{r(t=>t>0?t-1:2)};return e.jsxs(S,{label:`Carousel of numbers (${l+1}/3)`,selectedSlide:l,secondaryLabel:"/packages/design-system/src/Carousel/story-assets/first.jpg",previousLabel:"Previous slide",nextLabel:"Next slide",onNext:n,onPrevious:o,hint:"Description line",actions:e.jsxs(j,{children:[e.jsx(s,{onClick:()=>console.log("edit"),label:"Edit",id:"edit",children:e.jsx(q,{})}),e.jsx(s,{onClick:()=>console.log("Create"),label:"Create",children:e.jsx(R,{})}),e.jsx(s,{onClick:()=>console.log("Delete"),label:"Delete",children:e.jsx(D,{})}),e.jsx(s,{onClick:()=>console.log("Publish"),label:"Publish",children:e.jsx(L,{})})]}),style:{width:"242px"},children:[e.jsx(m,{label:"1 of 3 slides",children:e.jsx(p,{src:"/stories/carousel/first.jpg",alt:"First"})}),e.jsx(m,{label:"2 of 3 slides",children:e.jsx(p,{src:"/stories/carousel/second.png",alt:"second"})}),e.jsx(m,{label:"3 of 3 slides",children:e.jsx(p,{src:"/stories/carousel/third.png",alt:"third"})})]})},parameters:{docs:{source:{code:N`
        <CarouselInput
          label="Carousel of numbers (1/3)"
          selectedSlide={1}
          secondaryLabel="first.jpg"
          previousLabel="Previous slide"
          nextLabel="Next slide"
          onNext={() => console.log('next')}
          onPrevious={() => console.log('previous')}
          hint="Description line"
          actions={
            <CarouselActions>
              <IconButton onClick={() => console.log('edit')} label="Edit" id="edit">
                <Pencil />
              </IconButton>
              <IconButton onClick={() => console.log('Create')} label="Create">
                <Plus />
              </IconButton>
              <IconButton onClick={() => console.log('Delete')} label="Delete">
                <Trash />
              </IconButton>
              <IconButton onClick={() => console.log('Publish')} label="Publish">
                <Play />
              </IconButton>
            </CarouselActions>
          }
          style={{
            width: '242px',
          }}
        >
          <CarouselSlide label="1 of 3 slides">
            <CarouselImage src={'/stories/carousel/first.jpg'} alt="First" />
          </CarouselSlide>
          <CarouselSlide label="2 of 3 slides">
            <CarouselImage src={'/stories/carousel/second.png'} alt="second" />
          </CarouselSlide>
          <CarouselSlide label="3 of 3 slides">
            <CarouselImage src={'/stories/carousel/third.png'} alt="third" />
          </CarouselSlide>
        </CarouselInput>
        `}}},name:"base"},h={render:()=>e.jsx(S,{label:"Carousel of numbers 1/1)",selectedSlide:0,previousLabel:"Previous slide",nextLabel:"Next slide",hint:"Description line",actions:e.jsxs(j,{children:[e.jsx(s,{onClick:()=>console.log("edit"),label:"Edit",id:"edit",children:e.jsx(q,{})}),e.jsx(s,{onClick:()=>console.log("Create"),label:"Create",children:e.jsx(R,{})}),e.jsx(s,{onClick:()=>console.log("Delete"),label:"Delete",children:e.jsx(D,{})}),e.jsx(s,{onClick:()=>console.log("Publish"),label:"Publish",children:e.jsx(L,{})})]}),style:{width:"242px"},children:e.jsx(m,{label:"1 of 1 slides",children:e.jsx(p,{src:"/stories/carousel/first.jpg",alt:"First"})})}),parameters:{docs:{source:{code:N`
        <CarouselInput
          label="Carousel of numbers 1/1)"
          selectedSlide={0}
          previousLabel="Previous slide"
          nextLabel="Next slide"
          hint="Description line"
          actions={
            <CarouselActions>
              <IconButton onClick={() => console.log("edit")} label="Edit" id="edit">
                <Pencil />
              </IconButton>
              <IconButton onClick={() => console.log("Create")} label="Create">
                <Plus />
              </IconButton>
              <IconButton onClick={() => console.log("Delete")} label="Delete">
                <Trash />
              </IconButton>
              <IconButton onClick={() => console.log("Publish")} label="Publish">
                <Play />
              </IconButton>
            </CarouselActions>
          }
          style={{
            width: "242px",
          }}
        >
          <CarouselSlide label="1 of 1 slides">
            <CarouselImage src="first.jpg" alt="First" />
          </CarouselSlide>
        </CarouselInput>
        `}}},name:"one slide only"},y={render:()=>e.jsx(S,{label:"Carousel of numbers 1/1)",selectedSlide:0,previousLabel:"Previous slide",nextLabel:"Next slide",hint:"Description line",actions:e.jsxs(j,{children:[e.jsx(s,{onClick:()=>console.log("edit"),label:"Edit",id:"edit",children:e.jsx(q,{})}),e.jsx(s,{onClick:()=>console.log("Create"),label:"Create",children:e.jsx(R,{})}),e.jsx(s,{onClick:()=>console.log("Delete"),label:"Delete",children:e.jsx(D,{})}),e.jsx(s,{onClick:()=>console.log("Publish"),label:"Publish",children:e.jsx(L,{})})]}),style:{width:"242px"},children:e.jsx(m,{label:"1 of 1 slides",children:e.jsx(p,{src:"asdf",alt:"my image"})})}),parameters:{docs:{source:{code:N`
        <CarouselInput
          label="Carousel of numbers 1/1)"
          selectedSlide={0}
          previousLabel="Previous slide"
          nextLabel="Next slide"
          hint="Description line"
          actions={
            <CarouselActions>
              <IconButton onClick={() => console.log("edit")} label="Edit" id="edit">
                <Pencil />
              </IconButton>
              <IconButton onClick={() => console.log("Create")} label="Create">
                <Plus />
              </IconButton>
              <IconButton onClick={() => console.log("Delete")} label="Delete">
                <Trash />
              </IconButton>
              <IconButton onClick={() => console.log("Publish")} label="Publish">
                <Play />
              </IconButton>
            </CarouselActions>
          }
          style={{
            width: "242px",
          }}
        >
          <CarouselSlide label="1 of 1 slides">
            <CarouselImage src="asdf" alt="my image" />
          </CarouselSlide>
        </CarouselInput>
        `}}},name:"broken-asset"};var F,O,$;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const handleNext = () => {
      setSelectedIndex(current => current < 2 ? current + 1 : 0);
    };
    const handlePrevious = () => {
      setSelectedIndex(current => current > 0 ? current - 1 : 2);
    };
    return <CarouselInput label={\`Carousel of numbers (\${selectedIndex + 1}/3)\`} selectedSlide={selectedIndex} secondaryLabel="/packages/design-system/src/Carousel/story-assets/first.jpg" previousLabel="Previous slide" nextLabel="Next slide" onNext={handleNext} onPrevious={handlePrevious} hint="Description line" actions={<CarouselActions>\r
            <IconButton onClick={() => console.log('edit')} label="Edit" id="edit">\r
              <Pencil />\r
            </IconButton>\r
            <IconButton onClick={() => console.log('Create')} label="Create">\r
              <Plus />\r
            </IconButton>\r
            <IconButton onClick={() => console.log('Delete')} label="Delete">\r
              <Trash />\r
            </IconButton>\r
            <IconButton onClick={() => console.log('Publish')} label="Publish">\r
              <Play />\r
            </IconButton>\r
          </CarouselActions>} style={{
      width: '242px'
    }}>\r
        <CarouselSlide label="1 of 3 slides">\r
          <CarouselImage src={'/stories/carousel/first.jpg'} alt="First" />\r
        </CarouselSlide>\r
        <CarouselSlide label="2 of 3 slides">\r
          <CarouselImage src={'/stories/carousel/second.png'} alt="second" />\r
        </CarouselSlide>\r
        <CarouselSlide label="3 of 3 slides">\r
          <CarouselImage src={'/stories/carousel/third.png'} alt="third" />\r
        </CarouselSlide>\r
      </CarouselInput>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <CarouselInput
          label="Carousel of numbers (1/3)"
          selectedSlide={1}
          secondaryLabel="first.jpg"
          previousLabel="Previous slide"
          nextLabel="Next slide"
          onNext={() => console.log('next')}
          onPrevious={() => console.log('previous')}
          hint="Description line"
          actions={
            <CarouselActions>
              <IconButton onClick={() => console.log('edit')} label="Edit" id="edit">
                <Pencil />
              </IconButton>
              <IconButton onClick={() => console.log('Create')} label="Create">
                <Plus />
              </IconButton>
              <IconButton onClick={() => console.log('Delete')} label="Delete">
                <Trash />
              </IconButton>
              <IconButton onClick={() => console.log('Publish')} label="Publish">
                <Play />
              </IconButton>
            </CarouselActions>
          }
          style={{
            width: '242px',
          }}
        >
          <CarouselSlide label="1 of 3 slides">
            <CarouselImage src={'/stories/carousel/first.jpg'} alt="First" />
          </CarouselSlide>
          <CarouselSlide label="2 of 3 slides">
            <CarouselImage src={'/stories/carousel/second.png'} alt="second" />
          </CarouselSlide>
          <CarouselSlide label="3 of 3 slides">
            <CarouselImage src={'/stories/carousel/third.png'} alt="third" />
          </CarouselSlide>
        </CarouselInput>
        \`
      }
    }
  },
  name: 'base'
} satisfies Story`,...($=(O=b.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var K,H,G;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    return <CarouselInput label="Carousel of numbers 1/1)" selectedSlide={0} previousLabel="Previous slide" nextLabel="Next slide" hint="Description line" actions={<CarouselActions>\r
            <IconButton onClick={() => console.log('edit')} label="Edit" id="edit">\r
              <Pencil />\r
            </IconButton>\r
            <IconButton onClick={() => console.log('Create')} label="Create">\r
              <Plus />\r
            </IconButton>\r
            <IconButton onClick={() => console.log('Delete')} label="Delete">\r
              <Trash />\r
            </IconButton>\r
            <IconButton onClick={() => console.log('Publish')} label="Publish">\r
              <Play />\r
            </IconButton>\r
          </CarouselActions>} style={{
      width: '242px'
    }}>\r
        <CarouselSlide label="1 of 1 slides">\r
          <CarouselImage src={'/stories/carousel/first.jpg'} alt="First" />\r
        </CarouselSlide>\r
      </CarouselInput>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <CarouselInput
          label="Carousel of numbers 1/1)"
          selectedSlide={0}
          previousLabel="Previous slide"
          nextLabel="Next slide"
          hint="Description line"
          actions={
            <CarouselActions>
              <IconButton onClick={() => console.log("edit")} label="Edit" id="edit">
                <Pencil />
              </IconButton>
              <IconButton onClick={() => console.log("Create")} label="Create">
                <Plus />
              </IconButton>
              <IconButton onClick={() => console.log("Delete")} label="Delete">
                <Trash />
              </IconButton>
              <IconButton onClick={() => console.log("Publish")} label="Publish">
                <Play />
              </IconButton>
            </CarouselActions>
          }
          style={{
            width: "242px",
          }}
        >
          <CarouselSlide label="1 of 1 slides">
            <CarouselImage src="first.jpg" alt="First" />
          </CarouselSlide>
        </CarouselInput>
        \`
      }
    }
  },
  name: 'one slide only'
} satisfies Story`,...(G=(H=h.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var V,z,M;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    return <CarouselInput label="Carousel of numbers 1/1)" selectedSlide={0} previousLabel="Previous slide" nextLabel="Next slide" hint="Description line" actions={<CarouselActions>\r
            <IconButton onClick={() => console.log('edit')} label="Edit" id="edit">\r
              <Pencil />\r
            </IconButton>\r
            <IconButton onClick={() => console.log('Create')} label="Create">\r
              <Plus />\r
            </IconButton>\r
            <IconButton onClick={() => console.log('Delete')} label="Delete">\r
              <Trash />\r
            </IconButton>\r
            <IconButton onClick={() => console.log('Publish')} label="Publish">\r
              <Play />\r
            </IconButton>\r
          </CarouselActions>} style={{
      width: '242px'
    }}>\r
        <CarouselSlide label="1 of 1 slides">\r
          <CarouselImage src="asdf" alt="my image" />\r
        </CarouselSlide>\r
      </CarouselInput>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <CarouselInput
          label="Carousel of numbers 1/1)"
          selectedSlide={0}
          previousLabel="Previous slide"
          nextLabel="Next slide"
          hint="Description line"
          actions={
            <CarouselActions>
              <IconButton onClick={() => console.log("edit")} label="Edit" id="edit">
                <Pencil />
              </IconButton>
              <IconButton onClick={() => console.log("Create")} label="Create">
                <Plus />
              </IconButton>
              <IconButton onClick={() => console.log("Delete")} label="Delete">
                <Trash />
              </IconButton>
              <IconButton onClick={() => console.log("Publish")} label="Publish">
                <Play />
              </IconButton>
            </CarouselActions>
          }
          style={{
            width: "242px",
          }}
        >
          <CarouselSlide label="1 of 1 slides">
            <CarouselImage src="asdf" alt="my image" />
          </CarouselSlide>
        </CarouselInput>
        \`
      }
    }
  },
  name: 'broken-asset'
} satisfies Story`,...(M=(z=y.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};const ue=["Base","OneSlideOnly","BrokenAsset"],be=Object.freeze(Object.defineProperty({__proto__:null,Base:b,BrokenAsset:y,OneSlideOnly:h,__namedExportsOrder:ue,default:ae},Symbol.toStringTag,{value:"Module"}));export{b as B,be as C,h as O,y as a};
