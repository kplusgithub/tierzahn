!function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,function(t){return e[t]}.bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var a=a||{};a.leafletmap={mymap:L.map("mapid").setView([51.35377,6.64292],19),init:function(){return a.leafletmap.mymap.scrollWheelZoom.disable(),L.marker([51.35377,6.64292]).addTo(a.leafletmap.mymap).bindPopup("<h1 class='subheadline-small'>Zentrum für Tierzahnheilkunde</h1>").openPopup(),L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5vbnltb3NrcGx1cyIsImEiOiJjamo0ZGlvN28xa214M3ZvNGQzbXMzMnp3In0.eA9e66OpGxtT59nMcC3K4g",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox.streets",accessToken:"your.mapbox.access.token"}).addTo(a.leafletmap.mymap),this.mymap}},a.leafletmap.init();var o=a,r=function(){var e={async:function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===this.readyState&&200===this.status&&e(this)},t.open("get","faq.json","true"),t.send(null)}};return{uiController:function(e){function t(e){var t,n='<div class="row gap-top-30"><div class="col-sm card"><div class="card-body"><h3 class="card-text toggle-content-element question">%question1%<span style="float: right;"><img src="assets/img/icons/baseline-arrow_drop_down-24px.svg" width="30px;"></span></h3><p class="card-text flowingtext toggle-element answer">%answer1%</p></div></div><div class="col-sm card"><div class="card-body"><h3 class="card-text toggle-content-element question">%question2%<span style="float: right;"><img src="assets/img/icons/baseline-arrow_drop_down-24px.svg" width="30px;"></span></h3><p class="card-text flowingtext toggle-element answer">%answer2%</p></div></div></div>';t=JSON.parse(e.responseText);for(var a=0;a<Object.keys(t.faq).length;a+=2){var o=n.replace("%question1%",t.faq[a].q);o=(o=(o=o.replace("%answer1%",t.faq[a].a)).replace("%question2%",t.faq[a+1].q)).replace("%answer2%",t.faq[a+1].a),document.querySelector(".faq-el").insertAdjacentHTML("beforeend",o)}}return function(){e.async(t)}}(e),loaderJson:e}}();r.uiController();!function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===this.readyState&&200===this.status)try{e(this)}catch(e){console.log(e+"!!! IN DER NEWS.JSON IST EIN FEHLER")}},t.open("get","news.json","true"),t.send(null)}(function(e){var t=`<div  class="sticky-top d-none d-sm-block text-danger newsbar" >\n        <div class="newsbar__container"> </div>\n        <div class="newsbar__content" >\n            <h4 style="padding-top: 100px;padding-left: 60px;">${(e=JSON.parse(e.responseText)).newsHeadline}</h4>\n            <p style="padding-left: 60px;">${e.newsText}</p>\n        </div>\n    </div>`;!0===e.newsOnline&&document.querySelector(".news").insertAdjacentHTML("afterend",t)});o.toggle=function(){$(document).ready(function(){$(".toggle-content-element").click(function(){$(this).next().slideToggle()})})},o.toggle()}]);