!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="fill-current stroke-current h-6 w-6 feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-6 w-6" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current stroke-current h-6 w-6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-move"><polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line></svg>'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current h-6 w-6 feather feather-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg>'},function(t,e,n){n(5),n(6),n(7),n(8),n(9),t.exports=n(10)},function(t,e){!function(t){"use strict";Drupal.behaviors.cshs={attach:function(e,n){t("select.simpler-select-root",e).once("cshs").each((function(e,o){void 0!==n.cshs&&void 0!==n.cshs[o.id]&&t(o).simplerSelect(n.cshs[o.id])}))}}}(jQuery)},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o);!function(t,e){function n(n,o){const r=t.extend({title:e.t("List additional actions")},o),i=t(n);if(this.$dropbutton=i,this.$list=i.find(".dropbutton"),this.$actions=this.$list.find(".dropbutton-action"),this.$actions.length>1){const n=this.$actions.slice(0,1);this.$actions.slice(1).addClass("secondary-action"),n.append(e.theme("dropbuttonToggle",r)),this.$dropbutton.addClass("dropbutton-multiple").on({"mouseleave.dropbutton":t.proxy(this.hoverOut,this),"mouseenter.dropbutton":t.proxy(this.hoverIn,this),"focusout.dropbutton":t.proxy(this.focusOut,this),"focusin.dropbutton":t.proxy(this.focusIn,this)})}else this.$dropbutton.addClass("dropbutton-single")}function o(e){e.preventDefault(),t(e.target).closest(".dropbutton-wrapper").toggleClass("open")}e.behaviors.dropButton={attach(e,r){const i=t(e).find(".dropbutton-wrapper").once("dropbutton");if(i.length){const e=t("body").once("dropbutton-click");e.length&&e.on("click",".dropbutton-toggle",o);const s=i.length;for(let t=0;t<s;t++)n.dropbuttons.push(new n(i[t],r.dropbutton))}}},t.extend(n,{dropbuttons:[]}),t.extend(n.prototype,{toggle(t){t="boolean"==typeof t?t:!this.$dropbutton.hasClass("open"),this.$dropbutton.toggleClass("open",t)},hoverIn(){this.timerID&&window.clearTimeout(this.timerID)},hoverOut(){this.timerID=window.setTimeout(t.proxy(this,"close"),500)},open(){this.toggle(!0)},close(){this.toggle(!1)},focusOut(t){this.hoverOut.call(this,t)},focusIn(t){this.hoverIn.call(this,t)}}),t.extend(e.theme,{dropbuttonToggle:t=>`<span class="${["dropbutton-toggle","border-l","pl-3","flex"].join(" ")}">\n          <span class="visually-hidden">${t.title}</span>\n          <button class="flex" type="button">\n            ${r.a}\n          </button>\n        </span>`}),e.DropButton=n}(jQuery,Drupal)},function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o);!function(t,e){var n={noneLabel:"- Please choose -",noneValue:"_none",labels:[]};function o(e,o){this.$element=t(e),this.$currentSelect=null,this.settings=t.extend({},n,o),this.selectOptions=[],this.init()}o.prototype={init:function(){var e=this;e.destroy(),e.$element.find("option").each((function(){var n=t(this);e.selectOptions.push({value:n.val(),label:n.text(),parent:n.data("parent")||0,children:[]})}));var n=e.buildTree(e.selectOptions);if(null!==n){var o=e.$element.val(),r=[],i=e.createSelect(n),s=i;o&&("string"!=typeof o&&(o=o.shift()),(r=e.getAllParents(o)).reverse(),r.push(o)),this.$element.after(i),t.each(r,(function(t,n){e.selectSetValue(s,n);var o=e.createSelect(e.getOptionInfoByValue(n).children,n,t+1);null!==o&&(s.after(o),s=o)})),e.$element.hide()}},destroy:function(){this.selectOptions=[],this.$element.show().nextAll(".select-wrapper").remove()},createSelect:function(e,n,o){if(!e||e.length<1)return null;n=n||this.settings.noneValue,o=o||0;const i=`\n      <div class="${["pointer-events-none","absolute","pin-y","pin-r","flex","items-center","px-2"].join(" ")}">\n      ${r.a}\n      </div>\n      `,s=`<select class="${["simpler-select","w-full"].join(" ")}">`;var l=this,a=t(s).addClass(l.$element.attr("class")),d=t(`<div class="${["select-wrapper","relative"].join(" ")}">`);return l.$element.hasClass("error")&&a.addClass("error"),a.append('<option value="'+l.settings.noneValue+'" data-parent-value="'+n+'">'+l.settings.noneLabel+"</option>"),t.each(e,(function(e,n){if(n.value!=l.settings.noneValue){var o=t("<option>").val(n.value).text(n.label.replace(/(- )+/,""));n.children.length&&o.addClass("has-children"),a.append(o)}})),a.change((function(){l.$currentSelect=t(this),l.selectRemoveNext(l.$currentSelect);var e=l.$currentSelect.find("option:selected"),n=e.val(),o=e.data("parent-value");if(void 0===o&&(o=n),l.$element.val(o).change(),n!=l.settings.noneValue){var r=l.getOptionInfoByValue(n);void 0!==r.children&&l.addSelectAfter(l.createSelect(r.children,n,l.selectGetLevel()))}})),l.settings.labels[o]&&d.append("<label>"+l.settings.labels[o]+"</label>"),d.append(a),d.append(i),d},buildTree:function(e,n,o){o=o||[],n=n||{value:0};var r=t.grep(e,(function(t){return void 0!==t&&t.parent==n.value}));if(r.length){0==n.value?o=r:n.children=r;for(var i=0;i<r.length;i++)this.buildTree(e,r[i],o)}return o},selectSetValue:function(t,e){t.find("select").val(e)},selectRemoveNext:function(){this.$currentSelect.parents(".select-wrapper").nextAll(".select-wrapper").remove()},addSelectAfter:function(t){this.$currentSelect.parents(".select-wrapper").after(t)},selectGetLevel:function(){return this.$currentSelect.parents(".form-type-cshs").find(".select-wrapper").length},getAllParents:function(t,e){if(t==this.settings.noneValue)return[];e=e||[];var n=this.getOptionByValue(t).data("parent");return void 0!==n&&0!=n&&(e.push(n),this.getAllParents(this.getOptionByValue(n).val(),e)),e},getOptionByValue:function(t){return this.$element.find('option[value="'+t+'"]')},getOptionInfoByValue:function(e){var n={};return t.each(this.selectOptions,(function(t,o){if(o.value==e)return n=o,!1})),n}},t.fn.simplerSelect=function(e){return this.each((function(){t.data(this,"plugin_simplerSelect")||t.data(this,"plugin_simplerSelect",new o(this,e))})),this}}(jQuery)},function(t,e,n){"use strict";n.r(e);var o=n(2),r=n.n(o),i=n(3),s=n.n(i);!function(t,e,n){let o=JSON.parse(localStorage.getItem("Drupal.tableDrag.showWeight"));e.behaviors.tableDrag={attach(n,o){Object.keys(o.tableDrag||{}).forEach(r=>{!function(t,n){t.length&&(e.tableDrag[n]=new e.tableDrag(t[0],o.tableDrag[n]))}(t(n).find(`#${r}`).once("tabledrag"),r)})}},e.tableDrag=function(n,r){const i=this,s=t(n);if(this.$table=t(n),this.table=n,this.tableSettings=r,this.dragObject=null,this.rowObject=null,this.oldRowElement=null,this.oldY=0,this.changed=!1,this.maxDepth=0,this.rtl="rtl"===t(this.table).css("direction")?-1:1,this.striping=1===t(this.table).data("striping"),this.scrollSettings={amount:4,interval:50,trigger:70},this.scrollInterval=null,this.scrollY=0,this.windowHeight=0,this.indentEnabled=!1,Object.keys(r||{}).forEach(t=>{Object.keys(r[t]||{}).forEach(e=>{"parent"===r[t][e].relationship&&(this.indentEnabled=!0),r[t][e].limit>0&&(this.maxDepth=r[t][e].limit)})}),this.indentEnabled){this.indentCount=1;const o=e.theme("tableDragIndentation"),r=t("<tr/>").addClass("draggable").appendTo(n),i=t("<td/>").appendTo(r).prepend(o).prepend(o).find(".js-indentation");this.indentAmount=i.get(1).offsetLeft-i.get(0).offsetLeft,r.remove()}s.find("> tr.draggable, > tbody > tr.draggable").each((function(){i.makeDraggable(this)}));s.before(t(`<button type="button" class="${["tabledrag-toggle-weight","ml-auto","bg-cyan","appearance-none","border-2","border-cyan-darker","rounded-lg","py-2","px-4","text-white","leading-tight","focus:outline-none","focus:bg-cyan-dark","focus:border-cyan-darker","hover:border-cyan"].join(" ")}"></button>`).attr("title",e.t("Re-order rows by numerical weight instead of dragging.")).on("click",t.proxy((function(t){t.preventDefault(),this.toggleColumns()}),this)).wrap('<div class="flex flex-col items-end m-2"></div>').parent()),i.initColumns(),t(document).on("touchmove",t=>i.dragRow(t.originalEvent.touches[0],i)),t(document).on("touchend",t=>i.dropRow(t.originalEvent.touches[0],i)),t(document).on("mousemove pointermove",t=>i.dragRow(t,i)),t(document).on("mouseup pointerup",t=>i.dropRow(t,i)),t(window).on("storage",t.proxy((function(t){"Drupal.tableDrag.showWeight"===t.originalEvent.key&&(o=JSON.parse(t.originalEvent.newValue),this.displayColumns(o))}),this))},e.tableDrag.prototype.initColumns=function(){const t=this.$table;let e,n,r;Object.keys(this.tableSettings||{}).forEach(o=>{Object.keys(this.tableSettings[o]).some(r=>{const i=t.find(`.${this.tableSettings[o][r].target}`).eq(0);return!(!i.length||!this.tableSettings[o][r].hidden)&&(e=this.tableSettings[o][r].hidden,n=i.closest("td"),!0)}),e&&n[0]&&(r=n.parent().find("> td").index(n.get(0))+1,t.find("> thead > tr, > tbody > tr, > tr").each(this.addColspanClass(r)))}),this.displayColumns(o)},e.tableDrag.prototype.addColspanClass=function(e){return function(){const n=t(this);let o=e;const r=n.children();let i;r.each((function(t){t<o&&this.colSpan&&this.colSpan>1&&(o-=this.colSpan-1)})),o>0&&(i=r.filter(`:nth-child(${o})`),i[0].colSpan&&i[0].colSpan>1?i.addClass("tabledrag-has-colspan"):i.addClass("tabledrag-hide"))}},e.tableDrag.prototype.displayColumns=function(e){e?this.showColumns():this.hideColumns(),t("table").findOnce("tabledrag").trigger("columnschange",!!e)},e.tableDrag.prototype.toggleColumns=function(){o=!o,this.displayColumns(o),o?localStorage.setItem("Drupal.tableDrag.showWeight",o):localStorage.removeItem("Drupal.tableDrag.showWeight")},e.tableDrag.prototype.hideColumns=function(){const n=t("table").findOnce("tabledrag");n.find(".tabledrag-hide").css("display","none"),n.find(".tabledrag-handle").css("display",""),n.find(".tabledrag-has-colspan").each((function(){this.colSpan=this.colSpan-1})),t(".tabledrag-toggle-weight").text(e.t("Show row weights"))},e.tableDrag.prototype.showColumns=function(){const n=t("table").findOnce("tabledrag");n.find(".tabledrag-hide").css("display",""),n.find(".tabledrag-handle").css("display","none"),n.find(".tabledrag-has-colspan").each((function(){this.colSpan=this.colSpan+1})),t(".tabledrag-toggle-weight").text(e.t("Hide row weights"))},e.tableDrag.prototype.rowSettings=function(e,n){const o=t(n).find(`.${e}`),r=this.tableSettings[e];return Object.keys(r).map(t=>{const e=r[t].target;let n;return o.is(`.${e}`)&&(n={},Object.keys(r[t]).forEach(e=>{n[e]=r[t][e]})),n}).filter(t=>t)[0]},e.tableDrag.prototype.makeDraggable=function(n){const o=this,i=t(n);i.find("td:first-of-type").find("a").addClass("menu-item__link");const s=t(`<span class="${["tabledrag-handle","handle","cursor-move","align-middle","h-4","w-4","mr-3"].join(" ")}">${r.a}</span>`).attr("title",e.t("Drag to re-order")),l=i.find("td:first-of-type").find(".js-indentation").eq(-1);l.length?(l.after(s),o.indentCount=Math.max(i.find(".js-indentation").length,o.indentCount)):i.find("td").eq(0).prepend(s),s.on("mousedown touchstart pointerdown",t=>{t.preventDefault(),"touchstart"===t.originalEvent.type&&(t=t.originalEvent.touches[0]),o.dragStart(t,o,n)}),s.on("click",t=>{t.preventDefault()}),s.on("focus",()=>{o.safeBlur=!0}),s.on("blur",t=>{o.rowObject&&o.safeBlur&&o.dropRow(t,o)}),s.on("keydown",e=>{9===e.keyCode||o.rowObject||(o.rowObject=new o.row(n,"keyboard",o.indentEnabled,o.maxDepth,!0));let r,i=!1;switch(e.keyCode){case 37:case 63234:i=!0,o.rowObject.indent(-1*o.rtl);break;case 38:case 63232:{let e=t(o.rowObject.element).prev("tr:first-of-type"),l=e.get(0);for(;l&&e.is(":hidden");)e=t(l).prev("tr:first-of-type"),l=e.get(0);if(l){if(o.safeBlur=!1,o.rowObject.direction="up",i=!0,t(n).is(".tabledrag-root")){for(r=0;l&&e.find(".js-indentation").length;)e=t(l).prev("tr:first-of-type"),l=e.get(0),r+=e.is(":hidden")?0:l.offsetHeight;l&&(o.rowObject.swap("before",l),window.scrollBy(0,-r))}else(o.table.tBodies[0].rows[0]!==l||e.is(".draggable"))&&(o.rowObject.swap("before",l),o.rowObject.interval=null,o.rowObject.indent(0),window.scrollBy(0,-parseInt(n.offsetHeight,10)));s.trigger("focus")}break}case 39:case 63235:i=!0,o.rowObject.indent(o.rtl);break;case 40:case 63233:{let e=t(o.rowObject.group).eq(-1).next("tr:first-of-type"),l=e.get(0);for(;l&&e.is(":hidden");)e=t(l).next("tr:first-of-type"),l=e.get(0);if(l){if(o.safeBlur=!1,o.rowObject.direction="down",i=!0,t(n).is(".tabledrag-root")){r=0;const e=new o.row(l,"keyboard",o.indentEnabled,o.maxDepth,!1);if(e){t(e.group).each((function(){r+=t(this).is(":hidden")?0:this.offsetHeight}));const n=t(e.group).eq(-1).get(0);o.rowObject.swap("after",n),window.scrollBy(0,parseInt(r,10))}}else o.rowObject.swap("after",l),o.rowObject.interval=null,o.rowObject.indent(0),window.scrollBy(0,parseInt(n.offsetHeight,10));s.trigger("focus")}break}}if(o.rowObject&&!0===o.rowObject.changed&&(t(n).addClass("drag"),o.oldRowElement&&t(o.oldRowElement).removeClass("drag-previous"),o.oldRowElement=n,!0===o.striping&&o.restripeTable(),o.onDrag()),i)return!1}),s.on("keypress",t=>{switch(t.keyCode){case 37:case 38:case 39:case 40:return!1}})},e.tableDrag.prototype.dragStart=function(e,n,o){n.dragObject={},n.dragObject.initOffset=n.getPointerOffset(o,e),n.dragObject.initPointerCoords=n.pointerCoords(e),n.indentEnabled&&(n.dragObject.indentPointerPos=n.dragObject.initPointerCoords),n.rowObject&&t(n.rowObject.element).find("a.tabledrag-handle").trigger("blur"),n.rowObject=new n.row(o,"pointer",n.indentEnabled,n.maxDepth,!0),n.table.topY=t(n.table).offset().top,n.table.bottomY=n.table.topY+n.table.offsetHeight;t(o).addClass(["bg-cyan-lightest"].join(" ")),t("body").addClass("drag"),n.oldRowElement&&t(n.oldRowElement).removeClass("drag-previous")},e.tableDrag.prototype.dragRow=function(t,e){if(e.dragObject){e.currentPointerCoords=e.pointerCoords(t);const n=e.currentPointerCoords.y-e.dragObject.initOffset.y,o=e.currentPointerCoords.x-e.dragObject.initOffset.x;if(n!==e.oldY){e.rowObject.direction=n>e.oldY?"down":"up",e.oldY=n;const t=e.checkScroll(e.currentPointerCoords.y);clearInterval(e.scrollInterval),(t>0&&"down"===e.rowObject.direction||t<0&&"up"===e.rowObject.direction)&&e.setScroll(t);const r=e.findDropTargetRow(o,n);r&&("down"===e.rowObject.direction?e.rowObject.swap("after",r,e):e.rowObject.swap("before",r,e),!0===e.striping&&e.restripeTable())}if(e.indentEnabled){const t=e.currentPointerCoords.x-e.dragObject.indentPointerPos.x,n=Math.round(t/e.indentAmount),o=e.rowObject.indent(n);e.dragObject.indentPointerPos.x+=e.indentAmount*o*e.rtl,e.indentCount=Math.max(e.indentCount,e.rowObject.indents)}return!1}},e.tableDrag.prototype.dropRow=function(n,o){let r,i;null!==o.rowObject&&(r=o.rowObject.element,i=t(r),!0===o.rowObject.changed&&(o.updateFields(r),Object.keys(o.tableSettings||{}).forEach(t=>{"group"===o.rowSettings(t,r).relationship&&Object.keys(o.rowObject.children||{}).forEach(e=>{o.updateField(o.rowObject.children[e],t)})}),o.rowObject.markChanged(),!1===o.changed&&(t(e.theme("tableDragChangedWarning")).insertBefore(o.table).hide().fadeIn("slow"),o.changed=!0)),o.indentEnabled&&o.rowObject.removeIndentClasses(),o.oldRowElement&&t(o.oldRowElement).removeClass("drag-previous"),i.removeClass("drag").addClass("drag-previous"),o.oldRowElement=r,o.onDrop(),o.rowObject=null),null!==o.dragObject&&(o.dragObject=null,t("body").removeClass("drag"),clearInterval(o.scrollInterval))},e.tableDrag.prototype.pointerCoords=function(t){return t.pageX||t.pageY?{x:t.pageX,y:t.pageY}:{x:t.clientX+document.body.scrollLeft-document.body.clientLeft,y:t.clientY+document.body.scrollTop-document.body.clientTop}},e.tableDrag.prototype.getPointerOffset=function(e,n){const o=t(e).offset(),r=this.pointerCoords(n);return{x:r.x-o.left,y:r.y-o.top}},e.tableDrag.prototype.findDropTargetRow=function(e,n){const o=t(this.table.tBodies[0].rows).not(":hidden");for(let e=0;e<o.length;e++){let r=o[e],i=t(r);const s=i.offset().top;let l;if(l=0===r.offsetHeight?parseInt(r.firstChild.offsetHeight,10)/2:parseInt(r.offsetHeight,10)/2,n>s-l&&n<s+l){if(this.indentEnabled){if(Object.keys(this.rowObject.group).some(t=>this.rowObject.group[t]===r))return null}else if(r===this.rowObject.element)return null;if(!this.rowObject.isValidSwap(r))return null;for(;i.is(":hidden")&&i.prev("tr").is(":hidden");)i=i.prev("tr:first-of-type"),r=i.get(0);return r}}return null},e.tableDrag.prototype.updateFields=function(t){Object.keys(this.tableSettings||{}).forEach(e=>{this.updateField(t,e)})},e.tableDrag.prototype.updateField=function(e,n){let o=this.rowSettings(n,e);const r=t(e);let i,s,l,a;if("self"===o.relationship||"group"===o.relationship)i=e;else if("sibling"===o.relationship){s=r.prev("tr:first-of-type"),l=s.get(0);const t=r.next("tr:first-of-type"),o=t.get(0);i=e,s.is(".draggable")&&s.find(`.${n}`).length?this.indentEnabled?s.find(".js-indentations").length===r.find(".js-indentations").length&&(i=l):i=l:t.is(".draggable")&&t.find(`.${n}`).length&&(this.indentEnabled?t.find(".js-indentations").length===r.find(".js-indentations").length&&(i=o):i=o)}else if("parent"===o.relationship){for(s=r.prev("tr"),l=s;s.length&&s.find(".js-indentation").length>=this.rowObject.indents;)s=s.prev("tr"),l=s;s.length?i=s.get(0):(i=t(this.table).find("tr.draggable:first-of-type").get(0),i===this.rowObject.element&&(i=t(this.rowObject.group[this.rowObject.group.length-1]).next("tr.draggable").get(0)),a=!0)}this.copyDragClasses(i,e,n),o=this.rowSettings(n,e),a&&(o.relationship="sibling",o.source=o.target);const d=`.${o.target}`,c=r.find(d).get(0);if(c){const e=`.${o.source}`,n=t(e,i).get(0);switch(o.action){case"depth":c.value=t(n).closest("tr").find(".js-indentation").length;break;case"match":c.value=n.value;break;case"order":{const e=this.rowObject.findSiblings(o);if(t(c).is("select")){const n=[];t(c).find("option").each((function(){n.push(this.value)}));const o=n[n.length-1];t(e).find(d).each((function(){n.length>0?this.value=n.shift():this.value=o}))}else{let n=parseInt(t(e[0]).find(d).val(),10)||0;t(e).find(d).each((function(){this.value=n,n++}))}break}}}},e.tableDrag.prototype.copyDragClasses=function(e,n,o){const r=t(e).find(`.${o}`),i=t(n).find(`.${o}`);r.length&&i.length&&(i[0].className=r[0].className)},e.tableDrag.prototype.checkScroll=function(t){const e=document.documentElement,n=document.body,o=window.innerHeight||(e.clientHeight&&0!==e.clientWidth?e.clientHeight:n.offsetHeight);let r;this.windowHeight=o,r=document.all?e.scrollTop?e.scrollTop:n.scrollTop:window.pageYOffset?window.pageYOffset:window.scrollY,this.scrollY=r;const i=this.scrollSettings.trigger;let s=0;return t-r>o-i?(s=i/(o+r-t),s=s>0&&s<i?s:i,s*this.scrollSettings.amount):t-r<i?(s=i/(t-r),s=s>0&&s<i?s:i,-s*this.scrollSettings.amount):void 0},e.tableDrag.prototype.setScroll=function(t){const e=this;this.scrollInterval=setInterval(()=>{e.checkScroll(e.currentPointerCoords.y);const n=e.scrollY>e.table.topY,o=e.scrollY+e.windowHeight<e.table.bottomY;(t>0&&o||t<0&&n)&&window.scrollBy(0,t)},this.scrollSettings.interval)},e.tableDrag.prototype.restripeTable=function(){t(this.table).find("> tbody > tr.draggable, > tr.draggable").filter(":visible").filter(":odd").removeClass("odd").addClass("even").end().filter(":even").removeClass("even").addClass("odd")},e.tableDrag.prototype.onDrag=function(){return null},e.tableDrag.prototype.onDrop=function(){return null},e.tableDrag.prototype.row=function(e,n,o,r,i){const s=t(e);if(this.element=e,this.method=n,this.group=[e],this.groupDepth=s.find(".js-indentation").length,this.changed=!1,this.table=s.closest("table")[0],this.indentEnabled=o,this.maxDepth=r,this.direction="",this.indentEnabled){this.indents=s.find(".js-indentation").length,this.children=this.findChildren(i),this.group=t.merge(this.group,this.children);for(let e=0;e<this.group.length;e++)this.groupDepth=Math.max(t(this.group[e]).find(".js-indentation").length,this.groupDepth)}},e.tableDrag.prototype.row.prototype.findChildren=function(e){const n=this.indents;let o=t(this.element,this.table).next("tr.draggable");const r=[];let i=0;function s(e,o){const r=t(o);1===i&&e===n&&r.addClass("tree-child-first"),e===n?r.addClass("tree-child"):e>n&&r.addClass("tree-child-horizontal")}for(;o.length&&o.find(".js-indentation").length>n;)i++,r.push(o[0]),e&&o.find(".js-indentation").each(s),o=o.next("tr.draggable");return e&&r.length&&t(r[r.length-1]).find(`.js-indentation:nth-child(${n+1})`).addClass("tree-child-last"),r},e.tableDrag.prototype.row.prototype.isValidSwap=function(e){const n=t(e);if(this.indentEnabled){let t,o;if("down"===this.direction?(t=e,o=n.next("tr").get(0)):(t=n.prev("tr").get(0),o=e),this.interval=this.validIndentInterval(t,o),this.interval.min>this.interval.max)return!1}return this.table.tBodies[0].rows[0]!==e||!n.is(":not(.draggable)")},e.tableDrag.prototype.row.prototype.swap=function(o,r){this.group.forEach(t=>{e.detachBehaviors(t,n,"move")}),t(r)[o](this.group),this.group.forEach(t=>{e.attachBehaviors(t,n)}),this.changed=!0,this.onSwap(r)},e.tableDrag.prototype.row.prototype.validIndentInterval=function(e,n){const o=t(e);let r;const i=n?t(n).find(".js-indentation").length:0;return!e||o.is(":not(.draggable)")||t(this.element).is(".tabledrag-root")?r=0:(r=o.find(".js-indentation").length+(o.is(".tabledrag-leaf")?0:1),this.maxDepth&&(r=Math.min(r,this.maxDepth-(this.groupDepth-this.indents)))),{min:i,max:r}},e.tableDrag.prototype.row.prototype.indent=function(n){const o=t(this.group);if(!this.interval){const e=t(this.element).prev("tr").get(0),n=o.eq(-1).next("tr").get(0);this.interval=this.validIndentInterval(e,n)}let r=this.indents+n;r=Math.max(r,this.interval.min),r=Math.min(r,this.interval.max),n=r-this.indents;for(let t=1;t<=Math.abs(n);t++)n<0?(o.find(".js-indentation:first-of-type").remove(),this.indents--):(o.find("td:first-of-type").prepend(e.theme("tableDragIndentation")),this.indents++);return n&&(this.changed=!0,this.groupDepth+=n,this.onIndent()),n},e.tableDrag.prototype.row.prototype.findSiblings=function(e){const n=[],o=["prev","next"],r=this.indents;let i;for(let s=0;s<o.length;s++){let l=t(this.element)[o[s]]();for(;l.length&&l.find(`.${e.target}`);){if(this.indentEnabled&&(i=l.find(".js-indentation").length),this.indentEnabled&&i!==r){if(i<r)break}else n.push(l[0]);l=l[o[s]]()}"prev"===o[s]&&(n.reverse(),n.push(this.element))}return n},e.tableDrag.prototype.row.prototype.removeIndentClasses=function(){Object.keys(this.children||{}).forEach(e=>{t(this.children[e]).find(".js-indentation").removeClass("tree-child").removeClass("tree-child-first").removeClass("tree-child-last").removeClass("tree-child-horizontal")})},e.tableDrag.prototype.row.prototype.markChanged=function(){const n=e.theme("tableDragChangedMarker"),o=t(this.element).find("td:first-of-type");0===o.find(".tabledrag-changed").length&&o.append(n)},e.tableDrag.prototype.row.prototype.onIndent=function(){return null},e.tableDrag.prototype.row.prototype.onSwap=function(t){return null},t.extend(e.theme,{tableDragChangedMarker:()=>`\n        <span title="${e.t("Changed")}" class="${["tabledrag-changed","text-purple-darkest","font-bold","mr-3"].join(" ")}">${s.a}</span>`,tableDragIndentation:()=>'<div class="js-indentation indentation">&nbsp;</div>',tableDragChangedWarning:()=>`\n        <div role="alert" class="bg-purple-lightest border-t-4 border-purple rounded-b text-purple-darkest px-4 py-3 shadow-md mb-4">\n          <div class="flex">\n            ${e.theme("tableDragChangedMarker")}\n            <div>\n              ${e.t("You have unsaved changes.")}\n            </div>\n          </div>\n        </div>`})}(jQuery,Drupal,drupalSettings)},function(t,e,n){},function(t,e,n){}]);
//# sourceMappingURL=main.bundle.js.map