import{j as e,M as t,a as c}from"./iframe-_cKE9r89.js";import{useMDXComponents as s}from"./index-BsQHpXCm.js";import{S as a,B as l}from"./ScrollArea.stories-BgoVhhC8.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./ScrollArea-E5LdgMvt.js";import"./index-D_aoadGl.js";import"./index-BEk9yI-S.js";function i(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...o.components},{ViewSource:r}=n;return r||d("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a}),`
`,e.jsx(n.h1,{id:"scroll-area",children:"Scroll Area"}),`
`,e.jsx(n.p,{children:"Augments native scroll functionality for custom, cross-browser styling."}),`
`,e.jsx(r,{path:"utilities/ScrollArea"}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"ScrollArea"})," component is a wrapper around ",e.jsx(n.code,{children:"Box"}),". As such, any ",e.jsx(n.code,{children:"Box"})," props can be passed to ",e.jsx(n.code,{children:"ScrollArea"}),`. By
default, the `,e.jsx(n.code,{children:"ScrollArea"})," is set to the height & width of the parent container."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ScrollArea } from '@strapi/design-system';

const MyPage = ({ children }) => {
  return (
    <main style={{ height: '100vh' }}>
      <ScrollArea tag="article">{children}</ScrollArea>
    </main>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:`In most cases, it's best to rely on native scrolling and work with the customization options available in CSS. When that
isn't enough, ScrollArea provides additional customizability while maintaining the browser's native scroll behavior (as
well as accessibility features, like keyboard scrolling).`})]})}function y(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}function d(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{y as default};
