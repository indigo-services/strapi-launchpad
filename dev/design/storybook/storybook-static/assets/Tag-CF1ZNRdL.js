import{j as n,F as c,p as o,c as u,T as d}from"./iframe-_cKE9r89.js";const m=o(u)`
  display: inline-flex;
  border: none;

  & > svg {
    height: 1.2rem;
    width: 1.2rem;
  }

  & > svg path {
    fill: ${({theme:e,...t})=>t["aria-disabled"]?e.colors.neutral600:e.colors.primary600};
  }

  &:hover {
    cursor: ${({$iconAction:e})=>e?"pointer":"initial"};
  }
`,g=({children:e,icon:t,label:i,disabled:r=!1,onClick:a,...s})=>{const l=p=>{r||!a||a(p)};return n.jsxs(c,{inline:!0,background:r?"neutral200":"primary100",color:r?"neutral700":"primary600",paddingLeft:3,paddingRight:1,borderColor:r?"neutral300":"primary200",hasRadius:!0,height:"3.2rem",...s,children:[n.jsx(h,{$disabled:r,variant:"pi",fontWeight:"bold",children:e}),n.jsx(m,{tag:"button",disabled:r,"aria-disabled":r,"aria-label":i,padding:2,onClick:l,$iconAction:!!a,children:t})]})},h=o(d)`
  color: inherit;
  border-right: 1px solid ${({theme:e,$disabled:t})=>t?e.colors.neutral300:e.colors.primary200};
  padding-right: ${({theme:e})=>e.spaces[2]};
`;g.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""}},composes:["Omit"]};export{g as T};
