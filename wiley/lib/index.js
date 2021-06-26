(()=>{"use strict";var t={607:function(t,e,a){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Wiley=void 0;var u=r(a(579)),n=r(a(229));e.Wiley={countries:[],events:[],webinars:[],products:[],news:[],testimonials:[],webflowService:n.default,htmlService:u.default}},579:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var a=new function(){};e.default=a},229:function(t,e,a){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var u=r(a(273)),n=new(function(){function t(){}return t.prototype.getTemplateItemByParrentClass=function(t){var e=u.default(t+" [data-template]");return 0==e.length&&(e=u.default(t+"[data-template]")),e},t.prototype.getTemplateItemByAttribute=function(t){var e="["+t+"]";return u.default(e)},t.prototype.getElementsDataByTemplate=function(t){return u.default(t).find("[data-field]")},t.prototype.updateLiveNowPart=function(t,e){var a=this.getTemplateItemByParrentClass(e),r=this.getElementsDataByTemplate(a),n=(t||[]).find((function(t){return t.liveNow}));n?u.default(r).each((function(){var t=u.default(this).attr("data-field");"title"==t&&u.default(this).text(n.name),"slug"==t&&u.default(this).attr("href",n.slug),"registration"==t&&(n.type_close_registration?u.default(this).addClass("hidden"):(u.default(this).text(n.registrationLabel),u.default(this).attr("href",n.slug)))})):u.default(e).remove()},t.prototype.updateMenuSlugs=function(t){if(t&&t.length){var e=this.getTemplateItemByParrentClass(".menu-left"),a=this.getElementsDataByTemplate(e);u.default(a).each((function(e){var a=t[e].menuSlug||"";u.default(this).attr("href",a)}))}else console.log("updateMenuSlugs: ","The countries parameter is undefined.")},t.prototype.updateUpcomingTotalByAttribute=function(t,e){void 0===e&&(e="data-upcoming-webinars");var a=this.getTemplateItemByAttribute(e),r=this.getElementsDataByTemplate(a),n=(t||[]).filter((function(t){return t.upComing})).length;u.default(r).each((function(t){"total"==u.default(this).attr("data-field")&&u.default(this).text(n)}))},t}());e.default=n},273:t=>{t.exports=require("jquery")}},e={};!function a(r){var u=e[r];if(void 0!==u)return u.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,a),n.exports}(607)})();