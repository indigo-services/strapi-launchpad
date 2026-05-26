import{j as e,M as a,a as o,A as d}from"./iframe-_cKE9r89.js";import{useMDXComponents as r}from"./index-BsQHpXCm.js";import{G as h,B as p,a as c,C as l}from"./Grid.stories-Bin1qDLX.js";import{I as m}from"./Grid-spcvu4bJ.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...r(),...s.components},{ViewSource:t}=n;return t||x("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(a,{of:h}),`
`,e.jsx(n.h1,{id:"grid",children:"Grid"}),`
`,e.jsx(n.p,{children:"A grid system helps the content to follow a logical order and increase readability."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Baseline"}),` The Strapi type stack specifies 14px/0.875rem for the base font size, which produces an 8px x-height. The
x-height is halved to produce a 4px baseline. This baseline convention naturally flows on to the rest of the grid
system, which includes icons, components, and layout dimensions. Always try to align objects on the 8px grid, but where
necessary use good judgement to fine tune your designs to 4px. The 4px baseline is there to allow more flexibility for
line heights and smaller adjustments.`]}),`
`,e.jsx(t,{path:"primitives/Grid"}),`
`,e.jsx(n.h2,{id:"imports",children:"Imports"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Grid } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["The component allows to create a Grid on the screen using the CSS grid feature. This component extends the ",e.jsx(n.code,{children:"<Box />"}),` one
and can receive the same props.`]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.p,{children:"The following is a representation of the 12 columns Grid presented in the documentation."}),`
`,e.jsx(o,{of:c}),`
`,e.jsx(n.p,{children:"A more complex one"}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[`The Grid components wrap all their children in the
`,e.jsx(n.a,{href:"https://design-system-git-main-strapijs.vercel.app/?path=/docs/design-system-technical-components-box--base",rel:"nofollow",children:"Box"}),`
component, so you can pass all Box props to change their style.`]}),`
`,e.jsx(n.h3,{id:"grid-props",children:"Grid Props"}),`
`,e.jsx(n.h3,{id:"item-props",children:"Item Props"}),`
`,e.jsx(d,{of:m})]})}function b(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}function x(s,n){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{b as default};
