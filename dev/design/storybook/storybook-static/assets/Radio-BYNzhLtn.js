import{j as e,M as t,a as n,C as l}from"./iframe-_cKE9r89.js";import{useMDXComponents as a}from"./index-BsQHpXCm.js";import{R as d,B as h,D as c,C as p,a as x,W as j}from"./Radio.stories-B_kjKwGc.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./Radio-BpM9oplW.js";import"./index-CmgM1aMT.js";import"./index-DQIug_r8.js";import"./index-D_aoadGl.js";import"./index-CHWVjPu-.js";import"./useId-BMWvqHJO.js";function r(s){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...s.components},{ViewSource:o}=i;return o||u("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d}),`
`,e.jsx(i.h1,{id:"radio",children:"Radio"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#props",children:"Props"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#variants",children:"Variants"})}),`
`,e.jsx(i.li,{children:e.jsx(i.a,{href:"#accessibility",children:"Accessibility"})}),`
`]}),`
`,e.jsx(i.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(i.p,{children:"Radio buttons allow users to choose a single value from a range of options."}),`
`,e.jsx(o,{path:"components/Radio"}),`
`,e.jsx(i.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:`import { Radio } from '@strapi/design-system';
`})}),`
`,e.jsx(i.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(i.h3,{id:"basic",children:"Basic"}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(i.h3,{id:"with-initial-value",children:"With initial value"}),`
`,e.jsxs(i.p,{children:["By default, no radio item is selected. You can set an initial value using the ",e.jsx(i.code,{children:"defaultValue"}),` prop. This behaviour can be
useful if you require a value to be submitted.`]}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(i.h3,{id:"controlled",children:"Controlled"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsxs(i.p,{children:["The below story shows passing ",e.jsx(i.code,{children:"disabled"})," to the ",e.jsx(i.code,{children:"Radio.Group"}),` component. This will disable all radio items within.
However, it is possible to disable individual items by passing `,e.jsx(i.code,{children:"disabled"})," to said ",e.jsx(i.code,{children:"Radio.Item"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h3,{id:"with-label",children:"With Label"}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"Radio.Group"})," component requires a label of some description. This can either be via the ",e.jsx(i.code,{children:"aria-label"}),` attribute or
alternatively if you want to show the label you can use `,e.jsx(i.code,{children:"aria-labelledby"})," & share the ",e.jsx(i.code,{children:"id"}),` with the respective label
Element.`]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(i.p,{children:["Adheres to the ",e.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/",rel:"nofollow",children:"Radio Group WAI-ARIA design pattern"}),` and uses
`,e.jsx(i.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio/",rel:"nofollow",children:"roving tabindex"}),` to manage focus movement among radio
items.`]}),`
`,e.jsx(i.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{})]})}function I(s={}){const{wrapper:i}={...a(),...s.components};return i?e.jsx(i,{...s,children:e.jsx(r,{...s})}):r(s)}function u(s,i){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{I as default};
