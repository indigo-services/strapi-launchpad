import{j as e,M as i,C as a,a as c}from"./iframe-_cKE9r89.js";import{useMDXComponents as r}from"./index-BsQHpXCm.js";import{S as l,A as s}from"./Symbols.stories-CxGntXy4.js";import"./preload-helper-D6kgxu3v.js";import"./symbols-index-Cg3vSd_0.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l,name:"Docs"}),`
`,e.jsx(n.h1,{id:"symbols",children:"Symbols"}),`
`,e.jsxs(n.p,{children:["Symbols are a lot stricter, they have pre-set colors and should only have their ",e.jsx(n.code,{children:"width"})," and ",e.jsx(n.code,{children:"height"}),` set to accomodate
the design you're trying to achieve.`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { SYMBOL_NAME } from '@strapi/icons/symbol';

const MyComponent = () => {
  return <SYMBOL_NAME width="14rem" />;
};
`})}),`
`,e.jsx(n.h2,{id:"all-symbols",children:"All Symbols"}),`
`,e.jsx(n.p,{children:"Click on a symbol to copy it's import statement."}),`
`,e.jsx(a,{of:s}),`
`,e.jsx(c,{of:s})]})}function j(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{j as default};
