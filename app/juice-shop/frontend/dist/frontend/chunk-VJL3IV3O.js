import{a as xe}from"./chunk-YVDT5JXT.js";import{l as ye}from"./chunk-NWDAIMF4.js";import{$ as b,Ab as D,Ac as u,Ad as he,Bc as F,C as m,Cb as A,Db as te,Dd as be,Eb as ne,Fb as oe,Fc as le,Ga as c,Gb as O,Hb as w,Ib as C,Jc as ce,Mb as G,Nb as P,Ob as k,Pb as re,Sa as x,Ta as T,Ua as Z,Uc as de,Ud as fe,Vd as j,X as K,Y as y,Ya as X,Z as I,aa as v,ba as s,cc as ae,ed as ue,fb as g,ha as z,hb as Y,ia as q,ja as J,jb as ee,je as _e,ka as M,kc as ie,ke as ve,me as ke,na as B,nd as ge,ob as f,pb as d,q as h,qb as p,qc as se,ra as $,rb as S,td as me,wa as E,xb as R,yc as L,yd as pe,zd as U}from"./chunk-QDZ6R7S6.js";var Ie=new b("COOKIE_OPTIONS"),H=new b("COOKIE_WRITER");function N(o){return o==null}function _(o){return!N(o)}function De(o){return typeof o=="string"}function Te(o,r){return r?{path:_(r.path)?r.path:o.path,domain:_(r.domain)?r.domain:o.domain,expires:_(r.expires)?r.expires:o.expires,secure:_(r.secure)?r.secure:o.secure,sameSite:_(r.sameSite)?r.sameSite:o.sameSite,httpOnly:_(r.httpOnly)?r.httpOnly:o.httpOnly,storeUnencoded:_(r.storeUnencoded)?r.storeUnencoded:o.storeUnencoded}:o}function Ae(o){let r={},e="",n,t,a,i,l;if(o!==e)for(e=o,n=e.split(";"),r={},a=0;a<n.length;a++)t=n[a],i=t.indexOf("="),i>0&&(l=Se(t.substring(0,i).trim()),N(r[l])&&(r[l]=Se(t.substring(i+1).trim())));return r}function Oe(o,r,e){let n=e?.expires,t;N(r)?(n="Thu, 01 Jan 1970 00:00:00 GMT",t=""):t=r,De(n)&&(n=new Date(n));let a=e?.storeUnencoded?r:encodeURIComponent(t),i=encodeURIComponent(o)+"="+a;i+=e?.path?";path="+e.path:"",i+=e?.domain?";domain="+e.domain:"",i+=n?";expires="+n.toUTCString():"",i+=e?.sameSite?"; SameSite="+e.sameSite:"",i+=e?.secure?";secure":"",i+=e?.httpOnly?"; HttpOnly":"";let l=i.length+1;return l>4096&&console.log("Cookie '"+o+"' possibly not set or overflowed because it was too large ("+l+" > 4096 bytes)!"),i}function Se(o){try{return decodeURIComponent(o)}catch(r){return o}}var Q=(()=>{class o{constructor(e={},n){this.injector=n,this.defaultOptions={path:this.injector.get(ce,"/"),domain:void 0,expires:void 0,secure:!1,httpOnly:!1},this.options=Te(this.defaultOptions,e)}}return o.\u0275fac=function(e){return new(e||o)(v(Ie),v(J))},o.\u0275prov=y({token:o,factory:o.\u0275fac}),o})(),we=(()=>{class o{constructor(e,n,t){this.document=e,this.optionsProvider=n,this.cookieWriterService=t,this.options=this.optionsProvider.options}hasKey(e){let n=this.get(e);return _(n)}get(e){return this.getAll()?.[e]}getObject(e){let n=this.get(e);if(!N(n))return n===""?{}:JSON.parse(n)}getAll(){let e=this.cookieWriterService.readAllAsString();return Ae(e)}put(e,n,t){let a=Te(this.options,t);this.cookieWriterService.write(e,n,a)}putObject(e,n,t){this.put(e,JSON.stringify(n),t)}remove(e,n){this.put(e,void 0,n)}removeAll(e){let n=this.getAll();Object.keys(n).forEach(t=>this.remove(t,e))}}return o.\u0275fac=function(e){return new(e||o)(v(M),v(Q),v(H))},o.\u0275prov=y({token:o,factory:o.\u0275fac}),o})(),Ge=(()=>{class o{constructor(e){this.document=e}readAllAsString(){return this.document.cookie||""}write(e,n,t){this.document.cookie=Oe(e,n,t)}}return o.\u0275fac=function(e){return new(e||o)(v(M))},o.\u0275prov=y({token:o,factory:o.\u0275fac}),o})();function Pe(o,r,e){return new we(o,r,e)}var ot=(()=>{class o{static withOptions(e={}){return{ngModule:o,providers:[{provide:Ie,useValue:e},{provide:H,useClass:Ge},{provide:we,useFactory:Pe,deps:[M,Q,H]}]}}static forRoot(e={}){return this.withOptions(e)}static forChild(e={}){return this.withOptions(e)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=T({type:o}),o.\u0275inj=I({providers:[Q]}),o})();var dt=(()=>{class o{http=s(ue);hostServer=le.hostServer;host=this.hostServer+"/api/Challenges";find(e){return this.http.get(this.host+"/",{params:e}).pipe(h(n=>n.data),m(n=>{throw n}))}repeatNotification(e){return this.http.get(this.hostServer+"/rest/repeat-notification",{params:{challenge:e},responseType:"text"}).pipe(m(n=>{throw n}))}continueCode(){return this.http.get(this.hostServer+"/rest/continue-code").pipe(h(e=>e.continueCode),m(e=>{throw e}))}continueCodeFindIt(){return this.http.get(this.hostServer+"/rest/continue-code-findIt").pipe(h(e=>e.continueCode),m(e=>{throw e}))}continueCodeFixIt(){return this.http.get(this.hostServer+"/rest/continue-code-fixIt").pipe(h(e=>e.continueCode),m(e=>{throw e}))}restoreProgress(e){return this.http.put(this.hostServer+"/rest/continue-code/apply/"+e,{}).pipe(h(n=>n.data),m(n=>{throw n}))}restoreProgressFindIt(e){return this.http.put(this.hostServer+"/rest/continue-code-findIt/apply/"+e,{}).pipe(h(n=>n.data),m(n=>{throw n}))}restoreProgressFixIt(e){return this.http.put(this.hostServer+"/rest/continue-code-fixIt/apply/"+e,{}).pipe(h(n=>n.data),m(n=>{throw n}))}static \u0275fac=function(n){return new(n||o)};static \u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var Ce=(()=>{class o{_animationsDisabled=j();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=x({type:o,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(n,t){n&2&&k("mat-pseudo-checkbox-indeterminate",t.state==="indeterminate")("mat-pseudo-checkbox-checked",t.state==="checked")("mat-pseudo-checkbox-disabled",t.disabled)("mat-pseudo-checkbox-minimal",t.appearance==="minimal")("mat-pseudo-checkbox-full",t.appearance==="full")("_mat-animation-noopable",t._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(n,t){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return o})();var Le=["button"],Ue=["*"];function He(o,r){if(o&1&&(d(0,"div",2),S(1,"mat-pseudo-checkbox",6),p()),o&2){let e=A();c(),f("disabled",e.disabled)}}var Me=new b("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Be=new b("MatButtonToggleGroup"),Qe={provide:ye,useExisting:K(()=>Ke),multi:!0},W=class{source;value;constructor(r,e){this.source=r,this.value=e}},Ke=(()=>{class o{_changeDetector=s(L);_dir=s(me,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=s(U).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(n=>n.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new B;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new B;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=s(Me,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new xe(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||he(e))return;let t=e.target.id,a=this._buttonToggles.toArray().findIndex(l=>l.buttonId===t),i=null;switch(e.keyCode){case 32:case 13:i=this._buttonToggles.get(a)||null;break;case 38:i=this._getNextButton(a,-1);break;case 37:i=this._getNextButton(a,this.dir==="ltr"?-1:1);break;case 40:i=this._getNextButton(a,1);break;case 39:i=this._getNextButton(a,this.dir==="ltr"?1:-1);break;default:return}i&&(e.preventDefault(),i._onButtonClick(),i.focus())}_emitChangeEvent(e){let n=new W(e,this.value);this._rawValue=n.value,this._controlValueAccessorChangeFn(n.value),this.change.emit(n)}_syncButtonToggle(e,n,t=!1,a=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?n?this._selectionModel.select(e):this._selectionModel.deselect(e):a=!0,a?Promise.resolve().then(()=>this._updateModelValue(e,t)):this._updateModelValue(e,t)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(n=>e.value!=null&&n===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let n=this._buttonToggles.get(e);if(!n.disabled){n.tabIndex=0;break}}}_getNextButton(e,n){let t=this._buttonToggles;for(let a=1;a<=t.length;a++){let i=(e+n*a+t.length)%t.length,l=t.get(i);if(l&&!l.disabled)return l}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let n=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(t=>this._selectValue(t,n))):(this._clearSelection(),this._selectValue(e,n)),!this.multiple&&n.every(t=>t.tabIndex===-1)){for(let t of n)if(!t.disabled){t.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,n){for(let t of n)if(t.value===e){t.checked=!0,this._selectionModel.select(t),this.multiple||(t.tabIndex=0);break}}_updateModelValue(e,n){n&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(n){return new(n||o)};static \u0275dir=Z({type:o,selectors:[["mat-button-toggle-group"]],contentQueries:function(n,t,a){if(n&1&&oe(a,Ee,5),n&2){let i;w(i=C())&&(t._buttonToggles=i)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(n,t){n&1&&D("keydown",function(i){return t._keydown(i)}),n&2&&(g("role",t.multiple?"group":"radiogroup")("aria-disabled",t.disabled),k("mat-button-toggle-vertical",t.vertical)("mat-button-toggle-group-appearance-standard",t.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",u],value:"value",multiple:[2,"multiple","multiple",u],disabled:[2,"disabled","disabled",u],disabledInteractive:[2,"disabledInteractive","disabledInteractive",u],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",u],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",u]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[ae([Qe,{provide:Be,useExisting:o}])]})}return o})(),Ee=(()=>{class o{_changeDetectorRef=s(L);_elementRef=s(E);_focusMonitor=s(be);_idGenerator=s(U);_animationDisabled=j();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new B;constructor(){s(ge).load(ve);let e=s(Be,{optional:!0}),n=s(new se("tabindex"),{optional:!0})||"",t=s(Me,{optional:!0});this._tabIndex=$(parseInt(n)||0),this.buttonToggleGroup=e,this._appearance=t&&t.appearance?t.appearance:"standard",this._disabledInteractive=t?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let n=this.buttonToggleGroup._buttonToggles.find(t=>t.tabIndex===0);n&&(n.tabIndex=-1),this.tabIndex=0}this.change.emit(new W(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=x({type:o,selectors:[["mat-button-toggle"]],viewQuery:function(n,t){if(n&1&&O(Le,5),n&2){let a;w(a=C())&&(t._buttonElement=a.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(n,t){n&1&&D("focus",function(){return t.focus()}),n&2&&(g("aria-label",null)("aria-labelledby",null)("id",t.id)("name",null),k("mat-button-toggle-standalone",!t.buttonToggleGroup)("mat-button-toggle-checked",t.checked)("mat-button-toggle-disabled",t.disabled)("mat-button-toggle-disabled-interactive",t.disabledInteractive)("mat-button-toggle-appearance-standard",t.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",u],appearance:"appearance",checked:[2,"checked","checked",u],disabled:[2,"disabled","disabled",u],disabledInteractive:[2,"disabledInteractive","disabledInteractive",u]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Ue,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(n,t){if(n&1&&(te(),d(0,"button",1,0),D("click",function(){return t._onButtonClick()}),Y(2,He,2,1,"div",2),d(3,"span",3),ne(4),p()(),S(5,"span",4)(6,"span",5)),n&2){let a=G(1);f("id",t.buttonId)("disabled",t.disabled&&!t.disabledInteractive||null),g("role",t.isSingleSelector()?"radio":"button")("tabindex",t.disabled&&!t.disabledInteractive?-1:t.tabIndex)("aria-pressed",t.isSingleSelector()?null:t.checked)("aria-checked",t.isSingleSelector()?t.checked:null)("name",t._getButtonName())("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby)("aria-disabled",t.disabled&&t.disabledInteractive?"true":null),c(2),ee(t.buttonToggleGroup&&(!t.buttonToggleGroup.multiple&&!t.buttonToggleGroup.hideSingleSelectionIndicator||t.buttonToggleGroup.multiple&&!t.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),c(4),f("matRippleTrigger",a)("matRippleDisabled",t.disableRipple||t.disabled)}},dependencies:[_e,Ce],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return o})(),Gt=(()=>{class o{static \u0275fac=function(n){return new(n||o)};static \u0275mod=T({type:o});static \u0275inj=I({imports:[ke,Ee,pe]})}return o})();var qe=["determinateSpinner"];function Je(o,r){if(o&1&&(z(),d(0,"svg",11),S(1,"circle",12),p()),o&2){let e=A();g("viewBox",e._viewBox()),c(),P("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),g("r",e._circleRadius())}}var $e=new b("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Re})}),Re=100,Ze=10,Qt=(()=>{class o{_elementRef=s(E);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=s($e),n=fe(),t=this._elementRef.nativeElement;this._noopAnimations=n==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=t.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&n==="reduced-motion"&&t.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=Re;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-Ze)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(n){return new(n||o)};static \u0275cmp=x({type:o,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(n,t){if(n&1&&O(qe,5),n&2){let a;w(a=C())&&(t._determinateCircle=a.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(n,t){n&2&&(g("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",t.mode==="determinate"?t.value:null)("mode",t.mode),re("mat-"+t.color),P("width",t.diameter,"px")("height",t.diameter,"px")("--mat-progress-spinner-size",t.diameter+"px")("--mat-progress-spinner-active-indicator-width",t.diameter+"px"),k("_mat-animation-noopable",t._noopAnimations)("mdc-circular-progress--indeterminate",t.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",F],diameter:[2,"diameter","diameter",F],strokeWidth:[2,"strokeWidth","strokeWidth",F]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(n,t){if(n&1&&(X(0,Je,2,8,"ng-template",null,0,ie),d(2,"div",2,1),z(),d(4,"svg",3),S(5,"circle",4),p()(),q(),d(6,"div",5)(7,"div",6)(8,"div",7),R(9,8),p(),d(10,"div",9),R(11,8),p(),d(12,"div",10),R(13,8),p()()()),n&2){let a=G(1);c(4),g("viewBox",t._viewBox()),c(),P("stroke-dasharray",t._strokeCircumference(),"px")("stroke-dashoffset",t._strokeDashOffset(),"px")("stroke-width",t._circleStrokeWidth(),"%"),g("r",t._circleRadius()),c(4),f("ngTemplateOutlet",a),c(2),f("ngTemplateOutlet",a),c(2),f("ngTemplateOutlet",a)}},dependencies:[de],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0})}return o})();export{we as a,ot as b,dt as c,Ce as d,Ke as e,Ee as f,Gt as g,Qt as h};
