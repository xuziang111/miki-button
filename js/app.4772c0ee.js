(function(t){function e(e){for(var n,r,o=e[0],c=e[1],h=e[2],s=0,d=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return p.push.apply(p,h||[]),a()}function a(){for(var t,e=0;e<p.length;e++){for(var a=p[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(p.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},p=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var h=0;h<o.length;h++)e(o[h]);var m=c;p.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09aa":function(t,e,a){},"1c1d":function(t,e,a){},"2f6e":function(t,e,a){"use strict";var n={info:{title:"弥按钮",info:"信息",null:"空",audioStaff:"音频来源魔球群、弥群和B站投稿",toGithub:"请在Github参与翻译、增补音频或提出建议",notOfficial:"本站为爱好者作品，和VirtuaReal官方没有关联",overlapTips:"重叠播放无法暂停，而且会创建大量线程，玩够了最好刷新一下"},action:{toggleNavbar:"切换导航栏",close:"关闭",copy:"复制",control:"操作控制",stopvoice:"停止",randomplay:"帮我选一个",overlap:"允许声音重叠",autoplay:"播放不要停下来",playing:"正在播放：",noplay:"暂无播放"},lang:{"zh-CN":"简体中文"}};e["a"]=n},"3dfd":function(t,e,a){"use strict";var n,i,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Modal"),a("nav",{staticClass:"navbar navbar-default navbar-fixed-top"},[a("div",{staticClass:"container-fluid",attrs:{id:"top-header"}},[a("div",{staticClass:"navbar-header"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[a("div",[t._v(t._s(t.$t("info.title")))])])]),t._m(0),a("div",{staticClass:"brand1"},[t._v(" 请注意音量大小 ")]),t._m(1),a("div",{staticClass:"brand1"})])]),a("div",{staticClass:"container-fluid main-content"},[a("HomePage"),t._m(2)],1),a("footer",{staticClass:"footer"},[a("div",[a("div",[t._v(t._s(t.$t("info.audioStaff")))]),t._m(3),a("div",[t._v("音频投稿:touhou@lolimy.cn github 或者弥四/魔球群丢群文件 只有时间点也行")])]),a("div",[t._m(4),a("div",{staticClass:"text-right"},[t._v("本项目"),a("a",{attrs:{href:"https://github.com/xuziang111/miki-button-src",target:"_blank"}},[t._v(t._s(t.$t("info.toGithub")))])]),a("div",{staticClass:"text-right"},[t._v(t._s(t.$t("info.notOfficial")))])])])],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"brand1"},[a("a",{attrs:{href:"https://space.bilibili.com/477317922/",target:"_blank"}},[a("img",{attrs:{src:"resources/bilibili.svg",title:"B站链接",alt:"B站链接",height:"18"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"brand1"},[a("a",{attrs:{href:"https://www.bilibili.com/video/BV11D4y1d7wm/",target:"_blank"}},[t._v("点我听歌")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fixed-left"},[a("img",{attrs:{src:"resources/mi.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("友情链接:"),a("a",{attrs:{href:"https://www.mihiru.com",target:"_blank"}},[t._v("mihiru.com")]),t._v(" "),a("a",{attrs:{href:"https://mahiru-vr.github.io/",target:"_blank"}},[t._v("孟按钮")]),t._v(" "),a("a",{attrs:{href:"https://bbs.nga.cn/read.php?tid=23498962",target:"_blank"}},[t._v("NGA弥楼")]),t._v(" "),a("a",{attrs:{href:"https://bbs.nga.cn/read.php?tid=23130748",target:"_blank"}},[t._v("告一段落的病栋")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-right"},[a("a",{attrs:{href:"https://github.com/zyzsdy/aqua-button",target:"_blank"}},[t._v("原项目")])])}],o=(a("2b45"),a("fc58"),a("1462")),c=a("a340"),h=a("bb06"),m=a("3114"),s=a("198d"),d=a("a593"),u=a("60ae"),l=a.n(u),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"myModal",tabindex:"-1",role:"dialog","aria-labelledby":"myModalLabel"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[t._m(0),a("h4",{staticClass:"modal-title",attrs:{id:"myModalLabel"}},[t._v(t._s(t.$t(t.title)))])]),a("div",{staticClass:"modal-body"},[t._v(" "+t._s(t.$t(t.msg))+" ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v(t._s(t.$t("action.close")))])])])])])},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],z=a("b9d0"),f=a("ce3c"),v=a("a336"),$=a.n(v);function b(t){var e=y();return function(){var a,n=Object(s["a"])(t);if(e){var i=Object(s["a"])(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(m["a"])(this,a)}}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var k,g,_=l()((i=function(t){Object(h["a"])(a,t);var e=b(a);function a(){var t;Object(o["a"])(this,a);for(var n=arguments.length,i=new Array(n),p=0;p<n;p++)i[p]=arguments[p];return t=e.call.apply(e,[this].concat(i)),Object(f["a"])(Object(z["a"])(t),"title","info.info"),Object(f["a"])(Object(z["a"])(t),"msg","info.null"),t}return Object(c["a"])(a,[{key:"created",value:function(){var t=this;this.$gConst.globalbus.$on("send-info",(function(e){t.msg=e,t.showModal()}))}},{key:"showModal",value:function(){$()("#myModal").modal()}}]),a}(d["default"]),n=i))||n,j=_,O=j,x=(a("b338"),a("9ca4")),w=Object(x["a"])(O,C,N,!1,null,null,null),P=w.exports,M=a("c3b0");function S(t){var e=A();return function(){var a,n=Object(s["a"])(t);if(e){var i=Object(s["a"])(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(m["a"])(this,a)}}function A(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var D=(k=l()({components:{Modal:P,HomePage:M["a"]}}),k(g=function(t){Object(h["a"])(a,t);var e=S(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return Object(c["a"])(a,[{key:"data",value:function(){return{xxx:"container-fluid img-left"}}},{key:"created",value:function(){console.log("                             ;&@@@@@@|`\n                           !&&&&&&&&&&&%'\n                         `|$$%$%%%$$$$$$$:\n                         !$$$$$%%$$$$&&&&%`\n                        '%$$$%%$$$;;%$$$&$'\n                        :$$$!`'|$!` .!%$&$'\n                        ;&$%!%%!!'.:|||$$%'\n                        ;&$%'        .!$&|.\n                        `|$&%'      .!&&$;\n                         `!&&&$;. .;$&&$!\n                          .:|&$|:'';$@@$'\n                          .!&@|'````!@&&|`\n                       ;&$$$&$:`|&!.;&@@&$&|.\n                      ;&$%$&$$!'!|':%&&&&$&&|`\n                     !&$$$&$$%!!$$!;|$&&&&&$&!.  \n                    !&$%&@&$&%!!!!;!%&&&&@@&$&|`  \n                 `|$$%&@@&&&%!!!!!!%&&@@&&&&&&%`  \n                '%$$%$|:%@&&$|!||!!%&&%%|`;&&&&&:    \n               ;&&$%%' `%&@@$||!|!!$@&&@|. '$@&&&!    \n              !&&$$!   `%&@&%||||!!$@&&&|.   !@@&&%` \n              ;$$$&@|. '$&&&$%$$%%%$@&&&&: :$&&&&&!   \n               `%&$$$&&&&&&$|!!||||$&&&@&$&$$$&&!   \n           .. :!..!$&||@&&&$%%%|%%$$&&&@%|&&$$!   \n       .`     :|'   '|&&$$&%|%|!|%%$&&&&&!!$:   \n     .`       '%$&&;`|&$$&$|!||!|||%$$&&@|.`'   \n    ``        '||%|;|&&$$&%|||!!!||%&&&&&$:.;|'   \n   ``         ;||%$&&&$$$$%!|!!!!||%&&&$&&@@@&%:``..  \n   `.        '|%%%$&&&$$&$|!|!!!|||%$&&&&&&%%%||;:!'`.  \n  .'...   . '!%%%:!&$$$&&$|!||!!||||$&&&&&&&$$%%!:||;'  \n  `'``.....'|$$%;'|$%||||!!!||!!|||||||%%%$$$%%%%|%$%'  \n  .'``````;$&&$$$$&%%|!||!!!|!!!||||||||%%$$&$%%$%:  \n   .::';|$&@@@@&&&$|||!||!!||!!!!|||||||%%%$$&$%|!`  \n       ;$&@@@@@@&$|||!!!!!!||!!!!|||||||%%%%$$$&$||;.  \n          .!%%|!|||||!!!!!!||!!!!||||||||%%%%$$%%%;  \n                :|||!!!!!!!||!!!!||!|||||%%%%%!`    \n                :|||!!|!!!!|!!!!!||!|||||%%|%%!.  \n               '|||!!||!!!!|!!!!!||!!|||||%|%%%:    \n              .;|||!!||!!!!!!!!!!||!!|||||%%|%%|'  \n              '|%||!|||!!!!|!!!!!||!!|||||%%|%%$!. \n             .!%%||||%|!!!||!!!!!||!|||||||%|%%$$:  \n             `|%%||||%|||||||||||||||||%|||%%%%$!. \n                :|||%%|||||%|||||%%|||||%||%%;`    \n                     ';!!!!|%|!!;;||!!!;;:'`     \n                    .'''':'           `::'''.    \n                    `:''''`           .:''''`    \n                    .`''''`           .'''`..    \n                    .    .             .     .  \n                    .    .             .     .  \n                    .    .             .     .    \n                    .    .             .     .  \n                     .   .              .    .     \n                    :'  .'.             ::  .;'  \n                    ;$$$&%`             :$$$&%'  \n                    :$$$&|.             '$&&&%`  \n                     !&&&;               ;&&&!   \n                     :$&&;               :$&&;   \n                     .|&&;               '$&&:   \n                     .|@@|.              '$@@;   \n                     '$@@@;              !@@@|.  \n                     `|&&&;             '%&&&%`  \n                     :$$$$%'           :$$$$&!   \n                     :;.  ``          .`  `|$'   \n                      .....            `...`.    \n 10/12饿啊 结果miki真的就从头到尾没变过 920后也没变过 真的是太扭曲了 唯一变化可能就是愿意和观众说一些事情了吧"),this.$i18n.locale=localStorage.getItem("lang")||this.$i18n.locale}},{key:"mounted",value:function(){document.body.clientWidth<768&&(this.xxx="container-fluid img-center2")}},{key:"chlang",value:function(t){this.$i18n.locale=t,localStorage.setItem("lang",t)}},{key:"currentLang",get:function(){return this.$i18n.locale}}]),a}(d["default"]))||g),R=D,E=R,L=(a("5c0b"),Object(x["a"])(E,p,r,!1,null,null,null));e["a"]=L.exports},"40f5":function(t,e,a){},"41cb":function(t,e,a){"use strict";var n=a("a593"),i=a("3211"),p=a("c3b0");n["default"].use(i["a"]),e["a"]=new i["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:p["a"]}]})},"56d7":function(t,e,a){"use strict";a.r(e),function(t){a("6d57"),a("309f"),a("0b53"),a("06a2"),a("ec25"),a("cc57"),a("2b45"),a("e44b"),a("6648"),a("5f54"),a("f0e6");var e=a("a593"),n=a("3ddb"),i=a("41cb"),p=a("3dfd"),r=a("2f6e"),o=a("a336"),c=a.n(o),h=(a("cace"),a("898e")),m=a("da57");function s(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=d(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var p,r=!0,o=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return r=t.done,t},e:function(t){o=!0,p=t},f:function(){try{r||null==a.return||a.return()}finally{if(o)throw p}}}}function d(t,e){if(t){if("string"===typeof t)return u(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}t.jQuery=t.$=c.a;var l,C={voice:{},voicecategory:{}},N=s(m.voices);try{for(N.s();!(l=N.n()).done;){var z=l.value;void 0!==z.categoryDescription&&void 0!==z.categoryDescription["zh-CN"]&&(C.voicecategory[z.categoryName]=z.categoryDescription["zh-CN"]);var f,v=s(z.voiceList);try{for(v.s();!(f=v.n()).done;){var $=f.value;void 0!==$.description&&void 0!==$.description["zh-CN"]&&(C.voice[$.name]=$.description["zh-CN"])}}catch(_){v.e(_)}finally{v.f()}}}catch(_){N.e(_)}finally{N.f()}var b=Object.assign(r["a"],C);e["default"].config.productionTip=!1,e["default"].use(n["a"]),e["default"].use(h["a"]);var y={"zh-CN":b},k="zh-CN",g=new n["a"]({locale:k,messages:y});new e["default"]({router:i["a"],i18n:g,render:function(t){return t(p["a"])}}).$mount("#app")}.call(this,a("532c"))},"5c0b":function(t,e,a){"use strict";var n=a("09aa"),i=a.n(n);i.a},"76f2":function(t,e,a){"use strict";var n=a("40f5"),i=a.n(n);i.a},"898e":function(t,e,a){"use strict";var n=a("1462"),i=a("a340"),p=a("a593"),r=function(){function t(){Object(n["a"])(this,t)}return Object(i["a"])(t,[{key:"install",value:function(t){t.prototype.$gConst={globalbus:new p["default"]}}}]),t}();e["a"]=new r},b338:function(t,e,a){"use strict";var n=a("1c1d"),i=a.n(n);i.a},c3b0:function(t,e,a){"use strict";var n,i,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",[a("div",{staticClass:"cate-header"},[t._v(t._s(t.$t("action.control")))]),a("div",{staticClass:"cate-body"},[a("button",{staticClass:"btn btn-info",on:{click:t.random}},[t._v(t._s(t.$t("action.randomplay")))]),a("button",{staticClass:"btn btn-info",on:{click:t.stopPlay}},[t._v(t._s(t.$t("action.stopvoice")))]),a("button",{staticClass:"btn btn-info",class:{disabled:t.autoCheck},attrs:{title:t.$t("info.overlapTips")},on:{click:t.overlap}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.overlapCheck,expression:"overlapCheck"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.overlapCheck)?t._i(t.overlapCheck,null)>-1:t.overlapCheck},on:{change:function(e){var a=t.overlapCheck,n=e.target,i=!!n.checked;if(Array.isArray(a)){var p=null,r=t._i(a,p);n.checked?r<0&&(t.overlapCheck=a.concat([p])):r>-1&&(t.overlapCheck=a.slice(0,r).concat(a.slice(r+1)))}else t.overlapCheck=i}}}),a("span",[t._v(t._s(t.$t("action.overlap")))])]),a("button",{staticClass:"btn btn-info",class:{disabled:t.overlapCheck},on:{click:t.autoPlay}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.autoCheck,expression:"autoCheck"}],staticClass:"checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.autoCheck)?t._i(t.autoCheck,null)>-1:t.autoCheck},on:{change:function(e){var a=t.autoCheck,n=e.target,i=!!n.checked;if(Array.isArray(a)){var p=null,r=t._i(a,p);n.checked?r<0&&(t.autoCheck=a.concat([p])):r>-1&&(t.autoCheck=a.slice(0,r).concat(a.slice(r+1)))}else t.autoCheck=i}}}),a("span",[t._v(t._s(t.$t("action.autoplay")))])])]),a("div",{staticClass:"cate-body"},[a("span",[t._v(t._s(t.voice.name?t.$t("action.playing")+t.$t("voice."+t.voice.name):t.$t("action.noplay")))])]),a("audio",{attrs:{id:"player"},on:{ended:function(e){return t.voiceEnd(!1)}}})]),t._l(t.voices,(function(e){return a("div",{key:e.categoryName},[a("div",{staticClass:"cate-header"},[t._v(t._s(t.$t("voicecategory."+e.categoryName)))]),a("div",{staticClass:"cate-body"},t._l(e.voiceList,(function(e){return a("button",{key:e.name,staticClass:"btn btn-new",on:{click:function(a){return t.play(e)}}},[t._v(" "+t._s(t.$t("voice."+e.name))+" ")])})),0)])}))],2)},r=[],o=(a("2b45"),a("fc58"),a("1462")),c=a("a340"),h=a("b9d0"),m=a("bb06"),s=a("3114"),d=a("198d"),u=a("ce3c"),l=a("a593"),C=a("60ae"),N=a.n(C),z=a("da57");function f(t){var e=v();return function(){var a,n=Object(d["a"])(t);if(e){var i=Object(d["a"])(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(s["a"])(this,a)}}function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var $=N()((i=function(t){Object(m["a"])(a,t);var e=f(a);function a(){var t;Object(o["a"])(this,a);for(var n=arguments.length,i=new Array(n),p=0;p<n;p++)i[p]=arguments[p];return t=e.call.apply(e,[this].concat(i)),Object(u["a"])(Object(h["a"])(t),"voices",z.voices),Object(u["a"])(Object(h["a"])(t),"autoCheck",!1),Object(u["a"])(Object(h["a"])(t),"overlapCheck",!1),Object(u["a"])(Object(h["a"])(t),"voice",{}),t}return Object(c["a"])(a,[{key:"play",value:function(t){if(this.overlapCheck){var e=new Audio("voices/"+t.path);this.voice=t,e.play()}else{this.stopPlay();var a=document.getElementById("player");a.src="voices/"+t.path,this.voice=t,a.play()}}},{key:"stopPlay",value:function(){var t=document.getElementById("player");t.pause(),this.voiceEnd(!0)}},{key:"voiceEnd",value:function(t){!0!==t&&this.autoCheck?this.random():this.voice={}}},{key:"random",value:function(){var t=this.voices[this._randomNum(0,this.voices.length-1)];this.play(t.voiceList[this._randomNum(0,t.voiceList.length-1)])}},{key:"autoPlay",value:function(){this.overlapCheck||(this.autoCheck=!this.autoCheck)}},{key:"overlap",value:function(){this.autoCheck||(this.overlapCheck=!this.overlapCheck)}},{key:"_randomNum",value:function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}}}]),a}(l["default"]),n=i))||n,b=$,y=b,k=(a("76f2"),a("9ca4")),g=Object(k["a"])(y,p,r,!1,null,"f1b69aa2",null);e["a"]=g.exports},da57:function(t){t.exports=JSON.parse('{"voices":[{"categoryName":"voice","categoryDescription":{"zh-CN":"嘎吱语音"},"voiceList":[{"name":"mahiru主人","path":"mahiru主人.mp3","description":{"zh-CN":"mahiru主人"}},{"name":"咽口水","path":"咽口水.mp3","description":{"zh-CN":"咽口水"}},{"name":"弥宝吐舌","path":"弥宝吐舌.mp3","description":{"zh-CN":"弥宝吐舌"}},{"name":"弥宝苦笑","path":"弥宝苦笑.mp3","description":{"zh-CN":"弥宝苦笑"}},{"name":"弥宝飞扑","path":"弥宝飞扑.mp3","description":{"zh-CN":"弥宝飞扑"}},{"name":"宝 你好聪明 妈妈好欣慰","path":"宝 你好聪明 妈妈好欣慰.mp3","description":{"zh-CN":"宝 你好聪明 妈妈好欣慰"}},{"name":"啊哈_","path":"啊哈_.mp3","description":{"zh-CN":"啊哈_"}},{"name":"啊~","path":"啊~.mp3","description":{"zh-CN":"啊~"}},{"name":"啊哈哈哈哈哈哈","path":"啊哈哈哈哈哈哈.mp3","description":{"zh-CN":"啊哈哈哈哈哈哈"}},{"name":"mua","path":"mua.mp3","description":{"zh-CN":"mua"}},{"name":"呜呜","path":"呜呜.mp3","description":{"zh-CN":"呜呜"}},{"name":"笑","path":"笑.mp3","description":{"zh-CN":"笑"}},{"name":"呜","path":"呜.mp3","description":{"zh-CN":"呜"}},{"name":"哎","path":"哎.mp3","description":{"zh-CN":"哎"}},{"name":"en","path":"en.mp3","description":{"zh-CN":"en"}},{"name":"en2","path":"en2.mp3","description":{"zh-CN":"en2"}},{"name":"en3","path":"en3.mp3","description":{"zh-CN":"en3"}},{"name":"？？？","path":"？？？.mp3","description":{"zh-CN":"？？？"}},{"name":"我也喜欢你啊","path":"我也喜欢你啊.mp3","description":{"zh-CN":"我也喜欢你啊"}},{"name":"不够精神重来","path":"不够精神重来.mp3","description":{"zh-CN":"不够精神重来"}},{"name":"dadadajujuju","path":"dadadajujuju.mp3","description":{"zh-CN":"dadadajujuju"}}]},{"categoryName":"actmoe","categoryDescription":{"zh-CN":"对线语音"},"voiceList":[{"name":"嗯？你说啥","path":"嗯？你说啥.mp3","description":{"zh-CN":"嗯？你说啥"}},{"name":"甜甜甜你妈","path":"甜甜甜你妈.mp3","description":{"zh-CN":"甜甜甜你妈"}},{"name":"滚吧 莫挨老子","path":"滚吧 莫挨老子.mp3","description":{"zh-CN":"滚吧 莫挨老子"}},{"name":"miki怒了miki录了录了","path":"miki怒了miki录了录了.mp3","description":{"zh-CN":"miki怒了miki录了录了"}},{"name":"miki是真的没有脑袋不正常这样的问题","path":"miki是真的没有脑袋不正常这样的问题.mp3","description":{"zh-CN":"miki是真的没有脑袋不正常这样的问题"}},{"name":"miki什么时候怕过你后辈了","path":"miki什么时候怕过你后辈了.mp3","description":{"zh-CN":"miki什么时候怕过你后辈了"}},{"name":"你也太二次元了吧","path":"你也太二次元了吧.mp3","description":{"zh-CN":"你也太二次元了吧"}},{"name":"那你性癖很怪哦","path":"那你性癖很怪哦.mp3","description":{"zh-CN":"那你性癖很怪哦"}},{"name":"略傻逼略","path":"略傻逼略.mp3","description":{"zh-CN":"略傻逼略"}},{"name":"vtuber舔狗快点笑他","path":"vtuber舔狗快点笑他.mp3","description":{"zh-CN":"vtuber舔狗快点笑他"}},{"name":"草","path":"草.mp3","description":{"zh-CN":"草"}},{"name":"肾虚怎么了肾虚怎么了肾虚怎么了","path":"肾虚怎么了肾虚怎么了肾虚怎么了.mp3","description":{"zh-CN":"肾虚怎么了肾虚怎么了肾虚怎么了"}},{"name":"大家脑子是真的有问题吧天那","path":"大家脑子是真的有问题吧天那.mp3","description":{"zh-CN":"大家脑子是真的有问题吧天那"}},{"name":"对不起对不起对不起","path":"对不起对不起对不起.mp3","description":{"zh-CN":"对不起对不起对不起"}},{"name":"反对青鸟的都拖出去杀了","path":"反对青鸟的都拖出去杀了.mp3","description":{"zh-CN":"反对青鸟的都拖出去杀了"}},{"name":"副会长的嘴从来没有动过怎么开飘啊","path":"副会长的嘴从来没有动过怎么开飘啊.mp3","description":{"zh-CN":"副会长的嘴从来没有动过怎么开飘啊"}},{"name":"按照脸来说我还是非常可爱的","path":"按照脸来说我还是非常可爱的.mp3","description":{"zh-CN":"按照脸来说我还是非常可爱的"}},{"name":"miki什么时候失言过","path":"miki什么时候失言过.mp3","description":{"zh-CN":"miki什么时候失言过"}},{"name":"cxly","path":"cxly.mp3","description":{"zh-CN":"cxly"}},{"name":"先提高你的裤腰带吧","path":"先提高你的裤腰带吧.mp3","description":{"zh-CN":"先提高你的裤腰带吧"}},{"name":"哭了吗好哭的好赏好活","path":"哭了吗好哭的好赏好活.mp3","description":{"zh-CN":"哭了吗好哭的好赏好活"}},{"name":"你滚你滚你滚你滚","path":"你滚你滚你滚你滚.mp3","description":{"zh-CN":"你滚你滚你滚你滚"}},{"name":"看什么管人都是管人害了你","path":"看什么管人都是管人害了你.mp3","description":{"zh-CN":"看什么管人都是管人害了你"}},{"name":"又是光一的gaychi","path":"又是光一的gaychi.mp3","description":{"zh-CN":"又是光一的gaychi"}},{"name":"滚滚滚滚滚","path":"滚滚滚滚滚.mp3","description":{"zh-CN":"滚滚滚滚滚"}},{"name":"实属拉胯","path":"实属拉胯.mp3","description":{"zh-CN":"实属拉胯"}},{"name":"我道歉了你们还想怎么样","path":"我道歉了你们还想怎么样.mp3","description":{"zh-CN":"我道歉了你们还想怎么样"}},{"name":"你好衰阿","path":"你好衰阿.mp3","description":{"zh-CN":"你好衰阿"}},{"name":"你们怎么这么懂","path":"你们怎么这么懂.mp3","description":{"zh-CN":"你们怎么这么懂"}},{"name":"我们是最潮最in的二次元耶","path":"我们是最潮最in的二次元耶.mp3","description":{"zh-CN":"我们是最潮最in的二次元耶"}},{"name":"你就是网上说的二次元对不对","path":"你就是网上说的二次元对不对.mp3","description":{"zh-CN":"你就是网上说的二次元对不对"}},{"name":"我像是会做这种龌龊之事的人吗","path":"我像是会做这种龌龊之事的人吗.mp3","description":{"zh-CN":"我像是会做这种龌龊之事的人吗"}},{"name":"这河里吗","path":"这河里吗.mp3","description":{"zh-CN":"这河里吗"}},{"name":"河豚费拉不堪","path":"河豚费拉不堪.mp3","description":{"zh-CN":"河豚费拉不堪"}},{"name":"你们连我的弱智人设也要抢吗","path":"你们连我的弱智人设也要抢吗.mp3","description":{"zh-CN":"你们连我的弱智人设也要抢吗"}},{"name":"别骂了别骂了别骂了","path":"别骂了别骂了别骂了.mp3","description":{"zh-CN":"别骂了别骂了别骂了"}},{"name":"你好强哦你好厉害","path":"你好强哦你好厉害.mp3","description":{"zh-CN":"你好强哦你好厉害"}},{"name":"因为很伤心不要再说了","path":"因为很伤心不要再说了.mp3","description":{"zh-CN":"因为很伤心不要再说了"}},{"name":"没有感情哪来乐子","path":"没有感情哪来乐子.mp3","description":{"zh-CN":"没有感情哪来乐子"}},{"name":"嗨下-","path":"嗨下-.mp3","description":{"zh-CN":"嗨下-"}},{"name":"看那个人是河豚","path":"看那个人是河豚.mp3","description":{"zh-CN":"看那个人是河豚"}},{"name":"钓鱼高级点兄弟们","path":"钓鱼高级点兄弟们.mp3","description":{"zh-CN":"钓鱼高级点兄弟们"}},{"name":"嘴硬","path":"嘴硬.mp3","description":{"zh-CN":"嘴硬"}},{"name":"键盘敲得响","path":"键盘敲得响.mp3","description":{"zh-CN":"键盘敲得响"}},{"name":"希望大家今晚睡不着","path":"希望大家今晚睡不着.mp3","description":{"zh-CN":"希望大家今晚睡不着"}},{"name":"先爱自己 再爱别人 特别是管人","path":"先爱自己 再爱别人 特别是管人.mp3","description":{"zh-CN":"先爱自己 再爱别人 特别是管人"}}]},{"categoryName":"xinjiang","categoryDescription":{"zh-CN":"新疆男友"},"voiceList":[{"name":"新疆男友 不用害怕，我会保护Miki","path":"新疆男友 不用害怕，我会保护Miki.mp3","description":{"zh-CN":"新疆男友 不用害怕，我会保护Miki"}},{"name":"新疆男友 大家晚上好 弥希miki的男朋友是我","path":"新疆男友 大家晚上好 弥希miki的男朋友是我.mp3","description":{"zh-CN":"新疆男友 大家晚上好 弥希miki的男朋友是我"}},{"name":"里昂 里昂","path":"里昂 里昂.mp3","description":{"zh-CN":"里昂 里昂"}}]},{"categoryName":"other","categoryDescription":{"zh-CN":"杂项语音"},"voiceList":[{"name":"嗯嗯嗯","path":"嗯嗯嗯.mp3","description":{"zh-CN":"嗯嗯嗯"}},{"name":"嘿咻","path":"嘿咻.mp3","description":{"zh-CN":"嘿咻"}},{"name":"嘿咻2","path":"嘿咻2.mp3","description":{"zh-CN":"嘿咻2"}},{"name":"嘿咻3","path":"嘿咻3.mp3","description":{"zh-CN":"嘿咻3"}},{"name":"小天才","path":"小天才.mp3","description":{"zh-CN":"小天才"}},{"name":"扭曲","path":"扭曲.mp3","description":{"zh-CN":"扭曲"}},{"name":"拜拜，晚安","path":"拜拜，晚安.mp3","description":{"zh-CN":"拜拜，晚安"}},{"name":"擦盘子","path":"擦盘子.mp3","description":{"zh-CN":"擦盘子"}},{"name":"擦盘子2","path":"擦盘子2.mp3","description":{"zh-CN":"擦盘子2"}},{"name":"擦盘子3","path":"擦盘子3.mp3","description":{"zh-CN":"擦盘子3"}},{"name":"擦盘子4","path":"擦盘子4.mp3","description":{"zh-CN":"擦盘子4"}},{"name":"擦盘子5","path":"擦盘子5.mp3","description":{"zh-CN":"擦盘子5"}},{"name":"54321","path":"54321.mp3","description":{"zh-CN":"54321"}},{"name":"bilibili干杯","path":"bilibili干杯.mp3","description":{"zh-CN":"bilibili干杯"}},{"name":"hum1","path":"hum1.mp3","description":{"zh-CN":"hum1"}},{"name":"hum2","path":"hum2.mp3","description":{"zh-CN":"hum2"}},{"name":"hum3","path":"hum3.mp3","description":{"zh-CN":"hum3"}},{"name":"hum4","path":"hum4.mp3","description":{"zh-CN":"hum4"}},{"name":"接下来miki最期待的事情大概就是哪一天v圈爆炸","path":"接下来miki最期待的事情大概就是哪一天v圈爆炸.mp3","description":{"zh-CN":"接下来miki最期待的事情大概就是哪一天v圈爆炸"}},{"name":"挺好的爽了","path":"挺好的爽了.mp3","description":{"zh-CN":"挺好的爽了"}},{"name":"人活着真难","path":"人活着真难.mp3","description":{"zh-CN":"人活着真难"}},{"name":"我真的要死了","path":"我真的要死了.mp3","description":{"zh-CN":"我真的要死了"}},{"name":"太弥惑了","path":"太弥惑了.mp3","description":{"zh-CN":"太弥惑了"}},{"name":"这是雪空","path":"这是雪空.mp3","description":{"zh-CN":"这是雪空"}},{"name":"做人真难","path":"做人真难.mp3","description":{"zh-CN":"做人真难"}},{"name":"我的好日子来了","path":"我的好日子来了.mp3","description":{"zh-CN":"我的好日子来了"}},{"name":"光一哥哥","path":"光一哥哥.mp3","description":{"zh-CN":"光一哥哥"}},{"name":"大家是想看miki败犬吗","path":"大家是想看miki败犬吗.mp3","description":{"zh-CN":"大家是想看miki败犬吗"}},{"name":"百合豚搞快点","path":"百合豚搞快点.mp3","description":{"zh-CN":"百合豚搞快点"}},{"name":"金吉拉金","path":"金吉拉金.mp3","description":{"zh-CN":"金吉拉金"}},{"name":"网络害人","path":"网络害人.mp3","description":{"zh-CN":"网络害人"}},{"name":"mhr真绯瑠你好狠毒","path":"mhr真绯瑠你好狠毒.mp3","description":{"zh-CN":"mhr真绯瑠你好狠毒"}},{"name":"啊这","path":"啊这.mp3","description":{"zh-CN":"啊这"}},{"name":"啊这2","path":"啊这2.mp3","description":{"zh-CN":"啊这2"}},{"name":"才过了几天就已经不认得我这个主人了","path":"才过了几天就已经不认得我这个主人了.mp3","description":{"zh-CN":"才过了几天就已经不认得我这个主人了"}},{"name":"以后就是我的形状了","path":"以后就是我的形状了.mp3","description":{"zh-CN":"以后就是我的形状了"}},{"name":"你好温柔","path":"你好温柔.mp3","description":{"zh-CN":"你好温柔"}},{"name":"un1","path":"un1.mp3","description":{"zh-CN":"un1"}},{"name":"un2","path":"un2.mp3","description":{"zh-CN":"un2"}},{"name":"un3","path":"un3.mp3","description":{"zh-CN":"un3"}},{"name":"un4","path":"un4.mp3","description":{"zh-CN":"un4"}},{"name":"un5","path":"un5.mp3","description":{"zh-CN":"un5"}},{"name":"un6","path":"un6.mp3","description":{"zh-CN":"un6"}},{"name":"un7","path":"un7.mp3","description":{"zh-CN":"un7"}},{"name":"un8","path":"un8.mp3","description":{"zh-CN":"un8"}},{"name":"こんるる","path":"こんるる.mp3","description":{"zh-CN":"こんるる"}},{"name":"miki有事","path":"miki有事.mp3","description":{"zh-CN":"miki有事"}},{"name":"对不起","path":"对不起.mp3","description":{"zh-CN":"对不起"}},{"name":"弥希miki很便宜的","path":"弥希miki很便宜的.mp3","description":{"zh-CN":"弥希miki很便宜的"}},{"name":"水友们，这合理吗","path":"水友们，这合理吗.mp3","description":{"zh-CN":"水友们，这合理吗"}},{"name":"天道酬勤","path":"天道酬勤.mp3","description":{"zh-CN":"天道酬勤"}},{"name":"必可活用于下次","path":"必可活用于下次.mp3","description":{"zh-CN":"必可活用于下次"}},{"name":"rua","path":"rua.mp3","description":{"zh-CN":"rua"}},{"name":"女鬼","path":"女鬼.mp3","description":{"zh-CN":"女鬼"}},{"name":"啊","path":"啊.mp3","description":{"zh-CN":"啊"}},{"name":"mahiru真的是天使","path":"mahiru真的是天使.mp3","description":{"zh-CN":"mahiru真的是天使"}},{"name":"呜呜呜","path":"呜呜呜.mp3","description":{"zh-CN":"呜呜呜"}},{"name":"试麦","path":"试麦.mp3","description":{"zh-CN":"试麦"}},{"name":"嘟嘟嘟","path":"嘟嘟嘟.mp3","description":{"zh-CN":"嘟嘟嘟"}},{"name":"在学了 在学了","path":"在学了 在学了.mp3","description":{"zh-CN":"在学了 在学了"}},{"name":"MHR真绯瑠霸凌我","path":"MHR真绯瑠霸凌我.mp3","description":{"zh-CN":"MHR真绯瑠霸凌我"}},{"name":"un？","path":"un？.mp3","description":{"zh-CN":"un？"}},{"name":"真绯瑠 ver睡醒","path":"真绯瑠 ver.睡醒.mp3","description":{"zh-CN":"真绯瑠 ver睡醒"}},{"name":"好困呐呜嗯","path":"好困呐呜嗯.mp3","description":{"zh-CN":"好困呐呜嗯"}},{"name":"mahiruです","path":"mahiruです.mp3","description":{"zh-CN":"mahiruです"}},{"name":"你要我换你的衣服还要我上你的床","path":"你要我换你的衣服还要我上你的床.mp3","description":{"zh-CN":"你要我换你的衣服还要我上你的床"}},{"name":"没有你的笑怎么睡得着","path":"没有你的笑怎么睡得着.mp3","description":{"zh-CN":"没有你的笑怎么睡得着"}},{"name":"没了我你是不会快乐的","path":"没了我你是不会快乐的.mp3","description":{"zh-CN":"没了我你是不会快乐的"}},{"name":"怪声","path":"怪声.mp3","description":{"zh-CN":"怪声"}},{"name":"怪声2","path":"怪声2.mp3","description":{"zh-CN":"怪声2"}},{"name":"怪声3","path":"怪声3.mp3","description":{"zh-CN":"怪声3"}},{"name":"怪声4","path":"怪声4.mp3","description":{"zh-CN":"怪声4"}},{"name":"假哭","path":"假哭.mp3","description":{"zh-CN":"假哭"}},{"name":"假哭2","path":"假哭2.mp3","description":{"zh-CN":"假哭2"}},{"name":"一个月30小时每天一小时多健康呢","path":"一个月30小时每天一小时多健康呢.mp3","description":{"zh-CN":"一个月30小时每天一小时多健康呢"}},{"name":"好男孩子都是会打枪的","path":"好男孩子都是会打枪的.mp3","description":{"zh-CN":"好男孩子都是会打枪的"}},{"name":"1551","path":"1551.mp3","description":{"zh-CN":"1551"}},{"name":"会加油的","path":"会加油的.mp3","description":{"zh-CN":"会加油的"}},{"name":"在努力了在努力了","path":"在努力了在努力了.mp3","description":{"zh-CN":"在努力了在努力了"}},{"name":"假笑","path":"假笑.mp3","description":{"zh-CN":"假笑"}},{"name":"晦气1","path":"晦气1.mp3","description":{"zh-CN":"晦气1"}},{"name":"晦气2","path":"晦气2.mp3","description":{"zh-CN":"晦气2"}},{"name":"不要","path":"不要.mp3","description":{"zh-CN":"不要"}},{"name":"ya","path":"ya.mp3","description":{"zh-CN":"ya"}},{"name":"ya2","path":"ya2.mp3","description":{"zh-CN":"ya2"}},{"name":"ya3","path":"ya3.mp3","description":{"zh-CN":"ya3"}},{"name":"mhr是纯0吗我觉得是","path":"mhr是纯0吗我觉得是.mp3","description":{"zh-CN":"mhr是纯0吗我觉得是"}},{"name":"苦笑","path":"苦笑.mp3","description":{"zh-CN":"苦笑"}},{"name":"苦笑2","path":"苦笑2.mp3","description":{"zh-CN":"苦笑2"}},{"name":"太弱智了","path":"太弱智了.mp3","description":{"zh-CN":"太弱智了"}},{"name":"老PUA了","path":"老PUA了.mp3","description":{"zh-CN":"老PUA了"}},{"name":"棒读","path":"棒读.mp3","description":{"zh-CN":"棒读"}},{"name":"棉花糖","path":"棉花糖.mp3","description":{"zh-CN":"棉花糖"}},{"name":"都是营业","path":"都是营业.mp3","description":{"zh-CN":"都是营业"}},{"name":"打嗝","path":"打嗝.mp3","description":{"zh-CN":"打嗝"}},{"name":"打嗝2","path":"打嗝2.mp3","description":{"zh-CN":"打嗝2"}},{"name":"弥希miki是给大家带来笑容的主播","path":"弥希miki是给大家带来笑容的主播.mp3","description":{"zh-CN":"弥希miki是给大家带来笑容的主播"}},{"name":"太真实了","path":"太真实了.mp3","description":{"zh-CN":"太真实了"}},{"name":"问题不大","path":"问题不大.mp3","description":{"zh-CN":"问题不大"}},{"name":"今天是mhr的最后一天","path":"今天是mhr的最后一天.mp3","description":{"zh-CN":"今天是mhr的最后一天"}},{"name":"听不到","path":"听不到.mp3","description":{"zh-CN":"听 不 到"}},{"name":"我瞎了","path":"我瞎了.mp3","description":{"zh-CN":"我 瞎 了"}},{"name":"摇篮曲","path":"摇篮曲.mp3","description":{"zh-CN":"摇 篮 曲"}},{"name":"可爱","path":"可爱.mp3","description":{"zh-CN":"可爱"}},{"name":"确实","path":"确实.mp3","description":{"zh-CN":"确实"}},{"name":"懂我","path":"懂我.mp3","description":{"zh-CN":"懂我"}},{"name":"精彩","path":"精彩.mp3","description":{"zh-CN":"精彩"}},{"name":"魔球冲呀","path":"魔球冲呀.mp3","description":{"zh-CN":"魔球冲呀"}},{"name":"包包叫","path":"包包叫.mp3","description":{"zh-CN":"包包叫"}},{"name":"你怎么能把快乐建立在别人痛苦之上","path":"你怎么能把快乐建立在别人痛苦之上.mp3","description":{"zh-CN":"你怎么能把快乐建立在别人痛苦之上"}},{"name":"总要带点绿生活才能过得去","path":"总要带点绿生活才能过得去.mp3","description":{"zh-CN":"总要带点绿生活才能过得去"}},{"name":"jujujuju","path":"jujujuju.mp3","description":{"zh-CN":"jujujuju"}},{"name":"这合理吗","path":"这合理吗.mp3","description":{"zh-CN":"这合理吗"}},{"name":"miki觉得mahiru","path":"miki觉得mahiru.mp3","description":{"zh-CN":"miki觉得mahiru"}},{"name":"生日快乐","path":"生日快乐.mp3","description":{"zh-CN":"生日快乐"}},{"name":"心想事成","path":"心想事成.mp3","description":{"zh-CN":"心想事成"}},{"name":"平平淡淡才是真","path":"平平淡淡才是真.mp3","description":{"zh-CN":"平平淡淡才是真"}},{"name":"弥希miki有百合营业PTSD","path":"弥希miki有百合营业PTSD.mp3","description":{"zh-CN":"弥希miki有百合营业PTSD"}},{"name":"pekopeko","path":"pekopeko.mp3","description":{"zh-CN":"pekopeko"}},{"name":"嗨呀","path":"嗨呀.mp3","description":{"zh-CN":"嗨呀"}},{"name":"嗨呀2","path":"嗨呀2.mp3","description":{"zh-CN":"嗨呀2"}},{"name":"嗨呀3","path":"嗨呀3.mp3","description":{"zh-CN":"嗨呀3"}},{"name":"嗨呀4","path":"嗨呀4.mp3","description":{"zh-CN":"嗨呀4"}},{"name":"睡一觉起来总会有什么好事","path":"睡一觉起来总会有什么好事.mp3","description":{"zh-CN":"睡一觉起来总会有什么好事"}},{"name":"弥希miki太地雷了一点 吸引到了比较地雷的人","path":"弥希miki太地雷了一点 吸引到了比较地雷的人.mp3","description":{"zh-CN":"弥希miki太地雷了一点 吸引到了比较地雷的人"}},{"name":"硬混","path":"硬混.mp3","description":{"zh-CN":"硬混"}},{"name":"zaima","path":"zaima.mp3","description":{"zh-CN":"zaima"}},{"name":"你不要过来啊","path":"你不要过来啊.mp3","description":{"zh-CN":"你不要过来啊"}},{"name":"我快乐因为我是弥希miki","path":"我快乐因为我是弥希miki.mp3","description":{"zh-CN":"我快乐因为我是弥希miki"}},{"name":"祝你幸福","path":"祝你幸福.mp3","description":{"zh-CN":"祝你幸福"}},{"name":"I‘m fine","path":"I‘m fine.mp3","description":{"zh-CN":"I‘m fine"}},{"name":"哎呀","path":"哎呀.mp3","description":{"zh-CN":"哎呀"}},{"name":"不够大森没有金森","path":"不够大森没有金森.mp3","description":{"zh-CN":"不够大森没有金森"}},{"name":"出来","path":"出来.mp3","description":{"zh-CN":"出来"}},{"name":"都可以","path":"都可以.mp3","description":{"zh-CN":"都可以"}},{"name":"拉跨了","path":"拉跨了.mp3","description":{"zh-CN":"拉跨了"}},{"name":"溜了","path":"溜了.mp3","description":{"zh-CN":"溜了"}},{"name":"哇噢","path":"哇噢.mp3","description":{"zh-CN":"哇噢"}},{"name":"在吗","path":"在吗.mp3","description":{"zh-CN":"在吗"}},{"name":"拜拜","path":"拜拜.mp3","description":{"zh-CN":"拜拜"}},{"name":"我怕了","path":"我怕了.mp3","description":{"zh-CN":"我怕了"}},{"name":"你们自己魔怔去吧我去当萌萌人了","path":"你们自己魔怔去吧我去当萌萌人了.mp3","description":{"zh-CN":"你们自己魔怔去吧我去当萌萌人了"}}]},{"categoryName":"zhangyu","categoryDescription":{"zh-CN":"丈 育"},"voiceList":[{"name":"美轮美奂","path":"美轮美奂.mp3","description":{"zh-CN":"美轮美奂(huàn) 用来形容房屋"}},{"name":"执拗","path":"执拗.mp3","description":{"zh-CN":"执拗(niù)"}},{"name":"执拗2","path":"执拗2.mp3","description":{"zh-CN":"总觉得有些执拗(niù) 2"}},{"name":"忌讳","path":"忌讳.mp3","description":{"zh-CN":"忌讳(huì)"}},{"name":"传送锚点","path":"传送锚点.mp3","description":{"zh-CN":"传送锚(máo)点"}},{"name":"我怯怯的后退","path":"我怯怯的后退.mp3","description":{"zh-CN":"我怯怯(qièqiè)的后退"}},{"name":"巴蜀九浊之地","path":"巴蜀九浊之地.mp3","description":{"zh-CN":"巴蜀(shǔ)九浊之地"}},{"name":"道观","path":"道观.mp3","description":{"zh-CN":"道观(guàn)"}},{"name":"笃定","path":"笃定.mp3","description":{"zh-CN":"你会对自己看到的东西如此笃(dǔ)定"}},{"name":"堆砌","path":"堆砌.mp3","description":{"zh-CN":"已经堆砌(qì)成了"}},{"name":"繁文缛节","path":"繁文缛节.mp3","description":{"zh-CN":"将他看成繁文缛(rù)节"}},{"name":"混沌","path":"混沌.mp3","description":{"zh-CN":"自己都说出混(hùn)沌了"}},{"name":"蛆虫","path":"蛆虫.mp3","description":{"zh-CN":"蛆(qū)虫"}},{"name":"献牲","path":"献牲.mp3","description":{"zh-CN":"献牲（shēng）的古旧传统"}},{"name":"噎戛然无声","path":"噎戛然无声.mp3","description":{"zh-CN":"来访的客人就像狠狠的被噎(yē)到似的戛(jiá)然无声"}},{"name":"阿芙罗狄忒祈求","path":"阿芙罗狄忒祈求.mp3","description":{"zh-CN":"向阿芙罗狄忒(tè)祈(qí)求"}},{"name":"人对蘑菇最多不过随便一脚把它碾碎","path":"人对蘑菇最多不过随便一脚把它碾碎.mp3","description":{"zh-CN":"人对蘑菇最多不过随便一脚把它碾(niǎn)碎"}},{"name":"期冀","path":"期冀.mp3","description":{"zh-CN":"对这个世界抱有期冀(jì)和所求的人"}},{"name":"一摞","path":"一摞.mp3","description":{"zh-CN":"十几本书推挤成一摞(luò)"}},{"name":"蹩脚","path":"蹩脚.mp3","description":{"zh-CN":"夹杂着大量蹩(bié)脚的洋泾浜(yáng jīng bāng)英语"}},{"name":"暹罗","path":"暹罗.mp3","description":{"zh-CN":"游士携之，流传暹(xiān)罗，支叶尚存"}},{"name":"骨髓 一瞥","path":"骨髓 一瞥.mp3","description":{"zh-CN":"执念早已深埋在骨髓(suǐ)里面 最后一瞥(piē)夺取了她身上几乎所有的温度"}},{"name":"泥泞","path":"泥泞.mp3","description":{"zh-CN":"如今她终于在泥泞(nìng)里等到了真正的救赎"}},{"name":"偃旗息鼓","path":"偃旗息鼓.mp3","description":{"zh-CN":"一个多月前偃(yǎn)旗息鼓"}},{"name":"戏谑","path":"戏谑.mp3","description":{"zh-CN":"戏谑(xuè)"}},{"name":"悼念","path":"悼念.mp3","description":{"zh-CN":"这个BGM就是在悼(dào)念各位乐子人 悼(dào)念你们曾经是萌萌人的时光"}},{"name":"反省","path":"反省.mp3","description":{"zh-CN":"反省(xǐng)"}},{"name":"恪守","path":"恪守.mp3","description":{"zh-CN":"一定会恪(kè)守这条信条"}}]},{"categoryName":"duanzhangquyi","categoryDescription":{"zh-CN":"断 章 取 义"},"voiceList":[{"name":"我观察mhr已久","path":"我观察mhr已久.mp3","description":{"zh-CN":"我观察mhr已久"}},{"name":"我，只会喜欢上女孩子","path":"我，只会喜欢上女孩子.mp3","description":{"zh-CN":"我，只会喜欢上女孩子"}},{"name":"那我最会","path":"那我最会.mp3","description":{"zh-CN":"那我最会打？？"}}]},{"categoryName":"mimimi","categoryDescription":{"zh-CN":"弥弥弥弥弥弥弥弥弥弥弥弥弥"},"voiceList":[{"name":"弥弥弥弥弥弥弥弥弥弥弥弥弥","path":"弥弥弥弥弥弥弥弥弥弥弥弥弥.mp3","description":{"zh-CN":"弥弥弥弥弥弥弥弥弥弥弥弥弥"}},{"name":"在你耳边略略略","path":"在你耳边略略略.mp3","description":{"zh-CN":"在你耳边略略略"}},{"name":"虚拟广东稻田里背着吉他的野生企鹅的声音","path":"虚拟广东稻田里背着吉他的野生企鹅的声音.mp3","description":{"zh-CN":"虚拟广东稻田里背着吉他的野生企鹅的声音"}},{"name":"记得主播16岁","path":"记得主播16岁.mp3","description":{"zh-CN":"记得主播16岁"}},{"name":"星降る","path":"星降る.mp3","description":{"zh-CN":"ED 星降る"}}]}]}')}});
//# sourceMappingURL=app.4772c0ee.js.map