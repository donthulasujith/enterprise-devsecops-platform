import{A as ha,a as Bt,b as qt,w as F,x as U,z as ma}from"./chunk-OKA37M7B.js";import{D as pa,a as yt}from"./chunk-UNFVUBM2.js";import{A as Kt,B as aa,C as na,F as ia,H as ra,I as sa,J as oa,M as da,P as la,Q as ca,g as qe,j as Ue,l as kt,m as At,n as Mt,q as St,r as Vt,s as Et,u as xt}from"./chunk-DYXK4NW4.js";import{a as Ct}from"./chunk-QBYXNN7Z.js";import{e as ua}from"./chunk-YVDT5JXT.js";import{I as ea,J as ta,l as Ut,m as jt,n as Wt,o as q,q as $t,r as Gt,t as Ge,u as ie,w as Xt,x as Zt,y as Jt}from"./chunk-NWDAIMF4.js";import{$ as Re,A as ot,Ab as f,Ac as Q,Ad as K,Bb as _t,Cb as h,Da as Oe,Db as He,Eb as ze,Ed as It,F as dt,Fb as gt,Fd as Ae,Ga as d,Gb as N,Hb as A,Ia as Ne,Ib as M,La as Be,Mb as ft,Na as ut,Nb as be,Nd as Ft,Oa as mt,Ob as Y,Pb as ve,Q as me,Qb as u,Rb as v,Rd as Rt,Sa as w,Sb as O,Tb as Qe,Ua as J,Vb as De,Vd as je,Wb as ye,X as Fe,Xa as Ye,Xb as Ce,Y as he,Ya as Le,a as R,aa as lt,ae as Tt,ba as s,be as Pt,cc as we,ce as Ot,dc as bt,e as L,ee as Nt,fa as D,fb as k,ga as y,ha as X,hb as E,hc as S,ia as Te,ic as I,ja as _e,jb as x,jc as vt,jd as wt,ka as ct,kd as Ke,ke as Yt,l as pe,le as We,mb as ge,na as p,nb as fe,nd as te,ne,oa as Pe,ob as m,oe as $e,pb as l,pe as Lt,qb as c,qc as Dt,ra as _,rb as g,re as Ht,sb as T,ta as H,tb as P,td as ae,ua as pt,ub as ht,ue as zt,ve as Qt,wa as Z,yb as ee,yc as B,z as ue,zb as z,zd as ke}from"./chunk-QDZ6R7S6.js";import"./chunk-NUMHA4AJ.js";var Ra=["mat-calendar-body",""];function Ta(i,o){return this._trackRow(o)}var Ca=(i,o)=>o.id;function Pa(i,o){if(i&1&&(T(0,"tr",0)(1,"td",3),u(2),P()()),i&2){let e=h();d(),be("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),k("colspan",e.numCols),d(),O(" ",e.label," ")}}function Oa(i,o){if(i&1&&(T(0,"td",3),u(1),P()),i&2){let e=h(2);be("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),k("colspan",e._firstRowOffset),d(),O(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function Na(i,o){if(i&1){let e=ee();T(0,"td",6)(1,"button",7),_t("click",function(t){let n=D(e).$implicit,r=h(2);return y(r._cellClicked(n,t))})("focus",function(t){let n=D(e).$implicit,r=h(2);return y(r._emitActiveDateChange(n,t))}),T(2,"span",8),u(3),P(),ht(4,"span",9),P()()}if(i&2){let e=o.$implicit,a=o.$index,t=h().$index,n=h();be("width",n._cellWidth)("padding-top",n._cellPadding)("padding-bottom",n._cellPadding),k("data-mat-row",t)("data-mat-col",a),d(),ve(e.cssClasses),Y("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",n._isActiveCell(t,a))("mat-calendar-body-range-start",n._isRangeStart(e.compareValue))("mat-calendar-body-range-end",n._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",n._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",n._isComparisonBridgeStart(e.compareValue,t,a))("mat-calendar-body-comparison-bridge-end",n._isComparisonBridgeEnd(e.compareValue,t,a))("mat-calendar-body-comparison-start",n._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",n._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",n._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",n._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",n._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",n._isInPreview(e.compareValue)),z("tabIndex",n._isActiveCell(t,a)?0:-1),k("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",n._isSelected(e.compareValue))("aria-current",n.todayValue===e.compareValue?"date":null)("aria-describedby",n._getDescribedby(e.compareValue)),d(),Y("mat-calendar-body-selected",n._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",n._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",n.todayValue===e.compareValue),d(),O(" ",e.displayValue," ")}}function Ba(i,o){if(i&1&&(T(0,"tr",1),E(1,Oa,2,6,"td",4),ge(2,Na,5,49,"td",5,Ca),P()),i&2){let e=o.$implicit,a=o.$index,t=h();d(),x(a===0&&t._firstRowOffset?1:-1),d(),fe(e)}}function Ya(i,o){if(i&1&&(l(0,"th",2)(1,"span",6),u(2),c(),l(3,"span",3),u(4),c()()),i&2){let e=o.$implicit;d(2),v(e.long),d(2),v(e.narrow)}}var La=["*"];function Ha(i,o){}function za(i,o){if(i&1){let e=ee();l(0,"mat-month-view",4),Ce("activeDateChange",function(t){D(e);let n=h();return ye(n.activeDate,t)||(n.activeDate=t),y(t)}),f("_userSelection",function(t){D(e);let n=h();return y(n._dateSelected(t))})("dragStarted",function(t){D(e);let n=h();return y(n._dragStarted(t))})("dragEnded",function(t){D(e);let n=h();return y(n._dragEnded(t))}),c()}if(i&2){let e=h();De("activeDate",e.activeDate),m("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function Qa(i,o){if(i&1){let e=ee();l(0,"mat-year-view",5),Ce("activeDateChange",function(t){D(e);let n=h();return ye(n.activeDate,t)||(n.activeDate=t),y(t)}),f("monthSelected",function(t){D(e);let n=h();return y(n._monthSelectedInYearView(t))})("selectedChange",function(t){D(e);let n=h();return y(n._goToDateInView(t,"month"))}),c()}if(i&2){let e=h();De("activeDate",e.activeDate),m("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function Ka(i,o){if(i&1){let e=ee();l(0,"mat-multi-year-view",6),Ce("activeDateChange",function(t){D(e);let n=h();return ye(n.activeDate,t)||(n.activeDate=t),y(t)}),f("yearSelected",function(t){D(e);let n=h();return y(n._yearSelectedInMultiYearView(t))})("selectedChange",function(t){D(e);let n=h();return y(n._goToDateInView(t,"year"))}),c()}if(i&2){let e=h();De("activeDate",e.activeDate),m("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function qa(i,o){}var Ua=["button"],ja=[[["","matDatepickerToggleIcon",""]]],Wa=["[matDatepickerToggleIcon]"];function $a(i,o){i&1&&(X(),l(0,"svg",2),g(1,"path",3),c())}var ce=(()=>{class i{changes=new L;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,a){return`${e} \u2013 ${a}`}formatYearRangeLabel(e,a){return`${e} to ${a}`}static \u0275fac=function(a){return new(a||i)};static \u0275prov=he({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ga=0,oe=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=Ga++;cssClasses;constructor(o,e,a,t,n,r=o,b){this.value=o,this.displayValue=e,this.ariaLabel=a,this.enabled=t,this.compareValue=r,this.rawValue=b,this.cssClasses=n instanceof Set?Array.from(n):n}},Xa={passive:!1,capture:!0},Me={passive:!0,capture:!0},_a={passive:!0},G=(()=>{class i{_elementRef=s(Z);_ngZone=s(Pe);_platform=s(wt);_intl=s(ce);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new p;previewChange=new p;activeDateChange=new p;dragStarted=new p;dragEnded=new p;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s(_e);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=s(Be),a=s(ke);this._startDateLabelId=a.getId("mat-calendar-body-start-"),this._endDateLabelId=a.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=a.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=a.getId("mat-calendar-body-comparison-end-"),s(te).load(Yt),this._ngZone.runOutsideAngular(()=>{let t=this._elementRef.nativeElement,n=[e.listen(t,"touchmove",this._touchmoveHandler,Xa),e.listen(t,"mouseenter",this._enterHandler,Me),e.listen(t,"focus",this._enterHandler,Me),e.listen(t,"mouseleave",this._leaveHandler,Me),e.listen(t,"blur",this._leaveHandler,Me),e.listen(t,"mousedown",this._mousedownHandler,_a),e.listen(t,"touchstart",this._mousedownHandler,_a)];this._platform.isBrowser&&n.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=n})}_cellClicked(e,a){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:a})}_emitActiveDateChange(e,a){e.enabled&&this.activeDateChange.emit({value:e.value,event:a})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let a=e.numCols,{rows:t,numCols:n}=this;(e.rows||a)&&(this._firstRowOffset=t&&t.length&&t[0].length?n-t[0].length:0),(e.cellAspectRatio||a||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/n}%`),(a||!this._cellWidth)&&(this._cellWidth=`${100/n}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,a){let t=e*this.numCols+a;return e&&(t-=this._firstRowOffset),t==this.activeCell}_focusActiveCell(e=!0){Ne(()=>{setTimeout(()=>{let a=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");a&&(e||(this._skipNextFocus=!0),a.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Je(e,this.startValue,this.endValue)}_isRangeEnd(e){return et(e,this.startValue,this.endValue)}_isInRange(e){return tt(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Je(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,a,t){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let n=this.rows[a][t-1];if(!n){let r=this.rows[a-1];n=r&&r[r.length-1]}return n&&!this._isRangeEnd(n.compareValue)}_isComparisonBridgeEnd(e,a,t){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let n=this.rows[a][t+1];if(!n){let r=this.rows[a+1];n=r&&r[0]}return n&&!this._isRangeStart(n.compareValue)}_isComparisonEnd(e){return et(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return tt(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Je(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return et(e,this.previewStart,this.previewEnd)}_isInPreview(e){return tt(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let a=this._getCellFromElement(e.target);a&&this._ngZone.run(()=>this.previewChange.emit({value:a.enabled?a:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let a=ga(e),t=a?this._getCellFromElement(a):null;a!==e.target&&(this._didDragSinceMouseDown=!0),Ze(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:t?.enabled?t:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let a=e.target&&this._getCellFromElement(e.target);!a||!this._isInRange(a.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:a.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let a=Ze(e.target);if(!a){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}a.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let t=this._getCellFromElement(a);this.dragEnded.emit({value:t?.rawValue??null,event:e})})};_touchendHandler=e=>{let a=ga(e);a&&this._mouseupHandler({target:a})};_getCellFromElement(e){let a=Ze(e);if(a){let t=a.getAttribute("data-mat-row"),n=a.getAttribute("data-mat-col");if(t&&n)return this.rows[parseInt(t)]?.[parseInt(n)]||null}return null}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=w({type:i,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[H],attrs:Ra,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(a,t){a&1&&(E(0,Pa,3,6,"tr",0),ge(1,Ba,4,1,"tr",1,Ta,!0),T(3,"span",2),u(4),P(),T(5,"span",2),u(6),P(),T(7,"span",2),u(8),P(),T(9,"span",2),u(10),P()),a&2&&(x(t._firstRowOffset<t.labelMinRequiredCells?0:-1),d(),fe(t.rows),d(2),z("id",t._startDateLabelId),d(),O(" ",t.startDateAccessibleName,`
`),d(),z("id",t._endDateLabelId),d(),O(" ",t.endDateAccessibleName,`
`),d(),z("id",t._comparisonStartDateLabelId),d(),Qe(" ",t.comparisonDateAccessibleName," ",t.startDateAccessibleName,`
`),d(),z("id",t._comparisonEndDateLabelId),d(),Qe(" ",t.comparisonDateAccessibleName," ",t.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Xe(i){return i?.nodeName==="TD"}function Ze(i){let o;return Xe(i)?o=i:Xe(i.parentNode)?o=i.parentNode:Xe(i.parentNode?.parentNode)&&(o=i.parentNode.parentNode),o?.getAttribute("data-mat-row")!=null?o:null}function Je(i,o,e){return e!==null&&o!==e&&i<e&&i===o}function et(i,o,e){return o!==null&&o!==e&&i>=o&&i===e}function tt(i,o,e,a){return a&&o!==null&&e!==null&&o!==e&&i>=o&&i<=e}function ga(i){let o=i.changedTouches[0];return document.elementFromPoint(o.clientX,o.clientY)}var V=class{start;end;_disableStructuralEquivalency;constructor(o,e){this.start=o,this.end=e}},de=(()=>{class i{selection;_adapter;_selectionChanged=new L;selectionChanged=this._selectionChanged;constructor(e,a){this.selection=e,this._adapter=a,this.selection=e}updateSelection(e,a){let t=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:a,oldValue:t})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(a){ut()};static \u0275prov=he({token:i,factory:i.\u0275fac})}return i})(),Za=(()=>{class i extends de{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new i(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(a){return new(a||i)(lt(F))};static \u0275prov=he({token:i,factory:i.\u0275fac})}return i})();var wa={provide:de,useFactory:()=>s(de,{optional:!0,skipSelf:!0})||new Za(s(F))};var ka=new Re("MAT_DATE_RANGE_SELECTION_STRATEGY");var at=7,Ja=0,fa=(()=>{class i{_changeDetectorRef=s(B);_dateFormats=s(U,{optional:!0});_dateAdapter=s(F,{optional:!0});_dir=s(ae,{optional:!0});_rangeStrategy=s(ka,{optional:!0});_rerenderSubscription=R.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let a=this._activeDate,t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(t,this.minDate,this.maxDate),this._hasSameMonthAndYear(a,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof V?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new p;_userSelection=new p;dragStarted=new p;dragEnded=new p;activeDateChange=new p;_matCalendarBody;_monthLabel=_("");_weeks=_([]);_firstWeekOffset=_(0);_rangeStart=_(null);_rangeEnd=_(null);_comparisonRangeStart=_(null);_comparisonRangeEnd=_(null);_previewStart=_(null);_previewEnd=_(null);_isRange=_(!1);_todayDate=_(null);_weekdays=_([]);constructor(){s(te).load(Ae),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(me(null)).subscribe(()=>this._init())}ngOnChanges(e){let a=e.comparisonStart||e.comparisonEnd;a&&!a.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let a=e.value,t=this._getDateFromDayOfMonth(a),n,r;this._selected instanceof V?(n=this._getDateInCurrentMonth(this._selected.start),r=this._getDateInCurrentMonth(this._selected.end)):n=r=this._getDateInCurrentMonth(this._selected),(n!==a||r!==a)&&this.selectedChange.emit(t),this._userSelection.emit({value:t,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let a=e.value,t=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(a),this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let a=this._activeDate,t=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,t?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,t?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!K(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(a,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((at+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%at),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:a}){if(this._rangeStrategy){let t=a?a.rawValue:null,n=this._rangeStrategy.createPreview(t,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(n.start)),this._previewEnd.set(this._getCellCompareValue(n.end)),this.activeDrag&&t){let r=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,t,e);r&&(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let a=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:a??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),a=this._dateAdapter.getDayOfWeekNames("narrow"),n=this._dateAdapter.getDayOfWeekNames("long").map((r,b)=>({long:r,narrow:a[b],id:Ja++}));this._weekdays.set(n.slice(e).concat(n.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),a=this._dateAdapter.getDateNames(),t=[[]];for(let n=0,r=this._firstWeekOffset();n<e;n++,r++){r==at&&(t.push([]),r=0);let b=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),n+1),Ea=this._shouldEnableDate(b),xa=this._dateAdapter.format(b,this._dateFormats.display.dateA11yLabel),Ia=this.dateClass?this.dateClass(b,"month"):void 0;t[t.length-1].push(new oe(n+1,a[n],xa,Ea,Ia,this._getCellCompareValue(b),b))}this._weeks.set(t)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,a){return!!(e&&a&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(a)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(a))}_getCellCompareValue(e){if(e){let a=this._dateAdapter.getYear(e),t=this._dateAdapter.getMonth(e),n=this._dateAdapter.getDate(e);return new Date(a,t,n).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof V?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=w({type:i,selectors:[["mat-month-view"]],viewQuery:function(a,t){if(a&1&&N(G,5),a&2){let n;A(n=M())&&(t._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[H],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(a,t){a&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),ge(3,Ya,5,2,"th",2,Ca),c(),l(5,"tr",3),g(6,"th",4),c()(),l(7,"tbody",5),f("selectedValueChange",function(r){return t._dateSelected(r)})("activeDateChange",function(r){return t._updateActiveDate(r)})("previewChange",function(r){return t._previewChanged(r)})("dragStarted",function(r){return t.dragStarted.emit(r)})("dragEnded",function(r){return t._dragEnded(r)})("keyup",function(r){return t._handleCalendarBodyKeyup(r)})("keydown",function(r){return t._handleCalendarBodyKeydown(r)}),c()()),a&2&&(d(3),fe(t._weekdays()),d(4),m("label",t._monthLabel())("rows",t._weeks())("todayValue",t._todayDate())("startValue",t._rangeStart())("endValue",t._rangeEnd())("comparisonStart",t._comparisonRangeStart())("comparisonEnd",t._comparisonRangeEnd())("previewStart",t._previewStart())("previewEnd",t._previewEnd())("isRange",t._isRange())("labelMinRequiredCells",3)("activeCell",t._dateAdapter.getDate(t.activeDate)-1)("startDateAccessibleName",t.startDateAccessibleName)("endDateAccessibleName",t.endDateAccessibleName))},dependencies:[G],encapsulation:2,changeDetection:0})}return i})(),C=24,nt=4,ba=(()=>{class i{_changeDetectorRef=s(B);_dateAdapter=s(F,{optional:!0});_dir=s(ae,{optional:!0});_rerenderSubscription=R.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let a=this._activeDate,t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(t,this.minDate,this.maxDate),Aa(this._dateAdapter,a,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof V?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new p;yearSelected=new p;activeDateChange=new p;_matCalendarBody;_years=_([]);_todayYear=_(0);_selectedYear=_(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(me(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let a=this._dateAdapter.getYear(this._activeDate)-re(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),t=[];for(let n=0,r=[];n<C;n++)r.push(a+n),r.length==nt&&(t.push(r.map(b=>this._createCellForYear(b))),r=[]);this._years.set(t),this._changeDetectorRef.markForCheck()}_yearSelected(e){let a=e.value,t=this._dateAdapter.createDate(a,0,1),n=this._getDateFromYear(a);this.yearSelected.emit(t),this.selectedChange.emit(n)}_updateActiveDate(e){let a=e.value,t=this._activeDate;this.activeDate=this._getDateFromYear(a),this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let a=this._activeDate,t=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,t?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,t?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-nt);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,nt);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-re(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,C-re(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-C*10:-C);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?C*10:C);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(a,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return re(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let a=this._dateAdapter.getMonth(this.activeDate),t=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,a,1));return this._dateAdapter.createDate(e,a,Math.min(this._dateAdapter.getDate(this.activeDate),t))}_createCellForYear(e){let a=this._dateAdapter.createDate(e,0,1),t=this._dateAdapter.getYearName(a),n=this.dateClass?this.dateClass(a,"multi-year"):void 0;return new oe(e,t,t,this._shouldEnableYear(e),n)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let a=this._dateAdapter.createDate(e,0,1);for(let t=a;this._dateAdapter.getYear(t)==e;t=this._dateAdapter.addCalendarDays(t,1))if(this.dateFilter(t))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof V){let a=e.start||e.end;a&&this._selectedYear.set(this._dateAdapter.getYear(a))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=w({type:i,selectors:[["mat-multi-year-view"]],viewQuery:function(a,t){if(a&1&&N(G,5),a&2){let n;A(n=M())&&(t._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(a,t){a&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),g(3,"th",2),c()(),l(4,"tbody",3),f("selectedValueChange",function(r){return t._yearSelected(r)})("activeDateChange",function(r){return t._updateActiveDate(r)})("keyup",function(r){return t._handleCalendarBodyKeyup(r)})("keydown",function(r){return t._handleCalendarBodyKeydown(r)}),c()()),a&2&&(d(4),m("rows",t._years())("todayValue",t._todayYear())("startValue",t._selectedYear())("endValue",t._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",t._getActiveCell()))},dependencies:[G],encapsulation:2,changeDetection:0})}return i})();function Aa(i,o,e,a,t){let n=i.getYear(o),r=i.getYear(e),b=Ma(i,a,t);return Math.floor((n-b)/C)===Math.floor((r-b)/C)}function re(i,o,e,a){let t=i.getYear(o);return en(t-Ma(i,e,a),C)}function Ma(i,o,e){let a=0;return e?a=i.getYear(e)-C+1:o&&(a=i.getYear(o)),a}function en(i,o){return(i%o+o)%o}var va=(()=>{class i{_changeDetectorRef=s(B);_dateFormats=s(U,{optional:!0});_dateAdapter=s(F,{optional:!0});_dir=s(ae,{optional:!0});_rerenderSubscription=R.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let a=this._activeDate,t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(t,this.minDate,this.maxDate),this._dateAdapter.getYear(a)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof V?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new p;monthSelected=new p;activeDateChange=new p;_matCalendarBody;_months=_([]);_yearLabel=_("");_todayMonth=_(null);_selectedMonth=_(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(me(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let a=e.value,t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),a,1);this.monthSelected.emit(t);let n=this._getDateFromMonth(a);this.selectedChange.emit(n)}_updateActiveDate(e){let a=e.value,t=this._activeDate;this.activeDate=this._getDateFromMonth(a),this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let a=this._activeDate,t=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,t?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,t?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(a,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(a=>a.map(t=>this._createCellForMonth(t,e[t])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let a=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),t=this._dateAdapter.getNumDaysInMonth(a);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),t))}_createCellForMonth(e,a){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.format(t,this._dateFormats.display.monthYearA11yLabel),r=this.dateClass?this.dateClass(t,"year"):void 0;return new oe(e,a.toLocaleUpperCase(),n,this._shouldEnableMonth(e),r)}_shouldEnableMonth(e){let a=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(a,e)||this._isYearAndMonthBeforeMinDate(a,e))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(a,e,1);for(let n=t;this._dateAdapter.getMonth(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return!0;return!1}_isYearAndMonthAfterMaxDate(e,a){if(this.maxDate){let t=this._dateAdapter.getYear(this.maxDate),n=this._dateAdapter.getMonth(this.maxDate);return e>t||e===t&&a>n}return!1}_isYearAndMonthBeforeMinDate(e,a){if(this.minDate){let t=this._dateAdapter.getYear(this.minDate),n=this._dateAdapter.getMonth(this.minDate);return e<t||e===t&&a<n}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof V?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=w({type:i,selectors:[["mat-year-view"]],viewQuery:function(a,t){if(a&1&&N(G,5),a&2){let n;A(n=M())&&(t._matCalendarBody=n.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(a,t){a&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),g(3,"th",2),c()(),l(4,"tbody",3),f("selectedValueChange",function(r){return t._monthSelected(r)})("activeDateChange",function(r){return t._updateActiveDate(r)})("keyup",function(r){return t._handleCalendarBodyKeyup(r)})("keydown",function(r){return t._handleCalendarBodyKeydown(r)}),c()()),a&2&&(d(4),m("label",t._yearLabel())("rows",t._months())("todayValue",t._todayMonth())("startValue",t._selectedMonth())("endValue",t._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",t._dateAdapter.getMonth(t.activeDate)))},dependencies:[G],encapsulation:2,changeDetection:0})}return i})(),tn=(()=>{class i{_intl=s(ce);calendar=s(it);_dateAdapter=s(F,{optional:!0});_dateFormats=s(U,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(te).load(Ae);let e=s(B);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-C))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:C))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,a=this._intl,t=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=t.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=t.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=a.switchToMultiYearViewLabel,this._prevButtonLabel=a.prevMonthLabel,this._nextButtonLabel=a.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=t.getYearName(e.activeDate),this._periodButtonDescription=t.getYearName(e.activeDate),this._periodButtonLabel=a.switchToMonthViewLabel,this._prevButtonLabel=a.prevYearLabel,this._nextButtonLabel=a.nextYearLabel):(this._periodButtonText=a.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=a.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=a.switchToMonthViewLabel,this._prevButtonLabel=a.prevMultiYearLabel,this._nextButtonLabel=a.nextMultiYearLabel)}_isSameView(e,a){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(a)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(a):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(a):Aa(this._dateAdapter,e,a,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let a=this._dateAdapter.getYear(this.calendar.activeDate)-re(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),t=a+C-1,n=this._dateAdapter.getYearName(this._dateAdapter.createDate(a,0,1)),r=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1));return[n,r]}_periodButtonLabelId=s(ke).getId("mat-calendar-period-label-");static \u0275fac=function(a){return new(a||i)};static \u0275cmp=w({type:i,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:La,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(a,t){a&1&&(He(),l(0,"div",0)(1,"div",1)(2,"span",2),u(3),c(),l(4,"button",3),f("click",function(){return t.currentPeriodClicked()}),l(5,"span",4),u(6),c(),X(),l(7,"svg",5),g(8,"polygon",6),c()(),Te(),g(9,"div",7),ze(10),l(11,"button",8),f("click",function(){return t.previousClicked()}),X(),l(12,"svg",9),g(13,"path",10),c()(),Te(),l(14,"button",11),f("click",function(){return t.nextClicked()}),X(),l(15,"svg",9),g(16,"path",12),c()()()()),a&2&&(d(2),m("id",t._periodButtonLabelId),d(),v(t.periodButtonDescription),d(),k("aria-label",t.periodButtonLabel)("aria-describedby",t._periodButtonLabelId),d(2),v(t.periodButtonText),d(),Y("mat-calendar-invert",t.calendar.currentView!=="month"),d(4),m("disabled",!t.previousEnabled())("matTooltip",t.prevButtonLabel),k("aria-label",t.prevButtonLabel),d(3),m("disabled",!t.nextEnabled())("matTooltip",t.nextButtonLabel),k("aria-label",t.nextButtonLabel))},dependencies:[ne,We,Bt],encapsulation:2,changeDetection:0})}return i})(),it=(()=>{class i{_dateAdapter=s(F,{optional:!0});_dateFormats=s(U,{optional:!0});_changeDetectorRef=s(B);_elementRef=s(Z);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof V?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new p;yearSelected=new p;monthSelected=new p;viewChanged=new p(!0);_userSelection=new p;_userDragDrop=new p;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let a=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),a&&(this.stateChanges.next(),this.viewChanged.emit(a))}_currentView;_activeDrag=null;stateChanges=new L;constructor(){this._intlChanges=s(ce).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new qe(this.headerComponent||tn),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let a=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,t=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,n=a||t||e.dateFilter;if(n&&!n.firstChange){let r=this._getCurrentViewComponent();r&&(this._elementRef.nativeElement.contains(Ke())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),r._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let a=e.value;(this.selected instanceof V||a&&!this._dateAdapter.sameDate(a,this.selected))&&this.selectedChange.emit(a),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,a){this.activeDate=e,this.currentView=a}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=w({type:i,selectors:[["mat-calendar"]],viewQuery:function(a,t){if(a&1&&N(fa,5)(va,5)(ba,5),a&2){let n;A(n=M())&&(t.monthView=n.first),A(n=M())&&(t.yearView=n.first),A(n=M())&&(t.multiYearView=n.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[we([wa]),H],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(a,t){if(a&1&&(Le(0,Ha,0,0,"ng-template",0),l(1,"div",1),E(2,za,1,11,"mat-month-view",2)(3,Qa,1,6,"mat-year-view",3)(4,Ka,1,6,"mat-multi-year-view",3),c()),a&2){let n;m("cdkPortalOutlet",t._calendarHeaderPortal),d(2),x((n=t.currentView)==="month"?2:n==="year"?3:n==="multi-year"?4:-1)}},dependencies:[Ue,It,fa,va,ba],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})(),an=new Re("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(_e);return()=>At(i)}}),nn=(()=>{class i{_elementRef=s(Z);_animationsDisabled=je();_changeDetectorRef=s(B);_globalModel=s(de);_dateAdapter=s(F);_ngZone=s(Pe);_rangeSelectionStrategy=s(ka,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new L;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(te).load(Ae),this._closeButtonText=s(ce).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,a=s(Be);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[a.listen(e,"animationstart",this._handleAnimationEvent),a.listen(e,"animationend",this._handleAnimationEvent),a.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let a=this._model.selection,t=e.value,n=a instanceof V;if(n&&this._rangeSelectionStrategy){let r=this._rangeSelectionStrategy.selectionFinished(t,a,e.event);this._model.updateSelection(r,this)}else t&&(n||!this._dateAdapter.sameDate(t,a))&&this._model.add(t);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let a=this._elementRef.nativeElement;e.target!==a||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",a.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,a){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,a&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=w({type:i,selectors:[["mat-datepicker-content"]],viewQuery:function(a,t){if(a&1&&N(it,5),a&2){let n;A(n=M())&&(t._calendar=n.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(a,t){a&2&&(ve(t.color?"mat-"+t.color:""),Y("mat-datepicker-content-touch",t.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!t._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(a,t){a&1&&(l(0,"div",0)(1,"mat-calendar",1),f("yearSelected",function(r){return t.datepicker._selectYear(r)})("monthSelected",function(r){return t.datepicker._selectMonth(r)})("viewChanged",function(r){return t.datepicker._viewChanged(r)})("_userSelection",function(r){return t._handleUserSelection(r)})("_userDragDrop",function(r){return t._handleUserDragDrop(r)}),c(),Le(2,qa,0,0,"ng-template",2),l(3,"button",3),f("focus",function(){return t._closeButtonFocused=!0})("blur",function(){return t._closeButtonFocused=!1})("click",function(){return t.datepicker.close()}),u(4),c()()),a&2&&(Y("mat-datepicker-content-container-with-custom-header",t.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",t._actionsPortal),k("aria-modal",!0)("aria-labelledby",t._dialogLabelId??void 0),d(),ve(t.datepicker.panelClass),m("id",t.datepicker.id)("startAt",t.datepicker.startAt)("startView",t.datepicker.startView)("minDate",t.datepicker._getMinDate())("maxDate",t.datepicker._getMaxDate())("dateFilter",t.datepicker._getDateFilter())("headerComponent",t.datepicker.calendarHeaderComponent)("selected",t._getSelected())("dateClass",t.datepicker.dateClass)("comparisonStart",t.comparisonStart)("comparisonEnd",t.comparisonEnd)("startDateAccessibleName",t.startDateAccessibleName)("endDateAccessibleName",t.endDateAccessibleName),d(),m("cdkPortalOutlet",t._actionsPortal),d(),Y("cdk-visually-hidden",!t._closeButtonFocused),m("color",t.color||"primary"),d(),v(t._closeButtonText))},dependencies:[Ft,it,Ue,ne],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
  min-height: fit-content;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return i})(),Da=(()=>{class i{_injector=s(_e);_viewContainerRef=s(mt);_dateAdapter=s(F,{optional:!0});_dir=s(ae,{optional:!0});_model=s(de);_animationsDisabled=je();_scrollStrategy=s(an);_inputStateChanges=R.EMPTY;_document=s(ct);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new p;monthSelected=new p;viewChanged=new p(!0);dateClass;openedStream=new p;closedStream=new p;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=Rt(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=s(ke).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new L;_changeDetectorRef=s(B);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let a=e.xPosition||e.yPosition;if(a&&!a.firstChange&&this._overlayRef){let t=this._overlayRef.getConfig().positionStrategy;t instanceof Vt&&(this._setConnectedPositions(t),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=Ke(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",a=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:t,location:n}=this._componentRef;t._animationDone.pipe(dt(1)).subscribe(()=>{let r=this._document.activeElement;e&&(!r||r===this._document.activeElement||n.nativeElement.contains(r))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),t._startExitAnimation()}e?setTimeout(a):a()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,a=new qe(nn,this._viewContainerRef),t=this._overlayRef=xt(this._injector,new Mt({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?kt(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(t).subscribe(n=>{n&&n.preventDefault(),this.close()}),t.keydownEvents().subscribe(n=>{let r=n.keyCode;(r===38||r===40||r===37||r===39||r===33||r===34)&&n.preventDefault()}),this._componentRef=t.attach(a),this._forwardContentValues(this._componentRef.instance),e||Ne(()=>{t.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return Et(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=St(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let a=this.xPosition==="end"?"end":"start",t=a==="start"?"end":"start",n=this.yPosition==="above"?"bottom":"top",r=n==="top"?"bottom":"top";return e.withPositions([{originX:a,originY:r,overlayX:a,overlayY:n},{originX:a,originY:n,overlayX:a,overlayY:r},{originX:t,originY:r,overlayX:t,overlayY:n},{originX:t,originY:n,overlayX:t,overlayY:r}])}_getCloseStream(e){let a=["ctrlKey","shiftKey","metaKey"];return ue(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(ot(t=>t.keyCode===27&&!K(t)||this.datepickerInput&&K(t,"altKey")&&t.keyCode===38&&a.every(n=>!K(t,n)))))}static \u0275fac=function(a){return new(a||i)};static \u0275dir=J({type:i,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",Q],disabled:[2,"disabled","disabled",Q],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",Q],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",Q]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[H]})}return i})(),Sa=(()=>{class i extends Da{static \u0275fac=(()=>{let e;return function(t){return(e||(e=pt(i)))(t||i)}})();static \u0275cmp=w({type:i,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[we([wa,{provide:Da,useExisting:i}]),Ye],decls:0,vars:0,template:function(a,t){},encapsulation:2,changeDetection:0})}return i})(),j=class{target;targetElement;value=null;constructor(o,e){this.target=o,this.targetElement=e,this.value=this.target.value}},rn=(()=>{class i{_elementRef=s(Z);_dateAdapter=s(F,{optional:!0});_dateFormats=s(U,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let a=e,t=this._elementRef.nativeElement;this._disabled!==a&&(this._disabled=a,this.stateChanges.next(void 0)),a&&this._isInitialized&&t.blur&&t.blur()}_disabled;dateChange=new p;dateInput=new p;stateChanges=new L;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=R.EMPTY;_localeSubscription=R.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!a||this._matchesFilter(a)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),t=this._getMinDate();return!t||!a||this._dateAdapter.compareDate(t,a)<=0?null:{matDatepickerMin:{min:t,actual:a}}};_maxValidator=e=>{let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),t=this._getMaxDate();return!t||!a||this._dateAdapter.compareDate(t,a)>=0?null:{matDatepickerMax:{max:t,actual:a}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(a=>{if(this._shouldHandleChangeEvent(a)){let t=this._getValueFromModel(a.selection);this._lastValueValid=this._isValidValue(t),this._cvaOnChange(t),this._onTouched(),this._formatValue(t),this.dateInput.emit(new j(this,this._elementRef.nativeElement)),this.dateChange.emit(new j(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){sn(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let a=["ctrlKey","shiftKey","metaKey"];K(e,"altKey")&&e.keyCode===40&&a.every(n=>!K(e,n))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let a=e.target.value,t=this._lastValueValid,n=this._dateAdapter.parse(a,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(n),n=this._dateAdapter.getValidDateOrNull(n);let r=!this._dateAdapter.sameDate(n,this.value);!n||r?this._cvaOnChange(n):(a&&!this.value&&this._cvaOnChange(n),t!==this._lastValueValid&&this._validatorOnChange()),r&&(this._assignValue(n),this.dateInput.emit(new j(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new j(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,a){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),a&&this._formatValue(e)}_matchesFilter(e){let a=this._getDateFilter();return!a||a(e)}static \u0275fac=function(a){return new(a||i)};static \u0275dir=J({type:i,inputs:{value:"value",disabled:[2,"disabled","disabled",Q]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[H]})}return i})();function sn(i,o){let e=Object.keys(i);for(let a of e){let{previousValue:t,currentValue:n}=i[a];if(o.isDateInstance(t)&&o.isDateInstance(n)){if(!o.sameDate(t,n))return!0}else return!0}return!1}var on={provide:Ut,useExisting:Fe(()=>Ie),multi:!0},dn={provide:Wt,useExisting:Fe(()=>Ie),multi:!0},Ie=(()=>{class i extends rn{_formField=s(ra,{optional:!0});_closedSubscription=R.EMPTY;_openedSubscription=R.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=_(null);get min(){return this._min}set min(e){let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(a,this._min)||(this._min=a,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let a=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(a,this._max)||(this._max=a,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let a=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==a&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=q.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(a){return new(a||i)};static \u0275dir=J({type:i,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(a,t){a&1&&f("input",function(r){return t._onInput(r)})("change",function(){return t._onChange()})("blur",function(){return t._onBlur()})("keydown",function(r){return t._onKeydown(r)}),a&2&&(z("disabled",t.disabled),k("aria-haspopup",t._datepicker?"dialog":null)("aria-owns",t._ariaOwns())("min",t.min?t._dateAdapter.toIso8601(t.min):null)("max",t.max?t._dateAdapter.toIso8601(t.max):null)("data-mat-calendar",t._datepicker?t._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[we([on,dn,{provide:da,useExisting:i}]),Ye]})}return i})(),ln=(()=>{class i{static \u0275fac=function(a){return new(a||i)};static \u0275dir=J({type:i,selectors:[["","matDatepickerToggleIcon",""]]})}return i})(),Va=(()=>{class i{_intl=s(ce);_changeDetectorRef=s(B);_stateChanges=R.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=s(new Dt("tabindex"),{optional:!0}),a=Number(e);this.tabIndex=a||a===0?a:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:pe(),a=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:pe(),t=this.datepicker?ue(this.datepicker.openedStream,this.datepicker.closedStream):pe();this._stateChanges.unsubscribe(),this._stateChanges=ue(this._intl.changes,e,a,t).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=w({type:i,selectors:[["mat-datepicker-toggle"]],contentQueries:function(a,t,n){if(a&1&&gt(n,ln,5),a&2){let r;A(r=M())&&(t._customIcon=r.first)}},viewQuery:function(a,t){if(a&1&&N(Ua,5),a&2){let n;A(n=M())&&(t._button=n.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(a,t){a&1&&f("click",function(r){return t._open(r)}),a&2&&(k("tabindex",null)("data-mat-calendar",t.datepicker?t.datepicker.id:null),Y("mat-datepicker-toggle-active",t.datepicker&&t.datepicker.opened)("mat-accent",t.datepicker&&t.datepicker.color==="accent")("mat-warn",t.datepicker&&t.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",Q],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[H],ngContentSelectors:Wa,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(a,t){a&1&&(He(ja),l(0,"button",1,0),E(2,$a,2,0,":svg:svg",2),ze(3),c()),a&2&&(m("tabIndex",t.disabled?-1:t.tabIndex)("disabled",t.disabled)("disableRipple",t.disableRipple),k("aria-haspopup",t.datepicker?"dialog":null)("aria-label",t.ariaLabel||t._intl.openCalendarLabel)("aria-expanded",t.datepicker?t.datepicker.opened:null),d(2),x(t._customIcon?-1:2))},dependencies:[We],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var cn=["addressComp"],pn=()=>({range:"10-1000"});function un(i,o){i&1&&(l(0,"mat-error",8),u(1),S(2,"translate"),c()),i&2&&(d(),O(" ",I(2,1,"MANDATORY_QUANTITY")," "))}function mn(i,o){i&1&&(l(0,"mat-error"),u(1),S(2,"translate"),c()),i&2&&(d(),O(" ",vt(2,1,"INVALID_QUANTITY",bt(4,pn))," "))}function hn(i,o){i&1&&(l(0,"mat-error"),u(1),S(2,"translate"),c()),i&2&&(d(),v(I(2,1,"INVALID_DATE")))}function _n(i,o){if(i&1&&(l(0,"mat-form-field",10)(1,"mat-label"),u(2),S(3,"translate"),c(),g(4,"input",20)(5,"mat-datepicker-toggle",21)(6,"mat-datepicker",null,1),E(8,hn,3,3,"mat-error"),c()),i&2){let e=ft(7),a=h();d(2),v(I(3,5,"LABEL_PICKUP_DATE")),d(2),m("formControl",a.pickUpDateControl)("matDatepicker",e),d(),m("for",e),d(3),x(a.pickUpDateControl.invalid?8:-1)}}function gn(i,o){if(i&1&&(l(0,"mat-checkbox",11),u(1),S(2,"translate"),c()),i&2){let e=h();m("formControl",e.pickup),d(),v(I(2,2,"REQUEST_PICKUP"))}}yt.add(pa);var Ni=(()=>{class i{recycleService=s(ha);userService=s(qt);configurationService=s(Ct);translate=s(Tt);snackBarHelperService=s(Kt);addressComponent;requestorControl=new ie({value:"",disabled:!0},[]);recycleQuantityControl=new ie("",[q.required,q.min(10),q.max(1e3)]);pickUpDateControl=new ie;pickup=new ie(!1);topImage;bottomImage;recycles;recycle={};userEmail;confirmation;addressId=void 0;ngOnInit(){this.configurationService.getApplicationConfiguration().subscribe({next:e=>{e?.application?.recyclePage&&(this.topImage=`assets/public/images/products/${e.application.recyclePage.topProductImage}`,this.bottomImage=`assets/public/images/products/${e.application.recyclePage.bottomProductImage}`)},error:e=>{console.log(e)}}),this.initRecycle(),this.findAll()}initRecycle(){this.userService.whoAmI(["id","email"]).subscribe({next:e=>{this.recycle={},this.recycle.UserId=e.id,this.userEmail=e.email,this.requestorControl.setValue(this.userEmail)},error:e=>{console.log(e)}})}save(){this.recycle.AddressId=this.addressId,this.recycle.quantity=this.recycleQuantityControl.value,this.pickup.value&&(this.recycle.isPickUp=this.pickup.value,this.recycle.date=this.pickUpDateControl.value),this.recycleService.save(this.recycle).subscribe({next:e=>{e.isPickup?this.translate.get("CONFIRM_RECYCLING_PICKUP",{pickupdate:e.pickupDate}).subscribe({next:a=>{this.snackBarHelperService.open(a,"confirmBar")},error:a=>{this.snackBarHelperService.open(a,"confirmBar")}}):this.translate.get("CONFIRM_RECYCLING_BOX").subscribe({next:a=>{this.snackBarHelperService.open(a,"confirmBar")},error:a=>{this.snackBarHelperService.open(a,"confirmBar")}}),this.addressComponent.load(),this.initRecycle(),this.resetForm()},error:e=>{this.snackBarHelperService.open(e.error?.error,"errorBar"),console.log(e)}})}findAll(){this.recycleService.find().subscribe({next:e=>{this.recycles=e},error:e=>{console.log(e)}})}resetForm(){this.addressId=void 0,this.recycleQuantityControl.setValue(""),this.recycleQuantityControl.markAsPristine(),this.recycleQuantityControl.markAsUntouched(),this.pickUpDateControl.setValue(""),this.pickUpDateControl.markAsPristine(),this.pickUpDateControl.markAsUntouched(),this.pickup.setValue(!1)}getMessage(e){this.addressId=e}static \u0275fac=function(a){return new(a||i)};static \u0275cmp=w({type:i,selectors:[["app-recycle"]],viewQuery:function(a,t){if(a&1&&N(cn,7),a&2){let n;A(n=M())&&(t.addressComponent=n.first)}},decls:45,vars:28,consts:[["addressComp",""],["picker",""],["appearance","outlined",1,"mat-elevation-z6","mat-own-card","recycle-container"],[1,"left-container","flex-50"],["id","recycle-form",1,"form-container",3,"ngSubmit"],["appearance","outline","color","tertiary"],["type","text","matInput","",3,"formControl"],["type","number","matInput","",3,"formControl","placeholder"],["translate",""],[1,"mat-elevation-z0",3,"emitSelection","addNewAddressDiv"],["appearance","outline"],[3,"formControl"],["type","submit","id","recycleButton","mat-raised-button","","color","primary",3,"disabled"],[1,"fas","fa-paper-plane","fa-lg"],[1,"right-container","flex-50"],[1,"right-inner"],[1,"responsibility-header"],["appearance","outlined",1,"mat-elevation-z0","card-row"],["mat-card-image","",3,"src"],[1,"fill-remaining-space"],["matInput","",3,"formControl","matDatepicker"],["matSuffix","",3,"for"]],template:function(a,t){a&1&&(l(0,"mat-card",2)(1,"div",3)(2,"h1"),u(3),S(4,"translate"),c(),l(5,"form",4),f("ngSubmit",function(){return t.save()}),l(6,"mat-form-field",5)(7,"mat-label"),u(8),S(9,"translate"),c(),g(10,"input",6),c(),l(11,"mat-form-field",5)(12,"mat-label"),u(13),S(14,"translate"),c(),g(15,"input",7),S(16,"translate"),E(17,un,3,3,"mat-error",8),E(18,mn,3,5,"mat-error"),c(),l(19,"app-address",9,0),f("emitSelection",function(r){return t.getMessage(r)}),c(),E(21,_n,9,7,"mat-form-field",10),E(22,gn,3,4,"mat-checkbox",11),l(23,"button",12),g(24,"i",13),u(25),S(26,"translate"),c()()(),l(27,"div",14)(28,"div",15)(29,"h3",16),u(30),S(31,"translate"),c(),l(32,"mat-card",17),g(33,"img",18),l(34,"mat-card-content")(35,"div")(36,"small"),u(37,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. "),c()()()(),l(38,"mat-card",17),g(39,"img",18),l(40,"mat-card-content")(41,"div")(42,"small"),u(43,"Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "),c()()()(),g(44,"span",19),c()()()),a&2&&(d(3),v(I(4,16,"TITLE_RECYCLE")),d(5),v(I(9,18,"LABEL_REQUESTOR")),d(2),m("formControl",t.requestorControl),d(3),v(I(14,20,"LABEL_QUANTITY")),d(2),m("formControl",t.recycleQuantityControl)("placeholder",I(16,22,"IN_LITERS_PLACEHOLDER")),d(2),x(t.recycleQuantityControl.invalid&&t.recycleQuantityControl.errors.required?17:-1),d(),x(t.recycleQuantityControl.invalid&&(t.recycleQuantityControl.errors.min||t.recycleQuantityControl.errors.max)?18:-1),d(),m("addNewAddressDiv",!1),d(2),x(t.pickup.value&&t.recycleQuantityControl.value>100?21:-1),d(),x(t.recycleQuantityControl.value>100?22:-1),d(),m("disabled",t.addressId===void 0||t.recycleQuantityControl.invalid||t.pickUpDateControl.invalid),d(2),O(" ",I(26,24,"BTN_SUBMIT")," "),d(5),v(I(31,26,"SECTION_PRESS_JUICE_RESPONSIBLY")),d(3),m("src",t.topImage,Oe),d(6),m("src",t.bottomImage,Oe))},dependencies:[Qt,Lt,Ht,zt,Nt,Pt,oa,sa,aa,na,ia,ca,la,ea,Xt,jt,Zt,$t,Gt,Ge,ta,Jt,ma,Ie,Va,Sa,ua,$e,ne,Ot],styles:[`mat-form-field[_ngcontent-%COMP%]{padding-top:.625rem}.form-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}button[_ngcontent-%COMP%]{margin-left:20%;margin-top:.25rem;width:60%}.mat-own-card[_ngcontent-%COMP%]{display:block;margin-left:10%;margin-right:10%}mat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;margin-left:1rem!important;margin-right:.125rem!important}.responsibility-header[_ngcontent-%COMP%]{margin-left:1rem;margin-top:.625rem}#recycle-form[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}  .mat-mdc-row.mdc-data-table__row{border-bottom:1px solid var(--theme-background-light)!important;border-top:1px solid var(--theme-background-light)!important}h1[_ngcontent-%COMP%]{margin-left:1rem;margin-top:.625rem}.mat-mdc-card-content[_ngcontent-%COMP%]{margin-right:1.25rem}.left-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.25rem;margin-bottom:1.25rem!important}.fill-remaining-space[_ngcontent-%COMP%]{flex:1 1 auto}.recycle-container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.flex-50[_ngcontent-%COMP%]{flex:0 0 50%;max-width:50%}@media(max-width:959.98px){.recycle-container[_ngcontent-%COMP%]{flex-direction:column;gap:1.25rem}.flex-50[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}}.right-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.25rem}.right-inner[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;gap:1.25rem}.card-row[_ngcontent-%COMP%]{align-items:flex-start;display:flex;flex-direction:row;gap:1.25rem}



`]})}return i})();export{Ni as RecycleComponent};
