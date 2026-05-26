import{j as s,I as u,l as g,p as l,T as h}from"./iframe-_cKE9r89.js";const y=({color:o,size:n})=>{const t=Math.max(n*10*.5,160),d=async e=>{try{await navigator.clipboard.writeText(e)}catch(a){console.error("failed to copy"),console.error(a)}},m=e=>()=>{d(`import { ${e} } from '@strapi/icons';`)};return s.jsx(x,{style:{gridTemplateColumns:`repeat(auto-fill, ${t}px)`,gridTemplateRows:`repeat(auto-fill, ${t}px)`},children:Object.entries(u).map(([e,a])=>s.jsxs(b,{style:{width:t,height:t},onClick:m(e),children:[s.jsx(a,{fill:o,width:`${n}px`,height:`${n}px`}),s.jsx(f,{variant:"pi",children:e})]},e))})},x=l.ul`
  display: grid;
  grid-template-rows: repeat(auto-fill, 16rem);
  grid-gap: 1.2rem;
`,b=l.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  transition: ${o=>o.theme.transitions.backgroundColor};
  cursor: pointer;

  &:hover {
    background-color: ${({theme:o})=>o.colors.neutral100};
    border-radius: ${({theme:o})=>o.borderRadius};
  }
`,f=l(h)`
  word-break: break-all;
`,j={component:y,title:"Foundations/Icons/Icons",parameters:{chromatic:{disableSnapshot:!1}}},r={argTypes:{color:{control:"select",options:Object.keys(g.colors)}},args:{color:"neutral900",size:32}};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  argTypes: {
    color: {
      control: 'select',
      options: Object.keys(lightTheme.colors)
    }
  },
  args: {
    color: 'neutral900',
    size: 32
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const I=["All"],k=Object.freeze(Object.defineProperty({__proto__:null,All:r,__namedExportsOrder:I,default:j},Symbol.toStringTag,{value:"Module"}));export{r as A,k as I};
