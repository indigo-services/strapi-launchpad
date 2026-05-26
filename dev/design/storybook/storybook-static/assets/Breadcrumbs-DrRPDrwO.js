import{j as e,M as a,a as i}from"./iframe-_cKE9r89.js";import{useMDXComponents as s}from"./index-BsQHpXCm.js";import{B as m,a as c,W as l,b as d,S as p}from"./Breadcrumbs.stories-BMd3NuPN.js";import"./preload-helper-D6kgxu3v.js";import"./symbols-index-Cg3vSd_0.js";import"./index-BxBVU389.js";import"./SimpleMenu-Dnwze8Kc.js";import"./useIntersection-BvDycFkB.js";import"./index-JVGtNO81.js";import"./index-BEk9yI-S.js";import"./index-DQIug_r8.js";import"./index-D_aoadGl.js";import"./index-CHWVjPu-.js";import"./useComposeRefs-BPjCxrPe.js";import"./useId-BMWvqHJO.js";import"./index-CmgM1aMT.js";import"./Button-BvqyPouE.js";import"./utils-qgCRrxX8.js";import"./IconButton-Uvk00hK3.js";import"./AccessibleIcon-CYyZOlqW.js";function t(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components},{ViewSource:o}=n;return o||h("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
`,e.jsx(n.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,e.jsx(n.p,{children:"Breadcrumbs are a list of hierarchical links that inform users about their possible navigation path upwards."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Best practices"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use breadcrumbs whenever a long path to achieve an action is required."}),`
`,e.jsx(n.li,{children:"Use breadcrumbs in modal's headers."}),`
`,e.jsxs(n.li,{children:["Using breadcrumbs in a page or a form is ",e.jsx(n.em,{children:"not"})," a consistent experience."]}),`
`]}),`
`,e.jsx(o,{path:"components/Breadcrumbs"}),`
`,e.jsx(n.h2,{id:"imports",children:"Imports"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Breadcrumbs, Crumb, CrumbLink, CrumbSimpleMenu, MenuItem } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"Breadcrumbs with CrumbLink are a list of link to help navigation."}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"usage-1",children:"Usage"}),`
`,e.jsx(n.p,{children:"Breadcrumbs with CrumbSimpleMenu displays a list of potential options or actions via a Popover component."}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"without-navigation",children:"Without navigation"}),`
`,e.jsx(n.p,{children:"Breadcrumbs with Crumb are visual information only and cannot be navigated. They are mostly part of modals' headers."}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h2,{id:"single-link",children:"Single link"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"usage-with-other-routing-libraries",children:"Usage with other routing libraries"}),`
`,e.jsxs(n.p,{children:["To use this component with a routing library (e.g. react-router-dom), you'll need to pass the library's specific ",e.jsx(n.code,{children:"Link"}),`
component to the `,e.jsx(n.code,{children:"tag"}),` prop in order to replace the default html tag the component has. You'll now be able to pass all
the props associated to that component.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Breadcrumbs, CrumbLink } from '@strapi/design-system';
import { NavLink } from 'my-routing-library';

<Breadcrumbs label="Folder navigatation" tag="nav">
  <CrumbLink tag={NavLink} to="/">
    Media Library
  </CrumbLink>
</Breadcrumbs>;
`})})]})}function X(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}function h(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{X as default};
