var Eu=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var kg=Eu((Ja,cr)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */(function(i,e){typeof cr=="object"&&typeof cr.exports=="object"?cr.exports=i.document?e(i,!0):function(t){if(!t.document)throw new Error("jQuery requires a window with a document");return e(t)}:e(i)})(typeof window<"u"?window:void 0,function(i,e){var t=[],n=Object.getPrototypeOf,r=t.slice,o=t.flat?function(s){return t.flat.call(s)}:function(s){return t.concat.apply([],s)},a=t.push,c=t.indexOf,h={},g=h.toString,m=h.hasOwnProperty,x=m.toString,y=x.call(Object),S={},M=function(s){return typeof s=="function"&&typeof s.nodeType!="number"},P=function(s){return s!=null&&s===s.window},v=i.document,_={type:!0,src:!0,nonce:!0,noModule:!0};function q(s,l,d){var p,b,A=(d=d||v).createElement("script");if(A.text=s,l)for(p in _)(b=l[p]||l.getAttribute&&l.getAttribute(p))&&A.setAttribute(p,b);d.head.appendChild(A).parentNode.removeChild(A)}function k(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?h[g.call(s)]||"object":typeof s}var F="3.5.1",u=function(s,l){return new u.fn.init(s,l)};function K(s){var l=!!s&&"length"in s&&s.length,d=k(s);return!M(s)&&!P(s)&&(d==="array"||l===0||typeof l=="number"&&0<l&&l-1 in s)}u.fn=u.prototype={jquery:F,constructor:u,length:0,toArray:function(){return r.call(this)},get:function(s){return s==null?r.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var l=u.merge(this.constructor(),s);return l.prevObject=this,l},each:function(s){return u.each(this,s)},map:function(s){return this.pushStack(u.map(this,function(l,d){return s.call(l,d,l)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(u.grep(this,function(s,l){return(l+1)%2}))},odd:function(){return this.pushStack(u.grep(this,function(s,l){return l%2}))},eq:function(s){var l=this.length,d=+s+(s<0?l:0);return this.pushStack(0<=d&&d<l?[this[d]]:[])},end:function(){return this.prevObject||this.constructor()},push:a,sort:t.sort,splice:t.splice},u.extend=u.fn.extend=function(){var s,l,d,p,b,A,C=arguments[0]||{},V=1,X=arguments.length,ee=!1;for(typeof C=="boolean"&&(ee=C,C=arguments[V]||{},V++),typeof C=="object"||M(C)||(C={}),V===X&&(C=this,V--);V<X;V++)if((s=arguments[V])!=null)for(l in s)p=s[l],l!=="__proto__"&&C!==p&&(ee&&p&&(u.isPlainObject(p)||(b=Array.isArray(p)))?(d=C[l],A=b&&!Array.isArray(d)?[]:b||u.isPlainObject(d)?d:{},b=!1,C[l]=u.extend(ee,A,p)):p!==void 0&&(C[l]=p));return C},u.extend({expando:"jQuery"+(F+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var l,d;return!(!s||g.call(s)!=="[object Object]")&&(!(l=n(s))||typeof(d=m.call(l,"constructor")&&l.constructor)=="function"&&x.call(d)===y)},isEmptyObject:function(s){var l;for(l in s)return!1;return!0},globalEval:function(s,l,d){q(s,{nonce:l&&l.nonce},d)},each:function(s,l){var d,p=0;if(K(s))for(d=s.length;p<d&&l.call(s[p],p,s[p])!==!1;p++);else for(p in s)if(l.call(s[p],p,s[p])===!1)break;return s},makeArray:function(s,l){var d=l||[];return s!=null&&(K(Object(s))?u.merge(d,typeof s=="string"?[s]:s):a.call(d,s)),d},inArray:function(s,l,d){return l==null?-1:c.call(l,s,d)},merge:function(s,l){for(var d=+l.length,p=0,b=s.length;p<d;p++)s[b++]=l[p];return s.length=b,s},grep:function(s,l,d){for(var p=[],b=0,A=s.length,C=!d;b<A;b++)!l(s[b],b)!==C&&p.push(s[b]);return p},map:function(s,l,d){var p,b,A=0,C=[];if(K(s))for(p=s.length;A<p;A++)(b=l(s[A],A,d))!=null&&C.push(b);else for(A in s)(b=l(s[A],A,d))!=null&&C.push(b);return o(C)},guid:1,support:S}),typeof Symbol=="function"&&(u.fn[Symbol.iterator]=t[Symbol.iterator]),u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,l){h["[object "+l+"]"]=l.toLowerCase()});var W=function(s){var l,d,p,b,A,C,V,X,ee,ce,Se,ae,ue,Ke,ut,nt,en,hn,Hn,qt="sizzle"+1*new Date,St=s.document,Fn=0,zt=0,tn=ps(),jr=ps(),ds=ps(),Vn=ps(),Yi=function(R,H){return R===H&&(Se=!0),0},pr={}.hasOwnProperty,On=[],mr=On.pop,Yn=On.push,nn=On.push,Gn=On.slice,Wn=function(R,H){for(var Q=0,_e=R.length;Q<_e;Q++)if(R[Q]===H)return Q;return-1},ui="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",bt="[\\x20\\t\\r\\n\\f]",Gt="(?:\\\\[\\da-fA-F]{1,6}"+bt+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",pn="\\["+bt+"*("+Gt+")(?:"+bt+"*([*^$|!~]?=)"+bt+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Gt+"))|)"+bt+"*\\]",Xn=":("+Gt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+pn+")*)|.*)\\)|)",ln=new RegExp(bt+"+","g"),qn=new RegExp("^"+bt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+bt+"+$","g"),gr=new RegExp("^"+bt+"*,"+bt+"*"),fs=new RegExp("^"+bt+"*([>+~]|"+bt+")"+bt+"*"),fu=new RegExp(bt+"|>"),hu=new RegExp(Xn),pu=new RegExp("^"+Gt+"$"),hs={ID:new RegExp("^#("+Gt+")"),CLASS:new RegExp("^\\.("+Gt+")"),TAG:new RegExp("^("+Gt+"|[*])"),ATTR:new RegExp("^"+pn),PSEUDO:new RegExp("^"+Xn),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+bt+"*(even|odd|(([+-]|)(\\d*)n|)"+bt+"*(?:([+-]|)"+bt+"*(\\d+)|))"+bt+"*\\)|)","i"),bool:new RegExp("^(?:"+ui+")$","i"),needsContext:new RegExp("^"+bt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+bt+"*((?:-\\d)?\\d*)"+bt+"*\\)|)(?=[^-]|$)","i")},mu=/HTML$/i,gu=/^(?:input|select|textarea|button)$/i,_u=/^h\d$/i,Yr=/^[^{]+\{\s*\[native \w/,vu=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,go=/[+~]/,xi=new RegExp("\\\\[\\da-fA-F]{1,6}"+bt+"?|\\\\([^\\r\\n\\f])","g"),yi=function(R,H){var Q="0x"+R.slice(1)-65536;return H||(Q<0?String.fromCharCode(Q+65536):String.fromCharCode(Q>>10|55296,1023&Q|56320))},sl=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ol=function(R,H){return H?R==="\0"?"�":R.slice(0,-1)+"\\"+R.charCodeAt(R.length-1).toString(16)+" ":"\\"+R},al=function(){ae()},xu=gs(function(R){return R.disabled===!0&&R.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{nn.apply(On=Gn.call(St.childNodes),St.childNodes),On[St.childNodes.length].nodeType}catch{nn={apply:On.length?function(H,Q){Yn.apply(H,Gn.call(Q))}:function(H,Q){for(var _e=H.length,ie=0;H[_e++]=Q[ie++];);H.length=_e-1}}}function Yt(R,H,Q,_e){var ie,we,Ce,Ne,qe,yt,mt,_t=H&&H.ownerDocument,It=H?H.nodeType:9;if(Q=Q||[],typeof R!="string"||!R||It!==1&&It!==9&&It!==11)return Q;if(!_e&&(ae(H),H=H||ue,ut)){if(It!==11&&(qe=vu.exec(R)))if(ie=qe[1]){if(It===9){if(!(Ce=H.getElementById(ie)))return Q;if(Ce.id===ie)return Q.push(Ce),Q}else if(_t&&(Ce=_t.getElementById(ie))&&Hn(H,Ce)&&Ce.id===ie)return Q.push(Ce),Q}else{if(qe[2])return nn.apply(Q,H.getElementsByTagName(R)),Q;if((ie=qe[3])&&d.getElementsByClassName&&H.getElementsByClassName)return nn.apply(Q,H.getElementsByClassName(ie)),Q}if(d.qsa&&!Vn[R+" "]&&(!nt||!nt.test(R))&&(It!==1||H.nodeName.toLowerCase()!=="object")){if(mt=R,_t=H,It===1&&(fu.test(R)||fs.test(R))){for((_t=go.test(R)&&vo(H.parentNode)||H)===H&&d.scope||((Ne=H.getAttribute("id"))?Ne=Ne.replace(sl,ol):H.setAttribute("id",Ne=qt)),we=(yt=C(R)).length;we--;)yt[we]=(Ne?"#"+Ne:":scope")+" "+ms(yt[we]);mt=yt.join(",")}try{return nn.apply(Q,_t.querySelectorAll(mt)),Q}catch{Vn(R,!0)}finally{Ne===qt&&H.removeAttribute("id")}}}return X(R.replace(qn,"$1"),H,Q,_e)}function ps(){var R=[];return function H(Q,_e){return R.push(Q+" ")>p.cacheLength&&delete H[R.shift()],H[Q+" "]=_e}}function ei(R){return R[qt]=!0,R}function ti(R){var H=ue.createElement("fieldset");try{return!!R(H)}catch{return!1}finally{H.parentNode&&H.parentNode.removeChild(H),H=null}}function _o(R,H){for(var Q=R.split("|"),_e=Q.length;_e--;)p.attrHandle[Q[_e]]=H}function ll(R,H){var Q=H&&R,_e=Q&&R.nodeType===1&&H.nodeType===1&&R.sourceIndex-H.sourceIndex;if(_e)return _e;if(Q){for(;Q=Q.nextSibling;)if(Q===H)return-1}return R?1:-1}function yu(R){return function(H){return H.nodeName.toLowerCase()==="input"&&H.type===R}}function Su(R){return function(H){var Q=H.nodeName.toLowerCase();return(Q==="input"||Q==="button")&&H.type===R}}function cl(R){return function(H){return"form"in H?H.parentNode&&H.disabled===!1?"label"in H?"label"in H.parentNode?H.parentNode.disabled===R:H.disabled===R:H.isDisabled===R||H.isDisabled!==!R&&xu(H)===R:H.disabled===R:"label"in H&&H.disabled===R}}function Ki(R){return ei(function(H){return H=+H,ei(function(Q,_e){for(var ie,we=R([],Q.length,H),Ce=we.length;Ce--;)Q[ie=we[Ce]]&&(Q[ie]=!(_e[ie]=Q[ie]))})})}function vo(R){return R&&typeof R.getElementsByTagName<"u"&&R}for(l in d=Yt.support={},A=Yt.isXML=function(R){var H=R.namespaceURI,Q=(R.ownerDocument||R).documentElement;return!mu.test(H||Q&&Q.nodeName||"HTML")},ae=Yt.setDocument=function(R){var H,Q,_e=R?R.ownerDocument||R:St;return _e!=ue&&_e.nodeType===9&&_e.documentElement&&(Ke=(ue=_e).documentElement,ut=!A(ue),St!=ue&&(Q=ue.defaultView)&&Q.top!==Q&&(Q.addEventListener?Q.addEventListener("unload",al,!1):Q.attachEvent&&Q.attachEvent("onunload",al)),d.scope=ti(function(ie){return Ke.appendChild(ie).appendChild(ue.createElement("div")),typeof ie.querySelectorAll<"u"&&!ie.querySelectorAll(":scope fieldset div").length}),d.attributes=ti(function(ie){return ie.className="i",!ie.getAttribute("className")}),d.getElementsByTagName=ti(function(ie){return ie.appendChild(ue.createComment("")),!ie.getElementsByTagName("*").length}),d.getElementsByClassName=Yr.test(ue.getElementsByClassName),d.getById=ti(function(ie){return Ke.appendChild(ie).id=qt,!ue.getElementsByName||!ue.getElementsByName(qt).length}),d.getById?(p.filter.ID=function(ie){var we=ie.replace(xi,yi);return function(Ce){return Ce.getAttribute("id")===we}},p.find.ID=function(ie,we){if(typeof we.getElementById<"u"&&ut){var Ce=we.getElementById(ie);return Ce?[Ce]:[]}}):(p.filter.ID=function(ie){var we=ie.replace(xi,yi);return function(Ce){var Ne=typeof Ce.getAttributeNode<"u"&&Ce.getAttributeNode("id");return Ne&&Ne.value===we}},p.find.ID=function(ie,we){if(typeof we.getElementById<"u"&&ut){var Ce,Ne,qe,yt=we.getElementById(ie);if(yt){if((Ce=yt.getAttributeNode("id"))&&Ce.value===ie)return[yt];for(qe=we.getElementsByName(ie),Ne=0;yt=qe[Ne++];)if((Ce=yt.getAttributeNode("id"))&&Ce.value===ie)return[yt]}return[]}}),p.find.TAG=d.getElementsByTagName?function(ie,we){return typeof we.getElementsByTagName<"u"?we.getElementsByTagName(ie):d.qsa?we.querySelectorAll(ie):void 0}:function(ie,we){var Ce,Ne=[],qe=0,yt=we.getElementsByTagName(ie);if(ie==="*"){for(;Ce=yt[qe++];)Ce.nodeType===1&&Ne.push(Ce);return Ne}return yt},p.find.CLASS=d.getElementsByClassName&&function(ie,we){if(typeof we.getElementsByClassName<"u"&&ut)return we.getElementsByClassName(ie)},en=[],nt=[],(d.qsa=Yr.test(ue.querySelectorAll))&&(ti(function(ie){var we;Ke.appendChild(ie).innerHTML="<a id='"+qt+"'></a><select id='"+qt+"-\r\\' msallowcapture=''><option selected=''></option></select>",ie.querySelectorAll("[msallowcapture^='']").length&&nt.push("[*^$]="+bt+`*(?:''|"")`),ie.querySelectorAll("[selected]").length||nt.push("\\["+bt+"*(?:value|"+ui+")"),ie.querySelectorAll("[id~="+qt+"-]").length||nt.push("~="),(we=ue.createElement("input")).setAttribute("name",""),ie.appendChild(we),ie.querySelectorAll("[name='']").length||nt.push("\\["+bt+"*name"+bt+"*="+bt+`*(?:''|"")`),ie.querySelectorAll(":checked").length||nt.push(":checked"),ie.querySelectorAll("a#"+qt+"+*").length||nt.push(".#.+[+~]"),ie.querySelectorAll("\\\f"),nt.push("[\\r\\n\\f]")}),ti(function(ie){ie.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var we=ue.createElement("input");we.setAttribute("type","hidden"),ie.appendChild(we).setAttribute("name","D"),ie.querySelectorAll("[name=d]").length&&nt.push("name"+bt+"*[*^$|!~]?="),ie.querySelectorAll(":enabled").length!==2&&nt.push(":enabled",":disabled"),Ke.appendChild(ie).disabled=!0,ie.querySelectorAll(":disabled").length!==2&&nt.push(":enabled",":disabled"),ie.querySelectorAll("*,:x"),nt.push(",.*:")})),(d.matchesSelector=Yr.test(hn=Ke.matches||Ke.webkitMatchesSelector||Ke.mozMatchesSelector||Ke.oMatchesSelector||Ke.msMatchesSelector))&&ti(function(ie){d.disconnectedMatch=hn.call(ie,"*"),hn.call(ie,"[s!='']:x"),en.push("!=",Xn)}),nt=nt.length&&new RegExp(nt.join("|")),en=en.length&&new RegExp(en.join("|")),H=Yr.test(Ke.compareDocumentPosition),Hn=H||Yr.test(Ke.contains)?function(ie,we){var Ce=ie.nodeType===9?ie.documentElement:ie,Ne=we&&we.parentNode;return ie===Ne||!(!Ne||Ne.nodeType!==1||!(Ce.contains?Ce.contains(Ne):ie.compareDocumentPosition&&16&ie.compareDocumentPosition(Ne)))}:function(ie,we){if(we){for(;we=we.parentNode;)if(we===ie)return!0}return!1},Yi=H?function(ie,we){if(ie===we)return Se=!0,0;var Ce=!ie.compareDocumentPosition-!we.compareDocumentPosition;return Ce||(1&(Ce=(ie.ownerDocument||ie)==(we.ownerDocument||we)?ie.compareDocumentPosition(we):1)||!d.sortDetached&&we.compareDocumentPosition(ie)===Ce?ie==ue||ie.ownerDocument==St&&Hn(St,ie)?-1:we==ue||we.ownerDocument==St&&Hn(St,we)?1:ce?Wn(ce,ie)-Wn(ce,we):0:4&Ce?-1:1)}:function(ie,we){if(ie===we)return Se=!0,0;var Ce,Ne=0,qe=ie.parentNode,yt=we.parentNode,mt=[ie],_t=[we];if(!qe||!yt)return ie==ue?-1:we==ue?1:qe?-1:yt?1:ce?Wn(ce,ie)-Wn(ce,we):0;if(qe===yt)return ll(ie,we);for(Ce=ie;Ce=Ce.parentNode;)mt.unshift(Ce);for(Ce=we;Ce=Ce.parentNode;)_t.unshift(Ce);for(;mt[Ne]===_t[Ne];)Ne++;return Ne?ll(mt[Ne],_t[Ne]):mt[Ne]==St?-1:_t[Ne]==St?1:0}),ue},Yt.matches=function(R,H){return Yt(R,null,null,H)},Yt.matchesSelector=function(R,H){if(ae(R),d.matchesSelector&&ut&&!Vn[H+" "]&&(!en||!en.test(H))&&(!nt||!nt.test(H)))try{var Q=hn.call(R,H);if(Q||d.disconnectedMatch||R.document&&R.document.nodeType!==11)return Q}catch{Vn(H,!0)}return 0<Yt(H,ue,null,[R]).length},Yt.contains=function(R,H){return(R.ownerDocument||R)!=ue&&ae(R),Hn(R,H)},Yt.attr=function(R,H){(R.ownerDocument||R)!=ue&&ae(R);var Q=p.attrHandle[H.toLowerCase()],_e=Q&&pr.call(p.attrHandle,H.toLowerCase())?Q(R,H,!ut):void 0;return _e!==void 0?_e:d.attributes||!ut?R.getAttribute(H):(_e=R.getAttributeNode(H))&&_e.specified?_e.value:null},Yt.escape=function(R){return(R+"").replace(sl,ol)},Yt.error=function(R){throw new Error("Syntax error, unrecognized expression: "+R)},Yt.uniqueSort=function(R){var H,Q=[],_e=0,ie=0;if(Se=!d.detectDuplicates,ce=!d.sortStable&&R.slice(0),R.sort(Yi),Se){for(;H=R[ie++];)H===R[ie]&&(_e=Q.push(ie));for(;_e--;)R.splice(Q[_e],1)}return ce=null,R},b=Yt.getText=function(R){var H,Q="",_e=0,ie=R.nodeType;if(ie){if(ie===1||ie===9||ie===11){if(typeof R.textContent=="string")return R.textContent;for(R=R.firstChild;R;R=R.nextSibling)Q+=b(R)}else if(ie===3||ie===4)return R.nodeValue}else for(;H=R[_e++];)Q+=b(H);return Q},(p=Yt.selectors={cacheLength:50,createPseudo:ei,match:hs,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(R){return R[1]=R[1].replace(xi,yi),R[3]=(R[3]||R[4]||R[5]||"").replace(xi,yi),R[2]==="~="&&(R[3]=" "+R[3]+" "),R.slice(0,4)},CHILD:function(R){return R[1]=R[1].toLowerCase(),R[1].slice(0,3)==="nth"?(R[3]||Yt.error(R[0]),R[4]=+(R[4]?R[5]+(R[6]||1):2*(R[3]==="even"||R[3]==="odd")),R[5]=+(R[7]+R[8]||R[3]==="odd")):R[3]&&Yt.error(R[0]),R},PSEUDO:function(R){var H,Q=!R[6]&&R[2];return hs.CHILD.test(R[0])?null:(R[3]?R[2]=R[4]||R[5]||"":Q&&hu.test(Q)&&(H=C(Q,!0))&&(H=Q.indexOf(")",Q.length-H)-Q.length)&&(R[0]=R[0].slice(0,H),R[2]=Q.slice(0,H)),R.slice(0,3))}},filter:{TAG:function(R){var H=R.replace(xi,yi).toLowerCase();return R==="*"?function(){return!0}:function(Q){return Q.nodeName&&Q.nodeName.toLowerCase()===H}},CLASS:function(R){var H=tn[R+" "];return H||(H=new RegExp("(^|"+bt+")"+R+"("+bt+"|$)"))&&tn(R,function(Q){return H.test(typeof Q.className=="string"&&Q.className||typeof Q.getAttribute<"u"&&Q.getAttribute("class")||"")})},ATTR:function(R,H,Q){return function(_e){var ie=Yt.attr(_e,R);return ie==null?H==="!=":!H||(ie+="",H==="="?ie===Q:H==="!="?ie!==Q:H==="^="?Q&&ie.indexOf(Q)===0:H==="*="?Q&&-1<ie.indexOf(Q):H==="$="?Q&&ie.slice(-Q.length)===Q:H==="~="?-1<(" "+ie.replace(ln," ")+" ").indexOf(Q):H==="|="&&(ie===Q||ie.slice(0,Q.length+1)===Q+"-"))}},CHILD:function(R,H,Q,_e,ie){var we=R.slice(0,3)!=="nth",Ce=R.slice(-4)!=="last",Ne=H==="of-type";return _e===1&&ie===0?function(qe){return!!qe.parentNode}:function(qe,yt,mt){var _t,It,rn,Mt,mn,En,Pn=we!==Ce?"nextSibling":"previousSibling",Kt=qe.parentNode,di=Ne&&qe.nodeName.toLowerCase(),An=!mt&&!Ne,cn=!1;if(Kt){if(we){for(;Pn;){for(Mt=qe;Mt=Mt[Pn];)if(Ne?Mt.nodeName.toLowerCase()===di:Mt.nodeType===1)return!1;En=Pn=R==="only"&&!En&&"nextSibling"}return!0}if(En=[Ce?Kt.firstChild:Kt.lastChild],Ce&&An){for(cn=(mn=(_t=(It=(rn=(Mt=Kt)[qt]||(Mt[qt]={}))[Mt.uniqueID]||(rn[Mt.uniqueID]={}))[R]||[])[0]===Fn&&_t[1])&&_t[2],Mt=mn&&Kt.childNodes[mn];Mt=++mn&&Mt&&Mt[Pn]||(cn=mn=0)||En.pop();)if(Mt.nodeType===1&&++cn&&Mt===qe){It[R]=[Fn,mn,cn];break}}else if(An&&(cn=mn=(_t=(It=(rn=(Mt=qe)[qt]||(Mt[qt]={}))[Mt.uniqueID]||(rn[Mt.uniqueID]={}))[R]||[])[0]===Fn&&_t[1]),cn===!1)for(;(Mt=++mn&&Mt&&Mt[Pn]||(cn=mn=0)||En.pop())&&!((Ne?Mt.nodeName.toLowerCase()===di:Mt.nodeType===1)&&++cn&&(An&&((It=(rn=Mt[qt]||(Mt[qt]={}))[Mt.uniqueID]||(rn[Mt.uniqueID]={}))[R]=[Fn,cn]),Mt===qe)););return(cn-=ie)===_e||cn%_e==0&&0<=cn/_e}}},PSEUDO:function(R,H){var Q,_e=p.pseudos[R]||p.setFilters[R.toLowerCase()]||Yt.error("unsupported pseudo: "+R);return _e[qt]?_e(H):1<_e.length?(Q=[R,R,"",H],p.setFilters.hasOwnProperty(R.toLowerCase())?ei(function(ie,we){for(var Ce,Ne=_e(ie,H),qe=Ne.length;qe--;)ie[Ce=Wn(ie,Ne[qe])]=!(we[Ce]=Ne[qe])}):function(ie){return _e(ie,0,Q)}):_e}},pseudos:{not:ei(function(R){var H=[],Q=[],_e=V(R.replace(qn,"$1"));return _e[qt]?ei(function(ie,we,Ce,Ne){for(var qe,yt=_e(ie,null,Ne,[]),mt=ie.length;mt--;)(qe=yt[mt])&&(ie[mt]=!(we[mt]=qe))}):function(ie,we,Ce){return H[0]=ie,_e(H,null,Ce,Q),H[0]=null,!Q.pop()}}),has:ei(function(R){return function(H){return 0<Yt(R,H).length}}),contains:ei(function(R){return R=R.replace(xi,yi),function(H){return-1<(H.textContent||b(H)).indexOf(R)}}),lang:ei(function(R){return pu.test(R||"")||Yt.error("unsupported lang: "+R),R=R.replace(xi,yi).toLowerCase(),function(H){var Q;do if(Q=ut?H.lang:H.getAttribute("xml:lang")||H.getAttribute("lang"))return(Q=Q.toLowerCase())===R||Q.indexOf(R+"-")===0;while((H=H.parentNode)&&H.nodeType===1);return!1}}),target:function(R){var H=s.location&&s.location.hash;return H&&H.slice(1)===R.id},root:function(R){return R===Ke},focus:function(R){return R===ue.activeElement&&(!ue.hasFocus||ue.hasFocus())&&!!(R.type||R.href||~R.tabIndex)},enabled:cl(!1),disabled:cl(!0),checked:function(R){var H=R.nodeName.toLowerCase();return H==="input"&&!!R.checked||H==="option"&&!!R.selected},selected:function(R){return R.parentNode&&R.parentNode.selectedIndex,R.selected===!0},empty:function(R){for(R=R.firstChild;R;R=R.nextSibling)if(R.nodeType<6)return!1;return!0},parent:function(R){return!p.pseudos.empty(R)},header:function(R){return _u.test(R.nodeName)},input:function(R){return gu.test(R.nodeName)},button:function(R){var H=R.nodeName.toLowerCase();return H==="input"&&R.type==="button"||H==="button"},text:function(R){var H;return R.nodeName.toLowerCase()==="input"&&R.type==="text"&&((H=R.getAttribute("type"))==null||H.toLowerCase()==="text")},first:Ki(function(){return[0]}),last:Ki(function(R,H){return[H-1]}),eq:Ki(function(R,H,Q){return[Q<0?Q+H:Q]}),even:Ki(function(R,H){for(var Q=0;Q<H;Q+=2)R.push(Q);return R}),odd:Ki(function(R,H){for(var Q=1;Q<H;Q+=2)R.push(Q);return R}),lt:Ki(function(R,H,Q){for(var _e=Q<0?Q+H:H<Q?H:Q;0<=--_e;)R.push(_e);return R}),gt:Ki(function(R,H,Q){for(var _e=Q<0?Q+H:Q;++_e<H;)R.push(_e);return R})}}).pseudos.nth=p.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})p.pseudos[l]=yu(l);for(l in{submit:!0,reset:!0})p.pseudos[l]=Su(l);function ul(){}function ms(R){for(var H=0,Q=R.length,_e="";H<Q;H++)_e+=R[H].value;return _e}function gs(R,H,Q){var _e=H.dir,ie=H.next,we=ie||_e,Ce=Q&&we==="parentNode",Ne=zt++;return H.first?function(qe,yt,mt){for(;qe=qe[_e];)if(qe.nodeType===1||Ce)return R(qe,yt,mt);return!1}:function(qe,yt,mt){var _t,It,rn,Mt=[Fn,Ne];if(mt){for(;qe=qe[_e];)if((qe.nodeType===1||Ce)&&R(qe,yt,mt))return!0}else for(;qe=qe[_e];)if(qe.nodeType===1||Ce)if(It=(rn=qe[qt]||(qe[qt]={}))[qe.uniqueID]||(rn[qe.uniqueID]={}),ie&&ie===qe.nodeName.toLowerCase())qe=qe[_e]||qe;else{if((_t=It[we])&&_t[0]===Fn&&_t[1]===Ne)return Mt[2]=_t[2];if((It[we]=Mt)[2]=R(qe,yt,mt))return!0}return!1}}function xo(R){return 1<R.length?function(H,Q,_e){for(var ie=R.length;ie--;)if(!R[ie](H,Q,_e))return!1;return!0}:R[0]}function _s(R,H,Q,_e,ie){for(var we,Ce=[],Ne=0,qe=R.length,yt=H!=null;Ne<qe;Ne++)(we=R[Ne])&&(Q&&!Q(we,_e,ie)||(Ce.push(we),yt&&H.push(Ne)));return Ce}function yo(R,H,Q,_e,ie,we){return _e&&!_e[qt]&&(_e=yo(_e)),ie&&!ie[qt]&&(ie=yo(ie,we)),ei(function(Ce,Ne,qe,yt){var mt,_t,It,rn=[],Mt=[],mn=Ne.length,En=Ce||function(di,An,cn){for(var ni=0,vs=An.length;ni<vs;ni++)Yt(di,An[ni],cn);return cn}(H||"*",qe.nodeType?[qe]:qe,[]),Pn=!R||!Ce&&H?En:_s(En,rn,R,qe,yt),Kt=Q?ie||(Ce?R:mn||_e)?[]:Ne:Pn;if(Q&&Q(Pn,Kt,qe,yt),_e)for(mt=_s(Kt,Mt),_e(mt,[],qe,yt),_t=mt.length;_t--;)(It=mt[_t])&&(Kt[Mt[_t]]=!(Pn[Mt[_t]]=It));if(Ce){if(ie||R){if(ie){for(mt=[],_t=Kt.length;_t--;)(It=Kt[_t])&&mt.push(Pn[_t]=It);ie(null,Kt=[],mt,yt)}for(_t=Kt.length;_t--;)(It=Kt[_t])&&-1<(mt=ie?Wn(Ce,It):rn[_t])&&(Ce[mt]=!(Ne[mt]=It))}}else Kt=_s(Kt===Ne?Kt.splice(mn,Kt.length):Kt),ie?ie(null,Ne,Kt,yt):nn.apply(Ne,Kt)})}function So(R){for(var H,Q,_e,ie=R.length,we=p.relative[R[0].type],Ce=we||p.relative[" "],Ne=we?1:0,qe=gs(function(_t){return _t===H},Ce,!0),yt=gs(function(_t){return-1<Wn(H,_t)},Ce,!0),mt=[function(_t,It,rn){var Mt=!we&&(rn||It!==ee)||((H=It).nodeType?qe(_t,It,rn):yt(_t,It,rn));return H=null,Mt}];Ne<ie;Ne++)if(Q=p.relative[R[Ne].type])mt=[gs(xo(mt),Q)];else{if((Q=p.filter[R[Ne].type].apply(null,R[Ne].matches))[qt]){for(_e=++Ne;_e<ie&&!p.relative[R[_e].type];_e++);return yo(1<Ne&&xo(mt),1<Ne&&ms(R.slice(0,Ne-1).concat({value:R[Ne-2].type===" "?"*":""})).replace(qn,"$1"),Q,Ne<_e&&So(R.slice(Ne,_e)),_e<ie&&So(R=R.slice(_e)),_e<ie&&ms(R))}mt.push(Q)}return xo(mt)}return ul.prototype=p.filters=p.pseudos,p.setFilters=new ul,C=Yt.tokenize=function(R,H){var Q,_e,ie,we,Ce,Ne,qe,yt=jr[R+" "];if(yt)return H?0:yt.slice(0);for(Ce=R,Ne=[],qe=p.preFilter;Ce;){for(we in Q&&!(_e=gr.exec(Ce))||(_e&&(Ce=Ce.slice(_e[0].length)||Ce),Ne.push(ie=[])),Q=!1,(_e=fs.exec(Ce))&&(Q=_e.shift(),ie.push({value:Q,type:_e[0].replace(qn," ")}),Ce=Ce.slice(Q.length)),p.filter)!(_e=hs[we].exec(Ce))||qe[we]&&!(_e=qe[we](_e))||(Q=_e.shift(),ie.push({value:Q,type:we,matches:_e}),Ce=Ce.slice(Q.length));if(!Q)break}return H?Ce.length:Ce?Yt.error(R):jr(R,Ne).slice(0)},V=Yt.compile=function(R,H){var Q,_e,ie,we,Ce,Ne,qe=[],yt=[],mt=ds[R+" "];if(!mt){for(H||(H=C(R)),Q=H.length;Q--;)(mt=So(H[Q]))[qt]?qe.push(mt):yt.push(mt);(mt=ds(R,(_e=yt,we=0<(ie=qe).length,Ce=0<_e.length,Ne=function(_t,It,rn,Mt,mn){var En,Pn,Kt,di=0,An="0",cn=_t&&[],ni=[],vs=ee,dl=_t||Ce&&p.find.TAG("*",mn),fl=Fn+=vs==null?1:Math.random()||.1,bu=dl.length;for(mn&&(ee=It==ue||It||mn);An!==bu&&(En=dl[An])!=null;An++){if(Ce&&En){for(Pn=0,It||En.ownerDocument==ue||(ae(En),rn=!ut);Kt=_e[Pn++];)if(Kt(En,It||ue,rn)){Mt.push(En);break}mn&&(Fn=fl)}we&&((En=!Kt&&En)&&di--,_t&&cn.push(En))}if(di+=An,we&&An!==di){for(Pn=0;Kt=ie[Pn++];)Kt(cn,ni,It,rn);if(_t){if(0<di)for(;An--;)cn[An]||ni[An]||(ni[An]=mr.call(Mt));ni=_s(ni)}nn.apply(Mt,ni),mn&&!_t&&0<ni.length&&1<di+ie.length&&Yt.uniqueSort(Mt)}return mn&&(Fn=fl,ee=vs),cn},we?ei(Ne):Ne))).selector=R}return mt},X=Yt.select=function(R,H,Q,_e){var ie,we,Ce,Ne,qe,yt=typeof R=="function"&&R,mt=!_e&&C(R=yt.selector||R);if(Q=Q||[],mt.length===1){if(2<(we=mt[0]=mt[0].slice(0)).length&&(Ce=we[0]).type==="ID"&&H.nodeType===9&&ut&&p.relative[we[1].type]){if(!(H=(p.find.ID(Ce.matches[0].replace(xi,yi),H)||[])[0]))return Q;yt&&(H=H.parentNode),R=R.slice(we.shift().value.length)}for(ie=hs.needsContext.test(R)?0:we.length;ie--&&(Ce=we[ie],!p.relative[Ne=Ce.type]);)if((qe=p.find[Ne])&&(_e=qe(Ce.matches[0].replace(xi,yi),go.test(we[0].type)&&vo(H.parentNode)||H))){if(we.splice(ie,1),!(R=_e.length&&ms(we)))return nn.apply(Q,_e),Q;break}}return(yt||V(R,mt))(_e,H,!ut,Q,!H||go.test(R)&&vo(H.parentNode)||H),Q},d.sortStable=qt.split("").sort(Yi).join("")===qt,d.detectDuplicates=!!Se,ae(),d.sortDetached=ti(function(R){return 1&R.compareDocumentPosition(ue.createElement("fieldset"))}),ti(function(R){return R.innerHTML="<a href='#'></a>",R.firstChild.getAttribute("href")==="#"})||_o("type|href|height|width",function(R,H,Q){if(!Q)return R.getAttribute(H,H.toLowerCase()==="type"?1:2)}),d.attributes&&ti(function(R){return R.innerHTML="<input/>",R.firstChild.setAttribute("value",""),R.firstChild.getAttribute("value")===""})||_o("value",function(R,H,Q){if(!Q&&R.nodeName.toLowerCase()==="input")return R.defaultValue}),ti(function(R){return R.getAttribute("disabled")==null})||_o(ui,function(R,H,Q){var _e;if(!Q)return R[H]===!0?H.toLowerCase():(_e=R.getAttributeNode(H))&&_e.specified?_e.value:null}),Yt}(i);u.find=W,u.expr=W.selectors,u.expr[":"]=u.expr.pseudos,u.uniqueSort=u.unique=W.uniqueSort,u.text=W.getText,u.isXMLDoc=W.isXML,u.contains=W.contains,u.escapeSelector=W.escape;var re=function(s,l,d){for(var p=[],b=d!==void 0;(s=s[l])&&s.nodeType!==9;)if(s.nodeType===1){if(b&&u(s).is(d))break;p.push(s)}return p},I=function(s,l){for(var d=[];s;s=s.nextSibling)s.nodeType===1&&s!==l&&d.push(s);return d},L=u.expr.match.needsContext;function Y(s,l){return s.nodeName&&s.nodeName.toLowerCase()===l.toLowerCase()}var me=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function de(s,l,d){return M(l)?u.grep(s,function(p,b){return!!l.call(p,b,p)!==d}):l.nodeType?u.grep(s,function(p){return p===l!==d}):typeof l!="string"?u.grep(s,function(p){return-1<c.call(l,p)!==d}):u.filter(l,s,d)}u.filter=function(s,l,d){var p=l[0];return d&&(s=":not("+s+")"),l.length===1&&p.nodeType===1?u.find.matchesSelector(p,s)?[p]:[]:u.find.matches(s,u.grep(l,function(b){return b.nodeType===1}))},u.fn.extend({find:function(s){var l,d,p=this.length,b=this;if(typeof s!="string")return this.pushStack(u(s).filter(function(){for(l=0;l<p;l++)if(u.contains(b[l],this))return!0}));for(d=this.pushStack([]),l=0;l<p;l++)u.find(s,b[l],d);return 1<p?u.uniqueSort(d):d},filter:function(s){return this.pushStack(de(this,s||[],!1))},not:function(s){return this.pushStack(de(this,s||[],!0))},is:function(s){return!!de(this,typeof s=="string"&&L.test(s)?u(s):s||[],!1).length}});var Ee,Me=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(u.fn.init=function(s,l,d){var p,b;if(!s)return this;if(d=d||Ee,typeof s=="string"){if(!(p=s[0]==="<"&&s[s.length-1]===">"&&3<=s.length?[null,s,null]:Me.exec(s))||!p[1]&&l)return!l||l.jquery?(l||d).find(s):this.constructor(l).find(s);if(p[1]){if(l=l instanceof u?l[0]:l,u.merge(this,u.parseHTML(p[1],l&&l.nodeType?l.ownerDocument||l:v,!0)),me.test(p[1])&&u.isPlainObject(l))for(p in l)M(this[p])?this[p](l[p]):this.attr(p,l[p]);return this}return(b=v.getElementById(p[2]))&&(this[0]=b,this.length=1),this}return s.nodeType?(this[0]=s,this.length=1,this):M(s)?d.ready!==void 0?d.ready(s):s(u):u.makeArray(s,this)}).prototype=u.fn,Ee=u(v);var ye=/^(?:parents|prev(?:Until|All))/,Ae={children:!0,contents:!0,next:!0,prev:!0};function he(s,l){for(;(s=s[l])&&s.nodeType!==1;);return s}u.fn.extend({has:function(s){var l=u(s,this),d=l.length;return this.filter(function(){for(var p=0;p<d;p++)if(u.contains(this,l[p]))return!0})},closest:function(s,l){var d,p=0,b=this.length,A=[],C=typeof s!="string"&&u(s);if(!L.test(s)){for(;p<b;p++)for(d=this[p];d&&d!==l;d=d.parentNode)if(d.nodeType<11&&(C?-1<C.index(d):d.nodeType===1&&u.find.matchesSelector(d,s))){A.push(d);break}}return this.pushStack(1<A.length?u.uniqueSort(A):A)},index:function(s){return s?typeof s=="string"?c.call(u(s),this[0]):c.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,l){return this.pushStack(u.uniqueSort(u.merge(this.get(),u(s,l))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}}),u.each({parent:function(s){var l=s.parentNode;return l&&l.nodeType!==11?l:null},parents:function(s){return re(s,"parentNode")},parentsUntil:function(s,l,d){return re(s,"parentNode",d)},next:function(s){return he(s,"nextSibling")},prev:function(s){return he(s,"previousSibling")},nextAll:function(s){return re(s,"nextSibling")},prevAll:function(s){return re(s,"previousSibling")},nextUntil:function(s,l,d){return re(s,"nextSibling",d)},prevUntil:function(s,l,d){return re(s,"previousSibling",d)},siblings:function(s){return I((s.parentNode||{}).firstChild,s)},children:function(s){return I(s.firstChild)},contents:function(s){return s.contentDocument!=null&&n(s.contentDocument)?s.contentDocument:(Y(s,"template")&&(s=s.content||s),u.merge([],s.childNodes))}},function(s,l){u.fn[s]=function(d,p){var b=u.map(this,l,d);return s.slice(-5)!=="Until"&&(p=d),p&&typeof p=="string"&&(b=u.filter(p,b)),1<this.length&&(Ae[s]||u.uniqueSort(b),ye.test(s)&&b.reverse()),this.pushStack(b)}});var Ie=/[^\x20\t\r\n\f]+/g;function Ge(s){return s}function rt(s){throw s}function Et(s,l,d,p){var b;try{s&&M(b=s.promise)?b.call(s).done(l).fail(d):s&&M(b=s.then)?b.call(s,l,d):l.apply(void 0,[s].slice(p))}catch(A){d.apply(void 0,[A])}}u.Callbacks=function(s){var l,d;s=typeof s=="string"?(l=s,d={},u.each(l.match(Ie)||[],function(ae,ue){d[ue]=!0}),d):u.extend({},s);var p,b,A,C,V=[],X=[],ee=-1,ce=function(){for(C=C||s.once,A=p=!0;X.length;ee=-1)for(b=X.shift();++ee<V.length;)V[ee].apply(b[0],b[1])===!1&&s.stopOnFalse&&(ee=V.length,b=!1);s.memory||(b=!1),p=!1,C&&(V=b?[]:"")},Se={add:function(){return V&&(b&&!p&&(ee=V.length-1,X.push(b)),function ae(ue){u.each(ue,function(Ke,ut){M(ut)?s.unique&&Se.has(ut)||V.push(ut):ut&&ut.length&&k(ut)!=="string"&&ae(ut)})}(arguments),b&&!p&&ce()),this},remove:function(){return u.each(arguments,function(ae,ue){for(var Ke;-1<(Ke=u.inArray(ue,V,Ke));)V.splice(Ke,1),Ke<=ee&&ee--}),this},has:function(ae){return ae?-1<u.inArray(ae,V):0<V.length},empty:function(){return V&&(V=[]),this},disable:function(){return C=X=[],V=b="",this},disabled:function(){return!V},lock:function(){return C=X=[],b||p||(V=b=""),this},locked:function(){return!!C},fireWith:function(ae,ue){return C||(ue=[ae,(ue=ue||[]).slice?ue.slice():ue],X.push(ue),p||ce()),this},fire:function(){return Se.fireWith(this,arguments),this},fired:function(){return!!A}};return Se},u.extend({Deferred:function(s){var l=[["notify","progress",u.Callbacks("memory"),u.Callbacks("memory"),2],["resolve","done",u.Callbacks("once memory"),u.Callbacks("once memory"),0,"resolved"],["reject","fail",u.Callbacks("once memory"),u.Callbacks("once memory"),1,"rejected"]],d="pending",p={state:function(){return d},always:function(){return b.done(arguments).fail(arguments),this},catch:function(A){return p.then(null,A)},pipe:function(){var A=arguments;return u.Deferred(function(C){u.each(l,function(V,X){var ee=M(A[X[4]])&&A[X[4]];b[X[1]](function(){var ce=ee&&ee.apply(this,arguments);ce&&M(ce.promise)?ce.promise().progress(C.notify).done(C.resolve).fail(C.reject):C[X[0]+"With"](this,ee?[ce]:arguments)})}),A=null}).promise()},then:function(A,C,V){var X=0;function ee(ce,Se,ae,ue){return function(){var Ke=this,ut=arguments,nt=function(){var hn,Hn;if(!(ce<X)){if((hn=ae.apply(Ke,ut))===Se.promise())throw new TypeError("Thenable self-resolution");Hn=hn&&(typeof hn=="object"||typeof hn=="function")&&hn.then,M(Hn)?ue?Hn.call(hn,ee(X,Se,Ge,ue),ee(X,Se,rt,ue)):(X++,Hn.call(hn,ee(X,Se,Ge,ue),ee(X,Se,rt,ue),ee(X,Se,Ge,Se.notifyWith))):(ae!==Ge&&(Ke=void 0,ut=[hn]),(ue||Se.resolveWith)(Ke,ut))}},en=ue?nt:function(){try{nt()}catch(hn){u.Deferred.exceptionHook&&u.Deferred.exceptionHook(hn,en.stackTrace),X<=ce+1&&(ae!==rt&&(Ke=void 0,ut=[hn]),Se.rejectWith(Ke,ut))}};ce?en():(u.Deferred.getStackHook&&(en.stackTrace=u.Deferred.getStackHook()),i.setTimeout(en))}}return u.Deferred(function(ce){l[0][3].add(ee(0,ce,M(V)?V:Ge,ce.notifyWith)),l[1][3].add(ee(0,ce,M(A)?A:Ge)),l[2][3].add(ee(0,ce,M(C)?C:rt))}).promise()},promise:function(A){return A!=null?u.extend(A,p):p}},b={};return u.each(l,function(A,C){var V=C[2],X=C[5];p[C[1]]=V.add,X&&V.add(function(){d=X},l[3-A][2].disable,l[3-A][3].disable,l[0][2].lock,l[0][3].lock),V.add(C[3].fire),b[C[0]]=function(){return b[C[0]+"With"](this===b?void 0:this,arguments),this},b[C[0]+"With"]=V.fireWith}),p.promise(b),s&&s.call(b,b),b},when:function(s){var l=arguments.length,d=l,p=Array(d),b=r.call(arguments),A=u.Deferred(),C=function(V){return function(X){p[V]=this,b[V]=1<arguments.length?r.call(arguments):X,--l||A.resolveWith(p,b)}};if(l<=1&&(Et(s,A.done(C(d)).resolve,A.reject,!l),A.state()==="pending"||M(b[d]&&b[d].then)))return A.then();for(;d--;)Et(b[d],C(d),A.reject);return A.promise()}});var Ot=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;u.Deferred.exceptionHook=function(s,l){i.console&&i.console.warn&&s&&Ot.test(s.name)&&i.console.warn("jQuery.Deferred exception: "+s.message,s.stack,l)},u.readyException=function(s){i.setTimeout(function(){throw s})};var z=u.Deferred();function Re(){v.removeEventListener("DOMContentLoaded",Re),i.removeEventListener("load",Re),u.ready()}u.fn.ready=function(s){return z.then(s).catch(function(l){u.readyException(l)}),this},u.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--u.readyWait:u.isReady)||(u.isReady=!0)!==s&&0<--u.readyWait||z.resolveWith(v,[u])}}),u.ready.then=z.then,v.readyState==="complete"||v.readyState!=="loading"&&!v.documentElement.doScroll?i.setTimeout(u.ready):(v.addEventListener("DOMContentLoaded",Re),i.addEventListener("load",Re));var We=function(s,l,d,p,b,A,C){var V=0,X=s.length,ee=d==null;if(k(d)==="object")for(V in b=!0,d)We(s,l,V,d[V],!0,A,C);else if(p!==void 0&&(b=!0,M(p)||(C=!0),ee&&(C?(l.call(s,p),l=null):(ee=l,l=function(ce,Se,ae){return ee.call(u(ce),ae)})),l))for(;V<X;V++)l(s[V],d,C?p:p.call(s[V],V,l(s[V],d)));return b?s:ee?l.call(s):X?l(s[0],d):A},Be=/^-ms-/,dt=/-([a-z])/g;function ht(s,l){return l.toUpperCase()}function je(s){return s.replace(Be,"ms-").replace(dt,ht)}var pt=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function at(){this.expando=u.expando+at.uid++}at.uid=1,at.prototype={cache:function(s){var l=s[this.expando];return l||(l={},pt(s)&&(s.nodeType?s[this.expando]=l:Object.defineProperty(s,this.expando,{value:l,configurable:!0}))),l},set:function(s,l,d){var p,b=this.cache(s);if(typeof l=="string")b[je(l)]=d;else for(p in l)b[je(p)]=l[p];return b},get:function(s,l){return l===void 0?this.cache(s):s[this.expando]&&s[this.expando][je(l)]},access:function(s,l,d){return l===void 0||l&&typeof l=="string"&&d===void 0?this.get(s,l):(this.set(s,l,d),d!==void 0?d:l)},remove:function(s,l){var d,p=s[this.expando];if(p!==void 0){if(l!==void 0)for(d=(l=Array.isArray(l)?l.map(je):(l=je(l))in p?[l]:l.match(Ie)||[]).length;d--;)delete p[l[d]];(l===void 0||u.isEmptyObject(p))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var l=s[this.expando];return l!==void 0&&!u.isEmptyObject(l)}};var He=new at,G=new at,vn=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ct=/[A-Z]/g;function Tt(s,l,d){var p,b;if(d===void 0&&s.nodeType===1)if(p="data-"+l.replace(Ct,"-$&").toLowerCase(),typeof(d=s.getAttribute(p))=="string"){try{d=(b=d)==="true"||b!=="false"&&(b==="null"?null:b===+b+""?+b:vn.test(b)?JSON.parse(b):b)}catch{}G.set(s,l,d)}else d=void 0;return d}u.extend({hasData:function(s){return G.hasData(s)||He.hasData(s)},data:function(s,l,d){return G.access(s,l,d)},removeData:function(s,l){G.remove(s,l)},_data:function(s,l,d){return He.access(s,l,d)},_removeData:function(s,l){He.remove(s,l)}}),u.fn.extend({data:function(s,l){var d,p,b,A=this[0],C=A&&A.attributes;if(s===void 0){if(this.length&&(b=G.get(A),A.nodeType===1&&!He.get(A,"hasDataAttrs"))){for(d=C.length;d--;)C[d]&&(p=C[d].name).indexOf("data-")===0&&(p=je(p.slice(5)),Tt(A,p,b[p]));He.set(A,"hasDataAttrs",!0)}return b}return typeof s=="object"?this.each(function(){G.set(this,s)}):We(this,function(V){var X;if(A&&V===void 0)return(X=G.get(A,s))!==void 0||(X=Tt(A,s))!==void 0?X:void 0;this.each(function(){G.set(this,s,V)})},null,l,1<arguments.length,null,!0)},removeData:function(s){return this.each(function(){G.remove(this,s)})}}),u.extend({queue:function(s,l,d){var p;if(s)return l=(l||"fx")+"queue",p=He.get(s,l),d&&(!p||Array.isArray(d)?p=He.access(s,l,u.makeArray(d)):p.push(d)),p||[]},dequeue:function(s,l){l=l||"fx";var d=u.queue(s,l),p=d.length,b=d.shift(),A=u._queueHooks(s,l);b==="inprogress"&&(b=d.shift(),p--),b&&(l==="fx"&&d.unshift("inprogress"),delete A.stop,b.call(s,function(){u.dequeue(s,l)},A)),!p&&A&&A.empty.fire()},_queueHooks:function(s,l){var d=l+"queueHooks";return He.get(s,d)||He.access(s,d,{empty:u.Callbacks("once memory").add(function(){He.remove(s,[l+"queue",d])})})}}),u.fn.extend({queue:function(s,l){var d=2;return typeof s!="string"&&(l=s,s="fx",d--),arguments.length<d?u.queue(this[0],s):l===void 0?this:this.each(function(){var p=u.queue(this,s,l);u._queueHooks(this,s),s==="fx"&&p[0]!=="inprogress"&&u.dequeue(this,s)})},dequeue:function(s){return this.each(function(){u.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,l){var d,p=1,b=u.Deferred(),A=this,C=this.length,V=function(){--p||b.resolveWith(A,[A])};for(typeof s!="string"&&(l=s,s=void 0),s=s||"fx";C--;)(d=He.get(A[C],s+"queueHooks"))&&d.empty&&(p++,d.empty.add(V));return V(),b.promise(l)}});var st=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,kt=new RegExp("^(?:([+-])=|)("+st+")([a-z%]*)$","i"),Ze=["Top","Right","Bottom","Left"],U=v.documentElement,w=function(s){return u.contains(s.ownerDocument,s)},oe={composed:!0};U.getRootNode&&(w=function(s){return u.contains(s.ownerDocument,s)||s.getRootNode(oe)===s.ownerDocument});var xe=function(s,l){return(s=l||s).style.display==="none"||s.style.display===""&&w(s)&&u.css(s,"display")==="none"};function Te(s,l,d,p){var b,A,C=20,V=p?function(){return p.cur()}:function(){return u.css(s,l,"")},X=V(),ee=d&&d[3]||(u.cssNumber[l]?"":"px"),ce=s.nodeType&&(u.cssNumber[l]||ee!=="px"&&+X)&&kt.exec(u.css(s,l));if(ce&&ce[3]!==ee){for(X/=2,ee=ee||ce[3],ce=+X||1;C--;)u.style(s,l,ce+ee),(1-A)*(1-(A=V()/X||.5))<=0&&(C=0),ce/=A;ce*=2,u.style(s,l,ce+ee),d=d||[]}return d&&(ce=+ce||+X||0,b=d[1]?ce+(d[1]+1)*d[2]:+d[2],p&&(p.unit=ee,p.start=ce,p.end=b)),b}var ge={};function et(s,l){for(var d,p,b,A,C,V,X,ee=[],ce=0,Se=s.length;ce<Se;ce++)(p=s[ce]).style&&(d=p.style.display,l?(d==="none"&&(ee[ce]=He.get(p,"display")||null,ee[ce]||(p.style.display="")),p.style.display===""&&xe(p)&&(ee[ce]=(X=C=A=void 0,C=(b=p).ownerDocument,V=b.nodeName,(X=ge[V])||(A=C.body.appendChild(C.createElement(V)),X=u.css(A,"display"),A.parentNode.removeChild(A),X==="none"&&(X="block"),ge[V]=X)))):d!=="none"&&(ee[ce]="none",He.set(p,"display",d)));for(ce=0;ce<Se;ce++)ee[ce]!=null&&(s[ce].style.display=ee[ce]);return s}u.fn.extend({show:function(){return et(this,!0)},hide:function(){return et(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){xe(this)?u(this).show():u(this).hide()})}});var Ue,$e,vt=/^(?:checkbox|radio)$/i,Pe=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Je=/^$|^module$|\/(?:java|ecma)script/i;Ue=v.createDocumentFragment().appendChild(v.createElement("div")),($e=v.createElement("input")).setAttribute("type","radio"),$e.setAttribute("checked","checked"),$e.setAttribute("name","t"),Ue.appendChild($e),S.checkClone=Ue.cloneNode(!0).cloneNode(!0).lastChild.checked,Ue.innerHTML="<textarea>x</textarea>",S.noCloneChecked=!!Ue.cloneNode(!0).lastChild.defaultValue,Ue.innerHTML="<option></option>",S.option=!!Ue.lastChild;var Qe={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function it(s,l){var d;return d=typeof s.getElementsByTagName<"u"?s.getElementsByTagName(l||"*"):typeof s.querySelectorAll<"u"?s.querySelectorAll(l||"*"):[],l===void 0||l&&Y(s,l)?u.merge([s],d):d}function Ye(s,l){for(var d=0,p=s.length;d<p;d++)He.set(s[d],"globalEval",!l||He.get(l[d],"globalEval"))}Qe.tbody=Qe.tfoot=Qe.colgroup=Qe.caption=Qe.thead,Qe.th=Qe.td,S.option||(Qe.optgroup=Qe.option=[1,"<select multiple='multiple'>","</select>"]);var Rt=/<|&#?\w+;/;function xt(s,l,d,p,b){for(var A,C,V,X,ee,ce,Se=l.createDocumentFragment(),ae=[],ue=0,Ke=s.length;ue<Ke;ue++)if((A=s[ue])||A===0)if(k(A)==="object")u.merge(ae,A.nodeType?[A]:A);else if(Rt.test(A)){for(C=C||Se.appendChild(l.createElement("div")),V=(Pe.exec(A)||["",""])[1].toLowerCase(),X=Qe[V]||Qe._default,C.innerHTML=X[1]+u.htmlPrefilter(A)+X[2],ce=X[0];ce--;)C=C.lastChild;u.merge(ae,C.childNodes),(C=Se.firstChild).textContent=""}else ae.push(l.createTextNode(A));for(Se.textContent="",ue=0;A=ae[ue++];)if(p&&-1<u.inArray(A,p))b&&b.push(A);else if(ee=w(A),C=it(Se.appendChild(A),"script"),ee&&Ye(C),d)for(ce=0;A=C[ce++];)Je.test(A.type||"")&&d.push(A);return Se}var Wt=/^key/,J=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ze=/^([^.]*)(?:\.(.+)|)/;function fe(){return!0}function ve(){return!1}function Xe(s,l){return s===function(){try{return v.activeElement}catch{}}()==(l==="focus")}function Fe(s,l,d,p,b,A){var C,V;if(typeof l=="object"){for(V in typeof d!="string"&&(p=p||d,d=void 0),l)Fe(s,V,d,p,l[V],A);return s}if(p==null&&b==null?(b=d,p=d=void 0):b==null&&(typeof d=="string"?(b=p,p=void 0):(b=p,p=d,d=void 0)),b===!1)b=ve;else if(!b)return s;return A===1&&(C=b,(b=function(X){return u().off(X),C.apply(this,arguments)}).guid=C.guid||(C.guid=u.guid++)),s.each(function(){u.event.add(this,l,b,p,d)})}function gt(s,l,d){d?(He.set(s,l,!1),u.event.add(s,l,{namespace:!1,handler:function(p){var b,A,C=He.get(this,l);if(1&p.isTrigger&&this[l]){if(C.length)(u.event.special[l]||{}).delegateType&&p.stopPropagation();else if(C=r.call(arguments),He.set(this,l,C),b=d(this,l),this[l](),C!==(A=He.get(this,l))||b?He.set(this,l,!1):A={},C!==A)return p.stopImmediatePropagation(),p.preventDefault(),A.value}else C.length&&(He.set(this,l,{value:u.event.trigger(u.extend(C[0],u.Event.prototype),C.slice(1),this)}),p.stopImmediatePropagation())}})):He.get(s,l)===void 0&&u.event.add(s,l,fe)}u.event={global:{},add:function(s,l,d,p,b){var A,C,V,X,ee,ce,Se,ae,ue,Ke,ut,nt=He.get(s);if(pt(s))for(d.handler&&(d=(A=d).handler,b=A.selector),b&&u.find.matchesSelector(U,b),d.guid||(d.guid=u.guid++),(X=nt.events)||(X=nt.events=Object.create(null)),(C=nt.handle)||(C=nt.handle=function(en){return typeof u<"u"&&u.event.triggered!==en.type?u.event.dispatch.apply(s,arguments):void 0}),ee=(l=(l||"").match(Ie)||[""]).length;ee--;)ue=ut=(V=ze.exec(l[ee])||[])[1],Ke=(V[2]||"").split(".").sort(),ue&&(Se=u.event.special[ue]||{},ue=(b?Se.delegateType:Se.bindType)||ue,Se=u.event.special[ue]||{},ce=u.extend({type:ue,origType:ut,data:p,handler:d,guid:d.guid,selector:b,needsContext:b&&u.expr.match.needsContext.test(b),namespace:Ke.join(".")},A),(ae=X[ue])||((ae=X[ue]=[]).delegateCount=0,Se.setup&&Se.setup.call(s,p,Ke,C)!==!1||s.addEventListener&&s.addEventListener(ue,C)),Se.add&&(Se.add.call(s,ce),ce.handler.guid||(ce.handler.guid=d.guid)),b?ae.splice(ae.delegateCount++,0,ce):ae.push(ce),u.event.global[ue]=!0)},remove:function(s,l,d,p,b){var A,C,V,X,ee,ce,Se,ae,ue,Ke,ut,nt=He.hasData(s)&&He.get(s);if(nt&&(X=nt.events)){for(ee=(l=(l||"").match(Ie)||[""]).length;ee--;)if(ue=ut=(V=ze.exec(l[ee])||[])[1],Ke=(V[2]||"").split(".").sort(),ue){for(Se=u.event.special[ue]||{},ae=X[ue=(p?Se.delegateType:Se.bindType)||ue]||[],V=V[2]&&new RegExp("(^|\\.)"+Ke.join("\\.(?:.*\\.|)")+"(\\.|$)"),C=A=ae.length;A--;)ce=ae[A],!b&&ut!==ce.origType||d&&d.guid!==ce.guid||V&&!V.test(ce.namespace)||p&&p!==ce.selector&&(p!=="**"||!ce.selector)||(ae.splice(A,1),ce.selector&&ae.delegateCount--,Se.remove&&Se.remove.call(s,ce));C&&!ae.length&&(Se.teardown&&Se.teardown.call(s,Ke,nt.handle)!==!1||u.removeEvent(s,ue,nt.handle),delete X[ue])}else for(ue in X)u.event.remove(s,ue+l[ee],d,p,!0);u.isEmptyObject(X)&&He.remove(s,"handle events")}},dispatch:function(s){var l,d,p,b,A,C,V=new Array(arguments.length),X=u.event.fix(s),ee=(He.get(this,"events")||Object.create(null))[X.type]||[],ce=u.event.special[X.type]||{};for(V[0]=X,l=1;l<arguments.length;l++)V[l]=arguments[l];if(X.delegateTarget=this,!ce.preDispatch||ce.preDispatch.call(this,X)!==!1){for(C=u.event.handlers.call(this,X,ee),l=0;(b=C[l++])&&!X.isPropagationStopped();)for(X.currentTarget=b.elem,d=0;(A=b.handlers[d++])&&!X.isImmediatePropagationStopped();)X.rnamespace&&A.namespace!==!1&&!X.rnamespace.test(A.namespace)||(X.handleObj=A,X.data=A.data,(p=((u.event.special[A.origType]||{}).handle||A.handler).apply(b.elem,V))!==void 0&&(X.result=p)===!1&&(X.preventDefault(),X.stopPropagation()));return ce.postDispatch&&ce.postDispatch.call(this,X),X.result}},handlers:function(s,l){var d,p,b,A,C,V=[],X=l.delegateCount,ee=s.target;if(X&&ee.nodeType&&!(s.type==="click"&&1<=s.button)){for(;ee!==this;ee=ee.parentNode||this)if(ee.nodeType===1&&(s.type!=="click"||ee.disabled!==!0)){for(A=[],C={},d=0;d<X;d++)C[b=(p=l[d]).selector+" "]===void 0&&(C[b]=p.needsContext?-1<u(b,this).index(ee):u.find(b,this,null,[ee]).length),C[b]&&A.push(p);A.length&&V.push({elem:ee,handlers:A})}}return ee=this,X<l.length&&V.push({elem:ee,handlers:l.slice(X)}),V},addProp:function(s,l){Object.defineProperty(u.Event.prototype,s,{enumerable:!0,configurable:!0,get:M(l)?function(){if(this.originalEvent)return l(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(d){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:d})}})},fix:function(s){return s[u.expando]?s:new u.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var l=this||s;return vt.test(l.type)&&l.click&&Y(l,"input")&&gt(l,"click",fe),!1},trigger:function(s){var l=this||s;return vt.test(l.type)&&l.click&&Y(l,"input")&&gt(l,"click"),!0},_default:function(s){var l=s.target;return vt.test(l.type)&&l.click&&Y(l,"input")&&He.get(l,"click")||Y(l,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}},u.removeEvent=function(s,l,d){s.removeEventListener&&s.removeEventListener(l,d)},u.Event=function(s,l){if(!(this instanceof u.Event))return new u.Event(s,l);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?fe:ve,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,l&&u.extend(this,l),this.timeStamp=s&&s.timeStamp||Date.now(),this[u.expando]=!0},u.Event.prototype={constructor:u.Event,isDefaultPrevented:ve,isPropagationStopped:ve,isImmediatePropagationStopped:ve,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=fe,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=fe,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=fe,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},u.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(s){var l=s.button;return s.which==null&&Wt.test(s.type)?s.charCode!=null?s.charCode:s.keyCode:!s.which&&l!==void 0&&J.test(s.type)?1&l?1:2&l?3:4&l?2:0:s.which}},u.event.addProp),u.each({focus:"focusin",blur:"focusout"},function(s,l){u.event.special[s]={setup:function(){return gt(this,s,Xe),!1},trigger:function(){return gt(this,s),!0},delegateType:l}}),u.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,l){u.event.special[s]={delegateType:l,bindType:l,handle:function(d){var p,b=d.relatedTarget,A=d.handleObj;return b&&(b===this||u.contains(this,b))||(d.type=A.origType,p=A.handler.apply(this,arguments),d.type=l),p}}}),u.fn.extend({on:function(s,l,d,p){return Fe(this,s,l,d,p)},one:function(s,l,d,p){return Fe(this,s,l,d,p,1)},off:function(s,l,d){var p,b;if(s&&s.preventDefault&&s.handleObj)return p=s.handleObj,u(s.delegateTarget).off(p.namespace?p.origType+"."+p.namespace:p.origType,p.selector,p.handler),this;if(typeof s=="object"){for(b in s)this.off(b,l,s[b]);return this}return l!==!1&&typeof l!="function"||(d=l,l=void 0),d===!1&&(d=ve),this.each(function(){u.event.remove(this,s,d,l)})}});var Jt=/<script|<style|<link/i,an=/checked\s*(?:[^=]|=\s*.checked.)/i,Bt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Tn(s,l){return Y(s,"table")&&Y(l.nodeType!==11?l:l.firstChild,"tr")&&u(s).children("tbody")[0]||s}function Un(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function hr(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function _i(s,l){var d,p,b,A,C,V;if(l.nodeType===1){if(He.hasData(s)&&(V=He.get(s).events))for(b in He.remove(l,"handle events"),V)for(d=0,p=V[b].length;d<p;d++)u.event.add(l,b,V[b][d]);G.hasData(s)&&(A=G.access(s),C=u.extend({},A),G.set(l,C))}}function xn(s,l,d,p){l=o(l);var b,A,C,V,X,ee,ce=0,Se=s.length,ae=Se-1,ue=l[0],Ke=M(ue);if(Ke||1<Se&&typeof ue=="string"&&!S.checkClone&&an.test(ue))return s.each(function(ut){var nt=s.eq(ut);Ke&&(l[0]=ue.call(this,ut,nt.html())),xn(nt,l,d,p)});if(Se&&(A=(b=xt(l,s[0].ownerDocument,!1,s,p)).firstChild,b.childNodes.length===1&&(b=A),A||p)){for(V=(C=u.map(it(b,"script"),Un)).length;ce<Se;ce++)X=b,ce!==ae&&(X=u.clone(X,!0,!0),V&&u.merge(C,it(X,"script"))),d.call(s[ce],X,ce);if(V)for(ee=C[C.length-1].ownerDocument,u.map(C,hr),ce=0;ce<V;ce++)X=C[ce],Je.test(X.type||"")&&!He.access(X,"globalEval")&&u.contains(ee,X)&&(X.src&&(X.type||"").toLowerCase()!=="module"?u._evalUrl&&!X.noModule&&u._evalUrl(X.src,{nonce:X.nonce||X.getAttribute("nonce")},ee):q(X.textContent.replace(Bt,""),X,ee))}return s}function Ui(s,l,d){for(var p,b=l?u.filter(l,s):s,A=0;(p=b[A])!=null;A++)d||p.nodeType!==1||u.cleanData(it(p)),p.parentNode&&(d&&w(p)&&Ye(it(p,"script")),p.parentNode.removeChild(p));return s}u.extend({htmlPrefilter:function(s){return s},clone:function(s,l,d){var p,b,A,C,V,X,ee,ce=s.cloneNode(!0),Se=w(s);if(!(S.noCloneChecked||s.nodeType!==1&&s.nodeType!==11||u.isXMLDoc(s)))for(C=it(ce),p=0,b=(A=it(s)).length;p<b;p++)V=A[p],X=C[p],(ee=X.nodeName.toLowerCase())==="input"&&vt.test(V.type)?X.checked=V.checked:ee!=="input"&&ee!=="textarea"||(X.defaultValue=V.defaultValue);if(l)if(d)for(A=A||it(s),C=C||it(ce),p=0,b=A.length;p<b;p++)_i(A[p],C[p]);else _i(s,ce);return 0<(C=it(ce,"script")).length&&Ye(C,!Se&&it(s,"script")),ce},cleanData:function(s){for(var l,d,p,b=u.event.special,A=0;(d=s[A])!==void 0;A++)if(pt(d)){if(l=d[He.expando]){if(l.events)for(p in l.events)b[p]?u.event.remove(d,p):u.removeEvent(d,p,l.handle);d[He.expando]=void 0}d[G.expando]&&(d[G.expando]=void 0)}}}),u.fn.extend({detach:function(s){return Ui(this,s,!0)},remove:function(s){return Ui(this,s)},text:function(s){return We(this,function(l){return l===void 0?u.text(this):this.empty().each(function(){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||(this.textContent=l)})},null,s,arguments.length)},append:function(){return xn(this,arguments,function(s){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||Tn(this,s).appendChild(s)})},prepend:function(){return xn(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var l=Tn(this,s);l.insertBefore(s,l.firstChild)}})},before:function(){return xn(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return xn(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,l=0;(s=this[l])!=null;l++)s.nodeType===1&&(u.cleanData(it(s,!1)),s.textContent="");return this},clone:function(s,l){return s=s!=null&&s,l=l??s,this.map(function(){return u.clone(this,s,l)})},html:function(s){return We(this,function(l){var d=this[0]||{},p=0,b=this.length;if(l===void 0&&d.nodeType===1)return d.innerHTML;if(typeof l=="string"&&!Jt.test(l)&&!Qe[(Pe.exec(l)||["",""])[1].toLowerCase()]){l=u.htmlPrefilter(l);try{for(;p<b;p++)(d=this[p]||{}).nodeType===1&&(u.cleanData(it(d,!1)),d.innerHTML=l);d=0}catch{}}d&&this.empty().append(l)},null,s,arguments.length)},replaceWith:function(){var s=[];return xn(this,arguments,function(l){var d=this.parentNode;u.inArray(this,s)<0&&(u.cleanData(it(this)),d&&d.replaceChild(l,this))},s)}}),u.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,l){u.fn[s]=function(d){for(var p,b=[],A=u(d),C=A.length-1,V=0;V<=C;V++)p=V===C?this:this.clone(!0),u(A[V])[l](p),a.apply(b,p.get());return this.pushStack(b)}});var vi=new RegExp("^("+st+")(?!px)[a-z%]+$","i"),li=function(s){var l=s.ownerDocument.defaultView;return l&&l.opener||(l=i),l.getComputedStyle(s)},B=function(s,l,d){var p,b,A={};for(b in l)A[b]=s.style[b],s.style[b]=l[b];for(b in p=d.call(s),l)s.style[b]=A[b];return p},O=new RegExp(Ze.join("|"),"i");function N(s,l,d){var p,b,A,C,V=s.style;return(d=d||li(s))&&((C=d.getPropertyValue(l)||d[l])!==""||w(s)||(C=u.style(s,l)),!S.pixelBoxStyles()&&vi.test(C)&&O.test(l)&&(p=V.width,b=V.minWidth,A=V.maxWidth,V.minWidth=V.maxWidth=V.width=C,C=d.width,V.width=p,V.minWidth=b,V.maxWidth=A)),C!==void 0?C+"":C}function f(s,l){return{get:function(){if(!s())return(this.get=l).apply(this,arguments);delete this.get}}}(function(){function s(){if(ee){X.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",ee.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",U.appendChild(X).appendChild(ee);var ce=i.getComputedStyle(ee);d=ce.top!=="1%",V=l(ce.marginLeft)===12,ee.style.right="60%",A=l(ce.right)===36,p=l(ce.width)===36,ee.style.position="absolute",b=l(ee.offsetWidth/3)===12,U.removeChild(X),ee=null}}function l(ce){return Math.round(parseFloat(ce))}var d,p,b,A,C,V,X=v.createElement("div"),ee=v.createElement("div");ee.style&&(ee.style.backgroundClip="content-box",ee.cloneNode(!0).style.backgroundClip="",S.clearCloneStyle=ee.style.backgroundClip==="content-box",u.extend(S,{boxSizingReliable:function(){return s(),p},pixelBoxStyles:function(){return s(),A},pixelPosition:function(){return s(),d},reliableMarginLeft:function(){return s(),V},scrollboxSize:function(){return s(),b},reliableTrDimensions:function(){var ce,Se,ae,ue;return C==null&&(ce=v.createElement("table"),Se=v.createElement("tr"),ae=v.createElement("div"),ce.style.cssText="position:absolute;left:-11111px",Se.style.height="1px",ae.style.height="9px",U.appendChild(ce).appendChild(Se).appendChild(ae),ue=i.getComputedStyle(Se),C=3<parseInt(ue.height),U.removeChild(ce)),C}}))})();var E=["Webkit","Moz","ms"],D=v.createElement("div").style,ne={};function pe(s){var l=u.cssProps[s]||ne[s];return l||(s in D?s:ne[s]=function(d){for(var p=d[0].toUpperCase()+d.slice(1),b=E.length;b--;)if((d=E[b]+p)in D)return d}(s)||s)}var Oe=/^(none|table(?!-c[ea]).+)/,tt=/^--/,Nt={position:"absolute",visibility:"hidden",display:"block"},T={letterSpacing:"0",fontWeight:"400"};function j(s,l,d){var p=kt.exec(l);return p?Math.max(0,p[2]-(d||0))+(p[3]||"px"):l}function te(s,l,d,p,b,A){var C=l==="width"?1:0,V=0,X=0;if(d===(p?"border":"content"))return 0;for(;C<4;C+=2)d==="margin"&&(X+=u.css(s,d+Ze[C],!0,b)),p?(d==="content"&&(X-=u.css(s,"padding"+Ze[C],!0,b)),d!=="margin"&&(X-=u.css(s,"border"+Ze[C]+"Width",!0,b))):(X+=u.css(s,"padding"+Ze[C],!0,b),d!=="padding"?X+=u.css(s,"border"+Ze[C]+"Width",!0,b):V+=u.css(s,"border"+Ze[C]+"Width",!0,b));return!p&&0<=A&&(X+=Math.max(0,Math.ceil(s["offset"+l[0].toUpperCase()+l.slice(1)]-A-X-V-.5))||0),X}function se(s,l,d){var p=li(s),b=(!S.boxSizingReliable()||d)&&u.css(s,"boxSizing",!1,p)==="border-box",A=b,C=N(s,l,p),V="offset"+l[0].toUpperCase()+l.slice(1);if(vi.test(C)){if(!d)return C;C="auto"}return(!S.boxSizingReliable()&&b||!S.reliableTrDimensions()&&Y(s,"tr")||C==="auto"||!parseFloat(C)&&u.css(s,"display",!1,p)==="inline")&&s.getClientRects().length&&(b=u.css(s,"boxSizing",!1,p)==="border-box",(A=V in s)&&(C=s[V])),(C=parseFloat(C)||0)+te(s,l,d||(b?"border":"content"),A,p,C)+"px"}function Z(s,l,d,p,b){return new Z.prototype.init(s,l,d,p,b)}u.extend({cssHooks:{opacity:{get:function(s,l){if(l){var d=N(s,"opacity");return d===""?"1":d}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(s,l,d,p){if(s&&s.nodeType!==3&&s.nodeType!==8&&s.style){var b,A,C,V=je(l),X=tt.test(l),ee=s.style;if(X||(l=pe(V)),C=u.cssHooks[l]||u.cssHooks[V],d===void 0)return C&&"get"in C&&(b=C.get(s,!1,p))!==void 0?b:ee[l];(A=typeof d)=="string"&&(b=kt.exec(d))&&b[1]&&(d=Te(s,l,b),A="number"),d!=null&&d==d&&(A!=="number"||X||(d+=b&&b[3]||(u.cssNumber[V]?"":"px")),S.clearCloneStyle||d!==""||l.indexOf("background")!==0||(ee[l]="inherit"),C&&"set"in C&&(d=C.set(s,d,p))===void 0||(X?ee.setProperty(l,d):ee[l]=d))}},css:function(s,l,d,p){var b,A,C,V=je(l);return tt.test(l)||(l=pe(V)),(C=u.cssHooks[l]||u.cssHooks[V])&&"get"in C&&(b=C.get(s,!0,d)),b===void 0&&(b=N(s,l,p)),b==="normal"&&l in T&&(b=T[l]),d===""||d?(A=parseFloat(b),d===!0||isFinite(A)?A||0:b):b}}),u.each(["height","width"],function(s,l){u.cssHooks[l]={get:function(d,p,b){if(p)return!Oe.test(u.css(d,"display"))||d.getClientRects().length&&d.getBoundingClientRect().width?se(d,l,b):B(d,Nt,function(){return se(d,l,b)})},set:function(d,p,b){var A,C=li(d),V=!S.scrollboxSize()&&C.position==="absolute",X=(V||b)&&u.css(d,"boxSizing",!1,C)==="border-box",ee=b?te(d,l,b,X,C):0;return X&&V&&(ee-=Math.ceil(d["offset"+l[0].toUpperCase()+l.slice(1)]-parseFloat(C[l])-te(d,l,"border",!1,C)-.5)),ee&&(A=kt.exec(p))&&(A[3]||"px")!=="px"&&(d.style[l]=p,p=u.css(d,l)),j(0,p,ee)}}}),u.cssHooks.marginLeft=f(S.reliableMarginLeft,function(s,l){if(l)return(parseFloat(N(s,"marginLeft"))||s.getBoundingClientRect().left-B(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),u.each({margin:"",padding:"",border:"Width"},function(s,l){u.cssHooks[s+l]={expand:function(d){for(var p=0,b={},A=typeof d=="string"?d.split(" "):[d];p<4;p++)b[s+Ze[p]+l]=A[p]||A[p-2]||A[0];return b}},s!=="margin"&&(u.cssHooks[s+l].set=j)}),u.fn.extend({css:function(s,l){return We(this,function(d,p,b){var A,C,V={},X=0;if(Array.isArray(p)){for(A=li(d),C=p.length;X<C;X++)V[p[X]]=u.css(d,p[X],!1,A);return V}return b!==void 0?u.style(d,p,b):u.css(d,p)},s,l,1<arguments.length)}}),((u.Tween=Z).prototype={constructor:Z,init:function(s,l,d,p,b,A){this.elem=s,this.prop=d,this.easing=b||u.easing._default,this.options=l,this.start=this.now=this.cur(),this.end=p,this.unit=A||(u.cssNumber[d]?"":"px")},cur:function(){var s=Z.propHooks[this.prop];return s&&s.get?s.get(this):Z.propHooks._default.get(this)},run:function(s){var l,d=Z.propHooks[this.prop];return this.options.duration?this.pos=l=u.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=l=s,this.now=(this.end-this.start)*l+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),d&&d.set?d.set(this):Z.propHooks._default.set(this),this}}).init.prototype=Z.prototype,(Z.propHooks={_default:{get:function(s){var l;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(l=u.css(s.elem,s.prop,""))&&l!=="auto"?l:0},set:function(s){u.fx.step[s.prop]?u.fx.step[s.prop](s):s.elem.nodeType!==1||!u.cssHooks[s.prop]&&s.elem.style[pe(s.prop)]==null?s.elem[s.prop]=s.now:u.style(s.elem,s.prop,s.now+s.unit)}}}).scrollTop=Z.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},u.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},u.fx=Z.prototype.init,u.fx.step={};var be,Le,De,ke,lt=/^(?:toggle|show|hide)$/,ft=/queueHooks$/;function ot(){Le&&(v.hidden===!1&&i.requestAnimationFrame?i.requestAnimationFrame(ot):i.setTimeout(ot,u.fx.interval),u.fx.tick())}function Lt(){return i.setTimeout(function(){be=void 0}),be=Date.now()}function Pt(s,l){var d,p=0,b={height:s};for(l=l?1:0;p<4;p+=2-l)b["margin"+(d=Ze[p])]=b["padding"+d]=s;return l&&(b.opacity=b.width=s),b}function Qt(s,l,d){for(var p,b=(Ft.tweeners[l]||[]).concat(Ft.tweeners["*"]),A=0,C=b.length;A<C;A++)if(p=b[A].call(d,l,s))return p}function Ft(s,l,d){var p,b,A=0,C=Ft.prefilters.length,V=u.Deferred().always(function(){delete X.elem}),X=function(){if(b)return!1;for(var Se=be||Lt(),ae=Math.max(0,ee.startTime+ee.duration-Se),ue=1-(ae/ee.duration||0),Ke=0,ut=ee.tweens.length;Ke<ut;Ke++)ee.tweens[Ke].run(ue);return V.notifyWith(s,[ee,ue,ae]),ue<1&&ut?ae:(ut||V.notifyWith(s,[ee,1,0]),V.resolveWith(s,[ee]),!1)},ee=V.promise({elem:s,props:u.extend({},l),opts:u.extend(!0,{specialEasing:{},easing:u.easing._default},d),originalProperties:l,originalOptions:d,startTime:be||Lt(),duration:d.duration,tweens:[],createTween:function(Se,ae){var ue=u.Tween(s,ee.opts,Se,ae,ee.opts.specialEasing[Se]||ee.opts.easing);return ee.tweens.push(ue),ue},stop:function(Se){var ae=0,ue=Se?ee.tweens.length:0;if(b)return this;for(b=!0;ae<ue;ae++)ee.tweens[ae].run(1);return Se?(V.notifyWith(s,[ee,1,0]),V.resolveWith(s,[ee,Se])):V.rejectWith(s,[ee,Se]),this}}),ce=ee.props;for(!function(Se,ae){var ue,Ke,ut,nt,en;for(ue in Se)if(ut=ae[Ke=je(ue)],nt=Se[ue],Array.isArray(nt)&&(ut=nt[1],nt=Se[ue]=nt[0]),ue!==Ke&&(Se[Ke]=nt,delete Se[ue]),(en=u.cssHooks[Ke])&&"expand"in en)for(ue in nt=en.expand(nt),delete Se[Ke],nt)ue in Se||(Se[ue]=nt[ue],ae[ue]=ut);else ae[Ke]=ut}(ce,ee.opts.specialEasing);A<C;A++)if(p=Ft.prefilters[A].call(ee,s,ce,ee.opts))return M(p.stop)&&(u._queueHooks(ee.elem,ee.opts.queue).stop=p.stop.bind(p)),p;return u.map(ce,Qt,ee),M(ee.opts.start)&&ee.opts.start.call(s,ee),ee.progress(ee.opts.progress).done(ee.opts.done,ee.opts.complete).fail(ee.opts.fail).always(ee.opts.always),u.fx.timer(u.extend(X,{elem:s,anim:ee,queue:ee.opts.queue})),ee}u.Animation=u.extend(Ft,{tweeners:{"*":[function(s,l){var d=this.createTween(s,l);return Te(d.elem,s,kt.exec(l),d),d}]},tweener:function(s,l){M(s)?(l=s,s=["*"]):s=s.match(Ie);for(var d,p=0,b=s.length;p<b;p++)d=s[p],Ft.tweeners[d]=Ft.tweeners[d]||[],Ft.tweeners[d].unshift(l)},prefilters:[function(s,l,d){var p,b,A,C,V,X,ee,ce,Se="width"in l||"height"in l,ae=this,ue={},Ke=s.style,ut=s.nodeType&&xe(s),nt=He.get(s,"fxshow");for(p in d.queue||((C=u._queueHooks(s,"fx")).unqueued==null&&(C.unqueued=0,V=C.empty.fire,C.empty.fire=function(){C.unqueued||V()}),C.unqueued++,ae.always(function(){ae.always(function(){C.unqueued--,u.queue(s,"fx").length||C.empty.fire()})})),l)if(b=l[p],lt.test(b)){if(delete l[p],A=A||b==="toggle",b===(ut?"hide":"show")){if(b!=="show"||!nt||nt[p]===void 0)continue;ut=!0}ue[p]=nt&&nt[p]||u.style(s,p)}if((X=!u.isEmptyObject(l))||!u.isEmptyObject(ue))for(p in Se&&s.nodeType===1&&(d.overflow=[Ke.overflow,Ke.overflowX,Ke.overflowY],(ee=nt&&nt.display)==null&&(ee=He.get(s,"display")),(ce=u.css(s,"display"))==="none"&&(ee?ce=ee:(et([s],!0),ee=s.style.display||ee,ce=u.css(s,"display"),et([s]))),(ce==="inline"||ce==="inline-block"&&ee!=null)&&u.css(s,"float")==="none"&&(X||(ae.done(function(){Ke.display=ee}),ee==null&&(ce=Ke.display,ee=ce==="none"?"":ce)),Ke.display="inline-block")),d.overflow&&(Ke.overflow="hidden",ae.always(function(){Ke.overflow=d.overflow[0],Ke.overflowX=d.overflow[1],Ke.overflowY=d.overflow[2]})),X=!1,ue)X||(nt?"hidden"in nt&&(ut=nt.hidden):nt=He.access(s,"fxshow",{display:ee}),A&&(nt.hidden=!ut),ut&&et([s],!0),ae.done(function(){for(p in ut||et([s]),He.remove(s,"fxshow"),ue)u.style(s,p,ue[p])})),X=Qt(ut?nt[p]:0,p,ae),p in nt||(nt[p]=X.start,ut&&(X.end=X.start,X.start=0))}],prefilter:function(s,l){l?Ft.prefilters.unshift(s):Ft.prefilters.push(s)}}),u.speed=function(s,l,d){var p=s&&typeof s=="object"?u.extend({},s):{complete:d||!d&&l||M(s)&&s,duration:s,easing:d&&l||l&&!M(l)&&l};return u.fx.off?p.duration=0:typeof p.duration!="number"&&(p.duration in u.fx.speeds?p.duration=u.fx.speeds[p.duration]:p.duration=u.fx.speeds._default),p.queue!=null&&p.queue!==!0||(p.queue="fx"),p.old=p.complete,p.complete=function(){M(p.old)&&p.old.call(this),p.queue&&u.dequeue(this,p.queue)},p},u.fn.extend({fadeTo:function(s,l,d,p){return this.filter(xe).css("opacity",0).show().end().animate({opacity:l},s,d,p)},animate:function(s,l,d,p){var b=u.isEmptyObject(s),A=u.speed(l,d,p),C=function(){var V=Ft(this,u.extend({},s),A);(b||He.get(this,"finish"))&&V.stop(!0)};return C.finish=C,b||A.queue===!1?this.each(C):this.queue(A.queue,C)},stop:function(s,l,d){var p=function(b){var A=b.stop;delete b.stop,A(d)};return typeof s!="string"&&(d=l,l=s,s=void 0),l&&this.queue(s||"fx",[]),this.each(function(){var b=!0,A=s!=null&&s+"queueHooks",C=u.timers,V=He.get(this);if(A)V[A]&&V[A].stop&&p(V[A]);else for(A in V)V[A]&&V[A].stop&&ft.test(A)&&p(V[A]);for(A=C.length;A--;)C[A].elem!==this||s!=null&&C[A].queue!==s||(C[A].anim.stop(d),b=!1,C.splice(A,1));!b&&d||u.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var l,d=He.get(this),p=d[s+"queue"],b=d[s+"queueHooks"],A=u.timers,C=p?p.length:0;for(d.finish=!0,u.queue(this,s,[]),b&&b.stop&&b.stop.call(this,!0),l=A.length;l--;)A[l].elem===this&&A[l].queue===s&&(A[l].anim.stop(!0),A.splice(l,1));for(l=0;l<C;l++)p[l]&&p[l].finish&&p[l].finish.call(this);delete d.finish})}}),u.each(["toggle","show","hide"],function(s,l){var d=u.fn[l];u.fn[l]=function(p,b,A){return p==null||typeof p=="boolean"?d.apply(this,arguments):this.animate(Pt(l,!0),p,b,A)}}),u.each({slideDown:Pt("show"),slideUp:Pt("hide"),slideToggle:Pt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,l){u.fn[s]=function(d,p,b){return this.animate(l,d,p,b)}}),u.timers=[],u.fx.tick=function(){var s,l=0,d=u.timers;for(be=Date.now();l<d.length;l++)(s=d[l])()||d[l]!==s||d.splice(l--,1);d.length||u.fx.stop(),be=void 0},u.fx.timer=function(s){u.timers.push(s),u.fx.start()},u.fx.interval=13,u.fx.start=function(){Le||(Le=!0,ot())},u.fx.stop=function(){Le=null},u.fx.speeds={slow:600,fast:200,_default:400},u.fn.delay=function(s,l){return s=u.fx&&u.fx.speeds[s]||s,l=l||"fx",this.queue(l,function(d,p){var b=i.setTimeout(d,s);p.stop=function(){i.clearTimeout(b)}})},De=v.createElement("input"),ke=v.createElement("select").appendChild(v.createElement("option")),De.type="checkbox",S.checkOn=De.value!=="",S.optSelected=ke.selected,(De=v.createElement("input")).value="t",De.type="radio",S.radioValue=De.value==="t";var Dt,ct=u.expr.attrHandle;u.fn.extend({attr:function(s,l){return We(this,u.attr,s,l,1<arguments.length)},removeAttr:function(s){return this.each(function(){u.removeAttr(this,s)})}}),u.extend({attr:function(s,l,d){var p,b,A=s.nodeType;if(A!==3&&A!==8&&A!==2)return typeof s.getAttribute>"u"?u.prop(s,l,d):(A===1&&u.isXMLDoc(s)||(b=u.attrHooks[l.toLowerCase()]||(u.expr.match.bool.test(l)?Dt:void 0)),d!==void 0?d===null?void u.removeAttr(s,l):b&&"set"in b&&(p=b.set(s,d,l))!==void 0?p:(s.setAttribute(l,d+""),d):b&&"get"in b&&(p=b.get(s,l))!==null?p:(p=u.find.attr(s,l))==null?void 0:p)},attrHooks:{type:{set:function(s,l){if(!S.radioValue&&l==="radio"&&Y(s,"input")){var d=s.value;return s.setAttribute("type",l),d&&(s.value=d),l}}}},removeAttr:function(s,l){var d,p=0,b=l&&l.match(Ie);if(b&&s.nodeType===1)for(;d=b[p++];)s.removeAttribute(d)}}),Dt={set:function(s,l,d){return l===!1?u.removeAttr(s,d):s.setAttribute(d,d),d}},u.each(u.expr.match.bool.source.match(/\w+/g),function(s,l){var d=ct[l]||u.find.attr;ct[l]=function(p,b,A){var C,V,X=b.toLowerCase();return A||(V=ct[X],ct[X]=C,C=d(p,b,A)!=null?X:null,ct[X]=V),C}});var dn=/^(?:input|select|textarea|button)$/i,Ht=/^(?:a|area)$/i;function fn(s){return(s.match(Ie)||[]).join(" ")}function Nn(s){return s.getAttribute&&s.getAttribute("class")||""}function wn(s){return Array.isArray(s)?s:typeof s=="string"&&s.match(Ie)||[]}u.fn.extend({prop:function(s,l){return We(this,u.prop,s,l,1<arguments.length)},removeProp:function(s){return this.each(function(){delete this[u.propFix[s]||s]})}}),u.extend({prop:function(s,l,d){var p,b,A=s.nodeType;if(A!==3&&A!==8&&A!==2)return A===1&&u.isXMLDoc(s)||(l=u.propFix[l]||l,b=u.propHooks[l]),d!==void 0?b&&"set"in b&&(p=b.set(s,d,l))!==void 0?p:s[l]=d:b&&"get"in b&&(p=b.get(s,l))!==null?p:s[l]},propHooks:{tabIndex:{get:function(s){var l=u.find.attr(s,"tabindex");return l?parseInt(l,10):dn.test(s.nodeName)||Ht.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),S.optSelected||(u.propHooks.selected={get:function(s){var l=s.parentNode;return l&&l.parentNode&&l.parentNode.selectedIndex,null},set:function(s){var l=s.parentNode;l&&(l.selectedIndex,l.parentNode&&l.parentNode.selectedIndex)}}),u.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){u.propFix[this.toLowerCase()]=this}),u.fn.extend({addClass:function(s){var l,d,p,b,A,C,V,X=0;if(M(s))return this.each(function(ee){u(this).addClass(s.call(this,ee,Nn(this)))});if((l=wn(s)).length){for(;d=this[X++];)if(b=Nn(d),p=d.nodeType===1&&" "+fn(b)+" "){for(C=0;A=l[C++];)p.indexOf(" "+A+" ")<0&&(p+=A+" ");b!==(V=fn(p))&&d.setAttribute("class",V)}}return this},removeClass:function(s){var l,d,p,b,A,C,V,X=0;if(M(s))return this.each(function(ee){u(this).removeClass(s.call(this,ee,Nn(this)))});if(!arguments.length)return this.attr("class","");if((l=wn(s)).length){for(;d=this[X++];)if(b=Nn(d),p=d.nodeType===1&&" "+fn(b)+" "){for(C=0;A=l[C++];)for(;-1<p.indexOf(" "+A+" ");)p=p.replace(" "+A+" "," ");b!==(V=fn(p))&&d.setAttribute("class",V)}}return this},toggleClass:function(s,l){var d=typeof s,p=d==="string"||Array.isArray(s);return typeof l=="boolean"&&p?l?this.addClass(s):this.removeClass(s):M(s)?this.each(function(b){u(this).toggleClass(s.call(this,b,Nn(this),l),l)}):this.each(function(){var b,A,C,V;if(p)for(A=0,C=u(this),V=wn(s);b=V[A++];)C.hasClass(b)?C.removeClass(b):C.addClass(b);else s!==void 0&&d!=="boolean"||((b=Nn(this))&&He.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||s===!1?"":He.get(this,"__className__")||""))})},hasClass:function(s){var l,d,p=0;for(l=" "+s+" ";d=this[p++];)if(d.nodeType===1&&-1<(" "+fn(Nn(d))+" ").indexOf(l))return!0;return!1}});var ji=/\r/g;u.fn.extend({val:function(s){var l,d,p,b=this[0];return arguments.length?(p=M(s),this.each(function(A){var C;this.nodeType===1&&((C=p?s.call(this,A,u(this).val()):s)==null?C="":typeof C=="number"?C+="":Array.isArray(C)&&(C=u.map(C,function(V){return V==null?"":V+""})),(l=u.valHooks[this.type]||u.valHooks[this.nodeName.toLowerCase()])&&"set"in l&&l.set(this,C,"value")!==void 0||(this.value=C))})):b?(l=u.valHooks[b.type]||u.valHooks[b.nodeName.toLowerCase()])&&"get"in l&&(d=l.get(b,"value"))!==void 0?d:typeof(d=b.value)=="string"?d.replace(ji,""):d??"":void 0}}),u.extend({valHooks:{option:{get:function(s){var l=u.find.attr(s,"value");return l??fn(u.text(s))}},select:{get:function(s){var l,d,p,b=s.options,A=s.selectedIndex,C=s.type==="select-one",V=C?null:[],X=C?A+1:b.length;for(p=A<0?X:C?A:0;p<X;p++)if(((d=b[p]).selected||p===A)&&!d.disabled&&(!d.parentNode.disabled||!Y(d.parentNode,"optgroup"))){if(l=u(d).val(),C)return l;V.push(l)}return V},set:function(s,l){for(var d,p,b=s.options,A=u.makeArray(l),C=b.length;C--;)((p=b[C]).selected=-1<u.inArray(u.valHooks.option.get(p),A))&&(d=!0);return d||(s.selectedIndex=-1),A}}}}),u.each(["radio","checkbox"],function(){u.valHooks[this]={set:function(s,l){if(Array.isArray(l))return s.checked=-1<u.inArray(u(s).val(),l)}},S.checkOn||(u.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})}),S.focusin="onfocusin"in i;var jt=/^(?:focusinfocus|focusoutblur)$/,Ln=function(s){s.stopPropagation()};u.extend(u.event,{trigger:function(s,l,d,p){var b,A,C,V,X,ee,ce,Se,ae=[d||v],ue=m.call(s,"type")?s.type:s,Ke=m.call(s,"namespace")?s.namespace.split("."):[];if(A=Se=C=d=d||v,d.nodeType!==3&&d.nodeType!==8&&!jt.test(ue+u.event.triggered)&&(-1<ue.indexOf(".")&&(ue=(Ke=ue.split(".")).shift(),Ke.sort()),X=ue.indexOf(":")<0&&"on"+ue,(s=s[u.expando]?s:new u.Event(ue,typeof s=="object"&&s)).isTrigger=p?2:3,s.namespace=Ke.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+Ke.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=d),l=l==null?[s]:u.makeArray(l,[s]),ce=u.event.special[ue]||{},p||!ce.trigger||ce.trigger.apply(d,l)!==!1)){if(!p&&!ce.noBubble&&!P(d)){for(V=ce.delegateType||ue,jt.test(V+ue)||(A=A.parentNode);A;A=A.parentNode)ae.push(A),C=A;C===(d.ownerDocument||v)&&ae.push(C.defaultView||C.parentWindow||i)}for(b=0;(A=ae[b++])&&!s.isPropagationStopped();)Se=A,s.type=1<b?V:ce.bindType||ue,(ee=(He.get(A,"events")||Object.create(null))[s.type]&&He.get(A,"handle"))&&ee.apply(A,l),(ee=X&&A[X])&&ee.apply&&pt(A)&&(s.result=ee.apply(A,l),s.result===!1&&s.preventDefault());return s.type=ue,p||s.isDefaultPrevented()||ce._default&&ce._default.apply(ae.pop(),l)!==!1||!pt(d)||X&&M(d[ue])&&!P(d)&&((C=d[X])&&(d[X]=null),u.event.triggered=ue,s.isPropagationStopped()&&Se.addEventListener(ue,Ln),d[ue](),s.isPropagationStopped()&&Se.removeEventListener(ue,Ln),u.event.triggered=void 0,C&&(d[X]=C)),s.result}},simulate:function(s,l,d){var p=u.extend(new u.Event,d,{type:s,isSimulated:!0});u.event.trigger(p,null,l)}}),u.fn.extend({trigger:function(s,l){return this.each(function(){u.event.trigger(s,l,this)})},triggerHandler:function(s,l){var d=this[0];if(d)return u.event.trigger(s,l,d,!0)}}),S.focusin||u.each({focus:"focusin",blur:"focusout"},function(s,l){var d=function(p){u.event.simulate(l,p.target,u.event.fix(p))};u.event.special[l]={setup:function(){var p=this.ownerDocument||this.document||this,b=He.access(p,l);b||p.addEventListener(s,d,!0),He.access(p,l,(b||0)+1)},teardown:function(){var p=this.ownerDocument||this.document||this,b=He.access(p,l)-1;b?He.access(p,l,b):(p.removeEventListener(s,d,!0),He.remove(p,l))}}});var yn=i.location,Sn={guid:Date.now()},bn=/\?/;u.parseXML=function(s){var l;if(!s||typeof s!="string")return null;try{l=new i.DOMParser().parseFromString(s,"text/xml")}catch{l=void 0}return l&&!l.getElementsByTagName("parsererror").length||u.error("Invalid XML: "+s),l};var qr=/\[\]$/,ci=/\r?\n/g,eu=/^(?:submit|button|image|reset|file)$/i,tu=/^(?:input|select|textarea|keygen)/i;function uo(s,l,d,p){var b;if(Array.isArray(l))u.each(l,function(A,C){d||qr.test(s)?p(s,C):uo(s+"["+(typeof C=="object"&&C!=null?A:"")+"]",C,d,p)});else if(d||k(l)!=="object")p(s,l);else for(b in l)uo(s+"["+b+"]",l[b],d,p)}u.param=function(s,l){var d,p=[],b=function(A,C){var V=M(C)?C():C;p[p.length]=encodeURIComponent(A)+"="+encodeURIComponent(V??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!u.isPlainObject(s))u.each(s,function(){b(this.name,this.value)});else for(d in s)uo(d,s[d],l,b);return p.join("&")},u.fn.extend({serialize:function(){return u.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=u.prop(this,"elements");return s?u.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!u(this).is(":disabled")&&tu.test(this.nodeName)&&!eu.test(s)&&(this.checked||!vt.test(s))}).map(function(s,l){var d=u(this).val();return d==null?null:Array.isArray(d)?u.map(d,function(p){return{name:l.name,value:p.replace(ci,`\r
`)}}):{name:l.name,value:d.replace(ci,`\r
`)}}).get()}});var nu=/%20/g,iu=/#.*$/,ru=/([?&])_=[^&]*/,su=/^(.*?):[ \t]*([^\r\n]*)$/gm,ou=/^(?:GET|HEAD)$/,au=/^\/\//,Qa={},fo={},el="*/".concat("*"),ho=v.createElement("a");function tl(s){return function(l,d){typeof l!="string"&&(d=l,l="*");var p,b=0,A=l.toLowerCase().match(Ie)||[];if(M(d))for(;p=A[b++];)p[0]==="+"?(p=p.slice(1)||"*",(s[p]=s[p]||[]).unshift(d)):(s[p]=s[p]||[]).push(d)}}function nl(s,l,d,p){var b={},A=s===fo;function C(V){var X;return b[V]=!0,u.each(s[V]||[],function(ee,ce){var Se=ce(l,d,p);return typeof Se!="string"||A||b[Se]?A?!(X=Se):void 0:(l.dataTypes.unshift(Se),C(Se),!1)}),X}return C(l.dataTypes[0])||!b["*"]&&C("*")}function po(s,l){var d,p,b=u.ajaxSettings.flatOptions||{};for(d in l)l[d]!==void 0&&((b[d]?s:p||(p={}))[d]=l[d]);return p&&u.extend(!0,s,p),s}ho.href=yn.href,u.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(yn.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":el,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":u.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,l){return l?po(po(s,u.ajaxSettings),l):po(u.ajaxSettings,s)},ajaxPrefilter:tl(Qa),ajaxTransport:tl(fo),ajax:function(s,l){typeof s=="object"&&(l=s,s=void 0),l=l||{};var d,p,b,A,C,V,X,ee,ce,Se,ae=u.ajaxSetup({},l),ue=ae.context||ae,Ke=ae.context&&(ue.nodeType||ue.jquery)?u(ue):u.event,ut=u.Deferred(),nt=u.Callbacks("once memory"),en=ae.statusCode||{},hn={},Hn={},qt="canceled",St={readyState:0,getResponseHeader:function(zt){var tn;if(X){if(!A)for(A={};tn=su.exec(b);)A[tn[1].toLowerCase()+" "]=(A[tn[1].toLowerCase()+" "]||[]).concat(tn[2]);tn=A[zt.toLowerCase()+" "]}return tn==null?null:tn.join(", ")},getAllResponseHeaders:function(){return X?b:null},setRequestHeader:function(zt,tn){return X==null&&(zt=Hn[zt.toLowerCase()]=Hn[zt.toLowerCase()]||zt,hn[zt]=tn),this},overrideMimeType:function(zt){return X==null&&(ae.mimeType=zt),this},statusCode:function(zt){var tn;if(zt)if(X)St.always(zt[St.status]);else for(tn in zt)en[tn]=[en[tn],zt[tn]];return this},abort:function(zt){var tn=zt||qt;return d&&d.abort(tn),Fn(0,tn),this}};if(ut.promise(St),ae.url=((s||ae.url||yn.href)+"").replace(au,yn.protocol+"//"),ae.type=l.method||l.type||ae.method||ae.type,ae.dataTypes=(ae.dataType||"*").toLowerCase().match(Ie)||[""],ae.crossDomain==null){V=v.createElement("a");try{V.href=ae.url,V.href=V.href,ae.crossDomain=ho.protocol+"//"+ho.host!=V.protocol+"//"+V.host}catch{ae.crossDomain=!0}}if(ae.data&&ae.processData&&typeof ae.data!="string"&&(ae.data=u.param(ae.data,ae.traditional)),nl(Qa,ae,l,St),X)return St;for(ce in(ee=u.event&&ae.global)&&u.active++==0&&u.event.trigger("ajaxStart"),ae.type=ae.type.toUpperCase(),ae.hasContent=!ou.test(ae.type),p=ae.url.replace(iu,""),ae.hasContent?ae.data&&ae.processData&&(ae.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(ae.data=ae.data.replace(nu,"+")):(Se=ae.url.slice(p.length),ae.data&&(ae.processData||typeof ae.data=="string")&&(p+=(bn.test(p)?"&":"?")+ae.data,delete ae.data),ae.cache===!1&&(p=p.replace(ru,"$1"),Se=(bn.test(p)?"&":"?")+"_="+Sn.guid+++Se),ae.url=p+Se),ae.ifModified&&(u.lastModified[p]&&St.setRequestHeader("If-Modified-Since",u.lastModified[p]),u.etag[p]&&St.setRequestHeader("If-None-Match",u.etag[p])),(ae.data&&ae.hasContent&&ae.contentType!==!1||l.contentType)&&St.setRequestHeader("Content-Type",ae.contentType),St.setRequestHeader("Accept",ae.dataTypes[0]&&ae.accepts[ae.dataTypes[0]]?ae.accepts[ae.dataTypes[0]]+(ae.dataTypes[0]!=="*"?", "+el+"; q=0.01":""):ae.accepts["*"]),ae.headers)St.setRequestHeader(ce,ae.headers[ce]);if(ae.beforeSend&&(ae.beforeSend.call(ue,St,ae)===!1||X))return St.abort();if(qt="abort",nt.add(ae.complete),St.done(ae.success),St.fail(ae.error),d=nl(fo,ae,l,St)){if(St.readyState=1,ee&&Ke.trigger("ajaxSend",[St,ae]),X)return St;ae.async&&0<ae.timeout&&(C=i.setTimeout(function(){St.abort("timeout")},ae.timeout));try{X=!1,d.send(hn,Fn)}catch(zt){if(X)throw zt;Fn(-1,zt)}}else Fn(-1,"No Transport");function Fn(zt,tn,jr,ds){var Vn,Yi,pr,On,mr,Yn=tn;X||(X=!0,C&&i.clearTimeout(C),d=void 0,b=ds||"",St.readyState=0<zt?4:0,Vn=200<=zt&&zt<300||zt===304,jr&&(On=function(nn,Gn,Wn){for(var ui,bt,Gt,pn,Xn=nn.contents,ln=nn.dataTypes;ln[0]==="*";)ln.shift(),ui===void 0&&(ui=nn.mimeType||Gn.getResponseHeader("Content-Type"));if(ui){for(bt in Xn)if(Xn[bt]&&Xn[bt].test(ui)){ln.unshift(bt);break}}if(ln[0]in Wn)Gt=ln[0];else{for(bt in Wn){if(!ln[0]||nn.converters[bt+" "+ln[0]]){Gt=bt;break}pn||(pn=bt)}Gt=Gt||pn}if(Gt)return Gt!==ln[0]&&ln.unshift(Gt),Wn[Gt]}(ae,St,jr)),!Vn&&-1<u.inArray("script",ae.dataTypes)&&(ae.converters["text script"]=function(){}),On=function(nn,Gn,Wn,ui){var bt,Gt,pn,Xn,ln,qn={},gr=nn.dataTypes.slice();if(gr[1])for(pn in nn.converters)qn[pn.toLowerCase()]=nn.converters[pn];for(Gt=gr.shift();Gt;)if(nn.responseFields[Gt]&&(Wn[nn.responseFields[Gt]]=Gn),!ln&&ui&&nn.dataFilter&&(Gn=nn.dataFilter(Gn,nn.dataType)),ln=Gt,Gt=gr.shift()){if(Gt==="*")Gt=ln;else if(ln!=="*"&&ln!==Gt){if(!(pn=qn[ln+" "+Gt]||qn["* "+Gt])){for(bt in qn)if((Xn=bt.split(" "))[1]===Gt&&(pn=qn[ln+" "+Xn[0]]||qn["* "+Xn[0]])){pn===!0?pn=qn[bt]:qn[bt]!==!0&&(Gt=Xn[0],gr.unshift(Xn[1]));break}}if(pn!==!0)if(pn&&nn.throws)Gn=pn(Gn);else try{Gn=pn(Gn)}catch(fs){return{state:"parsererror",error:pn?fs:"No conversion from "+ln+" to "+Gt}}}}return{state:"success",data:Gn}}(ae,On,St,Vn),Vn?(ae.ifModified&&((mr=St.getResponseHeader("Last-Modified"))&&(u.lastModified[p]=mr),(mr=St.getResponseHeader("etag"))&&(u.etag[p]=mr)),zt===204||ae.type==="HEAD"?Yn="nocontent":zt===304?Yn="notmodified":(Yn=On.state,Yi=On.data,Vn=!(pr=On.error))):(pr=Yn,!zt&&Yn||(Yn="error",zt<0&&(zt=0))),St.status=zt,St.statusText=(tn||Yn)+"",Vn?ut.resolveWith(ue,[Yi,Yn,St]):ut.rejectWith(ue,[St,Yn,pr]),St.statusCode(en),en=void 0,ee&&Ke.trigger(Vn?"ajaxSuccess":"ajaxError",[St,ae,Vn?Yi:pr]),nt.fireWith(ue,[St,Yn]),ee&&(Ke.trigger("ajaxComplete",[St,ae]),--u.active||u.event.trigger("ajaxStop")))}return St},getJSON:function(s,l,d){return u.get(s,l,d,"json")},getScript:function(s,l){return u.get(s,void 0,l,"script")}}),u.each(["get","post"],function(s,l){u[l]=function(d,p,b,A){return M(p)&&(A=A||b,b=p,p=void 0),u.ajax(u.extend({url:d,type:l,dataType:A,data:p,success:b},u.isPlainObject(d)&&d))}}),u.ajaxPrefilter(function(s){var l;for(l in s.headers)l.toLowerCase()==="content-type"&&(s.contentType=s.headers[l]||"")}),u._evalUrl=function(s,l,d){return u.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(p){u.globalEval(p,l,d)}})},u.fn.extend({wrapAll:function(s){var l;return this[0]&&(M(s)&&(s=s.call(this[0])),l=u(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&l.insertBefore(this[0]),l.map(function(){for(var d=this;d.firstElementChild;)d=d.firstElementChild;return d}).append(this)),this},wrapInner:function(s){return M(s)?this.each(function(l){u(this).wrapInner(s.call(this,l))}):this.each(function(){var l=u(this),d=l.contents();d.length?d.wrapAll(s):l.append(s)})},wrap:function(s){var l=M(s);return this.each(function(d){u(this).wrapAll(l?s.call(this,d):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){u(this).replaceWith(this.childNodes)}),this}}),u.expr.pseudos.hidden=function(s){return!u.expr.pseudos.visible(s)},u.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},u.ajaxSettings.xhr=function(){try{return new i.XMLHttpRequest}catch{}};var lu={0:200,1223:204},$r=u.ajaxSettings.xhr();S.cors=!!$r&&"withCredentials"in $r,S.ajax=$r=!!$r,u.ajaxTransport(function(s){var l,d;if(S.cors||$r&&!s.crossDomain)return{send:function(p,b){var A,C=s.xhr();if(C.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(A in s.xhrFields)C[A]=s.xhrFields[A];for(A in s.mimeType&&C.overrideMimeType&&C.overrideMimeType(s.mimeType),s.crossDomain||p["X-Requested-With"]||(p["X-Requested-With"]="XMLHttpRequest"),p)C.setRequestHeader(A,p[A]);l=function(V){return function(){l&&(l=d=C.onload=C.onerror=C.onabort=C.ontimeout=C.onreadystatechange=null,V==="abort"?C.abort():V==="error"?typeof C.status!="number"?b(0,"error"):b(C.status,C.statusText):b(lu[C.status]||C.status,C.statusText,(C.responseType||"text")!=="text"||typeof C.responseText!="string"?{binary:C.response}:{text:C.responseText},C.getAllResponseHeaders()))}},C.onload=l(),d=C.onerror=C.ontimeout=l("error"),C.onabort!==void 0?C.onabort=d:C.onreadystatechange=function(){C.readyState===4&&i.setTimeout(function(){l&&d()})},l=l("abort");try{C.send(s.hasContent&&s.data||null)}catch(V){if(l)throw V}},abort:function(){l&&l()}}}),u.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),u.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return u.globalEval(s),s}}}),u.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),u.ajaxTransport("script",function(s){var l,d;if(s.crossDomain||s.scriptAttrs)return{send:function(p,b){l=u("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",d=function(A){l.remove(),d=null,A&&b(A.type==="error"?404:200,A.type)}),v.head.appendChild(l[0])},abort:function(){d&&d()}}});var il,rl=[],mo=/(=)\?(?=&|$)|\?\?/;u.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=rl.pop()||u.expando+"_"+Sn.guid++;return this[s]=!0,s}}),u.ajaxPrefilter("json jsonp",function(s,l,d){var p,b,A,C=s.jsonp!==!1&&(mo.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&mo.test(s.data)&&"data");if(C||s.dataTypes[0]==="jsonp")return p=s.jsonpCallback=M(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,C?s[C]=s[C].replace(mo,"$1"+p):s.jsonp!==!1&&(s.url+=(bn.test(s.url)?"&":"?")+s.jsonp+"="+p),s.converters["script json"]=function(){return A||u.error(p+" was not called"),A[0]},s.dataTypes[0]="json",b=i[p],i[p]=function(){A=arguments},d.always(function(){b===void 0?u(i).removeProp(p):i[p]=b,s[p]&&(s.jsonpCallback=l.jsonpCallback,rl.push(p)),A&&M(b)&&b(A[0]),A=b=void 0}),"script"}),S.createHTMLDocument=((il=v.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",il.childNodes.length===2),u.parseHTML=function(s,l,d){return typeof s!="string"?[]:(typeof l=="boolean"&&(d=l,l=!1),l||(S.createHTMLDocument?((p=(l=v.implementation.createHTMLDocument("")).createElement("base")).href=v.location.href,l.head.appendChild(p)):l=v),A=!d&&[],(b=me.exec(s))?[l.createElement(b[1])]:(b=xt([s],l,A),A&&A.length&&u(A).remove(),u.merge([],b.childNodes)));var p,b,A},u.fn.load=function(s,l,d){var p,b,A,C=this,V=s.indexOf(" ");return-1<V&&(p=fn(s.slice(V)),s=s.slice(0,V)),M(l)?(d=l,l=void 0):l&&typeof l=="object"&&(b="POST"),0<C.length&&u.ajax({url:s,type:b||"GET",dataType:"html",data:l}).done(function(X){A=arguments,C.html(p?u("<div>").append(u.parseHTML(X)).find(p):X)}).always(d&&function(X,ee){C.each(function(){d.apply(this,A||[X.responseText,ee,X])})}),this},u.expr.pseudos.animated=function(s){return u.grep(u.timers,function(l){return s===l.elem}).length},u.offset={setOffset:function(s,l,d){var p,b,A,C,V,X,ee=u.css(s,"position"),ce=u(s),Se={};ee==="static"&&(s.style.position="relative"),V=ce.offset(),A=u.css(s,"top"),X=u.css(s,"left"),(ee==="absolute"||ee==="fixed")&&-1<(A+X).indexOf("auto")?(C=(p=ce.position()).top,b=p.left):(C=parseFloat(A)||0,b=parseFloat(X)||0),M(l)&&(l=l.call(s,d,u.extend({},V))),l.top!=null&&(Se.top=l.top-V.top+C),l.left!=null&&(Se.left=l.left-V.left+b),"using"in l?l.using.call(s,Se):(typeof Se.top=="number"&&(Se.top+="px"),typeof Se.left=="number"&&(Se.left+="px"),ce.css(Se))}},u.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(b){u.offset.setOffset(this,s,b)});var l,d,p=this[0];return p?p.getClientRects().length?(l=p.getBoundingClientRect(),d=p.ownerDocument.defaultView,{top:l.top+d.pageYOffset,left:l.left+d.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var s,l,d,p=this[0],b={top:0,left:0};if(u.css(p,"position")==="fixed")l=p.getBoundingClientRect();else{for(l=this.offset(),d=p.ownerDocument,s=p.offsetParent||d.documentElement;s&&(s===d.body||s===d.documentElement)&&u.css(s,"position")==="static";)s=s.parentNode;s&&s!==p&&s.nodeType===1&&((b=u(s).offset()).top+=u.css(s,"borderTopWidth",!0),b.left+=u.css(s,"borderLeftWidth",!0))}return{top:l.top-b.top-u.css(p,"marginTop",!0),left:l.left-b.left-u.css(p,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&u.css(s,"position")==="static";)s=s.offsetParent;return s||U})}}),u.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,l){var d=l==="pageYOffset";u.fn[s]=function(p){return We(this,function(b,A,C){var V;if(P(b)?V=b:b.nodeType===9&&(V=b.defaultView),C===void 0)return V?V[l]:b[A];V?V.scrollTo(d?V.pageXOffset:C,d?C:V.pageYOffset):b[A]=C},s,p,arguments.length)}}),u.each(["top","left"],function(s,l){u.cssHooks[l]=f(S.pixelPosition,function(d,p){if(p)return p=N(d,l),vi.test(p)?u(d).position()[l]+"px":p})}),u.each({Height:"height",Width:"width"},function(s,l){u.each({padding:"inner"+s,content:l,"":"outer"+s},function(d,p){u.fn[p]=function(b,A){var C=arguments.length&&(d||typeof b!="boolean"),V=d||(b===!0||A===!0?"margin":"border");return We(this,function(X,ee,ce){var Se;return P(X)?p.indexOf("outer")===0?X["inner"+s]:X.document.documentElement["client"+s]:X.nodeType===9?(Se=X.documentElement,Math.max(X.body["scroll"+s],Se["scroll"+s],X.body["offset"+s],Se["offset"+s],Se["client"+s])):ce===void 0?u.css(X,ee,V):u.style(X,ee,ce,V)},l,C?b:void 0,C)}})}),u.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,l){u.fn[l]=function(d){return this.on(l,d)}}),u.fn.extend({bind:function(s,l,d){return this.on(s,null,l,d)},unbind:function(s,l){return this.off(s,null,l)},delegate:function(s,l,d,p){return this.on(l,s,d,p)},undelegate:function(s,l,d){return arguments.length===1?this.off(s,"**"):this.off(l,s||"**",d)},hover:function(s,l){return this.mouseenter(s).mouseleave(l||s)}}),u.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,l){u.fn[l]=function(d,p){return 0<arguments.length?this.on(l,null,d,p):this.trigger(l)}});var cu=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;u.proxy=function(s,l){var d,p,b;if(typeof l=="string"&&(d=s[l],l=s,s=d),M(s))return p=r.call(arguments,2),(b=function(){return s.apply(l||this,p.concat(r.call(arguments)))}).guid=s.guid=s.guid||u.guid++,b},u.holdReady=function(s){s?u.readyWait++:u.ready(!0)},u.isArray=Array.isArray,u.parseJSON=JSON.parse,u.nodeName=Y,u.isFunction=M,u.isWindow=P,u.camelCase=je,u.type=k,u.now=Date.now,u.isNumeric=function(s){var l=u.type(s);return(l==="number"||l==="string")&&!isNaN(s-parseFloat(s))},u.trim=function(s){return s==null?"":(s+"").replace(cu,"")},typeof define=="function"&&define.amd&&define("jquery",[],function(){return u});var uu=i.jQuery,du=i.$;return u.noConflict=function(s){return i.$===u&&(i.$=du),s&&i.jQuery===u&&(i.jQuery=uu),u},typeof e>"u"&&(i.jQuery=i.$=u),u});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Va="172",Mu=0,hl=1,Tu=2,gc=1,wu=2,wi=3,qi=0,Bn=1,Ai=2,Gi=0,Ir=1,pl=2,ml=3,gl=4,Au=5,sr=100,Cu=101,Ru=102,Lu=103,Pu=104,Du=200,Iu=201,Uu=202,Nu=203,ea=204,ta=205,Fu=206,Ou=207,ku=208,Bu=209,zu=210,Hu=211,Vu=212,Gu=213,Wu=214,na=0,ia=1,ra=2,Fr=3,sa=4,oa=5,aa=6,la=7,_c=0,Xu=1,qu=2,Wi=0,$u=1,ju=2,Yu=3,Ku=4,Zu=5,Ju=6,Qu=7,vc=300,Or=301,kr=302,ca=303,ua=304,ro=306,da=1e3,ar=1001,fa=1002,ai=1003,ed=1004,xs=1005,hi=1006,bo=1007,lr=1008,Pi=1009,xc=1010,yc=1011,is=1012,Ga=1013,ur=1014,Ci=1015,ss=1016,Wa=1017,Xa=1018,Br=1020,Sc=35902,bc=1021,Ec=1022,oi=1023,Mc=1024,Tc=1025,Ur=1026,zr=1027,wc=1028,qa=1029,Ac=1030,$a=1031,ja=1033,$s=33776,js=33777,Ys=33778,Ks=33779,ha=35840,pa=35841,ma=35842,ga=35843,_a=36196,va=37492,xa=37496,ya=37808,Sa=37809,ba=37810,Ea=37811,Ma=37812,Ta=37813,wa=37814,Aa=37815,Ca=37816,Ra=37817,La=37818,Pa=37819,Da=37820,Ia=37821,Zs=36492,Ua=36494,Na=36495,Cc=36283,Fa=36284,Oa=36285,ka=36286,td=3200,nd=3201,id=0,rd=1,Hi="",Zn="srgb",Hr="srgb-linear",eo="linear",$t="srgb",_r=7680,_l=519,sd=512,od=513,ad=514,Rc=515,ld=516,cd=517,ud=518,dd=519,vl=35044,xl="300 es",Ri=2e3,to=2001;class Wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Js=Math.PI/180,Ba=180/Math.PI;function os(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function Ut(i,e,t){return Math.max(e,Math.min(t,i))}function fd(i,e){return(i%e+e)%e}function Eo(i,e,t){return(1-t)*i+t*e}function Kr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Zt{constructor(e=0,t=0){Zt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ut(this.x,e.x,t.x),this.y=Ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ut(this.x,e,t),this.y=Ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*n-a*r+e.x,this.y=o*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(e,t,n,r,o,a,c,h,g){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,a,c,h,g)}set(e,t,n,r,o,a,c,h,g){const m=this.elements;return m[0]=e,m[1]=r,m[2]=c,m[3]=t,m[4]=o,m[5]=h,m[6]=n,m[7]=a,m[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,a=n[0],c=n[3],h=n[6],g=n[1],m=n[4],x=n[7],y=n[2],S=n[5],M=n[8],P=r[0],v=r[3],_=r[6],q=r[1],k=r[4],F=r[7],u=r[2],K=r[5],W=r[8];return o[0]=a*P+c*q+h*u,o[3]=a*v+c*k+h*K,o[6]=a*_+c*F+h*W,o[1]=g*P+m*q+x*u,o[4]=g*v+m*k+x*K,o[7]=g*_+m*F+x*W,o[2]=y*P+S*q+M*u,o[5]=y*v+S*k+M*K,o[8]=y*_+S*F+M*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],a=e[4],c=e[5],h=e[6],g=e[7],m=e[8];return t*a*m-t*c*g-n*o*m+n*c*h+r*o*g-r*a*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],a=e[4],c=e[5],h=e[6],g=e[7],m=e[8],x=m*a-c*g,y=c*h-m*o,S=g*o-a*h,M=t*x+n*y+r*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const P=1/M;return e[0]=x*P,e[1]=(r*g-m*n)*P,e[2]=(c*n-r*a)*P,e[3]=y*P,e[4]=(m*t-r*h)*P,e[5]=(r*o-c*t)*P,e[6]=S*P,e[7]=(n*h-g*t)*P,e[8]=(a*t-n*o)*P,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,o,a,c){const h=Math.cos(o),g=Math.sin(o);return this.set(n*h,n*g,-n*(h*a+g*c)+a+e,-r*g,r*h,-r*(-g*a+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Mo.makeScale(e,t)),this}rotate(e){return this.premultiply(Mo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new wt;function Lc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hd(){const i=rs("canvas");return i.style.display="block",i}const yl={};function Pr(i){i in yl||(yl[i]=!0,console.warn(i))}function pd(i,e,t){return new Promise(function(n,r){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function md(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gd(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Sl=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _d(){const i={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(r,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===$t&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===$t&&(r.r=Nr(r.r),r.g=Nr(r.g),r.b=Nr(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hi?eo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,a){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hr]:{primaries:e,whitePoint:n,transfer:eo,toXYZ:Sl,fromXYZ:bl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zn},outputColorSpaceConfig:{drawingBufferColorSpace:Zn}},[Zn]:{primaries:e,whitePoint:n,transfer:$t,toXYZ:Sl,fromXYZ:bl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zn}}}),i}const Vt=_d();function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vr;class vd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vr===void 0&&(vr=rs("canvas")),vr.width=e.width,vr.height=e.height;const n=vr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Li(o[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xd=0;class Pc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=os(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,c=r.length;a<c;a++)r[a].isDataTexture?o.push(To(r[a].image)):o.push(To(r[a]))}else o=To(r);n.url=o}return t||(e.images[this.uuid]=n),n}}function To(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yd=0;class In extends Wr{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,n=ar,r=ar,o=hi,a=lr,c=oi,h=Pi,g=In.DEFAULT_ANISOTROPY,m=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=os(),this.name="",this.source=new Pc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=g,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case da:e.x=e.x-Math.floor(e.x);break;case ar:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case da:e.y=e.y-Math.floor(e.y);break;case ar:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=vc;In.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,t=0,n=0,r=1){sn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,o;const h=e.elements,g=h[0],m=h[4],x=h[8],y=h[1],S=h[5],M=h[9],P=h[2],v=h[6],_=h[10];if(Math.abs(m-y)<.01&&Math.abs(x-P)<.01&&Math.abs(M-v)<.01){if(Math.abs(m+y)<.1&&Math.abs(x+P)<.1&&Math.abs(M+v)<.1&&Math.abs(g+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const k=(g+1)/2,F=(S+1)/2,u=(_+1)/2,K=(m+y)/4,W=(x+P)/4,re=(M+v)/4;return k>F&&k>u?k<.01?(n=0,r=.707106781,o=.707106781):(n=Math.sqrt(k),r=K/n,o=W/n):F>u?F<.01?(n=.707106781,r=0,o=.707106781):(r=Math.sqrt(F),n=K/r,o=re/r):u<.01?(n=.707106781,r=.707106781,o=0):(o=Math.sqrt(u),n=W/o,r=re/o),this.set(n,r,o,t),this}let q=Math.sqrt((v-M)*(v-M)+(x-P)*(x-P)+(y-m)*(y-m));return Math.abs(q)<.001&&(q=1),this.x=(v-M)/q,this.y=(x-P)/q,this.z=(y-m)/q,this.w=Math.acos((g+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ut(this.x,e.x,t.x),this.y=Ut(this.y,e.y,t.y),this.z=Ut(this.z,e.z,t.z),this.w=Ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ut(this.x,e,t),this.y=Ut(this.y,e,t),this.z=Ut(this.z,e,t),this.w=Ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sd extends Wr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new In(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let c=0;c<a;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Pc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends Sd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Dc extends In{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bd extends In{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,o,a,c){let h=n[r+0],g=n[r+1],m=n[r+2],x=n[r+3];const y=o[a+0],S=o[a+1],M=o[a+2],P=o[a+3];if(c===0){e[t+0]=h,e[t+1]=g,e[t+2]=m,e[t+3]=x;return}if(c===1){e[t+0]=y,e[t+1]=S,e[t+2]=M,e[t+3]=P;return}if(x!==P||h!==y||g!==S||m!==M){let v=1-c;const _=h*y+g*S+m*M+x*P,q=_>=0?1:-1,k=1-_*_;if(k>Number.EPSILON){const u=Math.sqrt(k),K=Math.atan2(u,_*q);v=Math.sin(v*K)/u,c=Math.sin(c*K)/u}const F=c*q;if(h=h*v+y*F,g=g*v+S*F,m=m*v+M*F,x=x*v+P*F,v===1-c){const u=1/Math.sqrt(h*h+g*g+m*m+x*x);h*=u,g*=u,m*=u,x*=u}}e[t]=h,e[t+1]=g,e[t+2]=m,e[t+3]=x}static multiplyQuaternionsFlat(e,t,n,r,o,a){const c=n[r],h=n[r+1],g=n[r+2],m=n[r+3],x=o[a],y=o[a+1],S=o[a+2],M=o[a+3];return e[t]=c*M+m*x+h*S-g*y,e[t+1]=h*M+m*y+g*x-c*S,e[t+2]=g*M+m*S+c*y-h*x,e[t+3]=m*M-c*x-h*y-g*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,o=e._z,a=e._order,c=Math.cos,h=Math.sin,g=c(n/2),m=c(r/2),x=c(o/2),y=h(n/2),S=h(r/2),M=h(o/2);switch(a){case"XYZ":this._x=y*m*x+g*S*M,this._y=g*S*x-y*m*M,this._z=g*m*M+y*S*x,this._w=g*m*x-y*S*M;break;case"YXZ":this._x=y*m*x+g*S*M,this._y=g*S*x-y*m*M,this._z=g*m*M-y*S*x,this._w=g*m*x+y*S*M;break;case"ZXY":this._x=y*m*x-g*S*M,this._y=g*S*x+y*m*M,this._z=g*m*M+y*S*x,this._w=g*m*x-y*S*M;break;case"ZYX":this._x=y*m*x-g*S*M,this._y=g*S*x+y*m*M,this._z=g*m*M-y*S*x,this._w=g*m*x+y*S*M;break;case"YZX":this._x=y*m*x+g*S*M,this._y=g*S*x+y*m*M,this._z=g*m*M-y*S*x,this._w=g*m*x-y*S*M;break;case"XZY":this._x=y*m*x-g*S*M,this._y=g*S*x-y*m*M,this._z=g*m*M+y*S*x,this._w=g*m*x+y*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],o=t[8],a=t[1],c=t[5],h=t[9],g=t[2],m=t[6],x=t[10],y=n+c+x;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(m-h)*S,this._y=(o-g)*S,this._z=(a-r)*S}else if(n>c&&n>x){const S=2*Math.sqrt(1+n-c-x);this._w=(m-h)/S,this._x=.25*S,this._y=(r+a)/S,this._z=(o+g)/S}else if(c>x){const S=2*Math.sqrt(1+c-n-x);this._w=(o-g)/S,this._x=(r+a)/S,this._y=.25*S,this._z=(h+m)/S}else{const S=2*Math.sqrt(1+x-n-c);this._w=(a-r)/S,this._x=(o+g)/S,this._y=(h+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,o=e._z,a=e._w,c=t._x,h=t._y,g=t._z,m=t._w;return this._x=n*m+a*c+r*g-o*h,this._y=r*m+a*h+o*c-n*g,this._z=o*m+a*g+n*h-r*c,this._w=a*m-n*c-r*h-o*g,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,o=this._z,a=this._w;let c=a*e._w+n*e._x+r*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=n,this._y=r,this._z=o,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-t;return this._w=S*a+t*this._w,this._x=S*n+t*this._x,this._y=S*r+t*this._y,this._z=S*o+t*this._z,this.normalize(),this}const g=Math.sqrt(h),m=Math.atan2(g,c),x=Math.sin((1-t)*m)/g,y=Math.sin(t*m)/g;return this._w=a*x+this._w*y,this._x=n*x+this._x*y,this._y=r*x+this._y*y,this._z=o*x+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,t=0,n=0){le.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(El.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(El.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*r,this.y=o[1]*t+o[4]*n+o[7]*r,this.z=o[2]*t+o[5]*n+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*n+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*n+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*n+o[10]*r+o[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,o=e.x,a=e.y,c=e.z,h=e.w,g=2*(a*r-c*n),m=2*(c*t-o*r),x=2*(o*n-a*t);return this.x=t+h*g+a*x-c*m,this.y=n+h*m+c*g-o*x,this.z=r+h*x+o*m-a*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r,this.y=o[1]*t+o[5]*n+o[9]*r,this.z=o[2]*t+o[6]*n+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ut(this.x,e.x,t.x),this.y=Ut(this.y,e.y,t.y),this.z=Ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ut(this.x,e,t),this.y=Ut(this.y,e,t),this.z=Ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,o=e.z,a=t.x,c=t.y,h=t.z;return this.x=r*h-o*c,this.y=o*a-n*h,this.z=n*c-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wo=new le,El=new as;class ls{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,c=o.count;a<c;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(o,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ys.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ys.copy(n.boundingBox)),ys.applyMatrix4(e.matrixWorld),this.union(ys)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),Ss.subVectors(this.max,Zr),xr.subVectors(e.a,Zr),yr.subVectors(e.b,Zr),Sr.subVectors(e.c,Zr),Ni.subVectors(yr,xr),Fi.subVectors(Sr,yr),Zi.subVectors(xr,Sr);let t=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-Zi.z,Zi.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,Zi.z,0,-Zi.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-Zi.y,Zi.x,0];return!Ao(t,xr,yr,Sr,Ss)||(t=[1,0,0,0,1,0,0,0,1],!Ao(t,xr,yr,Sr,Ss))?!1:(bs.crossVectors(Ni,Fi),t=[bs.x,bs.y,bs.z],Ao(t,xr,yr,Sr,Ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new le,new le,new le,new le,new le,new le,new le,new le],ii=new le,ys=new ls,xr=new le,yr=new le,Sr=new le,Ni=new le,Fi=new le,Zi=new le,Zr=new le,Ss=new le,bs=new le,Ji=new le;function Ao(i,e,t,n,r){for(let o=0,a=i.length-3;o<=a;o+=3){Ji.fromArray(i,o);const c=r.x*Math.abs(Ji.x)+r.y*Math.abs(Ji.y)+r.z*Math.abs(Ji.z),h=e.dot(Ji),g=t.dot(Ji),m=n.dot(Ji);if(Math.max(-Math.max(h,g,m),Math.min(h,g,m))>c)return!1}return!0}const Ed=new ls,Jr=new le,Co=new le;class so{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ed.setFromPoints(e).getCenter(n);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);const t=Jr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Jr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Co)),this.expandByPoint(Jr.copy(e.center).sub(Co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new le,Ro=new le,Es=new le,Oi=new le,Lo=new le,Ms=new le,Po=new le;class Ic{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ro.copy(e).add(t).multiplyScalar(.5),Es.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Ro);const o=e.distanceTo(t)*.5,a=-this.direction.dot(Es),c=Oi.dot(this.direction),h=-Oi.dot(Es),g=Oi.lengthSq(),m=Math.abs(1-a*a);let x,y,S,M;if(m>0)if(x=a*h-c,y=a*c-h,M=o*m,x>=0)if(y>=-M)if(y<=M){const P=1/m;x*=P,y*=P,S=x*(x+a*y+2*c)+y*(a*x+y+2*h)+g}else y=o,x=Math.max(0,-(a*y+c)),S=-x*x+y*(y+2*h)+g;else y=-o,x=Math.max(0,-(a*y+c)),S=-x*x+y*(y+2*h)+g;else y<=-M?(x=Math.max(0,-(-a*o+c)),y=x>0?-o:Math.min(Math.max(-o,-h),o),S=-x*x+y*(y+2*h)+g):y<=M?(x=0,y=Math.min(Math.max(-o,-h),o),S=y*(y+2*h)+g):(x=Math.max(0,-(a*o+c)),y=x>0?o:Math.min(Math.max(-o,-h),o),S=-x*x+y*(y+2*h)+g);else y=a>0?-o:o,x=Math.max(0,-(a*y+c)),S=-x*x+y*(y+2*h)+g;return n&&n.copy(this.origin).addScaledVector(this.direction,x),r&&r.copy(Ro).addScaledVector(Es,y),S}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const n=bi.dot(this.direction),r=bi.dot(bi)-n*n,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),c=n-a,h=n+a;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,o,a,c,h;const g=1/this.direction.x,m=1/this.direction.y,x=1/this.direction.z,y=this.origin;return g>=0?(n=(e.min.x-y.x)*g,r=(e.max.x-y.x)*g):(n=(e.max.x-y.x)*g,r=(e.min.x-y.x)*g),m>=0?(o=(e.min.y-y.y)*m,a=(e.max.y-y.y)*m):(o=(e.max.y-y.y)*m,a=(e.min.y-y.y)*m),n>a||o>r||((o>n||isNaN(n))&&(n=o),(a<r||isNaN(r))&&(r=a),x>=0?(c=(e.min.z-y.z)*x,h=(e.max.z-y.z)*x):(c=(e.max.z-y.z)*x,h=(e.min.z-y.z)*x),n>h||c>r)||((c>n||n!==n)&&(n=c),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,r,o){Lo.subVectors(t,e),Ms.subVectors(n,e),Po.crossVectors(Lo,Ms);let a=this.direction.dot(Po),c;if(a>0){if(r)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Oi.subVectors(this.origin,e);const h=c*this.direction.dot(Ms.crossVectors(Oi,Ms));if(h<0)return null;const g=c*this.direction.dot(Lo.cross(Oi));if(g<0||h+g>a)return null;const m=-c*Oi.dot(Po);return m<0?null:this.at(m/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,t,n,r,o,a,c,h,g,m,x,y,S,M,P,v){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,o,a,c,h,g,m,x,y,S,M,P,v)}set(e,t,n,r,o,a,c,h,g,m,x,y,S,M,P,v){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=o,_[5]=a,_[9]=c,_[13]=h,_[2]=g,_[6]=m,_[10]=x,_[14]=y,_[3]=S,_[7]=M,_[11]=P,_[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/br.setFromMatrixColumn(e,0).length(),o=1/br.setFromMatrixColumn(e,1).length(),a=1/br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,o=e.z,a=Math.cos(n),c=Math.sin(n),h=Math.cos(r),g=Math.sin(r),m=Math.cos(o),x=Math.sin(o);if(e.order==="XYZ"){const y=a*m,S=a*x,M=c*m,P=c*x;t[0]=h*m,t[4]=-h*x,t[8]=g,t[1]=S+M*g,t[5]=y-P*g,t[9]=-c*h,t[2]=P-y*g,t[6]=M+S*g,t[10]=a*h}else if(e.order==="YXZ"){const y=h*m,S=h*x,M=g*m,P=g*x;t[0]=y+P*c,t[4]=M*c-S,t[8]=a*g,t[1]=a*x,t[5]=a*m,t[9]=-c,t[2]=S*c-M,t[6]=P+y*c,t[10]=a*h}else if(e.order==="ZXY"){const y=h*m,S=h*x,M=g*m,P=g*x;t[0]=y-P*c,t[4]=-a*x,t[8]=M+S*c,t[1]=S+M*c,t[5]=a*m,t[9]=P-y*c,t[2]=-a*g,t[6]=c,t[10]=a*h}else if(e.order==="ZYX"){const y=a*m,S=a*x,M=c*m,P=c*x;t[0]=h*m,t[4]=M*g-S,t[8]=y*g+P,t[1]=h*x,t[5]=P*g+y,t[9]=S*g-M,t[2]=-g,t[6]=c*h,t[10]=a*h}else if(e.order==="YZX"){const y=a*h,S=a*g,M=c*h,P=c*g;t[0]=h*m,t[4]=P-y*x,t[8]=M*x+S,t[1]=x,t[5]=a*m,t[9]=-c*m,t[2]=-g*m,t[6]=S*x+M,t[10]=y-P*x}else if(e.order==="XZY"){const y=a*h,S=a*g,M=c*h,P=c*g;t[0]=h*m,t[4]=-x,t[8]=g*m,t[1]=y*x+P,t[5]=a*m,t[9]=S*x-M,t[2]=M*x-S,t[6]=c*m,t[10]=P*x+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Md,e,Td)}lookAt(e,t,n){const r=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ki.crossVectors(n,$n),ki.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ki.crossVectors(n,$n)),ki.normalize(),Ts.crossVectors($n,ki),r[0]=ki.x,r[4]=Ts.x,r[8]=$n.x,r[1]=ki.y,r[5]=Ts.y,r[9]=$n.y,r[2]=ki.z,r[6]=Ts.z,r[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,o=this.elements,a=n[0],c=n[4],h=n[8],g=n[12],m=n[1],x=n[5],y=n[9],S=n[13],M=n[2],P=n[6],v=n[10],_=n[14],q=n[3],k=n[7],F=n[11],u=n[15],K=r[0],W=r[4],re=r[8],I=r[12],L=r[1],Y=r[5],me=r[9],de=r[13],Ee=r[2],Me=r[6],ye=r[10],Ae=r[14],he=r[3],Ie=r[7],Ge=r[11],rt=r[15];return o[0]=a*K+c*L+h*Ee+g*he,o[4]=a*W+c*Y+h*Me+g*Ie,o[8]=a*re+c*me+h*ye+g*Ge,o[12]=a*I+c*de+h*Ae+g*rt,o[1]=m*K+x*L+y*Ee+S*he,o[5]=m*W+x*Y+y*Me+S*Ie,o[9]=m*re+x*me+y*ye+S*Ge,o[13]=m*I+x*de+y*Ae+S*rt,o[2]=M*K+P*L+v*Ee+_*he,o[6]=M*W+P*Y+v*Me+_*Ie,o[10]=M*re+P*me+v*ye+_*Ge,o[14]=M*I+P*de+v*Ae+_*rt,o[3]=q*K+k*L+F*Ee+u*he,o[7]=q*W+k*Y+F*Me+u*Ie,o[11]=q*re+k*me+F*ye+u*Ge,o[15]=q*I+k*de+F*Ae+u*rt,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],o=e[12],a=e[1],c=e[5],h=e[9],g=e[13],m=e[2],x=e[6],y=e[10],S=e[14],M=e[3],P=e[7],v=e[11],_=e[15];return M*(+o*h*x-r*g*x-o*c*y+n*g*y+r*c*S-n*h*S)+P*(+t*h*S-t*g*y+o*a*y-r*a*S+r*g*m-o*h*m)+v*(+t*g*x-t*c*S-o*a*x+n*a*S+o*c*m-n*g*m)+_*(-r*c*m-t*h*x+t*c*y+r*a*x-n*a*y+n*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],o=e[3],a=e[4],c=e[5],h=e[6],g=e[7],m=e[8],x=e[9],y=e[10],S=e[11],M=e[12],P=e[13],v=e[14],_=e[15],q=x*v*g-P*y*g+P*h*S-c*v*S-x*h*_+c*y*_,k=M*y*g-m*v*g-M*h*S+a*v*S+m*h*_-a*y*_,F=m*P*g-M*x*g+M*c*S-a*P*S-m*c*_+a*x*_,u=M*x*h-m*P*h-M*c*y+a*P*y+m*c*v-a*x*v,K=t*q+n*k+r*F+o*u;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/K;return e[0]=q*W,e[1]=(P*y*o-x*v*o-P*r*S+n*v*S+x*r*_-n*y*_)*W,e[2]=(c*v*o-P*h*o+P*r*g-n*v*g-c*r*_+n*h*_)*W,e[3]=(x*h*o-c*y*o-x*r*g+n*y*g+c*r*S-n*h*S)*W,e[4]=k*W,e[5]=(m*v*o-M*y*o+M*r*S-t*v*S-m*r*_+t*y*_)*W,e[6]=(M*h*o-a*v*o-M*r*g+t*v*g+a*r*_-t*h*_)*W,e[7]=(a*y*o-m*h*o+m*r*g-t*y*g-a*r*S+t*h*S)*W,e[8]=F*W,e[9]=(M*x*o-m*P*o-M*n*S+t*P*S+m*n*_-t*x*_)*W,e[10]=(a*P*o-M*c*o+M*n*g-t*P*g-a*n*_+t*c*_)*W,e[11]=(m*c*o-a*x*o-m*n*g+t*x*g+a*n*S-t*c*S)*W,e[12]=u*W,e[13]=(m*P*r-M*x*r+M*n*y-t*P*y-m*n*v+t*x*v)*W,e[14]=(M*c*r-a*P*r-M*n*h+t*P*h+a*n*v-t*c*v)*W,e[15]=(a*x*r-m*c*r+m*n*h-t*x*h-a*n*y+t*c*y)*W,this}scale(e){const t=this.elements,n=e.x,r=e.y,o=e.z;return t[0]*=n,t[4]*=r,t[8]*=o,t[1]*=n,t[5]*=r,t[9]*=o,t[2]*=n,t[6]*=r,t[10]*=o,t[3]*=n,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),o=1-n,a=e.x,c=e.y,h=e.z,g=o*a,m=o*c;return this.set(g*a+n,g*c-r*h,g*h+r*c,0,g*c+r*h,m*c+n,m*h-r*a,0,g*h-r*c,m*h+r*a,o*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,o,a){return this.set(1,n,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,o=t._x,a=t._y,c=t._z,h=t._w,g=o+o,m=a+a,x=c+c,y=o*g,S=o*m,M=o*x,P=a*m,v=a*x,_=c*x,q=h*g,k=h*m,F=h*x,u=n.x,K=n.y,W=n.z;return r[0]=(1-(P+_))*u,r[1]=(S+F)*u,r[2]=(M-k)*u,r[3]=0,r[4]=(S-F)*K,r[5]=(1-(y+_))*K,r[6]=(v+q)*K,r[7]=0,r[8]=(M+k)*W,r[9]=(v-q)*W,r[10]=(1-(y+P))*W,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let o=br.set(r[0],r[1],r[2]).length();const a=br.set(r[4],r[5],r[6]).length(),c=br.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);const g=1/o,m=1/a,x=1/c;return ri.elements[0]*=g,ri.elements[1]*=g,ri.elements[2]*=g,ri.elements[4]*=m,ri.elements[5]*=m,ri.elements[6]*=m,ri.elements[8]*=x,ri.elements[9]*=x,ri.elements[10]*=x,t.setFromRotationMatrix(ri),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,r,o,a,c=Ri){const h=this.elements,g=2*o/(t-e),m=2*o/(n-r),x=(t+e)/(t-e),y=(n+r)/(n-r);let S,M;if(c===Ri)S=-(a+o)/(a-o),M=-2*a*o/(a-o);else if(c===to)S=-a/(a-o),M=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=g,h[4]=0,h[8]=x,h[12]=0,h[1]=0,h[5]=m,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,o,a,c=Ri){const h=this.elements,g=1/(t-e),m=1/(n-r),x=1/(a-o),y=(t+e)*g,S=(n+r)*m;let M,P;if(c===Ri)M=(a+o)*x,P=-2*x;else if(c===to)M=o*x,P=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*g,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=P,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const br=new le,ri=new on,Md=new le(0,0,0),Td=new le(1,1,1),ki=new le,Ts=new le,$n=new le,Ml=new on,Tl=new as;class Di{constructor(e=0,t=0,n=0,r=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,o=r[0],a=r[4],c=r[8],h=r[1],g=r[5],m=r[9],x=r[2],y=r[6],S=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(y,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,g)):(this._y=Math.atan2(-x,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-a,g)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Ut(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-a,g));break;case"YZX":this._z=Math.asin(Ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,g),this._y=Math.atan2(-x,o)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(y,g),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ml.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ml,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class Uc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wd=0;const wl=new le,Er=new as,Ei=new on,ws=new le,Qr=new le,Ad=new le,Cd=new as,Al=new le(1,0,0),Cl=new le(0,1,0),Rl=new le(0,0,1),Ll={type:"added"},Rd={type:"removed"},Mr={type:"childadded",child:null},Do={type:"childremoved",child:null};class zn extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new le,t=new Di,n=new as,r=new le(1,1,1);function o(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new on},normalMatrix:{value:new wt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.multiply(Er),this}rotateOnWorldAxis(e,t){return Er.setFromAxisAngle(e,t),this.quaternion.premultiply(Er),this}rotateX(e){return this.rotateOnAxis(Al,e)}rotateY(e){return this.rotateOnAxis(Cl,e)}rotateZ(e){return this.rotateOnAxis(Rl,e)}translateOnAxis(e,t){return wl.copy(e).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Al,e)}translateY(e){return this.translateOnAxis(Cl,e)}translateZ(e){return this.translateOnAxis(Rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ws.copy(e):ws.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Qr,ws,this.up):Ei.lookAt(ws,Qr,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),Er.setFromRotationMatrix(Ei),this.quaternion.premultiply(Er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ll),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rd),Do.child=e,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ll),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,Ad),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,Cd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let g=0,m=h.length;g<m;g++){const x=h[g];o(e.shapes,x)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,g=this.material.length;h<g;h++)c.push(o(e.materials,this.material[h]));r.material=c}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];r.animations.push(o(e.animations,h))}}if(t){const c=a(e.geometries),h=a(e.materials),g=a(e.textures),m=a(e.images),x=a(e.shapes),y=a(e.skeletons),S=a(e.animations),M=a(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),g.length>0&&(n.textures=g),m.length>0&&(n.images=m),x.length>0&&(n.shapes=x),y.length>0&&(n.skeletons=y),S.length>0&&(n.animations=S),M.length>0&&(n.nodes=M)}return n.object=r,n;function a(c){const h=[];for(const g in c){const m=c[g];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}zn.DEFAULT_UP=new le(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new le,Mi=new le,Io=new le,Ti=new le,Tr=new le,wr=new le,Pl=new le,Uo=new le,No=new le,Fo=new le,Oo=new sn,ko=new sn,Bo=new sn;class Qn{constructor(e=new le,t=new le,n=new le){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),si.subVectors(e,t),r.cross(si);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,n,r,o){si.subVectors(r,t),Mi.subVectors(n,t),Io.subVectors(e,t);const a=si.dot(si),c=si.dot(Mi),h=si.dot(Io),g=Mi.dot(Mi),m=Mi.dot(Io),x=a*g-c*c;if(x===0)return o.set(0,0,0),null;const y=1/x,S=(g*h-c*m)*y,M=(a*m-c*h)*y;return o.set(1-S-M,M,S)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,n,r,o,a,c,h){return this.getBarycoord(e,t,n,r,Ti)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Ti.x),h.addScaledVector(a,Ti.y),h.addScaledVector(c,Ti.z),h)}static getInterpolatedAttribute(e,t,n,r,o,a){return Oo.setScalar(0),ko.setScalar(0),Bo.setScalar(0),Oo.fromBufferAttribute(e,t),ko.fromBufferAttribute(e,n),Bo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Oo,o.x),a.addScaledVector(ko,o.y),a.addScaledVector(Bo,o.z),a}static isFrontFacing(e,t,n,r){return si.subVectors(n,t),Mi.subVectors(e,t),si.cross(Mi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),si.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Qn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,o){return Qn.getInterpolation(e,this.a,this.b,this.c,t,n,r,o)}containsPoint(e){return Qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,o=this.c;let a,c;Tr.subVectors(r,n),wr.subVectors(o,n),Uo.subVectors(e,n);const h=Tr.dot(Uo),g=wr.dot(Uo);if(h<=0&&g<=0)return t.copy(n);No.subVectors(e,r);const m=Tr.dot(No),x=wr.dot(No);if(m>=0&&x<=m)return t.copy(r);const y=h*x-m*g;if(y<=0&&h>=0&&m<=0)return a=h/(h-m),t.copy(n).addScaledVector(Tr,a);Fo.subVectors(e,o);const S=Tr.dot(Fo),M=wr.dot(Fo);if(M>=0&&S<=M)return t.copy(o);const P=S*g-h*M;if(P<=0&&g>=0&&M<=0)return c=g/(g-M),t.copy(n).addScaledVector(wr,c);const v=m*M-S*x;if(v<=0&&x-m>=0&&S-M>=0)return Pl.subVectors(o,r),c=(x-m)/(x-m+(S-M)),t.copy(r).addScaledVector(Pl,c);const _=1/(v+P+y);return a=P*_,c=y*_,t.copy(n).addScaledVector(Tr,a).addScaledVector(wr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},As={h:0,s:0,l:0};function zo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Xt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Vt.workingColorSpace){if(e=fd(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,a=2*n-o;this.r=zo(a,o,e+1/3),this.g=zo(a,o,e),this.b=zo(a,o,e-1/3)}return Vt.toWorkingColorSpace(this,r),this}setStyle(e,t=Zn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],c=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zn){const n=Nc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return Vt.fromWorkingColorSpace(Rn.copy(this),e),Math.round(Ut(Rn.r*255,0,255))*65536+Math.round(Ut(Rn.g*255,0,255))*256+Math.round(Ut(Rn.b*255,0,255))}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.fromWorkingColorSpace(Rn.copy(this),t);const n=Rn.r,r=Rn.g,o=Rn.b,a=Math.max(n,r,o),c=Math.min(n,r,o);let h,g;const m=(c+a)/2;if(c===a)h=0,g=0;else{const x=a-c;switch(g=m<=.5?x/(a+c):x/(2-a-c),a){case n:h=(r-o)/x+(r<o?6:0);break;case r:h=(o-n)/x+2;break;case o:h=(n-r)/x+4;break}h/=6}return e.h=h,e.s=g,e.l=m,e}getRGB(e,t=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Zn){Vt.fromWorkingColorSpace(Rn.copy(this),e);const t=Rn.r,n=Rn.g,r=Rn.b;return e!==Zn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(As);const n=Eo(Bi.h,As.h,t),r=Eo(Bi.s,As.s,t),o=Eo(Bi.l,As.l,t);return this.setHSL(n,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*r,this.g=o[1]*t+o[4]*n+o[7]*r,this.b=o[2]*t+o[5]*n+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Xt;Xt.NAMES=Nc;let Ld=0;class cs extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=os(),this.name="",this.type="Material",this.blending=Ir,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=ta,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==ta&&(n.blendDst=this.blendDst),this.blendEquation!==sr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(o){const a=[];for(const c in o){const h=o[c];delete h.metadata,a.push(h)}return a}if(t){const o=r(e.textures),a=r(e.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let o=0;o!==r;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class us extends cs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new le,Cs=new Zt;class mi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vl,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Cs.fromBufferAttribute(this,t),Cs.applyMatrix3(e),this.setXY(t,Cs.x,Cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kr(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kr(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kr(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,o){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),n=kn(n,this.array),r=kn(r,this.array),o=kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}}class Fc extends mi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Oc extends mi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gi extends mi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pd=0;const Kn=new on,Ho=new zn,Ar=new le,jn=new ls,es=new ls,Mn=new le;class Ii extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lc(e)?Oc:Fc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new wt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,n){return Kn.makeTranslation(e,t,n),this.applyMatrix4(Kn),this}scale(e,t,n){return Kn.makeScale(e,t,n),this.applyMatrix4(Kn),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,o=e.length;r<o;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gi(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const o=e[r];t.setXYZ(r,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const o=t[n];jn.setFromBufferAttribute(o),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new so);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const c=t[o];es.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(jn.min,es.min),jn.expandByPoint(Mn),Mn.addVectors(jn.max,es.max),jn.expandByPoint(Mn)):(jn.expandByPoint(es.min),jn.expandByPoint(es.max))}jn.getCenter(n);let r=0;for(let o=0,a=e.count;o<a;o++)Mn.fromBufferAttribute(e,o),r=Math.max(r,n.distanceToSquared(Mn));if(t)for(let o=0,a=t.length;o<a;o++){const c=t[o],h=this.morphTargetsRelative;for(let g=0,m=c.count;g<m;g++)Mn.fromBufferAttribute(c,g),h&&(Ar.fromBufferAttribute(e,g),Mn.add(Ar)),r=Math.max(r,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),c=[],h=[];for(let re=0;re<n.count;re++)c[re]=new le,h[re]=new le;const g=new le,m=new le,x=new le,y=new Zt,S=new Zt,M=new Zt,P=new le,v=new le;function _(re,I,L){g.fromBufferAttribute(n,re),m.fromBufferAttribute(n,I),x.fromBufferAttribute(n,L),y.fromBufferAttribute(o,re),S.fromBufferAttribute(o,I),M.fromBufferAttribute(o,L),m.sub(g),x.sub(g),S.sub(y),M.sub(y);const Y=1/(S.x*M.y-M.x*S.y);isFinite(Y)&&(P.copy(m).multiplyScalar(M.y).addScaledVector(x,-S.y).multiplyScalar(Y),v.copy(x).multiplyScalar(S.x).addScaledVector(m,-M.x).multiplyScalar(Y),c[re].add(P),c[I].add(P),c[L].add(P),h[re].add(v),h[I].add(v),h[L].add(v))}let q=this.groups;q.length===0&&(q=[{start:0,count:e.count}]);for(let re=0,I=q.length;re<I;++re){const L=q[re],Y=L.start,me=L.count;for(let de=Y,Ee=Y+me;de<Ee;de+=3)_(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const k=new le,F=new le,u=new le,K=new le;function W(re){u.fromBufferAttribute(r,re),K.copy(u);const I=c[re];k.copy(I),k.sub(u.multiplyScalar(u.dot(I))).normalize(),F.crossVectors(K,I);const Y=F.dot(h[re])<0?-1:1;a.setXYZW(re,k.x,k.y,k.z,Y)}for(let re=0,I=q.length;re<I;++re){const L=q[re],Y=L.start,me=L.count;for(let de=Y,Ee=Y+me;de<Ee;de+=3)W(e.getX(de+0)),W(e.getX(de+1)),W(e.getX(de+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let y=0,S=n.count;y<S;y++)n.setXYZ(y,0,0,0);const r=new le,o=new le,a=new le,c=new le,h=new le,g=new le,m=new le,x=new le;if(e)for(let y=0,S=e.count;y<S;y+=3){const M=e.getX(y+0),P=e.getX(y+1),v=e.getX(y+2);r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,P),a.fromBufferAttribute(t,v),m.subVectors(a,o),x.subVectors(r,o),m.cross(x),c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,P),g.fromBufferAttribute(n,v),c.add(m),h.add(m),g.add(m),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(P,h.x,h.y,h.z),n.setXYZ(v,g.x,g.y,g.z)}else for(let y=0,S=t.count;y<S;y+=3)r.fromBufferAttribute(t,y+0),o.fromBufferAttribute(t,y+1),a.fromBufferAttribute(t,y+2),m.subVectors(a,o),x.subVectors(r,o),m.cross(x),n.setXYZ(y+0,m.x,m.y,m.z),n.setXYZ(y+1,m.x,m.y,m.z),n.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(c,h){const g=c.array,m=c.itemSize,x=c.normalized,y=new g.constructor(h.length*m);let S=0,M=0;for(let P=0,v=h.length;P<v;P++){c.isInterleavedBufferAttribute?S=h[P]*c.data.stride+c.offset:S=h[P]*m;for(let _=0;_<m;_++)y[M++]=g[S++]}return new mi(y,m,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ii,n=this.index.array,r=this.attributes;for(const c in r){const h=r[c],g=e(h,n);t.setAttribute(c,g)}const o=this.morphAttributes;for(const c in o){const h=[],g=o[c];for(let m=0,x=g.length;m<x;m++){const y=g[m],S=e(y,n);h.push(S)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,h=a.length;c<h;c++){const g=a[c];t.addGroup(g.start,g.count,g.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const g in h)h[g]!==void 0&&(e[g]=h[g]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const g=n[h];e.data.attributes[h]=g.toJSON(e.data)}const r={};let o=!1;for(const h in this.morphAttributes){const g=this.morphAttributes[h],m=[];for(let x=0,y=g.length;x<y;x++){const S=g[x];m.push(S.toJSON(e.data))}m.length>0&&(r[h]=m,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const g in r){const m=r[g];this.setAttribute(g,m.clone(t))}const o=e.morphAttributes;for(const g in o){const m=[],x=o[g];for(let y=0,S=x.length;y<S;y++)m.push(x[y].clone(t));this.morphAttributes[g]=m}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let g=0,m=a.length;g<m;g++){const x=a[g];this.addGroup(x.start,x.count,x.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dl=new on,Qi=new Ic,Rs=new so,Il=new le,Ls=new le,Ps=new le,Ds=new le,Vo=new le,Is=new le,Ul=new le,Us=new le;class pi extends zn{constructor(e=new Ii,t=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(o&&c){Is.set(0,0,0);for(let h=0,g=o.length;h<g;h++){const m=c[h],x=o[h];m!==0&&(Vo.fromBufferAttribute(x,e),a?Is.addScaledVector(Vo,m):Is.addScaledVector(Vo.sub(t),m))}t.add(Is)}return t}raycast(e,t){const n=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(o),Qi.copy(e.ray).recast(e.near),!(Rs.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Rs,Il)===null||Qi.origin.distanceToSquared(Il)>(e.far-e.near)**2))&&(Dl.copy(o).invert(),Qi.copy(e.ray).applyMatrix4(Dl),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let r;const o=this.geometry,a=this.material,c=o.index,h=o.attributes.position,g=o.attributes.uv,m=o.attributes.uv1,x=o.attributes.normal,y=o.groups,S=o.drawRange;if(c!==null)if(Array.isArray(a))for(let M=0,P=y.length;M<P;M++){const v=y[M],_=a[v.materialIndex],q=Math.max(v.start,S.start),k=Math.min(c.count,Math.min(v.start+v.count,S.start+S.count));for(let F=q,u=k;F<u;F+=3){const K=c.getX(F),W=c.getX(F+1),re=c.getX(F+2);r=Ns(this,_,e,n,g,m,x,K,W,re),r&&(r.faceIndex=Math.floor(F/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const M=Math.max(0,S.start),P=Math.min(c.count,S.start+S.count);for(let v=M,_=P;v<_;v+=3){const q=c.getX(v),k=c.getX(v+1),F=c.getX(v+2);r=Ns(this,a,e,n,g,m,x,q,k,F),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(a))for(let M=0,P=y.length;M<P;M++){const v=y[M],_=a[v.materialIndex],q=Math.max(v.start,S.start),k=Math.min(h.count,Math.min(v.start+v.count,S.start+S.count));for(let F=q,u=k;F<u;F+=3){const K=F,W=F+1,re=F+2;r=Ns(this,_,e,n,g,m,x,K,W,re),r&&(r.faceIndex=Math.floor(F/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const M=Math.max(0,S.start),P=Math.min(h.count,S.start+S.count);for(let v=M,_=P;v<_;v+=3){const q=v,k=v+1,F=v+2;r=Ns(this,a,e,n,g,m,x,q,k,F),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function Dd(i,e,t,n,r,o,a,c){let h;if(e.side===Bn?h=n.intersectTriangle(a,o,r,!0,c):h=n.intersectTriangle(r,o,a,e.side===qi,c),h===null)return null;Us.copy(c),Us.applyMatrix4(i.matrixWorld);const g=t.ray.origin.distanceTo(Us);return g<t.near||g>t.far?null:{distance:g,point:Us.clone(),object:i}}function Ns(i,e,t,n,r,o,a,c,h,g){i.getVertexPosition(c,Ls),i.getVertexPosition(h,Ps),i.getVertexPosition(g,Ds);const m=Dd(i,e,t,n,Ls,Ps,Ds,Ul);if(m){const x=new le;Qn.getBarycoord(Ul,Ls,Ps,Ds,x),r&&(m.uv=Qn.getInterpolatedAttribute(r,c,h,g,x,new Zt)),o&&(m.uv1=Qn.getInterpolatedAttribute(o,c,h,g,x,new Zt)),a&&(m.normal=Qn.getInterpolatedAttribute(a,c,h,g,x,new le),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const y={a:c,b:h,c:g,normal:new le,materialIndex:0};Qn.getNormal(Ls,Ps,Ds,y.normal),m.face=y,m.barycoord=x}return m}class fr extends Ii{constructor(e=1,t=1,n=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:o,depthSegments:a};const c=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const h=[],g=[],m=[],x=[];let y=0,S=0;M("z","y","x",-1,-1,n,t,e,a,o,0),M("z","y","x",1,-1,n,t,-e,a,o,1),M("x","z","y",1,1,e,n,t,r,a,2),M("x","z","y",1,-1,e,n,-t,r,a,3),M("x","y","z",1,-1,e,t,n,r,o,4),M("x","y","z",-1,-1,e,t,-n,r,o,5),this.setIndex(h),this.setAttribute("position",new gi(g,3)),this.setAttribute("normal",new gi(m,3)),this.setAttribute("uv",new gi(x,2));function M(P,v,_,q,k,F,u,K,W,re,I){const L=F/W,Y=u/re,me=F/2,de=u/2,Ee=K/2,Me=W+1,ye=re+1;let Ae=0,he=0;const Ie=new le;for(let Ge=0;Ge<ye;Ge++){const rt=Ge*Y-de;for(let Et=0;Et<Me;Et++){const Ot=Et*L-me;Ie[P]=Ot*q,Ie[v]=rt*k,Ie[_]=Ee,g.push(Ie.x,Ie.y,Ie.z),Ie[P]=0,Ie[v]=0,Ie[_]=K>0?1:-1,m.push(Ie.x,Ie.y,Ie.z),x.push(Et/W),x.push(1-Ge/re),Ae+=1}}for(let Ge=0;Ge<re;Ge++)for(let rt=0;rt<W;rt++){const Et=y+rt+Me*Ge,Ot=y+rt+Me*(Ge+1),z=y+(rt+1)+Me*(Ge+1),Re=y+(rt+1)+Me*Ge;h.push(Et,Ot,Re),h.push(Ot,z,Re),he+=6}c.addGroup(S,he,I),S+=he,y+=Ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Dn(i){const e={};for(let t=0;t<i.length;t++){const n=Vr(i[t]);for(const r in n)e[r]=n[r]}return e}function Id(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Vt.workingColorSpace}const Ud={clone:Vr,merge:Dn};var Nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends cs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nd,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vr(e.uniforms),this.uniformsGroups=Id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Bc extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new le,Nl=new Zt,Fl=new Zt;class Jn extends Bc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ba*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,Nl,Fl),t.subVectors(Fl,Nl)}setViewOffset(e,t,n,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,g=a.fullHeight;o+=a.offsetX*r/h,t-=a.offsetY*n/g,r*=a.width/h,n*=a.height/g}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Cr=-90,Rr=1;class Od extends zn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jn(Cr,Rr,e,t);r.layers=this.layers,this.add(r);const o=new Jn(Cr,Rr,e,t);o.layers=this.layers,this.add(o);const a=new Jn(Cr,Rr,e,t);a.layers=this.layers,this.add(a);const c=new Jn(Cr,Rr,e,t);c.layers=this.layers,this.add(c);const h=new Jn(Cr,Rr,e,t);h.layers=this.layers,this.add(h);const g=new Jn(Cr,Rr,e,t);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,o,a,c,h]=t;for(const g of t)this.remove(g);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of t)this.add(g),g.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,c,h,g,m]=this.children,x=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const P=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,o),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,h),e.setRenderTarget(n,4,r),e.render(t,g),n.texture.generateMipmaps=P,e.setRenderTarget(n,5,r),e.render(t,m),e.setRenderTarget(x,y,S),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class zc extends In{constructor(e,t,n,r,o,a,c,h,g,m){e=e!==void 0?e:[],t=t!==void 0?t:Or,super(e,t,n,r,o,a,c,h,g,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kd extends dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new zc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:hi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fr(5,5,5),o=new $i({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:Gi});o.uniforms.tEquirect.value=t;const a=new pi(r,o),c=t.minFilter;return t.minFilter===lr&&(t.minFilter=hi),new Od(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(o)}}class Bd extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Go=new le,zd=new le,Hd=new wt;class ir{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Go.subVectors(n,t).cross(zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Go),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hd.getNormalMatrix(e),r=this.coplanarPoint(Go).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new so,Fs=new le;class Hc{constructor(e=new ir,t=new ir,n=new ir,r=new ir,o=new ir,a=new ir){this.planes=[e,t,n,r,o,a]}set(e,t,n,r,o,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(o),c[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri){const n=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],h=r[3],g=r[4],m=r[5],x=r[6],y=r[7],S=r[8],M=r[9],P=r[10],v=r[11],_=r[12],q=r[13],k=r[14],F=r[15];if(n[0].setComponents(h-o,y-g,v-S,F-_).normalize(),n[1].setComponents(h+o,y+g,v+S,F+_).normalize(),n[2].setComponents(h+a,y+m,v+M,F+q).normalize(),n[3].setComponents(h-a,y-m,v-M,F-q).normalize(),n[4].setComponents(h-c,y-x,v-P,F-k).normalize(),t===Ri)n[5].setComponents(h+c,y+x,v+P,F+k).normalize();else if(t===to)n[5].setComponents(c,x,P,k).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Fs.x=r.normal.x>0?e.max.x:e.min.x,Fs.y=r.normal.y>0?e.max.y:e.min.y,Fs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vc extends cs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const no=new le,io=new le,Ol=new on,ts=new Ic,Os=new so,Wo=new le,kl=new le;class Vd extends zn{constructor(e=new Ii,t=new Vc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,o=t.count;r<o;r++)no.fromBufferAttribute(t,r-1),io.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=no.distanceTo(io);e.setAttribute("lineDistance",new gi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(r),Os.radius+=o,e.ray.intersectsSphere(Os)===!1)return;Ol.copy(r).invert(),ts.copy(e.ray).applyMatrix4(Ol);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,g=this.isLineSegments?2:1,m=n.index,y=n.attributes.position;if(m!==null){const S=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let P=S,v=M-1;P<v;P+=g){const _=m.getX(P),q=m.getX(P+1),k=ks(this,e,ts,h,_,q);k&&t.push(k)}if(this.isLineLoop){const P=m.getX(M-1),v=m.getX(S),_=ks(this,e,ts,h,P,v);_&&t.push(_)}}else{const S=Math.max(0,a.start),M=Math.min(y.count,a.start+a.count);for(let P=S,v=M-1;P<v;P+=g){const _=ks(this,e,ts,h,P,P+1);_&&t.push(_)}if(this.isLineLoop){const P=ks(this,e,ts,h,M-1,S);P&&t.push(P)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function ks(i,e,t,n,r,o){const a=i.geometry.attributes.position;if(no.fromBufferAttribute(a,r),io.fromBufferAttribute(a,o),t.distanceSqToSegment(no,io,Wo,kl)>n)return;Wo.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Wo);if(!(h<e.near||h>e.far))return{distance:h,point:kl.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const Bl=new le,zl=new le;class Gd extends Vd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,o=t.count;r<o;r+=2)Bl.fromBufferAttribute(t,r),zl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Bl.distanceTo(zl);e.setAttribute("lineDistance",new gi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bs extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Gc extends In{constructor(e,t,n,r,o,a,c,h,g,m=Ur){if(m!==Ur&&m!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===Ur&&(n=ur),n===void 0&&m===zr&&(n=Br),super(null,r,o,a,c,h,m,n,g),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:ai,this.minFilter=h!==void 0?h:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const zs=new le,Hs=new le,Xo=new le,Vs=new Qn;class Wd extends Ii{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),o=Math.cos(Js*t),a=e.getIndex(),c=e.getAttribute("position"),h=a?a.count:c.count,g=[0,0,0],m=["a","b","c"],x=new Array(3),y={},S=[];for(let M=0;M<h;M+=3){a?(g[0]=a.getX(M),g[1]=a.getX(M+1),g[2]=a.getX(M+2)):(g[0]=M,g[1]=M+1,g[2]=M+2);const{a:P,b:v,c:_}=Vs;if(P.fromBufferAttribute(c,g[0]),v.fromBufferAttribute(c,g[1]),_.fromBufferAttribute(c,g[2]),Vs.getNormal(Xo),x[0]=`${Math.round(P.x*r)},${Math.round(P.y*r)},${Math.round(P.z*r)}`,x[1]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,x[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let q=0;q<3;q++){const k=(q+1)%3,F=x[q],u=x[k],K=Vs[m[q]],W=Vs[m[k]],re=`${F}_${u}`,I=`${u}_${F}`;I in y&&y[I]?(Xo.dot(y[I].normal)<=o&&(S.push(K.x,K.y,K.z),S.push(W.x,W.y,W.z)),y[I]=null):re in y||(y[re]={index0:g[q],index1:g[k],normal:Xo.clone()})}}for(const M in y)if(y[M]){const{index0:P,index1:v}=y[M];zs.fromBufferAttribute(c,P),Hs.fromBufferAttribute(c,v),S.push(zs.x,zs.y,zs.z),S.push(Hs.x,Hs.y,Hs.z)}this.setAttribute("position",new gi(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class oo extends Ii{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const o=e/2,a=t/2,c=Math.floor(n),h=Math.floor(r),g=c+1,m=h+1,x=e/c,y=t/h,S=[],M=[],P=[],v=[];for(let _=0;_<m;_++){const q=_*y-a;for(let k=0;k<g;k++){const F=k*x-o;M.push(F,-q,0),P.push(0,0,1),v.push(k/c),v.push(1-_/h)}}for(let _=0;_<h;_++)for(let q=0;q<c;q++){const k=q+g*_,F=q+g*(_+1),u=q+1+g*(_+1),K=q+1+g*_;S.push(k,F,K),S.push(F,u,K)}this.setIndex(S),this.setAttribute("position",new gi(M,3)),this.setAttribute("normal",new gi(P,3)),this.setAttribute("uv",new gi(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xd extends cs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qd extends cs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class $d{constructor(e,t,n){const r=this;let o=!1,a=0,c=0,h;const g=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(m){c++,o===!1&&r.onStart!==void 0&&r.onStart(m,a,c),o=!0},this.itemEnd=function(m){a++,r.onProgress!==void 0&&r.onProgress(m,a,c),a===c&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(m){r.onError!==void 0&&r.onError(m)},this.resolveURL=function(m){return h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,x){return g.push(m,x),this},this.removeHandler=function(m){const x=g.indexOf(m);return x!==-1&&g.splice(x,2),this},this.getHandler=function(m){for(let x=0,y=g.length;x<y;x+=2){const S=g[x],M=g[x+1];if(S.global&&(S.lastIndex=0),S.test(m))return M}return null}}}const jd=new $d;class Ya{constructor(e){this.manager=e!==void 0?e:jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,o){n.load(e,r,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ya.DEFAULT_MATERIAL_NAME="__DEFAULT";class Yd extends Ya{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=Hl.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){t&&t(a),o.manager.itemEnd(e)},0),a;const c=rs("img");function h(){m(),Hl.add(e,this),t&&t(this),o.manager.itemEnd(e)}function g(x){m(),r&&r(x),o.manager.itemError(e),o.manager.itemEnd(e)}function m(){c.removeEventListener("load",h,!1),c.removeEventListener("error",g,!1)}return c.addEventListener("load",h,!1),c.addEventListener("error",g,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),o.manager.itemStart(e),c.src=e,c}}class Wc extends Ya{constructor(e){super(e)}load(e,t,n,r){const o=new In,a=new Yd(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(c){o.image=c,o.needsUpdate=!0,t!==void 0&&t(o)},n,r),o}}class Kd extends Bc{constructor(e=-1,t=1,n=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=n-e,a=n+e,c=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=g*this.view.offsetX,a=o+g*this.view.width,c-=m*this.view.offsetY,h=c-m*this.view.height}this.projectionMatrix.makeOrthographic(o,a,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zd extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Vl(i,e,t,n){const r=Jd(n);switch(t){case bc:return i*e;case Mc:return i*e;case Tc:return i*e*2;case wc:return i*e/r.components*r.byteLength;case qa:return i*e/r.components*r.byteLength;case Ac:return i*e*2/r.components*r.byteLength;case $a:return i*e*2/r.components*r.byteLength;case Ec:return i*e*3/r.components*r.byteLength;case oi:return i*e*4/r.components*r.byteLength;case ja:return i*e*4/r.components*r.byteLength;case $s:case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ys:case Ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(e,8)/4;case ha:case ma:return Math.max(i,8)*Math.max(e,8)/2;case _a:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ba:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Zs:case Ua:case Na:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cc:case Fa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oa:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jd(i){switch(i){case Pi:case xc:return{byteLength:1,components:1};case is:case yc:case ss:return{byteLength:2,components:1};case Wa:case Xa:return{byteLength:2,components:4};case ur:case Ga:case Ci:return{byteLength:4,components:1};case Sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xc(){let i=null,e=!1,t=null,n=null;function r(o,a){t(o,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Qd(i){const e=new WeakMap;function t(c,h){const g=c.array,m=c.usage,x=g.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,g,m),c.onUploadCallback();let S;if(g instanceof Float32Array)S=i.FLOAT;else if(g instanceof Uint16Array)c.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=i.SHORT;else if(g instanceof Uint32Array)S=i.UNSIGNED_INT;else if(g instanceof Int32Array)S=i.INT;else if(g instanceof Int8Array)S=i.BYTE;else if(g instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:y,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:c.version,size:x}}function n(c,h,g){const m=h.array,x=h.updateRanges;if(i.bindBuffer(g,c),x.length===0)i.bufferSubData(g,0,m);else{x.sort((S,M)=>S.start-M.start);let y=0;for(let S=1;S<x.length;S++){const M=x[y],P=x[S];P.start<=M.start+M.count+1?M.count=Math.max(M.count,P.start+P.count-M.start):(++y,x[y]=P)}x.length=y+1;for(let S=0,M=x.length;S<M;S++){const P=x[S];i.bufferSubData(g,P.start*m.BYTES_PER_ELEMENT,m,P.start,P.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(i.deleteBuffer(h.buffer),e.delete(c))}function a(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const g=e.get(c);if(g===void 0)e.set(c,t(c,h));else if(g.version<c.version){if(g.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(g.buffer,c,h),g.version=c.version}}return{get:r,remove:o,update:a}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,af=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,If=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,th=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ih=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ah=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ch=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ph=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_h=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Th=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ah=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ch=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ph=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ih=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Oh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$h=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ap=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,At={alphahash_fragment:ef,alphahash_pars_fragment:tf,alphamap_fragment:nf,alphamap_pars_fragment:rf,alphatest_fragment:sf,alphatest_pars_fragment:of,aomap_fragment:af,aomap_pars_fragment:lf,batching_pars_vertex:cf,batching_vertex:uf,begin_vertex:df,beginnormal_vertex:ff,bsdfs:hf,iridescence_fragment:pf,bumpmap_pars_fragment:mf,clipping_planes_fragment:gf,clipping_planes_pars_fragment:_f,clipping_planes_pars_vertex:vf,clipping_planes_vertex:xf,color_fragment:yf,color_pars_fragment:Sf,color_pars_vertex:bf,color_vertex:Ef,common:Mf,cube_uv_reflection_fragment:Tf,defaultnormal_vertex:wf,displacementmap_pars_vertex:Af,displacementmap_vertex:Cf,emissivemap_fragment:Rf,emissivemap_pars_fragment:Lf,colorspace_fragment:Pf,colorspace_pars_fragment:Df,envmap_fragment:If,envmap_common_pars_fragment:Uf,envmap_pars_fragment:Nf,envmap_pars_vertex:Ff,envmap_physical_pars_fragment:$f,envmap_vertex:Of,fog_vertex:kf,fog_pars_vertex:Bf,fog_fragment:zf,fog_pars_fragment:Hf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:Gf,lights_lambert_fragment:Wf,lights_lambert_pars_fragment:Xf,lights_pars_begin:qf,lights_toon_fragment:jf,lights_toon_pars_fragment:Yf,lights_phong_fragment:Kf,lights_phong_pars_fragment:Zf,lights_physical_fragment:Jf,lights_physical_pars_fragment:Qf,lights_fragment_begin:eh,lights_fragment_maps:th,lights_fragment_end:nh,logdepthbuf_fragment:ih,logdepthbuf_pars_fragment:rh,logdepthbuf_pars_vertex:sh,logdepthbuf_vertex:oh,map_fragment:ah,map_pars_fragment:lh,map_particle_fragment:ch,map_particle_pars_fragment:uh,metalnessmap_fragment:dh,metalnessmap_pars_fragment:fh,morphinstance_vertex:hh,morphcolor_vertex:ph,morphnormal_vertex:mh,morphtarget_pars_vertex:gh,morphtarget_vertex:_h,normal_fragment_begin:vh,normal_fragment_maps:xh,normal_pars_fragment:yh,normal_pars_vertex:Sh,normal_vertex:bh,normalmap_pars_fragment:Eh,clearcoat_normal_fragment_begin:Mh,clearcoat_normal_fragment_maps:Th,clearcoat_pars_fragment:wh,iridescence_pars_fragment:Ah,opaque_fragment:Ch,packing:Rh,premultiplied_alpha_fragment:Lh,project_vertex:Ph,dithering_fragment:Dh,dithering_pars_fragment:Ih,roughnessmap_fragment:Uh,roughnessmap_pars_fragment:Nh,shadowmap_pars_fragment:Fh,shadowmap_pars_vertex:Oh,shadowmap_vertex:kh,shadowmask_pars_fragment:Bh,skinbase_vertex:zh,skinning_pars_vertex:Hh,skinning_vertex:Vh,skinnormal_vertex:Gh,specularmap_fragment:Wh,specularmap_pars_fragment:Xh,tonemapping_fragment:qh,tonemapping_pars_fragment:$h,transmission_fragment:jh,transmission_pars_fragment:Yh,uv_pars_fragment:Kh,uv_pars_vertex:Zh,uv_vertex:Jh,worldpos_vertex:Qh,background_vert:ep,background_frag:tp,backgroundCube_vert:np,backgroundCube_frag:ip,cube_vert:rp,cube_frag:sp,depth_vert:op,depth_frag:ap,distanceRGBA_vert:lp,distanceRGBA_frag:cp,equirect_vert:up,equirect_frag:dp,linedashed_vert:fp,linedashed_frag:hp,meshbasic_vert:pp,meshbasic_frag:mp,meshlambert_vert:gp,meshlambert_frag:_p,meshmatcap_vert:vp,meshmatcap_frag:xp,meshnormal_vert:yp,meshnormal_frag:Sp,meshphong_vert:bp,meshphong_frag:Ep,meshphysical_vert:Mp,meshphysical_frag:Tp,meshtoon_vert:wp,meshtoon_frag:Ap,points_vert:Cp,points_frag:Rp,shadow_vert:Lp,shadow_frag:Pp,sprite_vert:Dp,sprite_frag:Ip},Ve={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},fi={basic:{uniforms:Dn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:Dn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Xt(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:Dn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:Dn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:Dn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Xt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:Dn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:Dn([Ve.points,Ve.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:Dn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:Dn([Ve.common,Ve.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:Dn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:Dn([Ve.sprite,Ve.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:Dn([Ve.common,Ve.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:Dn([Ve.lights,Ve.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};fi.physical={uniforms:Dn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const Gs={r:0,b:0,g:0},tr=new Di,Up=new on;function Np(i,e,t,n,r,o,a){const c=new Xt(0);let h=o===!0?0:1,g,m,x=null,y=0,S=null;function M(k){let F=k.isScene===!0?k.background:null;return F&&F.isTexture&&(F=(k.backgroundBlurriness>0?t:e).get(F)),F}function P(k){let F=!1;const u=M(k);u===null?_(c,h):u&&u.isColor&&(_(u,1),F=!0);const K=i.xr.getEnvironmentBlendMode();K==="additive"?n.buffers.color.setClear(0,0,0,1,a):K==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(k,F){const u=M(F);u&&(u.isCubeTexture||u.mapping===ro)?(m===void 0&&(m=new pi(new fr(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Vr(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(K,W,re){this.matrixWorld.copyPosition(re.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),tr.copy(F.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,u.isCubeTexture&&u.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),m.material.uniforms.envMap.value=u,m.material.uniforms.flipEnvMap.value=u.isCubeTexture&&u.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Up.makeRotationFromEuler(tr)),m.material.toneMapped=Vt.getTransfer(u.colorSpace)!==$t,(x!==u||y!==u.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,x=u,y=u.version,S=i.toneMapping),m.layers.enableAll(),k.unshift(m,m.geometry,m.material,0,0,null)):u&&u.isTexture&&(g===void 0&&(g=new pi(new oo(2,2),new $i({name:"BackgroundMaterial",uniforms:Vr(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(g)),g.material.uniforms.t2D.value=u,g.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,g.material.toneMapped=Vt.getTransfer(u.colorSpace)!==$t,u.matrixAutoUpdate===!0&&u.updateMatrix(),g.material.uniforms.uvTransform.value.copy(u.matrix),(x!==u||y!==u.version||S!==i.toneMapping)&&(g.material.needsUpdate=!0,x=u,y=u.version,S=i.toneMapping),g.layers.enableAll(),k.unshift(g,g.geometry,g.material,0,0,null))}function _(k,F){k.getRGB(Gs,kc(i)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,F,a)}function q(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),g!==void 0&&(g.geometry.dispose(),g.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(k,F=1){c.set(k),h=F,_(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(k){h=k,_(c,h)},render:P,addToRenderList:v,dispose:q}}function Fp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=y(null);let o=r,a=!1;function c(L,Y,me,de,Ee){let Me=!1;const ye=x(de,me,Y);o!==ye&&(o=ye,g(o.object)),Me=S(L,de,me,Ee),Me&&M(L,de,me,Ee),Ee!==null&&e.update(Ee,i.ELEMENT_ARRAY_BUFFER),(Me||a)&&(a=!1,F(L,Y,me,de),Ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Ee).buffer))}function h(){return i.createVertexArray()}function g(L){return i.bindVertexArray(L)}function m(L){return i.deleteVertexArray(L)}function x(L,Y,me){const de=me.wireframe===!0;let Ee=n[L.id];Ee===void 0&&(Ee={},n[L.id]=Ee);let Me=Ee[Y.id];Me===void 0&&(Me={},Ee[Y.id]=Me);let ye=Me[de];return ye===void 0&&(ye=y(h()),Me[de]=ye),ye}function y(L){const Y=[],me=[],de=[];for(let Ee=0;Ee<t;Ee++)Y[Ee]=0,me[Ee]=0,de[Ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:me,attributeDivisors:de,object:L,attributes:{},index:null}}function S(L,Y,me,de){const Ee=o.attributes,Me=Y.attributes;let ye=0;const Ae=me.getAttributes();for(const he in Ae)if(Ae[he].location>=0){const Ge=Ee[he];let rt=Me[he];if(rt===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(rt=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(rt=L.instanceColor)),Ge===void 0||Ge.attribute!==rt||rt&&Ge.data!==rt.data)return!0;ye++}return o.attributesNum!==ye||o.index!==de}function M(L,Y,me,de){const Ee={},Me=Y.attributes;let ye=0;const Ae=me.getAttributes();for(const he in Ae)if(Ae[he].location>=0){let Ge=Me[he];Ge===void 0&&(he==="instanceMatrix"&&L.instanceMatrix&&(Ge=L.instanceMatrix),he==="instanceColor"&&L.instanceColor&&(Ge=L.instanceColor));const rt={};rt.attribute=Ge,Ge&&Ge.data&&(rt.data=Ge.data),Ee[he]=rt,ye++}o.attributes=Ee,o.attributesNum=ye,o.index=de}function P(){const L=o.newAttributes;for(let Y=0,me=L.length;Y<me;Y++)L[Y]=0}function v(L){_(L,0)}function _(L,Y){const me=o.newAttributes,de=o.enabledAttributes,Ee=o.attributeDivisors;me[L]=1,de[L]===0&&(i.enableVertexAttribArray(L),de[L]=1),Ee[L]!==Y&&(i.vertexAttribDivisor(L,Y),Ee[L]=Y)}function q(){const L=o.newAttributes,Y=o.enabledAttributes;for(let me=0,de=Y.length;me<de;me++)Y[me]!==L[me]&&(i.disableVertexAttribArray(me),Y[me]=0)}function k(L,Y,me,de,Ee,Me,ye){ye===!0?i.vertexAttribIPointer(L,Y,me,Ee,Me):i.vertexAttribPointer(L,Y,me,de,Ee,Me)}function F(L,Y,me,de){P();const Ee=de.attributes,Me=me.getAttributes(),ye=Y.defaultAttributeValues;for(const Ae in Me){const he=Me[Ae];if(he.location>=0){let Ie=Ee[Ae];if(Ie===void 0&&(Ae==="instanceMatrix"&&L.instanceMatrix&&(Ie=L.instanceMatrix),Ae==="instanceColor"&&L.instanceColor&&(Ie=L.instanceColor)),Ie!==void 0){const Ge=Ie.normalized,rt=Ie.itemSize,Et=e.get(Ie);if(Et===void 0)continue;const Ot=Et.buffer,z=Et.type,Re=Et.bytesPerElement,We=z===i.INT||z===i.UNSIGNED_INT||Ie.gpuType===Ga;if(Ie.isInterleavedBufferAttribute){const Be=Ie.data,dt=Be.stride,ht=Ie.offset;if(Be.isInstancedInterleavedBuffer){for(let je=0;je<he.locationSize;je++)_(he.location+je,Be.meshPerAttribute);L.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let je=0;je<he.locationSize;je++)v(he.location+je);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let je=0;je<he.locationSize;je++)k(he.location+je,rt/he.locationSize,z,Ge,dt*Re,(ht+rt/he.locationSize*je)*Re,We)}else{if(Ie.isInstancedBufferAttribute){for(let Be=0;Be<he.locationSize;Be++)_(he.location+Be,Ie.meshPerAttribute);L.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Be=0;Be<he.locationSize;Be++)v(he.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let Be=0;Be<he.locationSize;Be++)k(he.location+Be,rt/he.locationSize,z,Ge,rt*Re,rt/he.locationSize*Be*Re,We)}}else if(ye!==void 0){const Ge=ye[Ae];if(Ge!==void 0)switch(Ge.length){case 2:i.vertexAttrib2fv(he.location,Ge);break;case 3:i.vertexAttrib3fv(he.location,Ge);break;case 4:i.vertexAttrib4fv(he.location,Ge);break;default:i.vertexAttrib1fv(he.location,Ge)}}}}q()}function u(){re();for(const L in n){const Y=n[L];for(const me in Y){const de=Y[me];for(const Ee in de)m(de[Ee].object),delete de[Ee];delete Y[me]}delete n[L]}}function K(L){if(n[L.id]===void 0)return;const Y=n[L.id];for(const me in Y){const de=Y[me];for(const Ee in de)m(de[Ee].object),delete de[Ee];delete Y[me]}delete n[L.id]}function W(L){for(const Y in n){const me=n[Y];if(me[L.id]===void 0)continue;const de=me[L.id];for(const Ee in de)m(de[Ee].object),delete de[Ee];delete me[L.id]}}function re(){I(),a=!0,o!==r&&(o=r,g(o.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:re,resetDefaultState:I,dispose:u,releaseStatesOfGeometry:K,releaseStatesOfProgram:W,initAttributes:P,enableAttribute:v,disableUnusedAttributes:q}}function Op(i,e,t){let n;function r(g){n=g}function o(g,m){i.drawArrays(n,g,m),t.update(m,n,1)}function a(g,m,x){x!==0&&(i.drawArraysInstanced(n,g,m,x),t.update(m,n,x))}function c(g,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,g,0,m,0,x);let S=0;for(let M=0;M<x;M++)S+=m[M];t.update(S,n,1)}function h(g,m,x,y){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<g.length;M++)a(g[M],m[M],y[M]);else{S.multiDrawArraysInstancedWEBGL(n,g,0,m,0,y,0,x);let M=0;for(let P=0;P<x;P++)M+=m[P]*y[P];t.update(M,n,1)}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function kp(i,e,t,n){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const W=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(W.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(W){return!(W!==oi&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(W){const re=W===ss&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(W!==Pi&&n.convert(W)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&W!==Ci&&!re)}function h(W){if(W==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";W="mediump"}return W==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=t.precision!==void 0?t.precision:"highp";const m=h(g);m!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",m,"instead."),g=m);const x=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),P=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),q=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),k=i.getParameter(i.MAX_VARYING_VECTORS),F=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),u=M>0,K=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:c,precision:g,logarithmicDepthBuffer:x,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:M,maxTextureSize:P,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:q,maxVaryings:k,maxFragmentUniforms:F,vertexTextures:u,maxSamples:K}}function Bp(i){const e=this;let t=null,n=0,r=!1,o=!1;const a=new ir,c=new wt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,y){const S=x.length!==0||y||n!==0||r;return r=y,n=x.length,S},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(x,y){t=m(x,y,0)},this.setState=function(x,y,S){const M=x.clippingPlanes,P=x.clipIntersection,v=x.clipShadows,_=i.get(x);if(!r||M===null||M.length===0||o&&!v)o?m(null):g();else{const q=o?0:n,k=q*4;let F=_.clippingState||null;h.value=F,F=m(M,y,k,S);for(let u=0;u!==k;++u)F[u]=t[u];_.clippingState=F,this.numIntersection=P?this.numPlanes:0,this.numPlanes+=q}};function g(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(x,y,S,M){const P=x!==null?x.length:0;let v=null;if(P!==0){if(v=h.value,M!==!0||v===null){const _=S+P*4,q=y.matrixWorldInverse;c.getNormalMatrix(q),(v===null||v.length<_)&&(v=new Float32Array(_));for(let k=0,F=S;k!==P;++k,F+=4)a.copy(x[k]).applyMatrix4(q,c),a.normal.toArray(v,F),v[F+3]=a.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=P,e.numIntersection=0,v}}function zp(i){let e=new WeakMap;function t(a,c){return c===ca?a.mapping=Or:c===ua&&(a.mapping=kr),a}function n(a){if(a&&a.isTexture){const c=a.mapping;if(c===ca||c===ua)if(e.has(a)){const h=e.get(a).texture;return t(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const g=new kd(h.height);return g.fromEquirectangularTexture(i,a),e.set(a,g),a.addEventListener("dispose",r),t(g.texture,a.mapping)}else return null}}return a}function r(a){const c=a.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const Dr=4,Gl=[.125,.215,.35,.446,.526,.582],or=20,qo=new Kd,Wl=new Xt;let $o=null,jo=0,Yo=0,Ko=!1;const rr=(1+Math.sqrt(5))/2,Lr=1/rr,Xl=[new le(-rr,Lr,0),new le(rr,Lr,0),new le(-Lr,0,rr),new le(Lr,0,rr),new le(0,rr,-Lr),new le(0,rr,Lr),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)];class ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){$o=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($o,jo,Yo),this._renderer.xr.enabled=Ko,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$o=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:ss,format:oi,colorSpace:Hr,depthBuffer:!1},r=$l(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$l(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hp(o)),this._blurMaterial=Vp(o,e,t)}return r}_compileMaterial(e){const t=new pi(this._lodPlanes[0],e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,n,r){const c=new Jn(90,1,t,n),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,y=m.toneMapping;m.getClearColor(Wl),m.toneMapping=Wi,m.autoClear=!1;const S=new us({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),M=new pi(new fr,S);let P=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,P=!0):(S.color.copy(Wl),P=!0);for(let _=0;_<6;_++){const q=_%3;q===0?(c.up.set(0,h[_],0),c.lookAt(g[_],0,0)):q===1?(c.up.set(0,0,h[_]),c.lookAt(0,g[_],0)):(c.up.set(0,h[_],0),c.lookAt(0,0,g[_]));const k=this._cubeSize;Ws(r,q*k,_>2?k:0,k,k),m.setRenderTarget(r),P&&m.render(M,c),m.render(e,c)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=y,m.autoClear=x,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Or||e.mapping===kr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jl());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new pi(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const h=this._cubeSize;Ws(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(a,qo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=Xl[(r-o-1)%Xl.length];this._blur(e,o-1,o,a,c)}t.autoClear=n}_blur(e,t,n,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",o),this._halfBlur(a,e,n,n,r,"longitudinal",o)}_halfBlur(e,t,n,r,o,a,c){const h=this._renderer,g=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,x=new pi(this._lodPlanes[r],g),y=g.uniforms,S=this._sizeLods[n]-1,M=isFinite(o)?Math.PI/(2*S):2*Math.PI/(2*or-1),P=o/M,v=isFinite(o)?1+Math.floor(m*P):or;v>or&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${or}`);const _=[];let q=0;for(let W=0;W<or;++W){const re=W/P,I=Math.exp(-re*re/2);_.push(I),W===0?q+=I:W<v&&(q+=2*I)}for(let W=0;W<_.length;W++)_[W]=_[W]/q;y.envMap.value=e.texture,y.samples.value=v,y.weights.value=_,y.latitudinal.value=a==="latitudinal",c&&(y.poleAxis.value=c);const{_lodMax:k}=this;y.dTheta.value=M,y.mipInt.value=k-n;const F=this._sizeLods[r],u=3*F*(r>k-Dr?r-k+Dr:0),K=4*(this._cubeSize-F);Ws(t,u,K,3*F,2*F),h.setRenderTarget(t),h.render(x,qo)}}function Hp(i){const e=[],t=[],n=[];let r=i;const o=i-Dr+1+Gl.length;for(let a=0;a<o;a++){const c=Math.pow(2,r);t.push(c);let h=1/c;a>i-Dr?h=Gl[a-i+Dr-1]:a===0&&(h=0),n.push(h);const g=1/(c-2),m=-g,x=1+g,y=[m,m,x,m,x,x,m,m,x,x,m,x],S=6,M=6,P=3,v=2,_=1,q=new Float32Array(P*M*S),k=new Float32Array(v*M*S),F=new Float32Array(_*M*S);for(let K=0;K<S;K++){const W=K%3*2/3-1,re=K>2?0:-1,I=[W,re,0,W+2/3,re,0,W+2/3,re+1,0,W,re,0,W+2/3,re+1,0,W,re+1,0];q.set(I,P*M*K),k.set(y,v*M*K);const L=[K,K,K,K,K,K];F.set(L,_*M*K)}const u=new Ii;u.setAttribute("position",new mi(q,P)),u.setAttribute("uv",new mi(k,v)),u.setAttribute("faceIndex",new mi(F,_)),e.push(u),r>Dr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $l(i,e,t){const n=new dr(i,e,t);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Vp(i,e,t){const n=new Float32Array(or),r=new le(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function jl(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Yl(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ka(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gp(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,g=h===ca||h===ua,m=h===Or||h===kr;if(g||m){let x=e.get(c);const y=x!==void 0?x.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==y)return t===null&&(t=new ql(i)),x=g?t.fromEquirectangular(c,x):t.fromCubemap(c,x),x.texture.pmremVersion=c.pmremVersion,e.set(c,x),x.texture;if(x!==void 0)return x.texture;{const S=c.image;return g&&S&&S.height>0||m&&S&&r(S)?(t===null&&(t=new ql(i)),x=g?t.fromEquirectangular(c):t.fromCubemap(c),x.texture.pmremVersion=c.pmremVersion,e.set(c,x),c.addEventListener("dispose",o),x.texture):null}}}return c}function r(c){let h=0;const g=6;for(let m=0;m<g;m++)c[m]!==void 0&&h++;return h===g}function o(c){const h=c.target;h.removeEventListener("dispose",o);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Wp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Pr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Xp(i,e,t,n){const r={},o=new WeakMap;function a(x){const y=x.target;y.index!==null&&e.remove(y.index);for(const M in y.attributes)e.remove(y.attributes[M]);y.removeEventListener("dispose",a),delete r[y.id];const S=o.get(y);S&&(e.remove(S),o.delete(y)),n.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function c(x,y){return r[y.id]===!0||(y.addEventListener("dispose",a),r[y.id]=!0,t.memory.geometries++),y}function h(x){const y=x.attributes;for(const S in y)e.update(y[S],i.ARRAY_BUFFER)}function g(x){const y=[],S=x.index,M=x.attributes.position;let P=0;if(S!==null){const q=S.array;P=S.version;for(let k=0,F=q.length;k<F;k+=3){const u=q[k+0],K=q[k+1],W=q[k+2];y.push(u,K,K,W,W,u)}}else if(M!==void 0){const q=M.array;P=M.version;for(let k=0,F=q.length/3-1;k<F;k+=3){const u=k+0,K=k+1,W=k+2;y.push(u,K,K,W,W,u)}}else return;const v=new(Lc(y)?Oc:Fc)(y,1);v.version=P;const _=o.get(x);_&&e.remove(_),o.set(x,v)}function m(x){const y=o.get(x);if(y){const S=x.index;S!==null&&y.version<S.version&&g(x)}else g(x);return o.get(x)}return{get:c,update:h,getWireframeAttribute:m}}function qp(i,e,t){let n;function r(y){n=y}let o,a;function c(y){o=y.type,a=y.bytesPerElement}function h(y,S){i.drawElements(n,S,o,y*a),t.update(S,n,1)}function g(y,S,M){M!==0&&(i.drawElementsInstanced(n,S,o,y*a,M),t.update(S,n,M))}function m(y,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,S,0,o,y,0,M);let v=0;for(let _=0;_<M;_++)v+=S[_];t.update(v,n,1)}function x(y,S,M,P){if(M===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let _=0;_<y.length;_++)g(y[_]/a,S[_],P[_]);else{v.multiDrawElementsInstancedWEBGL(n,S,0,o,y,0,P,0,M);let _=0;for(let q=0;q<M;q++)_+=S[q]*P[q];t.update(_,n,1)}}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=g,this.renderMultiDraw=m,this.renderMultiDrawInstances=x}function $p(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,c){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=c*(o/3);break;case i.LINES:t.lines+=c*(o/2);break;case i.LINE_STRIP:t.lines+=c*(o-1);break;case i.LINE_LOOP:t.lines+=c*o;break;case i.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function jp(i,e,t){const n=new WeakMap,r=new sn;function o(a,c,h){const g=a.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,x=m!==void 0?m.length:0;let y=n.get(c);if(y===void 0||y.count!==x){let L=function(){re.dispose(),n.delete(c),c.removeEventListener("dispose",L)};var S=L;y!==void 0&&y.texture.dispose();const M=c.morphAttributes.position!==void 0,P=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,_=c.morphAttributes.position||[],q=c.morphAttributes.normal||[],k=c.morphAttributes.color||[];let F=0;M===!0&&(F=1),P===!0&&(F=2),v===!0&&(F=3);let u=c.attributes.position.count*F,K=1;u>e.maxTextureSize&&(K=Math.ceil(u/e.maxTextureSize),u=e.maxTextureSize);const W=new Float32Array(u*K*4*x),re=new Dc(W,u,K,x);re.type=Ci,re.needsUpdate=!0;const I=F*4;for(let Y=0;Y<x;Y++){const me=_[Y],de=q[Y],Ee=k[Y],Me=u*K*4*Y;for(let ye=0;ye<me.count;ye++){const Ae=ye*I;M===!0&&(r.fromBufferAttribute(me,ye),W[Me+Ae+0]=r.x,W[Me+Ae+1]=r.y,W[Me+Ae+2]=r.z,W[Me+Ae+3]=0),P===!0&&(r.fromBufferAttribute(de,ye),W[Me+Ae+4]=r.x,W[Me+Ae+5]=r.y,W[Me+Ae+6]=r.z,W[Me+Ae+7]=0),v===!0&&(r.fromBufferAttribute(Ee,ye),W[Me+Ae+8]=r.x,W[Me+Ae+9]=r.y,W[Me+Ae+10]=r.z,W[Me+Ae+11]=Ee.itemSize===4?r.w:1)}}y={count:x,texture:re,size:new Zt(u,K)},n.set(c,y),c.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let M=0;for(let v=0;v<g.length;v++)M+=g[v];const P=c.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",P),h.getUniforms().setValue(i,"morphTargetInfluences",g)}h.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}return{update:o}}function Yp(i,e,t,n){let r=new WeakMap;function o(h){const g=n.render.frame,m=h.geometry,x=e.get(h,m);if(r.get(x)!==g&&(e.update(x),r.set(x,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==g&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,g))),h.isSkinnedMesh){const y=h.skeleton;r.get(y)!==g&&(y.update(),r.set(y,g))}return x}function a(){r=new WeakMap}function c(h){const g=h.target;g.removeEventListener("dispose",c),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:o,dispose:a}}const qc=new In,Kl=new Gc(1,1),$c=new Dc,jc=new bd,Yc=new zc,Zl=[],Jl=[],Ql=new Float32Array(16),ec=new Float32Array(9),tc=new Float32Array(4);function Xr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let o=Zl[r];if(o===void 0&&(o=new Float32Array(r),Zl[r]=o),e!==0){n.toArray(o,0);for(let a=1,c=0;a!==e;++a)c+=t,i[a].toArray(o,c)}return o}function gn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _n(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ao(i,e){let t=Jl[e];t===void 0&&(t=new Int32Array(e),Jl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Kp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2fv(this.addr,e),_n(t,e)}}function Jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;i.uniform3fv(this.addr,e),_n(t,e)}}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4fv(this.addr,e),_n(t,e)}}function em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;tc.set(n),i.uniformMatrix2fv(this.addr,!1,tc),_n(t,n)}}function tm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;ec.set(n),i.uniformMatrix3fv(this.addr,!1,ec),_n(t,n)}}function nm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;Ql.set(n),i.uniformMatrix4fv(this.addr,!1,Ql),_n(t,n)}}function im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2iv(this.addr,e),_n(t,e)}}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3iv(this.addr,e),_n(t,e)}}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4iv(this.addr,e),_n(t,e)}}function am(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2uiv(this.addr,e),_n(t,e)}}function cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3uiv(this.addr,e),_n(t,e)}}function um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4uiv(this.addr,e),_n(t,e)}}function dm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let o;this.type===i.SAMPLER_2D_SHADOW?(Kl.compareFunction=Rc,o=Kl):o=qc,t.setTexture2D(e||o,r)}function fm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||jc,r)}function hm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Yc,r)}function pm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||$c,r)}function mm(i){switch(i){case 5126:return Kp;case 35664:return Zp;case 35665:return Jp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return rm;case 35668:case 35672:return sm;case 35669:case 35673:return om;case 5125:return am;case 36294:return lm;case 36295:return cm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return pm}}function gm(i,e){i.uniform1fv(this.addr,e)}function _m(i,e){const t=Xr(e,this.size,2);i.uniform2fv(this.addr,t)}function vm(i,e){const t=Xr(e,this.size,3);i.uniform3fv(this.addr,t)}function xm(i,e){const t=Xr(e,this.size,4);i.uniform4fv(this.addr,t)}function ym(i,e){const t=Xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Sm(i,e){const t=Xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function bm(i,e){const t=Xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Em(i,e){i.uniform1iv(this.addr,e)}function Mm(i,e){i.uniform2iv(this.addr,e)}function Tm(i,e){i.uniform3iv(this.addr,e)}function wm(i,e){i.uniform4iv(this.addr,e)}function Am(i,e){i.uniform1uiv(this.addr,e)}function Cm(i,e){i.uniform2uiv(this.addr,e)}function Rm(i,e){i.uniform3uiv(this.addr,e)}function Lm(i,e){i.uniform4uiv(this.addr,e)}function Pm(i,e,t){const n=this.cache,r=e.length,o=ao(t,r);gn(n,o)||(i.uniform1iv(this.addr,o),_n(n,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||qc,o[a])}function Dm(i,e,t){const n=this.cache,r=e.length,o=ao(t,r);gn(n,o)||(i.uniform1iv(this.addr,o),_n(n,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||jc,o[a])}function Im(i,e,t){const n=this.cache,r=e.length,o=ao(t,r);gn(n,o)||(i.uniform1iv(this.addr,o),_n(n,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Yc,o[a])}function Um(i,e,t){const n=this.cache,r=e.length,o=ao(t,r);gn(n,o)||(i.uniform1iv(this.addr,o),_n(n,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||$c,o[a])}function Nm(i){switch(i){case 5126:return gm;case 35664:return _m;case 35665:return vm;case 35666:return xm;case 35674:return ym;case 35675:return Sm;case 35676:return bm;case 5124:case 35670:return Em;case 35667:case 35671:return Mm;case 35668:case 35672:return Tm;case 35669:case 35673:return wm;case 5125:return Am;case 36294:return Cm;case 36295:return Rm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Um}}class Fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=mm(t.type)}}class Om{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Nm(t.type)}}class km{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const c=r[o];c.setValue(e,t[c.id],n)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function nc(i,e){i.seq.push(e),i.map[e.id]=e}function Bm(i,e,t){const n=i.name,r=n.length;for(Zo.lastIndex=0;;){const o=Zo.exec(n),a=Zo.lastIndex;let c=o[1];const h=o[2]==="]",g=o[3];if(h&&(c=c|0),g===void 0||g==="["&&a+2===r){nc(t,g===void 0?new Fm(c,i,e):new Om(c,i,e));break}else{let x=t.map[c];x===void 0&&(x=new km(c),nc(t,x)),t=x}}}class Qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);Bm(o,a,this)}}setValue(e,t,n,r){const o=this.map[t];o!==void 0&&o.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let o=0,a=t.length;o!==a;++o){const c=t[o],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ic(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zm=37297;let Hm=0;function Vm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){const c=a+1;n.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return n.join(`
`)}const rc=new wt;function Gm(i){Vt._getMatrix(rc,Vt.workingColorSpace,i);const e=`mat3( ${rc.elements.map(t=>t.toFixed(4))} )`;switch(Vt.getTransfer(i)){case eo:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Vm(i.getShaderSource(e),a)}else return r}function Wm(i,e){const t=Gm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xm(i,e){let t;switch(e){case $u:t="Linear";break;case ju:t="Reinhard";break;case Yu:t="Cineon";break;case Ku:t="ACESFilmic";break;case Ju:t="AgX";break;case Qu:t="Neutral";break;case Zu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xs=new le;function qm(){Vt.getLuminanceCoefficients(Xs);const i=Xs.x.toFixed(4),e=Xs.y.toFixed(4),t=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function jm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ym(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const o=i.getActiveAttrib(e,r),a=o.name;let c=1;o.type===i.FLOAT_MAT2&&(c=2),o.type===i.FLOAT_MAT3&&(c=3),o.type===i.FLOAT_MAT4&&(c=4),t[a]={type:o.type,location:i.getAttribLocation(e,a),locationSize:c}}return t}function ns(i){return i!==""}function oc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ac(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Km=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(i){return i.replace(Km,Jm)}const Zm=new Map;function Jm(i,e){let t=At[e];if(t===void 0){const n=Zm.get(e);if(n!==void 0)t=At[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return za(t)}const Qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(i){return i.replace(Qm,eg)}function eg(i,e,t,n){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function cc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function ng(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Or:case kr:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ig(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case kr:e="ENVMAP_MODE_REFRACTION";break}return e}function rg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _c:e="ENVMAP_BLENDING_MULTIPLY";break;case Xu:e="ENVMAP_BLENDING_MIX";break;case qu:e="ENVMAP_BLENDING_ADD";break}return e}function sg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function og(i,e,t,n){const r=i.getContext(),o=t.defines;let a=t.vertexShader,c=t.fragmentShader;const h=tg(t),g=ng(t),m=ig(t),x=rg(t),y=sg(t),S=$m(t),M=jm(o),P=r.createProgram();let v,_,q=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ns).join(`
`),v.length>0&&(v+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ns).join(`
`),_.length>0&&(_+=`
`)):(v=[cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),_=[cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?At.tonemapping_pars_fragment:"",t.toneMapping!==Wi?Xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,Wm("linearToOutputTexel",t.outputColorSpace),qm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),a=za(a),a=oc(a,t),a=ac(a,t),c=za(c),c=oc(c,t),c=ac(c,t),a=lc(a),c=lc(c),t.isRawShaderMaterial!==!0&&(q=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,_=["#define varying in",t.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const k=q+v+a,F=q+_+c,u=ic(r,r.VERTEX_SHADER,k),K=ic(r,r.FRAGMENT_SHADER,F);r.attachShader(P,u),r.attachShader(P,K),t.index0AttributeName!==void 0?r.bindAttribLocation(P,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(P,0,"position"),r.linkProgram(P);function W(Y){if(i.debug.checkShaderErrors){const me=r.getProgramInfoLog(P).trim(),de=r.getShaderInfoLog(u).trim(),Ee=r.getShaderInfoLog(K).trim();let Me=!0,ye=!0;if(r.getProgramParameter(P,r.LINK_STATUS)===!1)if(Me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,P,u,K);else{const Ae=sc(r,u,"vertex"),he=sc(r,K,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(P,r.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+me+`
`+Ae+`
`+he)}else me!==""?console.warn("THREE.WebGLProgram: Program Info Log:",me):(de===""||Ee==="")&&(ye=!1);ye&&(Y.diagnostics={runnable:Me,programLog:me,vertexShader:{log:de,prefix:v},fragmentShader:{log:Ee,prefix:_}})}r.deleteShader(u),r.deleteShader(K),re=new Qs(r,P),I=Ym(r,P)}let re;this.getUniforms=function(){return re===void 0&&W(this),re};let I;this.getAttributes=function(){return I===void 0&&W(this),I};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(P,zm)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(P),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hm++,this.cacheKey=e,this.usedTimes=1,this.program=P,this.vertexShader=u,this.fragmentShader=K,this}let ag=0;class lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new cg(e),t.set(e,n)),n}}class cg{constructor(e){this.id=ag++,this.code=e,this.usedTimes=0}}function ug(i,e,t,n,r,o,a){const c=new Uc,h=new lg,g=new Set,m=[],x=r.logarithmicDepthBuffer,y=r.vertexTextures;let S=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function P(I){return g.add(I),I===0?"uv":`uv${I}`}function v(I,L,Y,me,de){const Ee=me.fog,Me=de.geometry,ye=I.isMeshStandardMaterial?me.environment:null,Ae=(I.isMeshStandardMaterial?t:e).get(I.envMap||ye),he=Ae&&Ae.mapping===ro?Ae.image.height:null,Ie=M[I.type];I.precision!==null&&(S=r.getMaxPrecision(I.precision),S!==I.precision&&console.warn("THREE.WebGLProgram.getParameters:",I.precision,"not supported, using",S,"instead."));const Ge=Me.morphAttributes.position||Me.morphAttributes.normal||Me.morphAttributes.color,rt=Ge!==void 0?Ge.length:0;let Et=0;Me.morphAttributes.position!==void 0&&(Et=1),Me.morphAttributes.normal!==void 0&&(Et=2),Me.morphAttributes.color!==void 0&&(Et=3);let Ot,z,Re,We;if(Ie){const Bt=fi[Ie];Ot=Bt.vertexShader,z=Bt.fragmentShader}else Ot=I.vertexShader,z=I.fragmentShader,h.update(I),Re=h.getVertexShaderID(I),We=h.getFragmentShaderID(I);const Be=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),ht=de.isInstancedMesh===!0,je=de.isBatchedMesh===!0,pt=!!I.map,at=!!I.matcap,He=!!Ae,G=!!I.aoMap,vn=!!I.lightMap,Ct=!!I.bumpMap,Tt=!!I.normalMap,st=!!I.displacementMap,kt=!!I.emissiveMap,Ze=!!I.metalnessMap,U=!!I.roughnessMap,w=I.anisotropy>0,oe=I.clearcoat>0,xe=I.dispersion>0,Te=I.iridescence>0,ge=I.sheen>0,et=I.transmission>0,Ue=w&&!!I.anisotropyMap,$e=oe&&!!I.clearcoatMap,vt=oe&&!!I.clearcoatNormalMap,Pe=oe&&!!I.clearcoatRoughnessMap,Je=Te&&!!I.iridescenceMap,Qe=Te&&!!I.iridescenceThicknessMap,it=ge&&!!I.sheenColorMap,Ye=ge&&!!I.sheenRoughnessMap,Rt=!!I.specularMap,xt=!!I.specularColorMap,Wt=!!I.specularIntensityMap,J=et&&!!I.transmissionMap,ze=et&&!!I.thicknessMap,fe=!!I.gradientMap,ve=!!I.alphaMap,Xe=I.alphaTest>0,Fe=!!I.alphaHash,gt=!!I.extensions;let Jt=Wi;I.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(Jt=i.toneMapping);const an={shaderID:Ie,shaderType:I.type,shaderName:I.name,vertexShader:Ot,fragmentShader:z,defines:I.defines,customVertexShaderID:Re,customFragmentShaderID:We,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:S,batching:je,batchingColor:je&&de._colorsTexture!==null,instancing:ht,instancingColor:ht&&de.instanceColor!==null,instancingMorph:ht&&de.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:Be===null?i.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:Hr,alphaToCoverage:!!I.alphaToCoverage,map:pt,matcap:at,envMap:He,envMapMode:He&&Ae.mapping,envMapCubeUVHeight:he,aoMap:G,lightMap:vn,bumpMap:Ct,normalMap:Tt,displacementMap:y&&st,emissiveMap:kt,normalMapObjectSpace:Tt&&I.normalMapType===rd,normalMapTangentSpace:Tt&&I.normalMapType===id,metalnessMap:Ze,roughnessMap:U,anisotropy:w,anisotropyMap:Ue,clearcoat:oe,clearcoatMap:$e,clearcoatNormalMap:vt,clearcoatRoughnessMap:Pe,dispersion:xe,iridescence:Te,iridescenceMap:Je,iridescenceThicknessMap:Qe,sheen:ge,sheenColorMap:it,sheenRoughnessMap:Ye,specularMap:Rt,specularColorMap:xt,specularIntensityMap:Wt,transmission:et,transmissionMap:J,thicknessMap:ze,gradientMap:fe,opaque:I.transparent===!1&&I.blending===Ir&&I.alphaToCoverage===!1,alphaMap:ve,alphaTest:Xe,alphaHash:Fe,combine:I.combine,mapUv:pt&&P(I.map.channel),aoMapUv:G&&P(I.aoMap.channel),lightMapUv:vn&&P(I.lightMap.channel),bumpMapUv:Ct&&P(I.bumpMap.channel),normalMapUv:Tt&&P(I.normalMap.channel),displacementMapUv:st&&P(I.displacementMap.channel),emissiveMapUv:kt&&P(I.emissiveMap.channel),metalnessMapUv:Ze&&P(I.metalnessMap.channel),roughnessMapUv:U&&P(I.roughnessMap.channel),anisotropyMapUv:Ue&&P(I.anisotropyMap.channel),clearcoatMapUv:$e&&P(I.clearcoatMap.channel),clearcoatNormalMapUv:vt&&P(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&P(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&P(I.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&P(I.iridescenceThicknessMap.channel),sheenColorMapUv:it&&P(I.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&P(I.sheenRoughnessMap.channel),specularMapUv:Rt&&P(I.specularMap.channel),specularColorMapUv:xt&&P(I.specularColorMap.channel),specularIntensityMapUv:Wt&&P(I.specularIntensityMap.channel),transmissionMapUv:J&&P(I.transmissionMap.channel),thicknessMapUv:ze&&P(I.thicknessMap.channel),alphaMapUv:ve&&P(I.alphaMap.channel),vertexTangents:!!Me.attributes.tangent&&(Tt||w),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!Me.attributes.color&&Me.attributes.color.itemSize===4,pointsUvs:de.isPoints===!0&&!!Me.attributes.uv&&(pt||ve),fog:!!Ee,useFog:I.fog===!0,fogExp2:!!Ee&&Ee.isFogExp2,flatShading:I.flatShading===!0,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:dt,skinning:de.isSkinnedMesh===!0,morphTargets:Me.morphAttributes.position!==void 0,morphNormals:Me.morphAttributes.normal!==void 0,morphColors:Me.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Et,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:pt&&I.map.isVideoTexture===!0&&Vt.getTransfer(I.map.colorSpace)===$t,decodeVideoTextureEmissive:kt&&I.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(I.emissiveMap.colorSpace)===$t,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===Ai,flipSided:I.side===Bn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:gt&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&I.extensions.multiDraw===!0||je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return an.vertexUv1s=g.has(1),an.vertexUv2s=g.has(2),an.vertexUv3s=g.has(3),g.clear(),an}function _(I){const L=[];if(I.shaderID?L.push(I.shaderID):(L.push(I.customVertexShaderID),L.push(I.customFragmentShaderID)),I.defines!==void 0)for(const Y in I.defines)L.push(Y),L.push(I.defines[Y]);return I.isRawShaderMaterial===!1&&(q(L,I),k(L,I),L.push(i.outputColorSpace)),L.push(I.customProgramCacheKey),L.join()}function q(I,L){I.push(L.precision),I.push(L.outputColorSpace),I.push(L.envMapMode),I.push(L.envMapCubeUVHeight),I.push(L.mapUv),I.push(L.alphaMapUv),I.push(L.lightMapUv),I.push(L.aoMapUv),I.push(L.bumpMapUv),I.push(L.normalMapUv),I.push(L.displacementMapUv),I.push(L.emissiveMapUv),I.push(L.metalnessMapUv),I.push(L.roughnessMapUv),I.push(L.anisotropyMapUv),I.push(L.clearcoatMapUv),I.push(L.clearcoatNormalMapUv),I.push(L.clearcoatRoughnessMapUv),I.push(L.iridescenceMapUv),I.push(L.iridescenceThicknessMapUv),I.push(L.sheenColorMapUv),I.push(L.sheenRoughnessMapUv),I.push(L.specularMapUv),I.push(L.specularColorMapUv),I.push(L.specularIntensityMapUv),I.push(L.transmissionMapUv),I.push(L.thicknessMapUv),I.push(L.combine),I.push(L.fogExp2),I.push(L.sizeAttenuation),I.push(L.morphTargetsCount),I.push(L.morphAttributeCount),I.push(L.numDirLights),I.push(L.numPointLights),I.push(L.numSpotLights),I.push(L.numSpotLightMaps),I.push(L.numHemiLights),I.push(L.numRectAreaLights),I.push(L.numDirLightShadows),I.push(L.numPointLightShadows),I.push(L.numSpotLightShadows),I.push(L.numSpotLightShadowsWithMaps),I.push(L.numLightProbes),I.push(L.shadowMapType),I.push(L.toneMapping),I.push(L.numClippingPlanes),I.push(L.numClipIntersection),I.push(L.depthPacking)}function k(I,L){c.disableAll(),L.supportsVertexTextures&&c.enable(0),L.instancing&&c.enable(1),L.instancingColor&&c.enable(2),L.instancingMorph&&c.enable(3),L.matcap&&c.enable(4),L.envMap&&c.enable(5),L.normalMapObjectSpace&&c.enable(6),L.normalMapTangentSpace&&c.enable(7),L.clearcoat&&c.enable(8),L.iridescence&&c.enable(9),L.alphaTest&&c.enable(10),L.vertexColors&&c.enable(11),L.vertexAlphas&&c.enable(12),L.vertexUv1s&&c.enable(13),L.vertexUv2s&&c.enable(14),L.vertexUv3s&&c.enable(15),L.vertexTangents&&c.enable(16),L.anisotropy&&c.enable(17),L.alphaHash&&c.enable(18),L.batching&&c.enable(19),L.dispersion&&c.enable(20),L.batchingColor&&c.enable(21),I.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reverseDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),I.push(c.mask)}function F(I){const L=M[I.type];let Y;if(L){const me=fi[L];Y=Ud.clone(me.uniforms)}else Y=I.uniforms;return Y}function u(I,L){let Y;for(let me=0,de=m.length;me<de;me++){const Ee=m[me];if(Ee.cacheKey===L){Y=Ee,++Y.usedTimes;break}}return Y===void 0&&(Y=new og(i,L,I,o),m.push(Y)),Y}function K(I){if(--I.usedTimes===0){const L=m.indexOf(I);m[L]=m[m.length-1],m.pop(),I.destroy()}}function W(I){h.remove(I)}function re(){h.dispose()}return{getParameters:v,getProgramCacheKey:_,getUniforms:F,acquireProgram:u,releaseProgram:K,releaseShaderCache:W,programs:m,dispose:re}}function dg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let c=i.get(a);return c===void 0&&(c={},i.set(a,c)),c}function n(a){i.delete(a)}function r(a,c,h){i.get(a)[c]=h}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:o}}function fg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function uc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dc(){const i=[];let e=0;const t=[],n=[],r=[];function o(){e=0,t.length=0,n.length=0,r.length=0}function a(x,y,S,M,P,v){let _=i[e];return _===void 0?(_={id:x.id,object:x,geometry:y,material:S,groupOrder:M,renderOrder:x.renderOrder,z:P,group:v},i[e]=_):(_.id=x.id,_.object=x,_.geometry=y,_.material=S,_.groupOrder=M,_.renderOrder=x.renderOrder,_.z=P,_.group=v),e++,_}function c(x,y,S,M,P,v){const _=a(x,y,S,M,P,v);S.transmission>0?n.push(_):S.transparent===!0?r.push(_):t.push(_)}function h(x,y,S,M,P,v){const _=a(x,y,S,M,P,v);S.transmission>0?n.unshift(_):S.transparent===!0?r.unshift(_):t.unshift(_)}function g(x,y){t.length>1&&t.sort(x||fg),n.length>1&&n.sort(y||uc),r.length>1&&r.sort(y||uc)}function m(){for(let x=e,y=i.length;x<y;x++){const S=i[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:r,init:o,push:c,unshift:h,finish:m,sort:g}}function hg(){let i=new WeakMap;function e(n,r){const o=i.get(n);let a;return o===void 0?(a=new dc,i.set(n,[a])):r>=o.length?(a=new dc,o.push(a)):a=o[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function pg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new Xt};break;case"SpotLight":t={position:new le,direction:new le,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":t={color:new Xt,position:new le,halfWidth:new le,halfHeight:new le};break}return i[e.id]=t,t}}}function mg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gg=0;function _g(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function vg(i){const e=new pg,t=mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)n.probe.push(new le);const r=new le,o=new on,a=new on;function c(g){let m=0,x=0,y=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let S=0,M=0,P=0,v=0,_=0,q=0,k=0,F=0,u=0,K=0,W=0;g.sort(_g);for(let I=0,L=g.length;I<L;I++){const Y=g[I],me=Y.color,de=Y.intensity,Ee=Y.distance,Me=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)m+=me.r*de,x+=me.g*de,y+=me.b*de;else if(Y.isLightProbe){for(let ye=0;ye<9;ye++)n.probe[ye].addScaledVector(Y.sh.coefficients[ye],de);W++}else if(Y.isDirectionalLight){const ye=e.get(Y);if(ye.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const Ae=Y.shadow,he=t.get(Y);he.shadowIntensity=Ae.intensity,he.shadowBias=Ae.bias,he.shadowNormalBias=Ae.normalBias,he.shadowRadius=Ae.radius,he.shadowMapSize=Ae.mapSize,n.directionalShadow[S]=he,n.directionalShadowMap[S]=Me,n.directionalShadowMatrix[S]=Y.shadow.matrix,q++}n.directional[S]=ye,S++}else if(Y.isSpotLight){const ye=e.get(Y);ye.position.setFromMatrixPosition(Y.matrixWorld),ye.color.copy(me).multiplyScalar(de),ye.distance=Ee,ye.coneCos=Math.cos(Y.angle),ye.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),ye.decay=Y.decay,n.spot[P]=ye;const Ae=Y.shadow;if(Y.map&&(n.spotLightMap[u]=Y.map,u++,Ae.updateMatrices(Y),Y.castShadow&&K++),n.spotLightMatrix[P]=Ae.matrix,Y.castShadow){const he=t.get(Y);he.shadowIntensity=Ae.intensity,he.shadowBias=Ae.bias,he.shadowNormalBias=Ae.normalBias,he.shadowRadius=Ae.radius,he.shadowMapSize=Ae.mapSize,n.spotShadow[P]=he,n.spotShadowMap[P]=Me,F++}P++}else if(Y.isRectAreaLight){const ye=e.get(Y);ye.color.copy(me).multiplyScalar(de),ye.halfWidth.set(Y.width*.5,0,0),ye.halfHeight.set(0,Y.height*.5,0),n.rectArea[v]=ye,v++}else if(Y.isPointLight){const ye=e.get(Y);if(ye.color.copy(Y.color).multiplyScalar(Y.intensity),ye.distance=Y.distance,ye.decay=Y.decay,Y.castShadow){const Ae=Y.shadow,he=t.get(Y);he.shadowIntensity=Ae.intensity,he.shadowBias=Ae.bias,he.shadowNormalBias=Ae.normalBias,he.shadowRadius=Ae.radius,he.shadowMapSize=Ae.mapSize,he.shadowCameraNear=Ae.camera.near,he.shadowCameraFar=Ae.camera.far,n.pointShadow[M]=he,n.pointShadowMap[M]=Me,n.pointShadowMatrix[M]=Y.shadow.matrix,k++}n.point[M]=ye,M++}else if(Y.isHemisphereLight){const ye=e.get(Y);ye.skyColor.copy(Y.color).multiplyScalar(de),ye.groundColor.copy(Y.groundColor).multiplyScalar(de),n.hemi[_]=ye,_++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=x,n.ambient[2]=y;const re=n.hash;(re.directionalLength!==S||re.pointLength!==M||re.spotLength!==P||re.rectAreaLength!==v||re.hemiLength!==_||re.numDirectionalShadows!==q||re.numPointShadows!==k||re.numSpotShadows!==F||re.numSpotMaps!==u||re.numLightProbes!==W)&&(n.directional.length=S,n.spot.length=P,n.rectArea.length=v,n.point.length=M,n.hemi.length=_,n.directionalShadow.length=q,n.directionalShadowMap.length=q,n.pointShadow.length=k,n.pointShadowMap.length=k,n.spotShadow.length=F,n.spotShadowMap.length=F,n.directionalShadowMatrix.length=q,n.pointShadowMatrix.length=k,n.spotLightMatrix.length=F+u-K,n.spotLightMap.length=u,n.numSpotLightShadowsWithMaps=K,n.numLightProbes=W,re.directionalLength=S,re.pointLength=M,re.spotLength=P,re.rectAreaLength=v,re.hemiLength=_,re.numDirectionalShadows=q,re.numPointShadows=k,re.numSpotShadows=F,re.numSpotMaps=u,re.numLightProbes=W,n.version=gg++)}function h(g,m){let x=0,y=0,S=0,M=0,P=0;const v=m.matrixWorldInverse;for(let _=0,q=g.length;_<q;_++){const k=g[_];if(k.isDirectionalLight){const F=n.directional[x];F.direction.setFromMatrixPosition(k.matrixWorld),r.setFromMatrixPosition(k.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(v),x++}else if(k.isSpotLight){const F=n.spot[S];F.position.setFromMatrixPosition(k.matrixWorld),F.position.applyMatrix4(v),F.direction.setFromMatrixPosition(k.matrixWorld),r.setFromMatrixPosition(k.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(v),S++}else if(k.isRectAreaLight){const F=n.rectArea[M];F.position.setFromMatrixPosition(k.matrixWorld),F.position.applyMatrix4(v),a.identity(),o.copy(k.matrixWorld),o.premultiply(v),a.extractRotation(o),F.halfWidth.set(k.width*.5,0,0),F.halfHeight.set(0,k.height*.5,0),F.halfWidth.applyMatrix4(a),F.halfHeight.applyMatrix4(a),M++}else if(k.isPointLight){const F=n.point[y];F.position.setFromMatrixPosition(k.matrixWorld),F.position.applyMatrix4(v),y++}else if(k.isHemisphereLight){const F=n.hemi[P];F.direction.setFromMatrixPosition(k.matrixWorld),F.direction.transformDirection(v),P++}}}return{setup:c,setupView:h,state:n}}function fc(i){const e=new vg(i),t=[],n=[];function r(m){g.camera=m,t.length=0,n.length=0}function o(m){t.push(m)}function a(m){n.push(m)}function c(){e.setup(t)}function h(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:g,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a}}function xg(i){let e=new WeakMap;function t(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new fc(i),e.set(r,[c])):o>=a.length?(c=new fc(i),a.push(c)):c=a[o],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bg(i,e,t){let n=new Hc;const r=new Zt,o=new Zt,a=new sn,c=new Xd({depthPacking:nd}),h=new qd,g={},m=t.maxTextureSize,x={[qi]:Bn,[Bn]:qi,[Ai]:Ai},y=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:yg,fragmentShader:Sg}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const M=new Ii;M.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const P=new pi(M,y),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gc;let _=this.type;this.render=function(K,W,re){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||K.length===0)return;const I=i.getRenderTarget(),L=i.getActiveCubeFace(),Y=i.getActiveMipmapLevel(),me=i.state;me.setBlending(Gi),me.buffers.color.setClear(1,1,1,1),me.buffers.depth.setTest(!0),me.setScissorTest(!1);const de=_!==wi&&this.type===wi,Ee=_===wi&&this.type!==wi;for(let Me=0,ye=K.length;Me<ye;Me++){const Ae=K[Me],he=Ae.shadow;if(he===void 0){console.warn("THREE.WebGLShadowMap:",Ae,"has no shadow.");continue}if(he.autoUpdate===!1&&he.needsUpdate===!1)continue;r.copy(he.mapSize);const Ie=he.getFrameExtents();if(r.multiply(Ie),o.copy(he.mapSize),(r.x>m||r.y>m)&&(r.x>m&&(o.x=Math.floor(m/Ie.x),r.x=o.x*Ie.x,he.mapSize.x=o.x),r.y>m&&(o.y=Math.floor(m/Ie.y),r.y=o.y*Ie.y,he.mapSize.y=o.y)),he.map===null||de===!0||Ee===!0){const rt=this.type!==wi?{minFilter:ai,magFilter:ai}:{};he.map!==null&&he.map.dispose(),he.map=new dr(r.x,r.y,rt),he.map.texture.name=Ae.name+".shadowMap",he.camera.updateProjectionMatrix()}i.setRenderTarget(he.map),i.clear();const Ge=he.getViewportCount();for(let rt=0;rt<Ge;rt++){const Et=he.getViewport(rt);a.set(o.x*Et.x,o.y*Et.y,o.x*Et.z,o.y*Et.w),me.viewport(a),he.updateMatrices(Ae,rt),n=he.getFrustum(),F(W,re,he.camera,Ae,this.type)}he.isPointLightShadow!==!0&&this.type===wi&&q(he,re),he.needsUpdate=!1}_=this.type,v.needsUpdate=!1,i.setRenderTarget(I,L,Y)};function q(K,W){const re=e.update(P);y.defines.VSM_SAMPLES!==K.blurSamples&&(y.defines.VSM_SAMPLES=K.blurSamples,S.defines.VSM_SAMPLES=K.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),K.mapPass===null&&(K.mapPass=new dr(r.x,r.y)),y.uniforms.shadow_pass.value=K.map.texture,y.uniforms.resolution.value=K.mapSize,y.uniforms.radius.value=K.radius,i.setRenderTarget(K.mapPass),i.clear(),i.renderBufferDirect(W,null,re,y,P,null),S.uniforms.shadow_pass.value=K.mapPass.texture,S.uniforms.resolution.value=K.mapSize,S.uniforms.radius.value=K.radius,i.setRenderTarget(K.map),i.clear(),i.renderBufferDirect(W,null,re,S,P,null)}function k(K,W,re,I){let L=null;const Y=re.isPointLight===!0?K.customDistanceMaterial:K.customDepthMaterial;if(Y!==void 0)L=Y;else if(L=re.isPointLight===!0?h:c,i.localClippingEnabled&&W.clipShadows===!0&&Array.isArray(W.clippingPlanes)&&W.clippingPlanes.length!==0||W.displacementMap&&W.displacementScale!==0||W.alphaMap&&W.alphaTest>0||W.map&&W.alphaTest>0){const me=L.uuid,de=W.uuid;let Ee=g[me];Ee===void 0&&(Ee={},g[me]=Ee);let Me=Ee[de];Me===void 0&&(Me=L.clone(),Ee[de]=Me,W.addEventListener("dispose",u)),L=Me}if(L.visible=W.visible,L.wireframe=W.wireframe,I===wi?L.side=W.shadowSide!==null?W.shadowSide:W.side:L.side=W.shadowSide!==null?W.shadowSide:x[W.side],L.alphaMap=W.alphaMap,L.alphaTest=W.alphaTest,L.map=W.map,L.clipShadows=W.clipShadows,L.clippingPlanes=W.clippingPlanes,L.clipIntersection=W.clipIntersection,L.displacementMap=W.displacementMap,L.displacementScale=W.displacementScale,L.displacementBias=W.displacementBias,L.wireframeLinewidth=W.wireframeLinewidth,L.linewidth=W.linewidth,re.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const me=i.properties.get(L);me.light=re}return L}function F(K,W,re,I,L){if(K.visible===!1)return;if(K.layers.test(W.layers)&&(K.isMesh||K.isLine||K.isPoints)&&(K.castShadow||K.receiveShadow&&L===wi)&&(!K.frustumCulled||n.intersectsObject(K))){K.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,K.matrixWorld);const de=e.update(K),Ee=K.material;if(Array.isArray(Ee)){const Me=de.groups;for(let ye=0,Ae=Me.length;ye<Ae;ye++){const he=Me[ye],Ie=Ee[he.materialIndex];if(Ie&&Ie.visible){const Ge=k(K,Ie,I,L);K.onBeforeShadow(i,K,W,re,de,Ge,he),i.renderBufferDirect(re,null,de,Ge,K,he),K.onAfterShadow(i,K,W,re,de,Ge,he)}}}else if(Ee.visible){const Me=k(K,Ee,I,L);K.onBeforeShadow(i,K,W,re,de,Me,null),i.renderBufferDirect(re,null,de,Me,K,null),K.onAfterShadow(i,K,W,re,de,Me,null)}}const me=K.children;for(let de=0,Ee=me.length;de<Ee;de++)F(me[de],W,re,I,L)}function u(K){K.target.removeEventListener("dispose",u);for(const re in g){const I=g[re],L=K.target.uuid;L in I&&(I[L].dispose(),delete I[L])}}}const Eg={[na]:ia,[ra]:aa,[sa]:la,[Fr]:oa,[ia]:na,[aa]:ra,[la]:sa,[oa]:Fr};function Mg(i,e){function t(){let J=!1;const ze=new sn;let fe=null;const ve=new sn(0,0,0,0);return{setMask:function(Xe){fe!==Xe&&!J&&(i.colorMask(Xe,Xe,Xe,Xe),fe=Xe)},setLocked:function(Xe){J=Xe},setClear:function(Xe,Fe,gt,Jt,an){an===!0&&(Xe*=Jt,Fe*=Jt,gt*=Jt),ze.set(Xe,Fe,gt,Jt),ve.equals(ze)===!1&&(i.clearColor(Xe,Fe,gt,Jt),ve.copy(ze))},reset:function(){J=!1,fe=null,ve.set(-1,0,0,0)}}}function n(){let J=!1,ze=!1,fe=null,ve=null,Xe=null;return{setReversed:function(Fe){if(ze!==Fe){const gt=e.get("EXT_clip_control");ze?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT);const Jt=Xe;Xe=null,this.setClear(Jt)}ze=Fe},getReversed:function(){return ze},setTest:function(Fe){Fe?Be(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(Fe){fe!==Fe&&!J&&(i.depthMask(Fe),fe=Fe)},setFunc:function(Fe){if(ze&&(Fe=Eg[Fe]),ve!==Fe){switch(Fe){case na:i.depthFunc(i.NEVER);break;case ia:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case Fr:i.depthFunc(i.LEQUAL);break;case sa:i.depthFunc(i.EQUAL);break;case oa:i.depthFunc(i.GEQUAL);break;case aa:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Fe}},setLocked:function(Fe){J=Fe},setClear:function(Fe){Xe!==Fe&&(ze&&(Fe=1-Fe),i.clearDepth(Fe),Xe=Fe)},reset:function(){J=!1,fe=null,ve=null,Xe=null,ze=!1}}}function r(){let J=!1,ze=null,fe=null,ve=null,Xe=null,Fe=null,gt=null,Jt=null,an=null;return{setTest:function(Bt){J||(Bt?Be(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(Bt){ze!==Bt&&!J&&(i.stencilMask(Bt),ze=Bt)},setFunc:function(Bt,Tn,Un){(fe!==Bt||ve!==Tn||Xe!==Un)&&(i.stencilFunc(Bt,Tn,Un),fe=Bt,ve=Tn,Xe=Un)},setOp:function(Bt,Tn,Un){(Fe!==Bt||gt!==Tn||Jt!==Un)&&(i.stencilOp(Bt,Tn,Un),Fe=Bt,gt=Tn,Jt=Un)},setLocked:function(Bt){J=Bt},setClear:function(Bt){an!==Bt&&(i.clearStencil(Bt),an=Bt)},reset:function(){J=!1,ze=null,fe=null,ve=null,Xe=null,Fe=null,gt=null,Jt=null,an=null}}}const o=new t,a=new n,c=new r,h=new WeakMap,g=new WeakMap;let m={},x={},y=new WeakMap,S=[],M=null,P=!1,v=null,_=null,q=null,k=null,F=null,u=null,K=null,W=new Xt(0,0,0),re=0,I=!1,L=null,Y=null,me=null,de=null,Ee=null;const Me=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ye=!1,Ae=0;const he=i.getParameter(i.VERSION);he.indexOf("WebGL")!==-1?(Ae=parseFloat(/^WebGL (\d)/.exec(he)[1]),ye=Ae>=1):he.indexOf("OpenGL ES")!==-1&&(Ae=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),ye=Ae>=2);let Ie=null,Ge={};const rt=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),Ot=new sn().fromArray(rt),z=new sn().fromArray(Et);function Re(J,ze,fe,ve){const Xe=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(J,Fe),i.texParameteri(J,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(J,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<fe;gt++)J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?i.texImage3D(ze,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Xe):i.texImage2D(ze+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Xe);return Fe}const We={};We[i.TEXTURE_2D]=Re(i.TEXTURE_2D,i.TEXTURE_2D,1),We[i.TEXTURE_CUBE_MAP]=Re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),We[i.TEXTURE_2D_ARRAY]=Re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),We[i.TEXTURE_3D]=Re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),c.setClear(0),Be(i.DEPTH_TEST),a.setFunc(Fr),Ct(!1),Tt(hl),Be(i.CULL_FACE),G(Gi);function Be(J){m[J]!==!0&&(i.enable(J),m[J]=!0)}function dt(J){m[J]!==!1&&(i.disable(J),m[J]=!1)}function ht(J,ze){return x[J]!==ze?(i.bindFramebuffer(J,ze),x[J]=ze,J===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=ze),J===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=ze),!0):!1}function je(J,ze){let fe=S,ve=!1;if(J){fe=y.get(ze),fe===void 0&&(fe=[],y.set(ze,fe));const Xe=J.textures;if(fe.length!==Xe.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,gt=Xe.length;Fe<gt;Fe++)fe[Fe]=i.COLOR_ATTACHMENT0+Fe;fe.length=Xe.length,ve=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,ve=!0);ve&&i.drawBuffers(fe)}function pt(J){return M!==J?(i.useProgram(J),M=J,!0):!1}const at={[sr]:i.FUNC_ADD,[Cu]:i.FUNC_SUBTRACT,[Ru]:i.FUNC_REVERSE_SUBTRACT};at[Lu]=i.MIN,at[Pu]=i.MAX;const He={[Du]:i.ZERO,[Iu]:i.ONE,[Uu]:i.SRC_COLOR,[ea]:i.SRC_ALPHA,[zu]:i.SRC_ALPHA_SATURATE,[ku]:i.DST_COLOR,[Fu]:i.DST_ALPHA,[Nu]:i.ONE_MINUS_SRC_COLOR,[ta]:i.ONE_MINUS_SRC_ALPHA,[Bu]:i.ONE_MINUS_DST_COLOR,[Ou]:i.ONE_MINUS_DST_ALPHA,[Hu]:i.CONSTANT_COLOR,[Vu]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Wu]:i.ONE_MINUS_CONSTANT_ALPHA};function G(J,ze,fe,ve,Xe,Fe,gt,Jt,an,Bt){if(J===Gi){P===!0&&(dt(i.BLEND),P=!1);return}if(P===!1&&(Be(i.BLEND),P=!0),J!==Au){if(J!==v||Bt!==I){if((_!==sr||F!==sr)&&(i.blendEquation(i.FUNC_ADD),_=sr,F=sr),Bt)switch(J){case Ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}else switch(J){case Ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}q=null,k=null,u=null,K=null,W.set(0,0,0),re=0,v=J,I=Bt}return}Xe=Xe||ze,Fe=Fe||fe,gt=gt||ve,(ze!==_||Xe!==F)&&(i.blendEquationSeparate(at[ze],at[Xe]),_=ze,F=Xe),(fe!==q||ve!==k||Fe!==u||gt!==K)&&(i.blendFuncSeparate(He[fe],He[ve],He[Fe],He[gt]),q=fe,k=ve,u=Fe,K=gt),(Jt.equals(W)===!1||an!==re)&&(i.blendColor(Jt.r,Jt.g,Jt.b,an),W.copy(Jt),re=an),v=J,I=!1}function vn(J,ze){J.side===Ai?dt(i.CULL_FACE):Be(i.CULL_FACE);let fe=J.side===Bn;ze&&(fe=!fe),Ct(fe),J.blending===Ir&&J.transparent===!1?G(Gi):G(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),a.setFunc(J.depthFunc),a.setTest(J.depthTest),a.setMask(J.depthWrite),o.setMask(J.colorWrite);const ve=J.stencilWrite;c.setTest(ve),ve&&(c.setMask(J.stencilWriteMask),c.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),c.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),kt(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?Be(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(J){L!==J&&(J?i.frontFace(i.CW):i.frontFace(i.CCW),L=J)}function Tt(J){J!==Mu?(Be(i.CULL_FACE),J!==Y&&(J===hl?i.cullFace(i.BACK):J===Tu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),Y=J}function st(J){J!==me&&(ye&&i.lineWidth(J),me=J)}function kt(J,ze,fe){J?(Be(i.POLYGON_OFFSET_FILL),(de!==ze||Ee!==fe)&&(i.polygonOffset(ze,fe),de=ze,Ee=fe)):dt(i.POLYGON_OFFSET_FILL)}function Ze(J){J?Be(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function U(J){J===void 0&&(J=i.TEXTURE0+Me-1),Ie!==J&&(i.activeTexture(J),Ie=J)}function w(J,ze,fe){fe===void 0&&(Ie===null?fe=i.TEXTURE0+Me-1:fe=Ie);let ve=Ge[fe];ve===void 0&&(ve={type:void 0,texture:void 0},Ge[fe]=ve),(ve.type!==J||ve.texture!==ze)&&(Ie!==fe&&(i.activeTexture(fe),Ie=fe),i.bindTexture(J,ze||We[J]),ve.type=J,ve.texture=ze)}function oe(){const J=Ge[Ie];J!==void 0&&J.type!==void 0&&(i.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function xe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ge(){try{i.texSubImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function et(){try{i.texSubImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function $e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function vt(){try{i.texStorage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Pe(){try{i.texStorage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Je(){try{i.texImage2D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Qe(){try{i.texImage3D.apply(i,arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function it(J){Ot.equals(J)===!1&&(i.scissor(J.x,J.y,J.z,J.w),Ot.copy(J))}function Ye(J){z.equals(J)===!1&&(i.viewport(J.x,J.y,J.z,J.w),z.copy(J))}function Rt(J,ze){let fe=g.get(ze);fe===void 0&&(fe=new WeakMap,g.set(ze,fe));let ve=fe.get(J);ve===void 0&&(ve=i.getUniformBlockIndex(ze,J.name),fe.set(J,ve))}function xt(J,ze){const ve=g.get(ze).get(J);h.get(ze)!==ve&&(i.uniformBlockBinding(ze,ve,J.__bindingPointIndex),h.set(ze,ve))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},Ie=null,Ge={},x={},y=new WeakMap,S=[],M=null,P=!1,v=null,_=null,q=null,k=null,F=null,u=null,K=null,W=new Xt(0,0,0),re=0,I=!1,L=null,Y=null,me=null,de=null,Ee=null,Ot.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),o.reset(),a.reset(),c.reset()}return{buffers:{color:o,depth:a,stencil:c},enable:Be,disable:dt,bindFramebuffer:ht,drawBuffers:je,useProgram:pt,setBlending:G,setMaterial:vn,setFlipSided:Ct,setCullFace:Tt,setLineWidth:st,setPolygonOffset:kt,setScissorTest:Ze,activeTexture:U,bindTexture:w,unbindTexture:oe,compressedTexImage2D:xe,compressedTexImage3D:Te,texImage2D:Je,texImage3D:Qe,updateUBOMapping:Rt,uniformBlockBinding:xt,texStorage2D:vt,texStorage3D:Pe,texSubImage2D:ge,texSubImage3D:et,compressedTexSubImage2D:Ue,compressedTexSubImage3D:$e,scissor:it,viewport:Ye,reset:Wt}}function Tg(i,e,t,n,r,o,a){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Zt,m=new WeakMap;let x;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,w){return S?new OffscreenCanvas(U,w):rs("canvas")}function P(U,w,oe){let xe=1;const Te=Ze(U);if((Te.width>oe||Te.height>oe)&&(xe=oe/Math.max(Te.width,Te.height)),xe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ge=Math.floor(xe*Te.width),et=Math.floor(xe*Te.height);x===void 0&&(x=M(ge,et));const Ue=w?M(ge,et):x;return Ue.width=ge,Ue.height=et,Ue.getContext("2d").drawImage(U,0,0,ge,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+ge+"x"+et+")."),Ue}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),U;return U}function v(U){return U.generateMipmaps}function _(U){i.generateMipmap(U)}function q(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function k(U,w,oe,xe,Te=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ge=w;if(w===i.RED&&(oe===i.FLOAT&&(ge=i.R32F),oe===i.HALF_FLOAT&&(ge=i.R16F),oe===i.UNSIGNED_BYTE&&(ge=i.R8)),w===i.RED_INTEGER&&(oe===i.UNSIGNED_BYTE&&(ge=i.R8UI),oe===i.UNSIGNED_SHORT&&(ge=i.R16UI),oe===i.UNSIGNED_INT&&(ge=i.R32UI),oe===i.BYTE&&(ge=i.R8I),oe===i.SHORT&&(ge=i.R16I),oe===i.INT&&(ge=i.R32I)),w===i.RG&&(oe===i.FLOAT&&(ge=i.RG32F),oe===i.HALF_FLOAT&&(ge=i.RG16F),oe===i.UNSIGNED_BYTE&&(ge=i.RG8)),w===i.RG_INTEGER&&(oe===i.UNSIGNED_BYTE&&(ge=i.RG8UI),oe===i.UNSIGNED_SHORT&&(ge=i.RG16UI),oe===i.UNSIGNED_INT&&(ge=i.RG32UI),oe===i.BYTE&&(ge=i.RG8I),oe===i.SHORT&&(ge=i.RG16I),oe===i.INT&&(ge=i.RG32I)),w===i.RGB_INTEGER&&(oe===i.UNSIGNED_BYTE&&(ge=i.RGB8UI),oe===i.UNSIGNED_SHORT&&(ge=i.RGB16UI),oe===i.UNSIGNED_INT&&(ge=i.RGB32UI),oe===i.BYTE&&(ge=i.RGB8I),oe===i.SHORT&&(ge=i.RGB16I),oe===i.INT&&(ge=i.RGB32I)),w===i.RGBA_INTEGER&&(oe===i.UNSIGNED_BYTE&&(ge=i.RGBA8UI),oe===i.UNSIGNED_SHORT&&(ge=i.RGBA16UI),oe===i.UNSIGNED_INT&&(ge=i.RGBA32UI),oe===i.BYTE&&(ge=i.RGBA8I),oe===i.SHORT&&(ge=i.RGBA16I),oe===i.INT&&(ge=i.RGBA32I)),w===i.RGB&&oe===i.UNSIGNED_INT_5_9_9_9_REV&&(ge=i.RGB9_E5),w===i.RGBA){const et=Te?eo:Vt.getTransfer(xe);oe===i.FLOAT&&(ge=i.RGBA32F),oe===i.HALF_FLOAT&&(ge=i.RGBA16F),oe===i.UNSIGNED_BYTE&&(ge=et===$t?i.SRGB8_ALPHA8:i.RGBA8),oe===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),oe===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function F(U,w){let oe;return U?w===null||w===ur||w===Br?oe=i.DEPTH24_STENCIL8:w===Ci?oe=i.DEPTH32F_STENCIL8:w===is&&(oe=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ur||w===Br?oe=i.DEPTH_COMPONENT24:w===Ci?oe=i.DEPTH_COMPONENT32F:w===is&&(oe=i.DEPTH_COMPONENT16),oe}function u(U,w){return v(U)===!0||U.isFramebufferTexture&&U.minFilter!==ai&&U.minFilter!==hi?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function K(U){const w=U.target;w.removeEventListener("dispose",K),re(w),w.isVideoTexture&&m.delete(w)}function W(U){const w=U.target;w.removeEventListener("dispose",W),L(w)}function re(U){const w=n.get(U);if(w.__webglInit===void 0)return;const oe=U.source,xe=y.get(oe);if(xe){const Te=xe[w.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&I(U),Object.keys(xe).length===0&&y.delete(oe)}n.remove(U)}function I(U){const w=n.get(U);i.deleteTexture(w.__webglTexture);const oe=U.source,xe=y.get(oe);delete xe[w.__cacheKey],a.memory.textures--}function L(U){const w=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(w.__webglFramebuffer[xe]))for(let Te=0;Te<w.__webglFramebuffer[xe].length;Te++)i.deleteFramebuffer(w.__webglFramebuffer[xe][Te]);else i.deleteFramebuffer(w.__webglFramebuffer[xe]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[xe])}else{if(Array.isArray(w.__webglFramebuffer))for(let xe=0;xe<w.__webglFramebuffer.length;xe++)i.deleteFramebuffer(w.__webglFramebuffer[xe]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let xe=0;xe<w.__webglColorRenderbuffer.length;xe++)w.__webglColorRenderbuffer[xe]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[xe]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const oe=U.textures;for(let xe=0,Te=oe.length;xe<Te;xe++){const ge=n.get(oe[xe]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),a.memory.textures--),n.remove(oe[xe])}n.remove(U)}let Y=0;function me(){Y=0}function de(){const U=Y;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),Y+=1,U}function Ee(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function Me(U,w){const oe=n.get(U);if(U.isVideoTexture&&st(U),U.isRenderTargetTexture===!1&&U.version>0&&oe.__version!==U.version){const xe=U.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(oe,U,w);return}}t.bindTexture(i.TEXTURE_2D,oe.__webglTexture,i.TEXTURE0+w)}function ye(U,w){const oe=n.get(U);if(U.version>0&&oe.__version!==U.version){z(oe,U,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,oe.__webglTexture,i.TEXTURE0+w)}function Ae(U,w){const oe=n.get(U);if(U.version>0&&oe.__version!==U.version){z(oe,U,w);return}t.bindTexture(i.TEXTURE_3D,oe.__webglTexture,i.TEXTURE0+w)}function he(U,w){const oe=n.get(U);if(U.version>0&&oe.__version!==U.version){Re(oe,U,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture,i.TEXTURE0+w)}const Ie={[da]:i.REPEAT,[ar]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},Ge={[ai]:i.NEAREST,[ed]:i.NEAREST_MIPMAP_NEAREST,[xs]:i.NEAREST_MIPMAP_LINEAR,[hi]:i.LINEAR,[bo]:i.LINEAR_MIPMAP_NEAREST,[lr]:i.LINEAR_MIPMAP_LINEAR},rt={[sd]:i.NEVER,[dd]:i.ALWAYS,[od]:i.LESS,[Rc]:i.LEQUAL,[ad]:i.EQUAL,[ud]:i.GEQUAL,[ld]:i.GREATER,[cd]:i.NOTEQUAL};function Et(U,w){if(w.type===Ci&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===hi||w.magFilter===bo||w.magFilter===xs||w.magFilter===lr||w.minFilter===hi||w.minFilter===bo||w.minFilter===xs||w.minFilter===lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Ie[w.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Ie[w.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Ie[w.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,Ge[w.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,Ge[w.minFilter]),w.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,rt[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ai||w.minFilter!==xs&&w.minFilter!==lr||w.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Ot(U,w){let oe=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",K));const xe=w.source;let Te=y.get(xe);Te===void 0&&(Te={},y.set(xe,Te));const ge=Ee(w);if(ge!==U.__cacheKey){Te[ge]===void 0&&(Te[ge]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,oe=!0),Te[ge].usedTimes++;const et=Te[U.__cacheKey];et!==void 0&&(Te[U.__cacheKey].usedTimes--,et.usedTimes===0&&I(w)),U.__cacheKey=ge,U.__webglTexture=Te[ge].texture}return oe}function z(U,w,oe){let xe=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(xe=i.TEXTURE_3D);const Te=Ot(U,w),ge=w.source;t.bindTexture(xe,U.__webglTexture,i.TEXTURE0+oe);const et=n.get(ge);if(ge.version!==et.__version||Te===!0){t.activeTexture(i.TEXTURE0+oe);const Ue=Vt.getPrimaries(Vt.workingColorSpace),$e=w.colorSpace===Hi?null:Vt.getPrimaries(w.colorSpace),vt=w.colorSpace===Hi||Ue===$e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Pe=P(w.image,!1,r.maxTextureSize);Pe=kt(w,Pe);const Je=o.convert(w.format,w.colorSpace),Qe=o.convert(w.type);let it=k(w.internalFormat,Je,Qe,w.colorSpace,w.isVideoTexture);Et(xe,w);let Ye;const Rt=w.mipmaps,xt=w.isVideoTexture!==!0,Wt=et.__version===void 0||Te===!0,J=ge.dataReady,ze=u(w,Pe);if(w.isDepthTexture)it=F(w.format===zr,w.type),Wt&&(xt?t.texStorage2D(i.TEXTURE_2D,1,it,Pe.width,Pe.height):t.texImage2D(i.TEXTURE_2D,0,it,Pe.width,Pe.height,0,Je,Qe,null));else if(w.isDataTexture)if(Rt.length>0){xt&&Wt&&t.texStorage2D(i.TEXTURE_2D,ze,it,Rt[0].width,Rt[0].height);for(let fe=0,ve=Rt.length;fe<ve;fe++)Ye=Rt[fe],xt?J&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Ye.width,Ye.height,Je,Qe,Ye.data):t.texImage2D(i.TEXTURE_2D,fe,it,Ye.width,Ye.height,0,Je,Qe,Ye.data);w.generateMipmaps=!1}else xt?(Wt&&t.texStorage2D(i.TEXTURE_2D,ze,it,Pe.width,Pe.height),J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe.width,Pe.height,Je,Qe,Pe.data)):t.texImage2D(i.TEXTURE_2D,0,it,Pe.width,Pe.height,0,Je,Qe,Pe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){xt&&Wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,it,Rt[0].width,Rt[0].height,Pe.depth);for(let fe=0,ve=Rt.length;fe<ve;fe++)if(Ye=Rt[fe],w.format!==oi)if(Je!==null)if(xt){if(J)if(w.layerUpdates.size>0){const Xe=Vl(Ye.width,Ye.height,w.format,w.type);for(const Fe of w.layerUpdates){const gt=Ye.data.subarray(Fe*Xe/Ye.data.BYTES_PER_ELEMENT,(Fe+1)*Xe/Ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,Fe,Ye.width,Ye.height,1,Je,gt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Ye.width,Ye.height,Pe.depth,Je,Ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,fe,it,Ye.width,Ye.height,Pe.depth,0,Ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?J&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,fe,0,0,0,Ye.width,Ye.height,Pe.depth,Je,Qe,Ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,fe,it,Ye.width,Ye.height,Pe.depth,0,Je,Qe,Ye.data)}else{xt&&Wt&&t.texStorage2D(i.TEXTURE_2D,ze,it,Rt[0].width,Rt[0].height);for(let fe=0,ve=Rt.length;fe<ve;fe++)Ye=Rt[fe],w.format!==oi?Je!==null?xt?J&&t.compressedTexSubImage2D(i.TEXTURE_2D,fe,0,0,Ye.width,Ye.height,Je,Ye.data):t.compressedTexImage2D(i.TEXTURE_2D,fe,it,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?J&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Ye.width,Ye.height,Je,Qe,Ye.data):t.texImage2D(i.TEXTURE_2D,fe,it,Ye.width,Ye.height,0,Je,Qe,Ye.data)}else if(w.isDataArrayTexture)if(xt){if(Wt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ze,it,Pe.width,Pe.height,Pe.depth),J)if(w.layerUpdates.size>0){const fe=Vl(Pe.width,Pe.height,w.format,w.type);for(const ve of w.layerUpdates){const Xe=Pe.data.subarray(ve*fe/Pe.data.BYTES_PER_ELEMENT,(ve+1)*fe/Pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,Pe.width,Pe.height,1,Je,Qe,Xe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Pe.width,Pe.height,Pe.depth,Je,Qe,Pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,it,Pe.width,Pe.height,Pe.depth,0,Je,Qe,Pe.data);else if(w.isData3DTexture)xt?(Wt&&t.texStorage3D(i.TEXTURE_3D,ze,it,Pe.width,Pe.height,Pe.depth),J&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Pe.width,Pe.height,Pe.depth,Je,Qe,Pe.data)):t.texImage3D(i.TEXTURE_3D,0,it,Pe.width,Pe.height,Pe.depth,0,Je,Qe,Pe.data);else if(w.isFramebufferTexture){if(Wt)if(xt)t.texStorage2D(i.TEXTURE_2D,ze,it,Pe.width,Pe.height);else{let fe=Pe.width,ve=Pe.height;for(let Xe=0;Xe<ze;Xe++)t.texImage2D(i.TEXTURE_2D,Xe,it,fe,ve,0,Je,Qe,null),fe>>=1,ve>>=1}}else if(Rt.length>0){if(xt&&Wt){const fe=Ze(Rt[0]);t.texStorage2D(i.TEXTURE_2D,ze,it,fe.width,fe.height)}for(let fe=0,ve=Rt.length;fe<ve;fe++)Ye=Rt[fe],xt?J&&t.texSubImage2D(i.TEXTURE_2D,fe,0,0,Je,Qe,Ye):t.texImage2D(i.TEXTURE_2D,fe,it,Je,Qe,Ye);w.generateMipmaps=!1}else if(xt){if(Wt){const fe=Ze(Pe);t.texStorage2D(i.TEXTURE_2D,ze,it,fe.width,fe.height)}J&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Je,Qe,Pe)}else t.texImage2D(i.TEXTURE_2D,0,it,Je,Qe,Pe);v(w)&&_(xe),et.__version=ge.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Re(U,w,oe){if(w.image.length!==6)return;const xe=Ot(U,w),Te=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+oe);const ge=n.get(Te);if(Te.version!==ge.__version||xe===!0){t.activeTexture(i.TEXTURE0+oe);const et=Vt.getPrimaries(Vt.workingColorSpace),Ue=w.colorSpace===Hi?null:Vt.getPrimaries(w.colorSpace),$e=w.colorSpace===Hi||et===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const vt=w.isCompressedTexture||w.image[0].isCompressedTexture,Pe=w.image[0]&&w.image[0].isDataTexture,Je=[];for(let ve=0;ve<6;ve++)!vt&&!Pe?Je[ve]=P(w.image[ve],!0,r.maxCubemapSize):Je[ve]=Pe?w.image[ve].image:w.image[ve],Je[ve]=kt(w,Je[ve]);const Qe=Je[0],it=o.convert(w.format,w.colorSpace),Ye=o.convert(w.type),Rt=k(w.internalFormat,it,Ye,w.colorSpace),xt=w.isVideoTexture!==!0,Wt=ge.__version===void 0||xe===!0,J=Te.dataReady;let ze=u(w,Qe);Et(i.TEXTURE_CUBE_MAP,w);let fe;if(vt){xt&&Wt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,Rt,Qe.width,Qe.height);for(let ve=0;ve<6;ve++){fe=Je[ve].mipmaps;for(let Xe=0;Xe<fe.length;Xe++){const Fe=fe[Xe];w.format!==oi?it!==null?xt?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,0,0,Fe.width,Fe.height,it,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,Rt,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xt?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,0,0,Fe.width,Fe.height,it,Ye,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,Rt,Fe.width,Fe.height,0,it,Ye,Fe.data)}}}else{if(fe=w.mipmaps,xt&&Wt){fe.length>0&&ze++;const ve=Ze(Je[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ze,Rt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Pe){xt?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Je[ve].width,Je[ve].height,it,Ye,Je[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Rt,Je[ve].width,Je[ve].height,0,it,Ye,Je[ve].data);for(let Xe=0;Xe<fe.length;Xe++){const gt=fe[Xe].image[ve].image;xt?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,0,0,gt.width,gt.height,it,Ye,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,Rt,gt.width,gt.height,0,it,Ye,gt.data)}}else{xt?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,it,Ye,Je[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Rt,it,Ye,Je[ve]);for(let Xe=0;Xe<fe.length;Xe++){const Fe=fe[Xe];xt?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,0,0,it,Ye,Fe.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,Rt,it,Ye,Fe.image[ve])}}}v(w)&&_(i.TEXTURE_CUBE_MAP),ge.__version=Te.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function We(U,w,oe,xe,Te,ge){const et=o.convert(oe.format,oe.colorSpace),Ue=o.convert(oe.type),$e=k(oe.internalFormat,et,Ue,oe.colorSpace),vt=n.get(w),Pe=n.get(oe);if(Pe.__renderTarget=w,!vt.__hasExternalTextures){const Je=Math.max(1,w.width>>ge),Qe=Math.max(1,w.height>>ge);Te===i.TEXTURE_3D||Te===i.TEXTURE_2D_ARRAY?t.texImage3D(Te,ge,$e,Je,Qe,w.depth,0,et,Ue,null):t.texImage2D(Te,ge,$e,Je,Qe,0,et,Ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Tt(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,Te,Pe.__webglTexture,0,Ct(w)):(Te===i.TEXTURE_2D||Te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,Te,Pe.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(U,w,oe){if(i.bindRenderbuffer(i.RENDERBUFFER,U),w.depthBuffer){const xe=w.depthTexture,Te=xe&&xe.isDepthTexture?xe.type:null,ge=F(w.stencilBuffer,Te),et=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=Ct(w);Tt(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,ge,w.width,w.height):oe?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,ge,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ge,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,U)}else{const xe=w.textures;for(let Te=0;Te<xe.length;Te++){const ge=xe[Te],et=o.convert(ge.format,ge.colorSpace),Ue=o.convert(ge.type),$e=k(ge.internalFormat,et,Ue,ge.colorSpace),vt=Ct(w);oe&&Tt(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,$e,w.width,w.height):Tt(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,$e,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,$e,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=n.get(w.depthTexture);xe.__renderTarget=w,(!xe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Me(w.depthTexture,0);const Te=xe.__webglTexture,ge=Ct(w);if(w.depthTexture.format===Ur)Tt(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Te,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Te,0);else if(w.depthTexture.format===zr)Tt(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Te,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function ht(U){const w=n.get(U),oe=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const xe=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),xe){const Te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,xe.removeEventListener("dispose",Te)};xe.addEventListener("dispose",Te),w.__depthDisposeCallback=Te}w.__boundDepthTexture=xe}if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(oe)throw new Error("target.depthTexture not supported in Cube render targets");dt(w.__webglFramebuffer,U)}else if(oe){w.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[xe]),w.__webglDepthbuffer[xe]===void 0)w.__webglDepthbuffer[xe]=i.createRenderbuffer(),Be(w.__webglDepthbuffer[xe],U,!1);else{const Te=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer[xe];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,ge)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Be(w.__webglDepthbuffer,U,!1);else{const xe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,Te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(U,w,oe){const xe=n.get(U);w!==void 0&&We(xe.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),oe!==void 0&&ht(U)}function pt(U){const w=U.texture,oe=n.get(U),xe=n.get(w);U.addEventListener("dispose",W);const Te=U.textures,ge=U.isWebGLCubeRenderTarget===!0,et=Te.length>1;if(et||(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=w.version,a.memory.textures++),ge){oe.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(w.mipmaps&&w.mipmaps.length>0){oe.__webglFramebuffer[Ue]=[];for(let $e=0;$e<w.mipmaps.length;$e++)oe.__webglFramebuffer[Ue][$e]=i.createFramebuffer()}else oe.__webglFramebuffer[Ue]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){oe.__webglFramebuffer=[];for(let Ue=0;Ue<w.mipmaps.length;Ue++)oe.__webglFramebuffer[Ue]=i.createFramebuffer()}else oe.__webglFramebuffer=i.createFramebuffer();if(et)for(let Ue=0,$e=Te.length;Ue<$e;Ue++){const vt=n.get(Te[Ue]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&Tt(U)===!1){oe.__webglMultisampledFramebuffer=i.createFramebuffer(),oe.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Te.length;Ue++){const $e=Te[Ue];oe.__webglColorRenderbuffer[Ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,oe.__webglColorRenderbuffer[Ue]);const vt=o.convert($e.format,$e.colorSpace),Pe=o.convert($e.type),Je=k($e.internalFormat,vt,Pe,$e.colorSpace,U.isXRRenderTarget===!0),Qe=Ct(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Je,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,oe.__webglColorRenderbuffer[Ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(oe.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(oe.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),Et(i.TEXTURE_CUBE_MAP,w);for(let Ue=0;Ue<6;Ue++)if(w.mipmaps&&w.mipmaps.length>0)for(let $e=0;$e<w.mipmaps.length;$e++)We(oe.__webglFramebuffer[Ue][$e],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,$e);else We(oe.__webglFramebuffer[Ue],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);v(w)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(et){for(let Ue=0,$e=Te.length;Ue<$e;Ue++){const vt=Te[Ue],Pe=n.get(vt);t.bindTexture(i.TEXTURE_2D,Pe.__webglTexture),Et(i.TEXTURE_2D,vt),We(oe.__webglFramebuffer,U,vt,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,0),v(vt)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ue=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ue=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ue,xe.__webglTexture),Et(Ue,w),w.mipmaps&&w.mipmaps.length>0)for(let $e=0;$e<w.mipmaps.length;$e++)We(oe.__webglFramebuffer[$e],U,w,i.COLOR_ATTACHMENT0,Ue,$e);else We(oe.__webglFramebuffer,U,w,i.COLOR_ATTACHMENT0,Ue,0);v(w)&&_(Ue),t.unbindTexture()}U.depthBuffer&&ht(U)}function at(U){const w=U.textures;for(let oe=0,xe=w.length;oe<xe;oe++){const Te=w[oe];if(v(Te)){const ge=q(U),et=n.get(Te).__webglTexture;t.bindTexture(ge,et),_(ge),t.unbindTexture()}}}const He=[],G=[];function vn(U){if(U.samples>0){if(Tt(U)===!1){const w=U.textures,oe=U.width,xe=U.height;let Te=i.COLOR_BUFFER_BIT;const ge=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=n.get(U),Ue=w.length>1;if(Ue)for(let $e=0;$e<w.length;$e++)t.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let $e=0;$e<w.length;$e++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Te|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Te|=i.STENCIL_BUFFER_BIT)),Ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,et.__webglColorRenderbuffer[$e]);const vt=n.get(w[$e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,vt,0)}i.blitFramebuffer(0,0,oe,xe,0,0,oe,xe,Te,i.NEAREST),h===!0&&(He.length=0,G.length=0,He.push(i.COLOR_ATTACHMENT0+$e),U.depthBuffer&&U.resolveDepthBuffer===!1&&(He.push(ge),G.push(ge),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,G)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ue)for(let $e=0;$e<w.length;$e++){t.bindFramebuffer(i.FRAMEBUFFER,et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.RENDERBUFFER,et.__webglColorRenderbuffer[$e]);const vt=n.get(w[$e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.TEXTURE_2D,vt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const w=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ct(U){return Math.min(r.maxSamples,U.samples)}function Tt(U){const w=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function st(U){const w=a.render.frame;m.get(U)!==w&&(m.set(U,w),U.update())}function kt(U,w){const oe=U.colorSpace,xe=U.format,Te=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||oe!==Hr&&oe!==Hi&&(Vt.getTransfer(oe)===$t?(xe!==oi||Te!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",oe)),w}function Ze(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(g.width=U.naturalWidth||U.width,g.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(g.width=U.displayWidth,g.height=U.displayHeight):(g.width=U.width,g.height=U.height),g}this.allocateTextureUnit=de,this.resetTextureUnits=me,this.setTexture2D=Me,this.setTexture2DArray=ye,this.setTexture3D=Ae,this.setTextureCube=he,this.rebindTextures=je,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=We,this.useMultisampledRTT=Tt}function wg(i,e){function t(n,r=Hi){let o;const a=Vt.getTransfer(r);if(n===Pi)return i.UNSIGNED_BYTE;if(n===Wa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return i.BYTE;if(n===yc)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===Ga)return i.INT;if(n===ur)return i.UNSIGNED_INT;if(n===Ci)return i.FLOAT;if(n===ss)return i.HALF_FLOAT;if(n===bc)return i.ALPHA;if(n===Ec)return i.RGB;if(n===oi)return i.RGBA;if(n===Mc)return i.LUMINANCE;if(n===Tc)return i.LUMINANCE_ALPHA;if(n===Ur)return i.DEPTH_COMPONENT;if(n===zr)return i.DEPTH_STENCIL;if(n===wc)return i.RED;if(n===qa)return i.RED_INTEGER;if(n===Ac)return i.RG;if(n===$a)return i.RG_INTEGER;if(n===ja)return i.RGBA_INTEGER;if(n===$s||n===js||n===Ys||n===Ks)if(a===$t)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===$s)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===$s)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===js)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ha||n===pa||n===ma||n===ga)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ha)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===va||n===xa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===_a||n===va)return a===$t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===xa)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===Sa||n===ba||n===Ea||n===Ma||n===Ta||n===wa||n===Aa||n===Ca||n===Ra||n===La||n===Pa||n===Da||n===Ia)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ya)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ma)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Aa)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ra)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pa)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ia)return a===$t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zs||n===Ua||n===Na)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Zs)return a===$t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ua)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Na)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cc||n===Fa||n===Oa||n===ka)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Zs)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Ag={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,o=null,a=null;const c=this._targetRay,h=this._grip,g=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(g&&e.hand){a=!0;for(const P of e.hand.values()){const v=t.getJointPose(P,n),_=this._getHandJoint(g,P);v!==null&&(_.matrix.fromArray(v.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=v.radius),_.visible=v!==null}const m=g.joints["index-finger-tip"],x=g.joints["thumb-tip"],y=m.position.distanceTo(x.position),S=.02,M=.005;g.inputState.pinching&&y>S+M?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&y<=S-M&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&o!==null&&(r=o),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),g!==null&&(g.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new In,o=e.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new $i({vertexShader:Cg,fragmentShader:Rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pi(new oo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Pg extends Wr{constructor(e,t){super();const n=this;let r=null,o=1,a=null,c="local-floor",h=1,g=null,m=null,x=null,y=null,S=null,M=null;const P=new Lg,v=t.getContextAttributes();let _=null,q=null;const k=[],F=[],u=new Zt;let K=null;const W=new Jn;W.viewport=new sn;const re=new Jn;re.viewport=new sn;const I=[W,re],L=new Zd;let Y=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Re=k[z];return Re===void 0&&(Re=new Jo,k[z]=Re),Re.getTargetRaySpace()},this.getControllerGrip=function(z){let Re=k[z];return Re===void 0&&(Re=new Jo,k[z]=Re),Re.getGripSpace()},this.getHand=function(z){let Re=k[z];return Re===void 0&&(Re=new Jo,k[z]=Re),Re.getHandSpace()};function de(z){const Re=F.indexOf(z.inputSource);if(Re===-1)return;const We=k[Re];We!==void 0&&(We.update(z.inputSource,z.frame,g||a),We.dispatchEvent({type:z.type,data:z.inputSource}))}function Ee(){r.removeEventListener("select",de),r.removeEventListener("selectstart",de),r.removeEventListener("selectend",de),r.removeEventListener("squeeze",de),r.removeEventListener("squeezestart",de),r.removeEventListener("squeezeend",de),r.removeEventListener("end",Ee),r.removeEventListener("inputsourceschange",Me);for(let z=0;z<k.length;z++){const Re=F[z];Re!==null&&(F[z]=null,k[z].disconnect(Re))}Y=null,me=null,P.reset(),e.setRenderTarget(_),S=null,y=null,x=null,r=null,q=null,Ot.stop(),n.isPresenting=!1,e.setPixelRatio(K),e.setSize(u.width,u.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){o=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){c=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||a},this.setReferenceSpace=function(z){g=z},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return x},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",de),r.addEventListener("selectstart",de),r.addEventListener("selectend",de),r.addEventListener("squeeze",de),r.addEventListener("squeezestart",de),r.addEventListener("squeezeend",de),r.addEventListener("end",Ee),r.addEventListener("inputsourceschange",Me),v.xrCompatible!==!0&&await t.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(u),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let We=null,Be=null,dt=null;v.depth&&(dt=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,We=v.stencil?zr:Ur,Be=v.stencil?Br:ur);const ht={colorFormat:t.RGBA8,depthFormat:dt,scaleFactor:o};x=new XRWebGLBinding(r,t),y=x.createProjectionLayer(ht),r.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),q=new dr(y.textureWidth,y.textureHeight,{format:oi,type:Pi,depthTexture:new Gc(y.textureWidth,y.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,We),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}else{const We={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};S=new XRWebGLLayer(r,t,We),r.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),q=new dr(S.framebufferWidth,S.framebufferHeight,{format:oi,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}q.isXRRenderTarget=!0,this.setFoveation(h),g=null,a=await r.requestReferenceSpace(c),Ot.setContext(r),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return P.getDepthTexture()};function Me(z){for(let Re=0;Re<z.removed.length;Re++){const We=z.removed[Re],Be=F.indexOf(We);Be>=0&&(F[Be]=null,k[Be].disconnect(We))}for(let Re=0;Re<z.added.length;Re++){const We=z.added[Re];let Be=F.indexOf(We);if(Be===-1){for(let ht=0;ht<k.length;ht++)if(ht>=F.length){F.push(We),Be=ht;break}else if(F[ht]===null){F[ht]=We,Be=ht;break}if(Be===-1)break}const dt=k[Be];dt&&dt.connect(We)}}const ye=new le,Ae=new le;function he(z,Re,We){ye.setFromMatrixPosition(Re.matrixWorld),Ae.setFromMatrixPosition(We.matrixWorld);const Be=ye.distanceTo(Ae),dt=Re.projectionMatrix.elements,ht=We.projectionMatrix.elements,je=dt[14]/(dt[10]-1),pt=dt[14]/(dt[10]+1),at=(dt[9]+1)/dt[5],He=(dt[9]-1)/dt[5],G=(dt[8]-1)/dt[0],vn=(ht[8]+1)/ht[0],Ct=je*G,Tt=je*vn,st=Be/(-G+vn),kt=st*-G;if(Re.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(kt),z.translateZ(st),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),dt[10]===-1)z.projectionMatrix.copy(Re.projectionMatrix),z.projectionMatrixInverse.copy(Re.projectionMatrixInverse);else{const Ze=je+st,U=pt+st,w=Ct-kt,oe=Tt+(Be-kt),xe=at*pt/U*Ze,Te=He*pt/U*Ze;z.projectionMatrix.makePerspective(w,oe,xe,Te,Ze,U),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function Ie(z,Re){Re===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Re.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let Re=z.near,We=z.far;P.texture!==null&&(P.depthNear>0&&(Re=P.depthNear),P.depthFar>0&&(We=P.depthFar)),L.near=re.near=W.near=Re,L.far=re.far=W.far=We,(Y!==L.near||me!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),Y=L.near,me=L.far),W.layers.mask=z.layers.mask|2,re.layers.mask=z.layers.mask|4,L.layers.mask=W.layers.mask|re.layers.mask;const Be=z.parent,dt=L.cameras;Ie(L,Be);for(let ht=0;ht<dt.length;ht++)Ie(dt[ht],Be);dt.length===2?he(L,W,re):L.projectionMatrix.copy(W.projectionMatrix),Ge(z,L,Be)};function Ge(z,Re,We){We===null?z.matrix.copy(Re.matrixWorld):(z.matrix.copy(We.matrixWorld),z.matrix.invert(),z.matrix.multiply(Re.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Re.projectionMatrix),z.projectionMatrixInverse.copy(Re.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ba*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(y===null&&S===null))return h},this.setFoveation=function(z){h=z,y!==null&&(y.fixedFoveation=z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=z)},this.hasDepthSensing=function(){return P.texture!==null},this.getDepthSensingMesh=function(){return P.getMesh(L)};let rt=null;function Et(z,Re){if(m=Re.getViewerPose(g||a),M=Re,m!==null){const We=m.views;S!==null&&(e.setRenderTargetFramebuffer(q,S.framebuffer),e.setRenderTarget(q));let Be=!1;We.length!==L.cameras.length&&(L.cameras.length=0,Be=!0);for(let ht=0;ht<We.length;ht++){const je=We[ht];let pt=null;if(S!==null)pt=S.getViewport(je);else{const He=x.getViewSubImage(y,je);pt=He.viewport,ht===0&&(e.setRenderTargetTextures(q,He.colorTexture,y.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(q))}let at=I[ht];at===void 0&&(at=new Jn,at.layers.enable(ht),at.viewport=new sn,I[ht]=at),at.matrix.fromArray(je.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(je.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(pt.x,pt.y,pt.width,pt.height),ht===0&&(L.matrix.copy(at.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Be===!0&&L.cameras.push(at)}const dt=r.enabledFeatures;if(dt&&dt.includes("depth-sensing")){const ht=x.getDepthInformation(We[0]);ht&&ht.isValid&&ht.texture&&P.init(e,ht,r.renderState)}}for(let We=0;We<k.length;We++){const Be=F[We],dt=k[We];Be!==null&&dt!==void 0&&dt.update(Be,Re,g||a)}rt&&rt(z,Re),Re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Re}),M=null}const Ot=new Xc;Ot.setAnimationLoop(Et),this.setAnimationLoop=function(z){rt=z},this.dispose=function(){}}}const nr=new Di,Dg=new on;function Ig(i,e){function t(v,_){v.matrixAutoUpdate===!0&&v.updateMatrix(),_.value.copy(v.matrix)}function n(v,_){_.color.getRGB(v.fogColor.value,kc(i)),_.isFog?(v.fogNear.value=_.near,v.fogFar.value=_.far):_.isFogExp2&&(v.fogDensity.value=_.density)}function r(v,_,q,k,F){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(v,_):_.isMeshToonMaterial?(o(v,_),x(v,_)):_.isMeshPhongMaterial?(o(v,_),m(v,_)):_.isMeshStandardMaterial?(o(v,_),y(v,_),_.isMeshPhysicalMaterial&&S(v,_,F)):_.isMeshMatcapMaterial?(o(v,_),M(v,_)):_.isMeshDepthMaterial?o(v,_):_.isMeshDistanceMaterial?(o(v,_),P(v,_)):_.isMeshNormalMaterial?o(v,_):_.isLineBasicMaterial?(a(v,_),_.isLineDashedMaterial&&c(v,_)):_.isPointsMaterial?h(v,_,q,k):_.isSpriteMaterial?g(v,_):_.isShadowMaterial?(v.color.value.copy(_.color),v.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(v,_){v.opacity.value=_.opacity,_.color&&v.diffuse.value.copy(_.color),_.emissive&&v.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.bumpMap&&(v.bumpMap.value=_.bumpMap,t(_.bumpMap,v.bumpMapTransform),v.bumpScale.value=_.bumpScale,_.side===Bn&&(v.bumpScale.value*=-1)),_.normalMap&&(v.normalMap.value=_.normalMap,t(_.normalMap,v.normalMapTransform),v.normalScale.value.copy(_.normalScale),_.side===Bn&&v.normalScale.value.negate()),_.displacementMap&&(v.displacementMap.value=_.displacementMap,t(_.displacementMap,v.displacementMapTransform),v.displacementScale.value=_.displacementScale,v.displacementBias.value=_.displacementBias),_.emissiveMap&&(v.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,v.emissiveMapTransform)),_.specularMap&&(v.specularMap.value=_.specularMap,t(_.specularMap,v.specularMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest);const q=e.get(_),k=q.envMap,F=q.envMapRotation;k&&(v.envMap.value=k,nr.copy(F),nr.x*=-1,nr.y*=-1,nr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),v.envMapRotation.value.setFromMatrix4(Dg.makeRotationFromEuler(nr)),v.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=_.reflectivity,v.ior.value=_.ior,v.refractionRatio.value=_.refractionRatio),_.lightMap&&(v.lightMap.value=_.lightMap,v.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,v.lightMapTransform)),_.aoMap&&(v.aoMap.value=_.aoMap,v.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,v.aoMapTransform))}function a(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform))}function c(v,_){v.dashSize.value=_.dashSize,v.totalSize.value=_.dashSize+_.gapSize,v.scale.value=_.scale}function h(v,_,q,k){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.size.value=_.size*q,v.scale.value=k*.5,_.map&&(v.map.value=_.map,t(_.map,v.uvTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function g(v,_){v.diffuse.value.copy(_.color),v.opacity.value=_.opacity,v.rotation.value=_.rotation,_.map&&(v.map.value=_.map,t(_.map,v.mapTransform)),_.alphaMap&&(v.alphaMap.value=_.alphaMap,t(_.alphaMap,v.alphaMapTransform)),_.alphaTest>0&&(v.alphaTest.value=_.alphaTest)}function m(v,_){v.specular.value.copy(_.specular),v.shininess.value=Math.max(_.shininess,1e-4)}function x(v,_){_.gradientMap&&(v.gradientMap.value=_.gradientMap)}function y(v,_){v.metalness.value=_.metalness,_.metalnessMap&&(v.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,v.metalnessMapTransform)),v.roughness.value=_.roughness,_.roughnessMap&&(v.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,v.roughnessMapTransform)),_.envMap&&(v.envMapIntensity.value=_.envMapIntensity)}function S(v,_,q){v.ior.value=_.ior,_.sheen>0&&(v.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),v.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(v.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,v.sheenColorMapTransform)),_.sheenRoughnessMap&&(v.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,v.sheenRoughnessMapTransform))),_.clearcoat>0&&(v.clearcoat.value=_.clearcoat,v.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(v.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,v.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(v.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&v.clearcoatNormalScale.value.negate())),_.dispersion>0&&(v.dispersion.value=_.dispersion),_.iridescence>0&&(v.iridescence.value=_.iridescence,v.iridescenceIOR.value=_.iridescenceIOR,v.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(v.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,v.iridescenceMapTransform)),_.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),_.transmission>0&&(v.transmission.value=_.transmission,v.transmissionSamplerMap.value=q.texture,v.transmissionSamplerSize.value.set(q.width,q.height),_.transmissionMap&&(v.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,v.transmissionMapTransform)),v.thickness.value=_.thickness,_.thicknessMap&&(v.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=_.attenuationDistance,v.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(v.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(v.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=_.specularIntensity,v.specularColor.value.copy(_.specularColor),_.specularColorMap&&(v.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,v.specularColorMapTransform)),_.specularIntensityMap&&(v.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,v.specularIntensityMapTransform))}function M(v,_){_.matcap&&(v.matcap.value=_.matcap)}function P(v,_){const q=e.get(_).light;v.referencePosition.value.setFromMatrixPosition(q.matrixWorld),v.nearDistance.value=q.shadow.camera.near,v.farDistance.value=q.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ug(i,e,t,n){let r={},o={},a=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(q,k){const F=k.program;n.uniformBlockBinding(q,F)}function g(q,k){let F=r[q.id];F===void 0&&(M(q),F=m(q),r[q.id]=F,q.addEventListener("dispose",v));const u=k.program;n.updateUBOMapping(q,u);const K=e.render.frame;o[q.id]!==K&&(y(q),o[q.id]=K)}function m(q){const k=x();q.__bindingPointIndex=k;const F=i.createBuffer(),u=q.__size,K=q.usage;return i.bindBuffer(i.UNIFORM_BUFFER,F),i.bufferData(i.UNIFORM_BUFFER,u,K),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,k,F),F}function x(){for(let q=0;q<c;q++)if(a.indexOf(q)===-1)return a.push(q),q;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(q){const k=r[q.id],F=q.uniforms,u=q.__cache;i.bindBuffer(i.UNIFORM_BUFFER,k);for(let K=0,W=F.length;K<W;K++){const re=Array.isArray(F[K])?F[K]:[F[K]];for(let I=0,L=re.length;I<L;I++){const Y=re[I];if(S(Y,K,I,u)===!0){const me=Y.__offset,de=Array.isArray(Y.value)?Y.value:[Y.value];let Ee=0;for(let Me=0;Me<de.length;Me++){const ye=de[Me],Ae=P(ye);typeof ye=="number"||typeof ye=="boolean"?(Y.__data[0]=ye,i.bufferSubData(i.UNIFORM_BUFFER,me+Ee,Y.__data)):ye.isMatrix3?(Y.__data[0]=ye.elements[0],Y.__data[1]=ye.elements[1],Y.__data[2]=ye.elements[2],Y.__data[3]=0,Y.__data[4]=ye.elements[3],Y.__data[5]=ye.elements[4],Y.__data[6]=ye.elements[5],Y.__data[7]=0,Y.__data[8]=ye.elements[6],Y.__data[9]=ye.elements[7],Y.__data[10]=ye.elements[8],Y.__data[11]=0):(ye.toArray(Y.__data,Ee),Ee+=Ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,me,Y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(q,k,F,u){const K=q.value,W=k+"_"+F;if(u[W]===void 0)return typeof K=="number"||typeof K=="boolean"?u[W]=K:u[W]=K.clone(),!0;{const re=u[W];if(typeof K=="number"||typeof K=="boolean"){if(re!==K)return u[W]=K,!0}else if(re.equals(K)===!1)return re.copy(K),!0}return!1}function M(q){const k=q.uniforms;let F=0;const u=16;for(let W=0,re=k.length;W<re;W++){const I=Array.isArray(k[W])?k[W]:[k[W]];for(let L=0,Y=I.length;L<Y;L++){const me=I[L],de=Array.isArray(me.value)?me.value:[me.value];for(let Ee=0,Me=de.length;Ee<Me;Ee++){const ye=de[Ee],Ae=P(ye),he=F%u,Ie=he%Ae.boundary,Ge=he+Ie;F+=Ie,Ge!==0&&u-Ge<Ae.storage&&(F+=u-Ge),me.__data=new Float32Array(Ae.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=F,F+=Ae.storage}}}const K=F%u;return K>0&&(F+=u-K),q.__size=F,q.__cache={},this}function P(q){const k={boundary:0,storage:0};return typeof q=="number"||typeof q=="boolean"?(k.boundary=4,k.storage=4):q.isVector2?(k.boundary=8,k.storage=8):q.isVector3||q.isColor?(k.boundary=16,k.storage=12):q.isVector4?(k.boundary=16,k.storage=16):q.isMatrix3?(k.boundary=48,k.storage=48):q.isMatrix4?(k.boundary=64,k.storage=64):q.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",q),k}function v(q){const k=q.target;k.removeEventListener("dispose",v);const F=a.indexOf(k.__bindingPointIndex);a.splice(F,1),i.deleteBuffer(r[k.id]),delete r[k.id],delete o[k.id]}function _(){for(const q in r)i.deleteBuffer(r[q]);a=[],r={},o={}}return{bind:h,update:g,dispose:_}}class Ng{constructor(e={}){const{canvas:t=hd(),context:n=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:g=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=a;const M=new Uint32Array(4),P=new Int32Array(4);let v=null,_=null;const q=[],k=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zn,this.toneMapping=Wi,this.toneMappingExposure=1;const F=this;let u=!1,K=0,W=0,re=null,I=-1,L=null;const Y=new sn,me=new sn;let de=null;const Ee=new Xt(0);let Me=0,ye=t.width,Ae=t.height,he=1,Ie=null,Ge=null;const rt=new sn(0,0,ye,Ae),Et=new sn(0,0,ye,Ae);let Ot=!1;const z=new Hc;let Re=!1,We=!1;this.transmissionResolutionScale=1;const Be=new on,dt=new on,ht=new le,je=new sn,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function He(){return re===null?he:1}let G=n;function vn(T,j){return t.getContext(T,j)}try{const T={alpha:!0,depth:r,stencil:o,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:g,powerPreference:m,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Va}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),G===null){const j="webgl2";if(G=vn(j,T),G===null)throw vn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ct,Tt,st,kt,Ze,U,w,oe,xe,Te,ge,et,Ue,$e,vt,Pe,Je,Qe,it,Ye,Rt,xt,Wt,J;function ze(){Ct=new Wp(G),Ct.init(),xt=new wg(G,Ct),Tt=new kp(G,Ct,e,xt),st=new Mg(G,Ct),Tt.reverseDepthBuffer&&y&&st.buffers.depth.setReversed(!0),kt=new $p(G),Ze=new dg,U=new Tg(G,Ct,st,Ze,Tt,xt,kt),w=new zp(F),oe=new Gp(F),xe=new Qd(G),Wt=new Fp(G,xe),Te=new Xp(G,xe,kt,Wt),ge=new Yp(G,Te,xe,kt),it=new jp(G,Tt,U),Pe=new Bp(Ze),et=new ug(F,w,oe,Ct,Tt,Wt,Pe),Ue=new Ig(F,Ze),$e=new hg,vt=new xg(Ct),Qe=new Np(F,w,oe,st,ge,S,h),Je=new bg(F,ge,Tt),J=new Ug(G,kt,Tt,st),Ye=new Op(G,Ct,kt),Rt=new qp(G,Ct,kt),kt.programs=et.programs,F.capabilities=Tt,F.extensions=Ct,F.properties=Ze,F.renderLists=$e,F.shadowMap=Je,F.state=st,F.info=kt}ze();const fe=new Pg(F,G);this.xr=fe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=Ct.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ct.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(T){T!==void 0&&(he=T,this.setSize(ye,Ae,!1))},this.getSize=function(T){return T.set(ye,Ae)},this.setSize=function(T,j,te=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ye=T,Ae=j,t.width=Math.floor(T*he),t.height=Math.floor(j*he),te===!0&&(t.style.width=T+"px",t.style.height=j+"px"),this.setViewport(0,0,T,j)},this.getDrawingBufferSize=function(T){return T.set(ye*he,Ae*he).floor()},this.setDrawingBufferSize=function(T,j,te){ye=T,Ae=j,he=te,t.width=Math.floor(T*te),t.height=Math.floor(j*te),this.setViewport(0,0,T,j)},this.getCurrentViewport=function(T){return T.copy(Y)},this.getViewport=function(T){return T.copy(rt)},this.setViewport=function(T,j,te,se){T.isVector4?rt.set(T.x,T.y,T.z,T.w):rt.set(T,j,te,se),st.viewport(Y.copy(rt).multiplyScalar(he).round())},this.getScissor=function(T){return T.copy(Et)},this.setScissor=function(T,j,te,se){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,j,te,se),st.scissor(me.copy(Et).multiplyScalar(he).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(T){st.setScissorTest(Ot=T)},this.setOpaqueSort=function(T){Ie=T},this.setTransparentSort=function(T){Ge=T},this.getClearColor=function(T){return T.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(T=!0,j=!0,te=!0){let se=0;if(T){let Z=!1;if(re!==null){const be=re.texture.format;Z=be===ja||be===$a||be===qa}if(Z){const be=re.texture.type,Le=be===Pi||be===ur||be===is||be===Br||be===Wa||be===Xa,De=Qe.getClearColor(),ke=Qe.getClearAlpha(),lt=De.r,ft=De.g,ot=De.b;Le?(M[0]=lt,M[1]=ft,M[2]=ot,M[3]=ke,G.clearBufferuiv(G.COLOR,0,M)):(P[0]=lt,P[1]=ft,P[2]=ot,P[3]=ke,G.clearBufferiv(G.COLOR,0,P))}else se|=G.COLOR_BUFFER_BIT}j&&(se|=G.DEPTH_BUFFER_BIT),te&&(se|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Qe.dispose(),$e.dispose(),vt.dispose(),Ze.dispose(),w.dispose(),oe.dispose(),ge.dispose(),Wt.dispose(),J.dispose(),et.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",hr),fe.removeEventListener("sessionend",_i),xn.stop()};function ve(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),u=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),u=!1;const T=kt.autoReset,j=Je.enabled,te=Je.autoUpdate,se=Je.needsUpdate,Z=Je.type;ze(),kt.autoReset=T,Je.enabled=j,Je.autoUpdate=te,Je.needsUpdate=se,Je.type=Z}function Fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function gt(T){const j=T.target;j.removeEventListener("dispose",gt),Jt(j)}function Jt(T){an(T),Ze.remove(T)}function an(T){const j=Ze.get(T).programs;j!==void 0&&(j.forEach(function(te){et.releaseProgram(te)}),T.isShaderMaterial&&et.releaseShaderCache(T))}this.renderBufferDirect=function(T,j,te,se,Z,be){j===null&&(j=pt);const Le=Z.isMesh&&Z.matrixWorld.determinant()<0,De=D(T,j,te,se,Z);st.setMaterial(se,Le);let ke=te.index,lt=1;if(se.wireframe===!0){if(ke=Te.getWireframeAttribute(te),ke===void 0)return;lt=2}const ft=te.drawRange,ot=te.attributes.position;let Lt=ft.start*lt,Pt=(ft.start+ft.count)*lt;be!==null&&(Lt=Math.max(Lt,be.start*lt),Pt=Math.min(Pt,(be.start+be.count)*lt)),ke!==null?(Lt=Math.max(Lt,0),Pt=Math.min(Pt,ke.count)):ot!=null&&(Lt=Math.max(Lt,0),Pt=Math.min(Pt,ot.count));const Qt=Pt-Lt;if(Qt<0||Qt===1/0)return;Wt.setup(Z,se,De,te,ke);let Ft,Dt=Ye;if(ke!==null&&(Ft=xe.get(ke),Dt=Rt,Dt.setIndex(Ft)),Z.isMesh)se.wireframe===!0?(st.setLineWidth(se.wireframeLinewidth*He()),Dt.setMode(G.LINES)):Dt.setMode(G.TRIANGLES);else if(Z.isLine){let ct=se.linewidth;ct===void 0&&(ct=1),st.setLineWidth(ct*He()),Z.isLineSegments?Dt.setMode(G.LINES):Z.isLineLoop?Dt.setMode(G.LINE_LOOP):Dt.setMode(G.LINE_STRIP)}else Z.isPoints?Dt.setMode(G.POINTS):Z.isSprite&&Dt.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Dt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Ct.get("WEBGL_multi_draw"))Dt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ct=Z._multiDrawStarts,dn=Z._multiDrawCounts,Ht=Z._multiDrawCount,fn=ke?xe.get(ke).bytesPerElement:1,Nn=Ze.get(se).currentProgram.getUniforms();for(let wn=0;wn<Ht;wn++)Nn.setValue(G,"_gl_DrawID",wn),Dt.render(ct[wn]/fn,dn[wn])}else if(Z.isInstancedMesh)Dt.renderInstances(Lt,Qt,Z.count);else if(te.isInstancedBufferGeometry){const ct=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,dn=Math.min(te.instanceCount,ct);Dt.renderInstances(Lt,Qt,dn)}else Dt.render(Lt,Qt)};function Bt(T,j,te){T.transparent===!0&&T.side===Ai&&T.forceSinglePass===!1?(T.side=Bn,T.needsUpdate=!0,N(T,j,te),T.side=qi,T.needsUpdate=!0,N(T,j,te),T.side=Ai):N(T,j,te)}this.compile=function(T,j,te=null){te===null&&(te=T),_=vt.get(te),_.init(j),k.push(_),te.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),T!==te&&T.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const se=new Set;return T.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const be=Z.material;if(be)if(Array.isArray(be))for(let Le=0;Le<be.length;Le++){const De=be[Le];Bt(De,te,Z),se.add(De)}else Bt(be,te,Z),se.add(be)}),k.pop(),_=null,se},this.compileAsync=function(T,j,te=null){const se=this.compile(T,j,te);return new Promise(Z=>{function be(){if(se.forEach(function(Le){Ze.get(Le).currentProgram.isReady()&&se.delete(Le)}),se.size===0){Z(T);return}setTimeout(be,10)}Ct.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Tn=null;function Un(T){Tn&&Tn(T)}function hr(){xn.stop()}function _i(){xn.start()}const xn=new Xc;xn.setAnimationLoop(Un),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(T){Tn=T,fe.setAnimationLoop(T),T===null?xn.stop():xn.start()},fe.addEventListener("sessionstart",hr),fe.addEventListener("sessionend",_i),this.render=function(T,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(u===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(j),j=fe.getCamera()),T.isScene===!0&&T.onBeforeRender(F,T,j,re),_=vt.get(T,k.length),_.init(j),k.push(_),dt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z.setFromProjectionMatrix(dt),We=this.localClippingEnabled,Re=Pe.init(this.clippingPlanes,We),v=$e.get(T,q.length),v.init(),q.push(v),fe.enabled===!0&&fe.isPresenting===!0){const be=F.xr.getDepthSensingMesh();be!==null&&Ui(be,j,-1/0,F.sortObjects)}Ui(T,j,0,F.sortObjects),v.finish(),F.sortObjects===!0&&v.sort(Ie,Ge),at=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,at&&Qe.addToRenderList(v,T),this.info.render.frame++,Re===!0&&Pe.beginShadows();const te=_.state.shadowsArray;Je.render(te,T,j),Re===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const se=v.opaque,Z=v.transmissive;if(_.setupLights(),j.isArrayCamera){const be=j.cameras;if(Z.length>0)for(let Le=0,De=be.length;Le<De;Le++){const ke=be[Le];li(se,Z,T,ke)}at&&Qe.render(T);for(let Le=0,De=be.length;Le<De;Le++){const ke=be[Le];vi(v,T,ke,ke.viewport)}}else Z.length>0&&li(se,Z,T,j),at&&Qe.render(T),vi(v,T,j);re!==null&&W===0&&(U.updateMultisampleRenderTarget(re),U.updateRenderTargetMipmap(re)),T.isScene===!0&&T.onAfterRender(F,T,j),Wt.resetDefaultState(),I=-1,L=null,k.pop(),k.length>0?(_=k[k.length-1],Re===!0&&Pe.setGlobalState(F.clippingPlanes,_.state.camera)):_=null,q.pop(),q.length>0?v=q[q.length-1]:v=null};function Ui(T,j,te,se){if(T.visible===!1)return;if(T.layers.test(j.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(j);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||z.intersectsSprite(T)){se&&je.setFromMatrixPosition(T.matrixWorld).applyMatrix4(dt);const Le=ge.update(T),De=T.material;De.visible&&v.push(T,Le,De,te,je.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||z.intersectsObject(T))){const Le=ge.update(T),De=T.material;if(se&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),je.copy(T.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),je.copy(Le.boundingSphere.center)),je.applyMatrix4(T.matrixWorld).applyMatrix4(dt)),Array.isArray(De)){const ke=Le.groups;for(let lt=0,ft=ke.length;lt<ft;lt++){const ot=ke[lt],Lt=De[ot.materialIndex];Lt&&Lt.visible&&v.push(T,Le,Lt,te,je.z,ot)}}else De.visible&&v.push(T,Le,De,te,je.z,null)}}const be=T.children;for(let Le=0,De=be.length;Le<De;Le++)Ui(be[Le],j,te,se)}function vi(T,j,te,se){const Z=T.opaque,be=T.transmissive,Le=T.transparent;_.setupLightsView(te),Re===!0&&Pe.setGlobalState(F.clippingPlanes,te),se&&st.viewport(Y.copy(se)),Z.length>0&&B(Z,j,te),be.length>0&&B(be,j,te),Le.length>0&&B(Le,j,te),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function li(T,j,te,se){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[se.id]===void 0&&(_.state.transmissionRenderTarget[se.id]=new dr(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float")?ss:Pi,minFilter:lr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));const be=_.state.transmissionRenderTarget[se.id],Le=se.viewport||Y;be.setSize(Le.z*F.transmissionResolutionScale,Le.w*F.transmissionResolutionScale);const De=F.getRenderTarget();F.setRenderTarget(be),F.getClearColor(Ee),Me=F.getClearAlpha(),Me<1&&F.setClearColor(16777215,.5),F.clear(),at&&Qe.render(te);const ke=F.toneMapping;F.toneMapping=Wi;const lt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),_.setupLightsView(se),Re===!0&&Pe.setGlobalState(F.clippingPlanes,se),B(T,te,se),U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let ot=0,Lt=j.length;ot<Lt;ot++){const Pt=j[ot],Qt=Pt.object,Ft=Pt.geometry,Dt=Pt.material,ct=Pt.group;if(Dt.side===Ai&&Qt.layers.test(se.layers)){const dn=Dt.side;Dt.side=Bn,Dt.needsUpdate=!0,O(Qt,te,se,Ft,Dt,ct),Dt.side=dn,Dt.needsUpdate=!0,ft=!0}}ft===!0&&(U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be))}F.setRenderTarget(De),F.setClearColor(Ee,Me),lt!==void 0&&(se.viewport=lt),F.toneMapping=ke}function B(T,j,te){const se=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,be=T.length;Z<be;Z++){const Le=T[Z],De=Le.object,ke=Le.geometry,lt=se===null?Le.material:se,ft=Le.group;De.layers.test(te.layers)&&O(De,j,te,ke,lt,ft)}}function O(T,j,te,se,Z,be){T.onBeforeRender(F,j,te,se,Z,be),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(F,j,te,se,T,be),Z.transparent===!0&&Z.side===Ai&&Z.forceSinglePass===!1?(Z.side=Bn,Z.needsUpdate=!0,F.renderBufferDirect(te,j,se,Z,T,be),Z.side=qi,Z.needsUpdate=!0,F.renderBufferDirect(te,j,se,Z,T,be),Z.side=Ai):F.renderBufferDirect(te,j,se,Z,T,be),T.onAfterRender(F,j,te,se,Z,be)}function N(T,j,te){j.isScene!==!0&&(j=pt);const se=Ze.get(T),Z=_.state.lights,be=_.state.shadowsArray,Le=Z.state.version,De=et.getParameters(T,Z.state,be,j,te),ke=et.getProgramCacheKey(De);let lt=se.programs;se.environment=T.isMeshStandardMaterial?j.environment:null,se.fog=j.fog,se.envMap=(T.isMeshStandardMaterial?oe:w).get(T.envMap||se.environment),se.envMapRotation=se.environment!==null&&T.envMap===null?j.environmentRotation:T.envMapRotation,lt===void 0&&(T.addEventListener("dispose",gt),lt=new Map,se.programs=lt);let ft=lt.get(ke);if(ft!==void 0){if(se.currentProgram===ft&&se.lightsStateVersion===Le)return E(T,De),ft}else De.uniforms=et.getUniforms(T),T.onBeforeCompile(De,F),ft=et.acquireProgram(De,ke),lt.set(ke,ft),se.uniforms=De.uniforms;const ot=se.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ot.clippingPlanes=Pe.uniform),E(T,De),se.needsLights=pe(T),se.lightsStateVersion=Le,se.needsLights&&(ot.ambientLightColor.value=Z.state.ambient,ot.lightProbe.value=Z.state.probe,ot.directionalLights.value=Z.state.directional,ot.directionalLightShadows.value=Z.state.directionalShadow,ot.spotLights.value=Z.state.spot,ot.spotLightShadows.value=Z.state.spotShadow,ot.rectAreaLights.value=Z.state.rectArea,ot.ltc_1.value=Z.state.rectAreaLTC1,ot.ltc_2.value=Z.state.rectAreaLTC2,ot.pointLights.value=Z.state.point,ot.pointLightShadows.value=Z.state.pointShadow,ot.hemisphereLights.value=Z.state.hemi,ot.directionalShadowMap.value=Z.state.directionalShadowMap,ot.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ot.spotShadowMap.value=Z.state.spotShadowMap,ot.spotLightMatrix.value=Z.state.spotLightMatrix,ot.spotLightMap.value=Z.state.spotLightMap,ot.pointShadowMap.value=Z.state.pointShadowMap,ot.pointShadowMatrix.value=Z.state.pointShadowMatrix),se.currentProgram=ft,se.uniformsList=null,ft}function f(T){if(T.uniformsList===null){const j=T.currentProgram.getUniforms();T.uniformsList=Qs.seqWithValue(j.seq,T.uniforms)}return T.uniformsList}function E(T,j){const te=Ze.get(T);te.outputColorSpace=j.outputColorSpace,te.batching=j.batching,te.batchingColor=j.batchingColor,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.instancingMorph=j.instancingMorph,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function D(T,j,te,se,Z){j.isScene!==!0&&(j=pt),U.resetTextureUnits();const be=j.fog,Le=se.isMeshStandardMaterial?j.environment:null,De=re===null?F.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Hr,ke=(se.isMeshStandardMaterial?oe:w).get(se.envMap||Le),lt=se.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ft=!!te.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),ot=!!te.morphAttributes.position,Lt=!!te.morphAttributes.normal,Pt=!!te.morphAttributes.color;let Qt=Wi;se.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Qt=F.toneMapping);const Ft=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Dt=Ft!==void 0?Ft.length:0,ct=Ze.get(se),dn=_.state.lights;if(Re===!0&&(We===!0||T!==L)){const Sn=T===L&&se.id===I;Pe.setState(se,T,Sn)}let Ht=!1;se.version===ct.__version?(ct.needsLights&&ct.lightsStateVersion!==dn.state.version||ct.outputColorSpace!==De||Z.isBatchedMesh&&ct.batching===!1||!Z.isBatchedMesh&&ct.batching===!0||Z.isBatchedMesh&&ct.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ct.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ct.instancing===!1||!Z.isInstancedMesh&&ct.instancing===!0||Z.isSkinnedMesh&&ct.skinning===!1||!Z.isSkinnedMesh&&ct.skinning===!0||Z.isInstancedMesh&&ct.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ct.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ct.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ct.instancingMorph===!1&&Z.morphTexture!==null||ct.envMap!==ke||se.fog===!0&&ct.fog!==be||ct.numClippingPlanes!==void 0&&(ct.numClippingPlanes!==Pe.numPlanes||ct.numIntersection!==Pe.numIntersection)||ct.vertexAlphas!==lt||ct.vertexTangents!==ft||ct.morphTargets!==ot||ct.morphNormals!==Lt||ct.morphColors!==Pt||ct.toneMapping!==Qt||ct.morphTargetsCount!==Dt)&&(Ht=!0):(Ht=!0,ct.__version=se.version);let fn=ct.currentProgram;Ht===!0&&(fn=N(se,j,Z));let Nn=!1,wn=!1,ji=!1;const jt=fn.getUniforms(),Ln=ct.uniforms;if(st.useProgram(fn.program)&&(Nn=!0,wn=!0,ji=!0),se.id!==I&&(I=se.id,wn=!0),Nn||L!==T){st.buffers.depth.getReversed()?(Be.copy(T.projectionMatrix),md(Be),gd(Be),jt.setValue(G,"projectionMatrix",Be)):jt.setValue(G,"projectionMatrix",T.projectionMatrix),jt.setValue(G,"viewMatrix",T.matrixWorldInverse);const bn=jt.map.cameraPosition;bn!==void 0&&bn.setValue(G,ht.setFromMatrixPosition(T.matrixWorld)),Tt.logarithmicDepthBuffer&&jt.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&jt.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),L!==T&&(L=T,wn=!0,ji=!0)}if(Z.isSkinnedMesh){jt.setOptional(G,Z,"bindMatrix"),jt.setOptional(G,Z,"bindMatrixInverse");const Sn=Z.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),jt.setValue(G,"boneTexture",Sn.boneTexture,U))}Z.isBatchedMesh&&(jt.setOptional(G,Z,"batchingTexture"),jt.setValue(G,"batchingTexture",Z._matricesTexture,U),jt.setOptional(G,Z,"batchingIdTexture"),jt.setValue(G,"batchingIdTexture",Z._indirectTexture,U),jt.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&jt.setValue(G,"batchingColorTexture",Z._colorsTexture,U));const yn=te.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&it.update(Z,te,fn),(wn||ct.receiveShadow!==Z.receiveShadow)&&(ct.receiveShadow=Z.receiveShadow,jt.setValue(G,"receiveShadow",Z.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Ln.envMap.value=ke,Ln.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&j.environment!==null&&(Ln.envMapIntensity.value=j.environmentIntensity),wn&&(jt.setValue(G,"toneMappingExposure",F.toneMappingExposure),ct.needsLights&&ne(Ln,ji),be&&se.fog===!0&&Ue.refreshFogUniforms(Ln,be),Ue.refreshMaterialUniforms(Ln,se,he,Ae,_.state.transmissionRenderTarget[T.id]),Qs.upload(G,f(ct),Ln,U)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Qs.upload(G,f(ct),Ln,U),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&jt.setValue(G,"center",Z.center),jt.setValue(G,"modelViewMatrix",Z.modelViewMatrix),jt.setValue(G,"normalMatrix",Z.normalMatrix),jt.setValue(G,"modelMatrix",Z.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Sn=se.uniformsGroups;for(let bn=0,qr=Sn.length;bn<qr;bn++){const ci=Sn[bn];J.update(ci,fn),J.bind(ci,fn)}}return fn}function ne(T,j){T.ambientLightColor.needsUpdate=j,T.lightProbe.needsUpdate=j,T.directionalLights.needsUpdate=j,T.directionalLightShadows.needsUpdate=j,T.pointLights.needsUpdate=j,T.pointLightShadows.needsUpdate=j,T.spotLights.needsUpdate=j,T.spotLightShadows.needsUpdate=j,T.rectAreaLights.needsUpdate=j,T.hemisphereLights.needsUpdate=j}function pe(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(T,j,te){Ze.get(T.texture).__webglTexture=j,Ze.get(T.depthTexture).__webglTexture=te;const se=Ze.get(T);se.__hasExternalTextures=!0,se.__autoAllocateDepthBuffer=te===void 0,se.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),se.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,j){const te=Ze.get(T);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0};const Oe=G.createFramebuffer();this.setRenderTarget=function(T,j=0,te=0){re=T,K=j,W=te;let se=!0,Z=null,be=!1,Le=!1;if(T){const ke=Ze.get(T);if(ke.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(G.FRAMEBUFFER,null),se=!1;else if(ke.__webglFramebuffer===void 0)U.setupRenderTarget(T);else if(ke.__hasExternalTextures)U.rebindTextures(T,Ze.get(T.texture).__webglTexture,Ze.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ot=T.depthTexture;if(ke.__boundDepthTexture!==ot){if(ot!==null&&Ze.has(ot)&&(T.width!==ot.image.width||T.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(T)}}const lt=T.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Le=!0);const ft=Ze.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ft[j])?Z=ft[j][te]:Z=ft[j],be=!0):T.samples>0&&U.useMultisampledRTT(T)===!1?Z=Ze.get(T).__webglMultisampledFramebuffer:Array.isArray(ft)?Z=ft[te]:Z=ft,Y.copy(T.viewport),me.copy(T.scissor),de=T.scissorTest}else Y.copy(rt).multiplyScalar(he).floor(),me.copy(Et).multiplyScalar(he).floor(),de=Ot;if(te!==0&&(Z=Oe),st.bindFramebuffer(G.FRAMEBUFFER,Z)&&se&&st.drawBuffers(T,Z),st.viewport(Y),st.scissor(me),st.setScissorTest(de),be){const ke=Ze.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,ke.__webglTexture,te)}else if(Le){const ke=Ze.get(T.texture),lt=j;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ke.__webglTexture,te,lt)}else if(T!==null&&te!==0){const ke=Ze.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ke.__webglTexture,te)}I=-1},this.readRenderTargetPixels=function(T,j,te,se,Z,be,Le){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De){st.bindFramebuffer(G.FRAMEBUFFER,De);try{const ke=T.texture,lt=ke.format,ft=ke.type;if(!Tt.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=T.width-se&&te>=0&&te<=T.height-Z&&G.readPixels(j,te,se,Z,xt.convert(lt),xt.convert(ft),be)}finally{const ke=re!==null?Ze.get(re).__webglFramebuffer:null;st.bindFramebuffer(G.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,j,te,se,Z,be,Le){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ze.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(De=De[Le]),De){const ke=T.texture,lt=ke.format,ft=ke.type;if(!Tt.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=T.width-se&&te>=0&&te<=T.height-Z){st.bindFramebuffer(G.FRAMEBUFFER,De);const ot=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ot),G.bufferData(G.PIXEL_PACK_BUFFER,be.byteLength,G.STREAM_READ),G.readPixels(j,te,se,Z,xt.convert(lt),xt.convert(ft),0);const Lt=re!==null?Ze.get(re).__webglFramebuffer:null;st.bindFramebuffer(G.FRAMEBUFFER,Lt);const Pt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await pd(G,Pt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ot),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,be),G.deleteBuffer(ot),G.deleteSync(Pt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,j=null,te=0){T.isTexture!==!0&&(Pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1]);const se=Math.pow(2,-te),Z=Math.floor(T.image.width*se),be=Math.floor(T.image.height*se),Le=j!==null?j.x:0,De=j!==null?j.y:0;U.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,te,0,0,Le,De,Z,be),st.unbindTexture()};const tt=G.createFramebuffer(),Nt=G.createFramebuffer();this.copyTextureToTexture=function(T,j,te=null,se=null,Z=0,be=null){T.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture function signature has changed."),se=arguments[0]||null,T=arguments[1],j=arguments[2],be=arguments[3]||0,te=null),be===null&&(Z!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=Z,Z=0):be=0);let Le,De,ke,lt,ft,ot,Lt,Pt,Qt;const Ft=T.isCompressedTexture?T.mipmaps[be]:T.image;if(te!==null)Le=te.max.x-te.min.x,De=te.max.y-te.min.y,ke=te.isBox3?te.max.z-te.min.z:1,lt=te.min.x,ft=te.min.y,ot=te.isBox3?te.min.z:0;else{const yn=Math.pow(2,-Z);Le=Math.floor(Ft.width*yn),De=Math.floor(Ft.height*yn),T.isDataArrayTexture?ke=Ft.depth:T.isData3DTexture?ke=Math.floor(Ft.depth*yn):ke=1,lt=0,ft=0,ot=0}se!==null?(Lt=se.x,Pt=se.y,Qt=se.z):(Lt=0,Pt=0,Qt=0);const Dt=xt.convert(j.format),ct=xt.convert(j.type);let dn;j.isData3DTexture?(U.setTexture3D(j,0),dn=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(U.setTexture2DArray(j,0),dn=G.TEXTURE_2D_ARRAY):(U.setTexture2D(j,0),dn=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);const Ht=G.getParameter(G.UNPACK_ROW_LENGTH),fn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Nn=G.getParameter(G.UNPACK_SKIP_PIXELS),wn=G.getParameter(G.UNPACK_SKIP_ROWS),ji=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ft.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ft.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,lt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ft),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ot);const jt=T.isDataArrayTexture||T.isData3DTexture,Ln=j.isDataArrayTexture||j.isData3DTexture;if(T.isDepthTexture){const yn=Ze.get(T),Sn=Ze.get(j),bn=Ze.get(yn.__renderTarget),qr=Ze.get(Sn.__renderTarget);st.bindFramebuffer(G.READ_FRAMEBUFFER,bn.__webglFramebuffer),st.bindFramebuffer(G.DRAW_FRAMEBUFFER,qr.__webglFramebuffer);for(let ci=0;ci<ke;ci++)jt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ze.get(T).__webglTexture,Z,ot+ci),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ze.get(j).__webglTexture,be,Qt+ci)),G.blitFramebuffer(lt,ft,Le,De,Lt,Pt,Le,De,G.DEPTH_BUFFER_BIT,G.NEAREST);st.bindFramebuffer(G.READ_FRAMEBUFFER,null),st.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||T.isRenderTargetTexture||Ze.has(T)){const yn=Ze.get(T),Sn=Ze.get(j);st.bindFramebuffer(G.READ_FRAMEBUFFER,tt),st.bindFramebuffer(G.DRAW_FRAMEBUFFER,Nt);for(let bn=0;bn<ke;bn++)jt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,yn.__webglTexture,Z,ot+bn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,yn.__webglTexture,Z),Ln?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Sn.__webglTexture,be,Qt+bn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Sn.__webglTexture,be),Z!==0?G.blitFramebuffer(lt,ft,Le,De,Lt,Pt,Le,De,G.COLOR_BUFFER_BIT,G.NEAREST):Ln?G.copyTexSubImage3D(dn,be,Lt,Pt,Qt+bn,lt,ft,Le,De):G.copyTexSubImage2D(dn,be,Lt,Pt,lt,ft,Le,De);st.bindFramebuffer(G.READ_FRAMEBUFFER,null),st.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ln?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(dn,be,Lt,Pt,Qt,Le,De,ke,Dt,ct,Ft.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(dn,be,Lt,Pt,Qt,Le,De,ke,Dt,Ft.data):G.texSubImage3D(dn,be,Lt,Pt,Qt,Le,De,ke,Dt,ct,Ft):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,be,Lt,Pt,Le,De,Dt,ct,Ft.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,be,Lt,Pt,Ft.width,Ft.height,Dt,Ft.data):G.texSubImage2D(G.TEXTURE_2D,be,Lt,Pt,Le,De,Dt,ct,Ft);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ht),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,fn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Nn),G.pixelStorei(G.UNPACK_SKIP_ROWS,wn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ji),be===0&&j.generateMipmaps&&G.generateMipmap(dn),st.unbindTexture()},this.copyTextureToTexture3D=function(T,j,te=null,se=null,Z=0){return T.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,se=arguments[1]||null,T=arguments[2],j=arguments[3],Z=arguments[4]||0),Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,j,te,se,Z)},this.initRenderTarget=function(T){Ze.get(T).__webglFramebuffer===void 0&&U.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?U.setTextureCube(T,0):T.isData3DTexture?U.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?U.setTexture2DArray(T,0):U.setTexture2D(T,0),st.unbindTexture()},this.resetState=function(){K=0,W=0,re=null,st.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Vt._getUnpackColorSpace()}}const Vi=new Bd,lo=new Jn(75,window.innerWidth/window.innerHeight,.1,1e3),co=new Ng({antialias:!0,alpha:!0,canvas:document.querySelector("#background")});co.setPixelRatio(window.devicePixelRatio);co.setSize(window.innerWidth,window.innerHeight);lo.position.setZ(30);co.render(Vi,lo);const Fg=new us({map:new Wc().load("../img/literallyme.jpg")}),Og=new us({map:new Wc().load("../img/literallyme.jpg")}),qs=new us({color:16777215});var Xi=new pi(new fr(15,15,1),[qs,qs,qs,qs,Fg,Og]);Xi.material[5].map.flipY=!0;const Gr=new Gd(new Wd(new fr(15,15,1)),new Vc({color:0,linewidth:5}));var Za=17,Kc=-1,Zc=10;Xi.position.set(Za,Kc,Zc);Gr.position.set(Za,Kc,Zc);/Mobi|Android|iPhone/i.test(navigator.userAgent)||(Vi.add(Xi),Vi.add(Gr));var Qo=0,hc=-50;function Jc(){const i=document.body.getBoundingClientRect().top;lo.position.y+=(Qo-i)*-.04,Xi.position.x=Gr.position.x=Math.max(Za,Xi.position.x+(Qo-i)*.1),Xi.rotation.y=Gr.rotation.y+=(hc-i)*.05/10,Qo=i,hc=i}Jc();document.body.onscroll=Jc;function Qc(){requestAnimationFrame(Qc),co.render(Vi,lo)}Qc();jQuery(function(){$(".navbar .navbar-nav > .nav-item > a.nav-link, .tm-page-link").on("click",function(i){var e=$(this).data("no");e==1?(Vi.add(Xi),Vi.add(Gr)):(Vi.remove(Xi),Vi.remove(Gr))})});/*!
  * Bootstrap v5.0.0-beta2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(i,e){typeof Ja=="object"&&typeof cr<"u"?cr.exports=e(require("@popperjs/core")):typeof define=="function"&&define.amd?define(["@popperjs/core"],e):(i=typeof globalThis<"u"?globalThis:i||self).bootstrap=e(i.Popper)})(void 0,function(i){function e(B){if(B&&B.__esModule)return B;var O=Object.create(null);return B&&Object.keys(B).forEach(function(N){if(N!=="default"){var f=Object.getOwnPropertyDescriptor(B,N);Object.defineProperty(O,N,f.get?f:{enumerable:!0,get:function(){return B[N]}})}}),O.default=B,Object.freeze(O)}var t=e(i);function n(B,O){for(var N=0;N<O.length;N++){var f=O[N];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(B,f.key,f)}}function r(B,O,N){return N&&n(B,N),B}function o(){return(o=Object.assign||function(B){for(var O=1;O<arguments.length;O++){var N=arguments[O];for(var f in N)Object.prototype.hasOwnProperty.call(N,f)&&(B[f]=N[f])}return B}).apply(this,arguments)}function a(B,O){var N,f;B.prototype=Object.create(O.prototype),B.prototype.constructor=B,N=B,f=O,(Object.setPrototypeOf||function(E,D){return E.__proto__=D,E})(N,f)}var c,h,g=function(B){do B+=Math.floor(1e6*Math.random());while(document.getElementById(B));return B},m=function(B){var O=B.getAttribute("data-bs-target");if(!O||O==="#"){var N=B.getAttribute("href");if(!N||!N.includes("#")&&!N.startsWith("."))return null;N.includes("#")&&!N.startsWith("#")&&(N="#"+N.split("#")[1]),O=N&&N!=="#"?N.trim():null}return O},x=function(B){var O=m(B);return O&&document.querySelector(O)?O:null},y=function(B){var O=m(B);return O?document.querySelector(O):null},S=function(B){if(!B)return 0;var O=window.getComputedStyle(B),N=O.transitionDuration,f=O.transitionDelay,E=Number.parseFloat(N),D=Number.parseFloat(f);return E||D?(N=N.split(",")[0],f=f.split(",")[0],1e3*(Number.parseFloat(N)+Number.parseFloat(f))):0},M=function(B){B.dispatchEvent(new Event("transitionend"))},P=function(B){return(B[0]||B).nodeType},v=function(B,O){var N=!1,f=O+5;B.addEventListener("transitionend",function E(){N=!0,B.removeEventListener("transitionend",E)}),setTimeout(function(){N||M(B)},f)},_=function(B,O,N){Object.keys(N).forEach(function(f){var E,D=N[f],ne=O[f],pe=ne&&P(ne)?"element":(E=ne)==null?""+E:{}.toString.call(E).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(D).test(pe))throw new TypeError(B.toUpperCase()+': Option "'+f+'" provided type "'+pe+'" but expected type "'+D+'".')})},q=function(B){if(!B)return!1;if(B.style&&B.parentNode&&B.parentNode.style){var O=getComputedStyle(B),N=getComputedStyle(B.parentNode);return O.display!=="none"&&N.display!=="none"&&O.visibility!=="hidden"}return!1},k=function(){return function(){}},F=function(B){return B.offsetHeight},u=function(){var B=window.jQuery;return B&&!document.body.hasAttribute("data-bs-no-jquery")?B:null},K=document.documentElement.dir==="rtl",W=function(B,O){var N;N=function(){var f=u();if(f){var E=f.fn[B];f.fn[B]=O.jQueryInterface,f.fn[B].Constructor=O,f.fn[B].noConflict=function(){return f.fn[B]=E,O.jQueryInterface}}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",N):N()},re=(c={},h=1,{set:function(B,O,N){B.bsKey===void 0&&(B.bsKey={key:O,id:h},h++),c[B.bsKey.id]=N},get:function(B,O){if(!B||B.bsKey===void 0)return null;var N=B.bsKey;return N.key===O?c[N.id]:null},delete:function(B,O){if(B.bsKey!==void 0){var N=B.bsKey;N.key===O&&(delete c[N.id],delete B.bsKey)}}}),I=function(B,O,N){re.set(B,O,N)},L=function(B,O){return re.get(B,O)},Y=/[^.]*(?=\..*)\.|.*/,me=/\..*/,de=/::\d+$/,Ee={},Me=1,ye={mouseenter:"mouseover",mouseleave:"mouseout"},Ae=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function he(B,O){return O&&O+"::"+Me++||B.uidEvent||Me++}function Ie(B){var O=he(B);return B.uidEvent=O,Ee[O]=Ee[O]||{},Ee[O]}function Ge(B,O,N){N===void 0&&(N=null);for(var f=Object.keys(B),E=0,D=f.length;E<D;E++){var ne=B[f[E]];if(ne.originalHandler===O&&ne.delegationSelector===N)return ne}return null}function rt(B,O,N){var f=typeof O=="string",E=f?N:O,D=B.replace(me,""),ne=ye[D];return ne&&(D=ne),Ae.has(D)||(D=B),[f,E,D]}function Et(B,O,N,f,E){if(typeof O=="string"&&B){N||(N=f,f=null);var D=rt(O,N,f),ne=D[0],pe=D[1],Oe=D[2],tt=Ie(B),Nt=tt[Oe]||(tt[Oe]={}),T=Ge(Nt,pe,ne?N:null);if(T)T.oneOff=T.oneOff&&E;else{var j=he(pe,O.replace(Y,"")),te=ne?function(se,Z,be){return function Le(De){for(var ke=se.querySelectorAll(Z),lt=De.target;lt&&lt!==this;lt=lt.parentNode)for(var ft=ke.length;ft--;)if(ke[ft]===lt)return De.delegateTarget=lt,Le.oneOff&&z.off(se,De.type,be),be.apply(lt,[De]);return null}}(B,N,f):function(se,Z){return function be(Le){return Le.delegateTarget=se,be.oneOff&&z.off(se,Le.type,Z),Z.apply(se,[Le])}}(B,N);te.delegationSelector=ne?N:null,te.originalHandler=pe,te.oneOff=E,te.uidEvent=j,Nt[j]=te,B.addEventListener(Oe,te,ne)}}}function Ot(B,O,N,f,E){var D=Ge(O[N],f,E);D&&(B.removeEventListener(N,D,!!E),delete O[N][D.uidEvent])}var z={on:function(B,O,N,f){Et(B,O,N,f,!1)},one:function(B,O,N,f){Et(B,O,N,f,!0)},off:function(B,O,N,f){if(typeof O=="string"&&B){var E=rt(O,N,f),D=E[0],ne=E[1],pe=E[2],Oe=pe!==O,tt=Ie(B),Nt=O.startsWith(".");if(ne===void 0){Nt&&Object.keys(tt).forEach(function(j){(function(te,se,Z,be){var Le=se[Z]||{};Object.keys(Le).forEach(function(De){if(De.includes(be)){var ke=Le[De];Ot(te,se,Z,ke.originalHandler,ke.delegationSelector)}})})(B,tt,j,O.slice(1))});var T=tt[pe]||{};Object.keys(T).forEach(function(j){var te=j.replace(de,"");if(!Oe||O.includes(te)){var se=T[j];Ot(B,tt,pe,se.originalHandler,se.delegationSelector)}})}else{if(!tt||!tt[pe])return;Ot(B,tt,pe,ne,D?N:null)}}},trigger:function(B,O,N){if(typeof O!="string"||!B)return null;var f,E=u(),D=O.replace(me,""),ne=O!==D,pe=Ae.has(D),Oe=!0,tt=!0,Nt=!1,T=null;return ne&&E&&(f=E.Event(O,N),E(B).trigger(f),Oe=!f.isPropagationStopped(),tt=!f.isImmediatePropagationStopped(),Nt=f.isDefaultPrevented()),pe?(T=document.createEvent("HTMLEvents")).initEvent(D,Oe,!0):T=new CustomEvent(O,{bubbles:Oe,cancelable:!0}),N!==void 0&&Object.keys(N).forEach(function(j){Object.defineProperty(T,j,{get:function(){return N[j]}})}),Nt&&T.preventDefault(),tt&&B.dispatchEvent(T),T.defaultPrevented&&f!==void 0&&f.preventDefault(),T}},Re=function(){function B(O){O&&(this._element=O,I(O,this.constructor.DATA_KEY,this))}return B.prototype.dispose=function(){var O,N;O=this._element,N=this.constructor.DATA_KEY,re.delete(O,N),this._element=null},B.getInstance=function(O){return L(O,this.DATA_KEY)},r(B,null,[{key:"VERSION",get:function(){return"5.0.0-beta2"}}]),B}(),We=function(B){function O(){return B.apply(this,arguments)||this}a(O,B);var N=O.prototype;return N.close=function(f){var E=f?this._getRootElement(f):this._element,D=this._triggerCloseEvent(E);D===null||D.defaultPrevented||this._removeElement(E)},N._getRootElement=function(f){return y(f)||f.closest(".alert")},N._triggerCloseEvent=function(f){return z.trigger(f,"close.bs.alert")},N._removeElement=function(f){var E=this;if(f.classList.remove("show"),f.classList.contains("fade")){var D=S(f);z.one(f,"transitionend",function(){return E._destroyElement(f)}),v(f,D)}else this._destroyElement(f)},N._destroyElement=function(f){f.parentNode&&f.parentNode.removeChild(f),z.trigger(f,"closed.bs.alert")},O.jQueryInterface=function(f){return this.each(function(){var E=L(this,"bs.alert");E||(E=new O(this)),f==="close"&&E[f](this)})},O.handleDismiss=function(f){return function(E){E&&E.preventDefault(),f.close(this)}},r(O,null,[{key:"DATA_KEY",get:function(){return"bs.alert"}}]),O}(Re);z.on(document,"click.bs.alert.data-api",'[data-bs-dismiss="alert"]',We.handleDismiss(new We)),W("alert",We);var Be=function(B){function O(){return B.apply(this,arguments)||this}return a(O,B),O.prototype.toggle=function(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))},O.jQueryInterface=function(N){return this.each(function(){var f=L(this,"bs.button");f||(f=new O(this)),N==="toggle"&&f[N]()})},r(O,null,[{key:"DATA_KEY",get:function(){return"bs.button"}}]),O}(Re);function dt(B){return B==="true"||B!=="false"&&(B===Number(B).toString()?Number(B):B===""||B==="null"?null:B)}function ht(B){return B.replace(/[A-Z]/g,function(O){return"-"+O.toLowerCase()})}z.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',function(B){B.preventDefault();var O=B.target.closest('[data-bs-toggle="button"]'),N=L(O,"bs.button");N||(N=new Be(O)),N.toggle()}),W("button",Be);var je={setDataAttribute:function(B,O,N){B.setAttribute("data-bs-"+ht(O),N)},removeDataAttribute:function(B,O){B.removeAttribute("data-bs-"+ht(O))},getDataAttributes:function(B){if(!B)return{};var O={};return Object.keys(B.dataset).filter(function(N){return N.startsWith("bs")}).forEach(function(N){var f=N.replace(/^bs/,"");f=f.charAt(0).toLowerCase()+f.slice(1,f.length),O[f]=dt(B.dataset[N])}),O},getDataAttribute:function(B,O){return dt(B.getAttribute("data-bs-"+ht(O)))},offset:function(B){var O=B.getBoundingClientRect();return{top:O.top+document.body.scrollTop,left:O.left+document.body.scrollLeft}},position:function(B){return{top:B.offsetTop,left:B.offsetLeft}}},pt=function(B,O){var N;return O===void 0&&(O=document.documentElement),(N=[]).concat.apply(N,Element.prototype.querySelectorAll.call(O,B))},at=function(B,O){return O===void 0&&(O=document.documentElement),Element.prototype.querySelector.call(O,B)},He=function(B,O){var N;return(N=[]).concat.apply(N,B.children).filter(function(f){return f.matches(O)})},G=function(B,O){for(var N=B.previousElementSibling;N;){if(N.matches(O))return[N];N=N.previousElementSibling}return[]},vn={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Ct={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Tt=function(B){function O(f,E){var D;return(D=B.call(this,f)||this)._items=null,D._interval=null,D._activeElement=null,D._isPaused=!1,D._isSliding=!1,D.touchTimeout=null,D.touchStartX=0,D.touchDeltaX=0,D._config=D._getConfig(E),D._indicatorsElement=at(".carousel-indicators",D._element),D._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,D._pointerEvent=!!window.PointerEvent,D._addEventListeners(),D}a(O,B);var N=O.prototype;return N.next=function(){this._isSliding||this._slide("next")},N.nextWhenVisible=function(){!document.hidden&&q(this._element)&&this.next()},N.prev=function(){this._isSliding||this._slide("prev")},N.pause=function(f){f||(this._isPaused=!0),at(".carousel-item-next, .carousel-item-prev",this._element)&&(M(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},N.cycle=function(f){f||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},N.to=function(f){var E=this;this._activeElement=at(".active.carousel-item",this._element);var D=this._getItemIndex(this._activeElement);if(!(f>this._items.length-1||f<0))if(this._isSliding)z.one(this._element,"slid.bs.carousel",function(){return E.to(f)});else{if(D===f)return this.pause(),void this.cycle();var ne=f>D?"next":"prev";this._slide(ne,this._items[f])}},N.dispose=function(){B.prototype.dispose.call(this),z.off(this._element,".bs.carousel"),this._items=null,this._config=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},N._getConfig=function(f){return f=o({},vn,f),_("carousel",f,Ct),f},N._handleSwipe=function(){var f=Math.abs(this.touchDeltaX);if(!(f<=40)){var E=f/this.touchDeltaX;this.touchDeltaX=0,E>0&&(K?this.next():this.prev()),E<0&&(K?this.prev():this.next())}},N._addEventListeners=function(){var f=this;this._config.keyboard&&z.on(this._element,"keydown.bs.carousel",function(E){return f._keydown(E)}),this._config.pause==="hover"&&(z.on(this._element,"mouseenter.bs.carousel",function(E){return f.pause(E)}),z.on(this._element,"mouseleave.bs.carousel",function(E){return f.cycle(E)})),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()},N._addTouchEventListeners=function(){var f=this,E=function(ne){!f._pointerEvent||ne.pointerType!=="pen"&&ne.pointerType!=="touch"?f._pointerEvent||(f.touchStartX=ne.touches[0].clientX):f.touchStartX=ne.clientX},D=function(ne){!f._pointerEvent||ne.pointerType!=="pen"&&ne.pointerType!=="touch"||(f.touchDeltaX=ne.clientX-f.touchStartX),f._handleSwipe(),f._config.pause==="hover"&&(f.pause(),f.touchTimeout&&clearTimeout(f.touchTimeout),f.touchTimeout=setTimeout(function(pe){return f.cycle(pe)},500+f._config.interval))};pt(".carousel-item img",this._element).forEach(function(ne){z.on(ne,"dragstart.bs.carousel",function(pe){return pe.preventDefault()})}),this._pointerEvent?(z.on(this._element,"pointerdown.bs.carousel",function(ne){return E(ne)}),z.on(this._element,"pointerup.bs.carousel",function(ne){return D(ne)}),this._element.classList.add("pointer-event")):(z.on(this._element,"touchstart.bs.carousel",function(ne){return E(ne)}),z.on(this._element,"touchmove.bs.carousel",function(ne){return function(pe){pe.touches&&pe.touches.length>1?f.touchDeltaX=0:f.touchDeltaX=pe.touches[0].clientX-f.touchStartX}(ne)}),z.on(this._element,"touchend.bs.carousel",function(ne){return D(ne)}))},N._keydown=function(f){/input|textarea/i.test(f.target.tagName)||(f.key==="ArrowLeft"?(f.preventDefault(),K?this.next():this.prev()):f.key==="ArrowRight"&&(f.preventDefault(),K?this.prev():this.next()))},N._getItemIndex=function(f){return this._items=f&&f.parentNode?pt(".carousel-item",f.parentNode):[],this._items.indexOf(f)},N._getItemByDirection=function(f,E){var D=f==="next",ne=f==="prev",pe=this._getItemIndex(E),Oe=this._items.length-1;if((ne&&pe===0||D&&pe===Oe)&&!this._config.wrap)return E;var tt=(pe+(f==="prev"?-1:1))%this._items.length;return tt===-1?this._items[this._items.length-1]:this._items[tt]},N._triggerSlideEvent=function(f,E){var D=this._getItemIndex(f),ne=this._getItemIndex(at(".active.carousel-item",this._element));return z.trigger(this._element,"slide.bs.carousel",{relatedTarget:f,direction:E,from:ne,to:D})},N._setActiveIndicatorElement=function(f){if(this._indicatorsElement){var E=at(".active",this._indicatorsElement);E.classList.remove("active"),E.removeAttribute("aria-current");for(var D=pt("[data-bs-target]",this._indicatorsElement),ne=0;ne<D.length;ne++)if(Number.parseInt(D[ne].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(f)){D[ne].classList.add("active"),D[ne].setAttribute("aria-current","true");break}}},N._updateInterval=function(){var f=this._activeElement||at(".active.carousel-item",this._element);if(f){var E=Number.parseInt(f.getAttribute("data-bs-interval"),10);E?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=E):this._config.interval=this._config.defaultInterval||this._config.interval}},N._slide=function(f,E){var D=this,ne=at(".active.carousel-item",this._element),pe=this._getItemIndex(ne),Oe=E||ne&&this._getItemByDirection(f,ne),tt=this._getItemIndex(Oe),Nt=!!this._interval,T=f==="next"?"carousel-item-start":"carousel-item-end",j=f==="next"?"carousel-item-next":"carousel-item-prev",te=f==="next"?"left":"right";if(Oe&&Oe.classList.contains("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(Oe,te).defaultPrevented&&ne&&Oe){if(this._isSliding=!0,Nt&&this.pause(),this._setActiveIndicatorElement(Oe),this._activeElement=Oe,this._element.classList.contains("slide")){Oe.classList.add(j),F(Oe),ne.classList.add(T),Oe.classList.add(T);var se=S(ne);z.one(ne,"transitionend",function(){Oe.classList.remove(T,j),Oe.classList.add("active"),ne.classList.remove("active",j,T),D._isSliding=!1,setTimeout(function(){z.trigger(D._element,"slid.bs.carousel",{relatedTarget:Oe,direction:te,from:pe,to:tt})},0)}),v(ne,se)}else ne.classList.remove("active"),Oe.classList.add("active"),this._isSliding=!1,z.trigger(this._element,"slid.bs.carousel",{relatedTarget:Oe,direction:te,from:pe,to:tt});Nt&&this.cycle()}},O.carouselInterface=function(f,E){var D=L(f,"bs.carousel"),ne=o({},vn,je.getDataAttributes(f));typeof E=="object"&&(ne=o({},ne,E));var pe=typeof E=="string"?E:ne.slide;if(D||(D=new O(f,ne)),typeof E=="number")D.to(E);else if(typeof pe=="string"){if(D[pe]===void 0)throw new TypeError('No method named "'+pe+'"');D[pe]()}else ne.interval&&ne.ride&&(D.pause(),D.cycle())},O.jQueryInterface=function(f){return this.each(function(){O.carouselInterface(this,f)})},O.dataApiClickHandler=function(f){var E=y(this);if(E&&E.classList.contains("carousel")){var D=o({},je.getDataAttributes(E),je.getDataAttributes(this)),ne=this.getAttribute("data-bs-slide-to");ne&&(D.interval=!1),O.carouselInterface(E,D),ne&&L(E,"bs.carousel").to(ne),f.preventDefault()}},r(O,null,[{key:"Default",get:function(){return vn}},{key:"DATA_KEY",get:function(){return"bs.carousel"}}]),O}(Re);z.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",Tt.dataApiClickHandler),z.on(window,"load.bs.carousel.data-api",function(){for(var B=pt('[data-bs-ride="carousel"]'),O=0,N=B.length;O<N;O++)Tt.carouselInterface(B[O],L(B[O],"bs.carousel"))}),W("carousel",Tt);var st={toggle:!0,parent:""},kt={toggle:"boolean",parent:"(string|element)"},Ze=function(B){function O(f,E){var D;(D=B.call(this,f)||this)._isTransitioning=!1,D._config=D._getConfig(E),D._triggerArray=pt('[data-bs-toggle="collapse"][href="#'+f.id+'"],[data-bs-toggle="collapse"][data-bs-target="#'+f.id+'"]');for(var ne=pt('[data-bs-toggle="collapse"]'),pe=0,Oe=ne.length;pe<Oe;pe++){var tt=ne[pe],Nt=x(tt),T=pt(Nt).filter(function(j){return j===f});Nt!==null&&T.length&&(D._selector=Nt,D._triggerArray.push(tt))}return D._parent=D._config.parent?D._getParent():null,D._config.parent||D._addAriaAndCollapsedClass(D._element,D._triggerArray),D._config.toggle&&D.toggle(),D}a(O,B);var N=O.prototype;return N.toggle=function(){this._element.classList.contains("show")?this.hide():this.show()},N.show=function(){var f=this;if(!this._isTransitioning&&!this._element.classList.contains("show")){var E,D;this._parent&&(E=pt(".show, .collapsing",this._parent).filter(function(T){return typeof f._config.parent=="string"?T.getAttribute("data-bs-parent")===f._config.parent:T.classList.contains("collapse")})).length===0&&(E=null);var ne=at(this._selector);if(E){var pe=E.find(function(T){return ne!==T});if((D=pe?L(pe,"bs.collapse"):null)&&D._isTransitioning)return}if(!z.trigger(this._element,"show.bs.collapse").defaultPrevented){E&&E.forEach(function(T){ne!==T&&O.collapseInterface(T,"hide"),D||I(T,"bs.collapse",null)});var Oe=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[Oe]=0,this._triggerArray.length&&this._triggerArray.forEach(function(T){T.classList.remove("collapsed"),T.setAttribute("aria-expanded",!0)}),this.setTransitioning(!0);var tt="scroll"+(Oe[0].toUpperCase()+Oe.slice(1)),Nt=S(this._element);z.one(this._element,"transitionend",function(){f._element.classList.remove("collapsing"),f._element.classList.add("collapse","show"),f._element.style[Oe]="",f.setTransitioning(!1),z.trigger(f._element,"shown.bs.collapse")}),v(this._element,Nt),this._element.style[Oe]=this._element[tt]+"px"}}},N.hide=function(){var f=this;if(!this._isTransitioning&&this._element.classList.contains("show")&&!z.trigger(this._element,"hide.bs.collapse").defaultPrevented){var E=this._getDimension();this._element.style[E]=this._element.getBoundingClientRect()[E]+"px",F(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");var D=this._triggerArray.length;if(D>0)for(var ne=0;ne<D;ne++){var pe=this._triggerArray[ne],Oe=y(pe);Oe&&!Oe.classList.contains("show")&&(pe.classList.add("collapsed"),pe.setAttribute("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[E]="";var tt=S(this._element);z.one(this._element,"transitionend",function(){f.setTransitioning(!1),f._element.classList.remove("collapsing"),f._element.classList.add("collapse"),z.trigger(f._element,"hidden.bs.collapse")}),v(this._element,tt)}},N.setTransitioning=function(f){this._isTransitioning=f},N.dispose=function(){B.prototype.dispose.call(this),this._config=null,this._parent=null,this._triggerArray=null,this._isTransitioning=null},N._getConfig=function(f){return(f=o({},st,f)).toggle=!!f.toggle,_("collapse",f,kt),f},N._getDimension=function(){return this._element.classList.contains("width")?"width":"height"},N._getParent=function(){var f=this,E=this._config.parent;return P(E)?E.jquery===void 0&&E[0]===void 0||(E=E[0]):E=at(E),pt('[data-bs-toggle="collapse"][data-bs-parent="'+E+'"]',E).forEach(function(D){var ne=y(D);f._addAriaAndCollapsedClass(ne,[D])}),E},N._addAriaAndCollapsedClass=function(f,E){if(f&&E.length){var D=f.classList.contains("show");E.forEach(function(ne){D?ne.classList.remove("collapsed"):ne.classList.add("collapsed"),ne.setAttribute("aria-expanded",D)})}},O.collapseInterface=function(f,E){var D=L(f,"bs.collapse"),ne=o({},st,je.getDataAttributes(f),typeof E=="object"&&E?E:{});if(!D&&ne.toggle&&typeof E=="string"&&/show|hide/.test(E)&&(ne.toggle=!1),D||(D=new O(f,ne)),typeof E=="string"){if(D[E]===void 0)throw new TypeError('No method named "'+E+'"');D[E]()}},O.jQueryInterface=function(f){return this.each(function(){O.collapseInterface(this,f)})},r(O,null,[{key:"Default",get:function(){return st}},{key:"DATA_KEY",get:function(){return"bs.collapse"}}]),O}(Re);z.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',function(B){(B.target.tagName==="A"||B.delegateTarget&&B.delegateTarget.tagName==="A")&&B.preventDefault();var O=je.getDataAttributes(this),N=x(this);pt(N).forEach(function(f){var E,D=L(f,"bs.collapse");D?(D._parent===null&&typeof O.parent=="string"&&(D._config.parent=O.parent,D._parent=D._getParent()),E="toggle"):E=O,Ze.collapseInterface(f,E)})}),W("collapse",Ze);var U=new RegExp("ArrowUp|ArrowDown|Escape"),w=K?"top-end":"top-start",oe=K?"top-start":"top-end",xe=K?"bottom-end":"bottom-start",Te=K?"bottom-start":"bottom-end",ge=K?"left-start":"right-start",et=K?"right-start":"left-start",Ue={offset:[0,2],flip:!0,boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null},$e={offset:"(array|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)"},vt=function(B){function O(f,E){var D;return(D=B.call(this,f)||this)._popper=null,D._config=D._getConfig(E),D._menu=D._getMenuElement(),D._inNavbar=D._detectNavbar(),D._addEventListeners(),D}a(O,B);var N=O.prototype;return N.toggle=function(){if(!this._element.disabled&&!this._element.classList.contains("disabled")){var f=this._element.classList.contains("show");O.clearMenus(),f||this.show()}},N.show=function(){if(!(this._element.disabled||this._element.classList.contains("disabled")||this._menu.classList.contains("show"))){var f=O.getParentFromElement(this._element),E={relatedTarget:this._element};if(!z.trigger(this._element,"show.bs.dropdown",E).defaultPrevented){if(this._inNavbar)je.setDataAttribute(this._menu,"popper","none");else{if(t===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var D=this._element;this._config.reference==="parent"?D=f:P(this._config.reference)?(D=this._config.reference,this._config.reference.jquery!==void 0&&(D=this._config.reference[0])):typeof this._config.reference=="object"&&(D=this._config.reference);var ne=this._getPopperConfig(),pe=ne.modifiers.find(function(tt){return tt.name==="applyStyles"&&tt.enabled===!1});this._popper=i.createPopper(D,this._menu,ne),pe&&je.setDataAttribute(this._menu,"popper","static")}var Oe;"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav")&&(Oe=[]).concat.apply(Oe,document.body.children).forEach(function(tt){return z.on(tt,"mouseover",null,function(){})}),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),z.trigger(this._element,"shown.bs.dropdown",E)}}},N.hide=function(){if(!this._element.disabled&&!this._element.classList.contains("disabled")&&this._menu.classList.contains("show")){var f={relatedTarget:this._element};z.trigger(this._element,"hide.bs.dropdown",f).defaultPrevented||(this._popper&&this._popper.destroy(),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),je.removeDataAttribute(this._menu,"popper"),z.trigger(this._element,"hidden.bs.dropdown",f))}},N.dispose=function(){B.prototype.dispose.call(this),z.off(this._element,".bs.dropdown"),this._menu=null,this._popper&&(this._popper.destroy(),this._popper=null)},N.update=function(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()},N._addEventListeners=function(){var f=this;z.on(this._element,"click.bs.dropdown",function(E){E.preventDefault(),E.stopPropagation(),f.toggle()})},N._getConfig=function(f){if(f=o({},this.constructor.Default,je.getDataAttributes(this._element),f),_("dropdown",f,this.constructor.DefaultType),typeof f.reference=="object"&&!P(f.reference)&&typeof f.reference.getBoundingClientRect!="function")throw new TypeError("dropdown".toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return f},N._getMenuElement=function(){return function(f,E){for(var D=f.nextElementSibling;D;){if(D.matches(E))return[D];D=D.nextElementSibling}return[]}(this._element,".dropdown-menu")[0]},N._getPlacement=function(){var f=this._element.parentNode;if(f.classList.contains("dropend"))return ge;if(f.classList.contains("dropstart"))return et;var E=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return f.classList.contains("dropup")?E?oe:w:E?Te:xe},N._detectNavbar=function(){return this._element.closest(".navbar")!==null},N._getOffset=function(){var f=this,E=this._config.offset;return typeof E=="string"?E.split(",").map(function(D){return Number.parseInt(D,10)}):typeof E=="function"?function(D){return E(D,f._element)}:E},N._getPopperConfig=function(){var f={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{altBoundary:this._config.flip,boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return this._config.display==="static"&&(f.modifiers=[{name:"applyStyles",enabled:!1}]),o({},f,typeof this._config.popperConfig=="function"?this._config.popperConfig(f):this._config.popperConfig)},O.dropdownInterface=function(f,E){var D=L(f,"bs.dropdown");if(D||(D=new O(f,typeof E=="object"?E:null)),typeof E=="string"){if(D[E]===void 0)throw new TypeError('No method named "'+E+'"');D[E]()}},O.jQueryInterface=function(f){return this.each(function(){O.dropdownInterface(this,f)})},O.clearMenus=function(f){if(!f||f.button!==2&&(f.type!=="keyup"||f.key==="Tab"))for(var E=pt('[data-bs-toggle="dropdown"]'),D=0,ne=E.length;D<ne;D++){var pe=L(E[D],"bs.dropdown"),Oe={relatedTarget:E[D]};if(f&&f.type==="click"&&(Oe.clickEvent=f),pe){var tt,Nt=pe._menu;E[D].classList.contains("show")&&!(f&&(f.type==="click"&&/input|textarea/i.test(f.target.tagName)||f.type==="keyup"&&f.key==="Tab")&&Nt.contains(f.target)||z.trigger(E[D],"hide.bs.dropdown",Oe).defaultPrevented)&&("ontouchstart"in document.documentElement&&(tt=[]).concat.apply(tt,document.body.children).forEach(function(T){return z.off(T,"mouseover",null,function(){})}),E[D].setAttribute("aria-expanded","false"),pe._popper&&pe._popper.destroy(),Nt.classList.remove("show"),E[D].classList.remove("show"),je.removeDataAttribute(Nt,"popper"),z.trigger(E[D],"hidden.bs.dropdown",Oe))}}},O.getParentFromElement=function(f){return y(f)||f.parentNode},O.dataApiKeydownHandler=function(f){if(!(/input|textarea/i.test(f.target.tagName)?f.key==="Space"||f.key!=="Escape"&&(f.key!=="ArrowDown"&&f.key!=="ArrowUp"||f.target.closest(".dropdown-menu")):!U.test(f.key))&&(f.preventDefault(),f.stopPropagation(),!this.disabled&&!this.classList.contains("disabled"))){var E=O.getParentFromElement(this),D=this.classList.contains("show");if(f.key==="Escape")return(this.matches('[data-bs-toggle="dropdown"]')?this:G(this,'[data-bs-toggle="dropdown"]')[0]).focus(),void O.clearMenus();if(D||f.key!=="ArrowUp"&&f.key!=="ArrowDown")if(D&&f.key!=="Space"){var ne=pt(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",E).filter(q);if(ne.length){var pe=ne.indexOf(f.target);f.key==="ArrowUp"&&pe>0&&pe--,f.key==="ArrowDown"&&pe<ne.length-1&&pe++,ne[pe=pe===-1?0:pe].focus()}}else O.clearMenus();else(this.matches('[data-bs-toggle="dropdown"]')?this:G(this,'[data-bs-toggle="dropdown"]')[0]).click()}},r(O,null,[{key:"Default",get:function(){return Ue}},{key:"DefaultType",get:function(){return $e}},{key:"DATA_KEY",get:function(){return"bs.dropdown"}}]),O}(Re);z.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',vt.dataApiKeydownHandler),z.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",vt.dataApiKeydownHandler),z.on(document,"click.bs.dropdown.data-api",vt.clearMenus),z.on(document,"keyup.bs.dropdown.data-api",vt.clearMenus),z.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',function(B){B.preventDefault(),B.stopPropagation(),vt.dropdownInterface(this,"toggle")}),z.on(document,"click.bs.dropdown.data-api",".dropdown form",function(B){return B.stopPropagation()}),W("dropdown",vt);var Pe={backdrop:!0,keyboard:!0,focus:!0},Je={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},Qe=function(B){function O(f,E){var D;return(D=B.call(this,f)||this)._config=D._getConfig(E),D._dialog=at(".modal-dialog",f),D._backdrop=null,D._isShown=!1,D._isBodyOverflowing=!1,D._ignoreBackdropClick=!1,D._isTransitioning=!1,D._scrollbarWidth=0,D}a(O,B);var N=O.prototype;return N.toggle=function(f){return this._isShown?this.hide():this.show(f)},N.show=function(f){var E=this;if(!this._isShown&&!this._isTransitioning){this._element.classList.contains("fade")&&(this._isTransitioning=!0);var D=z.trigger(this._element,"show.bs.modal",{relatedTarget:f});this._isShown||D.defaultPrevented||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),z.on(this._element,"click.dismiss.bs.modal",'[data-bs-dismiss="modal"]',function(ne){return E.hide(ne)}),z.on(this._dialog,"mousedown.dismiss.bs.modal",function(){z.one(E._element,"mouseup.dismiss.bs.modal",function(ne){ne.target===E._element&&(E._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return E._showElement(f)}))}},N.hide=function(f){var E=this;if(f&&f.preventDefault(),this._isShown&&!this._isTransitioning&&!z.trigger(this._element,"hide.bs.modal").defaultPrevented){this._isShown=!1;var D=this._element.classList.contains("fade");if(D&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),z.off(document,"focusin.bs.modal"),this._element.classList.remove("show"),z.off(this._element,"click.dismiss.bs.modal"),z.off(this._dialog,"mousedown.dismiss.bs.modal"),D){var ne=S(this._element);z.one(this._element,"transitionend",function(pe){return E._hideModal(pe)}),v(this._element,ne)}else this._hideModal()}},N.dispose=function(){[window,this._element,this._dialog].forEach(function(f){return z.off(f,".bs.modal")}),B.prototype.dispose.call(this),z.off(document,"focusin.bs.modal"),this._config=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},N.handleUpdate=function(){this._adjustDialog()},N._getConfig=function(f){return f=o({},Pe,f),_("modal",f,Je),f},N._showElement=function(f){var E=this,D=this._element.classList.contains("fade"),ne=at(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,ne&&(ne.scrollTop=0),D&&F(this._element),this._element.classList.add("show"),this._config.focus&&this._enforceFocus();var pe=function(){E._config.focus&&E._element.focus(),E._isTransitioning=!1,z.trigger(E._element,"shown.bs.modal",{relatedTarget:f})};if(D){var Oe=S(this._dialog);z.one(this._dialog,"transitionend",pe),v(this._dialog,Oe)}else pe()},N._enforceFocus=function(){var f=this;z.off(document,"focusin.bs.modal"),z.on(document,"focusin.bs.modal",function(E){document===E.target||f._element===E.target||f._element.contains(E.target)||f._element.focus()})},N._setEscapeEvent=function(){var f=this;this._isShown?z.on(this._element,"keydown.dismiss.bs.modal",function(E){f._config.keyboard&&E.key==="Escape"?(E.preventDefault(),f.hide()):f._config.keyboard||E.key!=="Escape"||f._triggerBackdropTransition()}):z.off(this._element,"keydown.dismiss.bs.modal")},N._setResizeEvent=function(){var f=this;this._isShown?z.on(window,"resize.bs.modal",function(){return f._adjustDialog()}):z.off(window,"resize.bs.modal")},N._hideModal=function(){var f=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop(function(){document.body.classList.remove("modal-open"),f._resetAdjustments(),f._resetScrollbar(),z.trigger(f._element,"hidden.bs.modal")})},N._removeBackdrop=function(){this._backdrop.parentNode.removeChild(this._backdrop),this._backdrop=null},N._showBackdrop=function(f){var E=this,D=this._element.classList.contains("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",D&&this._backdrop.classList.add(D),document.body.appendChild(this._backdrop),z.on(this._element,"click.dismiss.bs.modal",function(tt){E._ignoreBackdropClick?E._ignoreBackdropClick=!1:tt.target===tt.currentTarget&&(E._config.backdrop==="static"?E._triggerBackdropTransition():E.hide())}),D&&F(this._backdrop),this._backdrop.classList.add("show"),!D)return void f();var ne=S(this._backdrop);z.one(this._backdrop,"transitionend",f),v(this._backdrop,ne)}else if(!this._isShown&&this._backdrop){this._backdrop.classList.remove("show");var pe=function(){E._removeBackdrop(),f()};if(this._element.classList.contains("fade")){var Oe=S(this._backdrop);z.one(this._backdrop,"transitionend",pe),v(this._backdrop,Oe)}else pe()}else f()},N._triggerBackdropTransition=function(){var f=this;if(!z.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented){var E=this._element.scrollHeight>document.documentElement.clientHeight;E||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static");var D=S(this._dialog);z.off(this._element,"transitionend"),z.one(this._element,"transitionend",function(){f._element.classList.remove("modal-static"),E||(z.one(f._element,"transitionend",function(){f._element.style.overflowY=""}),v(f._element,D))}),v(this._element,D),this._element.focus()}},N._adjustDialog=function(){var f=this._element.scrollHeight>document.documentElement.clientHeight;(!this._isBodyOverflowing&&f&&!K||this._isBodyOverflowing&&!f&&K)&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),(this._isBodyOverflowing&&!f&&!K||!this._isBodyOverflowing&&f&&K)&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},N._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},N._checkScrollbar=function(){var f=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(f.left+f.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},N._setScrollbar=function(){var f=this;this._isBodyOverflowing&&(this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight",function(E){return E+f._scrollbarWidth}),this._setElementAttributes(".sticky-top","marginRight",function(E){return E-f._scrollbarWidth}),this._setElementAttributes("body","paddingRight",function(E){return E+f._scrollbarWidth})),document.body.classList.add("modal-open")},N._setElementAttributes=function(f,E,D){pt(f).forEach(function(ne){var pe=ne.style[E],Oe=window.getComputedStyle(ne)[E];je.setDataAttribute(ne,E,pe),ne.style[E]=D(Number.parseFloat(Oe))+"px"})},N._resetScrollbar=function(){this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight"),this._resetElementAttributes(".sticky-top","marginRight"),this._resetElementAttributes("body","paddingRight")},N._resetElementAttributes=function(f,E){pt(f).forEach(function(D){var ne=je.getDataAttribute(D,E);ne===void 0&&D===document.body?D.style[E]="":(je.removeDataAttribute(D,E),D.style[E]=ne)})},N._getScrollbarWidth=function(){var f=document.createElement("div");f.className="modal-scrollbar-measure",document.body.appendChild(f);var E=f.getBoundingClientRect().width-f.clientWidth;return document.body.removeChild(f),E},O.jQueryInterface=function(f,E){return this.each(function(){var D=L(this,"bs.modal"),ne=o({},Pe,je.getDataAttributes(this),typeof f=="object"&&f?f:{});if(D||(D=new O(this,ne)),typeof f=="string"){if(D[f]===void 0)throw new TypeError('No method named "'+f+'"');D[f](E)}})},r(O,null,[{key:"Default",get:function(){return Pe}},{key:"DATA_KEY",get:function(){return"bs.modal"}}]),O}(Re);z.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',function(B){var O=this,N=y(this);this.tagName!=="A"&&this.tagName!=="AREA"||B.preventDefault(),z.one(N,"show.bs.modal",function(D){D.defaultPrevented||z.one(N,"hidden.bs.modal",function(){q(O)&&O.focus()})});var f=L(N,"bs.modal");if(!f){var E=o({},je.getDataAttributes(N),je.getDataAttributes(this));f=new Qe(N,E)}f.toggle(this)}),W("modal",Qe);var it=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ye=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,Rt=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function xt(B,O,N){var f;if(!B.length)return B;if(N&&typeof N=="function")return N(B);for(var E=new window.DOMParser().parseFromString(B,"text/html"),D=Object.keys(O),ne=(f=[]).concat.apply(f,E.body.querySelectorAll("*")),pe=function(Nt,T){var j,te=ne[Nt],se=te.nodeName.toLowerCase();if(!D.includes(se))return te.parentNode.removeChild(te),"continue";var Z=(j=[]).concat.apply(j,te.attributes),be=[].concat(O["*"]||[],O[se]||[]);Z.forEach(function(Le){(function(De,ke){var lt=De.nodeName.toLowerCase();if(ke.includes(lt))return!it.has(lt)||!!(Ye.test(De.nodeValue)||Rt.test(De.nodeValue));for(var ft=ke.filter(function(Pt){return Pt instanceof RegExp}),ot=0,Lt=ft.length;ot<Lt;ot++)if(ft[ot].test(lt))return!0;return!1})(Le,be)||te.removeAttribute(Le.nodeName)})},Oe=0,tt=ne.length;Oe<tt;Oe++)pe(Oe);return E.body.innerHTML}var Wt=new RegExp("(^|\\s)bs-tooltip\\S+","g"),J=new Set(["sanitize","allowList","sanitizeFn"]),ze={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},fe={AUTO:"auto",TOP:"top",RIGHT:K?"left":"right",BOTTOM:"bottom",LEFT:K?"right":"left"},ve={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Xe={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},Fe=function(B){function O(f,E){var D;if(t===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");return(D=B.call(this,f)||this)._isEnabled=!0,D._timeout=0,D._hoverState="",D._activeTrigger={},D._popper=null,D.config=D._getConfig(E),D.tip=null,D._setListeners(),D}a(O,B);var N=O.prototype;return N.enable=function(){this._isEnabled=!0},N.disable=function(){this._isEnabled=!1},N.toggleEnabled=function(){this._isEnabled=!this._isEnabled},N.toggle=function(f){if(this._isEnabled)if(f){var E=this._initializeOnDelegatedTarget(f);E._activeTrigger.click=!E._activeTrigger.click,E._isWithActiveTrigger()?E._enter(null,E):E._leave(null,E)}else{if(this.getTipElement().classList.contains("show"))return void this._leave(null,this);this._enter(null,this)}},N.dispose=function(){clearTimeout(this._timeout),z.off(this._element,this.constructor.EVENT_KEY),z.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.parentNode&&this.tip.parentNode.removeChild(this.tip),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.config=null,this.tip=null,B.prototype.dispose.call(this)},N.show=function(){var f=this;if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(this.isWithContent()&&this._isEnabled){var E=z.trigger(this._element,this.constructor.Event.SHOW),D=function Le(De){if(!document.documentElement.attachShadow)return null;if(typeof De.getRootNode=="function"){var ke=De.getRootNode();return ke instanceof ShadowRoot?ke:null}return De instanceof ShadowRoot?De:De.parentNode?Le(De.parentNode):null}(this._element),ne=D===null?this._element.ownerDocument.documentElement.contains(this._element):D.contains(this._element);if(!E.defaultPrevented&&ne){var pe=this.getTipElement(),Oe=g(this.constructor.NAME);pe.setAttribute("id",Oe),this._element.setAttribute("aria-describedby",Oe),this.setContent(),this.config.animation&&pe.classList.add("fade");var tt=typeof this.config.placement=="function"?this.config.placement.call(this,pe,this._element):this.config.placement,Nt=this._getAttachment(tt);this._addAttachmentClass(Nt);var T=this._getContainer();I(pe,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||T.appendChild(pe),z.trigger(this._element,this.constructor.Event.INSERTED),this._popper=i.createPopper(this._element,pe,this._getPopperConfig(Nt)),pe.classList.add("show");var j,te,se=typeof this.config.customClass=="function"?this.config.customClass():this.config.customClass;se&&(j=pe.classList).add.apply(j,se.split(" ")),"ontouchstart"in document.documentElement&&(te=[]).concat.apply(te,document.body.children).forEach(function(Le){z.on(Le,"mouseover",function(){})});var Z=function(){var Le=f._hoverState;f._hoverState=null,z.trigger(f._element,f.constructor.Event.SHOWN),Le==="out"&&f._leave(null,f)};if(this.tip.classList.contains("fade")){var be=S(this.tip);z.one(this.tip,"transitionend",Z),v(this.tip,be)}else Z()}}},N.hide=function(){var f=this;if(this._popper){var E=this.getTipElement(),D=function(){f._hoverState!=="show"&&E.parentNode&&E.parentNode.removeChild(E),f._cleanTipClass(),f._element.removeAttribute("aria-describedby"),z.trigger(f._element,f.constructor.Event.HIDDEN),f._popper&&(f._popper.destroy(),f._popper=null)};if(!z.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented){var ne;if(E.classList.remove("show"),"ontouchstart"in document.documentElement&&(ne=[]).concat.apply(ne,document.body.children).forEach(function(Oe){return z.off(Oe,"mouseover",k)}),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this.tip.classList.contains("fade")){var pe=S(E);z.one(E,"transitionend",D),v(E,pe)}else D();this._hoverState=""}}},N.update=function(){this._popper!==null&&this._popper.update()},N.isWithContent=function(){return!!this.getTitle()},N.getTipElement=function(){if(this.tip)return this.tip;var f=document.createElement("div");return f.innerHTML=this.config.template,this.tip=f.children[0],this.tip},N.setContent=function(){var f=this.getTipElement();this.setElementContent(at(".tooltip-inner",f),this.getTitle()),f.classList.remove("fade","show")},N.setElementContent=function(f,E){if(f!==null)return typeof E=="object"&&P(E)?(E.jquery&&(E=E[0]),void(this.config.html?E.parentNode!==f&&(f.innerHTML="",f.appendChild(E)):f.textContent=E.textContent)):void(this.config.html?(this.config.sanitize&&(E=xt(E,this.config.allowList,this.config.sanitizeFn)),f.innerHTML=E):f.textContent=E)},N.getTitle=function(){var f=this._element.getAttribute("data-bs-original-title");return f||(f=typeof this.config.title=="function"?this.config.title.call(this._element):this.config.title),f},N.updateAttachment=function(f){return f==="right"?"end":f==="left"?"start":f},N._initializeOnDelegatedTarget=function(f,E){var D=this.constructor.DATA_KEY;return(E=E||L(f.delegateTarget,D))||(E=new this.constructor(f.delegateTarget,this._getDelegateConfig()),I(f.delegateTarget,D,E)),E},N._getOffset=function(){var f=this,E=this.config.offset;return typeof E=="string"?E.split(",").map(function(D){return Number.parseInt(D,10)}):typeof E=="function"?function(D){return E(D,f._element)}:E},N._getPopperConfig=function(f){var E=this,D={placement:f,modifiers:[{name:"flip",options:{altBoundary:!0,fallbackPlacements:this.config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this.config.boundary}},{name:"arrow",options:{element:"."+this.constructor.NAME+"-arrow"}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:function(ne){return E._handlePopperPlacementChange(ne)}}],onFirstUpdate:function(ne){ne.options.placement!==ne.placement&&E._handlePopperPlacementChange(ne)}};return o({},D,typeof this.config.popperConfig=="function"?this.config.popperConfig(D):this.config.popperConfig)},N._addAttachmentClass=function(f){this.getTipElement().classList.add("bs-tooltip-"+this.updateAttachment(f))},N._getContainer=function(){return this.config.container===!1?document.body:P(this.config.container)?this.config.container:at(this.config.container)},N._getAttachment=function(f){return fe[f.toUpperCase()]},N._setListeners=function(){var f=this;this.config.trigger.split(" ").forEach(function(E){if(E==="click")z.on(f._element,f.constructor.Event.CLICK,f.config.selector,function(pe){return f.toggle(pe)});else if(E!=="manual"){var D=E==="hover"?f.constructor.Event.MOUSEENTER:f.constructor.Event.FOCUSIN,ne=E==="hover"?f.constructor.Event.MOUSELEAVE:f.constructor.Event.FOCUSOUT;z.on(f._element,D,f.config.selector,function(pe){return f._enter(pe)}),z.on(f._element,ne,f.config.selector,function(pe){return f._leave(pe)})}}),this._hideModalHandler=function(){f._element&&f.hide()},z.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=o({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},N._fixTitle=function(){var f=this._element.getAttribute("title"),E=typeof this._element.getAttribute("data-bs-original-title");(f||E!=="string")&&(this._element.setAttribute("data-bs-original-title",f||""),!f||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",f),this._element.setAttribute("title",""))},N._enter=function(f,E){E=this._initializeOnDelegatedTarget(f,E),f&&(E._activeTrigger[f.type==="focusin"?"focus":"hover"]=!0),E.getTipElement().classList.contains("show")||E._hoverState==="show"?E._hoverState="show":(clearTimeout(E._timeout),E._hoverState="show",E.config.delay&&E.config.delay.show?E._timeout=setTimeout(function(){E._hoverState==="show"&&E.show()},E.config.delay.show):E.show())},N._leave=function(f,E){E=this._initializeOnDelegatedTarget(f,E),f&&(E._activeTrigger[f.type==="focusout"?"focus":"hover"]=!1),E._isWithActiveTrigger()||(clearTimeout(E._timeout),E._hoverState="out",E.config.delay&&E.config.delay.hide?E._timeout=setTimeout(function(){E._hoverState==="out"&&E.hide()},E.config.delay.hide):E.hide())},N._isWithActiveTrigger=function(){for(var f in this._activeTrigger)if(this._activeTrigger[f])return!0;return!1},N._getConfig=function(f){var E=je.getDataAttributes(this._element);return Object.keys(E).forEach(function(D){J.has(D)&&delete E[D]}),f&&typeof f.container=="object"&&f.container.jquery&&(f.container=f.container[0]),typeof(f=o({},this.constructor.Default,E,typeof f=="object"&&f?f:{})).delay=="number"&&(f.delay={show:f.delay,hide:f.delay}),typeof f.title=="number"&&(f.title=f.title.toString()),typeof f.content=="number"&&(f.content=f.content.toString()),_("tooltip",f,this.constructor.DefaultType),f.sanitize&&(f.template=xt(f.template,f.allowList,f.sanitizeFn)),f},N._getDelegateConfig=function(){var f={};if(this.config)for(var E in this.config)this.constructor.Default[E]!==this.config[E]&&(f[E]=this.config[E]);return f},N._cleanTipClass=function(){var f=this.getTipElement(),E=f.getAttribute("class").match(Wt);E!==null&&E.length>0&&E.map(function(D){return D.trim()}).forEach(function(D){return f.classList.remove(D)})},N._handlePopperPlacementChange=function(f){var E=f.state;E&&(this.tip=E.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(E.placement)))},O.jQueryInterface=function(f){return this.each(function(){var E=L(this,"bs.tooltip"),D=typeof f=="object"&&f;if((E||!/dispose|hide/.test(f))&&(E||(E=new O(this,D)),typeof f=="string")){if(E[f]===void 0)throw new TypeError('No method named "'+f+'"');E[f]()}})},r(O,null,[{key:"Default",get:function(){return ve}},{key:"NAME",get:function(){return"tooltip"}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return Xe}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return ze}}]),O}(Re);W("tooltip",Fe);var gt=new RegExp("(^|\\s)bs-popover\\S+","g"),Jt=o({},Fe.Default,{placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),an=o({},Fe.DefaultType,{content:"(string|element|function)"}),Bt={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},Tn=function(B){function O(){return B.apply(this,arguments)||this}a(O,B);var N=O.prototype;return N.isWithContent=function(){return this.getTitle()||this._getContent()},N.setContent=function(){var f=this.getTipElement();this.setElementContent(at(".popover-header",f),this.getTitle());var E=this._getContent();typeof E=="function"&&(E=E.call(this._element)),this.setElementContent(at(".popover-body",f),E),f.classList.remove("fade","show")},N._addAttachmentClass=function(f){this.getTipElement().classList.add("bs-popover-"+this.updateAttachment(f))},N._getContent=function(){return this._element.getAttribute("data-bs-content")||this.config.content},N._cleanTipClass=function(){var f=this.getTipElement(),E=f.getAttribute("class").match(gt);E!==null&&E.length>0&&E.map(function(D){return D.trim()}).forEach(function(D){return f.classList.remove(D)})},O.jQueryInterface=function(f){return this.each(function(){var E=L(this,"bs.popover"),D=typeof f=="object"?f:null;if((E||!/dispose|hide/.test(f))&&(E||(E=new O(this,D),I(this,"bs.popover",E)),typeof f=="string")){if(E[f]===void 0)throw new TypeError('No method named "'+f+'"');E[f]()}})},r(O,null,[{key:"Default",get:function(){return Jt}},{key:"NAME",get:function(){return"popover"}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return Bt}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return an}}]),O}(Fe);W("popover",Tn);var Un={offset:10,method:"auto",target:""},hr={offset:"number",method:"string",target:"(string|element)"},_i=function(B){function O(f,E){var D;return(D=B.call(this,f)||this)._scrollElement=f.tagName==="BODY"?window:f,D._config=D._getConfig(E),D._selector=D._config.target+" .nav-link, "+D._config.target+" .list-group-item, "+D._config.target+" .dropdown-item",D._offsets=[],D._targets=[],D._activeTarget=null,D._scrollHeight=0,z.on(D._scrollElement,"scroll.bs.scrollspy",function(){return D._process()}),D.refresh(),D._process(),D}a(O,B);var N=O.prototype;return N.refresh=function(){var f=this,E=this._scrollElement===this._scrollElement.window?"offset":"position",D=this._config.method==="auto"?E:this._config.method,ne=D==="position"?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),pt(this._selector).map(function(pe){var Oe=x(pe),tt=Oe?at(Oe):null;if(tt){var Nt=tt.getBoundingClientRect();if(Nt.width||Nt.height)return[je[D](tt).top+ne,Oe]}return null}).filter(function(pe){return pe}).sort(function(pe,Oe){return pe[0]-Oe[0]}).forEach(function(pe){f._offsets.push(pe[0]),f._targets.push(pe[1])})},N.dispose=function(){B.prototype.dispose.call(this),z.off(this._scrollElement,".bs.scrollspy"),this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},N._getConfig=function(f){if(typeof(f=o({},Un,typeof f=="object"&&f?f:{})).target!="string"&&P(f.target)){var E=f.target.id;E||(E=g("scrollspy"),f.target.id=E),f.target="#"+E}return _("scrollspy",f,hr),f},N._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},N._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},N._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},N._process=function(){var f=this._getScrollTop()+this._config.offset,E=this._getScrollHeight(),D=this._config.offset+E-this._getOffsetHeight();if(this._scrollHeight!==E&&this.refresh(),f>=D){var ne=this._targets[this._targets.length-1];this._activeTarget!==ne&&this._activate(ne)}else{if(this._activeTarget&&f<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var pe=this._offsets.length;pe--;)this._activeTarget!==this._targets[pe]&&f>=this._offsets[pe]&&(this._offsets[pe+1]===void 0||f<this._offsets[pe+1])&&this._activate(this._targets[pe])}},N._activate=function(f){this._activeTarget=f,this._clear();var E=this._selector.split(",").map(function(ne){return ne+'[data-bs-target="'+f+'"],'+ne+'[href="'+f+'"]'}),D=at(E.join(","));D.classList.contains("dropdown-item")?(at(".dropdown-toggle",D.closest(".dropdown")).classList.add("active"),D.classList.add("active")):(D.classList.add("active"),function(ne,pe){for(var Oe=[],tt=ne.parentNode;tt&&tt.nodeType===Node.ELEMENT_NODE&&tt.nodeType!==3;)tt.matches(pe)&&Oe.push(tt),tt=tt.parentNode;return Oe}(D,".nav, .list-group").forEach(function(ne){G(ne,".nav-link, .list-group-item").forEach(function(pe){return pe.classList.add("active")}),G(ne,".nav-item").forEach(function(pe){He(pe,".nav-link").forEach(function(Oe){return Oe.classList.add("active")})})})),z.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:f})},N._clear=function(){pt(this._selector).filter(function(f){return f.classList.contains("active")}).forEach(function(f){return f.classList.remove("active")})},O.jQueryInterface=function(f){return this.each(function(){var E=L(this,"bs.scrollspy");if(E||(E=new O(this,typeof f=="object"&&f)),typeof f=="string"){if(E[f]===void 0)throw new TypeError('No method named "'+f+'"');E[f]()}})},r(O,null,[{key:"Default",get:function(){return Un}},{key:"DATA_KEY",get:function(){return"bs.scrollspy"}}]),O}(Re);z.on(window,"load.bs.scrollspy.data-api",function(){pt('[data-bs-spy="scroll"]').forEach(function(B){return new _i(B,je.getDataAttributes(B))})}),W("scrollspy",_i);var xn=function(B){function O(){return B.apply(this,arguments)||this}a(O,B);var N=O.prototype;return N.show=function(){var f=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active")||this._element.classList.contains("disabled"))){var E,D=y(this._element),ne=this._element.closest(".nav, .list-group");if(ne){var pe=ne.nodeName==="UL"||ne.nodeName==="OL"?":scope > li > .active":".active";E=(E=pt(pe,ne))[E.length-1]}var Oe=E?z.trigger(E,"hide.bs.tab",{relatedTarget:this._element}):null;if(!(z.trigger(this._element,"show.bs.tab",{relatedTarget:E}).defaultPrevented||Oe!==null&&Oe.defaultPrevented)){this._activate(this._element,ne);var tt=function(){z.trigger(E,"hidden.bs.tab",{relatedTarget:f._element}),z.trigger(f._element,"shown.bs.tab",{relatedTarget:E})};D?this._activate(D,D.parentNode,tt):tt()}}},N._activate=function(f,E,D){var ne=this,pe=(!E||E.nodeName!=="UL"&&E.nodeName!=="OL"?He(E,".active"):pt(":scope > li > .active",E))[0],Oe=D&&pe&&pe.classList.contains("fade"),tt=function(){return ne._transitionComplete(f,pe,D)};if(pe&&Oe){var Nt=S(pe);pe.classList.remove("show"),z.one(pe,"transitionend",tt),v(pe,Nt)}else tt()},N._transitionComplete=function(f,E,D){if(E){E.classList.remove("active");var ne=at(":scope > .dropdown-menu .active",E.parentNode);ne&&ne.classList.remove("active"),E.getAttribute("role")==="tab"&&E.setAttribute("aria-selected",!1)}f.classList.add("active"),f.getAttribute("role")==="tab"&&f.setAttribute("aria-selected",!0),F(f),f.classList.contains("fade")&&f.classList.add("show"),f.parentNode&&f.parentNode.classList.contains("dropdown-menu")&&(f.closest(".dropdown")&&pt(".dropdown-toggle").forEach(function(pe){return pe.classList.add("active")}),f.setAttribute("aria-expanded",!0)),D&&D()},O.jQueryInterface=function(f){return this.each(function(){var E=L(this,"bs.tab")||new O(this);if(typeof f=="string"){if(E[f]===void 0)throw new TypeError('No method named "'+f+'"');E[f]()}})},r(O,null,[{key:"DATA_KEY",get:function(){return"bs.tab"}}]),O}(Re);z.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',function(B){B.preventDefault(),(L(this,"bs.tab")||new xn(this)).show()}),W("tab",xn);var Ui={animation:"boolean",autohide:"boolean",delay:"number"},vi={animation:!0,autohide:!0,delay:5e3},li=function(B){function O(f,E){var D;return(D=B.call(this,f)||this)._config=D._getConfig(E),D._timeout=null,D._setListeners(),D}a(O,B);var N=O.prototype;return N.show=function(){var f=this;if(!z.trigger(this._element,"show.bs.toast").defaultPrevented){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");var E=function(){f._element.classList.remove("showing"),f._element.classList.add("show"),z.trigger(f._element,"shown.bs.toast"),f._config.autohide&&(f._timeout=setTimeout(function(){f.hide()},f._config.delay))};if(this._element.classList.remove("hide"),F(this._element),this._element.classList.add("showing"),this._config.animation){var D=S(this._element);z.one(this._element,"transitionend",E),v(this._element,D)}else E()}},N.hide=function(){var f=this;if(this._element.classList.contains("show")&&!z.trigger(this._element,"hide.bs.toast").defaultPrevented){var E=function(){f._element.classList.add("hide"),z.trigger(f._element,"hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var D=S(this._element);z.one(this._element,"transitionend",E),v(this._element,D)}else E()}},N.dispose=function(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),z.off(this._element,"click.dismiss.bs.toast"),B.prototype.dispose.call(this),this._config=null},N._getConfig=function(f){return f=o({},vi,je.getDataAttributes(this._element),typeof f=="object"&&f?f:{}),_("toast",f,this.constructor.DefaultType),f},N._setListeners=function(){var f=this;z.on(this._element,"click.dismiss.bs.toast",'[data-bs-dismiss="toast"]',function(){return f.hide()})},N._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},O.jQueryInterface=function(f){return this.each(function(){var E=L(this,"bs.toast");if(E||(E=new O(this,typeof f=="object"&&f)),typeof f=="string"){if(E[f]===void 0)throw new TypeError('No method named "'+f+'"');E[f](this)}})},r(O,null,[{key:"DefaultType",get:function(){return Ui}},{key:"Default",get:function(){return vi}},{key:"DATA_KEY",get:function(){return"bs.toast"}}]),O}(Re);return W("toast",li),{Alert:We,Button:Be,Carousel:Tt,Collapse:Ze,Dropdown:vt,Modal:Qe,Popover:Tn,ScrollSpy:_i,Tab:xn,Toast:li,Tooltip:Fe}});(function(i){typeof define=="function"&&define.amd?define(["jquery"],i):typeof Ja<"u"?cr.exports=i(require("jquery")):i(jQuery)})(function(i){var e=window.Slick||{};e=function(){var t=0;function n(r,o){var a=this,c;a.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(r),appendDots:i(r),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(h,g){return i('<button type="button" />').text(g+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},a.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(a,a.initials),a.activeBreakpoint=null,a.animType=null,a.animProp=null,a.breakpoints=[],a.breakpointSettings=[],a.cssTransitions=!1,a.focussed=!1,a.interrupted=!1,a.hidden="hidden",a.paused=!0,a.positionProp=null,a.respondTo=null,a.rowCount=1,a.shouldClick=!0,a.$slider=i(r),a.$slidesCache=null,a.transformType=null,a.transitionType=null,a.visibilityChange="visibilitychange",a.windowWidth=0,a.windowTimer=null,c=i(r).data("slick")||{},a.options=i.extend({},a.defaults,o,c),a.currentSlide=a.options.initialSlide,a.originalSettings=a.options,typeof document.mozHidden<"u"?(a.hidden="mozHidden",a.visibilityChange="mozvisibilitychange"):typeof document.webkitHidden<"u"&&(a.hidden="webkitHidden",a.visibilityChange="webkitvisibilitychange"),a.autoPlay=i.proxy(a.autoPlay,a),a.autoPlayClear=i.proxy(a.autoPlayClear,a),a.autoPlayIterator=i.proxy(a.autoPlayIterator,a),a.changeSlide=i.proxy(a.changeSlide,a),a.clickHandler=i.proxy(a.clickHandler,a),a.selectHandler=i.proxy(a.selectHandler,a),a.setPosition=i.proxy(a.setPosition,a),a.swipeHandler=i.proxy(a.swipeHandler,a),a.dragHandler=i.proxy(a.dragHandler,a),a.keyHandler=i.proxy(a.keyHandler,a),a.instanceUid=t++,a.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,a.registerBreakpoints(),a.init(!0)}return n}(),e.prototype.activateADA=function(){var t=this;t.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(t,n,r){var o=this;if(typeof n=="boolean")r=n,n=null;else if(n<0||n>=o.slideCount)return!1;o.unload(),typeof n=="number"?n===0&&o.$slides.length===0?i(t).appendTo(o.$slideTrack):r?i(t).insertBefore(o.$slides.eq(n)):i(t).insertAfter(o.$slides.eq(n)):r===!0?i(t).prependTo(o.$slideTrack):i(t).appendTo(o.$slideTrack),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slides.each(function(a,c){i(c).attr("data-slick-index",a)}),o.$slidesCache=o.$slides,o.reinit()},e.prototype.animateHeight=function(){var t=this;if(t.options.slidesToShow===1&&t.options.adaptiveHeight===!0&&t.options.vertical===!1){var n=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.animate({height:n},t.options.speed)}},e.prototype.animateSlide=function(t,n){var r={},o=this;o.animateHeight(),o.options.rtl===!0&&o.options.vertical===!1&&(t=-t),o.transformsEnabled===!1?o.options.vertical===!1?o.$slideTrack.animate({left:t},o.options.speed,o.options.easing,n):o.$slideTrack.animate({top:t},o.options.speed,o.options.easing,n):o.cssTransitions===!1?(o.options.rtl===!0&&(o.currentLeft=-o.currentLeft),i({animStart:o.currentLeft}).animate({animStart:t},{duration:o.options.speed,easing:o.options.easing,step:function(a){a=Math.ceil(a),o.options.vertical===!1?(r[o.animType]="translate("+a+"px, 0px)",o.$slideTrack.css(r)):(r[o.animType]="translate(0px,"+a+"px)",o.$slideTrack.css(r))},complete:function(){n&&n.call()}})):(o.applyTransition(),t=Math.ceil(t),o.options.vertical===!1?r[o.animType]="translate3d("+t+"px, 0px, 0px)":r[o.animType]="translate3d(0px,"+t+"px, 0px)",o.$slideTrack.css(r),n&&setTimeout(function(){o.disableTransition(),n.call()},o.options.speed))},e.prototype.getNavTarget=function(){var t=this,n=t.options.asNavFor;return n&&n!==null&&(n=i(n).not(t.$slider)),n},e.prototype.asNavFor=function(t){var n=this,r=n.getNavTarget();r!==null&&typeof r=="object"&&r.each(function(){var o=i(this).slick("getSlick");o.unslicked||o.slideHandler(t,!0)})},e.prototype.applyTransition=function(t){var n=this,r={};n.options.fade===!1?r[n.transitionType]=n.transformType+" "+n.options.speed+"ms "+n.options.cssEase:r[n.transitionType]="opacity "+n.options.speed+"ms "+n.options.cssEase,n.options.fade===!1?n.$slideTrack.css(r):n.$slides.eq(t).css(r)},e.prototype.autoPlay=function(){var t=this;t.autoPlayClear(),t.slideCount>t.options.slidesToShow&&(t.autoPlayTimer=setInterval(t.autoPlayIterator,t.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var t=this;t.autoPlayTimer&&clearInterval(t.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var t=this,n=t.currentSlide+t.options.slidesToScroll;!t.paused&&!t.interrupted&&!t.focussed&&(t.options.infinite===!1&&(t.direction===1&&t.currentSlide+1===t.slideCount-1?t.direction=0:t.direction===0&&(n=t.currentSlide-t.options.slidesToScroll,t.currentSlide-1===0&&(t.direction=1))),t.slideHandler(n))},e.prototype.buildArrows=function(){var t=this;t.options.arrows===!0&&(t.$prevArrow=i(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=i(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),t.options.infinite!==!0&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var t=this,n,r;if(t.options.dots===!0){for(t.$slider.addClass("slick-dotted"),r=i("<ul />").addClass(t.options.dotsClass),n=0;n<=t.getDotCount();n+=1)r.append(i("<li />").append(t.options.customPaging.call(this,t,n)));t.$dots=r.appendTo(t.options.appendDots),t.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(n,r){i(r).attr("data-slick-index",n).data("originalStyling",i(r).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=t.slideCount===0?i('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),(t.options.centerMode===!0||t.options.swipeToSlide===!0)&&(t.options.slidesToScroll=1),i("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses(typeof t.currentSlide=="number"?t.currentSlide:0),t.options.draggable===!0&&t.$list.addClass("draggable")},e.prototype.buildRows=function(){var t=this,n,r,o,a,c,h,g;if(a=document.createDocumentFragment(),h=t.$slider.children(),t.options.rows>1){for(g=t.options.slidesPerRow*t.options.rows,c=Math.ceil(h.length/g),n=0;n<c;n++){var m=document.createElement("div");for(r=0;r<t.options.rows;r++){var x=document.createElement("div");for(o=0;o<t.options.slidesPerRow;o++){var y=n*g+(r*t.options.slidesPerRow+o);h.get(y)&&x.appendChild(h.get(y))}m.appendChild(x)}a.appendChild(m)}t.$slider.empty().append(a),t.$slider.children().children().children().css({width:100/t.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(t,n){var r=this,o,a,c,h=!1,g=r.$slider.width(),m=window.innerWidth||i(window).width();if(r.respondTo==="window"?c=m:r.respondTo==="slider"?c=g:r.respondTo==="min"&&(c=Math.min(m,g)),r.options.responsive&&r.options.responsive.length&&r.options.responsive!==null){a=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(r.originalSettings.mobileFirst===!1?c<r.breakpoints[o]&&(a=r.breakpoints[o]):c>r.breakpoints[o]&&(a=r.breakpoints[o]));a!==null?r.activeBreakpoint!==null?(a!==r.activeBreakpoint||n)&&(r.activeBreakpoint=a,r.breakpointSettings[a]==="unslick"?r.unslick(a):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[a]),t===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),h=a):(r.activeBreakpoint=a,r.breakpointSettings[a]==="unslick"?r.unslick(a):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[a]),t===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),h=a):r.activeBreakpoint!==null&&(r.activeBreakpoint=null,r.options=r.originalSettings,t===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(t),h=a),!t&&h!==!1&&r.$slider.trigger("breakpoint",[r,h])}},e.prototype.changeSlide=function(t,n){var r=this,o=i(t.currentTarget),a,c,h;switch(o.is("a")&&t.preventDefault(),o.is("li")||(o=o.closest("li")),h=r.slideCount%r.options.slidesToScroll!==0,a=h?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,t.data.message){case"previous":c=a===0?r.options.slidesToScroll:r.options.slidesToShow-a,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-c,!1,n);break;case"next":c=a===0?r.options.slidesToScroll:a,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+c,!1,n);break;case"index":var g=t.data.index===0?0:t.data.index||o.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(g),!1,n),o.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(t){var n=this,r,o;if(r=n.getNavigableIndexes(),o=0,t>r[r.length-1])t=r[r.length-1];else for(var a in r){if(t<r[a]){t=o;break}o=r[a]}return t},e.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&t.$dots!==null&&(i("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",i.proxy(t.interrupt,t,!0)).off("mouseleave.slick",i.proxy(t.interrupt,t,!1)),t.options.accessibility===!0&&t.$dots.off("keydown.slick",t.keyHandler)),t.$slider.off("focus.slick blur.slick"),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide),t.options.accessibility===!0&&(t.$prevArrow&&t.$prevArrow.off("keydown.slick",t.keyHandler),t.$nextArrow&&t.$nextArrow.off("keydown.slick",t.keyHandler))),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),i(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),t.options.accessibility===!0&&t.$list.off("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&i(t.$slideTrack).children().off("click.slick",t.selectHandler),i(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),i(window).off("resize.slick.slick-"+t.instanceUid,t.resize),i("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),i(window).off("load.slick.slick-"+t.instanceUid,t.setPosition)},e.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",i.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",i.proxy(t.interrupt,t,!1))},e.prototype.cleanUpRows=function(){var t=this,n;t.options.rows>1&&(n=t.$slides.children().children(),n.removeAttr("style"),t.$slider.empty().append(n))},e.prototype.clickHandler=function(t){var n=this;n.shouldClick===!1&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())},e.prototype.destroy=function(t){var n=this;n.autoPlayClear(),n.touchObject={},n.cleanUpEvents(),i(".slick-cloned",n.$slider).detach(),n.$dots&&n.$dots.remove(),n.$prevArrow&&n.$prevArrow.length&&(n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.prevArrow)&&n.$prevArrow.remove()),n.$nextArrow&&n.$nextArrow.length&&(n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.nextArrow)&&n.$nextArrow.remove()),n.$slides&&(n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.detach(),n.$list.detach(),n.$slider.append(n.$slides)),n.cleanUpRows(),n.$slider.removeClass("slick-slider"),n.$slider.removeClass("slick-initialized"),n.$slider.removeClass("slick-dotted"),n.unslicked=!0,t||n.$slider.trigger("destroy",[n])},e.prototype.disableTransition=function(t){var n=this,r={};r[n.transitionType]="",n.options.fade===!1?n.$slideTrack.css(r):n.$slides.eq(t).css(r)},e.prototype.fadeSlide=function(t,n){var r=this;r.cssTransitions===!1?(r.$slides.eq(t).css({zIndex:r.options.zIndex}),r.$slides.eq(t).animate({opacity:1},r.options.speed,r.options.easing,n)):(r.applyTransition(t),r.$slides.eq(t).css({opacity:1,zIndex:r.options.zIndex}),n&&setTimeout(function(){r.disableTransition(t),n.call()},r.options.speed))},e.prototype.fadeSlideOut=function(t){var n=this;n.cssTransitions===!1?n.$slides.eq(t).animate({opacity:0,zIndex:n.options.zIndex-2},n.options.speed,n.options.easing):(n.applyTransition(t),n.$slides.eq(t).css({opacity:0,zIndex:n.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(t){var n=this;t!==null&&(n.$slidesCache=n.$slides,n.unload(),n.$slideTrack.children(this.options.slide).detach(),n.$slidesCache.filter(t).appendTo(n.$slideTrack),n.reinit())},e.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(n){n.stopImmediatePropagation();var r=i(this);setTimeout(function(){t.options.pauseOnFocus&&(t.focussed=r.is(":focus"),t.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var t=this;return t.currentSlide},e.prototype.getDotCount=function(){var t=this,n=0,r=0,o=0;if(t.options.infinite===!0)if(t.slideCount<=t.options.slidesToShow)++o;else for(;n<t.slideCount;)++o,n=r+t.options.slidesToScroll,r+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else if(t.options.centerMode===!0)o=t.slideCount;else if(!t.options.asNavFor)o=1+Math.ceil((t.slideCount-t.options.slidesToShow)/t.options.slidesToScroll);else for(;n<t.slideCount;)++o,n=r+t.options.slidesToScroll,r+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return o-1},e.prototype.getLeft=function(t){var n=this,r,o,a=0,c,h;return n.slideOffset=0,o=n.$slides.first().outerHeight(!0),n.options.infinite===!0?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,h=-1,n.options.vertical===!0&&n.options.centerMode===!0&&(n.options.slidesToShow===2?h=-1.5:n.options.slidesToShow===1&&(h=-2)),a=o*n.options.slidesToShow*h),n.slideCount%n.options.slidesToScroll!==0&&t+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(t>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(t-n.slideCount))*n.slideWidth*-1,a=(n.options.slidesToShow-(t-n.slideCount))*o*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,a=n.slideCount%n.options.slidesToScroll*o*-1))):t+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(t+n.options.slidesToShow-n.slideCount)*n.slideWidth,a=(t+n.options.slidesToShow-n.slideCount)*o),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,a=0),n.options.centerMode===!0&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:n.options.centerMode===!0&&n.options.infinite===!0?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:n.options.centerMode===!0&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),n.options.vertical===!1?r=t*n.slideWidth*-1+n.slideOffset:r=t*o*-1+a,n.options.variableWidth===!0&&(n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?c=n.$slideTrack.children(".slick-slide").eq(t):c=n.$slideTrack.children(".slick-slide").eq(t+n.options.slidesToShow),n.options.rtl===!0?c[0]?r=(n.$slideTrack.width()-c[0].offsetLeft-c.width())*-1:r=0:r=c[0]?c[0].offsetLeft*-1:0,n.options.centerMode===!0&&(n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?c=n.$slideTrack.children(".slick-slide").eq(t):c=n.$slideTrack.children(".slick-slide").eq(t+n.options.slidesToShow+1),n.options.rtl===!0?c[0]?r=(n.$slideTrack.width()-c[0].offsetLeft-c.width())*-1:r=0:r=c[0]?c[0].offsetLeft*-1:0,r+=(n.$list.width()-c.outerWidth())/2)),r},e.prototype.getOption=e.prototype.slickGetOption=function(t){var n=this;return n.options[t]},e.prototype.getNavigableIndexes=function(){var t=this,n=0,r=0,o=[],a;for(t.options.infinite===!1?a=t.slideCount:(n=t.options.slidesToScroll*-1,r=t.options.slidesToScroll*-1,a=t.slideCount*2);n<a;)o.push(n),n=r+t.options.slidesToScroll,r+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return o},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var t=this,n,r,o;return o=t.options.centerMode===!0?t.slideWidth*Math.floor(t.options.slidesToShow/2):0,t.options.swipeToSlide===!0?(t.$slideTrack.find(".slick-slide").each(function(a,c){if(c.offsetLeft-o+i(c).outerWidth()/2>t.swipeLeft*-1)return r=c,!1}),n=Math.abs(i(r).attr("data-slick-index")-t.currentSlide)||1,n):t.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(t,n){var r=this;r.changeSlide({data:{message:"index",index:parseInt(t)}},n)},e.prototype.init=function(t){var n=this;i(n.$slider).hasClass("slick-initialized")||(i(n.$slider).addClass("slick-initialized"),n.buildRows(),n.buildOut(),n.setProps(),n.startLoad(),n.loadSlider(),n.initializeEvents(),n.updateArrows(),n.updateDots(),n.checkResponsive(!0),n.focusHandler()),t&&n.$slider.trigger("init",[n]),n.options.accessibility===!0&&n.initADA(),n.options.autoplay&&(n.paused=!1,n.autoPlay())},e.prototype.initADA=function(){var t=this,n=Math.ceil(t.slideCount/t.options.slidesToShow),r=t.getNavigableIndexes().filter(function(c){return c>=0&&c<t.slideCount});t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),t.$dots!==null&&(t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(c){var h=r.indexOf(c);i(this).attr({role:"tabpanel",id:"slick-slide"+t.instanceUid+c,tabindex:-1}),h!==-1&&i(this).attr({"aria-describedby":"slick-slide-control"+t.instanceUid+h})}),t.$dots.attr("role","tablist").find("li").each(function(c){var h=r[c];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+t.instanceUid+c,"aria-controls":"slick-slide"+t.instanceUid+h,"aria-label":c+1+" of "+n,"aria-selected":null,tabindex:"-1"})}).eq(t.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var o=t.currentSlide,a=o+t.options.slidesToShow;o<a;o++)t.$slides.eq(o).attr("tabindex",0);t.activateADA()},e.prototype.initArrowEvents=function(){var t=this;t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},t.changeSlide),t.$nextArrow.off("click.slick").on("click.slick",{message:"next"},t.changeSlide),t.options.accessibility===!0&&(t.$prevArrow.on("keydown.slick",t.keyHandler),t.$nextArrow.on("keydown.slick",t.keyHandler)))},e.prototype.initDotEvents=function(){var t=this;t.options.dots===!0&&(i("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),t.options.accessibility===!0&&t.$dots.on("keydown.slick",t.keyHandler)),t.options.dots===!0&&t.options.pauseOnDotsHover===!0&&i("li",t.$dots).on("mouseenter.slick",i.proxy(t.interrupt,t,!0)).on("mouseleave.slick",i.proxy(t.interrupt,t,!1))},e.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",i.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",i.proxy(t.interrupt,t,!1)))},e.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),i(document).on(t.visibilityChange,i.proxy(t.visibility,t)),t.options.accessibility===!0&&t.$list.on("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&i(t.$slideTrack).children().on("click.slick",t.selectHandler),i(window).on("orientationchange.slick.slick-"+t.instanceUid,i.proxy(t.orientationChange,t)),i(window).on("resize.slick.slick-"+t.instanceUid,i.proxy(t.resize,t)),i("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),i(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),i(t.setPosition)},e.prototype.initUI=function(){var t=this;t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.show(),t.$nextArrow.show()),t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&t.$dots.show()},e.prototype.keyHandler=function(t){var n=this;t.target.tagName.match("TEXTAREA|INPUT|SELECT")||(t.keyCode===37&&n.options.accessibility===!0?n.changeSlide({data:{message:n.options.rtl===!0?"next":"previous"}}):t.keyCode===39&&n.options.accessibility===!0&&n.changeSlide({data:{message:n.options.rtl===!0?"previous":"next"}}))},e.prototype.lazyLoad=function(){var t=this,n,r,o,a;function c(y){i("img[data-lazy]",y).each(function(){var S=i(this),M=i(this).attr("data-lazy"),P=i(this).attr("data-srcset"),v=i(this).attr("data-sizes")||t.$slider.attr("data-sizes"),_=document.createElement("img");_.onload=function(){S.animate({opacity:0},100,function(){P&&(S.attr("srcset",P),v&&S.attr("sizes",v)),S.attr("src",M).animate({opacity:1},200,function(){S.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),t.$slider.trigger("lazyLoaded",[t,S,M])})},_.onerror=function(){S.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),t.$slider.trigger("lazyLoadError",[t,S,M])},_.src=M})}if(t.options.centerMode===!0?t.options.infinite===!0?(o=t.currentSlide+(t.options.slidesToShow/2+1),a=o+t.options.slidesToShow+2):(o=Math.max(0,t.currentSlide-(t.options.slidesToShow/2+1)),a=2+(t.options.slidesToShow/2+1)+t.currentSlide):(o=t.options.infinite?t.options.slidesToShow+t.currentSlide:t.currentSlide,a=Math.ceil(o+t.options.slidesToShow),t.options.fade===!0&&(o>0&&o--,a<=t.slideCount&&a++)),n=t.$slider.find(".slick-slide").slice(o,a),t.options.lazyLoad==="anticipated")for(var h=o-1,g=a,m=t.$slider.find(".slick-slide"),x=0;x<t.options.slidesToScroll;x++)h<0&&(h=t.slideCount-1),n=n.add(m.eq(h)),n=n.add(m.eq(g)),h--,g++;c(n),t.slideCount<=t.options.slidesToShow?(r=t.$slider.find(".slick-slide"),c(r)):t.currentSlide>=t.slideCount-t.options.slidesToShow?(r=t.$slider.find(".slick-cloned").slice(0,t.options.slidesToShow),c(r)):t.currentSlide===0&&(r=t.$slider.find(".slick-cloned").slice(t.options.slidesToShow*-1),c(r))},e.prototype.loadSlider=function(){var t=this;t.setPosition(),t.$slideTrack.css({opacity:1}),t.$slider.removeClass("slick-loading"),t.initUI(),t.options.lazyLoad==="progressive"&&t.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var t=this;t.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var t=this;t.checkResponsive(),t.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var t=this;t.autoPlayClear(),t.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var t=this;t.autoPlay(),t.options.autoplay=!0,t.paused=!1,t.focussed=!1,t.interrupted=!1},e.prototype.postSlide=function(t){var n=this;if(!n.unslicked&&(n.$slider.trigger("afterChange",[n,t]),n.animating=!1,n.slideCount>n.options.slidesToShow&&n.setPosition(),n.swipeLeft=null,n.options.autoplay&&n.autoPlay(),n.options.accessibility===!0&&(n.initADA(),n.options.focusOnChange))){var r=i(n.$slides.get(n.currentSlide));r.attr("tabindex",0).focus()}},e.prototype.prev=e.prototype.slickPrev=function(){var t=this;t.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(t){t.preventDefault()},e.prototype.progressiveLazyLoad=function(t){t=t||1;var n=this,r=i("img[data-lazy]",n.$slider),o,a,c,h,g;r.length?(o=r.first(),a=o.attr("data-lazy"),c=o.attr("data-srcset"),h=o.attr("data-sizes")||n.$slider.attr("data-sizes"),g=document.createElement("img"),g.onload=function(){c&&(o.attr("srcset",c),h&&o.attr("sizes",h)),o.attr("src",a).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),n.options.adaptiveHeight===!0&&n.setPosition(),n.$slider.trigger("lazyLoaded",[n,o,a]),n.progressiveLazyLoad()},g.onerror=function(){t<3?setTimeout(function(){n.progressiveLazyLoad(t+1)},500):(o.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,o,a]),n.progressiveLazyLoad())},g.src=a):n.$slider.trigger("allImagesLoaded",[n])},e.prototype.refresh=function(t){var n=this,r,o;o=n.slideCount-n.options.slidesToShow,!n.options.infinite&&n.currentSlide>o&&(n.currentSlide=o),n.slideCount<=n.options.slidesToShow&&(n.currentSlide=0),r=n.currentSlide,n.destroy(!0),i.extend(n,n.initials,{currentSlide:r}),n.init(),t||n.changeSlide({data:{message:"index",index:r}},!1)},e.prototype.registerBreakpoints=function(){var t=this,n,r,o,a=t.options.responsive||null;if(i.type(a)==="array"&&a.length){t.respondTo=t.options.respondTo||"window";for(n in a)if(o=t.breakpoints.length-1,a.hasOwnProperty(n)){for(r=a[n].breakpoint;o>=0;)t.breakpoints[o]&&t.breakpoints[o]===r&&t.breakpoints.splice(o,1),o--;t.breakpoints.push(r),t.breakpointSettings[r]=a[n].settings}t.breakpoints.sort(function(c,h){return t.options.mobileFirst?c-h:h-c})}},e.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&t.currentSlide!==0&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),t.options.focusOnSelect===!0&&i(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses(typeof t.currentSlide=="number"?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},e.prototype.resize=function(){var t=this;i(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=i(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(t,n,r){var o=this;if(typeof t=="boolean"?(n=t,t=n===!0?0:o.slideCount-1):t=n===!0?--t:t,o.slideCount<1||t<0||t>o.slideCount-1)return!1;o.unload(),r===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(t).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(t){var n=this,r={},o,a;n.options.rtl===!0&&(t=-t),o=n.positionProp=="left"?Math.ceil(t)+"px":"0px",a=n.positionProp=="top"?Math.ceil(t)+"px":"0px",r[n.positionProp]=t,n.transformsEnabled===!1?n.$slideTrack.css(r):(r={},n.cssTransitions===!1?(r[n.animType]="translate("+o+", "+a+")",n.$slideTrack.css(r)):(r[n.animType]="translate3d("+o+", "+a+", 0px)",n.$slideTrack.css(r)))},e.prototype.setDimensions=function(){var t=this;t.options.vertical===!1?t.options.centerMode===!0&&t.$list.css({padding:"0px "+t.options.centerPadding}):(t.$list.height(t.$slides.first().outerHeight(!0)*t.options.slidesToShow),t.options.centerMode===!0&&t.$list.css({padding:t.options.centerPadding+" 0px"})),t.listWidth=t.$list.width(),t.listHeight=t.$list.height(),t.options.vertical===!1&&t.options.variableWidth===!1?(t.slideWidth=Math.ceil(t.listWidth/t.options.slidesToShow),t.$slideTrack.width(Math.ceil(t.slideWidth*t.$slideTrack.children(".slick-slide").length))):t.options.variableWidth===!0?t.$slideTrack.width(5e3*t.slideCount):(t.slideWidth=Math.ceil(t.listWidth),t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0)*t.$slideTrack.children(".slick-slide").length)));var n=t.$slides.first().outerWidth(!0)-t.$slides.first().width();t.options.variableWidth===!1&&t.$slideTrack.children(".slick-slide").width(t.slideWidth-n)},e.prototype.setFade=function(){var t=this,n;t.$slides.each(function(r,o){n=t.slideWidth*r*-1,t.options.rtl===!0?i(o).css({position:"relative",right:n,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(o).css({position:"relative",left:n,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var t=this;if(t.options.slidesToShow===1&&t.options.adaptiveHeight===!0&&t.options.vertical===!1){var n=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.css("height",n)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var t=this,n,r,o,a,c=!1,h;if(i.type(arguments[0])==="object"?(o=arguments[0],c=arguments[1],h="multiple"):i.type(arguments[0])==="string"&&(o=arguments[0],a=arguments[1],c=arguments[2],arguments[0]==="responsive"&&i.type(arguments[1])==="array"?h="responsive":typeof arguments[1]<"u"&&(h="single")),h==="single")t.options[o]=a;else if(h==="multiple")i.each(o,function(g,m){t.options[g]=m});else if(h==="responsive")for(r in a)if(i.type(t.options.responsive)!=="array")t.options.responsive=[a[r]];else{for(n=t.options.responsive.length-1;n>=0;)t.options.responsive[n].breakpoint===a[r].breakpoint&&t.options.responsive.splice(n,1),n--;t.options.responsive.push(a[r])}c&&(t.unload(),t.reinit())},e.prototype.setPosition=function(){var t=this;t.setDimensions(),t.setHeight(),t.options.fade===!1?t.setCSS(t.getLeft(t.currentSlide)):t.setFade(),t.$slider.trigger("setPosition",[t])},e.prototype.setProps=function(){var t=this,n=document.body.style;t.positionProp=t.options.vertical===!0?"top":"left",t.positionProp==="top"?t.$slider.addClass("slick-vertical"):t.$slider.removeClass("slick-vertical"),(n.WebkitTransition!==void 0||n.MozTransition!==void 0||n.msTransition!==void 0)&&t.options.useCSS===!0&&(t.cssTransitions=!0),t.options.fade&&(typeof t.options.zIndex=="number"?t.options.zIndex<3&&(t.options.zIndex=3):t.options.zIndex=t.defaults.zIndex),n.OTransform!==void 0&&(t.animType="OTransform",t.transformType="-o-transform",t.transitionType="OTransition",n.perspectiveProperty===void 0&&n.webkitPerspective===void 0&&(t.animType=!1)),n.MozTransform!==void 0&&(t.animType="MozTransform",t.transformType="-moz-transform",t.transitionType="MozTransition",n.perspectiveProperty===void 0&&n.MozPerspective===void 0&&(t.animType=!1)),n.webkitTransform!==void 0&&(t.animType="webkitTransform",t.transformType="-webkit-transform",t.transitionType="webkitTransition",n.perspectiveProperty===void 0&&n.webkitPerspective===void 0&&(t.animType=!1)),n.msTransform!==void 0&&(t.animType="msTransform",t.transformType="-ms-transform",t.transitionType="msTransition",n.msTransform===void 0&&(t.animType=!1)),n.transform!==void 0&&t.animType!==!1&&(t.animType="transform",t.transformType="transform",t.transitionType="transition"),t.transformsEnabled=t.options.useTransform&&t.animType!==null&&t.animType!==!1},e.prototype.setSlideClasses=function(t){var n=this,r,o,a,c;if(o=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(t).addClass("slick-current"),n.options.centerMode===!0){var h=n.options.slidesToShow%2===0?1:0;r=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(t>=r&&t<=n.slideCount-1-r?n.$slides.slice(t-r+h,t+r+1).addClass("slick-active").attr("aria-hidden","false"):(a=n.options.slidesToShow+t,o.slice(a-r+1+h,a+r+2).addClass("slick-active").attr("aria-hidden","false")),t===0?o.eq(o.length-1-n.options.slidesToShow).addClass("slick-center"):t===n.slideCount-1&&o.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(t).addClass("slick-center")}else t>=0&&t<=n.slideCount-n.options.slidesToShow?n.$slides.slice(t,t+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):o.length<=n.options.slidesToShow?o.addClass("slick-active").attr("aria-hidden","false"):(c=n.slideCount%n.options.slidesToShow,a=n.options.infinite===!0?n.options.slidesToShow+t:t,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-t<n.options.slidesToShow?o.slice(a-(n.options.slidesToShow-c),a+c).addClass("slick-active").attr("aria-hidden","false"):o.slice(a,a+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));(n.options.lazyLoad==="ondemand"||n.options.lazyLoad==="anticipated")&&n.lazyLoad()},e.prototype.setupInfinite=function(){var t=this,n,r,o;if(t.options.fade===!0&&(t.options.centerMode=!1),t.options.infinite===!0&&t.options.fade===!1&&(r=null,t.slideCount>t.options.slidesToShow)){for(t.options.centerMode===!0?o=t.options.slidesToShow+1:o=t.options.slidesToShow,n=t.slideCount;n>t.slideCount-o;n-=1)r=n-1,i(t.$slides[r]).clone(!0).attr("id","").attr("data-slick-index",r-t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");for(n=0;n<o+t.slideCount;n+=1)r=n,i(t.$slides[r]).clone(!0).attr("id","").attr("data-slick-index",r+t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");t.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(t){var n=this;t||n.autoPlay(),n.interrupted=t},e.prototype.selectHandler=function(t){var n=this,r=i(t.target).is(".slick-slide")?i(t.target):i(t.target).parents(".slick-slide"),o=parseInt(r.attr("data-slick-index"));if(o||(o=0),n.slideCount<=n.options.slidesToShow){n.slideHandler(o,!1,!0);return}n.slideHandler(o)},e.prototype.slideHandler=function(t,n,r){var o,a,c,h,g=null,m=this,x;if(n=n||!1,!(m.animating===!0&&m.options.waitForAnimate===!0)&&!(m.options.fade===!0&&m.currentSlide===t)){if(n===!1&&m.asNavFor(t),o=t,g=m.getLeft(o),h=m.getLeft(m.currentSlide),m.currentLeft=m.swipeLeft===null?h:m.swipeLeft,m.options.infinite===!1&&m.options.centerMode===!1&&(t<0||t>m.getDotCount()*m.options.slidesToScroll)){m.options.fade===!1&&(o=m.currentSlide,r!==!0?m.animateSlide(h,function(){m.postSlide(o)}):m.postSlide(o));return}else if(m.options.infinite===!1&&m.options.centerMode===!0&&(t<0||t>m.slideCount-m.options.slidesToScroll)){m.options.fade===!1&&(o=m.currentSlide,r!==!0?m.animateSlide(h,function(){m.postSlide(o)}):m.postSlide(o));return}if(m.options.autoplay&&clearInterval(m.autoPlayTimer),o<0?m.slideCount%m.options.slidesToScroll!==0?a=m.slideCount-m.slideCount%m.options.slidesToScroll:a=m.slideCount+o:o>=m.slideCount?m.slideCount%m.options.slidesToScroll!==0?a=0:a=o-m.slideCount:a=o,m.animating=!0,m.$slider.trigger("beforeChange",[m,m.currentSlide,a]),c=m.currentSlide,m.currentSlide=a,m.setSlideClasses(m.currentSlide),m.options.asNavFor&&(x=m.getNavTarget(),x=x.slick("getSlick"),x.slideCount<=x.options.slidesToShow&&x.setSlideClasses(m.currentSlide)),m.updateDots(),m.updateArrows(),m.options.fade===!0){r!==!0?(m.fadeSlideOut(c),m.fadeSlide(a,function(){m.postSlide(a)})):m.postSlide(a),m.animateHeight();return}r!==!0?m.animateSlide(g,function(){m.postSlide(a)}):m.postSlide(a)}},e.prototype.startLoad=function(){var t=this;t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.hide(),t.$nextArrow.hide()),t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&t.$dots.hide(),t.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var t,n,r,o,a=this;return t=a.touchObject.startX-a.touchObject.curX,n=a.touchObject.startY-a.touchObject.curY,r=Math.atan2(n,t),o=Math.round(r*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?a.options.rtl===!1?"left":"right":o>=135&&o<=225?a.options.rtl===!1?"right":"left":a.options.verticalSwiping===!0?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(t){var n=this,r,o;if(n.dragging=!1,n.swiping=!1,n.scrolling)return n.scrolling=!1,!1;if(n.interrupted=!1,n.shouldClick=!(n.touchObject.swipeLength>10),n.touchObject.curX===void 0)return!1;if(n.touchObject.edgeHit===!0&&n.$slider.trigger("edge",[n,n.swipeDirection()]),n.touchObject.swipeLength>=n.touchObject.minSwipe){switch(o=n.swipeDirection(),o){case"left":case"down":r=n.options.swipeToSlide?n.checkNavigable(n.currentSlide+n.getSlideCount()):n.currentSlide+n.getSlideCount(),n.currentDirection=0;break;case"right":case"up":r=n.options.swipeToSlide?n.checkNavigable(n.currentSlide-n.getSlideCount()):n.currentSlide-n.getSlideCount(),n.currentDirection=1;break}o!="vertical"&&(n.slideHandler(r),n.touchObject={},n.$slider.trigger("swipe",[n,o]))}else n.touchObject.startX!==n.touchObject.curX&&(n.slideHandler(n.currentSlide),n.touchObject={})},e.prototype.swipeHandler=function(t){var n=this;if(!(n.options.swipe===!1||"ontouchend"in document&&n.options.swipe===!1)&&!(n.options.draggable===!1&&t.type.indexOf("mouse")!==-1))switch(n.touchObject.fingerCount=t.originalEvent&&t.originalEvent.touches!==void 0?t.originalEvent.touches.length:1,n.touchObject.minSwipe=n.listWidth/n.options.touchThreshold,n.options.verticalSwiping===!0&&(n.touchObject.minSwipe=n.listHeight/n.options.touchThreshold),t.data.action){case"start":n.swipeStart(t);break;case"move":n.swipeMove(t);break;case"end":n.swipeEnd(t);break}},e.prototype.swipeMove=function(t){var n=this,r,o,a,c,h,g;if(h=t.originalEvent!==void 0?t.originalEvent.touches:null,!n.dragging||n.scrolling||h&&h.length!==1)return!1;if(r=n.getLeft(n.currentSlide),n.touchObject.curX=h!==void 0?h[0].pageX:t.clientX,n.touchObject.curY=h!==void 0?h[0].pageY:t.clientY,n.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(n.touchObject.curX-n.touchObject.startX,2))),g=Math.round(Math.sqrt(Math.pow(n.touchObject.curY-n.touchObject.startY,2))),!n.options.verticalSwiping&&!n.swiping&&g>4)return n.scrolling=!0,!1;if(n.options.verticalSwiping===!0&&(n.touchObject.swipeLength=g),o=n.swipeDirection(),t.originalEvent!==void 0&&n.touchObject.swipeLength>4&&(n.swiping=!0,t.preventDefault()),c=(n.options.rtl===!1?1:-1)*(n.touchObject.curX>n.touchObject.startX?1:-1),n.options.verticalSwiping===!0&&(c=n.touchObject.curY>n.touchObject.startY?1:-1),a=n.touchObject.swipeLength,n.touchObject.edgeHit=!1,n.options.infinite===!1&&(n.currentSlide===0&&o==="right"||n.currentSlide>=n.getDotCount()&&o==="left")&&(a=n.touchObject.swipeLength*n.options.edgeFriction,n.touchObject.edgeHit=!0),n.options.vertical===!1?n.swipeLeft=r+a*c:n.swipeLeft=r+a*(n.$list.height()/n.listWidth)*c,n.options.verticalSwiping===!0&&(n.swipeLeft=r+a*c),n.options.fade===!0||n.options.touchMove===!1)return!1;if(n.animating===!0)return n.swipeLeft=null,!1;n.setCSS(n.swipeLeft)},e.prototype.swipeStart=function(t){var n=this,r;if(n.interrupted=!0,n.touchObject.fingerCount!==1||n.slideCount<=n.options.slidesToShow)return n.touchObject={},!1;t.originalEvent!==void 0&&t.originalEvent.touches!==void 0&&(r=t.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=r!==void 0?r.pageX:t.clientX,n.touchObject.startY=n.touchObject.curY=r!==void 0?r.pageY:t.clientY,n.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var t=this;t.$slidesCache!==null&&(t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.appendTo(t.$slideTrack),t.reinit())},e.prototype.unload=function(){var t=this;i(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(t){var n=this;n.$slider.trigger("unslick",[n,t]),n.destroy()},e.prototype.updateArrows=function(){var t=this;Math.floor(t.options.slidesToShow/2),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.currentSlide===0?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):(t.currentSlide>=t.slideCount-t.options.slidesToShow&&t.options.centerMode===!1||t.currentSlide>=t.slideCount-1&&t.options.centerMode===!0)&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var t=this;t.$dots!==null&&(t.$dots.find("li").removeClass("slick-active").end(),t.$dots.find("li").eq(Math.floor(t.currentSlide/t.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var t=this;t.options.autoplay&&(document[t.hidden]?t.interrupted=!0:t.interrupted=!1)},i.fn.slick=function(){var t=this,n=arguments[0],r=Array.prototype.slice.call(arguments,1),o=t.length,a,c;for(a=0;a<o;a++)if(typeof n=="object"||typeof n>"u"?t[a].slick=new e(t[a],n):c=t[a].slick[n].apply(t[a].slick,r),typeof c<"u")return c;return t}});function pc(){$(".navbar-collapse").removeClass("show")}function mc(i){$(".navbar .navbar-nav > .nav-item").removeClass("selected"),$(".navbar .navbar-nav > .nav-item > .nav-link[data-no='"+i+"']").parent().addClass("selected")}function Ha(i){$(".cd-hero-slider li").hide(),$('.cd-hero-slider li[data-page-no="'+i+'"]').fadeIn()}$(window).on("load",function(){$("body").addClass("loaded"),Ha(1)});jQuery(function(){$(".tm-page-link").on("click",function(){var i=$(this).data("page-no");Ha(i),mc(i)}),$(".navbar .navbar-nav > .nav-item > a.nav-link").on("click",function(i){var e=$(this).data("no");Ha(e),mc(e),pc()}),$("html").click(function(i){pc()})})});export default kg();
