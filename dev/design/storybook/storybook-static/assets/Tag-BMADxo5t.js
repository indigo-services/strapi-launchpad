import{j as e,M as i,a as s,A as c}from"./iframe-_cKE9r89.js";import{useMDXComponents as a}from"./index-BsQHpXCm.js";import{T as d,B as l,D as h,F as p}from"./Tag.stories-l4gYbjXl.js";import{T as m}from"./Tag-CF1ZNRdL.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";function r(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...o.components},{ViewSource:t}=n;return t||x("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(n.h1,{id:"tag",children:"Tag"}),`
`,e.jsx(n.p,{children:`Tags are used to give a quick information about a performed action. Tags can be added or removed from a page or another
component. They are also used as a filter.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Best practices"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Tags text should be concise and easily scannable."}),`
`,e.jsx(n.li,{children:"Tags text should be explicit and indicate its purpose."}),`
`,e.jsx(n.li,{children:"Tags should be very close to or within the performed action."}),`
`,e.jsx(n.li,{children:"Use Badge component if the information given is not related to a performed action."}),`
`]}),`
`,e.jsx(t,{path:"components/Tag"}),`
`,e.jsx(n.h2,{id:"imports",children:"Imports"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Tag } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:`Tags are related to a performed action. They should be very close by the action's trigger. Moreover, a tag can be added
or removed from that place. They cannot exist on their own.`}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(n.h3,{id:"disabled-tag",children:"Disabled Tag"}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"filter-tag",children:"Filter Tag"}),`
`,e.jsx(n.p,{children:"Tag can also be used as a filter with action to remove the filter"}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[`The Tag component wraps all its children in the
`,e.jsx(n.a,{href:"https://design-system-git-main-strapijs.vercel.app/?path=/docs/design-system-technical-components-box--base",rel:"nofollow",children:"Box"}),`
component, so you can pass all Box props to change its style.`]}),`
`,e.jsx(c,{of:m})]})}function y(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}function x(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{y as default};
