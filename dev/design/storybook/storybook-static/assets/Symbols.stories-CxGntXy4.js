import{j as s,p as i,T as m}from"./iframe-_cKE9r89.js";import{I as u}from"./symbols-index-Cg3vSd_0.js";const g=({size:r})=>{const t=Math.max(r*10*.5,160),p=async o=>{try{await navigator.clipboard.writeText(o)}catch(a){console.error("failed to copy"),console.error(a)}},d=o=>()=>{p(`import { ${o} } from '@strapi/icons/symbols';`)};return s.jsx(h,{style:{gridTemplateColumns:`repeat(auto-fill, ${t}px)`,gridTemplateRows:`repeat(auto-fill, ${t}px)`},children:Object.entries(u).map(([o,a])=>s.jsxs(x,{style:{width:t,height:t},onClick:d(o),children:[s.jsx(a,{width:`${r}px`,height:`${r}px`}),s.jsx(y,{variant:"pi",children:o})]},o))})},h=i.ul`
  display: grid;
  grid-template-rows: repeat(auto-fill, 16rem);
  grid-gap: 1.2rem;
`,x=i.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  transition: ${r=>r.theme.transitions.backgroundColor};
  cursor: pointer;

  &:hover {
    background-color: ${({theme:r})=>r.colors.neutral100};
    border-radius: ${({theme:r})=>r.borderRadius};
  }
`,y=i(m)`
  word-break: break-all;
`,b={component:g,title:"Foundations/Icons/Symbols",parameters:{chromatic:{disableSnapshot:!1}}},e={args:{size:32}};var n,l,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 32
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const f=["All"],I=Object.freeze(Object.defineProperty({__proto__:null,All:e,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{e as A,I as S};
