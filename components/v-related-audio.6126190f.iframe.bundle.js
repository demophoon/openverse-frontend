(window.webpackJsonp=window.webpackJsonp||[]).push([[33,9],{1307:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var components_LoadingIconvue_type_script_lang_js_={name:"LoadingIcon"},componentNormalizer=(__webpack_require__(1371),__webpack_require__(10));const __vuedocgen_export_0=Object(componentNormalizer.a)(components_LoadingIconvue_type_script_lang_js_,(function(){var _h=this.$createElement;this._self._c;return this._m(0)}),[function(){var _h=this.$createElement,_c=this._self._c||_h;return _c("div",{staticClass:"lds-ring"},[_c("div"),this._v(" "),_c("div"),this._v(" "),_c("div"),this._v(" "),_c("div")])}],!1,null,"7f2b418a",null).exports;__webpack_exports__.default=__vuedocgen_export_0;__vuedocgen_export_0.__docgenInfo={displayName:"LoadingIcon",exportName:"default",description:"",tags:{}}},1324:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var runtime=__webpack_require__(2),media=__webpack_require__(16),use_related=__webpack_require__(1370),AudioDetails_VRelatedAudiovue_type_script_lang_js_={name:"VRelatedAudio",props:{audioId:{type:String,required:!0},service:{}},setup:function setup(props){var mainAudioId=Object(runtime.l)(props.audioId),relatedOptions={mediaType:media.b,mediaId:mainAudioId};return props.service&&(relatedOptions.service=props.service),{audios:Object(use_related.a)(relatedOptions).media}}},componentNormalizer=__webpack_require__(10),component=Object(componentNormalizer.a)(AudioDetails_VRelatedAudiovue_type_script_lang_js_,(function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("aside",{attrs:{"aria-label":_vm.$t("photo-details.aria.related")}},[_c("h4",{staticClass:"b-header mb-6"},[_vm._v("\n    "+_vm._s(_vm.$t("audio-details.related-audios"))+"\n  ")]),_vm._v(" "),_vm.$fetchState.error?_vm._e():[_vm._l(_vm.audios,(function(audio){return _c("VAudioTrack",{key:audio.id,staticClass:"mb-12",attrs:{audio:audio,layout:"row",size:"m"}})})),_vm._v(" "),_c("LoadingIcon",{directives:[{name:"show",rawName:"v-show",value:_vm.$fetchState.pending,expression:"$fetchState.pending"}]})],_vm._v(" "),_c("p",{directives:[{name:"show",rawName:"v-show",value:!!_vm.$fetchState.error,expression:"!!$fetchState.error"}]},[_vm._v("\n    "+_vm._s(_vm.$t("media-details.related-error"))+"\n  ")])],2)}),[],!1,null,null,null);const __vuedocgen_export_0=component.exports;__webpack_exports__.default=__vuedocgen_export_0;installComponents(component,{VAudioTrack:__webpack_require__(177).default,LoadingIcon:__webpack_require__(1307).default}),__vuedocgen_export_0.__docgenInfo={displayName:"VRelatedAudio",exportName:"default",description:"",tags:{},props:[{name:"audioId",type:{name:"string"},required:!0},{name:"service"}]}},1357:function(module,exports,__webpack_require__){var content=__webpack_require__(1372);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);(0,__webpack_require__(58).default)("1ce11c38",content,!0,{sourceMap:!1})},1370:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return useRelated}));var _services,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(34),_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_data_audio_service__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(72),__webpack_require__(488)),_data_image_service__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(489),_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),_constants_media__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(16),services=(_services={},Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.a)(_services,_constants_media__WEBPACK_IMPORTED_MODULE_6__.b,_data_audio_service__WEBPACK_IMPORTED_MODULE_3__.a),Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.a)(_services,_constants_media__WEBPACK_IMPORTED_MODULE_6__.c,_data_image_service__WEBPACK_IMPORTED_MODULE_4__.a),_services);function useRelated(_ref){var mediaType=_ref.mediaType,mediaId=_ref.mediaId,_ref$service=_ref.service,service=void 0===_ref$service?services[mediaType]:_ref$service,media=Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_5__.l)([]);return(0,Object(_nuxtjs_composition_api__WEBPACK_IMPORTED_MODULE_5__.q)(Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.a)(regeneratorRuntime.mark((function _callee(){var response;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,service.getRelatedMedia({id:mediaId.value});case 2:response=_context.sent,media.value=response.data.results;case 4:case"end":return _context.stop()}}),_callee)})))).fetch)(),{media:media}}},1371:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(1357)},1372:function(module,exports,__webpack_require__){var ___CSS_LOADER_EXPORT___=__webpack_require__(57)((function(i){return i[1]}));___CSS_LOADER_EXPORT___.push([module.i,".lds-ring[data-v-7f2b418a]{display:inline-block;position:relative;width:64px;height:64px}.lds-ring div[data-v-7f2b418a]{display:block;position:absolute;width:51px;height:51px;margin:6px;border-radius:50%;-webkit-animation:lds-ring-data-v-7f2b418a 1.2s cubic-bezier(.5,0,.5,1) infinite;animation:lds-ring-data-v-7f2b418a 1.2s cubic-bezier(.5,0,.5,1) infinite;border:6px solid transparent;border-top-color:#3b3b3b}.lds-ring div[data-v-7f2b418a]:first-child{-webkit-animation-delay:-.45s;animation-delay:-.45s}.lds-ring div[data-v-7f2b418a]:nth-child(2){-webkit-animation-delay:-.3s;animation-delay:-.3s}.lds-ring div[data-v-7f2b418a]:nth-child(3){-webkit-animation-delay:-.15s;animation-delay:-.15s}@-webkit-keyframes lds-ring-data-v-7f2b418a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes lds-ring-data-v-7f2b418a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),___CSS_LOADER_EXPORT___.locals={},module.exports=___CSS_LOADER_EXPORT___}}]);