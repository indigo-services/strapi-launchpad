import{n as c}from"./iframe-_cKE9r89.js";const d="success-light",t="danger-light",b="default",l="tertiary",u="secondary",g="danger",$="success",n="ghost",e=[d,t],a=[b,l,u,g,$,n,...e],f=["XS","S","M","L"],s=o=>o===d||o===t?`${o.substring(0,o.lastIndexOf("-"))}`:o===l?"neutral":o===b||o===u||a.every(r=>r!==o)?"primary":`${o}`,p=({theme:o})=>c`
    border: 1px solid ${o.colors.neutral200};
    background: ${o.colors.neutral150};
    color: ${o.colors.neutral600};
    cursor: default;
  `,k=({theme:o,$variant:r})=>[...e,u].includes(r)?c`
      background-color: ${o.colors.neutral0};
    `:r===l?c`
      background-color: ${o.colors.neutral100};
    `:r===n?c`
      background-color: ${o.colors.neutral100};
    `:r===b?c`
      border: 1px solid ${o.colors.buttonPrimary500};
      background: ${o.colors.buttonPrimary500};
    `:c`
    border: 1px solid ${o.colors[`${s(r)}500`]};
    background: ${o.colors[`${s(r)}500`]};
  `,i=({theme:o,$variant:r})=>[...e,u].includes(r)?c`
      background-color: ${o.colors.neutral0};
      border: 1px solid ${o.colors[`${s(r)}600`]};
      color: ${o.colors[`${s(r)}600`]};
    `:r===l||r===n?c`
      background-color: ${o.colors.neutral150};
    `:c`
    border: 1px solid ${o.colors[`${s(r)}600`]};
    background: ${o.colors[`${s(r)}600`]};
  `,x=({theme:o,$variant:r})=>{switch(r){case t:case d:case u:return c`
        border: 1px solid ${o.colors[`${s(r)}200`]};
        background: ${o.colors[`${s(r)}100`]};
        color: ${o.colors[`${s(r)}700`]};
      `;case l:return c`
        border: 1px solid ${o.colors.neutral200};
        background: ${o.colors.neutral0};
        color: ${o.colors.neutral800};
      `;case n:return c`
        border: 1px solid transparent;
        background: transparent;
        color: ${o.colors.neutral800};

        svg {
          fill: ${o.colors.neutral500};
        }
      `;case $:case g:return c`
        border: 1px solid ${o.colors[`${s(r)}600`]};
        background: ${o.colors[`${s(r)}600`]};
        color: ${o.colors.neutral0};
      `;default:return c`
        border: 1px solid ${o.colors.buttonPrimary600};
        background: ${o.colors.buttonPrimary600};
        color: ${o.colors.buttonNeutral0};
      `}};export{f as B,b as D,k as a,i as b,p as c,x as g};
