import{j as e,M as l}from"./iframe-_cKE9r89.js";import{useMDXComponents as i}from"./index-BsQHpXCm.js";import"./preload-helper-D6kgxu3v.js";function s(o){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Getting Started/Troubleshooting"}),`
`,e.jsx(n.h1,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(n.h2,{id:"layout-shift-when-opening-modals-or-dialogs-due-to-radix-ui---react-remove-scroll",children:"Layout shift when opening Modals or Dialogs (due to radix-ui -> react-remove-scroll)"}),`
`,e.jsxs(n.p,{children:["If you notice a layout shift when opening Modals or Dialogs, this is caused by the ",e.jsx(n.code,{children:"react-remove-scroll"}),` library used by
`,e.jsx(n.code,{children:"@radix-ui/react-dialog"})," to prevent background scrolling when a dialog is open."]}),`
`,e.jsx(n.p,{children:"To fix this, you can add the following CSS to your global styles:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`html,
body {
  width: calc(100% - var(--removed-body-scroll-bar-size), 0px);
}
`})}),`
`,e.jsxs(n.p,{children:["You will also need to set a background color on the ",e.jsx(n.code,{children:"body"})," to avoid a white flash when opening a Modal or Dialog:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`body {
  background: [your-background-color];
}
`})}),`
`,e.jsx(n.h2,{id:"focus-outline-is-visible-when-using-mouse",children:"Focus outline is visible when using mouse"}),`
`,e.jsx(n.p,{children:`By default, browsers show focus outlines when elements are focused, regardless of the input method (keyboard or mouse).
This can lead to a less-than-ideal user interface when using a mouse.`}),`
`,e.jsxs(n.p,{children:["To improve the user experience, you can use ",e.jsx(n.a,{href:"https://github.com/ten1seven/what-input",rel:"nofollow",children:e.jsx(n.code,{children:"what-input"})}),` library to
conditionally apply focus styles based on the input method.`]}),`
`,e.jsxs(n.p,{children:["Install and import ",e.jsx(n.code,{children:"what-input"})," in your project."]}),`
`,e.jsx(n.p,{children:"Then, add the following CSS to your global styles:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`[data-whatintent='mouse'] *:focus {
  outline: none;
}
`})}),`
`,e.jsx(n.p,{children:`This will hide focus outlines when using a mouse, while still allowing keyboard users to see focus indicators for
accessibility.`}),`
`,e.jsx(n.h2,{id:"popovers-not-appearing-above-other-elements",children:"Popovers not appearing above other elements"}),`
`,e.jsx(n.p,{children:`If you notice that Popovers are not appearing above other elements, you may need to adjust the default radix-ui popper
z-index by adding the following CSS to your global styles:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`[data-radix-popper-content-wrapper] {
  z-index: 300 !important;
}
`})}),`
`,e.jsx(n.h2,{id:"disabled-links-are-still-clickable",children:"Disabled links are still clickable"}),`
`,e.jsx(n.p,{children:`If you have a link that is disabled but still clickable, you can add the following CSS to your global styles to prevent
pointer events on disabled links:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`a[aria-disabled='true'] {
  pointer-events: none;
  cursor: default;
}
`})})]})}function d(o={}){const{wrapper:n}={...i(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{d as default};
