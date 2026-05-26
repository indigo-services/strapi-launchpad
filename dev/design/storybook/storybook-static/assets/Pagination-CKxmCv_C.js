import{j as n,M as a,a as r,A as c}from"./iframe-_cKE9r89.js";import{useMDXComponents as s}from"./index-BsQHpXCm.js";import{P as p,B as d,a as h}from"./Pagination.stories-DAFFWbQN.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";function t(i){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...s(),...i.components},{ViewSource:o}=e;return o||m("ViewSource"),n.jsxs(n.Fragment,{children:[n.jsx(a,{of:p}),`
`,n.jsx(e.h1,{id:"pagination",children:"Pagination"}),`
`,n.jsx(e.p,{children:"The Pagination component is used to navigate multipage content."}),`
`,n.jsx(o,{path:"components/Pagination"}),`
`,n.jsx(e.h2,{id:"imports",children:"Imports"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { Dots, NextLink, PageLink, Pagination, PreviousLink } from '@strapi/design-system';
`})}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(r,{of:d}),`
`,n.jsx(e.h3,{id:"usage-with-routing-libraries",children:"Usage with routing libraries"}),`
`,n.jsxs(e.p,{children:["To use this component with a routing library (e.g. react-router-dom), you'll need to pass the library's specific ",n.jsx(e.code,{children:"Link"}),`
component to the `,n.jsx(e.code,{children:"tag"}),` prop in order to replace the default html tag the component has. You'll now be able to pass all
the props associated to that component.`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { PreviousLink, PageLink, NextLink } from '@strapi/design-system';
import { NavLink } from 'my-routing-library';

<Pagination>
  <PreviousLink as={NavLink} to="/1">
    Previous
  </PreviousLink>
  <PageLink as={NavLink} to="/1">
    1
  </PageLink>
  <PageLink as={NavLink} to="/2">
    2
  </PageLink>
  <NextLink as={NavLink} to="/2">
    Next page
  </NextLink>
</Pagination>;
`})}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(c,{of:h})]})}function k(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}function m(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{k as default};
