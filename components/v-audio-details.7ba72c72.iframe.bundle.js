(window.webpackJsonp=window.webpackJsonp||[]).push([[17,18],{1306:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(8),__webpack_require__(4),__webpack_require__(14),__webpack_require__(26),__webpack_require__(15),__webpack_require__(28),__webpack_require__(11);var defineProperty=__webpack_require__(5),action_types=(__webpack_require__(7),__webpack_require__(45)),store_modules=__webpack_require__(54),vuex_esm=__webpack_require__(197);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var AudioDetails_VAudioTagsvue_type_script_lang_js_={name:"VAudioTags",props:["tags","header"],computed:{showHeader:function showHeader(){return""!==this.$props.header}},methods:_objectSpread(_objectSpread({},Object(vuex_esm.b)(store_modules.g,{setSearchTerm:action_types.p})),{},{isClarifaiTag:function isClarifaiTag(provider){return"clarifai"===provider},searchByTagName:function searchByTagName(query){this.setSearchTerm({q:query})},getValidTags:function getValidTags(){return this.$props.tags.filter((function(tag){return!!tag.name}))}})},componentNormalizer=__webpack_require__(10),component=Object(componentNormalizer.a)(AudioDetails_VAudioTagsvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _vm.tags&&_vm.tags.length?_c("div",{staticClass:"media_tags"},[_vm.showHeader?_c("h3",{staticClass:"b-header"},[_vm._v("\n    "+_vm._s(_vm.header)+"\n  ")]):_vm._e(),_vm._v(" "),_c("div",_vm._l(_vm.getValidTags(),(function(tag,index){return _c("MediaTag",{key:index,staticClass:"me-4 inline",on:{click:_vm.searchByTagName}},[_vm._v("\n      "+_vm._s(tag.name)+"\n    ")])})),1)]):_vm._e()}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{MediaTag:__webpack_require__(219).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAudioTags",exportName:"default",description:"",tags:{},props:[{name:"tags",type:{name:"undefined"}},{name:"header",type:{name:"undefined"}}]}},1320:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(8),__webpack_require__(4),__webpack_require__(14),__webpack_require__(26),__webpack_require__(15),__webpack_require__(28),__webpack_require__(7);var defineProperty=__webpack_require__(5),Case=__webpack_require__(468);function getProviderName(providersList,providerCode){if(!providersList)return Object(Case.capital)(providerCode)||"";var provider=providersList.filter((function(p){return p.source_name===providerCode}))[0];return provider?provider.display_name:Object(Case.capital)(providerCode)||""}var store_modules=__webpack_require__(54),vuex_esm=__webpack_require__(197);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var AudioDetails_VAudioDetailsvue_type_script_lang_js_={name:"VAudioDetails",props:["audio"],computed:_objectSpread(_objectSpread({},Object(vuex_esm.d)(store_modules.f,["audioProviders"])),{},{providerName:function providerName(){return getProviderName(this.audioProviders,this.$props.audio.provider)},sourceName:function sourceName(){return getProviderName(this.audioProviders,this.$props.audio.source)}})},componentNormalizer=(__webpack_require__(1391),__webpack_require__(10)),component=Object(componentNormalizer.a)(AudioDetails_VAudioDetailsvue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("section",{staticClass:"audio-info"},[_c("h4",{staticClass:"b-header mb-6"},[_vm._v("Audio information")]),_vm._v(" "),_c("div",{staticClass:"mb-6 audio-info__grid"},[_c("VAudioThumbnail",{attrs:{audio:_vm.audio}}),_vm._v(" "),_c("div",{staticClass:"audio-info__data"},[_vm.audio.description?_c("p",{staticClass:"mb-6"},[_vm._v(_vm._s(_vm.audio.description))]):_vm._e(),_vm._v(" "),_c("VAudioTags",{staticClass:"mb-6",attrs:{tags:_vm.audio.tags,"show-header":!1}}),_vm._v(" "),_vm.audio?_c("dl",[_vm.audio.audio_set?_c("div",[_c("dt",[_vm._v(_vm._s(_vm.$t("audio-details.table.album")))]),_vm._v(" "),_c("dd",[_c("a",{attrs:{href:_vm.audio.audio_set.url}},[_vm._v(_vm._s(_vm.audio.audio_set.name))])])]):_vm._e(),_vm._v(" "),_vm.audio.category?_c("div",[_c("dt",[_vm._v(_vm._s(_vm.$t("audio-details.table.category")))]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.audio.category)+"\n          ")])]):_vm._e(),_vm._v(" "),_vm.audio.sample_rate?_c("div",[_c("dt",[_vm._v("\n            "+_vm._s(_vm.$t("audio-details.table.sample-rate"))+"\n          ")]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.audio.sample_rate)+"\n          ")])]):_vm._e(),_vm._v(" "),_vm.audio.filetype?_c("div",[_c("dt",[_vm._v("\n            "+_vm._s(_vm.$t("audio-details.table.filetype"))+"\n          ")]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.audio.filetype.toUpperCase())+"\n          ")])]):_vm._e(),_vm._v(" "),_c("div",[_c("dt",[_vm._v("\n            "+_vm._s(_vm.$t("audio-details.table.provider"))+"\n          ")]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.providerName)+"\n          ")])]),_vm._v(" "),_vm.audio.source?_c("div",[_c("dt",[_vm._v("\n            "+_vm._s(_vm.$t("audio-details.table.source"))+"\n          ")]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.sourceName)+"\n          ")])]):_vm._e(),_vm._v(" "),_vm.audio.genres?_c("div",[_c("dt",[_vm._v("\n            "+_vm._s(_vm.$t("audio-details.table.genre"))+"\n          ")]),_vm._v(" "),_c("dd",[_vm._v("\n            "+_vm._s(_vm.audio.genres.join(", "))+"\n          ")])]):_vm._e()]):_vm._e()],1)],1)])}),[],!1,null,"b70ceea2",null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioThumbnail:__webpack_require__(130).default,VAudioTags:__webpack_require__(1306).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VAudioDetails",exportName:"default",description:"",tags:{},props:[{name:"audio",type:{name:"undefined"}}]}},1369:function(module,exports,__webpack_require__){var content=__webpack_require__(1392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(58).default)("3b61b804",content,!0,{sourceMap:!1})},1391:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1369)},1392:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(57)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".audio-info__grid[data-v-b70ceea2]{display:grid;grid-template-columns:110px auto;grid-template-rows:repeat(auto-fit,1fr);grid-gap:1.5rem}dl[data-v-b70ceea2]{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));grid-gap:1.5rem}dl div[data-v-b70ceea2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}dt[data-v-b70ceea2]{font-weight:400;display:inline-block}dd[data-v-b70ceea2]{font-weight:700}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___}}]);