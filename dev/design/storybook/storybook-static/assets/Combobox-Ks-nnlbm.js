import{j as e,M as l,a as t,C as s}from"./iframe-_cKE9r89.js";import{useMDXComponents as a}from"./index-BsQHpXCm.js";import{C as d,B as c,D as h,S as p,L as x,a as m,b,A as u,W as j,c as f,d as w}from"./Combobox.stories-CknEf9GX.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./Combobox-CvQql6sE.js";import"./index-JVGtNO81.js";import"./index-BEk9yI-S.js";import"./index-DQIug_r8.js";import"./index-D_aoadGl.js";import"./index-CHWVjPu-.js";import"./useIntersection-BvDycFkB.js";import"./useComposeRefs-BPjCxrPe.js";import"./useControllableState-CIwy89gb.js";import"./useId-BMWvqHJO.js";import"./input-BS9krbKO.js";import"./Field-Cwhta1v_.js";import"./AccessibleIcon-CYyZOlqW.js";import"./Loader-B5HLgo8O.js";import"./ScrollArea-E5LdgMvt.js";import"./IconButton-Uvk00hK3.js";import"./utils-qgCRrxX8.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...a(),...n.components},{ViewSource:i}=o;return i||g("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(l,{of:d}),`
`,e.jsx(o.h1,{id:"combobox",children:"Combobox"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#props",children:"Props"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#variants",children:"Variants"})}),`
`]}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(o.p,{children:[`An input field designed to not only offer users the ability to type the value they want, but also display a panel of
suggestions which filter & autocomplete as the user types for a more fluid experience. This shouldn't be confused with
the `,e.jsx(o.a,{href:"../?path=/docs/inputs-select--docs",children:e.jsx(o.code,{children:"Select"})})," component!"]}),`
`,e.jsx(i,{path:"components/Combobox"}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`import { Combobox, ComboboxOption } from '@strapi/design-system';
`})}),`
`,e.jsx(o.h2,{id:"variants",children:"Variants"}),`
`,e.jsx(o.h3,{id:"basic-combobox",children:"Basic Combobox"}),`
`,e.jsx(o.p,{children:`By default, the combobox is uncontrolled & uses both inline and list autocomplete, that is where as the user types
suggestions (based on the order of the options) are shown in the input field whilst the list gradually gets filtered.`}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(o.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(o.p,{children:`Combobox can possibly not be available to select yet. This state can be related to a lack of permissions or a need to
pursue another action first.`}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(o.h3,{id:"size",children:"Size"}),`
`,e.jsxs(o.p,{children:["There are two options for sizes, ",e.jsx(o.code,{children:'"S"'})," or ",e.jsx(o.code,{children:'"M"'}),", the default is ",e.jsx(o.code,{children:'"M"'}),"."]}),`
`,e.jsx(t,{of:p}),`
`,e.jsx(o.h3,{id:"async-data",children:"Async data"}),`
`,e.jsxs(o.p,{children:["In some situations it might not be optimal to load all the data at once. In this case, you can use the ",e.jsx(o.code,{children:"loading"}),` prop to
load more data when the user scrolls to the bottom of the list.`]}),`
`,e.jsxs(o.p,{children:["NOTE! You also need to supply an ",e.jsx(o.code,{children:"onLoadMore"})," callback as well as defining if ",e.jsx(o.code,{children:"hasMoreItems"}),` is true to show the
spinner. In future iterations, we plan to omit the `,e.jsx(o.code,{children:"hasMoreItems"})," prop."]}),`
`,e.jsx(t,{of:x}),`
`,e.jsx(o.h3,{id:"creating-new-options",children:"Creating new options"}),`
`,e.jsxs(o.p,{children:[`The Creatable Combobox allows users to create new options in addition to selecting from predefined ones. To enable this,
set the `,e.jsx(o.code,{children:"creatable"})," prop to true and provide an ",e.jsx(o.code,{children:"onCreateOption"}),` callback to handle new option creation. When a user
types a value not found in the list, the callback adds it dynamically, making the component flexible for expanding
options.`]}),`
`,e.jsx(t,{of:m}),`
`,e.jsx(o.h3,{id:"creating-options-always-visible",children:"Creating options always visible"}),`
`,e.jsxs(o.p,{children:[`The Creatable Combobox allows users to have a button to trigger a callback when clicked in addition to selecting from
predefined ones. To enable this, set the `,e.jsx(o.code,{children:"creatable"})," prop to ",e.jsx(o.code,{children:"visible"})," and provide an ",e.jsx(o.code,{children:"onCreateOption"}),` callback to
handle the action we want to pursue. When a user types a value not found in the list, a not found message is shown, and
in the options of the Combobox there is always a button to click to trigger the onCreateOption action.`]}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(o.h3,{id:"autocomplete-settings",children:"Autocomplete settings"}),`
`,e.jsxs(o.p,{children:[`By default, the combobox uses both inline and list autocomplete, however you can change this behaviour to only be
`,e.jsx(o.code,{children:"list (filter: startswith)"}),", ",e.jsx(o.code,{children:"list (filter: contains)"})," or ",e.jsx(o.code,{children:"none"}),". If you set the autocomplete mode to ",e.jsx(o.code,{children:"none"}),`, the first
matching option will be visually focussed`]}),`
`,e.jsx(t,{of:u}),`
`,e.jsx(o.h3,{id:"combobox-field",children:"Combobox field"}),`
`,e.jsxs(o.p,{children:["Wrap the input in the necessary ",e.jsx(o.a,{href:"../?path=/docs/components-field--docs",children:e.jsx(o.code,{children:"Field"})}),` component to create a powerful complete
form input`]}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsx(o.h3,{id:"combobox-1",children:"Combobox"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(o.h3,{id:"comboboxoption",children:"ComboboxOption"}),`
`,e.jsx(o.p,{children:`The ComboboxOption is used inside the Combobox to render individual items. Each ComboboxOption has a value prop, which
is the underlying value that will be selected when the user clicks on the option.`}),`
`,e.jsx(s,{of:w})]})}function R(n={}){const{wrapper:o}={...a(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}function g(n,o){throw new Error("Expected component `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{R as default};
