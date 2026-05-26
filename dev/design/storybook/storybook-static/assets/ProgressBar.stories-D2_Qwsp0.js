import{r as o,$ as j,y as S,_,j as l,p as M,F as w,T as N}from"./iframe-_cKE9r89.js";import{d as C}from"./index-BxBVU389.js";const E="Progress",f=100,[V,Q]=j(E),[B,F]=V(E),R=o.forwardRef((e,r)=>{const{__scopeProgress:t,value:a,max:n,getValueLabel:s=z,...g}=e,c=$(n)?n:f,i=I(a,c)?a:null,A=p(i)?s(i,c):void 0;return o.createElement(B,{scope:t,value:i,max:c},o.createElement(S.div,_({"aria-valuemax":c,"aria-valuemin":0,"aria-valuenow":p(i)?i:void 0,"aria-valuetext":A,role:"progressbar","data-state":T(i,c),"data-value":i??void 0,"data-max":c},g,{ref:r})))});R.propTypes={max(e,r,t){const a=e[r],n=String(a);return a&&!$(a)?new Error(k(n,t)):null},value(e,r,t){const a=e[r],n=String(a),s=$(e.max)?e.max:f;return a!=null&&!I(a,s)?new Error(D(n,t)):null}};const L="ProgressIndicator",O=o.forwardRef((e,r)=>{var t;const{__scopeProgress:a,...n}=e,s=F(L,a);return o.createElement(S.div,_({"data-state":T(s.value,s.max),"data-value":(t=s.value)!==null&&t!==void 0?t:void 0,"data-max":s.max},n,{ref:r}))});function z(e,r){return`${Math.round(e/r*100)}%`}function T(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function p(e){return typeof e=="number"}function $(e){return p(e)&&!isNaN(e)&&e>0}function I(e,r){return p(e)&&!isNaN(e)&&e<=r&&e>=0}function k(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${f}\`.`}function D(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${f} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`}const G=R,q=O,m=o.forwardRef(({size:e="M",value:r,...t},a)=>l.jsx(J,{ref:a,$size:e,...t,children:l.jsx(U,{style:{transform:`translate3D(-${100-(r??0)}%, 0, 0)`}})})),J=M(G)`
  position: relative;
  overflow: hidden;
  width: ${e=>e.$size==="S"?"7.8rem":"10.2rem"};
  height: ${e=>e.$size==="S"?"0.4rem":"0.8rem"};
  background-color: ${e=>e.theme.colors.neutral600};
  border-radius: ${e=>e.theme.borderRadius};

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`,U=M(q)`
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: 100%;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[320]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`;m.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{size:{required:!1,tsType:{name:"union",raw:"'S' | 'M'",elements:[{name:"literal",value:"'S'"},{name:"literal",value:"'M'"}]},description:"",defaultValue:{value:"'M'",computed:!1}}},composes:["Omit"]};const X={title:"Components/ProgressBar",component:m,parameters:{chromatic:{disableSnapshot:!1}},decorators:[e=>l.jsx(w,{padding:10,width:"100%",height:"100%",justifyContent:"center",background:"neutral800",children:l.jsx(e,{})})],render:e=>l.jsx(m,{...e}),argTypes:{size:{control:"select",options:["S","M"]},value:{control:"range"}},args:{size:"M",value:50}},u={name:"base"},d={name:"animated preview",parameters:{chromatic:{disableSnapshot:!0},docs:{source:{code:C`
        <Flex direction="column" gap={4}>
          <ProgressBar value={50} />
          <Typography textColor="neutral0">Loading 50%</Typography>
        </Flex>
        `}}},render:e=>{const[r,t]=o.useState(0),a=o.useRef(),n=o.useCallback(()=>{a.current=setInterval(()=>{t(s=>{const g=Math.floor(Math.random()*10);return Math.min(s+g,100)})},400)},[]);return o.useEffect(()=>(n(),()=>{a.current&&(clearInterval(a.current),a.current=void 0)}),[n]),o.useEffect(()=>{r===100&&a.current&&(clearInterval(a.current),t(0),n())},[r,n]),l.jsxs(w,{direction:"column",gap:4,children:[l.jsx(m,{...e,value:r}),l.jsx(N,{textColor:"neutral0",children:`Loading ${r}%`})]})}};var v,x,h;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'base'
} satisfies Story`,...(h=(x=u.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,P,y;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'animated preview',
  parameters: {
    chromatic: {
      disableSnapshot: true
    },
    docs: {
      source: {
        code: outdent\`
        <Flex direction="column" gap={4}>
          <ProgressBar value={50} />
          <Typography textColor="neutral0">Loading 50%</Typography>
        </Flex>
        \`
      }
    }
  },
  render: args => {
    const [progress, setProgress] = React.useState(0);
    const interval = React.useRef<NodeJS.Timeout>();
    const startAnimation = React.useCallback(() => {
      interval.current = setInterval(() => {
        setProgress(prev => {
          /**\r
           * Random number between 0-10\r
           */
          const newProgress = Math.floor(Math.random() * 10);
          return Math.min(prev + newProgress, 100);
        });
      }, 400);
    }, []);
    React.useEffect(() => {
      startAnimation();
      return () => {
        if (interval.current) {
          clearInterval(interval.current);
          interval.current = undefined;
        }
      };
    }, [startAnimation]);
    React.useEffect(() => {
      if (progress === 100) {
        if (interval.current) {
          clearInterval(interval.current);
          setProgress(0);
          startAnimation();
        }
      }
    }, [progress, startAnimation]);
    return <Flex direction="column" gap={4}>\r
        <ProgressBar {...args} value={progress} />\r
        <Typography textColor="neutral0">{\`Loading \${progress}%\`}</Typography>\r
      </Flex>;
  }
} satisfies Story`,...(y=(P=d.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};const Z=["Base","Animated"],W=Object.freeze(Object.defineProperty({__proto__:null,Animated:d,Base:u,__namedExportsOrder:Z,default:X},Symbol.toStringTag,{value:"Module"}));export{d as A,u as B,W as P,m as a};
