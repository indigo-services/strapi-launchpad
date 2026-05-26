import{j as e,M as l,a as s,A as h}from"./iframe-_cKE9r89.js";import{useMDXComponents as a}from"./index-BsQHpXCm.js";import{T as c,B as t,R as d,D as p,C as x,S as j,E as u}from"./Tabs.stories-6gJl4IJV.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./index-CmgM1aMT.js";import"./index-DQIug_r8.js";import"./index-D_aoadGl.js";function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...i.components},{ViewSource:r}=n;return r||g("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(l,{of:c}),`
`,e.jsx(n.h1,{id:"tabs",children:"Tabs"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#variants",children:"Variants"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#accessibility",children:"Accessibility"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`A set of views, known as "panels", that are displayed one at a time. The tabs typically relate to one another, but it is
not a requirement.`}),`
`,e.jsx(r,{path:"components/Tabs"}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Tabs } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"tabs-1",children:"Tabs"}),`
`,e.jsx(h,{of:d}),`
`,e.jsx(n.h3,{id:"list",children:"List"}),`
`,e.jsx(n.h3,{id:"trigger",children:"Trigger"}),`
`,e.jsx(n.h3,{id:"content",children:"Content"}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"basic-tabs",children:"Basic Tabs"}),`
`,e.jsx(n.p,{children:`The default set of tabs have elevation to help the active tab stand out against the others. The panels are purposedly
not styled to allow for flexibility in design.`}),`
`,e.jsx(s,{of:t}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(n.p,{children:["Any individual trigger can be disabled by passing the ",e.jsx(n.code,{children:"disabled"}),` prop directly to the targeted trigger. Alternatively,
the `,e.jsx(n.code,{children:"Root"}),` component accepts either a boolean (which will disable every trigger) or a string which must correlate to the
value of the trigger you want to disable.`]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"controlled",children:"Controlled"}),`
`,e.jsxs(n.p,{children:["Tabs can be externally controlled by passing a ",e.jsx(n.code,{children:"value"})," prop that correlates to the value of a ",e.jsx(n.code,{children:"Trigger"}),`. When you pass
`,e.jsx(n.code,{children:"value"}),", you must also supply an ",e.jsx(n.code,{children:"onValueChange"}),` function which will recieve the value of the next trigger to be
"active". If you don't want to control these externally you can omit this entirely. A `,e.jsx(n.code,{children:"defaultValue"}),` prop is always
required otherwise no tabpanel will be isVisible.`]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"simple-variant",children:"Simple Variant"}),`
`,e.jsxs(n.p,{children:["Tabs also have a variant option of either ",e.jsx(n.code,{children:"regular"})," or ",e.jsx(n.code,{children:"simple"}),". By default, they are ",e.jsx(n.code,{children:"regular"})," below shows ",e.jsx(n.code,{children:"simple"}),`.
This is useful depending on the context in which you're displaying the component.`]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h3,{id:"error",children:"Error"}),`
`,e.jsxs(n.p,{children:["Similar to the ",e.jsx(n.code,{children:"disabled"})," prop of the ",e.jsx(n.code,{children:"Root"})," component, you can also pass a ",e.jsx(n.code,{children:"hasError"})," prop, this can only be a ",e.jsx(n.code,{children:"string"}),`
which must correlate to the value of the trigger you want to show an error on. When the `,e.jsx(n.code,{children:"variant"})," is set to ",e.jsx(n.code,{children:"simple"}),` the
error color preceeds the `,e.jsx(n.code,{children:"active"})," color."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Adheres to the ",e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel",rel:"nofollow",children:"Tabs WAI-ARIA design pattern"}),"."]})]})}function C(i={}){const{wrapper:n}={...a(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}function g(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{C as default};
