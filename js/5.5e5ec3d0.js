(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"bg-grey-3 column"},[[a("div",{staticClass:"q-pa-md"},[a("q-card",[a("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"accent",align:"justify"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{attrs:{name:"mails",label:"Dev.to"}}),a("q-tab",{attrs:{name:"alarms",label:"Hackernoon"}}),a("q-tab",{attrs:{name:"movies",label:"hackerNews"}})],1),a("q-separator"),a("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"mails"}},[a("div",{staticClass:"text-h6"},[t._v("Dev.to")]),a("devtofetch")],1),a("q-splitter",{model:{value:t.splitterModel,callback:function(e){t.splitterModel=e},expression:"splitterModel"}}),a("q-tab-panel",{attrs:{name:"alarms"}},[a("div",{staticClass:"text-h6"},[t._v("Hackernoon")]),a("stackoverflowfetch")],1),a("q-tab-panel",{attrs:{name:"movies"}},[a("div",{staticClass:"text-h6"},[t._v("HackerNews")]),a("hackernewfetch")],1)],1)],1)],1)],t._v("s\n\n  ")],2)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"bg-grey-3 column"},[a("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"350px"}},[a("q-input",{staticClass:"q-px-lg q-pt-xl q-mb-md",attrs:{rounded:"",label:"Hack, Vue, Node, Linux..."},model:{value:t.inputSearch,callback:function(e){t.inputSearch=e},expression:"inputSearch"}}),a("q-btn",{attrs:{sizes:"md",rounded:"",color:"primary",label:"Search topics on Dev.to"},on:{click:function(e){return t.getDevtoArticle()}}})],1),a("q-separator"),[a("div",{staticClass:"q-pa-md"},[a("q-list",{attrs:{bordered:"",separator:""}},[t._l(t.listOfarticle,(function(e,s){return a("q-item",{key:s,staticClass:"q-px-lg q-pt-xl q-mb-md"},[a("q-item-section",[a("a",{attrs:{href:e.url}},[a("q-item-label",[t._v(t._s(e.title))])],1),a("q-item-label",{attrs:{caption:""}},[t._v("Author : "+t._s(e.user.name))]),a("q-item-label",{attrs:{caption:""}},[t._v("Description :"+t._s(e.description))])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-item-label",{attrs:{caption:""}},[t._v("Number of comments :"+t._s(e.comments_count))])],1)],1)})),a("q-separator",{attrs:{spaced:"",inset:""}})],2)],1)]],2)},n=[],o=(a("e6cf"),{props:["subject"],data(){return{expanded:!1,inputSearch:"hack",listOfarticle:null,listOfarticleHN:null,lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},methods:{getDevtoArticle(){let t="https://dev.to/api/articles?tag="+this.inputSearch;fetch(t).then((function(t){return t.json()})).then(t=>{this.listOfarticle=t,console.log(t)}).catch((function(t){console.log(t)}))}},mounted(){this.getDevtoArticle()}}),r=o,c=a("2877"),m=Object(c["a"])(r,l,n,!1,null,null,null),u=m.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"bg-grey-3 column"},[[a("div",{staticClass:"q-pa-md"},[a("q-list",{attrs:{bordered:"",separator:""}},[t._l(t.listOfarticleHN,(function(e,s){return a("q-item",{key:s,staticClass:"q-px-lg q-pt-xl q-mb-md"},[a("q-item-section",[a("a",{attrs:{href:e.url}},[a("q-item-label",[t._v(t._s(e.title))])],1),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.author))])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-item-label",{attrs:{caption:""}},[t._v("Number of comments :"+t._s(e.num_comments))])],1)],1)})),a("q-separator",{attrs:{spaced:"",inset:""}})],2)],1)]],2)},p=[],q={data(){return{expanded:!1,listOfarticleHN:null,lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},methods:{getHackernews(){let t="https://hn.algolia.com/api/v1/search?tags=front_page";fetch(t).then((function(t){return t.json()})).then(t=>{this.listOfarticleHN=t.hits,console.log(t)}).catch((function(t){console.log(t)}))}},mounted(){this.getHackernews()}},b=q,h=Object(c["a"])(b,d,p,!1,null,null,null),f=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"bg-grey-3 column"},[[t.listOfarticleHN?a("div",{staticClass:"q-pa-md"},[a("q-list",{attrs:{bordered:"",separator:""}},[t._l(t.listOfarticleHN,(function(e,s){return a("q-item",{key:s,staticClass:"q-px-lg q-pt-xl q-mb-md"},[a("q-item-section",[a("a",{attrs:{href:e.link}},[a("q-item-label",[t._v(t._s(e.title))])],1),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.author))])],1)],1)})),a("q-separator",{attrs:{spaced:"",inset:""}})],2)],1):t._e()]],2)},g=[],_={data(){return{expanded:!1,listOfarticleHN:null,lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},methods:{getHackernews(){let t="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fhackernoon.com%2Ffeed";fetch(t).then((function(t){return t.json()})).then(t=>{this.listOfarticleHN=t.items,console.log(t)}).catch((function(t){console.log(t)}))}},mounted(){this.getHackernews()}},x=_,k=Object(c["a"])(x,v,g,!1,null,null,null),C=k.exports,w={components:{devtofetch:u,hackernewfetch:f,stackoverflowfetch:C},data(){return{tab:"mails",innerTab:"innerMails",splitterModel:20}}},H=w,O=Object(c["a"])(H,s,i,!1,null,null,null);e["default"]=O.exports}}]);