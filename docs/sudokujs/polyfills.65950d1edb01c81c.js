"use strict";(self.webpackChunksudokujs=self.webpackChunksudokujs||[]).push([[429],{565:(cr,fn,Gn)=>{class Ng extends Error{constructor(e){super(`No translation found for ${Wl(e)}.`),this.parsedMessage=e,this.type="MissingTranslationError"}}const Vo=function(s,...e){if(Vo.translate){const n=Vo.translate(s,e);s=n[0],e=n[1]}let t=zl(s[0],s.raw[0]);for(let n=1;n<s.length;n++)t+=e[n-1]+zl(s[n],s.raw[n]);return t};function zl(s,e){return":"===e.charAt(0)?s.substring(function Ul(s,e){for(let t=1,n=1;t<s.length;t++,n++)if("\\"===e[n])n++;else if(":"===s[t])return t;throw new Error(`Unterminated $localize metadata block in "${e}".`)}(s,e)+1):s}(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)().$localize=Vo,Gn(583)},583:()=>{!function(d){const g=d.performance;function w(fe){g&&g.mark&&g.mark(fe)}function E(fe,H){g&&g.measure&&g.measure(fe,H)}w("Zone");const x=d.__Zone_symbol_prefix||"__zone_symbol__";function N(fe){return x+fe}const R=!0===d[N("forceDuplicateZoneCheck")];if(d.Zone){if(R||"function"!=typeof d.Zone.__symbol__)throw new Error("Zone already loaded.");return d.Zone}let $=(()=>{class fe{constructor(h,y){this._parent=h,this._name=y?y.name||"unnamed":"<root>",this._properties=y&&y.properties||{},this._zoneDelegate=new Z(this,this._parent&&this._parent._zoneDelegate,y)}static assertZonePatched(){if(d.Promise!==qe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let h=fe.current;for(;h.parent;)h=h.parent;return h}static get current(){return Te.zone}static get currentTask(){return Ye}static __load_patch(h,y,G=!1){if(qe.hasOwnProperty(h)){if(!G&&R)throw Error("Already loaded patch: "+h)}else if(!d["__Zone_disable_"+h]){const Y="Zone:"+h;w(Y),qe[h]=y(d,fe,nt),E(Y,Y)}}get parent(){return this._parent}get name(){return this._name}get(h){const y=this.getZoneWith(h);if(y)return y._properties[h]}getZoneWith(h){let y=this;for(;y;){if(y._properties.hasOwnProperty(h))return y;y=y._parent}return null}fork(h){if(!h)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,h)}wrap(h,y){if("function"!=typeof h)throw new Error("Expecting function got: "+h);const G=this._zoneDelegate.intercept(this,h,y),Y=this;return function(){return Y.runGuarded(G,this,arguments,y)}}run(h,y,G,Y){Te={parent:Te,zone:this};try{return this._zoneDelegate.invoke(this,h,y,G,Y)}finally{Te=Te.parent}}runGuarded(h,y=null,G,Y){Te={parent:Te,zone:this};try{try{return this._zoneDelegate.invoke(this,h,y,G,Y)}catch(ge){if(this._zoneDelegate.handleError(this,ge))throw ge}}finally{Te=Te.parent}}runTask(h,y,G){if(h.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(h.zone||be).name+"; Execution: "+this.name+")");if(h.state===we&&(h.type===te||h.type===de))return;const Y=h.state!=Ne;Y&&h._transitionTo(Ne,Q),h.runCount++;const ge=Ye;Ye=h,Te={parent:Te,zone:this};try{h.type==de&&h.data&&!h.data.isPeriodic&&(h.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,h,y,G)}catch(D){if(this._zoneDelegate.handleError(this,D))throw D}}finally{h.state!==we&&h.state!==se&&(h.type==te||h.data&&h.data.isPeriodic?Y&&h._transitionTo(Q,Ne):(h.runCount=0,this._updateTaskCount(h,-1),Y&&h._transitionTo(we,Ne,we))),Te=Te.parent,Ye=ge}}scheduleTask(h){if(h.zone&&h.zone!==this){let G=this;for(;G;){if(G===h.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${h.zone.name}`);G=G.parent}}h._transitionTo(Le,we);const y=[];h._zoneDelegates=y,h._zone=this;try{h=this._zoneDelegate.scheduleTask(this,h)}catch(G){throw h._transitionTo(se,Le,we),this._zoneDelegate.handleError(this,G),G}return h._zoneDelegates===y&&this._updateTaskCount(h,1),h.state==Le&&h._transitionTo(Q,Le),h}scheduleMicroTask(h,y,G,Y){return this.scheduleTask(new W(X,h,y,G,Y,void 0))}scheduleMacroTask(h,y,G,Y,ge){return this.scheduleTask(new W(de,h,y,G,Y,ge))}scheduleEventTask(h,y,G,Y,ge){return this.scheduleTask(new W(te,h,y,G,Y,ge))}cancelTask(h){if(h.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(h.zone||be).name+"; Execution: "+this.name+")");h._transitionTo(Ee,Q,Ne);try{this._zoneDelegate.cancelTask(this,h)}catch(y){throw h._transitionTo(se,Ee),this._zoneDelegate.handleError(this,y),y}return this._updateTaskCount(h,-1),h._transitionTo(we,Ee),h.runCount=0,h}_updateTaskCount(h,y){const G=h._zoneDelegates;-1==y&&(h._zoneDelegates=null);for(let Y=0;Y<G.length;Y++)G[Y]._updateTaskCount(h.type,y)}}return fe.__symbol__=N,fe})();const K={name:"",onHasTask:(fe,H,h,y)=>fe.hasTask(h,y),onScheduleTask:(fe,H,h,y)=>fe.scheduleTask(h,y),onInvokeTask:(fe,H,h,y,G,Y)=>fe.invokeTask(h,y,G,Y),onCancelTask:(fe,H,h,y)=>fe.cancelTask(h,y)};class Z{constructor(H,h,y){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=H,this._parentDelegate=h,this._forkZS=y&&(y&&y.onFork?y:h._forkZS),this._forkDlgt=y&&(y.onFork?h:h._forkDlgt),this._forkCurrZone=y&&(y.onFork?this.zone:h._forkCurrZone),this._interceptZS=y&&(y.onIntercept?y:h._interceptZS),this._interceptDlgt=y&&(y.onIntercept?h:h._interceptDlgt),this._interceptCurrZone=y&&(y.onIntercept?this.zone:h._interceptCurrZone),this._invokeZS=y&&(y.onInvoke?y:h._invokeZS),this._invokeDlgt=y&&(y.onInvoke?h:h._invokeDlgt),this._invokeCurrZone=y&&(y.onInvoke?this.zone:h._invokeCurrZone),this._handleErrorZS=y&&(y.onHandleError?y:h._handleErrorZS),this._handleErrorDlgt=y&&(y.onHandleError?h:h._handleErrorDlgt),this._handleErrorCurrZone=y&&(y.onHandleError?this.zone:h._handleErrorCurrZone),this._scheduleTaskZS=y&&(y.onScheduleTask?y:h._scheduleTaskZS),this._scheduleTaskDlgt=y&&(y.onScheduleTask?h:h._scheduleTaskDlgt),this._scheduleTaskCurrZone=y&&(y.onScheduleTask?this.zone:h._scheduleTaskCurrZone),this._invokeTaskZS=y&&(y.onInvokeTask?y:h._invokeTaskZS),this._invokeTaskDlgt=y&&(y.onInvokeTask?h:h._invokeTaskDlgt),this._invokeTaskCurrZone=y&&(y.onInvokeTask?this.zone:h._invokeTaskCurrZone),this._cancelTaskZS=y&&(y.onCancelTask?y:h._cancelTaskZS),this._cancelTaskDlgt=y&&(y.onCancelTask?h:h._cancelTaskDlgt),this._cancelTaskCurrZone=y&&(y.onCancelTask?this.zone:h._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const G=y&&y.onHasTask;(G||h&&h._hasTaskZS)&&(this._hasTaskZS=G?y:K,this._hasTaskDlgt=h,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=H,y.onScheduleTask||(this._scheduleTaskZS=K,this._scheduleTaskDlgt=h,this._scheduleTaskCurrZone=this.zone),y.onInvokeTask||(this._invokeTaskZS=K,this._invokeTaskDlgt=h,this._invokeTaskCurrZone=this.zone),y.onCancelTask||(this._cancelTaskZS=K,this._cancelTaskDlgt=h,this._cancelTaskCurrZone=this.zone))}fork(H,h){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,H,h):new $(H,h)}intercept(H,h,y){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,H,h,y):h}invoke(H,h,y,G,Y){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,H,h,y,G,Y):h.apply(y,G)}handleError(H,h){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,H,h)}scheduleTask(H,h){let y=h;if(this._scheduleTaskZS)this._hasTaskZS&&y._zoneDelegates.push(this._hasTaskDlgtOwner),y=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,H,h),y||(y=h);else if(h.scheduleFn)h.scheduleFn(h);else{if(h.type!=X)throw new Error("Task is missing scheduleFn.");O(h)}return y}invokeTask(H,h,y,G){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,H,h,y,G):h.callback.apply(y,G)}cancelTask(H,h){let y;if(this._cancelTaskZS)y=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,H,h);else{if(!h.cancelFn)throw Error("Task is not cancelable");y=h.cancelFn(h)}return y}hasTask(H,h){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,H,h)}catch(y){this.handleError(H,y)}}_updateTaskCount(H,h){const y=this._taskCounts,G=y[H],Y=y[H]=G+h;if(Y<0)throw new Error("More tasks executed then were scheduled.");0!=G&&0!=Y||this.hasTask(this.zone,{microTask:y.microTask>0,macroTask:y.macroTask>0,eventTask:y.eventTask>0,change:H})}}class W{constructor(H,h,y,G,Y,ge){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=H,this.source=h,this.data=G,this.scheduleFn=Y,this.cancelFn=ge,!y)throw new Error("callback is not defined");this.callback=y;const D=this;this.invoke=H===te&&G&&G.useG?W.invokeTask:function(){return W.invokeTask.call(d,D,this,arguments)}}static invokeTask(H,h,y){H||(H=this),Qe++;try{return H.runCount++,H.zone.runTask(H,h,y)}finally{1==Qe&&ce(),Qe--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(we,Le)}_transitionTo(H,h,y){if(this._state!==h&&this._state!==y)throw new Error(`${this.type} '${this.source}': can not transition to '${H}', expecting state '${h}'${y?" or '"+y+"'":""}, was '${this._state}'.`);this._state=H,H==we&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const me=N("setTimeout"),ue=N("Promise"),le=N("then");let j,ke=[],Ce=!1;function O(fe){if(0===Qe&&0===ke.length)if(j||d[ue]&&(j=d[ue].resolve(0)),j){let H=j[le];H||(H=j.then),H.call(j,ce)}else d[me](ce,0);fe&&ke.push(fe)}function ce(){if(!Ce){for(Ce=!0;ke.length;){const fe=ke;ke=[];for(let H=0;H<fe.length;H++){const h=fe[H];try{h.zone.runTask(h,null,null)}catch(y){nt.onUnhandledError(y)}}}nt.microtaskDrainDone(),Ce=!1}}const be={name:"NO ZONE"},we="notScheduled",Le="scheduling",Q="scheduled",Ne="running",Ee="canceling",se="unknown",X="microTask",de="macroTask",te="eventTask",qe={},nt={symbol:N,currentZoneFrame:()=>Te,onUnhandledError:ne,microtaskDrainDone:ne,scheduleMicroTask:O,showUncaughtError:()=>!$[N("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:ne,patchMethod:()=>ne,bindArguments:()=>[],patchThen:()=>ne,patchMacroTask:()=>ne,patchEventPrototype:()=>ne,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>ne,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>ne,wrapWithCurrentZone:()=>ne,filterProperties:()=>[],attachOriginToPatched:()=>ne,_redefineProperty:()=>ne,patchCallbacks:()=>ne};let Te={parent:null,zone:new $(null,null)},Ye=null,Qe=0;function ne(){}E("Zone","Zone"),d.Zone=$}(typeof window<"u"&&window||typeof self<"u"&&self||global);const fn=Object.getOwnPropertyDescriptor,Gn=Object.defineProperty,mn=Object.getPrototypeOf,Vt=Object.create,Kn=Array.prototype.slice,Ss="addEventListener",ws="removeEventListener",xs=Zone.__symbol__(Ss),Me=Zone.__symbol__(ws),Oe="true",dt="false",Kt=Zone.__symbol__("");function Ts(d,g){return Zone.current.wrap(d,g)}function he(d,g,w,E,x){return Zone.current.scheduleMacroTask(d,g,w,E,x)}const ie=Zone.__symbol__,Zn=typeof window<"u",gn=Zn?window:void 0,Ve=Zn&&gn||"object"==typeof self&&self||global,qo=[null];function qt(d,g){for(let w=d.length-1;w>=0;w--)"function"==typeof d[w]&&(d[w]=Ts(d[w],g+"_"+w));return d}function hr(d){return!d||!1!==d.writable&&!("function"==typeof d.get&&typeof d.set>"u")}const Zt=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Dn=!("nw"in Ve)&&typeof Ve.process<"u"&&"[object process]"==={}.toString.call(Ve.process),Yn=!Dn&&!Zt&&!(!Zn||!gn.HTMLElement),Qn=typeof Ve.process<"u"&&"[object process]"==={}.toString.call(Ve.process)&&!Zt&&!(!Zn||!gn.HTMLElement),Nn={},Cs=function(d){if(!(d=d||Ve.event))return;let g=Nn[d.type];g||(g=Nn[d.type]=ie("ON_PROPERTY"+d.type));const w=this||d.target||Ve,E=w[g];let x;return Yn&&w===gn&&"error"===d.type?(x=E&&E.call(this,d.message,d.filename,d.lineno,d.colno,d.error),!0===x&&d.preventDefault()):(x=E&&E.apply(this,arguments),null!=x&&!x&&d.preventDefault()),x};function dr(d,g,w){let E=fn(d,g);if(!E&&w&&fn(w,g)&&(E={enumerable:!0,configurable:!0}),!E||!E.configurable)return;const x=ie("on"+g+"patched");if(d.hasOwnProperty(x)&&d[x])return;delete E.writable,delete E.value;const N=E.get,R=E.set,$=g.substr(2);let K=Nn[$];K||(K=Nn[$]=ie("ON_PROPERTY"+$)),E.set=function(Z){let W=this;!W&&d===Ve&&(W=Ve),W&&(W[K]&&W.removeEventListener($,Cs),R&&R.apply(W,qo),"function"==typeof Z?(W[K]=Z,W.addEventListener($,Cs,!1)):W[K]=null)},E.get=function(){let Z=this;if(!Z&&d===Ve&&(Z=Ve),!Z)return null;const W=Z[K];if(W)return W;if(N){let me=N&&N.call(this);if(me)return E.set.call(this,me),"function"==typeof Z.removeAttribute&&Z.removeAttribute(g),me}return null},Gn(d,g,E),d[x]=!0}function fr(d,g,w){if(g)for(let E=0;E<g.length;E++)dr(d,"on"+g[E],w);else{const E=[];for(const x in d)"on"==x.substr(0,2)&&E.push(x);for(let x=0;x<E.length;x++)dr(d,E[x],w)}}const ft=ie("originalInstance");function Pn(d){const g=Ve[d];if(!g)return;Ve[ie(d)]=g,Ve[d]=function(){const x=qt(arguments,d);switch(x.length){case 0:this[ft]=new g;break;case 1:this[ft]=new g(x[0]);break;case 2:this[ft]=new g(x[0],x[1]);break;case 3:this[ft]=new g(x[0],x[1],x[2]);break;case 4:this[ft]=new g(x[0],x[1],x[2],x[3]);break;default:throw new Error("Arg list too long.")}},_t(Ve[d],g);const w=new g(function(){});let E;for(E in w)"XMLHttpRequest"===d&&"responseBlob"===E||function(x){"function"==typeof w[x]?Ve[d].prototype[x]=function(){return this[ft][x].apply(this[ft],arguments)}:Gn(Ve[d].prototype,x,{set:function(N){"function"==typeof N?(this[ft][x]=Ts(N,d+"."+x),_t(this[ft][x],N)):this[ft][x]=N},get:function(){return this[ft][x]}})}(E);for(E in g)"prototype"!==E&&g.hasOwnProperty(E)&&(Ve[d][E]=g[E])}function Je(d,g,w){let E=d;for(;E&&!E.hasOwnProperty(g);)E=mn(E);!E&&d[g]&&(E=d);const x=ie(g);let N=null;if(E&&(!(N=E[x])||!E.hasOwnProperty(x))&&(N=E[x]=E[g],hr(E&&fn(E,g)))){const $=w(N,x,g);E[g]=function(){return $(this,arguments)},_t(E[g],N)}return N}function ci(d,g,w){let E=null;function x(N){const R=N.data;return R.args[R.cbIdx]=function(){N.invoke.apply(this,arguments)},E.apply(R.target,R.args),N}E=Je(d,g,N=>function(R,$){const K=w(R,$);return K.cbIdx>=0&&"function"==typeof $[K.cbIdx]?he(K.name,$[K.cbIdx],K,x):N.apply(R,$)})}function _t(d,g){d[ie("OriginalDelegate")]=g}let As=!1,Jn=!1;function Dt(){if(As)return Jn;As=!0;try{const d=gn.navigator.userAgent;(-1!==d.indexOf("MSIE ")||-1!==d.indexOf("Trident/")||-1!==d.indexOf("Edge/"))&&(Jn=!0)}catch{}return Jn}Zone.__load_patch("ZoneAwarePromise",(d,g,w)=>{const E=Object.getOwnPropertyDescriptor,x=Object.defineProperty,R=w.symbol,$=[],K=!0===d[R("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],Z=R("Promise"),W=R("then");w.onUnhandledError=D=>{if(w.showUncaughtError()){const S=D&&D.rejection;S?console.error("Unhandled Promise rejection:",S instanceof Error?S.message:S,"; Zone:",D.zone.name,"; Task:",D.task&&D.task.source,"; Value:",S,S instanceof Error?S.stack:void 0):console.error(D)}},w.microtaskDrainDone=()=>{for(;$.length;){const D=$.shift();try{D.zone.runGuarded(()=>{throw D.throwOriginal?D.rejection:D})}catch(S){le(S)}}};const ue=R("unhandledPromiseRejectionHandler");function le(D){w.onUnhandledError(D);try{const S=g[ue];"function"==typeof S&&S.call(this,D)}catch{}}function ke(D){return D&&D.then}function Ce(D){return D}function j(D){return h.reject(D)}const O=R("state"),ce=R("value"),be=R("finally"),we=R("parentPromiseValue"),Le=R("parentPromiseState"),Ne=null,se=!1;function de(D,S){return b=>{try{Te(D,S,b)}catch(M){Te(D,!1,M)}}}const nt=R("currentTaskTrace");function Te(D,S,b){const M=function(){let D=!1;return function(b){return function(){D||(D=!0,b.apply(null,arguments))}}}();if(D===b)throw new TypeError("Promise resolved with itself");if(D[O]===Ne){let P=null;try{("object"==typeof b||"function"==typeof b)&&(P=b&&b.then)}catch(T){return M(()=>{Te(D,!1,T)})(),D}if(S!==se&&b instanceof h&&b.hasOwnProperty(O)&&b.hasOwnProperty(ce)&&b[O]!==Ne)Qe(b),Te(D,b[O],b[ce]);else if(S!==se&&"function"==typeof P)try{P.call(b,M(de(D,S)),M(de(D,!1)))}catch(T){M(()=>{Te(D,!1,T)})()}else{D[O]=S;const T=D[ce];if(D[ce]=b,D[be]===be&&!0===S&&(D[O]=D[Le],D[ce]=D[we]),S===se&&b instanceof Error){const ee=g.currentTask&&g.currentTask.data&&g.currentTask.data.__creationTrace__;ee&&x(b,nt,{configurable:!0,enumerable:!1,writable:!0,value:ee})}for(let ee=0;ee<T.length;)ne(D,T[ee++],T[ee++],T[ee++],T[ee++]);if(0==T.length&&S==se){D[O]=0;let ee=b;try{throw new Error("Uncaught (in promise): "+function N(D){return D&&D.toString===Object.prototype.toString?(D.constructor&&D.constructor.name||"")+": "+JSON.stringify(D):D?D.toString():Object.prototype.toString.call(D)}(b)+(b&&b.stack?"\n"+b.stack:""))}catch(V){ee=V}K&&(ee.throwOriginal=!0),ee.rejection=b,ee.promise=D,ee.zone=g.current,ee.task=g.currentTask,$.push(ee),w.scheduleMicroTask()}}}return D}const Ye=R("rejectionHandledHandler");function Qe(D){if(0===D[O]){try{const S=g[Ye];S&&"function"==typeof S&&S.call(this,{rejection:D[ce],promise:D})}catch{}D[O]=se;for(let S=0;S<$.length;S++)D===$[S].promise&&$.splice(S,1)}}function ne(D,S,b,M,P){Qe(D);const T=D[O],ee=T?"function"==typeof M?M:Ce:"function"==typeof P?P:j;S.scheduleMicroTask("Promise.then",()=>{try{const V=D[ce],re=!!b&&be===b[be];re&&(b[we]=V,b[Le]=T);const L=S.run(ee,void 0,re&&ee!==j&&ee!==Ce?[]:[V]);Te(b,!0,L)}catch(V){Te(b,!1,V)}},b)}const H=function(){};class h{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(S){return Te(new this(null),!0,S)}static reject(S){return Te(new this(null),se,S)}static race(S){let b,M,P=new this((V,re)=>{b=V,M=re});function T(V){b(V)}function ee(V){M(V)}for(let V of S)ke(V)||(V=this.resolve(V)),V.then(T,ee);return P}static all(S){return h.allWithCallback(S)}static allSettled(S){return(this&&this.prototype instanceof h?this:h).allWithCallback(S,{thenCallback:M=>({status:"fulfilled",value:M}),errorCallback:M=>({status:"rejected",reason:M})})}static allWithCallback(S,b){let M,P,T=new this((L,oe)=>{M=L,P=oe}),ee=2,V=0;const re=[];for(let L of S){ke(L)||(L=this.resolve(L));const oe=V;try{L.then(We=>{re[oe]=b?b.thenCallback(We):We,ee--,0===ee&&M(re)},We=>{b?(re[oe]=b.errorCallback(We),ee--,0===ee&&M(re)):P(We)})}catch(We){P(We)}ee++,V++}return ee-=2,0===ee&&M(re),T}constructor(S){const b=this;if(!(b instanceof h))throw new Error("Must be an instanceof Promise.");b[O]=Ne,b[ce]=[];try{S&&S(de(b,!0),de(b,se))}catch(M){Te(b,!1,M)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return h}then(S,b){let M=this.constructor[Symbol.species];(!M||"function"!=typeof M)&&(M=this.constructor||h);const P=new M(H),T=g.current;return this[O]==Ne?this[ce].push(T,P,S,b):ne(this,T,P,S,b),P}catch(S){return this.then(null,S)}finally(S){let b=this.constructor[Symbol.species];(!b||"function"!=typeof b)&&(b=h);const M=new b(H);M[be]=be;const P=g.current;return this[O]==Ne?this[ce].push(P,M,S,S):ne(this,P,M,S,S),M}}h.resolve=h.resolve,h.reject=h.reject,h.race=h.race,h.all=h.all;const y=d[Z]=d.Promise;d.Promise=h;const G=R("thenPatched");function Y(D){const S=D.prototype,b=E(S,"then");if(b&&(!1===b.writable||!b.configurable))return;const M=S.then;S[W]=M,D.prototype.then=function(P,T){return new h((V,re)=>{M.call(this,V,re)}).then(P,T)},D[G]=!0}return w.patchThen=Y,y&&(Y(y),Je(d,"fetch",D=>function ge(D){return function(S,b){let M=D.apply(S,b);if(M instanceof h)return M;let P=M.constructor;return P[G]||Y(P),M}}(D))),Promise[g.__symbol__("uncaughtPromiseErrors")]=$,h}),Zone.__load_patch("toString",d=>{const g=Function.prototype.toString,w=ie("OriginalDelegate"),E=ie("Promise"),x=ie("Error"),N=function(){if("function"==typeof this){const Z=this[w];if(Z)return"function"==typeof Z?g.call(Z):Object.prototype.toString.call(Z);if(this===Promise){const W=d[E];if(W)return g.call(W)}if(this===Error){const W=d[x];if(W)return g.call(W)}}return g.call(this)};N[w]=g,Function.prototype.toString=N;const R=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":R.call(this)}});let et=!1;if(typeof window<"u")try{const d=Object.defineProperty({},"passive",{get:function(){et=!0}});window.addEventListener("test",d,d),window.removeEventListener("test",d,d)}catch{et=!1}const gr={useG:!0},tt={},es={},vr=new RegExp("^"+Kt+"(\\w+)(true|false)$"),bs=ie("propagationStopped");function Is(d,g){const w=(g?g(d):d)+dt,E=(g?g(d):d)+Oe,x=Kt+w,N=Kt+E;tt[d]={},tt[d][dt]=x,tt[d][Oe]=N}function pi(d,g,w){const E=w&&w.add||Ss,x=w&&w.rm||ws,N=w&&w.listeners||"eventListeners",R=w&&w.rmAll||"removeAllListeners",$=ie(E),K="."+E+":",Z="prependListener",W="."+Z+":",me=function(j,O,ce){if(j.isRemoved)return;const be=j.callback;"object"==typeof be&&be.handleEvent&&(j.callback=Le=>be.handleEvent(Le),j.originalDelegate=be),j.invoke(j,O,[ce]);const we=j.options;we&&"object"==typeof we&&we.once&&O[x].call(O,ce.type,j.originalDelegate?j.originalDelegate:j.callback,we)},ue=function(j){if(!(j=j||d.event))return;const O=this||j.target||d,ce=O[tt[j.type][dt]];if(ce)if(1===ce.length)me(ce[0],O,j);else{const be=ce.slice();for(let we=0;we<be.length&&(!j||!0!==j[bs]);we++)me(be[we],O,j)}},le=function(j){if(!(j=j||d.event))return;const O=this||j.target||d,ce=O[tt[j.type][Oe]];if(ce)if(1===ce.length)me(ce[0],O,j);else{const be=ce.slice();for(let we=0;we<be.length&&(!j||!0!==j[bs]);we++)me(be[we],O,j)}};function ke(j,O){if(!j)return!1;let ce=!0;O&&void 0!==O.useG&&(ce=O.useG);const be=O&&O.vh;let we=!0;O&&void 0!==O.chkDup&&(we=O.chkDup);let Le=!1;O&&void 0!==O.rt&&(Le=O.rt);let Q=j;for(;Q&&!Q.hasOwnProperty(E);)Q=mn(Q);if(!Q&&j[E]&&(Q=j),!Q||Q[$])return!1;const Ne=O&&O.eventNameToString,Ee={},se=Q[$]=Q[E],X=Q[ie(x)]=Q[x],de=Q[ie(N)]=Q[N],te=Q[ie(R)]=Q[R];let qe;function nt(S,b){return!et&&"object"==typeof S&&S?!!S.capture:et&&b?"boolean"==typeof S?{capture:S,passive:!0}:S?"object"==typeof S&&!1!==S.passive?Object.assign(Object.assign({},S),{passive:!0}):S:{passive:!0}:S}O&&O.prepend&&(qe=Q[ie(O.prepend)]=Q[O.prepend]);const H=ce?function(S){if(!Ee.isExisting)return se.call(Ee.target,Ee.eventName,Ee.capture?le:ue,Ee.options)}:function(S){return se.call(Ee.target,Ee.eventName,S.invoke,Ee.options)},h=ce?function(S){if(!S.isRemoved){const b=tt[S.eventName];let M;b&&(M=b[S.capture?Oe:dt]);const P=M&&S.target[M];if(P)for(let T=0;T<P.length;T++)if(P[T]===S){P.splice(T,1),S.isRemoved=!0,0===P.length&&(S.allRemoved=!0,S.target[M]=null);break}}if(S.allRemoved)return X.call(S.target,S.eventName,S.capture?le:ue,S.options)}:function(S){return X.call(S.target,S.eventName,S.invoke,S.options)},G=O&&O.diff?O.diff:function(S,b){const M=typeof b;return"function"===M&&S.callback===b||"object"===M&&S.originalDelegate===b},Y=Zone[ie("UNPATCHED_EVENTS")],ge=d[ie("PASSIVE_EVENTS")],D=function(S,b,M,P,T=!1,ee=!1){return function(){const V=this||d;let re=arguments[0];O&&O.transferEventName&&(re=O.transferEventName(re));let L=arguments[1];if(!L)return S.apply(this,arguments);if(Dn&&"uncaughtException"===re)return S.apply(this,arguments);let oe=!1;if("function"!=typeof L){if(!L.handleEvent)return S.apply(this,arguments);oe=!0}if(be&&!be(S,L,V,arguments))return;const We=et&&!!ge&&-1!==ge.indexOf(re),gt=nt(arguments[2],We);if(Y)for(let Jt=0;Jt<Y.length;Jt++)if(re===Y[Jt])return We?S.call(V,re,L,gt):S.apply(this,arguments);const $e=!!gt&&("boolean"==typeof gt||gt.capture),Ln=!(!gt||"object"!=typeof gt)&&gt.once,ks=Zone.current;let v=tt[re];v||(Is(re,Ne),v=tt[re]);const Ls=v[$e?Oe:dt];let ss,Ht=V[Ls],Rs=!1;if(Ht){if(Rs=!0,we)for(let Jt=0;Jt<Ht.length;Jt++)if(G(Ht[Jt],L))return}else Ht=V[Ls]=[];const mi=V.constructor.name,Sr=es[mi];Sr&&(ss=Sr[re]),ss||(ss=mi+b+(Ne?Ne(re):re)),Ee.options=gt,Ln&&(Ee.options.once=!1),Ee.target=V,Ee.capture=$e,Ee.eventName=re,Ee.isExisting=Rs;const vn=ce?gr:void 0;vn&&(vn.taskData=Ee);const kt=ks.scheduleEventTask(ss,L,vn,M,P);return Ee.target=null,vn&&(vn.taskData=null),Ln&&(gt.once=!0),!et&&"boolean"==typeof kt.options||(kt.options=gt),kt.target=V,kt.capture=$e,kt.eventName=re,oe&&(kt.originalDelegate=L),ee?Ht.unshift(kt):Ht.push(kt),T?V:void 0}};return Q[E]=D(se,K,H,h,Le),qe&&(Q[Z]=D(qe,W,function(S){return qe.call(Ee.target,Ee.eventName,S.invoke,Ee.options)},h,Le,!0)),Q[x]=function(){const S=this||d;let b=arguments[0];O&&O.transferEventName&&(b=O.transferEventName(b));const M=arguments[2],P=!!M&&("boolean"==typeof M||M.capture),T=arguments[1];if(!T)return X.apply(this,arguments);if(be&&!be(X,T,S,arguments))return;const ee=tt[b];let V;ee&&(V=ee[P?Oe:dt]);const re=V&&S[V];if(re)for(let L=0;L<re.length;L++){const oe=re[L];if(G(oe,T))return re.splice(L,1),oe.isRemoved=!0,0===re.length&&(oe.allRemoved=!0,S[V]=null,"string"==typeof b)&&(S[Kt+"ON_PROPERTY"+b]=null),oe.zone.cancelTask(oe),Le?S:void 0}return X.apply(this,arguments)},Q[N]=function(){const S=this||d;let b=arguments[0];O&&O.transferEventName&&(b=O.transferEventName(b));const M=[],P=Ds(S,Ne?Ne(b):b);for(let T=0;T<P.length;T++){const ee=P[T];M.push(ee.originalDelegate?ee.originalDelegate:ee.callback)}return M},Q[R]=function(){const S=this||d;let b=arguments[0];if(b){O&&O.transferEventName&&(b=O.transferEventName(b));const M=tt[b];if(M){const ee=S[M[dt]],V=S[M[Oe]];if(ee){const re=ee.slice();for(let L=0;L<re.length;L++){const oe=re[L];this[x].call(this,b,oe.originalDelegate?oe.originalDelegate:oe.callback,oe.options)}}if(V){const re=V.slice();for(let L=0;L<re.length;L++){const oe=re[L];this[x].call(this,b,oe.originalDelegate?oe.originalDelegate:oe.callback,oe.options)}}}}else{const M=Object.keys(S);for(let P=0;P<M.length;P++){const ee=vr.exec(M[P]);let V=ee&&ee[1];V&&"removeListener"!==V&&this[R].call(this,V)}this[R].call(this,"removeListener")}if(Le)return this},_t(Q[E],se),_t(Q[x],X),te&&_t(Q[R],te),de&&_t(Q[N],de),!0}let Ce=[];for(let j=0;j<g.length;j++)Ce[j]=ke(g[j],w);return Ce}function Ds(d,g){if(!g){const N=[];for(let R in d){const $=vr.exec(R);let K=$&&$[1];if(K&&(!g||K===g)){const Z=d[R];if(Z)for(let W=0;W<Z.length;W++)N.push(Z[W])}}return N}let w=tt[g];w||(Is(g),w=tt[g]);const E=d[w[dt]],x=d[w[Oe]];return E?x?E.concat(x):E.slice():x?x.slice():[]}function hi(d,g){const w=d.Event;w&&w.prototype&&g.patchMethod(w.prototype,"stopImmediatePropagation",E=>function(x,N){x[bs]=!0,E&&E.apply(x,N)})}function Nt(d,g,w,E,x){const N=Zone.__symbol__(E);if(g[N])return;const R=g[N]=g[E];g[E]=function($,K,Z){return K&&K.prototype&&x.forEach(function(W){const me=`${w}.${E}::`+W,ue=K.prototype;if(ue.hasOwnProperty(W)){const le=d.ObjectGetOwnPropertyDescriptor(ue,W);le&&le.value?(le.value=d.wrapWithCurrentZone(le.value,me),d._redefineProperty(K.prototype,W,le)):ue[W]&&(ue[W]=d.wrapWithCurrentZone(ue[W],me))}else ue[W]&&(ue[W]=d.wrapWithCurrentZone(ue[W],me))}),R.call(g,$,K,Z)},d.attachOriginToPatched(g[E],R)}const mt=["absolutedeviceorientation","afterinput","afterprint","appinstalled","beforeinstallprompt","beforeprint","beforeunload","devicelight","devicemotion","deviceorientation","deviceorientationabsolute","deviceproximity","hashchange","languagechange","message","mozbeforepaint","offline","online","paint","pageshow","pagehide","popstate","rejectionhandled","storage","unhandledrejection","unload","userproximity","vrdisplayconnected","vrdisplaydisconnected","vrdisplaypresentchange"],di=["encrypted","waitingforkey","msneedkey","mozinterruptbegin","mozinterruptend"],yr=["load"],Yt=["blur","error","focus","load","resize","scroll","messageerror"],Ns=["bounce","finish","start"],_r=["loadstart","progress","abort","error","load","progress","timeout","loadend","readystatechange"],je=["upgradeneeded","complete","abort","success","error","blocked","versionchange","close"],at=["close","error","open","message"],I=["error","message"],Qt=["abort","animationcancel","animationend","animationiteration","auxclick","beforeinput","blur","cancel","canplay","canplaythrough","change","compositionstart","compositionupdate","compositionend","cuechange","click","close","contextmenu","curechange","dblclick","drag","dragend","dragenter","dragexit","dragleave","dragover","drop","durationchange","emptied","ended","error","focus","focusin","focusout","gotpointercapture","input","invalid","keydown","keypress","keyup","load","loadstart","loadeddata","loadedmetadata","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","orientationchange","pause","play","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointerlockchange","mozpointerlockchange","webkitpointerlockerchange","pointerlockerror","mozpointerlockerror","webkitpointerlockerror","pointermove","pointout","pointerover","pointerup","progress","ratechange","reset","resize","scroll","seeked","seeking","select","selectionchange","selectstart","show","sort","stalled","submit","suspend","timeupdate","volumechange","touchcancel","touchmove","touchstart","touchend","transitioncancel","transitionend","waiting","wheel"].concat(["webglcontextrestored","webglcontextlost","webglcontextcreationerror"],["autocomplete","autocompleteerror"],["toggle"],["afterscriptexecute","beforescriptexecute","DOMContentLoaded","freeze","fullscreenchange","mozfullscreenchange","webkitfullscreenchange","msfullscreenchange","fullscreenerror","mozfullscreenerror","webkitfullscreenerror","msfullscreenerror","readystatechange","visibilitychange","resume"],mt,["beforecopy","beforecut","beforepaste","copy","cut","paste","dragstart","loadend","animationstart","search","transitionrun","transitionstart","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkittransitionend"],["activate","afterupdate","ariarequest","beforeactivate","beforedeactivate","beforeeditfocus","beforeupdate","cellchange","controlselect","dataavailable","datasetchanged","datasetcomplete","errorupdate","filterchange","layoutcomplete","losecapture","move","moveend","movestart","propertychange","resizeend","resizestart","rowenter","rowexit","rowsdelete","rowsinserted","command","compassneedscalibration","deactivate","help","mscontentzoom","msmanipulationstatechanged","msgesturechange","msgesturedoubletap","msgestureend","msgesturehold","msgesturestart","msgesturetap","msgotpointercapture","msinertiastart","mslostpointercapture","mspointercancel","mspointerdown","mspointerenter","mspointerhover","mspointerleave","mspointermove","mspointerout","mspointerover","mspointerup","pointerout","mssitemodejumplistitemremoved","msthumbnailclick","stop","storagecommit"]);function Ps(d,g,w){if(!w||0===w.length)return g;const E=w.filter(N=>N.target===d);if(!E||0===E.length)return g;const x=E[0].ignoreProperties;return g.filter(N=>-1===x.indexOf(N))}function Se(d,g,w,E){d&&fr(d,Ps(d,g,w),E)}Zone.__load_patch("util",(d,g,w)=>{w.patchOnProperties=fr,w.patchMethod=Je,w.bindArguments=qt,w.patchMacroTask=ci;const E=g.__symbol__("BLACK_LISTED_EVENTS"),x=g.__symbol__("UNPATCHED_EVENTS");d[x]&&(d[E]=d[x]),d[E]&&(g[E]=g[x]=d[E]),w.patchEventPrototype=hi,w.patchEventTarget=pi,w.isIEOrEdge=Dt,w.ObjectDefineProperty=Gn,w.ObjectGetOwnPropertyDescriptor=fn,w.ObjectCreate=Vt,w.ArraySlice=Kn,w.patchClass=Pn,w.wrapWithCurrentZone=Ts,w.filterProperties=Ps,w.attachOriginToPatched=_t,w._redefineProperty=Object.defineProperty,w.patchCallbacks=Nt,w.getGlobalObjects=()=>({globalSources:es,zoneSymbolEventNames:tt,eventNames:Qt,isBrowser:Yn,isMix:Qn,isNode:Dn,TRUE_STR:Oe,FALSE_STR:dt,ZONE_SYMBOL_PREFIX:Kt,ADD_EVENT_LISTENER_STR:Ss,REMOVE_EVENT_LISTENER_STR:ws})});const Pt=ie("zoneTask");function wt(d,g,w,E){let x=null,N=null;w+=E;const R={};function $(Z){const W=Z.data;return W.args[0]=function(){return Z.invoke.apply(this,arguments)},W.handleId=x.apply(d,W.args),Z}function K(Z){return N.call(d,Z.data.handleId)}x=Je(d,g+=E,Z=>function(W,me){if("function"==typeof me[0]){const ue={isPeriodic:"Interval"===E,delay:"Timeout"===E||"Interval"===E?me[1]||0:void 0,args:me},le=me[0];me[0]=function(){try{return le.apply(this,arguments)}finally{ue.isPeriodic||("number"==typeof ue.handleId?delete R[ue.handleId]:ue.handleId&&(ue.handleId[Pt]=null))}};const ke=he(g,me[0],ue,$,K);if(!ke)return ke;const Ce=ke.data.handleId;return"number"==typeof Ce?R[Ce]=ke:Ce&&(Ce[Pt]=ke),Ce&&Ce.ref&&Ce.unref&&"function"==typeof Ce.ref&&"function"==typeof Ce.unref&&(ke.ref=Ce.ref.bind(Ce),ke.unref=Ce.unref.bind(Ce)),"number"==typeof Ce||Ce?Ce:ke}return Z.apply(d,me)}),N=Je(d,w,Z=>function(W,me){const ue=me[0];let le;"number"==typeof ue?le=R[ue]:(le=ue&&ue[Pt],le||(le=ue)),le&&"string"==typeof le.type?"notScheduled"!==le.state&&(le.cancelFn&&le.data.isPeriodic||0===le.runCount)&&("number"==typeof ue?delete R[ue]:ue&&(ue[Pt]=null),le.zone.cancelTask(le)):Z.apply(d,me)})}Zone.__load_patch("legacy",d=>{const g=d[Zone.__symbol__("legacyPatch")];g&&g()}),Zone.__load_patch("queueMicrotask",(d,g,w)=>{w.patchMethod(d,"queueMicrotask",E=>function(x,N){g.current.scheduleMicroTask("queueMicrotask",N[0])})}),Zone.__load_patch("timers",d=>{const g="set",w="clear";wt(d,g,w,"Timeout"),wt(d,g,w,"Interval"),wt(d,g,w,"Immediate")}),Zone.__load_patch("requestAnimationFrame",d=>{wt(d,"request","cancel","AnimationFrame"),wt(d,"mozRequest","mozCancel","AnimationFrame"),wt(d,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(d,g)=>{const w=["alert","prompt","confirm"];for(let E=0;E<w.length;E++)Je(d,w[E],(N,R,$)=>function(K,Z){return g.current.run(N,d,Z,$)})}),Zone.__load_patch("EventTarget",(d,g,w)=>{(function ns(d,g){g.patchEventPrototype(d,g)})(d,w),function ts(d,g){if(Zone[g.symbol("patchEventTarget")])return;const{eventNames:w,zoneSymbolEventNames:E,TRUE_STR:x,FALSE_STR:N,ZONE_SYMBOL_PREFIX:R}=g.getGlobalObjects();for(let K=0;K<w.length;K++){const Z=w[K],ue=R+(Z+N),le=R+(Z+x);E[Z]={},E[Z][N]=ue,E[Z][x]=le}const $=d.EventTarget;$&&$.prototype&&g.patchEventTarget(d,[$&&$.prototype])}(d,w);const E=d.XMLHttpRequestEventTarget;E&&E.prototype&&w.patchEventTarget(d,[E.prototype])}),Zone.__load_patch("MutationObserver",(d,g,w)=>{Pn("MutationObserver"),Pn("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(d,g,w)=>{Pn("IntersectionObserver")}),Zone.__load_patch("FileReader",(d,g,w)=>{Pn("FileReader")}),Zone.__load_patch("on_property",(d,g,w)=>{!function De(d,g){if(Dn&&!Qn||Zone[d.symbol("patchEvents")])return;const w=typeof WebSocket<"u",E=g.__Zone_ignore_on_properties;if(Yn){const R=window,$=function mr(){try{const d=gn.navigator.userAgent;if(-1!==d.indexOf("MSIE ")||-1!==d.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:R,ignoreProperties:["error"]}]:[];Se(R,Qt.concat(["messageerror"]),E&&E.concat($),mn(R)),Se(Document.prototype,Qt,E),typeof R.SVGElement<"u"&&Se(R.SVGElement.prototype,Qt,E),Se(Element.prototype,Qt,E),Se(HTMLElement.prototype,Qt,E),Se(HTMLMediaElement.prototype,di,E),Se(HTMLFrameSetElement.prototype,mt.concat(Yt),E),Se(HTMLBodyElement.prototype,mt.concat(Yt),E),Se(HTMLFrameElement.prototype,yr,E),Se(HTMLIFrameElement.prototype,yr,E);const K=R.HTMLMarqueeElement;K&&Se(K.prototype,Ns,E);const Z=R.Worker;Z&&Se(Z.prototype,I,E)}const x=g.XMLHttpRequest;x&&Se(x.prototype,_r,E);const N=g.XMLHttpRequestEventTarget;N&&Se(N&&N.prototype,_r,E),typeof IDBIndex<"u"&&(Se(IDBIndex.prototype,je,E),Se(IDBRequest.prototype,je,E),Se(IDBOpenDBRequest.prototype,je,E),Se(IDBDatabase.prototype,je,E),Se(IDBTransaction.prototype,je,E),Se(IDBCursor.prototype,je,E)),w&&Se(WebSocket.prototype,at,E)}(w,d)}),Zone.__load_patch("customElements",(d,g,w)=>{!function J(d,g){const{isBrowser:w,isMix:E}=g.getGlobalObjects();(w||E)&&d.customElements&&"customElements"in d&&g.patchCallbacks(g,d.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(d,w)}),Zone.__load_patch("XHR",(d,g)=>{!function K(Z){const W=Z.XMLHttpRequest;if(!W)return;const me=W.prototype;let le=me[xs],ke=me[Me];if(!le){const X=Z.XMLHttpRequestEventTarget;if(X){const de=X.prototype;le=de[xs],ke=de[Me]}}const Ce="readystatechange",j="scheduled";function O(X){const de=X.data,te=de.target;te[N]=!1,te[$]=!1;const qe=te[x];le||(le=te[xs],ke=te[Me]),qe&&ke.call(te,Ce,qe);const nt=te[x]=()=>{if(te.readyState===te.DONE)if(!de.aborted&&te[N]&&X.state===j){const Ye=te[g.__symbol__("loadfalse")];if(0!==te.status&&Ye&&Ye.length>0){const Qe=X.invoke;X.invoke=function(){const ne=te[g.__symbol__("loadfalse")];for(let fe=0;fe<ne.length;fe++)ne[fe]===X&&ne.splice(fe,1);!de.aborted&&X.state===j&&Qe.call(X)},Ye.push(X)}else X.invoke()}else!de.aborted&&!1===te[N]&&(te[$]=!0)};return le.call(te,Ce,nt),te[w]||(te[w]=X),Ee.apply(te,de.args),te[N]=!0,X}function ce(){}function be(X){const de=X.data;return de.aborted=!0,se.apply(de.target,de.args)}const we=Je(me,"open",()=>function(X,de){return X[E]=0==de[2],X[R]=de[1],we.apply(X,de)}),Q=ie("fetchTaskAborting"),Ne=ie("fetchTaskScheduling"),Ee=Je(me,"send",()=>function(X,de){if(!0===g.current[Ne]||X[E])return Ee.apply(X,de);{const te={target:X,url:X[R],isPeriodic:!1,args:de,aborted:!1},qe=he("XMLHttpRequest.send",ce,te,O,be);X&&!0===X[$]&&!te.aborted&&qe.state===j&&qe.invoke()}}),se=Je(me,"abort",()=>function(X,de){const te=function ue(X){return X[w]}(X);if(te&&"string"==typeof te.type){if(null==te.cancelFn||te.data&&te.data.aborted)return;te.zone.cancelTask(te)}else if(!0===g.current[Q])return se.apply(X,de)})}(d);const w=ie("xhrTask"),E=ie("xhrSync"),x=ie("xhrListener"),N=ie("xhrScheduled"),R=ie("xhrURL"),$=ie("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",d=>{d.navigator&&d.navigator.geolocation&&function pr(d,g){const w=d.constructor.name;for(let E=0;E<g.length;E++){const x=g[E],N=d[x];if(N){if(!hr(fn(d,x)))continue;d[x]=($=>{const K=function(){return $.apply(this,qt(arguments,w+"."+x))};return _t(K,$),K})(N)}}}(d.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(d,g)=>{function w(E){return function(x){Ds(d,E).forEach(R=>{const $=d.PromiseRejectionEvent;if($){const K=new $(E,{promise:x.promise,reason:x.rejection});R.invoke(K)}})}}d.PromiseRejectionEvent&&(g[ie("unhandledPromiseRejectionHandler")]=w("unhandledrejection"),g[ie("rejectionHandledHandler")]=w("rejectionhandled"))})}},cr=>{cr(cr.s=565)}]);