window.__require=function t(e,o,i){function n(c,a){if(!o[c]){if(!e[c]){var p=c.split("/");if(p=p[p.length-1],!e[p]){var u="function"==typeof __require&&__require;if(!a&&u)return u(p,!0);if(r)return r(p,!0);throw new Error("Cannot find module '"+c+"'")}c=p}var s=o[c]={exports:{}};e[c][0].call(s.exports,function(t){return n(e[c][1][t]||t)},s,s.exports,t,e,o,i)}return o[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<i.length;c++)n(i[c]);return n}({Game:[function(t,e,o){"use strict";cc._RF.push(e,"e1b90/rohdEk4SdmmEZANaD","Game");var i,n=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),r=this&&this.__decorate||function(t,e,o,i){var n,r=arguments.length,c=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,a=c.ccclass,p=c.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.puttongArray=[],e.gaojiArray=[],e.Spine=null,e.bigPhoto=null,e.showBig=null,e.backbutton=null,e.againbutton=null,e.text="hello",e.clicktimes=0,e}return n(e,t),e.prototype.start=function(){},e.prototype.clickbutton=function(){var t=this;this.showBig.active=!0,this.backbutton.active=!1,this.againbutton.active=!1,this.bigPhoto.active=!1,this.clicktimes=this.clicktimes+1,this.Spine.active=!0;var e,o=this.Spine.getComponent(sp.Skeleton);console.log(this.clicktimes),this.clicktimes%4!=0?(o.animation="putong",e=this.puttongArray[Math.floor(Math.random()*this.puttongArray.length)]):(o.setAnimation(0,"gaoji",!1),o.setCompleteListener(function(t){0===t&&o.setAnimation(0,"xunhuan",!0)}),e=this.gaojiArray[Math.floor(Math.random()*this.gaojiArray.length)]),this.scheduleOnce(function(){t.bigPhoto.getComponent(cc.Sprite).spriteFrame=e,t.bigPhoto.active=!0,t.backbutton.active=!0,t.againbutton.active=!0},2)},e.prototype.clickback=function(){this.showBig.active=!1},r([p(cc.Label)],e.prototype,"label",void 0),r([p({type:[cc.SpriteFrame]})],e.prototype,"puttongArray",void 0),r([p({type:[cc.SpriteFrame]})],e.prototype,"gaojiArray",void 0),r([p(cc.Node)],e.prototype,"Spine",void 0),r([p(cc.Node)],e.prototype,"bigPhoto",void 0),r([p(cc.Node)],e.prototype,"showBig",void 0),r([p(cc.Node)],e.prototype,"backbutton",void 0),r([p(cc.Node)],e.prototype,"againbutton",void 0),r([p],e.prototype,"text",void 0),r([a],e)}(cc.Component);o.default=u,cc._RF.pop()},{}],"use_v2.1-2.2.1_cc.Toggle_event":[function(t,e){"use strict";cc._RF.push(e,"9f20a3By7JBo4o2rztbFWR1","use_v2.1-2.2.1_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_isChecked=!0),cc._RF.pop()},{}]},{},["Game","use_v2.1-2.2.1_cc.Toggle_event"]);