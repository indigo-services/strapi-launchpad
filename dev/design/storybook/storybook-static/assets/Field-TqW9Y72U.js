import{j as n,M as a,a as s,A as t}from"./iframe-_cKE9r89.js";import{useMDXComponents as l}from"./index-BsQHpXCm.js";import{F as d,B as c,I as h,E as x,H as p,W as j,a as u}from"./Field.stories-Bc_Fp0zO.js";import{R as f,L as m,I as g}from"./Field-Cwhta1v_.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./useComposeRefs-BPjCxrPe.js";import"./useId-BMWvqHJO.js";import"./AccessibleIcon-CYyZOlqW.js";function o(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...l(),...i.components},{ViewSource:r}=e;return r||w("ViewSource"),n.jsxs(n.Fragment,{children:[n.jsx(a,{of:d}),`
`,n.jsx(e.h1,{id:"field",children:"Field"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#usage",children:"Usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#props",children:"Props"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#variants",children:"Variants"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#accessibility",children:"Accessibility"})}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsxs(e.p,{children:[`A composite component containing everything you need to make fully accessibility form inputs using either the provided
`,n.jsx(e.code,{children:"input"})," element or your own custom input."]}),`
`,n.jsx(r,{path:"components/Field"}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { Field, useField } from '@strapi/design-system';
`})}),`
`,n.jsx(s,{of:c}),`
`,n.jsxs(e.p,{children:["If you're using your own custom input not based off ",n.jsx(e.code,{children:"Field.Input"})," then utilise the ",n.jsx(e.code,{children:"useField"}),` hook to gain access to the
following props:`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`interface Field {
  /**
   * @default false
   */
  error?: string | boolean;
  /**
   * @default null
   */
  hint?: React.ReactNode;
  id?: string;
  labelNode?: HTMLLabelElement;
  name?: string;
  /**
   * @default false
   */
  required?: boolean;
}
`})}),`
`,n.jsx(e.h2,{id:"variants",children:"Variants"}),`
`,n.jsx(e.h3,{id:"customising-input",children:"Customising Input"}),`
`,n.jsx(s,{of:h}),`
`,n.jsx(e.h3,{id:"with-error",children:"With Error"}),`
`,n.jsx(s,{of:x}),`
`,n.jsx(e.h3,{id:"with-hint",children:"With Hint"}),`
`,n.jsx(s,{of:p}),`
`,n.jsx(e.h3,{id:"with-start-action",children:"With start action"}),`
`,n.jsx(s,{of:j}),`
`,n.jsx(e.h3,{id:"with-end-action",children:"With end action"}),`
`,n.jsx(s,{of:u}),`
`,n.jsx(e.h2,{id:"props",children:"Props"}),`
`,n.jsx(e.h3,{id:"root",children:"Root"}),`
`,n.jsx(t,{of:f}),`
`,n.jsx(e.h3,{id:"label",children:"Label"}),`
`,n.jsx(t,{of:m}),`
`,n.jsx(e.h3,{id:"input",children:"Input"}),`
`,n.jsx(t,{of:g})]})}function A(i={}){const{wrapper:e}={...l(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}function w(i,e){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{A as default};
