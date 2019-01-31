/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csstransforms-csstransforms3d-csstransitions-preserve3d-domprefixes-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e){var t=S.className,n=Modernizr._config.classPrefix||"";if(E&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?S.className.baseVal=t:S.className=t)}function o(e,t){return typeof e===t}function s(){var e,t,n,r,s,a,i;for(var l in b)if(b.hasOwnProperty(l)){if(e=[],t=b[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)a=e[s],i=a.split("."),1===i.length?Modernizr[i[0]]=r:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=r),C.push((r?"":"no-")+i.join("-"))}}function a(e,t){return!!~(""+e).indexOf(t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(){var e=t.body;return e||(e=i(E?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var s,a,l,c,f="modernizr",d=i("div"),p=u();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return s=i("style"),s.type="text/css",s.id="s"+f,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=c,S.offsetHeight):d.parentNode.removeChild(d),!!a}function f(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,n){var r;for(var s in e)if(e[s]in t)return n===!1?e[s]:(r=t[e[s]],o(r,"function")?f(r,n||t):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var a=s.error?"error":"log";s[a].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function h(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(t[o])+":"+r+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function g(e,t,r,s){function u(){f&&(delete j.style,delete j.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var c=h(e,r);if(!o(c,"undefined"))return c}for(var f,d,p,m,g,v=["modernizr","tspan","samp"];!j.style&&v.length;)f=!0,j.modElem=i(v.shift()),j.style=j.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],g=j.style[m],a(m,"-")&&(m=l(m)),j.style[m]!==n){if(s||o(r,"undefined"))return u(),"pfx"==t?m:!0;try{j.style[m]=r}catch(y){}if(j.style[m]!=g)return u(),"pfx"==t?m:!0}return u(),!1}function v(e,t,n,r,s){var a=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+z.join(a+" ")+a).split(" ");return o(t,"string")||o(t,"undefined")?g(i,t,r,s):(i=(e+" "+k.join(a+" ")+a).split(" "),d(i,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var C=[],S=t.documentElement,E="svg"===S.nodeName.toLowerCase();E||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,u(t)}function s(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function a(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=s(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function i(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||s(e);for(var o=n.frag.cloneNode(),a=0,i=r(),l=i.length;l>a;a++)o.createElement(i[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function u(e){e||(e=t);var r=s(e);return!C.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var c,f,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,f=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:i,addElements:o};e.html5=C,u(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var b=[],x={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},w=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=w;var Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var _="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;Modernizr.addTest("supports",_||T);var N="Moz O ms Webkit",k=x._config.usePrefixes?N.toLowerCase().split(" "):[];x._domPrefixes=k;var z=x._config.usePrefixes?N.split(" "):[];x._cssomPrefixes=z;var P=(x.testStyles=c,{elem:i("modernizr")});Modernizr._q.push(function(){delete P.elem});var j={style:P.elem.style};Modernizr._q.unshift(function(){delete j.style});x.testProp=function(e,t,r){return g([e],n,t,r)};x.testAllProps=v,x.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){return!!y("perspective","1px",!0)}),Modernizr.addTest("csstransitions",y("transition","all",!0)),Modernizr.addTest("preserve3d",function(){var t,n,r=e.CSS,o=!1;return r&&r.supports&&r.supports("(transform-style: preserve-3d)")?!0:(t=i("a"),n=i("a"),t.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",t.appendChild(n),S.appendChild(t),o=n.getBoundingClientRect(),S.removeChild(t),o=o.width&&o.width<4)}),s(),r(C),delete x.addTest,delete x.addAsyncTest;for(var F=0;F<Modernizr._q.length;F++)Modernizr._q[F]();e.Modernizr=Modernizr}(window,document);