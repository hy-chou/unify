(this.webpackJsonpunify=this.webpackJsonpunify||[]).push([[0],{10:function(n,e,t){},11:function(n,e,t){"use strict";t.r(e);var r=t(1),u=t(3),c=t.n(u),o=t(4),i=t(0);for(var a=function(n){var e=n.style<.5?"0":"#",t=n.style<.5?"1":"-";return Object(i.jsx)("div",{className:"member item",onClick:n.onClick,children:n.value?t:e})},s=Math.random(),f=[],l=0;l<7;l++)f.push(l);function v(n){for(var e=n[0],t=1;t<7;t++)if(e!==n[t])return!1;return!0}function h(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=[];e===[]||v(e);){e=[];for(var t=0;t<7;t++)e.push(n||Math.floor(2*Math.random()))}return e}var m=function(n){var e=Object(r.useState)(h()),t=Object(o.a)(e,2),u=t[0],c=t[1];return v(u)&&setTimeout((function(){c(h())}),3e3),Object(i.jsx)("div",{className:"queue container",children:f.map((function(n,e){return Object(i.jsx)(a,{value:u[e],style:s,onClick:function(){return function(n){var e=u.slice();e[n]=e[n]?0:1,n-1>=0&&(e[n-1]=e[n-1]?0:1),n+1<7&&(e[n+1]=e[n+1]?0:1),c(e)}(e)}},n)}))})};t(10);c.a.render(Object(i.jsx)(m,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.868d3d27.chunk.js.map