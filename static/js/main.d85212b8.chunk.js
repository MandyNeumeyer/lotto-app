(this["webpackJsonplucky-numbers"]=this["webpackJsonplucky-numbers"]||[]).push([[0],[,,,,,,,,,,function(e,c,t){},function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),i=t(5),a=t.n(i),l=(t(10),t(2)),r=(t(11),t(4)),j=t(0),u=function(e){return 0===e.numbers.length?Object(j.jsxs)("div",{className:"Header",children:[Object(j.jsxs)("div",{className:"heading space",children:[Object(j.jsx)(r.a,{size:40,style:{color:"lightgray"}}),Object(j.jsx)("h1",{children:"LOTTO 6 aus 49"})]}),Object(j.jsx)("p",{children:"Generating Lucky numbers"})]}):Object(j.jsxs)("div",{className:"Header",children:[Object(j.jsxs)("div",{className:"heading",children:[Object(j.jsx)(r.a,{size:40,style:{color:"lightgray"}}),Object(j.jsx)("h1",{children:"The Lucky Once!"})]}),Object(j.jsx)("p",{children:"Generating Lucky numbers"})]})},b=(t(13),function(e){var c=e.text,t=e.click;return Object(j.jsx)("button",{className:"pulse",onClick:t,children:c})}),d=(t(14),function(e){var c=e.numbers,t=e.isVisible,s=c.map((function(e,c){return Object(j.jsx)("span",{className:"lucky lucky-".concat(c),children:e},c)}));return Object(j.jsx)("div",{style:{visibility:"".concat(t?"visible":"hidden")},children:Object(j.jsx)("div",{className:"luckyNum",children:s})})}),o=t.p+"static/media/fortune-teller.e618e6d4.gif",h=t.p+"static/media/goldenFrame.d175404a.png",O=(t(15),function(){return Object(j.jsxs)("div",{className:"Loading",children:[Object(j.jsx)("img",{className:"fortuneTeller",src:o,alt:"fortune-teller"}),Object(j.jsx)("img",{className:"GoldenFrame",src:h,alt:"golden-frame"})]})});var m=function(){var e=Object(s.useState)(!0),c=Object(l.a)(e,2),t=c[0],n=c[1],i=Object(s.useState)([]),a=Object(l.a)(i,2),r=a[0],o=a[1],h=Object(s.useState)(!1),m=Object(l.a)(h,2),x=m[0],f=m[1];return Object(s.useEffect)((function(){setTimeout((function(){f(!1)}),6e3)}),[x]),x?Object(j.jsx)(O,{}):Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{numbers:r}),Object(j.jsx)(d,{numbers:r,isVisible:t}),Object(j.jsxs)("div",{className:"btn",children:[Object(j.jsx)("div",{style:{display:"".concat(r.length>0?"block":"none")},children:Object(j.jsx)(b,{click:function(){n(!t)},text:t?"keep secret":"show secret"})}),Object(j.jsx)("div",{style:{display:"".concat(r.length>0?"none":"block")},children:Object(j.jsx)(b,{click:function(){if(!(r.length>0)){for(var e=[],c=0;c<6;c++)e.push(Math.ceil(49*Math.random())+" ");e.push(Math.ceil(10*Math.random())),o(e),f(!x)}},text:"Show me the lucky numbers"})})]})]})};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.d85212b8.chunk.js.map