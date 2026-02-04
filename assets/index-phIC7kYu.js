var tl=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var gp=tl((ho,Cr)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const no="172",nl=0,po=1,il=2,_a=1,rl=2,cn=3,Cn=0,Ut=1,un=2,bn=0,ui=1,mo=2,go=3,_o=4,sl=5,Bn=100,ol=101,al=102,ll=103,cl=104,ul=200,dl=201,fl=202,hl=203,ps=204,ms=205,pl=206,ml=207,gl=208,_l=209,vl=210,xl=211,Sl=212,yl=213,Ml=214,gs=0,_s=1,vs=2,hi=3,xs=4,Ss=5,ys=6,Ms=7,va=0,El=1,Tl=2,wn=0,bl=1,wl=2,Al=3,Cl=4,Rl=5,Pl=6,Ll=7,xa=300,pi=301,mi=302,Es=303,Ts=304,Rr=306,bs=1e3,Hn=1001,ws=1002,Zt=1003,Dl=1004,Gi=1005,Qt=1006,Fr=1007,Vn=1008,pn=1009,Sa=1010,ya=1011,Ii=1012,io=1013,Gn=1014,dn=1015,Fi=1016,ro=1017,so=1018,gi=1020,Ma=35902,Ea=1021,Ta=1022,Kt=1023,ba=1024,wa=1025,di=1026,_i=1027,Aa=1028,oo=1029,Ca=1030,ao=1031,lo=1033,_r=33776,vr=33777,xr=33778,Sr=33779,As=35840,Cs=35841,Rs=35842,Ps=35843,Ls=36196,Ds=37492,Us=37496,Is=37808,Ns=37809,Fs=37810,Os=37811,ks=37812,Bs=37813,zs=37814,Hs=37815,Vs=37816,Gs=37817,Ws=37818,Xs=37819,qs=37820,$s=37821,yr=36492,Ys=36494,js=36495,Ra=36283,Ks=36284,Zs=36285,Js=36286,Ul=3200,Il=3201,Nl=0,Fl=1,En="",Vt="srgb",vi="srgb-linear",Tr="linear",lt="srgb",Yn=7680,vo=519,Ol=512,kl=513,Bl=514,Pa=515,zl=516,Hl=517,Vl=518,Gl=519,xo=35044,So="300 es",fn=2e3,br=2001;class yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mr=Math.PI/180,Qs=180/Math.PI;function Oi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function Wl(i,e){return(i%e+e)%e}function Or(i,e,t){return(1-t)*i+t*e}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,r,s,o,a,c,d){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,d)}set(e,t,n,r,s,o,a,c,d){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],d=n[1],u=n[4],h=n[7],p=n[2],g=n[5],S=n[8],M=r[0],m=r[3],f=r[6],U=r[1],P=r[4],A=r[7],V=r[2],F=r[5],D=r[8];return s[0]=o*M+a*U+c*V,s[3]=o*m+a*P+c*F,s[6]=o*f+a*A+c*D,s[1]=d*M+u*U+h*V,s[4]=d*m+u*P+h*F,s[7]=d*f+u*A+h*D,s[2]=p*M+g*U+S*V,s[5]=p*m+g*P+S*F,s[8]=p*f+g*A+S*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],d=e[7],u=e[8];return t*o*u-t*a*d-n*s*u+n*a*c+r*s*d-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],d=e[7],u=e[8],h=u*o-a*d,p=a*c-u*s,g=d*s-o*c,S=t*h+n*p+r*g;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/S;return e[0]=h*M,e[1]=(r*d-u*n)*M,e[2]=(a*n-r*o)*M,e[3]=p*M,e[4]=(u*t-r*c)*M,e[5]=(r*s-a*t)*M,e[6]=g*M,e[7]=(n*c-d*t)*M,e[8]=(o*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),d=Math.sin(s);return this.set(n*c,n*d,-n*(c*o+d*a)+o+e,-r*d,r*c,-r*(-d*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kr.makeScale(e,t)),this}rotate(e){return this.premultiply(kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new Xe;function La(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ni(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xl(){const i=Ni("canvas");return i.style.display="block",i}const yo={};function li(i){i in yo||(yo[i]=!0,console.warn(i))}function ql(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function $l(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Yl(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mo=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eo=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jl(){const i={enabled:!0,workingColorSpace:vi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=hn(r.r),r.g=hn(r.g),r.b=hn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===En?Tr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vi]:{primaries:e,whitePoint:n,transfer:Tr,toXYZ:Mo,fromXYZ:Eo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Mo,fromXYZ:Eo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}const nt=jl();function hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let jn;class Kl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{jn===void 0&&(jn=Ni("canvas")),jn.width=e.width,jn.height=e.height;const n=jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ni("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hn(t[n]/255)*255):t[n]=hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zl=0;class Da{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Br(r[o].image)):s.push(Br(r[o]))}else s=Br(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jl=0;class Rt extends yi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Hn,r=Hn,s=Qt,o=Vn,a=Kt,c=pn,d=Rt.DEFAULT_ANISOTROPY,u=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=Oi(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=d,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=xa;Rt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,r=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,d=c[0],u=c[4],h=c[8],p=c[1],g=c[5],S=c[9],M=c[2],m=c[6],f=c[10];if(Math.abs(u-p)<.01&&Math.abs(h-M)<.01&&Math.abs(S-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(h+M)<.1&&Math.abs(S+m)<.1&&Math.abs(d+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,A=(g+1)/2,V=(f+1)/2,F=(u+p)/4,D=(h+M)/4,G=(S+m)/4;return P>A&&P>V?P<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(P),r=F/n,s=D/n):A>V?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=F/r,s=G/r):V<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(V),n=D/s,r=G/s),this.set(n,r,s,t),this}let U=Math.sqrt((m-S)*(m-S)+(h-M)*(h-M)+(p-u)*(p-u));return Math.abs(U)<.001&&(U=1),this.x=(m-S)/U,this.y=(h-M)/U,this.z=(p-u)/U,this.w=Math.acos((d+g+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ql extends yi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Rt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends Ql{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ua extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ec extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ki{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],d=n[r+1],u=n[r+2],h=n[r+3];const p=s[o+0],g=s[o+1],S=s[o+2],M=s[o+3];if(a===0){e[t+0]=c,e[t+1]=d,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=p,e[t+1]=g,e[t+2]=S,e[t+3]=M;return}if(h!==M||c!==p||d!==g||u!==S){let m=1-a;const f=c*p+d*g+u*S+h*M,U=f>=0?1:-1,P=1-f*f;if(P>Number.EPSILON){const V=Math.sqrt(P),F=Math.atan2(V,f*U);m=Math.sin(m*F)/V,a=Math.sin(a*F)/V}const A=a*U;if(c=c*m+p*A,d=d*m+g*A,u=u*m+S*A,h=h*m+M*A,m===1-a){const V=1/Math.sqrt(c*c+d*d+u*u+h*h);c*=V,d*=V,u*=V,h*=V}}e[t]=c,e[t+1]=d,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],d=n[r+2],u=n[r+3],h=s[o],p=s[o+1],g=s[o+2],S=s[o+3];return e[t]=a*S+u*h+c*g-d*p,e[t+1]=c*S+u*p+d*h-a*g,e[t+2]=d*S+u*g+a*p-c*h,e[t+3]=u*S-a*h-c*p-d*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,d=a(n/2),u=a(r/2),h=a(s/2),p=c(n/2),g=c(r/2),S=c(s/2);switch(o){case"XYZ":this._x=p*u*h+d*g*S,this._y=d*g*h-p*u*S,this._z=d*u*S+p*g*h,this._w=d*u*h-p*g*S;break;case"YXZ":this._x=p*u*h+d*g*S,this._y=d*g*h-p*u*S,this._z=d*u*S-p*g*h,this._w=d*u*h+p*g*S;break;case"ZXY":this._x=p*u*h-d*g*S,this._y=d*g*h+p*u*S,this._z=d*u*S+p*g*h,this._w=d*u*h-p*g*S;break;case"ZYX":this._x=p*u*h-d*g*S,this._y=d*g*h+p*u*S,this._z=d*u*S-p*g*h,this._w=d*u*h+p*g*S;break;case"YZX":this._x=p*u*h+d*g*S,this._y=d*g*h+p*u*S,this._z=d*u*S-p*g*h,this._w=d*u*h-p*g*S;break;case"XZY":this._x=p*u*h-d*g*S,this._y=d*g*h-p*u*S,this._z=d*u*S+p*g*h,this._w=d*u*h+p*g*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],d=t[2],u=t[6],h=t[10],p=n+a+h;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-c)*g,this._y=(s-d)*g,this._z=(o-r)*g}else if(n>a&&n>h){const g=2*Math.sqrt(1+n-a-h);this._w=(u-c)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+d)/g}else if(a>h){const g=2*Math.sqrt(1+a-n-h);this._w=(s-d)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(c+u)/g}else{const g=2*Math.sqrt(1+h-n-a);this._w=(o-r)/g,this._x=(s+d)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,d=t._z,u=t._w;return this._x=n*u+o*a+r*d-s*c,this._y=r*u+o*c+s*a-n*d,this._z=s*u+o*d+n*c-r*a,this._w=o*u-n*a-r*c-s*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const d=Math.sqrt(c),u=Math.atan2(d,a),h=Math.sin((1-t)*u)/d,p=Math.sin(t*u)/d;return this._w=o*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(To.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(To.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,d=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+c*d+o*h-a*u,this.y=n+c*u+a*d-s*h,this.z=r+c*h+s*u-o*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zr.copy(this).projectOnVector(e),this.sub(zr)}reflect(e){return this.sub(zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zr=new q,To=new ki;class Bi{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$t):$t.fromBufferAttribute(s,o),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wi.copy(n.boundingBox)),Wi.applyMatrix4(e.matrixWorld),this.union(Wi)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ci),Xi.subVectors(this.max,Ci),Kn.subVectors(e.a,Ci),Zn.subVectors(e.b,Ci),Jn.subVectors(e.c,Ci),_n.subVectors(Zn,Kn),vn.subVectors(Jn,Zn),Ln.subVectors(Kn,Jn);let t=[0,-_n.z,_n.y,0,-vn.z,vn.y,0,-Ln.z,Ln.y,_n.z,0,-_n.x,vn.z,0,-vn.x,Ln.z,0,-Ln.x,-_n.y,_n.x,0,-vn.y,vn.x,0,-Ln.y,Ln.x,0];return!Hr(t,Kn,Zn,Jn,Xi)||(t=[1,0,0,0,1,0,0,0,1],!Hr(t,Kn,Zn,Jn,Xi))?!1:(qi.crossVectors(_n,vn),t=[qi.x,qi.y,qi.z],Hr(t,Kn,Zn,Jn,Xi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new q,new q,new q,new q,new q,new q,new q,new q],$t=new q,Wi=new Bi,Kn=new q,Zn=new q,Jn=new q,_n=new q,vn=new q,Ln=new q,Ci=new q,Xi=new q,qi=new q,Dn=new q;function Hr(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Dn.fromArray(i,s);const a=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),c=e.dot(Dn),d=t.dot(Dn),u=n.dot(Dn);if(Math.max(-Math.max(c,d,u),Math.min(c,d,u))>a)return!1}return!0}const tc=new Bi,Ri=new q,Vr=new q;class Pr{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ri.subVectors(e,this.center);const t=Ri.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ri,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ri.copy(e.center).add(Vr)),this.expandByPoint(Ri.copy(e.center).sub(Vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new q,Gr=new q,$i=new q,xn=new q,Wr=new q,Yi=new q,Xr=new q;class Ia{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Gr.copy(e).add(t).multiplyScalar(.5),$i.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Gr);const s=e.distanceTo(t)*.5,o=-this.direction.dot($i),a=xn.dot(this.direction),c=-xn.dot($i),d=xn.lengthSq(),u=Math.abs(1-o*o);let h,p,g,S;if(u>0)if(h=o*c-a,p=o*a-c,S=s*u,h>=0)if(p>=-S)if(p<=S){const M=1/u;h*=M,p*=M,g=h*(h+o*p+2*a)+p*(o*h+p+2*c)+d}else p=s,h=Math.max(0,-(o*p+a)),g=-h*h+p*(p+2*c)+d;else p=-s,h=Math.max(0,-(o*p+a)),g=-h*h+p*(p+2*c)+d;else p<=-S?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-c),s),g=-h*h+p*(p+2*c)+d):p<=S?(h=0,p=Math.min(Math.max(-s,-c),s),g=p*(p+2*c)+d):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-c),s),g=-h*h+p*(p+2*c)+d);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),g=-h*h+p*(p+2*c)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Gr).addScaledVector($i,p),g}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),r=sn.dot(sn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const d=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,p=this.origin;return d>=0?(n=(e.min.x-p.x)*d,r=(e.max.x-p.x)*d):(n=(e.max.x-p.x)*d,r=(e.min.x-p.x)*d),u>=0?(s=(e.min.y-p.y)*u,o=(e.max.y-p.y)*u):(s=(e.max.y-p.y)*u,o=(e.min.y-p.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,r,s){Wr.subVectors(t,e),Yi.subVectors(n,e),Xr.crossVectors(Wr,Yi);let o=this.direction.dot(Xr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xn.subVectors(this.origin,e);const c=a*this.direction.dot(Yi.crossVectors(xn,Yi));if(c<0)return null;const d=a*this.direction.dot(Wr.cross(xn));if(d<0||c+d>o)return null;const u=-a*xn.dot(Xr);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,n,r,s,o,a,c,d,u,h,p,g,S,M,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,d,u,h,p,g,S,M,m)}set(e,t,n,r,s,o,a,c,d,u,h,p,g,S,M,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=d,f[6]=u,f[10]=h,f[14]=p,f[3]=g,f[7]=S,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Qn.setFromMatrixColumn(e,0).length(),s=1/Qn.setFromMatrixColumn(e,1).length(),o=1/Qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),d=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*u,g=o*h,S=a*u,M=a*h;t[0]=c*u,t[4]=-c*h,t[8]=d,t[1]=g+S*d,t[5]=p-M*d,t[9]=-a*c,t[2]=M-p*d,t[6]=S+g*d,t[10]=o*c}else if(e.order==="YXZ"){const p=c*u,g=c*h,S=d*u,M=d*h;t[0]=p+M*a,t[4]=S*a-g,t[8]=o*d,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=g*a-S,t[6]=M+p*a,t[10]=o*c}else if(e.order==="ZXY"){const p=c*u,g=c*h,S=d*u,M=d*h;t[0]=p-M*a,t[4]=-o*h,t[8]=S+g*a,t[1]=g+S*a,t[5]=o*u,t[9]=M-p*a,t[2]=-o*d,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const p=o*u,g=o*h,S=a*u,M=a*h;t[0]=c*u,t[4]=S*d-g,t[8]=p*d+M,t[1]=c*h,t[5]=M*d+p,t[9]=g*d-S,t[2]=-d,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const p=o*c,g=o*d,S=a*c,M=a*d;t[0]=c*u,t[4]=M-p*h,t[8]=S*h+g,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-d*u,t[6]=g*h+S,t[10]=p-M*h}else if(e.order==="XZY"){const p=o*c,g=o*d,S=a*c,M=a*d;t[0]=c*u,t[4]=-h,t[8]=d*u,t[1]=p*h+M,t[5]=o*u,t[9]=g*h-S,t[2]=S*h-g,t[6]=a*u,t[10]=M*h+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nc,e,ic)}lookAt(e,t,n){const r=this.elements;return Ft.subVectors(e,t),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Sn.crossVectors(n,Ft),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Sn.crossVectors(n,Ft)),Sn.normalize(),ji.crossVectors(Ft,Sn),r[0]=Sn.x,r[4]=ji.x,r[8]=Ft.x,r[1]=Sn.y,r[5]=ji.y,r[9]=Ft.y,r[2]=Sn.z,r[6]=ji.z,r[10]=Ft.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],d=n[12],u=n[1],h=n[5],p=n[9],g=n[13],S=n[2],M=n[6],m=n[10],f=n[14],U=n[3],P=n[7],A=n[11],V=n[15],F=r[0],D=r[4],G=r[8],T=r[12],y=r[1],O=r[5],J=r[9],Y=r[13],ie=r[2],re=r[6],ee=r[10],ae=r[14],K=r[3],_e=r[7],ye=r[11],De=r[15];return s[0]=o*F+a*y+c*ie+d*K,s[4]=o*D+a*O+c*re+d*_e,s[8]=o*G+a*J+c*ee+d*ye,s[12]=o*T+a*Y+c*ae+d*De,s[1]=u*F+h*y+p*ie+g*K,s[5]=u*D+h*O+p*re+g*_e,s[9]=u*G+h*J+p*ee+g*ye,s[13]=u*T+h*Y+p*ae+g*De,s[2]=S*F+M*y+m*ie+f*K,s[6]=S*D+M*O+m*re+f*_e,s[10]=S*G+M*J+m*ee+f*ye,s[14]=S*T+M*Y+m*ae+f*De,s[3]=U*F+P*y+A*ie+V*K,s[7]=U*D+P*O+A*re+V*_e,s[11]=U*G+P*J+A*ee+V*ye,s[15]=U*T+P*Y+A*ae+V*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],d=e[13],u=e[2],h=e[6],p=e[10],g=e[14],S=e[3],M=e[7],m=e[11],f=e[15];return S*(+s*c*h-r*d*h-s*a*p+n*d*p+r*a*g-n*c*g)+M*(+t*c*g-t*d*p+s*o*p-r*o*g+r*d*u-s*c*u)+m*(+t*d*h-t*a*g-s*o*h+n*o*g+s*a*u-n*d*u)+f*(-r*a*u-t*c*h+t*a*p+r*o*h-n*o*p+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],d=e[7],u=e[8],h=e[9],p=e[10],g=e[11],S=e[12],M=e[13],m=e[14],f=e[15],U=h*m*d-M*p*d+M*c*g-a*m*g-h*c*f+a*p*f,P=S*p*d-u*m*d-S*c*g+o*m*g+u*c*f-o*p*f,A=u*M*d-S*h*d+S*a*g-o*M*g-u*a*f+o*h*f,V=S*h*c-u*M*c-S*a*p+o*M*p+u*a*m-o*h*m,F=t*U+n*P+r*A+s*V;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/F;return e[0]=U*D,e[1]=(M*p*s-h*m*s-M*r*g+n*m*g+h*r*f-n*p*f)*D,e[2]=(a*m*s-M*c*s+M*r*d-n*m*d-a*r*f+n*c*f)*D,e[3]=(h*c*s-a*p*s-h*r*d+n*p*d+a*r*g-n*c*g)*D,e[4]=P*D,e[5]=(u*m*s-S*p*s+S*r*g-t*m*g-u*r*f+t*p*f)*D,e[6]=(S*c*s-o*m*s-S*r*d+t*m*d+o*r*f-t*c*f)*D,e[7]=(o*p*s-u*c*s+u*r*d-t*p*d-o*r*g+t*c*g)*D,e[8]=A*D,e[9]=(S*h*s-u*M*s-S*n*g+t*M*g+u*n*f-t*h*f)*D,e[10]=(o*M*s-S*a*s+S*n*d-t*M*d-o*n*f+t*a*f)*D,e[11]=(u*a*s-o*h*s-u*n*d+t*h*d+o*n*g-t*a*g)*D,e[12]=V*D,e[13]=(u*M*r-S*h*r+S*n*p-t*M*p-u*n*m+t*h*m)*D,e[14]=(S*a*r-o*M*r-S*n*c+t*M*c+o*n*m-t*a*m)*D,e[15]=(o*h*r-u*a*r+u*n*c-t*h*c-o*n*p+t*a*p)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,d=s*o,u=s*a;return this.set(d*o+n,d*a-r*c,d*c+r*a,0,d*a+r*c,u*a+n,u*c-r*o,0,d*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,d=s+s,u=o+o,h=a+a,p=s*d,g=s*u,S=s*h,M=o*u,m=o*h,f=a*h,U=c*d,P=c*u,A=c*h,V=n.x,F=n.y,D=n.z;return r[0]=(1-(M+f))*V,r[1]=(g+A)*V,r[2]=(S-P)*V,r[3]=0,r[4]=(g-A)*F,r[5]=(1-(p+f))*F,r[6]=(m+U)*F,r[7]=0,r[8]=(S+P)*D,r[9]=(m-U)*D,r[10]=(1-(p+M))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Qn.set(r[0],r[1],r[2]).length();const o=Qn.set(r[4],r[5],r[6]).length(),a=Qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yt.copy(this);const d=1/s,u=1/o,h=1/a;return Yt.elements[0]*=d,Yt.elements[1]*=d,Yt.elements[2]*=d,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=h,Yt.elements[9]*=h,Yt.elements[10]*=h,t.setFromRotationMatrix(Yt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=fn){const c=this.elements,d=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r);let g,S;if(a===fn)g=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===br)g=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=fn){const c=this.elements,d=1/(t-e),u=1/(n-r),h=1/(o-s),p=(t+e)*d,g=(n+r)*u;let S,M;if(a===fn)S=(o+s)*h,M=-2*h;else if(a===br)S=s*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*d,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=M,c[14]=-S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qn=new q,Yt=new gt,nc=new q(0,0,0),ic=new q(1,1,1),Sn=new q,ji=new q,Ft=new q,bo=new gt,wo=new ki;class mn{constructor(e=0,t=0,n=0,r=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],d=r[5],u=r[9],h=r[2],p=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,d)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,d),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,d),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wo.setFromEuler(this),this.setFromQuaternion(wo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class Na{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rc=0;const Ao=new q,ei=new ki,on=new gt,Ki=new q,Pi=new q,sc=new q,oc=new ki,Co=new q(1,0,0),Ro=new q(0,1,0),Po=new q(0,0,1),Lo={type:"added"},ac={type:"removed"},ti={type:"childadded",child:null},qr={type:"childremoved",child:null};class It extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new q,t=new mn,n=new ki,r=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Xe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.multiply(ei),this}rotateOnWorldAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.premultiply(ei),this}rotateX(e){return this.rotateOnAxis(Co,e)}rotateY(e){return this.rotateOnAxis(Ro,e)}rotateZ(e){return this.rotateOnAxis(Po,e)}translateOnAxis(e,t){return Ao.copy(e).applyQuaternion(this.quaternion),this.position.add(Ao.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Co,e)}translateY(e){return this.translateOnAxis(Ro,e)}translateZ(e){return this.translateOnAxis(Po,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ki.copy(e):Ki.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Pi,Ki,this.up):on.lookAt(Ki,Pi,this.up),this.quaternion.setFromRotationMatrix(on),r&&(on.extractRotation(r.matrixWorld),ei.setFromRotationMatrix(on),this.quaternion.premultiply(ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lo),ti.child=e,this.dispatchEvent(ti),ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ac),qr.child=e,this.dispatchEvent(qr),qr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lo),ti.child=e,this.dispatchEvent(ti),ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,e,sc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,oc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let d=0,u=c.length;d<u;d++){const h=c[d];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,d=this.material.length;c<d;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),d=o(e.textures),u=o(e.images),h=o(e.shapes),p=o(e.skeletons),g=o(e.animations),S=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),d.length>0&&(n.textures=d),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),S.length>0&&(n.nodes=S)}return n.object=r,n;function o(a){const c=[];for(const d in a){const u=a[d];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}It.DEFAULT_UP=new q(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new q,an=new q,$r=new q,ln=new q,ni=new q,ii=new q,Do=new q,Yr=new q,jr=new q,Kr=new q,Zr=new mt,Jr=new mt,Qr=new mt;class Wt{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),jt.subVectors(e,t),r.cross(jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){jt.subVectors(r,t),an.subVectors(n,t),$r.subVectors(e,t);const o=jt.dot(jt),a=jt.dot(an),c=jt.dot($r),d=an.dot(an),u=an.dot($r),h=o*d-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,g=(d*c-a*u)*p,S=(o*u-a*c)*p;return s.set(1-g-S,S,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ln)===null?!1:ln.x>=0&&ln.y>=0&&ln.x+ln.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ln.x),c.addScaledVector(o,ln.y),c.addScaledVector(a,ln.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Zr.setScalar(0),Jr.setScalar(0),Qr.setScalar(0),Zr.fromBufferAttribute(e,t),Jr.fromBufferAttribute(e,n),Qr.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Zr,s.x),o.addScaledVector(Jr,s.y),o.addScaledVector(Qr,s.z),o}static isFrontFacing(e,t,n,r){return jt.subVectors(n,t),an.subVectors(e,t),jt.cross(an).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),jt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ni.subVectors(r,n),ii.subVectors(s,n),Yr.subVectors(e,n);const c=ni.dot(Yr),d=ii.dot(Yr);if(c<=0&&d<=0)return t.copy(n);jr.subVectors(e,r);const u=ni.dot(jr),h=ii.dot(jr);if(u>=0&&h<=u)return t.copy(r);const p=c*h-u*d;if(p<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ni,o);Kr.subVectors(e,s);const g=ni.dot(Kr),S=ii.dot(Kr);if(S>=0&&g<=S)return t.copy(s);const M=g*d-c*S;if(M<=0&&d>=0&&S<=0)return a=d/(d-S),t.copy(n).addScaledVector(ii,a);const m=u*S-g*h;if(m<=0&&h-u>=0&&g-S>=0)return Do.subVectors(s,r),a=(h-u)/(h-u+(g-S)),t.copy(r).addScaledVector(Do,a);const f=1/(m+M+p);return o=M*f,a=p*f,t.copy(n).addScaledVector(ni,o).addScaledVector(ii,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},Zi={h:0,s:0,l:0};function es(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ot{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=nt.workingColorSpace){if(e=Wl(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=es(o,s,e+1/3),this.g=es(o,s,e),this.b=es(o,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=Fa[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hn(e.r),this.g=hn(e.g),this.b=hn(e.b),this}copyLinearToSRGB(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return nt.fromWorkingColorSpace(wt.copy(this),e),Math.round(Je(wt.r*255,0,255))*65536+Math.round(Je(wt.g*255,0,255))*256+Math.round(Je(wt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(wt.copy(this),t);const n=wt.r,r=wt.g,s=wt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,d;const u=(a+o)/2;if(a===o)c=0,d=0;else{const h=o-a;switch(d=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=d,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Vt){nt.fromWorkingColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,r=wt.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(yn),this.setHSL(yn.h+e,yn.s+t,yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yn),e.getHSL(Zi);const n=Or(yn.h,Zi.h,t),r=Or(yn.s,Zi.s,t),s=Or(yn.l,Zi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new ot;ot.NAMES=Fa;let lc=0;class zi extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=ui,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ps,this.blendDst=ms,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ps&&(n.blendSrc=this.blendSrc),this.blendDst!==ms&&(n.blendDst=this.blendDst),this.blendEquation!==Bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hi extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new q,Ji=new ut;class tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xo,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ji.fromBufferAttribute(this,t),Ji.applyMatrix3(e),this.setXY(t,Ji.x,Ji.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xo&&(e.usage=this.usage),e}}class Oa extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ka extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nn extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let cc=0;const Ht=new gt,ts=new It,ri=new q,Ot=new Bi,Li=new Bi,Mt=new q;class gn extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(La(e)?ka:Oa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return ts.lookAt(e),ts.updateMatrix(),this.applyMatrix4(ts.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ot.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Li.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(Ot.min,Li.min),Ot.expandByPoint(Mt),Mt.addVectors(Ot.max,Li.max),Ot.expandByPoint(Mt)):(Ot.expandByPoint(Li.min),Ot.expandByPoint(Li.max))}Ot.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let d=0,u=a.count;d<u;d++)Mt.fromBufferAttribute(a,d),c&&(ri.fromBufferAttribute(e,d),Mt.add(ri)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let G=0;G<n.count;G++)a[G]=new q,c[G]=new q;const d=new q,u=new q,h=new q,p=new ut,g=new ut,S=new ut,M=new q,m=new q;function f(G,T,y){d.fromBufferAttribute(n,G),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,y),p.fromBufferAttribute(s,G),g.fromBufferAttribute(s,T),S.fromBufferAttribute(s,y),u.sub(d),h.sub(d),g.sub(p),S.sub(p);const O=1/(g.x*S.y-S.x*g.y);isFinite(O)&&(M.copy(u).multiplyScalar(S.y).addScaledVector(h,-g.y).multiplyScalar(O),m.copy(h).multiplyScalar(g.x).addScaledVector(u,-S.x).multiplyScalar(O),a[G].add(M),a[T].add(M),a[y].add(M),c[G].add(m),c[T].add(m),c[y].add(m))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let G=0,T=U.length;G<T;++G){const y=U[G],O=y.start,J=y.count;for(let Y=O,ie=O+J;Y<ie;Y+=3)f(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const P=new q,A=new q,V=new q,F=new q;function D(G){V.fromBufferAttribute(r,G),F.copy(V);const T=a[G];P.copy(T),P.sub(V.multiplyScalar(V.dot(T))).normalize(),A.crossVectors(F,T);const O=A.dot(c[G])<0?-1:1;o.setXYZW(G,P.x,P.y,P.z,O)}for(let G=0,T=U.length;G<T;++G){const y=U[G],O=y.start,J=y.count;for(let Y=O,ie=O+J;Y<ie;Y+=3)D(e.getX(Y+0)),D(e.getX(Y+1)),D(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const r=new q,s=new q,o=new q,a=new q,c=new q,d=new q,u=new q,h=new q;if(e)for(let p=0,g=e.count;p<g;p+=3){const S=e.getX(p+0),M=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,S),c.fromBufferAttribute(n,M),d.fromBufferAttribute(n,m),a.add(u),c.add(u),d.add(u),n.setXYZ(S,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,d.x,d.y,d.z)}else for(let p=0,g=t.count;p<g;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,c){const d=a.array,u=a.itemSize,h=a.normalized,p=new d.constructor(c.length*u);let g=0,S=0;for(let M=0,m=c.length;M<m;M++){a.isInterleavedBufferAttribute?g=c[M]*a.data.stride+a.offset:g=c[M]*u;for(let f=0;f<u;f++)p[S++]=d[g++]}return new tn(p,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],d=e(c,n);t.setAttribute(a,d)}const s=this.morphAttributes;for(const a in s){const c=[],d=s[a];for(let u=0,h=d.length;u<h;u++){const p=d[u],g=e(p,n);c.push(g)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const d=o[a];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const d in c)c[d]!==void 0&&(e[d]=c[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const d=n[c];e.data.attributes[c]=d.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const d=this.morphAttributes[c],u=[];for(let h=0,p=d.length;h<p;h++){const g=d[h];u.push(g.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const u=r[d];this.setAttribute(d,u.clone(t))}const s=e.morphAttributes;for(const d in s){const u=[],h=s[d];for(let p=0,g=h.length;p<g;p++)u.push(h[p].clone(t));this.morphAttributes[d]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let d=0,u=o.length;d<u;d++){const h=o[d];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uo=new gt,Un=new Ia,Qi=new Pr,Io=new q,er=new q,tr=new q,nr=new q,ns=new q,ir=new q,No=new q,rr=new q;class en extends It{constructor(e=new gn,t=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ir.set(0,0,0);for(let c=0,d=s.length;c<d;c++){const u=a[c],h=s[c];u!==0&&(ns.fromBufferAttribute(h,e),o?ir.addScaledVector(ns,u):ir.addScaledVector(ns.sub(t),u))}t.add(ir)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(Qi.containsPoint(Un.origin)===!1&&(Un.intersectSphere(Qi,Io)===null||Un.origin.distanceToSquared(Io)>(e.far-e.near)**2))&&(Uo.copy(s).invert(),Un.copy(e.ray).applyMatrix4(Uo),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,d=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,p=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,M=p.length;S<M;S++){const m=p[S],f=o[m.materialIndex],U=Math.max(m.start,g.start),P=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let A=U,V=P;A<V;A+=3){const F=a.getX(A),D=a.getX(A+1),G=a.getX(A+2);r=sr(this,f,e,n,d,u,h,F,D,G),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const S=Math.max(0,g.start),M=Math.min(a.count,g.start+g.count);for(let m=S,f=M;m<f;m+=3){const U=a.getX(m),P=a.getX(m+1),A=a.getX(m+2);r=sr(this,o,e,n,d,u,h,U,P,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let S=0,M=p.length;S<M;S++){const m=p[S],f=o[m.materialIndex],U=Math.max(m.start,g.start),P=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let A=U,V=P;A<V;A+=3){const F=A,D=A+1,G=A+2;r=sr(this,f,e,n,d,u,h,F,D,G),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const S=Math.max(0,g.start),M=Math.min(c.count,g.start+g.count);for(let m=S,f=M;m<f;m+=3){const U=m,P=m+1,A=m+2;r=sr(this,o,e,n,d,u,h,U,P,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function uc(i,e,t,n,r,s,o,a){let c;if(e.side===Ut?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Cn,a),c===null)return null;rr.copy(a),rr.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(rr);return d<t.near||d>t.far?null:{distance:d,point:rr.clone(),object:i}}function sr(i,e,t,n,r,s,o,a,c,d){i.getVertexPosition(a,er),i.getVertexPosition(c,tr),i.getVertexPosition(d,nr);const u=uc(i,e,t,n,er,tr,nr,No);if(u){const h=new q;Wt.getBarycoord(No,er,tr,nr,h),r&&(u.uv=Wt.getInterpolatedAttribute(r,a,c,d,h,new ut)),s&&(u.uv1=Wt.getInterpolatedAttribute(s,a,c,d,h,new ut)),o&&(u.normal=Wt.getInterpolatedAttribute(o,a,c,d,h,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const p={a,b:c,c:d,normal:new q,materialIndex:0};Wt.getNormal(er,tr,nr,p.normal),u.face=p,u.barycoord=h}return u}class Xn extends gn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],d=[],u=[],h=[];let p=0,g=0;S("z","y","x",-1,-1,n,t,e,o,s,0),S("z","y","x",1,-1,n,t,-e,o,s,1),S("x","z","y",1,1,e,n,t,r,o,2),S("x","z","y",1,-1,e,n,-t,r,o,3),S("x","y","z",1,-1,e,t,n,r,s,4),S("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new nn(d,3)),this.setAttribute("normal",new nn(u,3)),this.setAttribute("uv",new nn(h,2));function S(M,m,f,U,P,A,V,F,D,G,T){const y=A/D,O=V/G,J=A/2,Y=V/2,ie=F/2,re=D+1,ee=G+1;let ae=0,K=0;const _e=new q;for(let ye=0;ye<ee;ye++){const De=ye*O-Y;for(let qe=0;qe<re;qe++){const it=qe*y-J;_e[M]=it*U,_e[m]=De*P,_e[f]=ie,d.push(_e.x,_e.y,_e.z),_e[M]=0,_e[m]=0,_e[f]=F>0?1:-1,u.push(_e.x,_e.y,_e.z),h.push(qe/D),h.push(1-ye/G),ae+=1}}for(let ye=0;ye<G;ye++)for(let De=0;De<D;De++){const qe=p+De+re*ye,it=p+De+re*(ye+1),L=p+(De+1)+re*(ye+1),le=p+(De+1)+re*ye;c.push(qe,it,le),c.push(it,L,le),K+=6}a.addGroup(g,K,T),g+=K,p+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ct(i){const e={};for(let t=0;t<i.length;t++){const n=xi(i[t]);for(const r in n)e[r]=n[r]}return e}function dc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ba(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const fc={clone:xi,merge:Ct};var hc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hc,this.fragmentShader=pc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xi(e.uniforms),this.uniformsGroups=dc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class za extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new q,Fo=new ut,Oo=new ut;class Gt extends za{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,Fo,Oo),t.subVectors(Oo,Fo)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,d=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/d,r*=o.width/c,n*=o.height/d}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,oi=1;class mc extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(si,oi,e,t);r.layers=this.layers,this.add(r);const s=new Gt(si,oi,e,t);s.layers=this.layers,this.add(s);const o=new Gt(si,oi,e,t);o.layers=this.layers,this.add(o);const a=new Gt(si,oi,e,t);a.layers=this.layers,this.add(a);const c=new Gt(si,oi,e,t);c.layers=this.layers,this.add(c);const d=new Gt(si,oi,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const d of t)this.remove(d);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,d,u]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,p,g),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Ha extends Rt{constructor(e,t,n,r,s,o,a,c,d,u){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,n,r,s,o,a,c,d,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gc extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ha(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xn(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:bn});s.uniforms.tEquirect.value=t;const o=new en(r,s),a=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Qt),new mc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class _c extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const is=new q,vc=new q,xc=new Xe;class On{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=is.subVectors(n,t).cross(vc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(is),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xc.getNormalMatrix(e),r=this.coplanarPoint(is).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Pr,or=new q;class Va{constructor(e=new On,t=new On,n=new On,r=new On,s=new On,o=new On){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],d=r[4],u=r[5],h=r[6],p=r[7],g=r[8],S=r[9],M=r[10],m=r[11],f=r[12],U=r[13],P=r[14],A=r[15];if(n[0].setComponents(c-s,p-d,m-g,A-f).normalize(),n[1].setComponents(c+s,p+d,m+g,A+f).normalize(),n[2].setComponents(c+o,p+u,m+S,A+U).normalize(),n[3].setComponents(c-o,p-u,m-S,A-U).normalize(),n[4].setComponents(c-a,p-h,m-M,A-P).normalize(),t===fn)n[5].setComponents(c+a,p+h,m+M,A+P).normalize();else if(t===br)n[5].setComponents(a,h,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){return In.center.set(0,0,0),In.radius=.7071067811865476,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(or.x=r.normal.x>0?e.max.x:e.min.x,or.y=r.normal.y>0?e.max.y:e.min.y,or.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ga extends zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wr=new q,Ar=new q,ko=new gt,Di=new Ia,ar=new Pr,rs=new q,Bo=new q;class Sc extends It{constructor(e=new gn,t=new Ga){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)wr.fromBufferAttribute(t,r-1),Ar.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=wr.distanceTo(Ar);e.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(r),ar.radius+=s,e.ray.intersectsSphere(ar)===!1)return;ko.copy(r).invert(),Di.copy(e.ray).applyMatrix4(ko);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,d=this.isLineSegments?2:1,u=n.index,p=n.attributes.position;if(u!==null){const g=Math.max(0,o.start),S=Math.min(u.count,o.start+o.count);for(let M=g,m=S-1;M<m;M+=d){const f=u.getX(M),U=u.getX(M+1),P=lr(this,e,Di,c,f,U);P&&t.push(P)}if(this.isLineLoop){const M=u.getX(S-1),m=u.getX(g),f=lr(this,e,Di,c,M,m);f&&t.push(f)}}else{const g=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let M=g,m=S-1;M<m;M+=d){const f=lr(this,e,Di,c,M,M+1);f&&t.push(f)}if(this.isLineLoop){const M=lr(this,e,Di,c,S-1,g);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lr(i,e,t,n,r,s){const o=i.geometry.attributes.position;if(wr.fromBufferAttribute(o,r),Ar.fromBufferAttribute(o,s),t.distanceSqToSegment(wr,Ar,rs,Bo)>n)return;rs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(rs);if(!(c<e.near||c>e.far))return{distance:c,point:Bo.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const zo=new q,Ho=new q;class yc extends Sc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)zo.fromBufferAttribute(t,r),Ho.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+zo.distanceTo(Ho);e.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cr extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Wa extends Rt{constructor(e,t,n,r,s,o,a,c,d,u=di){if(u!==di&&u!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===di&&(n=Gn),n===void 0&&u===_i&&(n=gi),super(null,r,s,o,a,c,u,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ur=new q,dr=new q,ss=new q,fr=new Wt;class Mc extends gn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Mr*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,d=[0,0,0],u=["a","b","c"],h=new Array(3),p={},g=[];for(let S=0;S<c;S+=3){o?(d[0]=o.getX(S),d[1]=o.getX(S+1),d[2]=o.getX(S+2)):(d[0]=S,d[1]=S+1,d[2]=S+2);const{a:M,b:m,c:f}=fr;if(M.fromBufferAttribute(a,d[0]),m.fromBufferAttribute(a,d[1]),f.fromBufferAttribute(a,d[2]),fr.getNormal(ss),h[0]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let U=0;U<3;U++){const P=(U+1)%3,A=h[U],V=h[P],F=fr[u[U]],D=fr[u[P]],G=`${A}_${V}`,T=`${V}_${A}`;T in p&&p[T]?(ss.dot(p[T].normal)<=s&&(g.push(F.x,F.y,F.z),g.push(D.x,D.y,D.z)),p[T]=null):G in p||(p[G]={index0:d[U],index1:d[P],normal:ss.clone()})}}for(const S in p)if(p[S]){const{index0:M,index1:m}=p[S];ur.fromBufferAttribute(a,M),dr.fromBufferAttribute(a,m),g.push(ur.x,ur.y,ur.z),g.push(dr.x,dr.y,dr.z)}this.setAttribute("position",new nn(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Lr extends gn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),d=a+1,u=c+1,h=e/a,p=t/c,g=[],S=[],M=[],m=[];for(let f=0;f<u;f++){const U=f*p-o;for(let P=0;P<d;P++){const A=P*h-s;S.push(A,-U,0),M.push(0,0,1),m.push(P/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let U=0;U<a;U++){const P=U+d*f,A=U+d*(f+1),V=U+1+d*(f+1),F=U+1+d*f;g.push(P,A,F),g.push(A,V,F)}this.setIndex(g),this.setAttribute("position",new nn(S,3)),this.setAttribute("normal",new nn(M,3)),this.setAttribute("uv",new nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ec extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ul,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tc extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class bc{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return d.push(u,h),this},this.removeHandler=function(u){const h=d.indexOf(u);return h!==-1&&d.splice(h,2),this},this.getHandler=function(u){for(let h=0,p=d.length;h<p;h+=2){const g=d[h],S=d[h+1];if(g.global&&(g.lastIndex=0),g.test(u))return S}return null}}}const wc=new bc;class co{constructor(e){this.manager=e!==void 0?e:wc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}co.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ac extends co{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vo.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ni("img");function c(){u(),Vo.add(e,this),t&&t(this),s.manager.itemEnd(e)}function d(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",d,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Xa extends co{constructor(e){super(e)}load(e,t,n,r){const s=new Rt,o=new Ac(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Cc extends za{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=d*this.view.offsetX,o=s+d*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Rc extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Go(i,e,t,n){const r=Pc(n);switch(t){case Ea:return i*e;case ba:return i*e;case wa:return i*e*2;case Aa:return i*e/r.components*r.byteLength;case oo:return i*e/r.components*r.byteLength;case Ca:return i*e*2/r.components*r.byteLength;case ao:return i*e*2/r.components*r.byteLength;case Ta:return i*e*3/r.components*r.byteLength;case Kt:return i*e*4/r.components*r.byteLength;case lo:return i*e*4/r.components*r.byteLength;case _r:case vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xr:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cs:case Ps:return Math.max(i,16)*Math.max(e,8)/4;case As:case Rs:return Math.max(i,8)*Math.max(e,8)/2;case Ls:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ns:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Os:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ks:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ws:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case qs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $s:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yr:case Ys:case js:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ra:case Ks:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zs:case Js:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pc(i){switch(i){case pn:case Sa:return{byteLength:1,components:1};case Ii:case ya:case Fi:return{byteLength:2,components:1};case ro:case so:return{byteLength:2,components:4};case Gn:case io:case dn:return{byteLength:4,components:1};case Ma:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:no}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=no);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qa(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Lc(i){const e=new WeakMap;function t(a,c){const d=a.array,u=a.usage,h=d.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,d,u),a.onUploadCallback();let g;if(d instanceof Float32Array)g=i.FLOAT;else if(d instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=i.SHORT;else if(d instanceof Uint32Array)g=i.UNSIGNED_INT;else if(d instanceof Int32Array)g=i.INT;else if(d instanceof Int8Array)g=i.BYTE;else if(d instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,d){const u=c.array,h=c.updateRanges;if(i.bindBuffer(d,a),h.length===0)i.bufferSubData(d,0,u);else{h.sort((g,S)=>g.start-S.start);let p=0;for(let g=1;g<h.length;g++){const S=h[p],M=h[g];M.start<=S.start+S.count+1?S.count=Math.max(S.count,M.start+M.count-S.start):(++p,h[p]=M)}h.length=p+1;for(let g=0,S=h.length;g<S;g++){const M=h[g];i.bufferSubData(d,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const d=e.get(a);if(d===void 0)e.set(a,t(a,c));else if(d.version<a.version){if(d.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,a,c),d.version=a.version}}return{get:r,remove:s,update:o}}var Dc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uc=`#ifdef USE_ALPHAHASH
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
#endif`,Ic=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kc=`#ifdef USE_AOMAP
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
#endif`,Bc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zc=`#ifdef USE_BATCHING
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
#endif`,Hc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xc=`#ifdef USE_IRIDESCENCE
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
#endif`,qc=`#ifdef USE_BUMPMAP
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
#endif`,$c=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tu=`#define PI 3.141592653589793
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
} // validated`,nu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iu=`vec3 transformedNormal = objectNormal;
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
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,su=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",cu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uu=`#ifdef USE_ENVMAP
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
#endif`,du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fu=`#ifdef USE_ENVMAP
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
#endif`,hu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_u=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xu=`#ifdef USE_GRADIENTMAP
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
}`,Su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eu=`uniform bool receiveShadow;
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
#endif`,Tu=`#ifdef USE_ENVMAP
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
#endif`,bu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Au=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ru=`PhysicalMaterial material;
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
#endif`,Pu=`struct PhysicalMaterial {
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
}`,Lu=`
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
#endif`,Du=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ou=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ku=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hu=`#if defined( USE_POINTS_UV )
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
#endif`,Vu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$u=`#ifdef USE_MORPHTARGETS
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
#endif`,Yu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ku=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ed=`#ifdef USE_NORMALMAP
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
#endif`,td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,od=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gd=`float getShadowMask() {
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
}`,_d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vd=`#ifdef USE_SKINNING
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
#endif`,xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sd=`#ifdef USE_SKINNING
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
#endif`,yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Md=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ed=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Td=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bd=`#ifdef USE_TRANSMISSION
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
#endif`,wd=`#ifdef USE_TRANSMISSION
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
#endif`,Ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ld=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dd=`uniform sampler2D t2D;
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
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Id=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Od=`#include <common>
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
}`,kd=`#if DEPTH_PACKING == 3200
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
}`,Bd=`#define DISTANCE
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
}`,zd=`#define DISTANCE
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
}`,Hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gd=`uniform float scale;
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
}`,Wd=`uniform vec3 diffuse;
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
}`,Xd=`#include <common>
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
}`,qd=`uniform vec3 diffuse;
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
}`,$d=`#define LAMBERT
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
}`,Yd=`#define LAMBERT
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
}`,jd=`#define MATCAP
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
}`,Kd=`#define MATCAP
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
}`,Zd=`#define NORMAL
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
}`,Jd=`#define NORMAL
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
}`,Qd=`#define PHONG
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
}`,ef=`#define PHONG
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
}`,tf=`#define STANDARD
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
}`,nf=`#define STANDARD
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
}`,rf=`#define TOON
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
}`,sf=`#define TOON
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
}`,of=`uniform float size;
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
}`,af=`uniform vec3 diffuse;
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
}`,lf=`#include <common>
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
}`,cf=`uniform vec3 color;
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
}`,uf=`uniform float rotation;
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
}`,df=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Dc,alphahash_pars_fragment:Uc,alphamap_fragment:Ic,alphamap_pars_fragment:Nc,alphatest_fragment:Fc,alphatest_pars_fragment:Oc,aomap_fragment:kc,aomap_pars_fragment:Bc,batching_pars_vertex:zc,batching_vertex:Hc,begin_vertex:Vc,beginnormal_vertex:Gc,bsdfs:Wc,iridescence_fragment:Xc,bumpmap_pars_fragment:qc,clipping_planes_fragment:$c,clipping_planes_pars_fragment:Yc,clipping_planes_pars_vertex:jc,clipping_planes_vertex:Kc,color_fragment:Zc,color_pars_fragment:Jc,color_pars_vertex:Qc,color_vertex:eu,common:tu,cube_uv_reflection_fragment:nu,defaultnormal_vertex:iu,displacementmap_pars_vertex:ru,displacementmap_vertex:su,emissivemap_fragment:ou,emissivemap_pars_fragment:au,colorspace_fragment:lu,colorspace_pars_fragment:cu,envmap_fragment:uu,envmap_common_pars_fragment:du,envmap_pars_fragment:fu,envmap_pars_vertex:hu,envmap_physical_pars_fragment:Tu,envmap_vertex:pu,fog_vertex:mu,fog_pars_vertex:gu,fog_fragment:_u,fog_pars_fragment:vu,gradientmap_pars_fragment:xu,lightmap_pars_fragment:Su,lights_lambert_fragment:yu,lights_lambert_pars_fragment:Mu,lights_pars_begin:Eu,lights_toon_fragment:bu,lights_toon_pars_fragment:wu,lights_phong_fragment:Au,lights_phong_pars_fragment:Cu,lights_physical_fragment:Ru,lights_physical_pars_fragment:Pu,lights_fragment_begin:Lu,lights_fragment_maps:Du,lights_fragment_end:Uu,logdepthbuf_fragment:Iu,logdepthbuf_pars_fragment:Nu,logdepthbuf_pars_vertex:Fu,logdepthbuf_vertex:Ou,map_fragment:ku,map_pars_fragment:Bu,map_particle_fragment:zu,map_particle_pars_fragment:Hu,metalnessmap_fragment:Vu,metalnessmap_pars_fragment:Gu,morphinstance_vertex:Wu,morphcolor_vertex:Xu,morphnormal_vertex:qu,morphtarget_pars_vertex:$u,morphtarget_vertex:Yu,normal_fragment_begin:ju,normal_fragment_maps:Ku,normal_pars_fragment:Zu,normal_pars_vertex:Ju,normal_vertex:Qu,normalmap_pars_fragment:ed,clearcoat_normal_fragment_begin:td,clearcoat_normal_fragment_maps:nd,clearcoat_pars_fragment:id,iridescence_pars_fragment:rd,opaque_fragment:sd,packing:od,premultiplied_alpha_fragment:ad,project_vertex:ld,dithering_fragment:cd,dithering_pars_fragment:ud,roughnessmap_fragment:dd,roughnessmap_pars_fragment:fd,shadowmap_pars_fragment:hd,shadowmap_pars_vertex:pd,shadowmap_vertex:md,shadowmask_pars_fragment:gd,skinbase_vertex:_d,skinning_pars_vertex:vd,skinning_vertex:xd,skinnormal_vertex:Sd,specularmap_fragment:yd,specularmap_pars_fragment:Md,tonemapping_fragment:Ed,tonemapping_pars_fragment:Td,transmission_fragment:bd,transmission_pars_fragment:wd,uv_pars_fragment:Ad,uv_pars_vertex:Cd,uv_vertex:Rd,worldpos_vertex:Pd,background_vert:Ld,background_frag:Dd,backgroundCube_vert:Ud,backgroundCube_frag:Id,cube_vert:Nd,cube_frag:Fd,depth_vert:Od,depth_frag:kd,distanceRGBA_vert:Bd,distanceRGBA_frag:zd,equirect_vert:Hd,equirect_frag:Vd,linedashed_vert:Gd,linedashed_frag:Wd,meshbasic_vert:Xd,meshbasic_frag:qd,meshlambert_vert:$d,meshlambert_frag:Yd,meshmatcap_vert:jd,meshmatcap_frag:Kd,meshnormal_vert:Zd,meshnormal_frag:Jd,meshphong_vert:Qd,meshphong_frag:ef,meshphysical_vert:tf,meshphysical_frag:nf,meshtoon_vert:rf,meshtoon_frag:sf,points_vert:of,points_frag:af,shadow_vert:lf,shadow_frag:cf,sprite_vert:uf,sprite_frag:df},ge={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Jt={basic:{uniforms:Ct([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Ct([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Ct([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Ct([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Ct([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new ot(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Ct([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Ct([ge.points,ge.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Ct([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Ct([ge.common,ge.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Ct([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Ct([ge.sprite,ge.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Ct([ge.common,ge.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Ct([ge.lights,ge.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Jt.physical={uniforms:Ct([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const hr={r:0,b:0,g:0},Nn=new mn,ff=new gt;function hf(i,e,t,n,r,s,o){const a=new ot(0);let c=s===!0?0:1,d,u,h=null,p=0,g=null;function S(P){let A=P.isScene===!0?P.background:null;return A&&A.isTexture&&(A=(P.backgroundBlurriness>0?t:e).get(A)),A}function M(P){let A=!1;const V=S(P);V===null?f(a,c):V&&V.isColor&&(f(V,1),A=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(P,A){const V=S(A);V&&(V.isCubeTexture||V.mapping===Rr)?(u===void 0&&(u=new en(new Xn(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:xi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,D,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Nn.copy(A.backgroundRotation),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),u.material.uniforms.envMap.value=V,u.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ff.makeRotationFromEuler(Nn)),u.material.toneMapped=nt.getTransfer(V.colorSpace)!==lt,(h!==V||p!==V.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,h=V,p=V.version,g=i.toneMapping),u.layers.enableAll(),P.unshift(u,u.geometry,u.material,0,0,null)):V&&V.isTexture&&(d===void 0&&(d=new en(new Lr(2,2),new Rn({name:"BackgroundMaterial",uniforms:xi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=V,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=nt.getTransfer(V.colorSpace)!==lt,V.matrixAutoUpdate===!0&&V.updateMatrix(),d.material.uniforms.uvTransform.value.copy(V.matrix),(h!==V||p!==V.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,h=V,p=V.version,g=i.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null))}function f(P,A){P.getRGB(hr,Ba(i)),n.buffers.color.setClear(hr.r,hr.g,hr.b,A,o)}function U(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),d!==void 0&&(d.geometry.dispose(),d.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(P,A=1){a.set(P),c=A,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(P){c=P,f(a,c)},render:M,addToRenderList:m,dispose:U}}function pf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function a(y,O,J,Y,ie){let re=!1;const ee=h(Y,J,O);s!==ee&&(s=ee,d(s.object)),re=g(y,Y,J,ie),re&&S(y,Y,J,ie),ie!==null&&e.update(ie,i.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,A(y,O,J,Y),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function c(){return i.createVertexArray()}function d(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,O,J){const Y=J.wireframe===!0;let ie=n[y.id];ie===void 0&&(ie={},n[y.id]=ie);let re=ie[O.id];re===void 0&&(re={},ie[O.id]=re);let ee=re[Y];return ee===void 0&&(ee=p(c()),re[Y]=ee),ee}function p(y){const O=[],J=[],Y=[];for(let ie=0;ie<t;ie++)O[ie]=0,J[ie]=0,Y[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:J,attributeDivisors:Y,object:y,attributes:{},index:null}}function g(y,O,J,Y){const ie=s.attributes,re=O.attributes;let ee=0;const ae=J.getAttributes();for(const K in ae)if(ae[K].location>=0){const ye=ie[K];let De=re[K];if(De===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(De=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(De=y.instanceColor)),ye===void 0||ye.attribute!==De||De&&ye.data!==De.data)return!0;ee++}return s.attributesNum!==ee||s.index!==Y}function S(y,O,J,Y){const ie={},re=O.attributes;let ee=0;const ae=J.getAttributes();for(const K in ae)if(ae[K].location>=0){let ye=re[K];ye===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor));const De={};De.attribute=ye,ye&&ye.data&&(De.data=ye.data),ie[K]=De,ee++}s.attributes=ie,s.attributesNum=ee,s.index=Y}function M(){const y=s.newAttributes;for(let O=0,J=y.length;O<J;O++)y[O]=0}function m(y){f(y,0)}function f(y,O){const J=s.newAttributes,Y=s.enabledAttributes,ie=s.attributeDivisors;J[y]=1,Y[y]===0&&(i.enableVertexAttribArray(y),Y[y]=1),ie[y]!==O&&(i.vertexAttribDivisor(y,O),ie[y]=O)}function U(){const y=s.newAttributes,O=s.enabledAttributes;for(let J=0,Y=O.length;J<Y;J++)O[J]!==y[J]&&(i.disableVertexAttribArray(J),O[J]=0)}function P(y,O,J,Y,ie,re,ee){ee===!0?i.vertexAttribIPointer(y,O,J,ie,re):i.vertexAttribPointer(y,O,J,Y,ie,re)}function A(y,O,J,Y){M();const ie=Y.attributes,re=J.getAttributes(),ee=O.defaultAttributeValues;for(const ae in re){const K=re[ae];if(K.location>=0){let _e=ie[ae];if(_e===void 0&&(ae==="instanceMatrix"&&y.instanceMatrix&&(_e=y.instanceMatrix),ae==="instanceColor"&&y.instanceColor&&(_e=y.instanceColor)),_e!==void 0){const ye=_e.normalized,De=_e.itemSize,qe=e.get(_e);if(qe===void 0)continue;const it=qe.buffer,L=qe.type,le=qe.bytesPerElement,be=L===i.INT||L===i.UNSIGNED_INT||_e.gpuType===io;if(_e.isInterleavedBufferAttribute){const pe=_e.data,Fe=pe.stride,Be=_e.offset;if(pe.isInstancedInterleavedBuffer){for(let Ae=0;Ae<K.locationSize;Ae++)f(K.location+Ae,pe.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ae=0;Ae<K.locationSize;Ae++)m(K.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,it);for(let Ae=0;Ae<K.locationSize;Ae++)P(K.location+Ae,De/K.locationSize,L,ye,Fe*le,(Be+De/K.locationSize*Ae)*le,be)}else{if(_e.isInstancedBufferAttribute){for(let pe=0;pe<K.locationSize;pe++)f(K.location+pe,_e.meshPerAttribute);y.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let pe=0;pe<K.locationSize;pe++)m(K.location+pe);i.bindBuffer(i.ARRAY_BUFFER,it);for(let pe=0;pe<K.locationSize;pe++)P(K.location+pe,De/K.locationSize,L,ye,De*le,De/K.locationSize*pe*le,be)}}else if(ee!==void 0){const ye=ee[ae];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(K.location,ye);break;case 3:i.vertexAttrib3fv(K.location,ye);break;case 4:i.vertexAttrib4fv(K.location,ye);break;default:i.vertexAttrib1fv(K.location,ye)}}}}U()}function V(){G();for(const y in n){const O=n[y];for(const J in O){const Y=O[J];for(const ie in Y)u(Y[ie].object),delete Y[ie];delete O[J]}delete n[y]}}function F(y){if(n[y.id]===void 0)return;const O=n[y.id];for(const J in O){const Y=O[J];for(const ie in Y)u(Y[ie].object),delete Y[ie];delete O[J]}delete n[y.id]}function D(y){for(const O in n){const J=n[O];if(J[y.id]===void 0)continue;const Y=J[y.id];for(const ie in Y)u(Y[ie].object),delete Y[ie];delete J[y.id]}}function G(){T(),o=!0,s!==r&&(s=r,d(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:G,resetDefaultState:T,dispose:V,releaseStatesOfGeometry:F,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:m,disableUnusedAttributes:U}}function mf(i,e,t){let n;function r(d){n=d}function s(d,u){i.drawArrays(n,d,u),t.update(u,n,1)}function o(d,u,h){h!==0&&(i.drawArraysInstanced(n,d,u,h),t.update(u,n,h))}function a(d,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,u,0,h);let g=0;for(let S=0;S<h;S++)g+=u[S];t.update(g,n,1)}function c(d,u,h,p){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let S=0;S<d.length;S++)o(d[S],u[S],p[S]);else{g.multiDrawArraysInstancedWEBGL(n,d,0,u,0,p,0,h);let S=0;for(let M=0;M<h;M++)S+=u[M]*p[M];t.update(S,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function gf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==Kt&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const G=D===Fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==pn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==dn&&!G)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const u=c(d);u!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",u,"instead."),d=u);const h=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),U=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),V=S>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:d,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:g,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:U,maxVaryings:P,maxFragmentUniforms:A,vertexTextures:V,maxSamples:F}}function _f(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new On,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const g=h.length!==0||p||n!==0||r;return r=p,n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){t=u(h,p,0)},this.setState=function(h,p,g){const S=h.clippingPlanes,M=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||S===null||S.length===0||s&&!m)s?u(null):d();else{const U=s?0:n,P=U*4;let A=f.clippingState||null;c.value=A,A=u(S,p,P,g);for(let V=0;V!==P;++V)A[V]=t[V];f.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=U}};function d(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,p,g,S){const M=h!==null?h.length:0;let m=null;if(M!==0){if(m=c.value,S!==!0||m===null){const f=g+M*4,U=p.matrixWorldInverse;a.getNormalMatrix(U),(m===null||m.length<f)&&(m=new Float32Array(f));for(let P=0,A=g;P!==M;++P,A+=4)o.copy(h[P]).applyMatrix4(U,a),o.normal.toArray(m,A),m[A+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function vf(i){let e=new WeakMap;function t(o,a){return a===Es?o.mapping=pi:a===Ts&&(o.mapping=mi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Es||a===Ts)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const d=new gc(c.height);return d.fromEquirectangularTexture(i,o),e.set(o,d),o.addEventListener("dispose",r),t(d.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const ci=4,Wo=[.125,.215,.35,.446,.526,.582],zn=20,os=new Cc,Xo=new ot;let as=null,ls=0,cs=0,us=!1;const kn=(1+Math.sqrt(5))/2,ai=1/kn,qo=[new q(-kn,ai,0),new q(kn,ai,0),new q(-ai,0,kn),new q(ai,0,kn),new q(0,kn,-ai),new q(0,kn,ai),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class $o{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){as=this._renderer.getRenderTarget(),ls=this._renderer.getActiveCubeFace(),cs=this._renderer.getActiveMipmapLevel(),us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(as,ls,cs),this._renderer.xr.enabled=us,e.scissorTest=!1,pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),as=this._renderer.getRenderTarget(),ls=this._renderer.getActiveCubeFace(),cs=this._renderer.getActiveMipmapLevel(),us=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Fi,format:Kt,colorSpace:vi,depthBuffer:!1},r=Yo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xf(s)),this._blurMaterial=Sf(s,e,t)}return r}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,os)}_sceneToCubeUV(e,t,n,r){const a=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Xo),u.toneMapping=wn,u.autoClear=!1;const g=new Hi({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),S=new en(new Xn,g);let M=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,M=!0):(g.color.copy(Xo),M=!0);for(let f=0;f<6;f++){const U=f%3;U===0?(a.up.set(0,c[f],0),a.lookAt(d[f],0,0)):U===1?(a.up.set(0,0,c[f]),a.lookAt(0,d[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,d[f]));const P=this._cubeSize;pr(r,U*P,f>2?P:0,P,P),u.setRenderTarget(r),M&&u.render(S,a),u.render(e,a)}S.geometry.dispose(),S.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===pi||e.mapping===mi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jo());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new en(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;pr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,os)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qo[(r-s-1)%qo.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new en(this._lodPlanes[r],d),p=d.uniforms,g=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*zn-1),M=s/S,m=isFinite(s)?1+Math.floor(u*M):zn;m>zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zn}`);const f=[];let U=0;for(let D=0;D<zn;++D){const G=D/M,T=Math.exp(-G*G/2);f.push(T),D===0?U+=T:D<m&&(U+=2*T)}for(let D=0;D<f.length;D++)f[D]=f[D]/U;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:P}=this;p.dTheta.value=S,p.mipInt.value=P-n;const A=this._sizeLods[r],V=3*A*(r>P-ci?r-P+ci:0),F=4*(this._cubeSize-A);pr(t,V,F,3*A,2*A),c.setRenderTarget(t),c.render(h,os)}}function xf(i){const e=[],t=[],n=[];let r=i;const s=i-ci+1+Wo.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-ci?c=Wo[o-i+ci-1]:o===0&&(c=0),n.push(c);const d=1/(a-2),u=-d,h=1+d,p=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,S=6,M=3,m=2,f=1,U=new Float32Array(M*S*g),P=new Float32Array(m*S*g),A=new Float32Array(f*S*g);for(let F=0;F<g;F++){const D=F%3*2/3-1,G=F>2?0:-1,T=[D,G,0,D+2/3,G,0,D+2/3,G+1,0,D,G,0,D+2/3,G+1,0,D,G+1,0];U.set(T,M*S*F),P.set(p,m*S*F);const y=[F,F,F,F,F,F];A.set(y,f*S*F)}const V=new gn;V.setAttribute("position",new tn(U,M)),V.setAttribute("uv",new tn(P,m)),V.setAttribute("faceIndex",new tn(A,f)),e.push(V),r>ci&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yo(i,e,t){const n=new Wn(i,e,t);return n.texture.mapping=Rr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Sf(i,e,t){const n=new Float32Array(zn),r=new q(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uo(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function jo(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ko(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function uo(){return`

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
	`}function yf(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,d=c===Es||c===Ts,u=c===pi||c===mi;if(d||u){let h=e.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new $o(i)),h=d?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const g=a.image;return d&&g&&g.height>0||u&&g&&r(g)?(t===null&&(t=new $o(i)),h=d?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const d=6;for(let u=0;u<d;u++)a[u]!==void 0&&c++;return c===d}function s(a){const c=a.target;c.removeEventListener("dispose",s);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Mf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&li("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ef(i,e,t,n){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const S in p.attributes)e.remove(p.attributes[S]);p.removeEventListener("dispose",o),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function c(h){const p=h.attributes;for(const g in p)e.update(p[g],i.ARRAY_BUFFER)}function d(h){const p=[],g=h.index,S=h.attributes.position;let M=0;if(g!==null){const U=g.array;M=g.version;for(let P=0,A=U.length;P<A;P+=3){const V=U[P+0],F=U[P+1],D=U[P+2];p.push(V,F,F,D,D,V)}}else if(S!==void 0){const U=S.array;M=S.version;for(let P=0,A=U.length/3-1;P<A;P+=3){const V=P+0,F=P+1,D=P+2;p.push(V,F,F,D,D,V)}}else return;const m=new(La(p)?ka:Oa)(p,1);m.version=M;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const p=s.get(h);if(p){const g=h.index;g!==null&&p.version<g.version&&d(h)}else d(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Tf(i,e,t){let n;function r(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,g){i.drawElements(n,g,s,p*o),t.update(g,n,1)}function d(p,g,S){S!==0&&(i.drawElementsInstanced(n,g,s,p*o,S),t.update(g,n,S))}function u(p,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,p,0,S);let m=0;for(let f=0;f<S;f++)m+=g[f];t.update(m,n,1)}function h(p,g,S,M){if(S===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)d(p[f]/o,g[f],M[f]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,s,p,0,M,0,S);let f=0;for(let U=0;U<S;U++)f+=g[U]*M[U];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=d,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function bf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function wf(i,e,t){const n=new WeakMap,r=new mt;function s(o,a,c){const d=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let p=n.get(a);if(p===void 0||p.count!==h){let y=function(){G.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var g=y;p!==void 0&&p.texture.dispose();const S=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],U=a.morphAttributes.normal||[],P=a.morphAttributes.color||[];let A=0;S===!0&&(A=1),M===!0&&(A=2),m===!0&&(A=3);let V=a.attributes.position.count*A,F=1;V>e.maxTextureSize&&(F=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const D=new Float32Array(V*F*4*h),G=new Ua(D,V,F,h);G.type=dn,G.needsUpdate=!0;const T=A*4;for(let O=0;O<h;O++){const J=f[O],Y=U[O],ie=P[O],re=V*F*4*O;for(let ee=0;ee<J.count;ee++){const ae=ee*T;S===!0&&(r.fromBufferAttribute(J,ee),D[re+ae+0]=r.x,D[re+ae+1]=r.y,D[re+ae+2]=r.z,D[re+ae+3]=0),M===!0&&(r.fromBufferAttribute(Y,ee),D[re+ae+4]=r.x,D[re+ae+5]=r.y,D[re+ae+6]=r.z,D[re+ae+7]=0),m===!0&&(r.fromBufferAttribute(ie,ee),D[re+ae+8]=r.x,D[re+ae+9]=r.y,D[re+ae+10]=r.z,D[re+ae+11]=ie.itemSize===4?r.w:1)}}p={count:h,texture:G,size:new ut(V,F)},n.set(a,p),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let S=0;for(let m=0;m<d.length;m++)S+=d[m];const M=a.morphTargetsRelative?1:1-S;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",d)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Af(i,e,t,n){let r=new WeakMap;function s(c){const d=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==d&&(e.update(h),r.set(h,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==d&&(p.update(),r.set(p,d))}return h}function o(){r=new WeakMap}function a(c){const d=c.target;d.removeEventListener("dispose",a),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const $a=new Rt,Zo=new Wa(1,1),Ya=new Ua,ja=new ec,Ka=new Ha,Jo=[],Qo=[],ea=new Float32Array(16),ta=new Float32Array(9),na=new Float32Array(4);function Mi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Jo[r];if(s===void 0&&(s=new Float32Array(r),Jo[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Dr(i,e){let t=Qo[e];t===void 0&&(t=new Int32Array(e),Qo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function Pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function Lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function Df(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;na.set(n),i.uniformMatrix2fv(this.addr,!1,na),St(t,n)}}function Uf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;ta.set(n),i.uniformMatrix3fv(this.addr,!1,ta),St(t,n)}}function If(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;ea.set(n),i.uniformMatrix4fv(this.addr,!1,ea),St(t,n)}}function Nf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function Of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function Bf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function Hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function Gf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Zo.compareFunction=Pa,s=Zo):s=$a,t.setTexture2D(e||s,r)}function Wf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ja,r)}function Xf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ka,r)}function qf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ya,r)}function $f(i){switch(i){case 5126:return Cf;case 35664:return Rf;case 35665:return Pf;case 35666:return Lf;case 35674:return Df;case 35675:return Uf;case 35676:return If;case 5124:case 35670:return Nf;case 35667:case 35671:return Ff;case 35668:case 35672:return Of;case 35669:case 35673:return kf;case 5125:return Bf;case 36294:return zf;case 36295:return Hf;case 36296:return Vf;case 35678:case 36198:case 36298:case 36306:case 35682:return Gf;case 35679:case 36299:case 36307:return Wf;case 35680:case 36300:case 36308:case 36293:return Xf;case 36289:case 36303:case 36311:case 36292:return qf}}function Yf(i,e){i.uniform1fv(this.addr,e)}function jf(i,e){const t=Mi(e,this.size,2);i.uniform2fv(this.addr,t)}function Kf(i,e){const t=Mi(e,this.size,3);i.uniform3fv(this.addr,t)}function Zf(i,e){const t=Mi(e,this.size,4);i.uniform4fv(this.addr,t)}function Jf(i,e){const t=Mi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qf(i,e){const t=Mi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function eh(i,e){const t=Mi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function th(i,e){i.uniform1iv(this.addr,e)}function nh(i,e){i.uniform2iv(this.addr,e)}function ih(i,e){i.uniform3iv(this.addr,e)}function rh(i,e){i.uniform4iv(this.addr,e)}function sh(i,e){i.uniform1uiv(this.addr,e)}function oh(i,e){i.uniform2uiv(this.addr,e)}function ah(i,e){i.uniform3uiv(this.addr,e)}function lh(i,e){i.uniform4uiv(this.addr,e)}function ch(i,e,t){const n=this.cache,r=e.length,s=Dr(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||$a,s[o])}function uh(i,e,t){const n=this.cache,r=e.length,s=Dr(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ja,s[o])}function dh(i,e,t){const n=this.cache,r=e.length,s=Dr(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Ka,s[o])}function fh(i,e,t){const n=this.cache,r=e.length,s=Dr(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ya,s[o])}function hh(i){switch(i){case 5126:return Yf;case 35664:return jf;case 35665:return Kf;case 35666:return Zf;case 35674:return Jf;case 35675:return Qf;case 35676:return eh;case 5124:case 35670:return th;case 35667:case 35671:return nh;case 35668:case 35672:return ih;case 35669:case 35673:return rh;case 5125:return sh;case 36294:return oh;case 36295:return ah;case 36296:return lh;case 35678:case 36198:case 36298:case 36306:case 35682:return ch;case 35679:case 36299:case 36307:return uh;case 35680:case 36300:case 36308:case 36293:return dh;case 36289:case 36303:case 36311:case 36292:return fh}}class ph{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$f(t.type)}}class mh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hh(t.type)}}class gh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const ds=/(\w+)(\])?(\[|\.)?/g;function ia(i,e){i.seq.push(e),i.map[e.id]=e}function _h(i,e,t){const n=i.name,r=n.length;for(ds.lastIndex=0;;){const s=ds.exec(n),o=ds.lastIndex;let a=s[1];const c=s[2]==="]",d=s[3];if(c&&(a=a|0),d===void 0||d==="["&&o+2===r){ia(t,d===void 0?new ph(a,i,e):new mh(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new gh(a),ia(t,h)),t=h}}}class Er{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_h(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function ra(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const vh=37297;let xh=0;function Sh(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const sa=new Xe;function yh(i){nt._getMatrix(sa,nt.workingColorSpace,i);const e=`mat3( ${sa.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Tr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function oa(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Sh(i.getShaderSource(e),o)}else return r}function Mh(i,e){const t=yh(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Eh(i,e){let t;switch(e){case bl:t="Linear";break;case wl:t="Reinhard";break;case Al:t="Cineon";break;case Cl:t="ACESFilmic";break;case Pl:t="AgX";break;case Ll:t="Neutral";break;case Rl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mr=new q;function Th(){nt.getLuminanceCoefficients(mr);const i=mr.x.toFixed(4),e=mr.y.toFixed(4),t=mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bh(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ui).join(`
`)}function wh(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ah(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ui(i){return i!==""}function aa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function la(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ch=/^[ \t]*#include +<([\w\d./]+)>/gm;function eo(i){return i.replace(Ch,Ph)}const Rh=new Map;function Ph(i,e){let t=$e[e];if(t===void 0){const n=Rh.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return eo(t)}const Lh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ca(i){return i.replace(Lh,Dh)}function Dh(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ua(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Uh(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_a?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===rl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ih(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case Rr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nh(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function Fh(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case va:e="ENVMAP_BLENDING_MULTIPLY";break;case El:e="ENVMAP_BLENDING_MIX";break;case Tl:e="ENVMAP_BLENDING_ADD";break}return e}function Oh(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function kh(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Uh(t),d=Ih(t),u=Nh(t),h=Fh(t),p=Oh(t),g=bh(t),S=wh(s),M=r.createProgram();let m,f,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Ui).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Ui).join(`
`),f.length>0&&(f+=`
`)):(m=[ua(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),f=[ua(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?$e.tonemapping_pars_fragment:"",t.toneMapping!==wn?Eh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Mh("linearToOutputTexel",t.outputColorSpace),Th(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ui).join(`
`)),o=eo(o),o=aa(o,t),o=la(o,t),a=eo(a),a=aa(a,t),a=la(a,t),o=ca(o),a=ca(a),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===So?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===So?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const P=U+m+o,A=U+f+a,V=ra(r,r.VERTEX_SHADER,P),F=ra(r,r.FRAGMENT_SHADER,A);r.attachShader(M,V),r.attachShader(M,F),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function D(O){if(i.debug.checkShaderErrors){const J=r.getProgramInfoLog(M).trim(),Y=r.getShaderInfoLog(V).trim(),ie=r.getShaderInfoLog(F).trim();let re=!0,ee=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,V,F);else{const ae=oa(r,V,"vertex"),K=oa(r,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+J+`
`+ae+`
`+K)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Y===""||ie==="")&&(ee=!1);ee&&(O.diagnostics={runnable:re,programLog:J,vertexShader:{log:Y,prefix:m},fragmentShader:{log:ie,prefix:f}})}r.deleteShader(V),r.deleteShader(F),G=new Er(r,M),T=Ah(r,M)}let G;this.getUniforms=function(){return G===void 0&&D(this),G};let T;this.getAttributes=function(){return T===void 0&&D(this),T};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(M,vh)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xh++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=V,this.fragmentShader=F,this}let Bh=0;class zh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hh(e),t.set(e,n)),n}}class Hh{constructor(e){this.id=Bh++,this.code=e,this.usedTimes=0}}function Vh(i,e,t,n,r,s,o){const a=new Na,c=new zh,d=new Set,u=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return d.add(T),T===0?"uv":`uv${T}`}function m(T,y,O,J,Y){const ie=J.fog,re=Y.geometry,ee=T.isMeshStandardMaterial?J.environment:null,ae=(T.isMeshStandardMaterial?t:e).get(T.envMap||ee),K=ae&&ae.mapping===Rr?ae.image.height:null,_e=S[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const ye=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,De=ye!==void 0?ye.length:0;let qe=0;re.morphAttributes.position!==void 0&&(qe=1),re.morphAttributes.normal!==void 0&&(qe=2),re.morphAttributes.color!==void 0&&(qe=3);let it,L,le,be;if(_e){const rt=Jt[_e];it=rt.vertexShader,L=rt.fragmentShader}else it=T.vertexShader,L=T.fragmentShader,c.update(T),le=c.getVertexShaderID(T),be=c.getFragmentShaderID(T);const pe=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),Be=Y.isInstancedMesh===!0,Ae=Y.isBatchedMesh===!0,He=!!T.map,Ie=!!T.matcap,dt=!!ae,I=!!T.aoMap,Tt=!!T.lightMap,je=!!T.bumpMap,Ye=!!T.normalMap,Pe=!!T.displacementMap,ct=!!T.emissiveMap,Ce=!!T.metalnessMap,w=!!T.roughnessMap,x=T.anisotropy>0,X=T.clearcoat>0,te=T.dispersion>0,oe=T.iridescence>0,Q=T.sheen>0,Re=T.transmission>0,xe=x&&!!T.anisotropyMap,Me=X&&!!T.clearcoatMap,We=X&&!!T.clearcoatNormalMap,ce=X&&!!T.clearcoatRoughnessMap,Ee=oe&&!!T.iridescenceMap,Ne=oe&&!!T.iridescenceThicknessMap,ze=Q&&!!T.sheenColorMap,Te=Q&&!!T.sheenRoughnessMap,Ke=!!T.specularMap,Ve=!!T.specularColorMap,at=!!T.specularIntensityMap,B=Re&&!!T.transmissionMap,ve=Re&&!!T.thicknessMap,j=!!T.gradientMap,ne=!!T.alphaMap,Se=T.alphaTest>0,he=!!T.alphaHash,Ge=!!T.extensions;let ft=wn;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ft=i.toneMapping);const yt={shaderID:_e,shaderType:T.type,shaderName:T.name,vertexShader:it,fragmentShader:L,defines:T.defines,customVertexShaderID:le,customFragmentShaderID:be,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ae,batchingColor:Ae&&Y._colorsTexture!==null,instancing:Be,instancingColor:Be&&Y.instanceColor!==null,instancingMorph:Be&&Y.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:vi,alphaToCoverage:!!T.alphaToCoverage,map:He,matcap:Ie,envMap:dt,envMapMode:dt&&ae.mapping,envMapCubeUVHeight:K,aoMap:I,lightMap:Tt,bumpMap:je,normalMap:Ye,displacementMap:p&&Pe,emissiveMap:ct,normalMapObjectSpace:Ye&&T.normalMapType===Fl,normalMapTangentSpace:Ye&&T.normalMapType===Nl,metalnessMap:Ce,roughnessMap:w,anisotropy:x,anisotropyMap:xe,clearcoat:X,clearcoatMap:Me,clearcoatNormalMap:We,clearcoatRoughnessMap:ce,dispersion:te,iridescence:oe,iridescenceMap:Ee,iridescenceThicknessMap:Ne,sheen:Q,sheenColorMap:ze,sheenRoughnessMap:Te,specularMap:Ke,specularColorMap:Ve,specularIntensityMap:at,transmission:Re,transmissionMap:B,thicknessMap:ve,gradientMap:j,opaque:T.transparent===!1&&T.blending===ui&&T.alphaToCoverage===!1,alphaMap:ne,alphaTest:Se,alphaHash:he,combine:T.combine,mapUv:He&&M(T.map.channel),aoMapUv:I&&M(T.aoMap.channel),lightMapUv:Tt&&M(T.lightMap.channel),bumpMapUv:je&&M(T.bumpMap.channel),normalMapUv:Ye&&M(T.normalMap.channel),displacementMapUv:Pe&&M(T.displacementMap.channel),emissiveMapUv:ct&&M(T.emissiveMap.channel),metalnessMapUv:Ce&&M(T.metalnessMap.channel),roughnessMapUv:w&&M(T.roughnessMap.channel),anisotropyMapUv:xe&&M(T.anisotropyMap.channel),clearcoatMapUv:Me&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:We&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Te&&M(T.sheenRoughnessMap.channel),specularMapUv:Ke&&M(T.specularMap.channel),specularColorMapUv:Ve&&M(T.specularColorMap.channel),specularIntensityMapUv:at&&M(T.specularIntensityMap.channel),transmissionMapUv:B&&M(T.transmissionMap.channel),thicknessMapUv:ve&&M(T.thicknessMap.channel),alphaMapUv:ne&&M(T.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Ye||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!re.attributes.uv&&(He||ne),fog:!!ie,useFog:T.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Fe,skinning:Y.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:qe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:He&&T.map.isVideoTexture===!0&&nt.getTransfer(T.map.colorSpace)===lt,decodeVideoTextureEmissive:ct&&T.emissiveMap.isVideoTexture===!0&&nt.getTransfer(T.emissiveMap.colorSpace)===lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===un,flipSided:T.side===Ut,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return yt.vertexUv1s=d.has(1),yt.vertexUv2s=d.has(2),yt.vertexUv3s=d.has(3),d.clear(),yt}function f(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const O in T.defines)y.push(O),y.push(T.defines[O]);return T.isRawShaderMaterial===!1&&(U(y,T),P(y,T),y.push(i.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function U(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function P(T,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),T.push(a.mask)}function A(T){const y=S[T.type];let O;if(y){const J=Jt[y];O=fc.clone(J.uniforms)}else O=T.uniforms;return O}function V(T,y){let O;for(let J=0,Y=u.length;J<Y;J++){const ie=u[J];if(ie.cacheKey===y){O=ie,++O.usedTimes;break}}return O===void 0&&(O=new kh(i,y,T,s),u.push(O)),O}function F(T){if(--T.usedTimes===0){const y=u.indexOf(T);u[y]=u[u.length-1],u.pop(),T.destroy()}}function D(T){c.remove(T)}function G(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:A,acquireProgram:V,releaseProgram:F,releaseShaderCache:D,programs:u,dispose:G}}function Gh(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Wh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function da(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fa(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,p,g,S,M,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:g,groupOrder:S,renderOrder:h.renderOrder,z:M,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=g,f.groupOrder=S,f.renderOrder=h.renderOrder,f.z=M,f.group=m),e++,f}function a(h,p,g,S,M,m){const f=o(h,p,g,S,M,m);g.transmission>0?n.push(f):g.transparent===!0?r.push(f):t.push(f)}function c(h,p,g,S,M,m){const f=o(h,p,g,S,M,m);g.transmission>0?n.unshift(f):g.transparent===!0?r.unshift(f):t.unshift(f)}function d(h,p){t.length>1&&t.sort(h||Wh),n.length>1&&n.sort(p||da),r.length>1&&r.sort(p||da)}function u(){for(let h=e,p=i.length;h<p;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:d}}function Xh(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new fa,i.set(n,[o])):r>=s.length?(o=new fa,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function qh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new ot};break;case"SpotLight":t={position:new q,direction:new q,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":t={color:new ot,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function $h(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Yh=0;function jh(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kh(i){const e=new qh,t=$h(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new q);const r=new q,s=new gt,o=new gt;function a(d){let u=0,h=0,p=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let g=0,S=0,M=0,m=0,f=0,U=0,P=0,A=0,V=0,F=0,D=0;d.sort(jh);for(let T=0,y=d.length;T<y;T++){const O=d[T],J=O.color,Y=O.intensity,ie=O.distance,re=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=J.r*Y,h+=J.g*Y,p+=J.b*Y;else if(O.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(O.sh.coefficients[ee],Y);D++}else if(O.isDirectionalLight){const ee=e.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const ae=O.shadow,K=t.get(O);K.shadowIntensity=ae.intensity,K.shadowBias=ae.bias,K.shadowNormalBias=ae.normalBias,K.shadowRadius=ae.radius,K.shadowMapSize=ae.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=re,n.directionalShadowMatrix[g]=O.shadow.matrix,U++}n.directional[g]=ee,g++}else if(O.isSpotLight){const ee=e.get(O);ee.position.setFromMatrixPosition(O.matrixWorld),ee.color.copy(J).multiplyScalar(Y),ee.distance=ie,ee.coneCos=Math.cos(O.angle),ee.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ee.decay=O.decay,n.spot[M]=ee;const ae=O.shadow;if(O.map&&(n.spotLightMap[V]=O.map,V++,ae.updateMatrices(O),O.castShadow&&F++),n.spotLightMatrix[M]=ae.matrix,O.castShadow){const K=t.get(O);K.shadowIntensity=ae.intensity,K.shadowBias=ae.bias,K.shadowNormalBias=ae.normalBias,K.shadowRadius=ae.radius,K.shadowMapSize=ae.mapSize,n.spotShadow[M]=K,n.spotShadowMap[M]=re,A++}M++}else if(O.isRectAreaLight){const ee=e.get(O);ee.color.copy(J).multiplyScalar(Y),ee.halfWidth.set(O.width*.5,0,0),ee.halfHeight.set(0,O.height*.5,0),n.rectArea[m]=ee,m++}else if(O.isPointLight){const ee=e.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity),ee.distance=O.distance,ee.decay=O.decay,O.castShadow){const ae=O.shadow,K=t.get(O);K.shadowIntensity=ae.intensity,K.shadowBias=ae.bias,K.shadowNormalBias=ae.normalBias,K.shadowRadius=ae.radius,K.shadowMapSize=ae.mapSize,K.shadowCameraNear=ae.camera.near,K.shadowCameraFar=ae.camera.far,n.pointShadow[S]=K,n.pointShadowMap[S]=re,n.pointShadowMatrix[S]=O.shadow.matrix,P++}n.point[S]=ee,S++}else if(O.isHemisphereLight){const ee=e.get(O);ee.skyColor.copy(O.color).multiplyScalar(Y),ee.groundColor.copy(O.groundColor).multiplyScalar(Y),n.hemi[f]=ee,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=p;const G=n.hash;(G.directionalLength!==g||G.pointLength!==S||G.spotLength!==M||G.rectAreaLength!==m||G.hemiLength!==f||G.numDirectionalShadows!==U||G.numPointShadows!==P||G.numSpotShadows!==A||G.numSpotMaps!==V||G.numLightProbes!==D)&&(n.directional.length=g,n.spot.length=M,n.rectArea.length=m,n.point.length=S,n.hemi.length=f,n.directionalShadow.length=U,n.directionalShadowMap.length=U,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=U,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=A+V-F,n.spotLightMap.length=V,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=D,G.directionalLength=g,G.pointLength=S,G.spotLength=M,G.rectAreaLength=m,G.hemiLength=f,G.numDirectionalShadows=U,G.numPointShadows=P,G.numSpotShadows=A,G.numSpotMaps=V,G.numLightProbes=D,n.version=Yh++)}function c(d,u){let h=0,p=0,g=0,S=0,M=0;const m=u.matrixWorldInverse;for(let f=0,U=d.length;f<U;f++){const P=d[f];if(P.isDirectionalLight){const A=n.directional[h];A.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),h++}else if(P.isSpotLight){const A=n.spot[g];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),g++}else if(P.isRectAreaLight){const A=n.rectArea[S];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(m),o.identity(),s.copy(P.matrixWorld),s.premultiply(m),o.extractRotation(s),A.halfWidth.set(P.width*.5,0,0),A.halfHeight.set(0,P.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),S++}else if(P.isPointLight){const A=n.point[p];A.position.setFromMatrixPosition(P.matrixWorld),A.position.applyMatrix4(m),p++}else if(P.isHemisphereLight){const A=n.hemi[M];A.direction.setFromMatrixPosition(P.matrixWorld),A.direction.transformDirection(m),M++}}}return{setup:a,setupView:c,state:n}}function ha(i){const e=new Kh(i),t=[],n=[];function r(u){d.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Zh(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ha(i),e.set(r,[a])):s>=o.length?(a=new ha(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Jh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qh=`uniform sampler2D shadow_pass;
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
}`;function ep(i,e,t){let n=new Va;const r=new ut,s=new ut,o=new mt,a=new Ec({depthPacking:Il}),c=new Tc,d={},u=t.maxTextureSize,h={[Cn]:Ut,[Ut]:Cn,[un]:un},p=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Jh,fragmentShader:Qh}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const S=new gn;S.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new en(S,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_a;let f=this.type;this.render=function(F,D,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||F.length===0)return;const T=i.getRenderTarget(),y=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),J=i.state;J.setBlending(bn),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Y=f!==cn&&this.type===cn,ie=f===cn&&this.type!==cn;for(let re=0,ee=F.length;re<ee;re++){const ae=F[re],K=ae.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const _e=K.getFrameExtents();if(r.multiply(_e),s.copy(K.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/_e.x),r.x=s.x*_e.x,K.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/_e.y),r.y=s.y*_e.y,K.mapSize.y=s.y)),K.map===null||Y===!0||ie===!0){const De=this.type!==cn?{minFilter:Zt,magFilter:Zt}:{};K.map!==null&&K.map.dispose(),K.map=new Wn(r.x,r.y,De),K.map.texture.name=ae.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const ye=K.getViewportCount();for(let De=0;De<ye;De++){const qe=K.getViewport(De);o.set(s.x*qe.x,s.y*qe.y,s.x*qe.z,s.y*qe.w),J.viewport(o),K.updateMatrices(ae,De),n=K.getFrustum(),A(D,G,K.camera,ae,this.type)}K.isPointLightShadow!==!0&&this.type===cn&&U(K,G),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,y,O)};function U(F,D){const G=e.update(M);p.defines.VSM_SAMPLES!==F.blurSamples&&(p.defines.VSM_SAMPLES=F.blurSamples,g.defines.VSM_SAMPLES=F.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Wn(r.x,r.y)),p.uniforms.shadow_pass.value=F.map.texture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(D,null,G,p,M,null),g.uniforms.shadow_pass.value=F.mapPass.texture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(D,null,G,g,M,null)}function P(F,D,G,T){let y=null;const O=G.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(O!==void 0)y=O;else if(y=G.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const J=y.uuid,Y=D.uuid;let ie=d[J];ie===void 0&&(ie={},d[J]=ie);let re=ie[Y];re===void 0&&(re=y.clone(),ie[Y]=re,D.addEventListener("dispose",V)),y=re}if(y.visible=D.visible,y.wireframe=D.wireframe,T===cn?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:h[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,G.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const J=i.properties.get(y);J.light=G}return y}function A(F,D,G,T,y){if(F.visible===!1)return;if(F.layers.test(D.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&y===cn)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,F.matrixWorld);const Y=e.update(F),ie=F.material;if(Array.isArray(ie)){const re=Y.groups;for(let ee=0,ae=re.length;ee<ae;ee++){const K=re[ee],_e=ie[K.materialIndex];if(_e&&_e.visible){const ye=P(F,_e,T,y);F.onBeforeShadow(i,F,D,G,Y,ye,K),i.renderBufferDirect(G,null,Y,ye,F,K),F.onAfterShadow(i,F,D,G,Y,ye,K)}}}else if(ie.visible){const re=P(F,ie,T,y);F.onBeforeShadow(i,F,D,G,Y,re,null),i.renderBufferDirect(G,null,Y,re,F,null),F.onAfterShadow(i,F,D,G,Y,re,null)}}const J=F.children;for(let Y=0,ie=J.length;Y<ie;Y++)A(J[Y],D,G,T,y)}function V(F){F.target.removeEventListener("dispose",V);for(const G in d){const T=d[G],y=F.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}const tp={[gs]:_s,[vs]:ys,[xs]:Ms,[hi]:Ss,[_s]:gs,[ys]:vs,[Ms]:xs,[Ss]:hi};function np(i,e){function t(){let B=!1;const ve=new mt;let j=null;const ne=new mt(0,0,0,0);return{setMask:function(Se){j!==Se&&!B&&(i.colorMask(Se,Se,Se,Se),j=Se)},setLocked:function(Se){B=Se},setClear:function(Se,he,Ge,ft,yt){yt===!0&&(Se*=ft,he*=ft,Ge*=ft),ve.set(Se,he,Ge,ft),ne.equals(ve)===!1&&(i.clearColor(Se,he,Ge,ft),ne.copy(ve))},reset:function(){B=!1,j=null,ne.set(-1,0,0,0)}}}function n(){let B=!1,ve=!1,j=null,ne=null,Se=null;return{setReversed:function(he){if(ve!==he){const Ge=e.get("EXT_clip_control");ve?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const ft=Se;Se=null,this.setClear(ft)}ve=he},getReversed:function(){return ve},setTest:function(he){he?pe(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(he){j!==he&&!B&&(i.depthMask(he),j=he)},setFunc:function(he){if(ve&&(he=tp[he]),ne!==he){switch(he){case gs:i.depthFunc(i.NEVER);break;case _s:i.depthFunc(i.ALWAYS);break;case vs:i.depthFunc(i.LESS);break;case hi:i.depthFunc(i.LEQUAL);break;case xs:i.depthFunc(i.EQUAL);break;case Ss:i.depthFunc(i.GEQUAL);break;case ys:i.depthFunc(i.GREATER);break;case Ms:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ne=he}},setLocked:function(he){B=he},setClear:function(he){Se!==he&&(ve&&(he=1-he),i.clearDepth(he),Se=he)},reset:function(){B=!1,j=null,ne=null,Se=null,ve=!1}}}function r(){let B=!1,ve=null,j=null,ne=null,Se=null,he=null,Ge=null,ft=null,yt=null;return{setTest:function(rt){B||(rt?pe(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(rt){ve!==rt&&!B&&(i.stencilMask(rt),ve=rt)},setFunc:function(rt,Pt,kt){(j!==rt||ne!==Pt||Se!==kt)&&(i.stencilFunc(rt,Pt,kt),j=rt,ne=Pt,Se=kt)},setOp:function(rt,Pt,kt){(he!==rt||Ge!==Pt||ft!==kt)&&(i.stencilOp(rt,Pt,kt),he=rt,Ge=Pt,ft=kt)},setLocked:function(rt){B=rt},setClear:function(rt){yt!==rt&&(i.clearStencil(rt),yt=rt)},reset:function(){B=!1,ve=null,j=null,ne=null,Se=null,he=null,Ge=null,ft=null,yt=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,d=new WeakMap;let u={},h={},p=new WeakMap,g=[],S=null,M=!1,m=null,f=null,U=null,P=null,A=null,V=null,F=null,D=new ot(0,0,0),G=0,T=!1,y=null,O=null,J=null,Y=null,ie=null;const re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,ae=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(K)[1]),ee=ae>=1):K.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),ee=ae>=2);let _e=null,ye={};const De=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),it=new mt().fromArray(De),L=new mt().fromArray(qe);function le(B,ve,j,ne){const Se=new Uint8Array(4),he=i.createTexture();i.bindTexture(B,he),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<j;Ge++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(ve+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return he}const be={};be[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),o.setFunc(hi),je(!1),Ye(po),pe(i.CULL_FACE),I(bn);function pe(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function Fe(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Be(B,ve){return h[B]!==ve?(i.bindFramebuffer(B,ve),h[B]=ve,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ae(B,ve){let j=g,ne=!1;if(B){j=p.get(ve),j===void 0&&(j=[],p.set(ve,j));const Se=B.textures;if(j.length!==Se.length||j[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Ge=Se.length;he<Ge;he++)j[he]=i.COLOR_ATTACHMENT0+he;j.length=Se.length,ne=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ne=!0);ne&&i.drawBuffers(j)}function He(B){return S!==B?(i.useProgram(B),S=B,!0):!1}const Ie={[Bn]:i.FUNC_ADD,[ol]:i.FUNC_SUBTRACT,[al]:i.FUNC_REVERSE_SUBTRACT};Ie[ll]=i.MIN,Ie[cl]=i.MAX;const dt={[ul]:i.ZERO,[dl]:i.ONE,[fl]:i.SRC_COLOR,[ps]:i.SRC_ALPHA,[vl]:i.SRC_ALPHA_SATURATE,[gl]:i.DST_COLOR,[pl]:i.DST_ALPHA,[hl]:i.ONE_MINUS_SRC_COLOR,[ms]:i.ONE_MINUS_SRC_ALPHA,[_l]:i.ONE_MINUS_DST_COLOR,[ml]:i.ONE_MINUS_DST_ALPHA,[xl]:i.CONSTANT_COLOR,[Sl]:i.ONE_MINUS_CONSTANT_COLOR,[yl]:i.CONSTANT_ALPHA,[Ml]:i.ONE_MINUS_CONSTANT_ALPHA};function I(B,ve,j,ne,Se,he,Ge,ft,yt,rt){if(B===bn){M===!0&&(Fe(i.BLEND),M=!1);return}if(M===!1&&(pe(i.BLEND),M=!0),B!==sl){if(B!==m||rt!==T){if((f!==Bn||A!==Bn)&&(i.blendEquation(i.FUNC_ADD),f=Bn,A=Bn),rt)switch(B){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFunc(i.ONE,i.ONE);break;case go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _o:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _o:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}U=null,P=null,V=null,F=null,D.set(0,0,0),G=0,m=B,T=rt}return}Se=Se||ve,he=he||j,Ge=Ge||ne,(ve!==f||Se!==A)&&(i.blendEquationSeparate(Ie[ve],Ie[Se]),f=ve,A=Se),(j!==U||ne!==P||he!==V||Ge!==F)&&(i.blendFuncSeparate(dt[j],dt[ne],dt[he],dt[Ge]),U=j,P=ne,V=he,F=Ge),(ft.equals(D)===!1||yt!==G)&&(i.blendColor(ft.r,ft.g,ft.b,yt),D.copy(ft),G=yt),m=B,T=!1}function Tt(B,ve){B.side===un?Fe(i.CULL_FACE):pe(i.CULL_FACE);let j=B.side===Ut;ve&&(j=!j),je(j),B.blending===ui&&B.transparent===!1?I(bn):I(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const ne=B.stencilWrite;a.setTest(ne),ne&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ct(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(B){y!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),y=B)}function Ye(B){B!==nl?(pe(i.CULL_FACE),B!==O&&(B===po?i.cullFace(i.BACK):B===il?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),O=B}function Pe(B){B!==J&&(ee&&i.lineWidth(B),J=B)}function ct(B,ve,j){B?(pe(i.POLYGON_OFFSET_FILL),(Y!==ve||ie!==j)&&(i.polygonOffset(ve,j),Y=ve,ie=j)):Fe(i.POLYGON_OFFSET_FILL)}function Ce(B){B?pe(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function w(B){B===void 0&&(B=i.TEXTURE0+re-1),_e!==B&&(i.activeTexture(B),_e=B)}function x(B,ve,j){j===void 0&&(_e===null?j=i.TEXTURE0+re-1:j=_e);let ne=ye[j];ne===void 0&&(ne={type:void 0,texture:void 0},ye[j]=ne),(ne.type!==B||ne.texture!==ve)&&(_e!==j&&(i.activeTexture(j),_e=j),i.bindTexture(B,ve||be[B]),ne.type=B,ne.texture=ve)}function X(){const B=ye[_e];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function We(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ze(B){it.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),it.copy(B))}function Te(B){L.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),L.copy(B))}function Ke(B,ve){let j=d.get(ve);j===void 0&&(j=new WeakMap,d.set(ve,j));let ne=j.get(B);ne===void 0&&(ne=i.getUniformBlockIndex(ve,B.name),j.set(B,ne))}function Ve(B,ve){const ne=d.get(ve).get(B);c.get(ve)!==ne&&(i.uniformBlockBinding(ve,ne,B.__bindingPointIndex),c.set(ve,ne))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},_e=null,ye={},h={},p=new WeakMap,g=[],S=null,M=!1,m=null,f=null,U=null,P=null,A=null,V=null,F=null,D=new ot(0,0,0),G=0,T=!1,y=null,O=null,J=null,Y=null,ie=null,it.set(0,0,i.canvas.width,i.canvas.height),L.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:pe,disable:Fe,bindFramebuffer:Be,drawBuffers:Ae,useProgram:He,setBlending:I,setMaterial:Tt,setFlipSided:je,setCullFace:Ye,setLineWidth:Pe,setPolygonOffset:ct,setScissorTest:Ce,activeTexture:w,bindTexture:x,unbindTexture:X,compressedTexImage2D:te,compressedTexImage3D:oe,texImage2D:Ee,texImage3D:Ne,updateUBOMapping:Ke,uniformBlockBinding:Ve,texStorage2D:We,texStorage3D:ce,texSubImage2D:Q,texSubImage3D:Re,compressedTexSubImage2D:xe,compressedTexSubImage3D:Me,scissor:ze,viewport:Te,reset:at}}function ip(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ut,u=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(w,x){return g?new OffscreenCanvas(w,x):Ni("canvas")}function M(w,x,X){let te=1;const oe=Ce(w);if((oe.width>X||oe.height>X)&&(te=X/Math.max(oe.width,oe.height)),te<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Q=Math.floor(te*oe.width),Re=Math.floor(te*oe.height);h===void 0&&(h=S(Q,Re));const xe=x?S(Q,Re):h;return xe.width=Q,xe.height=Re,xe.getContext("2d").drawImage(w,0,0,Q,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Q+"x"+Re+")."),xe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function U(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function P(w,x,X,te,oe=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Q=x;if(x===i.RED&&(X===i.FLOAT&&(Q=i.R32F),X===i.HALF_FLOAT&&(Q=i.R16F),X===i.UNSIGNED_BYTE&&(Q=i.R8)),x===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.R8UI),X===i.UNSIGNED_SHORT&&(Q=i.R16UI),X===i.UNSIGNED_INT&&(Q=i.R32UI),X===i.BYTE&&(Q=i.R8I),X===i.SHORT&&(Q=i.R16I),X===i.INT&&(Q=i.R32I)),x===i.RG&&(X===i.FLOAT&&(Q=i.RG32F),X===i.HALF_FLOAT&&(Q=i.RG16F),X===i.UNSIGNED_BYTE&&(Q=i.RG8)),x===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RG8UI),X===i.UNSIGNED_SHORT&&(Q=i.RG16UI),X===i.UNSIGNED_INT&&(Q=i.RG32UI),X===i.BYTE&&(Q=i.RG8I),X===i.SHORT&&(Q=i.RG16I),X===i.INT&&(Q=i.RG32I)),x===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),X===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),X===i.UNSIGNED_INT&&(Q=i.RGB32UI),X===i.BYTE&&(Q=i.RGB8I),X===i.SHORT&&(Q=i.RGB16I),X===i.INT&&(Q=i.RGB32I)),x===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),X===i.UNSIGNED_INT&&(Q=i.RGBA32UI),X===i.BYTE&&(Q=i.RGBA8I),X===i.SHORT&&(Q=i.RGBA16I),X===i.INT&&(Q=i.RGBA32I)),x===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),x===i.RGBA){const Re=oe?Tr:nt.getTransfer(te);X===i.FLOAT&&(Q=i.RGBA32F),X===i.HALF_FLOAT&&(Q=i.RGBA16F),X===i.UNSIGNED_BYTE&&(Q=Re===lt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function A(w,x){let X;return w?x===null||x===Gn||x===gi?X=i.DEPTH24_STENCIL8:x===dn?X=i.DEPTH32F_STENCIL8:x===Ii&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gn||x===gi?X=i.DEPTH_COMPONENT24:x===dn?X=i.DEPTH_COMPONENT32F:x===Ii&&(X=i.DEPTH_COMPONENT16),X}function V(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Zt&&w.minFilter!==Qt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function F(w){const x=w.target;x.removeEventListener("dispose",F),G(x),x.isVideoTexture&&u.delete(x)}function D(w){const x=w.target;x.removeEventListener("dispose",D),y(x)}function G(w){const x=n.get(w);if(x.__webglInit===void 0)return;const X=w.source,te=p.get(X);if(te){const oe=te[x.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&T(w),Object.keys(te).length===0&&p.delete(X)}n.remove(w)}function T(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const X=w.source,te=p.get(X);delete te[x.__cacheKey],o.memory.textures--}function y(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(x.__webglFramebuffer[te]))for(let oe=0;oe<x.__webglFramebuffer[te].length;oe++)i.deleteFramebuffer(x.__webglFramebuffer[te][oe]);else i.deleteFramebuffer(x.__webglFramebuffer[te]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[te])}else{if(Array.isArray(x.__webglFramebuffer))for(let te=0;te<x.__webglFramebuffer.length;te++)i.deleteFramebuffer(x.__webglFramebuffer[te]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let te=0;te<x.__webglColorRenderbuffer.length;te++)x.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[te]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const X=w.textures;for(let te=0,oe=X.length;te<oe;te++){const Q=n.get(X[te]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(X[te])}n.remove(w)}let O=0;function J(){O=0}function Y(){const w=O;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),O+=1,w}function ie(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function re(w,x){const X=n.get(w);if(w.isVideoTexture&&Pe(w),w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){const te=w.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{L(X,w,x);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+x)}function ee(w,x){const X=n.get(w);if(w.version>0&&X.__version!==w.version){L(X,w,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+x)}function ae(w,x){const X=n.get(w);if(w.version>0&&X.__version!==w.version){L(X,w,x);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+x)}function K(w,x){const X=n.get(w);if(w.version>0&&X.__version!==w.version){le(X,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+x)}const _e={[bs]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[ws]:i.MIRRORED_REPEAT},ye={[Zt]:i.NEAREST,[Dl]:i.NEAREST_MIPMAP_NEAREST,[Gi]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Fr]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},De={[Ol]:i.NEVER,[Gl]:i.ALWAYS,[kl]:i.LESS,[Pa]:i.LEQUAL,[Bl]:i.EQUAL,[Vl]:i.GEQUAL,[zl]:i.GREATER,[Hl]:i.NOTEQUAL};function qe(w,x){if(x.type===dn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Qt||x.magFilter===Fr||x.magFilter===Gi||x.magFilter===Vn||x.minFilter===Qt||x.minFilter===Fr||x.minFilter===Gi||x.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,_e[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,_e[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,_e[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ye[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ye[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,De[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Zt||x.minFilter!==Gi&&x.minFilter!==Vn||x.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function it(w,x){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",F));const te=x.source;let oe=p.get(te);oe===void 0&&(oe={},p.set(te,oe));const Q=ie(x);if(Q!==w.__cacheKey){oe[Q]===void 0&&(oe[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),oe[Q].usedTimes++;const Re=oe[w.__cacheKey];Re!==void 0&&(oe[w.__cacheKey].usedTimes--,Re.usedTimes===0&&T(x)),w.__cacheKey=Q,w.__webglTexture=oe[Q].texture}return X}function L(w,x,X){let te=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=i.TEXTURE_3D);const oe=it(w,x),Q=x.source;t.bindTexture(te,w.__webglTexture,i.TEXTURE0+X);const Re=n.get(Q);if(Q.version!==Re.__version||oe===!0){t.activeTexture(i.TEXTURE0+X);const xe=nt.getPrimaries(nt.workingColorSpace),Me=x.colorSpace===En?null:nt.getPrimaries(x.colorSpace),We=x.colorSpace===En||xe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ce=M(x.image,!1,r.maxTextureSize);ce=ct(x,ce);const Ee=s.convert(x.format,x.colorSpace),Ne=s.convert(x.type);let ze=P(x.internalFormat,Ee,Ne,x.colorSpace,x.isVideoTexture);qe(te,x);let Te;const Ke=x.mipmaps,Ve=x.isVideoTexture!==!0,at=Re.__version===void 0||oe===!0,B=Q.dataReady,ve=V(x,ce);if(x.isDepthTexture)ze=A(x.format===_i,x.type),at&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,ze,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,ze,ce.width,ce.height,0,Ee,Ne,null));else if(x.isDataTexture)if(Ke.length>0){Ve&&at&&t.texStorage2D(i.TEXTURE_2D,ve,ze,Ke[0].width,Ke[0].height);for(let j=0,ne=Ke.length;j<ne;j++)Te=Ke[j],Ve?B&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Te.width,Te.height,Ee,Ne,Te.data):t.texImage2D(i.TEXTURE_2D,j,ze,Te.width,Te.height,0,Ee,Ne,Te.data);x.generateMipmaps=!1}else Ve?(at&&t.texStorage2D(i.TEXTURE_2D,ve,ze,ce.width,ce.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,Ee,Ne,ce.data)):t.texImage2D(i.TEXTURE_2D,0,ze,ce.width,ce.height,0,Ee,Ne,ce.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ve&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,ze,Ke[0].width,Ke[0].height,ce.depth);for(let j=0,ne=Ke.length;j<ne;j++)if(Te=Ke[j],x.format!==Kt)if(Ee!==null)if(Ve){if(B)if(x.layerUpdates.size>0){const Se=Go(Te.width,Te.height,x.format,x.type);for(const he of x.layerUpdates){const Ge=Te.data.subarray(he*Se/Te.data.BYTES_PER_ELEMENT,(he+1)*Se/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,he,Te.width,Te.height,1,Ee,Ge)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Te.width,Te.height,ce.depth,Ee,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ze,Te.width,Te.height,ce.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Te.width,Te.height,ce.depth,Ee,Ne,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,ze,Te.width,Te.height,ce.depth,0,Ee,Ne,Te.data)}else{Ve&&at&&t.texStorage2D(i.TEXTURE_2D,ve,ze,Ke[0].width,Ke[0].height);for(let j=0,ne=Ke.length;j<ne;j++)Te=Ke[j],x.format!==Kt?Ee!==null?Ve?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Te.width,Te.height,Ee,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,j,ze,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?B&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Te.width,Te.height,Ee,Ne,Te.data):t.texImage2D(i.TEXTURE_2D,j,ze,Te.width,Te.height,0,Ee,Ne,Te.data)}else if(x.isDataArrayTexture)if(Ve){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,ze,ce.width,ce.height,ce.depth),B)if(x.layerUpdates.size>0){const j=Go(ce.width,ce.height,x.format,x.type);for(const ne of x.layerUpdates){const Se=ce.data.subarray(ne*j/ce.data.BYTES_PER_ELEMENT,(ne+1)*j/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,ce.width,ce.height,1,Ee,Ne,Se)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ee,Ne,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,ce.width,ce.height,ce.depth,0,Ee,Ne,ce.data);else if(x.isData3DTexture)Ve?(at&&t.texStorage3D(i.TEXTURE_3D,ve,ze,ce.width,ce.height,ce.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ee,Ne,ce.data)):t.texImage3D(i.TEXTURE_3D,0,ze,ce.width,ce.height,ce.depth,0,Ee,Ne,ce.data);else if(x.isFramebufferTexture){if(at)if(Ve)t.texStorage2D(i.TEXTURE_2D,ve,ze,ce.width,ce.height);else{let j=ce.width,ne=ce.height;for(let Se=0;Se<ve;Se++)t.texImage2D(i.TEXTURE_2D,Se,ze,j,ne,0,Ee,Ne,null),j>>=1,ne>>=1}}else if(Ke.length>0){if(Ve&&at){const j=Ce(Ke[0]);t.texStorage2D(i.TEXTURE_2D,ve,ze,j.width,j.height)}for(let j=0,ne=Ke.length;j<ne;j++)Te=Ke[j],Ve?B&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Ee,Ne,Te):t.texImage2D(i.TEXTURE_2D,j,ze,Ee,Ne,Te);x.generateMipmaps=!1}else if(Ve){if(at){const j=Ce(ce);t.texStorage2D(i.TEXTURE_2D,ve,ze,j.width,j.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ne,ce)}else t.texImage2D(i.TEXTURE_2D,0,ze,Ee,Ne,ce);m(x)&&f(te),Re.__version=Q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function le(w,x,X){if(x.image.length!==6)return;const te=it(w,x),oe=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+X);const Q=n.get(oe);if(oe.version!==Q.__version||te===!0){t.activeTexture(i.TEXTURE0+X);const Re=nt.getPrimaries(nt.workingColorSpace),xe=x.colorSpace===En?null:nt.getPrimaries(x.colorSpace),Me=x.colorSpace===En||Re===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const We=x.isCompressedTexture||x.image[0].isCompressedTexture,ce=x.image[0]&&x.image[0].isDataTexture,Ee=[];for(let ne=0;ne<6;ne++)!We&&!ce?Ee[ne]=M(x.image[ne],!0,r.maxCubemapSize):Ee[ne]=ce?x.image[ne].image:x.image[ne],Ee[ne]=ct(x,Ee[ne]);const Ne=Ee[0],ze=s.convert(x.format,x.colorSpace),Te=s.convert(x.type),Ke=P(x.internalFormat,ze,Te,x.colorSpace),Ve=x.isVideoTexture!==!0,at=Q.__version===void 0||te===!0,B=oe.dataReady;let ve=V(x,Ne);qe(i.TEXTURE_CUBE_MAP,x);let j;if(We){Ve&&at&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Ke,Ne.width,Ne.height);for(let ne=0;ne<6;ne++){j=Ee[ne].mipmaps;for(let Se=0;Se<j.length;Se++){const he=j[Se];x.format!==Kt?ze!==null?Ve?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,0,0,he.width,he.height,ze,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,Ke,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,0,0,he.width,he.height,ze,Te,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se,Ke,he.width,he.height,0,ze,Te,he.data)}}}else{if(j=x.mipmaps,Ve&&at){j.length>0&&ve++;const ne=Ce(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,Ke,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ce){Ve?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ee[ne].width,Ee[ne].height,ze,Te,Ee[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ke,Ee[ne].width,Ee[ne].height,0,ze,Te,Ee[ne].data);for(let Se=0;Se<j.length;Se++){const Ge=j[Se].image[ne].image;Ve?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,0,0,Ge.width,Ge.height,ze,Te,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,Ke,Ge.width,Ge.height,0,ze,Te,Ge.data)}}else{Ve?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ze,Te,Ee[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ke,ze,Te,Ee[ne]);for(let Se=0;Se<j.length;Se++){const he=j[Se];Ve?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,0,0,ze,Te,he.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Se+1,Ke,ze,Te,he.image[ne])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),Q.__version=oe.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function be(w,x,X,te,oe,Q){const Re=s.convert(X.format,X.colorSpace),xe=s.convert(X.type),Me=P(X.internalFormat,Re,xe,X.colorSpace),We=n.get(x),ce=n.get(X);if(ce.__renderTarget=x,!We.__hasExternalTextures){const Ee=Math.max(1,x.width>>Q),Ne=Math.max(1,x.height>>Q);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,Q,Me,Ee,Ne,x.depth,0,Re,xe,null):t.texImage2D(oe,Q,Me,Ee,Ne,0,Re,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ye(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,oe,ce.__webglTexture,0,je(x)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,oe,ce.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(w,x,X){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const te=x.depthTexture,oe=te&&te.isDepthTexture?te.type:null,Q=A(x.stencilBuffer,oe),Re=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=je(x);Ye(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,Q,x.width,x.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,Q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,w)}else{const te=x.textures;for(let oe=0;oe<te.length;oe++){const Q=te[oe],Re=s.convert(Q.format,Q.colorSpace),xe=s.convert(Q.type),Me=P(Q.internalFormat,Re,xe,Q.colorSpace),We=je(x);X&&Ye(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,Me,x.width,x.height):Ye(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,Me,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Me,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=n.get(x.depthTexture);te.__renderTarget=x,(!te.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),re(x.depthTexture,0);const oe=te.__webglTexture,Q=je(x);if(x.depthTexture.format===di)Ye(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(x.depthTexture.format===_i)Ye(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Be(w){const x=n.get(w),X=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const te=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){const oe=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",oe)};te.addEventListener("dispose",oe),x.__depthDisposeCallback=oe}x.__boundDepthTexture=te}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Fe(x.__webglFramebuffer,w)}else if(X){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=i.createRenderbuffer(),pe(x.__webglDepthbuffer[te],w,!1);else{const oe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),pe(x.__webglDepthbuffer,w,!1);else{const te=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(w,x,X){const te=n.get(w);x!==void 0&&be(te.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Be(w)}function He(w){const x=w.texture,X=n.get(w),te=n.get(x);w.addEventListener("dispose",D);const oe=w.textures,Q=w.isWebGLCubeRenderTarget===!0,Re=oe.length>1;if(Re||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=x.version,o.memory.textures++),Q){X.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer[xe]=[];for(let Me=0;Me<x.mipmaps.length;Me++)X.__webglFramebuffer[xe][Me]=i.createFramebuffer()}else X.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer=[];for(let xe=0;xe<x.mipmaps.length;xe++)X.__webglFramebuffer[xe]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Re)for(let xe=0,Me=oe.length;xe<Me;xe++){const We=n.get(oe[xe]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Ye(w)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let xe=0;xe<oe.length;xe++){const Me=oe[xe];X.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[xe]);const We=s.convert(Me.format,Me.colorSpace),ce=s.convert(Me.type),Ee=P(Me.internalFormat,We,ce,Me.colorSpace,w.isXRRenderTarget===!0),Ne=je(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Ee,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,X.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(X.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),qe(i.TEXTURE_CUBE_MAP,x);for(let xe=0;xe<6;xe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)be(X.__webglFramebuffer[xe][Me],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Me);else be(X.__webglFramebuffer[xe],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let xe=0,Me=oe.length;xe<Me;xe++){const We=oe[xe],ce=n.get(We);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),qe(i.TEXTURE_2D,We),be(X.__webglFramebuffer,w,We,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,0),m(We)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(xe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,te.__webglTexture),qe(xe,x),x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)be(X.__webglFramebuffer[Me],w,x,i.COLOR_ATTACHMENT0,xe,Me);else be(X.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,xe,0);m(x)&&f(xe),t.unbindTexture()}w.depthBuffer&&Be(w)}function Ie(w){const x=w.textures;for(let X=0,te=x.length;X<te;X++){const oe=x[X];if(m(oe)){const Q=U(w),Re=n.get(oe).__webglTexture;t.bindTexture(Q,Re),f(Q),t.unbindTexture()}}}const dt=[],I=[];function Tt(w){if(w.samples>0){if(Ye(w)===!1){const x=w.textures,X=w.width,te=w.height;let oe=i.COLOR_BUFFER_BIT;const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(w),xe=x.length>1;if(xe)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Me]);const We=n.get(x[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,X,te,0,0,X,te,oe,i.NEAREST),c===!0&&(dt.length=0,I.length=0,dt.push(i.COLOR_ATTACHMENT0+Me),w.depthBuffer&&w.resolveDepthBuffer===!1&&(dt.push(Q),I.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Me]);const We=n.get(x[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function je(w){return Math.min(r.maxSamples,w.samples)}function Ye(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Pe(w){const x=o.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function ct(w,x){const X=w.colorSpace,te=w.format,oe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||X!==vi&&X!==En&&(nt.getTransfer(X)===lt?(te!==Kt||oe!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),x}function Ce(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(d.width=w.naturalWidth||w.width,d.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(d.width=w.displayWidth,d.height=w.displayHeight):(d.width=w.width,d.height=w.height),d}this.allocateTextureUnit=Y,this.resetTextureUnits=J,this.setTexture2D=re,this.setTexture2DArray=ee,this.setTexture3D=ae,this.setTextureCube=K,this.rebindTextures=Ae,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ye}function rp(i,e){function t(n,r=En){let s;const o=nt.getTransfer(r);if(n===pn)return i.UNSIGNED_BYTE;if(n===ro)return i.UNSIGNED_SHORT_4_4_4_4;if(n===so)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ma)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sa)return i.BYTE;if(n===ya)return i.SHORT;if(n===Ii)return i.UNSIGNED_SHORT;if(n===io)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Fi)return i.HALF_FLOAT;if(n===Ea)return i.ALPHA;if(n===Ta)return i.RGB;if(n===Kt)return i.RGBA;if(n===ba)return i.LUMINANCE;if(n===wa)return i.LUMINANCE_ALPHA;if(n===di)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===Aa)return i.RED;if(n===oo)return i.RED_INTEGER;if(n===Ca)return i.RG;if(n===ao)return i.RG_INTEGER;if(n===lo)return i.RGBA_INTEGER;if(n===_r||n===vr||n===xr||n===Sr)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_r)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_r)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===As||n===Cs||n===Rs||n===Ps)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===As)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ps)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ls||n===Ds||n===Us)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ls||n===Ds)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Us)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Is||n===Ns||n===Fs||n===Os||n===ks||n===Bs||n===zs||n===Hs||n===Vs||n===Gs||n===Ws||n===Xs||n===qs||n===$s)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Is)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ns)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fs)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Os)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ks)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bs)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zs)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hs)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vs)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gs)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ws)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xs)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qs)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$s)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yr||n===Ys||n===js)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yr)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ys)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===js)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ra||n===Ks||n===Zs||n===Js)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===yr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ks)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Js)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const sp={type:"move"};class fs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),f=this._getHandJoint(d,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=d.joints["index-finger-tip"],h=d.joints["thumb-tip"],p=u.position.distanceTo(h.position),g=.02,S=.005;d.inputState.pinching&&p>g+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&p<=g-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),d!==null&&(d.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new cr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const op=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ap=`
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

}`;class lp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new Rt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rn({vertexShader:op,fragmentShader:ap,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new Lr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cp extends yi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,d=null,u=null,h=null,p=null,g=null,S=null;const M=new lp,m=t.getContextAttributes();let f=null,U=null;const P=[],A=[],V=new ut;let F=null;const D=new Gt;D.viewport=new mt;const G=new Gt;G.viewport=new mt;const T=[D,G],y=new Rc;let O=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let le=P[L];return le===void 0&&(le=new fs,P[L]=le),le.getTargetRaySpace()},this.getControllerGrip=function(L){let le=P[L];return le===void 0&&(le=new fs,P[L]=le),le.getGripSpace()},this.getHand=function(L){let le=P[L];return le===void 0&&(le=new fs,P[L]=le),le.getHandSpace()};function Y(L){const le=A.indexOf(L.inputSource);if(le===-1)return;const be=P[le];be!==void 0&&(be.update(L.inputSource,L.frame,d||o),be.dispatchEvent({type:L.type,data:L.inputSource}))}function ie(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",re);for(let L=0;L<P.length;L++){const le=A[L];le!==null&&(A[L]=null,P[L].disconnect(le))}O=null,J=null,M.reset(),e.setRenderTarget(f),g=null,p=null,h=null,r=null,U=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(V.width,V.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||o},this.setReferenceSpace=function(L){d=L},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return h},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",re),m.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(V),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let be=null,pe=null,Fe=null;m.depth&&(Fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=m.stencil?_i:di,pe=m.stencil?gi:Gn);const Be={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};h=new XRWebGLBinding(r,t),p=h.createProjectionLayer(Be),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),U=new Wn(p.textureWidth,p.textureHeight,{format:Kt,type:pn,depthTexture:new Wa(p.textureWidth,p.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}else{const be={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,be),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),U=new Wn(g.framebufferWidth,g.framebufferHeight,{format:Kt,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}U.isXRRenderTarget=!0,this.setFoveation(c),d=null,o=await r.requestReferenceSpace(a),it.setContext(r),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function re(L){for(let le=0;le<L.removed.length;le++){const be=L.removed[le],pe=A.indexOf(be);pe>=0&&(A[pe]=null,P[pe].disconnect(be))}for(let le=0;le<L.added.length;le++){const be=L.added[le];let pe=A.indexOf(be);if(pe===-1){for(let Be=0;Be<P.length;Be++)if(Be>=A.length){A.push(be),pe=Be;break}else if(A[Be]===null){A[Be]=be,pe=Be;break}if(pe===-1)break}const Fe=P[pe];Fe&&Fe.connect(be)}}const ee=new q,ae=new q;function K(L,le,be){ee.setFromMatrixPosition(le.matrixWorld),ae.setFromMatrixPosition(be.matrixWorld);const pe=ee.distanceTo(ae),Fe=le.projectionMatrix.elements,Be=be.projectionMatrix.elements,Ae=Fe[14]/(Fe[10]-1),He=Fe[14]/(Fe[10]+1),Ie=(Fe[9]+1)/Fe[5],dt=(Fe[9]-1)/Fe[5],I=(Fe[8]-1)/Fe[0],Tt=(Be[8]+1)/Be[0],je=Ae*I,Ye=Ae*Tt,Pe=pe/(-I+Tt),ct=Pe*-I;if(le.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(ct),L.translateZ(Pe),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),Fe[10]===-1)L.projectionMatrix.copy(le.projectionMatrix),L.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Ce=Ae+Pe,w=He+Pe,x=je-ct,X=Ye+(pe-ct),te=Ie*He/w*Ce,oe=dt*He/w*Ce;L.projectionMatrix.makePerspective(x,X,te,oe,Ce,w),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function _e(L,le){le===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(le.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;let le=L.near,be=L.far;M.texture!==null&&(M.depthNear>0&&(le=M.depthNear),M.depthFar>0&&(be=M.depthFar)),y.near=G.near=D.near=le,y.far=G.far=D.far=be,(O!==y.near||J!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),O=y.near,J=y.far),D.layers.mask=L.layers.mask|2,G.layers.mask=L.layers.mask|4,y.layers.mask=D.layers.mask|G.layers.mask;const pe=L.parent,Fe=y.cameras;_e(y,pe);for(let Be=0;Be<Fe.length;Be++)_e(Fe[Be],pe);Fe.length===2?K(y,D,G):y.projectionMatrix.copy(D.projectionMatrix),ye(L,y,pe)};function ye(L,le,be){be===null?L.matrix.copy(le.matrixWorld):(L.matrix.copy(be.matrixWorld),L.matrix.invert(),L.matrix.multiply(le.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(le.projectionMatrix),L.projectionMatrixInverse.copy(le.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Qs*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(L){c=L,p!==null&&(p.fixedFoveation=L),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=L)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let De=null;function qe(L,le){if(u=le.getViewerPose(d||o),S=le,u!==null){const be=u.views;g!==null&&(e.setRenderTargetFramebuffer(U,g.framebuffer),e.setRenderTarget(U));let pe=!1;be.length!==y.cameras.length&&(y.cameras.length=0,pe=!0);for(let Be=0;Be<be.length;Be++){const Ae=be[Be];let He=null;if(g!==null)He=g.getViewport(Ae);else{const dt=h.getViewSubImage(p,Ae);He=dt.viewport,Be===0&&(e.setRenderTargetTextures(U,dt.colorTexture,p.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(U))}let Ie=T[Be];Ie===void 0&&(Ie=new Gt,Ie.layers.enable(Be),Ie.viewport=new mt,T[Be]=Ie),Ie.matrix.fromArray(Ae.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Ae.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(He.x,He.y,He.width,He.height),Be===0&&(y.matrix.copy(Ie.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pe===!0&&y.cameras.push(Ie)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Be=h.getDepthInformation(be[0]);Be&&Be.isValid&&Be.texture&&M.init(e,Be,r.renderState)}}for(let be=0;be<P.length;be++){const pe=A[be],Fe=P[be];pe!==null&&Fe!==void 0&&Fe.update(pe,le,d||o)}De&&De(L,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),S=null}const it=new qa;it.setAnimationLoop(qe),this.setAnimationLoop=function(L){De=L},this.dispose=function(){}}}const Fn=new mn,up=new gt;function dp(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ba(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,U,P,A){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),p(m,f),f.isMeshPhysicalMaterial&&g(m,f,A)):f.isMeshMatcapMaterial?(s(m,f),S(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),M(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,U,P):f.isSpriteMaterial?d(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ut&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ut&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const U=e.get(f),P=U.envMap,A=U.envMapRotation;P&&(m.envMap.value=P,Fn.copy(A),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),m.envMapRotation.value.setFromMatrix4(up.makeRotationFromEuler(Fn)),m.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,U,P){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*U,m.scale.value=P*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,U){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ut&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=U.texture,m.transmissionSamplerSize.value.set(U.width,U.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function S(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){const U=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(U.matrixWorld),m.nearDistance.value=U.shadow.camera.near,m.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function fp(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(U,P){const A=P.program;n.uniformBlockBinding(U,A)}function d(U,P){let A=r[U.id];A===void 0&&(S(U),A=u(U),r[U.id]=A,U.addEventListener("dispose",m));const V=P.program;n.updateUBOMapping(U,V);const F=e.render.frame;s[U.id]!==F&&(p(U),s[U.id]=F)}function u(U){const P=h();U.__bindingPointIndex=P;const A=i.createBuffer(),V=U.__size,F=U.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,V,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,A),A}function h(){for(let U=0;U<a;U++)if(o.indexOf(U)===-1)return o.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(U){const P=r[U.id],A=U.uniforms,V=U.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let F=0,D=A.length;F<D;F++){const G=Array.isArray(A[F])?A[F]:[A[F]];for(let T=0,y=G.length;T<y;T++){const O=G[T];if(g(O,F,T,V)===!0){const J=O.__offset,Y=Array.isArray(O.value)?O.value:[O.value];let ie=0;for(let re=0;re<Y.length;re++){const ee=Y[re],ae=M(ee);typeof ee=="number"||typeof ee=="boolean"?(O.__data[0]=ee,i.bufferSubData(i.UNIFORM_BUFFER,J+ie,O.__data)):ee.isMatrix3?(O.__data[0]=ee.elements[0],O.__data[1]=ee.elements[1],O.__data[2]=ee.elements[2],O.__data[3]=0,O.__data[4]=ee.elements[3],O.__data[5]=ee.elements[4],O.__data[6]=ee.elements[5],O.__data[7]=0,O.__data[8]=ee.elements[6],O.__data[9]=ee.elements[7],O.__data[10]=ee.elements[8],O.__data[11]=0):(ee.toArray(O.__data,ie),ie+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,J,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(U,P,A,V){const F=U.value,D=P+"_"+A;if(V[D]===void 0)return typeof F=="number"||typeof F=="boolean"?V[D]=F:V[D]=F.clone(),!0;{const G=V[D];if(typeof F=="number"||typeof F=="boolean"){if(G!==F)return V[D]=F,!0}else if(G.equals(F)===!1)return G.copy(F),!0}return!1}function S(U){const P=U.uniforms;let A=0;const V=16;for(let D=0,G=P.length;D<G;D++){const T=Array.isArray(P[D])?P[D]:[P[D]];for(let y=0,O=T.length;y<O;y++){const J=T[y],Y=Array.isArray(J.value)?J.value:[J.value];for(let ie=0,re=Y.length;ie<re;ie++){const ee=Y[ie],ae=M(ee),K=A%V,_e=K%ae.boundary,ye=K+_e;A+=_e,ye!==0&&V-ye<ae.storage&&(A+=V-ye),J.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=A,A+=ae.storage}}}const F=A%V;return F>0&&(A+=V-F),U.__size=A,U.__cache={},this}function M(U){const P={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(P.boundary=4,P.storage=4):U.isVector2?(P.boundary=8,P.storage=8):U.isVector3||U.isColor?(P.boundary=16,P.storage=12):U.isVector4?(P.boundary=16,P.storage=16):U.isMatrix3?(P.boundary=48,P.storage=48):U.isMatrix4?(P.boundary=64,P.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),P}function m(U){const P=U.target;P.removeEventListener("dispose",m);const A=o.indexOf(P.__bindingPointIndex);o.splice(A,1),i.deleteBuffer(r[P.id]),delete r[P.id],delete s[P.id]}function f(){for(const U in r)i.deleteBuffer(r[U]);o=[],r={},s={}}return{bind:c,update:d,dispose:f}}class hp{constructor(e={}){const{canvas:t=Xl(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:d=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const S=new Uint32Array(4),M=new Int32Array(4);let m=null,f=null;const U=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this.toneMapping=wn,this.toneMappingExposure=1;const A=this;let V=!1,F=0,D=0,G=null,T=-1,y=null;const O=new mt,J=new mt;let Y=null;const ie=new ot(0);let re=0,ee=t.width,ae=t.height,K=1,_e=null,ye=null;const De=new mt(0,0,ee,ae),qe=new mt(0,0,ee,ae);let it=!1;const L=new Va;let le=!1,be=!1;this.transmissionResolutionScale=1;const pe=new gt,Fe=new gt,Be=new q,Ae=new mt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function dt(){return G===null?K:1}let I=n;function Tt(v,N){return t.getContext(v,N)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:d,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${no}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",he,!1),I===null){const N="webgl2";if(I=Tt(N,v),I===null)throw Tt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let je,Ye,Pe,ct,Ce,w,x,X,te,oe,Q,Re,xe,Me,We,ce,Ee,Ne,ze,Te,Ke,Ve,at,B;function ve(){je=new Mf(I),je.init(),Ve=new rp(I,je),Ye=new gf(I,je,e,Ve),Pe=new np(I,je),Ye.reverseDepthBuffer&&p&&Pe.buffers.depth.setReversed(!0),ct=new bf(I),Ce=new Gh,w=new ip(I,je,Pe,Ce,Ye,Ve,ct),x=new vf(A),X=new yf(A),te=new Lc(I),at=new pf(I,te),oe=new Ef(I,te,ct,at),Q=new Af(I,oe,te,ct),ze=new wf(I,Ye,w),ce=new _f(Ce),Re=new Vh(A,x,X,je,Ye,at,ce),xe=new dp(A,Ce),Me=new Xh,We=new Zh(je),Ne=new hf(A,x,X,Pe,Q,g,c),Ee=new ep(A,Q,Ye),B=new fp(I,ct,Ye,Pe),Te=new mf(I,je,ct),Ke=new Tf(I,je,ct),ct.programs=Re.programs,A.capabilities=Ye,A.extensions=je,A.properties=Ce,A.renderLists=Me,A.shadowMap=Ee,A.state=Pe,A.info=ct}ve();const j=new cp(A,I);this.xr=j,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const v=je.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=je.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(v){v!==void 0&&(K=v,this.setSize(ee,ae,!1))},this.getSize=function(v){return v.set(ee,ae)},this.setSize=function(v,N,z=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=v,ae=N,t.width=Math.floor(v*K),t.height=Math.floor(N*K),z===!0&&(t.style.width=v+"px",t.style.height=N+"px"),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(ee*K,ae*K).floor()},this.setDrawingBufferSize=function(v,N,z){ee=v,ae=N,K=z,t.width=Math.floor(v*z),t.height=Math.floor(N*z),this.setViewport(0,0,v,N)},this.getCurrentViewport=function(v){return v.copy(O)},this.getViewport=function(v){return v.copy(De)},this.setViewport=function(v,N,z,W){v.isVector4?De.set(v.x,v.y,v.z,v.w):De.set(v,N,z,W),Pe.viewport(O.copy(De).multiplyScalar(K).round())},this.getScissor=function(v){return v.copy(qe)},this.setScissor=function(v,N,z,W){v.isVector4?qe.set(v.x,v.y,v.z,v.w):qe.set(v,N,z,W),Pe.scissor(J.copy(qe).multiplyScalar(K).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(v){Pe.setScissorTest(it=v)},this.setOpaqueSort=function(v){_e=v},this.setTransparentSort=function(v){ye=v},this.getClearColor=function(v){return v.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(v=!0,N=!0,z=!0){let W=0;if(v){let k=!1;if(G!==null){const se=G.texture.format;k=se===lo||se===ao||se===oo}if(k){const se=G.texture.type,ue=se===pn||se===Gn||se===Ii||se===gi||se===ro||se===so,de=Ne.getClearColor(),me=Ne.getClearAlpha(),Le=de.r,ke=de.g,Ue=de.b;ue?(S[0]=Le,S[1]=ke,S[2]=Ue,S[3]=me,I.clearBufferuiv(I.COLOR,0,S)):(M[0]=Le,M[1]=ke,M[2]=Ue,M[3]=me,I.clearBufferiv(I.COLOR,0,M))}else W|=I.COLOR_BUFFER_BIT}N&&(W|=I.DEPTH_BUFFER_BIT),z&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ne.dispose(),Me.dispose(),We.dispose(),Ce.dispose(),x.dispose(),X.dispose(),Q.dispose(),at.dispose(),B.dispose(),Re.dispose(),j.dispose(),j.removeEventListener("sessionstart",Vi),j.removeEventListener("sessionend",qn),Xt.stop()};function ne(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const v=ct.autoReset,N=Ee.enabled,z=Ee.autoUpdate,W=Ee.needsUpdate,k=Ee.type;ve(),ct.autoReset=v,Ee.enabled=N,Ee.autoUpdate=z,Ee.needsUpdate=W,Ee.type=k}function he(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ge(v){const N=v.target;N.removeEventListener("dispose",Ge),ft(N)}function ft(v){yt(v),Ce.remove(v)}function yt(v){const N=Ce.get(v).programs;N!==void 0&&(N.forEach(function(z){Re.releaseProgram(z)}),v.isShaderMaterial&&Re.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,z,W,k,se){N===null&&(N=He);const ue=k.isMesh&&k.matrixWorld.determinant()<0,de=E(v,N,z,W,k);Pe.setMaterial(W,ue);let me=z.index,Le=1;if(W.wireframe===!0){if(me=oe.getWireframeAttribute(z),me===void 0)return;Le=2}const ke=z.drawRange,Ue=z.attributes.position;let Ze=ke.start*Le,et=(ke.start+ke.count)*Le;se!==null&&(Ze=Math.max(Ze,se.start*Le),et=Math.min(et,(se.start+se.count)*Le)),me!==null?(Ze=Math.max(Ze,0),et=Math.min(et,me.count)):Ue!=null&&(Ze=Math.max(Ze,0),et=Math.min(et,Ue.count));const _t=et-Ze;if(_t<0||_t===1/0)return;at.setup(k,W,de,z,me);let pt,tt=Te;if(me!==null&&(pt=te.get(me),tt=Ke,tt.setIndex(pt)),k.isMesh)W.wireframe===!0?(Pe.setLineWidth(W.wireframeLinewidth*dt()),tt.setMode(I.LINES)):tt.setMode(I.TRIANGLES);else if(k.isLine){let Oe=W.linewidth;Oe===void 0&&(Oe=1),Pe.setLineWidth(Oe*dt()),k.isLineSegments?tt.setMode(I.LINES):k.isLineLoop?tt.setMode(I.LINE_LOOP):tt.setMode(I.LINE_STRIP)}else k.isPoints?tt.setMode(I.POINTS):k.isSprite&&tt.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)tt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))tt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Oe=k._multiDrawStarts,Et=k._multiDrawCounts,st=k._multiDrawCount,qt=me?te.get(me).bytesPerElement:1,$n=Ce.get(W).currentProgram.getUniforms();for(let Nt=0;Nt<st;Nt++)$n.setValue(I,"_gl_DrawID",Nt),tt.render(Oe[Nt]/qt,Et[Nt])}else if(k.isInstancedMesh)tt.renderInstances(Ze,_t,k.count);else if(z.isInstancedBufferGeometry){const Oe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Et=Math.min(z.instanceCount,Oe);tt.renderInstances(Ze,_t,Et)}else tt.render(Ze,_t)};function rt(v,N,z){v.transparent===!0&&v.side===un&&v.forceSinglePass===!1?(v.side=Ut,v.needsUpdate=!0,b(v,N,z),v.side=Cn,v.needsUpdate=!0,b(v,N,z),v.side=un):b(v,N,z)}this.compile=function(v,N,z=null){z===null&&(z=v),f=We.get(z),f.init(N),P.push(f),z.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),v!==z&&v.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const W=new Set;return v.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const se=k.material;if(se)if(Array.isArray(se))for(let ue=0;ue<se.length;ue++){const de=se[ue];rt(de,z,k),W.add(de)}else rt(se,z,k),W.add(se)}),P.pop(),f=null,W},this.compileAsync=function(v,N,z=null){const W=this.compile(v,N,z);return new Promise(k=>{function se(){if(W.forEach(function(ue){Ce.get(ue).currentProgram.isReady()&&W.delete(ue)}),W.size===0){k(v);return}setTimeout(se,10)}je.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Pt=null;function kt(v){Pt&&Pt(v)}function Vi(){Xt.stop()}function qn(){Xt.start()}const Xt=new qa;Xt.setAnimationLoop(kt),typeof self<"u"&&Xt.setContext(self),this.setAnimationLoop=function(v){Pt=v,j.setAnimationLoop(v),v===null?Xt.stop():Xt.start()},j.addEventListener("sessionstart",Vi),j.addEventListener("sessionend",qn),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),v.isScene===!0&&v.onBeforeRender(A,v,N,G),f=We.get(v,P.length),f.init(N),P.push(f),Fe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),L.setFromProjectionMatrix(Fe),be=this.localClippingEnabled,le=ce.init(this.clippingPlanes,be),m=Me.get(v,U.length),m.init(),U.push(m),j.enabled===!0&&j.isPresenting===!0){const se=A.xr.getDepthSensingMesh();se!==null&&Ei(se,N,-1/0,A.sortObjects)}Ei(v,N,0,A.sortObjects),m.finish(),A.sortObjects===!0&&m.sort(_e,ye),Ie=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ie&&Ne.addToRenderList(m,v),this.info.render.frame++,le===!0&&ce.beginShadows();const z=f.state.shadowsArray;Ee.render(z,v,N),le===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,k=m.transmissive;if(f.setupLights(),N.isArrayCamera){const se=N.cameras;if(k.length>0)for(let ue=0,de=se.length;ue<de;ue++){const me=se[ue];bi(W,k,v,me)}Ie&&Ne.render(v);for(let ue=0,de=se.length;ue<de;ue++){const me=se[ue];Ti(m,v,me,me.viewport)}}else k.length>0&&bi(W,k,v,N),Ie&&Ne.render(v),Ti(m,v,N);G!==null&&D===0&&(w.updateMultisampleRenderTarget(G),w.updateRenderTargetMipmap(G)),v.isScene===!0&&v.onAfterRender(A,v,N),at.resetDefaultState(),T=-1,y=null,P.pop(),P.length>0?(f=P[P.length-1],le===!0&&ce.setGlobalState(A.clippingPlanes,f.state.camera)):f=null,U.pop(),U.length>0?m=U[U.length-1]:m=null};function Ei(v,N,z,W){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||L.intersectsSprite(v)){W&&Ae.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Fe);const ue=Q.update(v),de=v.material;de.visible&&m.push(v,ue,de,z,Ae.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||L.intersectsObject(v))){const ue=Q.update(v),de=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ae.copy(v.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Ae.copy(ue.boundingSphere.center)),Ae.applyMatrix4(v.matrixWorld).applyMatrix4(Fe)),Array.isArray(de)){const me=ue.groups;for(let Le=0,ke=me.length;Le<ke;Le++){const Ue=me[Le],Ze=de[Ue.materialIndex];Ze&&Ze.visible&&m.push(v,ue,Ze,z,Ae.z,Ue)}}else de.visible&&m.push(v,ue,de,z,Ae.z,null)}}const se=v.children;for(let ue=0,de=se.length;ue<de;ue++)Ei(se[ue],N,z,W)}function Ti(v,N,z,W){const k=v.opaque,se=v.transmissive,ue=v.transparent;f.setupLightsView(z),le===!0&&ce.setGlobalState(A.clippingPlanes,z),W&&Pe.viewport(O.copy(W)),k.length>0&&R(k,N,z),se.length>0&&R(se,N,z),ue.length>0&&R(ue,N,z),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function bi(v,N,z,W){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Wn(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Fi:pn,minFilter:Vn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const se=f.state.transmissionRenderTarget[W.id],ue=W.viewport||O;se.setSize(ue.z*A.transmissionResolutionScale,ue.w*A.transmissionResolutionScale);const de=A.getRenderTarget();A.setRenderTarget(se),A.getClearColor(ie),re=A.getClearAlpha(),re<1&&A.setClearColor(16777215,.5),A.clear(),Ie&&Ne.render(z);const me=A.toneMapping;A.toneMapping=wn;const Le=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),le===!0&&ce.setGlobalState(A.clippingPlanes,W),R(v,z,W),w.updateMultisampleRenderTarget(se),w.updateRenderTargetMipmap(se),je.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ue=0,Ze=N.length;Ue<Ze;Ue++){const et=N[Ue],_t=et.object,pt=et.geometry,tt=et.material,Oe=et.group;if(tt.side===un&&_t.layers.test(W.layers)){const Et=tt.side;tt.side=Ut,tt.needsUpdate=!0,C(_t,z,W,pt,tt,Oe),tt.side=Et,tt.needsUpdate=!0,ke=!0}}ke===!0&&(w.updateMultisampleRenderTarget(se),w.updateRenderTargetMipmap(se))}A.setRenderTarget(de),A.setClearColor(ie,re),Le!==void 0&&(W.viewport=Le),A.toneMapping=me}function R(v,N,z){const W=N.isScene===!0?N.overrideMaterial:null;for(let k=0,se=v.length;k<se;k++){const ue=v[k],de=ue.object,me=ue.geometry,Le=W===null?ue.material:W,ke=ue.group;de.layers.test(z.layers)&&C(de,N,z,me,Le,ke)}}function C(v,N,z,W,k,se){v.onBeforeRender(A,N,z,W,k,se),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),k.onBeforeRender(A,N,z,W,v,se),k.transparent===!0&&k.side===un&&k.forceSinglePass===!1?(k.side=Ut,k.needsUpdate=!0,A.renderBufferDirect(z,N,W,k,v,se),k.side=Cn,k.needsUpdate=!0,A.renderBufferDirect(z,N,W,k,v,se),k.side=un):A.renderBufferDirect(z,N,W,k,v,se),v.onAfterRender(A,N,z,W,k,se)}function b(v,N,z){N.isScene!==!0&&(N=He);const W=Ce.get(v),k=f.state.lights,se=f.state.shadowsArray,ue=k.state.version,de=Re.getParameters(v,k.state,se,N,z),me=Re.getProgramCacheKey(de);let Le=W.programs;W.environment=v.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(v.isMeshStandardMaterial?X:x).get(v.envMap||W.environment),W.envMapRotation=W.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Le===void 0&&(v.addEventListener("dispose",Ge),Le=new Map,W.programs=Le);let ke=Le.get(me);if(ke!==void 0){if(W.currentProgram===ke&&W.lightsStateVersion===ue)return _(v,de),ke}else de.uniforms=Re.getUniforms(v),v.onBeforeCompile(de,A),ke=Re.acquireProgram(de,me),Le.set(me,ke),W.uniforms=de.uniforms;const Ue=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ue.clippingPlanes=ce.uniform),_(v,de),W.needsLights=Z(v),W.lightsStateVersion=ue,W.needsLights&&(Ue.ambientLightColor.value=k.state.ambient,Ue.lightProbe.value=k.state.probe,Ue.directionalLights.value=k.state.directional,Ue.directionalLightShadows.value=k.state.directionalShadow,Ue.spotLights.value=k.state.spot,Ue.spotLightShadows.value=k.state.spotShadow,Ue.rectAreaLights.value=k.state.rectArea,Ue.ltc_1.value=k.state.rectAreaLTC1,Ue.ltc_2.value=k.state.rectAreaLTC2,Ue.pointLights.value=k.state.point,Ue.pointLightShadows.value=k.state.pointShadow,Ue.hemisphereLights.value=k.state.hemi,Ue.directionalShadowMap.value=k.state.directionalShadowMap,Ue.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ue.spotShadowMap.value=k.state.spotShadowMap,Ue.spotLightMatrix.value=k.state.spotLightMatrix,Ue.spotLightMap.value=k.state.spotLightMap,Ue.pointShadowMap.value=k.state.pointShadowMap,Ue.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=ke,W.uniformsList=null,ke}function l(v){if(v.uniformsList===null){const N=v.currentProgram.getUniforms();v.uniformsList=Er.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function _(v,N){const z=Ce.get(v);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function E(v,N,z,W,k){N.isScene!==!0&&(N=He),w.resetTextureUnits();const se=N.fog,ue=W.isMeshStandardMaterial?N.environment:null,de=G===null?A.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:vi,me=(W.isMeshStandardMaterial?X:x).get(W.envMap||ue),Le=W.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ke=!!z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!z.morphAttributes.position,Ze=!!z.morphAttributes.normal,et=!!z.morphAttributes.color;let _t=wn;W.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(_t=A.toneMapping);const pt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,tt=pt!==void 0?pt.length:0,Oe=Ce.get(W),Et=f.state.lights;if(le===!0&&(be===!0||v!==y)){const At=v===y&&W.id===T;ce.setState(W,v,At)}let st=!1;W.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Et.state.version||Oe.outputColorSpace!==de||k.isBatchedMesh&&Oe.batching===!1||!k.isBatchedMesh&&Oe.batching===!0||k.isBatchedMesh&&Oe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Oe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Oe.instancing===!1||!k.isInstancedMesh&&Oe.instancing===!0||k.isSkinnedMesh&&Oe.skinning===!1||!k.isSkinnedMesh&&Oe.skinning===!0||k.isInstancedMesh&&Oe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Oe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Oe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Oe.instancingMorph===!1&&k.morphTexture!==null||Oe.envMap!==me||W.fog===!0&&Oe.fog!==se||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==ce.numPlanes||Oe.numIntersection!==ce.numIntersection)||Oe.vertexAlphas!==Le||Oe.vertexTangents!==ke||Oe.morphTargets!==Ue||Oe.morphNormals!==Ze||Oe.morphColors!==et||Oe.toneMapping!==_t||Oe.morphTargetsCount!==tt)&&(st=!0):(st=!0,Oe.__version=W.version);let qt=Oe.currentProgram;st===!0&&(qt=b(W,N,k));let $n=!1,Nt=!1,wi=!1;const ht=qt.getUniforms(),Bt=Oe.uniforms;if(Pe.useProgram(qt.program)&&($n=!0,Nt=!0,wi=!0),W.id!==T&&(T=W.id,Nt=!0),$n||y!==v){Pe.buffers.depth.getReversed()?(pe.copy(v.projectionMatrix),$l(pe),Yl(pe),ht.setValue(I,"projectionMatrix",pe)):ht.setValue(I,"projectionMatrix",v.projectionMatrix),ht.setValue(I,"viewMatrix",v.matrixWorldInverse);const Lt=ht.map.cameraPosition;Lt!==void 0&&Lt.setValue(I,Be.setFromMatrixPosition(v.matrixWorld)),Ye.logarithmicDepthBuffer&&ht.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ht.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,Nt=!0,wi=!0)}if(k.isSkinnedMesh){ht.setOptional(I,k,"bindMatrix"),ht.setOptional(I,k,"bindMatrixInverse");const At=k.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),ht.setValue(I,"boneTexture",At.boneTexture,w))}k.isBatchedMesh&&(ht.setOptional(I,k,"batchingTexture"),ht.setValue(I,"batchingTexture",k._matricesTexture,w),ht.setOptional(I,k,"batchingIdTexture"),ht.setValue(I,"batchingIdTexture",k._indirectTexture,w),ht.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&ht.setValue(I,"batchingColorTexture",k._colorsTexture,w));const zt=z.morphAttributes;if((zt.position!==void 0||zt.normal!==void 0||zt.color!==void 0)&&ze.update(k,z,qt),(Nt||Oe.receiveShadow!==k.receiveShadow)&&(Oe.receiveShadow=k.receiveShadow,ht.setValue(I,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Bt.envMap.value=me,Bt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Bt.envMapIntensity.value=N.environmentIntensity),Nt&&(ht.setValue(I,"toneMappingExposure",A.toneMappingExposure),Oe.needsLights&&H(Bt,wi),se&&W.fog===!0&&xe.refreshFogUniforms(Bt,se),xe.refreshMaterialUniforms(Bt,W,K,ae,f.state.transmissionRenderTarget[v.id]),Er.upload(I,l(Oe),Bt,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Er.upload(I,l(Oe),Bt,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ht.setValue(I,"center",k.center),ht.setValue(I,"modelViewMatrix",k.modelViewMatrix),ht.setValue(I,"normalMatrix",k.normalMatrix),ht.setValue(I,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const At=W.uniformsGroups;for(let Lt=0,Nr=At.length;Lt<Nr;Lt++){const Pn=At[Lt];B.update(Pn,qt),B.bind(Pn,qt)}}return qt}function H(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function Z(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(v,N,z){Ce.get(v.texture).__webglTexture=N,Ce.get(v.depthTexture).__webglTexture=z;const W=Ce.get(v);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=z===void 0,W.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,N){const z=Ce.get(v);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0};const fe=I.createFramebuffer();this.setRenderTarget=function(v,N=0,z=0){G=v,F=N,D=z;let W=!0,k=null,se=!1,ue=!1;if(v){const me=Ce.get(v);if(me.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(I.FRAMEBUFFER,null),W=!1;else if(me.__webglFramebuffer===void 0)w.setupRenderTarget(v);else if(me.__hasExternalTextures)w.rebindTextures(v,Ce.get(v.texture).__webglTexture,Ce.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ue=v.depthTexture;if(me.__boundDepthTexture!==Ue){if(Ue!==null&&Ce.has(Ue)&&(v.width!==Ue.image.width||v.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(v)}}const Le=v.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ue=!0);const ke=Ce.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ke[N])?k=ke[N][z]:k=ke[N],se=!0):v.samples>0&&w.useMultisampledRTT(v)===!1?k=Ce.get(v).__webglMultisampledFramebuffer:Array.isArray(ke)?k=ke[z]:k=ke,O.copy(v.viewport),J.copy(v.scissor),Y=v.scissorTest}else O.copy(De).multiplyScalar(K).floor(),J.copy(qe).multiplyScalar(K).floor(),Y=it;if(z!==0&&(k=fe),Pe.bindFramebuffer(I.FRAMEBUFFER,k)&&W&&Pe.drawBuffers(v,k),Pe.viewport(O),Pe.scissor(J),Pe.setScissorTest(Y),se){const me=Ce.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,z)}else if(ue){const me=Ce.get(v.texture),Le=N;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,me.__webglTexture,z,Le)}else if(v!==null&&z!==0){const me=Ce.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,z)}T=-1},this.readRenderTargetPixels=function(v,N,z,W,k,se,ue){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=Ce.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(de=de[ue]),de){Pe.bindFramebuffer(I.FRAMEBUFFER,de);try{const me=v.texture,Le=me.format,ke=me.type;if(!Ye.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-W&&z>=0&&z<=v.height-k&&I.readPixels(N,z,W,k,Ve.convert(Le),Ve.convert(ke),se)}finally{const me=G!==null?Ce.get(G).__webglFramebuffer:null;Pe.bindFramebuffer(I.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(v,N,z,W,k,se,ue){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=Ce.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ue!==void 0&&(de=de[ue]),de){const me=v.texture,Le=me.format,ke=me.type;if(!Ye.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=v.width-W&&z>=0&&z<=v.height-k){Pe.bindFramebuffer(I.FRAMEBUFFER,de);const Ue=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ue),I.bufferData(I.PIXEL_PACK_BUFFER,se.byteLength,I.STREAM_READ),I.readPixels(N,z,W,k,Ve.convert(Le),Ve.convert(ke),0);const Ze=G!==null?Ce.get(G).__webglFramebuffer:null;Pe.bindFramebuffer(I.FRAMEBUFFER,Ze);const et=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ql(I,et,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ue),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,se),I.deleteBuffer(Ue),I.deleteSync(et),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,N=null,z=0){v.isTexture!==!0&&(li("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,v=arguments[1]);const W=Math.pow(2,-z),k=Math.floor(v.image.width*W),se=Math.floor(v.image.height*W),ue=N!==null?N.x:0,de=N!==null?N.y:0;w.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,ue,de,k,se),Pe.unbindTexture()};const we=I.createFramebuffer(),Qe=I.createFramebuffer();this.copyTextureToTexture=function(v,N,z=null,W=null,k=0,se=null){v.isTexture!==!0&&(li("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,v=arguments[1],N=arguments[2],se=arguments[3]||0,z=null),se===null&&(k!==0?(li("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=k,k=0):se=0);let ue,de,me,Le,ke,Ue,Ze,et,_t;const pt=v.isCompressedTexture?v.mipmaps[se]:v.image;if(z!==null)ue=z.max.x-z.min.x,de=z.max.y-z.min.y,me=z.isBox3?z.max.z-z.min.z:1,Le=z.min.x,ke=z.min.y,Ue=z.isBox3?z.min.z:0;else{const zt=Math.pow(2,-k);ue=Math.floor(pt.width*zt),de=Math.floor(pt.height*zt),v.isDataArrayTexture?me=pt.depth:v.isData3DTexture?me=Math.floor(pt.depth*zt):me=1,Le=0,ke=0,Ue=0}W!==null?(Ze=W.x,et=W.y,_t=W.z):(Ze=0,et=0,_t=0);const tt=Ve.convert(N.format),Oe=Ve.convert(N.type);let Et;N.isData3DTexture?(w.setTexture3D(N,0),Et=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(w.setTexture2DArray(N,0),Et=I.TEXTURE_2D_ARRAY):(w.setTexture2D(N,0),Et=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const st=I.getParameter(I.UNPACK_ROW_LENGTH),qt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),$n=I.getParameter(I.UNPACK_SKIP_PIXELS),Nt=I.getParameter(I.UNPACK_SKIP_ROWS),wi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Le),I.pixelStorei(I.UNPACK_SKIP_ROWS,ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ue);const ht=v.isDataArrayTexture||v.isData3DTexture,Bt=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){const zt=Ce.get(v),At=Ce.get(N),Lt=Ce.get(zt.__renderTarget),Nr=Ce.get(At.__renderTarget);Pe.bindFramebuffer(I.READ_FRAMEBUFFER,Lt.__webglFramebuffer),Pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let Pn=0;Pn<me;Pn++)ht&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ce.get(v).__webglTexture,k,Ue+Pn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ce.get(N).__webglTexture,se,_t+Pn)),I.blitFramebuffer(Le,ke,ue,de,Ze,et,ue,de,I.DEPTH_BUFFER_BIT,I.NEAREST);Pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||v.isRenderTargetTexture||Ce.has(v)){const zt=Ce.get(v),At=Ce.get(N);Pe.bindFramebuffer(I.READ_FRAMEBUFFER,we),Pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Qe);for(let Lt=0;Lt<me;Lt++)ht?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.__webglTexture,k,Ue+Lt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zt.__webglTexture,k),Bt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,At.__webglTexture,se,_t+Lt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,At.__webglTexture,se),k!==0?I.blitFramebuffer(Le,ke,ue,de,Ze,et,ue,de,I.COLOR_BUFFER_BIT,I.NEAREST):Bt?I.copyTexSubImage3D(Et,se,Ze,et,_t+Lt,Le,ke,ue,de):I.copyTexSubImage2D(Et,se,Ze,et,Le,ke,ue,de);Pe.bindFramebuffer(I.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Bt?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(Et,se,Ze,et,_t,ue,de,me,tt,Oe,pt.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Et,se,Ze,et,_t,ue,de,me,tt,pt.data):I.texSubImage3D(Et,se,Ze,et,_t,ue,de,me,tt,Oe,pt):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,se,Ze,et,ue,de,tt,Oe,pt.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,se,Ze,et,pt.width,pt.height,tt,pt.data):I.texSubImage2D(I.TEXTURE_2D,se,Ze,et,ue,de,tt,Oe,pt);I.pixelStorei(I.UNPACK_ROW_LENGTH,st),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,qt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$n),I.pixelStorei(I.UNPACK_SKIP_ROWS,Nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wi),se===0&&N.generateMipmaps&&I.generateMipmap(Et),Pe.unbindTexture()},this.copyTextureToTexture3D=function(v,N,z=null,W=null,k=0){return v.isTexture!==!0&&(li("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,W=arguments[1]||null,v=arguments[2],N=arguments[3],k=arguments[4]||0),li('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,N,z,W,k)},this.initRenderTarget=function(v){Ce.get(v).__webglFramebuffer===void 0&&w.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?w.setTextureCube(v,0):v.isData3DTexture?w.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?w.setTexture2DArray(v,0):w.setTexture2D(v,0),Pe.unbindTexture()},this.resetState=function(){F=0,D=0,G=null,Pe.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const Tn=new _c,Ur=new Gt(75,window.innerWidth/window.innerHeight,.1,1e3),Ir=new hp({antialias:!0,alpha:!0,canvas:document.querySelector("#background")});Ir.setPixelRatio(window.devicePixelRatio);Ir.setSize(window.innerWidth,window.innerHeight);Ur.position.setZ(30);Ir.render(Tn,Ur);const pp=new Hi({map:new Xa().load("../img/literallyme.jpg")}),mp=new Hi({map:new Xa().load("../img/literallyme.jpg")}),gr=new Hi({color:16777215});var An=new en(new Xn(15,15,1),[gr,gr,gr,gr,pp,mp]);An.material[5].map.flipY=!0;const Si=new yc(new Mc(new Xn(15,15,1)),new Ga({color:0,linewidth:5}));var fo=17,Za=-1,Ja=10;An.position.set(fo,Za,Ja);Si.position.set(fo,Za,Ja);/Mobi|Android|iPhone/i.test(navigator.userAgent)||(Tn.add(An),Tn.add(Si));var hs=0,pa=-50;function Qa(){const i=document.body.getBoundingClientRect().top;Ur.position.y+=(hs-i)*-.04,An.position.x=Si.position.x=Math.max(fo,An.position.x+(hs-i)*.1),An.rotation.y=Si.rotation.y+=(pa-i)*.05/10,hs=i,pa=i}Qa();document.body.onscroll=Qa;function el(){requestAnimationFrame(el),Ir.render(Tn,Ur)}el();jQuery(function(){$(".navbar .navbar-nav > .nav-item > a.nav-link, .tm-page-link").on("click",function(i){var e=$(this).data("no");e==1?(Tn.add(An),Tn.add(Si)):(Tn.remove(An),Tn.remove(Si))})});/*!
  * Bootstrap v5.0.0-beta2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(i,e){typeof ho=="object"&&typeof Cr<"u"?Cr.exports=e(require("@popperjs/core")):typeof define=="function"&&define.amd?define(["@popperjs/core"],e):(i=typeof globalThis<"u"?globalThis:i||self).bootstrap=e(i.Popper)})(void 0,function(i){function e(R){if(R&&R.__esModule)return R;var C=Object.create(null);return R&&Object.keys(R).forEach(function(b){if(b!=="default"){var l=Object.getOwnPropertyDescriptor(R,b);Object.defineProperty(C,b,l.get?l:{enumerable:!0,get:function(){return R[b]}})}}),C.default=R,Object.freeze(C)}var t=e(i);function n(R,C){for(var b=0;b<C.length;b++){var l=C[b];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(R,l.key,l)}}function r(R,C,b){return b&&n(R,b),R}function s(){return(s=Object.assign||function(R){for(var C=1;C<arguments.length;C++){var b=arguments[C];for(var l in b)Object.prototype.hasOwnProperty.call(b,l)&&(R[l]=b[l])}return R}).apply(this,arguments)}function o(R,C){var b,l;R.prototype=Object.create(C.prototype),R.prototype.constructor=R,b=R,l=C,(Object.setPrototypeOf||function(_,E){return _.__proto__=E,_})(b,l)}var a,c,d=function(R){do R+=Math.floor(1e6*Math.random());while(document.getElementById(R));return R},u=function(R){var C=R.getAttribute("data-bs-target");if(!C||C==="#"){var b=R.getAttribute("href");if(!b||!b.includes("#")&&!b.startsWith("."))return null;b.includes("#")&&!b.startsWith("#")&&(b="#"+b.split("#")[1]),C=b&&b!=="#"?b.trim():null}return C},h=function(R){var C=u(R);return C&&document.querySelector(C)?C:null},p=function(R){var C=u(R);return C?document.querySelector(C):null},g=function(R){if(!R)return 0;var C=window.getComputedStyle(R),b=C.transitionDuration,l=C.transitionDelay,_=Number.parseFloat(b),E=Number.parseFloat(l);return _||E?(b=b.split(",")[0],l=l.split(",")[0],1e3*(Number.parseFloat(b)+Number.parseFloat(l))):0},S=function(R){R.dispatchEvent(new Event("transitionend"))},M=function(R){return(R[0]||R).nodeType},m=function(R,C){var b=!1,l=C+5;R.addEventListener("transitionend",function _(){b=!0,R.removeEventListener("transitionend",_)}),setTimeout(function(){b||S(R)},l)},f=function(R,C,b){Object.keys(b).forEach(function(l){var _,E=b[l],H=C[l],Z=H&&M(H)?"element":(_=H)==null?""+_:{}.toString.call(_).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(E).test(Z))throw new TypeError(R.toUpperCase()+': Option "'+l+'" provided type "'+Z+'" but expected type "'+E+'".')})},U=function(R){if(!R)return!1;if(R.style&&R.parentNode&&R.parentNode.style){var C=getComputedStyle(R),b=getComputedStyle(R.parentNode);return C.display!=="none"&&b.display!=="none"&&C.visibility!=="hidden"}return!1},P=function(){return function(){}},A=function(R){return R.offsetHeight},V=function(){var R=window.jQuery;return R&&!document.body.hasAttribute("data-bs-no-jquery")?R:null},F=document.documentElement.dir==="rtl",D=function(R,C){var b;b=function(){var l=V();if(l){var _=l.fn[R];l.fn[R]=C.jQueryInterface,l.fn[R].Constructor=C,l.fn[R].noConflict=function(){return l.fn[R]=_,C.jQueryInterface}}},document.readyState==="loading"?document.addEventListener("DOMContentLoaded",b):b()},G=(a={},c=1,{set:function(R,C,b){R.bsKey===void 0&&(R.bsKey={key:C,id:c},c++),a[R.bsKey.id]=b},get:function(R,C){if(!R||R.bsKey===void 0)return null;var b=R.bsKey;return b.key===C?a[b.id]:null},delete:function(R,C){if(R.bsKey!==void 0){var b=R.bsKey;b.key===C&&(delete a[b.id],delete R.bsKey)}}}),T=function(R,C,b){G.set(R,C,b)},y=function(R,C){return G.get(R,C)},O=/[^.]*(?=\..*)\.|.*/,J=/\..*/,Y=/::\d+$/,ie={},re=1,ee={mouseenter:"mouseover",mouseleave:"mouseout"},ae=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function K(R,C){return C&&C+"::"+re++||R.uidEvent||re++}function _e(R){var C=K(R);return R.uidEvent=C,ie[C]=ie[C]||{},ie[C]}function ye(R,C,b){b===void 0&&(b=null);for(var l=Object.keys(R),_=0,E=l.length;_<E;_++){var H=R[l[_]];if(H.originalHandler===C&&H.delegationSelector===b)return H}return null}function De(R,C,b){var l=typeof C=="string",_=l?b:C,E=R.replace(J,""),H=ee[E];return H&&(E=H),ae.has(E)||(E=R),[l,_,E]}function qe(R,C,b,l,_){if(typeof C=="string"&&R){b||(b=l,l=null);var E=De(C,b,l),H=E[0],Z=E[1],fe=E[2],we=_e(R),Qe=we[fe]||(we[fe]={}),v=ye(Qe,Z,H?b:null);if(v)v.oneOff=v.oneOff&&_;else{var N=K(Z,C.replace(O,"")),z=H?function(W,k,se){return function ue(de){for(var me=W.querySelectorAll(k),Le=de.target;Le&&Le!==this;Le=Le.parentNode)for(var ke=me.length;ke--;)if(me[ke]===Le)return de.delegateTarget=Le,ue.oneOff&&L.off(W,de.type,se),se.apply(Le,[de]);return null}}(R,b,l):function(W,k){return function se(ue){return ue.delegateTarget=W,se.oneOff&&L.off(W,ue.type,k),k.apply(W,[ue])}}(R,b);z.delegationSelector=H?b:null,z.originalHandler=Z,z.oneOff=_,z.uidEvent=N,Qe[N]=z,R.addEventListener(fe,z,H)}}}function it(R,C,b,l,_){var E=ye(C[b],l,_);E&&(R.removeEventListener(b,E,!!_),delete C[b][E.uidEvent])}var L={on:function(R,C,b,l){qe(R,C,b,l,!1)},one:function(R,C,b,l){qe(R,C,b,l,!0)},off:function(R,C,b,l){if(typeof C=="string"&&R){var _=De(C,b,l),E=_[0],H=_[1],Z=_[2],fe=Z!==C,we=_e(R),Qe=C.startsWith(".");if(H===void 0){Qe&&Object.keys(we).forEach(function(N){(function(z,W,k,se){var ue=W[k]||{};Object.keys(ue).forEach(function(de){if(de.includes(se)){var me=ue[de];it(z,W,k,me.originalHandler,me.delegationSelector)}})})(R,we,N,C.slice(1))});var v=we[Z]||{};Object.keys(v).forEach(function(N){var z=N.replace(Y,"");if(!fe||C.includes(z)){var W=v[N];it(R,we,Z,W.originalHandler,W.delegationSelector)}})}else{if(!we||!we[Z])return;it(R,we,Z,H,E?b:null)}}},trigger:function(R,C,b){if(typeof C!="string"||!R)return null;var l,_=V(),E=C.replace(J,""),H=C!==E,Z=ae.has(E),fe=!0,we=!0,Qe=!1,v=null;return H&&_&&(l=_.Event(C,b),_(R).trigger(l),fe=!l.isPropagationStopped(),we=!l.isImmediatePropagationStopped(),Qe=l.isDefaultPrevented()),Z?(v=document.createEvent("HTMLEvents")).initEvent(E,fe,!0):v=new CustomEvent(C,{bubbles:fe,cancelable:!0}),b!==void 0&&Object.keys(b).forEach(function(N){Object.defineProperty(v,N,{get:function(){return b[N]}})}),Qe&&v.preventDefault(),we&&R.dispatchEvent(v),v.defaultPrevented&&l!==void 0&&l.preventDefault(),v}},le=function(){function R(C){C&&(this._element=C,T(C,this.constructor.DATA_KEY,this))}return R.prototype.dispose=function(){var C,b;C=this._element,b=this.constructor.DATA_KEY,G.delete(C,b),this._element=null},R.getInstance=function(C){return y(C,this.DATA_KEY)},r(R,null,[{key:"VERSION",get:function(){return"5.0.0-beta2"}}]),R}(),be=function(R){function C(){return R.apply(this,arguments)||this}o(C,R);var b=C.prototype;return b.close=function(l){var _=l?this._getRootElement(l):this._element,E=this._triggerCloseEvent(_);E===null||E.defaultPrevented||this._removeElement(_)},b._getRootElement=function(l){return p(l)||l.closest(".alert")},b._triggerCloseEvent=function(l){return L.trigger(l,"close.bs.alert")},b._removeElement=function(l){var _=this;if(l.classList.remove("show"),l.classList.contains("fade")){var E=g(l);L.one(l,"transitionend",function(){return _._destroyElement(l)}),m(l,E)}else this._destroyElement(l)},b._destroyElement=function(l){l.parentNode&&l.parentNode.removeChild(l),L.trigger(l,"closed.bs.alert")},C.jQueryInterface=function(l){return this.each(function(){var _=y(this,"bs.alert");_||(_=new C(this)),l==="close"&&_[l](this)})},C.handleDismiss=function(l){return function(_){_&&_.preventDefault(),l.close(this)}},r(C,null,[{key:"DATA_KEY",get:function(){return"bs.alert"}}]),C}(le);L.on(document,"click.bs.alert.data-api",'[data-bs-dismiss="alert"]',be.handleDismiss(new be)),D("alert",be);var pe=function(R){function C(){return R.apply(this,arguments)||this}return o(C,R),C.prototype.toggle=function(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))},C.jQueryInterface=function(b){return this.each(function(){var l=y(this,"bs.button");l||(l=new C(this)),b==="toggle"&&l[b]()})},r(C,null,[{key:"DATA_KEY",get:function(){return"bs.button"}}]),C}(le);function Fe(R){return R==="true"||R!=="false"&&(R===Number(R).toString()?Number(R):R===""||R==="null"?null:R)}function Be(R){return R.replace(/[A-Z]/g,function(C){return"-"+C.toLowerCase()})}L.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',function(R){R.preventDefault();var C=R.target.closest('[data-bs-toggle="button"]'),b=y(C,"bs.button");b||(b=new pe(C)),b.toggle()}),D("button",pe);var Ae={setDataAttribute:function(R,C,b){R.setAttribute("data-bs-"+Be(C),b)},removeDataAttribute:function(R,C){R.removeAttribute("data-bs-"+Be(C))},getDataAttributes:function(R){if(!R)return{};var C={};return Object.keys(R.dataset).filter(function(b){return b.startsWith("bs")}).forEach(function(b){var l=b.replace(/^bs/,"");l=l.charAt(0).toLowerCase()+l.slice(1,l.length),C[l]=Fe(R.dataset[b])}),C},getDataAttribute:function(R,C){return Fe(R.getAttribute("data-bs-"+Be(C)))},offset:function(R){var C=R.getBoundingClientRect();return{top:C.top+document.body.scrollTop,left:C.left+document.body.scrollLeft}},position:function(R){return{top:R.offsetTop,left:R.offsetLeft}}},He=function(R,C){var b;return C===void 0&&(C=document.documentElement),(b=[]).concat.apply(b,Element.prototype.querySelectorAll.call(C,R))},Ie=function(R,C){return C===void 0&&(C=document.documentElement),Element.prototype.querySelector.call(C,R)},dt=function(R,C){var b;return(b=[]).concat.apply(b,R.children).filter(function(l){return l.matches(C)})},I=function(R,C){for(var b=R.previousElementSibling;b;){if(b.matches(C))return[b];b=b.previousElementSibling}return[]},Tt={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},je={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Ye=function(R){function C(l,_){var E;return(E=R.call(this,l)||this)._items=null,E._interval=null,E._activeElement=null,E._isPaused=!1,E._isSliding=!1,E.touchTimeout=null,E.touchStartX=0,E.touchDeltaX=0,E._config=E._getConfig(_),E._indicatorsElement=Ie(".carousel-indicators",E._element),E._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,E._pointerEvent=!!window.PointerEvent,E._addEventListeners(),E}o(C,R);var b=C.prototype;return b.next=function(){this._isSliding||this._slide("next")},b.nextWhenVisible=function(){!document.hidden&&U(this._element)&&this.next()},b.prev=function(){this._isSliding||this._slide("prev")},b.pause=function(l){l||(this._isPaused=!0),Ie(".carousel-item-next, .carousel-item-prev",this._element)&&(S(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},b.cycle=function(l){l||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},b.to=function(l){var _=this;this._activeElement=Ie(".active.carousel-item",this._element);var E=this._getItemIndex(this._activeElement);if(!(l>this._items.length-1||l<0))if(this._isSliding)L.one(this._element,"slid.bs.carousel",function(){return _.to(l)});else{if(E===l)return this.pause(),void this.cycle();var H=l>E?"next":"prev";this._slide(H,this._items[l])}},b.dispose=function(){R.prototype.dispose.call(this),L.off(this._element,".bs.carousel"),this._items=null,this._config=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},b._getConfig=function(l){return l=s({},Tt,l),f("carousel",l,je),l},b._handleSwipe=function(){var l=Math.abs(this.touchDeltaX);if(!(l<=40)){var _=l/this.touchDeltaX;this.touchDeltaX=0,_>0&&(F?this.next():this.prev()),_<0&&(F?this.prev():this.next())}},b._addEventListeners=function(){var l=this;this._config.keyboard&&L.on(this._element,"keydown.bs.carousel",function(_){return l._keydown(_)}),this._config.pause==="hover"&&(L.on(this._element,"mouseenter.bs.carousel",function(_){return l.pause(_)}),L.on(this._element,"mouseleave.bs.carousel",function(_){return l.cycle(_)})),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()},b._addTouchEventListeners=function(){var l=this,_=function(H){!l._pointerEvent||H.pointerType!=="pen"&&H.pointerType!=="touch"?l._pointerEvent||(l.touchStartX=H.touches[0].clientX):l.touchStartX=H.clientX},E=function(H){!l._pointerEvent||H.pointerType!=="pen"&&H.pointerType!=="touch"||(l.touchDeltaX=H.clientX-l.touchStartX),l._handleSwipe(),l._config.pause==="hover"&&(l.pause(),l.touchTimeout&&clearTimeout(l.touchTimeout),l.touchTimeout=setTimeout(function(Z){return l.cycle(Z)},500+l._config.interval))};He(".carousel-item img",this._element).forEach(function(H){L.on(H,"dragstart.bs.carousel",function(Z){return Z.preventDefault()})}),this._pointerEvent?(L.on(this._element,"pointerdown.bs.carousel",function(H){return _(H)}),L.on(this._element,"pointerup.bs.carousel",function(H){return E(H)}),this._element.classList.add("pointer-event")):(L.on(this._element,"touchstart.bs.carousel",function(H){return _(H)}),L.on(this._element,"touchmove.bs.carousel",function(H){return function(Z){Z.touches&&Z.touches.length>1?l.touchDeltaX=0:l.touchDeltaX=Z.touches[0].clientX-l.touchStartX}(H)}),L.on(this._element,"touchend.bs.carousel",function(H){return E(H)}))},b._keydown=function(l){/input|textarea/i.test(l.target.tagName)||(l.key==="ArrowLeft"?(l.preventDefault(),F?this.next():this.prev()):l.key==="ArrowRight"&&(l.preventDefault(),F?this.prev():this.next()))},b._getItemIndex=function(l){return this._items=l&&l.parentNode?He(".carousel-item",l.parentNode):[],this._items.indexOf(l)},b._getItemByDirection=function(l,_){var E=l==="next",H=l==="prev",Z=this._getItemIndex(_),fe=this._items.length-1;if((H&&Z===0||E&&Z===fe)&&!this._config.wrap)return _;var we=(Z+(l==="prev"?-1:1))%this._items.length;return we===-1?this._items[this._items.length-1]:this._items[we]},b._triggerSlideEvent=function(l,_){var E=this._getItemIndex(l),H=this._getItemIndex(Ie(".active.carousel-item",this._element));return L.trigger(this._element,"slide.bs.carousel",{relatedTarget:l,direction:_,from:H,to:E})},b._setActiveIndicatorElement=function(l){if(this._indicatorsElement){var _=Ie(".active",this._indicatorsElement);_.classList.remove("active"),_.removeAttribute("aria-current");for(var E=He("[data-bs-target]",this._indicatorsElement),H=0;H<E.length;H++)if(Number.parseInt(E[H].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(l)){E[H].classList.add("active"),E[H].setAttribute("aria-current","true");break}}},b._updateInterval=function(){var l=this._activeElement||Ie(".active.carousel-item",this._element);if(l){var _=Number.parseInt(l.getAttribute("data-bs-interval"),10);_?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=_):this._config.interval=this._config.defaultInterval||this._config.interval}},b._slide=function(l,_){var E=this,H=Ie(".active.carousel-item",this._element),Z=this._getItemIndex(H),fe=_||H&&this._getItemByDirection(l,H),we=this._getItemIndex(fe),Qe=!!this._interval,v=l==="next"?"carousel-item-start":"carousel-item-end",N=l==="next"?"carousel-item-next":"carousel-item-prev",z=l==="next"?"left":"right";if(fe&&fe.classList.contains("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(fe,z).defaultPrevented&&H&&fe){if(this._isSliding=!0,Qe&&this.pause(),this._setActiveIndicatorElement(fe),this._activeElement=fe,this._element.classList.contains("slide")){fe.classList.add(N),A(fe),H.classList.add(v),fe.classList.add(v);var W=g(H);L.one(H,"transitionend",function(){fe.classList.remove(v,N),fe.classList.add("active"),H.classList.remove("active",N,v),E._isSliding=!1,setTimeout(function(){L.trigger(E._element,"slid.bs.carousel",{relatedTarget:fe,direction:z,from:Z,to:we})},0)}),m(H,W)}else H.classList.remove("active"),fe.classList.add("active"),this._isSliding=!1,L.trigger(this._element,"slid.bs.carousel",{relatedTarget:fe,direction:z,from:Z,to:we});Qe&&this.cycle()}},C.carouselInterface=function(l,_){var E=y(l,"bs.carousel"),H=s({},Tt,Ae.getDataAttributes(l));typeof _=="object"&&(H=s({},H,_));var Z=typeof _=="string"?_:H.slide;if(E||(E=new C(l,H)),typeof _=="number")E.to(_);else if(typeof Z=="string"){if(E[Z]===void 0)throw new TypeError('No method named "'+Z+'"');E[Z]()}else H.interval&&H.ride&&(E.pause(),E.cycle())},C.jQueryInterface=function(l){return this.each(function(){C.carouselInterface(this,l)})},C.dataApiClickHandler=function(l){var _=p(this);if(_&&_.classList.contains("carousel")){var E=s({},Ae.getDataAttributes(_),Ae.getDataAttributes(this)),H=this.getAttribute("data-bs-slide-to");H&&(E.interval=!1),C.carouselInterface(_,E),H&&y(_,"bs.carousel").to(H),l.preventDefault()}},r(C,null,[{key:"Default",get:function(){return Tt}},{key:"DATA_KEY",get:function(){return"bs.carousel"}}]),C}(le);L.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",Ye.dataApiClickHandler),L.on(window,"load.bs.carousel.data-api",function(){for(var R=He('[data-bs-ride="carousel"]'),C=0,b=R.length;C<b;C++)Ye.carouselInterface(R[C],y(R[C],"bs.carousel"))}),D("carousel",Ye);var Pe={toggle:!0,parent:""},ct={toggle:"boolean",parent:"(string|element)"},Ce=function(R){function C(l,_){var E;(E=R.call(this,l)||this)._isTransitioning=!1,E._config=E._getConfig(_),E._triggerArray=He('[data-bs-toggle="collapse"][href="#'+l.id+'"],[data-bs-toggle="collapse"][data-bs-target="#'+l.id+'"]');for(var H=He('[data-bs-toggle="collapse"]'),Z=0,fe=H.length;Z<fe;Z++){var we=H[Z],Qe=h(we),v=He(Qe).filter(function(N){return N===l});Qe!==null&&v.length&&(E._selector=Qe,E._triggerArray.push(we))}return E._parent=E._config.parent?E._getParent():null,E._config.parent||E._addAriaAndCollapsedClass(E._element,E._triggerArray),E._config.toggle&&E.toggle(),E}o(C,R);var b=C.prototype;return b.toggle=function(){this._element.classList.contains("show")?this.hide():this.show()},b.show=function(){var l=this;if(!this._isTransitioning&&!this._element.classList.contains("show")){var _,E;this._parent&&(_=He(".show, .collapsing",this._parent).filter(function(v){return typeof l._config.parent=="string"?v.getAttribute("data-bs-parent")===l._config.parent:v.classList.contains("collapse")})).length===0&&(_=null);var H=Ie(this._selector);if(_){var Z=_.find(function(v){return H!==v});if((E=Z?y(Z,"bs.collapse"):null)&&E._isTransitioning)return}if(!L.trigger(this._element,"show.bs.collapse").defaultPrevented){_&&_.forEach(function(v){H!==v&&C.collapseInterface(v,"hide"),E||T(v,"bs.collapse",null)});var fe=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[fe]=0,this._triggerArray.length&&this._triggerArray.forEach(function(v){v.classList.remove("collapsed"),v.setAttribute("aria-expanded",!0)}),this.setTransitioning(!0);var we="scroll"+(fe[0].toUpperCase()+fe.slice(1)),Qe=g(this._element);L.one(this._element,"transitionend",function(){l._element.classList.remove("collapsing"),l._element.classList.add("collapse","show"),l._element.style[fe]="",l.setTransitioning(!1),L.trigger(l._element,"shown.bs.collapse")}),m(this._element,Qe),this._element.style[fe]=this._element[we]+"px"}}},b.hide=function(){var l=this;if(!this._isTransitioning&&this._element.classList.contains("show")&&!L.trigger(this._element,"hide.bs.collapse").defaultPrevented){var _=this._getDimension();this._element.style[_]=this._element.getBoundingClientRect()[_]+"px",A(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");var E=this._triggerArray.length;if(E>0)for(var H=0;H<E;H++){var Z=this._triggerArray[H],fe=p(Z);fe&&!fe.classList.contains("show")&&(Z.classList.add("collapsed"),Z.setAttribute("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[_]="";var we=g(this._element);L.one(this._element,"transitionend",function(){l.setTransitioning(!1),l._element.classList.remove("collapsing"),l._element.classList.add("collapse"),L.trigger(l._element,"hidden.bs.collapse")}),m(this._element,we)}},b.setTransitioning=function(l){this._isTransitioning=l},b.dispose=function(){R.prototype.dispose.call(this),this._config=null,this._parent=null,this._triggerArray=null,this._isTransitioning=null},b._getConfig=function(l){return(l=s({},Pe,l)).toggle=!!l.toggle,f("collapse",l,ct),l},b._getDimension=function(){return this._element.classList.contains("width")?"width":"height"},b._getParent=function(){var l=this,_=this._config.parent;return M(_)?_.jquery===void 0&&_[0]===void 0||(_=_[0]):_=Ie(_),He('[data-bs-toggle="collapse"][data-bs-parent="'+_+'"]',_).forEach(function(E){var H=p(E);l._addAriaAndCollapsedClass(H,[E])}),_},b._addAriaAndCollapsedClass=function(l,_){if(l&&_.length){var E=l.classList.contains("show");_.forEach(function(H){E?H.classList.remove("collapsed"):H.classList.add("collapsed"),H.setAttribute("aria-expanded",E)})}},C.collapseInterface=function(l,_){var E=y(l,"bs.collapse"),H=s({},Pe,Ae.getDataAttributes(l),typeof _=="object"&&_?_:{});if(!E&&H.toggle&&typeof _=="string"&&/show|hide/.test(_)&&(H.toggle=!1),E||(E=new C(l,H)),typeof _=="string"){if(E[_]===void 0)throw new TypeError('No method named "'+_+'"');E[_]()}},C.jQueryInterface=function(l){return this.each(function(){C.collapseInterface(this,l)})},r(C,null,[{key:"Default",get:function(){return Pe}},{key:"DATA_KEY",get:function(){return"bs.collapse"}}]),C}(le);L.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',function(R){(R.target.tagName==="A"||R.delegateTarget&&R.delegateTarget.tagName==="A")&&R.preventDefault();var C=Ae.getDataAttributes(this),b=h(this);He(b).forEach(function(l){var _,E=y(l,"bs.collapse");E?(E._parent===null&&typeof C.parent=="string"&&(E._config.parent=C.parent,E._parent=E._getParent()),_="toggle"):_=C,Ce.collapseInterface(l,_)})}),D("collapse",Ce);var w=new RegExp("ArrowUp|ArrowDown|Escape"),x=F?"top-end":"top-start",X=F?"top-start":"top-end",te=F?"bottom-end":"bottom-start",oe=F?"bottom-start":"bottom-end",Q=F?"left-start":"right-start",Re=F?"right-start":"left-start",xe={offset:[0,2],flip:!0,boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null},Me={offset:"(array|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)"},We=function(R){function C(l,_){var E;return(E=R.call(this,l)||this)._popper=null,E._config=E._getConfig(_),E._menu=E._getMenuElement(),E._inNavbar=E._detectNavbar(),E._addEventListeners(),E}o(C,R);var b=C.prototype;return b.toggle=function(){if(!this._element.disabled&&!this._element.classList.contains("disabled")){var l=this._element.classList.contains("show");C.clearMenus(),l||this.show()}},b.show=function(){if(!(this._element.disabled||this._element.classList.contains("disabled")||this._menu.classList.contains("show"))){var l=C.getParentFromElement(this._element),_={relatedTarget:this._element};if(!L.trigger(this._element,"show.bs.dropdown",_).defaultPrevented){if(this._inNavbar)Ae.setDataAttribute(this._menu,"popper","none");else{if(t===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var E=this._element;this._config.reference==="parent"?E=l:M(this._config.reference)?(E=this._config.reference,this._config.reference.jquery!==void 0&&(E=this._config.reference[0])):typeof this._config.reference=="object"&&(E=this._config.reference);var H=this._getPopperConfig(),Z=H.modifiers.find(function(we){return we.name==="applyStyles"&&we.enabled===!1});this._popper=i.createPopper(E,this._menu,H),Z&&Ae.setDataAttribute(this._menu,"popper","static")}var fe;"ontouchstart"in document.documentElement&&!l.closest(".navbar-nav")&&(fe=[]).concat.apply(fe,document.body.children).forEach(function(we){return L.on(we,"mouseover",null,function(){})}),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),L.trigger(this._element,"shown.bs.dropdown",_)}}},b.hide=function(){if(!this._element.disabled&&!this._element.classList.contains("disabled")&&this._menu.classList.contains("show")){var l={relatedTarget:this._element};L.trigger(this._element,"hide.bs.dropdown",l).defaultPrevented||(this._popper&&this._popper.destroy(),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),Ae.removeDataAttribute(this._menu,"popper"),L.trigger(this._element,"hidden.bs.dropdown",l))}},b.dispose=function(){R.prototype.dispose.call(this),L.off(this._element,".bs.dropdown"),this._menu=null,this._popper&&(this._popper.destroy(),this._popper=null)},b.update=function(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()},b._addEventListeners=function(){var l=this;L.on(this._element,"click.bs.dropdown",function(_){_.preventDefault(),_.stopPropagation(),l.toggle()})},b._getConfig=function(l){if(l=s({},this.constructor.Default,Ae.getDataAttributes(this._element),l),f("dropdown",l,this.constructor.DefaultType),typeof l.reference=="object"&&!M(l.reference)&&typeof l.reference.getBoundingClientRect!="function")throw new TypeError("dropdown".toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return l},b._getMenuElement=function(){return function(l,_){for(var E=l.nextElementSibling;E;){if(E.matches(_))return[E];E=E.nextElementSibling}return[]}(this._element,".dropdown-menu")[0]},b._getPlacement=function(){var l=this._element.parentNode;if(l.classList.contains("dropend"))return Q;if(l.classList.contains("dropstart"))return Re;var _=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return l.classList.contains("dropup")?_?X:x:_?oe:te},b._detectNavbar=function(){return this._element.closest(".navbar")!==null},b._getOffset=function(){var l=this,_=this._config.offset;return typeof _=="string"?_.split(",").map(function(E){return Number.parseInt(E,10)}):typeof _=="function"?function(E){return _(E,l._element)}:_},b._getPopperConfig=function(){var l={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{altBoundary:this._config.flip,boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return this._config.display==="static"&&(l.modifiers=[{name:"applyStyles",enabled:!1}]),s({},l,typeof this._config.popperConfig=="function"?this._config.popperConfig(l):this._config.popperConfig)},C.dropdownInterface=function(l,_){var E=y(l,"bs.dropdown");if(E||(E=new C(l,typeof _=="object"?_:null)),typeof _=="string"){if(E[_]===void 0)throw new TypeError('No method named "'+_+'"');E[_]()}},C.jQueryInterface=function(l){return this.each(function(){C.dropdownInterface(this,l)})},C.clearMenus=function(l){if(!l||l.button!==2&&(l.type!=="keyup"||l.key==="Tab"))for(var _=He('[data-bs-toggle="dropdown"]'),E=0,H=_.length;E<H;E++){var Z=y(_[E],"bs.dropdown"),fe={relatedTarget:_[E]};if(l&&l.type==="click"&&(fe.clickEvent=l),Z){var we,Qe=Z._menu;_[E].classList.contains("show")&&!(l&&(l.type==="click"&&/input|textarea/i.test(l.target.tagName)||l.type==="keyup"&&l.key==="Tab")&&Qe.contains(l.target)||L.trigger(_[E],"hide.bs.dropdown",fe).defaultPrevented)&&("ontouchstart"in document.documentElement&&(we=[]).concat.apply(we,document.body.children).forEach(function(v){return L.off(v,"mouseover",null,function(){})}),_[E].setAttribute("aria-expanded","false"),Z._popper&&Z._popper.destroy(),Qe.classList.remove("show"),_[E].classList.remove("show"),Ae.removeDataAttribute(Qe,"popper"),L.trigger(_[E],"hidden.bs.dropdown",fe))}}},C.getParentFromElement=function(l){return p(l)||l.parentNode},C.dataApiKeydownHandler=function(l){if(!(/input|textarea/i.test(l.target.tagName)?l.key==="Space"||l.key!=="Escape"&&(l.key!=="ArrowDown"&&l.key!=="ArrowUp"||l.target.closest(".dropdown-menu")):!w.test(l.key))&&(l.preventDefault(),l.stopPropagation(),!this.disabled&&!this.classList.contains("disabled"))){var _=C.getParentFromElement(this),E=this.classList.contains("show");if(l.key==="Escape")return(this.matches('[data-bs-toggle="dropdown"]')?this:I(this,'[data-bs-toggle="dropdown"]')[0]).focus(),void C.clearMenus();if(E||l.key!=="ArrowUp"&&l.key!=="ArrowDown")if(E&&l.key!=="Space"){var H=He(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",_).filter(U);if(H.length){var Z=H.indexOf(l.target);l.key==="ArrowUp"&&Z>0&&Z--,l.key==="ArrowDown"&&Z<H.length-1&&Z++,H[Z=Z===-1?0:Z].focus()}}else C.clearMenus();else(this.matches('[data-bs-toggle="dropdown"]')?this:I(this,'[data-bs-toggle="dropdown"]')[0]).click()}},r(C,null,[{key:"Default",get:function(){return xe}},{key:"DefaultType",get:function(){return Me}},{key:"DATA_KEY",get:function(){return"bs.dropdown"}}]),C}(le);L.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',We.dataApiKeydownHandler),L.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",We.dataApiKeydownHandler),L.on(document,"click.bs.dropdown.data-api",We.clearMenus),L.on(document,"keyup.bs.dropdown.data-api",We.clearMenus),L.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',function(R){R.preventDefault(),R.stopPropagation(),We.dropdownInterface(this,"toggle")}),L.on(document,"click.bs.dropdown.data-api",".dropdown form",function(R){return R.stopPropagation()}),D("dropdown",We);var ce={backdrop:!0,keyboard:!0,focus:!0},Ee={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},Ne=function(R){function C(l,_){var E;return(E=R.call(this,l)||this)._config=E._getConfig(_),E._dialog=Ie(".modal-dialog",l),E._backdrop=null,E._isShown=!1,E._isBodyOverflowing=!1,E._ignoreBackdropClick=!1,E._isTransitioning=!1,E._scrollbarWidth=0,E}o(C,R);var b=C.prototype;return b.toggle=function(l){return this._isShown?this.hide():this.show(l)},b.show=function(l){var _=this;if(!this._isShown&&!this._isTransitioning){this._element.classList.contains("fade")&&(this._isTransitioning=!0);var E=L.trigger(this._element,"show.bs.modal",{relatedTarget:l});this._isShown||E.defaultPrevented||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),L.on(this._element,"click.dismiss.bs.modal",'[data-bs-dismiss="modal"]',function(H){return _.hide(H)}),L.on(this._dialog,"mousedown.dismiss.bs.modal",function(){L.one(_._element,"mouseup.dismiss.bs.modal",function(H){H.target===_._element&&(_._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return _._showElement(l)}))}},b.hide=function(l){var _=this;if(l&&l.preventDefault(),this._isShown&&!this._isTransitioning&&!L.trigger(this._element,"hide.bs.modal").defaultPrevented){this._isShown=!1;var E=this._element.classList.contains("fade");if(E&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),L.off(document,"focusin.bs.modal"),this._element.classList.remove("show"),L.off(this._element,"click.dismiss.bs.modal"),L.off(this._dialog,"mousedown.dismiss.bs.modal"),E){var H=g(this._element);L.one(this._element,"transitionend",function(Z){return _._hideModal(Z)}),m(this._element,H)}else this._hideModal()}},b.dispose=function(){[window,this._element,this._dialog].forEach(function(l){return L.off(l,".bs.modal")}),R.prototype.dispose.call(this),L.off(document,"focusin.bs.modal"),this._config=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},b.handleUpdate=function(){this._adjustDialog()},b._getConfig=function(l){return l=s({},ce,l),f("modal",l,Ee),l},b._showElement=function(l){var _=this,E=this._element.classList.contains("fade"),H=Ie(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,H&&(H.scrollTop=0),E&&A(this._element),this._element.classList.add("show"),this._config.focus&&this._enforceFocus();var Z=function(){_._config.focus&&_._element.focus(),_._isTransitioning=!1,L.trigger(_._element,"shown.bs.modal",{relatedTarget:l})};if(E){var fe=g(this._dialog);L.one(this._dialog,"transitionend",Z),m(this._dialog,fe)}else Z()},b._enforceFocus=function(){var l=this;L.off(document,"focusin.bs.modal"),L.on(document,"focusin.bs.modal",function(_){document===_.target||l._element===_.target||l._element.contains(_.target)||l._element.focus()})},b._setEscapeEvent=function(){var l=this;this._isShown?L.on(this._element,"keydown.dismiss.bs.modal",function(_){l._config.keyboard&&_.key==="Escape"?(_.preventDefault(),l.hide()):l._config.keyboard||_.key!=="Escape"||l._triggerBackdropTransition()}):L.off(this._element,"keydown.dismiss.bs.modal")},b._setResizeEvent=function(){var l=this;this._isShown?L.on(window,"resize.bs.modal",function(){return l._adjustDialog()}):L.off(window,"resize.bs.modal")},b._hideModal=function(){var l=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop(function(){document.body.classList.remove("modal-open"),l._resetAdjustments(),l._resetScrollbar(),L.trigger(l._element,"hidden.bs.modal")})},b._removeBackdrop=function(){this._backdrop.parentNode.removeChild(this._backdrop),this._backdrop=null},b._showBackdrop=function(l){var _=this,E=this._element.classList.contains("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",E&&this._backdrop.classList.add(E),document.body.appendChild(this._backdrop),L.on(this._element,"click.dismiss.bs.modal",function(we){_._ignoreBackdropClick?_._ignoreBackdropClick=!1:we.target===we.currentTarget&&(_._config.backdrop==="static"?_._triggerBackdropTransition():_.hide())}),E&&A(this._backdrop),this._backdrop.classList.add("show"),!E)return void l();var H=g(this._backdrop);L.one(this._backdrop,"transitionend",l),m(this._backdrop,H)}else if(!this._isShown&&this._backdrop){this._backdrop.classList.remove("show");var Z=function(){_._removeBackdrop(),l()};if(this._element.classList.contains("fade")){var fe=g(this._backdrop);L.one(this._backdrop,"transitionend",Z),m(this._backdrop,fe)}else Z()}else l()},b._triggerBackdropTransition=function(){var l=this;if(!L.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented){var _=this._element.scrollHeight>document.documentElement.clientHeight;_||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static");var E=g(this._dialog);L.off(this._element,"transitionend"),L.one(this._element,"transitionend",function(){l._element.classList.remove("modal-static"),_||(L.one(l._element,"transitionend",function(){l._element.style.overflowY=""}),m(l._element,E))}),m(this._element,E),this._element.focus()}},b._adjustDialog=function(){var l=this._element.scrollHeight>document.documentElement.clientHeight;(!this._isBodyOverflowing&&l&&!F||this._isBodyOverflowing&&!l&&F)&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),(this._isBodyOverflowing&&!l&&!F||!this._isBodyOverflowing&&l&&F)&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},b._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},b._checkScrollbar=function(){var l=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(l.left+l.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},b._setScrollbar=function(){var l=this;this._isBodyOverflowing&&(this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight",function(_){return _+l._scrollbarWidth}),this._setElementAttributes(".sticky-top","marginRight",function(_){return _-l._scrollbarWidth}),this._setElementAttributes("body","paddingRight",function(_){return _+l._scrollbarWidth})),document.body.classList.add("modal-open")},b._setElementAttributes=function(l,_,E){He(l).forEach(function(H){var Z=H.style[_],fe=window.getComputedStyle(H)[_];Ae.setDataAttribute(H,_,Z),H.style[_]=E(Number.parseFloat(fe))+"px"})},b._resetScrollbar=function(){this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight"),this._resetElementAttributes(".sticky-top","marginRight"),this._resetElementAttributes("body","paddingRight")},b._resetElementAttributes=function(l,_){He(l).forEach(function(E){var H=Ae.getDataAttribute(E,_);H===void 0&&E===document.body?E.style[_]="":(Ae.removeDataAttribute(E,_),E.style[_]=H)})},b._getScrollbarWidth=function(){var l=document.createElement("div");l.className="modal-scrollbar-measure",document.body.appendChild(l);var _=l.getBoundingClientRect().width-l.clientWidth;return document.body.removeChild(l),_},C.jQueryInterface=function(l,_){return this.each(function(){var E=y(this,"bs.modal"),H=s({},ce,Ae.getDataAttributes(this),typeof l=="object"&&l?l:{});if(E||(E=new C(this,H)),typeof l=="string"){if(E[l]===void 0)throw new TypeError('No method named "'+l+'"');E[l](_)}})},r(C,null,[{key:"Default",get:function(){return ce}},{key:"DATA_KEY",get:function(){return"bs.modal"}}]),C}(le);L.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',function(R){var C=this,b=p(this);this.tagName!=="A"&&this.tagName!=="AREA"||R.preventDefault(),L.one(b,"show.bs.modal",function(E){E.defaultPrevented||L.one(b,"hidden.bs.modal",function(){U(C)&&C.focus()})});var l=y(b,"bs.modal");if(!l){var _=s({},Ae.getDataAttributes(b),Ae.getDataAttributes(this));l=new Ne(b,_)}l.toggle(this)}),D("modal",Ne);var ze=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Te=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,Ke=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function Ve(R,C,b){var l;if(!R.length)return R;if(b&&typeof b=="function")return b(R);for(var _=new window.DOMParser().parseFromString(R,"text/html"),E=Object.keys(C),H=(l=[]).concat.apply(l,_.body.querySelectorAll("*")),Z=function(Qe,v){var N,z=H[Qe],W=z.nodeName.toLowerCase();if(!E.includes(W))return z.parentNode.removeChild(z),"continue";var k=(N=[]).concat.apply(N,z.attributes),se=[].concat(C["*"]||[],C[W]||[]);k.forEach(function(ue){(function(de,me){var Le=de.nodeName.toLowerCase();if(me.includes(Le))return!ze.has(Le)||!!(Te.test(de.nodeValue)||Ke.test(de.nodeValue));for(var ke=me.filter(function(et){return et instanceof RegExp}),Ue=0,Ze=ke.length;Ue<Ze;Ue++)if(ke[Ue].test(Le))return!0;return!1})(ue,se)||z.removeAttribute(ue.nodeName)})},fe=0,we=H.length;fe<we;fe++)Z(fe);return _.body.innerHTML}var at=new RegExp("(^|\\s)bs-tooltip\\S+","g"),B=new Set(["sanitize","allowList","sanitizeFn"]),ve={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},j={AUTO:"auto",TOP:"top",RIGHT:F?"left":"right",BOTTOM:"bottom",LEFT:F?"right":"left"},ne={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Se={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},he=function(R){function C(l,_){var E;if(t===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");return(E=R.call(this,l)||this)._isEnabled=!0,E._timeout=0,E._hoverState="",E._activeTrigger={},E._popper=null,E.config=E._getConfig(_),E.tip=null,E._setListeners(),E}o(C,R);var b=C.prototype;return b.enable=function(){this._isEnabled=!0},b.disable=function(){this._isEnabled=!1},b.toggleEnabled=function(){this._isEnabled=!this._isEnabled},b.toggle=function(l){if(this._isEnabled)if(l){var _=this._initializeOnDelegatedTarget(l);_._activeTrigger.click=!_._activeTrigger.click,_._isWithActiveTrigger()?_._enter(null,_):_._leave(null,_)}else{if(this.getTipElement().classList.contains("show"))return void this._leave(null,this);this._enter(null,this)}},b.dispose=function(){clearTimeout(this._timeout),L.off(this._element,this.constructor.EVENT_KEY),L.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.parentNode&&this.tip.parentNode.removeChild(this.tip),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.config=null,this.tip=null,R.prototype.dispose.call(this)},b.show=function(){var l=this;if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(this.isWithContent()&&this._isEnabled){var _=L.trigger(this._element,this.constructor.Event.SHOW),E=function ue(de){if(!document.documentElement.attachShadow)return null;if(typeof de.getRootNode=="function"){var me=de.getRootNode();return me instanceof ShadowRoot?me:null}return de instanceof ShadowRoot?de:de.parentNode?ue(de.parentNode):null}(this._element),H=E===null?this._element.ownerDocument.documentElement.contains(this._element):E.contains(this._element);if(!_.defaultPrevented&&H){var Z=this.getTipElement(),fe=d(this.constructor.NAME);Z.setAttribute("id",fe),this._element.setAttribute("aria-describedby",fe),this.setContent(),this.config.animation&&Z.classList.add("fade");var we=typeof this.config.placement=="function"?this.config.placement.call(this,Z,this._element):this.config.placement,Qe=this._getAttachment(we);this._addAttachmentClass(Qe);var v=this._getContainer();T(Z,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||v.appendChild(Z),L.trigger(this._element,this.constructor.Event.INSERTED),this._popper=i.createPopper(this._element,Z,this._getPopperConfig(Qe)),Z.classList.add("show");var N,z,W=typeof this.config.customClass=="function"?this.config.customClass():this.config.customClass;W&&(N=Z.classList).add.apply(N,W.split(" ")),"ontouchstart"in document.documentElement&&(z=[]).concat.apply(z,document.body.children).forEach(function(ue){L.on(ue,"mouseover",function(){})});var k=function(){var ue=l._hoverState;l._hoverState=null,L.trigger(l._element,l.constructor.Event.SHOWN),ue==="out"&&l._leave(null,l)};if(this.tip.classList.contains("fade")){var se=g(this.tip);L.one(this.tip,"transitionend",k),m(this.tip,se)}else k()}}},b.hide=function(){var l=this;if(this._popper){var _=this.getTipElement(),E=function(){l._hoverState!=="show"&&_.parentNode&&_.parentNode.removeChild(_),l._cleanTipClass(),l._element.removeAttribute("aria-describedby"),L.trigger(l._element,l.constructor.Event.HIDDEN),l._popper&&(l._popper.destroy(),l._popper=null)};if(!L.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented){var H;if(_.classList.remove("show"),"ontouchstart"in document.documentElement&&(H=[]).concat.apply(H,document.body.children).forEach(function(fe){return L.off(fe,"mouseover",P)}),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,this.tip.classList.contains("fade")){var Z=g(_);L.one(_,"transitionend",E),m(_,Z)}else E();this._hoverState=""}}},b.update=function(){this._popper!==null&&this._popper.update()},b.isWithContent=function(){return!!this.getTitle()},b.getTipElement=function(){if(this.tip)return this.tip;var l=document.createElement("div");return l.innerHTML=this.config.template,this.tip=l.children[0],this.tip},b.setContent=function(){var l=this.getTipElement();this.setElementContent(Ie(".tooltip-inner",l),this.getTitle()),l.classList.remove("fade","show")},b.setElementContent=function(l,_){if(l!==null)return typeof _=="object"&&M(_)?(_.jquery&&(_=_[0]),void(this.config.html?_.parentNode!==l&&(l.innerHTML="",l.appendChild(_)):l.textContent=_.textContent)):void(this.config.html?(this.config.sanitize&&(_=Ve(_,this.config.allowList,this.config.sanitizeFn)),l.innerHTML=_):l.textContent=_)},b.getTitle=function(){var l=this._element.getAttribute("data-bs-original-title");return l||(l=typeof this.config.title=="function"?this.config.title.call(this._element):this.config.title),l},b.updateAttachment=function(l){return l==="right"?"end":l==="left"?"start":l},b._initializeOnDelegatedTarget=function(l,_){var E=this.constructor.DATA_KEY;return(_=_||y(l.delegateTarget,E))||(_=new this.constructor(l.delegateTarget,this._getDelegateConfig()),T(l.delegateTarget,E,_)),_},b._getOffset=function(){var l=this,_=this.config.offset;return typeof _=="string"?_.split(",").map(function(E){return Number.parseInt(E,10)}):typeof _=="function"?function(E){return _(E,l._element)}:_},b._getPopperConfig=function(l){var _=this,E={placement:l,modifiers:[{name:"flip",options:{altBoundary:!0,fallbackPlacements:this.config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this.config.boundary}},{name:"arrow",options:{element:"."+this.constructor.NAME+"-arrow"}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:function(H){return _._handlePopperPlacementChange(H)}}],onFirstUpdate:function(H){H.options.placement!==H.placement&&_._handlePopperPlacementChange(H)}};return s({},E,typeof this.config.popperConfig=="function"?this.config.popperConfig(E):this.config.popperConfig)},b._addAttachmentClass=function(l){this.getTipElement().classList.add("bs-tooltip-"+this.updateAttachment(l))},b._getContainer=function(){return this.config.container===!1?document.body:M(this.config.container)?this.config.container:Ie(this.config.container)},b._getAttachment=function(l){return j[l.toUpperCase()]},b._setListeners=function(){var l=this;this.config.trigger.split(" ").forEach(function(_){if(_==="click")L.on(l._element,l.constructor.Event.CLICK,l.config.selector,function(Z){return l.toggle(Z)});else if(_!=="manual"){var E=_==="hover"?l.constructor.Event.MOUSEENTER:l.constructor.Event.FOCUSIN,H=_==="hover"?l.constructor.Event.MOUSELEAVE:l.constructor.Event.FOCUSOUT;L.on(l._element,E,l.config.selector,function(Z){return l._enter(Z)}),L.on(l._element,H,l.config.selector,function(Z){return l._leave(Z)})}}),this._hideModalHandler=function(){l._element&&l.hide()},L.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=s({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},b._fixTitle=function(){var l=this._element.getAttribute("title"),_=typeof this._element.getAttribute("data-bs-original-title");(l||_!=="string")&&(this._element.setAttribute("data-bs-original-title",l||""),!l||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",l),this._element.setAttribute("title",""))},b._enter=function(l,_){_=this._initializeOnDelegatedTarget(l,_),l&&(_._activeTrigger[l.type==="focusin"?"focus":"hover"]=!0),_.getTipElement().classList.contains("show")||_._hoverState==="show"?_._hoverState="show":(clearTimeout(_._timeout),_._hoverState="show",_.config.delay&&_.config.delay.show?_._timeout=setTimeout(function(){_._hoverState==="show"&&_.show()},_.config.delay.show):_.show())},b._leave=function(l,_){_=this._initializeOnDelegatedTarget(l,_),l&&(_._activeTrigger[l.type==="focusout"?"focus":"hover"]=!1),_._isWithActiveTrigger()||(clearTimeout(_._timeout),_._hoverState="out",_.config.delay&&_.config.delay.hide?_._timeout=setTimeout(function(){_._hoverState==="out"&&_.hide()},_.config.delay.hide):_.hide())},b._isWithActiveTrigger=function(){for(var l in this._activeTrigger)if(this._activeTrigger[l])return!0;return!1},b._getConfig=function(l){var _=Ae.getDataAttributes(this._element);return Object.keys(_).forEach(function(E){B.has(E)&&delete _[E]}),l&&typeof l.container=="object"&&l.container.jquery&&(l.container=l.container[0]),typeof(l=s({},this.constructor.Default,_,typeof l=="object"&&l?l:{})).delay=="number"&&(l.delay={show:l.delay,hide:l.delay}),typeof l.title=="number"&&(l.title=l.title.toString()),typeof l.content=="number"&&(l.content=l.content.toString()),f("tooltip",l,this.constructor.DefaultType),l.sanitize&&(l.template=Ve(l.template,l.allowList,l.sanitizeFn)),l},b._getDelegateConfig=function(){var l={};if(this.config)for(var _ in this.config)this.constructor.Default[_]!==this.config[_]&&(l[_]=this.config[_]);return l},b._cleanTipClass=function(){var l=this.getTipElement(),_=l.getAttribute("class").match(at);_!==null&&_.length>0&&_.map(function(E){return E.trim()}).forEach(function(E){return l.classList.remove(E)})},b._handlePopperPlacementChange=function(l){var _=l.state;_&&(this.tip=_.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(_.placement)))},C.jQueryInterface=function(l){return this.each(function(){var _=y(this,"bs.tooltip"),E=typeof l=="object"&&l;if((_||!/dispose|hide/.test(l))&&(_||(_=new C(this,E)),typeof l=="string")){if(_[l]===void 0)throw new TypeError('No method named "'+l+'"');_[l]()}})},r(C,null,[{key:"Default",get:function(){return ne}},{key:"NAME",get:function(){return"tooltip"}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return Se}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return ve}}]),C}(le);D("tooltip",he);var Ge=new RegExp("(^|\\s)bs-popover\\S+","g"),ft=s({},he.Default,{placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),yt=s({},he.DefaultType,{content:"(string|element|function)"}),rt={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},Pt=function(R){function C(){return R.apply(this,arguments)||this}o(C,R);var b=C.prototype;return b.isWithContent=function(){return this.getTitle()||this._getContent()},b.setContent=function(){var l=this.getTipElement();this.setElementContent(Ie(".popover-header",l),this.getTitle());var _=this._getContent();typeof _=="function"&&(_=_.call(this._element)),this.setElementContent(Ie(".popover-body",l),_),l.classList.remove("fade","show")},b._addAttachmentClass=function(l){this.getTipElement().classList.add("bs-popover-"+this.updateAttachment(l))},b._getContent=function(){return this._element.getAttribute("data-bs-content")||this.config.content},b._cleanTipClass=function(){var l=this.getTipElement(),_=l.getAttribute("class").match(Ge);_!==null&&_.length>0&&_.map(function(E){return E.trim()}).forEach(function(E){return l.classList.remove(E)})},C.jQueryInterface=function(l){return this.each(function(){var _=y(this,"bs.popover"),E=typeof l=="object"?l:null;if((_||!/dispose|hide/.test(l))&&(_||(_=new C(this,E),T(this,"bs.popover",_)),typeof l=="string")){if(_[l]===void 0)throw new TypeError('No method named "'+l+'"');_[l]()}})},r(C,null,[{key:"Default",get:function(){return ft}},{key:"NAME",get:function(){return"popover"}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return rt}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return yt}}]),C}(he);D("popover",Pt);var kt={offset:10,method:"auto",target:""},Vi={offset:"number",method:"string",target:"(string|element)"},qn=function(R){function C(l,_){var E;return(E=R.call(this,l)||this)._scrollElement=l.tagName==="BODY"?window:l,E._config=E._getConfig(_),E._selector=E._config.target+" .nav-link, "+E._config.target+" .list-group-item, "+E._config.target+" .dropdown-item",E._offsets=[],E._targets=[],E._activeTarget=null,E._scrollHeight=0,L.on(E._scrollElement,"scroll.bs.scrollspy",function(){return E._process()}),E.refresh(),E._process(),E}o(C,R);var b=C.prototype;return b.refresh=function(){var l=this,_=this._scrollElement===this._scrollElement.window?"offset":"position",E=this._config.method==="auto"?_:this._config.method,H=E==="position"?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),He(this._selector).map(function(Z){var fe=h(Z),we=fe?Ie(fe):null;if(we){var Qe=we.getBoundingClientRect();if(Qe.width||Qe.height)return[Ae[E](we).top+H,fe]}return null}).filter(function(Z){return Z}).sort(function(Z,fe){return Z[0]-fe[0]}).forEach(function(Z){l._offsets.push(Z[0]),l._targets.push(Z[1])})},b.dispose=function(){R.prototype.dispose.call(this),L.off(this._scrollElement,".bs.scrollspy"),this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},b._getConfig=function(l){if(typeof(l=s({},kt,typeof l=="object"&&l?l:{})).target!="string"&&M(l.target)){var _=l.target.id;_||(_=d("scrollspy"),l.target.id=_),l.target="#"+_}return f("scrollspy",l,Vi),l},b._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},b._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},b._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},b._process=function(){var l=this._getScrollTop()+this._config.offset,_=this._getScrollHeight(),E=this._config.offset+_-this._getOffsetHeight();if(this._scrollHeight!==_&&this.refresh(),l>=E){var H=this._targets[this._targets.length-1];this._activeTarget!==H&&this._activate(H)}else{if(this._activeTarget&&l<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var Z=this._offsets.length;Z--;)this._activeTarget!==this._targets[Z]&&l>=this._offsets[Z]&&(this._offsets[Z+1]===void 0||l<this._offsets[Z+1])&&this._activate(this._targets[Z])}},b._activate=function(l){this._activeTarget=l,this._clear();var _=this._selector.split(",").map(function(H){return H+'[data-bs-target="'+l+'"],'+H+'[href="'+l+'"]'}),E=Ie(_.join(","));E.classList.contains("dropdown-item")?(Ie(".dropdown-toggle",E.closest(".dropdown")).classList.add("active"),E.classList.add("active")):(E.classList.add("active"),function(H,Z){for(var fe=[],we=H.parentNode;we&&we.nodeType===Node.ELEMENT_NODE&&we.nodeType!==3;)we.matches(Z)&&fe.push(we),we=we.parentNode;return fe}(E,".nav, .list-group").forEach(function(H){I(H,".nav-link, .list-group-item").forEach(function(Z){return Z.classList.add("active")}),I(H,".nav-item").forEach(function(Z){dt(Z,".nav-link").forEach(function(fe){return fe.classList.add("active")})})})),L.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:l})},b._clear=function(){He(this._selector).filter(function(l){return l.classList.contains("active")}).forEach(function(l){return l.classList.remove("active")})},C.jQueryInterface=function(l){return this.each(function(){var _=y(this,"bs.scrollspy");if(_||(_=new C(this,typeof l=="object"&&l)),typeof l=="string"){if(_[l]===void 0)throw new TypeError('No method named "'+l+'"');_[l]()}})},r(C,null,[{key:"Default",get:function(){return kt}},{key:"DATA_KEY",get:function(){return"bs.scrollspy"}}]),C}(le);L.on(window,"load.bs.scrollspy.data-api",function(){He('[data-bs-spy="scroll"]').forEach(function(R){return new qn(R,Ae.getDataAttributes(R))})}),D("scrollspy",qn);var Xt=function(R){function C(){return R.apply(this,arguments)||this}o(C,R);var b=C.prototype;return b.show=function(){var l=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active")||this._element.classList.contains("disabled"))){var _,E=p(this._element),H=this._element.closest(".nav, .list-group");if(H){var Z=H.nodeName==="UL"||H.nodeName==="OL"?":scope > li > .active":".active";_=(_=He(Z,H))[_.length-1]}var fe=_?L.trigger(_,"hide.bs.tab",{relatedTarget:this._element}):null;if(!(L.trigger(this._element,"show.bs.tab",{relatedTarget:_}).defaultPrevented||fe!==null&&fe.defaultPrevented)){this._activate(this._element,H);var we=function(){L.trigger(_,"hidden.bs.tab",{relatedTarget:l._element}),L.trigger(l._element,"shown.bs.tab",{relatedTarget:_})};E?this._activate(E,E.parentNode,we):we()}}},b._activate=function(l,_,E){var H=this,Z=(!_||_.nodeName!=="UL"&&_.nodeName!=="OL"?dt(_,".active"):He(":scope > li > .active",_))[0],fe=E&&Z&&Z.classList.contains("fade"),we=function(){return H._transitionComplete(l,Z,E)};if(Z&&fe){var Qe=g(Z);Z.classList.remove("show"),L.one(Z,"transitionend",we),m(Z,Qe)}else we()},b._transitionComplete=function(l,_,E){if(_){_.classList.remove("active");var H=Ie(":scope > .dropdown-menu .active",_.parentNode);H&&H.classList.remove("active"),_.getAttribute("role")==="tab"&&_.setAttribute("aria-selected",!1)}l.classList.add("active"),l.getAttribute("role")==="tab"&&l.setAttribute("aria-selected",!0),A(l),l.classList.contains("fade")&&l.classList.add("show"),l.parentNode&&l.parentNode.classList.contains("dropdown-menu")&&(l.closest(".dropdown")&&He(".dropdown-toggle").forEach(function(Z){return Z.classList.add("active")}),l.setAttribute("aria-expanded",!0)),E&&E()},C.jQueryInterface=function(l){return this.each(function(){var _=y(this,"bs.tab")||new C(this);if(typeof l=="string"){if(_[l]===void 0)throw new TypeError('No method named "'+l+'"');_[l]()}})},r(C,null,[{key:"DATA_KEY",get:function(){return"bs.tab"}}]),C}(le);L.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',function(R){R.preventDefault(),(y(this,"bs.tab")||new Xt(this)).show()}),D("tab",Xt);var Ei={animation:"boolean",autohide:"boolean",delay:"number"},Ti={animation:!0,autohide:!0,delay:5e3},bi=function(R){function C(l,_){var E;return(E=R.call(this,l)||this)._config=E._getConfig(_),E._timeout=null,E._setListeners(),E}o(C,R);var b=C.prototype;return b.show=function(){var l=this;if(!L.trigger(this._element,"show.bs.toast").defaultPrevented){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");var _=function(){l._element.classList.remove("showing"),l._element.classList.add("show"),L.trigger(l._element,"shown.bs.toast"),l._config.autohide&&(l._timeout=setTimeout(function(){l.hide()},l._config.delay))};if(this._element.classList.remove("hide"),A(this._element),this._element.classList.add("showing"),this._config.animation){var E=g(this._element);L.one(this._element,"transitionend",_),m(this._element,E)}else _()}},b.hide=function(){var l=this;if(this._element.classList.contains("show")&&!L.trigger(this._element,"hide.bs.toast").defaultPrevented){var _=function(){l._element.classList.add("hide"),L.trigger(l._element,"hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var E=g(this._element);L.one(this._element,"transitionend",_),m(this._element,E)}else _()}},b.dispose=function(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),L.off(this._element,"click.dismiss.bs.toast"),R.prototype.dispose.call(this),this._config=null},b._getConfig=function(l){return l=s({},Ti,Ae.getDataAttributes(this._element),typeof l=="object"&&l?l:{}),f("toast",l,this.constructor.DefaultType),l},b._setListeners=function(){var l=this;L.on(this._element,"click.dismiss.bs.toast",'[data-bs-dismiss="toast"]',function(){return l.hide()})},b._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},C.jQueryInterface=function(l){return this.each(function(){var _=y(this,"bs.toast");if(_||(_=new C(this,typeof l=="object"&&l)),typeof l=="string"){if(_[l]===void 0)throw new TypeError('No method named "'+l+'"');_[l](this)}})},r(C,null,[{key:"DefaultType",get:function(){return Ei}},{key:"Default",get:function(){return Ti}},{key:"DATA_KEY",get:function(){return"bs.toast"}}]),C}(le);return D("toast",bi),{Alert:be,Button:pe,Carousel:Ye,Collapse:Ce,Dropdown:We,Modal:Ne,Popover:Pt,ScrollSpy:qn,Tab:Xt,Toast:bi,Tooltip:he}});(function(i){typeof define=="function"&&define.amd?define(["jquery"],i):typeof ho<"u"?Cr.exports=i(require("jquery")):i(jQuery)})(function(i){var e=window.Slick||{};e=function(){var t=0;function n(r,s){var o=this,a;o.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(r),appendDots:i(r),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(c,d){return i('<button type="button" />').text(d+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},o.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(o,o.initials),o.activeBreakpoint=null,o.animType=null,o.animProp=null,o.breakpoints=[],o.breakpointSettings=[],o.cssTransitions=!1,o.focussed=!1,o.interrupted=!1,o.hidden="hidden",o.paused=!0,o.positionProp=null,o.respondTo=null,o.rowCount=1,o.shouldClick=!0,o.$slider=i(r),o.$slidesCache=null,o.transformType=null,o.transitionType=null,o.visibilityChange="visibilitychange",o.windowWidth=0,o.windowTimer=null,a=i(r).data("slick")||{},o.options=i.extend({},o.defaults,s,a),o.currentSlide=o.options.initialSlide,o.originalSettings=o.options,typeof document.mozHidden<"u"?(o.hidden="mozHidden",o.visibilityChange="mozvisibilitychange"):typeof document.webkitHidden<"u"&&(o.hidden="webkitHidden",o.visibilityChange="webkitvisibilitychange"),o.autoPlay=i.proxy(o.autoPlay,o),o.autoPlayClear=i.proxy(o.autoPlayClear,o),o.autoPlayIterator=i.proxy(o.autoPlayIterator,o),o.changeSlide=i.proxy(o.changeSlide,o),o.clickHandler=i.proxy(o.clickHandler,o),o.selectHandler=i.proxy(o.selectHandler,o),o.setPosition=i.proxy(o.setPosition,o),o.swipeHandler=i.proxy(o.swipeHandler,o),o.dragHandler=i.proxy(o.dragHandler,o),o.keyHandler=i.proxy(o.keyHandler,o),o.instanceUid=t++,o.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,o.registerBreakpoints(),o.init(!0)}return n}(),e.prototype.activateADA=function(){var t=this;t.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(t,n,r){var s=this;if(typeof n=="boolean")r=n,n=null;else if(n<0||n>=s.slideCount)return!1;s.unload(),typeof n=="number"?n===0&&s.$slides.length===0?i(t).appendTo(s.$slideTrack):r?i(t).insertBefore(s.$slides.eq(n)):i(t).insertAfter(s.$slides.eq(n)):r===!0?i(t).prependTo(s.$slideTrack):i(t).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(o,a){i(a).attr("data-slick-index",o)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var t=this;if(t.options.slidesToShow===1&&t.options.adaptiveHeight===!0&&t.options.vertical===!1){var n=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.animate({height:n},t.options.speed)}},e.prototype.animateSlide=function(t,n){var r={},s=this;s.animateHeight(),s.options.rtl===!0&&s.options.vertical===!1&&(t=-t),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:t},s.options.speed,s.options.easing,n):s.$slideTrack.animate({top:t},s.options.speed,s.options.easing,n):s.cssTransitions===!1?(s.options.rtl===!0&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:t},{duration:s.options.speed,easing:s.options.easing,step:function(o){o=Math.ceil(o),s.options.vertical===!1?(r[s.animType]="translate("+o+"px, 0px)",s.$slideTrack.css(r)):(r[s.animType]="translate(0px,"+o+"px)",s.$slideTrack.css(r))},complete:function(){n&&n.call()}})):(s.applyTransition(),t=Math.ceil(t),s.options.vertical===!1?r[s.animType]="translate3d("+t+"px, 0px, 0px)":r[s.animType]="translate3d(0px,"+t+"px, 0px)",s.$slideTrack.css(r),n&&setTimeout(function(){s.disableTransition(),n.call()},s.options.speed))},e.prototype.getNavTarget=function(){var t=this,n=t.options.asNavFor;return n&&n!==null&&(n=i(n).not(t.$slider)),n},e.prototype.asNavFor=function(t){var n=this,r=n.getNavTarget();r!==null&&typeof r=="object"&&r.each(function(){var s=i(this).slick("getSlick");s.unslicked||s.slideHandler(t,!0)})},e.prototype.applyTransition=function(t){var n=this,r={};n.options.fade===!1?r[n.transitionType]=n.transformType+" "+n.options.speed+"ms "+n.options.cssEase:r[n.transitionType]="opacity "+n.options.speed+"ms "+n.options.cssEase,n.options.fade===!1?n.$slideTrack.css(r):n.$slides.eq(t).css(r)},e.prototype.autoPlay=function(){var t=this;t.autoPlayClear(),t.slideCount>t.options.slidesToShow&&(t.autoPlayTimer=setInterval(t.autoPlayIterator,t.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var t=this;t.autoPlayTimer&&clearInterval(t.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var t=this,n=t.currentSlide+t.options.slidesToScroll;!t.paused&&!t.interrupted&&!t.focussed&&(t.options.infinite===!1&&(t.direction===1&&t.currentSlide+1===t.slideCount-1?t.direction=0:t.direction===0&&(n=t.currentSlide-t.options.slidesToScroll,t.currentSlide-1===0&&(t.direction=1))),t.slideHandler(n))},e.prototype.buildArrows=function(){var t=this;t.options.arrows===!0&&(t.$prevArrow=i(t.options.prevArrow).addClass("slick-arrow"),t.$nextArrow=i(t.options.nextArrow).addClass("slick-arrow"),t.slideCount>t.options.slidesToShow?(t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.prependTo(t.options.appendArrows),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.appendTo(t.options.appendArrows),t.options.infinite!==!0&&t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var t=this,n,r;if(t.options.dots===!0){for(t.$slider.addClass("slick-dotted"),r=i("<ul />").addClass(t.options.dotsClass),n=0;n<=t.getDotCount();n+=1)r.append(i("<li />").append(t.options.customPaging.call(this,t,n)));t.$dots=r.appendTo(t.options.appendDots),t.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var t=this;t.$slides=t.$slider.children(t.options.slide+":not(.slick-cloned)").addClass("slick-slide"),t.slideCount=t.$slides.length,t.$slides.each(function(n,r){i(r).attr("data-slick-index",n).data("originalStyling",i(r).attr("style")||"")}),t.$slider.addClass("slick-slider"),t.$slideTrack=t.slideCount===0?i('<div class="slick-track"/>').appendTo(t.$slider):t.$slides.wrapAll('<div class="slick-track"/>').parent(),t.$list=t.$slideTrack.wrap('<div class="slick-list"/>').parent(),t.$slideTrack.css("opacity",0),(t.options.centerMode===!0||t.options.swipeToSlide===!0)&&(t.options.slidesToScroll=1),i("img[data-lazy]",t.$slider).not("[src]").addClass("slick-loading"),t.setupInfinite(),t.buildArrows(),t.buildDots(),t.updateDots(),t.setSlideClasses(typeof t.currentSlide=="number"?t.currentSlide:0),t.options.draggable===!0&&t.$list.addClass("draggable")},e.prototype.buildRows=function(){var t=this,n,r,s,o,a,c,d;if(o=document.createDocumentFragment(),c=t.$slider.children(),t.options.rows>1){for(d=t.options.slidesPerRow*t.options.rows,a=Math.ceil(c.length/d),n=0;n<a;n++){var u=document.createElement("div");for(r=0;r<t.options.rows;r++){var h=document.createElement("div");for(s=0;s<t.options.slidesPerRow;s++){var p=n*d+(r*t.options.slidesPerRow+s);c.get(p)&&h.appendChild(c.get(p))}u.appendChild(h)}o.appendChild(u)}t.$slider.empty().append(o),t.$slider.children().children().children().css({width:100/t.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(t,n){var r=this,s,o,a,c=!1,d=r.$slider.width(),u=window.innerWidth||i(window).width();if(r.respondTo==="window"?a=u:r.respondTo==="slider"?a=d:r.respondTo==="min"&&(a=Math.min(u,d)),r.options.responsive&&r.options.responsive.length&&r.options.responsive!==null){o=null;for(s in r.breakpoints)r.breakpoints.hasOwnProperty(s)&&(r.originalSettings.mobileFirst===!1?a<r.breakpoints[s]&&(o=r.breakpoints[s]):a>r.breakpoints[s]&&(o=r.breakpoints[s]));o!==null?r.activeBreakpoint!==null?(o!==r.activeBreakpoint||n)&&(r.activeBreakpoint=o,r.breakpointSettings[o]==="unslick"?r.unslick(o):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[o]),t===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),c=o):(r.activeBreakpoint=o,r.breakpointSettings[o]==="unslick"?r.unslick(o):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[o]),t===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(t)),c=o):r.activeBreakpoint!==null&&(r.activeBreakpoint=null,r.options=r.originalSettings,t===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(t),c=o),!t&&c!==!1&&r.$slider.trigger("breakpoint",[r,c])}},e.prototype.changeSlide=function(t,n){var r=this,s=i(t.currentTarget),o,a,c;switch(s.is("a")&&t.preventDefault(),s.is("li")||(s=s.closest("li")),c=r.slideCount%r.options.slidesToScroll!==0,o=c?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,t.data.message){case"previous":a=o===0?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-a,!1,n);break;case"next":a=o===0?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+a,!1,n);break;case"index":var d=t.data.index===0?0:t.data.index||s.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,n),s.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(t){var n=this,r,s;if(r=n.getNavigableIndexes(),s=0,t>r[r.length-1])t=r[r.length-1];else for(var o in r){if(t<r[o]){t=s;break}s=r[o]}return t},e.prototype.cleanUpEvents=function(){var t=this;t.options.dots&&t.$dots!==null&&(i("li",t.$dots).off("click.slick",t.changeSlide).off("mouseenter.slick",i.proxy(t.interrupt,t,!0)).off("mouseleave.slick",i.proxy(t.interrupt,t,!1)),t.options.accessibility===!0&&t.$dots.off("keydown.slick",t.keyHandler)),t.$slider.off("focus.slick blur.slick"),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow&&t.$prevArrow.off("click.slick",t.changeSlide),t.$nextArrow&&t.$nextArrow.off("click.slick",t.changeSlide),t.options.accessibility===!0&&(t.$prevArrow&&t.$prevArrow.off("keydown.slick",t.keyHandler),t.$nextArrow&&t.$nextArrow.off("keydown.slick",t.keyHandler))),t.$list.off("touchstart.slick mousedown.slick",t.swipeHandler),t.$list.off("touchmove.slick mousemove.slick",t.swipeHandler),t.$list.off("touchend.slick mouseup.slick",t.swipeHandler),t.$list.off("touchcancel.slick mouseleave.slick",t.swipeHandler),t.$list.off("click.slick",t.clickHandler),i(document).off(t.visibilityChange,t.visibility),t.cleanUpSlideEvents(),t.options.accessibility===!0&&t.$list.off("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&i(t.$slideTrack).children().off("click.slick",t.selectHandler),i(window).off("orientationchange.slick.slick-"+t.instanceUid,t.orientationChange),i(window).off("resize.slick.slick-"+t.instanceUid,t.resize),i("[draggable!=true]",t.$slideTrack).off("dragstart",t.preventDefault),i(window).off("load.slick.slick-"+t.instanceUid,t.setPosition)},e.prototype.cleanUpSlideEvents=function(){var t=this;t.$list.off("mouseenter.slick",i.proxy(t.interrupt,t,!0)),t.$list.off("mouseleave.slick",i.proxy(t.interrupt,t,!1))},e.prototype.cleanUpRows=function(){var t=this,n;t.options.rows>1&&(n=t.$slides.children().children(),n.removeAttr("style"),t.$slider.empty().append(n))},e.prototype.clickHandler=function(t){var n=this;n.shouldClick===!1&&(t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault())},e.prototype.destroy=function(t){var n=this;n.autoPlayClear(),n.touchObject={},n.cleanUpEvents(),i(".slick-cloned",n.$slider).detach(),n.$dots&&n.$dots.remove(),n.$prevArrow&&n.$prevArrow.length&&(n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.prevArrow)&&n.$prevArrow.remove()),n.$nextArrow&&n.$nextArrow.length&&(n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),n.htmlExpr.test(n.options.nextArrow)&&n.$nextArrow.remove()),n.$slides&&(n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),n.$slideTrack.children(this.options.slide).detach(),n.$slideTrack.detach(),n.$list.detach(),n.$slider.append(n.$slides)),n.cleanUpRows(),n.$slider.removeClass("slick-slider"),n.$slider.removeClass("slick-initialized"),n.$slider.removeClass("slick-dotted"),n.unslicked=!0,t||n.$slider.trigger("destroy",[n])},e.prototype.disableTransition=function(t){var n=this,r={};r[n.transitionType]="",n.options.fade===!1?n.$slideTrack.css(r):n.$slides.eq(t).css(r)},e.prototype.fadeSlide=function(t,n){var r=this;r.cssTransitions===!1?(r.$slides.eq(t).css({zIndex:r.options.zIndex}),r.$slides.eq(t).animate({opacity:1},r.options.speed,r.options.easing,n)):(r.applyTransition(t),r.$slides.eq(t).css({opacity:1,zIndex:r.options.zIndex}),n&&setTimeout(function(){r.disableTransition(t),n.call()},r.options.speed))},e.prototype.fadeSlideOut=function(t){var n=this;n.cssTransitions===!1?n.$slides.eq(t).animate({opacity:0,zIndex:n.options.zIndex-2},n.options.speed,n.options.easing):(n.applyTransition(t),n.$slides.eq(t).css({opacity:0,zIndex:n.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(t){var n=this;t!==null&&(n.$slidesCache=n.$slides,n.unload(),n.$slideTrack.children(this.options.slide).detach(),n.$slidesCache.filter(t).appendTo(n.$slideTrack),n.reinit())},e.prototype.focusHandler=function(){var t=this;t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(n){n.stopImmediatePropagation();var r=i(this);setTimeout(function(){t.options.pauseOnFocus&&(t.focussed=r.is(":focus"),t.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var t=this;return t.currentSlide},e.prototype.getDotCount=function(){var t=this,n=0,r=0,s=0;if(t.options.infinite===!0)if(t.slideCount<=t.options.slidesToShow)++s;else for(;n<t.slideCount;)++s,n=r+t.options.slidesToScroll,r+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;else if(t.options.centerMode===!0)s=t.slideCount;else if(!t.options.asNavFor)s=1+Math.ceil((t.slideCount-t.options.slidesToShow)/t.options.slidesToScroll);else for(;n<t.slideCount;)++s,n=r+t.options.slidesToScroll,r+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return s-1},e.prototype.getLeft=function(t){var n=this,r,s,o=0,a,c;return n.slideOffset=0,s=n.$slides.first().outerHeight(!0),n.options.infinite===!0?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,c=-1,n.options.vertical===!0&&n.options.centerMode===!0&&(n.options.slidesToShow===2?c=-1.5:n.options.slidesToShow===1&&(c=-2)),o=s*n.options.slidesToShow*c),n.slideCount%n.options.slidesToScroll!==0&&t+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(t>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(t-n.slideCount))*n.slideWidth*-1,o=(n.options.slidesToShow-(t-n.slideCount))*s*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,o=n.slideCount%n.options.slidesToScroll*s*-1))):t+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(t+n.options.slidesToShow-n.slideCount)*n.slideWidth,o=(t+n.options.slidesToShow-n.slideCount)*s),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,o=0),n.options.centerMode===!0&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:n.options.centerMode===!0&&n.options.infinite===!0?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:n.options.centerMode===!0&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),n.options.vertical===!1?r=t*n.slideWidth*-1+n.slideOffset:r=t*s*-1+o,n.options.variableWidth===!0&&(n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?a=n.$slideTrack.children(".slick-slide").eq(t):a=n.$slideTrack.children(".slick-slide").eq(t+n.options.slidesToShow),n.options.rtl===!0?a[0]?r=(n.$slideTrack.width()-a[0].offsetLeft-a.width())*-1:r=0:r=a[0]?a[0].offsetLeft*-1:0,n.options.centerMode===!0&&(n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?a=n.$slideTrack.children(".slick-slide").eq(t):a=n.$slideTrack.children(".slick-slide").eq(t+n.options.slidesToShow+1),n.options.rtl===!0?a[0]?r=(n.$slideTrack.width()-a[0].offsetLeft-a.width())*-1:r=0:r=a[0]?a[0].offsetLeft*-1:0,r+=(n.$list.width()-a.outerWidth())/2)),r},e.prototype.getOption=e.prototype.slickGetOption=function(t){var n=this;return n.options[t]},e.prototype.getNavigableIndexes=function(){var t=this,n=0,r=0,s=[],o;for(t.options.infinite===!1?o=t.slideCount:(n=t.options.slidesToScroll*-1,r=t.options.slidesToScroll*-1,o=t.slideCount*2);n<o;)s.push(n),n=r+t.options.slidesToScroll,r+=t.options.slidesToScroll<=t.options.slidesToShow?t.options.slidesToScroll:t.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var t=this,n,r,s;return s=t.options.centerMode===!0?t.slideWidth*Math.floor(t.options.slidesToShow/2):0,t.options.swipeToSlide===!0?(t.$slideTrack.find(".slick-slide").each(function(o,a){if(a.offsetLeft-s+i(a).outerWidth()/2>t.swipeLeft*-1)return r=a,!1}),n=Math.abs(i(r).attr("data-slick-index")-t.currentSlide)||1,n):t.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(t,n){var r=this;r.changeSlide({data:{message:"index",index:parseInt(t)}},n)},e.prototype.init=function(t){var n=this;i(n.$slider).hasClass("slick-initialized")||(i(n.$slider).addClass("slick-initialized"),n.buildRows(),n.buildOut(),n.setProps(),n.startLoad(),n.loadSlider(),n.initializeEvents(),n.updateArrows(),n.updateDots(),n.checkResponsive(!0),n.focusHandler()),t&&n.$slider.trigger("init",[n]),n.options.accessibility===!0&&n.initADA(),n.options.autoplay&&(n.paused=!1,n.autoPlay())},e.prototype.initADA=function(){var t=this,n=Math.ceil(t.slideCount/t.options.slidesToShow),r=t.getNavigableIndexes().filter(function(a){return a>=0&&a<t.slideCount});t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),t.$dots!==null&&(t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(a){var c=r.indexOf(a);i(this).attr({role:"tabpanel",id:"slick-slide"+t.instanceUid+a,tabindex:-1}),c!==-1&&i(this).attr({"aria-describedby":"slick-slide-control"+t.instanceUid+c})}),t.$dots.attr("role","tablist").find("li").each(function(a){var c=r[a];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+t.instanceUid+a,"aria-controls":"slick-slide"+t.instanceUid+c,"aria-label":a+1+" of "+n,"aria-selected":null,tabindex:"-1"})}).eq(t.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=t.currentSlide,o=s+t.options.slidesToShow;s<o;s++)t.$slides.eq(s).attr("tabindex",0);t.activateADA()},e.prototype.initArrowEvents=function(){var t=this;t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},t.changeSlide),t.$nextArrow.off("click.slick").on("click.slick",{message:"next"},t.changeSlide),t.options.accessibility===!0&&(t.$prevArrow.on("keydown.slick",t.keyHandler),t.$nextArrow.on("keydown.slick",t.keyHandler)))},e.prototype.initDotEvents=function(){var t=this;t.options.dots===!0&&(i("li",t.$dots).on("click.slick",{message:"index"},t.changeSlide),t.options.accessibility===!0&&t.$dots.on("keydown.slick",t.keyHandler)),t.options.dots===!0&&t.options.pauseOnDotsHover===!0&&i("li",t.$dots).on("mouseenter.slick",i.proxy(t.interrupt,t,!0)).on("mouseleave.slick",i.proxy(t.interrupt,t,!1))},e.prototype.initSlideEvents=function(){var t=this;t.options.pauseOnHover&&(t.$list.on("mouseenter.slick",i.proxy(t.interrupt,t,!0)),t.$list.on("mouseleave.slick",i.proxy(t.interrupt,t,!1)))},e.prototype.initializeEvents=function(){var t=this;t.initArrowEvents(),t.initDotEvents(),t.initSlideEvents(),t.$list.on("touchstart.slick mousedown.slick",{action:"start"},t.swipeHandler),t.$list.on("touchmove.slick mousemove.slick",{action:"move"},t.swipeHandler),t.$list.on("touchend.slick mouseup.slick",{action:"end"},t.swipeHandler),t.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},t.swipeHandler),t.$list.on("click.slick",t.clickHandler),i(document).on(t.visibilityChange,i.proxy(t.visibility,t)),t.options.accessibility===!0&&t.$list.on("keydown.slick",t.keyHandler),t.options.focusOnSelect===!0&&i(t.$slideTrack).children().on("click.slick",t.selectHandler),i(window).on("orientationchange.slick.slick-"+t.instanceUid,i.proxy(t.orientationChange,t)),i(window).on("resize.slick.slick-"+t.instanceUid,i.proxy(t.resize,t)),i("[draggable!=true]",t.$slideTrack).on("dragstart",t.preventDefault),i(window).on("load.slick.slick-"+t.instanceUid,t.setPosition),i(t.setPosition)},e.prototype.initUI=function(){var t=this;t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.show(),t.$nextArrow.show()),t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&t.$dots.show()},e.prototype.keyHandler=function(t){var n=this;t.target.tagName.match("TEXTAREA|INPUT|SELECT")||(t.keyCode===37&&n.options.accessibility===!0?n.changeSlide({data:{message:n.options.rtl===!0?"next":"previous"}}):t.keyCode===39&&n.options.accessibility===!0&&n.changeSlide({data:{message:n.options.rtl===!0?"previous":"next"}}))},e.prototype.lazyLoad=function(){var t=this,n,r,s,o;function a(p){i("img[data-lazy]",p).each(function(){var g=i(this),S=i(this).attr("data-lazy"),M=i(this).attr("data-srcset"),m=i(this).attr("data-sizes")||t.$slider.attr("data-sizes"),f=document.createElement("img");f.onload=function(){g.animate({opacity:0},100,function(){M&&(g.attr("srcset",M),m&&g.attr("sizes",m)),g.attr("src",S).animate({opacity:1},200,function(){g.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),t.$slider.trigger("lazyLoaded",[t,g,S])})},f.onerror=function(){g.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),t.$slider.trigger("lazyLoadError",[t,g,S])},f.src=S})}if(t.options.centerMode===!0?t.options.infinite===!0?(s=t.currentSlide+(t.options.slidesToShow/2+1),o=s+t.options.slidesToShow+2):(s=Math.max(0,t.currentSlide-(t.options.slidesToShow/2+1)),o=2+(t.options.slidesToShow/2+1)+t.currentSlide):(s=t.options.infinite?t.options.slidesToShow+t.currentSlide:t.currentSlide,o=Math.ceil(s+t.options.slidesToShow),t.options.fade===!0&&(s>0&&s--,o<=t.slideCount&&o++)),n=t.$slider.find(".slick-slide").slice(s,o),t.options.lazyLoad==="anticipated")for(var c=s-1,d=o,u=t.$slider.find(".slick-slide"),h=0;h<t.options.slidesToScroll;h++)c<0&&(c=t.slideCount-1),n=n.add(u.eq(c)),n=n.add(u.eq(d)),c--,d++;a(n),t.slideCount<=t.options.slidesToShow?(r=t.$slider.find(".slick-slide"),a(r)):t.currentSlide>=t.slideCount-t.options.slidesToShow?(r=t.$slider.find(".slick-cloned").slice(0,t.options.slidesToShow),a(r)):t.currentSlide===0&&(r=t.$slider.find(".slick-cloned").slice(t.options.slidesToShow*-1),a(r))},e.prototype.loadSlider=function(){var t=this;t.setPosition(),t.$slideTrack.css({opacity:1}),t.$slider.removeClass("slick-loading"),t.initUI(),t.options.lazyLoad==="progressive"&&t.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var t=this;t.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var t=this;t.checkResponsive(),t.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var t=this;t.autoPlayClear(),t.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var t=this;t.autoPlay(),t.options.autoplay=!0,t.paused=!1,t.focussed=!1,t.interrupted=!1},e.prototype.postSlide=function(t){var n=this;if(!n.unslicked&&(n.$slider.trigger("afterChange",[n,t]),n.animating=!1,n.slideCount>n.options.slidesToShow&&n.setPosition(),n.swipeLeft=null,n.options.autoplay&&n.autoPlay(),n.options.accessibility===!0&&(n.initADA(),n.options.focusOnChange))){var r=i(n.$slides.get(n.currentSlide));r.attr("tabindex",0).focus()}},e.prototype.prev=e.prototype.slickPrev=function(){var t=this;t.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(t){t.preventDefault()},e.prototype.progressiveLazyLoad=function(t){t=t||1;var n=this,r=i("img[data-lazy]",n.$slider),s,o,a,c,d;r.length?(s=r.first(),o=s.attr("data-lazy"),a=s.attr("data-srcset"),c=s.attr("data-sizes")||n.$slider.attr("data-sizes"),d=document.createElement("img"),d.onload=function(){a&&(s.attr("srcset",a),c&&s.attr("sizes",c)),s.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),n.options.adaptiveHeight===!0&&n.setPosition(),n.$slider.trigger("lazyLoaded",[n,s,o]),n.progressiveLazyLoad()},d.onerror=function(){t<3?setTimeout(function(){n.progressiveLazyLoad(t+1)},500):(s.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,s,o]),n.progressiveLazyLoad())},d.src=o):n.$slider.trigger("allImagesLoaded",[n])},e.prototype.refresh=function(t){var n=this,r,s;s=n.slideCount-n.options.slidesToShow,!n.options.infinite&&n.currentSlide>s&&(n.currentSlide=s),n.slideCount<=n.options.slidesToShow&&(n.currentSlide=0),r=n.currentSlide,n.destroy(!0),i.extend(n,n.initials,{currentSlide:r}),n.init(),t||n.changeSlide({data:{message:"index",index:r}},!1)},e.prototype.registerBreakpoints=function(){var t=this,n,r,s,o=t.options.responsive||null;if(i.type(o)==="array"&&o.length){t.respondTo=t.options.respondTo||"window";for(n in o)if(s=t.breakpoints.length-1,o.hasOwnProperty(n)){for(r=o[n].breakpoint;s>=0;)t.breakpoints[s]&&t.breakpoints[s]===r&&t.breakpoints.splice(s,1),s--;t.breakpoints.push(r),t.breakpointSettings[r]=o[n].settings}t.breakpoints.sort(function(a,c){return t.options.mobileFirst?a-c:c-a})}},e.prototype.reinit=function(){var t=this;t.$slides=t.$slideTrack.children(t.options.slide).addClass("slick-slide"),t.slideCount=t.$slides.length,t.currentSlide>=t.slideCount&&t.currentSlide!==0&&(t.currentSlide=t.currentSlide-t.options.slidesToScroll),t.slideCount<=t.options.slidesToShow&&(t.currentSlide=0),t.registerBreakpoints(),t.setProps(),t.setupInfinite(),t.buildArrows(),t.updateArrows(),t.initArrowEvents(),t.buildDots(),t.updateDots(),t.initDotEvents(),t.cleanUpSlideEvents(),t.initSlideEvents(),t.checkResponsive(!1,!0),t.options.focusOnSelect===!0&&i(t.$slideTrack).children().on("click.slick",t.selectHandler),t.setSlideClasses(typeof t.currentSlide=="number"?t.currentSlide:0),t.setPosition(),t.focusHandler(),t.paused=!t.options.autoplay,t.autoPlay(),t.$slider.trigger("reInit",[t])},e.prototype.resize=function(){var t=this;i(window).width()!==t.windowWidth&&(clearTimeout(t.windowDelay),t.windowDelay=window.setTimeout(function(){t.windowWidth=i(window).width(),t.checkResponsive(),t.unslicked||t.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(t,n,r){var s=this;if(typeof t=="boolean"?(n=t,t=n===!0?0:s.slideCount-1):t=n===!0?--t:t,s.slideCount<1||t<0||t>s.slideCount-1)return!1;s.unload(),r===!0?s.$slideTrack.children().remove():s.$slideTrack.children(this.options.slide).eq(t).remove(),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slidesCache=s.$slides,s.reinit()},e.prototype.setCSS=function(t){var n=this,r={},s,o;n.options.rtl===!0&&(t=-t),s=n.positionProp=="left"?Math.ceil(t)+"px":"0px",o=n.positionProp=="top"?Math.ceil(t)+"px":"0px",r[n.positionProp]=t,n.transformsEnabled===!1?n.$slideTrack.css(r):(r={},n.cssTransitions===!1?(r[n.animType]="translate("+s+", "+o+")",n.$slideTrack.css(r)):(r[n.animType]="translate3d("+s+", "+o+", 0px)",n.$slideTrack.css(r)))},e.prototype.setDimensions=function(){var t=this;t.options.vertical===!1?t.options.centerMode===!0&&t.$list.css({padding:"0px "+t.options.centerPadding}):(t.$list.height(t.$slides.first().outerHeight(!0)*t.options.slidesToShow),t.options.centerMode===!0&&t.$list.css({padding:t.options.centerPadding+" 0px"})),t.listWidth=t.$list.width(),t.listHeight=t.$list.height(),t.options.vertical===!1&&t.options.variableWidth===!1?(t.slideWidth=Math.ceil(t.listWidth/t.options.slidesToShow),t.$slideTrack.width(Math.ceil(t.slideWidth*t.$slideTrack.children(".slick-slide").length))):t.options.variableWidth===!0?t.$slideTrack.width(5e3*t.slideCount):(t.slideWidth=Math.ceil(t.listWidth),t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0)*t.$slideTrack.children(".slick-slide").length)));var n=t.$slides.first().outerWidth(!0)-t.$slides.first().width();t.options.variableWidth===!1&&t.$slideTrack.children(".slick-slide").width(t.slideWidth-n)},e.prototype.setFade=function(){var t=this,n;t.$slides.each(function(r,s){n=t.slideWidth*r*-1,t.options.rtl===!0?i(s).css({position:"relative",right:n,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:n,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var t=this;if(t.options.slidesToShow===1&&t.options.adaptiveHeight===!0&&t.options.vertical===!1){var n=t.$slides.eq(t.currentSlide).outerHeight(!0);t.$list.css("height",n)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var t=this,n,r,s,o,a=!1,c;if(i.type(arguments[0])==="object"?(s=arguments[0],a=arguments[1],c="multiple"):i.type(arguments[0])==="string"&&(s=arguments[0],o=arguments[1],a=arguments[2],arguments[0]==="responsive"&&i.type(arguments[1])==="array"?c="responsive":typeof arguments[1]<"u"&&(c="single")),c==="single")t.options[s]=o;else if(c==="multiple")i.each(s,function(d,u){t.options[d]=u});else if(c==="responsive")for(r in o)if(i.type(t.options.responsive)!=="array")t.options.responsive=[o[r]];else{for(n=t.options.responsive.length-1;n>=0;)t.options.responsive[n].breakpoint===o[r].breakpoint&&t.options.responsive.splice(n,1),n--;t.options.responsive.push(o[r])}a&&(t.unload(),t.reinit())},e.prototype.setPosition=function(){var t=this;t.setDimensions(),t.setHeight(),t.options.fade===!1?t.setCSS(t.getLeft(t.currentSlide)):t.setFade(),t.$slider.trigger("setPosition",[t])},e.prototype.setProps=function(){var t=this,n=document.body.style;t.positionProp=t.options.vertical===!0?"top":"left",t.positionProp==="top"?t.$slider.addClass("slick-vertical"):t.$slider.removeClass("slick-vertical"),(n.WebkitTransition!==void 0||n.MozTransition!==void 0||n.msTransition!==void 0)&&t.options.useCSS===!0&&(t.cssTransitions=!0),t.options.fade&&(typeof t.options.zIndex=="number"?t.options.zIndex<3&&(t.options.zIndex=3):t.options.zIndex=t.defaults.zIndex),n.OTransform!==void 0&&(t.animType="OTransform",t.transformType="-o-transform",t.transitionType="OTransition",n.perspectiveProperty===void 0&&n.webkitPerspective===void 0&&(t.animType=!1)),n.MozTransform!==void 0&&(t.animType="MozTransform",t.transformType="-moz-transform",t.transitionType="MozTransition",n.perspectiveProperty===void 0&&n.MozPerspective===void 0&&(t.animType=!1)),n.webkitTransform!==void 0&&(t.animType="webkitTransform",t.transformType="-webkit-transform",t.transitionType="webkitTransition",n.perspectiveProperty===void 0&&n.webkitPerspective===void 0&&(t.animType=!1)),n.msTransform!==void 0&&(t.animType="msTransform",t.transformType="-ms-transform",t.transitionType="msTransition",n.msTransform===void 0&&(t.animType=!1)),n.transform!==void 0&&t.animType!==!1&&(t.animType="transform",t.transformType="transform",t.transitionType="transition"),t.transformsEnabled=t.options.useTransform&&t.animType!==null&&t.animType!==!1},e.prototype.setSlideClasses=function(t){var n=this,r,s,o,a;if(s=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(t).addClass("slick-current"),n.options.centerMode===!0){var c=n.options.slidesToShow%2===0?1:0;r=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(t>=r&&t<=n.slideCount-1-r?n.$slides.slice(t-r+c,t+r+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+t,s.slice(o-r+1+c,o+r+2).addClass("slick-active").attr("aria-hidden","false")),t===0?s.eq(s.length-1-n.options.slidesToShow).addClass("slick-center"):t===n.slideCount-1&&s.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(t).addClass("slick-center")}else t>=0&&t<=n.slideCount-n.options.slidesToShow?n.$slides.slice(t,t+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):s.length<=n.options.slidesToShow?s.addClass("slick-active").attr("aria-hidden","false"):(a=n.slideCount%n.options.slidesToShow,o=n.options.infinite===!0?n.options.slidesToShow+t:t,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-t<n.options.slidesToShow?s.slice(o-(n.options.slidesToShow-a),o+a).addClass("slick-active").attr("aria-hidden","false"):s.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));(n.options.lazyLoad==="ondemand"||n.options.lazyLoad==="anticipated")&&n.lazyLoad()},e.prototype.setupInfinite=function(){var t=this,n,r,s;if(t.options.fade===!0&&(t.options.centerMode=!1),t.options.infinite===!0&&t.options.fade===!1&&(r=null,t.slideCount>t.options.slidesToShow)){for(t.options.centerMode===!0?s=t.options.slidesToShow+1:s=t.options.slidesToShow,n=t.slideCount;n>t.slideCount-s;n-=1)r=n-1,i(t.$slides[r]).clone(!0).attr("id","").attr("data-slick-index",r-t.slideCount).prependTo(t.$slideTrack).addClass("slick-cloned");for(n=0;n<s+t.slideCount;n+=1)r=n,i(t.$slides[r]).clone(!0).attr("id","").attr("data-slick-index",r+t.slideCount).appendTo(t.$slideTrack).addClass("slick-cloned");t.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(t){var n=this;t||n.autoPlay(),n.interrupted=t},e.prototype.selectHandler=function(t){var n=this,r=i(t.target).is(".slick-slide")?i(t.target):i(t.target).parents(".slick-slide"),s=parseInt(r.attr("data-slick-index"));if(s||(s=0),n.slideCount<=n.options.slidesToShow){n.slideHandler(s,!1,!0);return}n.slideHandler(s)},e.prototype.slideHandler=function(t,n,r){var s,o,a,c,d=null,u=this,h;if(n=n||!1,!(u.animating===!0&&u.options.waitForAnimate===!0)&&!(u.options.fade===!0&&u.currentSlide===t)){if(n===!1&&u.asNavFor(t),s=t,d=u.getLeft(s),c=u.getLeft(u.currentSlide),u.currentLeft=u.swipeLeft===null?c:u.swipeLeft,u.options.infinite===!1&&u.options.centerMode===!1&&(t<0||t>u.getDotCount()*u.options.slidesToScroll)){u.options.fade===!1&&(s=u.currentSlide,r!==!0?u.animateSlide(c,function(){u.postSlide(s)}):u.postSlide(s));return}else if(u.options.infinite===!1&&u.options.centerMode===!0&&(t<0||t>u.slideCount-u.options.slidesToScroll)){u.options.fade===!1&&(s=u.currentSlide,r!==!0?u.animateSlide(c,function(){u.postSlide(s)}):u.postSlide(s));return}if(u.options.autoplay&&clearInterval(u.autoPlayTimer),s<0?u.slideCount%u.options.slidesToScroll!==0?o=u.slideCount-u.slideCount%u.options.slidesToScroll:o=u.slideCount+s:s>=u.slideCount?u.slideCount%u.options.slidesToScroll!==0?o=0:o=s-u.slideCount:o=s,u.animating=!0,u.$slider.trigger("beforeChange",[u,u.currentSlide,o]),a=u.currentSlide,u.currentSlide=o,u.setSlideClasses(u.currentSlide),u.options.asNavFor&&(h=u.getNavTarget(),h=h.slick("getSlick"),h.slideCount<=h.options.slidesToShow&&h.setSlideClasses(u.currentSlide)),u.updateDots(),u.updateArrows(),u.options.fade===!0){r!==!0?(u.fadeSlideOut(a),u.fadeSlide(o,function(){u.postSlide(o)})):u.postSlide(o),u.animateHeight();return}r!==!0?u.animateSlide(d,function(){u.postSlide(o)}):u.postSlide(o)}},e.prototype.startLoad=function(){var t=this;t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&(t.$prevArrow.hide(),t.$nextArrow.hide()),t.options.dots===!0&&t.slideCount>t.options.slidesToShow&&t.$dots.hide(),t.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var t,n,r,s,o=this;return t=o.touchObject.startX-o.touchObject.curX,n=o.touchObject.startY-o.touchObject.curY,r=Math.atan2(n,t),s=Math.round(r*180/Math.PI),s<0&&(s=360-Math.abs(s)),s<=45&&s>=0||s<=360&&s>=315?o.options.rtl===!1?"left":"right":s>=135&&s<=225?o.options.rtl===!1?"right":"left":o.options.verticalSwiping===!0?s>=35&&s<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(t){var n=this,r,s;if(n.dragging=!1,n.swiping=!1,n.scrolling)return n.scrolling=!1,!1;if(n.interrupted=!1,n.shouldClick=!(n.touchObject.swipeLength>10),n.touchObject.curX===void 0)return!1;if(n.touchObject.edgeHit===!0&&n.$slider.trigger("edge",[n,n.swipeDirection()]),n.touchObject.swipeLength>=n.touchObject.minSwipe){switch(s=n.swipeDirection(),s){case"left":case"down":r=n.options.swipeToSlide?n.checkNavigable(n.currentSlide+n.getSlideCount()):n.currentSlide+n.getSlideCount(),n.currentDirection=0;break;case"right":case"up":r=n.options.swipeToSlide?n.checkNavigable(n.currentSlide-n.getSlideCount()):n.currentSlide-n.getSlideCount(),n.currentDirection=1;break}s!="vertical"&&(n.slideHandler(r),n.touchObject={},n.$slider.trigger("swipe",[n,s]))}else n.touchObject.startX!==n.touchObject.curX&&(n.slideHandler(n.currentSlide),n.touchObject={})},e.prototype.swipeHandler=function(t){var n=this;if(!(n.options.swipe===!1||"ontouchend"in document&&n.options.swipe===!1)&&!(n.options.draggable===!1&&t.type.indexOf("mouse")!==-1))switch(n.touchObject.fingerCount=t.originalEvent&&t.originalEvent.touches!==void 0?t.originalEvent.touches.length:1,n.touchObject.minSwipe=n.listWidth/n.options.touchThreshold,n.options.verticalSwiping===!0&&(n.touchObject.minSwipe=n.listHeight/n.options.touchThreshold),t.data.action){case"start":n.swipeStart(t);break;case"move":n.swipeMove(t);break;case"end":n.swipeEnd(t);break}},e.prototype.swipeMove=function(t){var n=this,r,s,o,a,c,d;if(c=t.originalEvent!==void 0?t.originalEvent.touches:null,!n.dragging||n.scrolling||c&&c.length!==1)return!1;if(r=n.getLeft(n.currentSlide),n.touchObject.curX=c!==void 0?c[0].pageX:t.clientX,n.touchObject.curY=c!==void 0?c[0].pageY:t.clientY,n.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(n.touchObject.curX-n.touchObject.startX,2))),d=Math.round(Math.sqrt(Math.pow(n.touchObject.curY-n.touchObject.startY,2))),!n.options.verticalSwiping&&!n.swiping&&d>4)return n.scrolling=!0,!1;if(n.options.verticalSwiping===!0&&(n.touchObject.swipeLength=d),s=n.swipeDirection(),t.originalEvent!==void 0&&n.touchObject.swipeLength>4&&(n.swiping=!0,t.preventDefault()),a=(n.options.rtl===!1?1:-1)*(n.touchObject.curX>n.touchObject.startX?1:-1),n.options.verticalSwiping===!0&&(a=n.touchObject.curY>n.touchObject.startY?1:-1),o=n.touchObject.swipeLength,n.touchObject.edgeHit=!1,n.options.infinite===!1&&(n.currentSlide===0&&s==="right"||n.currentSlide>=n.getDotCount()&&s==="left")&&(o=n.touchObject.swipeLength*n.options.edgeFriction,n.touchObject.edgeHit=!0),n.options.vertical===!1?n.swipeLeft=r+o*a:n.swipeLeft=r+o*(n.$list.height()/n.listWidth)*a,n.options.verticalSwiping===!0&&(n.swipeLeft=r+o*a),n.options.fade===!0||n.options.touchMove===!1)return!1;if(n.animating===!0)return n.swipeLeft=null,!1;n.setCSS(n.swipeLeft)},e.prototype.swipeStart=function(t){var n=this,r;if(n.interrupted=!0,n.touchObject.fingerCount!==1||n.slideCount<=n.options.slidesToShow)return n.touchObject={},!1;t.originalEvent!==void 0&&t.originalEvent.touches!==void 0&&(r=t.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=r!==void 0?r.pageX:t.clientX,n.touchObject.startY=n.touchObject.curY=r!==void 0?r.pageY:t.clientY,n.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var t=this;t.$slidesCache!==null&&(t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.appendTo(t.$slideTrack),t.reinit())},e.prototype.unload=function(){var t=this;i(".slick-cloned",t.$slider).remove(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove(),t.$nextArrow&&t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove(),t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(t){var n=this;n.$slider.trigger("unslick",[n,t]),n.destroy()},e.prototype.updateArrows=function(){var t=this;Math.floor(t.options.slidesToShow/2),t.options.arrows===!0&&t.slideCount>t.options.slidesToShow&&!t.options.infinite&&(t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),t.currentSlide===0?(t.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):(t.currentSlide>=t.slideCount-t.options.slidesToShow&&t.options.centerMode===!1||t.currentSlide>=t.slideCount-1&&t.options.centerMode===!0)&&(t.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var t=this;t.$dots!==null&&(t.$dots.find("li").removeClass("slick-active").end(),t.$dots.find("li").eq(Math.floor(t.currentSlide/t.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var t=this;t.options.autoplay&&(document[t.hidden]?t.interrupted=!0:t.interrupted=!1)},i.fn.slick=function(){var t=this,n=arguments[0],r=Array.prototype.slice.call(arguments,1),s=t.length,o,a;for(o=0;o<s;o++)if(typeof n=="object"||typeof n>"u"?t[o].slick=new e(t[o],n):a=t[o].slick[n].apply(t[o].slick,r),typeof a<"u")return a;return t}});function ma(){$(".navbar-collapse").removeClass("show")}function ga(i){$(".navbar .navbar-nav > .nav-item").removeClass("selected"),$(".navbar .navbar-nav > .nav-item > .nav-link[data-no='"+i+"']").parent().addClass("selected")}function to(i){$(".cd-hero-slider li").hide(),$('.cd-hero-slider li[data-page-no="'+i+'"]').fadeIn()}$(window).on("load",function(){$("body").addClass("loaded"),to(1)});jQuery(function(){$(".tm-page-link").on("click",function(){var i=$(this).data("page-no");to(i),ga(i)}),$(".navbar .navbar-nav > .nav-item > a.nav-link").on("click",function(i){var e=$(this).data("no");to(e),ga(e),ma()}),$("html").click(function(i){ma()})})});export default gp();
