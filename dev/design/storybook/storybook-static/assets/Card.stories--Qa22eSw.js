import{r as g,j as e,c as l,p as c,F as A,T as W,N as q}from"./iframe-_cKE9r89.js";import{d as x}from"./index-BxBVU389.js";import{u as ne}from"./useId-BMWvqHJO.js";import{C as de}from"./Checkbox-0fdbGYKe.js";import{B as oe}from"./Badge-D-JmP-9P.js";import{K as y}from"./keyboardKeys-DO3xpnD3.js";import{I as se}from"./IconButton-Uvk00hK3.js";const re=g.createContext({id:""}),ae=()=>g.useContext(re),o=g.forwardRef(({id:r,...a},i)=>{const d=ne(r),h=g.useMemo(()=>({id:d}),[d]);return e.jsx(re.Provider,{value:h,children:e.jsx(l,{ref:i,id:r,tabIndex:0,hasRadius:!0,background:"neutral0",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",shadow:"tableShadow",tag:"article","aria-labelledby":`${d}-title`,...a})})});o.__docgenInfo={description:"",methods:[],displayName:"Card",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const z=g.forwardRef(({position:r,...a},i)=>e.jsx(le,{ref:i,$position:r,...a,direction:"row",gap:2})),le=c(A)`
  position: absolute;
  top: ${({theme:r})=>r.spaces[3]};
  right: ${({$position:r,theme:a})=>{if(r==="end")return a.spaces[3]}};
  left: ${({$position:r,theme:a})=>{if(r==="start")return a.spaces[3]}};
`;z.__docgenInfo={description:"",methods:[],displayName:"CardActionImpl",props:{position:{required:!0,tsType:{name:"union",raw:"'end' | 'start'",elements:[{name:"literal",value:"'end'"},{name:"literal",value:"'start'"}]},description:""}}};const v=({size:r="M",children:a,...i})=>e.jsx(me,{$size:r,children:a||e.jsx(ce,{...i,"aria-hidden":!0})}),ce=c.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`,me=c.div`
  display: flex;
  justify-content: center;
  height: ${({$size:r})=>r==="S"?"8.8rem":"16.4rem"};
  width: 100%;
  background: repeating-conic-gradient(${({theme:r})=>r.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({theme:r})=>r.borderRadius};
  border-top-right-radius: ${({theme:r})=>r.borderRadius};
`;v.__docgenInfo={description:"",methods:[],displayName:"CardAsset",props:{size:{required:!1,tsType:{name:"union",raw:"'S' | 'M'",elements:[{name:"literal",value:"'S'"},{name:"literal",value:"'M'"}]},description:"@default 'M'",defaultValue:{value:"'M'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Ce=c.div`
  margin-left: auto;
  flex-shrink: 0;
`,pe=c(oe)`
  margin-left: ${({theme:r})=>r.spaces[1]};
`,m=r=>e.jsx(Ce,{children:e.jsx(pe,{...r})});m.__docgenInfo={description:"",methods:[],displayName:"CardBadge",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:`| {
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
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}}]}},{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}]},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"If `true`, it changes the `backgroundColor` to `primary200` and the `textColor` to `primary600`"},backgroundColor:{required:!1,tsType:{name:"union",raw:`| keyof DefaultTheme[T]
| React.CSSProperties[K]`,elements:[{name:"unknown"},{name:"ReactCSSProperties['background']",raw:"React.CSSProperties[K]"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'S' | 'M'",elements:[{name:"literal",value:"'S'"},{name:"literal",value:"'M'"}]},description:"@default 'M'"},textColor:{required:!1,tsType:{name:"union",raw:`| keyof DefaultTheme[T]
| React.CSSProperties[K]`,elements:[{name:"unknown"},{name:"ReactCSSProperties['color']",raw:"React.CSSProperties[K]"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'success' | 'primary' | 'danger' | 'warning' | 'neutral' | 'secondary' | 'alternative'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'alternative'"}]},description:"@default 'neutral'"}}};const C=r=>e.jsx(l,{paddingLeft:3,paddingRight:3,paddingTop:2,paddingBottom:2,children:e.jsx(A,{...r,alignItems:"flex-start"})});C.__docgenInfo={description:"",methods:[],displayName:"CardBody",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:`| {
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
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}}]}},{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}]},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""}}};const P=g.forwardRef((r,a)=>{const{id:i}=ae();return e.jsx(z,{position:"start",children:e.jsx(de,{"aria-labelledby":`${i}-title`,...r,ref:a})})});P.__docgenInfo={description:"",methods:[],displayName:"CardCheckbox"};const ue=c(l)`
  word-break: break-all;
`,p=({children:r,...a})=>e.jsx(ue,{...a,children:r});p.__docgenInfo={description:"",methods:[],displayName:"CardContent",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const fe=c(A)`
  border-bottom: 1px solid ${({theme:r})=>r.colors.neutral150};
`,N=r=>e.jsx(fe,{position:"relative",justifyContent:"center",...r});N.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:`| {
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
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}}]}},{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}]},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""}}};const R=({children:r,...a})=>e.jsx(l,{tag:"time",background:"neutral800",bottom:1,right:1,color:"neutral0",hasRadius:!0,position:"absolute",padding:1,...a,children:e.jsx(W,{variant:"pi",textColor:"neutral0",children:r})});R.__docgenInfo={description:"",methods:[],displayName:"CardTimer",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const u=r=>{const{id:a}=ae();return e.jsx(W,{variant:"pi",id:`${a}-title`,textColor:"neutral800",fontWeight:"bold",tag:"div",...r})},f=r=>e.jsx(W,{variant:"pi",...r,textColor:"neutral600",tag:"div"});u.__docgenInfo={description:"",methods:[],displayName:"CardTitle",props:{ellipsis:{required:!1,tsType:{name:"boolean"},description:""},textColor:{required:!1,tsType:{name:"unknown"},description:""},textDecoration:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['textDecoration']",raw:"CSSProperties['textDecoration']"}}]}},{name:"CSSProperties['textDecoration']",raw:"CSSProperties['textDecoration']"}]},description:""},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof TEXT_VARIANTS)[number]"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"CardSubtitle"};const te=({tagName:r,attributeName:a="",...i})=>{const d=()=>{const t=document.activeElement;return t?r?t.tagName.toLowerCase()===r:t.hasAttribute(a):!1},h=t=>r?t.querySelectorAll(r):t.querySelectorAll(`[${a}]`),ie=t=>{switch(t.key){case y.RIGHT:case y.DOWN:{if(d()){t.preventDefault();const s=document.activeElement,n=[...h(t.currentTarget)],S=n.findIndex(D=>D===s),I=S+1<n.length?S+1:0;n[I].focus()}break}case y.LEFT:case y.UP:{if(d()){t.preventDefault();const s=document.activeElement,n=[...h(t.currentTarget)],S=n.findIndex(D=>D===s),I=S-1>-1?S-1:n.length-1;n[I].focus()}break}case y.HOME:{d()&&(t.preventDefault(),h(t.currentTarget).item(0).focus());break}case y.END:{if(d()){t.preventDefault();const s=h(t.currentTarget);s.item(s.length-1).focus()}break}}};return e.jsx(l,{onKeyDown:ie,...i})};te.__docgenInfo={description:"",methods:[],displayName:"KeyboardNavigable",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},tagName:{required:!1,tsType:{name:"string"},description:""},attributeName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const he={title:"Components/Card",component:o},b={render:()=>e.jsxs(o,{style:{width:"240px"},id:"first",children:[e.jsxs(N,{children:[e.jsx(P,{}),e.jsx(z,{position:"end",children:e.jsx(se,{label:"Edit the thing",children:e.jsx(q,{})})}),e.jsx(v,{src:"/stories/carousel/first.jpg"}),e.jsx(R,{children:"05:39"})]}),e.jsxs(C,{children:[e.jsxs(p,{children:[e.jsx(u,{children:"File name fezof hzoeah fohzeofhozaehfohzeoafhzoaehfohzaeo fhozahf ozaehfoa"}),e.jsx(f,{children:"PNG - 400✕400"})]}),e.jsx(m,{children:"Doc"})]})]}),parameters:{docs:{source:{code:x`
        <Card
          style={{
            width: '240px',
          }}
          id="first"
        >
          <CardHeader>
            <CardCheckbox />
            <CardAction position="end">
              <IconButton label="Edit the thing">
                <Pencil />
              </IconButton>
            </CardAction>
            <CardAsset src={'/stories/carousel/first.jpg'} />
            <CardTimer>05:39</CardTimer>
          </CardHeader>
          <CardBody>
            <CardContent>
              <CardTitle>File name fezof hzoeah fohzeofhozaehfohzeoafhzoaehfohzaeo fhozahf ozaehfoa</CardTitle>
              <CardSubtitle>PNG - 400✕400</CardSubtitle>
            </CardContent>
            <CardBadge>Doc</CardBadge>
          </CardBody>
        </Card>
        `}}},name:"base"},T={render:()=>e.jsxs(o,{style:{width:"240px"},id:"second",children:[e.jsxs(N,{children:[e.jsx(P,{}),e.jsx(v,{src:"/stories/carousel/first.jpg"}),e.jsx(R,{children:"05:39"})]}),e.jsxs(C,{children:[e.jsxs(p,{children:[e.jsx(u,{children:"File name"}),e.jsx(f,{children:"PNG - 400✕400"})]}),e.jsx(m,{children:"Doc"})]})]}),parameters:{docs:{source:{code:x`
        <Card
          style={{
            width: '240px',
          }}
          id="second"
        >
          <CardHeader>
            <CardCheckbox />
            <CardAsset src={'/stories/carousel/first.jpg'} />
            <CardTimer>05:39</CardTimer>
          </CardHeader>
          <CardBody>
            <CardContent>
              <CardTitle>File name</CardTitle>
              <CardSubtitle>PNG - 400✕400</CardSubtitle>
            </CardContent>
            <CardBadge>Doc</CardBadge>
          </CardBody>
        </Card>
        `}}},name:"without asset action"},w={render:()=>e.jsxs(o,{style:{width:"240px"},id:"second",children:[e.jsxs(N,{children:[e.jsx(P,{}),e.jsx(v,{children:e.jsx(q,{"aria-label":"Just a picture"})}),e.jsx(R,{children:"05:39"})]}),e.jsxs(C,{children:[e.jsxs(p,{children:[e.jsx(u,{children:"File name"}),e.jsx(f,{children:"PNG - 400✕400"})]}),e.jsx(m,{children:"Doc"})]})]}),parameters:{docs:{source:{code:x`
        <Card
          style={{
            width: '240px',
          }}
          id="second"
        >
          <CardHeader>
            <CardCheckbox />
            <CardAsset>
              <Pencil aria-label="Just a picture" />
            </CardAsset>
            <CardTimer>05:39</CardTimer>
          </CardHeader>
          <CardBody>
            <CardContent>
              <CardTitle>File name</CardTitle>
              <CardSubtitle>PNG - 400✕400</CardSubtitle>
            </CardContent>
            <CardBadge>Doc</CardBadge>
          </CardBody>
        </Card>
        `}}},name:"with asset icon"},B={render:()=>e.jsxs(o,{style:{width:"240px"},id:"third",children:[e.jsxs(N,{children:[e.jsx(P,{}),e.jsx(v,{src:"/stories/carousel/first.jpg"})]}),e.jsxs(C,{children:[e.jsxs(p,{children:[e.jsx(u,{children:"File name"}),e.jsx(f,{children:"PNG - 400✕400"})]}),e.jsx(m,{children:"Doc"})]})]}),parameters:{docs:{source:{code:x`
        <Card
          style={{
            width: '240px',
          }}
          id="third"
        >
          <CardHeader>
            <CardCheckbox />
            <CardAsset src={'/stories/carousel/first.jpg'} />
          </CardHeader>
          <CardBody>
            <CardContent>
              <CardTitle>File name</CardTitle>
              <CardSubtitle>PNG - 400✕400</CardSubtitle>
            </CardContent>
            <CardBadge>Doc</CardBadge>
          </CardBody>
        </Card>
        `}}},name:"without asset action nor timer"},j={render:()=>e.jsx(o,{style:{width:"240px"},id:"fourth",children:e.jsxs(C,{children:[e.jsx(l,{padding:2,background:"primary100",children:e.jsx(q,{})}),e.jsxs(p,{paddingLeft:2,children:[e.jsx(u,{children:"File name"}),e.jsx(f,{children:"PNG - 400✕400"})]}),e.jsx(m,{children:"Doc"})]})}),parameters:{docs:{source:{code:x`
        <Card
          style={{
            width: '240px',
          }}
          id="fourth"
        >
          <CardBody>
            <Box padding={2} background="primary100">
              <Pencil />
            </Box>
            <CardContent paddingLeft={2}>
              <CardTitle>File name</CardTitle>
              <CardSubtitle>PNG - 400✕400</CardSubtitle>
            </CardContent>
            <CardBadge>Doc</CardBadge>
          </CardBody>
        </Card>
        `}}},name:"without asset"},k={render:()=>e.jsx(te,{tagName:"article",children:["first","second","third","fourth"].map(r=>e.jsx(o,{style:{width:"240px"},id:r,children:e.jsxs(C,{children:[e.jsx(l,{padding:2,background:"primary100",children:e.jsx(q,{})}),e.jsxs(p,{paddingLeft:2,children:[e.jsx(u,{children:"File name"}),e.jsx(f,{children:"PNG - 400✕400"})]}),e.jsx(m,{children:"Doc"})]})},r))}),parameters:{docs:{source:{code:x`
        import { KeyboardNavigable } from '@strapi/design-system';

        <KeyboardNavigable tagName="article">
          {['first', 'second', 'third', 'fourth'].map((id) => (
            <Card
              style={{
                width: '240px',
              }}
              id={id}
              key={id}
            >
              <CardBody>
                <Box padding={2} background="primary100">
                  <Pencil />
                </Box>
                <CardContent paddingLeft={2}>
                  <CardTitle>File name</CardTitle>
                  <CardSubtitle>PNG - 400✕400</CardSubtitle>
                </CardContent>
                <CardBadge>Doc</CardBadge>
              </CardBody>
            </Card>
          ))}
        </KeyboardNavigable>
        `}}},name:"keyboard navigable"};var _,H,F;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '240px'
  }} id="first">\r
      <CardHeader>\r
        <CardCheckbox />\r
        <CardAction position="end">\r
          <IconButton label="Edit the thing">\r
            <Pencil />\r
          </IconButton>\r
        </CardAction>\r
        <CardAsset src={'/stories/carousel/first.jpg'} />\r
        <CardTimer>05:39</CardTimer>\r
      </CardHeader>\r
      <CardBody>\r
        <CardContent>\r
          <CardTitle>File name fezof hzoeah fohzeofhozaehfohzeoafhzoaehfohzaeo fhozahf ozaehfoa</CardTitle>\r
          <CardSubtitle>PNG - 400✕400</CardSubtitle>\r
        </CardContent>\r
        <CardBadge>Doc</CardBadge>\r
      </CardBody>\r
    </Card>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Card
          style={{
            width: '240px',
          }}
          id="first"
        >
          <CardHeader>
            <CardCheckbox />
            <CardAction position="end">
              <IconButton label="Edit the thing">
                <Pencil />
              </IconButton>
            </CardAction>
            <CardAsset src={'/stories/carousel/first.jpg'} />
            <CardTimer>05:39</CardTimer>
          </CardHeader>
          <CardBody>
            <CardContent>
              <CardTitle>File name fezof hzoeah fohzeofhozaehfohzeoafhzoaehfohzaeo fhozahf ozaehfoa</CardTitle>
              <CardSubtitle>PNG - 400✕400</CardSubtitle>
            </CardContent>
            <CardBadge>Doc</CardBadge>
          </CardBody>
        </Card>
        \`
      }
    }
  },
  name: 'base'
} satisfies Story`,...(F=(H=b.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var G,E,K;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '240px'
  }} id="second">\r
      <CardHeader>\r
        <CardCheckbox />\r
        <CardAsset src={'/stories/carousel/first.jpg'} />\r
        <CardTimer>05:39</CardTimer>\r
      </CardHeader>\r
      <CardBody>\r
        <CardContent>\r
          <CardTitle>File name</CardTitle>\r
          <CardSubtitle>PNG - 400✕400</CardSubtitle>\r
        </CardContent>\r
        <CardBadge>Doc</CardBadge>\r
      </CardBody>\r
    </Card>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Card
          style={{
            width: '240px',
          }}
          id="second"
        >
          <CardHeader>
            <CardCheckbox />
            <CardAsset src={'/stories/carousel/first.jpg'} />
            <CardTimer>05:39</CardTimer>
          </CardHeader>
          <CardBody>
            <CardContent>
              <CardTitle>File name</CardTitle>
              <CardSubtitle>PNG - 400✕400</CardSubtitle>
            </CardContent>
            <CardBadge>Doc</CardBadge>
          </CardBody>
        </Card>
        \`
      }
    }
  },
  name: 'without asset action'
} satisfies Story`,...(K=(E=T.parameters)==null?void 0:E.docs)==null?void 0:K.source}}};var $,L,M;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '240px'
  }} id="second">\r
      <CardHeader>\r
        <CardCheckbox />\r
        <CardAsset>\r
          <Pencil aria-label="Just a picture" />\r
        </CardAsset>\r
        <CardTimer>05:39</CardTimer>\r
      </CardHeader>\r
      <CardBody>\r
        <CardContent>\r
          <CardTitle>File name</CardTitle>\r
          <CardSubtitle>PNG - 400✕400</CardSubtitle>\r
        </CardContent>\r
        <CardBadge>Doc</CardBadge>\r
      </CardBody>\r
    </Card>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Card
          style={{
            width: '240px',
          }}
          id="second"
        >
          <CardHeader>
            <CardCheckbox />
            <CardAsset>
              <Pencil aria-label="Just a picture" />
            </CardAsset>
            <CardTimer>05:39</CardTimer>
          </CardHeader>
          <CardBody>
            <CardContent>
              <CardTitle>File name</CardTitle>
              <CardSubtitle>PNG - 400✕400</CardSubtitle>
            </CardContent>
            <CardBadge>Doc</CardBadge>
          </CardBody>
        </Card>
        \`
      }
    }
  },
  name: 'with asset icon'
} satisfies Story`,...(M=(L=w.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var O,J,V;B.parameters={...B.parameters,docs:{...(O=B.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '240px'
  }} id="third">\r
      <CardHeader>\r
        <CardCheckbox />\r
        <CardAsset src={'/stories/carousel/first.jpg'} />\r
      </CardHeader>\r
      <CardBody>\r
        <CardContent>\r
          <CardTitle>File name</CardTitle>\r
          <CardSubtitle>PNG - 400✕400</CardSubtitle>\r
        </CardContent>\r
        <CardBadge>Doc</CardBadge>\r
      </CardBody>\r
    </Card>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Card
          style={{
            width: '240px',
          }}
          id="third"
        >
          <CardHeader>
            <CardCheckbox />
            <CardAsset src={'/stories/carousel/first.jpg'} />
          </CardHeader>
          <CardBody>
            <CardContent>
              <CardTitle>File name</CardTitle>
              <CardSubtitle>PNG - 400✕400</CardSubtitle>
            </CardContent>
            <CardBadge>Doc</CardBadge>
          </CardBody>
        </Card>
        \`
      }
    }
  },
  name: 'without asset action nor timer'
} satisfies Story`,...(V=(J=B.parameters)==null?void 0:J.docs)==null?void 0:V.source}}};var U,X,Q;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '240px'
  }} id="fourth">\r
      <CardBody>\r
        <Box padding={2} background="primary100">\r
          <Pencil />\r
        </Box>\r
        <CardContent paddingLeft={2}>\r
          <CardTitle>File name</CardTitle>\r
          <CardSubtitle>PNG - 400✕400</CardSubtitle>\r
        </CardContent>\r
        <CardBadge>Doc</CardBadge>\r
      </CardBody>\r
    </Card>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Card
          style={{
            width: '240px',
          }}
          id="fourth"
        >
          <CardBody>
            <Box padding={2} background="primary100">
              <Pencil />
            </Box>
            <CardContent paddingLeft={2}>
              <CardTitle>File name</CardTitle>
              <CardSubtitle>PNG - 400✕400</CardSubtitle>
            </CardContent>
            <CardBadge>Doc</CardBadge>
          </CardBody>
        </Card>
        \`
      }
    }
  },
  name: 'without asset'
} satisfies Story`,...(Q=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Y,Z,ee;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <KeyboardNavigable tagName="article">\r
      {['first', 'second', 'third', 'fourth'].map(id => <Card style={{
      width: '240px'
    }} id={id} key={id}>\r
          <CardBody>\r
            <Box padding={2} background="primary100">\r
              <Pencil />\r
            </Box>\r
            <CardContent paddingLeft={2}>\r
              <CardTitle>File name</CardTitle>\r
              <CardSubtitle>PNG - 400✕400</CardSubtitle>\r
            </CardContent>\r
            <CardBadge>Doc</CardBadge>\r
          </CardBody>\r
        </Card>)}\r
    </KeyboardNavigable>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
        import { KeyboardNavigable } from '@strapi/design-system';

        <KeyboardNavigable tagName="article">
          {['first', 'second', 'third', 'fourth'].map((id) => (
            <Card
              style={{
                width: '240px',
              }}
              id={id}
              key={id}
            >
              <CardBody>
                <Box padding={2} background="primary100">
                  <Pencil />
                </Box>
                <CardContent paddingLeft={2}>
                  <CardTitle>File name</CardTitle>
                  <CardSubtitle>PNG - 400✕400</CardSubtitle>
                </CardContent>
                <CardBadge>Doc</CardBadge>
              </CardBody>
            </Card>
          ))}
        </KeyboardNavigable>
        \`
      }
    }
  },
  name: 'keyboard navigable'
} satisfies Story`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const ye=["Base","WithoutAssetAction","WithAssetIcon","WithoutAssetActionNorTimer","WithoutAsset","Keyboard"],je=Object.freeze(Object.defineProperty({__proto__:null,Base:b,Keyboard:k,WithAssetIcon:w,WithoutAsset:j,WithoutAssetAction:T,WithoutAssetActionNorTimer:B,__namedExportsOrder:ye,default:he},Symbol.toStringTag,{value:"Module"}));export{b as B,je as C,k as K,T as W,w as a,B as b,j as c};
