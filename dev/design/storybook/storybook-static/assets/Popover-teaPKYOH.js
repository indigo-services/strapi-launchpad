import{j as e,M as c,a as r}from"./iframe-_cKE9r89.js";import{useMDXComponents as a}from"./index-BsQHpXCm.js";import{P as d,B as i,C as h,a as l}from"./Popover.stories-aOdsZZ-K.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./index-JVGtNO81.js";import"./index-BEk9yI-S.js";import"./index-DQIug_r8.js";import"./index-D_aoadGl.js";import"./index-CHWVjPu-.js";import"./useIntersection-BvDycFkB.js";import"./useComposeRefs-BPjCxrPe.js";import"./useId-BMWvqHJO.js";import"./ScrollArea-E5LdgMvt.js";import"./Button-BvqyPouE.js";import"./utils-qgCRrxX8.js";import"./Field-Cwhta1v_.js";import"./AccessibleIcon-CYyZOlqW.js";function s(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...o.components},{ViewSource:t}=n;return t||p("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(c,{of:d}),`
`,e.jsx(n.h1,{id:"popover",children:"Popover"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#variants",children:"Variants"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"Displays rich content in a portal, triggered by a button."}),`
`,e.jsx(t,{path:"components/Popover"}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Popover } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"root",children:"Root"}),`
`,e.jsx(n.h3,{id:"trigger",children:"Trigger"}),`
`,e.jsx(n.h3,{id:"content",children:"Content"}),`
`,e.jsx(n.h3,{id:"scrollarea",children:"ScrollArea"}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"basic",children:"Basic"}),`
`,e.jsxs(n.p,{children:["The contents of the ",e.jsx(n.code,{children:"Popover"})," can be anything you need it to, it will grow to fit the content & the ",e.jsx(n.code,{children:"Trigger"}),` component
passes it's props onto the underlying element, so if the trigger is not working, try to spread the props. This is
handled for you when using the buttons from the design-System.`]}),`
`,e.jsx(r,{of:i}),`
`,e.jsx(n.h3,{id:"constrained-size",children:"Constrained Size"}),`
`,e.jsxs(n.p,{children:["By default, the ",e.jsx(n.code,{children:"Popover"}),` grows to fit it's content, this is good because you wouldn't want a form you need to scroll
in! However, if you're displaying a list of information, you might want to constrain the size and use the `,e.jsx(n.code,{children:"ScrollArea"}),`
component. However, it's important to remember that semantically, if you have a button that opens a list of links /
actions, you should be using the `,e.jsx(n.a,{href:"../?path=/docs/components-menu--docs",children:e.jsx(n.code,{children:"Menu"})})," component."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h3,{id:"controlled",children:"Controlled"}),`
`,e.jsxs(n.p,{children:["Like many of our components, the ",e.jsx(n.code,{children:"Popover"})," can be controlled externally, or alternatively given a default state."]}),`
`,e.jsx(r,{of:l})]})}function T(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}function p(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{T as default};
