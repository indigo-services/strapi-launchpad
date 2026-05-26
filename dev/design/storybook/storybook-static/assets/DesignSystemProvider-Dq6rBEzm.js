import{j as e,M as i,A as o,X as c}from"./iframe-_cKE9r89.js";import{useMDXComponents as t}from"./index-BsQHpXCm.js";import"./preload-helper-D6kgxu3v.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Utilities/DesignSystemProvider"}),`
`,e.jsx(n.h1,{id:"design-system-provider",children:"Design System Provider"}),`
`,e.jsxs(n.p,{children:["The root provider for your Design System components. An abstraction around ",e.jsx(n.code,{children:"styled-component"}),"'s ",e.jsx(n.code,{children:"ThemeProvider"}),` that
also includes `,e.jsx(n.code,{children:"GlobalStyles"}),` as well as an unique provider supplying values to components. You most likely won't need
this component unless you're creating a new app using the design-system (neat!).`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DesignSystemProvider } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h3,{id:"provider",children:"Provider"}),`
`,e.jsxs(n.p,{children:["Both locale & theme are optional, their default values are ",e.jsx(n.code,{children:"en-GB"})," & ",e.jsx(n.code,{children:"lightTheme"})," respectively also as seen below."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { DesignSystemProvider, lightTheme } from '@strapi/design-system';

const MyApp = () => (
  <DesignSystemProvider locale="en-GB" theme={lightTheme}>
    <App />
  </DesignSystemProvider>
);
`})}),`
`,e.jsx(n.h3,{id:"accessing-the-context",children:"Accessing the Context"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { useDesignSystem } from '@strapi/design-system';

const MyLocale = () => {
  const { locale } = useDesignSystem();

  return <p>{locale}</p>;
};
`})}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(n.h3,{id:"designsystemprovider",children:"DesignSystemProvider"}),`
`,e.jsx(o,{of:c})]})}function h(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{h as default};
