import{r as o,j as a,V as L,p as c,K as w,J as _}from"./iframe-_cKE9r89.js";import{d as v}from"./index-BxBVU389.js";import{c as I}from"./useComposeRefs-BPjCxrPe.js";import{R as $,L as E,i as T,I as k}from"./Field-Cwhta1v_.js";import{I as B}from"./IconButton-Uvk00hK3.js";const D=c(w)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,C=c(_)`
  font-size: 1rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,M=c.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};

  &:focus-within {
    ${C} {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,q=c(k)`
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  padding: 0 0 0 8px;
  color: ${({theme:e})=>e.colors.neutral800};

  &:hover {
    button {
      cursor: pointer;
    }
  }

  ${T()}

  > input::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  > input::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }

  > input::-webkit-search-decoration,
  > input::-webkit-search-cancel-button,
  > input::-webkit-search-results-button,
  > input::-webkit-search-results-decoration {
    display: none;
  }
`,u=o.forwardRef(({name:e,children:r,value:s="",onClear:y,clearLabel:R="Clear",...x},j)=>{const i=o.useRef(null),d=s.length>0,p=t=>{y(t),i.current.focus()},F=I(j,i);return a.jsx(M,{children:a.jsxs($,{name:e,children:[a.jsx(L,{children:a.jsx(E,{children:r})}),a.jsx(q,{size:"S",type:"search",ref:F,value:s,startAction:a.jsx(C,{"aria-hidden":!0}),onKeyDown:t=>{t.stopPropagation(),t.key==="Escape"&&d&&p(t)},endAction:d?a.jsx(B,{onClick:p,onMouseDown:t=>{t.preventDefault()},label:R,size:"XS",variant:"ghost",type:"button",children:a.jsx(D,{})}):void 0,...x})]})})});u.__docgenInfo={description:"",methods:[],displayName:"Searchbar",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClear:{required:!0,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},clearLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Clear'",computed:!1}}}};const V=e=>a.jsx("form",{...e,role:"search"});V.__docgenInfo={description:"",methods:[],displayName:"SearchForm"};const z={title:"Components/Searchbar",component:u},n={render:()=>{const[e,r]=o.useState("");return a.jsx(V,{children:a.jsx(u,{name:"searchbar",onClear:()=>r(""),value:e,onChange:s=>r(s.target.value),clearLabel:"Clearing the plugin search",placeholder:"e.g: strapi-plugin-abcd",children:"Searching for a plugin"})})},parameters:{docs:{source:{code:v`
          const [value, setValue] = React.useState('');

          <SearchForm>
            <Searchbar
              name="searchbar"
              onClear={() => setValue('')}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              clearLabel="Clearing the plugin search"
              placeholder="e.g: strapi-plugin-abcd"
            >
              Searching for a plugin
            </Searchbar>
          </SearchForm>
        `}}},name:"base"},l={render:()=>{const[e,r]=o.useState("");return a.jsx(u,{name:"searchbar",onClear:()=>r(""),value:e,onChange:s=>r(s.target.value),clearLabel:"Clearing the plugin search",placeholder:"e.g: strapi-plugin-abcd",disabled:!0,children:"Searching for a plugin"})},parameters:{docs:{source:{code:v`
          const [value, setValue] = React.useState('');

          <SearchForm>
            <Searchbar
              name="searchbar"
              onClear={() => setValue('')}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              clearLabel="Clearing the plugin search"
              placeholder="e.g: strapi-plugin-abcd"
              disabled
            >
              Searching for a plugin
            </Searchbar>
          </SearchForm>
        `}}},name:"disabled"};var h,g,m;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('');
    return <SearchForm>\r
        <Searchbar name="searchbar" onClear={() => setValue('')} value={value} onChange={e => setValue(e.target.value)} clearLabel="Clearing the plugin search" placeholder="e.g: strapi-plugin-abcd">\r
          Searching for a plugin\r
        </Searchbar>\r
      </SearchForm>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          const [value, setValue] = React.useState('');

          <SearchForm>
            <Searchbar
              name="searchbar"
              onClear={() => setValue('')}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              clearLabel="Clearing the plugin search"
              placeholder="e.g: strapi-plugin-abcd"
            >
              Searching for a plugin
            </Searchbar>
          </SearchForm>
        \`
      }
    }
  },
  name: 'base'
} satisfies Story`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var b,S,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('');
    return <Searchbar name="searchbar" onClear={() => setValue('')} value={value} onChange={e => setValue(e.target.value)} clearLabel="Clearing the plugin search" placeholder="e.g: strapi-plugin-abcd" disabled>\r
        Searching for a plugin\r
      </Searchbar>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          const [value, setValue] = React.useState('');

          <SearchForm>
            <Searchbar
              name="searchbar"
              onClear={() => setValue('')}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              clearLabel="Clearing the plugin search"
              placeholder="e.g: strapi-plugin-abcd"
              disabled
            >
              Searching for a plugin
            </Searchbar>
          </SearchForm>
        \`
      }
    }
  },
  name: 'disabled'
} satisfies Story`,...(f=(S=l.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const H=["Base","Disabled"],J=Object.freeze(Object.defineProperty({__proto__:null,Base:n,Disabled:l,__namedExportsOrder:H,default:z},Symbol.toStringTag,{value:"Module"}));export{n as B,l as D,J as S,u as a};
