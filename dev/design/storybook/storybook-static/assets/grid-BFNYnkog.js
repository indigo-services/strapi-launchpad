import{j as e,M as o}from"./iframe-_cKE9r89.js";import{useMDXComponents as t}from"./index-BsQHpXCm.js";import"./preload-helper-D6kgxu3v.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Foundations/Grid"}),`
`,e.jsx(n.h1,{id:"grid",children:"Grid"}),`
`,e.jsx(n.p,{children:"A grid system helps the content to follow a logical order and increase readability."}),`
`,e.jsx(n.h2,{id:"baseline",children:"Baseline"}),`
`,e.jsxs(n.p,{children:["The Strapi type system specifies ",e.jsx(n.code,{children:"14px/1.4rem"})," for the base font size, which produces an ",e.jsx(n.code,{children:"8px"}),` x-height. The x-height is
halved to produce a `,e.jsx(n.code,{children:"4px"})," baseline."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.img,{src:"/Foundations/baseline.png",alt:"Baseline"}),` This baseline convention naturally flows on to the rest of the grid system, which
includes icons, components, and layout dimensions. Always try to align objects on the 8px grid, but where necessary use
good judgement to fine tune your designs to `,e.jsx(n.code,{children:"4px"}),". The ",e.jsx(n.code,{children:"4px"}),` baseline is there to allow more flexibility for line
heights and smaller adjustments.`]}),`
`,e.jsx(n.h2,{id:"spacing-system",children:"Spacing System"}),`
`,e.jsxs(n.p,{children:["Use multiples of ",e.jsx(n.code,{children:"4px"})," when defining measurements, spacing, and positioning elements."]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/Foundations/spacing-system.png",alt:"Spacing system"})}),`
`,e.jsx(n.h2,{id:"best-practice",children:"Best practice"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["When necessary use ",e.jsx(n.code,{children:"4px"})," to make more fine tuned adjustments."]}),`
`,e.jsx(n.li,{children:"Whenever possible, make sure that objects line up, both vertically and horizontally."}),`
`,e.jsx(n.li,{children:"Align your bounding box to the grid, not the baseline of your text."}),`
`]}),`
`,e.jsx(n.h2,{id:"responsive-grid",children:"Responsive grid"}),`
`,e.jsx(n.p,{children:"A 12-column responsive grid is applied to the entire interface, except the main and secondary navigation."}),`
`,e.jsx(n.p,{children:`We use fixed margin of 56px and fixed gutters of 20px to ensure consistencies in our alignment. The column width varies
depending on screen sizes.`}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Margin – ",e.jsx(n.code,{children:"56px"})]}),`
`,e.jsxs(n.li,{children:["Gutters – ",e.jsx(n.code,{children:"20px"})]}),`
`,e.jsxs(n.li,{children:["Columns – ",e.jsx(n.code,{children:"12"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.img,{src:"/Foundations/responsive-grid.png",alt:"Responsive grid"}),` Fixed gutters of 20px to ensure consistencies in our alignment. The
column width varies depending on screen sizes.`]})]})}function c(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{c as default};
