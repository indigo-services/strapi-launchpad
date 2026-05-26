import{j as o,M as d,a as n,A as i}from"./iframe-_cKE9r89.js";import{useMDXComponents as c}from"./index-BsQHpXCm.js";import{R as s}from"./index-JVGtNO81.js";import{C as a,B as h,L as x,a as m,b,c as p}from"./Combobox.stories-CPs_CBOT.js";import"./preload-helper-D6kgxu3v.js";import"./index-BEk9yI-S.js";import"./index-DQIug_r8.js";import"./index-D_aoadGl.js";import"./index-CHWVjPu-.js";import"./index-BxBVU389.js";function l(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...t.components},{ViewSource:r}=e;return r||j("ViewSource"),o.jsxs(o.Fragment,{children:[o.jsx(d,{of:a}),`
`,o.jsx(e.h1,{id:"combobox",children:"Combobox"}),`
`,o.jsxs(e.p,{children:["Displays a list of options for the user to pick from—triggered by an input or button. ",o.jsx("br",{}),` Alternatively, can be typed
into to filter the list of options and set an option assuming a match.`]}),`
`,o.jsx(r,{package:"primitives",path:"components/Combobox"}),`
`,o.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-ts",children:`import { Combobox } from '@strapi/ui-primitives';
`})}),`
`,o.jsx(e.h3,{id:"single-item",children:"Single Item"}),`
`,o.jsx(n,{of:h}),`
`,o.jsx(e.h3,{id:"with-list-autocomplete",children:"With List Autocomplete"}),`
`,o.jsxs(e.p,{children:["Default ",o.jsx(e.code,{children:'autocomplete="list"'}),` filters text by matching starting character, recently we have introduced filter by options
`,o.jsx(e.code,{children:"startsWith"}),",",o.jsx(e.code,{children:"contains"}),", so we can also say ",o.jsx(e.code,{children:"autocomplete={{type: 'list', filter: 'startsWith'}}"})]}),`
`,o.jsx(n,{of:x}),`
`,o.jsx(e.h3,{id:"with-list-autocomplete-contains",children:'With List Autocomplete "contains"'}),`
`,o.jsxs(e.p,{children:["To filter list by substring value we have ",o.jsx(e.code,{children:"autocomplete={{type: 'list', filter: 'contains'}}"})]}),`
`,o.jsx(n,{of:m}),`
`,o.jsx(e.h3,{id:"with-both-autocomplete",children:"With Both Autocomplete"}),`
`,o.jsxs(e.p,{children:["For ",o.jsx(e.code,{children:'autocomplete = "both"'}),", only default filter is available ",o.jsx(e.code,{children:"autocomplete={{type: 'both', filter: 'startsWith'}}"}),`,
filter by `,o.jsx(e.code,{children:"contains"})," is not supported."]}),`
`,o.jsxs(e.p,{children:["NOTE! If you opt to control the ",o.jsx(e.code,{children:"textValue"})," yourself whilst using ",o.jsx(e.code,{children:'autocomplete === "both"'}),` e.g. to add a clear button,
then you will also need to control the `,o.jsx(e.code,{children:"filterValue"})," as well."]}),`
`,o.jsx(n,{of:b}),`
`,o.jsx(e.h3,{id:"create-custom-values",children:"Create Custom Values"}),`
`,o.jsxs(e.p,{children:["This would include the rendering logic for when to show the ",o.jsx(e.code,{children:"Create new item"}),` however, it's up to you in how you decide
to handle the rest e.g. selecting that option will set the value accordingly but it will not add it as a new option per
say because you haven't added it as a `,o.jsx(e.code,{children:"Combobox.Item"}),", therefore it's advised you listen to the ",o.jsx(e.code,{children:"onValueChange"}),` and
handle this appropriately.`]}),`
`,o.jsx(n,{of:p}),`
`,o.jsx(e.h2,{id:"anatomy",children:"Anatomy"}),`
`,o.jsxs(e.p,{children:["The ",o.jsx(e.code,{children:"Combobox"})," primitive is composed of the following components:"]}),`
`,o.jsxs(e.ul,{children:[`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"Combobox.Root"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"Combobox.Trigger"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"Combobox.TextInput"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"Combobox.Icon"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"Combobox.Portal"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"Combobox.Content"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"Combobox.Viewport"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"Combobox.Item"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"Combobox.ItemText"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"Combobox.ItemIndicator"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"Combobox.NoValueFound"})}),`
`,o.jsx(e.li,{children:o.jsx(e.code,{children:"Combobox.CreateItem"})}),`
`]}),`
`,o.jsx(e.p,{children:"and is combined in the following way:"}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`<Combobox.Root>
  <Combobox.Trigger>
    <Combobox.TextInput placeholder="Pick me" />
    <Combobox.Icon />
  </Combobox.Trigger>
  <Combobox.Portal>
    <Combobox.Content>
      <Combobox.Viewport>
        <Combobox.Item value="1">
          <Combobox.ItemText>Option 1</Combobox.ItemText>
          <Combobox.ItemIndicator>
            <Check />
          </Combobox.ItemIndicator>
        </Combobox.Item>
        <Combobox.NoValueFound>No value found</Combobox.NoValueFound>
        <Combobox.CreateItem>Create a new value</Combobox.CreateItem>
      </Combobox.Viewport>
    </Combobox.Content>
  </Combobox.Portal>
</Combobox.Root>
`})}),`
`,o.jsx(e.h2,{id:"api-reference",children:"API Reference"}),`
`,o.jsx(e.h3,{id:"root",children:"Root"}),`
`,o.jsx(i,{of:s.Root}),`
`,o.jsx(e.h3,{id:"portal",children:"Portal"}),`
`,o.jsx(i,{of:s.Portal}),`
`,o.jsx(e.h3,{id:"content",children:"Content"}),`
`,o.jsx(i,{of:s.Content}),`
`,o.jsx(e.h3,{id:"item",children:"Item"}),`
`,o.jsx(i,{of:s.Item}),`
`,o.jsx(e.h3,{id:"createitem",children:"CreateItem"}),`
`,o.jsx(i,{of:s.CreateItem}),`
`,o.jsx(e.h2,{id:"accessibility",children:"Accessibility"}),`
`,o.jsxs(e.p,{children:["Adheres to the ",o.jsx(e.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/",rel:"nofollow",children:"Combobox WAI-ARIA design pattern"})]}),`
`,o.jsxs(e.p,{children:[`See the W3C
`,o.jsx(e.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-both",rel:"nofollow",children:"Combobox with Autocomplete"}),`
example for more information.`]})]})}function T(t={}){const{wrapper:e}={...c(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(l,{...t})}):l(t)}function j(t,e){throw new Error("Expected component `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}export{T as default};
