import{j as e,M as l}from"./iframe-_cKE9r89.js";import{useMDXComponents as t}from"./index-BsQHpXCm.js";import"./preload-helper-D6kgxu3v.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components},{ViewSource:r}=n;return r||o("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Utilities/Helpers",parameters:{viewMode:"docs"}}),`
`,e.jsx(n.h1,{id:"helpers",children:"Helpers"}),`
`,e.jsx(n.p,{children:"Several utility functions and constants are exported from the design system for use in your projects. Use them to ensure consistency of styling and behavior with the design system (e.g. theme tokens, responsive values, keyboard keys, reduce opacity of a hex color code)."}),`
`,e.jsx(r,{path:"helpers"}),`
`,e.jsx(n.h2,{id:"import",children:"Import"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
  setOpacity,
  handleResponsiveValues,
  KeyboardKeys,
  extractStyleFromTheme,
  type ResponsiveProps,
  type Breakpoint,
} from '@strapi/design-system';
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"setopacity",children:"setOpacity"}),`
`,e.jsx(n.p,{children:"Returns a hex color string with the given opacity (alpha) applied. Useful for overlays, disabled states, or any semi-transparent UI that should stay on brand."}),`
`,e.jsx(n.h3,{id:"signature",children:"Signature"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`setOpacity(hex: string, alpha: number): string
`})}),`
`,e.jsx(n.h3,{id:"parameters",children:"Parameters"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"hex"})," (string) – A hex color (e.g. ",e.jsx(n.code,{children:"#000000"})," or ",e.jsx(n.code,{children:"#abc"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"alpha"})," (number) – Opacity from 0 to 1 (e.g. ",e.jsx(n.code,{children:"0.5"})," for 50% opacity)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"example",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { setOpacity } from '@strapi/design-system';

// In a styled-component or CSS-in-JS
const Overlay = styled.div\`
  background: \${({ theme }) => setOpacity(theme.colors.neutral800, 0.2)};
\`;
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"handleresponsivevalues",children:"handleResponsiveValues"}),`
`,e.jsxs(n.p,{children:["Takes an object of responsive props (spacing, layout, typography, etc.) and the theme, and returns a string of CSS (including media queries) that you can inject into styled-components or any CSS-in-JS solution. Supports breakpoints: ",e.jsx(n.code,{children:"initial"}),", ",e.jsx(n.code,{children:"small"}),", ",e.jsx(n.code,{children:"medium"}),", ",e.jsx(n.code,{children:"large"}),"."]}),`
`,e.jsx(n.h3,{id:"signature-1",children:"Signature"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`handleResponsiveValues(values: ResponsiveProps, theme: DefaultTheme): string
`})}),`
`,e.jsx(n.h3,{id:"parameters-1",children:"Parameters"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"values"})," (ResponsiveProps) – Object of CSS-related props; values can be theme tokens or responsive objects (e.g. initial: 2, large: 4)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"theme"})," (DefaultTheme) – Strapi theme (e.g. from ",e.jsx(n.code,{children:"useTheme()"})," or ",e.jsx(n.code,{children:"props.theme"})," in styled-components)"]}),`
`]}),`
`,e.jsx(n.h3,{id:"responsive-value-shape",children:"Responsive value shape"}),`
`,e.jsx(n.p,{children:"A property can be a single value (used as the initial value) or an object keyed by breakpoint:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// Single value
padding: 2

// Responsive object
padding: { initial: 1, medium: 2, large: 4 }
`})}),`
`,e.jsx(n.h3,{id:"exported-types",children:"Exported types"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ResponsiveProps"})," – Props object accepted by ",e.jsx(n.code,{children:"handleResponsiveValues"})," (spacing, layout, typography, etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Breakpoint"})," – ",e.jsx(n.code,{children:"'initial' | 'small' | 'medium' | 'large'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ResponsiveProperty<T>"})," – A value or object keyed by breakpoint"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ResponsiveThemeProperty"})," – Theme-aware responsive property type"]}),`
`]}),`
`,e.jsx(n.h3,{id:"example-1",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { handleResponsiveValues } from '@strapi/design-system';
import styled from 'styled-components';

const Card = styled.div\`
  \${({ theme }) =>
    handleResponsiveValues(
      {
        padding: { initial: 2, medium: 4, large: 6 },
        marginBottom: 4,
      },
      theme,
    )}
\`;
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"keyboardkeys",children:"KeyboardKeys"}),`
`,e.jsx(n.p,{children:"An object of common keyboard key values. Use it when handling keyboard events so you compare against stable string values instead of magic strings."}),`
`,e.jsx(n.h3,{id:"keys",children:"Keys"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DOWN"})," – ",e.jsx(n.code,{children:"'ArrowDown'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"UP"})," – ",e.jsx(n.code,{children:"'ArrowUp'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"RIGHT"})," – ",e.jsx(n.code,{children:"'ArrowRight'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"LEFT"})," – ",e.jsx(n.code,{children:"'ArrowLeft'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ESCAPE"})," – ",e.jsx(n.code,{children:"'Escape'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ENTER"})," – ",e.jsx(n.code,{children:"'Enter'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"SPACE"})," – ",e.jsx(n.code,{children:"' '"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TAB"})," – ",e.jsx(n.code,{children:"'Tab'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"END"})," – ",e.jsx(n.code,{children:"'End'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HOME"})," – ",e.jsx(n.code,{children:"'Home'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DELETE"})," – ",e.jsx(n.code,{children:"'Delete'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PAGE_UP"})," – ",e.jsx(n.code,{children:"'PageUp'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"PAGE_DOWN"})," – ",e.jsx(n.code,{children:"'PageDown'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"BACKSPACE"})," – ",e.jsx(n.code,{children:"'Backspace'"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CLEAR"})," – ",e.jsx(n.code,{children:"'Clear'"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"example-2",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { KeyboardKeys } from '@strapi/design-system';

const handleKeyDown = (event: React.KeyboardEvent) => {
  if (event.key === KeyboardKeys.ESCAPE) {
    onClose();
  }
  if (event.key === KeyboardKeys.ENTER || event.key === KeyboardKeys.SPACE) {
    event.preventDefault();
    onSubmit();
  }
};
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"extractstylefromtheme",children:"extractStyleFromTheme"}),`
`,e.jsxs(n.p,{children:["Looks up a value from a theme section (e.g. ",e.jsx(n.code,{children:"theme.colors"}),", ",e.jsx(n.code,{children:"theme.spaces"}),") by key and returns the resolved style value, or the default if the key is missing or invalid. Use it when building custom styled components that should respect theme tokens."]}),`
`,e.jsx(n.h3,{id:"signature-2",children:"Signature"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`extractStyleFromTheme<TKey, TSection>(
  themeSection: TSection | null | undefined,
  key: string | number | symbol | undefined,
  defaultValue: any
): string | number
`})}),`
`,e.jsx(n.h3,{id:"parameters-2",children:"Parameters"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"themeSection"})," (object) – A slice of the theme (e.g. ",e.jsx(n.code,{children:"theme.colors"}),", ",e.jsx(n.code,{children:"theme.spaces"}),", ",e.jsx(n.code,{children:"theme.borderRadius"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"key"})," (string, number or symbol) – The token key to look up (e.g. ",e.jsx(n.code,{children:"'neutral800'"}),", ",e.jsx(n.code,{children:"2"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"defaultValue"})," (any) – Value to return when the key is not found in the section"]}),`
`]}),`
`,e.jsx(n.h3,{id:"example-3",children:"Example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { extractStyleFromTheme } from '@strapi/design-system';

const Badge = styled.span\`
  background: \${({ theme }) =>
    extractStyleFromTheme(theme.colors, 'primary600', theme.colors.primary600)};
  padding: \${({ theme }) =>
    extractStyleFromTheme(theme.spaces, 1, '4px')};
  border-radius: \${({ theme }) =>
    extractStyleFromTheme(theme.borderRadius, 1, '4px')};
\`;
`})})]})}function h(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}function o(s,n){throw new Error("Expected component `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}export{h as default};
