(this["webpackJsonpreact-demo"]=this["webpackJsonpreact-demo"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),r=n(7),s=n.n(r),l=(n(12),n(2)),i=n(6),a=(n(13),n(14),n(0)),u=function(e){var t=Object(c.useMemo)((function(){console.log("run memo inside");for(var e=[],t=1;t<=100;t++){var n="";t%3===0&&(n+="Fizz"),t%5===0&&(n+="Buzz"),""===n&&(n=t),e.push(n)}return e}),[]);return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"modalWrapper ".concat(e.isVisible?"visible":""),children:Object(a.jsxs)("div",{className:"modal",children:[Object(a.jsx)("button",{className:"modal_controls",onClick:e.close,children:"Close Modal"}),Object(a.jsx)("div",{className:"modal_content",children:t.map((function(e){return Object(a.jsx)("p",{children:e})}))})]})})})},b=function(){var e=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1];return{isVisible:n,open:function(){o((function(e){return!0}))},close:function(){o((function(e){return!1}))}}}(),t=e.isVisible,n=e.open,o=e.close,r=Object(c.useContext)(d),s=Object(l.a)(r,2),i=s[0],b=s[1];Object(c.useEffect)((function(){b({type:"COLOR_CHANGE"})}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u,{isVisible:t,open:n,close:o}),Object(a.jsxs)("div",{className:"center500300",children:[Object(a.jsx)("button",{className:"runBtn",style:{backgroundColor:i.colors[i.colors.length-1]},onClick:function(){n(),b({type:"COLOR_CHANGE"})},children:" Show Result (1 to 100 / FizzBuzz) "}),Object(a.jsx)("div",{className:"colorlist",children:i.colors.map((function(e){return Object(a.jsxs)("font",{color:e,children:[e,","]})}))})]})]})},j={availableColors:["red","green","blue","black","orange"],colors:[]},d=Object(c.createContext)([j,function(){}]),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;if("COLOR_CHANGE"===t.type){var n="";if("blue"===e.colors[e.colors.length-1])n="green";else{var c=Math.floor(4*Math.random());n=e.availableColors[c]}return{availableColors:Object(i.a)(e.availableColors),colors:[].concat(Object(i.a)(e.colors),[n])}}};var f=function(){var e=Object(c.useReducer)(O,j),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(d.Provider,{value:[n,o],children:Object(a.jsx)(b,{})})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),r(e),s(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.627e06b9.chunk.js.map