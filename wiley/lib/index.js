(()=>{"use strict";var t={607:function(t,e,a){var r=this&&this.__createBinding||(Object.create?function(t,e,a,r){void 0===r&&(r=a),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[a]}})}:function(t,e,a,r){void 0===r&&(r=a),t[r]=e[a]}),n=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),u=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)"default"!==a&&Object.prototype.hasOwnProperty.call(t,a)&&r(e,t,a);return n(e,t),e};Object.defineProperty(e,"__esModule",{value:!0}),e.wiley=void 0,e.wiley=u(a(557))},579:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var a=new function(){};e.default=a},229:function(t,e,a){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=r(a(273)),u=new(function(){function t(){}return t.prototype.getTemplateItemByParrentClass=function(t){var e=n.default(t+" [data-template]");return 0==e.length&&(e=n.default(t+"[data-template]")),e},t.prototype.getTemplateItemByAttribute=function(t){var e="["+t+"]";return n.default(e)},t.prototype.getElementsDataByTemplate=function(t){return n.default(t).find("[data-field]")},t.prototype.updateLiveNowPart=function(t,e){var a=this.getTemplateItemByParrentClass(e),r=this.getElementsDataByTemplate(a),u=(t||[]).find((function(t){return t.liveNow}));u?n.default(r).each((function(){var t=n.default(this).attr("data-field");"title"==t&&n.default(this).text(u.name),"slug"==t&&n.default(this).attr("href",u.slug),"registration"==t&&(u.type_close_registration?n.default(this).addClass("hidden"):(n.default(this).text(u.registrationLabel),n.default(this).attr("href",u.slug)))})):n.default(e).remove()},t.prototype.updateMenuSlugs=function(t){if(t&&t.length){var e=this.getTemplateItemByParrentClass(".menu-left"),a=this.getElementsDataByTemplate(e);n.default(a).each((function(e){var a=t[e].menuSlug||"";n.default(this).attr("href",a)}))}else console.log("updateMenuSlugs: ","The countries parameter is undefined.")},t.prototype.updateUpcomingTotalByAttribute=function(t,e){void 0===e&&(e="data-upcoming-webinars");var a=this.getTemplateItemByAttribute(e),r=this.getElementsDataByTemplate(a),u=(t||[]).filter((function(t){return t.upComing})).length;n.default(r).each((function(t){"total"==n.default(this).attr("data-field")&&n.default(this).text(u)}))},t}());e.default=u},557:function(t,e,a){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var n=r(a(579)),u={countries:[],events:[],webinars:[],products:[],news:[],testimonials:[],webflowService:r(a(229)).default,htmlService:n.default};e.default=u},273:t=>{t.exports=require("jquery")}},e={};!function a(r){var n=e[r];if(void 0!==n)return n.exports;var u=e[r]={exports:{}};return t[r].call(u.exports,u,u.exports,a),u.exports}(607)})();