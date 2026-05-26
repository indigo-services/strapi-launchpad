import{j as e,M as a,a as r}from"./iframe-_cKE9r89.js";import{useMDXComponents as i}from"./index-BsQHpXCm.js";import{C as d,B as c,W as h,a as l,b as p,c as m,K as x}from"./Card.stories--Qa22eSw.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./useId-BMWvqHJO.js";import"./Checkbox-0fdbGYKe.js";import"./index-CHWVjPu-.js";import"./useComposeRefs-BPjCxrPe.js";import"./useControllableState-CIwy89gb.js";import"./Badge-D-JmP-9P.js";import"./keyboardKeys-DO3xpnD3.js";import"./IconButton-Uvk00hK3.js";import"./utils-qgCRrxX8.js";import"./AccessibleIcon-CYyZOlqW.js";function s(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components},{ViewSource:o}=n;return o||j("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(n.h1,{id:"card",children:"Card"}),`
`,e.jsx(n.p,{children:"Cards are used to gather a set of information that needs to stand out from the rest of the page."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Best practices"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Content within the Card is mostly optional. Pick up what is needed."}),`
`,e.jsx(n.li,{children:"Content can be added to the Card. Keep in mind that spacings are important in a Card component."}),`
`,e.jsx(n.li,{children:"Main text is truncated at the end of the first line."}),`
`,e.jsx(n.li,{children:"Prioritize content within the Card so users know exactly what are the main information."}),`
`,e.jsx(n.li,{children:"If Call-to-Actions are used, they should be placed at the bottom of the Card."}),`
`]}),`
`,e.jsx(o,{path:"components/Card"}),`
`,e.jsx(n.h2,{id:"imports",children:"Imports"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import {
  Card,
  CardHeader,
  CardBody,
  CardCheckbox,
  CardAction,
  CardAsset,
  CardTimer,
  CardContent,
  CardBadge,
  CardTitle,
  CardSubtitle,
} from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"Cards are used to gather a set of related information."}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h2,{id:"card-without-asset-action",children:"Card without asset action"}),`
`,e.jsxs(n.p,{children:["Cards can be used without actions by removing the ",e.jsx(n.code,{children:"CardAction"})," block."]}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(n.h2,{id:"card-with-asset-icon",children:"Card with asset icon"}),`
`,e.jsx(n.p,{children:"The image asset can be replaced by an icon."}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(n.h2,{id:"card-without-asset-action-nor-timer",children:"Card without asset action nor timer"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"CardTimer"})," can be removed as well as the ",e.jsx(n.code,{children:"CardAction"})," block."]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"card-without-asset",children:"Card without asset"}),`
`,e.jsxs(n.p,{children:["If no ",e.jsx(n.code,{children:"CardHeader"})," is present, the card will display a version with the body only."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h2,{id:"card-keyboard-navigable",children:"Card keyboard navigable"}),`
`,e.jsxs(n.p,{children:["You wrap the Card in a ",e.jsx(n.code,{children:"KeyboardNavigable"})," block to ensure it can be scanned using the keyboard."]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.p,{children:[`The Card, CardBody, CardHeader, and CardContent components wraps all their children in the
`,e.jsx(n.a,{href:"https://design-system-git-main-strapijs.vercel.app/?path=/docs/design-system-technical-components-box--base",rel:"nofollow",children:"Box"}),`
component, so you can pass all Box props to change their style.`]})]})}function K(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}function j(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{K as default};
