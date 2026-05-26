import{r as t,$ as Ae,aL as Le,k as Ne,aM as Be,x as ae,aN as xn,_ as w,a8 as we,aI as Mn,d as z,z as C,aV as je,y as ie,aW as En,g as _n,aJ as Rn,aO as Tn,D as Fe,j as b,ac as Pn,c as We,F as ce,T as Ce,aF as kn,ad as Re,p as L,aX as In,n as Dn,Q as On}from"./iframe-_cKE9r89.js";import{s as An,u as Ln}from"./useIntersection-BvDycFkB.js";import{u as Nn}from"./useComposeRefs-BPjCxrPe.js";import{u as Bn}from"./useId-BMWvqHJO.js";import{$ as jn}from"./index-DQIug_r8.js";import{$ as Fn}from"./index-D_aoadGl.js";import{c as Wn,a as qn,b as Kn,d as G,z as Gn,f as Vn,s as Un,e as Xn,g as Yn,h as Hn,$ as zn,i as Zn}from"./index-JVGtNO81.js";import{$ as qe,b as Jn,a as Qn}from"./index-CmgM1aMT.js";import{B as Te}from"./Button-BvqyPouE.js";import{I as Pe}from"./IconButton-Uvk00hK3.js";var et=function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},W=new WeakMap,ee=new WeakMap,ne={},me=0,Ke=function(e){return e&&(e.host||Ke(e.parentNode))},nt=function(e,n){return n.map(function(r){if(e.contains(r))return r;var o=Ke(r);return o&&e.contains(o)?o:(console.error("aria-hidden",r,"in not contained inside",e,". Doing nothing"),null)}).filter(function(r){return!!r})},tt=function(e,n,r,o){var c=nt(n,Array.isArray(e)?e:[e]);ne[r]||(ne[r]=new WeakMap);var a=ne[r],s=[],l=new Set,p=new Set(c),m=function(i){!i||l.has(i)||(l.add(i),m(i.parentNode))};c.forEach(m);var f=function(i){!i||p.has(i)||Array.prototype.forEach.call(i.children,function(u){if(l.has(u))f(u);else try{var $=u.getAttribute(o),h=$!==null&&$!=="false",d=(W.get(u)||0)+1,v=(a.get(u)||0)+1;W.set(u,d),a.set(u,v),s.push(u),d===1&&h&&ee.set(u,!0),v===1&&u.setAttribute(r,"true"),h||u.setAttribute(o,"true")}catch(y){console.error("aria-hidden: cannot operate on ",u,y)}})};return f(n),l.clear(),me++,function(){s.forEach(function(i){var u=W.get(i)-1,$=a.get(i)-1;W.set(i,u),a.set(i,$),u||(ee.has(i)||i.removeAttribute(o),ee.delete(i)),$||i.removeAttribute(r)}),me--,me||(W=new WeakMap,W=new WeakMap,ee=new WeakMap,ne={})}},rt=function(e,n,r){r===void 0&&(r="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),c=et(e);return c?(o.push.apply(o,Array.from(c.querySelectorAll("[aria-live], script"))),tt(o,c,r,"aria-hidden")):function(){return null}},Ge=Wn(),$e=function(){},se=t.forwardRef(function(e,n){var r=t.useRef(null),o=t.useState({onScrollCapture:$e,onWheelCapture:$e,onTouchMoveCapture:$e}),c=o[0],a=o[1],s=e.forwardProps,l=e.children,p=e.className,m=e.removeScrollBar,f=e.enabled,i=e.shards,u=e.sideCar,$=e.noIsolation,h=e.inert,d=e.allowPinchZoom,v=e.as,y=v===void 0?"div":v,E=qn(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),x=u,_=Kn([r,n]),M=G(G({},E),c);return t.createElement(t.Fragment,null,f&&t.createElement(x,{sideCar:Ge,removeScrollBar:m,shards:i,noIsolation:$,inert:h,setCallbacks:a,allowPinchZoom:!!d,lockRef:r}),s?t.cloneElement(t.Children.only(l),G(G({},M),{ref:_})):t.createElement(y,G({},M,{className:p,ref:_}),l))});se.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};se.classNames={fullWidth:Vn,zeroRight:Gn};var ve=!1;if(typeof window<"u")try{var te=Object.defineProperty({},"passive",{get:function(){return ve=!0,!0}});window.addEventListener("test",te,te),window.removeEventListener("test",te,te)}catch{ve=!1}var q=ve?{passive:!1}:!1,ot=function(e){return e.tagName==="TEXTAREA"},Ve=function(e,n){var r=window.getComputedStyle(e);return r[n]!=="hidden"&&!(r.overflowY===r.overflowX&&!ot(e)&&r[n]==="visible")},at=function(e){return Ve(e,"overflowY")},ct=function(e){return Ve(e,"overflowX")},ke=function(e,n){var r=n;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var o=Ue(e,r);if(o){var c=Xe(e,r),a=c[1],s=c[2];if(a>s)return!0}r=r.parentNode}while(r&&r!==document.body);return!1},it=function(e){var n=e.scrollTop,r=e.scrollHeight,o=e.clientHeight;return[n,r,o]},st=function(e){var n=e.scrollLeft,r=e.scrollWidth,o=e.clientWidth;return[n,r,o]},Ue=function(e,n){return e==="v"?at(n):ct(n)},Xe=function(e,n){return e==="v"?it(n):st(n)},lt=function(e,n){return e==="h"&&n==="rtl"?-1:1},ut=function(e,n,r,o,c){var a=lt(e,window.getComputedStyle(n).direction),s=a*o,l=r.target,p=n.contains(l),m=!1,f=s>0,i=0,u=0;do{var $=Xe(e,l),h=$[0],d=$[1],v=$[2],y=d-v-a*h;(h||y)&&Ue(e,l)&&(i+=y,u+=h),l=l.parentNode}while(!p&&l!==document.body||p&&(n.contains(l)||n===l));return(f&&i===0||!f&&u===0)&&(m=!0),m},re=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Ie=function(e){return[e.deltaX,e.deltaY]},De=function(e){return e&&"current"in e?e.current:e},dt=function(e,n){return e[0]===n[0]&&e[1]===n[1]},ft=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},pt=0,K=[];function mt(e){var n=t.useRef([]),r=t.useRef([0,0]),o=t.useRef(),c=t.useState(pt++)[0],a=t.useState(function(){return Un()})[0],s=t.useRef(e);t.useEffect(function(){s.current=e},[e]),t.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(c));var d=Xn([e.lockRef.current],(e.shards||[]).map(De),!0).filter(Boolean);return d.forEach(function(v){return v.classList.add("allow-interactivity-".concat(c))}),function(){document.body.classList.remove("block-interactivity-".concat(c)),d.forEach(function(v){return v.classList.remove("allow-interactivity-".concat(c))})}}},[e.inert,e.lockRef.current,e.shards]);var l=t.useCallback(function(d,v){if("touches"in d&&d.touches.length===2)return!s.current.allowPinchZoom;var y=re(d),E=r.current,x="deltaX"in d?d.deltaX:E[0]-y[0],_="deltaY"in d?d.deltaY:E[1]-y[1],M,B=d.target,P=Math.abs(x)>Math.abs(_)?"h":"v";if("touches"in d&&P==="h"&&B.type==="range")return!1;var j=ke(P,B);if(!j)return!0;if(j?M=P:(M=P==="v"?"h":"v",j=ke(P,B)),!j)return!1;if(!o.current&&"changedTouches"in d&&(x||_)&&(o.current=M),!M)return!0;var O=o.current||M;return ut(O,v,d,O==="h"?x:_)},[]),p=t.useCallback(function(d){var v=d;if(!(!K.length||K[K.length-1]!==a)){var y="deltaY"in v?Ie(v):re(v),E=n.current.filter(function(M){return M.name===v.type&&M.target===v.target&&dt(M.delta,y)})[0];if(E&&E.should){v.cancelable&&v.preventDefault();return}if(!E){var x=(s.current.shards||[]).map(De).filter(Boolean).filter(function(M){return M.contains(v.target)}),_=x.length>0?l(v,x[0]):!s.current.noIsolation;_&&v.cancelable&&v.preventDefault()}}},[]),m=t.useCallback(function(d,v,y,E){var x={name:d,delta:v,target:y,should:E};n.current.push(x),setTimeout(function(){n.current=n.current.filter(function(_){return _!==x})},1)},[]),f=t.useCallback(function(d){r.current=re(d),o.current=void 0},[]),i=t.useCallback(function(d){m(d.type,Ie(d),d.target,l(d,e.lockRef.current))},[]),u=t.useCallback(function(d){m(d.type,re(d),d.target,l(d,e.lockRef.current))},[]);t.useEffect(function(){return K.push(a),e.setCallbacks({onScrollCapture:i,onWheelCapture:i,onTouchMoveCapture:u}),document.addEventListener("wheel",p,q),document.addEventListener("touchmove",p,q),document.addEventListener("touchstart",f,q),function(){K=K.filter(function(d){return d!==a}),document.removeEventListener("wheel",p,q),document.removeEventListener("touchmove",p,q),document.removeEventListener("touchstart",f,q)}},[]);var $=e.removeScrollBar,h=e.inert;return t.createElement(t.Fragment,null,h?t.createElement(a,{styles:ft(c)}):null,$?t.createElement(Yn,{gapMode:"margin"}):null)}const $t=Hn(Ge,mt);var Ye=t.forwardRef(function(e,n){return t.createElement(se,G({},e,{ref:n,sideCar:$t}))});Ye.classNames=se.classNames;const ge=["Enter"," "],vt=["ArrowDown","PageUp","Home"],He=["ArrowUp","PageDown","End"],gt=[...vt,...He],ht={ltr:[...ge,"ArrowRight"],rtl:[...ge,"ArrowLeft"]},bt={ltr:["ArrowLeft"],rtl:["ArrowRight"]},le="Menu",[Y,wt,Ct]=jn(le),[N,ze]=Ae(le,[Ct,Le,qe]),ue=Le(),Ze=qe(),[Je,D]=N(le),[yt,Z]=N(le),St=e=>{const{__scopeMenu:n,open:r=!1,children:o,dir:c,onOpenChange:a,modal:s=!0}=e,l=ue(n),[p,m]=t.useState(null),f=t.useRef(!1),i=Ne(a),u=Fn(c);return t.useEffect(()=>{const $=()=>{f.current=!0,document.addEventListener("pointerdown",h,{capture:!0,once:!0}),document.addEventListener("pointermove",h,{capture:!0,once:!0})},h=()=>f.current=!1;return document.addEventListener("keydown",$,{capture:!0}),()=>{document.removeEventListener("keydown",$,{capture:!0}),document.removeEventListener("pointerdown",h,{capture:!0}),document.removeEventListener("pointermove",h,{capture:!0})}},[]),t.createElement(Be,l,t.createElement(Je,{scope:n,open:r,onOpenChange:i,content:p,onContentChange:m},t.createElement(yt,{scope:n,onClose:t.useCallback(()=>i(!1),[i]),isUsingKeyboardRef:f,dir:u,modal:s},o)))},Qe=t.forwardRef((e,n)=>{const{__scopeMenu:r,...o}=e,c=ue(r);return t.createElement(xn,w({},c,o,{ref:n}))}),en="MenuPortal",[xt,nn]=N(en,{forceMount:void 0}),Mt=e=>{const{__scopeMenu:n,forceMount:r,children:o,container:c}=e,a=D(en,n);return t.createElement(xt,{scope:n,forceMount:r},t.createElement(we,{present:r||a.open},t.createElement(Mn,{asChild:!0,container:c},o)))},T="MenuContent",[Et,ye]=N(T),_t=t.forwardRef((e,n)=>{const r=nn(T,e.__scopeMenu),{forceMount:o=r.forceMount,...c}=e,a=D(T,e.__scopeMenu),s=Z(T,e.__scopeMenu);return t.createElement(Y.Provider,{scope:e.__scopeMenu},t.createElement(we,{present:o||a.open},t.createElement(Y.Slot,{scope:e.__scopeMenu},s.modal?t.createElement(Rt,w({},c,{ref:n})):t.createElement(Tt,w({},c,{ref:n})))))}),Rt=t.forwardRef((e,n)=>{const r=D(T,e.__scopeMenu),o=t.useRef(null),c=z(n,o);return t.useEffect(()=>{const a=o.current;if(a)return rt(a)},[]),t.createElement(Se,w({},e,{ref:c,trapFocus:r.open,disableOutsidePointerEvents:r.open,disableOutsideScroll:!0,onFocusOutside:C(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>r.onOpenChange(!1)}))}),Tt=t.forwardRef((e,n)=>{const r=D(T,e.__scopeMenu);return t.createElement(Se,w({},e,{ref:n,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>r.onOpenChange(!1)}))}),Se=t.forwardRef((e,n)=>{const{__scopeMenu:r,loop:o=!1,trapFocus:c,onOpenAutoFocus:a,onCloseAutoFocus:s,disableOutsidePointerEvents:l,onEntryFocus:p,onEscapeKeyDown:m,onPointerDownOutside:f,onFocusOutside:i,onInteractOutside:u,onDismiss:$,disableOutsideScroll:h,...d}=e,v=D(T,r),y=Z(T,r),E=ue(r),x=Ze(r),_=wt(r),[M,B]=t.useState(null),P=t.useRef(null),j=z(n,P,v.onContentChange),O=t.useRef(0),J=t.useRef(""),wn=t.useRef(0),de=t.useRef(null),xe=t.useRef("right"),fe=t.useRef(0),Cn=h?Ye:t.Fragment,yn=h?{as:_n,allowPinchZoom:!0}:void 0,Sn=g=>{var S,R;const A=J.current+g,V=_().filter(I=>!I.disabled),pe=document.activeElement,Me=(S=V.find(I=>I.ref.current===pe))===null||S===void 0?void 0:S.textValue,Q=V.map(I=>I.textValue),U=qt(Q,A,Me),Ee=(R=V.find(I=>I.textValue===U))===null||R===void 0?void 0:R.ref.current;(function I(_e){J.current=_e,window.clearTimeout(O.current),_e!==""&&(O.current=window.setTimeout(()=>I(""),1e3))})(A),Ee&&setTimeout(()=>Ee.focus())};t.useEffect(()=>()=>window.clearTimeout(O.current),[]),zn();const F=t.useCallback(g=>{var S,R;return xe.current===((S=de.current)===null||S===void 0?void 0:S.side)&&Gt(g,(R=de.current)===null||R===void 0?void 0:R.area)},[]);return t.createElement(Et,{scope:r,searchRef:J,onItemEnter:t.useCallback(g=>{F(g)&&g.preventDefault()},[F]),onItemLeave:t.useCallback(g=>{var S;F(g)||((S=P.current)===null||S===void 0||S.focus(),B(null))},[F]),onTriggerLeave:t.useCallback(g=>{F(g)&&g.preventDefault()},[F]),pointerGraceTimerRef:wn,onPointerGraceIntentChange:t.useCallback(g=>{de.current=g},[])},t.createElement(Cn,yn,t.createElement(Zn,{asChild:!0,trapped:c,onMountAutoFocus:C(a,g=>{var S;g.preventDefault(),(S=P.current)===null||S===void 0||S.focus()}),onUnmountAutoFocus:s},t.createElement(Rn,{asChild:!0,disableOutsidePointerEvents:l,onEscapeKeyDown:m,onPointerDownOutside:f,onFocusOutside:i,onInteractOutside:u,onDismiss:$},t.createElement(Qn,w({asChild:!0},x,{dir:y.dir,orientation:"vertical",loop:o,currentTabStopId:M,onCurrentTabStopIdChange:B,onEntryFocus:C(p,g=>{y.isUsingKeyboardRef.current||g.preventDefault()})}),t.createElement(Tn,w({role:"menu","aria-orientation":"vertical","data-state":an(v.open),"data-radix-menu-content":"",dir:y.dir},E,d,{ref:j,style:{outline:"none",...d.style},onKeyDown:C(d.onKeyDown,g=>{const R=g.target.closest("[data-radix-menu-content]")===g.currentTarget,A=g.ctrlKey||g.altKey||g.metaKey,V=g.key.length===1;R&&(g.key==="Tab"&&g.preventDefault(),!A&&V&&Sn(g.key));const pe=P.current;if(g.target!==pe||!gt.includes(g.key))return;g.preventDefault();const Q=_().filter(U=>!U.disabled).map(U=>U.ref.current);He.includes(g.key)&&Q.reverse(),Ft(Q)}),onBlur:C(e.onBlur,g=>{g.currentTarget.contains(g.target)||(window.clearTimeout(O.current),J.current="")}),onPointerMove:C(e.onPointerMove,H(g=>{const S=g.target,R=fe.current!==g.clientX;if(g.currentTarget.contains(S)&&R){const A=g.clientX>fe.current?"right":"left";xe.current=A,fe.current=g.clientX}}))})))))))}),Pt=t.forwardRef((e,n)=>{const{__scopeMenu:r,...o}=e;return t.createElement(ie.div,w({},o,{ref:n}))}),he="MenuItem",Oe="menu.itemSelect",kt=t.forwardRef((e,n)=>{const{disabled:r=!1,onSelect:o,...c}=e,a=t.useRef(null),s=Z(he,e.__scopeMenu),l=ye(he,e.__scopeMenu),p=z(n,a),m=t.useRef(!1),f=()=>{const i=a.current;if(!r&&i){const u=new CustomEvent(Oe,{bubbles:!0,cancelable:!0});i.addEventListener(Oe,$=>o==null?void 0:o($),{once:!0}),En(i,u),u.defaultPrevented?m.current=!1:s.onClose()}};return t.createElement(tn,w({},c,{ref:p,disabled:r,onClick:C(e.onClick,f),onPointerDown:i=>{var u;(u=e.onPointerDown)===null||u===void 0||u.call(e,i),m.current=!0},onPointerUp:C(e.onPointerUp,i=>{var u;m.current||(u=i.currentTarget)===null||u===void 0||u.click()}),onKeyDown:C(e.onKeyDown,i=>{const u=l.searchRef.current!=="";r||u&&i.key===" "||ge.includes(i.key)&&(i.currentTarget.click(),i.preventDefault())})}))}),tn=t.forwardRef((e,n)=>{const{__scopeMenu:r,disabled:o=!1,textValue:c,...a}=e,s=ye(he,r),l=Ze(r),p=t.useRef(null),m=z(n,p),[f,i]=t.useState(!1),[u,$]=t.useState("");return t.useEffect(()=>{const h=p.current;if(h){var d;$(((d=h.textContent)!==null&&d!==void 0?d:"").trim())}},[a.children]),t.createElement(Y.ItemSlot,{scope:r,disabled:o,textValue:c??u},t.createElement(Jn,w({asChild:!0},l,{focusable:!o}),t.createElement(ie.div,w({role:"menuitem","data-highlighted":f?"":void 0,"aria-disabled":o||void 0,"data-disabled":o?"":void 0},a,{ref:m,onPointerMove:C(e.onPointerMove,H(h=>{o?s.onItemLeave(h):(s.onItemEnter(h),h.defaultPrevented||h.currentTarget.focus())})),onPointerLeave:C(e.onPointerLeave,H(h=>s.onItemLeave(h))),onFocus:C(e.onFocus,()=>i(!0)),onBlur:C(e.onBlur,()=>i(!1))}))))}),It="MenuRadioGroup",[Xr,Yr]=N(It,{value:void 0,onValueChange:()=>{}}),Dt="MenuItemIndicator",[Hr,zr]=N(Dt,{checked:!1}),Ot=t.forwardRef((e,n)=>{const{__scopeMenu:r,...o}=e;return t.createElement(ie.div,w({role:"separator","aria-orientation":"horizontal"},o,{ref:n}))}),rn="MenuSub",[At,on]=N(rn),Lt=e=>{const{__scopeMenu:n,children:r,open:o=!1,onOpenChange:c}=e,a=D(rn,n),s=ue(n),[l,p]=t.useState(null),[m,f]=t.useState(null),i=Ne(c);return t.useEffect(()=>(a.open===!1&&i(!1),()=>i(!1)),[a.open,i]),t.createElement(Be,s,t.createElement(Je,{scope:n,open:o,onOpenChange:i,content:m,onContentChange:f},t.createElement(At,{scope:n,contentId:ae(),triggerId:ae(),trigger:l,onTriggerChange:p},r)))},oe="MenuSubTrigger",Nt=t.forwardRef((e,n)=>{const r=D(oe,e.__scopeMenu),o=Z(oe,e.__scopeMenu),c=on(oe,e.__scopeMenu),a=ye(oe,e.__scopeMenu),s=t.useRef(null),{pointerGraceTimerRef:l,onPointerGraceIntentChange:p}=a,m={__scopeMenu:e.__scopeMenu},f=t.useCallback(()=>{s.current&&window.clearTimeout(s.current),s.current=null},[]);return t.useEffect(()=>f,[f]),t.useEffect(()=>{const i=l.current;return()=>{window.clearTimeout(i),p(null)}},[l,p]),t.createElement(Qe,w({asChild:!0},m),t.createElement(tn,w({id:c.triggerId,"aria-haspopup":"menu","aria-expanded":r.open,"aria-controls":c.contentId,"data-state":an(r.open)},e,{ref:je(n,c.onTriggerChange),onClick:i=>{var u;(u=e.onClick)===null||u===void 0||u.call(e,i),!(e.disabled||i.defaultPrevented)&&(i.currentTarget.focus(),r.open||r.onOpenChange(!0))},onPointerMove:C(e.onPointerMove,H(i=>{a.onItemEnter(i),!i.defaultPrevented&&!e.disabled&&!r.open&&!s.current&&(a.onPointerGraceIntentChange(null),s.current=window.setTimeout(()=>{r.onOpenChange(!0),f()},100))})),onPointerLeave:C(e.onPointerLeave,H(i=>{var u;f();const $=(u=r.content)===null||u===void 0?void 0:u.getBoundingClientRect();if($){var h;const d=(h=r.content)===null||h===void 0?void 0:h.dataset.side,v=d==="right",y=v?-5:5,E=$[v?"left":"right"],x=$[v?"right":"left"];a.onPointerGraceIntentChange({area:[{x:i.clientX+y,y:i.clientY},{x:E,y:$.top},{x,y:$.top},{x,y:$.bottom},{x:E,y:$.bottom}],side:d}),window.clearTimeout(l.current),l.current=window.setTimeout(()=>a.onPointerGraceIntentChange(null),300)}else{if(a.onTriggerLeave(i),i.defaultPrevented)return;a.onPointerGraceIntentChange(null)}})),onKeyDown:C(e.onKeyDown,i=>{const u=a.searchRef.current!=="";if(!(e.disabled||u&&i.key===" ")&&ht[o.dir].includes(i.key)){var $;r.onOpenChange(!0),($=r.content)===null||$===void 0||$.focus(),i.preventDefault()}})})))}),Bt="MenuSubContent",jt=t.forwardRef((e,n)=>{const r=nn(T,e.__scopeMenu),{forceMount:o=r.forceMount,...c}=e,a=D(T,e.__scopeMenu),s=Z(T,e.__scopeMenu),l=on(Bt,e.__scopeMenu),p=t.useRef(null),m=z(n,p);return t.createElement(Y.Provider,{scope:e.__scopeMenu},t.createElement(we,{present:o||a.open},t.createElement(Y.Slot,{scope:e.__scopeMenu},t.createElement(Se,w({id:l.contentId,"aria-labelledby":l.triggerId},c,{ref:m,align:"start",side:s.dir==="rtl"?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:f=>{var i;s.isUsingKeyboardRef.current&&((i=p.current)===null||i===void 0||i.focus()),f.preventDefault()},onCloseAutoFocus:f=>f.preventDefault(),onFocusOutside:C(e.onFocusOutside,f=>{f.target!==l.trigger&&a.onOpenChange(!1)}),onEscapeKeyDown:C(e.onEscapeKeyDown,f=>{s.onClose(),f.preventDefault()}),onKeyDown:C(e.onKeyDown,f=>{const i=f.currentTarget.contains(f.target),u=bt[s.dir].includes(f.key);if(i&&u){var $;a.onOpenChange(!1),($=l.trigger)===null||$===void 0||$.focus(),f.preventDefault()}})})))))});function an(e){return e?"open":"closed"}function Ft(e){const n=document.activeElement;for(const r of e)if(r===n||(r.focus(),document.activeElement!==n))return}function Wt(e,n){return e.map((r,o)=>e[(n+o)%e.length])}function qt(e,n,r){const c=n.length>1&&Array.from(n).every(m=>m===n[0])?n[0]:n,a=r?e.indexOf(r):-1;let s=Wt(e,Math.max(a,0));c.length===1&&(s=s.filter(m=>m!==r));const p=s.find(m=>m.toLowerCase().startsWith(c.toLowerCase()));return p!==r?p:void 0}function Kt(e,n){const{x:r,y:o}=e;let c=!1;for(let a=0,s=n.length-1;a<n.length;s=a++){const l=n[a].x,p=n[a].y,m=n[s].x,f=n[s].y;p>o!=f>o&&r<(m-l)*(o-p)/(f-p)+l&&(c=!c)}return c}function Gt(e,n){if(!n)return!1;const r={x:e.clientX,y:e.clientY};return Kt(r,n)}function H(e){return n=>n.pointerType==="mouse"?e(n):void 0}const Vt=St,Ut=Qe,Xt=Mt,Yt=_t,Ht=Pt,zt=kt,Zt=Ot,Jt=Lt,Qt=Nt,er=jt,cn="DropdownMenu",[nr,Zr]=Ae(cn,[ze]),k=ze(),[tr,sn]=nr(cn),rr=e=>{const{__scopeDropdownMenu:n,children:r,dir:o,open:c,defaultOpen:a,onOpenChange:s,modal:l=!0}=e,p=k(n),m=t.useRef(null),[f=!1,i]=Fe({prop:c,defaultProp:a,onChange:s});return t.createElement(tr,{scope:n,triggerId:ae(),triggerRef:m,contentId:ae(),open:f,onOpenChange:i,onOpenToggle:t.useCallback(()=>i(u=>!u),[i]),modal:l},t.createElement(Vt,w({},p,{open:f,onOpenChange:i,dir:o,modal:l}),r))},or="DropdownMenuTrigger",ar=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,disabled:o=!1,...c}=e,a=sn(or,r),s=k(r);return t.createElement(Ut,w({asChild:!0},s),t.createElement(ie.button,w({type:"button",id:a.triggerId,"aria-haspopup":"menu","aria-expanded":a.open,"aria-controls":a.open?a.contentId:void 0,"data-state":a.open?"open":"closed","data-disabled":o?"":void 0,disabled:o},c,{ref:je(n,a.triggerRef),onPointerDown:C(e.onPointerDown,l=>{!o&&l.button===0&&l.ctrlKey===!1&&(a.onOpenToggle(),a.open||l.preventDefault())}),onKeyDown:C(e.onKeyDown,l=>{o||(["Enter"," "].includes(l.key)&&a.onOpenToggle(),l.key==="ArrowDown"&&a.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(l.key)&&l.preventDefault())})})))}),cr=e=>{const{__scopeDropdownMenu:n,...r}=e,o=k(n);return t.createElement(Xt,w({},o,r))},ir="DropdownMenuContent",sr=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...o}=e,c=sn(ir,r),a=k(r),s=t.useRef(!1);return t.createElement(Yt,w({id:c.contentId,"aria-labelledby":c.triggerId},a,o,{ref:n,onCloseAutoFocus:C(e.onCloseAutoFocus,l=>{var p;s.current||(p=c.triggerRef.current)===null||p===void 0||p.focus(),s.current=!1,l.preventDefault()}),onInteractOutside:C(e.onInteractOutside,l=>{const p=l.detail.originalEvent,m=p.button===0&&p.ctrlKey===!0,f=p.button===2||m;(!c.modal||f)&&(s.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),lr=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...o}=e,c=k(r);return t.createElement(Ht,w({},c,o,{ref:n}))}),ur=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...o}=e,c=k(r);return t.createElement(zt,w({},c,o,{ref:n}))}),dr=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...o}=e,c=k(r);return t.createElement(Zt,w({},c,o,{ref:n}))}),fr=e=>{const{__scopeDropdownMenu:n,children:r,open:o,onOpenChange:c,defaultOpen:a}=e,s=k(n),[l=!1,p]=Fe({prop:o,defaultProp:a,onChange:c});return t.createElement(Jt,w({},s,{open:l,onOpenChange:p}),r)},pr=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...o}=e,c=k(r);return t.createElement(Qt,w({},c,o,{ref:n}))}),mr=t.forwardRef((e,n)=>{const{__scopeDropdownMenu:r,...o}=e,c=k(r);return t.createElement(er,w({},c,o,{ref:n,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),$r=rr,vr=ar,ln=cr,gr=sr,hr=lr,br=ur,wr=dr,Cr=fr,yr=pr,Sr=mr,xr=e=>{switch(e){case"danger":return"danger100";default:return"primary100"}},be=(e,n)=>{switch(e){case"danger":return n?"danger500":"danger700";default:return n?"neutral500":"neutral800"}},X=(e,n)=>{switch(e){case"danger":return n?"danger500":"danger700";default:return n?"neutral300":"neutral500"}},Mr=$r,un=t.forwardRef(({label:e,endIcon:n=b.jsx(Pn,{width:"1.2rem",height:"1.2rem","aria-hidden":!0}),tag:r=Te,icon:o,...c},a)=>{const s={...c,ref:a,type:"button"};return b.jsx(vr,{asChild:!0,disabled:s.disabled,children:r===Pe?b.jsx(Pe,{label:e,variant:"tertiary",...s,children:o}):b.jsx(Te,{endIcon:n,variant:"ghost",...s})})}),dn=t.forwardRef(({children:e,intersectionId:n,onCloseAutoFocus:r,popoverPlacement:o="bottom-start",...c},a)=>{const[s,l]=o.split("-");return b.jsx(ln,{children:b.jsx(Er,{align:l,side:s,loop:!0,onCloseAutoFocus:r,asChild:!0,children:b.jsxs(fn,{ref:a,direction:"column",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,marginTop:1,marginBottom:1,alignItems:"flex-start",position:"relative",overflow:"auto",...c,children:[e,b.jsx(We,{id:n,width:"100%",height:"1px"})]})})})}),fn=L(ce)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  z-index: ${e=>e.theme.zIndices.popover};

  &::-webkit-scrollbar {
    display: none;
  }
`,Er=L(gr)`
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${Re.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${Re.slideDownIn};
      }
    }
  }
`,pn=({onSelect:e,disabled:n=!1,isLink:r,startIcon:o,endIcon:c,isExternal:a,variant:s="default",...l})=>b.jsx(br,{asChild:!0,onSelect:e,disabled:n,children:r||a?b.jsx(_r,{color:be(s,n),startIcon:o,endIcon:c,...l,isExternal:a??!1,$variant:s,children:l.children}):b.jsxs($n,{cursor:"pointer",color:be(s,n),background:"transparent",borderStyle:"none",gap:2,$variant:s,...l,children:[o&&b.jsx(ce,{tag:"span",color:X(s,n),"aria-hidden":!0,children:o}),b.jsx(Ce,{grow:1,children:l.children}),c&&b.jsx(ce,{tag:"span",color:X(s,n),"aria-hidden":!0,children:c})]})}),mn=({theme:e,$variant:n})=>Dn`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }

  &[data-highlighted] {
    background-color: ${e.colors[xr(n)]};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }

  color: ${e.colors[be(n,!1)]};
`,$n=L(ce)`
  ${({theme:e,$variant:n})=>mn({theme:e,$variant:n})}
`,_r=L(On)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:n})=>In(e.colors,n,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;

    > svg {
      path {
        fill: ${({theme:e,$variant:n})=>e.colors[X(n,!1)]};
      }
    }
  }
  > svg {
    path {
      fill: ${({theme:e,$variant:n})=>e.colors[X(n,!1)]};
    }
  }
  &[aria-disabled='true'] {
    pointer-events: none;

    > svg {
      path {
        fill: ${({theme:e,$variant:n})=>e.colors[X(n,!0)]};
      }
    }
  }

  ${({theme:e,$variant:n})=>mn({theme:e,$variant:n})}
`,Rr=L(We)`
  /* Negative horizontal margin to compensate Menu.Content's padding */
  margin: ${({theme:e})=>e.spaces[1]} -${({theme:e})=>e.spaces[1]};
  width: calc(100% + ${({theme:e})=>e.spaces[2]});
  /* Hide separator if there's nothing above in the menu */
  &:first-child {
    display: none;
  }
`,vn=t.forwardRef((e,n)=>b.jsx(wr,{...e,asChild:!0,children:b.jsx(Rr,{height:"1px",shrink:0,background:"neutral150",ref:n})})),gn=t.forwardRef((e,n)=>b.jsx(hr,{asChild:!0,children:b.jsx(Tr,{ref:n,variant:"sigma",textColor:"neutral600",...e})})),Tr=L(Ce)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`,Pr=Cr,hn=t.forwardRef(({disabled:e=!1,...n},r)=>b.jsx(yr,{asChild:!0,disabled:e,children:b.jsxs(kr,{ref:r,color:"neutral800",tag:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...n,children:[b.jsx(Ce,{children:n.children}),b.jsx(kn,{fill:"neutral500",height:"1.2rem",width:"1.2rem"})]})})),kr=L($n)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`,bn=t.forwardRef((e,n)=>b.jsx(ln,{children:b.jsx(Sr,{sideOffset:8,asChild:!0,children:b.jsx(fn,{ref:n,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})})),Ir=Mr,Dr=un,Or=dn,Ar=pn,Jr=vn,Qr=gn,eo=Pr,no=hn,to=bn;un.__docgenInfo={description:"",methods:[],displayName:"MenuTrigger",props:{endIcon:{defaultValue:{value:'<CaretDown width="1.2rem" height="1.2rem" aria-hidden />',computed:!1},required:!1},tag:{defaultValue:{value:`forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      variant = DEFAULT,
      startIcon,
      endIcon,
      disabled = false,
      children,
      onClick,
      size = BUTTON_SIZES[1],
      loading = false,
      fullWidth = false,
      type = 'button',
      ...props
    }: ButtonProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const isDisabled = disabled || loading;

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      if (!isDisabled && onClick) {
        onClick(e);
      }
    };

    // Only forward the \`type\` attribute when we actually render a native button
    const asTag = (props as { tag?: React.ElementType }).tag ?? 'button';
    const buttonType = asTag === 'button' || asTag === 'input' ? type : undefined;

    return (
      <ButtonWrapper
        ref={ref}
        aria-disabled={isDisabled}
        disabled={isDisabled}
        $size={size}
        $variant={variant}
        tag="button"
        onClick={handleClick}
        hasRadius
        gap={2}
        inline
        alignItems="center"
        justifyContent="center"
        width={fullWidth ? '100%' : undefined}
        paddingLeft={4}
        paddingRight={4}
        cursor="pointer"
        type={buttonType}
        {...props}
      >
        {(startIcon || loading) && (
          <Flex tag="span" aria-hidden>
            {loading ? <LoaderAnimated /> : startIcon}
          </Flex>
        )}

        <Typography variant={size === 'S' ? 'pi' : undefined} fontWeight="bold">
          {children}
        </Typography>

        {endIcon && (
          <Flex tag="span" aria-hidden>
            {endIcon}
          </Flex>
        )}
      </ButtonWrapper>
    );
  },
)`,computed:!0},required:!1}}};dn.__docgenInfo={description:"",methods:[],displayName:"MenuContent",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['alignItems']",raw:"CSSProperties['alignItems']"}}]}},{name:"CSSProperties['alignItems']",raw:"CSSProperties['alignItems']"}]},description:""},justifyContent:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['justifyContent']",raw:"CSSProperties['justifyContent']"}}]}},{name:"CSSProperties['justifyContent']",raw:"CSSProperties['justifyContent']"}]},description:""},wrap:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexWrap']",raw:"CSSProperties['flexWrap']"}}]}},{name:"CSSProperties['flexWrap']",raw:"CSSProperties['flexWrap']"}]},description:""},direction:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}}]}},{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}]},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""},intersectionId:{required:!1,tsType:{name:"string"},description:""},popoverPlacement:{required:!1,tsType:{name:"literal",value:"`${NonNullable<DropdownMenu.DropdownMenuContentProps['side']>}-${NonNullable<DropdownMenu.DropdownMenuContentProps['align']>}`"},description:"",defaultValue:{value:"'bottom-start'",computed:!1}}}};pn.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{disabled:{defaultValue:{value:"false",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},required:!1}}};vn.__docgenInfo={description:"",methods:[],displayName:"MenuSeparator"};gn.__docgenInfo={description:"",methods:[],displayName:"MenuLabel",props:{ellipsis:{required:!1,tsType:{name:"boolean"},description:""},textColor:{required:!1,tsType:{name:"unknown"},description:""},textDecoration:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['textDecoration']",raw:"CSSProperties['textDecoration']"}}]}},{name:"CSSProperties['textDecoration']",raw:"CSSProperties['textDecoration']"}]},description:""},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof TEXT_VARIANTS)[number]"},description:""}}};hn.__docgenInfo={description:"",methods:[],displayName:"MenuSubTrigger",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}}};bn.__docgenInfo={description:"",methods:[],displayName:"MenuSubContent",props:{ref:{required:!1,tsType:{name:"ReactComponentPropsWithRef['ref']",raw:"React.ComponentPropsWithRef<C>['ref']"},description:""},alignItems:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['alignItems']",raw:"CSSProperties['alignItems']"}}]}},{name:"CSSProperties['alignItems']",raw:"CSSProperties['alignItems']"}]},description:""},justifyContent:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['justifyContent']",raw:"CSSProperties['justifyContent']"}}]}},{name:"CSSProperties['justifyContent']",raw:"CSSProperties['justifyContent']"}]},description:""},wrap:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexWrap']",raw:"CSSProperties['flexWrap']"}}]}},{name:"CSSProperties['flexWrap']",raw:"CSSProperties['flexWrap']"}]},description:""},direction:{required:!1,tsType:{name:"union",raw:`| {
    [key in Breakpoint]?: T;
  }
| T`,elements:[{name:"signature",type:"object",raw:`{
  [key in Breakpoint]?: T;
}`,signature:{properties:[{key:{name:"union",raw:"'initial' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'initial'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!1},value:{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}}]}},{name:"CSSProperties['flexDirection']",raw:"CSSProperties['flexDirection']"}]},description:""},gap:{required:!1,tsType:{name:"unknown"},description:""},inline:{required:!1,tsType:{name:"boolean"},description:""}}};const Lr=t.forwardRef(({children:e,onOpen:n,onClose:r,popoverPlacement:o,onReachEnd:c,...a},s)=>{const l=t.useRef(null),p=Nn(s,l),m=t.useRef(null),[f,i]=t.useState(!1),u=v=>{c&&c(v)},$=v=>{v&&typeof n=="function"?n():!v&&typeof r=="function"&&r(),i(v)},h=Bn(),d=`intersection-${An(h)}`;return Ln(m,u,{selectorToWatch:`#${d}`,skipWhen:!f}),b.jsxs(Ir,{onOpenChange:$,children:[b.jsx(Dr,{ref:p,...a,children:a.label}),b.jsx(Or,{ref:m,intersectionId:d,popoverPlacement:o,children:e})]})}),ro=Ar;Lr.__docgenInfo={description:"",methods:[],displayName:"SimpleMenu",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onReachEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(entry: IntersectionObserverEntry) => void",signature:{arguments:[{type:{name:"IntersectionObserverEntry"},name:"entry"}],return:{name:"void"}}},description:"Callback function to be called when the popover reaches the end of the scrollable content"}}};export{Or as C,Ar as I,Qr as L,ro as M,Lr as S,no as a,eo as b,to as c,Jr as d};
