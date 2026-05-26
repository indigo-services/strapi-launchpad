import{j as e,M as d,a as i,C as l}from"./iframe-_cKE9r89.js";import{useMDXComponents as t}from"./index-BsQHpXCm.js";import{N as c,B as a,L as h,D as p,S as m,W as x}from"./NumberInput.stories-BE7JEOGo.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./index-JVGtNO81.js";import"./index-BEk9yI-S.js";import"./index-DQIug_r8.js";import"./index-D_aoadGl.js";import"./index-CHWVjPu-.js";import"./keyboardKeys-DO3xpnD3.js";import"./useControllableState-CIwy89gb.js";import"./Field-Cwhta1v_.js";import"./useComposeRefs-BPjCxrPe.js";import"./useId-BMWvqHJO.js";import"./AccessibleIcon-CYyZOlqW.js";function o(r){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...r.components},{ViewSource:s}=n;return s||u("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsx(n.h1,{id:"numberinput",children:"NumberInput"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#variants",children:"Variants"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"Number inputs allow users to add or edit numbers. They support several number formats."}),`
`,e.jsx(s,{path:"components/NumberInput"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { NumberInput } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"basic",children:"Basic"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h3,{id:"with-locale",children:"With locale"}),`
`,e.jsxs(n.p,{children:["Different locales format numbers in distinct ways. For example, in the US (locale: ",e.jsx(n.code,{children:"en-US"}),"), the number ",e.jsx(n.code,{children:"1000.5"}),` is
displayed as `,e.jsx(n.code,{children:"1,000.5"}),", while in France (locale: ",e.jsx(n.code,{children:"fr-FR"}),"), the same number is displayed as ",e.jsx(n.code,{children:"1 000,5"}),`. The
`,e.jsx(n.code,{children:"NumberFormatter"}),` uses the locale to ensure the displayed value in the input field is consistent with regional
conventions. When users input numbers, the `,e.jsx(n.code,{children:"NumberParser"}),` will interpret the input according to the locale. For example,
if the user enters `,e.jsx(n.code,{children:"1.000,5"})," in a French locale, the parser understands that , is the decimal separator."]}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(i,{of:p}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsxs(n.p,{children:["There are two options for sizes, ",e.jsx(n.code,{children:'"S"'})," or ",e.jsx(n.code,{children:'"M"'}),", the default is ",e.jsx(n.code,{children:'"M"'}),"."]}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"numberinput-field",children:"NumberInput Field"}),`
`,e.jsxs(n.p,{children:["NumberInput wrapped with ",e.jsx(n.a,{href:"../?path=/docs/components-field--docs",children:e.jsx(n.code,{children:"Field"})})," component"]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(l,{})]})}function V(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}function u(r,n){throw new Error("Expected component `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{V as default};
