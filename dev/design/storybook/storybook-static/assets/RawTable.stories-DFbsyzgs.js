import{j as r,c as n,Q as U,F as f,N as y,P as L}from"./iframe-_cKE9r89.js";import{R as T,a as w,c as l,e as a,b as x,d as e}from"./RawTr-ChRAiJIW.js";import{T as W}from"./TextInput-Dd_GvljO.js";import{I as g}from"./IconButton-Uvk00hK3.js";const S={title:"Components/RawTable",component:T},s={render:()=>{const h=Array(29).fill(null).map(()=>Array(5).fill(null).map((d,o)=>o));return r.jsx(n,{shadow:"filterShadow",padding:3,hasRadius:!0,children:r.jsxs(T,{colCount:5,rowCount:30,children:[r.jsx(w,{children:r.jsxs(l,{children:[r.jsx(a,{children:r.jsx(n,{color:"neutral800",padding:2,background:"neutral200",children:"One"})}),r.jsx(a,{children:r.jsx(n,{color:"neutral800",padding:2,background:"neutral200",children:"Two"})}),r.jsx(a,{children:r.jsx(n,{color:"neutral800",padding:2,background:"neutral200",children:"Three"})}),r.jsx(a,{children:r.jsx(n,{color:"neutral800",padding:2,background:"neutral200",children:"Four"})}),r.jsx(a,{children:r.jsx(n,{color:"neutral800",padding:2,background:"neutral200",children:"Five"})})]})}),r.jsx(x,{children:h.map((d,o)=>r.jsx(l,{children:d.map(c=>r.jsx(e,{children:r.jsxs(n,{color:"neutral800",padding:2,children:[o,"/",c]})},`cell-${o}-${c}`))},`row-${o}`))})]})})},name:"base"},t={render:()=>r.jsx(n,{shadow:"filterShadow",padding:3,hasRadius:!0,children:r.jsxs(T,{colCount:5,rowCount:30,children:[r.jsx(w,{children:r.jsxs(l,{children:[r.jsx(a,{children:r.jsx(n,{color:"neutral800",padding:2,background:"neutral200",children:"One"})}),r.jsx(a,{children:r.jsx(n,{color:"neutral800",padding:2,background:"neutral200",children:"Two"})}),r.jsx(a,{children:r.jsx(n,{color:"neutral800",padding:2,background:"neutral200",children:"Three"})}),r.jsx(a,{children:r.jsx(n,{color:"neutral800",padding:2,background:"neutral200",children:"Four"})}),r.jsx(a,{children:r.jsx(n,{color:"neutral800",padding:2,background:"neutral200",children:"Five"})})]})}),r.jsxs(x,{children:[r.jsxs(l,{children:[r.jsx(e,{color:"neutral800",children:"2/1"}),r.jsx(e,{color:"neutral800",children:"2/2"}),r.jsx(e,{color:"neutral800",children:"2/3"}),r.jsx(e,{color:"neutral800",children:"2/4"}),r.jsx(e,{color:"neutral800",children:"2/5"})]}),r.jsxs(l,{children:[r.jsx(e,{color:"neutral800",children:"3/1"}),r.jsx(e,{children:r.jsx(U,{href:"#",children:"Link to somewhere"})}),r.jsx(e,{color:"neutral800",children:"3/3"}),r.jsx(e,{color:"neutral800",children:"3/4"}),r.jsx(e,{color:"neutral800",children:"3/5"})]})]})]})}),name:"simple"},i={render:()=>{const h=Array(29).fill(null).map(()=>Array(5).fill(null).map((d,o)=>o));return r.jsx(n,{shadow:"filterShadow",padding:3,hasRadius:!0,children:r.jsxs(T,{colCount:5,rowCount:30,children:[r.jsx(w,{children:r.jsxs(l,{children:[r.jsx(a,{children:r.jsx(n,{color:"neutral800",padding:2,background:"neutral200",children:"One"})}),r.jsx(a,{children:r.jsx(n,{color:"neutral800",padding:2,background:"neutral200",children:"Two"})}),r.jsx(a,{children:r.jsx(n,{color:"neutral800",padding:2,background:"neutral200",children:"Three"})}),r.jsx(a,{children:r.jsx(n,{color:"neutral800",padding:2,background:"neutral200",children:"Four"})}),r.jsx(a,{children:r.jsx(n,{color:"neutral800",padding:2,background:"neutral200",children:"Five"})})]})}),r.jsx(x,{children:h.map((d,o)=>r.jsx(l,{children:d.map((c,u)=>u===3?r.jsx(e,{children:r.jsx(W,{"aria-label":"name"})},u):u===d.length-1?r.jsx(e,{children:r.jsxs(f,{children:[r.jsx(g,{onClick:()=>console.log("edit"),label:"Edit",borderWidth:0,children:r.jsx(y,{})}),r.jsx(n,{paddingLeft:1,children:r.jsx(g,{onClick:()=>console.log("delete"),label:"Delete",borderWidth:0,children:r.jsx(L,{})})})]})},u):r.jsx(e,{children:r.jsxs(n,{color:"neutral800",padding:2,children:[o,"/",c]})},`cell-${o}-${c}`))},`row-${o}`))})]})})},name:"aria"};var j,O,C;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 30;
    const COL_COUNT = 5;
    const rows = Array(ROW_COUNT - 1).fill(null).map(() => Array(COL_COUNT).fill(null).map((e, x) => x));
    return <Box shadow="filterShadow" padding={3} hasRadius>\r
        <RawTable colCount={COL_COUNT} rowCount={ROW_COUNT}>\r
          <RawThead>\r
            <RawTr>\r
              <RawTh>\r
                <Box color="neutral800" padding={2} background="neutral200">\r
                  One\r
                </Box>\r
              </RawTh>\r
              <RawTh>\r
                <Box color="neutral800" padding={2} background="neutral200">\r
                  Two\r
                </Box>\r
              </RawTh>\r
              <RawTh>\r
                <Box color="neutral800" padding={2} background="neutral200">\r
                  Three\r
                </Box>\r
              </RawTh>\r
              <RawTh>\r
                <Box color="neutral800" padding={2} background="neutral200">\r
                  Four\r
                </Box>\r
              </RawTh>\r
              <RawTh>\r
                <Box color="neutral800" padding={2} background="neutral200">\r
                  Five\r
                </Box>\r
              </RawTh>\r
            </RawTr>\r
          </RawThead>\r
          <RawTbody>\r
            {rows.map((row, rowIndex) => <RawTr key={\`row-\${rowIndex}\`}>\r
                {row.map(cell => <RawTd key={\`cell-\${rowIndex}-\${cell}\`}>\r
                    <Box color="neutral800" padding={2}>\r
                      {rowIndex}/{cell}\r
                    </Box>\r
                  </RawTd>)}\r
              </RawTr>)}\r
          </RawTbody>\r
        </RawTable>\r
      </Box>;
  },
  name: 'base'
} satisfies Story`,...(C=(O=s.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var b,m,B;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 30;
    const COL_COUNT = 5;
    return <Box shadow="filterShadow" padding={3} hasRadius>\r
        <RawTable colCount={COL_COUNT} rowCount={ROW_COUNT}>\r
          <RawThead>\r
            <RawTr>\r
              <RawTh>\r
                <Box color="neutral800" padding={2} background="neutral200">\r
                  One\r
                </Box>\r
              </RawTh>\r
              <RawTh>\r
                <Box color="neutral800" padding={2} background="neutral200">\r
                  Two\r
                </Box>\r
              </RawTh>\r
              <RawTh>\r
                <Box color="neutral800" padding={2} background="neutral200">\r
                  Three\r
                </Box>\r
              </RawTh>\r
              <RawTh>\r
                <Box color="neutral800" padding={2} background="neutral200">\r
                  Four\r
                </Box>\r
              </RawTh>\r
              <RawTh>\r
                <Box color="neutral800" padding={2} background="neutral200">\r
                  Five\r
                </Box>\r
              </RawTh>\r
            </RawTr>\r
          </RawThead>\r
          <RawTbody>\r
            <RawTr>\r
              <RawTd color="neutral800">2/1</RawTd>\r
              <RawTd color="neutral800">2/2</RawTd>\r
              <RawTd color="neutral800">2/3</RawTd>\r
              <RawTd color="neutral800">2/4</RawTd>\r
              <RawTd color="neutral800">2/5</RawTd>\r
            </RawTr>\r
            <RawTr>\r
              <RawTd color="neutral800">3/1</RawTd>\r
              <RawTd>\r
                <Link href="#">Link to somewhere</Link>\r
              </RawTd>\r
              <RawTd color="neutral800">3/3</RawTd>\r
              <RawTd color="neutral800">3/4</RawTd>\r
              <RawTd color="neutral800">3/5</RawTd>\r
            </RawTr>\r
          </RawTbody>\r
        </RawTable>\r
      </Box>;
  },
  name: 'simple'
} satisfies Story`,...(B=(m=t.parameters)==null?void 0:m.docs)==null?void 0:B.source}}};var k,_,N;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const ROW_COUNT = 30;
    const COL_COUNT = 5;
    const rows = Array(ROW_COUNT - 1).fill(null).map(() => Array(COL_COUNT).fill(null).map((e, x) => x));
    return <Box shadow="filterShadow" padding={3} hasRadius>\r
        <RawTable colCount={COL_COUNT} rowCount={ROW_COUNT}>\r
          <RawThead>\r
            <RawTr>\r
              <RawTh>\r
                <Box color="neutral800" padding={2} background="neutral200">\r
                  One\r
                </Box>\r
              </RawTh>\r
              <RawTh>\r
                <Box color="neutral800" padding={2} background="neutral200">\r
                  Two\r
                </Box>\r
              </RawTh>\r
              <RawTh>\r
                <Box color="neutral800" padding={2} background="neutral200">\r
                  Three\r
                </Box>\r
              </RawTh>\r
              <RawTh>\r
                <Box color="neutral800" padding={2} background="neutral200">\r
                  Four\r
                </Box>\r
              </RawTh>\r
              <RawTh>\r
                <Box color="neutral800" padding={2} background="neutral200">\r
                  Five\r
                </Box>\r
              </RawTh>\r
            </RawTr>\r
          </RawThead>\r
          <RawTbody>\r
            {rows.map((row, rowIndex) => <RawTr key={\`row-\${rowIndex}\`}>\r
                {row.map((cell, cellIndex) => cellIndex === 3 ? <RawTd key={cellIndex}>\r
                      <TextInput aria-label="name" />\r
                    </RawTd> : cellIndex === row.length - 1 ? <RawTd key={cellIndex}>\r
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
                    </RawTd> : <RawTd key={\`cell-\${rowIndex}-\${cell}\`}>\r
                      <Box color="neutral800" padding={2}>\r
                        {rowIndex}/{cell}\r
                      </Box>\r
                    </RawTd>)}\r
              </RawTr>)}\r
          </RawTbody>\r
        </RawTable>\r
      </Box>;
  },
  name: 'aria'
} satisfies Story`,...(N=(_=i.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const F=["Base","Simple","Aria"],E=Object.freeze(Object.defineProperty({__proto__:null,Aria:i,Base:s,Simple:t,__namedExportsOrder:F,default:S},Symbol.toStringTag,{value:"Module"}));export{i as A,s as B,E as R,t as S};
