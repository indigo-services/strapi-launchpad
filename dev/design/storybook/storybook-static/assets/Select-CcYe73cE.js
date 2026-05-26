import{j as e,M as r,a as s,C as t}from"./iframe-_cKE9r89.js";import{useMDXComponents as c}from"./index-BsQHpXCm.js";import{S as d,B as h,D as a,a as p,b as x,C as j,M as u,c as m,d as f,e as g,f as S,g as M,h as w,i as b,j as v,k as y}from"./Select.stories-BfwNsDy5.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./SingleSelect-CFTa6hkl.js";import"./useIntersection-BvDycFkB.js";import"./index-JVGtNO81.js";import"./index-BEk9yI-S.js";import"./index-DQIug_r8.js";import"./index-D_aoadGl.js";import"./index-CHWVjPu-.js";import"./useId-BMWvqHJO.js";import"./useComposeRefs-BPjCxrPe.js";import"./input-BS9krbKO.js";import"./Field-Cwhta1v_.js";import"./AccessibleIcon-CYyZOlqW.js";import"./IconButton-Uvk00hK3.js";import"./utils-qgCRrxX8.js";import"./Loader-B5HLgo8O.js";import"./ScrollArea-E5LdgMvt.js";import"./Tag-CF1ZNRdL.js";import"./Checkbox-0fdbGYKe.js";import"./useControllableState-CIwy89gb.js";function o(i){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...c(),...i.components},{ViewSource:l}=n;return l||C("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(r,{of:d}),`
`,e.jsx(n.h1,{id:"select",children:"Select"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#usage",children:"Usage"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#props",children:"Props"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#variants",children:"Variants"})}),`
`]}),`
`,e.jsx(n.h2,{id:"overview",children:"Overview"}),`
`,e.jsx(n.p,{children:`Select components are used for collecting user provided information from a list of options. They can be configured to
allow single or multiple selections.`}),`
`,e.jsx(l,{path:"components/Select"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import {
  SingleSelect,
  SingleSelectOption,
  MultiSelect,
  MultiSelectOption,
  MultiSelectNested,
} from '@strapi/design-system';
`})}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic usage"}),`
`,e.jsxs(n.p,{children:["The most common usage would be the ",e.jsx(n.code,{children:"SingleSelect"}),` which allows a user to only select one option from a list. The list
has built in typeahead meaning pressing the letter `,e.jsx(n.code,{children:"K"}),' will highlight the word "Kiwi" in the example below.']}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:a}),`
`,e.jsx(n.h3,{id:"size",children:"Size"}),`
`,e.jsxs(n.p,{children:["There are two options for sizes, ",e.jsx(n.code,{children:'"S"'})," or ",e.jsx(n.code,{children:'"M"'}),", the default is ",e.jsx(n.code,{children:'"M"'}),"."]}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h3,{id:"start-icons",children:"Start Icons"}),`
`,e.jsx(n.p,{children:"Is possible to pass a start icon for general Select or for each option."}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h3,{id:"controlled",children:"Controlled"}),`
`,e.jsxs(n.p,{children:["All the select variants can be a controlled component by passing a ",e.jsx(n.code,{children:"value"})," prop and an ",e.jsx(n.code,{children:"onChange"}),` callback, this also
enables you to have the ability to "clear" the input.`]}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(n.h3,{id:"multiple-select",children:"Multiple select"}),`
`,e.jsxs(n.p,{children:["It's possible to select multiple options by using the ",e.jsx(n.code,{children:"MultiSelect"})," component instead of the ",e.jsx(n.code,{children:"SingleSelect"}),`. As such,
you should should look to use the `,e.jsx(n.code,{children:"MultiSelectOption"})," as it's visually distinct from the ",e.jsx(n.code,{children:"SingleSelectOption"}),"."]}),`
`,e.jsxs(n.p,{children:["By default, no transformations are made to the rendered value, but you can edit this by passing a ",e.jsx(n.code,{children:"customizeContent"}),`
prop, which will be called with the selected values and should return a string e.g:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:"const customizeContent = (values: string[]) => `${values.length} are currently selected`;\n"})}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(n.h3,{id:"multiple-select-with-tags",children:"Multiple select with tags"}),`
`,e.jsxs(n.p,{children:["Instead of passing a ",e.jsx(n.code,{children:"customizeContent"})," prop, you can pass the ",e.jsx(n.code,{children:"withTags"}),` prop which will render the selected values as
tags instead.`]}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h3,{id:"nested-multiple-select",children:"Nested multiple select"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"single-select-field",children:"Single Select Field"}),`
`,e.jsxs(n.p,{children:["SingleSelect decorated with the ",e.jsx(n.a,{href:"../?path=/docs/components-field--docs",children:e.jsx(n.code,{children:"Field"})})," component"]}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.h3,{id:"multiple-select-field",children:"Multiple Select Field"}),`
`,e.jsxs(n.p,{children:["MultiSelect decorated with the ",e.jsx(n.a,{href:"../?path=/docs/components-field--docs",children:e.jsx(n.code,{children:"Field"})})," component"]}),`
`,e.jsx(s,{of:S}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h3,{id:"singleselect",children:"SingleSelect"}),`
`,e.jsx(t,{of:M}),`
`,e.jsx(n.h3,{id:"singleselectoption",children:"SingleSelectOption"}),`
`,e.jsx(t,{of:w}),`
`,e.jsx(n.h3,{id:"multiselect",children:"MultiSelect"}),`
`,e.jsx(t,{of:b}),`
`,e.jsx(n.h3,{id:"multiselectoption",children:"MultiSelectOption"}),`
`,e.jsx(t,{of:v}),`
`,e.jsx(n.h3,{id:"multiselectnested",children:"MultiSelectNested"}),`
`,e.jsx(t,{of:y})]})}function J(i={}){const{wrapper:n}={...c(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}function C(i,n){throw new Error("Expected component `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{J as default};
