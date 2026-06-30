(()=>{var e={};e.id=577,e.ids=[577],e.modules={4665:e=>{function t(e){return Promise.resolve().then(()=>{var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}t.keys=()=>[],t.resolve=t,t.id=4665,e.exports=t},60325:e=>{"use strict";e.exports=require("firebase-admin/app")},50274:e=>{"use strict";e.exports=require("firebase-admin/storage")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},14300:e=>{"use strict";e.exports=require("buffer")},32081:e=>{"use strict";e.exports=require("child_process")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},41808:e=>{"use strict";e.exports=require("net")},6005:e=>{"use strict";e.exports=require("node:crypto")},65714:e=>{"use strict";e.exports=require("node:diagnostics_channel")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},71576:e=>{"use strict";e.exports=require("string_decoder")},24404:e=>{"use strict";e.exports=require("tls")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},18131:(e,t,r)=>{"use strict";r.r(t),r.d(t,{originalPathname:()=>et,patchFetch:()=>er,requestAsyncStorage:()=>X,routeModule:()=>Z,serverHooks:()=>ee,staticGenerationAsyncStorage:()=>$});var i,n,s,a,o,l,d,c,u,p,h,y,m,f,b,g,S,v,K,k={};r.r(k),r.d(k,{POST:()=>H});var E=r(49303),I=r(88716),w=r(60670),j=r(87070),x=r(2202),A=r(9571),T=r(46454);r(50938),r(91208);var C=r(8035),D=r(7655),O=r(47877),R=class{constructor(){(0,O.Ko)(this,s),(0,O.Ko)(this,i,"clerk_telemetry_throttler"),(0,O.Ko)(this,n,864e5)}isEventThrottled(e){var t;if(!(0,O.ac)(this,s,l))return!1;let r=Date.now(),d=(0,O.U9)(this,s,a).call(this,e),c=null==(t=(0,O.ac)(this,s,o))?void 0:t[d];if(!c){let e={...(0,O.ac)(this,s,o),[d]:r};localStorage.setItem((0,O.ac)(this,i),JSON.stringify(e))}if(c&&r-c>(0,O.ac)(this,n)){let e=(0,O.ac)(this,s,o);delete e[d],localStorage.setItem((0,O.ac)(this,i),JSON.stringify(e))}return!!c}};i=new WeakMap,n=new WeakMap,s=new WeakSet,a=function(e){let{sk:t,pk:r,payload:i,...n}=e,s={...i,...n};return JSON.stringify(Object.keys({...i,...n}).sort().map(e=>s[e]))},o=function(){let e=localStorage.getItem((0,O.ac)(this,i));return e?JSON.parse(e):{}},l=function(){if("undefined"==typeof window)return!1;let e=window.localStorage;if(!e)return!1;try{let t="test";return e.setItem(t,t),e.removeItem(t),!0}catch(t){return t instanceof DOMException&&("QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&e.length>0&&e.removeItem((0,O.ac)(this,i)),!1}};var M={samplingRate:1,maxBufferSize:5,endpoint:"https://clerk-telemetry.com"},N=class{constructor(e){var t,r,i,n,s,a;(0,O.Ko)(this,y),(0,O.Ko)(this,d),(0,O.Ko)(this,c),(0,O.Ko)(this,u,{}),(0,O.Ko)(this,p,[]),(0,O.Ko)(this,h),(0,O.qx)(this,d,{maxBufferSize:null!=(t=e.maxBufferSize)?t:M.maxBufferSize,samplingRate:null!=(r=e.samplingRate)?r:M.samplingRate,disabled:null!=(i=e.disabled)&&i,debug:null!=(n=e.debug)&&n,endpoint:M.endpoint}),e.clerkVersion||"undefined"!=typeof window?(0,O.ac)(this,u).clerkVersion=null!=(s=e.clerkVersion)?s:"":(0,O.ac)(this,u).clerkVersion="",(0,O.ac)(this,u).sdk=e.sdk,(0,O.ac)(this,u).sdkVersion=e.sdkVersion,(0,O.ac)(this,u).publishableKey=null!=(a=e.publishableKey)?a:"";let o=(0,D.nQ)(e.publishableKey);o&&((0,O.ac)(this,u).instanceType=o.instanceType),e.secretKey&&((0,O.ac)(this,u).secretKey=e.secretKey.substring(0,16)),(0,O.qx)(this,c,new R)}get isEnabled(){var e;return!("development"!==(0,O.ac)(this,u).instanceType||(0,O.ac)(this,d).disabled||"undefined"!=typeof process&&(0,C.fQ)(process.env.CLERK_TELEMETRY_DISABLED))&&("undefined"==typeof window||null==(e=null==window?void 0:window.navigator)||!e.webdriver)}get isDebug(){return(0,O.ac)(this,d).debug||"undefined"!=typeof process&&(0,C.fQ)(process.env.CLERK_TELEMETRY_DEBUG)}record(e){let t=(0,O.U9)(this,y,K).call(this,e.event,e.payload);(0,O.U9)(this,y,S).call(this,t.event,t),(0,O.U9)(this,y,m).call(this,t,e.eventSamplingRate)&&((0,O.ac)(this,p).push(t),(0,O.U9)(this,y,b).call(this))}};function P(e){let t={...e},r=(0,A.gf)(t),i=(0,A.sA)({options:t,apiClient:r}),n=new N({...e.telemetry,publishableKey:t.publishableKey,secretKey:t.secretKey,...t.sdkMetadata?{sdk:t.sdkMetadata.name,sdkVersion:t.sdkMetadata.version}:{}});return{...r,...i,telemetry:n}}d=new WeakMap,c=new WeakMap,u=new WeakMap,p=new WeakMap,h=new WeakMap,y=new WeakSet,m=function(e,t){return this.isEnabled&&!this.isDebug&&(0,O.U9)(this,y,f).call(this,e,t)},f=function(e,t){let r=Math.random();return!(0,O.ac)(this,c).isEventThrottled(e)&&r<=(0,O.ac)(this,d).samplingRate&&(void 0===t||r<=t)},b=function(){if("undefined"==typeof window){(0,O.U9)(this,y,g).call(this);return}if((0,O.ac)(this,p).length>=(0,O.ac)(this,d).maxBufferSize){(0,O.ac)(this,h)&&("undefined"!=typeof cancelIdleCallback?cancelIdleCallback:clearTimeout)((0,O.ac)(this,h)),(0,O.U9)(this,y,g).call(this);return}(0,O.ac)(this,h)||("requestIdleCallback"in window?(0,O.qx)(this,h,requestIdleCallback(()=>{(0,O.U9)(this,y,g).call(this)})):(0,O.qx)(this,h,setTimeout(()=>{(0,O.U9)(this,y,g).call(this)},0)))},g=function(){fetch(new URL("/v1/event",(0,O.ac)(this,d).endpoint),{method:"POST",body:JSON.stringify({events:(0,O.ac)(this,p)}),headers:{"Content-Type":"application/json"}}).catch(()=>void 0).then(()=>{(0,O.qx)(this,p,[])}).catch(()=>void 0)},S=function(e,t){this.isDebug&&(void 0!==console.groupCollapsed?(console.groupCollapsed("[clerk/telemetry]",e),console.log(t),console.groupEnd()):console.log("[clerk/telemetry]",e,t))},v=function(){let e={name:(0,O.ac)(this,u).sdk,version:(0,O.ac)(this,u).sdkVersion};return"undefined"!=typeof window&&window.Clerk&&(e={...e,...window.Clerk.constructor.sdkMetadata}),e},K=function(e,t){var r,i;let n=(0,O.U9)(this,y,v).call(this);return{event:e,cv:null!=(r=(0,O.ac)(this,u).clerkVersion)?r:"",it:null!=(i=(0,O.ac)(this,u).instanceType)?i:"",sdk:n.name,sdkv:n.version,...(0,O.ac)(this,u).publishableKey?{pk:(0,O.ac)(this,u).publishableKey}:{},...(0,O.ac)(this,u).secretKey?{sk:(0,O.ac)(this,u).secretKey}:{},payload:t}},(0,T.A)(A.WX);var L=r(2800),J=r(3002),_=r(17487);let F=new(require("node:async_hooks")).AsyncLocalStorage;var G=r(99968),q=r(4758);let V={secretKey:G.Cn,publishableKey:G.Am,apiUrl:G.T5,apiVersion:G.Gn,userAgent:"@clerk/nextjs@5.7.6",proxyUrl:G.NM,domain:G.yK,isSatellite:G.lo,sdkMetadata:G.nE,telemetry:{disabled:G.CY,debug:G.w4}},B=e=>P({...V,...e}),Y=P(V),z=new Proxy(Object.assign(()=>{var e,t;let r;try{let e=(0,_.vX)(),t=(0,q.Pg)(e,L._G.Headers.ClerkRequestData);r=(0,q.om)(t)}catch(e){if(e&&(0,_.mx)(e))throw e}let i=null!=(t=null==(e=F.getStore())?void 0:e.get("requestData"))?t:r;return(null==i?void 0:i.secretKey)||(null==i?void 0:i.publishableKey)?B(i):Y},Y),{get:(e,t,r)=>((0,J.x9)("clerkClient singleton","Use `clerkClient()` as a function instead."),Reflect.get(e,t,r))});async function U(){r(88769);let{userId:e}=(0,x.I)();return e?z().users.getUser(e):null}var W=r(8194),Q=r(51691);async function H(e){try{let{topic:t,niche:r,tone:i,duration:n,language:s,style:a,voice:o,customScript:l}=await e.json();if(!r||!a||!o||!n||!s)return j.NextResponse.json({error:"Param\xe8tres requis manquants : niche, style, voice, duration, language sont obligatoires."},{status:400});let d="mock-clerk-user",c="creator@reelforge.ai";try{let e=(0,x.I)(),t=await U();e?.userId&&t?.emailAddresses?.[0]?.emailAddress&&(d=e.userId,c=t.emailAddresses[0].emailAddress)}catch(e){console.warn("⚠️ Clerk Auth could not resolve. Using sandbox fallback user.")}let u=`vid-mock-${Date.now()}`,p=123,h=!1;try{let e=await W._.user.findUnique({where:{clerkId:d}});if(e||(e=await W._.user.create({data:{clerkId:d,email:c,credits:50}})),e.credits<1)return j.NextResponse.json({error:"Cr\xe9dits insuffisants pour forger cette vid\xe9o. Veuillez recharger votre compte."},{status:403});let y=await W._.$transaction(async o=>{let d=await o.user.update({where:{id:e.id},data:{credits:{decrement:1}}});await o.creditsLog.create({data:{userId:e.id,creditsChanged:-1,reason:"VIDEO_GENERATION"}});let c=await o.video.create({data:{userId:e.id,title:t?`Sujet: ${t.slice(0,30)}...`:`S\xe9rie ${r}`,script:l||"En attente du script Gemini API...",niche:r,style:a,tone:i||"Neutral",duration:n,language:s,status:"PENDING"}}),u=await o.videoJob.create({data:{videoId:c.id,status:"PENDING",progress:0}});return{video:c,job:u,remainingCredits:d.credits}});u=y.video.id,p=y.remainingCredits,h=!0;try{await (0,Q.sd)(u,{topic:t,niche:r,style:a,tone:i,duration:n,language:s,voice:o})}catch(e){console.warn("⚠️ Redis/BullMQ queue failed. Job created in database but not queued in background worker.")}}catch(e){console.warn("⚠️ Database offline. Falling back to mock video generation task (Sandbox Mode).")}return j.NextResponse.json({success:!0,message:h?"T\xe2che de vid\xe9o envoy\xe9e \xe0 la forge.":"T\xe2che de vid\xe9o simul\xe9e lanc\xe9e (Mode Sandbox).",videoId:u,jobId:`job-mock-${Date.now()}`,queued:!0,remainingCredits:p,videoStatus:"PENDING",mock:!h},{status:201})}catch(e){return console.error("❌ Error generating video:",e),j.NextResponse.json({error:"Erreur serveur lors du lancement de la g\xe9n\xe9ration.",details:e?.message},{status:500})}}let Z=new E.AppRouteRouteModule({definition:{kind:I.x.APP_ROUTE,page:"/api/videos/generate/route",pathname:"/api/videos/generate",filename:"route",bundlePath:"app/api/videos/generate/route"},resolvedPagePath:"C:\\Users\\DELL\\Documents\\Facereal\\src\\app\\api\\videos\\generate\\route.ts",nextConfigOutput:"",userland:k}),{requestAsyncStorage:X,staticGenerationAsyncStorage:$,serverHooks:ee}=Z,et="/api/videos/generate/route";function er(){return(0,w.patchFetch)({serverHooks:ee,staticGenerationAsyncStorage:$})}},48942:function(e,t,r){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getKeyIndexes=t.hasFlag=t.exists=t.list=void 0;let n=i(r(18262));t.list=Object.keys(n.default);let s={};function a(e){"string"!=typeof e&&(e=String(e));let t=e.indexOf("->");return -1===t?e.length:t}t.list.forEach(e=>{s[e]=n.default[e].flags.reduce(function(e,t){return e[t]=!0,e},{})}),t.exists=function(e,t){return e=(null==t?void 0:t.caseInsensitive)?String(e).toLowerCase():e,!!n.default[e]},t.hasFlag=function(e,t,r){if(!s[e=(null==r?void 0:r.nameCaseInsensitive)?String(e).toLowerCase():e])throw Error("Unknown command "+e);return!!s[e][t]},t.getKeyIndexes=function(e,t,r){e=(null==r?void 0:r.nameCaseInsensitive)?String(e).toLowerCase():e;let i=n.default[e];if(!i)throw Error("Unknown command "+e);if(!Array.isArray(t))throw Error("Expect args to be an array");let s=[],o=!!(r&&r.parseExternalKey),l=(e,t)=>{let r=[],i=Number(e[t]);for(let e=0;e<i;e++)r.push(e+t+1);return r},d=(e,t,r)=>{for(let i=t;i<e.length-1;i+=1)if(String(e[i]).toLowerCase()===r.toLowerCase())return i+1;return null};switch(e){case"zunionstore":case"zinterstore":case"zdiffstore":s.push(0,...l(t,1));break;case"eval":case"evalsha":case"eval_ro":case"evalsha_ro":case"fcall":case"fcall_ro":case"blmpop":case"bzmpop":s.push(...l(t,1));break;case"sintercard":case"lmpop":case"zunion":case"zinter":case"zmpop":case"zintercard":case"zdiff":s.push(...l(t,0));break;case"msetex":{let e=Number(t[0]);for(let t=0;t<e;t++)s.push(1+2*t);break}case"georadius":{s.push(0);let e=d(t,5,"STORE");e&&s.push(e);let r=d(t,5,"STOREDIST");r&&s.push(r);break}case"georadiusbymember":{s.push(0);let e=d(t,4,"STORE");e&&s.push(e);let r=d(t,4,"STOREDIST");r&&s.push(r);break}case"sort":case"sort_ro":s.push(0);for(let e=1;e<t.length-1;e++){let r=t[e];if("string"!=typeof r)continue;let i=r.toUpperCase();"GET"===i?(e+=1,"#"!==(r=t[e])&&(o?s.push([e,a(r)]):s.push(e))):"BY"===i?(e+=1,o?s.push([e,a(t[e])]):s.push(e)):"STORE"===i&&(e+=1,s.push(e))}break;case"migrate":if(""===t[2])for(let e=5;e<t.length-1;e++){let r=t[e];if("string"==typeof r&&"KEYS"===r.toUpperCase()){for(let r=e+1;r<t.length;r++)s.push(r);break}}else s.push(2);break;case"xreadgroup":case"xread":for(let r="xread"===e?0:3;r<t.length-1;r++)if("STREAMS"===String(t[r]).toUpperCase()){for(let e=r+1;e<=r+(t.length-1-r)/2;e++)s.push(e);break}break;default:if(i.step>0){let e=i.keyStart-1,r=i.keyStop>0?i.keyStop:t.length+i.keyStop+1;for(let t=e;t<r;t+=i.step)s.push(t)}}return s}},64780:(e,t,r)=>{"use strict";let i;r.d(t,{H:()=>s});var n=r(46180);i=globalThis.AbortController?globalThis.AbortController:n.AbortController;class s extends i{}},99670:(e,t,r)=>{"use strict";r.d(t,{x:()=>i});class i{static normalize(e){return Number.isFinite(e)?{type:"fixed",delay:e}:e||void 0}static calculate(e,t,r,n,s){if(e)return(function(e,t){if(e.type in i.builtinStrategies)return i.builtinStrategies[e.type](e.delay,e.jitter);if(t)return t;throw Error(`Unknown backoff strategy ${e.type}.
      If a custom backoff strategy is used, specify it when the queue is created.`)})(e,s)(t,e.type,r,n)}}i.builtinStrategies={fixed:function(e,t=0){return function(){return t>0?Math.floor(Math.random()*e*t+e*(1-t)):e}},exponential:function(e,t=0){return function(r){if(!(t>0))return Math.round(Math.pow(2,r-1)*e);{let i=Math.round(Math.pow(2,r-1)*e);return Math.floor(Math.random()*i*t+i*(1-t))}}}}},69997:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var i=r(71017),n=r(22057);e=r.hmd(e);let s=()=>"object"==typeof e.exports;class a{constructor({mainFile:e=s()?i.join(process.cwd(),"dist/cjs/classes/main.js"):i.join(process.cwd(),"dist/esm/classes/main.js"),useWorkerThreads:t,workerForkOptions:r,workerThreadsOptions:n}){this.retained={},this.free={},this.opts={mainFile:e,useWorkerThreads:t,workerForkOptions:r,workerThreadsOptions:n}}async retain(e){let t=this.getFree(e).pop();if(t)return this.retained[t.pid]=t,t;(t=new n.U(this.opts.mainFile,e,{useWorkerThreads:this.opts.useWorkerThreads,workerForkOptions:this.opts.workerForkOptions,workerThreadsOptions:this.opts.workerThreadsOptions})).on("exit",this.remove.bind(this,t));try{if(await t.init(),null!==t.exitCode||null!==t.signalCode)throw Error("Child exited before it could be retained");return this.retained[t.pid]=t,t}catch(e){throw console.error(e),this.release(t),e}}release(e){delete this.retained[e.pid],this.getFree(e.processFile).push(e)}remove(e){delete this.retained[e.pid];let t=this.getFree(e.processFile),r=t.indexOf(e);r>-1&&t.splice(r,1)}async kill(e,t="SIGKILL"){return this.remove(e),e.kill(t,3e4)}async clean(){let e=Object.values(this.retained).concat(this.getAllFree());this.retained={},this.free={},await Promise.all(e.map(e=>this.kill(e,"SIGTERM")))}getFree(e){return this.free[e]=this.free[e]||[]}getAllFree(){return Object.values(this.free).reduce((e,t)=>e.concat(t),[])}}},22057:(e,t,r)=>{"use strict";r.d(t,{U:()=>d});var i=r(32081),n=r(41808);let s=require("worker_threads");var a=r(5315),o=r(82361);let l={1:"Uncaught Fatal Exception",2:"Unused",3:"Internal JavaScript Parse Error",4:"Internal JavaScript Evaluation Failure",5:"Fatal Error",6:"Non-function Internal Exception Handler",7:"Internal Exception Handler Run-Time Failure",8:"Unused",9:"Invalid Argument",10:"Internal JavaScript Run-Time Failure",12:"Invalid Debug Argument",13:"Unfinished Top-Level Await"};class d extends o.EventEmitter{constructor(e,t,r={useWorkerThreads:!1}){super(),this.mainFile=e,this.processFile=t,this.opts=r,this._exitCode=null,this._signalCode=null,this._killed=!1}get pid(){if(this.childProcess)return this.childProcess.pid;if(this.worker)return Math.abs(this.worker.threadId);throw Error("No child process or worker thread")}get exitCode(){return this._exitCode}get signalCode(){return this._signalCode}get killed(){return this.childProcess?this.childProcess.killed:this._killed}async init(){let e;let t=await u(process.execArgv);this.opts.useWorkerThreads?this.worker=e=new s.Worker(this.mainFile,Object.assign({execArgv:t,stdin:!0,stdout:!0,stderr:!0},this.opts.workerThreadsOptions?this.opts.workerThreadsOptions:{})):this.childProcess=e=(0,i.fork)(this.mainFile,[],Object.assign({execArgv:t,stdio:"pipe"},this.opts.workerForkOptions?this.opts.workerForkOptions:{})),e.on("exit",(t,r)=>{this._exitCode=t,r=void 0===r?null:r,this._signalCode=r,this._killed=!0,this.emit("exit",t,r),e.removeAllListeners(),this.removeAllListeners()}),e.on("error",(...e)=>this.emit("error",...e)),e.on("message",(...e)=>this.emit("message",...e)),e.on("close",(...e)=>this.emit("close",...e)),e.stdout.pipe(process.stdout),e.stderr.pipe(process.stderr),await this.initChild()}async send(e){return new Promise((t,r)=>{this.childProcess?this.childProcess.send(e,e=>{e?r(e):t()}):this.worker?t(this.worker.postMessage(e)):t()})}killProcess(e="SIGKILL"){this.childProcess?this.childProcess.kill(e):this.worker&&this.worker.terminate()}async kill(e="SIGKILL",t){var r;if(this.hasProcessExited())return;let i=(r=this.childProcess||this.worker,new Promise(e=>{r.once("exit",()=>e())}));if(this.killProcess(e),void 0!==t&&(0===t||isFinite(t))){let e=setTimeout(()=>{this.hasProcessExited()||this.killProcess("SIGKILL")},t);await i,clearTimeout(e)}await i}async initChild(){let e=new Promise((e,t)=>{let r=n=>{if(Object.values(a.d$).includes(n.cmd)){if(n.cmd===a.d$.InitCompleted)e();else if(n.cmd===a.d$.InitFailed){let e=Error();e.stack=n.err.stack,e.message=n.err.message,t(e)}this.off("message",r),this.off("close",i)}},i=(e,n)=>{e>128&&(e-=128);let s=l[e]||`Unknown exit code ${e}`;t(Error(`Error initializing child: ${s} and signal ${n}`)),this.off("message",r),this.off("close",i)};this.on("message",r),this.on("close",i)});await this.send({cmd:a.uv.Init,value:this.processFile}),await e}hasProcessExited(){return!!(null!==this.exitCode||this.signalCode)}}let c=async()=>new Promise(e=>{let t=(0,n.createServer)();t.listen(0,()=>{let{port:r}=t.address();t.close(()=>e(r))})}),u=async e=>{let t=[],r=[];for(let i=0;i<e.length;i++){let n=e[i];if(-1===n.indexOf("--inspect"))t.push(n);else{let e=n.split("=")[0],t=await c();r.push(`${e}=${t}`)}}return t.concat(r)}},59372:(e,t,r)=>{"use strict";r.d(t,{i:()=>i});class i extends Error{constructor(e,t){super(null!=e?e:"Connection is closed"),this.cause=t,this.name="ConnectionClosedError",Object.setPrototypeOf(this,new.target.prototype)}}},73233:(e,t,r)=>{"use strict";r.d(t,{Cn:()=>i,Id:()=>n,Aw:()=>s,_P:()=>a._,rh:()=>o,mf:()=>l}),r(59372);class i extends Error{constructor(e="bullmq:movedToDelayed"){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}let n="bullmq:rateLimitExceeded";class s extends Error{constructor(e=n){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}var a=r(77266);class o extends Error{constructor(e="bullmq:movedToWaitingChildren"){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}class l extends Error{constructor(e="bullmq:movedToWait"){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}},77266:(e,t,r)=>{"use strict";r.d(t,{_:()=>i});class i extends Error{constructor(e="bullmq:unrecoverable"){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}}},89893:(e,t,r)=>{"use strict";r.d(t,{c:()=>function e(t){if(!0===t.__bullmq_iredis)return t;let r=i.get(t);if(r)return r;let s=!0===t.isCluster,a=new Map,o=Object.create(null);o.__bullmq_iredis=!0,o.isCluster=s,o.runCommand=(e,r)=>t[e](r),o.pipeline=(...e)=>n(t.pipeline(...e)),o.multi=(...e)=>n(t.multi(...e)),"function"==typeof t.duplicate&&(o.duplicate=r=>{var i;if(s){let n=(null===(i=t.options)||void 0===i?void 0:i.redisOptions)||{},s=r?Object.assign(Object.assign({},n),r):n;return e(t.duplicate(void 0,{redisOptions:s}))}return e(t.duplicate(r))}),o.hset=(e,r,...i)=>{if("string"==typeof r)return t.hset(e,r,...i);let n=[e];for(let[e,t]of Object.entries(r))n.push(e,t);return t.hset(...n)},o.set=(e,r,i,...n)=>{if("string"==typeof i||null==i)return t.set(e,r,...null!=i?[i,...n]:[]);let s=[e,r];return null!=i.PX?s.push("PX",i.PX):null!=i.EX&&s.push("EX",i.EX),t.set(...s)},o.zrange=(e,r,i,n,...s)=>"string"==typeof n?t.zrange(e,r,i,n,...s):(null==n?void 0:n.WITHSCORES)?t.zrange(e,r,i,"WITHSCORES"):t.zrange(e,r,i),o.zrevrange=(e,r,i,n,...s)=>"string"==typeof n?t.zrevrange(e,r,i,n,...s):(null==n?void 0:n.WITHSCORES)?t.zrevrange(e,r,i,"WITHSCORES"):t.zrevrange(e,r,i),o.xadd=(e,r,i,...n)=>{if("string"==typeof i)return t.xadd(e,r,i,...n);let s=n[0],a=[e];for(let[e,t]of((null==s?void 0:s.MAXLEN)!=null&&(a.push("MAXLEN"),!1!==s.approximate&&a.push("~"),a.push(s.MAXLEN)),a.push(r),Object.entries(i)))a.push(e,t);return t.xadd(...a)},o.xread=(e,...r)=>{if("string"==typeof e)return t.xread(e,...r);let i=r[0],n=[];for(let t of((null==i?void 0:i.BLOCK)!=null&&n.push("BLOCK",i.BLOCK),(null==i?void 0:i.COUNT)!=null&&n.push("COUNT",i.COUNT),n.push("STREAMS"),e))n.push(t.key);for(let t of e)n.push(t.id);return t.xread(...n)},o.xtrim=(e,r,i,...n)=>{if("string"==typeof i||0===n.length)return t.xtrim(e,r,i,...n);let s=n[0],a=[e,r];return(null==s?void 0:s.approximate)!==!1&&a.push("~"),a.push(i),t.xtrim(...a)},o.clientSetName=e=>t.client("SETNAME",e),o.clientList=()=>t.client("LIST"),o.scan=(e,...r)=>{if(0===r.length||"string"==typeof r[0]||"function"==typeof r[0])return t.scan(e,...r);let i=r[0],n=[e];return(null==i?void 0:i.MATCH)!=null&&n.push("MATCH",i.MATCH),(null==i?void 0:i.COUNT)!=null&&n.push("COUNT",i.COUNT),t.scan(...n)};let l=new Proxy(t,{get(e,t){if(t in o)return o[t];let r=Reflect.get(e,t,e);if("function"!=typeof r)return r;if(Object.prototype.hasOwnProperty.call(e,t))return r.bind(e);let i=a.get(t);if(void 0!==i)return i;let n=r.bind(e);return a.set(t,n),n},set:(e,t,r)=>t in o?(o[t]=r,!0):(a.delete(t),Reflect.set(e,t,r)),deleteProperty:(e,t)=>!(t in o)&&(a.delete(t),Reflect.deleteProperty(e,t)),has:(e,t)=>t in o||Reflect.has(e,t)});return i.set(t,l),l},i:()=>s});let i=new WeakMap;function n(e){e.runCommand=function(t,r){return e[t](r),e};let t=e.hset.bind(e);e.hset=function(r,i){let n=[r];for(let[e,t]of Object.entries(i))n.push(e,t);return t(...n),e};let r=e.hscan.bind(e);e.hscan=function(t,i,n){return(null==n?void 0:n.COUNT)!=null?r(t,i,"COUNT",n.COUNT):r(t,i),e};let i=e.sscan.bind(e);return e.sscan=function(t,r,n){return(null==n?void 0:n.COUNT)!=null?i(t,r,"COUNT",n.COUNT):i(t,r),e},e}function s(e){return!!e&&"object"==typeof e&&(!0===e.__bullmq_iredis||"function"==typeof e.runCommand&&"function"==typeof e.defineCommand&&"function"==typeof e.pipeline&&"function"==typeof e.multi&&"function"==typeof e.duplicate&&"function"==typeof e.scanStream&&"function"==typeof e.connect&&"function"==typeof e.disconnect&&"function"==typeof e.on&&"string"==typeof e.status&&"boolean"==typeof e.isCluster)}},38829:(e,t,r)=>{"use strict";r.d(t,{W:()=>d});var i=r(31650),n=r(50314),s=r(95963),a=r(41381),o=r(5315),l=r(25619);class d extends a.W{constructor(e,t,r){super(e,t,r),this.repeatStrategy=t.settings&&t.settings.repeatStrategy||c}async upsertJobScheduler(e,t,r,n,a,{override:l,producerId:d}){let c;let{every:u,limit:p,pattern:h,offset:y}=t;if(h&&u)throw Error("Both .pattern and .every options are defined for this repeatable job");if(!h&&!u)throw Error("Either .pattern or .every options must be defined for this repeatable job");if(t.immediately&&t.startDate)throw Error("Both .immediately and .startDate options are defined for this repeatable job");t.immediately&&t.every&&console.warn("Using option immediately with every does not affect the job's schedule. Job will run immediately anyway.");let m=t.count?t.count+1:1;if(void 0!==t.limit&&m>t.limit)return;let f=Date.now(),{endDate:b}=t;if(b&&f>new Date(b).getTime())return;let g=a.prevMillis||0;f=g<f?f:g;let{immediately:S}=t,v=(0,i._T)(t,["immediately"]),K=u&&y?y:null;if(h&&(c=await this.repeatStrategy(f,t,r))<f&&(c=f),c||u)return this.trace(o.MU.PRODUCER,"add",`${this.name}.${r}`,async(i,y)=>{var g,S;let k=a.telemetry;if(y){let e=null===(g=a.telemetry)||void 0===g?void 0:g.omitContext,t=(null===(S=a.telemetry)||void 0===S?void 0:S.metadata)||!e&&y;(t||e)&&(k={metadata:t,omitContext:e})}let E=this.getNextJobOpts(c,e,Object.assign(Object.assign({},a),{repeat:v,telemetry:k}),m,K);if(l){c<f&&(c=f);let[l,y]=await this.scripts.addJobScheduler(e,c,JSON.stringify(void 0===n?{}:n),s.o.optsAsJSON(a),{name:r,startDate:t.startDate?new Date(t.startDate).getTime():void 0,endDate:b?new Date(b).getTime():void 0,tz:t.tz,pattern:h,every:u,limit:p,offset:K},s.o.optsAsJSON(E),d),m="string"==typeof y?parseInt(y,10):y,g=new this.Job(this,r,n,Object.assign(Object.assign({},E),{delay:m}),l);return g.id=l,null==i||i.setAttributes({[o.Np.JobSchedulerId]:e,[o.Np.JobId]:g.id}),g}{let t=await this.scripts.updateJobSchedulerNextMillis(e,c,JSON.stringify(void 0===n?{}:n),s.o.optsAsJSON(E),d);if(t){let s=new this.Job(this,r,n,E,t);return s.id=t,null==i||i.setAttributes({[o.Np.JobSchedulerId]:e,[o.Np.JobId]:s.id}),s}}})}getNextJobOpts(e,t,r,i,n){var s,a;let o=this.getSchedulerNextJobId({jobSchedulerId:t,nextMillis:e}),l=Date.now(),d=e+n-l,c=Object.assign(Object.assign({},r),{jobId:o,delay:d<0?0:d,timestamp:l,prevMillis:e,repeatJobKey:t});return c.repeat=Object.assign(Object.assign({},r.repeat),{offset:n,count:i,startDate:(null===(s=r.repeat)||void 0===s?void 0:s.startDate)?new Date(r.repeat.startDate).getTime():void 0,endDate:(null===(a=r.repeat)||void 0===a?void 0:a.endDate)?new Date(r.repeat.endDate).getTime():void 0}),c}async removeJobScheduler(e){return this.scripts.removeJobScheduler(e)}async getSchedulerData(e,t,r){let i=await e.hgetall(this.toKey("repeat:"+t));return this.transformSchedulerData(t,i,r)}transformSchedulerData(e,t,r){if(t&&Object.keys(t).length>0){let i={key:e,name:t.name,next:r};return t.ic&&(i.iterationCount=parseInt(t.ic)),t.limit&&(i.limit=parseInt(t.limit)),t.startDate&&(i.startDate=parseInt(t.startDate)),t.endDate&&(i.endDate=parseInt(t.endDate)),t.tz&&(i.tz=t.tz),t.pattern&&(i.pattern=t.pattern),t.every&&(i.every=parseInt(t.every)),t.offset&&(i.offset=parseInt(t.offset)),(t.data||t.opts)&&(i.template=this.getTemplateFromJSON(t.data,t.opts)),i}if(e.includes(":"))return this.keyToData(e,r)}keyToData(e,t){let r=e.split(":"),i=r.slice(4).join(":")||null;return{key:e,name:r[0],id:r[1]||null,endDate:parseInt(r[2])||null,tz:r[3]||null,pattern:i,next:t}}async isJobScheduler(e){let t=await this.client;return 1===await t.hexists(`${this.keys.repeat}:${e}`,"ic")}async getScheduler(e){let[t,r]=await this.scripts.getJobScheduler(e);return this.transformSchedulerData(e,t?(0,l.VZ)(t):null,r?parseInt(r):null)}getTemplateFromJSON(e,t){let r={};return e&&(r.data=JSON.parse(e)),t&&(r.opts=s.o.optsFromJSON(t)),r}async getJobSchedulers(e=0,t=-1,r=!1){let i=await this.client,n=this.keys.repeat,s=r?await i.zrange(n,e,t,{WITHSCORES:!0}):await i.zrevrange(n,e,t,{WITHSCORES:!0}),a=[];for(let e=0;e<s.length;e+=2)a.push(this.getSchedulerData(i,s[e],parseInt(s[e+1])));return Promise.all(a)}async getSchedulersCount(){let e=this.keys.repeat;return(await this.client).zcard(e)}getSchedulerNextJobId({nextMillis:e,jobSchedulerId:t}){return`repeat:${t}:${e}`}}let c=(e,t)=>{let{pattern:r}=t,i=new Date(e),s=t.startDate&&new Date(t.startDate),a=(0,n.parseExpression)(r,Object.assign(Object.assign({},t),{currentDate:s>i?s:i}));try{if(t.immediately)return new Date().getTime();return a.next().getTime()}catch(e){}}},95963:(e,t,r)=>{"use strict";r.d(t,{o:()=>u});var i=r(31650),n=r(73837),s=r(25619),a=r(19183),o=r(99670),l=r(77266),d=r(5315);let c=(0,n.debuglog)("bull");class u{constructor(e,t,r,n={},a){this.queue=e,this.name=t,this.data=r,this.opts=n,this.id=a,this.progress=0,this.returnvalue=null,this.stacktrace=null,this.delay=0,this.priority=0,this.attemptsStarted=0,this.attemptsMade=0,this.stalledCounter=0;let l=this.opts,{repeatJobKey:d}=l,c=(0,i._T)(l,["repeatJobKey"]);this.opts=Object.assign({attempts:0},c),this.delay=this.opts.delay,this.priority=this.opts.priority||0,this.repeatJobKey=d,this.timestamp=n.timestamp?n.timestamp:Date.now(),this.opts.backoff=o.x.normalize(n.backoff),this.parentKey=(0,s.pV)(n.parent),n.parent&&(this.parent={id:n.parent.id,queueKey:n.parent.queue},n.failParentOnFailure&&(this.parent.fpof=!0),n.removeDependencyOnFailure&&(this.parent.rdof=!0),n.ignoreDependencyOnFailure&&(this.parent.idof=!0),n.continueParentOnFailure&&(this.parent.cpof=!0)),this.debounceId=n.debounce?n.debounce.id:void 0,this.deduplicationId=n.deduplication?n.deduplication.id:this.debounceId,this.toKey=e.toKey.bind(e),this.createScripts(),this.queueQualifiedName=e.qualifiedName}static async create(e,t,r,i){let n=await e.client,s=new this(e,t,r,i,i&&i.jobId);return s.id=await s.addJob(n,{parentKey:s.parentKey,parentDependenciesKey:s.parentKey?`${s.parentKey}:dependencies`:""}),s}static async createBulk(e,t){let r=await e.client,i=t.map(t=>{var r;return new this(e,t.name,t.data,t.opts,null===(r=t.opts)||void 0===r?void 0:r.jobId)}),n=r.pipeline();for(let e of i)e.addJob(n,{parentKey:e.parentKey,parentDependenciesKey:e.parentKey?`${e.parentKey}:dependencies`:""});let s=await n.exec();for(let e=0;e<s.length;++e){let[t,r]=s[e];if(t)throw t;i[e].id=r}return i}static fromJSON(e,t,r){let i=JSON.parse(t.data||"{}"),n=u.optsFromJSON(t.opts),a=new this(e,t.name,i,n,t.id||r);return a.progress=JSON.parse(t.progress||"0"),a.delay=parseInt(t.delay),a.priority=parseInt(t.priority),a.timestamp=parseInt(t.timestamp),t.finishedOn&&(a.finishedOn=parseInt(t.finishedOn)),t.processedOn&&(a.processedOn=parseInt(t.processedOn)),t.rjk&&(a.repeatJobKey=t.rjk),t.deid&&(a.debounceId=t.deid,a.deduplicationId=t.deid),t.failedReason&&(a.failedReason=t.failedReason),a.attemptsStarted=parseInt(t.ats||"0"),a.attemptsMade=parseInt(t.attemptsMade||t.atm||"0"),a.stalledCounter=parseInt(t.stc||"0"),t.defa&&(a.deferredFailure=t.defa),a.stacktrace=function(e){if(!e)return[];let t=(0,s.Y3)(JSON.parse,JSON,[e]);return t!==s.TJ&&t instanceof Array?t:[]}(t.stacktrace),"string"==typeof t.returnvalue&&(a.returnvalue=p(t.returnvalue)),t.parentKey?a.parentKey=t.parentKey:a.parentKey=void 0,t.parent?a.parent=JSON.parse(t.parent):a.parent=void 0,t.pb&&(a.processedBy=t.pb),t.nrjid&&(a.nextRepeatableJobId=t.nrjid),a}createScripts(){this.scripts=(0,a.W)(this.queue)}static optsFromJSON(e,t=s.Nw){let r=Object.entries(JSON.parse(e||"{}")),i={};for(let e of r){let[r,n]=e;t[r]?i[t[r]]=n:"tm"===r?i.telemetry=Object.assign(Object.assign({},i.telemetry),{metadata:n}):"omc"===r?i.telemetry=Object.assign(Object.assign({},i.telemetry),{omitContext:n}):i[r]=n}return i}static async fromId(e,t){if(t){let r=await e.client,i=await r.hgetall(e.toKey(t));return(0,s.xb)(i)?void 0:this.fromJSON(e,i,t)}}static addJobLog(e,t,r,i){return e.scripts.addLog(t,r,i)}toJSON(){let{queue:e,scripts:t}=this;return(0,i._T)(this,["queue","scripts"])}asJSON(){return(0,s.Yq)({id:this.id,name:this.name,data:JSON.stringify(void 0===this.data?{}:this.data),opts:u.optsAsJSON(this.opts),parent:this.parent?Object.assign({},this.parent):void 0,parentKey:this.parentKey,progress:this.progress,attemptsMade:this.attemptsMade,attemptsStarted:this.attemptsStarted,stalledCounter:this.stalledCounter,finishedOn:this.finishedOn,processedOn:this.processedOn,timestamp:this.timestamp,failedReason:JSON.stringify(this.failedReason),stacktrace:JSON.stringify(this.stacktrace),debounceId:this.debounceId,deduplicationId:this.deduplicationId,repeatJobKey:this.repeatJobKey,returnvalue:JSON.stringify(this.returnvalue),nrjid:this.nextRepeatableJobId})}static optsAsJSON(e={},t=s.fq){let r=Object.entries(e),i={};for(let[e,n]of r)void 0!==n&&(e in t?i[t[e]]=n:"telemetry"===e?(void 0!==n.metadata&&(i.tm=n.metadata),void 0!==n.omitContext&&(i.omc=n.omitContext)):i[e]=n);return i}asJSONSandbox(){return Object.assign(Object.assign({},this.asJSON()),{queueName:this.queueName,queueQualifiedName:this.queueQualifiedName,prefix:this.prefix})}updateData(e){return this.data=e,this.scripts.updateData(this,e)}async updateProgress(e){this.progress=e,await this.scripts.updateProgress(this.id,e),this.queue.emit("progress",this,e)}async log(e){return u.addJobLog(this.queue,this.id,e,this.opts.keepLogs)}async removeChildDependency(){return!!await this.scripts.removeChildDependency(this.id,this.parentKey)&&(this.parent=void 0,this.parentKey=void 0,!0)}async clearLogs(e){let t=await this.queue.client,r=this.toKey(this.id)+":logs";e?await t.ltrim(r,-e,-1):await t.del(r)}async remove({removeChildren:e=!0}={}){await this.queue.waitUntilReady();let t=this.queue;if(await this.scripts.remove(this.id,e))t.emit("removed",this);else throw Error(`Job ${this.id} could not be removed because it is locked by another worker`)}async removeUnprocessedChildren(){let e=this.id;await this.scripts.removeUnprocessedChildren(e)}extendLock(e,t){return this.scripts.extendLock(this.id,e,t)}async moveToCompleted(e,t,r=!0){return this.queue.trace(d.MU.INTERNAL,"complete",this.queue.name,async i=>{this.setSpanJobAttributes(i),await this.queue.waitUntilReady(),this.returnvalue=e||void 0;let n=(0,s.Y3)(JSON.stringify,JSON,[e]);if(n===s.TJ)throw s.TJ.value;let a=this.scripts.moveToCompletedArgs(this,n,this.opts.removeOnComplete,t,r),o=await this.scripts.moveToFinished(this.id,a);return this.finishedOn=a[this.scripts.moveToFinishedKeys.length+1],this.attemptsMade+=1,this.recordJobMetrics("completed"),o})}async moveToWait(e){let t=await this.scripts.moveJobFromActiveToWait(this.id,e);return this.recordJobMetrics("waiting"),t}async shouldRetryJob(e){if(!(this.attemptsMade+1<this.opts.attempts)||this.discarded||e instanceof l._||"UnrecoverableError"==e.name)return[!1,0];{let t=this.queue.opts,r=await o.x.calculate(this.opts.backoff,this.attemptsMade+1,e,this,t.settings&&t.settings.backoffStrategy);return[-1!=r,-1==r?0:r]}}async moveToFailed(e,t,r=!1){this.failedReason=null==e?void 0:e.message;let[i,n]=await this.shouldRetryJob(e);return this.queue.trace(d.MU.INTERNAL,this.getSpanOperation(i,n),this.queue.name,async(s,a)=>{var o,l;let d,c,u;this.setSpanJobAttributes(s),(null===(l=null===(o=this.opts)||void 0===o?void 0:o.telemetry)||void 0===l?void 0:l.omitContext)||!a||(d=a),this.updateStacktrace(e);let p={failedReason:this.failedReason,stacktrace:JSON.stringify(this.stacktrace),tm:d};if(i)n?(c=await this.scripts.moveToDelayed(this.id,Date.now(),n,t,{fieldsToUpdate:p,fetchNext:r}),this.recordJobMetrics("delayed")):(c=await this.scripts.retryJob(this.id,this.opts.lifo,t,{fieldsToUpdate:p}),this.recordJobMetrics("retried"));else{let e=this.scripts.moveToFailedArgs(this,this.failedReason,this.opts.removeOnFail,t,r,p);c=await this.scripts.moveToFinished(this.id,e),u=e[this.scripts.moveToFinishedKeys.length+1],this.recordJobMetrics("failed")}return u&&"number"==typeof u&&(this.finishedOn=u),n&&"number"==typeof n&&(this.delay=n),this.attemptsMade+=1,c})}getSpanOperation(e,t){return e?t?"delay":"retry":"fail"}recordJobMetrics(e){var t,r;let i=null===(r=null===(t=this.queue.opts)||void 0===t?void 0:t.telemetry)||void 0===r?void 0:r.meter;if(!i)return;let n={[d.Np.QueueName]:this.queue.name,[d.Np.JobName]:this.name,[d.Np.JobStatus]:e},s={completed:d.p7.JobsCompleted,failed:d.p7.JobsFailed,delayed:d.p7.JobsDelayed,retried:d.p7.JobsRetried,waiting:d.p7.JobsWaiting,"waiting-children":d.p7.JobsWaitingChildren}[e];if(i.createCounter(s,{description:`Number of jobs ${e}`,unit:"1"}).add(1,n),this.processedOn){let e=Date.now()-this.processedOn;i.createHistogram(d.p7.JobDuration,{description:"Job processing duration",unit:"ms"}).record(e,n)}}isCompleted(){return this.isInZSet("completed")}isFailed(){return this.isInZSet("failed")}isDelayed(){return this.isInZSet("delayed")}isWaitingChildren(){return this.isInZSet("waiting-children")}isActive(){return this.isInList("active")}async isWaiting(){return await this.isInList("wait")||await this.isInList("paused")}get queueName(){return this.queue.name}get prefix(){return this.queue.opts.prefix}getState(){return this.scripts.getState(this.id)}async changeDelay(e){await this.scripts.changeDelay(this.id,e),this.delay=e}async changePriority(e){await this.scripts.changePriority(this.id,e.priority,e.lifo),this.priority=e.priority||0}async getChildrenValues(){let e=await this.queue.client,t=await e.hgetall(this.toKey(`${this.id}:processed`));if(t)return(0,s.WE)(t)}async getIgnoredChildrenFailures(){return(await this.queue.client).hgetall(this.toKey(`${this.id}:failed`))}async getFailedChildrenValues(){return(await this.queue.client).hgetall(this.toKey(`${this.id}:failed`))}async getDependencies(e={}){let t=(await this.queue.client).pipeline();if(e.processed||e.unprocessed||e.ignored||e.failed){let r,i,n,s,a,o,l,d;let c={cursor:0,count:20},u=[];if(e.processed){u.push("processed");let r=Object.assign(Object.assign({},c),e.processed);t.hscan(this.toKey(`${this.id}:processed`),r.cursor,{COUNT:r.count})}if(e.unprocessed){u.push("unprocessed");let r=Object.assign(Object.assign({},c),e.unprocessed);t.sscan(this.toKey(`${this.id}:dependencies`),r.cursor,{COUNT:r.count})}if(e.ignored){u.push("ignored");let r=Object.assign(Object.assign({},c),e.ignored);t.hscan(this.toKey(`${this.id}:failed`),r.cursor,{COUNT:r.count})}if(e.failed){u.push("failed");let i=Object.assign(Object.assign({},c),e.failed);r=i.cursor+i.count,t.zrange(this.toKey(`${this.id}:unsuccessful`),i.cursor,i.count-1)}let p=await t.exec();return u.forEach((e,t)=>{switch(e){case"processed":{i=p[t][1][0];let e=p[t][1][1],r={};for(let t=0;t<e.length;++t)t%2&&(r[e[t-1]]=JSON.parse(e[t]));n=r;break}case"failed":o=p[t][1];break;case"ignored":{l=p[t][1][0];let e=p[t][1][1],r={};for(let t=0;t<e.length;++t)t%2&&(r[e[t-1]]=e[t]);d=r;break}case"unprocessed":s=p[t][1][0],a=p[t][1][1]}}),Object.assign(Object.assign(Object.assign(Object.assign({},i?{processed:n,nextProcessedCursor:Number(i)}:{}),l?{ignored:d,nextIgnoredCursor:Number(l)}:{}),r?{failed:o,nextFailedCursor:r}:{}),s?{unprocessed:a,nextUnprocessedCursor:Number(s)}:{})}{t.hgetall(this.toKey(`${this.id}:processed`)),t.smembers(this.toKey(`${this.id}:dependencies`)),t.hgetall(this.toKey(`${this.id}:failed`)),t.zrange(this.toKey(`${this.id}:unsuccessful`),0,-1);let[[e,r],[i,n],[a,o],[l,d]]=await t.exec();return{processed:(0,s.WE)(r),unprocessed:n,failed:d,ignored:o}}}async getDependenciesCount(e={}){let t=[];Object.entries(e).forEach(([e,r])=>{r&&t.push(e)});let r=t.length?t:["processed","unprocessed","ignored","failed"],i=await this.scripts.getDependencyCounts(this.id,r),n={};return i.forEach((e,t)=>{n[`${r[t]}`]=e||0}),n}async waitUntilFinished(e,t){await this.queue.waitUntilReady();let r=this.id;return new Promise(async(i,n)=>{let s;function a(e){c(),i(e.returnvalue)}function o(e){c(),n(Error(e.failedReason||e))}t&&(s=setTimeout(()=>o(`Job wait ${this.name} timed out before finishing, no finish notification arrived after ${t}ms (id=${r})`),t));let l=`completed:${r}`,d=`failed:${r}`;e.on(l,a),e.on(d,o),this.queue.on("closing",o);let c=()=>{clearInterval(s),e.removeListener(l,a),e.removeListener(d,o),this.queue.removeListener("closing",o)};await e.waitUntilReady();let[u,h]=await this.scripts.isFinished(r,!0);0!=u&&(-1==u||2==u?o({failedReason:h}):a({returnvalue:p(h)}))})}async moveToDelayed(e,t){let r=Date.now(),i=e-r,n=i>0?i:0;await this.scripts.moveToDelayed(this.id,r,n,t,{skipAttempt:!0}),this.delay=n,this.recordJobMetrics("delayed")}async moveToWaitingChildren(e,t={}){let r=await this.scripts.moveToWaitingChildren(this.id,e,t);return r&&this.recordJobMetrics("waiting-children"),r}async promote(){let e=this.id;await this.scripts.promote(e),this.delay=0}async retry(e="failed",t={}){await this.scripts.reprocessJob(this,e,t),this.failedReason=null,this.finishedOn=null,this.processedOn=null,this.returnvalue=null,t.resetAttemptsMade&&(this.attemptsMade=0),t.resetAttemptsStarted&&(this.attemptsStarted=0)}discard(){this.discarded=!0}async isInZSet(e){let t=await this.queue.client;return null!==await t.zscore(this.queue.toKey(e),this.id)}async isInList(e){return this.scripts.isJobInList(this.queue.toKey(e),this.id)}addJob(e,t){let r=this.asJSON();return this.validateOptions(r),this.scripts.addJob(e,r,r.opts,this.id,t)}async removeDeduplicationKey(){return!!this.deduplicationId&&await this.scripts.removeDeduplicationKey(this.deduplicationId,this.id)>0}validateOptions(e){var t,r,i,n,a,o,l,d;if(this.opts.sizeLimit&&(0,s.iF)(e.data)>this.opts.sizeLimit)throw Error(`The size of job ${this.name} exceeds the limit ${this.opts.sizeLimit} bytes`);if(this.opts.delay&&this.opts.repeat&&!(null===(t=this.opts.repeat)||void 0===t?void 0:t.count))throw Error("Delay and repeat options cannot be used together");let c=["removeDependencyOnFailure","failParentOnFailure","continueParentOnFailure","ignoreDependencyOnFailure"].filter(e=>this.opts[e]);if(c.length>1){let e=c.join(", ");throw Error(`The following options cannot be used together: ${e}`)}if(null===(r=this.opts)||void 0===r?void 0:r.jobId){if(`${parseInt(this.opts.jobId,10)}`===(null===(i=this.opts)||void 0===i?void 0:i.jobId))throw Error("Custom Id cannot be integers");if((null===(n=this.opts)||void 0===n?void 0:n.jobId.includes(":"))&&(null===(o=null===(a=this.opts)||void 0===a?void 0:a.jobId)||void 0===o?void 0:o.split(":").length)!==3)throw Error("Custom Id cannot contain :")}if(this.opts.priority){if(Math.trunc(this.opts.priority)!==this.opts.priority)throw Error("Priority should not be float");if(this.opts.priority>2097152)throw Error("Priority should be between 0 and 2097152")}if(this.opts.deduplication){if(!(null===(l=this.opts.deduplication)||void 0===l?void 0:l.id))throw Error("Deduplication id must be provided");if(this.parentKey)throw Error("Deduplication and parent options cannot be used together")}if(this.opts.debounce){if(!(null===(d=this.opts.debounce)||void 0===d?void 0:d.id))throw Error("Debounce id must be provided");if(this.parentKey)throw Error("Debounce and parent options cannot be used together")}if("object"==typeof this.opts.backoff&&"number"==typeof this.opts.backoff.jitter&&(this.opts.backoff.jitter<0||this.opts.backoff.jitter>1))throw Error("Jitter should be between 0 and 1")}updateStacktrace(e){this.stacktrace=this.stacktrace||[],(null==e?void 0:e.stack)&&(this.stacktrace.push(e.stack),0===this.opts.stackTraceLimit?this.stacktrace=[]:this.opts.stackTraceLimit&&(this.stacktrace=this.stacktrace.slice(-this.opts.stackTraceLimit)))}setSpanJobAttributes(e){null==e||e.setAttributes({[d.Np.JobName]:this.name,[d.Np.JobId]:this.id})}}function p(e){let t=(0,s.Y3)(JSON.parse,JSON,[e]);if(t!==s.TJ)return t;c("corrupted returnvalue: "+e,t)}},75822:(e,t,r)=>{"use strict";r.d(t,{X:()=>s});var i=r(64780),n=r(5315);class s{constructor(e,t){this.worker=e,this.opts=t,this.trackedJobs=new Map,this.closed=!1}start(){!this.closed&&this.opts.lockRenewTime>0&&this.startLockExtenderTimer()}async extendLocks(e){await this.worker.trace(n.MU.INTERNAL,"extendLocks",this.worker.name,async t=>{null==t||t.setAttributes({[n.Np.WorkerId]:this.opts.workerId,[n.Np.WorkerName]:this.opts.workerName,[n.Np.WorkerJobsToExtendLocks]:e});try{let t=e.map(e=>{var t;return(null===(t=this.trackedJobs.get(e))||void 0===t?void 0:t.token)||""}),r=await this.worker.extendJobLocks(e,t,this.opts.lockDuration);if(r.length>0)for(let e of(this.worker.emit("lockRenewalFailed",r),r))this.worker.emit("error",Error(`could not renew lock for job ${e}`));let i=e.filter(e=>!r.includes(e));i.length>0&&this.worker.emit("locksRenewed",{count:i.length,jobIds:i})}catch(e){this.worker.emit("error",e)}})}startLockExtenderTimer(){clearTimeout(this.lockRenewalTimer),this.closed||(this.lockRenewalTimer=setTimeout(async()=>{let e=Date.now(),t=[];for(let r of this.trackedJobs.keys()){let{ts:i,token:n,abortController:s}=this.trackedJobs.get(r);if(!i){this.trackedJobs.set(r,{token:n,ts:e,abortController:s});continue}i+this.opts.lockRenewTime/2<e&&(this.trackedJobs.set(r,{token:n,ts:e,abortController:s}),t.push(r))}t.length&&await this.extendLocks(t),this.startLockExtenderTimer()},this.opts.lockRenewTime/2))}async close(){this.closed||(this.closed=!0,this.lockRenewalTimer&&(clearTimeout(this.lockRenewalTimer),this.lockRenewalTimer=void 0),this.trackedJobs.clear())}trackJob(e,t,r,n=!1){let s=n?new i.H:void 0;return!this.closed&&e&&this.trackedJobs.set(e,{token:t,ts:r,abortController:s}),s}untrackJob(e){this.trackedJobs.delete(e)}getActiveJobCount(){return this.trackedJobs.size}isRunning(){return!this.closed&&void 0!==this.lockRenewalTimer}cancelJob(e,t){let r=this.trackedJobs.get(e);return null!=r&&!!r.abortController&&(r.abortController.abort(t),!0)}cancelAllJobs(e){for(let t of this.trackedJobs.values())t.abortController&&t.abortController.abort(e)}getTrackedJobIds(){return Array.from(this.trackedJobs.keys())}}},41381:(e,t,r)=>{"use strict";r.d(t,{W:()=>d});var i=r(82361),n=r(25619),s=r(19183),a=r(49445),o=r(95963),l=r(53705);class d extends i.EventEmitter{constructor(e,t={connection:{}},r=a.Z,i=!1){if(super(),this.name=e,this.opts=t,this.closed=!1,this.hasBlockingConnection=!1,this.hasBlockingConnection=i,this.opts=Object.assign({prefix:"bull"},t),!e)throw Error("Queue name must be provided");if(e.includes(":"))throw Error("Queue name cannot contain :");this.connection=new r(t.connection,{shared:(0,n.Y1)(t.connection),blocking:i,skipVersionCheck:t.skipVersionCheck,skipWaitingForReady:t.skipWaitingForReady}),this.connection.on("error",e=>this.emit("error",e)),this.connection.on("close",()=>{this.closing||this.emit("ioredis:close")});let s=new l.w(t.prefix);this.qualifiedName=s.getQueueQualifiedName(e),this.keys=s.getKeys(e),this.toKey=t=>s.toKey(e,t),this.createScripts()}get client(){return this.connection.client}createScripts(){this.scripts=(0,s.W)(this)}get redisVersion(){return this.connection.redisVersion}get databaseType(){return this.connection.databaseType}get Job(){return o.o}emit(e,...t){try{return super.emit(e,...t)}catch(e){try{return super.emit("error",e)}catch(e){return console.error(e),!1}}}waitUntilReady(){return this.client}base64Name(){return Buffer.from(this.name).toString("base64")}clientName(e=""){let t=this.base64Name();return`${this.opts.prefix}:${t}${e}`}async close(){this.closing||(this.closing=this.connection.close()),await this.closing,this.closed=!0}disconnect(){return this.connection.disconnect()}async checkConnectionError(e,t=n.yf){try{return await e()}catch(e){if((0,n.Zm)(e)&&this.emit("error",e),this.closing||!t)return;await (0,n.gw)(t)}}trace(e,t,r,i,s){return(0,n.g4)(this.opts.telemetry,e,this.name,t,r,i,s)}}},53705:(e,t,r)=>{"use strict";r.d(t,{w:()=>i});class i{constructor(e="bull"){this.prefix=e}getKeys(e){let t={};return["","active","wait","waiting-children","paused","id","delayed","prioritized","stalled-check","completed","failed","stalled","repeat","limiter","meta","events","pc","marker","de"].forEach(r=>{t[r]=this.toKey(e,r)}),t}toKey(e,t){return`${this.getQueueQualifiedName(e)}:${t}`}getQueueQualifiedName(e){return`${this.prefix}:${e}`}}},49445:(e,t,r)=>{"use strict";r.d(t,{Z:()=>ef});var i={};r.r(i),r.d(i,{addDelayedJob:()=>u,addJobScheduler:()=>p,addLog:()=>h,addParentJob:()=>y,addPrioritizedJob:()=>m,addRepeatableJob:()=>f,addStandardJob:()=>b,changeDelay:()=>g,changePriority:()=>S,cleanJobsInSet:()=>v,drain:()=>K,extendLock:()=>k,extendLocks:()=>E,getCounts:()=>I,getCountsPerPriority:()=>w,getDependencyCounts:()=>j,getJobScheduler:()=>x,getMetrics:()=>A,getRanges:()=>T,getRateLimitTtl:()=>C,getState:()=>D,getStateV2:()=>O,isFinished:()=>R,isJobInList:()=>M,isMaxed:()=>N,moveJobFromActiveToWait:()=>P,moveJobsToWait:()=>L,moveStalledJobsToWait:()=>J,moveToActive:()=>_,moveToDelayed:()=>F,moveToFinished:()=>G,moveToWaitingChildren:()=>q,obliterate:()=>V,paginate:()=>B,pause:()=>Y,promote:()=>z,releaseLock:()=>U,removeChildDependency:()=>W,removeDeduplicationKey:()=>Q,removeJob:()=>H,removeJobScheduler:()=>Z,removeOrphanedJobs:()=>X,removeRepeatable:()=>$,removeUnprocessedChildren:()=>ee,reprocessJob:()=>et,retryJob:()=>er,saveStacktrace:()=>ei,updateData:()=>en,updateJobScheduler:()=>es,updateProgress:()=>ea,updateRepeatableJobMillis:()=>eo});var n=r(31650),s=r(82361),a=r(13554),o=r.n(a),l=r(13505),d=r(25619),c=r(2036);let u={name:"addDelayedJob",content:`--[[
  Adds a delayed job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - computes timestamp.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
    Input:
      KEYS[1] 'marker',
      KEYS[2] 'meta'
      KEYS[3] 'id'
      KEYS[4] 'delayed'
      KEYS[5] 'completed'
      KEYS[6] events stream key
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (use custom instead of one generated automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  parent dependencies key.
            [7]  parent? {id, queueKey}
            [8]  repeat job key
            [9] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]]
local metaKey = KEYS[2]
local idKey = KEYS[3]
local delayedKey = KEYS[4]
local completedKey = KEYS[5]
local eventsKey = KEYS[6]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local parentKey = args[5]
local parent = args[7]
local repeatJobKey = args[8]
local deduplicationKey = args[9]
local parentData
-- Includes
--[[
  Adds a delayed job to the queue by doing the following:
    - Creates a new job key with the job data.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
local function addDelayedJob(jobId, delayedKey, eventsKey, timestamp,
  maxEvents, markerKey, delay)
  local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
  rcall("ZADD", delayedKey, score, jobId)
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(markerKey, delayedKey)
end
--[[
  Function to debounce a job.
]]
-- Includes
--[[
  Function to deduplicate a job.
]]
--[[
  Function to set the deduplication key for a job.
  Uses TTL from deduplication opts if provided.
]]
local function setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
    local ttl = deduplicationOpts and deduplicationOpts['ttl']
    if ttl and ttl > 0 then
        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
    else
        rcall('SET', deduplicationKey, jobId)
    end
end
--[[
  Function to store a deduplicated next job if the existing job is active
  and keepLastIfActive is set. When the active job finishes, the stored
  proto-job is used to create a real job in the queue.
  Returns true if the proto-job was stored, false otherwise.
]]
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local function storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    if deduplicationOpts['keepLastIfActive'] and currentDebounceJobId then
        local activeKey = prefix .. "active"
        local activeItems = rcall('LRANGE', activeKey, 0, -1)
        if checkItemInList(activeItems, currentDebounceJobId) then
            local deduplicationNextKey = prefix .. "dn:" .. deduplicationId
            local fields = {'name', jobName, 'data', jobData, 'opts', cjson.encode(fullOpts),
                'jid', jobId}
            if parentKey then
                fields[#fields+1] = 'pk'
                fields[#fields+1] = parentKey
            end
            if parentData then
                fields[#fields+1] = 'pd'
                fields[#fields+1] = parentData
            end
            if parentDependenciesKey then
                fields[#fields+1] = 'pdk'
                fields[#fields+1] = parentDependenciesKey
            end
            if repeatJobKey then
                fields[#fields+1] = 'rjk'
                fields[#fields+1] = repeatJobKey
            end
            rcall('DEL', deduplicationNextKey)
            rcall('HSET', deduplicationNextKey, unpack(fields))
            -- Ensure the dedup key does not expire while the job is active,
            -- so subsequent adds always hit the dedup path and never bypass
            -- the active-check because of a TTL expiry.
            local deduplicationKey = prefix .. "de:" .. deduplicationId
            rcall('PERSIST', deduplicationKey)
            -- TODO remove debounced event in next breaking change
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                currentDebounceJobId, "debounceId", deduplicationId)
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
            return true
        end
    end
    return false
end
local function deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts, jobId, deduplicationKey,
    eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl and ttl > 0 then
        if deduplicationOpts['extend'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                    parentKey, parentData, parentDependenciesKey, repeatJobKey) then
                    return currentDebounceJobId
                end
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, currentDebounceJobId)
                else
                    setDeduplicationKey(deduplicationKey, currentDebounceJobId, deduplicationOpts)
                end
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                    "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            if deduplicationOpts['keepLastIfActive'] then
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
            end
        end
    else
        deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
        local currentDebounceJobId = rcall('GET', deduplicationKey)
        if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
            deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
            parentKey, parentData, parentDependenciesKey, repeatJobKey) then
            return currentDebounceJobId
        end
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            currentDebounceJobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
        return currentDebounceJobId
    end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents, currentDeduplicatedJobId,
    jobId, deduplicationId, prefix)
    if rcall("ZREM", delayedKey, currentDeduplicatedJobId) > 0 then
        removeJobKeys(prefix .. currentDeduplicatedJobId)
        rcall("XADD", eventsKey, "*", "event", "removed", "jobId", currentDeduplicatedJobId,
            "prev", "delayed")
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            jobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            jobId, "deduplicationId", deduplicationId, "deduplicatedJobId", currentDeduplicatedJobId)
        return true
    end
    return false
end
local function deduplicateJob(deduplicationOpts, jobId, delayedKey, deduplicationKey, eventsKey, maxEvents,
    prefix, jobName, jobData, fullOpts, parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local deduplicationId = deduplicationOpts and deduplicationOpts['id']
    if deduplicationId then
        if deduplicationOpts['replace'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                local isRemoved = removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents,
                    currentDebounceJobId, jobId, deduplicationId, prefix)
                if isRemoved then
                    if deduplicationOpts['keepLastIfActive'] then
                        rcall('SET', deduplicationKey, jobId)
                    else
                        local ttl = deduplicationOpts['ttl']
                        if not deduplicationOpts['extend'] and ttl and ttl > 0 then
                            rcall('SET', deduplicationKey, jobId, 'KEEPTTL')
                        else
                            setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                        end
                    end
                    return
                else
                    storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                        deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                        parentKey, parentData, parentDependenciesKey, repeatJobKey)
                    return currentDebounceJobId
                end
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            return deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts,
                jobId, deduplicationKey, eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
                parentKey, parentData, parentDependenciesKey, repeatJobKey)
        end
    end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", idKey)
local maxEvents = getOrSetMaxEvents(metaKey)
local opts = cmsgpack.unpack(ARGV[3])
local parentDependenciesKey = args[6]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, completedKey, eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(opts['de'], jobId, delayedKey, deduplicationKey,
  eventsKey, maxEvents, args[1], args[3], ARGV[2], opts,
  parentKey, parentData, parentDependenciesKey, repeatJobKey)
if deduplicationJobId then
  return deduplicationJobId
end
local delay, priority = storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2],
    opts, timestamp, parentKey, parentData, repeatJobKey)
addDelayedJob(jobId, delayedKey, eventsKey, timestamp, maxEvents, KEYS[1], delay)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:6},p={name:"addJobScheduler",content:`--[[
  Adds a job scheduler, i.e. a job factory that creates jobs based on a given schedule (repeat options).
    Input:
      KEYS[1]  'repeat' key
      KEYS[2]  'delayed' key
      KEYS[3]  'wait' key
      KEYS[4]  'paused' key
      KEYS[5]  'meta' key
      KEYS[6]  'prioritized' key
      KEYS[7]  'marker' key
      KEYS[8]  'id' key
      KEYS[9]  'events' key
      KEYS[10] 'pc' priority counter
      KEYS[11] 'active' key
      ARGV[1] next milliseconds
      ARGV[2] msgpacked options
            [1]  name
            [2]  tz?
            [3]  pattern?
            [4]  endDate?
            [5]  every?
      ARGV[3] jobs scheduler id
      ARGV[4] Json stringified template data
      ARGV[5] mspacked template opts
      ARGV[6] msgpacked delayed opts
      ARGV[7] timestamp
      ARGV[8] prefix key
      ARGV[9] producer key
      Output:
        repeatableKey  - OK
]] local rcall = redis.call
local repeatKey = KEYS[1]
local delayedKey = KEYS[2]
local waitKey = KEYS[3]
local pausedKey = KEYS[4]
local metaKey = KEYS[5]
local prioritizedKey = KEYS[6]
local eventsKey = KEYS[9]
local nextMillis = ARGV[1]
local jobSchedulerId = ARGV[3]
local templateOpts = cmsgpack.unpack(ARGV[5])
local now = tonumber(ARGV[7])
local prefixKey = ARGV[8]
local jobOpts = cmsgpack.unpack(ARGV[6])
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Shared helper to store a job and enqueue it into the appropriate list/set.
  Handles delayed, prioritized, and standard (LIFO/FIFO) jobs.
  Emits the appropriate event after enqueuing ("delayed" or "waiting").
  Returns delay, priority from storeJob.
]]
-- Includes
--[[
  Adds a delayed job to the queue by doing the following:
    - Creates a new job key with the job data.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
local function addDelayedJob(jobId, delayedKey, eventsKey, timestamp,
  maxEvents, markerKey, delay)
  local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
  rcall("ZADD", delayedKey, score, jobId)
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(markerKey, delayedKey)
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
local function storeAndEnqueueJob(eventsKey, jobIdKey, jobId, name, data, opts,
    timestamp, parentKey, parentData, repeatJobKey, maxEvents,
    waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
    priorityCounterKey, delayedKey, markerKey)
  local delay, priority = storeJob(eventsKey, jobIdKey, jobId, name, data,
      opts, timestamp, parentKey, parentData, repeatJobKey)
  if delay ~= 0 and delayedKey then
    addDelayedJob(jobId, delayedKey, eventsKey, timestamp, maxEvents, markerKey, delay)
  else
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    if priority > 0 then
      addJobWithPriority(markerKey, prioritizedKey, priority, jobId,
          priorityCounterKey, isPausedOrMaxed)
    else
      local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
      addJobInTargetList(target, markerKey, pushCmd, isPausedOrMaxed, jobId)
    end
    rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
        "jobId", jobId)
  end
  return delay, priority
end
local function addJobFromScheduler(jobKey, jobId, opts, waitKey, pausedKey, activeKey, metaKey, 
  prioritizedKey, priorityCounter, delayedKey, markerKey, eventsKey, name, maxEvents, timestamp,
  data, jobSchedulerId, repeatDelay)
  opts['delay'] = repeatDelay
  opts['jobId'] = jobId
  storeAndEnqueueJob(eventsKey, jobKey, jobId, name, data, opts,
      timestamp, nil, nil, jobSchedulerId, maxEvents,
      waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
      priorityCounter, delayedKey, markerKey)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePaused(queueMetaKey)
  return rcall("HEXISTS", queueMetaKey, "paused") == 1
end
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
--[[
  Function to store a job scheduler
]]
local function storeJobScheduler(schedulerId, schedulerKey, repeatKey, nextMillis, opts,
  templateData, templateOpts)
  rcall("ZADD", repeatKey, nextMillis, schedulerId)
  local optionalValues = {}
  if opts['tz'] then
    table.insert(optionalValues, "tz")
    table.insert(optionalValues, opts['tz'])
  end
  if opts['limit'] then
    table.insert(optionalValues, "limit")
    table.insert(optionalValues, opts['limit'])
  end
  if opts['pattern'] then
    table.insert(optionalValues, "pattern")
    table.insert(optionalValues, opts['pattern'])
  end
  if opts['startDate'] then
    table.insert(optionalValues, "startDate")
    table.insert(optionalValues, opts['startDate'])
  end
  if opts['endDate'] then
    table.insert(optionalValues, "endDate")
    table.insert(optionalValues, opts['endDate'])
  end
  if opts['every'] then
    table.insert(optionalValues, "every")
    table.insert(optionalValues, opts['every'])
  end
  if opts['offset'] then
    table.insert(optionalValues, "offset")
    table.insert(optionalValues, opts['offset'])
  else
    local offset = rcall("HGET", schedulerKey, "offset")
    if offset then
      table.insert(optionalValues, "offset")
      table.insert(optionalValues, tonumber(offset))
    end
  end
  local jsonTemplateOpts = cjson.encode(templateOpts)
  if jsonTemplateOpts and jsonTemplateOpts ~= '{}' then
    table.insert(optionalValues, "opts")
    table.insert(optionalValues, jsonTemplateOpts)
  end
  if templateData and templateData ~= '{}' then
    table.insert(optionalValues, "data")
    table.insert(optionalValues, templateData)
  end
  table.insert(optionalValues, "ic")
  table.insert(optionalValues, rcall("HGET", schedulerKey, "ic") or 1)
  rcall("DEL", schedulerKey) -- remove all attributes and then re-insert new ones
  rcall("HMSET", schedulerKey, "name", opts['name'], unpack(optionalValues))
end
local function getJobSchedulerEveryNextMillis(prevMillis, every, now, offset, startDate)
    local nextMillis
    if not prevMillis then
        if startDate then
            -- Assuming startDate is passed as milliseconds from JavaScript
            nextMillis = tonumber(startDate)
            nextMillis = nextMillis > now and nextMillis or now
        else
            nextMillis = now
            -- For the first iteration with no startDate and an explicit
            -- offset, align nextMillis to the next offset slot strictly
            -- after now. Without this the user-supplied offset is
            -- recorded but ignored, and the first job fires at now
            -- instead of the next aligned timestamp (issue #3705).
            if offset and offset > 0 then
                local aligned = math.floor(nextMillis / every) * every + offset
                if aligned <= nextMillis then
                    aligned = aligned + every
                end
                nextMillis = aligned
            end
        end
    else
        nextMillis = prevMillis + every
        -- check if we may have missed some iterations
        if nextMillis < now then
            nextMillis = math.floor(now / every) * every + every + (offset or 0)
        end
    end
    if not offset or offset == 0 then
        local timeSlot = math.floor(nextMillis / every) * every;
        offset = nextMillis - timeSlot;
    end
    -- Return a tuple nextMillis, offset
    return math.floor(nextMillis), math.floor(offset)
end
-- If we are overriding a repeatable job we must delete the delayed job for
-- the next iteration.
local schedulerKey = repeatKey .. ":" .. jobSchedulerId
local maxEvents = getOrSetMaxEvents(metaKey)
local templateData = ARGV[4]
local prevMillis = rcall("ZSCORE", repeatKey, jobSchedulerId)
if prevMillis then
    prevMillis = tonumber(prevMillis)
end
local schedulerOpts = cmsgpack.unpack(ARGV[2])
local every = schedulerOpts['every']
-- For backwards compatibility we also check the offset from the job itself.
-- could be removed in future major versions.
local jobOffset = jobOpts['repeat'] and jobOpts['repeat']['offset'] or 0
local offset = schedulerOpts['offset'] or jobOffset or 0
local newOffset = offset
local updatedEvery = false
if every then
    -- if we changed the 'every' value we need to reset millis to nil
    local millis = prevMillis
    if prevMillis then
        local prevEvery = tonumber(rcall("HGET", schedulerKey, "every"))
        if prevEvery ~= every then
            millis = nil
            updatedEvery = true
        end
    end
    local startDate = schedulerOpts['startDate']
    nextMillis, newOffset = getJobSchedulerEveryNextMillis(millis, every, now, offset, startDate)
end
local function removeJobFromScheduler(prefixKey, delayedKey, prioritizedKey, waitKey, pausedKey, jobId, metaKey,
    eventsKey)
    if rcall("ZSCORE", delayedKey, jobId) then
        removeJob(jobId, true, prefixKey, true --[[remove debounce key]] )
        rcall("ZREM", delayedKey, jobId)
        return true
    elseif rcall("ZSCORE", prioritizedKey, jobId) then
        removeJob(jobId, true, prefixKey, true --[[remove debounce key]] )
        rcall("ZREM", prioritizedKey, jobId)
        return true
    else
        local pausedOrWaitKey = waitKey
        if isQueuePaused(metaKey) then
            pausedOrWaitKey = pausedKey
        end
        if rcall("LREM", pausedOrWaitKey, 1, jobId) > 0 then
            removeJob(jobId, true, prefixKey, true --[[remove debounce key]] )
            return true
        end
    end
    return false
end
local removedPrevJob = false
if prevMillis then
    local currentJobId = "repeat:" .. jobSchedulerId .. ":" .. prevMillis
    local currentJobKey = schedulerKey .. ":" .. prevMillis
    -- In theory it should always exist the currentJobKey if there is a prevMillis unless something has
    -- gone really wrong.
    if rcall("EXISTS", currentJobKey) == 1 then
        removedPrevJob = removeJobFromScheduler(prefixKey, delayedKey, prioritizedKey, waitKey, pausedKey, currentJobId,
            metaKey, eventsKey)
    end
end
if removedPrevJob then
    -- The jobs has been removed and we want to replace it, so lets use the same millis.
    if every and not updatedEvery then
        nextMillis = prevMillis
    end
else
    -- Special case where no job was removed, and we need to add the next iteration.
    schedulerOpts['offset'] = newOffset
end
-- Check for job ID collision with existing jobs (in any state)
local jobId = "repeat:" .. jobSchedulerId .. ":" .. nextMillis
local jobKey = prefixKey .. jobId
-- If there's already a job with this ID, in a state 
-- that is not updatable (active, completed, failed) we must 
-- handle the collision
local hasCollision = false
if rcall("EXISTS", jobKey) == 1 then
    if every then
        -- For 'every' case: try next time slot to avoid collision
        local nextSlotMillis = nextMillis + every
        local nextSlotJobId = "repeat:" .. jobSchedulerId .. ":" .. nextSlotMillis
        local nextSlotJobKey = prefixKey .. nextSlotJobId
        if rcall("EXISTS", nextSlotJobKey) == 0 then
            -- Next slot is free, use it
            nextMillis = nextSlotMillis
            jobId = nextSlotJobId
        else
            -- Next slot also has a job, return error code
            return -11 -- SchedulerJobSlotsBusy
        end
    else
        hasCollision = true
    end
end
local delay = nextMillis - now
-- Fast Clamp delay to minimum of 0
if delay < 0 then
    delay = 0
end
local nextJobKey = schedulerKey .. ":" .. nextMillis
if not hasCollision or removedPrevJob then
    -- jobId already calculated above during collision check
    storeJobScheduler(jobSchedulerId, schedulerKey, repeatKey, nextMillis, schedulerOpts, templateData, templateOpts)
    rcall("INCR", KEYS[8])
    addJobFromScheduler(nextJobKey, jobId, jobOpts, waitKey, pausedKey, KEYS[11], metaKey, prioritizedKey, KEYS[10],
        delayedKey, KEYS[7], eventsKey, schedulerOpts['name'], maxEvents, now, templateData, jobSchedulerId, delay)
elseif hasCollision then
    -- For 'pattern' case: return error code
    return -10 -- SchedulerJobIdCollision
end
if ARGV[9] ~= "" then
    rcall("HSET", ARGV[9], "nrjid", jobId)
end
return {jobId .. "", delay}
`,keys:11},h={name:"addLog",content:`--[[
  Add job log
  Input:
    KEYS[1] job id key
    KEYS[2] job logs key
    ARGV[1] id
    ARGV[2] log
    ARGV[3] keepLogs
  Output:
    -1 - Missing job.
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[1]) == 1 then -- // Make sure job exists
  local logCount = rcall("RPUSH", KEYS[2], ARGV[2])
  if ARGV[3] ~= '' then
    local keepLogs = tonumber(ARGV[3])
    rcall("LTRIM", KEYS[2], -keepLogs, -1)
    return math.min(keepLogs, logCount)
  end
  return logCount
else
  return -1
end
`,keys:2},y={name:"addParentJob",content:`--[[
  Adds a parent job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - adds the job to the waiting-children zset
    Input:
      KEYS[1] 'meta'
      KEYS[2] 'id'
      KEYS[3] 'delayed'
      KEYS[4] 'waiting-children'
      KEYS[5] 'completed'
      KEYS[6] events stream key
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (will not generate one automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  parent dependencies key.
            [7]  parent? {id, queueKey}
            [8]  repeat job key
            [9] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]]
local metaKey = KEYS[1]
local idKey = KEYS[2]
local delayedKey = KEYS[3]
local completedKey = KEYS[5]
local eventsKey = KEYS[6]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local opts = cmsgpack.unpack(ARGV[3])
local parentKey = args[5]
local parent = args[7]
local repeatJobKey = args[8]
local deduplicationKey = args[9]
local parentData
-- Includes
--[[
  Function to deduplicate a job.
]]
--[[
  Function to set the deduplication key for a job.
  Uses TTL from deduplication opts if provided.
]]
local function setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
    local ttl = deduplicationOpts and deduplicationOpts['ttl']
    if ttl and ttl > 0 then
        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
    else
        rcall('SET', deduplicationKey, jobId)
    end
end
--[[
  Function to store a deduplicated next job if the existing job is active
  and keepLastIfActive is set. When the active job finishes, the stored
  proto-job is used to create a real job in the queue.
  Returns true if the proto-job was stored, false otherwise.
]]
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local function storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    if deduplicationOpts['keepLastIfActive'] and currentDebounceJobId then
        local activeKey = prefix .. "active"
        local activeItems = rcall('LRANGE', activeKey, 0, -1)
        if checkItemInList(activeItems, currentDebounceJobId) then
            local deduplicationNextKey = prefix .. "dn:" .. deduplicationId
            local fields = {'name', jobName, 'data', jobData, 'opts', cjson.encode(fullOpts),
                'jid', jobId}
            if parentKey then
                fields[#fields+1] = 'pk'
                fields[#fields+1] = parentKey
            end
            if parentData then
                fields[#fields+1] = 'pd'
                fields[#fields+1] = parentData
            end
            if parentDependenciesKey then
                fields[#fields+1] = 'pdk'
                fields[#fields+1] = parentDependenciesKey
            end
            if repeatJobKey then
                fields[#fields+1] = 'rjk'
                fields[#fields+1] = repeatJobKey
            end
            rcall('DEL', deduplicationNextKey)
            rcall('HSET', deduplicationNextKey, unpack(fields))
            -- Ensure the dedup key does not expire while the job is active,
            -- so subsequent adds always hit the dedup path and never bypass
            -- the active-check because of a TTL expiry.
            local deduplicationKey = prefix .. "de:" .. deduplicationId
            rcall('PERSIST', deduplicationKey)
            -- TODO remove debounced event in next breaking change
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                currentDebounceJobId, "debounceId", deduplicationId)
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
            return true
        end
    end
    return false
end
local function deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts, jobId, deduplicationKey,
    eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl and ttl > 0 then
        if deduplicationOpts['extend'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                    parentKey, parentData, parentDependenciesKey, repeatJobKey) then
                    return currentDebounceJobId
                end
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, currentDebounceJobId)
                else
                    setDeduplicationKey(deduplicationKey, currentDebounceJobId, deduplicationOpts)
                end
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                    "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            if deduplicationOpts['keepLastIfActive'] then
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
            end
        end
    else
        deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
        local currentDebounceJobId = rcall('GET', deduplicationKey)
        if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
            deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
            parentKey, parentData, parentDependenciesKey, repeatJobKey) then
            return currentDebounceJobId
        end
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            currentDebounceJobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
        return currentDebounceJobId
    end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", idKey)
local maxEvents = getOrSetMaxEvents(metaKey)
local parentDependenciesKey = args[6]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, completedKey, eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationId = opts['de'] and opts['de']['id']
if deduplicationId then
    local deduplicationJobId = deduplicateJobWithoutReplace(deduplicationId, opts['de'],
        jobId, deduplicationKey, eventsKey, maxEvents, args[1], args[3], ARGV[2], opts,
        parentKey, parentData, parentDependenciesKey, repeatJobKey)
    if deduplicationJobId then
        return deduplicationJobId
    end
end
-- Store the job.
storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2], opts, timestamp,
         parentKey, parentData, repeatJobKey)
local waitChildrenKey = KEYS[4]
rcall("ZADD", waitChildrenKey, timestamp, jobId)
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
      "waiting-children", "jobId", jobId)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:6},m={name:"addPrioritizedJob",content:`--[[
  Adds a prioritized job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - Adds the job to the "added" list so that workers gets notified.
    Input:
      KEYS[1] 'marker',
      KEYS[2] 'meta'
      KEYS[3] 'id'
      KEYS[4] 'prioritized'
      KEYS[5] 'delayed'
      KEYS[6] 'completed'
      KEYS[7] 'active'
      KEYS[8] events stream key
      KEYS[9] 'pc' priority counter
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (will not generate one automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  parent dependencies key.
            [7]  parent? {id, queueKey}
            [8]  repeat job key
            [9] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]] 
local metaKey = KEYS[2]
local idKey = KEYS[3]
local priorityKey = KEYS[4]
local completedKey = KEYS[6]
local activeKey = KEYS[7]
local eventsKey = KEYS[8]
local priorityCounterKey = KEYS[9]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local opts = cmsgpack.unpack(ARGV[3])
local parentKey = args[5]
local parent = args[7]
local repeatJobKey = args[8]
local deduplicationKey = args[9]
local parentData
-- Includes
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to debounce a job.
]]
-- Includes
--[[
  Function to deduplicate a job.
]]
--[[
  Function to set the deduplication key for a job.
  Uses TTL from deduplication opts if provided.
]]
local function setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
    local ttl = deduplicationOpts and deduplicationOpts['ttl']
    if ttl and ttl > 0 then
        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
    else
        rcall('SET', deduplicationKey, jobId)
    end
end
--[[
  Function to store a deduplicated next job if the existing job is active
  and keepLastIfActive is set. When the active job finishes, the stored
  proto-job is used to create a real job in the queue.
  Returns true if the proto-job was stored, false otherwise.
]]
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local function storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    if deduplicationOpts['keepLastIfActive'] and currentDebounceJobId then
        local activeKey = prefix .. "active"
        local activeItems = rcall('LRANGE', activeKey, 0, -1)
        if checkItemInList(activeItems, currentDebounceJobId) then
            local deduplicationNextKey = prefix .. "dn:" .. deduplicationId
            local fields = {'name', jobName, 'data', jobData, 'opts', cjson.encode(fullOpts),
                'jid', jobId}
            if parentKey then
                fields[#fields+1] = 'pk'
                fields[#fields+1] = parentKey
            end
            if parentData then
                fields[#fields+1] = 'pd'
                fields[#fields+1] = parentData
            end
            if parentDependenciesKey then
                fields[#fields+1] = 'pdk'
                fields[#fields+1] = parentDependenciesKey
            end
            if repeatJobKey then
                fields[#fields+1] = 'rjk'
                fields[#fields+1] = repeatJobKey
            end
            rcall('DEL', deduplicationNextKey)
            rcall('HSET', deduplicationNextKey, unpack(fields))
            -- Ensure the dedup key does not expire while the job is active,
            -- so subsequent adds always hit the dedup path and never bypass
            -- the active-check because of a TTL expiry.
            local deduplicationKey = prefix .. "de:" .. deduplicationId
            rcall('PERSIST', deduplicationKey)
            -- TODO remove debounced event in next breaking change
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                currentDebounceJobId, "debounceId", deduplicationId)
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
            return true
        end
    end
    return false
end
local function deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts, jobId, deduplicationKey,
    eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl and ttl > 0 then
        if deduplicationOpts['extend'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                    parentKey, parentData, parentDependenciesKey, repeatJobKey) then
                    return currentDebounceJobId
                end
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, currentDebounceJobId)
                else
                    setDeduplicationKey(deduplicationKey, currentDebounceJobId, deduplicationOpts)
                end
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                    "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            if deduplicationOpts['keepLastIfActive'] then
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
            end
        end
    else
        deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
        local currentDebounceJobId = rcall('GET', deduplicationKey)
        if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
            deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
            parentKey, parentData, parentDependenciesKey, repeatJobKey) then
            return currentDebounceJobId
        end
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            currentDebounceJobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
        return currentDebounceJobId
    end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents, currentDeduplicatedJobId,
    jobId, deduplicationId, prefix)
    if rcall("ZREM", delayedKey, currentDeduplicatedJobId) > 0 then
        removeJobKeys(prefix .. currentDeduplicatedJobId)
        rcall("XADD", eventsKey, "*", "event", "removed", "jobId", currentDeduplicatedJobId,
            "prev", "delayed")
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            jobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            jobId, "deduplicationId", deduplicationId, "deduplicatedJobId", currentDeduplicatedJobId)
        return true
    end
    return false
end
local function deduplicateJob(deduplicationOpts, jobId, delayedKey, deduplicationKey, eventsKey, maxEvents,
    prefix, jobName, jobData, fullOpts, parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local deduplicationId = deduplicationOpts and deduplicationOpts['id']
    if deduplicationId then
        if deduplicationOpts['replace'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                local isRemoved = removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents,
                    currentDebounceJobId, jobId, deduplicationId, prefix)
                if isRemoved then
                    if deduplicationOpts['keepLastIfActive'] then
                        rcall('SET', deduplicationKey, jobId)
                    else
                        local ttl = deduplicationOpts['ttl']
                        if not deduplicationOpts['extend'] and ttl and ttl > 0 then
                            rcall('SET', deduplicationKey, jobId, 'KEEPTTL')
                        else
                            setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                        end
                    end
                    return
                else
                    storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                        deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                        parentKey, parentData, parentDependenciesKey, repeatJobKey)
                    return currentDebounceJobId
                end
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            return deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts,
                jobId, deduplicationKey, eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
                parentKey, parentData, parentDependenciesKey, repeatJobKey)
        end
    end
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", idKey)
local maxEvents = getOrSetMaxEvents(metaKey)
local parentDependenciesKey = args[6]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, completedKey, eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(opts['de'], jobId, KEYS[5],
  deduplicationKey, eventsKey, maxEvents, args[1], args[3], ARGV[2], opts,
  parentKey, parentData, parentDependenciesKey, repeatJobKey)
if deduplicationJobId then
  return deduplicationJobId
end
-- Store the job.
local delay, priority = storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2],
                                 opts, timestamp, parentKey, parentData,
                                 repeatJobKey)
-- Add the job to the prioritized set
local isPausedOrMaxed = isQueuePausedOrMaxed(metaKey, activeKey)
addJobWithPriority( KEYS[1], priorityKey, priority, jobId, priorityCounterKey, isPausedOrMaxed)
-- Emit waiting event
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:9},f={name:"addRepeatableJob",content:`--[[
  Adds a repeatable job
    Input:
      KEYS[1] 'repeat' key
      KEYS[2] 'delayed' key
      ARGV[1] next milliseconds
      ARGV[2] msgpacked options
            [1]  name
            [2]  tz?
            [3]  pattern?
            [4]  endDate?
            [5]  every?
      ARGV[3] legacy custom key TODO: remove this logic in next breaking change
      ARGV[4] custom key
      ARGV[5] prefix key
      Output:
        repeatableKey  - OK
]]
local rcall = redis.call
local repeatKey = KEYS[1]
local delayedKey = KEYS[2]
local nextMillis = ARGV[1]
local legacyCustomKey = ARGV[3]
local customKey = ARGV[4]
local prefixKey = ARGV[5]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
local function storeRepeatableJob(repeatKey, customKey, nextMillis, rawOpts)
  rcall("ZADD", repeatKey, nextMillis, customKey)
  local opts = cmsgpack.unpack(rawOpts)
  local optionalValues = {}
  if opts['tz'] then
    table.insert(optionalValues, "tz")
    table.insert(optionalValues, opts['tz'])
  end
  if opts['pattern'] then
    table.insert(optionalValues, "pattern")
    table.insert(optionalValues, opts['pattern'])
  end
  if opts['endDate'] then
    table.insert(optionalValues, "endDate")
    table.insert(optionalValues, opts['endDate'])
  end
  if opts['every'] then
    table.insert(optionalValues, "every")
    table.insert(optionalValues, opts['every'])
  end
  rcall("HMSET", repeatKey .. ":" .. customKey, "name", opts['name'],
    unpack(optionalValues))
  return customKey
end
-- If we are overriding a repeatable job we must delete the delayed job for
-- the next iteration.
local prevMillis = rcall("ZSCORE", repeatKey, customKey)
if prevMillis then
  local delayedJobId =  "repeat:" .. customKey .. ":" .. prevMillis
  local nextDelayedJobId =  repeatKey .. ":" .. customKey .. ":" .. nextMillis
  if rcall("ZSCORE", delayedKey, delayedJobId)
   and rcall("EXISTS", nextDelayedJobId) ~= 1 then
    removeJob(delayedJobId, true, prefixKey, true --[[remove debounce key]])
    rcall("ZREM", delayedKey, delayedJobId)
  end
end
-- Keep backwards compatibility with old repeatable jobs (<= 3.0.0)
if rcall("ZSCORE", repeatKey, legacyCustomKey) ~= false then
  return storeRepeatableJob(repeatKey, legacyCustomKey, nextMillis, ARGV[2])
end
return storeRepeatableJob(repeatKey, customKey, nextMillis, ARGV[2])
`,keys:2},b={name:"addStandardJob",content:`--[[
  Adds a job to the queue by doing the following:
    - Increases the job counter if needed.
    - Creates a new job key with the job data.
    - if delayed:
      - computes timestamp.
      - adds to delayed zset.
      - Emits a global event 'delayed' if the job is delayed.
    - if not delayed
      - Adds the jobId to the wait/paused list in one of three ways:
         - LIFO
         - FIFO
         - prioritized.
      - Adds the job to the "added" list so that workers gets notified.
    Input:
      KEYS[1] 'wait',
      KEYS[2] 'paused'
      KEYS[3] 'meta'
      KEYS[4] 'id'
      KEYS[5] 'completed'
      KEYS[6] 'delayed'
      KEYS[7] 'active'
      KEYS[8] events stream key
      KEYS[9] marker key
      ARGV[1] msgpacked arguments array
            [1]  key prefix,
            [2]  custom id (will not generate one automatically)
            [3]  name
            [4]  timestamp
            [5]  parentKey?
            [6]  parent dependencies key.
            [7]  parent? {id, queueKey}
            [8]  repeat job key
            [9] deduplication key
      ARGV[2] Json stringified job data
      ARGV[3] msgpacked options
      Output:
        jobId  - OK
        -5     - Missing parent key
]]
local eventsKey = KEYS[8]
local jobId
local jobIdKey
local rcall = redis.call
local args = cmsgpack.unpack(ARGV[1])
local data = ARGV[2]
local opts = cmsgpack.unpack(ARGV[3])
local parentKey = args[5]
local parent = args[7]
local repeatJobKey = args[8]
local deduplicationKey = args[9]
local parentData
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to debounce a job.
]]
-- Includes
--[[
  Function to deduplicate a job.
]]
--[[
  Function to set the deduplication key for a job.
  Uses TTL from deduplication opts if provided.
]]
local function setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
    local ttl = deduplicationOpts and deduplicationOpts['ttl']
    if ttl and ttl > 0 then
        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
    else
        rcall('SET', deduplicationKey, jobId)
    end
end
--[[
  Function to store a deduplicated next job if the existing job is active
  and keepLastIfActive is set. When the active job finishes, the stored
  proto-job is used to create a real job in the queue.
  Returns true if the proto-job was stored, false otherwise.
]]
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local function storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    if deduplicationOpts['keepLastIfActive'] and currentDebounceJobId then
        local activeKey = prefix .. "active"
        local activeItems = rcall('LRANGE', activeKey, 0, -1)
        if checkItemInList(activeItems, currentDebounceJobId) then
            local deduplicationNextKey = prefix .. "dn:" .. deduplicationId
            local fields = {'name', jobName, 'data', jobData, 'opts', cjson.encode(fullOpts),
                'jid', jobId}
            if parentKey then
                fields[#fields+1] = 'pk'
                fields[#fields+1] = parentKey
            end
            if parentData then
                fields[#fields+1] = 'pd'
                fields[#fields+1] = parentData
            end
            if parentDependenciesKey then
                fields[#fields+1] = 'pdk'
                fields[#fields+1] = parentDependenciesKey
            end
            if repeatJobKey then
                fields[#fields+1] = 'rjk'
                fields[#fields+1] = repeatJobKey
            end
            rcall('DEL', deduplicationNextKey)
            rcall('HSET', deduplicationNextKey, unpack(fields))
            -- Ensure the dedup key does not expire while the job is active,
            -- so subsequent adds always hit the dedup path and never bypass
            -- the active-check because of a TTL expiry.
            local deduplicationKey = prefix .. "de:" .. deduplicationId
            rcall('PERSIST', deduplicationKey)
            -- TODO remove debounced event in next breaking change
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
                currentDebounceJobId, "debounceId", deduplicationId)
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
            return true
        end
    end
    return false
end
local function deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts, jobId, deduplicationKey,
    eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
    parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local ttl = deduplicationOpts['ttl']
    local deduplicationKeyExists
    if ttl and ttl > 0 then
        if deduplicationOpts['extend'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                    deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                    parentKey, parentData, parentDependenciesKey, repeatJobKey) then
                    return currentDebounceJobId
                end
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, currentDebounceJobId)
                else
                    setDeduplicationKey(deduplicationKey, currentDebounceJobId, deduplicationOpts)
                end
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced",
                    "jobId", currentDebounceJobId, "debounceId", deduplicationId)
                rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
                    currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
                return currentDebounceJobId
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            if deduplicationOpts['keepLastIfActive'] then
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
            else
                deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'PX', ttl, 'NX')
            end
        end
    else
        deduplicationKeyExists = not rcall('SET', deduplicationKey, jobId, 'NX')
    end
    if deduplicationKeyExists then
        local currentDebounceJobId = rcall('GET', deduplicationKey)
        if storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
            deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
            parentKey, parentData, parentDependenciesKey, repeatJobKey) then
            return currentDebounceJobId
        end
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            currentDebounceJobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            currentDebounceJobId, "deduplicationId", deduplicationId, "deduplicatedJobId", jobId)
        return currentDebounceJobId
    end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents, currentDeduplicatedJobId,
    jobId, deduplicationId, prefix)
    if rcall("ZREM", delayedKey, currentDeduplicatedJobId) > 0 then
        removeJobKeys(prefix .. currentDeduplicatedJobId)
        rcall("XADD", eventsKey, "*", "event", "removed", "jobId", currentDeduplicatedJobId,
            "prev", "delayed")
        -- TODO remove debounced event in next breaking change
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "debounced", "jobId",
            jobId, "debounceId", deduplicationId)
        rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "deduplicated", "jobId",
            jobId, "deduplicationId", deduplicationId, "deduplicatedJobId", currentDeduplicatedJobId)
        return true
    end
    return false
end
local function deduplicateJob(deduplicationOpts, jobId, delayedKey, deduplicationKey, eventsKey, maxEvents,
    prefix, jobName, jobData, fullOpts, parentKey, parentData, parentDependenciesKey, repeatJobKey)
    local deduplicationId = deduplicationOpts and deduplicationOpts['id']
    if deduplicationId then
        if deduplicationOpts['replace'] then
            local currentDebounceJobId = rcall('GET', deduplicationKey)
            if currentDebounceJobId then
                local isRemoved = removeDelayedJob(delayedKey, deduplicationKey, eventsKey, maxEvents,
                    currentDebounceJobId, jobId, deduplicationId, prefix)
                if isRemoved then
                    if deduplicationOpts['keepLastIfActive'] then
                        rcall('SET', deduplicationKey, jobId)
                    else
                        local ttl = deduplicationOpts['ttl']
                        if not deduplicationOpts['extend'] and ttl and ttl > 0 then
                            rcall('SET', deduplicationKey, jobId, 'KEEPTTL')
                        else
                            setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                        end
                    end
                    return
                else
                    storeDeduplicatedNextJob(deduplicationOpts, currentDebounceJobId, prefix,
                        deduplicationId, jobName, jobData, fullOpts, eventsKey, maxEvents, jobId,
                        parentKey, parentData, parentDependenciesKey, repeatJobKey)
                    return currentDebounceJobId
                end
            else
                if deduplicationOpts['keepLastIfActive'] then
                    rcall('SET', deduplicationKey, jobId)
                else
                    setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
                end
                return
            end
        else
            return deduplicateJobWithoutReplace(deduplicationId, deduplicationOpts,
                jobId, deduplicationKey, eventsKey, maxEvents, prefix, jobName, jobData, fullOpts,
                parentKey, parentData, parentDependenciesKey, repeatJobKey)
        end
    end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to handle the case when job is duplicated.
]]
-- Includes
--[[
    This function is used to update the parent's dependencies if the job
    is already completed and about to be ignored. The parent must get its
    dependencies updated to avoid the parent job being stuck forever in 
    the waiting-children state.
]]
-- Includes
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
local function updateExistingJobsParent(parentKey, parent, parentData,
                                        parentDependenciesKey, completedKey,
                                        jobIdKey, jobId, timestamp)
    if parentKey ~= nil then
        if rcall("ZSCORE", completedKey, jobId) then
            local returnvalue = rcall("HGET", jobIdKey, "returnvalue")
            updateParentDepsIfNeeded(parentKey, parent['queueKey'],
                                     parentDependenciesKey, parent['id'],
                                     jobIdKey, returnvalue, timestamp)
        else
            if parentDependenciesKey ~= nil then
                rcall("SADD", parentDependenciesKey, jobIdKey)
            end
        end
        rcall("HMSET", jobIdKey, "parentKey", parentKey, "parent", parentData)
    end
end
local function handleDuplicatedJob(jobKey, jobId, currentParentKey, currentParent,
  parentData, parentDependenciesKey, completedKey, eventsKey, maxEvents, timestamp)
  local existedParentKey = rcall("HGET", jobKey, "parentKey")
  if not existedParentKey or existedParentKey == currentParentKey then
    updateExistingJobsParent(currentParentKey, currentParent, parentData,
      parentDependenciesKey, completedKey, jobKey,
      jobId, timestamp)
  else
    if currentParentKey ~= nil and currentParentKey ~= existedParentKey
      and (rcall("EXISTS", existedParentKey) == 1) then
      return -7
    end
  end
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event",
    "duplicated", "jobId", jobId)
  return jobId .. "" -- convert to string
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
if parentKey ~= nil then
    if rcall("EXISTS", parentKey) ~= 1 then return -5 end
    parentData = cjson.encode(parent)
end
local jobCounter = rcall("INCR", KEYS[4])
local metaKey = KEYS[3]
local maxEvents = getOrSetMaxEvents(metaKey)
local parentDependenciesKey = args[6]
local timestamp = args[4]
if args[2] == "" then
    jobId = jobCounter
    jobIdKey = args[1] .. jobId
else
    jobId = args[2]
    jobIdKey = args[1] .. jobId
    if rcall("EXISTS", jobIdKey) == 1 then
        return handleDuplicatedJob(jobIdKey, jobId, parentKey, parent,
            parentData, parentDependenciesKey, KEYS[5], eventsKey,
            maxEvents, timestamp)
    end
end
local deduplicationJobId = deduplicateJob(opts['de'], jobId, KEYS[6],
  deduplicationKey, eventsKey, maxEvents, args[1], args[3], ARGV[2], opts,
  parentKey, parentData, parentDependenciesKey, repeatJobKey)
if deduplicationJobId then
  return deduplicationJobId
end
-- Store the job.
storeJob(eventsKey, jobIdKey, jobId, args[3], ARGV[2], opts, timestamp,
         parentKey, parentData, repeatJobKey)
local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[7], KEYS[1], KEYS[2])
-- LIFO or FIFO
local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
addJobInTargetList(target, KEYS[9], pushCmd, isPausedOrMaxed, jobId)
-- Emit waiting event
rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId)
-- Check if this job is a child of another job, if so add it to the parents dependencies
if parentDependenciesKey ~= nil then
    rcall("SADD", parentDependenciesKey, jobIdKey)
end
return jobId .. "" -- convert to string
`,keys:9},g={name:"changeDelay",content:`--[[
  Change job delay when it is in delayed set.
  Input:
    KEYS[1] delayed key
    KEYS[2] meta key
    KEYS[3] marker key
    KEYS[4] events stream
    ARGV[1] delay
    ARGV[2] timestamp
    ARGV[3] the id of the job
    ARGV[4] job key
  Output:
    0 - OK
   -1 - Missing job.
   -3 - Job not in delayed set.
  Events:
    - delayed key.
]]
local rcall = redis.call
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
if rcall("EXISTS", ARGV[4]) == 1 then
  local jobId = ARGV[3]
  local delay = tonumber(ARGV[1])
  local score, delayedTimestamp = getDelayedScore(KEYS[1], ARGV[2], delay)
  local numRemovedElements = rcall("ZREM", KEYS[1], jobId)
  if numRemovedElements < 1 then
    return -3
  end
  rcall("HSET", ARGV[4], "delay", delay)
  rcall("ZADD", KEYS[1], score, jobId)
  local maxEvents = getOrSetMaxEvents(KEYS[2])
  rcall("XADD", KEYS[4], "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(KEYS[3], KEYS[1])
  return 0
else
  return -1
end`,keys:4},S={name:"changePriority",content:`--[[
  Change job priority
  Input:
    KEYS[1] 'wait',
    KEYS[2] 'paused'
    KEYS[3] 'meta'
    KEYS[4] 'prioritized'
    KEYS[5] 'active'
    KEYS[6] 'pc' priority counter
    KEYS[7] 'marker'
    ARGV[1] priority value
    ARGV[2] prefix key
    ARGV[3] job id
    ARGV[4] lifo
    Output:
       0  - OK
      -1  - Missing job
]]
local jobId = ARGV[3]
local jobKey = ARGV[2] .. jobId
local priority = tonumber(ARGV[1])
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to push back job considering priority in front of same prioritized jobs.
]]
local function pushBackJobWithPriority(prioritizedKey, priority, jobId)
  -- in order to put it at front of same prioritized jobs
  -- we consider prioritized counter as 0
  local score = priority * 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
end
local function reAddJobWithNewPriority( prioritizedKey, markerKey, targetKey,
    priorityCounter, lifo, priority, jobId, isPausedOrMaxed)
    if priority == 0 then
        local pushCmd = lifo and 'RPUSH' or 'LPUSH'
        addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
    else
        if lifo then
            pushBackJobWithPriority(prioritizedKey, priority, jobId)
        else
            addJobWithPriority(markerKey, prioritizedKey, priority, jobId,
                priorityCounter, isPausedOrMaxed)
        end
    end
end
if rcall("EXISTS", jobKey) == 1 then
    local metaKey = KEYS[3]
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[5], KEYS[1], KEYS[2])
    local prioritizedKey = KEYS[4]
    local priorityCounterKey = KEYS[6]
    local markerKey = KEYS[7]
    -- Re-add with the new priority
    if rcall("ZREM", prioritizedKey, jobId) > 0 then
        reAddJobWithNewPriority( prioritizedKey, markerKey, target,
            priorityCounterKey, ARGV[4] == '1', priority, jobId, isPausedOrMaxed)
    elseif rcall("LREM", target, -1, jobId) > 0 then
        reAddJobWithNewPriority( prioritizedKey, markerKey, target,
            priorityCounterKey, ARGV[4] == '1', priority, jobId, isPausedOrMaxed)
    end
    rcall("HSET", jobKey, "priority", priority)
    return 0
else
    return -1
end
`,keys:7},v={name:"cleanJobsInSet",content:`--[[
  Remove jobs from the specific set.
  Input:
    KEYS[1]  set key,
    KEYS[2]  events stream key
    KEYS[3]  repeat key
    ARGV[1]  jobKey prefix
    ARGV[2]  timestamp
    ARGV[3]  limit the number of jobs to be removed. 0 is unlimited
    ARGV[4]  set name, can be any of 'wait', 'active', 'paused', 'delayed', 'completed', or 'failed'
]]
local rcall = redis.call
local repeatKey = KEYS[3]
local rangeStart = 0
local rangeEnd = -1
local limit = tonumber(ARGV[3])
-- If we're only deleting _n_ items, avoid retrieving all items
-- for faster performance
--
-- Start from the tail of the list, since that's where oldest elements
-- are generally added for FIFO lists
if limit > 0 then
  rangeStart = -1 - limit + 1
  rangeEnd = -1
end
-- Includes
--[[
  Function to clean job list.
  Returns jobIds and deleted count number.
]]
-- Includes
--[[
  Function to get the latest saved timestamp.
]]
local function getTimestamp(jobKey, attributes)
  if #attributes == 1 then
    return rcall("HGET", jobKey, attributes[1])
  end
  local jobTs
  for _, ts in ipairs(rcall("HMGET", jobKey, unpack(attributes))) do
    if (ts) then
      jobTs = ts
      break
    end
  end
  return jobTs
end
--[[
  Function to check if the job belongs to a job scheduler and
  current delayed job matches with jobId
]]
local function isJobSchedulerJob(jobId, jobKey, jobSchedulersKey)
  local repeatJobKey = rcall("HGET", jobKey, "rjk")
  if repeatJobKey  then
    local prevMillis = rcall("ZSCORE", jobSchedulersKey, repeatJobKey)
    if prevMillis then
      local currentDelayedJobId = "repeat:" .. repeatJobKey .. ":" .. prevMillis
      return jobId == currentDelayedJobId
    end
  end
  return false
end
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
local function cleanList(listKey, jobKeyPrefix, rangeStart, rangeEnd,
  timestamp, isWaiting, jobSchedulersKey)
  local jobs = rcall("LRANGE", listKey, rangeStart, rangeEnd)
  local deleted = {}
  local deletedCount = 0
  local jobTS
  local deletionMarker = ''
  local jobIdsLen = #jobs
  for i, job in ipairs(jobs) do
    if limit > 0 and deletedCount >= limit then
      break
    end
    local jobKey = jobKeyPrefix .. job
    if (isWaiting or rcall("EXISTS", jobKey .. ":lock") == 0) and
      not isJobSchedulerJob(job, jobKey, jobSchedulersKey) then
      -- Find the right timestamp of the job to compare to maxTimestamp:
      -- * finishedOn says when the job was completed, but it isn't set unless the job has actually completed
      -- * processedOn represents when the job was last attempted, but it doesn't get populated until
      --   the job is first tried
      -- * timestamp is the original job submission time
      -- Fetch all three of these (in that order) and use the first one that is set so that we'll leave jobs
      -- that have been active within the grace period:
      jobTS = getTimestamp(jobKey, {"finishedOn", "processedOn", "timestamp"})
      if (not jobTS or jobTS <= timestamp) then
        -- replace the entry with a deletion marker; the actual deletion will
        -- occur at the end of the script
        rcall("LSET", listKey, rangeEnd - jobIdsLen + i, deletionMarker)
        removeJob(job, true, jobKeyPrefix, true --[[remove debounce key]])
        deletedCount = deletedCount + 1
        table.insert(deleted, job)
      end
    end
  end
  rcall("LREM", listKey, 0, deletionMarker)
  return {deleted, deletedCount}
end
--[[
  Function to clean job set.
  Returns jobIds and deleted count number.
]] 
-- Includes
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  We use ZRANGEBYSCORE to make the case where we're deleting a limited number
  of items in a sorted set only run a single iteration. If we simply used
  ZRANGE, we may take a long time traversing through jobs that are within the
  grace period.
]]
local function getJobsInZset(zsetKey, rangeEnd, limit)
  if limit > 0 then
    return rcall("ZRANGEBYSCORE", zsetKey, 0, rangeEnd, "LIMIT", 0, limit)
  else
    return rcall("ZRANGEBYSCORE", zsetKey, 0, rangeEnd)
  end
end
local function cleanSet(
    setKey,
    jobKeyPrefix,
    rangeEnd,
    timestamp,
    limit,
    attributes,
    isFinished,
    jobSchedulersKey)
    local jobs = getJobsInZset(setKey, rangeEnd, limit)
    local deleted = {}
    local deletedCount = 0
    local jobTS
    for i, job in ipairs(jobs) do
        if limit > 0 and deletedCount >= limit then
            break
        end
        local jobKey = jobKeyPrefix .. job
        -- Extract a Job Scheduler Id from jobId ("repeat:job-scheduler-id:millis") 
        -- and check if it is in the scheduled jobs
        if not (jobSchedulersKey and isJobSchedulerJob(job, jobKey, jobSchedulersKey)) then
            if isFinished then
                removeJob(job, true, jobKeyPrefix, true --[[remove debounce key]] )
                deletedCount = deletedCount + 1
                table.insert(deleted, job)
            else
                -- * finishedOn says when the job was completed, but it isn't set unless the job has actually completed
                jobTS = getTimestamp(jobKey, attributes)
                if (not jobTS or jobTS <= timestamp) then
                    removeJob(job, true, jobKeyPrefix, true --[[remove debounce key]] )
                    deletedCount = deletedCount + 1
                    table.insert(deleted, job)
                end
            end
        end
    end
    if (#deleted > 0) then
        for from, to in batches(#deleted, 7000) do
            rcall("ZREM", setKey, unpack(deleted, from, to))
        end
    end
    return {deleted, deletedCount}
end
local result
if ARGV[4] == "active" then
  result = cleanList(KEYS[1], ARGV[1], rangeStart, rangeEnd, ARGV[2], false --[[ hasFinished ]],
                      repeatKey)
elseif ARGV[4] == "delayed" then
  rangeEnd = "+inf"
  result = cleanSet(KEYS[1], ARGV[1], rangeEnd, ARGV[2], limit,
                    {"processedOn", "timestamp"}, false  --[[ hasFinished ]], repeatKey)
elseif ARGV[4] == "prioritized" then
  rangeEnd = "+inf"
  result = cleanSet(KEYS[1], ARGV[1], rangeEnd, ARGV[2], limit,
                    {"timestamp"}, false  --[[ hasFinished ]], repeatKey)
elseif ARGV[4] == "wait" or ARGV[4] == "paused" then
  result = cleanList(KEYS[1], ARGV[1], rangeStart, rangeEnd, ARGV[2], true --[[ hasFinished ]],
                      repeatKey)
else
  rangeEnd = ARGV[2]
  -- No need to pass repeat key as in that moment job won't be related to a job scheduler
  result = cleanSet(KEYS[1], ARGV[1], rangeEnd, ARGV[2], limit,
                    {"finishedOn"}, true  --[[ hasFinished ]])
end
rcall("XADD", KEYS[2], "*", "event", "cleaned", "count", result[2])
return result[1]
`,keys:3},K={name:"drain",content:`--[[
  Drains the queue, removes all jobs that are waiting
  or delayed, but not active, completed or failed
  Input:
    KEYS[1] 'wait',
    KEYS[2] 'paused'
    KEYS[3] 'delayed'
    KEYS[4] 'prioritized'
    KEYS[5] 'jobschedulers' (repeat)
    ARGV[1]  queue key prefix
    ARGV[2]  should clean delayed jobs
]]
local rcall = redis.call
local queueBaseKey = ARGV[1]
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to filter out jobs to ignore from a table.
]]
local function filterOutJobsToIgnore(jobs, jobsToIgnore)
  local filteredJobs = {}
  for i = 1, #jobs do
    if not jobsToIgnore[jobs[i]] then
      table.insert(filteredJobs, jobs[i])
    end
  end
  return filteredJobs
end
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
local function removeJobs(keys, hard, baseKey, max)
  for i, key in ipairs(keys) do
    removeJob(key, hard, baseKey, true --[[remove debounce key]])
  end
  return max - #keys
end
local function getListItems(keyName, max)
  return rcall('LRANGE', keyName, 0, max - 1)
end
local function removeListJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getListItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  rcall("LTRIM", keyName, #jobs, -1)
  return count
end
-- Includes
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to get ZSet items.
]]
local function getZSetItems(keyName, max)
  return rcall('ZRANGE', keyName, 0, max - 1)
end
local function removeZSetJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getZSetItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  if(#jobs > 0) then
    for from, to in batches(#jobs, 7000) do
      rcall("ZREM", keyName, unpack(jobs, from, to))
    end
  end
  return count
end
-- We must not remove delayed jobs if they are associated to a job scheduler.
local scheduledJobs = {}
local jobSchedulers = rcall("ZRANGE", KEYS[5], 0, -1, "WITHSCORES")
-- For every job scheduler, get the current delayed job id.
for i = 1, #jobSchedulers, 2 do
    local jobSchedulerId = jobSchedulers[i]
    local jobSchedulerMillis = jobSchedulers[i + 1]
    local delayedJobId = "repeat:" .. jobSchedulerId .. ":" .. jobSchedulerMillis
    scheduledJobs[delayedJobId] = true
end
removeListJobs(KEYS[1], true, queueBaseKey, 0, scheduledJobs) -- wait
removeListJobs(KEYS[2], true, queueBaseKey, 0, scheduledJobs) -- paused
if ARGV[2] == "1" then
  removeZSetJobs(KEYS[3], true, queueBaseKey, 0, scheduledJobs) -- delayed
end
removeZSetJobs(KEYS[4], true, queueBaseKey, 0, scheduledJobs) -- prioritized
`,keys:5},k={name:"extendLock",content:`--[[
  Extend lock and removes the job from the stalled set.
  Input:
    KEYS[1] 'lock',
    KEYS[2] 'stalled'
    ARGV[1]  token
    ARGV[2]  lock duration in milliseconds
    ARGV[3]  jobid
  Output:
    "1" if lock extended successfully.
]]
local rcall = redis.call
if rcall("GET", KEYS[1]) == ARGV[1] then
  --   if rcall("SET", KEYS[1], ARGV[1], "PX", ARGV[2], "XX") then
  if rcall("SET", KEYS[1], ARGV[1], "PX", ARGV[2]) then
    rcall("SREM", KEYS[2], ARGV[3])
    return 1
  end
end
return 0
`,keys:2},E={name:"extendLocks",content:`--[[
  Extend locks for multiple jobs and remove them from the stalled set if successful.
  Return the list of job IDs for which the operation failed.
  KEYS[1] = stalled key
  ARGV[1] = baseKey
  ARGV[2] = tokens
  ARGV[3] = jobIds
  ARGV[4] = lockDuration (ms)
  Output:
    An array of failed job IDs. If empty, all succeeded.
]]
local rcall = redis.call
local stalledKey = KEYS[1]
local baseKey = ARGV[1]
local tokens = cmsgpack.unpack(ARGV[2])
local jobIds = cmsgpack.unpack(ARGV[3])
local lockDuration = ARGV[4]
local jobCount = #jobIds
local failedJobs = {}
for i = 1, jobCount, 1 do
    local lockKey = baseKey .. jobIds[i] .. ':lock'
    local jobId = jobIds[i]
    local token = tokens[i]
    local currentToken = rcall("GET", lockKey)
    if currentToken then
        if currentToken == token then
            local setResult = rcall("SET", lockKey, token, "PX", lockDuration)
            if setResult then
                rcall("SREM", stalledKey, jobId)
            else
                table.insert(failedJobs, jobId)
            end
        else
            table.insert(failedJobs, jobId)
        end
    else
        table.insert(failedJobs, jobId)
    end
end
return failedJobs
`,keys:1},I={name:"getCounts",content:`--[[
  Get counts per provided states
    Input:
      KEYS[1]    'prefix'
      ARGV[1...] types
]]
local rcall = redis.call;
local prefix = KEYS[1]
local results = {}
for i = 1, #ARGV do
  local stateKey = prefix .. ARGV[i]
  if ARGV[i] == "wait" or ARGV[i] == "paused" then
    -- Markers in waitlist DEPRECATED in v5: Remove in v6.
    local marker = rcall("LINDEX", stateKey, -1)
    if marker and string.sub(marker, 1, 2) == "0:" then
      local count = rcall("LLEN", stateKey)
      if count > 1 then
        rcall("RPOP", stateKey)
        results[#results+1] = count-1
      else
        results[#results+1] = 0
      end
    else
      results[#results+1] = rcall("LLEN", stateKey)
    end
  elseif ARGV[i] == "active" then
    results[#results+1] = rcall("LLEN", stateKey)
  else
    results[#results+1] = rcall("ZCARD", stateKey)
  end
end
return results
`,keys:1},w={name:"getCountsPerPriority",content:`--[[
  Get counts per provided states
    Input:
      KEYS[1] wait key
      KEYS[2] paused key
      KEYS[3] meta key
      KEYS[4] prioritized key
      ARGV[1...] priorities
]]
local rcall = redis.call
local results = {}
local waitKey = KEYS[1]
local pausedKey = KEYS[2]
local prioritizedKey = KEYS[4]
-- Includes
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePaused(queueMetaKey)
  return rcall("HEXISTS", queueMetaKey, "paused") == 1
end
for i = 1, #ARGV do
  local priority = tonumber(ARGV[i])
  if priority == 0 then
    if isQueuePaused(KEYS[3]) then
      results[#results+1] = rcall("LLEN", pausedKey)
    else
      results[#results+1] = rcall("LLEN", waitKey)
    end
  else
    results[#results+1] = rcall("ZCOUNT", prioritizedKey,
      priority * 0x100000000, (priority + 1)  * 0x100000000 - 1)
  end
end
return results
`,keys:4},j={name:"getDependencyCounts",content:`--[[
  Get counts per child states
    Input:
      KEYS[1]    processed key
      KEYS[2]    unprocessed key
      KEYS[3]    ignored key
      KEYS[4]    failed key
      ARGV[1...] types
]]
local rcall = redis.call;
local processedKey = KEYS[1]
local unprocessedKey = KEYS[2]
local ignoredKey = KEYS[3]
local failedKey = KEYS[4]
local results = {}
for i = 1, #ARGV do
  if ARGV[i] == "processed" then
    results[#results+1] = rcall("HLEN", processedKey)
  elseif ARGV[i] == "unprocessed" then
    results[#results+1] = rcall("SCARD", unprocessedKey)
  elseif ARGV[i] == "ignored" then
    results[#results+1] = rcall("HLEN", ignoredKey)
  else
    results[#results+1] = rcall("ZCARD", failedKey)
  end
end
return results
`,keys:4},x={name:"getJobScheduler",content:`--[[
  Get job scheduler record.
  Input:
    KEYS[1] 'repeat' key
    ARGV[1] id
]]
local rcall = redis.call
local jobSchedulerKey = KEYS[1] .. ":" .. ARGV[1]
local score = rcall("ZSCORE", KEYS[1], ARGV[1])
if score then
  return {rcall("HGETALL", jobSchedulerKey), score} -- get job data
end
return {nil, nil}
`,keys:1},A={name:"getMetrics",content:`--[[
  Get metrics
  Input:
    KEYS[1] 'metrics' key
    KEYS[2] 'metrics data' key
    ARGV[1] start index
    ARGV[2] end index
]]
local rcall = redis.call;
local metricsKey = KEYS[1]
local dataKey = KEYS[2]
local metrics = rcall("HMGET", metricsKey, "count", "prevTS", "prevCount")
local data = rcall("LRANGE", dataKey, tonumber(ARGV[1]), tonumber(ARGV[2]))
local numPoints = rcall("LLEN", dataKey)
return {metrics, data, numPoints}
`,keys:2},T={name:"getRanges",content:`--[[
  Get job ids per provided states
    Input:
      KEYS[1]    'prefix'
      ARGV[1]    start
      ARGV[2]    end
      ARGV[3]    asc
      ARGV[4...] types
]]
local rcall = redis.call
local prefix = KEYS[1]
local rangeStart = tonumber(ARGV[1])
local rangeEnd = tonumber(ARGV[2])
local asc = ARGV[3]
local results = {}
local function getRangeInList(listKey, asc, rangeStart, rangeEnd, results)
  if asc == "1" then
    local modifiedRangeStart
    local modifiedRangeEnd
    if rangeStart == -1 then
      modifiedRangeStart = 0
    else
      modifiedRangeStart = -(rangeStart + 1)
    end
    if rangeEnd == -1 then
      modifiedRangeEnd = 0
    else
      modifiedRangeEnd = -(rangeEnd + 1)
    end
    results[#results+1] = rcall("LRANGE", listKey,
      modifiedRangeEnd,
      modifiedRangeStart)
  else
    results[#results+1] = rcall("LRANGE", listKey, rangeStart, rangeEnd)
  end
end
for i = 4, #ARGV do
  local stateKey = prefix .. ARGV[i]
  if ARGV[i] == "wait" or ARGV[i] == "paused" then
    -- Markers in waitlist DEPRECATED in v5: Remove in v6.
    local marker = rcall("LINDEX", stateKey, -1)
    if marker and string.sub(marker, 1, 2) == "0:" then
      local count = rcall("LLEN", stateKey)
      if count > 1 then
        rcall("RPOP", stateKey)
        getRangeInList(stateKey, asc, rangeStart, rangeEnd, results)
      else
        results[#results+1] = {}
      end
    else
      getRangeInList(stateKey, asc, rangeStart, rangeEnd, results)
    end
  elseif ARGV[i] == "active" then
    getRangeInList(stateKey, asc, rangeStart, rangeEnd, results)
  else
    if asc == "1" then
      results[#results+1] = rcall("ZRANGE", stateKey, rangeStart, rangeEnd)
    else
      results[#results+1] = rcall("ZREVRANGE", stateKey, rangeStart, rangeEnd)
    end
  end
end
return results
`,keys:1},C={name:"getRateLimitTtl",content:`--[[
  Get rate limit ttl
    Input:
      KEYS[1] 'limiter'
      KEYS[2] 'meta'
      ARGV[1] maxJobs
]]
local rcall = redis.call
-- Includes
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
local rateLimiterKey = KEYS[1]
if ARGV[1] ~= "0" then
  return getRateLimitTTL(tonumber(ARGV[1]), rateLimiterKey)
else
  local rateLimitMax = rcall("HGET", KEYS[2], "max")
  if rateLimitMax then
    return getRateLimitTTL(tonumber(rateLimitMax), rateLimiterKey)
  end
  return rcall("PTTL", rateLimiterKey)
end
`,keys:2},D={name:"getState",content:`--[[
  Get a job state
  Input: 
    KEYS[1] 'completed' key,
    KEYS[2] 'failed' key
    KEYS[3] 'delayed' key
    KEYS[4] 'active' key
    KEYS[5] 'wait' key
    KEYS[6] 'paused' key
    KEYS[7] 'waiting-children' key
    KEYS[8] 'prioritized' key
    ARGV[1] job id
  Output:
    'completed'
    'failed'
    'delayed'
    'active'
    'prioritized'
    'waiting'
    'waiting-children'
    'unknown'
]]
local rcall = redis.call
if rcall("ZSCORE", KEYS[1], ARGV[1]) then
  return "completed"
end
if rcall("ZSCORE", KEYS[2], ARGV[1]) then
  return "failed"
end
if rcall("ZSCORE", KEYS[3], ARGV[1]) then
  return "delayed"
end
if rcall("ZSCORE", KEYS[8], ARGV[1]) then
  return "prioritized"
end
-- Includes
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local active_items = rcall("LRANGE", KEYS[4] , 0, -1)
if checkItemInList(active_items, ARGV[1]) ~= nil then
  return "active"
end
local wait_items = rcall("LRANGE", KEYS[5] , 0, -1)
if checkItemInList(wait_items, ARGV[1]) ~= nil then
  return "waiting"
end
local paused_items = rcall("LRANGE", KEYS[6] , 0, -1)
if checkItemInList(paused_items, ARGV[1]) ~= nil then
  return "waiting"
end
if rcall("ZSCORE", KEYS[7], ARGV[1]) then
  return "waiting-children"
end
return "unknown"
`,keys:8},O={name:"getStateV2",content:`--[[
  Get a job state
  Input: 
    KEYS[1] 'completed' key,
    KEYS[2] 'failed' key
    KEYS[3] 'delayed' key
    KEYS[4] 'active' key
    KEYS[5] 'wait' key
    KEYS[6] 'paused' key
    KEYS[7] 'waiting-children' key
    KEYS[8] 'prioritized' key
    ARGV[1] job id
  Output:
    'completed'
    'failed'
    'delayed'
    'active'
    'waiting'
    'waiting-children'
    'unknown'
]]
local rcall = redis.call
if rcall("ZSCORE", KEYS[1], ARGV[1]) then
  return "completed"
end
if rcall("ZSCORE", KEYS[2], ARGV[1]) then
  return "failed"
end
if rcall("ZSCORE", KEYS[3], ARGV[1]) then
  return "delayed"
end
if rcall("ZSCORE", KEYS[8], ARGV[1]) then
  return "prioritized"
end
if rcall("LPOS", KEYS[4] , ARGV[1]) then
  return "active"
end
if rcall("LPOS", KEYS[5] , ARGV[1]) then
  return "waiting"
end
if rcall("LPOS", KEYS[6] , ARGV[1]) then
  return "waiting"
end
if rcall("ZSCORE", KEYS[7] , ARGV[1]) then
  return "waiting-children"
end
return "unknown"
`,keys:8},R={name:"isFinished",content:`--[[
  Checks if a job is finished (.i.e. is in the completed or failed set)
  Input: 
    KEYS[1] completed key
    KEYS[2] failed key
    KEYS[3] job key
    ARGV[1] job id
    ARGV[2] return value?
  Output:
    0 - Not finished.
    1 - Completed.
    2 - Failed.
   -1 - Missing job. 
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[3]) ~= 1 then
  if ARGV[2] == "1" then
    return {-1,"Missing key for job " .. KEYS[3] .. ". isFinished"}
  end  
  return -1
end
if rcall("ZSCORE", KEYS[1], ARGV[1]) then
  if ARGV[2] == "1" then
    local returnValue = rcall("HGET", KEYS[3], "returnvalue")
    return {1,returnValue}
  end
  return 1
end
if rcall("ZSCORE", KEYS[2], ARGV[1]) then
  if ARGV[2] == "1" then
    local failedReason = rcall("HGET", KEYS[3], "failedReason")
    return {2,failedReason}
  end
  return 2
end
if ARGV[2] == "1" then
  return {0}
end
return 0
`,keys:3},M={name:"isJobInList",content:`--[[
  Checks if job is in a given list.
  Input:
    KEYS[1]
    ARGV[1]
  Output:
    1 if element found in the list.
]]
-- Includes
--[[
  Function to check if an item belongs to a list.
]]
local function checkItemInList(list, item)
  for _, v in pairs(list) do
    if v == item then
      return 1
    end
  end
  return nil
end
local items = redis.call("LRANGE", KEYS[1] , 0, -1)
return checkItemInList(items, ARGV[1])
`,keys:1},N={name:"isMaxed",content:`--[[
  Checks if queue is maxed.
  Input:
    KEYS[1] meta key
    KEYS[2] active key
  Output:
    1 if element found in the list.
]]
local rcall = redis.call
-- Includes
--[[
  Function to check if queue is maxed or not.
]]
local function isQueueMaxed(queueMetaKey, activeKey)
  local maxConcurrency = rcall("HGET", queueMetaKey, "concurrency")
  if maxConcurrency then
    local activeCount = rcall("LLEN", activeKey)
    if activeCount >= tonumber(maxConcurrency) then
      return true
    end
  end
  return false
end
return isQueueMaxed(KEYS[1], KEYS[2])
`,keys:2},P={name:"moveJobFromActiveToWait",content:`--[[
  Function to move job from active state to wait.
  Input:
    KEYS[1]  active key
    KEYS[2]  wait key
    KEYS[3]  stalled key
    KEYS[4]  paused key
    KEYS[5]  meta key
    KEYS[6]  limiter key
    KEYS[7]  prioritized key
    KEYS[8]  marker key
    KEYS[9]  event key
    ARGV[1] job id
    ARGV[2] lock token
    ARGV[3] job id key
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to push back job considering priority in front of same prioritized jobs.
]]
local function pushBackJobWithPriority(prioritizedKey, priority, jobId)
  -- in order to put it at front of same prioritized jobs
  -- we consider prioritized counter as 0
  local score = priority * 0x100000000
  rcall("ZADD", prioritizedKey, score, jobId)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
local jobId = ARGV[1]
local token = ARGV[2]
local jobKey = ARGV[3]
if rcall("EXISTS", jobKey) == 0 then
  return -1
end
local errorCode = removeLock(jobKey, KEYS[3], token, jobId)
if errorCode < 0 then
  return errorCode
end
local metaKey = KEYS[5]
local removed = rcall("LREM", KEYS[1], 1, jobId)
if removed > 0 then
  local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[1], KEYS[2], KEYS[4])
  local priority = tonumber(rcall("HGET", ARGV[3], "priority")) or 0
  if priority > 0 then
    pushBackJobWithPriority(KEYS[7], priority, jobId)
  else
    addJobInTargetList(target, KEYS[8], "RPUSH", isPausedOrMaxed, jobId)
  end
  local maxEvents = getOrSetMaxEvents(metaKey)
  -- Emit waiting event
  rcall("XADD", KEYS[9], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
    "jobId", jobId, "prev", "active")
end
local pttl = rcall("PTTL", KEYS[6])
if pttl > 0 then
  return pttl
else
  return 0
end
`,keys:9},L={name:"moveJobsToWait",content:`--[[
  Move completed, failed or delayed jobs to wait.
  Note: Does not support jobs with priorities.
  Input:
    KEYS[1] base key
    KEYS[2] events stream
    KEYS[3] state key (failed, completed, delayed)
    KEYS[4] 'wait'
    KEYS[5] 'paused'
    KEYS[6] 'meta'
    KEYS[7] 'active'
    KEYS[8] 'marker'
    ARGV[1] count
    ARGV[2] timestamp
    ARGV[3] prev state
  Output:
    1  means the operation is not completed
    0  means the operation is completed
]]
local maxCount = tonumber(ARGV[1])
local timestamp = tonumber(ARGV[2])
local rcall = redis.call;
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local metaKey = KEYS[6]
local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[7], KEYS[4], KEYS[5])
local jobs = rcall('ZRANGEBYSCORE', KEYS[3], 0, timestamp, 'LIMIT', 0, maxCount)
if (#jobs > 0) then
    if ARGV[3] == "failed" then
        for i, key in ipairs(jobs) do
            local jobKey = KEYS[1] .. key
            rcall("HDEL", jobKey, "finishedOn", "processedOn", "failedReason")
        end
    elseif ARGV[3] == "completed" then
        for i, key in ipairs(jobs) do
            local jobKey = KEYS[1] .. key
            rcall("HDEL", jobKey, "finishedOn", "processedOn", "returnvalue")
        end
    end
    local maxEvents = getOrSetMaxEvents(metaKey)
    for i, key in ipairs(jobs) do
        -- Emit waiting event
        rcall("XADD", KEYS[2], "MAXLEN", "~", maxEvents, "*", "event",
              "waiting", "jobId", key, "prev", ARGV[3]);
    end
    for from, to in batches(#jobs, 7000) do
        rcall("ZREM", KEYS[3], unpack(jobs, from, to))
        rcall("LPUSH", target, unpack(jobs, from, to))
    end
    addBaseMarkerIfNeeded(KEYS[8], isPausedOrMaxed)
end
maxCount = maxCount - #jobs
if (maxCount <= 0) then return 1 end
return 0
`,keys:8},J={name:"moveStalledJobsToWait",content:`--[[
  Move stalled jobs to wait.
    Input:
      KEYS[1] 'stalled' (SET)
      KEYS[2] 'wait',   (LIST)
      KEYS[3] 'active', (LIST)
      KEYS[4] 'stalled-check', (KEY)
      KEYS[5] 'meta', (KEY)
      KEYS[6] 'paused', (LIST)
      KEYS[7] 'marker'
      KEYS[8] 'event stream' (STREAM)
      KEYS[9] 'repeat' key
      ARGV[1]  Max stalled job count
      ARGV[2]  queue.toKey('')
      ARGV[3]  timestamp
      ARGV[4]  max check time
    Events:
      'stalled' with stalled job id.
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to move job to wait to be picked up by a waiting worker.
]]
-- Includes
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function moveJobToWait(metaKey, activeKey, waitKey, pausedKey, markerKey, eventStreamKey,
  jobId, pushCmd)
  local target, isPausedOrMaxed = getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
  addJobInTargetList(target, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId", jobId, 'prev', 'active')
end
--[[
  Function to trim events, default 10000.
]]
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
local function trimEvents(metaKey, eventStreamKey)
  local maxEvents = getOrSetMaxEvents(metaKey)
  if maxEvents then
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", maxEvents)
  else
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", 10000)
  end
end
local stalledKey = KEYS[1]
local waitKey = KEYS[2]
local activeKey = KEYS[3]
local stalledCheckKey = KEYS[4]
local metaKey = KEYS[5]
local pausedKey = KEYS[6]
local markerKey = KEYS[7]
local eventStreamKey = KEYS[8]
local repeatKey = KEYS[9]
local maxStalledJobCount = tonumber(ARGV[1])
local queueKeyPrefix = ARGV[2]
local timestamp = ARGV[3]
local maxCheckTime = ARGV[4]
if rcall("EXISTS", stalledCheckKey) == 1 then
    return {}
end
rcall("SET", stalledCheckKey, timestamp, "PX", maxCheckTime)
-- Trim events before emitting them to avoid trimming events emitted in this script
trimEvents(metaKey, eventStreamKey)
-- Move all stalled jobs to wait
local stalling = rcall('SMEMBERS', stalledKey)
local stalled = {}
if (#stalling > 0) then
    rcall('DEL', stalledKey)
    -- Remove from active list
    for i, jobId in ipairs(stalling) do
        -- Markers in waitlist DEPRECATED in v5: Remove in v6.
        if string.sub(jobId, 1, 2) == "0:" then
            -- If the jobId is a delay marker ID we just remove it.
            rcall("LREM", activeKey, 1, jobId)
        else
            local jobKey = queueKeyPrefix .. jobId
            -- Check that the lock is also missing, then we can handle this job as really stalled.
            if (rcall("EXISTS", jobKey .. ":lock") == 0) then
                --  Remove from the active queue.
                local removed = rcall("LREM", activeKey, 1, jobId)
                if (removed > 0) then
                    -- If this job has been stalled too many times, such as if it crashes the worker, then fail it.
                    local stalledCount = rcall("HINCRBY", jobKey, "stc", 1)
                    -- Check if this is a repeatable job by looking at job options
                    local jobSchedulerId = rcall("HGET", jobKey, "rjk")
                    local isRepeatableJob = false
                    if jobSchedulerId then
                        local schedulerKey = repeatKey .. ":" .. jobSchedulerId
                        if rcall("EXISTS", schedulerKey) == 1 then
                            isRepeatableJob = true
                        else
                            -- TODO: remove this check in v6, as it is only needed for legacy repeatable jobs
                            -- that stored the scheduler id in the job key but did not create the scheduler hash key
                            local prevMillis = rcall("ZSCORE", repeatKey, jobSchedulerId)
                            if prevMillis then
                                isRepeatableJob = true
                            end
                        end
                    end
                    -- Only fail job if it exceeds stall limit AND is not a repeatable job
                    if stalledCount > maxStalledJobCount and not isRepeatableJob then
                        local failedReason = "job stalled more than allowable limit"
                        rcall("HSET", jobKey, "defa", failedReason)
                    end
                    moveJobToWait(metaKey, activeKey, waitKey, pausedKey, markerKey, eventStreamKey, jobId,
                        "RPUSH")
                    -- Emit the stalled event
                    rcall("XADD", eventStreamKey, "*", "event", "stalled", "jobId", jobId)
                    table.insert(stalled, jobId)
                end
            end
        end
    end
end
-- Mark potentially stalled jobs
local active = rcall('LRANGE', activeKey, 0, -1)
if (#active > 0) then
    for from, to in batches(#active, 7000) do
        rcall('SADD', stalledKey, unpack(active, from, to))
    end
end
return stalled
`,keys:9},_={name:"moveToActive",content:`--[[
  Move next job to be processed to active, lock it and fetch its data. The job
  may be delayed, in that case we need to move it to the delayed set instead.
  This operation guarantees that the worker owns the job during the lock
  expiration time. The worker is responsible of keeping the lock fresh
  so that no other worker picks this job again.
  Input:
    KEYS[1] wait key
    KEYS[2] active key
    KEYS[3] prioritized key
    KEYS[4] stream events key
    KEYS[5] stalled key
    -- Rate limiting
    KEYS[6] rate limiter key
    KEYS[7] delayed key
    -- Delayed jobs
    KEYS[8] paused key
    KEYS[9] meta key
    KEYS[10] pc priority counter
    -- Marker
    KEYS[11] marker key
    -- Arguments
    ARGV[1] key prefix
    ARGV[2] timestamp
    ARGV[3] opts
    opts - token - lock token
    opts - lockDuration
    opts - limiter
    opts - name - worker name
]]
local rcall = redis.call
local waitKey = KEYS[1]
local activeKey = KEYS[2]
local eventStreamKey = KEYS[4]
local rateLimiterKey = KEYS[6]
local delayedKey = KEYS[7]
local opts = cmsgpack.unpack(ARGV[3])
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to move job from prioritized state to active.
]]
local function moveJobFromPrioritizedToActive(priorityKey, activeKey, priorityCounterKey)
  local prioritizedJob = rcall("ZPOPMIN", priorityKey)
  if #prioritizedJob > 0 then
    rcall("LPUSH", activeKey, prioritizedJob[1])
    return prioritizedJob[1]
  else
    rcall("DEL", priorityCounterKey)
  end
end
--[[
  Function to move job from wait state to active.
  Input:
    opts - token - lock token
    opts - lockDuration
    opts - limiter
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function prepareJobForProcessing(keyPrefix, rateLimiterKey, eventStreamKey,
    jobId, processedOn, maxJobs, limiterDuration, markerKey, opts)
  local jobKey = keyPrefix .. jobId
  -- Check if we need to perform rate limiting.
  if maxJobs then
    local jobCounter = tonumber(rcall("INCR", rateLimiterKey))
    if jobCounter == 1 then
      local integerDuration = math.floor(math.abs(limiterDuration))
      rcall("PEXPIRE", rateLimiterKey, integerDuration)
    end
  end
  -- get a lock
  if opts['token'] ~= "0" then
    local lockKey = jobKey .. ':lock'
    rcall("SET", lockKey, opts['token'], "PX", opts['lockDuration'])
  end
  local optionalValues = {}
  if opts['name'] then
    -- Set "processedBy" field to the worker name
    table.insert(optionalValues, "pb")
    table.insert(optionalValues, opts['name'])
  end
  rcall("XADD", eventStreamKey, "*", "event", "active", "jobId", jobId, "prev", "waiting")
  rcall("HMSET", jobKey, "processedOn", processedOn, unpack(optionalValues))
  rcall("HINCRBY", jobKey, "ats", 1)
  addBaseMarkerIfNeeded(markerKey, false)
  -- rate limit delay must be 0 in this case to prevent adding more delay
  -- when job that is moved to active needs to be processed
  return {rcall("HGETALL", jobKey), jobId, 0, 0} -- get job data
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                rcall("LPUSH", targetKey, jobId)
            else
                local score = getPriorityScore(priority, priorityCounterKey)
                rcall("ZADD", prioritizedKey, score, jobId)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
        addBaseMarkerIfNeeded(markerKey, isPaused)
    end
end
local target, isPausedOrMaxed, rateLimitMax, rateLimitDuration = getTargetQueueList(KEYS[9],
    activeKey, waitKey, KEYS[8])
-- Check if there are delayed jobs that we can move to wait.
local markerKey = KEYS[11]
promoteDelayedJobs(delayedKey, markerKey, target, KEYS[3], eventStreamKey, ARGV[1],
                   ARGV[2], KEYS[10], isPausedOrMaxed)
local maxJobs = tonumber(rateLimitMax or (opts['limiter'] and opts['limiter']['max']))
local expireTime = getRateLimitTTL(maxJobs, rateLimiterKey)
-- Check if we are rate limited first.
if expireTime > 0 then return {0, 0, expireTime, 0} end
-- paused or maxed queue
if isPausedOrMaxed then return {0, 0, 0, 0} end
local limiterDuration = (opts['limiter'] and opts['limiter']['duration']) or rateLimitDuration
-- no job ID, try non-blocking move from wait to active
local jobId = rcall("RPOPLPUSH", waitKey, activeKey)
-- Markers in waitlist DEPRECATED in v5: Will be completely removed in v6.
if jobId and string.sub(jobId, 1, 2) == "0:" then
    rcall("LREM", activeKey, 1, jobId)
    jobId = rcall("RPOPLPUSH", waitKey, activeKey)
end
if jobId then
    return prepareJobForProcessing(ARGV[1], rateLimiterKey, eventStreamKey, jobId, ARGV[2],
                                   maxJobs, limiterDuration, markerKey, opts)
else
    jobId = moveJobFromPrioritizedToActive(KEYS[3], activeKey, KEYS[10])
    if jobId then
        return prepareJobForProcessing(ARGV[1], rateLimiterKey, eventStreamKey, jobId, ARGV[2],
                                       maxJobs, limiterDuration, markerKey, opts)
    end
end
-- Return the timestamp for the next delayed job if any.
local nextTimestamp = getNextDelayedTimestamp(delayedKey)
if nextTimestamp ~= nil then return {0, 0, 0, nextTimestamp} end
return {0, 0, 0, 0}
`,keys:11},F={name:"moveToDelayed",content:`--[[
  Moves job from active to delayed set.
  Input:
    KEYS[1] marker key
    KEYS[2] active key
    KEYS[3] prioritized key
    KEYS[4] delayed key
    KEYS[5] job key
    KEYS[6] events stream
    KEYS[7] meta key
    KEYS[8] stalled key
    KEYS[9] wait key
    KEYS[10] rate limiter key
    KEYS[11] paused key
    KEYS[12] pc priority counter
    ARGV[1] key prefix
    ARGV[2] timestamp
    ARGV[3] the id of the job
    ARGV[4] queue token
    ARGV[5] delay value
    ARGV[6] skip attempt
    ARGV[7] optional job fields to update
    ARGV[8] fetch next?
    ARGV[9] opts
  Output:
    0 - OK
   -1 - Missing job.
   -3 - Job not in active set.
  Events:
    - delayed key.
]]
local rcall = redis.call
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to fetch the next job to process.
  Tries to get the next job to avoid an extra roundtrip if the queue is
  not closing and not rate limited.
  Input:
    waitKey - wait list key
    activeKey - active list key
    prioritizedKey - prioritized sorted set key
    eventStreamKey - event stream key
    rateLimiterKey - rate limiter key
    delayedKey - delayed sorted set key
    pausedKey - paused list key
    metaKey - meta hash key
    pcKey - priority counter key
    markerKey - marker key
    prefix - keys prefix
    timestamp - current timestamp
    opts - options table:
      token (required) - lock token used when locking jobs
      lockDuration (required) - lock duration for acquired jobs
      limiter (optional) - rate limiter options table (e.g. { max = number })
]]
-- Includes
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to move job from prioritized state to active.
]]
local function moveJobFromPrioritizedToActive(priorityKey, activeKey, priorityCounterKey)
  local prioritizedJob = rcall("ZPOPMIN", priorityKey)
  if #prioritizedJob > 0 then
    rcall("LPUSH", activeKey, prioritizedJob[1])
    return prioritizedJob[1]
  else
    rcall("DEL", priorityCounterKey)
  end
end
--[[
  Function to move job from wait state to active.
  Input:
    opts - token - lock token
    opts - lockDuration
    opts - limiter
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function prepareJobForProcessing(keyPrefix, rateLimiterKey, eventStreamKey,
    jobId, processedOn, maxJobs, limiterDuration, markerKey, opts)
  local jobKey = keyPrefix .. jobId
  -- Check if we need to perform rate limiting.
  if maxJobs then
    local jobCounter = tonumber(rcall("INCR", rateLimiterKey))
    if jobCounter == 1 then
      local integerDuration = math.floor(math.abs(limiterDuration))
      rcall("PEXPIRE", rateLimiterKey, integerDuration)
    end
  end
  -- get a lock
  if opts['token'] ~= "0" then
    local lockKey = jobKey .. ':lock'
    rcall("SET", lockKey, opts['token'], "PX", opts['lockDuration'])
  end
  local optionalValues = {}
  if opts['name'] then
    -- Set "processedBy" field to the worker name
    table.insert(optionalValues, "pb")
    table.insert(optionalValues, opts['name'])
  end
  rcall("XADD", eventStreamKey, "*", "event", "active", "jobId", jobId, "prev", "waiting")
  rcall("HMSET", jobKey, "processedOn", processedOn, unpack(optionalValues))
  rcall("HINCRBY", jobKey, "ats", 1)
  addBaseMarkerIfNeeded(markerKey, false)
  -- rate limit delay must be 0 in this case to prevent adding more delay
  -- when job that is moved to active needs to be processed
  return {rcall("HGETALL", jobKey), jobId, 0, 0} -- get job data
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                rcall("LPUSH", targetKey, jobId)
            else
                local score = getPriorityScore(priority, priorityCounterKey)
                rcall("ZADD", prioritizedKey, score, jobId)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
        addBaseMarkerIfNeeded(markerKey, isPaused)
    end
end
local function fetchNextJob(waitKey, activeKey, prioritizedKey, eventStreamKey,
    rateLimiterKey, delayedKey, pausedKey, metaKey, pcKey, markerKey, prefix,
    timestamp, opts)
    local target, isPausedOrMaxed, rateLimitMax, rateLimitDuration =
        getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    -- Check if there are delayed jobs that can be promoted
    promoteDelayedJobs(delayedKey, markerKey, target, prioritizedKey,
        eventStreamKey, prefix, timestamp, pcKey, isPausedOrMaxed)
    local maxJobs = tonumber(rateLimitMax or (opts['limiter'] and opts['limiter']['max']))
    -- Check if we are rate limited first.
    local expireTime = getRateLimitTTL(maxJobs, rateLimiterKey)
    if expireTime > 0 then
        return {0, 0, expireTime, 0}
    end
    -- paused or maxed queue
    if isPausedOrMaxed then
        return {0, 0, 0, 0}
    end
    local limiterDuration = (opts['limiter'] and opts['limiter']['duration']) or rateLimitDuration
    local jobId = rcall("RPOPLPUSH", waitKey, activeKey)
    if jobId then
        -- Markers in waitlist DEPRECATED in v5: Remove in v6.
        if string.sub(jobId, 1, 2) == "0:" then
            rcall("LREM", activeKey, 1, jobId)
            -- If jobId is special ID 0:delay (delay greater than 0), then there is no job to process
            -- but if ID is 0:0, then there is at least 1 prioritized job to process
            if jobId == "0:0" then
                jobId = moveJobFromPrioritizedToActive(prioritizedKey, activeKey, pcKey)
                return prepareJobForProcessing(prefix, rateLimiterKey,
                    eventStreamKey, jobId, timestamp, maxJobs,
                    limiterDuration, markerKey, opts)
            end
        else
            return prepareJobForProcessing(prefix, rateLimiterKey,
                eventStreamKey, jobId, timestamp, maxJobs,
                limiterDuration, markerKey, opts)
        end
    else
        jobId = moveJobFromPrioritizedToActive(prioritizedKey, activeKey, pcKey)
        if jobId then
            return prepareJobForProcessing(prefix, rateLimiterKey,
                eventStreamKey, jobId, timestamp, maxJobs,
                limiterDuration, markerKey, opts)
        end
    end
    -- Return the timestamp for the next delayed job if any.
    local nextTimestamp = getNextDelayedTimestamp(delayedKey)
    if nextTimestamp ~= nil then
        -- The result is guaranteed to be positive, since the
        -- ZRANGEBYSCORE command would have return a job otherwise.
        return {0, 0, 0, nextTimestamp}
    end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
--[[
  Function to update a bunch of fields in a job.
]]
local function updateJobFields(jobKey, msgpackedFields)
  if msgpackedFields and #msgpackedFields > 0 then
    local fieldsToUpdate = cmsgpack.unpack(msgpackedFields)
    if fieldsToUpdate then
      rcall("HMSET", jobKey, unpack(fieldsToUpdate))
    end
  end
end
local jobKey = KEYS[5]
local markerKey = KEYS[1]
local metaKey = KEYS[7]
local token = ARGV[4] 
if rcall("EXISTS", jobKey) == 1 then
    local errorCode = removeLock(jobKey, KEYS[8], token, ARGV[3])
    if errorCode < 0 then
        return errorCode
    end
    updateJobFields(jobKey, ARGV[7])
    local delayedKey = KEYS[4]
    local jobId = ARGV[3]
    local delay = tonumber(ARGV[5])
    local numRemovedElements = rcall("LREM", KEYS[2], -1, jobId)
    if numRemovedElements < 1 then return -3 end
    local score, delayedTimestamp = getDelayedScore(delayedKey, ARGV[2], delay)
    if ARGV[6] == "0" then
        rcall("HINCRBY", jobKey, "atm", 1)
    end
    rcall("HSET", jobKey, "delay", ARGV[5])
    local maxEvents = getOrSetMaxEvents(metaKey)
    rcall("ZADD", delayedKey, score, jobId)
    rcall("XADD", KEYS[6], "MAXLEN", "~", maxEvents, "*", "event", "delayed",
          "jobId", jobId, "delay", delayedTimestamp)
    -- Try to get next job to avoid an extra roundtrip if the queue is not closing,
    -- and not rate limited.
    if (ARGV[8] == "1") then
        local opts = cmsgpack.unpack(ARGV[9])
        local result = fetchNextJob(KEYS[9], KEYS[2], KEYS[3], KEYS[6],
            KEYS[10], KEYS[4], KEYS[11], metaKey, KEYS[12], markerKey,
            ARGV[1], ARGV[2], opts)
        if result and type(result[1]) == "table" then
            return result
        end
    end
    -- Check if we need to push a marker job to wake up sleeping workers.
    addDelayMarkerIfNeeded(markerKey, delayedKey)
    return 0
else
    return -1
end
`,keys:12},G={name:"moveToFinished",content:`--[[
  Move job from active to a finished status (completed or failed)
  A job can only be moved to completed if it was active.
  The job must be locked before it can be moved to a finished status,
  and the lock must be released in this script.
    Input:
      KEYS[1] wait key
      KEYS[2] active key
      KEYS[3] prioritized key
      KEYS[4] event stream key
      KEYS[5] stalled key
      -- Rate limiting
      KEYS[6] rate limiter key
      KEYS[7] delayed key
      KEYS[8] paused key
      KEYS[9] meta key
      KEYS[10] pc priority counter
      KEYS[11] completed/failed key
      KEYS[12] jobId key
      KEYS[13] metrics key
      KEYS[14] marker key
      ARGV[1]  jobId
      ARGV[2]  timestamp
      ARGV[3]  msg property returnvalue / failedReason
      ARGV[4]  return value / failed reason
      ARGV[5]  target (completed/failed)
      ARGV[6]  fetch next?
      ARGV[7]  keys prefix
      ARGV[8]  opts
      ARGV[9]  job fields to update
      opts - token - lock token
      opts - keepJobs
      opts - lockDuration - lock duration in milliseconds
      opts - attempts max attempts
      opts - maxMetricsSize
      opts - fpof - fail parent on fail
      opts - cpof - continue parent on fail
      opts - idof - ignore dependency on fail
      opts - rdof - remove dependency on fail
      opts - name - worker name
    Output:
      0 OK
      -1 Missing key.
      -2 Missing lock.
      -3 Job not in active set
      -4 Job has pending children
      -6 Lock is not owned by this client
      -9 Job has failed children
    Events:
      'completed/failed'
]]
local rcall = redis.call
--- Includes
--[[
  Functions to collect metrics based on a current and previous count of jobs.
  Granularity is fixed at 1 minute.
]]
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
local function collectMetrics(metaKey, dataPointsList, maxDataPoints,
                                 timestamp)
    -- Increment current count
    local count = rcall("HINCRBY", metaKey, "count", 1) - 1
    -- Compute how many data points we need to add to the list, N.
    local prevTS = rcall("HGET", metaKey, "prevTS")
    if not prevTS then
        -- If prevTS is nil, set it to the current timestamp
        rcall("HSET", metaKey, "prevTS", timestamp, "prevCount", 0)
        return
    end
    local N = math.min(math.floor(timestamp / 60000) - math.floor(prevTS / 60000), tonumber(maxDataPoints))
    if N > 0 then
        local delta = count - rcall("HGET", metaKey, "prevCount")
        -- If N > 1, add N-1 zeros to the list
        if N > 1 then
            local points = {}
            points[1] = delta
            for i = 2, N do
                points[i] = 0
            end
            for from, to in batches(#points, 7000) do
                rcall("LPUSH", dataPointsList, unpack(points, from, to))
            end
        else
            -- LPUSH delta to the list
            rcall("LPUSH", dataPointsList, delta)
        end
        -- LTRIM to keep list to its max size
        rcall("LTRIM", dataPointsList, 0, maxDataPoints - 1)
        -- update prev count with current count
        rcall("HSET", metaKey, "prevCount", count, "prevTS", timestamp)
    end
end
--[[
  Function to fetch the next job to process.
  Tries to get the next job to avoid an extra roundtrip if the queue is
  not closing and not rate limited.
  Input:
    waitKey - wait list key
    activeKey - active list key
    prioritizedKey - prioritized sorted set key
    eventStreamKey - event stream key
    rateLimiterKey - rate limiter key
    delayedKey - delayed sorted set key
    pausedKey - paused list key
    metaKey - meta hash key
    pcKey - priority counter key
    markerKey - marker key
    prefix - keys prefix
    timestamp - current timestamp
    opts - options table:
      token (required) - lock token used when locking jobs
      lockDuration (required) - lock duration for acquired jobs
      limiter (optional) - rate limiter options table (e.g. { max = number })
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
--[[
  Function to get current rate limit ttl.
]]
local function getRateLimitTTL(maxJobs, rateLimiterKey)
  if maxJobs and maxJobs <= tonumber(rcall("GET", rateLimiterKey) or 0) then
    local pttl = rcall("PTTL", rateLimiterKey)
    if pttl == 0 then
      rcall("DEL", rateLimiterKey)
    end
    if pttl > 0 then
      return pttl
    end
  end
  return 0
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to move job from prioritized state to active.
]]
local function moveJobFromPrioritizedToActive(priorityKey, activeKey, priorityCounterKey)
  local prioritizedJob = rcall("ZPOPMIN", priorityKey)
  if #prioritizedJob > 0 then
    rcall("LPUSH", activeKey, prioritizedJob[1])
    return prioritizedJob[1]
  else
    rcall("DEL", priorityCounterKey)
  end
end
--[[
  Function to move job from wait state to active.
  Input:
    opts - token - lock token
    opts - lockDuration
    opts - limiter
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function prepareJobForProcessing(keyPrefix, rateLimiterKey, eventStreamKey,
    jobId, processedOn, maxJobs, limiterDuration, markerKey, opts)
  local jobKey = keyPrefix .. jobId
  -- Check if we need to perform rate limiting.
  if maxJobs then
    local jobCounter = tonumber(rcall("INCR", rateLimiterKey))
    if jobCounter == 1 then
      local integerDuration = math.floor(math.abs(limiterDuration))
      rcall("PEXPIRE", rateLimiterKey, integerDuration)
    end
  end
  -- get a lock
  if opts['token'] ~= "0" then
    local lockKey = jobKey .. ':lock'
    rcall("SET", lockKey, opts['token'], "PX", opts['lockDuration'])
  end
  local optionalValues = {}
  if opts['name'] then
    -- Set "processedBy" field to the worker name
    table.insert(optionalValues, "pb")
    table.insert(optionalValues, opts['name'])
  end
  rcall("XADD", eventStreamKey, "*", "event", "active", "jobId", jobId, "prev", "waiting")
  rcall("HMSET", jobKey, "processedOn", processedOn, unpack(optionalValues))
  rcall("HINCRBY", jobKey, "ats", 1)
  addBaseMarkerIfNeeded(markerKey, false)
  -- rate limit delay must be 0 in this case to prevent adding more delay
  -- when job that is moved to active needs to be processed
  return {rcall("HGETALL", jobKey), jobId, 0, 0} -- get job data
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                rcall("LPUSH", targetKey, jobId)
            else
                local score = getPriorityScore(priority, priorityCounterKey)
                rcall("ZADD", prioritizedKey, score, jobId)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
        addBaseMarkerIfNeeded(markerKey, isPaused)
    end
end
local function fetchNextJob(waitKey, activeKey, prioritizedKey, eventStreamKey,
    rateLimiterKey, delayedKey, pausedKey, metaKey, pcKey, markerKey, prefix,
    timestamp, opts)
    local target, isPausedOrMaxed, rateLimitMax, rateLimitDuration =
        getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    -- Check if there are delayed jobs that can be promoted
    promoteDelayedJobs(delayedKey, markerKey, target, prioritizedKey,
        eventStreamKey, prefix, timestamp, pcKey, isPausedOrMaxed)
    local maxJobs = tonumber(rateLimitMax or (opts['limiter'] and opts['limiter']['max']))
    -- Check if we are rate limited first.
    local expireTime = getRateLimitTTL(maxJobs, rateLimiterKey)
    if expireTime > 0 then
        return {0, 0, expireTime, 0}
    end
    -- paused or maxed queue
    if isPausedOrMaxed then
        return {0, 0, 0, 0}
    end
    local limiterDuration = (opts['limiter'] and opts['limiter']['duration']) or rateLimitDuration
    local jobId = rcall("RPOPLPUSH", waitKey, activeKey)
    if jobId then
        -- Markers in waitlist DEPRECATED in v5: Remove in v6.
        if string.sub(jobId, 1, 2) == "0:" then
            rcall("LREM", activeKey, 1, jobId)
            -- If jobId is special ID 0:delay (delay greater than 0), then there is no job to process
            -- but if ID is 0:0, then there is at least 1 prioritized job to process
            if jobId == "0:0" then
                jobId = moveJobFromPrioritizedToActive(prioritizedKey, activeKey, pcKey)
                return prepareJobForProcessing(prefix, rateLimiterKey,
                    eventStreamKey, jobId, timestamp, maxJobs,
                    limiterDuration, markerKey, opts)
            end
        else
            return prepareJobForProcessing(prefix, rateLimiterKey,
                eventStreamKey, jobId, timestamp, maxJobs,
                limiterDuration, markerKey, opts)
        end
    else
        jobId = moveJobFromPrioritizedToActive(prioritizedKey, activeKey, pcKey)
        if jobId then
            return prepareJobForProcessing(prefix, rateLimiterKey,
                eventStreamKey, jobId, timestamp, maxJobs,
                limiterDuration, markerKey, opts)
        end
    end
    -- Return the timestamp for the next delayed job if any.
    local nextTimestamp = getNextDelayedTimestamp(delayedKey)
    if nextTimestamp ~= nil then
        -- The result is guaranteed to be positive, since the
        -- ZRANGEBYSCORE command would have return a job otherwise.
        return {0, 0, 0, nextTimestamp}
    end
end
--[[
  Function to recursively move from waitingChildren to failed.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized)
  if no pending dependencies.
]]
-- Includes
--[[
  Validate and move parent to a wait status (waiting, delayed or prioritized) if needed.
]]
-- Includes
--[[
  Move parent to a wait status (wait, prioritized or delayed)
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
local function moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    local parentWaitKey = parentQueueKey .. ":wait"
    local parentPausedKey = parentQueueKey .. ":paused"
    local parentActiveKey = parentQueueKey .. ":active"
    local parentMetaKey = parentQueueKey .. ":meta"
    local parentMarkerKey = parentQueueKey .. ":marker"
    local jobAttributes = rcall("HMGET", parentKey, "priority", "delay")
    local priority = tonumber(jobAttributes[1]) or 0
    local delay = tonumber(jobAttributes[2]) or 0
    if delay > 0 then
        local delayedTimestamp = tonumber(timestamp) + delay
        local score = delayedTimestamp * 0x1000
        local parentDelayedKey = parentQueueKey .. ":delayed"
        rcall("ZADD", parentDelayedKey, score, parentId)
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "delayed", "jobId", parentId, "delay",
            delayedTimestamp)
        addDelayMarkerIfNeeded(parentMarkerKey, parentDelayedKey)
    else
        if priority == 0 then
            local parentTarget, isParentPausedOrMaxed = getTargetQueueList(parentMetaKey, parentActiveKey,
                parentWaitKey, parentPausedKey)
            addJobInTargetList(parentTarget, parentMarkerKey, "RPUSH", isParentPausedOrMaxed, parentId)
        else
            local isPausedOrMaxed = isQueuePausedOrMaxed(parentMetaKey, parentActiveKey)
            addJobWithPriority(parentMarkerKey, parentQueueKey .. ":prioritized", priority, parentId,
                parentQueueKey .. ":pc", isPausedOrMaxed)
        end
        rcall("XADD", parentQueueKey .. ":events", "*", "event", "waiting", "jobId", parentId, "prev",
            "waiting-children")
    end
end
local function moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then    
      rcall("ZREM", parentWaitingChildrenKey, parentId)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    end
  end
end
local function moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey,
  parentId, timestamp)
  local doNotHavePendingDependencies = rcall("SCARD", parentDependenciesKey) == 0
  if doNotHavePendingDependencies then
    moveParentToWaitIfNeeded(parentQueueKey, parentKey, parentId, timestamp)
  end
end
local handleChildFailureAndMoveParentToWait = function (parentQueueKey, parentKey, parentId, jobIdKey, timestamp)
  if rcall("EXISTS", parentKey) == 1 then
    local parentWaitingChildrenKey = parentQueueKey .. ":waiting-children"
    local parentDelayedKey = parentQueueKey .. ":delayed"
    local parentWaitingChildrenOrDelayedKey
    if rcall("ZSCORE", parentWaitingChildrenKey, parentId) then
      parentWaitingChildrenOrDelayedKey = parentWaitingChildrenKey
    elseif rcall("ZSCORE", parentDelayedKey, parentId) then
      parentWaitingChildrenOrDelayedKey = parentDelayedKey
      rcall("HSET", parentKey, "delay", 0)
    end
    if parentWaitingChildrenOrDelayedKey then
      rcall("ZREM", parentWaitingChildrenOrDelayedKey, parentId)
      local deferredFailure = "child " .. jobIdKey .. " failed"
      rcall("HSET", parentKey, "defa", deferredFailure)
      moveParentToWait(parentQueueKey, parentKey, parentId, timestamp)
    else
      if not rcall("ZSCORE", parentQueueKey .. ":failed", parentId) then
        local deferredFailure = "child " .. jobIdKey .. " failed"
        rcall("HSET", parentKey, "defa", deferredFailure)
      end
    end
  end
end
local moveChildFromDependenciesIfNeeded = function (rawParentData, childKey, failedReason, timestamp)
  if rawParentData then
    local parentData = cjson.decode(rawParentData)
    local parentKey = parentData['queueKey'] .. ':' .. parentData['id']
    local parentDependenciesChildrenKey = parentKey .. ":dependencies"
    if parentData['fpof'] then
      if rcall("SREM", parentDependenciesChildrenKey, childKey) == 1 then
        local parentUnsuccessfulChildrenKey = parentKey .. ":unsuccessful"
        rcall("ZADD", parentUnsuccessfulChildrenKey, timestamp, childKey)
        handleChildFailureAndMoveParentToWait(
          parentData['queueKey'],
          parentKey,
          parentData['id'],
          childKey,
          timestamp
        )
      end
    elseif parentData['cpof'] then
      if rcall("SREM", parentDependenciesChildrenKey, childKey) == 1 then
        local parentFailedChildrenKey = parentKey .. ":failed"
        rcall("HSET", parentFailedChildrenKey, childKey, failedReason)
        moveParentToWaitIfNeeded(parentData['queueKey'], parentKey, parentData['id'], timestamp)
      end
    elseif parentData['idof'] or parentData['rdof'] then
      if rcall("SREM", parentDependenciesChildrenKey, childKey) == 1 then
        moveParentToWaitIfNoPendingDependencies(parentData['queueKey'], parentDependenciesChildrenKey,
          parentKey, parentData['id'], timestamp)
        if parentData['idof'] then
          local parentFailedChildrenKey = parentKey .. ":failed"
          rcall("HSET", parentFailedChildrenKey, childKey, failedReason)
        end
      end
    end
  end
end
--[[
  Function to remove deduplication key if needed
  when a job is moved to completed or failed states.
]]
local function removeDeduplicationKeyIfNeededOnFinalization(prefixKey,
  deduplicationId, jobId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local pttl = rcall("PTTL", deduplicationKey)
    if pttl == 0 then
      return rcall("DEL", deduplicationKey)
    end
    if pttl == -1 then
      local currentJobId = rcall('GET', deduplicationKey)
      if currentJobId and currentJobId == jobId then
        return rcall("DEL", deduplicationKey)
      end
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Functions to remove jobs by max age.
]]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
local function removeJobsByMaxAge(timestamp, maxAge, targetSet, prefix, maxLimit)
  local start = timestamp - maxAge * 1000
  local jobIds = rcall("ZREVRANGEBYSCORE", targetSet, start, "-inf", "LIMIT", 0, maxLimit)
  for i, jobId in ipairs(jobIds) do
    removeJob(jobId, false, prefix, false --[[remove debounce key]])
  end
  if #jobIds > 0 then
    if #jobIds < maxLimit then
      rcall("ZREMRANGEBYSCORE", targetSet, "-inf", start)
    else
      for from, to in batches(#jobIds, 7000) do
        rcall("ZREM", targetSet, unpack(jobIds, from, to))
      end
    end
  end
end
--[[
  Functions to remove jobs by max count.
]]
-- Includes
local function removeJobsByMaxCount(maxCount, targetSet, prefix)
  local start = maxCount
  local jobIds = rcall("ZREVRANGE", targetSet, start, -1)
  for i, jobId in ipairs(jobIds) do
    removeJob(jobId, false, prefix, false --[[remove debounce key]])
  end
  rcall("ZREMRANGEBYRANK", targetSet, 0, -(maxCount + 1))
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
--[[
  Function to create a new job from stored dedup-next data
  when a deduplicated job with keepLastIfActive finishes.
  At most one next job is created per deduplication ID.
  Multiple triggers while active overwrite the dedup-next data,
  so only the latest data is used.
]]
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to set the deduplication key for a job.
  Uses TTL from deduplication opts if provided.
]]
local function setDeduplicationKey(deduplicationKey, jobId, deduplicationOpts)
    local ttl = deduplicationOpts and deduplicationOpts['ttl']
    if ttl and ttl > 0 then
        rcall('SET', deduplicationKey, jobId, 'PX', ttl)
    else
        rcall('SET', deduplicationKey, jobId)
    end
end
--[[
  Shared helper to store a job and enqueue it into the appropriate list/set.
  Handles delayed, prioritized, and standard (LIFO/FIFO) jobs.
  Emits the appropriate event after enqueuing ("delayed" or "waiting").
  Returns delay, priority from storeJob.
]]
-- Includes
--[[
  Adds a delayed job to the queue by doing the following:
    - Creates a new job key with the job data.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
]]
-- Includes
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
local function addDelayedJob(jobId, delayedKey, eventsKey, timestamp,
  maxEvents, markerKey, delay)
  local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
  rcall("ZADD", delayedKey, score, jobId)
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(markerKey, delayedKey)
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
local function storeAndEnqueueJob(eventsKey, jobIdKey, jobId, name, data, opts,
    timestamp, parentKey, parentData, repeatJobKey, maxEvents,
    waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
    priorityCounterKey, delayedKey, markerKey)
  local delay, priority = storeJob(eventsKey, jobIdKey, jobId, name, data,
      opts, timestamp, parentKey, parentData, repeatJobKey)
  if delay ~= 0 and delayedKey then
    addDelayedJob(jobId, delayedKey, eventsKey, timestamp, maxEvents, markerKey, delay)
  else
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    if priority > 0 then
      addJobWithPriority(markerKey, prioritizedKey, priority, jobId,
          priorityCounterKey, isPausedOrMaxed)
    else
      local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
      addJobInTargetList(target, markerKey, pushCmd, isPausedOrMaxed, jobId)
    end
    rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
        "jobId", jobId)
  end
  return delay, priority
end
local function requeueDeduplicatedJob(prefix, deduplicationId, eventStreamKey,
    metaKey, activeKey, waitKey, pausedKey, markerKey, prioritizedKey,
    priorityCounterKey, delayedKey, timestamp)
  local deduplicationNextKey = prefix .. "dn:" .. deduplicationId
  if rcall("EXISTS", deduplicationNextKey) == 1 then
    local nextData = rcall("HMGET", deduplicationNextKey,
        "name", "data", "opts", "pk", "pd", "pdk", "rjk", "jid")
    -- Always increment the counter to keep it monotonic
    local nextId = rcall("INCR", prefix .. "id") .. ""
    local storedJobId = nextData[8] -- index 8 = "jid" (8th field in the HMGET call above)
    local newJobId
    if storedJobId then
      newJobId = storedJobId
    else
      newJobId = nextId
    end
    local newJobIdKey = prefix .. newJobId
    local newOpts = cjson.decode(nextData[3])
    local deduplicationKey = prefix .. "de:" .. deduplicationId
    local parentKey = nextData[4] or nil
    local parentData = nextData[5] or nil
    local parentDependenciesKey = nextData[6] or nil
    local repeatJobKey = nextData[7] or nil
    -- Set dedup key for the new job (without TTL when keepLastIfActive,
    -- so the key outlives the job's active duration)
    local deOpts = newOpts['de']
    if deOpts and deOpts['keepLastIfActive'] then
      rcall('SET', deduplicationKey, newJobId)
    else
      setDeduplicationKey(deduplicationKey, newJobId, deOpts)
    end
    -- Store and enqueue using the shared helper (handles priority/lifo/delayed)
    local maxEvents = getOrSetMaxEvents(metaKey)
    storeAndEnqueueJob(eventStreamKey, newJobIdKey, newJobId, nextData[1], nextData[2],
        newOpts, timestamp, parentKey, parentData, repeatJobKey, maxEvents,
        waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
        priorityCounterKey, delayedKey, markerKey)
    -- Register as child dependency if the job has a parent
    if parentDependenciesKey then
      rcall("SADD", parentDependenciesKey, newJobIdKey)
    end
    -- Only delete the dedup-next hash after the job is fully created,
    -- so that if any step above errors, the data is not permanently lost.
    rcall("DEL", deduplicationNextKey)
  end
end
--[[
  Function to trim events, default 10000.
]]
-- Includes
local function trimEvents(metaKey, eventStreamKey)
  local maxEvents = getOrSetMaxEvents(metaKey)
  if maxEvents then
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", maxEvents)
  else
    rcall("XTRIM", eventStreamKey, "MAXLEN", "~", 10000)
  end
end
--[[
  Validate and move or add dependencies to parent.
]]
-- Includes
local function updateParentDepsIfNeeded(parentKey, parentQueueKey, parentDependenciesKey,
  parentId, jobIdKey, returnvalue, timestamp )
  local processedSet = parentKey .. ":processed"
  rcall("HSET", processedSet, jobIdKey, returnvalue)
  moveParentToWaitIfNoPendingDependencies(parentQueueKey, parentDependenciesKey, parentKey, parentId, timestamp)
end
--[[
  Function to update a bunch of fields in a job.
]]
local function updateJobFields(jobKey, msgpackedFields)
  if msgpackedFields and #msgpackedFields > 0 then
    local fieldsToUpdate = cmsgpack.unpack(msgpackedFields)
    if fieldsToUpdate then
      rcall("HMSET", jobKey, unpack(fieldsToUpdate))
    end
  end
end
local jobIdKey = KEYS[12]
if rcall("EXISTS", jobIdKey) == 1 then -- Make sure job exists
    -- Make sure it does not have pending dependencies
    -- It must happen before removing lock
    if ARGV[5] == "completed" then
        if rcall("SCARD", jobIdKey .. ":dependencies") ~= 0 then
            return -4
        end
        if rcall("ZCARD", jobIdKey .. ":unsuccessful") ~= 0 then
            return -9
        end
    end
    local opts = cmsgpack.unpack(ARGV[8])
    local token = opts['token']
    local errorCode = removeLock(jobIdKey, KEYS[5], token, ARGV[1])
    if errorCode < 0 then
        return errorCode
    end
    updateJobFields(jobIdKey, ARGV[9]);
    local attempts = opts['attempts']
    local maxMetricsSize = opts['maxMetricsSize']
    local maxCount = opts['keepJobs']['count']
    local maxAge = opts['keepJobs']['age']
    local maxLimit = opts['keepJobs']['limit'] or 1000
    local jobAttributes = rcall("HMGET", jobIdKey, "parentKey", "parent", "deid")
    local parentKey = jobAttributes[1] or ""
    local parentId = ""
    local parentQueueKey = ""
    if jobAttributes[2] then -- TODO: need to revisit this logic if it's still needed
        local jsonDecodedParent = cjson.decode(jobAttributes[2])
        parentId = jsonDecodedParent['id']
        parentQueueKey = jsonDecodedParent['queueKey']
    end
    local jobId = ARGV[1]
    local timestamp = ARGV[2]
    -- Remove from active list (if not active we shall return error)
    local numRemovedElements = rcall("LREM", KEYS[2], -1, jobId)
    if (numRemovedElements < 1) then
        return -3
    end
    local eventStreamKey = KEYS[4]
    local metaKey = KEYS[9]
    -- Trim events before emitting them to avoid trimming events emitted in this script
    trimEvents(metaKey, eventStreamKey)
    local prefix = ARGV[7]
    removeDeduplicationKeyIfNeededOnFinalization(prefix, jobAttributes[3], jobId)
    -- Check if there is requeue data for this dedup ID (keepLastIfActive mode)
    if jobAttributes[3] then
      requeueDeduplicatedJob(prefix, jobAttributes[3], eventStreamKey,
          metaKey, KEYS[2], KEYS[1], KEYS[8], KEYS[14], KEYS[3], KEYS[10],
          KEYS[7], timestamp)
    end
    -- If job has a parent we need to
    -- 1) remove this job id from parents dependencies
    -- 2) move the job Id to parent "processed" set
    -- 3) push the results into parent "results" list
    -- 4) if parent's dependencies is empty, then move parent to "wait/paused". Note it may be a different queue!.
    if parentId == "" and parentKey ~= "" then
        parentId = getJobIdFromKey(parentKey)
        parentQueueKey = getJobKeyPrefix(parentKey, ":" .. parentId)
    end
    if parentId ~= "" then
        if ARGV[5] == "completed" then
            local dependenciesSet = parentKey .. ":dependencies"
            if rcall("SREM", dependenciesSet, jobIdKey) == 1 then
                updateParentDepsIfNeeded(parentKey, parentQueueKey, dependenciesSet, parentId, jobIdKey, ARGV[4],
                    timestamp)
            end
        else
            moveChildFromDependenciesIfNeeded(jobAttributes[2], jobIdKey, ARGV[4], timestamp)
        end
    end
    local attemptsMade = rcall("HINCRBY", jobIdKey, "atm", 1)
    -- Remove job?
    if maxCount ~= 0 then
        local targetSet = KEYS[11]
        -- Add to complete/failed set
        rcall("ZADD", targetSet, timestamp, jobId)
        rcall("HSET", jobIdKey, ARGV[3], ARGV[4], "finishedOn", timestamp)
        -- "returnvalue" / "failedReason" and "finishedOn"
        if ARGV[5] == "failed" then
            rcall("HDEL", jobIdKey, "defa")
        end
        -- Remove old jobs?
        if maxAge ~= nil then
            removeJobsByMaxAge(timestamp, maxAge, targetSet, prefix, maxLimit)
        end
        if maxCount ~= nil and maxCount > 0 then
            removeJobsByMaxCount(maxCount, targetSet, prefix)
        end
    else
        removeJobKeys(jobIdKey)
        if parentKey ~= "" then
            -- TODO: when a child is removed when finished, result or failure in parent
            -- must not be deleted, those value references should be deleted when the parent
            -- is deleted
            removeParentDependencyKey(jobIdKey, false, parentKey, jobAttributes[3])
        end
    end
    rcall("XADD", eventStreamKey, "*", "event", ARGV[5], "jobId", jobId, ARGV[3], ARGV[4], "prev", "active")
    if ARGV[5] == "failed" then
        if tonumber(attemptsMade) >= tonumber(attempts) then
            rcall("XADD", eventStreamKey, "*", "event", "retries-exhausted", "jobId", jobId, "attemptsMade",
                attemptsMade)
        end
    end
    -- Collect metrics
    if maxMetricsSize ~= "" then
        collectMetrics(KEYS[13], KEYS[13] .. ':data', maxMetricsSize, timestamp)
    end
    -- Try to get next job to avoid an extra roundtrip if the queue is not closing,
    -- and not rate limited.
    if (ARGV[6] == "1") then
        local result = fetchNextJob(KEYS[1], KEYS[2], KEYS[3], eventStreamKey,
            KEYS[6], KEYS[7], KEYS[8], metaKey, KEYS[10], KEYS[14], prefix,
            timestamp, opts)
        if result then
            return result
        end
    end
    local waitLen = rcall("LLEN", KEYS[1])
    if waitLen == 0 then
        local activeLen = rcall("LLEN", KEYS[2])
        if activeLen == 0 then
            local prioritizedLen = rcall("ZCARD", KEYS[3])
            if prioritizedLen == 0 then
                rcall("XADD", eventStreamKey, "*", "event", "drained")
            end
        end
    end
    return 0
else
    return -1
end
`,keys:14},q={name:"moveToWaitingChildren",content:`--[[
  Moves job from active to waiting children set.
  Input:
    KEYS[1] active key
    KEYS[2] wait-children key
    KEYS[3] job key
    KEYS[4] job dependencies key
    KEYS[5] job unsuccessful key
    KEYS[6] stalled key
    KEYS[7] events key
    ARGV[1] token
    ARGV[2] child key
    ARGV[3] timestamp
    ARGV[4] jobId
    ARGV[5] prefix
  Output:
    0 - OK
    1 - There are not pending dependencies.
   -1 - Missing job.
   -2 - Missing lock
   -3 - Job not in active set
   -9 - Job has failed children
]]
local rcall = redis.call
local activeKey = KEYS[1]
local waitingChildrenKey = KEYS[2]
local jobKey = KEYS[3]
local jobDependenciesKey = KEYS[4]
local jobUnsuccessfulKey = KEYS[5]
local stalledKey = KEYS[6]
local eventStreamKey = KEYS[7]
local token = ARGV[1]
local timestamp = ARGV[3]
local jobId = ARGV[4]
--- Includes
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
local function removeJobFromActive(activeKey, stalledKey, jobKey, jobId,
    token)
  local errorCode = removeLock(jobKey, stalledKey, token, jobId)
  if errorCode < 0 then
    return errorCode
  end
  local numRemovedElements = rcall("LREM", activeKey, -1, jobId)
  if numRemovedElements < 1 then
    return -3
  end
  return 0
end
local function moveToWaitingChildren(activeKey, waitingChildrenKey, stalledKey, eventStreamKey,
    jobKey, jobId, timestamp, token)
  local errorCode = removeJobFromActive(activeKey, stalledKey, jobKey, jobId, token)
  if errorCode < 0 then
    return errorCode
  end
  local score = tonumber(timestamp)
  rcall("ZADD", waitingChildrenKey, score, jobId)
  rcall("XADD", eventStreamKey, "*", "event", "waiting-children", "jobId", jobId, 'prev', 'active')
  return 0
end
if rcall("EXISTS", jobKey) == 1 then
  if rcall("ZCARD", jobUnsuccessfulKey) ~= 0 then
    return -9
  else
    if ARGV[2] ~= "" then
      if rcall("SISMEMBER", jobDependenciesKey, ARGV[2]) ~= 0 then
        return moveToWaitingChildren(activeKey, waitingChildrenKey, stalledKey, eventStreamKey,
          jobKey, jobId, timestamp, token)
      end
      return 1
    else
      if rcall("SCARD", jobDependenciesKey) ~= 0 then 
        return moveToWaitingChildren(activeKey, waitingChildrenKey, stalledKey, eventStreamKey,
          jobKey, jobId, timestamp, token)
      end
      return 1
    end    
  end
end
return -1
`,keys:7},V={name:"obliterate",content:`--[[
  Completely obliterates a queue and all of its contents
  This command completely destroys a queue including all of its jobs, current or past 
  leaving no trace of its existence. Since this script needs to iterate to find all the job
  keys, consider that this call may be slow for very large queues.
  The queue needs to be "paused" or it will return an error
  If the queue has currently active jobs then the script by default will return error,
  however this behaviour can be overridden using the 'force' option.
  Input:
    KEYS[1] meta
    KEYS[2] base
    ARGV[1] count
    ARGV[2] force
]]
local maxCount = tonumber(ARGV[1])
local baseKey = KEYS[2]
local rcall = redis.call
-- Includes
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to remove job.
]]
-- Includes
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local function removeJob(jobId, hard, baseKey, shouldRemoveDeduplicationKey)
  local jobKey = baseKey .. jobId
  removeParentDependencyKey(jobKey, hard, nil, baseKey)
  if shouldRemoveDeduplicationKey then
    local deduplicationId = rcall("HGET", jobKey, "deid")
    removeDeduplicationKeyIfNeededOnRemoval(baseKey, jobId, deduplicationId)
  end
  removeJobKeys(jobKey)
end
local function removeJobs(keys, hard, baseKey, max)
  for i, key in ipairs(keys) do
    removeJob(key, hard, baseKey, true --[[remove debounce key]])
  end
  return max - #keys
end
--[[
  Functions to remove jobs.
]]
-- Includes
--[[
  Function to filter out jobs to ignore from a table.
]]
local function filterOutJobsToIgnore(jobs, jobsToIgnore)
  local filteredJobs = {}
  for i = 1, #jobs do
    if not jobsToIgnore[jobs[i]] then
      table.insert(filteredJobs, jobs[i])
    end
  end
  return filteredJobs
end
local function getListItems(keyName, max)
  return rcall('LRANGE', keyName, 0, max - 1)
end
local function removeListJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getListItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  rcall("LTRIM", keyName, #jobs, -1)
  return count
end
-- Includes
--[[
  Function to loop in batches.
  Just a bit of warning, some commands as ZREM
  could receive a maximum of 7000 parameters per call.
]]
local function batches(n, batchSize)
  local i = 0
  return function()
    local from = i * batchSize + 1
    i = i + 1
    if (from <= n) then
      local to = math.min(from + batchSize - 1, n)
      return from, to
    end
  end
end
--[[
  Function to get ZSet items.
]]
local function getZSetItems(keyName, max)
  return rcall('ZRANGE', keyName, 0, max - 1)
end
local function removeZSetJobs(keyName, hard, baseKey, max, jobsToIgnore)
  local jobs = getZSetItems(keyName, max)
  if jobsToIgnore then
    jobs = filterOutJobsToIgnore(jobs, jobsToIgnore)
  end
  local count = removeJobs(jobs, hard, baseKey, max)
  if(#jobs > 0) then
    for from, to in batches(#jobs, 7000) do
      rcall("ZREM", keyName, unpack(jobs, from, to))
    end
  end
  return count
end
local function removeLockKeys(keys)
  for i, key in ipairs(keys) do
    rcall("DEL", baseKey .. key .. ':lock')
  end
end
-- 1) Check if paused, if not return with error.
if rcall("HEXISTS", KEYS[1], "paused") ~= 1 then
  return -1 -- Error, NotPaused
end
-- 2) Check if there are active jobs, if there are and not "force" return error.
local activeKey = baseKey .. 'active'
local activeJobs = getListItems(activeKey, maxCount)
if (#activeJobs > 0) then
  if(ARGV[2] == "") then 
    return -2 -- Error, ExistActiveJobs
  end
end
removeLockKeys(activeJobs)
maxCount = removeJobs(activeJobs, true, baseKey, maxCount)
rcall("LTRIM", activeKey, #activeJobs, -1)
if(maxCount <= 0) then
  return 1
end
local delayedKey = baseKey .. 'delayed'
maxCount = removeZSetJobs(delayedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local repeatKey = baseKey .. 'repeat'
local repeatJobsIds = getZSetItems(repeatKey, maxCount)
for i, key in ipairs(repeatJobsIds) do
  local jobKey = repeatKey .. ":" .. key
  rcall("DEL", jobKey)
end
if(#repeatJobsIds > 0) then
  for from, to in batches(#repeatJobsIds, 7000) do
    rcall("ZREM", repeatKey, unpack(repeatJobsIds, from, to))
  end
end
maxCount = maxCount - #repeatJobsIds
if(maxCount <= 0) then
  return 1
end
local completedKey = baseKey .. 'completed'
maxCount = removeZSetJobs(completedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local pausedKey = baseKey .. 'paused'
maxCount = removeListJobs(pausedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local prioritizedKey = baseKey .. 'prioritized'
maxCount = removeZSetJobs(prioritizedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
local failedKey = baseKey .. 'failed'
maxCount = removeZSetJobs(failedKey, true, baseKey, maxCount)
if(maxCount <= 0) then
  return 1
end
if(maxCount > 0) then
  rcall("DEL",
    baseKey .. 'events',
    baseKey .. 'delay',
    baseKey .. 'stalled-check',
    baseKey .. 'stalled',
    baseKey .. 'id',
    baseKey .. 'pc',
    baseKey .. 'marker',
    baseKey .. 'meta',
    baseKey .. 'metrics:completed',
    baseKey .. 'metrics:completed:data',
    baseKey .. 'metrics:failed',
    baseKey .. 'metrics:failed:data')
  return 0
else
  return 1
end
`,keys:2},B={name:"paginate",content:`--[[
    Paginate a set or hash
    Input:
      KEYS[1] key pointing to the set or hash to be paginated.
      ARGV[1]  page start offset
      ARGV[2]  page end offset (-1 for all the elements)
      ARGV[3]  cursor
      ARGV[4]  offset
      ARGV[5]  max iterations
      ARGV[6]  fetch jobs?
    Output:
      [cursor, offset, items, numItems]
]]
local rcall = redis.call
-- Includes
--[[
  Function to achieve pagination for a set or hash.
  This function simulates pagination in the most efficient way possible
  for a set using sscan or hscan.
  The main limitation is that sets are not order preserving, so the
  pagination is not stable. This means that if the set is modified
  between pages, the same element may appear in different pages.
]] -- Maximum number of elements to be returned by sscan per iteration.
local maxCount = 100
-- Finds the cursor, and returns the first elements available for the requested page.
local function findPage(key, command, pageStart, pageSize, cursor, offset,
                        maxIterations, fetchJobs)
    local items = {}
    local jobs = {}
    local iterations = 0
    repeat
        -- Iterate over the set using sscan/hscan.
        local result = rcall(command, key, cursor, "COUNT", maxCount)
        cursor = result[1]
        local members = result[2]
        local step = 1
        if command == "HSCAN" then
            step = 2
        end
        if #members == 0 then
            -- If the result is empty, we can return the result.
            return cursor, offset, items, jobs
        end
        local chunkStart = offset
        local chunkEnd = offset + #members / step
        local pageEnd = pageStart + pageSize
        if chunkEnd < pageStart then
            -- If the chunk is before the page, we can skip it.
            offset = chunkEnd
        elseif chunkStart > pageEnd then
            -- If the chunk is after the page, we can return the result.
            return cursor, offset, items, jobs
        else
            -- If the chunk is overlapping the page, we need to add the elements to the result.
            for i = 1, #members, step do
                if offset >= pageEnd then
                    return cursor, offset, items, jobs
                end
                if offset >= pageStart then
                    local index = #items + 1
                    if fetchJobs ~= nil then
                        jobs[#jobs+1] = rcall("HGETALL", members[i])
                    end
                    if step == 2 then
                        items[index] = {members[i], members[i + 1]}
                    else
                        items[index] = members[i]
                    end
                end
                offset = offset + 1
            end
        end
        iterations = iterations + 1
    until cursor == "0" or iterations >= maxIterations
    return cursor, offset, items, jobs
end
local key = KEYS[1]
local scanCommand = "SSCAN"
local countCommand = "SCARD"
local type = rcall("TYPE", key)["ok"]
if type == "none" then
    return {0, 0, {}, 0}
elseif type == "hash" then
    scanCommand = "HSCAN"
    countCommand = "HLEN"
elseif type ~= "set" then
    return
        redis.error_reply("Pagination is only supported for sets and hashes.")
end
local numItems = rcall(countCommand, key)
local startOffset = tonumber(ARGV[1])
local endOffset = tonumber(ARGV[2])
if endOffset == -1 then 
  endOffset = numItems
end
local pageSize = (endOffset - startOffset) + 1
local cursor, offset, items, jobs = findPage(key, scanCommand, startOffset,
                                       pageSize, ARGV[3], tonumber(ARGV[4]),
                                       tonumber(ARGV[5]), ARGV[6])
return {cursor, offset, items, numItems, jobs}
`,keys:1},Y={name:"pause",content:`--[[
  Pauses or resumes a queue globally.
  Input:
    KEYS[1] 'wait' or 'paused'
    KEYS[2] 'paused' or 'wait'
    KEYS[3] 'meta'
    KEYS[4] 'prioritized'
    KEYS[5] events stream key
    KEYS[6] 'delayed'
    KEYS[7] 'marker'
    ARGV[1] 'paused' or 'resumed'
  Event:
    publish paused or resumed event.
]]
local rcall = redis.call
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
local markerKey = KEYS[7]
local hasJobs = rcall("EXISTS", KEYS[1]) == 1
--TODO: check this logic to be reused when changing a delay
if hasJobs then rcall("RENAME", KEYS[1], KEYS[2]) end
if ARGV[1] == "paused" then
    rcall("HSET", KEYS[3], "paused", 1)
    rcall("DEL", markerKey)
else
    rcall("HDEL", KEYS[3], "paused")
    if hasJobs or rcall("ZCARD", KEYS[4]) > 0 then
        -- Add marker if there are waiting or priority jobs
        rcall("ZADD", markerKey, 0, "0")
    else
        addDelayMarkerIfNeeded(markerKey, KEYS[6])
    end
end
rcall("XADD", KEYS[5], "*", "event", ARGV[1]);
`,keys:7},z={name:"promote",content:`--[[
  Promotes a job that is currently "delayed" to the "waiting" state
    Input:
      KEYS[1] 'delayed'
      KEYS[2] 'wait'
      KEYS[3] 'paused'
      KEYS[4] 'meta'
      KEYS[5] 'prioritized'
      KEYS[6] 'active'
      KEYS[7] 'pc' priority counter
      KEYS[8] 'event stream'
      KEYS[9] 'marker'
      ARGV[1]  queue.toKey('')
      ARGV[2]  jobId
    Output:
       0 - OK
      -3 - Job not in delayed zset.
    Events:
      'waiting'
]]
local rcall = redis.call
local jobId = ARGV[2]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
if rcall("ZREM", KEYS[1], jobId) == 1 then
    local jobKey = ARGV[1] .. jobId
    local priority = tonumber(rcall("HGET", jobKey, "priority")) or 0
    local metaKey = KEYS[4]
    local markerKey = KEYS[9]
    -- Remove delayed "marker" from the wait list if there is any.
    -- Since we are adding a job we do not need the marker anymore.
    -- Markers in waitlist DEPRECATED in v5: Remove in v6.
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, KEYS[6], KEYS[2], KEYS[3])
    local marker = rcall("LINDEX", target, 0)
    if marker and string.sub(marker, 1, 2) == "0:" then rcall("LPOP", target) end
    if priority == 0 then
        -- LIFO or FIFO
        addJobInTargetList(target, markerKey, "LPUSH", isPausedOrMaxed, jobId)
    else
        addJobWithPriority(markerKey, KEYS[5], priority, jobId, KEYS[7], isPausedOrMaxed)
    end
    rcall("XADD", KEYS[8], "*", "event", "waiting", "jobId", jobId, "prev",
          "delayed");
    rcall("HSET", jobKey, "delay", 0)
    return 0
else
    return -3
end
`,keys:9},U={name:"releaseLock",content:`--[[
  Release lock
    Input:
      KEYS[1] 'lock',
      ARGV[1]  token
      ARGV[2]  lock duration in milliseconds
    Output:
      "OK" if lock extended successfully.
]]
local rcall = redis.call
if rcall("GET", KEYS[1]) == ARGV[1] then
  return rcall("DEL", KEYS[1])
else
  return 0
end
`,keys:1},W={name:"removeChildDependency",content:`--[[
  Break parent-child dependency by removing
  child reference from parent
  Input:
    KEYS[1] 'key' prefix,
    ARGV[1] job key
    ARGV[2] parent key
    Output:
       0  - OK
       1  - There is not relationship.
      -1  - Missing job key
      -5  - Missing parent key
]]
local rcall = redis.call
local jobKey = ARGV[1]
local parentKey = ARGV[2]
-- Includes
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
if rcall("EXISTS", jobKey) ~= 1 then return -1 end
if rcall("EXISTS", parentKey) ~= 1 then return -5 end
if removeParentDependencyKey(jobKey, false, parentKey, KEYS[1], nil) then
  rcall("HDEL", jobKey, "parentKey", "parent")
  return 0
else
  return 1
end`,keys:1},Q={name:"removeDeduplicationKey",content:`--[[
  Remove deduplication key if it matches the job id.
  Input:
    KEYS[1] deduplication key
    ARGV[1] job id
  Output:
    0 - false
    1 - true
]]
local rcall = redis.call
local deduplicationKey = KEYS[1]
local jobId = ARGV[1]
local currentJobId = rcall('GET', deduplicationKey)
if currentJobId and currentJobId == jobId then
  return rcall("DEL", deduplicationKey)
end
return 0
`,keys:1},H={name:"removeJob",content:`--[[
    Remove a job from all the statuses it may be in as well as all its data.
    In order to be able to remove a job, it cannot be active.
    Input:
      KEYS[1] jobKey
      KEYS[2] repeat key
      ARGV[1] jobId
      ARGV[2] remove children
      ARGV[3] queue prefix
    Events:
      'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Function to check if the job belongs to a job scheduler and
  current delayed job matches with jobId
]]
local function isJobSchedulerJob(jobId, jobKey, jobSchedulersKey)
  local repeatJobKey = rcall("HGET", jobKey, "rjk")
  if repeatJobKey  then
    local prevMillis = rcall("ZSCORE", jobSchedulersKey, repeatJobKey)
    if prevMillis then
      local currentDelayedJobId = "repeat:" .. repeatJobKey .. ":" .. prevMillis
      return jobId == currentDelayedJobId
    end
  end
  return false
end
--[[
  Function to recursively check if there are no locks
  on the jobs to be removed.
  returns:
    boolean
]]
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
local function isLocked( prefix, jobId, removeChildren)
  local jobKey = prefix .. jobId;
  -- Check if this job is locked
  local lockKey = jobKey .. ':lock'
  local lock = rcall("GET", lockKey)
  if not lock then
    if removeChildren == "1" then
      local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
      if (#dependencies > 0) then
        for i, childJobKey in ipairs(dependencies) do
          -- We need to get the jobId for this job.
          local childJobId = getJobIdFromKey(childJobKey)
          local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
          local result = isLocked( childJobPrefix, childJobId, removeChildren )
          if result then
            return true
          end
        end
      end
    end
    return false
  end
  return true
end
--[[
    Remove a job from all the statuses it may be in as well as all its data,
    including its children. Active children can be ignored.
    Events:
      'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove from any state.
  returns:
    prev state
]]
local function removeJobFromAnyState( prefix, jobId)
  -- We start with the ZSCORE checks, since they have O(1) complexity
  if rcall("ZSCORE", prefix .. "completed", jobId) then
    rcall("ZREM", prefix .. "completed", jobId)
    return "completed"
  elseif rcall("ZSCORE", prefix .. "waiting-children", jobId) then
    rcall("ZREM", prefix .. "waiting-children", jobId)
    return "waiting-children"
  elseif rcall("ZSCORE", prefix .. "delayed", jobId) then
    rcall("ZREM", prefix .. "delayed", jobId)
    return "delayed"
  elseif rcall("ZSCORE", prefix .. "failed", jobId) then
    rcall("ZREM", prefix .. "failed", jobId)
    return "failed"
  elseif rcall("ZSCORE", prefix .. "prioritized", jobId) then
    rcall("ZREM", prefix .. "prioritized", jobId)
    return "prioritized"
  -- We remove only 1 element from the list, since we assume they are not added multiple times
  elseif rcall("LREM", prefix .. "wait", 1, jobId) == 1 then
    return "wait"
  elseif rcall("LREM", prefix .. "paused", 1, jobId) == 1 then
    return "paused"
  elseif rcall("LREM", prefix .. "active", 1, jobId) == 1 then
    return "active"
  end
  return "unknown"
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
local removeJobChildren
local removeJobWithChildren
removeJobChildren = function(prefix, jobKey, options)
    -- Check if this job has children
    -- If so, we are going to try to remove the children recursively in a depth-first way
    -- because if some job is locked, we must exit with an error.
    if not options.ignoreProcessed then
        local processed = rcall("HGETALL", jobKey .. ":processed")
        if #processed > 0 then
            for i = 1, #processed, 2 do
                local childJobId = getJobIdFromKey(processed[i])
                local childJobPrefix = getJobKeyPrefix(processed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local failed = rcall("HGETALL", jobKey .. ":failed")
        if #failed > 0 then
            for i = 1, #failed, 2 do
                local childJobId = getJobIdFromKey(failed[i])
                local childJobPrefix = getJobKeyPrefix(failed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local unsuccessful = rcall("ZRANGE", jobKey .. ":unsuccessful", 0, -1)
        if #unsuccessful > 0 then
            for i = 1, #unsuccessful, 1 do
                local childJobId = getJobIdFromKey(unsuccessful[i])
                local childJobPrefix = getJobKeyPrefix(unsuccessful[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
    end
    local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
    if #dependencies > 0 then
        for i, childJobKey in ipairs(dependencies) do
            local childJobId = getJobIdFromKey(childJobKey)
            local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
            removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
        end
    end
end
removeJobWithChildren = function(prefix, jobId, parentKey, options)
    local jobKey = prefix .. jobId
    if options.ignoreLocked then
        if isLocked(prefix, jobId) then
            return
        end
    end
    -- Check if job is in the failed zset
    local failedSet = prefix .. "failed"
    if not (options.ignoreProcessed and rcall("ZSCORE", failedSet, jobId)) then
        removeParentDependencyKey(jobKey, false, parentKey, nil)
        if options.removeChildren then
            removeJobChildren(prefix, jobKey, options)
        end
        local prev = removeJobFromAnyState(prefix, jobId)
        local deduplicationId = rcall("HGET", jobKey, "deid")
        removeDeduplicationKeyIfNeededOnRemoval(prefix, jobId, deduplicationId)
        if removeJobKeys(jobKey) > 0 then
            local metaKey = prefix .. "meta"
            local maxEvents = getOrSetMaxEvents(metaKey)
            rcall("XADD", prefix .. "events", "MAXLEN", "~", maxEvents, "*", "event", "removed",
                "jobId", jobId, "prev", prev)
        end
    end
end
local jobId = ARGV[1]
local shouldRemoveChildren = ARGV[2]
local prefix = ARGV[3]
local jobKey = KEYS[1]
local repeatKey = KEYS[2]
if isJobSchedulerJob(jobId, jobKey, repeatKey) then
    return -8
end
if not isLocked(prefix, jobId, shouldRemoveChildren) then
    local options = {
        removeChildren = shouldRemoveChildren == "1",
        ignoreProcessed = false,
        ignoreLocked = false
    }
    removeJobWithChildren(prefix, jobId, nil, options)
    return 1
end
return 0
`,keys:2},Z={name:"removeJobScheduler",content:`--[[
  Removes a job scheduler and its next scheduled job.
  Input:
    KEYS[1] job schedulers key
    KEYS[2] delayed jobs key
    KEYS[3] events key
    ARGV[1] job scheduler id
    ARGV[2] prefix key
  Output:
    0 - OK
    1 - Missing repeat job
  Events:
    'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
local jobSchedulerId = ARGV[1]
local prefix = ARGV[2]
local millis = rcall("ZSCORE", KEYS[1], jobSchedulerId)
if millis then
  -- Delete next programmed job.
  local delayedJobId = "repeat:" .. jobSchedulerId .. ":" .. millis
  if(rcall("ZREM", KEYS[2], delayedJobId) == 1) then
    removeJobKeys(prefix .. delayedJobId)
    rcall("XADD", KEYS[3], "*", "event", "removed", "jobId", delayedJobId, "prev", "delayed")
  end
end
if(rcall("ZREM", KEYS[1], jobSchedulerId) == 1) then
  rcall("DEL", KEYS[1] .. ":" .. jobSchedulerId)
  return 0
end
return 1
`,keys:3},X={name:"removeOrphanedJobs",content:`--[[
  Removes orphaned job keys that exist in Redis but are not referenced
  in any queue state set. Checks each candidate atomically.
  Input:
    KEYS[1]  base prefix key including trailing colon (e.g. bull:queueName:)
    ARGV[1]  number of state key suffixes
    ARGV[2 .. 1+N]  state key suffixes (e.g. active, wait, completed, ...)
    ARGV[2+N]  number of job sub-key suffixes
    ARGV[3+N .. 2+N+M]  job sub-key suffixes (e.g. logs, dependencies, ...)
    ARGV[3+N+M .. end]  candidate job IDs to check
  Output:
    number of removed jobs
]]
local rcall = redis.call
local basePrefix = KEYS[1]
-- Parse state key suffixes and cache their full key names + types.
local stateKeyCount = tonumber(ARGV[1])
local stateKeys = {}
local stateKeyTypes = {}
for i = 1, stateKeyCount do
  local fullKey = basePrefix .. ARGV[1 + i]
  stateKeys[i] = fullKey
  stateKeyTypes[i] = rcall('TYPE', fullKey)['ok']
end
-- Parse job sub-key suffixes.
local subKeyCountIdx = 2 + stateKeyCount
local subKeyCount = tonumber(ARGV[subKeyCountIdx])
local subKeySuffixes = {}
for i = 1, subKeyCount do
  subKeySuffixes[i] = ARGV[subKeyCountIdx + i]
end
-- Process candidate job IDs.
local candidateStart = subKeyCountIdx + subKeyCount + 1
local removedCount = 0
for c = candidateStart, #ARGV do
  local jobId = ARGV[c]
  local found = false
  for i = 1, stateKeyCount do
    local kt = stateKeyTypes[i]
    if kt == 'list' then
      if rcall('LPOS', stateKeys[i], jobId) then
        found = true
        break
      end
    elseif kt == 'zset' then
      if rcall('ZSCORE', stateKeys[i], jobId) then
        found = true
        break
      end
    elseif kt == 'set' then
      if rcall('SISMEMBER', stateKeys[i], jobId) == 1 then
        found = true
        break
      end
    end
  end
  if not found then
    local jobKey = basePrefix .. jobId
    local keysToDelete = { jobKey }
    for _, suffix in ipairs(subKeySuffixes) do
      keysToDelete[#keysToDelete + 1] = jobKey .. ':' .. suffix
    end
    rcall('DEL', unpack(keysToDelete))
    removedCount = removedCount + 1
  end
end
return removedCount
`,keys:1},$={name:"removeRepeatable",content:`--[[
  Removes a repeatable job
  Input:
    KEYS[1] repeat jobs key
    KEYS[2] delayed jobs key
    KEYS[3] events key
    ARGV[1] old repeat job id
    ARGV[2] options concat
    ARGV[3] repeat job key
    ARGV[4] prefix key
  Output:
    0 - OK
    1 - Missing repeat job
  Events:
    'removed'
]]
local rcall = redis.call
local millis = rcall("ZSCORE", KEYS[1], ARGV[2])
-- Includes
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
-- legacy removal TODO: remove in next breaking change
if millis then
  -- Delete next programmed job.
  local repeatJobId = ARGV[1] .. millis
  if(rcall("ZREM", KEYS[2], repeatJobId) == 1) then
    removeJobKeys(ARGV[4] .. repeatJobId)
    rcall("XADD", KEYS[3], "*", "event", "removed", "jobId", repeatJobId, "prev", "delayed");
  end
end
if(rcall("ZREM", KEYS[1], ARGV[2]) == 1) then
  return 0
end
-- new removal
millis = rcall("ZSCORE", KEYS[1], ARGV[3])
if millis then
  -- Delete next programmed job.
  local repeatJobId = "repeat:" .. ARGV[3] .. ":" .. millis
  if(rcall("ZREM", KEYS[2], repeatJobId) == 1) then
    removeJobKeys(ARGV[4] .. repeatJobId)
    rcall("XADD", KEYS[3], "*", "event", "removed", "jobId", repeatJobId, "prev", "delayed")
  end
end
if(rcall("ZREM", KEYS[1], ARGV[3]) == 1) then
  rcall("DEL", KEYS[1] .. ":" .. ARGV[3])
  return 0
end
return 1
`,keys:3},ee={name:"removeUnprocessedChildren",content:`--[[
    Remove a job from all the statuses it may be in as well as all its data.
    In order to be able to remove a job, it cannot be active.
    Input:
      KEYS[1] jobKey
      KEYS[2] meta key
      ARGV[1] prefix
      ARGV[2] jobId
    Events:
      'removed' for every children removed
]]
-- Includes
--[[
    Remove a job from all the statuses it may be in as well as all its data,
    including its children. Active children can be ignored.
    Events:
      'removed'
]]
local rcall = redis.call
-- Includes
--[[
  Functions to destructure job key.
  Just a bit of warning, these functions may be a bit slow and affect performance significantly.
]]
local getJobIdFromKey = function (jobKey)
  return string.match(jobKey, ".*:(.*)")
end
local getJobKeyPrefix = function (jobKey, jobId)
  return string.sub(jobKey, 0, #jobKey - #jobId)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check if the job belongs to a job scheduler and
  current delayed job matches with jobId
]]
local function isJobSchedulerJob(jobId, jobKey, jobSchedulersKey)
  local repeatJobKey = rcall("HGET", jobKey, "rjk")
  if repeatJobKey  then
    local prevMillis = rcall("ZSCORE", jobSchedulersKey, repeatJobKey)
    if prevMillis then
      local currentDelayedJobId = "repeat:" .. repeatJobKey .. ":" .. prevMillis
      return jobId == currentDelayedJobId
    end
  end
  return false
end
--[[
  Function to remove deduplication key if needed
  when a job is being removed.
]]
local function removeDeduplicationKeyIfNeededOnRemoval(prefixKey,
  jobId, deduplicationId)
  if deduplicationId then
    local deduplicationKey = prefixKey .. "de:" .. deduplicationId
    local currentJobId = rcall('GET', deduplicationKey)
    if currentJobId and currentJobId == jobId then
      rcall("DEL", deduplicationKey)
      -- Also clean up any pending dedup-next data for this dedup ID
      rcall("DEL", prefixKey .. "dn:" .. deduplicationId)
      return 1
    end
  end
end
--[[
  Function to remove from any state.
  returns:
    prev state
]]
local function removeJobFromAnyState( prefix, jobId)
  -- We start with the ZSCORE checks, since they have O(1) complexity
  if rcall("ZSCORE", prefix .. "completed", jobId) then
    rcall("ZREM", prefix .. "completed", jobId)
    return "completed"
  elseif rcall("ZSCORE", prefix .. "waiting-children", jobId) then
    rcall("ZREM", prefix .. "waiting-children", jobId)
    return "waiting-children"
  elseif rcall("ZSCORE", prefix .. "delayed", jobId) then
    rcall("ZREM", prefix .. "delayed", jobId)
    return "delayed"
  elseif rcall("ZSCORE", prefix .. "failed", jobId) then
    rcall("ZREM", prefix .. "failed", jobId)
    return "failed"
  elseif rcall("ZSCORE", prefix .. "prioritized", jobId) then
    rcall("ZREM", prefix .. "prioritized", jobId)
    return "prioritized"
  -- We remove only 1 element from the list, since we assume they are not added multiple times
  elseif rcall("LREM", prefix .. "wait", 1, jobId) == 1 then
    return "wait"
  elseif rcall("LREM", prefix .. "paused", 1, jobId) == 1 then
    return "paused"
  elseif rcall("LREM", prefix .. "active", 1, jobId) == 1 then
    return "active"
  end
  return "unknown"
end
--[[
  Function to remove job keys.
]]
local function removeJobKeys(jobKey)
  return rcall("DEL", jobKey, jobKey .. ':logs', jobKey .. ':dependencies',
    jobKey .. ':processed', jobKey .. ':failed', jobKey .. ':unsuccessful')
end
--[[
  Check if this job has a parent. If so we will just remove it from
  the parent child list, but if it is the last child we should move the parent to "wait/paused"
  which requires code from "moveToFinished"
]]
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local function _moveParentToWait(parentPrefix, parentId, emitEvent)
  local parentTarget, isPausedOrMaxed = getTargetQueueList(parentPrefix .. "meta", parentPrefix .. "active",
    parentPrefix .. "wait", parentPrefix .. "paused")
  addJobInTargetList(parentTarget, parentPrefix .. "marker", "RPUSH", isPausedOrMaxed, parentId)
  if emitEvent then
    local parentEventStream = parentPrefix .. "events"
    rcall("XADD", parentEventStream, "*", "event", "waiting", "jobId", parentId, "prev", "waiting-children")
  end
end
local function removeParentDependencyKey(jobKey, hard, parentKey, baseKey, debounceId)
  if parentKey then
    local parentDependenciesKey = parentKey .. ":dependencies"
    local result = rcall("SREM", parentDependenciesKey, jobKey)
    if result > 0 then
      local pendingDependencies = rcall("SCARD", parentDependenciesKey)
      if pendingDependencies == 0 then
        local parentId = getJobIdFromKey(parentKey)
        local parentPrefix = getJobKeyPrefix(parentKey, parentId)
        local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
        if numRemovedElements == 1 then
          if hard then -- remove parent in same queue
            if parentPrefix == baseKey then
              removeParentDependencyKey(parentKey, hard, nil, baseKey, nil)
              removeJobKeys(parentKey)
              if debounceId then
                rcall("DEL", parentPrefix .. "de:" .. debounceId)
              end
            else
              _moveParentToWait(parentPrefix, parentId)
            end
          else
            _moveParentToWait(parentPrefix, parentId, true)
          end
        end
      end
      return true
    end
  else
    local parentAttributes = rcall("HMGET", jobKey, "parentKey", "deid")
    local missedParentKey = parentAttributes[1]
    if( (type(missedParentKey) == "string") and missedParentKey ~= ""
      and (rcall("EXISTS", missedParentKey) == 1)) then
      local parentDependenciesKey = missedParentKey .. ":dependencies"
      local result = rcall("SREM", parentDependenciesKey, jobKey)
      if result > 0 then
        local pendingDependencies = rcall("SCARD", parentDependenciesKey)
        if pendingDependencies == 0 then
          local parentId = getJobIdFromKey(missedParentKey)
          local parentPrefix = getJobKeyPrefix(missedParentKey, parentId)
          local numRemovedElements = rcall("ZREM", parentPrefix .. "waiting-children", parentId)
          if numRemovedElements == 1 then
            if hard then
              if parentPrefix == baseKey then
                removeParentDependencyKey(missedParentKey, hard, nil, baseKey, nil)
                removeJobKeys(missedParentKey)
                if parentAttributes[2] then
                  rcall("DEL", parentPrefix .. "de:" .. parentAttributes[2])
                end
              else
                _moveParentToWait(parentPrefix, parentId)
              end
            else
              _moveParentToWait(parentPrefix, parentId, true)
            end
          end
        end
        return true
      end
    end
  end
  return false
end
--[[
  Function to recursively check if there are no locks
  on the jobs to be removed.
  returns:
    boolean
]]
local function isLocked( prefix, jobId, removeChildren)
  local jobKey = prefix .. jobId;
  -- Check if this job is locked
  local lockKey = jobKey .. ':lock'
  local lock = rcall("GET", lockKey)
  if not lock then
    if removeChildren == "1" then
      local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
      if (#dependencies > 0) then
        for i, childJobKey in ipairs(dependencies) do
          -- We need to get the jobId for this job.
          local childJobId = getJobIdFromKey(childJobKey)
          local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
          local result = isLocked( childJobPrefix, childJobId, removeChildren )
          if result then
            return true
          end
        end
      end
    end
    return false
  end
  return true
end
local removeJobChildren
local removeJobWithChildren
removeJobChildren = function(prefix, jobKey, options)
    -- Check if this job has children
    -- If so, we are going to try to remove the children recursively in a depth-first way
    -- because if some job is locked, we must exit with an error.
    if not options.ignoreProcessed then
        local processed = rcall("HGETALL", jobKey .. ":processed")
        if #processed > 0 then
            for i = 1, #processed, 2 do
                local childJobId = getJobIdFromKey(processed[i])
                local childJobPrefix = getJobKeyPrefix(processed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local failed = rcall("HGETALL", jobKey .. ":failed")
        if #failed > 0 then
            for i = 1, #failed, 2 do
                local childJobId = getJobIdFromKey(failed[i])
                local childJobPrefix = getJobKeyPrefix(failed[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
        local unsuccessful = rcall("ZRANGE", jobKey .. ":unsuccessful", 0, -1)
        if #unsuccessful > 0 then
            for i = 1, #unsuccessful, 1 do
                local childJobId = getJobIdFromKey(unsuccessful[i])
                local childJobPrefix = getJobKeyPrefix(unsuccessful[i], childJobId)
                removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
            end
        end
    end
    local dependencies = rcall("SMEMBERS", jobKey .. ":dependencies")
    if #dependencies > 0 then
        for i, childJobKey in ipairs(dependencies) do
            local childJobId = getJobIdFromKey(childJobKey)
            local childJobPrefix = getJobKeyPrefix(childJobKey, childJobId)
            removeJobWithChildren(childJobPrefix, childJobId, jobKey, options)
        end
    end
end
removeJobWithChildren = function(prefix, jobId, parentKey, options)
    local jobKey = prefix .. jobId
    if options.ignoreLocked then
        if isLocked(prefix, jobId) then
            return
        end
    end
    -- Check if job is in the failed zset
    local failedSet = prefix .. "failed"
    if not (options.ignoreProcessed and rcall("ZSCORE", failedSet, jobId)) then
        removeParentDependencyKey(jobKey, false, parentKey, nil)
        if options.removeChildren then
            removeJobChildren(prefix, jobKey, options)
        end
        local prev = removeJobFromAnyState(prefix, jobId)
        local deduplicationId = rcall("HGET", jobKey, "deid")
        removeDeduplicationKeyIfNeededOnRemoval(prefix, jobId, deduplicationId)
        if removeJobKeys(jobKey) > 0 then
            local metaKey = prefix .. "meta"
            local maxEvents = getOrSetMaxEvents(metaKey)
            rcall("XADD", prefix .. "events", "MAXLEN", "~", maxEvents, "*", "event", "removed",
                "jobId", jobId, "prev", prev)
        end
    end
end
local prefix = ARGV[1]
local jobId = ARGV[2]
local jobKey = KEYS[1]
local metaKey = KEYS[2]
local options = {
  removeChildren = "1",
  ignoreProcessed = true,
  ignoreLocked = true
}
removeJobChildren(prefix, jobKey, options) 
`,keys:2},et={name:"reprocessJob",content:`--[[
  Attempts to reprocess a job
  Input:
    KEYS[1] job key
    KEYS[2] events stream
    KEYS[3] job state
    KEYS[4] wait key
    KEYS[5] meta
    KEYS[6] paused key
    KEYS[7] active key
    KEYS[8] marker key
    ARGV[1] job.id
    ARGV[2] (job.opts.lifo ? 'R' : 'L') + 'PUSH'
    ARGV[3] propVal - failedReason/returnvalue
    ARGV[4] prev state - failed/completed
    ARGV[5] reset attemptsMade - "1" or "0"
    ARGV[6] reset attemptsStarted - "1" or "0"
  Output:
     1 means the operation was a success
    -1 means the job does not exist
    -3 means the job was not found in the expected set.
]]
local rcall = redis.call;
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
local jobKey = KEYS[1]
if rcall("EXISTS", jobKey) == 1 then
  local jobId = ARGV[1]
  if (rcall("ZREM", KEYS[3], jobId) == 1) then
    local attributesToRemove = {}
    if ARGV[5] == "1" then
      table.insert(attributesToRemove, "atm")
    end
    if ARGV[6] == "1" then
      table.insert(attributesToRemove, "ats")
    end
    rcall("HDEL", jobKey, "finishedOn", "processedOn", ARGV[3], unpack(attributesToRemove))
    local target, isPausedOrMaxed = getTargetQueueList(KEYS[5], KEYS[7], KEYS[4], KEYS[6])
    addJobInTargetList(target, KEYS[8], ARGV[2], isPausedOrMaxed, jobId)
    local parentKey = rcall("HGET", jobKey, "parentKey")
    if parentKey and rcall("EXISTS", parentKey) == 1 then
      if ARGV[4] == "failed" then
        if rcall("ZREM", parentKey .. ":unsuccessful", jobKey) == 1 or
          rcall("ZREM", parentKey .. ":failed", jobKey) == 1 then
          rcall("SADD", parentKey .. ":dependencies", jobKey)
        end
      else
        if rcall("HDEL", parentKey .. ":processed", jobKey) == 1 then
          rcall("SADD", parentKey .. ":dependencies", jobKey)
        end
      end
    end
    local maxEvents = getOrSetMaxEvents(KEYS[5])
    -- Emit waiting event
    rcall("XADD", KEYS[2], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
      "jobId", jobId, "prev", ARGV[4]);
    return 1
  else
    return -3
  end
else
  return -1
end
`,keys:8},er={name:"retryJob",content:`--[[
  Retries a failed job by moving it back to the wait queue.
    Input:
      KEYS[1]  'active',
      KEYS[2]  'wait'
      KEYS[3]  'paused'
      KEYS[4]  job key
      KEYS[5]  'meta'
      KEYS[6]  events stream
      KEYS[7]  delayed key
      KEYS[8]  prioritized key
      KEYS[9]  'pc' priority counter
      KEYS[10] 'marker'
      KEYS[11] 'stalled'
      ARGV[1]  key prefix
      ARGV[2]  timestamp
      ARGV[3]  pushCmd
      ARGV[4]  jobId
      ARGV[5]  token
      ARGV[6]  optional job fields to update
    Events:
      'waiting'
    Output:
     0  - OK
     -1 - Missing key
     -2 - Missing lock
     -3 - Job not in active set
]]
local rcall = redis.call
-- Includes
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to check if queue is paused or maxed
  (since an empty list and !EXISTS are not really the same).
]]
local function isQueuePausedOrMaxed(queueMetaKey, activeKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency")
  if queueAttributes[1] then
    return true
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      return activeCount >= tonumber(queueAttributes[2])
    end
  end
  return false
end
--[[
  Updates the delay set, by moving delayed jobs that should
  be processed now to "wait".
     Events:
      'waiting'
]]
-- Includes
-- Try to get as much as 1000 jobs at once
local function promoteDelayedJobs(delayedKey, markerKey, targetKey, prioritizedKey,
                                  eventStreamKey, prefix, timestamp, priorityCounterKey, isPaused)
    local jobs = rcall("ZRANGEBYSCORE", delayedKey, 0, (timestamp + 1) * 0x1000 - 1, "LIMIT", 0, 1000)
    if (#jobs > 0) then
        rcall("ZREM", delayedKey, unpack(jobs))
        for _, jobId in ipairs(jobs) do
            local jobKey = prefix .. jobId
            local priority =
                tonumber(rcall("HGET", jobKey, "priority")) or 0
            if priority == 0 then
                -- LIFO or FIFO
                rcall("LPUSH", targetKey, jobId)
            else
                local score = getPriorityScore(priority, priorityCounterKey)
                rcall("ZADD", prioritizedKey, score, jobId)
            end
            -- Emit waiting event
            rcall("XADD", eventStreamKey, "*", "event", "waiting", "jobId",
                  jobId, "prev", "delayed")
            rcall("HSET", jobKey, "delay", 0)
        end
        addBaseMarkerIfNeeded(markerKey, isPaused)
    end
end
local function removeLock(jobKey, stalledKey, token, jobId)
  if token ~= "0" then
    local lockKey = jobKey .. ':lock'
    local lockToken = rcall("GET", lockKey)
    if lockToken == token then
      rcall("DEL", lockKey)
      rcall("SREM", stalledKey, jobId)
    else
      if lockToken then
        -- Lock exists but token does not match
        return -6
      else
        -- Lock is missing completely
        return -2
      end
    end
  end
  return 0
end
--[[
  Function to update a bunch of fields in a job.
]]
local function updateJobFields(jobKey, msgpackedFields)
  if msgpackedFields and #msgpackedFields > 0 then
    local fieldsToUpdate = cmsgpack.unpack(msgpackedFields)
    if fieldsToUpdate then
      rcall("HMSET", jobKey, unpack(fieldsToUpdate))
    end
  end
end
local target, isPausedOrMaxed = getTargetQueueList(KEYS[5], KEYS[1], KEYS[2], KEYS[3])
local markerKey = KEYS[10]
-- Check if there are delayed jobs that we can move to wait.
-- test example: when there are delayed jobs between retries
promoteDelayedJobs(KEYS[7], markerKey, target, KEYS[8], KEYS[6], ARGV[1], ARGV[2], KEYS[9], isPausedOrMaxed)
local jobKey = KEYS[4]
if rcall("EXISTS", jobKey) == 1 then
  local errorCode = removeLock(jobKey, KEYS[11], ARGV[5], ARGV[4]) 
  if errorCode < 0 then
    return errorCode
  end
  updateJobFields(jobKey, ARGV[6])
  local numRemovedElements = rcall("LREM", KEYS[1], -1, ARGV[4])
  if (numRemovedElements < 1) then return -3 end
  local priority = tonumber(rcall("HGET", jobKey, "priority")) or 0
  --need to re-evaluate after removing job from active
  isPausedOrMaxed = isQueuePausedOrMaxed(KEYS[5], KEYS[1])
  -- Standard or priority add
  if priority == 0 then
    addJobInTargetList(target, markerKey, ARGV[3], isPausedOrMaxed, ARGV[4])
  else
    addJobWithPriority(markerKey, KEYS[8], priority, ARGV[4], KEYS[9], isPausedOrMaxed)
  end
  rcall("HINCRBY", jobKey, "atm", 1)
  local maxEvents = getOrSetMaxEvents(KEYS[5])
  -- Emit waiting event
  rcall("XADD", KEYS[6], "MAXLEN", "~", maxEvents, "*", "event", "waiting",
    "jobId", ARGV[4], "prev", "active")
  return 0
else
  return -1
end
`,keys:11},ei={name:"saveStacktrace",content:`--[[
  Save stacktrace and failedReason.
  Input:
    KEYS[1] job key
    ARGV[1]  stacktrace
    ARGV[2]  failedReason
  Output:
     0 - OK
    -1 - Missing key
]]
local rcall = redis.call
if rcall("EXISTS", KEYS[1]) == 1 then
  rcall("HMSET", KEYS[1], "stacktrace", ARGV[1], "failedReason", ARGV[2])
  return 0
else
  return -1
end
`,keys:1},en={name:"updateData",content:`--[[
  Update job data
  Input:
    KEYS[1] Job id key
    ARGV[1] data
  Output:
    0 - OK
   -1 - Missing job.
]]
local rcall = redis.call
if rcall("EXISTS",KEYS[1]) == 1 then -- // Make sure job exists
  rcall("HSET", KEYS[1], "data", ARGV[1])
  return 0
else
  return -1
end
`,keys:1},es={name:"updateJobScheduler",content:`--[[
  Updates a job scheduler and adds next delayed job
  Input:
    KEYS[1]  'repeat' key
    KEYS[2]  'delayed'
    KEYS[3]  'wait' key
    KEYS[4]  'paused' key
    KEYS[5]  'meta'
    KEYS[6]  'prioritized' key
    KEYS[7]  'marker',
    KEYS[8]  'id'
    KEYS[9]  events stream key
    KEYS[10] 'pc' priority counter
    KEYS[11] producer key
    KEYS[12] 'active' key
    ARGV[1] next milliseconds
    ARGV[2] jobs scheduler id
    ARGV[3] Json stringified delayed data
    ARGV[4] msgpacked delayed opts
    ARGV[5] timestamp
    ARGV[6] prefix key
    ARGV[7] producer id
    Output:
      next delayed job id  - OK
]] local rcall = redis.call
local repeatKey = KEYS[1]
local delayedKey = KEYS[2]
local waitKey = KEYS[3]
local pausedKey = KEYS[4]
local metaKey = KEYS[5]
local prioritizedKey = KEYS[6]
local nextMillis = tonumber(ARGV[1])
local jobSchedulerId = ARGV[2]
local timestamp = tonumber(ARGV[5])
local prefixKey = ARGV[6]
local producerId = ARGV[7]
local jobOpts = cmsgpack.unpack(ARGV[4])
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Shared helper to store a job and enqueue it into the appropriate list/set.
  Handles delayed, prioritized, and standard (LIFO/FIFO) jobs.
  Emits the appropriate event after enqueuing ("delayed" or "waiting").
  Returns delay, priority from storeJob.
]]
-- Includes
--[[
  Adds a delayed job to the queue by doing the following:
    - Creates a new job key with the job data.
    - adds to delayed zset.
    - Emits a global event 'delayed' if the job is delayed.
]]
-- Includes
--[[
  Add delay marker if needed.
]]
-- Includes
--[[
  Function to return the next delayed job timestamp.
]]
local function getNextDelayedTimestamp(delayedKey)
  local result = rcall("ZRANGE", delayedKey, 0, 0, "WITHSCORES")
  if #result then
    local nextTimestamp = tonumber(result[2])
    if nextTimestamp ~= nil then
      return nextTimestamp / 0x1000
    end
  end
end
local function addDelayMarkerIfNeeded(markerKey, delayedKey)
  local nextTimestamp = getNextDelayedTimestamp(delayedKey)
  if nextTimestamp ~= nil then
    -- Replace the score of the marker with the newest known
    -- next timestamp.
    rcall("ZADD", markerKey, nextTimestamp, "1")
  end
end
--[[
  Bake in the job id first 12 bits into the timestamp
  to guarantee correct execution order of delayed jobs
  (up to 4096 jobs per given timestamp or 4096 jobs apart per timestamp)
  WARNING: Jobs that are so far apart that they wrap around will cause FIFO to fail
]]
local function getDelayedScore(delayedKey, timestamp, delay)
  local delayedTimestamp = (delay > 0 and (tonumber(timestamp) + delay)) or tonumber(timestamp)
  local minScore = delayedTimestamp * 0x1000
  local maxScore = (delayedTimestamp + 1 ) * 0x1000 - 1
  local result = rcall("ZREVRANGEBYSCORE", delayedKey, maxScore,
    minScore, "WITHSCORES","LIMIT", 0, 1)
  if #result then
    local currentMaxScore = tonumber(result[2])
    if currentMaxScore ~= nil then
      if currentMaxScore >= maxScore then
        return maxScore, delayedTimestamp
      else
        return currentMaxScore + 1, delayedTimestamp
      end
    end
  end
  return minScore, delayedTimestamp
end
local function addDelayedJob(jobId, delayedKey, eventsKey, timestamp,
  maxEvents, markerKey, delay)
  local score, delayedTimestamp = getDelayedScore(delayedKey, timestamp, tonumber(delay))
  rcall("ZADD", delayedKey, score, jobId)
  rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "delayed",
    "jobId", jobId, "delay", delayedTimestamp)
  -- mark that a delayed job is available
  addDelayMarkerIfNeeded(markerKey, delayedKey)
end
--[[
  Function to add job in target list and add marker if needed.
]]
-- Includes
--[[
  Add marker if needed when a job is available.
]]
local function addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
  if not isPausedOrMaxed then
    rcall("ZADD", markerKey, 0, "0")
  end  
end
local function addJobInTargetList(targetKey, markerKey, pushCmd, isPausedOrMaxed, jobId)
  rcall(pushCmd, targetKey, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to add job considering priority.
]]
-- Includes
--[[
  Function to get priority score.
]]
local function getPriorityScore(priority, priorityCounterKey)
  local prioCounter = rcall("INCR", priorityCounterKey)
  return priority * 0x100000000 + prioCounter % 0x100000000
end
local function addJobWithPriority(markerKey, prioritizedKey, priority, jobId, priorityCounterKey,
  isPausedOrMaxed)
  local score = getPriorityScore(priority, priorityCounterKey)
  rcall("ZADD", prioritizedKey, score, jobId)
  addBaseMarkerIfNeeded(markerKey, isPausedOrMaxed)
end
--[[
  Function to check for the meta.paused key to decide if we are paused or not
  (since an empty list and !EXISTS are not really the same).
]]
local function getTargetQueueList(queueMetaKey, activeKey, waitKey, pausedKey)
  local queueAttributes = rcall("HMGET", queueMetaKey, "paused", "concurrency", "max", "duration")
  if queueAttributes[1] then
    return pausedKey, true, queueAttributes[3], queueAttributes[4]
  else
    if queueAttributes[2] then
      local activeCount = rcall("LLEN", activeKey)
      if activeCount >= tonumber(queueAttributes[2]) then
        return waitKey, true, queueAttributes[3], queueAttributes[4]
      else
        return waitKey, false, queueAttributes[3], queueAttributes[4]
      end
    end
  end
  return waitKey, false, queueAttributes[3], queueAttributes[4]
end
--[[
  Function to store a job
]]
local function storeJob(eventsKey, jobIdKey, jobId, name, data, opts, timestamp,
                        parentKey, parentData, repeatJobKey)
    local jsonOpts = cjson.encode(opts)
    local delay = opts['delay'] or 0
    local priority = opts['priority'] or 0
    local debounceId = opts['de'] and opts['de']['id']
    local optionalValues = {}
    if parentKey ~= nil then
        table.insert(optionalValues, "parentKey")
        table.insert(optionalValues, parentKey)
        table.insert(optionalValues, "parent")
        table.insert(optionalValues, parentData)
    end
    if repeatJobKey then
        table.insert(optionalValues, "rjk")
        table.insert(optionalValues, repeatJobKey)
    end
    if debounceId then
        table.insert(optionalValues, "deid")
        table.insert(optionalValues, debounceId)
    end
    rcall("HMSET", jobIdKey, "name", name, "data", data, "opts", jsonOpts,
          "timestamp", timestamp, "delay", delay, "priority", priority,
          unpack(optionalValues))
    rcall("XADD", eventsKey, "*", "event", "added", "jobId", jobId, "name", name)
    return delay, priority
end
local function storeAndEnqueueJob(eventsKey, jobIdKey, jobId, name, data, opts,
    timestamp, parentKey, parentData, repeatJobKey, maxEvents,
    waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
    priorityCounterKey, delayedKey, markerKey)
  local delay, priority = storeJob(eventsKey, jobIdKey, jobId, name, data,
      opts, timestamp, parentKey, parentData, repeatJobKey)
  if delay ~= 0 and delayedKey then
    addDelayedJob(jobId, delayedKey, eventsKey, timestamp, maxEvents, markerKey, delay)
  else
    local target, isPausedOrMaxed = getTargetQueueList(metaKey, activeKey, waitKey, pausedKey)
    if priority > 0 then
      addJobWithPriority(markerKey, prioritizedKey, priority, jobId,
          priorityCounterKey, isPausedOrMaxed)
    else
      local pushCmd = opts['lifo'] and 'RPUSH' or 'LPUSH'
      addJobInTargetList(target, markerKey, pushCmd, isPausedOrMaxed, jobId)
    end
    rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "waiting",
        "jobId", jobId)
  end
  return delay, priority
end
local function addJobFromScheduler(jobKey, jobId, opts, waitKey, pausedKey, activeKey, metaKey, 
  prioritizedKey, priorityCounter, delayedKey, markerKey, eventsKey, name, maxEvents, timestamp,
  data, jobSchedulerId, repeatDelay)
  opts['delay'] = repeatDelay
  opts['jobId'] = jobId
  storeAndEnqueueJob(eventsKey, jobKey, jobId, name, data, opts,
      timestamp, nil, nil, jobSchedulerId, maxEvents,
      waitKey, pausedKey, activeKey, metaKey, prioritizedKey,
      priorityCounter, delayedKey, markerKey)
end
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
local function getJobSchedulerEveryNextMillis(prevMillis, every, now, offset, startDate)
    local nextMillis
    if not prevMillis then
        if startDate then
            -- Assuming startDate is passed as milliseconds from JavaScript
            nextMillis = tonumber(startDate)
            nextMillis = nextMillis > now and nextMillis or now
        else
            nextMillis = now
            -- For the first iteration with no startDate and an explicit
            -- offset, align nextMillis to the next offset slot strictly
            -- after now. Without this the user-supplied offset is
            -- recorded but ignored, and the first job fires at now
            -- instead of the next aligned timestamp (issue #3705).
            if offset and offset > 0 then
                local aligned = math.floor(nextMillis / every) * every + offset
                if aligned <= nextMillis then
                    aligned = aligned + every
                end
                nextMillis = aligned
            end
        end
    else
        nextMillis = prevMillis + every
        -- check if we may have missed some iterations
        if nextMillis < now then
            nextMillis = math.floor(now / every) * every + every + (offset or 0)
        end
    end
    if not offset or offset == 0 then
        local timeSlot = math.floor(nextMillis / every) * every;
        offset = nextMillis - timeSlot;
    end
    -- Return a tuple nextMillis, offset
    return math.floor(nextMillis), math.floor(offset)
end
local prevMillis = rcall("ZSCORE", repeatKey, jobSchedulerId)
-- Validate that scheduler exists.
-- If it does not exist we should not iterate anymore.
if prevMillis then
    prevMillis = tonumber(prevMillis)
    local schedulerKey = repeatKey .. ":" .. jobSchedulerId
    local schedulerAttributes = rcall("HMGET", schedulerKey, "name", "data", "every", "startDate", "offset")
    local every = tonumber(schedulerAttributes[3])
    local now = tonumber(timestamp)
    -- If every is not found in scheduler attributes, try to get it from job options
    if not every and jobOpts['repeat'] and jobOpts['repeat']['every'] then
        every = tonumber(jobOpts['repeat']['every'])
    end
    if every then
        local startDate = schedulerAttributes[4]
        local jobOptsOffset = jobOpts['repeat'] and jobOpts['repeat']['offset'] or 0
        local offset = schedulerAttributes[5] or jobOptsOffset or 0
        local newOffset
        nextMillis, newOffset = getJobSchedulerEveryNextMillis(prevMillis, every, now, offset, startDate)
        if not offset then
            rcall("HSET", schedulerKey, "offset", newOffset)
            jobOpts['repeat']['offset'] = newOffset
        end
    end
    local nextDelayedJobId = "repeat:" .. jobSchedulerId .. ":" .. nextMillis
    local nextDelayedJobKey = schedulerKey .. ":" .. nextMillis
    local currentDelayedJobId = "repeat:" .. jobSchedulerId .. ":" .. prevMillis
    if producerId == currentDelayedJobId then
        local eventsKey = KEYS[9]
        local maxEvents = getOrSetMaxEvents(metaKey)
        if rcall("EXISTS", nextDelayedJobKey) ~= 1 then
            rcall("ZADD", repeatKey, nextMillis, jobSchedulerId)
            rcall("HINCRBY", schedulerKey, "ic", 1)
            rcall("INCR", KEYS[8])
            -- TODO: remove this workaround in next breaking change,
            -- all job-schedulers must save job data
            local templateData = schedulerAttributes[2] or ARGV[3]
            if templateData and templateData ~= '{}' then
                rcall("HSET", schedulerKey, "data", templateData)
            end
            local delay = nextMillis - now
            -- Fast Clamp delay to minimum of 0
            if delay < 0 then
                delay = 0
            end
            jobOpts["delay"] = delay
            addJobFromScheduler(nextDelayedJobKey, nextDelayedJobId, jobOpts, waitKey, pausedKey, KEYS[12], metaKey,
                prioritizedKey, KEYS[10], delayedKey, KEYS[7], eventsKey, schedulerAttributes[1], maxEvents, ARGV[5],
                templateData or '{}', jobSchedulerId, delay)
            -- TODO: remove this workaround in next breaking change
            if KEYS[11] ~= "" then
                rcall("HSET", KEYS[11], "nrjid", nextDelayedJobId)
            end
            return nextDelayedJobId .. "" -- convert to string
        else
            rcall("XADD", eventsKey, "MAXLEN", "~", maxEvents, "*", "event", "duplicated", "jobId", nextDelayedJobId)
        end
    end
end
`,keys:12},ea={name:"updateProgress",content:`--[[
  Update job progress
  Input:
    KEYS[1] Job id key
    KEYS[2] event stream key
    KEYS[3] meta key
    ARGV[1] id
    ARGV[2] progress
  Output:
     0 - OK
    -1 - Missing job.
  Event:
    progress(jobId, progress)
]]
local rcall = redis.call
-- Includes
--[[
  Function to get max events value or set by default 10000.
]]
local function getOrSetMaxEvents(metaKey)
  local maxEvents = rcall("HGET", metaKey, "opts.maxLenEvents")
  if not maxEvents then
    maxEvents = 10000
    rcall("HSET", metaKey, "opts.maxLenEvents", maxEvents)
  end
  return maxEvents
end
if rcall("EXISTS", KEYS[1]) == 1 then -- // Make sure job exists
    local maxEvents = getOrSetMaxEvents(KEYS[3])
    rcall("HSET", KEYS[1], "progress", ARGV[2])
    rcall("XADD", KEYS[2], "MAXLEN", "~", maxEvents, "*", "event", "progress",
          "jobId", ARGV[1], "data", ARGV[2]);
    return 0
else
    return -1
end
`,keys:3},eo={name:"updateRepeatableJobMillis",content:`--[[
  Adds a repeatable job
    Input:
      KEYS[1] 'repeat' key
      ARGV[1] next milliseconds
      ARGV[2] custom key
      ARGV[3] legacy custom key TODO: remove this logic in next breaking change
      Output:
        repeatableKey  - OK
]]
local rcall = redis.call
local repeatKey = KEYS[1]
local nextMillis = ARGV[1]
local customKey = ARGV[2]
local legacyCustomKey = ARGV[3]
if rcall("ZSCORE", repeatKey, customKey) then
    rcall("ZADD", repeatKey, nextMillis, customKey)
    return customKey
elseif rcall("ZSCORE", repeatKey, legacyCustomKey) ~= false then
    rcall("ZADD", repeatKey, nextMillis, legacyCustomKey)
    return legacyCustomKey
end
return ''
`,keys:1};var el=r(89893),ed=r(59372);let ec=Symbol("bullmqClusterReconnectPromise"),eu=Symbol("bullmqClusterPatchedForBlocking"),ep=Symbol("bullmqClusterOriginalBzpopmin"),eh=Symbol("bullmqClusterWrappedBzpopmin"),ey=Symbol("bullmqClusterPatchRefCount"),em=Symbol("bullmqClusterClosingRefCount");class ef extends s.EventEmitter{constructor(e,t){if(super(),this.extraOptions=t,this.capabilities={canDoubleTimeout:!1,canBlockFor1Ms:!0},this.status="initializing",this.dbType="redis",this.packageVersion=c.i,this.disabledBlockingClusterReconnect=!1,this.extraOptions=Object.assign({shared:!1,blocking:!0,skipVersionCheck:!1,skipWaitingForReady:!1,clusterReconnectTimeoutMs:3e4},t),(0,d.Y1)(e)){if(this._client=(0,el.i)(e)?e:(0,el.c)(e),this._client.options.keyPrefix)throw Error("BullMQ: ioredis does not support ioredis prefixes, use the prefix option instead.");this._client.isCluster?this.opts=this._client.options.redisOptions:this.opts=this._client.options,this.checkBlockingOptions("BullMQ: Your redis options maxRetriesPerRequest must be null.",this.opts,!0)}else this.checkBlockingOptions("BullMQ: WARNING! Your redis options maxRetriesPerRequest must be null and will be overridden by BullMQ.",e),this.opts=Object.assign({port:6379,host:"127.0.0.1",retryStrategy:function(e){return Math.max(Math.min(Math.exp(e),2e4),1e3)}},e),this.extraOptions.blocking&&(this.opts.maxRetriesPerRequest=null);this.skipVersionCheck=(null==t?void 0:t.skipVersionCheck)||!!(this.opts&&this.opts.skipVersionCheck),this.handleClientError=e=>{this.emit("error",e)},this.handleClientClose=()=>{this.emit("close")},this.handleClientReady=()=>{this.emit("ready")},this.initializing=this.init(),this.initializing.catch(e=>this.emit("error",e))}checkBlockingOptions(e,t,r=!1){if(this.extraOptions.blocking&&t&&t.maxRetriesPerRequest){if(r)throw Error(e);console.error(e)}}static async waitUntilReady(e){let t,r,i;if(!("ready"===e.status||"connect"===e.status&&(0,d.OV)(e))){if("wait"===e.status)return e.connect();if("end"===e.status)throw new ed.i(l.CONNECTION_CLOSED_ERROR_MSG);try{await new Promise((n,s)=>{let a;i=e=>{a=e},t=()=>{n()},r=()=>{"end"!==e.status?s(a||new ed.i(l.CONNECTION_CLOSED_ERROR_MSG)):a?s(a):n()},(0,d.xP)(e,3),e.once("ready",t),e.on("end",r),e.once("error",i)})}finally{e.removeListener("end",r),e.removeListener("error",i),e.removeListener("ready",t),(0,d.LG)(e,3)}}}get client(){return this.initializing}loadCommands(e,t){let r=t||i;for(let t in r){let i=`${r[t].name}:${e}`;this._client[i]||this._client.defineCommand(i,{numberOfKeys:r[t].keys,lua:r[t].content})}}async init(){if(!this._client){if(ef.clientFactory)this._client=ef.clientFactory(this.opts);else{let e=this.opts,{url:t}=e,r=(0,n._T)(e,["url"]),i=t?new(o())(t,r):new(o())(r);this._client=(0,el.c)(i)}}if((0,d.xP)(this._client,3),this._client.on("error",this.handleClientError),this._client.on("close",this.handleClientClose),this._client.on("ready",this.handleClientReady),this.patchBlockingClusterClient(),this.extraOptions.skipWaitingForReady||await ef.waitUntilReady(this._client),this.loadCommands(this.packageVersion),"end"!==this._client.status){let e=await this.getRedisVersionAndType();if(this.version=e.version,this.dbType=e.databaseType,!0!==this.skipVersionCheck&&!this.closing){if((0,d.J3)(this.version,ef.minimumVersion,this.dbType))throw Error(`Redis version needs to be greater or equal than ${ef.minimumVersion} Current: ${this.version}`);(0,d.J3)(this.version,ef.recommendedMinimumVersion,this.dbType)&&console.warn(`It is highly recommended to use a minimum Redis version of ${ef.recommendedMinimumVersion}
             Current: ${this.version}`)}this.capabilities={canDoubleTimeout:!(0,d.J3)(this.version,"6.0.0",this.dbType),canBlockFor1Ms:!(0,d.J3)(this.version,"7.0.8",this.dbType)},this.status="ready"}return this._client}patchBlockingClusterClient(){var e;let t=this._client;if(!this.extraOptions.blocking||!(0,d.OV)(t)||"function"!=typeof t.bzpopmin)return;let r=null!==(e=this.extraOptions.clusterReconnectTimeoutMs)&&void 0!==e?e:3e4;if(t[ey]=(t[ey]||0)+1,this.patchedBlockingClusterClient=t,t[eu])return;let i=t.bzpopmin,n=async(...e)=>{await ef.reconnectClusterIfNeeded(t,r);try{return await i.apply(t,e)}catch(e){if(ef.shouldReconnectClusterAfterError(t,e))try{await ef.reconnectCluster(t,r)}catch(e){}throw e}};t[ep]=i,t[eh]=n,t[eu]=!0,t.bzpopmin=n}disableBlockingClusterReconnect(){let e=this.patchedBlockingClusterClient;e&&!this.disabledBlockingClusterReconnect&&(e[em]=(e[em]||0)+1,this.disabledBlockingClusterReconnect=!0)}releaseBlockingClusterClientPatch(){let e=this.patchedBlockingClusterClient;if(!e)return;if(this.disabledBlockingClusterReconnect){let t=(e[em]||1)-1;t>0?e[em]=t:delete e[em],this.disabledBlockingClusterReconnect=!1}let t=(e[ey]||1)-1;if(t>0){e[ey]=t,this.patchedBlockingClusterClient=void 0;return}e[ep]&&e.bzpopmin===e[eh]&&(e.bzpopmin=e[ep]),delete e[ey],delete e[em],delete e[ep],delete e[eh],delete e[eu],this.patchedBlockingClusterClient=void 0}static isClusterWithEmptyNodes(e){return"function"==typeof e.nodes&&0===e.nodes().length}static isReconnectingDisabled(e){let t=e[ey]||0,r=e[em]||0;return 0===t||r>=t||"end"===e.status||"closing"===e.status}static async reconnectClusterIfNeeded(e,t){!ef.isReconnectingDisabled(e)&&ef.isClusterWithEmptyNodes(e)&&await ef.reconnectCluster(e,t)}static shouldReconnectClusterAfterError(e,t){var r,i;if(ef.isReconnectingDisabled(e))return!1;let n=[t.message,null===(r=t.cause)||void 0===r?void 0:r.message,null===(i=t.lastNodeError)||void 0===i?void 0:i.message].join(" ");return ef.isClusterWithEmptyNodes(e)||/Command timed out|Failed to refresh slots cache/i.test(n)}static async reconnectCluster(e,t){ef.isReconnectingDisabled(e)||(e[ec]||(e[ec]=ef.connectClusterWithTimeout(e,t).finally(()=>{e[ec]=null})),await e[ec])}static async connectClusterWithTimeout(e,t){let r;e.disconnect(!1);try{await Promise.race([e.connect(),new Promise((e,i)=>{var n;r=setTimeout(()=>{i(new ed.i(`BullMQ: cluster reconnect timed out after ${t}ms`))},t),null===(n=r.unref)||void 0===n||n.call(r)})])}finally{r&&clearTimeout(r)}}async disconnect(e=!0){let t=await this.client;if("end"!==t.status){let r,i;if(!e)return t.disconnect();let n=new Promise((e,n)=>{(0,d.xP)(t,2),t.once("end",e),t.once("error",n),r=e,i=n});t.disconnect();try{await n}finally{(0,d.LG)(t,2),t.removeListener("end",r),t.removeListener("error",i)}}}async reconnect(){return(await this.client).connect()}async close(e=!1){var t;if(!this.closing){let r=this.status;this.status="closing",this.closing=!0,this.disableBlockingClusterReconnect();try{"ready"===r&&await this.initializing,this.extraOptions.shared||("initializing"==r||e?(this._client.disconnect(),null===(t=this.initializing)||void 0===t||t.catch(()=>{})):await this._client.quit(),this._client.status="end")}catch(e){if((0,d.Zm)(e))throw e}finally{this.releaseBlockingClusterClientPatch(),this._client.off("error",this.handleClientError),this._client.off("close",this.handleClientClose),this._client.off("ready",this.handleClientReady),(0,d.LG)(this._client,3),this.removeAllListeners(),this.status="closed"}}}async getRedisVersionAndType(){let e;if(this.skipVersionCheck)return{version:ef.minimumVersion,databaseType:"redis"};let t=await this._client.info(),r="redis_version:",i="maxmemory_policy:",n=t.split(/\r?\n/),s="redis";for(let t=0;t<n.length;t++){let a=n[t];if(a.includes("dragonfly_version:")||a.includes("server:Dragonfly")?(s="dragonfly",0===a.indexOf("dragonfly_version:")&&(e=a.substr(18))):a.includes("valkey_version:")||a.includes("server:Valkey")?(s="valkey",0===a.indexOf("valkey_version:")&&(e=a.substr(15))):0===a.indexOf(r)&&(e=a.substr(r.length),"redis"===s&&(s="redis")),0===a.indexOf(i)){let e=a.substr(i.length);"noeviction"!==e&&console.warn(`IMPORTANT! Eviction policy is ${e}. It should be "noeviction"`)}}if(!e){for(let t of n)if(t.includes("version:")){let r=t.split(":");if(r.length>=2){e=r[1];break}}}return{version:e||ef.minimumVersion,databaseType:s}}get redisVersion(){return this.version}get databaseType(){return this.dbType}}ef.minimumVersion="5.0.0",ef.recommendedMinimumVersion="6.2.0"},35144:(e,t,r)=>{"use strict";r.d(t,{w:()=>o});var i=r(31650),n=r(50314),s=r(6113),a=r(41381);class o extends a.W{constructor(e,t,r){super(e,t,r),this.repeatStrategy=t.settings&&t.settings.repeatStrategy||d,this.repeatKeyHashAlgorithm=t.settings&&t.settings.repeatKeyHashAlgorithm||"md5"}async updateRepeatableJob(e,t,r,{override:n}){var s,a;let o=Object.assign({},r.repeat);null!==(s=o.pattern)&&void 0!==s||(o.pattern=o.cron),delete o.cron;let d=o.count?o.count+1:1;if(void 0!==o.limit&&d>o.limit)return;let c=Date.now(),{endDate:u}=o;if(u&&c>new Date(u).getTime())return;let p=r.prevMillis||0;c=p<c?c:p;let h=await this.repeatStrategy(c,o,e),{every:y,pattern:m}=o,f=!!((y||m)&&o.immediately),b=f&&y?c-h:void 0;if(h){let s;!p&&r.jobId&&(o.jobId=r.jobId);let c=l(e,o),g=null!==(a=r.repeat.key)&&void 0!==a?a:this.hash(c);if(n)s=await this.scripts.addRepeatableJob(g,h,{name:e,endDate:u?new Date(u).getTime():void 0,tz:o.tz,pattern:m,every:y},c);else{let e=await this.client;s=await this.scripts.updateRepeatableJobMillis(e,g,h,c)}let{immediately:S}=o,v=(0,i._T)(o,["immediately"]);return this.createNextJob(e,h,s,Object.assign(Object.assign({},r),{repeat:Object.assign({offset:b},v)}),t,d,f)}}async createNextJob(e,t,r,i,n,s,a){let o=this.getRepeatJobKey(e,t,r,n),l=Date.now(),d=t+(i.repeat.offset?i.repeat.offset:0)-l,c=Object.assign(Object.assign({},i),{jobId:o,delay:d<0||a?0:d,timestamp:l,prevMillis:t,repeatJobKey:r});return c.repeat=Object.assign(Object.assign({},i.repeat),{count:s}),this.Job.create(this,e,n,c)}getRepeatJobKey(e,t,r,i){return r.split(":").length>2?this.getRepeatJobId({name:e,nextMillis:t,namespace:this.hash(r),jobId:null==i?void 0:i.id}):this.getRepeatDelayedJobId({customKey:r,nextMillis:t})}async removeRepeatable(e,t,r){var i;let n=l(e,Object.assign(Object.assign({},t),{jobId:r})),s=null!==(i=t.key)&&void 0!==i?i:this.hash(n),a=this.getRepeatJobId({name:e,nextMillis:"",namespace:this.hash(n),jobId:null!=r?r:t.jobId,key:t.key});return this.scripts.removeRepeatable(a,n,s)}async removeRepeatableByKey(e){let t=this.keyToData(e),r=this.getRepeatJobId({name:t.name,nextMillis:"",namespace:this.hash(e),jobId:t.id});return this.scripts.removeRepeatable(r,"",e)}async getRepeatableData(e,t,r){let i=await e.hgetall(this.toKey("repeat:"+t));return i?{key:t,name:i.name,endDate:parseInt(i.endDate)||null,tz:i.tz||null,pattern:i.pattern||null,every:i.every||null,next:r}:this.keyToData(t,r)}keyToData(e,t){let r=e.split(":"),i=r.slice(4).join(":")||null;return{key:e,name:r[0],id:r[1]||null,endDate:parseInt(r[2])||null,tz:r[3]||null,pattern:i,next:t}}async getRepeatableJobs(e=0,t=-1,r=!1){let i=await this.client,n=this.keys.repeat,s=r?await i.zrange(n,e,t,{WITHSCORES:!0}):await i.zrevrange(n,e,t,{WITHSCORES:!0}),a=[];for(let e=0;e<s.length;e+=2)a.push(this.getRepeatableData(i,s[e],parseInt(s[e+1])));return Promise.all(a)}async getRepeatableCount(){return(await this.client).zcard(this.toKey("repeat"))}hash(e){return(0,s.createHash)(this.repeatKeyHashAlgorithm).update(e).digest("hex")}getRepeatDelayedJobId({nextMillis:e,customKey:t}){return`repeat:${t}:${e}`}getRepeatJobId({name:e,nextMillis:t,namespace:r,jobId:i,key:n}){let s=null!=n?n:this.hash(`${e}${i||""}${r}`);return`repeat:${s}:${t}`}}function l(e,t){let r=t.endDate?new Date(t.endDate).getTime():"",i=t.tz||"",n=t.pattern||String(t.every)||"",s=t.jobId?t.jobId:"";return`${e}:${s}:${r}:${i}:${n}`}let d=(e,t)=>{let r=t.pattern;if(r&&t.every)throw Error("Both .pattern and .every options are defined for this repeatable job");if(t.every)return Math.floor(e/t.every)*t.every+(t.immediately?0:t.every);let i=new Date(t.startDate&&new Date(t.startDate)>new Date(e)?t.startDate:e),s=(0,n.parseExpression)(r,Object.assign(Object.assign({},t),{currentDate:i}));try{if(t.immediately)return new Date().getTime();return s.next().getTime()}catch(e){}}},39735:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var i=r(5315);let n=(e,t)=>async function(r,n,s){let a,o,l,d;try{let c=new Promise((c,u)=>{(async()=>{try{l=(e,t)=>{u(Error("Unexpected exit code: "+e+" signal: "+t))},(a=await t.retain(e)).on("exit",l),o=async e=>{var t,n,s,o,l;try{switch(e.cmd){case i.d$.Completed:c(e.value);break;case i.d$.Failed:case i.d$.Error:{let t=Error();Object.assign(t,e.value),u(t);break}case i.d$.Progress:await r.updateProgress(e.value);break;case i.d$.Log:await r.log(e.value);break;case i.d$.MoveToDelayed:await r.moveToDelayed(null===(t=e.value)||void 0===t?void 0:t.timestamp,null===(n=e.value)||void 0===n?void 0:n.token);break;case i.d$.MoveToWait:await r.moveToWait(null===(s=e.value)||void 0===s?void 0:s.token);break;case i.d$.MoveToWaitingChildren:{let t=await r.moveToWaitingChildren(null===(o=e.value)||void 0===o?void 0:o.token,null===(l=e.value)||void 0===l?void 0:l.opts);a.send({requestId:e.requestId,cmd:i.uv.MoveToWaitingChildrenResponse,value:t})}break;case i.d$.Update:await r.updateData(e.value);break;case i.d$.GetChildrenValues:{let t=await r.getChildrenValues();a.send({requestId:e.requestId,cmd:i.uv.GetChildrenValuesResponse,value:t})}break;case i.d$.GetIgnoredChildrenFailures:{let t=await r.getIgnoredChildrenFailures();a.send({requestId:e.requestId,cmd:i.uv.GetIgnoredChildrenFailuresResponse,value:t})}break;case i.d$.GetDependenciesCount:{let t=await r.getDependenciesCount(e.value);a.send({requestId:e.requestId,cmd:i.uv.GetDependenciesCountResponse,value:t})}break;case i.d$.GetDependencies:{let t=await r.getDependencies(e.value);a.send({requestId:e.requestId,cmd:i.uv.GetDependenciesResponse,value:t})}}}catch(e){u(e)}},a.on("message",o),a.send({cmd:i.uv.Start,job:r.asJSONSandbox(),token:n}),s&&(d=()=>{try{a.send({cmd:i.uv.Cancel,value:s.reason})}catch(e){}},s.aborted?d():s.addEventListener("abort",d,{once:!0}))}catch(e){u(e)}})()});return await c,c}finally{s&&d&&s.removeEventListener("abort",d),a&&(a.off("message",o),a.off("exit",l),null===a.exitCode&&null===a.signalCode&&t.release(a))}}},57363:(e,t,r)=>{"use strict";let i,n,s,a,o,l,d;r.d(t,{K:()=>eL});try{c=new TextDecoder}catch(e){}var c,u,p,h,y,m,f,b,g=0;let S=[];var v=S,K=0,k={},E=0,I=0,w=[],j={useRecords:!1,mapsAsObjects:!0};class x{}let A=new x;A.name="MessagePack 0xC1";var T=!1,C=2;class D{constructor(e){e&&(!1===e.useRecords&&void 0===e.mapsAsObjects&&(e.mapsAsObjects=!0),!e.sequential||!1===e.trusted||(e.trusted=!0,e.structures||!1==e.useRecords||(e.structures=[],e.maxSharedStructures||(e.maxSharedStructures=0))),e.structures?e.structures.sharedLength=e.structures.length:e.getStructures&&((e.structures=[]).uninitialized=!0,e.structures.sharedLength=0),e.int64AsNumber&&(e.int64AsType="number")),Object.assign(this,e)}unpack(e,t){if(u)return ea(()=>(eo(),this?this.unpack(e,t):D.prototype.unpack.call(j,e,t)));e.buffer||e.constructor!==ArrayBuffer||(e="undefined"!=typeof Buffer?Buffer.from(e):new Uint8Array(e)),"object"==typeof t?(p=t.end||e.length,g=t.start||0):(g=0,p=t>-1?t:e.length),K=0,I=0,y=null,v=S,m=null,u=e;try{b=e.dataView||(e.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength))}catch(t){if(u=null,e instanceof Uint8Array)throw t;throw Error("Source must be a Uint8Array or Buffer but was a "+(e&&"object"==typeof e?e.constructor.name:typeof e))}return this instanceof D?(k=this,this.structures?h=this.structures:(!h||h.length>0)&&(h=[])):(k=j,(!h||h.length>0)&&(h=[])),O(t)}unpackMultiple(e,t){let r,i=0;try{T=!0;let n=e.length,s=this?this.unpack(e,n):ed.unpack(e,n);if(t){if(!1===t(s,i,g))return;for(;g<n;)if(i=g,!1===t(O(),i,g))return}else{for(r=[s];g<n;)i=g,r.push(O());return r}}catch(e){throw e.lastPosition=i,e.values=r,e}finally{T=!1,eo()}}_mergeStructures(e,t){this._onLoadedStructures&&(e=this._onLoadedStructures(e)),Object.isFrozen(e=e||[])&&(e=e.map(e=>e.slice(0)));for(let t=0,r=e.length;t<r;t++){let r=e[t];r&&(r.isShared=!0,t>=32&&(r.highByte=t-32>>5))}for(let r in e.sharedLength=e.length,t||[])if(r>=0){let i=e[r],n=t[r];n&&(i&&((e.restoreStructures||(e.restoreStructures=[]))[r]=i),e[r]=n)}return this.structures=e}decode(e,t){return this.unpack(e,t)}}function O(e){try{let t;if(!k.trusted&&!T){let e=h.sharedLength||0;e<h.length&&(h.length=e)}if(k._readStruct&&u[g]<64&&u[g]>=32?(t=k._readStruct(u,g,p),u=null,!(e&&e.lazy)&&t&&(t=t.toJSON()),g=p):t=M(),m&&(g=m.postBundlePosition,m=null),T&&(h.restoreStructures=null),g==p)h&&h.restoreStructures&&R(),h=null,u=null,f&&(f=null);else if(g>p)throw Error("Unexpected end of MessagePack data");else if(!T){let e;try{e=JSON.stringify(t,(e,t)=>"bigint"==typeof t?`${t}n`:t).slice(0,100)}catch(t){e="(JSON view not available "+t+")"}throw Error("Data read, but end of buffer not reached "+e)}return t}catch(e){throw h&&h.restoreStructures&&R(),eo(),(e instanceof RangeError||e.message.startsWith("Unexpected end of buffer")||g>p)&&(e.incomplete=!0),e}}function R(){for(let e in h.restoreStructures)h[e]=h.restoreStructures[e];h.restoreStructures=null}function M(){let e=u[g++];if(e<160){if(e<128){if(e<64)return e;{let t=h[63&e]||k.getStructures&&J()[63&e];return t?(t.read||(t.read=P(t,63&e)),t.read()):e}}if(e<144){if(e-=128,k.mapsAsObjects){let t={};for(let r=0;r<e;r++){let e=$();"__proto__"===e&&(e="__proto_"),t[e]=M()}return t}{let t=new Map;for(let r=0;r<e;r++)t.set(M(),M());return t}}{let t=Array(e-=144);for(let r=0;r<e;r++)t[r]=M();return k.freezeData?Object.freeze(t):t}}if(e<192){let t=e-160;if(I>=g)return y.slice(g-E,(g+=t)-E);if(0==I&&p<140){let e=t<16?W(t):U(t);if(null!=e)return e}return _(t)}{let t;switch(e){case 192:return null;case 193:if(m){if((t=M())>0)return m[1].slice(m.position1,m.position1+=t);return m[0].slice(m.position0,m.position0-=t)}return A;case 194:return!1;case 195:return!0;case 196:if(void 0===(t=u[g++]))throw Error("Unexpected end of buffer");return H(t);case 197:return t=b.getUint16(g),g+=2,H(t);case 198:return t=b.getUint32(g),g+=4,H(t);case 199:return Z(u[g++]);case 200:return t=b.getUint16(g),g+=2,Z(t);case 201:return t=b.getUint32(g),g+=4,Z(t);case 202:if(t=b.getFloat32(g),k.useFloat32>2){let e=el[(127&u[g])<<1|u[g+1]>>7];return g+=4,(e*t+(t>0?.5:-.5)>>0)/e}return g+=4,t;case 203:return t=b.getFloat64(g),g+=8,t;case 204:return u[g++];case 205:return t=b.getUint16(g),g+=2,t;case 206:return t=b.getUint32(g),g+=4,t;case 207:return"number"===k.int64AsType?t=4294967296*b.getUint32(g)+b.getUint32(g+4):"string"===k.int64AsType?t=b.getBigUint64(g).toString():"auto"===k.int64AsType?(t=b.getBigUint64(g))<=BigInt(2)<<BigInt(52)&&(t=Number(t)):t=b.getBigUint64(g),g+=8,t;case 208:return b.getInt8(g++);case 209:return t=b.getInt16(g),g+=2,t;case 210:return t=b.getInt32(g),g+=4,t;case 211:return"number"===k.int64AsType?t=4294967296*b.getInt32(g)+b.getUint32(g+4):"string"===k.int64AsType?t=b.getBigInt64(g).toString():"auto"===k.int64AsType?(t=b.getBigInt64(g))>=BigInt(-2)<<BigInt(52)&&t<=BigInt(2)<<BigInt(52)&&(t=Number(t)):t=b.getBigInt64(g),g+=8,t;case 212:if(114==(t=u[g++]))return et(63&u[g++]);{let e=w[t];if(e){if(e.read)return g++,e.read(M());if(e.noBuffer)return g++,e();return e(u.subarray(g,++g))}throw Error("Unknown extension "+t)}case 213:if(114==(t=u[g]))return g++,et(63&u[g++],u[g++]);return Z(2);case 214:return Z(4);case 215:return Z(8);case 216:return Z(16);case 217:if(t=u[g++],I>=g)return y.slice(g-E,(g+=t)-E);return F(t);case 218:if(t=b.getUint16(g),g+=2,I>=g)return y.slice(g-E,(g+=t)-E);return G(t);case 219:if(t=b.getUint32(g),g+=4,I>=g)return y.slice(g-E,(g+=t)-E);return q(t);case 220:return t=b.getUint16(g),g+=2,B(t);case 221:return t=b.getUint32(g),g+=4,B(t);case 222:return t=b.getUint16(g),g+=2,Y(t);case 223:return t=b.getUint32(g),g+=4,Y(t);default:if(e>=224)return e-256;if(void 0===e){let e=Error("Unexpected end of MessagePack data");throw e.incomplete=!0,e}throw Error("Unknown MessagePack token "+e)}}}let N=/^[a-zA-Z_$][a-zA-Z\d_$]*$/;function P(e,t){function r(){if(r.count++>C){let i;try{i=e.read=Function("r","return function(){return "+(k.freezeData?"Object.freeze":"")+"({"+e.map(e=>"__proto__"===e?"__proto_:r()":N.test(e)?e+":r()":"["+JSON.stringify(e)+"]:r()").join(",")+"})}")(M)}catch(e){return C=1/0,r()}return 0===e.highByte&&(e.read=L(t,e.read)),i()}let i={};for(let t=0,r=e.length;t<r;t++){let r=e[t];"__proto__"===r&&(r="__proto_"),i[r]=M()}return k.freezeData?Object.freeze(i):i}return(r.count=0,0===e.highByte)?L(t,r):r}let L=(e,t)=>function(){let r=u[g++];if(0===r)return t();let i=e<32?-(e+(r<<5)):e+(r<<5),n=h[i]||J()[i];if(!n)throw Error("Record id is not defined for "+i);return n.read||(n.read=P(n,e)),n.read()};function J(){let e=ea(()=>(u=null,k.getStructures()));return h=k._mergeStructures(e,h)}var _=V,F=V,G=V,q=V;function V(e){let t;if(e<16&&(t=W(e)))return t;if(e>64&&c)return c.decode(u.subarray(g,g+=e));let r=g+e,i=[];for(t="";g<r;){let e=u[g++];if((128&e)==0)i.push(e);else if((224&e)==192){let t=(31&e)<<6|63&u[g++];t<128?i.push(65533):i.push(t)}else if((240&e)==224){let t=(31&e)<<12|(63&u[g++])<<6|63&u[g++];t<2048||t>=55296&&t<=57343?i.push(65533):i.push(t)}else if((248&e)==240){let t=(7&e)<<18|(63&u[g++])<<12|(63&u[g++])<<6|63&u[g++];t<65536||t>1114111?i.push(65533):(t>65535&&(t-=65536,i.push(t>>>10&1023|55296),t=56320|1023&t),i.push(t))}else i.push(65533);i.length>=4096&&(t+=z.apply(String,i),i.length=0)}return i.length>0&&(t+=z.apply(String,i)),t}function B(e){let t=Array(e);for(let r=0;r<e;r++)t[r]=M();return k.freezeData?Object.freeze(t):t}function Y(e){if(k.mapsAsObjects){let t={};for(let r=0;r<e;r++){let e=$();"__proto__"===e&&(e="__proto_"),t[e]=M()}return t}{let t=new Map;for(let r=0;r<e;r++)t.set(M(),M());return t}}var z=String.fromCharCode;function U(e){let t=g,r=Array(e);for(let i=0;i<e;i++){let e=u[g++];if((128&e)>0){g=t;return}r[i]=e}return z.apply(String,r)}function W(e){if(e<4){if(e<2){if(0===e)return"";{let e=u[g++];if((128&e)>1){g-=1;return}return z(e)}}{let t=u[g++],r=u[g++];if((128&t)>0||(128&r)>0){g-=2;return}if(e<3)return z(t,r);let i=u[g++];if((128&i)>0){g-=3;return}return z(t,r,i)}}{let t=u[g++],r=u[g++],i=u[g++],n=u[g++];if((128&t)>0||(128&r)>0||(128&i)>0||(128&n)>0){g-=4;return}if(e<6){if(4===e)return z(t,r,i,n);{let e=u[g++];if((128&e)>0){g-=5;return}return z(t,r,i,n,e)}}if(e<8){let s=u[g++],a=u[g++];if((128&s)>0||(128&a)>0){g-=6;return}if(e<7)return z(t,r,i,n,s,a);let o=u[g++];if((128&o)>0){g-=7;return}return z(t,r,i,n,s,a,o)}{let s=u[g++],a=u[g++],o=u[g++],l=u[g++];if((128&s)>0||(128&a)>0||(128&o)>0||(128&l)>0){g-=8;return}if(e<10){if(8===e)return z(t,r,i,n,s,a,o,l);{let e=u[g++];if((128&e)>0){g-=9;return}return z(t,r,i,n,s,a,o,l,e)}}if(e<12){let d=u[g++],c=u[g++];if((128&d)>0||(128&c)>0){g-=10;return}if(e<11)return z(t,r,i,n,s,a,o,l,d,c);let p=u[g++];if((128&p)>0){g-=11;return}return z(t,r,i,n,s,a,o,l,d,c,p)}{let d=u[g++],c=u[g++],p=u[g++],h=u[g++];if((128&d)>0||(128&c)>0||(128&p)>0||(128&h)>0){g-=12;return}if(e<14){if(12===e)return z(t,r,i,n,s,a,o,l,d,c,p,h);{let e=u[g++];if((128&e)>0){g-=13;return}return z(t,r,i,n,s,a,o,l,d,c,p,h,e)}}{let y=u[g++],m=u[g++];if((128&y)>0||(128&m)>0){g-=14;return}if(e<15)return z(t,r,i,n,s,a,o,l,d,c,p,h,y,m);let f=u[g++];if((128&f)>0){g-=15;return}return z(t,r,i,n,s,a,o,l,d,c,p,h,y,m,f)}}}}}function Q(){let e,t=u[g++];if(t<192)e=t-160;else switch(t){case 217:e=u[g++];break;case 218:e=b.getUint16(g),g+=2;break;case 219:e=b.getUint32(g),g+=4;break;default:throw Error("Expected string")}return V(e)}function H(e){return k.copyBuffers?Uint8Array.prototype.slice.call(u,g,g+=e):u.subarray(g,g+=e)}function Z(e){let t=u[g++];if(w[t]){let r;return w[t](u.subarray(g,r=g+=e),e=>{g=e;try{return M()}finally{g=r}})}throw Error("Unknown extension type "+t)}var X=Array(4096);function $(){let e,t=u[g++];if(!(t>=160)||!(t<192))return g--,ee(M());if(t-=160,I>=g)return y.slice(g-E,(g+=t)-E);if(!(0==I&&p<180))return _(t);let r=(t<<5^(t>1?b.getUint16(g):t>0?u[g]:0))&4095,i=X[r],n=g,s=g+t-3,a=0;if(i&&i.bytes==t){for(;n<s;){if((e=b.getUint32(n))!=i[a++]){n=1879048192;break}n+=4}for(s+=3;n<s;)if((e=u[n++])!=i[a++]){n=1879048192;break}if(n===s)return g=n,i.string;s-=3,n=g}for(i=[],X[r]=i,i.bytes=t;n<s;)e=b.getUint32(n),i.push(e),n+=4;for(s+=3;n<s;)e=u[n++],i.push(e);let o=t<16?W(t):U(t);return null!=o?i.string=o:i.string=_(t)}function ee(e){if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e||"bigint"==typeof e)return e.toString();if(null==e)return e+"";if(k.allowArraysInMapKeys&&Array.isArray(e)&&e.flat().every(e=>["string","number","boolean","bigint"].includes(typeof e)))return e.flat().toString();throw Error(`Invalid property type for record: ${typeof e}`)}let et=(e,t)=>{let r=M().map(ee),i=e;void 0!==t&&(e=e<32?-((t<<5)+e):(t<<5)+e,r.highByte=t);let n=h[e];return n&&(n.isShared||T)&&((h.restoreStructures||(h.restoreStructures=[]))[e]=n),h[e]=r,r.read=P(r,i),r.read()};w[0]=()=>{},w[0].noBuffer=!0,w[66]=e=>{let t=e.byteLength%8||8,r=BigInt(128&e[0]?e[0]-256:e[0]);for(let i=1;i<t;i++)r<<=BigInt(8),r+=BigInt(e[i]);if(e.byteLength!==t){let i=new DataView(e.buffer,e.byteOffset,e.byteLength),n=(e,t)=>{let r=t-e;if(r<=40){let r=i.getBigUint64(e);for(let n=e+8;n<t;n+=8)r<<=BigInt(64),r|=i.getBigUint64(n);return r}let s=e+(r>>4<<3),a=n(e,s),o=n(s,t);return a<<BigInt((t-s)*8)|o};r=r<<BigInt((i.byteLength-t)*8)|n(t,i.byteLength)}return r};let er={Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,AggregateError:"function"==typeof AggregateError?AggregateError:null};w[101]=()=>{let e=M();if(!er[e[0]]){let t=Error(e[1],{cause:e[2]});return t.name=e[0],t}return er[e[0]](e[1],{cause:e[2]})},w[105]=e=>{let t;if(!1===k.structuredClone)throw Error("Structured clone extension is disabled");let r=b.getUint32(g-4);f||(f=new Map);let i=u[g],n={target:t=i>=144&&i<160||220==i||221==i?[]:i>=128&&i<144||222==i||223==i?new Map:(i>=199&&i<=201||i>=212&&i<=216)&&115===u[g+1]?new Set:{}};f.set(r,n);let s=M();if(!n.used)return n.target=s;if(Object.assign(t,s),t instanceof Map)for(let[e,r]of s.entries())t.set(e,r);if(t instanceof Set)for(let e of Array.from(s))t.add(e);return t},w[112]=e=>{if(!1===k.structuredClone)throw Error("Structured clone extension is disabled");let t=b.getUint32(g-4),r=f.get(t);return r.used=!0,r.target},w[115]=()=>new Set(M());let ei=["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64","BigInt64","BigUint64"].map(e=>e+"Array"),en="object"==typeof globalThis?globalThis:window;w[116]=e=>{let t=e[0],r=Uint8Array.prototype.slice.call(e,1).buffer,i=ei[t];if(!i){if(16===t)return r;if(17===t)return new DataView(r);throw Error("Could not find typed array for code "+t)}return new en[i](r)},w[120]=()=>{let e=M();return new RegExp(e[0],e[1])};let es=[];function ea(e){k&&k._onSaveState&&k._onSaveState();let t=p,r=g,i=K,n=E,s=I,a=y,o=v,l=f,d=m,c=new Uint8Array(u.slice(0,p)),S=h,w=h.slice(0,h.length),j=k,x=T,A=e();return p=t,g=r,K=i,E=n,I=s,y=a,v=o,f=l,m=d,u=c,T=x,(h=S).splice(0,h.length,...w),k=j,b=new DataView(u.buffer,u.byteOffset,u.byteLength),A}function eo(){u=null,f=null,h=null}w[98]=e=>{let t=(e[0]<<24)+(e[1]<<16)+(e[2]<<8)+e[3],r=g;return g+=t-e.length,m=es,(m=[Q(),Q()]).position0=0,m.position1=0,m.postBundlePosition=g,g=r,M()},w[255]=e=>new Date(4==e.length?(16777216*e[0]+(e[1]<<16)+(e[2]<<8)+e[3])*1e3:8==e.length?((e[0]<<22)+(e[1]<<14)+(e[2]<<6)+(e[3]>>2))/1e6+((3&e[3])*4294967296+16777216*e[4]+(e[5]<<16)+(e[6]<<8)+e[7])*1e3:12==e.length?((e[0]<<24)+(e[1]<<16)+(e[2]<<8)+e[3])/1e6+((128&e[4]?-281474976710656:0)+1099511627776*e[6]+4294967296*e[7]+16777216*e[8]+(e[9]<<16)+(e[10]<<8)+e[11])*1e3:"invalid");let el=Array(147);for(let e=0;e<256;e++)el[e]=+("1e"+Math.floor(45.15-.30103*e));var ed=new D({useRecords:!1});ed.unpack,ed.unpackMultiple,ed.unpack,new Uint8Array(new Float32Array(1).buffer,0,4),D.SUPPORTS_STRUCT_HOOKS=!0;try{i=new TextEncoder}catch(e){}let ec="undefined"!=typeof Buffer,eu=ec?function(e){return Buffer.allocUnsafeSlow(e)}:Uint8Array,ep=ec?Buffer:Uint8Array,eh=ec?4294967296:2144337920,ey=0,em=null,ef=/[\u0080-\uFFFF]/,eb=Symbol("record-id");class eg extends D{constructor(e){let t,r,c,u;super(e),this.offset=0;let p=ep.prototype.utf8Write?function(e,t){return a.utf8Write(e,t,a.byteLength-t)}:!!i&&!!i.encodeInto&&function(e,t){return i.encodeInto(e,a.subarray(t)).written},h=this;e||(e={});let y=e&&e.sequential,m=e.structures||e.saveStructures,f=e.maxSharedStructures;if(null==f&&(f=m?32:0),f>8160)throw Error("Maximum maxSharedStructure is 8160");e.structuredClone&&void 0==e.moreTypes&&(this.moreTypes=!0);let b=e.maxOwnStructures;null==b&&(b=m?32:64),this.structures||!1==e.useRecords||(this.structures=[]);let g=f>32||b+f>64,S=f+64,v=f+b+64;if(v>8256)throw Error("Maximum maxSharedStructure + maxOwnStructure is 8192");let K=[],k=0,E=0;this.pack=this.encode=function(e,i){let n;if(a||(l=(a=new eu(8192)).dataView||(a.dataView=new DataView(a.buffer,0,8192)),ey=0),(d=a.length-10)-ey<2048?(l=(a=new eu(a.length)).dataView||(a.dataView=new DataView(a.buffer,0,a.length)),d=a.length-10,ey=0):ey=ey+7&2147483640,t=ey,i&eC&&(ey+=255&i),u=h.structuredClone?new Map:null,h.bundleStrings&&"string"!=typeof e?(em=[]).size=1/0:em=null,c=h.structures){c.uninitialized&&(c=h._mergeStructures(h.getStructures()));let e=c.sharedLength||0;if(e>f)throw Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to "+c.sharedLength);if(!c.transitions){c.transitions=Object.create(null);for(let t=0;t<e;t++){let e=c[t];if(!e)continue;let r,i=c.transitions;for(let t=0,n=e.length;t<n;t++){let n=e[t];(r=i[n])||(r=i[n]=Object.create(null)),i=r}i[eb]=t+64}this.lastNamedStructuresLength=e}y||(c.nextId=e+64)}r&&(r=!1);try{h._writeStruct&&e&&"object"==typeof e?e.constructor===Object?D(e):e.constructor===Map||Array.isArray(e)||s.some(t=>e instanceof t)?j(e):D(e.toJSON?e.toJSON():e):j(e);let r=em;if(em&&ek(t,j,0),u&&u.idsToInsert){let e=u.idsToInsert.sort((e,t)=>e.offset>t.offset?1:-1),i=e.length,n=-1;for(;r&&i>0;){let s=e[--i].offset+t;s<r.stringsPosition+t&&-1===n&&(n=0),s>r.position+t?n>=0&&(n+=6):(n>=0&&(l.setUint32(r.position+t,l.getUint32(r.position+t)+n),n=-1),r=r.previous,i++)}n>=0&&r&&l.setUint32(r.position+t,l.getUint32(r.position+t)+n),(ey+=6*e.length)>d&&O(ey),h.offset=ey;let s=function(e,t){let r;let i=6*t.length,n=e.length-i;for(;r=t.pop();){let t=r.offset,s=r.id;e.copyWithin(t+i,t,n);let a=t+(i-=6);e[a++]=214,e[a++]=105,e[a++]=s>>24,e[a++]=s>>16&255,e[a++]=s>>8&255,e[a++]=255&s,n=t}return e}(a.subarray(t,ey),e);return u=null,s}if(h.offset=ey,i&eA)return a.start=t,a.end=ey,a;return a.subarray(t,ey)}catch(e){throw n=e,e}finally{if(c&&(I(),r&&h.saveStructures)){let r=c.sharedLength||0,s=a.subarray(t,ey),o=(h._prepareStructures||function(e,t){return e.isCompatible=e=>{let r=!e||(t.lastNamedStructuresLength||0)===e.length;return r||t._mergeStructures(e),r},e})(c,h);if(!n){if(!1===h.saveStructures(o,o.isCompatible))return h.pack(e,i);return h.lastNamedStructuresLength=r,a.length>1073741824&&(a=null),s}}a.length>1073741824&&(a=null),i&eT&&(ey=t)}};let I=()=>{E<10&&E++;let e=c.sharedLength||0;if(c.length>e&&!y&&(c.length=e),k>1e4)c.transitions=null,E=0,k=0,K.length>0&&(K=[]);else if(K.length>0&&!y){for(let e=0,t=K.length;e<t;e++)K[e][eb]=0;K=[]}},w=e=>{var t=e.length;t<16?a[ey++]=144|t:t<65536?(a[ey++]=220,a[ey++]=t>>8,a[ey++]=255&t):(a[ey++]=221,l.setUint32(ey,t),ey+=4);for(let r=0;r<t;r++)j(e[r])},j=e=>{ey>d&&(a=O(ey));var r,i=typeof e;if("string"===i){let i,n=e.length;if(em&&n>=4&&n<4096){if((em.size+=n)>21760){let e,r;let i=(em[0]?3*em[0].length+em[1].length:0)+10;ey+i>d&&(a=O(ey+i)),em.position?(r=em,a[ey]=200,ey+=3,a[ey++]=98,e=ey-t,ey+=4,ek(t,j,0),l.setUint16(e+t-3,ey-t-e)):(a[ey++]=214,a[ey++]=98,e=ey-t,ey+=4),(em=["",""]).previous=r,em.size=0,em.position=e}let r=ef.test(e);em[r?0:1]+=e,a[ey++]=193,j(r?-n:n);return}i=n<32?1:n<256?2:n<65536?3:5;let s=3*n;if(ey+s>d&&(a=O(ey+s)),n<64||!p){let t,s,o,l=ey+i;for(t=0;t<n;t++)(s=e.charCodeAt(t))<128?a[l++]=s:(s<2048?a[l++]=s>>6|192:((64512&s)==55296&&(64512&(o=e.charCodeAt(t+1)))==56320?(s=65536+((1023&s)<<10)+(1023&o),t++,a[l++]=s>>18|240,a[l++]=s>>12&63|128):a[l++]=s>>12|224,a[l++]=s>>6&63|128),a[l++]=63&s|128);r=l-ey-i}else r=p(e,ey+i);r<32?a[ey++]=160|r:r<256?(i<2&&a.copyWithin(ey+2,ey+1,ey+1+r),a[ey++]=217,a[ey++]=r):r<65536?(i<3&&a.copyWithin(ey+3,ey+2,ey+2+r),a[ey++]=218,a[ey++]=r>>8,a[ey++]=255&r):(i<5&&a.copyWithin(ey+5,ey+3,ey+3+r),a[ey++]=219,l.setUint32(ey,r),ey+=4),ey+=r}else if("number"===i){if(e>>>0===e)e<32||e<128&&!1===this.useRecords||e<64&&!this._writeStruct?a[ey++]=e:e<256?(a[ey++]=204,a[ey++]=e):e<65536?(a[ey++]=205,a[ey++]=e>>8,a[ey++]=255&e):(a[ey++]=206,l.setUint32(ey,e),ey+=4);else if(e>>0===e)e>=-32?a[ey++]=256+e:e>=-128?(a[ey++]=208,a[ey++]=e+256):e>=-32768?(a[ey++]=209,l.setInt16(ey,e),ey+=2):(a[ey++]=210,l.setInt32(ey,e),ey+=4);else{let t;if((t=this.useFloat32)>0&&e<4294967296&&e>=-2147483648){let r;if(a[ey++]=202,l.setFloat32(ey,e),t<4||(r=e*el[(127&a[ey])<<1|a[ey+1]>>7])>>0===r){ey+=4;return}ey--}a[ey++]=203,l.setFloat64(ey,e),ey+=8}}else if("object"===i||"function"===i){if(e){if(u){let r=u.get(e);if(r){if(!r.id){let e=u.idsToInsert||(u.idsToInsert=[]);r.id=e.push(r)}a[ey++]=214,a[ey++]=112,l.setUint32(ey,r.id),ey+=4;return}u.set(e,{offset:ey-t})}let o=e.constructor;if(o===Object)C(e);else if(o===Array)w(e);else if(o===Map){if(this.mapAsEmptyObject)a[ey++]=128;else for(let[t,i]of((r=e.size)<16?a[ey++]=128|r:r<65536?(a[ey++]=222,a[ey++]=r>>8,a[ey++]=255&r):(a[ey++]=223,l.setUint32(ey,r),ey+=4),e))j(t),j(i)}else{for(let t=0,r=n.length;t<r;t++)if(e instanceof s[t]){let r,i=n[t];if(i.write){i.type&&(a[ey++]=212,a[ey++]=i.type,a[ey++]=0);let t=i.write.call(this,e);t===e?Array.isArray(e)?w(e):C(e):j(t);return}let s=a,o=l,c=ey;a=null;try{r=i.pack.call(this,e,e=>(a=s,s=null,(ey+=e)>d&&O(ey),{target:a,targetView:l,position:ey-e}),j)}finally{s&&(a=s,l=o,ey=c,d=a.length-10)}r&&(r.length+ey>d&&O(r.length+ey),ey=eK(r,a,ey,i.type));return}if(Array.isArray(e))w(e);else{if(e.toJSON){let t=e.toJSON();if(t!==e)return j(t)}if("function"===i)return j(this.writeFunction&&this.writeFunction(e));C(e)}}}else a[ey++]=192}else if("boolean"===i)a[ey++]=e?195:194;else if("bigint"===i){if(e<0x7fffffffffffffff&&e>=-0x8000000000000000)a[ey++]=211,l.setBigInt64(ey,e);else if(e<18446744073709552e3&&e>0)a[ey++]=207,l.setBigUint64(ey,e);else if(this.largeBigIntToFloat)a[ey++]=203,l.setFloat64(ey,Number(e));else if(this.largeBigIntToString)return j(e.toString());else if(this.useBigIntExtension||this.moreTypes){let t,r=e<0?BigInt(-1):BigInt(0);if(e>>BigInt(65536)===r){let i=BigInt(18446744073709552e3)-BigInt(1),n=[];for(;n.push(e&i),e>>BigInt(63)!==r;)e>>=BigInt(64);(t=new Uint8Array(new BigUint64Array(n).buffer)).reverse()}else{let r=e<0,i=(r?~e:e).toString(16);if(i.length%2?i="0"+i:parseInt(i.charAt(0),16)>=8&&(i="00"+i),ec)t=Buffer.from(i,"hex");else{t=new Uint8Array(i.length/2);for(let e=0;e<t.length;e++)t[e]=parseInt(i.slice(2*e,2*e+2),16)}if(r)for(let e=0;e<t.length;e++)t[e]=~t[e]}t.length+ey>d&&O(t.length+ey),ey=eK(t,a,ey,66);return}else throw RangeError(e+" was too large to fit in MessagePack 64-bit integer format, use useBigIntExtension, or set largeBigIntToFloat to convert to float-64, or set largeBigIntToString to convert to string");ey+=8}else if("undefined"===i)this.encodeUndefinedAsNil?a[ey++]=192:(a[ey++]=212,a[ey++]=0,a[ey++]=0);else throw Error("Unknown type: "+i)},x=this.variableMapSize||this.coercibleKeyAsNumber||this.skipValues?e=>{let t,r;if(this.skipValues)for(let r in t=[],e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(r))&&!this.skipValues.includes(e[r])&&t.push(r);else t=Object.keys(e);let i=t.length;if(i<16?a[ey++]=128|i:i<65536?(a[ey++]=222,a[ey++]=i>>8,a[ey++]=255&i):(a[ey++]=223,l.setUint32(ey,i),ey+=4),this.coercibleKeyAsNumber)for(let n=0;n<i;n++){let i=Number(r=t[n]);j(isNaN(i)?r:i),j(e[r])}else for(let n=0;n<i;n++)j(r=t[n]),j(e[r])}:e=>{a[ey++]=222;let r=ey-t;ey+=2;let i=0;for(let t in e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(t))&&(j(t),j(e[t]),i++);if(i>65535)throw Error('Object is too large to serialize with fast 16-bit map size, use the "variableMapSize" option to serialize this object');a[r+++t]=i>>8,a[r+t]=255&i},A=!1===this.useRecords?x:e.progressiveRecords&&!g?e=>{let r,i,n=c.transitions||(c.transitions=Object.create(null)),s=ey++-t;for(let a in e)if("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(a)){if(i=n[a])n=i;else{let o=Object.keys(e),l=n;n=c.transitions;let d=0;for(let e=0,t=o.length;e<t;e++){let t=o[e];!(i=n[t])&&(i=n[t]=Object.create(null),d++),n=i}s+t+1==ey?(ey--,R(n,o,d)):M(n,o,s,d),r=!0,n=l[a]}j(e[a])}if(!r){let r=n[eb];r?a[s+t]=r:M(n,Object.keys(e),s,0)}}:e=>{let t,r=c.transitions||(c.transitions=Object.create(null)),i=0;for(let n in e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(n))&&(!(t=r[n])&&(t=r[n]=Object.create(null),i++),r=t);let n=r[eb];for(let t in n?n>=96&&g?(a[ey++]=(31&(n-=96))+96,a[ey++]=n>>5):a[ey++]=n:R(r,r.__keys__||Object.keys(e),i),e)("function"!=typeof e.hasOwnProperty||e.hasOwnProperty(t))&&j(e[t])},T="function"==typeof this.useRecords&&this.useRecords,C=T?e=>{T(e)?A(e):x(e)}:A,D=e=>{let i=h._writeStruct(e,a,t,ey,c,O,(e,t,i)=>{if(i)return r=!0;ey=t;let n=a;return(j(e),I(),n!==a)?{position:ey,targetView:l,target:a}:ey});if(0===i)return C(e);ey=i},O=e=>{let r;if(e>16777216){if(e-t>eh)throw Error("Packed buffer would be larger than maximum buffer size");r=Math.min(eh,4096*Math.round(Math.max((e-t)*(e>67108864?1.25:2),4194304)/4096))}else r=(Math.max(e-t<<2,a.length-1)>>12)+1<<12;let i=new eu(r);return l=i.dataView||(i.dataView=new DataView(i.buffer,0,r)),e=Math.min(e,a.length),a.copy?a.copy(i,0,t,e):i.set(a.slice(t,e)),ey-=t,t=0,d=i.length-10,a=i},R=(e,t,i)=>{let n=c.nextId;n||(n=64),n<S&&this.shouldShareStructure&&!this.shouldShareStructure(t)?((n=c.nextOwnId)<v||(n=S),c.nextOwnId=n+1):(n>=v&&(n=S),c.nextId=n+1);let s=t.highByte=n>=96&&g?n-96>>5:-1;e[eb]=n,e.__keys__=t,c[n-64]=t,n<S?(t.isShared=!0,c.sharedLength=n-63,r=!0,s>=0?(a[ey++]=(31&n)+96,a[ey++]=s):a[ey++]=n):(s>=0?(a[ey++]=213,a[ey++]=114,a[ey++]=(31&n)+96,a[ey++]=s):(a[ey++]=212,a[ey++]=114,a[ey++]=n),i&&(k+=E*i),K.length>=b&&(K.shift()[eb]=0),K.push(e),j(t))},M=(e,r,i,n)=>{let s=a,l=ey,c=d,u=t;ey=0,t=0,(a=o)||(o=a=new eu(8192)),d=a.length-10,R(e,r,n),o=a;let p=ey;if(a=s,ey=l,d=c,t=u,p>1){let e=ey+p-1;e>d&&O(e);let r=i+t;a.copyWithin(r+p,r+1,ey),a.set(o.slice(0,p),r),ey=e}else a[i+t]=o[0]}}useBuffer(e){(a=e).dataView||(a.dataView=new DataView(a.buffer,a.byteOffset,a.byteLength)),l=a.dataView,ey=0}set position(e){ey=e}get position(){return ey}clearSharedData(){this.structures&&(this.structures=[]),this.typedStructs&&(this.typedStructs=[])}}function eS(e,t,r,i){let n=e.byteLength;if(n+1<256){var{target:s,position:a}=r(4+n);s[a++]=199,s[a++]=n+1}else if(n+1<65536){var{target:s,position:a}=r(5+n);s[a++]=200,s[a++]=n+1>>8,s[a++]=n+1&255}else{var{target:s,position:a,targetView:o}=r(7+n);s[a++]=201,o.setUint32(a,n+1),a+=4}s[a++]=116,s[a++]=t,e.buffer||(e=new Uint8Array(e)),s.set(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),a)}function ev(e,t){let r=e.byteLength;if(r<256){var i,n,{target:i,position:n}=t(r+2);i[n++]=196,i[n++]=r}else if(r<65536){var{target:i,position:n}=t(r+3);i[n++]=197,i[n++]=r>>8,i[n++]=255&r}else{var{target:i,position:n,targetView:s}=t(r+5);i[n++]=198,s.setUint32(n,r),n+=4}i.set(e,n)}function eK(e,t,r,i){let n=e.length;switch(n){case 1:t[r++]=212;break;case 2:t[r++]=213;break;case 4:t[r++]=214;break;case 8:t[r++]=215;break;case 16:t[r++]=216;break;default:n<256?(t[r++]=199,t[r++]=n):(n<65536?(t[r++]=200,t[r++]=n>>8):(t[r++]=201,t[r++]=n>>24,t[r++]=n>>16&255,t[r++]=n>>8&255),t[r++]=255&n)}return t[r++]=i,t.set(e,r),r+=n}function ek(e,t,r){if(em.length>0){l.setUint32(em.position+e,ey+r-em.position-e),em.stringsPosition=ey-e;let i=em;em=null,t(i[0]),t(i[1])}}s=[Date,Set,Error,RegExp,ArrayBuffer,Object.getPrototypeOf(Uint8Array.prototype).constructor,DataView,x],n=[{pack(e,t,r){let i=e.getTime()/1e3;if((this.useTimestamp32||0===e.getMilliseconds())&&i>=0&&i<4294967296){let{target:e,targetView:r,position:n}=t(6);e[n++]=214,e[n++]=255,r.setUint32(n,i)}else if(i>0&&i<4294967296){let{target:r,targetView:n,position:s}=t(10);r[s++]=215,r[s++]=255,n.setUint32(s,4e6*e.getMilliseconds()+(i/1e3/4294967296>>0)),n.setUint32(s+4,i)}else if(isNaN(i)){if(this.onInvalidDate)return t(0),r(this.onInvalidDate());let{target:e,targetView:i,position:n}=t(3);e[n++]=212,e[n++]=255,e[n++]=255}else{let{target:r,targetView:n,position:s}=t(15);r[s++]=199,r[s++]=12,r[s++]=255,n.setUint32(s,1e6*e.getMilliseconds()),n.setBigInt64(s+4,BigInt(Math.floor(i)))}}},{pack(e,t,r){if(this.setAsEmptyObject)return t(0),r({});let i=Array.from(e),{target:n,position:s}=t(this.moreTypes?3:0);this.moreTypes&&(n[s++]=212,n[s++]=115,n[s++]=0),r(i)}},{pack(e,t,r){let{target:i,position:n}=t(this.moreTypes?3:0);this.moreTypes&&(i[n++]=212,i[n++]=101,i[n++]=0),r([e.name,e.message,e.cause])}},{pack(e,t,r){let{target:i,position:n}=t(this.moreTypes?3:0);this.moreTypes&&(i[n++]=212,i[n++]=120,i[n++]=0),r([e.source,e.flags])}},{pack(e,t){this.moreTypes?eS(e,16,t):ev(ec?Buffer.from(e):new Uint8Array(e),t)}},{pack(e,t){let r=e.constructor;r!==ep&&this.moreTypes?eS(e,ei.indexOf(r.name),t):ev(e,t)}},{pack(e,t){this.moreTypes?eS(e,17,t):ev(ec?Buffer.from(e):new Uint8Array(e),t)}},{pack(e,t){let{target:r,position:i}=t(1);r[i]=193}}],eg.SUPPORTS_STRUCT_HOOKS=!0;let eE=new eg({useRecords:!1});eE.pack,eE.pack;let{NEVER:eI,ALWAYS:ew,DECIMAL_ROUND:ej,DECIMAL_FIT:ex}={NEVER:0,ALWAYS:1,DECIMAL_ROUND:3,DECIMAL_FIT:4},eA=512,eT=1024,eC=2048;r(12781);let eD=require("module");if(!(void 0!==process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED&&"true"===process.env.MSGPACKR_NATIVE_ACCELERATION_DISABLED.toLowerCase())){let e;try{"function"==typeof require?e=require("msgpackr-extract"):e=(0,eD.createRequire)("file:///C:/Users/DELL/Documents/Facereal/node_modules/msgpackr/node-index.js")("msgpackr-extract"),e&&function(e){function t(t){return function(r){let i=v[K++];if(null==i){if(m)return V(r);let n=u.byteOffset,s=e(g-t+n,p+n,u.buffer);if("string"==typeof s)i=s,v=S;else if(K=1,I=1,void 0===(i=(v=s)[0]))throw Error("Unexpected end of buffer")}let n=i.length;return n<=r?(g+=r,i):(y=i,E=g,I=g+n,g+=r,i.slice(0,r))}}_=t(1),F=t(2),G=t(3),q=t(5)}(e.extractStrings)}catch(e){}}var eO=r(5315),eR=r(25619),eM=r(2036),eN=r(73233);let eP=new eg({useRecords:!1,encodeUndefinedAsNil:!0}).pack;class eL{constructor(e){this.queue=e,this.version=eM.i;let t=this.queue.keys;this.moveToFinishedKeys=[t.wait,t.active,t.prioritized,t.events,t.stalled,t.limiter,t.delayed,t.paused,t.meta,t.pc,void 0,void 0,void 0,void 0]}execCommand(e,t,r){let i=`${t}:${this.version}`;return e.runCommand(i,r)}async isJobInList(e,t){let r=await this.queue.client;return Number.isInteger((0,eR.J3)(this.queue.redisVersion,"6.0.6",this.queue.databaseType)?await this.execCommand(r,"isJobInList",[e,t]):await r.lpos(e,t))}addDelayedJobArgs(e,t,r){let i=this.queue.keys,n=[i.marker,i.meta,i.id,i.delayed,i.completed,i.events];return n.push(eP(r),e.data,t),n}addDelayedJob(e,t,r,i){let n=this.addDelayedJobArgs(t,r,i);return this.execCommand(e,"addDelayedJob",n)}addPrioritizedJobArgs(e,t,r){let i=this.queue.keys,n=[i.marker,i.meta,i.id,i.prioritized,i.delayed,i.completed,i.active,i.events,i.pc];return n.push(eP(r),e.data,t),n}addPrioritizedJob(e,t,r,i){let n=this.addPrioritizedJobArgs(t,r,i);return this.execCommand(e,"addPrioritizedJob",n)}addParentJobArgs(e,t,r){let i=this.queue.keys,n=[i.meta,i.id,i.delayed,i["waiting-children"],i.completed,i.events];return n.push(eP(r),e.data,t),n}addParentJob(e,t,r,i){let n=this.addParentJobArgs(t,r,i);return this.execCommand(e,"addParentJob",n)}addStandardJobArgs(e,t,r){let i=this.queue.keys,n=[i.wait,i.paused,i.meta,i.id,i.completed,i.delayed,i.active,i.events,i.marker];return n.push(eP(r),e.data,t),n}addStandardJob(e,t,r,i){let n=this.addStandardJobArgs(t,r,i);return this.execCommand(e,"addStandardJob",n)}async addJob(e,t,r,i,n={}){let s,a;let o=this.queue.keys,l=t.parent,d=[o[""],void 0!==i?i:"",t.name,t.timestamp,t.parentKey||null,n.parentDependenciesKey||null,l,t.repeatJobKey,t.deduplicationId?`${o.de}:${t.deduplicationId}`:null];if(r.repeat){let e=Object.assign({},r.repeat);e.startDate&&(e.startDate=+new Date(e.startDate)),e.endDate&&(e.endDate=+new Date(e.endDate)),s=eP(Object.assign(Object.assign({},r),{repeat:e}))}else s=eP(r);if((a=n.addToWaitingChildren?await this.addParentJob(e,t,s,d):"number"==typeof r.delay&&r.delay>0?await this.addDelayedJob(e,t,s,d):r.priority?await this.addPrioritizedJob(e,t,s,d):await this.addStandardJob(e,t,s,d))<0)throw this.finishedErrors({code:a,parentKey:n.parentKey,command:"addJob"});return a}pauseArgs(e){let t="wait",r="paused";e||(t="paused",r="wait");let i=[t,r,"meta","prioritized"].map(e=>this.queue.toKey(e));return i.push(this.queue.keys.events,this.queue.keys.delayed,this.queue.keys.marker),i.concat([e?"paused":"resumed"])}async pause(e){let t=await this.queue.client,r=this.pauseArgs(e);return this.execCommand(t,"pause",r)}addRepeatableJobArgs(e,t,r,i){let n=this.queue.keys;return[n.repeat,n.delayed].concat([t,eP(r),i,e,n[""]])}async addRepeatableJob(e,t,r,i){let n=await this.queue.client,s=this.addRepeatableJobArgs(e,t,r,i);return this.execCommand(n,"addRepeatableJob",s)}async removeDeduplicationKey(e,t){let r=await this.queue.client,i=this.queue.keys,n=[`${i.de}:${e}`];return this.execCommand(r,"removeDeduplicationKey",n.concat([t]))}async addJobScheduler(e,t,r,i,n,s,a){let o=await this.queue.client,l=this.queue.keys,d=[l.repeat,l.delayed,l.wait,l.paused,l.meta,l.prioritized,l.marker,l.id,l.events,l.pc,l.active],c=[t,eP(n),e,r,eP(i),eP(s),Date.now(),l[""],a?this.queue.toKey(a):""],u=await this.execCommand(o,"addJobScheduler",d.concat(c));if("number"==typeof u&&u<0)throw this.finishedErrors({code:u,command:"addJobScheduler"});return u}async updateRepeatableJobMillis(e,t,r,i){let n=[this.queue.keys.repeat,r,t,i];return this.execCommand(e,"updateRepeatableJobMillis",n)}async updateJobSchedulerNextMillis(e,t,r,i,n){let s=await this.queue.client,a=this.queue.keys,o=[a.repeat,a.delayed,a.wait,a.paused,a.meta,a.prioritized,a.marker,a.id,a.events,a.pc,n?this.queue.toKey(n):"",a.active],l=[t,e,r,eP(i),Date.now(),a[""],n];return this.execCommand(s,"updateJobScheduler",o.concat(l))}removeRepeatableArgs(e,t,r){let i=this.queue.keys;return[i.repeat,i.delayed,i.events].concat([e,this.getRepeatConcatOptions(t,r),r,i[""]])}getRepeatConcatOptions(e,t){return t&&t.split(":").length>2?t:e}async removeRepeatable(e,t,r){let i=await this.queue.client,n=this.removeRepeatableArgs(e,t,r);return this.execCommand(i,"removeRepeatable",n)}async removeJobScheduler(e){let t=await this.queue.client,r=this.queue.keys,i=[r.repeat,r.delayed,r.events],n=[e,r[""]];return this.execCommand(t,"removeJobScheduler",i.concat(n))}removeArgs(e,t){let r=[e,"repeat"].map(e=>this.queue.toKey(e)),i=[e,t?1:0,this.queue.toKey("")];return r.concat(i)}async remove(e,t){let r=await this.queue.client,i=this.removeArgs(e,t),n=await this.execCommand(r,"removeJob",i);if(n<0)throw this.finishedErrors({code:n,jobId:e,command:"removeJob"});return n}async removeUnprocessedChildren(e){let t=await this.queue.client,r=[this.queue.toKey(e),this.queue.keys.meta,this.queue.toKey(""),e];await this.execCommand(t,"removeUnprocessedChildren",r)}async extendLock(e,t,r,i){i=i||await this.queue.client;let n=[this.queue.toKey(e)+":lock",this.queue.keys.stalled,t,r,e];return this.execCommand(i,"extendLock",n)}async extendLocks(e,t,r){let i=await this.queue.client,n=[this.queue.keys.stalled,this.queue.toKey(""),eP(t),eP(e),r];return this.execCommand(i,"extendLocks",n)}async updateData(e,t){let r=await this.queue.client,i=[this.queue.toKey(e.id)],n=JSON.stringify(t),s=await this.execCommand(r,"updateData",i.concat([n]));if(s<0)throw this.finishedErrors({code:s,jobId:e.id,command:"updateData"})}async updateProgress(e,t){let r=await this.queue.client,i=[this.queue.toKey(e),this.queue.keys.events,this.queue.keys.meta],n=JSON.stringify(t),s=await this.execCommand(r,"updateProgress",i.concat([e,n]));if(s<0)throw this.finishedErrors({code:s,jobId:e,command:"updateProgress"})}async addLog(e,t,r){let i=await this.queue.client,n=[this.queue.toKey(e),this.queue.toKey(e)+":logs"],s=await this.execCommand(i,"addLog",n.concat([e,t,r||""]));if(s<0)throw this.finishedErrors({code:s,jobId:e,command:"addLog"});return s}moveToFinishedArgs(e,t,r,i,n,s,a,o=!0,l){var d,c,u,p,h,y,m;let f=this.queue.keys,b=this.queue.opts,g="completed"===n?b.removeOnComplete:b.removeOnFail,S=this.queue.toKey(`metrics:${n}`),v=this.moveToFinishedKeys;v[10]=f[n],v[11]=this.queue.toKey(null!==(d=e.id)&&void 0!==d?d:""),v[12]=S,v[13]=this.queue.keys.marker;let K=this.getKeepJobs(i,g),k=[e.id,a,r,void 0===t?"null":t,n,!o||this.queue.closing?0:1,f[""],eP({token:s,name:b.name,keepJobs:K,limiter:b.limiter,lockDuration:b.lockDuration,attempts:e.opts.attempts,maxMetricsSize:(null===(c=b.metrics)||void 0===c?void 0:c.maxDataPoints)?null===(u=b.metrics)||void 0===u?void 0:u.maxDataPoints:"",fpof:!!(null===(p=e.opts)||void 0===p?void 0:p.failParentOnFailure),cpof:!!(null===(h=e.opts)||void 0===h?void 0:h.continueParentOnFailure),idof:!!(null===(y=e.opts)||void 0===y?void 0:y.ignoreDependencyOnFailure),rdof:!!(null===(m=e.opts)||void 0===m?void 0:m.removeDependencyOnFailure)}),l?eP((0,eR.dq)(l)):void 0];return v.concat(k)}getKeepJobs(e,t){return void 0===e?t||{count:e?0:-1}:"object"==typeof e?e:"number"==typeof e?{count:e}:{count:e?0:-1}}async moveToFinished(e,t){let r=await this.queue.client,i=await this.execCommand(r,"moveToFinished",t);if(i<0)throw this.finishedErrors({code:i,jobId:e,command:"moveToFinished",state:"active"});if(void 0!==i)return eJ(i)}drainArgs(e){let t=this.queue.keys;return[t.wait,t.paused,t.delayed,t.prioritized,t.repeat].concat([t[""],e?"1":"0"])}async drain(e){let t=await this.queue.client,r=this.drainArgs(e);return this.execCommand(t,"drain",r)}removeChildDependencyArgs(e,t){return[this.queue.keys[""]].concat([this.queue.toKey(e),t])}async removeChildDependency(e,t){let r=await this.queue.client,i=this.removeChildDependencyArgs(e,t),n=await this.execCommand(r,"removeChildDependency",i);switch(n){case 0:return!0;case 1:return!1;default:throw this.finishedErrors({code:n,jobId:e,parentKey:t,command:"removeChildDependency"})}}getRangesArgs(e,t,r,i){let n=this.queue.keys,s=e.map(e=>"waiting"===e?"wait":e);return[n[""]].concat([t,r,i?"1":"0",...s])}async getRanges(e,t=0,r=1,i=!1){let n=await this.queue.client,s=this.getRangesArgs(e,t,r,i);return await this.execCommand(n,"getRanges",s)}getCountsArgs(e){let t=this.queue.keys,r=e.map(e=>"waiting"===e?"wait":e);return[t[""]].concat([...r])}async getCounts(e){let t=await this.queue.client,r=this.getCountsArgs(e);return await this.execCommand(t,"getCounts",r)}getCountsPerPriorityArgs(e){return[this.queue.keys.wait,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.prioritized].concat(e)}async getCountsPerPriority(e){let t=await this.queue.client,r=this.getCountsPerPriorityArgs(e);return await this.execCommand(t,"getCountsPerPriority",r)}getDependencyCountsArgs(e,t){return[`${e}:processed`,`${e}:dependencies`,`${e}:failed`,`${e}:unsuccessful`].map(e=>this.queue.toKey(e)).concat(t)}async getDependencyCounts(e,t){let r=await this.queue.client,i=this.getDependencyCountsArgs(e,t);return await this.execCommand(r,"getDependencyCounts",i)}moveToCompletedArgs(e,t,r,i,n=!1){let s=Date.now();return this.moveToFinishedArgs(e,t,"returnvalue",r,"completed",i,s,n)}moveToFailedArgs(e,t,r,i,n=!1,s){let a=Date.now();return this.moveToFinishedArgs(e,t,"failedReason",r,"failed",i,a,n,s)}async isFinished(e,t=!1){let r=await this.queue.client,i=["completed","failed",e].map(e=>this.queue.toKey(e));return this.execCommand(r,"isFinished",i.concat([e,t?"1":""]))}async getState(e){let t=await this.queue.client,r=["completed","failed","delayed","active","wait","paused","waiting-children","prioritized"].map(e=>this.queue.toKey(e));return(0,eR.J3)(this.queue.redisVersion,"6.0.6",this.queue.databaseType)?this.execCommand(t,"getState",r.concat([e])):this.execCommand(t,"getStateV2",r.concat([e]))}async changeDelay(e,t){let r=await this.queue.client,i=this.changeDelayArgs(e,t),n=await this.execCommand(r,"changeDelay",i);if(n<0)throw this.finishedErrors({code:n,jobId:e,command:"changeDelay",state:"delayed"})}changeDelayArgs(e,t){let r=Date.now();return[this.queue.keys.delayed,this.queue.keys.meta,this.queue.keys.marker,this.queue.keys.events].concat([t,JSON.stringify(r),e,this.queue.toKey(e)])}async changePriority(e,t=0,r=!1){let i=await this.queue.client,n=this.changePriorityArgs(e,t,r),s=await this.execCommand(i,"changePriority",n);if(s<0)throw this.finishedErrors({code:s,jobId:e,command:"changePriority"})}changePriorityArgs(e,t=0,r=!1){return[this.queue.keys.wait,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.prioritized,this.queue.keys.active,this.queue.keys.pc,this.queue.keys.marker].concat([t,this.queue.toKey(""),e,r?1:0])}moveToDelayedArgs(e,t,r,i,n={}){let s=this.queue.keys,a=this.queue.opts,o=[s.marker,s.active,s.prioritized,s.delayed,this.queue.toKey(e),s.events,s.meta,s.stalled,s.wait,s.limiter,s.paused,s.pc],l=n.fetchNext&&!this.queue.closing?1:0;return o.concat([this.queue.keys[""],t,e,r,i,n.skipAttempt?"1":"0",n.fieldsToUpdate?eP((0,eR.dq)(n.fieldsToUpdate)):void 0,l,l?eP({token:r,lockDuration:a.lockDuration,limiter:a.limiter,name:a.name}):void 0])}moveToWaitingChildrenArgs(e,t,r){let i=Date.now(),n=(0,eR.pV)(r.child);return["active","waiting-children",e,`${e}:dependencies`,`${e}:unsuccessful`,"stalled","events"].map(e=>this.queue.toKey(e)).concat([t,null!=n?n:"",JSON.stringify(i),e,this.queue.toKey("")])}isMaxedArgs(){let e=this.queue.keys;return[e.meta,e.active]}async isMaxed(){let e=await this.queue.client,t=this.isMaxedArgs();return!!await this.execCommand(e,"isMaxed",t)}async moveToDelayed(e,t,r,i="0",n={}){let s=await this.queue.client,a=this.moveToDelayedArgs(e,t,i,r,n),o=await this.execCommand(s,"moveToDelayed",a);if(o<0)throw this.finishedErrors({code:o,jobId:e,command:"moveToDelayed",state:"active"});if(void 0!==o)return eJ(o)}async moveToWaitingChildren(e,t,r={}){let i=await this.queue.client,n=this.moveToWaitingChildrenArgs(e,t,r),s=await this.execCommand(i,"moveToWaitingChildren",n);switch(s){case 0:return!0;case 1:return!1;default:throw this.finishedErrors({code:s,jobId:e,command:"moveToWaitingChildren",state:"active"})}}getRateLimitTtlArgs(e){return[this.queue.keys.limiter,this.queue.keys.meta].concat([null!=e?e:"0"])}async getRateLimitTtl(e){let t=await this.queue.client,r=this.getRateLimitTtlArgs(e);return this.execCommand(t,"getRateLimitTtl",r)}async cleanJobsInSet(e,t,r=0){let i=await this.queue.client;return this.execCommand(i,"cleanJobsInSet",[this.queue.toKey(e),this.queue.toKey("events"),this.queue.toKey("repeat"),this.queue.toKey(""),t,r,e])}getJobSchedulerArgs(e){return[this.queue.keys.repeat].concat([e])}async getJobScheduler(e){let t=await this.queue.client,r=this.getJobSchedulerArgs(e);return this.execCommand(t,"getJobScheduler",r)}retryJobArgs(e,t,r,i={}){return[this.queue.keys.active,this.queue.keys.wait,this.queue.keys.paused,this.queue.toKey(e),this.queue.keys.meta,this.queue.keys.events,this.queue.keys.delayed,this.queue.keys.prioritized,this.queue.keys.pc,this.queue.keys.marker,this.queue.keys.stalled].concat([this.queue.toKey(""),Date.now(),(t?"R":"L")+"PUSH",e,r,i.fieldsToUpdate?eP((0,eR.dq)(i.fieldsToUpdate)):void 0])}async retryJob(e,t,r="0",i={}){let n=await this.queue.client,s=this.retryJobArgs(e,t,r,i),a=await this.execCommand(n,"retryJob",s);if(a<0)throw this.finishedErrors({code:a,jobId:e,command:"retryJob",state:"active"})}moveJobsToWaitArgs(e,t,r){return[this.queue.toKey(""),this.queue.keys.events,this.queue.toKey(e),this.queue.toKey("wait"),this.queue.toKey("paused"),this.queue.keys.meta,this.queue.keys.active,this.queue.keys.marker].concat([t,r,e])}async retryJobs(e="failed",t=1e3,r=new Date().getTime()){let i=await this.queue.client,n=this.moveJobsToWaitArgs(e,t,r);return this.execCommand(i,"moveJobsToWait",n)}async promoteJobs(e=1e3){let t=await this.queue.client,r=this.moveJobsToWaitArgs("delayed",e,Number.MAX_VALUE);return this.execCommand(t,"moveJobsToWait",r)}async reprocessJob(e,t,r={}){let i=await this.queue.client,n=[this.queue.toKey(e.id),this.queue.keys.events,this.queue.toKey(t),this.queue.keys.wait,this.queue.keys.meta,this.queue.keys.paused,this.queue.keys.active,this.queue.keys.marker],s=[e.id,(e.opts.lifo?"R":"L")+"PUSH","failed"===t?"failedReason":"returnvalue",t,r.resetAttemptsMade?"1":"0",r.resetAttemptsStarted?"1":"0"],a=await this.execCommand(i,"reprocessJob",n.concat(s));if(1!==a)throw this.finishedErrors({code:a,jobId:e.id,command:"reprocessJob",state:t})}async getMetrics(e,t=0,r=-1){let i=await this.queue.client,n=[this.queue.toKey(`metrics:${e}`),this.queue.toKey(`metrics:${e}:data`)];return await this.execCommand(i,"getMetrics",n.concat([t,r]))}async moveToActive(e,t,r){let i=this.queue.opts,n=this.queue.keys,s=[n.wait,n.active,n.prioritized,n.events,n.stalled,n.limiter,n.delayed,n.paused,n.meta,n.pc,n.marker],a=[n[""],Date.now(),eP({token:t,lockDuration:i.lockDuration,limiter:i.limiter,name:r})];return eJ(await this.execCommand(e,"moveToActive",s.concat(a)))}async promote(e){let t=await this.queue.client,r=[this.queue.keys.delayed,this.queue.keys.wait,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.prioritized,this.queue.keys.active,this.queue.keys.pc,this.queue.keys.events,this.queue.keys.marker],i=[this.queue.toKey(""),e],n=await this.execCommand(t,"promote",r.concat(i));if(n<0)throw this.finishedErrors({code:n,jobId:e,command:"promote",state:"delayed"})}moveStalledJobsToWaitArgs(){let e=this.queue.opts;return[this.queue.keys.stalled,this.queue.keys.wait,this.queue.keys.active,this.queue.keys["stalled-check"],this.queue.keys.meta,this.queue.keys.paused,this.queue.keys.marker,this.queue.keys.events,this.queue.keys.repeat].concat([e.maxStalledCount,this.queue.toKey(""),Date.now(),e.stalledInterval])}async moveStalledJobsToWait(){let e=await this.queue.client,t=this.moveStalledJobsToWaitArgs();return this.execCommand(e,"moveStalledJobsToWait",t)}async moveJobFromActiveToWait(e,t="0"){let r=await this.queue.client,i=[this.queue.keys.active,this.queue.keys.wait,this.queue.keys.stalled,this.queue.keys.paused,this.queue.keys.meta,this.queue.keys.limiter,this.queue.keys.prioritized,this.queue.keys.marker,this.queue.keys.events],n=[e,t,this.queue.toKey(e)],s=await this.execCommand(r,"moveJobFromActiveToWait",i.concat(n));if(s<0)throw this.finishedErrors({code:s,jobId:e,command:"moveJobFromActiveToWait",state:"active"});return s}async obliterate(e){let t=await this.queue.client,r=[this.queue.keys.meta,this.queue.toKey("")],i=[e.count,e.force?"force":null],n=await this.execCommand(t,"obliterate",r.concat(i));if(n<0)switch(n){case -1:throw Error("Cannot obliterate non-paused queue");case -2:throw Error("Cannot obliterate queue with active jobs")}return n}async paginate(e,t){let r=await this.queue.client,i=[e],n=t.end>=0?t.end-t.start+1:1/0,s="0",a=0,o,l,d,c=[],u=[];do{let e=[t.start+c.length,t.end,s,a,5];t.fetchJobs&&e.push(1),[s,a,o,l,d]=await this.execCommand(r,"paginate",i.concat(e)),c=c.concat(o),d&&d.length&&(u=u.concat(d.map(eR.VZ)))}while("0"!=s&&c.length<n);if(!(c.length&&Array.isArray(c[0])))return{cursor:s,items:c.map(e=>({id:e})),total:l,jobs:u};{let e=[];for(let t=0;t<c.length;t++){let[r,i]=c[t];try{e.push({id:r,v:JSON.parse(i)})}catch(t){e.push({id:r,err:t.message})}}return{cursor:s,items:e,total:l,jobs:u}}}finishedErrors({code:e,jobId:t,parentKey:r,command:i,state:n}){let s;switch(e){case eO.jK.JobNotExist:s=Error(`Missing key for job ${t}. ${i}`);break;case eO.jK.JobLockNotExist:s=Error(`Missing lock for job ${t}. ${i}`);break;case eO.jK.JobNotInState:s=Error(`Job ${t} is not in the ${n} state. ${i}`);break;case eO.jK.JobPendingChildren:s=Error(`Job ${t} has pending dependencies. ${i}`);break;case eO.jK.ParentJobNotExist:s=Error(`Missing key for parent job ${r}. ${i}`);break;case eO.jK.JobLockMismatch:s=Error(`Lock mismatch for job ${t}. Cmd ${i} from ${n}`);break;case eO.jK.ParentJobCannotBeReplaced:s=Error(`The parent job ${r} cannot be replaced. ${i}`);break;case eO.jK.JobBelongsToJobScheduler:s=Error(`Job ${t} belongs to a job scheduler and cannot be removed directly. ${i}`);break;case eO.jK.JobHasFailedChildren:s=new eN._P(`Cannot complete job ${t} because it has at least one failed child. ${i}`);break;case eO.jK.SchedulerJobIdCollision:s=Error(`Cannot create job scheduler iteration - job ID already exists. ${i}`);break;case eO.jK.SchedulerJobSlotsBusy:s=Error(`Cannot create job scheduler iteration - current and next time slots already have jobs. ${i}`);break;default:s=Error(`Unknown code ${e} error for ${t}. ${i}`)}return s.code=e,s}async removeOrphanedJobs(e,t,r){let i=await this.queue.client,n=[this.queue.toKey(""),t.length,...t,r.length,...r,...e];return this.execCommand(i,"removeOrphanedJobs",n)}}function eJ(e){if(e){let t=[null,e[1],e[2],e[3]];return e[0]&&(t[0]=(0,eR.VZ)(e[0])),t}return[]}},92891:(e,t,r)=>{"use strict";r.d(t,{C:()=>K});var i=r(57147),n=r(57310),s=r(71017),a=r(64780),o=r(25619),l=r(41381),d=r(35144),c=r(69997),u=r(49445),p=r(89893),h=r(39735);class y{constructor(e){this.value=void 0,this.next=null,this.value=e}}class m{constructor(){this.length=0,this.head=null,this.tail=null}push(e){let t=new y(e);return this.length?this.tail.next=t:this.head=t,this.tail=t,this.length+=1,t}shift(){if(!this.length)return null;{let e=this.head;return this.head=this.head.next,this.length-=1,e}}}class f{constructor(e=!1){this.ignoreErrors=e,this.queue=new m,this.pending=new Set,this.newPromise()}add(e){this.pending.add(e),e.then(t=>{this.pending.delete(e),0===this.queue.length&&this.resolvePromise(t),this.queue.push(t)}).catch(t=>{this.ignoreErrors&&this.queue.push(void 0),this.pending.delete(e),this.rejectPromise(t)})}async waitAll(){await Promise.all(this.pending)}numTotal(){return this.pending.size+this.queue.length}numPending(){return this.pending.size}numQueued(){return this.queue.length}resolvePromise(e){this.resolve(e),this.newPromise()}rejectPromise(e){this.reject(e),this.newPromise()}newPromise(){this.nextPromise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}async wait(){return this.nextPromise}async fetch(){var e;if(0!==this.pending.size||0!==this.queue.length){for(;0===this.queue.length;)try{await this.wait()}catch(e){this.ignoreErrors||console.error("Unexpected Error in AsyncFifoQueue",e)}return null===(e=this.queue.shift())||void 0===e?void 0:e.value}}}var b=r(73233),g=r(5315),S=r(38829),v=r(75822);e=r.hmd(e);class K extends l.W{static RateLimitError(){return new b.Aw}constructor(t,r,a,l){if(super(t,Object.assign(Object.assign({drainDelay:5,concurrency:1,lockDuration:3e4,maximumRateLimitDelay:3e4,maxStalledCount:1,stalledInterval:3e4,autorun:!0,runRetryDelay:15e3},a),{blockingConnection:!0}),l),this.abortDelayController=null,this.blockUntil=0,this.drained=!1,this.limitUntil=0,this.processorAcceptsSignal=!1,this.stalledCheckerRunning=!1,this.waiting=null,this.running=!1,this.mainLoopRunning=null,!a||!a.connection)throw Error("Worker requires a connection");if("number"!=typeof this.opts.maxStalledCount||this.opts.maxStalledCount<0)throw Error("maxStalledCount must be greater or equal than 0");if("number"==typeof this.opts.maxStartedAttempts&&this.opts.maxStartedAttempts<0)throw Error("maxStartedAttempts must be greater or equal than 0");if("number"!=typeof this.opts.stalledInterval||this.opts.stalledInterval<=0)throw Error("stalledInterval must be greater than 0");if("number"!=typeof this.opts.drainDelay||this.opts.drainDelay<=0)throw Error("drainDelay must be greater than 0");if(this.concurrency=this.opts.concurrency,this.opts.lockRenewTime=this.opts.lockRenewTime||this.opts.lockDuration/2,this.id=(0,o.HP)(),this.createLockManager(),r){if("function"==typeof r)this.processFn=r,this.processorAcceptsSignal=r.length>=3;else{if(r instanceof n.URL){if(!i.existsSync(r))throw Error(`URL ${r} does not exist in the local file system`);r=r.href}else{let e=r+([".js",".ts",".flow",".cjs",".mjs"].includes(s.extname(r))?"":".js");if(!i.existsSync(e))throw Error(`File ${e} does not exist`)}let t=s.dirname(e.filename||__filename),a=s.join(t,"main-worker.js"),o=s.join(t,"main.js"),l=this.opts.useWorkerThreads?a:o;try{i.statSync(l)}catch(t){let e=this.opts.useWorkerThreads?"main-worker.js":"main.js";l=s.join(process.cwd(),`dist/cjs/classes/${e}`),i.statSync(l)}this.childPool=new c.Z({mainFile:l,useWorkerThreads:this.opts.useWorkerThreads,workerForkOptions:this.opts.workerForkOptions,workerThreadsOptions:this.opts.workerThreadsOptions}),this.createSandbox(r),this.processorAcceptsSignal=!0}this.opts.autorun&&this.run().catch(e=>this.emit("error",e))}let d=this.clientName()+(this.opts.name?`:w:${this.opts.name}`:"");this.blockingConnection=new u.Z((0,o.Y1)(a.connection)?((0,p.i)(a.connection)?a.connection:(0,p.c)(a.connection)).duplicate({connectionName:d}):Object.assign(Object.assign({},a.connection),{connectionName:d}),{shared:!1,blocking:!0,skipVersionCheck:a.skipVersionCheck}),this.blockingConnection.on("error",e=>this.emit("error",e)),this.blockingConnection.on("ready",()=>setTimeout(()=>this.emit("ready"),0))}createLockManager(){this.lockManager=new v.X(this,{lockRenewTime:this.opts.lockRenewTime,lockDuration:this.opts.lockDuration,workerId:this.id,workerName:this.opts.name})}createSandbox(e){this.processFn=(0,h.Z)(e,this.childPool).bind(this)}async extendJobLocks(e,t,r){return this.scripts.extendLocks(e,t,r)}emit(e,...t){return super.emit(e,...t)}off(e,t){return super.off(e,t),this}on(e,t){return super.on(e,t),this}once(e,t){return super.once(e,t),this}callProcessJob(e,t,r){return this.processFn(e,t,r)}createJob(e,t){return this.Job.fromJSON(this,e,t)}async waitUntilReady(){return await super.waitUntilReady(),this.blockingConnection.client}cancelJob(e,t){return this.lockManager.cancelJob(e,t)}cancelAllJobs(e){this.lockManager.cancelAllJobs(e)}set concurrency(e){if("number"!=typeof e||e<1||!isFinite(e))throw Error("concurrency must be a finite number greater than 0");this._concurrency=e}get concurrency(){return this._concurrency}get repeat(){return new Promise(async e=>{if(!this._repeat){let e=await this.client;this._repeat=new d.w(this.name,Object.assign(Object.assign({},this.opts),{connection:e})),this._repeat.on("error",this.emit.bind(this,"error"))}e(this._repeat)})}get jobScheduler(){return new Promise(async e=>{if(!this._jobScheduler){let e=await this.client;this._jobScheduler=new S.W(this.name,Object.assign(Object.assign({},this.opts),{connection:e})),this._jobScheduler.on("error",this.emit.bind(this,"error"))}e(this._jobScheduler)})}async run(){if(!this.processFn)throw Error("No process function is defined.");if(this.running)throw Error("Worker is already running.");try{if(this.running=!0,this.closing||this.paused)return;await this.startStalledCheckTimer(),this.opts.skipLockRenewal||this.lockManager.start();let e=await this.client,t=await this.blockingConnection.client;this.mainLoopRunning=this.mainLoop(e,t),await this.mainLoopRunning}finally{this.running=!1}}async waitForRateLimit(){var e;let t=this.limitUntil;if(t>Date.now()){null===(e=this.abortDelayController)||void 0===e||e.abort(),this.abortDelayController=new a.H;let r=this.getRateLimitDelay(t-Date.now());await this.delay(r,this.abortDelayController),this.drained=!1,this.limitUntil=0}}async mainLoop(e,t){let r=new f,i=0;for(;!this.closing&&!this.paused||r.numTotal()>0;){let n;for(;!this.closing&&!this.paused&&!this.waiting&&r.numTotal()<this._concurrency&&!this.isRateLimited();){let n=`${this.id}:${i++}`,s=this.retryIfFailed(()=>this._getNextJob(e,t,n,{block:!0}),{delayInMs:this.opts.runRetryDelay,onlyEmitError:!0});if(r.add(s),this.waiting&&r.numTotal()>1||!await s&&r.numTotal()>1||this.blockUntil)break}do n=await r.fetch();while(!n&&r.numQueued()>0);if(n){let e=n.token;r.add(this.processJob(n,e,()=>r.numTotal()<=this._concurrency))}else 0===r.numQueued()&&await this.waitForRateLimit()}}async getNextJob(e,{block:t=!0}={}){var r,i;let n=await this._getNextJob(await this.client,await this.blockingConnection.client,e,{block:t});return this.trace(g.MU.INTERNAL,"getNextJob",this.name,async e=>(null==e||e.setAttributes({[g.Np.WorkerId]:this.id,[g.Np.QueueName]:this.name,[g.Np.WorkerName]:this.opts.name,[g.Np.WorkerOptions]:JSON.stringify({block:t}),[g.Np.JobId]:null==n?void 0:n.id}),n),null===(i=null===(r=null==n?void 0:n.opts)||void 0===r?void 0:r.telemetry)||void 0===i?void 0:i.metadata)}async _getNextJob(e,t,r,{block:i=!0}={}){let n;if(!this.paused&&!this.closing){if(this.drained&&i&&!this.limitUntil&&!this.waiting){this.waiting=this.waitForJob(t,this.blockUntil);try{this.blockUntil=await this.waiting,(this.blockUntil<=0||this.blockUntil-Date.now()<1)&&(n=await this.moveToActive(e,r,this.opts.name))}finally{this.waiting=null}}else this.isRateLimited()||(n=await this.moveToActive(e,r,this.opts.name));return n&&this.emit("active",n,"waiting"),n}}async rateLimit(e){await this.trace(g.MU.INTERNAL,"rateLimit",this.name,async t=>{null==t||t.setAttributes({[g.Np.WorkerId]:this.id,[g.Np.WorkerRateLimit]:e}),await this.client.then(t=>t.set(this.keys.limiter,Number.MAX_SAFE_INTEGER,{PX:e}))})}get minimumBlockTimeout(){return this.blockingConnection.capabilities.canBlockFor1Ms?.001:.002}isRateLimited(){return this.limitUntil>Date.now()}async moveToActive(e,t,r){let[i,n,s,a]=await this.scripts.moveToActive(e,t,r);return this.updateDelays(s,a),this.nextJobFromJobData(i,n,t)}async waitForJob(e,t){let r;if(this.paused)return 1/0;try{if(!this.closing&&!this.isRateLimited()){let i=this.getBlockTimeout(t);if(i>0){i=this.blockingConnection.capabilities.canDoubleTimeout?i:Math.ceil(i),r=setTimeout(async()=>{e.disconnect(!this.closing)},1e3*i+1e3),this.updateDelays();let n=await e.bzpopmin(this.keys.marker,i);if(n){let[,e,r]=n;if(e){let e=parseInt(r);if(t&&e>t)return t;return e}}}return 0}}catch(e){(0,o.Zm)(e)&&this.emit("error",e),this.closing||await this.delay()}finally{clearTimeout(r)}return 1/0}getBlockTimeout(e){let t=this.opts;if(!e)return Math.max(t.drainDelay,this.minimumBlockTimeout);{let t=e-Date.now();return t<=0?t:t<1e3*this.minimumBlockTimeout?this.minimumBlockTimeout:Math.min(t/1e3,10)}}getRateLimitDelay(e){return Math.min(e,this.opts.maximumRateLimitDelay)}async delay(e,t){await (0,o.gw)(e||o.Hh,t)}updateDelays(e=0,t=0){let r=Math.max(e,0);r>0?this.limitUntil=Date.now()+r:this.limitUntil=0,this.blockUntil=Math.max(t,0)||0}async nextJobFromJobData(e,t,r){if(e){this.drained=!1;let i=this.createJob(e,t);i.token=r;try{await this.retryIfFailed(async()=>{let e=!!i.repeatJobKey,t=e&&i.repeatJobKey.split(":").length>=5,r=e&&!t;if(t){let e=await this.jobScheduler;r=await e.isJobScheduler(i.repeatJobKey)}if(r){let e=await this.jobScheduler;await e.upsertJobScheduler(i.repeatJobKey,i.opts.repeat,i.name,i.data,i.opts,{override:!1,producerId:i.id})}else if(i.opts.repeat){let e=await this.repeat;await e.updateRepeatableJob(i.name,i.data,i.opts,{override:!1})}},{delayInMs:this.opts.runRetryDelay})}catch(r){let e=r instanceof Error?r.message:String(r),t=Error(`Failed to add repeatable job for next iteration: ${e}`);this.emit("error",t);return}return i}this.drained||(this.emit("drained"),this.drained=!0)}async processJob(e,t,r=()=>!0){var i,n;let s=null===(n=null===(i=e.opts)||void 0===i?void 0:i.telemetry)||void 0===n?void 0:n.metadata;return this.trace(g.MU.CONSUMER,"process",this.name,async i=>{null==i||i.setAttributes({[g.Np.WorkerId]:this.id,[g.Np.WorkerName]:this.opts.name,[g.Np.JobId]:e.id,[g.Np.JobName]:e.name});let n=this.lockManager.trackJob(e.id,t,e.processedOn,this.processorAcceptsSignal);try{let s=this.getUnrecoverableErrorMessage(e);if(s)return await this.retryIfFailed(()=>(this.lockManager.untrackJob(e.id),this.handleFailed(new b._P(s),e,t,r,i)),{delayInMs:this.opts.runRetryDelay,span:i});let a=await this.callProcessJob(e,t,n?n.signal:void 0);return await this.retryIfFailed(()=>(this.lockManager.untrackJob(e.id),this.handleCompleted(a,e,t,r,i)),{delayInMs:this.opts.runRetryDelay,span:i})}catch(n){return await this.retryIfFailed(()=>(this.lockManager.untrackJob(e.id),this.handleFailed(n,e,t,r,i)),{delayInMs:this.opts.runRetryDelay,span:i,onlyEmitError:!0})}finally{this.lockManager.untrackJob(e.id);let t=Date.now();null==i||i.setAttributes({[g.Np.JobFinishedTimestamp]:t,[g.Np.JobAttemptFinishedTimestamp]:e.finishedOn||t,[g.Np.JobProcessedTimestamp]:e.processedOn})}},s)}getUnrecoverableErrorMessage(e){return e.deferredFailure?e.deferredFailure:this.opts.maxStartedAttempts&&this.opts.maxStartedAttempts<e.attemptsStarted?"job started more than allowable limit":void 0}async handleCompleted(e,t,r,i=()=>!0,n){if(!this.connection.closing){let s=await t.moveToCompleted(e,r,i()&&!(this.closing||this.paused));if(this.emit("completed",t,e,"active"),null==n||n.addEvent("job completed",{[g.Np.JobResult]:JSON.stringify(e)}),null==n||n.setAttributes({[g.Np.JobAttemptsMade]:t.attemptsMade}),Array.isArray(s)){let[e,t,i,n]=s;return this.updateDelays(i,n),this.nextJobFromJobData(e,t,r)}}}async handleFailed(e,t,r,i=()=>!0,n){if(!this.connection.closing){if(e.message===b.Id){let e=await this.moveLimitedBackToWait(t,r);this.limitUntil=e>0?Date.now()+e:0;return}let s=i()&&!(this.closing||this.paused);if(e instanceof b.Cn||"DelayedError"==e.name||e instanceof b.mf||"WaitingError"==e.name||e instanceof b.rh||"WaitingChildrenError"==e.name){if(!s)return;let e=await this.client;return this.moveToActive(e,r,this.opts.name)}let a=await t.moveToFailed(e,r,s);if(this.emit("failed",t,e,"active"),null==n||n.addEvent("job failed",{[g.Np.JobFailedReason]:e.message}),null==n||n.setAttributes({[g.Np.JobAttemptsMade]:t.attemptsMade}),Array.isArray(a)){let[e,t,i,n]=a;return this.updateDelays(i,n),this.nextJobFromJobData(e,t,r)}}}async pause(e){await this.trace(g.MU.INTERNAL,"pause",this.name,async t=>{var r;null==t||t.setAttributes({[g.Np.WorkerId]:this.id,[g.Np.WorkerName]:this.opts.name,[g.Np.WorkerDoNotWaitActive]:e}),this.paused||(this.paused=!0,e||await this.whenCurrentJobsFinished(),null===(r=this.stalledCheckStopper)||void 0===r||r.call(this),this.emit("paused"))})}resume(){(!this.running||this.paused)&&this.trace(g.MU.INTERNAL,"resume",this.name,e=>{null==e||e.setAttributes({[g.Np.WorkerId]:this.id,[g.Np.WorkerName]:this.opts.name}),this.paused=!1,this.running?this.startStalledCheckTimer().catch(e=>{this.emit("error",e)}):this.processFn&&this.run(),this.emit("resumed")}).catch(e=>{this.emit("error",e)})}isPaused(){return!!this.paused}isRunning(){return this.running}async close(e=!1){return this.closing?this.closing:(this.closing=(async()=>{await this.trace(g.MU.INTERNAL,"close",this.name,async t=>{var r,i;for(let i of(null==t||t.setAttributes({[g.Np.WorkerId]:this.id,[g.Np.WorkerName]:this.opts.name,[g.Np.WorkerForceClose]:e}),this.emit("closing","closing queue"),null===(r=this.abortDelayController)||void 0===r||r.abort(),[()=>e||this.whenCurrentJobsFinished(!1),()=>this.lockManager.close(),()=>{var e;return null===(e=this.childPool)||void 0===e?void 0:e.clean()},()=>this.blockingConnection.close(e),()=>this.connection.close(e)]))try{await i()}catch(e){this.emit("error",e)}null===(i=this.stalledCheckStopper)||void 0===i||i.call(this),this.closed=!0,this.emit("closed")})})(),await this.closing)}async startStalledCheckTimer(){this.opts.skipStalledCheck||this.closing||this.stalledCheckerRunning||await this.trace(g.MU.INTERNAL,"startStalledCheckTimer",this.name,async e=>{null==e||e.setAttributes({[g.Np.WorkerId]:this.id,[g.Np.WorkerName]:this.opts.name}),this.stalledCheckerRunning=!0,this.stalledChecker().catch(e=>{this.emit("error",e)}).finally(()=>{this.stalledCheckerRunning=!1})})}async stalledChecker(){for(;!(this.closing||this.paused);)await this.checkConnectionError(()=>this.moveStalledJobsToWait()),await new Promise(e=>{let t=setTimeout(e,this.opts.stalledInterval);this.stalledCheckStopper=()=>{clearTimeout(t),e()}})}async whenCurrentJobsFinished(e=!0){this.mainLoopRunning?(await this.blockingConnection.disconnect(!0),await this.mainLoopRunning):e=!1,e&&await this.blockingConnection.reconnect()}async retryIfFailed(e,t){var r;let i=0,n=t.maxRetries||1/0;do try{return await e()}catch(e){if(null===(r=t.span)||void 0===r||r.recordException(e.message),(0,o.Zm)(e)){if(this.paused||this.closing||this.emit("error",e),t.onlyEmitError)return;throw e}if(!t.delayInMs||this.closing||this.closed||await this.delay(t.delayInMs,this.abortDelayController),i+1>=n)throw e}while(++i<n)}async moveStalledJobsToWait(){await this.trace(g.MU.INTERNAL,"moveStalledJobsToWait",this.name,async e=>{let t=await this.scripts.moveStalledJobsToWait();null==e||e.setAttributes({[g.Np.WorkerId]:this.id,[g.Np.WorkerName]:this.opts.name,[g.Np.WorkerStalledJobs]:t}),t.forEach(t=>{null==e||e.addEvent("job stalled",{[g.Np.JobId]:t}),this.emit("stalled",t,"active")})})}moveLimitedBackToWait(e,t){return e.moveToWait(t)}}},5315:(e,t,r)=>{"use strict";var i,n,s,a,o,l,d;r.d(t,{uv:()=>i,jK:()=>n,p7:()=>l,d$:()=>s,MU:()=>d,Np:()=>o}),function(e){e[e.Init=0]="Init",e[e.Start=1]="Start",e[e.Stop=2]="Stop",e[e.GetChildrenValuesResponse=3]="GetChildrenValuesResponse",e[e.GetIgnoredChildrenFailuresResponse=4]="GetIgnoredChildrenFailuresResponse",e[e.GetDependenciesCountResponse=5]="GetDependenciesCountResponse",e[e.MoveToWaitingChildrenResponse=6]="MoveToWaitingChildrenResponse",e[e.Cancel=7]="Cancel",e[e.GetDependenciesResponse=8]="GetDependenciesResponse"}(i||(i={})),function(e){e[e.JobNotExist=-1]="JobNotExist",e[e.JobLockNotExist=-2]="JobLockNotExist",e[e.JobNotInState=-3]="JobNotInState",e[e.JobPendingChildren=-4]="JobPendingChildren",e[e.ParentJobNotExist=-5]="ParentJobNotExist",e[e.JobLockMismatch=-6]="JobLockMismatch",e[e.ParentJobCannotBeReplaced=-7]="ParentJobCannotBeReplaced",e[e.JobBelongsToJobScheduler=-8]="JobBelongsToJobScheduler",e[e.JobHasFailedChildren=-9]="JobHasFailedChildren",e[e.SchedulerJobIdCollision=-10]="SchedulerJobIdCollision",e[e.SchedulerJobSlotsBusy=-11]="SchedulerJobSlotsBusy"}(n||(n={})),function(e){e[e.Completed=0]="Completed",e[e.Error=1]="Error",e[e.Failed=2]="Failed",e[e.InitFailed=3]="InitFailed",e[e.InitCompleted=4]="InitCompleted",e[e.Log=5]="Log",e[e.MoveToDelayed=6]="MoveToDelayed",e[e.MoveToWait=7]="MoveToWait",e[e.Progress=8]="Progress",e[e.Update=9]="Update",e[e.GetChildrenValues=10]="GetChildrenValues",e[e.GetIgnoredChildrenFailures=11]="GetIgnoredChildrenFailures",e[e.GetDependenciesCount=12]="GetDependenciesCount",e[e.MoveToWaitingChildren=13]="MoveToWaitingChildren",e[e.GetDependencies=14]="GetDependencies"}(s||(s={})),function(e){e[e.ONE_MINUTE=1]="ONE_MINUTE",e[e.FIVE_MINUTES=5]="FIVE_MINUTES",e[e.FIFTEEN_MINUTES=15]="FIFTEEN_MINUTES",e[e.THIRTY_MINUTES=30]="THIRTY_MINUTES",e[e.ONE_HOUR=60]="ONE_HOUR",e[e.ONE_WEEK=10080]="ONE_WEEK",e[e.TWO_WEEKS=20160]="TWO_WEEKS",e[e.ONE_MONTH=80640]="ONE_MONTH"}(a||(a={})),function(e){e.QueueName="bullmq.queue.name",e.QueueOperation="bullmq.queue.operation",e.BulkCount="bullmq.job.bulk.count",e.BulkNames="bullmq.job.bulk.names",e.JobName="bullmq.job.name",e.JobId="bullmq.job.id",e.JobKey="bullmq.job.key",e.JobIds="bullmq.job.ids",e.JobAttemptsMade="bullmq.job.attempts.made",e.DeduplicationKey="bullmq.job.deduplication.key",e.JobOptions="bullmq.job.options",e.JobProgress="bullmq.job.progress",e.QueueDrainDelay="bullmq.queue.drain.delay",e.QueueGrace="bullmq.queue.grace",e.QueueCleanLimit="bullmq.queue.clean.limit",e.QueueRateLimit="bullmq.queue.rate.limit",e.JobType="bullmq.job.type",e.QueueOptions="bullmq.queue.options",e.QueueEventMaxLength="bullmq.queue.event.max.length",e.QueueJobsState="bullmq.queue.jobs.state",e.WorkerOptions="bullmq.worker.options",e.WorkerName="bullmq.worker.name",e.WorkerId="bullmq.worker.id",e.WorkerRateLimit="bullmq.worker.rate.limit",e.WorkerDoNotWaitActive="bullmq.worker.do.not.wait.active",e.WorkerForceClose="bullmq.worker.force.close",e.WorkerStalledJobs="bullmq.worker.stalled.jobs",e.WorkerFailedJobs="bullmq.worker.failed.jobs",e.WorkerJobsToExtendLocks="bullmq.worker.jobs.to.extend.locks",e.JobFinishedTimestamp="bullmq.job.finished.timestamp",e.JobAttemptFinishedTimestamp="bullmq.job.attempt_finished_timestamp",e.JobProcessedTimestamp="bullmq.job.processed.timestamp",e.JobResult="bullmq.job.result",e.JobFailedReason="bullmq.job.failed.reason",e.FlowName="bullmq.flow.name",e.JobSchedulerId="bullmq.job.scheduler.id",e.JobStatus="bullmq.job.status"}(o||(o={})),function(e){e.QueueJobsCount="bullmq.queue.jobs",e.JobsCompleted="bullmq.jobs.completed",e.JobsFailed="bullmq.jobs.failed",e.JobsDelayed="bullmq.jobs.delayed",e.JobsRetried="bullmq.jobs.retried",e.JobsWaiting="bullmq.jobs.waiting",e.JobsWaitingChildren="bullmq.jobs.waiting_children",e.JobDuration="bullmq.job.duration"}(l||(l={})),function(e){e[e.INTERNAL=0]="INTERNAL",e[e.SERVER=1]="SERVER",e[e.CLIENT=2]="CLIENT",e[e.PRODUCER=3]="PRODUCER",e[e.CONSUMER=4]="CONSUMER"}(d||(d={}))},83485:(e,t,r)=>{"use strict";r.d(t,{ci:()=>x,Cc:()=>A.C}),r(99670),r(22057),r(69997),r(64780);var i,n,s=r(5315),a=r(25619);(function(e){e[e.Idle=0]="Idle",e[e.Started=1]="Started",e[e.Terminating=2]="Terminating",e[e.Errored=3]="Errored"})(i||(i={})),r(73233);var o=r(82361),l=r(95963);r(53705),r(49445),r(89893);var d=r(31650),c=r(6113),u=r(12781),p=r(59372);function h(e){return 1===e.length&&Array.isArray(e[0])?e[0]:e}function y(e){return(null==e?void 0:e.message)==="Disconnects client"||(null==e?void 0:e.message)==="The client is closed"||(null==e?void 0:e.message)==="Connection is closed."}class m extends o.EventEmitter{get status(){return this.statusOverride?this.statusOverride:this.raw.isReady?"ready":this.raw.isOpen?"connect":this.hasConnected?"end":"wait"}set status(e){if("end"===e&&(this.destroying=!0,this.raw.isOpen))try{this.raw.quit().catch(()=>{})}catch(e){}this.statusOverride=e}get options(){var e;return null!==(e=this.raw.options)&&void 0!==e?e:{}}set options(e){}constructor(e){super(),this.raw=e,this.scripts=new Map,this.hasConnected=!1,this.destroying=!1,this.isCluster=!1,e.on("ready",()=>{this.hasConnected=!0,this.connectionName?this.raw.clientSetName(this.connectionName).then(()=>this.emit("ready"),()=>this.emit("ready")):this.emit("ready")}),e.on("error",e=>{this.destroying&&y(e)||this.emit("error",e)}),e.on("end",()=>this.emit("close")),e.on("reconnecting",()=>this.emit("reconnecting")),e.isOpen||(this.connectPromise=e.connect().then(()=>{this.connectPromise=void 0},e=>{this.connectPromise=void 0}))}async connect(){return this.connectPromise?this.connectPromise:this.raw.isOpen?void(this.raw.isReady||await new Promise((e,t)=>{let r=()=>{s(),e()},i=e=>{s(),t(e)},n=()=>{s(),t(Error("Connection ended before ready event"))},s=()=>{this.off("ready",r),this.off("error",i),this.off("end",n)};this.once("ready",r),this.once("error",i),this.once("end",n)})):(this.connectPromise=this.raw.connect().then(()=>{this.connectPromise=void 0},e=>{throw this.connectPromise=void 0,e}),this.connectPromise)}disconnect(e=!1){this.destroying=!0,e||(this.statusOverride="end");try{this.raw.isOpen&&this.raw.destroy()}catch(e){}this.emit("close"),e?(this.statusOverride=void 0,this.emit("reconnecting"),this.connect().catch(e=>{y(e)||this.emit("error",e)}).finally(()=>{this.destroying=!1})):this.emit("end")}async quit(){if(this.destroying||"end"===this.statusOverride)return setImmediate(()=>{this.emit("end"),this.emit("close")}),"OK";this.destroying=!0;try{if(this.raw.isOpen)try{await this.raw.quit()}catch(e){}}catch(e){}return this.statusOverride="end",setImmediate(()=>{this.emit("end"),this.emit("close")}),"OK"}duplicate(...e){let t=new m(this.raw.duplicate());for(let[e,r]of this.scripts)t.scripts.set(e,r),t[e]=(...r)=>t.runCommand(e,r);let r=e[0];return r&&"object"==typeof r&&r.connectionName&&(t.connectionName=r.connectionName),t}defineCommand(e,t){let r=(0,c.createHash)("sha1").update(t.lua).digest("hex");this.scripts.set(e,{sha:r,lua:t.lua,numberOfKeys:t.numberOfKeys}),this[e]=(...t)=>this.runCommand(e,t),this.raw.scriptLoad(t.lua).catch(()=>{})}async runCommand(e,t){var r,i;let n=this.scripts.get(e);if(!n)throw Error(`BullMQ: unknown command "${e}"`);let s=h(t),{sha:a,lua:o,numberOfKeys:l}=n,d=s.slice(0,l).map(String),c=s.slice(l).map(e=>Buffer.isBuffer(e)?e:null==e?"":String(e));try{return await this.raw.evalSha(a,{keys:d,arguments:c})}catch(e){if(this.destroying&&y(e))return null;if(y(e))throw new p.i(e.message,e);if(null===(i=null===(r=null==e?void 0:e.message)||void 0===r?void 0:r.includes)||void 0===i?void 0:i.call(r,"NOSCRIPT"))try{return await this.raw.eval(o,{keys:d,arguments:c})}catch(e){if(this.destroying&&y(e))return null;if(y(e))throw new p.i(e.message,e);throw e}throw e}}multi(){return new f(this.raw.multi(),this.scripts)}pipeline(){return this.multi()}async hgetall(e){let t=await this.raw.hGetAll(e);return null!=t?t:{}}async hget(e,t){var r;return null!==(r=await this.raw.hGet(e,t))&&void 0!==r?r:null}async hmget(e,...t){return(await this.raw.hmGet(e,t)).map(e=>null!=e?e:null)}async hset(e,t,...r){if("object"==typeof t)return await this.raw.hSet(e,t);let i={};i[t]=String(r[0]);for(let e=1;e<r.length;e+=2)i[String(r[e])]=String(r[e+1]);return await this.raw.hSet(e,i)}async hdel(e,...t){return await this.raw.hDel(e,t)}async hexists(e,t){return await this.raw.hExists(e,t)?1:0}async get(e){var t;return null!==(t=await this.raw.get(e))&&void 0!==t?t:null}async set(e,t,r){let i={};return(null==r?void 0:r.PX)!=null?i.PX=r.PX:(null==r?void 0:r.EX)!=null&&(i.EX=r.EX),await this.raw.set(e,String(t),i)}async del(...e){return 0===e.length?0:await this.raw.del(e)}async zrange(e,t,r,i){if(null==i?void 0:i.WITHSCORES){let i=await this.raw.zRangeWithScores(e,t,r),n=[];for(let e of i)n.push(e.value,String(e.score));return n}return await this.raw.zRange(e,t,r)}async zrevrange(e,t,r,i){if(null==i?void 0:i.WITHSCORES){let i=await this.raw.zRangeWithScores(e,t,r,{REV:!0}),n=[];for(let e of i)n.push(e.value,String(e.score));return n}return await this.raw.zRange(e,t,r,{REV:!0})}async zcard(e){return await this.raw.zCard(e)}async zscore(e,t){let r=await this.raw.zScore(e,t);return null!=r?String(r):null}async lrange(e,t,r){return await this.raw.lRange(e,t,r)}async llen(e){return await this.raw.lLen(e)}async ltrim(e,t,r){return await this.raw.lTrim(e,t,r),"OK"}async lpos(e,t){var r;return null!==(r=await this.raw.lPos(e,t))&&void 0!==r?r:null}async smembers(e){return await this.raw.sMembers(e)}async xadd(e,t,r,i){let n={};(null==i?void 0:i.MAXLEN)!=null&&(n.TRIM={strategy:"MAXLEN",threshold:i.MAXLEN,strategyModifier:!1===i.approximate?void 0:"~"});let s={};for(let[e,t]of Object.entries(r))s[e]=String(t);return await this.raw.xAdd(e,t,s,n)}async xread(e,t){let r;let i={};(null==t?void 0:t.BLOCK)!=null&&(i.BLOCK=t.BLOCK),(null==t?void 0:t.COUNT)!=null&&(i.COUNT=t.COUNT);let n=e.map(e=>({key:e.key,id:e.id}));try{r=await this.raw.xRead(n,i)}catch(e){if(this.destroying&&y(e))return null;if(y(e))throw new p.i(e.message,e);throw e}return r?r.map(e=>[e.name,e.messages.map(e=>[e.id,Object.entries(e.message).flat()])]):null}async xtrim(e,t,r,i){let n=(null==i?void 0:i.approximate)===!1?void 0:"~";return await this.raw.xTrim(e,t,r,{strategyModifier:n})}async bzpopmin(e,t){let r;try{r=await this.raw.bzPopMin(e,t)}catch(e){if(this.destroying&&y(e))return null;if(y(e))throw new p.i(e.message,e);throw e}return r?[r.key,r.value,String(r.score)]:null}async info(){return await this.raw.info()}async clientSetName(e){return await this.raw.clientSetName(e)}async clientList(){return await this.raw.sendCommand(["CLIENT","LIST"])}async scan(e,t){let r={};(null==t?void 0:t.MATCH)&&(r.MATCH=t.MATCH),(null==t?void 0:t.COUNT)&&(r.COUNT=t.COUNT);let i=await this.raw.scan(String(e),r);return[String(i.cursor),i.keys]}scanStream(e){let t=this.raw,r=this.connectPromise,i={};e.match&&(i.MATCH=e.match),e.count&&(i.COUNT=e.count);let n=new u.Readable({objectMode:!0,async read(){var e,s,a,o;try{r&&await r;try{for(var l,c=!0,u=(0,d.KL)(t.scanIterator(i));!(e=(l=await u.next()).done);c=!0)if(o=l.value,c=!1,!n.push(Array.isArray(o)?o:[o]))return}catch(e){s={error:e}}finally{try{!c&&!e&&(a=u.return)&&await a.call(u)}finally{if(s)throw s.error}}n.push(null)}catch(e){n.destroy(e)}}});return n}async keys(e){return await this.raw.keys(e)}async exists(...e){return 0===e.length?0:await this.raw.exists(e)}async zadd(e,...t){let r=[];for(let e=0;e<t.length;e+=2)r.push({score:Number(t[e]),value:String(t[e+1])});return await this.raw.zAdd(e,r)}async zrem(e,...t){return await this.raw.zRem(e,t)}async xlen(e){return await this.raw.xLen(e)}async xrevrange(e,t,r,...i){let n={};return"COUNT"===i[0]&&(n.COUNT=Number(i[1])),(await this.raw.xRevRange(e,t,r,n)).map(e=>[e.id,Object.entries(e.message).flat()])}async sadd(e,...t){return await this.raw.sAdd(e,t.map(String))}async scard(e){return await this.raw.sCard(e)}async lpush(e,...t){return await this.raw.lPush(e,t)}async rpop(e){return await this.raw.rPop(e)}async incr(e){return await this.raw.incr(e)}async incrby(e,t){return await this.raw.incrBy(e,t)}async flushall(){return await this.raw.flushAll()}}class f{constructor(e,t){this.raw=e,this.scripts=t,this.transformers=[]}addIdentityTransformer(){this.transformers.push(e=>e)}hgetall(e){return this.raw.hGetAll(e),this.addIdentityTransformer(),this}hset(e,t){return this.raw.hSet(e,t),this.addIdentityTransformer(),this}hscan(e,t,r){let i={};return(null==r?void 0:r.COUNT)!=null&&(i.COUNT=r.COUNT),this.raw.hScan(e,String(t),i),this.transformers.push(e=>{if(!e)return["0",[]];let t=[];for(let r of e.entries||[])t.push(r.field,r.value);return[String(e.cursor),t]}),this}smembers(e){return this.raw.sMembers(e),this.addIdentityTransformer(),this}sscan(e,t,r){let i={};return(null==r?void 0:r.COUNT)!=null&&(i.COUNT=r.COUNT),this.raw.sScan(e,String(t),i),this.transformers.push(e=>e?[String(e.cursor),e.members||[]]:["0",[]]),this}zrange(e,t,r){return this.raw.zRange(e,t,r),this.addIdentityTransformer(),this}lrange(e,t,r){return this.raw.lRange(e,t,r),this.addIdentityTransformer(),this}llen(e){return this.raw.lLen(e),this.addIdentityTransformer(),this}del(...e){return e.length>0&&(this.raw.del(e),this.addIdentityTransformer()),this}runCommand(e,t){let r=this.scripts.get(e);if(!r)throw Error(`BullMQ: unknown command "${e}" in transaction`);let i=h(t),{sha:n,lua:s,numberOfKeys:a}=r,o=i.slice(0,a).map(String),l=i.slice(a).map(e=>Buffer.isBuffer(e)?e:null==e?"":String(e));return this.raw.evalSha(n,{keys:o,arguments:l}),this.addIdentityTransformer(),this}async exec(){let e=await this.raw.exec();return e?e.map((e,t)=>{if(e instanceof Error)return[e,null];let r=this.transformers[t];return[null,r?r(e):e]}):null}}function b(e){return 1===e.length&&Array.isArray(e[0])?e[0]:e}function g(e){return null==e?[]:Array.isArray(e)?e.map(String):e instanceof Set?Array.from(e,e=>String(e)):[]}class S extends o.EventEmitter{get status(){return this.statusOverride?this.statusOverride:this.closed?"end":this.raw.connected?"ready":this.hasConnected?"end":"wait"}set status(e){"end"===e&&(this.closing=!0,this.closed=!0),this.statusOverride=e}get options(){return{}}set options(e){}constructor(e,t){super(),this.raw=e,this.scripts=new Map,this.loadedScriptShas=new Set,this.hasConnected=!1,this.closed=!1,this.closing=!1,this.reconnecting=!1,this.reconnectTimer=null,this.reconnectAttempts=0,this.maxReconnectDelay=2e4,this.isCluster=!1,this._setupCallbacks(),(null==t?void 0:t.lazyConnect)||this.connect().catch(()=>{})}_setupCallbacks(){this.raw.onconnect=()=>{this.hasConnected=!0,this.closed=!1,this.closing=!1,this.reconnecting=!1,this.reconnectAttempts=0,this.statusOverride=void 0,this.loadedScriptShas.clear(),this.connectionName?this.clientSetName(this.connectionName).then(()=>this.emit("ready"),()=>this.emit("ready")):this.emit("ready")},this.raw.onclose=e=>{if(this.closing){this.closed=!0,this.emit("close"),this.emit("end");return}this.closed=!0,this.emit("close"),e&&this.emit("error",e),this._scheduleReconnect()}}_scheduleReconnect(){if(this.closing||this.reconnecting)return;this.reconnecting=!0,this.reconnectAttempts++;let e=Math.max(Math.min(100*Math.exp(this.reconnectAttempts),this.maxReconnectDelay),1e3);this.reconnectTimer=setTimeout(async()=>{if(this.reconnectTimer=null,this.closing){this.reconnecting=!1;return}try{let e=new this.raw.constructor(this.raw.url);this.raw=e,this.closed=!1,this.connecting=void 0,this._setupCallbacks(),await e.connect()}catch(e){this.reconnecting=!1,this.closing||this._scheduleReconnect()}},e)}async connect(){if(this.raw.connected){this.hasConnected=!0,this.closed=!1,this.closing=!1,this.statusOverride=void 0;return}if(!this.connecting){if(this.closed=!1,this.closing=!1,this.statusOverride=void 0,this.hasConnected&&!this.raw.connected){let e=this.raw.constructor;this.raw=new e(this.raw.url),this._setupCallbacks()}this.connecting=this.raw.connect().then(()=>{this.hasConnected=!0,this.closed=!1,this.closing=!1,this.statusOverride=void 0}).finally(()=>{this.connecting=void 0})}await this.connecting}_closeRaw(){this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.reconnecting=!1;let e=this.raw;e.onconnect=()=>{},e.onclose=()=>{},e.onerror=()=>{},e.connected&&setImmediate(()=>{try{e.connected&&e.close()}catch(e){}})}disconnect(e){if(!this.closed||e){if(e){this.closed=!0,this.statusOverride=void 0;let e=this.raw;e.onclose=()=>{},e.connected&&setImmediate(()=>{try{e.connected&&e.close()}catch(e){}}),this.emit("close"),this._scheduleReconnect()}else this.closing=!0,this.closed=!0,this.statusOverride="end",this._closeRaw(),this.emit("close"),this.emit("end")}}async quit(){return this.closed||(this.closing=!0,this.closed=!0,this.statusOverride="end",this._closeRaw()),setImmediate(()=>{this.emit("end"),this.emit("close")}),"OK"}duplicate(...e){let t=new S(new this.raw.constructor(this.raw.url));for(let[e,r]of this.scripts)t.scripts.set(e,r),t[e]=(...r)=>t.runCommand(e,r);let r=e[0];return r&&"object"==typeof r&&r.connectionName&&(t.connectionName=r.connectionName),t}defineCommand(e,t){let r=(0,c.createHash)("sha1").update(t.lua).digest("hex");this.scripts.set(e,{sha:r,lua:t.lua,numberOfKeys:t.numberOfKeys}),this[e]=(...t)=>this.runCommand(e,t)}async runCommand(e,t){let r=this.scripts.get(e);if(!r)throw Error(`BullMQ: unknown command "${e}"`);let i=b(t),{sha:n,lua:s,numberOfKeys:a}=r,o=i.slice(0,a).map(String),l=i.slice(a).map(e=>Buffer.isBuffer(e)?e:null==e?"":String(e)),d=[n,String(o.length),...o,...l];return(async()=>{var e,t;try{let e=await this.sendCommand("EVALSHA",d);return this.loadedScriptShas.add(n),e}catch(r){if(null===(t=null===(e=null==r?void 0:r.message)||void 0===e?void 0:e.includes)||void 0===t?void 0:t.call(e,"NOSCRIPT")){let e=[s,String(o.length),...o,...l],t=await this.sendCommand("EVAL",e);return this.loadedScriptShas.add(n),t}throw r}})()}async ensureScriptsLoaded(e){let t=[],r=new Set;for(let i of e)this.loadedScriptShas.has(i.sha)||r.has(i.sha)||(r.add(i.sha),t.push(i));0!==t.length&&await Promise.all(t.map(async e=>{await this.sendCommand("SCRIPT",["LOAD",e.lua]),this.loadedScriptShas.add(e.sha)}))}sendCommand(e,t){return this.closing||this.closed?Promise.reject(new p.i("Connection is closed")):this.raw.send(e,t).catch(e=>{if(function(e){var t;let r=null!==(t=null==e?void 0:e.message)&&void 0!==t?t:"";return"Socket closed unexpectedly"===r||r.startsWith("Connection closed")||"Connection is closed."===r||"Connection has failed"===r}(e))return Promise.reject(new p.i(this.closing||this.closed?"Connection is closed":e.message,e));throw e})}multi(){return new v(this.raw,this.scripts,!0,this)}pipeline(){return new v(this.raw,this.scripts,!1,this)}async hgetall(e){let t=await this.sendCommand("HGETALL",[e]);if(!t||Array.isArray(t)&&0===t.length)return{};if(Array.isArray(t)){let e={};for(let r=0;r<t.length;r+=2)e[String(t[r])]=String(t[r+1]);return e}return t}async hget(e,t){let r=await this.sendCommand("HGET",[e,t]);return null!=r?r:null}async hmget(e,...t){return(await this.sendCommand("HMGET",[e,...t])||[]).map(e=>null!=e?e:null)}async hset(e,t,...r){let i;if("object"==typeof t)for(let[r,n]of(i=[e],Object.entries(t)))i.push(r,String(n));else{i=[e,t,String(r[0])];for(let e=1;e<r.length;e+=2)i.push(String(r[e]),String(r[e+1]))}return await this.sendCommand("HSET",i)}async hdel(e,...t){return await this.sendCommand("HDEL",[e,...t])}async hexists(e,t){let r=await this.sendCommand("HEXISTS",[e,t]);return!0===r||1===r?1:0}async get(e){let t=await this.sendCommand("GET",[e]);return null!=t?t:null}async set(e,t,r){let i=[e,String(t)];return(null==r?void 0:r.PX)!=null?i.push("PX",String(r.PX)):(null==r?void 0:r.EX)!=null&&i.push("EX",String(r.EX)),await this.sendCommand("SET",i)}async del(...e){return 0===e.length?0:await this.sendCommand("DEL",e)}async zrange(e,t,r,i){let n=[e,String(t),String(r)];(null==i?void 0:i.WITHSCORES)&&n.push("WITHSCORES");let s=await this.sendCommand("ZRANGE",n);return s?(null==i?void 0:i.WITHSCORES)&&s.length>0&&Array.isArray(s[0])?s.flatMap(e=>[String(e[0]),String(e[1])]):s.map(String):[]}async zrevrange(e,t,r,i){let n=[e,String(t),String(r)];(null==i?void 0:i.WITHSCORES)&&n.push("WITHSCORES"),n.push("REV");let s=await this.sendCommand("ZRANGE",n);return s?(null==i?void 0:i.WITHSCORES)&&s.length>0&&Array.isArray(s[0])?s.flatMap(e=>[String(e[0]),String(e[1])]):s.map(String):[]}async zcard(e){return await this.sendCommand("ZCARD",[e])}async zscore(e,t){let r=await this.sendCommand("ZSCORE",[e,t]);return null!=r?String(r):null}async lrange(e,t,r){return(await this.sendCommand("LRANGE",[e,String(t),String(r)])||[]).map(String)}async llen(e){return await this.sendCommand("LLEN",[e])}async ltrim(e,t,r){return await this.sendCommand("LTRIM",[e,String(t),String(r)]),"OK"}async lpos(e,t){let r=await this.sendCommand("LPOS",[e,t]);return null!=r?r:null}async smembers(e){return g(await this.sendCommand("SMEMBERS",[e]))}async xadd(e,t,r,i){let n=[e];for(let[e,s]of((null==i?void 0:i.MAXLEN)!=null&&(n.push("MAXLEN"),!1!==i.approximate&&n.push("~"),n.push(String(i.MAXLEN))),n.push(t),Object.entries(r)))n.push(e,String(s));return await this.raw.send("XADD",n)}async xread(e,t){let r;let i=[];for(let r of((null==t?void 0:t.COUNT)!=null&&i.push("COUNT",String(t.COUNT)),(null==t?void 0:t.BLOCK)!=null&&i.push("BLOCK",String(t.BLOCK)),i.push("STREAMS"),e))i.push(r.key);for(let t of e)i.push(t.id);try{r=await this.sendCommand("XREAD",i)}catch(e){if(this.closing)return null;throw e}return r?Array.isArray(r)?r.map(e=>[String(e[0]),(e[1]||[]).map(e=>[String(e[0]),(e[1]||[]).map(String)])]):Object.entries(r).map(([e,t])=>[e,(t||[]).map(e=>[String(e[0]),(e[1]||[]).map(String)])]):null}async xtrim(e,t,r,i){let n=[e,t];return(null==i?void 0:i.approximate)!==!1&&n.push("~"),n.push(String(r)),await this.sendCommand("XTRIM",n)}async bzpopmin(e,t){let r;try{r=await this.sendCommand("BZPOPMIN",[e,String(t)])}catch(e){if(this.closing)return null;throw e}return r&&0!==r.length?[String(r[0]),String(r[1]),String(r[2])]:null}async info(){return await this.sendCommand("INFO",[])}async clientSetName(e){return await this.sendCommand("CLIENT",["SETNAME",e])}async clientList(){return await this.sendCommand("CLIENT",["LIST"])}async scan(e,t){let r=[String(e)];(null==t?void 0:t.MATCH)&&r.push("MATCH",t.MATCH),(null==t?void 0:t.COUNT)&&r.push("COUNT",String(t.COUNT));let i=await this.sendCommand("SCAN",r),n=i[1];return[String(i[0]),Array.isArray(n)?n.map(String):[]]}scanStream(e){let t=this,r="0",i=!1,n=new u.Readable({objectMode:!0,async read(){if(i&&"0"===r){n.push(null);return}i=!0;try{for(;;){let[i,s]=await t.scan(r,{MATCH:e.match,COUNT:e.count});if(r=i,s.length>0){n.push(s),"0"===r&&n.push(null);return}if("0"===r){n.push(null);return}}}catch(e){n.destroy(e)}}});return n}async keys(e){return(await this.sendCommand("KEYS",[e])||[]).map(String)}async exists(...e){if(0===e.length)return 0;let t=await this.sendCommand("EXISTS",e);return"boolean"==typeof t?t?1:0:t}async zadd(e,...t){let r=[e];for(let e=0;e<t.length;e+=2)r.push(String(t[e]),String(t[e+1]));return await this.sendCommand("ZADD",r)}async zrem(e,...t){return await this.sendCommand("ZREM",[e,...t])}async xlen(e){return await this.sendCommand("XLEN",[e])}async xrevrange(e,t,r,...i){let n=[e,t,r];"COUNT"===i[0]&&n.push("COUNT",String(i[1]));let s=await this.sendCommand("XREVRANGE",n);return s?s.map(e=>[String(e[0]),(e[1]||[]).map(String)]):[]}async sadd(e,...t){return await this.sendCommand("SADD",[e,...t.map(String)])}async scard(e){return await this.sendCommand("SCARD",[e])}async lpush(e,...t){return await this.sendCommand("LPUSH",[e,...t])}async rpop(e){let t=await this.sendCommand("RPOP",[e]);return null!=t?t:null}async incr(e){return await this.sendCommand("INCR",[e])}async incrby(e,t){return await this.sendCommand("INCRBY",[e,String(t)])}async flushall(){return await this.sendCommand("FLUSHALL",[])}}class v{constructor(e,t,r,i){this.raw=e,this.scripts=t,this.transactional=r,this.adapter=i,this.commands=[],this.transformers=[],this.scriptsToLoad=[]}addCommand(e,t,r){this.commands.push({cmd:e,args:t}),this.transformers.push(r||(e=>e))}hgetall(e){return this.addCommand("HGETALL",[e],e=>{if(!e||Array.isArray(e)&&0===e.length)return{};if(Array.isArray(e)){let t={};for(let r=0;r<e.length;r+=2)t[String(e[r])]=String(e[r+1]);return t}return e}),this}hset(e,t){let r=[e];for(let[e,i]of Object.entries(t))r.push(e,String(i));return this.addCommand("HSET",r),this}hscan(e,t,r){let i=[e,String(t)];return(null==r?void 0:r.COUNT)!=null&&i.push("COUNT",String(r.COUNT)),this.addCommand("HSCAN",i,e=>e&&Array.isArray(e)?[String(e[0]),g(e[1])]:["0",[]]),this}smembers(e){return this.addCommand("SMEMBERS",[e],e=>g(e)),this}sscan(e,t,r){let i=[e,String(t)];return(null==r?void 0:r.COUNT)!=null&&i.push("COUNT",String(r.COUNT)),this.addCommand("SSCAN",i,e=>e&&Array.isArray(e)?[String(e[0]),g(e[1])]:["0",[]]),this}zrange(e,t,r){return this.addCommand("ZRANGE",[e,String(t),String(r)],e=>Array.isArray(e)?e.map(String):[]),this}lrange(e,t,r){return this.addCommand("LRANGE",[e,String(t),String(r)],e=>Array.isArray(e)?e.map(String):[]),this}llen(e){return this.addCommand("LLEN",[e]),this}del(...e){return e.length>0&&this.addCommand("DEL",e),this}runCommand(e,t){let r=this.scripts.get(e);if(!r)throw Error(`BullMQ: unknown command "${e}" in transaction`);let i=b(t),{sha:n,numberOfKeys:s}=r,a=i.slice(0,s).map(String),o=i.slice(s).map(e=>Buffer.isBuffer(e)?e:null==e?"":String(e));return this.scriptsToLoad.push(r),this.addCommand("EVALSHA",[n,String(a.length),...a,...o]),this}async exec(){if(0===this.commands.length)return[];if(this.scriptsToLoad.length>0&&await this.adapter.ensureScriptsLoaded(this.scriptsToLoad),!this.transactional)return(await Promise.allSettled(this.commands.map(({cmd:e,args:t})=>this.adapter.sendCommand(e,t)))).map((e,t)=>{if("rejected"===e.status)return[e.reason,null];let r=this.transformers[t];return[null,r?r(e.value):e.value]});let e=e=>{};try{for(let{cmd:t,args:r}of(this.raw.send("MULTI",[]).catch(e),this.commands))this.raw.send(t,r).catch(e);let t=await this.raw.send("EXEC",[]);if(!t)return null;return t.map((e,t)=>{if(e instanceof Error)return[e,null];let r=this.transformers[t],i=r?r(e):e;return[null,i]})}catch(e){try{await this.raw.send("DISCARD",[])}catch(e){}throw e}}}var K=r(38829);r(75822);var k=r(41381);function E(e){return String(e).replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n")}class I extends k.W{getJob(e){return this.Job.fromId(this,e)}commandByType(e,t,r){return e.map(e=>{e="waiting"===e?"wait":e;let i=this.toKey(e);switch(e){case"completed":case"failed":case"delayed":case"prioritized":case"repeat":case"waiting-children":return r(i,t?"zcard":"zrange");case"active":case"wait":case"paused":return r(i,t?"llen":"lrange")}})}sanitizeJobTypes(e){let t="string"==typeof e?[e]:e;if(Array.isArray(t)&&t.length>0){let e=[...t];return -1!==e.indexOf("waiting")&&e.push("paused"),[...new Set(e)]}return["active","completed","delayed","failed","paused","prioritized","waiting","waiting-children"]}async count(){return await this.getJobCountByTypes("waiting","paused","delayed","prioritized","waiting-children")}async getRateLimitTtl(e){return this.scripts.getRateLimitTtl(e)}async getDebounceJobId(e){return(await this.client).get(`${this.keys.de}:${e}`)}async getDeduplicationJobId(e){return(await this.client).get(`${this.keys.de}:${e}`)}async getGlobalConcurrency(){let e=await this.client,t=await e.hget(this.keys.meta,"concurrency");return t?Number(t):null}async getGlobalRateLimit(){let e=await this.client,[t,r]=await e.hmget(this.keys.meta,"max","duration");return t&&r?{max:Number(t),duration:Number(r)}:null}async getJobCountByTypes(...e){return Object.values(await this.getJobCounts(...e)).reduce((e,t)=>e+t,0)}async getJobCounts(...e){let t=this.sanitizeJobTypes(e),r=await this.scripts.getCounts(t),i={};return r.forEach((e,r)=>{i[t[r]]=e||0}),i}async recordJobCountsMetric(...e){var t;let r=await this.getJobCounts(...e),i=null===(t=this.opts.telemetry)||void 0===t?void 0:t.meter;if(i&&"function"==typeof i.createGauge){let e=i.createGauge(s.p7.QueueJobsCount,{description:"Number of jobs in the queue by state",unit:"{jobs}"});for(let[t,i]of Object.entries(r))e.record(i,{[s.Np.QueueName]:this.name,[s.Np.QueueJobsState]:t})}return r}getJobState(e){return this.scripts.getState(e)}async getMeta(){let e=await this.client,t=await e.hgetall(this.keys.meta),{concurrency:r,max:i,duration:n,paused:s,"opts.maxLenEvents":a}=t,o=(0,d._T)(t,["concurrency","max","duration","paused","opts.maxLenEvents"]);return r&&(o.concurrency=Number(r)),a&&(o.maxLenEvents=Number(a)),i&&(o.max=Number(i)),n&&(o.duration=Number(n)),o.paused="1"===s,o}getCompletedCount(){return this.getJobCountByTypes("completed")}getFailedCount(){return this.getJobCountByTypes("failed")}getDelayedCount(){return this.getJobCountByTypes("delayed")}getActiveCount(){return this.getJobCountByTypes("active")}getPrioritizedCount(){return this.getJobCountByTypes("prioritized")}async getCountsPerPriority(e){let t=[...new Set(e)],r=await this.scripts.getCountsPerPriority(t),i={};return r.forEach((e,r)=>{i[`${t[r]}`]=e||0}),i}getWaitingCount(){return this.getJobCountByTypes("waiting")}getWaitingChildrenCount(){return this.getJobCountByTypes("waiting-children")}getWaiting(e=0,t=-1){return this.getJobs(["waiting"],e,t,!0)}getWaitingChildren(e=0,t=-1){return this.getJobs(["waiting-children"],e,t,!0)}getActive(e=0,t=-1){return this.getJobs(["active"],e,t,!0)}getDelayed(e=0,t=-1){return this.getJobs(["delayed"],e,t,!0)}getPrioritized(e=0,t=-1){return this.getJobs(["prioritized"],e,t,!0)}getCompleted(e=0,t=-1){return this.getJobs(["completed"],e,t,!1)}getFailed(e=0,t=-1){return this.getJobs(["failed"],e,t,!1)}async getDependencies(e,t,r,i){let n=this.toKey("processed"==t?`${e}:processed`:`${e}:dependencies`),{items:s,total:a,jobs:o}=await this.scripts.paginate(n,{start:r,end:i,fetchJobs:!0});return{items:s,jobs:o,total:a}}async getRanges(e,t=0,r=1,i=!1){let n=[];this.commandByType(e,!1,(e,t)=>{switch(t){case"lrange":n.push("lrange");break;case"zrange":n.push("zrange")}});let s=await this.scripts.getRanges(e,t,r,i),a=[];return s.forEach((e,t)=>{let r=e||[];a=i&&"lrange"===n[t]?a.concat(r.reverse()):a.concat(r)}),[...new Set(a)]}async getJobs(e,t=0,r=-1,i=!1){let n=this.sanitizeJobTypes(e);return Promise.all((await this.getRanges(n,t,r,i)).map(e=>this.Job.fromId(this,e)))}async getJobLogs(e,t=0,r=-1,i=!0){let n=(await this.client).multi(),s=this.toKey(e+":logs");i?n.lrange(s,t,r):n.lrange(s,-(r+1),-(t+1)),n.llen(s);let a=await n.exec();return i||a[0][1].reverse(),{logs:a[0][1],count:a[1][1]}}async baseGetClients(e){let t=await this.client;try{if(t.isCluster&&"function"==typeof t.nodes){let r=t.nodes(),i=[];for(let t=0;t<r.length;t++){let n=r[t],s="function"==typeof n.clientList?await n.clientList():await n.client("LIST"),a=this.parseClientList(s,e);i.push(a)}return i.reduce((e,t)=>e.length>t.length?e:t,[])}{let r=await t.clientList();return this.parseClientList(r,e)}}catch(e){if(!a.aV.test(e.message))throw e;return[{name:"GCP does not support client list"}]}}getWorkers(){let e=`${this.clientName()}`,t=`${this.clientName()}:w:`;return this.baseGetClients(r=>r&&(r===e||r.startsWith(t)))}async getWorkersCount(){return(await this.getWorkers()).length}async getQueueEvents(){let e=`${this.clientName()}${a.oh}`;return this.baseGetClients(t=>t===e)}async getMetrics(e,t=0,r=-1){let[i,n,s]=await this.scripts.getMetrics(e,t,r);return{meta:{count:parseInt(i[0]||"0",10),prevTS:parseInt(i[1]||"0",10),prevCount:parseInt(i[2]||"0",10)},data:n.map(e=>+e||0),count:s}}parseClientList(e,t){let r=e.split(/\r?\n/),i=[];return r.forEach(e=>{let r={};e.split(" ").forEach(function(e){let t=e.indexOf("="),i=e.substring(0,t),n=e.substring(t+1);r[i]=n});let n=r.name;t(n)&&(r.name=this.name,r.rawname=n,i.push(r))}),i}async exportPrometheusMetrics(e){let t=await this.getJobCounts(),r=[];r.push("# HELP bullmq_job_count Number of jobs in the queue by state"),r.push("# TYPE bullmq_job_count gauge");let i=E(this.name),n=e?Object.keys(e).reduce((t,r)=>`${t}, ${r}="${E(e[r])}"`,""):"";for(let[e,s]of Object.entries(t))r.push(`bullmq_job_count{queue="${i}", state="${e}"${n}} ${s}`);let[s,a]=await Promise.all([this.getMetrics("completed"),this.getMetrics("failed")]);return r.push("# HELP bullmq_job_completed_total Total number of completed jobs"),r.push("# TYPE bullmq_job_completed_total counter"),r.push(`bullmq_job_completed_total{queue="${i}"${n}} ${s.meta.count}`),r.push("# HELP bullmq_job_failed_total Total number of failed jobs"),r.push("# TYPE bullmq_job_failed_total counter"),r.push(`bullmq_job_failed_total{queue="${i}"${n}} ${a.meta.count}`),r.join("\n")}}var w=r(35144),j=r(2036);class x extends I{constructor(e,t,r){var i;super(e,Object.assign({},t),r),this.token=(0,a.HP)(),this.libName="bullmq",this.jobsOpts=null!==(i=null==t?void 0:t.defaultJobOptions)&&void 0!==i?i:{},this.waitUntilReady().then(e=>{if(!this.closing&&!(null==t?void 0:t.skipMetasUpdate))return e.hset(this.keys.meta,this.metaValues)}).catch(e=>{})}emit(e,...t){return super.emit(e,...t)}off(e,t){return super.off(e,t),this}on(e,t){return super.on(e,t),this}once(e,t){return super.once(e,t),this}get defaultJobOptions(){return Object.assign({},this.jobsOpts)}get metaValues(){var e,t,r,i;return{"opts.maxLenEvents":null!==(i=null===(r=null===(t=null===(e=this.opts)||void 0===e?void 0:e.streams)||void 0===t?void 0:t.events)||void 0===r?void 0:r.maxLen)&&void 0!==i?i:1e4,version:`${this.libName}:${j.i}`}}async getVersion(){let e=await this.client;return await e.hget(this.keys.meta,"version")}get repeat(){return new Promise(async e=>{this._repeat||(this._repeat=new w.w(this.name,Object.assign(Object.assign({},this.opts),{connection:await this.client})),this._repeat.on("error",this.emit.bind(this,"error"))),e(this._repeat)})}get jobScheduler(){return new Promise(async e=>{this._jobScheduler||(this._jobScheduler=new K.W(this.name,Object.assign(Object.assign({},this.opts),{connection:await this.client})),this._jobScheduler.on("error",this.emit.bind(this,"error"))),e(this._jobScheduler)})}async setGlobalConcurrency(e){return(await this.client).hset(this.keys.meta,{concurrency:e})}async setGlobalRateLimit(e,t){return(await this.client).hset(this.keys.meta,{max:e,duration:t})}async removeGlobalConcurrency(){return(await this.client).hdel(this.keys.meta,"concurrency")}async removeGlobalRateLimit(){return(await this.client).hdel(this.keys.meta,"max","duration")}async add(e,t,r){return this.trace(s.MU.PRODUCER,"add",`${this.name}.${e}`,async(i,n)=>{var a;!n||(null===(a=null==r?void 0:r.telemetry)||void 0===a?void 0:a.omitContext)||(r=Object.assign(Object.assign({},r),{telemetry:{metadata:n}}));let o=await this.addJob(e,t,r);return null==i||i.setAttributes({[s.Np.JobName]:e,[s.Np.JobId]:o.id}),o})}async addJob(e,t,r){if(r&&r.repeat){if(r.repeat.endDate&&+new Date(r.repeat.endDate)<Date.now())throw Error("End date must be greater than current timestamp");return(await this.repeat).updateRepeatableJob(e,t,Object.assign(Object.assign({},this.jobsOpts),r),{override:!0})}{let i=null==r?void 0:r.jobId;if("0"==i||(null==i?void 0:i.startsWith("0:")))throw Error("JobId cannot be '0' or start with 0:");let n=Object.assign(Object.assign(Object.assign({},this.jobsOpts),r),{jobId:i}),s=await this.Job.create(this,e,t,n);return this.emit("waiting",s),s}}async addBulk(e){return this.trace(s.MU.PRODUCER,"addBulk",this.name,async(t,r)=>(t&&t.setAttributes({[s.Np.BulkNames]:e.map(e=>e.name),[s.Np.BulkCount]:e.length}),await this.Job.createBulk(this,e.map(e=>{var t,i,n,s,a,o;let l=null===(t=e.opts)||void 0===t?void 0:t.telemetry;if(r){let t=null===(n=null===(i=e.opts)||void 0===i?void 0:i.telemetry)||void 0===n?void 0:n.omitContext,o=(null===(a=null===(s=e.opts)||void 0===s?void 0:s.telemetry)||void 0===a?void 0:a.metadata)||!t&&r;(o||t)&&(l={metadata:o,omitContext:t})}let d=Object.assign(Object.assign(Object.assign({},this.jobsOpts),e.opts),{jobId:null===(o=e.opts)||void 0===o?void 0:o.jobId,telemetry:l});return{name:e.name,data:e.data,opts:d}}))))}async upsertJobScheduler(e,t,r){var i,n;if(t.endDate&&+new Date(t.endDate)<Date.now())throw Error("End date must be greater than current timestamp");return(await this.jobScheduler).upsertJobScheduler(e,t,null!==(i=null==r?void 0:r.name)&&void 0!==i?i:e,null!==(n=null==r?void 0:r.data)&&void 0!==n?n:{},Object.assign(Object.assign({},this.jobsOpts),null==r?void 0:r.opts),{override:!0})}async pause(){await this.trace(s.MU.INTERNAL,"pause",this.name,async()=>{await this.scripts.pause(!0),this.emit("paused")})}async close(){await this.trace(s.MU.INTERNAL,"close",this.name,async()=>{!this.closing&&this._repeat&&await this._repeat.close(),await super.close()})}async rateLimit(e){await this.trace(s.MU.INTERNAL,"rateLimit",this.name,async t=>{null==t||t.setAttributes({[s.Np.QueueRateLimit]:e}),await this.client.then(t=>t.set(this.keys.limiter,Number.MAX_SAFE_INTEGER,{PX:e}))})}async resume(){await this.trace(s.MU.INTERNAL,"resume",this.name,async()=>{await this.scripts.pause(!1),this.emit("resumed")})}async isPaused(){let e=await this.client;return 1===await e.hexists(this.keys.meta,"paused")}isMaxed(){return this.scripts.isMaxed()}async getRepeatableJobs(e,t,r){return(await this.repeat).getRepeatableJobs(e,t,r)}async getJobScheduler(e){return(await this.jobScheduler).getScheduler(e)}async getJobSchedulers(e,t,r){return(await this.jobScheduler).getJobSchedulers(e,t,r)}async getJobSchedulersCount(){return(await this.jobScheduler).getSchedulersCount()}async removeRepeatable(e,t,r){return this.trace(s.MU.INTERNAL,"removeRepeatable",`${this.name}.${e}`,async i=>{null==i||i.setAttributes({[s.Np.JobName]:e,[s.Np.JobId]:r});let n=await this.repeat;return!await n.removeRepeatable(e,t,r)})}async removeJobScheduler(e){let t=await this.jobScheduler;return!await t.removeJobScheduler(e)}async removeDebounceKey(e){return this.trace(s.MU.INTERNAL,"removeDebounceKey",`${this.name}`,async t=>{null==t||t.setAttributes({[s.Np.JobKey]:e});let r=await this.client;return await r.del(`${this.keys.de}:${e}`)})}async removeDeduplicationKey(e){return this.trace(s.MU.INTERNAL,"removeDeduplicationKey",`${this.name}`,async t=>(null==t||t.setAttributes({[s.Np.DeduplicationKey]:e}),(await this.client).del(`${this.keys.de}:${e}`)))}async removeRateLimitKey(){return(await this.client).del(this.keys.limiter)}async removeRepeatableByKey(e){return this.trace(s.MU.INTERNAL,"removeRepeatableByKey",`${this.name}`,async t=>{null==t||t.setAttributes({[s.Np.JobKey]:e});let r=await this.repeat;return!await r.removeRepeatableByKey(e)})}async remove(e,{removeChildren:t=!0}={}){return this.trace(s.MU.INTERNAL,"remove",this.name,async r=>{null==r||r.setAttributes({[s.Np.JobId]:e,[s.Np.JobOptions]:JSON.stringify({removeChildren:t})});let i=await this.scripts.remove(e,t);return 1===i&&this.emit("removed",e),i})}async updateJobProgress(e,t){await this.trace(s.MU.INTERNAL,"updateJobProgress",this.name,async r=>{null==r||r.setAttributes({[s.Np.JobId]:e,[s.Np.JobProgress]:JSON.stringify(t)}),await this.scripts.updateProgress(e,t),this.emit("progress",e,t)})}async addJobLog(e,t,r){return l.o.addJobLog(this,e,t,r)}async drain(e=!1){await this.trace(s.MU.INTERNAL,"drain",this.name,async t=>{null==t||t.setAttributes({[s.Np.QueueDrainDelay]:e}),await this.scripts.drain(e)})}async clean(e,t,r="completed"){return this.trace(s.MU.INTERNAL,"clean",this.name,async i=>{let n=t||1/0,a=Math.min(1e4,n),o=Date.now()-e,l=0,d=[],c="waiting"===r?"wait":r;for(;l<n;){let e=await this.scripts.cleanJobsInSet(c,o,a);if(this.emit("cleaned",e,c),l+=e.length,d.push(...e),e.length<a)break}return null==i||i.setAttributes({[s.Np.QueueGrace]:e,[s.Np.JobType]:r,[s.Np.QueueCleanLimit]:n,[s.Np.JobIds]:d}),d})}async obliterate(e){await this.trace(s.MU.INTERNAL,"obliterate",this.name,async()=>{await this.pause();let t=0;do t=await this.scripts.obliterate(Object.assign({force:!1,count:1e3},e));while(t)})}async retryJobs(e={}){await this.trace(s.MU.PRODUCER,"retryJobs",this.name,async t=>{null==t||t.setAttributes({[s.Np.QueueOptions]:JSON.stringify(e)});let r=0;do r=await this.scripts.retryJobs(e.state,e.count,e.timestamp);while(r)})}async promoteJobs(e={}){await this.trace(s.MU.INTERNAL,"promoteJobs",this.name,async t=>{null==t||t.setAttributes({[s.Np.QueueOptions]:JSON.stringify(e)});let r=0;do r=await this.scripts.promoteJobs(e.count);while(r)})}async trimEvents(e){return this.trace(s.MU.INTERNAL,"trimEvents",this.name,async t=>{null==t||t.setAttributes({[s.Np.QueueEventMaxLength]:e});let r=await this.client;return await r.xtrim(this.keys.events,"MAXLEN",e,{approximate:!0})})}async removeDeprecatedPriorityKey(){return(await this.client).del(this.toKey("priority"))}async removeOrphanedJobs(e=1e3,t=0){let r=await this.client,i=new Set(Object.keys(this.keys)),n=Object.keys(this.keys).filter(e=>""!==e),s=["logs","dependencies","processed","failed","unsuccessful","lock"],a=this.qualifiedName+":",o=a+"*",l=0,d="0";do{let[c,u]=await r.scan(d,{MATCH:o,COUNT:e});d=c;let p=new Set;for(let e of u){let t=e.slice(a.length);if(i.has(t))continue;let r=t.indexOf(":");if(-1!==r){let e=t.slice(0,r);if(i.has(e))continue}let n=-1===r?t:t.slice(0,r);if(-1!==r){let e=t.slice(r+1);if(!s.includes(e))continue}p.add(n)}if(0===p.size)continue;if(l+=await this.scripts.removeOrphanedJobs([...p],n,s)||0,t>0&&l>=t)break}while("0"!==d);return l}}r(39735),r(57363);var A=r(92891);(function(e){e.blocking="blocking",e.normal="normal"})(n||(n={})),r(19183)},19183:(e,t,r)=>{"use strict";r.d(t,{W:()=>n});var i=r(57363);let n=e=>new i.K({keys:e.keys,client:e.client,get redisVersion(){return e.redisVersion},toKey:e.toKey,opts:e.opts,closing:e.closing,databaseType:e.databaseType})},25619:(e,t,r)=>{"use strict";r.d(t,{HP:()=>D,Hh:()=>I,J3:()=>j,LG:()=>v,Nw:()=>f,OV:()=>S,TJ:()=>l,VZ:()=>p,WE:()=>x,Y1:()=>g,Y3:()=>d,Yq:()=>T,Zm:()=>w,aV:()=>k,dq:()=>h,fq:()=>b,g4:()=>C,gw:()=>y,iF:()=>c,oh:()=>A,pV:()=>K,xP:()=>m,xb:()=>u,yf:()=>E});var i=r(6113),n=r(13505),s=r(59372),a=r(34099),o=r(5315);let l={value:null};function d(e,t,r){try{return e.apply(t,r)}catch(e){return l.value=e,l}}function c(e){return Buffer.byteLength(e,"utf8")}function u(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function p(e){let t={};for(let r=0;r<e.length;r+=2)t[e[r]]=e[r+1];return t}function h(e){let t=[];for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&void 0!==e[r]&&(t[t.length]=r,t[t.length]=e[r]);return t}function y(e,t){return new Promise(r=>{let i;let n=()=>{null==t||t.signal.removeEventListener("abort",n),clearTimeout(i),r()};i=setTimeout(n,e),null==t||t.signal.addEventListener("abort",n)})}function m(e,t){let r=e.getMaxListeners();e.setMaxListeners(r+t)}let f={de:"deduplication",fpof:"failParentOnFailure",cpof:"continueParentOnFailure",idof:"ignoreDependencyOnFailure",kl:"keepLogs",rdof:"removeDependencyOnFailure"},b=Object.assign(Object.assign({},Object.entries(f).reduce((e,[t,r])=>(e[r]=t,e),{})),{debounce:"de"});function g(e){return!!e&&["connect","disconnect","duplicate"].every(t=>"function"==typeof e[t])}function S(e){return g(e)&&!!e.isCluster}function v(e,t){m(e,-t)}function K(e){if(e)return`${e.queue}:${e.id}`}let k=/ERR unknown command ['`]\s*client\s*['`]/,E=5e3,I=100;function w(e){if(e instanceof s.i)return!1;let{code:t,message:r}=e;return r!==n.CONNECTION_CLOSED_ERROR_MSG&&!r.includes("ECONNREFUSED")&&"ECONNREFUSED"!==t}let j=(e,t,r,i="redis")=>{if(r===i){let r=a.valid(a.coerce(e));return a.lt(r,t)}return!1},x=e=>{let t={};for(let r of Object.entries(e))t[r[0]]=JSON.parse(r[1]);return t},A=":qe";function T(e){let t={};for(let r in e)void 0!==e[r]&&(t[r]=e[r]);return t}async function C(e,t,r,i,n,s,a){if(!e)return s();{let l;let{tracer:d,contextManager:c}=e,u=c.active();a&&(l=c.fromMetadata(u,a));let p=n?`${i} ${n}`:i,h=d.startSpan(p,{kind:t},l);try{let e,n;return h.setAttributes({[o.Np.QueueName]:r,[o.Np.QueueOperation]:i}),e=t===o.MU.CONSUMER&&l?h.setSpanOnContext(l):h.setSpanOnContext(u),2==s.length&&(n=c.getMetadata(e)),await c.with(e,()=>s(h,n))}catch(e){throw h.recordException(e),e}finally{h.end()}}}function D(){if("function"==typeof i.randomUUID)return(0,i.randomUUID)();let e=(0,i.randomBytes)(16);return e[6]=15&e[6]|64,e[8]=63&e[8]|128,[e.toString("hex",0,4),e.toString("hex",4,6),e.toString("hex",6,8),e.toString("hex",8,10),e.toString("hex",10,16)].join("-")}},2036:(e,t,r)=>{"use strict";r.d(t,{i:()=>i});let i="5.78.1"},22205:function(e,t,r){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getKeyIndexes=t.hasFlag=t.exists=t.list=void 0;let n=i(r(24132));t.list=Object.keys(n.default);let s={};function a(e){"string"!=typeof e&&(e=String(e));let t=e.indexOf("->");return -1===t?e.length:t}t.list.forEach(e=>{s[e]=n.default[e].flags.reduce(function(e,t){return e[t]=!0,e},{})}),t.exists=function(e,t){return e=(null==t?void 0:t.caseInsensitive)?String(e).toLowerCase():e,!!n.default[e]},t.hasFlag=function(e,t,r){if(!s[e=(null==r?void 0:r.nameCaseInsensitive)?String(e).toLowerCase():e])throw Error("Unknown command "+e);return!!s[e][t]},t.getKeyIndexes=function(e,t,r){e=(null==r?void 0:r.nameCaseInsensitive)?String(e).toLowerCase():e;let i=n.default[e];if(!i)throw Error("Unknown command "+e);if(!Array.isArray(t))throw Error("Expect args to be an array");let s=[],o=!!(r&&r.parseExternalKey),l=(e,t)=>{let r=[],i=Number(e[t]);for(let e=0;e<i;e++)r.push(e+t+1);return r},d=(e,t,r)=>{for(let i=t;i<e.length-1;i+=1)if(String(e[i]).toLowerCase()===r.toLowerCase())return i+1;return null};switch(e){case"zunionstore":case"zinterstore":case"zdiffstore":s.push(0,...l(t,1));break;case"eval":case"evalsha":case"eval_ro":case"evalsha_ro":case"fcall":case"fcall_ro":case"blmpop":case"bzmpop":s.push(...l(t,1));break;case"sintercard":case"lmpop":case"zunion":case"zinter":case"zmpop":case"zintercard":case"zdiff":s.push(...l(t,0));break;case"georadius":{s.push(0);let e=d(t,5,"STORE");e&&s.push(e);let r=d(t,5,"STOREDIST");r&&s.push(r);break}case"georadiusbymember":{s.push(0);let e=d(t,4,"STORE");e&&s.push(e);let r=d(t,4,"STOREDIST");r&&s.push(r);break}case"sort":case"sort_ro":s.push(0);for(let e=1;e<t.length-1;e++){let r=t[e];if("string"!=typeof r)continue;let i=r.toUpperCase();"GET"===i?(e+=1,"#"!==(r=t[e])&&(o?s.push([e,a(r)]):s.push(e))):"BY"===i?(e+=1,o?s.push([e,a(t[e])]):s.push(e)):"STORE"===i&&(e+=1,s.push(e))}break;case"migrate":if(""===t[2])for(let e=5;e<t.length-1;e++){let r=t[e];if("string"==typeof r&&"KEYS"===r.toUpperCase()){for(let r=e+1;r<t.length;r++)s.push(r);break}}else s.push(2);break;case"xreadgroup":case"xread":for(let r="xread"===e?0:3;r<t.length-1;r++)if("STREAMS"===String(t[r]).toUpperCase()){for(let e=r+1;e<=r+(t.length-1-r)/2;e++)s.push(e);break}break;default:if(i.step>0){let e=i.keyStart-1,r=i.keyStop>0?i.keyStop:t.length+i.keyStop+1;for(let t=e;t<r;t+=i.step)s.push(t)}}return s}},12986:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(22205),n=r(74358),s=r(83499),a=r(13505),o=r(73527);class l{constructor(e,t=[],r={},i){if(this.name=e,this.inTransaction=!1,this.isResolved=!1,this.transformed=!1,this.replyEncoding=r.replyEncoding,this.errorStack=r.errorStack,this.args=t.flat(),this.callback=i,this.initPromise(),r.keyPrefix){let e=r.keyPrefix instanceof Buffer,t=e?r.keyPrefix:null;this._iterateKeys(i=>i instanceof Buffer?(null===t&&(t=Buffer.from(r.keyPrefix)),Buffer.concat([t,i])):e?Buffer.concat([r.keyPrefix,Buffer.from(String(i))]):r.keyPrefix+i)}r.readOnly&&(this.isReadOnly=!0)}static checkFlag(e,t){return t=t.toLowerCase(),!!this.getFlagMap()[e][t]}static setArgumentTransformer(e,t){this._transformer.argument[e]=t}static setReplyTransformer(e,t){this._transformer.reply[e]=t}static getFlagMap(){return this.flagMap||(this.flagMap=Object.keys(l.FLAGS).reduce((e,t)=>(e[t]={},l.FLAGS[t].forEach(r=>{e[t][r]=!0}),e),{})),this.flagMap}getSlot(){if(void 0===this.slot){let e=this.getKeys()[0];this.slot=null==e?null:n(e)}return this.slot}getKeys(){return this._iterateKeys()}toWritable(e){let t;let r="*"+(this.args.length+1)+"\r\n$"+Buffer.byteLength(this.name)+"\r\n"+this.name+"\r\n";if(this.bufferMode){let e=new u;e.push(r);for(let t=0;t<this.args.length;++t){let r=this.args[t];r instanceof Buffer?0===r.length?e.push("$0\r\n\r\n"):(e.push("$"+r.length+"\r\n"),e.push(r),e.push("\r\n")):e.push("$"+Buffer.byteLength(r)+"\r\n"+r+"\r\n")}t=e.toBuffer()}else{t=r;for(let e=0;e<this.args.length;++e){let r=this.args[e];t+="$"+Buffer.byteLength(r)+"\r\n"+r+"\r\n"}}return t}stringifyArguments(){for(let e=0;e<this.args.length;++e){let t=this.args[e];"string"==typeof t||(t instanceof Buffer?this.bufferMode=!0:this.args[e]=(0,a.toArg)(t))}}transformReply(e){this.replyEncoding&&(e=(0,a.convertBufferToString)(e,this.replyEncoding));let t=l._transformer.reply[this.name];return t&&(e=t(e)),e}setTimeout(e){this._commandTimeoutTimer||(this._commandTimeoutTimer=setTimeout(()=>{this.isResolved||this.reject(Error("Command timed out"))},e))}setBlockingTimeout(e){if(e<=0)return;this._blockingTimeoutTimer&&(clearTimeout(this._blockingTimeoutTimer),this._blockingTimeoutTimer=void 0);let t=Date.now();void 0===this._blockingDeadline&&(this._blockingDeadline=t+e);let r=this._blockingDeadline-t;if(r<=0){this.resolve(null);return}this._blockingTimeoutTimer=setTimeout(()=>{if(this.isResolved){this._blockingTimeoutTimer=void 0;return}this._blockingTimeoutTimer=void 0,this.resolve(null)},r)}extractBlockingTimeout(){let e=this.args;if(!e||0===e.length)return;let t=this.name.toLowerCase();return l.checkFlag("LAST_ARG_TIMEOUT_COMMANDS",t)?(0,o.parseSecondsArgument)(e[e.length-1]):l.checkFlag("FIRST_ARG_TIMEOUT_COMMANDS",t)?(0,o.parseSecondsArgument)(e[0]):l.checkFlag("BLOCK_OPTION_COMMANDS",t)?(0,o.parseBlockOption)(e):void 0}_clearTimers(){let e=this._commandTimeoutTimer;e&&(clearTimeout(e),delete this._commandTimeoutTimer);let t=this._blockingTimeoutTimer;t&&(clearTimeout(t),delete this._blockingTimeoutTimer)}initPromise(){let e=new Promise((e,t)=>{if(!this.transformed){this.transformed=!0;let e=l._transformer.argument[this.name];e&&(this.args=e(this.args)),this.stringifyArguments()}this.resolve=this._convertValue(e),this.reject=e=>{this._clearTimers(),this.errorStack?t((0,a.optimizeErrorStack)(e,this.errorStack.stack,__dirname)):t(e)}});this.promise=(0,s.default)(e,this.callback)}_iterateKeys(e=e=>e){if(void 0===this.keys&&(this.keys=[],(0,i.exists)(this.name,{caseInsensitive:!0})))for(let t of(0,i.getKeyIndexes)(this.name,this.args,{nameCaseInsensitive:!0}))this.args[t]=e(this.args[t]),this.keys.push(this.args[t]);return this.keys}_convertValue(e){return t=>{try{this._clearTimers(),e(this.transformReply(t)),this.isResolved=!0}catch(e){this.reject(e)}return this.promise}}}t.default=l,l.FLAGS={VALID_IN_SUBSCRIBER_MODE:["subscribe","psubscribe","unsubscribe","punsubscribe","ssubscribe","sunsubscribe","ping","quit"],VALID_IN_MONITOR_MODE:["monitor","auth"],ENTER_SUBSCRIBER_MODE:["subscribe","psubscribe","ssubscribe"],EXIT_SUBSCRIBER_MODE:["unsubscribe","punsubscribe","sunsubscribe"],WILL_DISCONNECT:["quit"],HANDSHAKE_COMMANDS:["auth","select","client","readonly","info"],IGNORE_RECONNECT_ON_ERROR:["client"],BLOCKING_COMMANDS:["blpop","brpop","brpoplpush","blmove","bzpopmin","bzpopmax","bzmpop","blmpop","xread","xreadgroup"],LAST_ARG_TIMEOUT_COMMANDS:["blpop","brpop","brpoplpush","blmove","bzpopmin","bzpopmax"],FIRST_ARG_TIMEOUT_COMMANDS:["bzmpop","blmpop"],BLOCK_OPTION_COMMANDS:["xread","xreadgroup"]},l._transformer={argument:{},reply:{}};let d=function(e){if(1===e.length){if(e[0]instanceof Map)return(0,a.convertMapToArray)(e[0]);if("object"==typeof e[0]&&null!==e[0])return(0,a.convertObjectToArray)(e[0])}return e},c=function(e){if(2===e.length){if(e[1]instanceof Map)return[e[0]].concat((0,a.convertMapToArray)(e[1]));if("object"==typeof e[1]&&null!==e[1])return[e[0]].concat((0,a.convertObjectToArray)(e[1]))}return e};l.setArgumentTransformer("mset",d),l.setArgumentTransformer("msetnx",d),l.setArgumentTransformer("hset",c),l.setArgumentTransformer("hmset",c),l.setReplyTransformer("hgetall",function(e){if(Array.isArray(e)){let t={};for(let r=0;r<e.length;r+=2){let i=e[r],n=e[r+1];i in t?Object.defineProperty(t,i,{value:n,configurable:!0,enumerable:!0,writable:!0}):t[i]=n}return t}return e});class u{constructor(){this.length=0,this.items=[]}push(e){this.length+=Buffer.byteLength(e),this.items.push(e)}toBuffer(){let e=Buffer.allocUnsafe(this.length),t=0;for(let r of this.items){let i=Buffer.byteLength(r);Buffer.isBuffer(r)?r.copy(e,t):e.write(r,t,i),t+=i}return e}}},39830:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(12986),n=r(13505),s=r(37898),a=r(6017),o=(0,n.Debug)("dataHandler");class l{constructor(e,t){this.redis=e;let r=new s({stringNumbers:t.stringNumbers,returnBuffers:!0,returnError:e=>{this.returnError(e)},returnFatalError:e=>{this.returnFatalError(e)},returnReply:e=>{this.returnReply(e)}});e.stream.prependListener("data",e=>{r.execute(e)}),e.stream.resume()}returnFatalError(e){e.message+=". Please report this.",this.redis.recoverFromFatalError(e,e,{offlineQueue:!1})}returnError(e){let t=this.shiftCommand(e);if(t){if(e.command={name:t.command.name,args:t.command.args},"ssubscribe"==t.command.name&&e.message.includes("MOVED")){this.redis.emit("moved");return}this.redis.handleReconnection(e,t)}}returnReply(e){if(this.handleMonitorReply(e)||this.handleSubscriberReply(e))return;let t=this.shiftCommand(e);t&&(i.default.checkFlag("ENTER_SUBSCRIBER_MODE",t.command.name)?(this.redis.condition.subscriber=new a.default,this.redis.condition.subscriber.add(t.command.name,e[1].toString()),c(t.command,e[2])||this.redis.commandQueue.unshift(t)):i.default.checkFlag("EXIT_SUBSCRIBER_MODE",t.command.name)?u(t.command,e[2])||this.redis.commandQueue.unshift(t):t.command.resolve(e))}handleSubscriberReply(e){if(!this.redis.condition.subscriber)return!1;let t=Array.isArray(e)?e[0].toString():null;switch(o('receive reply "%s" in subscriber mode',t),t){case"message":this.redis.listeners("message").length>0&&this.redis.emit("message",e[1].toString(),e[2]?e[2].toString():""),this.redis.emit("messageBuffer",e[1],e[2]);break;case"pmessage":{let t=e[1].toString();this.redis.listeners("pmessage").length>0&&this.redis.emit("pmessage",t,e[2].toString(),e[3].toString()),this.redis.emit("pmessageBuffer",t,e[2],e[3]);break}case"smessage":this.redis.listeners("smessage").length>0&&this.redis.emit("smessage",e[1].toString(),e[2]?e[2].toString():""),this.redis.emit("smessageBuffer",e[1],e[2]);break;case"ssubscribe":case"subscribe":case"psubscribe":{let r=e[1].toString();this.redis.condition.subscriber.add(t,r);let i=this.shiftCommand(e);if(!i)return;c(i.command,e[2])||this.redis.commandQueue.unshift(i);break}case"sunsubscribe":case"unsubscribe":case"punsubscribe":{let r=e[1]?e[1].toString():null;r&&this.redis.condition.subscriber.del(t,r);let i=e[2];0===Number(i)&&(this.redis.condition.subscriber=!1);let n=this.shiftCommand(e);if(!n)return;u(n.command,i)||this.redis.commandQueue.unshift(n);break}default:{let t=this.shiftCommand(e);if(!t)return;t.command.resolve(e)}}return!0}handleMonitorReply(e){if("monitoring"!==this.redis.status)return!1;let t=e.toString();if("OK"===t)return!1;let r=t.indexOf(" "),i=t.slice(0,r),n=t.indexOf('"'),s=t.slice(n+1,-1).split('" "').map(e=>e.replace(/\\"/g,'"')),a=t.slice(r+2,n-2).split(" ");return this.redis.emit("monitor",i,s,a[1],a[0]),!0}shiftCommand(e){let t=this.redis.commandQueue.shift();if(!t){let t=Error("Command queue state error. If you can reproduce this, please report it."+(e instanceof Error?` Last error: ${e.message}`:` Last reply: ${e.toString()}`));return this.redis.emit("error",t),null}return t}}t.default=l;let d=new WeakMap;function c(e,t){let r=d.has(e)?d.get(e):e.args.length;return(r-=1)<=0?(e.resolve(t),d.delete(e),!0):(d.set(e,r),!1)}function u(e,t){let r=d.has(e)?d.get(e):e.args.length;return 0===r?0===Number(t)&&(d.delete(e),e.resolve(t),!0):(r-=1)<=0?(e.resolve(t),!0):(d.set(e,r),!1)}},15950:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(74358),n=r(22205),s=r(83499),a=r(73837),o=r(12986),l=r(13505),d=r(52430);class c extends d.default{constructor(e){super(),this.redis=e,this.isPipeline=!0,this.replyPending=0,this._queue=[],this._result=[],this._transactions=0,this._shaToScript={},this.isCluster="Cluster"===this.redis.constructor.name||this.redis.isCluster,this.options=e.options,Object.keys(e.scriptsSet).forEach(t=>{let r=e.scriptsSet[t];this._shaToScript[r.sha]=r,this[t]=e[t],this[t+"Buffer"]=e[t+"Buffer"]}),e.addedBuiltinSet.forEach(t=>{this[t]=e[t],this[t+"Buffer"]=e[t+"Buffer"]}),this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t});let t=this;Object.defineProperty(this,"length",{get:function(){return t._queue.length}})}fillResult(e,t){if("exec"===this._queue[t].name&&Array.isArray(e[1])){let r=e[1].length;for(let i=0;i<r;i++){if(e[1][i]instanceof Error)continue;let n=this._queue[t-(r-i)];try{e[1][i]=n.transformReply(e[1][i])}catch(t){e[1][i]=t}}}if(this._result[t]=e,--this.replyPending)return;if(this.isCluster){let e,t=!0;for(let r=0;r<this._result.length;++r){let i=this._result[r][0],s=this._queue[r];if(i){if("exec"===s.name&&"EXECABORT Transaction discarded because of previous errors."===i.message)continue;if(e){if(e.name!==i.name||e.message!==i.message){t=!1;break}}else e={name:i.name,message:i.message}}else if(!s.inTransaction&&!((0,n.exists)(s.name,{caseInsensitive:!0})&&(0,n.hasFlag)(s.name,"readonly",{nameCaseInsensitive:!0}))){t=!1;break}}if(e&&t){let t=this,r=e.message.split(" "),i=this._queue,n=!1;this._queue=[];for(let e=0;e<i.length;++e){if("ASK"===r[0]&&!n&&"asking"!==i[e].name&&(!i[e-1]||"asking"!==i[e-1].name)){let e=new o.default("asking");e.ignore=!0,this.sendCommand(e)}i[e].initPromise(),this.sendCommand(i[e]),n=i[e].inTransaction}let s=!0;void 0===this.leftRedirections&&(this.leftRedirections={});let a=function(){t.exec()},l=this.redis;if(l.handleError(e,this.leftRedirections,{moved:function(e,i){t.preferKey=i,l.slots[r[1]]?l.slots[r[1]][0]!==i&&(l.slots[r[1]]=[i]):l.slots[r[1]]=[i],l._groupsBySlot[r[1]]=l._groupsIds[l.slots[r[1]].join(";")],l.refreshSlotsCache(),t.exec()},ask:function(e,r){t.preferKey=r,t.exec()},tryagain:a,clusterDown:a,connectionClosed:a,maxRedirections:()=>{s=!1},defaults:()=>{s=!1}}),s)return}}let r=0;for(let e=0;e<this._queue.length-r;++e)this._queue[e+r].ignore&&(r+=1),this._result[e]=this._result[e+r];this.resolve(this._result.slice(0,this._result.length-r))}sendCommand(e){this._transactions>0&&(e.inTransaction=!0);let t=this._queue.length;return e.pipelineIndex=t,e.promise.then(e=>{this.fillResult([null,e],t)}).catch(e=>{this.fillResult([e],t)}),this._queue.push(e),this}addBatch(e){let t,r,i;for(let n=0;n<e.length;++n)r=(t=e[n])[0],i=t.slice(1),this[r].apply(this,i);return this}}t.default=c;let u=c.prototype.multi;c.prototype.multi=function(){return this._transactions+=1,u.apply(this,arguments)};let p=c.prototype.execBuffer;c.prototype.execBuffer=(0,a.deprecate)(function(){return this._transactions>0&&(this._transactions-=1),p.apply(this,arguments)},"Pipeline#execBuffer: Use Pipeline#exec instead"),c.prototype.exec=function(e){let t;if(this.isCluster&&!this.redis.slots.length)return"wait"===this.redis.status&&this.redis.connect().catch(l.noop),e&&!this.nodeifiedPromise&&(this.nodeifiedPromise=!0,(0,s.default)(this.promise,e)),this.redis.delayUntilReady(t=>{if(t){this.reject(t);return}this.exec(e)}),this.promise;if(this._transactions>0)return this._transactions-=1,p.apply(this,arguments);if(this.nodeifiedPromise||(this.nodeifiedPromise=!0,(0,s.default)(this.promise,e)),this._queue.length||this.resolve([]),this.isCluster){let e=[];for(let t=0;t<this._queue.length;t++){let r=this._queue[t].getKeys();if(r.length&&e.push(r[0]),r.length&&0>i.generateMulti(r))return this.reject(Error("All the keys in a pipeline command should belong to the same slot")),this.promise}if(e.length){if((t=function(e,t){let r=i(t[0]),n=e._groupsBySlot[r];for(let r=1;r<t.length;r++)if(e._groupsBySlot[i(t[r])]!==n)return -1;return r}(this.redis,e))<0)return this.reject(Error("All keys in the pipeline should belong to the same slots allocation group")),this.promise}else t=16384*Math.random()|0}let r=this;return function(){let e,i,n=r.replyPending=r._queue.length;r.isCluster&&(e={slot:t,redis:r.redis.connectionPool.nodes.all[r.preferKey]});let s="",a={isPipeline:!0,destination:r.isCluster?e:{redis:r.redis},write(e){"string"!=typeof e?(i||(i=[]),s&&(i.push(Buffer.from(s,"utf8")),s=""),i.push(e)):s+=e,--n||(i?(s&&i.push(Buffer.from(s,"utf8")),a.destination.redis.stream.write(Buffer.concat(i))):a.destination.redis.stream.write(s),n=r._queue.length,s="",i=void 0)}};for(let t=0;t<r._queue.length;++t)r.redis.sendCommand(r._queue[t],a,e);r.promise}(),this.promise}},90855:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(22205),n=r(82361),s=r(83499),a=r(42056),o=r(12986),l=r(30834),d=r(12902),c=r(75890),u=r(76439),p=r(44e3),h=r(76383),y=r(13505),m=r(63260),f=r(52430),b=r(86641),g=r(35561),S=(0,y.Debug)("redis");class v extends f.default{constructor(e,t,r){if(super(),this.status="wait",this.isCluster=!1,this.reconnectTimeout=null,this.connectionEpoch=0,this.retryAttempts=0,this.manuallyClosing=!1,this._autoPipelines=new Map,this._runningAutoPipelines=new Set,this.parseOptions(e,t,r),n.EventEmitter.call(this),this.resetCommandQueue(),this.resetOfflineQueue(),this.options.Connector)this.connector=new this.options.Connector(this.options);else if(this.options.sentinels){let e=new d.default(this.options);e.emitter=this,this.connector=e}else this.connector=new l.StandaloneConnector(this.options);this.options.scripts&&Object.entries(this.options.scripts).forEach(([e,t])=>{this.defineCommand(e,t)}),this.options.lazyConnect?this.setStatus("wait"):this.connect().catch(b.noop)}static createClient(...e){return new v(...e)}get autoPipelineQueueSize(){let e=0;for(let t of this._autoPipelines.values())e+=t.length;return e}connect(e){let t=new Promise((e,t)=>{if("connecting"===this.status||"connect"===this.status||"ready"===this.status){t(Error("Redis is already connecting/connected"));return}this.connectionEpoch+=1,this.setStatus("connecting");let{options:r}=this;this.condition={select:r.db,auth:r.username?[r.username,r.password]:r.password,subscriber:!1};let i=this;(0,s.default)(this.connector.connect(function(e,t){i.silentEmit(e,t)}),function(n,s){if(n){i.flushQueue(n),i.silentEmit("error",n),t(n),i.setStatus("end");return}let a=r.tls?"secureConnect":"connect";if("sentinels"in r&&r.sentinels&&!r.enableTLSForSentinelMode&&(a="connect"),i.stream=s,r.noDelay&&s.setNoDelay(!0),"number"==typeof r.keepAlive&&(s.connecting?s.once(a,()=>{s.setKeepAlive(!0,r.keepAlive)}):s.setKeepAlive(!0,r.keepAlive)),s.connecting){if(s.once(a,c.connectHandler(i)),r.connectTimeout){let e=!1;s.setTimeout(r.connectTimeout,function(){if(e)return;s.setTimeout(0),s.destroy();let t=Error("connect ETIMEDOUT");t.errorno="ETIMEDOUT",t.code="ETIMEDOUT",t.syscall="connect",c.errorHandler(i)(t)}),s.once(a,function(){e=!0,s.setTimeout(0)})}}else if(s.destroyed){let e=i.connector.firstError;e&&process.nextTick(()=>{c.errorHandler(i)(e)}),process.nextTick(c.closeHandler(i))}else process.nextTick(c.connectHandler(i));s.destroyed||(s.once("error",c.errorHandler(i)),s.once("close",c.closeHandler(i)));let o=function(){i.removeListener("close",l),e()};var l=function(){i.removeListener("ready",o),t(Error(y.CONNECTION_CLOSED_ERROR_MSG))};i.once("ready",o),i.once("close",l)})});return(0,s.default)(t,e)}disconnect(e=!1){e||(this.manuallyClosing=!0),this.reconnectTimeout&&!e&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),"wait"===this.status?c.closeHandler(this)():this.connector.disconnect()}end(){this.disconnect()}duplicate(e){return new v({...this.options,...e})}get mode(){var e;return this.options.monitor?"monitor":(null===(e=this.condition)||void 0===e?void 0:e.subscriber)?"subscriber":"normal"}monitor(e){let t=this.duplicate({monitor:!0,lazyConnect:!1});return(0,s.default)(new Promise(function(e,r){t.once("error",r),t.once("monitoring",function(){e(t)})}),e)}sendCommand(e,t){var r,n;if("wait"===this.status&&this.connect().catch(b.noop),"end"===this.status)return e.reject(Error(y.CONNECTION_CLOSED_ERROR_MSG)),e.promise;if((null===(r=this.condition)||void 0===r?void 0:r.subscriber)&&!o.default.checkFlag("VALID_IN_SUBSCRIBER_MODE",e.name))return e.reject(Error("Connection in subscriber mode, only subscriber commands may be used")),e.promise;"number"==typeof this.options.commandTimeout&&e.setTimeout(this.options.commandTimeout);let s=this.getBlockingTimeoutInMs(e),a="ready"===this.status||!t&&"connect"===this.status&&(0,i.exists)(e.name,{caseInsensitive:!0})&&((0,i.hasFlag)(e.name,"loading",{nameCaseInsensitive:!0})||o.default.checkFlag("HANDSHAKE_COMMANDS",e.name));if(this.stream&&this.stream.writable?this.stream._writableState&&this.stream._writableState.ended&&(a=!1):a=!1,a)S.enabled&&S("write command[%s]: %d -> %s(%o)",this._getDescription(),null===(n=this.condition)||void 0===n?void 0:n.select,e.name,e.args),t?"isPipeline"in t&&t.isPipeline?t.write(e.toWritable(t.destination.redis.stream)):t.write(e.toWritable(t)):this.stream.write(e.toWritable(this.stream)),this.commandQueue.push({command:e,stream:t,select:this.condition.select}),void 0!==s&&e.setBlockingTimeout(s),o.default.checkFlag("WILL_DISCONNECT",e.name)&&(this.manuallyClosing=!0),void 0!==this.options.socketTimeout&&void 0===this.socketTimeoutTimer&&this.setSocketTimeout();else{if(!this.options.enableOfflineQueue)return e.reject(Error("Stream isn't writeable and enableOfflineQueue options is false")),e.promise;if("quit"===e.name&&0===this.offlineQueue.length)return this.disconnect(),e.resolve(Buffer.from("OK")),e.promise;if(S.enabled&&S("queue command[%s]: %d -> %s(%o)",this._getDescription(),this.condition.select,e.name,e.args),this.offlineQueue.push({command:e,stream:t,select:this.condition.select}),o.default.checkFlag("BLOCKING_COMMANDS",e.name)){let t=this.getConfiguredBlockingTimeout();void 0!==t&&e.setBlockingTimeout(t)}}if("select"===e.name&&(0,y.isInt)(e.args[0])){let t=parseInt(e.args[0],10);this.condition.select!==t&&(this.condition.select=t,this.emit("select",t),S("switch to db [%d]",this.condition.select))}return e.promise}getBlockingTimeoutInMs(e){var t;if(!o.default.checkFlag("BLOCKING_COMMANDS",e.name))return;let r=this.getConfiguredBlockingTimeout();if(void 0===r)return;let i=e.extractBlockingTimeout();return"number"==typeof i?i>0?i+(null!==(t=this.options.blockingTimeoutGrace)&&void 0!==t?t:u.DEFAULT_REDIS_OPTIONS.blockingTimeoutGrace):r:null===i?r:void 0}getConfiguredBlockingTimeout(){if("number"==typeof this.options.blockingTimeout&&this.options.blockingTimeout>0)return this.options.blockingTimeout}setSocketTimeout(){this.socketTimeoutTimer=setTimeout(()=>{this.stream.destroy(Error(`Socket timeout. Expecting data, but didn't receive any in ${this.options.socketTimeout}ms.`)),this.socketTimeoutTimer=void 0},this.options.socketTimeout),this.stream.once("data",()=>{clearTimeout(this.socketTimeoutTimer),this.socketTimeoutTimer=void 0,0!==this.commandQueue.length&&this.setSocketTimeout()})}scanStream(e){return this.createScanStream("scan",{options:e})}scanBufferStream(e){return this.createScanStream("scanBuffer",{options:e})}sscanStream(e,t){return this.createScanStream("sscan",{key:e,options:t})}sscanBufferStream(e,t){return this.createScanStream("sscanBuffer",{key:e,options:t})}hscanStream(e,t){return this.createScanStream("hscan",{key:e,options:t})}hscanBufferStream(e,t){return this.createScanStream("hscanBuffer",{key:e,options:t})}zscanStream(e,t){return this.createScanStream("zscan",{key:e,options:t})}zscanBufferStream(e,t){return this.createScanStream("zscanBuffer",{key:e,options:t})}silentEmit(e,t){let r;return"error"===e&&(r=t,"end"===this.status||this.manuallyClosing&&r instanceof Error&&(r.message===y.CONNECTION_CLOSED_ERROR_MSG||"connect"===r.syscall||"read"===r.syscall))?void 0:this.listeners(e).length>0?this.emit.apply(this,arguments):(r&&r instanceof Error&&console.error("[ioredis] Unhandled error event:",r.stack),!1)}recoverFromFatalError(e,t,r){this.flushQueue(t,r),this.silentEmit("error",t),this.disconnect(!0)}handleReconnection(e,t){var r;let i=!1;switch(this.options.reconnectOnError&&!o.default.checkFlag("IGNORE_RECONNECT_ON_ERROR",t.command.name)&&(i=this.options.reconnectOnError(e)),i){case 1:case!0:"reconnecting"!==this.status&&this.disconnect(!0),t.command.reject(e);break;case 2:"reconnecting"!==this.status&&this.disconnect(!0),(null===(r=this.condition)||void 0===r?void 0:r.select)!==t.select&&"select"!==t.command.name&&this.select(t.select),this.sendCommand(t.command);break;default:t.command.reject(e)}}_getDescription(){let e;return e="path"in this.options&&this.options.path?this.options.path:this.stream&&this.stream.remoteAddress&&this.stream.remotePort?this.stream.remoteAddress+":"+this.stream.remotePort:"host"in this.options&&this.options.host?this.options.host+":"+this.options.port:"",this.options.connectionName&&(e+=` (${this.options.connectionName})`),e}resetCommandQueue(){this.commandQueue=new g}resetOfflineQueue(){this.offlineQueue=new g}parseOptions(...e){let t={},r=!1;for(let i=0;i<e.length;++i){let n=e[i];if(null!=n){if("object"==typeof n)(0,b.defaults)(t,n);else if("string"==typeof n)(0,b.defaults)(t,(0,y.parseURL)(n)),n.startsWith("rediss://")&&(r=!0);else if("number"==typeof n)t.port=n;else throw Error("Invalid argument "+n)}}r&&(0,b.defaults)(t,{tls:!0}),(0,b.defaults)(t,v.defaultOptions),"string"==typeof t.port&&(t.port=parseInt(t.port,10)),"string"==typeof t.db&&(t.db=parseInt(t.db,10)),this.options=(0,y.resolveTLSProfile)(t)}setStatus(e,t){S.enabled&&S("status[%s]: %s -> %s",this._getDescription(),this.status||"[empty]",e),this.status=e,process.nextTick(this.emit.bind(this,e,t))}createScanStream(e,{key:t,options:r={}}){return new p.default({objectMode:!0,key:t,redis:this,command:e,...r})}flushQueue(e,t){let r;if((t=(0,b.defaults)({},t,{offlineQueue:!0,commandQueue:!0})).offlineQueue)for(;r=this.offlineQueue.shift();)r.command.reject(e);if(t.commandQueue&&this.commandQueue.length>0)for(this.stream&&this.stream.removeAllListeners("data");r=this.commandQueue.shift();)r.command.reject(e)}_readyCheck(e){let t=this;this.info(function(r,i){if(r)return r.message&&r.message.includes("NOPERM")?(console.warn(`Skipping the ready check because INFO command fails: "${r.message}". You can disable ready check with "enableReadyCheck". More: https://github.com/luin/ioredis/wiki/Disable-ready-check.`),e(null,{})):e(r);if("string"!=typeof i)return e(null,i);let n={},s=i.split("\r\n");for(let e=0;e<s.length;++e){let[t,...r]=s[e].split(":"),i=r.join(":");i&&(n[t]=i)}if(n.loading&&"0"!==n.loading){let r=1e3*(n.loading_eta_seconds||1),i=t.options.maxLoadingRetryTime&&t.options.maxLoadingRetryTime<r?t.options.maxLoadingRetryTime:r;S("Redis server still loading, trying again in "+i+"ms"),setTimeout(function(){t._readyCheck(e)},i)}else e(null,n)}).catch(b.noop)}}v.Cluster=a.default,v.Command=o.default,v.defaultOptions=u.DEFAULT_REDIS_OPTIONS,(0,m.default)(v,n.EventEmitter),(0,h.addTransactionSupport)(v.prototype),t.default=v},44e3:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(12781);class n extends i.Readable{constructor(e){super(e),this.opt=e,this._redisCursor="0",this._redisDrained=!1}_read(){if(this._redisDrained){this.push(null);return}let e=[this._redisCursor];this.opt.key&&e.unshift(this.opt.key),this.opt.match&&e.push("MATCH",this.opt.match),this.opt.type&&e.push("TYPE",this.opt.type),this.opt.count&&e.push("COUNT",String(this.opt.count)),this.opt.noValues&&e.push("NOVALUES"),this.opt.redis[this.opt.command](e,(e,t)=>{if(e){this.emit("error",e);return}this._redisCursor=t[0]instanceof Buffer?t[0].toString():t[0],"0"===this._redisCursor&&(this._redisDrained=!0),this.push(t[1])})}close(){this._redisDrained=!0}}t.default=n},55600:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(6113),n=r(12986),s=r(83499);class a{constructor(e,t=null,r="",s=!1){this.lua=e,this.numberOfKeys=t,this.keyPrefix=r,this.readOnly=s,this.sha=(0,i.createHash)("sha1").update(e).digest("hex");let a=this.sha,o=new WeakSet;this.Command=class extends n.default{toWritable(t){let r=this.reject;return this.reject=e=>{-1!==e.message.indexOf("NOSCRIPT")&&o.delete(t),r.call(this,e)},o.has(t)?"eval"===this.name&&(this.name="evalsha",this.args[0]=a):(o.add(t),this.name="eval",this.args[0]=e),super.toWritable(t)}}}execute(e,t,r,i){"number"==typeof this.numberOfKeys&&t.unshift(this.numberOfKeys),this.keyPrefix&&(r.keyPrefix=this.keyPrefix),this.readOnly&&(r.readOnly=!0);let n=new this.Command("evalsha",[this.sha,...t],r);return n.promise=n.promise.catch(i=>{if(-1===i.message.indexOf("NOSCRIPT"))throw i;let n=new this.Command("evalsha",[this.sha,...t],r);return(e.isPipeline?e.redis:e).sendCommand(n)}),(0,s.default)(n.promise,i),e.sendCommand(n)}}t.default=a},6017:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(){this.set={subscribe:{},psubscribe:{},ssubscribe:{}}}add(e,t){this.set[i(e)][t]=!0}del(e,t){delete this.set[i(e)][t]}channels(e){return Object.keys(this.set[i(e)])}isEmpty(){return 0===this.channels("subscribe").length&&0===this.channels("psubscribe").length&&0===this.channels("ssubscribe").length}}function i(e){return"unsubscribe"===e?"subscribe":"punsubscribe"===e?"psubscribe":"sunsubscribe"===e?"ssubscribe":e}t.default=r},77346:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.executeWithAutoPipelining=t.getFirstValueInFlattenedArray=t.shouldUseAutoPipelining=t.notAllowedAutoPipelineCommands=t.kCallbacks=t.kExec=void 0;let i=r(86641),n=r(74358),s=r(83499),a=r(22205);function o(e){for(let t=0;t<e.length;t++){let r=e[t];if("string"==typeof r)return r;if(Array.isArray(r)||(0,i.isArguments)(r)){if(0===r.length)continue;return r[0]}let n=[r].flat();if(n.length>0)return n[0]}}t.kExec=Symbol("exec"),t.kCallbacks=Symbol("callbacks"),t.notAllowedAutoPipelineCommands=["auth","info","script","quit","cluster","pipeline","multi","subscribe","psubscribe","unsubscribe","unpsubscribe","select","client"],t.shouldUseAutoPipelining=function(e,r,i){return r&&e.options.enableAutoPipelining&&!e.isPipeline&&!t.notAllowedAutoPipelineCommands.includes(i)&&!e.options.autoPipeliningIgnoredCommands.includes(i)},t.getFirstValueInFlattenedArray=o,t.executeWithAutoPipelining=function e(r,l,d,c,u){if(r.isCluster&&!r.slots.length)return"wait"===r.status&&r.connect().catch(i.noop),(0,s.default)(new Promise(function(t,i){r.delayUntilReady(n=>{if(n){i(n);return}e(r,l,d,c,null).then(t,i)})}),u);let p=r.options.keyPrefix||"",h=r.isCluster?r.slots[n(`${p}${o(c)}`)].join(","):"main";if(r.isCluster&&"master"!==r.options.scaleReads&&(h+=(0,a.exists)(d)&&(0,a.hasFlag)(d,"readonly")?":read":":write"),!r._autoPipelines.has(h)){let e=r.pipeline();e[t.kExec]=!1,e[t.kCallbacks]=[],r._autoPipelines.set(h,e)}let y=r._autoPipelines.get(h);y[t.kExec]||(y[t.kExec]=!0,setImmediate(function e(r,i){if(r._runningAutoPipelines.has(i)||!r._autoPipelines.has(i))return;r._runningAutoPipelines.add(i);let n=r._autoPipelines.get(i);r._autoPipelines.delete(i);let s=n[t.kCallbacks];n[t.kCallbacks]=null,n.exec(function(t,n){if(r._runningAutoPipelines.delete(i),t)for(let e=0;e<s.length;e++)process.nextTick(s[e],t);else for(let e=0;e<s.length;e++)process.nextTick(s[e],...n[e]);r._autoPipelines.has(i)&&e(r,i)})},r,h));let m=new Promise(function(e,r){y[t.kCallbacks].push(function(t,i){if(t){r(t);return}e(i)}),"call"===l&&c.unshift(d),y[l](...c)});return(0,s.default)(m,u)}},62796:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_CLUSTER_OPTIONS=void 0;let i=r(9523);t.DEFAULT_CLUSTER_OPTIONS={clusterRetryStrategy:e=>Math.min(100+2*e,2e3),enableOfflineQueue:!0,enableReadyCheck:!0,scaleReads:"master",maxRedirections:16,retryDelayOnMoved:0,retryDelayOnFailover:100,retryDelayOnClusterDown:100,retryDelayOnTryAgain:100,slotsRefreshTimeout:1e3,useSRVRecords:!1,resolveSrv:i.resolveSrv,dnsLookup:i.lookup,enableAutoPipelining:!1,autoPipeliningIgnoredCommands:[],shardedSubscribers:!1}},61413:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(68231),n=r(13505),s=r(90855),a=(0,n.Debug)("cluster:subscriber");class o{constructor(e,t,r=!1){this.connectionPool=e,this.emitter=t,this.isSharded=r,this.started=!1,this.subscriber=null,this.slotRange=[],this.onSubscriberEnd=()=>{if(!this.started){a("subscriber has disconnected, but ClusterSubscriber is not started, so not reconnecting.");return}a("subscriber has disconnected, selecting a new one..."),this.selectSubscriber()},this.connectionPool.on("-node",(e,t)=>{this.started&&this.subscriber&&(0,i.getNodeKey)(this.subscriber.options)===t&&(a("subscriber has left, selecting a new one..."),this.selectSubscriber())}),this.connectionPool.on("+node",()=>{this.started&&!this.subscriber&&(a("a new node is discovered and there is no subscriber, selecting a new one..."),this.selectSubscriber())})}getInstance(){return this.subscriber}associateSlotRange(e){return this.isSharded&&(this.slotRange=e),this.slotRange}start(){this.started=!0,this.selectSubscriber(),a("started")}stop(){this.started=!1,this.subscriber&&(this.subscriber.disconnect(),this.subscriber=null)}isStarted(){return this.started}selectSubscriber(){let e=this.lastActiveSubscriber;e&&(e.off("end",this.onSubscriberEnd),e.disconnect()),this.subscriber&&(this.subscriber.off("end",this.onSubscriberEnd),this.subscriber.disconnect());let t=(0,n.sample)(this.connectionPool.getNodes());if(!t){a("selecting subscriber failed since there is no node discovered in the cluster yet"),this.subscriber=null;return}let{options:r}=t;a("selected a subscriber %s:%s",r.host,r.port);let o="subscriber";this.isSharded&&(o="ssubscriber"),this.subscriber=new s.default({port:r.port,host:r.host,username:r.username,password:r.password,enableReadyCheck:!0,connectionName:(0,i.getConnectionName)(o,r.connectionName),lazyConnect:!0,tls:r.tls,retryStrategy:null}),this.subscriber.on("error",n.noop),this.subscriber.on("moved",()=>{this.emitter.emit("forceRefresh")}),this.subscriber.once("end",this.onSubscriberEnd);let l={subscribe:[],psubscribe:[],ssubscribe:[]};if(e){let t=e.condition||e.prevCondition;t&&t.subscriber&&(l.subscribe=t.subscriber.channels("subscribe"),l.psubscribe=t.subscriber.channels("psubscribe"),l.ssubscribe=t.subscriber.channels("ssubscribe"))}if(l.subscribe.length||l.psubscribe.length||l.ssubscribe.length){let e=0;for(let t of["subscribe","psubscribe","ssubscribe"]){let r=l[t];if(0!=r.length){if(a("%s %d channels",t,r.length),"ssubscribe"===t)for(let i of r)e+=1,this.subscriber[t](i).then(()=>{--e||(this.lastActiveSubscriber=this.subscriber)}).catch(()=>{a("failed to ssubscribe to channel: %s",i)});else e+=1,this.subscriber[t](r).then(()=>{--e||(this.lastActiveSubscriber=this.subscriber)}).catch(()=>{a("failed to %s %d channels",t,r.length)})}}}else this.lastActiveSubscriber=this.subscriber;for(let e of["message","messageBuffer"])this.subscriber.on(e,(t,r)=>{this.emitter.emit(e,t,r)});for(let e of["pmessage","pmessageBuffer"])this.subscriber.on(e,(t,r,i)=>{this.emitter.emit(e,t,r,i)});if(!0==this.isSharded)for(let e of["smessage","smessageBuffer"])this.subscriber.on(e,(t,r)=>{this.emitter.emit(e,t,r)})}}t.default=o},64112:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(13505),n=r(68231),s=r(74358),a=r(81352),o=(0,i.Debug)("cluster:subscriberGroup");class l{constructor(e,t){this.subscriberGroupEmitter=e,this.options=t,this.shardedSubscribers=new Map,this.clusterSlots=[],this.subscriberToSlotsIndex=new Map,this.channels=new Map,this.failedAttemptsByNode=new Map,this.isResetting=!1,this.pendingReset=null,this.handleSubscriberConnectFailed=(e,t)=>{let r=(this.failedAttemptsByNode.get(t)||0)+1;this.failedAttemptsByNode.set(t,r);let i=Math.min(r,l.MAX_RETRY_ATTEMPTS),n=Math.min(l.BASE_BACKOFF_MS*2**i,l.MAX_BACKOFF_MS),s=Math.max(0,n+Math.floor(.5*n*(Math.random()-.5)));o("Failed to connect subscriber for %s. Refreshing slots in %dms",t,s),this.subscriberGroupEmitter.emit("subscriberConnectFailed",{delay:s,error:e})},this.handleSubscriberConnectSucceeded=e=>{this.failedAttemptsByNode.delete(e)}}getResponsibleSubscriber(e){let t=this.clusterSlots[e][0],r=this.shardedSubscribers.get(t);return r&&"idle"===r.subscriberStatus&&r.start().then(()=>{this.handleSubscriberConnectSucceeded(r.getNodeKey())}).catch(e=>{this.handleSubscriberConnectFailed(e,r.getNodeKey())}),r}addChannels(e){let t=s(e[0]);for(let r of e)if(s(r)!==t)return -1;let r=this.channels.get(t);return r?this.channels.set(t,r.concat(e)):this.channels.set(t,e),Array.from(this.channels.values()).reduce((e,t)=>e+t.length,0)}removeChannels(e){let t=s(e[0]);for(let r of e)if(s(r)!==t)return -1;let r=this.channels.get(t);if(r){let i=r.filter(t=>!e.includes(t));this.channels.set(t,i)}return Array.from(this.channels.values()).reduce((e,t)=>e+t.length,0)}stop(){for(let e of this.shardedSubscribers.values())e.stop();this.pendingReset=null,this.shardedSubscribers.clear(),this.subscriberToSlotsIndex.clear()}start(){let e=[];for(let t of this.shardedSubscribers.values())this.shouldStartSubscriber(t)&&(e.push(t.start().then(()=>{this.handleSubscriberConnectSucceeded(t.getNodeKey())}).catch(e=>{this.handleSubscriberConnectFailed(e,t.getNodeKey())})),this.subscriberGroupEmitter.emit("+subscriber"));return Promise.all(e)}async reset(e,t){if(this.isResetting){this.pendingReset={slots:e,nodes:t};return}this.isResetting=!0;try{let r=this._refreshSlots(e),i=this.hasUnhealthySubscribers();if(!r&&!i){o("No topology change detected or failed subscribers. Skipping reset.");return}for(let[e,t]of this.shardedSubscribers){if(this.subscriberToSlotsIndex.has(e)&&t.isHealthy()){o("Skipping deleting subscriber for %s",e);continue}o("Removing subscriber for %s",e),t.stop(),this.shardedSubscribers.delete(e),this.subscriberGroupEmitter.emit("-subscriber")}let s=[];for(let[e,r]of this.subscriberToSlotsIndex){let r=this.shardedSubscribers.get(e);if(r&&r.isHealthy()){o("Skipping creating new subscriber for %s",e),!r.isStarted()&&this.shouldStartSubscriber(r)&&s.push(r.start().then(()=>{this.handleSubscriberConnectSucceeded(e)}).catch(t=>{this.handleSubscriberConnectFailed(t,e)}));continue}r&&!r.isHealthy()&&(o("Replacing subscriber for %s",e),r.stop(),this.shardedSubscribers.delete(e),this.subscriberGroupEmitter.emit("-subscriber")),o("Creating new subscriber for %s",e);let i=t.find(t=>(0,n.getNodeKey)(t.options)===e);if(!i){o("Failed to find node for key %s",e);continue}let l=new a.default(this.subscriberGroupEmitter,i.options,this.options.redisOptions);this.shardedSubscribers.set(e,l),this.shouldStartSubscriber(l)&&s.push(l.start().then(()=>{this.handleSubscriberConnectSucceeded(e)}).catch(t=>{this.handleSubscriberConnectFailed(t,e)})),this.subscriberGroupEmitter.emit("+subscriber")}await Promise.all(s),this._resubscribe(),this.subscriberGroupEmitter.emit("subscribersReady")}finally{if(this.isResetting=!1,this.pendingReset){let{slots:e,nodes:t}=this.pendingReset;this.pendingReset=null,await this.reset(e,t)}}}_refreshSlots(e){if(this._slotsAreEqual(e)&&this.subscriberToSlotsIndex.size>0)return o("Nothing to refresh because the new cluster map is equal to the previous one."),!1;o("Refreshing the slots of the subscriber group."),this.subscriberToSlotsIndex=new Map;for(let t=0;t<e.length;t++){let r=e[t][0];this.subscriberToSlotsIndex.has(r)||this.subscriberToSlotsIndex.set(r,[]),this.subscriberToSlotsIndex.get(r).push(Number(t))}return this.clusterSlots=JSON.parse(JSON.stringify(e)),!0}_resubscribe(){this.shardedSubscribers&&this.shardedSubscribers.forEach((e,t)=>{let r=this.subscriberToSlotsIndex.get(t);r&&r.forEach(r=>{let i=e.getInstance(),n=this.channels.get(r);if(n&&n.length>0){if(!i||"end"===i.status)return;"ready"===i.status?i.ssubscribe(...n).catch(e=>{o("Failed to ssubscribe on node %s: %s",t,e)}):i.once("ready",()=>{i.ssubscribe(...n).catch(e=>{o("Failed to ssubscribe on node %s: %s",t,e)})})}})})}_slotsAreEqual(e){return void 0!==this.clusterSlots&&JSON.stringify(this.clusterSlots)===JSON.stringify(e)}hasUnhealthySubscribers(){let e=Array.from(this.shardedSubscribers.values()).some(e=>!e.isHealthy()),t=Array.from(this.subscriberToSlotsIndex.keys()).some(e=>!this.shardedSubscribers.has(e));return e||t}shouldStartSubscriber(e){if(e.isStarted())return!1;if(!e.isLazyConnect())return!0;let t=this.subscriberToSlotsIndex.get(e.getNodeKey());return!!t&&t.some(e=>{let t=this.channels.get(e);return!!(t&&t.length>0)})}}t.default=l,l.MAX_RETRY_ATTEMPTS=10,l.MAX_BACKOFF_MS=2e3,l.BASE_BACKOFF_MS=100},52515:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(82361),n=r(13505),s=r(68231),a=r(90855),o=(0,n.Debug)("cluster:connectionPool");class l extends i.EventEmitter{constructor(e){super(),this.redisOptions=e,this.nodes={all:{},master:{},slave:{}},this.specifiedOptions={}}getNodes(e="all"){let t=this.nodes[e];return Object.keys(t).map(e=>t[e])}getInstanceByKey(e){return this.nodes.all[e]}getSampleInstance(e){let t=Object.keys(this.nodes[e]),r=(0,n.sample)(t);return this.nodes[e][r]}addMasterNode(e){let t=(0,s.getNodeKey)(e.options),r=this.createRedisFromOptions(e,e.options.readOnly);return!e.options.readOnly&&(this.nodes.all[t]=r,this.nodes.master[t]=r,!0)}createRedisFromOptions(e,t){return new a.default((0,n.defaults)({retryStrategy:null,enableOfflineQueue:!0,readOnly:t},e,this.redisOptions,{lazyConnect:!0}))}findOrCreate(e,t=!1){let r;let i=(0,s.getNodeKey)(e);return t=!!t,this.specifiedOptions[i]?Object.assign(e,this.specifiedOptions[i]):this.specifiedOptions[i]=e,this.nodes.all[i]?(r=this.nodes.all[i]).options.readOnly!==t&&(r.options.readOnly=t,o("Change role of %s to %s",i,t?"slave":"master"),r[t?"readonly":"readwrite"]().catch(n.noop),t?(delete this.nodes.master[i],this.nodes.slave[i]=r):(delete this.nodes.slave[i],this.nodes.master[i]=r)):(o("Connecting to %s as %s",i,t?"slave":"master"),r=this.createRedisFromOptions(e,t),this.nodes.all[i]=r,this.nodes[t?"slave":"master"][i]=r,r.once("end",()=>{this.removeNode(i),this.emit("-node",r,i),Object.keys(this.nodes.all).length||this.emit("drain")}),this.emit("+node",r,i),r.on("error",function(e){this.emit("nodeError",e,i)})),r}reset(e){o("Reset with %O",e);let t={};e.forEach(e=>{let r=(0,s.getNodeKey)(e);e.readOnly&&t[r]||(t[r]=e)}),Object.keys(this.nodes.all).forEach(e=>{t[e]||(o("Disconnect %s because the node does not hold any slot",e),this.nodes.all[e].disconnect(),this.removeNode(e))}),Object.keys(t).forEach(e=>{let r=t[e];this.findOrCreate(r,r.readOnly)})}removeNode(e){let{nodes:t}=this;t.all[e]&&(o("Remove %s from the pool",e),delete t.all[e]),delete t.master[e],delete t.slave[e]}}t.default=l},84546:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(13505),n=r(35561),s=(0,i.Debug)("delayqueue");class a{constructor(){this.queues={},this.timeouts={}}push(e,t,r){let i=r.callback||process.nextTick;this.queues[e]||(this.queues[e]=new n),this.queues[e].push(t),this.timeouts[e]||(this.timeouts[e]=setTimeout(()=>{i(()=>{this.timeouts[e]=null,this.execute(e)})},r.timeout))}execute(e){let t=this.queues[e];if(!t)return;let{length:r}=t;if(r)for(s("send %d commands in %s queue",r,e),this.queues[e]=null;t.length>0;)t.shift()()}}t.default=a},81352:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(68231),n=r(13505),s=r(90855),a=(0,n.Debug)("cluster:subscriberGroup:shardedSubscriber"),o={IDLE:"idle",STARTING:"starting",CONNECTED:"connected",STOPPING:"stopping",ENDED:"ended"},l={[o.IDLE]:[o.STARTING,o.STOPPING,o.ENDED],[o.STARTING]:[o.CONNECTED,o.STOPPING,o.ENDED],[o.CONNECTED]:[o.STOPPING,o.ENDED],[o.STOPPING]:[o.ENDED],[o.ENDED]:[]};class d{constructor(e,t,r){var a;for(let l of(this.emitter=e,this.status=o.IDLE,this.instance=null,this.connectPromise=null,this.messageListeners=new Map,this.onEnd=()=>{this.updateStatus(o.ENDED),this.emitter.emit("-node",this.instance,this.nodeKey)},this.onError=e=>{this.emitter.emit("nodeError",e,this.nodeKey)},this.onMoved=()=>{this.emitter.emit("moved")},this.instance=new s.default((0,n.defaults)({enableReadyCheck:!1,enableOfflineQueue:!0,connectionName:(0,i.getConnectionName)("ssubscriber",t.connectionName),retryStrategy:null,lazyConnect:!0},t,r)),this.lazyConnect=null===(a=null==r?void 0:r.lazyConnect)||void 0===a||a,this.nodeKey=(0,i.getNodeKey)(t),this.instance.on("end",this.onEnd),this.instance.on("error",this.onError),this.instance.on("moved",this.onMoved),["smessage","smessageBuffer"])){let e=(...e)=>{this.emitter.emit(l,...e)};this.messageListeners.set(l,e),this.instance.on(l,e)}}async start(){if(this.connectPromise)return this.connectPromise;if(this.status!==o.STARTING&&this.status!==o.CONNECTED){if(this.status===o.ENDED||!this.instance)throw Error(`Sharded subscriber ${this.nodeKey} cannot be restarted once ended.`);this.updateStatus(o.STARTING),this.connectPromise=this.instance.connect();try{await this.connectPromise,this.updateStatus(o.CONNECTED)}catch(e){throw this.updateStatus(o.ENDED),e}finally{this.connectPromise=null}}}stop(){this.updateStatus(o.STOPPING),this.instance&&(this.instance.disconnect(),this.instance.removeAllListeners(),this.messageListeners.clear(),this.instance=null),this.updateStatus(o.ENDED),a("stopped %s",this.nodeKey)}isStarted(){return[o.CONNECTED,o.STARTING].includes(this.status)}get subscriberStatus(){return this.status}isHealthy(){return(this.status===o.IDLE||this.status===o.CONNECTED||this.status===o.STARTING)&&null!==this.instance}getInstance(){return this.instance}getNodeKey(){return this.nodeKey}isLazyConnect(){return this.lazyConnect}updateStatus(e){if(this.status!==e){if(!l[this.status].includes(e)){a("Invalid status transition for %s: %s -> %s",this.nodeKey,this.status,e);return}this.status=e}}}t.default=d},42056:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(22205),n=r(82361),s=r(13122),a=r(83499),o=r(12986),l=r(96002),d=r(90855),c=r(44e3),u=r(76383),p=r(13505),h=r(63260),y=r(52430),m=r(62796),f=r(61413),b=r(52515),g=r(84546),S=r(68231),v=r(35561),K=r(64112),k=(0,p.Debug)("cluster"),E=new WeakSet;class I extends y.default{constructor(e,t={}){if(super(),this.slots=[],this._groupsIds={},this._groupsBySlot=Array(16384),this.isCluster=!0,this.retryAttempts=0,this.delayQueue=new g.default,this.offlineQueue=new v,this.isRefreshing=!1,this._refreshSlotsCacheCallbacks=[],this._autoPipelines=new Map,this._runningAutoPipelines=new Set,this._readyDelayedCallbacks=[],this.connectionEpoch=0,n.EventEmitter.call(this),this.startupNodes=e,this.options=(0,p.defaults)({},t,m.DEFAULT_CLUSTER_OPTIONS,this.options),this.options.shardedSubscribers&&this.createShardedSubscriberGroup(),this.options.redisOptions&&this.options.redisOptions.keyPrefix&&!this.options.keyPrefix&&(this.options.keyPrefix=this.options.redisOptions.keyPrefix),"function"!=typeof this.options.scaleReads&&-1===["all","master","slave"].indexOf(this.options.scaleReads))throw Error('Invalid option scaleReads "'+this.options.scaleReads+'". Expected "all", "master", "slave" or a custom function');this.connectionPool=new b.default(this.options.redisOptions),this.connectionPool.on("-node",(e,t)=>{this.emit("-node",e)}),this.connectionPool.on("+node",e=>{this.emit("+node",e)}),this.connectionPool.on("drain",()=>{this.setStatus("close")}),this.connectionPool.on("nodeError",(e,t)=>{this.emit("node error",e,t)}),this.subscriber=new f.default(this.connectionPool,this),this.options.scripts&&Object.entries(this.options.scripts).forEach(([e,t])=>{this.defineCommand(e,t)}),this.options.lazyConnect?this.setStatus("wait"):this.connect().catch(e=>{k("connecting failed: %s",e)})}connect(){return new Promise((e,t)=>{if("connecting"===this.status||"connect"===this.status||"ready"===this.status){t(Error("Redis is already connecting/connected"));return}let r=++this.connectionEpoch;this.setStatus("connecting"),this.resolveStartupNodeHostnames().then(i=>{let n;if(this.connectionEpoch!==r){k("discard connecting after resolving startup nodes because epoch not match: %d != %d",r,this.connectionEpoch),t(new s.RedisError("Connection is discarded because a new connection is made"));return}if("connecting"!==this.status){k("discard connecting after resolving startup nodes because the status changed to %s",this.status),t(new s.RedisError("Connection is aborted"));return}this.connectionPool.reset(i),this.options.shardedSubscribers&&this.shardedSubscribers.reset(this.slots,this.connectionPool.getNodes("all")).catch(e=>{k("Error while starting subscribers: %s",e)});let a=()=>{this.setStatus("ready"),this.retryAttempts=0,this.executeOfflineCommands(),this.resetNodesRefreshInterval(),e()},o=()=>{this.invokeReadyDelayedCallbacks(void 0),this.removeListener("close",n),this.manuallyClosing=!1,this.setStatus("connect"),this.options.enableReadyCheck?this.readyCheck((e,t)=>{e||t?(k("Ready check failed (%s). Reconnecting...",e||t),"connect"===this.status&&this.disconnect(!0)):a()}):a()};n=()=>{let e=Error("None of startup nodes is available");this.removeListener("refresh",o),this.invokeReadyDelayedCallbacks(e),t(e)},this.once("refresh",o),this.once("close",n),this.once("close",this.handleCloseEvent.bind(this)),this.refreshSlotsCache(e=>{e&&e.message===l.default.defaultMessage&&(d.default.prototype.silentEmit.call(this,"error",e),this.connectionPool.reset([]))}),this.subscriber.start(),this.options.shardedSubscribers&&this.shardedSubscribers.start().catch(e=>{k("Error while starting subscribers: %s",e)})}).catch(e=>{this.setStatus("close"),this.handleCloseEvent(e),this.invokeReadyDelayedCallbacks(e),t(e)})})}disconnect(e=!1){let t=this.status;this.setStatus("disconnecting"),e||(this.manuallyClosing=!0),this.reconnectTimeout&&!e&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null,k("Canceled reconnecting attempts")),this.clearNodesRefreshInterval(),this.subscriber.stop(),this.options.shardedSubscribers&&this.shardedSubscribers.stop(),"wait"===t?(this.setStatus("close"),this.handleCloseEvent()):this.connectionPool.reset([])}quit(e){let t=this.status;if(this.setStatus("disconnecting"),this.manuallyClosing=!0,this.reconnectTimeout&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),this.clearNodesRefreshInterval(),this.subscriber.stop(),this.options.shardedSubscribers&&this.shardedSubscribers.stop(),"wait"===t){let t=(0,a.default)(Promise.resolve("OK"),e);return setImmediate((function(){this.setStatus("close"),this.handleCloseEvent()}).bind(this)),t}return(0,a.default)(Promise.all(this.nodes().map(e=>e.quit().catch(e=>{if(e.message===p.CONNECTION_CLOSED_ERROR_MSG)return"OK";throw e}))).then(()=>"OK"),e)}duplicate(e=[],t={}){return new I(e.length>0?e:this.startupNodes.slice(0),Object.assign({},this.options,t))}nodes(e="all"){if("all"!==e&&"master"!==e&&"slave"!==e)throw Error('Invalid role "'+e+'". Expected "all", "master" or "slave"');return this.connectionPool.getNodes(e)}delayUntilReady(e){this._readyDelayedCallbacks.push(e)}get autoPipelineQueueSize(){let e=0;for(let t of this._autoPipelines.values())e+=t.length;return e}refreshSlotsCache(e){if(e&&this._refreshSlotsCacheCallbacks.push(e),this.isRefreshing)return;this.isRefreshing=!0;let t=this,r=e=>{for(let t of(this.isRefreshing=!1,this._refreshSlotsCacheCallbacks))t(e);this._refreshSlotsCacheCallbacks=[]},i=(0,p.shuffle)(this.connectionPool.getNodes()),n=null;!function e(s){if(s===i.length)return r(new l.default(l.default.defaultMessage,n));let a=i[s],o=`${a.options.host}:${a.options.port}`;k("getting slot cache from %s",o),t.getInfoFromNode(a,function(i){switch(t.status){case"close":case"end":return r(Error("Cluster is disconnected."));case"disconnecting":return r(Error("Cluster is disconnecting."))}i?(t.emit("node error",i,o),n=i,e(s+1)):(t.emit("refresh"),r())})}(0)}sendCommand(e,t,r){if("wait"===this.status&&this.connect().catch(p.noop),"end"===this.status)return e.reject(Error(p.CONNECTION_CLOSED_ERROR_MSG)),e.promise;let n=this.options.scaleReads;"master"===n||e.isReadOnly||(0,i.exists)(e.name)&&(0,i.hasFlag)(e.name,"readonly")||(n="master");let a=r?r.slot:e.getSlot(),l={},d=this;if(!r&&!E.has(e)){E.add(e);let t=e.reject;e.reject=function(r){let i=c.bind(null,!0);d.handleError(r,l,{moved:function(t,r){k("command %s is moved to %s",e.name,r),a=Number(t),d.slots[t]?d.slots[t][0]=r:d.slots[t]=[r],d._groupsBySlot[t]=d._groupsIds[d.slots[t].join(";")],d.connectionPool.findOrCreate(d.natMapper(r)),c(),k("refreshing slot caches... (triggered by MOVED error)"),d.refreshSlotsCache()},ask:function(t,r){k("command %s is required to ask %s:%s",e.name,r);let i=d.natMapper(r);d.connectionPool.findOrCreate(i),c(!1,`${i.host}:${i.port}`)},tryagain:i,clusterDown:i,connectionClosed:i,maxRedirections:function(r){t.call(e,r)},defaults:function(){t.call(e,r)}})}}function c(i,l){let c;if("end"===d.status){e.reject(new s.AbortError("Cluster is ended."));return}if("ready"===d.status||"cluster"===e.name){if(r&&r.redis)c=r.redis;else if(o.default.checkFlag("ENTER_SUBSCRIBER_MODE",e.name)||o.default.checkFlag("EXIT_SUBSCRIBER_MODE",e.name)){if(d.options.shardedSubscribers&&("ssubscribe"==e.name||"sunsubscribe"==e.name)){let t=d.shardedSubscribers.getResponsibleSubscriber(a);if(!t){e.reject(new s.AbortError(`No sharded subscriber for slot: ${a}`));return}let r=-1;"ssubscribe"==e.name&&(r=d.shardedSubscribers.addChannels(e.getKeys())),"sunsubscribe"==e.name&&(r=d.shardedSubscribers.removeChannels(e.getKeys())),-1!==r?c=t.getInstance():e.reject(new s.AbortError("Possible CROSSSLOT error: All channels must hash to the same slot"))}else c=d.subscriber.getInstance();if(!c){e.reject(new s.AbortError("No subscriber for the cluster"));return}}else{if(!i){if("number"==typeof a&&d.slots[a]){let t=d.slots[a];if("function"==typeof n){let r=t.map(function(e){return d.connectionPool.getInstanceByKey(e)});Array.isArray(c=n(r,e))&&(c=(0,p.sample)(c)),c||(c=r[0])}else{let e;e="all"===n?(0,p.sample)(t):"slave"===n&&t.length>1?(0,p.sample)(t,1):t[0],c=d.connectionPool.getInstanceByKey(e)}}l&&(c=d.connectionPool.getInstanceByKey(l)).asking()}c||(c=("function"==typeof n?null:d.connectionPool.getSampleInstance(n))||d.connectionPool.getSampleInstance("all"))}r&&!r.redis&&(r.redis=c)}c?c.sendCommand(e,t):d.options.enableOfflineQueue?d.offlineQueue.push({command:e,stream:t,node:r}):e.reject(Error("Cluster isn't ready and enableOfflineQueue options is false"))}return c(),e.promise}sscanStream(e,t){return this.createScanStream("sscan",{key:e,options:t})}sscanBufferStream(e,t){return this.createScanStream("sscanBuffer",{key:e,options:t})}hscanStream(e,t){return this.createScanStream("hscan",{key:e,options:t})}hscanBufferStream(e,t){return this.createScanStream("hscanBuffer",{key:e,options:t})}zscanStream(e,t){return this.createScanStream("zscan",{key:e,options:t})}zscanBufferStream(e,t){return this.createScanStream("zscanBuffer",{key:e,options:t})}handleError(e,t,r){if(void 0===t.value?t.value=this.options.maxRedirections:t.value-=1,t.value<=0){r.maxRedirections(Error("Too many Cluster redirections. Last error: "+e));return}let i=e.message.split(" ");if("MOVED"===i[0]){let e=this.options.retryDelayOnMoved;e&&"number"==typeof e?this.delayQueue.push("moved",r.moved.bind(null,i[1],i[2]),{timeout:e}):r.moved(i[1],i[2])}else"ASK"===i[0]?r.ask(i[1],i[2]):"TRYAGAIN"===i[0]?this.delayQueue.push("tryagain",r.tryagain,{timeout:this.options.retryDelayOnTryAgain}):"CLUSTERDOWN"===i[0]&&this.options.retryDelayOnClusterDown>0?this.delayQueue.push("clusterdown",r.connectionClosed,{timeout:this.options.retryDelayOnClusterDown,callback:this.refreshSlotsCache.bind(this)}):e.message===p.CONNECTION_CLOSED_ERROR_MSG&&this.options.retryDelayOnFailover>0&&"ready"===this.status?this.delayQueue.push("failover",r.connectionClosed,{timeout:this.options.retryDelayOnFailover,callback:this.refreshSlotsCache.bind(this)}):r.defaults()}resetOfflineQueue(){this.offlineQueue=new v}clearNodesRefreshInterval(){this.slotsTimer&&(clearTimeout(this.slotsTimer),this.slotsTimer=null)}resetNodesRefreshInterval(){if(this.slotsTimer||!this.options.slotsRefreshInterval)return;let e=()=>{this.slotsTimer=setTimeout(()=>{k('refreshing slot caches... (triggered by "slotsRefreshInterval" option)'),this.refreshSlotsCache(()=>{e()})},this.options.slotsRefreshInterval)};e()}setStatus(e){k("status: %s -> %s",this.status||"[empty]",e),this.status=e,process.nextTick(()=>{this.emit(e)})}handleCloseEvent(e){var t;let r;e&&k("closed because %s",e),this.manuallyClosing||"function"!=typeof this.options.clusterRetryStrategy||(r=this.options.clusterRetryStrategy.call(this,++this.retryAttempts,e)),"number"==typeof r?(this.setStatus("reconnecting"),this.reconnectTimeout=setTimeout(()=>{this.reconnectTimeout=null,k("Cluster is disconnected. Retrying after %dms",r),this.connect().catch(function(e){k("Got error %s when reconnecting. Ignoring...",e)})},r)):(this.options.shardedSubscribers&&(null===(t=this.subscriberGroupEmitter)||void 0===t||t.removeAllListeners()),this.setStatus("end"),this.flushQueue(Error("None of startup nodes is available")))}flushQueue(e){let t;for(;t=this.offlineQueue.shift();)t.command.reject(e)}executeOfflineCommands(){if(this.offlineQueue.length){let e;k("send %d commands in offline queue",this.offlineQueue.length);let t=this.offlineQueue;for(this.resetOfflineQueue();e=t.shift();)this.sendCommand(e.command,e.stream,e.node)}}natMapper(e){let t="string"==typeof e?e:`${e.host}:${e.port}`,r=null;return(this.options.natMap&&"function"==typeof this.options.natMap?r=this.options.natMap(t):this.options.natMap&&"object"==typeof this.options.natMap&&(r=this.options.natMap[t]),r)?(k("NAT mapping %s -> %O",t,r),Object.assign({},r)):"string"==typeof e?(0,S.nodeKeyToRedisOptions)(e):e}getInfoFromNode(e,t){if(!e)return t(Error("Node is disconnected"));let r=e.duplicate({enableOfflineQueue:!0,enableReadyCheck:!1,retryStrategy:null,connectionName:(0,S.getConnectionName)("refresher",this.options.redisOptions&&this.options.redisOptions.connectionName)});r.on("error",p.noop),r.cluster("SLOTS",(0,p.timeout)((e,i)=>{if(r.disconnect(),e)return k("error encountered running CLUSTER.SLOTS: %s",e),t(e);if("disconnecting"===this.status||"close"===this.status||"end"===this.status){k("ignore CLUSTER.SLOTS results (count: %d) since cluster status is %s",i.length,this.status),t();return}let n=[];k("cluster slots result count: %d",i.length);for(let e=0;e<i.length;++e){let t=i[e],r=t[0],s=t[1],a=[];for(let e=2;e<t.length;e++){if(!t[e][0])continue;let r=this.natMapper({host:t[e][0],port:t[e][1]});r.readOnly=2!==e,n.push(r),a.push(r.host+":"+r.port)}k("cluster slots result [%d]: slots %d~%d served by %s",e,r,s,a);for(let e=r;e<=s;e++)this.slots[e]=a}this._groupsIds=Object.create(null);let s=0;for(let e=0;e<16384;e++){let t=(this.slots[e]||[]).join(";");if(!t.length){this._groupsBySlot[e]=void 0;continue}this._groupsIds[t]||(this._groupsIds[t]=++s),this._groupsBySlot[e]=this._groupsIds[t]}this.connectionPool.reset(n),this.options.shardedSubscribers&&this.shardedSubscribers.reset(this.slots,this.connectionPool.getNodes("all")).catch(e=>{k("Error while starting subscribers: %s",e)}),t()},this.options.slotsRefreshTimeout))}invokeReadyDelayedCallbacks(e){for(let t of this._readyDelayedCallbacks)process.nextTick(t,e);this._readyDelayedCallbacks=[]}readyCheck(e){this.cluster("INFO",(t,r)=>{let i;if(t)return e(t);if("string"!=typeof r)return e();let n=r.split("\r\n");for(let e=0;e<n.length;++e){let t=n[e].split(":");if("cluster_state"===t[0]){i=t[1];break}}"fail"===i?(k("cluster state not ok (%s)",i),e(null,i)):e()})}resolveSrv(e){return new Promise((t,r)=>{this.options.resolveSrv(e,(e,i)=>{if(e)return r(e);let n=this,s=(0,S.groupSrvRecords)(i),a=Object.keys(s).sort((e,t)=>parseInt(e)-parseInt(t));!function e(i){if(!a.length)return r(i);let o=s[a[0]],l=(0,S.weightSrvRecords)(o);o.records.length||a.shift(),n.dnsLookup(l.name).then(e=>t({host:e,port:l.port}),e)}()})})}dnsLookup(e){return new Promise((t,r)=>{this.options.dnsLookup(e,(i,n)=>{i?(k("failed to resolve hostname %s to IP: %s",e,i.message),r(i)):(k("resolved hostname %s to IP %s",e,n),t(n))})})}async resolveStartupNodeHostnames(){if(!Array.isArray(this.startupNodes)||0===this.startupNodes.length)throw Error("`startupNodes` should contain at least one node.");let e=(0,S.normalizeNodeOptions)(this.startupNodes),t=(0,S.getUniqueHostnamesFromOptions)(e);if(0===t.length)return e;let r=await Promise.all(t.map((this.options.useSRVRecords?this.resolveSrv:this.dnsLookup).bind(this))),i=(0,p.zipMap)(t,r);return e.map(e=>{let t=i.get(e.host);return t?this.options.useSRVRecords?Object.assign({},e,t):Object.assign({},e,{host:t}):e})}createScanStream(e,{key:t,options:r={}}){return new c.default({objectMode:!0,key:t,redis:this,command:e,...r})}createShardedSubscriberGroup(){this.subscriberGroupEmitter=new n.EventEmitter,this.shardedSubscribers=new K.default(this.subscriberGroupEmitter,this.options);let e=e=>{e instanceof l.default&&this.disconnect(!0)};for(let t of(this.subscriberGroupEmitter.on("-node",(t,r)=>{this.emit("-node",t,r),this.refreshSlotsCache(e)}),this.subscriberGroupEmitter.on("subscriberConnectFailed",({delay:t,error:r})=>{this.emit("error",r),setTimeout(()=>{this.refreshSlotsCache(e)},t)}),this.subscriberGroupEmitter.on("moved",()=>{this.refreshSlotsCache(e)}),this.subscriberGroupEmitter.on("-subscriber",()=>{this.emit("-subscriber")}),this.subscriberGroupEmitter.on("+subscriber",()=>{this.emit("+subscriber")}),this.subscriberGroupEmitter.on("nodeError",(e,t)=>{this.emit("nodeError",e,t)}),this.subscriberGroupEmitter.on("subscribersReady",()=>{this.emit("subscribersReady")}),["smessage","smessageBuffer"]))this.subscriberGroupEmitter.on(t,(e,r,i)=>{this.emit(t,e,r,i)})}}(0,h.default)(I,n.EventEmitter),(0,u.addTransactionSupport)(I.prototype),t.default=I},68231:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getConnectionName=t.weightSrvRecords=t.groupSrvRecords=t.getUniqueHostnamesFromOptions=t.normalizeNodeOptions=t.nodeKeyToRedisOptions=t.getNodeKey=void 0;let i=r(13505),n=r(41808);t.getNodeKey=function(e){return e.port=e.port||6379,e.host=e.host||"127.0.0.1",e.host+":"+e.port},t.nodeKeyToRedisOptions=function(e){let t=e.lastIndexOf(":");if(-1===t)throw Error(`Invalid node key ${e}`);return{host:e.slice(0,t),port:Number(e.slice(t+1))}},t.normalizeNodeOptions=function(e){return e.map(e=>{let t={};if("object"==typeof e)Object.assign(t,e);else if("string"==typeof e)Object.assign(t,(0,i.parseURL)(e));else if("number"==typeof e)t.port=e;else throw Error("Invalid argument "+e);return"string"==typeof t.port&&(t.port=parseInt(t.port,10)),delete t.db,t.port||(t.port=6379),t.host||(t.host="127.0.0.1"),(0,i.resolveTLSProfile)(t)})},t.getUniqueHostnamesFromOptions=function(e){let t={};return e.forEach(e=>{t[e.host]=!0}),Object.keys(t).filter(e=>!(0,n.isIP)(e))},t.groupSrvRecords=function(e){let t={};for(let r of e)t.hasOwnProperty(r.priority)?(t[r.priority].totalWeight+=r.weight,t[r.priority].records.push(r)):t[r.priority]={totalWeight:r.weight,records:[r]};return t},t.weightSrvRecords=function(e){if(1===e.records.length)return e.totalWeight=0,e.records.shift();let t=Math.floor(Math.random()*(e.totalWeight+e.records.length)),r=0;for(let[i,n]of e.records.entries())if((r+=1+n.weight)>t)return e.totalWeight-=n.weight,e.records.splice(i,1),n},t.getConnectionName=function(e,t){let r=`ioredis-cluster(${e})`;return t?`${r}:${t}`:r}},54847:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=(0,r(13505).Debug)("AbstractConnector");class n{constructor(e){this.connecting=!1,this.disconnectTimeout=e}check(e){return!0}disconnect(){if(this.connecting=!1,this.stream){let e=this.stream,t=setTimeout(()=>{i("stream %s:%s still open, destroying it",e.remoteAddress,e.remotePort),e.destroy()},this.disconnectTimeout);e.on("close",()=>clearTimeout(t)),e.end()}}}t.default=n},48882:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FailoverDetector=void 0;let i=(0,r(13505).Debug)("FailoverDetector"),n="+switch-master";class s{constructor(e,t){this.isDisconnected=!1,this.connector=e,this.sentinels=t}cleanup(){for(let e of(this.isDisconnected=!0,this.sentinels))e.client.disconnect()}async subscribe(){i("Starting FailoverDetector");let e=[];for(let t of this.sentinels){let r=t.client.subscribe(n).catch(e=>{i("Failed to subscribe to failover messages on sentinel %s:%s (%s)",t.address.host||"127.0.0.1",t.address.port||26739,e.message)});e.push(r),t.client.on("message",e=>{this.isDisconnected||e!==n||this.disconnect()})}await Promise.all(e)}disconnect(){this.isDisconnected=!0,i("Failover detected, disconnecting"),this.connector.disconnect()}}t.FailoverDetector=s},16852:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(e){this.cursor=0,this.sentinels=e.slice(0)}next(){let e=this.cursor>=this.sentinels.length;return{done:e,value:e?void 0:this.sentinels[this.cursor++]}}reset(e){e&&this.sentinels.length>1&&1!==this.cursor&&this.sentinels.unshift(...this.sentinels.splice(this.cursor-1)),this.cursor=0}add(e){for(let r=0;r<this.sentinels.length;r++){var t;if(t=this.sentinels[r],(e.host||"127.0.0.1")===(t.host||"127.0.0.1")&&(e.port||26379)===(t.port||26379))return!1}return this.sentinels.push(e),!0}toString(){return`${JSON.stringify(this.sentinels)} @${this.cursor}`}}t.default=r},12902:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SentinelIterator=void 0;let i=r(41808),n=r(13505),s=r(24404),a=r(16852);t.SentinelIterator=a.default;let o=r(54847),l=r(90855),d=r(48882),c=(0,n.Debug)("SentinelConnector");class u extends o.default{constructor(e){if(super(e.disconnectTimeout),this.options=e,this.emitter=null,this.failoverDetector=null,!this.options.sentinels.length)throw Error("Requires at least one sentinel to connect to.");if(!this.options.name)throw Error("Requires the name of master.");this.sentinelIterator=new a.default(this.options.sentinels)}check(e){let t=!e.role||this.options.role===e.role;return t||(c("role invalid, expected %s, but got %s",this.options.role,e.role),this.sentinelIterator.next(),this.sentinelIterator.next(),this.sentinelIterator.reset(!0)),t}disconnect(){super.disconnect(),this.failoverDetector&&this.failoverDetector.cleanup()}connect(e){let t;this.connecting=!0,this.retryAttempts=0;let r=async()=>{let a=this.sentinelIterator.next();if(a.done){this.sentinelIterator.reset(!1);let i="function"==typeof this.options.sentinelRetryStrategy?this.options.sentinelRetryStrategy(++this.retryAttempts):null,n="number"!=typeof i?"All sentinels are unreachable and retry is disabled.":`All sentinels are unreachable. Retrying from scratch after ${i}ms.`;t&&(n+=` Last error: ${t.message}`),c(n);let s=Error(n);if("number"==typeof i)return e("error",s),await new Promise(e=>setTimeout(e,i)),r();throw s}let o=null,l=null;try{o=await this.resolve(a.value)}catch(e){l=e}if(!this.connecting)throw Error(n.CONNECTION_CLOSED_ERROR_MSG);let d=a.value.host+":"+a.value.port;if(o)return c("resolved: %s:%s from sentinel %s",o.host,o.port,d),this.options.enableTLSForSentinelMode&&this.options.tls?(Object.assign(o,this.options.tls),this.stream=(0,s.connect)(o),this.stream.once("secureConnect",this.initFailoverDetector.bind(this))):(this.stream=(0,i.createConnection)(o),this.stream.once("connect",this.initFailoverDetector.bind(this))),this.stream.once("error",e=>{this.firstError=e}),this.stream;{let i=l?"failed to connect to sentinel "+d+" because "+l.message:"connected to sentinel "+d+" successfully, but got an invalid reply: "+o;return c(i),e("sentinelError",Error(i)),l&&(t=l),r()}};return r()}async updateSentinels(e){if(!this.options.updateSentinels)return;let t=await e.sentinel("sentinels",this.options.name);Array.isArray(t)&&(t.map(n.packObject).forEach(e=>{if(-1===(e.flags?e.flags.split(","):[]).indexOf("disconnected")&&e.ip&&e.port){let t=this.sentinelNatResolve(p(e));this.sentinelIterator.add(t)&&c("adding sentinel %s:%s",t.host,t.port)}}),c("Updated internal sentinels: %s",this.sentinelIterator))}async resolveMaster(e){let t=await e.sentinel("get-master-addr-by-name",this.options.name);return await this.updateSentinels(e),this.sentinelNatResolve(Array.isArray(t)?{host:t[0],port:Number(t[1])}:null)}async resolveSlave(e){let t=await e.sentinel("slaves",this.options.name);if(!Array.isArray(t))return null;let r=t.map(n.packObject).filter(e=>e.flags&&!e.flags.match(/(disconnected|s_down|o_down)/));return this.sentinelNatResolve(function(e,t){let r;if(0===e.length)return null;if("function"==typeof t)r=t(e);else if(null!==t&&"object"==typeof t){let i=Array.isArray(t)?t:[t];i.sort((e,t)=>(e.prio||(e.prio=1),t.prio||(t.prio=1),e.prio<t.prio)?-1:e.prio>t.prio?1:0);for(let t=0;t<i.length;t++){for(let n=0;n<e.length;n++){let s=e[n];if(s.ip===i[t].ip&&s.port===i[t].port){r=s;break}}if(r)break}}return r||(r=(0,n.sample)(e)),p(r)}(r,this.options.preferredSlaves))}sentinelNatResolve(e){if(!e||!this.options.natMap)return e;let t=`${e.host}:${e.port}`,r=e;return"function"==typeof this.options.natMap?r=this.options.natMap(t)||e:"object"==typeof this.options.natMap&&(r=this.options.natMap[t]||e),r}connectToSentinel(e,t){return new l.default({port:e.port||26379,host:e.host,username:this.options.sentinelUsername||null,password:this.options.sentinelPassword||null,family:e.family||("path"in this.options&&this.options.path?void 0:this.options.family),tls:this.options.sentinelTLS,retryStrategy:null,enableReadyCheck:!1,connectTimeout:this.options.connectTimeout,commandTimeout:this.options.sentinelCommandTimeout,...t})}async resolve(e){let t=this.connectToSentinel(e);t.on("error",h);try{if("slave"===this.options.role)return await this.resolveSlave(t);return await this.resolveMaster(t)}finally{t.disconnect()}}async initFailoverDetector(){var e;if(!this.options.failoverDetector)return;this.sentinelIterator.reset(!0);let t=[];for(;t.length<this.options.sentinelMaxConnections;){let{done:e,value:r}=this.sentinelIterator.next();if(e)break;let i=this.connectToSentinel(r,{lazyConnect:!0,retryStrategy:this.options.sentinelReconnectStrategy});i.on("reconnecting",()=>{var e;null===(e=this.emitter)||void 0===e||e.emit("sentinelReconnecting")}),t.push({address:r,client:i})}this.sentinelIterator.reset(!1),this.failoverDetector&&this.failoverDetector.cleanup(),this.failoverDetector=new d.FailoverDetector(this,t),await this.failoverDetector.subscribe(),null===(e=this.emitter)||void 0===e||e.emit("failoverSubscribed")}}function p(e){return{host:e.ip,port:Number(e.port)}}function h(){}t.default=u},27363:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(41808),n=r(24404),s=r(13505),a=r(54847);class o extends a.default{constructor(e){super(e.disconnectTimeout),this.options=e}connect(e){let t;let{options:r}=this;return this.connecting=!0,"path"in r&&r.path?t={path:r.path}:(t={},"port"in r&&null!=r.port&&(t.port=r.port),"host"in r&&null!=r.host&&(t.host=r.host),"family"in r&&null!=r.family&&(t.family=r.family)),r.tls&&Object.assign(t,r.tls),new Promise((e,a)=>{process.nextTick(()=>{if(!this.connecting){a(Error(s.CONNECTION_CLOSED_ERROR_MSG));return}try{r.tls?this.stream=(0,n.connect)(t):this.stream=(0,i.createConnection)(t)}catch(e){a(e);return}this.stream.once("error",e=>{this.firstError=e}),e(this.stream)})})}}t.default=o},30834:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SentinelConnector=t.StandaloneConnector=void 0;let i=r(27363);t.StandaloneConnector=i.default;let n=r(12902);t.SentinelConnector=n.default},83501:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=`-----BEGIN CERTIFICATE-----
MIIDTzCCAjegAwIBAgIJAKSVpiDswLcwMA0GCSqGSIb3DQEBBQUAMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTAeFw0xMzEwMDExMjE0NTVaFw0yMzA5MjkxMjE0NTVaMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALZqkh/DczWP
JnxnHLQ7QL0T4B4CDKWBKCcisriGbA6ZePWVNo4hfKQC6JrzfR+081NeD6VcWUiz
rmd+jtPhIY4c+WVQYm5PKaN6DT1imYdxQw7aqO5j2KUCEh/cznpLxeSHoTxlR34E
QwF28Wl3eg2vc5ct8LjU3eozWVk3gb7alx9mSA2SgmuX5lEQawl++rSjsBStemY2
BDwOpAMXIrdEyP/cVn8mkvi/BDs5M5G+09j0gfhyCzRWMQ7Hn71u1eolRxwVxgi3
TMn+/vTaFSqxKjgck6zuAYjBRPaHe7qLxHNr1So/Mc9nPy+3wHebFwbIcnUojwbp
4nctkWbjb2cCAwEAAaNQME4wHQYDVR0OBBYEFP1whtcrydmW3ZJeuSoKZIKjze3w
MB8GA1UdIwQYMBaAFP1whtcrydmW3ZJeuSoKZIKjze3wMAwGA1UdEwQFMAMBAf8w
DQYJKoZIhvcNAQEFBQADggEBAG2erXhwRAa7+ZOBs0B6X57Hwyd1R4kfmXcs0rta
lbPpvgULSiB+TCbf3EbhJnHGyvdCY1tvlffLjdA7HJ0PCOn+YYLBA0pTU/dyvrN6
Su8NuS5yubnt9mb13nDGYo1rnt0YRfxN+8DM3fXIVr038A30UlPX2Ou1ExFJT0MZ
uFKY6ZvLdI6/1cbgmguMlAhM+DhKyV6Sr5699LM3zqeI816pZmlREETYkGr91q7k
BpXJu/dtHaGxg1ZGu6w/PCsYGUcECWENYD4VQPd8N32JjOfu6vEgoEAwfPP+3oGp
Z4m3ewACcWOAenqflb+cQYC4PsF7qbXDmRaWrbKntOlZ3n0=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIGMTCCBBmgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwajELMAkGA1UEBhMCVVMx
CzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJzMS0w
KwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwHhcN
MTgwMjI1MTUzNzM3WhcNMjgwMjIzMTUzNzM3WjBfMQswCQYDVQQGEwJVUzELMAkG
A1UECAwCQ0ExEjAQBgNVBAoMCVJlZGlzTGFiczEvMC0GA1UEAwwmUkNQIEludGVy
bWVkaWF0ZSBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwggIiMA0GCSqGSIb3DQEBAQUA
A4ICDwAwggIKAoICAQDf9dqbxc8Bq7Ctq9rWcxrGNKKHivqLAFpPq02yLPx6fsOv
Tq7GsDChAYBBc4v7Y2Ap9RD5Vs3dIhEANcnolf27QwrG9RMnnvzk8pCvp1o6zSU4
VuOE1W66/O1/7e2rVxyrnTcP7UgK43zNIXu7+tiAqWsO92uSnuMoGPGpeaUm1jym
hjWKtkAwDFSqvHY+XL5qDVBEjeUe+WHkYUg40cAXjusAqgm2hZt29c2wnVrxW25W
P0meNlzHGFdA2AC5z54iRiqj57dTfBTkHoBczQxcyw6hhzxZQ4e5I5zOKjXXEhZN
r0tA3YC14CTabKRus/JmZieyZzRgEy2oti64tmLYTqSlAD78pRL40VNoaSYetXLw
hhNsXCHgWaY6d5bLOc/aIQMAV5oLvZQKvuXAF1IDmhPA+bZbpWipp0zagf1P1H3s
UzsMdn2KM0ejzgotbtNlj5TcrVwpmvE3ktvUAuA+hi3FkVx1US+2Gsp5x4YOzJ7u
P1WPk6ShF0JgnJH2ILdj6kttTWwFzH17keSFICWDfH/+kM+k7Y1v3EXMQXE7y0T9
MjvJskz6d/nv+sQhY04xt64xFMGTnZjlJMzfQNi7zWFLTZnDD0lPowq7l3YiPoTT
t5Xky83lu0KZsZBo0WlWaDG00gLVdtRgVbcuSWxpi5BdLb1kRab66JptWjxwXQID
AQABo4HrMIHoMDoGA1UdHwQzMDEwL6AtoCuGKWh0dHBzOi8vcmwtY2Etc2VydmVy
LnJlZGlzbGFicy5jb20vdjEvY3JsMEYGCCsGAQUFBwEBBDowODA2BggrBgEFBQcw
AYYqaHR0cHM6Ly9ybC1jYS1zZXJ2ZXIucmVkaXNsYWJzLmNvbS92MS9vY3NwMB0G
A1UdDgQWBBQHar5OKvQUpP2qWt6mckzToeCOHDAfBgNVHSMEGDAWgBQi42wH6hM4
L2sujEvLM0/u8lRXTzASBgNVHRMBAf8ECDAGAQH/AgEAMA4GA1UdDwEB/wQEAwIB
hjANBgkqhkiG9w0BAQsFAAOCAgEAirEn/iTsAKyhd+pu2W3Z5NjCko4NPU0EYUbr
AP7+POK2rzjIrJO3nFYQ/LLuC7KCXG+2qwan2SAOGmqWst13Y+WHp44Kae0kaChW
vcYLXXSoGQGC8QuFSNUdaeg3RbMDYFT04dOkqufeWVccoHVxyTSg9eD8LZuHn5jw
7QDLiEECBmIJHk5Eeo2TAZrx4Yx6ufSUX5HeVjlAzqwtAqdt99uCJ/EL8bgpWbe+
XoSpvUv0SEC1I1dCAhCKAvRlIOA6VBcmzg5Am12KzkqTul12/VEFIgzqu0Zy2Jbc
AUPrYVu/+tOGXQaijy7YgwH8P8n3s7ZeUa1VABJHcxrxYduDDJBLZi+MjheUDaZ1
jQRHYevI2tlqeSBqdPKG4zBY5lS0GiAlmuze5oENt0P3XboHoZPHiqcK3VECgTVh
/BkJcuudETSJcZDmQ8YfoKfBzRQNg2sv/hwvUv73Ss51Sco8GEt2lD8uEdib1Q6z
zDT5lXJowSzOD5ZA9OGDjnSRL+2riNtKWKEqvtEG3VBJoBzu9GoxbAc7wIZLxmli
iF5a/Zf5X+UXD3s4TMmy6C4QZJpAA2egsSQCnraWO2ULhh7iXMysSkF/nzVfZn43
iqpaB8++9a37hWq14ZmOv0TJIDz//b2+KC4VFXWQ5W5QC6whsjT+OlG4p5ZYG0jo
616pxqo=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIFujCCA6KgAwIBAgIJAJ1aTT1lu2ScMA0GCSqGSIb3DQEBCwUAMGoxCzAJBgNV
BAYTAlVTMQswCQYDVQQIDAJDQTELMAkGA1UEBwwCQ0ExEjAQBgNVBAoMCVJlZGlz
TGFiczEtMCsGA1UEAwwkUmVkaXNMYWJzIFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9y
aXR5MB4XDTE4MDIyNTE1MjA0MloXDTM4MDIyMDE1MjA0MlowajELMAkGA1UEBhMC
VVMxCzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJz
MS0wKwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkw
ggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDLEjXy7YrbN5Waau5cd6g1
G5C2tMmeTpZ0duFAPxNU4oE3RHS5gGiok346fUXuUxbZ6QkuzeN2/2Z+RmRcJhQY
Dm0ZgdG4x59An1TJfnzKKoWj8ISmoHS/TGNBdFzXV7FYNLBuqZouqePI6ReC6Qhl
pp45huV32Q3a6IDrrvx7Wo5ZczEQeFNbCeCOQYNDdTmCyEkHqc2AGo8eoIlSTutT
ULOC7R5gzJVTS0e1hesQ7jmqHjbO+VQS1NAL4/5K6cuTEqUl+XhVhPdLWBXJQ5ag
54qhX4v+ojLzeU1R/Vc6NjMvVtptWY6JihpgplprN0Yh2556ewcXMeturcKgXfGJ
xeYzsjzXerEjrVocX5V8BNrg64NlifzTMKNOOv4fVZszq1SIHR8F9ROrqiOdh8iC
JpUbLpXH9hWCSEO6VRMB2xJoKu3cgl63kF30s77x7wLFMEHiwsQRKxooE1UhgS9K
2sO4TlQ1eWUvFvHSTVDQDlGQ6zu4qjbOpb3Q8bQwoK+ai2alkXVR4Ltxe9QlgYK3
StsnPhruzZGA0wbXdpw0bnM+YdlEm5ffSTpNIfgHeaa7Dtb801FtA71ZlH7A6TaI
SIQuUST9EKmv7xrJyx0W1pGoPOLw5T029aTjnICSLdtV9bLwysrLhIYG5bnPq78B
cS+jZHFGzD7PUVGQD01nOQIDAQABo2MwYTAdBgNVHQ4EFgQUIuNsB+oTOC9rLoxL
yzNP7vJUV08wHwYDVR0jBBgwFoAUIuNsB+oTOC9rLoxLyzNP7vJUV08wDwYDVR0T
AQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQADggIBAHfg
z5pMNUAKdMzK1aS1EDdK9yKz4qicILz5czSLj1mC7HKDRy8cVADUxEICis++CsCu
rYOvyCVergHQLREcxPq4rc5Nq1uj6J6649NEeh4WazOOjL4ZfQ1jVznMbGy+fJm3
3Hoelv6jWRG9iqeJZja7/1s6YC6bWymI/OY1e4wUKeNHAo+Vger7MlHV+RuabaX+
hSJ8bJAM59NCM7AgMTQpJCncrcdLeceYniGy5Q/qt2b5mJkQVkIdy4TPGGB+AXDJ
D0q3I/JDRkDUFNFdeW0js7fHdsvCR7O3tJy5zIgEV/o/BCkmJVtuwPYOrw/yOlKj
TY/U7ATAx9VFF6/vYEOMYSmrZlFX+98L6nJtwDqfLB5VTltqZ4H/KBxGE3IRSt9l
FXy40U+LnXzhhW+7VBAvyYX8GEXhHkKU8Gqk1xitrqfBXY74xKgyUSTolFSfFVgj
mcM/X4K45bka+qpkj7Kfv/8D4j6aZekwhN2ly6hhC1SmQ8qjMjpG/mrWOSSHZFmf
ybu9iD2AYHeIOkshIl6xYIa++Q/00/vs46IzAbQyriOi0XxlSMMVtPx0Q3isp+ji
n8Mq9eOuxYOEQ4of8twUkUDd528iwGtEdwf0Q01UyT84S62N8AySl1ZBKXJz6W4F
UhWfa/HQYOAPDdEjNgnVwLI23b8t0TozyCWw7q8h
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIEjzCCA3egAwIBAgIQe55B/ALCKJDZtdNT8kD6hTANBgkqhkiG9w0BAQsFADBM
MSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEGA1UEChMKR2xv
YmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0yMjAxMjYxMjAwMDBaFw0y
NTAxMjYwMDAwMDBaMFgxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9iYWxTaWdu
IG52LXNhMS4wLAYDVQQDEyVHbG9iYWxTaWduIEF0bGFzIFIzIE9WIFRMUyBDQSAy
MDIyIFEyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmGmg1LW9b7Lf
8zDD83yBDTEkt+FOxKJZqF4veWc5KZsQj9HfnUS2e5nj/E+JImlGPsQuoiosLuXD
BVBNAMcUFa11buFMGMeEMwiTmCXoXRrXQmH0qjpOfKgYc5gHG3BsRGaRrf7VR4eg
ofNMG9wUBw4/g/TT7+bQJdA4NfE7Y4d5gEryZiBGB/swaX6Jp/8MF4TgUmOWmalK
dZCKyb4sPGQFRTtElk67F7vU+wdGcrcOx1tDcIB0ncjLPMnaFicagl+daWGsKqTh
counQb6QJtYHa91KvCfKWocMxQ7OIbB5UARLPmC4CJ1/f8YFm35ebfzAeULYdGXu
jE9CLor0OwIDAQABo4IBXzCCAVswDgYDVR0PAQH/BAQDAgGGMB0GA1UdJQQWMBQG
CCsGAQUFBwMBBggrBgEFBQcDAjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQW
BBSH5Zq7a7B/t95GfJWkDBpA8HHqdjAfBgNVHSMEGDAWgBSP8Et/qC5FJK5NUPpj
move4t0bvDB7BggrBgEFBQcBAQRvMG0wLgYIKwYBBQUHMAGGImh0dHA6Ly9vY3Nw
Mi5nbG9iYWxzaWduLmNvbS9yb290cjMwOwYIKwYBBQUHMAKGL2h0dHA6Ly9zZWN1
cmUuZ2xvYmFsc2lnbi5jb20vY2FjZXJ0L3Jvb3QtcjMuY3J0MDYGA1UdHwQvMC0w
K6ApoCeGJWh0dHA6Ly9jcmwuZ2xvYmFsc2lnbi5jb20vcm9vdC1yMy5jcmwwIQYD
VR0gBBowGDAIBgZngQwBAgIwDAYKKwYBBAGgMgoBAjANBgkqhkiG9w0BAQsFAAOC
AQEAKRic9/f+nmhQU/wz04APZLjgG5OgsuUOyUEZjKVhNGDwxGTvKhyXGGAMW2B/
3bRi+aElpXwoxu3pL6fkElbX3B0BeS5LoDtxkyiVEBMZ8m+sXbocwlPyxrPbX6mY
0rVIvnuUeBH8X0L5IwfpNVvKnBIilTbcebfHyXkPezGwz7E1yhUULjJFm2bt0SdX
y+4X/WeiiYIv+fTVgZZgl+/2MKIsu/qdBJc3f3TvJ8nz+Eax1zgZmww+RSQWeOj3
15Iw6Z5FX+NwzY/Ab+9PosR5UosSeq+9HhtaxZttXG1nVh+avYPGYddWmiMT90J5
ZgKnO/Fx2hBgTxhOTMYaD312kg==
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4G
A1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjMxEzARBgNVBAoTCkdsb2JhbFNp
Z24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDkwMzE4MTAwMDAwWhcNMjkwMzE4
MTAwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEG
A1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjCCASIwDQYJKoZI
hvcNAQEBBQADggEPADCCAQoCggEBAMwldpB5BngiFvXAg7aEyiie/QV2EcWtiHL8
RgJDx7KKnQRfJMsuS+FggkbhUqsMgUdwbN1k0ev1LKMPgj0MK66X17YUhhB5uzsT
gHeMCOFJ0mpiLx9e+pZo34knlTifBtc+ycsmWQ1z3rDI6SYOgxXG71uL0gRgykmm
KPZpO/bLyCiR5Z2KYVc3rHQU3HTgOu5yLy6c+9C7v/U9AOEGM+iCK65TpjoWc4zd
QQ4gOsC0p6Hpsk+QLjJg6VfLuQSSaGjlOCZgdbKfd/+RFO+uIEn8rUAVSNECMWEZ
XriX7613t2Saer9fwRPvm2L7DWzgVGkWqQPabumDk3F2xmmFghcCAwEAAaNCMEAw
DgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFI/wS3+o
LkUkrk1Q+mOai97i3Ru8MA0GCSqGSIb3DQEBCwUAA4IBAQBLQNvAUKr+yAzv95ZU
RUm7lgAJQayzE4aGKAczymvmdLm6AC2upArT9fHxD4q/c2dKg8dEe3jgr25sbwMp
jjM5RcOO5LlXbKr8EpbsU8Yt5CRsuZRj+9xTaGdWPoO4zzUhw8lo/s7awlOqzJCK
6fBdRoyV3XpYKBovHd7NADdBj+1EbddTKJd+82cEHhXXipa0095MJ6RMG3NzdvQX
mcIfeg7jLQitChws/zyrVQ4PkX4268NXSb7hLi18YIvDQVETI53O9zJrlAGomecs
Mx86OyXShkDOOyyGeMlhLxS67ttVb9+E7gUJTb0o2HLO02JQZR7rkpeDMdmztcpH
WD9f
-----END CERTIFICATE-----`;t.default={RedisCloudFixed:{ca:r},RedisCloudFlexible:{ca:r}}},96002:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(13122);class n extends i.RedisError{constructor(e,t){super(e),this.lastNodeError=t,Error.captureStackTrace(this,this.constructor)}get name(){return this.constructor.name}}t.default=n,n.defaultMessage="Failed to refresh slots cache."},40126:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(13122);class n extends i.AbortError{constructor(e){super(`Reached the max retries per request limit (which is ${e}). Refer to "maxRetriesPerRequest" option for details.`),Error.captureStackTrace(this,this.constructor)}get name(){return this.constructor.name}}t.default=n},3207:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MaxRetriesPerRequestError=void 0;let i=r(40126);t.MaxRetriesPerRequestError=i.default},13554:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.print=t.ReplyError=t.SentinelIterator=t.SentinelConnector=t.AbstractConnector=t.Pipeline=t.ScanStream=t.Command=t.Cluster=t.Redis=t.default=void 0,t=e.exports=r(90855).default;var i=r(90855);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var n=r(90855);Object.defineProperty(t,"Redis",{enumerable:!0,get:function(){return n.default}});var s=r(42056);Object.defineProperty(t,"Cluster",{enumerable:!0,get:function(){return s.default}});var a=r(12986);Object.defineProperty(t,"Command",{enumerable:!0,get:function(){return a.default}});var o=r(44e3);Object.defineProperty(t,"ScanStream",{enumerable:!0,get:function(){return o.default}});var l=r(15950);Object.defineProperty(t,"Pipeline",{enumerable:!0,get:function(){return l.default}});var d=r(54847);Object.defineProperty(t,"AbstractConnector",{enumerable:!0,get:function(){return d.default}});var c=r(12902);Object.defineProperty(t,"SentinelConnector",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"SentinelIterator",{enumerable:!0,get:function(){return c.SentinelIterator}}),t.ReplyError=r(13122).ReplyError,Object.defineProperty(t,"Promise",{get:()=>(console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used."),Promise),set(e){console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used.")}}),t.print=function(e,t){e?console.log("Error: "+e):console.log("Reply: "+t)}},76439:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_REDIS_OPTIONS=void 0,t.DEFAULT_REDIS_OPTIONS={port:6379,host:"localhost",family:0,connectTimeout:1e4,disconnectTimeout:2e3,retryStrategy:function(e){return Math.min(50*e,2e3)},keepAlive:0,noDelay:!0,connectionName:null,disableClientInfo:!1,clientInfoTag:void 0,sentinels:null,name:null,role:"master",sentinelRetryStrategy:function(e){return Math.min(10*e,1e3)},sentinelReconnectStrategy:function(){return 6e4},natMap:null,enableTLSForSentinelMode:!1,updateSentinels:!0,failoverDetector:!1,username:null,password:null,db:0,enableOfflineQueue:!0,enableReadyCheck:!0,autoResubscribe:!0,autoResendUnfulfilledCommands:!0,lazyConnect:!1,keyPrefix:"",reconnectOnError:null,readOnly:!1,stringNumbers:!1,maxRetriesPerRequest:20,maxLoadingRetryTime:1e4,enableAutoPipelining:!1,autoPipeliningIgnoredCommands:[],sentinelMaxConnections:10,blockingTimeoutGrace:100}},75890:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.readyHandler=t.errorHandler=t.closeHandler=t.connectHandler=void 0;let i=r(13122),n=r(12986),s=r(3207),a=r(13505),o=r(39830),l=(0,a.Debug)("connection");function d(e){let t=new i.AbortError("Command aborted due to connection close");return t.command={name:e.name,args:e.args},t}t.connectHandler=function(e){return function(){var r;e.setStatus("connect"),e.resetCommandQueue();let i=!1,{connectionEpoch:n}=e;e.condition.auth&&e.auth(e.condition.auth,function(t){n===e.connectionEpoch&&t&&(-1!==t.message.indexOf("no password is set")?console.warn("[WARN] Redis server does not require a password, but a password was supplied."):-1!==t.message.indexOf("without any password configured for the default user")?console.warn("[WARN] This Redis server's `default` user does not require a password, but a password was supplied"):-1!==t.message.indexOf("wrong number of arguments for 'auth' command")?console.warn("[ERROR] The server returned \"wrong number of arguments for 'auth' command\". You are probably passing both username and password to Redis version 5 or below. You should only pass the 'password' option for Redis version 5 and under."):(i=!0,e.recoverFromFatalError(t,t)))}),e.condition.select&&e.select(e.condition.select).catch(t=>{e.silentEmit("error",t)}),new o.default(e,{stringNumbers:e.options.stringNumbers});let s=[];e.options.connectionName&&(l("set the connection name [%s]",e.options.connectionName),s.push(e.client("setname",e.options.connectionName).catch(a.noop))),e.options.disableClientInfo||(l("set the client info"),s.push((0,a.getPackageMeta)().then(t=>e.client("SETINFO","LIB-VER",t.version).catch(a.noop)).catch(a.noop)),s.push(e.client("SETINFO","LIB-NAME",(null===(r=e.options)||void 0===r?void 0:r.clientInfoTag)?`ioredis(${e.options.clientInfoTag})`:"ioredis").catch(a.noop))),Promise.all(s).catch(a.noop).finally(()=>{e.options.enableReadyCheck||t.readyHandler(e)(),e.options.enableReadyCheck&&e._readyCheck(function(r,s){n===e.connectionEpoch&&(r?i||e.recoverFromFatalError(Error("Ready check failed: "+r.message),r):e.connector.check(s)?t.readyHandler(e)():e.disconnect(!0))})})}},t.closeHandler=function(e){return function(){let r=e.status;if(e.setStatus("close"),e.commandQueue.length&&function(e){var t;let r=0;for(let i=0;i<e.length;){let n=null===(t=e.peekAt(i))||void 0===t?void 0:t.command,s=n.pipelineIndex;if((void 0===s||0===s)&&(r=0),void 0!==s&&s!==r++){e.remove(i,1),n.reject(d(n));continue}i++}}(e.commandQueue),e.offlineQueue.length&&function(e){var t;for(let r=0;r<e.length;){let i=null===(t=e.peekAt(r))||void 0===t?void 0:t.command;if("multi"===i.name)break;if("exec"===i.name){e.remove(r,1),i.reject(d(i));break}i.inTransaction?(e.remove(r,1),i.reject(d(i))):r++}}(e.offlineQueue),"ready"===r&&(e.prevCondition||(e.prevCondition=e.condition),e.commandQueue.length&&(e.prevCommandQueue=e.commandQueue)),e.manuallyClosing)return e.manuallyClosing=!1,l("skip reconnecting since the connection is manually closed."),t();if("function"!=typeof e.options.retryStrategy)return l("skip reconnecting because `retryStrategy` is not a function"),t();let i=e.options.retryStrategy(++e.retryAttempts);if("number"!=typeof i)return l("skip reconnecting because `retryStrategy` doesn't return a number"),t();l("reconnect in %sms",i),e.setStatus("reconnecting",i),e.reconnectTimeout=setTimeout(function(){e.reconnectTimeout=null,e.connect().catch(a.noop)},i);let{maxRetriesPerRequest:n}=e.options;"number"==typeof n&&(n<0?l("maxRetriesPerRequest is negative, ignoring..."):0==e.retryAttempts%(n+1)&&(l("reach maxRetriesPerRequest limitation, flushing command queue..."),e.flushQueue(new s.MaxRetriesPerRequestError(n))))};function t(){e.setStatus("end"),e.flushQueue(Error(a.CONNECTION_CLOSED_ERROR_MSG))}},t.errorHandler=function(e){return function(t){l("error: %s",t),e.silentEmit("error",t)}},t.readyHandler=function(e){return function(){if(e.setStatus("ready"),e.retryAttempts=0,e.options.monitor){e.call("monitor").then(()=>e.setStatus("monitoring"),t=>e.emit("error",t));let{sendCommand:t}=e;e.sendCommand=function(r){return n.default.checkFlag("VALID_IN_MONITOR_MODE",r.name)?t.call(e,r):(r.reject(Error("Connection is in monitoring mode, can't process commands.")),r.promise)},e.once("close",function(){delete e.sendCommand});return}let t=e.prevCondition?e.prevCondition.select:e.condition.select;if(e.options.readOnly&&(l("set the connection to readonly mode"),e.readonly().catch(a.noop)),e.prevCondition){let r=e.prevCondition;if(e.prevCondition=null,r.subscriber&&e.options.autoResubscribe){e.condition.select!==t&&(l("connect to db [%d]",t),e.select(t));let i=r.subscriber.channels("subscribe");i.length&&(l("subscribe %d channels",i.length),e.subscribe(i));let n=r.subscriber.channels("psubscribe");n.length&&(l("psubscribe %d channels",n.length),e.psubscribe(n));let s=r.subscriber.channels("ssubscribe");if(s.length)for(let t of(l("ssubscribe %s",s.length),s))e.ssubscribe(t)}}if(e.prevCommandQueue){if(e.options.autoResendUnfulfilledCommands)for(l("resend %d unfulfilled commands",e.prevCommandQueue.length);e.prevCommandQueue.length>0;){let t=e.prevCommandQueue.shift();t.select!==e.condition.select&&"select"!==t.command.name&&e.select(t.select),e.sendCommand(t.command,t.stream)}else e.prevCommandQueue=null}if(e.offlineQueue.length){l("send %d commands in offline queue",e.offlineQueue.length);let t=e.offlineQueue;for(e.resetOfflineQueue();t.length>0;){let r=t.shift();r.select!==e.condition.select&&"select"!==r.command.name&&e.select(r.select),e.sendCommand(r.command,r.stream)}}e.condition.select!==t&&(l("connect to db [%d]",t),e.select(t))}}},76383:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addTransactionSupport=void 0;let i=r(13505),n=r(83499),s=r(15950);t.addTransactionSupport=function(e){e.pipeline=function(e){let t=new s.default(this);return Array.isArray(e)&&t.addBatch(e),t};let{multi:t}=e;e.multi=function(e,r){if(void 0!==r||Array.isArray(e)||(r=e,e=null),r&&!1===r.pipeline)return t.call(this);let a=new s.default(this);a.multi(),Array.isArray(e)&&a.addBatch(e);let o=a.exec;a.exec=function(e){if(this.isCluster&&!this.redis.slots.length)return"wait"===this.redis.status&&this.redis.connect().catch(i.noop),(0,n.default)(new Promise((e,t)=>{this.redis.delayUntilReady(r=>{if(r){t(r);return}this.exec(a).then(e,t)})}),e);if(this._transactions>0&&o.call(a),this.nodeifiedPromise)return o.call(a);let t=o.call(a);return(0,n.default)(t.then(function(e){let t=e[e.length-1];if(void 0===t)throw Error("Pipeline cannot be used to send any commands when the `exec()` has been called on it.");if(t[0]){t[0].previousErrors=[];for(let r=0;r<e.length-1;++r)e[r][0]&&t[0].previousErrors.push(e[r][0]);throw t[0]}return(0,i.wrapMultiResult)(t[1])}),e)};let{execBuffer:l}=a;return a.execBuffer=function(e){return this._transactions>0&&l.call(a),a.exec(e)},a};let{exec:r}=e;e.exec=function(e){return(0,n.default)(r.call(this).then(function(e){return Array.isArray(e)&&(e=(0,i.wrapMultiResult)(e)),e}),e)}}},52430:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(22205),n=r(77346),s=r(12986),a=r(55600);class o{constructor(){this.options={},this.scriptsSet={},this.addedBuiltinSet=new Set}getBuiltinCommands(){return l.slice(0)}createBuiltinCommand(e){return{string:d(null,e,"utf8"),buffer:d(null,e,null)}}addBuiltinCommand(e){this.addedBuiltinSet.add(e),this[e]=d(e,e,"utf8"),this[e+"Buffer"]=d(e+"Buffer",e,null)}defineCommand(e,t){let r=new a.default(t.lua,t.numberOfKeys,this.options.keyPrefix,t.readOnly);this.scriptsSet[e]=r,this[e]=c(e,e,r,"utf8"),this[e+"Buffer"]=c(e+"Buffer",e,r,null)}sendCommand(e,t,r){throw Error('"sendCommand" is not implemented')}}let l=i.list.filter(e=>"monitor"!==e);function d(e,t,r){return void 0===r&&(r=t,t=null),function(...i){let a=t||i.shift(),o=i[i.length-1];"function"==typeof o?i.pop():o=void 0;let l={errorStack:this.options.showFriendlyErrorStack?Error():void 0,keyPrefix:this.options.keyPrefix,replyEncoding:r};return(0,n.shouldUseAutoPipelining)(this,e,a)?(0,n.executeWithAutoPipelining)(this,e,a,i,o):this.sendCommand(new s.default(a,i,l,o))}}function c(e,t,r,i){return function(...s){let a="function"==typeof s[s.length-1]?s.pop():void 0,o={replyEncoding:i};return(this.options.showFriendlyErrorStack&&(o.errorStack=Error()),(0,n.shouldUseAutoPipelining)(this,e,t))?(0,n.executeWithAutoPipelining)(this,e,t,s,a):r.execute(this,s,o,a)}}l.push("sentinel"),l.forEach(function(e){o.prototype[e]=d(e,e,"utf8"),o.prototype[e+"Buffer"]=d(e+"Buffer",e,null)}),o.prototype.call=d("call","utf8"),o.prototype.callBuffer=d("callBuffer",null),o.prototype.send_command=o.prototype.call,t.default=o},63260:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){Object.getOwnPropertyNames(t.prototype).forEach(r=>{Object.defineProperty(e.prototype,r,Object.getOwnPropertyDescriptor(t.prototype,r))})}},73527:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseBlockOption=t.parseSecondsArgument=void 0;let r=e=>{if("number"==typeof e)return e;if(Buffer.isBuffer(e))return r(e.toString());if("string"==typeof e){let t=Number(e);return Number.isFinite(t)?t:void 0}},i=e=>"string"==typeof e?e:Buffer.isBuffer(e)?e.toString():void 0;t.parseSecondsArgument=e=>{let t=r(e);return void 0===t?void 0:t<=0?0:1e3*t},t.parseBlockOption=e=>{for(let t=0;t<e.length;t++){let n=i(e[t]);if(n&&"block"===n.toLowerCase()){let i=r(e[t+1]);if(void 0===i)return;if(i<=0)return 0;return i}}return null}},20523:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.genRedactedString=t.getStringValue=t.MAX_ARGUMENT_LENGTH=void 0;let i=r(19092);function n(e){if(null!==e)switch(typeof e){case"boolean":case"number":return;case"object":if(Buffer.isBuffer(e))return e.toString("hex");if(Array.isArray(e))return e.join(",");try{return JSON.stringify(e)}catch(e){return}case"string":return e}}function s(e,t){let{length:r}=e;return r<=t?e:e.slice(0,t)+' ... <REDACTED full-length="'+r+'">'}t.MAX_ARGUMENT_LENGTH=200,t.getStringValue=n,t.genRedactedString=s,t.default=function(e){let t=(0,i.default)(`ioredis:${e}`);function r(...e){if(t.enabled){for(let t=1;t<e.length;t++){let r=n(e[t]);"string"==typeof r&&r.length>200&&(e[t]=s(r,200))}return t.apply(null,e)}}return Object.defineProperties(r,{namespace:{get:()=>t.namespace},enabled:{get:()=>t.enabled},destroy:{get:()=>t.destroy},log:{get:()=>t.log,set(e){t.log=e}}}),r}},13505:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.noop=t.defaults=t.Debug=t.getPackageMeta=t.zipMap=t.CONNECTION_CLOSED_ERROR_MSG=t.shuffle=t.sample=t.resolveTLSProfile=t.parseURL=t.optimizeErrorStack=t.toArg=t.convertMapToArray=t.convertObjectToArray=t.timeout=t.packObject=t.isInt=t.wrapMultiResult=t.convertBufferToString=void 0;let i=r(57147),n=r(71017),s=r(57310),a=r(86641);Object.defineProperty(t,"defaults",{enumerable:!0,get:function(){return a.defaults}}),Object.defineProperty(t,"noop",{enumerable:!0,get:function(){return a.noop}});let o=r(20523);t.Debug=o.default;let l=r(83501);function d(e){let t=parseFloat(e);return!isNaN(e)&&(0|t)===t}t.convertBufferToString=function e(t,r){if(t instanceof Buffer)return t.toString(r);if(Array.isArray(t)){let i=t.length,n=Array(i);for(let s=0;s<i;++s)n[s]=t[s]instanceof Buffer&&"utf8"===r?t[s].toString():e(t[s],r);return n}return t},t.wrapMultiResult=function(e){if(!e)return null;let t=[],r=e.length;for(let i=0;i<r;++i){let r=e[i];r instanceof Error?t.push([r]):t.push([null,r])}return t},t.isInt=d,t.packObject=function(e){let t={},r=e.length;for(let i=1;i<r;i+=2)t[e[i-1]]=e[i];return t},t.timeout=function(e,t){let r=null,i=function(){r&&(clearTimeout(r),r=null,e.apply(this,arguments))};return r=setTimeout(i,t,Error("timeout")),i},t.convertObjectToArray=function(e){let t=[],r=Object.keys(e);for(let i=0,n=r.length;i<n;i++)t.push(r[i],e[r[i]]);return t},t.convertMapToArray=function(e){let t=[],r=0;return e.forEach(function(e,i){t[r]=i,t[r+1]=e,r+=2}),t},t.toArg=function(e){return null==e?"":String(e)},t.optimizeErrorStack=function(e,t,r){let i;let n=t.split("\n"),s="";for(i=1;i<n.length&&-1!==n[i].indexOf(r);++i);for(let e=i;e<n.length;++e)s+="\n"+n[e];if(e.stack){let t=e.stack.indexOf("\n");e.stack=e.stack.slice(0,t)+s}return e},t.parseURL=function(e){if(d(e))return{port:e};let t=(0,s.parse)(e,!0,!0);t.slashes||"/"===e[0]||(e="//"+e,t=(0,s.parse)(e,!0,!0));let r=t.query||{},i={};if(t.auth){let e=t.auth.indexOf(":");i.username=-1===e?t.auth:t.auth.slice(0,e),i.password=-1===e?"":t.auth.slice(e+1)}if(t.pathname&&("redis:"===t.protocol||"rediss:"===t.protocol?t.pathname.length>1&&(i.db=t.pathname.slice(1)):i.path=t.pathname),t.host&&(i.host=t.hostname),t.port&&(i.port=t.port),"string"==typeof r.family){let e=Number.parseInt(r.family,10);Number.isNaN(e)||(i.family=e)}return(0,a.defaults)(i,r),i},t.resolveTLSProfile=function(e){let t=null==e?void 0:e.tls;"string"==typeof t&&(t={profile:t});let r=l.default[null==t?void 0:t.profile];return r&&(t=Object.assign({},r,t),delete t.profile,e=Object.assign({},e,{tls:t})),e},t.sample=function(e,t=0){let r=e.length;return t>=r?null:e[t+Math.floor(Math.random()*(r-t))]},t.shuffle=function(e){let t=e.length;for(;t>0;){let r=Math.floor(Math.random()*t);t--,[e[t],e[r]]=[e[r],e[t]]}return e},t.CONNECTION_CLOSED_ERROR_MSG="Connection is closed.",t.zipMap=function(e,t){let r=new Map;return e.forEach((e,i)=>{r.set(e,t[i])}),r};let c=null;async function u(){if(c)return c;try{let e=(0,n.resolve)(__dirname,"..","..","package.json"),t=await i.promises.readFile(e,"utf8");return c={version:JSON.parse(t).version}}catch(e){return c={version:"error-fetching-version"}}}t.getPackageMeta=u},86641:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isArguments=t.defaults=t.noop=void 0;let i=r(73283);t.defaults=i;let n=r(1325);t.isArguments=n,t.noop=function(){}},72300:(e,t,r)=>{"use strict";let i=Symbol("SemVer ANY");class n{static get ANY(){return i}constructor(e,t){if(t=s(t),e instanceof n){if(!!t.loose===e.loose)return e;e=e.value}d("comparator",e=e.trim().split(/\s+/).join(" "),t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===i?this.value="":this.value=this.operator+this.semver.version,d("comp",this)}parse(e){let t=this.options.loose?a[o.COMPARATORLOOSE]:a[o.COMPARATOR],r=e.match(t);if(!r)throw TypeError(`Invalid comparator: ${e}`);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new c(r[2],this.options.loose):this.semver=i}toString(){return this.value}test(e){if(d("Comparator.test",e,this.options.loose),this.semver===i||e===i)return!0;if("string"==typeof e)try{e=new c(e,this.options)}catch(e){return!1}return l(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof n))throw TypeError("a Comparator is required");return""===this.operator?""===this.value||new u(e.value,t).test(this.value):""===e.operator?""===e.value||new u(this.value,t).test(e.semver):!((t=s(t)).includePrerelease&&("<0.0.0-0"===this.value||"<0.0.0-0"===e.value)||!t.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0")))&&!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||l(this.semver,"<",e.semver,t)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||l(this.semver,">",e.semver,t)&&this.operator.startsWith("<")&&e.operator.startsWith(">"))}}e.exports=n;let s=r(38273),{safeRe:a,t:o}=r(88531),l=r(25475),d=r(18995),c=r(54061),u=r(53112)},53112:(e,t,r)=>{"use strict";let i=/\s+/g;class n{constructor(e,t){if(t=a(t),e instanceof n){if(!!t.loose===e.loose&&!!t.includePrerelease===e.includePrerelease)return e;return new n(e.raw,t)}if(e instanceof o)return this.raw=e.value,this.set=[[e]],this.formatted=void 0,this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e.trim().replace(i," "),this.set=this.raw.split("||").map(e=>this.parseRange(e.trim())).filter(e=>e.length),!this.set.length)throw TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let e=this.set[0];if(this.set=this.set.filter(e=>!S(e[0])),0===this.set.length)this.set=[e];else if(this.set.length>1){for(let e of this.set)if(1===e.length&&v(e[0])){this.set=[e];break}}}this.formatted=void 0}get range(){if(void 0===this.formatted){this.formatted="";for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+="||");let t=this.set[e];for(let e=0;e<t.length;e++)e>0&&(this.formatted+=" "),this.formatted+=t[e].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){e=e.replace(g,"");let t=((this.options.includePrerelease&&f)|(this.options.loose&&b))+":"+e,r=s.get(t);if(r)return r;let i=this.options.loose,n=i?c[p.HYPHENRANGELOOSE]:c[p.HYPHENRANGE];l("hyphen replace",e=e.replace(n,O(this.options.includePrerelease))),l("comparator trim",e=e.replace(c[p.COMPARATORTRIM],h)),l("tilde trim",e=e.replace(c[p.TILDETRIM],y)),l("caret trim",e=e.replace(c[p.CARETTRIM],m));let a=e.split(" ").map(e=>k(e,this.options)).join(" ").split(/\s+/).map(e=>D(e,this.options));i&&(a=a.filter(e=>(l("loose invalid filter",e,this.options),!!e.match(c[p.COMPARATORLOOSE])))),l("range list",a);let d=new Map;for(let e of a.map(e=>new o(e,this.options))){if(S(e))return[e];d.set(e.value,e)}d.size>1&&d.has("")&&d.delete("");let u=[...d.values()];return s.set(t,u),u}intersects(e,t){if(!(e instanceof n))throw TypeError("a Range is required");return this.set.some(r=>K(r,t)&&e.set.some(e=>K(e,t)&&r.every(r=>e.every(e=>r.intersects(e,t)))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new d(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(R(this.set[t],e,this.options))return!0;return!1}}e.exports=n;let s=new(r(15457)),a=r(38273),o=r(72300),l=r(18995),d=r(54061),{safeRe:c,src:u,t:p,comparatorTrimReplace:h,tildeTrimReplace:y,caretTrimReplace:m}=r(88531),{FLAG_INCLUDE_PRERELEASE:f,FLAG_LOOSE:b}=r(57868),g=RegExp(u[p.BUILD],"g"),S=e=>"<0.0.0-0"===e.value,v=e=>""===e.value,K=(e,t)=>{let r=!0,i=e.slice(),n=i.pop();for(;r&&i.length;)r=i.every(e=>n.intersects(e,t)),n=i.pop();return r},k=(e,t)=>(l("comp",e=e.replace(c[p.BUILD],""),t),l("caret",e=j(e,t)),l("tildes",e=I(e,t)),l("xrange",e=A(e,t)),l("stars",e=C(e,t)),e),E=e=>!e||"x"===e.toLowerCase()||"*"===e,I=(e,t)=>e.trim().split(/\s+/).map(e=>w(e,t)).join(" "),w=(e,t)=>{let r=t.loose?c[p.TILDELOOSE]:c[p.TILDE];return e.replace(r,(t,r,i,n,s)=>{let a;return l("tilde",e,t,r,i,n,s),E(r)?a="":E(i)?a=`>=${r}.0.0 <${+r+1}.0.0-0`:E(n)?a=`>=${r}.${i}.0 <${r}.${+i+1}.0-0`:s?(l("replaceTilde pr",s),a=`>=${r}.${i}.${n}-${s} <${r}.${+i+1}.0-0`):a=`>=${r}.${i}.${n} <${r}.${+i+1}.0-0`,l("tilde return",a),a})},j=(e,t)=>e.trim().split(/\s+/).map(e=>x(e,t)).join(" "),x=(e,t)=>{l("caret",e,t);let r=t.loose?c[p.CARETLOOSE]:c[p.CARET],i=t.includePrerelease?"-0":"";return e.replace(r,(t,r,n,s,a)=>{let o;return l("caret",e,t,r,n,s,a),E(r)?o="":E(n)?o=`>=${r}.0.0${i} <${+r+1}.0.0-0`:E(s)?o="0"===r?`>=${r}.${n}.0${i} <${r}.${+n+1}.0-0`:`>=${r}.${n}.0${i} <${+r+1}.0.0-0`:a?(l("replaceCaret pr",a),o="0"===r?"0"===n?`>=${r}.${n}.${s}-${a} <${r}.${n}.${+s+1}-0`:`>=${r}.${n}.${s}-${a} <${r}.${+n+1}.0-0`:`>=${r}.${n}.${s}-${a} <${+r+1}.0.0-0`):(l("no pr"),o="0"===r?"0"===n?`>=${r}.${n}.${s}${i} <${r}.${n}.${+s+1}-0`:`>=${r}.${n}.${s}${i} <${r}.${+n+1}.0-0`:`>=${r}.${n}.${s} <${+r+1}.0.0-0`),l("caret return",o),o})},A=(e,t)=>(l("replaceXRanges",e,t),e.split(/\s+/).map(e=>T(e,t)).join(" ")),T=(e,t)=>{e=e.trim();let r=t.loose?c[p.XRANGELOOSE]:c[p.XRANGE];return e.replace(r,(r,i,n,s,a,o)=>{l("xRange",e,r,i,n,s,a,o);let d=E(n),c=d||E(s),u=c||E(a);return"="===i&&u&&(i=""),o=t.includePrerelease?"-0":"",d?r=">"===i||"<"===i?"<0.0.0-0":"*":i&&u?(c&&(s=0),a=0,">"===i?(i=">=",c?(n=+n+1,s=0):s=+s+1,a=0):"<="===i&&(i="<",c?n=+n+1:s=+s+1),"<"===i&&(o="-0"),r=`${i+n}.${s}.${a}${o}`):c?r=`>=${n}.0.0${o} <${+n+1}.0.0-0`:u&&(r=`>=${n}.${s}.0${o} <${n}.${+s+1}.0-0`),l("xRange return",r),r})},C=(e,t)=>(l("replaceStars",e,t),e.trim().replace(c[p.STAR],"")),D=(e,t)=>(l("replaceGTE0",e,t),e.trim().replace(c[t.includePrerelease?p.GTE0PRE:p.GTE0],"")),O=e=>(t,r,i,n,s,a,o,l,d,c,u,p)=>(r=E(i)?"":E(n)?`>=${i}.0.0${e?"-0":""}`:E(s)?`>=${i}.${n}.0${e?"-0":""}`:a?`>=${r}`:`>=${r}${e?"-0":""}`,l=E(d)?"":E(c)?`<${+d+1}.0.0-0`:E(u)?`<${d}.${+c+1}.0-0`:p?`<=${d}.${c}.${u}-${p}`:e?`<${d}.${c}.${+u+1}-0`:`<=${l}`,`${r} ${l}`.trim()),R=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(l(e[r].semver),e[r].semver!==o.ANY&&e[r].semver.prerelease.length>0){let i=e[r].semver;if(i.major===t.major&&i.minor===t.minor&&i.patch===t.patch)return!0}return!1}return!0}},54061:(e,t,r)=>{"use strict";let i=r(18995),{MAX_LENGTH:n,MAX_SAFE_INTEGER:s}=r(57868),{safeRe:a,t:o}=r(88531),l=r(38273),{compareIdentifiers:d}=r(42755);class c{constructor(e,t){if(t=l(t),e instanceof c){if(!!t.loose===e.loose&&!!t.includePrerelease===e.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>n)throw TypeError(`version is longer than ${n} characters`);i("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;let r=e.trim().match(t.loose?a[o.LOOSE]:a[o.FULL]);if(!r)throw TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>s||this.major<0)throw TypeError("Invalid major version");if(this.minor>s||this.minor<0)throw TypeError("Invalid minor version");if(this.patch>s||this.patch<0)throw TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(e=>{if(/^[0-9]+$/.test(e)){let t=+e;if(t>=0&&t<s)return t}return e}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(i("SemVer.compare",this.version,this.options,e),!(e instanceof c)){if("string"==typeof e&&e===this.version)return 0;e=new c(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return(e instanceof c||(e=new c(e,this.options)),this.major<e.major)?-1:this.major>e.major?1:this.minor<e.minor?-1:this.minor>e.minor?1:this.patch<e.patch?-1:this.patch>e.patch?1:0}comparePre(e){if(e instanceof c||(e=new c(e,this.options)),this.prerelease.length&&!e.prerelease.length)return -1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{let r=this.prerelease[t],n=e.prerelease[t];if(i("prerelease compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return -1;if(r===n)continue;else return d(r,n)}while(++t)}compareBuild(e){e instanceof c||(e=new c(e,this.options));let t=0;do{let r=this.build[t],n=e.build[t];if(i("build compare",t,r,n),void 0===r&&void 0===n)return 0;if(void 0===n)return 1;if(void 0===r)return -1;if(r===n)continue;else return d(r,n)}while(++t)}inc(e,t,r){if(e.startsWith("pre")){if(!t&&!1===r)throw Error("invalid increment argument: identifier is empty");if(t){let e=`-${t}`.match(this.options.loose?a[o.PRERELEASELOOSE]:a[o.PRERELEASE]);if(!e||e[1]!==t)throw Error(`invalid identifier: ${t}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t,r),this.inc("pre",t,r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t,r),this.inc("pre",t,r);break;case"release":if(0===this.prerelease.length)throw Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(0!==this.minor||0!==this.patch||0===this.prerelease.length)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(0!==this.patch||0===this.prerelease.length)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":{let e=Number(r)?1:0;if(0===this.prerelease.length)this.prerelease=[e];else{let i=this.prerelease.length;for(;--i>=0;)"number"==typeof this.prerelease[i]&&(this.prerelease[i]++,i=-2);if(-1===i){if(t===this.prerelease.join(".")&&!1===r)throw Error("invalid increment argument: identifier already exists");this.prerelease.push(e)}}if(t){let i=[t,e];!1===r&&(i=[t]),0===d(this.prerelease[0],t)?isNaN(this.prerelease[1])&&(this.prerelease=i):this.prerelease=i}break}default:throw Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}e.exports=c},62693:(e,t,r)=>{"use strict";let i=r(48807);e.exports=(e,t)=>{let r=i(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}},25475:(e,t,r)=>{"use strict";let i=r(26621),n=r(13139),s=r(83651),a=r(58869),o=r(15931),l=r(47249);e.exports=(e,t,r,d)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return i(e,r,d);case"!=":return n(e,r,d);case">":return s(e,r,d);case">=":return a(e,r,d);case"<":return o(e,r,d);case"<=":return l(e,r,d);default:throw TypeError(`Invalid operator: ${t}`)}}},42929:(e,t,r)=>{"use strict";let i=r(54061),n=r(48807),{safeRe:s,t:a}=r(88531);e.exports=(e,t)=>{if(e instanceof i)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let r=null;if((t=t||{}).rtl){let i;let n=t.includePrerelease?s[a.COERCERTLFULL]:s[a.COERCERTL];for(;(i=n.exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&i.index+i[0].length===r.index+r[0].length||(r=i),n.lastIndex=i.index+i[1].length+i[2].length;n.lastIndex=-1}else r=e.match(t.includePrerelease?s[a.COERCEFULL]:s[a.COERCE]);if(null===r)return null;let o=r[2],l=r[3]||"0",d=r[4]||"0",c=t.includePrerelease&&r[5]?`-${r[5]}`:"",u=t.includePrerelease&&r[6]?`+${r[6]}`:"";return n(`${o}.${l}.${d}${c}${u}`,t)}},26944:(e,t,r)=>{"use strict";let i=r(54061);e.exports=(e,t,r)=>{let n=new i(e,r),s=new i(t,r);return n.compare(s)||n.compareBuild(s)}},20162:(e,t,r)=>{"use strict";let i=r(44907);e.exports=(e,t)=>i(e,t,!0)},44907:(e,t,r)=>{"use strict";let i=r(54061);e.exports=(e,t,r)=>new i(e,r).compare(new i(t,r))},89310:(e,t,r)=>{"use strict";let i=r(48807);e.exports=(e,t)=>{let r=i(e,null,!0),n=i(t,null,!0),s=r.compare(n);if(0===s)return null;let a=s>0,o=a?r:n,l=a?n:r,d=!!o.prerelease.length;if(l.prerelease.length&&!d){if(!l.patch&&!l.minor)return"major";if(0===l.compareMain(o))return l.minor&&!l.patch?"minor":"patch"}let c=d?"pre":"";return r.major!==n.major?c+"major":r.minor!==n.minor?c+"minor":r.patch!==n.patch?c+"patch":"prerelease"}},26621:(e,t,r)=>{"use strict";let i=r(44907);e.exports=(e,t,r)=>0===i(e,t,r)},83651:(e,t,r)=>{"use strict";let i=r(44907);e.exports=(e,t,r)=>i(e,t,r)>0},58869:(e,t,r)=>{"use strict";let i=r(44907);e.exports=(e,t,r)=>i(e,t,r)>=0},79257:(e,t,r)=>{"use strict";let i=r(54061);e.exports=(e,t,r,n,s)=>{"string"==typeof r&&(s=n,n=r,r=void 0);try{return new i(e instanceof i?e.version:e,r).inc(t,n,s).version}catch(e){return null}}},15931:(e,t,r)=>{"use strict";let i=r(44907);e.exports=(e,t,r)=>0>i(e,t,r)},47249:(e,t,r)=>{"use strict";let i=r(44907);e.exports=(e,t,r)=>0>=i(e,t,r)},54892:(e,t,r)=>{"use strict";let i=r(54061);e.exports=(e,t)=>new i(e,t).major},43075:(e,t,r)=>{"use strict";let i=r(54061);e.exports=(e,t)=>new i(e,t).minor},13139:(e,t,r)=>{"use strict";let i=r(44907);e.exports=(e,t,r)=>0!==i(e,t,r)},48807:(e,t,r)=>{"use strict";let i=r(54061);e.exports=(e,t,r=!1)=>{if(e instanceof i)return e;try{return new i(e,t)}catch(e){if(!r)return null;throw e}}},41594:(e,t,r)=>{"use strict";let i=r(54061);e.exports=(e,t)=>new i(e,t).patch},90988:(e,t,r)=>{"use strict";let i=r(48807);e.exports=(e,t)=>{let r=i(e,t);return r&&r.prerelease.length?r.prerelease:null}},82961:(e,t,r)=>{"use strict";let i=r(44907);e.exports=(e,t,r)=>i(t,e,r)},50363:(e,t,r)=>{"use strict";let i=r(26944);e.exports=(e,t)=>e.sort((e,r)=>i(r,e,t))},40208:(e,t,r)=>{"use strict";let i=r(53112);e.exports=(e,t,r)=>{try{t=new i(t,r)}catch(e){return!1}return t.test(e)}},58989:(e,t,r)=>{"use strict";let i=r(26944);e.exports=(e,t)=>e.sort((e,r)=>i(e,r,t))},27398:(e,t,r)=>{"use strict";let i=r(48807),n=r(57868),s=r(54061),a=(e,t)=>i(e instanceof s?e.version:e,t),o=(e,t)=>{if(l(t))return e.version;switch(e.prerelease=[],t){case"major":e.minor=0,e.patch=0;break;case"minor":e.patch=0}return e.format()},l=e=>e.startsWith("pre");e.exports=(e,t,r)=>{if(!n.RELEASE_TYPES.includes(t))return null;let i=a(e,r);return i&&o(i,t)}},5503:(e,t,r)=>{"use strict";let i=r(48807);e.exports=(e,t)=>{let r=i(e,t);return r?r.version:null}},34099:(e,t,r)=>{"use strict";let i=r(88531),n=r(57868),s=r(54061),a=r(42755),o=r(48807),l=r(5503),d=r(62693),c=r(79257),u=r(89310),p=r(54892),h=r(43075),y=r(41594),m=r(90988),f=r(44907),b=r(82961),g=r(20162),S=r(26944),v=r(58989),K=r(50363),k=r(83651),E=r(15931),I=r(26621),w=r(13139),j=r(58869),x=r(47249),A=r(25475),T=r(42929),C=r(27398),D=r(72300),O=r(53112),R=r(40208),M=r(52535),N=r(34725),P=r(97235),L=r(42318),J=r(34245),_=r(42076),F=r(88939),G=r(26671),q=r(80128),V=r(39313),B=r(34105);e.exports={parse:o,valid:l,clean:d,inc:c,diff:u,major:p,minor:h,patch:y,prerelease:m,compare:f,rcompare:b,compareLoose:g,compareBuild:S,sort:v,rsort:K,gt:k,lt:E,eq:I,neq:w,gte:j,lte:x,cmp:A,coerce:T,truncate:C,Comparator:D,Range:O,satisfies:R,toComparators:M,maxSatisfying:N,minSatisfying:P,minVersion:L,validRange:J,outside:_,gtr:F,ltr:G,intersects:q,simplifyRange:V,subset:B,SemVer:s,re:i.re,src:i.src,tokens:i.t,SEMVER_SPEC_VERSION:n.SEMVER_SPEC_VERSION,RELEASE_TYPES:n.RELEASE_TYPES,compareIdentifiers:a.compareIdentifiers,rcompareIdentifiers:a.rcompareIdentifiers}},57868:e=>{"use strict";let t=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:16,MAX_SAFE_BUILD_LENGTH:250,MAX_SAFE_INTEGER:t,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:"2.0.0",FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}},18995:e=>{"use strict";let t="object"==typeof process&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=t},42755:e=>{"use strict";let t=/^[0-9]+$/,r=(e,r)=>{if("number"==typeof e&&"number"==typeof r)return e===r?0:e<r?-1:1;let i=t.test(e),n=t.test(r);return i&&n&&(e=+e,r=+r),e===r?0:i&&!n?-1:n&&!i?1:e<r?-1:1};e.exports={compareIdentifiers:r,rcompareIdentifiers:(e,t)=>r(t,e)}},15457:e=>{"use strict";class t{constructor(){this.max=1e3,this.map=new Map}get(e){let t=this.map.get(e);if(void 0!==t)return this.map.delete(e),this.map.set(e,t),t}delete(e){return this.map.delete(e)}set(e,t){if(!this.delete(e)&&void 0!==t){if(this.map.size>=this.max){let e=this.map.keys().next().value;this.delete(e)}this.map.set(e,t)}return this}}e.exports=t},38273:e=>{"use strict";let t=Object.freeze({loose:!0}),r=Object.freeze({});e.exports=e=>e?"object"!=typeof e?t:e:r},88531:(e,t,r)=>{"use strict";let{MAX_SAFE_COMPONENT_LENGTH:i,MAX_SAFE_BUILD_LENGTH:n,MAX_LENGTH:s}=r(57868),a=r(18995),o=(t=e.exports={}).re=[],l=t.safeRe=[],d=t.src=[],c=t.safeSrc=[],u=t.t={},p=0,h="[a-zA-Z0-9-]",y=[["\\s",1],["\\d",s],[h,n]],m=e=>{for(let[t,r]of y)e=e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);return e},f=(e,t,r)=>{let i=m(t),n=p++;a(e,n,t),u[e]=n,d[n]=t,c[n]=i,o[n]=new RegExp(t,r?"g":void 0),l[n]=new RegExp(i,r?"g":void 0)};f("NUMERICIDENTIFIER","0|[1-9]\\d*"),f("NUMERICIDENTIFIERLOOSE","\\d+"),f("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${h}*`),f("MAINVERSION",`(${d[u.NUMERICIDENTIFIER]})\\.(${d[u.NUMERICIDENTIFIER]})\\.(${d[u.NUMERICIDENTIFIER]})`),f("MAINVERSIONLOOSE",`(${d[u.NUMERICIDENTIFIERLOOSE]})\\.(${d[u.NUMERICIDENTIFIERLOOSE]})\\.(${d[u.NUMERICIDENTIFIERLOOSE]})`),f("PRERELEASEIDENTIFIER",`(?:${d[u.NONNUMERICIDENTIFIER]}|${d[u.NUMERICIDENTIFIER]})`),f("PRERELEASEIDENTIFIERLOOSE",`(?:${d[u.NONNUMERICIDENTIFIER]}|${d[u.NUMERICIDENTIFIERLOOSE]})`),f("PRERELEASE",`(?:-(${d[u.PRERELEASEIDENTIFIER]}(?:\\.${d[u.PRERELEASEIDENTIFIER]})*))`),f("PRERELEASELOOSE",`(?:-?(${d[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${d[u.PRERELEASEIDENTIFIERLOOSE]})*))`),f("BUILDIDENTIFIER",`${h}+`),f("BUILD",`(?:\\+(${d[u.BUILDIDENTIFIER]}(?:\\.${d[u.BUILDIDENTIFIER]})*))`),f("FULLPLAIN",`v?${d[u.MAINVERSION]}${d[u.PRERELEASE]}?${d[u.BUILD]}?`),f("FULL",`^${d[u.FULLPLAIN]}$`),f("LOOSEPLAIN",`[v=\\s]*${d[u.MAINVERSIONLOOSE]}${d[u.PRERELEASELOOSE]}?${d[u.BUILD]}?`),f("LOOSE",`^${d[u.LOOSEPLAIN]}$`),f("GTLT","((?:<|>)?=?)"),f("XRANGEIDENTIFIERLOOSE",`${d[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),f("XRANGEIDENTIFIER",`${d[u.NUMERICIDENTIFIER]}|x|X|\\*`),f("XRANGEPLAIN",`[v=\\s]*(${d[u.XRANGEIDENTIFIER]})(?:\\.(${d[u.XRANGEIDENTIFIER]})(?:\\.(${d[u.XRANGEIDENTIFIER]})(?:${d[u.PRERELEASE]})?${d[u.BUILD]}?)?)?`),f("XRANGEPLAINLOOSE",`[v=\\s]*(${d[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${d[u.XRANGEIDENTIFIERLOOSE]})(?:${d[u.PRERELEASELOOSE]})?${d[u.BUILD]}?)?)?`),f("XRANGE",`^${d[u.GTLT]}\\s*${d[u.XRANGEPLAIN]}$`),f("XRANGELOOSE",`^${d[u.GTLT]}\\s*${d[u.XRANGEPLAINLOOSE]}$`),f("COERCEPLAIN",`(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?`),f("COERCE",`${d[u.COERCEPLAIN]}(?:$|[^\\d])`),f("COERCEFULL",d[u.COERCEPLAIN]+`(?:${d[u.PRERELEASE]})?`+`(?:${d[u.BUILD]})?`+"(?:$|[^\\d])"),f("COERCERTL",d[u.COERCE],!0),f("COERCERTLFULL",d[u.COERCEFULL],!0),f("LONETILDE","(?:~>?)"),f("TILDETRIM",`(\\s*)${d[u.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",f("TILDE",`^${d[u.LONETILDE]}${d[u.XRANGEPLAIN]}$`),f("TILDELOOSE",`^${d[u.LONETILDE]}${d[u.XRANGEPLAINLOOSE]}$`),f("LONECARET","(?:\\^)"),f("CARETTRIM",`(\\s*)${d[u.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",f("CARET",`^${d[u.LONECARET]}${d[u.XRANGEPLAIN]}$`),f("CARETLOOSE",`^${d[u.LONECARET]}${d[u.XRANGEPLAINLOOSE]}$`),f("COMPARATORLOOSE",`^${d[u.GTLT]}\\s*(${d[u.LOOSEPLAIN]})$|^$`),f("COMPARATOR",`^${d[u.GTLT]}\\s*(${d[u.FULLPLAIN]})$|^$`),f("COMPARATORTRIM",`(\\s*)${d[u.GTLT]}\\s*(${d[u.LOOSEPLAIN]}|${d[u.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",f("HYPHENRANGE",`^\\s*(${d[u.XRANGEPLAIN]})\\s+-\\s+(${d[u.XRANGEPLAIN]})\\s*$`),f("HYPHENRANGELOOSE",`^\\s*(${d[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${d[u.XRANGEPLAINLOOSE]})\\s*$`),f("STAR","(<|>)?=?\\s*\\*"),f("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),f("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")},88939:(e,t,r)=>{"use strict";let i=r(42076);e.exports=(e,t,r)=>i(e,t,">",r)},80128:(e,t,r)=>{"use strict";let i=r(53112);e.exports=(e,t,r)=>(e=new i(e,r),t=new i(t,r),e.intersects(t,r))},26671:(e,t,r)=>{"use strict";let i=r(42076);e.exports=(e,t,r)=>i(e,t,"<",r)},34725:(e,t,r)=>{"use strict";let i=r(54061),n=r(53112);e.exports=(e,t,r)=>{let s=null,a=null,o=null;try{o=new n(t,r)}catch(e){return null}return e.forEach(e=>{o.test(e)&&(!s||-1===a.compare(e))&&(a=new i(s=e,r))}),s}},97235:(e,t,r)=>{"use strict";let i=r(54061),n=r(53112);e.exports=(e,t,r)=>{let s=null,a=null,o=null;try{o=new n(t,r)}catch(e){return null}return e.forEach(e=>{o.test(e)&&(!s||1===a.compare(e))&&(a=new i(s=e,r))}),s}},42318:(e,t,r)=>{"use strict";let i=r(54061),n=r(53112),s=r(83651);e.exports=(e,t)=>{e=new n(e,t);let r=new i("0.0.0");if(e.test(r)||(r=new i("0.0.0-0"),e.test(r)))return r;r=null;for(let t=0;t<e.set.length;++t){let n=e.set[t],a=null;n.forEach(e=>{let t=new i(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":(!a||s(t,a))&&(a=t);break;case"<":case"<=":break;default:throw Error(`Unexpected operation: ${e.operator}`)}}),a&&(!r||s(r,a))&&(r=a)}return r&&e.test(r)?r:null}},42076:(e,t,r)=>{"use strict";let i=r(54061),n=r(72300),{ANY:s}=n,a=r(53112),o=r(40208),l=r(83651),d=r(15931),c=r(47249),u=r(58869);e.exports=(e,t,r,p)=>{let h,y,m,f,b;switch(e=new i(e,p),t=new a(t,p),r){case">":h=l,y=c,m=d,f=">",b=">=";break;case"<":h=d,y=u,m=l,f="<",b="<=";break;default:throw TypeError('Must provide a hilo val of "<" or ">"')}if(o(e,t,p))return!1;for(let r=0;r<t.set.length;++r){let i=t.set[r],a=null,o=null;if(i.forEach(e=>{e.semver===s&&(e=new n(">=0.0.0")),a=a||e,o=o||e,h(e.semver,a.semver,p)?a=e:m(e.semver,o.semver,p)&&(o=e)}),a.operator===f||a.operator===b||(!o.operator||o.operator===f)&&y(e,o.semver)||o.operator===b&&m(e,o.semver))return!1}return!0}},39313:(e,t,r)=>{"use strict";let i=r(40208),n=r(44907);e.exports=(e,t,r)=>{let s=[],a=null,o=null,l=e.sort((e,t)=>n(e,t,r));for(let e of l)i(e,t,r)?(o=e,a||(a=e)):(o&&s.push([a,o]),o=null,a=null);a&&s.push([a,null]);let d=[];for(let[e,t]of s)e===t?d.push(e):t||e!==l[0]?t?e===l[0]?d.push(`<=${t}`):d.push(`${e} - ${t}`):d.push(`>=${e}`):d.push("*");let c=d.join(" || "),u="string"==typeof t.raw?t.raw:String(t);return c.length<u.length?c:t}},34105:(e,t,r)=>{"use strict";let i=r(53112),n=r(72300),{ANY:s}=n,a=r(40208),o=r(44907),l=[new n(">=0.0.0-0")],d=[new n(">=0.0.0")],c=(e,t,r)=>{let i,n,c,h,y,m,f;if(e===t)return!0;if(1===e.length&&e[0].semver===s){if(1===t.length&&t[0].semver===s)return!0;e=r.includePrerelease?l:d}if(1===t.length&&t[0].semver===s){if(r.includePrerelease)return!0;t=d}let b=new Set;for(let t of e)">"===t.operator||">="===t.operator?i=u(i,t,r):"<"===t.operator||"<="===t.operator?n=p(n,t,r):b.add(t.semver);if(b.size>1||i&&n&&((c=o(i.semver,n.semver,r))>0||0===c&&(">="!==i.operator||"<="!==n.operator)))return null;for(let e of b){if(i&&!a(e,String(i),r)||n&&!a(e,String(n),r))return null;for(let i of t)if(!a(e,String(i),r))return!1;return!0}let g=!!n&&!r.includePrerelease&&!!n.semver.prerelease.length&&n.semver,S=!!i&&!r.includePrerelease&&!!i.semver.prerelease.length&&i.semver;for(let e of(g&&1===g.prerelease.length&&"<"===n.operator&&0===g.prerelease[0]&&(g=!1),t)){if(f=f||">"===e.operator||">="===e.operator,m=m||"<"===e.operator||"<="===e.operator,i){if(S&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===S.major&&e.semver.minor===S.minor&&e.semver.patch===S.patch&&(S=!1),">"===e.operator||">="===e.operator){if((h=u(i,e,r))===e&&h!==i)return!1}else if(">="===i.operator&&!e.test(i.semver))return!1}if(n){if(g&&e.semver.prerelease&&e.semver.prerelease.length&&e.semver.major===g.major&&e.semver.minor===g.minor&&e.semver.patch===g.patch&&(g=!1),"<"===e.operator||"<="===e.operator){if((y=p(n,e,r))===e&&y!==n)return!1}else if("<="===n.operator&&!e.test(n.semver))return!1}if(!e.operator&&(n||i)&&0!==c)return!1}return(!i||!m||!!n||0===c)&&(!n||!f||!!i||0===c)&&!S&&!g},u=(e,t,r)=>{if(!e)return t;let i=o(e.semver,t.semver,r);return i>0?e:i<0?t:">"===t.operator&&">="===e.operator?t:e},p=(e,t,r)=>{if(!e)return t;let i=o(e.semver,t.semver,r);return i<0?e:i>0?t:"<"===t.operator&&"<="===e.operator?t:e};e.exports=(e,t,r={})=>{if(e===t)return!0;e=new i(e,r),t=new i(t,r);let n=!1;e:for(let i of e.set){for(let e of t.set){let t=c(i,e,r);if(n=n||null!==t,t)continue e}if(n)return!1}return!0}},52535:(e,t,r)=>{"use strict";let i=r(53112);e.exports=(e,t)=>new i(e,t).set.map(e=>e.map(e=>e.value).join(" ").trim().split(" "))},34245:(e,t,r)=>{"use strict";let i=r(53112);e.exports=(e,t)=>{try{return new i(e,t).range||"*"}catch(e){return null}}},74358:e=>{var t=[0,4129,8258,12387,16516,20645,24774,28903,33032,37161,41290,45419,49548,53677,57806,61935,4657,528,12915,8786,21173,17044,29431,25302,37689,33560,45947,41818,54205,50076,62463,58334,9314,13379,1056,5121,25830,29895,17572,21637,42346,46411,34088,38153,58862,62927,50604,54669,13907,9842,5649,1584,30423,26358,22165,18100,46939,42874,38681,34616,63455,59390,55197,51132,18628,22757,26758,30887,2112,6241,10242,14371,51660,55789,59790,63919,35144,39273,43274,47403,23285,19156,31415,27286,6769,2640,14899,10770,56317,52188,64447,60318,39801,35672,47931,43802,27814,31879,19684,23749,11298,15363,3168,7233,60846,64911,52716,56781,44330,48395,36200,40265,32407,28342,24277,20212,15891,11826,7761,3696,65439,61374,57309,53244,48923,44858,40793,36728,37256,33193,45514,41451,53516,49453,61774,57711,4224,161,12482,8419,20484,16421,28742,24679,33721,37784,41979,46042,49981,54044,58239,62302,689,4752,8947,13010,16949,21012,25207,29270,46570,42443,38312,34185,62830,58703,54572,50445,13538,9411,5280,1153,29798,25671,21540,17413,42971,47098,34713,38840,59231,63358,50973,55100,9939,14066,1681,5808,26199,30326,17941,22068,55628,51565,63758,59695,39368,35305,47498,43435,22596,18533,30726,26663,6336,2273,14466,10403,52093,56156,60223,64286,35833,39896,43963,48026,19061,23124,27191,31254,2801,6864,10931,14994,64814,60687,56684,52557,48554,44427,40424,36297,31782,27655,23652,19525,15522,11395,7392,3265,61215,65342,53085,57212,44955,49082,36825,40952,28183,32310,20053,24180,11923,16050,3793,7920],r=function(e){for(var t,r=0,i=0,n=[],s=e.length;r<s;r++)(t=e.charCodeAt(r))<128?n[i++]=t:(t<2048?n[i++]=t>>6|192:((64512&t)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(t=65536+((1023&t)<<10)+(1023&e.charCodeAt(++r)),n[i++]=t>>18|240,n[i++]=t>>12&63|128):n[i++]=t>>12|224,n[i++]=t>>6&63|128),n[i++]=63&t|128);return n},i=e.exports=function(e){for(var i,n=0,s=-1,a=0,o=0,l="string"==typeof e?r(e):e,d=l.length;n<d;){if(i=l[n++],-1===s)123===i&&(s=n);else if(125!==i)o=t[(i^o>>8)&255]^o<<8;else if(n-1!==s)return 16383&o;a=t[(i^a>>8)&255]^a<<8}return 16383&a};e.exports.generateMulti=function(e){for(var t=1,r=e.length,n=i(e[0]);t<r;)if(i(e[t++])!==n)return -1;return n}},60072:(e,t,r)=>{"use strict";var i=r(92050);function n(e,t){var r={zone:t};if(e?e instanceof n?this._date=e._date:e instanceof Date?this._date=i.DateTime.fromJSDate(e,r):"number"==typeof e?this._date=i.DateTime.fromMillis(e,r):"string"==typeof e&&(this._date=i.DateTime.fromISO(e,r),this._date.isValid||(this._date=i.DateTime.fromRFC2822(e,r)),this._date.isValid||(this._date=i.DateTime.fromSQL(e,r)),this._date.isValid||(this._date=i.DateTime.fromFormat(e,"EEE, d MMM yyyy HH:mm:ss",r))):this._date=i.DateTime.local(),!this._date||!this._date.isValid)throw Error("CronDate: unhandled timestamp: "+JSON.stringify(e));t&&t!==this._date.zoneName&&(this._date=this._date.setZone(t))}n.prototype.addYear=function(){this._date=this._date.plus({years:1})},n.prototype.addMonth=function(){this._date=this._date.plus({months:1}).startOf("month")},n.prototype.addDay=function(){this._date=this._date.plus({days:1}).startOf("day")},n.prototype.addHour=function(){var e=this._date;this._date=this._date.plus({hours:1}).startOf("hour"),this._date<=e&&(this._date=this._date.plus({hours:1}))},n.prototype.addMinute=function(){var e=this._date;this._date=this._date.plus({minutes:1}).startOf("minute"),this._date<e&&(this._date=this._date.plus({hours:1}))},n.prototype.addSecond=function(){var e=this._date;this._date=this._date.plus({seconds:1}).startOf("second"),this._date<e&&(this._date=this._date.plus({hours:1}))},n.prototype.subtractYear=function(){this._date=this._date.minus({years:1})},n.prototype.subtractMonth=function(){this._date=this._date.minus({months:1}).endOf("month").startOf("second")},n.prototype.subtractDay=function(){this._date=this._date.minus({days:1}).endOf("day").startOf("second")},n.prototype.subtractHour=function(){var e=this._date;this._date=this._date.minus({hours:1}).endOf("hour").startOf("second"),this._date>=e&&(this._date=this._date.minus({hours:1}))},n.prototype.subtractMinute=function(){var e=this._date;this._date=this._date.minus({minutes:1}).endOf("minute").startOf("second"),this._date>e&&(this._date=this._date.minus({hours:1}))},n.prototype.subtractSecond=function(){var e=this._date;this._date=this._date.minus({seconds:1}).startOf("second"),this._date>e&&(this._date=this._date.minus({hours:1}))},n.prototype.getDate=function(){return this._date.day},n.prototype.getFullYear=function(){return this._date.year},n.prototype.getDay=function(){var e=this._date.weekday;return 7==e?0:e},n.prototype.getMonth=function(){return this._date.month-1},n.prototype.getHours=function(){return this._date.hour},n.prototype.getMinutes=function(){return this._date.minute},n.prototype.getSeconds=function(){return this._date.second},n.prototype.getMilliseconds=function(){return this._date.millisecond},n.prototype.getTime=function(){return this._date.valueOf()},n.prototype.getUTCDate=function(){return this._getUTC().day},n.prototype.getUTCFullYear=function(){return this._getUTC().year},n.prototype.getUTCDay=function(){var e=this._getUTC().weekday;return 7==e?0:e},n.prototype.getUTCMonth=function(){return this._getUTC().month-1},n.prototype.getUTCHours=function(){return this._getUTC().hour},n.prototype.getUTCMinutes=function(){return this._getUTC().minute},n.prototype.getUTCSeconds=function(){return this._getUTC().second},n.prototype.toISOString=function(){return this._date.toUTC().toISO()},n.prototype.toJSON=function(){return this._date.toJSON()},n.prototype.setDate=function(e){this._date=this._date.set({day:e})},n.prototype.setFullYear=function(e){this._date=this._date.set({year:e})},n.prototype.setDay=function(e){this._date=this._date.set({weekday:e})},n.prototype.setMonth=function(e){this._date=this._date.set({month:e+1})},n.prototype.setHours=function(e){this._date=this._date.set({hour:e})},n.prototype.setMinutes=function(e){this._date=this._date.set({minute:e})},n.prototype.setSeconds=function(e){this._date=this._date.set({second:e})},n.prototype.setMilliseconds=function(e){this._date=this._date.set({millisecond:e})},n.prototype._getUTC=function(){return this._date.toUTC()},n.prototype.toString=function(){return this.toDate().toString()},n.prototype.toDate=function(){return this._date.toJSDate()},n.prototype.isLastDayOfMonth=function(){var e=this._date.plus({days:1}).startOf("day");return this._date.month!==e.month},n.prototype.isLastWeekdayOfMonth=function(){var e=this._date.plus({days:7}).startOf("day");return this._date.month!==e.month},e.exports=n},73354:(e,t,r)=>{"use strict";var i=r(60072),n=r(53417);function s(e,t){this._options=t,this._utc=t.utc||!1,this._tz=this._utc?"UTC":t.tz,this._currentDate=new i(t.currentDate,this._tz),this._startDate=t.startDate?new i(t.startDate,this._tz):null,this._endDate=t.endDate?new i(t.endDate,this._tz):null,this._isIterator=t.iterator||!1,this._hasIterated=!1,this._nthDayOfWeek=t.nthDayOfWeek||0,this.fields=s._freezeFields(e)}s.map=["second","minute","hour","dayOfMonth","month","dayOfWeek"],s.predefined={"@yearly":"0 0 1 1 *","@monthly":"0 0 1 * *","@weekly":"0 0 * * 0","@daily":"0 0 * * *","@hourly":"0 * * * *"},s.constraints=[{min:0,max:59,chars:[]},{min:0,max:59,chars:[]},{min:0,max:23,chars:[]},{min:1,max:31,chars:["L"]},{min:1,max:12,chars:[]},{min:0,max:7,chars:["L"]}],s.daysInMonth=[31,29,31,30,31,30,31,31,30,31,30,31],s.aliases={month:{jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12},dayOfWeek:{sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6}},s.parseDefaults=["0","*","*","*","*","*"],s.standardValidCharacters=/^[,*\d/-]+$/,s.dayOfWeekValidCharacters=/^[?,*\dL#/-]+$/,s.dayOfMonthValidCharacters=/^[?,*\dL/-]+$/,s.validCharacters={second:s.standardValidCharacters,minute:s.standardValidCharacters,hour:s.standardValidCharacters,dayOfMonth:s.dayOfMonthValidCharacters,month:s.standardValidCharacters,dayOfWeek:s.dayOfWeekValidCharacters},s._isValidConstraintChar=function(e,t){return"string"==typeof t&&e.chars.some(function(e){return t.indexOf(e)>-1})},s._parseField=function(e,t,r){switch(e){case"month":case"dayOfWeek":var i=s.aliases[e];t=t.replace(/[a-z]{3}/gi,function(e){if(void 0!==i[e=e.toLowerCase()])return i[e];throw Error('Validation error, cannot resolve alias "'+e+'"')})}if(!s.validCharacters[e].test(t))throw Error("Invalid characters, got value: "+t);function n(e){var t=e.split("/");if(t.length>2)throw Error("Invalid repeat: "+e);return t.length>1?(t[0]==+t[0]&&(t=[t[0]+"-"+r.max,t[1]]),a(t[0],t[t.length-1])):a(e,1)}function a(t,i){var n=[],s=t.split("-");if(s.length>1){if(s.length<2)return+t;if(!s[0].length){if(!s[1].length)throw Error("Invalid range: "+t);return+t}var a=+s[0],o=+s[1];if(Number.isNaN(a)||Number.isNaN(o)||a<r.min||o>r.max)throw Error("Constraint error, got range "+a+"-"+o+" expected range "+r.min+"-"+r.max);if(a>o)throw Error("Invalid range: "+t);var l=+i;if(Number.isNaN(l)||l<=0)throw Error("Constraint error, cannot repeat at every "+l+" time.");"dayOfWeek"===e&&o%7==0&&n.push(0);for(var d=a;d<=o;d++)!(-1!==n.indexOf(d))&&l>0&&l%i==0?(l=1,n.push(d)):l++;return n}return Number.isNaN(+t)?t:+t}return -1!==t.indexOf("*")?t=t.replace(/\*/g,r.min+"-"+r.max):-1!==t.indexOf("?")&&(t=t.replace(/\?/g,r.min+"-"+r.max)),function(t){var i=[];function a(t){if(t instanceof Array)for(var n=0,a=t.length;n<a;n++){var o=t[n];if(s._isValidConstraintChar(r,o)){i.push(o);continue}if("number"!=typeof o||Number.isNaN(o)||o<r.min||o>r.max)throw Error("Constraint error, got value "+o+" expected range "+r.min+"-"+r.max);i.push(o)}else{if(s._isValidConstraintChar(r,t)){i.push(t);return}var l=+t;if(Number.isNaN(l)||l<r.min||l>r.max)throw Error("Constraint error, got value "+t+" expected range "+r.min+"-"+r.max);"dayOfWeek"===e&&(l%=7),i.push(l)}}var o=t.split(",");if(!o.every(function(e){return e.length>0}))throw Error("Invalid list value format");if(o.length>1)for(var l=0,d=o.length;l<d;l++)a(n(o[l]));else a(n(t));return i.sort(s._sortCompareFn),i}(t)},s._sortCompareFn=function(e,t){var r="number"==typeof e,i="number"==typeof t;return r&&i?e-t:!r&&i?1:r&&!i?-1:e.localeCompare(t)},s._handleMaxDaysInMonth=function(e){if(1===e.month.length){var t=s.daysInMonth[e.month[0]-1];if(e.dayOfMonth[0]>t)throw Error("Invalid explicit day of month definition");return e.dayOfMonth.filter(function(e){return"L"===e||e<=t}).sort(s._sortCompareFn)}},s._freezeFields=function(e){for(var t=0,r=s.map.length;t<r;++t){var i=s.map[t],n=e[i];e[i]=Object.freeze(n)}return Object.freeze(e)},s.prototype._applyTimezoneShift=function(e,t,r){if("Month"===r||"Day"===r){var i=e.getTime();e[t+r](),i===e.getTime()&&(0===e.getMinutes()&&0===e.getSeconds()?e.addHour():59===e.getMinutes()&&59===e.getSeconds()&&e.subtractHour())}else{var n=e.getHours();e[t+r]();var s=e.getHours(),a=s-n;2===a?24!==this.fields.hour.length&&(this._dstStart=s):0===a&&0===e.getMinutes()&&0===e.getSeconds()&&24!==this.fields.hour.length&&(this._dstEnd=s)}},s.prototype._findSchedule=function(e){function t(e,t){for(var r=0,i=t.length;r<i;r++)if(t[r]>=e)return t[r]===e;return t[0]===e}function r(e){return e.length>0&&e.some(function(e){return"string"==typeof e&&e.indexOf("L")>=0})}for(var n=(e=e||!1)?"subtract":"add",a=new i(this._currentDate,this._tz),o=this._startDate,l=this._endDate,d=a.getTime(),c=0;c<1e4;){if(c++,e){if(o&&a.getTime()-o.getTime()<0)throw Error("Out of the timespan range")}else if(l&&l.getTime()-a.getTime()<0)throw Error("Out of the timespan range");var u=t(a.getDate(),this.fields.dayOfMonth);r(this.fields.dayOfMonth)&&(u=u||a.isLastDayOfMonth());var p=t(a.getDay(),this.fields.dayOfWeek);r(this.fields.dayOfWeek)&&(p=p||this.fields.dayOfWeek.some(function(e){if(!r([e]))return!1;var t=Number.parseInt(e[0])%7;if(Number.isNaN(t))throw Error("Invalid last weekday of the month expression: "+e);return a.getDay()===t&&a.isLastWeekdayOfMonth()}));var h=this.fields.dayOfMonth.length>=s.daysInMonth[a.getMonth()],y=this.fields.dayOfWeek.length===s.constraints[5].max-s.constraints[5].min+1,m=a.getHours();if(!u&&(!p||y)||!h&&y&&!u||h&&!y&&!p||this._nthDayOfWeek>0&&!function(e,t){if(t<6){if(8>e.getDate()&&1===t)return!0;var r=e.getDate()%7?1:0;return Math.floor((e.getDate()-e.getDate()%7)/7)+r===t}return!1}(a,this._nthDayOfWeek)){this._applyTimezoneShift(a,n,"Day");continue}if(!t(a.getMonth()+1,this.fields.month)){this._applyTimezoneShift(a,n,"Month");continue}if(t(m,this.fields.hour)){if(this._dstEnd===m&&!e){this._dstEnd=null,this._applyTimezoneShift(a,"add","Hour");continue}}else{if(this._dstStart!==m){this._dstStart=null,this._applyTimezoneShift(a,n,"Hour");continue}if(!t(m-1,this.fields.hour)){a[n+"Hour"]();continue}}if(!t(a.getMinutes(),this.fields.minute)){this._applyTimezoneShift(a,n,"Minute");continue}if(!t(a.getSeconds(),this.fields.second)){this._applyTimezoneShift(a,n,"Second");continue}if(d===a.getTime()){"add"===n||0===a.getMilliseconds()?this._applyTimezoneShift(a,n,"Second"):a.setMilliseconds(0);continue}break}if(c>=1e4)throw Error("Invalid expression, loop limit exceeded");return this._currentDate=new i(a,this._tz),this._hasIterated=!0,a},s.prototype.next=function(){var e=this._findSchedule();return this._isIterator?{value:e,done:!this.hasNext()}:e},s.prototype.prev=function(){var e=this._findSchedule(!0);return this._isIterator?{value:e,done:!this.hasPrev()}:e},s.prototype.hasNext=function(){var e=this._currentDate,t=this._hasIterated;try{return this._findSchedule(),!0}catch(e){return!1}finally{this._currentDate=e,this._hasIterated=t}},s.prototype.hasPrev=function(){var e=this._currentDate,t=this._hasIterated;try{return this._findSchedule(!0),!0}catch(e){return!1}finally{this._currentDate=e,this._hasIterated=t}},s.prototype.iterate=function(e,t){var r=[];if(e>=0)for(var i=0,n=e;i<n;i++)try{var s=this.next();r.push(s),t&&t(s,i)}catch(e){break}else for(var i=0,n=e;i>n;i--)try{var s=this.prev();r.push(s),t&&t(s,i)}catch(e){break}return r},s.prototype.reset=function(e){this._currentDate=new i(e||this._options.currentDate)},s.prototype.stringify=function(e){for(var t=[],r=e?0:1,i=s.map.length;r<i;++r){var a=s.map[r],o=this.fields[a],l=s.constraints[r];"dayOfMonth"===a&&1===this.fields.month.length?l={min:1,max:s.daysInMonth[this.fields.month[0]-1]}:"dayOfWeek"===a&&(l={min:0,max:6},o=7===o[o.length-1]?o.slice(0,-1):o),t.push(n(o,l.min,l.max))}return t.join(" ")},s.parse=function(e,t){var r=this;return"function"==typeof t&&(t={}),function(e,t){t||(t={}),void 0===t.currentDate&&(t.currentDate=new i(void 0,r._tz)),s.predefined[e]&&(e=s.predefined[e]);var n=[],a=(e+"").trim().split(/\s+/);if(a.length>6)throw Error("Invalid cron expression");for(var o=s.map.length-a.length,l=0,d=s.map.length;l<d;++l){var c=s.map[l],u=a[a.length>d?l:l-o];if(l<o||!u)n.push(s._parseField(c,s.parseDefaults[l],s.constraints[l]));else{var p="dayOfWeek"===c?function(e){var r=e.split("#");if(r.length>1){var i=+r[r.length-1];if(/,/.test(e))throw Error("Constraint error, invalid dayOfWeek `#` and `,` special characters are incompatible");if(/\//.test(e))throw Error("Constraint error, invalid dayOfWeek `#` and `/` special characters are incompatible");if(/-/.test(e))throw Error("Constraint error, invalid dayOfWeek `#` and `-` special characters are incompatible");if(r.length>2||Number.isNaN(i)||i<1||i>5)throw Error("Constraint error, invalid dayOfWeek occurrence number (#)");return t.nthDayOfWeek=i,r[0]}return e}(u):u;n.push(s._parseField(c,p,s.constraints[l]))}}for(var h={},l=0,d=s.map.length;l<d;l++)h[s.map[l]]=n[l];var y=s._handleMaxDaysInMonth(h);return h.dayOfMonth=y||h.dayOfMonth,new s(h,t)}(e,t)},s.fieldsToExpression=function(e,t){for(var r={},i=0,n=s.map.length;i<n;++i){var a=s.map[i],o=e[a];!function(e,t,r){if(!t)throw Error("Validation error, Field "+e+" is missing");if(0===t.length)throw Error("Validation error, Field "+e+" contains no values");for(var i=0,n=t.length;i<n;i++){var a=t[i];if(!s._isValidConstraintChar(r,a)&&("number"!=typeof a||Number.isNaN(a)||a<r.min||a>r.max))throw Error("Constraint error, got value "+a+" expected range "+r.min+"-"+r.max)}}(a,o,s.constraints[i]);for(var l=[],d=-1;++d<o.length;)l[d]=o[d];if((o=l.sort(s._sortCompareFn).filter(function(e,t,r){return!t||e!==r[t-1]})).length!==l.length)throw Error("Validation error, Field "+a+" contains duplicate values");r[a]=o}var c=s._handleMaxDaysInMonth(r);return r.dayOfMonth=c||r.dayOfMonth,new s(r,t||{})},e.exports=s},11754:e=>{"use strict";function t(e){return{start:e,count:1}}function r(e,t){e.end=t,e.step=t-e.start,e.count=2}function i(e,r,i){r&&(2===r.count?(e.push(t(r.start)),e.push(t(r.end))):e.push(r)),i&&e.push(i)}e.exports=function(e){for(var n=[],s=void 0,a=0;a<e.length;a++){var o=e[a];"number"!=typeof o?(i(n,s,t(o)),s=void 0):s?1===s.count?r(s,o):s.step===o-s.end?(s.count++,s.end=o):2===s.count?(n.push(t(s.start)),r(s=t(s.end),o)):(i(n,s),s=t(o)):s=t(o)}return i(n,s),n}},53417:(e,t,r)=>{"use strict";var i=r(11754);e.exports=function(e,t,r){var n=i(e);if(1===n.length){var s=n[0],a=s.step;if(1===a&&s.start===t&&s.end===r)return"*";if(1!==a&&s.start===t&&s.end===r-a+1)return"*/"+a}for(var o=[],l=0,d=n.length;l<d;++l){var c=n[l];if(1===c.count){o.push(c.start);continue}var a=c.step;if(1===c.step){o.push(c.start+"-"+c.end);continue}var u=0==c.start?c.count-1:c.count;c.step*u>c.end?o=o.concat(Array.from({length:c.end-c.start+1}).map(function(e,t){var r=c.start+t;return(r-c.start)%c.step==0?r:null}).filter(function(e){return null!=e})):c.end===r-c.step+1?o.push(c.start+"/"+c.step):o.push(c.start+"-"+c.end+"/"+c.step)}return o.join(",")}},50314:(e,t,r)=>{"use strict";var i=r(73354);function n(){}n._parseEntry=function(e){var t=e.split(" ");if(6===t.length)return{interval:i.parse(e)};if(t.length>6)return{interval:i.parse(t.slice(0,6).join(" ")),command:t.slice(6,t.length)};throw Error("Invalid entry: "+e)},n.parseExpression=function(e,t){return i.parse(e,t)},n.fieldsToExpression=function(e,t){return i.fieldsToExpression(e,t)},n.parseString=function(e){for(var t=e.split("\n"),r={variables:{},expressions:[],errors:{}},i=0,s=t.length;i<s;i++){var a=t[i],o=null,l=a.trim();if(l.length>0){if(l.match(/^#/))continue;if(o=l.match(/^(.*)=(.*)$/))r.variables[o[1]]=o[2];else{var d=null;try{d=n._parseEntry("0 "+l),r.expressions.push(d.interval)}catch(e){r.errors[l]=e}}}}return r},n.parseFile=function(e,t){r(57147).readFile(e,function(e,r){if(e){t(e);return}return t(null,n.parseString(r.toString()))})},e.exports=n},93050:(e,t,r)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;let r="color: "+this.color;t.splice(1,0,r,"color: inherit");let i=0,n=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(i++,"%c"===e&&(n=i))}),t.splice(n,0,r)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")||t.storage.getItem("DEBUG")}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e},t.useColors=function(){let e;return"undefined"!=typeof window&&!!window.process&&("renderer"===window.process.type||!!window.process.__nwjs)||!("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&(e=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(e[1],10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=r(30783)(t);let{formatters:i}=e.exports;i.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},30783:(e,t,r)=>{e.exports=function(e){function t(e){let r,n,s;let a=null;function o(...e){if(!o.enabled)return;let i=Number(new Date),n=i-(r||i);o.diff=n,o.prev=r,o.curr=i,r=i,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let s=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(r,i)=>{if("%%"===r)return"%";s++;let n=t.formatters[i];if("function"==typeof n){let t=e[s];r=n.call(o,t),e.splice(s,1),s--}return r}),t.formatArgs.call(o,e),(o.log||t.log).apply(o,e)}return o.namespace=e,o.useColors=t.useColors(),o.color=t.selectColor(e),o.extend=i,o.destroy=t.destroy,Object.defineProperty(o,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==a?a:(n!==t.namespaces&&(n=t.namespaces,s=t.enabled(e)),s),set:e=>{a=e}}),"function"==typeof t.init&&t.init(o),o}function i(e,r){let i=t(this.namespace+(void 0===r?":":r)+e);return i.log=this.log,i}function n(e,t){let r=0,i=0,n=-1,s=0;for(;r<e.length;)if(i<t.length&&(t[i]===e[r]||"*"===t[i]))"*"===t[i]?(n=i,s=r):r++,i++;else{if(-1===n)return!1;i=n+1,r=++s}for(;i<t.length&&"*"===t[i];)i++;return i===t.length}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){let e=[...t.names,...t.skips.map(e=>"-"+e)].join(",");return t.enable(""),e},t.enable=function(e){for(let r of(t.save(e),t.namespaces=e,t.names=[],t.skips=[],("string"==typeof e?e:"").trim().replace(/\s+/g,",").split(",").filter(Boolean)))"-"===r[0]?t.skips.push(r.slice(1)):t.names.push(r)},t.enabled=function(e){for(let r of t.skips)if(n(e,r))return!1;for(let r of t.names)if(n(e,r))return!0;return!1},t.humanize=r(13974),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach(r=>{t[r]=e[r]}),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let r=0;for(let t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t)|0;return t.colors[Math.abs(r)%t.colors.length]},t.enable(t.load()),t}},19092:(e,t,r)=>{"undefined"==typeof process||"renderer"===process.type||process.__nwjs?e.exports=r(93050):e.exports=r(12226)},12226:(e,t,r)=>{let i=r(76224),n=r(73837);t.init=function(e){e.inspectOpts={};let r=Object.keys(t.inspectOpts);for(let i=0;i<r.length;i++)e.inspectOpts[r[i]]=t.inspectOpts[r[i]]},t.log=function(...e){return process.stderr.write(n.formatWithOptions(t.inspectOpts,...e)+"\n")},t.formatArgs=function(r){let{namespace:i,useColors:n}=this;if(n){let t=this.color,n="\x1b[3"+(t<8?t:"8;5;"+t),s=`  ${n};1m${i} \u001B[0m`;r[0]=s+r[0].split("\n").join("\n"+s),r.push(n+"m+"+e.exports.humanize(this.diff)+"\x1b[0m")}else r[0]=(t.inspectOpts.hideDate?"":new Date().toISOString()+" ")+i+" "+r[0]},t.save=function(e){e?process.env.DEBUG=e:delete process.env.DEBUG},t.load=function(){return process.env.DEBUG},t.useColors=function(){return"colors"in t.inspectOpts?!!t.inspectOpts.colors:i.isatty(process.stderr.fd)},t.destroy=n.deprecate(()=>{},"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."),t.colors=[6,2,3,4,5,1];try{let e=r(67057);e&&(e.stderr||e).level>=2&&(t.colors=[20,21,26,27,32,33,38,39,40,41,42,43,44,45,56,57,62,63,68,69,74,75,76,77,78,79,80,81,92,93,98,99,112,113,128,129,134,135,148,149,160,161,162,163,164,165,166,167,168,169,170,171,172,173,178,179,184,185,196,197,198,199,200,201,202,203,204,205,206,207,208,209,214,215,220,221])}catch(e){}t.inspectOpts=Object.keys(process.env).filter(e=>/^debug_/i.test(e)).reduce((e,t)=>{let r=t.substring(6).toLowerCase().replace(/_([a-z])/g,(e,t)=>t.toUpperCase()),i=process.env[t];return i=!!/^(yes|on|true|enabled)$/i.test(i)||!/^(no|off|false|disabled)$/i.test(i)&&("null"===i?null:Number(i)),e[r]=i,e},{}),e.exports=r(30783)(t);let{formatters:s}=e.exports;s.o=function(e){return this.inspectOpts.colors=this.useColors,n.inspect(e,this.inspectOpts).split("\n").map(e=>e.trim()).join(" ")},s.O=function(e){return this.inspectOpts.colors=this.useColors,n.inspect(e,this.inspectOpts)}},35561:e=>{"use strict";function t(e,t){var t=t||{};this._capacity=t.capacity,this._head=0,this._tail=0,Array.isArray(e)?this._fromArray(e):(this._capacityMask=3,this._list=[,,,,])}t.prototype.peekAt=function(e){var t=e;if(t===(0|t)){var r=this.size();if(!(t>=r)&&!(t<-r))return t<0&&(t+=r),t=this._head+t&this._capacityMask,this._list[t]}},t.prototype.get=function(e){return this.peekAt(e)},t.prototype.peek=function(){if(this._head!==this._tail)return this._list[this._head]},t.prototype.peekFront=function(){return this.peek()},t.prototype.peekBack=function(){return this.peekAt(-1)},Object.defineProperty(t.prototype,"length",{get:function(){return this.size()}}),t.prototype.size=function(){return this._head===this._tail?0:this._head<this._tail?this._tail-this._head:this._capacityMask+1-(this._head-this._tail)},t.prototype.unshift=function(e){if(0==arguments.length)return this.size();var t=this._list.length;return(this._head=this._head-1+t&this._capacityMask,this._list[this._head]=e,this._tail===this._head&&this._growArray(),this._capacity&&this.size()>this._capacity&&this.pop(),this._head<this._tail)?this._tail-this._head:this._capacityMask+1-(this._head-this._tail)},t.prototype.shift=function(){var e=this._head;if(e!==this._tail){var t=this._list[e];return this._list[e]=void 0,this._head=e+1&this._capacityMask,e<2&&this._tail>1e4&&this._tail<=this._list.length>>>2&&this._shrinkArray(),t}},t.prototype.push=function(e){if(0==arguments.length)return this.size();var t=this._tail;return(this._list[t]=e,this._tail=t+1&this._capacityMask,this._tail===this._head&&this._growArray(),this._capacity&&this.size()>this._capacity&&this.shift(),this._head<this._tail)?this._tail-this._head:this._capacityMask+1-(this._head-this._tail)},t.prototype.pop=function(){var e=this._tail;if(e!==this._head){var t=this._list.length;this._tail=e-1+t&this._capacityMask;var r=this._list[this._tail];return this._list[this._tail]=void 0,this._head<2&&e>1e4&&e<=t>>>2&&this._shrinkArray(),r}},t.prototype.removeOne=function(e){var t,r=e;if(r===(0|r)&&this._head!==this._tail){var i=this.size(),n=this._list.length;if(!(r>=i)&&!(r<-i)){r<0&&(r+=i),r=this._head+r&this._capacityMask;var s=this._list[r];if(e<i/2){for(t=e;t>0;t--)this._list[r]=this._list[r=r-1+n&this._capacityMask];this._list[r]=void 0,this._head=this._head+1+n&this._capacityMask}else{for(t=i-1-e;t>0;t--)this._list[r]=this._list[r=r+1+n&this._capacityMask];this._list[r]=void 0,this._tail=this._tail-1+n&this._capacityMask}return s}}},t.prototype.remove=function(e,t){var r,i,n=e,s=t;if(n===(0|n)&&this._head!==this._tail){var a=this.size(),o=this._list.length;if(!(n>=a)&&!(n<-a)&&!(t<1)){if(n<0&&(n+=a),1===t||!t)return(r=[,])[0]=this.removeOne(n),r;if(0===n&&n+t>=a)return r=this.toArray(),this.clear(),r;for(n+t>a&&(t=a-n),r=Array(t),i=0;i<t;i++)r[i]=this._list[this._head+n+i&this._capacityMask];if(n=this._head+n&this._capacityMask,e+t===a){for(this._tail=this._tail-t+o&this._capacityMask,i=t;i>0;i--)this._list[n=n+1+o&this._capacityMask]=void 0;return r}if(0===e){for(this._head=this._head+t+o&this._capacityMask,i=t-1;i>0;i--)this._list[n=n+1+o&this._capacityMask]=void 0;return r}if(n<a/2){for(this._head=this._head+e+t+o&this._capacityMask,i=e;i>0;i--)this.unshift(this._list[n=n-1+o&this._capacityMask]);for(n=this._head-1+o&this._capacityMask;s>0;)this._list[n=n-1+o&this._capacityMask]=void 0,s--;e<0&&(this._tail=n)}else{for(this._tail=n,n=n+t+o&this._capacityMask,i=a-(t+e);i>0;i--)this.push(this._list[n++]);for(n=this._tail;s>0;)this._list[n=n+1+o&this._capacityMask]=void 0,s--}return this._head<2&&this._tail>1e4&&this._tail<=o>>>2&&this._shrinkArray(),r}}},t.prototype.splice=function(e,t){var r=e;if(r===(0|r)){var i=this.size();if(r<0&&(r+=i),!(r>i)){if(!(arguments.length>2))return this.remove(r,t);var n,s,a,o=arguments.length,l=this._list.length,d=2;if(!i||r<i/2){for(n=0,s=Array(r);n<r;n++)s[n]=this._list[this._head+n&this._capacityMask];for(0===t?(a=[],r>0&&(this._head=this._head+r+l&this._capacityMask)):(a=this.remove(r,t),this._head=this._head+r+l&this._capacityMask);o>d;)this.unshift(arguments[--o]);for(n=r;n>0;n--)this.unshift(s[n-1])}else{var c=(s=Array(i-(r+t))).length;for(n=0;n<c;n++)s[n]=this._list[this._head+r+t+n&this._capacityMask];for(0===t?(a=[],r!=i&&(this._tail=this._head+r+l&this._capacityMask)):(a=this.remove(r,t),this._tail=this._tail-c+l&this._capacityMask);d<o;)this.push(arguments[d++]);for(n=0;n<c;n++)this.push(s[n])}return a}}},t.prototype.clear=function(){this._list=Array(this._list.length),this._head=0,this._tail=0},t.prototype.isEmpty=function(){return this._head===this._tail},t.prototype.toArray=function(){return this._copyArray(!1)},t.prototype._fromArray=function(e){var t=e.length,r=this._nextPowerOf2(t);this._list=Array(r),this._capacityMask=r-1,this._tail=t;for(var i=0;i<t;i++)this._list[i]=e[i]},t.prototype._copyArray=function(e,t){var r,i=this._list,n=i.length,s=this.length;if((t|=s)==s&&this._head<this._tail)return this._list.slice(this._head,this._tail);var a=Array(t),o=0;if(e||this._head>this._tail){for(r=this._head;r<n;r++)a[o++]=i[r];for(r=0;r<this._tail;r++)a[o++]=i[r]}else for(r=this._head;r<this._tail;r++)a[o++]=i[r];return a},t.prototype._growArray=function(){if(0!=this._head){var e=this._copyArray(!0,this._list.length<<1);this._tail=this._list.length,this._head=0,this._list=e}else this._tail=this._list.length,this._list.length<<=1;this._capacityMask=this._capacityMask<<1|1},t.prototype._shrinkArray=function(){this._list.length>>>=1,this._capacityMask>>>=1},t.prototype._nextPowerOf2=function(e){return Math.max(1<<Math.log(e)/Math.log(2)+1,4)},e.exports=t},72616:e=>{"use strict";e.exports=(e,t=process.argv)=>{let r=e.startsWith("-")?"":1===e.length?"-":"--",i=t.indexOf(r+e),n=t.indexOf("--");return -1!==i&&(-1===n||i<n)}},79749:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(48942),n=r(74358),s=r(83499),a=r(40067),o=r(52484);class l{constructor(e,t=[],r={},i){if(this.name=e,this.inTransaction=!1,this.isTraced=!1,this.isResolved=!1,this.transformed=!1,this.replyEncoding=r.replyEncoding,this.errorStack=r.errorStack,this.args=t.flat(),this.callback=i,this.initPromise(),r.keyPrefix){let e=r.keyPrefix instanceof Buffer,t=e?r.keyPrefix:null;this._iterateKeys(i=>i instanceof Buffer?(null===t&&(t=Buffer.from(r.keyPrefix)),Buffer.concat([t,i])):e?Buffer.concat([r.keyPrefix,Buffer.from(String(i))]):r.keyPrefix+i)}r.readOnly&&(this.isReadOnly=!0)}static checkFlag(e,t){return t=t.toLowerCase(),!!this.getFlagMap()[e][t]}static setArgumentTransformer(e,t){this._transformer.argument[e]=t}static setReplyTransformer(e,t){this._transformer.reply[e]=t}static getFlagMap(){return this.flagMap||(this.flagMap=Object.keys(l.FLAGS).reduce((e,t)=>(e[t]={},l.FLAGS[t].forEach(r=>{e[t][r]=!0}),e),{})),this.flagMap}getSlot(){if(void 0===this.slot){let e=this.getKeys()[0];this.slot=null==e?null:n(e)}return this.slot}getKeys(){return this._iterateKeys()}toWritable(e){let t;let r="*"+(this.args.length+1)+"\r\n$"+Buffer.byteLength(this.name)+"\r\n"+this.name+"\r\n";if(this.bufferMode){let e=new u;e.push(r);for(let t=0;t<this.args.length;++t){let r=this.args[t];r instanceof Buffer?0===r.length?e.push("$0\r\n\r\n"):(e.push("$"+r.length+"\r\n"),e.push(r),e.push("\r\n")):e.push("$"+Buffer.byteLength(r)+"\r\n"+r+"\r\n")}t=e.toBuffer()}else{t=r;for(let e=0;e<this.args.length;++e){let r=this.args[e];t+="$"+Buffer.byteLength(r)+"\r\n"+r+"\r\n"}}return t}stringifyArguments(){for(let e=0;e<this.args.length;++e){let t=this.args[e];"string"==typeof t||(t instanceof Buffer?this.bufferMode=!0:this.args[e]=(0,a.toArg)(t))}}transformReply(e){this.replyEncoding&&(e=(0,a.convertBufferToString)(e,this.replyEncoding));let t=l._transformer.reply[this.name];return t&&(e=t(e)),e}setTimeout(e){this._commandTimeoutTimer||(this._commandTimeoutTimer=setTimeout(()=>{this.isResolved||this.reject(Error("Command timed out"))},e))}setBlockingTimeout(e){if(e<=0)return;this._blockingTimeoutTimer&&(clearTimeout(this._blockingTimeoutTimer),this._blockingTimeoutTimer=void 0);let t=Date.now();void 0===this._blockingDeadline&&(this._blockingDeadline=t+e);let r=this._blockingDeadline-t;if(r<=0){this.resolve(null);return}this._blockingTimeoutTimer=setTimeout(()=>{if(this.isResolved){this._blockingTimeoutTimer=void 0;return}this._blockingTimeoutTimer=void 0,this.resolve(null)},r)}extractBlockingTimeout(){let e=this.args;if(!e||0===e.length)return;let t=this.name.toLowerCase();return l.checkFlag("LAST_ARG_TIMEOUT_COMMANDS",t)?(0,o.parseSecondsArgument)(e[e.length-1]):l.checkFlag("FIRST_ARG_TIMEOUT_COMMANDS",t)?(0,o.parseSecondsArgument)(e[0]):l.checkFlag("BLOCK_OPTION_COMMANDS",t)?(0,o.parseBlockOption)(e):void 0}_clearTimers(){let e=this._commandTimeoutTimer;e&&(clearTimeout(e),delete this._commandTimeoutTimer);let t=this._blockingTimeoutTimer;t&&(clearTimeout(t),delete this._blockingTimeoutTimer)}initPromise(){let e=new Promise((e,t)=>{if(!this.transformed){this.transformed=!0;let e=l._transformer.argument[this.name];e&&(this.args=e(this.args)),this.stringifyArguments()}this.resolve=this._convertValue(e),this.reject=e=>{this._clearTimers(),this.errorStack?t((0,a.optimizeErrorStack)(e,this.errorStack.stack,__dirname)):t(e)}});this.promise=(0,s.default)(e,this.callback)}_iterateKeys(e=e=>e){if(void 0===this.keys&&(this.keys=[],(0,i.exists)(this.name,{caseInsensitive:!0})))for(let t of(0,i.getKeyIndexes)(this.name,this.args,{nameCaseInsensitive:!0}))this.args[t]=e(this.args[t]),this.keys.push(this.args[t]);return this.keys}_convertValue(e){return t=>{try{this._clearTimers(),e(this.transformReply(t)),this.isResolved=!0}catch(e){this.reject(e)}return this.promise}}}t.default=l,l.FLAGS={VALID_IN_SUBSCRIBER_MODE:["subscribe","psubscribe","unsubscribe","punsubscribe","ssubscribe","sunsubscribe","ping","quit"],VALID_IN_MONITOR_MODE:["monitor","auth"],ENTER_SUBSCRIBER_MODE:["subscribe","psubscribe","ssubscribe"],EXIT_SUBSCRIBER_MODE:["unsubscribe","punsubscribe","sunsubscribe"],WILL_DISCONNECT:["quit"],HANDSHAKE_COMMANDS:["auth","select","client","readonly","info"],IGNORE_RECONNECT_ON_ERROR:["client"],BLOCKING_COMMANDS:["blpop","brpop","brpoplpush","blmove","bzpopmin","bzpopmax","bzmpop","blmpop","xread","xreadgroup"],LAST_ARG_TIMEOUT_COMMANDS:["blpop","brpop","brpoplpush","blmove","bzpopmin","bzpopmax"],FIRST_ARG_TIMEOUT_COMMANDS:["bzmpop","blmpop"],BLOCK_OPTION_COMMANDS:["xread","xreadgroup"]},l._transformer={argument:{},reply:{}};let d=function(e){if(1===e.length){if(e[0]instanceof Map)return(0,a.convertMapToArray)(e[0]);if("object"==typeof e[0]&&null!==e[0])return(0,a.convertObjectToArray)(e[0])}return e},c=function(e){if(2===e.length){if(e[1]instanceof Map)return[e[0]].concat((0,a.convertMapToArray)(e[1]));if("object"==typeof e[1]&&null!==e[1])return[e[0]].concat((0,a.convertObjectToArray)(e[1]))}return e};l.setArgumentTransformer("mset",d),l.setArgumentTransformer("msetnx",d),l.setArgumentTransformer("hset",c),l.setArgumentTransformer("hmset",c),l.setReplyTransformer("hgetall",function(e){if(Array.isArray(e)){let t={};for(let r=0;r<e.length;r+=2){let i=e[r],n=e[r+1];i in t?Object.defineProperty(t,i,{value:n,configurable:!0,enumerable:!0,writable:!0}):t[i]=n}return t}return e});class u{constructor(){this.length=0,this.items=[]}push(e){this.length+=Buffer.byteLength(e),this.items.push(e)}toBuffer(){let e=Buffer.allocUnsafe(this.length),t=0;for(let r of this.items){let i=Buffer.byteLength(r);Buffer.isBuffer(r)?r.copy(e,t):e.write(r,t,i),t+=i}return e}}},50385:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(79749),n=r(40067),s=r(37898),a=r(71359),o=(0,n.Debug)("dataHandler");class l{constructor(e,t){this.redis=e;let r=new s({stringNumbers:t.stringNumbers,returnBuffers:!0,returnError:e=>{this.returnError(e)},returnFatalError:e=>{this.returnFatalError(e)},returnReply:e=>{this.returnReply(e)}});e.stream.prependListener("data",e=>{r.execute(e)}),e.stream.resume()}returnFatalError(e){e.message+=". Please report this.",this.redis.recoverFromFatalError(e,e,{offlineQueue:!1})}returnError(e){let t=this.shiftCommand(e);if(t){if(e.command={name:t.command.name,args:t.command.args},"ssubscribe"==t.command.name&&e.message.includes("MOVED")){this.redis.emit("moved");return}this.redis.handleReconnection(e,t)}}returnReply(e){if(this.handleMonitorReply(e)||this.handleSubscriberReply(e))return;let t=this.shiftCommand(e);t&&(i.default.checkFlag("ENTER_SUBSCRIBER_MODE",t.command.name)?(this.redis.condition.subscriber=new a.default,this.redis.condition.subscriber.add(t.command.name,e[1].toString()),c(t.command,e[2])||this.redis.commandQueue.unshift(t)):i.default.checkFlag("EXIT_SUBSCRIBER_MODE",t.command.name)?u(t.command,e[2])||this.redis.commandQueue.unshift(t):t.command.resolve(e))}handleSubscriberReply(e){if(!this.redis.condition.subscriber)return!1;let t=Array.isArray(e)?e[0].toString():null;switch(o('receive reply "%s" in subscriber mode',t),t){case"message":this.redis.listeners("message").length>0&&this.redis.emit("message",e[1].toString(),e[2]?e[2].toString():""),this.redis.emit("messageBuffer",e[1],e[2]);break;case"pmessage":{let t=e[1].toString();this.redis.listeners("pmessage").length>0&&this.redis.emit("pmessage",t,e[2].toString(),e[3].toString()),this.redis.emit("pmessageBuffer",t,e[2],e[3]);break}case"smessage":this.redis.listeners("smessage").length>0&&this.redis.emit("smessage",e[1].toString(),e[2]?e[2].toString():""),this.redis.emit("smessageBuffer",e[1],e[2]);break;case"ssubscribe":case"subscribe":case"psubscribe":{let r=e[1].toString();this.redis.condition.subscriber.add(t,r);let i=this.shiftCommand(e);if(!i)return;c(i.command,e[2])||this.redis.commandQueue.unshift(i);break}case"sunsubscribe":case"unsubscribe":case"punsubscribe":{let r=e[1]?e[1].toString():null;r&&this.redis.condition.subscriber.del(t,r);let i=e[2];0===Number(i)&&(this.redis.condition.subscriber=!1);let n=this.shiftCommand(e);if(!n)return;u(n.command,i)||this.redis.commandQueue.unshift(n);break}default:{let t=this.shiftCommand(e);if(!t)return;t.command.resolve(e)}}return!0}handleMonitorReply(e){if("monitoring"!==this.redis.status)return!1;let t=e.toString();if("OK"===t)return!1;let r=t.indexOf(" "),i=t.slice(0,r),n=t.indexOf('"'),s=t.slice(n+1,-1).split('" "').map(e=>e.replace(/\\"/g,'"')),a=t.slice(r+2,n-2).split(" ");return this.redis.emit("monitor",i,s,a[1],a[0]),!0}shiftCommand(e){let t=this.redis.commandQueue.shift();if(!t){let t=Error("Command queue state error. If you can reproduce this, please report it."+(e instanceof Error?` Last error: ${e.message}`:` Last reply: ${e.toString()}`));return this.redis.emit("error",t),null}return t}}t.default=l;let d=new WeakMap;function c(e,t){let r=d.has(e)?d.get(e):e.args.length;return(r-=1)<=0?(e.resolve(t),d.delete(e),!0):(d.set(e,r),!1)}function u(e,t){let r=d.has(e)?d.get(e):e.args.length;return 0===r?0===Number(t)&&(d.delete(e),e.resolve(t),!0):(r-=1)<=0?(e.resolve(t),!0):(d.set(e,r),!1)}},39770:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(74358),n=r(48942),s=r(83499),a=r(73837),o=r(79749),l=r(14300),d=r(40067),c=r(16789);class u extends c.default{constructor(e){super(),this.redis=e,this.isPipeline=!0,this.replyPending=0,this._queue=[],this._result=[],this._transactions=0,this._shaToScript={},this.isCluster="Cluster"===this.redis.constructor.name||this.redis.isCluster,this.options=e.options,Object.keys(e.scriptsSet).forEach(t=>{let r=e.scriptsSet[t];this._shaToScript[r.sha]=r,this[t]=e[t],this[t+"Buffer"]=e[t+"Buffer"]}),e.addedBuiltinSet.forEach(t=>{this[t]=e[t],this[t+"Buffer"]=e[t+"Buffer"]}),this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t});let t=this;Object.defineProperty(this,"length",{get:function(){return t._queue.length}})}fillResult(e,t){if("exec"===this._queue[t].name&&Array.isArray(e[1])){let r=e[1].length;for(let i=0;i<r;i++){if(e[1][i]instanceof Error)continue;let n=this._queue[t-(r-i)];try{e[1][i]=n.transformReply(e[1][i])}catch(t){e[1][i]=t}}}if(this._result[t]=e,--this.replyPending)return;if(this.isCluster){let e,t=!0;for(let r=0;r<this._result.length;++r){let i=this._result[r][0],s=this._queue[r];if(i){if("exec"===s.name&&"EXECABORT Transaction discarded because of previous errors."===i.message)continue;if(e){if(e.name!==i.name||e.message!==i.message){t=!1;break}}else e={name:i.name,message:i.message}}else if(!s.inTransaction&&!((0,n.exists)(s.name,{caseInsensitive:!0})&&(0,n.hasFlag)(s.name,"readonly",{nameCaseInsensitive:!0}))){t=!1;break}}if(e&&t){let t=this,r=e.message.split(" "),i=this._queue,n=!1;this._queue=[];for(let e=0;e<i.length;++e){if("ASK"===r[0]&&!n&&"asking"!==i[e].name&&(!i[e-1]||"asking"!==i[e-1].name)){let e=new o.default("asking");e.ignore=!0,this.sendCommand(e)}i[e].initPromise(),this.sendCommand(i[e]),n=i[e].inTransaction}let s=!0;void 0===this.leftRedirections&&(this.leftRedirections={});let a=function(){t.exec()},l=this.redis;if(l.handleError(e,this.leftRedirections,{moved:function(e,i){t.preferKey=i,l.slots[r[1]]?l.slots[r[1]][0]!==i&&(l.slots[r[1]]=[i]):l.slots[r[1]]=[i],l._groupsBySlot[r[1]]=l._groupsIds[l.slots[r[1]].join(";")],l.refreshSlotsCache(),t.exec()},ask:function(e,r){t.preferKey=r,t.exec()},tryagain:a,clusterDown:a,connectionClosed:a,maxRedirections:()=>{s=!1},defaults:()=>{s=!1}}),s)return}}let r=0;for(let e=0;e<this._queue.length-r;++e)this._queue[e+r].ignore&&(r+=1),this._result[e]=this._result[e+r];this.resolve(this._result.slice(0,this._result.length-r))}sendCommand(e){this._transactions>0&&(e.inTransaction=!0);let t=this._queue.length;return e.pipelineIndex=t,e.promise.then(e=>{this.fillResult([null,e],t)}).catch(e=>{this.fillResult([e],t)}),this._queue.push(e),this}addBatch(e){let t,r,i;for(let n=0;n<e.length;++n)r=(t=e[n])[0],i=t.slice(1),this[r].apply(this,i);return this}}t.default=u;let p=u.prototype.multi;u.prototype.multi=function(){return this._transactions+=1,p.apply(this,arguments)};let h=u.prototype.execBuffer;u.prototype.execBuffer=(0,a.deprecate)(function(){return this._transactions>0&&(this._transactions-=1),h.apply(this,arguments)},"Pipeline#execBuffer: Use Pipeline#exec instead"),u.prototype.exec=function(e){let t;if(this.isCluster&&!this.redis.slots.length)return"wait"===this.redis.status&&this.redis.connect().catch(d.noop),e&&!this.nodeifiedPromise&&(this.nodeifiedPromise=!0,(0,s.default)(this.promise,e)),this.redis.delayUntilReady(t=>{if(t){this.reject(t);return}this.exec(e)}),this.promise;if(this._transactions>0)return this._transactions-=1,h.apply(this,arguments);if(this.nodeifiedPromise||(this.nodeifiedPromise=!0,(0,s.default)(this.promise,e)),this._queue.length||this.resolve([]),this.isCluster){let e=[];for(let t=0;t<this._queue.length;t++){let r=this._queue[t].getKeys();if(r.length&&e.push(r[0]),r.length&&0>i.generateMulti(r))return this.reject(Error("All the keys in a pipeline command should belong to the same slot")),this.promise}if(e.length){if((t=function(e,t){let r=i(t[0]),n=e._groupsBySlot[r];for(let r=1;r<t.length;r++)if(e._groupsBySlot[i(t[r])]!==n)return -1;return r}(this.redis,e))<0)return this.reject(Error("All keys in the pipeline should belong to the same slots allocation group")),this.promise}else t=16384*Math.random()|0}let r=this;return function(){let e,i,n=r.replyPending=r._queue.length;r.isCluster&&(e={slot:t,redis:r.redis.connectionPool.nodes.all[r.preferKey]});let s="",a={isPipeline:!0,destination:r.isCluster?e:{redis:r.redis},write(e){"string"!=typeof e?(i||(i=[]),s&&(i.push(Buffer.from(s,"utf8")),s=""),i.push(e)):(s.length+e.length>=l.constants.MAX_STRING_LENGTH&&(i||(i=[]),s&&(i.push(Buffer.from(s,"utf8")),s="")),s+=e),--n||(i?(s&&i.push(Buffer.from(s,"utf8")),a.destination.redis.stream.write(Buffer.concat(i))):a.destination.redis.stream.write(s),n=r._queue.length,s="",i=void 0)}};for(let t=0;t<r._queue.length;++t)r.redis.sendCommand(r._queue[t],a,e);r.promise}(),this.promise}},90266:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(48942),n=r(82361),s=r(83499),a=r(22742),o=r(79749),l=r(95929),d=r(22280),c=r(54797),u=r(83233),p=r(95842),h=r(28064),y=r(40067),m=r(20036),f=r(82449),b=r(16789),g=r(61681),S=r(35561),v=(0,y.Debug)("redis");class K extends b.default{constructor(e,t,r){if(super(),this.status="wait",this.isCluster=!1,this.reconnectTimeout=null,this.connectionEpoch=0,this.retryAttempts=0,this.manuallyClosing=!1,this._autoPipelines=new Map,this._runningAutoPipelines=new Set,this.parseOptions(e,t,r),n.EventEmitter.call(this),this.resetCommandQueue(),this.resetOfflineQueue(),this.options.Connector)this.connector=new this.options.Connector(this.options);else if(this.options.sentinels){let e=new d.default(this.options);e.emitter=this,this.connector=e}else this.connector=new l.StandaloneConnector(this.options);this.options.scripts&&Object.entries(this.options.scripts).forEach(([e,t])=>{this.defineCommand(e,t)}),this.options.lazyConnect?this.setStatus("wait"):this.connect().catch(g.noop)}static createClient(...e){return new K(...e)}get autoPipelineQueueSize(){let e=0;for(let t of this._autoPipelines.values())e+=t.length;return e}connect(e){let t=(0,m.traceConnect)(()=>this._connect(),()=>{let{address:e,port:t}=this._getServerAddress();return{serverAddress:e,serverPort:t,connectionEpoch:this.connectionEpoch}});return(0,s.default)(t,e)}_connect(){return new Promise((e,t)=>{if("connecting"===this.status||"connect"===this.status||"ready"===this.status){t(Error("Redis is already connecting/connected"));return}this.connectionEpoch+=1,this.setStatus("connecting");let{options:r}=this;this.condition={select:r.db,auth:r.username?[r.username,r.password]:r.password,subscriber:!1};let i=this;(0,s.default)(this.connector.connect(function(e,t){i.silentEmit(e,t)}),function(n,s){if(n){i.flushQueue(n),i.silentEmit("error",n),t(n),i.setStatus("end");return}let a=r.tls?"secureConnect":"connect";if("sentinels"in r&&r.sentinels&&!r.enableTLSForSentinelMode&&(a="connect"),i.stream=s,r.noDelay&&s.setNoDelay(!0),"number"==typeof r.keepAlive&&(s.connecting?s.once(a,()=>{s.setKeepAlive(!0,r.keepAlive)}):s.setKeepAlive(!0,r.keepAlive)),s.connecting){if(s.once(a,c.connectHandler(i)),r.connectTimeout){let e=!1;s.setTimeout(r.connectTimeout,function(){if(e)return;s.setTimeout(0),s.destroy();let t=Error("connect ETIMEDOUT");t.errorno="ETIMEDOUT",t.code="ETIMEDOUT",t.syscall="connect",c.errorHandler(i)(t)}),s.once(a,function(){e=!0,s.setTimeout(0)})}}else if(s.destroyed){let e=i.connector.firstError;e&&process.nextTick(()=>{c.errorHandler(i)(e)}),process.nextTick(c.closeHandler(i))}else process.nextTick(c.connectHandler(i));s.destroyed||(s.once("error",c.errorHandler(i)),s.once("close",c.closeHandler(i)));let o=function(){i.removeListener("close",l),e()};var l=function(){i.removeListener("ready",o),t(Error(y.CONNECTION_CLOSED_ERROR_MSG))};i.once("ready",o),i.once("close",l)})})}disconnect(e=!1){e||(this.manuallyClosing=!0),this.reconnectTimeout&&!e&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),"wait"===this.status?c.closeHandler(this)():this.connector.disconnect()}end(){this.disconnect()}duplicate(e){return new K({...this.options,...e})}get mode(){var e;return this.options.monitor?"monitor":(null===(e=this.condition)||void 0===e?void 0:e.subscriber)?"subscriber":"normal"}monitor(e){let t=this.duplicate({monitor:!0,lazyConnect:!1});return(0,s.default)(new Promise(function(e,r){t.once("error",r),t.once("monitoring",function(){e(t)})}),e)}sendCommand(e,t){var r,n;if("wait"===this.status&&this.connect().catch(g.noop),"end"===this.status)return e.reject(Error(y.CONNECTION_CLOSED_ERROR_MSG)),e.promise;if((null===(r=this.condition)||void 0===r?void 0:r.subscriber)&&!o.default.checkFlag("VALID_IN_SUBSCRIBER_MODE",e.name))return e.reject(Error("Connection in subscriber mode, only subscriber commands may be used")),e.promise;"number"==typeof this.options.commandTimeout&&e.setTimeout(this.options.commandTimeout);let s=this.getBlockingTimeoutInMs(e),a="ready"===this.status||!t&&"connect"===this.status&&(0,i.exists)(e.name,{caseInsensitive:!0})&&((0,i.hasFlag)(e.name,"loading",{nameCaseInsensitive:!0})||o.default.checkFlag("HANDSHAKE_COMMANDS",e.name));if(this.stream&&this.stream.writable?this.stream._writableState&&this.stream._writableState.ended&&(a=!1):a=!1,a)v.enabled&&v("write command[%s]: %d -> %s(%o)",this._getDescription(),null===(n=this.condition)||void 0===n?void 0:n.select,e.name,e.args),t?"isPipeline"in t&&t.isPipeline?t.write(e.toWritable(t.destination.redis.stream)):t.write(e.toWritable(t)):this.stream.write(e.toWritable(this.stream)),this.commandQueue.push({command:e,stream:t,select:this.condition.select}),void 0!==s&&e.setBlockingTimeout(s),o.default.checkFlag("WILL_DISCONNECT",e.name)&&(this.manuallyClosing=!0),void 0!==this.options.socketTimeout&&void 0===this.socketTimeoutTimer&&this.setSocketTimeout();else{if(!this.options.enableOfflineQueue)return e.reject(Error("Stream isn't writeable and enableOfflineQueue options is false")),e.promise;if("quit"===e.name&&0===this.offlineQueue.length)return this.disconnect(),e.resolve(Buffer.from("OK")),e.promise;if(v.enabled&&v("queue command[%s]: %d -> %s(%o)",this._getDescription(),this.condition.select,e.name,e.args),this.offlineQueue.push({command:e,stream:t,select:this.condition.select}),o.default.checkFlag("BLOCKING_COMMANDS",e.name)){let t=this.getConfiguredBlockingTimeout();void 0!==t&&e.setBlockingTimeout(t)}}if("select"===e.name&&(0,y.isInt)(e.args[0])){let t=parseInt(e.args[0],10);this.condition.select!==t&&(this.condition.select=t,this.emit("select",t),v("switch to db [%d]",this.condition.select))}return!a||e.isTraced?e.promise:(e.isTraced=!0,(0,m.traceCommand)(()=>e.promise,()=>this._buildCommandContext(e)))}getBlockingTimeoutInMs(e){var t;if(!o.default.checkFlag("BLOCKING_COMMANDS",e.name))return;let r=this.getConfiguredBlockingTimeout();if(void 0===r)return;let i=e.extractBlockingTimeout();return"number"==typeof i?i>0?i+(null!==(t=this.options.blockingTimeoutGrace)&&void 0!==t?t:u.DEFAULT_REDIS_OPTIONS.blockingTimeoutGrace):r:null===i?r:void 0}getConfiguredBlockingTimeout(){if("number"==typeof this.options.blockingTimeout&&this.options.blockingTimeout>0)return this.options.blockingTimeout}setSocketTimeout(){this.socketTimeoutTimer=setTimeout(()=>{this.stream.destroy(Error(`Socket timeout. Expecting data, but didn't receive any in ${this.options.socketTimeout}ms.`)),this.socketTimeoutTimer=void 0},this.options.socketTimeout),this.stream.once("data",()=>{clearTimeout(this.socketTimeoutTimer),this.socketTimeoutTimer=void 0,0!==this.commandQueue.length&&this.setSocketTimeout()})}scanStream(e){return this.createScanStream("scan",{options:e})}scanBufferStream(e){return this.createScanStream("scanBuffer",{options:e})}sscanStream(e,t){return this.createScanStream("sscan",{key:e,options:t})}sscanBufferStream(e,t){return this.createScanStream("sscanBuffer",{key:e,options:t})}hscanStream(e,t){return this.createScanStream("hscan",{key:e,options:t})}hscanBufferStream(e,t){return this.createScanStream("hscanBuffer",{key:e,options:t})}zscanStream(e,t){return this.createScanStream("zscan",{key:e,options:t})}zscanBufferStream(e,t){return this.createScanStream("zscanBuffer",{key:e,options:t})}silentEmit(e,t){let r;return"error"===e&&(r=t,"end"===this.status||this.manuallyClosing&&r instanceof Error&&(r.message===y.CONNECTION_CLOSED_ERROR_MSG||"connect"===r.syscall||"read"===r.syscall))?void 0:this.listeners(e).length>0?this.emit.apply(this,arguments):(r&&r instanceof Error&&console.error("[ioredis] Unhandled error event:",r.stack),!1)}recoverFromFatalError(e,t,r){this.flushQueue(t,r),this.silentEmit("error",t),this.disconnect(!0)}handleReconnection(e,t){var r;let i=!1;switch(this.options.reconnectOnError&&!o.default.checkFlag("IGNORE_RECONNECT_ON_ERROR",t.command.name)&&(i=this.options.reconnectOnError(e)),i){case 1:case!0:"reconnecting"!==this.status&&this.disconnect(!0),t.command.reject(e);break;case 2:"reconnecting"!==this.status&&this.disconnect(!0),(null===(r=this.condition)||void 0===r?void 0:r.select)!==t.select&&"select"!==t.command.name&&this.select(t.select),this.sendCommand(t.command);break;default:t.command.reject(e)}}_getServerAddress(){return"path"in this.options&&this.options.path?{address:this.options.path,port:void 0}:{address:"host"in this.options&&this.options.host||"localhost",port:"port"in this.options&&this.options.port||6379}}_buildCommandContext(e){var t,r,i;let{address:n,port:s}=this._getServerAddress();return{command:e.name,args:(0,m.sanitizeArgs)(e.name,e.args),database:null!==(i=null!==(r=null===(t=this.condition)||void 0===t?void 0:t.select)&&void 0!==r?r:this.options.db)&&void 0!==i?i:0,serverAddress:n,serverPort:s}}_buildBatchContext(e){var t,r,i;let{address:n,port:s}=this._getServerAddress();return{batchMode:"MULTI",batchSize:e,database:null!==(i=null!==(r=null===(t=this.condition)||void 0===t?void 0:t.select)&&void 0!==r?r:this.options.db)&&void 0!==i?i:0,serverAddress:n,serverPort:s}}_getDescription(){let e;return e="path"in this.options&&this.options.path?this.options.path:this.stream&&this.stream.remoteAddress&&this.stream.remotePort?this.stream.remoteAddress+":"+this.stream.remotePort:"host"in this.options&&this.options.host?this.options.host+":"+this.options.port:"",this.options.connectionName&&(e+=` (${this.options.connectionName})`),e}resetCommandQueue(){this.commandQueue=new S}resetOfflineQueue(){this.offlineQueue=new S}parseOptions(...e){let t={},r=!1;for(let i=0;i<e.length;++i){let n=e[i];if(null!=n){if("object"==typeof n)(0,g.defaults)(t,n);else if("string"==typeof n)(0,g.defaults)(t,(0,y.parseURL)(n)),n.startsWith("rediss://")&&(r=!0);else if("number"==typeof n)t.port=n;else throw Error("Invalid argument "+n)}}r&&(0,g.defaults)(t,{tls:!0}),(0,g.defaults)(t,K.defaultOptions),"string"==typeof t.port&&(t.port=parseInt(t.port,10)),"string"==typeof t.db&&(t.db=parseInt(t.db,10)),this.options=(0,y.resolveTLSProfile)(t)}setStatus(e,t){v.enabled&&v("status[%s]: %s -> %s",this._getDescription(),this.status||"[empty]",e),this.status=e,process.nextTick(this.emit.bind(this,e,t))}createScanStream(e,{key:t,options:r={}}){return new p.default({objectMode:!0,key:t,redis:this,command:e,...r})}flushQueue(e,t){let r;if((t=(0,g.defaults)({},t,{offlineQueue:!0,commandQueue:!0})).offlineQueue)for(;r=this.offlineQueue.shift();)r.command.reject(e);if(t.commandQueue&&this.commandQueue.length>0)for(this.stream&&this.stream.removeAllListeners("data");r=this.commandQueue.shift();)r.command.reject(e)}_readyCheck(e){let t=this;this.info(function(r,i){if(r)return r.message&&r.message.includes("NOPERM")?(console.warn(`Skipping the ready check because INFO command fails: "${r.message}". You can disable ready check with "enableReadyCheck". More: https://github.com/luin/ioredis/wiki/Disable-ready-check.`),e(null,{})):e(r);if("string"!=typeof i)return e(null,i);let n={},s=i.split("\r\n");for(let e=0;e<s.length;++e){let[t,...r]=s[e].split(":"),i=r.join(":");i&&(n[t]=i)}if(n.loading&&"0"!==n.loading){let r=1e3*(n.loading_eta_seconds||1),i=t.options.maxLoadingRetryTime&&t.options.maxLoadingRetryTime<r?t.options.maxLoadingRetryTime:r;v("Redis server still loading, trying again in "+i+"ms"),setTimeout(function(){t._readyCheck(e)},i)}else e(null,n)}).catch(g.noop)}}K.Cluster=a.default,K.Command=o.default,K.defaultOptions=u.DEFAULT_REDIS_OPTIONS,(0,f.default)(K,n.EventEmitter),(0,h.addTransactionSupport)(K.prototype),t.default=K},95842:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(12781);class n extends i.Readable{constructor(e){super(e),this.opt=e,this._redisCursor="0",this._redisDrained=!1}_read(){if(this._redisDrained){this.push(null);return}let e=[this._redisCursor];this.opt.key&&e.unshift(this.opt.key),this.opt.match&&e.push("MATCH",this.opt.match),this.opt.type&&e.push("TYPE",this.opt.type),this.opt.count&&e.push("COUNT",String(this.opt.count)),this.opt.noValues&&e.push("NOVALUES"),this.opt.redis[this.opt.command](e,(e,t)=>{if(e){this.emit("error",e);return}this._redisCursor=t[0]instanceof Buffer?t[0].toString():t[0],"0"===this._redisCursor&&(this._redisDrained=!0),this.push(t[1])})}close(){this._redisDrained=!0}}t.default=n},74424:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(6113),n=r(79749),s=r(83499);class a{constructor(e,t=null,r="",s=!1){this.lua=e,this.numberOfKeys=t,this.keyPrefix=r,this.readOnly=s,this.sha=(0,i.createHash)("sha1").update(e).digest("hex");let a=this.sha,o=new WeakSet;this.Command=class extends n.default{toWritable(t){let r=this.reject;return this.reject=e=>{-1!==e.message.indexOf("NOSCRIPT")&&o.delete(t),r.call(this,e)},o.has(t)?"eval"===this.name&&(this.name="evalsha",this.args[0]=a):(o.add(t),this.name="eval",this.args[0]=e),super.toWritable(t)}}}execute(e,t,r,i){"number"==typeof this.numberOfKeys&&t.unshift(this.numberOfKeys),this.keyPrefix&&(r.keyPrefix=this.keyPrefix),this.readOnly&&(r.readOnly=!0);let n=new this.Command("evalsha",[this.sha,...t],r);return n.promise=n.promise.catch(i=>{if(-1===i.message.indexOf("NOSCRIPT"))throw i;let n=new this.Command("evalsha",[this.sha,...t],r);return(e.isPipeline?e.redis:e).sendCommand(n)}),(0,s.default)(n.promise,i),e.sendCommand(n)}}t.default=a},71359:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(){this.set={subscribe:{},psubscribe:{},ssubscribe:{}}}add(e,t){this.set[i(e)][t]=!0}del(e,t){delete this.set[i(e)][t]}channels(e){return Object.keys(this.set[i(e)])}isEmpty(){return 0===this.channels("subscribe").length&&0===this.channels("psubscribe").length&&0===this.channels("ssubscribe").length}}function i(e){return"unsubscribe"===e?"subscribe":"punsubscribe"===e?"psubscribe":"sunsubscribe"===e?"ssubscribe":e}t.default=r},10996:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.executeWithAutoPipelining=t.getFirstValueInFlattenedArray=t.shouldUseAutoPipelining=t.notAllowedAutoPipelineCommands=t.kCallbacks=t.kExec=void 0;let i=r(61681),n=r(74358),s=r(83499),a=r(48942);function o(e){for(let t=0;t<e.length;t++){let r=e[t];if("string"==typeof r)return r;if(Array.isArray(r)||(0,i.isArguments)(r)){if(0===r.length)continue;return r[0]}let n=[r].flat();if(n.length>0)return n[0]}}t.kExec=Symbol("exec"),t.kCallbacks=Symbol("callbacks"),t.notAllowedAutoPipelineCommands=["auth","info","script","quit","cluster","pipeline","multi","subscribe","psubscribe","unsubscribe","unpsubscribe","select","client"],t.shouldUseAutoPipelining=function(e,r,i){return r&&e.options.enableAutoPipelining&&!e.isPipeline&&!t.notAllowedAutoPipelineCommands.includes(i)&&!e.options.autoPipeliningIgnoredCommands.includes(i)},t.getFirstValueInFlattenedArray=o,t.executeWithAutoPipelining=function e(r,l,d,c,u){if(r.isCluster&&!r.slots.length)return"wait"===r.status&&r.connect().catch(i.noop),(0,s.default)(new Promise(function(t,i){r.delayUntilReady(n=>{if(n){i(n);return}e(r,l,d,c,null).then(t,i)})}),u);let p=r.options.keyPrefix||"",h=r.isCluster?r.slots[n(`${p}${function(e,t){if((0,a.exists)(e,{caseInsensitive:!0})){let r=t.flat(),i=(0,a.getKeyIndexes)(e,r,{nameCaseInsensitive:!0});if(i.length)return r[i[0]]}return o(t)}(d,c)}`)].join(","):"main";if(r.isCluster&&"master"!==r.options.scaleReads&&(h+=(0,a.exists)(d)&&(0,a.hasFlag)(d,"readonly")?":read":":write"),!r._autoPipelines.has(h)){let e=r.pipeline();e[t.kExec]=!1,e[t.kCallbacks]=[],r._autoPipelines.set(h,e)}let y=r._autoPipelines.get(h);y[t.kExec]||(y[t.kExec]=!0,setImmediate(function e(r,i){if(r._runningAutoPipelines.has(i)||!r._autoPipelines.has(i))return;r._runningAutoPipelines.add(i);let n=r._autoPipelines.get(i);r._autoPipelines.delete(i);let s=n[t.kCallbacks];n[t.kCallbacks]=null,n.exec(function(t,n){if(r._runningAutoPipelines.delete(i),t)for(let e=0;e<s.length;e++)process.nextTick(s[e],t);else for(let e=0;e<s.length;e++)process.nextTick(s[e],...n[e]);r._autoPipelines.has(i)&&e(r,i)})},r,h));let m=new Promise(function(e,r){y[t.kCallbacks].push(function(t,i){if(t){r(t);return}e(i)}),"call"===l&&c.unshift(d),y[l](...c)});return(0,s.default)(m,u)}},12105:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_CLUSTER_OPTIONS=void 0;let i=r(9523);t.DEFAULT_CLUSTER_OPTIONS={clusterRetryStrategy:e=>Math.min(100+2*e,2e3),clusterNodeRetryStrategy:null,enableOfflineQueue:!0,enableReadyCheck:!0,scaleReads:"master",maxRedirections:16,retryDelayOnMoved:0,retryDelayOnFailover:100,retryDelayOnClusterDown:100,retryDelayOnTryAgain:100,slotsRefreshTimeout:1e3,useSRVRecords:!1,resolveSrv:i.resolveSrv,dnsLookup:i.lookup,enableAutoPipelining:!1,autoPipeliningIgnoredCommands:[],shardedSubscribers:!1}},52468:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(67285),n=r(40067),s=r(90266),a=(0,n.Debug)("cluster:subscriber");class o{constructor(e,t,r=!1){this.connectionPool=e,this.emitter=t,this.isSharded=r,this.started=!1,this.subscriber=null,this.slotRange=[],this.onSubscriberEnd=()=>{if(!this.started){a("subscriber has disconnected, but ClusterSubscriber is not started, so not reconnecting.");return}a("subscriber has disconnected, selecting a new one..."),this.selectSubscriber()},this.connectionPool.on("-node",(e,t)=>{this.started&&this.subscriber&&(0,i.getNodeKey)(this.subscriber.options)===t&&(a("subscriber has left, selecting a new one..."),this.selectSubscriber())}),this.connectionPool.on("+node",()=>{this.started&&!this.subscriber&&(a("a new node is discovered and there is no subscriber, selecting a new one..."),this.selectSubscriber())})}getInstance(){return this.subscriber}associateSlotRange(e){return this.isSharded&&(this.slotRange=e),this.slotRange}start(){this.started=!0,this.selectSubscriber(),a("started")}stop(){this.started=!1,this.subscriber&&(this.subscriber.disconnect(),this.subscriber=null)}isStarted(){return this.started}selectSubscriber(){let e=this.lastActiveSubscriber;e&&(e.off("end",this.onSubscriberEnd),e.disconnect()),this.subscriber&&(this.subscriber.off("end",this.onSubscriberEnd),this.subscriber.disconnect());let t=(0,n.sample)(this.connectionPool.getNodes());if(!t){a("selecting subscriber failed since there is no node discovered in the cluster yet"),this.subscriber=null;return}let{options:r}=t;a("selected a subscriber %s:%s",r.host,r.port);let o="subscriber";this.isSharded&&(o="ssubscriber"),this.subscriber=new s.default({port:r.port,host:r.host,username:r.username,password:r.password,enableReadyCheck:!0,connectionName:(0,i.getConnectionName)(o,r.connectionName),lazyConnect:!0,tls:r.tls,retryStrategy:null}),this.subscriber.on("error",n.noop),this.subscriber.on("moved",()=>{this.emitter.emit("forceRefresh")}),this.subscriber.once("end",this.onSubscriberEnd);let l={subscribe:[],psubscribe:[],ssubscribe:[]};if(e){let t=e.condition||e.prevCondition;t&&t.subscriber&&(l.subscribe=t.subscriber.channels("subscribe"),l.psubscribe=t.subscriber.channels("psubscribe"),l.ssubscribe=t.subscriber.channels("ssubscribe"))}if(l.subscribe.length||l.psubscribe.length||l.ssubscribe.length){let e=0;for(let t of["subscribe","psubscribe","ssubscribe"]){let r=l[t];if(0!=r.length){if(a("%s %d channels",t,r.length),"ssubscribe"===t)for(let i of r)e+=1,this.subscriber[t](i).then(()=>{--e||(this.lastActiveSubscriber=this.subscriber)}).catch(()=>{a("failed to ssubscribe to channel: %s",i)});else e+=1,this.subscriber[t](r).then(()=>{--e||(this.lastActiveSubscriber=this.subscriber)}).catch(()=>{a("failed to %s %d channels",t,r.length)})}}}else this.lastActiveSubscriber=this.subscriber;for(let e of["message","messageBuffer"])this.subscriber.on(e,(t,r)=>{this.emitter.emit(e,t,r)});for(let e of["pmessage","pmessageBuffer"])this.subscriber.on(e,(t,r,i)=>{this.emitter.emit(e,t,r,i)});if(!0==this.isSharded)for(let e of["smessage","smessageBuffer"])this.subscriber.on(e,(t,r)=>{this.emitter.emit(e,t,r)})}}t.default=o},48348:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(40067),n=r(67285),s=r(74358),a=r(58909),o=(0,i.Debug)("cluster:subscriberGroup");class l{constructor(e,t){this.subscriberGroupEmitter=e,this.options=t,this.shardedSubscribers=new Map,this.clusterSlots=[],this.subscriberToSlotsIndex=new Map,this.channels=new Map,this.failedAttemptsByNode=new Map,this.isResetting=!1,this.pendingReset=null,this.handleSubscriberConnectFailed=(e,t)=>{let r=(this.failedAttemptsByNode.get(t)||0)+1;this.failedAttemptsByNode.set(t,r);let i=Math.min(r,l.MAX_RETRY_ATTEMPTS),n=Math.min(l.BASE_BACKOFF_MS*2**i,l.MAX_BACKOFF_MS),s=Math.max(0,n+Math.floor(.5*n*(Math.random()-.5)));o("Failed to connect subscriber for %s. Refreshing slots in %dms",t,s),this.subscriberGroupEmitter.emit("subscriberConnectFailed",{delay:s,error:e})},this.handleSubscriberConnectSucceeded=e=>{this.failedAttemptsByNode.delete(e)}}getResponsibleSubscriber(e){let t=this.clusterSlots[e][0],r=this.shardedSubscribers.get(t);return r&&"idle"===r.subscriberStatus&&r.start().then(()=>{this.handleSubscriberConnectSucceeded(r.getNodeKey())}).catch(e=>{this.handleSubscriberConnectFailed(e,r.getNodeKey())}),r}addChannels(e){let t=s(e[0]);for(let r of e)if(s(r)!==t)return -1;let r=this.channels.get(t);return r?this.channels.set(t,r.concat(e)):this.channels.set(t,e),Array.from(this.channels.values()).reduce((e,t)=>e+t.length,0)}removeChannels(e){let t=s(e[0]);for(let r of e)if(s(r)!==t)return -1;let r=this.channels.get(t);if(r){let i=r.filter(t=>!e.includes(t));this.channels.set(t,i)}return Array.from(this.channels.values()).reduce((e,t)=>e+t.length,0)}stop(){for(let e of this.shardedSubscribers.values())e.stop();this.pendingReset=null,this.shardedSubscribers.clear(),this.subscriberToSlotsIndex.clear()}start(){let e=[];for(let t of this.shardedSubscribers.values())this.shouldStartSubscriber(t)&&(e.push(t.start().then(()=>{this.handleSubscriberConnectSucceeded(t.getNodeKey())}).catch(e=>{this.handleSubscriberConnectFailed(e,t.getNodeKey())})),this.subscriberGroupEmitter.emit("+subscriber"));return Promise.all(e)}async reset(e,t){if(this.isResetting){this.pendingReset={slots:e,nodes:t};return}this.isResetting=!0;try{let r=this._refreshSlots(e),i=this.hasUnhealthySubscribers();if(!r&&!i){o("No topology change detected or failed subscribers. Skipping reset.");return}for(let[e,t]of this.shardedSubscribers){if(this.subscriberToSlotsIndex.has(e)&&t.isHealthy()){o("Skipping deleting subscriber for %s",e);continue}o("Removing subscriber for %s",e),t.stop(),this.shardedSubscribers.delete(e),this.subscriberGroupEmitter.emit("-subscriber")}let s=[];for(let[e,r]of this.subscriberToSlotsIndex){let r=this.shardedSubscribers.get(e);if(r&&r.isHealthy()){o("Skipping creating new subscriber for %s",e),!r.isStarted()&&this.shouldStartSubscriber(r)&&s.push(r.start().then(()=>{this.handleSubscriberConnectSucceeded(e)}).catch(t=>{this.handleSubscriberConnectFailed(t,e)}));continue}r&&!r.isHealthy()&&(o("Replacing subscriber for %s",e),r.stop(),this.shardedSubscribers.delete(e),this.subscriberGroupEmitter.emit("-subscriber")),o("Creating new subscriber for %s",e);let i=t.find(t=>(0,n.getNodeKey)(t.options)===e);if(!i){o("Failed to find node for key %s",e);continue}let l=new a.default(this.subscriberGroupEmitter,i.options,this.options.redisOptions);this.shardedSubscribers.set(e,l),this.shouldStartSubscriber(l)&&s.push(l.start().then(()=>{this.handleSubscriberConnectSucceeded(e)}).catch(t=>{this.handleSubscriberConnectFailed(t,e)})),this.subscriberGroupEmitter.emit("+subscriber")}await Promise.all(s),this._resubscribe(),this.subscriberGroupEmitter.emit("subscribersReady")}finally{if(this.isResetting=!1,this.pendingReset){let{slots:e,nodes:t}=this.pendingReset;this.pendingReset=null,await this.reset(e,t)}}}_refreshSlots(e){if(this._slotsAreEqual(e)&&this.subscriberToSlotsIndex.size>0)return o("Nothing to refresh because the new cluster map is equal to the previous one."),!1;o("Refreshing the slots of the subscriber group."),this.subscriberToSlotsIndex=new Map;for(let t=0;t<e.length;t++){let r=e[t][0];this.subscriberToSlotsIndex.has(r)||this.subscriberToSlotsIndex.set(r,[]),this.subscriberToSlotsIndex.get(r).push(Number(t))}return this.clusterSlots=JSON.parse(JSON.stringify(e)),!0}_resubscribe(){this.shardedSubscribers&&this.shardedSubscribers.forEach((e,t)=>{let r=this.subscriberToSlotsIndex.get(t);r&&r.forEach(r=>{let i=e.getInstance(),n=this.channels.get(r);if(n&&n.length>0){if(!i||"end"===i.status)return;"ready"===i.status?i.ssubscribe(...n).catch(e=>{o("Failed to ssubscribe on node %s: %s",t,e)}):i.once("ready",()=>{i.ssubscribe(...n).catch(e=>{o("Failed to ssubscribe on node %s: %s",t,e)})})}})})}_slotsAreEqual(e){return void 0!==this.clusterSlots&&JSON.stringify(this.clusterSlots)===JSON.stringify(e)}hasUnhealthySubscribers(){let e=Array.from(this.shardedSubscribers.values()).some(e=>!e.isHealthy()),t=Array.from(this.subscriberToSlotsIndex.keys()).some(e=>!this.shardedSubscribers.has(e));return e||t}shouldStartSubscriber(e){if(e.isStarted())return!1;if(!e.isLazyConnect())return!0;let t=this.subscriberToSlotsIndex.get(e.getNodeKey());return!!t&&t.some(e=>{let t=this.channels.get(e);return!!(t&&t.length>0)})}}t.default=l,l.MAX_RETRY_ATTEMPTS=10,l.MAX_BACKOFF_MS=2e3,l.BASE_BACKOFF_MS=100},32341:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(82361),n=r(40067),s=r(67285),a=r(90266),o=(0,n.Debug)("cluster:connectionPool");class l extends i.EventEmitter{constructor(e,t=null){super(),this.redisOptions=e,this.clusterNodeRetryStrategy=t,this.nodes={all:{},master:{},slave:{}},this.specifiedOptions={}}getNodes(e="all"){let t=this.nodes[e];return Object.keys(t).map(e=>t[e])}getInstanceByKey(e){return this.nodes.all[e]}getSampleInstance(e){let t=Object.keys(this.nodes[e]),r=(0,n.sample)(t);return this.nodes[e][r]}addMasterNode(e){let t=(0,s.getNodeKey)(e.options),r=this.createRedisFromOptions(e,e.options.readOnly);return!e.options.readOnly&&(this.nodes.all[t]=r,this.nodes.master[t]=r,!0)}createRedisFromOptions(e,t){return new a.default((0,n.defaults)({retryStrategy:"function"==typeof this.clusterNodeRetryStrategy?this.clusterNodeRetryStrategy:null,enableOfflineQueue:!0,readOnly:t},e,this.redisOptions,{lazyConnect:!0}))}findOrCreate(e,t=!1){let r;let i=(0,s.getNodeKey)(e);return t=!!t,this.specifiedOptions[i]?Object.assign(e,this.specifiedOptions[i]):this.specifiedOptions[i]=e,this.nodes.all[i]?(r=this.nodes.all[i]).options.readOnly!==t&&(r.options.readOnly=t,o("Change role of %s to %s",i,t?"slave":"master"),r[t?"readonly":"readwrite"]().catch(n.noop),t?(delete this.nodes.master[i],this.nodes.slave[i]=r):(delete this.nodes.slave[i],this.nodes.master[i]=r)):(o("Connecting to %s as %s",i,t?"slave":"master"),r=this.createRedisFromOptions(e,t),this.nodes.all[i]=r,this.nodes[t?"slave":"master"][i]=r,r.once("end",()=>{this.removeNode(i),this.emit("-node",r,i),Object.keys(this.nodes.all).length||this.emit("drain")}),this.emit("+node",r,i),r.on("error",e=>{this.emit("nodeError",e,i)})),r}reset(e){o("Reset with %O",e);let t={};e.forEach(e=>{let r=(0,s.getNodeKey)(e);e.readOnly&&t[r]||(t[r]=e)}),Object.keys(this.nodes.all).forEach(e=>{t[e]||(o("Disconnect %s because the node does not hold any slot",e),this.nodes.all[e].disconnect(),this.removeNode(e))}),Object.keys(t).forEach(e=>{let r=t[e];this.findOrCreate(r,r.readOnly)})}removeNode(e){let{nodes:t}=this;t.all[e]&&(o("Remove %s from the pool",e),delete t.all[e]),delete t.master[e],delete t.slave[e]}}t.default=l},47486:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(40067),n=r(35561),s=(0,i.Debug)("delayqueue");class a{constructor(){this.queues={},this.timeouts={}}push(e,t,r){let i=r.callback||process.nextTick;this.queues[e]||(this.queues[e]=new n),this.queues[e].push(t),this.timeouts[e]||(this.timeouts[e]=setTimeout(()=>{i(()=>{this.timeouts[e]=null,this.execute(e)})},r.timeout))}execute(e){let t=this.queues[e];if(!t)return;let{length:r}=t;if(r)for(s("send %d commands in %s queue",r,e),this.queues[e]=null;t.length>0;)t.shift()()}}t.default=a},58909:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(67285),n=r(40067),s=r(90266),a=(0,n.Debug)("cluster:subscriberGroup:shardedSubscriber"),o={IDLE:"idle",STARTING:"starting",CONNECTED:"connected",STOPPING:"stopping",ENDED:"ended"},l={[o.IDLE]:[o.STARTING,o.STOPPING,o.ENDED],[o.STARTING]:[o.CONNECTED,o.STOPPING,o.ENDED],[o.CONNECTED]:[o.STOPPING,o.ENDED],[o.STOPPING]:[o.ENDED],[o.ENDED]:[]};class d{constructor(e,t,r){var a;for(let l of(this.emitter=e,this.status=o.IDLE,this.instance=null,this.connectPromise=null,this.messageListeners=new Map,this.onEnd=()=>{this.updateStatus(o.ENDED),this.emitter.emit("-node",this.instance,this.nodeKey)},this.onError=e=>{this.emitter.emit("nodeError",e,this.nodeKey)},this.onMoved=()=>{this.emitter.emit("moved")},this.instance=new s.default((0,n.defaults)({enableReadyCheck:!1,enableOfflineQueue:!0,connectionName:(0,i.getConnectionName)("ssubscriber",t.connectionName),retryStrategy:null,lazyConnect:!0},t,r)),this.lazyConnect=null===(a=null==r?void 0:r.lazyConnect)||void 0===a||a,this.nodeKey=(0,i.getNodeKey)(t),this.instance.on("end",this.onEnd),this.instance.on("error",this.onError),this.instance.on("moved",this.onMoved),["smessage","smessageBuffer"])){let e=(...e)=>{this.emitter.emit(l,...e)};this.messageListeners.set(l,e),this.instance.on(l,e)}}async start(){if(this.connectPromise)return this.connectPromise;if(this.status!==o.STARTING&&this.status!==o.CONNECTED){if(this.status===o.ENDED||!this.instance)throw Error(`Sharded subscriber ${this.nodeKey} cannot be restarted once ended.`);this.updateStatus(o.STARTING),this.connectPromise=this.instance.connect();try{await this.connectPromise,this.updateStatus(o.CONNECTED)}catch(e){throw this.updateStatus(o.ENDED),e}finally{this.connectPromise=null}}}stop(){this.updateStatus(o.STOPPING),this.instance&&(this.instance.disconnect(),this.instance.removeAllListeners(),this.messageListeners.clear(),this.instance=null),this.updateStatus(o.ENDED),a("stopped %s",this.nodeKey)}isStarted(){return[o.CONNECTED,o.STARTING].includes(this.status)}get subscriberStatus(){return this.status}isHealthy(){return(this.status===o.IDLE||this.status===o.CONNECTED||this.status===o.STARTING)&&null!==this.instance}getInstance(){return this.instance}getNodeKey(){return this.nodeKey}isLazyConnect(){return this.lazyConnect}updateStatus(e){if(this.status!==e){if(!l[this.status].includes(e)){a("Invalid status transition for %s: %s -> %s",this.nodeKey,this.status,e);return}this.status=e}}}t.default=d},22742:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(48942),n=r(82361),s=r(13122),a=r(83499),o=r(79749),l=r(47845),d=r(90266),c=r(95842),u=r(28064),p=r(40067),h=r(82449),y=r(16789),m=r(12105),f=r(52468),b=r(32341),g=r(47486),S=r(67285),v=r(35561),K=r(48348),k=(0,p.Debug)("cluster"),E=new WeakSet;class I extends y.default{constructor(e,t={}){var r;if(super(),this.slots=[],this._groupsIds={},this._groupsBySlot=Array(16384),this.isCluster=!0,this.retryAttempts=0,this.delayQueue=new g.default,this.offlineQueue=new v,this.isRefreshing=!1,this._refreshSlotsCacheCallbacks=[],this._autoPipelines=new Map,this._runningAutoPipelines=new Set,this._readyDelayedCallbacks=[],this.connectionEpoch=0,n.EventEmitter.call(this),this.startupNodes=e,this.options=(0,p.defaults)({},t,m.DEFAULT_CLUSTER_OPTIONS,this.options),this.options.shardedSubscribers&&this.createShardedSubscriberGroup(),this.options.redisOptions&&this.options.redisOptions.keyPrefix&&!this.options.keyPrefix&&(this.options.keyPrefix=this.options.redisOptions.keyPrefix),"function"!=typeof this.options.scaleReads&&-1===["all","master","slave"].indexOf(this.options.scaleReads))throw Error('Invalid option scaleReads "'+this.options.scaleReads+'". Expected "all", "master", "slave" or a custom function');this.connectionPool=new b.default(null!==(r=this.options.redisOptions)&&void 0!==r?r:{},this.options.clusterNodeRetryStrategy),this.connectionPool.on("-node",(e,t)=>{this.emit("-node",e)}),this.connectionPool.on("+node",e=>{this.emit("+node",e)}),this.connectionPool.on("drain",()=>{this.setStatus("close")}),this.connectionPool.on("nodeError",(e,t)=>{this.emit("node error",e,t)}),this.subscriber=new f.default(this.connectionPool,this),this.options.scripts&&Object.entries(this.options.scripts).forEach(([e,t])=>{this.defineCommand(e,t)}),this.options.lazyConnect?this.setStatus("wait"):this.connect().catch(e=>{k("connecting failed: %s",e)})}connect(){return new Promise((e,t)=>{if("connecting"===this.status||"connect"===this.status||"ready"===this.status){t(Error("Redis is already connecting/connected"));return}let r=++this.connectionEpoch;this.setStatus("connecting"),this.resolveStartupNodeHostnames().then(i=>{let n;if(this.connectionEpoch!==r){k("discard connecting after resolving startup nodes because epoch not match: %d != %d",r,this.connectionEpoch),t(new s.RedisError("Connection is discarded because a new connection is made"));return}if("connecting"!==this.status){k("discard connecting after resolving startup nodes because the status changed to %s",this.status),t(new s.RedisError("Connection is aborted"));return}this.connectionPool.reset(i),this.options.shardedSubscribers&&this.shardedSubscribers.reset(this.slots,this.connectionPool.getNodes("all")).catch(e=>{k("Error while starting subscribers: %s",e)});let a=()=>{this.setStatus("ready"),this.retryAttempts=0,this.executeOfflineCommands(),this.resetNodesRefreshInterval(),e()},o=()=>{this.invokeReadyDelayedCallbacks(void 0),this.removeListener("close",n),this.manuallyClosing=!1,this.setStatus("connect"),this.options.enableReadyCheck?this.readyCheck((e,t)=>{e||t?(k("Ready check failed (%s). Reconnecting...",e||t),"connect"===this.status&&this.disconnect(!0)):a()}):a()};n=()=>{let e=Error("None of startup nodes is available");this.removeListener("refresh",o),this.invokeReadyDelayedCallbacks(e),t(e)},this.once("refresh",o),this.once("close",n),this.once("close",this.handleCloseEvent.bind(this)),this.refreshSlotsCache(e=>{e&&e.message===l.default.defaultMessage&&(d.default.prototype.silentEmit.call(this,"error",e),this.connectionPool.reset([]))}),this.subscriber.start(),this.options.shardedSubscribers&&this.shardedSubscribers.start().catch(e=>{k("Error while starting subscribers: %s",e)})}).catch(e=>{this.setStatus("close"),this.handleCloseEvent(e),this.invokeReadyDelayedCallbacks(e),t(e)})})}disconnect(e=!1){let t=this.status;this.setStatus("disconnecting"),e||(this.manuallyClosing=!0),this.reconnectTimeout&&!e&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null,k("Canceled reconnecting attempts")),this.clearNodesRefreshInterval(),this.subscriber.stop(),this.options.shardedSubscribers&&this.shardedSubscribers.stop(),"wait"===t?(this.setStatus("close"),this.handleCloseEvent()):this.connectionPool.reset([])}quit(e){let t=this.status;if(this.setStatus("disconnecting"),this.manuallyClosing=!0,this.reconnectTimeout&&(clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null),this.clearNodesRefreshInterval(),this.subscriber.stop(),this.options.shardedSubscribers&&this.shardedSubscribers.stop(),"wait"===t){let t=(0,a.default)(Promise.resolve("OK"),e);return setImmediate((function(){this.setStatus("close"),this.handleCloseEvent()}).bind(this)),t}return(0,a.default)(Promise.all(this.nodes().map(e=>e.quit().catch(e=>{if(e.message===p.CONNECTION_CLOSED_ERROR_MSG)return"OK";throw e}))).then(()=>"OK"),e)}duplicate(e=[],t={}){return new I(e.length>0?e:this.startupNodes.slice(0),Object.assign({},this.options,t))}nodes(e="all"){if("all"!==e&&"master"!==e&&"slave"!==e)throw Error('Invalid role "'+e+'". Expected "all", "master" or "slave"');return this.connectionPool.getNodes(e)}delayUntilReady(e){this._readyDelayedCallbacks.push(e)}get autoPipelineQueueSize(){let e=0;for(let t of this._autoPipelines.values())e+=t.length;return e}refreshSlotsCache(e){if(e&&this._refreshSlotsCacheCallbacks.push(e),this.isRefreshing)return;this.isRefreshing=!0;let t=this,r=e=>{for(let t of(this.isRefreshing=!1,this._refreshSlotsCacheCallbacks))t(e);this._refreshSlotsCacheCallbacks=[]},i=(0,p.shuffle)(this.connectionPool.getNodes()),n=null;!function e(s){if(s===i.length)return r(new l.default(l.default.defaultMessage,n));let a=i[s],o=`${a.options.host}:${a.options.port}`;k("getting slot cache from %s",o),t.getInfoFromNode(a,function(i){switch(t.status){case"close":case"end":return r(Error("Cluster is disconnected."));case"disconnecting":return r(Error("Cluster is disconnecting."))}i?(t.emit("node error",i,o),n=i,e(s+1)):(t.emit("refresh"),r())})}(0)}sendCommand(e,t,r){if("wait"===this.status&&this.connect().catch(p.noop),"end"===this.status)return e.reject(Error(p.CONNECTION_CLOSED_ERROR_MSG)),e.promise;let n=this.options.scaleReads;"master"===n||e.isReadOnly||(0,i.exists)(e.name)&&(0,i.hasFlag)(e.name,"readonly")||(n="master");let a=r?r.slot:e.getSlot(),l={},d=this;if(!r&&!E.has(e)){E.add(e);let t=e.reject;e.reject=function(r){let i=c.bind(null,!0);d.handleError(r,l,{moved:function(t,r){k("command %s is moved to %s",e.name,r),a=Number(t),d.slots[t]?d.slots[t][0]=r:d.slots[t]=[r],d._groupsBySlot[t]=d._groupsIds[d.slots[t].join(";")],d.connectionPool.findOrCreate(d.natMapper(r)),c(),k("refreshing slot caches... (triggered by MOVED error)"),d.refreshSlotsCache()},ask:function(t,r){k("command %s is required to ask %s:%s",e.name,r);let i=d.natMapper(r);d.connectionPool.findOrCreate(i),c(!1,`${i.host}:${i.port}`)},tryagain:i,clusterDown:i,connectionClosed:i,maxRedirections:function(r){t.call(e,r)},defaults:function(){t.call(e,r)}})}}function c(i,l){let c;if("end"===d.status){e.reject(new s.AbortError("Cluster is ended."));return}if("ready"===d.status||"cluster"===e.name){if(r&&r.redis)c=r.redis;else if(o.default.checkFlag("ENTER_SUBSCRIBER_MODE",e.name)||o.default.checkFlag("EXIT_SUBSCRIBER_MODE",e.name)){if(d.options.shardedSubscribers&&("ssubscribe"==e.name||"sunsubscribe"==e.name)){let t=d.shardedSubscribers.getResponsibleSubscriber(a);if(!t){e.reject(new s.AbortError(`No sharded subscriber for slot: ${a}`));return}let r=-1;"ssubscribe"==e.name&&(r=d.shardedSubscribers.addChannels(e.getKeys())),"sunsubscribe"==e.name&&(r=d.shardedSubscribers.removeChannels(e.getKeys())),-1!==r?c=t.getInstance():e.reject(new s.AbortError("Possible CROSSSLOT error: All channels must hash to the same slot"))}else c=d.subscriber.getInstance();if(!c){e.reject(new s.AbortError("No subscriber for the cluster"));return}}else{if(!i){if("number"==typeof a&&d.slots[a]){let t=d.slots[a];if("function"==typeof n){let r=t.map(function(e){return d.connectionPool.getInstanceByKey(e)});Array.isArray(c=n(r,e))&&(c=(0,p.sample)(c)),c||(c=r[0])}else{let e;e="all"===n?(0,p.sample)(t):"slave"===n&&t.length>1?(0,p.sample)(t,1):t[0],c=d.connectionPool.getInstanceByKey(e)}}l&&(c=d.connectionPool.getInstanceByKey(l)).asking()}if(c||(c=("function"==typeof n?null:d.connectionPool.getSampleInstance(n))||d.connectionPool.getSampleInstance("all")),c&&!d.options.enableOfflineQueue&&"ready"!==c.status&&"wait"!==c.status){e.reject(Error(p.CONNECTION_CLOSED_ERROR_MSG));return}}r&&!r.redis&&(r.redis=c)}if(!c&&d.options.enableOfflineQueue){d.offlineQueue.push({command:e,stream:t,node:r});return}if(!c){e.reject(Error("Cluster isn't ready and enableOfflineQueue options is false"));return}c.sendCommand(e,t)}return c(),e.promise}sscanStream(e,t){return this.createScanStream("sscan",{key:e,options:t})}sscanBufferStream(e,t){return this.createScanStream("sscanBuffer",{key:e,options:t})}hscanStream(e,t){return this.createScanStream("hscan",{key:e,options:t})}hscanBufferStream(e,t){return this.createScanStream("hscanBuffer",{key:e,options:t})}zscanStream(e,t){return this.createScanStream("zscan",{key:e,options:t})}zscanBufferStream(e,t){return this.createScanStream("zscanBuffer",{key:e,options:t})}handleError(e,t,r){if(void 0===t.value?t.value=this.options.maxRedirections:t.value-=1,t.value<=0){r.maxRedirections(Error("Too many Cluster redirections. Last error: "+e));return}let i=e.message.split(" ");if("MOVED"===i[0]){let e=this.options.retryDelayOnMoved;e&&"number"==typeof e?this.delayQueue.push("moved",r.moved.bind(null,i[1],i[2]),{timeout:e}):r.moved(i[1],i[2])}else"ASK"===i[0]?r.ask(i[1],i[2]):"TRYAGAIN"===i[0]?this.delayQueue.push("tryagain",r.tryagain,{timeout:this.options.retryDelayOnTryAgain}):"CLUSTERDOWN"===i[0]&&this.options.retryDelayOnClusterDown>0?this.delayQueue.push("clusterdown",r.connectionClosed,{timeout:this.options.retryDelayOnClusterDown,callback:this.refreshSlotsCache.bind(this)}):e.message===p.CONNECTION_CLOSED_ERROR_MSG&&this.options.retryDelayOnFailover>0&&"ready"===this.status?this.delayQueue.push("failover",r.connectionClosed,{timeout:this.options.retryDelayOnFailover,callback:this.refreshSlotsCache.bind(this)}):r.defaults()}resetOfflineQueue(){this.offlineQueue=new v}clearNodesRefreshInterval(){this.slotsTimer&&(clearTimeout(this.slotsTimer),this.slotsTimer=null)}resetNodesRefreshInterval(){if(this.slotsTimer||!this.options.slotsRefreshInterval)return;let e=()=>{this.slotsTimer=setTimeout(()=>{k('refreshing slot caches... (triggered by "slotsRefreshInterval" option)'),this.refreshSlotsCache(()=>{e()})},this.options.slotsRefreshInterval)};e()}setStatus(e){k("status: %s -> %s",this.status||"[empty]",e),this.status=e,process.nextTick(()=>{this.emit(e)})}handleCloseEvent(e){var t;let r;e&&k("closed because %s",e),this.manuallyClosing||"function"!=typeof this.options.clusterRetryStrategy||(r=this.options.clusterRetryStrategy.call(this,++this.retryAttempts,e)),"number"==typeof r?(this.setStatus("reconnecting"),this.reconnectTimeout=setTimeout(()=>{this.reconnectTimeout=null,k("Cluster is disconnected. Retrying after %dms",r),this.connect().catch(function(e){k("Got error %s when reconnecting. Ignoring...",e)})},r)):(this.options.shardedSubscribers&&(null===(t=this.subscriberGroupEmitter)||void 0===t||t.removeAllListeners()),this.setStatus("end"),this.flushQueue(Error("None of startup nodes is available")))}flushQueue(e){let t;for(;t=this.offlineQueue.shift();)t.command.reject(e)}executeOfflineCommands(){if(this.offlineQueue.length){let e;k("send %d commands in offline queue",this.offlineQueue.length);let t=this.offlineQueue;for(this.resetOfflineQueue();e=t.shift();)this.sendCommand(e.command,e.stream,e.node)}}natMapper(e){let t="string"==typeof e?e:`${e.host}:${e.port}`,r=null;return(this.options.natMap&&"function"==typeof this.options.natMap?r=this.options.natMap(t):this.options.natMap&&"object"==typeof this.options.natMap&&(r=this.options.natMap[t]),r)?(k("NAT mapping %s -> %O",t,r),Object.assign({},r)):"string"==typeof e?(0,S.nodeKeyToRedisOptions)(e):e}getInfoFromNode(e,t){if(!e)return t(Error("Node is disconnected"));let r=e.duplicate({enableOfflineQueue:!0,enableReadyCheck:!1,retryStrategy:null,connectionName:(0,S.getConnectionName)("refresher",this.options.redisOptions&&this.options.redisOptions.connectionName)});r.on("error",p.noop),r.cluster("SLOTS",(0,p.timeout)((e,i)=>{if(r.disconnect(),e)return k("error encountered running CLUSTER.SLOTS: %s",e),t(e);if("disconnecting"===this.status||"close"===this.status||"end"===this.status){k("ignore CLUSTER.SLOTS results (count: %d) since cluster status is %s",i.length,this.status),t();return}let n=[];k("cluster slots result count: %d",i.length);for(let e=0;e<i.length;++e){let t=i[e],r=t[0],s=t[1],a=[];for(let e=2;e<t.length;e++){if(!t[e][0])continue;let r=this.natMapper({host:t[e][0],port:t[e][1]});r.readOnly=2!==e,n.push(r),a.push(r.host+":"+r.port)}k("cluster slots result [%d]: slots %d~%d served by %s",e,r,s,a);for(let e=r;e<=s;e++)this.slots[e]=a}this._groupsIds=Object.create(null);let s=0;for(let e=0;e<16384;e++){let t=(this.slots[e]||[]).join(";");if(!t.length){this._groupsBySlot[e]=void 0;continue}this._groupsIds[t]||(this._groupsIds[t]=++s),this._groupsBySlot[e]=this._groupsIds[t]}this.connectionPool.reset(n),this.options.shardedSubscribers&&this.shardedSubscribers.reset(this.slots,this.connectionPool.getNodes("all")).catch(e=>{k("Error while starting subscribers: %s",e)}),t()},this.options.slotsRefreshTimeout))}invokeReadyDelayedCallbacks(e){for(let t of this._readyDelayedCallbacks)process.nextTick(t,e);this._readyDelayedCallbacks=[]}readyCheck(e){this.cluster("INFO",(t,r)=>{let i;if(t)return e(t);if("string"!=typeof r)return e();let n=r.split("\r\n");for(let e=0;e<n.length;++e){let t=n[e].split(":");if("cluster_state"===t[0]){i=t[1];break}}"fail"===i?(k("cluster state not ok (%s)",i),e(null,i)):e()})}resolveSrv(e){return new Promise((t,r)=>{this.options.resolveSrv(e,(e,i)=>{if(e)return r(e);let n=this,s=(0,S.groupSrvRecords)(i),a=Object.keys(s).sort((e,t)=>parseInt(e)-parseInt(t));!function e(i){if(!a.length)return r(i);let o=s[a[0]],l=(0,S.weightSrvRecords)(o);o.records.length||a.shift(),n.dnsLookup(l.name).then(e=>t({host:e,port:l.port}),e)}()})})}dnsLookup(e){return new Promise((t,r)=>{this.options.dnsLookup(e,(i,n)=>{i?(k("failed to resolve hostname %s to IP: %s",e,i.message),r(i)):(k("resolved hostname %s to IP %s",e,n),t(n))})})}async resolveStartupNodeHostnames(){if(!Array.isArray(this.startupNodes)||0===this.startupNodes.length)throw Error("`startupNodes` should contain at least one node.");let e=(0,S.normalizeNodeOptions)(this.startupNodes),t=(0,S.getUniqueHostnamesFromOptions)(e);if(0===t.length)return e;let r=await Promise.all(t.map((this.options.useSRVRecords?this.resolveSrv:this.dnsLookup).bind(this))),i=(0,p.zipMap)(t,r);return e.map(e=>{let t=i.get(e.host);return t?this.options.useSRVRecords?Object.assign({},e,t):Object.assign({},e,{host:t}):e})}createScanStream(e,{key:t,options:r={}}){return new c.default({objectMode:!0,key:t,redis:this,command:e,...r})}createShardedSubscriberGroup(){this.subscriberGroupEmitter=new n.EventEmitter,this.shardedSubscribers=new K.default(this.subscriberGroupEmitter,this.options);let e=e=>{e instanceof l.default&&this.disconnect(!0)};for(let t of(this.subscriberGroupEmitter.on("-node",(t,r)=>{this.emit("-node",t,r),this.refreshSlotsCache(e)}),this.subscriberGroupEmitter.on("subscriberConnectFailed",({delay:t,error:r})=>{this.emit("error",r),setTimeout(()=>{this.refreshSlotsCache(e)},t)}),this.subscriberGroupEmitter.on("moved",()=>{this.refreshSlotsCache(e)}),this.subscriberGroupEmitter.on("-subscriber",()=>{this.emit("-subscriber")}),this.subscriberGroupEmitter.on("+subscriber",()=>{this.emit("+subscriber")}),this.subscriberGroupEmitter.on("nodeError",(e,t)=>{this.emit("nodeError",e,t)}),this.subscriberGroupEmitter.on("subscribersReady",()=>{this.emit("subscribersReady")}),["smessage","smessageBuffer"]))this.subscriberGroupEmitter.on(t,(e,r,i)=>{this.emit(t,e,r,i)})}}(0,h.default)(I,n.EventEmitter),(0,u.addTransactionSupport)(I.prototype),t.default=I},67285:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getConnectionName=t.weightSrvRecords=t.groupSrvRecords=t.getUniqueHostnamesFromOptions=t.normalizeNodeOptions=t.nodeKeyToRedisOptions=t.getNodeKey=void 0;let i=r(40067),n=r(41808);t.getNodeKey=function(e){return e.port=e.port||6379,e.host=e.host||"127.0.0.1",e.host+":"+e.port},t.nodeKeyToRedisOptions=function(e){let t=e.lastIndexOf(":");if(-1===t)throw Error(`Invalid node key ${e}`);return{host:e.slice(0,t),port:Number(e.slice(t+1))}},t.normalizeNodeOptions=function(e){return e.map(e=>{let t={};if("object"==typeof e)Object.assign(t,e);else if("string"==typeof e)Object.assign(t,(0,i.parseURL)(e));else if("number"==typeof e)t.port=e;else throw Error("Invalid argument "+e);return"string"==typeof t.port&&(t.port=parseInt(t.port,10)),delete t.db,t.port||(t.port=6379),t.host||(t.host="127.0.0.1"),(0,i.resolveTLSProfile)(t)})},t.getUniqueHostnamesFromOptions=function(e){let t={};return e.forEach(e=>{t[e.host]=!0}),Object.keys(t).filter(e=>!(0,n.isIP)(e))},t.groupSrvRecords=function(e){let t={};for(let r of e)t.hasOwnProperty(r.priority)?(t[r.priority].totalWeight+=r.weight,t[r.priority].records.push(r)):t[r.priority]={totalWeight:r.weight,records:[r]};return t},t.weightSrvRecords=function(e){if(1===e.records.length)return e.totalWeight=0,e.records.shift();let t=Math.floor(Math.random()*(e.totalWeight+e.records.length)),r=0;for(let[i,n]of e.records.entries())if((r+=1+n.weight)>t)return e.totalWeight-=n.weight,e.records.splice(i,1),n},t.getConnectionName=function(e,t){let r=`ioredis-cluster(${e})`;return t?`${r}:${t}`:r}},49846:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=(0,r(40067).Debug)("AbstractConnector");class n{constructor(e){this.connecting=!1,this.disconnectTimeout=e}check(e){return!0}disconnect(){if(this.connecting=!1,this.stream){let e=this.stream,t=setTimeout(()=>{i("stream %s:%s still open, destroying it",e.remoteAddress,e.remotePort),e.destroy()},this.disconnectTimeout);e.on("close",()=>clearTimeout(t)),e.end()}}}t.default=n},82793:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FailoverDetector=void 0;let i=(0,r(40067).Debug)("FailoverDetector"),n="+switch-master";class s{constructor(e,t){this.isDisconnected=!1,this.connector=e,this.sentinels=t}cleanup(){for(let e of(this.isDisconnected=!0,this.sentinels))e.client.disconnect()}async subscribe(){i("Starting FailoverDetector");let e=[];for(let t of this.sentinels){let r=t.client.subscribe(n).catch(e=>{i("Failed to subscribe to failover messages on sentinel %s:%s (%s)",t.address.host||"127.0.0.1",t.address.port||26739,e.message)});e.push(r),t.client.on("message",e=>{this.isDisconnected||e!==n||this.disconnect()})}await Promise.all(e)}disconnect(){this.isDisconnected=!0,i("Failover detected, disconnecting"),this.connector.disconnect()}}t.FailoverDetector=s},54787:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r{constructor(e){this.cursor=0,this.sentinels=e.slice(0)}next(){let e=this.cursor>=this.sentinels.length;return{done:e,value:e?void 0:this.sentinels[this.cursor++]}}reset(e){e&&this.sentinels.length>1&&1!==this.cursor&&this.sentinels.unshift(...this.sentinels.splice(this.cursor-1)),this.cursor=0}add(e){for(let r=0;r<this.sentinels.length;r++){var t;if(t=this.sentinels[r],(e.host||"127.0.0.1")===(t.host||"127.0.0.1")&&(e.port||26379)===(t.port||26379))return!1}return this.sentinels.push(e),!0}toString(){return`${JSON.stringify(this.sentinels)} @${this.cursor}`}}t.default=r},22280:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SentinelIterator=void 0;let i=r(41808),n=r(40067),s=r(24404),a=r(54787);t.SentinelIterator=a.default;let o=r(49846),l=r(90266),d=r(82793),c=(0,n.Debug)("SentinelConnector");class u extends o.default{constructor(e){if(super(e.disconnectTimeout),this.options=e,this.emitter=null,this.failoverDetector=null,!this.options.sentinels.length)throw Error("Requires at least one sentinel to connect to.");if(!this.options.name)throw Error("Requires the name of master.");this.sentinelIterator=new a.default(this.options.sentinels)}check(e){let t=!e.role||this.options.role===e.role;return t||(c("role invalid, expected %s, but got %s",this.options.role,e.role),this.sentinelIterator.next(),this.sentinelIterator.next(),this.sentinelIterator.reset(!0)),t}disconnect(){super.disconnect(),this.failoverDetector&&this.failoverDetector.cleanup()}connect(e){let t;this.connecting=!0,this.retryAttempts=0;let r=async()=>{let a=this.sentinelIterator.next();if(a.done){this.sentinelIterator.reset(!1);let i="function"==typeof this.options.sentinelRetryStrategy?this.options.sentinelRetryStrategy(++this.retryAttempts):null,n="number"!=typeof i?"All sentinels are unreachable and retry is disabled.":`All sentinels are unreachable. Retrying from scratch after ${i}ms.`;t&&(n+=` Last error: ${t.message}`),c(n);let s=Error(n);if("number"==typeof i)return e("error",s),await new Promise(e=>setTimeout(e,i)),r();throw s}let o=null,l=null;try{o=await this.resolve(a.value)}catch(e){l=e}if(!this.connecting)throw Error(n.CONNECTION_CLOSED_ERROR_MSG);let d=a.value.host+":"+a.value.port;if(o)return c("resolved: %s:%s from sentinel %s",o.host,o.port,d),this.options.enableTLSForSentinelMode&&this.options.tls?(Object.assign(o,this.options.tls),this.stream=(0,s.connect)(o),this.stream.once("secureConnect",this.initFailoverDetector.bind(this))):(this.stream=(0,i.createConnection)(o),this.stream.once("connect",this.initFailoverDetector.bind(this))),this.stream.once("error",e=>{this.firstError=e}),this.stream;{let i=l?"failed to connect to sentinel "+d+" because "+l.message:"connected to sentinel "+d+" successfully, but got an invalid reply: "+o;return c(i),e("sentinelError",Error(i)),l&&(t=l),r()}};return r()}async updateSentinels(e){if(!this.options.updateSentinels)return;let t=await e.sentinel("sentinels",this.options.name);Array.isArray(t)&&(t.map(n.packObject).forEach(e=>{if(-1===(e.flags?e.flags.split(","):[]).indexOf("disconnected")&&e.ip&&e.port){let t=this.sentinelNatResolve(p(e));this.sentinelIterator.add(t)&&c("adding sentinel %s:%s",t.host,t.port)}}),c("Updated internal sentinels: %s",this.sentinelIterator))}async resolveMaster(e){let t=await e.sentinel("get-master-addr-by-name",this.options.name);return await this.updateSentinels(e),this.sentinelNatResolve(Array.isArray(t)?{host:t[0],port:Number(t[1])}:null)}async resolveSlave(e){let t=await e.sentinel("slaves",this.options.name);if(!Array.isArray(t))return null;let r=t.map(n.packObject).filter(e=>e.flags&&!e.flags.match(/(disconnected|s_down|o_down)/));return this.sentinelNatResolve(function(e,t){let r;if(0===e.length)return null;if("function"==typeof t)r=t(e);else if(null!==t&&"object"==typeof t){let i=Array.isArray(t)?t:[t];i.sort((e,t)=>(e.prio||(e.prio=1),t.prio||(t.prio=1),e.prio<t.prio)?-1:e.prio>t.prio?1:0);for(let t=0;t<i.length;t++){for(let n=0;n<e.length;n++){let s=e[n];if(s.ip===i[t].ip&&s.port===i[t].port){r=s;break}}if(r)break}}return r||(r=(0,n.sample)(e)),p(r)}(r,this.options.preferredSlaves))}sentinelNatResolve(e){if(!e||!this.options.natMap)return e;let t=`${e.host}:${e.port}`,r=e;return"function"==typeof this.options.natMap?r=this.options.natMap(t)||e:"object"==typeof this.options.natMap&&(r=this.options.natMap[t]||e),r}connectToSentinel(e,t){return new l.default({port:e.port||26379,host:e.host,username:this.options.sentinelUsername||null,password:this.options.sentinelPassword||null,family:e.family||("path"in this.options&&this.options.path?void 0:this.options.family),tls:this.options.sentinelTLS,retryStrategy:null,enableReadyCheck:!1,connectTimeout:this.options.connectTimeout,commandTimeout:this.options.sentinelCommandTimeout,...t})}async resolve(e){let t=this.connectToSentinel(e);t.on("error",h);try{if("slave"===this.options.role)return await this.resolveSlave(t);return await this.resolveMaster(t)}finally{t.disconnect()}}async initFailoverDetector(){var e;if(!this.options.failoverDetector)return;this.sentinelIterator.reset(!0);let t=[];for(;t.length<this.options.sentinelMaxConnections;){let{done:e,value:r}=this.sentinelIterator.next();if(e)break;let i=this.connectToSentinel(r,{lazyConnect:!0,retryStrategy:this.options.sentinelReconnectStrategy});i.on("reconnecting",()=>{var e;null===(e=this.emitter)||void 0===e||e.emit("sentinelReconnecting")}),t.push({address:r,client:i})}this.sentinelIterator.reset(!1),this.failoverDetector&&this.failoverDetector.cleanup(),this.failoverDetector=new d.FailoverDetector(this,t),await this.failoverDetector.subscribe(),null===(e=this.emitter)||void 0===e||e.emit("failoverSubscribed")}}function p(e){return{host:e.ip,port:Number(e.port)}}function h(){}t.default=u},18929:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(41808),n=r(24404),s=r(40067),a=r(49846);class o extends a.default{constructor(e){super(e.disconnectTimeout),this.options=e}connect(e){let t;let{options:r}=this;return this.connecting=!0,"path"in r&&r.path?t={path:r.path}:(t={},"port"in r&&null!=r.port&&(t.port=r.port),"host"in r&&null!=r.host&&(t.host=r.host),"family"in r&&null!=r.family&&(t.family=r.family)),r.tls&&Object.assign(t,r.tls),new Promise((e,a)=>{process.nextTick(()=>{if(!this.connecting){a(Error(s.CONNECTION_CLOSED_ERROR_MSG));return}try{r.tls?this.stream=(0,n.connect)(t):this.stream=(0,i.createConnection)(t)}catch(e){a(e);return}this.stream.once("error",e=>{this.firstError=e}),e(this.stream)})})}}t.default=o},95929:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SentinelConnector=t.StandaloneConnector=void 0;let i=r(18929);t.StandaloneConnector=i.default;let n=r(22280);t.SentinelConnector=n.default},10891:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=`-----BEGIN CERTIFICATE-----
MIIDTzCCAjegAwIBAgIJAKSVpiDswLcwMA0GCSqGSIb3DQEBBQUAMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTAeFw0xMzEwMDExMjE0NTVaFw0yMzA5MjkxMjE0NTVaMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALZqkh/DczWP
JnxnHLQ7QL0T4B4CDKWBKCcisriGbA6ZePWVNo4hfKQC6JrzfR+081NeD6VcWUiz
rmd+jtPhIY4c+WVQYm5PKaN6DT1imYdxQw7aqO5j2KUCEh/cznpLxeSHoTxlR34E
QwF28Wl3eg2vc5ct8LjU3eozWVk3gb7alx9mSA2SgmuX5lEQawl++rSjsBStemY2
BDwOpAMXIrdEyP/cVn8mkvi/BDs5M5G+09j0gfhyCzRWMQ7Hn71u1eolRxwVxgi3
TMn+/vTaFSqxKjgck6zuAYjBRPaHe7qLxHNr1So/Mc9nPy+3wHebFwbIcnUojwbp
4nctkWbjb2cCAwEAAaNQME4wHQYDVR0OBBYEFP1whtcrydmW3ZJeuSoKZIKjze3w
MB8GA1UdIwQYMBaAFP1whtcrydmW3ZJeuSoKZIKjze3wMAwGA1UdEwQFMAMBAf8w
DQYJKoZIhvcNAQEFBQADggEBAG2erXhwRAa7+ZOBs0B6X57Hwyd1R4kfmXcs0rta
lbPpvgULSiB+TCbf3EbhJnHGyvdCY1tvlffLjdA7HJ0PCOn+YYLBA0pTU/dyvrN6
Su8NuS5yubnt9mb13nDGYo1rnt0YRfxN+8DM3fXIVr038A30UlPX2Ou1ExFJT0MZ
uFKY6ZvLdI6/1cbgmguMlAhM+DhKyV6Sr5699LM3zqeI816pZmlREETYkGr91q7k
BpXJu/dtHaGxg1ZGu6w/PCsYGUcECWENYD4VQPd8N32JjOfu6vEgoEAwfPP+3oGp
Z4m3ewACcWOAenqflb+cQYC4PsF7qbXDmRaWrbKntOlZ3n0=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIGMTCCBBmgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwajELMAkGA1UEBhMCVVMx
CzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJzMS0w
KwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwHhcN
MTgwMjI1MTUzNzM3WhcNMjgwMjIzMTUzNzM3WjBfMQswCQYDVQQGEwJVUzELMAkG
A1UECAwCQ0ExEjAQBgNVBAoMCVJlZGlzTGFiczEvMC0GA1UEAwwmUkNQIEludGVy
bWVkaWF0ZSBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwggIiMA0GCSqGSIb3DQEBAQUA
A4ICDwAwggIKAoICAQDf9dqbxc8Bq7Ctq9rWcxrGNKKHivqLAFpPq02yLPx6fsOv
Tq7GsDChAYBBc4v7Y2Ap9RD5Vs3dIhEANcnolf27QwrG9RMnnvzk8pCvp1o6zSU4
VuOE1W66/O1/7e2rVxyrnTcP7UgK43zNIXu7+tiAqWsO92uSnuMoGPGpeaUm1jym
hjWKtkAwDFSqvHY+XL5qDVBEjeUe+WHkYUg40cAXjusAqgm2hZt29c2wnVrxW25W
P0meNlzHGFdA2AC5z54iRiqj57dTfBTkHoBczQxcyw6hhzxZQ4e5I5zOKjXXEhZN
r0tA3YC14CTabKRus/JmZieyZzRgEy2oti64tmLYTqSlAD78pRL40VNoaSYetXLw
hhNsXCHgWaY6d5bLOc/aIQMAV5oLvZQKvuXAF1IDmhPA+bZbpWipp0zagf1P1H3s
UzsMdn2KM0ejzgotbtNlj5TcrVwpmvE3ktvUAuA+hi3FkVx1US+2Gsp5x4YOzJ7u
P1WPk6ShF0JgnJH2ILdj6kttTWwFzH17keSFICWDfH/+kM+k7Y1v3EXMQXE7y0T9
MjvJskz6d/nv+sQhY04xt64xFMGTnZjlJMzfQNi7zWFLTZnDD0lPowq7l3YiPoTT
t5Xky83lu0KZsZBo0WlWaDG00gLVdtRgVbcuSWxpi5BdLb1kRab66JptWjxwXQID
AQABo4HrMIHoMDoGA1UdHwQzMDEwL6AtoCuGKWh0dHBzOi8vcmwtY2Etc2VydmVy
LnJlZGlzbGFicy5jb20vdjEvY3JsMEYGCCsGAQUFBwEBBDowODA2BggrBgEFBQcw
AYYqaHR0cHM6Ly9ybC1jYS1zZXJ2ZXIucmVkaXNsYWJzLmNvbS92MS9vY3NwMB0G
A1UdDgQWBBQHar5OKvQUpP2qWt6mckzToeCOHDAfBgNVHSMEGDAWgBQi42wH6hM4
L2sujEvLM0/u8lRXTzASBgNVHRMBAf8ECDAGAQH/AgEAMA4GA1UdDwEB/wQEAwIB
hjANBgkqhkiG9w0BAQsFAAOCAgEAirEn/iTsAKyhd+pu2W3Z5NjCko4NPU0EYUbr
AP7+POK2rzjIrJO3nFYQ/LLuC7KCXG+2qwan2SAOGmqWst13Y+WHp44Kae0kaChW
vcYLXXSoGQGC8QuFSNUdaeg3RbMDYFT04dOkqufeWVccoHVxyTSg9eD8LZuHn5jw
7QDLiEECBmIJHk5Eeo2TAZrx4Yx6ufSUX5HeVjlAzqwtAqdt99uCJ/EL8bgpWbe+
XoSpvUv0SEC1I1dCAhCKAvRlIOA6VBcmzg5Am12KzkqTul12/VEFIgzqu0Zy2Jbc
AUPrYVu/+tOGXQaijy7YgwH8P8n3s7ZeUa1VABJHcxrxYduDDJBLZi+MjheUDaZ1
jQRHYevI2tlqeSBqdPKG4zBY5lS0GiAlmuze5oENt0P3XboHoZPHiqcK3VECgTVh
/BkJcuudETSJcZDmQ8YfoKfBzRQNg2sv/hwvUv73Ss51Sco8GEt2lD8uEdib1Q6z
zDT5lXJowSzOD5ZA9OGDjnSRL+2riNtKWKEqvtEG3VBJoBzu9GoxbAc7wIZLxmli
iF5a/Zf5X+UXD3s4TMmy6C4QZJpAA2egsSQCnraWO2ULhh7iXMysSkF/nzVfZn43
iqpaB8++9a37hWq14ZmOv0TJIDz//b2+KC4VFXWQ5W5QC6whsjT+OlG4p5ZYG0jo
616pxqo=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIFujCCA6KgAwIBAgIJAJ1aTT1lu2ScMA0GCSqGSIb3DQEBCwUAMGoxCzAJBgNV
BAYTAlVTMQswCQYDVQQIDAJDQTELMAkGA1UEBwwCQ0ExEjAQBgNVBAoMCVJlZGlz
TGFiczEtMCsGA1UEAwwkUmVkaXNMYWJzIFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9y
aXR5MB4XDTE4MDIyNTE1MjA0MloXDTM4MDIyMDE1MjA0MlowajELMAkGA1UEBhMC
VVMxCzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJz
MS0wKwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkw
ggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDLEjXy7YrbN5Waau5cd6g1
G5C2tMmeTpZ0duFAPxNU4oE3RHS5gGiok346fUXuUxbZ6QkuzeN2/2Z+RmRcJhQY
Dm0ZgdG4x59An1TJfnzKKoWj8ISmoHS/TGNBdFzXV7FYNLBuqZouqePI6ReC6Qhl
pp45huV32Q3a6IDrrvx7Wo5ZczEQeFNbCeCOQYNDdTmCyEkHqc2AGo8eoIlSTutT
ULOC7R5gzJVTS0e1hesQ7jmqHjbO+VQS1NAL4/5K6cuTEqUl+XhVhPdLWBXJQ5ag
54qhX4v+ojLzeU1R/Vc6NjMvVtptWY6JihpgplprN0Yh2556ewcXMeturcKgXfGJ
xeYzsjzXerEjrVocX5V8BNrg64NlifzTMKNOOv4fVZszq1SIHR8F9ROrqiOdh8iC
JpUbLpXH9hWCSEO6VRMB2xJoKu3cgl63kF30s77x7wLFMEHiwsQRKxooE1UhgS9K
2sO4TlQ1eWUvFvHSTVDQDlGQ6zu4qjbOpb3Q8bQwoK+ai2alkXVR4Ltxe9QlgYK3
StsnPhruzZGA0wbXdpw0bnM+YdlEm5ffSTpNIfgHeaa7Dtb801FtA71ZlH7A6TaI
SIQuUST9EKmv7xrJyx0W1pGoPOLw5T029aTjnICSLdtV9bLwysrLhIYG5bnPq78B
cS+jZHFGzD7PUVGQD01nOQIDAQABo2MwYTAdBgNVHQ4EFgQUIuNsB+oTOC9rLoxL
yzNP7vJUV08wHwYDVR0jBBgwFoAUIuNsB+oTOC9rLoxLyzNP7vJUV08wDwYDVR0T
AQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQADggIBAHfg
z5pMNUAKdMzK1aS1EDdK9yKz4qicILz5czSLj1mC7HKDRy8cVADUxEICis++CsCu
rYOvyCVergHQLREcxPq4rc5Nq1uj6J6649NEeh4WazOOjL4ZfQ1jVznMbGy+fJm3
3Hoelv6jWRG9iqeJZja7/1s6YC6bWymI/OY1e4wUKeNHAo+Vger7MlHV+RuabaX+
hSJ8bJAM59NCM7AgMTQpJCncrcdLeceYniGy5Q/qt2b5mJkQVkIdy4TPGGB+AXDJ
D0q3I/JDRkDUFNFdeW0js7fHdsvCR7O3tJy5zIgEV/o/BCkmJVtuwPYOrw/yOlKj
TY/U7ATAx9VFF6/vYEOMYSmrZlFX+98L6nJtwDqfLB5VTltqZ4H/KBxGE3IRSt9l
FXy40U+LnXzhhW+7VBAvyYX8GEXhHkKU8Gqk1xitrqfBXY74xKgyUSTolFSfFVgj
mcM/X4K45bka+qpkj7Kfv/8D4j6aZekwhN2ly6hhC1SmQ8qjMjpG/mrWOSSHZFmf
ybu9iD2AYHeIOkshIl6xYIa++Q/00/vs46IzAbQyriOi0XxlSMMVtPx0Q3isp+ji
n8Mq9eOuxYOEQ4of8twUkUDd528iwGtEdwf0Q01UyT84S62N8AySl1ZBKXJz6W4F
UhWfa/HQYOAPDdEjNgnVwLI23b8t0TozyCWw7q8h
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIEjzCCA3egAwIBAgIQe55B/ALCKJDZtdNT8kD6hTANBgkqhkiG9w0BAQsFADBM
MSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEGA1UEChMKR2xv
YmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0yMjAxMjYxMjAwMDBaFw0y
NTAxMjYwMDAwMDBaMFgxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9iYWxTaWdu
IG52LXNhMS4wLAYDVQQDEyVHbG9iYWxTaWduIEF0bGFzIFIzIE9WIFRMUyBDQSAy
MDIyIFEyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmGmg1LW9b7Lf
8zDD83yBDTEkt+FOxKJZqF4veWc5KZsQj9HfnUS2e5nj/E+JImlGPsQuoiosLuXD
BVBNAMcUFa11buFMGMeEMwiTmCXoXRrXQmH0qjpOfKgYc5gHG3BsRGaRrf7VR4eg
ofNMG9wUBw4/g/TT7+bQJdA4NfE7Y4d5gEryZiBGB/swaX6Jp/8MF4TgUmOWmalK
dZCKyb4sPGQFRTtElk67F7vU+wdGcrcOx1tDcIB0ncjLPMnaFicagl+daWGsKqTh
counQb6QJtYHa91KvCfKWocMxQ7OIbB5UARLPmC4CJ1/f8YFm35ebfzAeULYdGXu
jE9CLor0OwIDAQABo4IBXzCCAVswDgYDVR0PAQH/BAQDAgGGMB0GA1UdJQQWMBQG
CCsGAQUFBwMBBggrBgEFBQcDAjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQW
BBSH5Zq7a7B/t95GfJWkDBpA8HHqdjAfBgNVHSMEGDAWgBSP8Et/qC5FJK5NUPpj
move4t0bvDB7BggrBgEFBQcBAQRvMG0wLgYIKwYBBQUHMAGGImh0dHA6Ly9vY3Nw
Mi5nbG9iYWxzaWduLmNvbS9yb290cjMwOwYIKwYBBQUHMAKGL2h0dHA6Ly9zZWN1
cmUuZ2xvYmFsc2lnbi5jb20vY2FjZXJ0L3Jvb3QtcjMuY3J0MDYGA1UdHwQvMC0w
K6ApoCeGJWh0dHA6Ly9jcmwuZ2xvYmFsc2lnbi5jb20vcm9vdC1yMy5jcmwwIQYD
VR0gBBowGDAIBgZngQwBAgIwDAYKKwYBBAGgMgoBAjANBgkqhkiG9w0BAQsFAAOC
AQEAKRic9/f+nmhQU/wz04APZLjgG5OgsuUOyUEZjKVhNGDwxGTvKhyXGGAMW2B/
3bRi+aElpXwoxu3pL6fkElbX3B0BeS5LoDtxkyiVEBMZ8m+sXbocwlPyxrPbX6mY
0rVIvnuUeBH8X0L5IwfpNVvKnBIilTbcebfHyXkPezGwz7E1yhUULjJFm2bt0SdX
y+4X/WeiiYIv+fTVgZZgl+/2MKIsu/qdBJc3f3TvJ8nz+Eax1zgZmww+RSQWeOj3
15Iw6Z5FX+NwzY/Ab+9PosR5UosSeq+9HhtaxZttXG1nVh+avYPGYddWmiMT90J5
ZgKnO/Fx2hBgTxhOTMYaD312kg==
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4G
A1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjMxEzARBgNVBAoTCkdsb2JhbFNp
Z24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDkwMzE4MTAwMDAwWhcNMjkwMzE4
MTAwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEG
A1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjCCASIwDQYJKoZI
hvcNAQEBBQADggEPADCCAQoCggEBAMwldpB5BngiFvXAg7aEyiie/QV2EcWtiHL8
RgJDx7KKnQRfJMsuS+FggkbhUqsMgUdwbN1k0ev1LKMPgj0MK66X17YUhhB5uzsT
gHeMCOFJ0mpiLx9e+pZo34knlTifBtc+ycsmWQ1z3rDI6SYOgxXG71uL0gRgykmm
KPZpO/bLyCiR5Z2KYVc3rHQU3HTgOu5yLy6c+9C7v/U9AOEGM+iCK65TpjoWc4zd
QQ4gOsC0p6Hpsk+QLjJg6VfLuQSSaGjlOCZgdbKfd/+RFO+uIEn8rUAVSNECMWEZ
XriX7613t2Saer9fwRPvm2L7DWzgVGkWqQPabumDk3F2xmmFghcCAwEAAaNCMEAw
DgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFI/wS3+o
LkUkrk1Q+mOai97i3Ru8MA0GCSqGSIb3DQEBCwUAA4IBAQBLQNvAUKr+yAzv95ZU
RUm7lgAJQayzE4aGKAczymvmdLm6AC2upArT9fHxD4q/c2dKg8dEe3jgr25sbwMp
jjM5RcOO5LlXbKr8EpbsU8Yt5CRsuZRj+9xTaGdWPoO4zzUhw8lo/s7awlOqzJCK
6fBdRoyV3XpYKBovHd7NADdBj+1EbddTKJd+82cEHhXXipa0095MJ6RMG3NzdvQX
mcIfeg7jLQitChws/zyrVQ4PkX4268NXSb7hLi18YIvDQVETI53O9zJrlAGomecs
Mx86OyXShkDOOyyGeMlhLxS67ttVb9+E7gUJTb0o2HLO02JQZR7rkpeDMdmztcpH
WD9f
-----END CERTIFICATE-----`;t.default={RedisCloudFixed:{ca:r},RedisCloudFlexible:{ca:r}}},47845:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(13122);class n extends i.RedisError{constructor(e,t){super(e),this.lastNodeError=t,Error.captureStackTrace(this,this.constructor)}get name(){return this.constructor.name}}t.default=n,n.defaultMessage="Failed to refresh slots cache."},49975:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(13122);class n extends i.AbortError{constructor(e){super(`Reached the max retries per request limit (which is ${e}). Refer to "maxRetriesPerRequest" option for details.`),Error.captureStackTrace(this,this.constructor)}get name(){return this.constructor.name}}t.default=n},49079:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MaxRetriesPerRequestError=void 0;let i=r(49975);t.MaxRetriesPerRequestError=i.default},62197:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.print=t.ReplyError=t.SentinelIterator=t.SentinelConnector=t.AbstractConnector=t.Pipeline=t.ScanStream=t.Command=t.Cluster=t.Redis=t.default=void 0,t=e.exports=r(90266).default;var i=r(90266);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var n=r(90266);Object.defineProperty(t,"Redis",{enumerable:!0,get:function(){return n.default}});var s=r(22742);Object.defineProperty(t,"Cluster",{enumerable:!0,get:function(){return s.default}});var a=r(79749);Object.defineProperty(t,"Command",{enumerable:!0,get:function(){return a.default}});var o=r(95842);Object.defineProperty(t,"ScanStream",{enumerable:!0,get:function(){return o.default}});var l=r(39770);Object.defineProperty(t,"Pipeline",{enumerable:!0,get:function(){return l.default}});var d=r(49846);Object.defineProperty(t,"AbstractConnector",{enumerable:!0,get:function(){return d.default}});var c=r(22280);Object.defineProperty(t,"SentinelConnector",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"SentinelIterator",{enumerable:!0,get:function(){return c.SentinelIterator}}),t.ReplyError=r(13122).ReplyError,Object.defineProperty(t,"Promise",{get:()=>(console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used."),Promise),set(e){console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used.")}}),t.print=function(e,t){e?console.log("Error: "+e):console.log("Reply: "+t)}},83233:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_REDIS_OPTIONS=void 0,t.DEFAULT_REDIS_OPTIONS={port:6379,host:"localhost",family:0,connectTimeout:1e4,disconnectTimeout:2e3,retryStrategy:function(e){return Math.min(50*e,2e3)},keepAlive:0,noDelay:!0,connectionName:null,disableClientInfo:!1,clientInfoTag:void 0,sentinels:null,name:null,role:"master",sentinelRetryStrategy:function(e){return Math.min(10*e,1e3)},sentinelReconnectStrategy:function(){return 6e4},natMap:null,enableTLSForSentinelMode:!1,updateSentinels:!0,failoverDetector:!1,username:null,password:null,db:0,enableOfflineQueue:!0,enableReadyCheck:!0,autoResubscribe:!0,autoResendUnfulfilledCommands:!0,lazyConnect:!1,keyPrefix:"",reconnectOnError:null,readOnly:!1,stringNumbers:!1,maxRetriesPerRequest:20,maxLoadingRetryTime:1e4,enableAutoPipelining:!1,autoPipeliningIgnoredCommands:[],sentinelMaxConnections:10,blockingTimeoutGrace:100}},54797:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.readyHandler=t.errorHandler=t.closeHandler=t.connectHandler=void 0;let i=r(13122),n=r(79749),s=r(49079),a=r(40067),o=r(50385),l=(0,a.Debug)("connection");function d(e){let t=new i.AbortError("Command aborted due to connection close");return t.command={name:e.name,args:e.args},t}t.connectHandler=function(e){return function(){var r;e.setStatus("connect"),e.resetCommandQueue();let i=!1,{connectionEpoch:n}=e;e.condition.auth&&e.auth(e.condition.auth,function(t){n===e.connectionEpoch&&t&&(-1!==t.message.indexOf("no password is set")?console.warn("[WARN] Redis server does not require a password, but a password was supplied."):-1!==t.message.indexOf("without any password configured for the default user")?console.warn("[WARN] This Redis server's `default` user does not require a password, but a password was supplied"):-1!==t.message.indexOf("wrong number of arguments for 'auth' command")?console.warn("[ERROR] The server returned \"wrong number of arguments for 'auth' command\". You are probably passing both username and password to Redis version 5 or below. You should only pass the 'password' option for Redis version 5 and under."):(i=!0,e.recoverFromFatalError(t,t)))}),e.condition.select&&e.select(e.condition.select).catch(t=>{e.silentEmit("error",t)}),new o.default(e,{stringNumbers:e.options.stringNumbers});let s=[];e.options.connectionName&&(l("set the connection name [%s]",e.options.connectionName),s.push(e.client("setname",e.options.connectionName).catch(a.noop))),e.options.disableClientInfo||(l("set the client info"),s.push((0,a.getPackageMeta)().then(t=>e.client("SETINFO","LIB-VER",t.version).catch(a.noop)).catch(a.noop)),s.push(e.client("SETINFO","LIB-NAME",(null===(r=e.options)||void 0===r?void 0:r.clientInfoTag)?`ioredis(${e.options.clientInfoTag})`:"ioredis").catch(a.noop))),Promise.all(s).catch(a.noop).finally(()=>{e.options.enableReadyCheck||t.readyHandler(e)(),e.options.enableReadyCheck&&e._readyCheck(function(r,s){n===e.connectionEpoch&&(r?i||e.recoverFromFatalError(Error("Ready check failed: "+r.message),r):e.connector.check(s)?t.readyHandler(e)():e.disconnect(!0))})})}},t.closeHandler=function(e){return function(){let r=e.status;if(e.setStatus("close"),e.commandQueue.length&&function(e){var t;let r=0;for(let i=0;i<e.length;){let n=null===(t=e.peekAt(i))||void 0===t?void 0:t.command,s=n.pipelineIndex;if((void 0===s||0===s)&&(r=0),void 0!==s&&s!==r++){e.remove(i,1),n.reject(d(n));continue}i++}}(e.commandQueue),e.offlineQueue.length&&function(e){var t;for(let r=0;r<e.length;){let i=null===(t=e.peekAt(r))||void 0===t?void 0:t.command;if("multi"===i.name)break;if("exec"===i.name){e.remove(r,1),i.reject(d(i));break}i.inTransaction?(e.remove(r,1),i.reject(d(i))):r++}}(e.offlineQueue),"ready"===r&&(e.prevCondition||(e.prevCondition=e.condition),e.commandQueue.length&&(e.prevCommandQueue=e.commandQueue)),e.manuallyClosing)return e.manuallyClosing=!1,l("skip reconnecting since the connection is manually closed."),t();if("function"!=typeof e.options.retryStrategy)return l("skip reconnecting because `retryStrategy` is not a function"),t();let i=e.options.retryStrategy(++e.retryAttempts);if("number"!=typeof i)return l("skip reconnecting because `retryStrategy` doesn't return a number"),t();l("reconnect in %sms",i),e.setStatus("reconnecting",i),e.reconnectTimeout=setTimeout(function(){e.reconnectTimeout=null,e.connect().catch(a.noop)},i);let{maxRetriesPerRequest:n}=e.options;"number"==typeof n&&(n<0?l("maxRetriesPerRequest is negative, ignoring..."):0==e.retryAttempts%(n+1)&&(l("reach maxRetriesPerRequest limitation, flushing command queue..."),e.flushQueue(new s.MaxRetriesPerRequestError(n))))};function t(){e.setStatus("end"),e.flushQueue(Error(a.CONNECTION_CLOSED_ERROR_MSG))}},t.errorHandler=function(e){return function(t){l("error: %s",t),e.silentEmit("error",t)}},t.readyHandler=function(e){return function(){if(e.setStatus("ready"),e.retryAttempts=0,e.options.monitor){e.call("monitor").then(()=>e.setStatus("monitoring"),t=>e.emit("error",t));let{sendCommand:t}=e;e.sendCommand=function(r){return n.default.checkFlag("VALID_IN_MONITOR_MODE",r.name)?t.call(e,r):(r.reject(Error("Connection is in monitoring mode, can't process commands.")),r.promise)},e.once("close",function(){delete e.sendCommand});return}let t=e.prevCondition?e.prevCondition.select:e.condition.select;if(e.options.readOnly&&(l("set the connection to readonly mode"),e.readonly().catch(a.noop)),e.prevCondition){let r=e.prevCondition;if(e.prevCondition=null,r.subscriber&&e.options.autoResubscribe){e.condition.select!==t&&(l("connect to db [%d]",t),e.select(t));let i=r.subscriber.channels("subscribe");i.length&&(l("subscribe %d channels",i.length),e.subscribe(i));let n=r.subscriber.channels("psubscribe");n.length&&(l("psubscribe %d channels",n.length),e.psubscribe(n));let s=r.subscriber.channels("ssubscribe");if(s.length)for(let t of(l("ssubscribe %s",s.length),s))e.ssubscribe(t)}}if(e.prevCommandQueue){if(e.options.autoResendUnfulfilledCommands)for(l("resend %d unfulfilled commands",e.prevCommandQueue.length);e.prevCommandQueue.length>0;){let t=e.prevCommandQueue.shift();t.select!==e.condition.select&&"select"!==t.command.name&&e.select(t.select),e.sendCommand(t.command,t.stream)}else e.prevCommandQueue=null}if(e.offlineQueue.length){l("send %d commands in offline queue",e.offlineQueue.length);let t=e.offlineQueue;for(e.resetOfflineQueue();t.length>0;){let r=t.shift();r.select!==e.condition.select&&"select"!==r.command.name&&e.select(r.select),e.sendCommand(r.command,r.stream)}}e.condition.select!==t&&(l("connect to db [%d]",t),e.select(t))}}},20036:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.traceConnect=t.traceBatch=t.traceCommand=t.sanitizeArgs=void 0;let i=[{regex:/^ECHO/i,args:0},{regex:/^(LPUSH|MSET|PFA|PUBLISH|RPUSH|SADD|SET|SPUBLISH|XADD|ZADD)/i,args:1},{regex:/^(HSET|HMSET|LSET|LINSERT)/i,args:2},{regex:/^(ACL|BIT|B[LRZ]|CLIENT|CLUSTER|CONFIG|COMMAND|DECR|DEL|EVAL|EX|FUNCTION|GEO|GET|HINCR|HMGET|HSCAN|INCR|L[TRLM]|MEMORY|P[EFISTU]|RPOP|S[CDIMORSU]|XACK|X[CDGILPRT]|Z[CDILMPRS])/i,args:-1}];t.sanitizeArgs=function(e,t){let r=0;for(let t of i)if(t.regex.test(e)){r=t.args;break}if(-1===r)return t.map(e=>String(e));let n=[];for(let e=0;e<t.length;e++)e<r?n.push(String(t[e])):n.push("?");return n};let n=(()=>{try{return"getBuiltinModule"in process?process.getBuiltinModule("node:diagnostics_channel"):r(65714)}catch{return}})(),s=n&&"function"==typeof n.tracingChannel,a=s?n.tracingChannel("ioredis:command"):void 0,o=s?n.tracingChannel("ioredis:batch"):void 0,l=s?n.tracingChannel("ioredis:connect"):void 0;function d(e){return!!e&&!1!==e.hasSubscribers}let c=()=>{};t.traceCommand=function(e,t){if(!d(a))return e();let r=a.tracePromise(e,t());return r.catch(c),r},t.traceBatch=function(e,t){if(!d(o))return e();let r=o.tracePromise(e,t());return r.catch(c),r},t.traceConnect=function(e,t){return d(l)?l.tracePromise(e,t()):e()}},28064:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.addTransactionSupport=void 0;let i=r(40067),n=r(83499),s=r(39770),a=r(20036);t.addTransactionSupport=function(e){e.pipeline=function(e){let t=new s.default(this);return Array.isArray(e)&&t.addBatch(e),t};let{multi:t}=e;e.multi=function(e,r){if(void 0!==r||Array.isArray(e)||(r=e,e=null),r&&!1===r.pipeline)return t.call(this);let o=new s.default(this);o.multi(),Array.isArray(e)&&o.addBatch(e);let l=o.exec;o.exec=function(e){if(this.isCluster&&!this.redis.slots.length)return"wait"===this.redis.status&&this.redis.connect().catch(i.noop),(0,n.default)(new Promise((e,t)=>{this.redis.delayUntilReady(r=>{if(r){t(r);return}this.exec(o).then(e,t)})}),e);if(this._transactions>0&&l.call(o),this.nodeifiedPromise)return l.call(o);let t=Math.max(o.length-2,0),r=()=>l.call(o).then(function(e){let t=e[e.length-1];if(void 0===t)throw Error("Pipeline cannot be used to send any commands when the `exec()` has been called on it.");if(t[0]){t[0].previousErrors=[];for(let r=0;r<e.length-1;++r)e[r][0]&&t[0].previousErrors.push(e[r][0]);throw t[0]}return(0,i.wrapMultiResult)(t[1])}),s="_buildBatchContext"in this.redis?(0,a.traceBatch)(r,()=>this.redis._buildBatchContext(t)):r();return(0,n.default)(s,e)};let{execBuffer:d}=o;return o.execBuffer=function(e){return this._transactions>0&&d.call(o),o.exec(e)},o};let{exec:r}=e;e.exec=function(e){return(0,n.default)(r.call(this).then(function(e){return Array.isArray(e)&&(e=(0,i.wrapMultiResult)(e)),e}),e)}}},16789:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(48942),n=r(10996),s=r(79749),a=r(74424);class o{constructor(){this.options={},this.scriptsSet={},this.addedBuiltinSet=new Set}getBuiltinCommands(){return l.slice(0)}createBuiltinCommand(e){return{string:d(null,e,"utf8"),buffer:d(null,e,null)}}addBuiltinCommand(e){this.addedBuiltinSet.add(e),this[e]=d(e,e,"utf8"),this[e+"Buffer"]=d(e+"Buffer",e,null)}defineCommand(e,t){let r=new a.default(t.lua,t.numberOfKeys,this.options.keyPrefix,t.readOnly);this.scriptsSet[e]=r,this[e]=c(e,e,r,"utf8"),this[e+"Buffer"]=c(e+"Buffer",e,r,null)}sendCommand(e,t,r){throw Error('"sendCommand" is not implemented')}}let l=i.list.filter(e=>"monitor"!==e);function d(e,t,r){return void 0===r&&(r=t,t=null),function(...i){let a=t||i.shift(),o=i[i.length-1];"function"==typeof o?i.pop():o=void 0;let l={errorStack:this.options.showFriendlyErrorStack?Error():void 0,keyPrefix:this.options.keyPrefix,replyEncoding:r};return(0,n.shouldUseAutoPipelining)(this,e,a)?(0,n.executeWithAutoPipelining)(this,e,a,i,o):this.sendCommand(new s.default(a,i,l,o))}}function c(e,t,r,i){return function(...s){let a="function"==typeof s[s.length-1]?s.pop():void 0,o={replyEncoding:i};return(this.options.showFriendlyErrorStack&&(o.errorStack=Error()),(0,n.shouldUseAutoPipelining)(this,e,t))?(0,n.executeWithAutoPipelining)(this,e,t,s,a):r.execute(this,s,o,a)}}l.push("sentinel"),l.forEach(function(e){o.prototype[e]=d(e,e,"utf8"),o.prototype[e+"Buffer"]=d(e+"Buffer",e,null)}),o.prototype.call=d("call","utf8"),o.prototype.callBuffer=d("callBuffer",null),o.prototype.send_command=o.prototype.call,t.default=o},82449:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){Object.getOwnPropertyNames(t.prototype).forEach(r=>{Object.defineProperty(e.prototype,r,Object.getOwnPropertyDescriptor(t.prototype,r))})}},52484:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseBlockOption=t.parseSecondsArgument=void 0;let r=e=>{if("number"==typeof e)return e;if(Buffer.isBuffer(e))return r(e.toString());if("string"==typeof e){let t=Number(e);return Number.isFinite(t)?t:void 0}},i=e=>"string"==typeof e?e:Buffer.isBuffer(e)?e.toString():void 0;t.parseSecondsArgument=e=>{let t=r(e);return void 0===t?void 0:t<=0?0:1e3*t},t.parseBlockOption=e=>{for(let t=0;t<e.length;t++){let n=i(e[t]);if(n&&"block"===n.toLowerCase()){let i=r(e[t+1]);if(void 0===i)return;if(i<=0)return 0;return i}}return null}},50001:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.genRedactedString=t.getStringValue=t.MAX_ARGUMENT_LENGTH=void 0;let i=r(19092);function n(e){if(null!==e)switch(typeof e){case"boolean":case"number":return;case"object":if(Buffer.isBuffer(e))return e.toString("hex");if(Array.isArray(e))return e.join(",");try{return JSON.stringify(e)}catch(e){return}case"string":return e}}function s(e,t){let{length:r}=e;return r<=t?e:e.slice(0,t)+' ... <REDACTED full-length="'+r+'">'}t.MAX_ARGUMENT_LENGTH=200,t.getStringValue=n,t.genRedactedString=s,t.default=function(e){let t=(0,i.default)(`ioredis:${e}`);function r(...e){if(t.enabled){for(let t=1;t<e.length;t++){let r=n(e[t]);"string"==typeof r&&r.length>200&&(e[t]=s(r,200))}return t.apply(null,e)}}return Object.defineProperties(r,{namespace:{get:()=>t.namespace},enabled:{get:()=>t.enabled},destroy:{get:()=>t.destroy},log:{get:()=>t.log,set(e){t.log=e}}}),r}},83318:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaults=void 0;let r=/^(?:0|[1-9]\d*)$/;function i(e,t){return e===t||Number.isNaN(e)&&Number.isNaN(t)}t.defaults=function(e,...t){var n,s,a,o;e=Object(e);let l=Object.prototype,d=t.length,c=d>2?t[2]:void 0;c&&(n=t[0],s=t[1],null!==(a=c)&&("object"==typeof a||"function"==typeof a)&&("number"==typeof s&&null!=a&&"function"!=typeof a&&Number.isSafeInteger(o=a.length)&&o>=0&&function(e,t=Number.MAX_SAFE_INTEGER){switch(typeof e){case"number":return Number.isInteger(e)&&e>=0&&e<t;case"symbol":return!1;case"string":return r.test(e)}}(s)&&s<a.length||"string"==typeof s&&s in a)&&i(a[s],n))&&(d=1);for(let r=0;r<d;r++){if(null==t[r])continue;let n=t[r];for(let t in n){let r=e[t];(void 0===r||!l.hasOwnProperty.call(e,t)&&i(r,l[t]))&&(e[t]=n[t])}}return e}},40067:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.noop=t.isArguments=t.defaults=t.Debug=t.getPackageMeta=t.zipMap=t.CONNECTION_CLOSED_ERROR_MSG=t.shuffle=t.sample=t.resolveTLSProfile=t.parseURL=t.optimizeErrorStack=t.toArg=t.convertMapToArray=t.convertObjectToArray=t.timeout=t.packObject=t.isInt=t.wrapMultiResult=t.convertBufferToString=void 0;let i=r(57147),n=r(71017),s=r(61681);Object.defineProperty(t,"defaults",{enumerable:!0,get:function(){return s.defaults}}),Object.defineProperty(t,"isArguments",{enumerable:!0,get:function(){return s.isArguments}}),Object.defineProperty(t,"noop",{enumerable:!0,get:function(){return s.noop}});let a=r(50001);t.Debug=a.default;let o=r(10891);function l(e){let t=parseFloat(e);return!isNaN(e)&&(0|t)===t}function d(e,t){if("family"===e){let e=Number.parseInt(t,10);if(!Number.isNaN(e))return e}return t}t.convertBufferToString=function e(t,r){if(t instanceof Buffer)return t.toString(r);if(Array.isArray(t)){let i=t.length,n=Array(i);for(let s=0;s<i;++s)n[s]=t[s]instanceof Buffer&&"utf8"===r?t[s].toString():e(t[s],r);return n}return t},t.wrapMultiResult=function(e){if(!e)return null;let t=[],r=e.length;for(let i=0;i<r;++i){let r=e[i];r instanceof Error?t.push([r]):t.push([null,r])}return t},t.isInt=l,t.packObject=function(e){let t={},r=e.length;for(let i=1;i<r;i+=2)t[e[i-1]]=e[i];return t},t.timeout=function(e,t){let r=null,i=function(){r&&(clearTimeout(r),r=null,e.apply(this,arguments))};return r=setTimeout(i,t,Error("timeout")),i},t.convertObjectToArray=function(e){let t=[],r=Object.keys(e);for(let i=0,n=r.length;i<n;i++)t.push(r[i],e[r[i]]);return t},t.convertMapToArray=function(e){let t=[],r=0;return e.forEach(function(e,i){t[r]=i,t[r+1]=e,r+=2}),t},t.toArg=function(e){return null==e?"":String(e)},t.optimizeErrorStack=function(e,t,r){let i;let n=t.split("\n"),s="";for(i=1;i<n.length&&-1!==n[i].indexOf(r);++i);for(let e=i;e<n.length;++e)s+="\n"+n[e];if(e.stack){let t=e.stack.indexOf("\n");e.stack=e.stack.slice(0,t)+s}return e},t.parseURL=function(e){let t;if(l(e))return{port:e};let r=/^rediss?:\/\//i.test(e),i=e.startsWith("//");if("/"===e[0]&&!i){let t=e.indexOf("?"),r={path:-1===t?e:e.slice(0,t)};if(-1!==t){let i={};new URLSearchParams(e.slice(t+1)).forEach((e,t)=>{i[t]=d(t,e)}),(0,s.defaults)(r,i)}return r}t=new URL(r?e:i?"redis:"+e:"redis://"+e);let n={};t.searchParams.forEach((e,t)=>{n[t]=d(t,e)});let a={};return(t.username||t.password)&&(a.username=decodeURIComponent(t.username),a.password=decodeURIComponent(t.password)),t.pathname&&"/"!==t.pathname&&(r||i?t.pathname.length>1&&(a.db=t.pathname.slice(1)):a.path=t.pathname),t.hostname&&(a.host=t.hostname.replace(/^\[|\]$/g,"")),t.port&&(a.port=t.port),(0,s.defaults)(a,n),a},t.resolveTLSProfile=function(e){let t=null==e?void 0:e.tls;"string"==typeof t&&(t={profile:t});let r=o.default[null==t?void 0:t.profile];return r&&(t=Object.assign({},r,t),delete t.profile,e=Object.assign({},e,{tls:t})),e},t.sample=function(e,t=0){let r=e.length;return t>=r?null:e[t+Math.floor(Math.random()*(r-t))]},t.shuffle=function(e){let t=e.length;for(;t>0;){let r=Math.floor(Math.random()*t);t--,[e[t],e[r]]=[e[r],e[t]]}return e},t.CONNECTION_CLOSED_ERROR_MSG="Connection is closed.",t.zipMap=function(e,t){let r=new Map;return e.forEach((e,i)=>{r.set(e,t[i])}),r};let c=null;async function u(){if(c)return c;try{let e=(0,n.resolve)(__dirname,"..","..","package.json"),t=await i.promises.readFile(e,"utf8");return c={version:JSON.parse(t).version}}catch(e){return c={version:"error-fetching-version"}}}t.getPackageMeta=u},45151:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isArguments=void 0,t.isArguments=function(e){return null!==e&&"object"==typeof e&&"[object Arguments]"===(null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e))}},61681:function(e,t,r){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,i){void 0===i&&(i=r),e[i]=t[r]}),n=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),t.noop=void 0,t.noop=function(){},n(r(83318),t),n(r(45151),t)},73283:e=>{var t=/^(?:0|[1-9]\d*)$/;function r(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var i=Object.prototype,n=i.hasOwnProperty,s=i.toString,a=i.propertyIsEnumerable,o=Math.max;function l(e,t,r,s){return void 0===e||u(e,i[r])&&!n.call(s,r)?t:e}function d(e,t){return t=o(void 0===t?e.length-1:t,0),function(){for(var i=arguments,n=-1,s=o(i.length-t,0),a=Array(s);++n<s;)a[n]=i[t+n];n=-1;for(var l=Array(t+1);++n<t;)l[n]=i[n];return l[t]=a,r(e,this,l)}}function c(e,r){return!!(r=null==r?9007199254740991:r)&&("number"==typeof e||t.test(e))&&e>-1&&e%1==0&&e<r}function u(e,t){return e===t||e!=e&&t!=t}var p=Array.isArray;function h(e){var t,r;return null!=e&&"number"==typeof(t=e.length)&&t>-1&&t%1==0&&t<=9007199254740991&&!("[object Function]"==(r=y(e)?s.call(e):"")||"[object GeneratorFunction]"==r)}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}var m=function(e){return d(function(t,r){var i=-1,n=r.length,s=n>1?r[n-1]:void 0,a=n>2?r[2]:void 0;for(s=e.length>3&&"function"==typeof s?(n--,s):void 0,a&&function(e,t,r){if(!y(r))return!1;var i=typeof t;return("number"==i?!!(h(r)&&c(t,r.length)):"string"==i&&(t in r))&&u(r[t],e)}(r[0],r[1],a)&&(s=n<3?void 0:s,n=1),t=Object(t);++i<n;){var o=r[i];o&&e(t,o,i,s)}return t})}(function(e,t,r,o){!function(e,t,r,i){r||(r={});for(var s=-1,a=t.length;++s<a;){var o=t[s],l=i?i(r[o],e[o],o,r,e):void 0;!function(e,t,r){var i=e[t];n.call(e,t)&&u(i,r)&&(void 0!==r||t in e)||(e[t]=r)}(r,o,void 0===l?e[o]:l)}}(t,h(t)?function(e,t){var r=p(e)||e&&"object"==typeof e&&h(e)&&n.call(e,"callee")&&(!a.call(e,"callee")||"[object Arguments]"==s.call(e))?function(e,t){for(var r=-1,i=Array(e);++r<e;)i[r]=t(r);return i}(e.length,String):[],i=r.length,o=!!i;for(var l in e)(t||n.call(e,l))&&!(o&&("length"==l||c(l,i)))&&r.push(l);return r}(t,!0):function(e){if(!y(e))return function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}(e);var t,r=(t=e&&e.constructor,e===("function"==typeof t&&t.prototype||i)),s=[];for(var a in e)"constructor"==a&&(r||!n.call(e,a))||s.push(a);return s}(t),e,o)}),f=d(function(e){return e.push(void 0,l),r(m,void 0,e)});e.exports=f},1325:e=>{var t=Object.prototype,r=t.hasOwnProperty,i=t.toString,n=t.propertyIsEnumerable;e.exports=function(e){var t,s,a,o,l,d;return!!e&&"object"==typeof e&&null!=(t=e)&&"number"==typeof(s=t.length)&&s>-1&&s%1==0&&s<=9007199254740991&&!("[object Function]"==(l=typeof(o=a=t),d=o&&("object"==l||"function"==l)?i.call(a):"")||"[object GeneratorFunction]"==d)&&r.call(e,"callee")&&(!n.call(e,"callee")||"[object Arguments]"==i.call(e))}},92050:(e,t)=>{"use strict";let r;Object.defineProperty(t,"__esModule",{value:!0});class i extends Error{}class n extends i{constructor(e){super(`Invalid DateTime: ${e.toMessage()}`)}}class s extends i{constructor(e){super(`Invalid Interval: ${e.toMessage()}`)}}class a extends i{constructor(e){super(`Invalid Duration: ${e.toMessage()}`)}}class o extends i{}class l extends i{constructor(e){super(`Invalid unit ${e}`)}}class d extends i{}class c extends i{constructor(){super("Zone is an abstract class")}}let u="numeric",p="short",h="long",y={year:u,month:u,day:u},m={year:u,month:p,day:u},f={year:u,month:p,day:u,weekday:p},b={year:u,month:h,day:u},g={year:u,month:h,day:u,weekday:h},S={hour:u,minute:u},v={hour:u,minute:u,second:u},K={hour:u,minute:u,second:u,timeZoneName:p},k={hour:u,minute:u,second:u,timeZoneName:h},E={hour:u,minute:u,hourCycle:"h23"},I={hour:u,minute:u,second:u,hourCycle:"h23"},w={hour:u,minute:u,second:u,hourCycle:"h23",timeZoneName:p},j={hour:u,minute:u,second:u,hourCycle:"h23",timeZoneName:h},x={year:u,month:u,day:u,hour:u,minute:u},A={year:u,month:u,day:u,hour:u,minute:u,second:u},T={year:u,month:p,day:u,hour:u,minute:u},C={year:u,month:p,day:u,hour:u,minute:u,second:u},D={year:u,month:p,day:u,weekday:p,hour:u,minute:u},O={year:u,month:h,day:u,hour:u,minute:u,timeZoneName:p},R={year:u,month:h,day:u,hour:u,minute:u,second:u,timeZoneName:p},M={year:u,month:h,day:u,weekday:h,hour:u,minute:u,timeZoneName:h},N={year:u,month:h,day:u,weekday:h,hour:u,minute:u,second:u,timeZoneName:h};class P{get type(){throw new c}get name(){throw new c}get ianaName(){return this.name}get isUniversal(){throw new c}offsetName(e,t){throw new c}formatOffset(e,t){throw new c}offset(e){throw new c}equals(e){throw new c}get isValid(){throw new c}}let L=null;class J extends P{static get instance(){return null===L&&(L=new J),L}get type(){return"system"}get name(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}get isUniversal(){return!1}offsetName(e,{format:t,locale:r}){return e3(e,t,r)}formatOffset(e,t){return e9(this.offset(e),t)}offset(e){return-new Date(e).getTimezoneOffset()}equals(e){return"system"===e.type}get isValid(){return!0}}let _=new Map,F={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6},G=new Map;class q extends P{static create(e){let t=G.get(e);return void 0===t&&G.set(e,t=new q(e)),t}static resetCache(){G.clear(),_.clear()}static isValidSpecifier(e){return this.isValidZone(e)}static isValidZone(e){if(!e)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}).format(),!0}catch(e){return!1}}constructor(e){super(),this.zoneName=e,this.valid=q.isValidZone(e)}get type(){return"iana"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(e,{format:t,locale:r}){return e3(e,t,r,this.name)}formatOffset(e,t){return e9(this.offset(e),t)}offset(e){var t;let r;if(!this.valid)return NaN;let i=new Date(e);if(isNaN(i))return NaN;let n=(t=this.name,void 0===(r=_.get(t))&&(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"}),_.set(t,r)),r),[s,a,o,l,d,c,u]=n.formatToParts?function(e,t){let r=e.formatToParts(t),i=[];for(let e=0;e<r.length;e++){let{type:t,value:n}=r[e],s=F[t];"era"===t?i[s]=n:eP(s)||(i[s]=parseInt(n,10))}return i}(n,i):function(e,t){let r=e.format(t).replace(/\u200E/g,""),[,i,n,s,a,o,l,d]=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(r);return[s,i,n,a,o,l,d]}(n,i);"BC"===l&&(s=-Math.abs(s)+1);let p=e$({year:s,month:a,day:o,hour:24===d?0:d,minute:c,second:u,millisecond:0}),h=+i,y=h%1e3;return(p-(h-=y>=0?y:1e3+y))/6e4}equals(e){return"iana"===e.type&&e.name===this.name}get isValid(){return this.valid}}let V={},B=new Map;function Y(e,t={}){let r=JSON.stringify([e,t]),i=B.get(r);return void 0===i&&(i=new Intl.DateTimeFormat(e,t),B.set(r,i)),i}let z=new Map,U=new Map,W=null,Q=new Map;function H(e){let t=Q.get(e);return void 0===t&&(t=new Intl.DateTimeFormat(e).resolvedOptions(),Q.set(e,t)),t}let Z=new Map;function X(e,t,r,i){let n=e.listingMode();return"error"===n?null:"en"===n?r(t):i(t)}class ${constructor(e,t,r){this.padTo=r.padTo||0,this.floor=r.floor||!1;let{padTo:i,floor:n,...s}=r;if(!t||Object.keys(s).length>0){let t={useGrouping:!1,...r};r.padTo>0&&(t.minimumIntegerDigits=r.padTo),this.inf=function(e,t={}){let r=JSON.stringify([e,t]),i=z.get(r);return void 0===i&&(i=new Intl.NumberFormat(e,t),z.set(r,i)),i}(e,t)}}format(e){if(!this.inf)return eY(this.floor?Math.floor(e):eQ(e,3),this.padTo);{let t=this.floor?Math.floor(e):e;return this.inf.format(t)}}}class ee{constructor(e,t,r){let i;if(this.opts=r,this.originalZone=void 0,this.opts.timeZone)this.dt=e;else if("fixed"===e.zone.type){let t=-(e.offset/60*1),r=t>=0?`Etc/GMT+${t}`:`Etc/GMT${t}`;0!==e.offset&&q.create(r).valid?(i=r,this.dt=e):(i="UTC",this.dt=0===e.offset?e:e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone)}else"system"===e.zone.type?this.dt=e:"iana"===e.zone.type?(this.dt=e,i=e.zone.name):(i="UTC",this.dt=e.setZone("UTC").plus({minutes:e.offset}),this.originalZone=e.zone);let n={...this.opts};n.timeZone=n.timeZone||i,this.dtf=Y(t,n)}format(){return this.originalZone?this.formatToParts().map(({value:e})=>e).join(""):this.dtf.format(this.dt.toJSDate())}formatToParts(){let e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(e=>{if("timeZoneName"!==e.type)return e;{let t=this.originalZone.offsetName(this.dt.ts,{locale:this.dt.locale,format:this.opts.timeZoneName});return{...e,value:t}}}):e}resolvedOptions(){return this.dtf.resolvedOptions()}}class et{constructor(e,t,r){this.opts={style:"long",...r},!t&&e_()&&(this.rtf=function(e,t={}){let{base:r,...i}=t,n=JSON.stringify([e,i]),s=U.get(n);return void 0===s&&(s=new Intl.RelativeTimeFormat(e,t),U.set(n,s)),s}(e,r))}format(e,t){return this.rtf?this.rtf.format(e,t):function(e,t,r="always",i=!1){let n={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=-1===["hours","minutes","seconds"].indexOf(e);if("auto"===r&&s){let r="days"===e;switch(t){case 1:return r?"tomorrow":`next ${n[e][0]}`;case -1:return r?"yesterday":`last ${n[e][0]}`;case 0:return r?"today":`this ${n[e][0]}`}}let a=Object.is(t,-0)||t<0,o=Math.abs(t),l=1===o,d=n[e],c=i?l?d[1]:d[2]||d[1]:l?n[e][0]:e;return a?`${o} ${c} ago`:`in ${o} ${c}`}(t,e,this.opts.numeric,"long"!==this.opts.style)}formatToParts(e,t){return this.rtf?this.rtf.formatToParts(e,t):[]}}let er={firstDay:1,minimalDays:4,weekend:[6,7]};class ei{static fromOpts(e){return ei.create(e.locale,e.numberingSystem,e.outputCalendar,e.weekSettings,e.defaultToEN)}static create(e,t,r,i,n=!1){let s=e||eK.defaultLocale,a=s||(n?"en-US":W||(W=new Intl.DateTimeFormat().resolvedOptions().locale));return new ei(a,t||eK.defaultNumberingSystem,r||eK.defaultOutputCalendar,eV(i)||eK.defaultWeekSettings,s)}static resetCache(){W=null,B.clear(),z.clear(),U.clear(),Q.clear(),Z.clear()}static fromObject({locale:e,numberingSystem:t,outputCalendar:r,weekSettings:i}={}){return ei.create(e,t,r,i)}constructor(e,t,r,i,n){let[s,a,o]=function(e){let t=e.indexOf("-x-");-1!==t&&(e=e.substring(0,t));let r=e.indexOf("-u-");if(-1===r)return[e];{let t,i;try{t=Y(e).resolvedOptions(),i=e}catch(s){let n=e.substring(0,r);t=Y(n).resolvedOptions(),i=n}let{numberingSystem:n,calendar:s}=t;return[i,n,s]}}(e);this.locale=s,this.numberingSystem=t||a||null,this.outputCalendar=r||o||null,this.weekSettings=i,this.intl=function(e,t,r){return(r||t)&&(e.includes("-u-")||(e+="-u"),r&&(e+=`-ca-${r}`),t&&(e+=`-nu-${t}`)),e}(this.locale,this.numberingSystem,this.outputCalendar),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=n,this.fastNumbersCached=null}get fastNumbers(){return null==this.fastNumbersCached&&(this.fastNumbersCached=(!this.numberingSystem||"latn"===this.numberingSystem)&&("latn"===this.numberingSystem||!this.locale||this.locale.startsWith("en")||"latn"===H(this.locale).numberingSystem)),this.fastNumbersCached}listingMode(){let e=this.isEnglish(),t=(null===this.numberingSystem||"latn"===this.numberingSystem)&&(null===this.outputCalendar||"gregory"===this.outputCalendar);return e&&t?"en":"intl"}clone(e){return e&&0!==Object.getOwnPropertyNames(e).length?ei.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,eV(e.weekSettings)||this.weekSettings,e.defaultToEN||!1):this}redefaultToEN(e={}){return this.clone({...e,defaultToEN:!0})}redefaultToSystem(e={}){return this.clone({...e,defaultToEN:!1})}months(e,t=!1){return X(this,e,tr,()=>{let r="ja"===this.intl||this.intl.startsWith("ja-"),i=(t&=!r)?{month:e,day:"numeric"}:{month:e},n=t?"format":"standalone";if(!this.monthsCache[n][e]){let t=r?e=>this.dtFormatter(e,i).format():e=>this.extract(e,i,"month");this.monthsCache[n][e]=function(e){let t=[];for(let r=1;r<=12;r++){let i=rU.utc(2009,r,1);t.push(e(i))}return t}(t)}return this.monthsCache[n][e]})}weekdays(e,t=!1){return X(this,e,ta,()=>{let r=t?{weekday:e,year:"numeric",month:"long",day:"numeric"}:{weekday:e},i=t?"format":"standalone";return this.weekdaysCache[i][e]||(this.weekdaysCache[i][e]=function(e){let t=[];for(let r=1;r<=7;r++){let i=rU.utc(2016,11,13+r);t.push(e(i))}return t}(e=>this.extract(e,r,"weekday"))),this.weekdaysCache[i][e]})}meridiems(){return X(this,void 0,()=>to,()=>{if(!this.meridiemCache){let e={hour:"numeric",hourCycle:"h12"};this.meridiemCache=[rU.utc(2016,11,13,9),rU.utc(2016,11,13,19)].map(t=>this.extract(t,e,"dayperiod"))}return this.meridiemCache})}eras(e){return X(this,e,tu,()=>{let t={era:e};return this.eraCache[e]||(this.eraCache[e]=[rU.utc(-40,1,1),rU.utc(2017,1,1)].map(e=>this.extract(e,t,"era"))),this.eraCache[e]})}extract(e,t,r){let i=this.dtFormatter(e,t).formatToParts().find(e=>e.type.toLowerCase()===r);return i?i.value:null}numberFormatter(e={}){return new $(this.intl,e.forceSimple||this.fastNumbers,e)}dtFormatter(e,t={}){return new ee(e,this.intl,t)}relFormatter(e={}){return new et(this.intl,this.isEnglish(),e)}listFormatter(e={}){return function(e,t={}){let r=JSON.stringify([e,t]),i=V[r];return i||(i=new Intl.ListFormat(e,t),V[r]=i),i}(this.intl,e)}isEnglish(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||H(this.intl).locale.startsWith("en-us")}getWeekSettings(){return this.weekSettings?this.weekSettings:eF()?function(e){let t=Z.get(e);if(!t){let r=new Intl.Locale(e);"minimalDays"in(t="getWeekInfo"in r?r.getWeekInfo():r.weekInfo)||(t={...er,...t}),Z.set(e,t)}return t}(this.locale):er}getStartOfWeek(){return this.getWeekSettings().firstDay}getMinDaysInFirstWeek(){return this.getWeekSettings().minimalDays}getWeekendDays(){return this.getWeekSettings().weekend}equals(e){return this.locale===e.locale&&this.numberingSystem===e.numberingSystem&&this.outputCalendar===e.outputCalendar}toString(){return`Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`}}let en=null;class es extends P{static get utcInstance(){return null===en&&(en=new es(0)),en}static instance(e){return 0===e?es.utcInstance:new es(e)}static parseSpecifier(e){if(e){let t=e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(t)return new es(e4(t[1],t[2]))}return null}constructor(e){super(),this.fixed=e}get type(){return"fixed"}get name(){return 0===this.fixed?"UTC":`UTC${e9(this.fixed,"narrow")}`}get ianaName(){return 0===this.fixed?"Etc/UTC":`Etc/GMT${e9(-this.fixed,"narrow")}`}offsetName(){return this.name}formatOffset(e,t){return e9(this.fixed,t)}get isUniversal(){return!0}offset(){return this.fixed}equals(e){return"fixed"===e.type&&e.fixed===this.fixed}get isValid(){return!0}}class ea extends P{constructor(e){super(),this.zoneName=e}get type(){return"invalid"}get name(){return this.zoneName}get isUniversal(){return!1}offsetName(){return null}formatOffset(){return""}offset(){return NaN}equals(){return!1}get isValid(){return!1}}function eo(e,t){if(eP(e)||null===e)return t;if(e instanceof P)return e;if("string"==typeof e){let r=e.toLowerCase();return"default"===r?t:"local"===r||"system"===r?J.instance:"utc"===r||"gmt"===r?es.utcInstance:es.parseSpecifier(r)||q.create(e)}return eL(e)?es.instance(e):"object"==typeof e&&"offset"in e&&"function"==typeof e.offset?e:new ea(e)}let el={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},ed={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},ec=el.hanidec.replace(/[\[|\]]/g,"").split(""),eu=new Map;function ep({numberingSystem:e},t=""){let r=e||"latn",i=eu.get(r);void 0===i&&(i=new Map,eu.set(r,i));let n=i.get(t);return void 0===n&&(n=RegExp(`${el[r]}${t}`),i.set(t,n)),n}let eh=()=>Date.now(),ey="system",em=null,ef=null,eb=null,eg=60,eS,ev=null;class eK{static get now(){return eh}static set now(e){eh=e}static set defaultZone(e){ey=e}static get defaultZone(){return eo(ey,J.instance)}static get defaultLocale(){return em}static set defaultLocale(e){em=e}static get defaultNumberingSystem(){return ef}static set defaultNumberingSystem(e){ef=e}static get defaultOutputCalendar(){return eb}static set defaultOutputCalendar(e){eb=e}static get defaultWeekSettings(){return ev}static set defaultWeekSettings(e){ev=eV(e)}static get twoDigitCutoffYear(){return eg}static set twoDigitCutoffYear(e){eg=e%100}static get throwOnInvalid(){return eS}static set throwOnInvalid(e){eS=e}static resetCaches(){ei.resetCache(),q.resetCache(),rU.resetCache(),eu.clear()}}class ek{constructor(e,t){this.reason=e,this.explanation=t}toMessage(){return this.explanation?`${this.reason}: ${this.explanation}`:this.reason}}let eE=[0,31,59,90,120,151,181,212,243,273,304,334],eI=[0,31,60,91,121,152,182,213,244,274,305,335];function ew(e,t){return new ek("unit out of range",`you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`)}function ej(e,t,r){let i=new Date(Date.UTC(e,t-1,r));e<100&&e>=0&&i.setUTCFullYear(i.getUTCFullYear()-1900);let n=i.getUTCDay();return 0===n?7:n}function ex(e,t){let r=eH(e)?eI:eE,i=r.findIndex(e=>e<t),n=t-r[i];return{month:i+1,day:n}}function eA(e,t){return(e-t+7)%7+1}function eT(e,t=4,r=1){let{year:i,month:n,day:s}=e,a=s+(eH(i)?eI:eE)[n-1],o=eA(ej(i,n,s),r),l=Math.floor((a-o+14-t)/7),d;return l<1?l=e1(d=i-1,t,r):l>e1(i,t,r)?(d=i+1,l=1):d=i,{weekYear:d,weekNumber:l,weekday:o,...e8(e)}}function eC(e,t=4,r=1){let{weekYear:i,weekNumber:n,weekday:s}=e,a=eA(ej(i,1,t),r),o=eZ(i),l=7*n+s-a-7+t,d;l<1?l+=eZ(d=i-1):l>o?(d=i+1,l-=eZ(i)):d=i;let{month:c,day:u}=ex(d,l);return{year:d,month:c,day:u,...e8(e)}}function eD(e){let{year:t,month:r,day:i}=e,n=i+(eH(t)?eI:eE)[r-1];return{year:t,ordinal:n,...e8(e)}}function eO(e){let{year:t,ordinal:r}=e,{month:i,day:n}=ex(t,r);return{year:t,month:i,day:n,...e8(e)}}function eR(e,t){if(!(!eP(e.localWeekday)||!eP(e.localWeekNumber)||!eP(e.localWeekYear)))return{minDaysInFirstWeek:4,startOfWeek:1};if(!eP(e.weekday)||!eP(e.weekNumber)||!eP(e.weekYear))throw new o("Cannot mix locale-based week fields with ISO-based week fields");return eP(e.localWeekday)||(e.weekday=e.localWeekday),eP(e.localWeekNumber)||(e.weekNumber=e.localWeekNumber),eP(e.localWeekYear)||(e.weekYear=e.localWeekYear),delete e.localWeekday,delete e.localWeekNumber,delete e.localWeekYear,{minDaysInFirstWeek:t.getMinDaysInFirstWeek(),startOfWeek:t.getStartOfWeek()}}function eM(e){let t=eJ(e.year),r=eB(e.month,1,12),i=eB(e.day,1,eX(e.year,e.month));return t?r?!i&&ew("day",e.day):ew("month",e.month):ew("year",e.year)}function eN(e){let{hour:t,minute:r,second:i,millisecond:n}=e,s=eB(t,0,23)||24===t&&0===r&&0===i&&0===n,a=eB(r,0,59),o=eB(i,0,59),l=eB(n,0,999);return s?a?o?!l&&ew("millisecond",n):ew("second",i):ew("minute",r):ew("hour",t)}function eP(e){return void 0===e}function eL(e){return"number"==typeof e}function eJ(e){return"number"==typeof e&&e%1==0}function e_(){try{return"undefined"!=typeof Intl&&!!Intl.RelativeTimeFormat}catch(e){return!1}}function eF(){try{return"undefined"!=typeof Intl&&!!Intl.Locale&&("weekInfo"in Intl.Locale.prototype||"getWeekInfo"in Intl.Locale.prototype)}catch(e){return!1}}function eG(e,t,r){if(0!==e.length)return e.reduce((e,i)=>{let n=[t(i),i];return e&&r(e[0],n[0])===e[0]?e:n},null)[1]}function eq(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function eV(e){if(null==e)return null;if("object"!=typeof e)throw new d("Week settings must be an object");if(!eB(e.firstDay,1,7)||!eB(e.minimalDays,1,7)||!Array.isArray(e.weekend)||e.weekend.some(e=>!eB(e,1,7)))throw new d("Invalid week settings");return{firstDay:e.firstDay,minimalDays:e.minimalDays,weekend:Array.from(e.weekend)}}function eB(e,t,r){return eJ(e)&&e>=t&&e<=r}function eY(e,t=2){return e<0?"-"+(""+-e).padStart(t,"0"):(""+e).padStart(t,"0")}function ez(e){if(!eP(e)&&null!==e&&""!==e)return parseInt(e,10)}function eU(e){if(!eP(e)&&null!==e&&""!==e)return parseFloat(e)}function eW(e){if(!eP(e)&&null!==e&&""!==e)return Math.floor(1e3*parseFloat("0."+e))}function eQ(e,t,r="round"){let i=10**t;switch(r){case"expand":return e>0?Math.ceil(e*i)/i:Math.floor(e*i)/i;case"trunc":return Math.trunc(e*i)/i;case"round":return Math.round(e*i)/i;case"floor":return Math.floor(e*i)/i;case"ceil":return Math.ceil(e*i)/i;default:throw RangeError(`Value rounding ${r} is out of range`)}}function eH(e){return e%4==0&&(e%100!=0||e%400==0)}function eZ(e){return eH(e)?366:365}function eX(e,t){var r;let i=(r=t-1)-12*Math.floor(r/12)+1;return 2===i?eH(e+(t-i)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][i-1]}function e$(e){let t=Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second,e.millisecond);return e.year<100&&e.year>=0&&(t=new Date(t)).setUTCFullYear(e.year,e.month-1,e.day),+t}function e0(e,t,r){return-eA(ej(e,1,t),r)+t-1}function e1(e,t=4,r=1){let i=e0(e,t,r),n=e0(e+1,t,r);return(eZ(e)-i+n)/7}function e2(e){return e>99?e:e>eK.twoDigitCutoffYear?1900+e:2e3+e}function e3(e,t,r,i=null){let n=new Date(e),s={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};i&&(s.timeZone=i);let a={timeZoneName:t,...s},o=new Intl.DateTimeFormat(r,a).formatToParts(n).find(e=>"timezonename"===e.type.toLowerCase());return o?o.value:null}function e4(e,t){let r=parseInt(e,10);Number.isNaN(r)&&(r=0);let i=parseInt(t,10)||0,n=r<0||Object.is(r,-0)?-i:i;return 60*r+n}function e6(e){let t=Number(e);if("boolean"==typeof e||""===e||!Number.isFinite(t))throw new d(`Invalid unit value ${e}`);return t}function e5(e,t){let r={};for(let i in e)if(eq(e,i)){let n=e[i];if(null==n)continue;r[t(i)]=e6(n)}return r}function e9(e,t){let r=Math.trunc(Math.abs(e/60)),i=Math.trunc(Math.abs(e%60)),n=e>=0?"+":"-";switch(t){case"short":return`${n}${eY(r,2)}:${eY(i,2)}`;case"narrow":return`${n}${r}${i>0?`:${i}`:""}`;case"techie":return`${n}${eY(r,2)}${eY(i,2)}`;default:throw RangeError(`Value format ${t} is out of range for property format`)}}function e8(e){return["hour","minute","second","millisecond"].reduce((t,r)=>(t[r]=e[r],t),{})}let e7=["January","February","March","April","May","June","July","August","September","October","November","December"],te=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tt=["J","F","M","A","M","J","J","A","S","O","N","D"];function tr(e){switch(e){case"narrow":return[...tt];case"short":return[...te];case"long":return[...e7];case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}let ti=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],tn=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ts=["M","T","W","T","F","S","S"];function ta(e){switch(e){case"narrow":return[...ts];case"short":return[...tn];case"long":return[...ti];case"numeric":return["1","2","3","4","5","6","7"];default:return null}}let to=["AM","PM"],tl=["Before Christ","Anno Domini"],td=["BC","AD"],tc=["B","A"];function tu(e){switch(e){case"narrow":return[...tc];case"short":return[...td];case"long":return[...tl];default:return null}}function tp(e,t){let r="";for(let i of e)i.literal?r+=i.val:r+=t(i.val);return r}let th={D:y,DD:m,DDD:b,DDDD:g,t:S,tt:v,ttt:K,tttt:k,T:E,TT:I,TTT:w,TTTT:j,f:x,ff:T,fff:O,ffff:M,F:A,FF:C,FFF:R,FFFF:N};class ty{static create(e,t={}){return new ty(e,t)}static parseFormat(e){let t=null,r="",i=!1,n=[];for(let s=0;s<e.length;s++){let a=e.charAt(s);"'"===a?((r.length>0||i)&&n.push({literal:i||/^\s+$/.test(r),val:""===r?"'":r}),t=null,r="",i=!i):i?r+=a:a===t?r+=a:(r.length>0&&n.push({literal:/^\s+$/.test(r),val:r}),r=a,t=a)}return r.length>0&&n.push({literal:i||/^\s+$/.test(r),val:r}),n}static macroTokenToFormatOpts(e){return th[e]}constructor(e,t){this.opts=t,this.loc=e,this.systemLoc=null}formatWithSystemDefault(e,t){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(e,{...this.opts,...t}).format()}dtFormatter(e,t={}){return this.loc.dtFormatter(e,{...this.opts,...t})}formatDateTime(e,t){return this.dtFormatter(e,t).format()}formatDateTimeParts(e,t){return this.dtFormatter(e,t).formatToParts()}formatInterval(e,t){return this.dtFormatter(e.start,t).dtf.formatRange(e.start.toJSDate(),e.end.toJSDate())}resolvedOptions(e,t){return this.dtFormatter(e,t).resolvedOptions()}num(e,t=0,r){if(this.opts.forceSimple)return eY(e,t);let i={...this.opts};return t>0&&(i.padTo=t),r&&(i.signDisplay=r),this.loc.numberFormatter(i).format(e)}formatDateTimeFromString(e,t){let r="en"===this.loc.listingMode(),i=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,n=(t,r)=>this.loc.extract(e,t,r),s=t=>e.isOffsetFixed&&0===e.offset&&t.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,t.format):"",a=()=>r?to[e.hour<12?0:1]:n({hour:"numeric",hourCycle:"h12"},"dayperiod"),o=(t,i)=>r?tr(t)[e.month-1]:n(i?{month:t}:{month:t,day:"numeric"},"month"),l=(t,i)=>r?ta(t)[e.weekday-1]:n(i?{weekday:t}:{weekday:t,month:"long",day:"numeric"},"weekday"),d=t=>{let r=ty.macroTokenToFormatOpts(t);return r?this.formatWithSystemDefault(e,r):t},c=t=>r?tu(t)[e.year<0?0:1]:n({era:t},"era");return tp(ty.parseFormat(t),t=>{switch(t){case"S":return this.num(e.millisecond);case"u":case"SSS":return this.num(e.millisecond,3);case"s":return this.num(e.second);case"ss":return this.num(e.second,2);case"uu":return this.num(Math.floor(e.millisecond/10),2);case"uuu":return this.num(Math.floor(e.millisecond/100));case"m":return this.num(e.minute);case"mm":return this.num(e.minute,2);case"h":return this.num(e.hour%12==0?12:e.hour%12);case"hh":return this.num(e.hour%12==0?12:e.hour%12,2);case"H":return this.num(e.hour);case"HH":return this.num(e.hour,2);case"Z":return s({format:"narrow",allowZ:this.opts.allowZ});case"ZZ":return s({format:"short",allowZ:this.opts.allowZ});case"ZZZ":return s({format:"techie",allowZ:this.opts.allowZ});case"ZZZZ":return e.zone.offsetName(e.ts,{format:"short",locale:this.loc.locale});case"ZZZZZ":return e.zone.offsetName(e.ts,{format:"long",locale:this.loc.locale});case"z":return e.zoneName;case"a":return a();case"d":return i?n({day:"numeric"},"day"):this.num(e.day);case"dd":return i?n({day:"2-digit"},"day"):this.num(e.day,2);case"c":case"E":return this.num(e.weekday);case"ccc":return l("short",!0);case"cccc":return l("long",!0);case"ccccc":return l("narrow",!0);case"EEE":return l("short",!1);case"EEEE":return l("long",!1);case"EEEEE":return l("narrow",!1);case"L":return i?n({month:"numeric",day:"numeric"},"month"):this.num(e.month);case"LL":return i?n({month:"2-digit",day:"numeric"},"month"):this.num(e.month,2);case"LLL":return o("short",!0);case"LLLL":return o("long",!0);case"LLLLL":return o("narrow",!0);case"M":return i?n({month:"numeric"},"month"):this.num(e.month);case"MM":return i?n({month:"2-digit"},"month"):this.num(e.month,2);case"MMM":return o("short",!1);case"MMMM":return o("long",!1);case"MMMMM":return o("narrow",!1);case"y":return i?n({year:"numeric"},"year"):this.num(e.year);case"yy":return i?n({year:"2-digit"},"year"):this.num(e.year.toString().slice(-2),2);case"yyyy":return i?n({year:"numeric"},"year"):this.num(e.year,4);case"yyyyyy":return i?n({year:"numeric"},"year"):this.num(e.year,6);case"G":return c("short");case"GG":return c("long");case"GGGGG":return c("narrow");case"kk":return this.num(e.weekYear.toString().slice(-2),2);case"kkkk":return this.num(e.weekYear,4);case"W":return this.num(e.weekNumber);case"WW":return this.num(e.weekNumber,2);case"n":return this.num(e.localWeekNumber);case"nn":return this.num(e.localWeekNumber,2);case"ii":return this.num(e.localWeekYear.toString().slice(-2),2);case"iiii":return this.num(e.localWeekYear,4);case"o":return this.num(e.ordinal);case"ooo":return this.num(e.ordinal,3);case"q":return this.num(e.quarter);case"qq":return this.num(e.quarter,2);case"X":return this.num(Math.floor(e.ts/1e3));case"x":return this.num(e.ts);default:return d(t)}})}formatDurationFromString(e,t){let r="negativeLargestOnly"===this.opts.signMode?-1:1,i=e=>{switch(e[0]){case"S":return"milliseconds";case"s":return"seconds";case"m":return"minutes";case"h":return"hours";case"d":return"days";case"w":return"weeks";case"M":return"months";case"y":return"years";default:return null}},n=ty.parseFormat(t),s=n.reduce((e,{literal:t,val:r})=>t?e:e.concat(r),[]),a=e.shiftTo(...s.map(i).filter(e=>e)),o={isNegativeDuration:a<0,largestUnit:Object.keys(a.values)[0]};return tp(n,e=>{let t=i(e);if(!t)return e;{let i;let n=o.isNegativeDuration&&t!==o.largestUnit?r:1;return i="negativeLargestOnly"===this.opts.signMode&&t!==o.largestUnit?"never":"all"===this.opts.signMode?"always":"auto",this.num(a.get(t)*n,e.length,i)}})}}let tm=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function tf(...e){let t=e.reduce((e,t)=>e+t.source,"");return RegExp(`^${t}$`)}function tb(...e){return t=>e.reduce(([e,r,i],n)=>{let[s,a,o]=n(t,i);return[{...e,...s},a||r,o]},[{},null,1]).slice(0,2)}function tg(e,...t){if(null==e)return[null,null];for(let[r,i]of t){let t=r.exec(e);if(t)return i(t)}return[null,null]}function tS(...e){return(t,r)=>{let i;let n={};for(i=0;i<e.length;i++)n[e[i]]=ez(t[r+i]);return[n,null,r+i]}}let tv=/(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/,tK=`(?:${tv.source}?(?:\\[(${tm.source})\\])?)?`,tk=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,tE=RegExp(`${tk.source}${tK}`),tI=RegExp(`(?:[Tt]${tE.source})?`),tw=tS("weekYear","weekNumber","weekDay"),tj=tS("year","ordinal"),tx=RegExp(`${tk.source} ?(?:${tv.source}|(${tm.source}))?`),tA=RegExp(`(?: ${tx.source})?`);function tT(e,t,r){let i=e[t];return eP(i)?r:ez(i)}function tC(e,t){return[{hours:tT(e,t,0),minutes:tT(e,t+1,0),seconds:tT(e,t+2,0),milliseconds:eW(e[t+3])},null,t+4]}function tD(e,t){let r=!e[t]&&!e[t+1],i=e4(e[t+1],e[t+2]);return[{},r?null:es.instance(i),t+3]}function tO(e,t){return[{},e[t]?q.create(e[t]):null,t+1]}let tR=RegExp(`^T?${tk.source}$`),tM=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function tN(e){let[t,r,i,n,s,a,o,l,d]=e,c="-"===t[0],u=l&&"-"===l[0],p=(e,t=!1)=>void 0!==e&&(t||e&&c)?-e:e;return[{years:p(eU(r)),months:p(eU(i)),weeks:p(eU(n)),days:p(eU(s)),hours:p(eU(a)),minutes:p(eU(o)),seconds:p(eU(l),"-0"===l),milliseconds:p(eW(d),u)}]}let tP={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function tL(e,t,r,i,n,s,a){let o={year:2===t.length?e2(ez(t)):ez(t),month:te.indexOf(r)+1,day:ez(i),hour:ez(n),minute:ez(s)};return a&&(o.second=ez(a)),e&&(o.weekday=e.length>3?ti.indexOf(e)+1:tn.indexOf(e)+1),o}let tJ=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function t_(e){let[,t,r,i,n,s,a,o,l,d,c,u]=e;return[tL(t,n,i,r,s,a,o),new es(l?tP[l]:d?0:e4(c,u))]}let tF=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,tG=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,tq=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function tV(e){let[,t,r,i,n,s,a,o]=e;return[tL(t,n,i,r,s,a,o),es.utcInstance]}function tB(e){let[,t,r,i,n,s,a,o]=e;return[tL(t,o,r,i,n,s,a),es.utcInstance]}let tY=tf(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,tI),tz=tf(/(\d{4})-?W(\d\d)(?:-?(\d))?/,tI),tU=tf(/(\d{4})-?(\d{3})/,tI),tW=tf(tE),tQ=tb(function(e,t){return[{year:tT(e,t),month:tT(e,t+1,1),day:tT(e,t+2,1)},null,t+3]},tC,tD,tO),tH=tb(tw,tC,tD,tO),tZ=tb(tj,tC,tD,tO),tX=tb(tC,tD,tO),t$=tb(tC),t0=tf(/(\d{4})-(\d\d)-(\d\d)/,tA),t1=tf(tx),t2=tb(tC,tD,tO),t3="Invalid Duration",t4={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},t6={years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6},...t4},t5={years:{quarters:4,months:12,weeks:52.1775,days:365.2425,hours:8765.82,minutes:525949.2,seconds:31556952,milliseconds:31556952e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:7889238,milliseconds:7889238e3},months:{weeks:30.436875/7,days:30.436875,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3},...t4},t9=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],t8=t9.slice(0).reverse();function t7(e,t,r=!1){return new ri({values:r?t.values:{...e.values,...t.values||{}},loc:e.loc.clone(t.loc),conversionAccuracy:t.conversionAccuracy||e.conversionAccuracy,matrix:t.matrix||e.matrix})}function re(e,t){var r;let i=null!=(r=t.milliseconds)?r:0;for(let r of t8.slice(1))t[r]&&(i+=t[r]*e[r].milliseconds);return i}function rt(e,t){let r=0>re(e,t)?-1:1;t9.reduceRight((i,n)=>{if(eP(t[n]))return i;if(i){let s=t[i]*r,a=e[n][i],o=Math.floor(s/a);t[n]+=o*r,t[i]-=o*a*r}return n},null),t9.reduce((r,i)=>{if(eP(t[i]))return r;if(r){let n=t[r]%1;t[r]-=n,t[i]+=n*e[r][i]}return i},null)}function rr(e){let t={};for(let[r,i]of Object.entries(e))0!==i&&(t[r]=i);return t}class ri{constructor(e){let t="longterm"===e.conversionAccuracy,r=t?t5:t6;e.matrix&&(r=e.matrix),this.values=e.values,this.loc=e.loc||ei.create(),this.conversionAccuracy=t?"longterm":"casual",this.invalid=e.invalid||null,this.matrix=r,this.isLuxonDuration=!0}static fromMillis(e,t){return ri.fromObject({milliseconds:e},t)}static fromObject(e,t={}){if(null==e||"object"!=typeof e)throw new d(`Duration.fromObject: argument expected to be an object, got ${null===e?"null":typeof e}`);return new ri({values:e5(e,ri.normalizeUnit),loc:ei.fromObject(t),conversionAccuracy:t.conversionAccuracy,matrix:t.matrix})}static fromDurationLike(e){if(eL(e))return ri.fromMillis(e);if(ri.isDuration(e))return e;if("object"==typeof e)return ri.fromObject(e);throw new d(`Unknown duration argument ${e} of type ${typeof e}`)}static fromISO(e,t){let[r]=tg(e,[tM,tN]);return r?ri.fromObject(r,t):ri.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static fromISOTime(e,t){let[r]=tg(e,[tR,t$]);return r?ri.fromObject(r,t):ri.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static invalid(e,t=null){if(!e)throw new d("need to specify a reason the Duration is invalid");let r=e instanceof ek?e:new ek(e,t);if(!eK.throwOnInvalid)return new ri({invalid:r});throw new a(r)}static normalizeUnit(e){let t={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[e?e.toLowerCase():e];if(!t)throw new l(e);return t}static isDuration(e){return e&&e.isLuxonDuration||!1}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}toFormat(e,t={}){let r={...t,floor:!1!==t.round&&!1!==t.floor};return this.isValid?ty.create(this.loc,r).formatDurationFromString(this,e):t3}toHuman(e={}){if(!this.isValid)return t3;let t=!1!==e.showZeros,r=t9.map(r=>{let i=this.values[r];return eP(i)||0===i&&!t?null:this.loc.numberFormatter({style:"unit",unitDisplay:"long",...e,unit:r.slice(0,-1)}).format(i)}).filter(e=>e);return this.loc.listFormatter({type:"conjunction",style:e.listStyle||"narrow",...e}).format(r)}toObject(){return this.isValid?{...this.values}:{}}toISO(){if(!this.isValid)return null;let e="P";return 0!==this.years&&(e+=this.years+"Y"),(0!==this.months||0!==this.quarters)&&(e+=this.months+3*this.quarters+"M"),0!==this.weeks&&(e+=this.weeks+"W"),0!==this.days&&(e+=this.days+"D"),(0!==this.hours||0!==this.minutes||0!==this.seconds||0!==this.milliseconds)&&(e+="T"),0!==this.hours&&(e+=this.hours+"H"),0!==this.minutes&&(e+=this.minutes+"M"),(0!==this.seconds||0!==this.milliseconds)&&(e+=eQ(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===e&&(e+="T0S"),e}toISOTime(e={}){if(!this.isValid)return null;let t=this.toMillis();return t<0||t>=864e5?null:(e={suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended",...e,includeOffset:!1},rU.fromMillis(t,{zone:"UTC"}).toISOTime(e))}toJSON(){return this.toISO()}toString(){return this.toISO()}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Duration { values: ${JSON.stringify(this.values)} }`:`Duration { Invalid, reason: ${this.invalidReason} }`}toMillis(){return this.isValid?re(this.matrix,this.values):NaN}valueOf(){return this.toMillis()}plus(e){if(!this.isValid)return this;let t=ri.fromDurationLike(e),r={};for(let e of t9)(eq(t.values,e)||eq(this.values,e))&&(r[e]=t.get(e)+this.get(e));return t7(this,{values:r},!0)}minus(e){if(!this.isValid)return this;let t=ri.fromDurationLike(e);return this.plus(t.negate())}mapUnits(e){if(!this.isValid)return this;let t={};for(let r of Object.keys(this.values))t[r]=e6(e(this.values[r],r));return t7(this,{values:t},!0)}get(e){return this[ri.normalizeUnit(e)]}set(e){return this.isValid?t7(this,{values:{...this.values,...e5(e,ri.normalizeUnit)}}):this}reconfigure({locale:e,numberingSystem:t,conversionAccuracy:r,matrix:i}={}){return t7(this,{loc:this.loc.clone({locale:e,numberingSystem:t}),matrix:i,conversionAccuracy:r})}as(e){return this.isValid?this.shiftTo(e).get(e):NaN}normalize(){if(!this.isValid)return this;let e=this.toObject();return rt(this.matrix,e),t7(this,{values:e},!0)}rescale(){return this.isValid?t7(this,{values:rr(this.normalize().shiftToAll().toObject())},!0):this}shiftTo(...e){let t;if(!this.isValid||0===e.length)return this;e=e.map(e=>ri.normalizeUnit(e));let r={},i={},n=this.toObject();for(let s of t9)if(e.indexOf(s)>=0){t=s;let e=0;for(let t in i)e+=this.matrix[t][s]*i[t],i[t]=0;eL(n[s])&&(e+=n[s]);let a=Math.trunc(e);r[s]=a,i[s]=(1e3*e-1e3*a)/1e3}else eL(n[s])&&(i[s]=n[s]);for(let e in i)0!==i[e]&&(r[t]+=e===t?i[e]:i[e]/this.matrix[t][e]);return rt(this.matrix,r),t7(this,{values:r},!0)}shiftToAll(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}negate(){if(!this.isValid)return this;let e={};for(let t of Object.keys(this.values))e[t]=0===this.values[t]?0:-this.values[t];return t7(this,{values:e},!0)}removeZeros(){return this.isValid?t7(this,{values:rr(this.values)},!0):this}get years(){return this.isValid?this.values.years||0:NaN}get quarters(){return this.isValid?this.values.quarters||0:NaN}get months(){return this.isValid?this.values.months||0:NaN}get weeks(){return this.isValid?this.values.weeks||0:NaN}get days(){return this.isValid?this.values.days||0:NaN}get hours(){return this.isValid?this.values.hours||0:NaN}get minutes(){return this.isValid?this.values.minutes||0:NaN}get seconds(){return this.isValid?this.values.seconds||0:NaN}get milliseconds(){return this.isValid?this.values.milliseconds||0:NaN}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}equals(e){if(!this.isValid||!e.isValid||!this.loc.equals(e.loc))return!1;for(let i of t9){var t,r;if(t=this.values[i],r=e.values[i],void 0===t||0===t?void 0!==r&&0!==r:t!==r)return!1}return!0}}let rn="Invalid Interval";class rs{constructor(e){this.s=e.start,this.e=e.end,this.invalid=e.invalid||null,this.isLuxonInterval=!0}static invalid(e,t=null){if(!e)throw new d("need to specify a reason the Interval is invalid");let r=e instanceof ek?e:new ek(e,t);if(!eK.throwOnInvalid)return new rs({invalid:r});throw new s(r)}static fromDateTimes(e,t){let r=rW(e),i=rW(t),n=r&&r.isValid?i&&i.isValid?i<r?rs.invalid("end before start",`The end of an interval must be after its start, but you had start=${r.toISO()} and end=${i.toISO()}`):null:rs.invalid("missing or invalid end"):rs.invalid("missing or invalid start");return null==n?new rs({start:r,end:i}):n}static after(e,t){let r=ri.fromDurationLike(t),i=rW(e);return rs.fromDateTimes(i,i.plus(r))}static before(e,t){let r=ri.fromDurationLike(t),i=rW(e);return rs.fromDateTimes(i.minus(r),i)}static fromISO(e,t){let[r,i]=(e||"").split("/",2);if(r&&i){let e,n,s,a;try{n=(e=rU.fromISO(r,t)).isValid}catch(e){n=!1}try{a=(s=rU.fromISO(i,t)).isValid}catch(e){a=!1}if(n&&a)return rs.fromDateTimes(e,s);if(n){let r=ri.fromISO(i,t);if(r.isValid)return rs.after(e,r)}else if(a){let e=ri.fromISO(r,t);if(e.isValid)return rs.before(s,e)}}return rs.invalid("unparsable",`the input "${e}" can't be parsed as ISO 8601`)}static isInterval(e){return e&&e.isLuxonInterval||!1}get start(){return this.isValid?this.s:null}get end(){return this.isValid?this.e:null}get lastDateTime(){return this.isValid&&this.e?this.e.minus(1):null}get isValid(){return null===this.invalidReason}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}length(e="milliseconds"){return this.isValid?this.toDuration(e).get(e):NaN}count(e="milliseconds",t){let r;if(!this.isValid)return NaN;let i=this.start.startOf(e,t);return Math.floor((r=(r=null!=t&&t.useLocaleWeeks?this.end.reconfigure({locale:i.locale}):this.end).startOf(e,t)).diff(i,e).get(e))+(r.valueOf()!==this.end.valueOf())}hasSame(e){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,e))}isEmpty(){return this.s.valueOf()===this.e.valueOf()}isAfter(e){return!!this.isValid&&this.s>e}isBefore(e){return!!this.isValid&&this.e<=e}contains(e){return!!this.isValid&&this.s<=e&&this.e>e}set({start:e,end:t}={}){return this.isValid?rs.fromDateTimes(e||this.s,t||this.e):this}splitAt(...e){if(!this.isValid)return[];let t=e.map(rW).filter(e=>this.contains(e)).sort((e,t)=>e.toMillis()-t.toMillis()),r=[],{s:i}=this,n=0;for(;i<this.e;){let e=t[n]||this.e,s=+e>+this.e?this.e:e;r.push(rs.fromDateTimes(i,s)),i=s,n+=1}return r}splitBy(e){let t=ri.fromDurationLike(e);if(!this.isValid||!t.isValid||0===t.as("milliseconds"))return[];let{s:r}=this,i=1,n,s=[];for(;r<this.e;){let e=this.start.plus(t.mapUnits(e=>e*i));n=+e>+this.e?this.e:e,s.push(rs.fromDateTimes(r,n)),r=n,i+=1}return s}divideEqually(e){return this.isValid?this.splitBy(this.length()/e).slice(0,e):[]}overlaps(e){return this.e>e.s&&this.s<e.e}abutsStart(e){return!!this.isValid&&+this.e==+e.s}abutsEnd(e){return!!this.isValid&&+e.e==+this.s}engulfs(e){return!!this.isValid&&this.s<=e.s&&this.e>=e.e}equals(e){return!!this.isValid&&!!e.isValid&&this.s.equals(e.s)&&this.e.equals(e.e)}intersection(e){if(!this.isValid)return this;let t=this.s>e.s?this.s:e.s,r=this.e<e.e?this.e:e.e;return t>=r?null:rs.fromDateTimes(t,r)}union(e){if(!this.isValid)return this;let t=this.s<e.s?this.s:e.s,r=this.e>e.e?this.e:e.e;return rs.fromDateTimes(t,r)}static merge(e){let[t,r]=e.sort((e,t)=>e.s-t.s).reduce(([e,t],r)=>t?t.overlaps(r)||t.abutsStart(r)?[e,t.union(r)]:[e.concat([t]),r]:[e,r],[[],null]);return r&&t.push(r),t}static xor(e){let t=null,r=0,i=[],n=e.map(e=>[{time:e.s,type:"s"},{time:e.e,type:"e"}]);for(let e of Array.prototype.concat(...n).sort((e,t)=>e.time-t.time))1===(r+="s"===e.type?1:-1)?t=e.time:(t&&+t!=+e.time&&i.push(rs.fromDateTimes(t,e.time)),t=null);return rs.merge(i)}difference(...e){return rs.xor([this].concat(e)).map(e=>this.intersection(e)).filter(e=>e&&!e.isEmpty())}toString(){return this.isValid?`[${this.s.toISO()} – ${this.e.toISO()})`:rn}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }`:`Interval { Invalid, reason: ${this.invalidReason} }`}toLocaleString(e=y,t={}){return this.isValid?ty.create(this.s.loc.clone(t),e).formatInterval(this):rn}toISO(e){return this.isValid?`${this.s.toISO(e)}/${this.e.toISO(e)}`:rn}toISODate(){return this.isValid?`${this.s.toISODate()}/${this.e.toISODate()}`:rn}toISOTime(e){return this.isValid?`${this.s.toISOTime(e)}/${this.e.toISOTime(e)}`:rn}toFormat(e,{separator:t=" – "}={}){return this.isValid?`${this.s.toFormat(e)}${t}${this.e.toFormat(e)}`:rn}toDuration(e,t){return this.isValid?this.e.diff(this.s,e,t):ri.invalid(this.invalidReason)}mapEndpoints(e){return rs.fromDateTimes(e(this.s),e(this.e))}}class ra{static hasDST(e=eK.defaultZone){let t=rU.now().setZone(e).set({month:12});return!e.isUniversal&&t.offset!==t.set({month:6}).offset}static isValidIANAZone(e){return q.isValidZone(e)}static normalizeZone(e){return eo(e,eK.defaultZone)}static getStartOfWeek({locale:e=null,locObj:t=null}={}){return(t||ei.create(e)).getStartOfWeek()}static getMinimumDaysInFirstWeek({locale:e=null,locObj:t=null}={}){return(t||ei.create(e)).getMinDaysInFirstWeek()}static getWeekendWeekdays({locale:e=null,locObj:t=null}={}){return(t||ei.create(e)).getWeekendDays().slice()}static months(e="long",{locale:t=null,numberingSystem:r=null,locObj:i=null,outputCalendar:n="gregory"}={}){return(i||ei.create(t,r,n)).months(e)}static monthsFormat(e="long",{locale:t=null,numberingSystem:r=null,locObj:i=null,outputCalendar:n="gregory"}={}){return(i||ei.create(t,r,n)).months(e,!0)}static weekdays(e="long",{locale:t=null,numberingSystem:r=null,locObj:i=null}={}){return(i||ei.create(t,r,null)).weekdays(e)}static weekdaysFormat(e="long",{locale:t=null,numberingSystem:r=null,locObj:i=null}={}){return(i||ei.create(t,r,null)).weekdays(e,!0)}static meridiems({locale:e=null}={}){return ei.create(e).meridiems()}static eras(e="short",{locale:t=null}={}){return ei.create(t,null,"gregory").eras(e)}static features(){return{relative:e_(),localeWeek:eF()}}}function ro(e,t){let r=e=>e.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf(),i=r(t)-r(e);return Math.floor(ri.fromMillis(i).as("days"))}function rl(e,t=e=>e){return{regex:e,deser:([e])=>t(function(e){let t=parseInt(e,10);if(!isNaN(t))return t;t="";for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(-1!==e[r].search(el.hanidec))t+=ec.indexOf(e[r]);else for(let e in ed){let[r,n]=ed[e];i>=r&&i<=n&&(t+=i-r)}}return parseInt(t,10)}(e))}}let rd=String.fromCharCode(160),rc=`[ ${rd}]`,ru=RegExp(rc,"g");function rp(e){return e.replace(/\./g,"\\.?").replace(ru,rc)}function rh(e){return e.replace(/\./g,"").replace(ru," ").toLowerCase()}function ry(e,t){return null===e?null:{regex:RegExp(e.map(rp).join("|")),deser:([r])=>e.findIndex(e=>rh(r)===rh(e))+t}}function rm(e,t){return{regex:e,deser:([,e,t])=>e4(e,t),groups:t}}function rf(e){return{regex:e,deser:([e])=>e}}let rb={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}},rg=null;function rS(e,t){return Array.prototype.concat(...e.map(e=>(function(e,t){if(e.literal)return e;let r=rk(ty.macroTokenToFormatOpts(e.val),t);return null==r||r.includes(void 0)?e:r})(e,t)))}class rv{constructor(e,t){if(this.locale=e,this.format=t,this.tokens=rS(ty.parseFormat(t),e),this.units=this.tokens.map(t=>(function(e,t){let r=ep(t),i=ep(t,"{2}"),n=ep(t,"{3}"),s=ep(t,"{4}"),a=ep(t,"{6}"),o=ep(t,"{1,2}"),l=ep(t,"{1,3}"),d=ep(t,"{1,6}"),c=ep(t,"{1,9}"),u=ep(t,"{2,4}"),p=ep(t,"{4,6}"),h=e=>({regex:RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")),deser:([e])=>e,literal:!0}),y=(y=>{if(e.literal)return h(y);switch(y.val){case"G":return ry(t.eras("short"),0);case"GG":return ry(t.eras("long"),0);case"y":return rl(d);case"yy":case"kk":return rl(u,e2);case"yyyy":case"kkkk":return rl(s);case"yyyyy":return rl(p);case"yyyyyy":return rl(a);case"M":case"L":case"d":case"H":case"h":case"m":case"q":case"s":case"W":return rl(o);case"MM":case"LL":case"dd":case"HH":case"hh":case"mm":case"qq":case"ss":case"WW":return rl(i);case"MMM":return ry(t.months("short",!0),1);case"MMMM":return ry(t.months("long",!0),1);case"LLL":return ry(t.months("short",!1),1);case"LLLL":return ry(t.months("long",!1),1);case"o":case"S":return rl(l);case"ooo":case"SSS":return rl(n);case"u":return rf(c);case"uu":return rf(o);case"uuu":case"E":case"c":return rl(r);case"a":return ry(t.meridiems(),0);case"EEE":return ry(t.weekdays("short",!1),1);case"EEEE":return ry(t.weekdays("long",!1),1);case"ccc":return ry(t.weekdays("short",!0),1);case"cccc":return ry(t.weekdays("long",!0),1);case"Z":case"ZZ":return rm(RegExp(`([+-]${o.source})(?::(${i.source}))?`),2);case"ZZZ":return rm(RegExp(`([+-]${o.source})(${i.source})?`),2);case"z":return rf(/[a-z_+-/]{1,256}?/i);case" ":return rf(/[^\S\n\r]/);default:return h(y)}})(e)||{invalidReason:"missing Intl.DateTimeFormat.formatToParts support"};return y.token=e,y})(t,e)),this.disqualifyingUnit=this.units.find(e=>e.invalidReason),!this.disqualifyingUnit){let[e,t]=function(e){let t=e.map(e=>e.regex).reduce((e,t)=>`${e}(${t.source})`,"");return[`^${t}$`,e]}(this.units);this.regex=RegExp(e,"i"),this.handlers=t}}explainFromTokens(e){if(!this.isValid)return{input:e,tokens:this.tokens,invalidReason:this.invalidReason};{let[t,r]=function(e,t,r){let i=e.match(t);if(!i)return[i,{}];{let e={},t=1;for(let n in r)if(eq(r,n)){let s=r[n],a=s.groups?s.groups+1:1;!s.literal&&s.token&&(e[s.token.val[0]]=s.deser(i.slice(t,t+a))),t+=a}return[i,e]}}(e,this.regex,this.handlers),[i,n,s]=r?function(e){let t;let r=e=>{switch(e){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},i=null;return eP(e.z)||(i=q.create(e.z)),eP(e.Z)||(i||(i=new es(e.Z)),t=e.Z),eP(e.q)||(e.M=(e.q-1)*3+1),eP(e.h)||(e.h<12&&1===e.a?e.h+=12:12!==e.h||0!==e.a||(e.h=0)),0===e.G&&e.y&&(e.y=-e.y),eP(e.u)||(e.S=eW(e.u)),[Object.keys(e).reduce((t,i)=>{let n=r(i);return n&&(t[n]=e[i]),t},{}),i,t]}(r):[null,null,void 0];if(eq(r,"a")&&eq(r,"H"))throw new o("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:this.tokens,regex:this.regex,rawMatches:t,matches:r,result:i,zone:n,specificOffset:s}}}get isValid(){return!this.disqualifyingUnit}get invalidReason(){return this.disqualifyingUnit?this.disqualifyingUnit.invalidReason:null}}function rK(e,t,r){return new rv(e,r).explainFromTokens(t)}function rk(e,t){if(!e)return null;let r=ty.create(t,e).dtFormatter((rg||(rg=rU.fromMillis(1555555555555)),rg)),i=r.formatToParts(),n=r.resolvedOptions();return i.map(t=>(function(e,t,r){let{type:i,value:n}=e;if("literal"===i){let e=/^\s+$/.test(n);return{literal:!e,val:e?" ":n}}let s=t[i],a=i;"hour"===i&&(a=null!=t.hour12?t.hour12?"hour12":"hour24":null!=t.hourCycle?"h11"===t.hourCycle||"h12"===t.hourCycle?"hour12":"hour24":r.hour12?"hour12":"hour24");let o=rb[a];if("object"==typeof o&&(o=o[s]),o)return{literal:!1,val:o}})(t,e,n))}let rE="Invalid DateTime";function rI(e){return new ek("unsupported zone",`the zone "${e.name}" is not supported`)}function rw(e){return null===e.weekData&&(e.weekData=eT(e.c)),e.weekData}function rj(e){return null===e.localWeekData&&(e.localWeekData=eT(e.c,e.loc.getMinDaysInFirstWeek(),e.loc.getStartOfWeek())),e.localWeekData}function rx(e,t){let r={ts:e.ts,zone:e.zone,c:e.c,o:e.o,loc:e.loc,invalid:e.invalid};return new rU({...r,...t,old:r})}function rA(e,t,r){let i=e-6e4*t,n=r.offset(i);if(t===n)return[i,t];i-=(n-t)*6e4;let s=r.offset(i);return n===s?[i,n]:[e-6e4*Math.min(n,s),Math.max(n,s)]}function rT(e,t){let r=new Date(e+=6e4*t);return{year:r.getUTCFullYear(),month:r.getUTCMonth()+1,day:r.getUTCDate(),hour:r.getUTCHours(),minute:r.getUTCMinutes(),second:r.getUTCSeconds(),millisecond:r.getUTCMilliseconds()}}function rC(e,t){let r=e.o,i=e.c.year+Math.trunc(t.years),n=e.c.month+Math.trunc(t.months)+3*Math.trunc(t.quarters),s={...e.c,year:i,month:n,day:Math.min(e.c.day,eX(i,n))+Math.trunc(t.days)+7*Math.trunc(t.weeks)},a=ri.fromObject({years:t.years-Math.trunc(t.years),quarters:t.quarters-Math.trunc(t.quarters),months:t.months-Math.trunc(t.months),weeks:t.weeks-Math.trunc(t.weeks),days:t.days-Math.trunc(t.days),hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds}).as("milliseconds"),[o,l]=rA(e$(s),r,e.zone);return 0!==a&&(o+=a,l=e.zone.offset(o)),{ts:o,o:l}}function rD(e,t,r,i,n,s){let{setZone:a,zone:o}=r;if((!e||0===Object.keys(e).length)&&!t)return rU.invalid(new ek("unparsable",`the input "${n}" can't be parsed as ${i}`));{let i=rU.fromObject(e,{...r,zone:t||o,specificOffset:s});return a?i:i.setZone(o)}}function rO(e,t,r=!0){return e.isValid?ty.create(ei.create("en-US"),{allowZ:r,forceSimple:!0}).formatDateTimeFromString(e,t):null}function rR(e,t,r){let i=e.c.year>9999||e.c.year<0,n="";if(i&&e.c.year>=0&&(n+="+"),n+=eY(e.c.year,i?6:4),"year"===r)return n;if(t){if(n+="-"+eY(e.c.month),"month"===r)return n;n+="-"}else if(n+=eY(e.c.month),"month"===r)return n;return n+eY(e.c.day)}function rM(e,t,r,i,n,s,a){let o=!r||0!==e.c.millisecond||0!==e.c.second,l="";switch(a){case"day":case"month":case"year":break;default:if(l+=eY(e.c.hour),"hour"===a)break;if(t){if(l+=":"+eY(e.c.minute),"minute"===a)break;o&&(l+=":"+eY(e.c.second))}else{if(l+=eY(e.c.minute),"minute"===a)break;o&&(l+=eY(e.c.second))}if("second"===a)break;o&&(!i||0!==e.c.millisecond)&&(l+="."+eY(e.c.millisecond,3))}return n&&(e.isOffsetFixed&&0===e.offset&&!s?l+="Z":e.o<0?l+="-"+eY(Math.trunc(-e.o/60))+":"+eY(Math.trunc(-e.o%60)):l+="+"+eY(Math.trunc(e.o/60))+":"+eY(Math.trunc(e.o%60))),s&&(l+="["+e.zone.ianaName+"]"),l}let rN={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},rP={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},rL={ordinal:1,hour:0,minute:0,second:0,millisecond:0},rJ=["year","month","day","hour","minute","second","millisecond"],r_=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],rF=["year","ordinal","hour","minute","second","millisecond"];function rG(e){let t={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[e.toLowerCase()];if(!t)throw new l(e);return t}function rq(e){switch(e.toLowerCase()){case"localweekday":case"localweekdays":return"localWeekday";case"localweeknumber":case"localweeknumbers":return"localWeekNumber";case"localweekyear":case"localweekyears":return"localWeekYear";default:return rG(e)}}function rV(e,t){let i,n;let s=eo(t.zone,eK.defaultZone);if(!s.isValid)return rU.invalid(rI(s));let a=ei.fromObject(t);if(eP(e.year))i=eK.now();else{for(let t of rJ)eP(e[t])&&(e[t]=rN[t]);let t=eM(e)||eN(e);if(t)return rU.invalid(t);let a=function(e){if(void 0===r&&(r=eK.now()),"iana"!==e.type)return e.offset(r);let t=e.name,i=rz.get(t);return void 0===i&&(i=e.offset(r),rz.set(t,i)),i}(s);[i,n]=rA(e$(e),a,s)}return new rU({ts:i,zone:s,loc:a,o:n})}function rB(e,t,r){let i=!!eP(r.round)||r.round,n=eP(r.rounding)?"trunc":r.rounding,s=(e,s)=>(e=eQ(e,i||r.calendary?0:2,r.calendary?"round":n),t.loc.clone(r).relFormatter(r).format(e,s)),a=i=>r.calendary?t.hasSame(e,i)?0:t.startOf(i).diff(e.startOf(i),i).get(i):t.diff(e,i).get(i);if(r.unit)return s(a(r.unit),r.unit);for(let e of r.units){let t=a(e);if(Math.abs(t)>=1)return s(t,e)}return s(e>t?-0:0,r.units[r.units.length-1])}function rY(e){let t={},r;return e.length>0&&"object"==typeof e[e.length-1]?(t=e[e.length-1],r=Array.from(e).slice(0,e.length-1)):r=Array.from(e),[t,r]}let rz=new Map;class rU{constructor(e){let t=e.zone||eK.defaultZone,r=e.invalid||(Number.isNaN(e.ts)?new ek("invalid input"):null)||(t.isValid?null:rI(t));this.ts=eP(e.ts)?eK.now():e.ts;let i=null,n=null;if(!r){if(e.old&&e.old.ts===this.ts&&e.old.zone.equals(t))[i,n]=[e.old.c,e.old.o];else{let s=eL(e.o)&&!e.old?e.o:t.offset(this.ts);i=(r=Number.isNaN((i=rT(this.ts,s)).year)?new ek("invalid input"):null)?null:i,n=r?null:s}}this._zone=t,this.loc=e.loc||ei.create(),this.invalid=r,this.weekData=null,this.localWeekData=null,this.c=i,this.o=n,this.isLuxonDateTime=!0}static now(){return new rU({})}static local(){let[e,t]=rY(arguments),[r,i,n,s,a,o,l]=t;return rV({year:r,month:i,day:n,hour:s,minute:a,second:o,millisecond:l},e)}static utc(){let[e,t]=rY(arguments),[r,i,n,s,a,o,l]=t;return e.zone=es.utcInstance,rV({year:r,month:i,day:n,hour:s,minute:a,second:o,millisecond:l},e)}static fromJSDate(e,t={}){let r="[object Date]"===Object.prototype.toString.call(e)?e.valueOf():NaN;if(Number.isNaN(r))return rU.invalid("invalid input");let i=eo(t.zone,eK.defaultZone);return i.isValid?new rU({ts:r,zone:i,loc:ei.fromObject(t)}):rU.invalid(rI(i))}static fromMillis(e,t={}){if(eL(e))return e<-864e13||e>864e13?rU.invalid("Timestamp out of range"):new rU({ts:e,zone:eo(t.zone,eK.defaultZone),loc:ei.fromObject(t)});throw new d(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`)}static fromSeconds(e,t={}){if(eL(e))return new rU({ts:1e3*e,zone:eo(t.zone,eK.defaultZone),loc:ei.fromObject(t)});throw new d("fromSeconds requires a numerical input")}static fromObject(e,t={}){e=e||{};let r=eo(t.zone,eK.defaultZone);if(!r.isValid)return rU.invalid(rI(r));let i=ei.fromObject(t),n=e5(e,rq),{minDaysInFirstWeek:s,startOfWeek:a}=eR(n,i),l=eK.now(),d=eP(t.specificOffset)?r.offset(l):t.specificOffset,c=!eP(n.ordinal),u=!eP(n.year),p=!eP(n.month)||!eP(n.day),h=u||p,y=n.weekYear||n.weekNumber;if((h||c)&&y)throw new o("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(p&&c)throw new o("Can't mix ordinal dates with month/day");let m=y||n.weekday&&!h,f,b,g=rT(l,d);m?(f=r_,b=rP,g=eT(g,s,a)):c?(f=rF,b=rL,g=eD(g)):(f=rJ,b=rN);let S=!1;for(let e of f)eP(n[e])?S?n[e]=b[e]:n[e]=g[e]:S=!0;let v=(m?function(e,t=4,r=1){let i=eJ(e.weekYear),n=eB(e.weekNumber,1,e1(e.weekYear,t,r)),s=eB(e.weekday,1,7);return i?n?!s&&ew("weekday",e.weekday):ew("week",e.weekNumber):ew("weekYear",e.weekYear)}(n,s,a):c?function(e){let t=eJ(e.year),r=eB(e.ordinal,1,eZ(e.year));return t?!r&&ew("ordinal",e.ordinal):ew("year",e.year)}(n):eM(n))||eN(n);if(v)return rU.invalid(v);let[K,k]=rA(e$(m?eC(n,s,a):c?eO(n):n),d,r),E=new rU({ts:K,zone:r,o:k,loc:i});return n.weekday&&h&&e.weekday!==E.weekday?rU.invalid("mismatched weekday",`you can't specify both a weekday of ${n.weekday} and a date of ${E.toISO()}`):E.isValid?E:rU.invalid(E.invalid)}static fromISO(e,t={}){let[r,i]=tg(e,[tY,tQ],[tz,tH],[tU,tZ],[tW,tX]);return rD(r,i,t,"ISO 8601",e)}static fromRFC2822(e,t={}){let[r,i]=tg(e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim(),[tJ,t_]);return rD(r,i,t,"RFC 2822",e)}static fromHTTP(e,t={}){let[r,i]=tg(e,[tF,tV],[tG,tV],[tq,tB]);return rD(r,i,t,"HTTP",t)}static fromFormat(e,t,r={}){if(eP(e)||eP(t))throw new d("fromFormat requires an input string and a format");let{locale:i=null,numberingSystem:n=null}=r,[s,a,o,l]=function(e,t,r){let{result:i,zone:n,specificOffset:s,invalidReason:a}=rK(e,t,r);return[i,n,s,a]}(ei.fromOpts({locale:i,numberingSystem:n,defaultToEN:!0}),e,t);return l?rU.invalid(l):rD(s,a,r,`format ${t}`,e,o)}static fromString(e,t,r={}){return rU.fromFormat(e,t,r)}static fromSQL(e,t={}){let[r,i]=tg(e,[t0,tQ],[t1,t2]);return rD(r,i,t,"SQL",e)}static invalid(e,t=null){if(!e)throw new d("need to specify a reason the DateTime is invalid");let r=e instanceof ek?e:new ek(e,t);if(!eK.throwOnInvalid)return new rU({invalid:r});throw new n(r)}static isDateTime(e){return e&&e.isLuxonDateTime||!1}static parseFormatForOpts(e,t={}){let r=rk(e,ei.fromObject(t));return r?r.map(e=>e?e.val:null).join(""):null}static expandFormat(e,t={}){return rS(ty.parseFormat(e),ei.fromObject(t)).map(e=>e.val).join("")}static resetCache(){r=void 0,rz.clear()}get(e){return this[e]}get isValid(){return null===this.invalid}get invalidReason(){return this.invalid?this.invalid.reason:null}get invalidExplanation(){return this.invalid?this.invalid.explanation:null}get locale(){return this.isValid?this.loc.locale:null}get numberingSystem(){return this.isValid?this.loc.numberingSystem:null}get outputCalendar(){return this.isValid?this.loc.outputCalendar:null}get zone(){return this._zone}get zoneName(){return this.isValid?this.zone.name:null}get year(){return this.isValid?this.c.year:NaN}get quarter(){return this.isValid?Math.ceil(this.c.month/3):NaN}get month(){return this.isValid?this.c.month:NaN}get day(){return this.isValid?this.c.day:NaN}get hour(){return this.isValid?this.c.hour:NaN}get minute(){return this.isValid?this.c.minute:NaN}get second(){return this.isValid?this.c.second:NaN}get millisecond(){return this.isValid?this.c.millisecond:NaN}get weekYear(){return this.isValid?rw(this).weekYear:NaN}get weekNumber(){return this.isValid?rw(this).weekNumber:NaN}get weekday(){return this.isValid?rw(this).weekday:NaN}get isWeekend(){return this.isValid&&this.loc.getWeekendDays().includes(this.weekday)}get localWeekday(){return this.isValid?rj(this).weekday:NaN}get localWeekNumber(){return this.isValid?rj(this).weekNumber:NaN}get localWeekYear(){return this.isValid?rj(this).weekYear:NaN}get ordinal(){return this.isValid?eD(this.c).ordinal:NaN}get monthShort(){return this.isValid?ra.months("short",{locObj:this.loc})[this.month-1]:null}get monthLong(){return this.isValid?ra.months("long",{locObj:this.loc})[this.month-1]:null}get weekdayShort(){return this.isValid?ra.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}get weekdayLong(){return this.isValid?ra.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}get offset(){return this.isValid?+this.o:NaN}get offsetNameShort(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}get offsetNameLong(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}get isOffsetFixed(){return this.isValid?this.zone.isUniversal:null}get isInDST(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}getPossibleOffsets(){if(!this.isValid||this.isOffsetFixed)return[this];let e=e$(this.c),t=this.zone.offset(e-864e5),r=this.zone.offset(e+864e5),i=this.zone.offset(e-6e4*t),n=this.zone.offset(e-6e4*r);if(i===n)return[this];let s=e-6e4*i,a=e-6e4*n,o=rT(s,i),l=rT(a,n);return o.hour===l.hour&&o.minute===l.minute&&o.second===l.second&&o.millisecond===l.millisecond?[rx(this,{ts:s}),rx(this,{ts:a})]:[this]}get isInLeapYear(){return eH(this.year)}get daysInMonth(){return eX(this.year,this.month)}get daysInYear(){return this.isValid?eZ(this.year):NaN}get weeksInWeekYear(){return this.isValid?e1(this.weekYear):NaN}get weeksInLocalWeekYear(){return this.isValid?e1(this.localWeekYear,this.loc.getMinDaysInFirstWeek(),this.loc.getStartOfWeek()):NaN}resolvedLocaleOptions(e={}){let{locale:t,numberingSystem:r,calendar:i}=ty.create(this.loc.clone(e),e).resolvedOptions(this);return{locale:t,numberingSystem:r,outputCalendar:i}}toUTC(e=0,t={}){return this.setZone(es.instance(e),t)}toLocal(){return this.setZone(eK.defaultZone)}setZone(e,{keepLocalTime:t=!1,keepCalendarTime:r=!1}={}){if((e=eo(e,eK.defaultZone)).equals(this.zone))return this;if(!e.isValid)return rU.invalid(rI(e));{let n=this.ts;if(t||r){var i;let t=e.offset(this.ts),r=this.toObject();[n]=(i=e,rA(e$(r),t,i))}return rx(this,{ts:n,zone:e})}}reconfigure({locale:e,numberingSystem:t,outputCalendar:r}={}){return rx(this,{loc:this.loc.clone({locale:e,numberingSystem:t,outputCalendar:r})})}setLocale(e){return this.reconfigure({locale:e})}set(e){var t,r,i;let n;if(!this.isValid)return this;let s=e5(e,rq),{minDaysInFirstWeek:a,startOfWeek:l}=eR(s,this.loc),d=!eP(s.weekYear)||!eP(s.weekNumber)||!eP(s.weekday),c=!eP(s.ordinal),u=!eP(s.year),p=!eP(s.month)||!eP(s.day),h=s.weekYear||s.weekNumber;if((u||p||c)&&h)throw new o("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(p&&c)throw new o("Can't mix ordinal dates with month/day");d?n=eC({...eT(this.c,a,l),...s},a,l):eP(s.ordinal)?(n={...this.toObject(),...s},eP(s.day)&&(n.day=Math.min(eX(n.year,n.month),n.day))):n=eO({...eD(this.c),...s});let[y,m]=(t=n,r=this.o,i=this.zone,rA(e$(t),r,i));return rx(this,{ts:y,o:m})}plus(e){return this.isValid?rx(this,rC(this,ri.fromDurationLike(e))):this}minus(e){return this.isValid?rx(this,rC(this,ri.fromDurationLike(e).negate())):this}startOf(e,{useLocaleWeeks:t=!1}={}){if(!this.isValid)return this;let r={},i=ri.normalizeUnit(e);switch(i){case"years":r.month=1;case"quarters":case"months":r.day=1;case"weeks":case"days":r.hour=0;case"hours":r.minute=0;case"minutes":r.second=0;case"seconds":r.millisecond=0}if("weeks"===i){if(t){let e=this.loc.getStartOfWeek(),{weekday:t}=this;t<e&&(r.weekNumber=this.weekNumber-1),r.weekday=e}else r.weekday=1}if("quarters"===i){let e=Math.ceil(this.month/3);r.month=(e-1)*3+1}return this.set(r)}endOf(e,t){return this.isValid?this.plus({[e]:1}).startOf(e,t).minus(1):this}toFormat(e,t={}){return this.isValid?ty.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this,e):rE}toLocaleString(e=y,t={}){return this.isValid?ty.create(this.loc.clone(t),e).formatDateTime(this):rE}toLocaleParts(e={}){return this.isValid?ty.create(this.loc.clone(e),e).formatDateTimeParts(this):[]}toISO({format:e="extended",suppressSeconds:t=!1,suppressMilliseconds:r=!1,includeOffset:i=!0,extendedZone:n=!1,precision:s="milliseconds"}={}){if(!this.isValid)return null;s=rG(s);let a="extended"===e,o=rR(this,a,s);return rJ.indexOf(s)>=3&&(o+="T"),o+=rM(this,a,t,r,i,n,s)}toISODate({format:e="extended",precision:t="day"}={}){return this.isValid?rR(this,"extended"===e,rG(t)):null}toISOWeekDate(){return rO(this,"kkkk-'W'WW-c")}toISOTime({suppressMilliseconds:e=!1,suppressSeconds:t=!1,includeOffset:r=!0,includePrefix:i=!1,extendedZone:n=!1,format:s="extended",precision:a="milliseconds"}={}){return this.isValid?(a=rG(a),(i&&rJ.indexOf(a)>=3?"T":"")+rM(this,"extended"===s,t,e,r,n,a)):null}toRFC2822(){return rO(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}toHTTP(){return rO(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}toSQLDate(){return this.isValid?rR(this,!0):null}toSQLTime({includeOffset:e=!0,includeZone:t=!1,includeOffsetSpace:r=!0}={}){let i="HH:mm:ss.SSS";return(t||e)&&(r&&(i+=" "),t?i+="z":e&&(i+="ZZ")),rO(this,i,!0)}toSQL(e={}){return this.isValid?`${this.toSQLDate()} ${this.toSQLTime(e)}`:null}toString(){return this.isValid?this.toISO():rE}[Symbol.for("nodejs.util.inspect.custom")](){return this.isValid?`DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }`:`DateTime { Invalid, reason: ${this.invalidReason} }`}valueOf(){return this.toMillis()}toMillis(){return this.isValid?this.ts:NaN}toSeconds(){return this.isValid?this.ts/1e3:NaN}toUnixInteger(){return this.isValid?Math.floor(this.ts/1e3):NaN}toJSON(){return this.toISO()}toBSON(){return this.toJSDate()}toObject(e={}){if(!this.isValid)return{};let t={...this.c};return e.includeConfig&&(t.outputCalendar=this.outputCalendar,t.numberingSystem=this.loc.numberingSystem,t.locale=this.loc.locale),t}toJSDate(){return new Date(this.isValid?this.ts:NaN)}diff(e,t="milliseconds",r={}){if(!this.isValid||!e.isValid)return ri.invalid("created by diffing an invalid DateTime");let i={locale:this.locale,numberingSystem:this.numberingSystem,...r},n=(Array.isArray(t)?t:[t]).map(ri.normalizeUnit),s=e.valueOf()>this.valueOf(),a=function(e,t,r,i){let[n,s,a,o]=function(e,t,r){let i,n;let s={},a=e;for(let[o,l]of[["years",(e,t)=>t.year-e.year],["quarters",(e,t)=>t.quarter-e.quarter+(t.year-e.year)*4],["months",(e,t)=>t.month-e.month+(t.year-e.year)*12],["weeks",(e,t)=>{let r=ro(e,t);return(r-r%7)/7}],["days",ro]])r.indexOf(o)>=0&&(i=o,s[o]=l(e,t),(n=a.plus(s))>t?(s[o]--,(e=a.plus(s))>t&&(n=e,s[o]--,e=a.plus(s))):e=n);return[e,s,n,i]}(e,t,r),l=t-n,d=r.filter(e=>["hours","minutes","seconds","milliseconds"].indexOf(e)>=0);0===d.length&&(a<t&&(a=n.plus({[o]:1})),a!==n&&(s[o]=(s[o]||0)+l/(a-n)));let c=ri.fromObject(s,i);return d.length>0?ri.fromMillis(l,i).shiftTo(...d).plus(c):c}(s?this:e,s?e:this,n,i);return s?a.negate():a}diffNow(e="milliseconds",t={}){return this.diff(rU.now(),e,t)}until(e){return this.isValid?rs.fromDateTimes(this,e):this}hasSame(e,t,r){if(!this.isValid)return!1;let i=e.valueOf(),n=this.setZone(e.zone,{keepLocalTime:!0});return n.startOf(t,r)<=i&&i<=n.endOf(t,r)}equals(e){return this.isValid&&e.isValid&&this.valueOf()===e.valueOf()&&this.zone.equals(e.zone)&&this.loc.equals(e.loc)}toRelative(e={}){if(!this.isValid)return null;let t=e.base||rU.fromObject({},{zone:this.zone}),r=e.padding?this<t?-e.padding:e.padding:0,i=["years","months","days","hours","minutes","seconds"],n=e.unit;return Array.isArray(e.unit)&&(i=e.unit,n=void 0),rB(t,this.plus(r),{...e,numeric:"always",units:i,unit:n})}toRelativeCalendar(e={}){return this.isValid?rB(e.base||rU.fromObject({},{zone:this.zone}),this,{...e,numeric:"auto",units:["years","months","days"],calendary:!0}):null}static min(...e){if(!e.every(rU.isDateTime))throw new d("min requires all arguments be DateTimes");return eG(e,e=>e.valueOf(),Math.min)}static max(...e){if(!e.every(rU.isDateTime))throw new d("max requires all arguments be DateTimes");return eG(e,e=>e.valueOf(),Math.max)}static fromFormatExplain(e,t,r={}){let{locale:i=null,numberingSystem:n=null}=r;return rK(ei.fromOpts({locale:i,numberingSystem:n,defaultToEN:!0}),e,t)}static fromStringExplain(e,t,r={}){return rU.fromFormatExplain(e,t,r)}static buildFormatParser(e,t={}){let{locale:r=null,numberingSystem:i=null}=t;return new rv(ei.fromOpts({locale:r,numberingSystem:i,defaultToEN:!0}),e)}static fromFormatParser(e,t,r={}){if(eP(e)||eP(t))throw new d("fromFormatParser requires an input string and a format parser");let{locale:i=null,numberingSystem:n=null}=r,s=ei.fromOpts({locale:i,numberingSystem:n,defaultToEN:!0});if(!s.equals(t.locale))throw new d(`fromFormatParser called with a locale of ${s}, but the format parser was created for ${t.locale}`);let{result:a,zone:o,specificOffset:l,invalidReason:c}=t.explainFromTokens(e);return c?rU.invalid(c):rD(a,o,r,`format ${t.format}`,e,l)}static get DATE_SHORT(){return y}static get DATE_MED(){return m}static get DATE_MED_WITH_WEEKDAY(){return f}static get DATE_FULL(){return b}static get DATE_HUGE(){return g}static get TIME_SIMPLE(){return S}static get TIME_WITH_SECONDS(){return v}static get TIME_WITH_SHORT_OFFSET(){return K}static get TIME_WITH_LONG_OFFSET(){return k}static get TIME_24_SIMPLE(){return E}static get TIME_24_WITH_SECONDS(){return I}static get TIME_24_WITH_SHORT_OFFSET(){return w}static get TIME_24_WITH_LONG_OFFSET(){return j}static get DATETIME_SHORT(){return x}static get DATETIME_SHORT_WITH_SECONDS(){return A}static get DATETIME_MED(){return T}static get DATETIME_MED_WITH_SECONDS(){return C}static get DATETIME_MED_WITH_WEEKDAY(){return D}static get DATETIME_FULL(){return O}static get DATETIME_FULL_WITH_SECONDS(){return R}static get DATETIME_HUGE(){return M}static get DATETIME_HUGE_WITH_SECONDS(){return N}}function rW(e){if(rU.isDateTime(e))return e;if(e&&e.valueOf&&eL(e.valueOf()))return rU.fromJSDate(e);if(e&&"object"==typeof e)return rU.fromObject(e);throw new d(`Unknown datetime argument: ${e}, of type ${typeof e}`)}t.DateTime=rU,t.Duration=ri,t.FixedOffsetZone=es,t.IANAZone=q,t.Info=ra,t.Interval=rs,t.InvalidZone=ea,t.Settings=eK,t.SystemZone=J,t.VERSION="3.7.2",t.Zone=P},13974:e=>{function t(e,t,r,i){return Math.round(e/r)+" "+i+(t>=1.5*r?"s":"")}e.exports=function(e,r){r=r||{};var i,n,s=typeof e;if("string"===s&&e.length>0)return function(e){if(!((e=String(e)).length>100)){var t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*r;case"weeks":case"week":case"w":return 6048e5*r;case"days":case"day":case"d":return 864e5*r;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*r;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*r;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}(e);if("number"===s&&isFinite(e))return r.long?(i=Math.abs(e))>=864e5?t(e,i,864e5,"day"):i>=36e5?t(e,i,36e5,"hour"):i>=6e4?t(e,i,6e4,"minute"):i>=1e3?t(e,i,1e3,"second"):e+" ms":(n=Math.abs(e))>=864e5?Math.round(e/864e5)+"d":n>=36e5?Math.round(e/36e5)+"h":n>=6e4?Math.round(e/6e4)+"m":n>=1e3?Math.round(e/1e3)+"s":e+"ms";throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},49303:(e,t,r)=>{"use strict";e.exports=r(30517)},46180:(e,t,r)=>{let{EventEmitter:i}=r(82361);class AbortSignal{constructor(){this.eventEmitter=new i,this.onabort=null,this.aborted=!1,this.reason=void 0}toString(){return"[object AbortSignal]"}get[Symbol.toStringTag](){return"AbortSignal"}removeEventListener(e,t){this.eventEmitter.removeListener(e,t)}addEventListener(e,t){this.eventEmitter.on(e,t)}dispatchEvent(e){let t={type:e,target:this},r=`on${e}`;"function"==typeof this[r]&&this[r](t),this.eventEmitter.emit(e,t)}throwIfAborted(){if(this.aborted)throw this.reason}static abort(e){let t=new n;return t.abort(),t.signal}static timeout(e){let t=new n;return setTimeout(()=>t.abort(Error("TimeoutError")),e),t.signal}}class n{constructor(){this.signal=new AbortSignal}abort(e){this.signal.aborted||(this.signal.aborted=!0,e?this.signal.reason=e:this.signal.reason=Error("AbortError"),this.signal.dispatchEvent("abort"))}toString(){return"[object AbortController]"}get[Symbol.toStringTag](){return"AbortController"}}e.exports={AbortController:n,AbortSignal}},13122:(e,t,r)=>{"use strict";let i=55>process.version.charCodeAt(1)&&46===process.version.charCodeAt(2)?r(48929):r(13913);e.exports=i},13913:(e,t,r)=>{"use strict";let i=r(39491);class n extends Error{get name(){return this.constructor.name}}class s extends n{constructor(e,t,r){i(t),i.strictEqual(typeof r,"number");let n=Error.stackTraceLimit;Error.stackTraceLimit=2,super(e),Error.stackTraceLimit=n,this.offset=r,this.buffer=t}get name(){return this.constructor.name}}class a extends n{constructor(e){let t=Error.stackTraceLimit;Error.stackTraceLimit=2,super(e),Error.stackTraceLimit=t}get name(){return this.constructor.name}}class o extends n{get name(){return this.constructor.name}}class l extends o{get name(){return this.constructor.name}}e.exports={RedisError:n,ParserError:s,ReplyError:a,AbortError:o,InterruptError:l}},48929:(e,t,r)=>{"use strict";let i=r(39491),n=r(73837);function s(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0}),Error.captureStackTrace(this,this.constructor)}function a(e,t,r){i(t),i.strictEqual(typeof r,"number"),Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0});let n=Error.stackTraceLimit;Error.stackTraceLimit=2,Error.captureStackTrace(this,this.constructor),Error.stackTraceLimit=n,this.offset=r,this.buffer=t}function o(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0});let t=Error.stackTraceLimit;Error.stackTraceLimit=2,Error.captureStackTrace(this,this.constructor),Error.stackTraceLimit=t}function l(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0}),Error.captureStackTrace(this,this.constructor)}function d(e){Object.defineProperty(this,"message",{value:e||"",configurable:!0,writable:!0}),Error.captureStackTrace(this,this.constructor)}n.inherits(s,Error),Object.defineProperty(s.prototype,"name",{value:"RedisError",configurable:!0,writable:!0}),n.inherits(a,s),Object.defineProperty(a.prototype,"name",{value:"ParserError",configurable:!0,writable:!0}),n.inherits(o,s),Object.defineProperty(o.prototype,"name",{value:"ReplyError",configurable:!0,writable:!0}),n.inherits(l,s),Object.defineProperty(l.prototype,"name",{value:"AbortError",configurable:!0,writable:!0}),n.inherits(d,l),Object.defineProperty(d.prototype,"name",{value:"InterruptError",configurable:!0,writable:!0}),e.exports={RedisError:s,ParserError:a,ReplyError:o,AbortError:l,InterruptError:d}},37898:(e,t,r)=>{"use strict";e.exports=r(96213)},96213:(e,t,r)=>{"use strict";let i=r(14300).Buffer,n=new(r(71576)).StringDecoder,s=r(13122),a=s.ReplyError,o=s.ParserError;var l=i.allocUnsafe(32768),d=0,c=null,u=0,p=0;function h(e){let t=e.offset,r=e.buffer,i=r.length-1;for(var n=t;n<i;)if(13===r[n++]){if(e.offset=n+1,!0===e.optionReturnBuffers)return e.buffer.slice(t,n-1);return e.buffer.toString("utf8",t,n-1)}}function y(e){let t=e.buffer.length-1;for(var r=e.offset,i=0;r<t;){let t=e.buffer[r++];if(13===t)return e.offset=r+1,i;i=10*i+(t-48)}}function m(e,t,r){e.arrayCache.push(t),e.arrayPos.push(r)}function f(e){let t=e.arrayCache.pop();var r=e.arrayPos.pop();if(e.arrayCache.length){let i=f(e);if(void 0===i){m(e,t,r);return}t[r++]=i}return b(e,t,r)}function b(e,t,r){let i=e.buffer.length;for(;r<t.length;){let n=e.offset;if(e.offset>=i){m(e,t,r);return}let s=g(e,e.buffer[e.offset++]);if(void 0===s){e.arrayCache.length||e.bufferCache.length||(e.offset=n),m(e,t,r);return}t[r]=s,r++}return t}function g(e,t){switch(t){case 36:return function(e){let t=y(e);if(void 0===t)return;if(t<0)return null;let r=e.offset+t;if(r+2>e.buffer.length){e.bigStrSize=r+2,e.totalChunkSize=e.buffer.length,e.bufferCache.push(e.buffer);return}let i=e.offset;return(e.offset=r+2,!0===e.optionReturnBuffers)?e.buffer.slice(i,r):e.buffer.toString("utf8",i,r)}(e);case 43:return h(e);case 42:return function(e){let t=y(e);return void 0===t?void 0:t<0?null:b(e,Array(t),0)}(e);case 58:return!0===e.optionStringNumbers?function(e){let t=e.buffer.length-1;var r=e.offset,i=0,n="";for(45===e.buffer[r]&&(n+="-",r++);r<t;){var s=e.buffer[r++];if(13===s)return e.offset=r+1,0!==i&&(n+=i),n;i>429496728?(n+=10*i+(s-48),i=0):48===s&&0===i?n+=0:i=10*i+(s-48)}}(e):function(e){let t=e.buffer.length-1;var r=e.offset,i=0,n=1;for(45===e.buffer[r]&&(n=-1,r++);r<t;){let t=e.buffer[r++];if(13===t)return e.offset=r+1,n*i;i=10*i+(t-48)}}(e);case 45:return function(e){var t=h(e);if(void 0!==t)return!0===e.optionReturnBuffers&&(t=t.toString()),new a(t)}(e);default:return function(e,t){let r=new o("Protocol error, got "+JSON.stringify(String.fromCharCode(t))+" as reply type byte",JSON.stringify(e.buffer),e.offset);e.buffer=null,e.returnFatalError(r)}(e,t)}}function S(){if(l.length>51200){if(1===u||p>2*u){let e=Math.floor(l.length/10),t=e<d?d:e;d=0,l=l.slice(t,l.length)}else p++,u--}else clearInterval(c),u=0,p=0,c=null}class v{constructor(e){if(!e)throw TypeError("Options are mandatory.");if("function"!=typeof e.returnError||"function"!=typeof e.returnReply)throw TypeError("The returnReply and returnError options have to be functions.");this.setReturnBuffers(!!e.returnBuffers),this.setStringNumbers(!!e.stringNumbers),this.returnError=e.returnError,this.returnFatalError=e.returnFatalError||e.returnError,this.returnReply=e.returnReply,this.reset()}reset(){this.offset=0,this.buffer=null,this.bigStrSize=0,this.totalChunkSize=0,this.bufferCache=[],this.arrayCache=[],this.arrayPos=[]}setReturnBuffers(e){if("boolean"!=typeof e)throw TypeError("The returnBuffers argument has to be a boolean");this.optionReturnBuffers=e}setStringNumbers(e){if("boolean"!=typeof e)throw TypeError("The stringNumbers argument has to be a boolean");this.optionStringNumbers=e}execute(e){if(null===this.buffer)this.buffer=e,this.offset=0;else if(0===this.bigStrSize){let t=this.buffer.length,r=t-this.offset,n=i.allocUnsafe(r+e.length);if(this.buffer.copy(n,0,this.offset,t),e.copy(n,r,0,e.length),this.buffer=n,this.offset=0,this.arrayCache.length){let e=f(this);if(void 0===e)return;this.returnReply(e)}}else if(this.totalChunkSize+e.length>=this.bigStrSize){this.bufferCache.push(e);var t=this.optionReturnBuffers?function(e){let t=e.bufferCache,r=e.offset,n=e.bigStrSize-r-2;var s=t.length,a=e.bigStrSize-e.totalChunkSize;if(e.offset=a,a<=2){if(2===s)return t[0].slice(r,t[0].length+a-2);s--,a=t[t.length-2].length+a}l.length<n+d&&(d>116391936&&(d=52428800),l=i.allocUnsafe(n*(n>78643200?2:3)+d),d=0,u++,null===c&&(c=setInterval(S,50)));let o=d;t[0].copy(l,o,r,t[0].length),d+=t[0].length-r;for(var p=1;p<s-1;p++)t[p].copy(l,d),d+=t[p].length;return t[p].copy(l,d,0,a-2),d+=a-2,l.slice(o,d)}(this):function(e){let t=e.bufferCache,r=e.offset;var i=t.length,s=e.bigStrSize-e.totalChunkSize;if(e.offset=s,s<=2){if(2===i)return t[0].toString("utf8",r,t[0].length+s-2);i--,s=t[t.length-2].length+s}for(var a=n.write(t[0].slice(r)),o=1;o<i-1;o++)a+=n.write(t[o]);return a+n.end(t[o].slice(0,s-2))}(this);if(this.bigStrSize=0,this.bufferCache=[],this.buffer=e,this.arrayCache.length&&(this.arrayCache[0][this.arrayPos[0]++]=t,void 0===(t=f(this))))return;this.returnReply(t)}else{this.bufferCache.push(e),this.totalChunkSize+=e.length;return}for(;this.offset<this.buffer.length;){let e=this.offset,t=this.buffer[this.offset++],r=g(this,t);if(void 0===r){this.arrayCache.length||this.bufferCache.length||(this.offset=e);return}45===t?this.returnError(r):this.returnReply(r)}this.buffer=null}}e.exports=v},83499:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let i=r(31657);function n(e){setTimeout(function(){throw e},0)}t.default=function(e,t,r){return"function"==typeof t&&e.then(e=>{let s;(s=void 0!==r&&Object(r).spread&&Array.isArray(e)?i.tryCatch(t).apply(void 0,[null].concat(e)):void 0===e?i.tryCatch(t)(null):i.tryCatch(t)(null,e))===i.errorObj&&n(s.e)},e=>{if(!e){let t=Error(e+"");Object.assign(t,{cause:e}),e=t}let r=i.tryCatch(t)(e);r===i.errorObj&&n(r.e)}),e}},31657:(e,t)=>{"use strict";let r;function i(e,i){try{let e=r;return r=null,e.apply(this,arguments)}catch(e){return t.errorObj.e=e,t.errorObj}}Object.defineProperty(t,"__esModule",{value:!0}),t.tryCatch=t.errorObj=void 0,t.errorObj={e:{}},t.tryCatch=function(e){return r=e,i}},67057:(e,t,r)=>{"use strict";let i;let n=r(22037),s=r(76224),a=r(72616),{env:o}=process;function l(e){return 0!==e&&{level:e,hasBasic:!0,has256:e>=2,has16m:e>=3}}function d(e,t){if(0===i)return 0;if(a("color=16m")||a("color=full")||a("color=truecolor"))return 3;if(a("color=256"))return 2;if(e&&!t&&void 0===i)return 0;let r=i||0;if("dumb"===o.TERM)return r;if("win32"===process.platform){let e=n.release().split(".");return Number(e[0])>=10&&Number(e[2])>=10586?Number(e[2])>=14931?3:2:1}if("CI"in o)return["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","GITHUB_ACTIONS","BUILDKITE"].some(e=>e in o)||"codeship"===o.CI_NAME?1:r;if("TEAMCITY_VERSION"in o)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(o.TEAMCITY_VERSION)?1:0;if("truecolor"===o.COLORTERM)return 3;if("TERM_PROGRAM"in o){let e=parseInt((o.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(o.TERM_PROGRAM){case"iTerm.app":return e>=3?3:2;case"Apple_Terminal":return 2}}return/-256(color)?$/i.test(o.TERM)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(o.TERM)||"COLORTERM"in o?1:r}a("no-color")||a("no-colors")||a("color=false")||a("color=never")?i=0:(a("color")||a("colors")||a("color=true")||a("color=always"))&&(i=1),"FORCE_COLOR"in o&&(i="true"===o.FORCE_COLOR?1:"false"===o.FORCE_COLOR?0:0===o.FORCE_COLOR.length?1:Math.min(parseInt(o.FORCE_COLOR,10),3)),e.exports={supportsColor:function(e){return l(d(e,e&&e.isTTY))},stdout:l(d(!0,s.isatty(1))),stderr:l(d(!0,s.isatty(2)))}},8194:(e,t,r)=>{"use strict";r.d(t,{_:()=>n});let i=require("@prisma/client"),n=globalThis.prisma??new i.PrismaClient({log:["error"]})},51691:(e,t,r)=>{"use strict";r.d(t,{dt:()=>d,sd:()=>p});var i=r(83485),n=r(62197),s=r.n(n);let a=process.env.REDIS_HOST||"127.0.0.1",o=Number(process.env.REDIS_PORT)||6379,l=process.env.REDIS_PASSWORD||"",d={host:a,port:o,password:l||void 0,maxRetriesPerRequest:null},c=null,u=null;try{(c=new(s())({host:a,port:o,password:l||void 0,maxRetriesPerRequest:null,lazyConnect:!0})).connect().catch(e=>{console.warn("⚠️ Redis Connection failed. BullMQ will run in fallback mock mode.",e.message)}),(u=new i.ci("video-generation",{connection:c})).on("error",e=>{console.warn("⚠️ BullMQ Queue encountered a Redis connection error:",e.message)}),console.log("\uD83D\uDE80 BullMQ Video Queue initialized successfully.")}catch(e){console.warn("⚠️ Failed to initialize Redis connection. BullMQ is disabled.",e)}async function p(e,t){if(!u||c?.status!=="ready")return console.log(`[QUEUE FALLBACK] Redis offline. Running in-process background task for Video ID: ${e}`,t),"true"===process.env.USE_MOCK_AI?r.e(329).then(r.bind(r,61329)).then(({runMockPipeline:t})=>{t(e).catch(t=>console.error(`Error in mock background pipeline for ${e}:`,t))}):r.e(329).then(r.bind(r,61329)).then(({runProductionPipeline:r})=>{r(e,{topic:t.topic||"Default Topic",niche:t.niche,style:t.style,tone:t.tone,duration:t.duration,language:t.language,voice:t.voice}).catch(t=>console.error(`Error in live production background pipeline for ${e}:`,t))}),{id:`fallback-job-${e}`,name:`fallback-render-${e}`,queued:!1};{let r=await u.add(`render-${e}`,{videoId:e,...t},{attempts:3,backoff:{type:"exponential",delay:5e3}});return{id:r.id,name:r.name,queued:!0}}}},31650:(e,t,r)=>{"use strict";function i(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,i=Object.getOwnPropertySymbols(e);n<i.length;n++)0>t.indexOf(i[n])&&Object.prototype.propertyIsEnumerable.call(e,i[n])&&(r[i[n]]=e[i[n]]);return r}function n(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],i=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(e),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(r){t[r]=e[r]&&function(t){return new Promise(function(i,n){(function(e,t,r,i){Promise.resolve(i).then(function(t){e({value:t,done:r})},t)})(i,n,(t=e[r](t)).done,t.value)})}}}r.d(t,{KL:()=>n,_T:()=>i}),Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError},18262:e=>{"use strict";e.exports=JSON.parse('{"vadd":{"arity":-5,"flags":["write","denyoom","module"],"keyStart":1,"keyStop":1,"step":1},"vcard":{"arity":2,"flags":["readonly","module","fast"],"keyStart":1,"keyStop":1,"step":1},"vdim":{"arity":2,"flags":["readonly","module","fast"],"keyStart":1,"keyStop":1,"step":1},"vemb":{"arity":-3,"flags":["readonly","module","fast"],"keyStart":1,"keyStop":1,"step":1},"vgetattr":{"arity":3,"flags":["readonly","module","fast"],"keyStart":1,"keyStop":1,"step":1},"vinfo":{"arity":2,"flags":["readonly","module","fast"],"keyStart":1,"keyStop":1,"step":1},"vismember":{"arity":3,"flags":["readonly","module"],"keyStart":1,"keyStop":1,"step":1},"vlinks":{"arity":-3,"flags":["readonly","module","fast"],"keyStart":1,"keyStop":1,"step":1},"vrandmember":{"arity":-2,"flags":["readonly","module"],"keyStart":1,"keyStop":1,"step":1},"vrange":{"arity":-4,"flags":["readonly","module"],"keyStart":1,"keyStop":1,"step":1},"vrem":{"arity":3,"flags":["write","module"],"keyStart":1,"keyStop":1,"step":1},"vsetattr":{"arity":4,"flags":["write","module","fast"],"keyStart":1,"keyStop":1,"step":1},"vsim":{"arity":-4,"flags":["readonly","module"],"keyStart":1,"keyStop":1,"step":1},"acl":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"append":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"arcount":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"ardel":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"ardelrange":{"arity":-4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"arget":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"argetrange":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"argrep":{"arity":-6,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"arinfo":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"arinsert":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"arlastitems":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"arlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"armget":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"armset":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"arnext":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"arop":{"arity":-5,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"arring":{"arity":-4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"arscan":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"arseek":{"arity":3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"arset":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"asking":{"arity":1,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"auth":{"arity":-2,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"bgrewriteaof":{"arity":1,"flags":["admin","noscript","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"bgsave":{"arity":-1,"flags":["admin","noscript","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"bitcount":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"bitfield":{"arity":-2,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"bitfield_ro":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"bitop":{"arity":-4,"flags":["write","denyoom"],"keyStart":2,"keyStop":-1,"step":1},"bitpos":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"blmove":{"arity":6,"flags":["write","denyoom","noscript","blocking"],"keyStart":1,"keyStop":2,"step":1},"blmpop":{"arity":-5,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"blpop":{"arity":-3,"flags":["write","noscript","blocking"],"keyStart":1,"keyStop":-2,"step":1},"brpop":{"arity":-3,"flags":["write","noscript","blocking"],"keyStart":1,"keyStop":-2,"step":1},"brpoplpush":{"arity":4,"flags":["write","denyoom","noscript","blocking"],"keyStart":1,"keyStop":2,"step":1},"bzmpop":{"arity":-5,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"bzpopmax":{"arity":-3,"flags":["write","noscript","blocking","fast"],"keyStart":1,"keyStop":-2,"step":1},"bzpopmin":{"arity":-3,"flags":["write","noscript","blocking","fast"],"keyStart":1,"keyStop":-2,"step":1},"client":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"cluster":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"command":{"arity":-1,"flags":["loading","stale"],"keyStart":0,"keyStop":0,"step":0},"config":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"copy":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"dbsize":{"arity":1,"flags":["readonly","fast"],"keyStart":0,"keyStop":0,"step":0},"debug":{"arity":-2,"flags":["admin","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"decr":{"arity":2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"decrby":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"del":{"arity":-2,"flags":["write"],"keyStart":1,"keyStop":-1,"step":1},"discard":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"dump":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"echo":{"arity":2,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"eval":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"eval_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"evalsha":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"evalsha_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"exec":{"arity":1,"flags":["noscript","loading","stale","skip_slowlog"],"keyStart":0,"keyStop":0,"step":0},"exists":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"expire":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"expireat":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"expiretime":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"failover":{"arity":-1,"flags":["admin","noscript","stale"],"keyStart":0,"keyStop":0,"step":0},"fcall":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"fcall_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"flushall":{"arity":-1,"flags":["write"],"keyStart":0,"keyStop":0,"step":0},"flushdb":{"arity":-1,"flags":["write"],"keyStart":0,"keyStop":0,"step":0},"function":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"geoadd":{"arity":-5,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"geodist":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geohash":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geopos":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"georadius":{"arity":-6,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"georadius_ro":{"arity":-6,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"georadiusbymember":{"arity":-5,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"georadiusbymember_ro":{"arity":-5,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geosearch":{"arity":-7,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geosearchstore":{"arity":-8,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"get":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"getbit":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"getdel":{"arity":2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"getex":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"getrange":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"getset":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hdel":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hello":{"arity":-1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"hexists":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hexpire":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hexpireat":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hexpiretime":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hget":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hgetall":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hgetdel":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hgetex":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hincrby":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hincrbyfloat":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hkeys":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hmget":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hmset":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hpersist":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hpexpire":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hpexpireat":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hpexpiretime":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hpttl":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hrandfield":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hset":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hsetex":{"arity":-6,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hsetnx":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hstrlen":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"httl":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hvals":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"incr":{"arity":2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"incrby":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"incrbyfloat":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"increx":{"arity":-2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"info":{"arity":-1,"flags":["loading","stale"],"keyStart":0,"keyStop":0,"step":0},"keys":{"arity":2,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"lastsave":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"latency":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"lcs":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":2,"step":1},"lindex":{"arity":3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"linsert":{"arity":5,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"llen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"lmove":{"arity":5,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"lmpop":{"arity":-4,"flags":["write","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"lolwut":{"arity":-1,"flags":["readonly","fast"],"keyStart":0,"keyStop":0,"step":0},"lpop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"lpos":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"lpush":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"lpushx":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"lrange":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"lrem":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"lset":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"ltrim":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"memory":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"mget":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"migrate":{"arity":-6,"flags":["write","movablekeys"],"keyStart":3,"keyStop":3,"step":1},"module":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"monitor":{"arity":1,"flags":["admin","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"move":{"arity":3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"mset":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":2},"msetex":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"msetnx":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":2},"multi":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"object":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"persist":{"arity":2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpire":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpireat":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpiretime":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"pfadd":{"arity":-2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"pfcount":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"pfdebug":{"arity":3,"flags":["write","denyoom","admin"],"keyStart":2,"keyStop":2,"step":1},"pfmerge":{"arity":-2,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"pfselftest":{"arity":1,"flags":["admin"],"keyStart":0,"keyStop":0,"step":0},"ping":{"arity":-1,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"psetex":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"psubscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"psync":{"arity":-3,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"pttl":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"publish":{"arity":3,"flags":["pubsub","loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"pubsub":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"punsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"quit":{"arity":-1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"randomkey":{"arity":1,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"readonly":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"readwrite":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"rename":{"arity":3,"flags":["write"],"keyStart":1,"keyStop":2,"step":1},"renamenx":{"arity":3,"flags":["write","fast"],"keyStart":1,"keyStop":2,"step":1},"replconf":{"arity":-1,"flags":["admin","noscript","loading","stale","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"replicaof":{"arity":3,"flags":["admin","noscript","stale","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"reset":{"arity":1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"restore":{"arity":-4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"restore-asking":{"arity":-4,"flags":["write","denyoom","asking"],"keyStart":1,"keyStop":1,"step":1},"role":{"arity":1,"flags":["noscript","loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"rpop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"rpoplpush":{"arity":3,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"rpush":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"rpushx":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"sadd":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"save":{"arity":1,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"scan":{"arity":-2,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"scard":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"script":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"sdiff":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sdiffstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"select":{"arity":2,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"set":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setbit":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setex":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setnx":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"setrange":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"shutdown":{"arity":-1,"flags":["admin","noscript","loading","stale","no_multi","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"sinter":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sintercard":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"sinterstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"sismember":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"slaveof":{"arity":3,"flags":["admin","noscript","stale","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"slowlog":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"smembers":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"smismember":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"smove":{"arity":4,"flags":["write","fast"],"keyStart":1,"keyStop":2,"step":1},"sort":{"arity":-2,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"sort_ro":{"arity":-2,"flags":["readonly","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"spop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"spublish":{"arity":3,"flags":["pubsub","loading","stale","fast"],"keyStart":1,"keyStop":1,"step":1},"srandmember":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"srem":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"sscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"ssubscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":1,"keyStop":-1,"step":1},"strlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"subscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"substr":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"sunion":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sunionstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"sunsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":1,"keyStop":-1,"step":1},"swapdb":{"arity":3,"flags":["write","fast"],"keyStart":0,"keyStop":0,"step":0},"sync":{"arity":1,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"time":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"touch":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"ttl":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"type":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"unlink":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":-1,"step":1},"unsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"unwatch":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"wait":{"arity":3,"flags":["noscript"],"keyStart":0,"keyStop":0,"step":0},"watch":{"arity":-2,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":1,"keyStop":-1,"step":1},"xack":{"arity":-4,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xadd":{"arity":-5,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"xautoclaim":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xclaim":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xdel":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xdelex":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xgroup":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"xinfo":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"xlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"xnack":{"arity":-7,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xpending":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xread":{"arity":-4,"flags":["readonly","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"xreadgroup":{"arity":-7,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"xrevrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xsetid":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"xtrim":{"arity":-4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zadd":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"zcard":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zcount":{"arity":4,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zdiff":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zdiffstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"zincrby":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"zinter":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zintercard":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zinterstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"zlexcount":{"arity":4,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zmpop":{"arity":-4,"flags":["write","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zmscore":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zpopmax":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zpopmin":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zrandmember":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangebylex":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangebyscore":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangestore":{"arity":-5,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"zrank":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zrem":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zremrangebylex":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zremrangebyrank":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zremrangebyscore":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zrevrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrangebylex":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrangebyscore":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrank":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zscore":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zunion":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zunionstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1}}')},24132:e=>{"use strict";e.exports=JSON.parse('{"acl":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"append":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"asking":{"arity":1,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"auth":{"arity":-2,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"bgrewriteaof":{"arity":1,"flags":["admin","noscript","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"bgsave":{"arity":-1,"flags":["admin","noscript","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"bitcount":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"bitfield":{"arity":-2,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"bitfield_ro":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"bitop":{"arity":-4,"flags":["write","denyoom"],"keyStart":2,"keyStop":-1,"step":1},"bitpos":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"blmove":{"arity":6,"flags":["write","denyoom","noscript","blocking"],"keyStart":1,"keyStop":2,"step":1},"blmpop":{"arity":-5,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"blpop":{"arity":-3,"flags":["write","noscript","blocking"],"keyStart":1,"keyStop":-2,"step":1},"brpop":{"arity":-3,"flags":["write","noscript","blocking"],"keyStart":1,"keyStop":-2,"step":1},"brpoplpush":{"arity":4,"flags":["write","denyoom","noscript","blocking"],"keyStart":1,"keyStop":2,"step":1},"bzmpop":{"arity":-5,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"bzpopmax":{"arity":-3,"flags":["write","noscript","blocking","fast"],"keyStart":1,"keyStop":-2,"step":1},"bzpopmin":{"arity":-3,"flags":["write","noscript","blocking","fast"],"keyStart":1,"keyStop":-2,"step":1},"client":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"cluster":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"command":{"arity":-1,"flags":["loading","stale"],"keyStart":0,"keyStop":0,"step":0},"config":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"copy":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"dbsize":{"arity":1,"flags":["readonly","fast"],"keyStart":0,"keyStop":0,"step":0},"debug":{"arity":-2,"flags":["admin","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"decr":{"arity":2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"decrby":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"del":{"arity":-2,"flags":["write"],"keyStart":1,"keyStop":-1,"step":1},"discard":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"dump":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"echo":{"arity":2,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"eval":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"eval_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"evalsha":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"evalsha_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"exec":{"arity":1,"flags":["noscript","loading","stale","skip_slowlog"],"keyStart":0,"keyStop":0,"step":0},"exists":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"expire":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"expireat":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"expiretime":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"failover":{"arity":-1,"flags":["admin","noscript","stale"],"keyStart":0,"keyStop":0,"step":0},"fcall":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"fcall_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"flushall":{"arity":-1,"flags":["write"],"keyStart":0,"keyStop":0,"step":0},"flushdb":{"arity":-1,"flags":["write"],"keyStart":0,"keyStop":0,"step":0},"function":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"geoadd":{"arity":-5,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"geodist":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geohash":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geopos":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"georadius":{"arity":-6,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"georadius_ro":{"arity":-6,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"georadiusbymember":{"arity":-5,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"georadiusbymember_ro":{"arity":-5,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geosearch":{"arity":-7,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geosearchstore":{"arity":-8,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"get":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"getbit":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"getdel":{"arity":2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"getex":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"getrange":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"getset":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hdel":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hello":{"arity":-1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"hexists":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hexpire":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hexpireat":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hexpiretime":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hget":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hgetall":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hgetdel":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hgetex":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hincrby":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hincrbyfloat":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hkeys":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hmget":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hmset":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hpersist":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hpexpire":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hpexpireat":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hpexpiretime":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hpttl":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hrandfield":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hset":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hsetex":{"arity":-6,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hsetnx":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hstrlen":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"httl":{"arity":-5,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hvals":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"incr":{"arity":2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"incrby":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"incrbyfloat":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"info":{"arity":-1,"flags":["loading","stale"],"keyStart":0,"keyStop":0,"step":0},"keys":{"arity":2,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"lastsave":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"latency":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"lcs":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":2,"step":1},"lindex":{"arity":3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"linsert":{"arity":5,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"llen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"lmove":{"arity":5,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"lmpop":{"arity":-4,"flags":["write","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"lolwut":{"arity":-1,"flags":["readonly","fast"],"keyStart":0,"keyStop":0,"step":0},"lpop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"lpos":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"lpush":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"lpushx":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"lrange":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"lrem":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"lset":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"ltrim":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"memory":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"mget":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"migrate":{"arity":-6,"flags":["write","movablekeys"],"keyStart":3,"keyStop":3,"step":1},"module":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"monitor":{"arity":1,"flags":["admin","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"move":{"arity":3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"mset":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":2},"msetnx":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":2},"multi":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"object":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"persist":{"arity":2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpire":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpireat":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpiretime":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"pfadd":{"arity":-2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"pfcount":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"pfdebug":{"arity":3,"flags":["write","denyoom","admin"],"keyStart":2,"keyStop":2,"step":1},"pfmerge":{"arity":-2,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"pfselftest":{"arity":1,"flags":["admin"],"keyStart":0,"keyStop":0,"step":0},"ping":{"arity":-1,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"psetex":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"psubscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"psync":{"arity":-3,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"pttl":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"publish":{"arity":3,"flags":["pubsub","loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"pubsub":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"punsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"quit":{"arity":-1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"randomkey":{"arity":1,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"readonly":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"readwrite":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"rename":{"arity":3,"flags":["write"],"keyStart":1,"keyStop":2,"step":1},"renamenx":{"arity":3,"flags":["write","fast"],"keyStart":1,"keyStop":2,"step":1},"replconf":{"arity":-1,"flags":["admin","noscript","loading","stale","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"replicaof":{"arity":3,"flags":["admin","noscript","stale","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"reset":{"arity":1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"restore":{"arity":-4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"restore-asking":{"arity":-4,"flags":["write","denyoom","asking"],"keyStart":1,"keyStop":1,"step":1},"role":{"arity":1,"flags":["noscript","loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"rpop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"rpoplpush":{"arity":3,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"rpush":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"rpushx":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"sadd":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"save":{"arity":1,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"scan":{"arity":-2,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"scard":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"script":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"sdiff":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sdiffstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"select":{"arity":2,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"set":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setbit":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setex":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setnx":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"setrange":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"shutdown":{"arity":-1,"flags":["admin","noscript","loading","stale","no_multi","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"sinter":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sintercard":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"sinterstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"sismember":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"slaveof":{"arity":3,"flags":["admin","noscript","stale","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"slowlog":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"smembers":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"smismember":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"smove":{"arity":4,"flags":["write","fast"],"keyStart":1,"keyStop":2,"step":1},"sort":{"arity":-2,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"sort_ro":{"arity":-2,"flags":["readonly","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"spop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"spublish":{"arity":3,"flags":["pubsub","loading","stale","fast"],"keyStart":1,"keyStop":1,"step":1},"srandmember":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"srem":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"sscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"ssubscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":1,"keyStop":-1,"step":1},"strlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"subscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"substr":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"sunion":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sunionstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"sunsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":1,"keyStop":-1,"step":1},"swapdb":{"arity":3,"flags":["write","fast"],"keyStart":0,"keyStop":0,"step":0},"sync":{"arity":1,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"time":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"touch":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"ttl":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"type":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"unlink":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":-1,"step":1},"unsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"unwatch":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"wait":{"arity":3,"flags":["noscript"],"keyStart":0,"keyStop":0,"step":0},"watch":{"arity":-2,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":1,"keyStop":-1,"step":1},"xack":{"arity":-4,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xadd":{"arity":-5,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"xautoclaim":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xclaim":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xdel":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xdelex":{"arity":-5,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xgroup":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"xinfo":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"xlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"xpending":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xread":{"arity":-4,"flags":["readonly","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"xreadgroup":{"arity":-7,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"xrevrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xsetid":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"xtrim":{"arity":-4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zadd":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"zcard":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zcount":{"arity":4,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zdiff":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zdiffstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"zincrby":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"zinter":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zintercard":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zinterstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"zlexcount":{"arity":4,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zmpop":{"arity":-4,"flags":["write","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zmscore":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zpopmax":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zpopmin":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zrandmember":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangebylex":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangebyscore":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangestore":{"arity":-5,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"zrank":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zrem":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zremrangebylex":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zremrangebyrank":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zremrangebyscore":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zrevrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrangebylex":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrangebyscore":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrank":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zscore":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zunion":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zunionstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1}}')}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[510,202],()=>r(18131));module.exports=i})();