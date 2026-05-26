import{j as e,M as r,b as l}from"./iframe-_cKE9r89.js";import{useMDXComponents as t}from"./index-BsQHpXCm.js";import"./preload-helper-D6kgxu3v.js";function s(n){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Primitives/Overview",parameters:{viewMode:"docs"}}),`
`,e.jsx(l,{children:"Overview"}),`
`,e.jsx(i.h2,{id:"what-are-primitives",children:"What are Primitives?"}),`
`,e.jsxs(i.p,{children:["Primitives in the Strapi Design System are ",e.jsx(i.strong,{children:"low-level, accessible UI components"}),` that serve as building blocks for
more complex interface elements. These components provide essential functionality and behavioral patterns while
maintaining maximum flexibility for customization.`]}),`
`,e.jsx(i.h2,{id:"key-characteristics",children:"Key Characteristics"}),`
`,e.jsx(i.h3,{id:"built-on-radix-ui",children:"Built on Radix UI"}),`
`,e.jsxs(i.p,{children:["Our primitives are forked and extended from ",e.jsx(i.a,{href:"https://www.radix-ui.com/",rel:"nofollow",children:"Radix UI"})," primitives, ensuring:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Accessibility by default"})," - Full keyboard navigation, screen reader support, and ARIA compliance"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Unstyled foundations"})," - Behavior without imposed visual design"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Composable architecture"})," - Mix and match components to build complex interfaces"]}),`
`]}),`
`,e.jsx(i.h3,{id:"enhanced-for-strapi",children:"Enhanced for Strapi"}),`
`,e.jsx(i.p,{children:"While maintaining Radix UI's core principles, our primitives add:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Additional functionality"})," - Extended features like multi-select capabilities"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Strapi-specific optimizations"})," - Tailored for content management use cases"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Consistent APIs"})," - Unified patterns across all primitive components"]}),`
`]}),`
`,e.jsx(i.h2,{id:"available-primitives",children:"Available Primitives"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.a,{href:"../?path=/docs/primitives-select--docs",children:"Select"})})," - Dropdown selection with single and multi-select support"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.a,{href:"../?path=/docs/primitives-combobox--docs",children:"Combobox"})})," - Searchable dropdown with filtering and custom input"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:e.jsx(i.a,{href:"../?path=/docs/primitives-baselink--docs",children:"BaseLink"})})," - Foundation for all link-based navigation components"]}),`
`]}),`
`,e.jsx(i.h2,{id:"when-to-use-primitives",children:"When to Use Primitives"}),`
`,e.jsx(i.p,{children:"Primitives are ideal when you need:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Maximum customization control"})," over styling and behavior"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Complex interaction patterns"})," not covered by standard components"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Building custom components"})," that integrate seamlessly with the design system"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Accessibility-first solutions"})," with minimal overhead"]}),`
`]}),`
`,e.jsx(i.h2,{id:"usage-pattern",children:"Usage Pattern"}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-tsx",children:`import { Select } from '@strapi/ui-primitives';

// Primitives provide the structure and behavior
<Select.Root>
  <Select.Trigger>
    <Select.Value />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value="option1">Option 1</Select.Item>
    <Select.Item value="option2">Option 2</Select.Item>
  </Select.Content>
</Select.Root>;
`})}),`
`,e.jsxs(i.p,{children:["Most users will prefer the higher-level components from ",e.jsx(i.code,{children:"@strapi/design-system"}),` which wrap these primitives with
Strapi's visual design and simplified APIs.`]})]})}function d(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{d as default};
