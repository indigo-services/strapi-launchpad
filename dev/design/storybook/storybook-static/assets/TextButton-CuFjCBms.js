import{j as e,M as a,a as i,A as h}from"./iframe-_cKE9r89.js";import{useMDXComponents as s}from"./index-BsQHpXCm.js";import{T as c,B as d,a as l,D as x,L as p,S as u,E as j}from"./TextButton.stories-BzTMgmhN.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...t.components},{ViewSource:o}=n;return o||m("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c}),`
`,e.jsx(n.h1,{id:"textbutton",children:"TextButton"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#variants",children:"Variants"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage-with-other-routing-libraries",children:"Usage with other routing libraries"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`Typically used for internal navigation within a Strapi application. These buttons are not supposed to have "actions"
e.g. clone a document.`}),`
`,e.jsx(o,{path:"components/TextButton"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { TextButton } from '@strapi/design-system';
`})}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(h,{of:l}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"loading",children:"Loading"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"with-start-icon",children:"With start icon"}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"with-end-icon",children:"With end icon"}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h2,{id:"usage-with-other-routing-libraries",children:"Usage with other routing libraries"}),`
`,e.jsx(n.h3,{id:"react-router",children:"React Router"}),`
`,e.jsxs(n.p,{children:["To use this component with a routing library (e.g. react-router-dom), you'll need to pass the library's specific ",e.jsx(n.code,{children:"Link"}),`
component to the `,e.jsx(n.code,{children:"tag"}),` prop in order to replace the default html tag the component has. You'll now be able to pass all
the props associated to that component.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { TextButton } from '@strapi/design-system';
import { NavLink } from 'my-routing-library';

<TextButton tag={NavLink} to="/home">
  Home
</TextButton>;
`})})]})}function y(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}function m(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{y as default};
