// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({2:[function(require,module,exports) {
'use strict';

function __$$styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".iconfont {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\np,\nblockquote,\ndl,\ndt,\ndd,\nul,\nol,\nli,\npre,\nform,\nfieldset,\nlegend,\nbutton,\ninput,\ntextarea,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n}\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  box-sizing: border-box;\n  font-size: 16px;\n}\npre[class*=\"language-\"] {\n  padding: 0.7em;\n}\naddress,\ncite,\ndfn,\nem,\nvar {\n  font-style: normal;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Consolas, Menlo, Courier, monospace;\n}\nsmall {\n  font-size: 12px;\n}\nul,\nol {\n  list-style: none;\n}\na {\n  color: #c97373;\n}\na:hover {\n  text-decoration: underline;\n}\nsup {\n  vertical-align: text-top;\n}\nsub {\n  vertical-align: text-bottom;\n}\nlegend {\n  color: #000;\n}\nfieldset,\nimg {\n  border: 0;\n}\nbutton,\ninput,\nselect,\ntextarea {\n  font-size: 100%;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n@-webkit-keyframes bigger {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n}\n@keyframes bigger {\n  from {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n}\n@-webkit-keyframes upper {\n  from {\n    -webkit-transform: translate(0, -20px);\n            transform: translate(0, -20px);\n  }\n  to {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n@keyframes upper {\n  from {\n    -webkit-transform: translate(0, -20px);\n            transform: translate(0, -20px);\n  }\n  to {\n    -webkit-transform: translate(0);\n            transform: translate(0);\n  }\n}\n@-webkit-keyframes smaller {\n  from {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes smaller {\n  from {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@-webkit-keyframes slide-in {\n  from {\n    opacity: 0;\n    top: -10px;\n  }\n  to {\n    opacity: 1;\n    top: 10px;\n  }\n}\n@keyframes slide-in {\n  from {\n    opacity: 0;\n    top: -10px;\n  }\n  to {\n    opacity: 1;\n    top: 10px;\n  }\n}\n@-webkit-keyframes slide-out {\n  from {\n    opacity: 1;\n    top: 20px;\n  }\n  to {\n    opacity: 0;\n    top: 0px;\n  }\n}\n@keyframes slide-out {\n  from {\n    opacity: 1;\n    top: 20px;\n  }\n  to {\n    opacity: 0;\n    top: 0px;\n  }\n}\n@-webkit-keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n    transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n    transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n    transform: translate3d(4px, 0, 0);\n  }\n}\n@keyframes shake {\n  10%,\n  90% {\n    -webkit-transform: translate3d(-1px, 0, 0);\n    transform: translate3d(-1px, 0, 0);\n  }\n  20%,\n  80% {\n    -webkit-transform: translate3d(2px, 0, 0);\n    transform: translate3d(2px, 0, 0);\n  }\n  30%,\n  50%,\n  70% {\n    -webkit-transform: translate3d(-4px, 0, 0);\n    transform: translate3d(-4px, 0, 0);\n  }\n  40%,\n  60% {\n    -webkit-transform: translate3d(4px, 0, 0);\n    transform: translate3d(4px, 0, 0);\n  }\n}\n@-webkit-keyframes scroll-lower {\n  from {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n  to {\n    background-color: #ffffff;\n    color: #000;\n  }\n}\n@keyframes scroll-lower {\n  from {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n  to {\n    background-color: #ffffff;\n    color: #000;\n  }\n}\n@-webkit-keyframes scroll-top {\n  from {\n    background-color: #ffffff;\n    color: #000;\n  }\n  to {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n}\n@keyframes scroll-top {\n  from {\n    background-color: #ffffff;\n    color: #000;\n  }\n  to {\n    background-color: rgba(255, 255, 255, 0);\n    color: #fff;\n  }\n}\n@-webkit-keyframes scale-left {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@keyframes scale-left {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@-webkit-keyframes scale-left2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@keyframes scale-left2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    left: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    left: 0%;\n  }\n}\n@-webkit-keyframes scale-right {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@keyframes scale-right {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 25%;\n  }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@-webkit-keyframes scale-right2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@keyframes scale-right2 {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    right: 50%;\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    right: 0%;\n  }\n}\n@-webkit-keyframes scale-top {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes scale-top {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes scale-top {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@-webkit-keyframes scale-top-reverse {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n@keyframes scale-top-reverse {\n  from {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  }\n}\n@-webkit-keyframes mask-show {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n}\n@keyframes mask-show {\n  from {\n    background-color: rgba(0, 0, 0, 0);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n}\n@-webkit-keyframes mask-show-reverse {\n  from {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@keyframes mask-show-reverse {\n  from {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n  to {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n@-webkit-keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  from {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n";
__$$styleInject(css);

var css$2 = ".component-mask {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  z-index: 50;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation: cant-touch 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: cant-touch 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.component-mask .component-model {\n  -webkit-animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n          animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  top: 16vh;\n  width: 80vw;\n  position: absolute;\n  max-width: 520px;\n  border-radius: 4px;\n  background-color: #fff;\n  background-clip: padding-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media screen and (max-width: 768px) {\n  .component-mask .component-model {\n    left: 10vw;\n  }\n}\n.component-mask .component-model .component-model-header {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  color: rgba(0, 0, 0, 0.65);\n  border-bottom: 1px solid #e8e8e8;\n}\n@media (min-width: 768px) {\n  .component-mask .component-model .component-model-header {\n    padding: 0 0 0 24px;\n    height: 55px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-model .component-model-header {\n    padding: 0 0 0 18px;\n    height: 40px;\n  }\n}\n.component-mask .component-model .component-model-header .title {\n  color: #212121;\n}\n.component-mask .component-model .component-model-header .btn-close {\n  border: 0;\n  width: 56px;\n  height: 100%;\n  color: #757575;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: pointer;\n}\n@media (min-width: 768px) {\n  .component-mask .component-model .component-model-header .btn-close {\n    width: 56px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-model .component-model-header .btn-close {\n    width: 46px;\n  }\n}\n.component-mask .component-model .component-model-header .btn-close:hover {\n  color: #212121;\n  font-weight: bold;\n}\n.component-mask .component-model .component-model-header .btn-close:active {\n  font-weight: bold;\n  color: #212121;\n}\n.component-mask .component-model .component-model-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 24px;\n  font-size: 14px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n@media (min-width: 768px) {\n  .component-mask .component-model .component-model-body {\n    padding: 24px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-model .component-model-body {\n    padding: 18px;\n  }\n}\n.component-mask .component-model .component-model-footer {\n  height: 55px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  border-top: 1px solid #e8e8e8;\n}\n@media (min-width: 768px) {\n  .component-mask .component-model .component-model-footer {\n    padding: 0 24px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-model .component-model-footer {\n    padding: 0 12px;\n  }\n}\n";
__$$styleInject(css$2);

var css$4 = ".component-btn {\n  outline: none;\n  cursor: pointer;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  height: 32px;\n  font-weight: 400;\n  font-size: 14px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 0px 15px;\n  border-radius: 4px;\n  white-space: nowrap;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  background-color: #fff;\n  border: 1px solid #e0e0e0;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.component-btn:hover {\n  color: #29b6f6;\n  border: 1px solid #29b6f6;\n}\n.component-btn:active {\n  color: #0277bd;\n  border: 1px solid #0277bd;\n}\n.component-btn.btn-primary {\n  color: #fff;\n  border: 1px solid #039be5;\n  background-color: #039be5;\n}\n.component-btn.btn-primary:hover {\n  background-color: #29b6f6;\n  border: 1px solid #29b6f6;\n}\n.component-btn.btn-primary:active {\n  background-color: #0277bd;\n  border: 1px solid #0277bd;\n}\n.component-btn.btn-danger {\n  color: #fff;\n  border: 1px solid #ff4d4f;\n  background-color: #ff4d4f;\n}\n.component-btn.btn-danger:hover {\n  background-color: #ff737e;\n  border: 1px solid #ff737e;\n}\n.component-btn.btn-danger:active {\n  background-color: #ff1c2f;\n  border: 1px solid #ff1c2f;\n}\n";
__$$styleInject(css$4);

var Button = function Button(args) {
  var className = args.className,
      text = args.text;

  var btn = document.createElement('button');
  btn.className = "component-btn " + (className ? className : "");
  btn.innerText = text;
  return btn;
};

var domFunc = function domFunc(e) {
  var dom = e.dom,
      style = e.style;

  for (var i in style) {
    dom.style[i] = style[i];
  }
};

var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};

var Dom = {
  domFunc: domFunc,
  sleep: sleep
};

var asyncToGenerator = function asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

var Modal = function () {
  var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(args) {
    var domFunc, sleep, title, content, callback, mask, btns;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            domFunc = Dom.domFunc, sleep = Dom.sleep;
            title = args.title, content = args.content, callback = args.callback;

            typeof args == 'string' && (content = args, title = '标题');
            if (title == undefined) {
              title = "{title: 请输入title参数}";
            }
            if (content == undefined) {
              content = "{content: 请输入content参数}";
            }
            if (callback == undefined) {
              callback = function callback() {};
            }
            mask = document.createElement('div');

            mask.className = 'component-mask';
            mask.innerHTML = "\n        <div class=\"component-model\">\n            <div class=\"component-model-header\">\n                <span class=\"title\">" + title + "</span>\n                " + Button({
              className: "confirm btn-close",
              text: "X"
            }).outerHTML + "\n            </div>\n            <div class=\"component-model-body\">\n                    " + content + "\n            </div>\n            <div class=\"component-model-footer\">\n                " + Button({
              className: "return",
              text: "返回"
            }).outerHTML + "\n                &nbsp;\n                &nbsp;\n                " + Button({
              className: "confirm btn-primary",
              text: "确认"
            }).outerHTML + "\n            </div>\n        </div>\n    ";
            domFunc({
              dom: document.querySelector('html'),
              style: {
                paddingRight: window.innerWidth - document.body.clientWidth + "px",
                overflow: "hidden"
              }
            });
            document.body.appendChild(mask);
            _context.next = 13;
            return sleep(300);

          case 13:
            mask.addEventListener('click', function (e) {
              e.stopPropagation();
              // e.preventDefault()
              // return false
              if (e.path[0].classList.contains('component-mask')) {
                mask.remove();
                domFunc({
                  dom: document.querySelector('html'),
                  style: {
                    paddingRight: "0px",
                    overflow: "auto"
                  }
                });
              }
            }, false);
            btns = mask.querySelectorAll('.component-model button');

            btns = Array.prototype.slice.call(btns);
            btns.forEach(function (dom) {
              dom.addEventListener('click', function () {
                mask.remove();
                domFunc({
                  dom: document.querySelector('html'),
                  style: {
                    paddingRight: "0px",
                    overflow: "auto"
                  }
                });
                if (dom.classList.contains('confirm')) {
                  callback();
                }
              });
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function Modal(_x) {
    return _ref.apply(this, arguments);
  };
}();

var css$6 = ".component-mask {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  z-index: 50;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-animation: cant-touch 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: cant-touch 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.component-mask .component-table {\n  -webkit-animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n          animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  top: 16vh;\n  width: 80vw;\n  position: absolute;\n  max-width: 520px;\n  border-radius: 4px;\n  background-color: #fff;\n  background-clip: padding-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media screen and (max-width: 768px) {\n  .component-mask .component-table {\n    left: 10vw;\n  }\n}\n.component-mask .component-table .component-model-header {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  color: rgba(0, 0, 0, 0.65);\n  border-bottom: 1px solid #e8e8e8;\n}\n@media (min-width: 768px) {\n  .component-mask .component-table .component-model-header {\n    padding: 0 0 0 24px;\n    height: 55px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-table .component-model-header {\n    padding: 0 0 0 18px;\n    height: 40px;\n  }\n}\n.component-mask .component-table .component-model-header .title {\n  color: #212121;\n}\n.component-mask .component-table .component-model-header .btn-close {\n  border: 0;\n  width: 56px;\n  height: 100%;\n  color: #757575;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: pointer;\n}\n@media (min-width: 768px) {\n  .component-mask .component-table .component-model-header .btn-close {\n    width: 56px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-table .component-model-header .btn-close {\n    width: 46px;\n  }\n}\n.component-mask .component-table .component-model-header .btn-close:hover {\n  color: #212121;\n  font-weight: bold;\n}\n.component-mask .component-table .component-model-header .btn-close:active {\n  font-weight: bold;\n  color: #212121;\n}\n.component-mask .component-table .component-model-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 24px;\n  font-size: 14px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n@media (min-width: 768px) {\n  .component-mask .component-table .component-model-body {\n    padding: 24px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-table .component-model-body {\n    padding: 18px;\n  }\n}\n.component-mask .component-table .component-model-footer {\n  height: 55px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  border-top: 1px solid #e8e8e8;\n}\n@media (min-width: 768px) {\n  .component-mask .component-table .component-model-footer {\n    padding: 0 24px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-table .component-model-footer {\n    padding: 0 12px;\n  }\n}\n";
__$$styleInject(css$6);

var Table = function () {
  var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(args) {
    var domFunc, sleep, data, callback, mask, btns;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            domFunc = Dom.domFunc, sleep = Dom.sleep;
            data = args.data, callback = args.callback;

            if (callback == undefined) {
              callback = function callback() {};
            }
            mask = document.createElement('div');

            mask.className = 'component-mask';
            mask.innerHTML = "\n        <header class=\"header\">\n            \u8BF7\u9009\u62E9\n        </header>\n        <div class=\"body\">\n            <div class=\"side\" id=\"side\">\n                <div class=\"all\" id=\"all\">\n                    <i class=\"icon iconfont icon-category\"></i>\n                    <span class=\"text-container\">\u5168\u90E8</span>\n                    <i class=\"icon iconfont icon-moreunfold\"></i>\n                </div>\n                <div class=\"list-container\"></div>\n                <div class=\"flex-container\"></div>\n            </div>\n            <div class=\"container\">\n                <span class=\"breadcrumb\">\n                    <span class=\"container-breadcrumb\">\n                        <i class=\"icon iconfont icon-location\"></i>\n                        \u5168\u90E8 \n                        <i class=\"icon iconfont icon-more1\"></i>\n                        \u7EA2\u9152 \n                        <i class=\"icon iconfont icon-more1\"></i>\n                        \u6CD5\u65AF\u7279\n                    </span>\n                </span>\n                <span class=\"search-container\">\n                    <span>\u5546\u54C1\u641C\u7D22\uFF1A</span>\n                    <span class=\"search\">\n                        <input type=\"text\">\n                        <span>\u641C\u7D22</span>\n                    </span>\n                </span>\n                <div class=\"table\">\n                    <div class=\"sec-table\" id=\"sec-table\">\n                        <div class=\"th\">\n                            <span class=\"select\">\n                                <input id=\"select-all\" type=\"checkbox\"/> \n                                <label for=\"select-all\">\u5168\u9009</label>\n                                <input id=\"select-reverse\" type=\"checkbox\"/> \n                                <label for=\"select-reverse\">\u53CD\u9009</label>\n                            </span>\n                            <span class=\"num\">\u7F16\u53F7</span>\n                            <span class=\"name\">\u540D\u79F0</span>\n                        </div>\n                        <div class=\"tb-container\"></div>\n                    </div>\n                    <div class=\"thr-table\" id=\"thr-table\">\n                        <div class=\"th\">\n                            <span class=\"select\">\n                                <input id=\"thr-select-all\" type=\"checkbox\"/> \n                                <label for=\"thr-select-all\">\u5168\u9009</label>\n                                <input id=\"thr-select-reverse\" type=\"checkbox\"/> \n                                <label for=\"thr-select-reverse\">\u53CD\u9009</label>\n                            </span>\n                            <span class=\"num\">\u7F16\u53F7</span>\n                            <span class=\"name\">\u540D\u79F0</span>\n                            <span class=\"empty\">\n                                <i class=\"icon iconfont icon-trash\"></i>\n                                \u6E05\u7A7A\n                            </span>\n                        </div>\n                        <div class=\"tb-container\">\n                            <div class=\"tb\"></div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"group-btn\">\n                    <button class=\"confirm\" id=\"confirm\">\u786E\u8BA4</button>\n                    <button class=\"cancel\" id=\"cancel\">\u53D6\u6D88</button>\n                </div>\n            </div>\n        </div>\n    ";
            domFunc({
              dom: document.querySelector('html'),
              style: {
                paddingRight: window.innerWidth - document.body.clientWidth + "px",
                overflow: "hidden"
              }
            });
            document.body.appendChild(mask);
            _context2.next = 10;
            return sleep(300);

          case 10:
            mask.addEventListener('click', function (e) {
              e.stopPropagation();
              // e.preventDefault()
              // return false
              if (e.path[0].classList.contains('component-mask')) {
                mask.remove();
                domFunc({
                  dom: document.querySelector('html'),
                  style: {
                    paddingRight: "0px",
                    overflow: "auto"
                  }
                });
              }
            }, false);
            btns = mask.querySelectorAll('.component-model button');

            btns = Array.prototype.slice.call(btns);
            btns.forEach(function (dom) {
              dom.addEventListener('click', function () {
                mask.remove();
                domFunc({
                  dom: document.querySelector('html'),
                  style: {
                    paddingRight: "0px",
                    overflow: "auto"
                  }
                });
                if (dom.classList.contains('confirm')) {
                  callback();
                }
              });
            });

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function Table(_x) {
    return _ref.apply(this, arguments);
  };
}();

var css$8 = ".component-container {\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  z-index: 50;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  pointer-events: none;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.component-container .component-container-message {\n  top: 10px;\n  width: auto;\n  font-size: 16px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  margin: 0 10px 10px 10px;\n  padding: 10px 16px;\n  position: relative;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n  background-color: #fff;\n}\n.component-container .component-container-message.info,\n.component-container .component-container-message.success,\n.component-container .component-container-message.warning {\n  -webkit-animation: slide-in 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: slide-in 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.component-container .component-container-message.error {\n  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n          animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n}\n.component-container .component-container-message .icon {\n  min-width: 28px;\n}\n";
__$$styleInject(css$8);

var css$10 = "svg {\n  font-size: 28px;\n  min-width: 28px;\n}\nsvg.icon {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\nsvg.icon.icon-success {\n  color: #52c41a;\n}\nsvg.icon.icon-error {\n  color: #f5222d;\n}\nsvg.icon.icon-warning {\n  color: #faad14;\n}\nsvg.icon.icon-info {\n  color: #039be5;\n}\n";
__$$styleInject(css$10);

var Icon = function Icon(args) {
  var className = args.className,
      type = args.type;

  if (type == "info") {
    var icon = "\n\t\t\t<svg\n\t\t\t\tclass=\"icon\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z\" fill=\"#2196F3\" p-id=\"1690\"></path>\n\t\t\t\t<path d=\"M469.333333 469.333333h85.333334v234.666667h-85.333334z\" fill=\"#FFFFFF\" p-id=\"1691\"></path>\n\t\t\t\t<path d=\"M512 352m-53.333333 0a53.333333 53.333333 0 1 0 106.666666 0 53.333333 53.333333 0 1 0-106.666666 0Z\" fill=\"#FFFFFF\" p-id=\"1692\"></path>\n\t\t\t</svg>\n\t\t";
    return icon;
  } else if (type == "success") {
    var _icon = "\n\t\t\t<svg \n\t\t\t\tclass=\"icon icon-success\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M510.545 28.22c-267.043 0-483.521 216.477-483.521 483.52s216.479 483.521 483.521 483.521 483.52-216.479 483.52-483.521S777.588 28.22 510.545 28.22zM776.855 407.855l-315.37 315.37c-9.763 9.763-22.559 14.645-35.355 14.645-12.796 0-25.592-4.882-35.355-14.645l-176.13-176.13c-19.526-19.525-19.526-51.184 0-70.71 19.526-19.526 51.184-19.527 70.711 0L426.13 617.159l280.015-280.015c19.527-19.526 51.184-19.526 70.711 0C796.382 356.671 796.382 388.329 776.855 407.855z\" p-id=\"1672\" fill=\"#53c41b\"></path>\n\t\t\t</svg>\n\t\t";
    return _icon;
  } else if (type == "error" || type == "delete") {
    var _icon2 = "\n\t\t\t<svg \n\t\t\t\tclass=\"icon icon-error\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M512 64.303538c-247.25636 0-447.696462 200.440102-447.696462 447.696462 0 247.254314 200.440102 447.696462 447.696462 447.696462s447.696462-200.440102 447.696462-447.696462S759.25636 64.303538 512 64.303538zM710.491727 665.266709c12.491499 12.491499 12.489452 32.729425-0.002047 45.220924-6.246261 6.246261-14.429641 9.370415-22.611997 9.370415s-16.363689-3.121084-22.60995-9.366322L512 557.222971 358.730221 710.491727c-6.246261 6.246261-14.429641 9.366322-22.611997 9.366322s-16.365736-3.125177-22.611997-9.370415c-12.491499-12.491499-12.491499-32.729425 0-45.220924l153.268756-153.266709L313.50725 358.730221c-12.491499-12.491499-12.489452-32.729425 0.002047-45.220924s32.729425-12.495592 45.220924-0.004093l153.268756 153.268756 153.268756-153.268756c12.491499-12.491499 32.729425-12.487406 45.220924 0.004093s12.493545 32.729425 0.002047 45.220924L557.225017 512 710.491727 665.266709z\" p-id=\"4168\"></path>\n\t\t\t</svg>\n\t\t";
    return _icon2;
  } else if (type == "warning" || type == "confirm") {
    var _icon3 = "\n\t\t\t<svg \n\t\t\t\tclass=\"icon icon-warning\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M512 85.333333c-235.52 0-426.666667 190.933333-426.666667 426.666667s191.146667 426.666667 426.666667 426.666667 426.666667-190.933333 426.666667-426.666667-191.146667-426.666667-426.666667-426.666667zM554.666667 725.333333l-85.333333 0 0-85.333333 85.333333 0 0 85.333333zM554.666667 554.666667l-85.333333 0 0-256 85.333333 0 0 256z\" p-id=\"4282\"></path>\n\t\t\t</svg>\n\t\t";
    return _icon3;
  } else if (type == "spin") {
    var _icon4 = "\n\t\t\t<svg \n\t\t\t\tclass=\"icon icon-info\" viewBox=\"0 0 1024 1024\" \n\t\t\t\twidth=\"200\" height=\"200\">\n\t\t\t\t<path d=\"M512 0c-282.76736 0-512 229.23264-512 512s229.23264 512 512 512 512-229.23264 512-512-229.23264-512-512-512zM512 256c141.39392 0 256 114.60608 256 256s-114.60608 256-256 256-256-114.60608-256-256 114.60608-256 256-256zM817.47968 817.47968c-81.59232 81.59232-190.07488 126.52544-305.47968 126.52544s-223.86688-44.93312-305.47968-126.52544-126.52544-190.07488-126.52544-305.47968c0-115.38432 44.93312-223.86688 126.52544-305.47968l67.8912 67.8912c0 0 0 0 0 0-131.01056 131.01056-131.01056 344.1664 0 475.17696 63.46752 63.46752 147.84512 98.4064 237.58848 98.4064s174.12096-34.95936 237.58848-98.4064c131.01056-131.01056 131.01056-344.1664 0-475.17696l67.8912-67.8912c81.59232 81.59232 126.52544 190.07488 126.52544 305.47968s-44.93312 223.86688-126.52544 305.47968z\" p-id=\"1646\"></path>\n\t\t\t</svg>\n\t\t";
    return _icon4;
  }
};

var Message = function () {
  var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(args) {
    var domFunc, sleep, type, content, callback, time, container, message;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            domFunc = Dom.domFunc, sleep = Dom.sleep;
            type = args.type, content = args.content, callback = args.callback, time = args.time;

            typeof args == 'string' && (content = args);
            type = type == undefined ? "info" : type;
            time = time == undefined ? 3000 : time;
            content = content == undefined ? "{content: 请输入content参数}" : content;
            callback = callback == undefined ? function () {} : callback;

            if (document.querySelector('.component-container')) {
              container = document.querySelector('.component-container');
            } else {
              container = document.createElement('div');

              container.className = 'component-container';
              document.body.appendChild(container);
            }
            message = document.createElement('div');

            message.className = "component-container-message " + type;
            message.innerHTML = "\n        " + Icon({ type: type }) + "\n        &nbsp;\n        " + content + "\n    ";
            container.appendChild(message);
            _context3.next = 14;
            return sleep(time);

          case 14:
            message.remove();

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function Message(_x) {
    return _ref.apply(this, arguments);
  };
}();

var css$12 = ".component-mask {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 50;\n  position: fixed;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n.component-mask .component-modalInfo {\n  top: 16vh;\n  width: 80vw;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 416px;\n  z-index: 50;\n  min-height: 120px;\n  position: absolute;\n  border-radius: 4px;\n  background-color: #fff;\n  box-sizing: border-box;\n  -webkit-animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n          animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  background-clip: padding-box;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media screen and (max-width: 768px) {\n  .component-mask .component-modalInfo {\n    left: 10vw;\n  }\n}\n@media (min-width: 768px) {\n  .component-mask .component-modalInfo {\n    padding: 32px 32px 24px 18px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-modalInfo {\n    padding: 15px;\n  }\n}\n.component-mask .component-modalInfo .component-model-header {\n  margin-bottom: 8px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  color: rgba(0, 0, 0, 0.65);\n}\n.component-mask .component-modalInfo .component-model-header .icon {\n  -webkit-box-flex: 2;\n      -ms-flex: 2 2 15%;\n          flex: 2 2 15%;\n}\n.component-mask .component-modalInfo .component-model-header .title {\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: bold;\n  font-size: 16px;\n  -webkit-box-flex: 2;\n      -ms-flex: 2 2 85%;\n          flex: 2 2 85%;\n  color: #212121;\n}\n.component-mask .component-modalInfo .component-model-body {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  word-break: break-word;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n@media (min-width: 768px) {\n  .component-mask .component-modalInfo .component-model-body {\n    margin-left: 55px;\n  }\n}\n@media (max-width: 768px) {\n  .component-mask .component-modalInfo .component-model-body {\n    margin-left: 38px;\n  }\n}\n.component-mask .component-modalInfo .component-modalInfo-footer {\n  margin-top: 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.component-mask .component-modalInfo .component-modalInfo-footer .component-btn {\n  margin-left: 5px;\n}\n";
__$$styleInject(css$12);

var ModalInfo = function () {
  var _ref = asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(args) {
    var domFunc, sleep, type, content, title, callback, mask, btns;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            domFunc = Dom.domFunc, sleep = Dom.sleep;
            type = args.type, content = args.content, title = args.title, callback = args.callback;

            typeof args == 'string' && (content = args, type = 'info');
            if (type == undefined) {
              type = "info";
            }
            if (title == undefined) {
              title = "提示";
            }
            if (content == undefined) {
              content = "{content: 请输入content参数}";
            }
            if (callback == undefined) {
              callback = function callback() {};
            }
            if (!type.match(/(info|success|error|warning|confirm|delete)/)) {
              type = "info";
            }
            mask = document.createElement('div');

            mask.className = 'component-mask';
            mask.innerHTML = "\n        <div class=\"component-modalInfo\">\n            <div class=\"component-model-header\">\n                " + Icon({
              type: type
            }) + "\n                <span class=\"title\">" + title + "</span>\n            </div>\n            <div class=\"component-model-body\">\n                " + content + "\n            </div>\n            <div class=\"component-modalInfo-footer\">\n                " + (type == "confirm" || type == "delete" ? Button({
              className: "cancal",
              text: "取消"
            }).outerHTML : "") + "\n                " + Button({
              className: "confirm " + (type == "delete" ? "btn-danger" : "btn-primary"),
              text: "确认"
            }).outerHTML + "\n            </div>\n        </div>\n    ";
            domFunc({
              dom: document.querySelector('html'),
              style: {
                paddingRight: window.innerWidth - document.body.clientWidth + "px",
                overflow: "hidden"
              }
            });
            document.body.appendChild(mask);
            _context4.next = 15;
            return sleep(300);

          case 15:
            mask.addEventListener('click', function (e) {
              e.stopPropagation();
              // e.preventDefault()
              // return false
              if (e.path[0].classList.contains('component-mask')) {
                mask.remove();
                domFunc({
                  dom: document.querySelector('html'),
                  style: {
                    paddingRight: "0px",
                    overflow: "auto"
                  }
                });
              }
            }, false);
            btns = mask.querySelectorAll('.component-modalInfo button');

            btns = Array.prototype.slice.call(btns);
            btns.forEach(function (dom) {
              dom.addEventListener('click', function () {
                mask.remove();
                domFunc({
                  dom: document.querySelector('html'),
                  style: {
                    paddingRight: "0px",
                    overflow: "auto"
                  }
                });
                if (dom.classList.contains('confirm')) {
                  callback();
                }
              });
            });

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function ModalInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();

var css$14 = "@media (min-width: 768px) {\n  .component-container-spin {\n    width: 100%;\n    height: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.6);\n    top: 0;\n    left: 0;\n    z-index: 50;\n    cursor: wait;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n  }\n  .component-container-spin.component-container-global {\n    height: 100vh;\n    position: fixed;\n    z-index: 50;\n    pointer-events: none;\n    top: 0;\n  }\n  .component-container-spin.component-container-global .spin-container {\n    position: absolute;\n    top: 25%;\n  }\n  .component-container-spin .spin-container {\n    height: 60px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .component-container-spin .spin-container .icon {\n    -webkit-animation: spin 1s cubic-bezier(0.97, 0.54, 0.46, 0.48) infinite;\n            animation: spin 1s cubic-bezier(0.97, 0.54, 0.46, 0.48) infinite;\n  }\n  .component-container-spin .spin-container span {\n    color: #0277bd;\n    text-shadow: 0 1px 2px #fff;\n  }\n}\n@media (max-width: 768px) {\n  .component-container-spin {\n    width: 100%;\n    height: 100%;\n    z-index: 50;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    position: fixed;\n    top: 0;\n    left: 0;\n  }\n  .component-container-spin.component-container-global {\n    height: 100vh;\n    z-index: 50;\n    -webkit-animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n            animation: mask-show 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n  }\n  .component-container-spin .spin-container {\n    bottom: 10vh;\n    -webkit-animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n            animation: scale-top 0.3s cubic-bezier(0.19, -0.62, 0.74, 1.7);\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    position: relative;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 40vw;\n    max-width: 130px;\n    height: 40vw;\n    max-height: 130px;\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 5px;\n  }\n  .component-container-spin .spin-container .icon {\n    font-size: 40px;\n    color: #fff;\n    -webkit-animation: spin 1s cubic-bezier(0.97, 0.54, 0.46, 0.48) infinite;\n            animation: spin 1s cubic-bezier(0.97, 0.54, 0.46, 0.48) infinite;\n  }\n  .component-container-spin .spin-container span {\n    font-size: 20px;\n    color: #fff;\n    padding-top: 5px;\n    text-shadow: 0 1px 2px #fff;\n  }\n}\n";
__$$styleInject(css$14);

var Spin = function Spin(args) {
  var domFunc = Dom.domFunc;

  if (args == undefined) {
    var dom = document.body;
  } else {
    var dom = args.dom;

    dom = dom == undefined ? document.body : dom;
  }
  if (!!dom.querySelector('.component-container-spin')) {
    dom.querySelector('.component-container-spin').remove();
    domFunc({
      dom: document.querySelector('html'),
      style: {
        paddingRight: "0px",
        overflow: "auto"
      }
    });
  } else {
    dom.style.position = "relative";
    var container = document.createElement('div');
    container.className = "component-container-spin " + (dom == document.body ? "component-container-global" : "");
    container.innerHTML = "\n            <div class=\"spin-container\">\n                " + Icon({ type: 'spin' }) + "\n                <span>Loading...</span>\n            </div>\n        ";
    container.addEventListener('click', function (e) {
      e.stopPropagation();
      // e.preventDefault()
      // return false
    });
    domFunc({
      dom: document.querySelector('html'),
      style: {
        paddingRight: window.innerWidth - document.body.clientWidth + "px",
        overflow: "hidden"
      }
    });
    dom.appendChild(container);
  }
};

var Component = {
  pc: {
    message: Message,
    spin: Spin,
    modal: Modal,
    modalInfo: ModalInfo,
    table: Table,
    container: {
      button: Button,
      icon: Icon
    }
  },
  mobile: {
    message: Message,
    spin: Spin,
    modal: Modal,
    modalInfo: ModalInfo,
    container: {
      button: Button,
      icon: Icon
    }
  }
};

module.exports = Component;
},{}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://' + window.location.hostname + ':52830/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,2])