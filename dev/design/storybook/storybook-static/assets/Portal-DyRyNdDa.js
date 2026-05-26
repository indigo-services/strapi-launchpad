import{j as e,M as a,a as i,A as c}from"./iframe-_cKE9r89.js";import{useMDXComponents as s}from"./index-BsQHpXCm.js";import{P as d,B as l}from"./Portal.stories-CL2jpOFQ.js";import{P as h}from"./Portal-DW4SEpes.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";function n(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...t.components},{ViewSource:r}=o;return r||p("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(o.h1,{id:"portal",children:"Portal"}),`
`,e.jsxs(o.p,{children:["A declarative wrap around ",e.jsx(o.a,{href:"https://react.dev/reference/react-dom/createPortal",rel:"nofollow",children:e.jsx(o.code,{children:"ReactDOM.createPortal"})}),` that allows you
to render content outside of the root react app.`]}),`
`,e.jsx(r,{path:"utilities/Portal"}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { Portal } from '@strapi/design-system';
`})}),`
`,e.jsx(o.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsxs(o.p,{children:["By default we mount the portal to the ",e.jsx(o.code,{children:"globalThis.document.body"}),", however you can supply your own ",e.jsx(o.code,{children:"container"}),` prop if
that suits your needs better. In this story we only use a container to ensure it still renders in the `,e.jsx(o.code,{children:"iframe"}),`.
Typically though, just using the default is fine.`]}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{of:h})]})}function g(t={}){const{wrapper:o}={...s(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}function p(t,o){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{g as default};
