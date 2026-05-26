import{j as e,M as l,a as o,A as a}from"./iframe-_cKE9r89.js";import{useMDXComponents as s}from"./index-BsQHpXCm.js";import{M as h,B as d,H as c,S as p,C as m}from"./Modal.stories-CABt6Lwi.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./setOpacity-B50hv1Ur.js";import"./index-JVGtNO81.js";import"./index-BEk9yI-S.js";import"./index-DQIug_r8.js";import"./index-D_aoadGl.js";import"./index-CHWVjPu-.js";import"./IconButton-Uvk00hK3.js";import"./utils-qgCRrxX8.js";import"./AccessibleIcon-CYyZOlqW.js";import"./ScrollArea-E5LdgMvt.js";import"./Button-BvqyPouE.js";import"./Grid-spcvu4bJ.js";import"./Field-Cwhta1v_.js";import"./useComposeRefs-BPjCxrPe.js";import"./useId-BMWvqHJO.js";import"./Checkbox-0fdbGYKe.js";import"./useControllableState-CIwy89gb.js";import"./DatePicker-DeFJ8sXv.js";import"./useDateFormatter-CB3rShP6.js";import"./input-BS9krbKO.js";import"./index-C8px2K5Y.js";import"./SingleSelect-CFTa6hkl.js";import"./useIntersection-BvDycFkB.js";import"./Loader-B5HLgo8O.js";import"./Portal-DW4SEpes.js";import"./TimePicker-DZj-LHYv.js";import"./Combobox-CvQql6sE.js";function t(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...i.components},{ViewSource:r}=n;return r||x("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(l,{of:h}),`
`,e.jsx(n.h1,{id:"modallayout",children:"ModalLayout"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#variants",children:"Variants"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#accessibility",children:"Accessibility"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#patterns",children:"Patterns"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:"A window overlaid on either the primary window or another modal window, rendering the content underneath inert."}),`
`,e.jsx(r,{path:"components/Modal"}),`
`,e.jsx(o,{of:d}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Modal } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"root",children:"Root"}),`
`,e.jsx(n.h3,{id:"trigger",children:"Trigger"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Trigger"})," component permanently has the ",e.jsx(n.code,{children:"asChild"}),` prop meaning it will always render the child merging the props &
behaviour of the component.`]}),`
`,e.jsx(n.h3,{id:"content",children:"Content"}),`
`,e.jsx(n.h3,{id:"close",children:"Close"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Close"})," component permanently has the ",e.jsx(n.code,{children:"asChild"}),` prop meaning it will always render the child merging the props &
behaviour of the component.`]}),`
`,e.jsx(n.h3,{id:"header",children:"Header"}),`
`,e.jsx(a,{of:c}),`
`,e.jsx(n.h3,{id:"body",children:"Body"}),`
`,e.jsx(n.p,{children:`This component is not mandatory to use, but does have inbuilt styles for the recommended padding around the content of
the modal as well as a scrollable container.`}),`
`,e.jsx(n.h3,{id:"footer",children:"Footer"}),`
`,e.jsx(n.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(n.h3,{id:"scrolling",children:"Scrolling"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Modal"})," has a maximum height, when that is hit the content inside will scroll."]}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Adheres to the ",e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal",rel:"nofollow",children:"Dialog WAI-ARIA design pattern"}),"."]}),`
`,e.jsx(n.h2,{id:"patterns",children:"Patterns"}),`
`,e.jsx(n.h3,{id:"closing-after-async-action",children:"Closing after async action"}),`
`,e.jsxs(n.p,{children:[`A typical use of a modal in Strapi is to show a small form to the user, as such, the form should be submitted before the
modal is closed and likewise, assuming success, you'd expect the modal to close. If you wrap the `,e.jsx(n.code,{children:"confirm"}),` button in
`,e.jsx(n.code,{children:"Modal.Close"})," it will automatically close the modal on click, not awaiting the async action."]}),`
`,e.jsx(n.p,{children:"Therefore, to manage this you should control the modal programatically to close only on success of the async action."}),`
`,e.jsx(o,{of:m})]})}function G(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}function x(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{G as default};
