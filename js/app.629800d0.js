(function(){"use strict";var e={6162:function(e,t,o){var n=o(9242),r=o(3556),a=o(3396),i=o(4870),s=o(2483),l={__name:"App",setup(e){const t=(0,s.yj)(),o=(0,a.Fl)((()=>t.meta.layout||"home-layout"));return(e,t)=>((0,a.wg)(),(0,a.j4)((0,a.LL)((0,i.SU)(o))))}};const c=l;var u=c,d=o(8326);const m=e=>((0,a.dD)("data-v-9b41bd20"),e=e(),(0,a.Cn)(),e),p={class:"absolute"},h=m((()=>(0,a._)("div",{class:"cont row"},[(0,a._)("a",{href:"https://bronbro.io",class:"logo"},[(0,a._)("img",{src:"/logo.svg",alt:""})])],-1))),f=[h];function _(e,t){return(0,a.wg)(),(0,a.iD)("header",p,f)}var v=o(89);const g={},b=(0,v.Z)(g,[["render",_],["__scopeId","data-v-9b41bd20"]]);var k=b,w={__name:"Home",setup(e){return(e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(k),(0,a.Wm)((0,i.SU)(s.MA))],64))}};const y=w;var O=y,C=o(1745),D=o(7139);const S={key:0,class:"notifications"},E={class:"data"},M=(0,a._)("div",{class:"icon"},[(0,a._)("svg",null,[(0,a._)("use",{"xlink:href":"/sprite.svg#ic_notification"})])],-1);var T={__name:"Notifications",setup(e){const t=(0,d.s)();return(e,o)=>(0,i.SU)(t).tooltip.length?((0,a.wg)(),(0,a.iD)("div",S,[(0,a._)("div",E,[M,(0,a._)("div",null,(0,D.zw)((0,i.SU)(t).tooltip),1)])])):(0,a.kq)("",!0)}};const x=T;var A=x;const U=e=>((0,a.dD)("data-v-48ba1454"),e=e(),(0,a.Cn)(),e),N={class:"cont row"},z=U((()=>(0,a._)("a",{href:"https://bronbro.io",class:"logo",target:"_blank",rel:"noopener"},[(0,a._)("img",{src:"/logo.svg",alt:""})],-1)));var I={__name:"Header",setup(e){return(e,t)=>{const o=(0,a.Q2)("animate");return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("div",N,[z,(0,a.wy)((0,a.Wm)(A,{class:"animate fadeInUp"},null,512),[[o]]),(0,a.wy)((0,a.Wm)(C.Z,{class:"animate fadeInRight"},null,512),[[o]])])])}}};const j=(0,v.Z)(I,[["__scopeId","data-v-48ba1454"]]);var V=j;const L={class:"compare_error animate fadeInUp"},B=(0,a._)("svg",null,[(0,a._)("use",{"xlink:href":"/sprite.svg#ic_close"})],-1),R=[B],F=(0,a._)("svg",{class:"icon"},[(0,a._)("use",{"xlink:href":"/sprite.svg#ic_error"})],-1),q={class:"title"};var H={__name:"CompareErrorModal",setup(e){const t=(0,a.f3)("emitter"),o=(0,d.s)();return(e,r)=>{const s=(0,a.Q2)("animate");return(0,a.wy)(((0,a.wg)(),(0,a.iD)("section",L,[(0,a._)("button",{class:"close_btn",onClick:r[0]||(r[0]=(0,n.iM)((e=>(0,i.SU)(t).emit("closeCompareErrorModal")),["prevent"]))},R),F,(0,a._)("div",null,[(0,a._)("div",q,(0,D.zw)(e.$t("message.compare_error_modal_title",{limit:(0,i.SU)(o).compareLimit})),1)])])),[[s]])}}};const P=H;var W=P,Z={__name:"Network",setup(e){const t=(0,d.s)(),o=(0,a.f3)("i18n"),n=(0,a.f3)("emitter");return(0,a.bv)((()=>{t.tooltip=o.global.t("message.notice_default")})),n.on("showCompareErrorModal",(()=>{t.showCompareErrorModal=!0})),n.on("closeCompareErrorModal",(()=>{t.showCompareErrorModal=!1})),n.on("setNotification",(function(e){t.$patch({tooltip:e})})),(e,o)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(V),(0,a.Wm)((0,i.SU)(s.MA)),(0,i.SU)(t).showCompareErrorModal?((0,a.wg)(),(0,a.j4)(W,{key:0})):(0,a.kq)("",!0)],64))}};const G=Z;var $=G,Y={__name:"Compare",setup(e){const t=(0,d.s)(),o=(0,a.f3)("i18n");return(0,a.bv)((()=>{t.tooltip=o.global.t("message.notice_default")})),(e,t)=>{const o=(0,a.up)("RouterView");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(V),(0,a.Wm)(o)],64)}}};const J=Y;var Q=J;const K=[{path:"/",name:"Home",component:()=>o.e(469).then(o.bind(o,6723)),meta:{layout:O}},{path:"/network",name:"Network",component:()=>o.e(905).then(o.bind(o,7905)),meta:{layout:$}},{path:"/compare",name:"Compare",component:()=>o.e(692).then(o.bind(o,692)),meta:{layout:Q}}],X=(0,s.p7)({history:(0,s.PO)(),routes:K});X.beforeEach(((e,t,o)=>{const n=(0,d.s)();e.query.network&&n.currentNetwork!=e.query.network&&(n.currentNetwork=e.query.network),n.compareValidators.length<2&&"Compare"==e.name&&X.push({name:"Home"}),o()}));var ee=X,te=o(5658),oe={en:{message:{home_title:"Bro rating",home_desc:"Board was created by Bro_n_Bro validator<br> The best support for us - your delegations on Cyber, Osmo, NGM, Juno, Stars, Microtick, Gravity, Omniflix! Follow us on twitter on this and our other tools! 👊",compare_title:"Comparison result",compare_hide_options:"Hide identical options",compare_error_modal_title:"You are able to pin only {limit} validators",notice_default:"",notice_col_score:"The score of the validator by bro score.",notice_col_power:"The score of validator according by voting power.",notice_col_moniker:"The moniker of the validator.",notice_col_cost:"The cost optimization criteria of the validator. It depends on the validator’s commission ({greed}%) and decreases when the commission increases. It’s equal to zero if the commission of the validator is zero to avoid the advertising effect.",notice_col_decentralization:"This criterion helps decentralize the network. The decentralization level depends on the validator’s voting power rank ({validator_rank}). It logarithmically increases with increasing rank number.",notice_col_confidence:"The confidence of the validator depends on the share of tokens ({ownership}) which validator delegates to itself. It increases from 0 to 20% rapidly and then decreases back to zero, to avoid super-newby validators and CEXes.",notice_col_participation:"This criterion is about the number of votes ({voted}) for the last 5 ended proposals.",notice_col_reliability:"We can define reliability without any precommits calculations. To understand the reliability we can divide staked tokens ({staked} {token}) into delegator shares ({delegator_shares} {token}). The result should be equal to 1 if everything is ok and there is no token loss by slashing. Otherwise, the criterion points decrease with the result decrease.",notice_col_total:"The sum of the criteria points",rating_block_title:"Validators",last_updated:"Last updated",title_col_score:"Bro score",title_col_power:"Voting power",title_col_moniker:"Moniker",title_col_cost:"Cost optimization",title_col_cost2:"Cost endorsement",title_col_decentralization:"Decentralization",title_col_decentralization2:"Decentralization endorsement",title_col_confidence:"Confidence",title_col_confidence2:"Confidence endorsement",title_col_participation:"Participation",title_col_participation2:"Participation endorsement",title_col_reliability:"Reliability",title_col_reliability2:"Reliability endorsement",title_col_total:"Total",title_col_staked:"Staked",title_col_delegator_shares:"Delegator shares",title_col_greed:"Greed",title_col_ownership:"Ownership",title_col_voted:"Voted",title_col_isjailed:"Isjailed",title_col_total:"Total",filter_title:"Change visibility of columns",search_placeholder:"Validator name",compare_btn:"Compare"}}};const ne=(0,te.o)({locale:"en",fallbackLocale:"en",messages:oe});var re=ne,ae=o(6038);const ie=e=>((0,a.dD)("data-v-9800a948"),e=e(),(0,a.Cn)(),e),se={class:"loader_wrap"},le=ie((()=>(0,a._)("div",{class:"loader"},[(0,a._)("span")],-1))),ce=[le];function ue(e,t){return(0,a.wg)(),(0,a.iD)("div",se,ce)}const de={},me=(0,v.Z)(de,[["render",ue],["__scopeId","data-v-9800a948"]]);var pe=me,he=o(1373);const fe=(0,he.Z)(),_e=(0,n.ri)(u);_e.use((0,r.WB)()),_e.use(ee),_e.use(re),_e.use(ae.Z),_e.provide("i18n",re),_e.provide("emitter",fe),_e.config.globalProperties.$filters={toFixed(e,t){return e.toFixed(t)}};const ve={beforeMount:(e,t)=>{e.clickOutsideEvent=o=>{e==o.target||e.contains(o.target)||t.value()},document.addEventListener("click",e.clickOutsideEvent)},unmounted:e=>document.removeEventListener("click",e.clickOutsideEvent)},ge={beforeMount:(e,t)=>{function o(e){for(const t of e)t.intersectionRatio>=.2&&t.target.classList.contains("animate")&&t.target.classList.add("animated")}const n=new IntersectionObserver(o,{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]});n.observe(e)}},be={beforeMount:(e,t)=>{function o(e){for(const t of e)t.intersectionRatio>=.2&&!t.target.classList.contains("loaded")&&(t.target.src=t.target.getAttribute("data-src"),t.target.classList.add("loaded"))}const n=new IntersectionObserver(o,{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]});n.observe(e)}};_e.directive("clickOut",ve),_e.directive("animate",ge),_e.directive("lazyload",be),_e.component("Loader",pe),_e.mount("#app")},8326:function(e,t,o){o.d(t,{s:function(){return r}});var n=o(3556);const r=(0,n.Q_)("global",{state:()=>({tooltip:"",compareLimit:3,compareValidators:[],compareIdenticalOptions:[],compareMinMaxValue:[],searchValidators:[],currentNetwork:"cosmoshub",showCompareErrorModal:!1,ratingData:{},colors:["#950FFF","#1BC562","#EB5757","#0343E8","#F79400","#DB11D3"],networks:{cosmoshub:{name:"Cosmos Hub",token:"ATOM",alias:"cosmoshub",mintscanAlias:"cosmos",exponent:1e6,token_name:"ATOM"},bostrom:{name:"Bostrom",token:"BOOT",alias:"bostrom",exponent:1e6,token_name:"MBOOT"},stargaze:{name:"Stargaze",token:"STARS",alias:"stargaze",mintscanAlias:"stargaze",exponent:1e6,token_name:"STARS"},juno:{name:"Juno",token:"JUNO",alias:"juno",mintscanAlias:"juno",exponent:1e6,token_name:"JUNO"},crescent:{name:"Crescent hub",token:"CRE",alias:"crescent",mintscanAlias:"crescent",exponent:1e6,token_name:"CRE"},gravity:{name:"Gravity bridge",token:"GRAVITION",alias:"gravity",mintscanAlias:"gravity-bridge",exponent:1e6,token_name:"GRAV"},osmosis:{name:"Osmosis",token:"OSMO",alias:"osmosis",mintscanAlias:"osmosis",exponent:1e6,token_name:"OSMO"},stride:{name:"Stride",token:"STRD",alias:"stride",mintscanAlias:"stride",exponent:1e6,token_name:"STRD"}}}),actions:{async getRatingData(){try{await fetch(`https://rpc.bronbro.io/bro_score/?network=${this.currentNetwork}`).then((e=>e.json())).then((e=>this.ratingData=e))}catch(e){console.log(e)}},addToCompare(e){this.ratingData.result.forEach(((t,o)=>{-1!=this.ratingData.result[o].indexOf(e)&&(this.compareValidators.push(this.ratingData.result[o]),this.ratingData.result[o].pinned=!0)}))},removeFromCompare(e){this.compareValidators.forEach(((t,o)=>{-1!=this.compareValidators[o].indexOf(e)&&this.compareValidators.splice(o,1)})),this.ratingData.result.forEach(((t,o)=>{-1!=this.ratingData.result[o].indexOf(e)&&(this.ratingData.result[o].pinned=!1)}))},sortData(e,t){let o=this.ratingData.result.sort(((t,o)=>t[e]>o[e]?1:t[e]<o[e]?-1:0));return"DESC"==t&&o.reverse(),o},setIdenticalOptions(){let e=[];this.compareValidators.forEach(((t,o)=>{t.forEach(((t,n)=>{e[n]==t?o>1?this.compareIdenticalOptions[this.ratingData.schema[n]]&&(this.compareIdenticalOptions[this.ratingData.schema[n]]=!0):this.compareIdenticalOptions[this.ratingData.schema[n]]=!0:this.compareIdenticalOptions[this.ratingData.schema[n]]=!1,e[n]=t}))}))},setMinMaxValue(){let e=[];this.compareValidators.forEach((t=>{t.forEach(((t,o)=>{e[this.ratingData.schema[o]]?e[this.ratingData.schema[o]].push(t):e[this.ratingData.schema[o]]=[t]}))})),setTimeout((()=>{for(let t in e){let o=e[t].indexOf(Math.max.apply(null,e[t])),n=e[t].indexOf(Math.min.apply(null,e[t]));this.compareMinMaxValue[t]={max:e[t].filter((n=>n==e[t][o])).length>1?null:o,min:e[t].filter((o=>o==e[t][n])).length>1?null:n}}}))}}})},1745:function(e,t,o){o.d(t,{Z:function(){return O}});var n=o(3396),r=o(9242),a=o(4870),i=o(7139),s=o(8326);const l={class:"choose_network"},c={class:"logo"},u=["src"],d={class:"name"},m={class:"token"},p=(0,n._)("svg",{class:"arr"},[(0,n._)("use",{"xlink:href":"/sprite.svg#ic_arr_ver"})],-1),h={class:"mini_modal"},f={class:"scroll"},_={class:"logo"},v=["src"],g={class:"name"},b={class:"token"},k=(0,n._)("svg",{class:"icon"},[(0,n._)("use",{"xlink:href":"/sprite.svg#ic_check"})],-1);var w={__name:"ChooseNetwork",setup(e){const t=(0,s.s)();var o=(0,a.iH)(!1);function w(){o.value=!1}return(0,n.m0)((()=>o.value=!1)),(e,s)=>{const y=(0,n.up)("router-link"),O=(0,n.Q2)("click-out");return(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("button",{class:"btn",onClick:s[0]||(s[0]=(0,r.iM)((e=>(0,a.dq)(o)?o.value=!(0,a.SU)(o):o=!(0,a.SU)(o)),["prevent"]))},[(0,n._)("div",c,[(0,n._)("img",{src:`/${(0,a.SU)(t).networks[(0,a.SU)(t).currentNetwork].alias}_logo.png`,alt:""},null,8,u)]),(0,n._)("div",null,[(0,n._)("div",d,(0,i.zw)((0,a.SU)(t).networks[(0,a.SU)(t).currentNetwork].name),1),(0,n._)("div",m,(0,i.zw)((0,a.SU)(t).networks[(0,a.SU)(t).currentNetwork].token),1)]),p]),(0,n.wy)((0,n._)("div",h,[(0,n._)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,a.SU)(t).networks,((e,r)=>((0,n.wg)(),(0,n.iD)("div",{key:r},[(0,n.Wm)(y,{class:(0,i.C_)(["network",{active:(0,a.SU)(t).currentNetwork==e.alias}]),to:{name:"Network",query:{network:e.alias}},onClick:s[1]||(s[1]=e=>(0,a.dq)(o)?o.value=!(0,a.SU)(o):o=!(0,a.SU)(o))},{default:(0,n.w5)((()=>[(0,n._)("div",_,[(0,n._)("img",{src:`/${e.alias}_logo.png`,alt:""},null,8,v)]),(0,n._)("div",null,[(0,n._)("div",g,(0,i.zw)(e.name),1),(0,n._)("div",b,(0,i.zw)(e.token),1)]),k])),_:2},1032,["class","to"])])))),128))])],512),[[r.F8,(0,a.SU)(o)]])])),[[O,w]])}}};const y=w;var O=y}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],a=e[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{469:"ee54b55a",692:"4c932fa1",905:"00027a90"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{469:"7bc5660b",692:"122cebe2",905:"9d92d184"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="bro_rating:";o.l=function(n,r,a,i){if(e[n])e[n].push(r);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[r];var m=function(t,o){s.onerror=s.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e=function(e,t,o,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)o();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,r.parentNode.removeChild(r),n(l)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],a=r.getAttribute("data-href");if(a===e||a===t)return r}},n=function(n){return new Promise((function(r,a){var i=o.miniCssF(n),s=o.p+i;if(t(i,s))return r();e(n,s,r,a)}))},r={143:0};o.f.miniCss=function(e,t){var o={469:1,692:1,905:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=a);var i=o.p+o.u(t),s=new Error,l=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};o.l(i,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],s=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var u=l(o)}for(t&&t(n);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},n=self["webpackChunkbro_rating"]=self["webpackChunkbro_rating"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6162)}));n=o.O(n)})();
//# sourceMappingURL=app.629800d0.js.map