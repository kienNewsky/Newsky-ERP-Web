/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class a{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const s=this.t;if(t&&void 0===e){const t=void 0!==s&&1===s.length;t&&(e=i.get(s)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(s,e))}return e}toString(){return this.cssText}}const n=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1]),e[0]);return new a(i,e,s)},o=(s,i)=>{if(t)s.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of i){const i=document.createElement("style"),a=e.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=t.cssText,s.appendChild(i)}},l=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,s))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:r,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:c,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,m=globalThis,w=m.trustedTypes,y=w?w.emptyScript:"",v=m.reactiveElementPolyfillSupport,g=(e,t)=>e,$={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},f=(e,t)=>!r(e,t),b={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class E extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&d(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:a}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const n=i?.call(this);a.call(this,t),this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const e=this.properties,t=[...c(e),...p(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EC(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){const a=(void 0!==s.converter?.toAttribute?s.converter:$).toAttribute(t,s.type);this._$Em=e,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=s.getPropertyOptions(i),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:$;this._$Em=i,this[i]=a.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,s){if(void 0!==e){if(s??=this.constructor.getPropertyOptions(e),!(s.hasChanged??f)(this[e],t))return;this.P(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,s){this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e)!0!==s.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],s)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[g("elementProperties")]=new Map,E[g("finalized")]=new Map,v?.({ReactiveElement:E}),(m.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N=globalThis,x=N.trustedTypes,A=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+_,C=`<${k}>`,D=document,I=()=>D.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,U=Array.isArray,R="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,j=/>/g,H=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,B=/"/g,M=/^(?:script|style|textarea|title)$/i,q=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),z=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),Q=new WeakMap,W=D.createTreeWalker(D,129);function J(e,t){if(!U(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}class G{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let a=0,n=0;const o=e.length-1,l=this.parts,[r,d]=((e,t)=>{const s=e.length-1,i=[];let a,n=2===t?"<svg>":3===t?"<math>":"",o=O;for(let t=0;t<s;t++){const s=e[t];let l,r,d=-1,h=0;for(;h<s.length&&(o.lastIndex=h,r=o.exec(s),null!==r);)h=o.lastIndex,o===O?"!--"===r[1]?o=P:void 0!==r[1]?o=j:void 0!==r[2]?(M.test(r[2])&&(a=RegExp("</"+r[2],"g")),o=H):void 0!==r[3]&&(o=H):o===H?">"===r[0]?(o=a??O,d=-1):void 0===r[1]?d=-2:(d=o.lastIndex-r[2].length,l=r[1],o=void 0===r[3]?H:'"'===r[3]?B:L):o===B||o===L?o=H:o===P||o===j?o=O:(o=H,a=void 0);const c=o===H&&e[t+1].startsWith("/>")?" ":"";n+=o===O?s+C:d>=0?(i.push(l),s.slice(0,d)+S+s.slice(d)+_+c):s+_+(-2===d?t:c)}return[J(e,n+(e[s]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]})(e,t);if(this.el=G.createElement(r,s),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=W.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(S)){const t=d[n++],s=i.getAttribute(e).split(_),o=/([.?@])?(.*)/.exec(t);l.push({type:1,index:a,name:o[2],strings:s,ctor:"."===o[1]?X:"?"===o[1]?ee:"@"===o[1]?te:Y}),i.removeAttribute(e)}else e.startsWith(_)&&(l.push({type:6,index:a}),i.removeAttribute(e));if(M.test(i.tagName)){const e=i.textContent.split(_),t=e.length-1;if(t>0){i.textContent=x?x.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],I()),W.nextNode(),l.push({type:2,index:++a});i.append(e[t],I())}}}else if(8===i.nodeType)if(i.data===k)l.push({type:2,index:a});else{let e=-1;for(;-1!==(e=i.data.indexOf(_,e+1));)l.push({type:7,index:a}),e+=_.length-1}a++}}static createElement(e,t){const s=D.createElement("template");return s.innerHTML=e,s}}function K(e,t,s=e,i){if(t===z)return t;let a=void 0!==i?s.o?.[i]:s.l;const n=T(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(e),a._$AT(e,s,i)),void 0!==i?(s.o??=[])[i]=a:s.l=a),void 0!==a&&(t=K(e,a._$AS(e,t.values),a,i)),t}class F{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??D).importNode(t,!0);W.currentNode=i;let a=W.nextNode(),n=0,o=0,l=s[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new Z(a,a.nextSibling,this,e):1===l.type?t=new l.ctor(a,l.name,l.strings,this,e):6===l.type&&(t=new se(a,this,e)),this._$AV.push(t),l=s[++o]}n!==l?.index&&(a=W.nextNode(),n++)}return W.currentNode=D,i}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class Z{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,t,s,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),T(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==z&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>U(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==V&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=G.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new F(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new G(e)),t}k(e){U(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const a of e)i===t.length?t.push(s=new Z(this.O(I()),this.O(I()),this,this.options)):s=t[i],s._$AI(a),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this.v=e,this._$AP?.(e))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,a){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=a,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}_$AI(e,t=this,s,i){const a=this.strings;let n=!1;if(void 0===a)e=K(this,e,t,0),n=!T(e)||e!==this._$AH&&e!==z,n&&(this._$AH=e);else{const i=e;let o,l;for(e=a[0],o=0;o<a.length-1;o++)l=K(this,i[s+o],t,o),l===z&&(l=this._$AH[o]),n||=!T(l)||l!==this._$AH[o],l===V?e=V:e!==V&&(e+=(l??"")+a[o+1]),this._$AH[o]=l}n&&!i&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class X extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}class ee extends Y{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}}class te extends Y{constructor(e,t,s,i,a){super(e,t,s,i,a),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??V)===z)return;const s=this._$AH,i=e===V&&s!==V||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==V&&(s===V||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const ie=N.litHtmlPolyfillSupport;ie?.(G,Z),(N.litHtmlVersions??=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ae extends E{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=((e,t,s)=>{const i=s?.renderBefore??t;let a=i._$litPart$;if(void 0===a){const e=s?.renderBefore??null;i._$litPart$=a=new Z(t.insertBefore(I(),e),e,void 0,s??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return z}}ae._$litElement$=!0,ae.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ae});const ne=globalThis.litElementPolyfillSupport;ne?.({LitElement:ae}),(globalThis.litElementVersions??=[]).push("4.1.0");class oe extends ae{static styles=n`
    .tree-node {
      padding: 2px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .tree-node.selected {
      background-color: #2196f3;
      color: white;
    }

    .tree-children {
      padding-left: 20px;
      display: none;
    }

    .tree-children.expanded {
      display: block;
    }

    .icon {
      margin-right: 5px;
      cursor: pointer;
    }

    .draggable {
      user-select: none;
    }

    .drop-target {
      border: 2px dashed #ccc;
    }

    .tree-node.highlight {
      background-color: yellow;
    }

    .tree-node.highlight.selected {
      background-color: black;
    }

    .toolbar {
      margin-bottom: 10px;
    }

    .search-input {
      padding: 5px;
      margin-left: 10px;
    }

    .highlight-text {
      color: red;
    }
  `;static properties={treeData:{type:Array},selectedNode:{type:Object},searchQuery:{type:String},rawData:{type:Array},catName:{type:String,attribute:"cat-name"},nodeIdShow:{type:String}};constructor(){super(),this.treeData=[],this.selectedNode=null,this.searchQuery="",this.catName||(this.catName="catName"),this.nodeIdShow=""}willUpdate(e){e.has("rawData")&&(this.treeData=this.buildTree(this.rawData),this.nodeIdShow&&this.showChildNode(this.nodeIdShow)),e.has("nodeIdShow")&&this.showChildNode(this.nodeIdShow)}expandAll(){this.modifyExpandState(this.treeData,!0)}collapseAll(){this.modifyExpandState(this.treeData,!1)}showChildNode(e){this.expandPathToNode(e,this.treeData),this.requestUpdate()}findRootNode(e,t){let s=this.findNodeById(e,t);if(!s)return null;for(;null!==s.isChildOf;)s=this.findNodeById(s.isChildOf,t);return s}updateNodeName(e,t){this.findNodeById(e,this.treeData)[this.catName]=t,this.requestUpdate()}findNodeById(e,t){for(let s of t){if(s.id===e)return s;if(s.children&&s.children.length){const t=this.findNodeById(e,s.children);if(t)return t}}return null}expandPathToNode(e,t){const s=this.findNodeById(e,t);s&&this.expandNodeAndAncestors(s,t)}expandNodeAndAncestors(e,t){if(e.expanded=!0,null!==e.isChildOf){const s=this.findNodeById(e.isChildOf,t);s&&(s.expanded=!0,this.expandNodeAndAncestors(s,t))}}modifyExpandState(e,t){e.forEach((e=>{e.expanded=t,e.children&&e.children.length&&this.modifyExpandState(e.children,t)})),this.requestUpdate()}handleSearchInput(e){this.searchQuery=e.target.value.toLowerCase(),this.expandAll()}searchHighlight(e){return this.searchQuery.length>0&&e[this.catName].toLowerCase().includes(this.searchQuery)}dragStart(e,t){e.dataTransfer.setData("text/plain",JSON.stringify({source:"treenode",data:t})),this.draggedNode=t}dragOver(e){e.preventDefault()}drop(e,t){e.preventDefault();const s=JSON.parse(e.dataTransfer.getData("text/plain")),i=s.data,a=s.source;if("treenode"===a){if(i.id===t.id)return;this.removeNodeById(this.treeData,i.id),t.children=t.children||[],t.children.push(i)}this.dispatchEvent(new CustomEvent("node-drop",{detail:{source:a,drag:i,target:t}})),this.requestUpdate()}removeNode(){null!==this.selectedNode&&alert(`You are considering remove node: ${JSON.stringify(this.selectedNode)}`)}newNode(){this.dispatchEvent(new CustomEvent("create-newnode",{detail:{currNode:this.selectedNode}}))}removeNodeById(e,t){for(let s=0;s<e.length;s++){if(e[s].id===t)return e.splice(s,1),!0;if(e[s].children&&e[s].children.length&&this.removeNodeById(e[s].children,t))return!0}return!1}buildTree(e){const t=[],s={};return e.forEach((e=>{s[e.id]={...e,children:[]}})),e.forEach((e=>{null===e.isChildOf?t.push(s[e.id]):s[e.isChildOf]&&s[e.isChildOf].children.push(s[e.id])})),t}toggleNode(e){e.expanded=!e.expanded,this.requestUpdate()}selectNode(e,t){this.selectedNode=e,this.requestUpdate();let s="none";t.ctrlKey&&(s="ctrl"),this.dispatchEvent(new CustomEvent("node-clicked",{detail:{data:e,key:s}}))}renderTree(e){return e.map((e=>{const t=this.searchHighlight(e);return q`
        <div
          class="tree-node ${this.selectedNode===e?"selected":""} ${t?"highlight":""} draggable"
          draggable="true"
          @dragstart=${t=>this.dragStart(t,e)}
          @dragover=${this.dragOver}
          @drop=${t=>this.drop(t,e)}
        >
          <span class="icon" @click=${()=>this.toggleNode(e)}>
            ${e.children&&e.children.length?e.expanded?"-":"+":""}
          </span>
          <span @click=${t=>this.selectNode(e,t)}
            >${this.renderNodeContent(e)}</span
          >
        </div>
        <div class="tree-children ${e.expanded?"expanded":""}">
          ${e.children?this.renderTree(e.children):""}
        </div>
      `}))}renderNodeContent(e){if(this.searchQuery.length>0){const t=e[this.catName].toLowerCase().indexOf(this.searchQuery);if(-1===t)return e[this.catName];const s=e[this.catName].slice(0,t),i=e[this.catName].slice(t,t+this.searchQuery.length),a=e[this.catName].slice(t+this.searchQuery.length);return q`
        ${s}<span class="highlight-text">${i}</span
        >${a}
      `}return e[this.catName]}render(){return q`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div class="w3-bar w3-light-grey w3-padding-small">
        <button class="w3-bar-item w3-button" @click=${this.expandAll}>
          <i class="fa fa-solid fa-chevron-down"></i>
        </button>
        <button class="w3-bar-item w3-button" @click=${this.collapseAll}>
          <i class="fa fa-solid fa-chevron-up"></i>
        </button>
        <button class="w3-bar-item w3-button" @click=${this.newNode}>
          <i class="fa fa-solid fa-plus"></i>
        </button>
        <button class="w3-bar-item w3-button" @click=${this.removeNode}>
          <i class="fa fa-solid fa-minus"></i>
        </button>
        <input
          class="w3-bar-item w3-input w3-right"
          type="text"
          placeholder="Search..."
          @input=${this.handleSearchInput}
        />
      </div>
      <div style=" max-height: 80vh; overflow-y: auto;">
        ${this.renderTree(this.treeData)}
      </div>
    `}}function le(e,t,s,i,a,n){return n?fetch(`${t}${s}`,{method:e,headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json",UserName:a},body:JSON.stringify(n)}):fetch(`${t}${s}`,{method:e,headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json",UserName:a}})}function re(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return!1;const t=new Date(e);return t instanceof Date&&!isNaN(t)}class de extends ae{static properties={deptId:{type:String,attribute:"dept-id"},deptName:{type:String},isActive:{type:Boolean},isChildOf:{type:String},keyRender:{type:Number}};constructor(){super(),this.deptName="",this.isActive=!0,this.isChildOf="",this.keyRender=0}connectedCallback(){super.connectedCallback(),0===this.keyRender&&(this.loadDepartmentDetail(),this.keyRender=1)}willUpdate(e){e.has("deptId")&&this.keyRender>0&&this.loadDepartmentDetail()}async loadDepartmentDetail(){try{const e=await le("GET",window.sqlHost,`/employee-service/department/${this.deptId}`,window.token,window.username);if(!e.ok)throw new Error(`Response status: ${e.status}`);const t=await e.json();t&&(this.deptName=t.deptName,this.isActive=t.isActive,this.isChildOf=t.isChildOf)}catch(e){console.log(e)}}async saveDepartment(e){e.preventDefault();try{const e=await le("PUT",window.sqlHost,`/employee-service/department/${this.deptId}`,window.token,window.username,{deptName:this.deptName,isActive:this.isActive,isChildOf:this.isChildOf});if(!e.ok)throw new Error(`Response status: ${e.status}`);const t=await e.json();t&&this.dispatchEvent(new CustomEvent("save-department",{bubbles:!0,composed:!0,detail:t}))}catch(e){console.log(e)}}async deleteDepartment(e){e.preventDefault();try{const e=await le("DELETE",window.sqlHost,`/employee-service/department/${this.deptId}`,window.token,window.username);if(!e.ok)throw new Error(`Response status: ${e.status}`);await e.json()&&this.dispatchEvent(new CustomEvent("delete-department",{bubbles:!0,composed:!0,detail:{id:this.deptId,deptName:this.deptName,isActive:this.isActive,isChildOf:this.isChildOf}}))}catch(e){console.log(e)}}cancelDetail(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("cancel-detail",{bubbles:!0,composed:!0,detail:{id:this.deptId,deptName:this.deptName,isActive:this.isActive,isChildOf:this.isChildOf}}))}render(){return q`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />

      <div class="w3-row" style="padding-top: 10px">
        <span class="w3-xxlarge w3-text-indigo">Sửa một phòng ban</span>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <label>Tên phòng ban</label>
        <input
          class="w3-input"
          type="text"
          .value=${this.deptName}
          @input=${e=>this.deptName=e.target.value}
        />
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <input
          class="w3-check"
          type="checkbox"
          .checked=${this.isActive}
          @click=${()=>{this.isActive=!this.isActive}}
        />
        <label>${this.isActive?"Đang ":"Dừng "} sử dụng</label>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <button
          class="w3-button w3-teal w3-round-xlarge"
          @click=${this.saveDepartment}
        >
          Save
        </button>
        <button
          class="w3-button w3-orange w3-round-xlarge"
          @click=${this.deleteDepartment}
        >
          Delete
        </button>
        <button
          class="w3-button w3-khaki w3-round-xlarge"
          @click=${this.cancelDetail}
        >
          Cancel
        </button>
      </div>
    `}}class he extends ae{static properties={parentId:{type:String,attribute:"parent-id"},deptName:{type:String},isActive:{type:Boolean},isChildOf:{type:String},isRoot:{type:Boolean}};constructor(){super(),this.deptName="",this.isActive=!0,this.isChildOf="",this.isRoot=!1}connectedCallback(){super.connectedCallback(),this.isChildOf=this.parentId}async saveDepartment(e){e.preventDefault();try{const e=await le("POST",window.sqlHost,"/employee-service/department",window.token,window.username,{deptName:this.deptName,isActive:this.isActive,isChildOf:this.isRoot?null:this.isChildOf});if(!e.ok)throw new Error(`Response status: ${e.status}`);const t=await e.json();t&&this.dispatchEvent(new CustomEvent("addnew-department",{bubbles:!0,composed:!0,detail:t}))}catch(e){console.log(e)}}cancelDetail(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("cancel-detail",{bubbles:!0,composed:!0,detail:{id:this.deptId,deptName:this.deptName,isActive:this.isActive,isChildOf:this.isChildOf}}))}render(){return q`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <div class="w3-row">
        <span class="w3-xxlarge w3-text-indigo">Thêm một phòng ban</span>
      </div>
      <div class="w3-row">
        <span class="w3-xlarge w3-text-indigo">là cấp dưới của: </span>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <label>Tên phòng ban</label>
        <input
          class="w3-input"
          type="text"
          .value=${this.deptName}
          @input=${e=>this.deptName=e.target.value}
        />
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <input
          class="w3-check"
          type="checkbox"
          .checked=${this.isRoot}
          @click=${()=>{this.isRoot=!this.isRoot}}
        />
        <label>Chuyển thành phòng ban chính</label>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <button
          class="w3-button w3-teal w3-round-xlarge"
          @click=${this.saveDepartment}
        >
          Save
        </button>
        <button
          class="w3-button w3-khaki w3-round-xlarge"
          @click=${this.cancelDetail}
        >
          Cancel
        </button>
      </div>
    `}}class ce extends ae{static properties={deptId:{type:String},lastName:{type:String},firstName:{type:String},jobTitle:{type:String},sex:{type:String},birthDate:{type:String},startDate:{type:String},address:{type:String},handPhone:{type:String},email:{type:String},IsUser:{type:Boolean},jobDescription:{type:String}};constructor(){super(),this.lastName="",this.firstName="",this.jobTitle="",this.sex="female",this.birthDate="",this.startDate="",this.address="",this.handPhone="",this.email="",this.IsUser=!1,this.jobDescription=""}async saveEmployee(e){e.preventDefault();try{const e=await le("POST",window.sqlHost,"/employee-service/employee",window.token,window.username,{lastName:this.lastName,firstName:this.firstName,title:this.jobTitle,sex:this.sex,birthDate:re(this.birthDate)?this.birthDate:null,address:this.address,handPhone:this.handPhone,email:this.email,IsUser:this.IsUser,jobDescription:this.jobDescription});if(!e.ok)throw new Error(`Response status: ${e.status}`);const t=await e.json();t&&(this.saveEmployeeRelation(t.id),this.dispatchEvent(new CustomEvent("addnew-employee",{bubbles:!0,composed:!0,detail:t})))}catch(e){console.log(e)}}async saveEmployeeRelation(e){try{const t=await le("POST",window.sqlHost,"/employee-service/employeeRelation",window.token,window.username,{relTable:"department",relId:this.deptId,employeeId:e,relType:"job history",relData:`{"startDate": "${re(this.startDate)?this.startDate:null}"}`});if(!t.ok)throw new Error(`Response status: ${t.status}`);await t.json()}catch(e){console.log(e)}}cancelDetail(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("cancel-detail",{bubbles:!0,composed:!0,detail:{back:"showproduct"}}))}render(){return q`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <div class="w3-row">
        <span class="w3-xxlarge w3-text-indigo">Tuyển dụng một nhân viên</span>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <div class="w3-col m3">
          <label>Họ</label>
          <input
            type="text"
            class="w3-input"
            .value=${this.lastName}
            @input=${e=>this.lastName=e.target.value}
          />
        </div>
        <div class="w3-col m3" style="padding-left: 10px">
          <label>Tên</label>
          <input
            type="text"
            class="w3-input"
            .value=${this.firstName}
            @input=${e=>this.firstName=e.target.value}
          />
        </div>
        <div class="w3-col m3" style="padding-left: 10px">
          <label>Ngày sinh</label>
          <input
            type="date"
            class="w3-input"
            .value=${this.birthDate}
            @input=${e=>this.birthDate=e.target.value}
          />
        </div>
        <div class="w3-col m3" style="padding-left: 10px">
          <label>Giới tính</label>
          <select
            class="w3-select"
            .value=${this.sex}
            @change=${e=>this.sex=e.target.value}
          >
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
          </select>
        </div>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <div class="w3-col m6">
          <label>Địa chỉ </label>
          <input
            type="text"
            class="w3-input"
            .value=${this.address}
            @input=${e=>this.address=e.target.value}
          />
        </div>
        <div class="w3-col m3" style="padding-left: 10px">
          <label>Số điện thoại</label>
          <input
            type="text"
            class="w3-input"
            .value=${this.handPhone}
            @input=${e=>this.handPhone=e.target.value}
          />
        </div>
        <div class="w3-col m3" style="padding-left: 10px">
          <label>Chức danh công việc</label>
          <input
            type="text"
            class="w3-input"
            .value=${this.jobTitle}
            @input=${e=>this.jobTitle=e.target.value}
          />
        </div>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <div class="w3-col m4">
          <input
            class="w3-check"
            type="checkbox"
            .checked=${this.IsUser}
            @click=${()=>{this.IsUser=!this.IsUser}}
          />
          <label
            >${this.IsUser?"Được quyền ":"Không được "} sử dụng phần
            mềm</label
          >
        </div>
        <div class="w3-col m4" style="padding-left: 10px">
          <label>${this.IsUser?"User name":"Email"}</label>
          <input
            type="text"
            class="w3-input"
            .value=${this.email}
            @input=${e=>this.email=e.target.value}
          />
        </div>
        <div class="w3-col m4" style="padding-left: 10px">
          <label>Ngày bắt đầu làm việc</label>
          <input
            type="date"
            class="w3-input"
            .value=${this.startDate}
            @input=${e=>this.startDate=e.target.value}
          />
        </div>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <label>Mô tả công việc</label>
        <textarea
          rows="4"
          type="text"
          class="w3-input"
          .value=${this.jobDescription}
          @input=${e=>this.jobDescription=e.target.value}
        ></textarea>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <button
          class="w3-button w3-teal w3-round-xlarge"
          @click=${this.saveEmployee}
        >
          Save
        </button>
        <button
          class="w3-button w3-khaki w3-round-xlarge"
          @click=${this.cancelDetail}
        >
          Cancel
        </button>
      </div>
    `}}class pe extends ae{static properties={empId:{type:String},deptId:{type:String},lastName:{type:String},firstName:{type:String},jobTitle:{type:String},sex:{type:String},birthDate:{type:String},startDate:{type:String},address:{type:String},handPhone:{type:String},email:{type:String},IsUser:{type:Boolean},jobDescription:{type:String},keyRender:{type:Number}};constructor(){super(),this.lastName="",this.firstName="",this.jobTitle="",this.sex="female",this.birthDate="",this.startDate="",this.address="",this.handPhone="",this.email="",this.IsUser=!1,this.jobDescription="",this.keyRender=0}connectedCallback(){super.connectedCallback(),this.loadCurrEmployee(),this.keyRender+=1}willUpdate(e){e.has("empId")&&this.keyRender>0&&this.loadCurrEmployee()}async loadCurrEmployee(){try{const e=await le("GET",window.sqlHost,`/employee-service/employee/${this.empId}`,window.token,window.username);if(!e.ok)throw new Error(`Response status: ${e.status}`);const t=await e.json();t&&(this.lastName=t.lastName,this.firstName=t.firstName,this.jobTitle=t.title,this.sex=t.sex,this.birthDate=t.birthDate,this.address=t.address,this.handPhone=t.handPhone,this.email=t.email,this.IsUser=t.isUser,this.jobDescription=t.jobDescription)}catch(e){console.log(e)}}async saveEmployee(e){e.preventDefault();try{const e=await le("PUT",window.sqlHost,`/employee-service/employee/${this.empId}`,window.token,window.username,{lastName:this.lastName,firstName:this.firstName,title:this.jobTitle,sex:this.sex,birthDate:re(this.birthDate)?this.birthDate:null,address:this.address,handPhone:this.handPhone,email:this.email,IsUser:this.IsUser,jobDescription:this.jobDescription});if(!e.ok)throw new Error(`Response status: ${e.status}`);const t=await e.json();t&&this.dispatchEvent(new CustomEvent("save-edit-employee",{bubbles:!0,composed:!0,detail:t}))}catch(e){console.log(e)}}async saveEmployeeRelation(e){try{const t=await le("POST",window.sqlHost,"/employee-service/employeeRelation",window.token,window.username,{relTable:"department",relId:this.deptId,employeeId:e,relType:"job history",relData:`{"startDate": "${re(this.startDate)?this.startDate:null}"}`});if(!t.ok)throw new Error(`Response status: ${t.status}`);await t.json()}catch(e){console.log(e)}}cancelDetail(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("cancel-detail",{bubbles:!0,composed:!0,detail:{back:"showproduct"}}))}render(){return q`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <div class="w3-row">
        <span class="w3-xxlarge w3-text-indigo">Tuyển dụng một nhân viên</span>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <div class="w3-col m3">
          <label>Họ</label>
          <input
            type="text"
            class="w3-input"
            .value=${this.lastName}
            @input=${e=>this.lastName=e.target.value}
          />
        </div>
        <div class="w3-col m3" style="padding-left: 10px">
          <label>Tên</label>
          <input
            type="text"
            class="w3-input"
            .value=${this.firstName}
            @input=${e=>this.firstName=e.target.value}
          />
        </div>
        <div class="w3-col m3" style="padding-left: 10px">
          <label>Ngày sinh</label>
          <input
            type="date"
            class="w3-input"
            .value=${this.birthDate}
            @input=${e=>this.birthDate=e.target.value}
          />
        </div>
        <div class="w3-col m3" style="padding-left: 10px">
          <label>Giới tính</label>
          <select
            class="w3-select"
            .value=${this.sex}
            @change=${e=>this.sex=e.target.value}
          >
            <option value="male">Nam</option>
            <option value="female">Nữ</option>
          </select>
        </div>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <div class="w3-col m6">
          <label>Địa chỉ </label>
          <input
            type="text"
            class="w3-input"
            .value=${this.address}
            @input=${e=>this.address=e.target.value}
          />
        </div>
        <div class="w3-col m3" style="padding-left: 10px">
          <label>Số điện thoại</label>
          <input
            type="text"
            class="w3-input"
            .value=${this.handPhone}
            @input=${e=>this.handPhone=e.target.value}
          />
        </div>
        <div class="w3-col m3" style="padding-left: 10px">
          <label>Chức danh công việc</label>
          <input
            type="text"
            class="w3-input"
            .value=${this.jobTitle}
            @input=${e=>this.jobTitle=e.target.value}
          />
        </div>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <div class="w3-col m4">
          <input
            class="w3-check"
            type="checkbox"
            .checked=${this.IsUser}
            @click=${()=>{this.IsUser=!this.IsUser}}
          />
          <label
            >${this.IsUser?"Được quyền ":"Không được "} sử dụng phần
            mềm</label
          >
        </div>
        <div class="w3-col m4" style="padding-left: 10px">
          <label>${this.IsUser?"User name":"Email"}</label>
          <input
            type="text"
            class="w3-input"
            .value=${this.email}
            @input=${e=>this.email=e.target.value}
          />
        </div>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <label>Mô tả công việc</label>
        <textarea
          rows="4"
          type="text"
          class="w3-input"
          .value=${this.jobDescription}
          @input=${e=>this.jobDescription=e.target.value}
        ></textarea>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <button
          class="w3-button w3-teal w3-round-xlarge"
          @click=${this.saveEmployee}
        >
          Save
        </button>
        <button
          class="w3-button w3-khaki w3-round-xlarge"
          @click=${this.cancelDetail}
        >
          Cancel
        </button>
      </div>
    `}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */customElements.define("newsky-treeview",oe),customElements.define("edit-department",de),customElements.define("new-department",he),customElements.define("list-employee",class extends ae{static properties={deptId:{type:String},deptName:{type:String},keyRender:{type:Number},empData:{type:Array},selectedValue:{type:String}};constructor(){super(),this.keyRender=0,this.empData=[],this.selectedValue="ahead"}connectedCallback(){super.connectedCallback(),this.loadEmployee(),this.keyRender=1}willUpdate(e){e.has("deptId")&&this.keyRender>0&&this.loadEmployee()}async loadEmployee(){try{const e=await le("GET",window.sqlHost,`/employee-service/employee/department/${this.deptId}`,window.token,window.username);if(!e.ok)throw new Error(`Response status: ${e.status}`);const t=await e.text();this.empData=t?[...JSON.parse(t)]:[]}catch(e){console.log(e)}}newEmployee(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("new-employee",{bubbles:!0,composed:!0,detail:{deptId:this.deptId,deptName:this.deptName}}))}checkOutOfDate(e){if(e){const t=new Date(e);return new Date<t}return!0}employeeClick(e){this.dispatchEvent(new CustomEvent("edit-employee",{bubbles:!0,composed:!0,detail:e}))}handleRadioChange(e){this.selectedValue=e.target.value}render(){return q`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div class="w3-row">
        <span class="w3-large w3-text-indigo"
          >Các nhân viên thuộc bộ phận: ${this.deptName}</span
        >
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <div class="w3-col m3">
          <button
            class="w3-button w3-teal w3-round-xlarge"
            @click=${this.newEmployee}
          >
            Thêm nhân viên
          </button>
        </div>

        <div class="w3-col m3" style="padding-left: 10px">
          <input
            class="w3-radio"
            type="radio"
            value="ahead"
            name="situation"
            ?checked=${"ahead"===this.selectedValue}
            @change=${this.handleRadioChange}
          />
          <label>Đang làm</label>
        </div>

        <div class="w3-col m3" style="padding-left: 10px">
          <input
            class="w3-radio"
            type="radio"
            value="away"
            name="situation"
            ?checked=${"away"===this.selectedValue}
            @change=${this.handleRadioChange}
          />
          <label>Đã chuyển</label>
        </div>

        <div class="w3-col m3" style="padding-left: 10px">
          <input
            class="w3-radio"
            type="radio"
            value="all"
            name="situation"
            ?checked=${"all"===this.selectedValue}
            @change=${this.handleRadioChange}
          />
          <label>Tất cả</label>
        </div>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <table class="w3-table w3-bordered w3-hoverable">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Ngày sinh</th>
              <th>Số ĐT</th>
              <th>Chức danh</th>
            </tr>
          </thead>
          <tbody>
            ${this.empData.map(((e,t)=>q`
                <tr
                  class="${this.checkOutOfDate(e.endDate)?"":"w3-text-red"}"
                >
                  <td>
                    <a href="/department/employee/${e.Id}" target="_blank"
                      >${t+1} <i class="fa fa-solid fa-folder-open"></i
                    ></a>
                  </td>
                  <td>
                    <a href="#" @click=${()=>this.employeeClick(e)}
                      >${e.lastName} ${e.firstName}</a
                    >
                  </td>
                  <td>${e.birthDate.split("-").reverse().join("/")}</td>
                  <td>${e.handPhone}</td>
                  <td>${e.title}</td>
                </tr>
              `))}
          </tbody>
        </table>
      </div>
    `}}),customElements.define("new-employee",ce),customElements.define("edit-employee",pe),customElements.define("dept-detail",class extends ae{static properties={mode:{type:String,attribute:"mode"},deptId:{type:String,attribute:"dept-id"},deptName:{type:String},empId:{type:String}};render(){return q`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />

      ${((e,t,s)=>{for(const s of t)if(s[0]===e)return(0,s[1])();return s?.()})(this.mode,[["",()=>q`<div></div>`],["edit",()=>q`<edit-department .deptId=${this.deptId}></edit-department>`],["add",()=>q`<new-department .parentId=${this.deptId}></new-department>`],["showproduct",()=>q`<list-employee
              .deptId=${this.deptId}
              .deptName=${this.deptName}
            ></list-employee>`],["new-employee",()=>q`<new-employee
              .deptId=${this.deptId}
              .deptName=${this.deptName}
            ></new-employee>`],["edit-employee",()=>q`<edit-employee .empId=${this.empId}></edit-employee>`]])}
    `}}),customElements.define("newsky-department",class extends ae{static properties={mode:{type:String},deptId:{type:String},deptName:{type:String},catRaw:{type:Array},nodeIdShow:{type:String},empId:{type:String}};constructor(){super(),this.mode="",this.deptId="",this.deptName="",this.catRaw=[],this.nodeIdShow="",this.empId=""}connectedCallback(){super.connectedCallback(),this.loadDataForTreeView(),this.addEventListener("save-department",this.listenSaveEditItem),this.addEventListener("addnew-department",this.listenAddItem),this.addEventListener("cancel-detail",this.listenCancelDetail),this.addEventListener("delete-department",this.listenDelItem),this.addEventListener("new-employee",this.listenNewEmployee),this.addEventListener("addnew-employee",this.listenAddNewEmployee),this.addEventListener("edit-employee",this.listenEditEmployee),this.addEventListener("save-edit-employee",this.listenSaveEditEmployee)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("save-department",this.listenSaveEditItem),this.removeEventListener("addnew-department",this.listenAddItem),this.removeEventListener("cancel-detail",this.listenCancelDetail),this.removeEventListener("delete-department",this.listenDelItem),this.removeEventListener("new-employee",this.listenNewEmployee),this.removeEventListener("addnew-employee",this.listenAddNewEmployee),this.removeEventListener("edit-employee",this.listenEditEmployee),this.removeEventListener("save-edit-employee",this.listenSaveEditEmployee)}async loadDataForTreeView(){try{const e=await le("GET",window.sqlHost,"/employee-service/department",window.token,window.username);if(!e.ok)throw new Error(`Response status: ${e.status}`);const t=await e.json();t&&(this.catRaw=[...t])}catch(e){console.log(e)}}async saveDepartment(e){try{const t=await le("PUT",window.sqlHost,`/employee-service/department/${e.id}`,window.token,window.username,{deptName:e.deptName,isActive:e.isActive,isChildOf:e.isChildOf});if(!t.ok)throw new Error(`Response status: ${t.status}`);if(await t.json())return!0}catch(e){console.log(e)}return!1}listenCancelDetail(e){e.detail.back?this.mode=e.detail.back:this.mode=""}listenNodeClick(e){this.deptId=e.detail.data.id,this.deptName=e.detail.data.deptName,this.mode="ctrl"===e.detail.key?"edit":"showproduct"}listenNodeDrop(e){if("treenode"===e.detail.source){const t=e.detail.drag,s=e.detail.target.id,i={id:t.id,deptName:t.deptName,isActive:t.isActive,isChildOf:s};if(this.saveDepartment(i)){const e=this.catRaw.length;for(let i;i<e;i+=1)this.catRaw[i].id===t.id&&(this.catRaw[i].isChildOf=s)}else alert("There is an error while saving department")}e.detail.source}listenNewNodeBttClick(e){this.deptId=e.detail.currNode?.id||"",this.mode="add"}listenSaveEditItem(e){const t=this.shadowRoot.querySelector("newsky-treeview");t&&t.updateNodeName(e.detail.id,e.detail.deptName)}listenDelItem(e){}listenAddItem(e){this.catRaw=[...this.catRaw,e.detail],this.nodeIdShow=e.detail.id,this.mode=""}listenNewEmployee(e){this.mode="new-employee"}listenAddNewEmployee(e){this.mode="showproduct"}listenEditEmployee(e){this.empId=e.detail.Id,this.mode="edit-employee"}listenSaveEditEmployee(e){this.mode="showproduct"}render(){return q`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <div class="w3-row">
        <div class="w3-col m5">
          <newsky-treeview
            cat-name="deptName"
            .rawData=${this.catRaw}
            .nodeIdShow=${this.nodeIdShow}
            @node-clicked=${this.listenNodeClick}
            @node-drop=${this.listenNodeDrop}
            @create-newnode=${this.listenNewNodeBttClick}
          ></newsky-treeview>
        </div>
        <div class="w3-col m7" style="padding-left: 10px">
          <dept-detail
            .mode=${this.mode}
            .deptId=${this.deptId}
            .deptName=${this.deptName}
            .empId=${this.empId}
          ></dept-detail>
        </div>
      </div>
    `}});
