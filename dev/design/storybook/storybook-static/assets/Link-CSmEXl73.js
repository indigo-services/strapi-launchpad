import{j as e,M as a,a as s,A as l,Q as c}from"./iframe-_cKE9r89.js";import{useMDXComponents as r}from"./index-BsQHpXCm.js";import{L as d,B as h,D as p,I as x}from"./Link.stories-DBsctviD.js";import"./preload-helper-D6kgxu3v.js";import"./symbols-index-Cg3vSd_0.js";import"./index-BxBVU389.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components},{ViewSource:o}=n;return o||m("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(n.h1,{id:"link",children:"Link"}),`
`,e.jsx(n.p,{children:"Links are used to send users to another page or an anchor. They are used for external navigation."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Best practices"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use TextButton component if an action needs to be triggered within the admin panel (ex: Opening a modal )."}),`
`,e.jsx(n.li,{children:"Clicking on a Link most of the time opens a new tab."}),`
`,e.jsx(n.li,{children:"Links should always be used with an icon. If it is an external link, use the ExternalLink icon accordingly."}),`
`,e.jsx(n.li,{children:"Links text should be concise and describe their purpose. Users need to know exactly what they are about to do."}),`
`,e.jsx(n.li,{children:"Use capital letters."}),`
`]}),`
`,e.jsx(o,{path:"components/Link"}),`
`,e.jsx(n.h2,{id:"imports",children:"Imports"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Link } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:`Links are used for external navigation. Moreover, they should be associated with an icon to indicate its external
navigation purpose.`}),`
`,e.jsx(n.h3,{id:"base",children:"Base"}),`
`,e.jsx(n.p,{children:"The simplest representation of the Link component."}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"disabled-link",children:"Disabled link"}),`
`,e.jsx(n.p,{children:"Depending on the permissions a user have or the status of an action, a link can be unreachable or unavailable yet."}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"start--end-icons",children:"Start & end icons"}),`
`,e.jsx(n.p,{children:"Display icons on the left or right side."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"usage-with-other-routing-libraries",children:"Usage with other routing libraries"}),`
`,e.jsxs(n.p,{children:["To use this component with a routing library (e.g. react-router-dom), you'll need to pass the library's specific ",e.jsx(n.code,{children:"Link"}),`
component to the `,e.jsx(n.code,{children:"tag"}),` prop in order to replace the default html tag the component has. You'll now be able to pass all
the props associated to that component.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Link } from '@strapi/design-system';
import { NavLink } from 'my-routing-library';

<Link as={NavLink} to="/home">
  Home
</Link>;
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{of:c})]})}function L(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}function m(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{L as default};
