import{j as e,M as a,a as s,C as c}from"./iframe-_cKE9r89.js";import{useMDXComponents as r}from"./index-BsQHpXCm.js";import{C as h,B as l,I as d,D as x,W as p,a as u}from"./Checkbox.stories-DV6AzrkW.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./Checkbox-0fdbGYKe.js";import"./index-CHWVjPu-.js";import"./useComposeRefs-BPjCxrPe.js";import"./useControllableState-CIwy89gb.js";import"./useId-BMWvqHJO.js";import"./Button-BvqyPouE.js";import"./utils-qgCRrxX8.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...i.components},{ViewSource:o}=n;return o||j("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
`,e.jsx(n.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#variants",children:"Variants"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#accessibility",children:"Accessibility"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:[`Checkboxes allow users to choose one or multiple values from a range of options. Use the
`,e.jsx(n.a,{href:"../?path=/docs/inputs-radio--docs",children:"Radio"})," button component if the user should select only one value."]}),`
`,e.jsx(o,{path:"components/Checkbox"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Checkbox } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"basic-checkbox",children:"Basic checkbox"}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h3,{id:"indeterminate",children:"Indeterminate"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"checked"})," prop can be set to either a ",e.jsx(n.code,{children:"boolean"})," value denoting checked or unchecked, or to ",e.jsx(n.code,{children:"'indeterminate'"}),`. This
is useful when the checkbox is parent of a checkbox group and some, but not all, of the children checkboxes are checked.`]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.p,{children:`Checkboxes may not be available to select yet. This state can be related to a lack of permission or a need to pursue
another action first.`}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"without-label",children:"Without Label"}),`
`,e.jsxs(n.p,{children:[`Some instances, such as being used in a table, you may want to have a checkbox without the visual label. If this is the
case, you should instead supply the `,e.jsx(n.code,{children:"aria-label"})," prop so it is still accessible."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"with-name--value",children:"With Name & Value"}),`
`,e.jsxs(n.p,{children:["If using in a typical ",e.jsx(n.code,{children:"form"})," element, you can provide a ",e.jsx(n.code,{children:"name"})," and ",e.jsx(n.code,{children:"value"})," prop that will be added to the ",e.jsx(n.code,{children:"FormData"}),` on
submission. The story below fires a unique action `,e.jsx(n.code,{children:"onSubmit"}),` demonstrating this. However, if you're not using it within
a `,e.jsx(n.code,{children:"form"}),", you can omit this."]}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Adheres to the ",e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/",rel:"nofollow",children:"tri-state Checkbox WAI-ARIA design pattern"}),"."]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{})]})}function M(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}function j(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{M as default};
