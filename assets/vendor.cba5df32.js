var C,c,R,B,P,z,V,G,T={},J=[],ge=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(e,_){for(var t in _)e[t]=_[t];return e}function K(e){var _=e.parentNode;_&&_.removeChild(e)}function M(e,_,t){var r,l,n,i={};for(n in _)n=="key"?r=_[n]:n=="ref"?l=_[n]:i[n]=_[n];if(arguments.length>2&&(i.children=arguments.length>3?C.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)i[n]===void 0&&(i[n]=e.defaultProps[n]);return E(e,i,r,l,null)}function E(e,_,t,r,l){var n={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l==null?++R:l};return l==null&&c.vnode!=null&&c.vnode(n),n}function be(){return{current:null}}function S(e){return e.children}function A(e,_){this.props=e,this.context=_}function $(e,_){if(_==null)return e.__?$(e.__,e.__.__k.indexOf(e)+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?$(e):null}function Q(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return Q(e)}}function N(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!F.__r++||V!==c.debounceRendering)&&((V=c.debounceRendering)||z)(F)}function F(){for(var e;F.__r=P.length;)e=P.sort(function(_,t){return _.__v.__b-t.__v.__b}),P=[],e.some(function(_){var t,r,l,n,i,a;_.__d&&(i=(n=(t=_).__v).__e,(a=t.__P)&&(r=[],(l=k({},n)).__v=n.__v+1,j(a,n,l,t.__n,a.ownerSVGElement!==void 0,n.__h!=null?[i]:null,r,i==null?$(n):i,n.__h),re(r,n),n.__e!=i&&Q(n)))})}function X(e,_,t,r,l,n,i,a,p,h){var o,d,f,u,s,x,v,y=r&&r.__k||J,g=y.length;for(t.__k=[],o=0;o<_.length;o++)if((u=t.__k[o]=(u=_[o])==null||typeof u=="boolean"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?E(null,u,null,null,u):Array.isArray(u)?E(S,{children:u},null,null,null):u.__b>0?E(u.type,u.props,u.key,null,u.__v):u)!=null){if(u.__=t,u.__b=t.__b+1,(f=y[o])===null||f&&u.key==f.key&&u.type===f.type)y[o]=void 0;else for(d=0;d<g;d++){if((f=y[d])&&u.key==f.key&&u.type===f.type){y[d]=void 0;break}f=null}j(e,u,f=f||T,l,n,i,a,p,h),s=u.__e,(d=u.ref)&&f.ref!=d&&(v||(v=[]),f.ref&&v.push(f.ref,null,u),v.push(d,u.__c||s,u)),s!=null?(x==null&&(x=s),typeof u.type=="function"&&u.__k===f.__k?u.__d=p=Y(u,p,e):p=ee(e,u,f,y,s,p),typeof t.type=="function"&&(t.__d=p)):p&&f.__e==p&&p.parentNode!=e&&(p=$(f))}for(t.__e=x,o=g;o--;)y[o]!=null&&(typeof t.type=="function"&&y[o].__e!=null&&y[o].__e==t.__d&&(t.__d=$(r,o+1)),le(y[o],y[o]));if(v)for(o=0;o<v.length;o++)oe(v[o],v[++o],v[++o])}function Y(e,_,t){for(var r,l=e.__k,n=0;l&&n<l.length;n++)(r=l[n])&&(r.__=e,_=typeof r.type=="function"?Y(r,_,t):ee(t,r,r,l,r.__e,_));return _}function Z(e,_){return _=_||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(t){Z(t,_)}):_.push(e)),_}function ee(e,_,t,r,l,n){var i,a,p;if(_.__d!==void 0)i=_.__d,_.__d=void 0;else if(t==null||l!=n||l.parentNode==null)e:if(n==null||n.parentNode!==e)e.appendChild(l),i=null;else{for(a=n,p=0;(a=a.nextSibling)&&p<r.length;p+=2)if(a==l)break e;e.insertBefore(l,n),i=n}return i!==void 0?i:l.nextSibling}function ke(e,_,t,r,l){var n;for(n in t)n==="children"||n==="key"||n in _||D(e,n,null,t[n],r);for(n in _)l&&typeof _[n]!="function"||n==="children"||n==="key"||n==="value"||n==="checked"||t[n]===_[n]||D(e,n,_[n],t[n],r)}function _e(e,_,t){_[0]==="-"?e.setProperty(_,t):e[_]=t==null?"":typeof t!="number"||ge.test(_)?t:t+"px"}function D(e,_,t,r,l){var n;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||_e(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||_e(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")n=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+n]=t,t?r||e.addEventListener(_,n?ne:te,n):e.removeEventListener(_,n?ne:te,n);else if(_!=="dangerouslySetInnerHTML"){if(l)_=_.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_ in e)try{e[_]=t==null?"":t;break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||_[0]==="a"&&_[1]==="r")?e.setAttribute(_,t):e.removeAttribute(_))}}function te(e){this.l[e.type+!1](c.event?c.event(e):e)}function ne(e){this.l[e.type+!0](c.event?c.event(e):e)}function j(e,_,t,r,l,n,i,a,p){var h,o,d,f,u,s,x,v,y,g,H,b=_.type;if(_.constructor!==void 0)return null;t.__h!=null&&(p=t.__h,a=_.__e=t.__e,_.__h=null,n=[a]),(h=c.__b)&&h(_);try{e:if(typeof b=="function"){if(v=_.props,y=(h=b.contextType)&&r[h.__c],g=h?y?y.props.value:h.__:r,t.__c?x=(o=_.__c=t.__c).__=o.__E:("prototype"in b&&b.prototype.render?_.__c=o=new b(v,g):(_.__c=o=new A(v,g),o.constructor=b,o.render=$e),y&&y.sub(o),o.props=v,o.state||(o.state={}),o.context=g,o.__n=r,d=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),b.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=k({},o.__s)),k(o.__s,b.getDerivedStateFromProps(v,o.__s))),f=o.props,u=o.state,d)b.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(b.getDerivedStateFromProps==null&&v!==f&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,g),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,g)===!1||_.__v===t.__v){o.props=v,o.state=o.__s,_.__v!==t.__v&&(o.__d=!1),o.__v=_,_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(w){w&&(w.__=_)}),o.__h.length&&i.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,g),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(f,u,s)})}o.context=g,o.props=v,o.state=o.__s,(h=c.__r)&&h(_),o.__d=!1,o.__v=_,o.__P=e,h=o.render(o.props,o.state,o.context),o.state=o.__s,o.getChildContext!=null&&(r=k(k({},r),o.getChildContext())),d||o.getSnapshotBeforeUpdate==null||(s=o.getSnapshotBeforeUpdate(f,u)),H=h!=null&&h.type===S&&h.key==null?h.props.children:h,X(e,Array.isArray(H)?H:[H],_,t,r,l,n,i,a,p),o.base=_.__e,_.__h=null,o.__h.length&&i.push(o),x&&(o.__E=o.__=null),o.__e=!1}else n==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=xe(t.__e,_,t,r,l,n,i,p);(h=c.diffed)&&h(_)}catch(w){_.__v=null,(p||n!=null)&&(_.__e=a,_.__h=!!p,n[n.indexOf(a)]=null),c.__e(w,_,t)}}function re(e,_){c.__c&&c.__c(_,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(r){r.call(t)})}catch(r){c.__e(r,t.__v)}})}function xe(e,_,t,r,l,n,i,a){var p,h,o,d=t.props,f=_.props,u=_.type,s=0;if(u==="svg"&&(l=!0),n!=null){for(;s<n.length;s++)if((p=n[s])&&"setAttribute"in p==!!u&&(u?p.localName===u:p.nodeType===3)){e=p,n[s]=null;break}}if(e==null){if(u===null)return document.createTextNode(f);e=l?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,f.is&&f),n=null,a=!1}if(u===null)d===f||a&&e.data===f||(e.data=f);else{if(n=n&&C.call(e.childNodes),h=(d=t.props||T).dangerouslySetInnerHTML,o=f.dangerouslySetInnerHTML,!a){if(n!=null)for(d={},s=0;s<e.attributes.length;s++)d[e.attributes[s].name]=e.attributes[s].value;(o||h)&&(o&&(h&&o.__html==h.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(ke(e,f,d,l,a),o)_.__k=[];else if(s=_.props.children,X(e,Array.isArray(s)?s:[s],_,t,r,l&&u!=="foreignObject",n,i,n?n[0]:t.__k&&$(t,0),a),n!=null)for(s=n.length;s--;)n[s]!=null&&K(n[s]);a||("value"in f&&(s=f.value)!==void 0&&(s!==d.value||s!==e.value||u==="progress"&&!s)&&D(e,"value",s,d.value,!1),"checked"in f&&(s=f.checked)!==void 0&&s!==e.checked&&D(e,"checked",s,d.checked,!1))}return e}function oe(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(r){c.__e(r,t)}}function le(e,_,t){var r,l;if(c.unmount&&c.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||oe(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){c.__e(n,_)}r.base=r.__P=null}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&le(r[l],_,typeof e.type!="function");t||e.__e==null||K(e.__e),e.__e=e.__d=void 0}function $e(e,_,t){return this.constructor(e,t)}function ie(e,_,t){var r,l,n;c.__&&c.__(e,_),l=(r=typeof t=="function")?null:t&&t.__k||_.__k,n=[],j(_,e=(!r&&t||_).__k=M(S,null,[e]),l||T,T,_.ownerSVGElement!==void 0,!r&&t?[t]:l?null:_.firstChild?C.call(_.childNodes):null,n,!r&&t?t:l?l.__e:_.firstChild,r),re(n,e)}function ue(e,_){ie(e,_,ue)}function Ce(e,_,t){var r,l,n,i=k({},e.props);for(n in _)n=="key"?r=_[n]:n=="ref"?l=_[n]:i[n]=_[n];return arguments.length>2&&(i.children=arguments.length>3?C.call(arguments,2):t),E(e.type,i,r||e.key,l||e.ref,null)}function Pe(e,_){var t={__c:_="__cC"+G++,__:e,Consumer:function(r,l){return r.children(l)},Provider:function(r){var l,n;return this.getChildContext||(l=[],(n={})[_]=this,this.getChildContext=function(){return n},this.shouldComponentUpdate=function(i){this.props.value!==i.value&&l.some(N)},this.sub=function(i){l.push(i);var a=i.componentWillUnmount;i.componentWillUnmount=function(){l.splice(l.indexOf(i),1),a&&a.call(i)}}),r.children}};return t.Provider.__=t.Consumer.contextType=t}C=J.slice,c={__e:function(e,_){for(var t,r,l;_=_.__;)if((t=_.__c)&&!t.__)try{if((r=t.constructor)&&r.getDerivedStateFromError!=null&&(t.setState(r.getDerivedStateFromError(e)),l=t.__d),t.componentDidCatch!=null&&(t.componentDidCatch(e),l=t.__d),l)return t.__E=t}catch(n){e=n}throw e}},R=0,B=function(e){return e!=null&&e.constructor===void 0},A.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},t),this.props)),e&&k(t,e),e!=null&&this.__v&&(_&&this.__h.push(_),N(this))},A.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),N(this))},A.prototype.render=S,P=[],z=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F.__r=0,G=0;var Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",render:ie,hydrate:ue,createElement:M,h:M,Fragment:S,createRef:be,get isValidElement(){return B},Component:A,cloneElement:Ce,createContext:Pe,toChildArray:Z,get options(){return c}}),O,m,ce,L=0,W=[],fe=c.__b,se=c.__r,ae=c.diffed,pe=c.__c,he=c.unmount;function de(e,_){c.__h&&c.__h(m,e,L||_),L=0;var t=m.__H||(m.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function Ne(e){return L=1,Se(ye,e)}function Se(e,_,t){var r=de(O++,2);return r.t=e,r.__c||(r.__=[t?t(_):ye(void 0,_),function(l){var n=r.t(r.__[0],l);r.__[0]!==n&&(r.__=[n,r.__[1]],r.__c.setState({}))}],r.__c=m),r.__}function je(e,_){var t=de(O++,3);!c.__s&&He(t.__H,_)&&(t.__=e,t.__H=_,m.__H.__h.push(t))}function Ae(){var e;for(W.sort(function(_,t){return _.__v.__b-t.__v.__b});e=W.pop();)if(e.__P)try{e.__H.__h.forEach(U),e.__H.__h.forEach(q),e.__H.__h=[]}catch(_){e.__H.__h=[],c.__e(_,e.__v)}}c.__b=function(e){m=null,fe&&fe(e)},c.__r=function(e){se&&se(e),O=0;var _=(m=e.__c).__H;_&&(_.__h.forEach(U),_.__h.forEach(q),_.__h=[])},c.diffed=function(e){ae&&ae(e);var _=e.__c;_&&_.__H&&_.__H.__h.length&&(W.push(_)!==1&&ce===c.requestAnimationFrame||((ce=c.requestAnimationFrame)||function(t){var r,l=function(){clearTimeout(n),ve&&cancelAnimationFrame(r),setTimeout(t)},n=setTimeout(l,100);ve&&(r=requestAnimationFrame(l))})(Ae)),m=null},c.__c=function(e,_){_.some(function(t){try{t.__h.forEach(U),t.__h=t.__h.filter(function(r){return!r.__||q(r)})}catch(r){_.some(function(l){l.__h&&(l.__h=[])}),_=[],c.__e(r,t.__v)}}),pe&&pe(e,_)},c.unmount=function(e){he&&he(e);var _,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(r){try{U(r)}catch(l){_=l}}),_&&c.__e(_,t.__v))};var ve=typeof requestAnimationFrame=="function";function U(e){var _=m,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),m=_}function q(e){var _=m;e.__c=e.__(),m=_}function He(e,_){return!e||e.length!==_.length||_.some(function(t,r){return t!==e[r]})}function ye(e,_){return typeof _=="function"?_(e):_}function we(e){if(e.__esModule)return e;var _=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(_,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})}),_}var Te=we(Ee),Fe,De,Ue,I=Te,Me=0;function me(e,_,t,r,l){var n,i,a={};for(i in _)i=="ref"?n=_[i]:a[i]=_[i];var p={type:e,props:a,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Me,__source:r,__self:l};if(typeof e=="function"&&(n=e.defaultProps))for(i in n)a[i]===void 0&&(a[i]=n[i]);return I.options.vnode&&I.options.vnode(p),p}Ue=I.Fragment,De=me,Fe=me;export{Ue as F,ie as S,Fe as a,De as j,Ne as l,je as y};
