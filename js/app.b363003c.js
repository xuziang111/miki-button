(function(t){function e(e){for(var n,o,c=e[0],p=e[1],s=e[2],m=0,u=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(t[n]=p[n]);h&&h(e);while(u.length)u.shift()();return r.push.apply(r,s||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var p=a[c];0!==i[p]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var h=p;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09aa":function(t,e,a){},"1c1d":function(t,e,a){},"2f6e":function(t,e,a){"use strict";var n={info:{title:"弥按钮",info:"信息",null:"空",audioStaff:"音频来源魔球群和弥群",toGithub:"请在Github参与翻译、增补音频或提出建议",notOfficial:"本站为爱好者作品，和VirtuaReal官方没有关联",overlapTips:"重叠播放无法暂停，而且会创建大量线程，玩够了最好刷新一下"},action:{toggleNavbar:"切换导航栏",close:"关闭",copy:"复制",control:"操作控制",stopvoice:"停止",randomplay:"帮我选一个",overlap:"允许声音重叠",autoplay:"播放不要停下来",playing:"正在播放：",noplay:"暂无播放"},lang:{"zh-CN":"简体中文"}};e["a"]=n},"3dfd":function(t,e,a){"use strict";var n,i,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Modal"),a("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[a("div",{staticClass:"container-fluid",attrs:{id:"top-header"}},[a("div",{staticClass:"navbar-header"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[a("div",[t._v(t._s(t.$t("info.title")))])])]),t._m(0),a("div",{staticClass:"brand1"},[t._v(" 请注意音量大小 ")])])]),a("div",{staticClass:"container-fluid main-content"},[a("HomePage")],1),a("footer",{staticClass:"footer"},[a("div",[a("div",[t._v(t._s(t.$t("info.audioStaff")))]),t._m(1),a("div",[t._v("音频投稿:touhou@lolimy.cn github 或者弥四丢群文件")])]),a("div",[t._m(2),a("div",{staticClass:"text-right"},[t._v("本项目"),a("a",{attrs:{href:"https://github.com/xuziang111/miki-button-src",target:"_blank"}},[t._v(t._s(t.$t("info.toGithub")))])]),a("div",{staticClass:"text-right"},[t._v(t._s(t.$t("info.notOfficial")))])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"brand1"},[a("a",{attrs:{href:"https://space.bilibili.com/477317922/",target:"_blank"}},[a("img",{attrs:{src:"resources/bilibili.svg",height:"18"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("友情链接:"),a("a",{attrs:{href:"https://www.mihiru.com"}},[t._v("mihiru.com")]),t._v(" "),a("a",{attrs:{href:"https://mahiru-vr.github.io/"}},[t._v("孟按钮")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-right"},[a("a",{attrs:{href:"https://github.com/zyzsdy/aqua-button",target:"_blank"}},[t._v("原项目")])])}],c=(a("2b45"),a("fc58"),a("1462")),p=a("a340"),s=a("bb06"),h=a("3114"),m=a("198d"),u=a("a593"),l=a("60ae"),d=a.n(l),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[t._m(0),a("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[t._v(t._s(t.$t(t.title)))])]),a("div",{staticClass:"modal-body"},[t._v(" "+t._s(t.$t(t.msg))+" ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v(t._s(t.$t("action.close")))])])])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],C=a("b9d0"),b=a("ce3c"),N=a("a336"),y=a.n(N);function z(t){var e=k();return function(){var a,n=Object(m["a"])(t);if(e){var i=Object(m["a"])(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(h["a"])(this,a)}}function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var g,_,O=d()((i=function(t){Object(s["a"])(a,t);var e=z(a);function a(){var t;Object(c["a"])(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(b["a"])(Object(C["a"])(t),"title","info.info"),Object(b["a"])(Object(C["a"])(t),"msg","info.null"),t}return Object(p["a"])(a,[{key:"created",value:function(){var t=this;this.$gConst.globalbus.$on("send-info",(function(e){t.msg=e,t.showModal()}))}},{key:"showModal",value:function(){y()("#myModal").modal()}}]),a}(u["default"]),n=i))||n,j=O,$=j,w=(a("b338"),a("9ca4")),x=Object(w["a"])($,f,v,!1,null,null,null),P=x.exports,M=a("c3b0");function A(t){var e=S();return function(){var a,n=Object(m["a"])(t);if(e){var i=Object(m["a"])(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(h["a"])(this,a)}}function S(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var R=(g=d()({components:{Modal:P,HomePage:M["a"]}}),g(_=function(t){Object(s["a"])(a,t);var e=A(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return Object(p["a"])(a,[{key:"created",value:function(){console.log("Produced by MoewSound Idols"),this.$i18n.locale=localStorage.getItem("lang")||this.$i18n.locale}},{key:"chlang",value:function(t){this.$i18n.locale=t,localStorage.setItem("lang",t)}},{key:"currentLang",get:function(){return this.$i18n.locale}}]),a}(u["default"]))||_),D=R,E=D,L=(a("5c0b"),Object(w["a"])(E,r,o,!1,null,null,null));e["a"]=L.exports},"40f5":function(t,e,a){},"41cb":function(t,e,a){"use strict";var n=a("a593"),i=a("3211"),r=a("c3b0");n["default"].use(i["a"]),e["a"]=new i["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:r["a"]}]})},"56d7":function(t,e,a){"use strict";a.r(e),function(t){a("6d57"),a("309f"),a("0b53"),a("06a2"),a("ec25"),a("cc57"),a("2b45"),a("e44b"),a("6648"),a("5f54"),a("f0e6");var e=a("a593"),n=a("3ddb"),i=a("41cb"),r=a("3dfd"),o=a("2f6e"),c=a("a336"),p=a.n(c),s=(a("cace"),a("898e")),h=a("da57");function m(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=u(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,c=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return o=t.done,t},e:function(t){c=!0,r=t},f:function(){try{o||null==a.return||a.return()}finally{if(c)throw r}}}}function u(t,e){if(t){if("string"===typeof t)return l(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}t.jQuery=t.$=p.a;var d,f={voice:{},voicecategory:{}},v=m(h.voices);try{for(v.s();!(d=v.n()).done;){var C=d.value;void 0!==C.categoryDescription&&void 0!==C.categoryDescription["zh-CN"]&&(f.voicecategory[C.categoryName]=C.categoryDescription["zh-CN"]);var b,N=m(C.voiceList);try{for(N.s();!(b=N.n()).done;){var y=b.value;void 0!==y.description&&void 0!==y.description["zh-CN"]&&(f.voice[y.name]=y.description["zh-CN"])}}catch(O){N.e(O)}finally{N.f()}}}catch(O){v.e(O)}finally{v.f()}var z=Object.assign(o["a"],f);e["default"].config.productionTip=!1,e["default"].use(n["a"]),e["default"].use(s["a"]);var k={"zh-CN":z},g="zh-CN",_=new n["a"]({locale:g,messages:k});new e["default"]({router:i["a"],i18n:_,render:function(t){return t(r["a"])}}).$mount("#app")}.call(this,a("532c"))},"5c0b":function(t,e,a){"use strict";var n=a("09aa"),i=a.n(n);i.a},"76f2":function(t,e,a){"use strict";var n=a("40f5"),i=a.n(n);i.a},"898e":function(t,e,a){"use strict";var n=a("1462"),i=a("a340"),r=a("a593"),o=function(){function t(){Object(n["a"])(this,t)}return Object(i["a"])(t,[{key:"install",value:function(t){t.prototype.$gConst={globalbus:new r["default"]}}}]),t}();e["a"]=new o},b338:function(t,e,a){"use strict";var n=a("1c1d"),i=a.n(n);i.a},c3b0:function(t,e,a){"use strict";var n,i,r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",[a("div",{staticClass:"cate-header"},[t._v(t._s(t.$t("action.control")))]),a("div",{staticClass:"cate-body"},[a("button",{staticClass:"btn btn-info",on:{click:t.random}},[t._v(t._s(t.$t("action.randomplay")))]),a("button",{staticClass:"btn btn-info",on:{click:t.stopPlay}},[t._v(t._s(t.$t("action.stopvoice")))]),a("button",{staticClass:"btn btn-info",class:{disabled:t.autoCheck},attrs:{title:t.$t("info.overlapTips")},on:{click:t.overlap}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.overlapCheck,expression:"overlapCheck"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.overlapCheck)?t._i(t.overlapCheck,null)>-1:t.overlapCheck},on:{change:function(e){var a=t.overlapCheck,n=e.target,i=!!n.checked;if(Array.isArray(a)){var r=null,o=t._i(a,r);n.checked?o<0&&(t.overlapCheck=a.concat([r])):o>-1&&(t.overlapCheck=a.slice(0,o).concat(a.slice(o+1)))}else t.overlapCheck=i}}}),a("span",[t._v(t._s(t.$t("action.overlap")))])]),a("button",{staticClass:"btn btn-info",class:{disabled:t.overlapCheck},on:{click:t.autoPlay}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.autoCheck,expression:"autoCheck"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.autoCheck)?t._i(t.autoCheck,null)>-1:t.autoCheck},on:{change:function(e){var a=t.autoCheck,n=e.target,i=!!n.checked;if(Array.isArray(a)){var r=null,o=t._i(a,r);n.checked?o<0&&(t.autoCheck=a.concat([r])):o>-1&&(t.autoCheck=a.slice(0,o).concat(a.slice(o+1)))}else t.autoCheck=i}}}),a("span",[t._v(t._s(t.$t("action.autoplay")))])])]),a("div",{staticClass:"cate-body"},[a("span",[t._v(t._s(t.voice.name?t.$t("action.playing")+t.$t("voice."+t.voice.name):t.$t("action.noplay")))])]),a("audio",{attrs:{id:"player"},on:{ended:function(e){return t.voiceEnd(!1)}}})]),t._l(t.voices,(function(e){return a("div",{key:e.categoryName},[a("div",{staticClass:"cate-header"},[t._v(t._s(t.$t("voicecategory."+e.categoryName)))]),a("div",{staticClass:"cate-body"},t._l(e.voiceList,(function(e){return a("button",{key:e.name,staticClass:"btn btn-new",on:{click:function(a){return t.play(e)}}},[t._v(" "+t._s(t.$t("voice."+e.name))+" ")])})),0)])}))],2)},o=[],c=(a("2b45"),a("fc58"),a("1462")),p=a("a340"),s=a("b9d0"),h=a("bb06"),m=a("3114"),u=a("198d"),l=a("ce3c"),d=a("a593"),f=a("60ae"),v=a.n(f),C=a("da57");function b(t){var e=N();return function(){var a,n=Object(u["a"])(t);if(e){var i=Object(u["a"])(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(m["a"])(this,a)}}function N(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var y=v()((i=function(t){Object(h["a"])(a,t);var e=b(a);function a(){var t;Object(c["a"])(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return t=e.call.apply(e,[this].concat(i)),Object(l["a"])(Object(s["a"])(t),"voices",C.voices),Object(l["a"])(Object(s["a"])(t),"autoCheck",!1),Object(l["a"])(Object(s["a"])(t),"overlapCheck",!1),Object(l["a"])(Object(s["a"])(t),"voice",{}),t}return Object(p["a"])(a,[{key:"play",value:function(t){if(this.overlapCheck){var e=new Audio("voices/"+t.path);this.voice=t,e.play()}else{this.stopPlay();var a=document.getElementById("player");a.src="voices/"+t.path,this.voice=t,a.play()}}},{key:"stopPlay",value:function(){var t=document.getElementById("player");t.pause(),this.voiceEnd(!0)}},{key:"voiceEnd",value:function(t){!0!==t&&this.autoCheck?this.random():this.voice={}}},{key:"random",value:function(){var t=this.voices[this._randomNum(0,this.voices.length-1)];this.play(t.voiceList[this._randomNum(0,t.voiceList.length-1)])}},{key:"autoPlay",value:function(){this.overlapCheck||(this.autoCheck=!this.autoCheck)}},{key:"overlap",value:function(){this.autoCheck||(this.overlapCheck=!this.overlapCheck)}},{key:"_randomNum",value:function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}}}]),a}(d["default"]),n=i))||n,z=y,k=z,g=(a("76f2"),a("9ca4")),_=Object(g["a"])(k,r,o,!1,null,"f1b69aa2",null);e["a"]=_.exports},da57:function(t){t.exports=JSON.parse('{"voices":[{"categoryName":"voice","categoryDescription":{"zh-CN":"嘎吱语音"},"voiceList":[{"name":"mahiru主人","path":"mahiru主人.mp3","description":{"zh-CN":"mahiru主人"}},{"name":"咽口水","path":"咽口水.mp3","description":{"zh-CN":"咽口水"}},{"name":"弥宝吐舌","path":"弥宝吐舌.mp3","description":{"zh-CN":"弥宝吐舌"}},{"name":"弥宝苦笑","path":"弥宝苦笑.mp3","description":{"zh-CN":"弥宝苦笑"}},{"name":"弥宝飞扑","path":"弥宝飞扑.mp3","description":{"zh-CN":"弥宝飞扑"}},{"name":"宝 你好聪明 妈妈好欣慰","path":"宝 你好聪明 妈妈好欣慰.mp3","description":{"zh-CN":"宝 你好聪明 妈妈好欣慰"}},{"name":"啊哈_","path":"啊哈_.mp3","description":{"zh-CN":"啊哈_"}},{"name":"啊~","path":"啊~.mp3","description":{"zh-CN":"啊~"}},{"name":"啊哈哈哈哈哈哈","path":"啊哈哈哈哈哈哈.mp3","description":{"zh-CN":"啊哈哈哈哈哈哈"}},{"name":"mua","path":"mua.mp3","description":{"zh-CN":"mua"}},{"name":"呜呜","path":"呜呜.mp3","description":{"zh-CN":"呜呜"}},{"name":"笑","path":"笑.mp3","description":{"zh-CN":"笑"}},{"name":"呜","path":"呜.mp3","description":{"zh-CN":"呜"}},{"name":"哎","path":"哎.mp3","description":{"zh-CN":"哎"}},{"name":"en","path":"en.mp3","description":{"zh-CN":"en"}},{"name":"en2","path":"en2.mp3","description":{"zh-CN":"en2"}},{"name":"en3","path":"en3.mp3","description":{"zh-CN":"en3"}},{"name":"？？？","path":"？？？.mp3","description":{"zh-CN":"？？？"}},{"name":"我也喜欢你啊","path":"我也喜欢你啊.mp3","description":{"zh-CN":"我也喜欢你啊"}}]},{"categoryName":"actmoe","categoryDescription":{"zh-CN":"对线语音"},"voiceList":[{"name":"嗯？你说啥","path":"嗯？你说啥.mp3","description":{"zh-CN":"嗯？你说啥"}},{"name":"甜甜甜你妈","path":"甜甜甜你妈.mp3","description":{"zh-CN":"甜甜甜你妈"}},{"name":"滚吧 莫挨老子","path":"滚吧 莫挨老子.mp3","description":{"zh-CN":"滚吧 莫挨老子"}},{"name":"miki怒了miki录了录了","path":"miki怒了miki录了录了.mp3","description":{"zh-CN":"miki怒了miki录了录了"}},{"name":"miki是真的没有脑袋不正常这样的问题","path":"miki是真的没有脑袋不正常这样的问题.mp3","description":{"zh-CN":"miki是真的没有脑袋不正常这样的问题"}},{"name":"miki什么时候怕过你后辈了","path":"miki什么时候怕过你后辈了.mp3","description":{"zh-CN":"miki什么时候怕过你后辈了"}},{"name":"你也太二次元了吧","path":"你也太二次元了吧.mp3","description":{"zh-CN":"你也太二次元了吧"}},{"name":"那你性癖很怪哦","path":"那你性癖很怪哦.mp3","description":{"zh-CN":"那你性癖很怪哦"}},{"name":"略傻逼略","path":"略傻逼略.mp3","description":{"zh-CN":"略傻逼略"}},{"name":"vtuber舔狗快点笑他","path":"vtuber舔狗快点笑他.mp3","description":{"zh-CN":"vtuber舔狗快点笑他"}},{"name":"草","path":"草.mp3","description":{"zh-CN":"草"}},{"name":"肾虚怎么了肾虚怎么了肾虚怎么了","path":"肾虚怎么了肾虚怎么了肾虚怎么了.mp3","description":{"zh-CN":"肾虚怎么了肾虚怎么了肾虚怎么了"}},{"name":"大家脑子是真的有问题吧天那","path":"大家脑子是真的有问题吧天那.mp3","description":{"zh-CN":"大家脑子是真的有问题吧天那"}},{"name":"对不起对不起对不起","path":"对不起对不起对不起.mp3","description":{"zh-CN":"对不起对不起对不起"}},{"name":"反对青鸟的都拖出去杀了","path":"反对青鸟的都拖出去杀了.mp3","description":{"zh-CN":"反对青鸟的都拖出去杀了"}},{"name":"副会长的嘴从来没有动过怎么开飘啊","path":"副会长的嘴从来没有动过怎么开飘啊.mp3","description":{"zh-CN":"副会长的嘴从来没有动过怎么开飘啊"}},{"name":"按照脸来说我还是非常可爱的","path":"按照脸来说我还是非常可爱的.mp3","description":{"zh-CN":"按照脸来说我还是非常可爱的"}},{"name":"miki什么时候失言过","path":"miki什么时候失言过.mp3","description":{"zh-CN":"miki什么时候失言过"}},{"name":"cxly","path":"cxly.mp3","description":{"zh-CN":"cxly"}},{"name":"先提高你的裤腰带吧","path":"先提高你的裤腰带吧.mp3","description":{"zh-CN":"先提高你的裤腰带吧"}},{"name":"哭了吗好哭的好赏好活","path":"哭了吗好哭的好赏好活.mp3","description":{"zh-CN":"哭了吗好哭的好赏好活"}},{"name":"你滚你滚你滚你滚","path":"你滚你滚你滚你滚.mp3","description":{"zh-CN":"你滚你滚你滚你滚"}},{"name":"看什么管人都是管人害了你","path":"看什么管人都是管人害了你.mp3","description":{"zh-CN":"看什么管人都是管人害了你"}},{"name":"又是光一的gaychi","path":"又是光一的gaychi.mp3","description":{"zh-CN":"又是光一的gaychi"}},{"name":"滚滚滚滚滚","path":"滚滚滚滚滚.mp3","description":{"zh-CN":"滚滚滚滚滚"}},{"name":"实属拉胯","path":"实属拉胯.mp3","description":{"zh-CN":"实属拉胯"}},{"name":"我道歉了你们还想怎么样","path":"我道歉了你们还想怎么样.mp3","description":{"zh-CN":"我道歉了你们还想怎么样"}},{"name":"你好衰阿","path":"你好衰阿.mp3","description":{"zh-CN":"你好衰阿"}},{"name":"你们怎么这么懂","path":"你们怎么这么懂.mp3","description":{"zh-CN":"你们怎么这么懂"}},{"name":"我们是最潮最in的二次元耶","path":"我们是最潮最in的二次元耶.mp3","description":{"zh-CN":"我们是最潮最in的二次元耶"}},{"name":"你就是网上说的二次元对不对","path":"你就是网上说的二次元对不对.mp3","description":{"zh-CN":"你就是网上说的二次元对不对"}},{"name":"河豚费拉不堪","path":"河豚费拉不堪.mp3","description":{"zh-CN":"河豚费拉不堪"}},{"name":"你们连我的弱智人设也要抢吗","path":"你们连我的弱智人设也要抢吗.mp3","description":{"zh-CN":"你们连我的弱智人设也要抢吗"}},{"name":"别骂了别骂了别骂了","path":"别骂了别骂了别骂了.mp3","description":{"zh-CN":"别骂了别骂了别骂了"}},{"name":"嗨下-","path":"嗨下-.mp3","description":{"zh-CN":"嗨下-"}}]},{"categoryName":"xinjiang","categoryDescription":{"zh-CN":"新疆男友"},"voiceList":[{"name":"新疆男友 不用害怕，我会保护Miki","path":"新疆男友 不用害怕，我会保护Miki.mp3","description":{"zh-CN":"新疆男友 不用害怕，我会保护Miki"}},{"name":"新疆男友 大家晚上好 弥希miki的男朋友是我","path":"新疆男友 大家晚上好 弥希miki的男朋友是我.mp3","description":{"zh-CN":"新疆男友 大家晚上好 弥希miki的男朋友是我"}},{"name":"里昂 里昂","path":"里昂 里昂.mp3","description":{"zh-CN":"里昂 里昂"}}]},{"categoryName":"other","categoryDescription":{"zh-CN":"杂项语音"},"voiceList":[{"name":"嗯嗯嗯","path":"嗯嗯嗯.mp3","description":{"zh-CN":"嗯嗯嗯"}},{"name":"嘿咻","path":"嘿咻.mp3","description":{"zh-CN":"嘿咻"}},{"name":"嘿咻2","path":"嘿咻2.mp3","description":{"zh-CN":"嘿咻2"}},{"name":"小天才","path":"小天才.mp3","description":{"zh-CN":"小天才"}},{"name":"扭曲","path":"扭曲.mp3","description":{"zh-CN":"扭曲"}},{"name":"拜拜，晚安","path":"拜拜，晚安.mp3","description":{"zh-CN":"拜拜，晚安"}},{"name":"擦盘子","path":"擦盘子.mp3","description":{"zh-CN":"擦盘子"}},{"name":"擦盘子2","path":"擦盘子2.mp3","description":{"zh-CN":"擦盘子2"}},{"name":"擦盘子3","path":"擦盘子3.mp3","description":{"zh-CN":"擦盘子3"}},{"name":"擦盘子4","path":"擦盘子4.mp3","description":{"zh-CN":"擦盘子4"}},{"name":"擦盘子5","path":"擦盘子5.mp3","description":{"zh-CN":"擦盘子5"}},{"name":"54321","path":"54321.mp3","description":{"zh-CN":"54321"}},{"name":"bilibili干杯","path":"bilibili干杯.mp3","description":{"zh-CN":"bilibili干杯"}},{"name":"hum1","path":"hum1.mp3","description":{"zh-CN":"hum1"}},{"name":"hum2","path":"hum2.mp3","description":{"zh-CN":"hum2"}},{"name":"hum3","path":"hum3.mp3","description":{"zh-CN":"hum3"}},{"name":"hum4","path":"hum4.mp3","description":{"zh-CN":"hum4"}},{"name":"接下来miki最期待的事情大概就是哪一天v圈爆炸","path":"接下来miki最期待的事情大概就是哪一天v圈爆炸.mp3","description":{"zh-CN":"接下来miki最期待的事情大概就是哪一天v圈爆炸"}},{"name":"挺好的爽了","path":"挺好的爽了.mp3","description":{"zh-CN":"挺好的爽了"}},{"name":"人活着真难","path":"人活着真难.mp3","description":{"zh-CN":"人活着真难"}},{"name":"我真的要死了","path":"我真的要死了.mp3","description":{"zh-CN":"我真的要死了"}},{"name":"太弥惑了","path":"太弥惑了.mp3","description":{"zh-CN":"太弥惑了"}},{"name":"这是雪空","path":"这是雪空.mp3","description":{"zh-CN":"这是雪空"}},{"name":"做人真难","path":"做人真难.mp3","description":{"zh-CN":"做人真难"}},{"name":"我的好日子来了","path":"我的好日子来了.mp3","description":{"zh-CN":"我的好日子来了"}},{"name":"光一哥哥","path":"光一哥哥.mp3","description":{"zh-CN":"光一哥哥"}},{"name":"大家是想看miki败犬吗","path":"大家是想看miki败犬吗.mp3","description":{"zh-CN":"大家是想看miki败犬吗"}},{"name":"百合豚搞快点","path":"百合豚搞快点.mp3","description":{"zh-CN":"百合豚搞快点"}},{"name":"金吉拉金","path":"金吉拉金.mp3","description":{"zh-CN":"金吉拉金"}},{"name":"网络害人","path":"网络害人.mp3","description":{"zh-CN":"网络害人"}},{"name":"un1","path":"un1.mp3","description":{"zh-CN":"un1"}},{"name":"un2","path":"un2.mp3","description":{"zh-CN":"un2"}},{"name":"un3","path":"un3.mp3","description":{"zh-CN":"un3"}},{"name":"un4","path":"un4.mp3","description":{"zh-CN":"un4"}},{"name":"un5","path":"un5.mp3","description":{"zh-CN":"un5"}},{"name":"un6","path":"un6.mp3","description":{"zh-CN":"un6"}},{"name":"こんるる","path":"こんるる.mp3","description":{"zh-CN":"こんるる"}},{"name":"miki有事","path":"miki有事.mp3","description":{"zh-CN":"miki有事"}},{"name":"对不起","path":"对不起.mp3","description":{"zh-CN":"对不起"}},{"name":"弥希miki很便宜的","path":"弥希miki很便宜的.mp3","description":{"zh-CN":"弥希miki很便宜的"}},{"name":"水友们，这合理吗","path":"水友们，这合理吗.mp3","description":{"zh-CN":"水友们，这合理吗"}},{"name":"天道酬勤","path":"天道酬勤.mp3","description":{"zh-CN":"天道酬勤"}},{"name":"必可活用于下次","path":"必可活用于下次.mp3","description":{"zh-CN":"必可活用于下次"}},{"name":"rua","path":"rua.mp3","description":{"zh-CN":"rua"}},{"name":"女鬼","path":"女鬼.mp3","description":{"zh-CN":"女鬼"}},{"name":"啊","path":"啊.mp3","description":{"zh-CN":"啊"}},{"name":"mahiru真的是天使","path":"mahiru真的是天使.mp3","description":{"zh-CN":"mahiru真的是天使"}},{"name":"呜呜呜","path":"呜呜呜.mp3","description":{"zh-CN":"呜呜呜"}},{"name":"试麦","path":"试麦.mp3","description":{"zh-CN":"试麦"}},{"name":"嘟嘟嘟","path":"嘟嘟嘟.mp3","description":{"zh-CN":"嘟嘟嘟"}},{"name":"在学了 在学了","path":"在学了 在学了.mp3","description":{"zh-CN":"在学了 在学了"}},{"name":"MHR真绯瑠霸凌我","path":"MHR真绯瑠霸凌我.mp3","description":{"zh-CN":"MHR真绯瑠霸凌我"}},{"name":"un？","path":"un？.mp3","description":{"zh-CN":"un？"}},{"name":"真绯瑠 ver睡醒","path":"真绯瑠 ver.睡醒.mp3","description":{"zh-CN":"真绯瑠 ver睡醒"}},{"name":"好困呐呜嗯","path":"好困呐呜嗯.mp3","description":{"zh-CN":"好困呐呜嗯"}},{"name":"mahiruです","path":"mahiruです.mp3","description":{"zh-CN":"mahiruです"}},{"name":"你要我换你的衣服还要我上你的床","path":"你要我换你的衣服还要我上你的床.mp3","description":{"zh-CN":"你要我换你的衣服还要我上你的床"}},{"name":"没有你的笑怎么睡得着","path":"没有你的笑怎么睡得着.mp3","description":{"zh-CN":"没有你的笑怎么睡得着"}},{"name":"没了我你是不会快乐的","path":"没了我你是不会快乐的.mp3","description":{"zh-CN":"没了我你是不会快乐的"}},{"name":"怪声","path":"怪声.mp3","description":{"zh-CN":"怪声"}},{"name":"一个月30小时每天一小时多健康呢","path":"一个月30小时每天一小时多健康呢.mp3","description":{"zh-CN":"一个月30小时每天一小时多健康呢"}},{"name":"1551","path":"1551.mp3","description":{"zh-CN":"1551"}},{"name":"会加油的","path":"会加油的.mp3","description":{"zh-CN":"会加油的"}},{"name":"在努力了在努力了","path":"在努力了在努力了.mp3","description":{"zh-CN":"在努力了在努力了"}},{"name":"假笑","path":"假笑.mp3","description":{"zh-CN":"假笑"}},{"name":"晦气1","path":"晦气1.mp3","description":{"zh-CN":"晦气1"}},{"name":"晦气2","path":"晦气2.mp3","description":{"zh-CN":"晦气2"}},{"name":"不要","path":"不要.mp3","description":{"zh-CN":"不要"}},{"name":"ya","path":"ya.mp3","description":{"zh-CN":"ya"}},{"name":"mhr是纯0吗我觉得是","path":"mhr是纯0吗我觉得是.mp3","description":{"zh-CN":"mhr是纯0吗我觉得是"}},{"name":"苦笑","path":"苦笑.mp3","description":{"zh-CN":"苦笑"}},{"name":"苦笑2","path":"苦笑2.mp3","description":{"zh-CN":"苦笑2"}},{"name":"太弱智了","path":"太弱智了.mp3","description":{"zh-CN":"太弱智了"}},{"name":"老PUA了","path":"老PUA了.mp3","description":{"zh-CN":"老PUA了"}},{"name":"棒读","path":"棒读.mp3","description":{"zh-CN":"棒读"}},{"name":"棉花糖","path":"棉花糖.mp3","description":{"zh-CN":"棉花糖"}},{"name":"都是营业","path":"都是营业.mp3","description":{"zh-CN":"都是营业"}},{"name":"打嗝","path":"打嗝.mp3","description":{"zh-CN":"打嗝"}}]},{"categoryName":"mimimi","categoryDescription":{"zh-CN":"弥弥弥弥弥弥弥弥弥弥弥弥弥"},"voiceList":[{"name":"弥弥弥弥弥弥弥弥弥弥弥弥弥","path":"弥弥弥弥弥弥弥弥弥弥弥弥弥.mp3","description":{"zh-CN":"弥弥弥弥弥弥弥弥弥弥弥弥弥"}}]}]}')}});
//# sourceMappingURL=app.b363003c.js.map