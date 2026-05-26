import{j as e,M as i,C as c,a as l}from"./iframe-_cKE9r89.js";import{useMDXComponents as r}from"./index-BsQHpXCm.js";import{I as a,A as t}from"./Icons.stories-p6w2UkFA.js";import"./preload-helper-D6kgxu3v.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a,name:"Docs"}),`
`,e.jsx(n.h1,{id:"icons",children:"Icons"}),`
`,e.jsxs(n.p,{children:["They by default, do not have a ",e.jsx(n.code,{children:"width"})," or ",e.jsx(n.code,{children:"height"})," set, but the default viewBox is set to ",e.jsx(n.code,{children:"0 0 32 32"}),` which means they
will scale to fit the parent container whatever that may be. The default `,e.jsx(n.code,{children:"fill"})," is ",e.jsx(n.code,{children:"currentColor"}),` meaning they will
inherit the `,e.jsx(n.code,{children:"color"})," of the parent container. It's not advised to overwrite the ",e.jsx(n.code,{children:"viewBox"})," property."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ICON_NAME } from '@strapi/icons';

const MyComponent = () => {
  return <ICON_NAME fill="primary700" />;
};
`})}),`
`,e.jsxs(n.p,{children:["All ",e.jsx(n.code,{children:"SVGProps"})," are accepted with ",e.jsx(n.code,{children:"fill"})," & ",e.jsx(n.code,{children:"stroke"}),` being enhanced to support either theme colors or regular string
values as expected.`]}),`
`,e.jsx(n.h2,{id:"all-icons",children:"All Icons"}),`
`,e.jsx(n.p,{children:"Click on an icon to copy it's import statement."}),`
`,e.jsx(c,{of:t}),`
`,e.jsx(l,{of:t})]})}function j(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{j as default};
