"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{687:function(e,n,t){t.d(n,{Bt:function(){return f},SU:function(){return s},Vs:function(){return o},nS:function(){return l},y:function(){return p}});var r=t(861),a=t(757),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/";var i="ef0fb983e89662afab3575284ace2b44",s=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("3/trending/all/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("3/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("3/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("3/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("3/search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},910:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(757),u=t.n(c),i=t(687),s=t(791),o=t(689),p=t(184),f="Something went wrong, try again";n.default=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],l=(0,s.useState)(!1),h=(0,a.Z)(l,2),d=h[0],v=h[1],m=(0,s.useState)(null),g=(0,a.Z)(m,2),w=g[0],x=g[1],k=(0,o.UO)().movieId;return(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,i.y)(k);case 4:n=e.sent,t=n.cast,c(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),x(f);case 12:return e.prev=12,v(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[k]),(0,p.jsxs)("div",{children:[d&&(0,p.jsx)("div",{children:"Loading..."}),null!==t&&(0,p.jsx)("ul",{children:t.map((function(e){var n=e.profile_path?"https://image.tmdb.org/t/p/w500".concat(e.profile_path):"https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper-thumbnail.png";return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:n,alt:e.name,width:"150"}),(0,p.jsx)("p",{children:e.name}),(0,p.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))}),w&&(0,p.jsx)("div",{children:w})]})}}}]);
//# sourceMappingURL=910.09c7cacd.chunk.js.map