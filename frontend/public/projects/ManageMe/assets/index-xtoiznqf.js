(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var Oo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},lu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],l=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,l=a?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,p=o>>2,w=(o&3)<<4|l>>4;let I=(l&15)<<2|f>>6,S=f&63;h||(S=64,a||(I=64)),r.push(e[p],e[w],e[I],e[S])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ja(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):lu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],l=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||l==null||f==null||w==null)throw new uu;const I=o<<2|l>>4;if(r.push(I),f!==64){const S=l<<4&240|f>>2;if(r.push(S),w!==64){const C=f<<6&192|w;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class uu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hu=function(n){const t=ja(n);return Ba.encodeByteArray(t,!0)},fr=function(n){return hu(n).replace(/\./g,"")},du=function(n){try{return Ba.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=()=>fu().__FIREBASE_DEFAULTS__,mu=()=>{if(typeof process>"u"||typeof Oo>"u")return;const n=Oo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},gu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&du(n[1]);return t&&JSON.parse(t)},Ys=()=>{try{return pu()||mu()||gu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yu=n=>{var t,e;return(e=(t=Ys())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},_u=n=>{const t=yu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ua=()=>{var n;return(n=Ys())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[fr(JSON.stringify(e)),fr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Iu(){var n;const t=(n=Ys())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wu(){return!Iu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Au(){try{return typeof indexedDB=="object"}catch{return!1}}function bu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="FirebaseError";class Fe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Su,Object.setPrototypeOf(this,Fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Ru(o,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Fe(s,l,r)}}function Ru(n,t){return n.replace(Pu,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Pu=/\{\$([^}]+)}/g;function ws(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Lo(o)&&Lo(a)){if(!ws(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Lo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n){return n&&n._delegate?n._delegate:n}class En{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new vu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Vu(t))try{this.getOrInitializeService({instanceIdentifier:ae})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ae){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ae){return this.instances.has(t)}getOptions(t=ae){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ae){return this.component?this.component.multipleInstances?t:ae:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cu(n){return n===ae?void 0:n}function Vu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Du(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const Nu={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},xu=U.INFO,Ou={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Lu=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Ou[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qa{constructor(t){this.name=t,this._logLevel=xu,this._logHandler=Lu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Nu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Mu=(n,t)=>t.some(e=>n instanceof e);let Mo,Fo;function Fu(){return Mo||(Mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ju(){return Fo||(Fo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const za=new WeakMap,As=new WeakMap,Ga=new WeakMap,fs=new WeakMap,Xs=new WeakMap;function Bu(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(Yt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&za.set(e,n)}).catch(()=>{}),Xs.set(t,n),t}function Uu(n){if(As.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});As.set(n,t)}let bs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return As.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ga.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Yt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function $u(n){bs=n(bs)}function qu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(ps(this),t,...e);return Ga.set(r,t.sort?t.sort():[t]),Yt(r)}:ju().includes(n)?function(...t){return n.apply(ps(this),t),Yt(za.get(this))}:function(...t){return Yt(n.apply(ps(this),t))}}function zu(n){return typeof n=="function"?qu(n):(n instanceof IDBTransaction&&Uu(n),Mu(n,Fu())?new Proxy(n,bs):n)}function Yt(n){if(n instanceof IDBRequest)return Bu(n);if(fs.has(n))return fs.get(n);const t=zu(n);return t!==n&&(fs.set(n,t),Xs.set(t,n)),t}const ps=n=>Xs.get(n);function Gu(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),l=Yt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Yt(a.result),h.oldVersion,h.newVersion,Yt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),l.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Hu=["get","getKey","getAll","getAllKeys","count"],Ku=["put","add","delete","clear"],ms=new Map;function jo(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ms.get(t))return ms.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Ku.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hu.includes(e)))return;const o=async function(a,...l){const h=this.transaction(a,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),s&&h.done]))[0]};return ms.set(t,o),o}$u(n=>({...n,get:(t,e,r)=>jo(t,e)||n.get(t,e,r),has:(t,e)=>!!jo(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Qu(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Qu(n){const t=n.getComponent();return t?.type==="VERSION"}const Ss="@firebase/app",Bo="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new qa("@firebase/app"),Yu="@firebase/app-compat",Xu="@firebase/analytics-compat",Ju="@firebase/analytics",Zu="@firebase/app-check-compat",th="@firebase/app-check",eh="@firebase/auth",nh="@firebase/auth-compat",rh="@firebase/database",sh="@firebase/database-compat",ih="@firebase/functions",oh="@firebase/functions-compat",ah="@firebase/installations",ch="@firebase/installations-compat",lh="@firebase/messaging",uh="@firebase/messaging-compat",hh="@firebase/performance",dh="@firebase/performance-compat",fh="@firebase/remote-config",ph="@firebase/remote-config-compat",mh="@firebase/storage",gh="@firebase/storage-compat",yh="@firebase/firestore",_h="@firebase/vertexai-preview",vh="@firebase/firestore-compat",Eh="firebase",Th="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="[DEFAULT]",Ih={[Ss]:"fire-core",[Yu]:"fire-core-compat",[Ju]:"fire-analytics",[Xu]:"fire-analytics-compat",[th]:"fire-app-check",[Zu]:"fire-app-check-compat",[eh]:"fire-auth",[nh]:"fire-auth-compat",[rh]:"fire-rtdb",[sh]:"fire-rtdb-compat",[ih]:"fire-fn",[oh]:"fire-fn-compat",[ah]:"fire-iid",[ch]:"fire-iid-compat",[lh]:"fire-fcm",[uh]:"fire-fcm-compat",[hh]:"fire-perf",[dh]:"fire-perf-compat",[fh]:"fire-rc",[ph]:"fire-rc-compat",[mh]:"fire-gcs",[gh]:"fire-gcs-compat",[yh]:"fire-fst",[vh]:"fire-fst-compat",[_h]:"fire-vertex","fire-js":"fire-js",[Eh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new Map,wh=new Map,Ps=new Map;function Uo(n,t){try{n.container.addComponent(t)}catch(e){he.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function mr(n){const t=n.name;if(Ps.has(t))return he.debug(`There were multiple attempts to register component ${t}.`),!1;Ps.set(t,n);for(const e of pr.values())Uo(e,n);for(const e of wh.values())Uo(e,n);return!0}function Ah(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new $a("app","Firebase",bh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new En("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh=Th;function Ha(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Rs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Xt.create("bad-app-name",{appName:String(s)});if(e||(e=Ua()),!e)throw Xt.create("no-options");const o=pr.get(s);if(o){if(ws(e,o.options)&&ws(r,o.config))return o;throw Xt.create("duplicate-app",{appName:s})}const a=new ku(s);for(const h of Ps.values())a.addComponent(h);const l=new Sh(e,r,a);return pr.set(s,l),l}function Ph(n=Rs){const t=pr.get(n);if(!t&&n===Rs&&Ua())return Ha();if(!t)throw Xt.create("no-app",{appName:n});return t}function Pe(n,t,e){var r;let s=(r=Ih[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),he.warn(l.join(" "));return}mr(new En(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="firebase-heartbeat-database",Ch=1,Tn="firebase-heartbeat-store";let gs=null;function Ka(){return gs||(gs=Gu(Dh,Ch,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Tn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Xt.create("idb-open",{originalErrorMessage:n.message})})),gs}async function Vh(n){try{const e=(await Ka()).transaction(Tn),r=await e.objectStore(Tn).get(Wa(n));return await e.done,r}catch(t){if(t instanceof Fe)he.warn(t.message);else{const e=Xt.create("idb-get",{originalErrorMessage:t?.message});he.warn(e.message)}}}async function $o(n,t){try{const r=(await Ka()).transaction(Tn,"readwrite");await r.objectStore(Tn).put(t,Wa(n)),await r.done}catch(e){if(e instanceof Fe)he.warn(e.message);else{const r=Xt.create("idb-set",{originalErrorMessage:e?.message});he.warn(r.message)}}}function Wa(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=1024,Nh=30*24*60*60*1e3;class xh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Lh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=qo();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Nh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qo(),{heartbeatsToSend:r,unsentEntries:s}=Oh(this._heartbeatsCache.heartbeats),o=fr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function qo(){return new Date().toISOString().substring(0,10)}function Oh(n,t=kh){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),zo(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),zo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Lh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Au()?bu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Vh(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return $o(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return $o(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function zo(n){return fr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(n){mr(new En("platform-logger",t=>new Wu(t),"PRIVATE")),mr(new En("heartbeat",t=>new xh(t),"PRIVATE")),Pe(Ss,Bo,n),Pe(Ss,Bo,"esm2017"),Pe("fire-js","")}Mh("");var Go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ue,Qa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function y(){}y.prototype=m.prototype,E.D=m.prototype,E.prototype=new y,E.prototype.constructor=E,E.C=function(_,v,A){for(var g=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)g[Lt-2]=arguments[Lt];return m.prototype[v].apply(_,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,y){y||(y=0);var _=Array(16);if(typeof m=="string")for(var v=0;16>v;++v)_[v]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(v=0;16>v;++v)_[v]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=E.g[0],y=E.g[1],v=E.g[2];var A=E.g[3],g=m+(A^y&(v^A))+_[0]+3614090360&4294967295;m=y+(g<<7&4294967295|g>>>25),g=A+(v^m&(y^v))+_[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=v+(y^A&(m^y))+_[2]+606105819&4294967295,v=A+(g<<17&4294967295|g>>>15),g=y+(m^v&(A^m))+_[3]+3250441966&4294967295,y=v+(g<<22&4294967295|g>>>10),g=m+(A^y&(v^A))+_[4]+4118548399&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(v^m&(y^v))+_[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=v+(y^A&(m^y))+_[6]+2821735955&4294967295,v=A+(g<<17&4294967295|g>>>15),g=y+(m^v&(A^m))+_[7]+4249261313&4294967295,y=v+(g<<22&4294967295|g>>>10),g=m+(A^y&(v^A))+_[8]+1770035416&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(v^m&(y^v))+_[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=v+(y^A&(m^y))+_[10]+4294925233&4294967295,v=A+(g<<17&4294967295|g>>>15),g=y+(m^v&(A^m))+_[11]+2304563134&4294967295,y=v+(g<<22&4294967295|g>>>10),g=m+(A^y&(v^A))+_[12]+1804603682&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(v^m&(y^v))+_[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=v+(y^A&(m^y))+_[14]+2792965006&4294967295,v=A+(g<<17&4294967295|g>>>15),g=y+(m^v&(A^m))+_[15]+1236535329&4294967295,y=v+(g<<22&4294967295|g>>>10),g=m+(v^A&(y^v))+_[1]+4129170786&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^v&(m^y))+_[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=v+(m^y&(A^m))+_[11]+643717713&4294967295,v=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(v^A))+_[0]+3921069994&4294967295,y=v+(g<<20&4294967295|g>>>12),g=m+(v^A&(y^v))+_[5]+3593408605&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^v&(m^y))+_[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=v+(m^y&(A^m))+_[15]+3634488961&4294967295,v=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(v^A))+_[4]+3889429448&4294967295,y=v+(g<<20&4294967295|g>>>12),g=m+(v^A&(y^v))+_[9]+568446438&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^v&(m^y))+_[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=v+(m^y&(A^m))+_[3]+4107603335&4294967295,v=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(v^A))+_[8]+1163531501&4294967295,y=v+(g<<20&4294967295|g>>>12),g=m+(v^A&(y^v))+_[13]+2850285829&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^v&(m^y))+_[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=v+(m^y&(A^m))+_[7]+1735328473&4294967295,v=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(v^A))+_[12]+2368359562&4294967295,y=v+(g<<20&4294967295|g>>>12),g=m+(y^v^A)+_[5]+4294588738&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^v)+_[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=v+(A^m^y)+_[11]+1839030562&4294967295,v=A+(g<<16&4294967295|g>>>16),g=y+(v^A^m)+_[14]+4259657740&4294967295,y=v+(g<<23&4294967295|g>>>9),g=m+(y^v^A)+_[1]+2763975236&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^v)+_[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=v+(A^m^y)+_[7]+4139469664&4294967295,v=A+(g<<16&4294967295|g>>>16),g=y+(v^A^m)+_[10]+3200236656&4294967295,y=v+(g<<23&4294967295|g>>>9),g=m+(y^v^A)+_[13]+681279174&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^v)+_[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=v+(A^m^y)+_[3]+3572445317&4294967295,v=A+(g<<16&4294967295|g>>>16),g=y+(v^A^m)+_[6]+76029189&4294967295,y=v+(g<<23&4294967295|g>>>9),g=m+(y^v^A)+_[9]+3654602809&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^v)+_[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=v+(A^m^y)+_[15]+530742520&4294967295,v=A+(g<<16&4294967295|g>>>16),g=y+(v^A^m)+_[2]+3299628645&4294967295,y=v+(g<<23&4294967295|g>>>9),g=m+(v^(y|~A))+_[0]+4096336452&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~v))+_[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=v+(m^(A|~y))+_[14]+2878612391&4294967295,v=A+(g<<15&4294967295|g>>>17),g=y+(A^(v|~m))+_[5]+4237533241&4294967295,y=v+(g<<21&4294967295|g>>>11),g=m+(v^(y|~A))+_[12]+1700485571&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~v))+_[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=v+(m^(A|~y))+_[10]+4293915773&4294967295,v=A+(g<<15&4294967295|g>>>17),g=y+(A^(v|~m))+_[1]+2240044497&4294967295,y=v+(g<<21&4294967295|g>>>11),g=m+(v^(y|~A))+_[8]+1873313359&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~v))+_[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=v+(m^(A|~y))+_[6]+2734768916&4294967295,v=A+(g<<15&4294967295|g>>>17),g=y+(A^(v|~m))+_[13]+1309151649&4294967295,y=v+(g<<21&4294967295|g>>>11),g=m+(v^(y|~A))+_[4]+4149444226&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~v))+_[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=v+(m^(A|~y))+_[2]+718787259&4294967295,v=A+(g<<15&4294967295|g>>>17),g=y+(A^(v|~m))+_[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(v+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var y=m-this.blockSize,_=this.B,v=this.h,A=0;A<m;){if(v==0)for(;A<=y;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<m;)if(_[v++]=E.charCodeAt(A++),v==this.blockSize){s(this,_),v=0;break}}else for(;A<m;)if(_[v++]=E[A++],v==this.blockSize){s(this,_),v=0;break}}this.h=v,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var y=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=y&255,y/=256;for(this.u(E),E=Array(16),m=y=0;4>m;++m)for(var _=0;32>_;_+=8)E[y++]=this.g[m]>>>_&255;return E};function o(E,m){var y=l;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=m(E)}function a(E,m){this.h=m;for(var y=[],_=!0,v=E.length-1;0<=v;v--){var A=E[v]|0;_&&A==m||(y[v]=A,_=!1)}this.g=y}var l={};function h(E){return-128<=E&&128>E?o(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function f(E){if(isNaN(E)||!isFinite(E))return w;if(0>E)return V(f(-E));for(var m=[],y=1,_=0;E>=y;_++)m[_]=E/y|0,y*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return V(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=f(Math.pow(m,8)),_=w,v=0;v<E.length;v+=8){var A=Math.min(8,E.length-v),g=parseInt(E.substring(v,v+A),m);8>A?(A=f(Math.pow(m,A)),_=_.j(A).add(f(g))):(_=_.j(y),_=_.add(f(g)))}return _}var w=h(0),I=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(k(this))return-V(this).m();for(var E=0,m=1,y=0;y<this.g.length;y++){var _=this.i(y);E+=(0<=_?_:4294967296+_)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(C(this))return"0";if(k(this))return"-"+V(this).toString(E);for(var m=f(Math.pow(E,6)),y=this,_="";;){var v=Z(y,m).g;y=G(y,v.j(m));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(E);if(y=v,C(y))return A+_;for(;6>A.length;)A="0"+A;_=A+_}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function C(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function k(E){return E.h==-1}n.l=function(E){return E=G(this,E),k(E)?-1:C(E)?0:1};function V(E){for(var m=E.g.length,y=[],_=0;_<m;_++)y[_]=~E.g[_];return new a(y,~E.h).add(I)}n.abs=function(){return k(this)?V(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],_=0,v=0;v<=m;v++){var A=_+(this.i(v)&65535)+(E.i(v)&65535),g=(A>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);_=g>>>16,A&=65535,g&=65535,y[v]=g<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function G(E,m){return E.add(V(m))}n.j=function(E){if(C(this)||C(E))return w;if(k(this))return k(E)?V(this).j(V(E)):V(V(this).j(E));if(k(E))return V(this.j(V(E)));if(0>this.l(S)&&0>E.l(S))return f(this.m()*E.m());for(var m=this.g.length+E.g.length,y=[],_=0;_<2*m;_++)y[_]=0;for(_=0;_<this.g.length;_++)for(var v=0;v<E.g.length;v++){var A=this.i(_)>>>16,g=this.i(_)&65535,Lt=E.i(v)>>>16,ze=E.i(v)&65535;y[2*_+2*v]+=g*ze,$(y,2*_+2*v),y[2*_+2*v+1]+=A*ze,$(y,2*_+2*v+1),y[2*_+2*v+1]+=g*Lt,$(y,2*_+2*v+1),y[2*_+2*v+2]+=A*Lt,$(y,2*_+2*v+2)}for(_=0;_<m;_++)y[_]=y[2*_+1]<<16|y[2*_];for(_=m;_<2*m;_++)y[_]=0;return new a(y,0)};function $(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function H(E,m){this.g=E,this.h=m}function Z(E,m){if(C(m))throw Error("division by zero");if(C(E))return new H(w,w);if(k(E))return m=Z(V(E),m),new H(V(m.g),V(m.h));if(k(m))return m=Z(E,V(m)),new H(V(m.g),m.h);if(30<E.g.length){if(k(E)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var y=I,_=m;0>=_.l(E);)y=bt(y),_=bt(_);var v=ot(y,1),A=ot(_,1);for(_=ot(_,2),y=ot(y,2);!C(_);){var g=A.add(_);0>=g.l(E)&&(v=v.add(y),A=g),_=ot(_,1),y=ot(y,1)}return m=G(E,v.j(m)),new H(v,m)}for(v=w;0<=E.l(m);){for(y=Math.max(1,Math.floor(E.m()/m.m())),_=Math.ceil(Math.log(y)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),A=f(y),g=A.j(m);k(g)||0<g.l(E);)y-=_,A=f(y),g=A.j(m);C(A)&&(A=I),v=v.add(A),E=G(E,g)}return new H(v,E)}n.A=function(E){return Z(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],_=0;_<m;_++)y[_]=this.i(_)&E.i(_);return new a(y,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],_=0;_<m;_++)y[_]=this.i(_)|E.i(_);return new a(y,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),y=[],_=0;_<m;_++)y[_]=this.i(_)^E.i(_);return new a(y,this.h^E.h)};function bt(E){for(var m=E.g.length+1,y=[],_=0;_<m;_++)y[_]=E.i(_)<<1|E.i(_-1)>>>31;return new a(y,E.h)}function ot(E,m){var y=m>>5;m%=32;for(var _=E.g.length-y,v=[],A=0;A<_;A++)v[A]=0<m?E.i(A+y)>>>m|E.i(A+y+1)<<32-m:E.i(A+y);return new a(v,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Qa=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=p,ue=a}).apply(typeof Go<"u"?Go:typeof self<"u"?self:typeof window<"u"?window:{});var er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ya,Xa,hn,Ja,or,Ds,Za,tc,ec;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,u){return i==Array.prototype||i==Object.prototype||(i[c]=u.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof er=="object"&&er];for(var c=0;c<i.length;++c){var u=i[c];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var u=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var T=i[d];if(!(T in u))break t;u=u[T]}i=i[i.length-1],d=u[i],c=c(d),c!=d&&c!=null&&t(u,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var u=0,d=!1,T={next:function(){if(!d&&u<i.length){var b=u++;return{value:c(b,i[b]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function h(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function f(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function p(i,c,u){return i.call.apply(i.bind,arguments)}function w(i,c,u){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),i.apply(c,T)}}return function(){return i.apply(c,arguments)}}function I(i,c,u){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:w,I.apply(null,arguments)}function S(i,c){var u=Array.prototype.slice.call(arguments,1);return function(){var d=u.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function C(i,c){function u(){}u.prototype=c.prototype,i.aa=c.prototype,i.prototype=new u,i.prototype.constructor=i,i.Qb=function(d,T,b){for(var D=Array(arguments.length-2),K=2;K<arguments.length;K++)D[K-2]=arguments[K];return c.prototype[T].apply(d,D)}}function k(i){const c=i.length;if(0<c){const u=Array(c);for(let d=0;d<c;d++)u[d]=i[d];return u}return[]}function V(i,c){for(let u=1;u<arguments.length;u++){const d=arguments[u];if(h(d)){const T=i.length||0,b=d.length||0;i.length=T+b;for(let D=0;D<b;D++)i[T+D]=d[D]}else i.push(d)}}class G{constructor(c,u){this.i=c,this.j=u,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function $(i){return/^[\s\xa0]*$/.test(i)}function H(){var i=l.navigator;return i&&(i=i.userAgent)?i:""}function Z(i){return Z[" "](i),i}Z[" "]=function(){};var bt=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function ot(i,c,u){for(const d in i)c.call(u,i[d],d,i)}function E(i,c){for(const u in i)c.call(void 0,i[u],u,i)}function m(i){const c={};for(const u in i)c[u]=i[u];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(i,c){let u,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(u in d)i[u]=d[u];for(let b=0;b<y.length;b++)u=y[b],Object.prototype.hasOwnProperty.call(d,u)&&(i[u]=d[u])}}function v(i){var c=1;i=i.split(":");const u=[];for(;0<c&&i.length;)u.push(i.shift()),c--;return i.length&&u.push(i.join(":")),u}function A(i){l.setTimeout(()=>{throw i},0)}function g(){var i=$r;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class Lt{constructor(){this.h=this.g=null}add(c,u){const d=ze.get();d.set(c,u),this.h?this.h.next=d:this.g=d,this.h=d}}var ze=new G(()=>new Dl,i=>i.reset());class Dl{constructor(){this.next=this.g=this.h=null}set(c,u){this.h=c,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let Ge,He=!1,$r=new Lt,Ni=()=>{const i=l.Promise.resolve(void 0);Ge=()=>{i.then(Cl)}};var Cl=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(u){A(u)}var c=ze;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}He=!1};function Gt(){this.s=this.s,this.C=this.C}Gt.prototype.s=!1,Gt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Gt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var Vl=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const u=()=>{};l.addEventListener("test",u,c),l.removeEventListener("test",u,c)}catch{}return i}();function Ke(i,c){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var u=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(bt){t:{try{Z(c.nodeName);var T=!0;break t}catch{}T=!1}T||(c=null)}}else u=="mouseover"?c=i.fromElement:u=="mouseout"&&(c=i.toElement);this.relatedTarget=c,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:kl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&Ke.aa.h.call(this)}}C(Ke,ht);var kl={2:"touch",3:"pen",4:"mouse"};Ke.prototype.h=function(){Ke.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var We="closure_listenable_"+(1e6*Math.random()|0),Nl=0;function xl(i,c,u,d,T){this.listener=i,this.proxy=null,this.src=c,this.type=u,this.capture=!!d,this.ha=T,this.key=++Nl,this.da=this.fa=!1}function Fn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function jn(i){this.src=i,this.g={},this.h=0}jn.prototype.add=function(i,c,u,d,T){var b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);var D=zr(i,c,d,T);return-1<D?(c=i[D],u||(c.fa=!1)):(c=new xl(c,this.src,b,!!d,T),c.fa=u,i.push(c)),c};function qr(i,c){var u=c.type;if(u in i.g){var d=i.g[u],T=Array.prototype.indexOf.call(d,c,void 0),b;(b=0<=T)&&Array.prototype.splice.call(d,T,1),b&&(Fn(c),i.g[u].length==0&&(delete i.g[u],i.h--))}}function zr(i,c,u,d){for(var T=0;T<i.length;++T){var b=i[T];if(!b.da&&b.listener==c&&b.capture==!!u&&b.ha==d)return T}return-1}var Gr="closure_lm_"+(1e6*Math.random()|0),Hr={};function xi(i,c,u,d,T){if(d&&d.once)return Li(i,c,u,d,T);if(Array.isArray(c)){for(var b=0;b<c.length;b++)xi(i,c[b],u,d,T);return null}return u=Yr(u),i&&i[We]?i.K(c,u,f(d)?!!d.capture:!!d,T):Oi(i,c,u,!1,d,T)}function Oi(i,c,u,d,T,b){if(!c)throw Error("Invalid event type");var D=f(T)?!!T.capture:!!T,K=Wr(i);if(K||(i[Gr]=K=new jn(i)),u=K.add(c,u,d,D,b),u.proxy)return u;if(d=Ol(),u.proxy=d,d.src=i,d.listener=u,i.addEventListener)Vl||(T=D),T===void 0&&(T=!1),i.addEventListener(c.toString(),d,T);else if(i.attachEvent)i.attachEvent(Fi(c.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Ol(){function i(u){return c.call(i.src,i.listener,u)}const c=Ll;return i}function Li(i,c,u,d,T){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Li(i,c[b],u,d,T);return null}return u=Yr(u),i&&i[We]?i.L(c,u,f(d)?!!d.capture:!!d,T):Oi(i,c,u,!0,d,T)}function Mi(i,c,u,d,T){if(Array.isArray(c))for(var b=0;b<c.length;b++)Mi(i,c[b],u,d,T);else d=f(d)?!!d.capture:!!d,u=Yr(u),i&&i[We]?(i=i.i,c=String(c).toString(),c in i.g&&(b=i.g[c],u=zr(b,u,d,T),-1<u&&(Fn(b[u]),Array.prototype.splice.call(b,u,1),b.length==0&&(delete i.g[c],i.h--)))):i&&(i=Wr(i))&&(c=i.g[c.toString()],i=-1,c&&(i=zr(c,u,d,T)),(u=-1<i?c[i]:null)&&Kr(u))}function Kr(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[We])qr(c.i,i);else{var u=i.type,d=i.proxy;c.removeEventListener?c.removeEventListener(u,d,i.capture):c.detachEvent?c.detachEvent(Fi(u),d):c.addListener&&c.removeListener&&c.removeListener(d),(u=Wr(c))?(qr(u,i),u.h==0&&(u.src=null,c[Gr]=null)):Fn(i)}}}function Fi(i){return i in Hr?Hr[i]:Hr[i]="on"+i}function Ll(i,c){if(i.da)i=!0;else{c=new Ke(c,this);var u=i.listener,d=i.ha||i.src;i.fa&&Kr(i),i=u.call(d,c)}return i}function Wr(i){return i=i[Gr],i instanceof jn?i:null}var Qr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yr(i){return typeof i=="function"?i:(i[Qr]||(i[Qr]=function(c){return i.handleEvent(c)}),i[Qr])}function dt(){Gt.call(this),this.i=new jn(this),this.M=this,this.F=null}C(dt,Gt),dt.prototype[We]=!0,dt.prototype.removeEventListener=function(i,c,u,d){Mi(this,i,c,u,d)};function vt(i,c){var u,d=i.F;if(d)for(u=[];d;d=d.F)u.push(d);if(i=i.M,d=c.type||c,typeof c=="string")c=new ht(c,i);else if(c instanceof ht)c.target=c.target||i;else{var T=c;c=new ht(d,i),_(c,T)}if(T=!0,u)for(var b=u.length-1;0<=b;b--){var D=c.g=u[b];T=Bn(D,d,!0,c)&&T}if(D=c.g=i,T=Bn(D,d,!0,c)&&T,T=Bn(D,d,!1,c)&&T,u)for(b=0;b<u.length;b++)D=c.g=u[b],T=Bn(D,d,!1,c)&&T}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var u=i.g[c],d=0;d<u.length;d++)Fn(u[d]);delete i.g[c],i.h--}}this.F=null},dt.prototype.K=function(i,c,u,d){return this.i.add(String(i),c,!1,u,d)},dt.prototype.L=function(i,c,u,d){return this.i.add(String(i),c,!0,u,d)};function Bn(i,c,u,d){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var T=!0,b=0;b<c.length;++b){var D=c[b];if(D&&!D.da&&D.capture==u){var K=D.listener,at=D.ha||D.src;D.fa&&qr(i.i,D),T=K.call(at,d)!==!1&&T}}return T&&!d.defaultPrevented}function ji(i,c,u){if(typeof i=="function")u&&(i=I(i,u));else if(i&&typeof i.handleEvent=="function")i=I(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(i,c||0)}function Bi(i){i.g=ji(()=>{i.g=null,i.i&&(i.i=!1,Bi(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Ml extends Gt{constructor(c,u){super(),this.m=c,this.l=u,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Bi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qe(i){Gt.call(this),this.h=i,this.g={}}C(Qe,Gt);var Ui=[];function $i(i){ot(i.g,function(c,u){this.g.hasOwnProperty(u)&&Kr(c)},i),i.g={}}Qe.prototype.N=function(){Qe.aa.N.call(this),$i(this)},Qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xr=l.JSON.stringify,Fl=l.JSON.parse,jl=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function Jr(){}Jr.prototype.h=null;function qi(i){return i.h||(i.h=i.i())}function zi(){}var Ye={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zr(){ht.call(this,"d")}C(Zr,ht);function ts(){ht.call(this,"c")}C(ts,ht);var re={},Gi=null;function Un(){return Gi=Gi||new dt}re.La="serverreachability";function Hi(i){ht.call(this,re.La,i)}C(Hi,ht);function Xe(i){const c=Un();vt(c,new Hi(c))}re.STAT_EVENT="statevent";function Ki(i,c){ht.call(this,re.STAT_EVENT,i),this.stat=c}C(Ki,ht);function Et(i){const c=Un();vt(c,new Ki(c,i))}re.Ma="timingevent";function Wi(i,c){ht.call(this,re.Ma,i),this.size=c}C(Wi,ht);function Je(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},c)}function Ze(){this.g=!0}Ze.prototype.xa=function(){this.g=!1};function Bl(i,c,u,d,T,b){i.info(function(){if(i.g)if(b)for(var D="",K=b.split("&"),at=0;at<K.length;at++){var q=K[at].split("=");if(1<q.length){var ft=q[0];q=q[1];var pt=ft.split("_");D=2<=pt.length&&pt[1]=="type"?D+(ft+"="+q+"&"):D+(ft+"=redacted&")}}else D=null;else D=b;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+c+`
`+u+`
`+D})}function Ul(i,c,u,d,T,b,D){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+c+`
`+u+`
`+b+" "+D})}function ve(i,c,u,d){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+ql(i,u)+(d?" "+d:"")})}function $l(i,c){i.info(function(){return"TIMEOUT: "+c})}Ze.prototype.info=function(){};function ql(i,c){if(!i.g)return c;if(!c)return null;try{var u=JSON.parse(c);if(u){for(i=0;i<u.length;i++)if(Array.isArray(u[i])){var d=u[i];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var b=T[0];if(b!="noop"&&b!="stop"&&b!="close")for(var D=1;D<T.length;D++)T[D]=""}}}}return Xr(u)}catch{return c}}var $n={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Qi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},es;function qn(){}C(qn,Jr),qn.prototype.g=function(){return new XMLHttpRequest},qn.prototype.i=function(){return{}},es=new qn;function Ht(i,c,u,d){this.j=i,this.i=c,this.l=u,this.R=d||1,this.U=new Qe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yi}function Yi(){this.i=null,this.g="",this.h=!1}var Xi={},ns={};function rs(i,c,u){i.L=1,i.v=Kn(Mt(c)),i.m=u,i.P=!0,Ji(i,null)}function Ji(i,c){i.F=Date.now(),zn(i),i.A=Mt(i.v);var u=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),fo(u.i,"t",d),i.C=0,u=i.j.J,i.h=new Yi,i.g=Vo(i.j,u?c:null,!i.m),0<i.O&&(i.M=new Ml(I(i.Y,i,i.g),i.O)),c=i.U,u=i.g,d=i.ca;var T="readystatechange";Array.isArray(T)||(T&&(Ui[0]=T.toString()),T=Ui);for(var b=0;b<T.length;b++){var D=xi(u,T[b],d||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),Xe(),Bl(i.i,i.u,i.A,i.l,i.R,i.m)}Ht.prototype.ca=function(i){i=i.target;const c=this.M;c&&Ft(i)==3?c.j():this.Y(i)},Ht.prototype.Y=function(i){try{if(i==this.g)t:{const pt=Ft(this.g);var c=this.g.Ba();const Ie=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Eo(this.g)))){this.J||pt!=4||c==7||(c==8||0>=Ie?Xe(3):Xe(2)),ss(this);var u=this.g.Z();this.X=u;e:if(Zi(this)){var d=Eo(this.g);i="";var T=d.length,b=Ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){se(this),tn(this);var D="";break e}this.h.i=new l.TextDecoder}for(c=0;c<T;c++)this.h.h=!0,i+=this.h.i.decode(d[c],{stream:!(b&&c==T-1)});d.length=0,this.h.g+=i,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=u==200,Ul(this.i,this.u,this.A,this.l,this.R,pt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var K,at=this.g;if((K=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(K)){var q=K;break e}}q=null}if(u=q)ve(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,is(this,u);else{this.o=!1,this.s=3,Et(12),se(this),tn(this);break t}}if(this.P){u=!0;let St;for(;!this.J&&this.C<D.length;)if(St=zl(this,D),St==ns){pt==4&&(this.s=4,Et(14),u=!1),ve(this.i,this.l,null,"[Incomplete Response]");break}else if(St==Xi){this.s=4,Et(15),ve(this.i,this.l,D,"[Invalid Chunk]"),u=!1;break}else ve(this.i,this.l,St,null),is(this,St);if(Zi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||D.length!=0||this.h.h||(this.s=1,Et(16),u=!1),this.o=this.o&&u,!u)ve(this.i,this.l,D,"[Invalid Chunked Response]"),se(this),tn(this);else if(0<D.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),hs(ft),ft.M=!0,Et(11))}}else ve(this.i,this.l,D,null),is(this,D);pt==4&&se(this),this.o&&!this.J&&(pt==4?Ro(this.j,this):(this.o=!1,zn(this)))}else au(this.g),u==400&&0<D.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),se(this),tn(this)}}}catch{}finally{}};function Zi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function zl(i,c){var u=i.C,d=c.indexOf(`
`,u);return d==-1?ns:(u=Number(c.substring(u,d)),isNaN(u)?Xi:(d+=1,d+u>c.length?ns:(c=c.slice(d,d+u),i.C=d+u,c)))}Ht.prototype.cancel=function(){this.J=!0,se(this)};function zn(i){i.S=Date.now()+i.I,to(i,i.I)}function to(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Je(I(i.ba,i),c)}function ss(i){i.B&&(l.clearTimeout(i.B),i.B=null)}Ht.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?($l(this.i,this.A),this.L!=2&&(Xe(),Et(17)),se(this),this.s=2,tn(this)):to(this,this.S-i)};function tn(i){i.j.G==0||i.J||Ro(i.j,i)}function se(i){ss(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,$i(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function is(i,c){try{var u=i.j;if(u.G!=0&&(u.g==i||os(u.h,i))){if(!i.K&&os(u.h,i)&&u.G==3){try{var d=u.Da.g.parse(c)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<i.F)Jn(u),Yn(u);else break t;us(u),Et(18)}}else u.za=T[1],0<u.za-u.T&&37500>T[2]&&u.F&&u.v==0&&!u.C&&(u.C=Je(I(u.Za,u),6e3));if(1>=ro(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else oe(u,11)}else if((i.K||u.g==i)&&Jn(u),!$(c))for(T=u.Da.g.parse(c),c=0;c<T.length;c++){let q=T[c];if(u.T=q[0],q=q[1],u.G==2)if(q[0]=="c"){u.K=q[1],u.ia=q[2];const ft=q[3];ft!=null&&(u.la=ft,u.j.info("VER="+u.la));const pt=q[4];pt!=null&&(u.Aa=pt,u.j.info("SVER="+u.Aa));const Ie=q[5];Ie!=null&&typeof Ie=="number"&&0<Ie&&(d=1.5*Ie,u.L=d,u.j.info("backChannelRequestTimeoutMs_="+d)),d=u;const St=i.g;if(St){const tr=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tr){var b=d.h;b.g||tr.indexOf("spdy")==-1&&tr.indexOf("quic")==-1&&tr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(as(b,b.h),b.h=null))}if(d.D){const ds=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;ds&&(d.ya=ds,Q(d.I,d.D,ds))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-i.F,u.j.info("Handshake RTT: "+u.R+"ms")),d=u;var D=i;if(d.qa=Co(d,d.J?d.ia:null,d.W),D.K){so(d.h,D);var K=D,at=d.L;at&&(K.I=at),K.B&&(ss(K),zn(K)),d.g=D}else bo(d);0<u.i.length&&Xn(u)}else q[0]!="stop"&&q[0]!="close"||oe(u,7);else u.G==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?oe(u,7):ls(u):q[0]!="noop"&&u.l&&u.l.ta(q),u.v=0)}}Xe(4)}catch{}}var Gl=class{constructor(i,c){this.g=i,this.map=c}};function eo(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function no(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ro(i){return i.h?1:i.g?i.g.size:0}function os(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function as(i,c){i.g?i.g.add(c):i.h=c}function so(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}eo.prototype.cancel=function(){if(this.i=io(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function io(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const u of i.g.values())c=c.concat(u.D);return c}return k(i.i)}function Hl(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var c=[],u=i.length,d=0;d<u;d++)c.push(i[d]);return c}c=[],u=0;for(d in i)c[u++]=i[d];return c}function Kl(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var c=[];i=i.length;for(var u=0;u<i;u++)c.push(u);return c}c=[],u=0;for(const d in i)c[u++]=d;return c}}}function oo(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var u=Kl(i),d=Hl(i),T=d.length,b=0;b<T;b++)c.call(void 0,d[b],u&&u[b],i)}var ao=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wl(i,c){if(i){i=i.split("&");for(var u=0;u<i.length;u++){var d=i[u].indexOf("="),T=null;if(0<=d){var b=i[u].substring(0,d);T=i[u].substring(d+1)}else b=i[u];c(b,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function ie(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ie){this.h=i.h,Gn(this,i.j),this.o=i.o,this.g=i.g,Hn(this,i.s),this.l=i.l;var c=i.i,u=new rn;u.i=c.i,c.g&&(u.g=new Map(c.g),u.h=c.h),co(this,u),this.m=i.m}else i&&(c=String(i).match(ao))?(this.h=!1,Gn(this,c[1]||"",!0),this.o=en(c[2]||""),this.g=en(c[3]||"",!0),Hn(this,c[4]),this.l=en(c[5]||"",!0),co(this,c[6]||"",!0),this.m=en(c[7]||"")):(this.h=!1,this.i=new rn(null,this.h))}ie.prototype.toString=function(){var i=[],c=this.j;c&&i.push(nn(c,lo,!0),":");var u=this.g;return(u||c=="file")&&(i.push("//"),(c=this.o)&&i.push(nn(c,lo,!0),"@"),i.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&i.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&i.push("/"),i.push(nn(u,u.charAt(0)=="/"?Xl:Yl,!0))),(u=this.i.toString())&&i.push("?",u),(u=this.m)&&i.push("#",nn(u,Zl)),i.join("")};function Mt(i){return new ie(i)}function Gn(i,c,u){i.j=u?en(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Hn(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function co(i,c,u){c instanceof rn?(i.i=c,tu(i.i,i.h)):(u||(c=nn(c,Jl)),i.i=new rn(c,i.h))}function Q(i,c,u){i.i.set(c,u)}function Kn(i){return Q(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function en(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function nn(i,c,u){return typeof i=="string"?(i=encodeURI(i).replace(c,Ql),u&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Ql(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var lo=/[#\/\?@]/g,Yl=/[#\?:]/g,Xl=/[#\?]/g,Jl=/[#\?@]/g,Zl=/#/g;function rn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Kt(i){i.g||(i.g=new Map,i.h=0,i.i&&Wl(i.i,function(c,u){i.add(decodeURIComponent(c.replace(/\+/g," ")),u)}))}n=rn.prototype,n.add=function(i,c){Kt(this),this.i=null,i=Ee(this,i);var u=this.g.get(i);return u||this.g.set(i,u=[]),u.push(c),this.h+=1,this};function uo(i,c){Kt(i),c=Ee(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function ho(i,c){return Kt(i),c=Ee(i,c),i.g.has(c)}n.forEach=function(i,c){Kt(this),this.g.forEach(function(u,d){u.forEach(function(T){i.call(c,T,d,this)},this)},this)},n.na=function(){Kt(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),u=[];for(let d=0;d<c.length;d++){const T=i[d];for(let b=0;b<T.length;b++)u.push(c[d])}return u},n.V=function(i){Kt(this);let c=[];if(typeof i=="string")ho(this,i)&&(c=c.concat(this.g.get(Ee(this,i))));else{i=Array.from(this.g.values());for(let u=0;u<i.length;u++)c=c.concat(i[u])}return c},n.set=function(i,c){return Kt(this),this.i=null,i=Ee(this,i),ho(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function fo(i,c,u){uo(i,c),0<u.length&&(i.i=null,i.g.set(Ee(i,c),k(u)),i.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var u=0;u<c.length;u++){var d=c[u];const b=encodeURIComponent(String(d)),D=this.V(d);for(d=0;d<D.length;d++){var T=b;D[d]!==""&&(T+="="+encodeURIComponent(String(D[d]))),i.push(T)}}return this.i=i.join("&")};function Ee(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function tu(i,c){c&&!i.j&&(Kt(i),i.i=null,i.g.forEach(function(u,d){var T=d.toLowerCase();d!=T&&(uo(this,d),fo(this,T,u))},i)),i.j=c}function eu(i,c){const u=new Ze;if(l.Image){const d=new Image;d.onload=S(Wt,u,"TestLoadImage: loaded",!0,c,d),d.onerror=S(Wt,u,"TestLoadImage: error",!1,c,d),d.onabort=S(Wt,u,"TestLoadImage: abort",!1,c,d),d.ontimeout=S(Wt,u,"TestLoadImage: timeout",!1,c,d),l.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else c(!1)}function nu(i,c){const u=new Ze,d=new AbortController,T=setTimeout(()=>{d.abort(),Wt(u,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:d.signal}).then(b=>{clearTimeout(T),b.ok?Wt(u,"TestPingServer: ok",!0,c):Wt(u,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(T),Wt(u,"TestPingServer: error",!1,c)})}function Wt(i,c,u,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(u)}catch{}}function ru(){this.g=new jl}function su(i,c,u){const d=u||"";try{oo(i,function(T,b){let D=T;f(T)&&(D=Xr(T)),c.push(d+b+"="+encodeURIComponent(D))})}catch(T){throw c.push(d+"type="+encodeURIComponent("_badmap")),T}}function sn(i){this.l=i.Ub||null,this.j=i.eb||!1}C(sn,Jr),sn.prototype.g=function(){return new Wn(this.l,this.j)},sn.prototype.i=function(i){return function(){return i}}({});function Wn(i,c){dt.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Wn,dt),n=Wn.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,an(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,on(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,an(this)),this.g&&(this.readyState=3,an(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;po(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function po(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?on(this):an(this),this.readyState==3&&po(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,on(this))},n.Qa=function(i){this.g&&(this.response=i,on(this))},n.ga=function(){this.g&&on(this)};function on(i){i.readyState=4,i.l=null,i.j=null,i.v=null,an(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var u=c.next();!u.done;)u=u.value,i.push(u[0]+": "+u[1]),u=c.next();return i.join(`\r
`)};function an(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Wn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function mo(i){let c="";return ot(i,function(u,d){c+=d,c+=":",c+=u,c+=`\r
`}),c}function cs(i,c,u){t:{for(d in u){var d=!1;break t}d=!0}d||(u=mo(u),typeof i=="string"?u!=null&&encodeURIComponent(String(u)):Q(i,c,u))}function J(i){dt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(J,dt);var iu=/^https?$/i,ou=["POST","PUT"];n=J.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,u,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():es.g(),this.v=this.o?qi(this.o):qi(es),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(b){go(this,b);return}if(i=u||"",u=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)u.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const b of d.keys())u.set(b,d.get(b));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(u.keys()).find(b=>b.toLowerCase()=="content-type"),T=l.FormData&&i instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ou,c,void 0))||d||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,D]of u)this.g.setRequestHeader(b,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vo(this),this.u=!0,this.g.send(i),this.u=!1}catch(b){go(this,b)}};function go(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,yo(i),Qn(i)}function yo(i){i.A||(i.A=!0,vt(i,"complete"),vt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,vt(this,"complete"),vt(this,"abort"),Qn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?_o(this):this.bb())},n.bb=function(){_o(this)};function _o(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ft(i)!=4||i.Z()!=2)){if(i.u&&Ft(i)==4)ji(i.Ea,0,i);else if(vt(i,"readystatechange"),Ft(i)==4){i.h=!1;try{const D=i.Z();t:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var u;if(!(u=c)){var d;if(d=D===0){var T=String(i.D).match(ao)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),d=!iu.test(T?T.toLowerCase():"")}u=d}if(u)vt(i,"complete"),vt(i,"success");else{i.m=6;try{var b=2<Ft(i)?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.Z()+"]",yo(i)}}finally{Qn(i)}}}}function Qn(i,c){if(i.g){vo(i);const u=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||vt(i,"ready");try{u.onreadystatechange=d}catch{}}}function vo(i){i.I&&(l.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ft(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ft(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Fl(c)}};function Eo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function au(i){const c={};i=(i.g&&2<=Ft(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if($(i[d]))continue;var u=v(i[d]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const b=c[T]||[];c[T]=b,b.push(u)}E(c,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cn(i,c,u){return u&&u.internalChannelParams&&u.internalChannelParams[i]||c}function To(i){this.Aa=0,this.i=[],this.j=new Ze,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cn("baseRetryDelayMs",5e3,i),this.cb=cn("retryDelaySeedMs",1e4,i),this.Wa=cn("forwardChannelMaxRetries",2,i),this.wa=cn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new eo(i&&i.concurrentRequestLimit),this.Da=new ru,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=To.prototype,n.la=8,n.G=1,n.connect=function(i,c,u,d){Et(0),this.W=i,this.H=c||{},u&&d!==void 0&&(this.H.OSID=u,this.H.OAID=d),this.F=this.X,this.I=Co(this,null,this.W),Xn(this)};function ls(i){if(Io(i),i.G==3){var c=i.U++,u=Mt(i.I);if(Q(u,"SID",i.K),Q(u,"RID",c),Q(u,"TYPE","terminate"),ln(i,u),c=new Ht(i,i.j,c),c.L=2,c.v=Kn(Mt(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=c.v,u=!0),u||(c.g=Vo(c.j,null),c.g.ea(c.v)),c.F=Date.now(),zn(c)}Do(i)}function Yn(i){i.g&&(hs(i),i.g.cancel(),i.g=null)}function Io(i){Yn(i),i.u&&(l.clearTimeout(i.u),i.u=null),Jn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&l.clearTimeout(i.s),i.s=null)}function Xn(i){if(!no(i.h)&&!i.s){i.s=!0;var c=i.Ga;Ge||Ni(),He||(Ge(),He=!0),$r.add(c,i),i.B=0}}function cu(i,c){return ro(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Je(I(i.Ga,i,c),Po(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const T=new Ht(this,this.j,i);let b=this.o;if(this.S&&(b?(b=m(b),_(b,this.S)):b=this.S),this.m!==null||this.O||(T.H=b,b=null),this.P)t:{for(var c=0,u=0;u<this.i.length;u++){e:{var d=this.i[u];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(c+=d,4096<c){c=u;break t}if(c===4096||u===this.i.length-1){c=u+1;break t}}c=1e3}else c=1e3;c=Ao(this,T,c),u=Mt(this.I),Q(u,"RID",i),Q(u,"CVER",22),this.D&&Q(u,"X-HTTP-Session-Id",this.D),ln(this,u),b&&(this.O?c="headers="+encodeURIComponent(String(mo(b)))+"&"+c:this.m&&cs(u,this.m,b)),as(this.h,T),this.Ua&&Q(u,"TYPE","init"),this.P?(Q(u,"$req",c),Q(u,"SID","null"),T.T=!0,rs(T,u,null)):rs(T,u,c),this.G=2}}else this.G==3&&(i?wo(this,i):this.i.length==0||no(this.h)||wo(this))};function wo(i,c){var u;c?u=c.l:u=i.U++;const d=Mt(i.I);Q(d,"SID",i.K),Q(d,"RID",u),Q(d,"AID",i.T),ln(i,d),i.m&&i.o&&cs(d,i.m,i.o),u=new Ht(i,i.j,u,i.B+1),i.m===null&&(u.H=i.o),c&&(i.i=c.D.concat(i.i)),c=Ao(i,u,1e3),u.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),as(i.h,u),rs(u,d,c)}function ln(i,c){i.H&&ot(i.H,function(u,d){Q(c,d,u)}),i.l&&oo({},function(u,d){Q(c,d,u)})}function Ao(i,c,u){u=Math.min(i.i.length,u);var d=i.l?I(i.l.Na,i.l,i):null;t:{var T=i.i;let b=-1;for(;;){const D=["count="+u];b==-1?0<u?(b=T[0].g,D.push("ofs="+b)):b=0:D.push("ofs="+b);let K=!0;for(let at=0;at<u;at++){let q=T[at].g;const ft=T[at].map;if(q-=b,0>q)b=Math.max(0,T[at].g-100),K=!1;else try{su(ft,D,"req"+q+"_")}catch{d&&d(ft)}}if(K){d=D.join("&");break t}}}return i=i.i.splice(0,u),c.D=i,d}function bo(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;Ge||Ni(),He||(Ge(),He=!0),$r.add(c,i),i.v=0}}function us(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Je(I(i.Fa,i),Po(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,So(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Je(I(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Yn(this),So(this))};function hs(i){i.A!=null&&(l.clearTimeout(i.A),i.A=null)}function So(i){i.g=new Ht(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=Mt(i.qa);Q(c,"RID","rpc"),Q(c,"SID",i.K),Q(c,"AID",i.T),Q(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&Q(c,"TO",i.ja),Q(c,"TYPE","xmlhttp"),ln(i,c),i.m&&i.o&&cs(c,i.m,i.o),i.L&&(i.g.I=i.L);var u=i.g;i=i.ia,u.L=1,u.v=Kn(Mt(c)),u.m=null,u.P=!0,Ji(u,i)}n.Za=function(){this.C!=null&&(this.C=null,Yn(this),us(this),Et(19))};function Jn(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function Ro(i,c){var u=null;if(i.g==c){Jn(i),hs(i),i.g=null;var d=2}else if(os(i.h,c))u=c.D,so(i.h,c),d=1;else return;if(i.G!=0){if(c.o)if(d==1){u=c.m?c.m.length:0,c=Date.now()-c.F;var T=i.B;d=Un(),vt(d,new Wi(d,u)),Xn(i)}else bo(i);else if(T=c.s,T==3||T==0&&0<c.X||!(d==1&&cu(i,c)||d==2&&us(i)))switch(u&&0<u.length&&(c=i.h,c.i=c.i.concat(u)),T){case 1:oe(i,5);break;case 4:oe(i,10);break;case 3:oe(i,6);break;default:oe(i,2)}}}function Po(i,c){let u=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(u*=2),u*c}function oe(i,c){if(i.j.info("Error code "+c),c==2){var u=I(i.fb,i),d=i.Xa;const T=!d;d=new ie(d||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Gn(d,"https"),Kn(d),T?eu(d.toString(),u):nu(d.toString(),u)}else Et(2);i.G=0,i.l&&i.l.sa(c),Do(i),Io(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Do(i){if(i.G=0,i.ka=[],i.l){const c=io(i.h);(c.length!=0||i.i.length!=0)&&(V(i.ka,c),V(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function Co(i,c,u){var d=u instanceof ie?Mt(u):new ie(u);if(d.g!="")c&&(d.g=c+"."+d.g),Hn(d,d.s);else{var T=l.location;d=T.protocol,c=c?c+"."+T.hostname:T.hostname,T=+T.port;var b=new ie(null);d&&Gn(b,d),c&&(b.g=c),T&&Hn(b,T),u&&(b.l=u),d=b}return u=i.D,c=i.ya,u&&c&&Q(d,u,c),Q(d,"VER",i.la),ln(i,d),d}function Vo(i,c,u){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new J(new sn({eb:u})):new J(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ko(){}n=ko.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zn(){}Zn.prototype.g=function(i,c){return new wt(i,c)};function wt(i,c){dt.call(this),this.g=new To(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!$(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!$(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Te(this)}C(wt,dt),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){ls(this.g)},wt.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var u={};u.__data__=i,i=u}else this.u&&(u={},u.__data__=Xr(i),i=u);c.i.push(new Gl(c.Ya++,i)),c.G==3&&Xn(c)},wt.prototype.N=function(){this.g.l=null,delete this.j,ls(this.g),delete this.g,wt.aa.N.call(this)};function No(i){Zr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const u in c){i=u;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}C(No,Zr);function xo(){ts.call(this),this.status=1}C(xo,ts);function Te(i){this.g=i}C(Te,ko),Te.prototype.ua=function(){vt(this.g,"a")},Te.prototype.ta=function(i){vt(this.g,new No(i))},Te.prototype.sa=function(i){vt(this.g,new xo)},Te.prototype.ra=function(){vt(this.g,"b")},Zn.prototype.createWebChannel=Zn.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,ec=function(){return new Zn},tc=function(){return Un()},Za=re,Ds={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$n.NO_ERROR=0,$n.TIMEOUT=8,$n.HTTP_ERROR=6,or=$n,Qi.COMPLETE="complete",Ja=Qi,zi.EventType=Ye,Ye.OPEN="a",Ye.CLOSE="b",Ye.ERROR="c",Ye.MESSAGE="d",dt.prototype.listen=dt.prototype.K,hn=zi,Xa=sn,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Ya=J}).apply(typeof er<"u"?er:typeof self<"u"?self:typeof window<"u"?window:{});const Ho="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let je="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=new qa("@firebase/firestore");function un(){return de.logLevel}function x(n,...t){if(de.logLevel<=U.DEBUG){const e=t.map(Js);de.debug(`Firestore (${je}): ${n}`,...e)}}function $t(n,...t){if(de.logLevel<=U.ERROR){const e=t.map(Js);de.error(`Firestore (${je}): ${n}`,...e)}}function Ve(n,...t){if(de.logLevel<=U.WARN){const e=t.map(Js);de.warn(`Firestore (${je}): ${n}`,...e)}}function Js(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(n="Unexpected state"){const t=`FIRESTORE (${je}) INTERNAL ASSERTION FAILED: `+n;throw $t(t),new Error(t)}function W(n,t){n||L()}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Fe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Fh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(gt.UNAUTHENTICATED))}shutdown(){}}class jh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Bh{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new jt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new jt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},l=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>l(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?l(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new jt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string"),new nc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string"),new gt(t)}}class Uh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $h{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Uh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(W(typeof e.token=="string"),this.R=e.token,new qh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=Gh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function z(n,t){return n<t?-1:n>t?1:0}function ke(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return rt.fromMillis(Date.now())}static fromDate(t){return rt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new rt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.timestamp=t}static fromTimestamp(t){return new M(t)}static min(){return new M(new rt(0,0))}static max(){return new M(new rt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t,e,r){e===void 0?e=0:e>t.length&&L(),r===void 0?r=t.length-e:r>t.length-e&&L(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return In.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof In?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends In{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const Hh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends In{construct(t,e,r){return new lt(t,e,r)}static isValidIdentifier(t){return Hh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const l=t[s];if(l==="\\"){if(s+1===t.length)throw new N(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(o(),s++)}if(o(),a)throw new N(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Y.fromString(t))}static fromName(t){return new O(Y.fromString(t).popFirst(5))}static empty(){return new O(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Y(t.slice()))}}function Kh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=M.fromTimestamp(r===1e9?new rt(e+1,0):new rt(e,r));return new Zt(s,O.empty(),t)}function Wh(n){return new Zt(n.readTime,n.key,-1)}class Zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Zt(M.min(),O.empty(),-1)}static max(){return new Zt(M.max(),O.empty(),-1)}}function Qh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:z(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Xh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==Yh)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,a=!1;t.forEach(l=>{++s,l.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,a=new Array(o);let l=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(p=>{a[f]=p,++l,l===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Jh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Cn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Zs.oe=-1;function Rr(n){return n==null}function gr(n){return n===0&&1/n==-1/0}function Zh(n){return typeof n=="number"&&Number.isInteger(n)&&!gr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function me(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function sc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this.comparator=t,this.root=e||ct.EMPTY}insert(t,e){return new X(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ct.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new nr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new nr(this.root,t,this.comparator,!1)}getReverseIterator(){return new nr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new nr(this.root,t,this.comparator,!0)}}class nr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ct{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=o??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ct(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const t=this.left.check();if(t!==this.right.check())throw L();return t+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Wo(this.data.getIterator())}getIteratorFrom(t){return new Wo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ut(this.comparator);return e.data=t,e}}class Wo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new At([])}unionWith(t){let e=new ut(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ke(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ic("Invalid base64 string: "+o):o}}(t);return new _t(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new _t(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const td=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(n){if(W(!!n),typeof n=="string"){let t=0;const e=td.exec(n);if(W(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fe(n){return typeof n=="string"?_t.fromBase64String(n):_t.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ei(n){const t=n.mapValue.fields.__previous_value__;return ti(t)?ei(t):t}function wn(n){const t=te(n.mapValue.fields.__local_write_time__.timestampValue);return new rt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,e,r,s,o,a,l,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=h,this.useFetchStreams=f}}class An{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new An("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof An&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ti(n)?4:nd(n)?9007199254740991:10:L()}function xt(n,t){if(n===t)return!0;const e=pe(n);if(e!==pe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return wn(n).isEqual(wn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=te(s.timestampValue),l=te(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return fe(s.bytesValue).isEqual(fe(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return et(s.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(s.geoPointValue.longitude)===et(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return et(s.integerValue)===et(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=et(s.doubleValue),l=et(o.doubleValue);return a===l?gr(a)===gr(l):isNaN(a)&&isNaN(l)}return!1}(n,t);case 9:return ke(n.arrayValue.values||[],t.arrayValue.values||[],xt);case 10:return function(s,o){const a=s.mapValue.fields||{},l=o.mapValue.fields||{};if(Ko(a)!==Ko(l))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(l[h]===void 0||!xt(a[h],l[h])))return!1;return!0}(n,t);default:return L()}}function bn(n,t){return(n.values||[]).find(e=>xt(e,t))!==void 0}function Ne(n,t){if(n===t)return 0;const e=pe(n),r=pe(t);if(e!==r)return z(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,t.booleanValue);case 2:return function(o,a){const l=et(o.integerValue||o.doubleValue),h=et(a.integerValue||a.doubleValue);return l<h?-1:l>h?1:l===h?0:isNaN(l)?isNaN(h)?0:-1:1}(n,t);case 3:return Qo(n.timestampValue,t.timestampValue);case 4:return Qo(wn(n),wn(t));case 5:return z(n.stringValue,t.stringValue);case 6:return function(o,a){const l=fe(o),h=fe(a);return l.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const l=o.split("/"),h=a.split("/");for(let f=0;f<l.length&&f<h.length;f++){const p=z(l[f],h[f]);if(p!==0)return p}return z(l.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const l=z(et(o.latitude),et(a.latitude));return l!==0?l:z(et(o.longitude),et(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,a){const l=o.values||[],h=a.values||[];for(let f=0;f<l.length&&f<h.length;++f){const p=Ne(l[f],h[f]);if(p)return p}return z(l.length,h.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,a){if(o===rr.mapValue&&a===rr.mapValue)return 0;if(o===rr.mapValue)return 1;if(a===rr.mapValue)return-1;const l=o.fields||{},h=Object.keys(l),f=a.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let w=0;w<h.length&&w<p.length;++w){const I=z(h[w],p[w]);if(I!==0)return I;const S=Ne(l[h[w]],f[p[w]]);if(S!==0)return S}return z(h.length,p.length)}(n.mapValue,t.mapValue);default:throw L()}}function Qo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return z(n,t);const e=te(n),r=te(t),s=z(e.seconds,r.seconds);return s!==0?s:z(e.nanos,r.nanos)}function xe(n){return Cs(n)}function Cs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=te(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return fe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Cs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Cs(e.fields[a])}`;return s+"}"}(n.mapValue):L()}function Yo(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Vs(n){return!!n&&"integerValue"in n}function ni(n){return!!n&&"arrayValue"in n}function Xo(n){return!!n&&"nullValue"in n}function Jo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ar(n){return!!n&&"mapValue"in n}function mn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return me(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=mn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=mn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function nd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.value=t}static empty(){return new Tt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ar(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=mn(e)}setAll(t){let e=lt.emptyPath(),r={},s=[];t.forEach((a,l)=>{if(!e.isImmediateParentOf(l)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=l.popLast()}a?r[l.lastSegment()]=mn(a):s.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());ar(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return xt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ar(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){me(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new Tt(mn(this.value))}}function oc(n){const t=[];return me(n.fields,(e,r)=>{const s=new lt([e]);if(ar(r)){const o=oc(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new At(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,r,s,o,a,l){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=l}static newInvalidDocument(t){return new yt(t,0,M.min(),M.min(),M.min(),Tt.empty(),0)}static newFoundDocument(t,e,r,s){return new yt(t,1,e,M.min(),r,s,0)}static newNoDocument(t,e){return new yt(t,2,e,M.min(),M.min(),Tt.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,M.min(),M.min(),Tt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e){this.position=t,this.inclusive=e}}function Zo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(a.referenceValue),e.key):r=Ne(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ta(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!xt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,e="asc"){this.field=t,this.dir=e}}function rd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{}class nt extends ac{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new id(t,e,r):e==="array-contains"?new cd(t,r):e==="in"?new ld(t,r):e==="not-in"?new ud(t,r):e==="array-contains-any"?new hd(t,r):new nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new od(t,r):new ad(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ne(e,this.value)):e!==null&&pe(this.value)===pe(e)&&this.matchesComparison(Ne(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends ac{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Dt(t,e)}matches(t){return cc(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function cc(n){return n.op==="and"}function lc(n){return sd(n)&&cc(n)}function sd(n){for(const t of n.filters)if(t instanceof Dt)return!1;return!0}function ks(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+xe(n.value);if(lc(n))return n.filters.map(t=>ks(t)).join(",");{const t=n.filters.map(e=>ks(e)).join(",");return`${n.op}(${t})`}}function uc(n,t){return n instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&xt(r.value,s.value)}(n,t):n instanceof Dt?function(r,s){return s instanceof Dt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,l)=>o&&uc(a,s.filters[l]),!0):!1}(n,t):void L()}function hc(n){return n instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${xe(e.value)}`}(n):n instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(hc).join(" ,")+"}"}(n):"Filter"}class id extends nt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class od extends nt{constructor(t,e){super(t,"in",e),this.keys=dc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ad extends nt{constructor(t,e){super(t,"not-in",e),this.keys=dc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function dc(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class cd extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ni(e)&&bn(e.arrayValue,this.value)}}class ld extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&bn(this.value.arrayValue,e)}}class ud extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(bn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!bn(this.value.arrayValue,e)}}class hd extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ni(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>bn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,e=null,r=[],s=[],o=null,a=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=l,this.ue=null}}function ea(n,t=null,e=[],r=[],s=null,o=null,a=null){return new dd(n,t,e,r,s,o,a)}function ri(n){const t=F(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ks(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Rr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>xe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>xe(r)).join(",")),t.ue=e}return t.ue}function si(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!rd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!uc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ta(n.startAt,t.startAt)&&ta(n.endAt,t.endAt)}function Ns(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t,e=null,r=[],s=[],o=null,a="F",l=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=l,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function fd(n,t,e,r,s,o,a,l){return new Vn(n,t,e,r,s,o,a,l)}function ii(n){return new Vn(n)}function na(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fc(n){return n.collectionGroup!==null}function gn(n){const t=F(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ut(lt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new _r(o,r))}),e.has(lt.keyField().canonicalString())||t.ce.push(new _r(lt.keyField(),r))}return t.ce}function kt(n){const t=F(n);return t.le||(t.le=pd(t,gn(n))),t.le}function pd(n,t){if(n.limitType==="F")return ea(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new _r(s.field,o)});const e=n.endAt?new yr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new yr(n.startAt.position,n.startAt.inclusive):null;return ea(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function xs(n,t){const e=n.filters.concat([t]);return new Vn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Os(n,t,e){return new Vn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Pr(n,t){return si(kt(n),kt(t))&&n.limitType===t.limitType}function pc(n){return`${ri(kt(n))}|lt:${n.limitType}`}function Ae(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>hc(s)).join(", ")}]`),Rr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>xe(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>xe(s)).join(",")),`Target(${r})`}(kt(n))}; limitType=${n.limitType})`}function Dr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of gn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,l,h){const f=Zo(a,l,h);return a.inclusive?f<=0:f<0}(r.startAt,gn(r),s)||r.endAt&&!function(a,l,h){const f=Zo(a,l,h);return a.inclusive?f>=0:f>0}(r.endAt,gn(r),s))}(n,t)}function md(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function mc(n){return(t,e)=>{let r=!1;for(const s of gn(n)){const o=gd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function gd(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,a,l){const h=a.data.field(o),f=l.data.field(o);return h!==null&&f!==null?Ne(h,f):L()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){me(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return sc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new X(O.comparator);function qt(){return yd}const gc=new X(O.comparator);function dn(...n){let t=gc;for(const e of n)t=t.insert(e.key,e);return t}function yc(n){let t=gc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ce(){return yn()}function _c(){return yn()}function yn(){return new Be(n=>n.toString(),(n,t)=>n.isEqual(t))}const _d=new X(O.comparator),vd=new ut(O.comparator);function j(...n){let t=vd;for(const e of n)t=t.add(e);return t}const Ed=new ut(z);function Td(){return Ed}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:gr(t)?"-0":t}}function Ec(n){return{integerValue:""+n}}function Id(n,t){return Zh(t)?Ec(t):vc(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this._=void 0}}function wd(n,t,e){return n instanceof vr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&ti(o)&&(o=ei(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof Sn?Ic(n,t):n instanceof Rn?wc(n,t):function(s,o){const a=Tc(s,o),l=ra(a)+ra(s.Pe);return Vs(a)&&Vs(s.Pe)?Ec(l):vc(s.serializer,l)}(n,t)}function Ad(n,t,e){return n instanceof Sn?Ic(n,t):n instanceof Rn?wc(n,t):e}function Tc(n,t){return n instanceof Er?function(r){return Vs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class vr extends Cr{}class Sn extends Cr{constructor(t){super(),this.elements=t}}function Ic(n,t){const e=Ac(t);for(const r of n.elements)e.some(s=>xt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Rn extends Cr{constructor(t){super(),this.elements=t}}function wc(n,t){let e=Ac(t);for(const r of n.elements)e=e.filter(s=>!xt(s,r));return{arrayValue:{values:e}}}class Er extends Cr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ra(n){return et(n.integerValue||n.doubleValue)}function Ac(n){return ni(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function bd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Sn&&s instanceof Sn||r instanceof Rn&&s instanceof Rn?ke(r.elements,s.elements,xt):r instanceof Er&&s instanceof Er?xt(r.Pe,s.Pe):r instanceof vr&&s instanceof vr}(n.transform,t.transform)}class Sd{constructor(t,e){this.version=t,this.transformResults=e}}class Pt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Pt}static exists(t){return new Pt(void 0,t)}static updateTime(t){return new Pt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function cr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Vr{}function bc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new oi(n.key,Pt.none()):new kn(n.key,n.data,Pt.none());{const e=n.data,r=Tt.empty();let s=new ut(lt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new ne(n.key,r,new At(s.toArray()),Pt.none())}}function Rd(n,t,e){n instanceof kn?function(s,o,a){const l=s.value.clone(),h=ia(s.fieldTransforms,o,a.transformResults);l.setAll(h),o.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,t,e):n instanceof ne?function(s,o,a){if(!cr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const l=ia(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Sc(s)),h.setAll(l),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function _n(n,t,e,r){return n instanceof kn?function(o,a,l,h){if(!cr(o.precondition,a))return l;const f=o.value.clone(),p=oa(o.fieldTransforms,h,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ne?function(o,a,l,h){if(!cr(o.precondition,a))return l;const f=oa(o.fieldTransforms,h,a),p=a.data;return p.setAll(Sc(o)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,a,l){return cr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,t,e)}function Pd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Tc(r.transform,s||null);o!=null&&(e===null&&(e=Tt.empty()),e.set(r.field,o))}return e||null}function sa(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ke(r,s,(o,a)=>bd(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class kn extends Vr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ne extends Vr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Sc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ia(n,t,e){const r=new Map;W(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,l=t.data.field(o.field);r.set(o.field,Ad(a,l,e[s]))}return r}function oa(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,wd(o,a,t))}return r}class oi extends Vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dd extends Vr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Rd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=_n(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=_n(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=_c();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let l=this.applyToLocalView(a,o.mutatedFields);l=e.has(s.key)?null:l;const h=bc(a,l);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(M.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&ke(this.mutations,t.mutations,(e,r)=>sa(e,r))&&ke(this.baseMutations,t.baseMutations,(e,r)=>sa(e,r))}}class ai{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){W(t.mutations.length===r.length);let s=function(){return _d}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new ai(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,B;function Nd(n){switch(n){default:return L();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Rc(n){if(n===void 0)return $t("GRPC error has no .code"),R.UNKNOWN;switch(n){case tt.OK:return R.OK;case tt.CANCELLED:return R.CANCELLED;case tt.UNKNOWN:return R.UNKNOWN;case tt.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case tt.INTERNAL:return R.INTERNAL;case tt.UNAVAILABLE:return R.UNAVAILABLE;case tt.UNAUTHENTICATED:return R.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case tt.NOT_FOUND:return R.NOT_FOUND;case tt.ALREADY_EXISTS:return R.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return R.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case tt.ABORTED:return R.ABORTED;case tt.OUT_OF_RANGE:return R.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return R.UNIMPLEMENTED;case tt.DATA_LOSS:return R.DATA_LOSS;default:return L()}}(B=tt||(tt={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od=new ue([4294967295,4294967295],0);function aa(n){const t=xd().encode(n),e=new Qa;return e.update(t),new Uint8Array(e.digest())}function ca(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new ue([e,r],0),new ue([s,o],0)]}class ci{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new fn(`Invalid padding: ${e}`);if(r<0)throw new fn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new fn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new fn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ue.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(ue.fromNumber(r)));return s.compare(Od)===1&&(s=new ue([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=aa(t),[r,s]=ca(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new ci(o,s,e);return r.forEach(l=>a.insert(l)),a}insert(t){if(this.Ie===0)return;const e=aa(t),[r,s]=ca(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class fn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Nn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new kr(M.min(),s,new X(z),qt(),j())}}class Nn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Nn(r,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Pc{constructor(t,e){this.targetId=t,this.me=e}}class Dc{constructor(t,e,r=_t.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class la{constructor(){this.fe=0,this.ge=ha(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=j(),e=j(),r=j();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:L()}}),new Nn(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=ha()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ld{constructor(t){this.Le=t,this.Be=new Map,this.ke=qt(),this.qe=ua(),this.Qe=new X(z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:L()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(Ns(o))if(r===0){const a=new O(o.path);this.Ue(e,a,yt.newNoDocument(a,M.min()))}else W(r===1);else{const a=this.Ye(e);if(a!==r){const l=this.Ze(t),h=l?this.Xe(l,t,a):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,l;try{a=fe(r).toUint8Array()}catch(h){if(h instanceof ic)return Ve("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{l=new ci(a,s,o)}catch(h){return Ve(h instanceof fn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const l=this.Je(a);if(l){if(o.current&&Ns(l.target)){const h=new O(l.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,yt.newNoDocument(h,t))}o.be&&(e.set(a,o.Ce()),o.ve())}});let r=j();this.qe.forEach((o,a)=>{let l=!0;a.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new kr(t,e,this.Qe,this.ke,r);return this.ke=qt(),this.qe=ua(),this.Qe=new X(z),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new la,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ut(z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||x("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new la),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function ua(){return new X(O.comparator)}function ha(){return new X(O.comparator)}const Md={asc:"ASCENDING",desc:"DESCENDING"},Fd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jd={and:"AND",or:"OR"};class Bd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ls(n,t){return n.useProto3Json||Rr(t)?t:{value:t}}function Tr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Cc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Ud(n,t){return Tr(n,t.toTimestamp())}function Nt(n){return W(!!n),M.fromTimestamp(function(e){const r=te(e);return new rt(r.seconds,r.nanos)}(n))}function li(n,t){return Ms(n,t).canonicalString()}function Ms(n,t){const e=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Vc(n){const t=Y.fromString(n);return W(Lc(t)),t}function Fs(n,t){return li(n.databaseId,t.path)}function ys(n,t){const e=Vc(t);if(e.get(1)!==n.databaseId.projectId)throw new N(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Nc(e))}function kc(n,t){return li(n.databaseId,t)}function $d(n){const t=Vc(n);return t.length===4?Y.emptyPath():Nc(t)}function js(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Nc(n){return W(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function da(n,t,e){return{name:Fs(n,t),fields:e.value.mapValue.fields}}function qd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:L()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,p){return f.useProto3Json?(W(p===void 0||typeof p=="string"),_t.fromBase64String(p||"")):(W(p===void 0||p instanceof Buffer||p instanceof Uint8Array),_t.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(f){const p=f.code===void 0?R.UNKNOWN:Rc(f.code);return new N(p,f.message||"")}(a);e=new Dc(r,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ys(n,r.document.name),o=Nt(r.document.updateTime),a=r.document.createTime?Nt(r.document.createTime):M.min(),l=new Tt({mapValue:{fields:r.document.fields}}),h=yt.newFoundDocument(s,o,a,l),f=r.targetIds||[],p=r.removedTargetIds||[];e=new lr(f,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ys(n,r.document),o=r.readTime?Nt(r.readTime):M.min(),a=yt.newNoDocument(s,o),l=r.removedTargetIds||[];e=new lr([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ys(n,r.document),o=r.removedTargetIds||[];e=new lr([],o,s,null)}else{if(!("filter"in t))return L();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new kd(s,o),l=r.targetId;e=new Pc(l,a)}}return e}function zd(n,t){let e;if(t instanceof kn)e={update:da(n,t.key,t.value)};else if(t instanceof oi)e={delete:Fs(n,t.key)};else if(t instanceof ne)e={update:da(n,t.key,t.data),updateMask:Zd(t.fieldMask)};else{if(!(t instanceof Dd))return L();e={verify:Fs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const l=a.transform;if(l instanceof vr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Sn)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Rn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Er)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw L()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Ud(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L()}(n,t.precondition)),e}function Gd(n,t){return n&&n.length>0?(W(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Nt(s.updateTime):Nt(o);return a.isEqual(M.min())&&(a=Nt(o)),new Sd(a,s.transformResults||[])}(e,t))):[]}function Hd(n,t){return{documents:[kc(n,t.path)]}}function Kd(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=kc(n,s);const o=function(f){if(f.length!==0)return Oc(Dt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(f){if(f.length!==0)return f.map(p=>function(I){return{field:be(I.field),direction:Yd(I.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const l=Ls(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function Wd(n){let t=$d(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){W(r===1);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(w){const I=xc(w);return I instanceof Dt&&lc(I)?I.getFilters():[I]}(e.where));let a=[];e.orderBy&&(a=function(w){return w.map(I=>function(C){return new _r(Se(C.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(I))}(e.orderBy));let l=null;e.limit&&(l=function(w){let I;return I=typeof w=="object"?w.value:w,Rr(I)?null:I}(e.limit));let h=null;e.startAt&&(h=function(w){const I=!!w.before,S=w.values||[];return new yr(S,I)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const I=!w.before,S=w.values||[];return new yr(S,I)}(e.endAt)),fd(t,s,a,o,l,"F",h,f)}function Qd(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function xc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Se(e.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Se(e.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Se(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Se(e.unaryFilter.field);return nt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(n):n.fieldFilter!==void 0?function(e){return nt.create(Se(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(r=>xc(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L()}}(e.compositeFilter.op))}(n):L()}function Yd(n){return Md[n]}function Xd(n){return Fd[n]}function Jd(n){return jd[n]}function be(n){return{fieldPath:n.canonicalString()}}function Se(n){return lt.fromServerFormat(n.fieldPath)}function Oc(n){return n instanceof nt?function(e){if(e.op==="=="){if(Jo(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NAN"}};if(Xo(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Jo(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NOT_NAN"}};if(Xo(e.value))return{unaryFilter:{field:be(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:be(e.field),op:Xd(e.op),value:e.value}}}(n):n instanceof Dt?function(e){const r=e.getFilters().map(s=>Oc(s));return r.length===1?r[0]:{compositeFilter:{op:Jd(e.op),filters:r}}}(n):L()}function Zd(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Lc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e,r,s,o=M.min(),a=M.min(),l=_t.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=h}withSequenceNumber(t){return new Qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t){this.ct=t}}function ef(n){const t=Wd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Os(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this._n=new rf}addToCollectionParentIndex(t,e){return this._n.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Zt.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class rf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ut(Y.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ut(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Oe(0)}static Ln(){return new Oe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.changes=new Be(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&_n(r.mutation,s,At.empty(),rt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,j()).next(()=>r))}getLocalViewOfDocuments(t,e,r=j()){const s=ce();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=dn();return o.forEach((l,h)=>{a=a.insert(l,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ce();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,j()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,l)=>{e.set(a,l)})})}computeViews(t,e,r,s){let o=qt();const a=yn(),l=function(){return yn()}();return e.forEach((h,f)=>{const p=r.get(f.key);s.has(f.key)&&(p===void 0||p.mutation instanceof ne)?o=o.insert(f.key,f):p!==void 0?(a.set(f.key,p.mutation.getFieldMask()),_n(p.mutation,f,p.mutation.getFieldMask(),rt.now())):a.set(f.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,p)=>a.set(f,p)),e.forEach((f,p)=>{var w;return l.set(f,new of(p,(w=a.get(f))!==null&&w!==void 0?w:null))}),l))}recalculateAndSaveOverlays(t,e){const r=yn();let s=new X((a,l)=>a-l),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const l of a)l.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let p=r.get(h)||At.empty();p=l.applyToLocalView(f,p),r.set(h,p);const w=(s.get(l.batchId)||j()).add(h);s=s.insert(l.batchId,w)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const h=l.getNext(),f=h.key,p=h.value,w=_c();p.forEach(I=>{if(!o.has(I)){const S=bc(e.get(I),r.get(I));S!==null&&w.set(I,S),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,w))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return O.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):fc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(ce());let l=-1,h=o;return a.next(f=>P.forEach(f,(p,w)=>(l<w.largestBatchId&&(l=w.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(t,p).next(I=>{h=h.insert(p,I)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,j())).next(p=>({batchId:l,changes:yc(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=dn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=dn();return this.indexManager.getCollectionParents(t,o).next(l=>P.forEach(l,h=>{const f=function(w,I){return new Vn(I,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(p=>{p.forEach((w,I)=>{a=a.insert(w,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,yt.newInvalidDocument(p)))});let l=dn();return a.forEach((h,f)=>{const p=o.get(h);p!==void 0&&_n(p.mutation,f,At.empty(),rt.now()),Dr(e,f)&&(l=l.insert(h,f))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return P.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Nt(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:ef(s.bundledQuery),readTime:Nt(s.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.overlays=new X(O.comparator),this.hr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ce();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=ce(),o=e.length+1,a=new O(e.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const h=l.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new X((f,p)=>f-p);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let p=o.get(f.largestBatchId);p===null&&(p=ce(),o=o.insert(f.largestBatchId,p)),p.set(f.getKey(),f)}}const l=ce(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,p)=>l.set(f,p)),!(l.size()>=s)););return P.resolve(l)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Vd(e,r));let o=this.hr.get(e);o===void 0&&(o=j(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this.Pr=new ut(it.Ir),this.Tr=new ut(it.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new it(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new it(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new O(new Y([])),r=new it(e,t),s=new it(e,t+1),o=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new O(new Y([])),r=new it(e,t),s=new it(e,t+1);let o=j();return this.Tr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new it(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return O.comparator(t.key,e.key)||z(t.pr,e.pr)}static Er(t,e){return z(t.pr,e.pr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new ut(it.Ir)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Cd(o,e,r,s);this.mutationQueue.push(a);for(const l of s)this.wr=this.wr.add(new it(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),s=new it(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],a=>{const l=this.Sr(a.pr);o.push(l)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ut(z);return e.forEach(s=>{const o=new it(s,0),a=new it(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],l=>{r=r.add(l.pr)})}),P.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const a=new it(new O(o),0);let l=new ut(z);return this.wr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(l=l.add(h.pr)),!0)},a),P.resolve(this.Dr(l))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){W(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return P.forEach(e.mutations,s=>{const o=new it(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new it(e,0),s=this.wr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(t){this.vr=t,this.docs=function(){return new X(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let r=qt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():yt.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=qt();const a=e.path,l=new O(a.child("")),h=this.docs.getIteratorFrom(l);for(;h.hasNext();){const{key:f,value:{document:p}}=h.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Qh(Wh(p),r)<=0||(s.has(p.key)||Dr(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){L()}Fr(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new df(this)}getSize(t){return P.resolve(this.size)}}class df extends sf{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t){this.persistence=t,this.Mr=new Be(e=>ri(e),si),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ui,this.targetCount=0,this.Lr=Oe.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),P.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Oe(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.qn(e),P.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t,e){this.Br={},this.overlays={},this.kr=new Zs(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new ff(this),this.indexManager=new nf,this.remoteDocumentCache=function(s){return new hf(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new tf(e),this.$r=new cf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new lf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new uf(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){x("MemoryPersistence","Starting transaction:",t);const s=new mf(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class mf extends Xh{constructor(t){super(),this.currentSequenceNumber=t}}class hi{constructor(t){this.persistence=t,this.zr=new ui,this.jr=null}static Hr(t){return new hi(t)}get Jr(){if(this.jr)return this.jr;throw L()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),P.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Jr,r=>{const s=O.fromPath(r);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,M.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return P.or([()=>P.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=j(),s=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new di(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return wu()?8:Jh(Tu())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ji(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new gf;return this.Ji(t,e,a).next(l=>{if(o.result=l,this.Ui)return this.Yi(t,e,a,l.size)})}).next(()=>o.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(un()<=U.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",Ae(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),P.resolve()):(un()<=U.DEBUG&&x("QueryEngine","Query:",Ae(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(un()<=U.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",Ae(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,kt(e))):P.resolve())}ji(t,e){if(na(e))return P.resolve(null);let r=kt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Os(e,null,"F"),r=kt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=j(...o);return this.zi.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.Zi(e,l);return this.Xi(e,f,a,h.readTime)?this.ji(t,Os(e,null,"F")):this.es(t,f,e,h)}))})))}Hi(t,e,r,s){return na(e)||s.isEqual(M.min())?P.resolve(null):this.zi.getDocuments(t,r).next(o=>{const a=this.Zi(e,o);return this.Xi(e,a,r,s)?P.resolve(null):(un()<=U.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ae(e)),this.es(t,a,e,Kh(s,-1)).next(l=>l))})}Zi(t,e){let r=new ut(mc(t));return e.forEach((s,o)=>{Dr(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,r){return un()<=U.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",Ae(e)),this.zi.getDocumentsMatchingQuery(t,e,Zt.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new X(z),this.rs=new Be(o=>ri(o),si),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new af(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function vf(n,t,e,r){return new _f(n,t,e,r)}async function Mc(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],l=[];let h=j();for(const f of s){a.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}for(const f of o){l.push(f.batchId);for(const p of f.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(f=>({us:f,removedBatchIds:a,addedBatchIds:l}))})})}function Ef(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(l,h,f,p){const w=f.batch,I=w.keys();let S=P.resolve();return I.forEach(C=>{S=S.next(()=>p.getEntry(h,C)).next(k=>{const V=f.docVersions.get(C);W(V!==null),k.version.compareTo(V)<0&&(w.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),p.addEntry(k)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(h,w))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let h=j();for(let f=0;f<l.mutationResults.length;++f)l.mutationResults[f].transformResults.length>0&&(h=h.add(l.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Fc(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Tf(n,t){const e=F(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const l=[];t.targetChanges.forEach((p,w)=>{const I=s.get(w);if(!I)return;l.push(e.Qr.removeMatchingKeys(o,p.removedDocuments,w).next(()=>e.Qr.addMatchingKeys(o,p.addedDocuments,w)));let S=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?S=S.withResumeToken(_t.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(w,S),function(k,V,G){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(I,S,p)&&l.push(e.Qr.updateTargetData(o,S))});let h=qt(),f=j();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),l.push(If(o,a,t.documentUpdates).next(p=>{h=p.cs,f=p.ls})),!r.isEqual(M.min())){const p=e.Qr.getLastRemoteSnapshotVersion(o).next(w=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(p)}return P.waitFor(l).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.ns=s,o))}function If(n,t,e){let r=j(),s=j();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=qt();return e.forEach((l,h)=>{const f=o.get(l);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(l)),h.isNoDocument()&&h.version.isEqual(M.min())?(t.removeEntry(l,h.readTime),a=a.insert(l,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),a=a.insert(l,h)):x("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",h.version)}),{cs:a,ls:s}})}function wf(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Af(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.Qr.allocateTargetId(r).next(a=>(s=new Qt(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function Bs(n,t,e){const r=F(n),s=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Cn(a))throw a;x("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function fa(n,t,e){const r=F(n);let s=M.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,f,p){const w=F(h),I=w.rs.get(p);return I!==void 0?P.resolve(w.ns.get(I)):w.Qr.getTargetData(f,p)}(r,a,kt(t)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,l.targetId).next(h=>{o=h})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,e?s:M.min(),e?o:j())).next(l=>(bf(r,md(t),l),{documents:l,hs:o})))}function bf(n,t,e){let r=n.ss.get(t)||M.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class pa{constructor(){this.activeTargetIds=Td()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Sf{constructor(){this.no=new pa,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new pa,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sr=null;function _s(){return sr===null?sr=function(){return 268435456+Math.round(2147483648*Math.random())}():sr++,"0x"+sr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class Cf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,r,s,o,a){const l=_s(),h=this.vo(e,r.toUriEncodedString());x("RestConnection",`Sending RPC '${e}' ${l}:`,h,s);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,a),this.Mo(e,h,f,s).then(p=>(x("RestConnection",`Received RPC '${e}' ${l}: `,p),p),p=>{throw Ve("RestConnection",`RPC '${e}' ${l} failed with error: `,p,"url: ",h,"request:",s),p})}xo(e,r,s,o,a,l){return this.Co(e,r,s,o,a)}Fo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+je}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}vo(e,r){const s=Pf[e];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,s){const o=_s();return new Promise((a,l)=>{const h=new Ya;h.setWithCredentials(!0),h.listenOnce(Ja.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case or.NO_ERROR:const p=h.getResponseJson();x(mt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case or.TIMEOUT:x(mt,`RPC '${t}' ${o} timed out`),l(new N(R.DEADLINE_EXCEEDED,"Request time out"));break;case or.HTTP_ERROR:const w=h.getStatus();if(x(mt,`RPC '${t}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const S=I?.error;if(S&&S.status&&S.message){const C=function(V){const G=V.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(G)>=0?G:R.UNKNOWN}(S.status);l(new N(C,S.message))}else l(new N(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new N(R.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{x(mt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);x(mt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Oo(t,e,r){const s=_s(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=ec(),l=tc(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.xmlHttpFactory=new Xa({})),this.Fo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");x(mt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const w=a.createWebChannel(p,h);let I=!1,S=!1;const C=new Df({lo:V=>{S?x(mt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(I||(x(mt,`Opening RPC '${t}' stream ${s} transport.`),w.open(),I=!0),x(mt,`RPC '${t}' stream ${s} sending:`,V),w.send(V))},ho:()=>w.close()}),k=(V,G,$)=>{V.listen(G,H=>{try{$(H)}catch(Z){setTimeout(()=>{throw Z},0)}})};return k(w,hn.EventType.OPEN,()=>{S||(x(mt,`RPC '${t}' stream ${s} transport opened.`),C.mo())}),k(w,hn.EventType.CLOSE,()=>{S||(S=!0,x(mt,`RPC '${t}' stream ${s} transport closed`),C.po())}),k(w,hn.EventType.ERROR,V=>{S||(S=!0,Ve(mt,`RPC '${t}' stream ${s} transport errored:`,V),C.po(new N(R.UNAVAILABLE,"The operation could not be completed")))}),k(w,hn.EventType.MESSAGE,V=>{var G;if(!S){const $=V.data[0];W(!!$);const H=$,Z=H.error||((G=H[0])===null||G===void 0?void 0:G.error);if(Z){x(mt,`RPC '${t}' stream ${s} received error:`,Z);const bt=Z.status;let ot=function(y){const _=tt[y];if(_!==void 0)return Rc(_)}(bt),E=Z.message;ot===void 0&&(ot=R.INTERNAL,E="Unknown error status: "+bt+" with message "+Z.message),S=!0,C.po(new N(ot,E)),w.close()}else x(mt,`RPC '${t}' stream ${s} received:`,$),C.yo($)}}),k(l,Za.STAT_EVENT,V=>{V.stat===Ds.PROXY?x(mt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===Ds.NOPROXY&&x(mt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function vs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(n){return new Bd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,e,r=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-r);s>0&&x("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,e,r,s,o,a,l,h){this.oi=t,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new jc(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===R.RESOURCE_EXHAUSTED?($t(e.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===e&&this.u_(r,s)},r=>{t(()=>{const s=new N(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return x("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vf extends Bc{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=qd(this.serializer,t),r=function(o){if(!("targetChange"in o))return M.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?M.min():a.readTime?Nt(a.readTime):M.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=js(this.serializer),e.addTarget=function(o,a){let l;const h=a.target;if(l=Ns(h)?{documents:Hd(o,h)}:{query:Kd(o,h)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Cc(o,a.resumeToken);const f=Ls(o,a.expectedCount);f!==null&&(l.expectedCount=f)}else if(a.snapshotVersion.compareTo(M.min())>0){l.readTime=Tr(o,a.snapshotVersion.toTimestamp());const f=Ls(o,a.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=Qd(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=js(this.serializer),e.removeTarget=t,this.i_(e)}}class kf extends Bc{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(W(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Gd(t.writeResults,t.commitTime),r=Nt(t.commitTime);return this.listener.A_(r,e)}return W(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=js(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>zd(this.serializer,r))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new N(R.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,Ms(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(R.UNKNOWN,o.toString())})}xo(t,e,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(t,Ms(e,r),s,a,l,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new N(R.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class xf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?($t(e),this.y_=!1):x("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{ge(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=F(h);f.M_.add(4),await xn(f),f.N_.set("Unknown"),f.M_.delete(4),await xr(f)}(this))})}),this.N_=new xf(r,s)}}async function xr(n){if(ge(n))for(const t of n.x_)await t(!0)}async function xn(n){for(const t of n.x_)await t(!1)}function Uc(n,t){const e=F(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),gi(e)?mi(e):Ue(e).Xo()&&pi(e,t))}function fi(n,t){const e=F(n),r=Ue(e);e.F_.delete(t),r.Xo()&&$c(e,t),e.F_.size===0&&(r.Xo()?r.n_():ge(e)&&e.N_.set("Unknown"))}function pi(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(M.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ue(n).P_(t)}function $c(n,t){n.L_.xe(t),Ue(n).I_(t)}function mi(n){n.L_=new Ld({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Ue(n).start(),n.N_.w_()}function gi(n){return ge(n)&&!Ue(n).Zo()&&n.F_.size>0}function ge(n){return F(n).M_.size===0}function qc(n){n.L_=void 0}async function Lf(n){n.N_.set("Online")}async function Mf(n){n.F_.forEach((t,e)=>{pi(n,t)})}async function Ff(n,t){qc(n),gi(n)?(n.N_.D_(t),mi(n)):n.N_.set("Unknown")}async function jf(n,t,e){if(n.N_.set("Online"),t instanceof Dc&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const l of o.targetIds)s.F_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.F_.delete(l),s.L_.removeTarget(l))}(n,t)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ir(n,r)}else if(t instanceof lr?n.L_.Ke(t):t instanceof Pc?n.L_.He(t):n.L_.We(t),!e.isEqual(M.min()))try{const r=await Fc(n.localStore);e.compareTo(r)>=0&&await function(o,a){const l=o.L_.rt(a);return l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.F_.get(f);p&&o.F_.set(f,p.withResumeToken(h.resumeToken,a))}}),l.targetMismatches.forEach((h,f)=>{const p=o.F_.get(h);if(!p)return;o.F_.set(h,p.withResumeToken(_t.EMPTY_BYTE_STRING,p.snapshotVersion)),$c(o,h);const w=new Qt(p.target,h,f,p.sequenceNumber);pi(o,w)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await Ir(n,r)}}async function Ir(n,t,e){if(!Cn(t))throw t;n.M_.add(1),await xn(n),n.N_.set("Offline"),e||(e=()=>Fc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await xr(n)})}function zc(n,t){return t().catch(e=>Ir(n,e,t))}async function Or(n){const t=F(n),e=ee(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Bf(t);)try{const s=await wf(t.localStore,r);if(s===null){t.v_.length===0&&e.n_();break}r=s.batchId,Uf(t,s)}catch(s){await Ir(t,s)}Gc(t)&&Hc(t)}function Bf(n){return ge(n)&&n.v_.length<10}function Uf(n,t){n.v_.push(t);const e=ee(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Gc(n){return ge(n)&&!ee(n).Zo()&&n.v_.length>0}function Hc(n){ee(n).start()}async function $f(n){ee(n).V_()}async function qf(n){const t=ee(n);for(const e of n.v_)t.d_(e.mutations)}async function zf(n,t,e){const r=n.v_.shift(),s=ai.from(r,t,e);await zc(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Or(n)}async function Gf(n,t){t&&ee(n).E_&&await async function(r,s){if(function(a){return Nd(a)&&a!==R.ABORTED}(s.code)){const o=r.v_.shift();ee(r).t_(),await zc(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Or(r)}}(n,t),Gc(n)&&Hc(n)}async function ga(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const r=ge(e);e.M_.add(3),await xn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await xr(e)}async function Hf(n,t){const e=F(n);t?(e.M_.delete(2),await xr(e)):t||(e.M_.add(2),await xn(e),e.N_.set("Unknown"))}function Ue(n){return n.B_||(n.B_=function(e,r,s){const o=F(e);return o.f_(),new Vf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:Lf.bind(null,n),To:Mf.bind(null,n),Ao:Ff.bind(null,n),h_:jf.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),gi(n)?mi(n):n.N_.set("Unknown")):(await n.B_.stop(),qc(n))})),n.B_}function ee(n){return n.k_||(n.k_=function(e,r,s){const o=F(e);return o.f_(),new kf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:$f.bind(null,n),Ao:Gf.bind(null,n),R_:qf.bind(null,n),A_:zf.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Or(n)):(await n.k_.stop(),n.v_.length>0&&(x("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,l=new yi(t,e,a,s,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _i(n,t){if($t("AsyncQueue",`${t}: ${n}`),Cn(n))return new N(R.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=dn(),this.sortedSet=new X(this.comparator)}static emptySet(t){return new De(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof De)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new De;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(){this.q_=new X(O.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):L():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Le{constructor(t,e,r,s,o,a,l,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(l=>{a.push({type:0,doc:l})}),new Le(t,e,De.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Wf{constructor(){this.queries=new Be(t=>pc(t),Pr),this.onlineState="Unknown",this.z_=new Set}}async function Kc(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.W_()&&t.G_()&&(r=2):(o=new Kf,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(s,!0);break;case 1:o.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const l=_i(a,`Initialization of query '${Ae(t.query)}' failed`);return void t.onError(l)}e.queries.set(s,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&vi(e)}async function Wc(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.U_.indexOf(t);a>=0&&(o.U_.splice(a,1),o.U_.length===0?s=t.G_()?0:1:!o.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Qf(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const l of a.U_)l.H_(s)&&(r=!0);a.K_=s}}r&&vi(e)}function Yf(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.U_)o.onError(e);r.queries.delete(t)}function vi(n){n.z_.forEach(t=>{t.next()})}var Us,_a;(_a=Us||(Us={})).J_="default",_a.Cache="cache";class Qc{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Le(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Le.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Us.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t){this.key=t}}class Xc{constructor(t){this.key=t}}class Xf{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=j(),this.mutatedKeys=j(),this.Ia=mc(t),this.Ta=new De(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new ya,s=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,l=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,w)=>{const I=s.get(p),S=Dr(this.query,w)?w:null,C=!!I&&this.mutatedKeys.has(I.key),k=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;I&&S?I.data.isEqual(S.data)?C!==k&&(r.track({type:3,doc:S}),V=!0):this.Ra(I,S)||(r.track({type:2,doc:S}),V=!0,(h&&this.Ia(S,h)>0||f&&this.Ia(S,f)<0)&&(l=!0)):!I&&S?(r.track({type:0,doc:S}),V=!0):I&&!S&&(r.track({type:1,doc:I}),V=!0,(h||f)&&(l=!0)),V&&(S?(a=a.add(S),o=k?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:l,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((p,w)=>function(S,C){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return k(S)-k(C)}(p.type,w.type)||this.Ia(p.doc,w.doc)),this.Va(r),s=s!=null&&s;const l=e&&!s?this.ma():[],h=this.Pa.size===0&&this.current&&!s?1:0,f=h!==this.ha;return this.ha=h,a.length!==0||f?{snapshot:new Le(this.query,t.Ta,o,a,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new ya,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=j(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new Xc(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new Yc(r))}),e}pa(t){this.la=t.hs,this.Pa=j();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Le.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Jf{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Zf{constructor(t){this.key=t,this.wa=!1}}class tp{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Be(l=>pc(l),Pr),this.Da=new Map,this.Ca=new Set,this.va=new X(O.comparator),this.Fa=new Map,this.Ma=new ui,this.xa={},this.Oa=new Map,this.Na=Oe.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function ep(n,t,e=!0){const r=rl(n);let s;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ya()):s=await Jc(r,t,e,!0),s}async function np(n,t){const e=rl(n);await Jc(e,t,!0,!1)}async function Jc(n,t,e,r){const s=await Af(n.localStore,kt(t)),o=s.targetId,a=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await rp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Uc(n.remoteStore,s),l}async function rp(n,t,e,r,s){n.Ba=(w,I,S)=>async function(k,V,G,$){let H=V.view.da(G);H.Xi&&(H=await fa(k.localStore,V.query,!1).then(({documents:E})=>V.view.da(E,H)));const Z=$&&$.targetChanges.get(V.targetId),bt=$&&$.targetMismatches.get(V.targetId)!=null,ot=V.view.applyChanges(H,k.isPrimaryClient,Z,bt);return Ea(k,V.targetId,ot.fa),ot.snapshot}(n,w,I,S);const o=await fa(n.localStore,t,!0),a=new Xf(t,o.hs),l=a.da(o.documents),h=Nn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(l,n.isPrimaryClient,h);Ea(n,e,f.fa);const p=new Jf(t,e,a);return n.ba.set(t,p),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),f.snapshot}async function sp(n,t,e){const r=F(n),s=r.ba.get(t),o=r.Da.get(s.targetId);if(o.length>1)return r.Da.set(s.targetId,o.filter(a=>!Pr(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Bs(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&fi(r.remoteStore,s.targetId),$s(r,s.targetId)}).catch(Dn)):($s(r,s.targetId),await Bs(r.localStore,s.targetId,!0))}async function ip(n,t){const e=F(n),r=e.ba.get(t),s=e.Da.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),fi(e.remoteStore,r.targetId))}async function op(n,t,e){const r=fp(n);try{const s=await function(a,l){const h=F(a),f=rt.now(),p=l.reduce((S,C)=>S.add(C.key),j());let w,I;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=qt(),k=j();return h.os.getEntries(S,p).next(V=>{C=V,C.forEach((G,$)=>{$.isValidDocument()||(k=k.add(G))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,C)).next(V=>{w=V;const G=[];for(const $ of l){const H=Pd($,w.get($.key).overlayedDocument);H!=null&&G.push(new ne($.key,H,oc(H.value.mapValue),Pt.exists(!0)))}return h.mutationQueue.addMutationBatch(S,f,G,l)}).next(V=>{I=V;const G=V.applyToLocalDocumentSet(w,k);return h.documentOverlayCache.saveOverlays(S,V.batchId,G)})}).then(()=>({batchId:I.batchId,changes:yc(w)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,h){let f=a.xa[a.currentUser.toKey()];f||(f=new X(z)),f=f.insert(l,h),a.xa[a.currentUser.toKey()]=f}(r,s.batchId,e),await On(r,s.changes),await Or(r.remoteStore)}catch(s){const o=_i(s,"Failed to persist write");e.reject(o)}}async function Zc(n,t){const e=F(n);try{const r=await Tf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Fa.get(o);a&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?W(a.wa):s.removedDocuments.size>0&&(W(a.wa),a.wa=!1))}),await On(e,r,t)}catch(r){await Dn(r)}}function va(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((o,a)=>{const l=a.view.j_(t);l.snapshot&&s.push(l.snapshot)}),function(a,l){const h=F(a);h.onlineState=l;let f=!1;h.queries.forEach((p,w)=>{for(const I of w.U_)I.j_(l)&&(f=!0)}),f&&vi(h)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ap(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Fa.get(t),o=s&&s.key;if(o){let a=new X(O.comparator);a=a.insert(o,yt.newNoDocument(o,M.min()));const l=j().add(o),h=new kr(M.min(),new Map,new X(z),a,l);await Zc(r,h),r.va=r.va.remove(o),r.Fa.delete(t),Ei(r)}else await Bs(r.localStore,t,!1).then(()=>$s(r,t,e)).catch(Dn)}async function cp(n,t){const e=F(n),r=t.batch.batchId;try{const s=await Ef(e.localStore,t);el(e,r,null),tl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await On(e,s)}catch(s){await Dn(s)}}async function lp(n,t,e){const r=F(n);try{const s=await function(a,l){const h=F(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,l).next(w=>(W(w!==null),p=w.keys(),h.mutationQueue.removeMutationBatch(f,w))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,l)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(r.localStore,t);el(r,t,e),tl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await On(r,s)}catch(s){await Dn(s)}}function tl(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function el(n,t,e){const r=F(n);let s=r.xa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function $s(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||nl(n,r)})}function nl(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(fi(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),Ei(n))}function Ea(n,t,e){for(const r of e)r instanceof Yc?(n.Ma.addReference(r.key,t),up(n,r)):r instanceof Xc?(x("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||nl(n,r.key)):L()}function up(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(x("SyncEngine","New document in limbo: "+e),n.Ca.add(r),Ei(n))}function Ei(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new O(Y.fromString(t)),r=n.Na.next();n.Fa.set(r,new Zf(e)),n.va=n.va.insert(e,r),Uc(n.remoteStore,new Qt(kt(ii(e.path)),r,"TargetPurposeLimboResolution",Zs.oe))}}async function On(n,t,e){const r=F(n),s=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,h)=>{a.push(r.Ba(h,t,e).then(f=>{if((f||e)&&r.isPrimaryClient){const p=f&&!f.fromCache;r.sharedClientState.updateQueryState(h.targetId,p?"current":"not-current")}if(f){s.push(f);const p=di.Ki(h.targetId,f);o.push(p)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(h,f){const p=F(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>P.forEach(f,I=>P.forEach(I.qi,S=>p.persistence.referenceDelegate.addReference(w,I.targetId,S)).next(()=>P.forEach(I.Qi,S=>p.persistence.referenceDelegate.removeReference(w,I.targetId,S)))))}catch(w){if(!Cn(w))throw w;x("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const I=w.targetId;if(!w.fromCache){const S=p.ns.get(I),C=S.snapshotVersion,k=S.withLastLimboFreeSnapshotVersion(C);p.ns=p.ns.insert(I,k)}}}(r.localStore,o))}async function hp(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){x("SyncEngine","User change. New user:",t.toKey());const r=await Mc(e.localStore,t);e.currentUser=t,function(o,a){o.Oa.forEach(l=>{l.forEach(h=>{h.reject(new N(R.CANCELLED,a))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await On(e,r.us)}}function dp(n,t){const e=F(n),r=e.Fa.get(t);if(r&&r.wa)return j().add(r.key);{let s=j();const o=e.Da.get(t);if(!o)return s;for(const a of o){const l=e.ba.get(a);s=s.unionWith(l.view.Ea)}return s}}function rl(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Zc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=dp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ap.bind(null,t),t.Sa.h_=Qf.bind(null,t.eventManager),t.Sa.ka=Yf.bind(null,t.eventManager),t}function fp(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=cp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=lp.bind(null,t),t}class Ta{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Nr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return vf(this.persistence,new yf,t.initialUser,this.serializer)}createPersistence(t){return new pf(hi.Hr,this.serializer)}createSharedClientState(t){return new Sf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pp{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>va(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=hp.bind(null,this.syncEngine),await Hf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Wf}()}createDatastore(t){const e=Nr(t.databaseInfo.databaseId),r=function(o){return new Cf(o)}(t.databaseInfo);return function(o,a,l,h){return new Nf(o,a,l,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,l){return new Of(r,s,o,a,l)}(this.localStore,this.datastore,t.asyncQueue,e=>va(this.syncEngine,e,0),function(){return ma.D()?new ma:new Rf}())}createSyncEngine(t,e){return function(s,o,a,l,h,f,p){const w=new tp(s,o,a,l,h,f);return p&&(w.La=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=F(r);x("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await xn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):$t("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=rc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{x("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(x("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=_i(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Es(n,t){n.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Mc(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ia(n,t){n.asyncQueue.verifyOperationInProgress();const e=await yp(n);x("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ga(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ga(t.remoteStore,s)),n._onlineComponents=t}function gp(n){return n.name==="FirebaseError"?n.code===R.FAILED_PRECONDITION||n.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function yp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x("FirestoreClient","Using user provided OfflineComponentProvider");try{await Es(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!gp(e))throw e;Ve("Error using user provided cache. Falling back to memory cache: "+e),await Es(n,new Ta)}}else x("FirestoreClient","Using default OfflineComponentProvider"),await Es(n,new Ta);return n._offlineComponents}async function il(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x("FirestoreClient","Using user provided OnlineComponentProvider"),await Ia(n,n._uninitializedComponentsProvider._online)):(x("FirestoreClient","Using default OnlineComponentProvider"),await Ia(n,new pp))),n._onlineComponents}function _p(n){return il(n).then(t=>t.syncEngine)}async function ol(n){const t=await il(n),e=t.eventManager;return e.onListen=ep.bind(null,t.syncEngine),e.onUnlisten=sp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=np.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ip.bind(null,t.syncEngine),e}function vp(n,t,e={}){const r=new jt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,f){const p=new sl({next:I=>{a.enqueueAndForget(()=>Wc(o,w));const S=I.docs.has(l);!S&&I.fromCache?f.reject(new N(R.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&I.fromCache&&h&&h.source==="server"?f.reject(new N(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(I)},error:I=>f.reject(I)}),w=new Qc(ii(l.path),p,{includeMetadataChanges:!0,ra:!0});return Kc(o,w)}(await ol(n),n.asyncQueue,t,e,r)),r.promise}function Ep(n,t,e={}){const r=new jt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,l,h,f){const p=new sl({next:I=>{a.enqueueAndForget(()=>Wc(o,w)),I.fromCache&&h.source==="server"?f.reject(new N(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(I)},error:I=>f.reject(I)}),w=new Qc(l,p,{includeMetadataChanges:!0,ra:!0});return Kc(o,w)}(await ol(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n,t,e){if(!e)throw new N(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Tp(n,t,e,r){if(t===!0&&r===!0)throw new N(R.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Aa(n){if(!O.isDocumentKey(n))throw new N(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ba(n){if(O.isDocumentKey(n))throw new N(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Lr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":L()}function zt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Lr(n);throw new N(R.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Tp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=al((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Mr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Fh;switch(r.type){case"firstParty":return new $h(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=wa.get(e);r&&(x("ComponentProvider","Removing Datastore"),wa.delete(e),r.terminate())}(this),Promise.resolve()}}function Ip(n,t,e,r={}){var s;const o=(n=zt(n,Mr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&Ve("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let l,h;if(typeof r.mockUserToken=="string")l=r.mockUserToken,h=gt.MOCK_USER;else{l=Eu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new N(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new gt(f)}n._authCredentials=new jh(new nc(l,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new $e(this.firestore,t,this._query)}}class It{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class Jt extends $e{constructor(t,e,r){super(t,e,ii(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new O(t))}withConverter(t){return new Jt(this.firestore,t,this._path)}}function Pn(n,t,...e){if(n=Ut(n),cl("collection","path",t),n instanceof Mr){const r=Y.fromString(t,...e);return ba(r),new Jt(n,null,r)}{if(!(n instanceof It||n instanceof Jt))throw new N(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return ba(r),new Jt(n.firestore,null,r)}}function Ot(n,t,...e){if(n=Ut(n),arguments.length===1&&(t=rc.newId()),cl("doc","path",t),n instanceof Mr){const r=Y.fromString(t,...e);return Aa(r),new It(n,null,new O(r))}{if(!(n instanceof It||n instanceof Jt))throw new N(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Aa(r),new It(n.firestore,n instanceof Jt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new jc(this,"async_queue_retry"),this.hu=()=>{const e=vs();e&&x("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=vs();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=vs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new jt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!Cn(t))throw t;x("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw $t("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=yi.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&L()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class qe extends Mr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new wp}(),this._persistenceKey=s?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||ll(this),this._firestoreClient.terminate()}}function wr(n,t){const e=typeof n=="object"?n:Ph(),r=typeof n=="string"?n:t||"(default)",s=Ah(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=_u("firestore");o&&Ip(s,...o)}return s}function Ti(n){return n._firestoreClient||ll(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ll(n){var t,e,r;const s=n._freezeSettings(),o=function(l,h,f,p){return new ed(l,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,al(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new mp(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Me(_t.fromBase64String(t))}catch(e){throw new N(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Me(_t.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=/^__.*__$/;class bp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ne(t,this.data,this.fieldMask,e,this.fieldTransforms):new kn(t,this.data,e,this.fieldTransforms)}}class ul{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new ne(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function hl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}class Ai{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Ai(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Ar(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(hl(this.fu)&&Ap.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Sp{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Nr(t)}Fu(t,e,r,s=!1){return new Ai({fu:t,methodName:e,vu:r,path:lt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bi(n){const t=n._freezeSettings(),e=Nr(n._databaseId);return new Sp(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Rp(n,t,e,r,s,o={}){const a=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);Si("Data must be an object, but it was:",a,r);const l=dl(r,a);let h,f;if(o.merge)h=new At(a.fieldMask),f=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const w of o.mergeFields){const I=qs(t,w,e);if(!a.contains(I))throw new N(R.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);pl(p,I)||p.push(I)}h=new At(p),f=a.fieldTransforms.filter(w=>h.covers(w.field))}else h=null,f=a.fieldTransforms;return new bp(new Tt(l),h,f)}class jr extends Ii{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof jr}}function Pp(n,t,e,r){const s=n.Fu(1,t,e);Si("Data must be an object, but it was:",s,r);const o=[],a=Tt.empty();me(r,(h,f)=>{const p=Ri(t,h,e);f=Ut(f);const w=s.Su(p);if(f instanceof jr)o.push(p);else{const I=Ln(f,w);I!=null&&(o.push(p),a.set(p,I))}});const l=new At(o);return new ul(a,l,s.fieldTransforms)}function Dp(n,t,e,r,s,o){const a=n.Fu(1,t,e),l=[qs(t,r,e)],h=[s];if(o.length%2!=0)throw new N(R.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)l.push(qs(t,o[I])),h.push(o[I+1]);const f=[],p=Tt.empty();for(let I=l.length-1;I>=0;--I)if(!pl(f,l[I])){const S=l[I];let C=h[I];C=Ut(C);const k=a.Su(S);if(C instanceof jr)f.push(S);else{const V=Ln(C,k);V!=null&&(f.push(S),p.set(S,V))}}const w=new At(f);return new ul(p,w,a.fieldTransforms)}function Cp(n,t,e,r=!1){return Ln(e,n.Fu(r?4:3,t))}function Ln(n,t){if(fl(n=Ut(n)))return Si("Unsupported field value:",t,n),dl(n,t);if(n instanceof Ii)return function(r,s){if(!hl(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const l of r){let h=Ln(l,s.bu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Id(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=rt.fromDate(r);return{timestampValue:Tr(s.serializer,o)}}if(r instanceof rt){const o=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Tr(s.serializer,o)}}if(r instanceof wi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Me)return{bytesValue:Cc(s.serializer,r._byteString)};if(r instanceof It){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:li(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Lr(r)}`)}(n,t)}function dl(n,t){const e={};return sc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):me(n,(r,s)=>{const o=Ln(s,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function fl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof rt||n instanceof wi||n instanceof Me||n instanceof It||n instanceof Ii)}function Si(n,t,e){if(!fl(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Lr(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function qs(n,t,e){if((t=Ut(t))instanceof Fr)return t._internalPath;if(typeof t=="string")return Ri(n,t);throw Ar("Field path arguments must be of type string or ",n,!1,void 0,e)}const Vp=new RegExp("[~\\*/\\[\\]]");function Ri(n,t,e){if(t.search(Vp)>=0)throw Ar(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Fr(...t.split("."))._internalPath}catch{throw Ar(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ar(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new N(R.INVALID_ARGUMENT,l+n+h)}function pl(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new kp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Pi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class kp extends ml{data(){return super.data()}}function Pi(n,t){return typeof t=="string"?Ri(n,t):t instanceof Fr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Di{}class xp extends Di{}function Op(n,t,...e){let r=[];t instanceof Di&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof Ci).length,l=o.filter(h=>h instanceof Br).length;if(a>1||a>0&&l>0)throw new N(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Br extends xp{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Br(t,e,r)}_apply(t){const e=this._parse(t);return gl(t._query,e),new $e(t.firestore,t.converter,xs(t._query,e))}_parse(t){const e=bi(t.firestore);return function(o,a,l,h,f,p,w){let I;if(f.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new N(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Da(w,p);const S=[];for(const C of w)S.push(Pa(h,o,C));I={arrayValue:{values:S}}}else I=Pa(h,o,w)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Da(w,p),I=Cp(l,a,w,p==="in"||p==="not-in");return nt.create(f,p,I)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Ra(n,t,e){const r=t,s=Pi("where",n);return Br._create(s,r,e)}class Ci extends Di{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ci(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Dt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const l=o.getFlattenedFilters();for(const h of l)gl(a,h),a=xs(a,h)}(t._query,e),new $e(t.firestore,t.converter,xs(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Pa(n,t,e){if(typeof(e=Ut(e))=="string"){if(e==="")throw new N(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!fc(t)&&e.indexOf("/")!==-1)throw new N(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Y.fromString(e));if(!O.isDocumentKey(r))throw new N(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Yo(n,new O(r))}if(e instanceof It)return Yo(n,e._key);throw new N(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Lr(e)}.`)}function Da(n,t){if(!Array.isArray(n)||n.length===0)throw new N(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function gl(n,t){const e=function(s,o){for(const a of s)for(const l of a.getFlattenedFilters())if(o.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new N(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Lp{convertValue(t,e="none"){switch(pe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(fe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw L()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return me(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new wi(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ei(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(wn(t));default:return null}}convertTimestamp(t){const e=te(t);return new rt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);W(Lc(r));const s=new An(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||$t(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class yl extends ml{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ur(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Pi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class ur extends yl{data(t={}){return super.data(t)}}class Fp{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new pn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ur(this._firestore,this._userDataWriter,r.key,r,new pn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const h=new ur(s._firestore,s._userDataWriter,l.doc.key,l.doc,new pn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const h=new ur(s._firestore,s._userDataWriter,l.doc.key,l.doc,new pn(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,p=-1;return l.type!==0&&(f=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:jp(l.type),doc:h,oldIndex:f,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function jp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n){n=zt(n,It);const t=zt(n.firestore,qe);return vp(Ti(t),n._key).then(e=>Up(t,n,e))}class _l extends Lp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Me(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,e)}}function Vi(n){n=zt(n,$e);const t=zt(n.firestore,qe),e=Ti(t),r=new _l(t);return Np(n._query),Ep(e,n._query).then(s=>new Fp(t,r,n,s))}function _e(n,t,e,...r){n=zt(n,It);const s=zt(n.firestore,qe),o=bi(s);let a;return a=typeof(t=Ut(t))=="string"||t instanceof Fr?Dp(o,"updateDoc",n._key,t,e,r):Pp(o,"updateDoc",n._key,t),ki(s,[a.toMutation(n._key,Pt.exists(!0))])}function Bp(n){return ki(zt(n.firestore,qe),[new oi(n._key,Pt.none())])}function vl(n,t){const e=zt(n.firestore,qe),r=Ot(n),s=Mp(n.converter,t);return ki(e,[Rp(bi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Pt.exists(!1))]).then(()=>r)}function ki(n,t){return function(r,s){const o=new jt;return r.asyncQueue.enqueueAndForget(async()=>op(await _p(r),s,o)),o.promise}(Ti(n),t)}function Up(n,t,e){const r=e.docs.get(t._key),s=new _l(n);return new yl(n,s,t._key,r,new pn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){je=s})(Rh),mr(new En("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),l=new qe(new Bh(r.getProvider("auth-internal")),new zh(r.getProvider("app-check-internal")),function(f,p){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new An(f.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),Pe(Ho,"4.6.3",t),Pe(Ho,"4.6.3","esm2017")})();var $p="firebase",qp="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe($p,qp,"app");const zp="passapikey";let El={};try{const n=await fetch("http://localhost:8080/apikey",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pass:zp})}),t=await n.json();n.ok?El={apiKey:t.apiKey,authDomain:t.authDomain,projectId:t.projectId,storageBucket:t.storageBucket,messagingSenderId:t.messagingSenderId,appId:t.appId}:console.error(t.error)}catch(n){console.error("Error:",n)}const br=Ha(El),Ct=wr(br);async function Gp(){try{const n=Pn(Ct,"projects");return(await Vi(n)).docs.map(r=>{const s=r.data();return{id:r.id,name:s.name,desc:s.desc,ownerId:s.ownerId,stories:s.stories}})}catch(n){return console.error("Error loading projects from Firebase:",n),[]}}async function Hp(n){try{const t=Pn(Ct,"projects");await vl(t,{name:n.name,desc:n.desc,ownerId:n.ownerId})}catch(t){console.error("Error creating project and saving to Firebase:",t)}}async function le(n){try{const t=Ot(Ct,"projects",n),e=await ye(t);if(e.exists()){const r=e.data();return{id:e.id,name:r.name,desc:r.desc,ownerId:r.ownerId,stories:r.stories}}else{console.error("No such project!");return}}catch(t){console.error("Error getting project from Firebase:",t);return}}async function Kp(n,t){try{const e=Ot(Ct,"projects",n);await _e(e,t)}catch(e){console.error("Error updating project:",e)}}async function Wp(n){try{const t=Ot(Ct,"projects",n);await Bp(t)}catch(t){console.error("Error deleting project:",t)}}async function Re(n,t){try{const e=await le(n);return e&&e.stories?e.stories.find(r=>r.id===t):void 0}catch(e){console.error("Error getting story from Firebase:",e);return}}async function Qp(n,t){try{const e=Ot(Ct,"projects",n),r=await ye(e);if(r.exists()){const s=r.data();s.stories||(s.stories=[]),s.stories.push(t),await _e(e,{stories:s.stories})}else console.error("No such project!")}catch(e){console.error("Error adding story:",e)}}async function Yp(n,t){try{const e=Ot(Ct,"projects",n),r=await ye(e);if(r.exists()){const s=r.data();if(s.stories){const o=s.stories.findIndex(a=>a.id===t.id);o!==-1?(s.stories[o]={...s.stories[o],...t},await _e(e,{stories:s.stories})):console.error("Story not found in project")}else console.error("No stories found in project")}else console.error("No such project!")}catch(e){console.error("Error updating story:",e)}}async function Xp(n,t){try{const e=Ot(Ct,"projects",n),r=await ye(e);if(r.exists()){const s=r.data();if(s.stories){const o=s.stories.findIndex(a=>a.id===t);o!==-1?(s.stories.splice(o,1),await _e(e,{stories:s.stories})):console.error("Story not found in project")}else console.error("No stories found in project")}else console.error("No such project!")}catch(e){console.error("Error deleting story:",e)}}async function Jp(n,t,e){try{const r=Ot(Ct,"projects",n),s=await ye(r);if(s.exists()){const o=s.data(),a=o.stories?.find(l=>l.id===t);a?(a.tasks||(a.tasks=[]),a.tasks.push(e),await _e(r,{stories:o.stories})):console.error("No such story in project")}else console.error("No such project!")}catch(r){console.error("Error adding task:",r)}}async function Ca(n,t,e){try{const r=Ot(Ct,"projects",n),s=await ye(r);if(s.exists()){const o=s.data(),a=o.stories?.find(l=>l.id===t);if(a&&a.tasks){const l=a.tasks.findIndex(h=>h.id===e.id);l!==-1?(a.tasks[l]={...a.tasks[l],...e},await _e(r,{stories:o.stories})):console.error("Task not found in story")}else console.error("No tasks found in story")}else console.error("No such project!")}catch(r){console.error("Error updating task:",r)}}async function Zp(n,t,e){try{const r=Ot(Ct,"projects",n),s=await ye(r);if(s.exists()){const o=s.data(),a=o.stories?.find(l=>l.id===t);if(a&&a.tasks){const l=a.tasks.findIndex(h=>h.id===e);l!==-1?(a.tasks.splice(l,1),await _e(r,{stories:o.stories})):console.error("Task not found in story")}else console.error("No tasks found in story")}else console.error("No such project!")}catch(r){console.error("Error deleting task:",r)}}var Ce=(n=>(n.LOW="Low",n.MEDIUM="Medium",n.HIGH="High",n))(Ce||{}),Rt=(n=>(n.TODO="Todo",n.DOING="Doing",n.DONE="Done",n))(Rt||{}),hr=(n=>(n.LOW="Low",n.MEDIUM="Medium",n.HIGH="High",n))(hr||{}),Vt=(n=>(n.TODO="Todo",n.DOING="Doing",n.DONE="Done",n))(Vt||{}),vn=(n=>(n.ADMIN="admin",n.DEVOPS="devops",n.DEVELOPER="developer",n))(vn||{});function tm(n,t){let e;if(t.currentStoryId!=null&&n.stories&&(e=n.stories.find(l=>l.id===t.currentStoryId)),!n||!e)return"";async function r(){const l=wr(br),h=Pn(l,"users"),f=await Vi(h),p=document.getElementById("editTaskUserAssigned");p.innerHTML="",f.forEach(w=>{const I=w.data();if(I.role!=vn.ADMIN){const S=document.createElement("option");S.value=JSON.stringify({id:I.id,firstName:I.firstName,lastName:I.lastName,role:I.role}),S.textContent=I.firstName+" ("+I.role+")",p.appendChild(S)}})}r();const s={[Vt.TODO]:e.tasks?.filter(l=>l.status===Vt.TODO)||[],[Vt.DOING]:e.tasks?.filter(l=>l.status===Vt.DOING)||[],[Vt.DONE]:e.tasks?.filter(l=>l.status===Vt.DONE)||[]},o=l=>l.map(h=>`<div class="p-4 w-[17em] mx-auto m-4 bg-white dark:bg-gray-700 shadow-md rounded-lg mb-4">
            <h3 class="text-xl font-semibold mb-2">${h.name}</h3>
            <p class="mb-2">Opis: ${h.description}</p>
            <p class="mb-2">Priorytet: ${h.priority}</p>
            <p class="mb-2">Status: ${h.status}</p>
            <p class="mb-2">Data Utworzenia: ${new Date(h.addedDate).toLocaleString()}</p>
            ${h.startWorkDate==null?"":`<p class="mb-2">Data Startu: ${new Date(h.startWorkDate).toLocaleString()}</p>`}
            ${h.endDate===void 0||h.endDate===0?"":`<p class="mb-2">Data Zakończenia: ${new Date(h.endDate).toLocaleString()}</p>`}
            <p class="mb-2">Wykonawca: ${h.userAssigned?h.userAssigned?.firstName:"<i>brak</i>"}</p>
            <p class="mb-2">Przewidywany czas wykonania: ${h.estimatedTime?h.estimatedTime:"<i>brak</i>"}</            ><div class="flex space-x-2">
            <button class="editTask bg-yellow-500 text-white py-1 px-2 rounded" data-task-id="${h.id}">Edytuj</button>
            <button class="deleteTask bg-red-500 text-white py-1 px-2 rounded" data-task-id="${h.id}">Usuń</button>
            ${h.userAssigned===void 0?"":` <button class="endTask bg-green-700 text-white py-1 px-2 rounded" data-task-id="${h.id}">${h.endDate==0||h.endDate==null?"Zakończ":"Wznów"}</button>`}
          </div>
        </div>`).join(""),a=`
  <div class="py-10 grid grid-cols-1 xl:grid-cols-3 gap-4">
    <div class="col-span-1">
      <h2 class="text-lg text-center font-semibold mb-4">TODO</h2>
      ${o(s[Vt.TODO])}
    </div>
    <div class="col-span-1 ">
      <h2 class="text-lg text-center font-semibold mb-4">DOING</h2>
      ${o(s[Vt.DOING])}
    </div>
    <div class="col-span-1">
      <h2 class="text-lg text-center font-semibold mb-4">DONE</h2>
      ${o(s[Vt.DONE])}
    </div>
  </div>
`;return`
  <div class="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
    <div class=taskContainer inline-block data-project=${n.id} data-story=${e.id} mb-4">
      <button class="exitStoryIn px-10 text-lg font-bold mb-2">←</button>
      <h1 class="text-2xl font-bold mb-4">Story: ${e.name}</h1>
      <button class="addTask bg-blue-500 text-white py-2 px-4 rounded">Dodaj Zadanie</button>
    </div>
    <dialog id="editTaskDialog" class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-bold mb-4">Edytuj Zadanie</h2>
      <label for="editTaskName" class="block mb-2">Nazwa zadania:</label>
      <input type="text" id="editTaskName" name="editTaskName" class="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800">
      <label for="editTaskDescription" class="block mb-2">Opis:</label>
      <textarea id="editTaskDescription" name="editTaskDescription" class="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800"></textarea>
      <label for="editTaskPriority" class="block mb-2">Priorytet:</label>
      <select id="editTaskPriority" name="editTaskPriority" class="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800">
        <option value="${hr.LOW}">Low</option>
        <option value="${hr.MEDIUM}">Medium</option>
        <option value="${hr.HIGH}">High</option>
      </select>
      <label for="editTaskUserAssigned" class="block mb-2">Wykonawca:</label>
      <select id="editTaskUserAssigned" name="editTaskUserAssigned" class="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800">
      
      </select>
      <label for="editTaskEstimatedTime" class="block mb-2">Przewidywany czas wykonania (dni):</label>
      <input type="date" id="editTaskEstimatedTime" name="editTaskEstimatedTime" class="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800">
      <div class="flex justify-end space-x-2">
        <button id="saveTaskButton" class="bg-green-500 text-white py-2 px-4 rounded">Save</button>
        <button id="cancelEditTaskButton" class="bg-gray-500 text-white py-2 px-4 rounded" onclick="document.getElementById('editTaskDialog').close()">Cancel</button>
      </div>
    </dialog>
    <div class="taskList">
      ${a}
    </div>
  </div>`}function em(n,t){if(!n)return"";const e=o=>`
    <tr class="storyItem" data-id="${o.id}">
      <td class="border px-4 py-2">${o.name}</td>
      <td class="border px-4 py-2">${o.description}</td>
      <td class="border px-4 py-2">${o.owner.lastName}</td>
      <td class="border px-4 py-2">${o.priority}</td>
      <td class="border px-4 py-2">${o.status}</td>
      <td class="border px-4 py-2">${new Date(o.creationDate).toLocaleString()}</td>
      <td class="border px-4 py-2">
        <button class="editStoryBtn bg-yellow-500 text-white py-1 px-2 rounded mr-2">Edytuj</button>
        <button class="deleteStoryBtn bg-red-500 text-white py-1 px-2 rounded mr-2">Usuń</button>
        <button class="selectBtn bg-green-500 text-white py-1 px-2 rounded">Wybierz</button>
      </td>
    </tr>
  `,s=n.stories?.filter(o=>o)?.map(o=>e(o)).join("");return`${t.currentStoryId==null?`<div class="projectDetails p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
  <div class="projectInfo" data-id="${n.id}">   
    <button class="exitProject px-10 text-lg font-bold mb-2">←</button>    
    <h2 class="text-2xl font-bold mb-4">Nazwa: ${n.name}</h2>
    <p class="mb-4">Opis: ${n.desc}</p>
    <button class="addStoryBtn bg-blue-500 text-white py-2 px-4 rounded mb-4">Dodaj story</button>
  </div>
  <dialog id="editStoryDialog" class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md w-1/2">
        <h2 class="text-xl font-bold mb-4">Edytuj Story</h2>
        <label for="editStoryName" class="block mb-2">Nazwa:</label>
        <input type="text" id="editStoryName" name="editStoryName" class="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800">
        <label for="editStoryDescription" class="block mb-2">Opis:</label>
        <textarea id="editStoryDescription" name="editStoryDescription" class="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800"></textarea>
        <label for="editStoryPriority" class="block mb-2">Priorytet:</label>
        <select id="editStoryPriority" name="editStoryPriority" class="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800">
          <option value="${Ce.LOW}">Low</option>
          <option value="${Ce.MEDIUM}">Medium</option>
          <option value="${Ce.HIGH}">High</option>
        </select>
        <label for="editStoryStatus" class="block mb-2">Status:</label>
        <select id="editStoryStatus" name="editStoryStatus" class="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800">
          <option value="${Rt.TODO}">To Do</option>
          <option value="${Rt.DOING}">In Progress</option>
          <option value="${Rt.DONE}">Done</option>
        </select>
        
        <div class="flex justify-end space-x-2">
          <button id="saveStoryButton" class="bg-green-500 text-white py-2 px-4 rounded">Edytuj</button>
          <button id="cancelEditStoryButton" class="bg-gray-500 text-white py-2 px-4 rounded" onclick="document.getElementById('editStoryDialog').close()">Anuluj</button>
        </div>
      </dialog>
  <table class="storyTable  w-full bg-white dark:bg-gray-700">
    <thead class="bg-gray-200 dark:bg-gray-600">
      <tr>
        <th class="border  py-2">Nazwa</th>
        <th class="border  py-2">Opis</th>
        <th class="border  py-2">Właściciel</th>
        <th class="border  py-2">Priorytet</th>
        <th class="border  py-2">Status</th>
        <th class="border  py-2">Data utworzenia</th>
        <th class="border  py-2">Akcje</th>
      </tr>
    </thead>
    <tbody>
      ${s}
    </tbody>
  </table>
  
</div>`:tm(n,t)}
  `}const Tl="http://localhost:8080";async function nm(n,t){try{const e=await fetch(`${Tl}/token`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:t,exp:60})});if(!e.ok)throw new Error("Failed to login");const r=await e.json();localStorage.setItem("token",r.token),localStorage.setItem("refreshToken",r.refreshToken),console.log("Login successful:",r)}catch(e){console.error("Error during login:",e)}}async function rm(){const n=localStorage.getItem("refreshToken");if(!n)return console.log("No refresh token available"),0;try{const t=await fetch(`${Tl}/refreshToken`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refreshToken:n})});if(t.status===400)return console.log("Bad refresh token"),0;const e=await t.json();localStorage.setItem("token",e.token),localStorage.setItem("refreshToken",e.refreshToken),console.log("Token refreshed")}catch(t){console.error("Error refreshing token:",t)}}async function sm(){let n=localStorage.getItem("token");if(!n||im(n)){if(await rm()==0)return 0;n=localStorage.getItem("token")}return n}function im(n){const t=JSON.parse(atob(n.split(".")[1]));return Date.now()>=t.exp*1e3}function om(n){async function t(){const r=document.getElementById("loginInput"),s=document.getElementById("passwordInput");if(!r||!s){console.error("Login or password input element not found");return}const o=r.value,a=s.value,l=wr(br),h=Pn(l,"users"),f=Op(h,Ra("login","==",o),Ra("password","==",a)),p=await Vi(f);if(p.empty)alert("Nie ma takiego użytkownika");else try{await nm(o,a);const w=p.docs[0],I=w.data();n.logout(),n.login({id:w.id,firstName:I.firstName,lastName:I.lastName,role:I.role}),location.reload()}catch(w){console.error("Error during login:",w)}r.value="",s.value=""}async function e(){const r=document.getElementById("login"),s=document.getElementById("password"),o=document.getElementById("firstName"),a=document.getElementById("lastName"),l=document.getElementById("role");if(!r&&!s&&!o&&!a&&!l){alert("Fill all fields");return}const h=r.value,f=s.value,p=o.value,w=a.value,I=l.value;if(h===""||f===""||p===""||w===""||I===""){alert("Fill all fields");return}const S=wr(br);try{const C=Pn(S,"users");await vl(C,{login:h,password:f,firstName:p,lastName:w,role:I});const k=document.getElementById("registerDialog");k&&k.close()}catch(C){console.error("Error creating user and saving to Firebase:",C)}}return window.addEventListener("mouseup",()=>{const r=document.getElementById("loginBtn");r?.addEventListener("click",t),document.getElementById("passwordInput")?.addEventListener("keypress",h=>{h.key==="Enter"&&(h.preventDefault(),r?.click())}),document.getElementById("registerBtn")?.addEventListener("click",()=>{document.getElementById("registerDialog")?.showModal()}),document.getElementById("saveRegisterButton")?.addEventListener("click",e),document.getElementById("logoutBtn")?.addEventListener("click",()=>{n.logout(),location.reload()})}),`
    <div class="loginContainer text-right">${n.loggedInUser==null?`<input class="pl-3" type="text" id="loginInput" placeholder="Login">
    <input class="pl-3" type="password" id="passwordInput" placeholder="Password">
    <button class="bg-green-300 text-black font-bold" id="loginBtn">Login</button>
    <button class="bg-green-500 text-black font-bold" id="registerBtn">Register</button>`:`
        
        <p class="inline-block">Hello ${n.loggedInUser.firstName}!</p>
        <button class="bg-red-500 text-black font-bold" id="logoutBtn">Logout</button>`}
    </div>
    <dialog id="registerDialog" class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-4">Register</h2>
        <label for="login" class="block mb-2">Login:</label>
        <input type="text" id="login" name="login" class="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800">
        <label for="password" class="block mb-2">Password:</label>
        <input type="password" id="password" name="password" class="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800">
        <label for="firstName" class="block mb-2">First Name:</label>
        <input type="text" id="firstName" name="firstName" class="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800">
        <label for="lastName" class="block mb-2">Last Name:</label>
        <input type="text" id="lastName" name="lastName" class="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800">
        <label for="role" class="block mb-2">Role:</label>
        <select id="role" name="role" class="w-full p-2 mb-4 border rounded-lg dark:bg-gray-800">
          <option value="${vn.ADMIN}">Admin</option>
          <option value="${vn.DEVELOPER}">Developer</option>
          <option value="${vn.DEVOPS}">DevOps</option>
        </select>
        <div class="flex justify-end space-x-2">
          <button id="saveRegisterButton" class="bg-green-500 text-white py-2 px-4 rounded">Register</button>
          <button id="cancelRegisterButton" class="bg-gray-500 text-white py-2 px-4 rounded" onclick="document.getElementById('registerDialog')?.close()">Cancel</button>
        </div>
      </dialog>
  `}function am(n,t){const e=document.getElementById("notification-container");e&&(e.innerHTML=n.map((r,s)=>`
      <div class="notification ${r.read?"opacity-25":""} border-b-2 cursor-pointer p-4 my-5" data-index="${s}">
        <h3 class="text-lg font-bold">${r.title}</h3>
        <p>${r.message}</p>
        <div class="date float-end text-xs">${new Date(r.date).toLocaleString()}</div>
      </div>
    `).join(""),e.querySelectorAll(".notification").forEach(r=>{r.addEventListener("click",s=>{const o=s.currentTarget.getAttribute("data-index");o!==null&&t.markAsRead(parseInt(o,10))})}))}function cm(n){const t=document.getElementById("counter");t&&n>0?t.innerHTML=n.toString():t&&(t.innerHTML="")}async function lm(n,t){if(n.target.classList.contains("addBtn")){const e=prompt("Podaj nazwe projektu:"),r=prompt("Podaj opis projektu:");if(e===null||r===null||e===""||r===""||!t.loggedInUser)return;await Hp({name:e,desc:r,ownerId:t.loggedInUser.id}),await st({title:"Projekt stworzony!",message:`Nowy projekt ${e} został dodany`,date:new Date().toISOString(),priority:"medium",read:!1})}if(n.target.classList.contains("delBtn")){const e=n.target.getAttribute("data-id");if(!e)return;confirm("Napewno chcesz usunąć ten projekt?")&&await Wp(e),await st()}if(n.target.classList.contains("alertBox")&&document.getElementById("notification")?.showModal(),n.target.classList.contains("modBtn")){const e=n.target.getAttribute("data-id");if(!e)return;const r=await le(e);if(!r)return;const s=prompt("Podaj nazwe projektu:",r.name),o=prompt("Podaj opis projektu:",r.desc);if(s===null||o===null||s===""||o==="")return;await Kp(e,{name:s,desc:o}),await st()}if(n.target.classList.contains("chooseBtn")){const e=n.target.getAttribute("data-id");if(!e)return;t.setCurrentProject(e),await st()}if(n.target.classList.contains("exitProject")&&(t.setCurrentProject(null),await st()),n.target.classList.contains("navStory")&&(t.setCurrentStory(null),await st()),n.target.classList.contains("navHome")&&(t.setCurrentProject(null),t.setCurrentStory(null),await st()),n.target.classList.contains("exitStory")&&t.setCurrentStory(null),n.target.classList.contains("selectBtn")){const e=parseInt(n.target.closest(".storyItem")?.getAttribute("data-id")||"");isNaN(e)||t.setCurrentStory(e),st()}if(n.target.classList.contains("deleteStoryBtn")){const e=n.target.closest(".projectDetails")?.querySelector(".projectInfo")?.getAttribute("data-id")||"",r=parseInt(n.target.closest(".storyItem")?.getAttribute("data-id")||"");isNaN(r)||(confirm("Napewno chcesz usunąć to story?")&&e&&Xp(e,r),st())}if(n.target.classList.contains("editStoryBtn")){const e=parseInt(n.target.closest(".storyItem")?.getAttribute("data-id")||""),r=n.target.closest(".projectDetails")?.querySelector(".projectInfo")?.getAttribute("data-id")||"",s=document.getElementById("editStoryDialog");if(e!=null&&r!=null){const o=await Re(r,e);if(!isNaN(e)&&o!=null){const a=document.getElementById("editStoryName"),l=document.getElementById("editStoryDescription"),h=document.getElementById("editStoryPriority"),f=document.getElementById("editStoryStatus");a.value=o.name,l.value=o.description,h.value=o.priority,f.value=o.status,s?.showModal();const p=document.getElementById("saveStoryButton"),w=()=>{const I=a.value,S=l.value,C=h.value,k=f.value;I&&S&&e!=null&&t.loggedInUser&&r&&(Yp(r,{id:e,name:I,description:S,priority:C,status:k}),s?.close(),st())};p?.addEventListener("click",w),s?.addEventListener("close",()=>{p?.removeEventListener("click",w)})}}}if(n.target.classList.contains("addStoryBtn")){const e=n.target.closest(".projectDetails")?.querySelector(".projectInfo")?.getAttribute("data-id")||"",r=await le(e);if(e&&r!=null){const s=prompt("Enter the name of the new story:"),o=prompt("Enter the description of the new story:");let a=-1;if(r.stories?.forEach(l=>{l.id!=null&&l.id>a&&(a=l.id)}),s&&o&&t.loggedInUser){const l={id:a+1,name:s,description:o,priority:Ce.LOW,project:e,creationDate:Date.now(),status:Rt.TODO,owner:t.loggedInUser};l&&e&&Qp(e,l),st({title:"Nowe Story!",message:`Story ${s} zostało dodane`,date:new Date().toISOString(),priority:"low",read:!1})}}}if(n.target.classList.contains("addTask")){const e=n.target.closest(".taskContainer")?.getAttribute("data-project")||"",r=parseInt(n.target.closest(".taskContainer")?.getAttribute("data-story")||""),s=await Re(e,r),o=prompt("Enter the name of the new task:"),a=prompt("Enter the description of the new task:");let l=-1;if(s?.tasks?.forEach(h=>{h.id!=null&&h.id>l&&(l=h.id)}),o&&a&&s?.id!=null&&e){const h={id:l+1,name:o,description:a,priority:Ce.LOW,story:s.id,status:Rt.TODO,addedDate:Date.now()};Jp(e,s.id,h),st({title:"Nowe Zadanie!",message:`Zadanie ${o} zostało dodane`,date:new Date().toISOString(),priority:"low",read:!1})}}if(n.target.classList.contains("deleteTask")){const e=n.target.closest(".projectContainer")?.querySelector(".taskContainer")?.getAttribute("data-project")||"",r=parseInt(n.target.closest(".projectContainer")?.querySelector(".taskContainer")?.getAttribute("data-story")||""),s=await Re(e,r),o=await le(e),a=parseInt(n.target.getAttribute("data-task-id")||"");!isNaN(a)&&s?.id!=null&&o!=null&&o.id!=null&&(confirm("Napewno chcesz usunąć to zadanie?")&&Zp(o.id,s?.id,a),st())}if(n.target.classList.contains("endTask")){const e=parseInt(n.target.getAttribute("data-task-id")||""),r=n.target.closest(".projectContainer")?.querySelector(".taskContainer")?.getAttribute("data-project")||"",s=parseInt(n.target.closest(".projectContainer")?.querySelector(".taskContainer")?.getAttribute("data-story")||""),o=await Re(r,s),a=await le(r);if(!isNaN(e)&&o?.id!=null&&o.tasks!=null&&a!=null&&a.id!=null){const l=o.tasks.find(h=>h.id===e);if(l){let h;l.status===Rt.DONE?h={id:e,status:Rt.DOING,endDate:0}:h={id:e,status:Rt.DONE,endDate:Date.now()},Ca(a.id,o.id,h),st()}}}if(n.target.classList.contains("exitStoryIn")&&(t.setCurrentStory(null),st()),n.target.classList.contains("editTask")){const e=n.target.closest(".projectContainer")?.querySelector(".taskContainer")?.getAttribute("data-project")||"",r=parseInt(n.target.closest(".projectContainer")?.querySelector(".taskContainer")?.getAttribute("data-story")||""),s=await Re(e,r),o=parseInt(n.target.getAttribute("data-task-id")||""),a=document.getElementById("editTaskDialog");if(!isNaN(o)&&s?.id!=null&&s.tasks!=null){const l=s.tasks.find(h=>h.id===o);if(l){const h=document.getElementById("editTaskName"),f=document.getElementById("editTaskDescription"),p=document.getElementById("editTaskPriority"),w=document.getElementById("editTaskUserAssigned"),I=document.getElementById("editTaskEstimatedTime");h.value=l.name,f.value=l.description,p.value=l.priority,I.value=l.estimatedTime?.toString()||"",l.userAssigned&&(w.value=JSON.stringify(l.userAssigned)),a?.showModal();const S=document.getElementById("saveTaskButton"),C=()=>{const k=h.value,V=f.value,G=p.value,$=w.value,H=new Date(I.value)>new Date(Date.now())?I.value:void 0;let Z=Rt.TODO;if($!=null&&(Z=Rt.DOING),k&&V&&s!=null&&e&&s.id!=null){const bt={id:o,name:k,description:V,startWorkDate:$?Date.now():void 0,priority:G,status:Z,userAssigned:JSON.parse($),estimatedTime:H};Ca(e,s.id,bt),a?.close(),st()}};S?.addEventListener("click",C),a?.addEventListener("close",()=>{S?.removeEventListener("click",C)})}}}}var Va=!0;async function um(n,t,e){const r=document.querySelector("#app");r&&(r.innerHTML=`
                <h1 class="text-2xl font-bold mb-4">MenageAPP</h1>
                ${om(t)}
                <div>
                    <a class="navBar navHome hover:text-cyan-500 hover:cursor-pointer ml-4">~</a>
                    <b> / </b>
                    <a class="navBar navStory hover:text-cyan-500 hover:cursor-pointer">
                        ${t.currentProjectId!=null?(await le(t.currentProjectId))?.name:""} 
                    </a>
                    ${t.currentProjectId!=null?"<b> / </b>":""}
                    <a class="navBar navTask hover:text-cyan-500 hover:cursor-pointer">
                        ${t.currentStoryId!=null&&t.currentProjectId?(await Re(t.currentProjectId,t.currentStoryId))?.name:""} 
                    </a>
                </div>
                <div>
                    <dialog id="notification" class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                        <h2 class="text-xl font-bold mb-4">Powiadomienia</h2>
                        <div id="notification-container"><p class="text-center py-5">Pusto</p></div>
                        <div class="flex justify-end space-x-2">
                            <button id="cancelRegisterButton" class="bg-gray-500 text-white py-2 px-4 rounded" onclick="document.getElementById('notification')?.close()">Zamknij</button>
                        </div>
                    </dialog>
                </div>
                 <div class="fixed right-3 top-25 w-80 bg-blue-900 text-white hidden rounded-xl shadow-lg p-4" id="notificationDialog">
                    <div class="font-bold text-lg" id="notificationTitle"></div>
                    <div class="mt-2" id="notificationMessage"></div>
                </div>
                <div class="absolute right-10 lg:right-[17%] top-5">
                    <span id="counter" class="absolute alertbox pl-[7.5px] pointer-events-none pt-0.5 font-bold"></span>
                    <i class="alertBox cursor-pointer text-orange-500 pr-2 fa fa-bell" style="font-size:24px"></i>
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" id="themeToggle" class="sr-only peer" checked>
                        <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>   
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Jasny Motyw</span>
                    </label>
                </div>
                ${t.currentProjectId==null&&t.loggedInUser?' <div class="text-center text-3xl my-4"><button class="addBtn bg-blue-500 text-white py-2 px-4 rounded">+</Button></div>':""}
                ${t.loggedInUser?"":'<div class="text-4xl hover:text-gray-400 text-center mt-[25%]">Zaloguj się zeby zobaczyć projekty</div>'}
                <div class="projectContainer flex-col  ${t.loggedInUser?"flex":"hidden"} ">
                    ${t.currentProjectId==null?n.map(a=>`
                                    <div class="  border-r-8 rounded-md mx-auto w-1/2 bg-gray-300 dark:bg-gray-500 ${a.ownerId===t.loggedInUser?.id?"border-green-600":"border-orange-500"} p-4 m-4" data-id="${a.id}">
                                        <h2 class="text-3xl font-semibold">${a.name}</h2>
                                        <p class="mb-2 py-2">${a.desc}</p>
                                        <button class="modBtn bg-yellow-500 text-white py-1 px-2 rounded mr-2" data-id="${a.id}">Edytuj</button>
                                        <button class="delBtn bg-red-500 text-white py-1 px-2 rounded mr-2" data-id="${a.id}">Usuń</button>
                                        <button class="chooseBtn bg-green-500 text-white py-1 px-2 rounded" data-id="${a.id}">Wybierz</button>
                                    </div>
                                `).join(""):em(await le(t.currentProjectId),t)}
                </div>
            `,e.unreadCount().subscribe(cm),e.list().subscribe(a=>am(a,e)),Va&&(Va=!1,document.addEventListener("click",a=>lm(a,t))));const s=document.getElementById("themeToggle");localStorage.getItem("theme")==="light"?(s.checked=!0,document.documentElement.classList.remove("dark")):(s.checked=!1,document.documentElement.classList.add("dark")),s.addEventListener("change",()=>{s.checked?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"))})}class Sr{static STORAGE_KEY="userSessionManagerData";loggedInUser;currentProjectId;currentStoryId;constructor(){const t=localStorage.getItem(Sr.STORAGE_KEY);if(t){const{loggedInUser:e,currentProjectId:r,currentStoryId:s}=JSON.parse(t);this.loggedInUser=e,this.currentProjectId=r,this.currentStoryId=s}else this.loggedInUser=null,this.currentProjectId=null,this.currentStoryId=null}saveToLocalStorage(){const t={loggedInUser:this.loggedInUser,currentProjectId:this.currentProjectId,currentStoryId:this.currentStoryId};localStorage.setItem(Sr.STORAGE_KEY,JSON.stringify(t))}login(t){this.loggedInUser=t,this.saveToLocalStorage()}logout(){this.loggedInUser=null,this.currentProjectId=null,this.currentStoryId=null,this.saveToLocalStorage()}setCurrentProject(t){this.currentProjectId=t,this.saveToLocalStorage()}setCurrentStory(t){this.currentStoryId=t,this.saveToLocalStorage()}}var zs=function(n,t){return zs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])},zs(n,t)};function Mn(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");zs(n,t);function e(){this.constructor=n}n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function Gs(n){var t=typeof Symbol=="function"&&Symbol.iterator,e=t&&n[t],r=0;if(e)return e.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Hs(n,t){var e=typeof Symbol=="function"&&n[Symbol.iterator];if(!e)return n;var r=e.call(n),s,o=[],a;try{for(;(t===void 0||t-- >0)&&!(s=r.next()).done;)o.push(s.value)}catch(l){a={error:l}}finally{try{s&&!s.done&&(e=r.return)&&e.call(r)}finally{if(a)throw a.error}}return o}function Ks(n,t,e){if(e||arguments.length===2)for(var r=0,s=t.length,o;r<s;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return n.concat(o||Array.prototype.slice.call(t))}function Bt(n){return typeof n=="function"}function Il(n){var t=function(r){Error.call(r),r.stack=new Error().stack},e=n(t);return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var Ts=Il(function(n){return function(e){n(this),this.message=e?e.length+` errors occurred during unsubscription:
`+e.map(function(r,s){return s+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=e}});function Ws(n,t){if(n){var e=n.indexOf(t);0<=e&&n.splice(e,1)}}var Ur=function(){function n(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return n.prototype.unsubscribe=function(){var t,e,r,s,o;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var l=Gs(a),h=l.next();!h.done;h=l.next()){var f=h.value;f.remove(this)}}catch(k){t={error:k}}finally{try{h&&!h.done&&(e=l.return)&&e.call(l)}finally{if(t)throw t.error}}else a.remove(this);var p=this.initialTeardown;if(Bt(p))try{p()}catch(k){o=k instanceof Ts?k.errors:[k]}var w=this._finalizers;if(w){this._finalizers=null;try{for(var I=Gs(w),S=I.next();!S.done;S=I.next()){var C=S.value;try{ka(C)}catch(k){o=o??[],k instanceof Ts?o=Ks(Ks([],Hs(o)),Hs(k.errors)):o.push(k)}}}catch(k){r={error:k}}finally{try{S&&!S.done&&(s=I.return)&&s.call(I)}finally{if(r)throw r.error}}}if(o)throw new Ts(o)}},n.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)ka(t);else{if(t instanceof n){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(t)}},n.prototype._hasParent=function(t){var e=this._parentage;return e===t||Array.isArray(e)&&e.includes(t)},n.prototype._addParent=function(t){var e=this._parentage;this._parentage=Array.isArray(e)?(e.push(t),e):e?[e,t]:t},n.prototype._removeParent=function(t){var e=this._parentage;e===t?this._parentage=null:Array.isArray(e)&&Ws(e,t)},n.prototype.remove=function(t){var e=this._finalizers;e&&Ws(e,t),t instanceof n&&t._removeParent(this)},n.EMPTY=function(){var t=new n;return t.closed=!0,t}(),n}(),wl=Ur.EMPTY;function Al(n){return n instanceof Ur||n&&"closed"in n&&Bt(n.remove)&&Bt(n.add)&&Bt(n.unsubscribe)}function ka(n){Bt(n)?n():n.unsubscribe()}var bl={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Sl={setTimeout:function(n,t){for(var e=[],r=2;r<arguments.length;r++)e[r-2]=arguments[r];return setTimeout.apply(void 0,Ks([n,t],Hs(e)))},clearTimeout:function(n){var t=Sl.delegate;return(t?.clearTimeout||clearTimeout)(n)},delegate:void 0};function hm(n){Sl.setTimeout(function(){throw n})}function Na(){}function dr(n){n()}var Rl=function(n){Mn(t,n);function t(e){var r=n.call(this)||this;return r.isStopped=!1,e?(r.destination=e,Al(e)&&e.add(r)):r.destination=mm,r}return t.create=function(e,r,s){return new Qs(e,r,s)},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){try{this.destination.error(e)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(Ur),dm=Function.prototype.bind;function Is(n,t){return dm.call(n,t)}var fm=function(){function n(t){this.partialObserver=t}return n.prototype.next=function(t){var e=this.partialObserver;if(e.next)try{e.next(t)}catch(r){ir(r)}},n.prototype.error=function(t){var e=this.partialObserver;if(e.error)try{e.error(t)}catch(r){ir(r)}else ir(t)},n.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(e){ir(e)}},n}(),Qs=function(n){Mn(t,n);function t(e,r,s){var o=n.call(this)||this,a;if(Bt(e)||!e)a={next:e??void 0,error:r??void 0,complete:s??void 0};else{var l;o&&bl.useDeprecatedNextContext?(l=Object.create(e),l.unsubscribe=function(){return o.unsubscribe()},a={next:e.next&&Is(e.next,l),error:e.error&&Is(e.error,l),complete:e.complete&&Is(e.complete,l)}):a=e}return o.destination=new fm(a),o}return t}(Rl);function ir(n){hm(n)}function pm(n){throw n}var mm={closed:!0,next:Na,error:pm,complete:Na},gm=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function ym(n){return n}function _m(n){return n.length===0?ym:n.length===1?n[0]:function(e){return n.reduce(function(r,s){return s(r)},e)}}var xa=function(){function n(t){t&&(this._subscribe=t)}return n.prototype.lift=function(t){var e=new n;return e.source=this,e.operator=t,e},n.prototype.subscribe=function(t,e,r){var s=this,o=Em(t)?t:new Qs(t,e,r);return dr(function(){var a=s,l=a.operator,h=a.source;o.add(l?l.call(o,h):h?s._subscribe(o):s._trySubscribe(o))}),o},n.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){t.error(e)}},n.prototype.forEach=function(t,e){var r=this;return e=Oa(e),new e(function(s,o){var a=new Qs({next:function(l){try{t(l)}catch(h){o(h),a.unsubscribe()}},error:o,complete:s});r.subscribe(a)})},n.prototype._subscribe=function(t){var e;return(e=this.source)===null||e===void 0?void 0:e.subscribe(t)},n.prototype[gm]=function(){return this},n.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return _m(t)(this)},n.prototype.toPromise=function(t){var e=this;return t=Oa(t),new t(function(r,s){var o;e.subscribe(function(a){return o=a},function(a){return s(a)},function(){return r(o)})})},n.create=function(t){return new n(t)},n}();function Oa(n){var t;return(t=n??bl.Promise)!==null&&t!==void 0?t:Promise}function vm(n){return n&&Bt(n.next)&&Bt(n.error)&&Bt(n.complete)}function Em(n){return n&&n instanceof Rl||vm(n)&&Al(n)}var Tm=Il(function(n){return function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Pl=function(n){Mn(t,n);function t(){var e=n.call(this)||this;return e.closed=!1,e.currentObservers=null,e.observers=[],e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return t.prototype.lift=function(e){var r=new La(this,this);return r.operator=e,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new Tm},t.prototype.next=function(e){var r=this;dr(function(){var s,o;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var a=Gs(r.currentObservers),l=a.next();!l.done;l=a.next()){var h=l.value;h.next(e)}}catch(f){s={error:f}}finally{try{l&&!l.done&&(o=a.return)&&o.call(a)}finally{if(s)throw s.error}}}})},t.prototype.error=function(e){var r=this;dr(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=e;for(var s=r.observers;s.length;)s.shift().error(e)}})},t.prototype.complete=function(){var e=this;dr(function(){if(e._throwIfClosed(),!e.isStopped){e.isStopped=!0;for(var r=e.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(e){return this._throwIfClosed(),n.prototype._trySubscribe.call(this,e)},t.prototype._subscribe=function(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)},t.prototype._innerSubscribe=function(e){var r=this,s=this,o=s.hasError,a=s.isStopped,l=s.observers;return o||a?wl:(this.currentObservers=null,l.push(e),new Ur(function(){r.currentObservers=null,Ws(l,e)}))},t.prototype._checkFinalizedStatuses=function(e){var r=this,s=r.hasError,o=r.thrownError,a=r.isStopped;s?e.error(o):a&&e.complete()},t.prototype.asObservable=function(){var e=new xa;return e.source=this,e},t.create=function(e,r){return new La(e,r)},t}(xa),La=function(n){Mn(t,n);function t(e,r){var s=n.call(this)||this;return s.destination=e,s.source=r,s}return t.prototype.next=function(e){var r,s;(s=(r=this.destination)===null||r===void 0?void 0:r.next)===null||s===void 0||s.call(r,e)},t.prototype.error=function(e){var r,s;(s=(r=this.destination)===null||r===void 0?void 0:r.error)===null||s===void 0||s.call(r,e)},t.prototype.complete=function(){var e,r;(r=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||r===void 0||r.call(e)},t.prototype._subscribe=function(e){var r,s;return(s=(r=this.source)===null||r===void 0?void 0:r.subscribe(e))!==null&&s!==void 0?s:wl},t}(Pl),Ma=function(n){Mn(t,n);function t(e){var r=n.call(this)||this;return r._value=e,r}return Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(e){var r=n.prototype._subscribe.call(this,e);return!r.closed&&e.next(this._value),r},t.prototype.getValue=function(){var e=this,r=e.hasError,s=e.thrownError,o=e._value;if(r)throw s;return this._throwIfClosed(),o},t.prototype.next=function(e){n.prototype.next.call(this,this._value=e)},t}(Pl);class Im{notifications=[];notificationsSubject=new Ma([]);unreadCountSubject=new Ma(0);send(t){this.notifications.unshift(t),this.notificationsSubject.next([...this.notifications]),this.updateUnreadCount(),(t.priority==="medium"||t.priority==="high")&&this.openDialog(t)}list(){return this.notificationsSubject.asObservable()}unreadCount(){return this.unreadCountSubject.asObservable()}markAsRead(t){t>=0&&t<this.notifications.length&&(this.notifications[t].read=!0,this.notificationsSubject.next([...this.notifications]),this.updateUnreadCount())}updateUnreadCount(){const t=this.notifications.filter(e=>!e.read).length;this.unreadCountSubject.next(t)}openDialog(t){const e=document.getElementById("notificationDialog"),r=document.getElementById("notificationTitle"),s=document.getElementById("notificationMessage");e&&r&&s?(r.innerText=t.title,s.innerText=t.message,e.classList.remove("hidden"),setTimeout(()=>{e.classList.add("hidden")},3e3)):console.log("Notification dialog element not found.")}}const we=new Sr,Fa=new Im;async function st(n){const e=(await Gp()).filter(r=>{const s=r.ownerId===we.loggedInUser?.id,o=r.stories?.some(a=>a.tasks?.some(l=>l.userAssigned?.firstName===we.loggedInUser?.firstName&&l.userAssigned?.lastName===we.loggedInUser?.lastName));return s||o});um(e,we,Fa),n&&Fa.send(n),we.loggedInUser&&await sm()==0&&(we.logout(),st({title:"Sesja wygasła!",message:"Twoja sesja wygasła zaloguj się ponownie",date:new Date().toISOString(),priority:"high",read:!1}))}st();
