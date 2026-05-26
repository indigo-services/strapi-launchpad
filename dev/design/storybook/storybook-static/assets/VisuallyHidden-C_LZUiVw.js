import{j as e,M as r}from"./iframe-_cKE9r89.js";import{useMDXComponents as o}from"./index-BsQHpXCm.js";import"./preload-helper-D6kgxu3v.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...i.components},{ViewSource:s}=n;return s||l("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Utilities/Visually Hidden",parameters:{viewMode:"docs"}}),`
`,e.jsx(n.h1,{id:"visually-hidden",children:"Visually Hidden"}),`
`,e.jsx(n.p,{children:"Hides content from the screen in an accessible way."}),`
`,e.jsx(s,{path:"utilities/VisuallyHidden"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { VisuallyHidden } from '@strapi/design-system';
import { Cross } from '@strapi/icons';

const CloseButton = ({ onClose }) => {
  return (
    <button onClick={onClose}>
      <Cross />
      <VisuallyHidden>Close</VisuallyHidden>
    </button>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"This is useful in certain scenarios as an alternative to traditional labelling with aria-label or aria-labelledby."})]})}function u(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}function l(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{u as default};
