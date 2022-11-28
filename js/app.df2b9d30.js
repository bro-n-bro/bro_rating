(function(){"use strict";var e={1520:function(e,t,o){var r=o(9242),n=o(3556),a=o(3396),i=o(4870),s=o(2483),c={__name:"App",setup(e){const t=(0,s.yj)(),o=(0,a.Fl)((()=>t.meta.layout||"home-layout"));return(e,t)=>((0,a.wg)(),(0,a.j4)((0,a.LL)((0,i.SU)(o))))}};const l=c;var u=l,d=o(8326);const m=e=>((0,a.dD)("data-v-9b41bd20"),e=e(),(0,a.Cn)(),e),h={class:"absolute"},p=m((()=>(0,a._)("div",{class:"cont row"},[(0,a._)("a",{href:"https://bronbro.io",class:"logo"},[(0,a._)("img",{src:"/logo.svg",alt:""})])],-1))),f=[p];function v(e,t){return(0,a.wg)(),(0,a.iD)("header",h,f)}var _=o(89);const g={},b=(0,_.Z)(g,[["render",v],["__scopeId","data-v-9b41bd20"]]);var w=b,k={__name:"Home",setup(e){return(e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(w),(0,a.Wm)((0,i.SU)(s.MA))],64))}};const y=k;var C=y,O=o(1745),D=o(7139);const E={key:0,class:"notifications"},S={class:"data"},M=(0,a._)("div",{class:"icon"},[(0,a._)("svg",null,[(0,a._)("use",{"xlink:href":"/sprite.svg#ic_notification"})])],-1);var T={__name:"Notifications",setup(e){const t=(0,d.s)();return(e,o)=>(0,i.SU)(t).tooltip.length?((0,a.wg)(),(0,a.iD)("div",E,[(0,a._)("div",S,[M,(0,a._)("div",null,(0,D.zw)((0,i.SU)(t).tooltip),1)])])):(0,a.kq)("",!0)}};const N=T;var U=N;const x=e=>((0,a.dD)("data-v-48ba1454"),e=e(),(0,a.Cn)(),e),z={class:"cont row"},I=x((()=>(0,a._)("a",{href:"https://bronbro.io",class:"logo",target:"_blank",rel:"noopener"},[(0,a._)("img",{src:"/logo.svg",alt:""})],-1)));var j={__name:"Header",setup(e){return(e,t)=>{const o=(0,a.Q2)("animate");return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("div",z,[I,(0,a.wy)((0,a.Wm)(U,{class:"animate fadeInUp"},null,512),[[o]]),(0,a.wy)((0,a.Wm)(O.Z,{class:"animate fadeInRight"},null,512),[[o]])])])}}};const A=(0,_.Z)(j,[["__scopeId","data-v-48ba1454"]]);var L=A;const V={class:"compare_error animate fadeInUp"},B=(0,a._)("svg",null,[(0,a._)("use",{"xlink:href":"/sprite.svg#ic_close"})],-1),F=[B],q=(0,a._)("svg",{class:"icon"},[(0,a._)("use",{"xlink:href":"/sprite.svg#ic_error"})],-1),H={class:"title"},W={class:"desc"};var P={__name:"CompareErrorModal",setup(e){const t=(0,a.f3)("emitter");return(e,o)=>{const n=(0,a.Q2)("animate");return(0,a.wy)(((0,a.wg)(),(0,a.iD)("section",V,[(0,a._)("button",{class:"close_btn",onClick:o[0]||(o[0]=(0,r.iM)((e=>(0,i.SU)(t).emit("closeCompareErrorModal")),["prevent"]))},F),q,(0,a._)("div",null,[(0,a._)("div",H,(0,D.zw)(e.$t("message.compare_error_modal_title")),1),(0,a._)("div",W,(0,D.zw)(e.$t("message.compare_error_modal_desc")),1)])])),[[n]])}}};const R=P;var Z=R,$={__name:"Network",setup(e){const t=(0,d.s)(),o=(0,a.f3)("i18n"),r=(0,a.f3)("emitter");return(0,a.bv)((()=>{t.tooltip=o.global.t("message.notice_default")})),r.on("showCompareErrorModal",(()=>{t.showCompareErrorModal=!0})),r.on("closeCompareErrorModal",(()=>{t.showCompareErrorModal=!1})),r.on("setNotification",(function(e){t.$patch({tooltip:e})})),(e,o)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(L),(0,a.Wm)((0,i.SU)(s.MA)),(0,i.SU)(t).showCompareErrorModal?((0,a.wg)(),(0,a.j4)(Z,{key:0})):(0,a.kq)("",!0)],64))}};const Y=$;var G=Y,Q={__name:"Compare",setup(e){const t=(0,d.s)(),o=(0,a.f3)("i18n");return(0,a.bv)((()=>{t.tooltip=o.global.t("message.notice_default")})),(e,t)=>{const o=(0,a.up)("RouterView");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(L),(0,a.Wm)(o)],64)}}};const J=Q;var K=J;const X=[{path:"/",name:"Home",component:()=>o.e(469).then(o.bind(o,6723)),meta:{layout:C}},{path:"/network",name:"Network",component:()=>o.e(937).then(o.bind(o,9937)),meta:{layout:G}},{path:"/compare",name:"Compare",component:()=>o.e(491).then(o.bind(o,9491)),meta:{layout:K}}],ee=(0,s.p7)({history:(0,s.PO)(),routes:X});ee.beforeEach(((e,t,o)=>{const r=(0,d.s)();e.query.network&&r.currentNetwork!=e.query.network&&(r.currentNetwork=e.query.network),r.compareValidators.length<2&&"Compare"==e.name&&ee.push({name:"Home"}),o()}));var te=ee,oe=o(5658),re={en:{message:{home_title:"Bro rating",home_desc:"Board was created by Bro_n_Bro validator<br> The best support for us - your delegations on Cyber, Osmo, NGM, Juno, Stars, Microtick, Gravity, Omniflix! Follow us on twitter on this and our other tools! 👊",compare_title:"Comparison result",compare_hide_options:"Hide identical options",compare_error_modal_title:"You are able to pin only 5 validators",compare_error_modal_desc:"Amet, luctus cras dolor sed mattis sed faucibus. Elit.",notice_default:"",notice_col_score:"The score of the validator by bro score.",notice_col_power:"The score of validator according by voting power.",notice_col_moniker:"The moniker of the validator.",notice_col_cost:"he cost optimization criteria of the validator. It depends on the validator’s commission ({greed}%) and decreases when the commission increases. It’s equal to zero if the commission of the validator is zero to avoid the advertising effect.",notice_col_decentralization:"This criterion helps decentralize the network. The decentralization level depends on the validator’s voting power rank ({validator_rank}). It logarithmically increases with increasing rank number.",notice_col_confidence:"The confidence of the validator depends on the share of tokens ({ownership}) which validator delegates to itself. It increases from 0 to 20% rapidly and then decreases back to zero, to avoid super-newby validators and CEXes.",notice_col_participation:"This criterion is about the number of votes ({voted}) for the last 5 ended proposals.",notice_col_reliability:"We can define reliability without any precommits calculations. To understand the reliability we can divide staked tokens ({staked}) into delegator shares ({delegator_shares}). The result should be equal to 1 if everything is ok and there is no token loss by slashing. Otherwise, the criterion points decrease with the result decrease.",notice_col_total:"The sum of the criteria points",rating_block_title:"Validators",last_updated:"Last updated",title_col_score:"Bro score",title_col_power:"Voting power",title_col_moniker:"Moniker",title_col_cost:"Cost optimization",title_col_decentralization:"Decentralization",title_col_confidence:"Confidence",title_col_participation:"Participation",title_col_reliability:"Reliability",title_col_total:"Total",filter_title:"Change visibility of columns",search_placeholder:"Validator name",compare_btn:"Compare"}}};const ne=(0,oe.o)({locale:"en",fallbackLocale:"en",messages:re});var ae=ne,ie=o(6038);const se=e=>((0,a.dD)("data-v-9800a948"),e=e(),(0,a.Cn)(),e),ce={class:"loader_wrap"},le=se((()=>(0,a._)("div",{class:"loader"},[(0,a._)("span")],-1))),ue=[le];function de(e,t){return(0,a.wg)(),(0,a.iD)("div",ce,ue)}const me={},he=(0,_.Z)(me,[["render",de],["__scopeId","data-v-9800a948"]]);var pe=he,fe=o(1373);const ve=(0,fe.Z)(),_e=(0,r.ri)(u);_e.use((0,n.WB)()),_e.use(te),_e.use(ae),_e.use(ie.Z),_e.provide("i18n",ae),_e.provide("emitter",ve),_e.config.globalProperties.$filters={toFixed(e,t){return e.toFixed(t)}};const ge={beforeMount:(e,t)=>{e.clickOutsideEvent=o=>{e==o.target||e.contains(o.target)||t.value()},document.addEventListener("click",e.clickOutsideEvent)},unmounted:e=>document.removeEventListener("click",e.clickOutsideEvent)},be={beforeMount:(e,t)=>{function o(e){for(const t of e)t.intersectionRatio>=.2&&t.target.classList.contains("animate")&&t.target.classList.add("animated")}const r=new IntersectionObserver(o,{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]});r.observe(e)}},we={beforeMount:(e,t)=>{function o(e){for(const t of e)t.intersectionRatio>=.2&&!t.target.classList.contains("loaded")&&(t.target.src=t.target.getAttribute("data-src"),t.target.classList.add("loaded"))}const r=new IntersectionObserver(o,{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]});r.observe(e)}};_e.directive("clickOut",ge),_e.directive("animate",be),_e.directive("lazyload",we),_e.component("Loader",pe),_e.mount("#app")},8326:function(e,t,o){o.d(t,{s:function(){return n}});var r=o(3556);const n=(0,r.Q_)("global",{state:()=>({tooltip:"",compareLimit:3,compareValidators:[],compareIdenticalOptions:[],compareMinMaxValue:[],searchValidators:[],currentNetwork:"cosmoshub",showCompareErrorModal:!1,ratingData:{},colors:["#950FFF","#1BC562","#EB5757","#0343E8","#F79400","#DB11D3"],networks:{cosmoshub:{name:"Cosmos Hub",token:"ATOM",alias:"cosmoshub"},bostrom:{name:"Bostrom",token:"BOOT",alias:"bostrom"},stargaze:{name:"Stargaze",token:"STARS",alias:"stargaze"},juno:{name:"Juno",token:"JUNO",alias:"juno"},crescent:{name:"Crescent hub",token:"CRE",alias:"crescent"},gravity:{name:"Gravity bridge",token:"GRAVITION",alias:"gravity"},osmosis:{name:"Osmosis",token:"OSMO",alias:"osmosis"},stride:{name:"Stride",token:"STRD",alias:"stride"}}}),actions:{async getRatingData(){try{await fetch(`https://rpc.bronbro.io/bro_score/?network=${this.currentNetwork}`).then((e=>e.json())).then((e=>this.ratingData=e))}catch(e){console.log(e)}},addToCompare(e){this.ratingData.result.forEach(((t,o)=>{-1!=this.ratingData.result[o].indexOf(e)&&(this.compareValidators.push(this.ratingData.result[o]),this.ratingData.result[o].pinned=!0)}))},removeFromCompare(e){this.compareValidators.forEach(((t,o)=>{-1!=this.compareValidators[o].indexOf(e)&&this.compareValidators.splice(o,1)})),this.ratingData.result.forEach(((t,o)=>{-1!=this.ratingData.result[o].indexOf(e)&&(this.ratingData.result[o].pinned=!1)}))},sortData(e,t){let o=this.ratingData.result.sort(((t,o)=>t[e]>o[e]?1:t[e]<o[e]?-1:0));return"DESC"==t&&o.reverse(),o},setIdenticalOptions(){let e=[];this.compareValidators.forEach(((t,o)=>{t.forEach(((t,r)=>{e[r]==t?o>1?this.compareIdenticalOptions[this.ratingData.schema[r]]&&(this.compareIdenticalOptions[this.ratingData.schema[r]]=!0):this.compareIdenticalOptions[this.ratingData.schema[r]]=!0:this.compareIdenticalOptions[this.ratingData.schema[r]]=!1,e[r]=t}))}))},setMinMaxValue(){let e=[];this.compareValidators.forEach((t=>{t.forEach(((t,o)=>{e[this.ratingData.schema[o]]?e[this.ratingData.schema[o]].push(t):e[this.ratingData.schema[o]]=[t]}))})),setTimeout((()=>{for(let t in e){let o=e[t].indexOf(Math.max.apply(null,e[t])),r=e[t].indexOf(Math.min.apply(null,e[t]));this.compareMinMaxValue[t]={max:e[t].filter((r=>r==e[t][o])).length>1?null:o,min:e[t].filter((o=>o==e[t][r])).length>1?null:r}}}))}}})},1745:function(e,t,o){o.d(t,{Z:function(){return C}});var r=o(3396),n=o(9242),a=o(4870),i=o(7139),s=o(8326);const c={class:"choose_network"},l={class:"logo"},u=["src"],d={class:"name"},m={class:"token"},h=(0,r._)("svg",{class:"arr"},[(0,r._)("use",{"xlink:href":"/sprite.svg#ic_arr_ver"})],-1),p={class:"mini_modal"},f={class:"scroll"},v={class:"logo"},_=["src"],g={class:"name"},b={class:"token"},w=(0,r._)("svg",{class:"icon"},[(0,r._)("use",{"xlink:href":"/sprite.svg#ic_check"})],-1);var k={__name:"ChooseNetwork",setup(e){const t=(0,s.s)();var o=(0,a.iH)(!1);function k(){o.value=!1}return(0,r.m0)((()=>o.value=!1)),(e,s)=>{const y=(0,r.up)("router-link"),C=(0,r.Q2)("click-out");return(0,r.wy)(((0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("button",{class:"btn",onClick:s[0]||(s[0]=(0,n.iM)((e=>(0,a.dq)(o)?o.value=!(0,a.SU)(o):o=!(0,a.SU)(o)),["prevent"]))},[(0,r._)("div",l,[(0,r._)("img",{src:`/${(0,a.SU)(t).networks[(0,a.SU)(t).currentNetwork].alias}_logo.png`,alt:""},null,8,u)]),(0,r._)("div",null,[(0,r._)("div",d,(0,i.zw)((0,a.SU)(t).networks[(0,a.SU)(t).currentNetwork].name),1),(0,r._)("div",m,(0,i.zw)((0,a.SU)(t).networks[(0,a.SU)(t).currentNetwork].token),1)]),h]),(0,r.wy)((0,r._)("div",p,[(0,r._)("div",f,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,a.SU)(t).networks,((e,n)=>((0,r.wg)(),(0,r.iD)("div",{key:n},[(0,r.Wm)(y,{class:(0,i.C_)(["network",{active:(0,a.SU)(t).currentNetwork==e.alias}]),to:{name:"Network",query:{network:e.alias}},onClick:s[1]||(s[1]=e=>(0,a.dq)(o)?o.value=!(0,a.SU)(o):o=!(0,a.SU)(o))},{default:(0,r.w5)((()=>[(0,r._)("div",v,[(0,r._)("img",{src:`/${e.alias}_logo.png`,alt:""},null,8,_)]),(0,r._)("div",null,[(0,r._)("div",g,(0,i.zw)(e.name),1),(0,r._)("div",b,(0,i.zw)(e.token),1)]),w])),_:2},1032,["class","to"])])))),128))])],512),[[n.F8,(0,a.SU)(o)]])])),[[C,k]])}}};const y=k;var C=y}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,a){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],a=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,n,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{469:"ee54b55a",491:"13968e75",937:"ff759afa"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{469:"7bc5660b",491:"0e728959",937:"d2ce15a2"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="bro_rating:";o.l=function(r,n,a,i){if(e[r])e[r].push(n);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[n];var m=function(t,o){s.onerror=s.onload=null,clearTimeout(h);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(o)})),t)return t(o)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e=function(e,t,o,r){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var a=function(a){if(n.onerror=n.onload=null,"load"===a.type)o();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,n.parentNode.removeChild(n),r(c)}};return n.onerror=n.onload=a,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){n=i[r],a=n.getAttribute("data-href");if(a===e||a===t)return n}},r=function(r){return new Promise((function(n,a){var i=o.miniCssF(r),s=o.p+i;if(t(i,s))return n();e(r,s,n,a)}))},n={143:0};o.f.miniCss=function(e,t){var o={469:1,491:1,937:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,r){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise((function(o,r){n=e[t]=[o,r]}));r.push(n[2]=a);var i=o.p+o.u(t),s=new Error,c=function(r){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};o.l(i,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,i=r[0],s=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)var u=c(o)}for(t&&t(r);l<i.length;l++)a=i[l],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},r=self["webpackChunkbro_rating"]=self["webpackChunkbro_rating"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(1520)}));r=o.O(r)})();
//# sourceMappingURL=app.df2b9d30.js.map