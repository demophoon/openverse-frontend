(window.webpackJsonp=window.webpackJsonp||[]).push([[239,9,17,18,21,28,29,33],{1298:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(12);var runtime=__webpack_require__(2),CopyButton=__webpack_require__(1300),action_types=__webpack_require__(45),store_modules=__webpack_require__(54),usage_data_analytics_types=__webpack_require__(123),attribution_html=__webpack_require__(1356),license=__webpack_require__(486),VMediaInfo_VCopyLicensevue_type_script_lang_js_=Object(runtime.b)({name:"VCopyLicense",components:{CopyButton:CopyButton.default},props:{media:{type:Object},fullLicenseName:{type:String}},setup:function setup(props){var store=Object(runtime.p)().store,activeTab=Object(runtime.l)("rich"),licenseUrl=Object(runtime.a)((function(){return"".concat(props.media.license_url,"?ref=openverse")})),attributionHtml=Object(runtime.a)((function(){var licenseUrl="".concat(props.media.license_url,"&atype=html");return Object(attribution_html.a)(props.media,licenseUrl,props.fullLicenseName)})),sendDetailPageEvent=function sendDetailPageEvent(eventType){var eventData={eventType:eventType,resultUuid:props.media.id};store.dispatch("".concat(store_modules.h,"/").concat(usage_data_analytics_types.b),eventData)};return{activeTab:activeTab,attributionHtml:attributionHtml,isPDM:function isPDM(){return Object(license.c)(props.fullLicenseName)},licenseUrl:licenseUrl,onCreatorLinkClicked:function onCreatorLinkClicked(){sendDetailPageEvent(usage_data_analytics_types.a.CREATOR_CLICKED)},onSourceLinkClicked:function onSourceLinkClicked(){return sendDetailPageEvent(usage_data_analytics_types.a.SOURCE_CLICKED)},onCopyAttribution:function onCopyAttribution(type,event){store.dispatch("".concat(store_modules.b,"/").concat(action_types.c),{type:type,content:event.content}),sendDetailPageEvent(usage_data_analytics_types.a.ATTRIBUTION_CLICKED)},tabs:["rich","html","plain"],setActiveTab:function setActiveTab(tabIdx){return activeTab.value=tabIdx}}}}),componentNormalizer=__webpack_require__(10),component=Object(componentNormalizer.a)(VMediaInfo_VCopyLicensevue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",[_c("h5",{staticClass:"mb-4 text-base md:text-2xl font-semibold"},[_vm._v("\n    "+_vm._s(_vm.$t("media-details.reuse.copy-license.title"))+"\n  ")]),_vm._v(" "),_c("nav",{staticClass:"flex borber-b-none",attrs:{role:"tablist"}},_vm._l(_vm.tabs,(function(tab,idx){return _c("button",{key:idx,staticClass:"py-3 md:py-4 px-4 md:px-6 border-t border-x rounded-t-sm bg-white text-sm md:text-base font-semibold relative focus:border-tx focus:outline-none focus:shadow-[0_0_0_1.5px_#c52b9b_inset]",class:[_vm.activeTab===tab?"border-t-dark-charcoal-20 border-x-dark-charcoal-20 -mb-[1px]":"border-tx"],attrs:{role:"tab","aria-controls":"tab-"+tab,"aria-selected":_vm.activeTab===tab},on:{click:function($event){return $event.preventDefault(),_vm.setActiveTab(tab)},keyup:function($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")?null:($event.preventDefault(),_vm.setActiveTab(tab))}}},[_vm._v("\n      "+_vm._s(_vm.$t("media-details.reuse.copy-license."+tab))+"\n    ")])})),0),_vm._v(" "),_vm._l(_vm.tabs,(function(tab,idx){return _c("div",{key:idx,staticClass:"border border-dark-charcoal-20 p-4 md:p-6 text-sm md:text-base foxus:border-tx focus:outline-none focus:shadow-[0_0_0_1.5px_#c52b9b_inset]",class:{hidden:_vm.activeTab!==tab},attrs:{id:"tab-"+tab,"aria-labelledby":tab,role:"tabpanel",tabindex:"0"}},["rich"===tab?_c("i18n",{attrs:{id:"attribution-rich",path:"media-details.reuse.credit.text",tag:"p"},scopedSlots:_vm._u([{key:"title",fn:function(){return[_c("a",{attrs:{href:_vm.media.foreign_landing_url,target:"_blank",rel:"noopener"},on:{click:_vm.onSourceLinkClicked,keyup:function($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")?null:_vm.onSourceLinkClicked.apply(null,arguments)}}},[_vm._v(_vm._s(_vm.media.title))])]},proxy:!0},{key:"creator",fn:function(){return[_vm.media.creator?_c("i18n",{attrs:{path:"media-details.reuse.credit.creator-text",tag:"span"},scopedSlots:_vm._u([{key:"creator-name",fn:function(){return[_vm.media.creator_url?_c("a",{attrs:{href:_vm.media.creator_url,target:"_blank",rel:"noopener"},on:{click:_vm.onCreatorLinkClicked,keyup:function($event){return!$event.type.indexOf("key")&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")?null:_vm.onCreatorLinkClicked.apply(null,arguments)}}},[_vm._v(_vm._s(_vm.media.creator))]):_c("span",[_vm._v(_vm._s(_vm.media.creator))])]},proxy:!0}],null,!0)}):_vm._e()]},proxy:!0},{key:"marked-licensed",fn:function(){return[_vm._v("\n        "+_vm._s(_vm.isPDM?_vm.$t("media-details.reuse.credit.marked"):_vm.$t("media-details.reuse.credit.licensed"))+"\n      ")]},proxy:!0},{key:"license",fn:function(){return[_c("a",{staticClass:"uppercase",attrs:{href:_vm.licenseUrl,target:"_blank",rel:"noopener"}},[_vm._v(_vm._s(_vm.fullLicenseName))])]},proxy:!0}],null,!0)}):_vm._e(),_vm._v(" "),"html"===tab?_c("label",{attrs:{for:"attribution-html"}},[_c("textarea",{staticClass:"w-full font-mono h-auto resize-none",attrs:{id:"attribution-html",rows:"4",dir:"ltr",readonly:""},domProps:{value:_vm.attributionHtml}})]):_vm._e(),_vm._v(" "),"plain"===tab?_c("i18n",{attrs:{id:"attribution-plain",path:"media-details.reuse.credit.text",tag:"p"},scopedSlots:_vm._u([{key:"title",fn:function(){return[_vm._v(_vm._s(_vm.media.title))]},proxy:!0},{key:"creator",fn:function(){return[_vm.media.creator?_c("i18n",{attrs:{path:"media-details.reuse.credit.creator-text"},scopedSlots:_vm._u([{key:"creator-name",fn:function(){return[_vm._v(_vm._s(_vm.media.creator))]},proxy:!0}],null,!0)}):_vm._e()]},proxy:!0},{key:"marked-licensed",fn:function(){return[_vm._v("\n        "+_vm._s(_vm.isPDM?_vm.$t("media-details.reuse.credit.marked"):_vm.$t("media-details.reuse.credit.licensed"))+"\n      ")]},proxy:!0},{key:"license",fn:function(){return[_vm._v(" "+_vm._s(_vm.fullLicenseName))]},proxy:!0},{key:"view-legal",fn:function(){return[_c("i18n",{attrs:{path:"media-details.reuse.credit.view-legal-text"},scopedSlots:_vm._u([{key:"terms-copy",fn:function(){return[_vm._v("\n            "+_vm._s(_vm.isPDM?_vm.$t("media-details.reuse.credit.terms-text"):_vm.$t("media-details.reuse.credit.copy-text"))+"\n          ")]},proxy:!0},_vm.licenseUrl?{key:"URL",fn:function(){return[_vm._v("\n            "+_vm._s(_vm.licenseUrl)+"\n          ")]},proxy:!0}:null],null,!0)})]},proxy:!0}],null,!0)}):_vm._e(),_vm._v(" "),_c("CopyButton",{staticClass:"mt-6 md:mt-10",attrs:{id:"copyattr-"+tab,el:"#attribution-"+tab},on:{copied:function(e){return _vm.onCopyAttribution(tab,e)}}})],1)}))],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{CopyButton:__webpack_require__(1300).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VCopyLicense",exportName:"default",description:"",tags:{},props:[{name:"media",type:{name:"object"}},{name:"fullLicenseName",type:{name:"string"}}]}},1299:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var license=__webpack_require__(486),VMediaInfo_VMediaLicensevue_type_script_lang_js_={name:"MediaLicense",components:{LicenseElements:__webpack_require__(487).default},props:{fullLicenseName:String,license:String,licenseUrl:String},computed:{isLicense:function isLicense(){return Object(license.b)(this.$props.license)},headerText:function headerText(){var licenseOrTool=this.isLicense?"license":"tool";return this.$t("media-details.reuse.".concat(licenseOrTool,"-header"))}}},componentNormalizer=__webpack_require__(10),component=Object(componentNormalizer.a)(VMediaInfo_VMediaLicensevue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"media-attribution"},[_c("h5",{staticClass:"mb-4 text-base md:text-2xl font-semibold"},[_vm._v("\n    "+_vm._s(_vm.headerText)+"\n  ")]),_vm._v(" "),_vm.isLicense?[_c("i18n",{staticClass:"block text-sm md:text-base",attrs:{path:"media-details.reuse.attribution",tag:"span"},scopedSlots:_vm._u([{key:"link",fn:function(){return[_c("a",{staticClass:"uppercase text-pink",attrs:{href:_vm.licenseUrl,target:"_blank",rel:"noopener"}},[_vm._v("\n          "+_vm._s(_vm.fullLicenseName)+"\n        ")])]},proxy:!0}],null,!1,4191602187)}),_vm._v(" "),_c("LicenseElements",{staticClass:"md:py-4",attrs:{license:_vm.license}}),_vm._v(" "),_vm.isLicense?_vm._e():_c("i18n",{staticClass:"caption font-semibold",attrs:{path:"media-details.reuse.license.content",tag:"span"},scopedSlots:_vm._u([{key:"link",fn:function(){return[_c("a",{staticClass:"text-pink",attrs:{"aria-label":_vm.$t("media-details.aria.attribution.license"),href:_vm.licenseUrl,target:"_blank",rel:"noopener"}},[_vm._v(_vm._s(_vm.$t("media-details.reuse.license.link")))])]},proxy:!0}],null,!1,3283443018)})]:[_c("LicenseElements",{staticClass:"md:py-4",attrs:{license:_vm.license}}),_vm._v(" "),_c("i18n",{staticClass:"caption font-semibold",attrs:{path:"media-details.reuse.tool.content",tag:"span"},scopedSlots:_vm._u([{key:"link",fn:function(){return[_c("a",{staticClass:"text-pink",attrs:{"aria-label":_vm.$t("media-details.aria.attribution.tool"),href:_vm.licenseUrl,target:"_blank",rel:"noopener"}},[_vm._v(_vm._s(_vm.$t("media-details.reuse.tool.link")))])]},proxy:!0}])})]],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{LicenseElements:__webpack_require__(487).default}),__vuedocgen_export_0.__docgenInfo={displayName:"MediaLicense",exportName:"default",description:"",tags:{},props:[{name:"fullLicenseName",type:{name:"string"}},{name:"license",type:{name:"string"}},{name:"licenseUrl",type:{name:"string"}}]}},1305:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__(2),license=__webpack_require__(486),VCopyLicense=__webpack_require__(1298),VMediaLicense=__webpack_require__(1299),VMediaInfo_VMediaReusevue_type_script_lang_js_=Object(runtime.b)({name:"VMediaReuse",components:{VCopyLicense:VCopyLicense.default,VMediaLicense:VMediaLicense.default},props:{media:{type:Object,required:!0}},setup:function setup(props){return{fullLicenseName:Object(runtime.a)((function(){return Object(license.a)(props.media.license,props.media.license_version)}))}}}),componentNormalizer=__webpack_require__(10),component=Object(componentNormalizer.a)(VMediaInfo_VMediaReusevue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("section",{attrs:{"aria-label":_vm.$t("media-details.reuse.title")}},[_c("h3",{staticClass:"text-2xl md:text-3xl mb-6"},[_vm._v("\n    "+_vm._s(_vm.$t("media-details.reuse.title"))+"\n  ")]),_vm._v(" "),_c("div",{staticClass:"columns"},[_c("VMediaLicense",{staticClass:"column",attrs:{license:_vm.media.license,"license-url":_vm.media.license_url,"full-license-name":_vm.fullLicenseName}}),_vm._v(" "),_c("VCopyLicense",{staticClass:"column",attrs:{media:_vm.media,"full-license-name":_vm.fullLicenseName}})],1)])}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VMediaLicense:__webpack_require__(1299).default,VCopyLicense:__webpack_require__(1298).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VMediaReuse",exportName:"default",description:"",tags:{},props:[{name:"media",type:{name:"object"},required:!0}]}},1306:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(8),__webpack_require__(4),__webpack_require__(14),__webpack_require__(26),__webpack_require__(15),__webpack_require__(28),__webpack_require__(11);var defineProperty=__webpack_require__(5),action_types=(__webpack_require__(7),__webpack_require__(45)),store_modules=__webpack_require__(54),vuex_esm=__webpack_require__(197);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var AudioDetails_VAudioTagsvue_type_script_lang_js_={name:"VAudioTags",props:["tags","header"],computed:{showHeader:function showHeader(){return""!==this.$props.header}},methods:_objectSpread(_objectSpread({},Object(vuex_esm.b)(store_modules.g,{setSearchTerm:action_types.p})),{},{isClarifaiTag:function isClarifaiTag(provider){return"clarifai"===provider},searchByTagName:function searchByTagName(query){this.setSearchTerm({q:query})},getValidTags:function getValidTags(){return this.$props.tags.filter((function(tag){return!!tag.name}))}})},componentNormalizer=__webpack_require__(10),component=Object(componentNormalizer.a)(AudioDetails_VAudioTagsvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _vm.tags&&_vm.tags.length?_c("div",{staticClass:"media_tags"},[_vm.showHeader?_c("h3",{staticClass:"b-header"},[_vm._v("\n    "+_vm._s(_vm.header)+"\n  ")]):_vm._e(),_vm._v(" "),_c("div",_vm._l(_vm.getValidTags(),(function(tag,index){return _c("MediaTag",{key:index,staticClass:"me-4 inline",on:{click:_vm.searchByTagName}},[_vm._v("\n      "+_vm._s(tag.name)+"\n    ")])})),1)]):_vm._e()}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{MediaTag:__webpack_require__(219).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAudioTags",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"undefined"}},{name:"header",type:{name:"undefined"}}]}},1307:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var components_LoadingIconvue_type_script_lang_js_={name:"LoadingIcon"},componentNormalizer=(__webpack_require__(1371),__webpack_require__(10));const __vuedocgen_export_0=Object(componentNormalizer.a)(components_LoadingIconvue_type_script_lang_js_,(function(){var _h=this.$createElement;this._self._c;return this._m(0)}),[function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"lds-ring"},[_c("div"),this._v(" "),_c("div"),this._v(" "),_c("div"),this._v(" "),_c("div")])}],!1,null,"7f2b418a",null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"LoadingIcon",exportName:"default",description:"",tags:{}}},1320:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(8),__webpack_require__(4),__webpack_require__(14),__webpack_require__(26),__webpack_require__(15),__webpack_require__(28),__webpack_require__(7);var defineProperty=__webpack_require__(5),Case=__webpack_require__(468);function getProviderName(providersList,providerCode){if(!providersList)return Object(Case.capital)(providerCode)||"";var provider=providersList.filter((function(p){return p.source_name===providerCode}))[0];return provider?provider.display_name:Object(Case.capital)(providerCode)||""}var store_modules=__webpack_require__(54),vuex_esm=__webpack_require__(197);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var AudioDetails_VAudioDetailsvue_type_script_lang_js_={name:"VAudioDetails",props:["audio"],computed:_objectSpread(_objectSpread({},Object(vuex_esm.d)(store_modules.f,["audioProviders"])),{},{providerName:function providerName(){return getProviderName(this.audioProviders,this.$props.audio.provider)},sourceName:function sourceName(){return getProviderName(this.audioProviders,this.$props.audio.source)}})},componentNormalizer=(__webpack_require__(1391),__webpack_require__(10)),component=Object(componentNormalizer.a)(AudioDetails_VAudioDetailsvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("section",{staticClass:"audio-info"},[_c("h4",{staticClass:"b-header mb-6"},[_vm._v("Audio information")]),_vm._v(" "),_c("div",{staticClass:"mb-6 audio-info__grid"},[_c("VAudioThumbnail",{attrs:{audio:_vm.audio}}),_vm._v(" "),_c("div",{staticClass:"audio-info__data"},[_vm.audio.description?_c("p",{staticClass:"mb-6"},[_vm._v(_vm._s(_vm.audio.description))]):_vm._e(),_vm._v(" "),_c("VAudioTags",{staticClass:"mb-6",attrs:{tags:_vm.audio.tags,"show-header":!1}}),_vm._v(" "),_vm.audio?_c("dl",[_vm.audio.audio_set?_c("div",[_c("dt",[_vm._v(_vm._s(_vm.$t("audio-details.table.album")))]),_vm._v(" "),_c("dd",[_c("a",{attrs:{href:_vm.audio.audio_set.url}},[_vm._v(_vm._s(_vm.audio.audio_set.name))])])]):_vm._e(),_vm._v(" "),_vm.audio.category?_c("div",[_c("dt",[_vm._v(_vm._s(_vm.$t("audio-details.table.category")))]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.audio.category)+"\n          ")])]):_vm._e(),_vm._v(" "),_vm.audio.sample_rate?_c("div",[_c("dt",[_vm._v("\n            "+_vm._s(_vm.$t("audio-details.table.sample-rate"))+"\n          ")]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.audio.sample_rate)+"\n          ")])]):_vm._e(),_vm._v(" "),_vm.audio.filetype?_c("div",[_c("dt",[_vm._v("\n            "+_vm._s(_vm.$t("audio-details.table.filetype"))+"\n          ")]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.audio.filetype.toUpperCase())+"\n          ")])]):_vm._e(),_vm._v(" "),_c("div",[_c("dt",[_vm._v("\n            "+_vm._s(_vm.$t("audio-details.table.provider"))+"\n          ")]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.providerName)+"\n          ")])]),_vm._v(" "),_vm.audio.source?_c("div",[_c("dt",[_vm._v("\n            "+_vm._s(_vm.$t("audio-details.table.source"))+"\n          ")]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.sourceName)+"\n          ")])]):_vm._e(),_vm._v(" "),_vm.audio.genres?_c("div",[_c("dt",[_vm._v("\n            "+_vm._s(_vm.$t("audio-details.table.genre"))+"\n          ")]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.audio.genres.join(", "))+"\n          ")])]):_vm._e()]):_vm._e()],1)],1)])}),[],!1,null,"b70ceea2",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioThumbnail:__webpack_require__(130).default,VAudioTags:__webpack_require__(1306).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAudioDetails",exportName:"default",description:"",tags:{},props:[{name:"audio",type:{name:"undefined"}}]}},1324:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__(2),media=__webpack_require__(16),use_related=__webpack_require__(1370),AudioDetails_VRelatedAudiovue_type_script_lang_js_={name:"VRelatedAudio",props:{audioId:{type:String,required:!0},service:{}},setup:function setup(props){var mainAudioId=Object(runtime.l)(props.audioId),relatedOptions={mediaType:media.b,mediaId:mainAudioId};return props.service&&(relatedOptions.service=props.service),{audios:Object(use_related.a)(relatedOptions).media}}},componentNormalizer=__webpack_require__(10),component=Object(componentNormalizer.a)(AudioDetails_VRelatedAudiovue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("aside",{attrs:{"aria-label":_vm.$t("photo-details.aria.related")}},[_c("h4",{staticClass:"b-header mb-6"},[_vm._v("\n    "+_vm._s(_vm.$t("audio-details.related-audios"))+"\n  ")]),_vm._v(" "),_vm.$fetchState.error?_vm._e():[_vm._l(_vm.audios,(function(audio){return _c("VAudioTrack",{key:audio.id,staticClass:"mb-12",attrs:{audio:audio,layout:"row",size:"m"}})})),_vm._v(" "),_c("LoadingIcon",{directives:[{name:"show",rawName:"v-show",value:_vm.$fetchState.pending,expression:"$fetchState.pending"}]})],_vm._v(" "),_c("p",{directives:[{name:"show",rawName:"v-show",value:!!_vm.$fetchState.error,expression:"!!$fetchState.error"}]},[_vm._v("\n    "+_vm._s(_vm.$t("media-details.related-error"))+"\n  ")])],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioTrack:__webpack_require__(177).default,LoadingIcon:__webpack_require__(1307).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VRelatedAudio",exportName:"default",description:"",tags:{},props:[{name:"audioId",type:{name:"string"},required:!0},{name:"service"}]}},1356:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(12),__webpack_require__(67),__webpack_require__(27),__webpack_require__(59),__webpack_require__(21);__webpack_exports__.a=function getAttributionHtml(media,licenseUrl,fullLicenseName){if(!media)return"";var baseAssetsPath="https://search.creativecommons.org/static/img",imgLink='<a href="'.concat(media.foreign_landing_url,'">"').concat(media.title,'"</a>'),creator="",mediaTag="";media.url&&media.title&&(mediaTag='<img style="display: block;" src="'.concat(media.url,'" alt="').concat(media.title,'">')),media.creator&&media.creator_url?creator='<span> by <a href="'.concat(media.creator_url,'">').concat(media.creator,"</a></span>"):media.creator&&!media.creator_url&&(creator="<span> by <span>".concat(media.creator,"</span></span>"));var licenseLink=' is licensed under <a href="'.concat(licenseUrl,'" style="margin-right: 5px;">').concat(fullLicenseName.toUpperCase(),"</a>"),licenseIcons='<img style="height: inherit;margin-right: 3px;display: inline-block;" src="'.concat(baseAssetsPath,"/cc_icon.svg?media_id=").concat(media.id,'" />');media.license&&(licenseIcons+=media.license.split("-").map((function(license){return'<img style="height: inherit;margin-right: 3px;display: inline-block;" src="'.concat(baseAssetsPath,"/cc-").concat(license.toLowerCase(),'_icon.svg" />')})).join(""));var licenseImgLink='<a href="'.concat(licenseUrl,'" target="_blank" rel="noopener noreferrer" style="display: inline-block;white-space: none;margin-top: 2px;margin-left: 3px;height: 22px !important;">').concat(licenseIcons,"</a>");return'<p style="font-size: 0.9rem;font-style: italic;">'.concat(mediaTag).concat(imgLink).concat(creator).concat(licenseLink).concat(licenseImgLink,"</p>")}},1357:function(module,exports,__webpack_require__){var content=__webpack_require__(1372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(58).default)("1ce11c38",content,!0,{sourceMap:!1})},1369:function(module,exports,__webpack_require__){var content=__webpack_require__(1392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(58).default)("3b61b804",content,!0,{sourceMap:!1})},1370:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useRelated}));var _services,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(34),_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_data_audio_service__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(72),__webpack_require__(488)),_data_image_service__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(489),_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),_constants_media__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16),services=(_services={},Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.a)(_services,_constants_media__WEBPACK_IMPORTED_MODULE_6__.b,_data_audio_service__WEBPACK_IMPORTED_MODULE_3__.a),Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.a)(_services,_constants_media__WEBPACK_IMPORTED_MODULE_6__.c,_data_image_service__WEBPACK_IMPORTED_MODULE_4__.a),_services);function useRelated(_ref){var mediaType=_ref.mediaType,mediaId=_ref.mediaId,_ref$service=_ref.service,service=void 0===_ref$service?services[mediaType]:_ref$service,media=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_5__.l)([]);return(0,Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_5__.q)(Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.a)(regeneratorRuntime.mark((function _callee(){var response;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,service.getRelatedMedia({id:mediaId.value});case 2:response=_context.sent,media.value=response.data.results;case 4:case"end":return _context.stop()}}),_callee)})))).fetch)(),{media:media}}},1371:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1357)},1372:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(57)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".lds-ring[data-v-7f2b418a]{display:inline-block;position:relative;width:64px;height:64px}.lds-ring div[data-v-7f2b418a]{display:block;position:absolute;width:51px;height:51px;margin:6px;border-radius:50%;-webkit-animation:lds-ring-data-v-7f2b418a 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-data-v-7f2b418a 1.2s cubic-bezier(.5,0,.5,1) infinite;border:6px solid transparent;border-top-color:#3b3b3b}.lds-ring div[data-v-7f2b418a]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-7f2b418a]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-7f2b418a]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-data-v-7f2b418a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes lds-ring-data-v-7f2b418a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1391:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1369)},1392:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(57)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".audio-info__grid[data-v-b70ceea2]{display:grid;grid-template-columns:110px auto;grid-template-rows:repeat(auto-fit,1fr);grid-gap:1.5rem}dl[data-v-b70ceea2]{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));grid-gap:1.5rem}dl div[data-v-b70ceea2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}dt[data-v-b70ceea2]{font-weight:400;display:inline-block}dd[data-v-b70ceea2]{font-weight:700}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1409:function(module,exports,__webpack_require__){var content=__webpack_require__(1475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(58).default)("000f50ac",content,!0,{sourceMap:!1})},1474:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1409)},1475:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(57)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".audio-page{--wp-max-width:940px}.audio-page .full-track .mx-16,.audio-page aside,.audio-page section{max-width:var(--wp-max-width);margin-right:auto;margin-left:auto}.audio-page .full-track .mx-16{margin-top:1.50rem;padding-left:1.00rem;padding-right:1.00rem}@media (min-width: 768px){.audio-page .full-track .mx-16{padding-left:0;padding-right:0}}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___},1761:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(8),__webpack_require__(4),__webpack_require__(14),__webpack_require__(26),__webpack_require__(15),__webpack_require__(28),__webpack_require__(12),__webpack_require__(11),__webpack_require__(7);var asyncToGenerator=__webpack_require__(34),defineProperty=__webpack_require__(5),vuex_esm=(__webpack_require__(72),__webpack_require__(197)),action_types=__webpack_require__(45),iframe_height=__webpack_require__(618),media=__webpack_require__(16),attribution_html=__webpack_require__(1356),license=__webpack_require__(486),store_modules=__webpack_require__(54);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var audio_idvue_type_script_lang_js_={name:"AudioDetailPage",mixins:[iframe_height.a],data:function data(){return{thumbnailURL:null,breadCrumbURL:"",shouldShowBreadcrumb:!1,id:null}},computed:_objectSpread(_objectSpread({},Object(vuex_esm.d)(store_modules.d,["audio"])),{},{fullLicenseName:function fullLicenseName(){return Object(license.a)(this.audio.license,this.audio.license_version)},licenseUrl:function licenseUrl(){return"".concat(this.audio.license_url,"?ref=openverse")}}),watch:{audio:function audio(newAudio){this.id=newAudio.id}},asyncData:function asyncData(_ref){return Object(asyncToGenerator.a)(regeneratorRuntime.mark((function _callee(){var env,store,route,error,app;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return env=_ref.env,store=_ref.store,route=_ref.route,error=_ref.error,app=_ref.app,_context.prev=1,_context.next=4,store.dispatch("".concat(store_modules.d,"/").concat(action_types.d),{id:route.params.id});case 4:return _context.abrupt("return",{thumbnailURL:"".concat(env.apiUrl,"audio/").concat(route.params.id,"/thumb/"),id:route.params.id});case 7:_context.prev=7,_context.t0=_context.catch(1),error({statusCode:404,message:app.i18n.t("error.media-not-found",{mediaType:media.b,id:route.params.id})});case 10:case"end":return _context.stop()}}),_callee,null,[[1,7]])})))()},beforeRouteEnter:function beforeRouteEnter(to,from,nextPage){nextPage((function(_this){from.name!==_this.localeRoute({path:"/search/"}).name&&from.name!==_this.localeRoute({path:"/search/audio"}).name||(_this.shouldShowBreadcrumb=!0,_this.breadCrumbURL=from.fullPath)}))},methods:{attributionHtml:function attributionHtml(){var licenseUrl="".concat(this.licenseUrl,"&atype=html");return Object(attribution_html.a)(this.audio,licenseUrl,this.fullLicenseName)}},head:function head(){var title=this.audio.title;return{title:"".concat(title," - ").concat(this.$t("hero.brand"))}}},componentNormalizer=(__webpack_require__(1474),__webpack_require__(10)),component=Object(componentNormalizer.a)(audio_idvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"audio-page",attrs:{"aria-label":_vm.$t("photo-details.aria.main")}},[_c("VAudioTrack",{staticClass:"main-track",attrs:{audio:_vm.audio}}),_vm._v(" "),_c("VMediaReuse",{staticClass:"my-16 px-4 md:px-0",attrs:{"data-testid":"audio-attribution",media:_vm.audio}}),_vm._v(" "),_c("VAudioDetails",{staticClass:"my-16 px-4 lg:px-0",attrs:{"data-testid":"audio-info",audio:_vm.audio}}),_vm._v(" "),_vm.audio.id?_c("VRelatedAudio",{staticClass:"my-16 px-4 lg:px-0",attrs:{"audio-id":_vm.audio.id}}):_vm._e()],1)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioTrack:__webpack_require__(177).default,VMediaReuse:__webpack_require__(1305).default,VAudioDetails:__webpack_require__(1320).default,VRelatedAudio:__webpack_require__(1324).default}),__vuedocgen_export_0.__docgenInfo={description:"When the app is in embedded mode, it passes the full height\nof its content to the parent window so that the parent window\nsets the correct iframe height to avoid double scrollbars",tags:{},exportName:"default",displayName:"AudioDetailPage"}}}]);