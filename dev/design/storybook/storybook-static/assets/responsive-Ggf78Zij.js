import{j as e,M as l}from"./iframe-_cKE9r89.js";import{useMDXComponents as r}from"./index-BsQHpXCm.js";import"./preload-helper-D6kgxu3v.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Foundations/Responsive"}),`
`,e.jsx(n.h1,{id:"responsive",children:"Responsive"}),`
`,e.jsx(n.p,{children:"This documentation explains how responsive values work across the design system."}),`
`,e.jsx(n.h2,{id:"how-it-works",children:"How It Works"}),`
`,e.jsx(n.p,{children:"A responsive prop accepts either:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A single value (applied to the initial breakpoint)"}),`
`,e.jsx(n.li,{children:"An object of breakpoint keys to values"}),`
`]}),`
`,e.jsx(n.p,{children:"Breakpoints are defined in the theme as:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"initial"}),": 0px"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"small"}),": 520px"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"medium"}),": 768px"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"large"}),": 1080px"]}),`
`]}),`
`,e.jsx(n.h2,{id:"single-value",children:"Single Value"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Box padding={2} />
`})}),`
`,e.jsx(n.h2,{id:"responsive-object",children:"Responsive Object"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Box padding={{ initial: 2, medium: 4, large: 6 }} />
`})}),`
`,e.jsx(n.h2,{id:"responsive-array",children:"Responsive Array"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Box padding={[2, 4, 6]} />
`})}),`
`,e.jsxs(n.p,{children:["Arrays map to breakpoints in order: ",e.jsx(n.code,{children:"initial"}),", ",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", ",e.jsx(n.code,{children:"large"}),"."]})]})}function t(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{t as default};
