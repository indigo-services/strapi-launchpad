import{j as e,T as r,p as l,M as d}from"./iframe-_cKE9r89.js";import{useMDXComponents as p}from"./index-BsQHpXCm.js";import"./preload-helper-D6kgxu3v.js";const h=["alpha","beta","delta","epsilon","omega","pi","sigma"],y="The quick brown fox jumps over the lazy dog",c=()=>e.jsx(m,{children:h.map(s=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"sigma",textAlign:"right",textColor:"neutral600",children:s}),e.jsx(r,{variant:s,children:y})]}))}),m=l.dl`
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-column-gap: 3.2rem;
  grid-row-gap: 6rem;
  align-items: end;
  margin-block: 4rem;
`;c.__docgenInfo={description:"",methods:[],displayName:"Typescale"};function o(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...p(),...s.components},{TypeTable:i,ViewSource:t}=n;return i||a("TypeTable"),t||a("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Foundations/Typography"}),`
`,e.jsx(n.h1,{id:"typography",children:"Typography"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#typeface",children:"Typeface"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#type-styles",children:"Type Styles"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`Typography is an important part of the Design System that brings consistency across experiences and platforms. Good
typography rules help present content clearly and efficiently.`}),`
`,e.jsx(t,{path:"primitives/Typography"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Typography } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(n.h2,{id:"typeface",children:"Typeface"}),`
`,e.jsx(n.p,{children:`Strapi Design System uses system fonts to provide the best experience on every Operating System (OS). Due to that
change, a performance issue is also reduced.`}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/Foundations/typefaces.png",alt:"Typefaces"})}),`
`,e.jsx(n.h2,{id:"type-styles",children:"Type styles"}),`
`,e.jsx(n.p,{children:`Moreover, each level of the Type Scale is defined by the Greek alphabet to abstract all context from each level and
developed in rem instead of px. Thus, any usecase should be covered by the scale.`}),`
`,`
`,e.jsx(c,{})]})}function f(s={}){const{wrapper:n}={...p(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}function a(s,n){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{f as default};
