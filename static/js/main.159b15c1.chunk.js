(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),i=r(7),a=r.n(i),c=(r(13),r(8)),u=r(2),o=r(3),l=r(5),h=r(4),j=r(0);function d(e){return Object(j.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var b=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(j.jsx)(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"Border-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(j.jsxs)("div",{className:"Border-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(j.jsxs)("div",{className:"Border-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(n.Component),x=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(e){var n;return Object(u.a)(this,r),(n=t.call(this,e)).state={xIsNext:!0,stepNumber:0,history:[{squares:Array(9).fill(null)}]},n}return Object(o.a)(r,[{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();v(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat({squares:r}),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"render",value:function(){var e,t=this,r=this.state.history,n=r[this.state.stepNumber],s=v(n.squares),i=r.map((function(e,r){var n=r?"Go to #"+r:"Start the Game";return Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){t.jumpTo(r)},children:n})},r)}));return e=s?"Winner is "+s:"Next Player is "+(this.state.xIsNext?"X":"O"),Object(j.jsxs)("div",{className:"game",children:[Object(j.jsx)("div",{className:"game-board",children:Object(j.jsx)(b,{onClick:function(e){return t.handleClick(e)},squares:n.squares})}),Object(j.jsxs)("div",{className:"game-info",children:[Object(j.jsx)("div",{children:e}),Object(j.jsx)("ul",{children:i})]})]})}}]),r}(n.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(c.a)(t[r],3),s=n[0],i=n[1],a=n[2];if(e[s]&&e[s]===e[i]&&e[i]===e[a])return e[s]}return null}r(15);var O=function(){return Object(j.jsx)(x,{})},f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;r(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.159b15c1.chunk.js.map