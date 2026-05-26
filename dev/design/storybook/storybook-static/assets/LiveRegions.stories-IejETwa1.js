import{r as C,am as a,an as j,j as o,F as i}from"./iframe-_cKE9r89.js";import{d as c}from"./index-BxBVU389.js";import{B as k}from"./Button-BvqyPouE.js";const l=e=>{const t=document.querySelector(`#${a.Log}`);t&&(t.innerText=e)},m=e=>{const t=document.querySelector(`#${a.Status}`);t&&(t.innerText=e)},d=e=>{const t=document.querySelector(`#${a.Alert}`);t&&(t.innerText=e)},F=()=>(C.useEffect(()=>()=>{l(""),d(""),m("")},[]),{notifyLog:l,notifyAlert:d,notifyStatus:m}),E={title:"Components/LiveRegions",component:j},s={render:()=>o.jsx(i,{direction:"column",alignItems:"center",gap:3,children:o.jsx(u,{notifyType:"log"})}),parameters:{docs:{source:{code:c`
          const { notifyLog } = useNotifyAT();

          <Button onClick={() => notifyLog('This is a log message')}>Notify log</Button>
        `}}},name:"log"},r={render:()=>o.jsx(i,{direction:"column",alignItems:"center",gap:3,children:o.jsx(u,{notifyType:"alert"})}),parameters:{docs:{source:{code:c`
          const { notifyAlert } = useNotifyAT();

          <Button onClick={() => notifyAlert('This is an alert')}>Notify alert</Button>
        `}}},name:"alert"},n={render:()=>o.jsx(i,{direction:"column",alignItems:"center",gap:3,children:o.jsx(u,{notifyType:"status"})}),parameters:{docs:{source:{code:c`
          const { notifyStatus } = useNotifyAT();

          <Button onClick={() => notifyStatus('This is a status message')}>Notify status</Button>
        `}}},name:"status"},u=({notifyType:e})=>{const{notifyAlert:t,notifyStatus:B,notifyLog:L}=F(),N=()=>{e==="log"?L("This is a log message"):e==="alert"?t("This is an alert"):B("This is a status message")};return o.jsxs(k,{onClick:N,children:["Notify ",e]})};var f,y,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <Flex direction="column" alignItems="center" gap={3}>\r
        <StoryComponent notifyType="log" />\r
      </Flex>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          const { notifyLog } = useNotifyAT();

          <Button onClick={() => notifyLog('This is a log message')}>Notify log</Button>
        \`
      }
    }
  },
  name: 'log'
} satisfies Story`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var p,S,T;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <Flex direction="column" alignItems="center" gap={3}>\r
        <StoryComponent notifyType="alert" />\r
      </Flex>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          const { notifyAlert } = useNotifyAT();

          <Button onClick={() => notifyAlert('This is an alert')}>Notify alert</Button>
        \`
      }
    }
  },
  name: 'alert'
} satisfies Story`,...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var x,A,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return <Flex direction="column" alignItems="center" gap={3}>\r
        <StoryComponent notifyType="status" />\r
      </Flex>;
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
          const { notifyStatus } = useNotifyAT();

          <Button onClick={() => notifyStatus('This is a status message')}>Notify status</Button>
        \`
      }
    }
  },
  name: 'status'
} satisfies Story`,...(h=(A=n.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};const I=["Log","Alert","Status"],O=Object.freeze(Object.defineProperty({__proto__:null,Alert:r,Log:s,Status:n,__namedExportsOrder:I,default:E},Symbol.toStringTag,{value:"Module"}));export{r as A,O as L,n as S,s as a};
