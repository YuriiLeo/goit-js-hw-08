!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var r,o,a,u,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function S(e){return l=e,f=setTimeout(T,t),s?b(e):u}function O(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function T(){var e=p();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function h(e){return f=void 0,m&&r?b(e):(r=o=void 0,u)}function w(){var e=p(),n=O(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return S(c);if(d)return f=setTimeout(T,t),b(c)}return void 0===f&&(f=setTimeout(T,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(j(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},w.flush=function(){return void 0===f?u:h(p())},w}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var S,O="feedback-form-state",T={},h={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};h.form.addEventListener("submit",(function(e){e.preventDefault(),console.log("email:",T.email,"message:",T.message),alert("email: ".concat(T.email," message: ").concat(T.message)),e.currentTarget.reset(),localStorage.removeItem(O)})),h.form.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem(O,JSON.stringify(T))}),500)),S=localStorage.getItem(O),(S=JSON.parse(S))&&(h.input.value=S.email,h.textarea.value=S.message,T={email:S.email,message:S.message})}();
//# sourceMappingURL=03-feedback.ffe76ca7.js.map
