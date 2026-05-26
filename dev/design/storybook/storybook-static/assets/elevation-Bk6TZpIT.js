import{j as e,M as t}from"./iframe-_cKE9r89.js";import{useMDXComponents as s}from"./index-BsQHpXCm.js";import"./preload-helper-D6kgxu3v.js";function o(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Foundations/Elevation"}),`
`,e.jsx(n.h1,{id:"layers",children:"Layers"}),`
`,e.jsx(n.p,{children:"Modern UI is composed of different layers, be that modals, popovers or tooltips."}),`
`,e.jsx(n.h2,{id:"shadows",children:"Shadows"}),`
`,e.jsx(n.p,{children:`Shadows are used to create a sense of depth and separation between elements. They might be used to indicate elevation of
an element e.g. a Popover, or alternatively, they can indicate that UI can scroll below another element e.g. Tables.`}),`
`,e.jsx(n.h2,{id:"z-index",children:"Z-Index"}),`
`,e.jsxs(n.p,{children:[`The z-index determines the stacking order of elements. Elements with a higher z-index always sit in front of elements
with a lower z-index. Our current collection of z-index values is listed below with their corresponding aliases. They're
currently non-linear to support growing other common use-cases we may not have encountered yet. All are accessible via
the theme object – `,e.jsx(n.code,{children:"theme.zIndices.<alias>"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"navigation"})," – ",e.jsx(n.code,{children:"100"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"overlay"})," – ",e.jsx(n.code,{children:"300"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"modal"})," – ",e.jsx(n.code,{children:"310"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"dialog"})," – ",e.jsx(n.code,{children:"320"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"popover"})," – ",e.jsx(n.code,{children:"500"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"notification"})," – ",e.jsx(n.code,{children:"700"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"tooltip"})," – ",e.jsx(n.code,{children:"1000"})]}),`
`]})]})}function c(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{c as default};
