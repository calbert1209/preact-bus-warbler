var C,s,V,G,E,Z,J,K,L={},Q=[],Re=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function b(e,t){for(var n in t)e[n]=t[n];return e}function X(e){var t=e.parentNode;t&&t.removeChild(e)}function P(e,t,n){var _,c,r,l={};for(r in t)r=="key"?_=t[r]:r=="ref"?c=t[r]:l[r]=t[r];if(arguments.length>2&&(l.children=arguments.length>3?C.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)l[r]===void 0&&(l[r]=e.defaultProps[r]);return S(e,l,_,c,null)}function S(e,t,n,_,c){var r={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:c==null?++V:c};return c==null&&s.vnode!=null&&s.vnode(r),r}function Fe(){return{current:null}}function H(e){return e.children}function w(e,t){this.props=e,this.context=t}function $(e,t){if(t==null)return e.__?$(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?$(e):null}function Y(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Y(e)}}function O(e){(!e.__d&&(e.__d=!0)&&E.push(e)&&!M.__r++||J!==s.debounceRendering)&&((J=s.debounceRendering)||Z)(M)}function M(){for(var e;M.__r=E.length;)e=E.sort(function(t,n){return t.__v.__b-n.__v.__b}),E=[],e.some(function(t){var n,_,c,r,l,i;t.__d&&(l=(r=(n=t).__v).__e,(i=n.__P)&&(_=[],(c=b({},r)).__v=r.__v+1,j(i,r,c,n.__n,i.ownerSVGElement!==void 0,r.__h!=null?[l]:null,_,l==null?$(r):l,r.__h),le(_,r),r.__e!=l&&Y(r)))})}function ee(e,t,n,_,c,r,l,i,a,h){var o,d,f,u,p,x,v,m=_&&_.__k||Q,g=m.length;for(n.__k=[],o=0;o<t.length;o++)if((u=n.__k[o]=(u=t[o])==null||typeof u=="boolean"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?S(null,u,null,null,u):Array.isArray(u)?S(H,{children:u},null,null,null):u.__b>0?S(u.type,u.props,u.key,null,u.__v):u)!=null){if(u.__=n,u.__b=n.__b+1,(f=m[o])===null||f&&u.key==f.key&&u.type===f.type)m[o]=void 0;else for(d=0;d<g;d++){if((f=m[d])&&u.key==f.key&&u.type===f.type){m[d]=void 0;break}f=null}j(e,u,f=f||L,c,r,l,i,a,h),p=u.__e,(d=u.ref)&&f.ref!=d&&(v||(v=[]),f.ref&&v.push(f.ref,null,u),v.push(d,u.__c||p,u)),p!=null?(x==null&&(x=p),typeof u.type=="function"&&u.__k===f.__k?u.__d=a=te(u,a,e):a=_e(e,u,f,m,p,a),typeof n.type=="function"&&(n.__d=a)):a&&f.__e==a&&a.parentNode!=e&&(a=$(f))}for(n.__e=x,o=g;o--;)m[o]!=null&&(typeof n.type=="function"&&m[o].__e!=null&&m[o].__e==n.__d&&(n.__d=$(_,o+1)),ie(m[o],m[o]));if(v)for(o=0;o<v.length;o++)ue(v[o],v[++o],v[++o])}function te(e,t,n){for(var _,c=e.__k,r=0;c&&r<c.length;r++)(_=c[r])&&(_.__=e,t=typeof _.type=="function"?te(_,t,n):_e(n,_,_,c,_.__e,t));return t}function ne(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){ne(n,t)}):t.push(e)),t}function _e(e,t,n,_,c,r){var l,i,a;if(t.__d!==void 0)l=t.__d,t.__d=void 0;else if(n==null||c!=r||c.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(c),l=null;else{for(i=r,a=0;(i=i.nextSibling)&&a<_.length;a+=2)if(i==c)break e;e.insertBefore(c,r),l=r}return l!==void 0?l:c.nextSibling}function Te(e,t,n,_,c){var r;for(r in n)r==="children"||r==="key"||r in t||U(e,r,null,n[r],_);for(r in t)c&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||U(e,r,t[r],n[r],_)}function re(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||Re.test(t)?n:n+"px"}function U(e,t,n,_,c){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||re(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||re(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?_||e.addEventListener(t,r?ce:oe,r):e.removeEventListener(t,r?ce:oe,r);else if(t!=="dangerouslySetInnerHTML"){if(c)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function oe(e){this.l[e.type+!1](s.event?s.event(e):e)}function ce(e){this.l[e.type+!0](s.event?s.event(e):e)}function j(e,t,n,_,c,r,l,i,a){var h,o,d,f,u,p,x,v,m,g,F,k=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(a=n.__h,i=t.__e=n.__e,t.__h=null,r=[i]),(h=s.__b)&&h(t);try{e:if(typeof k=="function"){if(v=t.props,m=(h=k.contextType)&&_[h.__c],g=h?m?m.props.value:h.__:_,n.__c?x=(o=t.__c=n.__c).__=o.__E:("prototype"in k&&k.prototype.render?t.__c=o=new k(v,g):(t.__c=o=new w(v,g),o.constructor=k,o.render=Me),m&&m.sub(o),o.props=v,o.state||(o.state={}),o.context=g,o.__n=_,d=o.__d=!0,o.__h=[]),o.__s==null&&(o.__s=o.state),k.getDerivedStateFromProps!=null&&(o.__s==o.state&&(o.__s=b({},o.__s)),b(o.__s,k.getDerivedStateFromProps(v,o.__s))),f=o.props,u=o.state,d)k.getDerivedStateFromProps==null&&o.componentWillMount!=null&&o.componentWillMount(),o.componentDidMount!=null&&o.__h.push(o.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==f&&o.componentWillReceiveProps!=null&&o.componentWillReceiveProps(v,g),!o.__e&&o.shouldComponentUpdate!=null&&o.shouldComponentUpdate(v,o.__s,g)===!1||t.__v===n.__v){o.props=v,o.state=o.__s,t.__v!==n.__v&&(o.__d=!1),o.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(T){T&&(T.__=t)}),o.__h.length&&l.push(o);break e}o.componentWillUpdate!=null&&o.componentWillUpdate(v,o.__s,g),o.componentDidUpdate!=null&&o.__h.push(function(){o.componentDidUpdate(f,u,p)})}o.context=g,o.props=v,o.state=o.__s,(h=s.__r)&&h(t),o.__d=!1,o.__v=t,o.__P=e,h=o.render(o.props,o.state,o.context),o.state=o.__s,o.getChildContext!=null&&(_=b(b({},_),o.getChildContext())),d||o.getSnapshotBeforeUpdate==null||(p=o.getSnapshotBeforeUpdate(f,u)),F=h!=null&&h.type===H&&h.key==null?h.props.children:h,ee(e,Array.isArray(F)?F:[F],t,n,_,c,r,l,i,a),o.base=t.__e,t.__h=null,o.__h.length&&l.push(o),x&&(o.__E=o.__=null),o.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Le(n.__e,t,n,_,c,r,l,a);(h=s.diffed)&&h(t)}catch(T){t.__v=null,(a||r!=null)&&(t.__e=i,t.__h=!!a,r[r.indexOf(i)]=null),s.__e(T,t,n)}}function le(e,t){s.__c&&s.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(_){_.call(n)})}catch(_){s.__e(_,n.__v)}})}function Le(e,t,n,_,c,r,l,i){var a,h,o,d=n.props,f=t.props,u=t.type,p=0;if(u==="svg"&&(c=!0),r!=null){for(;p<r.length;p++)if((a=r[p])&&"setAttribute"in a==!!u&&(u?a.localName===u:a.nodeType===3)){e=a,r[p]=null;break}}if(e==null){if(u===null)return document.createTextNode(f);e=c?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,f.is&&f),r=null,i=!1}if(u===null)d===f||i&&e.data===f||(e.data=f);else{if(r=r&&C.call(e.childNodes),h=(d=n.props||L).dangerouslySetInnerHTML,o=f.dangerouslySetInnerHTML,!i){if(r!=null)for(d={},p=0;p<e.attributes.length;p++)d[e.attributes[p].name]=e.attributes[p].value;(o||h)&&(o&&(h&&o.__html==h.__html||o.__html===e.innerHTML)||(e.innerHTML=o&&o.__html||""))}if(Te(e,f,d,c,i),o)t.__k=[];else if(p=t.props.children,ee(e,Array.isArray(p)?p:[p],t,n,_,c&&u!=="foreignObject",r,l,r?r[0]:n.__k&&$(n,0),i),r!=null)for(p=r.length;p--;)r[p]!=null&&X(r[p]);i||("value"in f&&(p=f.value)!==void 0&&(p!==d.value||p!==e.value||u==="progress"&&!p)&&U(e,"value",p,d.value,!1),"checked"in f&&(p=f.checked)!==void 0&&p!==e.checked&&U(e,"checked",p,d.checked,!1))}return e}function ue(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(_){s.__e(_,n)}}function ie(e,t,n){var _,c;if(s.unmount&&s.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||ue(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(r){s.__e(r,t)}_.base=_.__P=null}if(_=e.__k)for(c=0;c<_.length;c++)_[c]&&ie(_[c],t,typeof e.type!="function");n||e.__e==null||X(e.__e),e.__e=e.__d=void 0}function Me(e,t,n){return this.constructor(e,n)}function se(e,t,n){var _,c,r;s.__&&s.__(e,t),c=(_=typeof n=="function")?null:n&&n.__k||t.__k,r=[],j(t,e=(!_&&n||t).__k=P(H,null,[e]),c||L,L,t.ownerSVGElement!==void 0,!_&&n?[n]:c?null:t.firstChild?C.call(t.childNodes):null,r,!_&&n?n:c?c.__e:t.firstChild,_),le(r,e)}function ae(e,t){se(e,t,ae)}function Ue(e,t,n){var _,c,r,l=b({},e.props);for(r in t)r=="key"?_=t[r]:r=="ref"?c=t[r]:l[r]=t[r];return arguments.length>2&&(l.children=arguments.length>3?C.call(arguments,2):n),S(e.type,l,_||e.key,c||e.ref,null)}function fe(e,t){var n={__c:t="__cC"+K++,__:e,Consumer:function(_,c){return _.children(c)},Provider:function(_){var c,r;return this.getChildContext||(c=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&c.some(O)},this.sub=function(l){c.push(l);var i=l.componentWillUnmount;l.componentWillUnmount=function(){c.splice(c.indexOf(l),1),i&&i.call(l)}}),_.children}};return n.Provider.__=n.Consumer.contextType=n}C=Q.slice,s={__e:function(e,t){for(var n,_,c;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&_.getDerivedStateFromError!=null&&(n.setState(_.getDerivedStateFromError(e)),c=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(e),c=n.__d),c)return n.__E=n}catch(r){e=r}throw e}},V=0,G=function(e){return e!=null&&e.constructor===void 0},w.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=b({},this.state),typeof e=="function"&&(e=e(b({},n),this.props)),e&&b(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),O(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),O(this))},w.prototype.render=H,E=[],Z=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,M.__r=0,K=0;var De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",render:se,hydrate:ae,createElement:P,h:P,Fragment:H,createRef:Fe,get isValidElement(){return G},Component:w,cloneElement:Ue,createContext:fe,toChildArray:ne,get options(){return s}}),A,y,pe,R=0,W=[],he=s.__b,de=s.__r,ve=s.diffed,me=s.__c,ye=s.unmount;function D(e,t){s.__h&&s.__h(y,e,R||t),R=0;var n=y.__H||(y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Ne(e){return R=1,Oe($e,e)}function Oe(e,t,n){var _=D(A++,2);return _.t=e,_.__c||(_.__=[n?n(t):$e(void 0,t),function(c){var r=_.t(_.__[0],c);_.__[0]!==r&&(_.__=[r,_.__[1]],_.__c.setState({}))}],_.__c=y),_.__}function je(e,t){var n=D(A++,3);!s.__s&&xe(n.__H,t)&&(n.__=e,n.__H=t,y.__H.__h.push(n))}function ge(e){return R=5,ke(function(){return{current:e}},[])}function ke(e,t){var n=D(A++,7);return xe(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function We(e,t){return R=8,ke(function(){return e},t)}function Ie(e){var t=y.context[e.__c],n=D(A++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(y)),t.props.value):e.__}function qe(){var e;for(W.sort(function(t,n){return t.__v.__b-n.__v.__b});e=W.pop();)if(e.__P)try{e.__H.__h.forEach(N),e.__H.__h.forEach(I),e.__H.__h=[]}catch(t){e.__H.__h=[],s.__e(t,e.__v)}}s.__b=function(e){y=null,he&&he(e)},s.__r=function(e){de&&de(e),A=0;var t=(y=e.__c).__H;t&&(t.__h.forEach(N),t.__h.forEach(I),t.__h=[])},s.diffed=function(e){ve&&ve(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(W.push(t)!==1&&pe===s.requestAnimationFrame||((pe=s.requestAnimationFrame)||function(n){var _,c=function(){clearTimeout(r),be&&cancelAnimationFrame(_),setTimeout(n)},r=setTimeout(c,100);be&&(_=requestAnimationFrame(c))})(qe)),y=null},s.__c=function(e,t){t.some(function(n){try{n.__h.forEach(N),n.__h=n.__h.filter(function(_){return!_.__||I(_)})}catch(_){t.some(function(c){c.__h&&(c.__h=[])}),t=[],s.__e(_,n.__v)}}),me&&me(e,t)},s.unmount=function(e){ye&&ye(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{N(_)}catch(c){t=c}}),t&&s.__e(t,n.__v))};var be=typeof requestAnimationFrame=="function";function N(e){var t=y,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),y=t}function I(e){var t=y;e.__c=e.__(),y=t}function xe(e,t){return!e||e.length!==t.length||t.some(function(n,_){return n!==e[_]})}function $e(e,t){return typeof t=="function"?t(e):t}const ze="popstate",q="pushState",z="replaceState",Ce=[ze,q,z];var Be=({base:e=""}={})=>{const[{path:t,search:n},_]=Ne(()=>({path:Ee(e),search:location.search})),c=ge(t+n);je(()=>{const l=()=>{const i=Ee(e),a=location.search,h=i+a;c.current!==h&&(c.current=h,_({path:i,search:a}))};return Ce.forEach(i=>addEventListener(i,l)),l(),()=>Ce.forEach(i=>removeEventListener(i,l))},[e]);const r=We((l,{replace:i=!1}={})=>history[i?z:q](null,"",l[0]==="~"?l.slice(1):e+l),[e]);return[t,r]};if(typeof history!="undefined")for(const e of[q,z]){const t=history[e];history[e]=function(){const n=t.apply(this,arguments),_=new Event(e);return _.arguments=arguments,dispatchEvent(_),n}}const Ee=(e,t=location.pathname)=>t.toLowerCase().indexOf(e.toLowerCase())?"~"+t:t.slice(e.length)||"/";function Ve(e=Ze){let t={};const n=_=>t[_]||(t[_]=e(_));return(_,c)=>{const{regexp:r,keys:l}=n(_||""),i=r.exec(c);if(!i)return[!1,null];const a=l.reduce((h,o,d)=>(h[o.name]=i[d+1],h),{});return[!0,a]}}const Pe=e=>e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),Ge=(e,t,n)=>{let _=e?"((?:[^\\/]+?)(?:\\/(?:[^\\/]+?))*)":"([^\\/]+?)";return t&&n&&(_="(?:\\/"+_+")"),_+(t?"?":"")},Ze=e=>{const t=/:([A-Za-z0-9_]+)([?+*]?)/g;let n=null,_=0,c=[],r="";for(;(n=t.exec(e))!==null;){const[l,i,a]=n,h=a==="+"||a==="*",o=a==="?"||a==="*",d=o&&e[n.index-1]==="/"?1:0,f=e.substring(_,n.index-d);c.push({name:i}),_=t.lastIndex,r+=Pe(f)+Ge(h,o,d)}return r+=Pe(e.substring(_)),{keys:c,regexp:new RegExp("^"+r+"(?:\\/)?$","i")}},Se=fe({}),He=({hook:e=Be,base:t="",matcher:n=Ve()}={})=>({hook:e,base:t,matcher:n}),we=()=>{const e=Ie(Se);return e.v||(e.v=He())},Je=()=>{const e=we();return e.hook(e)},Ke=e=>{const[t]=Je();return we().matcher(e,t)},_t=e=>{const t=ge(),n=t.current||(t.current={v:He(e)});return P(Se.Provider,{value:n,children:e.children})},rt=({path:e,match:t,component:n,children:_})=>{const c=Ke(e),[r,l]=t||c;return r?n?P(n,{params:l}):typeof _=="function"?_(l):_:null};function Qe(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var _=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,_.get?_:{enumerable:!0,get:function(){return e[n]}})}),t}var Xe=Qe(De),Ye,et,tt,B=Xe,nt=0;function Ae(e,t,n,_,c){var r,l,i={};for(l in t)l=="ref"?r=t[l]:i[l]=t[l];var a={type:e,props:i,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--nt,__source:_,__self:c};if(typeof e=="function"&&(r=e.defaultProps))for(l in r)i[l]===void 0&&(i[l]=r[l]);return B.options.vnode&&B.options.vnode(a),a}tt=B.Fragment,et=Ae,Ye=Ae;export{fe as D,tt as F,_t as R,se as S,Ye as a,Ie as b,rt as c,ke as d,et as j,Ne as l,Je as u,je as y};
