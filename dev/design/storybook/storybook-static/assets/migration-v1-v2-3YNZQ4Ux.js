import{j as e,M as r}from"./iframe-_cKE9r89.js";import{useMDXComponents as d}from"./index-BsQHpXCm.js";import"./preload-helper-D6kgxu3v.js";function i(s){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Getting Started/Migration Guides/V1 to V2"}),`
`,e.jsx(n.h1,{id:"migrating-to-v2",children:"Migrating to V2"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#design-system",children:"Design System"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#peer-dependency-updates",children:"Peer dependency updates"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#remove-direct-imports",children:"Remove direct imports"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#published-types",children:"Published types"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#change-font-size-on-htmlbody-to-625",children:"Change font-size on html,body to 62.5%"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#removed-deprecated-components",children:"Removed deprecated components"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#icon-has-been-removed",children:"Icon has been removed"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#removed-field-wrapper-components-from-inputs--new-field-api",children:"Removed field wrapper components from inputs & new Field API"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#toggleinput-rename",children:"ToggleInput rename"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#upgraded-styled-components-to-v6",children:"Upgraded styled-components to V6"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#removed-cms-specific-components",children:"Removed CMS specific components"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#radix-ui",children:"Radix-UI"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#removed-themeprovider",children:"Removed ThemeProvider"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#iconbutton-api-changes",children:"IconButton API changes"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#grid-is-now-a-composite-component",children:"Grid is now a composite component"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#icons",children:"Icons"})}),`
`]}),`
`,e.jsx(n.h2,{id:"design-system",children:"Design System"}),`
`,e.jsx(n.h3,{id:"peer-dependency-updates",children:"Peer dependency updates"}),`
`,e.jsxs(n.p,{children:["The design-system & icons peer-deps have been updated, we removed ",e.jsx(n.code,{children:"react-router-dom"})," and updated ",e.jsx(n.code,{children:"styled-components"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`// package.json
{
  peerDependencies: {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
-   "react-router-dom": "^5.2.0",
-   "styled-components": "^5.3.0",
+   "styled-components": "^6.0.0"
  }
}
`})}),`
`,e.jsx(n.h3,{id:"remove-direct-imports",children:"Remove direct imports"}),`
`,e.jsxs(n.p,{children:["Users can no longer ",e.jsx(n.code,{children:"import { Combobox } from '@strapi/design-system/Combobox'"}),", instead they should import ",e.jsx(n.em,{children:"all"}),` things
from the root of the project.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- import { Combobox } from '@strapi/design-system/Combobox';
+ import { Combobox } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h3,{id:"published-types",children:"Published types"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@strapi/design-system"})," now comes with typescript definitions. This means you can remove any overrides you may have."]}),`
`,e.jsx(n.h3,{id:"change-font-size-on-htmlbody-to-625",children:"Change font-size on html,body to 62.5%"}),`
`,e.jsx(n.p,{children:`The base font-size for the app is now 10px, so 1rem = 10px. This means that users should stop dividing their px values
by 16 and instead divide by 10. This will make it easier to convert px to rem.`}),`
`,e.jsx(n.h3,{id:"removed-deprecated-components",children:"Removed deprecated components"}),`
`,e.jsx(n.p,{children:"The following components have been replaced with their V2 counterpart:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Breadcrumbs"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Link"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"LinkButton"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"MainNav"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Pagination"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SimpleMenu"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"SubNav"})}),`
`]}),`
`,e.jsx(n.p,{children:"The following components have been removed:"}),`
`,e.jsxs(n.h4,{id:"select--option--optgroup--selectlist",children:[e.jsx(n.code,{children:"Select"})," / ",e.jsx(n.code,{children:"Option"})," / ",e.jsx(n.code,{children:"OptGroup"})," / ",e.jsx(n.code,{children:"SelectList"})]}),`
`,e.jsxs(n.p,{children:["These comoponents were deprecated previously. It is recommended to use the new iteration either the ",e.jsx(n.code,{children:"SingleSelect"}),` or
`,e.jsx(n.code,{children:"MultiSelect"})," components to replace them depending on your use case."]}),`
`,e.jsx(n.h4,{id:"stack",children:e.jsx(n.code,{children:"Stack"})}),`
`,e.jsxs(n.p,{children:["This was just a wrapped component around ",e.jsx(n.code,{children:"Flex"}),". You should use ",e.jsx(n.code,{children:"Flex"})," instead."]}),`
`,e.jsx(n.h4,{id:"togglecheckbox",children:e.jsx(n.code,{children:"ToggleCheckbox"})}),`
`,e.jsxs(n.p,{children:["This is the same component as ",e.jsx(n.code,{children:"ToggleInput"})," and therefore you should use that instead."]}),`
`,e.jsx(n.h3,{id:"icon-has-been-removed",children:"Icon has been removed"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"Icon"}),` component has been removed. It's primary function was to allow you to apply theme colors to icons, this is
now doable with the actual icon:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`+ <Icon as={Plus} color="primary700" />
- <Plus fill="primary700" />
`})}),`
`,e.jsx(n.h3,{id:"removed-field-wrapper-components-from-inputs--new-field-api",children:"Removed field wrapper components from inputs & new Field API"}),`
`,e.jsx(n.p,{children:`We're making inputs more composable by breaking down the pieces from components like labels, hints, and error messages,
focusing solely on exporting the inputs themselves. This simplifies the structure and reduces DOM size, especially in
cases where only aria-labels are needed. Users can still use Field components they used alongside inputs.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// before
return <SingleSelect label={label} error={error} required={required} value={value} onChange={handleChange} />;

// after
return (
  <Field.Root error={error} required={required} name={name}>
    <Field.Label>{label}</Field.Label>
    <SingleSelect value={value} onChange={handleChange} />
    <Field.Error />
    <Field.Hint />
  </Field.Root>
);
`})}),`
`,e.jsx(n.h3,{id:"toggleinput-rename",children:"ToggleInput rename"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ToggleInput"})," has been renamed to just ",e.jsx(n.code,{children:"Toggle"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- import { ToggleInput } from '@strapi/design-system'
+ import { Toggle } from '@strapi/design-system'
`})}),`
`,e.jsx(n.h3,{id:"deprecated-props",children:"Deprecated props"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hiddenS"})," & ",e.jsx(n.code,{children:"hiddenXS"})," has been removed as all CSS props are now responsive including ",e.jsx(n.code,{children:"display"}),"."]}),`
`,e.jsxs(n.li,{children:[`MediaQueries with tablet and mobile breakpoints removed from theme and replaced with new Breakpoints. Users can now
apply device specific styles using `,e.jsx(n.code,{children:"initial"}),", ",e.jsx(n.code,{children:"small"}),", 'medium' and ",e.jsx(n.code,{children:"large"})," breakpoints."]}),`
`]}),`
`,e.jsx(n.h3,{id:"upgraded-styled-components-to-v6",children:"Upgraded styled-components to V6"}),`
`,e.jsxs(n.h4,{id:"as-is-no-longer-a-prop-use-tag-instead",children:[e.jsx(n.code,{children:"as"})," is no longer a prop, use ",e.jsx(n.code,{children:"tag"})," instead"]}),`
`,e.jsxs(n.p,{children:["A common issue we faced in Strapi was the behaviour of the ",e.jsx(n.code,{children:"as"}),` prop in conjunction with how we built our design-system
– everything is based off `,e.jsx(n.code,{children:"Box"}),". This meant that when we used ",e.jsx(n.code,{children:"as"}),` on a styled component it would not be passed down to
the `,e.jsx(n.code,{children:"Box"})," component. This is because ",e.jsx(n.code,{children:"as"}),` is a prop that styled-components uses to change the underlying element to the
closest `,e.jsx(n.code,{children:"styled"})," component, but we were using it to change the ",e.jsx(n.code,{children:"tag"})," prop of ",e.jsx(n.code,{children:"Box"}),"."]}),`
`,e.jsxs(n.p,{children:["We've now introduced the ",e.jsx(n.code,{children:"tag"})," prop which behaves as we expect."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`import { Link } from 'react-router-dom'

const MyLink = () => {
  // the below prop would throw a TS error
- return <BaseLink as={NavLink} to="/home">
  // It now, should not.
+ return <BaseLink tag={NavLink} to="/home">
}
`})}),`
`,e.jsx(n.h4,{id:"box-flex-grid-cardaction--typography-are-now-all-react-components",children:"Box, Flex, Grid, CardAction & Typography are now all react components"}),`
`,e.jsx(n.p,{children:`These components are no longer styled-components. This means that users can not directly reference them in other styled
components:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- const StyledComponent = styled.section\`
-  \${Box} {
-    background-color: red;
-  }
- \`;
+ const MyBox = styled(Box)\`\`;
+
+ const StyledComponent = styled.section\`
+   \${MyBox} {
+     background-color: red;
+   }
+ \`;
`})}),`
`,e.jsxs(n.p,{children:["Because they are now polymoprhic react components that are correctly typed i.e. it will infer the props of the ",e.jsx(n.code,{children:"tag"}),` the
type signature of the component uses generics, `,e.jsx(n.code,{children:"styled-components"}),` has an issue surrounding the poor auto-inference of
this. We therefore recommend you type your `,e.jsx(n.code,{children:"styled"})," functions where you use them:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Box, BoxComponent } from '@strapi/design-system';

const MyBox = styled<BoxComponent<'article'>>(Box)\`
  background-color: red;
\`;

const MyComponent = () => {
  return <MyBox tag="article">Hello</MyBox>;
};
`})}),`
`,e.jsxs(n.p,{children:["If you don't do this, the props for ",e.jsx(n.code,{children:"MyBox"})," are all inferred as ",e.jsx(n.code,{children:"Record<string, any>"}),", which is incorrect."]}),`
`,e.jsx(n.h3,{id:"removed-deprecated-props",children:"Removed deprecated props"}),`
`,e.jsx(n.p,{children:"Some specific props have been removed from components:"}),`
`,e.jsxs(n.h4,{id:"accordion-component",children:[e.jsx(n.code,{children:"Accordion"})," component"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"error"})," prop is no longer supported"]}),`
`]}),`
`,e.jsxs(n.h4,{id:"iconbutton-component",children:[e.jsx(n.code,{children:"IconButton"})," component"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"noBorder"})," prop is no longer supported"]}),`
`,e.jsx(n.li,{children:"To achieve the same effect, use styled-components:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const IconButtonWithoutBorder = styled(IconButton)\`
  border: 0;
\`;
`})}),`
`,e.jsxs(n.h4,{id:"pagelink-component",children:[e.jsx(n.code,{children:"PageLink"})," component"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"active"})," prop has been removed"]}),`
`]}),`
`,e.jsxs(n.h4,{id:"status-component",children:[e.jsx(n.code,{children:"Status"})," component"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"showBullet"})," prop has been removed"]}),`
`]}),`
`,e.jsx(n.h3,{id:"removed-cms-specific-components",children:"Removed CMS specific components"}),`
`,e.jsxs(n.p,{children:[`The following components have been removed from DS and moved to CMS where it belongs. When working on the Strapi CMS
(creating a plugin, for example), you can still use these components by importing them from
`,e.jsx(n.code,{children:"@strapi/admin/strapi-admin"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"Layout"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"MainNav"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"HeaderLayout"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"TwoColsLayout"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"GridLayout"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"ActionLayout"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"ContentLayout"})}),`
`]}),`
`,e.jsx(n.h3,{id:"radix-ui",children:"Radix-UI"}),`
`,e.jsx(n.p,{children:`As part of a larger effort to reduce complexity in our own codebase and increase accessibility of Strapi products, we've
made the decision to migrate to Radix-UI primitives for many of our components, this comes with the tradeoff that many
of our APIs will change, but functionality should still remain the same. We recommend you check out the documentation
for any of these components to understand better how to migrate your code.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-accordion--base",children:e.jsx(n.code,{children:"Accordion"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-avatar--base",children:e.jsx(n.code,{children:"Avatar"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-checkbox--base",children:e.jsx(n.code,{children:"Checkbox"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-dialog--base",children:e.jsx(n.code,{children:"Dialog"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-modal--base",children:e.jsx(n.code,{children:"Modal"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-popover--base",children:e.jsx(n.code,{children:"Popover"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-radio--base",children:e.jsx(n.code,{children:"Radio"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-tabs--base",children:e.jsx(n.code,{children:"Tabs"})})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"../?path=/docs/components-tooltip--base",children:e.jsx(n.code,{children:"Tooltip"})})}),`
`]}),`
`,e.jsxs(n.h3,{id:"removed-themeprovider",children:["Removed ",e.jsx(n.code,{children:"ThemeProvider"})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ThemeProvider"})," has been removed and replaced with ",e.jsx(n.code,{children:"DesignSystemProvider"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- import { ThemeProvider } from '@strapi/design-system';
+ import { DesignSystemProvider } from '@strapi/design-system';
`})}),`
`,e.jsx(n.h3,{id:"iconbutton-api-changes",children:"IconButton API changes"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"IconButton"})," API has been streamlined, namely ",e.jsx(n.code,{children:"icon"})," and ",e.jsx(n.code,{children:"ariaLabel"}),` have been removed. Users should instead use
`,e.jsx(n.code,{children:"label"})," and ",e.jsx(n.code,{children:"children"}),`, by default we always show a tooltip to preserve old functionality but this will deprecated in a
future release. If you don't want a tooltip you should set `,e.jsx(n.code,{children:"withTooltip"})," to ",e.jsx(n.code,{children:"false"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- <IconButton icon={Plus} ariaLabel="Add" />
+ <IconButton withTooltip={false} label="Add"><Plus /></IconButton>
`})}),`
`,e.jsx(n.h3,{id:"grid-is-now-a-composite-component",children:"Grid is now a composite component"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Grid"})," is now a composite Component. Therefore, ",e.jsx(n.code,{children:"GridItem"})," has also been removed. To upgrade:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- import { Grid, GridItem } from '@strapi/design-system';
+ import { Grid } from '@strapi/design-system';

- <Grid gridCols={4}>
-   <GridItem col={2}>1</GridItem>
-   <GridItem col={2}>2</GridItem>
- </Grid>
+ <Grid.Root gridCols={4}>
+   <Grid.Item>1</Grid.Item>
+   <Grid.Item>2</Grid.Item>
+ </Grid.Root>
`})}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"icons",children:"Icons"}),`
`,e.jsxs(n.p,{children:["Many of the icons have been updated visually, this will effect snapshot tests. The default size is ",e.jsx(n.code,{children:"1.6rem"}),` for an icon,
in the Strapi design-system this equates to 16px. We have also ensured that `,e.jsx(n.code,{children:"paths"})," do not have any ",e.jsx(n.code,{children:"fill"})," or ",e.jsx(n.code,{children:"stroke"}),`
properties set, this allows the icon to be styled with CSS except for specific use cases we don't expect users to
encounter. The default `,e.jsx(n.code,{children:"color"})," is ",e.jsx(n.code,{children:"currentColor"})," which means it will inherit the color of the parent element."]}),`
`,e.jsx(n.p,{children:"The following icons have been removed:"}),`
`,e.jsx(n.h3,{id:"apps",children:"Apps"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"GridNine"})]}),`
`,e.jsx(n.h3,{id:"attachment",children:"Attachment"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Paperclip"})]}),`
`,e.jsx(n.h3,{id:"blocks",children:"Blocks"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"BlocksField"})," and exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"}),"."]}),`
`,e.jsx(n.h3,{id:"boolean",children:"Boolean"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"BooleanField"})," and exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"brush",children:"Brush"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"PaintBrush"})]}),`
`,e.jsx(n.h3,{id:"carretdown",children:"CarretDown"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"CaretDown"})]}),`
`,e.jsx(n.h3,{id:"carretup",children:"CarretUp"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"CaretUp"})]}),`
`,e.jsx(n.h3,{id:"codesquare",children:"CodeSquare"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"component",children:"Component"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"ComponentField"})," and exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"connector",children:"Connector"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Faders"})]}),`
`,e.jsx(n.h3,{id:"cube",children:"Cube"}),`
`,e.jsx(n.p,{children:"Removed."}),`
`,e.jsx(n.h3,{id:"cup",children:"Cup"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Coffee"})]}),`
`,e.jsx(n.h3,{id:"dashboard",children:"Dashboard"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"SquareFour"})]}),`
`,e.jsx(n.h3,{id:"date",children:"Date"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"DateField"})]}),`
`,e.jsx(n.h3,{id:"discord",children:"Discord"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"discourse",children:"Discourse"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"doctor",children:"Doctor"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Stethoscope"})]}),`
`,e.jsx(n.h3,{id:"dot",children:"Dot"}),`
`,e.jsx(n.p,{children:"Removed."}),`
`,e.jsx(n.h3,{id:"dynamiczone",children:"DynamicZone"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"DynamicZoneField"})," and exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"email",children:"Email"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"EmailField"})," and exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"emptydata",children:"EmptyData"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"emptydocuments",children:"EmptyDocuments"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"emptypermissions",children:"EmptyPermissions"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"emptypictures",children:"EmptyPictures"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"enumeration",children:"Enumeration"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"EnumerationField"})," and exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"envelop",children:"Envelop"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Mail"})]}),`
`,e.jsx(n.h3,{id:"equalizer",children:"Equalizer"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"SlidersHorizontal"})]}),`
`,e.jsx(n.h3,{id:"exclamationmarkcircle",children:"ExclamationMarkCircle"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"WarningCircle"})]}),`
`,e.jsx(n.h3,{id:"exit",children:"Exit"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"SignOut"})]}),`
`,e.jsx(n.h3,{id:"facebook",children:"Facebook"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"feathersquare",children:"FeatherSquare"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"gate",children:"Gate"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"CastleTurret"})]}),`
`,e.jsx(n.h3,{id:"github",children:"Github"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"glassessquare",children:"GlassesSquare"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"grid",children:"Grid"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"GridFour"})]}),`
`,e.jsx(n.h3,{id:"headphone",children:"Headphone"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Headphones"})]}),`
`,e.jsx(n.h3,{id:"history",children:"History"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"ClockCounterClockwise"})]}),`
`,e.jsx(n.h3,{id:"informationsquare",children:"InformationSquare"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"json",children:"Json"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"JsonField"})," and exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"landscape",children:"Landscape"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Images"})]}),`
`,e.jsx(n.h3,{id:"landscapesmall",children:"LandscapeSmall"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Images"})]}),`
`,e.jsx(n.h3,{id:"layer",children:"Layer"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"ListPlus"})]}),`
`,e.jsx(n.h3,{id:"linksmall",children:"LinkSmall"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Link"})]}),`
`,e.jsx(n.h3,{id:"media",children:"Media"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"MediaField"})," and exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"medium",children:"Medium"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"menuburger",children:"MenuBurger"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"List"})]}),`
`,e.jsx(n.h3,{id:"minusoutlined",children:"MinusOutlined"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"MinusCircle"})]}),`
`,e.jsx(n.h3,{id:"music",children:"Music"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"MusicNotes"})]}),`
`,e.jsx(n.h3,{id:"number",children:"Number"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"NumberField"})," and exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"onholdcarretdown",children:"OnholdCarretDown"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"CaretDown"})]}),`
`,e.jsx(n.h3,{id:"onholdcarretup",children:"OnholdCarretUp"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"CaretUp"})]}),`
`,e.jsx(n.h3,{id:"paint",children:"Paint"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"PaintBrush"})]}),`
`,e.jsx(n.h3,{id:"password",children:"Password"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"PasswordField"})]}),`
`,e.jsx(n.h3,{id:"picture",children:"Picture"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Image"})]}),`
`,e.jsx(n.h3,{id:"pictureplus",children:"PicturePlus"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"PlusCircle"})]}),`
`,e.jsx(n.h3,{id:"playsquare",children:"PlaySquare"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"puzzle",children:"Puzzle"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"PuzzlePiece"})]}),`
`,e.jsx(n.h3,{id:"quote",children:"Quote"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Quotes"})]}),`
`,e.jsx(n.h3,{id:"quoteclosed",children:"QuoteClosed"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Quotes"})]}),`
`,e.jsx(n.h3,{id:"reddit",children:"Reddit"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"refresh",children:"Refresh"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"ArrowClockwise"})]}),`
`,e.jsx(n.h3,{id:"relation",children:"Relation"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"RelationField"})," and exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"repeat",children:"Repeat"}),`
`,e.jsx(n.p,{children:"Removed."}),`
`,e.jsx(n.h3,{id:"richtext",children:"RichText"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"RichTextField"})," and exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"rotate",children:"Rotate"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"ArrowsCounterClockwise"})]}),`
`,e.jsx(n.h3,{id:"searchicon",children:"SearchIcon"}),`
`,e.jsxs(n.p,{children:["Removed, use ",e.jsx(n.code,{children:"Search"})," instead."]}),`
`,e.jsx(n.h3,{id:"seed",children:"Seed"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Plant"})]}),`
`,e.jsx(n.h3,{id:"slideshow",children:"Slideshow"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"PresentationChart"})]}),`
`,e.jsx(n.h3,{id:"spark",children:"Spark"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Sparkle"})]}),`
`,e.jsx(n.h3,{id:"spinner",children:"Spinner"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Loader"})]}),`
`,e.jsx(n.h3,{id:"strapi",children:"Strapi"}),`
`,e.jsxs(n.p,{children:["Now exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"text",children:"Text"}),`
`,e.jsxs(n.p,{children:["Replace with ",e.jsx(n.code,{children:"TextField"})," and exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"twitter",children:"Twitter"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"X"})," and exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"uid",children:"Uid"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"UidField"})," and exported from ",e.jsx(n.code,{children:"@strapi/icons/symbols"})]}),`
`,e.jsx(n.h3,{id:"write",children:"Write"}),`
`,e.jsxs(n.p,{children:["Replaced with ",e.jsx(n.code,{children:"Feather"})]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"primitives",children:"Primitives"})]})}function h(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{h as default};
