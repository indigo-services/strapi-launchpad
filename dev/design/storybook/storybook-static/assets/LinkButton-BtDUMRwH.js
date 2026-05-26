import{j as e,M as s,a,A as c}from"./iframe-_cKE9r89.js";import{useMDXComponents as i}from"./index-BsQHpXCm.js";import{L as h,B as l,a as d}from"./LinkButton.stories-CUSHbO-9.js";import"./preload-helper-D6kgxu3v.js";import"./Button-BvqyPouE.js";import"./utils-qgCRrxX8.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components},{ViewSource:o}=n;return o||p("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(s,{of:h}),`
`,e.jsx(n.h1,{id:"linkbutton",children:"LinkButton"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage-with-other-routing-libraries",children:"Usage with other routing libraries"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:["A useful wrapper around the ",e.jsx(n.a,{href:"../?path=/docs/components-button--docs",children:e.jsx(n.code,{children:"Button"})}),` component that allows users to navigate
to a different location. By default, the `,e.jsx(n.code,{children:"tag"})," prop is the ",e.jsx(n.a,{href:"../?path=/docs/primitives-baselink--docs",children:e.jsx(n.code,{children:"BaseLink"})}),`
component, but can be changed to integrate with routing libraries.`]}),`
`,e.jsx(o,{path:"components/LinkButton"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { LinkButton } from '@strapi/design-system';
`})}),`
`,e.jsx(a,{of:l}),`
`,e.jsx(n.h2,{id:"usage-with-other-routing-libraries",children:"Usage with other routing libraries"}),`
`,e.jsx(n.h3,{id:"react-router",children:"React Router"}),`
`,e.jsxs(n.p,{children:["To use this component with a routing library (e.g. react-router-dom), you'll need to pass the library's specific ",e.jsx(n.code,{children:"Link"}),`
component to the `,e.jsx(n.code,{children:"tag"}),` prop in order to replace the default html tag the component has. You'll now be able to pass all
the props associated to that component.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { LinkButton } from '@strapi/design-system';
import { NavLink } from 'my-routing-library';

<LinkButton tag={NavLink} to="/home">
  Home
</LinkButton>;
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{of:d})]})}function w(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}function p(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{w as default};
