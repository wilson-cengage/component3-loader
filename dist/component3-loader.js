!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"));else if("function"==typeof define&&define.amd)define(["React"],t);else{var n=t("object"==typeof exports?require("React"):e.React);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(t.s=11)}([function(t,n){t.exports=e},function(e,t,n){"use strict";var r=n(2);Object.prototype.hasOwnProperty.call(r,"a")&&Object.defineProperty(t,"a",{configurable:!1,enumerable:!0,get:function(){return r.a}})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),c=a&&a.__esModule?function(){return a["default"]}:function(){return a};Object.defineProperty(c,"a",{get:c});var s=n(3),u=n(8),f=u&&u.__esModule?function(){return u["default"]}:function(){return u};Object.defineProperty(f,"a",{get:f});var p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(e){function t(e){r(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={childComponent:null},n.componentRegistry=new s.a,n}return i(t,e),p(t,[{key:"componentDidMount",value:function(){var e=this;this.componentRegistry.load(this.props["package"],this.props.component,function(t){e.setState({childComponent:t})})}},{key:"render",value:function(){var e=null;return null!=this.state.childComponent&&(e=c.a.createElement(this.state.childComponent,null)),c.a.createElement("div",null,c.a.createElement("div",{className:"loader"},"Loading ",this.props["package"],"/",this.props.component,"..."),c.a.createElement("div",null,e))}}]),t}(c.a.Component);l.propTypes={"package":a.PropTypes.string.isRequired,component:a.PropTypes.string.isRequired},t.a=l},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(4),i=o&&o.__esModule?function(){return o["default"]}:function(){return o};Object.defineProperty(i,"a",{get:i});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(){function e(){r(this,e)}return a(e,[{key:"load",value:function(e,t,n){SystemJS["import"](e).then(function(e){n(e[t])})}}]),e}();t.a=c},function(e,t){SystemJS.config({map:{React:"/components/__adapters/react-adapter.js",ReactDOM:"/components/__adapters/react-dom-adapter.js","component3-package1":"/components/component3-package1/component3-package1.js","component3-package2":"/components/component3-package2/component3-package2.js"}})},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){t=e.exports=n(5)(),t.push([e.i,"span.loader{color:red;font-weight:700}",""])},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=l[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(s(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(s(r.parts[i],t));l[r.id]={id:r.id,refs:1,parts:a}}}}function r(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],c=o[2],s=o[3],u={css:a,media:c,sourceMap:s};n[i]?n[i].parts.push(u):t.push(n[i]={id:i,parts:[u]})}return t}function o(e,t){var n=m(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function s(e,t){var n,r,o;if(t.singleton){var s=y++;n=v||(v=a(t)),r=u.bind(null,n,s,!1),o=u.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=f.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function u(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var l={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=d(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,b=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=r(e);return n(o,t),function(e){for(var i=[],a=0;a<o.length;a++){var c=o[a],s=l[c.id];s.refs--,i.push(s)}if(e){var u=r(e);n(u,t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete l[s.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(6);"string"==typeof r&&(r=[[e.i,r,""]]);n(7)(r,{});r.locals&&(e.exports=r.locals)},,,function(e,t,n){"use strict";var r=n(1);Object.prototype.hasOwnProperty.call(r,"a")&&Object.defineProperty(t,"Loader",{configurable:!1,enumerable:!0,get:function(){return r.a}})}])});