/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new a(i,t,s)},r=(s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),a=t.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=e.cssText,s.appendChild(i)}},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,w=globalThis,m=w.trustedTypes,g=m?m.emptyScript:"",y=w.reactiveElementPolyfillSupport,f=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},$=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:a}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const o=i?.call(this);a.call(this,e),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const a=(void 0!==s.converter?.toAttribute?s.converter:v).toAttribute(e,s.type);this._$Em=t,null==a?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=i,this[i]=a.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??$)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[f("elementProperties")]=new Map,S[f("finalized")]=new Map,y?.({ReactiveElement:S}),(w.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k=globalThis,C=k.trustedTypes,x=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+I,N=`<${A}>`,D=document,P=()=>D.createComment(""),_=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,T="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,B=/>/g,L=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,H=/"/g,V=/^(?:script|style|textarea|title)$/i,M=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),j=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),z=new WeakMap,G=D.createTreeWalker(D,129);function Q(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==x?x.createHTML(e):e}class J{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let a=0,o=0;const r=t.length-1,n=this.parts,[c,l]=((t,e)=>{const s=t.length-1,i=[];let a,o=2===e?"<svg>":3===e?"<math>":"",r=O;for(let e=0;e<s;e++){const s=t[e];let n,c,l=-1,d=0;for(;d<s.length&&(r.lastIndex=d,c=r.exec(s),null!==c);)d=r.lastIndex,r===O?"!--"===c[1]?r=U:void 0!==c[1]?r=B:void 0!==c[2]?(V.test(c[2])&&(a=RegExp("</"+c[2],"g")),r=L):void 0!==c[3]&&(r=L):r===L?">"===c[0]?(r=a??O,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,n=c[1],r=void 0===c[3]?L:'"'===c[3]?H:q):r===H||r===q?r=L:r===U||r===B?r=O:(r=L,a=void 0);const h=r===L&&t[e+1].startsWith("/>")?" ":"";o+=r===O?s+N:l>=0?(i.push(n),s.slice(0,l)+E+s.slice(l)+I+h):s+I+(-2===l?e:h)}return[Q(t,o+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]})(t,e);if(this.el=J.createElement(c,s),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=G.nextNode())&&n.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(E)){const e=l[o++],s=i.getAttribute(t).split(I),r=/([.?@])?(.*)/.exec(e);n.push({type:1,index:a,name:r[2],strings:s,ctor:"."===r[1]?X:"?"===r[1]?tt:"@"===r[1]?et:Y}),i.removeAttribute(t)}else t.startsWith(I)&&(n.push({type:6,index:a}),i.removeAttribute(t));if(V.test(i.tagName)){const t=i.textContent.split(I),e=t.length-1;if(e>0){i.textContent=C?C.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],P()),G.nextNode(),n.push({type:2,index:++a});i.append(t[e],P())}}}else if(8===i.nodeType)if(i.data===A)n.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(I,t+1));)n.push({type:7,index:a}),t+=I.length-1}a++}}static createElement(t,e){const s=D.createElement("template");return s.innerHTML=t,s}}function K(t,e,s=t,i){if(e===j)return e;let a=void 0!==i?s.o?.[i]:s.l;const o=_(e)?void 0:e._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(t),a._$AT(t,s,i)),void 0!==i?(s.o??=[])[i]=a:s.l=a),void 0!==a&&(e=K(t,a._$AS(t,e.values),a,i)),e}class F{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??D).importNode(e,!0);G.currentNode=i;let a=G.nextNode(),o=0,r=0,n=s[0];for(;void 0!==n;){if(o===n.index){let e;2===n.type?e=new Z(a,a.nextSibling,this,t):1===n.type?e=new n.ctor(a,n.name,n.strings,this,t):6===n.type&&(e=new st(a,this,t)),this._$AV.push(e),n=s[++r]}o!==n?.index&&(a=G.nextNode(),o++)}return G.currentNode=D,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,s,i){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),_(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&_(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=J.createElement(Q(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new F(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new J(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const a of t)i===e.length?e.push(s=new Z(this.O(P()),this.O(P()),this,this.options)):s=e[i],s._$AI(a),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,a){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){const a=this.strings;let o=!1;if(void 0===a)t=K(this,t,e,0),o=!_(t)||t!==this._$AH&&t!==j,o&&(this._$AH=t);else{const i=t;let r,n;for(t=a[0],r=0;r<a.length-1;r++)n=K(this,i[s+r],e,r),n===j&&(n=this._$AH[r]),o||=!_(n)||n!==this._$AH[r],n===W?t=W:t!==W&&(t+=(n??"")+a[r+1]),this._$AH[r]=n}o&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class tt extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class et extends Y{constructor(t,e,s,i,a){super(t,e,s,i,a),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??W)===j)return;const s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const it=k.litHtmlPolyfillSupport;it?.(J,Z),(k.litHtmlVersions??=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class at extends S{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,s)=>{const i=s?.renderBefore??e;let a=i._$litPart$;if(void 0===a){const t=s?.renderBefore??null;i._$litPart$=a=new Z(e.insertBefore(P(),t),t,void 0,s??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return j}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const ot=globalThis.litElementPolyfillSupport;ot?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.1.0");class rt extends at{static properties={suggestions:{type:Array},filteredSuggestions:{type:Array},inputValue:{type:String},showSuggestions:{type:Boolean},highlightedIndex:{type:Number},maxSuggestions:{type:Number},col1:{type:String,attribute:"col1"},col2:{type:String,attribute:"col2"},defaultValue:{type:String,attribute:"default-value"}};constructor(){super(),this.suggestions=[],this.suggestions?this.filteredSuggestions=this.suggestions:this.filteredSuggestions=[],this.inputValue="",this.showSuggestions=!1,this.highlightedIndex=-1,this.maxSuggestions=1500,this.col1||(this.col1="id"),this.col2||(this.col2="name")}findDefaultItem(){const t=this.filteredSuggestions.findIndex((t=>t[this.col1].toString().toLowerCase()==this.defaultValue.toLowerCase()));if(t>=0){const e=this.filteredSuggestions.at(t);this.inputValue=e[this.col2],this.highlightedIndex=t}else this.inputValue=""}willUpdate(t){t.has("suggestions")&&(this.inputValue="",this.filteredSuggestions=[...this.suggestions],this.findDefaultItem(),this.showSuggestions=!1),t.has("defaultValue")&&this.filteredSuggestions.length>0&&this.findDefaultItem()}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.handleClickOutside.bind(this))}disconnectedCallback(){document.removeEventListener("click",this.handleClickOutside.bind(this)),super.disconnectedCallback()}handleInsideClick(t){t.stopPropagation()}handleClickOutside(){this.showSuggestions=!1}filterSuggestions(t){const e=t.target.value;if(this.inputValue=e,e.length>0){if(e.endsWith("++"))return void(e.slice(0,-2).length>2?this.dispatchEvent(new CustomEvent("launch-query",{detail:e.slice(0,-2)})):alert("Chỉ tìm kiếm tối thiểu 3 ký tự"));if("**"==e)return void this.dispatchEvent(new CustomEvent("launch-refresh",{detail:"**"}));this.filteredSuggestions=this.suggestions.filter((t=>t&&t[this.col2].toLowerCase().includes(e.toLowerCase()))),this.showSuggestions=!0,this.highlightedIndex=-1}else this.filteredSuggestions=[...this.suggestions],this.showSuggestions=!0}handleKeydown(t){switch(t.key){case"ArrowDown":this.highlightedIndex<this.filteredSuggestions.length-1&&(this.highlightedIndex+=1,this.updateComplete.then((()=>{const t=this.shadowRoot.querySelector(".highlighted");t&&t.scrollIntoView({block:"nearest"})})));break;case"ArrowUp":this.highlightedIndex>0&&(this.highlightedIndex-=1,this.updateComplete.then((()=>{const t=this.shadowRoot.querySelector(".highlighted");t&&t.scrollIntoView({block:"nearest"})})));break;case"Enter":this.highlightedIndex>=0&&this.selectSuggestion(this.filteredSuggestions[this.highlightedIndex]);break;case"Escape":this.showSuggestions=!1,this.highlightedIndex=-1}}toggleSuggestions(){this.showSuggestions=!this.showSuggestions}selectSuggestion(t){this.inputValue=t[this.col2],this.showSuggestions=!1,this.highlightedIndex=this.filteredSuggestions.findIndex((e=>e[this.col1]==t[this.col1])),this.dispatchEvent(new CustomEvent("selection-changed",{detail:t}))}render(){return M`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <div class="autocomplete" @click="${this.handleInsideClick}">
        <div class="input-wrapper">
          <input
            class="w3-input w3-border"
            type="text"
            .value="${this.inputValue}"
            @input="${this.filterSuggestions}"
            @keydown="${this.handleKeydown}"
            @click="${()=>this.toggleSuggestions()}"
            placeholder="Start typing..."
            data-ignore-outside-click
          />
          <span
            class="icon"
            @click="${()=>this.toggleSuggestions()}"
            data-ignore-outside-click
          >
            <i class="fa fa-caret-down"></i>
          </span>
        </div>
        ${this.showSuggestions&&this.filteredSuggestions.length>0?M`
              <div class="suggestions w3-card w3-white">
                ${this.filteredSuggestions.map(((t,e)=>M`
                    <div
                      class="suggestion-item w3-padding ${this.highlightedIndex===e?"highlighted":""}"
                      @click="${()=>this.selectSuggestion(t)}"
                    >
                      ${t[this.col2]}
                    </div>
                  `))}
              </div>
            `:""}
      </div>
    `}static styles=o`
    .autocomplete {
      position: relative;
      display: inline-block;
      width: 100%;
    }

    .suggestions {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 1000;
      max-height: 200px;
      overflow-y: auto;
    }

    .suggestion-item {
      padding: 8px 16px;
    }

    .suggestion-item.highlighted {
      background-color: #e0e0e0;
    }

    .suggestion-item:hover {
      background-color: #e0e0e0;
      cursor: pointer;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .input-wrapper input {
      width: 100%;
      padding-right: 30px; /* Make room for the icon */
    }

    .icon {
      position: absolute;
      right: 10px;
      cursor: pointer; /* Allow the user to click the icon */
    }
  `}class nt extends at{static styles=o`
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
  `;static properties={treeData:{type:Array},selectedNode:{type:Object},searchQuery:{type:String},rawData:{type:Array},catName:{type:String,attribute:"cat-name"},nodeIdShow:{type:String}};constructor(){super(),this.treeData=[],this.selectedNode=null,this.searchQuery="",this.catName||(this.catName="catName"),this.nodeIdShow=""}willUpdate(t){t.has("rawData")&&(this.treeData=this.buildTree(this.rawData),this.nodeIdShow&&this.showChildNode(this.nodeIdShow)),t.has("nodeIdShow")&&this.showChildNode(this.nodeIdShow)}expandAll(){this.modifyExpandState(this.treeData,!0)}collapseAll(){this.modifyExpandState(this.treeData,!1)}showChildNode(t){this.expandPathToNode(t,this.treeData),this.requestUpdate()}findRootNode(t,e){let s=this.findNodeById(t,e);if(!s)return null;for(;null!==s.isChildOf;)s=this.findNodeById(s.isChildOf,e);return s}updateNodeName(t,e){this.findNodeById(t,this.treeData)[this.catName]=e,this.requestUpdate()}findNodeById(t,e){for(let s of e){if(s.id===t)return s;if(s.children&&s.children.length){const e=this.findNodeById(t,s.children);if(e)return e}}return null}expandPathToNode(t,e){const s=this.findNodeById(t,e);s&&this.expandNodeAndAncestors(s,e)}expandNodeAndAncestors(t,e){if(t.expanded=!0,null!==t.isChildOf){const s=this.findNodeById(t.isChildOf,e);s&&(s.expanded=!0,this.expandNodeAndAncestors(s,e))}}modifyExpandState(t,e){t.forEach((t=>{t.expanded=e,t.children&&t.children.length&&this.modifyExpandState(t.children,e)})),this.requestUpdate()}handleSearchInput(t){this.searchQuery=t.target.value.toLowerCase(),this.expandAll()}searchHighlight(t){return this.searchQuery.length>0&&t[this.catName].toLowerCase().includes(this.searchQuery)}dragStart(t,e){t.dataTransfer.setData("text/plain",JSON.stringify({source:"treenode",data:e})),this.draggedNode=e}dragOver(t){t.preventDefault()}drop(t,e){t.preventDefault();const s=JSON.parse(t.dataTransfer.getData("text/plain")),i=s.data,a=s.source;if("treenode"===a){if(i.id===e.id)return;this.removeNodeById(this.treeData,i.id),e.children=e.children||[],e.children.push(i)}this.dispatchEvent(new CustomEvent("node-drop",{detail:{source:a,drag:i,target:e}})),this.requestUpdate()}removeNode(){null!==this.selectedNode&&alert(`You are considering remove node: ${JSON.stringify(this.selectedNode)}`)}newNode(){this.dispatchEvent(new CustomEvent("create-newnode",{detail:{currNode:this.selectedNode}}))}removeNodeById(t,e){for(let s=0;s<t.length;s++){if(t[s].id===e)return t.splice(s,1),!0;if(t[s].children&&t[s].children.length&&this.removeNodeById(t[s].children,e))return!0}return!1}buildTree(t){const e=[],s={};return t.forEach((t=>{s[t.id]={...t,children:[]}})),t.forEach((t=>{null===t.isChildOf?e.push(s[t.id]):s[t.isChildOf]&&s[t.isChildOf].children.push(s[t.id])})),e}toggleNode(t){t.expanded=!t.expanded,this.requestUpdate()}selectNode(t,e){this.selectedNode=t,this.requestUpdate();let s="none";e.ctrlKey&&(s="ctrl"),this.dispatchEvent(new CustomEvent("node-clicked",{detail:{data:t,key:s}}))}renderTree(t){return t.map((t=>{const e=this.searchHighlight(t);return M`
        <div
          class="tree-node ${this.selectedNode===t?"selected":""} ${e?"highlight":""} draggable"
          draggable="true"
          @dragstart=${e=>this.dragStart(e,t)}
          @dragover=${this.dragOver}
          @drop=${e=>this.drop(e,t)}
        >
          <span class="icon" @click=${()=>this.toggleNode(t)}>
            ${t.children&&t.children.length?t.expanded?"-":"+":""}
          </span>
          <span @click=${e=>this.selectNode(t,e)}
            >${this.renderNodeContent(t)}</span
          >
        </div>
        <div class="tree-children ${t.expanded?"expanded":""}">
          ${t.children?this.renderTree(t.children):""}
        </div>
      `}))}renderNodeContent(t){if(this.searchQuery.length>0){const e=t[this.catName].toLowerCase().indexOf(this.searchQuery);if(-1===e)return t[this.catName];const s=t[this.catName].slice(0,e),i=t[this.catName].slice(e,e+this.searchQuery.length),a=t[this.catName].slice(e+this.searchQuery.length);return M`
        ${s}<span class="highlight-text">${i}</span
        >${a}
      `}return t[this.catName]}render(){return M`
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
    `}}function ct(t,e,s,i,a,o){return o?fetch(`${e}${s}`,{method:t,headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json",UserName:a},body:JSON.stringify(o)}):fetch(`${e}${s}`,{method:t,headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json",UserName:a}})}const lt=[{value:1,name:"Diện tích"},{value:2,name:"Chiều dài"},{value:3,name:"Khối lượng"},{value:4,name:"Đơn lẻ"},{value:5,name:"Thể tích"}],dt=[{value:"Laminate flooring",name:"Sàn Laminate"},{value:"Laminate skirting",name:"Phào Laminate"},{value:"Impregnated paper",name:"Tẩm giấy"},{value:"Wooden door",name:"Cửa gỗ công nghiệp"},{value:"WPU flooring",name:"Sàn WPU"},{value:"SPC flooring",name:"Sàn SPC"},{value:"Multi Layer flooring",name:"Sàn gỗ dán mặt melamin"}],ht=[{value:"NONE",name:"Không xác định"},{value:"SAN",name:"Các loại sàn có thể bán"},{value:"DOOR",name:"Các loại cửa có thể bán "},{value:"SKIRTING",name:"Các loại phào nẹp"},{value:"IMP PAPER",name:"Các loại giấy tẩm"}];class ut extends at{static properties={defaultValue:{type:String,attribute:"default-value"},defaultProductUrl:{type:String},initialUrl:{type:String},queryUrl:{type:String},categoryUrl:{type:String},selectedProduct:{type:Object},productData:{type:Array},categoryId:{type:String},categoryName:{type:String},fetchType:{type:String},query:{type:String},catRaw:{type:Array}};static styles=o`
    .hidden {
      display: none !important;
    }
  `;constructor(){super(),this.defaultValue||(this.defaultValue=""),this.defaultValue?this.makeUrl():(this.defaultProductUrl="",this.initialUrl=""),this.categoryId="",this.fetchType="category",this.query="",this.productData=[],this.categoryName=""}makeUrl(){this.defaultProductUrl=`/product-service/Measurement/oneForSelect/${this.defaultValue}`,this.initialUrl=`/product-service/Measurement/firstCall/${this.defaultValue}`}async fetchDefaultProduct(){try{const t=await ct("GET",window.sqlHost,this.defaultProductUrl,window.token,window.username);if(!t.ok)throw new Error(`Response status: ${t.status}`);const e=await t.json();e&&(this.selectedProduct={id:e.id,name:e.nameStr},this.categoryId=e.extraCategoryID)}catch(t){console.log(t)}}async fetchProductList(t){try{const e=await ct("GET",window.sqlHost,t,window.token,window.username);if(!e.ok)throw new Error(`Response status: ${e.status}`);const s=await e.json();s&&(this.productData=s.map((t=>({id:t.id,name:t.nameStr}))))}catch(t){console.log(t)}}willUpdate(t){if(t.has("categoryId")&&this.categoryId){const t=lt.find((t=>t.value.toString().toLowerCase()===this.categoryId.toLowerCase()));this.categoryName=t.name}t.has("defaultValue")&&this.loadDefault()}loadDefault(){this.defaultValue&&(this.makeUrl(),this.fetchDefaultProduct(),this.fetchProductList(this.initialUrl))}connectedCallback(){super.connectedCallback(),this.loadDefault()}firstUpdated(){const t=this.shadowRoot.querySelector(".w3-dropdown-hover");t&&t.addEventListener("mouseenter",(()=>{const t=this.shadowRoot.querySelector(".w3-dropdown-content");t&&t.classList.remove("hidden")}))}async treeViewClick(t){try{this.categoryId=t.value.toString(),this.fetchType="category",this.fetchProductList(`/product-service/Measurement/byCategoryID/${t.value}`);this.shadowRoot.querySelector(".w3-dropdown-content").classList.add("hidden")}catch(t){console.log(t)}}productSelected(t){this.selectedProduct={id:t.detail.id,name:t.detail.name},this.dispatchEvent(new CustomEvent("meas-select",{detail:this.selectedProduct}))}execQuery(t){this.query=t.detail,this.fetchType="query",this.fetchProductList(`/product-service/Measurement/byNameStr/${this.query}`)}execRefresh(t){"category"===this.fetchType&&this.fetchProductList(`/product-service/Measurement/byCategoryID/${this.categoryId}`),"query"===this.fetchType&&this.fetchProductList(`/product-service/Measurement/byNameStr/${this.query}`)}render(){return M`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div class="w3-dropdown-hover">
        Đơn vị tính (${this.categoryName})
        <div class="w3-dropdown-content w3-card-4">
          <div class="w3-bar-block">
            ${lt.map((t=>M`
                <a
                  href="#"
                  class="w3-bar-item w3-button"
                  @click=${()=>this.treeViewClick(t)}
                  >${t.name}</a
                >
              `))}
          </div>
        </div>
      </div>
      <newsky-autocomplete
        .suggestions=${this.productData}
        .defaultValue=${this.defaultValue}
        @selection-changed=${this.productSelected}
        @launch-query=${this.execQuery}
        @launch-refresh=${this.execRefresh}
      >
      </newsky-autocomplete>
    `}}class pt extends at{static properties={defaultValue:{type:String,attribute:"default-value"},defaultProductUrl:{type:String},initialUrl:{type:String},queryUrl:{type:String},categoryUrl:{type:String},selectedProduct:{type:Object},productData:{type:Array},categoryId:{type:String},categoryName:{type:String},fetchType:{type:String},query:{type:String},catRaw:{type:Array}};static styles=o`
    .hidden {
      display: none !important;
    }
  `;constructor(){super(),this.defaultValue||(this.defaultValue=""),this.defaultValue?(this.defaultProductUrl="",this.initialUrl=""):this.makeUrl(),this.categoryId="",this.fetchType="category",this.query="",this.productData=[],this.categoryName=""}makeUrl(){this.defaultProductUrl=`/produce-service/segment/oneForSelect/${this.defaultValue}`,this.initialUrl=`/produce-service/segment/firstCall/${this.defaultValue}`}async fetchDefaultProduct(){try{const t=await ct("GET",window.sqlHost,this.defaultProductUrl,window.token,window.username);if(!t.ok)throw new Error(`Response status: ${t.status}`);const e=await t.json();e&&(this.selectedProduct={id:e.id,name:e.nameStr},this.categoryId=e.extraCategoryID)}catch(t){console.log(t)}}async fetchProductList(t){try{const e=await ct("GET",window.sqlHost,t,window.token,window.username);if(!e.ok)throw new Error(`Response status: ${e.status}`);const s=await e.json();s&&(this.productData=s.map((t=>({id:t.id,name:t.nameStr}))))}catch(t){console.log(t)}}willUpdate(t){if(t.has("categoryId")&&this.categoryId){const t=dt.find((t=>t.value.toString().toLowerCase()===this.categoryId.toLowerCase()));this.categoryName=t.name}t.has("defaultValue")&&this.loadDefault()}loadDefault(){this.defaultValue&&(this.makeUrl(),this.fetchDefaultProduct(),this.fetchProductList(this.initialUrl))}connectedCallback(){super.connectedCallback(),this.loadDefault()}firstUpdated(){const t=this.shadowRoot.querySelector(".w3-dropdown-hover");t&&t.addEventListener("mouseenter",(()=>{const t=this.shadowRoot.querySelector(".w3-dropdown-content");t&&t.classList.remove("hidden")}))}async treeViewClick(t){try{this.categoryId=t.value.toString(),this.fetchType="category",this.fetchProductList(`/produce-service/segment/byCategoryID/${t.value}`);this.shadowRoot.querySelector(".w3-dropdown-content").classList.add("hidden")}catch(t){console.log(t)}}productSelected(t){this.selectedProduct={id:t.detail.id,name:t.detail.name},this.dispatchEvent(new CustomEvent("segment-select",{detail:this.selectedProduct}))}execQuery(t){this.query=t.detail,this.fetchType="query",this.fetchProductList(`/produce-service/segment/byNameStr/${this.query}`)}execRefresh(t){"category"===this.fetchType&&this.fetchProductList(`/produce-service/segment/byCategoryID/${this.categoryId}`),"query"===this.fetchType&&this.fetchProductList(`/produce-service/segment/byNameStr/${this.query}`)}render(){return M`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div class="w3-dropdown-hover">
        Công đoạn sản xuất (${this.categoryName})
        <div class="w3-dropdown-content w3-card-4">
          <div class="w3-bar-block">
            ${dt.map((t=>M`
                <a
                  href="#"
                  class="w3-bar-item w3-button "
                  @click=${()=>this.treeViewClick(t)}
                  >${t.name}</a
                >
              `))}
          </div>
        </div>
      </div>
      <newsky-autocomplete
        .suggestions=${this.productData}
        .defaultValue=${this.defaultValue}
        @selection-changed=${this.productSelected}
        @launch-query=${this.execQuery}
        @launch-refresh=${this.execRefresh}
      >
      </newsky-autocomplete>
    `}}class wt extends at{static properties={defaultValue:{type:String,attribute:"default-value"},defaultProductUrl:{type:String},initialUrl:{type:String},queryUrl:{type:String},categoryUrl:{type:String},selectedProduct:{type:Object},productData:{type:Array},categoryId:{type:String},categoryName:{type:String},fetchType:{type:String},query:{type:String},catRaw:{type:Array}};static styles=o`
    .hidden {
      display: none !important;
    }
  `;constructor(){super(),this.defaultValue||(this.defaultValue=""),this.defaultValue?(this.defaultProductUrl="",this.initialUrl=""):this.makeUrl(),this.categoryId="",this.fetchType="category",this.query="",this.productData=[],this.categoryName=""}makeUrl(){this.defaultProductUrl=`/product-service/classes/oneForSelect/${this.defaultValue}`,this.initialUrl=`/product-service/classes/firstCall/${this.defaultValue}`}async fetchDefaultProduct(){try{const t=await ct("GET",window.sqlHost,this.defaultProductUrl,window.token,window.username);if(!t.ok)throw new Error(`Response status: ${t.status}`);const e=await t.json();e&&(this.selectedProduct={id:e.id,name:e.nameStr},this.categoryId=e.extraCategoryID)}catch(t){console.log(t)}}async fetchProductList(t){try{const e=await ct("GET",window.sqlHost,t,window.token,window.username);if(!e.ok)throw new Error(`Response status: ${e.status}`);const s=await e.json();s&&(this.productData=s.map((t=>({id:t.id,name:t.nameStr}))))}catch(t){console.log(t)}}willUpdate(t){if(t.has("categoryId")&&this.categoryId){const t=ht.find((t=>t.value.toString().toLowerCase()===this.categoryId.toLowerCase()));this.categoryName=t.name}t.has("defaultValue")&&this.loadDefault()}loadDefault(){this.defaultValue&&(this.makeUrl(),this.fetchDefaultProduct(),this.fetchProductList(this.initialUrl))}connectedCallback(){super.connectedCallback(),this.loadDefault()}firstUpdated(){const t=this.shadowRoot.querySelector(".w3-dropdown-hover");t&&t.addEventListener("mouseenter",(()=>{const t=this.shadowRoot.querySelector(".w3-dropdown-content");t&&t.classList.remove("hidden")}))}async treeViewClick(t){try{this.categoryId=t.value.toString(),this.fetchType="category",this.fetchProductList(`/product-service/classes/byCategoryID/${t.value}`);this.shadowRoot.querySelector(".w3-dropdown-content").classList.add("hidden")}catch(t){console.log(t)}}productSelected(t){this.selectedProduct={id:t.detail.id,name:t.detail.name},this.dispatchEvent(new CustomEvent("class-select",{detail:this.selectedProduct}))}execQuery(t){this.query=t.detail,this.fetchType="query",this.fetchProductList(`/product-service/classes/byNameStr/${this.query}`)}execRefresh(t){"category"===this.fetchType&&this.fetchProductList(`/product-service/classes/byCategoryID/${this.categoryId}`),"query"===this.fetchType&&this.fetchProductList(`/product-service/classes/byNameStr/${this.query}`)}render(){return M`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div class="w3-dropdown-hover">
        Class hạch toán (${this.categoryName})
        <div class="w3-dropdown-content w3-card-4">
          <div class="w3-bar-block">
            ${ht.map((t=>M`
                <a
                  href="#"
                  class="w3-bar-item w3-button"
                  @click=${()=>this.treeViewClick(t)}
                  >${t.name}</a
                >
              `))}
          </div>
        </div>
      </div>
      <newsky-autocomplete
        .suggestions=${this.productData}
        .defaultValue=${this.defaultValue}
        @selection-changed=${this.productSelected}
        @launch-query=${this.execQuery}
        @launch-refresh=${this.execRefresh}
      >
      </newsky-autocomplete>
    `}}class mt extends at{static properties={attrLoad:{type:Array},attrNew:{type:Array},attrDel:{type:Array},attrShow:{type:Array},productId:{type:String,attribute:"product-id"},allAttr:{type:Array}};static styles=o`
    .hidden {
      display: none !important;
    }
  `;constructor(){super(),this.attrLoad=[],this.attrDel=[],this.attrNew=[],this.allAttr=[],this.attrShow=[]}connectedCallback(){super.connectedCallback(),this.productId&&this.loadProductAttribute(),this.loadAllAttribute()}firstUpdated(){const t=this.shadowRoot.querySelector(".w3-dropdown-hover");t&&t.addEventListener("mouseenter",(()=>{const t=this.shadowRoot.querySelector(".w3-dropdown-content");t&&t.classList.remove("hidden")}))}async loadProductAttribute(){try{const t=await ct("GET",window.sqlHost,`/product-service/ProductAttribute/getProductAttribute/${this.productId}`,window.token,window.username);if(!t.ok)throw new Error(`Response status: ${t.status}`);const e=await t.text();this.attrLoad=e?JSON.parse(e).map((t=>({Id:t.Id,productRellationId:t.productRelationId,status:"recorded",action:"none"}))):[]}catch(t){console.log(t)}}async loadAllAttribute(){try{const t=await ct("GET",window.sqlHost,"/product-service/ProductAttribute",window.token,window.username);if(!t.ok)throw new Error(`Response status: ${t.status}`);const e=await t.json();this.allAttr=e?[...e]:[]}catch(t){console.log(t)}}willUpdate(t){if(t.has("productId")&&this.productId&&this.loadProductAttribute(),t.has("attrLoad")||t.has("attrNew")||t.has("attrDel")){const t=[...this.attrLoad,...this.attrNew];this.attrShow=t.filter((t=>!this.attrDel.some((e=>e.Id.toLowerCase()===t.Id.toLowerCase()))))}}addAttribute(t){try{if(this.attrDel.filter((e=>e.Id.toLowerCase()===t.detail.data.id.toLowerCase())).length>0)return void(this.attrDel=this.attrDel.filter((e=>e.Id.toLowerCase()!==t.detail.data.id.toLowerCase())));if([...this.attrLoad,...this.attrNew].filter((e=>e.Id.toLowerCase()===t.detail.data.id.toLowerCase())).length>0)return void alert(`${t.detail.data.attName} đã được thêm vào từ trước`);this.attrNew=[...this.attrNew,{Id:t.detail.data.id,productRellationId:null,status:"new attribute",action:"add",attName:t.detail.data.attName}];this.shadowRoot.querySelector(".w3-dropdown-content").classList.add("hidden")}catch(t){console.log(t)}}delAttribute(t){this.attrDel=[...this.attrDel,t.detail]}persistData(t){console.log("attr New: ",this.attrNew),console.log("attr Del: ",this.attrDel),console.log("attr show: ",this.attrShow);const e=this.productId?this.productId:t;this.removeAttribute(),this.saveNewAttribute(e)}removeAttribute(){this.attrDel.forEach((t=>{t.productRellationId&&this.removeProductAttribute(t.productRellationId)}))}saveNewAttribute(t){this.attrNew.forEach((e=>{this.saveNewProductAttribute(e,t)}))}async removeProductAttribute(t){try{const e=await ct("DELETE",window.sqlHost,`/product-service/productRelation/${t}`,window.token,window.username);if(!e.ok)throw new Error(`Response status: ${e.status}`)}catch(t){console.log(t)}}async saveNewProductAttribute(t,e){try{const s=await ct("POST",window.sqlHost,"/product-service/productRelation",window.token,window.username,{relTable:"ProductAttribute",productId:e,relId:t.Id,relType:"Attribute",relData:null});if(!s.ok)throw new Error(`Response status: ${s.status}`)}catch(t){console.log(t)}}render(){return M`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <div class="w3-dropdown-hover">
        Các thuộc tính của sản phẩm
        <div
          class="w3-dropdown-content w3-card-4"
          style="width:500px;  max-height: 80vh; overflow-y: auto;"
        >
          <div class="w3-container">
            <newsky-treeview
              .rawData=${this.allAttr}
              @node-clicked=${this.addAttribute}
              cat-name="attName"
            ></newsky-treeview>
          </div>
        </div>
      </div>
      <show-list-attribute
        .listAttr=${this.attrShow}
        @delete-attribute=${this.delAttribute}
      >
      </show-list-attribute>
    `}}class gt extends at{static properties={parentId:{type:String,attribute:"parent-id"},parentName:{type:String},catName:{type:String},tagExtend:{type:String},isChildOf:{type:String},isRoot:{type:Boolean}};constructor(){super(),this.catName="",this.tagExtend="",this.isChildOf=""}connectedCallback(){super.connectedCallback(),this.isChildOf=this.parentId,this.isRoot=!this.parentId}async saveCategory(t){t.preventDefault();try{const t=await ct("POST",window.sqlHost,"/product-service/category",window.token,window.username,{catName:this.catName,tagExtend:this.tagExtend,isChildOf:this.isRoot?null:this.isChildOf?this.isChildOf:null});if(!t.ok)throw new Error(`Response status: ${t.status}`);const e=await t.json();e&&this.dispatchEvent(new CustomEvent("addnew-category",{bubbles:!0,composed:!0,detail:e}))}catch(t){console.log(t)}}cancelDetail(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("cancel-detail",{bubbles:!0,composed:!0,detail:{id:this.deptId,catName:this.catName,tagExtend:this.tagExtend,isChildOf:this.isChildOf}}))}render(){return M`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <div class="w3-row">
        <span class="w3-xxlarge w3-text-indigo">Thêm một category</span>
      </div>
      <div class="w3-row">
        <span class="w3-xlarge w3-text-indigo"
          >là cấp dưới của: ${this.parentName}
        </span>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <label>Category name</label>
        <input
          class="w3-input"
          type="text"
          .value=${this.catName}
          @input=${t=>this.catName=t.target.value}
        />
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <label>Tài khoản hạch toán</label>
        <input
          ?disabled=${!this.isRoot}
          class="w3-input"
          type="text"
          .value=${this.tagExtend}
          @input=${t=>this.tagExtend=t.target.value}
        />
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <input
          class="w3-check"
          type="checkbox"
          .checked=${this.isRoot}
          @click=${()=>{this.isRoot=!this.isRoot}}
        />
        <label>Chuyển thành category chính</label>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <button
          class="w3-button w3-teal w3-round-xlarge"
          @click=${this.saveCategory}
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
    `}}class yt extends at{static properties={rawData:{type:Array},comlumns:{type:Array},catId:{type:String},catName:{type:String},urlData:{type:String},keyConnected:{type:Boolean},loading:{type:Boolean}};constructor(){super(),this.loading=!1,this.rawData=[],this.columns=[{field:"STT",header:"STT",sort:!1},{field:"nameStr",header:"Tên sản phẩm",sort:!0},{field:"id",header:"Đơn vị tính",sort:!0}],this.keyConnected=!1,this.swapCatSucceed=this.swapCatSucceed.bind(this)}connectedCallback(){super.connectedCallback(),this.urlData=`/product-service/product/sql/select/cat-id/${this.catId}`,this.loadProduct(),this.keyConnected=!0,document.addEventListener("swap-product-category",this.swapCatSucceed)}disconnectedCallback(){super.disconnectedCallback(),this.keyConnected=!1,document.removeEventListener("swap-product-category",this.swapCatSucceed)}willUpdate(t){t.has("catId")&&(this.urlData=`/product-service/product/sql/select/cat-id/${this.catId}`,this.loadProduct())}swapCatSucceed(t){const e=t.detail.id;this.rawData=[...this.rawData.filter((t=>t.Id.toLowerCase()!==e.toLowerCase()))]}async loadProduct(){try{this.loading=!0;const t=await ct("GET",window.sqlHost,this.urlData,window.token,window.username);if(!t.ok)throw new Error(`Response status: ${t.status}`);const e=await t.text();e?(this.rawData=[...JSON.parse(e)],this.loading=!1):(this.rawData=[],this.loading=!1)}catch(t){console.log(t)}}colClicked(t){this.dispatchEvent(new CustomEvent("edit-product",{bubbles:!0,composed:!0,detail:t}))}newProduct(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("new-product",{bubbles:!0,composed:!0,detail:{catId:this.catId,catName:this.catName}}))}render(){return this.loading?M`<p>Loading</p>`:M`
          <link
            href="https://www.w3schools.com/w3css/4/w3.css"
            rel="stylesheet"
          />

          <newsky-table
            id="myTable"
            table-title=${this.catName}
            .data=${this.rawData}
            .columns=${this.columns}
            .buildRow=${(t,e)=>M` <td>${e+1}</td>
                <td @click="${()=>this.colClicked(t)}">
                  ${t.nameStr}
                </td>
                <td>${t.MeasName}</td>`}
          ></newsky-table>
          <div class="w3-row" style="padding-top: 10px">
            <div class="w3-col m3">
              <button
                class="w3-button w3-teal w3-round-xlarge"
                @click=${this.newProduct}
              >
                Thêm sản phẩm
              </button>
            </div>
          </div>
        `}}class ft extends at{static properties={nameStr:{type:String},MeasID:{type:String},extraCategoryID:{type:String},minimumStock:{type:Number},mayBeBuy:{type:Boolean},mayBeSell:{type:Boolean},mayBeProduce:{type:Boolean},canSellWithOutStock:{type:Boolean},disContinue:{type:Boolean},classPriceID:{type:String},segmentID:{type:String},comment:{type:String},catName:{type:String},productRel:{type:Array}};constructor(){super(),this.nameStr="",this.MeasID="",this.extraCategoryID="",this.minimumStock=0,this.mayBeBuy=!1,this.mayBeSell=!1,this.mayBeProduce=!1,this.canSellWithOutStock=!1,this.disContinue=!1,this.classPriceID="",this.segmentID="",this.comment=""}async saveProduct(t){t.preventDefault();try{const t=await ct("POST",window.sqlHost,"/product-service/product",window.token,window.username,{nameStr:this.nameStr,MeasID:this.MeasID,extraCategoryID:this.extraCategoryID,minimumStock:this.minimumStock,mayBeBuy:this.mayBeBuy,mayBeSell:this.mayBeSell,mayBeProduce:this.mayBeProduce,canSellWithOutStock:this.canSellWithOutStock,disContinue:this.disContinue,classPriceID:this.classPriceID,segmentID:this.segmentID,comment:this.comment});if(!t.ok)throw new Error(`Response status: ${t.status}`);const e=await t.json();if(e){const t=this.shadowRoot.querySelector("newsky-manage-attribute");t&&t.persistData(e.id),this.dispatchEvent(new CustomEvent("addnew-product",{bubbles:!0,composed:!0,detail:e}))}}catch(t){console.log(t)}}cancelDetail(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("cancel-detail",{bubbles:!0,composed:!0,detail:{back:"showproduct"}}))}measSelected(t){this.MeasID=t.detail.id}segmentSelected(t){this.segmentID=t.detail.id}classSelected(t){this.classPriceID=t.detail.id}render(){return M`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <div class="w3-row">
        <span class="w3-xlarge w3-text-indigo"
          >Thêm một sản phẩm ${this.catName}</span
        >
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <div class="w3-col m8">
          <label>Tên sản phẩm</label>
          <input
            type="text"
            class="w3-input"
            .value=${this.nameStr}
            @input=${t=>this.nameStr=t.target.value}
          />
        </div>
        <div class="w3-col m4" style="padding-left: 10px">
          <newsky-select-meas
            @meas-select=${this.measSelected}
          ></newsky-select-meas>
        </div>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <div class="w3-col m4">
          <newsky-select-segment
            @segment-select=${this.segmentSelected}
          ></newsky-select-segment>
        </div>
        <div class="w3-col m3" style="padding-left: 10px">
          <label>Số tồn kho tối thiểu</label>
          <input
            type="text"
            class="w3-input"
            .value=${this.minimumStock}
            @input=${t=>this.minimumStock=t.target.value}
          />
        </div>
        <div class="w3-col m5" style="padding-left: 10px">
          <input
            class="w3-check"
            type="checkbox"
            .checked=${this.canSellWithOutStock}
            @click=${()=>{this.canSellWithOutStock=!this.canSellWithOutStock}}
          />
          <label>Có thể bán mà không cần tồn kho</label>
        </div>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <div class="w3-col m4">
          <input
            class="w3-check"
            type="checkbox"
            .checked=${this.mayBeProduce}
            @click=${()=>{this.mayBeProduce=!this.mayBeProduce}}
          />
          <label>Có thể sản xuất</label>
        </div>
        <div class="w3-col m4" style="padding-left: 10px">
          <input
            class="w3-check"
            type="checkbox"
            .checked=${this.mayBeBuy}
            @click=${()=>{this.mayBeBuy=!this.mayBeBuy}}
          />
          <label>Có thể mua</label>
        </div>
        <div class="w3-col m4" style="padding-left: 10px">
          <input
            class="w3-check"
            type="checkbox"
            .checked=${this.mayBeSell}
            @click=${()=>{this.mayBeSell=!this.mayBeSell}}
          />
          <label>Có thể bán</label>
        </div>
      </div>
      <div class="w3-row" style="padding-top: 20px">
        <div class="w3-col m6">
          <newsky-select-class
            @class-select=${this.classSelected}
          ></newsky-select-class>
        </div>
      </div>
      <div class="w3-row" style="padding-top: 20px">
        <label>Ghi chú</label>
        <textarea
          rows="4"
          type="text"
          class="w3-input"
          .value=${this.comment}
          @input=${t=>this.comment=t.target.value}
        ></textarea>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <newsky-manage-attribute></newsky-manage-attribute>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <button
          class="w3-button w3-teal w3-round-xlarge"
          @click=${this.saveProduct}
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
    `}}class vt extends at{static properties={nameStr:{type:String},MeasID:{type:String},extraCategoryID:{type:String},minimumStock:{type:Number},mayBeBuy:{type:Boolean},mayBeSell:{type:Boolean},mayBeProduce:{type:Boolean},canSellWithOutStock:{type:Boolean},disContinue:{type:Boolean},classPriceID:{type:String},segmentID:{type:String},comment:{type:String},catName:{type:String},productRel:{type:Array},productId:{type:Array}};constructor(){super(),this.nameStr="",this.MeasID="",this.extraCategoryID="",this.minimumStock=0,this.mayBeBuy=!1,this.mayBeSell=!1,this.mayBeProduce=!1,this.canSellWithOutStock=!1,this.disContinue=!1,this.classPriceID="",this.segmentID="",this.comment=""}willUpdate(t){t.has("productId")&&this.productId&&this.loadCurrentProduct()}async loadCurrentProduct(){try{const t=await ct("GET",window.sqlHost,`/product-service/product/${this.productId}`,window.token,window.username);if(!t.ok)throw new Error(`Response status: ${t.status}`);const e=await t.json();e&&(this.nameStr=e.nameStr,this.MeasID=e.MeasID,this.extraCategoryID=e.extraCategoryID,this.minimumStock=e.minimumStock,this.mayBeBuy=e.mayBeBuy,this.mayBeSell=e.mayBeSell,this.mayBeProduce=e.mayBeProduce,this.canSellWithOutStock=e.canSellWithOutStock,this.disContinue=e.disContinue,this.classPriceID=e.classPriceID,this.segmentID=e.segmentID,this.comment=e.comment)}catch(t){console.log(t)}}async saveProduct(t){t.preventDefault();try{const t=await ct("PUT",window.sqlHost,`/product-service/product/${this.productId}`,window.token,window.username,{nameStr:this.nameStr,MeasID:this.MeasID,extraCategoryID:this.extraCategoryID,minimumStock:this.minimumStock,mayBeBuy:this.mayBeBuy,mayBeSell:this.mayBeSell,mayBeProduce:this.mayBeProduce,canSellWithOutStock:this.canSellWithOutStock,disContinue:this.disContinue,classPriceID:this.classPriceID,segmentID:this.segmentID,comment:this.comment});if(!t.ok)throw new Error(`Response status: ${t.status}`);const e=await t.json();if(e){const t=this.shadowRoot.querySelector("newsky-manage-attribute");t&&t.persistData(e.id),this.dispatchEvent(new CustomEvent("addnew-product",{bubbles:!0,composed:!0,detail:e}))}}catch(t){console.log(t)}}cancelDetail(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("cancel-detail",{bubbles:!0,composed:!0,detail:{back:"showproduct"}}))}measSelected(t){this.MeasID=t.detail.id}segmentSelected(t){this.segmentID=t.detail.id}classSelected(t){this.classPriceID=t.detail.id}render(){return M`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <div class="w3-row">
        <span class="w3-xlarge w3-text-indigo"
          >Thêm một sản phẩm ${this.catName}</span
        >
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <div class="w3-col m8">
          <label>Tên sản phẩm</label>
          <input
            type="text"
            class="w3-input w3-border"
            .value=${this.nameStr}
            @input=${t=>this.nameStr=t.target.value}
          />
        </div>
        <div class="w3-col m4" style="padding-left: 10px">
          <newsky-select-meas
            .defaultValue=${this.MeasID}
            @meas-select=${this.measSelected}
          ></newsky-select-meas>
        </div>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <div class="w3-col m4">
          <newsky-select-segment
            .defaultValue=${this.segmentID}
            @segment-select=${this.segmentSelected}
          ></newsky-select-segment>
        </div>
        <div class="w3-col m3" style="padding-left: 10px">
          <label>Số tồn kho tối thiểu</label>
          <input
            type="text"
            class="w3-input w3-border"
            .value=${this.minimumStock}
            @input=${t=>this.minimumStock=t.target.value}
          />
        </div>
        <div class="w3-col m5" style="padding-left: 10px; padding-top: 22px">
          <input
            class="w3-check"
            type="checkbox"
            .checked=${this.canSellWithOutStock}
            @click=${()=>{this.canSellWithOutStock=!this.canSellWithOutStock}}
          />
          <label>Có thể bán mà không cần tồn kho</label>
        </div>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <div class="w3-col m4">
          <input
            class="w3-check"
            type="checkbox"
            .checked=${this.mayBeProduce}
            @click=${()=>{this.mayBeProduce=!this.mayBeProduce}}
          />
          <label>Có thể sản xuất</label>
        </div>
        <div class="w3-col m4" style="padding-left: 10px">
          <input
            class="w3-check"
            type="checkbox"
            .checked=${this.mayBeBuy}
            @click=${()=>{this.mayBeBuy=!this.mayBeBuy}}
          />
          <label>Có thể mua</label>
        </div>
        <div class="w3-col m4" style="padding-left: 10px">
          <input
            class="w3-check"
            type="checkbox"
            .checked=${this.mayBeSell}
            @click=${()=>{this.mayBeSell=!this.mayBeSell}}
          />
          <label>Có thể bán</label>
        </div>
      </div>
      <div class="w3-row" style="padding-top: 20px">
        <div class="w3-col m6">
          <newsky-select-class
            .defaultValue=${this.classPriceID}
            @class-select=${this.classSelected}
          ></newsky-select-class>
        </div>
      </div>
      <div class="w3-row" style="padding-top: 20px">
        <label>Ghi chú</label>
        <textarea
          rows="4"
          type="text"
          class="w3-input w3-border"
          .value=${this.comment}
          @input=${t=>this.comment=t.target.value}
        ></textarea>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <newsky-manage-attribute
          .productId=${this.productId}
        ></newsky-manage-attribute>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <button
          class="w3-button w3-teal w3-round-xlarge"
          @click=${this.saveProduct}
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
 */customElements.define("newsky-autocomplete",rt),customElements.define("newsky-treeview",nt),customElements.define("newsky-table",class extends at{static properties={data:{type:Array},filteredData:{type:Array},currentPage:{type:Number},pageSize:{type:Number},sortOrder:{type:String},sortColumn:{type:String},tableTitle:{type:String,attribute:"table-title"},headerTemplate:{type:Object},headerAttr:{type:String,attribute:"header-attr"},columns:{type:Array},buildRow:{type:Function}};constructor(){super(),this.data=[],this.filteredData=[],this.currentPage=0,this.pageSize=10,this.sortOrder="asc",this.sortColumn="",this.start=0,this.end=10,this.pageData=[]}willUpdate(t){t.has("data")&&(this.filteredData=[...this.data]),(t.has("currentPage")||t.has("pageSize")||t.has("filteredData"))&&(this.start=this.currentPage*this.pageSize,this.end=this.start+this.pageSize,this.pageData=this.filteredData.slice(this.start,this.end))}catChange(t){this.pageSize=Number(t.target.value)}render(){return M`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <div>
        <div class="w3-cell-row">
          <div class="w3-cell">
            <span class="w3-xlarge">${this.tableTitle}</span>
          </div>
          <div class="w3-cell">
            <input
              class="w3-input"
              type="text"
              placeholder="Search..."
              @input="${this.filterData}"
            />
          </div>
        </div>

        <table class="w3-table w3-bordered w3-hoverable">
          <thead>
            <tr>
              ${this.renderHeader()}
            </tr>
          </thead>
          <tbody>
            ${this.renderRow()}
          </tbody>
        </table>
        <div class="w3-bar">
          <button
            class="w3-button w3-bar-item w3-right"
            @click="${()=>this.changePage(1)}"
            ?disabled="${this.end>=this.filteredData.length}"
          >
            Next
          </button>
          <span class="w3-bar-item w3-right"
            >Page ${this.currentPage+1} of
            ${Math.ceil(this.filteredData.length/this.pageSize)}</span
          >
          <button
            class="w3-button w3-bar-item w3-right"
            @click="${()=>this.changePage(-1)}"
            ?disabled="${0===this.currentPage}"
          >
            Previous
          </button>

          <select
            class="w3-select w3-bar-item w3-right"
            .value=${this.pageSize.toString()}
            @change=${this.catChange}
          >
            <option value="10" selected>10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <span class="w3-bar-item w3-right">Page size</span>
        </div>
      </div>
    `}renderHeader(){return this.columns?this.columns.map((t=>t.sort?M`
              <th @click="${()=>this.sortTable(t.field)}">
                ${t.header}
              </th>
            `:M` <th>${t.header}</th> `)):Object.keys(this.data[0]||{}).map((t=>M`<th @click="${()=>this.sortTable(t)}">${t}</th>`))}renderRow(){return this.pageData.map(((t,e)=>M`
        <tr
          draggable="true"
          @dragstart=${e=>e.dataTransfer.setData("text/plain",JSON.stringify({source:"product",data:t}))}
        >
          ${this.buildRow(t,e)}
        </tr>
      `))}filterData(t){const e=t.target.value.toLowerCase();e.length>1?(this.filteredData=this.data.filter((t=>Object.values(t).some((t=>!!t&&t.toString().toLowerCase().includes(e))))),t.target.value=e,this.currentPage=0):0===e.length&&(this.filteredData=[...this.data])}changePage(t){this.currentPage+=t,this.requestUpdate()}sortTable(t){this.sortOrder="asc"===this.sortOrder?"desc":"asc",this.sortColumn=t;const e=this.filteredData.sort(((e,s)=>e[t]<s[t]?"asc"===this.sortOrder?-1:1:e[t]>s[t]?"asc"===this.sortOrder?1:-1:0));this.filteredData=[...e]}rowClicked(t){const e=new CustomEvent("row-click",{detail:t});this.dispatchEvent(e)}}),customElements.define("newsky-select-meas-cat",class extends at{static properties={catId:{type:String},measId:{type:String},measName:{type:String}};constructor(){super(),this.catId="",this.measName="",this.measId=""}catChange(t){this.catId=t.target.value,this.dispatchEvent(new CustomEvent("meas-cat-change",{detail:this.catId}))}render(){return M`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <select class="w3-select" .value=${this.catId} @change=${this.catChange}>
        ${lt.map((t=>M`<option
              value="${t.value}"
              ?selected=${this.catId===t.value.toString()}
            >
              ${t.name}
            </option>`))}
      </select>
    `}}),customElements.define("newsky-select-meas",ut),customElements.define("newsky-select-segment",pt),customElements.define("newsky-category-chain",class extends at{static properties={catId:{type:String,attribute:"cat-id"},url:{type:String,attribute:"url"},chain:{type:Array},chainStr:{type:String},catName:{type:String,attribute:"cat-name"}};constructor(){super(),this.chain=[],this.chainStr="",this.catName||(this.catName="catName")}async loadChain(){try{const t=await ct("GET",window.sqlHost,`${this.url}/${this.catId}`,window.token,window.username);if(!t.ok)throw new Error(`Response status: ${t.status}`);const e=await t.json();this.chain=e||[]}catch(t){console.log(t)}}willUpdate(t){if(t.has("catId")&&this.loadChain(),t.has("chain")){let t="";const e=this.chain.length;if(e>0)for(let s=0;s<e;s+=1)t=`${t+this.chain[s][this.catName]} >> `;t.length>0&&(this.chainStr=t.slice(0,-3))}}render(){return M` <span>${this.chainStr}</span> `}}),customElements.define("newsky-select-class",wt),customElements.define("show-list-attribute",class extends at{static properties={listAttr:{type:Array}};constructor(){super(),this.listAttr=[]}attrClick(t,e){this.dispatchEvent(new CustomEvent("delete-attribute",{detail:e}))}render(){return M`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <table class="w3-table w3-bordered w3-hoverable">
        <thead>
          <tr>
            <th>STT</th>
            <th>Thuộc tính</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${this.listAttr.map(((t,e)=>M`
              <tr>
                <td>${e+1}</td>
                <td>
                  <newsky-category-chain
                    cat-id=${t.Id}
                    url="/product-service/ProductAttribute/getAttributeChain"
                    cat-name="attName"
                  ></newsky-category-chain>
                </td>
                <td>
                  <a
                    href="#"
                    class="w3-text-red"
                    @click=${e=>this.attrClick(e,t)}
                  >
                    <i class="fa fa-solid fa-trash"></i>
                  </a>
                </td>
              </tr>
            `))}
        </tbody>
      </table>
    `}}),customElements.define("newsky-manage-attribute",mt),customElements.define("edit-category",class extends at{static properties={catId:{type:String,attribute:"dept-id"},catName:{type:String},tagExtend:{type:String},isChildOf:{type:String},keyRender:{type:Number}};constructor(){super(),this.catName="",this.tagExtend="",this.isChildOf="",this.keyRender=0}connectedCallback(){super.connectedCallback(),0===this.keyRender&&(this.loadCategoryDetail(),this.keyRender=1)}willUpdate(t){t.has("catId")&&this.keyRender>0&&this.loadCategoryDetail()}async loadCategoryDetail(){try{const t=await ct("GET",window.sqlHost,`/product-service/category/${this.catId}`,window.token,window.username);if(!t.ok)throw new Error(`Response status: ${t.status}`);const e=await t.json();e&&(console.log("load category ",e),this.catName=e.catName,this.tagExtend=e.tagExtend,this.isChildOf=e.isChildOf)}catch(t){console.log(t)}}async saveCategory(t){t.preventDefault(),console.log("data before saving ",{catName:this.catName,tagExtend:this.tagExtend,isChildOf:this.isChildOf});try{const t=await ct("PUT",window.sqlHost,`/product-service/category/${this.catId}`,window.token,window.username,{catName:this.catName,tagExtend:this.tagExtend,isChildOf:this.isChildOf});if(!t.ok)throw new Error(`Response status: ${t.status}`);const e=await t.json();e&&this.dispatchEvent(new CustomEvent("save-category",{bubbles:!0,composed:!0,detail:e}))}catch(t){console.log(t)}}async deleteCategory(t){t.preventDefault();try{const t=await ct("DELETE",window.sqlHost,`/product-service/category/${this.catId}`,window.token,window.username);if(!t.ok)throw new Error(`Response status: ${t.status}`);await t.json()&&this.dispatchEvent(new CustomEvent("delete-category",{bubbles:!0,composed:!0,detail:{id:this.catId,catName:this.catName,tagExtend:this.tagExtend,isChildOf:this.isChildOf}}))}catch(t){console.log(t)}}cancelDetail(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("cancel-detail",{bubbles:!0,composed:!0,detail:{id:this.catId,catName:this.catName,tagExtend:this.tagExtend,isChildOf:this.isChildOf}}))}render(){return M`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />

      <div class="w3-row" style="padding-top: 10px">
        <span class="w3-xxlarge w3-text-indigo">Sửa một category</span>
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <label>Caategory name</label>
        <input
          class="w3-input"
          type="text"
          .value=${this.catName}
          @input=${t=>this.catName=t.target.value}
        />
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <label>Tài khoản hạch toán</label>
        <input
          ?disabled=${this.isRoot}
          class="w3-input"
          type="text"
          .value=${this.tagExtend}
          @input=${t=>this.tagExtend=t.target.value}
        />
      </div>
      <div class="w3-row" style="padding-top: 10px">
        <button
          class="w3-button w3-teal w3-round-xlarge"
          @click=${this.saveCategory}
        >
          Save
        </button>
        <button
          class="w3-button w3-orange w3-round-xlarge"
          @click=${this.deleteCategory}
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
    `}}),customElements.define("new-category",gt),customElements.define("list-product",yt),customElements.define("new-product",ft),customElements.define("edit-product",vt),customElements.define("cat-detail",class extends at{static properties={mode:{type:String,attribute:"mode"},catId:{type:String,attribute:"cat-id"},catName:{type:String},empId:{type:String}};render(){return M`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />

      ${((t,e,s)=>{for(const s of e)if(s[0]===t)return(0,s[1])();return s?.()})(this.mode,[["",()=>M`<div></div>`],["edit",()=>M`<edit-category .catId=${this.catId}></edit-category>`],["add",()=>M`<new-category
              .parentId=${this.catId}
              .parentName=${this.catName}
            ></new-category>`],["showproduct",()=>M`<list-product
              .catId=${this.catId}
              .catName=${this.catName}
            ></list-product>`],["new-product",()=>M`<new-product
              .extraCategoryID=${this.catId}
              .catName=${this.catName}
            ></new-product>`],["edit-product",()=>M`<edit-product .productId=${this.empId}></edit-product>`]])}
    `}}),customElements.define("newsky-category",class extends at{static properties={mode:{type:String},catId:{type:String},catName:{type:String},catRaw:{type:Array},nodeIdShow:{type:String},empId:{type:String}};constructor(){super(),this.mode="",this.catId="",this.catName="",this.catRaw=[],this.nodeIdShow="",this.empId=""}connectedCallback(){super.connectedCallback(),this.loadDataForTreeView(),this.addEventListener("save-category",this.listenSaveEditItem),this.addEventListener("addnew-category",this.listenAddItem),this.addEventListener("cancel-detail",this.listenCancelDetail),this.addEventListener("delete-category",this.listenDelItem),this.addEventListener("new-product",this.listenNewProduct),this.addEventListener("addnew-product",this.listenAddNewProduct),this.addEventListener("edit-product",this.listenEditProduct),this.addEventListener("save-edit-product",this.listenSaveEditProduct)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("save-category",this.listenSaveEditItem),this.removeEventListener("addnew-category",this.listenAddItem),this.removeEventListener("cancel-detail",this.listenCancelDetail),this.removeEventListener("delete-category",this.listenDelItem),this.removeEventListener("new-product",this.listenNewProduct),this.removeEventListener("addnew-product",this.listenAddNewProduct),this.removeEventListener("edit-product",this.listenEditProduct),this.removeEventListener("save-edit-product",this.listenSaveEditProduct)}async loadDataForTreeView(){try{const t=await ct("GET",window.sqlHost,"/product-service/category",window.token,window.username);if(!t.ok)throw new Error(`Response status: ${t.status}`);const e=await t.json();e&&(this.catRaw=[...e])}catch(t){console.log(t)}}async saveCategory(t){try{const e=await ct("PUT",window.sqlHost,`/product-service/category/${t.id}`,window.token,window.username,{catName:t.catName,isActive:t.isActive,isChildOf:t.isChildOf});if(!e.ok)throw new Error(`Response status: ${e.status}`);if(await e.json())return!0}catch(t){console.log(t)}return!1}async swapProductCategory(t,e){try{const s=await ct("GET",window.sqlHost,`/product-service/product/swap/${t}/${e}`,window.token,window.username);if(!s.ok)throw new Error(`Response status: ${s.status}`);const i=await s.json();document.dispatchEvent(new CustomEvent("swap-product-category",{detail:i}))}catch(t){console.log(t)}}listenCancelDetail(t){t.detail.back?this.mode=t.detail.back:this.mode=""}listenNodeClick(t){this.catId=t.detail.data.id,this.catName=t.detail.data.catName,this.mode="ctrl"===t.detail.key?"edit":"showproduct"}listenNodeDrop(t){if("treenode"===t.detail.source){const e=t.detail.drag,s=t.detail.target.id,i={id:e.id,catName:e.catName,tagExtend:e.tagExtend,isChildOf:s};if(this.saveCategory(i)){const t=this.catRaw.length;for(let i;i<t;i+=1)this.catRaw[i].id===e.id&&(this.catRaw[i].isChildOf=s)}else alert("There is an error while saving category")}"product"===t.detail.source&&(console.log("dragg and drop: ",t.detail),this.swapProductCategory(t.detail.drag.Id,t.detail.target.id))}listenNewNodeBttClick(t){this.catId=t.detail.currNode?.id||"",this.mode="add"}listenSaveEditItem(t){console.log("data received from event ",t.detail);const e=this.shadowRoot.querySelector("newsky-treeview");e&&e.updateNodeName(t.detail.id,t.detail.catName),this.mode=""}listenDelItem(t){}listenAddItem(t){this.catRaw=[...this.catRaw,t.detail],this.nodeIdShow=t.detail.id,this.mode=""}listenNewProduct(t){this.mode="new-product"}listenAddNewProduct(t){this.mode="showproduct"}listenEditProduct(t){this.empId=t.detail.Id,this.mode="edit-product"}listenSaveEditProduct(t){this.mode="showproduct"}render(){return M`
      <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet" />
      <div class="w3-row">
        <div class="w3-col m5">
          <newsky-treeview
            cat-name="catName"
            .rawData=${this.catRaw}
            .nodeIdShow=${this.nodeIdShow}
            @node-clicked=${this.listenNodeClick}
            @node-drop=${this.listenNodeDrop}
            @create-newnode=${this.listenNewNodeBttClick}
          ></newsky-treeview>
        </div>
        <div class="w3-col m7" style="padding-left: 10px">
          <cat-detail
            .mode=${this.mode}
            .catId=${this.catId}
            .catName=${this.catName}
            .empId=${this.empId}
          ></cat-detail>
        </div>
      </div>
    `}});
