import{j as e,M as a,a as s,A as c}from"./iframe-_cKE9r89.js";import{useMDXComponents as r}from"./index-BsQHpXCm.js";import{A as l,B as d,V as h,W as p,a as m}from"./Alert.stories-BYBldjIY.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./AccessibleIcon-CYyZOlqW.js";function i(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components},{ViewSource:o}=n;return o||u("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsx(n.h1,{id:"alert",children:"Alert"}),`
`,e.jsx(n.p,{children:`Alerts are messages displayed over the content, at the top of the screen to give information to users. They have
multiple purposes and provide context.`}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Best practices"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The alert should be relevant to the page."}),`
`,e.jsx(n.li,{children:"Address a single piece of information or required action."}),`
`,e.jsx(n.li,{children:`Content of the alert should be concise and straightforward. Provide additional information on how to resolve the issue
if needed.`}),`
`,e.jsx(n.li,{children:"Alerts should be used thoughtfully and occasionally not to overwhelmed the users."}),`
`,e.jsx(n.li,{children:"Should not be used for marketing purposes."}),`
`]}),`
`,e.jsx(o,{path:"components/Alert"}),`
`,e.jsx(n.h2,{id:"imports",children:"Imports"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { Alert } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:`The most common button component used in the interface. Alerts have a title, a description, and two sizes. This default
one is aimed to give a small piece of text.`}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(n.h3,{id:"alert-variants",children:"Alert variants"}),`
`,e.jsxs(n.p,{children:["Use the variant prop to change the visual style of the Button. You can set the value to ",e.jsx(n.code,{children:"default"}),", ",e.jsx(n.code,{children:"success"}),", ",e.jsx(n.code,{children:"danger"}),`
or `,e.jsx(n.code,{children:"warning"}),"."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.p,{children:`| State               | Description                                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Default/Information | Use a default alert for an informational purpose. Examples: Latest update, a specific mode, ...                       |
| Success             | Use a success alert to indicate a successful action. Examples: Content has been saved, the locale has been added, ... |
| Danger              | Examples: Content has been saved, the locale has been added, ...                                                      |
| Warning             | Examples: A condition has occured that the user needs to be warned about, ...                                         |`}),`
`,e.jsx(n.h3,{id:"alert-with-action",children:"Alert with action"}),`
`,e.jsx(n.p,{children:`Alerts can contain an action. Via a Link component, they mostly encourage the user to be redirected to another page with
more information. The wording of the action should be clear and concise.`}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Alerts use a combination of icons and colors to show their purpose and level of importance."}),`
`,e.jsx(n.li,{children:"This is a visual component which does not implement toasted notification nor a live region."}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.p,{children:`The Alert component wraps all its children in the
(Box)[https://design-system-git-main-strapijs.vercel.app/?path=/docs/design-system-technical-components-box--base]
component, so you can pass all Box props to change its style.`}),`
`,e.jsx(c,{of:m})]})}function b(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}function u(t,n){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{b as default};
