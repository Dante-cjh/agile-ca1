"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[649],{4649:function(e,r,a){a.r(r),a.d(r,{default:function(){return y}});var t=a(2791),o=a(1413),n=a(3044),i=a(7621),s=a(1492),c=a(9504),l=a(2169),d=a(9585),u=a(4294),v=a(1087),f=a(890),h=a(7237),p=a(4275),m=a(340),Z=a(1889),g=a(578),x=a(7102),b=a(184);function y(e){var r=e.movie,a=e.action,y=(0,t.useContext)(o.m),j=y.favorites,S=(y.addToFavorites,(0,t.useContext)(o.m)),C=S.toWatch;S.addToWatch;return j.find((function(e){return e===r.id}))?r.favorite=!0:r.favorite=!1,C.find((function(e){return e===r.id}))?r.toWatch=!0:r.toWatch=!1,(0,b.jsxs)(i.Z,{sx:{maxWidth:345},children:[(0,b.jsx)(d.Z,{avatar:r.favorite&&r.toWatch?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(n.Z,{sx:{backgroundColor:"red"},children:(0,b.jsx)(h.Z,{})}),(0,b.jsx)(n.Z,{sx:{backgroundColor:"red"},children:(0,b.jsx)(x.Z,{})})]}):r.favorite?(0,b.jsx)(n.Z,{sx:{backgroundColor:"red"},children:(0,b.jsx)(h.Z,{})}):r.toWatch?(0,b.jsx)(n.Z,{sx:{backgroundColor:"red"},children:(0,b.jsx)(x.Z,{})}):null,title:(0,b.jsxs)(f.Z,{variant:"h5",component:"p",children:[r.title," "]})}),(0,b.jsx)(l.Z,{sx:{height:500},image:r.poster_path?"https://image.tmdb.org/t/p/w500/".concat(r.poster_path):g}),(0,b.jsx)(c.Z,{children:(0,b.jsxs)(Z.ZP,{container:!0,children:[(0,b.jsx)(Z.ZP,{item:!0,xs:6,children:(0,b.jsxs)(f.Z,{variant:"h6",component:"p",children:[(0,b.jsx)(p.Z,{fontSize:"small"}),r.release_date]})}),(0,b.jsx)(Z.ZP,{item:!0,xs:6,children:(0,b.jsxs)(f.Z,{variant:"h6",component:"p",children:[(0,b.jsx)(m.Z,{fontSize:"small"}),"  "," ",r.vote_average," "]})})]})}),(0,b.jsxs)(s.Z,{disableSpacing:!0,children:[a(r),(0,b.jsx)(v.rU,{to:"/movies/".concat(r.id),children:(0,b.jsx)(u.Z,{variant:"outlined",size:"medium",color:"primary",children:"More Info ..."})})]})]})}},4275:function(e,r,a){var t=a(4836);r.Z=void 0;var o=t(a(5649)),n=a(184),i=(0,o.default)([(0,n.jsx)("path",{d:"M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z"},"0"),(0,n.jsx)("path",{d:"M4 5.01h16V8H4z",opacity:".3"},"1")],"CalendarTodayTwoTone");r.Z=i},7102:function(e,r,a){var t=a(4836);r.Z=void 0;var o=t(a(5649)),n=a(184),i=(0,o.default)((0,n.jsx)("path",{d:"M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm17.59-2.07-4.25 4.24-2.12-2.12-1.41 1.41L16.34 19 22 13.34z"}),"PlaylistAddCheck");r.Z=i},340:function(e,r,a){var t=a(4836);r.Z=void 0;var o=t(a(5649)),n=a(184),i=(0,o.default)((0,n.jsx)("path",{d:"M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z"}),"StarRate");r.Z=i},3044:function(e,r,a){a.d(r,{Z:function(){return y}});var t=a(9439),o=a(3366),n=a(7462),i=a(2791),s=a(3733),c=a(4419),l=a(6934),d=a(1402),u=a(9201),v=a(184),f=(0,u.Z)((0,v.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),h=a(5878),p=a(1217);function m(e){return(0,p.Z)("MuiAvatar",e)}(0,h.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var Z=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var a=e.ownerState;return[r.root,r[a.variant],a.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,a=e.ownerState;return(0,n.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===a.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===a.variant&&{borderRadius:0},a.colorDefault&&(0,n.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),x=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,l.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var y=i.forwardRef((function(e,r){var a=(0,d.Z)({props:e,name:"MuiAvatar"}),l=a.alt,u=a.children,f=a.className,h=a.component,p=void 0===h?"div":h,y=a.imgProps,j=a.sizes,S=a.src,C=a.srcSet,w=a.variant,M=void 0===w?"circular":w,R=(0,o.Z)(a,Z),k=null,P=function(e){var r=e.crossOrigin,a=e.referrerPolicy,o=e.src,n=e.srcSet,s=i.useState(!1),c=(0,t.Z)(s,2),l=c[0],d=c[1];return i.useEffect((function(){if(o||n){d(!1);var e=!0,t=new Image;return t.onload=function(){e&&d("loaded")},t.onerror=function(){e&&d("error")},t.crossOrigin=r,t.referrerPolicy=a,t.src=o,n&&(t.srcset=n),function(){e=!1}}}),[r,a,o,n]),l}((0,n.Z)({},y,{src:S,srcSet:C})),z=S||C,H=z&&"error"!==P,N=(0,n.Z)({},a,{colorDefault:!H,component:p,variant:M}),A=function(e){var r=e.classes,a={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(a,m,r)}(N);return k=H?(0,v.jsx)(x,(0,n.Z)({alt:l,srcSet:C,src:S,sizes:j,ownerState:N,className:A.img},y)):null!=u?u:z&&l?l[0]:(0,v.jsx)(b,{ownerState:N,className:A.fallback}),(0,v.jsx)(g,(0,n.Z)({as:p,ownerState:N,className:(0,s.Z)(A.root,f),ref:r},R,{children:k}))}))},1492:function(e,r,a){a.d(r,{Z:function(){return m}});var t=a(3366),o=a(7462),n=a(2791),i=a(3733),s=a(4419),c=a(6934),l=a(1402),d=a(5878),u=a(1217);function v(e){return(0,u.Z)("MuiCardActions",e)}(0,d.Z)("MuiCardActions",["root","spacing"]);var f=a(184),h=["disableSpacing","className"],p=(0,c.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(e,r){var a=e.ownerState;return[r.root,!a.disableSpacing&&r.spacing]}})((function(e){var r=e.ownerState;return(0,o.Z)({display:"flex",alignItems:"center",padding:8},!r.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),m=n.forwardRef((function(e,r){var a=(0,l.Z)({props:e,name:"MuiCardActions"}),n=a.disableSpacing,c=void 0!==n&&n,d=a.className,u=(0,t.Z)(a,h),m=(0,o.Z)({},a,{disableSpacing:c}),Z=function(e){var r=e.classes,a={root:["root",!e.disableSpacing&&"spacing"]};return(0,s.Z)(a,v,r)}(m);return(0,f.jsx)(p,(0,o.Z)({className:(0,i.Z)(Z.root,d),ownerState:m,ref:r},u))}))},9585:function(e,r,a){a.d(r,{Z:function(){return j}});var t=a(4942),o=a(3366),n=a(7462),i=a(2791),s=a(3733),c=a(4419),l=a(890),d=a(1402),u=a(6934),v=a(5878),f=a(1217);function h(e){return(0,f.Z)("MuiCardHeader",e)}var p=(0,v.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=a(184),Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,r){var a;return(0,n.Z)((a={},(0,t.Z)(a,"& .".concat(p.title),r.title),(0,t.Z)(a,"& .".concat(p.subheader),r.subheader),a),r.root)}})({display:"flex",alignItems:"center",padding:16}),x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,r){return r.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,r){return r.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),y=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,r){return r.content}})({flex:"1 1 auto"}),j=i.forwardRef((function(e,r){var a=(0,d.Z)({props:e,name:"MuiCardHeader"}),t=a.action,i=a.avatar,u=a.className,v=a.component,f=void 0===v?"div":v,p=a.disableTypography,j=void 0!==p&&p,S=a.subheader,C=a.subheaderTypographyProps,w=a.title,M=a.titleTypographyProps,R=(0,o.Z)(a,Z),k=(0,n.Z)({},a,{component:f,disableTypography:j}),P=function(e){var r=e.classes;return(0,c.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,r)}(k),z=w;null==z||z.type===l.Z||j||(z=(0,m.jsx)(l.Z,(0,n.Z)({variant:i?"body2":"h5",className:P.title,component:"span",display:"block"},M,{children:z})));var H=S;return null==H||H.type===l.Z||j||(H=(0,m.jsx)(l.Z,(0,n.Z)({variant:i?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:H}))),(0,m.jsxs)(g,(0,n.Z)({className:(0,s.Z)(P.root,u),as:f,ref:r,ownerState:k},R,{children:[i&&(0,m.jsx)(x,{className:P.avatar,ownerState:k,children:i}),(0,m.jsxs)(y,{className:P.content,ownerState:k,children:[z,H]}),t&&(0,m.jsx)(b,{className:P.action,ownerState:k,children:t})]}))}))}}]);
//# sourceMappingURL=649.f6a75bbe.chunk.js.map