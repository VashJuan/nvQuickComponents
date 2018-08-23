/*! Built with http://stenciljs.com */
var __generator=this&&this.__generator||function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};NvqComponents.loadBundle("3ifu0j29",["exports"],function(e){var t=window.NvqComponents.h,n=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function u(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,a)}l((r=r.apply(e,t||[])).next())})},r=function(){function e(){this.items=[],this.endpoint=""}return e.prototype.itemsSourceHandler=function(e){var t,n;t=e,(n=document.createElement("a")).href=t,n.host&&n.host!=window.location.host?this.endpoint=e:this.items=e.split(",")},e.prototype.isLocal=function(){return""==this.endpoint||null==this.endpoint||void 0==this.endpoint},e.prototype.handleInput=function(e){return n(this,void 0,void 0,function(){var t,n,r,o,i,u,a,l,c,s,p=this;return __generator(this,function(f){return t=e.target,this.items!==[]&&0!=this.items.length||this.itemsSourceHandler(this.itemsSource),n=function(e){var t=document.createElement("div");return t.innerHTML="<strong>"+e+"</strong>",t},r=function(e){var t=document.createElement("div");t.setAttribute("id","autocomplete-list"),t.setAttribute("class","autocomplete-items");for(var n=0,r=e;n<r.length;n++){var o=r[n];t.appendChild(o)}return t},o=function(){var e=[];for(var t in p.items)if(p.items[t].toLowerCase().includes(c.toLocaleLowerCase())){var r=n(p.items[t]);e.push(r)}return e},i=function(e){var t=p.endpoint+e;return fetch(t).then(function(e){return e.json()}).then(function(e){return e.toString()})},u=function(e,t){i(e).then(function(e){var n=e.split(",");t(n)})},a=function(){var e=t.parentNode.querySelector("#autocomplete-list");null!=e&&void 0!=e&&t.parentNode.removeChild(e)},l=function(e){if(a(),e.length>0){var n=r(e);t.parentNode.appendChild(n)}},""===(c=t.value)||void 0===c?(a(),[2]):(this.isLocal()?(s=o(),l(s)):u(c,function(e){var t=[];for(var r in e){var o=n(e[r]);t.push(o)}l(t)}),[2])})})},e.prototype.render=function(){var e=this;return t("div",null,t("div",{class:"autocomplete"},t("input",{autocomplete:"off",onInput:function(t){return n(e,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.handleInput(t)];case 1:return[2,e.sent()]}})})},type:"text",name:this.name,placeholder:this.placeholder,value:this.value})))},Object.defineProperty(e,"is",{get:function(){return"nvq-autocomplete"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{itemsSource:{type:String,attr:"items-source",watchCallbacks:["itemsSourceHandler"]},name:{type:String,attr:"name"},placeholder:{type:String,attr:"placeholder"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"*[data-nvq-autocomplete]{-webkit-box-sizing:border-box;box-sizing:border-box}body[data-nvq-autocomplete]{font:16px Arial}.autocomplete[data-nvq-autocomplete]{position:relative;display:inline-block;width:300px}input[data-nvq-autocomplete]{border:1px solid transparent;background-color:#f1f1f1;padding:10px;font-size:16px}input[type=text][data-nvq-autocomplete]{background-color:#f1f1f1;width:100%}input[type=submit][data-nvq-autocomplete]{background-color:#1e90ff;color:#fff;cursor:pointer}.autocomplete-items[data-nvq-autocomplete]{position:absolute;border:1px solid #d4d4d4;border-bottom:none;border-top:none;z-index:99;top:100%;left:0;right:0}.autocomplete-items[data-nvq-autocomplete]   div[data-nvq-autocomplete]{padding:10px;cursor:pointer;background-color:#fff;border-bottom:1px solid #d4d4d4}.autocomplete-items[data-nvq-autocomplete]   div[data-nvq-autocomplete]:hover{background-color:#e9e9e9}.autocomplete-active[data-nvq-autocomplete]{background-color:#1e90ff!important;color:#fff}"},enumerable:!0,configurable:!0}),e}();e.NvqAutocomplete=r,Object.defineProperty(e,"__esModule",{value:!0})});