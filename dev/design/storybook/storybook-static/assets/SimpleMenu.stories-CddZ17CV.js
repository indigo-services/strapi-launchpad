import{j as e,W as i}from"./iframe-_cKE9r89.js";import{d as c}from"./index-BxBVU389.js";import{S as s,M as n,b as j,a as v,c as w,L as a,d as B}from"./SimpleMenu-Dnwze8Kc.js";import{I as L}from"./IconButton-Uvk00hK3.js";const y={title:"Components/SimpleMenu",component:s,parameters:{chromatic:{disableSnapshot:!1}}},o={render:()=>e.jsxs(s,{label:"Actions",children:[e.jsx(n,{startIcon:e.jsx(i,{}),onSelect:()=>console.log("opening"),children:"Open"}),e.jsx(n,{endIcon:e.jsx(i,{}),disabled:!0,onSelect:()=>console.log("cloning"),children:"Disabled"}),e.jsx(n,{onSelect:()=>console.log("editing"),children:"Edit"}),e.jsx(n,{startIcon:e.jsx(i,{}),variant:"danger",onSelect:()=>console.log("delete"),children:"Delete"})]}),parameters:{docs:{source:{code:c`
          <SimpleMenu label="Actions">
            <MenuItem startIcon={<Bell />} onSelect={() => console.log('opening')}>
              Open
            </MenuItem>
            <MenuItem endIcon={<Bell />} disabled onSelect={() => console.log('cloning')}>
              Disabled
            </MenuItem>
            <MenuItem onSelect={() => console.log('editing')}>Edit</MenuItem>
            <MenuItem startIcon={<Bell />} variant="danger" onSelect={() => console.log('delete')}>
              Delete
            </MenuItem>
          </SimpleMenu>
        `}}},name:"basic"},t={render:()=>e.jsxs(s,{label:"Notifications",tag:L,icon:e.jsx(i,{}),children:[e.jsx(n,{onSelect:()=>console.log("view notification"),children:"Your review has been requested!"}),e.jsx(n,{onSelect:()=>console.log("view notification"),children:"There was an error with your billing."})]}),parameters:{docs:{source:{code:c`
          <SimpleMenu label="Notifications" tag={IconButton} icon={<Bell />}>
            <MenuItem onSelect={() => console.log('view notification')}>Your review has been requested!</MenuItem>
            <MenuItem onSelect={() => console.log('view notification')}>There was an error with your billing.</MenuItem>
          </SimpleMenu>
        `}}},name:"with icons"},r={render:()=>e.jsxs(s,{label:"Navigation",children:[e.jsx(n,{href:"/",isLink:!0,children:"Home"}),e.jsx(n,{href:"/accounts",startIcon:e.jsx(i,{}),isLink:!0,disabled:!0,children:"Accounts"}),e.jsx(n,{href:"https://strapi.io/",isExternal:!0,children:"Billing Provider"})]}),parameters:{docs:{source:{code:c`
          <SimpleMenu label="Navigation">
            <MenuItem href="/" isLink>
              Home
            </MenuItem>
            <MenuItem href="/accounts" isLink>
              Accounts
            </MenuItem>
            <MenuItem href="https://strapi.io/" isExternal>
              Billing Provider
            </MenuItem>
          </SimpleMenu>
        `}}},name:"with links"},l={render:()=>e.jsxs(s,{label:"Actions",children:[e.jsxs(j,{children:[e.jsx(v,{children:"Add new component above"}),e.jsxs(w,{children:[e.jsx(a,{children:"Category 1"}),e.jsx(n,{onSelect:()=>console.log("adding component 1"),children:"Component 1"}),e.jsx(n,{onSelect:()=>console.log("adding component 2"),children:"Component 2"}),e.jsx(B,{}),e.jsx(a,{children:"Category 2"}),e.jsx(n,{onSelect:()=>console.log("adding component 3"),children:"Component 3"})]})]}),e.jsx(n,{color:"danger600",onSelect:()=>console.log("delete"),children:"Delete component"})]}),name:"nested menu"};var u,m,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <SimpleMenu label="Actions">\r
      <MenuItem startIcon={<Bell />} onSelect={() => console.log('opening')}>\r
        Open\r
      </MenuItem>\r
      <MenuItem endIcon={<Bell />} disabled onSelect={() => console.log('cloning')}>\r
        Disabled\r
      </MenuItem>\r
      <MenuItem onSelect={() => console.log('editing')}>Edit</MenuItem>\r
      <MenuItem startIcon={<Bell />} variant="danger" onSelect={() => console.log('delete')}>\r
        Delete\r
      </MenuItem>\r
    </SimpleMenu>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <SimpleMenu label="Actions">
            <MenuItem startIcon={<Bell />} onSelect={() => console.log('opening')}>
              Open
            </MenuItem>
            <MenuItem endIcon={<Bell />} disabled onSelect={() => console.log('cloning')}>
              Disabled
            </MenuItem>
            <MenuItem onSelect={() => console.log('editing')}>Edit</MenuItem>
            <MenuItem startIcon={<Bell />} variant="danger" onSelect={() => console.log('delete')}>
              Delete
            </MenuItem>
          </SimpleMenu>
        \`
      }
    }
  },
  name: 'basic'
} satisfies Story`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var M,p,g;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <SimpleMenu label="Notifications" tag={IconButton} icon={<Bell />}>\r
      <MenuItem onSelect={() => console.log('view notification')}>Your review has been requested!</MenuItem>\r
      <MenuItem onSelect={() => console.log('view notification')}>There was an error with your billing.</MenuItem>\r
    </SimpleMenu>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <SimpleMenu label="Notifications" tag={IconButton} icon={<Bell />}>
            <MenuItem onSelect={() => console.log('view notification')}>Your review has been requested!</MenuItem>
            <MenuItem onSelect={() => console.log('view notification')}>There was an error with your billing.</MenuItem>
          </SimpleMenu>
        \`
      }
    }
  },
  name: 'with icons'
} satisfies Story`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var I,S,h;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <SimpleMenu label="Navigation">\r
      <MenuItem href="/" isLink>\r
        Home\r
      </MenuItem>\r
      <MenuItem href="/accounts" startIcon={<Bell />} isLink disabled>\r
        Accounts\r
      </MenuItem>\r
      <MenuItem href="https://strapi.io/" isExternal>\r
        Billing Provider\r
      </MenuItem>\r
    </SimpleMenu>,
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <SimpleMenu label="Navigation">
            <MenuItem href="/" isLink>
              Home
            </MenuItem>
            <MenuItem href="/accounts" isLink>
              Accounts
            </MenuItem>
            <MenuItem href="https://strapi.io/" isExternal>
              Billing Provider
            </MenuItem>
          </SimpleMenu>
        \`
      }
    }
  },
  name: 'with links'
} satisfies Story`,...(h=(S=r.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var b,f,x;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <SimpleMenu label="Actions">\r
      <Menu.SubRoot>\r
        <Menu.SubTrigger>Add new component above</Menu.SubTrigger>\r
        <Menu.SubContent>\r
          <Menu.Label>Category 1</Menu.Label>\r
          <MenuItem onSelect={() => console.log('adding component 1')}>Component 1</MenuItem>\r
          <MenuItem onSelect={() => console.log('adding component 2')}>Component 2</MenuItem>\r
          <Menu.Separator />\r
          <Menu.Label>Category 2</Menu.Label>\r
          <MenuItem onSelect={() => console.log('adding component 3')}>Component 3</MenuItem>\r
        </Menu.SubContent>\r
      </Menu.SubRoot>\r
      <MenuItem color="danger600" onSelect={() => console.log('delete')}>\r
        Delete component\r
      </MenuItem>\r
    </SimpleMenu>,
  name: 'nested menu'
} satisfies Story`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const C=["Basic","WithIcons","WithLinks","NestedMenu"],E=Object.freeze(Object.defineProperty({__proto__:null,Basic:o,NestedMenu:l,WithIcons:t,WithLinks:r,__namedExportsOrder:C,default:y},Symbol.toStringTag,{value:"Module"}));export{o as B,l as N,E as S,t as W,r as a};
