(()=>{var e={226:(e,t,s)=>{e.exports=s(687)},687:(e,t,s)=>{"use strict";s.d(t,{default:()=>c});const c=class{_getElements(e){return"object"==typeof e?[e]:document.querySelectorAll(e)}hide(e){this._hideElements(this._getElements(e))}_hideElements(e){var t,s=e.length;for(t=0;t<s;t++)this._hideElement(e[t])}_hideElement(e){this._styleElement(e,"display","none")}show(e,t){var s=this._getElements(e);t&&this._hideElements(s),this._showElements(s)}_showElements(e){var t,s=e.length;for(t=0;t<s;t++)this._showElement(e[t])}_showElement(e){this._styleElement(e,"display","block")}addStyle(e,t,s){this._styleElements(this._getElements(e),t,s)}_styleElements(e,t,s){var c,a=e.length;for(c=0;c<a;c++)this._styleElement(e[c],t,s)}_styleElement(e,t,s){e.style.setProperty(t,s)}toggleShow(e){var t,s=this._getElements(e),c=s.length;for(t=0;t<c;t++)"none"==s[t].style.display?this._styleElement(s[t],"display","block"):this._styleElement(s[t],"display","none")}addClass(e,t){this._addClassElements(this._getElements(e),t)}_addClassElements(e,t){var s,c=e.length;for(s=0;s<c;s++)this._addClassElement(e[s],t)}_addClassElement(e,t){var s,c,a;for(c=e.className.split(" "),a=t.split(" "),s=0;s<a.length;s++)-1==c.indexOf(a[s])&&(e.className+=" "+a[s])}removeClass(e,t){this._removeClassElements(this._getElements(e),t)}_removeClassElements(e,t){var s,c=e.length;for(s=0;s<c;s++)this._removeClassElement(e[s],t)}_removeClassElement(e,t){var s,c,a;for(c=e.className.split(" "),a=t.split(" "),s=0;s<a.length;s++)for(;c.indexOf(a[s])>-1;)c.splice(c.indexOf(a[s]),1);e.className=c.join(" ")}toggleClass(e,t,s){this._toggleClassElements(this._getElements(e),t,s)}_toggleClassElements(e,t,s){var c,a=e.length;for(c=0;c<a;c++)this._toggleClassElement(e[c],t,s)}_toggleClassElement(e,t,s){var c,a,i,l,n,o,r;if(a=s||"",i=(c=t||"").split(" "),l=a.split(" "),o=e.className.split(" "),0==l.length){for(r=!0,n=0;n<i.length;n++)-1==o.indexOf(i[n])&&(r=!1);r?this._removeClassElement(e,c):this._addClassElement(e,c)}else{for(r=!0,n=0;n<i.length;n++)-1==o.indexOf(i[n])&&(r=!1);r?(this._removeClassElement(e,c),this._addClassElement(e,a)):(this._removeClassElement(e,a),this._addClassElement(e,c))}}getBrowser(e){switch(e){case"chrome":return-1!=navigator.userAgent.indexOf("Chrome")&&!navigator.userAgent.match(/edg/i)||navigator.userAgent.indexOf("CriOS")>=0;case"safari":return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!(navigator.userAgent.indexOf("CriOS")>=0);case"firefox":return"undefined"!=typeof InstallTrigger;case"ie":return!!document.documentMode;case"edge":return!(!navigator.userAgent.match(/edg/i)&&-1==navigator.userAgent.indexOf("Edge/"));default:return null}}getTypeDevice(e){var t=navigator.userAgent||navigator.vendor||window.opera;switch(e){case"touch":return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;case"android":return/android/i.test(t);case"ios":return"boolean"==typeof navigator.standalone;default:return null}}}}},t={};function s(c){var a=t[c];if(void 0!==a)return a.exports;var i=t[c]={exports:{}};return e[c](i,i.exports,s),i.exports}s.d=(e,t)=>{for(var c in t)s.o(t,c)&&!s.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:t[c]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=s(226);const t=class{constructor(t){this.accActive=t.accActive,this.accActiveClass=t.accActiveClass,this.accBodyClass=t.accBodyClass,this.accClose=t.accClose,this.accAllOpen=t.accAllOpen,this.accTrigger=t.accTrigger,this.accBody=t.accBody,this.onChange=t.onChange,this.JSUTIL=new e.default,this.init(),this.events()}init(){this.setDefaultActiveAcc()}events(){document.querySelectorAll(`[${this.accTrigger}]`).forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),this.toggleAcc(e)}))}))}setDefaultActiveAcc(){document.querySelectorAll(`[${this.accActive}]`).forEach((e=>{this.JSUTIL.addClass(e,this.accActiveClass)}))}toggleAcc(e){let t=e.getAttribute(this.accTrigger),s=document.getElementById(t);if(s){const e=s.classList.contains(this.accActiveClass);this.accClose?e?this.JSUTIL.removeClass(s,this.accActiveClass):this.JSUTIL.addClass(s,this.accActiveClass):e||this.JSUTIL.addClass(s,this.accActiveClass),this.accAllOpen||this.hideAllAccsExceptActual(t)}this.onChange&&this.onChange()}openAccordion(e){this.hideAccordion();const t=document.getElementById(e);this.JSUTIL.addClass(t,this.accActiveClass),this.onChange&&this.onChange()}hideAccordion(){document.querySelectorAll(`[${this.accBody}]`).forEach((e=>{this.JSUTIL.removeClass(e,this.accActiveClass)}))}hideAllAccsExceptActual(e){document.querySelectorAll(`[${this.accBody}]`).forEach((t=>{t.getAttribute(`${this.accBody}`)!==e&&this.JSUTIL.removeClass(t,this.accActiveClass)}))}destroy(){document.querySelectorAll(`[${this.accTrigger}]`).forEach((e=>{e.className="";let t=e.cloneNode(!0);e.parentNode.replaceChild(t,e)})),document.querySelectorAll(`.${this.accBodyClass}`).forEach((e=>{e.className=""}))}};new class{constructor(){this.accordionA=null,this.accordionB=null,this.init(),this.events()}init(){this.accordionA=new t({accActive:"tf-ds-acc-active-a",accActiveClass:"c--accordion-a--is-active",accBodyClass:"c--accordion-a__bd",accClose:!1,accAllOpen:!1,accTrigger:"tf-ds-acc-target-a",accBody:"tf-ds-acc-body-a",onChange:()=>{}}),this.accordionB=new t({accActive:"tf-ds-acc-active-b",accActiveClass:"c--accordion-b--is-active",accBodyClass:"c--accordion-b__bd",accClose:!0,accAllOpen:!0,accTrigger:"tf-ds-acc-target-b",accBody:"tf-ds-acc-body-b",onChange:()=>{}}),setTimeout((()=>{this.accordionA.openAccordion("accordion-2")}),1500),document.querySelector(".js--accordion-destroy").addEventListener("click",(e=>{e.preventDefault(),this.destroyAccordion()}))}events(){}destroyAccordion(){this.accordionA&&(this.accordionA.destroy(),this.accordionA=null),this.accordionB&&(this.accordionB.destroy(),this.accordionB=null)}}})()})();