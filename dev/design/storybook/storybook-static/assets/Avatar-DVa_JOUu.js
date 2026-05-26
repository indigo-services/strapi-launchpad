import{j as e,M as t,a as i,A as h}from"./iframe-_cKE9r89.js";import{useMDXComponents as o}from"./index-BsQHpXCm.js";import{A as l,B as d,W as c,F as p,G as x}from"./Avatar.stories-DwfqMvCz.js";import{I as j}from"./Avatar-CJl94LmM.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./useControllableState-CIwy89gb.js";function a(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...s.components},{ViewSource:r}=n;return r||m("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(n.h1,{id:"avatar",children:"Avatar"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#variants",children:"Variants"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"Avatars are used to show a thumbnail of an asset or an individual."}),`
`,e.jsx(r,{path:"components/Avatar"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Avatar } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"basic-avatar",children:"Basic Avatar"}),`
`,e.jsxs(n.p,{children:[`The basic avatar is a simple image with a circular border, if the image fails to load then the fallout is shown instead
after a short delay that can be configured. The default delay is `,e.jsx(n.code,{children:"600ms"}),"."]}),`
`,e.jsx(i,{of:d}),`
`,e.jsx(n.h3,{id:"with-preview",children:"With Preview"}),`
`,e.jsxs(n.p,{children:["Useful for when the avatar is displaying assets as opposed to a user, supplying the ",e.jsx(n.code,{children:"preview"})," prop (a ",e.jsx(n.code,{children:"boolean"}),`) will
show the image in a tooltip when hovered. The `,e.jsx(n.code,{children:"preview"})," will never show if the main asset does not load."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h3,{id:"fallback",children:"Fallback"}),`
`,e.jsxs(n.p,{children:["When the image fails to load, the fallback is shown. In the example below we never provide a ",e.jsx(n.code,{children:"src"}),` prop, so knowing
there's no chance to even load the image, we also set `,e.jsx(n.code,{children:"delayMs"})," to be ",e.jsx(n.code,{children:"0"}),"."]}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"group",children:"Group"}),`
`,e.jsx(n.p,{children:"Avatars can be grouped together, when do so, they get closer to each other, but their interactions still work."}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"item",children:"Item"}),`
`,e.jsx(h,{of:j})]})}function A(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(a,{...s})}):a(s)}function m(s,n){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{A as default};
