!function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=9)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(o).concat([i]).join("\n")}var s;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<n.length;i++){var s=n[i];null!=s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),t.push(s))}},t}},function(n,t,e){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),c=null,p=0,l=[],u=e(4);function d(n,t){for(var e=0;e<n.length;e++){var r=n[e],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(x(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(x(r.parts[s],t));o[r.id]={id:r.id,refs:1,parts:a}}}}function f(n,t){for(var e=[],r={},i=0;i<n.length;i++){var o=n[i],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):e.push(r[s]={id:s,parts:[a]})}return e}function h(n,t){var e=a(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),l.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(n.insertAt.before,e);e.insertBefore(t,i)}}function m(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=l.indexOf(n);t>=0&&l.splice(t,1)}function b(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return v(t,n.attrs),h(n,t),t}function v(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function x(n,t){var e,r,i,o;if(t.transform&&n.css){if(!(o="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=o}if(t.singleton){var s=p++;e=c||(c=b(t)),r=y.bind(null,e,s,!1),i=y.bind(null,e,s,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",v(t,n.attrs),h(n,t),t}(t),r=function(n,t,e){var r=e.css,i=e.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,e,t),i=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),i=function(){m(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=f(n,t);return d(e,t),function(n){for(var r=[],i=0;i<e.length;i++){var s=e[i];(a=o[s.id]).refs--,r.push(a)}n&&d(f(n,t),t);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var g,w=(g=[],function(n,t){return g[n]=t,g.filter(Boolean).join("\n")});function y(n,t,e,r){var i=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=w(t,i);else{var o=document.createTextNode(i),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(o,s[t]):n.appendChild(o)}}},function(n,t,e){var r=e(3);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,i);r.locals&&(n.exports=r.locals)},function(n,t,e){(t=n.exports=e(0)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);",""]),t.push([n.i,".clips {\n  height: 420px;\n  width: 1220px;\n  margin: 70px auto;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n\n.clip-item {\n  display: inline-block;\n  width: 250px;\n  height: 400px;\n  margin: 0px 30px;\n  vertical-align: middle;\n  background-color: #f2d2ea;\n  text-align: center;\n  white-space: normal;\n  overflow-wrap: break-word;\n  border: 1px solid #3c3d3a;\n  border-radius: 5px;\n  font-size: 1rem;\n  overflow: hidden;\n\n  background-position: center 0px;\n  background-size: 100% 45%;\n  background-repeat: no-repeat;\n}\n\n.clip-item div {\n  height: 225px;\n  margin: 160px 0px 0px 10px;\n  text-align: left;\n}\n\n.clips img {\n  height: 40%;\n  width: 90%;\n}\n\n.clips a {\n  background: white;\n  display: block;\n  margin: 50px 10px 0px 0px;\n  color: #060606;\n  font-weight: 500;\n  text-align: center;\n}\n\n.author-name {\n  margin: 10px 0px;\n  font-size: 1rem;\n}\n\n.description {\n  font-size: 0.9rem;\n  font-style: italic;\n  font-weight: 300;\n  line-height: 1.4;\n}\n\n.clips.active {\n  cursor: grabbing;\n}\n\n.material-icons {\n  margin-right: 15px;\n  vertical-align: middle;\n}\n\n/* \n  ##Device = Tablets, Ipads (portrait)\n  ##Screen = from 768px to 1024px\n*/\n@media (min-width: 768px) and (max-width: 1024px) {\n  .clips {\n    width: 630px;\n    margin: 50px auto;\n  }\n}\n\n/* \n  ##Device = Low Resolution Tablets, Mobiles\n  ##Screen = from 481px to 767px\n*/\n@media (min-width: 481px) and (max-width: 767px) {\n  .clips {\n    width: 310px;\n    margin: 30px auto;\n  }\n}\n\n/* \n  ##Device = Most of the Smartphones Mobiles\n  ##Screen = from 320px to 479px\n*/\n@media (min-width: 320px) and (max-width: 480px) {\n  .clips {\n    width: 300px;\n    margin: 10px auto;\n  }\n}\n",""])},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var i,o=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,t,e){var r=e(6);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,i);r.locals&&(n.exports=r.locals)},function(n,t,e){(t=n.exports=e(0)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,500);",""]);var r=e(7)(e(8));t.push([n.i,"body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  background-color: #e8e8e8;\n}\n\n.search-form {\n  width: 600px;\n  height: 40px;\n  margin: 30px auto;\n}\n\n.search-box {\n  width: 500px;\n  height: 40px;\n  padding: 0px 0px 0px 15px;\n  border: 2px solid #3c3d3a;\n  border-radius: 20px;\n  font-size: 1rem;\n}\n\n.search-box:focus,\n.search-box:hover {\n  background-color: #f2d2ea;\n  outline: none;\n}\n\n.submit-button {\n  width: 50px;\n  height: 40px;\n  margin-left: 10px;\n  padding: 0px;\n  border: 0px;\n  background-image: url("+r+");\n  background-color: #e8e8e8;\n  background-repeat: no-repeat;\n  background-size: contain;\n  vertical-align: middle;\n}\n\n.submit-button:focus {\n  outline: none;\n}\n\n/* \n  ##Device = Tablets, Ipads (portrait)\n  ##Screen = from 768px to 1024px\n*/\n@media (min-width: 768px) and (max-width: 1024px) {\n  .search-form {\n    width: 450px;\n  }\n  .search-box {\n    width: 350px;\n  }\n}\n\n/* \n  ##Device = Low Resolution Tablets, Mobiles\n  ##Screen = from 481px to 767px\n*/\n@media (min-width: 481px) and (max-width: 767px) {\n  .search-form {\n    width: 370px;\n  }\n  .search-box {\n    width: 280px;\n  }\n}\n\n/* \n  ##Device = Most of the Smartphones Mobiles\n  ##Screen = from 320px to 479px\n*/\n@media (min-width: 320px) and (max-width: 480px) {\n  .search-form {\n    width: 310px;\n    height: 30px;\n  }\n  .search-box {\n    width: 220px;\n    height: 30px;\n  }\n\n  .submit-button {\n    width: 40px;\n    height: 30px;\n  }\n}\n",""])},function(n,t,e){"use strict";n.exports=function(n,t){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||t?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,t,e){n.exports=e.p+"79a976e43de97302ea96f0f67eabaf9d.png"},function(n,t,e){"use strict";e.r(t);class r{constructor(n){this.params={type:"video",part:"snippet",q:"",id:"",maxResult:"15",key:n}}async search(n){this.params.part="snippet",this.params.q=n;const t=`https://www.googleapis.com/youtube/v3/search?${new URLSearchParams(this.params).toString()}`,e=await fetch(t);return await e.json()}async getVideos(n){this.params.part="snippet,statistics",this.params.id=n.join(",");const t=new URLSearchParams(this.params);t.delete("pageToken");const e=`https://www.googleapis.com/youtube/v3/videos?${t.toString()}`,r=await fetch(e);return await r.json()}async searchVideos(n){const t=await this.search(n),e=t.items.map(n=>n.id.videoId),r=await this.getVideos(e);return this.params.pageToken=t.nextPageToken,r.items.map(n=>({title:n.snippet.title,id:n.id,description:n.snippet.description,author:n.snippet.channelTitle,publishedAt:n.snippet.publishedAt,preview:n.snippet.thumbnails.high.url,views:n.statistics.viewCount}))}}function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}class o{constructor(){i(this,"onMore",void 0),i(this,"onScroll",n=>{const t=n.target;t.scrollWidth===t.clientWidth+t.scrollLeft&&this.onMore&&this.onMore()}),i(this,"clear",()=>{this.content.innerHTML=""}),i(this,"renderEntry",n=>{const t=document.createElement("div");t.setAttribute("class","clip-item"),t.setAttribute("style",`background-image: url(${n.preview})`),t.innerHTML=`\n      <div>\n        <a target='_blank' href="https://www.youtube.com/watch?v=${n.id}">\n          ${n.title}\n        </a>\n        <h5 class='author-name'><i class='material-icons'>face</i>\n        ${n.author}\n        </h5>\n        <p class='date'><i class="material-icons">today</i>\n        ${n.publishedAt.slice(0,-14)}\n        </p>\n        <p class='views'><i class='material-icons'>visibility</i>\n        ${n.views}\n        </p>\n        <p class='description'>${n.description}</p>\n      </div>   \n    `,this.content.appendChild(t),o.srcollClips()});const n=document.createElement("div");n.className="clips",document.body.appendChild(n),n.addEventListener("scroll",this.onScroll),this.content=n}static srcollClips(){const n=document.querySelector(".clips");let t,e,r=!1;n.addEventListener("mousedown",i=>{r=!0,n.classList.add("active"),t=i.pageX-n.offsetLeft,e=n.scrollLeft}),n.addEventListener("mouseleave",()=>{r=!1,n.classList.remove("active")}),n.addEventListener("mouseup",()=>{r=!1,n.classList.remove("active")}),n.addEventListener("mousemove",i=>{if(!r)return;i.preventDefault();const o=2*(i.pageX-n.offsetLeft-t);n.scrollLeft=e-o})}}e(2);var s=o;e(5);var a=class{constructor(){this.onChange=(()=>null);const n=document.createElement("form");n.setAttribute("id","search-form"),n.setAttribute("class","search-form"),document.body.appendChild(n),n.innerHTML='\n      <input id="search" class="search-box" type="text" name="search" placeholder="Search Youtube" />\n      <input type="submit" class="submit-button" value />\n    ',n.addEventListener("submit",n=>{n.preventDefault(),this.onChange(n.target.elements.search.value)})}};function c(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}(new class{constructor(){c(this,"onSearch",async n=>{this.clips.clear(),this.q=n,(await this.model.searchVideos(this.q)).forEach(this.clips.renderEntry)}),c(this,"onMore",async()=>{(await this.model.searchVideos(this.q)).forEach(this.clips.renderEntry)}),this.q="",this.model=new r("AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y")}async run(){this.search=new a,this.search.onChange=this.onSearch,this.clips=new s,this.clips.onMore=this.onMore}}).run()}]);