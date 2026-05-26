import{j as t,T as d,n as l,p as c,F as f}from"./iframe-_cKE9r89.js";const S=({active:a=!1,size:e="M",textColor:s="neutral600",backgroundColor:o="neutral150",variant:r,children:u,minWidth:m=5,...p})=>{const n=e==="S"?1:2,i=r?{backgroundColor:`${r}200`,textColor:`${r}700`}:{backgroundColor:o,textColor:s};return t.jsx(g,{inline:!0,alignItems:"center",justifyContent:"center",minWidth:m,paddingLeft:n,paddingRight:n,background:a?"primary200":i.backgroundColor,$size:e,...p,children:t.jsx(d,{variant:"sigma",textColor:a?"primary600":i.textColor,lineHeight:"1rem",children:u})})},g=c(f)`
  border-radius: ${({theme:a,$size:e})=>e==="S"?"2px":a.borderRadius};
  ${({$size:a,theme:e})=>a==="S"?l`
        padding-block: 0.3rem;
        padding-inline ${e.spaces[1]}
      `:l`
      padding-block: 0.7rem;
      padding-inline ${e.spaces[2]}
    `};
`;S.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:`| {
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
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}}]}},{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}]},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"If `true`, it changes the `backgroundColor` to `primary200` and the `textColor` to `primary600`",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"union",raw:`| keyof DefaultTheme[T]
| React.CSSProperties[K]`,elements:[{name:"unknown"},{name:"ReactCSSProperties['background']",raw:"React.CSSProperties[K]"}]},description:"",defaultValue:{value:"'neutral150'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'S' | 'M'",elements:[{name:"literal",value:"'S'"},{name:"literal",value:"'M'"}]},description:"@default 'M'",defaultValue:{value:"'M'",computed:!1}},textColor:{required:!1,tsType:{name:"union",raw:`| keyof DefaultTheme[T]
| React.CSSProperties[K]`,elements:[{name:"unknown"},{name:"ReactCSSProperties['color']",raw:"React.CSSProperties[K]"}]},description:"",defaultValue:{value:"'neutral600'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'success' | 'primary' | 'danger' | 'warning' | 'neutral' | 'secondary' | 'alternative'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'neutral'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'alternative'"}]},description:"@default 'neutral'"},minWidth:{defaultValue:{value:"5",computed:!1},required:!1}}};export{S as B};
