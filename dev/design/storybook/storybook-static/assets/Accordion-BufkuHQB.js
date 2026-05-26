import{j as e,M as d,a as i,A as s}from"./iframe-_cKE9r89.js";import{useMDXComponents as c}from"./index-BsQHpXCm.js";import{A as a,B as h,S as l,D as x,E as p,a as j,R as f,W as m,b as g,G as u,c as b,d as y,H as w,T as A}from"./Accordion.stories-Cr9y6WZe.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./index-DQIug_r8.js";import"./index-D_aoadGl.js";import"./IconButton-Uvk00hK3.js";import"./utils-qgCRrxX8.js";import"./AccessibleIcon-CYyZOlqW.js";import"./Field-Cwhta1v_.js";import"./useComposeRefs-BPjCxrPe.js";import"./useId-BMWvqHJO.js";function t(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...o.components},{ViewSource:r}=n;return r||v("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(n.h1,{id:"accordion",children:"Accordion"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#variants",children:"Variants"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#accessibility",children:"Accessibility"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`A vertically stacked set of interactive headings that each reveal an associated section of content. Accordion is a
composite component designed to be flexible and versitile to display whatever content you require.`}),`
`,e.jsx(r,{path:"components/Accordion"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Accordion } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"basic-accordion",children:"Basic Accordion"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"secondary-variant",children:"Secondary Variant"}),`
`,e.jsx(n.p,{children:"Accordions have a secondary variant that can be used to differentiate between different types of content."}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.p,{children:"When Disabled, the accordion will not be able to be interacted with."}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h3,{id:"expanded",children:"Expanded"}),`
`,e.jsx(n.p,{children:"By providing a defaultValue we can set an accordion item to be expanded by default."}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsxs(n.p,{children:["Accordions have two sizes, ",e.jsx(n.code,{children:"S"})," and ",e.jsx(n.code,{children:"M"})," (small & medium)."]}),`
`,e.jsx(i,{of:j}),`
`,e.jsx(n.h3,{id:"caret-right-aligned",children:"Caret Right Aligned"}),`
`,e.jsxs(n.p,{children:["By default the caret is left aligned, but it can be right aligned by setting the ",e.jsx(n.code,{children:"caretPosition"}),` prop on an
`,e.jsx(n.code,{children:"Accordion.Trigger"}),"."]}),`
`,e.jsx(i,{of:f}),`
`,e.jsx(n.h3,{id:"with-icon",children:"With Icon"}),`
`,e.jsx(n.p,{children:"Optionally, an icon can be added to the left of the trigger title."}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"with-actions",children:"With Actions"}),`
`,e.jsxs(n.p,{children:["When actions are provided, they will be displayed to the right of the trigger title, you should use ",e.jsx(n.code,{children:"IconButton"}),`
components for the actions ensuring they are accessible with a `,e.jsx(n.code,{children:"label"}),` prop. The internals of the component will handle
the visual adjustments we expect from actions.`]}),`
`,e.jsx(i,{of:g}),`
`,e.jsx(n.h3,{id:"group",children:"Group"}),`
`,e.jsx(n.p,{children:"Accordion items can be built up as a group together without any additional components."}),`
`,e.jsx(i,{of:u}),`
`,e.jsx(n.h3,{id:"with-label",children:"With Label"}),`
`,e.jsxs(n.p,{children:["Whilst accordion's can't actually have labels, you can visually give them a label by combining them with the ",e.jsx(n.code,{children:"Field"}),`
component.`]}),`
`,e.jsx(i,{of:b}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Adheres to the ",e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion",rel:"nofollow",children:"Accordion WAI-ARIA design pattern"}),"."]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"accordion-1",children:"Accordion"}),`
`,e.jsx(s,{of:y}),`
`,e.jsx(n.h3,{id:"item",children:"Item"}),`
`,e.jsx(n.h3,{id:"header",children:"Header"}),`
`,e.jsx(s,{of:w}),`
`,e.jsx(n.h3,{id:"trigger",children:"Trigger"}),`
`,e.jsx(s,{of:A})]})}function H(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}function v(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{H as default};
