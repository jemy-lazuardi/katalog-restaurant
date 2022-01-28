(window.webpackJsonp=window.webpackJsonp||[]).push([[3],[,,,,,,,function(n,t,e){"use strict";var r=e(8),a=e.n(r);function i(n,t,e,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void e(n)}s.done?t(u):Promise.resolve(u).then(r,a)}var o=function(){var n,t=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("serviceWorker"in navigator)){n.next=4;break}return n.next=3,a.a.register();case 3:return n.abrupt("return");case 4:case"end":return n.stop()}}),n)})),function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function s(n){i(o,r,a,s,u,"next",n)}function u(n){i(o,r,a,s,u,"throw",n)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();t.a=o},,function(n,t,e){"use strict";var r={init:function(n){var t=this,e=n.button,r=n.drawer,a=n.content;e.addEventListener("click",(function(n){t.toggleDrawer(n,r)})),a.addEventListener("click",(function(n){t.closeDrawer(n,r)}))},toggleDrawer:function(n,t){n.stopPropagation();var e=t.style;"180px"===e.width?e.width="0px":e.width="180px"},closeDrawer:function(n,t){n.stopPropagation(),t.style.width="0px"}},a={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),t=this._urlSplitter(n);return this._urlCombiner(t)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var t=n.split("/");return{resource:t[1]||null,id:t[2]||null,verb:t[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},i=e(2),o=e(0),s=function(n){return'\n    <article class="restaurant-detail-content">\n        <div class="restaurant-detail-image">\n                <img class="restaurant-detail-thumbnail" src="'.concat(n.pictureId?"".concat(o.a.BASE_IMAGE_URL,"medium/").concat(n.pictureId):"https://alppetro.co.id/dist/assets/images/default.jpg",'" alt="').concat(n.name,'">\n                <label class="restaurant-detail-city">').concat(n.city,'</label>\n        </div>\n        <div>\n            <h1 class="restaurant-detail-title">').concat(n.name,'</h1>\n            <p class="restaurant-detail-address">').concat(n.address,'</p>\n            <p class="restaurant-detail-description">').concat(n.description,'</p>\n            <label class="restaurant-detail-rating">Rating : ').concat(n.rating,"</label>\n        </div>\n    </article>\n")},u=function(n){return'\n    <article class="restaurant-item">\n        <div class="restaurant-item-image">\n          <img class="restaurant-item-thumbnail lazyload" data-src="'.concat(n.pictureId?"".concat(o.a.BASE_IMAGE_URL,"medium/").concat(n.pictureId):"https://alppetro.co.id/dist/assets/images/default.jpg",'" alt="').concat(n.name,'">\n          <label class="restaurant-item-city">').concat(n.city,'</label>\n        </div>\n        <div class="restaurant-item-content">\n          <h1 class="restaurant-item-title"><a href="',"/#/detail/".concat(n.id),'">').concat(n.name,'</a></h1>\n          <p class="restaurant-item-description">').concat(n.description,'</p>\n          <label class="restaurant-item-rating">Rating : ').concat(n.rating,"</label>\n        </div>\n    </article>\n")},c=function(n){return'\n    <div class="review">\n        <p>&ldquo;'.concat(n.review,'&rdquo;</p>\n        <div class="review-name">-').concat(n.name,"</div>\n    </div>\n")};function d(n,t,e,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void e(n)}s.done?t(u):Promise.resolve(u).then(r,a)}function l(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function o(n){d(i,r,a,o,s,"next",n)}function s(n){d(i,r,a,o,s,"throw",n)}o(void 0)}))}}var p={init:function(n){var t=this;return l(regeneratorRuntime.mark((function e(){var r,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.favoriteButtonContainer,a=n.favoriteRestaurant,i=n.restaurant,t._favoriteButtonContainer=r,t._restaurant=i,t._favoriteRestaurant=a,e.next=6,t._renderButton();case 6:case"end":return e.stop()}}),e)})))()},_renderButton:function(){var n=this;return l(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n._restaurant.id,t.next=3,n._isRestaurantExist(e);case 3:if(!t.sent){t.next=7;break}n._renderLiked(),t.next=8;break;case 7:n._renderLike();case 8:case"end":return t.stop()}}),t)})))()},_isRestaurantExist:function(n){var t=this;return l(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._favoriteRestaurant.getRestaurant(n);case 2:return r=e.sent,e.abrupt("return",!!r);case 4:case"end":return e.stop()}}),e)})))()},_renderLike:function(){var n=this;this._favoriteButtonContainer.innerHTML='\n  <button aria-label="like this resto" id="favoriteButton" class="fab">\n    <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#favoriteButton").addEventListener("click",l(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._favoriteRestaurant.putRestaurant(n._restaurant);case 2:n._renderButton();case 3:case"end":return t.stop()}}),t)}))))},_renderLiked:function(){var n=this;this._favoriteButtonContainer.innerHTML='\n  <button aria-label="unlike this resto" id="favoriteButton" class="fab">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#favoriteButton").addEventListener("click",l(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._favoriteRestaurant.deleteRestaurant(n._restaurant.id);case 2:n._renderButton();case 3:case"end":return t.stop()}}),t)}))))}},f=e(1);e(19);function g(n,t,e,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void e(n)}s.done?t(u):Promise.resolve(u).then(r,a)}function h(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function o(n){g(i,r,a,o,s,"next",n)}function s(n){g(i,r,a,o,s,"throw",n)}o(void 0)}))}}var m={render:function(){return h(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"<restaurant-detail></restaurant-detail>",n.abrupt("return","<restaurant-detail></restaurant-detail>");case 2:case"end":return n.stop()}}),n)})))()},afterRender:function(){return h(regeneratorRuntime.mark((function n(){var t,e,r,o,u,d,l,g,h,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.parseActiveUrlWithoutCombiner(),n.next=3,i.a.detailRestaurant(t.id);case 3:e=n.sent,r=e.restaurant,o=r.categories,u=r.menus,d=r.customerReviews,document.querySelector(".restaurant-detail-body").innerHTML=s(r),l=document.querySelector(".restaurant-detail-categories"),o.forEach((function(n){l.innerHTML+="<span>".concat(n.name,"</span>")})),g=document.querySelector(".restaurant-food-menus"),u.foods.forEach((function(n){g.innerHTML+="<li>".concat(n.name,"</li>")})),h=document.querySelector(".restaurant-drink-menus"),u.drinks.forEach((function(n){h.innerHTML+="<li>".concat(n.name,"</li>")})),m=document.querySelector(".restaurant-reviews"),d.forEach((function(n){m.innerHTML+=c(n)})),p.init({favoriteButtonContainer:document.querySelector(".favoriteButtonContainer"),favoriteRestaurant:f.a,restaurant:r});case 17:case"end":return n.stop()}}),n)})))()}};e(20),e(21);function x(n,t,e,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void e(n)}s.done?t(u):Promise.resolve(u).then(r,a)}function v(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function o(n){x(i,r,a,o,s,"next",n)}function s(n){x(i,r,a,o,s,"throw",n)}o(void 0)}))}}var b={render:function(){return v(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"<hero-banner></hero-banner>","<restaurant-list></restaurant-list>",n.abrupt("return",["<hero-banner></hero-banner>","<restaurant-list></restaurant-list>"]);case 3:case"end":return n.stop()}}),n)})))()},afterRender:function(){return v(regeneratorRuntime.mark((function n(){var t,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.listRestaurant();case 2:t=n.sent,e=document.querySelector(".restaurants"),t.forEach((function(n){e.innerHTML+=u(n)}));case 5:case"end":return n.stop()}}),n)})))()}};e(22);function w(n,t,e,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void e(n)}s.done?t(u):Promise.resolve(u).then(r,a)}function y(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var i=n.apply(t,e);function o(n){w(i,r,a,o,s,"next",n)}function s(n){w(i,r,a,o,s,"throw",n)}o(void 0)}))}}var k={"/":b,"/detail/:id":m,"/favorite":{render:function(){return y(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"<restaurant-favorites></restaurant-favorites>",n.abrupt("return","<restaurant-favorites></restaurant-favorites>");case 2:case"end":return n.stop()}}),n)})))()},afterRender:function(){return y(regeneratorRuntime.mark((function n(){var t,e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.getAllRestaurant();case 2:t=n.sent,e=document.querySelector(".restaurants"),r=document.querySelector(".empty-state-container"),0!==t.length?t.forEach((function(n){e.innerHTML+=u(n)})):r.innerHTML='\n  <div class="empty-state">\n    Anda Belum Menambahkan Restaurant Favorite Anda\n  </div>\n';case 6:case"end":return n.stop()}}),n)})))()}}};function R(n,t,e,r,a,i,o){try{var s=n[i](o),u=s.value}catch(n){return void e(n)}s.done?t(u):Promise.resolve(u).then(r,a)}function _(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}var z=function(){function n(t){var e=t.button,r=t.drawer,a=t.content;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=e,this._drawer=r,this._content=a,this._initialAppShell()}var t,e,i,o,s;return t=n,(e=[{key:"_initialAppShell",value:function(){r.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(o=regeneratorRuntime.mark((function n(){var t,e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.parseActiveUrlWithCombiner(),void 0===(e=k[t])&&(e=k["/"]),n.next=5,e.render();case 5:return this._content.innerHTML=n.sent,n.next=8,e.afterRender();case 8:case"end":return n.stop()}}),n,this)})),s=function(){var n=this,t=arguments;return new Promise((function(e,r){var a=o.apply(n,t);function i(n){R(a,e,r,i,s,"next",n)}function s(n){R(a,e,r,i,s,"throw",n)}i(void 0)}))},function(){return s.apply(this,arguments)})}])&&_(t.prototype,e),i&&_(t,i),n}();t.a=z},,,,,,function(n,t,e){var r=e(5),a=e(16);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);n.exports=a.locals||{}},function(n,t,e){(t=e(6)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap);"]),t.push([n.i,"* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody, html {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #f9f7f7;\n}\n\nbody {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 12px;\n    color: #112d4e;\n    text-decoration: none;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nnavigation-bar{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    min-height: 56px;\n    transition: min-height 0.3s;\n    padding-left: 20px;\n    padding-right: 20px;\n}\n\n.nav-list{\n    list-style: none;\n    text-transform: uppercase;\n}\n\n.nav-list li {\n    text-decoration: none;\n    display: inline-block;\n}\n\n.nav-list li a{\n    color: #112d4e;\n    font-weight: bold;\n    font-size: 14px;\n    text-decoration: none;\n    padding: 1.3em;\n}\n\n.nav-list li a:hover{\n    background-color: #3f72af;\n    color: #f9f7f7;\n    border-radius: 5px;\n}\n\n.nav-menu{\n    font-size: 22px;\n    display: block;\n    min-width: 45px;\n    min-height: 45px;\n    text-align: center;\n    text-decoration: none;\n    color: #112d4e;\n}\n\n.side-nav {\n    height: 100%; \n    width: 0; \n    position: fixed; \n    z-index: 1; \n    top: 0; \n    left: 0;\n    background-color: #112d4e; \n    overflow-x: hidden;\n    transition: 0.5s;\n    padding-top: 40px;\n  }\n\n.side-nav a {\n    border-radius: 5px;\n    padding: 14px 12px;\n    text-decoration: none;\n    font-size: 18px;\n    font-weight: 600;\n    color: #dbe2ef;\n    display: block;\n    transition: 0.3s;\n}\n\n.side-nav a:focus {\n    outline: 4px transparent #112d4e;\n}\n\n.hero {\n    display: flex;\n    align-items: center;\n    min-height: 380px;\n    width: 100%;\n    text-align: center;\n    background: rgba(0, 0, 0, 0.3);\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(\"/images/heros/hero-image_2-small.jpg\");\n    background-position: center;\n    background-color: green;\n    background-size: cover;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6);\n}\n\n.hero-inner {\n    margin: 0 auto;\n    max-width: 800px;\n    padding: 50px 0;\n}\n\n.hero-title {\n    color: #f9f7f7;\n    font-weight: 500;\n    font-size: 26px;\n}\n\n.hero-desc {\n    color: #f9f7f7;\n    margin-top: 16px;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.5;\n}\n\n\nmain {\n    width: 100%;\n    margin: 0 auto;\n    flex: 1;\n}\n\n.restaurant-list {\n    padding: 30px 15px;\n    width: 100%;\n    margin: 0 auto;\n    text-align: center;\n}\n\n.restaurant-list-label {\n    font-size: 32px;\n    font-weight: lighter;\n}\n\n.restaurants {\n    margin: 32px auto auto;\n    text-align: left;\n    display: grid;\n    grid-row-gap: 16px;\n}\n\n.restaurant-item {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6);\n    width: 100%;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.restaurant-item-content {\n    padding: 16px;\n}\n\n.restaurant-item-thumbnail {\n    width: 100%;\n    height: 300px;\n}\n\n.restaurant-item-rating {\n    color: #3f72af;\n    text-decoration: none;\n    font-weight: bold;\n    font-size: 16px;\n}\n\n.restaurant-item-title {\n    font-weight: 500;\n    font-size: 16px;\n    margin-top: 10px;\n    transition: 0.3s opacity;\n}\n\n.restaurant-item-image{\n    position: relative;\n}\n\n.restaurant-item-city{\n    position: absolute;\n    top: 5px;\n    left: 0;\n    background-color: #3f72af;\n    padding: 12px;\n    width: auto;\n    border-bottom: 2px ridge #f9f7f7;\n    border-right: 2px ridge #f9f7f7;\n    border-top: 2px ridge #f9f7f7;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    font-size: 14px;\n    font-weight: 500;\n    color: #f9f7f7;\n}\n\n.restaurant-item-title:hover {\n    opacity: 0.5;\n}\n\n.restaurant-item-title a {\n    text-decoration: none;\n    color: inherit;\n    padding: 13px 0;\n    transition: all 0.3s ease;\n}\n\n.restaurant-item-title a:focus {\n    font-weight: bolder;\n}\n\n.restaurant-item-description {\n    margin-top: 16px;\n    font-size: 14px;\n    line-height: 1.5em;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-bottom: 16px;\n}\n\nfooter {\n    background-color: #112d4e;\n    padding: 2em;\n    width: 100%;\n    text-align: center;\n}\n\nfooter p {\n    margin: 0 auto;\n    display: inline-block;\n    color: #f9f7f7;\n}\n\n.skip-link {\n    position: absolute;\n    top: -55px;\n    left: 0;\n    background-color: #112d4e;\n    color: #f9f7f7;\n    padding: 17px;\n    z-index: 100;\n    text-decoration: none;\n    transition: all 0.3s ease;\n    font-size: 16px;\n }\n\n .skip-link:focus {\n    top: 0;\n }\n\n .restaurant-detail-label {\n    text-align: center;\n    padding: 20px 0;\n}\n\n.restaurant-detail {\n    padding: 16px;\n}\n\n.restaurant-detail-thumbnail {\n    width: 100%;\n    height: auto;\n}\n\n.restaurant-detail-rating {\n    color: #3f72af;\n    text-decoration: none;\n    font-weight: bold;\n    font-size: 16px;\n}\n\n.restaurant-detail-title {\n    font-weight: 500;\n    font-size: 16px;\n    margin-top: 10px;\n    transition: 0.3s opacity;\n    color: #3f72af;\n}\n\n.restaurant-detail-image{\n    position: relative;\n}\n\n.restaurant-detail-city{\n    position: absolute;\n    top: 5px;\n    left: 0;\n    background-color: #3f72af;\n    padding: 12px;\n    width: auto;\n    border-bottom: 2px ridge #f9f7f7;\n    border-right: 2px ridge #f9f7f7;\n    border-top: 2px ridge #f9f7f7;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    font-size: 14px;\n    font-weight: 500;\n    color: #f9f7f7;\n}\n\n.restaurant-detail-description {\n    margin-top: 16px;\n    font-size: 14px;\n    line-height: 1.7em;\n    margin-bottom: 16px;\n}\n\n.restaurant-detail-categories{\n    text-align: center;\n    width: auto;\n}\n\n.restaurant-detail-categories span{\n    border-radius: 5px;\n    border: 1px solid slategrey;\n    margin: 0 5px;\n    padding: 5px;\n}\n\n.restaurant-menus{\n    padding: 16px;\n    align-items: center;\n}\n\n.restaurant-menus .flex{\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.customer-reviews{\n    padding: 16px;\n    align-items: center;\n}\n\n.customer-reviews .review{\n    border: #112d4e 1px solid;\n    border-radius: 10px;\n    margin-bottom: 10px;\n    padding: 10px;\n}\n\n.customer-reviews .review .review-name{\n    text-align: right;\n}\n\n.fab {\n    width: 50px;\n    height: 50px;\n    background-color: #112d4e;\n    border-radius: 50%;\n    box-shadow: 0 6px 10px 0 #666;\n    transition: all 0.1s ease-in-out;\n    border: none;\n  \n    font-size: 18px;\n    color: white;\n    text-align: center;\n    line-height: 40px;\n  \n    position: fixed;\n    right: 25px;\n    bottom: 25px;\n }\n  \n .fab:hover {\n    box-shadow: 0 6px 14px 0 #666;\n    transform: scale(1.05);\n }\n\n .empty-state{\n    padding: 100px 0;\n    text-align: center;\n    color: grey;\n }",""]),n.exports=t},function(n,t,e){var r=e(5),a=e(18);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var i={insert:"head",singleton:!1};r(a,i);n.exports=a.locals||{}},function(n,t,e){(t=e(6)(!1)).push([n.i,'@media screen and (max-width: 580px) {\r\n    .nav-list {\r\n        display: none;\r\n    }\r\n}\r\n\r\n/* Tablet Screen */\r\n@media screen and (min-width: 581px) {\r\n    .hero {\r\n        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/heros/hero-image_2-large.jpg");\r\n    }\r\n\r\n    .nav-menu {\r\n        display: none;\r\n    }\r\n\r\n    .restaurants {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-column-gap: 10px;\r\n        grid-row-gap: 16px;\r\n    }\r\n\r\n    .restaurant-item-content {\r\n        padding: 16px 32px 32px 32px;\r\n    }\r\n\r\n    .restaurant-item-title {\r\n        font-size: 18px;\r\n    }\r\n\r\n    .restaurant-item-description {\r\n        font-size: 16px;\r\n    }\r\n\r\n    .empty-state{\r\n        text-align: center;\r\n        color: grey;\r\n     }\r\n}\r\n\r\n/* Desktop Screen */\r\n@media screen and (min-width: 1024px) {\r\n    .hero{\r\n        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/heros/hero-image_2-large.jpg");\r\n    }\r\n\r\n    .nav-menu {\r\n        display: none;\r\n    }\r\n\r\n    .side-nav {\r\n        display: none;\r\n    }\r\n\r\n    .hero {\r\n        min-height: 280px;\r\n    }\r\n\r\n    .restaurants {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n\r\n    .restaurant-detail-content {\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        grid-gap: 10px;\r\n    }\r\n\r\n    .restaurant-detail-thumbnail {\r\n        width: 100%;\r\n        align-items: center;\r\n        height: auto;\r\n    }\r\n\r\n    .restaurant-reviews{\r\n        align-self: center;\r\n    }\r\n\r\n    .customer-reviews .review{\r\n        margin: 10px auto;\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .hero{\r\n        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/heros/hero-image_2.jpg");\r\n    }\r\n\r\n    .nav-menu {\r\n        display: none;\r\n    }\r\n\r\n    .side-nav {\r\n        display: none;\r\n    }\r\n\r\n    \r\n    main {\r\n        max-width: 1200px;\r\n    }\r\n}',""]),n.exports=t}]]);