(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,,,,,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var i=t(0),c=t(1),a=t.n(c),r=t(7),o=t.n(r),s=(t(14),t(8)),l=t(2),u=(t(15),t(16),t(4)),j=t.n(u),d=(t(17),function(n){var e=j()({cell:!0,winner:n.highlight}),t=j()({"cell-content":!0,populated:n.value});return Object(i.jsx)("button",{className:e,onClick:n.onClick,children:Object(i.jsx)("span",{className:t,children:n.value})})}),b=function(n){var e=n.cellValues.map((function(e,t){var c=n.winningCombination&&n.winningCombination.indexOf(t)>=0;return Object(i.jsx)(d,{value:e,highlight:c,onClick:function(){return n.cellClicked(t)}},t)}));return Object(i.jsx)("div",{id:"board",children:e})},O=(t(18),function(n){var e=j()({"modal-open":n.isGameOver}),t=n.winner?"Winner is ".concat(n.winner):"It is a tie";return Object(i.jsx)("div",{id:"modal-overlay",className:e,children:Object(i.jsxs)("div",{id:"game-result-modal",children:[Object(i.jsx)("div",{id:"result-container",children:Object(i.jsx)("div",{id:"winner-container",children:Object(i.jsx)("span",{children:t})})}),Object(i.jsx)("div",{id:"new-game-container",children:Object(i.jsx)("button",{id:"new-game-button",onClick:n.onNewGameClicked,children:"Start New Game"})})]})})}),h={0:[[1,2],[3,6],[4,8]],1:[[0,2],[4,7]],2:[[0,1],[5,8],[4,6]],3:[[0,6],[4,5]],4:[[2,6],[3,5],[1,7],[0,8]],5:[[3,4],[2,8]],6:[[7,8],[0,3],[2,4]],7:[[6,8],[1,4]],8:[[6,7],[2,5],[0,4]]},v=(t(19),function(){return Object(i.jsx)("div",{className:"footer",children:Object(i.jsx)("p",{children:"\xa9 Juan Cruz Moyano"})})}),m=function(){var n=Object(c.useState)(["","","","","","","","",""]),e=Object(l.a)(n,2),t=e[0],a=e[1],r=Object(c.useState)(!0),o=Object(l.a)(r,2),u=o[0],j=o[1],d=Object(c.useState)(!1),m=Object(l.a)(d,2),f=m[0],g=m[1],x=Object(c.useState)(9),w=Object(l.a)(x,2),C=w[0],p=w[1],k=Object(c.useState)(),S=Object(l.a)(k,2),N=S[0],F=S[1],G=Object(c.useState)([]),T=Object(l.a)(G,2),R=T[0],y=T[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{id:"game",children:[Object(i.jsx)("h1",{children:"Tic Tac Toe"}),Object(i.jsx)(b,{cellValues:t,winningCombination:R,cellClicked:function(n){if(function(n){return""===t[n]}(n)){var e=Object(s.a)(t);e[n]=u?"X":"O";var i=C-1,c=function(n,e,t){for(var i=h[t],c=0;c<i.length;c++){var a=n[t],r=n[i[c][0]],o=n[i[c][1]];if(a===r&&r===o)return{hasResult:!0,winner:a,winningCombination:[t,i[c][0],i[c][1]]}}return 0===e?{hasResult:!0,winner:void 0,winningCombination:[]}:{hasResult:!1,winner:void 0,winningCombination:[]}}(e,i,n);a(e),j(!u),g(c.hasResult),p(i),F(c.winner),y(c.winningCombination)}}})]}),Object(i.jsx)(O,{isGameOver:f,winner:N,onNewGameClicked:function(){a(["","","","","","","","",""]),j(!0),g(!1),p(9),F(void 0),y([])}}),Object(i.jsx)(v,{})]})};var f=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(m,{})})},g=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),i(n),c(n),a(n),r(n)}))};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),g()}],[[20,1,2]]]);
//# sourceMappingURL=main.fa744803.chunk.js.map