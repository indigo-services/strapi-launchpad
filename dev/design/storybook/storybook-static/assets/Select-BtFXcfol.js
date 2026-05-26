import{j as e,M as d,a as l,A as t}from"./iframe-_cKE9r89.js";import{useMDXComponents as s}from"./index-BsQHpXCm.js";import{A as i}from"./index-JVGtNO81.js";import{S as h,a,M as x,N as m}from"./Select.stories-D4KkZXmo.js";import"./preload-helper-D6kgxu3v.js";import"./index-BEk9yI-S.js";import"./index-DQIug_r8.js";import"./index-D_aoadGl.js";import"./index-CHWVjPu-.js";import"./index-BxBVU389.js";function c(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...s(),...o.components},{ViewSource:r}=n;return r||j("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:h}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsxs(n.p,{children:["Forked from ",e.jsx(n.code,{children:"@radix-ui/react-select"}),", we've added the ability to multi select."]}),`
`,e.jsxs(n.p,{children:["Displays a list of options for the user to pick from—triggered by an input or button. ",e.jsx("br",{}),` Alternatively, can be typed
into to filter the list of options and set an option assuming a match.`]}),`
`,e.jsx(r,{package:"primitives",path:"components/Select"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import { Select } from '@strapi/ui-primitives';
`})}),`
`,e.jsx(n.h3,{id:"single-item",children:"Single Item"}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(n.h3,{id:"mulitple-items",children:"Mulitple Items"}),`
`,e.jsx(l,{of:x}),`
`,e.jsx(n.h3,{id:"nested-items",children:"Nested Items"}),`
`,e.jsx(l,{of:m}),`
`,e.jsx(n.h2,{id:"anatomy",children:"Anatomy"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Select"})," primitive is composed of the following components:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Select.Root"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Select.Trigger"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Select.Value"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Select.Icon"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Select.Portal"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Select.Content"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Select.Viewport"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Select.Item"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Select.ItemText"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Select.ItemIndicator"})}),`
`]}),`
`,e.jsx(n.p,{children:"and is combined in the following way:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<Select.Root>
  <Select.Trigger>
    <Select.Value placeholder="Pick me" />
    <Select.Icon />
  </Select.Trigger>
  <Select.Portal>
    <Select.Content>
      <Select.Viewport>
        <Select.Item value="1">
          <Select.ItemText>Option 1</Select.ItemText>
          <Select.ItemIndicator>
            <Check />
          </Select.ItemIndicator>
        </Select.Item>
        <Select.NoValueFound>No value found</Select.NoValueFound>
        <Select.CreateItem>Create a new value</Select.CreateItem>
      </Select.Viewport>
    </Select.Content>
  </Select.Portal>
</Select.Root>
`})}),`
`,e.jsx(n.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(n.h3,{id:"root",children:"Root"}),`
`,e.jsx(t,{of:i.Root}),`
`,e.jsx(n.h3,{id:"trigger",children:"Trigger"}),`
`,e.jsx(t,{of:i.Trigger}),`
`,e.jsx(n.h3,{id:"value",children:"Value"}),`
`,e.jsx(t,{of:i.Value}),`
`,e.jsx(n.h3,{id:"icon",children:"Icon"}),`
`,e.jsx(t,{of:i.Icon}),`
`,e.jsx(n.h3,{id:"portal",children:"Portal"}),`
`,e.jsx(t,{of:i.Portal}),`
`,e.jsx(n.h3,{id:"content",children:"Content"}),`
`,e.jsx(t,{of:i.Content}),`
`,e.jsx(n.h3,{id:"viewport",children:"Viewport"}),`
`,e.jsx(t,{of:i.Viewport}),`
`,e.jsx(n.h3,{id:"item",children:"Item"}),`
`,e.jsx(t,{of:i.Item}),`
`,e.jsx(n.h3,{id:"itemtext",children:"ItemText"}),`
`,e.jsx(t,{of:i.ItemText}),`
`,e.jsx(n.h3,{id:"itemindicator",children:"ItemIndicator"}),`
`,e.jsx(t,{of:i.ItemIndicator}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Adheres to the ",e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/listbox/",rel:"nofollow",children:"ListBox WAI-ARIA design pattern"}),"."]}),`
`,e.jsxs(n.p,{children:["See the W3C ",e.jsx(n.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/",rel:"nofollow",children:"Select-Only Combobox"}),`
example for more information.`]})]})}function C(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}function j(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{C as default};
