"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[988],{1687:function(n,t,e){e.d(t,{Bt:function(){return f},SU:function(){return o},Vs:function(){return s},nS:function(){return l},y:function(){return p}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/";var i="ef0fb983e89662afab3575284ace2b44",o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/trending/all/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("3/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},5033:function(n,t,e){e.d(t,{u:function(){return c}});var r,a=e(168),c=e(6444).ZP.span(r||(r=(0,a.Z)(["\n  margin-right: 5px;\n"])))},7988:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,c=e(5861),u=e(9439),i=e(7757),o=e.n(i),s=e(1687),p=e(1087),f=e(8820),l=e(5033),d=e(168),v=e(6444),h=v.ZP.li(r||(r=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  padding-bottom: 8px;\n"]))),m=e(184),x=function(n){var t=n.movie,e=n.location;return(0,m.jsxs)(h,{children:[(0,m.jsx)(l.u,{children:(0,m.jsx)(f.gwB,{color:"#F4D03F"})}),(0,m.jsx)(p.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.original_title||t.name||t.original_name})]})},g=e(2791),y=e(7689),Z=e(2007),w=v.ZP.h2(a||(a=(0,d.Z)(["\n  font-size: 35px;\n  padding: 20px;\n"]))),k=e(6662),b="Something went wrong, try again",j=function(){var n=(0,g.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,g.useState)(null),i=(0,u.Z)(a,2),p=i[0],f=i[1],l=(0,g.useState)(!1),d=(0,u.Z)(l,2),v=d[0],h=d[1],Z=(0,y.TH)();return(0,g.useEffect)((function(){function n(){return(n=(0,c.Z)(o().mark((function n(){var t,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,s.SU)();case 4:t=n.sent,e=t.results,r(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),f(b);case 12:return n.prev=12,h(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,m.jsxs)(k.m,{children:[v&&(0,m.jsx)("div",{children:"Loading..."}),(0,m.jsx)(w,{children:"Tranding today"}),(0,m.jsx)("ul",{children:e.map((function(n){return(0,m.jsx)(x,{movie:n,location:Z},n.id)}))}),p&&(0,m.jsx)("div",{children:p})]})};x.propTypes={movie:Z.PropTypes.object,location:Z.PropTypes.object}}}]);
//# sourceMappingURL=988.b887e192.chunk.js.map