import{j as e,M as t,A as r}from"./iframe-_cKE9r89.js";import{useMDXComponents as c}from"./index-BsQHpXCm.js";import{A as l}from"./AccessibleIcon-CYyZOlqW.js";import"./preload-helper-D6kgxu3v.js";function i(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...n.components},{ViewSource:o}=s;return o||a("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Utilities/Accessible Icon",parameters:{viewMode:"docs"}}),`
`,e.jsx(s.h1,{id:"accessible-icon",children:"Accessible Icon"}),`
`,e.jsx(s.p,{children:"Makes icons accessible by adding a label."}),`
`,e.jsx(o,{path:"utilities/AccessibleIcon"}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { AccessibleIcon } from '@strapi/design-system';
import { Cross } from '@strapi/icons';

const CloseButton = ({ onClose }) => {
  return (
    <button onClick={onClose}>
      <AccessibleIcon label="Close">
        <Cross />
      </AccessibleIcon>
    </button>
  );
};
`})}),`
`,e.jsx(s.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(s.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(s.p,{children:`Most icons or icon systems come with no accessibility built-in. For example, the same visual cross icon may in fact mean
"close" or "delete". This component lets you give meaning to icons used throughout your app.`}),`
`,e.jsxs(s.p,{children:["This is built with ",e.jsx(s.a,{href:"../?path=/docs/utilities-visually-hidden--docs",children:"Visually Hidden"}),"."]})]})}function u(n={}){const{wrapper:s}={...c(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}function a(n,s){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{u as default};
