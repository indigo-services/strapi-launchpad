import{n as a}from"./iframe-_cKE9r89.js";const p=a`
  font-size: 1.6rem;
  line-height: 2.4rem;

  ${({theme:e})=>e.breakpoints.medium} {
    font-size: 1.4rem;
    line-height: 2.2rem;
  }
`,n=({$size:e="M",$hasValue:c=!1,$hasClear:i=!1,theme:s})=>{switch(e){case"S":return a`
        padding-block: calc(
          ${c&&i?s.spaces[1]:s.spaces[2]} - 1px
        ); // 1px to compensate for the border

        ${s.breakpoints.medium} {
          padding-block: ${s.spaces[1]};
        }
      `;default:return a`
        padding-block: calc(
          ${c&&i?s.spaces[2]:s.spaces[3]} - 1px
        ); // 1px to compensate for the border

        ${s.breakpoints.medium} {
          padding-block: ${s.spaces[2]};
        }
      `}};export{n as c,p as i};
