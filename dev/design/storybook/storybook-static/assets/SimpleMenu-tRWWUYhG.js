import{j as e,M as d,a as i,A as s}from"./iframe-_cKE9r89.js";import{useMDXComponents as a}from"./index-BsQHpXCm.js";import{S as u,B as m,W as h,a as p,N as x}from"./SimpleMenu.stories-CddZ17CV.js";import{S as j,M as g,C as M,I as f,a as b}from"./SimpleMenu-Dnwze8Kc.js";import"./preload-helper-D6kgxu3v.js";import"./index-BxBVU389.js";import"./IconButton-Uvk00hK3.js";import"./utils-qgCRrxX8.js";import"./AccessibleIcon-CYyZOlqW.js";import"./useIntersection-BvDycFkB.js";import"./index-JVGtNO81.js";import"./index-BEk9yI-S.js";import"./index-DQIug_r8.js";import"./index-D_aoadGl.js";import"./index-CHWVjPu-.js";import"./useComposeRefs-BPjCxrPe.js";import"./useId-BMWvqHJO.js";import"./index-CmgM1aMT.js";import"./Button-BvqyPouE.js";function c(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...a(),...o.components},{TypeTable:t,ViewSource:r}=n;return t||l("TypeTable"),r||l("ViewSource"),e.jsxs(e.Fragment,{children:[e.jsx(d,{of:u}),`
`,e.jsx(n.h1,{id:"simplemenu",children:"SimpleMenu"}),`
`,e.jsxs(n.p,{children:["Displays a menu to the user – typically a list of actions or functions which is triggered by a ",e.jsx(n.code,{children:"button"}),`. This menu is
built on top of the `,e.jsx(n.a,{href:"https://www.radix-ui.com/docs/primitives/components/dropdown-menu",rel:"nofollow",children:"RadixUI Dropdown Menu"}),`
component. This component exports an easy to use `,e.jsx(n.code,{children:"SimpleMenu"}),` component but if you need more fine-grained control you
can use it's styled primitives countpart `,e.jsx(n.code,{children:"Menu"}),"."]}),`
`,e.jsx(r,{path:"components/SimpleMenu"}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { SimpleMenu, MenuItem } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(i,{of:m}),`
`,e.jsx(n.h3,{id:"with-icons",children:"With Icons"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(n.h3,{id:"using-links--routing-libraries",children:"Using Links & Routing Libraries"}),`
`,e.jsxs(n.p,{children:["By default you can define links in your menu by providing either the ",e.jsx(n.code,{children:"isLink"})," or ",e.jsx(n.code,{children:"isExternal"}),` prop, the former infers an
internal link so specific defaults may be different to what you expect.`]}),`
`,e.jsx(i,{of:p}),`
`,e.jsxs(n.p,{children:["If you're using a framework e.g. ",e.jsx(n.code,{children:"react-router-dom"})," or ",e.jsx(n.code,{children:"nextjs"})," you'll probably want to use their ",e.jsx(n.code,{children:"Link"}),` component as a
base. This is completely possible by using the `,e.jsx(n.code,{children:"tag"})," prop:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { SimpleMenu, MenuItem } from '@strapi/design-system';
import { NavLink } from 'react-router-dom'; // or import { Link } from 'next/link'

const MyMenu = () => {
  return (
    <SimpleMenu label="Navigation">
      <MenuItem as={NavLink} to="/" isLink>
        Home
      </MenuItem>
      <MenuItem as={NavLink} to="/accounts" isLink>
        Accounts
      </MenuItem>
      <MenuItem href="https://strapi.io/" isExternal>
        Billing Provider
      </MenuItem>
    </SimpleMenu>
  );
};
`})}),`
`,e.jsx(n.h3,{id:"nested-menus--labels",children:"Nested Menus & Labels"}),`
`,e.jsxs(n.p,{children:[`In some circumstances you'll want to create a more complex menu, this could be to section items with a label or to add a
submenu. Both of these are possible with the `,e.jsx(n.code,{children:"Menu"}),` component collection, note we do not export the submenu or label
feature separately like we do `,e.jsx(n.code,{children:"SimpleMenu"})," and ",e.jsx(n.code,{children:"MenuItem"}),", however the two work together perfectly."]}),`
`,e.jsx(i,{of:x}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(n.h2,{id:"simplemenu-1",children:"SimpleMenu"}),`
`,e.jsx(t,{of:j}),`
`,e.jsx(n.h2,{id:"menuitem",children:"MenuItem"}),`
`,e.jsx(t,{of:g}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h1,{id:"menu",children:"Menu"}),`
`,e.jsxs(n.p,{children:["In certain situations the ",e.jsx(n.code,{children:"SimpleMenu"}),` can be too restrictive, particularly if you want to customise the content
container. For this, we recommend using `,e.jsx(n.code,{children:"Menu"}),", it's a collection of components that can be composed in your own way."]}),`
`,e.jsx(n.h2,{id:"usage-1",children:"Usage"}),`
`,e.jsx(n.h3,{id:"basic-usage-1",children:"Basic Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Menu } from '@strapi/design-system';

const MyMenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger>Actions</Menu.Trigger>
      <Menu.Content>
        <Menu.Item onSelect={() => console.log('opening')}>Open</MenuItem>
        <Menu.Separator />
        <Menu.Item disabled onSelect={() => console.log('cloning')}>
          Clone
        </Menu.Item>
        <Menu.Item onSelect={() => console.log('editing')}>Edit</MenuItem>
        <Menu.Item color="danger600" onSelect={() => console.log('delete')}>
          Delete
        </Menu.Item>
      </Menu.Content>
    </Menu.Root>
  );
};
`})}),`
`,e.jsx(n.h2,{id:"props-1",children:"Props"}),`
`,e.jsx(n.h3,{id:"root",children:"Root"}),`
`,e.jsx(n.h3,{id:"trigger",children:"Trigger"}),`
`,e.jsx(n.h3,{id:"content",children:"Content"}),`
`,e.jsx(s,{of:M}),`
`,e.jsx(n.h3,{id:"item",children:"Item"}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h3,{id:"separator",children:"Separator"}),`
`,e.jsx(n.h3,{id:"label",children:"Label"}),`
`,e.jsx(n.h3,{id:"subroot",children:"SubRoot"}),`
`,e.jsx(n.h3,{id:"subtrigger",children:"SubTrigger"}),`
`,e.jsx(s,{of:b}),`
`,e.jsx(n.h3,{id:"subcontent",children:"SubContent"})]})}function _(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(c,{...o})}):c(o)}function l(o,n){throw new Error("Expected component `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{_ as default};
