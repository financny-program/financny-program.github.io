(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],m=0,v=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&v.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},s=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0e89":function(t,e,n){"use strict";var i=n("2c0d"),a=n.n(i);a.a},"1ae4":function(t,e,n){t.exports=n.p+"img/logo.2af32fa8.svg"},"2c0d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("header",{staticClass:"header"},[i("div",{staticClass:"wrapper"},[t._m(0),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.view,expression:"view === 0"}],staticClass:"main"},[i("div",{staticClass:"main-suptitle"},[i("div",{staticClass:"main-suptitle__inner"},[t._v("Dátum konania udalosti: od "),i("span",[t._v(t._s(t._f("moment")(t.curentdate,"add","-11 days","DD.MM.YYYY")))]),t._v("\n                        do "),i("span",{staticClass:"currentTime"},[t._v(t._s(t._f("moment")(t.curentdate,"DD.MM.YYYY")))])])]),t._m(1),t._m(2),t._m(3),t._m(4),i("div",{staticClass:"button"},[i("button",{staticClass:"button__inner no-img",attrs:{type:"button"},on:{click:t.upView}},[t._v("Zúčastniť sa!")])]),t._m(5)]),i("questionsList",{directives:[{name:"show",rawName:"v-show",value:1===t.view,expression:"view === 1"}],on:{showPhoneForm:t.upView}}),i("div",{directives:[{name:"show",rawName:"v-show",value:2===t.view,expression:"view === 2"}],staticClass:"main"},[t._m(6),t._m(7),t._m(8),i("div",{staticClass:"main-text"},[i("div",{staticClass:"main-text__inner-text"},[i("input",{directives:[{name:"mask",rawName:"v-mask",value:{mask:t.phoneMask,greedy:!1},expression:"{mask: phoneMask, greedy: false }"},{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"phone-input",attrs:{type:"tel",placeholder:"+421-9__-___-___"},domProps:{value:t.phone},on:{input:[function(e){e.target.composing||(t.phone=e.target.value)},t.maskCheck]}})])]),i("div",{staticClass:"button"},[i("img",{staticClass:"icon-call swing",attrs:{src:n("ad78"),alt:""}}),i("button",{staticClass:"button__inner",attrs:{type:"button",disabled:t.buttonNext},on:{click:t.next}},[t._v("Potvrďte účasť\n                    ")])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:3===t.view,expression:"view === 3"}],staticClass:"main"},[t._m(9),t._m(10),i("div",{staticClass:"main-open"},[i("div",{staticClass:"main-open__inner"},[t._v("Nahrávka bude vymazaná za: 00:"+t._s(t.minutes)+":"+t._s(t.seconds))])]),t._m(11),t._m(12),i("div",{staticClass:"button"},[i("img",{staticClass:"icon-call swing",attrs:{src:n("9a54"),alt:""}}),i("a",{staticClass:"button__inner",attrs:{href:"tel:0900705511",onclick:"fbq('track', 'Lead'); return true;"},on:{click:t.sendNumber}},[t._v("Zavolajte a vypočujte"),i("br"),t._v(" si správu!")])])])],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:3===t.view,expression:"view === 3"},{name:"footer",rawName:"v-footer"}],staticClass:"section-copyright",attrs:{id:"summary-footer1"}},[i("p",[t._v("Cena hovoru je 2 EUR/minúta plus poplatky Vášho operátora za prepojenie, hovory sa nahrávajú, iba pre zábavu 18+.")]),i("p",[t._v("Odpovedaním na otázky súhlasíte so zberom údajov.")]),i("p",[t._v("© 2020. ABCMobile OÜ")]),i("p",[t._v("Harju maakond, Tallinn, Peterburi tee 71-318, 11415, Estonia.")]),]),i("loadingComponent",{attrs:{showModal:t.loadingModal},on:{timeOut:t.timeOutStop}})],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper-header"},[i("div",{staticClass:"header-top"},[i("div",{staticClass:"logo"},[i("img",{staticClass:"logo__img",attrs:{src:n("1ae4"),alt:""}})]),i("div",{staticClass:"header-text"},[i("div",{staticClass:"header__text"},[t._v("Revolučný finančný program vyvinutý Medzinárodnou organizáciou biznis -  anjelov a patrónov. Slovensko. "),i("span",[t._v("Slovensko.")]),i("div",{staticClass:"header-icon"},[i("img",{staticClass:"header-icon__img",attrs:{src:n("ec96"),alt:""}})])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-title"},[n("div",{staticClass:"main-title__inner animated infinite pulse"},[t._v("Upozornenie!"),n("br"),t._v("Limitovaná ponuka!")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-text"},[n("div",{staticClass:"main-text__inner"},[t._v("Stali ste sa šťastným účastníkom finančného experimentu:\n                    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-text-subtittle"},[n("div",{staticClass:"main-text-subtitle__inner"},[t._v("“Ako každý týždeň získať 1000 €.“")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-text"},[n("div",{staticClass:"main-text__inner-text"},[t._v("Aby ste získali dôležité informácie, požiadame Vás aby ste odpovedali na 3 jednoduché otázky:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copy"},[n("p",[t._v("© 2020. ABCMobile OÜ")]),n("p",[t._v("Harju maakond, Tallinn, Peterburi tee 71-318, 11415, Estonia.")]),n("p",[t._v("Zákaznícky servis "),n("a",{attrs:{href:"mailto:support@abcmobile.com"}},[t._v("support@abcmobile.com")])]),n("p",[t._v("Pozrite si naše "),n("a",{attrs:{href:"./terms.php"}},[t._v("Obchodné podmienky")]),t._v(" a "),n("a",{attrs:{href:"./privacy.php"}},[t._v("Zásady ochrany osobných údajov")])]),])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-open"},[n("div",{staticClass:"main-open__inner"},[t._v("Ďakujeme za Vaše odpovede!")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-text-subtittle"},[n("div",{staticClass:"main-text-subtitle__inner"},[t._v("Aby ste získali osobné informácie o experimente “Ako každý týždeň získať 1000 €“, vyplňte registráciu zdarma.\n                    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-small"},[n("div",{staticClass:"main-small__inner"},[t._v("Uveďte číslo Vášho mobilného telefónu:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-title"},[n("div",{staticClass:"main-title__inner-text animated infinite pulse"},[t._v("Gratulujeme."),n("br"),t._v("Úspešne ste dokončili registráciu.\n                    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-text"},[n("div",{staticClass:"main-text__inner"},[t._v("Prístup k osobnej audio správe bol vytvorený pre Vaše telefónne číslo.\n                    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-text-subtittle"},[n("div",{staticClass:"main-text-subtitle__inner"},[t._v("“Ako každý týždeň získať 1000 €“")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-small"},[n("div",{staticClass:"main-small__inner"},[t._v("Zavolajte teraz z Vášho mobilného čísla, nepremeškajte Vašu šancu!\n                        Počet účastníkov je limitovaný, takže využite Vašu unikátnu príležitosť hneď teraz.\n                    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Zákaznícky servis "),n("a",{attrs:{href:"mailto:support@abcmobile.com"}},[t._v("support@abcmobile.com")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Pozrite si naše "),n("a",{attrs:{href:"./terms.php"}},[t._v("Obchodné podmienky")]),t._v(" a "),n("a",{attrs:{href:"./privacy.php"}},[t._v("Zásady ochrany osobných údajov")])])}],o=(n("28a5"),n("a481"),n("386d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading",class:{active:t.showModal}},[t._m(0)])}),r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading-container"},[i("div",{staticClass:"loading-content"},[i("img",{attrs:{src:n("887d"),alt:""}})])])}],c={name:"loadingComponent",props:{showModal:Boolean},methods:{loading:function(){var t=this;setTimeout((function(){t.$emit("timeOut",1)}),5e3)}},updated:function(){this.showModal&&this.loading()}},l=c,u=(n("0e89"),n("2877")),m=Object(u["a"])(l,o,r,!1,null,"292cd635",null),v=m.exports,d=n("bc3a"),p=n.n(d),h=location.origin+location.pathname,_={clickID:"modules/getID.php",SHA:"modules/getSHA.php"},f={getID:function(t,e){return p()({method:"POST",url:h+_.clickID,data:[t,e]})},getSHA:function(t,e,n){return p()({method:"POST",url:h+_.SHA,data:{msisdn:t,click_id:e,key:n}})}},b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"questions-list"},[n("div",{staticClass:"questions-list-loader",class:{active:t.showCheck}},[n("svg",{class:{checkmark:t.showCheck},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"}},[n("circle",{staticClass:"checkmark__circle",attrs:{cx:"26",cy:"26",r:"25",fill:"none"}}),n("path",{staticClass:"checkmark__check",attrs:{fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"}})])]),n("div",{staticClass:"questions-list-container"},t._l(t.questions,(function(e,i){return t.qID===i?n("div",{staticClass:"questions-list-item"},[n("div",{staticClass:"list-item-subtitle"},[n("h3",{domProps:{innerHTML:t._s("Otázka č. "+(i+1))}})]),n("div",{staticClass:"list-item-title"},[n("h3",{domProps:{innerHTML:t._s(e.title)}})]),n("div",{staticClass:"list-item-questions"},t._l(e.answers,(function(e){return n("button",{attrs:{type:"button"},domProps:{innerHTML:t._s(e.text)},on:{click:t.nextQuestion}})})),0)]):t._e()})),0)])])},k=[],C=[{title:"Potrebujete peniaze navyše?",answers:[{text:"Áno",active:!1},{text:"Nie",active:!1},{text:"Ťažko povedať",active:!1}]},{title:"Na čo by ste 1000 € týždenne minuli?",answers:[{text:"Pre rodinu",active:!1},{text:"Na obchodné účely",active:!1},{text:"Na charitu",active:!1}]},{title:"Chceli by ste do budúcna dostávať bonusy na Váš mobilný telefón alebo SMS s informáciami o podobných experimentoch?",answers:[{text:"Áno",active:!1},{text:"Nie",active:!1}]}],g={name:"questions-list",data:function(){return{questions:C,qID:0,showCheck:!1}},methods:{nextQuestion:function(){var t=this;this.showCheck=!this.showCheck,setTimeout((function(){t.showCheck=!t.showCheck,t.qID++,t.qID===t.questions.length&&t.$emit("showPhoneForm",1)}),2e3)}}},w=g,y=(n("a830"),Object(u["a"])(w,b,k,!1,null,"8fb0c800",null)),x=y.exports,j={name:"app",data:function(){return{currentTime:null,currentTimestart:null,curentdate:new Date,timer:null,countryCode:"07",phone:"",progress:20,totalTime:180,buttonNext:!0,phoneMask:"+421-\\999-999-999",loadingModal:!1,showLastPage:!1,view:0,key:"",QUERY:this.getQuery(window.location.search),click_id:null}},components:{loadingComponent:v,questionsList:x},methods:{maskCheck:function(t){t.target.inputmask.isComplete()?this.buttonNext=!1:this.buttonNext=!0},startTimer:function(){var t=this;this.timer=setInterval((function(){return t.countdown()}),1e3)},padTime:function(t){return(t<10?"0":"")+t},countdown:function(){this.totalTime>=1?this.totalTime--:this.totalTime=0},next:function(){this.loadingModal=!this.loadingModal},clearNumber:function(t){return t.replace(/\D+/g,"")},timeOutStop:function(t){t&&(this.upView(),this.loadingModal=!1,this.startTimer())},upView:function(){this.view++},keyGenerate:function(t){for(var e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=0;i<t;i++)e+=n.charAt(Math.floor(Math.random()*n.length));return e},getQuery:function(t){return t.slice(1).split("&").map((function(t){var e=t.split("=");return{key:e[0],value:e[1]}})).reduce((function(t,e){return t[e.key]=e.value,t}),{})},sendNumber:function(){var t=this.clearNumber(this.phone);f.getSHA(t,this.click_id,this.key).then((function(t){return t})).catch((function(t){return console.log(t)}))}},computed:{minutes:function(){var t=Math.floor(this.totalTime/60);return this.padTime(t)},seconds:function(){var t=this.totalTime-60*this.minutes;return this.padTime(t)}},created:function(){if(this.QUERY.click_id)this.click_id=this.QUERY.click_id;else{this.key=this.keyGenerate(12);var t=JSON.stringify(this.QUERY),e=this;f.getID(t,this.key).then((function(t){return e.click_id=t.data})).catch((function(t){return console.log(t)}))}}},M=j,z=(n("5c0b"),Object(u["a"])(M,a,s,!1,null,null,null)),E=z.exports,T=n("7699").default;i["a"].use(T);var O=n("2ead");i["a"].use(O),i["a"].directive("footer",(function(t,e,n){function i(){var t=40,e=550,i=window.innerHeight;i>e?(n.elm.style.top=i-t+"px",n.elm.style.marginTop=0,n.elm.style.position="absolute"):(t=0,n.elm.style.top="auto",n.elm.style.marginTop="15px",n.elm.style.position="relative")}n&&(i(),window.onresize=function(){i()})})),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(E)},mounted:function(){return document.dispatchEvent(new Event("x-app-rendered"))}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("e332"),a=n.n(i);a.a},"734f":function(t,e,n){},"887d":function(t,e,n){t.exports=n.p+"img/1.9ccf7b3b.gif"},"9a54":function(t,e,n){t.exports=n.p+"img/icon-call.865a8001.svg"},a830:function(t,e,n){"use strict";var i=n("734f"),a=n.n(i);a.a},ad78:function(t,e,n){t.exports=n.p+"img/lock.c7088286.svg"},e332:function(t,e,n){},ec96:function(t,e,n){t.exports=n.p+"img/flag.b0fbf30f.svg"}});
//# sourceMappingURL=app.9fca9702.js.map