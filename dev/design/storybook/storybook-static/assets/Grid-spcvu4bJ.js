import{f as t,j as s,h as m,p as l,c as p,F as u}from"./iframe-_cKE9r89.js";const d=t((e,a)=>{const{gap:r=0,gridCols:n=12,...i}=e;return s.jsx(f,{ref:a,$gap:r,$gridCols:n,...i})}),f=l(p)`
  display: grid;
  grid-template-columns: repeat(${({$gridCols:e})=>e}, 1fr);
  ${({theme:e,$gap:a})=>m({gap:a},e)}
`,c=t(({col:e,s:a,xs:r,m:n,...i},o)=>s.jsx(g,{ref:o,$col:e,$s:a,$xs:r,$m:n,...i})),g=l(u)`
  grid-column: span ${({$xs:e,$col:a})=>e??a??12};
  max-width: 100%;

  ${({theme:e})=>e.breakpoints.small} {
    grid-column: span ${({$s:e,$xs:a,$col:r})=>e??a??r??12};
  }

  ${({theme:e})=>e.breakpoints.medium} {
    grid-column: span ${({$m:e,$s:a,$xs:r,$col:n})=>e??a??r??n??12};
  }

  ${({theme:e})=>e.breakpoints.large} {
    grid-column: span ${({$col:e,$m:a,$s:r,$xs:n})=>e??a??r??n??12};
  }
`;d.__docgenInfo={description:"",methods:[],displayName:"Root",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},gridCols:{required:!1,tsType:{name:"number"},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"ItemImpl",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:`| {
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
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}}]}},{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}]},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},col:{required:!1,tsType:{name:"number"},description:""},s:{required:!1,tsType:{name:"number"},description:""},xs:{required:!1,tsType:{name:"number"},description:""},m:{required:!1,tsType:{name:"number"},description:""}}};export{c as I,d as R};
