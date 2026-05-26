import{j as e,M as s,a as d}from"./iframe-_cKE9r89.js";import{useMDXComponents as t}from"./index-BsQHpXCm.js";import{D as h,C as c}from"./Dialog.stories-lCdhFiBD.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./setOpacity-B50hv1Ur.js";import"./index-JVGtNO81.js";import"./index-BEk9yI-S.js";import"./index-DQIug_r8.js";import"./index-D_aoadGl.js";import"./index-CHWVjPu-.js";import"./Button-BvqyPouE.js";import"./utils-qgCRrxX8.js";import"./Field-Cwhta1v_.js";import"./useComposeRefs-BPjCxrPe.js";import"./useId-BMWvqHJO.js";import"./AccessibleIcon-CYyZOlqW.js";import"./SingleSelect-CFTa6hkl.js";import"./useIntersection-BvDycFkB.js";import"./input-BS9krbKO.js";import"./IconButton-Uvk00hK3.js";import"./Loader-B5HLgo8O.js";import"./ScrollArea-E5LdgMvt.js";import"./Radio-BpM9oplW.js";import"./index-CmgM1aMT.js";function r(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...i.components},{ViewSource:o}=n;return o||a("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(s,{of:h}),`
`,e.jsx(n.h1,{id:"dialog",children:"Dialog"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#variants",children:"Variants"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#accessibility",children:"Accessibility"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(n.p,{children:[`A dialog that interrupts the user with important content and expects a response. Typically, you would prefer the
`,e.jsx(n.a,{href:"../?path=/docs/components-modal--docs",children:"Modal"})," component to interact with users."]}),`
`,e.jsx(o,{path:"components/Dialog"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Dialog } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"reactnode-as-children",children:"ReactNode as Children"}),`
`,e.jsxs(n.p,{children:["Most use-cases you'd only need to provide a ",e.jsx(n.code,{children:"string"})," as the ",e.jsx(n.code,{children:"child"})," of ",e.jsx(n.code,{children:"Dialog.Body"}),`. But if you need to create a more
complex dialog then you can provide a `,e.jsx(n.code,{children:"ReactNode"})," as the ",e.jsx(n.code,{children:"child"})," of ",e.jsx(n.code,{children:"Dialog.Body"}),`. If you do this, you should use the
`,e.jsx(n.code,{children:"Dialog.Description"})," component to wrap the text of your dialog content."]}),`
`,e.jsx(d,{of:c}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:[`Adheres to the
`,e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog",rel:"nofollow",children:"Alert and Message Dialogs WAI-ARIA design pattern"}),"."]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"trigger",children:"Trigger"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Trigger"})," component permanently has the ",e.jsx(n.code,{children:"asChild"}),` prop meaning it will always render the child merging the props &
behaviour of the component.`]}),`
`,e.jsx(n.h3,{id:"content",children:"Content"}),`
`,e.jsx(n.h3,{id:"header",children:"Header"}),`
`,e.jsx(n.h3,{id:"body",children:"Body"}),`
`,e.jsx(n.p,{children:"This component is not mandatory to use, but does have inbuilt styles for the recommended padding around the content."}),`
`,e.jsx(n.h3,{id:"description",children:"Description"}),`
`,e.jsxs(n.p,{children:["If you provide something other than a ",e.jsx(n.code,{children:"string"})," as the ",e.jsx(n.code,{children:"child"})," of ",e.jsx(n.code,{children:"Dialog.Body"}),` you should use this component. Otherwise,
it's not required & we use it internally for said `,e.jsx(n.code,{children:"child"}),"."]}),`
`,e.jsx(n.h3,{id:"footer",children:"Footer"}),`
`,e.jsx(n.h3,{id:"action",children:"Action"}),`
`,e.jsxs(n.p,{children:["Use this to wrap the buttons that act as confirmations of the dialog. It permanently has the ",e.jsx(n.code,{children:"asChild"}),` prop meaning it
will always render the child merging the props & behaviour of the component.`]}),`
`,e.jsx(n.h3,{id:"cancel",children:"Cancel"}),`
`,e.jsxs(n.p,{children:["Use this to wrap the buttons that act as the cancelling of the dialog action. It permanently has the ",e.jsx(n.code,{children:"asChild"}),` prop
meaning it will always render the child merging the props & behaviour of the component.`]})]})}function S(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(r,{...i})}):r(i)}function a(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{S as default};
