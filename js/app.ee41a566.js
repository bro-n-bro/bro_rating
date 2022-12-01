(function(){"use strict";var e={5430:function(e,t,o){var n=o(9242),r=o(3556),a=o(3396),i=o(4870),s=o(2483),l={__name:"App",setup(e){const t=(0,s.yj)(),o=(0,a.Fl)((()=>t.meta.layout||"home-layout"));return(e,t)=>((0,a.wg)(),(0,a.j4)((0,a.LL)((0,i.SU)(o))))}};const c=l;var d=c,u=o(5258),m=o(5658),h={en:{message:{home_title:"Bro rating",home_desc:"Board was created by Bro_n_Bro validator<br> The best support for us - your delegations on Cyber, Osmo, NGM, Juno, Stars, Microtick, Gravity, Omniflix! Follow us on twitter on this and our other tools! 👊",compare_title:"Comparison result",compare_hide_options:"Hide identical options",compare_error_modal_title:"You are able to pin only {limit} validators",notice_default:"",notice_col_score:"The score of the validator by bro score.",notice_col_power:"The score of validator according by voting power.",notice_col_moniker:"The moniker of the validator.",notice_col_cost:"The cost optimization criteria of the validator. It depends on the validator’s commission ({greed}%) and decreases when the commission increases. It’s equal to zero if the commission of the validator is zero to avoid the advertising effect.",notice_col_decentralization:"This criterion helps decentralize the network. The decentralization level depends on the validator’s voting power rank ({validator_rank}). It logarithmically increases with increasing rank number.",notice_col_confidence:"The confidence of the validator depends on the share of tokens ({ownership}) which validator delegates to itself. It increases from 0 to 20% rapidly and then decreases back to zero, to avoid super-newby validators and CEXes.",notice_col_participation:"This criterion is about the number of votes ({voted}) for the last 5 ended proposals.",notice_col_reliability:"We can define reliability without any precommits calculations. To understand the reliability we can divide staked tokens ({staked} {token}) into delegator shares ({delegator_shares} {token}). The result should be equal to 1 if everything is ok and there is no token loss by slashing. Otherwise, the criterion points decrease with the result decrease.",notice_col_total:"The sum of the criteria points",rating_block_title:"Validators",last_updated:"Last updated",title_col_score:"Bro score",title_col_power:"Voting power",title_col_moniker:"Moniker",title_col_cost:"Cost optimization",title_col_cost2:"Cost endorsement",title_col_decentralization:"Decentralization",title_col_decentralization2:"Decentralization endorsement",title_col_confidence:"Confidence",title_col_confidence2:"Confidence endorsement",title_col_participation:"Participation",title_col_participation2:"Participation endorsement",title_col_reliability:"Reliability",title_col_reliability2:"Reliability endorsement",title_col_total:"Total",title_col_staked:"Staked",title_col_delegator_shares:"Delegator shares",title_col_greed:"Greed",title_col_ownership:"Ownership",title_col_voted:"Voted",title_col_isjailed:"Isjailed",title_col_total:"Total",filter_title:"Change visibility of columns",search_placeholder:"Validator name",choose_network_placeholder:"Choose network",compare_btn:"Compare",see_results_btn:"See results",delegate_btn:"Delegate",back_btn:"Back to Validators list"}}};const p=(0,m.o)({locale:"en",fallbackLocale:"en",messages:h});var _=p,f=o(6038);const v=e=>((0,a.dD)("data-v-9800a948"),e=e(),(0,a.Cn)(),e),g={class:"loader_wrap"},k=v((()=>(0,a._)("div",{class:"loader"},[(0,a._)("span")],-1))),b=[k];function w(e,t){return(0,a.wg)(),(0,a.iD)("div",g,b)}var y=o(89);const C={},O=(0,y.Z)(C,[["render",w],["__scopeId","data-v-9800a948"]]);var S=O,D=o(1373);const E=(0,D.Z)(),M=(0,n.ri)(d);M.use((0,r.WB)()),M.use(u.Z),M.use(_),M.use(f.Z),M.provide("i18n",_),M.provide("emitter",E),M.config.globalProperties.$filters={toFixed(e,t){return e.toFixed(t)}};const T={beforeMount:(e,t)=>{e.clickOutsideEvent=o=>{e==o.target||e.contains(o.target)||t.value()},document.addEventListener("click",e.clickOutsideEvent)},unmounted:e=>document.removeEventListener("click",e.clickOutsideEvent)},x={beforeMount:(e,t)=>{function o(e){for(const t of e)t.intersectionRatio>=.2&&t.target.classList.contains("animate")&&t.target.classList.add("animated")}const n=new IntersectionObserver(o,{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]});n.observe(e)}},I={beforeMount:(e,t)=>{function o(e){for(const t of e)t.intersectionRatio>=.2&&!t.target.classList.contains("loaded")&&(t.target.src=t.target.getAttribute("data-src"),t.target.classList.add("loaded"))}const n=new IntersectionObserver(o,{threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]});n.observe(e)}};M.directive("clickOut",T),M.directive("animate",x),M.directive("lazyload",I),M.component("Loader",S),M.mount("#app")},5258:function(e,t,o){o.d(t,{Z:function(){return J}});var n=o(2483),r=o(8326),a=o(3396),i=o(4870);const s=e=>((0,a.dD)("data-v-40503d67"),e=e(),(0,a.Cn)(),e),l={class:"absolute"},c=s((()=>(0,a._)("div",{class:"cont row"},[(0,a._)("a",{href:"https://bronbro.io",class:"logo"},[(0,a._)("img",{src:"/logo.svg",alt:""})])],-1))),d=[c];function u(e,t){return(0,a.wg)(),(0,a.iD)("header",l,d)}var m=o(89);const h={},p=(0,m.Z)(h,[["render",u],["__scopeId","data-v-40503d67"]]);var _=p,f={__name:"Home",setup(e){return(e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(_),(0,a.Wm)((0,i.SU)(n.MA))],64))}};const v=f;var g=v,k=o(3543),b=o(7139);const w={key:0,class:"notifications"},y={class:"data"},C=(0,a._)("div",{class:"icon"},[(0,a._)("svg",null,[(0,a._)("use",{"xlink:href":"/sprite.svg#ic_notification"})])],-1);var O={__name:"Notifications",setup(e){const t=(0,r.s)();return(e,o)=>(0,i.SU)(t).tooltip.length?((0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("div",y,[C,(0,a._)("div",null,(0,b.zw)((0,i.SU)(t).tooltip),1)])])):(0,a.kq)("",!0)}};const S=O;var D=S;const E=e=>((0,a.dD)("data-v-6e7b9aa8"),e=e(),(0,a.Cn)(),e),M={class:"cont row"},T=E((()=>(0,a._)("a",{href:"https://bronbro.io",class:"logo",target:"_blank",rel:"noopener"},[(0,a._)("img",{src:"/logo.svg",alt:""})],-1)));var x={__name:"Header",setup(e){return(e,t)=>{const o=(0,a.Q2)("animate");return(0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("div",M,[T,(0,a.wy)((0,a.Wm)(D,{class:"animate fadeInUp"},null,512),[[o]]),(0,a.wy)((0,a.Wm)(k.Z,{class:"animate fadeInRight",links:!0},null,512),[[o]])])])}}};const I=(0,m.Z)(x,[["__scopeId","data-v-6e7b9aa8"]]);var U=I,N=o(9242);const z={class:"compare_error animate fadeInUp"},A=(0,a._)("svg",null,[(0,a._)("use",{"xlink:href":"/sprite.svg#ic_close"})],-1),j=[A],V=(0,a._)("svg",{class:"icon"},[(0,a._)("use",{"xlink:href":"/sprite.svg#ic_error"})],-1),L={class:"title"};var B={__name:"CompareErrorModal",setup(e){const t=(0,a.f3)("emitter"),o=(0,r.s)();return(e,n)=>{const r=(0,a.Q2)("animate");return(0,a.wy)(((0,a.wg)(),(0,a.iD)("section",z,[(0,a._)("button",{class:"close_btn",onClick:n[0]||(n[0]=(0,N.iM)((e=>(0,i.SU)(t).emit("closeCompareErrorModal")),["prevent"]))},j),V,(0,a._)("div",null,[(0,a._)("div",L,(0,b.zw)(e.$t("message.compare_error_modal_title",{limit:(0,i.SU)(o).compareLimit})),1)])])),[[r]])}}};const R=B;var q=R,F={__name:"Network",setup(e){const t=(0,r.s)(),o=(0,a.f3)("i18n"),s=(0,a.f3)("emitter");return(0,a.bv)((()=>{t.tooltip=o.global.t("message.notice_default")})),s.on("showCompareErrorModal",(()=>{t.showCompareErrorModal=!0})),s.on("closeCompareErrorModal",(()=>{t.showCompareErrorModal=!1})),s.on("setNotification",(function(e){t.$patch({tooltip:e})})),(e,o)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(U),(0,a.Wm)((0,i.SU)(n.MA)),(0,i.SU)(t).showCompareErrorModal?((0,a.wg)(),(0,a.j4)(q,{key:0})):(0,a.kq)("",!0)],64))}};const H=F;var P=H,W={__name:"Compare",setup(e){const t=(0,r.s)(),o=(0,a.f3)("i18n");return(0,a.bv)((()=>{t.tooltip=o.global.t("message.notice_default")})),(e,t)=>{const o=(0,a.up)("RouterView");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(U),(0,a.Wm)(o)],64)}}};const Z=W;var $=Z;const Y=[{path:"/",name:"Home",component:()=>o.e(758).then(o.bind(o,8222)),meta:{layout:g}},{path:"/network",name:"Network",component:()=>o.e(828).then(o.bind(o,3828)),meta:{layout:P}},{path:"/compare",name:"Compare",component:()=>o.e(473).then(o.bind(o,9473)),meta:{layout:$}}],G=(0,n.p7)({history:(0,n.PO)(),routes:Y});G.beforeEach(((e,t,o)=>{const n=(0,r.s)(),a=document.querySelectorAll(".rating .validator .col_moniker .logo");a&&a.forEach((e=>{e.querySelector("img").classList.remove("hide"),e.style.backgroundColor="none"})),e.query.network&&n.currentNetwork!=e.query.network&&(n.currentNetwork=e.query.network),n.compareValidators.length<2&&"Compare"==e.name&&G.push({name:"Home"}),o()}));var J=G},8326:function(e,t,o){o.d(t,{s:function(){return r}});var n=o(3556);const r=(0,n.Q_)("global",{state:()=>({tooltip:"",compareLimit:3,compareValidators:[],compareIdenticalOptions:[],compareMinMaxValue:[],searchValidators:[],currentNetwork:"",showCompareErrorModal:!1,ratingData:{},colors:["#950FFF","#1BC562","#EB5757","#0343E8","#F79400","#DB11D3"],networks:{cosmoshub:{name:"Cosmos Hub",token:"ATOM",alias:"cosmoshub",mintscanAlias:"cosmos",exponent:1e6,token_name:"ATOM",chainId:"cosmoshub-4"},bostrom:{name:"Bostrom",token:"BOOT",alias:"bostrom",exponent:1e6,token_name:"MBOOT",chainId:"bostrom"},stargaze:{name:"Stargaze",token:"STARS",alias:"stargaze",mintscanAlias:"stargaze",exponent:1e6,token_name:"STARS",chainId:"stargaze-1"},juno:{name:"Juno",token:"JUNO",alias:"juno",mintscanAlias:"juno",exponent:1e6,token_name:"JUNO",chainId:"juno-1"},crescent:{name:"Crescent hub",token:"CRE",alias:"crescent",mintscanAlias:"crescent",exponent:1e6,token_name:"CRE",chainId:"crescent-1"},gravity:{name:"Gravity bridge",token:"GRAVITION",alias:"gravity",mintscanAlias:"gravity-bridge",exponent:1e6,token_name:"GRAV",chainId:"gravity-bridge-3"},osmosis:{name:"Osmosis",token:"OSMO",alias:"osmosis",mintscanAlias:"osmosis",exponent:1e6,token_name:"OSMO",chainId:"osmosis-1"},stride:{name:"Stride",token:"STRD",alias:"stride",mintscanAlias:"stride",exponent:1e6,token_name:"STRD",chainId:"stride-1"}}}),actions:{async getRatingData(){try{await fetch(`https://rpc.bronbro.io/bro_score/?network=${this.currentNetwork}`).then((e=>e.json())).then((e=>this.ratingData=e))}catch(e){console.log(e)}},addToCompare(e){this.ratingData.result.forEach(((t,o)=>{-1!=this.ratingData.result[o].indexOf(e)&&(this.compareValidators.push(this.ratingData.result[o]),this.ratingData.result[o].pinned=!0)}))},removeFromCompare(e){this.compareValidators.forEach(((t,o)=>{-1!=this.compareValidators[o].indexOf(e)&&this.compareValidators.splice(o,1)})),this.ratingData.result.forEach(((t,o)=>{-1!=this.ratingData.result[o].indexOf(e)&&(this.ratingData.result[o].pinned=!1)}))},sortData(e,t){let o=this.ratingData.result.sort(((t,o)=>t[e]>o[e]?1:t[e]<o[e]?-1:0));return"DESC"==t&&o.reverse(),o},setIdenticalOptions(){let e=[];this.compareValidators.forEach(((t,o)=>{t.forEach(((t,n)=>{e[n]==t?o>1?this.compareIdenticalOptions[this.ratingData.schema[n]]&&(this.compareIdenticalOptions[this.ratingData.schema[n]]=!0):this.compareIdenticalOptions[this.ratingData.schema[n]]=!0:this.compareIdenticalOptions[this.ratingData.schema[n]]=!1,e[n]=t}))}))},setMinMaxValue(){let e=[];this.compareValidators.forEach((t=>{t.forEach(((t,o)=>{e[this.ratingData.schema[o]]?e[this.ratingData.schema[o]].push(t):e[this.ratingData.schema[o]]=[t]}))})),setTimeout((()=>{for(let t in e){let o=e[t].indexOf(Math.max.apply(null,e[t])),n=e[t].indexOf(Math.min.apply(null,e[t]));this.compareMinMaxValue[t]={max:e[t].filter((n=>n==e[t][o])).length>1?null:o,min:e[t].filter((o=>o==e[t][n])).length>1?null:n}}}))}}})},3543:function(e,t,o){o.d(t,{Z:function(){return x}});var n=o(3396),r=o(9242),a=o(4870),i=o(7139),s=o(8326);const l={class:"choose_network"},c={class:"logo"},d=["src"],u={class:"name"},m={class:"token"},h={key:1,class:"placeholder"},p=(0,n._)("svg",{class:"arr"},[(0,n._)("use",{"xlink:href":"/sprite.svg#ic_arr_ver"})],-1),_={class:"mini_modal"},f={class:"scroll"},v={class:"logo"},g=["src"],k={class:"name"},b={class:"token"},w=(0,n._)("svg",{class:"icon"},[(0,n._)("use",{"xlink:href":"/sprite.svg#ic_check"})],-1),y=["onClick"],C={class:"logo"},O=["src"],S={class:"name"},D={class:"token"},E=(0,n._)("svg",{class:"icon"},[(0,n._)("use",{"xlink:href":"/sprite.svg#ic_check"})],-1);var M={__name:"ChooseNetwork",props:["links"],setup(e){const t=e,o=(0,s.s)();var M=(0,a.iH)(!1);function T(){M.value=!1}function x(e){M.value=!1,o.currentNetwork=e}return(0,n.m0)((()=>M.value=!1)),(e,s)=>{const I=(0,n.up)("router-link"),U=(0,n.Q2)("click-out");return(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",l,[(0,n._)("button",{class:"btn",onClick:s[0]||(s[0]=(0,r.iM)((e=>(0,a.dq)(M)?M.value=!(0,a.SU)(M):M=!(0,a.SU)(M)),["prevent"]))},[(0,a.SU)(o).currentNetwork.length?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("div",c,[(0,n._)("img",{src:`/${(0,a.SU)(o).networks[(0,a.SU)(o).currentNetwork].alias}_logo.png`,alt:""},null,8,d)]),(0,n._)("div",null,[(0,n._)("div",u,(0,i.zw)((0,a.SU)(o).networks[(0,a.SU)(o).currentNetwork].name),1),(0,n._)("div",m,(0,i.zw)((0,a.SU)(o).networks[(0,a.SU)(o).currentNetwork].token),1)])],64)):((0,n.wg)(),(0,n.iD)("span",h,(0,i.zw)(e.$t("message.choose_network_placeholder")),1)),p]),(0,n.wy)((0,n._)("div",_,[(0,n._)("div",f,[t.links?((0,n.wg)(!0),(0,n.iD)(n.HY,{key:0},(0,n.Ko)((0,a.SU)(o).networks,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t},[(0,n.Wm)(I,{class:(0,i.C_)(["network",{active:(0,a.SU)(o).currentNetwork==e.alias}]),to:{name:"Network",query:{network:e.alias}},onClick:s[1]||(s[1]=e=>(0,a.dq)(M)?M.value=!(0,a.SU)(M):M=!(0,a.SU)(M))},{default:(0,n.w5)((()=>[(0,n._)("div",v,[(0,n._)("img",{src:`/${e.alias}_logo.png`,alt:""},null,8,g)]),(0,n._)("div",null,[(0,n._)("div",k,(0,i.zw)(e.name),1),(0,n._)("div",b,(0,i.zw)(e.token),1)]),w])),_:2},1032,["class","to"])])))),128)):((0,n.wg)(!0),(0,n.iD)(n.HY,{key:1},(0,n.Ko)((0,a.SU)(o).networks,((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t},[(0,n._)("button",{class:(0,i.C_)(["network",{active:(0,a.SU)(o).currentNetwork==e.alias}]),onClick:t=>x(e.alias)},[(0,n._)("div",C,[(0,n._)("img",{src:`/${e.alias}_logo.png`,alt:""},null,8,O)]),(0,n._)("div",null,[(0,n._)("div",S,(0,i.zw)(e.name),1),(0,n._)("div",D,(0,i.zw)(e.token),1)]),E],10,y)])))),128))])],512),[[r.F8,(0,a.SU)(M)]])])),[[U,T]])}}};const T=M;var x=T}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,a){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],a=e[d][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,r,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/"+e+"."+{473:"11a3f5fd",758:"a2f98e15",828:"dd1d2ec2"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/"+e+"."+{473:"92ccf750",758:"3ea7bd64",828:"92263669"}[e]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="bro_rating:";o.l=function(n,r,a,i){if(e[n])e[n].push(r);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+a){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[r];var m=function(t,o){s.onerror=s.onload=null,clearTimeout(h);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),t)return t(o)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e=function(e,t,o,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)o();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,r.parentNode.removeChild(r),n(l)}};return r.onerror=r.onload=a,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){r=i[n],a=r.getAttribute("data-href");if(a===e||a===t)return r}},n=function(n){return new Promise((function(r,a){var i=o.miniCssF(n),s=o.p+i;if(t(i,s))return r();e(n,s,r,a)}))},r={143:0};o.f.miniCss=function(e,t){var o={473:1,758:1,828:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=a);var i=o.p+o.u(t),s=new Error,l=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};o.l(i,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,a,i=n[0],s=n[1],l=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var d=l(o)}for(t&&t(n);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(d)},n=self["webpackChunkbro_rating"]=self["webpackChunkbro_rating"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(5430)}));n=o.O(n)})();
//# sourceMappingURL=app.ee41a566.js.map