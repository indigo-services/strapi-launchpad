import{j as t,M as i,a as o,A as p}from"./iframe-_cKE9r89.js";import{useMDXComponents as r}from"./index-BsQHpXCm.js";import{E as c,B as h,W as l,a as m,b as d}from"./EmptyStateLayout.stories-B9WXQL00.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./Button-BvqyPouE.js";import"./utils-qgCRrxX8.js";function s(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...n.components},{ViewSource:a}=e;return a||u("ViewSource"),t.jsxs(t.Fragment,{children:[t.jsx(i,{of:c}),`
`,t.jsx(e.h1,{id:"emptystatelayout",children:"EmptyStateLayout"}),`
`,t.jsx(e.p,{children:"EmptyStates are a pattern used to indicate a page or a table is empty."}),`
`,t.jsx(e.p,{children:t.jsx(e.strong,{children:"Best practices"})}),`
`,t.jsxs(e.ul,{children:[`
`,t.jsx(e.li,{children:"Use everytime a page or a table is empty."}),`
`,t.jsx(e.li,{children:"Use the most appropriate illustration for the usecase. If related to permissions, choose the eye one."}),`
`,t.jsx(e.li,{children:"Use the button to help redirecting the user to a more relevant place."}),`
`]}),`
`,t.jsx(a,{path:"components/EmptyStateLayout"}),`
`,t.jsx(e.h2,{id:"imports",children:"Imports"}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-js",children:`import { EmptyStateLayout } from '@strapi/design-system';
`})}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsx(e.p,{children:`A page or a table might be empty for different reasons: no entries have been created yet, a user doesn't have the
permission to access something, something went wrong, ...`}),`
`,t.jsx(e.h3,{id:"emptystatelayout-with-action",children:"EmptyStateLayout with action"}),`
`,t.jsx(e.p,{children:"EmptyStates can be coupled with a button to help redirecting the user to a more relevant place."}),`
`,t.jsx(o,{of:h}),`
`,t.jsx(e.h3,{id:"emptystatelayout-without-action",children:"EmptyStateLayout without action"}),`
`,t.jsx(e.p,{children:`If no need to redirect the user to a more relevant place or if the context does not suit for that type of action, an
EmptyState without any particular action can be added.`}),`
`,t.jsx(o,{of:l}),`
`,t.jsx(e.h3,{id:"emptystatelayout-with-longer-text",children:"EmptyStateLayout with longer text"}),`
`,t.jsx(o,{of:m}),`
`,t.jsx(e.h2,{id:"props",children:"Props"}),`
`,t.jsx(p,{of:d})]})}function S(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}function u(n,e){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{S as default};
