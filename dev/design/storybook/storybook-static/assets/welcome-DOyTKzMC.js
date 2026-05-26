import{j as e,M as o}from"./iframe-_cKE9r89.js";import{useMDXComponents as i}from"./index-BsQHpXCm.js";import"./preload-helper-D6kgxu3v.js";function t(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Getting Started/Welcome"}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/getting-started/cover.png",alt:"Design System cover"})}),`
`,e.jsx("div",{style:{padding:"1rem"}}),`
`,e.jsx(n.h1,{id:"welcome",children:"Welcome"}),`
`,e.jsx(n.p,{children:`The Strapi Design System is a collection of standards, foundations, components & hooks to help anyone make Strapi's
contributions more cohesive and to build plugins more efficiently.`}),`
`,e.jsx(n.h2,{id:"our-approach",children:"Our approach"}),`
`,e.jsx(n.h3,{id:"consistency",children:"Consistency"}),`
`,e.jsx(n.p,{children:`The design-system we provide empowers individuals to build consistent experiences across the Strapi application. This
cohorent journey creates a more enjoyable experience for our users.`}),`
`,e.jsx(n.h3,{id:"composability",children:"Composability"}),`
`,e.jsx(n.p,{children:`Our APIs are designed to be flexible and composable, allowing you to build the experience you want. This is delivered
within the confines of Strapi's design styles. When adding new ones, think about how we can promote this flexibility
without complex prop drilling.`}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`$ yarn add react react-dom @strapi/design-system @strapi/icons styled-components

# or

$ npm i react react-dom @strapi/design-system @strapi/icons styled-components

# or

$ pnpm add react react-dom @strapi/design-system @strapi/icons styled-components
`})}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsxs(n.p,{children:["Wrap your application with the ",e.jsx(n.a,{href:"../?path=/docs/designsystemprovider--docs",children:e.jsx(n.code,{children:"DesignSystemProvider"})}),`. You can additionally
pass a theme and/or locale, although you don't have to as we have default values for both.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { DesignSystemProvider, lightTheme } from '@strapi/design-system';

function MyApp({ children }) {
  return (
    <DesignSystemProvider locale="en-GB" theme={lightTheme}>
      {children}
    </DesignSystemProvider>
  );
}

export default App;
`})}),`
`,e.jsx(n.h2,{id:"contributing--bug-reports",children:"Contributing & bug reports"}),`
`,e.jsx(n.p,{children:"We welcome contributions and clear bug reports. The fastest way to get started is:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Visit the ",e.jsx(n.a,{href:"https://github.com/strapi/design-system",rel:"nofollow",children:"GitHub repository"}),"."]}),`
`,e.jsxs(n.li,{children:["Read the ",e.jsx(n.a,{href:"../?path=/docs/getting-started-contributing--docs",children:"Contributing guide"})," for setup, branches, and checks."]}),`
`,e.jsxs(n.li,{children:["For bugs, open an issue with steps to reproduce, expected vs actual behavior, and screenshots if helpful: ",e.jsx(n.a,{href:"https://github.com/strapi/design-system/issues/new/choose",rel:"nofollow",children:"Create an issue"}),"."]}),`
`]})]})}function c(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{c as default};
