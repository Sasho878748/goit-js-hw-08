var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector(".feedback-form"),n=t.querySelector('input[name="email"]'),o=t.querySelector('textarea[name="message"]');var a={},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),v=Object.prototype.toString,d=Math.max,g=Math.min,p=function(){return m.Date.now()};function b(e,t,n){var o,a,r,i,u,f,l=0,c=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=o,r=a;return o=a=void 0,l=t,i=e.apply(r,n)}function b(e){return l=e,u=setTimeout(O,t),c?v(e):i}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function O(){var e=p();if(j(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?g(n,r-(e-l)):n}(e))}function h(e){return u=void 0,m&&o?v(e):(o=a=void 0,i)}function w(){var e=p(),n=j(e);if(o=arguments,a=this,f=e,n){if(void 0===u)return b(f);if(s)return u=setTimeout(O,t),v(f)}return void 0===u&&(u=setTimeout(O,t)),i}return t=S(t)||0,y(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(S(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=a=u=void 0},w.flush=function(){return void 0===u?i:h(p())},w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=u.test(e);return n||f.test(e)?l(e.slice(2),n?2:8):i.test(e)?NaN:+e}if(a=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),b(e,t,{leading:o,maxWait:t,trailing:a})},localStorage.getItem("feedback-form-state")){const{email:e,message:t}=JSON.parse(localStorage.getItem("feedback-form-state"));n.value=e,o.value=t}else n.value="",o.value="";t.addEventListener("input",a((()=>{const e={email:n.value,message:o.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));const j=JSON.parse(localStorage.getItem("feedback-form-state"));j&&(n.value=j.email,o.value=j.message),t.addEventListener("submit",(e=>{e.preventDefault();const t={email:n.value,message:o.value};localStorage.removeItem("feedback-form-state"),n.value="",o.value="",console.log(t)}));
//# sourceMappingURL=03-feedback.202a2ac2.js.map
