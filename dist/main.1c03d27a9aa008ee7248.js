(()=>{"use strict";var e={946:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),r=n.n(a),i=n(645),o=n.n(i)()(r());o.push([e.id,"#home {\n\tdisplay: grid;\n\tgrid-template-columns: 2fr 3fr;\n\theight: 100vh;\n}\n\n#leftHome {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n#lightTextHome {\n\tcolor: gray;\n}\n\n#textHome {\n\ttext-align: center;\n\tpadding-top: 5%;\n\ttext-shadow: 1px 1px 1px rgb(80, 80, 80);\n\tfont-size: 5vh;\n\tpadding-bottom: 4%;\n}\n\n#menuBtnHome {\n\tcolor: white;\n\tbackground-color: rgb(85, 117, 35);\n\tpadding: 5%;\n\tcursor: pointer;\n\tmargin-top: 4%;\n\tbox-shadow: 3px 3px 5px rgb(70, 70, 70);\n\tmargin-right: 40%;\n}\n\n#rightHome {\n\tfloat: right;\n\theight: 100vh;\n\tbackground-size: cover;\n}\n",""]);const s=o},992:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),r=n.n(a),i=n(645),o=n.n(i)()(r());o.push([e.id,"#menu {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding-bottom: 5%;\n}\n\n#menuIcon {\n\tpadding-top: 7%;\n\tcolor: rgb(85, 117, 35);\n\tfont-size: x-large;\n\tfont-weight: bolder;\n\tborder-bottom: 2px solid rgb(85, 117, 35);\n}\n\n#menuSmallIcon {\n\tpadding: 1% 0;\n\tfont-size: 6vh;\n}\n\n#cardsContainer {\n\tdisplay: grid;\n\twidth: 90%;\n\tgrid-template-columns: repeat(auto-fill, minmax(33%, 1fr));\n\tgrid-auto-rows: auto;\n\tgap: 4%;\n\tgrid-row-gap: 4%;\n}\n\n.itemTypeHeadings {\n\tfont-size: x-large;\n\tcolor: green;\n\ttext-align: center;\n}\n\n.menuItem {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding: 0 8vw;\n}\n",""]);const s=o},869:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),r=n.n(a),i=n(645),o=n.n(i)()(r());o.push([e.id,"#navBar {\n\tbackground: rgba(255, 255, 255, 0.55);\n\theight: 7vh;\n\tposition: fixed;\n\twidth: 60%;\n\tdisplay: flex;\n\tright: 1px;\n\tjustify-content: space-around;\n\talign-items: center;\n\tbox-shadow: 3px 5px 10px rgb(70, 70, 70);\n}\n\n.navBarElements {\n\tcolor: rgb(60, 60, 60);\n\tcursor: pointer;\n\tfont-weight: 500;\n\tdisplay: flex;\n}\n\n.svgs {\n\theight: 20px;\n\tpadding-left: 10px;\n}\n",""]);const s=o},982:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(81),r=n.n(a),i=n(645),o=n.n(i)()(r());o.push([e.id,'* {\n\tborder: 0;\n\tpadding: 0;\n\tmargin: 0;\n\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n\t\tRoboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",\n\t\tsans-serif;\n}\n\n#container {\n\twidth: 100%;\n}\n',""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(o[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);a&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var i={},o=[],s=0;s<e.length;s++){var d=e[s],c=a.base?d[0]+a.base:d[0],l=i[c]||0,u="".concat(c," ").concat(l);i[c]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var h=r(m,a);a.byIndex=s,t.splice(s,0,{identifier:u,updater:h,references:1})}o.push(u)}return o}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=n(i[o]);t[s].references--}for(var d=a(e,r),c=0;c<i.length;c++){var l=n(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={id:a,exports:{}};return e[a](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{function e(){const e=document.createElement("div");e.id="navBar";const t=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div");n.id="homeBtnNavBar";const o=document.createElement("div");a.id="menuBtnNavBar";const s=document.createElement("div");t.id="reviewsBtnNavBar";const d=document.createElement("div");r.id="contactBtnNavBar",i.innerHTML='<svg  class = "svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>',o.innerHTML='<svg class = "svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>silverware</title><path d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M14.88,11.53L13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.47,10.12C12.76,8.59 13.26,6.44 14.85,4.85C16.76,2.93 19.5,2.57 20.96,4.03C22.43,5.5 22.07,8.24 20.15,10.15C18.56,11.74 16.41,12.24 14.88,11.53Z" /></svg>',s.innerHTML='<svg  class = "svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>message</title><path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z" /></svg>',d.innerHTML='<svg  class = "svgs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-box</title><path d="M6,17C6,15 10,13.9 12,13.9C14,13.9 18,15 18,17V18H6M15,9A3,3 0 0,1 12,12A3,3 0 0,1 9,9A3,3 0 0,1 12,6A3,3 0 0,1 15,9M3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5C3.89,3 3,3.9 3,5Z" /></svg>',n.textContent+="Home",a.textContent+="Menu",r.textContent+="Contact",t.textContent+="Reviews",n.appendChild(i),a.appendChild(o),t.appendChild(s),r.appendChild(d),n.classList.add("navBarElements"),a.classList.add("navBarElements"),t.classList.add("navBarElements"),r.classList.add("navBarElements"),e.appendChild(n),e.appendChild(a),e.appendChild(t),e.appendChild(r),container.appendChild(e)}const t=n.p+"images/homePage.jpg";function a(){const e=document.createElement("div");e.id="home";const n=document.createElement("div");n.id="leftHome";const a=document.createElement("div");a.id="lightTextHome",a.textContent="Discover your Taste";const r=document.createElement("div");r.id="textHome",r.innerHTML="Eat Healthy, Eat Natural, <br />Eat Indian";const i=document.createElement("button");i.id="menuBtnHome",i.textContent="Discover Menu >";const o=document.createElement("img");o.id="rightHome",o.src=t,container.appendChild(e),e.appendChild(n),n.appendChild(a),n.appendChild(r),n.appendChild(i),e.appendChild(o)}var r=n(379),i=n.n(r),o=n(795),s=n.n(o),d=n(569),c=n.n(d),l=n(565),u=n.n(l),p=n(216),m=n.n(p),h=n(589),v=n.n(h),g=n(982),f={};f.styleTagTransform=v(),f.setAttributes=u(),f.insert=c().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=m(),i()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;var C=n(869),x={};x.styleTagTransform=v(),x.setAttributes=u(),x.insert=c().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=m(),i()(C.Z,x),C.Z&&C.Z.locals&&C.Z.locals;var y=n(946),b={};b.styleTagTransform=v(),b.setAttributes=u(),b.insert=c().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=m(),i()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals;var w=n(992),E={};E.styleTagTransform=v(),E.setAttributes=u(),E.insert=c().bind(null,"head"),E.domAPI=s(),E.insertStyleElement=m(),i()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals;let k=document.getElementById("container");e(),a(),document.body.addEventListener("click",(t=>{const n=t.target.id;"homeBtnNavBar"===n?(k.textContent="",e(),a()):"menuBtnNavBar"===n&&(k.textContent="",e(),function(){const e=document.createElement("div");e.id="menu",container.appendChild(e);const t=document.createElement("div");t.textContent="Discover",t.id="menuIcon",e.appendChild(t);const n=document.createElement("div");n.textContent="Our Menu",n.id="menuSmallIcon",e.appendChild(n);const a=document.createElement("div");a.id="cardsContainer",e.appendChild(a);const r=document.createElement("div");r.id="breakfast",r.className="menuCards",a.appendChild(r);const i=document.createElement("div");i.id="lunch",i.className="menuCards",a.appendChild(i);const o=document.createElement("div");o.id="dinner",o.className="menuCards",a.appendChild(o);const s=document.createElement("div");s.id="drinks",s.className="menuCards",a.appendChild(s);const d=document.createElement("div");d.id="desserts",d.className="menuCards",a.appendChild(d);const c=document.createElement("div");c.textContent="Breakfast",c.className="itemTypeHeadings",r.appendChild(c);const l=document.createElement("div");l.textContent="Lunch",l.className="itemTypeHeadings",i.appendChild(l);const u=document.createElement("div");u.textContent="Dinner",u.className="itemTypeHeadings",o.appendChild(u);const p=document.createElement("div");p.textContent="Drinks",p.className="itemTypeHeadings",s.appendChild(p);const m=document.createElement("div");m.textContent="Desserts",m.className="itemTypeHeadings",d.appendChild(m);const h={breakfast:[],lunch:[],dinner:[],drinks:[],desserts:[]},v=(e,t,n)=>{let a={itemName:t,itemPrice:n};e.push(a)};v(h.breakfast,"Idli","₹99"),v(h.breakfast,"Poha","₹99"),v(h.breakfast,"Upma","₹99"),v(h.breakfast,"Dosa","₹99"),v(h.breakfast,"Besan Chilla","₹99"),v(h.breakfast,"Oats Upma","₹99"),v(h.breakfast,"Sprouts Chaat","₹99"),v(h.breakfast,"Dhokla","₹99"),v(h.breakfast,"Vegetable Pongal","₹99"),v(h.breakfast,"Ragi Dosa","₹99"),v(h.lunch,"Plain Rice","₹99"),v(h.lunch,"Brown Rice","₹99"),v(h.lunch,"Dal Tadka","₹99"),v(h.lunch,"Mushroom Curry","₹99"),v(h.lunch,"Vegetable Biryani","₹99"),v(h.lunch,"Chickpea Salad","₹99"),v(h.lunch,"Methi Thepla with Curd","₹99"),v(h.lunch,"Quinoa Khichdi","₹99"),v(h.lunch,"Baingan Bharta with Whole Wheat Roti","₹99"),v(h.lunch,"Kidney Beans Salad","₹99"),v(h.dinner,"Grilled Fish with Mint Chutney","₹99"),v(h.dinner,"Tandoori Chicken Salad:","₹99"),v(h.dinner,"Vegetable Stir-Fry with Tofu","₹99"),v(h.dinner,"Methi (Fenugreek) Paratha with Raita","₹99"),v(h.dinner,"Cauliflower Rice Biryani:","₹99"),v(h.dinner,"Moong Dal Khichdi","₹99"),v(h.drinks,"Masala Chai","₹99"),v(h.drinks,"Tulsi (Holy Basil) Tea","₹99"),v(h.drinks,"Jeera (Cumin) Water","₹99"),v(h.drinks,"Buttermilk","₹99"),v(h.drinks,"Haldi Doodh","₹99"),v(h.drinks,"Coconut Water ","₹99"),v(h.drinks,"Ginger Lemon Tea ","₹99"),v(h.drinks,"Nimbu Pani ","₹99"),v(h.desserts,"Fruit Chaat","₹99"),v(h.desserts,"Date and Nut Ladoo","₹99"),v(h.desserts,"Saffron and Almond Milk Pudding","₹99"),v(h.desserts,"Coconut Ladoo","₹99"),v(h.desserts,"Roasted Chickpeas with Jaggery","₹99"),v(h.desserts,"Ragi Halwa:","₹99");const g=(e,t)=>{const n=document.createElement("div");h[e].forEach((e=>{const t=document.createElement("div");t.className="menuItem";const a=document.createElement("div");a.textContent=e.itemName;const r=document.createElement("div");r.textContent=e.itemPrice,t.appendChild(a),t.appendChild(r),n.appendChild(t)})),t.appendChild(n)};g("breakfast",r),g("lunch",i),g("dinner",o),g("drinks",s),g("desserts",d)}())}))})()})();