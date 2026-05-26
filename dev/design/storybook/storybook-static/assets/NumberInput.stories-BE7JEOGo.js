import{r as V,v as pe,j as p,F as ue,ac as W,p as fe}from"./iframe-_cKE9r89.js";import{d as F}from"./index-BxBVU389.js";import{I as he}from"./index-JVGtNO81.js";import{K as B}from"./keyboardKeys-DO3xpnD3.js";import{a as be}from"./useControllableState-CIwy89gb.js";import{I as ge,R as ye,L as $e,E as Se,H as Ne}from"./Field-Cwhta1v_.js";let A=new Map,z=!1;try{z=new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay==="exceptZero"}catch{}let j=!1;try{j=new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style==="unit"}catch{}const ce={degree:{narrow:{default:"°","ja-JP":" 度","zh-TW":"度","sl-SI":" °"}}};class me{format(e){let t="";if(!z&&this.options.signDisplay!=null?t=we(this.numberFormatter,this.options.signDisplay,e):t=this.numberFormatter.format(e),this.options.style==="unit"&&!j){var s;let{unit:i,unitDisplay:n="short",locale:o}=this.resolvedOptions();if(!i)return t;let l=(s=ce[i])===null||s===void 0?void 0:s[n];t+=l[o]||l.default}return t}formatToParts(e){return this.numberFormatter.formatToParts(e)}formatRange(e,t){if(typeof this.numberFormatter.formatRange=="function")return this.numberFormatter.formatRange(e,t);if(t<e)throw new RangeError("End date must be >= start date");return`${this.format(e)} – ${this.format(t)}`}formatRangeToParts(e,t){if(typeof this.numberFormatter.formatRangeToParts=="function")return this.numberFormatter.formatRangeToParts(e,t);if(t<e)throw new RangeError("End date must be >= start date");let s=this.numberFormatter.formatToParts(e),i=this.numberFormatter.formatToParts(t);return[...s.map(n=>({...n,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...i.map(n=>({...n,source:"endRange"}))]}resolvedOptions(){let e=this.numberFormatter.resolvedOptions();return!z&&this.options.signDisplay!=null&&(e={...e,signDisplay:this.options.signDisplay}),!j&&this.options.style==="unit"&&(e={...e,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),e}constructor(e,t={}){this.numberFormatter=ve(e,t),this.options=t}}function ve(r,e={}){let{numberingSystem:t}=e;if(t&&r.includes("-nu-")&&(r.includes("-u-")||(r+="-u-"),r+=`-nu-${t}`),e.style==="unit"&&!j){var s;let{unit:o,unitDisplay:l="short"}=e;if(!o)throw new Error('unit option must be provided with style: "unit"');if(!(!((s=ce[o])===null||s===void 0)&&s[l]))throw new Error(`Unsupported unit ${o} with unitDisplay = ${l}`);e={...e,style:"decimal"}}let i=r+(e?Object.entries(e).sort((o,l)=>o[0]<l[0]?-1:1).join():"");if(A.has(i))return A.get(i);let n=new Intl.NumberFormat(r,e);return A.set(i,n),n}function we(r,e,t){if(e==="auto")return r.format(t);if(e==="never")return r.format(Math.abs(t));{let s=!1;if(e==="always"?s=t>0||Object.is(t,0):e==="exceptZero"&&(Object.is(t,-0)||Object.is(t,0)?t=Math.abs(t):s=t>0),s){let i=r.format(-t),n=r.format(t),o=i.replace(n,"").replace(/\u200e|\u061C/,"");return[...o].length!==1&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),i.replace(n,"!!!").replace(o,"+").replace("!!!",n)}else return r.format(t)}}const Pe=new RegExp("^.*\\(.*\\).*$"),Fe=["latn","arab","hanidec"];class de{parse(e){return T(this.locale,this.options,e).parse(e)}isValidPartialNumber(e,t,s){return T(this.locale,this.options,e).isValidPartialNumber(e,t,s)}getNumberingSystem(e){return T(this.locale,this.options,e).options.numberingSystem}constructor(e,t={}){this.locale=e,this.options=t}}const K=new Map;function T(r,e,t){let s=U(r,e);if(!r.includes("-nu-")&&!s.isValidPartialNumber(t)){for(let i of Fe)if(i!==s.options.numberingSystem){let n=U(r+(r.includes("-u-")?"-nu-":"-u-nu-")+i,e);if(n.isValidPartialNumber(t))return n}}return s}function U(r,e){let t=r+(e?Object.entries(e).sort((i,n)=>i[0]<n[0]?-1:1).join():""),s=K.get(t);return s||(s=new xe(r,e),K.set(t,s)),s}class xe{parse(e){let t=this.sanitize(e);if(this.symbols.group&&(t=R(t,this.symbols.group,"")),this.symbols.decimal&&(t=t.replace(this.symbols.decimal,".")),this.symbols.minusSign&&(t=t.replace(this.symbols.minusSign,"-")),t=t.replace(this.symbols.numeral,this.symbols.index),this.options.style==="percent"){let o=t.indexOf("-");t=t.replace("-","");let l=t.indexOf(".");l===-1&&(l=t.length),t=t.replace(".",""),l-2===0?t=`0.${t}`:l-2===-1?t=`0.0${t}`:l-2===-2?t="0.00":t=`${t.slice(0,l-2)}.${t.slice(l-2)}`,o>-1&&(t=`-${t}`)}let s=t?+t:NaN;if(isNaN(s))return NaN;if(this.options.style==="percent"){var i,n;let o={...this.options,style:"decimal",minimumFractionDigits:Math.min(((i=this.options.minimumFractionDigits)!==null&&i!==void 0?i:0)+2,20),maximumFractionDigits:Math.min(((n=this.options.maximumFractionDigits)!==null&&n!==void 0?n:0)+2,20)};return new de(this.locale,o).parse(new me(this.locale,o).format(s))}return this.options.currencySign==="accounting"&&Pe.test(e)&&(s=-1*s),s}sanitize(e){return e=e.replace(this.symbols.literals,""),this.symbols.minusSign&&(e=e.replace("-",this.symbols.minusSign)),this.options.numberingSystem==="arab"&&(this.symbols.decimal&&(e=e.replace(",",this.symbols.decimal),e=e.replace("،",this.symbols.decimal)),this.symbols.group&&(e=R(e,".",this.symbols.group))),this.options.locale==="fr-FR"&&(e=R(e,"."," ")),e}isValidPartialNumber(e,t=-1/0,s=1/0){return e=this.sanitize(e),this.symbols.minusSign&&e.startsWith(this.symbols.minusSign)&&t<0?e=e.slice(this.symbols.minusSign.length):this.symbols.plusSign&&e.startsWith(this.symbols.plusSign)&&s>0&&(e=e.slice(this.symbols.plusSign.length)),this.symbols.group&&e.startsWith(this.symbols.group)||this.symbols.decimal&&e.indexOf(this.symbols.decimal)>-1&&this.options.maximumFractionDigits===0?!1:(this.symbols.group&&(e=R(e,this.symbols.group,"")),e=e.replace(this.symbols.numeral,""),this.symbols.decimal&&(e=e.replace(this.symbols.decimal,"")),e.length===0)}constructor(e,t={}){this.locale=e,this.formatter=new Intl.NumberFormat(e,t),this.options=this.formatter.resolvedOptions(),this.symbols=Ee(e,this.formatter,this.options,t);var s,i;this.options.style==="percent"&&(((s=this.options.minimumFractionDigits)!==null&&s!==void 0?s:0)>18||((i=this.options.maximumFractionDigits)!==null&&i!==void 0?i:0)>18)&&console.warn("NumberParser cannot handle percentages with greater than 18 decimal places, please reduce the number in your options.")}}const k=new Set(["decimal","fraction","integer","minusSign","plusSign","group"]),De=[0,4,2,1,11,20,3,7,100,21,.1,1.1];function Ee(r,e,t,s){var i,n,o,l;let h=new Intl.NumberFormat(r,{...t,minimumSignificantDigits:1,maximumSignificantDigits:21}),b=h.formatToParts(-10000.111),d=h.formatToParts(10000.111),g=De.map(u=>h.formatToParts(u));var m;let _=(m=(i=b.find(u=>u.type==="minusSign"))===null||i===void 0?void 0:i.value)!==null&&m!==void 0?m:"-",f=(n=d.find(u=>u.type==="plusSign"))===null||n===void 0?void 0:n.value;!f&&((s==null?void 0:s.signDisplay)==="exceptZero"||(s==null?void 0:s.signDisplay)==="always")&&(f="+");let M=(o=new Intl.NumberFormat(r,{...t,minimumFractionDigits:2,maximumFractionDigits:2}).formatToParts(.001).find(u=>u.type==="decimal"))===null||o===void 0?void 0:o.value,x=(l=b.find(u=>u.type==="group"))===null||l===void 0?void 0:l.value,D=b.filter(u=>!k.has(u.type)).map(u=>q(u.value)),E=g.flatMap(u=>u.filter(y=>!k.has(y.type)).map(y=>q(y.value))),I=[...new Set([...D,...E])].sort((u,y)=>y.length-u.length),L=I.length===0?new RegExp("[\\p{White_Space}]","gu"):new RegExp(`${I.join("|")}|[\\p{White_Space}]`,"gu"),a=[...new Intl.NumberFormat(t.locale,{useGrouping:!1}).format(9876543210)].reverse(),c=new Map(a.map((u,y)=>[u,y])),$=new RegExp(`[${a.join("")}]`,"g");return{minusSign:_,plusSign:f,decimal:M,group:x,literals:L,numeral:$,index:u=>String(c.get(u))}}function R(r,e,t){return r.replaceAll?r.replaceAll(e,t):r.split(e).join(t)}function q(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}const Ie="",C=V.forwardRef(({startAction:r,locale:e,onValueChange:t,value:s,step:i=1,disabled:n=!1,...o},l)=>{const h=pe("NumberInput"),b=e||h.locale,d=V.useRef(new de(b,{style:"decimal"})),g=V.useRef(new me(b,{maximumFractionDigits:20})),[m,_]=Re({prop(a){const c=String(s);return isNaN(Number(c))||c!==a&&a!==""?a:g.current.format(Number(s))},defaultProp:Ie,onChange(a){if(!t)return;const c=d.current.parse(a??"");t(isNaN(c)?void 0:c)}}),f=a=>{_(String(a))},O=({target:{value:a}})=>{d.current.isValidPartialNumber(a)&&f(a)},x=(a=>{const c=a.toString();return c.includes(".")?c.split(".")[1].length:0})(i),D=()=>{if(!m){f(i);return}const a=d.current.parse(m),c=isNaN(a)?i:a+i,$=parseFloat(c.toFixed(x));f(g.current.format($))},E=()=>{if(!m){f(-i);return}const a=d.current.parse(m),c=isNaN(a)?-i:a-i,$=parseFloat(c.toFixed(x));f(g.current.format($))},I=a=>{if(!n)switch(a.key){case B.DOWN:{a.preventDefault(),E();break}case B.UP:{a.preventDefault(),D();break}}},L=()=>{if(m){const a=d.current.parse(m),c=isNaN(a)?"":g.current.format(a);f(c)}};return p.jsx(ge,{ref:l,startAction:r,disabled:n,type:"text",inputMode:"decimal",onChange:O,onKeyDown:I,onBlur:L,value:m,endAction:p.jsxs(ue,{direction:"column",children:[p.jsx(H,{disabled:n,"aria-hidden":!0,$reverse:!0,onClick:D,tabIndex:-1,type:"button","data-testid":"ArrowUp",children:p.jsx(W,{fill:"neutral500"})}),p.jsx(H,{disabled:n,"aria-hidden":!0,onClick:E,tabIndex:-1,type:"button","data-testid":"ArrowDown",children:p.jsx(W,{fill:"neutral500"})})]}),...o})}),H=fe.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${({$reverse:r})=>r?"-2px":"2px"});
  cursor: ${({disabled:r})=>r?"not-allowed":void 0};
  height: 1.1rem;

  svg {
    width: 1.2rem;
    transform: ${({$reverse:r})=>r?"rotateX(180deg)":void 0};
  }
`;function Re({prop:r,defaultProp:e,onChange:t=()=>{}}){const[s,i]=be({defaultProp:e,onChange:t}),n=r!==void 0,o=r instanceof Function?r(s):r,l=n?o:s,h=he(t),b=V.useCallback(d=>{if(n){const m=typeof d=="function"?d(o):d;m!==o&&(h(m),i(d))}else i(d)},[n,o,i,h]);return[l,b]}C.__docgenInfo={description:"",methods:[],displayName:"NumberInput",props:{onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:""},locale:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"number"},description:""},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const{useArgs:Ve}=__STORYBOOK_MODULE_PREVIEW_API__,je={title:"Inputs/NumberInput",component:C,parameters:{chromatic:{disableSnapshot:!1},docs:{source:{code:F`
        <NumberInput placeholder="Price(Eur)" />`}}},argTypes:{size:{control:"radio",options:["S","M"]},onValueChange:{control:!1,description:"Callback function triggered when the value of the input changes.",type:{name:"function",required:!0},table:{type:{summary:"function",detail:"(value: number | undefined) => void"}},defaultValue:{summary:"() => void;"}},locale:{control:!1,description:"Locale used for number formatting and parsing.",table:{type:{summary:"string",detail:"eg. en-EN, fr-FR"}},defaultValue:{summary:"en-EN"}},value:{control:!1,description:"The controlled value of the input.",table:{type:{summary:"number"}}},step:{control:"number",description:"The step size for incrementing or decrementing the value.",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},disabled:{control:"boolean",description:"Disables the input when set to true.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}},args:{defaultValue:3.2,disabled:!1,placeholder:"Price(Eur)",size:"M",onValueChange:()=>{}},render:r=>p.jsx(ue,{direction:"column",alignItems:"stretch",gap:4,children:p.jsx(C,{...r})})},S={name:"Base"},N={args:{locale:"fr"},parameters:{docs:{source:{code:F`
        <NumberInput locale="fr" />`}}},name:"Locale"},v={args:{disabled:!0},parameters:{docs:{source:{code:F`
        <NumberInput disabled />`}}},name:"Disabled"},w={args:{size:"S"},parameters:{docs:{source:{code:F`
        <NumberInput size="S" />`}}},name:"Small size"},P={render:({error:r,hint:e,label:t})=>{const[,s]=Ve();return p.jsxs(ye,{id:"with_field",error:r,hint:e,children:[p.jsx($e,{children:t}),p.jsx(C,{id:"with_field",placeholder:"Price(Eur)",onValueChange:i=>s({value:i}),value:3.14159265359}),p.jsx(Se,{}),p.jsx(Ne,{})]})},args:{label:"Number",error:"Error",hint:"Description line lorem ipsum"},parameters:{docs:{source:{code:F`
        <Field.Root id="with_field" error="Error" hint="Description line lorem ipsum">
          <Field.Label>Number</Field.Label>
          <NumberInput
            id="with_field"
            placeholder="Price(Eur)"
            onValueChange={() => {}}
            value={3.14}
          />
          <Field.Error />
          <Field.Hint />
        </Field.Root>
        `}}},name:"With field"};var G,Y,Z;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Base'
} satisfies Story`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var J,X,Q;N.parameters={...N.parameters,docs:{...(J=N.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    locale: 'fr'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <NumberInput locale="fr" />\`
      }
    }
  },
  name: 'Locale'
} satisfies Story`,...(Q=(X=N.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var ee,te,re;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <NumberInput disabled />\`
      }
    }
  },
  name: 'Disabled'
} satisfies Story`,...(re=(te=v.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ie,ne;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    size: 'S'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <NumberInput size="S" />\`
      }
    }
  },
  name: 'Small size'
} satisfies Story`,...(ne=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var ae,oe,le;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: ({
    error,
    hint,
    label
  }) => {
    const [, updateArgs] = useArgs();
    return <Field.Root id="with_field" error={error} hint={hint}>\r
        <Field.Label>{label}</Field.Label>\r
        <NumberInput id="with_field" placeholder="Price(Eur)" onValueChange={value => updateArgs({
        value: value
      })} value={3.14159265359} />\r
        <Field.Error />\r
        <Field.Hint />\r
      </Field.Root>;
  },
  args: {
    label: 'Number',
    error: 'Error',
    hint: 'Description line lorem ipsum'
  },
  parameters: {
    docs: {
      source: {
        code: outdent\`
        <Field.Root id="with_field" error="Error" hint="Description line lorem ipsum">
          <Field.Label>Number</Field.Label>
          <NumberInput
            id="with_field"
            placeholder="Price(Eur)"
            onValueChange={() => {}}
            value={3.14}
          />
          <Field.Error />
          <Field.Hint />
        </Field.Root>
        \`
      }
    }
  },
  name: 'With field'
}`,...(le=(oe=P.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};const Ce=["Base","Locale","Disabled","Size","WithField"],We=Object.freeze(Object.defineProperty({__proto__:null,Base:S,Disabled:v,Locale:N,Size:w,WithField:P,__namedExportsOrder:Ce,default:je},Symbol.toStringTag,{value:"Module"}));export{S as B,v as D,N as L,We as N,w as S,P as W};
