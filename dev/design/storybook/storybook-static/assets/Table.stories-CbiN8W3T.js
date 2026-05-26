import{r as T,j as e,p as l,c as d,F as b,T as o,V as R,N as w,P as k,s as F,ac as z}from"./iframe-_cKE9r89.js";import{R as E,b as H,a as V,c as G,e as J,d as M}from"./RawTr-ChRAiJIW.js";import{D as K}from"./Divider-CPzIXYY1.js";import{C as u}from"./Checkbox-0fdbGYKe.js";import{I as O}from"./Avatar-CJl94LmM.js";import{I as h}from"./IconButton-Uvk00hK3.js";const Q=l(d)`
  overflow: hidden;
  border: 1px solid ${({theme:r})=>r.colors.neutral150};
`,X=l(E)`
  width: 100%;
  white-space: nowrap;
`,Y=l(d)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:r})=>r==="both"||r==="left"?"''":void 0};
    box-shadow: ${({theme:r})=>r.shadows.tableShadow};
    width: ${({theme:r})=>r.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:r})=>r==="both"||r==="right"?"''":void 0};
    box-shadow: ${({theme:r})=>r.shadows.tableShadow};
    width: ${({theme:r})=>r.spaces[2]};
    right: 0;
    top: 0;
  }
`,Z=l(d)`
  overflow-x: auto;
`,f=T.forwardRef(({footer:r,...i},c)=>{const s=T.useRef(null),[t,j]=T.useState(),$=y=>{const A=y.target.scrollWidth-y.target.clientWidth;if(y.target.scrollLeft===0){j("right");return}if(y.target.scrollLeft===A){j("left");return}y.target.scrollLeft>0&&j("both")};return T.useEffect(()=>{s.current.scrollWidth>s.current.clientWidth&&j("right")},[]),e.jsxs(Q,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[e.jsx(Y,{$overflowing:t,position:"relative",children:e.jsx(Z,{ref:s,onScroll:$,paddingLeft:6,paddingRight:6,children:e.jsx(X,{ref:c,...i})})}),r]})});f.__docgenInfo={description:"",methods:[],displayName:"Table",props:{colCount:{required:!0,tsType:{name:"number"},description:""},initialCol:{required:!1,tsType:{name:"number"},description:""},initialRow:{required:!1,tsType:{name:"number"},description:""},jumpStep:{required:!1,tsType:{name:"number"},description:""},rowCount:{required:!0,tsType:{name:"number"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ee=l(H)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,C=({children:r,...i})=>e.jsx(ee,{...i,children:r});C.__docgenInfo={description:"",methods:[],displayName:"Tbody",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const re=l(V)`
  border-bottom: 1px solid ${({theme:r})=>r.colors.neutral150};
`,v=({children:r,...i})=>e.jsx(re,{...i,children:r});v.__docgenInfo={description:"",methods:[],displayName:"Thead",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const te=l(G)`
  border-bottom: 1px solid ${({theme:r})=>r.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:r})=>r.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:r})=>r.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: 5.6rem;
  }
`,p=r=>e.jsx(te,{...r});p.__docgenInfo={description:"",methods:[],displayName:"Tr",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},"aria-rowindex":{required:!1,tsType:{name:"number"},description:""}}};const P=l(M)`
  vertical-align: middle;
  text-align: left;
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,a=T.forwardRef(({children:r,action:i,...c},s)=>e.jsx(P,{color:"neutral600",as:J,ref:s,...c,children:e.jsxs(b,{children:[r,i]})})),n=T.forwardRef(({children:r,...i},c)=>e.jsx(P,{color:"neutral800",ref:c,...i,children:r}));a.__docgenInfo={description:"",methods:[],displayName:"Th",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},"aria-colindex":{required:!1,tsType:{name:"number"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},coords:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  col: number;
  row: number;
}`,signature:{properties:[{key:"col",value:{name:"number",required:!0}},{key:"row",value:{name:"number",required:!0}}]}},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"@deprecated just pass everything as children."}}};n.__docgenInfo={description:"",methods:[],displayName:"Td",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},"aria-colindex":{required:!1,tsType:{name:"number"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},coords:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  col: number;
  row: number;
}`,signature:{properties:[{key:"col",value:{name:"number",required:!0}},{key:"row",value:{name:"number",required:!0}}]}},description:""}}};const oe=l(d)`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1rem;
    width: 1rem;
  }

  svg path {
    fill: ${({theme:r})=>r.colors.primary600};
  }
`,ae=l(d)`
  border-radius: 0 0 ${({theme:r})=>r.borderRadius} ${({theme:r})=>r.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,L=({children:r,icon:i,...c})=>e.jsxs("div",{children:[e.jsx(K,{}),e.jsx(ae,{tag:"button",background:"primary100",padding:5,...c,children:e.jsxs(b,{children:[e.jsx(oe,{"aria-hidden":!0,background:"primary200",children:i}),e.jsx(d,{paddingLeft:3,children:e.jsx(o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:r})})]})})]});L.__docgenInfo={description:"",methods:[],displayName:"TFooter",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ne={title:"Components/Table",component:f},x={render:()=>{const c={cover:"https://avatars.githubusercontent.com/u/3874873?v=4",description:"Chez Léon is a human sized Parisian",category:"French cuisine",contact:"Leon Lafrite",fallback:"LL"},s=[];for(let t=0;t<5;t++)s.push({...c,id:t});return e.jsx(d,{padding:8,background:"neutral100",children:e.jsxs(f,{colCount:10,rowCount:6,footer:e.jsx(L,{icon:e.jsx(F,{}),children:"Add another field to this collection type"}),children:[e.jsx(v,{children:e.jsxs(p,{children:[e.jsx(a,{children:e.jsx(u,{"aria-label":"Select all entries"})}),e.jsx(a,{children:e.jsx(o,{variant:"sigma",children:"ID"})}),e.jsx(a,{children:e.jsx(o,{variant:"sigma",children:"Cover"})}),e.jsx(a,{children:e.jsx(o,{variant:"sigma",children:"Description"})}),e.jsx(a,{children:e.jsx(o,{variant:"sigma",children:"Categories"})}),e.jsx(a,{children:e.jsx(o,{variant:"sigma",children:"Contact"})}),e.jsx(a,{children:e.jsx(R,{children:"Actions"})})]})}),e.jsx(C,{children:s.map(t=>e.jsxs(p,{children:[e.jsx(n,{children:e.jsx(u,{"aria-label":`Select ${t.contact}`})}),e.jsx(n,{children:e.jsx(o,{textColor:"neutral800",children:t.id})}),e.jsx(n,{children:e.jsx(O,{src:t.cover,alt:t.contact,fallback:t.fallback})}),e.jsx(n,{children:e.jsx(o,{textColor:"neutral800",children:t.description})}),e.jsx(n,{children:e.jsx(o,{textColor:"neutral800",children:t.category})}),e.jsx(n,{children:e.jsx(o,{textColor:"neutral800",children:t.contact})}),e.jsx(n,{children:e.jsxs(b,{children:[e.jsx("a",{href:"https://www.google.com",target:"_blank",rel:"noreferrer",children:"G"}),e.jsx(h,{onClick:()=>console.log("edit"),label:"Edit",borderWidth:0,children:e.jsx(w,{})}),e.jsx(d,{paddingLeft:1,children:e.jsx(h,{onClick:()=>console.log("delete"),label:"Delete",borderWidth:0,children:e.jsx(k,{})})})]})})]},t.id))})]})})},name:"base"},g={render:()=>{const c={cover:"https://avatars.githubusercontent.com/u/3874873?v=4",description:"Chez Léon is a human sized Parisian",category:"French cuisine",contact:"Leon Lafrite",fallback:"LL"},s=[];for(let t=0;t<5;t++)s.push({...c,id:t});return e.jsx(d,{padding:8,background:"neutral100",children:e.jsxs(f,{colCount:10,rowCount:6,children:[e.jsx(v,{children:e.jsxs(p,{children:[e.jsx(a,{children:e.jsx(u,{"aria-label":"Select all entries"})}),e.jsx(a,{children:e.jsx(o,{variant:"sigma",children:"ID"})}),e.jsx(a,{children:e.jsx(o,{variant:"sigma",children:"Cover"})}),e.jsx(a,{children:e.jsx(o,{variant:"sigma",children:"Description"})}),e.jsx(a,{children:e.jsx(o,{variant:"sigma",children:"Categories"})}),e.jsx(a,{children:e.jsx(o,{variant:"sigma",children:"Contact"})}),e.jsx(a,{children:e.jsx(R,{children:"Actions"})})]})}),e.jsx(C,{children:s.map(t=>e.jsxs(p,{children:[e.jsx(n,{children:e.jsx(u,{"aria-label":`Select ${t.contact}`})}),e.jsx(n,{children:e.jsx(o,{textColor:"neutral800",children:t.id})}),e.jsx(n,{children:e.jsx(O,{src:t.cover,alt:t.contact,fallback:t.fallback})}),e.jsx(n,{children:e.jsx(o,{textColor:"neutral800",children:t.description})}),e.jsx(n,{children:e.jsx(o,{textColor:"neutral800",children:t.category})}),e.jsx(n,{children:e.jsx(o,{textColor:"neutral800",children:t.contact})}),e.jsx(n,{children:e.jsxs(b,{children:[e.jsx(h,{onClick:()=>console.log("edit"),label:"Edit",borderWidth:0,children:e.jsx(w,{})}),e.jsx(d,{paddingLeft:1,children:e.jsx(h,{onClick:()=>console.log("delete"),label:"Delete",borderWidth:0,children:e.jsx(k,{})})})]})})]},t.id))})]})})},name:"base without footer"},m={render:()=>{const c={cover:"https://avatars.githubusercontent.com/u/3874873?v=4",description:"Chez Léon is a human sized Parisian",category:"French cuisine",contact:"Leon Lafrite",fallback:"LL"},s=[];for(let t=0;t<5;t++)s.push({...c,id:t});return e.jsx(d,{padding:8,background:"neutral100",children:e.jsxs(f,{colCount:10,rowCount:6,footer:e.jsx(L,{icon:e.jsx(F,{}),children:"Add another field to this collection type"}),children:[e.jsx(v,{children:e.jsxs(p,{children:[e.jsx(a,{children:e.jsx(u,{"aria-label":"Select all entries"})}),e.jsx(a,{action:e.jsx(h,{label:"Sort on ID",borderWidth:0,children:e.jsx(z,{})}),children:e.jsx(o,{variant:"sigma",children:"ID"})}),e.jsx(a,{children:e.jsx(o,{variant:"sigma",children:"Cover"})}),e.jsx(a,{children:e.jsx(o,{variant:"sigma",children:"Description"})}),e.jsx(a,{children:e.jsx(o,{variant:"sigma",children:"Categories"})}),e.jsx(a,{children:e.jsx(o,{variant:"sigma",children:"Contact"})}),e.jsx(a,{children:e.jsx(R,{children:"Actions"})})]})}),e.jsx(C,{children:s.map(t=>e.jsxs(p,{children:[e.jsx(n,{children:e.jsx(u,{"aria-label":`Select ${t.contact}`})}),e.jsx(n,{children:e.jsx(o,{textColor:"neutral800",children:t.id})}),e.jsx(n,{children:e.jsx(O,{src:t.cover,alt:t.contact,fallback:t.fallback})}),e.jsx(n,{children:e.jsx(o,{textColor:"neutral800",children:t.description})}),e.jsx(n,{children:e.jsx(o,{textColor:"neutral800",children:t.category})}),e.jsx(n,{children:e.jsx(o,{textColor:"neutral800",children:t.contact})}),e.jsx(n,{children:e.jsxs(b,{children:[e.jsx(h,{onClick:()=>console.log("edit"),label:"Edit",borderWidth:0,children:e.jsx(w,{})}),e.jsx(d,{paddingLeft:1,children:e.jsx(h,{onClick:()=>console.log("delete"),label:"Delete",borderWidth:0,children:e.jsx(k,{})})})]})})]},t.id))})]})})},name:"with th actions"};var W,N,_;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 6;
    const COL_COUNT = 10;
    const entry = {
      cover: 'https://avatars.githubusercontent.com/u/3874873?v=4',
      description: 'Chez Léon is a human sized Parisian',
      category: 'French cuisine',
      contact: 'Leon Lafrite',
      fallback: 'LL'
    };
    const entries: Array<{
      id: number;
    } & typeof entry> = [];
    for (let i = 0; i < 5; i++) {
      entries.push({
        ...entry,
        id: i
      });
    }
    return <Box padding={8} background="neutral100">\r
        <Table colCount={COL_COUNT} rowCount={ROW_COUNT} footer={<TFooter icon={<Plus />}>Add another field to this collection type</TFooter>}>\r
          <Thead>\r
            <Tr>\r
              <Th>\r
                <Checkbox aria-label="Select all entries" />\r
              </Th>\r
              <Th>\r
                <Typography variant="sigma">ID</Typography>\r
              </Th>\r
              <Th>\r
                <Typography variant="sigma">Cover</Typography>\r
              </Th>\r
              <Th>\r
                <Typography variant="sigma">Description</Typography>\r
              </Th>\r
              <Th>\r
                <Typography variant="sigma">Categories</Typography>\r
              </Th>\r
              <Th>\r
                <Typography variant="sigma">Contact</Typography>\r
              </Th>\r
              <Th>\r
                <VisuallyHidden>Actions</VisuallyHidden>\r
              </Th>\r
            </Tr>\r
          </Thead>\r
          <Tbody>\r
            {entries.map(entry => <Tr key={entry.id}>\r
                <Td>\r
                  <Checkbox aria-label={\`Select \${entry.contact}\`} />\r
                </Td>\r
                <Td>\r
                  <Typography textColor="neutral800">{entry.id}</Typography>\r
                </Td>\r
                <Td>\r
                  <Avatar.Item src={entry.cover} alt={entry.contact} fallback={entry.fallback} />\r
                </Td>\r
                <Td>\r
                  <Typography textColor="neutral800">{entry.description}</Typography>\r
                </Td>\r
                <Td>\r
                  <Typography textColor="neutral800">{entry.category}</Typography>\r
                </Td>\r
                <Td>\r
                  <Typography textColor="neutral800">{entry.contact}</Typography>\r
                </Td>\r
                <Td>\r
                  <Flex>\r
                    <a href="https://www.google.com" target="_blank" rel="noreferrer">\r
                      G\r
                    </a>\r
                    <IconButton onClick={() => console.log('edit')} label="Edit" borderWidth={0}>\r
                      <Pencil />\r
                    </IconButton>\r
                    <Box paddingLeft={1}>\r
                      <IconButton onClick={() => console.log('delete')} label="Delete" borderWidth={0}>\r
                        <Trash />\r
                      </IconButton>\r
                    </Box>\r
                  </Flex>\r
                </Td>\r
              </Tr>)}\r
          </Tbody>\r
        </Table>\r
      </Box>;
  },
  name: 'base'
} satisfies Story`,...(_=(N=x.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var B,I,S;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 6;
    const COL_COUNT = 10;
    const entry = {
      cover: 'https://avatars.githubusercontent.com/u/3874873?v=4',
      description: 'Chez Léon is a human sized Parisian',
      category: 'French cuisine',
      contact: 'Leon Lafrite',
      fallback: 'LL'
    };
    const entries: Array<{
      id: number;
    } & typeof entry> = [];
    for (let i = 0; i < 5; i++) {
      entries.push({
        ...entry,
        id: i
      });
    }
    return <Box padding={8} background="neutral100">\r
        <Table colCount={COL_COUNT} rowCount={ROW_COUNT}>\r
          <Thead>\r
            <Tr>\r
              <Th>\r
                <Checkbox aria-label="Select all entries" />\r
              </Th>\r
              <Th>\r
                <Typography variant="sigma">ID</Typography>\r
              </Th>\r
              <Th>\r
                <Typography variant="sigma">Cover</Typography>\r
              </Th>\r
              <Th>\r
                <Typography variant="sigma">Description</Typography>\r
              </Th>\r
              <Th>\r
                <Typography variant="sigma">Categories</Typography>\r
              </Th>\r
              <Th>\r
                <Typography variant="sigma">Contact</Typography>\r
              </Th>\r
              <Th>\r
                <VisuallyHidden>Actions</VisuallyHidden>\r
              </Th>\r
            </Tr>\r
          </Thead>\r
          <Tbody>\r
            {entries.map(entry => <Tr key={entry.id}>\r
                <Td>\r
                  <Checkbox aria-label={\`Select \${entry.contact}\`} />\r
                </Td>\r
                <Td>\r
                  <Typography textColor="neutral800">{entry.id}</Typography>\r
                </Td>\r
                <Td>\r
                  <Avatar.Item src={entry.cover} alt={entry.contact} fallback={entry.fallback} />\r
                </Td>\r
                <Td>\r
                  <Typography textColor="neutral800">{entry.description}</Typography>\r
                </Td>\r
                <Td>\r
                  <Typography textColor="neutral800">{entry.category}</Typography>\r
                </Td>\r
                <Td>\r
                  <Typography textColor="neutral800">{entry.contact}</Typography>\r
                </Td>\r
                <Td>\r
                  <Flex>\r
                    <IconButton onClick={() => console.log('edit')} label="Edit" borderWidth={0}>\r
                      <Pencil />\r
                    </IconButton>\r
                    <Box paddingLeft={1}>\r
                      <IconButton onClick={() => console.log('delete')} label="Delete" borderWidth={0}>\r
                        <Trash />\r
                      </IconButton>\r
                    </Box>\r
                  </Flex>\r
                </Td>\r
              </Tr>)}\r
          </Tbody>\r
        </Table>\r
      </Box>;
  },
  name: 'base without footer'
} satisfies Story`,...(S=(I=g.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var q,D,U;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 6;
    const COL_COUNT = 10;
    const entry = {
      cover: 'https://avatars.githubusercontent.com/u/3874873?v=4',
      description: 'Chez Léon is a human sized Parisian',
      category: 'French cuisine',
      contact: 'Leon Lafrite',
      fallback: 'LL'
    };
    const entries: Array<{
      id: number;
    } & typeof entry> = [];
    for (let i = 0; i < 5; i++) {
      entries.push({
        ...entry,
        id: i
      });
    }
    return <Box padding={8} background="neutral100">\r
        <Table colCount={COL_COUNT} rowCount={ROW_COUNT} footer={<TFooter icon={<Plus />}>Add another field to this collection type</TFooter>}>\r
          <Thead>\r
            <Tr>\r
              <Th>\r
                <Checkbox aria-label="Select all entries" />\r
              </Th>\r
              <Th action={<IconButton label="Sort on ID" borderWidth={0}>\r
                    <CaretDown />\r
                  </IconButton>}>\r
                <Typography variant="sigma">ID</Typography>\r
              </Th>\r
              <Th>\r
                <Typography variant="sigma">Cover</Typography>\r
              </Th>\r
              <Th>\r
                <Typography variant="sigma">Description</Typography>\r
              </Th>\r
              <Th>\r
                <Typography variant="sigma">Categories</Typography>\r
              </Th>\r
              <Th>\r
                <Typography variant="sigma">Contact</Typography>\r
              </Th>\r
              <Th>\r
                <VisuallyHidden>Actions</VisuallyHidden>\r
              </Th>\r
            </Tr>\r
          </Thead>\r
          <Tbody>\r
            {entries.map(entry => <Tr key={entry.id}>\r
                <Td>\r
                  <Checkbox aria-label={\`Select \${entry.contact}\`} />\r
                </Td>\r
                <Td>\r
                  <Typography textColor="neutral800">{entry.id}</Typography>\r
                </Td>\r
                <Td>\r
                  <Avatar.Item src={entry.cover} alt={entry.contact} fallback={entry.fallback} />\r
                </Td>\r
                <Td>\r
                  <Typography textColor="neutral800">{entry.description}</Typography>\r
                </Td>\r
                <Td>\r
                  <Typography textColor="neutral800">{entry.category}</Typography>\r
                </Td>\r
                <Td>\r
                  <Typography textColor="neutral800">{entry.contact}</Typography>\r
                </Td>\r
                <Td>\r
                  <Flex>\r
                    <IconButton onClick={() => console.log('edit')} label="Edit" borderWidth={0}>\r
                      <Pencil />\r
                    </IconButton>\r
                    <Box paddingLeft={1}>\r
                      <IconButton onClick={() => console.log('delete')} label="Delete" borderWidth={0}>\r
                        <Trash />\r
                      </IconButton>\r
                    </Box>\r
                  </Flex>\r
                </Td>\r
              </Tr>)}\r
          </Tbody>\r
        </Table>\r
      </Box>;
  },
  name: 'with th actions'
} satisfies Story`,...(U=(D=m.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};const ie=["Base","BaseWithoutFooter","WithThActions"],Te=Object.freeze(Object.defineProperty({__proto__:null,Base:x,BaseWithoutFooter:g,WithThActions:m,__namedExportsOrder:ie,default:ne},Symbol.toStringTag,{value:"Module"}));export{x as B,Te as T,m as W,g as a,v as b,p as c,C as d,L as e};
