(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[877],{687:function(e,t,n){"use strict";n.d(t,{Bt:function(){return f},SU:function(){return o},Vs:function(){return s},nS:function(){return l},y:function(){return p}});var r=n(861),a=n(757),u=n.n(a),c=n(243);c.Z.defaults.baseURL="https://api.themoviedb.org/";var i="ef0fb983e89662afab3575284ace2b44",o=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/trending/all/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("3/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},877:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r,a=n(861),u=n(439),c=n(757),i=n.n(c),o=n(687),s=n(168),p=n(444).ZP.input(r||(r=(0,s.Z)(["\n  margin-top: 12px;\n"]))),f=n(184),l=function(e){var t=e.setSearchInputValue;return(0,f.jsx)(p,{type:"text",placeholder:"search film",onChange:function(e){t(e.target.value)}})},h=n(791),v=n(87),d=n(689),y=n(185),m=n(7),g="Something went wrong, try again",x=function(){var e,t=(0,h.useState)([]),n=(0,u.Z)(t,2),r=n[0],c=n[1],s=(0,h.useState)(!1),p=(0,u.Z)(s,2),m=p[0],x=p[1],b=(0,h.useState)(null),k=(0,u.Z)(b,2),w=k[0],Z=k[1],S=(0,h.useState)(""),_=(0,u.Z)(S,2),T=_[0],j=_[1],O=(0,v.lr)(),P=(0,u.Z)(O,2),C=P[0],I=P[1],U=null!==(e=C.get("query"))&&void 0!==e?e:"",R=(0,d.TH)();(0,h.useEffect)((function(){function e(){return(e=(0,a.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,o.nS)(U);case 4:t=e.sent,n=t.results,c(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),Z(g);case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[U]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(l,{setSearchInputValue:function(e){j(e)}}),(0,f.jsx)("button",{type:"button",onClick:function(){return""===T?alert("Please enter the name of the movie"):I({query:T.trim()})},children:(0,f.jsx)(y.dVI,{})}),m&&(0,f.jsx)("div",{children:"Loading..."}),r.length>0&&(0,f.jsx)("ul",{children:r.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(v.rU,{to:"/movies/".concat(e.id),state:{from:R},children:e.title})},e.id)}))}),w&&(0,f.jsx)("div",{children:w})]})};l.propTypes={setSearchInputValue:m.PropTypes.func.isRequired}},888:function(e,t,n){"use strict";var r=n(47);function a(){}function u(){}u.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,u,c){if(c!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:u,resetWarningCache:a};return n.PropTypes=n,n}},7:function(e,t,n){e.exports=n(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=877.9b2756f8.chunk.js.map