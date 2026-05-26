import{j as o,P as m}from"./iframe-_cKE9r89.js";import{d as p}from"./index-BxBVU389.js";import{T as s,I as u}from"./IconButton-Uvk00hK3.js";const g={title:"Components/Tooltip",component:s,args:{label:"Delete all items"},render:d=>o.jsx(s,{...d,children:o.jsx(u,{withTooltip:!1,label:"delete",children:o.jsx(m,{})})}),parameters:{docs:{source:{code:p`
          <Tooltip label="Delete all items">
            <IconButton withTooltip={false} label="delete">
              <Trash />
            </IconButton>
          </Tooltip>
        `}},chromatic:{disableSnapshot:!0}}},e={name:"base"},t={name:"positioned",argTypes:{align:{control:"select",options:["start","center","end"]},side:{control:"select",options:["left","right","top","bottom"]}},args:{align:"center",open:!0,side:"right"},parameters:{docs:{source:{code:p`
          <Tooltip label="Delete all items" align="center" side="right">
            <IconButton withTooltip={false} label="delete">
              <Trash />
            </IconButton>
          </Tooltip>
        `}},chromatic:{disableSnapshot:!1}}};var a,r,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'base'
} satisfies Story`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var i,n,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'positioned',
  argTypes: {
    align: {
      control: 'select',
      options: ['start', 'center', 'end']
    },
    side: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom']
    }
  },
  args: {
    align: 'center',
    open: true,
    side: 'right'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          <Tooltip label="Delete all items" align="center" side="right">
            <IconButton withTooltip={false} label="delete">
              <Trash />
            </IconButton>
          </Tooltip>
        \`
      }
    },
    chromatic: {
      disableSnapshot: false
    }
  }
} satisfies Story`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const h=["Base","Positioned"],B=Object.freeze(Object.defineProperty({__proto__:null,Base:e,Positioned:t,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{e as B,t as P,B as T};
